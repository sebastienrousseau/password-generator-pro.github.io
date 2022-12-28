/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "43191dfe781150c3bd88280a7641f101"
  },
  {
    "url": "about/index.html",
    "revision": "9c0474e81d63c2a079d2186a77d708ae"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "758e244ddef19c547a4fd0f875ded7ba"
  },
  {
    "url": "assets/css/0.styles.ded221ec.css",
    "revision": "585774cef202cdcdc9b988979d8b6037"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.60a86b7a.js",
    "revision": "678c6c83c7e1b64d4a08a5fd912f31b9"
  },
  {
    "url": "assets/js/11.a0b3b669.js",
    "revision": "dad165b274bc6bceb1b48f96e66632f3"
  },
  {
    "url": "assets/js/12.589dab0f.js",
    "revision": "8ebd4dcd9caa8771e7acb1ca75383d3f"
  },
  {
    "url": "assets/js/13.f842a870.js",
    "revision": "88129dc45b718d0d5ff5729b7bae91ed"
  },
  {
    "url": "assets/js/14.f65e246b.js",
    "revision": "b7bd55e3b4d26234c8af61c0dd03d82a"
  },
  {
    "url": "assets/js/15.cb53b20b.js",
    "revision": "918755c1df6c09aebc3b40f3b2cc01bb"
  },
  {
    "url": "assets/js/16.7cb78eda.js",
    "revision": "958c9c32a584f725cb40b56fcc672eeb"
  },
  {
    "url": "assets/js/2.c0f958a9.js",
    "revision": "076346ef4ed5fc4b2fd3087016341417"
  },
  {
    "url": "assets/js/3.cb944872.js",
    "revision": "628d06e99d7861e5179a9785825b0847"
  },
  {
    "url": "assets/js/4.82c1f7e5.js",
    "revision": "8da110625a8187d7e42408ca56aa165f"
  },
  {
    "url": "assets/js/5.c04aa028.js",
    "revision": "70671a37e71cceb9a699478ba2f1cd20"
  },
  {
    "url": "assets/js/6.3f37e5f1.js",
    "revision": "ace6de0d8b8d4662f1a6f1edd8ddfbdc"
  },
  {
    "url": "assets/js/7.52ca2f27.js",
    "revision": "37cb1307713a5b35cd34b9a8966d135a"
  },
  {
    "url": "assets/js/8.edd2dfbb.js",
    "revision": "c43e0127801af099f585c13f5026e2fc"
  },
  {
    "url": "assets/js/9.c109df02.js",
    "revision": "d073d1885821b92a6ac159cc6be8dd53"
  },
  {
    "url": "assets/js/app.3977c166.js",
    "revision": "5918745d6df267b9a31f5c9539f275fb"
  },
  {
    "url": "button-primary.svg",
    "revision": "28d6c1ad4f91acd6d64639580a90b13c"
  },
  {
    "url": "button-secondary.svg",
    "revision": "55b8cc324d72c6bf80ecf5ed0916fd5c"
  },
  {
    "url": "de/about/index.html",
    "revision": "11e0a2e3cc9bdee0ce3274f6c74777d9"
  },
  {
    "url": "de/index.html",
    "revision": "526be2c2dc54f0273baea14f0b0f7831"
  },
  {
    "url": "es/about/index.html",
    "revision": "0e48a3b740668c1b91c8843d1e174e69"
  },
  {
    "url": "es/index.html",
    "revision": "13c71c56dfc2117cbbf2c41377f99f2c"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "ebb795910050b9b57df60a917aeb3529"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "3cdd9cb98c41eb38723dcbb9eb6599e7"
  },
  {
    "url": "fr/about/index.html",
    "revision": "4ba4fb970e0113f2915f07aacfd3c666"
  },
  {
    "url": "fr/index.html",
    "revision": "43bd0ff4bba463a80f79a4c866afbd7d"
  },
  {
    "url": "icons/password-generator-pro-150x150.png",
    "revision": "35edd48b150b7ef7412a37162c3c2495"
  },
  {
    "url": "icons/password-generator-pro-180x180.png",
    "revision": "cb6e3f31a13ba9b04e43bd2bb0a43b00"
  },
  {
    "url": "icons/password-generator-pro-192x192.png",
    "revision": "5de0a09d862dc8e536b7a6105dddd3c5"
  },
  {
    "url": "icons/password-generator-pro-310x150.png",
    "revision": "814efd1079c0398432eb4593bc53a662"
  },
  {
    "url": "icons/password-generator-pro-310x310.png",
    "revision": "360c8a28380b5c8367e7ecc09687a0d2"
  },
  {
    "url": "icons/password-generator-pro-384x384.png",
    "revision": "dee15fa7548bf5107b0b1d6d96a5e784"
  },
  {
    "url": "icons/password-generator-pro-512x512.png",
    "revision": "be8322d3a1fd7a6612d76f64e100ead8"
  },
  {
    "url": "icons/password-generator-pro-70x70.png",
    "revision": "a0e3dd675e2faf5a5688d388ec4eec6e"
  },
  {
    "url": "icons/password-generator-pro.svg",
    "revision": "afb8b560045016151098900509f1a5f6"
  },
  {
    "url": "index.html",
    "revision": "ccfbe6506f678d6b4ed38516d3bab849"
  },
  {
    "url": "logo.svg",
    "revision": "26964baa6a8d28e2ae1c779341e0c590"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
