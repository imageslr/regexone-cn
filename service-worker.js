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
    "revision": "2bbb64ab4a30f058e7ded6d343ea3872"
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
    "url": "assets/js/15.e027d1bf.js",
    "revision": "90dcd6cbdad14e52e5f48c8d5acc80cd"
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
    "url": "assets/js/27.07013a4f.js",
    "revision": "1c5956b686f8fbec914b351f368836ff"
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
    "url": "assets/js/app.543920b8.js",
    "revision": "d68aa2130d451958f63d23842d30f978"
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
    "revision": "0fe356a9cf344973d73d96c6d14aee26"
  },
  {
    "url": "lesson/assertion.html",
    "revision": "f533b2fa7a91dd5654adb33468d4819e"
  },
  {
    "url": "lesson/back_referencing.html",
    "revision": "7550028097ec2c4f1002188375a3f1b2"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "7821a9abc6bd14c86410af653c6818f7"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "fcbe3da86a94b4d12d2af5d5d2616c6d"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "235be1ca6bed8fd2e630a2a347cc7bf7"
  },
  {
    "url": "lesson/end.html",
    "revision": "9d3c71cb99cd3a92e70f0ce364ec9256"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "1fcc32da290c82900324e03e968497fa"
  },
  {
    "url": "lesson/greeding.html",
    "revision": "0cc65e8f6b766df34e8d3a897b471f72"
  },
  {
    "url": "lesson/index.html",
    "revision": "1199c27a416150242aa772294be462a1"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "2d026ded3a03c3ff07734254bb82062f"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "98c1e7a8bcaf4d3c8c06ed034009bc4c"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "7dd98baf41aaee9e4369899f65759401"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "86ca234d2bea49926822783bc5ee8cd8"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "711bc158bd7438a1749fe9eae8ffbbb0"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "5266192537d346870b803957d4670c6e"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "23f10cee9fe3ac0058f6852fd190ec40"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "2553814dc758df491c5e32ebdd49f46e"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "482f8f7d14833b0397e4c3c85ae26955"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "a325640a5131b7bd85de29d8f03981d3"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "1b85bc69e5fdca222fba261ae75f56a9"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "9998d8c812caeafdc0eaf4db758d7601"
  },
  {
    "url": "problem/complete.html",
    "revision": "a5dd8ca51c97c236b8918dce6ae85eea"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "8dd0e876f4b117b3d6a44b8e62579560"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "6a397f129aaa96d0b08ac920a8e65a51"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "2dcedb2d151ce6ee9c95f5b461b32679"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "ccf56854643d4debe61a6551a2890059"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "06e2a76a01b1a0c9bc6370b9c0d039d6"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "d3d572831842bd2e7014eea21db5d752"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "5625494e5b1af7e7de3d24f7740892f3"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "4e18bf5abea9eb2c51dbd8a6ec79f224"
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
