webpackJsonp([7],{"/BkC":function(t,a,e){(t.exports=e("UTlt")(!1)).push([t.i,".scrollBar[data-v-36ca7ac8]{height:50px;background:#eff2f7;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.main[data-v-36ca7ac8],.scrollBar[data-v-36ca7ac8]{display:-webkit-box;display:-ms-flexbox;display:flex}.main[data-v-36ca7ac8]{width:1180px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:auto 10px}.scrollText[data-v-36ca7ac8]{overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0;font-size:16px;color:#8492a6}.scrollText li[data-v-36ca7ac8]{line-height:50px;height:50px}.scrollBtn[data-v-36ca7ac8]{display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center}.leftBtn[data-v-36ca7ac8]{width:32px;width:2rem;height:28px;border:1px solid #d3dce6;border-radius:4px 0 0 4px}.leftBtn[data-v-36ca7ac8],.leftBtn[data-v-36ca7ac8]:hover{-webkit-transition:all .3s ease-out 0s;transition:all .3s ease-out 0s}.leftBtn[data-v-36ca7ac8]:hover{background:#fff}.rightBtn[data-v-36ca7ac8]{width:32px;width:2rem;height:28px;border:1px solid #d3dce6;border-left:0;border-radius:0 4px 4px 0}.rightBtn[data-v-36ca7ac8],.rightBtn[data-v-36ca7ac8]:hover{-webkit-transition:all .3s ease-out 0s;transition:all .3s ease-out 0s}.rightBtn[data-v-36ca7ac8]:hover{background:#fff}.slide-fade-enter-active[data-v-36ca7ac8]{-webkit-transition:all .8s;transition:all .8s}.slide-fade-leave-active[data-v-36ca7ac8]{-webkit-transition:all reverse .8s;transition:all reverse .8s}.slide-fade-enter[data-v-36ca7ac8],.slide-fade-leave-to[data-v-36ca7ac8]{-webkit-transform:translateY(-25px);transform:translateY(-25px);opacity:0}",""])},"0Ijo":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("KusD"),s=e("xX2z"),o=!1;var n=function(t){o||e("cLM4")},r=e("C7Lr")(i.a,s.a,!1,n,"data-v-c385234a",null);r.options.__file="pages/resources/_cate.vue",a.default=r.exports},"0kVm":function(t,a,e){"use strict";var i=e("oq5B"),s=!1;var o=function(t){s||e("v1KW")},n=e("C7Lr")(null,i.a,!1,o,"data-v-61c8256b",null);n.options.__file="components/not_found.vue",a.a=n.exports},"7BAL":function(t,a,e){"use strict";a.a={baidu:function(t){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?f98ad40b514bec35bf76a940f1a5e468";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}(),console.log("当前页面："+t)}}},C1CF:function(t,a,e){t.exports=e.p+"img/notfound.865689d.png"},KusD:function(t,a,e){"use strict";var i=e("7BAL"),s=e("0kVm"),o=e("zuSs");a.a={data:function(){return{ip:this.$store.state.ip,resourcesCate:this.$route.query.resourcesCate,resourcesList:[],newList:[],notfound:!1,formatList:["全部"],format:"全部",formatIndex:0,currentPage:1,total:""}},head:function(){return{title:"UI设计素材下载",meta:[{hid:"有爱设计",name:"keywords",content:"有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发"},{hid:"有爱设计",name:"description",content:"有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发,sketch素材,sketch资源,sketch下载。"},{hid:"有爱设计",name:"description",content:"欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。"}]}},props:{},wacth:{},mounted:function(){this.$store.commit("updateNavBarActive","2"),i.a.baidu("我的素材"),this.$store.commit("updateFooterWidth",1),this.getCateResourcesList(),this.getResourcesFormat()},methods:{getCateResourcesList:function(){var t=this;if(void 0===this.resourcesCate){var a=String(window.location.href.split("/").pop());this.resourcesCate=a}var e={search:this.resourcesCate,p:this.currentPage};this.$store.dispatch("getCateResourcesList",e).then(function(a){var e=a.data;"err"!=e.state?(t.resourcesList=e.results,t.total=e.count):t.notfound=!0}).catch(function(a){console.error(a),t.$router.push({})})},postCateResourcesFormatList:function(t,a,e){var i=this;if(void 0===this.resourcesCate){var s=String(window.location.href.split("/").pop());this.resourcesCate=s}if(e&&(this.currentPage=1),this.formatIndex=t,this.format=a,console.log(a),"全部"==a)this.getCateResourcesList();else{var o={file_type:a.toLowerCase(),cate:this.resourcesCate,p:this.currentPage};this.$store.dispatch("postCateResourcesFormatList",o).then(function(t){var a=t.data;"err"!=a.state?(i.resourcesList=a.results,i.total=a.count,i.notfound=!1):(i.newList=[],i.notfound=!0)}).catch(function(t){console.error(t)})}},getResourcesFormat:function(){var t=this;this.$store.dispatch("getResourcesFormat","").then(function(a){for(var e=a.data,i=0;i<e.length;i++)t.formatList.push(e[i].toUpperCase()),console.log(t.formatList)}).catch(function(t){console.error(t)})},handleCurrentChange:function(t){"全部"==this.format?this.getCateResourcesList(t):this.postCateResourcesFormatList(this.formatIndex,this.format,!1),document.documentElement.scrollTop=0,document.body.scrollTop=0},toListData:function(t,a){this.newList=this.resourcesList.slice(t,a)}},components:{ScrollBar:o.a,notFound:s.a}}},cLM4:function(t,a,e){var i=e("l2Bs");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("2056be61",i,!1,{sourceMap:!1})},j6Tk:function(t,a,e){t.exports=e.p+"img/arrow.c2ed7d5.svg"},l2Bs:function(t,a,e){(t.exports=e("UTlt")(!1)).push([t.i,".container[data-v-c385234a],.tool-container[data-v-c385234a]{width:1180px;overflow:hidden;margin:0 auto}.title-box[data-v-c385234a]{margin-top:20px;font-size:24px;color:#333}.img-list[data-v-c385234a]{margin-top:20px;overflow:hidden}.img-list li[data-v-c385234a]{float:left;margin:0 20px 20px 0}.img-list img[data-v-c385234a]:hover{-webkit-transition:all .3s ease-out 0s;transition:all .3s ease-out 0s;-webkit-box-shadow:0 4px 6px rgba(0,0,0,.2);box-shadow:0 4px 6px rgba(0,0,0,.2)}.img-list li a[data-v-c385234a],.plugin-list li a[data-v-c385234a],.tool-list li a[data-v-c385234a],.video-list li a[data-v-c385234a]{display:block;line-height:0}.img-list p a[data-v-c385234a],.plugin-list p a[data-v-c385234a],.tool-list p a[data-v-c385234a],.video-list p a[data-v-c385234a]{margin-top:15px;font-size:16px;line-height:16px;width:280px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.img-list img[data-v-c385234a]{width:280px;height:210px;border-radius:4px;outline:none;-webkit-transition:all .3s ease-out 0s;transition:all .3s ease-out 0s}.img-list li[data-v-c385234a]:nth-child(4n),.plugin-list li[data-v-c385234a]:nth-child(4n),.tool-list li[data-v-c385234a]:nth-child(5n),.video-list li[data-v-c385234a]:nth-child(4n){margin-right:0}.img-list .thumbnail .info[data-v-c385234a],.plugin-list .thumbnail .info[data-v-c385234a],.tool-list .thumbnail .info[data-v-c385234a]{position:absolute;bottom:0;left:0;width:100%;min-height:50px;border-radius:0 0 4px 4px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.6)));background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}.pagination[data-v-c385234a]{padding:10px 0}.design_format[data-v-c385234a]{margin:24px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#333}.design_format span[data-v-c385234a]{font-weight:400;margin-right:10px;font-size:18px}.format_btn[data-v-c385234a]{display:inline-block;height:28px;padding:0 10px;border-radius:4px;margin-right:10px;line-height:28px}.format_btn[data-v-c385234a],.format_btn_active[data-v-c385234a]{-webkit-transition:all .3s ease-out 0s;transition:all .3s ease-out 0s}.format_btn_active[data-v-c385234a]{background:#458cff;color:#fff!important}.format_btn[data-v-c385234a]:hover{background:#d3dce6;color:#fff;-webkit-transition:all .3s ease-out 0s;transition:all .3s ease-out 0s}.design_format a[data-v-c385234a]:link{text-decoration:none;color:#5e6d82}@media screen and (max-width:760px){.container[data-v-c385234a]{width:100%}.title-box[data-v-c385234a]{margin-left:2%}.img-list li[data-v-c385234a]{margin:0 2% 4%;width:46%}.img-list p a[data-v-c385234a],.plugin-list p a[data-v-c385234a],.video-list p a[data-v-c385234a]{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.img-list img[data-v-c385234a]{display:block;width:100%;height:auto}}",""])},lrT8:function(t,a,e){"use strict";a.a={data:function(){return{msgshow:1,msgtext:[{icon:"",text:"本站提供软件开发各种工具素材，需要用到的朋友，可以免费下载，都是在下平时收集的小素材哟。"},{icon:"",text:"如果本站素材有任何侵权行为，请前往底部页脚联系在下。"},{icon:"",text:"需要任何商业上的合作，或者有啥狗粮想要喂食本产品狗的，请狂点右下角哟。"}]}},props:{},computed:{},wacth:{},mounted:function(){var t=this;setInterval(function(){return t.clock()},6e3)},methods:{upturn:function(){var t=this.msgtext.length;this.msgshow<t&&this.msgshow++},downturn:function(){this.msgshow>1&&this.msgshow--},clock:function(){var t=this.msgtext.length;this.msgshow<t?this.msgshow++:this.msgshow==t&&(this.msgshow=1)}},components:{}}},oDkK:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"scrollBar"},[e("div",{staticClass:"main"},[e("ul",{staticClass:"scrollText"},t._l(t.msgtext,function(a,i){return e("transition",{key:a.id,attrs:{name:"slide-fade"}},[e("li",{directives:[{name:"show",rawName:"v-show",value:t.msgshow==i+1,expression:"msgshow==index+1"}]},[t._v(t._s(a.text))])])}),1),e("div",{staticClass:"scrollBtn"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.upturn()}}},[t._m(0)]),e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.downturn()}}},[t._m(1)])])])])},s=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"leftBtn"},[a("img",{attrs:{src:e("j6Tk")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"rightBtn"},[a("img",{staticStyle:{transform:"scaleY(-1)"},attrs:{src:e("j6Tk")}})])}];i._withStripped=!0;var o={render:i,staticRenderFns:s};a.a=o},oVYt:function(t,a,e){(t.exports=e("UTlt")(!1)).push([t.i,".notFound[data-v-61c8256b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:40px auto}.notFound p[data-v-61c8256b]{font-size:20px;margin-left:-60px;color:#8492a6}@media screen and (max-width:760px){.notFound img[data-v-61c8256b]{width:320px}.notFound p[data-v-61c8256b]{font-size:14px;margin-left:0}}",""])},oq5B:function(t,a,e){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)},s=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"notFound"},[a("img",{attrs:{src:e("C1CF"),width:"400"}}),a("p",[this._v("Windy还没有收藏该类素材哟，再等等吧~")])])}];i._withStripped=!0;var o={render:i,staticRenderFns:s};a.a=o},v1KW:function(t,a,e){var i=e("oVYt");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("281d9412",i,!1,{sourceMap:!1})},v4jo:function(t,a,e){var i=e("/BkC");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("33ee8e51",i,!1,{sourceMap:!1})},xX2z:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"homeBody"},[e("scroll-bar"),e("div",{staticClass:"container"},[e("h2",{staticClass:"title-box"},[t._v("素材")]),e("div",{staticClass:"design_format"},[e("span",[t._v("格式:")]),t._l(t.formatList,function(a,i){return e("a",{key:a.id,staticClass:"format_btn",class:{format_btn_active:t.formatIndex==i},attrs:{href:"javascript:;"},on:{click:function(e){return t.postCateResourcesFormatList(i,a,!0)}}},[t._v(t._s(a))])})],2),e("ul",{staticClass:"img-list"},t._l(t.resourcesList,function(a){return e("li",{key:a.id},[e("div",{staticClass:"thumbnail"},[e("a",{attrs:{href:"/resources/data/"+a.id,target:"_blank"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.picture,expression:"item.picture"}],key:a.picture,staticStyle:{display:"inline"},attrs:{alt:"有爱设计素材,sketch素材"}})]),e("div",{staticClass:"info"})]),e("p",[e("a",{attrs:{href:"/resources/data/"+a.id,target:"_blank"}},[t._v(t._s(a.title))])])])}),0),""==t.resourcesList?e("not-found"):t._e(),t.total?e("div",{staticClass:"pagination"},[e("el-pagination",{staticStyle:{"margin-left":"5px","white-space":"normal"},attrs:{background:"","page-size":24,"current-page":t.currentPage,layout:"total,prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a}}})],1):t._e()],1)],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};a.a=s},zuSs:function(t,a,e){"use strict";var i=e("lrT8"),s=e("oDkK"),o=!1;var n=function(t){o||e("v4jo")},r=e("C7Lr")(i.a,s.a,!1,n,"data-v-36ca7ac8",null);r.options.__file="components/scroll_bar.vue",a.a=r.exports}});