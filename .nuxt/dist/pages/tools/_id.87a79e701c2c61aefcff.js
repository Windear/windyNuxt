webpackJsonp([18], {
    "0gft": function(t, a, i) {
        "use strict";
        var o = i("7BAL"),
            e = i("NYSn");
        a.a = {
            data: function() { return { ip: this.$store.state.ip, projectId: this.$route.query.projectId, showPayBox: !1, toolsData: "", tags: [], icon: "", cate: "", title: "MAC工具详情", downloadData: [], dialogVisible: !1, payMe: !1, clipboardVal: "no", scrollType: !1 } },
            head: function() { return { title: this.title, meta: [{ hid: "有爱设计", name: "keywords", content: "有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发" }, { hid: "有爱设计", name: "description", content: this.toolsData.toolsIntroduction }, { hid: "有爱设计", name: "description", content: "欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。" }] } },
            created: function() {},
            props: {},
            computed: { bodyWidth: function() { return this.$store.getters.getBodyWidth } },
            mounted: function() {
                var t = this;
                o.a.baidu("工具详情"), this.$store.commit("updateNavBarActive", "3"), document.documentElement.scrollTop = 0, this.getToolsDetails(), this.getToolsDownload(), this.getToolsLooked(), this.$store.commit("updateFooterWidth", 0), e.a.changyan(), this.$nextTick(function() { window.addEventListener("scroll", t.onScroll) })
            },
            methods: {
                onScroll: function() {
                    var t = document.documentElement.scrollTop || document.body.scrollTop;
                    this.scrollType = t >= 80
                },
                changyan: function() { window.changyan.api.config({ appid: "cyt3crepq", conf: "prod_a13b2e3f57b739f379a9d121e340340d" }) },
                getToolsDetails: function() {
                    var t = this;
                    if (void 0 === this.projectId) {
                        var a = String(window.location.href.split("/").pop());
                        this.projectId = a
                    }
                    var i = this.projectId;
                    this.$store.dispatch("getToolsDetails", i).then(function(a) { var i = a.data; "err" != i.state && 200 === a.status ? (t.toolsData = i, t.title = i.toolsTitle, t.tags = i.toolsTag.split(","), t.cate = i.toolsCate[1], t.icon = t.ip + "/media/" + i.toolsIcon) : alert("网络错误") }).catch(function(a) { console.error(a), t.$router.push({ path: "/404" }) })
                },
                getToolsDownload: function() {
                    var t = this;
                    if (void 0 === this.projectId) {
                        var a = String(window.location.href.split("/").pop());
                        this.projectId = a
                    }
                    var i = this.projectId;
                    this.$store.dispatch("getToolsDownload", i).then(function(a) { var i = a.data; "err" != i.state ? t.downloadData = i : t.downloadData = 0 }).catch(function(t) { console.error(t) })
                },
                getToolsLooked: function() {
                    if (void 0 === this.projectId) {
                        var t = String(window.location.href.split("/").pop());
                        this.projectId = t
                    }
                    var a = this.projectId;
                    this.$store.dispatch("getToolsLooked", a).then(function(t) { t.data }).catch(function(t) { console.error(t) })
                },
                getToolsDownloads: function(t, a) {
                    if (void 0 === this.projectId) {
                        var i = String(window.location.href.split("/").pop());
                        this.projectId = i
                    }
                    var o = this.projectId;
                    this.$store.dispatch("getToolsDownloads", o).then(function(t) { t.data }).catch(function(t) { console.error(t) })
                },
                handleClose: function(t) { this.$confirm("确认关闭？").then(function(a) { t() }).catch(function(t) {}) },
                onCopy: function(t) { this.clipboardVal = t },
                onError: function(t) { this.clipboardVal = "err" },
                searchTag: function(t) { this.$store.commit("updateSearchVal", t), this.$router.push({ path: "/search?q=" + t }) }
            },
            components: {}
        }
    },
    "7BAL": function(t, a, i) {
        "use strict";
        a.a = {
            baidu: function(t) {
                ! function() {
                    var t = document.createElement("script");
                    t.src = "https://hm.baidu.com/hm.js?f98ad40b514bec35bf76a940f1a5e468";
                    var a = document.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(t, a)
                }(), console.log("当前页面：" + t)
            }
        }
    },
    DrOz: function(t, a, i) {
        "use strict";
        var o = function() {
            var t = this,
                a = t.$createElement,
                o = t._self._c || a;
            return o("div", { staticClass: "homeBody" }, [o("div", { staticClass: "container" }, [o("div", { staticClass: "left" }, [o("div", { staticClass: "content" }, [o("div", { staticClass: "title-box" }, [o("img", { directives: [{ name: "lazy", rawName: "v-lazy", value: t.icon, expression: "icon" }], attrs: { alt: t.toolsData.toolsTitle } }), o("h3", [t._v(t._s(t.toolsData.toolsTitle))])]), o("div", { staticClass: "introduction" }, [t._v(t._s(t.toolsData.toolsIntroduction))]), o("div", { staticClass: "details", domProps: { innerHTML: t._s(t.toolsData.toolsContent) } })]), t._m(0), o("div", { staticClass: "comment" }, [o("div", { attrs: { id: "SOHUCS", sid: t.toolsData.sid } })])]), o("div", { staticClass: "right" }, [o("div", { staticClass: "download-box", style: t.scrollType ? "position: fixed;top:80px;" : "" }, [o("a", { staticClass: "download-btn download-box-btn", attrs: { href: "javascript:;" }, on: { click: function(a) { t.dialogVisible = !0 } } }, [t._v("下载应用")]), o("a", { staticClass: "pay-btn download-box-btn", attrs: { href: "javascript:;" }, on: { click: function(a) { t.payMe = !0 } } }, [t._v("打赏站长")])]), o("div", { staticClass: "essential", style: t.scrollType ? "position: fixed;top:236px;" : "" }, [o("p", { staticClass: "box-title" }, [t._v("基本信息")]), o("div", { staticClass: "box-content" }, [o("span", { staticClass: "span-left" }, [t._v("最新版本")]), o("span", { staticClass: "span-right" }, [t._v(t._s(t.toolsData.toolsNewVersion))])]), o("div", { staticClass: "box-content" }, [o("span", { staticClass: "span-left" }, [t._v("类别")]), o("span", { staticClass: "span-right" }, [t._v(t._s(t.cate))])]), t._m(1)]), o("div", { staticClass: "tag", style: t.scrollType ? "position: fixed;top:412px;" : "" }, [o("p", { staticClass: "box-title" }, [t._v("标签")]), t._l(t.tags, function(a) { return o("a", { key: a.id, staticClass: "tag-list", attrs: { href: "javascript:;" }, on: { click: function(i) { return t.searchTag(a) } } }, [t._v(t._s(a))]) })], 2)])]), o("el-dialog", { attrs: { title: "网盘下载", visible: t.dialogVisible, width: "80%", "custom-class": "cloud_dialog" }, on: { "update:visible": function(a) { t.dialogVisible = a } } }, [0 != t.downloadData ? o("el-table", { staticStyle: { width: "100%" }, attrs: { data: t.downloadData } }, [o("el-table-column", { attrs: { label: "系统", "min-width": "80" }, scopedSlots: t._u([{ key: "default", fn: function(a) { return [o("i", { staticClass: "tag-img", class: 1 == t.downloadData[a.$index].drive_type ? "mac" : "microsoft" })] } }], null, !1, 2155418776) }), o("el-table-column", { attrs: { prop: "version", label: "版本号", "min-width": "130" } }), o("el-table-column", { attrs: { prop: "language", label: "语言", "min-width": "80" } }), o("el-table-column", { attrs: { prop: "update_time", label: "更新时间", "min-width": "160" } }), o("el-table-column", { attrs: { prop: "file_size", label: "文件大小", "min-width": "80" } }), o("el-table-column", { attrs: { prop: "drive_pw", label: "下载密码", "min-width": "80" } }), o("el-table-column", { attrs: { label: "操作", "min-width": "190" }, scopedSlots: t._u([{ key: "default", fn: function(a) { return [o("a", { directives: [{ name: "clipboard", rawName: "v-clipboard", value: t.downloadData[a.$index].drive_pw, expression: "downloadData[scope.$index].drive_pw" }], staticStyle: { "margin-right": "10px" }, attrs: { href: "javascript:;" }, on: { success: function(i) { return t.onCopy(a.$index) }, error: function(i) { return t.onError(a.$index) } } }, [t.downloadData[a.$index].drive_pw ? o("el-button", { attrs: { size: "mini" } }, [t.clipboardVal != a.$index && "err" != t.clipboardVal ? o("span", [t._v("复制密码")]) : t._e(), t.clipboardVal == a.$index ? o("span", { staticClass: "clipboardVal-success" }, [t._v("复制成功")]) : t._e(), "err" == t.clipboardVal ? o("span", { staticClass: "clipboardVal-err" }, [t._v("复制失败")]) : t._e()]) : t._e()], 1), o("a", { attrs: { href: t.downloadData[a.$index].drive_url, target: "_blank" }, on: { click: function(i) { return t.getToolsDownloads(a.$index, t.downloadData) } } }, [o("el-button", { attrs: { type: "primary", size: "mini" } }, [t._v("前往下载")])], 1)] } }], null, !1, 3894866441) })], 1) : t._e(), 0 == t.downloadData ? o("span", [t._v("此资源没有网盘链接哟~不好意思呀。")]) : t._e()], 1), o("el-dialog", { attrs: { title: "打赏站长", "custom-class": "pay-dialog", visible: t.payMe, width: "75%", center: "" }, on: { "update:visible": function(a) { t.payMe = a } } }, [o("div", { staticStyle: { "text-align": "center" } }, [o("img", { staticStyle: { "max-width": "400px", width: "100%" }, attrs: { src: i("SCK0"), alt: "" } }), o("br"), o("br"), o("br"), o("span", [t._v("打赏将减轻 5windy.com 服务器与加速流量负担，更好的提供优秀资源")])])])], 1)
        };
        o._withStripped = !0;
        var e = {
            render: o,
            staticRenderFns: [function() {
                var t = this,
                    a = t.$createElement,
                    i = t._self._c || a;
                return i("div", { staticClass: "problem" }, [i("div", { staticClass: "problem-title" }, [i("span", { staticClass: "problem-line" }), i("h3", [t._v("常见问题")])]), i("div", { staticClass: "problem-content" }, [i("ol", [i("li", [t._v("如遇："), i("code", [t._v("「xxx.app已损坏，打不开。你应该将它移到废纸篓」")]), t._v("，并非你安装的软件已损坏，而是Mac系统的安全设置问题。详见："), i("a", { attrs: { href: "http://home.5windy.com:3000/blog/1", target: "_blank" } }, [t._v("MAC应用无法打开或文件损坏的处理方法")])]), i("li", [t._v("激活工具在新系统10.12中打不开。参照 "), i("a", { attrs: { href: "http://home.5windy.com:3000/tools/16", target: "_blank" } }, [t._v("让Special-K系列Patch工具运行在macOS sierra 10.12上")]), t._v(" 与 "), i("a", { attrs: { href: "http://home.5windy.com:3000/tools/17", target: "_blank" } }, [t._v("让CORE Keygen系列注册机成功运行在macOS sierra 10.12上的方法")])]), i("li", [t._v("关于激活方法，大部分文章都对不同版本做了不同的激活说明。不过，最终还是以dmg包中的实际情况为准，如果里面只有单独的 .app或者.pkg文件，说明不需要做任何激活操作。")])])])])
            }, function() {
                var t = this.$createElement,
                    a = this._self._c || t;
                return a("div", { staticClass: "box-content" }, [a("span", { staticClass: "span-left" }, [this._v("更新时间")]), a("span", { staticClass: "span-right" }, [this._v("2018-09-17")])])
            }]
        };
        a.a = e
    },
    NYSn: function(t, a, i) {
        "use strict";
        a.a = {
            changyan: function() {
                ! function() {
                    var t = "prod_a13b2e3f57b739f379a9d121e340340d";
                    (window.innerWidth || document.documentElement.clientWidth) < 960 ? function(t, a) {
                        var i = document.getElementsByTagName("head")[0] || document.head || document.documentElement,
                            o = document.createElement("script");
                        o.setAttribute("type", "text/javascript"), o.setAttribute("charset", "UTF-8"), o.setAttribute("src", t), "function" == typeof a && (window.attachEvent ? o.onreadystatechange = function() { var t = o.readyState; "loaded" !== t && "complete" !== t || (o.onreadystatechange = null, a()) } : o.onload = a), i.appendChild(o)
                    }("https://www.cgtblog.com/skin/default/js/changyan/changyan.js", function() { window.changyan.api.config({ appid: "cyt3crepq", conf: t }) }) : function(t, a) {
                        var i = document.getElementsByTagName("head")[0] || document.head || document.documentElement,
                            o = document.createElement("script");
                        o.setAttribute("type", "text/javascript"), o.setAttribute("charset", "UTF-8"), o.setAttribute("src", t), "function" == typeof a && (window.attachEvent ? o.onreadystatechange = function() { var t = o.readyState; "loaded" !== t && "complete" !== t || (o.onreadystatechange = null, a()) } : o.onload = a), i.appendChild(o)
                    }("https://www.cgtblog.com/skin/default/js/changyan/changyan.js", function() { window.changyan.api.config({ appid: "cyt3crepq", conf: t }) })
                }()
            }
        }
    },
    SCK0: function(t, a, i) { t.exports = i.p + "img/payMoney.07a0c02.png" },
    iShA: function(t, a, i) {
        var o = i("L4zZ");
        (t.exports = i("UTlt")(!1)).push([t.i, "#feedAv{margin-top:-250px!important;-webkit-transform:scale(0);transform:scale(0)}#MZAD_POP_PLACEHOLDER,#pop_ad{display:none!important}.homeBody{background:#f3f4f5;padding-top:20px;padding-bottom:20px}.container{width:1200px;overflow:hidden;margin:0 auto;position:relative}.left{width:900px;float:left}.content{background:#fff;padding:20px;border-radius:4px}.title-box{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.title-box img{width:80px;height:80px}.title-box h3{font-size:24px;margin-left:20px;width:760px;font-weight:400}.introduction{background:#eff2f7;padding:20px;color:#5e6d82;font-size:14px;line-height:24px;margin-top:20px}.details{margin-top:40px}.details p{width:840px;font-size:14px!important;margin:10px 0}.details img{max-width:720px}.details a:active,.details a:hover,.details a:link,.details a:visited{color:#0089ff!important}.problem{background:#fff;padding:20px;border-radius:4px;margin-top:20px}.problem-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.problem-line{width:4px;height:20px;border-radius:2px;background:#0089ff;display:inline-block;margin-right:10px}.problem-content ol{color:#475669;-webkit-padding-start:20px;padding-inline-start:20px;font-size:14px;margin-top:20px}.problem-content li{margin-bottom:10px}.problem-content code{color:#ff7676}.problem-content a{color:#007ce7}.tag-img{width:16px;height:16px;min-width:16px;display:inline-block;margin-left:5px}.mac{background-image:url(" + o(i("qcqO")) + ")}.microsoft{background-image:url(" + o(i("m5Vw")) + ")}.comment{padding:20px;background:#fff;margin-top:20px}.right{width:280px;float:right}.download-box{background:#fff;width:280px;padding:20px 20px 10px;border-radius:4px;margin-bottom:20px}.download-box-btn{display:inline-block;width:240px;height:44px;color:#fff!important;font-size:16px;font-weight:400;border-radius:4px;margin-bottom:10px;text-align:center;line-height:44px}.download-btn{background:#0089ff}.download-btn,.download-btn:hover{-webkit-transition:all .3s ease-out 0s;transition:all .3s ease-out 0s}.download-btn:hover{background:#007ce7}.pay-btn{background:#ff7676}.pay-btn,.pay-btn:hover{-webkit-transition:all .3s ease-out 0s;transition:all .3s ease-out 0s}.pay-btn:hover{background:#f84f4f}.essential{background:#fff;width:280px;padding:20px 20px 10px;border-radius:4px;margin-bottom:20px}.box-title{font-size:18px;color:#1f2d3d;margin-bottom:10px}.box-content{margin:10px 0;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.span-left{color:#8492a6}.span-right{color:#475669}.tag{background:#fff;width:280px;padding:20px 20px 10px;margin-bottom:20px}.tag,.tag-list{border-radius:4px}.tag-list{display:inline-block;height:32px;background:#f6f9fa;color:#95a5a6!important;padding:0 12px;margin:5px 10px 5px 0;font-size:14px;line-height:32px}.pay-dialog{max-width:500px}.cloud_dialog{min-width:320px}.cloud_down{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px}.cloud_down p{line-height:20px;color:#00c58c}.baiduyun{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.baiduyun span{margin-left:10px;line-height:20px;display:inline-block}.clipboard-btn:link{color:#458cff;text-decoration:underline;margin-left:20px}.clipboardVal-success{color:#00c58c}.clipboardVal-err{color:#f84f4f}@media screen and (max-width:760px){.container,.left{width:100%}.left{border-radius:0}.right{width:100%}.download-box{width:100%;position:static!important}.download-box-btn{width:100%}.title-box img{min-width:80px;width:80px;height:80px}.essential,.tag{background:#fff;width:100%;border-radius:0;position:static!important}.details,.details p{width:100%}.details img,.details ol,.details ul{max-width:100%}}", ""])
    },
    kanb: function(t, a, i) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var o = i("0gft"),
            e = i("DrOz"),
            n = !1;
        var s = function(t) { n || i("yF7d") },
            l = i("C7Lr")(o.a, e.a, !1, s, null, null);
        l.options.__file = "pages/tools/_id.vue", a.default = l.exports
    },
    m5Vw: function(t, a, i) { t.exports = i.p + "img/wr_icon.763e8a8.svg" },
    qcqO: function(t, a, i) { t.exports = i.p + "img/mac_icon2.d8a718e.svg" },
    yF7d: function(t, a, i) {
        var o = i("iShA");
        "string" == typeof o && (o = [
            [t.i, o, ""]
        ]), o.locals && (t.exports = o.locals);
        i("FIqI")("ba23c614", o, !1, { sourceMap: !1 })
    }
});