/* eslint-disable */

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute(self.__precacheManifest);

} else {
  console.log(`Workbox didn't load`);
}

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (resp) {
      return resp || fetch(event.request).then(function (response) {
        return caches.open('v1').then(function (cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
