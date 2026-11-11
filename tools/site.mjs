// Single source of truth for hospital facts. Everything here was already published on the previous
// site (index.html / JSON-LD) - do not add claims here that the hospital has not approved.

export const site = {
  name: 'Abishek Hospital',
  altName: 'Abishek Medical Center',
  url: 'https://abishekhospital.com',
  startYear: 2025,
  doctor: {
    name: 'Dr. Jayanthi Prabakaran',
    role: 'Consultant Obstetrician & Gynaecologist',
    college: 'Coimbatore Medical College',
    slug: 'dr-jayanthi-prabakaran',
    // Medical council registration, supplied by the doctor. Indian telemedicine rules ask for it to be displayed; it is printed on the online consultation
    // pages and the doctor page, and added to the doctor's structured data. Not verified against the council's register from here.
    reg: { body: 'Tamil Nadu Medical Council', short: 'TNMC', no: '60813' },
  },
  phone: { display: '97505 11225', intl: '+91 97505 11225', tel: '+919750511225', wa: '919750511225' },
  email: 'info@abishekhospital.com',
  address: {
    line1: 'No.18, Near Bus Stand, Bharathi Street',
    area: 'Erode Fort',
    city: 'Erode',
    state: 'Tamil Nadu',
    pin: '638001',
  },
  geo: { lat: 11.341532, lng: 77.7191778 },
  // days = outpatient clinic days (0 = Sunday ... 6 = Saturday); keep `opd` worded to match. Used by the structured data and the reminder page.
  hours: { opd: 'Mon – Sat, 9:00 AM – 6:30 PM', days: [1, 2, 3, 4, 5, 6], open: '09:00', close: '18:30', emergency: '24 hours a day, 7 days a week' },
  maps: {
    view: 'https://www.google.com/maps/search/?api=1&query=Abishek+Hospital+Erode+Fort+Tamil+Nadu',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=Abishek+Hospital+Erode+Fort+Tamil+Nadu',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.906606157291!2d77.7191778!3d11.341531999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f39204d44cf%3A0xc80ad23add3dfe23!2sAbishek%20hospital!5e0!3m2!1sen!2sin!4v1775065567126!5m2!1sen!2sin',
  },
};

// Search-engine ownership checks. Paste the content="..." value of the tag Google Search Console (or Bing Webmaster Tools) gives you,
// then rebuild: it is added to every page's <head>. Leave empty until you have one.
export const verification = { google: '', bing: '' };

export const social = [
  { id: 'youtube', label: 'YouTube', handle: '@drjayanthiprabakaran', url: 'https://www.youtube.com/@drjayanthiprabakaran',
    alt: ['https://www.youtube.com/channel/UCyuPSFNLWCyKALkSbKXVZIg'] },   // same channel by ID (its description shows this hospital's address)
  // The account that posts for the hospital. It was renamed from abishekmedicalcenter to dr.jayanthiprabakaran (the old address now shows "page isn't available", checked 11 Nov 2026).
  { id: 'instagram', label: 'Instagram', handle: 'dr.jayanthiprabakaran', url: 'https://www.instagram.com/dr.jayanthiprabakaran/' },
  { id: 'facebook', label: 'Facebook', handle: 'dr.jayanthi.prabakaran', url: 'https://www.facebook.com/dr.jayanthi.prabakaran' },
];

// Google reviews. A Place ID is the base64 form of the feature id in the Maps embed above (0x3ba96f39204d44cf:0xc80ad23add3dfe23),
// so this is the same listing. It was derived, not opened (Google is blocked in the build sandbox): tap the link once to confirm.
export const reviews = {
  placeId: 'ChIJz0RNIDlvqTsRI_493TrSCsg',
  write: 'https://search.google.com/local/writereview?placeid=ChIJz0RNIDlvqTsRI_493TrSCsg',
  // Shown as plain text on the home and contact pages ("5.0 · 1,700+ Google reviews"), read from the Business Profile (5.0 with 1,741 reviews in November 2026).
  // Update both if the rating on Google changes. Not marked up as structured data: Google does not allow a business to mark up reviews of itself.
  rating: '5.0', count: '1,700+',
  view: site.maps.view,   // opens the hospital's Google Maps listing, where the reviews are
};

// Numbers exactly as stated on the previous site.
export const stats = [
  { n: '40,000+', label: 'Safe deliveries' },
  { n: '2,500+', label: 'Epidural (painless) deliveries' },
  { n: '500+', label: 'IUI conceptions' },
  { n: '7,000+', label: 'Laparoscopic gynaecological surgeries' },
];

