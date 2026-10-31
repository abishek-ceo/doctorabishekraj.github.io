#!/usr/bin/env node
// Site checker: run after `node tools/build.mjs`.   node tools/check.mjs
// Verifies internal links/anchors/assets, icons, JSON-LD, titles/descriptions, headings, alt text and the sitemap.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://abishekhospital.com';
const problems = [];
const bad = (page, msg) => problems.push(`${page}: ${msg}`);

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['tools', 'node_modules', '.git', 'assets', 'photos'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
};
const files = walk(ROOT);
const rel = (f) => path.relative(ROOT, f);
const urlOf = (f) => { const r = '/' + rel(f).replace(/\\/g, '/'); return r.endsWith('/index.html') ? r.slice(0, -10) : r; };

const html = new Map(files.map((f) => [urlOf(f), fs.readFileSync(f, 'utf8')]));
const sprite = fs.existsSync(path.join(ROOT, 'assets/icons.svg')) ? fs.readFileSync(path.join(ROOT, 'assets/icons.svg'), 'utf8') : '';
const idsOf = (h) => new Set([...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const resolveFile = (p) => {
  p = p.split('?')[0];
  if (p.endsWith('/')) return html.has(p) ? p : null;
  if (html.has(p)) return p;
  return fs.existsSync(path.join(ROOT, p)) ? p : (html.has(p + '/') ? p + '/' : null);
};

const titles = new Map(), descs = new Map(), external = new Set();
for (const [url, h] of html) {
  const label = url;
  const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const canon = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!title) bad(label, 'missing <title>'); else { if (titles.has(title)) bad(label, `duplicate title with ${titles.get(title)}`); titles.set(title, label); }
  if (!desc) bad(label, 'missing meta description'); else { if (descs.has(desc)) bad(label, `duplicate description with ${descs.get(desc)}`); descs.set(desc, label); }
  if (canon !== SITE + url) bad(label, `canonical is ${canon}, expected ${SITE + url}`);
  if (!/<html lang="(en|ta)">/.test(h)) bad(label, 'missing <html lang>');
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) bad(label, `${h1} <h1> elements`);
  if (!/<meta name="viewport"/.test(h)) bad(label, 'missing viewport');

  const ids = idsOf(h);
  const idList = [...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  idList.filter((x, i) => idList.indexOf(x) !== i).forEach((x) => bad(label, `duplicate id "${x}"`));
  for (const m of h.matchAll(/aria-controls="([^"]+)"/g)) if (!ids.has(m[1])) bad(label, `aria-controls target #${m[1]} missing`);

  // images
  for (const m of h.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(m[0])) bad(label, `img without alt: ${m[0].slice(0, 80)}`);
  for (const m of h.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) if (!/rel="[^"]*noopener/.test(m[0])) bad(label, `target=_blank without noopener: ${m[0].slice(0, 80)}`);

  // links and assets
  const urls = [];
  for (const m of h.matchAll(/\s(?:href|src|imagesrcset|srcset|data-map|action)="([^"]+)"/g)) {
    const val = m[1];
    if (/srcset$/.test(m[0].trim().split('=')[0]) || /^\s*srcset/.test(m[0])) val.split(',').forEach((s) => urls.push(s.trim().split(/\s+/)[0]));
    else urls.push(val);
  }
  for (const u of urls) {
    if (!u || /^(mailto:|tel:|javascript:|data:)/.test(u)) continue;
    if (/^https?:/.test(u)) { external.add(u.split('?')[0]); continue; }
    if (u.startsWith('#')) { if (u.length > 1 && !ids.has(u.slice(1))) bad(label, `anchor ${u} has no target`); continue; }
    if (!u.startsWith('/')) { bad(label, `relative URL "${u}" (use root-relative)`); continue; }
    const [pathPart, frag] = u.split('#');
    const target = resolveFile(pathPart);
    if (!target) { bad(label, `broken link ${u}`); continue; }
    if (frag && html.has(target) && !idsOf(html.get(target)).has(frag)) bad(label, `${u}: #${frag} not found on ${target}`);
  }
  for (const m of h.matchAll(/<use href="[^"#]*#([^"]+)"/g)) if (!sprite.includes(`<symbol id="${m[1]}"`)) bad(label, `icon "${m[1]}" missing from sprite`);

  // structured data
  const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocks.length) bad(label, 'no JSON-LD');
  for (const b of blocks) {
    try {
      const g = JSON.parse(b[1]);
      const types = (g['@graph'] || [g]).map((n) => n['@type']);
      if (!types.includes('Hospital')) bad(label, 'JSON-LD has no Hospital node');
      for (const n of g['@graph'] || []) if (n['@type'] === 'FAQPage') {
        const visible = (h.match(/<summary>/g) || []).length;
        if (visible !== n.mainEntity.length) bad(label, `FAQPage has ${n.mainEntity.length} questions but ${visible} are visible`);
      }
    } catch (e) { bad(label, `invalid JSON-LD: ${e.message}`); }
  }
}

// sitemap / robots
const sm = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
for (const [url, h] of html) {
  const noindex = /name="robots" content="noindex/.test(h);
  const inMap = sm.includes(`<loc>${SITE}${url}</loc>`);
  if (!noindex && !inMap) bad(url, 'indexable page missing from sitemap.xml');
  if (noindex && inMap) bad(url, 'noindex page listed in sitemap.xml');
}
if (!fs.readFileSync(path.join(ROOT, 'robots.txt'), 'utf8').includes(`Sitemap: ${SITE}/sitemap.xml`)) bad('robots.txt', 'missing Sitemap line');
if (fs.readFileSync(path.join(ROOT, 'CNAME'), 'utf8').trim() !== 'abishekhospital.com') bad('CNAME', 'changed');

// leftovers: files in assets/ that no page, stylesheet or the manifest refers to (photos.json is read by the builder)
const corpus = [...html.values(), ...['tools/site.css', 'manifest.json'].map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8'))].join('\n');
const assetFiles = (dir) => fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? assetFiles(`${dir}/${e.name}`) : [`${dir}/${e.name}`]));
for (const f of assetFiles('assets')) if (!f.endsWith('photos.json') && !corpus.includes(path.basename(f))) bad(f, 'is not used by any page, stylesheet or the manifest (delete it)');

console.log(`Checked ${html.size} pages, ${titles.size} unique titles, ${external.size} external URLs.`);
console.log('External links:\n  ' + [...external].sort().join('\n  '));
if (problems.length) { console.log(`\n${problems.length} PROBLEM(S):\n- ` + problems.join('\n- ')); process.exit(1); }
console.log('\nAll checks passed.');
