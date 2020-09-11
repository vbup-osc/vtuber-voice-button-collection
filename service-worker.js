var cacheName = 'VBUP-V1.1'; //版本号
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
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(r) {
            console.log('[Service Worker] Fetching resource: ' + e.request.url);
            return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
                    console.log('[Service Worker] Caching new resource: ' + e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        Promise.all([
            // 更新客户端
            self.clients.claim(),

            // 清理旧版本
            caches.keys().then(function(cacheList) {
                return Promise.all(
                    cacheList.map(function(cacheName) {
                        console.log(cacheList);
                        if (cacheName !== cacheList[0]) {
                            console.log(cacheList);
                            return caches.delete(cacheList[0]);
                        }
                    })
                );
            })
        ])
    );
});