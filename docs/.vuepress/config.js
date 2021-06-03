module.exports = {
  base: "/regexone-cn/",

  title: "RegexOne 中文 - 通过简单的交互式练习来学习正则表达式",
  description: "通过简单的交互式练习来学习正则表达式｜regexone.com 中文翻译",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `/favicon.png` },
    ],
  ],

  themeConfig: {
    repo: "imageslr/regexone-cn",
    editLinkText: "编辑此页面",

    nav: [
      { text: 'RegexOne 官方网站', link: 'https://regexone.com' },
    ],

    sidebar: [{
        title: "课程",
        children: [
          "/lesson/introduction_and_abcs",
          "/lesson/letters_and_digits",
          "/lesson/wildcards_dot",
          "/lesson/matching_characters",
          "/lesson/excluding_characters",
          "/lesson/character_ranges",
          "/lesson/repeating_characters"
        ]
      }]
  },
};
