self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          'GBweather.js',
          'Globweather.html',
          'GBweather.css',
          'autumnimg.jpg',
          'BB-aut.jpg',
          'BB-cloud.jpeg',
          'manifest.json',
          'winter-img.png',
          'summer-img.jpg',
          'weatherForcast-img.jpg',
          'sw.js',
          'icon-192x192.jpg',
          'icon-384x384.jpg',
          'icon-512x512.jpg',
          'icon-152x152.jpg',
          'icon-144x144.jpg',
          'icon-128x128.jpg',
          'icon-72x72.jpg',
          'icon-92x92.jpg',
        ]);
      })
    );
  });
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
    );
  });