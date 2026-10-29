// Home, doctor, videos, contact and FAQ pages.
import { site, social, stats, services, areas, districts, tamil, reviews } from '../site.mjs';
import { icon, esc, btnWA, btnCall, btnDir, btnReview, socialList, faqBlock, serviceCards, ctaBand, crumbs, wa, tel, doctorUrl, slugUrl, videoCard, statusLine, hubUrl, regionUrl } from '../lib.mjs';

const P = site.phone.display;
const D = site.doctor.name;
const YT = social[0].url, IG = social[1].url, FB = social[2].url;

/* ---------- shared blocks ---------- */
const photoImg = (p, alt, sizes, eager = false) => {
  const widths = Object.keys(p.files).map(Number).sort((a, b) => a - b);
  const w0 = widths[0];
  const srcset = widths.map((w) => `/assets/img/photos/${p.files[w]} ${w}w`).join(', ');
  return `<img src="/assets/img/photos/${p.files[w0]}" srcset="${srcset}" sizes="${sizes}" width="${w0}" height="${Math.round(w0 * p.height / p.width)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} alt="${alt}">`;
};

// Photos keep their natural shape (masonry columns) and are shown at natural size: the supplied files are small thumbnails.
export function galleryGrid(ctx, items, { uniform = false, eager = 0 } = {}) {
  const cls = uniform ? `gallery uniform${items.length % 2 ? ' odd' : ''}" style="--n:${Math.min(items.length, 4)}` : 'gallery';
  return `<div class="${cls}">` + items.map((p, i) => {
    const cap = ctx.captions[p.id] || {};
    const img = photoImg(p, esc(cap.alt || 'Abishek Hospital, Erode Fort'), '(min-width:1100px) 360px, (min-width:600px) 33vw, 50vw', i < eager);
    return `<figure>${img}${cap.caption ? `<figcaption>${esc(cap.caption)}</figcaption>` : ''}</figure>`;
  }).join('') + `</div>`;
}

export function lookForPhoto(ctx) {
  const p = ctx.photos.find((x) => x.id === 'hospital-entrance');
  if (!p) return '';
  const cap = ctx.captions[p.id] || {};
  return `<figure class="look-for">${photoImg(p, esc(cap.alt || 'Abishek Hospital entrance'), '(min-width:768px) 520px, 100vw')}<figcaption>Look for the Abishek Hospital signboard above the entrance at Erode Fort.</figcaption></figure>`;
}

const mapCard = () => `<div class="map-card"><div><span class="pin">${icon('pin')}</span><p>${site.address.line1},<br>${site.address.area}, ${site.address.city} – ${site.address.pin}</p>
<div class="btn-row" style="justify-content:center;margin-top:0"><button class="btn btn-primary btn-sm" type="button" data-map="${site.maps.embed}" data-title="Map showing Abishek Hospital, Erode Fort">${icon('pin')} Show map</button>
<a class="btn btn-outline btn-sm" href="${site.maps.view}" target="_blank" rel="noopener">Open in Google Maps ${icon('external')}</a></div></div></div>`;

const infoList = () => `<ul class="info-list">
<li><span class="ico">${icon('pin')}</span><div><b>Address</b><span>${site.address.line1},<br>${site.address.area}, ${site.address.city} – ${site.address.pin}, ${site.address.state}</span><br><a href="${site.maps.directions}" target="_blank" rel="noopener">Get directions on Google Maps</a></div></li>
<li><span class="ico">${icon('phone')}</span><div><b>Phone &amp; WhatsApp</b><a href="${tel}">${site.phone.intl}</a></div></li>
<li><span class="ico">${icon('mail')}</span><div><b>Email</b><a href="mailto:${site.email}">${site.email}</a></div></li>
<li><span class="ico">${icon('clock')}</span><div><b>Clinic hours</b><span>${site.hours.opd}</span><br><span><b style="display:inline">Emergency care:</b> ${site.hours.emergency}</span></div></li>
</ul>`;

const socialCards = () => `<div class="soc-cards">
<a class="soc-card" href="${YT}" target="_blank" rel="noopener"><span class="ico ico-yt">${icon('youtube')}</span><span><b>YouTube</b><small>${social[0].handle}<br>New health videos in Tamil, daily</small></span></a>
<a class="soc-card" href="${IG}" target="_blank" rel="noopener"><span class="ico ico-ig">${icon('instagram')}</span><span><b>Instagram</b><small>@${social[1].handle}<br>Reels, tips and updates</small></span></a>
<a class="soc-card" href="${FB}" target="_blank" rel="noopener"><span class="ico ico-fb">${icon('facebook')}</span><span><b>Facebook</b><small>${social[2].handle}<br>Health education and news</small></span></a>
<a class="soc-card" href="${wa('Hello Abishek Hospital')}" target="_blank" rel="noopener"><span class="ico ico-wa">${icon('whatsapp')}</span><span><b>WhatsApp</b><small>${site.phone.intl}<br>Book or ask a question</small></span></a>
</div>`;

const statsBand = () => `<div class="stats">${stats.map((s) => `<div class="stat"><b>${s.n}</b><span>${s.label}</span></div>`).join('')}</div>`;

