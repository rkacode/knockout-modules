/*
 * jQuery BlockUI; v20141123
 * http://jquery.malsup.com/block/
 * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
 */
(function () {
    "use strict";
    function e(e) {
        function o(o, i) {
            var s, h, k = o == window, v = i && void 0 !== i.message ? i.message : void 0;
            if (i = e.extend({}, e.blockUI.defaults, i || {}), !i.ignoreIfBlocked || !e(o).data("blockUI.isBlocked")) {
                if (i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {}), v = void 0 === v ? i.message : v, k && b && t(window, {fadeOut: 0}), v && "string" != typeof v && (v.parentNode || v.jquery)) {
                    var y = v.jquery ? v[0] : v, m = {};
                    e(o).data("blockUI.history", m), m.el = y, m.parent = y.parentNode, m.display = y.style.display, m.position = y.style.position, m.parent && m.parent.removeChild(y)
                }
                e(o).data("blockUI.onUnblock", i.onUnblock);
                var g, I, w, U, x = i.baseZ;
                g = r || i.forceIframe ? e('<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>') : e('<div class="blockUI" style="display:none"></div>'), I = i.theme ? e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>') : e('<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), i.theme && k ? (U = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', i.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : i.theme ? (U = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', i.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), v && (i.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), i.theme || I.css(i.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || i.forceIframe) && g.css("opacity", 0);
                var C = [g, I, w], S = k ? e("body") : e(o);
                e.each(C, function () {
                    this.appendTo(S)
                }), i.theme && i.draggable && e.fn.draggable && w.draggable({handle: ".ui-dialog-titlebar", cancel: "li"});
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : o).length > 0);
                if (u || O) {
                    if (k && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k)var E = d(o, "borderTopWidth"), T = d(o, "borderLeftWidth"), M = E ? "(0 - " + E + ")" : 0, B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function (e, o) {
                        var t = o[0].style;
                        if (t.position = "absolute", 2 > e)k ? t.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') : t.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? t.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : t.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && t.setExpression("left", B), M && t.setExpression("top", M); else if (i.centerY)k && t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), t.marginTop = 0; else if (!i.centerY && k) {
                            var n = i.css && i.css.top ? parseInt(i.css.top, 10) : 0, s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + n + ') + "px"';
                            t.setExpression("top", s)
                        }
                    })
                }
                if (v && (i.theme ? w.find(".ui-widget-content").append(v) : w.append(v), (v.jquery || v.nodeType) && e(v).show()), (r || i.forceIframe) && i.showOverlay && g.show(), i.fadeIn) {
                    var j = i.onBlock ? i.onBlock : c, H = i.showOverlay && !v ? j : c, z = v ? j : c;
                    i.showOverlay && I._fadeIn(i.fadeIn, H), v && w._fadeIn(i.fadeIn, z)
                } else i.showOverlay && I.show(), v && w.show(), i.onBlock && i.onBlock.bind(w)();
                if (n(1, o, i), k ? (b = w[0], p = e(i.focusableElements, b), i.focusInput && setTimeout(l, 20)) : a(w[0], i.centerX, i.centerY), i.timeout) {
                    var W = setTimeout(function () {
                        k ? e.unblockUI(i) : e(o).unblock(i)
                    }, i.timeout);
                    e(o).data("blockUI.timeout", W)
                }
            }
        }

        function t(o, t) {
            var s, l = o == window, a = e(o), d = a.data("blockUI.history"), c = a.data("blockUI.timeout");
            c && (clearTimeout(c), a.removeData("blockUI.timeout")), t = e.extend({}, e.blockUI.defaults, t || {}), n(0, o, t), null === t.onUnblock && (t.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), t.cursorReset && (r.length > 1 && (r[1].style.cursor = t.cursorReset), r.length > 2 && (r[2].style.cursor = t.cursorReset)), l && (b = p = null), t.fadeOut ? (s = r.length, r.stop().fadeOut(t.fadeOut, function () {
                0 === --s && i(r, d, t, o)
            })) : i(r, d, t, o)
        }

        function i(o, t, i, n) {
            var s = e(n);
            if (!s.data("blockUI.isBlocked")) {
                o.each(function () {
                    this.parentNode && this.parentNode.removeChild(this)
                }), t && t.el && (t.el.style.display = t.display, t.el.style.position = t.position, t.el.style.cursor = "default", t.parent && t.parent.appendChild(t.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof i.onUnblock && i.onUnblock(n, i);
                var l = e(document.body), a = l.width(), d = l[0].style.width;
                l.width(a - 1).width(a), l[0].style.width = d
            }
        }

        function n(o, t, i) {
            var n = t == window, l = e(t);
            if ((o || (!n || b) && (n || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", o), n && i.bindEvents && (!o || i.showOverlay))) {
                var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                o ? e(document).bind(a, i, s) : e(document).unbind(a, s)
            }
        }

        function s(o) {
            if ("keydown" === o.type && o.keyCode && 9 == o.keyCode && b && o.data.constrainTabKey) {
                var t = p, i = !o.shiftKey && o.target === t[t.length - 1], n = o.shiftKey && o.target === t[0];
                if (i || n)return setTimeout(function () {
                    l(n)
                }, 10), !1
            }
            var s = o.data, a = e(o.target);
            return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(o), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (p) {
                var o = p[e === !0 ? p.length - 1 : 0];
                o && o.focus()
            }
        }

        function a(e, o, t) {
            var i = e.parentNode, n = e.style, s = (i.offsetWidth - e.offsetWidth) / 2 - d(i, "borderLeftWidth"), l = (i.offsetHeight - e.offsetHeight) / 2 - d(i, "borderTopWidth");
            o && (n.left = s > 0 ? s + "px" : "0"), t && (n.top = l > 0 ? l + "px" : "0")
        }

        function d(o, t) {
            return parseInt(e.css(o, t), 10) || 0
        }

        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function () {
        }, r = /MSIE/.test(navigator.userAgent), u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent);
        document.documentMode || 0;
        var f = e.isFunction(document.createElement("div").style.setExpression);
        e.blockUI = function (e) {
            o(window, e)
        }, e.unblockUI = function (e) {
            t(window, e)
        }, e.growlUI = function (o, t, i, n) {
            var s = e('<div class="growlUI"></div>');
            o && s.append("<h1>" + o + "</h1>"), t && s.append("<h2>" + t + "</h2>"), void 0 === i && (i = 3e3);
            var l = function (o) {
                o = o || {}, e.blockUI({message: s, fadeIn: o.fadeIn !== void 0 ? o.fadeIn : 700, fadeOut: o.fadeOut !== void 0 ? o.fadeOut : 1e3, timeout: o.timeout !== void 0 ? o.timeout : i, centerY: !1, showOverlay: !1, onUnblock: n, css: e.blockUI.defaults.growlCSS})
            };
            l(), s.css("opacity"), s.mouseover(function () {
                l({fadeIn: 0, timeout: 3e4});
                var o = e(".blockMsg");
                o.stop(), o.fadeTo(300, 1)
            }).mouseout(function () {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function (t) {
            if (this[0] === window)return e.blockUI(t), this;
            var i = e.extend({}, e.blockUI.defaults, t || {});
            return this.each(function () {
                var o = e(this);
                i.ignoreIfBlocked && o.data("blockUI.isBlocked") || o.unblock({fadeOut: 0})
            }), this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, o(this, t)
            })
        }, e.fn.unblock = function (o) {
            return this[0] === window ? (e.unblockUI(o), this) : this.each(function () {
                t(this, o)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: {padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait"}, themedCSS: {width: "30%", top: "40%", left: "35%"}, overlayCSS: {backgroundColor: "#000", opacity: .6, cursor: "wait"}, cursorReset: "default", growlCSS: {width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px"}, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1};
        var b = null, p = []
    }

    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
})();