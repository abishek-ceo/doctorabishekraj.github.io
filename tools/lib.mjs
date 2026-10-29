// Shared layout, components and structured data for the static page builder.
import { site, social, services, areas, tamil, featuredVideo, reviews } from './site.mjs';

export const usedIcons = new Set();
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const stripTags = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&rsquo;|&#8217;/g, '’').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// The live "Open now" line (filled in by assets/js/site.js). It sits on its own full-width row with its space reserved in the stylesheet, so filling it in never moves anything.
export const statusLine = (cls = '') =>
  `<p class="status-line${cls ? ' ' + cls : ''}" data-open-status data-days="${site.hours.days.join(',')}" data-closed="${site.hours.closedOn.join(',')}" data-open="${site.hours.open}" data-close="${site.hours.close}"></p>`;
// Browsers that support it fetch a page's HTML when a visitor hovers or presses a link, so the next page opens almost instantly.
const SPECULATION = JSON.stringify({ prefetch: [{ where: { and: [{ href_matches: '/*' }, { not: { selector_matches: '[target=_blank]' } }] }, eagerness: 'moderate' }] });

let SPRITE = '/assets/icons.svg';
export const setSprite = (href) => { SPRITE = href; };
export const icon = (name, cls = '') => {
  usedIcons.add(name);
  return `<svg class="i${cls ? ' ' + cls : ''}" aria-hidden="true" focusable="false"><use href="${SPRITE}#${name}"/></svg>`;
};

export const U = site.url;
export const wa = (text) => `https://wa.me/${site.phone.wa}?text=${encodeURIComponent(text)}`;
export const tel = `tel:${site.phone.tel}`;
export const slugUrl = (slug) => `/${slug}/`;
export const doctorUrl = slugUrl(site.doctor.slug);

export const btnWA = (text = 'Hello Abishek Hospital, I would like to book an appointment.', label = 'Book on WhatsApp', cls = 'btn btn-wa') =>
  `<a class="${cls}" href="${wa(text)}" target="_blank" rel="noopener">${icon('whatsapp')} ${label}</a>`;
export const btnCall = (label = `Call ${site.phone.display}`, cls = 'btn btn-primary') =>
  `<a class="${cls}" href="${tel}">${icon('phone')} ${label}</a>`;
export const btnDir = (label = 'Get directions', cls = 'btn btn-outline') =>
  `<a class="${cls}" href="${site.maps.directions}" target="_blank" rel="noopener">${icon('navigation')} ${label}</a>`;

export const btnReview = (label = 'Write a Google review', cls = 'btn btn-outline btn-sm') =>
  `<a class="${cls}" href="${reviews.write}" target="_blank" rel="noopener">${icon('star')} ${label}</a>`;

export const socialList = (cls = '') =>
  `<ul class="social${cls ? ' ' + cls : ''}">` +
  social.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label} – ${s.handle}">${icon(s.id)}</a></li>`).join('') +
  `<li><a href="${wa('Hello Abishek Hospital')}" target="_blank" rel="noopener" aria-label="WhatsApp – ${site.phone.display}">${icon('whatsapp')}</a></li></ul>`;

export const crumbs = (items) =>
  `<nav aria-label="Breadcrumb"><ol class="crumbs">` +
  items.map(([name, href], i) => (href && i < items.length - 1
    ? `<li><a href="${href}">${esc(name)}</a></li>`
    : `<li><span aria-current="page">${esc(name)}</span></li>`)).join('') + `</ol></nav>`;

export const faqBlock = (faqs) =>
  `<div class="faq">` + faqs.map(([q, a]) => `<details><summary>${q}</summary><div class="ans">${a}</div></details>`).join('') + `</div>`;

export const serviceCards = (list, withBlurb = true) =>
  `<div class="grid cards">` + list.map((s) =>
    `<a class="card" href="${s.href || slugUrl(s.slug)}"><span class="ico">${icon(s.icon)}</span><h3>${s.short}</h3>` +
    (withBlurb ? `<p>${s.blurb}</p>` : '') + `<span class="link-arrow">Learn more ${icon('arrow')}</span></a>`).join('') + `</div>`;

