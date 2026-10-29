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
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setDrawer(false); }); });
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
      f.focus();   /* the tapped button is gone: keep keyboard focus on the page */
    });
  });

  /* ---- click-to-play YouTube videos (privacy-friendly: nothing loads from YouTube until tapped) ---- */
  $$('.video').forEach(function (box) {
    var link = box.querySelector('a');
    if (!link) return;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var f = doc.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + box.getAttribute('data-video') + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
      f.title = box.getAttribute('data-title') || 'Video';
      f.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture; web-share';
      f.allowFullscreen = true;
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      box.innerHTML = '';
      box.appendChild(f);
      f.focus();
    });
  });

  /* ---- live clinic status ("Open now" / "Closed now"), always in Indian time whatever the visitor's own time zone ---- */
  var statuses = $$('[data-open-status]');
  if (statuses.length) {
    var WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var toMin = function (t) { var m = /^(\d{1,2}):(\d{2})$/.exec(t || ''); return m ? +m[1] * 60 + +m[2] : null; };
    var at12 = function (m) { var h = Math.floor(m / 60), mm = m % 60; return (h % 12 || 12) + ':' + (mm < 10 ? '0' : '') + mm + (h < 12 ? ' AM' : ' PM'); };
    var list = function (v) { return (v || '').split(',').filter(function (x) { return x !== ''; }); };
    var showStatus = function (el, state, lead, rest) {
      var key = state + lead + rest;
      if (el.getAttribute('data-key') === key) return;   /* nothing changed: leave the page alone */
      el.setAttribute('data-key', key);
      el.setAttribute('data-state', state);
      el.textContent = '';
      var dot = doc.createElement('span'), b = doc.createElement('b');
      dot.className = 'dot';
      dot.setAttribute('aria-hidden', 'true');
      b.textContent = lead;
      el.appendChild(dot);
      el.appendChild(b);
      el.appendChild(doc.createTextNode(rest));
    };
    var refreshStatus = function () {
      var wall = Date.now() + 330 * 60000;   /* India is UTC+5:30 all year: the shifted date's UTC fields are the clock on the wall in Erode */
      var t = new Date(wall), now = t.getUTCHours() * 60 + t.getUTCMinutes();
      statuses.forEach(function (el) {
        var days = list(el.getAttribute('data-days')).map(Number), shut = list(el.getAttribute('data-closed'));
        var open = toMin(el.getAttribute('data-open')), close = toMin(el.getAttribute('data-close'));
        if (!days.length || open === null || close === null) return;
        var onDay = function (n) {   /* is the clinic open on the day n days from today? */
          var d = new Date(wall + n * 86400000), iso = d.getUTCFullYear() + '-' + (d.getUTCMonth() < 9 ? '0' : '') + (d.getUTCMonth() + 1) + '-' + (d.getUTCDate() < 10 ? '0' : '') + d.getUTCDate();
          return days.indexOf(d.getUTCDay()) !== -1 && shut.indexOf(iso) === -1;
        };
        if (onDay(0) && now >= open && now < close) {
          var soon = close - now <= 30;
          showStatus(el, soon ? 'soon' : 'open', soon ? 'Closing soon' : 'Open now', ' · until ' + at12(close));
          return;
        }
        var when = onDay(0) && now < open ? 'today' : '';
        for (var n = 1; !when && n <= 60; n++) {
          if (!onDay(n)) continue;
          var d = new Date(wall + n * 86400000);
          when = n === 1 ? 'tomorrow' : n < 7 ? WEEK[d.getUTCDay()] : WEEK[d.getUTCDay()].slice(0, 3) + ' ' + d.getUTCDate() + ' ' + MONTHS[d.getUTCMonth()];
        }
        if (when) showStatus(el, 'closed', 'Closed now', ' · opens ' + when + ' ' + at12(open));
      });
    };
    var tickStatus = function () { refreshStatus(); setTimeout(tickStatus, 60000 - (Date.now() % 60000) + 100); };   /* re-check at the top of every minute */
    tickStatus();
    doc.addEventListener('visibilitychange', function () { if (!doc.hidden) refreshStatus(); });
  }

  /* ---- count-up numbers in the experience band (left as plain text for visitors who prefer less motion) ---- */
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var figures = $$('.stat b');
  if (!calm && figures.length && 'IntersectionObserver' in window && window.requestAnimationFrame) {
    var withCommas = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); };
    var countUp = function (el) {
      var target = el.textContent.trim(), m = /^([\d,]+)(\D*)$/.exec(target);
      if (!m) return;
      var end = parseInt(m[1].replace(/,/g, ''), 10), tail = m[2], first = null;
      var real = doc.createElement('span'), shown = doc.createElement('span');
      real.className = 'sr-only';   /* assistive technology reads the real number, not the one that is counting */
      real.textContent = target;
      shown.setAttribute('aria-hidden', 'true');
      shown.textContent = '0' + tail;
      el.textContent = '';
      el.appendChild(real);
      el.appendChild(shown);
      var step = function (ts) {
        if (first === null) first = ts;
        var p = Math.min(1, (ts - first) / 1400);
        if (p < 1) { shown.textContent = withCommas(Math.round(end * (1 - Math.pow(1 - p, 3)))) + tail; window.requestAnimationFrame(step); }
        else el.textContent = target;   /* done: back to the plain number the page was published with */
      };
      window.requestAnimationFrame(step);
    };
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { seen.unobserve(e.target); countUp(e.target); } });
    }, { threshold: 0.6 });
    figures.forEach(function (el) { if (el.getBoundingClientRect().top > window.innerHeight) seen.observe(el); });   /* a number already on screen at load stays as it is: no flash back to zero */
  }

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
      var w = window.open(url, '_blank');   /* 'noopener' in the features would always return null and send this tab to WhatsApp too */
      if (w) w.opener = null; else window.location.href = url;
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
