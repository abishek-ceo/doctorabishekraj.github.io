// Online (audio / video) consultation: English page with a WhatsApp request form, and its Tamil twin.
// Fee, minutes and the registration number all come from `online` in site.mjs. There are no fixed online hours or days: each patient is given a slot
// based on the doctor's availability. There is no payment or booking system on the website:
// the form opens WhatsApp with the request written out, our team confirms a slot and sends the payment details there, and the doctor calls.
// Keep the wording honest: this is general guidance on how the service works, not a promise of treatment, and never a claim about outcomes.
import { site, online, onlineSlotTa } from '../site.mjs';
import { icon, crumbs, ctaBand, servicePage, wa, tel, slugUrl, doctorUrl } from '../lib.mjs';
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

// The request, as it will arrive on WhatsApp: the patient only has to fill in the blanks.
const waText = `Hello Abishek Hospital, I would like to book an online consultation (${fee}, up to ${online.minutes} minutes).\nName: \nAge: \nConcern: \nAudio or video call: \nPreferred day and time: `;
const taWaText = `வணக்கம் அபிஷேக் மருத்துவமனை, நான் ஆன்லைன் ஆலோசனைக்கு (${fee}, ${online.minutes} நிமிடம் வரை) முன்பதிவு செய்ய விரும்புகிறேன்.\nபெயர்: \nவயது: \nபிரச்சனை: \nஆடியோ / வீடியோ: \nவிரும்பும் நாள் மற்றும் நேரம்: `;

const form = `<form class="form form-card" data-wa-form data-wa="${site.phone.wa}" data-wa-intro="Hello Abishek Hospital, I would like to book an online consultation (${fee}, up to ${online.minutes} minutes)." novalidate>
<div class="field"><label for="o-name">Your name <span aria-hidden="true">*</span></label><input id="o-name" name="name" data-label="Name" type="text" autocomplete="name" required><span class="err">Please enter your name.</span></div>
<div class="field"><label for="o-age">Your age <span aria-hidden="true">*</span></label><input id="o-age" name="age" data-label="Age" type="text" inputmode="numeric" maxlength="3" autocomplete="off" required><span class="err">Please enter your age.</span></div>
<div class="field"><label for="o-concern">What would you like to discuss? <span aria-hidden="true">*</span></label><textarea id="o-concern" name="concern" data-label="Concern" placeholder="For example: periods have been irregular for 3 months" required></textarea><span class="err">Please tell us briefly what you would like to discuss.</span></div>
<div class="field"><label for="o-mode">Audio or video call <span aria-hidden="true">*</span></label><select id="o-mode" name="mode" data-label="Call type" required><option value="">Select</option><option>Audio call</option><option>Video call</option><option>Either is fine</option></select><span class="err">Please choose a call type.</span></div>
<div class="field"><label for="o-day">Preferred day and time <span aria-hidden="true">*</span></label><input id="o-day" name="day" data-label="Preferred day and time" type="text" placeholder="For example: Monday evening, or any day this week" autocomplete="off" required><span class="err">Please tell us which day and time suit you.</span></div>
<div class="btn-row" style="margin-top:0"><button class="btn btn-wa" type="submit">${icon('whatsapp')} Request on WhatsApp</button></div>
<p class="note" role="status" aria-live="polite" data-status></p>
<p class="note">This opens WhatsApp with your request ready to send. We give you ${slotNote}, and your slot is booked only after our team confirms it. Please keep the message short and send reports only when we ask. For an emergency, call ${P} (24/7).</p>
</form>
<noscript><div class="callout"><p>Please <a href="${wa(waText)}">send your request on WhatsApp</a> or call <a href="${tel}">${P}</a>.</p></div></noscript>`;

const steps = `<ol class="steps">
<li><b>Send your request</b><span>Fill in the short form below. It opens WhatsApp with your details ready to send. Tell us your concern and the day and time you would like.</span></li>
<li><b>We confirm your slot</b><span>${payUrl ? `Our team replies on WhatsApp with your confirmed time. Then pay the ${fee} fee on the secure Razorpay page (UPI, cards or net banking) to complete your booking.` : `Our team replies on WhatsApp with your confirmed time and the payment details for the ${fee} fee. Your slot is booked once we confirm it.`}</span></li>
<li><b>Talk to the doctor</b><span>At your time, ${D} speaks with you by audio or video call. Keep your earlier reports, medicines and questions ready.</span></li>
<li><b>Follow the advice</b><span>If you need an examination, a scan or a test, the doctor will tell you, and we will help you book a visit to the hospital.</span></li>
</ol>`;

