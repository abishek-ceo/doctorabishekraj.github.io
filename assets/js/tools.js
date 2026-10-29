/* Abishek Hospital - patient tools: pregnancy due-date calculator and visit reminder.
   Runs only in the visitor's browser: nothing typed in is sent anywhere or stored. */
(function () {
  'use strict';
  var doc = document;
  var root = doc.querySelector('[data-tool]');
  if (!root) return;
  function $(s, r) { return (r || root).querySelector(s); }
  var PLACE = root.getAttribute('data-place') || '';
  var PHONE = root.getAttribute('data-phone') || '';
  var WA = root.getAttribute('data-wa') || '';
  var IST_MINUTES = 330;   /* India Standard Time is UTC+5:30 all year */

  /* ---- dates ---- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function noon(y, m, d) { return new Date(y, m - 1, d, 12, 0, 0); }   /* noon avoids daylight-saving edge cases */
  function parseYmd(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
    if (!m) return null;
    var d = noon(+m[1], +m[2], +m[3]);
    return d.getFullYear() === +m[1] && d.getMonth() === +m[2] - 1 && d.getDate() === +m[3] ? d : null;
  }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function addDays(d, n) { return noon(d.getFullYear(), d.getMonth() + 1, d.getDate() + n); }
  function between(a, b) { return Math.round((b - a) / 86400000); }
  function today() { var n = new Date(); return noon(n.getFullYear(), n.getMonth() + 1, n.getDate()); }
  function longDate(d) { return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); }
  function plural(n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); }
  function minutes(t) { var m = /^(\d{2}):(\d{2})$/.exec(t || ''); return m && +m[1] < 24 && +m[2] < 60 ? +m[1] * 60 + +m[2] : null; }
  function clock(hh, mm) { return (hh % 12 || 12) + ':' + pad(mm) + (hh < 12 ? ' AM' : ' PM'); }
  function enc(s) { return encodeURIComponent(s); }

  /* ---- calendar link and .ics file ---- */
  var IOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  function utc(d) { return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + '00Z'; }
  function icsText(v) { return String(v).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
  function fold(line) { var out = []; while (line.length > 74) { out.push(line.slice(0, 74)); line = ' ' + line.slice(74); } out.push(line); return out.join('\r\n'); }
  function makeIcs(ev) {
    var L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Abishek Hospital//Patient tools//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      'UID:' + Date.now() + '-' + Math.random().toString(36).slice(2, 10) + '@abishekhospital.com', 'DTSTAMP:' + utc(new Date())];
    if (ev.allDay) L.push('DTSTART;VALUE=DATE:' + ev.start, 'DTEND;VALUE=DATE:' + ev.end);
    else L.push('DTSTART:' + ev.start, 'DTEND:' + ev.end);
    L.push('SUMMARY:' + icsText(ev.title), 'LOCATION:' + icsText(ev.place), 'DESCRIPTION:' + icsText(ev.details));
    (ev.alarms || []).forEach(function (a) { L.push('BEGIN:VALARM', 'TRIGGER:' + a.trigger, 'ACTION:DISPLAY', 'DESCRIPTION:' + icsText(a.text), 'END:VALARM'); });
    L.push('END:VEVENT', 'END:VCALENDAR');
    return L.map(fold).join('\r\n') + '\r\n';
  }
  function googleLink(ev) {
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + enc(ev.title) + '&dates=' + ev.start + '/' + ev.end +
      '&details=' + enc(ev.details) + '&location=' + enc(ev.place);
  }
  function downloadIcs(ev, name) {
    var url = URL.createObjectURL(new Blob([makeIcs(ev)], { type: 'text/calendar;charset=utf-8' }));
    var a = doc.createElement('a');
    a.href = url;
    if (!IOS) a.download = name;   /* on an iPhone the calendar sheet opens instead of a download */
    doc.body.appendChild(a); a.click(); doc.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
  }
  function wire(res, getEvent, fileName) {
    $('[data-ics]', res).addEventListener('click', function () { var ev = getEvent(); if (ev) downloadIcs(ev, fileName); });
  }

  /* ---- pregnancy due-date calculator ---- */
  var dueForm = $('[data-due-form]');
  if (dueForm) {
    var lmp = $('#lmp'), cycle = $('#cycle'), dueRes = $('[data-due-result]'), lmpField = lmp.parentNode, lmpErr = $('#lmp-err');
    var dueEvent = null;
    var t0 = today();
    lmp.max = ymd(t0);
    lmp.min = ymd(addDays(t0, -300));
    wire(dueRes, function () { return dueEvent; }, 'due-date.ics');
    var fail = function (msg) { lmpField.classList.add('bad'); lmpErr.textContent = msg; dueRes.hidden = true; };
    [lmp, cycle].forEach(function (el) { el.addEventListener('input', function () { dueRes.hidden = true; }); });
    dueForm.addEventListener('submit', function (e) {
      e.preventDefault();
      lmpField.classList.remove('bad');
      var start = parseYmd(lmp.value), now = today();
      if (!start) return fail('Please choose the first day of your last period.');
      if (start > now) return fail('That date is in the future. Please check it.');
      if (between(start, now) > 300) return fail('That date is more than 10 months ago. Please check it.');
      var c = parseInt(cycle.value, 10);
      if (!(c >= 21 && c <= 35)) c = 28;
      var edd = addDays(start, 280 + (c - 28));
      var left = between(now, edd);
      var ga = Math.max(0, 280 - left);   /* days pregnant today, counted from the (cycle-adjusted) first day of the last period */
      var w = Math.floor(ga / 7), d = ga % 7;
      var tri = ga < 98 ? 'first trimester' : ga < 196 ? 'second trimester' : 'third trimester';
      $('[data-edd]', dueRes).textContent = longDate(edd);
      $('[data-progress-text]', dueRes).textContent = 'Today you are about ' + plural(w, 'week') + ' and ' + plural(d, 'day') + ' pregnant (' + tri + ').';
      $('[data-progress]', dueRes).value = Math.min(280, ga);
      $('[data-togo]', dueRes).textContent = left > 1 ? plural(Math.floor(left / 7), 'week') + ' and ' + plural(left % 7, 'day') + ' to go.'
        : left === 1 ? 'Your due date is tomorrow.'
        : left === 0 ? 'Your due date is today. If labour has not started, please call us.'
        : 'Your due date was ' + plural(-left, 'day') + ' ago. Please contact your doctor.';
      $('[data-wa-btn]', dueRes).href = 'https://wa.me/' + WA + '?text=' + enc('Hello Abishek Hospital, I would like to book an antenatal visit. My estimated due date is ' + longDate(edd) + '.');
      dueEvent = {
        allDay: true, start: ymd(edd).replace(/-/g, ''), end: ymd(addDays(edd, 1)).replace(/-/g, ''),
        title: 'Estimated due date', place: PLACE,
        details: 'Estimated due date from the Abishek Hospital calculator. Only a few babies arrive exactly on the due date. To book antenatal visits call ' + PHONE + '.',
        alarms: [{ trigger: '-P7D', text: 'Your estimated due date is in one week' }]
      };
      $('[data-gcal]', dueRes).href = googleLink(dueEvent);
      dueRes.hidden = false;
      dueRes.focus();
    });
  }

  /* ---- next-visit reminder ---- */
  var visitForm = $('[data-visit-form]');
  if (visitForm) {
    var vDate = $('#v-date'), vTime = $('#v-time'), vType = $('#v-type'), visitRes = $('[data-visit-result]');
    var OPEN = minutes(root.getAttribute('data-open')), CLOSE = minutes(root.getAttribute('data-close')), HOURS = root.getAttribute('data-hours') || '';
    var DAYS = (root.getAttribute('data-days') || '').split(',').filter(function (x) { return x !== ''; }).map(Number);   /* clinic days, 0 = Sunday */
    var SHUT = (root.getAttribute('data-closed') || '').split(',').filter(function (x) { return x !== ''; });   /* dates the clinic is shut (holidays) */
    var TYPES = { antenatal: 'Antenatal checkup', followup: 'Follow-up visit', postnatal: 'Postnatal checkup', other: 'Visit' };
    var has = function (k) { return Object.prototype.hasOwnProperty.call(TYPES, k); };
    var visitEvent = null, shareUrl = '';
    vDate.min = ymd(today());
    wire(visitRes, function () { return visitEvent; }, 'abishek-hospital-visit.ics');
    var mark = function (input, bad) { input.parentNode.classList.toggle('bad', bad); };
    var show = function (dateStr, timeStr, typeKey) {
      var day = parseYmd(dateStr), mins = minutes(timeStr);
      mark(vDate, !day); mark(vTime, mins === null);
      if (!day || mins === null) { visitRes.hidden = true; return; }
      var hh = Math.floor(mins / 60), mm = mins % 60;
      var when = longDate(day) + ' at ' + clock(hh, mm);
      var notes = [];
      if (day < today()) notes.push('This date has already passed.');
      if (SHUT.indexOf(ymd(day)) !== -1) notes.push('The clinic is closed for regular visits on this date. Please call ' + PHONE + ' to choose another day.');
      else if (DAYS.length && DAYS.indexOf(day.getDay()) === -1) notes.push(day.toLocaleDateString('en-IN', { weekday: 'long' }) + ' is for emergency care only. Please call ' + PHONE + ' to confirm this visit.');
      else if (OPEN !== null && CLOSE !== null && (mins < OPEN || mins > CLOSE)) notes.push('Clinic hours are ' + HOURS + '. Please call ' + PHONE + ' to confirm this time.');
      var start = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate(), hh, mm) - IST_MINUTES * 60000);
      var label = TYPES[typeKey];
      visitEvent = {
        start: utc(start), end: utc(new Date(start.getTime() + 30 * 60000)),
        title: 'Abishek Hospital: ' + label, place: PLACE,
        details: 'Please carry your previous reports. To change this visit call ' + PHONE + '.',
        alarms: [{ trigger: '-P1D', text: 'Tomorrow: ' + label + ' at Abishek Hospital' }, { trigger: '-PT2H', text: label + ' at Abishek Hospital in two hours' }]
      };
      shareUrl = location.origin + location.pathname + '?d=' + dateStr + '&t=' + timeStr + '&v=' + typeKey;
      $('[data-visit-when]', visitRes).textContent = when;
      $('[data-visit-note]', visitRes).textContent = notes.join(' ');
      $('[data-gcal]', visitRes).href = googleLink(visitEvent);
      $('[data-share-wa]', visitRes).href = 'https://wa.me/?text=' + enc('Your next visit at Abishek Hospital: ' + when + '.\nTap to add it to your calendar: ' + shareUrl);
      visitRes.hidden = false;
    };
    var copyBtn = $('[data-copy]', visitRes), copyLabel = copyBtn.querySelector('span');
    copyBtn.addEventListener('click', function () {
      var done = function () { copyLabel.textContent = 'Link copied'; setTimeout(function () { copyLabel.textContent = 'Copy link'; }, 2500); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(shareUrl).then(done, function () { window.prompt('Copy this link', shareUrl); });
      else window.prompt('Copy this link', shareUrl);
    });
    [vDate, vTime, vType].forEach(function (el) { el.addEventListener('input', function () { visitRes.hidden = true; }); });
    visitForm.addEventListener('submit', function (e) {
      e.preventDefault();
      show(vDate.value, vTime.value, vType.value);
      if (!visitRes.hidden) visitRes.focus();
    });
    /* a link sent by the clinic opens with the visit already filled in */
    var q = new URLSearchParams(location.search), qd = q.get('d'), qt = q.get('t'), qv = q.get('v');
    if (parseYmd(qd) && minutes(qt)) {
      vDate.value = qd; vTime.value = qt;
      if (has(qv)) vType.value = qv;
      show(qd, qt, has(qv) ? qv : 'other');
    }
  }
})();
