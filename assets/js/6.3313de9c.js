(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{332:function(t,e,s){},364:function(t,e,s){"use strict";s(332)},372:function(t,e,s){"use strict";s.r(e);s(46),s(308),s(309),s(310),s(47),s(95),s(96),s(169),s(68);var a=s(363),r=s.n(a),n={props:{data:Object},data:function(){return{result:"",textHtml:this.escapeHtml(this.data.text),groupSucceed:[],status:!1}},computed:{type:function(){return this.data.type},text:function(){return this.data.text},captureData:function(){return this.data.captureData}},methods:{clearResult:function(){this.textHtml=this.escapeHtml(this.data.text),this.clearNonTextResult()},clearNonTextResult:function(){this.result=""},verifyInput:function(t,e){var s=this;try{if(0==t.length)return this.clearResult(),!1;var a=null,i=null;try{a=this.text.match(RegExp(t,""))}catch(t){}try{i=this.text.match(new RegExp(e,""))}catch(t){}if("match"==this.type||"capture"==this.type){if(null!=i){var n=this.escapeHtml(this.text.substring(0,i.index))+"<span class='match_succeeded'>"+this.escapeHtml(i[0])+"</span>"+this.escapeHtml(this.text.substring(i.index+i[0].length,this.text.length));this.textHtml=n}if(null!=a){if(this.captureData){var u=a.slice(1,a.length),c=r.a.intersection(u,this.captureData.results),l=r.a.difference(this.captureData.results,c);return this.$refs.groups.forEach((function(t,e){var a=t.innerText-1!=r.a.indexOf(c,a)?s.markGroupMatched(e):-1!=r.a.indexOf(l,a)&&s.markGroupMissed(e)})),0==l.length?this.markSucceeded():this.markFailed()}return this.markSucceeded()}return null!=i?this.clearNonTextResult():this.clearResult(),this.markFailed()}if("skip"==this.type){if(null==a)return this.clearResult(),!0;n=this.escapeHtml(this.text.substring(0,a.index))+"<span class='match_failed'>"+this.escapeHtml(a[0])+"</span>"+this.escapeHtml(this.text.substring(a.index+a[0].length,this.text.length));return this.textHtml=n,this.markFailed()}alert("Invalid type")}catch(t){}return!1},markSucceeded:function(){return this.result="Success",this.status=!0,!0},markFailed:function(){return this.result="Failed",this.status=!1,!1},markGroupMatched:function(t){return this.groupSucceed[t]=!0},markGroupMissed:function(t){return this.groupSucceed[i]=!1},escapeHtml:function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}}},u=(s(364),s(45)),c=Object(u.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",{staticClass:"problem"},[s("td",{staticClass:"task",domProps:{textContent:t._s(t.type)}}),t._v(" "),s("td",{staticClass:"text",domProps:{innerHTML:t._s(t.textHtml)}}),t._v(" "),t.captureData?s("td",{staticClass:"groups"},t._l(t.captureData.results,(function(e,a){return s("span",{key:e,ref:"groups",refInFor:!0,staticClass:"group",class:{succeeded:t.groupSucceed[a]},domProps:{textContent:t._s(e)}})})),0):t._e(),t._v(" "),s("td",{staticClass:"result",class:{succeed:t.status,failed:!t.status},domProps:{textContent:t._s(t.result)}})])}),[],!1,null,null,null);e.default=c.exports}}]);