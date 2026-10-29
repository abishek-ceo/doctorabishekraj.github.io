// Patient tools: a pregnancy due-date calculator (indexed) and an "add my next visit to my calendar" page (not indexed).
// Both run entirely in the visitor's browser (assets/js/tools.js): nothing typed in is sent to us or stored.
import { site } from '../site.mjs';
import { icon, esc, crumbs, faqBlock, ctaBand, wa, slugUrl, doctorUrl } from '../lib.mjs';

const P = site.phone.display;
const place = `${site.name}, ${site.address.line1}, ${site.address.area}, ${site.address.city} ${site.address.pin}`;
const toolAttrs = `data-tool data-wa="${site.phone.wa}" data-place="${esc(place)}" data-phone="${esc(P)}" data-hours="${esc(site.hours.opd)}" data-days="${site.hours.days.join(',')}" data-closed="${site.hours.closedOn.join(',')}" data-open="${site.hours.open}" data-close="${site.hours.close}"`;
const bookMsg = 'Hello Abishek Hospital, I would like to book an antenatal visit.';

const dueFaqs = [
  ['How is my due date calculated?', 'Doctors usually count 40 weeks (280 days) from the first day of your last period. If your cycle is usually longer or shorter than 28 days, the date moves by the difference. A scan early in pregnancy can adjust it.'],
  ['What if I do not remember my last period, or my periods are irregular?', `Do not worry. An ultrasound scan in early pregnancy can estimate your due date more accurately. <a href="/contact/">Book a visit</a> or call ${P}, and the doctor will confirm your date.`],
  ['Will my baby be born on the due date?', 'Only a few babies are born exactly on the due date. Most arrive in the weeks around it, so treat the date as a guide.'],
  ['When should I first see a doctor?', `As soon as a home test is positive, ideally in the first trimester. <a href="${slugUrl('maternity-hospital-erode')}">Read about antenatal care in Erode</a>.`],
];

export const dueDate = {
  path: '/pregnancy-due-date-calculator/',
  title: 'Pregnancy Due Date Calculator | Abishek Hospital, Erode',
  description: 'Free pregnancy due date calculator: enter the first day of your last period to see your due date, how many weeks pregnant you are and your trimester.',
  schemaType: 'MedicalWebPage',
  specialty: 'Obstetric',
  toolsJs: true,
  crumbs: [['Home', '/'], ['Due date calculator']],
  faqs: dueFaqs,
  render: () => `
<section class="page-hero"><div class="wrap">${crumbs([['Home', '/'], ['Due date calculator']])}
<span class="eyebrow">${icon('baby')} Free tool for expecting mothers</span>
<h1>Pregnancy <em>Due Date</em> Calculator</h1>
<span class="tamil-line" lang="ta">பிரசவ தேதி கணிப்பான்</span>
<p class="lead">Enter the first day of your last period to see your estimated due date and how many weeks pregnant you are. Nothing you type is sent to us or saved: it stays on your phone.</p></div></section>

<div class="section"><div class="wrap"><div class="tool-wrap" ${toolAttrs}>
<form class="form form-card" data-due-form novalidate>
<div class="field"><label for="lmp">First day of your last period <span aria-hidden="true">*</span></label>
<input id="lmp" name="lmp" type="date" required aria-describedby="lmp-err"><span class="err" id="lmp-err" role="alert">Please choose a date from the last 10 months.</span></div>
<div class="field"><label for="cycle">Usual cycle length, in days</label>
<input id="cycle" name="cycle" type="number" inputmode="numeric" min="21" max="35" value="28" aria-describedby="cycle-note"><span class="note" id="cycle-note">Most cycles are about 28 days. Change this only if yours are regularly shorter or longer (21 to 35 days).</span></div>
<div class="btn-row" style="margin-top:0"><button class="btn btn-primary" type="submit">${icon('calendar')} Calculate my due date</button></div>
</form>

<div class="result" data-due-result role="group" aria-labelledby="due-label" tabindex="-1" hidden>
<p class="result-label" id="due-label">Your estimated due date</p>
<p class="result-date" data-edd></p>
<p class="result-line" data-progress-text></p>
<progress data-progress max="280" value="0" aria-label="How far your pregnancy has progressed"></progress>
<p class="result-line" data-togo></p>
<div class="btn-row">
<a class="btn btn-wa" data-wa-btn href="${wa(bookMsg)}" target="_blank" rel="noopener">${icon('whatsapp')} Book a visit on WhatsApp</a>
<a class="btn btn-outline" data-gcal href="#" target="_blank" rel="noopener">${icon('calendar')} Google Calendar</a>
<button class="btn btn-outline" type="button" data-ics>${icon('calendar')} Other calendars (.ics)</button>
</div>
<p class="note">This is an estimate. Only a few babies are born exactly on the due date, and your doctor may adjust it after your first scan.</p>
</div>
<noscript><div class="callout"><p>This calculator needs JavaScript. Please <a href="${wa(bookMsg)}">WhatsApp us</a> or call ${P}, and we will work out your due date.</p></div></noscript>
</div></div></div>

<section class="section section-soft"><div class="wrap"><div class="prose">
<h2>How your due date is worked out</h2>
<p>Doctors usually count 40 weeks (280 days) from the first day of your last period. If your cycle is usually longer or shorter than 28 days, the date moves by the difference. This calculator uses that method.</p>
<p>A scan early in pregnancy can give a more exact date, especially if your periods are irregular or you are not sure when your last period began. Your doctor will confirm your date at your first visit.</p>
<h2>Your first antenatal visit</h2>
<p>Book your first visit as soon as a home test is positive. At ${site.name}, Erode Fort, <a href="${doctorUrl}">${site.doctor.name}</a> provides complete <a href="${slugUrl('maternity-hospital-erode')}">pregnancy and delivery care</a>, including <a href="${slugUrl('normal-painless-delivery-erode')}">normal and painless delivery</a> and <a href="${slugUrl('high-risk-pregnancy-erode')}">high-risk pregnancy care</a>.</p>
</div></div></section>

<section class="section"><div class="wrap"><div class="sec-head"><span class="eyebrow">${icon('help')} Questions answered</span><h2>Due date <em>questions</em></h2></div>
${faqBlock(dueFaqs)}</div></section>
${ctaBand(undefined, undefined, bookMsg)}`,
};