/* ---------- HOME ---------- */
const homeFaqs = [
  ['Where is Abishek Hospital in Erode?', `We are at ${site.address.line1}, ${site.address.area}, ${site.address.city} – ${site.address.pin}. <a href="/contact/">See the map and directions</a>.`],
  ['What are your clinic timings?', `${site.hours.opd}. Emergency care is available ${site.hours.emergency}.`],
  ['Do I need an appointment?', `You can book on WhatsApp or by phone at ${P}, or walk in during clinic hours.`],
  ['Who is the doctor?', `${D}, Consultant Obstetrician & Gynaecologist, is an Academic Topper and Gold Medalist from Coimbatore Medical College, with over 40,000 safe deliveries. <a href="${doctorUrl}">Know more about Dr. Jayanthi Prabakaran</a>.`],
  ['Which services do you offer?', 'Pregnancy and delivery care, normal and painless (epidural) delivery, high-risk pregnancy care, gynaecology and lady doctor consultations, PCOS and PCOD treatment, fertility and IUI treatment, laparoscopic (keyhole) surgery, menopause care and family planning.'],
];

// Seven service pages plus the two women's-wellness services that live as sections of the gynaecology page.
const homeCards = [
  ...services,
  { href: `${slugUrl('gynecologist-erode')}#menopause`, short: 'Menopause Care', icon: 'sparkles', blurb: 'Guidance and treatment through perimenopause and menopause: hot flushes, sleep, mood and bone health.' },
  { href: `${slugUrl('gynecologist-erode')}#family-planning`, short: 'Family Planning', icon: 'pill', blurb: 'Personalised, affordable counselling and contraception advice for every family.' },
];

