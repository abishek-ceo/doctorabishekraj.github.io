// Gallery (only when photos exist), privacy policy and 404 pages.
import { site, services, online } from '../site.mjs';
import { icon, crumbs, btnWA, btnCall, ctaBand, slugUrl } from '../lib.mjs';
import { galleryGrid } from './core.mjs';

export const gallery = {
  path: '/gallery/',
  title: 'Hospital Photo Gallery | Abishek Hospital, Erode Fort',
  description: 'Photos of Abishek Hospital, Erode Fort: the entrance, patient rooms, operation theatre and corridors. Near the bus stand, Bharathi Street.',
  crumbs: [['Home', '/'], ['Gallery']],
  render: (ctx) => `
<section class="page-hero"><div class="wrap">${crumbs([['Home', '/'], ['Gallery']])}
<span class="eyebrow">${icon('camera')} Inside our hospital</span>
<h1>Our Hospital in <em>Pictures</em></h1>
<p class="lead">A look at the entrance, rooms and corridors at Abishek Hospital, Erode Fort.</p></div></section>
<div class="section"><div class="wrap">${galleryGrid(ctx, ctx.photos, { eager: 3 })}</div></div>
${ctaBand('Visit us at Erode Fort', 'Walk in during clinic hours, or book on WhatsApp.')}`,
};

// The policy text below is exactly the text that was on the previous privacy-policy.html.
export const privacy = {
  path: '/privacy-policy.html',
  title: 'Privacy Policy | Abishek Hospital',
  description: 'Privacy policy of Abishek Hospital, Erode: what this website collects (nothing), how WhatsApp requests work, and how the map and videos load.',
  crumbs: [['Home', '/'], ['Privacy policy']],
  render: () => `
<section class="page-hero"><div class="wrap">${crumbs([['Home', '/'], ['Privacy policy']])}<h1>Privacy Policy</h1><p class="lead">Last updated: November 2026</p></div></section>
<section class="section"><div class="wrap"><div class="prose">
<p>Abishek Hospital operates the dr.jayanthiprabakaran social media accounts.</p>
<h2>Information We Collect</h2>
<p>This website does not collect any personal data from its visitors. It has no accounts, no cookies and no analytics, and it does not store what you type into its forms.</p>
<h2>Messages You Send Us</h2>
<p>When you tap a WhatsApp, call or email button, or send the booking request form, WhatsApp (or your phone or email app) opens with your message ready, and nothing is sent until you send it. If you choose to send us your name, age, health concern or reports, for example to book an appointment, our team receives them on WhatsApp and uses them only to arrange your appointment and to care for you. Please do not send us anything you are not comfortable sharing, and call us on 97505 11225 for an emergency.</p>
<h2>Map and Videos</h2>
<p>The map on our home and contact pages is provided by Google Maps, and our videos by YouTube. They load only when you scroll to the map or tap a video. When they load, Google or YouTube may use cookies or similar technology under their own privacy policies. You can skip the map by using the “Open in Google Maps” or “Get directions” buttons instead.</p>
<h2>Social Media</h2>
<p>Our app posts medical education content to Instagram and Facebook on behalf of Abishek Hospital.</p>
<h2>Contact</h2>
<p>Email: jayanthi.ceo@gmail.com</p>
</div></div></section>`,
};

export const notFound = {
  path: '/404.html',
  title: 'Page not found | Abishek Hospital',
  description: 'This page could not be found. Visit the Abishek Hospital home page or call 97505 11225.',
  noindex: true,
  render: () => `
<section class="center-page"><div class="wrap">
<span class="eyebrow">${icon('info')} Error 404</span>
<h1>We could not find <em>that page</em></h1>
<p class="lead">The page may have moved. Try one of these, or call us on ${site.phone.display}.</p>
<div class="btn-row" style="justify-content:center"><a class="btn btn-primary" href="/">${icon('hospital')} Go to home page</a>${btnWA(undefined, 'WhatsApp us')}${btnCall(undefined, 'btn btn-outline')}</div>
<ul class="chips" style="justify-content:center;margin-top:1.6rem">${services.map((s) => `<li><a href="${slugUrl(s.slug)}">${s.short}</a></li>`).join('')}</ul>
</div></section>`,
};

// Shown at the two old online-consultation addresses while online consultation is paused (online.enabled = false in site.mjs), so links that
// were already shared (YouTube, social media) land on a clear message instead of an error. Not listed in the sitemap.
export const onlinePaused = {
  path: `/${online.slug}/`,
  title: 'Online consultation is not available right now | Abishek Hospital',
  description: 'Online consultation at Abishek Hospital, Erode is paused for now. Book on WhatsApp, call us or visit the hospital at Erode Fort.',
  noindex: true,
  crumbs: [['Home', '/'], ['Online consultation']],
  render: () => `
<section class="center-page"><div class="wrap">
<span class="eyebrow">${icon('info')} Online consultation</span>
<h1>Online consultation is <em>not available right now</em></h1>
<p class="lead">We have paused online consultations for now. To see ${site.doctor.name}, book on WhatsApp, call us on ${site.phone.display}, or visit the hospital at ${site.address.area}, ${site.address.city}. Emergency care is available ${site.hours.emergency}.</p>
<div class="btn-row" style="justify-content:center"><a class="btn btn-primary" href="/">${icon('hospital')} Go to home page</a>${btnWA(undefined, 'WhatsApp us')}${btnCall(undefined, 'btn btn-outline')}</div>
</div></section>`,
};
export const taOnlinePaused = {
  path: `/ta/${online.slug}/`,
  lang: 'ta',
  title: 'ஆன்லைன் ஆலோசனை தற்போது இல்லை | அபிஷேக் மருத்துவமனை',
  description: 'அபிஷேக் மருத்துவமனை ஈரோட்டில் ஆன்லைன் ஆலோசனை தற்போது நிறுத்தப்பட்டுள்ளது. வாட்ஸ்அப்பில் முன்பதிவு செய்யுங்கள் அல்லது அழையுங்கள்.',
  noindex: true,
  crumbs: [['Home', '/'], ['ஆன்லைன் ஆலோசனை']],
  render: () => `
<section class="center-page"><div class="wrap">
<span class="eyebrow">${icon('info')} <span lang="ta">ஆன்லைன் ஆலோசனை</span></span>
<h1 lang="ta">ஆன்லைன் ஆலோசனை <em>தற்போது இல்லை</em></h1>
<p class="lead" lang="ta">ஆன்லைன் ஆலோசனை தற்போது நிறுத்தப்பட்டுள்ளது. டாக்டர் ஜெயந்தி பிரபாகரனைச் சந்திக்க வாட்ஸ்அப்பில் முன்பதிவு செய்யுங்கள், ${site.phone.display} என்ற எண்ணில் அழையுங்கள், அல்லது ஈரோடு கோட்டை மருத்துவமனைக்கு வாருங்கள்.</p>
<div class="btn-row" style="justify-content:center"><a class="btn btn-primary" href="/ta/" lang="ta">${icon('hospital')} முகப்புப் பக்கம்</a>${btnWA(undefined, 'WhatsApp')}${btnCall(undefined, 'btn btn-outline')}</div>
</div></section>`,
};
