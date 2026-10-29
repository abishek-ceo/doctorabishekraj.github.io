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
  // `emergency` is also the wording of the "Open now" line: the hospital is open round the clock.
  hours: { opd: 'Mon – Sat, 9:00 AM – 6:30 PM', days: [1, 2, 3, 4, 5, 6], open: '09:00', close: '18:30', emergency: '24 hours a day, 7 days a week' },
  maps: {
    view: 'https://www.google.com/maps/search/?api=1&query=Abishek+Hospital+Erode+Fort+Tamil+Nadu',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=Abishek+Hospital+Erode+Fort+Tamil+Nadu',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.906606157291!2d77.7191778!3d11.341531999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f39204d44cf%3A0xc80ad23add3dfe23!2sAbishek%20hospital!5e0!3m2!1sen!2sin!4v1775065567126!5m2!1sen!2sin',
  },
};

export const social = [
  { id: 'youtube', label: 'YouTube', handle: '@abishekmedicalcenter', url: 'https://www.youtube.com/@abishekmedicalcenter',
    alt: ['https://www.youtube.com/channel/UCyuPSFNLWCyKALkSbKXVZIg'] },   // same channel by ID (its description shows this hospital's address)
  { id: 'instagram', label: 'Instagram', handle: 'dr.jayanthiprabakaran', url: 'https://www.instagram.com/dr.jayanthiprabakaran' },
  { id: 'facebook', label: 'Facebook', handle: 'dr.jayanthi.prabakaran', url: 'https://www.facebook.com/dr.jayanthi.prabakaran' },
];

// Google reviews. A Place ID is the base64 form of the feature id in the Maps embed above (0x3ba96f39204d44cf:0xc80ad23add3dfe23),
// so this is the same listing. It was derived, not opened (Google is blocked in the build sandbox): tap the link once to confirm.
export const reviews = {
  placeId: 'ChIJz0RNIDlvqTsRI_493TrSCsg',
  write: 'https://search.google.com/local/writereview?placeid=ChIJz0RNIDlvqTsRI_493TrSCsg',
};

// Numbers exactly as stated on the previous site.
export const stats = [
  { n: '40,000+', label: 'Safe deliveries' },
  { n: '2,500+', label: 'Epidural (painless) deliveries' },
  { n: '500+', label: 'IUI conceptions' },
  { n: '7,000+', label: 'Laparoscopic gynaecological surgeries' },
];

// Service pages (also drive the menu, cards, footer and sitemap).
export const services = [
  { slug: 'maternity-hospital-erode', short: 'Maternity & Pregnancy Care', icon: 'baby', hint: 'Antenatal, delivery & postnatal care',
    blurb: 'Antenatal checkups, delivery and postnatal care, with emergency care available 24/7.', specialty: 'Obstetric' },
  { slug: 'normal-painless-delivery-erode', short: 'Normal & Painless Delivery', icon: 'syringe', hint: 'Normal birth with epidural option',
    blurb: 'Supported normal delivery with the option of epidural (painless) labour. Over 2,500 epidural deliveries.', specialty: 'Obstetric' },
  { slug: 'high-risk-pregnancy-erode', short: 'High-Risk Pregnancy Care', icon: 'activity', hint: 'Closer monitoring, planned delivery',
    blurb: 'Specialised, closely monitored care for complex pregnancies, with 24/7 monitoring.', specialty: 'Obstetric' },
  { slug: 'gynecologist-erode', short: 'Gynaecology & Women’s Health', icon: 'stethoscope', hint: 'Periods, fibroids, cysts, menopause',
    blurb: 'Lady doctor consultations for periods, fibroids, cysts, discharge, pelvic pain, menopause and family planning.', specialty: 'Gynecologic' },
  { slug: 'pcos-treatment-erode', short: 'PCOS / PCOD Treatment', icon: 'flower', hint: 'Hormonal & irregular-period care',
    blurb: 'Diagnosis and management of PCOS, thyroid and other hormonal conditions.', specialty: 'Gynecologic' },
  { slug: 'infertility-treatment-erode', short: 'Fertility & IUI Treatment', icon: 'microscope', hint: 'Infertility evaluation and IUI',
    blurb: 'Fertility evaluation and IUI treatment, with over 500 conceptions through IUI.', specialty: 'Gynecologic' },
  { slug: 'laparoscopic-surgery-erode', short: 'Laparoscopic (Keyhole) Surgery', icon: 'scissors', hint: 'Minimally invasive gynae surgery',
    blurb: 'Minimally invasive gynaecological surgery. Over 7,000 laparoscopic surgeries performed.', specialty: 'Gynecologic' },
];

export const areas = ['Erode', 'Perundurai', 'Bhavani', 'Surampatti', 'Kollampalayam', 'Veerappanchatram', 'Thindal'];

export const tamil = {
  hero: 'ஈரோடு மகப்பேறு மருத்துவமனை · மகளிர் மருத்துவ நிபுணர்',
  emergency: '24 மணி நேர அவசர சிகிச்சை',
};

// Videos embedded on the site. Only add a video here once it is confirmed to be on the hospital's own channel.
export const featuredVideo = { id: 'RI4eVa9w0uY', title: 'Doctor’s tips for a healthy pregnancy' };
