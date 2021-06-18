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
    "revision": "e44f60da974f48bc5efdc8450e9e1b48"
  },
  {
    "url": "assets/css/0.styles.b5b73431.css",
    "revision": "095752ff90120646d272fe6b8f6331a2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f9b58b40.js",
    "revision": "f5e515f24961012b5d23df3bcc471db1"
  },
  {
    "url": "assets/js/11.6cb3dfb5.js",
    "revision": "67edac21d25d46002577d984778b6acc"
  },
  {
    "url": "assets/js/12.fcac0e61.js",
    "revision": "82af9b0bdf3540d36951c4c8547b39d1"
  },
  {
    "url": "assets/js/13.9dacb432.js",
    "revision": "b8fd2d8c87654e685a365c3bf152b63b"
  },
  {
    "url": "assets/js/14.d0445f62.js",
    "revision": "7b19dd86097602118a8052b1247b5cf4"
  },
  {
    "url": "assets/js/15.e99bb09e.js",
    "revision": "0552ff682d913f82032565e74c6b3082"
  },
  {
    "url": "assets/js/16.7c1e8578.js",
    "revision": "ed3c7f574fb661816545e9617da66b96"
  },
  {
    "url": "assets/js/17.416cfd62.js",
    "revision": "6629e19b2b810c303d4ee26d6f74738d"
  },
  {
    "url": "assets/js/18.1e97dd14.js",
    "revision": "e66c35989d42ec71e8cedec8845344c3"
  },
  {
    "url": "assets/js/19.9dd4af25.js",
    "revision": "ccbc95b6fa372c95b6e9c85a9d396161"
  },
  {
    "url": "assets/js/2.29d30abf.js",
    "revision": "92ad0233af9f9ff25940fdbed8d5ca3d"
  },
  {
    "url": "assets/js/20.46f1c6bf.js",
    "revision": "a13ec01ddf3f351f74655d7ee0bd4f77"
  },
  {
    "url": "assets/js/21.1bce8d0c.js",
    "revision": "a522b0d655934d4aaa837c4912fef209"
  },
  {
    "url": "assets/js/22.400978fd.js",
    "revision": "7facfd1d4f84ff06d7a1692c88a8e5b3"
  },
  {
    "url": "assets/js/23.79d77e63.js",
    "revision": "a72da1f87b32a1f081a98efef862bbc9"
  },
  {
    "url": "assets/js/24.dc1b15ad.js",
    "revision": "3c47651899fbcb62b067e08b2d61840a"
  },
  {
    "url": "assets/js/25.2916d836.js",
    "revision": "b4e4d086cadadf0e4b719a3f24751a38"
  },
  {
    "url": "assets/js/26.a468acb3.js",
    "revision": "b607c2daf4b920a5fdbdee60d0284c21"
  },
  {
    "url": "assets/js/27.cc5f72e6.js",
    "revision": "7e69aec475e1e5fea8135e5901bdc13d"
  },
  {
    "url": "assets/js/28.33e82da6.js",
    "revision": "d66eb82f386f3873273a6dd0e7b3b5b1"
  },
  {
    "url": "assets/js/29.e84ddd5b.js",
    "revision": "b11c01b5401028ef29c99cbe5675d2e9"
  },
  {
    "url": "assets/js/3.79131fa7.js",
    "revision": "dca627ac80c52bc8b9c408888208794d"
  },
  {
    "url": "assets/js/30.1f556587.js",
    "revision": "3a5a2da3777e5e5c95578546ae7c2cd7"
  },
  {
    "url": "assets/js/31.1841988a.js",
    "revision": "d1617eb2653dca987f035081fb503617"
  },
  {
    "url": "assets/js/32.c6fceb41.js",
    "revision": "e2bd2bf98790f08af7cbee437ba3263e"
  },
  {
    "url": "assets/js/33.499b5b0a.js",
    "revision": "ec815e3f126f6005eff79013a4e56e38"
  },
  {
    "url": "assets/js/34.313cad83.js",
    "revision": "f4e6cb76216b196fa83944b67af80b82"
  },
  {
    "url": "assets/js/35.468e1b21.js",
    "revision": "b7b8ee2b3f746ff325b5672dd46ec61b"
  },
  {
    "url": "assets/js/36.17be51d1.js",
    "revision": "8bdfee31876de92ab07e6ea86a0ff3bb"
  },
  {
    "url": "assets/js/37.b0e23477.js",
    "revision": "b58626ecd37de6cf9cbc51a3c25dde2e"
  },
  {
    "url": "assets/js/38.30840069.js",
    "revision": "213d3ccdedab2815dd28f816578c1019"
  },
  {
    "url": "assets/js/39.642a9bd7.js",
    "revision": "b6dcf0247e9f263c26dd498e97cfbfd5"
  },
  {
    "url": "assets/js/4.f2ab3866.js",
    "revision": "6f6170af8b13bb90b30530f2f2134ef7"
  },
  {
    "url": "assets/js/40.238f8168.js",
    "revision": "4ae1438e447ccfe136add8c4ef6d80a2"
  },
  {
    "url": "assets/js/41.d1d4b112.js",
    "revision": "238ed4781848c8b595e21a2ed71decc1"
  },
  {
    "url": "assets/js/42.9553e9aa.js",
    "revision": "06e8f8d28a5b0fe4fe4bb9a6c91446d3"
  },
  {
    "url": "assets/js/43.903379bf.js",
    "revision": "d8dc52295778fb04345f7f331df6169f"
  },
  {
    "url": "assets/js/5.583a7648.js",
    "revision": "9899fdb73c7fbbd19dd05ef486a8fd31"
  },
  {
    "url": "assets/js/6.b8b3cb12.js",
    "revision": "3d4ba759260d9355e54435b4e307e9a5"
  },
  {
    "url": "assets/js/7.c15c404e.js",
    "revision": "fbbc001b7a4cc929d0ea99b8080b3694"
  },
  {
    "url": "assets/js/8.75e7d62f.js",
    "revision": "db915779a30410c6f305b53add04cf1f"
  },
  {
    "url": "assets/js/9.3a61e777.js",
    "revision": "a8339f2502450c937a8cc0579da5d9ac"
  },
  {
    "url": "assets/js/app.4b71e132.js",
    "revision": "d1afc7b5ce63a3ee998a28614a2d9454"
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
    "revision": "83446f0816537f98e22da60bbbe0dce2"
  },
  {
    "url": "lesson/assertion.html",
    "revision": "32f91e618b87e90b6d59ffc2404051e0"
  },
  {
    "url": "lesson/back_referencing.html",
    "revision": "f2c5fa9d436b9381630a64f2733a0cac"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "6ad60d3728782ad936e2d852f63c25d5"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "aa5938fe8a26bd0f2b39f4e524a2b7c4"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "e147f09ba9900954d387676d61ac0b0f"
  },
  {
    "url": "lesson/end.html",
    "revision": "438b920c01104c9d2cde02663a1a43d9"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "8f2f1f0808dbdacf7cc0565538d82e32"
  },
  {
    "url": "lesson/greeding.html",
    "revision": "0976e68f2d1e8e6570987057fe669430"
  },
  {
    "url": "lesson/index.html",
    "revision": "4f47e8bb983c7862bd70996dae3f43db"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "fbed7ccf51bf5ac58dd5896f10909981"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "2e5bafb47d249d325ca424761f09f1c7"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "53a8398eb6ad2f16ee883e6f31ef6fff"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "ce21086885a0fcc97cb7da2bb5399e27"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "b6c1791deba01d441e32a7854eed0d6f"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "c199fd101ffe21a4242130dddd474d5a"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "d5e943cd0ec59374bc148e9b832e3a1d"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "d271f1954c45ac14bd817e3c7915c948"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "966447b1c046ea92a0511446b8c1980b"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "fa3c1ae4252828ddf53337911feef4f6"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "af33ad545e9e992b3bc44b2a0d9521b0"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "346c649d4224544c53527612283732cc"
  },
  {
    "url": "problem/complete.html",
    "revision": "43fa6474009114028ea2439a87b811b0"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "decb3b21b312ea88485646ac9255c47f"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "48379b24bae2b5e87d661b5e53d14d82"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "bc6f61011437862e29bed9d3118f7616"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "06b60eaf0cbf08eb116b35e29bb2f240"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "4778525749bed5d961b774518352e839"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "0404b67afcc0f40d5070627607a6dcb7"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "a70103ac5c5a483fca6b084e4df3e613"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "37e0b8db2d577e047289c4263a8bb2d0"
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