export const ctaBand = (title = 'Book a consultation with Dr. Jayanthi Prabakaran', text = 'Message us on WhatsApp, call, or walk in during clinic hours. Emergency care is available 24/7.', waText) =>
  `<section class="cta"><div class="wrap"><div class="box"><div><h2>${title}</h2><p>${text}</p></div>` +
  `<div class="btn-row">${btnWA(waText, 'WhatsApp us', 'btn btn-wa')}${btnCall(undefined, 'btn btn-light')}</div></div></div></section>`;

const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

/* ---------- structured data ---------- */
export function hospitalNode() {
  return {
    '@type': 'Hospital',
    '@id': `${U}/#hospital`,
    name: site.name,
    alternateName: site.altName,
    url: `${U}/`,
    logo: { '@type': 'ImageObject', url: `${U}/hospital-logo.png`, width: 500, height: 500 },
    image: [`${U}/assets/img/og-image.jpg`],
    telephone: site.phone.tel,
    email: site.email,
    description: 'Women’s health and maternity hospital at Erode Fort, Tamil Nadu, led by Dr. Jayanthi Prabakaran. Obstetrics and painless delivery, gynaecology, high-risk pregnancy care, PCOS treatment, fertility and IUI treatment, and laparoscopic surgery.',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', streetAddress: `${site.address.line1}, ${site.address.area}`, addressLocality: site.address.city, addressRegion: site.address.state, postalCode: site.address.pin, addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.maps.view,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: site.hours.days.map((d) => DAY_NAMES[d]), opens: site.hours.open, closes: site.hours.close },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: [...DAY_NAMES.slice(1), DAY_NAMES[0]], opens: '00:00', closes: '23:59', description: '24/7 emergency care' },
    ],
    medicalSpecialty: ['https://schema.org/Obstetric', 'https://schema.org/Gynecologic'],
    knowsAbout: ['Normal delivery', 'Painless (epidural) delivery', 'High-risk pregnancy care', 'PCOS and PCOD treatment', 'Infertility and IUI treatment', 'Laparoscopic gynaecological surgery', 'Menopause care', 'Family planning'],
    areaServed: areas.map((a) => ({ '@type': 'City', name: a })),
    sameAs: social.flatMap((s) => [s.url, ...(s.alt || [])]),
  };
}
export function doctorNode() {
  return {
    '@type': 'Physician',
    '@id': `${U}/#doctor`,
    name: site.doctor.name,
    jobTitle: site.doctor.role,
    description: `${site.doctor.name} is a Consultant Obstetrician & Gynaecologist at ${site.name}, Erode Fort. Academic Topper and Gold Medalist from ${site.doctor.college}, with over 40,000 safe deliveries.`,
    image: `${U}/assets/img/doctor-698.webp`,
    url: `${U}${doctorUrl}`,
    worksFor: { '@id': `${U}/#hospital` },
    hospitalAffiliation: { '@id': `${U}/#hospital` },
    medicalSpecialty: ['https://schema.org/Obstetric', 'https://schema.org/Gynecologic'],
    alumniOf: { '@type': 'CollegeOrUniversity', name: site.doctor.college },
    knowsAbout: ['Obstetrics', 'Gynaecology', 'High-risk pregnancy', 'Epidural (painless) delivery', 'Laparoscopic gynaecological surgery', 'IUI and infertility treatment', 'PCOS'],
    sameAs: social.flatMap((s) => [s.url, ...(s.alt || [])]),
  };
}

