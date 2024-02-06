(() => {
    var e = {
            6715: e => {
                function r(e, r, t, n, o, a, i) {
                    try {
                        var u = e[a](i),
                            s = u.value
                    } catch (e) {
                        return void t(e)
                    }
                    u.done ? r(s) : Promise.resolve(s).then(n, o)
                }
                e.exports = function(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(o, a) {
                            var i = e.apply(t, n);

                            function u(e) {
                                r(i, o, a, u, s, "next", e)
                            }

                            function s(e) {
                                r(i, o, a, u, s, "throw", e)
                            }
                            u(void 0)
                        }))
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6546: (e, r, t) => {
                var n = t(8677),
                    o = t(6245),
                    a = t(1193),
                    i = Object.getOwnPropertyNames,
                    u = Object.getOwnPropertySymbols;
                r = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = r.prototype,
                        s = void 0 === t || t,
                        c = r.unenumerable,
                        l = void 0 !== c && c,
                        p = r.symbol,
                        f = void 0 !== p && p,
                        d = [];
                    if ((l || f) && i) {
                        var g = n;
                        l && i && (g = i);
                        do {
                            d = d.concat(g(e)), f && u && (d = d.concat(u(e)))
                        } while (s && (e = o(e)) && e !== Object.prototype);
                        d = a(d)
                    } else if (s)
                        for (var v in e) d.push(v);
                    else d = n(e);
                    return d
                }, e.exports = r
            },
            32: (e, r, t) => {
                var n = t(2968);
                r = n((function(e, r, t) {
                    return n((function(n) {
                        return e.apply(r, t.concat(n))
                    }))
                })), e.exports = r
            },
            3782: (e, r, t) => {
                var n = t(3702),
                    o = t(4680);
                r = function(e, r) {
                    if (o(e)) return e;
                    if (r && n(r, e)) return [e];
                    var t = [];
                    return e.replace(a, (function(e, r, n, o) {
                        t.push(n ? o.replace(i, "$1") : r || e)
                    })), t
                };
                var a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    i = /\\(\\)?/g;
                e.exports = r
            },
            220: (e, r, t) => {
                var n = t(3058),
                    o = t(4680),
                    a = t(4371);
                r = function(e) {
                    return n(e) ? o(e) ? e.slice() : a({}, e) : e
                }, e.exports = r
            },
            6307: (e, r, t) => {
                var n = t(8690);
                r = function() {
                    for (var e = n(arguments), r = [], t = 0, o = e.length; t < o; t++) r = r.concat(n(e[t]));
                    return r
                }, e.exports = r
            },
            1841: (e, r, t) => {
                var n = t(8605),
                    o = t(2510),
                    a = t(2157),
                    i = t(8133);
                r = function(e, r) {
                    return o(e) ? e.indexOf(r) > -1 : (a(e) || (e = i(e)), n(e, r) >= 0)
                }, e.exports = r
            },
            8337: (e, r, t) => {
                var n = t(5617),
                    o = t(6295);
                r = function(e, r) {
                    return function(t) {
                        return o(arguments, (function(a, i) {
                            if (0 !== i) {
                                var u = e(a);
                                o(u, (function(e) {
                                    r && !n(t[e]) || (t[e] = a[e])
                                }))
                            }
                        })), t
                    }
                }, e.exports = r
            },
            6295: (e, r, t) => {
                var n = t(2157),
                    o = t(8677),
                    a = t(4116);
                r = function(e, r, t) {
                    var i, u;
                    if (r = a(r, t), n(e))
                        for (i = 0, u = e.length; i < u; i++) r(e[i], i, e);
                    else {
                        var s = o(e);
                        for (i = 0, u = s.length; i < u; i++) r(e[s[i]], s[i], e)
                    }
                    return e
                }, e.exports = r
            },
            8770: (e, r) => {
                r = function(e, r) {
                    var t = e.length - r.length;
                    return t >= 0 && e.indexOf(r, t) === t
                }, e.exports = r
            },
            4371: (e, r, t) => {
                r = t(8337)(t(6546)), e.exports = r
            },
            4277: (e, r, t) => {
                var n = t(8677);
                r = t(8337)(n), e.exports = r
            },
            8043: (e, r, t) => {
                var n = t(8540),
                    o = t(6295);
                r = function(e, r, t) {
                    var a = [];
                    return r = n(r, t), o(e, (function(e, t, n) {
                        r(e, t, n) && a.push(e)
                    })), a
                }, e.exports = r
            },
            8268: (e, r, t) => {
                var n = t(4110),
                    o = t(6808),
                    a = t(6068),
                    i = t(2510);
                r = function(e) {
                    var r, t, s = o(i(e) ? e : n(e));
                    a(s, "async") || a(s, "function") || a(s, "(") ? (r = s.indexOf("(") + 1, t = s.indexOf(")")) : (r = 0, t = s.indexOf("=>"));
                    var c = s.slice(r, t);
                    return null === (c = c.match(u)) ? [] : c
                };
                var u = /[^\s,]+/g;
                e.exports = r
            },
            6245: (e, r, t) => {
                var n = t(3058),
                    o = t(5309),
                    a = Object.getPrototypeOf,
                    i = {}.constructor;
                r = function(e) {
                    if (n(e)) {
                        if (a) return a(e);
                        var r = e.__proto__;
                        return r || null === r ? r : o(e.constructor) ? e.constructor.prototype : e instanceof i ? i.prototype : void 0
                    }
                }, e.exports = r
            },
            3702: (e, r) => {
                var t = Object.prototype.hasOwnProperty;
                r = function(e, r) {
                    return t.call(e, r)
                }, e.exports = r
            },
            4344: (e, r) => {
                r = function(e) {
                    return e
                }, e.exports = r
            },
            8605: (e, r) => {
                r = function(e, r, t) {
                    return Array.prototype.indexOf.call(e, r, t)
                }, e.exports = r
            },
            4680: (e, r, t) => {
                var n = t(2207);
                r = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === n(e)
                }, e.exports = r
            },
            2157: (e, r, t) => {
                var n = t(7804),
                    o = t(5309),
                    a = Math.pow(2, 53) - 1;
                r = function(e) {
                    if (!e) return !1;
                    var r = e.length;
                    return n(r) && r >= 0 && r <= a && !o(e)
                }, e.exports = r
            },
            5309: (e, r, t) => {
                var n = t(2207);
                r = function(e) {
                    var r = n(e);
                    return "[object Function]" === r || "[object GeneratorFunction]" === r || "[object AsyncFunction]" === r
                }, e.exports = r
            },
            1750: (e, r, t) => {
                var n = t(8677);
                r = function(e, r) {
                    var t = n(r),
                        o = t.length;
                    if (null == e) return !o;
                    e = Object(e);
                    for (var a = 0; a < o; a++) {
                        var i = t[a];
                        if (r[i] !== e[i] || !(i in e)) return !1
                    }
                    return !0
                }, e.exports = r
            },
            6041: (e, r) => {
                r = function(e) {
                    return null == e
                }, e.exports = r
            },
            7804: (e, r, t) => {
                var n = t(2207);
                r = function(e) {
                    return "[object Number]" === n(e)
                }, e.exports = r
            },
            3058: (e, r) => {
                r = function(e) {
                    var r = typeof e;
                    return !!e && ("function" === r || "object" === r)
                }, e.exports = r
            },
            5828: (e, r, t) => {
                var n = t(3058),
                    o = t(5309);
                r = function(e) {
                    return n(e) && o(e.then) && o(e.catch)
                }, e.exports = r
            },
            2510: (e, r, t) => {
                var n = t(2207);
                r = function(e) {
                    return "[object String]" === n(e)
                }, e.exports = r
            },
            5617: (e, r) => {
                r = function(e) {
                    return void 0 === e
                }, e.exports = r
            },
            8677: (e, r, t) => {
                var n = t(3702);
                r = Object.keys ? Object.keys : function(e) {
                    var r = [];
                    for (var t in e) n(e, t) && r.push(t);
                    return r
                }, e.exports = r
            },
            572: (e, r) => {
                r = function(e) {
                    var r = e ? e.length : 0;
                    if (r) return e[r - 1]
                }, e.exports = r
            },
            6640: (e, r) => {
                var t = /^\s+/;
                r = function(e, r) {
                    if (null == r) return e.replace(t, "");
                    for (var n, o, a = 0, i = e.length, u = r.length, s = !0; s && a < i;)
                        for (s = !1, n = -1, o = e.charAt(a); ++n < u;)
                            if (o === r[n]) {
                                s = !0, a++;
                                break
                            } return a >= i ? "" : e.substr(a, i)
                }, e.exports = r
            },
            3078: (e, r, t) => {
                var n = t(8540),
                    o = t(8677),
                    a = t(2157);
                r = function(e, r, t) {
                    r = n(r, t);
                    for (var i = !a(e) && o(e), u = (i || e).length, s = Array(u), c = 0; c < u; c++) {
                        var l = i ? i[c] : c;
                        s[c] = r(e[l], l, e)
                    }
                    return s
                }, e.exports = r
            },
            474: (e, r, t) => {
                var n = t(4277),
                    o = t(1750);
                r = function(e) {
                    return e = n({}, e),
                        function(r) {
                            return o(r, e)
                        }
                }, e.exports = r
            },
            408: (e, r) => {
                r = function() {}, e.exports = r
            },
            9359: (e, r) => {
                r = Date.now ? Date.now : function() {
                    return (new Date).getTime()
                }, e.exports = r
            },
            2207: (e, r) => {
                var t = Object.prototype.toString;
                r = function(e) {
                    return t.call(e)
                }, e.exports = r
            },
            4116: (e, r, t) => {
                var n = t(5617);
                r = function(e, r, t) {
                    if (n(r)) return e;
                    switch (null == t ? 3 : t) {
                        case 1:
                            return function(t) {
                                return e.call(r, t)
                            };
                        case 3:
                            return function(t, n, o) {
                                return e.call(r, t, n, o)
                            };
                        case 4:
                            return function(t, n, o, a) {
                                return e.call(r, t, n, o, a)
                            }
                    }
                    return function() {
                        return e.apply(r, arguments)
                    }
                }, e.exports = r
            },
            3004: (e, r, t) => {
                var n = t(4680),
                    o = t(4185);
                r = function(e) {
                    return n(e) ? function(r) {
                        return o(r, e)
                    } : (r = e, function(e) {
                        return null == e ? void 0 : e[r]
                    });
                    var r
                }, e.exports = r
            },
            2968: (e, r) => {
                r = function(e, r) {
                    return r = null == r ? e.length - 1 : +r,
                        function() {
                            var t, n = Math.max(arguments.length - r, 0),
                                o = new Array(n);
                            for (t = 0; t < n; t++) o[t] = arguments[t + r];
                            switch (r) {
                                case 0:
                                    return e.call(this, o);
                                case 1:
                                    return e.call(this, arguments[0], o);
                                case 2:
                                    return e.call(this, arguments[0], arguments[1], o)
                            }
                            var a = new Array(r + 1);
                            for (t = 0; t < r; t++) a[t] = arguments[t];
                            return a[r] = o, e.apply(this, a)
                        }
                }, e.exports = r
            },
            510: (e, r) => {
                var t = /\s+$/;
                r = function(e, r) {
                    if (null == r) return e.replace(t, "");
                    for (var n, o, a = e.length - 1, i = r.length, u = !0; u && a >= 0;)
                        for (u = !1, n = -1, o = e.charAt(a); ++n < i;)
                            if (o === r[n]) {
                                u = !0, a--;
                                break
                            } return a >= 0 ? e.substring(0, a + 1) : ""
                }, e.exports = r
            },
            8540: (e, r, t) => {
                var n = t(5309),
                    o = t(3058),
                    a = t(4680),
                    i = t(4116),
                    u = t(474),
                    s = t(4344),
                    c = t(3004);
                r = function(e, r, t) {
                    return null == e ? s : n(e) ? i(e, r, t) : o(e) && !a(e) ? u(e) : c(e)
                }, e.exports = r
            },
            4185: (e, r, t) => {
                var n = t(5617),
                    o = t(3782);
                r = function(e, r) {
                    var t;
                    for (t = (r = o(r, e)).shift(); !n(t);) {
                        if (null == (e = e[t])) return;
                        t = r.shift()
                    }
                    return e
                }, e.exports = r
            },
            7626: (e, r) => {
                r = function(e) {
                    return new Promise((function(r) {
                        return setTimeout(r, e)
                    }))
                }, e.exports = r
            },
            6068: (e, r) => {
                r = function(e, r) {
                    return 0 === e.indexOf(r)
                }, e.exports = r
            },
            6808: (e, r) => {
                r = function(e) {
                    for (var r = {
                            singleQuote: !1,
                            doubleQuote: !1,
                            regex: !1,
                            blockComment: !1,
                            lineComment: !1,
                            condComp: !1
                        }, t = 0, n = (e = ("__" + e + "__").split("")).length; t < n; t++)
                        if (r.regex) "/" === e[t] && "\\" !== e[t - 1] && (r.regex = !1);
                        else if (r.singleQuote) "'" === e[t] && "\\" !== e[t - 1] && (r.singleQuote = !1);
                    else if (r.doubleQuote) '"' === e[t] && "\\" !== e[t - 1] && (r.doubleQuote = !1);
                    else if (r.blockComment) "*" === e[t] && "/" === e[t + 1] && (e[t + 1] = "", r.blockComment = !1), e[t] = "";
                    else if (r.lineComment) "\n" === e[t + 1] && (r.lineComment = !1), e[t] = "";
                    else if (r.doubleQuote = '"' === e[t], r.singleQuote = "'" === e[t], "/" === e[t]) {
                        if ("*" === e[t + 1]) {
                            e[t] = "", r.blockComment = !0;
                            continue
                        }
                        if ("/" === e[t + 1]) {
                            e[t] = "", r.lineComment = !0;
                            continue
                        }
                        r.regex = !0
                    }
                    return e.join("").slice(2, -2)
                }, e.exports = r
            },
            8690: (e, r, t) => {
                var n = t(2157),
                    o = t(3078),
                    a = t(4680),
                    i = t(2510);
                r = function(e) {
                    return e ? a(e) ? e : n(e) && !i(e) ? o(e) : [e] : []
                }, e.exports = r
            },
            4110: (e, r, t) => {
                var n = t(6041);
                r = function(e) {
                    if (n(e)) return "";
                    try {
                        return o.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                    return ""
                };
                var o = Function.prototype.toString;
                e.exports = r
            },
            3647: (e, r, t) => {
                var n = t(6640),
                    o = t(510),
                    a = /^\s+|\s+$/g;
                r = function(e, r) {
                    return null == r ? e.replace(a, "") : n(o(e, r), r)
                }, e.exports = r
            },
            1193: (e, r, t) => {
                var n = t(8043);

                function o(e, r) {
                    return e === r
                }
                r = function(e, r) {
                    return r = r || o, n(e, (function(e, t, n) {
                        for (var o = n.length; ++t < o;)
                            if (r(e, n[t])) return !1;
                        return !0
                    }))
                }, e.exports = r
            },
            8133: (e, r, t) => {
                var n = t(6295);
                r = function(e) {
                    var r = [];
                    return n(e, (function(e) {
                        r.push(e)
                    })), r
                }, e.exports = r
            },
            4697: (e, r, t) => {
                var n = t(9359);
                r = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
                    return new Promise((function(o, a) {
                        var i = n(),
                            u = function() {
                                new Promise((function(r, t) {
                                    try {
                                        r(e())
                                    } catch (e) {
                                        t(e)
                                    }
                                })).then((function(e) {
                                    var s = n() - i;
                                    e ? o(e) : r && s >= r ? a(Error("Wait timed out after ".concat(r, " ms"))) : setTimeout(u, t)
                                }), a)
                            };
                        u()
                    }))
                }, e.exports = r
            }
        },
        r = {};

    function t(n) {
        var o = r[n];
        if (void 0 !== o) return o.exports;
        var a = r[n] = {
            exports: {}
        };
        return e[n](a, a.exports, t), a.exports
    }
    t.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return t.d(r, {
            a: r
        }), r
    }, t.d = (e, r) => {
        for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: r[n]
        })
    }, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
        "use strict";
        var e = t(6715),
            r = t.n(e),
            n = t(6068),
            o = t.n(n),
            a = t(8770),
            i = t.n(a),
            u = t(1841),
            s = t.n(u),
            c = t(8268),
            l = t.n(c),
            p = t.g.Function,
            f = Object.getPrototypeOf(r()((function*() {}))).constructor;

        function d(e) {
            return i()(e, "Sync") || s()(g, e)
        }
        var g = ["stopRecord", "getRecorderManager", "pauseVoice", "stopVoice", "pauseBackgroundAudio", "stopBackgroundAudio", "getBackgroundAudioManager", "createAudioContext", "createInnerAudioContext", "createVideoContext", "createCameraContext", "createMapContext", "canIUse", "startAccelerometer", "stopAccelerometer", "startCompass", "stopCompass", "hideToast", "hideLoading", "showNavigationBarLoading", "hideNavigationBarLoading", "navigateBack", "createAnimation", "pageScrollTo", "createSelectorQuery", "createCanvasContext", "createContext", "drawCanvas", "hideKeyboard", "stopPullDownRefresh", "arrayBufferToBase64", "base64ToArrayBuffer"];

        function v(e) {
            var r = l()(e);
            return "}" !== e[e.length - 1] ? r.push("return " + e.slice(e.indexOf("=>") + 2)) : r.push(e.slice(e.indexOf("{") + 1, e.lastIndexOf("}"))), r
        }

        function h() {
            return t.g.__isAppServiceRemoteDebugMode__ && t.g.$$autoDebug
        }

        function _(e, r, n) {
            return t.g.$$autoDebug.$eval("(" + e + ")", r, n)
        }

        function x() {
            return (x = r()((function*(e, r, n) {
                return yield t.g.$$autoDebug.$eval("(" + e + ")", r, n)
            }))).apply(this, arguments)
        }

        function y(e, r) {
            return m.apply(this, arguments)
        }

        function m() {
            return m = r()((function*(e, r, t = null) {
                var n, a = v(e);
                return o()(e, "async") ? h() ? yield function(e, r, t) {
                    return x.apply(this, arguments)
                }(e, r, t): (n = f.apply(null, a), yield n.apply(t, r)): h() ? _(e, r, t) : (n = p.apply(null, a)).apply(t, r)
            })), m.apply(this, arguments)
        }
        var b = t(572),
            O = t.n(b),
            $ = t(5617),
            w = t.n($),
            A = t(5309),
            S = t.n(A),
            P = t(3647),
            M = t.n(P),
            D = t(8690),
            I = t.n(D),
            E = t(6307),
            k = t.n(E),
            j = t(32),
            C = t.n(j),
            N = t(220),
            R = t.n(N),
            T = t(4697),
            L = t.n(T),
            U = t.g.WeixinJSBridge,
            F = !1,
            B = [];

        function W() {
            F = !0;
            for (var e = 0, r = B.length; e < r; e++) B[e]();
            B = []
        }
        t.g.__wxConfig.clientDebug = !0;
        var q = Object.getOwnPropertyDescriptor(t.g, "WeixinJSBridge");
        U && U.on ? W() : q && !1 === q.configurable ? L()((() => t.g.WeixinJSBridge && t.g.WeixinJSBridge.on), 5e3, 50).then((() => {
            U = t.g.WeixinJSBridge, W()
        })) : Object.defineProperty(t.g, "WeixinJSBridge", {
            set(e) {
                e && e.on && (U = e, W())
            },
            get: () => U,
            configurable: !0
        });
        const J = {
            on: (...e) => U.on(...e),
            publish: (...e) => U.publish(...e),
            invoke(...e) {
                var r;
                t.g.__isAppServiceRemoteDebugMode__ && "sendAutoMessage" === e[0] && (null === (r = t.g.__debugMessager) || void 0 === r || r.sendToDevtools(e[0], e[1]));
                return U.invoke(...e)
            },
            subscribe: (...e) => U.subscribe(...e),
            onReady(e) {
                F ? e() : B.push(e)
            }
        };
        var V = t(6295),
            G = t.n(V),
            Q = t(408),
            z = t.n(Q),
            H = {},
            X = [],
            K = !1,
            Y = t.g.__passWAServiceGlobal__ || z();

        function Z(e) {
            K ? e(H) : X.push(e)
        }
        t.g.__passWAServiceGlobal__ = function(e) {
            G()(e, ((e, r) => {
                K = !0, "Protect" !== r && (H[r] = e)
            })), K && (X.forEach((e => {
                e(H)
            })), X = []), Y(e)
        };
        var ee, re, te = "https://mp.weixin.qq.com/",
            ne = "https://servicewechat.com/",
            oe = {
                jsLoginURL: `${ne}wxa-dev-logic/jslogin`,
                jsRefreshSessionURL: `${ne}wxa-dev-logic/jsrefresh_session`,
                jsOperateWXDATAURL: `${ne}wxa-dev-logic/jsoperatewxdata`,
                jsAuthorizeURL: `${ne}wxa-dev-logic/jsauthorize`,
                jsAuthorizeConfirmURL: `${ne}wxa-dev-logic/jsauthorize-confirm`,
                getUserPhoneNumber: `${ne}wxa-dev-logic/jsgetuserwxphone`,
                checkWeRunState: `${ne}wxa-dev-logic/checkwerunstate`,
                getUserAutoFillData: `${ne}wxa-dev-logic/getuserfillinfo`,
                setUserAutoFillData: `${ne}wxa-dev-logic/saveuserfillinfo`,
                deleteUserAutoFillData: `${ne}wxa-dev-logic/deleteuserfillinfo`,
                requestAuthUserAutoFillData: `${ne}wxa-dev-logic/authuserfillinfo`,
                clearUserAutoFillInfo: `${ne}wxa-dev-logic/clearuserfillinfo`,
                batchGetCardInfoURL: `${te}debug/cgi-bin/webdebugger/getcarditeminfo`,
                batchAddCardURL: `${te}debug/cgi-bin/webdebugger/acceptcarditem`
            },
            ae = {
                ILLEGAL_URL: -2005,
                NOT_LIMITS: -1024,
                NOT_LIMITS_QY: -1025,
                NOT_LIMITS_CARD: -1026,
                NOT_LOGIN: 41001,
                INVALID_TOKEN: 40001,
                INVALID_LOGIN: 42001,
                NEED_CONFORM: -12e3,
                AUTH_DENY: -12006,
                SCOPE_UNAUTHORIZED: -12007,
                INVALID_CODE: 10010,
                INVALID_CARD_ID: 10023
            },
            ie = t.g.__wxConfig,
            ue = {};
        Z((e => {
            var r;
            ue = (null == ie || null === (r = ie.debugLaunchInfo) || void 0 === r ? void 0 : r.autoTest) || {}, console.log("autoTestInfo..", ue), ee = e.__appServiceSDK__._requestSkipCheckDomain, re = ue.appid
        }));
        var se = e => {
                var {
                    success: r,
                    fail: t,
                    complete: n
                } = e, o = (e.url || "").split("?")[0], a = [`newticket=${ue.newticket}`, `appid=${ue.appid}`, `clientversion=${ue.clientversion}`];
                return ue.testuser && a.push(`testuser=${ue.testuser}`), e.url = `${o}?${a.join("&")}`, r || t || n ? ee(e) : new Promise(((r, t) => {
                    ee({
                        ...e,
                        success: r,
                        fail: t
                    })
                }))
            },
            ce = () => re;

        function le(e, r, t, n, o) {
            se({
                url: `${oe.jsAuthorizeConfirmURL}`,
                method: "POST",
                data: {
                    scope: t,
                    opt: r ? 1 : 2
                },
                success: t => {
                    var a = t.data,
                        i = "fail request error";
                    return a.baseresponse && 0 === a.baseresponse.errcode && (i = r ? "ok" : "fail auth deny"), n({
                        errMsg: `${e}:${i}`,
                        ...o
                    })
                }
            })
        }

        function pe(e, r, t) {
            return se({
                url: `${oe.jsLoginURL}`,
                method: "POST",
                data: {
                    scope: ["snsapi_base"]
                },
                success: r => {
                    var n = r.data;
                    t({
                        errMsg: `${e}:ok`,
                        code: n.code
                    })
                },
                fail: () => {
                    t({
                        errMsg: `${e}:fail request fail`
                    })
                }
            })
        }

        function fe(e, r, t) {
            return se({
                url: `${oe.jsRefreshSessionURL}`,
                method: "POST",
                data: {
                    scope: ["snsapi_base"]
                },
                success: r => {
                    var n = r.data;
                    t({
                        errMsg: `${e}:ok`,
                        expireIn: n.session_expire_in,
                        err_code: n.baseresponse.errcode
                    })
                },
                fail: () => {
                    t({
                        errMsg: `${e}:fail request fail`
                    })
                }
            })
        }

        function de(e, r, t) {
            return ge.apply(this, arguments)
        }

        function ge() {
            return (ge = r()((function*(e, r, t) {
                var n = {
                    data: JSON.stringify(r.data || {})
                };
                return "webapi_plugin_setauth" === r.data.api_name && (n.ext_info = {
                    source_env: 2
                }), se({
                    url: `${oe.jsOperateWXDATAURL}`,
                    method: "POST",
                    data: n,
                    success: n => {
                        var o = n.data,
                            a = o.baseresponse;
                        if (a) {
                            var i = o.baseresponse.errcode;
                            if (0 === i) {
                                var u = JSON.parse(o.data);
                                return t({
                                    errMsg: `${e}:ok`,
                                    data: u
                                })
                            }
                            return i === ae.NEED_CONFORM ? function(e, r, t, n) {
                                var o = n.scopeList;
                                return se({
                                    url: `${oe.jsOperateWXDATAURL}`,
                                    method: "POST",
                                    data: {
                                        data: JSON.stringify(r.data || {}),
                                        grant_scope: o[0].scope,
                                        opt: 1
                                    },
                                    success: r => {
                                        var n = r.data;
                                        return t({
                                            errMsg: `${e}:ok`,
                                            data: JSON.parse(n.data)
                                        })
                                    }
                                })
                            }(e, r, t, {
                                imageUrl: o.appicon_url,
                                appName: o.appname,
                                scopeList: [o.scope]
                            }) : i === ae.SCOPE_UNAUTHORIZED ? t({
                                errMsg: `${e}:fail ${a.errmsg}`
                            }) : t({
                                errMsg: `${e}:fail ${a.errmsg}`,
                                err_code: i
                            })
                        }
                        t({
                            errMsg: `${e}:fail no baseresponse`
                        })
                    },
                    fail: () => {
                        t({
                            errMsg: `${e}:fail response fail`
                        })
                    }
                })
            }))).apply(this, arguments)
        }

        function ve(e, r, t) {
            return se({
                url: `${oe.jsAuthorizeURL}`,
                method: "POST",
                data: {
                    scope: r.scope || []
                },
                success: r => {
                    var n = r.data,
                        o = n.baseresponse;
                    if (o) {
                        var a = o.errcode;
                        if (0 === a) return t({
                            errMsg: `${e}:ok`,
                            body: n
                        });
                        if (a === ae.NEED_CONFORM) {
                            var i = n.scope_list || [],
                                u = [];
                            return i.forEach((e => {
                                u.push(e.scope)
                            })), le(e, !0, i, t)
                        }
                    }
                },
                fail: () => {
                    t({
                        errMsg: `${e}:fail request fail`
                    })
                }
            })
        }

        function he(e, r, t) {
            return se({
                url: `${oe.checkWeRunState}`,
                method: "POST",
                data: {
                    appid: ce()
                },
                success: r => {
                    var n = r.data;
                    if (1 === n.state) return t({
                        errMsg: `${e}:ok`
                    });
                    var o = n.wording || "USER_NOT_OPEN_WECHAT_MOVEMENT";
                    return t({
                        errMsg: `${e}:fail ${o}`
                    })
                },
                fail: () => {
                    t({
                        errMsg: `${e}:fail request fail`
                    })
                }
            })
        }
        var _e, xe, ye = {
            login: pe,
            refreshSession: fe,
            operateWXData: de,
            authorize: ve,
            openWeRunSetting: he,
            getPhoneNumber: function(e, t, n) {
                var o;
                se({
                    url: `${oe.getUserPhoneNumber}`,
                    method: "POST",
                    data: {
                        appid: ce()
                    },
                    success: (o = r()((function*(r) {
                        var t = r.data;
                        console.log("getPhoneNumber", t);
                        var o = t.jsapi_baseresponse,
                            a = o ? parseInt(o.errcode, 10) : -1e4;
                        try {
                            if (0 === a) {
                                var i, u = {};
                                try {
                                    u = JSON.parse(t.data), i = JSON.parse(u.data)
                                } catch (e) {
                                    throw new Error(`GET_DATA_ERROR ${e}`)
                                }
                                if (!i || !i.mobile) throw new Error("USER_NOT_BOUND_PHONE");
                                if (i.need_auth) throw new Error("PHONE_BOUND_NEED_VERIFIED");
                                var s = [t.scope],
                                    c = [];
                                return s.forEach((e => {
                                    c.push(e.scope)
                                })), le(e, !0, s, n, u)
                            }
                            throw -12001 === a ? new Error("APPID_NO_PERMISSIONS") : -12004 === a ? new Error("WX_LOGIN_FIRST") : new Error(`SYSTEM_ERROR errorCode:${a}`)
                        } catch (r) {
                            return n({
                                errMsg: `${e}:fail ${r}`
                            })
                        }
                    })), function(e) {
                        return o.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            },
            getUserAutoFillData: function(e, t, n) {
                var o, a = {
                    appid: ce(),
                    get_all_info: !1,
                    source: 1,
                    user_info_list: t.fields,
                    client_version: t.clientVersion
                };
                se({
                    url: `${oe.getUserAutoFillData}`,
                    method: "POST",
                    data: a,
                    success: (o = r()((function*(r) {
                        var t = r.data;
                        n({
                            errMsg: `${e}:ok`,
                            userData: t.user_info_json || "{}",
                            authStatus: t.auth_status,
                            authInfo: t.auth_info,
                            authGroupList: t.auth_group_list
                        })
                    })), function(e) {
                        return o.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            },
            setUserAutoFillData: function(e, t, n) {
                var o, a = {
                    appid: ce(),
                    source: 1,
                    user_info_json: t.dataList,
                    client_version: t.clientVersion
                };
                se({
                    url: `${oe.getUserAutoFillData}`,
                    method: "POST",
                    data: a,
                    success: (o = r()((function*(r) {
                        r.data, n({
                            errMsg: `${e}:ok`
                        })
                    })), function(e) {
                        return o.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            },
            deleteUserAutoFillData: function(e, t, n) {
                var o, a = {
                    appid: ce(),
                    source: 1,
                    group_key: t.groupKey,
                    group_id: t.groupId,
                    client_version: t.clientVersion
                };
                se({
                    url: `${oe.deleteUserAutoFillData}`,
                    method: "POST",
                    data: a,
                    success: (o = r()((function*(r) {
                        r.data, n({
                            errMsg: `${e}:ok`
                        })
                    })), function(e) {
                        return o.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            },
            requestAuthUserAutoFillData: function(e, t, n) {
                var o, a = {
                    appid: ce(),
                    source: 1,
                    auth_info_list: t.fields || [],
                    auth_status: t.authStatus,
                    user_confirm: !0,
                    client_version: t.clientVersion
                };
                se({
                    url: `${oe.requestAuthUserAutoFillData}`,
                    method: "POST",
                    data: a,
                    success: (o = r()((function*(r) {
                        r.data, n({
                            errMsg: `${e}:ok`
                        })
                    })), function(e) {
                        return o.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            }
        };

        function me() {
            return (me = r()((function*(e) {
                var {
                    functionDeclaration: r,
                    args: t
                } = e;
                return {
                    result: yield y(r, t)
                }
            }))).apply(this, arguments)
        }

        function be() {
            return (be = r()((function*() {
                return O()((yield Oe()).pageStack)
            }))).apply(this, arguments)
        }

        function Oe() {
            return $e.apply(this, arguments)
        }

        function $e() {
            return ($e = r()((function*() {
                return {
                    pageStack: _e.getCurrentPagesByDomain().map((e => {
                        var {
                            route: r
                        } = e, t = r.indexOf("__plugin__/");
                        return t > -1 && (r = "plugin-private://" + r.slice(t + 11)), {
                            pageId: e.__wxWebviewId__,
                            path: r,
                            query: e.options
                        }
                    }))
                }
            }))).apply(this, arguments)
        }
        var we = {},
            Ae = {},
            Se = {},
            Pe = {};

        function Me(e, r = "") {
            return r ? `${r}_${e}` : e
        }

        function De(e = "") {
            if (e) {
                if (!we[e]) throw Error(`Plugin ${e} not exists`);
                return we[e].wx
            }
            return "undefined" == typeof wx ? xe : wx
        }

        function Ie() {
            return Ie = r()((function*(e) {
                var {
                    method: t,
                    result: n,
                    pluginId: a
                } = e, {
                    functionDeclaration: i,
                    args: u
                } = e, s = De(a);
                if (!s[t]) throw Error(`wx.${t} not exists`);
                if (! function(e) {
                        return !o()(e, "on") && !o()(e, "off")
                    }(t)) throw Error(`You can't mock wx.${t}`);
                if (w()(n) && w()(i)) ! function(e, r) {
                    var t = De(r),
                        n = Me(e, r);
                    if (!Ae[n]) return;
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    o ? Se[n] ? Object.defineProperty(t, e, {
                        get: Ae[n]
                    }) : Object.defineProperty(t, e, {
                        value: Ae[n]
                    }) : t[e] = Ae[n];
                    delete Ae[n]
                }(t, a);
                else {
                    var c;
                    w()(n) || (i = "function () {\n      return arguments[arguments.length - 1];\n    }", u = [n]);
                    var l = {
                        origin: C()(Ee(t, a), s)
                    };
                    c = d(t) ? function() {
                            return function(e, r, t = null) {
                                var n = v(e);
                                return h() ? _(e, r, t) : p.apply(null, n).apply(t, r)
                            }(i, k()(I()(arguments), u), l)
                        } : function() {
                            var e = r()((function*(...e) {
                                var n = !1,
                                    o = e[0];
                                if ((w()(o) || w()(o.success) && w()(o.fail) && w()(o.complete)) && (n = !0), n) return u = k()(e, u), new Promise(function() {
                                    var e = r()((function*(e, r) {
                                        var n = yield y(i, u, l);
                                        (n.errMsg || `${t}:ok`).indexOf(`${t}:ok`) > -1 ? e(n) : r(n)
                                    }));
                                    return function(r, t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                                var a = R()(o);
                                delete a.success, delete a.fail, delete a.complete;
                                var s = yield y(i, k()([a], u), l);
                                (s.errMsg || `${t}:ok`).indexOf(`${t}:ok`) > -1 ? o.success && o.success(s) : o.fail && o.fail(s), o.complete && o.complete(s)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        function(e, r, t) {
                            var n = De(t),
                                o = Me(e, t),
                                a = Object.getOwnPropertyDescriptor(n, e);
                            if (!Ae[o]) {
                                var i, u = !1,
                                    s = !1;
                                a ? a.get ? (u = !0, i = a.get) : (s = !0, i = a.value) : i = n[e], i && (Pe[o] = s, Se[o] = u, Ae[o] = i)
                            }
                            a ? Object.defineProperty(n, e, {
                                get: () => r
                            }) : n[e] = r
                        }(t, c, a)
                }
            })), Ie.apply(this, arguments)
        }

        function Ee(e, r) {
            var t = De(r),
                n = Me(e, r);
            if (Ae[n]) return Se[n] ? Ae[n]() : Ae[n];
            var o = Object.getOwnPropertyDescriptor(t, e);
            return o && o.get ? o.get() : t[e]
        }
        var ke = ["log", "info", "warn", "error", "debug"];

        function je() {
            return (je = r()((function*() {
                ke.forEach((e => {
                    var r = console[e];
                    console[e] = function(...t) {
                        J.invoke("sendAutoMessage", {
                            method: "App.logAdded",
                            params: {
                                type: e,
                                args: t
                            }
                        }), S()(r) && r.apply(console, t)
                    }
                }))
            }))).apply(this, arguments)
        }

        function Ce() {
            return (Ce = r()((function*(e) {
                var r, {
                        name: n
                    } = e,
                    o = function(...e) {
                        J.invoke("sendAutoMessage", {
                            method: "App.bindingCalled",
                            params: {
                                name: n,
                                args: e
                            }
                        })
                    };
                t.g.__isAppServiceRemoteDebugMode__ && t.g.$$autoDebug ? null === (r = t.g.$$autoDebug) || void 0 === r || r.setSubContextGlobalFunctions(n, o) : t.g[n] = o
            }))).apply(this, arguments)
        }

        function Ne() {
            return (Ne = r()((function*() {
                J.invoke("exitMiniProgram", {})
            }))).apply(this, arguments)
        }

        function Re() {
            return Re = r()((function*() {
                return new Promise(((e, t) => {
                    function n() {
                        t(Error("fail to capture screenshot"))
                    }
                    J.invoke("private_captureScreen", {}, function() {
                        var t = r()((function*(r) {
                            var {
                                errMsg: t
                            } = r;
                            if (s()(t, ":ok")) {
                                var {
                                    tempFilePath: o
                                } = r;
                                Ee("saveFile")({
                                    tempFilePath: o,
                                    success(r) {
                                        var t = Ee("getFileSystemManager")(),
                                            o = r.savedFilePath;
                                        t.readFile({
                                            filePath: o,
                                            encoding: "base64",
                                            success(r) {
                                                Ee("removeSavedFile")({
                                                    filePath: o
                                                }), e({
                                                    data: r.data
                                                })
                                            },
                                            fail() {
                                                n()
                                            }
                                        })
                                    },
                                    fail() {
                                        n()
                                    }
                                })
                            } else n()
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }))
            })), Re.apply(this, arguments)
        }
        var Te = t.g.__wxConfig;
        Z((e => {
            var r, t, n;
            _e = e.__appServiceEngine__, xe = e.wx;
            var o = null === (r = _e) || void 0 === r || null === (t = r.__getCreatePluginGlobal) || void 0 === t ? void 0 : t.call(r),
                a = _e.__setCreatePluginGlobal;
            if (null == a || a(((e, r) => {
                    var t = null == o ? void 0 : o(e, r);
                    return we[e] = t, t
                })), e.Reporter.registerErrorListener((e => {
                    var r = e.split("\n");
                    "MiniProgramError" === M()(r[0]) && (e = r[2], e = M()(e.replace(/^((Type)|(Range)|(Reference)|(Syntax))?Error:/, "")), J.invoke("sendAutoMessage", {
                        method: "App.exceptionThrown",
                        params: {
                            message: e,
                            stack: r.slice(2).join("\n")
                        }
                    }))
                })), null != Te && null !== (n = Te.debugLaunchInfo) && void 0 !== n && n.autoTest) {
                var i = e.WeixinJSBridge.invoke;
                Object.defineProperty(e.WeixinJSBridge, "invoke", {
                    value(...r) {
                        var [t, n, o, a] = r;
                        return ye[t] ? ye[t](t, n, o) : i.apply(e.WeixinJSBridge, r)
                    }
                }), e.WeixinJSBridge.subscribe("callAutoInvoke", (r => {
                    var {
                        name: t,
                        args: n,
                        callbackId: o
                    } = r;
                    if (ye[t]) return ye[t](t, n, (r => {
                        e.WeixinJSBridge.publish("callbackAutoInvoke", {
                            callbackId: o,
                            res: r
                        })
                    }))
                }))
            }
        }));
        var Le, Ue, Fe, Be = t(5828),
            We = t.n(Be),
            qe = t(4185),
            Je = t.n(qe);

        function Ve(e) {
            var r = Le.getCurrentPagesByDomain();
            for (var t of r)
                if (t.__wxWebviewId__ === e) return t;
            throw Error("page destroyed")
        }
        Z((e => {
            Le = e.__appServiceEngine__
        })), Z((e => {
            Ue = e.exparser, Fe = e.__virtualDOM__
        }));
        const Ge = {
            "App.callWxMethod": function(e) {
                var {
                    method: r,
                    pluginId: t
                } = e, n = De(t), {
                    args: o
                } = e;
                return new Promise(((e, t) => {
                    if (!n[r]) return t(Error(`wx.${r} not exists`));
                    d(r) ? e({
                        result: n[r].apply(n, o)
                    }) : (o = o[0] || {}, n[r]({
                        ...o,
                        success(r) {
                            e({
                                result: r
                            })
                        },
                        fail(e) {
                            t(Error(e.errMsg.replace(`${r}:fail `, "")))
                        }
                    }))
                }))
            },
            "App.callFunction": function(e) {
                return me.apply(this, arguments)
            },
            "App.getCurrentPage": function() {
                return be.apply(this, arguments)
            },
            "App.getPageStack": Oe,
            "App.mockWxMethod": function(e) {
                return Ie.apply(this, arguments)
            },
            "App.enableLog": function() {
                return je.apply(this, arguments)
            },
            "App.addBinding": function(e) {
                return Ce.apply(this, arguments)
            },
            "App.exit": function() {
                return Ne.apply(this, arguments)
            },
            "App.captureScreenshot": function() {
                return Re.apply(this, arguments)
            },
            "Page.setData": function(e) {
                var {
                    pageId: r,
                    data: t
                } = e, n = Ve(r);
                return new Promise((e => {
                    n.setData(t, (() => {
                        e()
                    }))
                }))
            },
            "Page.getData": function(e) {
                var {
                    pageId: r,
                    path: t
                } = e, n = Ve(r), o = Object.assign({}, n.data);
                return delete o.__webviewId__, t && (o = Je()(o, t)), {
                    data: o
                }
            },
            "Page.callMethod": function(e) {
                var {
                    method: r,
                    args: t
                } = e, n = Ve(e.pageId);
                return new Promise(((e, o) => {
                    if (!n[r]) return o(Error(`page.${r} not exists`));
                    var a = n[r].apply(n, t);
                    We()(a) ? a.then((r => {
                        e({
                            result: r
                        })
                    }), o) : e({
                        result: a
                    })
                }))
            },
            "Element.callMethod": function(e) {
                var {
                    nodeId: r,
                    method: t,
                    args: n,
                    pageId: o
                } = e, a = Fe.getNodeById(r, o);
                if (a) return new Promise(((e, r) => {
                    var o = Ue.Element.getMethodCaller(a);
                    if (!o[t]) return r(Error(`component.${t} not exists`));
                    var i = Ue.safeCallback("Event Handler", o[t], o, n, a);
                    We()(i) ? i.then((r => {
                        e({
                            result: r
                        })
                    }), r) : e({
                        result: i
                    })
                }))
            },
            "Element.getData": function(e) {
                var {
                    nodeId: r,
                    pageId: t,
                    path: n
                } = e, o = Fe.getNodeById(r, t).data;
                return n && (o = Je()(o, n)), {
                    data: o
                }
            },
            "Element.setData": function(e) {
                var {
                    nodeId: r,
                    pageId: t,
                    data: n
                } = e;
                Fe.getNodeById(r, t).setData(n)
            },
            "Element.callContextMethod": function(e) {
                var r, t, {
                    nodeId: n,
                    videoId: o,
                    pageId: a,
                    method: i,
                    args: u
                } = e;
                if (r = n ? Fe.getNodeById(n, a) : Ve(a), !o) throw Error("id is not provided");
                return {
                    result: (t = Ee("createVideoContext")(o, r))[i].apply(t, u)
                }
            }
        };
        var Qe = t(7626),
            ze = t.n(Qe);

        function He() {
            return (He = r()((function*(e, r) {
                if (Ge[e]) return (yield Ge[e](r)) || {};
                throw Error(`appservice ${e} unimplemented`)
            }))).apply(this, arguments)
        }
        J.onReady(r()((function*() {
            J.on("onAutoMessageReceive", function() {
                var e = r()((function*(e) {
                    var {
                        method: r,
                        params: t,
                        id: n
                    } = e, o = {
                        id: n
                    };
                    if (w()(t.pageId) || Ge[r]) try {
                        o.result = yield function(e, r) {
                            return He.apply(this, arguments)
                        }(r, t)
                    } catch (e) {
                        o.error = {
                            message: e.message
                        }
                    } else try {
                        return Ve(t.pageId), void J.publish("sendAutoMessage", e, [t.pageId])
                    } catch (e) {
                        o.error = {
                            message: e.message
                        }
                    }
                    J.invoke("sendAutoMessage", o)
                }));
                return function(r) {
                    return e.apply(this, arguments)
                }
            }()), J.subscribe("sendAutoMessage", (e => {
                J.invoke("sendAutoMessage", e)
            })), yield L()((() => t.g.getCurrentPages && t.g.getCurrentPages().length > 0), 0, 50), yield ze()(1e3), J.invoke("sendAutoMessage", {
                method: "App.initialized",
                params: {
                    from: t.g.__isAppServiceRemoteDebugMode__ ? "appservice" : "devtools"
                }
            })
        })))
    })()
})();