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
    "revision": "aae6f3ce86b0c71de236af520d323cdf"
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
    "url": "assets/js/14.da68c7ae.js",
    "revision": "a733e62b1e00e599a3ae7b6cec2aa9e7"
  },
  {
    "url": "assets/js/15.dda02c0f.js",
    "revision": "3a2dccbb861750ba4fff319470f8e6c2"
  },
  {
    "url": "assets/js/16.5764682a.js",
    "revision": "40b1a2f40fa552042665c7d54de4e4da"
  },
  {
    "url": "assets/js/17.7897d856.js",
    "revision": "86f67cdc0b60cfb84637aea668e1bd7b"
  },
  {
    "url": "assets/js/18.af42bc1d.js",
    "revision": "fa983a4e44b612b9a9c755250073d75d"
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
    "url": "assets/js/24.698d727a.js",
    "revision": "6d18b50baaca2322128a612d99dc8511"
  },
  {
    "url": "assets/js/25.dd812e11.js",
    "revision": "9a261eae9b96a962156ed0a93f28aed4"
  },
  {
    "url": "assets/js/26.ef904699.js",
    "revision": "600a92e27abb43446d2b89444057f0d9"
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
    "url": "assets/js/app.4162a58f.js",
    "revision": "387696a41103317d0b4b4b7d35d74bec"
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
    "revision": "d89e8969602ffae8bcf9f6ddf341920a"
  },
  {
    "url": "lesson/assertion.html",
    "revision": "8f6adc6d4e02b5c6723c04c1be2b06bd"
  },
  {
    "url": "lesson/back_referencing.html",
    "revision": "cddebaffa851bb1d46c2d7da01d24538"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "ce11e97098bfbe81afe5c94ee2ca8fcf"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "4b6475ef7b8a14b41849bee63e91bc33"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "5421d3b269e9a1ac419615f9c20ead78"
  },
  {
    "url": "lesson/end.html",
    "revision": "9f349861ad8370f64265484f77016355"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "df2c1ea0f5a1485e2fdff07e21eb8d88"
  },
  {
    "url": "lesson/greeding.html",
    "revision": "122177e32645254379f422432f23ffd2"
  },
  {
    "url": "lesson/index.html",
    "revision": "acb9e49d5c497176119ffb11afbd1ccc"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "7c40117b7363f068497bf0d1198b5645"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "6db26e55455fa8f50d6a45284302f6fa"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "5852a191e3d6d28aa8e15a0370e382cc"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "958d453bda10290853f1e866476ced50"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "04c64c1285aeec2d53cb63c1cbdd82b3"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "b77d831ed6f8dd0767d363fdad01773d"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "f7444f40cd4a66d6ec27b10cf9f90d2b"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "4758df84f68644d22bc37a313f0a61a0"
  },
  {
    "url": "lesson/non_capture_group.html",
    "revision": "5791432ca2ef4b4995820c33f7bd91e2"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "c11d390177decb3c93bf1e2d5f10b81e"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "4fcd5bea1754ea6c3e704af861c62878"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "04d8a07cf4452ed72d8f5959e6c298cf"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "cd584a33ea65aafe2d52caca1c81975b"
  },
  {
    "url": "lesson/xend.html",
    "revision": "449649fb1d0b21469b264bd6d6ee2254"
  },
  {
    "url": "problem/complete.html",
    "revision": "119fd61db3c49be223817c3a00fc82d5"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "24c8abb989d2ef263d78c3c65d25fc19"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "6ffd423ac9753d8d7b267dd9d1ee8663"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "c7d8daa3a7660a34ff97cf8539e426a5"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "f8c66526d261317aabca22dcbb0e23b7"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "1d700b5ef3c21446d93eaa5ce61d52ea"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "8ba23428e9bbefb8485657fd57df46b3"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "d1706596fa7dd444ef78e10626c5dfdb"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "d8dd0e73ef273a3b510f35e345f44fe8"
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
