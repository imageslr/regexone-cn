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
    "revision": "e49f947a62c9572d78f820e5b83f0f56"
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
    "url": "assets/js/14.f7364efe.js",
    "revision": "2fdbd874a99403dddf354c24ea99ae0f"
  },
  {
    "url": "assets/js/15.e0162fd7.js",
    "revision": "534c778db172506ef79f6d50b6b1a653"
  },
  {
    "url": "assets/js/16.5eb69937.js",
    "revision": "2ee20279d2ce16a2c095733e8cd3828c"
  },
  {
    "url": "assets/js/17.6373e7c6.js",
    "revision": "7e75ce9d67bf07a6a420ea272a45cb0e"
  },
  {
    "url": "assets/js/18.4cfc3a63.js",
    "revision": "cffd096183d4f3a962b859dbc95944f7"
  },
  {
    "url": "assets/js/19.27672402.js",
    "revision": "201b1652eb3c8817371e78abb239879a"
  },
  {
    "url": "assets/js/2.ce786d80.js",
    "revision": "5268cd8c9198b3bad159e03e2c2def39"
  },
  {
    "url": "assets/js/20.e77d2a87.js",
    "revision": "b39fc31b7ef67f6e0be038fe28286b38"
  },
  {
    "url": "assets/js/21.efef9bcf.js",
    "revision": "76c59a279a9919bbd58b708c1718569f"
  },
  {
    "url": "assets/js/22.ea0c518f.js",
    "revision": "729f999cd0fe2a7c81a5b55a399436af"
  },
  {
    "url": "assets/js/23.8ff0073b.js",
    "revision": "24a544b0419ebbea578e76001cb270c7"
  },
  {
    "url": "assets/js/24.7251adc1.js",
    "revision": "a0b46e1991f73ba72e909230ecb8a680"
  },
  {
    "url": "assets/js/25.c9c1174b.js",
    "revision": "5786359f7fb0eb2fafb8179ab334d5f7"
  },
  {
    "url": "assets/js/26.ee588dd9.js",
    "revision": "480e416bfbea3070b3ff8a958623cd36"
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
    "url": "assets/js/app.d829fe3e.js",
    "revision": "9dceebbfc4fb10816ae5f53bf803dc44"
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
    "revision": "f4fed3a57f237cc9c4e2649fb12d5eb5"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "2cb6e68b69d8d4b70199359e3f1544c7"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "35fb692cee7da5eb9b63f29ace96353d"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "6cbed98e3324eb74de92459280112b6e"
  },
  {
    "url": "lesson/end.html",
    "revision": "fab16928ff34e1aec338576705db13c6"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "6197909d679c022e344c0f68494e6681"
  },
  {
    "url": "lesson/index.html",
    "revision": "6a1c764b9af280534f795a4bf24df3d9"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "84e28aa3e5e10267813b857712528a5b"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "3f2c93fb8bfc38ef5c8652ca2e1e6d31"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "7b305e9de3c0817ede30434dbaba7453"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "efff63545d1d4de08d974604eac00ba9"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "84812ff30f7fc45b99fb0d06ee4f8f1d"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "495da96d2a62efddcc1c137e557396b5"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "aa658e6a30a4b80c5523beecbf2423a3"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "c4d63761ee9fc84a7bd8e3e60a21f758"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "dcb62ee2ff5150270ae34950d7dfcd15"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "17869b56382326f43b29f88ff602ffea"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "81e74fa1878ed637204f207274cb5d43"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "e32b94632a43b9b823305e580da8ffad"
  },
  {
    "url": "problem/complete.html",
    "revision": "90030c6838e7a9aa3b96488496cca627"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "b7daca86372329e5b2e79e85f53de2f2"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "9bd75dd2effafac27a94dcf2ce576787"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "9f806df76cc467b32b518dc839589ad4"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "e8c901c044b1c637fd2c26dbe5d273c5"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "1ed2652f7fd21bec3d64ef38ee9b7962"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "b03ee8abbbca49e21fe1787baf01e4d0"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "0149811e8e1d0910c6e6815337a18015"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "e4792935c675ebde1ed17a81ffc20aa0"
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
