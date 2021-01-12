importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

workbox.core.skipWaiting()
workbox.precaching.precacheAndRoute([], {})
