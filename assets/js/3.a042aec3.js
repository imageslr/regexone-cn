(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{308:function(t,e,n){"use strict";var i=n(166),r=n(6),s=n(14),a=n(24),u=n(167),o=n(168);i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),l=String(this);if(!a.global)return o(a,l);var c=a.unicode;a.lastIndex=0;for(var d,p=[],f=0;null!==(d=o(a,l));){var v=String(d[0]);p[f]=v,""===v&&(a.lastIndex=u(l,s(a.lastIndex),c)),f++}return 0===f?null:p}]}))},313:function(t,e,n){"use strict";var i=n(0);e.a=new i.a},331:function(t,e,n){},361:function(t,e,n){var i=n(1),r=n(4),s=n(71),a=[].slice,u=function(t){return function(e,n){var i=arguments.length>2,r=i?a.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},362:function(t,e,n){"use strict";n(331)},371:function(t,e,n){"use strict";n.r(e);n(94),n(361),n(95),n(96),n(46),n(308);var i=n(313);var r={editorInputTimeoutTimer:null,editorLastInput:null,props:{data:Array,title:String,solution:String,nextUrl:String},data:function(){return{showAnswer:!1,input:"",disabled:!0}},computed:{nextLink:function(){return this.nextUrl||(t=this.$site,e=this.$page,n=t.themeConfig.sidebar,i=e.regularPath.match(/^(.*).html$/)[1],r=null,n.some((function(t){return t.children.some((function(e,n){return e==i&&(r=t.children[n+1]+".html"||!1,!0)}))})),r);var t,e,n,i,r},hasGroup:function(){return this.data.some((function(t){return!!t.captureData}))}},watch:{input:function(){this.update()}},mounted:function(){var t=this;i.a.$on("set-input",(function(e){return t.input=e}))},methods:{update:function(){var t=this;null!=this.editorInputTimeoutTimer&&clearTimeout(this.editorInputTimeoutTimer),this.editorInputTimeoutTimer=setTimeout((function(){t.updateFromInput(),t.editorInputTimeoutTimer=null}),64)},updateFromInput:function(){var t=this.$data.input;if(t!=this.editorLastInput){var e=this.recurseCompletePattern(t,0,t.length,null)[1],n=!0;this.$refs.problems.forEach((function(i){return n=i.verifyInput(t,e)&&n})),this.disabled=!n,this.editorLastInput=t}},recurseCompletePattern:function(t,e,n,i){for(var r="",s=n,a=e;a<=n;a++){var u="";0<a&&(u=t.charAt(a-1));var o=t.charAt(a);if(a==n){null!=i&&(r+=i);break}if(")"==i&&"}"==o&&"\\"!=u||")"==i&&"]"==o&&"\\"!=u||"]"==i&&")"==o&&"\\"!=u||"]"==i&&"}"==o&&"\\"!=u||"}"==i&&"]"==o&&"\\"!=u||"}"==i&&")"==o&&"\\"!=u){r+=i,s=a;break}if(o==i&&a<n){r+=o,s=a+1;break}if("("==o&&"\\"!=u)r+=o+(u=this.recurseCompletePattern(t,a+1,n,")"))[1],a+=u[0];else if("["==o&&"\\"!=u)r+=o+(u=this.recurseCompletePattern(t,a+1,n,"]"))[1],a+=u[0];else if("{"==o&&"\\"!=u)r+=o+(u=this.recurseCompletePattern(t,a+1,n,"}"))[1],a+=u[0];else{if(!(a<n))break;r+=o}}return[s-e,r]}}},s=(n(362),n(45)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exercise"},[n("div",{staticClass:"title",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("table",{staticClass:"tasks_table"},[n("tbody",[n("tr",{staticClass:"problem_header"},[n("td",{staticClass:"task"},[t._v("Task")]),t._v(" "),n("td",{staticClass:"text"},[t._v("Text")]),t._v(" "),t.hasGroup?n("td",{staticClass:"groups"},[t._v("Capture Groups")]):t._e(),t._v(" "),n("td",[t._v("Result")])]),t._v(" "),t._l(t.data,(function(t,e){return n("Problem",{key:e,ref:"problems",refInFor:!0,attrs:{data:t}})}))],2)]),t._v(" "),n("div",{staticClass:"input_and_continue"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"exercise_input_field",attrs:{type:"text",autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false",placeholder:"Type your pattern"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._v(" "),n("button",{staticClass:"continue",class:{disabled:t.disabled},attrs:{disabled:t.disabled},on:{click:function(e){return t.$router.push(t.nextLink)}}},[t._v("Continue ›")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAnswer,expression:"showAnswer"}],staticClass:"solution"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"solution_hint"},[t._v("\n    解决上述任务以继续下一个问题，或者查看"),n("a",{staticClass:"show_solution_button",on:{click:function(e){t.showAnswer=!t.showAnswer}}},[t._v("答案")]),t._v("。\n  ")])])}),[],!1,null,null,null);e.default=a.exports}}]);