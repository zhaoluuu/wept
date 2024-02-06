(() => {
    "use strict";
    var e = {
            5185: (e, t, n) => {
                n.d(t, {
                    Z: () => a
                });
                var s = n(5785),
                    o = n.n(s),
                    i = n(8050),
                    r = n.n(i)()(o());
                r.push([e.id, "body,\nbody wx-input,\nbody wx-input input,\nbody wx-input div {\n  font-family: system-ui;\n}\n@font-face {\n  font-family: PingFangSC;\n  src: local('PingFang SC Thin');\n  font-weight: 100;\n}\n@font-face {\n  font-family: PingFangSC;\n  src: local('PingFang SC Light');\n  font-weight: 300;\n}\n@font-face {\n  font-family: PingFangSC;\n  src: local('PingFang SC Regular');\n  font-weight: 400;\n}\n@font-face {\n  font-family: PingFangSC;\n  src: local('PingFang SC Medium');\n  font-weight: 500;\n}\n@font-face {\n  font-family: PingFangSC;\n  src: local('PingFang SC Semibold');\n  font-weight: 600;\n}\n", ""]);
                const a = r
            },
            3023: (e, t, n) => {
                n.d(t, {
                    Z: () => a
                });
                var s = n(5785),
                    o = n.n(s),
                    i = n(8050),
                    r = n.n(i)()(o());
                r.push([e.id, ".web_view_wrapper {\n  z-index: 9999 !important;\n  position: fixed !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.web_view_wrapper .web_view {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.web_view_wrapper > .process_bar {\n  width: 100%;\n  height: 2px;\n  background-color: #44c165;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform-origin: 0 0;\n  transform: scaleX(0);\n}\n", ""]);
                const a = r
            },
            8050: e => {
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var n = "",
                                s = void 0 !== t[5];
                            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), s && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), s && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                        })).join("")
                    }, t.i = function(e, n, s, o, i) {
                        "string" == typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var r = {};
                        if (s)
                            for (var a = 0; a < this.length; a++) {
                                var c = this[a][0];
                                null != c && (r[c] = !0)
                            }
                        for (var l = 0; l < e.length; l++) {
                            var u = [].concat(e[l]);
                            s && r[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u))
                        }
                    }, t
                }
            },
            5785: e => {
                e.exports = function(e) {
                    return e[1]
                }
            },
            1883: e => {
                var t = Object.prototype.hasOwnProperty,
                    n = "~";

                function s() {}

                function o(e, t, n) {
                    this.fn = e, this.context = t, this.once = n || !1
                }

                function i(e, t, s, i, r) {
                    if ("function" != typeof s) throw new TypeError("The listener must be a function");
                    var a = new o(s, i || e, r),
                        c = n ? n + t : t;
                    return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], a] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++), e
                }

                function r(e, t) {
                    0 == --e._eventsCount ? e._events = new s : delete e._events[t]
                }

                function a() {
                    this._events = new s, this._eventsCount = 0
                }
                Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (n = !1)), a.prototype.eventNames = function() {
                    var e, s, o = [];
                    if (0 === this._eventsCount) return o;
                    for (s in e = this._events) t.call(e, s) && o.push(n ? s.slice(1) : s);
                    return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o
                }, a.prototype.listeners = function(e) {
                    var t = n ? n + e : e,
                        s = this._events[t];
                    if (!s) return [];
                    if (s.fn) return [s.fn];
                    for (var o = 0, i = s.length, r = new Array(i); o < i; o++) r[o] = s[o].fn;
                    return r
                }, a.prototype.listenerCount = function(e) {
                    var t = n ? n + e : e,
                        s = this._events[t];
                    return s ? s.fn ? 1 : s.length : 0
                }, a.prototype.emit = function(e, t, s, o, i, r) {
                    var a = n ? n + e : e;
                    if (!this._events[a]) return !1;
                    var c, l, u = this._events[a],
                        d = arguments.length;
                    if (u.fn) {
                        switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
                            case 1:
                                return u.fn.call(u.context), !0;
                            case 2:
                                return u.fn.call(u.context, t), !0;
                            case 3:
                                return u.fn.call(u.context, t, s), !0;
                            case 4:
                                return u.fn.call(u.context, t, s, o), !0;
                            case 5:
                                return u.fn.call(u.context, t, s, o, i), !0;
                            case 6:
                                return u.fn.call(u.context, t, s, o, i, r), !0
                        }
                        for (l = 1, c = new Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
                        u.fn.apply(u.context, c)
                    } else {
                        var f, h = u.length;
                        for (l = 0; l < h; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d) {
                            case 1:
                                u[l].fn.call(u[l].context);
                                break;
                            case 2:
                                u[l].fn.call(u[l].context, t);
                                break;
                            case 3:
                                u[l].fn.call(u[l].context, t, s);
                                break;
                            case 4:
                                u[l].fn.call(u[l].context, t, s, o);
                                break;
                            default:
                                if (!c)
                                    for (f = 1, c = new Array(d - 1); f < d; f++) c[f - 1] = arguments[f];
                                u[l].fn.apply(u[l].context, c)
                        }
                    }
                    return !0
                }, a.prototype.on = function(e, t, n) {
                    return i(this, e, t, n, !1)
                }, a.prototype.once = function(e, t, n) {
                    return i(this, e, t, n, !0)
                }, a.prototype.removeListener = function(e, t, s, o) {
                    var i = n ? n + e : e;
                    if (!this._events[i]) return this;
                    if (!t) return r(this, i), this;
                    var a = this._events[i];
                    if (a.fn) a.fn !== t || o && !a.once || s && a.context !== s || r(this, i);
                    else {
                        for (var c = 0, l = [], u = a.length; c < u; c++)(a[c].fn !== t || o && !a[c].once || s && a[c].context !== s) && l.push(a[c]);
                        l.length ? this._events[i] = 1 === l.length ? l[0] : l : r(this, i)
                    }
                    return this
                }, a.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = n ? n + e : e, this._events[t] && r(this, t)) : (this._events = new s, this._eventsCount = 0), this
                }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a
            },
            8930: (e, t, n) => {
                n.r(t), n.d(t, {
                    default: () => m
                });
                var s = n(7576),
                    o = n.n(s),
                    i = n(2297),
                    r = n.n(i),
                    a = n(1670),
                    c = n.n(a),
                    l = n(5133),
                    u = n.n(l),
                    d = n(3141),
                    f = n.n(d),
                    h = n(2527),
                    p = n.n(h),
                    g = n(5185),
                    v = {};
                v.styleTagTransform = p(), v.setAttributes = u(), v.insert = c().bind(null, "head"), v.domAPI = r(), v.insertStyleElement = f(), o()(g.Z, v);
                const m = g.Z && g.Z.locals ? g.Z.locals : void 0
            },
            6059: (e, t, n) => {
                n.r(t), n.d(t, {
                    default: () => m
                });
                var s = n(7576),
                    o = n.n(s),
                    i = n(2297),
                    r = n.n(i),
                    a = n(1670),
                    c = n.n(a),
                    l = n(5133),
                    u = n.n(l),
                    d = n(3141),
                    f = n.n(d),
                    h = n(2527),
                    p = n.n(h),
                    g = n(3023),
                    v = {};
                v.styleTagTransform = p(), v.setAttributes = u(), v.insert = c().bind(null, "head"), v.domAPI = r(), v.insertStyleElement = f(), o()(g.Z, v);
                const m = g.Z && g.Z.locals ? g.Z.locals : void 0
            },
            7576: e => {
                var t = [];

                function n(e) {
                    for (var n = -1, s = 0; s < t.length; s++)
                        if (t[s].identifier === e) {
                            n = s;
                            break
                        } return n
                }

                function s(e, s) {
                    for (var i = {}, r = [], a = 0; a < e.length; a++) {
                        var c = e[a],
                            l = s.base ? c[0] + s.base : c[0],
                            u = i[l] || 0,
                            d = "".concat(l, " ").concat(u);
                        i[l] = u + 1;
                        var f = n(d),
                            h = {
                                css: c[1],
                                media: c[2],
                                sourceMap: c[3],
                                supports: c[4],
                                layer: c[5]
                            };
                        if (-1 !== f) t[f].references++, t[f].updater(h);
                        else {
                            var p = o(h, s);
                            s.byIndex = a, t.splice(a, 0, {
                                identifier: d,
                                updater: p,
                                references: 1
                            })
                        }
                        r.push(d)
                    }
                    return r
                }

                function o(e, t) {
                    var n = t.domAPI(t);
                    return n.update(e),
                        function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                                n.update(e = t)
                            } else n.remove()
                        }
                }
                e.exports = function(e, o) {
                    var i = s(e = e || [], o = o || {});
                    return function(e) {
                        e = e || [];
                        for (var r = 0; r < i.length; r++) {
                            var a = n(i[r]);
                            t[a].references--
                        }
                        for (var c = s(e, o), l = 0; l < i.length; l++) {
                            var u = n(i[l]);
                            0 === t[u].references && (t[u].updater(), t.splice(u, 1))
                        }
                        i = c
                    }
                }
            },
            1670: e => {
                var t = {};
                e.exports = function(e, n) {
                    var s = function(e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                            t[e] = n
                        }
                        return t[e]
                    }(e);
                    if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    s.appendChild(n)
                }
            },
            3141: e => {
                e.exports = function(e) {
                    var t = document.createElement("style");
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
                }
            },
            5133: (e, t, n) => {
                e.exports = function(e) {
                    var t = n.nc;
                    t && e.setAttribute("nonce", t)
                }
            },
            2297: e => {
                e.exports = function(e) {
                    var t = e.insertStyleElement(e);
                    return {
                        update: function(n) {
                            ! function(e, t, n) {
                                var s = "";
                                n.supports && (s += "@supports (".concat(n.supports, ") {")), n.media && (s += "@media ".concat(n.media, " {"));
                                var o = void 0 !== n.layer;
                                o && (s += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), s += n.css, o && (s += "}"), n.media && (s += "}"), n.supports && (s += "}");
                                var i = n.sourceMap;
                                i && "undefined" != typeof btoa && (s += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(s, e, t.options)
                            }(t, e, n)
                        },
                        remove: function() {
                            ! function(e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e)
                            }(t)
                        }
                    }
                }
            },
            2527: e => {
                e.exports = function(e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e))
                    }
                }
            },
            2853: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WeixinJSBridge = void 0;
                const o = s(n(4805)),
                    i = s(n(4129)),
                    r = "[APP_PAGE_BRIDGE]",
                    a = {},
                    c = {
                        invoke(e, t, n) {
                            o.default.info(r, "invoke", e), "getPluginPermissionBytes" !== e ? i.default.channel.send("jsbridge_invoke", {
                                name: e,
                                args: t,
                                privateArgs: {}
                            }).then((e => {
                                n?.(e)
                            })) : ((e, t) => {
                                const {
                                    pluginList: n
                                } = e, s = {}, o = globalThis.__pluginPermissionBytes;
                                if (!Array.isArray(n)) return t({
                                    errMsg: "getPluginPermissionBytes:fail"
                                });
                                n.forEach((({
                                    indexes: e,
                                    pluginId: t
                                }) => {
                                    const n = o[t],
                                        i = e.map((e => void 0 === o ? 1 : n[e]));
                                    s[t] = i
                                })), t({
                                    pluginPermissionMap: s,
                                    errMsg: "getPluginPermissionBytes:ok"
                                })
                            })(t, n)
                        },
                        on(e, t) {
                            a[e] = t
                        },
                        subscribe(e, t) {
                            a[`custom_event_${e}`] = t
                        },
                        publish(e, t) {
                            o.default.info(r, "publish", e),
                                function(e, t) {
                                    const n = [];
                                    switch (e) {
                                        case "custom_event_onCameraFrame":
                                            n.push(t.data.videoData);
                                            break;
                                        case "custom_event_onCanvasMethodCallback":
                                            n.push(t.data.data)
                                    }
                                    i.default.channel.send("jsbridge_subscribe_handler", {
                                        name: e,
                                        data: n.length ? t : JSON.parse(JSON.stringify(t)),
                                        webviewId: i.default.id
                                    }, {
                                        transfer: n
                                    })
                                }(`${e.replace(/'|"/g,"")}`, t)
                        },
                        subscribeHandler(e, ...t) {
                            "function" == typeof a[e] && a[e](...t)
                        }
                    };
                t.WeixinJSBridge = c
            },
            4129: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const o = s(n(9954));
                n(8930);
                const i = new o.default;
                t.default = i
            },
            9954: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const o = s(n(4805)),
                    i = n(838),
                    r = n(2853),
                    a = n(1763),
                    c = n(543),
                    l = n(2185),
                    u = n(9678),
                    d = "[APPPAGE]";
                t.default = class {
                    get id() {
                        return window.__pageId__
                    }
                    get jsBridge() {
                        return r.WeixinJSBridge
                    }
                    channel = (0, i.getCompatibleWindowMessageChannel)(window.parent);constructor() {
                        this._protect(), this._initLibs(), this._initChannel(), this._initGlobalObjs(), this._initListener(), (0, c.preventPinchZoomEvent)()
                    }
                    _protect() {
                        (0, u.freezeWindowVariables)()
                    }
                    _initLibs() {}
                    _initGlobalObjs() {
                        window.useGlobalJSBridge = !0, window.WeixinJSBridge = this.jsBridge, window.__wxConfig = {
                            preload: !0
                        }, window.transferControlToOffscreen = (e, t) => {
                            const n = e.transferControlToOffscreen();
                            o.default.info(d, `send save_off_screen_canvas event. canvasNumber=${t}`), this.channel.send("save_off_screen_canvas", {
                                canvas: n,
                                canvasNumber: t
                            }, {
                                transfer: [n]
                            })
                        }
                    }
                    _initChannel() {
                        this.channel.on("eval", (e => {
                            if ("function" == typeof window.__systemLog) {
                                const e = window.__systemLog;
                                o.default.setContextTag(`PAGE-${this.id}`), o.default.info("start init page systemLog"), o.default.on("updateLogs", (({
                                    logs: t
                                }) => {
                                    e(t)
                                })), delete window.__systemLog
                            } else o.default.contextTag || o.default.error("systemLog method init error!");
                            o.default.info(d, `received eval code. length: ${e.codes.length}; srcs=${e.codes.map((e=>e.src)).join(",")}`), (0, l.evalCodeList)(e.codes)
                        })), this.channel.on("eval_with_return", (({
                            code: e
                        }) => {
                            o.default.info(d, `detect eval_with_return event. codelen=${e.length}`);
                            try {
                                const t = window.eval(e);
                                return void 0 === t ? "<undefined>" : t
                            } catch (e) {
                                return `<ERROR> ${e.message}`
                            }
                        })), this.channel.on("inject", (e => (o.default.info(d, "received inject. src:", e.src), new Promise((t => {
                            const n = document.createElement("script");
                            n.src = e.src, n.onload = () => {
                                t()
                            }, document.body.appendChild(n)
                        }))))), this.channel.on("jsbridge_subscribe_handler", (e => {
                            r.WeixinJSBridge.subscribeHandler(e.name, e.data, 0)
                        })), this.channel.on("focus", window.focus.bind(window)), this.channel.on("operate_webview", a.onOperateWebView), this.channel.on("try_webview_goback", a.onTryWebviewGoBack), this.channel.on("get_webview_info", a.onGetWebViewInfo)
                    }
                    _initListener() {
                        document.addEventListener("keyup", (e => {
                            27 === e.keyCode && document.webkitIsFullScreen && (o.default.info(d, "detect user enter esc code when fullScreen. exit fullscreen"), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullScreen())
                        }))
                    }
                }
            },
            1763: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.onGetWebViewInfo = t.onTryWebviewGoBack = t.onOperateWebView = void 0;
                const o = s(n(4805)),
                    i = s(n(5281)),
                    r = s(n(4129)),
                    a = "[APPPAGE_WEBVIEW]",
                    c = {};
                t.onOperateWebView = async e => {
                    let t;
                    switch (o.default.info(a, `received OperateWebView. type: ${e.method}, id: ${e.id}`), e.method) {
                        case "insert":
                            if (Object.keys(c).length > 0) break;
                            t = new i.default({
                                showProcessBar: !0,
                                id: e.id,
                                checkDomain: !1,
                                backgroundColor: e.backgroundColor
                            }), e.src && await t.load(e.src), t.mount(document.body), window.focus(), c[e.id] = t, r.default.jsBridge.subscribeHandler("onWebviewStartLoad", {
                                htmlId: e.id,
                                src: e.src
                            }), t.on("finish_load", (({
                                src: t
                            }) => {
                                r.default.jsBridge.subscribeHandler("onWebviewFinishLoad", {
                                    htmlId: e.id,
                                    src: t
                                })
                            })), t.on("title_change", (({
                                title: e
                            }) => {
                                r.default.channel.send("set_title", {
                                    title: e
                                })
                            })), t.channel.get().then((t => {
                                t.on("jsbridge_invoke", (t => (o.default.info(a, `received invoke from web-view tag. method=${t.data.name}`), "invokeMiniProgramAPI" === t.name && r.default.channel.send("jsbridge_subscribe_handler", {
                                    name: "onWebInvokeAppService",
                                    data: {
                                        name: t.data.name,
                                        arg: t.data.arg,
                                        htmlId: e.id
                                    },
                                    webviewId: r.default.id
                                }), {})))
                            }));
                            break;
                        case "update":
                            if (t = c[e.id], !t) break;
                            e.src && await t.load(e.src), e.backgroundColor && t.updateBackgroundColor(e.backgroundColor);
                            break;
                        case "remove":
                            t = c[e.id], t.destory(), delete c[e.id];
                            break;
                        default:
                            return void o.default.warn(`detect unknown operate_webview command=${e.method}`)
                    }
                }, t.onTryWebviewGoBack = () => {
                    if (Object.keys(c).length > 0) {
                        const e = Object.keys(c)[0],
                            t = c[e];
                        if (t.canGoBack()) return t.goBack(), !0
                    }
                    return !1
                }, t.onGetWebViewInfo = () => {
                    const e = Object.keys(c).length > 0,
                        t = {
                            hasWebViewTag: Object.keys(c).length > 0
                        };
                    return e && (t.webviewUrl = Object.values(c)[0].lastLoadUrl || ""), t
                }
            },
            4762: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isValidUrl = void 0, t.isValidUrl = function(e, t) {
                    return "skip" === e ? Promise.resolve(!0) : new Promise((n => {
                        globalThis.WeixinJSBridge.invoke("checkNetworkAPIURL", {
                            api: e,
                            url: t
                        }, (e => {
                            n(e.isInDomainList)
                        }))
                    }))
                }
            },
            2185: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.evalCodeList = t.evalCode = t.tryCacheRunCode = t.CodeType = void 0;
                const o = s(n(4805)),
                    i = n(6832);
                var r;
                ! function(e) {
                    e.usr = "usr", e.lib = "lib", e.unknown = "unknown", e.inline = "inline", e.combine = "combine"
                }(r = t.CodeType || (t.CodeType = {}));
                const a = "[EVALCODE]";
                let c;
                t.tryCacheRunCode = () => {
                    c || ("function" == typeof globalThis.runCode ? (c = globalThis.runCode, globalThis.runCode = void 0, o.default.info(a, "cached runCode method.")) : o.default.error(a, "no runCode method!"))
                }, (0, t.tryCacheRunCode)(), t.evalCode = e => {
                    (0, t.tryCacheRunCode)();
                    const n = ((e = "__unknown__", t) => t === r.inline || t === r.unknown || t === r.combine ? "" : `${t}/${(0,i.trimStart)(e,"/")}`)(e.src, e.type);
                    return o.default.info(a, `on eval code. src=${e.src}, type=${e.type}, codelen=${e.code.length}, evalPath=${n}`), c(e.code, n)
                }, t.evalCodeList = e => {
                    (0, t.tryCacheRunCode)(), e.forEach((e => {
                        (0, t.evalCode)(e)
                    }))
                }
            },
            4805: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = n(1883),
                    o = n(9141);
                var i;
                ! function(e) {
                    e.L = "L", e.I = "I", e.W = "E", e.E = "E"
                }(i || (i = {})), globalThis.console.log, globalThis.console.info, globalThis.console.warn, globalThis.console.error;
                class r extends s.EventEmitter {
                    constructor() {
                        super()
                    }
                    contextTag = "";
                    setContextTag(e) {
                        this.contextTag = e
                    }
                    getLogHeader(e) {
                        return `[${this.contextTag}] [${e}]`
                    }
                    formatLogInfo(...e) {
                        return [...e.map((e => (0, o.transformArg)(e)))]
                    }
                    cacheLogs = [];
                    _idleCallback;
                    updateLogs() {
                        "number" != typeof this._idleCallback && (this._idleCallback = requestIdleCallback((() => {
                            this.emit("updateLogs", {
                                logs: this.cacheLogs
                            }), this.cacheLogs = [], this._idleCallback = void 0
                        })))
                    }
                    debug(...e) {}
                    info(...e) {
                        const t = this.getLogHeader(i.I),
                            n = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${n}`), this.updateLogs()
                    }
                    warn(...e) {
                        const t = this.getLogHeader(i.W),
                            n = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${n}`), this.updateLogs()
                    }
                    error(...e) {
                        const t = this.getLogHeader(i.E),
                            n = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${n}`), this.updateLogs()
                    }
                }
                const a = new r;
                t.default = a
            },
            9141: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.transformArg = void 0, t.transformArg = e => {
                    if (e instanceof Error) return `${e.message}\n${e.stack}`;
                    if (e && "string" == typeof e.stack && "string" == typeof e.message) return `${e.message}\n${e.stack}`;
                    switch (typeof e) {
                        case "bigint":
                        case "boolean":
                        case "function":
                        case "number":
                        case "symbol":
                            return e.toString();
                        case "string":
                            return e;
                        case "undefined":
                            return "undefined";
                        case "object": {
                            let t;
                            try {
                                t = JSON.stringify(e)
                            } catch (e) {
                                t = "[对象含有循环引用]"
                            }
                            return t
                        }
                        default:
                            return
                    }
                }
            },
            6832: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.clamp = t.trimStart = t.trim = t.randFileName = t.bufferToArray = t.noop = void 0, t.noop = (...e) => {}, t.bufferToArray = function(e) {
                    return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                }, t.randFileName = function(e = "") {
                    return (Date.now() + Math.random()).toString(16).replace(".", "_") + e
                }, t.trim = (e, t = " ") => {
                    t || (t = "s\ufeff ");
                    const n = new RegExp(`^[${t}]+|[${t}]+$`, "g");
                    return e.replace(n, "")
                }, t.trimStart = (e, t = " ") => {
                    t || (t = "s\ufeff ");
                    const n = new RegExp(`^[${t}]+`, "g");
                    return e.replace(n, "")
                }, t.clamp = function(e, t, n) {
                    return Math.max(t, Math.min(e, n))
                }
            },
            4620: (e, t) => {
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.waitAnimationFrame = t.waitTimeout = t.AsyncQueue = t.AsyncMutex = t.createAsyncRef = t.Waiting = t.AsyncValue = void 0,
                    function(e) {
                        e[e.PENDING = 0] = "PENDING", e[e.RESOLVE = 1] = "RESOLVE", e[e.REJECT = 2] = "REJECT"
                    }(n || (n = {}));
                class s {
                    value;
                    state = n.PENDING;
                    pendingRequest;
                    resolvePending = null;
                    rejectPending = null;
                    async get() {
                        return this.state === n.RESOLVE ? this.value : this.state === n.REJECT ? Promise.reject(this.value) : (this.pendingRequest || (this.pendingRequest = new Promise(((e, t) => {
                            this.resolvePending = e, this.rejectPending = t
                        }))), this.pendingRequest)
                    }
                    getSync() {
                        return this.state === n.PENDING ? void 0 : this.value
                    }
                    set(e, t = !1) {
                        if (this.state !== n.PENDING) throw new Error("forbidden: set value more than once");
                        this.value = e, t ? (this.state = n.REJECT, this.rejectPending && this.rejectPending(this.value)) : (this.state = n.RESOLVE, this.resolvePending && this.resolvePending(this.value)), this.resolvePending = null, this.rejectPending = null, this.pendingRequest = null
                    }
                    isPending() {
                        return this.state === n.PENDING
                    }
                    isResolved() {
                        return this.state === n.RESOLVE
                    }
                    isRejected() {
                        return this.state === n.REJECT
                    }
                }
                t.AsyncValue = s, t.Waiting = class {
                    value = new s;
                    async waitUntil(e) {
                        const t = await this.value.get();
                        return "function" == typeof e && await e(t), t
                    }
                    done(e) {
                        this.value.set(e)
                    }
                }, t.createAsyncRef = function() {
                    const e = new s;
                    return {
                        ref(t) {
                            null != t && t !== e.getSync() && e.set(t)
                        },
                        get current() {
                            return e.get()
                        },
                        get currentSync() {
                            return e.getSync()
                        }
                    }
                }, t.AsyncMutex = class {
                    _lockPromise;
                    _resolveHandler;
                    lock() {
                        if (this._lockPromise) throw new Error("mutex is locked!");
                        this._lockPromise = new Promise((e => {
                            this._resolveHandler = e
                        }))
                    }
                    unlock() {
                        this._resolveHandler(), this._lockPromise = void 0
                    }
                    waitUnlock() {
                        return this._lockPromise
                    }
                    async requestLock() {
                        return await this.waitUnlock(), this.lock()
                    }
                }, t.AsyncQueue = class {
                    _queues = [];
                    async requestTask(e) {
                        const t = this._queues.length > 0 ? this._queues[this._queues.length - 1] : void 0;
                        let n;
                        const s = new Promise((e => {
                                n = e
                            })),
                            o = {
                                resolveHandler: n,
                                taskPromise: s
                            };
                        return this._queues.push(o), t && await (t?.taskPromise), "number" == typeof e && setTimeout((() => {
                            this._queues.includes(o) && n()
                        }), e), {
                            done: () => {
                                console.assert(o === this._queues.shift()), n()
                            }
                        }
                    }
                }, t.waitTimeout = e => new Promise((t => {
                    setTimeout(t, e)
                })), t.waitAnimationFrame = () => new Promise((e => {
                    requestAnimationFrame(e)
                }))
            },
            2984: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LogArguments = t.WaitAsyncValue = void 0;
                const o = s(n(4805));
                t.WaitAsyncValue = e => function(t, n, s) {
                    const o = s.value;
                    "function" == typeof o && (s.value = async function(...t) {
                        return await e.get(), o.apply(this, t)
                    })
                };
                const i = (async () => {}).__proto__.constructor;
                t.LogArguments = (e = "DEFAULT", t = {}) => function(n, s, r) {
                    const a = r.value;
                    if ("function" == typeof a) {
                        if (a instanceof i) return void(r.value = async function(...n) {
                            o.default.info(`[${e}] invoke async ${s} arguments:`, n);
                            const i = await a.apply(this, n);
                            return t.onlyArguments || o.default.info(`[${e}] invoke async ${s} return:`, i), i
                        });
                        r.value = function(...n) {
                            o.default.info(`[${e}] invoke sync ${s} arguments:`, n);
                            const i = a.apply(this, n);
                            return t.onlyArguments || o.default.info(`[${e}] invoke sync ${s} return:`, i), i
                        }
                    }
                }
            },
            5281: function(e, t, n) {
                var s = this && this.__decorate || function(e, t, n, s) {
                        var o, i = arguments.length,
                            r = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, n) : s;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, s);
                        else
                            for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (r = (i < 3 ? o(r) : i > 3 ? o(t, n, r) : o(t, n)) || r);
                        return i > 3 && r && Object.defineProperty(t, n, r), r
                    },
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(1836),
                    r = n(1883),
                    a = n(4620),
                    c = n(2984),
                    l = n(4762);
                n(6059);
                const u = o(n(4805));
                class d extends r.EventEmitter {
                    option;
                    element;
                    webviewElement;
                    processBar;
                    parent;
                    _currentUrl;
                    _lastLoadUrl;
                    title = "";
                    channel = new a.AsyncValue;
                    constructor(e) {
                        super(), this.option = e, this.element = document.createElement("div");
                        const t = document.createElement("webview");
                        this.webviewElement = t, this.element.id = `webview_${e.id}`, this.element.className = "web_view_wrapper", t.className = "web_view", this.element.appendChild(t), this.updateBackgroundColor(this.option.backgroundColor), e.showProcessBar && (this.processBar = document.createElement("div"), this.processBar.className = "process_bar", this.element.appendChild(this.processBar), t.addEventListener("progress-changed", (e => {
                            const t = JSON.parse(e.data);
                            if (u.default.info("webview progress-changed. data:", t), this.processBar) {
                                const {
                                    progress: e
                                } = t;
                                this.processBar.style.transform = `scaleX(${e})`
                            }
                        }))), t.addEventListener("will-navigate", (async e => {
                            const t = JSON.parse(e.data);
                            u.default.info("webview will-navigate. data:", t)
                        })), t.addEventListener("did-navigate", (async e => {
                            const t = JSON.parse(e.data);
                            u.default.info("webview did-navigate. data:", t), t.url && (this._currentUrl = t.url)
                        })), t.addEventListener("dom-ready", (async e => {
                            const n = JSON.parse(e.data);
                            if (u.default.info("webview dom-ready. data:", n), "about:blank" !== n.url) {
                                if (this.channel.isPending()) {
                                    const e = new i.WebViewTagMessageChannel(t.port);
                                    e.send("handshake", void 0), this.channel.set(e)
                                } else this.channel.getSync().reconnect(t.port);
                                this.option.showProcessBar && (this.processBar.style.display = "none"), this.emit("finish_load", {
                                    src: n.url
                                })
                            }
                        })), t.addEventListener("title-change", (e => {
                            const t = JSON.parse(e.data);
                            u.default.info("webview title-change. data:", t), this.emit("title_change", {
                                title: t.title
                            })
                        }))
                    }
                    mount(e) {
                        e.appendChild(this.element), this.parent = e
                    }
                    destory() {
                        this.parent.removeChild(this.element)
                    }
                    canGoBack() {
                        return this.webviewElement.canGoBack()
                    }
                    goBack() {
                        return this.webviewElement.goBack()
                    }
                    async load(e) {
                        this.option.checkDomain && !await (0, l.isValidUrl)("biz", e) || (this.webviewElement.loadURL(e), this._lastLoadUrl = e, setTimeout((() => {
                            this.emit("start_load", {
                                src: e
                            })
                        })))
                    }
                    get currentUrl() {
                        return this._currentUrl
                    }
                    get lastLoadUrl() {
                        return this._lastLoadUrl
                    }
                    updateBackgroundColor(e) {
                        this.element.style.backgroundColor = e || ""
                    }
                }
                s([(0, c.LogArguments)("webview")], d.prototype, "load", null), t.default = d
            },
            917: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BaseWindowMessageChannel = void 0;
                const o = s(n(4805));
                t.BaseWindowMessageChannel = class {
                    _callbacks = {};
                    _id = String(Date.now());
                    constructor() {}
                    async send(e, t, n = {}) {
                        throw new Error("unimplented error")
                    }
                    on(e, t) {
                        this._callbacks[e] && o.default.warn("already has " + e), o.default.info(`channel received on listener[${e}]`), this._callbacks[e] = t
                    }
                    emit(e, t) {
                        if (this._callbacks[e]) return this._callbacks[e](t);
                        o.default.warn(`event ${e} haven't listeners!`, this)
                    }
                }
            },
            3681: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CrossSiteWindowMessageChannel = void 0;
                const o = s(n(4805)),
                    i = n(4620),
                    r = n(917);
                let a = 0;
                class c extends r.BaseWindowMessageChannel {
                    targetWindow;
                    _callbackPromises = {};
                    constructor(e) {
                        super(), this.targetWindow = e, window.addEventListener("message", (async e => {
                            e.source === this.targetWindow && ("_callback" === e.data.name ? (this._callbackPromises[e.data._id]?.set(e.data.content), delete this._callbackPromises[e.data._id]) : this._sendCallback(e.data._id, await this.emit(e.data.name, e.data.content)))
                        }))
                    }
                    _sendCallback(e, t) {
                        this.targetWindow.postMessage({
                            name: "_callback",
                            content: t,
                            _id: e
                        }, "*")
                    }
                    static _processMessage(e) {
                        return JSON.parse(JSON.stringify(e))
                    }
                    send(e, t, n = {}) {
                        const s = a++;
                        let r = {
                            name: e,
                            content: t,
                            _id: s
                        };
                        n.transfer?.length > 0 ? o.default.info("[CHANNEL_CROSSSITE]", "on transfer", n.transfer) : r = c._processMessage(r), this.targetWindow.postMessage(r, "*", n.transfer);
                        const l = new i.AsyncValue;
                        return this._callbackPromises[s] = l, l.get()
                    }
                }
                t.CrossSiteWindowMessageChannel = c
            },
            838: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getCompatibleWindowMessageChannel = void 0;
                const o = s(n(4805)),
                    i = n(3681);
                n(3098), t.getCompatibleWindowMessageChannel = e => {
                    let t;
                    return t = new i.CrossSiteWindowMessageChannel(e), o.default.info("getCompatibleWindowMessageChannel, crosssite:", !0), t
                }
            },
            3098: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SameSiteWindowMessageChannel = void 0;
                const s = n(4620),
                    o = n(917),
                    i = "__channelEmmiterKey";
                class r extends o.BaseWindowMessageChannel {
                    targetWindow;
                    constructor(e) {
                        super(), this.targetWindow = e, window[i] || (window[i] = {}), window[i][this.targetWindow] = e => {
                            const t = JSON.parse(e);
                            return t.name, this.emit(t.name, t.content)
                        }
                    }
                    async send(e, t, n = {}) {
                        return this.targetWindow[i] || (this.targetWindow[i] = {}), await (0, s.waitTimeout)(0), await this.targetWindow[i][window](JSON.stringify({
                            name: e,
                            content: t
                        }))
                    }
                }
                t.SameSiteWindowMessageChannel = r
            },
            1836: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WebViewTagMessageChannel = void 0;
                const o = s(n(4805)),
                    i = n(4620),
                    r = n(917);
                let a = 0;
                class c extends r.BaseWindowMessageChannel {
                    targetPort;
                    _callbackPromises = {};
                    constructor(e) {
                        super(), this.targetPort = e, this._listenPort(e)
                    }
                    _listenPort(e) {
                        e.onmessage = e => {
                            "_callback" === e.data.name ? (this._callbackPromises[e.data._id]?.set(e.data.content), delete this._callbackPromises[e.data._id]) : this._sendCallback(e.data._id, this.emit(e.data.name, e.data.content))
                        }
                    }
                    reconnect(e) {
                        delete this.targetPort.onmessage, this.targetPort = e, this._listenPort(e)
                    }
                    ping() {
                        this.targetPort.postMessage("ping")
                    }
                    _sendCallback(e, t) {
                        this.targetPort.postMessage({
                            name: "_callback",
                            content: t,
                            _id: e
                        })
                    }
                    static _processMessage(e) {
                        return JSON.parse(JSON.stringify(e))
                    }
                    async send(e, t, n = {}) {
                        const s = a++;
                        let r = {
                            name: e,
                            content: t,
                            _id: s
                        };
                        n.transfer?.length > 0 ? o.default.info("[CHANNEL_WEBVIEWTAG]", "on transfer", n.transfer) : r = c._processMessage(r), this.targetPort.postMessage(r);
                        const l = new i.AsyncValue;
                        return this._callbackPromises[s] = l, l.get()
                    }
                }
                t.WebViewTagMessageChannel = c
            },
            9678: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.freezeWindowVariables = void 0;
                const n = ["window", "location", "top", "document"];
                t.freezeWindowVariables = () => {
                    try {
                        n.forEach((e => {
                            const t = globalThis[e];
                            Object.defineProperty(globalThis, e, {
                                get: () => t,
                                set: void 0,
                                configurable: !1,
                                enumerable: !0
                            })
                        }))
                    } catch (e) {}
                }
            },
            543: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.preventPinchZoomEvent = void 0;
                const o = s(n(4805));
                let i = !1;
                t.preventPinchZoomEvent = () => {
                    o.default.info("emit preventPinchZoomEvent."), i || (i = !0, window.addEventListener("wheel", (e => {
                        e.ctrlKey && e.preventDefault()
                    }), {
                        passive: !1
                    }))
                }
            }
        },
        t = {};

    function n(s) {
        var o = t[s];
        if (void 0 !== o) return o.exports;
        var i = t[s] = {
            id: s,
            exports: {}
        };
        return e[s].call(i.exports, i, i.exports, n), i.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var s in t) n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n(4129)
})();