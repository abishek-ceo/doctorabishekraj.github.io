// Gallery (only when photos exist), privacy policy and 404 pages.
import { site, services } from '../site.mjs';
import { icon, crumbs, btnWA, btnCall, ctaBand, slugUrl } from '../lib.mjs';
import { galleryGrid } from './core.mjs';

export const gallery = {
  path: '/gallery/',
  title: 'Hospital Photo Gallery | Abishek Hospital, Erode Fort',
  description: 'Photos of Abishek Hospital, Erode Fort: the entrance, patient rooms, operation theatre and corridors. Near the bus stand, Bharathi Street.',
  gallery: true,
  crumbs: [['Home', '/'], ['Gallery']],
  render: (ctx) => `
<section class="page-hero"><div class="wrap">${crumbs([['Home', '/'], ['Gallery']])}
<span class="eyebrow">${icon('camera')} Inside our hospital</span>
<h1>Our Hospital in <em>Pictures</em></h1>
<p class="lead">A look at the entrance, rooms and corridors at Abishek Hospital, Erode Fort.${ctx.canEnlarge ? ' Tap any photo to see it larger.' : ''}</p></div></section>
<section class="section"><div class="wrap">${galleryGrid(ctx, ctx.photos, { eager: 3 })}</div></section>
${ctx.canEnlarge ? `<dialog class="lightbox" id="lb" aria-label="Photo viewer"><button type="button" data-close aria-label="Close photo">${icon('close')}</button><img alt=""><p></p></dialog>` : ''}
${ctaBand('Visit us at Erode Fort', 'Walk in during clinic hours, or book on WhatsApp.')}`,
};

// The policy text below is exactly the text that was on the previous privacy-policy.html.
export const privacy = {
  path: '/privacy-policy.html',
  title: 'Privacy Policy | Abishek Hospital',
  description: 'Privacy policy of Abishek Hospital, Erode.',
  crumbs: [['Home', '/'], ['Privacy policy']],
  render: () => `
<section class="page-hero"><div class="wrap">${crumbs([['Home', '/'], ['Privacy policy']])}<h1>Privacy Policy</h1><p class="lead">Last updated: June 2026</p></div></section>
<section class="section"><div class="wrap"><div class="prose">
<p>Abishek Hospital operates the dr.jayanthiprabakaran social media accounts.</p>
<h2>Information We Collect</h2>
<p>We do not collect any personal data from users.</p>
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
