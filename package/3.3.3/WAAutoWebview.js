(() => {
    var t = {
            715: t => {
                function e(t, e, r, n, o, s, i) {
                    try {
                        var u = t[s](i),
                            a = u.value
                    } catch (t) {
                        return void r(t)
                    }
                    u.done ? e(a) : Promise.resolve(a).then(n, o)
                }
                t.exports = function(t) {
                    return function() {
                        var r = this,
                            n = arguments;
                        return new Promise((function(o, s) {
                            var i = t.apply(r, n);

                            function u(t) {
                                e(i, o, s, u, a, "next", t)
                            }

                            function a(t) {
                                e(i, o, s, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    }
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            546: (t, e, r) => {
                var n = r(677),
                    o = r(245),
                    s = r(193),
                    i = Object.getOwnPropertyNames,
                    u = Object.getOwnPropertySymbols;
                e = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = e.prototype,
                        a = void 0 === r || r,
                        c = e.unenumerable,
                        l = void 0 !== c && c,
                        p = e.symbol,
                        h = void 0 !== p && p,
                        f = [];
                    if ((l || h) && i) {
                        var d = n;
                        l && i && (d = i);
                        do {
                            f = f.concat(d(t)), h && u && (f = f.concat(u(t)))
                        } while (a && (t = o(t)) && t !== Object.prototype);
                        f = s(f)
                    } else if (a)
                        for (var g in t) f.push(g);
                    else f = n(t);
                    return f
                }, t.exports = e
            },
            782: (t, e, r) => {
                var n = r(702),
                    o = r(680);
                e = function(t, e) {
                    if (o(t)) return t;
                    if (e && n(e, t)) return [t];
                    var r = [];
                    return t.replace(s, (function(t, e, n, o) {
                        r.push(n ? o.replace(i, "$1") : e || t)
                    })), r
                };
                var s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    i = /\\(\\)?/g;
                t.exports = e
            },
            337: (t, e, r) => {
                var n = r(617),
                    o = r(295);
                e = function(t, e) {
                    return function(r) {
                        return o(arguments, (function(s, i) {
                            if (0 !== i) {
                                var u = t(s);
                                o(u, (function(t) {
                                    e && !n(r[t]) || (r[t] = s[t])
                                }))
                            }
                        })), r
                    }
                }, t.exports = e
            },
            704: (t, e, r) => {
                e = r(337)(r(546), !0), t.exports = e
            },
            295: (t, e, r) => {
                var n = r(157),
                    o = r(677),
                    s = r(116);
                e = function(t, e, r) {
                    var i, u;
                    if (e = s(e, r), n(t))
                        for (i = 0, u = t.length; i < u; i++) e(t[i], i, t);
                    else {
                        var a = o(t);
                        for (i = 0, u = a.length; i < u; i++) e(t[a[i]], a[i], t)
                    }
                    return t
                }, t.exports = e
            },
            277: (t, e, r) => {
                var n = r(677);
                e = r(337)(n), t.exports = e
            },
            43: (t, e, r) => {
                var n = r(540),
                    o = r(295);
                e = function(t, e, r) {
                    var s = [];
                    return e = n(e, r), o(t, (function(t, r, n) {
                        e(t, r, n) && s.push(t)
                    })), s
                }, t.exports = e
            },
            245: (t, e, r) => {
                var n = r(58),
                    o = r(309),
                    s = Object.getPrototypeOf,
                    i = {}.constructor;
                e = function(t) {
                    if (n(t)) {
                        if (s) return s(t);
                        var e = t.__proto__;
                        return e || null === e ? e : o(t.constructor) ? t.constructor.prototype : t instanceof i ? i.prototype : void 0
                    }
                }, t.exports = e
            },
            702: (t, e) => {
                var r = Object.prototype.hasOwnProperty;
                e = function(t, e) {
                    return r.call(t, e)
                }, t.exports = e
            },
            344: (t, e) => {
                e = function(t) {
                    return t
                }, t.exports = e
            },
            66: (t, e, r) => {
                var n = r(207);
                e = function(t) {
                    return "[object Arguments]" === n(t)
                }, t.exports = e
            },
            680: (t, e, r) => {
                var n = r(207);
                e = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === n(t)
                }, t.exports = e
            },
            157: (t, e, r) => {
                var n = r(804),
                    o = r(309),
                    s = Math.pow(2, 53) - 1;
                e = function(t) {
                    if (!t) return !1;
                    var e = t.length;
                    return n(e) && e >= 0 && e <= s && !o(t)
                }, t.exports = e
            },
            424: (t, e) => {
                e = "object" == typeof window && "object" == typeof document && 9 === document.nodeType, t.exports = e
            },
            829: (t, e, r) => {
                var n = r(157),
                    o = r(680),
                    s = r(510),
                    i = r(66),
                    u = r(677);
                e = function(t) {
                    return null == t || (n(t) && (o(t) || s(t) || i(t)) ? 0 === t.length : 0 === u(t).length)
                }, t.exports = e
            },
            309: (t, e, r) => {
                var n = r(207);
                e = function(t) {
                    var e = n(t);
                    return "[object Function]" === e || "[object GeneratorFunction]" === e || "[object AsyncFunction]" === e
                }, t.exports = e
            },
            750: (t, e, r) => {
                var n = r(677);
                e = function(t, e) {
                    var r = n(e),
                        o = r.length;
                    if (null == t) return !o;
                    t = Object(t);
                    for (var s = 0; s < o; s++) {
                        var i = r[s];
                        if (e[i] !== t[i] || !(i in t)) return !1
                    }
                    return !0
                }, t.exports = e
            },
            163: (t, e, r) => {
                var n = r(207);
                e = "undefined" != typeof process && "[object process]" === n(process), t.exports = e
            },
            804: (t, e, r) => {
                var n = r(207);
                e = function(t) {
                    return "[object Number]" === n(t)
                }, t.exports = e
            },
            58: (t, e) => {
                e = function(t) {
                    var e = typeof t;
                    return !!t && ("function" === e || "object" === e)
                }, t.exports = e
            },
            510: (t, e, r) => {
                var n = r(207);
                e = function(t) {
                    return "[object String]" === n(t)
                }, t.exports = e
            },
            617: (t, e) => {
                e = function(t) {
                    return void 0 === t
                }, t.exports = e
            },
            677: (t, e, r) => {
                var n = r(702);
                e = Object.keys ? Object.keys : function(t) {
                    var e = [];
                    for (var r in t) n(t, r) && e.push(r);
                    return e
                }, t.exports = e
            },
            640: (t, e) => {
                var r = /^\s+/;
                e = function(t, e) {
                    if (null == e) return t.replace(r, "");
                    for (var n, o, s = 0, i = t.length, u = e.length, a = !0; a && s < i;)
                        for (a = !1, n = -1, o = t.charAt(s); ++n < u;)
                            if (o === e[n]) {
                                a = !0, s++;
                                break
                            } return s >= i ? "" : t.substr(s, i)
                }, t.exports = e
            },
            78: (t, e, r) => {
                var n = r(540),
                    o = r(677),
                    s = r(157);
                e = function(t, e, r) {
                    e = n(e, r);
                    for (var i = !s(t) && o(t), u = (i || t).length, a = Array(u), c = 0; c < u; c++) {
                        var l = i ? i[c] : c;
                        a[c] = e(t[l], l, t)
                    }
                    return a
                }, t.exports = e
            },
            474: (t, e, r) => {
                var n = r(277),
                    o = r(750);
                e = function(t) {
                    return t = n({}, t),
                        function(e) {
                            return o(e, t)
                        }
                }, t.exports = e
            },
            359: (t, e) => {
                e = Date.now ? Date.now : function() {
                    return (new Date).getTime()
                }, t.exports = e
            },
            207: (t, e) => {
                var r = Object.prototype.toString;
                e = function(t) {
                    return r.call(t)
                }, t.exports = e
            },
            116: (t, e, r) => {
                var n = r(617);
                e = function(t, e, r) {
                    if (n(e)) return t;
                    switch (null == r ? 3 : r) {
                        case 1:
                            return function(r) {
                                return t.call(e, r)
                            };
                        case 3:
                            return function(r, n, o) {
                                return t.call(e, r, n, o)
                            };
                        case 4:
                            return function(r, n, o, s) {
                                return t.call(e, r, n, o, s)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }, t.exports = e
            },
            4: (t, e, r) => {
                var n = r(680),
                    o = r(185);
                e = function(t) {
                    return n(t) ? function(e) {
                        return o(e, t)
                    } : (e = t, function(t) {
                        return null == t ? void 0 : t[e]
                    });
                    var e
                }, t.exports = e
            },
            392: (t, e) => {
                e = function(t, e, r) {
                    null == e && (e = t, t = 0);
                    var n = Math.random();
                    return r || t % 1 || e % 1 ? Math.min(t + n * (e - t + parseFloat("1e-" + ((n + "").length - 1))), e) : t + Math.floor(n * (e - t + 1))
                }, t.exports = e
            },
            366: (t, e, r) => {
                var n = r(392),
                    o = r(424),
                    s = r(163),
                    i;
                e = function(t) {
                    for (var e = new Uint8Array(t), r = 0; r < t; r++) e[r] = n(0, 255);
                    return e
                }, o ? (i = window.crypto || window.msCrypto, i && (e = function(t) {
                    var e = new Uint8Array(t);
                    return i.getRandomValues(e), e
                })) : s && (i = eval("require")("crypto"), e = function(t) {
                    return i.randomBytes(t)
                }), t.exports = e
            },
            69: (t, e) => {
                var r = /\s+$/;
                e = function(t, e) {
                    if (null == e) return t.replace(r, "");
                    for (var n, o, s = t.length - 1, i = e.length, u = !0; u && s >= 0;)
                        for (u = !1, n = -1, o = t.charAt(s); ++n < i;)
                            if (o === e[n]) {
                                u = !0, s--;
                                break
                            } return s >= 0 ? t.substring(0, s + 1) : ""
                }, t.exports = e
            },
            540: (t, e, r) => {
                var n = r(309),
                    o = r(58),
                    s = r(680),
                    i = r(116),
                    u = r(474),
                    a = r(344),
                    c = r(4);
                e = function(t, e, r) {
                    return null == t ? a : n(t) ? i(t, e, r) : o(t) && !s(t) ? u(t) : c(t)
                }, t.exports = e
            },
            185: (t, e, r) => {
                var n = r(617),
                    o = r(782);
                e = function(t, e) {
                    var r;
                    for (r = (e = o(e, t)).shift(); !n(r);) {
                        if (null == (t = t[r])) return;
                        r = e.shift()
                    }
                    return t
                }, t.exports = e
            },
            11: (t, e, r) => {
                var n = r(647),
                    o = r(295),
                    s = r(344),
                    i = r(78),
                    u = "[\\x20\\t\\r\\n\\f]",
                    a = "(?:\\\\[\\da-fA-F]{1,6}".concat(u, "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+"),
                    c = "\\[".concat(u, "*(").concat(a, ")(?:").concat(u, "*([*^$|!~]?=)").concat(u, "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(").concat(a, "))|)").concat(u, "*\\]"),
                    l = "::?(".concat(a, ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|").concat(c, ")*)|.*)\\)|)"),
                    p = new RegExp("^".concat(u, "*,").concat(u, "*")),
                    h = new RegExp("^".concat(u, "*([>+~]|").concat(u, ")").concat(u, "*")),
                    f = {
                        id: {
                            reg: new RegExp("^#(".concat(a, ")")),
                            value: function(t) {
                                return t.slice(1)
                            },
                            toStr: function(t) {
                                return "#".concat(t)
                            }
                        },
                        class: {
                            reg: new RegExp("^\\.(".concat(a, ")")),
                            value: function(t) {
                                return t.slice(1)
                            },
                            toStr: function(t) {
                                return ".".concat(t)
                            }
                        },
                        tag: {
                            reg: new RegExp("^(".concat(a, "|[*])")),
                            value: s
                        },
                        attribute: {
                            reg: new RegExp("^".concat(c)),
                            value: function(t) {
                                return t.slice(1, t.length - 1)
                            },
                            toStr: function(t) {
                                return "[".concat(t, "]")
                            }
                        },
                        pseudo: {
                            reg: new RegExp("^".concat(l)),
                            value: s
                        }
                    };
                o(f, (function(t) {
                    t.value || (t.value = s), t.toStr || (t.toStr = s)
                })), e = {
                    parse: function(t) {
                        t = n(t);
                        for (var e, r, s, i = []; t && (s && !(r = p.exec(t)) || (r && (t = t.slice(r[0].length)), e = [], i.push(e)), s = !1, (r = h.exec(t)) && (s = r.shift(), t = t.slice(s.length), (s = n(s)) || (s = " "), e.push({
                                value: s,
                                type: "combinator"
                            })), o(f, (function(o, i) {
                                var u = o.reg,
                                    a = o.value;
                                (r = u.exec(t)) && (s = r.shift(), t = t.slice(s.length), s = n(s), e.push({
                                    value: a(s),
                                    type: i
                                }))
                            })), s););
                        return i
                    },
                    stringify: function(t) {
                        return i(t, (function(t) {
                            return (t = i(t, (function(t) {
                                var e = t.type,
                                    r = t.value;
                                return "combinator" === e ? " " === r ? r : " ".concat(r, " ") : f[e].toStr(r)
                            }))).join("")
                        })).join(", ")
                    }
                }, t.exports = e
            },
            626: (t, e) => {
                e = function(t) {
                    return new Promise((function(e) {
                        return setTimeout(e, t)
                    }))
                }, t.exports = e
            },
            68: (t, e) => {
                e = function(t, e) {
                    return 0 === t.indexOf(e)
                }, t.exports = e
            },
            690: (t, e, r) => {
                var n = r(157),
                    o = r(78),
                    s = r(680),
                    i = r(510);
                e = function(t) {
                    return t ? s(t) ? t : n(t) && !i(t) ? o(t) : [t] : []
                }, t.exports = e
            },
            647: (t, e, r) => {
                var n = r(640),
                    o = r(69),
                    s = /^\s+|\s+$/g;
                e = function(t, e) {
                    return null == e ? t.replace(s, "") : n(o(t, e), e)
                }, t.exports = e
            },
            193: (t, e, r) => {
                var n = r(43);

                function o(t, e) {
                    return t === e
                }
                e = function(t, e) {
                    return e = e || o, n(t, (function(t, r, n) {
                        for (var o = n.length; ++r < o;)
                            if (e(t, n[r])) return !1;
                        return !0
                    }))
                }, t.exports = e
            },
            737: (t, e, r) => {
                var n = r(366);
                e = function() {
                    var t = n(16);
                    return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, o[t[0]] + o[t[1]] + o[t[2]] + o[t[3]] + "-" + o[t[4]] + o[t[5]] + "-" + o[t[6]] + o[t[7]] + "-" + o[t[8]] + o[t[9]] + "-" + o[t[10]] + o[t[11]] + o[t[12]] + o[t[13]] + o[t[14]] + o[t[15]]
                };
                for (var o = [], s = 0; s < 256; s++) o[s] = (s + 256).toString(16).substr(1);
                t.exports = e
            },
            697: (t, e, r) => {
                var n = r(359);
                e = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
                    return new Promise((function(o, s) {
                        var i = n(),
                            u = function() {
                                new Promise((function(e, r) {
                                    try {
                                        e(t())
                                    } catch (t) {
                                        r(t)
                                    }
                                })).then((function(t) {
                                    var a = n() - i;
                                    t ? o(t) : e && a >= e ? s(Error("Wait timed out after ".concat(e, " ms"))) : setTimeout(u, r)
                                }), s)
                            };
                        u()
                    }))
                }, t.exports = e
            },
            298: (t, e) => {
                ! function(t) {
                    "use strict";
                    var e = function(t, e) {
                            for (var r = 0; r < e.length; r += 1) t(e[r], r, e)
                        },
                        r = function(t, r, n) {
                            var o = r;
                            return e((function(e, r) {
                                o = t(o, e, r)
                            }), n), o
                        },
                        n = function(t, r) {
                            var n = new Array(r.length);
                            return e((function(e, r) {
                                n[r] = t(e)
                            }), r), n
                        };

                    function o(t) {
                        return t.toString()
                    }
                    var s = function(t, e) {
                            return e.join(t)
                        },
                        i = function(t, e, r) {
                            return t + r + e
                        },
                        u = Array.prototype.concat,
                        a = 32767;

                    function c(t, e) {
                        for (var r = Object(t), n = 1; n < arguments.length; n++) {
                            var o = arguments[n];
                            if (null != o)
                                for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s])
                        }
                        return r
                    }

                    function l() {
                        this.init()
                    }

                    function p(t) {
                        this.expression = t
                    }

                    function h(t, e, r) {
                        e in t || (t[e] = r)
                    }

                    function f() {}

                    function d(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function g(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function v(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function m(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function y(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function E(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function N(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function w(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function b(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function A(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function T(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function S(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function x(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function O(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function _(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function R(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function I(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function C(t, e, r) {
                        arguments.length > 0 && this.init(t, e, r)
                    }

                    function P(t) {
                        for (; t && t.parentNode;) t = t.parentNode;
                        return t
                    }

                    function L(t, e, r) {
                        return C.applyPredicates(t.predicates, e, C.applyStep(t, e, r))
                    }

                    function D(t, e, r) {
                        return function(t) {
                            for (var e = [], r = 0; r < t.length; r += a) {
                                var n = t.slice(r, r + a);
                                e = u.apply(e, n)
                            }
                            return e
                        }(n(L.bind(null, r, t), e))
                    }

                    function F(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function M(t, e, r) {
                        arguments.length > 0 && this.init(t, e, r)
                    }

                    function U(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function B(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function V(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }
                    l.prototype = new Object, l.prototype.constructor = l, l.superclass = Object.prototype, l.prototype.init = function() {
                        this.reduceActions = [], this.reduceActions[3] = function(t) {
                            return new m(t[0], t[2])
                        }, this.reduceActions[5] = function(t) {
                            return new y(t[0], t[2])
                        }, this.reduceActions[7] = function(t) {
                            return new E(t[0], t[2])
                        }, this.reduceActions[8] = function(t) {
                            return new N(t[0], t[2])
                        }, this.reduceActions[10] = function(t) {
                            return new w(t[0], t[2])
                        }, this.reduceActions[11] = function(t) {
                            return new b(t[0], t[2])
                        }, this.reduceActions[12] = function(t) {
                            return new A(t[0], t[2])
                        }, this.reduceActions[13] = function(t) {
                            return new T(t[0], t[2])
                        }, this.reduceActions[15] = function(t) {
                            return new S(t[0], t[2])
                        }, this.reduceActions[16] = function(t) {
                            return new x(t[0], t[2])
                        }, this.reduceActions[18] = function(t) {
                            return new O(t[0], t[2])
                        }, this.reduceActions[19] = function(t) {
                            return new _(t[0], t[2])
                        }, this.reduceActions[20] = function(t) {
                            return new R(t[0], t[2])
                        }, this.reduceActions[22] = function(t) {
                            return new g(t[1])
                        }, this.reduceActions[24] = function(t) {
                            return new I(t[0], t[2])
                        }, this.reduceActions[25] = function(t) {
                            return new C(void 0, void 0, t[0])
                        }, this.reduceActions[27] = function(t) {
                            return t[0].locationPath = t[2], t[0]
                        }, this.reduceActions[28] = function(t) {
                            return t[0].locationPath = t[2], t[0].locationPath.steps.unshift(new M(M.DESCENDANTORSELF, U.nodeTest, [])), t[0]
                        }, this.reduceActions[29] = function(t) {
                            return new C(t[0], [], void 0)
                        }, this.reduceActions[30] = function(t) {
                            return Z.instance_of(t[0], C) ? (null == t[0].filterPredicates && (t[0].filterPredicates = []), t[0].filterPredicates.push(t[1]), t[0]) : new C(t[0], [t[1]], void 0)
                        }, this.reduceActions[32] = function(t) {
                            return t[1]
                        }, this.reduceActions[33] = function(t) {
                            return new W(t[0])
                        }, this.reduceActions[34] = function(t) {
                            return new j(t[0])
                        }, this.reduceActions[36] = function(t) {
                            return new V(t[0], [])
                        }, this.reduceActions[37] = function(t) {
                            return new V(t[0], t[2])
                        }, this.reduceActions[38] = function(t) {
                            return [t[0]]
                        }, this.reduceActions[39] = function(t) {
                            return t[2].unshift(t[0]), t[2]
                        }, this.reduceActions[43] = function(t) {
                            return new F(!0, [])
                        }, this.reduceActions[44] = function(t) {
                            return t[1].absolute = !0, t[1]
                        }, this.reduceActions[46] = function(t) {
                            return new F(!1, [t[0]])
                        }, this.reduceActions[47] = function(t) {
                            return t[0].steps.push(t[2]), t[0]
                        }, this.reduceActions[49] = function(t) {
                            return new M(t[0], t[1], [])
                        }, this.reduceActions[50] = function(t) {
                            return new M(M.CHILD, t[0], [])
                        }, this.reduceActions[51] = function(t) {
                            return new M(t[0], t[1], t[2])
                        }, this.reduceActions[52] = function(t) {
                            return new M(M.CHILD, t[0], t[1])
                        }, this.reduceActions[54] = function(t) {
                            return [t[0]]
                        }, this.reduceActions[55] = function(t) {
                            return t[1].unshift(t[0]), t[1]
                        }, this.reduceActions[56] = function(t) {
                            return "ancestor" == t[0] ? M.ANCESTOR : "ancestor-or-self" == t[0] ? M.ANCESTORORSELF : "attribute" == t[0] ? M.ATTRIBUTE : "child" == t[0] ? M.CHILD : "descendant" == t[0] ? M.DESCENDANT : "descendant-or-self" == t[0] ? M.DESCENDANTORSELF : "following" == t[0] ? M.FOLLOWING : "following-sibling" == t[0] ? M.FOLLOWINGSIBLING : "namespace" == t[0] ? M.NAMESPACE : "parent" == t[0] ? M.PARENT : "preceding" == t[0] ? M.PRECEDING : "preceding-sibling" == t[0] ? M.PRECEDINGSIBLING : "self" == t[0] ? M.SELF : -1
                        }, this.reduceActions[57] = function(t) {
                            return M.ATTRIBUTE
                        }, this.reduceActions[59] = function(t) {
                            return "comment" == t[0] ? U.commentTest : "text" == t[0] ? U.textTest : "processing-instruction" == t[0] ? U.anyPiTest : "node" == t[0] ? U.nodeTest : new U(-1, void 0)
                        }, this.reduceActions[60] = function(t) {
                            return new U.PITest(t[2])
                        }, this.reduceActions[61] = function(t) {
                            return t[1]
                        }, this.reduceActions[63] = function(t) {
                            return t[1].absolute = !0, t[1].steps.unshift(new M(M.DESCENDANTORSELF, U.nodeTest, [])), t[1]
                        }, this.reduceActions[64] = function(t) {
                            return t[0].steps.push(new M(M.DESCENDANTORSELF, U.nodeTest, [])), t[0].steps.push(t[2]), t[0]
                        }, this.reduceActions[65] = function(t) {
                            return new M(M.SELF, U.nodeTest, [])
                        }, this.reduceActions[66] = function(t) {
                            return new M(M.PARENT, U.nodeTest, [])
                        }, this.reduceActions[67] = function(t) {
                            return new B(t[1])
                        }, this.reduceActions[68] = function(t) {
                            return U.nameTestAny
                        }, this.reduceActions[69] = function(t) {
                            return new U.NameTestPrefixAny(t[0].split(":")[0])
                        }, this.reduceActions[70] = function(t) {
                            return new U.NameTestQName(t[0])
                        }
                    }, l.actionTable = [" s s        sssssssss    s ss  s  ss", "                 s                  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                rrrrr               ", " s s        sssssssss    s ss  s  ss", "rs  rrrrrrrr s  sssssrrrrrr  rrs rs ", " s s        sssssssss    s ss  s  ss", "                            s       ", "                            s       ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "  s                                 ", "                            s       ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "a                                   ", "r       s                    rr  r  ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrs  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  srrrrrrrr         rrrrrrs rr sr  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                sssss               ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "              s                     ", "                             s      ", "                rrrrr               ", " s s        sssssssss    s sss s  ss", "r  srrrrrrrr         rrrrrrs rr  r  ", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss      ss  s  ss", " s s        sssssssss    s ss  s  ss", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             rr     ", "                             s      ", "                             rs     ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "                                 r  ", "                                 s  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s s        sssssssss    s ss  s  ss", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             r      "], l.actionTableNumber = [" 1 0        /.-,+*)('    & %$  #  \"!", "                 J                  ", "a  aaaaaaaaa         aaaaaaa aa  a  ", "                YYYYY               ", " 1 0        /.-,+*)('    & %$  #  \"!", "K1  KKKKKKKK .  +*)('KKKKKK  KK# K\" ", " 1 0        /.-,+*)('    & %$  #  \"!", "                            N       ", "                            O       ", "e  eeeeeeeee         eeeeeee ee ee  ", "f  fffffffff         fffffff ff ff  ", "d  ddddddddd         ddddddd dd dd  ", "B  BBBBBBBBB         BBBBBBB BB BB  ", "A  AAAAAAAAA         AAAAAAA AA AA  ", "  P                                 ", "                            Q       ", " 1           .  +*)('          #  \" ", "b  bbbbbbbbb         bbbbbbb bb  b  ", "                                    ", "!       S                    !!  !  ", '"      T"                    ""  "  ', "$   V  $$            U       $$  $  ", "&   &ZY&&            &XW     &&  &  ", ")   )))))            )))\\[   ))  )  ", ".   ....._^]         .....   ..  .  ", "1   11111111         11111   11  1  ", "5   55555555         55555`  55  5  ", "7   77777777         777777  77  7  ", "9   99999999         999999  99  9  ", ":  c::::::::         ::::::b :: a:  ", "I  fIIIIIIII         IIIIIIe II  I  ", "=  =========         ======= == ==  ", "?  ?????????         ??????? ?? ??  ", "C  CCCCCCCCC         CCCCCCC CC CC  ", "J   JJJJJJJJ         JJJJJJ  JJ  J  ", "M   MMMMMMMM         MMMMMM  MM  M  ", "N  NNNNNNNNN         NNNNNNN NN  N  ", "P  PPPPPPPPP         PPPPPPP PP  P  ", "                +*)('               ", "R  RRRRRRRRR         RRRRRRR RR aR  ", "U  UUUUUUUUU         UUUUUUU UU  U  ", "Z  ZZZZZZZZZ         ZZZZZZZ ZZ ZZ  ", "c  ccccccccc         ccccccc cc cc  ", "                             j      ", "L  fLLLLLLLL         LLLLLLe LL  L  ", "6   66666666         66666   66  6  ", "              k                     ", "                             l      ", "                XXXXX               ", " 1 0        /.-,+*)('    & %$m #  \"!", "_  f________         ______e __  _  ", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('      %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1           .  +*)('          #  \" ", " 1           .  +*)('          #  \" ", ">  >>>>>>>>>         >>>>>>> >> >>  ", " 1           .  +*)('          #  \" ", " 1           .  +*)('          #  \" ", "Q  QQQQQQQQQ         QQQQQQQ QQ aQ  ", "V  VVVVVVVVV         VVVVVVV VV aV  ", "T  TTTTTTTTT         TTTTTTT TT  T  ", "@  @@@@@@@@@         @@@@@@@ @@ @@  ", "                                   ", "[  [[[[[[[[[         [[[[[[[ [[ [[  ", "D  DDDDDDDDD         DDDDDDD DD DD  ", "                             HH     ", "                                   ", "                             F     ", "#      T#                    ##  #  ", "%   V  %%            U       %%  %  ", "'   'ZY''            'XW     ''  '  ", "(   (ZY((            (XW     ((  (  ", "+   +++++            +++\\[   ++  +  ", "*   *****            ***\\[   **  *  ", "-   -----            ---\\[   --  -  ", ",   ,,,,,            ,,,\\[   ,,  ,  ", "0   00000_^]         00000   00  0  ", "/   /////_^]         /////   //  /  ", "2   22222222         22222   22  2  ", "3   33333333         33333   33  3  ", "4   44444444         44444   44  4  ", "8   88888888         888888  88  8  ", "                                 ^  ", "                                   ", ";  f;;;;;;;;         ;;;;;;e ;;  ;  ", "<  f<<<<<<<<         <<<<<<e <<  <  ", "O  OOOOOOOOO         OOOOOOO OO  O  ", "`  `````````         ``````` ``  `  ", "S  SSSSSSSSS         SSSSSSS SS  S  ", "W  WWWWWWWWW         WWWWWWW WW  W  ", "\\  \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\ \\\\ \\\\  ", "E  EEEEEEEEE         EEEEEEE EE EE  ", " 1 0        /.-,+*)('    & %$  #  \"!", "]  ]]]]]]]]]         ]]]]]]] ]] ]]  ", "                             G      "], l.gotoTable = ["3456789:;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "L456789:;<=>?@ AB  CDEFGH IJ ", "            M        EFGH IJ ", "       N;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "            S        EFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "              e              ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                        h  J ", "              i          j   ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABpqCDEFGH IJ ", "                             ", "  r6789:;<=>?@ AB  CDEFGH IJ ", "   s789:;<=>?@ AB  CDEFGH IJ ", "    t89:;<=>?@ AB  CDEFGH IJ ", "    u89:;<=>?@ AB  CDEFGH IJ ", "     v9:;<=>?@ AB  CDEFGH IJ ", "     w9:;<=>?@ AB  CDEFGH IJ ", "     x9:;<=>?@ AB  CDEFGH IJ ", "     y9:;<=>?@ AB  CDEFGH IJ ", "      z:;<=>?@ AB  CDEFGH IJ ", "      {:;<=>?@ AB  CDEFGH IJ ", "       |;<=>?@ AB  CDEFGH IJ ", "       };<=>?@ AB  CDEFGH IJ ", "       ~;<=>?@ AB  CDEFGH IJ ", "         =>?@ AB  CDEFGH IJ ", "456789:;<=>?@ AB  CDEFGH IJ", "                    EFGH IJ ", "                    EFGH IJ ", "                             ", "                      GH IJ ", "                      GH IJ ", "              i             ", "              i             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABqCDEFGH IJ ", "                             ", "                             "], l.productions = [
                        [1, 1, 2],
                        [2, 1, 3],
                        [3, 1, 4],
                        [3, 3, 3, -9, 4],
                        [4, 1, 5],
                        [4, 3, 4, -8, 5],
                        [5, 1, 6],
                        [5, 3, 5, -22, 6],
                        [5, 3, 5, -5, 6],
                        [6, 1, 7],
                        [6, 3, 6, -23, 7],
                        [6, 3, 6, -24, 7],
                        [6, 3, 6, -6, 7],
                        [6, 3, 6, -7, 7],
                        [7, 1, 8],
                        [7, 3, 7, -25, 8],
                        [7, 3, 7, -26, 8],
                        [8, 1, 9],
                        [8, 3, 8, -12, 9],
                        [8, 3, 8, -11, 9],
                        [8, 3, 8, -10, 9],
                        [9, 1, 10],
                        [9, 2, -26, 9],
                        [10, 1, 11],
                        [10, 3, 10, -27, 11],
                        [11, 1, 12],
                        [11, 1, 13],
                        [11, 3, 13, -28, 14],
                        [11, 3, 13, -4, 14],
                        [13, 1, 15],
                        [13, 2, 13, 16],
                        [15, 1, 17],
                        [15, 3, -29, 2, -30],
                        [15, 1, -15],
                        [15, 1, -16],
                        [15, 1, 18],
                        [18, 3, -13, -29, -30],
                        [18, 4, -13, -29, 19, -30],
                        [19, 1, 20],
                        [19, 3, 20, -31, 19],
                        [20, 1, 2],
                        [12, 1, 14],
                        [12, 1, 21],
                        [21, 1, -28],
                        [21, 2, -28, 14],
                        [21, 1, 22],
                        [14, 1, 23],
                        [14, 3, 14, -28, 23],
                        [14, 1, 24],
                        [23, 2, 25, 26],
                        [23, 1, 26],
                        [23, 3, 25, 26, 27],
                        [23, 2, 26, 27],
                        [23, 1, 28],
                        [27, 1, 16],
                        [27, 2, 16, 27],
                        [25, 2, -14, -3],
                        [25, 1, -32],
                        [26, 1, 29],
                        [26, 3, -20, -29, -30],
                        [26, 4, -21, -29, -15, -30],
                        [16, 3, -33, 30, -34],
                        [30, 1, 2],
                        [22, 2, -4, 14],
                        [24, 3, 14, -4, 23],
                        [28, 1, -35],
                        [28, 1, -2],
                        [17, 2, -36, -18],
                        [29, 1, -17],
                        [29, 1, -19],
                        [29, 1, -18]
                    ], l.DOUBLEDOT = 2, l.DOUBLECOLON = 3, l.DOUBLESLASH = 4, l.NOTEQUAL = 5, l.LESSTHANOREQUAL = 6, l.GREATERTHANOREQUAL = 7, l.AND = 8, l.OR = 9, l.MOD = 10, l.DIV = 11, l.MULTIPLYOPERATOR = 12, l.FUNCTIONNAME = 13, l.AXISNAME = 14, l.LITERAL = 15, l.NUMBER = 16, l.ASTERISKNAMETEST = 17, l.QNAME = 18, l.NCNAMECOLONASTERISK = 19, l.NODETYPE = 20, l.PROCESSINGINSTRUCTIONWITHLITERAL = 21, l.EQUALS = 22, l.LESSTHAN = 23, l.GREATERTHAN = 24, l.PLUS = 25, l.MINUS = 26, l.BAR = 27, l.SLASH = 28, l.LEFTPARENTHESIS = 29, l.RIGHTPARENTHESIS = 30, l.COMMA = 31, l.AT = 32, l.LEFTBRACKET = 33, l.RIGHTBRACKET = 34, l.DOT = 35, l.DOLLAR = 36, l.prototype.tokenize = function(t) {
                        for (var e = [], r = [], n = t + "\0", o = 0, s = n.charAt(o++);;) {
                            for (;
                                " " == s || "\t" == s || "\r" == s || "\n" == s;) s = n.charAt(o++);
                            if ("\0" == s || o >= n.length) break;
                            if ("(" != s)
                                if (")" != s)
                                    if ("[" != s)
                                        if ("]" != s)
                                            if ("@" != s)
                                                if ("," != s)
                                                    if ("|" != s)
                                                        if ("+" != s)
                                                            if ("-" != s)
                                                                if ("=" != s)
                                                                    if ("$" != s)
                                                                        if ("." != s)
                                                                            if ("'" != s && '"' != s)
                                                                                if (s >= "0" && s <= "9") {
                                                                                    p = s;
                                                                                    for (s = n.charAt(o++); s >= "0" && s <= "9";) p += s, s = n.charAt(o++);
                                                                                    if ("." == s && n.charAt(o) >= "0" && n.charAt(o) <= "9")
                                                                                        for (p += s, p += n.charAt(o++), s = n.charAt(o++); s >= "0" && s <= "9";) p += s, s = n.charAt(o++);
                                                                                    e.push(l.NUMBER), r.push(p)
                                                                                } else if ("*" != s)
                                if (":" != s || ":" != n.charAt(o))
                                    if ("/" != s)
                                        if ("!" != s || "=" != n.charAt(o))
                                            if ("<" != s)
                                                if (">" != s) {
                                                    if ("_" != s && !Z.isLetter(s.charCodeAt(0))) throw new Error("Unexpected character " + s);
                                                    var i = s;
                                                    for (s = n.charAt(o++); Z.isNCNameChar(s.charCodeAt(0));) i += s, s = n.charAt(o++);
                                                    if (e.length > 0 && (u = e[e.length - 1]) != l.AT && u != l.DOUBLECOLON && u != l.LEFTPARENTHESIS && u != l.LEFTBRACKET && u != l.AND && u != l.OR && u != l.MOD && u != l.DIV && u != l.MULTIPLYOPERATOR && u != l.SLASH && u != l.DOUBLESLASH && u != l.BAR && u != l.PLUS && u != l.MINUS && u != l.EQUALS && u != l.NOTEQUAL && u != l.LESSTHAN && u != l.LESSTHANOREQUAL && u != l.GREATERTHAN && u != l.GREATERTHANOREQUAL) {
                                                        if ("and" == i) {
                                                            e.push(l.AND), r.push(i);
                                                            continue
                                                        }
                                                        if ("or" == i) {
                                                            e.push(l.OR), r.push(i);
                                                            continue
                                                        }
                                                        if ("mod" == i) {
                                                            e.push(l.MOD), r.push(i);
                                                            continue
                                                        }
                                                        if ("div" == i) {
                                                            e.push(l.DIV), r.push(i);
                                                            continue
                                                        }
                                                    }
                                                    if (":" == s) {
                                                        if ("*" == n.charAt(o)) {
                                                            e.push(l.NCNAMECOLONASTERISK), r.push(i + ":*"), o++, s = n.charAt(o++);
                                                            continue
                                                        }
                                                        if ("_" == n.charAt(o) || Z.isLetter(n.charCodeAt(o))) {
                                                            for (i += ":", s = n.charAt(o++); Z.isNCNameChar(s.charCodeAt(0));) i += s, s = n.charAt(o++);
                                                            if ("(" == s) {
                                                                e.push(l.FUNCTIONNAME), r.push(i);
                                                                continue
                                                            }
                                                            e.push(l.QNAME), r.push(i);
                                                            continue
                                                        }
                                                        if (":" == n.charAt(o)) {
                                                            e.push(l.AXISNAME), r.push(i);
                                                            continue
                                                        }
                                                    }
                                                    if ("(" == s) {
                                                        if ("comment" == i || "text" == i || "node" == i) {
                                                            e.push(l.NODETYPE), r.push(i);
                                                            continue
                                                        }
                                                        if ("processing-instruction" == i) {
                                                            ")" == n.charAt(o) ? e.push(l.NODETYPE) : e.push(l.PROCESSINGINSTRUCTIONWITHLITERAL), r.push(i);
                                                            continue
                                                        }
                                                        e.push(l.FUNCTIONNAME), r.push(i);
                                                        continue
                                                    }
                                                    e.push(l.QNAME), r.push(i)
                                                } else {
                                                    if ("=" == n.charAt(o)) {
                                                        e.push(l.GREATERTHANOREQUAL), r.push(">="), o++, s = n.charAt(o++);
                                                        continue
                                                    }
                                                    e.push(l.GREATERTHAN), r.push(">"), s = n.charAt(o++)
                                                }
                            else {
                                if ("=" == n.charAt(o)) {
                                    e.push(l.LESSTHANOREQUAL), r.push("<="), o++, s = n.charAt(o++);
                                    continue
                                }
                                e.push(l.LESSTHAN), r.push("<"), s = n.charAt(o++)
                            } else e.push(l.NOTEQUAL), r.push("!="), o++, s = n.charAt(o++);
                            else {
                                if ("/" == (s = n.charAt(o++))) {
                                    e.push(l.DOUBLESLASH), r.push("//"), s = n.charAt(o++);
                                    continue
                                }
                                e.push(l.SLASH), r.push("/")
                            } else e.push(l.DOUBLECOLON), r.push("::"), o++, s = n.charAt(o++);
                            else {
                                var u;
                                if (e.length > 0 && (u = e[e.length - 1]) != l.AT && u != l.DOUBLECOLON && u != l.LEFTPARENTHESIS && u != l.LEFTBRACKET && u != l.AND && u != l.OR && u != l.MOD && u != l.DIV && u != l.MULTIPLYOPERATOR && u != l.SLASH && u != l.DOUBLESLASH && u != l.BAR && u != l.PLUS && u != l.MINUS && u != l.EQUALS && u != l.NOTEQUAL && u != l.LESSTHAN && u != l.LESSTHANOREQUAL && u != l.GREATERTHAN && u != l.GREATERTHANOREQUAL) {
                                    e.push(l.MULTIPLYOPERATOR), r.push(s), s = n.charAt(o++);
                                    continue
                                }
                                e.push(l.ASTERISKNAMETEST), r.push(s), s = n.charAt(o++)
                            } else {
                                for (var a = s, c = ""; o < n.length && (s = n.charAt(o)) !== a;) c += s, o += 1;
                                if (s !== a) throw z.fromMessage("Unterminated string literal: " + a + c);
                                o += 1, e.push(l.LITERAL), r.push(c), s = n.charAt(o++)
                            } else {
                                if ("." == (s = n.charAt(o++))) {
                                    e.push(l.DOUBLEDOT), r.push(".."), s = n.charAt(o++);
                                    continue
                                }
                                if (s >= "0" && s <= "9") {
                                    var p = "." + s;
                                    for (s = n.charAt(o++); s >= "0" && s <= "9";) p += s, s = n.charAt(o++);
                                    e.push(l.NUMBER), r.push(p);
                                    continue
                                }
                                e.push(l.DOT), r.push(".")
                            } else e.push(l.DOLLAR), r.push(s), s = n.charAt(o++);
                            else e.push(l.EQUALS), r.push(s), s = n.charAt(o++);
                            else e.push(l.MINUS), r.push(s), s = n.charAt(o++);
                            else e.push(l.PLUS), r.push(s), s = n.charAt(o++);
                            else e.push(l.BAR), r.push(s), s = n.charAt(o++);
                            else e.push(l.COMMA), r.push(s), s = n.charAt(o++);
                            else e.push(l.AT), r.push(s), s = n.charAt(o++);
                            else e.push(l.RIGHTBRACKET), r.push(s), s = n.charAt(o++);
                            else e.push(l.LEFTBRACKET), r.push(s), s = n.charAt(o++);
                            else e.push(l.RIGHTPARENTHESIS), r.push(s), s = n.charAt(o++);
                            else e.push(l.LEFTPARENTHESIS), r.push(s), s = n.charAt(o++)
                        }
                        return e.push(1), r.push("[EOF]"), [e, r]
                    }, l.SHIFT = "s", l.REDUCE = "r", l.ACCEPT = "a", l.prototype.parse = function(t) {
                        var e, r, n = this.tokenize(t);
                        if (null != n) {
                            e = n[0], r = n[1];
                            var o, s, i = 0,
                                u = [],
                                a = [],
                                c = [];
                            for (u.push(0), a.push(1), c.push("_S"), o = e[i], s = r[i++];;) switch (t = u[u.length - 1], l.actionTable[t].charAt(o - 1)) {
                                case l.SHIFT:
                                    a.push(-o), c.push(s), u.push(l.actionTableNumber[t].charCodeAt(o - 1) - 32), o = e[i], s = r[i++];
                                    break;
                                case l.REDUCE:
                                    for (var h = l.productions[l.actionTableNumber[t].charCodeAt(o - 1) - 32][1], f = [], d = 0; d < h; d++) a.pop(), f.unshift(c.pop()), u.pop();
                                    var g = u[u.length - 1];
                                    a.push(l.productions[l.actionTableNumber[t].charCodeAt(o - 1) - 32][0]), null == this.reduceActions[l.actionTableNumber[t].charCodeAt(o - 1) - 32] ? c.push(f[0]) : c.push(this.reduceActions[l.actionTableNumber[t].charCodeAt(o - 1) - 32](f)), u.push(l.gotoTable[g].charCodeAt(l.productions[l.actionTableNumber[t].charCodeAt(o - 1) - 32][0] - 2) - 33);
                                    break;
                                case l.ACCEPT:
                                    return new p(c.pop());
                                default:
                                    throw new Error("XPath parse error")
                            }
                        }
                    }, p.prototype = new Object, p.prototype.constructor = p, p.superclass = Object.prototype, p.prototype.toString = function() {
                        return this.expression.toString()
                    }, p.prototype.evaluate = function(t) {
                        return t.contextNode = t.expressionContextNode, t.contextSize = 1, t.contextPosition = 1, t.isHtml && (h(t, "caseInsensitive", !0), h(t, "allowAnyNamespaceForNoPrefix", !0)), h(t, "caseInsensitive", !1), this.expression.evaluate(t)
                    }, p.XML_NAMESPACE_URI = "http://www.w3.org/XML/1998/namespace", p.XMLNS_NAMESPACE_URI = "http://www.w3.org/2000/xmlns/", f.prototype = new Object, f.prototype.constructor = f, f.superclass = Object.prototype, f.prototype.init = function() {}, f.prototype.toString = function() {
                        return "<Expression>"
                    }, f.prototype.evaluate = function(t) {
                        throw new Error("Could not evaluate expression.")
                    }, d.prototype = new f, d.prototype.constructor = d, d.superclass = f.prototype, d.prototype.init = function(t) {
                        this.rhs = t
                    }, g.prototype = new d, g.prototype.constructor = g, g.superclass = d.prototype, g.prototype.init = function(t) {
                        g.superclass.init.call(this, t)
                    }, g.prototype.evaluate = function(t) {
                        return this.rhs.evaluate(t).number().negate()
                    }, g.prototype.toString = function() {
                        return "-" + this.rhs.toString()
                    }, v.prototype = new f, v.prototype.constructor = v, v.superclass = f.prototype, v.prototype.init = function(t, e) {
                        this.lhs = t, this.rhs = e
                    }, m.prototype = new v, m.prototype.constructor = m, m.superclass = v.prototype, m.prototype.init = function(t, e) {
                        m.superclass.init.call(this, t, e)
                    }, m.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")"
                    }, m.prototype.evaluate = function(t) {
                        var e = this.lhs.evaluate(t).bool();
                        return e.booleanValue() ? e : this.rhs.evaluate(t).bool()
                    }, y.prototype = new v, y.prototype.constructor = y, y.superclass = v.prototype, y.prototype.init = function(t, e) {
                        y.superclass.init.call(this, t, e)
                    }, y.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")"
                    }, y.prototype.evaluate = function(t) {
                        var e = this.lhs.evaluate(t).bool();
                        return e.booleanValue() ? this.rhs.evaluate(t).bool() : e
                    }, E.prototype = new v, E.prototype.constructor = E, E.superclass = v.prototype, E.prototype.init = function(t, e) {
                        E.superclass.init.call(this, t, e)
                    }, E.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")"
                    }, E.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).equals(this.rhs.evaluate(t))
                    }, N.prototype = new v, N.prototype.constructor = N, N.superclass = v.prototype, N.prototype.init = function(t, e) {
                        N.superclass.init.call(this, t, e)
                    }, N.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " != " + this.rhs.toString() + ")"
                    }, N.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).notequal(this.rhs.evaluate(t))
                    }, w.prototype = new v, w.prototype.constructor = w, w.superclass = v.prototype, w.prototype.init = function(t, e) {
                        w.superclass.init.call(this, t, e)
                    }, w.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).lessthan(this.rhs.evaluate(t))
                    }, w.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " < " + this.rhs.toString() + ")"
                    }, b.prototype = new v, b.prototype.constructor = b, b.superclass = v.prototype, b.prototype.init = function(t, e) {
                        b.superclass.init.call(this, t, e)
                    }, b.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).greaterthan(this.rhs.evaluate(t))
                    }, b.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")"
                    }, A.prototype = new v, A.prototype.constructor = A, A.superclass = v.prototype, A.prototype.init = function(t, e) {
                        A.superclass.init.call(this, t, e)
                    }, A.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).lessthanorequal(this.rhs.evaluate(t))
                    }, A.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " <= " + this.rhs.toString() + ")"
                    }, T.prototype = new v, T.prototype.constructor = T, T.superclass = v.prototype, T.prototype.init = function(t, e) {
                        T.superclass.init.call(this, t, e)
                    }, T.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).greaterthanorequal(this.rhs.evaluate(t))
                    }, T.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " >= " + this.rhs.toString() + ")"
                    }, S.prototype = new v, S.prototype.constructor = S, S.superclass = v.prototype, S.prototype.init = function(t, e) {
                        S.superclass.init.call(this, t, e)
                    }, S.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().plus(this.rhs.evaluate(t).number())
                    }, S.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")"
                    }, x.prototype = new v, x.prototype.constructor = x, x.superclass = v.prototype, x.prototype.init = function(t, e) {
                        x.superclass.init.call(this, t, e)
                    }, x.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().minus(this.rhs.evaluate(t).number())
                    }, x.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")"
                    }, O.prototype = new v, O.prototype.constructor = O, O.superclass = v.prototype, O.prototype.init = function(t, e) {
                        O.superclass.init.call(this, t, e)
                    }, O.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().multiply(this.rhs.evaluate(t).number())
                    }, O.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")"
                    }, _.prototype = new v, _.prototype.constructor = _, _.superclass = v.prototype, _.prototype.init = function(t, e) {
                        _.superclass.init.call(this, t, e)
                    }, _.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().div(this.rhs.evaluate(t).number())
                    }, _.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " div " + this.rhs.toString() + ")"
                    }, R.prototype = new v, R.prototype.constructor = R, R.superclass = v.prototype, R.prototype.init = function(t, e) {
                        R.superclass.init.call(this, t, e)
                    }, R.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().mod(this.rhs.evaluate(t).number())
                    }, R.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " mod " + this.rhs.toString() + ")"
                    }, I.prototype = new v, I.prototype.constructor = I, I.superclass = v.prototype, I.prototype.init = function(t, e) {
                        I.superclass.init.call(this, t, e)
                    }, I.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).nodeset().union(this.rhs.evaluate(t).nodeset())
                    }, I.prototype.toString = function() {
                        return n(o, [this.lhs, this.rhs]).join(" | ")
                    }, C.prototype = new f, C.prototype.constructor = C, C.superclass = f.prototype, C.prototype.init = function(t, e, r) {
                        C.superclass.init.call(this), this.filter = t, this.filterPredicates = e, this.locationPath = r
                    }, C.applyPredicates = function(t, n, o) {
                        if (0 === t.length) return o;
                        var s = n.extend({});
                        return r((function(t, r) {
                            return s.contextSize = t.length, n = function(t, e) {
                                return s.contextNode = t, s.contextPosition = e + 1, C.predicateMatches(r, s)
                            }, o = [], e((function(t, e) {
                                n(t, e) && o.push(t)
                            }), t), o;
                            var n, o
                        }), o, t)
                    }, C.getRoot = function(t, e) {
                        var r = e[0];
                        if (9 === r.nodeType) return r;
                        if (t.virtualRoot) return t.virtualRoot;
                        var n = r.ownerDocument;
                        if (n) return n;
                        for (var o = r; null != o.parentNode;) o = o.parentNode;
                        return o
                    }, C.applyStep = function(t, e, r) {
                        var n = [];
                        switch (e.contextNode = r, t.axis) {
                            case M.ANCESTOR:
                                if (e.contextNode === e.virtualRoot) break;
                                for (o = 2 == e.contextNode.nodeType ? C.getOwnerElement(e.contextNode) : e.contextNode.parentNode; null != o && (t.nodeTest.matches(o, e) && n.push(o), o !== e.virtualRoot);) o = o.parentNode;
                                break;
                            case M.ANCESTORORSELF:
                                for (var o = e.contextNode; null != o && (t.nodeTest.matches(o, e) && n.push(o), o !== e.virtualRoot); o = 2 == o.nodeType ? C.getOwnerElement(o) : o.parentNode);
                                break;
                            case M.ATTRIBUTE:
                                var s = e.contextNode.attributes;
                                if (null != s)
                                    for (var i = 0; i < s.length; i++) {
                                        o = s.item(i);
                                        t.nodeTest.matches(o, e) && n.push(o)
                                    }
                                break;
                            case M.CHILD:
                                for (o = e.contextNode.firstChild; null != o; o = o.nextSibling) t.nodeTest.matches(o, e) && n.push(o);
                                break;
                            case M.DESCENDANT:
                                for (var u = [e.contextNode.firstChild]; u.length > 0;)
                                    for (o = u.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (u.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling;
                                break;
                            case M.DESCENDANTORSELF:
                                t.nodeTest.matches(e.contextNode, e) && n.push(e.contextNode);
                                for (u = [e.contextNode.firstChild]; u.length > 0;)
                                    for (o = u.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (u.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling;
                                break;
                            case M.FOLLOWING:
                                if (e.contextNode === e.virtualRoot) break;
                                u = [];
                                null != e.contextNode.firstChild ? u.unshift(e.contextNode.firstChild) : u.unshift(e.contextNode.nextSibling);
                                for (o = e.contextNode.parentNode; null != o && 9 != o.nodeType && o !== e.virtualRoot; o = o.parentNode) u.unshift(o.nextSibling);
                                do {
                                    for (o = u.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (u.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling
                                } while (u.length > 0);
                                break;
                            case M.FOLLOWINGSIBLING:
                                if (e.contextNode === e.virtualRoot) break;
                                for (o = e.contextNode.nextSibling; null != o; o = o.nextSibling) t.nodeTest.matches(o, e) && n.push(o);
                                break;
                            case M.NAMESPACE:
                                var a = {};
                                if (1 == e.contextNode.nodeType) {
                                    a.xml = p.XML_NAMESPACE_URI, a.xmlns = p.XMLNS_NAMESPACE_URI;
                                    for (o = e.contextNode; null != o && 1 == o.nodeType; o = o.parentNode)
                                        for (i = 0; i < o.attributes.length; i++) {
                                            var c = o.attributes.item(i),
                                                l = String(c.name);
                                            if ("xmlns" == l) null == a[""] && (a[""] = c.value);
                                            else if (l.length > 6 && "xmlns:" == l.substring(0, 6)) {
                                                null == a[h = l.substring(6, l.length)] && (a[h] = c.value)
                                            }
                                        }
                                    for (var h in a) {
                                        var f = new q(h, a[h], e.contextNode);
                                        t.nodeTest.matches(f, e) && n.push(f)
                                    }
                                }
                                break;
                            case M.PARENT:
                                o = null, e.contextNode !== e.virtualRoot && (o = 2 == e.contextNode.nodeType ? C.getOwnerElement(e.contextNode) : e.contextNode.parentNode), null != o && t.nodeTest.matches(o, e) && n.push(o);
                                break;
                            case M.PRECEDING:
                                u = null != e.virtualRoot ? [e.virtualRoot] : [P(e.contextNode)];
                                t: for (; u.length > 0;)
                                    for (o = u.pop(); null != o;) {
                                        if (o == e.contextNode) break t;
                                        t.nodeTest.matches(o, e) && n.unshift(o), null != o.firstChild ? (u.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling
                                    }
                                break;
                            case M.PRECEDINGSIBLING:
                                if (e.contextNode === e.virtualRoot) break;
                                for (o = e.contextNode.previousSibling; null != o; o = o.previousSibling) t.nodeTest.matches(o, e) && n.push(o);
                                break;
                            case M.SELF:
                                t.nodeTest.matches(e.contextNode, e) && n.push(e.contextNode)
                        }
                        return n
                    }, C.applySteps = function(t, e, n) {
                        return r(D.bind(null, e), n, t)
                    }, C.prototype.applyFilter = function(t, e) {
                        if (!this.filter) return {
                            nodes: [t.contextNode]
                        };
                        var r = this.filter.evaluate(t);
                        if (!Z.instance_of(r, k)) {
                            if (null != this.filterPredicates && this.filterPredicates.length > 0 || null != this.locationPath) throw new Error("Path expression filter must evaluate to a nodeset if predicates or location path are used");
                            return {
                                nonNodes: r
                            }
                        }
                        return {
                            nodes: C.applyPredicates(this.filterPredicates || [], e, r.toUnsortedArray())
                        }
                    }, C.applyLocationPath = function(t, e, r) {
                        if (!t) return r;
                        var n = t.absolute ? [C.getRoot(e, r)] : r;
                        return C.applySteps(t.steps, e, n)
                    }, C.prototype.evaluate = function(t) {
                        var e = c(new $, t),
                            r = this.applyFilter(t, e);
                        if ("nonNodes" in r) return r.nonNodes;
                        var n = new k;
                        return n.addArray(C.applyLocationPath(this.locationPath, e, r.nodes)), n
                    }, C.predicateMatches = function(t, e) {
                        var r = t.evaluate(e);
                        return Z.instance_of(r, j) ? e.contextPosition === r.numberValue() : r.booleanValue()
                    }, C.predicateString = function(t) {
                        return i("[", "]", t.toString())
                    }, C.predicatesString = function(t) {
                        return s("", n(C.predicateString, t))
                    }, C.prototype.toString = function() {
                        if (null != this.filter) {
                            var t = o(this.filter);
                            return Z.instance_of(this.filter, W) ? i("'", "'", t) : null != this.filterPredicates && this.filterPredicates.length ? i("(", ")", t) + C.predicatesString(this.filterPredicates) : null != this.locationPath ? t + (this.locationPath.absolute ? "" : "/") + o(this.locationPath) : t
                        }
                        return o(this.locationPath)
                    }, C.getOwnerElement = function(t) {
                        if (t.ownerElement) return t.ownerElement;
                        try {
                            if (t.selectSingleNode) return t.selectSingleNode("..")
                        } catch (t) {}
                        for (var e = (9 == t.nodeType ? t : t.ownerDocument).getElementsByTagName("*"), r = 0; r < e.length; r++)
                            for (var n = e.item(r), o = n.attributes, s = 0; s < o.length; s++) {
                                if (o.item(s) === t) return n
                            }
                        return null
                    }, F.prototype = new Object, F.prototype.constructor = F, F.superclass = Object.prototype, F.prototype.init = function(t, e) {
                        this.absolute = t, this.steps = e
                    }, F.prototype.toString = function() {
                        return (this.absolute ? "/" : "") + n(o, this.steps).join("/")
                    }, M.prototype = new Object, M.prototype.constructor = M, M.superclass = Object.prototype, M.prototype.init = function(t, e, r) {
                        this.axis = t, this.nodeTest = e, this.predicates = r
                    }, M.prototype.toString = function() {
                        return M.STEPNAMES[this.axis] + "::" + this.nodeTest.toString() + C.predicatesString(this.predicates)
                    }, M.ANCESTOR = 0, M.ANCESTORORSELF = 1, M.ATTRIBUTE = 2, M.CHILD = 3, M.DESCENDANT = 4, M.DESCENDANTORSELF = 5, M.FOLLOWING = 6, M.FOLLOWINGSIBLING = 7, M.NAMESPACE = 8, M.PARENT = 9, M.PRECEDING = 10, M.PRECEDINGSIBLING = 11, M.SELF = 12, M.STEPNAMES = r((function(t, e) {
                        return t[e[0]] = e[1], t
                    }), {}, [
                        [M.ANCESTOR, "ancestor"],
                        [M.ANCESTORORSELF, "ancestor-or-self"],
                        [M.ATTRIBUTE, "attribute"],
                        [M.CHILD, "child"],
                        [M.DESCENDANT, "descendant"],
                        [M.DESCENDANTORSELF, "descendant-or-self"],
                        [M.FOLLOWING, "following"],
                        [M.FOLLOWINGSIBLING, "following-sibling"],
                        [M.NAMESPACE, "namespace"],
                        [M.PARENT, "parent"],
                        [M.PRECEDING, "preceding"],
                        [M.PRECEDINGSIBLING, "preceding-sibling"],
                        [M.SELF, "self"]
                    ]), U.prototype = new Object, U.prototype.constructor = U, U.superclass = Object.prototype, U.prototype.init = function(t, e) {
                        this.type = t, this.value = e
                    }, U.prototype.toString = function() {
                        return "<unknown nodetest type>"
                    }, U.prototype.matches = function(t, e) {
                        console.warn("unknown node test type")
                    }, U.NAMETESTANY = 0, U.NAMETESTPREFIXANY = 1, U.NAMETESTQNAME = 2, U.COMMENT = 3, U.TEXT = 4, U.PI = 5, U.NODE = 6, U.isNodeType = function(t) {
                        return function(e) {
                            return function(t, e) {
                                for (var r = 0; r < t.length; r += 1)
                                    if (t[r] === e) return !0;
                                return !1
                            }(t, e.nodeType)
                        }
                    }, U.makeNodeTestType = function(t, e, r) {
                        var n = r || function() {};
                        return n.prototype = new U(t), n.prototype.constructor = n, c(n.prototype, e), n
                    }, U.makeNodeTypeTest = function(t, e, r) {
                        return new(U.makeNodeTestType(t, {
                            matches: U.isNodeType(e),
                            toString: (n = r, function() {
                                return n
                            })
                        }));
                        var n
                    }, U.hasPrefix = function(t) {
                        return t.prefix || -1 !== (t.nodeName || t.tagName).indexOf(":")
                    }, U.isElementOrAttribute = U.isNodeType([1, 2]), U.nameSpaceMatches = function(t, e, r) {
                        var n = r.namespaceURI || "";
                        if (!t) return !n || e.allowAnyNamespaceForNoPrefix && !U.hasPrefix(r);
                        var o = e.namespaceResolver.getNamespace(t, e.expressionContextNode);
                        if (null == o) throw new Error("Cannot resolve QName " + t);
                        return o === n
                    }, U.localNameMatches = function(t, e, r) {
                        var n = r.localName || r.nodeName;
                        return e.caseInsensitive ? t.toLowerCase() === n.toLowerCase() : t === n
                    }, U.NameTestPrefixAny = U.makeNodeTestType(U.NAMETESTPREFIXANY, {
                        matches: function(t, e) {
                            return U.isElementOrAttribute(t) && U.nameSpaceMatches(this.prefix, e, t)
                        },
                        toString: function() {
                            return this.prefix + ":*"
                        }
                    }, (function(t) {
                        this.prefix = t
                    })), U.NameTestQName = U.makeNodeTestType(U.NAMETESTQNAME, {
                        matches: function(t, e) {
                            return U.isNodeType([1, 2, q.XPATH_NAMESPACE_NODE])(t) && U.nameSpaceMatches(this.prefix, e, t) && U.localNameMatches(this.localName, e, t)
                        },
                        toString: function() {
                            return this.name
                        }
                    }, (function(t) {
                        var e = t.split(":");
                        this.name = t, this.prefix = e.length > 1 ? e[0] : null, this.localName = e[e.length > 1 ? 1 : 0]
                    })), U.PITest = U.makeNodeTestType(U.PI, {
                        matches: function(t, e) {
                            return U.isNodeType([7])(t) && (t.target || t.nodeName) === this.name
                        },
                        toString: function() {
                            return i('processing-instruction("', '")', this.name)
                        }
                    }, (function(t) {
                        this.name = t
                    })), U.nameTestAny = U.makeNodeTypeTest(U.NAMETESTANY, [1, 2, q.XPATH_NAMESPACE_NODE], "*"), U.textTest = U.makeNodeTypeTest(U.TEXT, [3, 4], "text()"), U.commentTest = U.makeNodeTypeTest(U.COMMENT, [8], "comment()"), U.nodeTest = U.makeNodeTypeTest(U.NODE, [1, 2, 3, 4, 7, 8, 9], "node()"), U.anyPiTest = U.makeNodeTypeTest(U.PI, [7], "processing-instruction()"), B.prototype = new f, B.prototype.constructor = B, B.superclass = f.prototype, B.prototype.init = function(t) {
                        this.variable = t
                    }, B.prototype.toString = function() {
                        return "$" + this.variable
                    }, B.prototype.evaluate = function(t) {
                        var e = Z.resolveQName(this.variable, t.namespaceResolver, t.contextNode, !1);
                        if (null == e[0]) throw new Error("Cannot resolve QName " + fn);
                        var r = t.variableResolver.getVariable(e[1], e[0]);
                        if (!r) throw z.fromMessage("Undeclared variable: " + this.toString());
                        return r
                    }, V.prototype = new f, V.prototype.constructor = V, V.superclass = f.prototype, V.prototype.init = function(t, e) {
                        this.functionName = t, this.arguments = e
                    }, V.prototype.toString = function() {
                        for (var t = this.functionName + "(", e = 0; e < this.arguments.length; e++) e > 0 && (t += ", "), t += this.arguments[e].toString();
                        return t + ")"
                    }, V.prototype.evaluate = function(t) {
                        var e = J.getFunctionFromContext(this.functionName, t);
                        if (!e) throw new Error("Unknown function " + this.functionName);
                        var r = [t].concat(this.arguments);
                        return e.apply(t.functionResolver.thisArg, r)
                    };
                    var H = new Object;

                    function W(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function j(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function Y(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function G(t) {
                        this.init(t)
                    }

                    function k() {
                        this.init()
                    }

                    function q(t, e, r) {
                        this.isXPathNamespace = !0, this.ownerDocument = r.ownerDocument, this.nodeName = "#namespace", this.prefix = t, this.localName = t, this.namespaceURI = e, this.nodeValue = e, this.ownerElement = r, this.nodeType = q.XPATH_NAMESPACE_NODE
                    }

                    function $(t, e, r) {
                        this.variableResolver = null != t ? t : new X, this.namespaceResolver = null != e ? e : new Q, this.functionResolver = null != r ? r : new J
                    }

                    function X() {}

                    function J(t) {
                        this.thisArg = null != t ? t : K, this.functions = new Object, this.addStandardFunctions()
                    }

                    function Q() {}
                    H.equals = function(t, e) {
                        return t.equals(e)
                    }, H.notequal = function(t, e) {
                        return t.notequal(e)
                    }, H.lessthan = function(t, e) {
                        return t.lessthan(e)
                    }, H.greaterthan = function(t, e) {
                        return t.greaterthan(e)
                    }, H.lessthanorequal = function(t, e) {
                        return t.lessthanorequal(e)
                    }, H.greaterthanorequal = function(t, e) {
                        return t.greaterthanorequal(e)
                    }, W.prototype = new f, W.prototype.constructor = W, W.superclass = f.prototype, W.prototype.init = function(t) {
                        this.str = String(t)
                    }, W.prototype.toString = function() {
                        return this.str
                    }, W.prototype.evaluate = function(t) {
                        return this
                    }, W.prototype.string = function() {
                        return this
                    }, W.prototype.number = function() {
                        return new j(this.str)
                    }, W.prototype.bool = function() {
                        return new Y(this.str)
                    }, W.prototype.nodeset = function() {
                        throw new Error("Cannot convert string to nodeset")
                    }, W.prototype.stringValue = function() {
                        return this.str
                    }, W.prototype.numberValue = function() {
                        return this.number().numberValue()
                    }, W.prototype.booleanValue = function() {
                        return this.bool().booleanValue()
                    }, W.prototype.equals = function(t) {
                        return Z.instance_of(t, Y) ? this.bool().equals(t) : Z.instance_of(t, j) ? this.number().equals(t) : Z.instance_of(t, k) ? t.compareWithString(this, H.equals) : new Y(this.str == t.str)
                    }, W.prototype.notequal = function(t) {
                        return Z.instance_of(t, Y) ? this.bool().notequal(t) : Z.instance_of(t, j) ? this.number().notequal(t) : Z.instance_of(t, k) ? t.compareWithString(this, H.notequal) : new Y(this.str != t.str)
                    }, W.prototype.lessthan = function(t) {
                        return this.number().lessthan(t)
                    }, W.prototype.greaterthan = function(t) {
                        return this.number().greaterthan(t)
                    }, W.prototype.lessthanorequal = function(t) {
                        return this.number().lessthanorequal(t)
                    }, W.prototype.greaterthanorequal = function(t) {
                        return this.number().greaterthanorequal(t)
                    }, j.prototype = new f, j.prototype.constructor = j, j.superclass = f.prototype, j.prototype.init = function(t) {
                        this.num = "string" == typeof t ? this.parse(t) : Number(t)
                    }, j.prototype.numberFormat = /^\s*-?[0-9]*\.?[0-9]+\s*$/, j.prototype.parse = function(t) {
                        return this.numberFormat.test(t) ? parseFloat(t) : Number.NaN
                    }, j.prototype.toString = function() {
                        var t = this.num.toString();
                        return -1 !== t.indexOf("e-") ? function(t) {
                            for (var e = t.split("e-"), r = e[0].replace(".", ""), n = Number(e[1]), o = 0; o < n - 1; o += 1) r = "0" + r;
                            return "0." + r
                        }(t) : -1 !== t.indexOf("e") ? function(t) {
                            for (var e = t.split("e"), r = e[0].replace(".", ""), n = Number(e[1]) + 1 - r.length, o = 0; o < n; o += 1) r += "0";
                            return r
                        }(t) : t
                    }, j.prototype.evaluate = function(t) {
                        return this
                    }, j.prototype.string = function() {
                        return new W(this.toString())
                    }, j.prototype.number = function() {
                        return this
                    }, j.prototype.bool = function() {
                        return new Y(this.num)
                    }, j.prototype.nodeset = function() {
                        throw new Error("Cannot convert number to nodeset")
                    }, j.prototype.stringValue = function() {
                        return this.string().stringValue()
                    }, j.prototype.numberValue = function() {
                        return this.num
                    }, j.prototype.booleanValue = function() {
                        return this.bool().booleanValue()
                    }, j.prototype.negate = function() {
                        return new j(-this.num)
                    }, j.prototype.equals = function(t) {
                        return Z.instance_of(t, Y) ? this.bool().equals(t) : Z.instance_of(t, W) ? this.equals(t.number()) : Z.instance_of(t, k) ? t.compareWithNumber(this, H.equals) : new Y(this.num == t.num)
                    }, j.prototype.notequal = function(t) {
                        return Z.instance_of(t, Y) ? this.bool().notequal(t) : Z.instance_of(t, W) ? this.notequal(t.number()) : Z.instance_of(t, k) ? t.compareWithNumber(this, H.notequal) : new Y(this.num != t.num)
                    }, j.prototype.lessthan = function(t) {
                        return Z.instance_of(t, k) ? t.compareWithNumber(this, H.greaterthan) : Z.instance_of(t, Y) || Z.instance_of(t, W) ? this.lessthan(t.number()) : new Y(this.num < t.num)
                    }, j.prototype.greaterthan = function(t) {
                        return Z.instance_of(t, k) ? t.compareWithNumber(this, H.lessthan) : Z.instance_of(t, Y) || Z.instance_of(t, W) ? this.greaterthan(t.number()) : new Y(this.num > t.num)
                    }, j.prototype.lessthanorequal = function(t) {
                        return Z.instance_of(t, k) ? t.compareWithNumber(this, H.greaterthanorequal) : Z.instance_of(t, Y) || Z.instance_of(t, W) ? this.lessthanorequal(t.number()) : new Y(this.num <= t.num)
                    }, j.prototype.greaterthanorequal = function(t) {
                        return Z.instance_of(t, k) ? t.compareWithNumber(this, H.lessthanorequal) : Z.instance_of(t, Y) || Z.instance_of(t, W) ? this.greaterthanorequal(t.number()) : new Y(this.num >= t.num)
                    }, j.prototype.plus = function(t) {
                        return new j(this.num + t.num)
                    }, j.prototype.minus = function(t) {
                        return new j(this.num - t.num)
                    }, j.prototype.multiply = function(t) {
                        return new j(this.num * t.num)
                    }, j.prototype.div = function(t) {
                        return new j(this.num / t.num)
                    }, j.prototype.mod = function(t) {
                        return new j(this.num % t.num)
                    }, Y.prototype = new f, Y.prototype.constructor = Y, Y.superclass = f.prototype, Y.prototype.init = function(t) {
                        this.b = Boolean(t)
                    }, Y.prototype.toString = function() {
                        return this.b.toString()
                    }, Y.prototype.evaluate = function(t) {
                        return this
                    }, Y.prototype.string = function() {
                        return new W(this.b)
                    }, Y.prototype.number = function() {
                        return new j(this.b)
                    }, Y.prototype.bool = function() {
                        return this
                    }, Y.prototype.nodeset = function() {
                        throw new Error("Cannot convert boolean to nodeset")
                    }, Y.prototype.stringValue = function() {
                        return this.string().stringValue()
                    }, Y.prototype.numberValue = function() {
                        return this.number().numberValue()
                    }, Y.prototype.booleanValue = function() {
                        return this.b
                    }, Y.prototype.not = function() {
                        return new Y(!this.b)
                    }, Y.prototype.equals = function(t) {
                        return Z.instance_of(t, W) || Z.instance_of(t, j) ? this.equals(t.bool()) : Z.instance_of(t, k) ? t.compareWithBoolean(this, H.equals) : new Y(this.b == t.b)
                    }, Y.prototype.notequal = function(t) {
                        return Z.instance_of(t, W) || Z.instance_of(t, j) ? this.notequal(t.bool()) : Z.instance_of(t, k) ? t.compareWithBoolean(this, H.notequal) : new Y(this.b != t.b)
                    }, Y.prototype.lessthan = function(t) {
                        return this.number().lessthan(t)
                    }, Y.prototype.greaterthan = function(t) {
                        return this.number().greaterthan(t)
                    }, Y.prototype.lessthanorequal = function(t) {
                        return this.number().lessthanorequal(t)
                    }, Y.prototype.greaterthanorequal = function(t) {
                        return this.number().greaterthanorequal(t)
                    }, Y.true_ = new Y(!0), Y.false_ = new Y(!1), G.prototype = new Object, G.prototype.constructor = G, G.superclass = Object.prototype, G.prototype.init = function(t) {
                        this.left = null, this.right = null, this.node = t, this.depth = 1
                    }, G.prototype.balance = function() {
                        var t = null == this.left ? 0 : this.left.depth,
                            e = null == this.right ? 0 : this.right.depth;
                        if (t > e + 1)(null == this.left.left ? 0 : this.left.left.depth) < (null == this.left.right ? 0 : this.left.right.depth) && this.left.rotateRR(), this.rotateLL();
                        else if (t + 1 < e) {
                            var r = null == this.right.right ? 0 : this.right.right.depth;
                            (null == this.right.left ? 0 : this.right.left.depth) > r && this.right.rotateLL(), this.rotateRR()
                        }
                    }, G.prototype.rotateLL = function() {
                        var t = this.node,
                            e = this.right;
                        this.node = this.left.node, this.right = this.left, this.left = this.left.left, this.right.left = this.right.right, this.right.right = e, this.right.node = t, this.right.updateInNewLocation(), this.updateInNewLocation()
                    }, G.prototype.rotateRR = function() {
                        var t = this.node,
                            e = this.left;
                        this.node = this.right.node, this.left = this.right, this.right = this.right.right, this.left.right = this.left.left, this.left.left = e, this.left.node = t, this.left.updateInNewLocation(), this.updateInNewLocation()
                    }, G.prototype.updateInNewLocation = function() {
                        this.getDepthFromChildren()
                    }, G.prototype.getDepthFromChildren = function() {
                        this.depth = null == this.node ? 0 : 1, null != this.left && (this.depth = this.left.depth + 1), null != this.right && this.depth <= this.right.depth && (this.depth = this.right.depth + 1)
                    }, G.prototype.add = function(t) {
                        if (t === this.node) return !1;
                        var e = function(t, e) {
                                if (t === e) return 0;
                                if (t.compareDocumentPosition) {
                                    var r = t.compareDocumentPosition(e);
                                    return 1 & r || 10 & r ? 1 : 20 & r ? -1 : 0
                                }
                                for (var n = 0, o = 0, s = t; null != s; s = s.parentNode || s.ownerElement) n++;
                                for (var i = e; null != i; i = i.parentNode || i.ownerElement) o++;
                                if (n > o) {
                                    for (; n > o;) t = t.parentNode || t.ownerElement, n--;
                                    if (t === e) return 1
                                } else if (o > n) {
                                    for (; o > n;) e = e.parentNode || e.ownerElement, o--;
                                    if (t === e) return -1
                                }
                                for (var u = t.parentNode || t.ownerElement, a = e.parentNode || e.ownerElement; u !== a;) e = a, u = (t = u).parentNode || t.ownerElement, a = e.parentNode || e.ownerElement;
                                var c = Z.isAttribute(t),
                                    l = Z.isAttribute(e);
                                if (c && !l) return -1;
                                if (!c && l) return 1;
                                if (u)
                                    for (var p = c ? u.attributes : u.childNodes, h = p.length, f = 0; f < h; f += 1) {
                                        var d = p[f];
                                        if (d === t) return -1;
                                        if (d === e) return 1
                                    }
                                throw new Error("Unexpected: could not determine node order")
                            }(t, this.node),
                            r = !1;
                        return -1 == e ? null == this.left ? (this.left = new G(t), r = !0) : (r = this.left.add(t)) && this.balance() : 1 == e && (null == this.right ? (this.right = new G(t), r = !0) : (r = this.right.add(t)) && this.balance()), r && this.getDepthFromChildren(), r
                    }, k.prototype = new f, k.prototype.constructor = k, k.superclass = f.prototype, k.prototype.init = function() {
                        this.tree = null, this.nodes = [], this.size = 0
                    }, k.prototype.toString = function() {
                        var t = this.first();
                        return null == t ? "" : this.stringForNode(t)
                    }, k.prototype.evaluate = function(t) {
                        return this
                    }, k.prototype.string = function() {
                        return new W(this.toString())
                    }, k.prototype.stringValue = function() {
                        return this.toString()
                    }, k.prototype.number = function() {
                        return new j(this.string())
                    }, k.prototype.numberValue = function() {
                        return Number(this.string())
                    }, k.prototype.bool = function() {
                        return new Y(this.booleanValue())
                    }, k.prototype.booleanValue = function() {
                        return !!this.size
                    }, k.prototype.nodeset = function() {
                        return this
                    }, k.prototype.stringForNode = function(t) {
                        return 9 == t.nodeType || 1 == t.nodeType || 11 === t.nodeType ? this.stringForContainerNode(t) : 2 === t.nodeType ? t.value || t.nodeValue : t.isNamespaceNode ? t.namespace : t.nodeValue
                    }, k.prototype.stringForContainerNode = function(t) {
                        for (var e = "", r = t.firstChild; null != r; r = r.nextSibling) {
                            var n = r.nodeType;
                            1 !== n && 3 !== n && 4 !== n && 9 !== n && 11 !== n || (e += this.stringForNode(r))
                        }
                        return e
                    }, k.prototype.buildTree = function() {
                        if (!this.tree && this.nodes.length) {
                            this.tree = new G(this.nodes[0]);
                            for (var t = 1; t < this.nodes.length; t += 1) this.tree.add(this.nodes[t])
                        }
                        return this.tree
                    }, k.prototype.first = function() {
                        var t = this.buildTree();
                        if (null == t) return null;
                        for (; null != t.left;) t = t.left;
                        return t.node
                    }, k.prototype.add = function(t) {
                        for (var e = 0; e < this.nodes.length; e += 1)
                            if (t === this.nodes[e]) return;
                        this.tree = null, this.nodes.push(t), this.size += 1
                    }, k.prototype.addArray = function(t) {
                        var r = this;
                        e((function(t) {
                            r.add(t)
                        }), t)
                    }, k.prototype.toArray = function() {
                        var t = [];
                        return this.toArrayRec(this.buildTree(), t), t
                    }, k.prototype.toArrayRec = function(t, e) {
                        null != t && (this.toArrayRec(t.left, e), e.push(t.node), this.toArrayRec(t.right, e))
                    }, k.prototype.toUnsortedArray = function() {
                        return this.nodes.slice()
                    }, k.prototype.compareWithString = function(t, e) {
                        for (var r = this.toUnsortedArray(), n = 0; n < r.length; n++) {
                            var o = r[n],
                                s = e(new W(this.stringForNode(o)), t);
                            if (s.booleanValue()) return s
                        }
                        return new Y(!1)
                    }, k.prototype.compareWithNumber = function(t, e) {
                        for (var r = this.toUnsortedArray(), n = 0; n < r.length; n++) {
                            var o = r[n],
                                s = e(new j(this.stringForNode(o)), t);
                            if (s.booleanValue()) return s
                        }
                        return new Y(!1)
                    }, k.prototype.compareWithBoolean = function(t, e) {
                        return e(this.bool(), t)
                    }, k.prototype.compareWithNodeSet = function(t, e) {
                        for (var r = this.toUnsortedArray(), n = function(t, r) {
                                return e(r, t)
                            }, o = 0; o < r.length; o++) {
                            var s = new W(this.stringForNode(r[o])),
                                i = t.compareWithString(s, n);
                            if (i.booleanValue()) return i
                        }
                        return new Y(!1)
                    }, k.compareWith = function(t) {
                        var e = Array.prototype.slice,
                            r = t.length,
                            n = function() {
                                var o = e.call(arguments);
                                return o.length < r ? function(t, r) {
                                    return function() {
                                        return r.apply(this, t.concat(e.call(arguments)))
                                    }
                                }(o, n) : t.apply(this, e.apply(arguments, [0, r]))
                            };
                        return n
                    }((function(t, e) {
                        return Z.instance_of(e, W) ? this.compareWithString(e, t) : Z.instance_of(e, j) ? this.compareWithNumber(e, t) : Z.instance_of(e, Y) ? this.compareWithBoolean(e, t) : this.compareWithNodeSet(e, t)
                    })), k.prototype.equals = k.compareWith(H.equals), k.prototype.notequal = k.compareWith(H.notequal), k.prototype.lessthan = k.compareWith(H.lessthan), k.prototype.greaterthan = k.compareWith(H.greaterthan), k.prototype.lessthanorequal = k.compareWith(H.lessthanorequal), k.prototype.greaterthanorequal = k.compareWith(H.greaterthanorequal), k.prototype.union = function(t) {
                        var e = new k;
                        return e.addArray(this.toUnsortedArray()), e.addArray(t.toUnsortedArray()), e
                    }, q.prototype = new Object, q.prototype.constructor = q, q.superclass = Object.prototype, q.prototype.toString = function() {
                        return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }'
                    }, $.prototype = new Object, $.prototype.constructor = $, $.superclass = Object.prototype, $.prototype.extend = function(t) {
                        return c(new $, this, t)
                    }, X.prototype = new Object, X.prototype.constructor = X, X.superclass = Object.prototype, X.prototype.getVariable = function(t, e) {
                        return null
                    }, J.prototype = new Object, J.prototype.constructor = J, J.superclass = Object.prototype, J.prototype.addStandardFunctions = function() {
                        this.functions["{}last"] = K.last, this.functions["{}position"] = K.position, this.functions["{}count"] = K.count, this.functions["{}id"] = K.id, this.functions["{}local-name"] = K.localName, this.functions["{}namespace-uri"] = K.namespaceURI, this.functions["{}name"] = K.name, this.functions["{}string"] = K.string, this.functions["{}concat"] = K.concat, this.functions["{}starts-with"] = K.startsWith, this.functions["{}contains"] = K.contains, this.functions["{}substring-before"] = K.substringBefore, this.functions["{}substring-after"] = K.substringAfter, this.functions["{}substring"] = K.substring, this.functions["{}string-length"] = K.stringLength, this.functions["{}normalize-space"] = K.normalizeSpace, this.functions["{}translate"] = K.translate, this.functions["{}boolean"] = K.boolean_, this.functions["{}not"] = K.not, this.functions["{}true"] = K.true_, this.functions["{}false"] = K.false_, this.functions["{}lang"] = K.lang, this.functions["{}number"] = K.number, this.functions["{}sum"] = K.sum, this.functions["{}floor"] = K.floor, this.functions["{}ceiling"] = K.ceiling, this.functions["{}round"] = K.round
                    }, J.prototype.addFunction = function(t, e, r) {
                        this.functions["{" + t + "}" + e] = r
                    }, J.getFunctionFromContext = function(t, e) {
                        var r = Z.resolveQName(t, e.namespaceResolver, e.contextNode, !1);
                        if (null === r[0]) throw new Error("Cannot resolve QName " + name);
                        return e.functionResolver.getFunction(r[1], r[0])
                    }, J.prototype.getFunction = function(t, e) {
                        return this.functions["{" + e + "}" + t]
                    }, Q.prototype = new Object, Q.prototype.constructor = Q, Q.superclass = Object.prototype, Q.prototype.getNamespace = function(t, e) {
                        if ("xml" == t) return p.XML_NAMESPACE_URI;
                        if ("xmlns" == t) return p.XMLNS_NAMESPACE_URI;
                        for (9 == e.nodeType ? e = e.documentElement : 2 == e.nodeType ? e = C.getOwnerElement(e) : 1 != e.nodeType && (e = e.parentNode); null != e && 1 == e.nodeType;) {
                            for (var r = e.attributes, n = 0; n < r.length; n++) {
                                var o = r.item(n),
                                    s = o.name || o.nodeName;
                                if ("xmlns" === s && "" === t || s === "xmlns:" + t) return String(o.value || o.nodeValue)
                            }
                            e = e.parentNode
                        }
                        return null
                    };
                    var K = new Object;
                    K.last = function(t) {
                        if (1 != arguments.length) throw new Error("Function last expects ()");
                        return new j(t.contextSize)
                    }, K.position = function(t) {
                        if (1 != arguments.length) throw new Error("Function position expects ()");
                        return new j(t.contextPosition)
                    }, K.count = function() {
                        var t, e = arguments[0];
                        if (2 != arguments.length || !Z.instance_of(t = arguments[1].evaluate(e), k)) throw new Error("Function count expects (node-set)");
                        return new j(t.size)
                    }, K.id = function() {
                        var t, e = arguments[0];
                        if (2 != arguments.length) throw new Error("Function id expects (object)");
                        t = arguments[1].evaluate(e);
                        for (var r = (t = Z.instance_of(t, k) ? t.toArray().join(" ") : t.stringValue()).split(/[\x0d\x0a\x09\x20]+/), n = new k, o = 9 == e.contextNode.nodeType ? e.contextNode : e.contextNode.ownerDocument, s = 0; s < r.length; s++) {
                            var i;
                            null != (i = o.getElementById ? o.getElementById(r[s]) : Z.getElementById(o, r[s])) && (n.add(i))
                        }
                        return n
                    }, K.localName = function(t, e) {
                        var r;
                        if (1 == arguments.length) r = t.contextNode;
                        else {
                            if (2 != arguments.length) throw new Error("Function local-name expects (node-set?)");
                            r = e.evaluate(t).first()
                        }
                        return new W(null == r ? "" : r.localName || r.baseName || r.target || r.nodeName || "")
                    }, K.namespaceURI = function() {
                        var t, e = arguments[0];
                        if (1 == arguments.length) t = e.contextNode;
                        else {
                            if (2 != arguments.length) throw new Error("Function namespace-uri expects (node-set?)");
                            t = arguments[1].evaluate(e).first()
                        }
                        return new W(null == t ? "" : t.namespaceURI)
                    }, K.name = function() {
                        var t, e = arguments[0];
                        if (1 == arguments.length) t = e.contextNode;
                        else {
                            if (2 != arguments.length) throw new Error("Function name expects (node-set?)");
                            t = arguments[1].evaluate(e).first()
                        }
                        return null == t ? new W("") : 1 == t.nodeType ? new W(t.nodeName) : 2 == t.nodeType ? new W(t.name || t.nodeName) : 7 === t.nodeType ? new W(t.target || t.nodeName) : null == t.localName ? new W("") : new W(t.localName)
                    }, K.string = function() {
                        var t = arguments[0];
                        if (1 == arguments.length) return new W(k.prototype.stringForNode(t.contextNode));
                        if (2 == arguments.length) return arguments[1].evaluate(t).string();
                        throw new Error("Function string expects (object?)")
                    }, K.concat = function(t) {
                        if (arguments.length < 3) throw new Error("Function concat expects (string, string[, string]*)");
                        for (var e = "", r = 1; r < arguments.length; r++) e += arguments[r].evaluate(t).stringValue();
                        return new W(e)
                    }, K.startsWith = function() {
                        var t = arguments[0];
                        if (3 != arguments.length) throw new Error("Function startsWith expects (string, string)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            r = arguments[2].evaluate(t).stringValue();
                        return new Y(e.substring(0, r.length) == r)
                    }, K.contains = function() {
                        var t = arguments[0];
                        if (3 != arguments.length) throw new Error("Function contains expects (string, string)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            r = arguments[2].evaluate(t).stringValue();
                        return new Y(-1 !== e.indexOf(r))
                    }, K.substringBefore = function() {
                        var t = arguments[0];
                        if (3 != arguments.length) throw new Error("Function substring-before expects (string, string)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            r = arguments[2].evaluate(t).stringValue();
                        return new W(e.substring(0, e.indexOf(r)))
                    }, K.substringAfter = function() {
                        var t = arguments[0];
                        if (3 != arguments.length) throw new Error("Function substring-after expects (string, string)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            r = arguments[2].evaluate(t).stringValue();
                        if (0 == r.length) return new W(e);
                        var n = e.indexOf(r);
                        return new W(-1 == n ? "" : e.substring(n + r.length))
                    }, K.substring = function() {
                        var t = arguments[0];
                        if (3 != arguments.length && 4 != arguments.length) throw new Error("Function substring expects (string, number, number?)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            r = Math.round(arguments[2].evaluate(t).numberValue()) - 1,
                            n = 4 == arguments.length ? r + Math.round(arguments[3].evaluate(t).numberValue()) : void 0;
                        return new W(e.substring(r, n))
                    }, K.stringLength = function() {
                        var t, e = arguments[0];
                        if (1 == arguments.length) t = k.prototype.stringForNode(e.contextNode);
                        else {
                            if (2 != arguments.length) throw new Error("Function string-length expects (string?)");
                            t = arguments[1].evaluate(e).stringValue()
                        }
                        return new j(t.length)
                    }, K.normalizeSpace = function() {
                        var t, e = arguments[0];
                        if (1 == arguments.length) t = k.prototype.stringForNode(e.contextNode);
                        else {
                            if (2 != arguments.length) throw new Error("Function normalize-space expects (string?)");
                            t = arguments[1].evaluate(e).stringValue()
                        }
                        for (var r = 0, n = t.length - 1; Z.isSpace(t.charCodeAt(n));) n--;
                        for (var o = ""; r <= n && Z.isSpace(t.charCodeAt(r));) r++;
                        for (; r <= n;)
                            if (Z.isSpace(t.charCodeAt(r)))
                                for (o += " "; r <= n && Z.isSpace(t.charCodeAt(r));) r++;
                            else o += t.charAt(r), r++;
                        return new W(o)
                    }, K.translate = function(t, e, o, i) {
                        if (4 != arguments.length) throw new Error("Function translate expects (string, string, string)");
                        var u = e.evaluate(t).stringValue(),
                            a = o.evaluate(t).stringValue(),
                            c = i.evaluate(t).stringValue(),
                            l = r((function(t, e, r) {
                                return e in t || (t[e] = r > c.length ? "" : c[r]), t
                            }), {}, a);
                        return new W(s("", n((function(t) {
                            return t in l ? l[t] : t
                        }), u)))
                    }, K.boolean_ = function() {
                        var t = arguments[0];
                        if (2 != arguments.length) throw new Error("Function boolean expects (object)");
                        return arguments[1].evaluate(t).bool()
                    }, K.not = function(t, e) {
                        if (2 != arguments.length) throw new Error("Function not expects (object)");
                        return e.evaluate(t).bool().not()
                    }, K.true_ = function() {
                        if (1 != arguments.length) throw new Error("Function true expects ()");
                        return Y.true_
                    }, K.false_ = function() {
                        if (1 != arguments.length) throw new Error("Function false expects ()");
                        return Y.false_
                    }, K.lang = function() {
                        var t, e = arguments[0];
                        if (2 != arguments.length) throw new Error("Function lang expects (string)");
                        for (var r = e.contextNode; null != r && 9 != r.nodeType; r = r.parentNode) {
                            var n = r.getAttributeNS(p.XML_NAMESPACE_URI, "lang");
                            if (null != n) {
                                t = String(n);
                                break
                            }
                        }
                        if (null == t) return Y.false_;
                        var o = arguments[1].evaluate(e).stringValue();
                        return new Y(t.substring(0, o.length) == o && (t.length == o.length || "-" == t.charAt(o.length)))
                    }, K.number = function() {
                        var t = arguments[0];
                        if (1 != arguments.length && 2 != arguments.length) throw new Error("Function number expects (object?)");
                        return 1 == arguments.length ? new j(k.prototype.stringForNode(t.contextNode)) : arguments[1].evaluate(t).number()
                    }, K.sum = function() {
                        var t, e = arguments[0];
                        if (2 != arguments.length || !Z.instance_of(t = arguments[1].evaluate(e), k)) throw new Error("Function sum expects (node-set)");
                        t = t.toUnsortedArray();
                        for (var r = 0, n = 0; n < t.length; n++) r += new j(k.prototype.stringForNode(t[n])).numberValue();
                        return new j(r)
                    }, K.floor = function() {
                        var t = arguments[0];
                        if (2 != arguments.length) throw new Error("Function floor expects (number)");
                        return new j(Math.floor(arguments[1].evaluate(t).numberValue()))
                    }, K.ceiling = function() {
                        var t = arguments[0];
                        if (2 != arguments.length) throw new Error("Function ceiling expects (number)");
                        return new j(Math.ceil(arguments[1].evaluate(t).numberValue()))
                    }, K.round = function() {
                        var t = arguments[0];
                        if (2 != arguments.length) throw new Error("Function round expects (number)");
                        return new j(Math.round(arguments[1].evaluate(t).numberValue()))
                    };
                    var Z = new Object;
                    Z.isAttribute = function(t) {
                        return t && (2 === t.nodeType || t.ownerElement)
                    }, Z.splitQName = function(t) {
                        var e = t.indexOf(":");
                        return -1 == e ? [null, t] : [t.substring(0, e), t.substring(e + 1)]
                    }, Z.resolveQName = function(t, e, r, n) {
                        var o = Z.splitQName(t);
                        return null != o[0] ? o[0] = e.getNamespace(o[0], r) : n ? (o[0] = e.getNamespace("", r), null == o[0] && (o[0] = "")) : o[0] = "", o
                    }, Z.isSpace = function(t) {
                        return 9 == t || 13 == t || 10 == t || 32 == t
                    }, Z.isLetter = function(t) {
                        return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 255 || t >= 256 && t <= 305 || t >= 308 && t <= 318 || t >= 321 && t <= 328 || t >= 330 && t <= 382 || t >= 384 && t <= 451 || t >= 461 && t <= 496 || t >= 500 && t <= 501 || t >= 506 && t <= 535 || t >= 592 && t <= 680 || t >= 699 && t <= 705 || 902 == t || t >= 904 && t <= 906 || 908 == t || t >= 910 && t <= 929 || t >= 931 && t <= 974 || t >= 976 && t <= 982 || 986 == t || 988 == t || 990 == t || 992 == t || t >= 994 && t <= 1011 || t >= 1025 && t <= 1036 || t >= 1038 && t <= 1103 || t >= 1105 && t <= 1116 || t >= 1118 && t <= 1153 || t >= 1168 && t <= 1220 || t >= 1223 && t <= 1224 || t >= 1227 && t <= 1228 || t >= 1232 && t <= 1259 || t >= 1262 && t <= 1269 || t >= 1272 && t <= 1273 || t >= 1329 && t <= 1366 || 1369 == t || t >= 1377 && t <= 1414 || t >= 1488 && t <= 1514 || t >= 1520 && t <= 1522 || t >= 1569 && t <= 1594 || t >= 1601 && t <= 1610 || t >= 1649 && t <= 1719 || t >= 1722 && t <= 1726 || t >= 1728 && t <= 1742 || t >= 1744 && t <= 1747 || 1749 == t || t >= 1765 && t <= 1766 || t >= 2309 && t <= 2361 || 2365 == t || t >= 2392 && t <= 2401 || t >= 2437 && t <= 2444 || t >= 2447 && t <= 2448 || t >= 2451 && t <= 2472 || t >= 2474 && t <= 2480 || 2482 == t || t >= 2486 && t <= 2489 || t >= 2524 && t <= 2525 || t >= 2527 && t <= 2529 || t >= 2544 && t <= 2545 || t >= 2565 && t <= 2570 || t >= 2575 && t <= 2576 || t >= 2579 && t <= 2600 || t >= 2602 && t <= 2608 || t >= 2610 && t <= 2611 || t >= 2613 && t <= 2614 || t >= 2616 && t <= 2617 || t >= 2649 && t <= 2652 || 2654 == t || t >= 2674 && t <= 2676 || t >= 2693 && t <= 2699 || 2701 == t || t >= 2703 && t <= 2705 || t >= 2707 && t <= 2728 || t >= 2730 && t <= 2736 || t >= 2738 && t <= 2739 || t >= 2741 && t <= 2745 || 2749 == t || 2784 == t || t >= 2821 && t <= 2828 || t >= 2831 && t <= 2832 || t >= 2835 && t <= 2856 || t >= 2858 && t <= 2864 || t >= 2866 && t <= 2867 || t >= 2870 && t <= 2873 || 2877 == t || t >= 2908 && t <= 2909 || t >= 2911 && t <= 2913 || t >= 2949 && t <= 2954 || t >= 2958 && t <= 2960 || t >= 2962 && t <= 2965 || t >= 2969 && t <= 2970 || 2972 == t || t >= 2974 && t <= 2975 || t >= 2979 && t <= 2980 || t >= 2984 && t <= 2986 || t >= 2990 && t <= 2997 || t >= 2999 && t <= 3001 || t >= 3077 && t <= 3084 || t >= 3086 && t <= 3088 || t >= 3090 && t <= 3112 || t >= 3114 && t <= 3123 || t >= 3125 && t <= 3129 || t >= 3168 && t <= 3169 || t >= 3205 && t <= 3212 || t >= 3214 && t <= 3216 || t >= 3218 && t <= 3240 || t >= 3242 && t <= 3251 || t >= 3253 && t <= 3257 || 3294 == t || t >= 3296 && t <= 3297 || t >= 3333 && t <= 3340 || t >= 3342 && t <= 3344 || t >= 3346 && t <= 3368 || t >= 3370 && t <= 3385 || t >= 3424 && t <= 3425 || t >= 3585 && t <= 3630 || 3632 == t || t >= 3634 && t <= 3635 || t >= 3648 && t <= 3653 || t >= 3713 && t <= 3714 || 3716 == t || t >= 3719 && t <= 3720 || 3722 == t || 3725 == t || t >= 3732 && t <= 3735 || t >= 3737 && t <= 3743 || t >= 3745 && t <= 3747 || 3749 == t || 3751 == t || t >= 3754 && t <= 3755 || t >= 3757 && t <= 3758 || 3760 == t || t >= 3762 && t <= 3763 || 3773 == t || t >= 3776 && t <= 3780 || t >= 3904 && t <= 3911 || t >= 3913 && t <= 3945 || t >= 4256 && t <= 4293 || t >= 4304 && t <= 4342 || 4352 == t || t >= 4354 && t <= 4355 || t >= 4357 && t <= 4359 || 4361 == t || t >= 4363 && t <= 4364 || t >= 4366 && t <= 4370 || 4412 == t || 4414 == t || 4416 == t || 4428 == t || 4430 == t || 4432 == t || t >= 4436 && t <= 4437 || 4441 == t || t >= 4447 && t <= 4449 || 4451 == t || 4453 == t || 4455 == t || 4457 == t || t >= 4461 && t <= 4462 || t >= 4466 && t <= 4467 || 4469 == t || 4510 == t || 4520 == t || 4523 == t || t >= 4526 && t <= 4527 || t >= 4535 && t <= 4536 || 4538 == t || t >= 4540 && t <= 4546 || 4587 == t || 4592 == t || 4601 == t || t >= 7680 && t <= 7835 || t >= 7840 && t <= 7929 || t >= 7936 && t <= 7957 || t >= 7960 && t <= 7965 || t >= 7968 && t <= 8005 || t >= 8008 && t <= 8013 || t >= 8016 && t <= 8023 || 8025 == t || 8027 == t || 8029 == t || t >= 8031 && t <= 8061 || t >= 8064 && t <= 8116 || t >= 8118 && t <= 8124 || 8126 == t || t >= 8130 && t <= 8132 || t >= 8134 && t <= 8140 || t >= 8144 && t <= 8147 || t >= 8150 && t <= 8155 || t >= 8160 && t <= 8172 || t >= 8178 && t <= 8180 || t >= 8182 && t <= 8188 || 8486 == t || t >= 8490 && t <= 8491 || 8494 == t || t >= 8576 && t <= 8578 || t >= 12353 && t <= 12436 || t >= 12449 && t <= 12538 || t >= 12549 && t <= 12588 || t >= 44032 && t <= 55203 || t >= 19968 && t <= 40869 || 12295 == t || t >= 12321 && t <= 12329
                    }, Z.isNCNameChar = function(t) {
                        return t >= 48 && t <= 57 || t >= 1632 && t <= 1641 || t >= 1776 && t <= 1785 || t >= 2406 && t <= 2415 || t >= 2534 && t <= 2543 || t >= 2662 && t <= 2671 || t >= 2790 && t <= 2799 || t >= 2918 && t <= 2927 || t >= 3047 && t <= 3055 || t >= 3174 && t <= 3183 || t >= 3302 && t <= 3311 || t >= 3430 && t <= 3439 || t >= 3664 && t <= 3673 || t >= 3792 && t <= 3801 || t >= 3872 && t <= 3881 || 46 == t || 45 == t || 95 == t || Z.isLetter(t) || t >= 768 && t <= 837 || t >= 864 && t <= 865 || t >= 1155 && t <= 1158 || t >= 1425 && t <= 1441 || t >= 1443 && t <= 1465 || t >= 1467 && t <= 1469 || 1471 == t || t >= 1473 && t <= 1474 || 1476 == t || t >= 1611 && t <= 1618 || 1648 == t || t >= 1750 && t <= 1756 || t >= 1757 && t <= 1759 || t >= 1760 && t <= 1764 || t >= 1767 && t <= 1768 || t >= 1770 && t <= 1773 || t >= 2305 && t <= 2307 || 2364 == t || t >= 2366 && t <= 2380 || 2381 == t || t >= 2385 && t <= 2388 || t >= 2402 && t <= 2403 || t >= 2433 && t <= 2435 || 2492 == t || 2494 == t || 2495 == t || t >= 2496 && t <= 2500 || t >= 2503 && t <= 2504 || t >= 2507 && t <= 2509 || 2519 == t || t >= 2530 && t <= 2531 || 2562 == t || 2620 == t || 2622 == t || 2623 == t || t >= 2624 && t <= 2626 || t >= 2631 && t <= 2632 || t >= 2635 && t <= 2637 || t >= 2672 && t <= 2673 || t >= 2689 && t <= 2691 || 2748 == t || t >= 2750 && t <= 2757 || t >= 2759 && t <= 2761 || t >= 2763 && t <= 2765 || t >= 2817 && t <= 2819 || 2876 == t || t >= 2878 && t <= 2883 || t >= 2887 && t <= 2888 || t >= 2891 && t <= 2893 || t >= 2902 && t <= 2903 || t >= 2946 && t <= 2947 || t >= 3006 && t <= 3010 || t >= 3014 && t <= 3016 || t >= 3018 && t <= 3021 || 3031 == t || t >= 3073 && t <= 3075 || t >= 3134 && t <= 3140 || t >= 3142 && t <= 3144 || t >= 3146 && t <= 3149 || t >= 3157 && t <= 3158 || t >= 3202 && t <= 3203 || t >= 3262 && t <= 3268 || t >= 3270 && t <= 3272 || t >= 3274 && t <= 3277 || t >= 3285 && t <= 3286 || t >= 3330 && t <= 3331 || t >= 3390 && t <= 3395 || t >= 3398 && t <= 3400 || t >= 3402 && t <= 3405 || 3415 == t || 3633 == t || t >= 3636 && t <= 3642 || t >= 3655 && t <= 3662 || 3761 == t || t >= 3764 && t <= 3769 || t >= 3771 && t <= 3772 || t >= 3784 && t <= 3789 || t >= 3864 && t <= 3865 || 3893 == t || 3895 == t || 3897 == t || 3902 == t || 3903 == t || t >= 3953 && t <= 3972 || t >= 3974 && t <= 3979 || t >= 3984 && t <= 3989 || 3991 == t || t >= 3993 && t <= 4013 || t >= 4017 && t <= 4023 || 4025 == t || t >= 8400 && t <= 8412 || 8417 == t || t >= 12330 && t <= 12335 || 12441 == t || 12442 == t || 183 == t || 720 == t || 721 == t || 903 == t || 1600 == t || 3654 == t || 3782 == t || 12293 == t || t >= 12337 && t <= 12341 || t >= 12445 && t <= 12446 || t >= 12540 && t <= 12542
                    }, Z.coalesceText = function(t) {
                        for (var e = t.firstChild; null != e; e = e.nextSibling)
                            if (3 == e.nodeType || 4 == e.nodeType) {
                                var r = e.nodeValue,
                                    n = e;
                                for (e = e.nextSibling; null != e && (3 == e.nodeType || 4 == e.nodeType);) {
                                    r += e.nodeValue;
                                    var o = e;
                                    e = e.nextSibling, o.parentNode.removeChild(o)
                                }
                                if (4 == n.nodeType) {
                                    var s = n.parentNode;
                                    if (null == n.nextSibling) s.removeChild(n), s.appendChild(s.ownerDocument.createTextNode(r));
                                    else {
                                        var i = n.nextSibling;
                                        s.removeChild(n), s.insertBefore(s.ownerDocument.createTextNode(r), i)
                                    }
                                } else n.nodeValue = r;
                                if (null == e) break
                            } else 1 == e.nodeType && Z.coalesceText(e)
                    }, Z.instance_of = function(t, e) {
                        for (; null != t;) {
                            if (t.constructor === e) return !0;
                            if (t === Object) return !1;
                            t = t.constructor.superclass
                        }
                        return !1
                    }, Z.getElementById = function(t, e) {
                        if (1 == t.nodeType && (t.getAttribute("id") == e || t.getAttributeNS(null, "id") == e)) return t;
                        for (var r = t.firstChild; null != r; r = r.nextSibling) {
                            var n = Z.getElementById(r, e);
                            if (null != n) return n
                        }
                        return null
                    };
                    var z = function() {
                        function t(e, r, n) {
                            var o = Error.call(this, function(e, r) {
                                var n = r ? ": " + r.toString() : "";
                                switch (e) {
                                    case t.INVALID_EXPRESSION_ERR:
                                        return "Invalid expression" + n;
                                    case t.TYPE_ERR:
                                        return "Type error" + n
                                }
                                return null
                            }(e, r) || n);
                            return o.code = e, o.exception = r, o
                        }
                        return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.superclass = Error, t.prototype.toString = function() {
                            return this.message
                        }, t.fromMessage = function(e, r) {
                            return new t(null, r, e)
                        }, t.INVALID_EXPRESSION_ERR = 51, t.TYPE_ERR = 52, t
                    }();

                    function tt(t, e, r) {
                        this.xpath = r.parse(t), this.context = new $, this.context.namespaceResolver = new et(e)
                    }

                    function et(t) {
                        this.xpathNSResolver = t
                    }

                    function rt(t) {
                        this.node = t, this.namespaceResolver = new Q
                    }

                    function nt(t, e) {
                        switch (e == nt.ANY_TYPE && (t.constructor === W ? e = nt.STRING_TYPE : t.constructor === j ? e = nt.NUMBER_TYPE : t.constructor === Y ? e = nt.BOOLEAN_TYPE : t.constructor === k && (e = nt.UNORDERED_NODE_ITERATOR_TYPE)), this.resultType = e, e) {
                            case nt.NUMBER_TYPE:
                                return void(this.numberValue = t.numberValue());
                            case nt.STRING_TYPE:
                                return void(this.stringValue = t.stringValue());
                            case nt.BOOLEAN_TYPE:
                                return void(this.booleanValue = t.booleanValue());
                            case nt.ANY_UNORDERED_NODE_TYPE:
                            case nt.FIRST_ORDERED_NODE_TYPE:
                                if (t.constructor === k) return void(this.singleNodeValue = t.first());
                                break;
                            case nt.UNORDERED_NODE_ITERATOR_TYPE:
                            case nt.ORDERED_NODE_ITERATOR_TYPE:
                                if (t.constructor === k) return this.invalidIteratorState = !1, this.nodes = t.toArray(), void(this.iteratorIndex = 0);
                                break;
                            case nt.UNORDERED_NODE_SNAPSHOT_TYPE:
                            case nt.ORDERED_NODE_SNAPSHOT_TYPE:
                                if (t.constructor === k) return this.nodes = t.toArray(), void(this.snapshotLength = this.nodes.length)
                        }
                        throw new z(z.TYPE_ERR)
                    }

                    function ot(t, e) {
                        t.createExpression = function(t, r) {
                            try {
                                return new tt(t, r, e)
                            } catch (t) {
                                throw new z(z.INVALID_EXPRESSION_ERR, t)
                            }
                        }, t.createNSResolver = function(t) {
                            return new rt(t)
                        }, t.evaluate = function(r, n, o, s, i) {
                            if (s < 0 || s > 9) throw {
                                code: 0,
                                toString: function() {
                                    return "Request type not supported"
                                }
                            };
                            return t.createExpression(r, o, e).evaluate(n, s, i)
                        }
                    }
                    tt.prototype = {}, tt.prototype.constructor = tt, tt.superclass = Object.prototype, tt.getOwnerDocument = function(t) {
                        return 9 === t.nodeType ? t : t.ownerDocument
                    }, tt.detectHtmlDom = function(t) {
                        if (!t) return !1;
                        var e = tt.getOwnerDocument(t);
                        try {
                            return e.implementation.hasFeature("HTML", "2.0")
                        } catch (t) {
                            return !0
                        }
                    }, tt.prototype.evaluate = function(t, e, r) {
                        return this.context.expressionContextNode = t, this.context.caseInsensitive = tt.detectHtmlDom(t), new nt(this.xpath.evaluate(this.context), e)
                    }, et.prototype = {}, et.prototype.constructor = et, et.superclass = Object.prototype, et.prototype.getNamespace = function(t, e) {
                        return null == this.xpathNSResolver ? null : this.xpathNSResolver.lookupNamespaceURI(t)
                    }, rt.prototype = {}, rt.prototype.constructor = rt, rt.superclass = Object.prototype, rt.prototype.lookupNamespaceURI = function(t) {
                        return this.namespaceResolver.getNamespace(t, this.node)
                    }, nt.prototype = {}, nt.prototype.constructor = nt, nt.superclass = Object.prototype, nt.prototype.iterateNext = function() {
                        if (this.resultType != nt.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != nt.ORDERED_NODE_ITERATOR_TYPE) throw new z(z.TYPE_ERR);
                        return this.nodes[this.iteratorIndex++]
                    }, nt.prototype.snapshotItem = function(t) {
                        if (this.resultType != nt.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != nt.ORDERED_NODE_SNAPSHOT_TYPE) throw new z(z.TYPE_ERR);
                        return this.nodes[t]
                    }, nt.ANY_TYPE = 0, nt.NUMBER_TYPE = 1, nt.STRING_TYPE = 2, nt.BOOLEAN_TYPE = 3, nt.UNORDERED_NODE_ITERATOR_TYPE = 4, nt.ORDERED_NODE_ITERATOR_TYPE = 5, nt.UNORDERED_NODE_SNAPSHOT_TYPE = 6, nt.ORDERED_NODE_SNAPSHOT_TYPE = 7, nt.ANY_UNORDERED_NODE_TYPE = 8, nt.FIRST_ORDERED_NODE_TYPE = 9;
                    try {
                        var st = !0;
                        try {
                            document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XPath", null) && (st = !1)
                        } catch (t) {}
                        st && ot(document, new l)
                    } catch (t) {}
                    ot(t, new l),
                        function() {
                            var e = new l,
                                r = new Q,
                                n = new J,
                                o = new X;

                            function s(t) {
                                return {
                                    getNamespace: function(e, n) {
                                        return t(e, n) || r.getNamespace(e, n)
                                    }
                                }
                            }

                            function i(t) {
                                return t && "function" == typeof t.getNamespace ? s((e = t).getNamespace.bind(e)) : "function" == typeof t ? s(t) : "object" == typeof t ? function(t) {
                                    return s((function(e) {
                                        return t[e]
                                    }))
                                }(t) : r;
                                var e
                            }

                            function u(t) {
                                if (null == t || t instanceof W || t instanceof Y || t instanceof j || t instanceof k) return t;
                                switch (typeof t) {
                                    case "string":
                                        return new W(t);
                                    case "boolean":
                                        return new Y(t);
                                    case "number":
                                        return new j(t)
                                }
                                var e = new k;
                                return e.addArray([].concat(t)), e
                            }

                            function a(t) {
                                return {
                                    getFunction: function(e, r) {
                                        var o = t(e, r);
                                        return o ? function(t) {
                                            return function(e) {
                                                var r = Array.prototype.slice.call(arguments, 1).map((function(t) {
                                                    return t.evaluate(e)
                                                }));
                                                return u(t.apply(this, [].concat(e, r)))
                                            }
                                        }(o) : n.getFunction(e, r)
                                    }
                                }
                            }

                            function c(t) {
                                return t && "function" == typeof t.getFunction ? a((e = t).getFunction.bind(e)) : "function" == typeof t ? a(t) : "object" == typeof t ? function(t) {
                                    return a((function(e) {
                                        return t[e]
                                    }))
                                }(t) : n;
                                var e
                            }

                            function p(t) {
                                return {
                                    getVariable: function(e, r) {
                                        return u(t(e, r))
                                    }
                                }
                            }

                            function h(t, e, r) {
                                t in r && (e[t] = r[t])
                            }

                            function f(t) {
                                var e = new $;
                                return t ? (e.namespaceResolver = i(t.namespaces), e.functionResolver = c(t.functions), e.variableResolver = function(t) {
                                    if (t) {
                                        if ("function" == typeof t.getVariable) return p(t.getVariable.bind(t));
                                        if ("function" == typeof t) return p(t);
                                        if ("object" == typeof t) return p((function(e) {
                                            return t[e]
                                        }))
                                    }
                                    return o
                                }(t.variables), e.expressionContextNode = t.node, h("allowAnyNamespaceForNoPrefix", e, t), h("isHtml", e, t)) : e.namespaceResolver = r, e
                            }
                            var d = {
                                evaluate: function(t) {
                                    return function(t, e) {
                                        var r = f(e);
                                        return t.evaluate(r)
                                    }(this.expression, t)
                                },
                                evaluateNumber: function(t) {
                                    return this.evaluate(t).numberValue()
                                },
                                evaluateString: function(t) {
                                    return this.evaluate(t).stringValue()
                                },
                                evaluateBoolean: function(t) {
                                    return this.evaluate(t).booleanValue()
                                },
                                evaluateNodeSet: function(t) {
                                    return this.evaluate(t).nodeset()
                                },
                                select: function(t) {
                                    return this.evaluateNodeSet(t).toArray()
                                },
                                select1: function(t) {
                                    return this.select(t)[0]
                                }
                            };
                            t.parse = function(t) {
                                var r = e.parse(t);
                                return Object.create(d, {
                                    expression: {
                                        value: r
                                    }
                                })
                            }
                        }(), c(t, {
                            XPath: p,
                            XPathParser: l,
                            XPathResult: nt,
                            Step: M,
                            PathExpr: C,
                            NodeTest: U,
                            LocationPath: F,
                            OrOperation: m,
                            AndOperation: y,
                            BarOperation: I,
                            EqualsOperation: E,
                            NotEqualOperation: N,
                            LessThanOperation: w,
                            GreaterThanOperation: b,
                            LessThanOrEqualOperation: A,
                            GreaterThanOrEqualOperation: T,
                            PlusOperation: S,
                            MinusOperation: x,
                            MultiplyOperation: O,
                            DivOperation: _,
                            ModOperation: R,
                            UnaryMinusOperation: g,
                            FunctionCall: V,
                            VariableReference: B,
                            XPathContext: $,
                            XNodeSet: k,
                            XBoolean: Y,
                            XString: W,
                            XNumber: j,
                            NamespaceResolver: Q,
                            FunctionResolver: J,
                            VariableResolver: X,
                            Utilities: Z
                        }), t.select = function(e, r, n) {
                            return t.selectWithResolver(e, r, null, n)
                        }, t.useNamespaces = function(e) {
                            var r = {
                                mappings: e || {},
                                lookupNamespaceURI: function(t) {
                                    return this.mappings[t]
                                }
                            };
                            return function(e, n, o) {
                                return t.selectWithResolver(e, n, r, o)
                            }
                        }, t.selectWithResolver = function(t, e, r, n) {
                            var o = new tt(t, r, new l),
                                s = nt.ANY_TYPE,
                                i = o.evaluate(e, s, null);
                            return i.resultType == nt.STRING_TYPE ? i = i.stringValue : i.resultType == nt.NUMBER_TYPE ? i = i.numberValue : i.resultType == nt.BOOLEAN_TYPE ? i = i.booleanValue : (i = i.nodes, n && (i = i[0])), i
                        }, t.select1 = function(e, r) {
                            return t.select(e, r, !0)
                        }
                }(e)
            }
        },
        e = {};

    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var s = e[n] = {
            exports: {}
        };
        return t[n](s, s.exports, r), s.exports
    }
    r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {
            a: e
        }), e
    }, r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var n = {};
    (() => {
        "use strict";
        var t = r(715),
            e = r.n(t),
            n = r(690),
            o = r.n(n),
            s = r(68),
            i = r.n(s),
            u = r(11),
            a = r.n(u),
            c = r(295),
            l = r.n(c);

        function p(t, e = "", r = "") {
            var n = a().parse(t);
            return l()(n, (t => {
                l()(t, (t => {
                    "tag" === t.type ? "page" === t.value ? t.value = "body" : t.value = "wx-" + t.value : "class" === t.type && e ? t.value = e + "--" + t.value : "id" === t.type && r && (t.type = "attribute", t.value = `id='${r+"--"+t.value}'`)
                }))
            })), a().stringify(n)
        }

        function h(t) {
            return !!t && (i()(t.tagName, "WX-") || "BODY" === t.tagName)
        }

        function f(t) {
            var e = "",
                r = t.__wxElement;
            return r && r.__component__ ? e = r.__componentOptions.classPrefix : r && r.classList && (e = r.classList._prefix), e
        }

        function d(t) {
            var e = "",
                r = t.__wxElement;
            return r && r.__component__ ? e = r.__idPrefix : r && r.classList && (e = r.classList._owner && r.classList._owner._elem && r.classList._owner._elem.__idPrefix), e
        }
        var g = r(737),
            v = r.n(g),
            m = r(647),
            y = r.n(m),
            E = r(185),
            N = r.n(E),
            w = r(617),
            b = r.n(w),
            A = r(78),
            T = r.n(A),
            S = r(704),
            x = r.n(S),
            O = r(829),
            _ = r.n(O),
            R = r(626),
            I = r.n(R),
            C = new Map;

        function P(t) {
            var e = t._id;
            return e || (e = v()(), t._id = e), C.set(e, {
                id: e,
                element: t
            }), e
        }

        function L(t) {
            var e = C.get(t);
            if (!e) throw Error("element destroyed");
            return e.element
        }

        function D(t) {
            var e = {
                    elementId: P(t),
                    tagName: t.tagName.toLocaleLowerCase().replace("wx-", "")
                },
                r = N()(t, "__wxElement.__wxTmplId");
            return r && (e.nodeId = r), "video" === e.tagName && (e.videoId = t.__wxElement.id || "", e.parentNodeId = function(t) {
                var e = "",
                    r = t.__wxElement;
                return r && r.__component__ ? e = r.__wxTmplId : r && r.classList && (e = r.classList._owner && r.classList._owner._elem && r.classList._owner._elem.__wxTmplId), e
            }(t)), e
        }

        function F(t, e) {
            var {
                innerText: r,
                textContains: n,
                value: o
            } = e;
            return (!r || y()(N()(t, "innerText") || "") == r) && ((!n || -1 !== y()(N()(t, "innerText") || "").indexOf(n)) && (!o || y()(N()(t.__wxElement, "value") || "") == o))
        }

        function M(t) {
            var {
                elementId: e
            } = t, {
                selector: r,
                innerText: n,
                textContains: s,
                value: i,
                index: u
            } = t, a = L(e);
            r = p(r, f(a), d(a));
            var c = o()(a.querySelectorAll(r)),
                l = [];
            for (var g of c)
                if (h(g) && F(g, {
                        innerText: n,
                        textContains: s,
                        value: i
                    }) && (l.push(D(g)), l.length === u)) break;
            return l
        }

        function U(t) {
            var {
                elementId: e,
                selectorList: r,
                innerText: n,
                textContains: o,
                value: s,
                index: i
            } = t;
            if (0 === r.length) return [];
            var u = r.shift(),
                a = 0 === r.length,
                c = M(Object.assign({
                    elementId: e,
                    selector: u
                }, a ? {
                    innerText: n,
                    textContains: o,
                    value: s,
                    index: i
                } : {}));
            if (0 === c.length) return [];
            if (a) return c;
            var l = c.filter((t => t.nodeId));
            if (0 === l.length) return l;
            var p = [];
            for (var h of l)
                for (var f of U({
                        selectorList: r.slice(),
                        innerText: n,
                        textContains: o,
                        value: s,
                        index: i,
                        elementId: h.elementId
                    }))
                    if (p.push(f), p.length === i) return p;
            return p
        }

        function B(t) {
            var {
                elementId: e
            } = t, {
                selector: r,
                innerText: n,
                textContains: o,
                value: s,
                index: i
            } = t;
            void 0 === i || -1 === i ? i = 0 : i += 1;
            var u = r.split(">>>").map((t => y()(t)));
            if (1 === u.length) return {
                elements: M({
                    elementId: e,
                    selector: r,
                    innerText: n,
                    textContains: o,
                    value: s,
                    index: i
                })
            };
            var a = [];
            for (var c of U({
                    elementId: e,
                    selectorList: u.slice(),
                    innerText: n,
                    textContains: o,
                    value: s,
                    index: i ? i - a.length : 0
                }))
                if (a.push(c), a.length === i) return {
                    elements: a
                };
            return {
                elements: a
            }
        }

        function V() {
            return (V = e()((function*(t) {
                var {
                    elementId: e,
                    names: r
                } = t, n = L(e);
                return {
                    attributes: r.map((t => n.getAttribute(t)))
                }
            }))).apply(this, arguments)
        }

        function H() {
            return (H = e()((function*(t) {
                var {
                    elementId: e,
                    names: r
                } = t, n = L(e), o = getComputedStyle(n);
                return {
                    styles: r.map((t => o[t]))
                }
            }))).apply(this, arguments)
        }

        function W() {
            return (W = e()((function*(t) {
                var {
                    elementId: e,
                    type: r
                } = t, n = L(e);
                return {
                    wxml: j("outer" === r ? n.outerHTML : n.innerHTML)
                }
            }))).apply(this, arguments)
        }

        function j(t) {
            return t = (t = (t = t.replace(/\n/g, "")).replace(/(<wx-text[^>]*>)(<span[^>]*>[^<]*<\/span>)(.*?<\/wx-text>)/g, "$1$3")).replace(/<\/?[^>]*>/g, (t => t.indexOf("<body") > -1 ? "<page>" : "</body>" === t ? "</page>" : 0 !== t.indexOf("<wx-") && 0 !== t.indexOf("</wx-") ? "" : t = (t = (t = (t = t.replace(/wx-/g, "")).replace(/ exparser:[^=]*="[^"]*"/g, "")).replace(/ wx:[^=]*="[^"]*"/g, "")).replace(/ role=""/g, "").replace(/ aria-label=""/g, "")))
        }

        function Y() {
            return (Y = e()((function*(t) {
                var {
                    elementId: e,
                    names: r
                } = t, n = L(e);
                return {
                    properties: r.map((t => N()(n, t)))
                }
            }))).apply(this, arguments)
        }

        function G() {
            return (G = e()((function*(t) {
                var {
                    elementId: e,
                    names: r
                } = t, n = L(e).__wxElement;
                return {
                    properties: r.map((t => N()(n, t)))
                }
            }))).apply(this, arguments)
        }

        function k() {
            return (k = e()((function*(t) {
                var e = L(t.elementId).getBoundingClientRect();
                return {
                    left: e.left + window.pageXOffset,
                    top: e.top + window.pageYOffset
                }
            }))).apply(this, arguments)
        }

        function q() {
            return (q = e()((function*(t) {
                var {
                    elementId: e,
                    click: r
                } = t, n = L(e), o = ut(n);
                return r ? n.click() : (nt(n, {
                    touches: [Object.assign({}, o)],
                    changedTouches: [Object.assign({}, o)]
                }), yield I()(50), st(n, {
                    changedTouches: [Object.assign({}, o)]
                })), {
                    pageX: o.pageX,
                    pageY: o.pageY,
                    clientX: o.clientX,
                    clientY: o.clientY
                }
            }))).apply(this, arguments)
        }

        function $() {
            return ($ = e()((function*(t) {
                var {
                    elementId: e,
                    touches: r,
                    changedTouches: n
                } = t;
                nt(L(e), {
                    touches: r,
                    changedTouches: n
                })
            }))).apply(this, arguments)
        }

        function X() {
            return (X = e()((function*(t) {
                var {
                    elementId: e,
                    touches: r,
                    changedTouches: n
                } = t;
                ot(L(e), {
                    touches: r,
                    changedTouches: n
                })
            }))).apply(this, arguments)
        }

        function J() {
            return (J = e()((function*(t) {
                var {
                    elementId: e,
                    touches: r,
                    changedTouches: n
                } = t;
                st(L(e), {
                    touches: r,
                    changedTouches: n
                })
            }))).apply(this, arguments)
        }

        function Q() {
            return (Q = e()((function*(t) {
                var {
                    type: e,
                    elementId: r
                } = t, {
                    detail: n
                } = t, o = L(r);
                b()(n) && (n = {}), o.__wxElement.triggerEvent(e, n)
            }))).apply(this, arguments)
        }

        function K() {
            return (K = e()((function*(t) {
                var {
                    elementId: e
                } = t, r = L(e), n = t.events;
                for (var o of n) {
                    var {
                        type: s,
                        interval: i = 0,
                        touches: u,
                        changedTouches: a
                    } = o, c = o.detail;
                    switch (s) {
                        case "touchstart":
                            nt(r, {
                                touches: u,
                                changedTouches: a
                            }), i && (yield I()(i));
                            break;
                        case "touchmove":
                            ot(r, {
                                touches: u,
                                changedTouches: a
                            }), i && (yield I()(i));
                            break;
                        case "touchend":
                            st(r, {
                                touches: u,
                                changedTouches: a
                            }), i && (yield I()(i));
                            break;
                        default:
                            b()(c) && (c = {}), r.__wxElement.triggerEvent(s, c), i && (yield I()(i))
                    }
                }
            }))).apply(this, arguments)
        }

        function Z() {
            return (Z = e()((function*(t) {
                var {
                    functionName: e,
                    args: r,
                    elementId: n
                } = t;
                if (!e) throw Error("functionName is not provided");
                var o = L(n);
                r.unshift(o);
                var s = N()(rt, e);
                if (!s) throw Error(`${e} not exists`);
                return {
                    result: s.apply(null, r)
                }
            }))).apply(this, arguments)
        }

        function z(t) {
            return tt.apply(this, arguments)
        }

        function tt() {
            return (tt = e()((function*(t) {
                var {
                    eventName: e,
                    elementId: r,
                    ...n
                } = t;
                if (!e) throw Error("eventName is not provided");
                var o = L(r),
                    s = n.$ ? o.__wxElement.$[n.$] : o;
                if (!s) throw Error("target is not found");
                var i = function(t, e, r) {
                    var n = r.eventData || {},
                        o = n.detail || {},
                        s = n.touches || [],
                        i = n.changedTouches || [];
                    s = at(e, s), i = at(e, i);
                    var u = document.createEvent("Event");
                    u.initEvent(t, !0, !0), u.touches = s, u.changedTouches = i;
                    var a = {
                        bubbles: !0,
                        capturePhase: !0,
                        composed: !0,
                        extraFields: {
                            _allowWriteOnly: !0,
                            touches: s,
                            changedTouches: i
                        },
                        originalEvent: u
                    };
                    return exparser.Event.create(t, o, a)
                }(e, s, t);
                if ("tap" === e) __virtualDOM__.wrapTapMark((() => {
                    exparser.Event.dispatchEvent(s, i)
                }));
                else if ("scroll" === e) {
                    var u, {
                        scrollTop: a,
                        scrollLeft: c
                    } = (null == t || null === (u = t.eventData) || void 0 === u ? void 0 : u.scrollDetail) || {};
                    if (console.warn("[minitest] element.scroll", a, c, t), s !== document) {
                        var l = s;
                        if ("WX-SCROLL-VIEW" === l.tagName) {
                            var p = s.__wxElement.$;
                            l = p.main.$$ ? p.main.$$ : p.main
                        }
                        isNaN(a) || (l.scrollTop = Number(a)), isNaN(c) || (l.scrollLeft = Number(c))
                    } else isNaN(a) || (document.documentElement.scrollTop = Number(a), document.body.scrollTop = Number(a))
                } else exparser.Event.dispatchEvent(s, i)
            }))).apply(this, arguments)
        }

        function et() {
            return (et = e()((function*(t) {
                var {
                    elementId: e
                } = t, r = L(e), n = t.events;
                for (var o of n) {
                    var {
                        type: s,
                        interval: i = 0,
                        touches: u = [],
                        changedTouches: a = []
                    } = o, c = {};
                    switch (s) {
                        case "touchstart":
                        case "touchmove":
                            (_()(u) || b()(u)) && (c.touches = [ut(r)]);
                        case "touchend":
                            (_()(a) || b()(a)) && (c.changedTouches = [ut(r)]);
                            break;
                        default:
                            b()(o.detail) && (c.detail = {})
                    }
                    z({
                        eventName: s,
                        elementId: e,
                        eventData: c
                    }), i && (yield I()(i))
                }
            }))).apply(this, arguments)
        }
        var rt = {
            "scroll-view": {
                scrollTo(t, e, r) {
                    var n = t.__wxElement;
                    n.$.main.$$.scrollLeft = e, n.$.main.$$.scrollTop = r
                },
                scrollTop: t => t.__wxElement.$.main.$$.scrollTop,
                scrollLeft: t => t.__wxElement.$.main.$$.scrollLeft,
                scrollWidth: t => t.__wxElement.$.main.$$.scrollWidth,
                scrollHeight: t => t.__wxElement.$.main.$$.scrollHeight
            },
            swiper: {
                swipeTo(t, e) {
                    var r = t.__wxElement;
                    r.__currentChangeSource = "touch", r.current = e, r._swiping = !0, r._transitioning = !0, r._animateViewport(e, "touch", 0)
                }
            },
            input: {
                input(t, e, r = !1) {
                    var n = t.__wxElement;
                    if (n.onKeyboardComplete) {
                        var o = "ios" === wx.getPlatform();
                        console.warn("input use onKeyboardComplete: " + wx.getPlatform());
                        var s = n._keyboardShow;
                        n._keyboardShow = !0, o && n.publishInputEvent(e, Date.now()), r && n.onKeyboardConfirm({
                            detail: {
                                value: e,
                                inputId: n._inputId
                            }
                        }), n.onKeyboardComplete({
                            detail: {
                                value: e,
                                cursor: e.length,
                                inputId: n._inputId
                            }
                        }), n._keyboardShow = s
                    } else n._inputKey({
                        target: {
                            value: e
                        }
                    }), r && n.triggerEvent("confirm", {
                        value: e
                    }), n._inputBlur({
                        timeStamp: Date.now()
                    }), n._showValueChange(e)
                }
            },
            textarea: {
                input(t, e, r = !1) {
                    var n = t.__wxElement;
                    if (n.onKeyboardComplete) {
                        var o = "ios" === wx.getPlatform();
                        console.warn("input use onKeyboardComplete: " + wx.getPlatform());
                        var s = !1;
                        o && (s = n._keyboardShow, n._keyboardShow = !0, n.triggerEvent("input", {
                            value: e
                        })), r && n.onKeyboardConfirm({
                            detail: {
                                value: e,
                                inputId: n._inputId
                            }
                        }), n.onKeyboardComplete({
                            detail: {
                                value: e,
                                cursor: e.length,
                                inputId: n._inputId
                            }
                        }), o && (n._keyboardShow = s)
                    } else n.onTextAreaInput({
                        target: {
                            value: e
                        }
                    })
                }
            },
            "movable-view": {
                moveTo(t, e, r) {
                    t.__wxElement._animationTo(e, r)
                }
            },
            switch: {
                tap(t) {
                    t.__wxElement.onInputChange()
                }
            },
            slider: {
                slideTo(t, e) {
                    var r = t.__wxElement,
                        n = r.$.step.offsetWidth,
                        o = r.$.step.getBoundingClientRect().left;
                    r._onUserChangedValue({
                        detail: {
                            x: (e - r.min) * n / (r.max - r.min) + o
                        }
                    })
                }
            }
        };

        function nt(t, e = {}) {
            var {
                touches: r = [],
                changedTouches: n = []
            } = e;
            return _()(r) && (r = [ut(t)]), _()(n) && (n = [ut(t)]), it("touchstart", t, {
                touches: r,
                changedTouches: n
            }), r[0]
        }

        function ot(t, e = {}) {
            var {
                touches: r = [],
                changedTouches: n = []
            } = e;
            _()(r) && (r = [ut(t)]), _()(n) && (n = [ut(t)]), it("touchmove", t, {
                touches: r,
                changedTouches: n
            })
        }

        function st(t, e = {}) {
            var {
                touches: r = []
            } = e, {
                changedTouches: n = []
            } = e;
            _()(n) && (n = [ut(t)]), it("touchend", t, {
                touches: r,
                changedTouches: n
            })
        }

        function it(t, e, r) {
            var {
                touches: n,
                changedTouches: o
            } = r, s = document.createEvent("Event");
            s.initEvent(t, !0, !0), s.touches = at(e, n), s.changedTouches = at(e, o), e.dispatchEvent(s)
        }

        function ut(t) {
            var e = t.getBoundingClientRect(),
                r = e.left + window.scrollX,
                n = e.top + window.scrollY,
                o = t.offsetWidth,
                s = t.offsetHeight,
                i = r + Math.round(o / 2),
                u = n + Math.round(s / 2);
            return {
                identifier: 0,
                pageX: i < -50 ? -50 : i,
                pageY: u,
                clientX: i - window.scrollX,
                clientY: u - window.scrollY
            }
        }

        function at(t, e) {
            var r = window.scrollY,
                n = window.scrollX;
            return T()(e, (e => (b()(e.pageX) && e.clientX ? e.pageX = e.clientX + n : e.pageX && b()(e.clientX) && (e.clientX = e.pageX - n), b()(e.pageY) && e.clientY ? e.pageY = e.clientY + r : e.pageY && b()(e.clientY) && (e.clientY = e.pageY - r), x()(e, {
                target: t,
                identifier: 0,
                pageX: 0,
                pageY: 0,
                clientX: 0,
                clientY: 0,
                force: 1
            }), e)))
        }
        var ct = r(298);
        ct.NodeTest.localNameMatches = function(t, e, r) {
            var n = `wx-${t}`,
                o = r.localName || r.nodeName;
            return e.caseInsensitive ? t.toLowerCase() === o.toLowerCase() || n.toLowerCase() === o.toLowerCase() : t === o || n === o
        };
        var lt = ct.PathExpr.applyStep;
        ct.PathExpr.applyStep = function(t, e, r) {
            var n = [];
            if (e.contextNode = r, t.axis === ct.Step.CHILD)
                for (var o = [e.contextNode.firstChild]; o.length > 0;)
                    for (var s = o.shift(); null != s;) {
                        var i = s.localName || s.nodeName;
                        i.startsWith("wx-") || i.startsWith("#") ? t.nodeTest.matches(s, e) && n.push(s) : null != s.firstChild && o.push(s.firstChild), s = s.nextSibling
                    } else n = lt.call(ct.PathExpr, t, e, r);
            return n
        };
        const pt = ct;

        function ht() {
            return ht = e()((function*(t) {
                var {
                    selector: e
                } = t;
                e = p(e);
                var r = window.document.querySelector(e);
                if (h(r) || (r = null), !r) throw Error("no such element");
                return D(r)
            })), ht.apply(this, arguments)
        }

        function ft() {
            return ft = e()((function*(t) {
                var {
                    selector: e
                } = t;
                e = p(e);
                var r = o()(window.document.querySelectorAll(e)),
                    n = [];
                for (var s of r) h(s) && n.push(D(s));
                return {
                    elements: n
                }
            })), ft.apply(this, arguments)
        }

        function dt() {
            return dt = e()((function*(t) {
                var {
                    selector: e
                } = t, r = pt.parse(e).evaluate({
                    node: document.body,
                    isHtml: !0
                }), n = [];
                for (var o of r.nodes) h(o) && n.push(D(o));
                return {
                    elements: n
                }
            })), dt.apply(this, arguments)
        }

        function gt() {
            return gt = e()((function*(t) {
                var {
                    selector: e
                } = t, r = pt.parse(e).evaluate({
                    node: document.body,
                    isHtml: !0
                }), n = r.size > 0 ? r.nodes[0] : null;
                if (h(n) || (n = null), !n) throw Error("no such element");
                return D(n)
            })), gt.apply(this, arguments)
        }
        var vt = {
            "Page.getElement": function(t) {
                return ht.apply(this, arguments)
            },
            "Page.getElements": function(t) {
                return ft.apply(this, arguments)
            },
            "Page.getWindowProperties": function(t) {
                var {
                    names: e
                } = t;
                return {
                    properties: e.map((t => N()(window, t)))
                }
            },
            "Page.getElementByXpath": function(t) {
                return gt.apply(this, arguments)
            },
            "Page.getElementsByXpath": function(t) {
                return dt.apply(this, arguments)
            },
            "Element.getElement": function(t) {
                var {
                    elementId: e
                } = t, {
                    selector: r,
                    innerText: n,
                    textContains: o,
                    value: s
                } = t;
                if (n || o || s) {
                    var i = B({
                        selector: r,
                        innerText: n,
                        textContains: o,
                        value: s,
                        index: 0
                    }).elements;
                    if (0 === i.length) throw Error("no such element");
                    return i[0]
                }
                var u = L(e);
                if (r = p(r, f(u), d(u)), h(u = u.querySelector(r)) || (u = null), !u) throw Error("no such element");
                return D(u)
            },
            "Element.getElements": B,
            "Element.getAttributes": function(t) {
                return V.apply(this, arguments)
            },
            "Element.getStyles": function(t) {
                return H.apply(this, arguments)
            },
            "Element.getWXML": function(t) {
                return W.apply(this, arguments)
            },
            "Element.getDOMProperties": function(t) {
                return Y.apply(this, arguments)
            },
            "Element.getProperties": function(t) {
                return G.apply(this, arguments)
            },
            "Element.getOffset": function(t) {
                return k.apply(this, arguments)
            },
            "Element.tap": function(t) {
                return q.apply(this, arguments)
            },
            "Element.touchstart": function(t) {
                return $.apply(this, arguments)
            },
            "Element.touchmove": function(t) {
                return X.apply(this, arguments)
            },
            "Element.touchend": function(t) {
                return J.apply(this, arguments)
            },
            "Element.triggerEvent": function(t) {
                return Q.apply(this, arguments)
            },
            "Element.triggerEvents": function(t) {
                return K.apply(this, arguments)
            },
            "Element.callFunction": function(t) {
                return Z.apply(this, arguments)
            },
            "Element.dispatchEvent": z,
            "Element.dispatchEvents": function(t) {
                return et.apply(this, arguments)
            }
        };
        const mt = vt;
        var yt = r(697),
            Et = r.n(yt),
            Nt = r.g.WeixinJSBridge,
            wt = !1,
            bt = [];

        function At() {
            wt = !0;
            for (var t = 0, e = bt.length; t < e; t++) bt[t]();
            bt = []
        }
        r.g.__wxConfig.clientDebug = !0;
        var Tt = Object.getOwnPropertyDescriptor(r.g, "WeixinJSBridge");
        Nt && Nt.on ? At() : Tt && !1 === Tt.configurable ? Et()((() => r.g.WeixinJSBridge && r.g.WeixinJSBridge.on), 5e3, 50).then((() => {
            Nt = r.g.WeixinJSBridge, At()
        })) : Object.defineProperty(r.g, "WeixinJSBridge", {
            set(t) {
                t && t.on && (Nt = t, At())
            },
            get: () => Nt,
            configurable: !0
        });
        const St = {
            on: (...t) => Nt.on(...t),
            publish: (...t) => Nt.publish(...t),
            invoke(...t) {
                var e;
                r.g.__isAppServiceRemoteDebugMode__ && "sendAutoMessage" === t[0] && (null === (e = r.g.__debugMessager) || void 0 === e || e.sendToDevtools(t[0], t[1]));
                return Nt.invoke(...t)
            },
            subscribe: (...t) => Nt.subscribe(...t),
            onReady(t) {
                wt ? t() : bt.push(t)
            }
        };
        var xt = 1,
            Ot = {};
        St.onReady((() => {
            St.subscribe("callbackAutoInvoke", (({
                res: t,
                callbackId: e
            }) => {
                var r = Ot[e];
                r && (r(t), delete Ot[e])
            }))
        }));
        var _t = {
            operateWXData: "operateWXData",
            getPhoneNumber: "getPhoneNumber",
            getUserAutoFillData: "getUserAutoFillData",
            setUserAutoFillData: "setUserAutoFillData",
            deleteUserAutoFillData: "deleteUserAutoFillData",
            requestAuthUserAutoFillData: "requestAuthUserAutoFillData"
        };

        function Rt() {
            return (Rt = e()((function*(t, e) {
                if (mt[t]) return (yield mt[t](e)) || {};
                throw Error(`webview ${t} unimplemented`)
            }))).apply(this, arguments)
        }
        St.onReady((() => {
            var t;
            St.subscribe("sendAutoMessage", function() {
                var t = e()((function*(t) {
                    var {
                        method: e,
                        params: r,
                        id: n
                    } = t, o = {
                        id: n
                    };
                    try {
                        o.result = yield function(t, e) {
                            return Rt.apply(this, arguments)
                        }(e, r)
                    } catch (t) {
                        o.error = {
                            message: t.message
                        }
                    }
                    St.publish("sendAutoMessage", o)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }());
            var n = r.g.__wxConfig;
            if (null != n && null !== (t = n.debugLaunchInfo) && void 0 !== t && t.autoTest) {
                var o = r.g.WeixinJSBridge.invoke;
                Object.defineProperty(r.g.WeixinJSBridge, "invoke", {
                    value(...t) {
                        var [e, n, s, i] = t;
                        return _t[e] ? function(t, e, r) {
                            var n = xt++;
                            Ot[n] = r, St.publish("callAutoInvoke", {
                                callbackId: n,
                                name: t,
                                args: e
                            })
                        }(e, n, s) : o.apply(r.g.WeixinJSBridge, t)
                    }
                })
            }
        }))
    })()
})();