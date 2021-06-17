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
    "revision": "c93cad2a1ca764f03ea78f12a07e7dcc"
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
    "url": "assets/js/14.033a9688.js",
    "revision": "939dd1093dc3ff9ab5cb4ba7f0c8dfcd"
  },
  {
    "url": "assets/js/15.6d87ed68.js",
    "revision": "007e7426e6b101a5f8929d4297ceff3b"
  },
  {
    "url": "assets/js/16.b7088323.js",
    "revision": "1395ab169996bf2da2e04c785d9882ba"
  },
  {
    "url": "assets/js/17.0180ba53.js",
    "revision": "7818bc4e1c5c90e2fa754ebd7b290810"
  },
  {
    "url": "assets/js/18.a7ee833b.js",
    "revision": "384e12dc05808bce78cebcb00c5eb97b"
  },
  {
    "url": "assets/js/19.f2bca8b0.js",
    "revision": "86aab66e4f7c3b35e6b4ddd7393a9b7c"
  },
  {
    "url": "assets/js/2.ce786d80.js",
    "revision": "5268cd8c9198b3bad159e03e2c2def39"
  },
  {
    "url": "assets/js/20.787adf6b.js",
    "revision": "6ae68f465c7609bde5b17cf810de0f23"
  },
  {
    "url": "assets/js/21.76b8f045.js",
    "revision": "70073087e9c915c0ca0951a98f8cd040"
  },
  {
    "url": "assets/js/22.ad4006d5.js",
    "revision": "816f3205e63793944cbb2e7643c335a9"
  },
  {
    "url": "assets/js/23.ca9259b0.js",
    "revision": "cbb26cf8fe16d15307f0400e560c3079"
  },
  {
    "url": "assets/js/24.31b488bf.js",
    "revision": "c2615863791c9b7270e81435301134ac"
  },
  {
    "url": "assets/js/25.8b431490.js",
    "revision": "2e94d2c2f3560972eb3a24705ea12637"
  },
  {
    "url": "assets/js/26.a20e1864.js",
    "revision": "f1a711d28c27d8f394b12409dabfaef6"
  },
  {
    "url": "assets/js/27.2224550c.js",
    "revision": "83525c1f84912f4747ef91a107a3c116"
  },
  {
    "url": "assets/js/28.49fce846.js",
    "revision": "d9270b4f6ab4293763318cc76b77fca1"
  },
  {
    "url": "assets/js/29.5ef2b45f.js",
    "revision": "6c1f6fc151e15c8b03bc1bbbdc3e96a8"
  },
  {
    "url": "assets/js/3.3b616c47.js",
    "revision": "d8d83194a6e340382b7be0ce405bff0f"
  },
  {
    "url": "assets/js/30.30b15cc5.js",
    "revision": "504f42545581fdd52c56cd535be40c9a"
  },
  {
    "url": "assets/js/31.24499bc7.js",
    "revision": "843d7e6951526e1f3ceadeaaf3cf715a"
  },
  {
    "url": "assets/js/32.fd96a276.js",
    "revision": "fca04b65b54468588085d846c52d1782"
  },
  {
    "url": "assets/js/33.7faf0051.js",
    "revision": "bdb5c89fc73b0420de097dfb069c03c0"
  },
  {
    "url": "assets/js/34.0dcdccdb.js",
    "revision": "8005368776ac46afab20edb7eeecc453"
  },
  {
    "url": "assets/js/35.aec9e793.js",
    "revision": "5751c980fef0c4af59f8d6fe50f71f22"
  },
  {
    "url": "assets/js/36.030f8391.js",
    "revision": "ad03091d2bf0695e52dd9e84a1b676b3"
  },
  {
    "url": "assets/js/37.39a26245.js",
    "revision": "7a70c23e9ed6b4701a4092858be1b13f"
  },
  {
    "url": "assets/js/38.989a9050.js",
    "revision": "057be8ec4f486e45aa6f499435f3aa2d"
  },
  {
    "url": "assets/js/39.23120ce4.js",
    "revision": "c1a028ab940ee5941d5e5a507f96d78f"
  },
  {
    "url": "assets/js/4.d00eeb32.js",
    "revision": "efe81e1b6d1f8c6f21f34f1455d1f03b"
  },
  {
    "url": "assets/js/40.41f4f9c8.js",
    "revision": "41d7d91a8fbf4ff0792ea4741e0b3bf6"
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
    "url": "assets/js/8.8eefce96.js",
    "revision": "fa7f865f223389df4c41149b84723151"
  },
  {
    "url": "assets/js/9.ec821c41.js",
    "revision": "9761d0a82f00d63e512f3669eb850e26"
  },
  {
    "url": "assets/js/app.01e330e8.js",
    "revision": "804d47d973f3fa552c41512bb83f7f83"
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
    "revision": "976e421ccf010c6b50b950e03ab47537"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "b54e05b6cf5ce771dec7f9a31ca60624"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "cdc95e5b24baf806491c0fefdb2d3e80"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "fa3d507d0cd399cf613890e9bfec9b81"
  },
  {
    "url": "lesson/end.html",
    "revision": "c31f9083bfc34f786099034777b5d74a"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "1d533fe44414a6650135f1eea5578af0"
  },
  {
    "url": "lesson/index.html",
    "revision": "c46bf1cf705943ee05a984be3ff477f4"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "5e3dfd776d0cec8e561ee9cec70a2d96"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "11d49a9444180de8f6174b686c07927b"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "8440823247f48dfd38a6d633549f1a6e"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "0a928c6d81e5f458662b39aed5fb71fd"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "1ab9c814d7a6e8ed8e80fadcaf52828c"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "34fd71c6c3307e1b6a4aa3439191c389"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "3dbfa29561de7e6a3ba7ad2bddeaa67b"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "7c078ce6f93507346d5fe14494d69632"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "3f643239f1700c6bfeb0458647fa9d23"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "a5c27f50e13799ecc96eea783386657a"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "ccf5ad7ed68037c0a244499f71f2e61f"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "753ff72ce6b5a81b3cd1706fbf70b7f8"
  },
  {
    "url": "problem/complete.html",
    "revision": "4ed57edb39595477c861f537cf89e29e"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "8e84f831fcf21a11e64cf4be5f180e3c"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "22c1b951d821562d8d5c09869427ca8b"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "c342eacabcb807e4c925da7a4f159ac2"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "f8d32a5d722d802614495d1e5fb1341b"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "842461581f5ebca51dbdeebaafcbf596"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "b7855f6e67d3fe66e6157b21c6b3aea5"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "6fe02a61507ffe00e4ab4f90a82ef74a"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "2f1cb50d458c48b63e206b7c4f0f4a9e"
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
