(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{400:function(t,e,p){"use strict";p.r(e);var a=p(45),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,p=t._self._c||e;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h1",{attrs:{id:"问题-5-匹配特定文件名"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#问题-5-匹配特定文件名"}},[t._v("#")]),t._v(" 问题 5：匹配特定文件名")]),t._v(" "),p("p",[t._v("如果您经常使用 Linux 或命令行，往往会需要处理文件列表。大多数文件都由一个文件名和一个扩展名组成，但在 Linux 中，隐藏的文件没有文件名也是很常见的。")]),t._v(" "),p("p",[t._v("在下面这个简单的示例中，请提取出图像文件的文件名和扩展名 （不包括当前正在编辑的图像的临时文件 "),p("code",[t._v(".tmp")]),t._v("）。图像文件定义为 "),p("strong",[t._v(".jpg")]),t._v("、"),p("strong",[t._v(".png")]),t._v(" 和 "),p("strong",[t._v(".gif")]),t._v("。")]),t._v(" "),p("Exercise",{attrs:{title:"练习 5：捕获文件名",data:[{type:"skip",text:".bash_profile"},{type:"skip",text:"workspace.doc"},{type:"capture",text:"img0912.jpg",captureData:{results:["img0912","jpg"]}},{type:"capture",text:"updated_img0912.png",captureData:{results:["updated_img0912","png"]}},{type:"skip",text:"documentation.html"},{type:"capture",text:"favicon.gif",captureData:{results:["favicon","gif"]}},{type:"skip",text:"img0912.jpg.tmp"},{type:"skip",text:"access.lock"}]}},[t._v('我们只查找以 "jpg"、"png" 和 "gif" 扩展名结尾的图像文件，因此可以使用表达式 '),p("SolutionLink",{attrs:{text:"(\\w+)\\.(jpg|png|gif)$"}}),t._v(" 捕获所有此类文件名。")],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);