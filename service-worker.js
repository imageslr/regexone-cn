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
    "revision": "486b89229dfe72a33a9df76b26ae5bad"
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
    "url": "assets/js/14.a878d90e.js",
    "revision": "5e6b026e48c502493df2aa23333ee0c8"
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
    "url": "assets/js/3.79131fa7.js",
    "revision": "dca627ac80c52bc8b9c408888208794d"
  },
  {
    "url": "assets/js/30.fa23b3f2.js",
    "revision": "41ec9415166d3ec615e9df8c51d56c4c"
  },
  {
    "url": "assets/js/31.fc88eb9f.js",
    "revision": "7cd38a73a3c8d48ac57ebaf94eba98ba"
  },
  {
    "url": "assets/js/32.1564dba8.js",
    "revision": "3a436c4eccb79ac208ccc46139be2887"
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
    "url": "assets/js/35.746a9043.js",
    "revision": "95b611376a7a28c545cbc932e85f23a1"
  },
  {
    "url": "assets/js/36.e05481e8.js",
    "revision": "1bf6734d8ed975d42ca8f2ed42b70793"
  },
  {
    "url": "assets/js/37.d9dc52f4.js",
    "revision": "c35e218d92434355bda2f28cda24c257"
  },
  {
    "url": "assets/js/38.a9a4c037.js",
    "revision": "215d0e880a4a0df936929d0bab64c909"
  },
  {
    "url": "assets/js/39.4b0349de.js",
    "revision": "0a2d1c4b5d9d6dbc39b95888e8ae1028"
  },
  {
    "url": "assets/js/4.f2ab3866.js",
    "revision": "6f6170af8b13bb90b30530f2f2134ef7"
  },
  {
    "url": "assets/js/40.a0c8e937.js",
    "revision": "3f3673851c65c641d0dc2eb2cbd9ea9a"
  },
  {
    "url": "assets/js/41.0ce49573.js",
    "revision": "f253ca135c017107a0ef53be1b753e81"
  },
  {
    "url": "assets/js/42.549124f3.js",
    "revision": "0586296b39983865517f1fad6f425704"
  },
  {
    "url": "assets/js/43.d8e70f3f.js",
    "revision": "52d074aefd72b383b38821ca3073ff91"
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
    "url": "assets/js/app.a914325c.js",
    "revision": "231447c4ca14c2631fc4cb2c7537f247"
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
    "revision": "b4c076a31d6dcc573a3c2a2e00793a92"
  },
  {
    "url": "lesson/assertion.html",
    "revision": "b4264dc71e47202888b9e3d3001276e4"
  },
  {
    "url": "lesson/back_referencing.html",
    "revision": "04698c5716c24afdd4682a2c275ed01a"
  },
  {
    "url": "lesson/capturing_groups.html",
    "revision": "03260cd11cabdd1141b0178681bcbac6"
  },
  {
    "url": "lesson/character_ranges.html",
    "revision": "f655b23944cc6eaeba323c4ed976aa5c"
  },
  {
    "url": "lesson/conditionals.html",
    "revision": "3c4946d92cc0506b4c452f9dc6ca3c05"
  },
  {
    "url": "lesson/end.html",
    "revision": "dfa85e84f4e8c4ec174785ae319de1c0"
  },
  {
    "url": "lesson/excluding_characters.html",
    "revision": "618d53302d6deaffa118e5242ec8aa14"
  },
  {
    "url": "lesson/greeding.html",
    "revision": "8fdb988a06c78969732544eef4fbb92c"
  },
  {
    "url": "lesson/index.html",
    "revision": "c7610bc00dc9fa26441123f5d05af162"
  },
  {
    "url": "lesson/introduction_and_abcs.html",
    "revision": "66172074e11c6e84706840bee6444bca"
  },
  {
    "url": "lesson/kleene_operators.html",
    "revision": "30553fe879f7fc8f53c46dd51dd11977"
  },
  {
    "url": "lesson/letters_and_digits.html",
    "revision": "24180204a23c502d01436bd3a417cdaf"
  },
  {
    "url": "lesson/line_beginning_end.html",
    "revision": "51edac6ae085c0afaee22d276feae744"
  },
  {
    "url": "lesson/matching_characters.html",
    "revision": "ddff4d19ddd36e92117e43a59915dacc"
  },
  {
    "url": "lesson/misc_meta_characters.html",
    "revision": "00a2e783457e1d117bebd0e1c258a0c7"
  },
  {
    "url": "lesson/more_groups.html",
    "revision": "5417aa8b6c55a3f61c5019ecbda8ce27"
  },
  {
    "url": "lesson/nested_groups.html",
    "revision": "46afb0aaebd91fc2ad8836e9d93d1a61"
  },
  {
    "url": "lesson/non_capture_group.html",
    "revision": "379db89fc3006ad85f955851748d2edb"
  },
  {
    "url": "lesson/optional_characters.html",
    "revision": "dbb3b5f33045e82d25f95821cc12bc9d"
  },
  {
    "url": "lesson/repeating_characters.html",
    "revision": "0eff7e1db3063ff25ff90f3cb052852b"
  },
  {
    "url": "lesson/whitespaces.html",
    "revision": "5f01f2938c2ede4f5d6949033c6de787"
  },
  {
    "url": "lesson/wildcards_dot.html",
    "revision": "4dd8f237a0abf4b88b574494dc48bf22"
  },
  {
    "url": "problem/complete.html",
    "revision": "17340a67c31f46873e5dd2b9d3012224"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "da5d15e53d56e2b88f00bbc6248e02dc"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "d15bd4826e057cdc6d3666e9b3840099"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "fa277baa068b348c670ac3986e732f6a"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "7451dd5d6fe9d452188d560ccd013890"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "0ba4c551c1f74242a7c4b818bf543777"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "8f8397e3617802223bda83af27d168dc"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "c67ef5789834cba39f810a9800cf16e7"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "205e283452d272470f24b302e49ef564"
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