function graph(page) {
  const url = `${U}${page.path}`;
  const nodes = [
    { '@type': 'WebSite', '@id': `${U}/#website`, url: `${U}/`, name: site.name, inLanguage: 'en-IN', publisher: { '@id': `${U}/#hospital` } },
    hospitalNode(),
  ];
  if (page.withDoctor) nodes.push(doctorNode());
  const wp = { '@type': page.schemaType || 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'en-IN', isPartOf: { '@id': `${U}/#website` }, about: { '@id': `${U}/#hospital` } };
  if (page.specialty) wp.specialty = `https://schema.org/${page.specialty}`;
  if (page.withDoctor && page.path !== '/') wp.mainEntity = { '@id': `${U}/#doctor` };
  nodes.push(wp);
  if (page.crumbs && page.crumbs.length > 1) {
    nodes.push({ '@type': 'BreadcrumbList', itemListElement: page.crumbs.map(([name, href], i) => ({ '@type': 'ListItem', position: i + 1, name, item: href ? `${U}${href}` : url })) });
  }
  if (page.faqs && page.faqs.length) {
    const questions = page.faqs.map(([q, a]) => ({ '@type': 'Question', name: stripTags(q), acceptedAnswer: { '@type': 'Answer', text: stripTags(a) } }));
    if (page.schemaType === 'FAQPage') wp.mainEntity = questions;   // the FAQ page itself is the FAQPage
    else nodes.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: questions });
  }
  return { '@context': 'https://schema.org', '@graph': nodes };
}