const faqs = [
  ['How much does an online consultation cost?', `${fee} for one consultation of up to ${online.minutes} minutes. Any tests, scans or procedures the doctor advises are separate, and their cost is explained before you decide.`],
  ['When can I talk to the doctor online?', `We give you ${slotNote}. Tell us the day and time you would like and our team will confirm a slot on WhatsApp. For clinic visits, the usual hours are ${site.hours.opd}.`],
  ['Can I choose between an audio call and a video call?', 'Yes. Choose audio or video in the request form. Video lets the doctor see you, but audio is enough for many questions.'],
  ['How do I pay?', payText],
  ['Which problems can I discuss?', `Any gynaecological concern: periods, PCOS, discharge and infections, fibroids and cysts, pelvic pain, menopause, family planning and fertility questions, and review of your scan or blood reports. See <a href="${slugUrl('gynecologist-erode')}">gynaecology care</a>.`],
  ['Will I get a prescription?', 'The doctor will advise you after hearing your history and seeing your reports. Where it is safe, she will advise treatment and medicines. Some problems, and some medicines, need an examination or tests first, and then she will ask you to visit the hospital.'],
  ['Can I use an online consultation during pregnancy?', `You can ask questions and have your reports reviewed. Routine antenatal check-ups need an examination and scans, so please visit us for those: <a href="${slugUrl('maternity-hospital-erode')}">antenatal care at Abishek Hospital</a>. If you have bleeding, a watery leak, severe pain, a severe headache or the baby moves less, do not wait for an online call. Call ${P} or come to the hospital.`],
  [`What if ${online.minutes} minutes are not enough?`, 'The doctor will tell you if your problem needs a longer discussion, an examination or a follow-up, and our team will help you book it.'],
  ['Can I change or cancel my slot?', 'Please message us on WhatsApp as early as you can and we will help you find another time.'],
  ['Is my information private?', 'Your details are used only to arrange and carry out your consultation. Read our <a href="/privacy-policy.html">privacy policy</a>.'],
];

