var cacheName = 'VBUP';
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll([
            '/images/logo/logo016.png',
            '/images/logo/logo072.png',
            '/images/logo/logo152.png',
            '/images/logo/logo192.png',
            '/images/logo/logo256.png',
            '/images/logo/logo512.png',
        ]))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            var requestToCache = event.request.clone(); //          
            return fetch(requestToCache).then(
                function(response) {
                    if (!response || response.status !== 200) {
                        return response;
                    }
                    var responseToCache = response.clone();
                    caches.open(cacheName)
                        .then(function(cache) {
                            cache.put(requestToCache, responseToCache);
                        });
                    return response;
                })
        }))
});