/* ---------- page chrome ---------- */
function head(page, ctx, main) {
  const url = `${U}${page.path}`;
  const italic = /<h1[^>]*>(?:(?!<\/h1>)[\s\S])*<em>/.test(main) ? '<link rel="preload" href="/assets/fonts/PlayfairDisplay-italic-var.woff2" as="font" type="font/woff2" crossorigin>\n' : '';   // the accent word in most headings is italic
  const img = `${U}${page.ogImage || '/assets/img/og-image.jpg'}`;
  const geo = page.geo ? `<meta name="geo.region" content="IN-TN"><meta name="geo.placename" content="Erode"><meta name="geo.position" content="${site.geo.lat};${site.geo.lng}"><meta name="ICBM" content="${site.geo.lat}, ${site.geo.lng}">\n` : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${page.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}">
<meta name="author" content="${esc(site.name)}">
<meta name="theme-color" content="#C2185B">
${geo}<link rel="manifest" href="/manifest.json">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/DMSans-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/PlayfairDisplay-var.woff2" as="font" type="font/woff2" crossorigin>
${italic}${page.preload || ''}<link rel="stylesheet" href="${ctx.cssHref}">
<script>document.documentElement.classList.add('js')</script>
<script type="speculationrules">${SPECULATION}</script>
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="en_IN">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(page.ogAlt || `${site.name}, Erode Fort – ${site.doctor.name}`)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${img}">
${ld(graph(page))}
</head>`;
}

function navItems(ctx) {
  return [
    { label: 'Home', href: '/' },
    { label: 'Services', sub: true },
    { label: 'Our Doctor', href: doctorUrl },
    { label: 'Videos', href: '/videos/' },
    ...(ctx.hasGallery ? [{ label: 'Gallery', href: '/gallery/' }] : []),
    { label: 'Contact', href: '/contact/' },
  ];
}

const brandHtml = () =>
  `<a class="brand" href="/"><img src="/assets/img/mark-sm.webp" srcset="/assets/img/mark-sm.webp 88w, /assets/img/mark-lg.webp 238w" sizes="50px" width="50" height="48" alt="">` +
  `<span><span class="brand-name">${site.name}</span><span class="brand-sub">Women’s Health · Erode Fort</span><span class="sr-only"> – home page</span></span></a>`;

function header(page, ctx) {
  const isService = services.some((s) => page.path === slugUrl(s.slug));
  const items = navItems(ctx).map((it) => {
    if (it.sub) {
      return `<li class="has-sub"><button class="sub-toggle" type="button" aria-expanded="false" aria-controls="sub-services"${isService ? ' aria-current="true"' : ''}>${it.label} ${icon('chev-down')}</button>` +
        `<div class="sub" id="sub-services">` + services.map((s) => `<a href="${slugUrl(s.slug)}"${page.path === slugUrl(s.slug) ? ' aria-current="page"' : ''}><span>${s.short}<small>${s.hint}</small></span></a>`).join('') + `</div></li>`;
    }
    return `<li><a href="${it.href}"${page.path === it.href ? ' aria-current="page"' : ''}>${it.label}</a></li>`;
  }).join('');
  return `<a class="skip" href="#main">Skip to content</a>
<header class="header"><div class="wrap">${brandHtml()}
<nav class="nav" aria-label="Main"><ul>${items}</ul></nav>
<div class="header-cta"><a class="btn btn-outline btn-sm" href="${tel}" aria-label="Call ${site.phone.display}">${icon('phone')}<span class="call-text">${site.phone.display}</span></a>${btnWA(undefined, 'Book appointment', 'btn btn-wa btn-sm')}</div>
<button class="menu-btn open-menu" type="button" data-open-menu aria-expanded="false" aria-controls="drawer" aria-label="Open menu">${icon('menu')}</button>
</div></header>
<div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Menu">
<div class="drawer-top">${brandHtml()}<button class="menu-btn" type="button" data-close-menu aria-label="Close menu">${icon('close')}</button></div>
<nav aria-label="Mobile">
<a href="/">Home</a>
<p class="grp">Our services</p>
<div class="sublist">${services.map((s) => `<a href="${slugUrl(s.slug)}">${s.short}</a>`).join('')}</div>
<p class="grp">More</p>
<a href="${doctorUrl}">Our Doctor</a><a href="/videos/">Daily Health Videos</a>${ctx.hasGallery ? '<a href="/gallery/">Hospital Gallery</a>' : ''}<a href="/pregnancy-due-date-calculator/">Due Date Calculator</a><a href="/faq/">FAQs</a><a href="/contact/">Contact &amp; Directions</a>
<div class="btn-row">${btnWA(undefined, 'Book on WhatsApp', 'btn btn-wa btn-block')}${btnCall(`Call ${site.phone.display}`, 'btn btn-light btn-block')}</div>
${socialList('on-dark')}
</nav></div>
`;
}

function footer(ctx) {
  const y = new Date().getFullYear();
  const yr = y > site.startYear ? `${site.startYear}–${y}` : `${site.startYear}`;
  return `<footer class="footer"><div class="wrap">
<div class="f-grid">
<div class="f-brand">${brandHtml()}<p>${site.doctor.name}, ${site.doctor.role}, leads ${site.name} at Erode Fort: pregnancy and painless delivery care, gynaecology, PCOS and fertility treatment, and laparoscopic surgery for women in Erode and nearby towns.</p>
${socialList('on-dark')}</div>
<div><p class="f-title">Services</p><ul>${services.map((s) => `<li><a href="${slugUrl(s.slug)}">${s.short}</a></li>`).join('')}</ul></div>
<div><p class="f-title">Explore</p><ul><li><a href="/">Home</a></li><li><a href="${doctorUrl}">Dr. Jayanthi Prabakaran</a></li><li><a href="/videos/">Daily health videos</a></li>${ctx.hasGallery ? '<li><a href="/gallery/">Hospital gallery</a></li>' : ''}<li><a href="/pregnancy-due-date-calculator/">Due date calculator</a></li><li><a href="/visit-reminder/">Visit reminder</a></li><li><a href="/faq/">FAQs</a></li><li><a href="/contact/">Contact &amp; directions</a></li><li><a href="/privacy-policy.html">Privacy policy</a></li></ul></div>
<div><p class="f-title">Visit us</p><ul class="f-contact">
<li>${icon('pin')}<span>${site.address.line1},<br>${site.address.area}, ${site.address.city} – ${site.address.pin}, ${site.address.state}</span></li>
<li>${icon('phone')}<a href="${tel}">${site.phone.intl}</a></li>
<li>${icon('mail')}<a href="mailto:${site.email}">${site.email}</a></li>
<li>${icon('star')}<a href="${reviews.write}" target="_blank" rel="noopener">Review us on Google</a></li>
<li>${icon('clock')}<span>${site.hours.opd}<br>Emergency care: ${site.hours.emergency}</span></li>
</ul></div></div>
<div class="f-bottom">
<p>© ${yr} ${site.name} · ${site.doctor.name} · Erode, Tamil Nadu. All rights reserved.</p>
<p><span lang="ta">${tamil.emergency}</span> · For an emergency call <a href="${tel}">${site.phone.display}</a> or dial 108 / 112 for an ambulance.</p>
<p class="areas">Serving women and families in ${areas.join(', ')} and nearby towns. The information on this website is for general education and does not replace advice from your doctor.</p>
</div></div></footer>
<nav class="mbar" aria-label="Quick contact">
<a class="m-call" href="${tel}">${icon('phone')}Call</a>
<a class="m-wa" href="${wa('Hello Abishek Hospital, I would like to book an appointment.')}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp</a>
<a class="m-dir" href="${site.maps.directions}" target="_blank" rel="noopener">${icon('navigation')}Directions</a>
</nav>
`;
}

export function renderPage(page, ctx) {
  const main = page.render(ctx);
  const scripts = `<script src="${ctx.jsHref}" defer></script>` + (page.toolsJs ? `<script src="${ctx.toolsJsHref}" defer></script>` : '');
  return `${head(page, ctx, main)}
<body>
${header(page, ctx)}<main id="main">
${main}
</main>
${footer(ctx)}${scripts}
</body>
</html>
`;
}

/* ---------- the shared template for every service page ---------- */
export function servicePage(s) {
  const toc = s.sections.map((x) => `<li><a href="#${x.id}">${esc(x.nav || x.title)}</a></li>`).join('') + (s.faqs ? '<li><a href="#faqs">FAQs</a></li>' : '');
  const related = s.related.map((slug) => services.find((x) => x.slug === slug)).filter(Boolean);
  const sections = s.sections.map((sec, i) =>
    `<section class="section${i % 2 ? ' section-soft' : ''}" id="${sec.id}"><div class="wrap"><h2>${sec.title}</h2>${sec.wide ? sec.html : `<div class="prose">${sec.html}</div>`}</div></section>`).join('\n');
  return `<section class="page-hero"><div class="wrap split">
<div>${crumbs(s.crumbs)}
<span class="eyebrow">${icon(s.icon)} ${s.eyebrow}</span>
<h1>${s.h1}</h1>
<span class="tamil-line" lang="ta">${s.tamil}</span>
<p class="lead">${s.lead}</p>
<div class="btn-row">${btnWA(s.waText)}${btnCall(undefined, 'btn btn-outline')}</div>
<ul class="toc" aria-label="On this page">${toc}</ul></div>
<aside class="facts" aria-label="At a glance"><h2>At a glance</h2><ul>${s.facts.map((f) => `<li>${icon(f.icon)}<span><b>${f.title}</b><small>${f.text}</small></span></li>`).join('')}</ul></aside>
</div></section>
${sections}
${s.faqs ? `<section class="section section-soft" id="faqs"><div class="wrap"><div class="sec-head"><span class="eyebrow">${icon('help')} Questions answered</span><h2>Frequently asked questions</h2></div>${faqBlock(s.faqs)}</div></section>` : ''}
<section class="section"><div class="wrap"><div class="sec-head"><span class="eyebrow">Related care</span><h2>You may also need</h2></div>${serviceCards(related, true)}</div></section>
${ctaBand(undefined, undefined, s.waText)}`;
}

/* ---------- helper: turn a service data object into a page definition ---------- */
export function makeServicePage(d) {
  const s = services.find((x) => x.slug === d.slug);
  const crumbsArr = [['Home', '/'], ['Services', '/#services'], [s.short]];
  const data = { ...d, icon: s.icon, crumbs: crumbsArr };
  return {
    path: slugUrl(d.slug),
    title: d.title,
    description: d.description,
    schemaType: 'MedicalWebPage',
    specialty: s.specialty,
    crumbs: crumbsArr,
    faqs: d.faqs,
    render: () => servicePage(data),
  };
}

/* ---------- click-to-play YouTube video (nothing loads from YouTube until it is tapped) ---------- */
export const videoCard = (v = featuredVideo) =>
  `<div class="video" data-video="${v.id}" data-title="${esc(v.title)}">` +
  `<a class="video-card" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">` +
  `<span class="video-text"><span class="video-kicker">${icon('youtube')} Watch</span><span class="video-title">${esc(v.title)}</span>` +
  `<span class="video-play">${icon('play')}</span><span class="sr-only"> Play video</span></span>` +
  `<img src="/assets/img/doctor-480.webp" srcset="/assets/img/doctor-240.webp 240w, /assets/img/doctor-480.webp 480w, /assets/img/doctor-698.webp 698w" sizes="320px" width="480" height="481" loading="lazy" decoding="async" alt=""></a></div>`;