const crumbArr = [['Home', '/'], ['Services', '/#services'], ['Online consultation']];
const data = {
  icon: 'video', crumbs: crumbArr, eyebrow: 'Online consultation',
  h1: 'Online Consultation with a <em>Gynaecologist</em>',
  tamil: 'ஆன்லைன் மகளிர் மருத்துவ ஆலோசனை · வீட்டிலிருந்தே',
  lead: `Talk to ${D} from home, by audio or video call. ${fee} for a consultation of up to ${online.minutes} minutes. We give you ${slotNote}.`,
  waText,
  facts: [
    { icon: 'video', title: 'Audio or video call', text: 'Your choice, from your own phone' },
    { icon: 'timer', title: `Up to ${online.minutes} minutes`, text: `${fee} per consultation` },
    { icon: 'clock', title: 'Slot based on availability', text: 'Confirmed on WhatsApp' },
    { icon: 'stethoscope', title: 'All gynaecology concerns', text: 'Periods, PCOS, discharge, menopause and more' },
    ...(regNo ? [{ icon: 'badge-check', title: `TNMC Reg. No. ${regNo}`, text: site.doctor.reg.body }] : []),
  ],
  sections: [
    { id: 'how', title: 'How it works', nav: 'How it works', html: steps },
    { id: 'book', title: 'Request a consultation', nav: 'Request a slot', wide: true, html: `<div class="contact-grid" style="align-items:start"><div>
<p class="lead">Tell us your concern and when you would like to talk. We reply on WhatsApp to confirm your slot.</p>
${list([`<b>${fee}</b> for one consultation of up to ${online.minutes} minutes`, 'A slot based on the doctor’s availability', 'Audio or video call, your choice', 'Your slot is booked only after our team confirms it on WhatsApp'])}
<p>Prefer to talk first? Call <a href="${tel}">${P}</a>.</p></div>
<div>${form}</div></div>` },
    ...(payUrl ? [{ id: 'pay', title: 'Pay for your consultation', nav: 'Pay', html: `<p>Once our team has confirmed your slot on WhatsApp, pay the <b>${fee}</b> consultation fee here. Please pay only after we have confirmed a time.</p>
<p>${payBtn(`Pay ${fee} securely`)}</p>
<p class="note">Payment is handled by Razorpay (UPI, cards and net banking). We never see or store your card or UPI details. Please enter your name and WhatsApp number exactly as you gave them to us. Read our <a href="/terms-and-refunds/">refund and cancellation policy</a>.</p>` }] : []),
    { id: 'topics', title: 'What you can discuss', nav: 'What we cover', html: `<p>Any gynaecological concern, for example:</p>${list([
      '<b>Periods:</b> irregular, heavy, painful or missed periods',
      '<b>PCOS / PCOD</b> and other hormonal problems',
      '<b>White discharge,</b> itching and infections',
      '<b>Fibroids, ovarian cysts</b> and pelvic pain',
      '<b>Menopause</b> symptoms such as hot flushes, poor sleep and low mood',
      '<b>Family planning</b> and contraception advice',
      '<b>Fertility questions</b> and planning a pregnancy',
      '<b>Reviewing your scan or blood reports,</b> and follow-up after treatment',
      `<b>Questions during pregnancy.</b> Routine antenatal check-ups need an examination and scans, so please <a href="${slugUrl('maternity-hospital-erode')}">visit us</a> for those`,
    ])}` },
    { id: 'in-person', title: 'When not to wait for an online call', nav: 'When to come in', html: `<div class="callout warn"><h3>Call ${P} or come to the hospital straight away if you have:</h3>${list([
      'very heavy bleeding (soaking a pad every hour or two), or bleeding with dizziness or fainting',
      'severe pain in the tummy, or a high fever',
      'in pregnancy: any bleeding, a watery leak, severe pain, a severe headache or blurred vision, or less movement of the baby',
    ])}<p>Emergency care is available ${site.hours.emergency}. In a life-threatening emergency dial 108 or 112 for an ambulance.</p></div>
<p>An online consultation cannot replace an examination. If the doctor feels you need an examination, a scan or a test, she will say so, and you can come to the hospital at Erode Fort.</p>` },
    { id: 'fee', title: 'Fee and slots', nav: 'Fee and slots', html: `<p>The fee is <b>${fee}</b> for one consultation of up to ${online.minutes} minutes. We give you ${slotNote}. ${payText}</p>
<p>The fee is for the consultation. Any tests, scans or procedures the doctor advises are separate, and their cost is explained before you decide. For a visit to the hospital, clinic hours are ${site.hours.opd}.</p>` },
    { id: 'before', title: 'Before you book', nav: 'Before you book', html: `${list([
      'Choose a quiet place with a steady phone network. For a video call, keep WhatsApp installed.',
      'Keep your earlier reports, scan images and medicine strips ready.',
      'Note the date your last period started, and write down your questions.',
      'By requesting a consultation you agree to be advised by audio or video call. The doctor may ask you to come in for an examination, and may not be able to prescribe some medicines without one.',
      'Read our <a href="/terms-and-refunds/">terms, refund and cancellation policy</a>.',
    ])}${reg(false)}<p class="note">Your details are used only to arrange your consultation. Read our <a href="/privacy-policy.html">privacy policy</a>. This page is general information about the service and does not replace advice from your own doctor.</p>` },
    { id: 'care', title: 'Care at Abishek Hospital', nav: 'Our care', html: `<p>${D}, ${site.doctor.role} at ${site.name}, Erode Fort, sees women for pregnancy care, gynaecology, PCOS and fertility treatment, and laparoscopic surgery. <a href="${doctorUrl}">About the doctor</a>. To visit in person, message us on WhatsApp or call ${P}.</p>` },
  ],
  faqs,
  related: ['gynecologist-erode', 'pcos-treatment-erode', 'infertility-treatment-erode', 'maternity-hospital-erode'],
  share: { url: site.url + path, text: 'Online gynecologist consultation, Abishek Hospital, Erode' },
};

