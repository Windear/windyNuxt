webpackJsonp([20],{"1MQc":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("thI3"),n=a("4RzX"),r=!1;var s=function(t){r||a("Z3Eq")},o=a("C7Lr")(i.a,n.a,!1,s,"data-v-b1ef4762",null);o.options.__file="pages/404.vue",e.default=o.exports},"4RzX":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homeBody"},[i("div",{staticClass:"bg"},[i("div",{staticClass:"bg-box"},[t._m(0),i("div",{staticClass:"bg-right"},[t._m(1),i("div",{staticClass:"bg-btn"},[t._m(2),i("a",{attrs:{href:"JavaScript:;"}},[i("div",{staticClass:"user-btn refresh",on:{click:function(e){return t.refresh_page()}}},[i("img",{attrs:{src:a("f/t0"),alt:""}}),i("p",[t._v("刷新一下")])])])])])])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-img"},[e("img",{attrs:{src:a("ZpWz"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-text"},[e("h3",[this._v("找不到设计师Windy?试着刷新一下。")]),e("p",[this._v("不过没关系，返回首页或者后退就可以了…")]),e("p",{staticClass:"countDown"},[e("span",{attrs:{id:"mysetTimeout"}},[this._v("5")]),this._v("s 后自动返回首页。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("div",{staticClass:"user-btn return-index"},[e("img",{attrs:{src:a("Qdnu"),alt:""}}),e("p",[this._v("返回首页")])])])}];i._withStripped=!0;var r={render:i,staticRenderFns:n};e.a=r},"7BAL":function(t,e,a){"use strict";e.a={baidu:function(t){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?f98ad40b514bec35bf76a940f1a5e468";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),console.log("当前页面："+t)}}},Qdnu:function(t,e,a){t.exports=a.p+"img/return-icon.2fa7e43.svg"},YrOB:function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,".bg[data-v-b1ef4762]{height:600px;width:100%;background-image:-webkit-linear-gradient(20deg,hsla(0,0%,100%,0),#e6eaee);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.bg-img img[data-v-b1ef4762]{max-width:745px;max-height:502px}.bg-text h3[data-v-b1ef4762]{font-size:42px;color:#302c48;letter-spacing:0;margin-bottom:40px}.countDown[data-v-b1ef4762]{color:#5e6d82!important}.bg-text p[data-v-b1ef4762]{font-size:20px;color:#302c48;letter-spacing:0;margin-top:20px}.bg-right[data-v-b1ef4762]{max-width:467px;margin-left:50px}.bg-box[data-v-b1ef4762],.user-btn[data-v-b1ef4762]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.user-btn[data-v-b1ef4762]{margin-top:40px;width:160px;height:40px;color:#fff;font-size:18px;font-weight:400px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.return-index[data-v-b1ef4762]{background:#686b89}.refresh[data-v-b1ef4762],.return-index[data-v-b1ef4762]{-webkit-box-shadow:0 4px 12px 0 rgba(31,38,50,.28);box-shadow:0 4px 12px 0 rgba(31,38,50,.28);border-radius:89px}.refresh[data-v-b1ef4762]{background:#337fde;margin-left:20px}.bg-btn[data-v-b1ef4762]{display:-webkit-box;display:-ms-flexbox;display:flex}.user-btn img[data-v-b1ef4762]{margin-right:10px}.user-btn p[data-v-b1ef4762]{margin:0}",""])},Z3Eq:function(t,e,a){var i=a("YrOB");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("47fdfe3a",i,!1,{sourceMap:!1})},ZpWz:function(t,e,a){t.exports=a.p+"img/artwork.e7047fc.png"},"f/t0":function(t,e,a){t.exports=a.p+"img/refresh-icon.102cd5b.svg"},thI3:function(t,e,a){"use strict";var i=a("7BAL");e.a={data:function(){return{}},head:function(){return{title:"404",meta:[{hid:"有爱设计",name:"keywords",content:"有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发"},{hid:"有爱设计",name:"description",content:"找不到Windy?试着右上角联系一下。"},{hid:"有爱设计",name:"description",content:"欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。"}]}},props:{},wacth:{},mounted:function(){i.a.baidu("404"),this.shijian(),setTimeout(function(){window.top.location.href="/"},5e3),this.$store.commit("updateFooterWidth",1)},methods:{shijian:function(){var t=5;setInterval(function(){0!=t&&(t--,document.getElementById("mysetTimeout").innerHTML=t)},1e3)},refresh_page:function(){location.reload()}},components:{}}}});