(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{401:function(t,e,s){"use strict";s.r(e);var n=s(48),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"课程-8-可选字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#课程-8-可选字符"}},[t._v("#")]),t._v(" 课程 8：可选字符")]),t._v(" "),s("p",[t._v("正如您在上一课中看到的，Kleene star 和 plus 允许我们匹配一行中的重复字符。")]),t._v(" "),s("p",[t._v("另一个在匹配和提取文本时非常常见的量词 (quantifier) 是 "),s("strong",[s("code",[t._v("?")])]),t._v(" (问号) 元字符，表示"),s("strong",[t._v("可选性")]),t._v("。这个元字符允许您匹配前面的零个或一个字符或组。例如，模式 "),s("strong",[s("code",[t._v("ab?c")])]),t._v(' 将匹配字符串 "abc" 或 "ac"，因为 b 被认为是可选的。')]),t._v(" "),s("p",[t._v("与点元字符类似，问号是一个特殊字符，您必须使用斜杠 "),s("strong",[s("code",[t._v("\\?")])]),t._v(" 匹配字符串中的普通问号字符。")]),t._v(" "),s("p",[t._v('在下面的字符串中，请注意找到的文件数是如何决定单词 "file" 的复数形式的。尝试编写一个模式，使用元字符 '),s("code",[t._v("?")]),t._v(" 来匹配找到一个或多个文件的行。")]),t._v(" "),s("Exercise",{attrs:{title:"练习 8：匹配可选字符",data:[{type:"match",text:"1 file found?"},{type:"match",text:"2 files found?"},{type:"match",text:"24 files found?"},{type:"skip",text:"No files found."}]}},[s("p",[t._v("我们可以使用元字符 '\\d' 来匹配文件的数量，并使用表达式 "),s("SolutionLink",{attrs:{text:"\\d+ files? found\\?"}}),t._v(" 来匹配找到文件的所有行。")],1),t._v(" "),s("p",[t._v('请注意，第一个问号用于前面的 "s" 字符 (表示复数)，最后的问号必须转义以匹配文本。')])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);