// Service pages (also drive the menu, cards, footer and sitemap). The online consultation is listed first: it is the primary service on the website.
export const services = [
  { slug: 'online-consultation', short: 'Online Consultation', icon: 'video', hint: 'Audio or video call from home', online: true,
    blurb: 'Talk to the gynaecologist from home by audio or video call. ₹499 for up to 15 minutes, with a slot based on the doctor’s availability.', specialty: 'Gynecologic' },
  { slug: 'maternity-hospital-erode', short: 'Maternity & Pregnancy Care', icon: 'baby', hint: 'Antenatal, delivery & postnatal care',
    blurb: 'Antenatal checkups, delivery and postnatal care, with emergency care available 24/7.', specialty: 'Obstetric' },
  { slug: 'normal-painless-delivery-erode', short: 'Normal & Painless Delivery', icon: 'syringe', hint: 'Normal birth with epidural option',
    blurb: 'Supported normal delivery with the option of epidural (painless) labour. Over 2,500 epidural deliveries.', specialty: 'Obstetric' },
  { slug: 'caesarean-delivery-erode', short: 'Caesarean (C-Section) Delivery', icon: 'hospital', hint: 'When it is advised, and recovery',
    blurb: 'When a caesarean is advised, what to expect during the operation and how to recover.', specialty: 'Obstetric' },
  { slug: 'high-risk-pregnancy-erode', short: 'High-Risk Pregnancy Care', icon: 'activity', hint: 'Closer monitoring, planned delivery',
    blurb: 'Specialised, closely monitored care for complex pregnancies, with 24/7 monitoring.', specialty: 'Obstetric' },
  { slug: 'postnatal-care-erode', short: 'Postnatal Care', icon: 'bed', hint: 'Recovery, feeding and checkup',
    blurb: 'Recovery after normal or caesarean delivery, breastfeeding support, your mood and your postnatal checkup.', specialty: 'Obstetric' },
  { slug: 'gynecologist-erode', short: 'Gynaecology & Women’s Health', icon: 'stethoscope', hint: 'Periods, fibroids, cysts, menopause',
    blurb: 'Lady doctor consultations for periods, fibroids, cysts, discharge, pelvic pain, menopause and family planning.', specialty: 'Gynecologic' },
  { slug: 'fibroids-ovarian-cyst-treatment-erode', short: 'Fibroids & Ovarian Cysts', icon: 'heart-pulse', hint: 'Symptoms, scans and treatment',
    blurb: 'Heavy periods, pelvic pain or pressure: tests and treatment options, including keyhole surgery when needed.', specialty: 'Gynecologic' },
  { slug: 'pcos-treatment-erode', short: 'PCOS / PCOD Treatment', icon: 'flower', hint: 'Hormonal & irregular-period care',
    blurb: 'Diagnosis and management of PCOS, thyroid and other hormonal conditions.', specialty: 'Gynecologic' },
  { slug: 'infertility-treatment-erode', short: 'Fertility & IUI Treatment', icon: 'microscope', hint: 'Infertility evaluation and IUI',
    blurb: 'Fertility evaluation and IUI treatment, with over 500 conceptions through IUI.', specialty: 'Gynecologic' },
  { slug: 'laparoscopic-surgery-erode', short: 'Laparoscopic (Keyhole) Surgery', icon: 'scissors', hint: 'Minimally invasive gynae surgery',
    blurb: 'Minimally invasive gynaecological surgery. Over 7,000 laparoscopic surgeries performed.', specialty: 'Gynecologic' },
];

// Online (audio / video) consultations. Phase 1 has no payment system on the website: a patient requests a slot on WhatsApp, our team confirms it and
// sends the payment details, and the doctor calls at the confirmed time. Change the fee here and rebuild; every page follows.
//   There are no fixed online hours or days on the website: each patient is given a slot based on the doctor's availability, confirmed on WhatsApp.
//   payUrl: the hospital's Razorpay Payment Page link for the fixed ₹499 fee (https://pages.razorpay.com/..., https://rzp.io/... or https://razorpay.me/...).
//           Leave '' to hide the "Pay" step (the team then sends payment details on WhatsApp). Only paste a link you have opened and that shows the hospital's name.
export const online = { slug: 'online-consultation', fee: 499, minutes: 15, payUrl: '' };
export const onlineSlotTa = 'மருத்துவர் இருக்கும் நேரத்தைப் பொறுத்து நேரம் ஒதுக்கப்படும்';   // Tamil: "a time is given depending on the doctor's available time" (needs the native-speaker proofread)

// Towns outside Erode that have their own page (/womens-hospital-tamil-nadu/<slug>/). km = rough road distance to Erode Fort,
// rounded from public map and travel sites (they differ by a few km); time = usual road time. Keep these honest: do not add a town
// without real travel information, and never describe a branch we do not have.
export const districts = [
  { slug: 'salem', name: 'Salem', tamil: 'சேலம்', km: 58, time: 'about 1 to 1½ hours' },
  { slug: 'tiruppur', name: 'Tiruppur', tamil: 'திருப்பூர்', km: 48, time: 'about 1 to 1½ hours' },
  { slug: 'namakkal', name: 'Namakkal', tamil: 'நாமக்கல்', km: 57, time: 'about 1 to 1½ hours' },
  { slug: 'karur', name: 'Karur', tamil: 'கரூர்', km: 65, time: 'about 1½ hours' },
  { slug: 'coimbatore', name: 'Coimbatore', tamil: 'கோயம்புத்தூர்', km: 90, time: 'about 2 hours' },
  { slug: 'gobichettipalayam', name: 'Gobichettipalayam', tamil: 'கோபிச்செட்டிபாளையம்', km: 37, time: 'about 1 hour' },
];

export const areas = ['Erode', 'Perundurai', 'Bhavani', 'Surampatti', 'Kollampalayam', 'Veerappanchatram', 'Thindal'];

export const tamil = {
  hero: 'ஈரோடு மகப்பேறு மருத்துவமனை · மகளிர் மருத்துவ நிபுணர்',
  emergency: '24 மணி நேர அவசர சிகிச்சை',
};

// Videos embedded on the site. Only add a video here once it is confirmed to be on the hospital's own channel.
export const featuredVideo = { id: 'RI4eVa9w0uY', title: 'Doctor’s tips for a healthy pregnancy' };
