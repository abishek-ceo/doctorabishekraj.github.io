/* Retired service worker - please leave this file in place.

   An earlier version of this website (26 March - 1 April 2026) registered a caching service worker that
   served the home page from the browser cache forever, so returning visitors never saw updates.
   Browsers that installed it still check this file. This version deletes every cache, removes itself
   and reloads any open tab, so those visitors get the live website again. The current site does not
   register a service worker. */
self.addEventListener('install', function () { self.skipWaiting(); });

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    var keys = await caches.keys();
    await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    await self.registration.unregister();
    var clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(function (c) { c.navigate(c.url); });
  })());
});
