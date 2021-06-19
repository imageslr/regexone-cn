const { removePlugin, PLUGINS } = require('@vuepress/markdown')

module.exports = {
  base: "/regexone-cn/",

  title: "RegexOne 中文 - 通过简单的交互式练习来学习正则表达式",
  description: "通过简单的交互式练习来学习正则表达式｜regexone.com 中文翻译",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['link', { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/images/icons/mstile-150x150.png' }],
    ['meta', { name: 'application-name', content: 'RegexOne' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'RegexOne' }],
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `/favicon.png` },
    ],
    ...googleAnalytics(),
  ],

  themeConfig: {
    repo: "imageslr/regexone-cn",
    editLinkText: "编辑此页面",

    nav: [
      { text: "课程", link: "/lesson/introduction_and_abcs" },
      { text: "问题", link: "/problem/matching_decimal_numbers" },
      { text: "RegexOne 官方网站", link: "https://regexone.com" },
    ],

    sidebar: [
      {
        title: "课程",
        // collapsable: false,
        children: [
          "/lesson/introduction_and_abcs",
          "/lesson/letters_and_digits",
          "/lesson/wildcards_dot",
          "/lesson/matching_characters",
          "/lesson/excluding_characters",
          "/lesson/character_ranges",
          "/lesson/repeating_characters",
          "/lesson/kleene_operators",
          "/lesson/optional_characters",
          "/lesson/whitespaces",
          "/lesson/line_beginning_end",
          "/lesson/capturing_groups",
          "/lesson/nested_groups",
          "/lesson/more_groups",
          "/lesson/conditionals",
          "/lesson/misc_meta_characters",
          "/lesson/end"
        ],
      },
      {
        title: "问题",
        // collapsable: false,
        children: [
          "/problem/matching_decimal_numbers",
          "/problem/matching_phone_numbers",
          "/problem/matching_emails",
          "/problem/matching_html",
          "/problem/matching_filenames",
          "/problem/trimming_whitespace",
          "/problem/extracting_log_data",
          "/problem/extracting_url_data",
          "/problem/complete",
        ],
      },
      {
        title: "进阶课程",
        children: [
          "/lesson/back_referencing",
          "/lesson/assertion",
          "/lesson/non_capture_group",
          "/lesson/greeding",
          "/lesson/xend"
        ]
      }
    ],
  },

  chainMarkdown (config) {
    removePlugin(config, PLUGINS.EMOJI)
  },

  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    }
  }
};

function googleAnalytics() {
  return process.env.NODE_ENV === "development"
    ? []
    : [
        [
          "script",
          {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-CK9QTEBZD3",
          },
        ],
        [
          "script",
          {},
          `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CK9QTEBZD3');`,
        ],
      ];
}
