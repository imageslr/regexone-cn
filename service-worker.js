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
    "revision": "01b43dc51bc9092fb4a85d3b88e774d6"
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
    "url": "assets/js/19.d7381931.js",
    "revision": "6c6bf480f728888204d724dcfd074b82"
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
    "url": "assets/js/25.c8229127.js",
    "revision": "08758ae9a79030b214ae0f703860e3db"
  },
  {
    "url": "assets/js/26.ef904699.js",
    "revision": "600a92e27abb43446d2b89444057f0d9"
  },
  {
    "url": "assets/js/27.afd2ff4b.js",
    "revision": "579c19f209c0d76713115d709f6a055c"
  },
  {
    "url": "assets/js/28.ec0e4f8d.js",
    "revision": "40161d1c336833e0d028176d9e55e08b"
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
    "url": "assets/js/30.1fb593d9.js",
    "revision": "1da04045d34e2547b82cec5e097b1d07"
  },
  {
    "url": "assets/js/31.ba1428d8.js",
    "revision": "20e83d453f3f6a3d083e4cb490f9906a"
  },
  {
    "url": "assets/js/32.cc03b1ca.js",
    "revision": "9b116f7c7e03682673241d0232b12ff9"
  },
  {
    "url": "assets/js/33.28083617.js",
    "revision": "df6262dbc4e1cb43e8211769cebd4afb"
  },
  {
    "url": "assets/js/34.f6e41c4f.js",
    "revision": "a6f8a91dbeb4143b8767991ad4eb58cd"
  },
  {
    "url": "assets/js/35.f05ab456.js",
    "revision": "542b29d81f515bfcd8fcb40b0fd6a996"
  },
  {
    "url": "assets/js/36.33576e14.js",
    "revision": "aed45c03052c5ff996442b2393033a55"
  },
  {
    "url": "assets/js/37.6f82bbfd.js",
    "revision": "2993bbabbabc7d50706267b87a7b5635"
  },
  {
    "url": "assets/js/38.21ed757d.js",
    "revision": "f0658d9dd1c4633b43d18e56113af8dd"
  },
  {
    "url": "assets/js/39.9786bae3.js",
    "revision": "9ca7990ec3faf72f3bf2ad76b57ac04e"
  },
  {
    "url": "assets/js/4.f2ab3866.js",
    "revision": "6f6170af8b13bb90b30530f2f2134ef7"
  },
  {
    "url": "assets/js/40.c0c89d9c.js",
    "revision": "5d7440f66baa5892de4195bc3fe2fa95"
  },
  {
    "url": "assets/js/41.aaa43958.js",
    "revision": "a7cd9fb1d51702e68869ad1b35bcede3"
  },
  {
    "url": "assets/js/42.5c3ef77e.js",
    "revision": "e2fd5f3b1952a564d0e5069a7ae0a2b1"
  },
  {
    "url": "assets/js/43.4ca2ff4e.js",
    "revision": "0d4e21aee680c69fee1c0f3e3a780ebc"
  },
  {
    "url": "assets/js/44.24381742.js",
    "revision": "fa6e7f391292930e07e90176362d0e65"
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
    "url": "assets/js/8.b5a28832.js",
    "revision": "dffc3de406a73f255d1a4c02bfdc1b12"
  },
  {
    "url": "assets/js/9.3a61e777.js",
    "revision": "a8339f2502450c937a8cc0579da5d9ac"
  },
  {
    "url": "assets/js/app.7d344ede.js",
    "revision": "1cbe8306d4954ec487d8a94e46a8cecc"
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
    "revision": "e222ab8c19bddd3ecdab049cc04b5f39"
  },
  {
    "url": "lesson/assertion.html",
    "revision": "a1f9784a075776c0d445d36044ae44fc"
  },
  {
    "url": "lesson/back_referencing.html",
    "revision": "ec7987563b23ee49f51ab94ad96b685d"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "d20e512e75b6eb47f40f2c48bbf07a3c"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "0eaa181d683507de6c8bacccd041d114"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "4b2e97a6e358e61afb165857f04f4d18"
  },
  {
    "url": "lesson/end.html",
    "revision": "6cb1a52ad68173a1e4bb1dedeae1f7a0"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "13e2ea2bf0102b04b6a5e13b0ba2a2ee"
  },
  {
    "url": "lesson/greeding.html",
    "revision": "3724cabd6431abde35cdc0199e38c4d1"
  },
  {
    "url": "lesson/index.html",
    "revision": "edd55e084bf8cf7ae43e96278d358a2f"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "ed3e57ff7d2ba7bc03ecc5550c6b68c9"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "73d14c9524103c027f5b5dc39bce5056"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "66139765b0267c3a31c4e02fd1568cca"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "64b3cbcf53cebd0e724e6f24b0a698de"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "7c4e6061fd1d21a9ef5f9e2652499189"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "910bc41df483995a2e2cb075c10b91a5"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "920730b93171d2ce3752996ce0a4349d"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "5627a75ca9a7e074a5815e1e059402f8"
  },
  {
    "url": "lesson/non_capture_group.html",
    "revision": "ac376e0e0c2ace22861ca511a7368782"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "53efc5bcdb2a1b873f2a92e554316880"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "7477775cafa5824dcfa88a8461b3b88f"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "c9b1182cc6b4ab65603eea812cb8980e"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "6711ffee4cc06f81fd4ee6ca3c160c41"
  },
  {
    "url": "problem/complete.html",
    "revision": "f3aba456e6b8a6668bc00dc975ea7aee"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "e7f0fca7ade448edd68da7c0862c005c"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "3d77ece34f8c11b4135c89d8f56005e5"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "7af6bac70f094d58ef2be1356eedbf96"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "b290e4edb62e426fe3528c4c05bfd558"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "17172cfdd4f5a5b3bc84635a86e7583f"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "a74b97526c146777aa04ddc823e4f602"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "6991db742d7ca56c6aebf9a844b4d049"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "481455ce144b7ba435ba7209d2ceeec4"
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
