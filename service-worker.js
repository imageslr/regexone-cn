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
    "revision": "3c98f9cc31b083efab03e2812e8e6827"
  },
  {
    "url": "assets/css/0.styles.d21bb604.css",
    "revision": "ab89d6e05d409360471ad20835829a22"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.94341018.js",
    "revision": "60a4d5eb196f12f6a8ff62a4f2b0fb39"
  },
  {
    "url": "assets/js/11.3b45177c.js",
    "revision": "123c1443290c19a0c3a0c8cfde4558bf"
  },
  {
    "url": "assets/js/12.2f8bb91e.js",
    "revision": "8ed834d910ab67844ec8a30e6c042666"
  },
  {
    "url": "assets/js/13.e2b331a8.js",
    "revision": "30852a4b71e08ce703abb787ece8d749"
  },
  {
    "url": "assets/js/14.0be2cfb8.js",
    "revision": "f9e5732ddd05773cb41936c179eee226"
  },
  {
    "url": "assets/js/15.475fc168.js",
    "revision": "d5d2860ce7efcfa4fd36bfe73f202194"
  },
  {
    "url": "assets/js/16.1cdf4614.js",
    "revision": "29f35e2a094db10fbdfad94d8b08d3e4"
  },
  {
    "url": "assets/js/17.9c91ab42.js",
    "revision": "ee8ba38957add352eb21f8486e5ac9e3"
  },
  {
    "url": "assets/js/18.0c868271.js",
    "revision": "300fe48f9b0bfd6ebf1d732ff22fc927"
  },
  {
    "url": "assets/js/19.48500e7f.js",
    "revision": "b508310db18a51460847338efa413d20"
  },
  {
    "url": "assets/js/2.ce786d80.js",
    "revision": "5268cd8c9198b3bad159e03e2c2def39"
  },
  {
    "url": "assets/js/20.d9019fc9.js",
    "revision": "82a8ffec528abfaba84ab96eb346c5da"
  },
  {
    "url": "assets/js/21.3ce51d46.js",
    "revision": "cb245001730ab0b08b5b32d54f77122a"
  },
  {
    "url": "assets/js/22.76510cc2.js",
    "revision": "5b42f651736a5c0dc1066389eff3e4cf"
  },
  {
    "url": "assets/js/23.2ccefd80.js",
    "revision": "d1f4b94ef1952491ce7ecf7f80bbe7e6"
  },
  {
    "url": "assets/js/24.75d3f4b9.js",
    "revision": "cfd6eb4ca569300cbcad4bd7ac823da8"
  },
  {
    "url": "assets/js/25.287a9cfa.js",
    "revision": "d14f2df2ef66f13eed3bb1945d7d51db"
  },
  {
    "url": "assets/js/26.ba2efc1b.js",
    "revision": "d2acd3cfefda0df30db86a12a7e60f76"
  },
  {
    "url": "assets/js/27.39d41121.js",
    "revision": "ef2b64a5a22f2ca2aed05755e0cc4764"
  },
  {
    "url": "assets/js/28.c70bf10b.js",
    "revision": "df68aa9e54fd070194c2798d5c45c8a3"
  },
  {
    "url": "assets/js/29.4a02436d.js",
    "revision": "2d896b0107ea700e6072a84ad6146450"
  },
  {
    "url": "assets/js/3.3b616c47.js",
    "revision": "d8d83194a6e340382b7be0ce405bff0f"
  },
  {
    "url": "assets/js/30.9787697d.js",
    "revision": "34e2800417ea046fe4e8d08a83f5b4bd"
  },
  {
    "url": "assets/js/31.e67d9ab0.js",
    "revision": "882929fdcd9ab7e0b3ff8d3e2b6be736"
  },
  {
    "url": "assets/js/32.58dcdc6c.js",
    "revision": "09ee478ef0903beb020e0535843d2eea"
  },
  {
    "url": "assets/js/33.fdc6c196.js",
    "revision": "08f6015258cb80a152b0c6094382d226"
  },
  {
    "url": "assets/js/34.f8724eb9.js",
    "revision": "c3390bf418484ee9adc3add6e647f2ba"
  },
  {
    "url": "assets/js/35.6037b10a.js",
    "revision": "6a5ed0a1f1f57201b610b19a21c8cc78"
  },
  {
    "url": "assets/js/36.1b727fa9.js",
    "revision": "60fcfaa2f02fd6fb6c4e4c26a5997e96"
  },
  {
    "url": "assets/js/37.80b028e1.js",
    "revision": "1bfe07c6d43b1ed229d3a83494e24d4f"
  },
  {
    "url": "assets/js/38.28047cfb.js",
    "revision": "ea7a2c389b1c503d56d0f00eee97cbcc"
  },
  {
    "url": "assets/js/39.e120e4ee.js",
    "revision": "9fd6c3e8aa9aba3d230e6a623915d843"
  },
  {
    "url": "assets/js/4.d00eeb32.js",
    "revision": "efe81e1b6d1f8c6f21f34f1455d1f03b"
  },
  {
    "url": "assets/js/40.4fe5948a.js",
    "revision": "971b18316e4f933e52bea678932599e5"
  },
  {
    "url": "assets/js/41.67fa91fe.js",
    "revision": "de0ce84465e9db9f53a1f062225eb856"
  },
  {
    "url": "assets/js/42.5b4a2ccf.js",
    "revision": "91e6dac0f95617c1335b9d3b4fb602ab"
  },
  {
    "url": "assets/js/43.436d0857.js",
    "revision": "fecc62584ba42fc6f4dc43fae0a546f7"
  },
  {
    "url": "assets/js/5.91edb650.js",
    "revision": "f7a8278a68cd66100407d640018e7bc3"
  },
  {
    "url": "assets/js/6.0ab87296.js",
    "revision": "b1a2fd736a3f3090cd0b047e86d2e2b7"
  },
  {
    "url": "assets/js/7.ddc743bf.js",
    "revision": "961ca439c5585361134fc1e1e9259461"
  },
  {
    "url": "assets/js/8.4b02640f.js",
    "revision": "67c8b4d136d5dd721cc2b893c3fc1e22"
  },
  {
    "url": "assets/js/9.ec821c41.js",
    "revision": "9761d0a82f00d63e512f3669eb850e26"
  },
  {
    "url": "assets/js/app.1f43ab44.js",
    "revision": "c76c112332be1133ced59894c3022dd0"
  },
  {
    "url": "favicon.png",
    "revision": "b884d9af1359b3b69a7a47ecc7acb467"
  },
  {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "552ff8edfba47052338dc4a58e63d7f6"
  },
  {
    "url": "images/icons/android-chrome-384x384.png",
    "revision": "5eb191aa3e9bf682b7aff3fc1e3a5f74"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "6ce4f53fb93110faf7c83db97b6f295e"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "01d041cc0495c38223a42bfb7d5e68a1"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "bf70a319058f3aa02bc5969e72e1569f"
  },
  {
    "url": "images/icons/mstile-150x150.png",
    "revision": "62551ad7348da00b6f3364c620a8a24d"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "3380c219b062ad4274e8ba6ded5876b0"
  },
  {
    "url": "index.html",
    "revision": "ac3b7896a9caa495f9084ea6964cef7d"
  },
  {
    "url": "lesson/assertion.html",
    "revision": "9d40d35f326a46c7682b64b493111720"
  },
  {
    "url": "lesson/back_referencing.html",
    "revision": "52b2e4abff8180aa34ba2584f097ba8f"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "ca80448bc09a1c2331d15b5e08274f30"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "cd0b0f35f5496f301ce1bb104d89d257"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "18cf05255ce88b8aa821c63a4eb212d9"
  },
  {
    "url": "lesson/end.html",
    "revision": "f71caef11afa14ccc750428efd14ef59"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "66b3ca7f1fb86257b1d7ae0f1b85492d"
  },
  {
    "url": "lesson/greeding.html",
    "revision": "da395d91df0e8bc2bcbecbbaf9a9ed22"
  },
  {
    "url": "lesson/index.html",
    "revision": "d124f9088a59e15ebe7d48d42d91e6ff"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "2fecd3c3fa89c8c15f51f9ac506baedc"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "de24a8ac3fbff8cdb3c56f5cce4f47f0"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "a9a1aed7b54b52f6a7e1d95b58d87b2f"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "e345f7f4d6a55958dc8ff5a8f53f7e84"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "647d02f60cc070b382e7fda33a64aea4"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "ed8c6e695fc6da3a24a18610ed467693"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "3d259cb4ed33438e2a9c6f140e7c3a67"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "6f2821418897f73d0850dd9df0e07393"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "20a01cd14cf1b61efd6322b20055a31b"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "2f1b5e8254836f01cf439fbace6f1103"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "cb25ba4362ae0b580c66110588446d9e"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "980a394d2947d961414391b0fd829b80"
  },
  {
    "url": "problem/complete.html",
    "revision": "ffb4be8fc9de9efb6d72cfb03c474408"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "2d37df671cd3a2db200554fa64840d3c"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "16d9e07a7c45f21e5f2575994db716dd"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "1403de7a47ae78c49bd249dc3c18fef6"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "db33cd1d7467d2cd460c810b480d7c7a"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "5cc6dcf412c07aaf492c60dd4061ac4d"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "8041fe966cd7cbd7efc49890f89bd88d"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "14cbe94bb13ea7d0d33a6af90e9b6326"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "8130936cc4ca772e877c7e4a361d2339"
  },
  {
    "url": "pwaicon.png",
    "revision": "91bc81deed905f9d58e183036f2cbfc8"
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
