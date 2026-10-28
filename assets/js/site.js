/* Abishek Hospital - tiny progressive-enhancement script (no dependencies).
   The site is fully readable and navigable without it. */
(function () {
  'use strict';
  var doc = document, body = doc.body;
  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }

  /* ---- mobile drawer ---- */
  var drawer = $('#drawer'), openBtn = $('[data-open-menu]');
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('open', open);
    body.classList.toggle('locked', open);
    if (openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { var c = $('[data-close-menu]', drawer); if (c) c.focus(); }
    else if (openBtn && doc.activeElement && drawer.contains(doc.activeElement)) { openBtn.focus(); }
  }
  if (openBtn) openBtn.addEventListener('click', function () { setDrawer(true); });
  if (drawer) {
    $$('[data-close-menu]', drawer).forEach(function (b) { b.addEventListener('click', function () { setDrawer(false); }); });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { drawer.classList.remove('open'); body.classList.remove('locked'); }); });
  }

  /* ---- services dropdown (desktop). CSS :hover/:focus-within already works without JS ---- */
  var subBtn = $('.sub-toggle'), sub = $('#sub-services');
  function setSub(open) {
    if (!sub) return;
    sub.classList.toggle('open', open);
    subBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (subBtn && sub) {
    var li = subBtn.parentNode, timer;
    var hoverable = window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    subBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setSub(hoverable ? true : !sub.classList.contains('open'));   /* mouse users: hover already opened it */
    });
    if (hoverable) {
      li.addEventListener('mouseenter', function () { clearTimeout(timer); setSub(true); });
      li.addEventListener('mouseleave', function () { timer = setTimeout(function () { setSub(false); }, 160); });
    }
    doc.addEventListener('click', function (e) { if (!li.contains(e.target)) setSub(false); });
  }
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') { setSub(false); setDrawer(false); }
  });
  if (window.matchMedia) {
    var mq = window.matchMedia('(min-width:1024px)');
    var close = function () { if (mq.matches) setDrawer(false); };
    if (mq.addEventListener) mq.addEventListener('change', close); else if (mq.addListener) mq.addListener(close);
  }

  /* ---- click-to-load map (keeps Google Maps off the critical path) ---- */
  $$('[data-map]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = btn.closest('.map-card');
      var f = doc.createElement('iframe');
      f.src = btn.getAttribute('data-map');
      f.title = btn.getAttribute('data-title') || 'Map';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.allowFullscreen = true;
      box.innerHTML = '';
      box.appendChild(f);
    });
  });

  /* ---- booking form: opens WhatsApp (or email) with the details pre-filled ---- */
  var form = $('[data-wa-form]');
  if (form) {
    var WA = form.getAttribute('data-wa'), MAIL = form.getAttribute('data-mail');
    var statusEl = $('[data-status]', form);
    var val = function (n) { var el = form.elements[n]; return el ? el.value.trim() : ''; };
    var say = function (t) { if (statusEl) statusEl.textContent = t; };
    var check = function () {
      var ok = true;
      $$('.field', form).forEach(function (f) {
        var el = f.querySelector('input,select,textarea');
        if (!el || !el.required) return;
        var bad = !el.value.trim();
        f.classList.toggle('bad', bad);
        if (bad) ok = false;
      });
      if (!ok) say('Please fill in the highlighted fields.');
      return ok;
    };
    var text = function () {
      var lines = ['Hello Abishek Hospital, I would like to book an appointment.',
        'Name: ' + val('name'), 'Phone: ' + val('phone'), 'Service: ' + val('service')];
      var m = val('message');
      if (m) lines.push('Message: ' + m);
      return lines.join('\n');
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!check()) return;
      var url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text());
      var w = window.open(url, '_blank', 'noopener');
      if (!w) window.location.href = url;
      say('Opening WhatsApp with your details. If nothing opened, tap "Send by email" or call us.');
    });
    var mailBtn = $('[data-mail-btn]', form);
    if (mailBtn) mailBtn.addEventListener('click', function () {
      if (!check()) return;
      window.location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Appointment request - ' + val('service')) +
        '&body=' + encodeURIComponent(text());
      say('Opening your email app.');
    });
  }
})();
