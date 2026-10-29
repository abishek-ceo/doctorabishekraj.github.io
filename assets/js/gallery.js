/* Photo gallery lightbox. Without <dialog> support the links simply open the full-size image. */
(function () {
  'use strict';
  var dlg = document.getElementById('lb');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = dlg.querySelector('img'), cap = dlg.querySelector('p');
  Array.prototype.forEach.call(document.querySelectorAll('[data-lb]'), function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      img.src = a.href;
      img.alt = a.getAttribute('data-alt') || '';
      cap.textContent = a.getAttribute('data-cap') || '';
      dlg.showModal();
    });
  });
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || (e.target.closest && e.target.closest('[data-close]'))) dlg.close();
  });
})();
