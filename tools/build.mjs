#!/usr/bin/env node
// Static page builder for abishekhospital.com (no dependencies, Node 18+).
//   node tools/build.mjs
// Generates every HTML page, assets/icons.svg, sitemap.xml, robots.txt, llms.txt and llms-full.txt from the content in tools/.
// Never touches CNAME, doctor.png, hospital-logo.png or anything under assets/img/ and assets/fonts/.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { site, services, districts, stats, social, reviews, online } from './site.mjs';
import { renderPage, setSprite, usedIcons, stripTags } from './lib.mjs';
import maternityPages from './pages/maternity.mjs';
import gynaePages from './pages/gynae.mjs';
import moreCarePages from './pages/more-care.mjs';
import { home, doctor, videos, contact, faq, allFaqs } from './pages/core.mjs';
import { gallery, privacy, notFound } from './pages/misc.mjs';
import { dueDate, visitReminder } from './pages/tools.mjs';
import { hub, regionPages, tamilPage } from './pages/regions.mjs';
import { guidesHub, guidePages, taGuidePages } from './pages/guides.mjs';
import { taServicePages } from './pages/ta-services.mjs';
import { onlinePage, taOnlinePage, termsPage } from './pages/online.mjs';

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
  home, ...maternityPages, ...gynaePages, ...moreCarePages, hub, ...regionPages, tamilPage, guidesHub, ...guidePages, ...taGuidePages, ...taServicePages, onlinePage, taOnlinePage, doctor, videos, contact, faq,
  ...(ordered.length ? [gallery] : []),
  dueDate, visitReminder,
  privacy, termsPage, notFound,
];

const ctx = {
  enhanceHref: `/assets/css/enhance.css?v=${hash(rd('assets/css/enhance.css'))}`,   // loaded after first paint (media=print trick), see lib.mjs
  css: rd('tools/site.css').trim(),   // inlined into every page's <head>: no separate stylesheet request to wait for on a slow network
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
// AI search and assistant crawlers are named on purpose: they are already allowed by the * rule, and naming them makes the intent explicit.
// (Blocking any of them would stop that assistant from reading or quoting the site.)
const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'Amazonbot', 'Meta-ExternalAgent', 'DuckAssistBot', 'CCBot'];
const rules = 'Allow: /\nDisallow: /tools/\nDisallow: /photos/\n';
write('robots.txt', `User-agent: *\n${rules}\n${aiBots.map((b) => `User-agent: ${b}\n${rules}`).join('\n')}\nSitemap: ${site.url}/sitemap.xml\n`);

