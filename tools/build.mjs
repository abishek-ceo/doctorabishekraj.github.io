#!/usr/bin/env node
// Static page builder for abishekhospital.com (no dependencies, Node 18+).
//   node tools/build.mjs
// Generates every HTML page, assets/icons.svg, sitemap.xml and robots.txt from the content in tools/.
// Never touches CNAME, doctor.png, hospital-logo.png or anything under assets/img/ and assets/fonts/.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { site } from './site.mjs';
import { renderPage, setSprite, usedIcons } from './lib.mjs';
import maternityPages from './pages/maternity.mjs';
import gynaePages from './pages/gynae.mjs';
import { home, doctor, videos, contact, faq } from './pages/core.mjs';
import { gallery, privacy, notFound } from './pages/misc.mjs';
import { dueDate, visitReminder } from './pages/tools.mjs';
import { hub, regionPages, tamilPage } from './pages/regions.mjs';
import { guidesHub, guidePages, taGuidePages } from './pages/guides.mjs';
import { taServicePages } from './pages/ta-services.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rd = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const write = (p, data) => { fs.mkdirSync(path.dirname(path.join(ROOT, p)), { recursive: true }); fs.writeFileSync(path.join(ROOT, p), data); };
const hash = (s) => crypto.createHash('md5').update(s).digest('hex').slice(0, 8);
const today = new Date().toISOString().slice(0, 10);

if (!exists('CNAME') || rd('CNAME').trim() !== 'abishekhospital.com') throw new Error('CNAME is missing or changed: refusing to build (it would break the custom domain).');

// ---- optional hospital photos (made by tools/make-images.py from the photos/ folder) ----
const photos = exists('assets/img/photos/photos.json') ? JSON.parse(rd('assets/img/photos/photos.json')) : [];
const captions = exists('photos/captions.json') ? JSON.parse(rd('photos/captions.json')) : {};
for (const p of photos) if (!captions[p.id]) console.warn(`  ! photo "${p.id}" has no entry in photos/captions.json (using a generic alt text)`);
const ordered = photos.slice().sort((a, b) => (captions[a.id]?.order ?? 99) - (captions[b.id]?.order ?? 99));

const pages = [
  home, ...maternityPages, ...gynaePages, hub, ...regionPages, tamilPage, guidesHub, ...guidePages, ...taGuidePages, ...taServicePages, doctor, videos, contact, faq,
  ...(ordered.length ? [gallery] : []),
  dueDate, visitReminder,
  privacy, notFound,
];

const ctx = {
  cssHref: `/assets/css/site.css?v=${hash(rd('assets/css/site.css'))}`,
  jsHref: `/assets/js/site.js?v=${hash(rd('assets/js/site.js'))}`,
  toolsJsHref: `/assets/js/tools.js?v=${hash(rd('assets/js/tools.js'))}`,
  photos: ordered,
  captions,
  hasGallery: ordered.length > 0,
};

// ---- pass 1: render to learn which icons are used; build the sprite; pass 2: final output ----
pages.forEach((p) => renderPage(p, ctx));
const lib = JSON.parse(rd('tools/icons.json'));
const missing = [...usedIcons].filter((n) => !lib.icons[n]);
if (missing.length) throw new Error(`Icons missing from tools/icons.json: ${missing.join(', ')}`);
const symbols = [...usedIcons].sort().map((n) => `<symbol id="${n}" viewBox="0 0 24 24">${lib.icons[n].svg}</symbol>`).join('');
const sprite = `<svg xmlns="http://www.w3.org/2000/svg"><!-- ${lib._licenses} -->${symbols}</svg>\n`;
write('assets/icons.svg', sprite);
setSprite(`/assets/icons.svg?v=${hash(sprite)}`);

const outFile = (p) => (p === '/' ? 'index.html' : p.endsWith('/') ? `${p.slice(1)}index.html` : p.slice(1));
const report = [];
for (const page of pages) {
  const html = renderPage(page, ctx);
  write(outFile(page.path), html);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const warn = [];
  if (h1s !== 1) warn.push(`${h1s} <h1>`);
  if (page.title.length > 75) warn.push(`title ${page.title.length} chars`);
  if (page.description.length > 165) warn.push(`description ${page.description.length} chars`);
  report.push(`${outFile(page.path).padEnd(52)} ${(Buffer.byteLength(html) / 1024).toFixed(1).padStart(6)} KB  ${warn.length ? '! ' + warn.join(', ') : ''}`);
}
if (!ctx.hasGallery && exists('gallery/index.html')) fs.rmSync(path.join(ROOT, 'gallery'), { recursive: true });

// ---- sitemap + robots ----
const indexable = pages.filter((p) => !p.noindex);   // no <changefreq>/<priority>: search engines ignore them
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  indexable.map((p) => `  <url>\n    <loc>${site.url}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n` +
    (p.alternates ? p.alternates.map(([l, h]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${site.url}${h}"/>\n`).join('') : '') + `  </url>`).join('\n') + `\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /tools/\nDisallow: /photos/\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages (${usedIcons.size} icons in sprite, ${(sprite.length / 1024).toFixed(1)} KB)${ctx.hasGallery ? `, ${ordered.length} gallery photos` : ', no gallery photos yet'}`);
console.log(report.join('\n'));