export const visitReminder = {
  path: '/visit-reminder/',
  title: 'Add Your Next Visit to Your Calendar | Abishek Hospital',
  description: 'Add your follow-up visit at Abishek Hospital, Erode Fort, to your phone calendar, with reminders the day before and two hours before.',
  noindex: true,
  toolsJs: true,
  crumbs: [['Home', '/'], ['Visit reminder']],
  render: () => `
<section class="page-hero"><div class="wrap">${crumbs([['Home', '/'], ['Visit reminder']])}
<span class="eyebrow">${icon('clock')} Never miss a follow-up</span>
<h1>Add your next visit to your <em>calendar</em></h1>
<p class="lead">Did the doctor give you a follow-up date? Add it to your phone's calendar in two taps, with a reminder the day before and two hours before. Nothing you type is sent to us or saved.</p></div></section>

<div class="section"><div class="wrap"><div class="tool-wrap" ${toolAttrs}>
<form class="form form-card" data-visit-form novalidate>
<div class="field"><label for="v-date">Date of your visit <span aria-hidden="true">*</span></label>
<input id="v-date" name="date" type="date" required aria-describedby="v-date-err"><span class="err" id="v-date-err" role="alert">Please choose the date of your visit.</span></div>
<div class="field"><label for="v-time">Time <span aria-hidden="true">*</span></label>
<input id="v-time" name="time" type="time" value="10:00" required aria-describedby="v-time-err"><span class="err" id="v-time-err" role="alert">Please choose a time.</span></div>
<div class="field"><label for="v-type">Type of visit</label>
<select id="v-type" name="type"><option value="antenatal">Antenatal checkup</option><option value="followup">Follow-up visit</option><option value="postnatal">Postnatal checkup</option><option value="other">Other visit</option></select></div>
<div class="btn-row" style="margin-top:0"><button class="btn btn-primary" type="submit">${icon('calendar')} Show my reminder</button></div>
<p class="note">Clinic hours: ${site.hours.opd}. Emergency care is available ${site.hours.emergency}.</p>
</form>

<div class="result" data-visit-result role="group" aria-labelledby="visit-label" tabindex="-1" hidden>
<p class="result-label" id="visit-label">Your visit</p>
<p class="result-date" data-visit-when></p>
<p class="result-line" data-visit-note></p>
<div class="btn-row">
<a class="btn btn-primary" data-gcal href="#" target="_blank" rel="noopener">${icon('calendar')} Add to Google Calendar</a>
<button class="btn btn-outline" type="button" data-ics>${icon('calendar')} Apple, Outlook and others (.ics)</button>
</div>
<div class="share">
<p class="note"><b>Sending this to a patient?</b> Fill in the date and time, then send the link below. It opens on the patient's phone with everything already filled in.</p>
<div class="btn-row"><a class="btn btn-wa btn-sm" data-share-wa href="#" target="_blank" rel="noopener">${icon('send')} Send on WhatsApp</a>
<button class="btn btn-outline btn-sm" type="button" data-copy>${icon('clipboard')} <span>Copy link</span></button></div>
</div>
</div>
<noscript><div class="callout"><p>This page needs JavaScript. To save your visit date, please note it down or call ${P}.</p></div></noscript>
</div></div></div>
${ctaBand('Need to change your visit?', 'Message us on WhatsApp or call, and we will find a new time for you.')}`,
};