export const home = {
  path: '/',
  title: 'Best Gynecologist & Maternity Hospital in Erode | Abishek Hospital',
  description: `Gynecologist & maternity hospital in Erode Fort, led by ${D}. Normal & painless delivery, PCOS, IUI, laparoscopic surgery, 24/7 emergency.`,
  schemaType: 'WebPage',
  withDoctor: true,
  geo: true,
  alternates: [['en-IN', '/'], ['ta-IN', '/ta/']],
  faqs: homeFaqs,
  preload: `<link rel="preload" as="image" href="/assets/img/doctor-480.webp" imagesrcset="/assets/img/doctor-240.webp 240w, /assets/img/doctor-480.webp 480w, /assets/img/doctor-698.webp 698w" imagesizes="360px" media="(min-width:960px)" fetchpriority="high">\n`,
  render: (ctx) => `
<section class="hero"><div class="wrap split">
<div>
${statusLine('rise')}
<div class="pill-row rise"><span class="pill">${icon('pin')} Erode Fort, Tamil Nadu</span><span class="pill">${icon('siren')} Emergency care 24/7</span><span class="pill">${icon('award')} No.1 OB/GYN · Tamil Nadu</span></div>
<h1 class="rise d1">Gynecologist &amp; Maternity Hospital in <em>Erode</em></h1>
<span class="tamil-line rise d1" lang="ta">${tamil.hero}</span>
<p class="lead rise d2">Trusted care for every woman, at every stage. Led by ${D}, Academic Topper and Gold Medalist from Coimbatore Medical College, with over 40,000 safe deliveries. Pregnancy care, painless delivery, gynaecology, PCOS and fertility treatment and laparoscopic surgery, with honest, upfront pricing.</p>
<div class="btn-row rise d3">${btnWA()}${btnCall(undefined, 'btn btn-outline')}</div>
<div class="trust rise d3">${stats.map((s) => `<div><b>${s.n}</b><span>${s.label}</span></div>`).join('')}</div>
</div>
<div class="portrait rise d2">
<div class="portrait-frame"><img src="/assets/img/doctor-480.webp" srcset="/assets/img/doctor-240.webp 240w, /assets/img/doctor-480.webp 480w, /assets/img/doctor-698.webp 698w" sizes="(min-width:960px) 360px, 80vw" width="480" height="481" fetchpriority="high" alt="${D}, gynecologist and obstetrician in Erode"></div>
<div class="portrait-badge pb-1">${icon('award')}<span>Academic Topper<small>Coimbatore Medical College</small></span></div>
<div class="portrait-badge pb-2">${icon('baby')}<span>40,000+<small>safe deliveries</small></span></div>
</div></div></section>

<div class="wrap"><div class="quick">
<a href="${wa('Hello Abishek Hospital, I would like to book an appointment.')}" target="_blank" rel="noopener"><span class="ico wa">${icon('whatsapp')}</span><span>Book on WhatsApp<small>Quick reply</small></span></a>
<a href="${tel}"><span class="ico">${icon('phone')}</span><span>Call ${P}<small>${site.hours.opd.split(',')[0]}</small></span></a>
<a href="${site.maps.directions}" target="_blank" rel="noopener"><span class="ico">${icon('navigation')}</span><span>Get directions<small>Erode Fort, near bus stand</small></span></a>
<a href="${tel}"><span class="ico">${icon('siren')}</span><span>Emergency 24/7<small>Call any time</small></span></a>
</div></div>

<section class="section" id="services"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('stethoscope')} Our services</span><h2>Complete women’s healthcare <em>in Erode</em></h2>
<p class="lead">From your first antenatal visit to menopause, expert care for every stage of a woman’s life, with modern techniques and clear, honest pricing.</p></div>
${serviceCards(homeCards)}
</div></section>

<section class="section section-soft"><div class="wrap split two">
<div><span class="eyebrow">${icon('hand-heart')} Why Abishek Hospital</span>
<h2>Expert care that every family can <em>afford</em></h2>
<p class="lead">We believe exceptional medical care should never be a privilege. Gold-medal expertise meets transparent, compassionate pricing.</p>
<ul class="checks">
<li><b>Gold-medal expertise.</b> ${D} is an Academic Topper and Gold Medalist from Coimbatore Medical College.</li>
<li><b>Transparent pricing.</b> Costs are discussed upfront, before any procedure, with no hidden fees.</li>
<li><b>Open day and night.</b> Emergency care is available 24/7.</li>
<li><b>Modern, clean and hygienic.</b> Modern equipment and a safe, hygienic environment.</li>
<li><b>Personalised care.</b> Every woman is heard, and every plan is explained in plain language.</li></ul>
<div class="btn-row">${btnWA(undefined, 'Book on WhatsApp')}<a class="btn btn-outline" href="/contact/">Contact &amp; directions</a></div></div>
<div class="card" style="padding:clamp(22px,3vw,34px)">${videoCard()}<span class="eyebrow" style="margin-top:1.3rem">${icon('video')} Free health education</span>
<h3>Watch. Learn. Stay well.</h3>
<p>${D} shares women’s health videos in Tamil every day, completely free: pregnancy tips, gynaecology, PCOS, fertility, periods and menopause.</p>
<div class="btn-row" style="margin-top:.4rem"><a class="btn btn-primary" href="${YT}" target="_blank" rel="noopener">${icon('youtube')} Watch on YouTube</a><a class="btn btn-outline" href="/videos/">About the videos</a></div></div>
</div></section>

<section class="section section-dark"><div class="wrap">
<div class="sec-head center"><span class="eyebrow">${icon('badge-check')} Our experience</span><h2>Trusted by families <em>across Erode</em></h2></div>
${statsBand()}
</div></section>

<section class="section" id="doctor"><div class="wrap doc-card">
<div class="doc-photo"><div class="portrait-frame"><img src="/assets/img/doctor-480.webp" srcset="/assets/img/doctor-240.webp 240w, /assets/img/doctor-480.webp 480w, /assets/img/doctor-698.webp 698w" sizes="(min-width:768px) 380px, 80vw" width="480" height="481" loading="lazy" decoding="async" alt="${D}, Consultant Obstetrician and Gynaecologist at Abishek Hospital, Erode"></div></div>
<div><span class="eyebrow">${icon('user')} Meet your doctor</span>
<h2>${D}</h2>
<span class="role">${site.doctor.role}</span>
<p>An Academic Topper and Gold Medalist from ${site.doctor.college}, ${D} has over 40,000 safe deliveries, 7,000+ laparoscopic surgeries and 500+ conceptions through IUI to her name. She is also a high-risk pregnancy specialist, with experience in epidural (painless) delivery.</p>
<blockquote class="quote">“Expert care should be accessible to all, not just a few.”<small>${D}</small></blockquote>
<div class="btn-row"><a class="btn btn-primary" href="${doctorUrl}">About Dr. Jayanthi ${icon('arrow')}</a>${btnWA(undefined, 'Book appointment')}</div></div>
</div></section>
${ctx.photos.length ? `
<section class="section section-soft"><div class="wrap"><div class="sec-head"><span class="eyebrow">${icon('camera')} Our hospital</span><h2>A look <em>inside</em> our hospital</h2></div>
${galleryGrid(ctx, (ctx.photos.filter((p) => p.width / p.height > 1.2).length >= 3 ? ctx.photos.filter((p) => p.width / p.height > 1.2) : ctx.photos).slice(0, 4), { uniform: true })}
<p style="margin-top:1.2rem"><a class="link-arrow" href="/gallery/">See all photos ${icon('arrow')}</a></p></div></section>` : ''}

<section class="section section-soft"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('heart-pulse')} Care for every stage</span><h2>What can we help you <em>with?</em></h2>
<p class="lead">Women in Erode come to us for these concerns and more. Choose one to learn more.</p></div>
<ul class="chips">
<li><a href="${slugUrl('normal-painless-delivery-erode')}">Normal delivery in Erode</a></li>
<li><a href="${slugUrl('normal-painless-delivery-erode')}#epidural">Painless (epidural) delivery</a></li>
<li><a href="${slugUrl('maternity-hospital-erode')}">Pregnancy care</a></li>
<li><a href="${slugUrl('high-risk-pregnancy-erode')}">High-risk pregnancy</a></li>
<li><a href="${slugUrl('gynecologist-erode')}">Lady doctor in Erode</a></li>
<li><a href="${slugUrl('gynecologist-erode')}">Irregular or painful periods</a></li>
<li><a href="${slugUrl('pcos-treatment-erode')}">PCOS / PCOD treatment</a></li>
<li><a href="${slugUrl('gynecologist-erode')}">Fibroids and ovarian cysts</a></li>
<li><a href="${slugUrl('infertility-treatment-erode')}">Infertility and IUI</a></li>
<li><a href="${slugUrl('laparoscopic-surgery-erode')}">Laparoscopic surgery</a></li>
<li><a href="${slugUrl('gynecologist-erode')}#menopause">Menopause care</a></li>
<li><a href="${slugUrl('gynecologist-erode')}#family-planning">Family planning</a></li>
</ul></div></section>

<section class="section"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('pin')} From other towns</span><h2>Coming from another town in <em>Tamil Nadu?</em></h2>
<p class="lead">Erode is an easy trip by rail or road. Salem, Tiruppur, Namakkal, Karur, Coimbatore and Gobichettipalayam are all within about two hours. We are one hospital, at Erode Fort, and we will help you plan your visit.</p></div>
<ul class="chips">${districts.map((d) => `<li><a href="${regionUrl(d.slug)}">${d.name} · ${d.km} km</a></li>`).join('')}</ul>
<p style="margin-top:1.2rem"><a class="link-arrow" href="${hubUrl}">Women’s hospital for patients across Tamil Nadu ${icon('arrow')}</a> &nbsp; <a class="link-arrow" href="/ta/" lang="ta">தமிழில் படிக்க ${icon('arrow')}</a></p>
</div></section>

<section class="section section-soft"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('clipboard')} Free guides</span><h2>Women’s health questions, <em>answered simply</em></h2>
<p class="lead">Periods, discharge, early pregnancy, delivery and recovery, in plain words. Some in Tamil too.</p></div>
<ul class="chips">
<li><a href="/women-health-guides/irregular-periods/">Irregular periods</a></li>
<li><a href="/women-health-guides/white-discharge/">White discharge</a></li>
<li><a href="/women-health-guides/early-pregnancy-symptoms/">Early pregnancy symptoms</a></li>
<li><a href="/women-health-guides/normal-delivery-vs-caesarean/">Normal delivery or caesarean?</a></li>
<li><a href="/women-health-guides/food-and-care-in-early-pregnancy/">Food in early pregnancy</a></li>
<li><a href="/women-health-guides/care-after-delivery/">Care after delivery</a></li>
<li><a href="/ta/white-discharge/" lang="ta">வெள்ளைப்படுதல்</a></li>
<li><a href="/ta/irregular-periods/" lang="ta">ஒழுங்கற்ற மாதவிடாய்</a></li>
<li><a href="/ta/early-pregnancy-symptoms/" lang="ta">கர்ப்பத்தின் ஆரம்ப அறிகுறிகள்</a></li>
</ul>
<p style="margin-top:1.2rem"><a class="link-arrow" href="/women-health-guides/">All women’s health guides ${icon('arrow')}</a></p>
</div></section>

<section class="section"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('message')} Stay connected</span><h2>Follow us for daily <em>health tips</em></h2>
<p class="lead">Learn from ${D} wherever you are, and message us any time.</p></div>
${socialCards()}
<div class="callout" style="margin-top:1.6rem;max-width:820px"><p><b>Been treated at Abishek Hospital?</b> Your honest review on Google helps other families in Erode choose the right care. <a href="${reviews.write}" target="_blank" rel="noopener">Write a Google review</a>.</p></div>
</div></section>

<section class="section section-soft"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('calendar')} Simple to start</span><h2>How to book your <em>visit</em></h2></div>
<div class="split two" style="align-items:start">
<ol class="steps">
<li><b>Message or call us</b><span>WhatsApp or call ${P}, or simply walk in during clinic hours.</span></li>
<li><b>Visit us at Erode Fort</b><span>${site.address.line1}, ${site.address.area}.</span></li>
<li><b>Meet the doctor and get a clear plan</b><span>Your concerns are heard, tests are explained, and costs are discussed upfront.</span></li>
</ol>
<div class="sos"><span class="eyebrow">${icon('siren')} Emergency care 24/7</span>
<h3>Pregnancy or gynaecological emergency?</h3>
<p>Do not wait for clinic hours. Call us at any time of day or night, or come straight to the hospital.</p>
<a class="big" href="${tel}">${site.phone.intl}</a>
<p style="margin:0;font-size:.92rem">In a life-threatening emergency, dial 108 or 112 for an ambulance.</p></div>
</div>
<div class="callout" style="margin-top:1.6rem;max-width:820px"><p><b>Free tools:</b> <a href="/pregnancy-due-date-calculator/">Pregnancy due date calculator</a> · <a href="/visit-reminder/">Add your next visit to your calendar</a></p></div>
</div></section>

<section class="section"><div class="wrap split faq-split">
<div><span class="eyebrow">${icon('help')} Quick answers</span><h2>Frequently asked <em>questions</em></h2>
<p class="lead">Quick answers about visiting us. Need something else? Message us on WhatsApp.</p>
<p><a class="link-arrow" href="/faq/">More questions and answers ${icon('arrow')}</a></p></div>
${faqBlock(homeFaqs)}</div></section>

<section class="section section-soft" id="contact"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('pin')} Find us</span><h2>Visit Abishek Hospital, <em>Erode Fort</em></h2></div>
<div class="contact-grid">${infoList()}${mapCard()}</div></div></section>

<section class="section"><div class="wrap split two" style="align-items:start"><div class="prose">
<h2>Gynecologist and maternity hospital in Erode</h2>
<p>${site.name} is a women’s health and maternity hospital at Erode Fort, close to the bus stand. Under ${D}, we provide <a href="${slugUrl('maternity-hospital-erode')}">pregnancy care and delivery</a>, <a href="${slugUrl('normal-painless-delivery-erode')}">normal and painless delivery</a>, <a href="${slugUrl('high-risk-pregnancy-erode')}">high-risk pregnancy care</a>, <a href="${slugUrl('gynecologist-erode')}">gynaecology and lady doctor consultations</a>, <a href="${slugUrl('pcos-treatment-erode')}">PCOS and PCOD treatment</a>, <a href="${slugUrl('infertility-treatment-erode')}">infertility and IUI treatment</a> and <a href="${slugUrl('laparoscopic-surgery-erode')}">laparoscopic surgery</a> to women and families in ${areas.join(', ')} and nearby towns.</p></div>
<div class="card flat"><span class="eyebrow">தமிழில்</span><p lang="ta">அபிஷேக் மருத்துவமனை, ஈரோடு கோட்டையில் மகப்பேறு மற்றும் மகளிர் நல சிகிச்சைகளை வழங்கும் மருத்துவமனை. டாக்டர் ஜெயந்தி பிரபாகரன் தலைமையில் கர்ப்பகால பராமரிப்பு, சுகப்பிரசவம், வலியில்லா பிரசவம் (எபிடியூரல்), அதிக ஆபத்துள்ள கர்ப்பம், பி.சி.ஓ.எஸ் சிகிச்சை, குழந்தையின்மை சிகிச்சை (ஐ.யூ.ஐ), லேப்ராஸ்கோபி அறுவை சிகிச்சை ஆகியவை கிடைக்கின்றன. 24 மணி நேர அவசர சிகிச்சை உண்டு. முன்பதிவுக்கு ${P} என்ற எண்ணில் அழைக்கவும் அல்லது வாட்ஸ்அப் செய்யவும்.</p></div>
</div></section>
${ctaBand()}`,
};

