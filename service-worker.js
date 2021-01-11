importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

self.__precacheManifest = (self.__precacheManifest || []).concat([
]);

workbox.core.setCacheNameDetails({ prefix: 'VTuberの音声ボタンコレクション' })

workbox.core.skipWaiting()

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
