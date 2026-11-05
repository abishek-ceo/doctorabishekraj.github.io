// Online (audio / video) consultation: English page and its Tamil twin, each with one short request form.
// Fee, minutes and the registration number all come from `online` in site.mjs. The website shows NO online hours or days: the team gives each patient
// a slot based on the doctor's availability (in practice an evening slot, 6:30 to 8:30 pm, which the owner asked us NOT to print on the website).
// The page is for patients who cannot come to the hospital (far away or abroad), so it deliberately has no Call / "Book appointment" buttons, no phone number
// and no Call / WhatsApp / Directions bar (page.focus in lib.mjs). The form opens WhatsApp with the request written out; the team confirms a slot and the
// payment details there, and the doctor calls the patient at that time.
// Keep the wording honest: this is general guidance on how the service works, not a promise of treatment, and never a claim about outcomes.
import { site, online, onlineSlotTa } from '../site.mjs';
import { icon, crumbs, servicePage, wa, tel, slugUrl, doctorUrl } from '../lib.mjs';
import { taPage, taList } from './guides.mjs';

const P = site.phone.display;
const D = site.doctor.name;
const fee = `₹${online.fee}`;
const slotNote = 'a slot based on the doctor’s availability';   // no fixed hours: the team confirms a slot on WhatsApp