/* ---------- DOCTOR ---------- */
const doctorFaqs = [
  ['How can I book an appointment with Dr. Jayanthi Prabakaran?', `Message us on WhatsApp or call ${P}, or walk in during clinic hours (${site.hours.opd}).`],
  ['Where does Dr. Jayanthi Prabakaran consult?', `At ${site.name}, ${site.address.line1}, ${site.address.area}, ${site.address.city} – ${site.address.pin}. <a href="/contact/">Get directions</a>.`],
  ['Does Dr. Jayanthi Prabakaran share health videos?', `Yes. Women’s health videos in Tamil are shared every day on the <a href="${YT}" target="_blank" rel="noopener">${social[0].handle}</a> YouTube channel, free for everyone.`],
];
export const doctor = {
  path: doctorUrl,
  title: 'Dr. Jayanthi Prabakaran | Gynecologist & Obstetrician in Erode',
  description: `${D}, Obstetrician & Gynaecologist at Abishek Hospital, Erode Fort. Academic Topper, Coimbatore Medical College. 40,000+ safe deliveries.`,
  schemaType: 'AboutPage',
  withDoctor: true,
  ogType: 'profile',
  crumbs: [['Home', '/'], [D]],
  faqs: doctorFaqs,
  render: () => `
<section class="page-hero"><div class="wrap split">
<div>${crumbs([['Home', '/'], [D]])}
<span class="eyebrow">${icon('award')} Meet your doctor</span>
<h1>Dr. Jayanthi <em>Prabakaran</em></h1>
<span class="tamil-line" lang="ta">டாக்டர் ஜெயந்தி பிரபாகரன் — மகப்பேறு மற்றும் மகளிர் நோய் மருத்துவ நிபுணர்</span>
<p class="lead">${site.doctor.role} at ${site.name}, Erode Fort. Academic Topper and Gold Medalist from ${site.doctor.college}, with over 40,000 safe deliveries.</p>
<div class="btn-row">${btnWA('Hello Abishek Hospital, I would like to book an appointment with Dr. Jayanthi Prabakaran.')}${btnCall(undefined, 'btn btn-outline')}</div></div>
<div class="doc-photo"><div class="portrait-frame"><img src="/assets/img/doctor-480.webp" srcset="/assets/img/doctor-240.webp 240w, /assets/img/doctor-480.webp 480w, /assets/img/doctor-698.webp 698w" sizes="(min-width:960px) 340px, 80vw" width="480" height="481" fetchpriority="high" alt="${D}, gynecologist and obstetrician in Erode"></div></div>
</div></section>

<section class="section" id="about"><div class="wrap"><div class="prose">
<h2>About ${D}</h2>
<p>${D} is an Academic Topper and Gold Medalist from ${site.doctor.college}, one of Tamil Nadu’s well-known medical institutions. Her academic strength and years of dedicated clinical practice have made her a trusted obstetrician and gynaecologist for families in Erode and beyond.</p>
<p>With over 40,000 safe deliveries, more than 7,000 laparoscopic surgeries and over 500 conceptions through IUI, she has made expert women’s healthcare accessible in Erode. She also shares free health education videos in Tamil every day on YouTube (${social[0].handle}), so that every woman can learn from trusted medical knowledge.</p>
</div></div></section>

<section class="section section-soft" id="expertise"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('stethoscope')} Areas of expertise</span><h2>What ${D.replace('Dr. ', 'Dr. ')} <em>treats</em></h2></div>
<ul class="chips">
<li><a href="${slugUrl('maternity-hospital-erode')}">Obstetrics and safe delivery</a></li>
<li><a href="${slugUrl('normal-painless-delivery-erode')}">Epidural (painless) delivery</a></li>
<li><a href="${slugUrl('high-risk-pregnancy-erode')}">High-risk pregnancy</a></li>
<li><a href="${slugUrl('laparoscopic-surgery-erode')}">Laparoscopic gynaecological surgery</a></li>
<li><a href="${slugUrl('infertility-treatment-erode')}">Infertility and IUI treatment</a></li>
<li><a href="${slugUrl('pcos-treatment-erode')}">PCOS and hormonal care</a></li>
<li><a href="${slugUrl('gynecologist-erode')}">Menopause, family planning and adolescent health</a></li>
<li><span>Gynaecological oncology</span></li>
</ul></div></section>

<section class="section section-dark"><div class="wrap">
<div class="sec-head center"><span class="eyebrow">${icon('badge-check')} Experience</span><h2>A career built on <em>safe births</em></h2></div>
${statsBand()}</div></section>

<section class="section"><div class="wrap split two">
<div><span class="eyebrow">${icon('hand-heart')} Philosophy</span><h2>Excellence without <em>compromise</em></h2>
<blockquote class="quote">“Expert care should be accessible to all, not just a few.”<small>${D}</small></blockquote>
<p style="margin-top:1.2rem">Every woman deserves the same gold-standard care, whatever her background. Treatment costs are discussed upfront, before any procedure, and consultation fees are kept affordable for all income groups.</p></div>
<div><div class="card flat"><span class="ico">${icon('cap')}</span><h3>Education and recognition</h3><ul class="checks" style="margin-bottom:0"><li>Academic Topper and Gold Medalist, ${site.doctor.college}</li><li>${site.doctor.role}</li><li>High-risk pregnancy specialist</li></ul></div></div>
</div></section>

<section class="section section-soft"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('video')} Learn from ${D}</span><h2>Follow Dr. Jayanthi <em>online</em></h2></div>
${socialCards()}</div></section>

<section class="section"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('help')} Quick answers</span><h2>Frequently asked <em>questions</em></h2></div>
${faqBlock(doctorFaqs)}</div></section>
${ctaBand()}`,
};

