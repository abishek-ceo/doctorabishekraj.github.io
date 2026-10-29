// Pages for women who live outside Erode: a Tamil Nadu hub, one page per nearby town, and a Tamil-language page.
// Honest by design: we have ONE hospital (Erode Fort). These pages tell a woman from another town how far we are, how to get here
// and how to plan a visit. They must not claim a branch or a clinic anywhere else.
import { site, services, districts, areas } from '../site.mjs';
import { icon, crumbs, faqBlock, ctaBand, btnWA, btnCall, servicePage, hubUrl, regionUrl, slugUrl, doctorUrl, tel } from '../lib.mjs';

const P = site.phone.display;
const addr = `${site.address.line1}, ${site.address.area}, ${site.address.city} – ${site.address.pin}`;
const related = ['maternity-hospital-erode', 'normal-painless-delivery-erode', 'gynecologist-erode', 'pcos-treatment-erode'];
const svcLinks = `<ul class="chips">${services.map((s) => `<li><a href="${slugUrl(s.slug)}">${s.short}</a></li>`).join('')}</ul>`;

const warn = `<div class="callout warn"><h3>Pregnant and far from home? Know when not to wait.</h3>
<p>Call ${P} or go to the nearest hospital straight away for bleeding, leaking of water, much less baby movement, regular painful contractions, a severe headache or blurred vision, severe tummy pain, or a fit. Emergency care at Abishek Hospital is available 24 hours a day. In a life-threatening emergency dial 108 or 112 for an ambulance.</p></div>`;

const visitPlan = (tips) => `<p>A few things make a longer journey easier:</p>
<ul class="checks">
${tips.map((t) => `<li>${t}</li>`).join('\n')}
<li><b>Book first.</b> Message us on WhatsApp or call ${P} so your visit is confirmed. Clinic hours are ${site.hours.opd}.</li>
<li><b>Bring your papers.</b> Earlier scan and lab reports, prescriptions, a list of your medicines and your antenatal card if you are pregnant.</li>
<li><b>Ask about your schedule.</b> If you are pregnant, ask the doctor at your first visit how often to come, and when it is wise to stay closer to the hospital near your due date.</li>
</ul>${warn}`;

/* ---------------- one page per nearby town ---------------- */
const town = {
  salem: {
    route: `Salem Junction and Erode Junction are on the same railway line, about 60 km apart, with trains through the day. By road, the Salem–Erode highway (through Sankari) is the usual route.`,
    tips: ['<b>Travel by train if you can.</b> It is steadier than the road, and Erode Fort is a short auto or taxi ride from Erode Junction.'],
    faq: ['Can I come from Salem for a pregnancy check-up and go back the same day?', `Yes, many women plan a return trip in a day. Message us first so your time is fixed, and allow for the journey each way (about 1 to 1½ hours by road). Your doctor will tell you how often to visit.`],
  },
  tiruppur: {
    route: `Tiruppur is on the Coimbatore–Erode railway line, so trains run between Tiruppur and Erode Junction. Buses and cars also take about an hour or a little more.`,
    tips: ['<b>If you work in shifts,</b> message us on WhatsApp and we will help you find a time that fits your day.'],
    faq: ['Is there a way to reach Erode from Tiruppur without driving?', 'Yes. Trains and buses link Tiruppur and Erode. Check the timetable on the day you travel, as timings change.'],
  },
  namakkal: {
    route: `Namakkal and Erode are linked by road, and buses connect the two towns. There are also train routes through Salem or Karur, so check the timetable before you plan.`,
    tips: ['<b>Plan your route the day before.</b> Bus and train timings change, and it helps to know your return option.'],
    faq: ['How do I get from Namakkal to Abishek Hospital?', `Most women go by bus or car. By road it is about 57 km. Use the “Get directions” button on our contact page to open the route in Google Maps.`],
  },
  karur: {
    route: `Karur and Erode are on the same railway line (Erode–Tiruchirappalli), with many trains each day, and the road is about 65 km.`,
    tips: ['<b>Train is a good option from Karur.</b> Several trains run each day, so you can pick a time that suits your appointment.'],
    faq: ['Are there trains between Karur and Erode?', 'Yes. Karur and Erode Junction are on the same line and trains run through the day. Check the IRCTC or railway timetable before you travel.'],
  },
  coimbatore: {
    route: `Coimbatore and Erode are on the same main railway line, with frequent trains, and the road between them is about 90 km.`,
    tips: ['<b>Allow for the day.</b> The journey is about two hours each way, so a morning visit is easier to fit in.'],
    faq: ['I live in Coimbatore. Why would I travel to Erode?', 'That is your choice. Some women prefer to be looked after by one senior doctor who knows their history, or like a smaller hospital. You are welcome to visit, meet the doctor and then decide.'],
  },
  gobichettipalayam: {
    route: `Gobichettipalayam is the closest of these towns, about 37 km from Erode, with regular buses between the two.`,
    tips: ['<b>It is an easy day trip.</b> Most visits fit within the morning or the afternoon.'],
    faq: ['How far is Abishek Hospital from Gobichettipalayam?', 'About 37 km by road, around an hour. Buses run between Gobichettipalayam and Erode through the day.'],
  },
};

