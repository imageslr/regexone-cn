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
    "revision": "b555e845f5372b69ecd27b13c7078149"
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
    "url": "assets/js/28.a33b7be4.js",
    "revision": "9587cd6cb3ce6855186e2e88b5c67f55"
  },
  {
    "url": "assets/js/29.bc563377.js",
    "revision": "9a02ca70192f7353a363ad10cfeeb9c2"
  },
  {
    "url": "assets/js/3.3b616c47.js",
    "revision": "d8d83194a6e340382b7be0ce405bff0f"
  },
  {
    "url": "assets/js/30.33a46812.js",
    "revision": "fd4519bd82a7a5cb52bc800e9e91d8f9"
  },
  {
    "url": "assets/js/31.cd5ad93c.js",
    "revision": "3c19a02ddb420a86b5d6c9475565859e"
  },
  {
    "url": "assets/js/32.39893aa9.js",
    "revision": "8f0b1e992c5ab5a37dc880f5daeb2b80"
  },
  {
    "url": "assets/js/33.a5432227.js",
    "revision": "017e9543961bb6921a60d2f675b17556"
  },
  {
    "url": "assets/js/34.25e9b298.js",
    "revision": "196ed5f685851f80486992a825d89052"
  },
  {
    "url": "assets/js/35.305f921e.js",
    "revision": "cbab20b7b9c0d86dedc75d99946b74a2"
  },
  {
    "url": "assets/js/36.83269e35.js",
    "revision": "3a96df9b768169d93b9e10f2030021f2"
  },
  {
    "url": "assets/js/37.99f73edb.js",
    "revision": "ea3167619b9ebdb99a38d0cc9b6e9fae"
  },
  {
    "url": "assets/js/38.0dc5788c.js",
    "revision": "db379c5333729a7aaf68293d9199de11"
  },
  {
    "url": "assets/js/39.a2c9e567.js",
    "revision": "eefd9d8a5cb2246404b3115bec11ad0a"
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
    "url": "assets/js/app.f09466f7.js",
    "revision": "540e13defa7220b4816df3c8842e75b1"
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
    "revision": "d4d23a7bcdded72f0a6748c730a07226"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "52c732d29f941d0ff35cfd49a181114f"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "ef3d4f93006180f53380de3ca23f06d9"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "e3e68ea8fd0566b373a640b59bde7894"
  },
  {
    "url": "lesson/end.html",
    "revision": "56434461a820a3c50c4719a89d619ccd"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "43feb3024e916fd456d16cf55b32aa8a"
  },
  {
    "url": "lesson/index.html",
    "revision": "9f20726345fa6efae23faa5a7c8c0694"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "7bd1f1369f387b20f86848a119b48756"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "97fd1171f4e5d3e62445b841bca93174"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "56d7ab136f6a81644d96335242341f09"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "a36ee491f448585e7d2fb06fbbc1d8a0"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "b849d06a1e46c34ebbf25492f771cd3e"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "b707951ce5d15f36495bdb07a81add53"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "b5d3afa17411b9581295ede0dfeb8d21"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "c02f50519c7ac0a4088a08eeeea97b82"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "bd7cd66271a118b2448e7b022c702426"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "f17ec68b69b72772e7641531be59ec13"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "e348756c4ae65abbc3c246aa4b6b94c9"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "bbd65eef7e4851482bb5c3a0e451d4ea"
  },
  {
    "url": "problem/complete.html",
    "revision": "466e46669126d77e513d80186150b0e0"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "2a4ad13d192ca44934fca8322a5b286c"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "131f456d314bc2f10d4850d181a36c30"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "45269c1689b47b47f12231fb8c6e2a67"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "6b6f031caa52ea80ca4464ae3e8c2bf7"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "e2ed7887262fd8b1ba888f909912249a"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "658d88184f04ac702b7e0ac78a4c3ac0"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "83d94c8f9e8ff62994ad5ef13e06ae9b"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "93c4279e755b4bfc25616385a8d19c0e"
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
