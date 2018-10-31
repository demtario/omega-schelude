/* eslint-disable */

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute(self.__precacheManifest);

} else {
  console.log(`Workbox didn't load`);
}

// Google fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
); 

const API = 'https://amedrygal.pl/api'

// Zastępstwa
workbox.routing.registerRoute(
  new RegExp(`${API}/replacements.php`, 'i'),
  async ({event}) => {
    try {
      return await workbox.strategies.cacheFirst({
        cacheName: 'api-replacements',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.Plugin({
            maxAgeSeconds: 60 * 60 * 8, // 1 miesiąc
          }),
        ],
      }).handle({event});
    } catch (error) {
      return Response.error();
    }
  }
);

// Plan
workbox.routing.registerRoute(
  new RegExp(`${API}/4h.php`, 'i'),
  async ({event}) => {
    try {
      return await workbox.strategies.cacheFirst({
        cacheName: 'api-schelude',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.Plugin({
            maxAgeSeconds: 60 * 60 * 24 * 30, // 1 miesiąc
          }),
        ],
      }).handle({event});
    } catch (error) {
      return Response.error();
    }
  }
);

// Klasy
workbox.routing.registerRoute(
  new RegExp(`${API}/classes.php`, 'i'),
  async ({event}) => {
    try {
      return await workbox.strategies.cacheFirst({
        cacheName: 'api-classes',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.Plugin({
            maxAgeSeconds: 60 * 60 * 24 * 30 * 6, // 1 miesiąc
          }),
        ],
      }).handle({event});
    } catch (error) {
      return Response.error();
    }
  }
);
