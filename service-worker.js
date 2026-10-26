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
    "revision": "e7f120e1170cd0de3186f72e7e9edbf7"
  },
  {
    "url": "about/index.html",
    "revision": "354083e6c66114151ee279d5eebed8db"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "758e244ddef19c547a4fd0f875ded7ba"
  },
  {
    "url": "assets/css/0.styles.544587fd.css",
    "revision": "04d313b0525ef46ad09991b6a1507e5b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ed1438ce.js",
    "revision": "8ed96cdf3c7b8e6631d6c7fb7d97baba"
  },
  {
    "url": "assets/js/10.322d8b7e.js",
    "revision": "2a4102968f9c151722e2a95068f1861d"
  },
  {
    "url": "assets/js/11.2507aea8.js",
    "revision": "b7fa1fafa217356bc15e33101a1aea39"
  },
  {
    "url": "assets/js/12.311ac4a0.js",
    "revision": "0c8081a4b39117e7127c79056aecdd14"
  },
  {
    "url": "assets/js/13.24fc3898.js",
    "revision": "3d68ce24ea9e953798579a4ad9cbd874"
  },
  {
    "url": "assets/js/14.95c97833.js",
    "revision": "faad73542c6bfd80eeeba1a32593a0b5"
  },
  {
    "url": "assets/js/15.71981786.js",
    "revision": "5bdc65f72849c194534c6f9ccc414978"
  },
  {
    "url": "assets/js/16.719e09b0.js",
    "revision": "0e3bf5c8139253c37940d2bcd08da5d3"
  },
  {
    "url": "assets/js/17.cc5f092b.js",
    "revision": "453bc29fd90806986e46c825a6681324"
  },
  {
    "url": "assets/js/18.c433d996.js",
    "revision": "66c09f67d91f7ec60cbec1ae4e2728ba"
  },
  {
    "url": "assets/js/19.f905986a.js",
    "revision": "23559941f2d6283cc426206a36da10dc"
  },
  {
    "url": "assets/js/2.f9a43433.js",
    "revision": "d60c088cfa4170ac906014f61bd7efcc"
  },
  {
    "url": "assets/js/20.83f79a2b.js",
    "revision": "893fc9266f714c407a063875531fb64f"
  },
  {
    "url": "assets/js/21.ed8f4219.js",
    "revision": "d83040c585adc3d3eb059745a65fdee0"
  },
  {
    "url": "assets/js/22.f550ea02.js",
    "revision": "e54d342a6fe5da3ce609c3d9f34719b7"
  },
  {
    "url": "assets/js/23.2299340f.js",
    "revision": "befd042aebe08bf1a545e4fa418a4aa4"
  },
  {
    "url": "assets/js/24.fa924b8c.js",
    "revision": "aeb328ebd0fa8b1d33eb7f8a948ec727"
  },
  {
    "url": "assets/js/25.63bff92e.js",
    "revision": "c6306b0447fd73ef9c11fc85abc67939"
  },
  {
    "url": "assets/js/26.e06334a1.js",
    "revision": "136bd563141fb64143cf00721c8c2596"
  },
  {
    "url": "assets/js/27.a0ebf2c5.js",
    "revision": "90e4160f7dc44284c9c228c66f6e2f95"
  },
  {
    "url": "assets/js/28.ce485f17.js",
    "revision": "440328df2d08120376f92d482e15da95"
  },
  {
    "url": "assets/js/29.e92041b5.js",
    "revision": "b220dd131dcc7af20b9a8e848719a159"
  },
  {
    "url": "assets/js/3.81ebd100.js",
    "revision": "1be995dca59145b5df26209db3af450b"
  },
  {
    "url": "assets/js/30.e904d24b.js",
    "revision": "1d0c364ede6d1375a30e097876c32228"
  },
  {
    "url": "assets/js/31.239ca3df.js",
    "revision": "46c62be4721d8db2ebf6ee73fc2d3033"
  },
  {
    "url": "assets/js/4.e3c894de.js",
    "revision": "d745746897c6b34350de81eebfceafab"
  },
  {
    "url": "assets/js/5.ab63f9a0.js",
    "revision": "b66e1b459f56cc9b283aed7cafcc040a"
  },
  {
    "url": "assets/js/6.7b2eee68.js",
    "revision": "2f43ba2fcde9e39fd7291733a0b2aa23"
  },
  {
    "url": "assets/js/7.72621c7f.js",
    "revision": "f7c05b0e1573efd9432c64118a23260d"
  },
  {
    "url": "assets/js/app.186f07a9.js",
    "revision": "a9bf8c8008d5a3919aece1bc473886f2"
  },
  {
    "url": "assets/js/vendors~docsearch.81cfea21.js",
    "revision": "6bb2421f88a613259ad05206b1e5dd27"
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
    "revision": "ed4fdd61f386dfe8c138758f1ef24236"
  },
  {
    "url": "de/index.html",
    "revision": "e5875f099979c6750b1ca95b99ecaf36"
  },
  {
    "url": "es/about/index.html",
    "revision": "38b3a43a93134570e28c5cfc50a790b4"
  },
  {
    "url": "es/index.html",
    "revision": "7f4a963ba8419f69ce0fd8dfa06340a6"
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
    "revision": "3a5a756ecff71a01315616b5503d34a3"
  },
  {
    "url": "fr/index.html",
    "revision": "a31863278b1715607a56d7c4c82470e4"
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
    "revision": "9e13a140d523cae4296bc444c06f0533"
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