/* ---------- VIDEOS ---------- */
const videoFaqs = [
  ['Are the health videos free?', 'Yes. All videos on our YouTube channel are free to watch, and a new video is shared every day.'],
  ['Which language are the videos in?', 'The videos are in Tamil, so every woman and family can understand them easily.'],
  ['Can a video replace a visit to the doctor?', `No. The videos are for general education. If you have symptoms or a medical concern, please book a consultation. Call or WhatsApp ${P}.`],
];
export const videos = {
  path: '/videos/',
  title: 'Women’s Health Videos in Tamil | Dr. Jayanthi Prabakaran YouTube',
  description: `Free daily women’s health videos in Tamil by ${D}: pregnancy tips, PCOS, fertility, periods and menopause. Watch on YouTube ${social[0].handle}.`,
  crumbs: [['Home', '/'], ['Daily health videos']],
  faqs: videoFaqs,
  render: () => `
<section class="page-hero"><div class="wrap split">
<div>${crumbs([['Home', '/'], ['Daily health videos']])}
<span class="eyebrow">${icon('youtube')} Free health education, every day</span>
<h1>Women’s Health Videos <em>in Tamil</em></h1>
<span class="tamil-line" lang="ta">தமிழில் மகளிர் ஆரோக்கிய வீடியோக்கள்</span>
<p class="lead">${D} shares expert women’s health videos in Tamil every single day, completely free. Pregnancy tips, gynaecology, fertility and more, explained clearly.</p>
<div class="btn-row"><a class="btn btn-primary" href="${YT}?sub_confirmation=1" target="_blank" rel="noopener">${icon('youtube')} Subscribe, it’s free</a><a class="btn btn-outline" href="${YT}/videos" target="_blank" rel="noopener">${icon('play')} Watch latest videos</a></div></div>
<aside class="facts"><h2>Our channel</h2><ul>
<li>${icon('youtube')}<span><b>${social[0].handle}</b><small>YouTube channel</small></span></li>
<li>${icon('calendar')}<span><b>A new video every day</b><small>Consistent, reliable, free</small></span></li>
<li>${icon('languages')}<span><b>In Tamil</b><small>Clear and easy to follow</small></span></li></ul></aside>
</div></section>

<section class="section"><div class="wrap split two">
${videoCard()}
<div><span class="eyebrow">${icon('play')} Featured video</span><h2>Tips for a <em>healthy pregnancy</em></h2>
<p class="lead">${D} shares her tips for a healthy pregnancy. Watch it here, then subscribe for a new video every day.</p>
<div class="btn-row"><a class="btn btn-outline" href="${YT}/videos" target="_blank" rel="noopener">${icon('youtube')} More videos on YouTube</a></div>
<p style="margin-top:1rem"><a class="link-arrow" href="${slugUrl('maternity-hospital-erode')}">Pregnancy care in Erode ${icon('arrow')}</a></p></div>
</div></section>

<section class="section section-soft"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('play')} What you will learn</span><h2>Topics <em>we cover</em></h2></div>
<div class="grid cards">
<div class="card flat"><span class="ico">${icon('baby')}</span><h3>Pregnancy and maternity guidance</h3><p>From conception to postnatal care: antenatal checkups, diet, delivery and newborn care.</p><a class="link-arrow" href="${slugUrl('maternity-hospital-erode')}">Pregnancy care in Erode ${icon('arrow')}</a></div>
<div class="card flat"><span class="ico">${icon('flower')}</span><h3>PCOS and hormonal health</h3><p>Irregular periods, weight, acne and thyroid, explained in Tamil.</p><a class="link-arrow" href="${slugUrl('pcos-treatment-erode')}">PCOS treatment ${icon('arrow')}</a></div>
<div class="card flat"><span class="ico">${icon('microscope')}</span><h3>Fertility and conception</h3><p>When to seek help, what tests are done, and what IUI involves.</p><a class="link-arrow" href="${slugUrl('infertility-treatment-erode')}">Fertility and IUI ${icon('arrow')}</a></div>
<div class="card flat"><span class="ico">${icon('droplets')}</span><h3>Menstrual health</h3><p>Normal and abnormal periods, period pain and when to see a doctor.</p><a class="link-arrow" href="${slugUrl('gynecologist-erode')}">Gynaecology ${icon('arrow')}</a></div>
<div class="card flat"><span class="ico">${icon('sparkles')}</span><h3>Menopause</h3><p>Understanding symptoms and staying healthy through the change.</p><a class="link-arrow" href="${slugUrl('gynecologist-erode')}#menopause">Menopause care ${icon('arrow')}</a></div>
</div></div></section>

<section class="section section-soft"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('message')} Watch and follow</span><h2>Find us on <em>social media</em></h2></div>
${socialCards()}
<div class="callout" style="margin-top:1.6rem;max-width:820px"><p><b>Have a topic you would like covered?</b> <a href="${wa('Hello Abishek Hospital, I have a health topic suggestion for your videos: ')}" target="_blank" rel="noopener">Send us a message on WhatsApp</a>.</p></div></div></section>

<section class="section"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('help')} Quick answers</span><h2>Video <em>FAQs</em></h2></div>
${faqBlock(videoFaqs)}</div></section>
${ctaBand()}`,
};

