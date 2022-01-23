(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{400:function(t,s,e){"use strict";e.r(s);var a=e(48),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"课程-a3-非捕获组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#课程-a3-非捕获组"}},[t._v("#")]),t._v(" 课程 A3：非捕获组")]),t._v(" "),e("p",[t._v("在"),e("RouterLink",{attrs:{to:"/lesson/capturing_groups.html"}},[t._v("课程 11：捕获组")]),t._v("与"),e("RouterLink",{attrs:{to:"/lesson/back_referencing.html"}},[t._v("课程 A1：反向引用")]),t._v("中，我们已经学习到：一对括号内的任何子模式都将被捕获为一个组，每个组按照从左到右的左括号出现的顺序，编号从 "),e("code",[t._v("1")]),t._v(" 开始递增。")],1),t._v(" "),e("p",[t._v("但是某些情况下，我们并不需要使用捕获组的内容，这个时候可以使用"),e("strong",[t._v("非捕获组")]),t._v(" (non-capturing groups)。非捕获组的语法是在捕获组的基础上，在左括号的右侧加上 "),e("code",[t._v("?:")]),t._v("，即 "),e("code",[t._v("(?:exp)")]),t._v("。使用非捕获组可以节省内存、提升效率。")]),t._v(" "),e("p",[t._v("在下面这段 JavaScript 代码中，我们使用了非捕获组，反向引用 "),e("code",[t._v("$1")]),t._v(" / "),e("code",[t._v("$2")]),t._v(" 并没有与之对应的捕获组，在这里相当于"),e("strong",[t._v("纯字符串")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123-456"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(?:\\d+)-(?:\\d+)")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// searchValue")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$2-$1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replaceValue, $1、$2 等价于反向引用 \\1、\\2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Output => "$2-$1"')]),t._v("\n")])])]),e("p",[t._v("请完成下面的练习，要求使用"),e("RouterLink",{attrs:{to:"/lesson/conditionals.html"}},[t._v("条件语法")]),t._v("匹配前两行的动物，但不能生成捕获组。")],1),t._v(" "),e("Exercise",{attrs:{title:"练习 A3：非捕获组",data:[{type:"match",text:"I love cats",captureData:{results:["cats"],nonCapture:!0}},{type:"match",text:"I love dogs",captureData:{results:["dogs"],nonCapture:!0}},{type:"skip",text:"I love logs"},{type:"skip",text:"I love cogs"}]}},[e("p",[t._v("如果使用模式 "),e("SolutionLink",{attrs:{text:"I love (cats|dogs)"}}),t._v('，会同时捕获到 "cats"、"dogs"。改为 '),e("SolutionLink",{attrs:{text:"I love (?:cats|dogs)"}}),t._v(" 就可以避免生成捕获组。")],1)])],1)}),[],!1,null,null,null);s.default=n.exports}}]);