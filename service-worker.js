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
    "revision": "bf19fba69ce71816e5ee7f008dfb35b2"
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
    "url": "assets/js/15.eb5aff9e.js",
    "revision": "55e6e10ff5e11ae771bdb0a6f3d5f5ec"
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
    "url": "assets/js/21.5eb331bf.js",
    "revision": "eb32e9859ea4cc926c7b195def874a02"
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
    "url": "assets/js/45.c229fe85.js",
    "revision": "a0b3eb8b1dfc243f0e90ce0c6fb87cc8"
  },
  {
    "url": "assets/js/46.10a00bf1.js",
    "revision": "a7e0fa10effbfcb8453b3d3bb0c6f684"
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
    "url": "assets/js/8.362b479f.js",
    "revision": "7e8f8fd51d5134bd0fc128d6ba61684b"
  },
  {
    "url": "assets/js/9.3a61e777.js",
    "revision": "a8339f2502450c937a8cc0579da5d9ac"
  },
  {
    "url": "assets/js/app.caa502a5.js",
    "revision": "a1756a72bd25dfe50aef5ae91fc3005f"
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
    "revision": "f9811c31fbe92ab0b65e8193117a2df7"
  },
  {
    "url": "lesson/assertion.html",
    "revision": "54a6a28f6f04270ae5a23f47e7356cda"
  },
  {
    "url": "lesson/back_referencing.html",
    "revision": "2baa1a9c50256a1ccba0011d6ff5eca3"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "c87135954cb32533465cc545619077be"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "d0cd7ed2e80f441a0d60413bcbba293f"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "1281b66bef91445e59e48d8408bf8089"
  },
  {
    "url": "lesson/end.html",
    "revision": "2c2abb38b2fa6dbfe16431781ff0e4cb"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "d8f0a2cb7915c4558a3d803027d435e2"
  },
  {
    "url": "lesson/greeding.html",
    "revision": "96e313a49783fc328baa0b8d44cf2944"
  },
  {
    "url": "lesson/index.html",
    "revision": "d01d557157b2bdf28ca37aa621b964af"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "6fdf1585490645d877f57234a44a1869"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "2fbac2ea1e5f612595f1b50f942c62b6"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "c58df437aa2dbca48a19946e4b8415f2"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "d5ec6bf3a82602bfcf51b1cb99178bc1"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "43b773b77b34c5e0538010ab3fdcd4f7"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "4f0c42dc69c14c6d617ff738606ce5e8"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "30f5ad32f77314ffd1d0709750dad10b"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "b30e924710a238c05f7da962a99097c2"
  },
  {
    "url": "lesson/non_capture_group.html",
    "revision": "75ba40ae6e6d548d116e56d7e56ccc65"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "811deba5192a0e59dbff3f6fe1f02fc2"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "e19e00400369bb88d9a1a5f8b67cc623"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "154f4c4be192cefbf169f177a1c1899e"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "fa2ebacb31f4d3a99a0778196e7e062e"
  },
  {
    "url": "lesson/xend.html",
    "revision": "7b92e9e6f855c8b5ac9584870aa2f3b9"
  },
  {
    "url": "problem/complete.html",
    "revision": "b7ae2303785b131fac7c825cb11675ba"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "ef34557356b0c193fb7e43d6e5d8d6fd"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "1e160916814d69fec871cfde255749e9"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "0a8b421f6258dc8ec6319c4bf36c0a08"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "ef14d583d22ed4a84a3a9cd213de646a"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "6017ca766f8beae35d225048f4541148"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "8503cccabe327f669d7dddba3cb758eb"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "2ab84404b08022d143086dbbe3ae6721"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "706fa80b0d498e1588fdf2a9e62cbe1c"
  },
  {
    "url": "pwaicon.png",
    "revision": "91bc81deed905f9d58e183036f2cbfc8"
  },
  {
    "url": "resources.html",
    "revision": "af74b3828702df8e8dc9430f2250f03a"
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
