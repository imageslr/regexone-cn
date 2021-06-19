(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{402:function(t,v,s){"use strict";s.r(v);var _=s(48),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"课程-6-匹配重复字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#课程-6-匹配重复字符"}},[t._v("#")]),t._v(" 课程 6：匹配重复字符")]),t._v(" "),s("p",[s("em",[t._v("注意：有的正则表达式实现不支持下文重复语法的某些部分。")])]),t._v(" "),s("p",[t._v("到目前为止，我们已经学习了如何指定要匹配的字符的范围，但是如何指定要匹配的字符的"),s("strong",[t._v("重复次数")]),t._v("呢？一种方法是明确写出我们想要匹配多少个字符，例如 "),s("strong",[s("code",[t._v("\\d\\d\\d")])]),t._v("，它正好匹配三个数字。")]),t._v(" "),s("p",[t._v("更方便的方法是使用"),s("strong",[t._v("花括号")]),t._v("表示法指定每个字符的重复次数。例如，"),s("strong",[s("code",[t._v("a{3}")])]),t._v(" 将匹配字符 a 正好三次。某些正则表达式引擎甚至允许您指定重复次数的范围，例如，"),s("strong",[s("code",[t._v("a{1,3}")])]),t._v(" 将匹配字符 a 至多 3 次，至少 1 次。")]),t._v(" "),s("p",[t._v("这个量词 (quantifier) 可以与任意字符或特殊的元字符一起使用，例如 "),s("strong",[s("code",[t._v("w{3}")])]),t._v(" (三个 w)、"),s("strong",[s("code",[t._v("[wxy]{5}")])]),t._v(" (五个字符，每个字符可以是 w、x 或 y) 和 "),s("strong",[s("code",[t._v(".{2,6}")])]),t._v(" (两到六个"),s("strong",[t._v("任意")]),t._v("字符)。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("译者注")]),t._v(" "),s("p",[t._v("花括号中的最大重复次数也可以省略："),s("strong",[s("code",[t._v("{n,}")])]),t._v(" 表示重复至少 n 次，至多无限制。")])]),t._v(" "),s("p",[t._v('在下面的几行中，最后一个只有一个 z 的字符串并不是俚语 "wazzup" 的正确拼写。尝试使用上面的花括号符号来编写一个只匹配前两个拼写的模式。')]),t._v(" "),s("Exercise",{attrs:{title:"练习 6：匹配重复字符",data:[{type:"match",text:"wazzzzzup"},{type:"match",text:"wazzzup"},{type:"skip",text:"wazup"}]}},[t._v("在我们必须匹配的前两行中有多个 'z'，因此表达式 "),s("SolutionLink",{attrs:{text:"waz{3,5}up"}}),t._v(" 将匹配所有包含这些个 'z' 的字符串。")],1),t._v(" "),s("p",[t._v("进阶课程："),s("RouterLink",{attrs:{to:"/lesson/greeding.html"}},[t._v("A4：贪婪 vs 懒惰")])],1)],1)}),[],!1,null,null,null);v.default=e.exports}}]);