// ---- llms.txt and llms-full.txt: plain-language summaries for AI assistants (all facts come from tools/site.mjs and the page generators) ----
const abs = (p) => site.url + p;
const D = site.doctor.name;
const addr = `${site.address.line1}, ${site.address.area}, ${site.address.city} - ${site.address.pin}, ${site.address.state}, India`;
const facts = [
  `Name: ${site.name} (also written ${site.altName}), ${site.address.city}, ${site.address.state}, India`,
  `What it is: a women's health and maternity hospital (obstetrics and gynaecology). One hospital, at Erode Fort. There are no branches in other cities.`,
  `Address: ${addr}`,
  `Doctor: ${D}, ${site.doctor.role}, Academic Topper from ${site.doctor.college}${site.doctor.reg ? `. ${site.doctor.reg.body} registration number ${site.doctor.reg.no} (as supplied by the doctor)` : ''}. Over 40,000 safe deliveries.`,
  `Outpatient clinic hours: ${site.hours.opd}. Emergency care: ${site.hours.emergency}.`,
  `Phone and WhatsApp: ${site.phone.intl}. Email: ${site.email}`,
  `Languages: Tamil and English. Tamil pages: ${abs('/ta/')}`,
  `Online consultation (audio or video call with the gynaecologist): Rs ${online.fee} for up to ${online.minutes} minutes; the time slot is confirmed on WhatsApp based on the doctor's availability. ${abs('/' + online.slug + '/')}`,
  `Reviews: ${reviews.rating} rating from ${reviews.count} Google reviews (as shown on the hospital's Google Business Profile, November 2026). See them at ${reviews.view}`,
  `Numbers published by the hospital: ${stats.map((s) => `${s.n} ${s.label}`).join('; ')}.`,
  `Official channels: website ${site.url}; YouTube ${social[0].url} (${social[0].handle}); Instagram ${social[1].url}; Facebook ${social[2].url}`,
  `Google Maps: ${site.maps.view}`,
];
const svc = services.map((x) => `- [${x.short}](${abs('/' + x.slug + '/')}): ${x.blurb}`);
const enPages = [...guidePagesList()];
function guidePagesList() { return pages.filter((p) => p.path.startsWith('/women-health-guides/') && p.path !== '/women-health-guides/' && p.lang !== 'ta'); }
const guides = enPages.map((p) => `- [${stripTags(p.title)}](${abs(p.path)}): ${stripTags(p.description)}`);
const towns = districts.map((d) => `- [${d.name}](${abs('/womens-hospital-tamil-nadu/' + d.slug + '/')}): about ${d.km} km from Erode Fort, ${d.time} by road`);
const tamilPages = pages.filter((p) => p.lang === 'ta' && !p.noindex).map((p) => `- [${stripTags(p.title)}](${abs(p.path)})`);
const note = 'Health information on this website is general information, not a diagnosis or a substitute for an examination. In an emergency, go to the nearest hospital or call 108 / 112.';
write('llms.txt', `# ${site.name}, Erode, Tamil Nadu

> ${site.name} is a women's health and maternity hospital at Erode Fort, Tamil Nadu, India, led by ${D}, ${site.doctor.role}. It provides pregnancy and delivery care (normal, painless/epidural and caesarean), high-risk pregnancy care, gynaecology, PCOS treatment, fertility and IUI treatment, laparoscopic (keyhole) surgery and online consultation. Emergency care is available 24 hours.

## Key facts
${facts.map((f) => `- ${f}`).join('\n')}

## Services
${svc.join('\n')}

## Main pages
- [Home](${abs('/')}): overview, services and contact
- [Dr. Jayanthi Prabakaran](${abs(doctor.path)}): the doctor
- [FAQs](${abs('/faq/')}): answers to common questions
- [Contact and directions](${abs('/contact/')}): address, map, phone, hours
- [Women's health guides](${abs('/women-health-guides/')}): plain-language guides
- [Visiting from other towns](${abs('/womens-hospital-tamil-nadu/')}): travel from nearby towns
- [Videos](${abs('/videos/')}): free Tamil health videos on YouTube

## Women's health guides
${guides.join('\n')}

## Towns we serve
${towns.join('\n')}

## Tamil pages
${tamilPages.join('\n')}

## Optional
- [Full text version of this summary, with all FAQs](${abs('/llms-full.txt')})

${note}
`);
write('llms-full.txt', `# ${site.name}, Erode, Tamil Nadu: full summary

${site.name} is a women's health and maternity hospital at Erode Fort, Tamil Nadu, India. This file collects the hospital's key facts and frequently asked questions in one place. Source: ${site.url}

## Key facts
${facts.map((f) => `- ${f}`).join('\n')}

## Services
${services.map((x) => `### ${x.short}\n${x.blurb}\nPage: ${abs('/' + x.slug + '/')}`).join('\n\n')}

## Frequently asked questions
${allFaqs.map(([q, a]) => `### ${stripTags(q)}\n${stripTags(a)}`).join('\n\n')}

## Towns we serve
${towns.join('\n')}

${note}
`);


console.log(`Built ${pages.length} pages (${usedIcons.size} icons in sprite, ${(sprite.length / 1024).toFixed(1)} KB)${ctx.hasGallery ? `, ${ordered.length} gallery photos` : ', no gallery photos yet'}`);
console.log(report.join('\n'));
