(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{384:function(t,e,v){"use strict";v.r(e);var _=v(48),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"课程-a2-零宽断言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#课程-a2-零宽断言"}},[t._v("#")]),t._v(" 课程 A2：零宽断言")]),t._v(" "),v("p",[t._v("零宽断言用于指定要匹配的内容的"),v("strong",[t._v("前缀或后缀")]),t._v("，但并"),v("strong",[t._v("不包含")]),t._v("这些内容。“零宽”的含义是没有宽度、只匹配位置、不匹配内容，“断言”用来声明一个应该为真的事实，只有断言为真时正则表达式才会匹配。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("语法")]),t._v(" "),v("th",[t._v("作用")]),t._v(" "),v("th",[t._v("名称")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("(?=exp)")])]),t._v(" "),v("td",[t._v("指定后缀")]),t._v(" "),v("td",[t._v("零宽度正预测先行断言 "),v("br"),t._v(" zero-width positive lookahead assertion")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("(?<=exp)")])]),t._v(" "),v("td",[t._v("指定前缀")]),t._v(" "),v("td",[t._v("零宽度正回顾后发断言"),v("br"),t._v(" zero-width positive lookbehind assertion")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("(?!exp)")])]),t._v(" "),v("td",[t._v("指定后缀"),v("em",[t._v("不能是")])]),t._v(" "),v("td",[t._v("零宽度负预测先行断言"),v("br"),t._v("zero-width negative lookahead assertion")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("(?<!exp)")])]),t._v(" "),v("td",[t._v("指定后缀"),v("em",[t._v("不能是")])]),t._v(" "),v("td",[t._v("零宽度负回顾后发断言"),v("br"),t._v("zero-width negative lookbehind assertion")])])])]),t._v(" "),v("p",[t._v("我们不需要记住每个语法的具体名称，只要知道怎么用就可以。例如，模式 "),v("code",[t._v("\\w+(?=ing)")]),t._v(" 会匹配所有以 "),v("code",[t._v("ing")]),t._v(" 结尾的单词。语法可以这样理解：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("=")]),t._v(" 表示“是”、"),v("code",[t._v("!")]),t._v(" 表示“不是”")]),t._v(" "),v("li",[v("code",[t._v("<")]),t._v(" 表示表达式的左面，也就是指定前缀")]),t._v(" "),v("li",[t._v("左右两侧的括号是必须的")])]),t._v(" "),v("p",[t._v("请尝试完成下面的练习。")]),t._v(" "),v("Exercise",{attrs:{title:"练习 A2-1：匹配特定后缀的单词",data:[{type:"skip",text:"sad"},{type:"match",text:"slightly"},{type:"match",text:"hardly"},{type:"match",text:"perfectly"},{type:"match",text:"suddenly"}],noNext:!0}},[v("p",[t._v("最简单的方法是使用模式 "),v("SolutionLink",{attrs:{text:"\\w+ly"}}),t._v("来匹配所有以 "),v("code",[t._v("ly")]),t._v(" 结尾的单词。我们也可以使用 "),v("SolutionLink",{attrs:{text:"\\w+(?=ly)"}}),t._v("，这个模式匹配的内容并不包含 "),v("code",[t._v("ly")]),t._v("。请注意对比这两个模式的匹配结果的区别。")],1)]),t._v(" "),v("Exercise",{attrs:{title:"练习 A2-2：匹配特定前缀的单词",data:[{type:"skip",text:"happy"},{type:"match",text:"unfinished"},{type:"match",text:"undoubted"},{type:"match",text:"unused"},{type:"match",text:"unhappy"}],noNext:!0}},[v("p",[t._v("可以使用模式 "),v("SolutionLink",{attrs:{text:"un\\w+"}}),t._v(" 或 "),v("SolutionLink",{attrs:{text:"(?<=un)\\w+"}}),t._v(" 来匹配所有以 "),v("code",[t._v("un")]),t._v(" 开头的单词。请注意对比这两个模式的匹配结果的区别。")],1)]),t._v(" "),v("Exercise",{attrs:{title:'练习 A2-3：只匹配前两行的 "re"',data:[{type:"match",text:"represents"},{type:"match",text:"reclaim"},{type:"skip",text:"regex"},{type:"skip",text:"regular"}],noNext:!0}},[v("p",[t._v("可以使用模式 "),v("SolutionLink",{attrs:{text:"re(?!g)"}}),t._v("，该模式限定了 "),v("code",[t._v("re")]),t._v(" 右边不能是字符 "),v("code",[t._v("g")]),t._v("。")],1)]),t._v(" "),v("Exercise",{attrs:{title:'练习 A2-4：只匹配第一行的 "happy"',data:[{type:"match",text:"happy"},{type:"skip",text:"unhappy"}]}},[v("p",[t._v("可以使用模式 "),v("SolutionLink",{attrs:{text:"(?<!un)happy"}}),t._v("，该模式限定了 "),v("code",[t._v("happy")]),t._v(" 左边不能是前缀 "),v("code",[t._v("un")]),t._v("。")],1)])],1)}),[],!1,null,null,null);e.default=a.exports}}]);