function regionPage(d) {
  const t = town[d.slug];
  const url = regionUrl(d.slug);
  const faqs = [
    [`Is Abishek Hospital in ${d.name}?`, `No. Our hospital is at ${addr}, about ${d.km} km from ${d.name}. We do not have a branch in ${d.name}.`],
    [`How do I get from ${d.name} to Abishek Hospital?`, `${t.route} For the exact route, <a href="${site.maps.directions}" target="_blank" rel="noopener">get directions on Google Maps</a>.`],
    t.faq,
    [`Is emergency care available at night for women from ${d.name}?`, `Yes. Emergency care is available ${site.hours.emergency}. Call ${P} before you set out so the team is ready. In a life-threatening emergency dial 108 or 112 for an ambulance.`],
    [`Which treatments can I get at Abishek Hospital?`, `Pregnancy care and delivery, normal and painless (epidural) delivery, high-risk pregnancy care, gynaecology and lady doctor consultations, PCOS and PCOD treatment, fertility and IUI treatment, laparoscopic surgery, menopause care and family planning. <a href="${hubUrl}">See all services and how to reach us</a>.`],
  ];
  const crumbsArr = [['Home', '/'], ['Women across Tamil Nadu', hubUrl], [d.name]];
  const data = {
    icon: 'pin',
    crumbs: crumbsArr,
    eyebrow: `${d.name} to Erode`,
    h1: `Gynecologist &amp; Maternity Hospital for Women from <em>${d.name}</em>`,
    tamil: `${d.tamil} · ஈரோடு அபிஷேக் மருத்துவமனை · மகளிர் &amp; மகப்பேறு மருத்துவம்`,
    lead: `Women from ${d.name} come to Abishek Hospital at Erode Fort for pregnancy care, delivery, gynaecology, PCOS and fertility treatment. We are about ${d.km} km from ${d.name}, and ${site.doctor.name} leads the care.`,
    waText: `Hello Abishek Hospital, I am from ${d.name} and would like to book an appointment.`,
    facts: [
      { icon: 'pin', title: `About ${d.km} km from ${d.name}`, text: `By road, ${d.time}` },
      { icon: 'award', title: `Led by ${site.doctor.name}`, text: '40,000+ safe deliveries' },
      { icon: 'syringe', title: 'Painless (epidural) delivery', text: 'Over 2,500 epidural deliveries' },
      { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
      { icon: 'clock', title: 'Clinic hours', text: site.hours.opd },
    ],
    sections: [
      { id: 'distance', title: `How far is Abishek Hospital from ${d.name}?`, nav: 'Distance and route', html: `
<p>Abishek Hospital is at ${addr}, close to the bus stand. From ${d.name} it is about ${d.km} km by road, usually ${d.time}.</p>
<p>${t.route}</p>
<p><a class="btn btn-outline" href="${site.maps.directions}" target="_blank" rel="noopener">${icon('navigation')} Get directions</a></p>` },
      { id: 'care', title: 'Care you can get at Abishek Hospital', nav: 'Our care', html: `
<p>${site.doctor.name}, ${site.doctor.role}, is an Academic Topper from ${site.doctor.college}, with over 40,000 safe deliveries. <a href="${doctorUrl}">Read about the doctor</a>.</p>
${svcLinks}` },
      { id: 'plan', title: `Planning your visit from ${d.name}`, nav: 'Plan your visit', html: visitPlan(t.tips) },
    ],
    faqs,
    related,
  };
  return {
    path: url,
    title: `Women’s Hospital for ${d.name} Patients | Abishek Hospital, Erode`,
    description: `Women from ${d.name} visit Abishek Hospital, Erode Fort (about ${d.km} km): gynecologist, painless delivery, PCOS, IUI, 24/7 emergency. Call ${P}.`,
    schemaType: 'WebPage',
    crumbs: crumbsArr,
    faqs,
    render: () => servicePage(data),
  };
}
export const regionPages = districts.map(regionPage);

/* ---------------- the Tamil Nadu hub ---------------- */
const hubFaqs = [
  ['Which hospital can women across Tamil Nadu visit for pregnancy and gynaecology care outside the big cities?', `${site.name} at Erode Fort is a women’s health and maternity hospital led by ${site.doctor.name}, an Academic Topper from ${site.doctor.college} with over 40,000 safe deliveries. When you choose any hospital, look at the doctor’s qualifications and experience, whether emergency and delivery care is available at all hours, and whether costs are explained clearly. You are welcome to visit and meet us before you decide.`],
  ['Does Abishek Hospital have branches in Chennai, Coimbatore or other cities?', 'No. We have one hospital, at Erode Fort. Women travel to us from nearby towns such as Salem, Tiruppur, Namakkal, Karur, Coimbatore and Gobichettipalayam, and we are glad to help you plan the journey.'],
  ['Is painless (epidural) delivery available?', `Yes. We support normal delivery and offer epidural (painless) labour, with over 2,500 epidural deliveries. <a href="${slugUrl('normal-painless-delivery-erode')}">Read about normal and painless delivery</a>.`],
  ['I live far away. Can I book before I travel?', `Yes, and we suggest it. Message us on WhatsApp or call ${P} so your time is confirmed. Clinic hours are ${site.hours.opd}.`],
  ['Do you treat PCOS, irregular periods and fertility problems?', `Yes. See <a href="${slugUrl('pcos-treatment-erode')}">PCOS treatment</a>, <a href="${slugUrl('gynecologist-erode')}">gynaecology and lady doctor care</a> and <a href="${slugUrl('infertility-treatment-erode')}">fertility and IUI treatment</a>.`],
  ['Is the hospital open at night?', `Emergency care is available ${site.hours.emergency}. Call ${P} at any hour. In a life-threatening emergency dial 108 or 112 for an ambulance.`],
  ['How do I get to the hospital from Erode railway station or the bus stand?', `The hospital is at ${addr}, close to the bus stand. From Erode Junction it is a short auto or taxi ride. Use <a href="${site.maps.directions}" target="_blank" rel="noopener">Get directions</a> for the route from where you are.`],
];
const hubCrumbs = [['Home', '/'], ['Women across Tamil Nadu']];
const hubData = {
  icon: 'hospital',
  crumbs: hubCrumbs,
  eyebrow: 'For women across Tamil Nadu',
  h1: 'Women’s Hospital for Patients <em>Across Tamil Nadu</em>',
  tamil: 'தமிழ்நாடு முழுவதும் உள்ள பெண்களுக்கான மகளிர் &amp; மகப்பேறு மருத்துவமனை · ஈரோடு',
  lead: `Abishek Hospital at Erode Fort is a gynecologist and maternity hospital led by ${site.doctor.name}. Erode is easy to reach by rail and road from Salem, Tiruppur, Namakkal, Karur, Coimbatore and many other towns. We are one hospital, and we will help you plan your visit.`,
  waText: 'Hello Abishek Hospital, I am visiting from another town and would like to book an appointment.',
  facts: [
    { icon: 'hospital', title: 'One hospital, Erode Fort', text: addr },
    { icon: 'award', title: `Led by ${site.doctor.name}`, text: '40,000+ safe deliveries' },
    { icon: 'syringe', title: 'Painless (epidural) delivery', text: 'Over 2,500 epidural deliveries' },
    { icon: 'siren', title: 'Emergency care 24/7', text: `Call ${P} at any hour` },
    { icon: 'clock', title: 'Clinic hours', text: site.hours.opd },
  ],
  sections: [
    { id: 'about', title: 'One hospital, easy to reach from many towns', nav: 'About us', html: `
<p>${site.name} is a women’s health and maternity hospital at ${addr}, close to the bus stand. We have a single hospital and no branches in other cities. Erode is a busy rail and road junction in western Tamil Nadu, which is why women from nearby towns can reach us in an hour or two.</p>
<p>Under ${site.doctor.name}, we provide pregnancy care and delivery, normal and painless delivery, high-risk pregnancy care, gynaecology, PCOS treatment, fertility and IUI treatment and laparoscopic surgery. Emergency care is available ${site.hours.emergency}.</p>` },
    { id: 'towns', title: 'How far are we from your town?', nav: 'Towns', wide: true, html: `
<div class="grid cards">${districts.map((d) => `<a class="card" href="${regionUrl(d.slug)}"><span class="ico">${icon('pin')}</span><h3>${d.name}</h3><p>About ${d.km} km by road, ${d.time}. <span lang="ta">${d.tamil}</span></p><span class="link-arrow">Visiting from ${d.name} ${icon('arrow')}</span></a>`).join('')}</div>
<p style="margin-top:1.2rem">Closer to home? We also see women from ${areas.slice(1).join(', ')} and nearby towns in Erode district.</p>` },
    { id: 'reach', title: 'How to reach Erode Fort', nav: 'How to reach us', html: `
<h3>By train</h3>
<p>Erode Junction is a major railway junction. Lines run from Erode towards Coimbatore and Tiruppur, towards Salem, and towards Karur and Tiruchirappalli, and many trains connect Erode with Chennai (roughly six to seven hours). Check the IRCTC or railway timetable before you travel. From the station, an auto or taxi takes you to Erode Fort.</p>
<h3>By bus or car</h3>
<p>The hospital is at ${site.address.line1}, ${site.address.area}, close to the bus stand. Buses connect Erode with the surrounding towns. Use the map link below for the route from where you are.</p>
<p><a class="btn btn-outline" href="${site.maps.directions}" target="_blank" rel="noopener">${icon('navigation')} Get directions</a></p>` },
    { id: 'care', title: 'Women’s health care we offer', nav: 'Our care', html: `${svcLinks}<p>Looking for something specific? Choose a service above, or message us and we will point you to the right doctor visit.</p>` },
    { id: 'plan', title: 'Planning a visit from another town', nav: 'Plan your visit', html: visitPlan([]) },
  ],
  faqs: hubFaqs,
  related,
};
export const hub = {
  path: hubUrl,
  title: 'Women’s Hospital in Tamil Nadu | Abishek Hospital, Erode',
  description: `Erode women’s hospital for patients across Tamil Nadu: Salem, Tiruppur, Namakkal, Karur, Coimbatore. Painless delivery, PCOS, IUI, laparoscopy, 24/7 emergency.`,
  schemaType: 'WebPage',
  crumbs: hubCrumbs,
  faqs: hubFaqs,
  render: () => servicePage(hubData),
};

/* ---------------- Tamil-language page ---------------- */
const taIcons = { 'maternity-hospital-erode': 'baby', 'normal-painless-delivery-erode': 'syringe', 'high-risk-pregnancy-erode': 'activity', 'gynecologist-erode': 'stethoscope', 'pcos-treatment-erode': 'flower', 'infertility-treatment-erode': 'microscope', 'laparoscopic-surgery-erode': 'scissors' };
const taServices = [
  ['maternity-hospital-erode', 'கர்ப்பகால பராமரிப்பு &amp; பிரசவம்', 'கர்ப்பம் உறுதியானது முதல் பிரசவம் வரை, பிரசவத்திற்குப் பிந்தைய கவனிப்பும் உட்பட முழுமையான பராமரிப்பு.'],
  ['normal-painless-delivery-erode', 'சுகப்பிரசவம் &amp; வலியில்லா பிரசவம்', 'சுகப்பிரசவத்திற்கு ஆதரவு; எபிடியூரல் முறையில் வலியில்லா பிரசவ வசதி.'],
  ['high-risk-pregnancy-erode', 'அதிக ஆபத்துள்ள கர்ப்பம்', 'சர்க்கரை நோய், உயர் ரத்த அழுத்தம், இரட்டைக் குழந்தைகள் போன்ற நிலைகளில் நெருங்கிய கண்காணிப்பு.'],
  ['gynecologist-erode', 'மகளிர் நல சிகிச்சை', 'மாதவிடாய் பிரச்சனைகள், கர்ப்பப்பை கட்டிகள், சினைப்பை நீர்க்கட்டிகள், வெள்ளைப்படுதல், மெனோபாஸ், குடும்பக் கட்டுப்பாடு ஆலோசனை.'],
  ['pcos-treatment-erode', 'பிசிஓஎஸ் / பிசிஓடி சிகிச்சை', 'ஒழுங்கற்ற மாதவிடாய், உடல் எடை, முகப்பரு போன்றவற்றுக்கான சிகிச்சை.'],
  ['infertility-treatment-erode', 'குழந்தையின்மை &amp; ஐ.யூ.ஐ சிகிச்சை', 'குழந்தையின்மைக்கான பரிசோதனைகளும் ஐ.யூ.ஐ சிகிச்சையும்.'],
  ['laparoscopic-surgery-erode', 'லேப்ராஸ்கோபி அறுவை சிகிச்சை', 'சிறிய துளைகள் வழியாக செய்யப்படும் நவீன அறுவை சிகிச்சை; வலி குறைவு, விரைவில் குணமடைதல்.'],
];
const taFaqs = [
  ['அபிஷேக் மருத்துவமனை எங்கே உள்ளது?', `எண்.18, பேருந்து நிலையம் அருகில், பாரதி தெரு, ஈரோடு கோட்டை, ஈரோடு – ${site.address.pin}. <a href="${site.maps.directions}" target="_blank" rel="noopener">வழி காட்டும் வரைபடம்</a>.`],
  ['முன்பதிவு செய்ய வேண்டுமா?', `வாட்ஸ்அப் மூலம் அல்லது ${P} என்ற எண்ணில் அழைத்து முன்பதிவு செய்யலாம். புறநோயாளிகள் நேரத்தில் நேரடியாகவும் வரலாம்.`],
  ['வலியில்லா பிரசவம் (எபிடியூரல்) வசதி உள்ளதா?', 'ஆம். சுகப்பிரசவத்துடன் எபிடியூரல் முறையில் வலியில்லா பிரசவ வசதி உள்ளது. 2,500-க்கும் மேற்பட்ட எபிடியூரல் பிரசவங்கள் நடத்தப்பட்டுள்ளன.'],
  ['மாதவிடாய் ஒழுங்கற்று இருந்தால் எந்த மருத்துவரைப் பார்க்க வேண்டும்?', `மகளிர் நல மருத்துவரைப் (மகப்பேறு மருத்துவர்) பார்க்க வேண்டும். ஒழுங்கற்ற, அதிகமான, வலியுடன் கூடிய அல்லது நின்றுபோன மாதவிடாய்க்குப் பரிசோதனை அவசியம். <a href="${slugUrl('pcos-treatment-erode')}">பிசிஓஎஸ் சிகிச்சை பற்றி (ஆங்கிலத்தில்)</a>.`],
  ['இரவில் அவசர சிகிச்சை கிடைக்குமா?', `ஆம். 24 மணி நேரமும், வாரத்தின் ஏழு நாட்களும் அவசர சிகிச்சை உண்டு. ${P} என்ற எண்ணில் அழைக்கவும். உயிருக்கு ஆபத்தான நிலையில் 108 அல்லது 112-ஐ அழைக்கவும்.`],
];
const taWa = 'வணக்கம் அபிஷேக் மருத்துவமனை, நான் முன்பதிவு செய்ய விரும்புகிறேன்.';
export const tamilPage = {
  path: '/ta/',
  lang: 'ta',
  alternates: [['en-IN', '/'], ['ta-IN', '/ta/']],
  title: 'மகளிர் & மகப்பேறு மருத்துவமனை ஈரோடு | அபிஷேக் மருத்துவமனை',
  description: `ஈரோடு கோட்டை அபிஷேக் மருத்துவமனை: டாக்டர் ஜெயந்தி பிரபாகரன் தலைமையில் சுகப்பிரசவம், வலியில்லா பிரசவம், பிசிஓஎஸ், குழந்தையின்மை சிகிச்சை. அவசர சிகிச்சை 24 மணி நேரம்.`,
  schemaType: 'WebPage',
  withDoctor: true,
  crumbs: [['Home', '/'], ['தமிழ்']],
  faqs: taFaqs,
  render: () => `
<section class="page-hero"><div class="wrap">${crumbs([['Home', '/'], ['தமிழ்']])}
<span class="eyebrow">${icon('languages')} <span lang="ta">தமிழில்</span></span>
<h1 lang="ta">ஈரோடு <em>மகளிர் &amp; மகப்பேறு</em> மருத்துவமனை</h1>
<p class="lead" lang="ta">ஈரோடு கோட்டையில் உள்ள அபிஷேக் மருத்துவமனை, டாக்டர் ஜெயந்தி பிரபாகரன் தலைமையில் இயங்கும் மகளிர் நலம் மற்றும் மகப்பேறு மருத்துவமனை. கர்ப்பகால பராமரிப்பு, சுகப்பிரசவம், வலியில்லா பிரசவம், பிசிஓஎஸ், குழந்தையின்மை சிகிச்சை மற்றும் லேப்ராஸ்கோபி அறுவை சிகிச்சை இங்கு கிடைக்கின்றன. 24 மணி நேர அவசர சிகிச்சை உண்டு.</p>
<div class="btn-row">${btnWA(taWa, 'வாட்ஸ்அப்பில் முன்பதிவு')}${btnCall(`அழைக்க ${P}`, 'btn btn-outline')}</div>
</div></section>

<section class="section"><div class="wrap">
<div class="sec-head"><h2 lang="ta">எங்கள் சிகிச்சைகள்</h2></div>
<div class="grid cards">${taServices.map(([slug, name, blurb]) => `<a class="card" href="${slugUrl(slug)}"><span class="ico">${icon(taIcons[slug])}</span><h3 lang="ta">${name}</h3><p lang="ta">${blurb}</p><span class="link-arrow">Details in English ${icon('arrow')}</span></a>`).join('')}</div>
</div></section>

<section class="section section-soft"><div class="wrap split two">
<div><h2 lang="ta">எங்கள் மருத்துவர்</h2>
<p lang="ta">டாக்டர் ஜெயந்தி பிரபாகரன், கோயம்புத்தூர் மருத்துவக் கல்லூரியில் படிப்பில் முதலிடம் பெற்றவர். மகப்பேறு மற்றும் மகளிர் நல மருத்துவ நிபுணரான அவர், 40,000-க்கும் மேற்பட்ட பாதுகாப்பான பிரசவங்களை நடத்தியுள்ளார்.</p>
<p><a class="link-arrow" href="${doctorUrl}">About the doctor (English) ${icon('arrow')}</a></p></div>
<div class="card flat"><h3 lang="ta">முகவரி &amp; நேரம்</h3>
<p lang="ta">எண்.18, பேருந்து நிலையம் அருகில், பாரதி தெரு, ஈரோடு கோட்டை, ஈரோடு – ${site.address.pin}</p>
<p lang="ta">புறநோயாளிகள் நேரம்: திங்கள் – சனி, காலை 9:00 – மாலை 6:30<br>அவசர சிகிச்சை: 24 மணி நேரமும், வாரம் முழுவதும்</p>
<p><a href="${tel}">${site.phone.intl}</a></p></div>
</div></section>

<section class="section"><div class="wrap">
<div class="sec-head"><h2 lang="ta">பிற ஊர்களிலிருந்து வருபவர்களுக்கு</h2>
<p class="lead" lang="ta">ஈரோடு ரயில் சந்திப்பு பல ஊர்களுடன் இணைக்கப்பட்டுள்ளது. உங்கள் ஊரிலிருந்து தூரம் மற்றும் வழி விவரங்களுக்கு (ஆங்கிலத்தில்):</p></div>
<ul class="chips">${districts.map((d) => `<li><a href="${regionUrl(d.slug)}"><span lang="ta">${d.tamil}</span> · ${d.km} km</a></li>`).join('')}</ul>
</div></section>

<section class="section"><div class="wrap">
<div class="sec-head"><h2 lang="ta">பெண்கள் ஆரோக்கிய வழிகாட்டி</h2></div>
<ul class="chips"><li><a href="/ta/white-discharge/" lang="ta">வெள்ளைப்படுதல்</a></li><li><a href="/ta/irregular-periods/" lang="ta">ஒழுங்கற்ற மாதவிடாய்</a></li><li><a href="/ta/early-pregnancy-symptoms/" lang="ta">கர்ப்பத்தின் ஆரம்ப அறிகுறிகள்</a></li></ul>
</div></section>

<section class="section section-soft"><div class="wrap">
<div class="sec-head"><h2 lang="ta">அடிக்கடி கேட்கப்படும் கேள்விகள்</h2></div>
${faqBlock(taFaqs)}</div></section>
${ctaBand('முன்பதிவுக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்', `வாட்ஸ்அப் செய்யுங்கள் அல்லது ${P} என்ற எண்ணில் அழைக்கவும். அவசர சிகிச்சை 24 மணி நேரமும் உண்டு.`, taWa)}`,
};
