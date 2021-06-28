export default {
    mouse() {
        if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
            function (t) {
                var e = t.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
            }(jQuery), +
            function (t) {
                "use strict";

                function e(e) {
                    return this.each(function () {
                        var i = t(this),
                            o = i.data("bs.affix"),
                            n = "object" == typeof e && e;
                        o || i.data("bs.affix", o = new s(this, n)), "string" == typeof e && o[e]()
                    })
                }
                var s = function (e, i) {
                    this.options = t.extend({}, s.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
                };
                s.VERSION = "3.3.1", s.RESET = "affix affix-top affix-bottom", s.DEFAULTS = {
                    offset: 0,
                    target: window
                }, s.prototype.getState = function (t, e, s, i) {
                    var o = this.$target.scrollTop(),
                        n = this.$element.offset(),
                        r = this.$target.height();
                    if (null != s && "top" == this.affixed) return s > o ? "top" : !1;
                    if ("bottom" == this.affixed) return null != s ? o + this.unpin <= n.top ? !1 : "bottom" : t - i >= o + r ? !1 : "bottom";
                    var f = null == this.affixed,
                        a = f ? o : n.top,
                        h = f ? r : e;
                    return null != s && s >= a ? "top" : null != i && a + h >= t - i ? "bottom" : !1
                }, s.prototype.getPinnedOffset = function () {
                    if (this.pinnedOffset) return this.pinnedOffset;
                    this.$element.removeClass(s.RESET).addClass("affix");
                    var t = this.$target.scrollTop(),
                        e = this.$element.offset();
                    return this.pinnedOffset = e.top - t
                }, s.prototype.checkPositionWithEventLoop = function () {
                    setTimeout(t.proxy(this.checkPosition, this), 1)
                }, s.prototype.checkPosition = function () {
                    if (this.$element.is(":visible")) {
                        var e = this.$element.height(),
                            i = this.options.offset,
                            o = i.top,
                            n = i.bottom,
                            r = t("body").height();
                        "object" != typeof i && (n = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof n && (n = i.bottom(this.$element));
                        var f = this.getState(r, e, o, n);
                        if (this.affixed != f) {
                            null != this.unpin && this.$element.css("top", "");
                            var a = "affix" + (f ? "-" + f : ""),
                                h = t.Event(a + ".bs.affix");
                            if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                            this.affixed = f, this.unpin = "bottom" == f ? this.getPinnedOffset() : null, this.$element.removeClass(s.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
                        }
                        "bottom" == f && this.$element.offset({
                            top: r - e - n
                        })
                    }
                };
                var i = t.fn.affix;
                t.fn.affix = e, t.fn.affix.Constructor = s, t.fn.affix.noConflict = function () {
                    return t.fn.affix = i, this
                }, t(window).on("load", function () {
                    t('[data-spy="affix"]').each(function () {
                        var s = t(this),
                            i = s.data();
                        i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(s, i)
                    })
                })
            }(jQuery), +

            function (t) {
                "use strict";

                function e(s, i) {
                    var o = t.proxy(this.process, this);
                    this.$body = t("body"), this.$scrollElement = t(t(s).is("body") ? window : s), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav-bar li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
                }
                function s(s) {
                    return this.each(function () {
                        var i = t(this),
                            o = i.data("bs.scrollspy"),
                            n = "object" == typeof s && s;
                        o || i.data("bs.scrollspy", o = new e(this, n)), "string" == typeof s && o[s]()
                    })
                }

                e.VERSION = "3.3.1", e.DEFAULTS = {
                    offset: 10
                }, e.prototype.getScrollHeight = function () {
                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                }, e.prototype.refresh = function () {
                    var e = "offset",
                        s = 0;
                    t.isWindow(this.$scrollElement[0]) || (e = "position", s = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
                    var i = this;
                    this.$body.find(this.selector).map(function () {
                        var i = t(this),
                            o = i.data("target") || i.attr("href"),
                            n = /^#./.test(o) && t(o);
                        return n && n.length && n.is(":visible") && [
                            [n[e]().top + s, o]
                        ] || null
                    }).sort(function (t, e) {
                        return t[0] - e[0]
                    }).each(function () {
                        i.offsets.push(this[0]), i.targets.push(this[1])
                    })
                }, e.prototype.process = function () {
                    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                        s = this.getScrollHeight(),
                        i = this.options.offset + s - this.$scrollElement.height(),
                        o = this.offsets,
                        n = this.targets,
                        r = this.activeTarget;
                    if (this.scrollHeight != s && this.refresh(), e >= i) return r != (t = n[n.length - 1]) && this.activate(t);
                    if (r && e < o[0]) return this.activeTarget = null, this.clear();
                    for (t = o.length; t--;) r != n[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(n[t])
                }, e.prototype.activate = function (e) {
                    this.activeTarget = e, this.clear();
                    var s = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                        i = t(s).parents("li").addClass("active");
                    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
                }, e.prototype.clear = function () {
                    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                };
                var i = t.fn.scrollspy;
                t.fn.scrollspy = s, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
                    return t.fn.scrollspy = i, this
                }, t(window).on("load.bs.scrollspy.data-api", function () {
                    t('[data-spy="scroll"]').each(function () {
                        var e = t(this);
                        s.call(e, e.data())
                    })
                })
            }(jQuery), $("body").scrollspy({
                target: "#bs-docs-sidebar"
            }), $("#bs-docs-sidebar").affix({
                offset: {
                    top: 240,
                    bottom: function () {
                        return this.bottom = $(".footer").outerHeight(!0) + $(".cta").outerHeight(!0) + 200
                    }
                }
            }), $(function () {
                $("a[href*=\\#]:not([href=\\#])").click(function () {
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                        var t = $(this.hash);
                        if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                            scrollTop: t.offset().top - 240
                        }, 1e3), !1
                    }
                })
            });
    }
}