export const onlinePage = {
  path,
  title: 'Online Gynecologist Consultation | Abishek Hospital, Erode',
  description: `Talk to a gynaecologist by audio or video call. ${fee} for up to ${online.minutes} minutes, with a slot based on the doctor’s availability. Abishek Hospital, Erode.`,
  schemaType: 'MedicalWebPage',
  specialty: 'Gynecologic',
  alternates: [['en-IN', path], ['ta-IN', taPath]],
  crumbs: crumbArr,
  faqs,
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
  title: 'ஆன்லைன் மகளிர் மருத்துவ ஆலோசனை | அபிஷேக்',
  description: `வீட்டிலிருந்தே ஆடியோ அல்லது வீடியோ அழைப்பில் மகளிர் மருத்துவரிடம் பேசலாம். ${fee}, ${online.minutes} நிமிடம் வரை. அபிஷேக் மருத்துவமனை, ஈரோடு.`,
  crumb: 'ஆன்லைன் ஆலோசனை',
  h1: 'ஆன்லைன் <em>மகளிர் மருத்துவ</em> ஆலோசனை',
  lead: `டாக்டர் ஜெயந்தி பிரபாகரனுடன் வீட்டிலிருந்தபடியே ஆடியோ அல்லது வீடியோ அழைப்பில் பேசலாம். ஒரு ஆலோசனைக்கு ${fee}, ${online.minutes} நிமிடம் வரை. ${onlineSlotTa}.`,
  sections: [
    ['எப்படிச் செயல்படுகிறது', `<ol class="steps" lang="ta">
<li><b>வாட்ஸ்அப்பில் கோரிக்கை அனுப்புங்கள்</b><span>மேலே உள்ள பொத்தானை அழுத்தினால் உங்கள் பெயர், வயது, பிரச்சனை, ஆடியோ அல்லது வீடியோ, விரும்பும் நாள் மற்றும் நேரம் ஆகியவற்றை எழுதும் வகையில் வாட்ஸ்அப் திறக்கும்.</span></li>
<li><b>நேரத்தை நாங்கள் உறுதி செய்வோம்</b><span>${payUrl ? `எங்கள் குழு உறுதியான நேரத்தை வாட்ஸ்அப்பில் தெரிவிக்கும். பிறகு ${fee} கட்டணத்தைப் பாதுகாப்பான Razorpay இணைப்பு மூலம் (UPI, கார்டு, நெட் பேங்கிங்) செலுத்தி முன்பதிவை முடிக்கவும்.` : `எங்கள் குழு உறுதியான நேரத்தையும் ${fee} கட்டணத்துக்கான கட்டண விவரங்களையும் வாட்ஸ்அப்பில் அனுப்பும். உறுதி செய்த பிறகே நேரம் முன்பதிவாகும்.`}</span></li>
<li><b>மருத்துவரிடம் பேசுங்கள்</b><span>குறிப்பிட்ட நேரத்தில் டாக்டர் ஜெயந்தி பிரபாகரன் ஆடியோ அல்லது வீடியோ அழைப்பில் பேசுவார். பழைய அறிக்கைகள், மருந்துகள், கேள்விகளைத் தயாராக வைத்திருங்கள்.</span></li>
<li><b>ஆலோசனையைப் பின்பற்றுங்கள்</b><span>பரிசோதனை, ஸ்கேன் அல்லது ரத்தப் பரிசோதனை தேவைப்பட்டால் மருத்துவர் தெரிவிப்பார்; மருத்துவமனைக்கு வர நாங்கள் உதவுவோம்.</span></li>
</ol>`],
    ['எவற்றைப் பற்றிப் பேசலாம்', taList([
      'ஒழுங்கற்ற, அதிகமான, வலியுடன் கூடிய அல்லது நின்றுபோன மாதவிடாய்',
      'பிசிஓஎஸ் / பிசிஓடி மற்றும் ஹார்மோன் பிரச்சனைகள்',
      'வெள்ளைப்படுதல், அரிப்பு, தொற்றுகள்',
      'கர்ப்பப்பைக் கட்டிகள், சினைப்பை நீர்க்கட்டிகள், அடிவயிற்று வலி',
      'மெனோபாஸ் அறிகுறிகள்: உடல் சூடு, தூக்கமின்மை, மனச்சோர்வு',
      'குடும்பக் கட்டுப்பாடு மற்றும் கருத்தடை ஆலோசனை',
      'குழந்தைப்பேறு பற்றிய கேள்விகள்',
      'ஸ்கேன், ரத்தப் பரிசோதனை அறிக்கைகளைப் பார்த்து ஆலோசனை, சிகிச்சைக்குப் பிந்தைய தொடர் ஆலோசனை',
      'கர்ப்ப காலக் கேள்விகள் (வழக்கமான கர்ப்பகாலப் பரிசோதனைகளுக்கு நேரில் வர வேண்டும்)',
    ])],
    ['இவற்றுக்கு ஆன்லைன் அழைப்புக்குக் காத்திருக்க வேண்டாம்', `<div class="callout warn" lang="ta">${taList([
      'மிக அதிக ரத்தப்போக்கு (ஒன்று அல்லது இரண்டு மணி நேரத்திற்கு ஒரு நாப்கின் நனைதல்), அல்லது ரத்தப்போக்குடன் மயக்கம்',
      'வயிற்றில் கடுமையான வலி அல்லது அதிகக் காய்ச்சல்',
      'கர்ப்ப காலத்தில் ரத்தப்போக்கு, தண்ணீர் கசிவு, கடுமையான வலி, கடுமையான தலைவலி அல்லது பார்வை மங்குதல், குழந்தையின் அசைவு குறைதல்',
    ])}<p>${P} என்ற எண்ணில் அழைக்கவும் அல்லது உடனே மருத்துவமனைக்கு வரவும். அவசர சிகிச்சை 24 மணி நேரமும் உண்டு. உயிருக்கு ஆபத்தான நிலையில் 108 அல்லது 112-ஐ அழைக்கவும்.</p></div>
${p('ஆன்லைன் ஆலோசனை உடல் பரிசோதனைக்கு மாற்றாகாது. பரிசோதனை, ஸ்கேன் அல்லது ரத்தப் பரிசோதனை தேவை என மருத்துவர் கருதினால் தெரிவிப்பார்; அப்போது ஈரோடு கோட்டை மருத்துவமனைக்கு வாருங்கள்.')}`],
    ...(payUrl ? [['கட்டணம் செலுத்த', `${p(`எங்கள் குழு வாட்ஸ்அப்பில் உங்கள் நேரத்தை உறுதி செய்த பிறகு மட்டும், <b>${fee}</b> ஆலோசனைக் கட்டணத்தை இங்கே செலுத்துங்கள்.`)}
<p>${payBtn('பாதுகாப்பாகக் கட்டணம் செலுத்த')}</p>
${p('கட்டணம் Razorpay மூலம் நடைபெறுகிறது (UPI, கார்டு, நெட் பேங்கிங்). உங்கள் கார்டு அல்லது UPI விவரங்களை நாங்கள் பார்ப்பதோ சேமிப்பதோ இல்லை.')}`]] : []),
    ['கட்டணமும் நேரமும்', `${p(`கட்டணம் ஒரு ஆலோசனைக்கு <b>${fee}</b>, ${online.minutes} நிமிடம் வரை. ${onlineSlotTa}. ${taPayText}`)}
${p('இந்தக் கட்டணம் ஆலோசனைக்கு மட்டுமே. மருத்துவர் பரிந்துரைக்கும் பரிசோதனைகள், ஸ்கேன் அல்லது சிகிச்சைகளுக்கான கட்டணம் தனி; அதன் செலவு முன்கூட்டியே விளக்கப்படும்.')}`],
    ['முன்பதிவுக்கு முன்', `${taList([
      'அமைதியான இடத்தில், நல்ல நெட்வொர்க் உள்ள இடத்தில் இருங்கள். வீடியோ அழைப்புக்கு வாட்ஸ்அப் இருக்க வேண்டும்.',
      'பழைய அறிக்கைகள், ஸ்கேன் படங்கள், மருந்து அட்டைகளைத் தயாராக வைத்திருங்கள்.',
      'கடைசி மாதவிடாய் தொடங்கிய தேதியைக் குறித்து வைத்து, உங்கள் கேள்விகளை எழுதிக்கொள்ளுங்கள்.',
      'ஆலோசனைக் கோரிக்கை அனுப்புவதன் மூலம், ஆடியோ அல்லது வீடியோ அழைப்பில் ஆலோசனை பெற ஒப்புக்கொள்கிறீர்கள். மருத்துவர் பரிசோதனைக்கு வரச் சொல்லலாம்; பரிசோதனை இல்லாமல் சில மருந்துகளை எழுத இயலாமலும் போகலாம்.',
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
${ctaBand('Ready to book an online consultation?', `Request a slot on WhatsApp or call ${P}. We give you ${slotNote}.`, waText)}`,
};
