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
    "revision": "c7915e4b2dd0c310336a8585dbd26bb6"
  },
  {
    "url": "assets/css/0.styles.2017b6c0.css",
    "revision": "1cd18b8621eb8d5b66682f03c47fdce2"
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
    "url": "assets/js/14.235be0ae.js",
    "revision": "e3f4967487a94c6bcafdb5afff8211f2"
  },
  {
    "url": "assets/js/15.48ea28ee.js",
    "revision": "11b8c57caf679a876cca283b29e6f828"
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
    "url": "assets/js/19.e2008c97.js",
    "revision": "ee68a014b7d43aa5a2e08080819dcc27"
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
    "url": "assets/js/21.d4908073.js",
    "revision": "4607caa63c1f6bba058e05451673b382"
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
    "url": "assets/js/27.c7900b50.js",
    "revision": "0609b1731cec3ee1950d075cba8d15a1"
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
    "url": "assets/js/3.fd16fa27.js",
    "revision": "aab6d905326297aefd483ce5c5bbe889"
  },
  {
    "url": "assets/js/30.1fb593d9.js",
    "revision": "1da04045d34e2547b82cec5e097b1d07"
  },
  {
    "url": "assets/js/31.fc88eb9f.js",
    "revision": "7cd38a73a3c8d48ac57ebaf94eba98ba"
  },
  {
    "url": "assets/js/32.323ac417.js",
    "revision": "9f99ec086f2b21ef388600eccb4c2a01"
  },
  {
    "url": "assets/js/33.d02f6316.js",
    "revision": "c79707cb4c36d8da11c104b49a025989"
  },
  {
    "url": "assets/js/34.3e7907b5.js",
    "revision": "340fc9db7a1c00d68fb5fd4441559d7d"
  },
  {
    "url": "assets/js/35.744b7d6c.js",
    "revision": "930e8da5fbce5be80e31fe1242f3c20d"
  },
  {
    "url": "assets/js/36.4081ec72.js",
    "revision": "affd2dac17c67a29fda127d956ac3e73"
  },
  {
    "url": "assets/js/37.fd2f37e5.js",
    "revision": "b39397fa15b0da75dce56ea6c93fa476"
  },
  {
    "url": "assets/js/38.5d6cac14.js",
    "revision": "c7ddaa0789b93af6547006c8651d21a8"
  },
  {
    "url": "assets/js/39.ea72eee5.js",
    "revision": "afb1d0562c009b012caadb6fee21d4b1"
  },
  {
    "url": "assets/js/4.f2ab3866.js",
    "revision": "6f6170af8b13bb90b30530f2f2134ef7"
  },
  {
    "url": "assets/js/40.7c06c5d0.js",
    "revision": "7034bfc82730b39cb895776cbac0ca14"
  },
  {
    "url": "assets/js/41.dfa8d44e.js",
    "revision": "aa1b70402290bed33460e603d199e44b"
  },
  {
    "url": "assets/js/42.cefd2f1e.js",
    "revision": "1590cca6f956ac0ac96757e6023aa3cf"
  },
  {
    "url": "assets/js/43.0c375551.js",
    "revision": "d894ede5801673107326734678d23d45"
  },
  {
    "url": "assets/js/44.a4e0ce4f.js",
    "revision": "16bfd5fe928ff935852d2abf6158f66d"
  },
  {
    "url": "assets/js/45.1d5fba17.js",
    "revision": "380410cf9d2c8cf5719f17560c285918"
  },
  {
    "url": "assets/js/5.8cc84d58.js",
    "revision": "40b0d17d8d459028f26ce6822a2439a1"
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
    "url": "assets/js/8.8b61b61c.js",
    "revision": "771031ac89bd9e3a6e763494cc0e66be"
  },
  {
    "url": "assets/js/9.3a61e777.js",
    "revision": "a8339f2502450c937a8cc0579da5d9ac"
  },
  {
    "url": "assets/js/app.fdaef10b.js",
    "revision": "d74915ae6de7f70111103a8f60ffd1a7"
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
    "revision": "72409cb4f12d1c461d668df56f3424de"
  },
  {
    "url": "lesson/assertion.html",
    "revision": "66d39af0306edd97fbfee9c16d6f751e"
  },
  {
    "url": "lesson/back_referencing.html",
    "revision": "2b5585da6f58bd9a544694f9615e6521"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "93ec294971ac66f6508bbbc852df90ed"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "0dfa7efb30e5366ac8866af5f8581aef"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "dc7845aac2f0de67332b0945bc510d0b"
  },
  {
    "url": "lesson/end.html",
    "revision": "fccb35ddec981dc18a1cde9a79db649e"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "9bcef526387b03ef9556b09c11a9876f"
  },
  {
    "url": "lesson/greeding.html",
    "revision": "c3ca7e8f07e8014168732a7a4f0865b1"
  },
  {
    "url": "lesson/index.html",
    "revision": "980043edefdbdaa243c484f773da7fa3"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "64895e5431dd8602f3349954de41561d"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "3e8a943fcc68de450808e9fbfe119e4b"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "76fbd86cf9ffbdfa4e76a47d6cf1d5ca"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "8f63ef0f5142582934f58095c6c36813"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "a7f6c70611a2910b45c98fa9d70f1221"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "457012b89deecb9778fb2dbd0af8e021"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "c13621b6fbb1f545468dfb11640cccee"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "caf3c4088718f0bdceb54e54f25238a2"
  },
  {
    "url": "lesson/non_capture_group.html",
    "revision": "06d87f2fe7b8c70eb20c87345c21ec06"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "fd07673e8723a1c30682b5cb57780160"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "b3b9ff0576b15b2136e495a46e0c5767"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "8d97ae4b788d8580a688072a1a26acc5"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "9db6870669d1d58670d713cd8f6f2d09"
  },
  {
    "url": "lesson/xend.html",
    "revision": "2162badca9f58a25c5fe907f15037942"
  },
  {
    "url": "problem/complete.html",
    "revision": "180bf60cc022608d24cf1dd91089b2a0"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "9a069b548e4e333fe92396a21a7a8e11"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "b7f92fa90f6079540c7abafe2bfe37a5"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "074eef96977a59875c3a239fff4abfe3"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "1a9086796317c38f55c7a5391dcc5cd0"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "38d51137b6765bf7f29d8df6519ff73e"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "3c8e9b63563d6897f63ca8b4d97f0dce"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "50a8ecd07d8616d2e8e670c8358c98e9"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "7f95708e9cd278e824f7d732a4ffec60"
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