/* ---------- CONTACT ---------- */
const contactFaqs = [
  ['What are the clinic hours?', `${site.hours.opd}. Emergency care is available ${site.hours.emergency}.`],
  ['Is there a landmark near the hospital?', `${site.name} is at ${site.address.line1}, ${site.address.area}, close to the bus stand.`],
  ['Is emergency care available at night?', `Yes. Call ${P} at any hour, or come straight to the hospital. In a life-threatening emergency, dial 108 or 112 for an ambulance.`],
];
export const contact = {
  path: '/contact/',
  title: 'Contact & Directions | Abishek Hospital, Erode Fort',
  description: `Visit Abishek Hospital at ${site.address.line1}, Erode Fort. ${site.hours.opd}; emergency 24/7. Call or WhatsApp ${P} to book.`,
  schemaType: 'ContactPage',
  geo: true,
  crumbs: [['Home', '/'], ['Contact & directions']],
  faqs: contactFaqs,
  render: (ctx) => `
<section class="page-hero"><div class="wrap">
${crumbs([['Home', '/'], ['Contact & directions']])}
<span class="eyebrow">${icon('pin')} Find us</span>
<h1>Visit <em>Abishek Hospital</em></h1>
<span class="tamil-line" lang="ta">அபிஷேக் மருத்துவமனை, ஈரோடு கோட்டை</span>
<p class="lead">Book your appointment by WhatsApp or phone, or walk in during clinic hours. Emergency care is available 24 hours a day.</p>
${statusLine()}
<div class="btn-row">${btnWA()}${btnCall(undefined, 'btn btn-outline')}${btnDir()}</div>
</div></section>

<div class="section"><div class="wrap"><div class="contact-grid">
<div>${infoList()}<div style="margin-top:1.4rem"><b>Follow us</b><div style="margin-top:10px">${socialList()}</div></div>
<div style="margin-top:1.4rem"><b>Been treated here?</b><p style="margin:.3rem 0 .8rem;max-width:34rem">Your honest review on Google helps other families in Erode choose the right care.</p>${btnReview()}</div></div>
<div>${mapCard()}${lookForPhoto(ctx)}</div>
</div></div></div>

<section class="section section-soft"><div class="wrap"><div class="contact-grid" style="align-items:start">
<div><span class="eyebrow">${icon('send')} Book an appointment</span><h2>Tell us how we can <em>help</em></h2>
<p class="lead">Fill in your details and we will open WhatsApp with your message ready to send. Prefer to talk? Call ${P}.</p>
<p>Serving women and families in ${areas.join(', ')} and nearby towns.</p>
<p>Already have a visit? <a href="/visit-reminder/">Add it to your phone's calendar</a> with a reminder.</p></div>
<div>
<form class="form form-card" data-wa-form data-wa="${site.phone.wa}" data-mail="${site.email}" novalidate>
<div class="field"><label for="f-name">Your name <span aria-hidden="true">*</span></label><input id="f-name" name="name" type="text" autocomplete="name" required><span class="err">Please enter your name.</span></div>
<div class="field"><label for="f-phone">Phone or WhatsApp number <span aria-hidden="true">*</span></label><input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required><span class="err">Please enter your phone number.</span></div>
<div class="field"><label for="f-service">Service needed <span aria-hidden="true">*</span></label><select id="f-service" name="service" required><option value="">Select a service</option>${services.map((s) => `<option>${s.short}</option>`).join('')}<option>Menopause care and family planning</option><option>General query</option></select><span class="err">Please choose a service.</span></div>
<div class="field"><label for="f-msg">Message (optional)</label><textarea id="f-msg" name="message" placeholder="Preferred date and time, or your question"></textarea></div>
<div class="btn-row" style="margin-top:0"><button class="btn btn-wa" type="submit">${icon('whatsapp')} Send on WhatsApp</button><button class="btn btn-outline" type="button" data-mail-btn>${icon('mail')} Send by email</button></div>
<p class="note" role="status" aria-live="polite" data-status></p>
<p class="note">For emergencies, call ${P} (24/7). Please do not include medical reports or sensitive details in this message.</p>
</form>
<noscript><div class="callout"><p>Please book by <a href="${wa('Hello Abishek Hospital, I would like to book an appointment.')}">WhatsApp</a>, call <a href="${tel}">${P}</a> or email <a href="mailto:${site.email}">${site.email}</a>.</p></div></noscript>
</div></div></div></section>

<section class="section"><div class="wrap">
<div class="sec-head"><span class="eyebrow">${icon('help')} Quick answers</span><h2>Visiting <em>us</em></h2></div>
${faqBlock(contactFaqs)}</div></section>`,
};