// Razorpay Payment Page (fixed amount). A plain link that opens in a new tab: no script, no keys and no change to the Content-Security-Policy.
const payUrl = online.payUrl || '';
if (payUrl && !/^https:\/\/(pages\.razorpay\.com|rzp\.io|razorpay\.me)\//.test(payUrl)) throw new Error('online.payUrl must be a https://pages.razorpay.com/, https://rzp.io/ or https://razorpay.me/ link');
const payBtn = (label) => `<a class="btn btn-primary" href="${payUrl}" target="_blank" rel="noopener">${icon('shield')} ${label}</a>`;
const payText = payUrl
  ? `After we confirm your slot on WhatsApp, pay the ${fee} fee on our secure Razorpay payment page (UPI, cards or net banking). Please pay only after you hear from us.`
  : 'After we confirm your slot, our team sends the payment details on WhatsApp. Please do not send money before you hear from us.';
const taPayText = payUrl
  ? `நேரம் உறுதியான பிறகு, ${fee} கட்டணத்தைப் பாதுகாப்பான Razorpay பக்கத்தில் (UPI, கார்டு, நெட் பேங்கிங்) செலுத்துங்கள். எங்களிடமிருந்து தகவல் வருவதற்கு முன் பணம் செலுத்த வேண்டாம்.`
  : 'நேரம் உறுதியான பிறகு, எங்கள் குழு வாட்ஸ்அப்பில் கட்டண விவரங்களை அனுப்பும். எங்களிடமிருந்து தகவல் வருவதற்கு முன் பணம் அனுப்ப வேண்டாம்.';
const path = slugUrl(online.slug);
const taPath = `/ta/${online.slug}/`;
const list = (items) => `<ul class="checks">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const regNo = site.doctor.reg && site.doctor.reg.no;
const reg = (ta) => (regNo ? `<p${ta ? ' lang="ta"' : ''}>${ta ? 'டாக்டர் ஜெயந்தி பிரபாகரன்: தமிழ்நாடு மருத்துவக் கவுன்சில் (TNMC) பதிவு எண்' : `${D}: Tamil Nadu Medical Council (TNMC) registration no.`} <b>${regNo}</b></p>` : '');

// The patient's request, as it arrives on WhatsApp: the form fills in the details, the patient only presses send. No time is asked for: the team gives each patient a slot.
const intro = `Hello Abishek Hospital, I would like an online consultation with ${D} (${fee}, up to ${online.minutes} minutes). Please add me to the slot waiting list.`;
const taIntro = `வணக்கம் அபிஷேக் மருத்துவமனை, டாக்டர் ஜெயந்தி பிரபாகரனுடன் ஆன்லைன் ஆலோசனை (${fee}, ${online.minutes} நிமிடம் வரை) பெற விரும்புகிறேன். எனக்கான நேரத்துக்கான காத்திருப்புப் பட்டியலில் சேர்க்கவும்.`;
const waText = `${intro}\nName: \nAge: \nPlace (city / country): \nConcern: \nAudio or video call: Video call`;
const taWaText = `${taIntro}\nபெயர்: \nவயது: \nஊர் / நாடு: \nபிரச்சனை: \nஅழைப்பு வகை: வீடியோ அழைப்பு`;

// One short form, shared by the English page and the Tamil twin. Pressing the button opens WhatsApp with everything written out (see data-wa-form in site.js).
const makeForm = (t) => `<form class="form" data-wa-form data-wa="${site.phone.wa}" data-wa-intro="${t.intro}" data-say-fill="${t.sayFill}" data-say-open="${t.sayOpen}" novalidate${t.ta ? ' lang="ta"' : ''}>
<div class="field"><label for="o-name">${t.name} <span aria-hidden="true">*</span></label><input id="o-name" name="name" data-label="${t.nameL}" type="text" autocomplete="name" required><span class="err">${t.nameE}</span></div>
<div class="field"><label for="o-age">${t.age} <span aria-hidden="true">*</span></label><input id="o-age" name="age" data-label="${t.ageL}" type="text" inputmode="numeric" maxlength="3" autocomplete="off" required><span class="err">${t.ageE}</span></div>
<div class="field"><label for="o-place">${t.place} <span aria-hidden="true">*</span></label><input id="o-place" name="place" data-label="${t.placeL}" type="text" autocomplete="address-level2" placeholder="${t.placeP}" required><span class="err">${t.placeE}</span></div>
<div class="field"><label for="o-concern">${t.concern} <span aria-hidden="true">*</span></label><textarea id="o-concern" name="concern" data-label="${t.concernL}" placeholder="${t.concernP}" required></textarea><span class="err">${t.concernE}</span></div>
<div class="field"><label for="o-mode">${t.mode}</label><select id="o-mode" name="mode" data-label="${t.modeL}">${t.modes.map((m) => `<option>${m}</option>`).join('')}</select></div>
<div class="btn-row" style="margin-top:0"><button class="btn btn-wa btn-block" type="submit">${icon('whatsapp')} ${t.button}</button></div>
<p class="note" role="status" aria-live="polite" data-status></p>
<p class="note">${t.note}</p>
</form>`;

const enForm = makeForm({
  intro, sayFill: 'Please fill in the highlighted fields.', sayOpen: 'Opening WhatsApp with your request. Just press send there.',
  name: 'Your name', nameL: 'Name', nameE: 'Please enter your name.',
  age: 'Your age', ageL: 'Age', ageE: 'Please enter your age.',
  place: 'Where are you? (city / country)', placeL: 'Place (city / country)', placeP: 'For example: Dubai, or Chennai', placeE: 'Please tell us where you are.',
  concern: 'What would you like to discuss?', concernL: 'Concern', concernP: 'For example: periods have been irregular for 3 months', concernE: 'Please tell us briefly what you would like to discuss.',
  mode: 'Video or audio call', modeL: 'Call type', modes: ['Video call', 'Audio call', 'Either is fine'],
  button: 'Send my request',
  note: `Tap the button and WhatsApp opens with your details already written. Just press send. Our team then confirms your slot and how to pay the ${fee} fee, and ${D} calls you at that time. Your slot is booked only after we confirm it.`,
});
const taForm = makeForm({
  ta: true, intro: taIntro, sayFill: 'தயவுசெய்து குறிக்கப்பட்ட இடங்களை நிரப்புங்கள்.', sayOpen: 'உங்கள் கோரிக்கையுடன் வாட்ஸ்அப் திறக்கிறது. அங்கே அனுப்பினால் போதும்.',
  name: 'உங்கள் பெயர்', nameL: 'பெயர்', nameE: 'பெயரை உள்ளிடுங்கள்.',
  age: 'உங்கள் வயது', ageL: 'வயது', ageE: 'வயதை உள்ளிடுங்கள்.',
  place: 'நீங்கள் இருக்கும் ஊர் / நாடு', placeL: 'ஊர் / நாடு', placeP: 'எடுத்துக்காட்டு: துபாய், அல்லது சென்னை', placeE: 'நீங்கள் இருக்கும் இடத்தைத் தெரிவியுங்கள்.',
  concern: 'எதைப் பற்றிப் பேச விரும்புகிறீர்கள்?', concernL: 'பிரச்சனை', concernP: 'எடுத்துக்காட்டு: 3 மாதங்களாக மாதவிடாய் ஒழுங்கற்று உள்ளது', concernE: 'சுருக்கமாகத் தெரிவியுங்கள்.',
  mode: 'வீடியோ அல்லது ஆடியோ அழைப்பு', modeL: 'அழைப்பு வகை', modes: ['வீடியோ அழைப்பு', 'ஆடியோ அழைப்பு', 'ஏதாவது ஒன்று'],
  button: 'என் கோரிக்கையை அனுப்புக',
  note: `பொத்தானை அழுத்தினால் உங்கள் விவரங்கள் எழுதப்பட்ட நிலையில் வாட்ஸ்அப் திறக்கும். அனுப்பினால் போதும். எங்கள் குழு உங்கள் நேரத்தையும் ${fee} கட்டணம் செலுத்தும் வழியையும் உறுதி செய்யும்; அந்த நேரத்தில் டாக்டர் ஜெயந்தி பிரபாகரன் உங்களை அழைப்பார். நாங்கள் உறுதி செய்த பிறகே நேரம் முன்பதிவாகும்.`,
});
const formNoscript = `<noscript><div class="callout"><p>Please <a href="${wa(waText)}">send your request on WhatsApp</a>.</p></div></noscript>`;
const formAside = (title, f, ta) => `<aside class="form-aside" id="book" aria-label="${ta ? 'ஆன்லைன் ஆலோசனைக் கோரிக்கை' : 'Request an online consultation'}"><div class="form-card"><h2 class="form-title"${ta ? ' lang="ta"' : ''}>${title}</h2>${f}${ta ? '' : formNoscript}</div></aside>`;

const steps = (items, ta) => `<ol class="steps steps-compact"${ta ? ' lang="ta"' : ''}>${items.map(([b, t]) => `<li><b>${b}</b><span>${t}</span></li>`).join('')}</ol>`;
const heroSteps = steps([
  ['Fill in your details', 'Your name, age, where you are and your concern. It takes about a minute.'],
  ['Send your request', 'Tap the button. WhatsApp opens with your request already written: just press send, and you join the slot waiting list.'],
  ['Talk to the doctor', `Our team confirms your slot and how to pay the ${fee} fee. At that time ${D} calls you by video or audio.`],
]);
const taHeroSteps = steps([
  ['விவரங்களை நிரப்புங்கள்', 'பெயர், வயது, நீங்கள் இருக்கும் இடம், உங்கள் பிரச்சனை. ஒரு நிமிடம் போதும்.'],
  ['அனுப்புங்கள்', 'பொத்தானை அழுத்தினால் உங்கள் கோரிக்கை எழுதப்பட்ட நிலையில் வாட்ஸ்அப் திறக்கும். அனுப்பினால் போதும்; நேரத்துக்கான காத்திருப்புப் பட்டியலில் சேர்க்கப்படுவீர்கள்.'],
  ['மருத்துவரிடம் பேசுங்கள்', `எங்கள் குழு உங்கள் நேரத்தையும் ${fee} கட்டணம் செலுத்தும் வழியையும் உறுதி செய்யும். அந்த நேரத்தில் டாக்டர் ஜெயந்தி பிரபாகரன் உங்களை வீடியோ அல்லது ஆடியோ அழைப்பில் அழைப்பார்.`],
], true);

// No Call / WhatsApp-booking buttons on this page: it is for patients who cannot come to the hospital. The only action is the request form above.
const band = (title, text, label, href) => `<section class="cta"><div class="wrap"><div class="box"><div><h2>${title}</h2><p>${text}</p></div><div class="btn-row"><a class="btn btn-light" href="${href}">${icon('video')} ${label}</a></div></div></div></section>`;

const faqs = [
  ['Who is the online consultation for?', `Mainly for women who live far from Erode, in another city, state or country, and for anyone who cannot travel. You talk to ${D} about your condition, your reports and your treatment from wherever you are.`],
  ['How much does an online consultation cost?', `${fee} for one consultation of up to ${online.minutes} minutes. Any tests, scans or procedures the doctor advises are separate, and their cost is explained before you decide.`],
  ['When will I get my slot?', `After you send your request, our team confirms ${slotNote}. Tell us where you are in the form, so the time we give you suits you.`],
  ['Can I choose between a video call and an audio call?', 'Yes. Choose video or audio in the request form. Video lets the doctor see you, but audio is enough for many questions.'],
  ['How do I pay?', payText],
  ['Which problems can I discuss?', `Any gynaecological concern: periods, PCOS, discharge and infections, fibroids and cysts, pelvic pain, menopause, family planning and fertility questions, and review of your scan or blood reports. See <a href="${slugUrl('gynecologist-erode')}">gynaecology care</a>.`],
  ['Will I get a prescription?', 'The doctor will advise you after hearing your history and seeing your reports. Where it is safe, she will advise treatment and medicines. Some problems, and some medicines, need an examination or tests first, and then she will advise you on the next step.'],
  ['Can I use an online consultation during pregnancy?', `You can ask questions and have your reports reviewed. Routine antenatal check-ups need an examination and scans, so please see a doctor near you for those, or <a href="${slugUrl('maternity-hospital-erode')}">visit us in Erode</a> if you can. If you have bleeding, a watery leak, severe pain, a severe headache or the baby moves less, do not wait for an online call: go to your nearest hospital straight away.`],
  [`What if ${online.minutes} minutes are not enough?`, 'The doctor will tell you if your problem needs a longer discussion, an examination or a follow-up, and our team will help you arrange it.'],
  ['Can I change or cancel my slot?', 'Please message us in the same WhatsApp chat as early as you can and we will help you find another time.'],
  ['Is my information private?', 'Your details are used only to arrange and carry out your consultation. Read our <a href="/privacy-policy.html">privacy policy</a>.'],
];

const crumbArr = [['Home', '/'], ['Services', '/#services'], ['Online consultation']];
const data = {
  icon: 'video', crumbs: crumbArr, eyebrow: 'Online consultation',
  h1: 'Online Consultation with a <em>Gynaecologist</em>',
  tamil: 'ஆன்லைன் மகளிர் மருத்துவ ஆலோசனை · வீட்டிலிருந்தே',
  lead: `For women who live far from Erode or abroad, and anyone who cannot travel: talk to ${D} by video or audio call from wherever you are. ${fee} for up to ${online.minutes} minutes.`,
  splitClass: 'split-form', toc: false,
  heroHtml: `${heroSteps}${reg(false)}`,
  aside: formAside('Request your consultation', enForm),
  facts: [],
  sections: [
    { id: 'who', title: 'Who this is for', nav: 'Who it is for', html: `<p>The online consultation is made for patients who <b>cannot easily come to the hospital</b>:</p>${list([
      'Women living in another city or state, far from Erode',
      'Women living or working abroad',
      'Anyone who cannot travel, or wants the doctor’s opinion on their reports before deciding to travel',
      'Patients who want a follow-up conversation after treatment',
    ])}<p>You do not need to travel for a first discussion. You talk to ${D} about your condition and your treatment, and she tells you if an examination or a scan is needed.</p>` },
    { id: 'topics', title: 'What you can discuss', nav: 'What we cover', html: `<p>Any gynaecological concern, for example:</p>${list([
      '<b>Periods:</b> irregular, heavy, painful or missed periods',
      '<b>PCOS / PCOD</b> and other hormonal problems',
      '<b>White discharge,</b> itching and infections',
      '<b>Fibroids, ovarian cysts</b> and pelvic pain',
      '<b>Menopause</b> symptoms such as hot flushes, poor sleep and low mood',
      '<b>Family planning</b> and contraception advice',
      '<b>Fertility questions</b> and planning a pregnancy',
      '<b>Reviewing your scan or blood reports,</b> and follow-up after treatment',
      '<b>Questions during pregnancy.</b> Routine antenatal check-ups need an examination and scans, so please see a doctor near you for those',
    ])}` },
    { id: 'before', title: 'Before your call', nav: 'Before your call', html: `${list([
      'Choose a quiet place with a steady phone network. For a video call, keep WhatsApp installed.',
      'Keep your earlier reports, scan images and medicine strips ready.',
      'Note the date your last period started, and write down your questions.',
      'By requesting a consultation you agree to be advised by audio or video call. The doctor may ask you to have an examination, and may not be able to prescribe some medicines without one.',
      'Read our <a href="/terms-and-refunds/">terms, refund and cancellation policy</a>.',
    ])}${reg(false)}<p class="note">Your details are used only to arrange your consultation. Read our <a href="/privacy-policy.html">privacy policy</a>. This page is general information about the service and does not replace advice from your own doctor.</p>` },
    ...(payUrl ? [{ id: 'pay', title: 'Pay for your consultation', nav: 'Pay', html: `<p>Once our team has confirmed your slot, pay the <b>${fee}</b> consultation fee here. Please pay only after we have confirmed a time.</p>
<p>${payBtn(`Pay ${fee} securely`)}</p>
<p class="note">Payment is handled by Razorpay (UPI, cards and net banking). We never see or store your card or UPI details. Please enter your name and WhatsApp number exactly as you gave them to us. Read our <a href="/terms-and-refunds/">refund and cancellation policy</a>.</p>` }] : []),
    { id: 'fee', title: 'Fee', nav: 'Fee', html: `<p>The fee is <b>${fee}</b> for one consultation of up to ${online.minutes} minutes. We give you ${slotNote}. ${payText}</p>
<p>The fee is for the consultation. Any tests, scans or procedures the doctor advises are separate, and their cost is explained before you decide.</p>` },
    { id: 'in-person', title: 'When an online call is not enough', nav: 'When to get help', html: `<div class="callout warn"><h3>Do not wait for an online call if you have:</h3>${list([
      'very heavy bleeding (soaking a pad every hour or two), or bleeding with dizziness or fainting',
      'severe pain in the tummy, or a high fever',
      'in pregnancy: any bleeding, a watery leak, severe pain, a severe headache or blurred vision, or less movement of the baby',
    ])}<p>Go to your nearest hospital straight away, or call your local emergency number (108 or 112 in India).</p></div>
<p>An online consultation cannot replace an examination. If the doctor feels you need an examination, a scan or a test, she will say so and advise you on the next step.</p>` },
    { id: 'care', title: 'Your doctor', nav: 'Your doctor', html: `<p>${D}, ${site.doctor.role} at ${site.name}, Erode Fort, sees women for pregnancy care, gynaecology, PCOS and fertility treatment, and laparoscopic surgery. <a href="${doctorUrl}">About the doctor</a>.</p>` },
  ],
  faqs,
  related: ['gynecologist-erode', 'pcos-treatment-erode', 'infertility-treatment-erode', 'maternity-hospital-erode'],
  share: { url: site.url + path, text: 'Online gynecologist consultation, Abishek Hospital, Erode' },
  endCta: band('Ready to talk to the doctor?', 'Send your request in a minute. We confirm your slot, and the doctor calls you.', 'Request my consultation', '#book'),
};

export const onlinePage = {
  path,
  title: 'Online Gynecologist Consultation | Abishek Hospital, Erode',
  description: `For women far from Erode or abroad: talk to a gynaecologist by video or audio call. ${fee} for up to ${online.minutes} minutes. Abishek Hospital, Erode.`,
  schemaType: 'MedicalWebPage',
  specialty: 'Gynecologic',
  alternates: [['en-IN', path], ['ta-IN', taPath]],
  crumbs: crumbArr,
  faqs,
  focus: { href: '#book', label: 'Request consultation' },
  render: () => servicePage(data),
};

/* ---------------- Tamil twin ---------------- */
const p = (t) => `<p lang="ta">${t}</p>`;
const taFaqs = [
  ['ஆன்லைன் ஆலோசனைக்குக் கட்டணம் எவ்வளவு?', `ஒரு ஆலோசனைக்கு ${fee}, ${online.minutes} நிமிடம் வரை. மருத்துவர் பரிந்துரைக்கும் பரிசோதனைகள், ஸ்கேன் அல்லது சிகிச்சைகளுக்கான கட்டணம் தனி; அதன் செலவு முன்கூட்டியே விளக்கப்படும்.`],
  ['எந்த நேரத்தில் மருத்துவரிடம் பேசலாம்?', `${onlineSlotTa}. நீங்கள் விரும்பும் நாள் மற்றும் நேரத்தைத் தெரிவியுங்கள்; எங்கள் குழு வாட்ஸ்அப்பில் நேரத்தை உறுதி செய்யும்.`],
  ['ஆடியோ அழைப்பா, வீடியோ அழைப்பா என்று தேர்வு செய்யலாமா?', 'ஆம். உங்கள் விருப்பப்படி ஆடியோ அல்லது வீடியோ அழைப்பைத் தேர்ந்தெடுக்கலாம்.'],
  ['கட்டணத்தை எப்படிச் செலுத்துவது?', taPayText],
  ['கர்ப்ப காலத்தில் ஆன்லைன் ஆலோசனை பெறலாமா?', `கேள்விகள் கேட்கவும் அறிக்கைகளைக் காட்டவும் முடியும். வழக்கமான கர்ப்பகாலப் பரிசோதனைகளுக்கு உடல் பரிசோதனையும் ஸ்கேனும் தேவை; அதற்கு நேரில் வாருங்கள். ரத்தப்போக்கு, தண்ணீர் கசிவு, கடுமையான வலி அல்லது குழந்தையின் அசைவு குறைந்தால் ஆன்லைன் அழைப்புக்குக் காத்திருக்காமல் ${P} என்ற எண்ணில் அழைக்கவும் அல்லது மருத்துவமனைக்கு வரவும்.`],
  ['மருந்துச் சீட்டு கிடைக்குமா?', 'உங்கள் விவரங்களையும் அறிக்கைகளையும் பார்த்த பிறகு மருத்துவர் ஆலோசனை வழங்குவார். பாதுகாப்பாக இருக்கும்போது சிகிச்சையும் மருந்துகளும் பரிந்துரைப்பார். சில பிரச்சனைகளுக்கும் சில மருந்துகளுக்கும் முதலில் பரிசோதனை தேவைப்படும்; அப்போது மருத்துவமனைக்கு வரச் சொல்வார்.'],
];

export const taOnlinePage = taPage({
  slug: online.slug, en: online.slug, enPath: path, enLabel: 'Read this page in English, with the request form',
  wa: taWaText,
  focus: { href: '#book', label: 'கோரிக்கை அனுப்ப' },
  heroHtml: taHeroSteps,
  aside: formAside('உங்கள் ஆலோசனையைக் கோருங்கள்', taForm, true),
  care: '<p lang="ta">டாக்டர் ஜெயந்தி பிரபாகரன், ஈரோடு கோட்டை அபிஷேக் மருத்துவமனை.</p>',
  endCta: band('மருத்துவரிடம் பேசத் தயாரா?', 'ஒரு நிமிடத்தில் உங்கள் கோரிக்கையை அனுப்புங்கள். நாங்கள் நேரத்தை உறுதி செய்வோம்; மருத்துவர் உங்களை அழைப்பார்.', 'என் கோரிக்கையை அனுப்புக', '#book'),
  title: 'ஆன்லைன் மகளிர் மருத்துவ ஆலோசனை | அபிஷேக்',
  description: `வீட்டிலிருந்தே ஆடியோ அல்லது வீடியோ அழைப்பில் மகளிர் மருத்துவரிடம் பேசலாம். ${fee}, ${online.minutes} நிமிடம் வரை. அபிஷேக் மருத்துவமனை, ஈரோடு.`,
  crumb: 'ஆன்லைன் ஆலோசனை',
  h1: 'ஆன்லைன் <em>மகளிர் மருத்துவ</em> ஆலோசனை',
  lead: `தொலைவில் வசிக்கும் அல்லது வெளிநாட்டில் இருக்கும் பெண்களுக்காக, பயணம் செய்ய முடியாதவர்களுக்காகவும்: டாக்டர் ஜெயந்தி பிரபாகரனுடன் நீங்கள் இருக்கும் இடத்திலிருந்தே வீடியோ அல்லது ஆடியோ அழைப்பில் பேசலாம். ${fee}, ${online.minutes} நிமிடம் வரை.`,
  sections: [
    ['யாருக்காக இந்தச் சேவை', `${p('மருத்துவமனைக்கு எளிதில் வர இயலாத நோயாளிகளுக்காக இந்தச் சேவை:')}${taList([
      'வேறு நகரம் அல்லது மாநிலத்தில், ஈரோட்டிலிருந்து தொலைவில் வசிக்கும் பெண்கள்',
      'வெளிநாட்டில் வசிக்கும் அல்லது பணிபுரியும் பெண்கள்',
      'பயணம் செய்ய இயலாதவர்கள், அல்லது பயணம் செய்வதற்கு முன் தங்கள் அறிக்கைகள் குறித்து மருத்துவரின் கருத்தை அறிய விரும்புபவர்கள்',
      'சிகிச்சைக்குப் பிறகு தொடர் ஆலோசனை பெற விரும்புபவர்கள்',
    ])}${p('முதல் ஆலோசனைக்குப் பயணம் செய்ய வேண்டியதில்லை. உங்கள் நிலை மற்றும் சிகிச்சை பற்றி டாக்டர் ஜெயந்தி பிரபாகரனிடம் பேசலாம்; பரிசோதனை அல்லது ஸ்கேன் தேவையா என்பதை அவர் தெரிவிப்பார்.')}`],
    ['எவற்றைப் பற்றிப் பேசலாம்', taList([
      'ஒழுங்கற்ற, அதிகமான, வலியுடன் கூடிய அல்லது நின்றுபோன மாதவிடாய்',
      'பிசிஓஎஸ் / பிசிஓடி மற்றும் ஹார்மோன் பிரச்சனைகள்',
      'வெள்ளைப்படுதல், அரிப்பு, தொற்றுகள்',
      'கர்ப்பப்பைக் கட்டிகள், சினைப்பை நீர்க்கட்டிகள், அடிவயிற்று வலி',
      'மெனோபாஸ் அறிகுறிகள்: உடல் சூடு, தூக்கமின்மை, மனச்சோர்வு',
      'குடும்பக் கட்டுப்பாடு மற்றும் கருத்தடை ஆலோசனை',
      'குழந்தைப்பேறு பற்றிய கேள்விகள்',
      'ஸ்கேன், ரத்தப் பரிசோதனை அறிக்கைகளைப் பார்த்து ஆலோசனை, சிகிச்சைக்குப் பிந்தைய தொடர் ஆலோசனை',
      'கர்ப்ப காலக் கேள்விகள் (வழக்கமான கர்ப்பகாலப் பரிசோதனைகளுக்கு உங்களுக்கு அருகிலுள்ள மருத்துவரைச் சந்தியுங்கள்)',
    ])],
    ['இவற்றுக்கு ஆன்லைன் அழைப்புக்குக் காத்திருக்க வேண்டாம்', `<div class="callout warn" lang="ta">${taList([
      'மிக அதிக ரத்தப்போக்கு (ஒன்று அல்லது இரண்டு மணி நேரத்திற்கு ஒரு நாப்கின் நனைதல்), அல்லது ரத்தப்போக்குடன் மயக்கம்',
      'வயிற்றில் கடுமையான வலி அல்லது அதிகக் காய்ச்சல்',
      'கர்ப்ப காலத்தில் ரத்தப்போக்கு, தண்ணீர் கசிவு, கடுமையான வலி, கடுமையான தலைவலி அல்லது பார்வை மங்குதல், குழந்தையின் அசைவு குறைதல்',
    ])}<p>உடனே உங்களுக்கு அருகிலுள்ள மருத்துவமனைக்குச் செல்லுங்கள், அல்லது உங்கள் பகுதியின் அவசர எண்ணை அழைக்கவும் (இந்தியாவில் 108 அல்லது 112).</p></div>
${p('ஆன்லைன் ஆலோசனை உடல் பரிசோதனைக்கு மாற்றாகாது. பரிசோதனை, ஸ்கேன் அல்லது ரத்தப் பரிசோதனை தேவை என மருத்துவர் கருதினால் தெரிவிப்பார்; அடுத்த நடவடிக்கை குறித்தும் ஆலோசனை வழங்குவார்.')}`],
    ...(payUrl ? [['கட்டணம் செலுத்த', `${p(`எங்கள் குழு வாட்ஸ்அப்பில் உங்கள் நேரத்தை உறுதி செய்த பிறகு மட்டும், <b>${fee}</b> ஆலோசனைக் கட்டணத்தை இங்கே செலுத்துங்கள்.`)}
<p>${payBtn('பாதுகாப்பாகக் கட்டணம் செலுத்த')}</p>
${p('கட்டணம் Razorpay மூலம் நடைபெறுகிறது (UPI, கார்டு, நெட் பேங்கிங்). உங்கள் கார்டு அல்லது UPI விவரங்களை நாங்கள் பார்ப்பதோ சேமிப்பதோ இல்லை.')}`]] : []),
    ['கட்டணமும் நேரமும்', `${p(`கட்டணம் ஒரு ஆலோசனைக்கு <b>${fee}</b>, ${online.minutes} நிமிடம் வரை. ${onlineSlotTa}. ${taPayText}`)}
${p('இந்தக் கட்டணம் ஆலோசனைக்கு மட்டுமே. மருத்துவர் பரிந்துரைக்கும் பரிசோதனைகள், ஸ்கேன் அல்லது சிகிச்சைகளுக்கான கட்டணம் தனி; அதன் செலவு முன்கூட்டியே விளக்கப்படும்.')}`],
    ['முன்பதிவுக்கு முன்', `${taList([
      'அமைதியான இடத்தில், நல்ல நெட்வொர்க் உள்ள இடத்தில் இருங்கள். வீடியோ அழைப்புக்கு வாட்ஸ்அப் இருக்க வேண்டும்.',
      'பழைய அறிக்கைகள், ஸ்கேன் படங்கள், மருந்து அட்டைகளைத் தயாராக வைத்திருங்கள்.',
      'கடைசி மாதவிடாய் தொடங்கிய தேதியைக் குறித்து வைத்து, உங்கள் கேள்விகளை எழுதிக்கொள்ளுங்கள்.',
      'ஆலோசனைக் கோரிக்கை அனுப்புவதன் மூலம், ஆடியோ அல்லது வீடியோ அழைப்பில் ஆலோசனை பெற ஒப்புக்கொள்கிறீர்கள். மருத்துவர் பரிசோதனை செய்துகொள்ளச் சொல்லலாம்; பரிசோதனை இல்லாமல் சில மருந்துகளை எழுத இயலாமலும் போகலாம்.',
      '<a href="/terms-and-refunds/">விதிமுறைகள், பணம் திரும்பப் பெறுதல் மற்றும் ரத்து கொள்கையை</a> (ஆங்கிலத்தில்) படியுங்கள்.',
    ])}${reg(true)}${p('இந்தப் பக்கம் சேவை பற்றிய பொதுவான தகவலுக்கு மட்டுமே; உங்கள் மருத்துவரின் ஆலோசனைக்கு மாற்றல்ல.')}`],
  ],
  faqs: taFaqs,
});

/* ---------------- Terms, refunds and cancellation (English) ----------------
   Razorpay asks every merchant's website to show terms, a refund and cancellation policy, a privacy policy and contact details.
   The refund rules below are sensible defaults written for the hospital: the hospital must confirm them (and be able to keep them) before relying on them. */
const termsCrumbs = [['Home', '/'], ['Terms, refunds and cancellation']];
export const termsPage = {
  path: '/terms-and-refunds/',
  title: 'Terms, Refunds & Cancellation | Abishek Hospital',
  description: 'Terms for online consultations at Abishek Hospital, Erode: fee, payment, rescheduling, cancellation and refunds.',
  schemaType: 'WebPage',
  crumbs: termsCrumbs,
  render: () => `
<section class="page-hero"><div class="wrap">${crumbs(termsCrumbs)}
<span class="eyebrow">${icon('clipboard')} Online consultation</span>
<h1>Terms, <em>Refunds</em> and Cancellation</h1>
<p class="lead">How online consultations, payment, rescheduling and refunds work at ${site.name}, Erode Fort. Last updated: November 2026.</p></div></section>
<section class="section"><div class="wrap"><div class="prose">
<h2>The service</h2>
<p>An online consultation is a conversation with ${D}, ${site.doctor.role}, by audio or video call, for up to ${online.minutes} minutes. We give you ${slotNote}. ${regNo ? `${D} is registered with the ${site.doctor.reg.body} (TNMC), registration no. ${regNo}. ` : ''}Read how it works on the <a href="${path}">online consultation page</a>.</p>
<ul class="checks">
<li><b>Not for emergencies.</b> If you have heavy bleeding, severe pain, a high fever, fainting, or any danger sign in pregnancy, call ${P} (24/7) or dial 108 / 112. Do not wait for an online call.</li>
<li><b>The doctor decides what is safe.</b> She may advise an examination, a scan or a test at the hospital, and may not be able to prescribe some medicines without one. This advice is part of the consultation.</li>
<li><b>Your information.</b> Please give correct details about yourself and your health. Patients under 18 should be accompanied by a parent or guardian.</li>
<li><b>Privacy.</b> Your details are used only to arrange and carry out your consultation, and are kept confidential like the records of any visit. Please do not record the call unless the doctor agrees. See our <a href="/privacy-policy.html">privacy policy</a>.</li>
<li><b>Your phone and network.</b> You need a working phone and a steady network. If the call drops, the doctor will try to reconnect during your slot.</li>
</ul>
<h2>Fee and payment</h2>
<p>The fee is <b>${fee}</b> for one consultation of up to ${online.minutes} minutes. Our team confirms your slot on WhatsApp first, and then you pay${payUrl ? ' on our secure Razorpay payment page (UPI, cards or net banking)' : ' using the payment details our team sends you'}. Please pay only after we have confirmed a time, and only to the details or link our team sends you.</p>
<p>Payments are processed by Razorpay. We never see or store your card or UPI details. Tests, scans and procedures the doctor advises are separate, and their cost is explained before you decide.</p>
<h2>Rescheduling</h2>
<p>You can move your slot once at no charge if you message us on WhatsApp at least 2 hours before it. We will offer you the next free slot.</p>
<h2>Cancellation and refunds</h2>
<ul class="checks">
<li><b>If we cancel</b> (for example the doctor is unavailable, or the call cannot take place because of a problem on our side): you can choose another slot or a full refund.</li>
<li><b>If you cancel</b> at least 2 hours before your slot: full refund of the fee.</li>
<li><b>If you cancel later than that, or do not take the call:</b> the fee is not refunded. We will try to offer another slot, but we cannot promise one.</li>
<li><b>After the consultation has taken place</b>, the fee is not refundable. The fee covers the doctor's time and advice, including advice to visit the hospital in person.</li>
<li><b>Paid twice, or money was taken but we have no record of your payment:</b> we will refund the extra or unmatched amount in full once we have checked it.</li>
</ul>
<p>Approved refunds go back to the account, card or UPI you paid from, usually within 5 to 7 working days, depending on your bank.</p>
<h2>Contact us</h2>
<p>For any question about a booking, payment or refund, message us on WhatsApp or call <a href="${tel}">${site.phone.intl}</a>, or write to <a href="mailto:${site.email}">${site.email}</a>. ${site.name}, ${site.address.line1}, ${site.address.area}, ${site.address.city} – ${site.address.pin}, ${site.address.state}.</p>
</div></div></section>
${band('Ready for an online consultation?', `Send your request in a minute. We give you ${slotNote}.`, 'Request my consultation', path + '#book')}`,
};