/* ---------- FAQ ---------- */
const group = (title, id, faqs) => `<section class="section${id === 'pregnancy' || id === 'fertility' ? ' section-soft' : ''}" id="${id}"><div class="wrap"><div class="sec-head"><h2>${title}</h2></div>${faqBlock(faqs)}</div></section>`;
const faqAbout = [
  ['Where is Abishek Hospital in Erode?', `${site.name} is at ${site.address.line1}, ${site.address.area}, ${site.address.city} – ${site.address.pin}, ${site.address.state}. <a href="/contact/">See the map and directions</a>.`],
  ['What are your clinic hours?', `${site.hours.opd}. Emergency care is available ${site.hours.emergency}.`],
  ['Do I need an appointment?', `You can book on WhatsApp or by phone at ${P}, or walk in during clinic hours.`],
  ['Is emergency care available 24/7?', `Yes. Call ${P} at any hour or come straight to the hospital. In a life-threatening emergency, dial 108 or 112 for an ambulance.`],
  ['How do I choose a gynecologist in Erode?', `Look for a registered obstetrician and gynaecologist with the qualifications and experience for the care you need, a hospital with emergency and delivery facilities available at all hours, clear and upfront pricing, and a doctor you feel comfortable talking to. ${D} is an Academic Topper and Gold Medalist from ${site.doctor.college} with over 40,000 safe deliveries, and ${site.name} offers emergency care 24/7. You are welcome to visit and meet us before you decide.`],
  ['How much is the consultation fee?', `Consultation fees are kept affordable for all income groups, and treatment costs are explained clearly before any procedure. Please call or WhatsApp ${P} for the current fee.`],
];
const faqPregnancy = [
  ['When should I first see a doctor in pregnancy?', 'As soon as you have a positive pregnancy test, ideally in the first trimester. <a href="/maternity-hospital-erode/">Read about antenatal care</a>.'],
  ['Do you offer normal and painless delivery?', 'Yes. We support normal delivery, and epidural (painless) labour is available. <a href="/normal-painless-delivery-erode/">Read about normal and painless delivery</a>.'],
  ['What makes a pregnancy high-risk?', 'Conditions such as diabetes, high blood pressure, twins, previous caesarean or pregnancy loss, thyroid disease or age under 18 or over 35. <a href="/high-risk-pregnancy-erode/">Read about high-risk pregnancy care</a>.'],
  ['Can I have a normal delivery after a caesarean?', 'Sometimes. It depends on your earlier surgery, your scar and your current pregnancy, and your doctor will assess you individually.'],
];
const faqGynae = [
  ['Which doctor should I see for period problems?', 'A gynaecologist. Irregular, heavy, painful or missed periods are common reasons to visit. <a href="/gynecologist-erode/">Read about gynaecology care</a>.'],
  ['Is PCOS curable?', 'PCOS cannot be cured, but symptoms can be controlled very well with the right treatment and lifestyle changes. <a href="/pcos-treatment-erode/">Read about PCOS treatment</a>.'],
  ['What is the difference between PCOD and PCOS?', 'The names are often used for the same problem in everyday talk. Doctors use PCOS, and the care is tailored to your symptoms and goals.'],
  ['Do you offer menopause care and family planning?', 'Yes. We offer counselling and care for menopause and perimenopause, and personalised, affordable family planning and contraception advice.'],
];
const faqFertility = [
  ['How long should we try before seeing a doctor?', 'Twelve months if the woman is under 35, and six months if she is 35 or older. <a href="/infertility-treatment-erode/">Read about infertility treatment</a>.'],
  ['What is IUI?', 'Intrauterine insemination places specially prepared sperm in the uterus around ovulation. It is short, simple and does not need anaesthesia.'],
  ['Does my husband also need tests?', 'Yes. A male factor contributes in about half of couples, and a semen analysis is a simple, painless first test.'],
];
const faqSurgery = [
  ['What is laparoscopic surgery?', 'Surgery through a few small cuts using a camera and fine instruments, with less pain, a shorter stay and faster recovery. <a href="/laparoscopic-surgery-erode/">Read about laparoscopic surgery</a>.'],
  ['Can fibroids and ovarian cysts be treated by keyhole surgery?', 'Often yes, depending on their size, number and position. Your doctor will advise you after an ultrasound.'],
];
const faqTowns = [
  ['I live in another town. Can I still visit Abishek Hospital?', `Yes. Women come to us from Salem, Tiruppur, Namakkal, Karur, Coimbatore, Gobichettipalayam and other towns. Message us on WhatsApp or call ${P} to book, and see <a href="${hubUrl}">how to reach us from your town</a>.`],
  ['Do you have a branch in my city?', 'No. We have one hospital, at Erode Fort. We do not have branches in other cities.'],
  ['Is there a Tamil page?', 'Yes. <a href="/ta/" lang="ta">தமிழில் படிக்க</a>.'],
];
export const allFaqs = [...faqAbout, ...faqPregnancy, ...faqGynae, ...faqFertility, ...faqSurgery, ...faqTowns];
export const faq = {
  path: '/faq/',
  title: 'FAQs | Gynecologist & Maternity Hospital in Erode | Abishek Hospital',
  description: `Answers to common questions about pregnancy, painless delivery, PCOS, fertility, IUI and laparoscopic surgery at Abishek Hospital, Erode. Call ${P}.`,
  schemaType: 'FAQPage',
  crumbs: [['Home', '/'], ['FAQs']],
  faqs: allFaqs,
  render: () => `
<section class="page-hero"><div class="wrap">${crumbs([['Home', '/'], ['FAQs']])}
<span class="eyebrow">${icon('help')} Your questions, answered</span>
<h1>Frequently Asked <em>Questions</em></h1>
<p class="lead">Quick answers about visiting Abishek Hospital in Erode and the care we offer. Cannot find what you need? Message us on WhatsApp or call ${P}.</p>
<div class="btn-row">${btnWA('Hello Abishek Hospital, I have a question.', 'Ask on WhatsApp')}${btnCall(undefined, 'btn btn-outline')}</div></div></section>
${group('About the hospital', 'hospital', faqAbout)}
${group('Pregnancy and delivery', 'pregnancy', faqPregnancy)}
${group('Gynaecology, PCOS and menopause', 'gynaecology', faqGynae)}
${group('Fertility and IUI', 'fertility', faqFertility)}
${group('Laparoscopic surgery', 'surgery', faqSurgery)}
${group('Visiting from other towns', 'towns', faqTowns)}
${ctaBand()}`,
};
