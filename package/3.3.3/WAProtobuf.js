try {
    ! function() {
        let e, t = "getProtobufGlobalVar";
        globalThis[t] ? e = globalThis[t] : void 0 !== globalThis.WeixinJSBridge && globalThis.WeixinJSBridge[t] && (e = globalThis.WeixinJSBridge[t]);
        var {
            wxConsole: u,
            console: n,
            NativeGlobal: r,
            __Function__: o,
            __SDK_SUB_PACKAGE__: i
        } = e(), f = void 0 !== o ? o : globalThis.Function;
        let a;

        function s() {
            return a || (a = function(e) {
                var t = {};

                function u(n) {
                    if (t[n]) return t[n].exports;
                    var r = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(r.exports, r, r.exports, u), r.l = !0, r.exports
                }
                return u.m = e, u.c = t, u.d = function(e, t, n) {
                    u.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, u.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, u.t = function(e, t) {
                    if (1 & t && (e = u(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (u.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var r in e) u.d(n, r, function(t) {
                            return e[t]
                        }.bind(null, r));
                    return n
                }, u.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return u.d(t, "a", t), t
                }, u.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, u.p = "", u(u.s = "./entry.js")
            }({
                "./entry.js": function(e, t, u) {
                    (function(t) {
                        const n = u("./node_modules/protocol-buffers/index.js"),
                            o = u("./node_modules/protocol-buffers-encodings/index.js");
                        var i = u("./node_modules/varint/index.js");
                        const f = function(e, t) {
                            const u = new Uint8Array(8);
                            let n = t,
                                r = 0,
                                o = 0,
                                i = 0;
                            do {
                                o |= (127 & e[n]) << i, i += 7, i >= 8 && (u[r] = 255 & o, o >>= 8, i -= 8, r++)
                            } while (e[n++] >= 128);
                            return u[r] = 255 & o, f.bytes = n - t, u
                        };

                        function a(e, t) {
                            let u = 0;
                            for (let n = t; n < e.length; n++) {
                                if (!(128 & e[n])) return u + 1;
                                u++
                            }
                            return u
                        }
                        var s, c, d = function(e, t, u, n) {
                            return t.bytes = u.bytes = 0, {
                                type: e,
                                encode: t,
                                decode: u,
                                encodingLength: n
                            }
                        };
                        o.uint64 = (s = function(e, t) {
                            var u = a(e, t);
                            if (u >= 7 && r.decodeUint64Array) {
                                e = f(e, t);
                                var n = r.decodeUint64Array(e);
                                s.bytes = u
                            } else n = i.decode(e, t), s.bytes = i.decode.bytes;
                            return n
                        }, c = i.encode, d(0, c, s, (function(e) {
                            return e < 0 ? 10 : i.encodingLength(e)
                        }))), o.int64 = function() {
                            var e = function(u, n) {
                                    if (((s = i.decode(u, n)) > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER) && r.decodeUint64Array) {
                                        var o = a(u, n);
                                        let t = 10 == o;
                                        t && (u[9 + n] = 127 & u[9 + n]), u = f(u, n);
                                        var s = r.decodeUint64Array(u);
                                        return e.bytes = o, t ? "-" + s : s
                                    }
                                    if (s >= Math.pow(2, 63)) {
                                        for (var c = 9; 255 === u[n + c - 1];) c--;
                                        var d = new t(c = c || 9);
                                        u.copy(d, 0, n, n + c), d[c - 1] = 127 & d[c - 1], s = -1 * i.decode(d, 0), e.bytes = 10
                                    } else e.bytes = i.decode.bytes;
                                    return s
                                },
                                u = function(e, t, n) {
                                    if (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) throw new Error("number too large, not supported yet");
                                    if (e < 0) {
                                        var r = n + 9;
                                        for (i.encode(-1 * e, t, n), t[n += i.encode.bytes - 1] = 128 | t[n]; n < r - 1;) t[++n] = 255;
                                        t[r] = 1, u.bytes = 10
                                    } else i.encode(e, t, n), u.bytes = i.encode.bytes;
                                    return t
                                };
                            return d(0, u, e, (function(e) {
                                return e < 0 ? 10 : i.encodingLength(e)
                            }))
                        }(), e.exports = function(e) {
                            const u = n(e);
                            return Object.keys(u).forEach((function(e) {
                                var n;
                                u[e].decode && (u[e].decode = (n = u[e].decode, function e(u) {
                                    "[object Uint8Array]" == Object.prototype.toString.call(u) && u.__proto__ != t.__proto__ && (u.__proto__ = t.prototype);
                                    const r = n.apply(this, arguments);
                                    return e.bytes = n.bytes, r
                                }))
                            })), u
                        }, e.exports.fixBuffer = function(e) {
                            return "[object Uint8Array]" == Object.prototype.toString.call(e) && e.__proto__ != t.__proto__ && (e.__proto__ = t.prototype), e
                        }
                    }).call(this, u("./node_modules/buffer/index.js").Buffer)
                },
                "./node_modules/base64-js/index.js": function(e, t, u) {
                    "use strict";
                    t.byteLength = function(e) {
                        var t = a(e),
                            u = t[0],
                            n = t[1];
                        return 3 * (u + n) / 4 - n
                    }, t.toByteArray = function(e) {
                        var t, u, n = a(e),
                            i = n[0],
                            f = n[1],
                            s = new o(function(e, t, u) {
                                return 3 * (t + u) / 4 - u
                            }(0, i, f)),
                            c = 0,
                            d = f > 0 ? i - 4 : i;
                        for (u = 0; u < d; u += 4) t = r[e.charCodeAt(u)] << 18 | r[e.charCodeAt(u + 1)] << 12 | r[e.charCodeAt(u + 2)] << 6 | r[e.charCodeAt(u + 3)], s[c++] = t >> 16 & 255, s[c++] = t >> 8 & 255, s[c++] = 255 & t;
                        2 === f && (t = r[e.charCodeAt(u)] << 2 | r[e.charCodeAt(u + 1)] >> 4, s[c++] = 255 & t);
                        1 === f && (t = r[e.charCodeAt(u)] << 10 | r[e.charCodeAt(u + 1)] << 4 | r[e.charCodeAt(u + 2)] >> 2, s[c++] = t >> 8 & 255, s[c++] = 255 & t);
                        return s
                    }, t.fromByteArray = function(e) {
                        for (var t, u = e.length, r = u % 3, o = [], i = 16383, f = 0, a = u - r; f < a; f += i) o.push(s(e, f, f + i > a ? a : f + i));
                        1 === r ? (t = e[u - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === r && (t = (e[u - 2] << 8) + e[u - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
                        return o.join("")
                    };
                    for (var n = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0; f < 64; ++f) n[f] = i[f], r[i.charCodeAt(f)] = f;

                    function a(e) {
                        var t = e.length;
                        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                        var u = e.indexOf("=");
                        return -1 === u && (u = t), [u, u === t ? 0 : 4 - u % 4]
                    }

                    function s(e, t, u) {
                        for (var r, o, i = [], f = t; f < u; f += 3) r = (e[f] << 16 & 16711680) + (e[f + 1] << 8 & 65280) + (255 & e[f + 2]), i.push(n[(o = r) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                        return i.join("")
                    }
                    r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
                },
                "./node_modules/buffer/index.js": function(e, t, u) {
                    "use strict";
                    (function(e) {
                        var n = u("./node_modules/base64-js/index.js"),
                            r = u("./node_modules/ieee754/index.js"),
                            o = u("./node_modules/isarray/index.js");

                        function i() {
                            return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                        }

                        function f(e, t) {
                            if (i() < t) throw new RangeError("Invalid typed array length");
                            return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = a.prototype : (null === e && (e = new a(t)), e.length = t), e
                        }

                        function a(e, t, u) {
                            if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(e, t, u);
                            if ("number" == typeof e) {
                                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                                return d(this, e)
                            }
                            return s(this, e, t, u)
                        }

                        function s(e, t, u, n) {
                            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, u, n) {
                                if (t.byteLength, u < 0 || t.byteLength < u) throw new RangeError("'offset' is out of bounds");
                                if (t.byteLength < u + (n || 0)) throw new RangeError("'length' is out of bounds");
                                t = void 0 === u && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, u) : new Uint8Array(t, u, n);
                                a.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = a.prototype : e = p(e, t);
                                return e
                            }(e, t, u, n) : "string" == typeof t ? function(e, t, u) {
                                "string" == typeof u && "" !== u || (u = "utf8");
                                if (!a.isEncoding(u)) throw new TypeError('"encoding" must be a valid string encoding');
                                var n = 0 | h(t, u);
                                e = f(e, n);
                                var r = e.write(t, u);
                                r !== n && (e = e.slice(0, r));
                                return e
                            }(e, t, u) : function(e, t) {
                                if (a.isBuffer(t)) {
                                    var u = 0 | l(t.length);
                                    return 0 === (e = f(e, u)).length || t.copy(e, 0, 0, u), e
                                }
                                if (t) {
                                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? f(e, 0) : p(e, t);
                                    if ("Buffer" === t.type && o(t.data)) return p(e, t.data)
                                }
                                var n;
                                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                            }(e, t)
                        }

                        function c(e) {
                            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                            if (e < 0) throw new RangeError('"size" argument must not be negative')
                        }

                        function d(e, t) {
                            if (c(t), e = f(e, t < 0 ? 0 : 0 | l(t)), !a.TYPED_ARRAY_SUPPORT)
                                for (var u = 0; u < t; ++u) e[u] = 0;
                            return e
                        }

                        function p(e, t) {
                            var u = t.length < 0 ? 0 : 0 | l(t.length);
                            e = f(e, u);
                            for (var n = 0; n < u; n += 1) e[n] = 255 & t[n];
                            return e
                        }

                        function l(e) {
                            if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                            return 0 | e
                        }

                        function h(e, t) {
                            if (a.isBuffer(e)) return e.length;
                            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                            "string" != typeof e && (e = "" + e);
                            var u = e.length;
                            if (0 === u) return 0;
                            for (var n = !1;;) switch (t) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return u;
                                case "utf8":
                                case "utf-8":
                                case void 0:
                                    return z(e).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * u;
                                case "hex":
                                    return u >>> 1;
                                case "base64":
                                    return F(e).length;
                                default:
                                    if (n) return z(e).length;
                                    t = ("" + t).toLowerCase(), n = !0
                            }
                        }

                        function b(e, t, u) {
                            var n = !1;
                            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                            if ((void 0 === u || u > this.length) && (u = this.length), u <= 0) return "";
                            if ((u >>>= 0) <= (t >>>= 0)) return "";
                            for (e || (e = "utf8");;) switch (e) {
                                case "hex":
                                    return T(this, t, u);
                                case "utf8":
                                case "utf-8":
                                    return k(this, t, u);
                                case "ascii":
                                    return L(this, t, u);
                                case "latin1":
                                case "binary":
                                    return S(this, t, u);
                                case "base64":
                                    return O(this, t, u);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return P(this, t, u);
                                default:
                                    if (n) throw new TypeError("Unknown encoding: " + e);
                                    e = (e + "").toLowerCase(), n = !0
                            }
                        }

                        function g(e, t, u) {
                            var n = e[t];
                            e[t] = e[u], e[u] = n
                        }

                        function y(e, t, u, n, r) {
                            if (0 === e.length) return -1;
                            if ("string" == typeof u ? (n = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, isNaN(u) && (u = r ? 0 : e.length - 1), u < 0 && (u = e.length + u), u >= e.length) {
                                if (r) return -1;
                                u = e.length - 1
                            } else if (u < 0) {
                                if (!r) return -1;
                                u = 0
                            }
                            if ("string" == typeof t && (t = a.from(t, n)), a.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, u, n, r);
                            if ("number" == typeof t) return t &= 255, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, u) : Uint8Array.prototype.lastIndexOf.call(e, t, u) : m(e, [t], u, n, r);
                            throw new TypeError("val must be string, number or Buffer")
                        }

                        function m(e, t, u, n, r) {
                            var o, i = 1,
                                f = e.length,
                                a = t.length;
                            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                if (e.length < 2 || t.length < 2) return -1;
                                i = 2, f /= 2, a /= 2, u /= 2
                            }

                            function s(e, t) {
                                return 1 === i ? e[t] : e.readUInt16BE(t * i)
                            }
                            if (r) {
                                var c = -1;
                                for (o = u; o < f; o++)
                                    if (s(e, o) === s(t, -1 === c ? 0 : o - c)) {
                                        if (-1 === c && (c = o), o - c + 1 === a) return c * i
                                    } else - 1 !== c && (o -= o - c), c = -1
                            } else
                                for (u + a > f && (u = f - a), o = u; o >= 0; o--) {
                                    for (var d = !0, p = 0; p < a; p++)
                                        if (s(e, o + p) !== s(t, p)) {
                                            d = !1;
                                            break
                                        } if (d) return o
                                }
                            return -1
                        }

                        function v(e, t, u, n) {
                            u = Number(u) || 0;
                            var r = e.length - u;
                            n ? (n = Number(n)) > r && (n = r) : n = r;
                            var o = t.length;
                            if (o % 2 != 0) throw new TypeError("Invalid hex string");
                            n > o / 2 && (n = o / 2);
                            for (var i = 0; i < n; ++i) {
                                var f = parseInt(t.substr(2 * i, 2), 16);
                                if (isNaN(f)) return i;
                                e[u + i] = f
                            }
                            return i
                        }

                        function w(e, t, u, n) {
                            return J(z(t, e.length - u), e, u, n)
                        }

                        function E(e, t, u, n) {
                            return J(function(e) {
                                for (var t = [], u = 0; u < e.length; ++u) t.push(255 & e.charCodeAt(u));
                                return t
                            }(t), e, u, n)
                        }

                        function _(e, t, u, n) {
                            return E(e, t, u, n)
                        }

                        function x(e, t, u, n) {
                            return J(F(t), e, u, n)
                        }

                        function j(e, t, u, n) {
                            return J(function(e, t) {
                                for (var u, n, r, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) n = (u = e.charCodeAt(i)) >> 8, r = u % 256, o.push(r), o.push(n);
                                return o
                            }(t, e.length - u), e, u, n)
                        }

                        function O(e, t, u) {
                            return 0 === t && u === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, u))
                        }

                        function k(e, t, u) {
                            u = Math.min(e.length, u);
                            for (var n = [], r = t; r < u;) {
                                var o, i, f, a, s = e[r],
                                    c = null,
                                    d = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                                if (r + d <= u) switch (d) {
                                    case 1:
                                        s < 128 && (c = s);
                                        break;
                                    case 2:
                                        128 == (192 & (o = e[r + 1])) && (a = (31 & s) << 6 | 63 & o) > 127 && (c = a);
                                        break;
                                    case 3:
                                        o = e[r + 1], i = e[r + 2], 128 == (192 & o) && 128 == (192 & i) && (a = (15 & s) << 12 | (63 & o) << 6 | 63 & i) > 2047 && (a < 55296 || a > 57343) && (c = a);
                                        break;
                                    case 4:
                                        o = e[r + 1], i = e[r + 2], f = e[r + 3], 128 == (192 & o) && 128 == (192 & i) && 128 == (192 & f) && (a = (15 & s) << 18 | (63 & o) << 12 | (63 & i) << 6 | 63 & f) > 65535 && a < 1114112 && (c = a)
                                }
                                null === c ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), r += d
                            }
                            return function(e) {
                                var t = e.length;
                                if (t <= A) return String.fromCharCode.apply(String, e);
                                var u = "",
                                    n = 0;
                                for (; n < t;) u += String.fromCharCode.apply(String, e.slice(n, n += A));
                                return u
                            }(n)
                        }
                        t.Buffer = a, t.SlowBuffer = function(e) {
                            +e != e && (e = 0);
                            return a.alloc(+e)
                        }, t.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                            try {
                                var e = new Uint8Array(1);
                                return e.__proto__ = {
                                    __proto__: Uint8Array.prototype,
                                    foo: function() {
                                        return 42
                                    }
                                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                            } catch (e) {
                                return !1
                            }
                        }(), t.kMaxLength = i(), a.poolSize = 8192, a._augment = function(e) {
                            return e.__proto__ = a.prototype, e
                        }, a.from = function(e, t, u) {
                            return s(null, e, t, u)
                        }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
                            value: null,
                            configurable: !0
                        })), a.alloc = function(e, t, u) {
                            return function(e, t, u, n) {
                                return c(t), t <= 0 ? f(e, t) : void 0 !== u ? "string" == typeof n ? f(e, t).fill(u, n) : f(e, t).fill(u) : f(e, t)
                            }(null, e, t, u)
                        }, a.allocUnsafe = function(e) {
                            return d(null, e)
                        }, a.allocUnsafeSlow = function(e) {
                            return d(null, e)
                        }, a.isBuffer = function(e) {
                            return !(null == e || !e._isBuffer)
                        }, a.compare = function(e, t) {
                            if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                            if (e === t) return 0;
                            for (var u = e.length, n = t.length, r = 0, o = Math.min(u, n); r < o; ++r)
                                if (e[r] !== t[r]) {
                                    u = e[r], n = t[r];
                                    break
                                } return u < n ? -1 : n < u ? 1 : 0
                        }, a.isEncoding = function(e) {
                            switch (String(e).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "latin1":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1
                            }
                        }, a.concat = function(e, t) {
                            if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                            if (0 === e.length) return a.alloc(0);
                            var u;
                            if (void 0 === t)
                                for (t = 0, u = 0; u < e.length; ++u) t += e[u].length;
                            var n = a.allocUnsafe(t),
                                r = 0;
                            for (u = 0; u < e.length; ++u) {
                                var i = e[u];
                                if (!a.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                                i.copy(n, r), r += i.length
                            }
                            return n
                        }, a.byteLength = h, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                            var e = this.length;
                            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                            for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                            return this
                        }, a.prototype.swap32 = function() {
                            var e = this.length;
                            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                            for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                            return this
                        }, a.prototype.swap64 = function() {
                            var e = this.length;
                            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                            for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                            return this
                        }, a.prototype.toString = function() {
                            var e = 0 | this.length;
                            return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : b.apply(this, arguments)
                        }, a.prototype.equals = function(e) {
                            if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                            return this === e || 0 === a.compare(this, e)
                        }, a.prototype.inspect = function() {
                            var e = "",
                                u = t.INSPECT_MAX_BYTES;
                            return this.length > 0 && (e = this.toString("hex", 0, u).match(/.{2}/g).join(" "), this.length > u && (e += " ... ")), "<Buffer " + e + ">"
                        }, a.prototype.compare = function(e, t, u, n, r) {
                            if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                            if (void 0 === t && (t = 0), void 0 === u && (u = e ? e.length : 0), void 0 === n && (n = 0), void 0 === r && (r = this.length), t < 0 || u > e.length || n < 0 || r > this.length) throw new RangeError("out of range index");
                            if (n >= r && t >= u) return 0;
                            if (n >= r) return -1;
                            if (t >= u) return 1;
                            if (this === e) return 0;
                            for (var o = (r >>>= 0) - (n >>>= 0), i = (u >>>= 0) - (t >>>= 0), f = Math.min(o, i), s = this.slice(n, r), c = e.slice(t, u), d = 0; d < f; ++d)
                                if (s[d] !== c[d]) {
                                    o = s[d], i = c[d];
                                    break
                                } return o < i ? -1 : i < o ? 1 : 0
                        }, a.prototype.includes = function(e, t, u) {
                            return -1 !== this.indexOf(e, t, u)
                        }, a.prototype.indexOf = function(e, t, u) {
                            return y(this, e, t, u, !0)
                        }, a.prototype.lastIndexOf = function(e, t, u) {
                            return y(this, e, t, u, !1)
                        }, a.prototype.write = function(e, t, u, n) {
                            if (void 0 === t) n = "utf8", u = this.length, t = 0;
                            else if (void 0 === u && "string" == typeof t) n = t, u = this.length, t = 0;
                            else {
                                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                t |= 0, isFinite(u) ? (u |= 0, void 0 === n && (n = "utf8")) : (n = u, u = void 0)
                            }
                            var r = this.length - t;
                            if ((void 0 === u || u > r) && (u = r), e.length > 0 && (u < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                            n || (n = "utf8");
                            for (var o = !1;;) switch (n) {
                                case "hex":
                                    return v(this, e, t, u);
                                case "utf8":
                                case "utf-8":
                                    return w(this, e, t, u);
                                case "ascii":
                                    return E(this, e, t, u);
                                case "latin1":
                                case "binary":
                                    return _(this, e, t, u);
                                case "base64":
                                    return x(this, e, t, u);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return j(this, e, t, u);
                                default:
                                    if (o) throw new TypeError("Unknown encoding: " + n);
                                    n = ("" + n).toLowerCase(), o = !0
                            }
                        }, a.prototype.toJSON = function() {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(this._arr || this, 0)
                            }
                        };
                        var A = 4096;

                        function L(e, t, u) {
                            var n = "";
                            u = Math.min(e.length, u);
                            for (var r = t; r < u; ++r) n += String.fromCharCode(127 & e[r]);
                            return n
                        }

                        function S(e, t, u) {
                            var n = "";
                            u = Math.min(e.length, u);
                            for (var r = t; r < u; ++r) n += String.fromCharCode(e[r]);
                            return n
                        }

                        function T(e, t, u) {
                            var n = e.length;
                            (!t || t < 0) && (t = 0), (!u || u < 0 || u > n) && (u = n);
                            for (var r = "", o = t; o < u; ++o) r += C(e[o]);
                            return r
                        }

                        function P(e, t, u) {
                            for (var n = e.slice(t, u), r = "", o = 0; o < n.length; o += 2) r += String.fromCharCode(n[o] + 256 * n[o + 1]);
                            return r
                        }

                        function R(e, t, u) {
                            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                            if (e + t > u) throw new RangeError("Trying to access beyond buffer length")
                        }

                        function U(e, t, u, n, r, o) {
                            if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                            if (t > r || t < o) throw new RangeError('"value" argument is out of bounds');
                            if (u + n > e.length) throw new RangeError("Index out of range")
                        }

                        function B(e, t, u, n) {
                            t < 0 && (t = 65535 + t + 1);
                            for (var r = 0, o = Math.min(e.length - u, 2); r < o; ++r) e[u + r] = (t & 255 << 8 * (n ? r : 1 - r)) >>> 8 * (n ? r : 1 - r)
                        }

                        function N(e, t, u, n) {
                            t < 0 && (t = 4294967295 + t + 1);
                            for (var r = 0, o = Math.min(e.length - u, 4); r < o; ++r) e[u + r] = t >>> 8 * (n ? r : 3 - r) & 255
                        }

                        function I(e, t, u, n, r, o) {
                            if (u + n > e.length) throw new RangeError("Index out of range");
                            if (u < 0) throw new RangeError("Index out of range")
                        }

                        function M(e, t, u, n, o) {
                            return o || I(e, 0, u, 4), r.write(e, t, u, n, 23, 4), u + 4
                        }

                        function D(e, t, u, n, o) {
                            return o || I(e, 0, u, 8), r.write(e, t, u, n, 52, 8), u + 8
                        }
                        a.prototype.slice = function(e, t) {
                            var u, n = this.length;
                            if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), a.TYPED_ARRAY_SUPPORT)(u = this.subarray(e, t)).__proto__ = a.prototype;
                            else {
                                var r = t - e;
                                u = new a(r, void 0);
                                for (var o = 0; o < r; ++o) u[o] = this[o + e]
                            }
                            return u
                        }, a.prototype.readUIntLE = function(e, t, u) {
                            e |= 0, t |= 0, u || R(e, t, this.length);
                            for (var n = this[e], r = 1, o = 0; ++o < t && (r *= 256);) n += this[e + o] * r;
                            return n
                        }, a.prototype.readUIntBE = function(e, t, u) {
                            e |= 0, t |= 0, u || R(e, t, this.length);
                            for (var n = this[e + --t], r = 1; t > 0 && (r *= 256);) n += this[e + --t] * r;
                            return n
                        }, a.prototype.readUInt8 = function(e, t) {
                            return t || R(e, 1, this.length), this[e]
                        }, a.prototype.readUInt16LE = function(e, t) {
                            return t || R(e, 2, this.length), this[e] | this[e + 1] << 8
                        }, a.prototype.readUInt16BE = function(e, t) {
                            return t || R(e, 2, this.length), this[e] << 8 | this[e + 1]
                        }, a.prototype.readUInt32LE = function(e, t) {
                            return t || R(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                        }, a.prototype.readUInt32BE = function(e, t) {
                            return t || R(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                        }, a.prototype.readIntLE = function(e, t, u) {
                            e |= 0, t |= 0, u || R(e, t, this.length);
                            for (var n = this[e], r = 1, o = 0; ++o < t && (r *= 256);) n += this[e + o] * r;
                            return n >= (r *= 128) && (n -= Math.pow(2, 8 * t)), n
                        }, a.prototype.readIntBE = function(e, t, u) {
                            e |= 0, t |= 0, u || R(e, t, this.length);
                            for (var n = t, r = 1, o = this[e + --n]; n > 0 && (r *= 256);) o += this[e + --n] * r;
                            return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o
                        }, a.prototype.readInt8 = function(e, t) {
                            return t || R(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                        }, a.prototype.readInt16LE = function(e, t) {
                            t || R(e, 2, this.length);
                            var u = this[e] | this[e + 1] << 8;
                            return 32768 & u ? 4294901760 | u : u
                        }, a.prototype.readInt16BE = function(e, t) {
                            t || R(e, 2, this.length);
                            var u = this[e + 1] | this[e] << 8;
                            return 32768 & u ? 4294901760 | u : u
                        }, a.prototype.readInt32LE = function(e, t) {
                            return t || R(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                        }, a.prototype.readInt32BE = function(e, t) {
                            return t || R(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                        }, a.prototype.readFloatLE = function(e, t) {
                            return t || R(e, 4, this.length), r.read(this, e, !0, 23, 4)
                        }, a.prototype.readFloatBE = function(e, t) {
                            return t || R(e, 4, this.length), r.read(this, e, !1, 23, 4)
                        }, a.prototype.readDoubleLE = function(e, t) {
                            return t || R(e, 8, this.length), r.read(this, e, !0, 52, 8)
                        }, a.prototype.readDoubleBE = function(e, t) {
                            return t || R(e, 8, this.length), r.read(this, e, !1, 52, 8)
                        }, a.prototype.writeUIntLE = function(e, t, u, n) {
                            (e = +e, t |= 0, u |= 0, n) || U(this, e, t, u, Math.pow(2, 8 * u) - 1, 0);
                            var r = 1,
                                o = 0;
                            for (this[t] = 255 & e; ++o < u && (r *= 256);) this[t + o] = e / r & 255;
                            return t + u
                        }, a.prototype.writeUIntBE = function(e, t, u, n) {
                            (e = +e, t |= 0, u |= 0, n) || U(this, e, t, u, Math.pow(2, 8 * u) - 1, 0);
                            var r = u - 1,
                                o = 1;
                            for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
                            return t + u
                        }, a.prototype.writeUInt8 = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                        }, a.prototype.writeUInt16LE = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
                        }, a.prototype.writeUInt16BE = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
                        }, a.prototype.writeUInt32LE = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : N(this, e, t, !0), t + 4
                        }, a.prototype.writeUInt32BE = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : N(this, e, t, !1), t + 4
                        }, a.prototype.writeIntLE = function(e, t, u, n) {
                            if (e = +e, t |= 0, !n) {
                                var r = Math.pow(2, 8 * u - 1);
                                U(this, e, t, u, r - 1, -r)
                            }
                            var o = 0,
                                i = 1,
                                f = 0;
                            for (this[t] = 255 & e; ++o < u && (i *= 256);) e < 0 && 0 === f && 0 !== this[t + o - 1] && (f = 1), this[t + o] = (e / i >> 0) - f & 255;
                            return t + u
                        }, a.prototype.writeIntBE = function(e, t, u, n) {
                            if (e = +e, t |= 0, !n) {
                                var r = Math.pow(2, 8 * u - 1);
                                U(this, e, t, u, r - 1, -r)
                            }
                            var o = u - 1,
                                i = 1,
                                f = 0;
                            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) e < 0 && 0 === f && 0 !== this[t + o + 1] && (f = 1), this[t + o] = (e / i >> 0) - f & 255;
                            return t + u
                        }, a.prototype.writeInt8 = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                        }, a.prototype.writeInt16LE = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
                        }, a.prototype.writeInt16BE = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
                        }, a.prototype.writeInt32LE = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : N(this, e, t, !0), t + 4
                        }, a.prototype.writeInt32BE = function(e, t, u) {
                            return e = +e, t |= 0, u || U(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : N(this, e, t, !1), t + 4
                        }, a.prototype.writeFloatLE = function(e, t, u) {
                            return M(this, e, t, !0, u)
                        }, a.prototype.writeFloatBE = function(e, t, u) {
                            return M(this, e, t, !1, u)
                        }, a.prototype.writeDoubleLE = function(e, t, u) {
                            return D(this, e, t, !0, u)
                        }, a.prototype.writeDoubleBE = function(e, t, u) {
                            return D(this, e, t, !1, u)
                        }, a.prototype.copy = function(e, t, u, n) {
                            if (u || (u = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < u && (n = u), n === u) return 0;
                            if (0 === e.length || 0 === this.length) return 0;
                            if (t < 0) throw new RangeError("targetStart out of bounds");
                            if (u < 0 || u >= this.length) throw new RangeError("sourceStart out of bounds");
                            if (n < 0) throw new RangeError("sourceEnd out of bounds");
                            n > this.length && (n = this.length), e.length - t < n - u && (n = e.length - t + u);
                            var r, o = n - u;
                            if (this === e && u < t && t < n)
                                for (r = o - 1; r >= 0; --r) e[r + t] = this[r + u];
                            else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
                                for (r = 0; r < o; ++r) e[r + t] = this[r + u];
                            else Uint8Array.prototype.set.call(e, this.subarray(u, u + o), t);
                            return o
                        }, a.prototype.fill = function(e, t, u, n) {
                            if ("string" == typeof e) {
                                if ("string" == typeof t ? (n = t, t = 0, u = this.length) : "string" == typeof u && (n = u, u = this.length), 1 === e.length) {
                                    var r = e.charCodeAt(0);
                                    r < 256 && (e = r)
                                }
                                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                                if ("string" == typeof n && !a.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                            } else "number" == typeof e && (e &= 255);
                            if (t < 0 || this.length < t || this.length < u) throw new RangeError("Out of range index");
                            if (u <= t) return this;
                            var o;
                            if (t >>>= 0, u = void 0 === u ? this.length : u >>> 0, e || (e = 0), "number" == typeof e)
                                for (o = t; o < u; ++o) this[o] = e;
                            else {
                                var i = a.isBuffer(e) ? e : z(new a(e, n).toString()),
                                    f = i.length;
                                for (o = 0; o < u - t; ++o) this[o + t] = i[o % f]
                            }
                            return this
                        };
                        var Y = /[^+\/0-9A-Za-z-_]/g;

                        function C(e) {
                            return e < 16 ? "0" + e.toString(16) : e.toString(16)
                        }

                        function z(e, t) {
                            var u;
                            t = t || 1 / 0;
                            for (var n = e.length, r = null, o = [], i = 0; i < n; ++i) {
                                if ((u = e.charCodeAt(i)) > 55295 && u < 57344) {
                                    if (!r) {
                                        if (u > 56319) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        if (i + 1 === n) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        r = u;
                                        continue
                                    }
                                    if (u < 56320) {
                                        (t -= 3) > -1 && o.push(239, 191, 189), r = u;
                                        continue
                                    }
                                    u = 65536 + (r - 55296 << 10 | u - 56320)
                                } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                                if (r = null, u < 128) {
                                    if ((t -= 1) < 0) break;
                                    o.push(u)
                                } else if (u < 2048) {
                                    if ((t -= 2) < 0) break;
                                    o.push(u >> 6 | 192, 63 & u | 128)
                                } else if (u < 65536) {
                                    if ((t -= 3) < 0) break;
                                    o.push(u >> 12 | 224, u >> 6 & 63 | 128, 63 & u | 128)
                                } else {
                                    if (!(u < 1114112)) throw new Error("Invalid code point");
                                    if ((t -= 4) < 0) break;
                                    o.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, 63 & u | 128)
                                }
                            }
                            return o
                        }

                        function F(e) {
                            return n.toByteArray(function(e) {
                                if ((e = function(e) {
                                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                                    }(e).replace(Y, "")).length < 2) return "";
                                for (; e.length % 4 != 0;) e += "=";
                                return e
                            }(e))
                        }

                        function J(e, t, u, n) {
                            for (var r = 0; r < n && !(r + u >= t.length || r >= e.length); ++r) t[r + u] = e[r];
                            return r
                        }
                    }).call(this, u("./node_modules/webpack/buildin/global.js"))
                },
                "./node_modules/generate-function/index.js": function(e, t, u) {
                    for (var n = u("./node_modules/util/util.js"), r = u("./node_modules/is-property/is-property.js"), o = /[\{\[]/, i = /[\}\]]/, a = ["do", "if", "in", "for", "let", "new", "try", "var", "case", "else", "enum", "eval", "null", "this", "true", "void", "with", "await", "break", "catch", "class", "const", "false", "super", "throw", "while", "yield", "delete", "export", "import", "public", "return", "static", "switch", "typeof", "default", "extends", "finally", "package", "private", "continue", "debugger", "function", "arguments", "interface", "protected", "implements", "instanceof", "NaN", "undefined"], s = {}, c = 0; c < a.length; c++) s[a[c]] = !0;
                    var d = {
                            s: function(e) {
                                return "" + e
                            },
                            d: function(e) {
                                return "" + Number(e)
                            },
                            o: function(e) {
                                return JSON.stringify(e)
                            }
                        },
                        p = function() {
                            var e = [],
                                t = 0,
                                u = {},
                                a = function(u) {
                                    for (var n = ""; n.length < 2 * t;) n += "  ";
                                    e.push(n + u)
                                },
                                c = function(e) {
                                    return i.test(e.trim()[0]) && o.test(e[e.length - 1]) ? (t--, a(e), void t++) : o.test(e[e.length - 1]) ? (a(e), void t++) : i.test(e.trim()[0]) ? (t--, void a(e)) : void a(e)
                                },
                                p = function(e) {
                                    if (!e) return p;
                                    if (1 === arguments.length && e.indexOf("\n") > -1)
                                        for (var t = e.trim().split("\n"), u = 0; u < t.length; u++) c(t[u].trim());
                                    else c(n.format.apply(n, arguments));
                                    return p
                                };
                            return p.scope = {}, p.formats = d, p.sym = function(e) {
                                return e && function(e) {
                                    return r(e) && !s.hasOwnProperty(e)
                                }(e) || (e = "tmp"), u[e] || (u[e] = 0), e + (u[e]++ || "")
                            }, p.property = function(e, t) {
                                return 1 === arguments.length && (t = e, e = ""), r(t += "") ? e ? e + "." + t : t : e ? e + "[" + JSON.stringify(t) + "]" : JSON.stringify(t)
                            }, p.toString = function() {
                                return e.join("\n")
                            }, p.toFunction = function(t) {
                                t || (t = {});
                                var u = "return (" + e.join("\n") + ")";
                                Object.keys(p.scope).forEach((function(e) {
                                    t[e] || (t[e] = p.scope[e])
                                }));
                                var n = Object.keys(t).map((function(e) {
                                        return e
                                    })),
                                    r = n.map((function(e) {
                                        return t[e]
                                    }));
                                return f.apply(null, n.concat(u)).apply(null, r)
                            }, arguments.length && p.apply(null, arguments), p
                        };
                    p.formats = d, e.exports = p
                },
                "./node_modules/generate-object-property/index.js": function(e, t, u) {
                    var n = u("./node_modules/is-property/is-property.js"),
                        r = function(e, t) {
                            return n(t) ? e + "." + t : e + "[" + JSON.stringify(t) + "]"
                        };
                    r.valid = n, r.property = function(e) {
                        return n(e) ? e : JSON.stringify(e)
                    }, e.exports = r
                },
                "./node_modules/ieee754/index.js": function(e, t) {
                    t.read = function(e, t, u, n, r) {
                        var o, i, f = 8 * r - n - 1,
                            a = (1 << f) - 1,
                            s = a >> 1,
                            c = -7,
                            d = u ? r - 1 : 0,
                            p = u ? -1 : 1,
                            l = e[t + d];
                        for (d += p, o = l & (1 << -c) - 1, l >>= -c, c += f; c > 0; o = 256 * o + e[t + d], d += p, c -= 8);
                        for (i = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; i = 256 * i + e[t + d], d += p, c -= 8);
                        if (0 === o) o = 1 - s;
                        else {
                            if (o === a) return i ? NaN : 1 / 0 * (l ? -1 : 1);
                            i += Math.pow(2, n), o -= s
                        }
                        return (l ? -1 : 1) * i * Math.pow(2, o - n)
                    }, t.write = function(e, t, u, n, r, o) {
                        var i, f, a, s = 8 * o - r - 1,
                            c = (1 << s) - 1,
                            d = c >> 1,
                            p = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            l = n ? 0 : o - 1,
                            h = n ? 1 : -1,
                            b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0, i = c) : (i = Math.floor(Math.log(t) / Math.LN2), t * (a = Math.pow(2, -i)) < 1 && (i--, a *= 2), (t += i + d >= 1 ? p / a : p * Math.pow(2, 1 - d)) * a >= 2 && (i++, a /= 2), i + d >= c ? (f = 0, i = c) : i + d >= 1 ? (f = (t * a - 1) * Math.pow(2, r), i += d) : (f = t * Math.pow(2, d - 1) * Math.pow(2, r), i = 0)); r >= 8; e[u + l] = 255 & f, l += h, f /= 256, r -= 8);
                        for (i = i << r | f, s += r; s > 0; e[u + l] = 255 & i, l += h, i /= 256, s -= 8);
                        e[u + l - h] |= 128 * b
                    }
                },
                "./node_modules/is-property/is-property.js": function(e, t, u) {
                    "use strict";
                    e.exports = function(e) {
                        return /^[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(e)
                    }
                },
                "./node_modules/isarray/index.js": function(e, t) {
                    var u = {}.toString;
                    e.exports = Array.isArray || function(e) {
                        return "[object Array]" == u.call(e)
                    }
                },
                "./node_modules/os-browserify/browser.js": function(e, t) {
                    t.endianness = function() {
                        return "LE"
                    }, t.hostname = function() {
                        return "undefined" != typeof location ? location.hostname : ""
                    }, t.loadavg = function() {
                        return []
                    }, t.uptime = function() {
                        return 0
                    }, t.freemem = function() {
                        return Number.MAX_VALUE
                    }, t.totalmem = function() {
                        return Number.MAX_VALUE
                    }, t.cpus = function() {
                        return []
                    }, t.type = function() {
                        return "Browser"
                    }, t.release = function() {
                        return "undefined" != typeof navigator ? navigator.appVersion : ""
                    }, t.networkInterfaces = t.getNetworkInterfaces = function() {
                        return {}
                    }, t.arch = function() {
                        return "javascript"
                    }, t.platform = function() {
                        return "browser"
                    }, t.tmpdir = t.tmpDir = function() {
                        return "/tmp"
                    }, t.EOL = "\n", t.homedir = function() {
                        return "/"
                    }
                },
                "./node_modules/process/browser.js": function(e, t) {
                    var u, n, r = e.exports = {};

                    function o() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function i() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function f(e) {
                        if (u === setTimeout) return setTimeout(e, 0);
                        if ((u === o || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
                        try {
                            return u(e, 0)
                        } catch (t) {
                            try {
                                return u.call(null, e, 0)
                            } catch (t) {
                                return u.call(this, e, 0)
                            }
                        }
                    }! function() {
                        try {
                            u = "function" == typeof setTimeout ? setTimeout : o
                        } catch (e) {
                            u = o
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : i
                        } catch (e) {
                            n = i
                        }
                    }();
                    var a, s = [],
                        c = !1,
                        d = -1;

                    function p() {
                        c && a && (c = !1, a.length ? s = a.concat(s) : d = -1, s.length && l())
                    }

                    function l() {
                        if (!c) {
                            var e = f(p);
                            c = !0;
                            for (var t = s.length; t;) {
                                for (a = s, s = []; ++d < t;) a && a[d].run();
                                d = -1, t = s.length
                            }
                            a = null, c = !1,
                                function(e) {
                                    if (n === clearTimeout) return clearTimeout(e);
                                    if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                    try {
                                        return n(e)
                                    } catch (t) {
                                        try {
                                            return n.call(null, e)
                                        } catch (t) {
                                            return n.call(this, e)
                                        }
                                    }
                                }(e)
                        }
                    }

                    function h(e, t) {
                        this.fun = e, this.array = t
                    }

                    function b() {}
                    r.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var u = 1; u < arguments.length; u++) t[u - 1] = arguments[u];
                        s.push(new h(e, t)), 1 !== s.length || c || f(l)
                    }, h.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = b, r.addListener = b, r.once = b, r.off = b, r.removeListener = b, r.removeAllListeners = b, r.emit = b, r.prependListener = b, r.prependOnceListener = b, r.listeners = function(e) {
                        return []
                    }, r.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }, r.cwd = function() {
                        return "/"
                    }, r.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }, r.umask = function() {
                        return 0
                    }
                },
                "./node_modules/protocol-buffers-encodings/index.js": function(e, t, u) {
                    (function(e) {
                        var n = u("./node_modules/varint/index.js"),
                            r = u("./node_modules/signed-varint/index.js");

                        function o(e, t, u, n) {
                            return t.bytes = u.bytes = 0, {
                                type: e,
                                encode: t,
                                decode: u,
                                encodingLength: n
                            }
                        }

                        function i(t) {
                            return e.isBuffer(t) ? t.length : e.byteLength(t)
                        }
                        t.make = o, t.name = function(e) {
                            for (var u = Object.keys(t), n = 0; n < u.length; n++)
                                if (t[u[n]] === e) return u[n];
                            return null
                        }, t.skip = function(e, t, u) {
                            switch (e) {
                                case 0:
                                    return n.decode(t, u), u + n.decode.bytes;
                                case 1:
                                    return u + 8;
                                case 2:
                                    var r = n.decode(t, u);
                                    return u + n.decode.bytes + r;
                                case 3:
                                case 4:
                                    throw new Error("Groups are not supported");
                                case 5:
                                    return u + 4
                            }
                            throw new Error("Unknown wire type: " + e)
                        }, t.bytes = o(2, (function t(u, r, o) {
                            var f = o,
                                a = i(u);
                            return n.encode(a, r, o), o += n.encode.bytes, e.isBuffer(u) ? u.copy(r, o) : r.write(u, o, a), t.bytes = (o += a) - f, r
                        }), (function e(t, u) {
                            var r = u,
                                o = n.decode(t, u);
                            u += n.decode.bytes;
                            var i = t.slice(u, u + o);
                            return u += i.length, e.bytes = u - r, i
                        }), (function(e) {
                            var t = i(e);
                            return n.encodingLength(t) + t
                        })), t.string = o(2, (function t(u, r, o) {
                            var i = o,
                                f = e.byteLength(u);
                            return n.encode(f, r, o, "utf-8"), o += n.encode.bytes, r.write(u, o, f), t.bytes = (o += f) - i, r
                        }), (function e(t, u) {
                            var r = u,
                                o = n.decode(t, u);
                            u += n.decode.bytes;
                            var i = t.toString("utf-8", u, u + o);
                            return e.bytes = (u += o) - r, i
                        }), (function(t) {
                            var u = e.byteLength(t);
                            return n.encodingLength(u) + u
                        })), t.bool = o(0, (function e(t, u, n) {
                            return u[n] = t ? 1 : 0, e.bytes = 1, u
                        }), (function e(t, u) {
                            var n = t[u] > 0;
                            return e.bytes = 1, n
                        }), (function() {
                            return 1
                        })), t.int32 = o(0, (function e(t, u, r) {
                            return n.encode(t < 0 ? t + 4294967296 : t, u, r), e.bytes = n.encode.bytes, u
                        }), (function e(t, u) {
                            var r = n.decode(t, u);
                            return e.bytes = n.decode.bytes, r > 2147483647 ? r - 4294967296 : r
                        }), (function(e) {
                            return n.encodingLength(e < 0 ? e + 4294967296 : e)
                        })), t.int64 = o(0, (function e(t, u, r) {
                            if (t < 0) {
                                var o = r + 9;
                                for (n.encode(-1 * t, u, r), u[r += n.encode.bytes - 1] = 128 | u[r]; r < o - 1;) u[++r] = 255;
                                u[o] = 1, e.bytes = 10
                            } else n.encode(t, u, r), e.bytes = n.encode.bytes;
                            return u
                        }), (function t(u, r) {
                            var o = n.decode(u, r);
                            if (o >= Math.pow(2, 63)) {
                                for (var i = 9; 255 === u[r + i - 1];) i--;
                                i = i || 9;
                                var f = e.allocUnsafe(i);
                                u.copy(f, 0, r, r + i), f[i - 1] = 127 & f[i - 1], o = -1 * n.decode(f, 0), t.bytes = 10
                            } else t.bytes = n.decode.bytes;
                            return o
                        }), (function(e) {
                            return e < 0 ? 10 : n.encodingLength(e)
                        })), t.sint32 = t.sint64 = o(0, r.encode, r.decode, r.encodingLength), t.uint32 = t.uint64 = t.enum = t.varint = o(0, n.encode, n.decode, n.encodingLength), t.fixed64 = t.sfixed64 = o(1, (function e(t, u, n) {
                            return t.copy(u, n), e.bytes = 8, u
                        }), (function e(t, u) {
                            var n = t.slice(u, u + 8);
                            return e.bytes = 8, n
                        }), (function() {
                            return 8
                        })), t.double = o(1, (function e(t, u, n) {
                            return u.writeDoubleLE(t, n), e.bytes = 8, u
                        }), (function e(t, u) {
                            var n = t.readDoubleLE(u);
                            return e.bytes = 8, n
                        }), (function() {
                            return 8
                        })), t.fixed32 = o(5, (function e(t, u, n) {
                            return u.writeUInt32LE(t, n), e.bytes = 4, u
                        }), (function e(t, u) {
                            var n = t.readUInt32LE(u);
                            return e.bytes = 4, n
                        }), (function() {
                            return 4
                        })), t.sfixed32 = o(5, (function e(t, u, n) {
                            return u.writeInt32LE(t, n), e.bytes = 4, u
                        }), (function e(t, u) {
                            var n = t.readInt32LE(u);
                            return e.bytes = 4, n
                        }), (function() {
                            return 4
                        })), t.float = o(5, (function e(t, u, n) {
                            return u.writeFloatLE(t, n), e.bytes = 4, u
                        }), (function e(t, u) {
                            var n = t.readFloatLE(u);
                            return e.bytes = 4, n
                        }), (function() {
                            return 4
                        }))
                    }).call(this, u("./node_modules/buffer/index.js").Buffer)
                },
                "./node_modules/protocol-buffers-schema/index.js": function(e, t, u) {
                    var n = u("./node_modules/protocol-buffers-schema/parse.js"),
                        r = u("./node_modules/protocol-buffers-schema/stringify.js");
                    e.exports = n, e.exports.parse = n, e.exports.stringify = r
                },
                "./node_modules/protocol-buffers-schema/parse.js": function(e, t, u) {
                    var n = u("./node_modules/protocol-buffers-schema/tokenize.js"),
                        r = ["int32", "int64", "uint32", "uint64", "sint32", "sint64", "bool", "fixed64", "sfixed64", "double", "fixed32", "sfixed32", "float"],
                        o = function(e) {
                            for (var t = {}; e.length;) switch (e[0]) {
                                case "[":
                                case ",":
                                    e.shift();
                                    var u = e.shift();
                                    if ("(" === u && (u = e.shift(), e.shift()), "=" !== e[0]) throw new Error("Unexpected token in field options: " + e[0]);
                                    if (e.shift(), "]" === e[0]) throw new Error("Unexpected ] in field option");
                                    t[u] = e.shift();
                                    break;
                                case "]":
                                    return e.shift(), t;
                                default:
                                    throw new Error("Unexpected token in field options: " + e[0])
                            }
                            throw new Error("No closing tag for field options")
                        },
                        i = function(e) {
                            for (var t = {
                                    name: null,
                                    type: null,
                                    tag: -1,
                                    map: null,
                                    oneof: null,
                                    required: !1,
                                    repeated: !1,
                                    options: {}
                                }; e.length;) switch (e[0]) {
                                case "=":
                                    e.shift(), t.tag = Number(e.shift());
                                    break;
                                case "map":
                                    if (t.type = "map", t.map = {
                                            from: null,
                                            to: null
                                        }, e.shift(), "<" !== e[0]) throw new Error("Unexpected token in map type: " + e[0]);
                                    if (e.shift(), t.map.from = e.shift(), "," !== e[0]) throw new Error("Unexpected token in map type: " + e[0]);
                                    if (e.shift(), t.map.to = e.shift(), ">" !== e[0]) throw new Error("Unexpected token in map type: " + e[0]);
                                    e.shift(), t.name = e.shift();
                                    break;
                                case "repeated":
                                case "required":
                                case "optional":
                                    var u = e.shift();
                                    t.required = "required" === u, t.repeated = "repeated" === u, t.type = e.shift(), t.name = e.shift();
                                    break;
                                case "[":
                                    t.options = o(e);
                                    break;
                                case ";":
                                    if (null === t.name) throw new Error("Missing field name");
                                    if (null === t.type) throw new Error("Missing type in message field: " + t.name);
                                    if (-1 === t.tag) throw new Error("Missing tag number in message field: " + t.name);
                                    return e.shift(), t;
                                default:
                                    throw new Error("Unexpected token in message field: " + e[0])
                            }
                            throw new Error("No ; found for message field")
                        },
                        f = function(e) {
                            for (var t = {
                                    enums: [],
                                    options: {},
                                    messages: [],
                                    fields: [],
                                    extends: [],
                                    extensions: null
                                }; e.length;) switch (e[0]) {
                                case "map":
                                case "repeated":
                                case "optional":
                                case "required":
                                    t.fields.push(i(e));
                                    break;
                                case "enum":
                                    t.enums.push(h(e));
                                    break;
                                case "message":
                                    t.messages.push(c(e));
                                    break;
                                case "extensions":
                                    t.extensions = s(e);
                                    break;
                                case "oneof":
                                    e.shift();
                                    var u = e.shift();
                                    if ("{" !== e[0]) throw new Error("Unexpected token in oneof: " + e[0]);
                                    for (e.shift();
                                        "}" !== e[0];) {
                                        e.unshift("optional");
                                        var n = i(e);
                                        n.oneof = u, t.fields.push(n)
                                    }
                                    e.shift();
                                    break;
                                case "extend":
                                    t.extends.push(a(e));
                                    break;
                                case ";":
                                    e.shift();
                                    break;
                                case "reserved":
                                    for (e.shift();
                                        ";" !== e[0];) e.shift();
                                    break;
                                case "option":
                                    var r = b(e);
                                    if (void 0 !== t.options[r.name]) throw new Error("Duplicate option " + r.name);
                                    t.options[r.name] = r.value;
                                    break;
                                default:
                                    e.unshift("optional"), t.fields.push(i(e))
                            }
                            return t
                        },
                        a = function(e) {
                            return {
                                name: e[1],
                                message: c(e)
                            }
                        },
                        s = function(e) {
                            e.shift();
                            var t = Number(e.shift());
                            if (isNaN(t)) throw new Error("Invalid from in extensions definition");
                            if ("to" !== e.shift()) throw new Error("Expected keyword 'to' in extensions definition");
                            var u = e.shift();
                            if ("max" === u && (u = 536870911), u = Number(u), isNaN(u)) throw new Error("Invalid to in extensions definition");
                            if (";" !== e.shift()) throw new Error("Missing ; in extensions definition");
                            return {
                                from: t,
                                to: u
                            }
                        },
                        c = function(e) {
                            e.shift();
                            var t = 1,
                                u = [],
                                n = {
                                    name: e.shift(),
                                    options: {},
                                    enums: [],
                                    extends: [],
                                    messages: [],
                                    fields: []
                                };
                            if ("{" !== e[0]) throw new Error("Expected { but found " + e[0]);
                            for (e.shift(); e.length;) {
                                if ("{" === e[0] ? t++ : "}" === e[0] && t--, !t) return e.shift(), u = f(u), n.enums = u.enums, n.messages = u.messages, n.fields = u.fields, n.extends = u.extends, n.extensions = u.extensions, n.options = u.options, n;
                                u.push(e.shift())
                            }
                            if (t) throw new Error("No closing tag for message")
                        },
                        d = function(e) {
                            e.shift();
                            var t = e.shift();
                            if (";" !== e[0]) throw new Error("Expected ; but found " + e[0]);
                            return e.shift(), t
                        },
                        p = function(e) {
                            if (e.shift(), "=" !== e[0]) throw new Error("Expected = but found " + e[0]);
                            e.shift();
                            var t = e.shift();
                            switch (t) {
                                case '"proto2"':
                                    t = 2;
                                    break;
                                case '"proto3"':
                                    t = 3;
                                    break;
                                default:
                                    throw new Error("Expected protobuf syntax version but found " + t)
                            }
                            if (";" !== e[0]) throw new Error("Expected ; but found " + e[0]);
                            return e.shift(), t
                        },
                        l = function(e) {
                            if (e.length < 4) throw new Error("Invalid enum value: " + e.slice(0, 3).join(" "));
                            if ("=" !== e[1]) throw new Error("Expected = but found " + e[1]);
                            if (";" !== e[3] && "[" !== e[3]) throw new Error("Expected ; or [ but found " + e[1]);
                            var t = e.shift();
                            e.shift();
                            var u = {
                                value: null,
                                options: {}
                            };
                            return u.value = Number(e.shift()), "[" === e[0] && (u.options = o(e)), e.shift(), {
                                name: t,
                                val: u
                            }
                        },
                        h = function(e) {
                            e.shift();
                            var t = {},
                                u = {
                                    name: e.shift(),
                                    values: {},
                                    options: {}
                                };
                            if ("{" !== e[0]) throw new Error("Expected { but found " + e[0]);
                            for (e.shift(); e.length;) {
                                if ("}" === e[0]) return e.shift(), ";" === e[0] && e.shift(), u;
                                if ("option" !== e[0]) {
                                    var n = l(e);
                                    u.values[n.name] = n.val
                                } else t = b(e), u.options[t.name] = t.value
                            }
                            throw new Error("No closing tag for enum")
                        },
                        b = function(e) {
                            for (var t = null, u = null, n = function(e) {
                                    return "true" === e || "false" !== e && e.replace(/^"+|"+$/gm, "")
                                }; e.length;) {
                                if (";" === e[0]) return e.shift(), {
                                    name: t,
                                    value: u
                                };
                                switch (e[0]) {
                                    case "option":
                                        e.shift();
                                        var r = "(" === e[0];
                                        if (r && e.shift(), t = e.shift(), r) {
                                            if (")" !== e[0]) throw new Error("Expected ) but found " + e[0]);
                                            e.shift()
                                        }
                                        "." === e[0][0] && (t += e.shift());
                                        break;
                                    case "=":
                                        if (e.shift(), null === t) throw new Error("Expected key for option with value: " + e[0]);
                                        if (u = n(e.shift()), "optimize_for" === t && !/^(SPEED|CODE_SIZE|LITE_RUNTIME)$/.test(u)) throw new Error("Unexpected value for option optimize_for: " + u);
                                        "{" === u && (u = g(e));
                                        break;
                                    default:
                                        throw new Error("Unexpected token in option: " + e[0])
                                }
                            }
                        },
                        g = function(e) {
                            for (var t = function(e) {
                                    return "true" === e || "false" !== e && e.replace(/^"+|"+$/gm, "")
                                }, u = {}; e.length;) {
                                if ("}" === e[0]) return e.shift(), u;
                                var n = "(" === e[0];
                                n && e.shift();
                                var r = e.shift();
                                if (n) {
                                    if (")" !== e[0]) throw new Error("Expected ) but found " + e[0]);
                                    e.shift()
                                }
                                var o = null;
                                switch (e[0]) {
                                    case ":":
                                        if (void 0 !== u[r]) throw new Error("Duplicate option map key " + r);
                                        e.shift(), "{" === (o = t(e.shift())) && (o = g(e)), u[r] = o, ";" === e[0] && e.shift();
                                        break;
                                    case "{":
                                        if (e.shift(), o = g(e), void 0 === u[r] && (u[r] = []), !Array.isArray(u[r])) throw new Error("Duplicate option map key " + r);
                                        u[r].push(o);
                                        break;
                                    default:
                                        throw new Error("Unexpected token in option map: " + e[0])
                                }
                            }
                            throw new Error("No closing tag for option map")
                        },
                        y = function(e) {
                            e.shift();
                            var t = e.shift().replace(/^"+|"+$/gm, "");
                            if (";" !== e[0]) throw new Error("Unexpected token: " + e[0] + '. Expected ";"');
                            return e.shift(), t
                        },
                        m = function(e) {
                            e.shift();
                            var t = {
                                name: e.shift(),
                                methods: [],
                                options: {}
                            };
                            if ("{" !== e[0]) throw new Error("Expected { but found " + e[0]);
                            for (e.shift(); e.length;) {
                                if ("}" === e[0]) return e.shift(), ";" === e[0] && e.shift(), t;
                                switch (e[0]) {
                                    case "option":
                                        var u = b(e);
                                        if (void 0 !== t.options[u.name]) throw new Error("Duplicate option " + u.name);
                                        t.options[u.name] = u.value;
                                        break;
                                    case "rpc":
                                        t.methods.push(v(e));
                                        break;
                                    default:
                                        throw new Error("Unexpected token in service: " + e[0])
                                }
                            }
                            throw new Error("No closing tag for service")
                        },
                        v = function(e) {
                            e.shift();
                            var t = {
                                name: e.shift(),
                                input_type: null,
                                output_type: null,
                                client_streaming: !1,
                                server_streaming: !1,
                                options: {}
                            };
                            if ("(" !== e[0]) throw new Error("Expected ( but found " + e[0]);
                            if (e.shift(), "stream" === e[0] && (e.shift(), t.client_streaming = !0), t.input_type = e.shift(), ")" !== e[0]) throw new Error("Expected ) but found " + e[0]);
                            if (e.shift(), "returns" !== e[0]) throw new Error("Expected returns but found " + e[0]);
                            if (e.shift(), "(" !== e[0]) throw new Error("Expected ( but found " + e[0]);
                            if (e.shift(), "stream" === e[0] && (e.shift(), t.server_streaming = !0), t.output_type = e.shift(), ")" !== e[0]) throw new Error("Expected ) but found " + e[0]);
                            if (e.shift(), ";" === e[0]) return e.shift(), t;
                            if ("{" !== e[0]) throw new Error("Expected { but found " + e[0]);
                            for (e.shift(); e.length;) {
                                if ("}" === e[0]) return e.shift(), ";" === e[0] && e.shift(), t;
                                if ("option" !== e[0]) throw new Error("Unexpected token in rpc options: " + e[0]);
                                var u = b(e);
                                if (void 0 !== t.options[u.name]) throw new Error("Duplicate option " + u.name);
                                t.options[u.name] = u.value
                            }
                            throw new Error("No closing tag for rpc")
                        };
                    e.exports = function(e) {
                        for (var t = n(e.toString()), u = 0; u < t.length; u++) {
                            var o;
                            if (/^("|')([^'"]*)$/.test(t[u]))
                                for (o = 1 === t[u].length ? u + 1 : u; o < t.length; o++)
                                    if (/^[^'"\\]*(?:\\.[^'"\\]*)*("|')$/.test(t[o])) {
                                        t = t.slice(0, u).concat(t.slice(u, o + 1).join("")).concat(t.slice(o + 1));
                                        break
                                    }
                        }
                        for (var i = {
                                syntax: 3,
                                package: null,
                                imports: [],
                                enums: [],
                                messages: [],
                                options: {},
                                extends: []
                            }, f = !0; t.length;) {
                            switch (t[0]) {
                                case "package":
                                    i.package = d(t);
                                    break;
                                case "syntax":
                                    if (!f) throw new Error("Protobuf syntax version should be first thing in file");
                                    i.syntax = p(t);
                                    break;
                                case "message":
                                    i.messages.push(c(t));
                                    break;
                                case "enum":
                                    i.enums.push(h(t));
                                    break;
                                case "option":
                                    var s = b(t);
                                    if (i.options[s.name]) throw new Error("Duplicate option " + s.name);
                                    i.options[s.name] = s.value;
                                    break;
                                case "import":
                                    i.imports.push(y(t));
                                    break;
                                case "extend":
                                    i.extends.push(a(t));
                                    break;
                                case "service":
                                    i.services || (i.services = []), i.services.push(m(t));
                                    break;
                                default:
                                    throw new Error("Unexpected token: " + t[0])
                            }
                            f = !1
                        }
                        return i.extends.forEach((function(e) {
                            i.messages.forEach((function(t) {
                                t.name === e.name && e.message.fields.forEach((function(e) {
                                    if (!t.extensions || e.tag < t.extensions.from || e.tag > t.extensions.to) throw new Error(t.name + " does not declare " + e.tag + " as an extension number");
                                    t.fields.push(e)
                                }))
                            }))
                        })), i.messages.forEach((function(e) {
                            e.fields.forEach((function(t) {
                                var u, n, o, f;
                                if (t.options && "true" === t.options.packed && -1 === r.indexOf(t.type)) {
                                    if (-1 === t.type.indexOf(".")) {
                                        if (e.enums && e.enums.some((function(e) {
                                                return e.name === t.type
                                            }))) return
                                    } else {
                                        if ((u = t.type.split(".")).length > 2) throw new Error("what is this?");
                                        if (n = u[0], o = u[1], i.messages.some((function(e) {
                                                if (e.name === n) return f = e, e
                                            })), f && f.enums && f.enums.some((function(e) {
                                                return e.name === o
                                            }))) return
                                    }
                                    throw new Error("Fields of type " + t.type + ' cannot be declared [packed=true]. Only repeated fields of primitive numeric types (types which use the varint, 32-bit, or 64-bit wire types) can be declared "packed". See https://developers.google.com/protocol-buffers/docs/encoding#optional')
                                }
                            }))
                        })), i
                    }
                },
                "./node_modules/protocol-buffers-schema/stringify.js": function(e, t) {
                    var u = function(e, t) {
                            var u = e.repeated ? "repeated" : e.required ? "required" : "optional";
                            "map" === e.type && (u = "map<" + e.map.from + "," + e.map.to + ">"), e.oneof && (u = "");
                            var n = Object.keys(e.options || {}).map((function(t) {
                                return t + " = " + e.options[t]
                            })).join(",");
                            return n && (n = " [" + n + "]"), t.push((u ? u + " " : "") + ("map" === e.map ? "" : e.type + " ") + e.name + " = " + e.tag + n + ";"), t
                        },
                        n = function(e, t) {
                            t.push("message " + e.name + " {"), e.options || (e.options = {}), i(e.options, t), e.enums || (e.enums = []), e.enums.forEach((function(e) {
                                t.push(r(e, []))
                            })), e.messages || (e.messages = []), e.messages.forEach((function(e) {
                                t.push(n(e, []))
                            }));
                            var o = {};
                            return e.fields || (e.fields = []), e.fields.forEach((function(e) {
                                e.oneof ? (o[e.oneof] || (o[e.oneof] = []), o[e.oneof].push(u(e, []))) : t.push(u(e, []))
                            })), Object.keys(o).forEach((function(e) {
                                o[e].unshift("oneof " + e + " {"), o[e].push("}"), t.push(o[e])
                            })), t.push("}", ""), t
                        },
                        r = function(e, t) {
                            t.push("enum " + e.name + " {"), e.options || (e.options = {});
                            var u = i(e.options, []);
                            return u.length > 1 && t.push(u.slice(0, -1)), Object.keys(e.values).map((function(u) {
                                var n = o(e.values[u]);
                                t.push([u + " = " + n + ";"])
                            })), t.push("}", ""), t
                        },
                        o = function(e, t) {
                            var u = Object.keys(e.options || {}).map((function(t) {
                                return t + " = " + e.options[t]
                            })).join(",");
                            return u && (u = " [" + u + "]"), e.value + u
                        },
                        i = function(e, t) {
                            var u = Object.keys(e);
                            return u.forEach((function(u) {
                                var n = e[u];
                                ~u.indexOf(".") && (u = "(" + u + ")");
                                var r = typeof n;
                                "object" === r ? (n = f(n, [])).length && t.push("option " + u + " = {", n, "};") : ("string" === r && "optimize_for" !== u && (n = '"' + n + '"'), t.push("option " + u + " = " + n + ";"))
                            })), u.length > 0 && t.push(""), t
                        },
                        f = function(e, t) {
                            return Object.keys(e).forEach((function(u) {
                                var n = e[u],
                                    r = typeof n;
                                "object" === r ? Array.isArray(n) ? n.forEach((function(e) {
                                    (e = f(e, [])).length && t.push(u + " {", e, "}")
                                })) : (n = f(n, [])).length && t.push(u + " {", n, "}") : ("string" === r && (n = '"' + n + '"'), t.push(u + ": " + n))
                            })), t
                        },
                        a = function(e, t) {
                            var u = "rpc " + e.name + "(";
                            e.client_streaming && (u += "stream "), u += e.input_type + ") returns (", e.server_streaming && (u += "stream "), u += e.output_type + ")", e.options || (e.options = {});
                            var n = i(e.options, []);
                            return n.length > 1 ? t.push(u + " {", n.slice(0, -1), "}") : t.push(u + ";"), t
                        },
                        s = function(e) {
                            return function(t) {
                                return Array.isArray(t) ? t.map(s(e + "  ")).join("\n") : e + t
                            }
                        };
                    e.exports = function(e) {
                        var t = [];
                        return t.push('syntax = "proto' + e.syntax + '";', ""), e.package && t.push("package " + e.package + ";", ""), e.options || (e.options = {}), i(e.options, t), e.enums || (e.enums = []), e.enums.forEach((function(e) {
                            r(e, t)
                        })), e.messages || (e.messages = []), e.messages.forEach((function(e) {
                            n(e, t)
                        })), e.services && e.services.forEach((function(e) {
                            ! function(e, t) {
                                t.push("service " + e.name + " {"), e.options || (e.options = {}), i(e.options, t), e.methods || (e.methods = []), e.methods.forEach((function(e) {
                                    t.push(a(e, []))
                                })), t.push("}", "")
                            }(e, t)
                        })), t.map(s("")).join("\n")
                    }
                },
                "./node_modules/protocol-buffers-schema/tokenize.js": function(e, t) {
                    e.exports = function(e) {
                        var t, u = function(e) {
                            return e.trim()
                        };
                        return e.replace(/([;,{}()=:[\]<>]|\/\*|\*\/)/g, " $1 ").split(/\n/).map(u).filter(Boolean).map((function(e) {
                            var t = e.indexOf("//");
                            return t > -1 ? e.slice(0, t) : e
                        })).map(u).filter(Boolean).join("\n").split(/\s+|\n+/gm).filter((t = !1, function(e) {
                            return "/*" === e ? (t = !0, !1) : "*/" === e ? (t = !1, !1) : !t
                        }))
                    }
                },
                "./node_modules/protocol-buffers/compile-to-js.js": function(e, t, u) {
                    var n = u("./node_modules/os-browserify/browser.js"),
                        r = {
                            type: !0,
                            message: !0,
                            name: !0,
                            buffer: !0,
                            encode: !0,
                            decode: !0,
                            encodingLength: !0,
                            dependencies: !0
                        };

                    function o(e) {
                        return "function" == typeof e.encode
                    }
                    e.exports = function(e) {
                        var t = "";
                        return t += "// This file is auto generated by the protocol-buffers compiler" + n.EOL, t += n.EOL, t += "/* eslint-disable quotes */" + n.EOL, t += "/* eslint-disable indent */" + n.EOL, t += "/* eslint-disable no-redeclare */" + n.EOL, t += "/* eslint-disable camelcase */" + n.EOL, t += n.EOL, t += "// Remember to `npm install --save protocol-buffers-encodings`" + n.EOL, t += "var encodings = require('protocol-buffers-encodings')" + n.EOL, t += "var varint = encodings.varint" + n.EOL, t += "var skip = encodings.skip" + n.EOL, t += n.EOL,
                            function e(u, f, a) {
                                var s = Object.keys(u).filter((function(e) {
                                        return !r[e] && o(u[e])
                                    })),
                                    c = Object.keys(u).filter((function(e) {
                                        return !r[e] && !o(u[e])
                                    }));
                                c.forEach((function(e) {
                                    t += a + f + "." + e + " = " + function(e, t) {
                                        const u = Object.keys(e);
                                        if (!u.every((function(t) {
                                                return "number" == typeof e[t] && /^[a-z][a-z0-9]+$/i.test(t)
                                            }))) return JSON.stringify(e, null, 2).replace(/\n/g, n.EOL) + n.EOL;
                                        var r = "{" + n.EOL;
                                        return u.forEach((function(o, i) {
                                            r += t + "  " + o + ": " + e[o] + (i < u.length - 1 ? "," : "") + n.EOL
                                        })), r + t + "}" + n.EOL
                                    }(u[e], a) + n.EOL
                                })), s.forEach((function(e) {
                                    t += a + "var " + e + " = " + f + "." + e + " = {" + n.EOL, t += a + "  buffer: true," + n.EOL, t += a + "  encodingLength: null," + n.EOL, t += a + "  encode: null," + n.EOL, t += a + "  decode: null" + n.EOL, t += a + "}" + n.EOL, t += n.EOL
                                })), s.forEach((function(e) {
                                    t += a + "define" + e + "()" + n.EOL
                                })), s.length && (t += n.EOL);
                                s.forEach((function(r) {
                                    t += a + "function define" + r + " () {" + n.EOL, e(u[r], r, a + "  "), t += a + "  " + r + ".encodingLength = encodingLength" + n.EOL, t += a + "  " + r + ".encode = encode" + n.EOL, t += a + "  " + r + ".decode = decode" + n.EOL + n.EOL, t += a + "  " + i(u[r].encodingLength, a + "  ") + n.EOL + n.EOL, t += a + "  " + i(u[r].encode, a + "  ") + n.EOL + n.EOL, t += a + "  " + i(u[r].decode, a + "  ") + n.EOL, t += a + "}" + n.EOL + n.EOL
                                }))
                            }(e, "exports", ""), t += i(u("./node_modules/protocol-buffers/compile.js").defined, "") + n.EOL;

                        function i(e, t) {
                            return e.toString().split("\n").map((function(e, u) {
                                return u ? t + e : e.replace(/(function \w+)\(/, "$1 (")
                            })).join("\n")
                        }
                    }
                },
                "./node_modules/protocol-buffers/compile.js": function(e, t, u) {
                    (function(t) {
                        var n = u("./node_modules/protocol-buffers-encodings/index.js"),
                            r = u("./node_modules/varint/index.js"),
                            o = u("./node_modules/generate-object-property/index.js"),
                            i = u("./node_modules/generate-function/index.js"),
                            f = function(e) {
                                return null != e && ("number" != typeof e || !isNaN(e))
                            },
                            a = function(e, t) {
                                if (e.map) return "{}";
                                if (e.repeated) return "[]";
                                switch (e.type) {
                                    case "string":
                                        return function(e) {
                                            try {
                                                return !!e && "string" == typeof JSON.parse(e)
                                            } catch (e) {
                                                return !1
                                            }
                                        }(t) ? t : '""';
                                    case "bool":
                                        return "true" === t ? "true" : "false";
                                    case "float":
                                    case "double":
                                    case "sfixed32":
                                    case "fixed32":
                                    case "varint":
                                    case "enum":
                                    case "uint64":
                                    case "uint32":
                                    case "int64":
                                    case "int32":
                                    case "sint64":
                                    case "sint32":
                                        return "" + Number(t || 0);
                                    default:
                                        return "null"
                                }
                            };
                        e.exports = function(e, u, s) {
                            var c = {},
                                d = {},
                                p = {},
                                l = function(e, t) {
                                    return s ? (u = t[e], (r = n.name(u)) ? "encodings." + r : u.name ? u.name : "encodings.enum") : "enc[" + e + "]";
                                    var u, r
                                },
                                h = function(e, t) {
                                    e.enums && e.enums.forEach((function(e) {
                                        e.id = t + (t ? "." : "") + e.name, d[e.id] = e, h(e, e.id)
                                    })), e.messages && e.messages.forEach((function(u) {
                                        u.id = t + (t ? "." : "") + u.name, c[u.id] = u, u.fields.forEach((function(u) {
                                            if (u.map) {
                                                var n = "Map_" + u.map.from + "_" + u.map.to,
                                                    r = {
                                                        name: n,
                                                        enums: [],
                                                        messages: [],
                                                        fields: [{
                                                            name: "key",
                                                            type: u.map.from,
                                                            tag: 1,
                                                            repeated: !1,
                                                            required: !0
                                                        }, {
                                                            name: "value",
                                                            type: u.map.to,
                                                            tag: 2,
                                                            repeated: !1,
                                                            required: !1
                                                        }],
                                                        extensions: null,
                                                        id: t + (t ? "." : "") + n
                                                    };
                                                c[r.id] || (c[r.id] = r, e.messages.push(r)), u.type = n, u.repeated = !0
                                            }
                                        })), h(u, u.id)
                                    }))
                                };
                            h(e, "");
                            var b = function(u, s) {
                                    u.messages.forEach((function(e) {
                                        s[e.name] = g(e.name, u.id)
                                    })), u.enums.forEach((function(e) {
                                        s[e.name] = function(e) {
                                            if (!e) return null;
                                            var t = {};
                                            return Object.keys(e).forEach((function(u) {
                                                t[u] = e[u].value
                                            })), t
                                        }(e.values)
                                    })), s.type = 2, s.message = !0, s.name = u.name;
                                    var c = {};
                                    u.fields.forEach((function(e) {
                                        e.oneof && (c[e.oneof] || (c[e.oneof] = []), c[e.oneof].push(e.name))
                                    }));
                                    var d = u.fields.map((function(e) {
                                            return g(e.type, u.id)
                                        })),
                                        p = d.filter((function(e, t) {
                                            return d.indexOf(e) === t
                                        })),
                                        h = d.map((function(e) {
                                            return p.indexOf(e)
                                        })),
                                        b = function(e) {
                                            for (var t = 0; t < d.length; t++) e(d[t], u.fields[t], o("obj", u.fields[t].name), t)
                                        },
                                        y = i()("function encodingLength (obj) {")("var length = 0");
                                    Object.keys(c).forEach((function(e) {
                                        var t = JSON.stringify("only one of the properties defined in oneof " + e + " can be set"),
                                            u = c[e].map((function(e) {
                                                return "+defined(" + o("obj", e) + ")"
                                            })).join(" + ");
                                        y("if ((%s) > 1) throw new Error(%s)", u, t)
                                    })), b((function(e, t, u, n) {
                                        var o = t.repeated && t.options && t.options.packed && "false" !== t.options.packed,
                                            i = r.encodingLength(t.tag << 3 | e.type);
                                        t.required ? y("if (!defined(%s)) throw new Error(%s)", u, JSON.stringify(t.name + " is required")) : y("if (defined(%s)) {", u), t.map && (y()("var tmp = Object.keys(%s)", u)("for (var i = 0; i < tmp.length; i++) {")("tmp[i] = {key: tmp[i], value: %s[tmp[i]]}", u)("}"), u = "tmp"), o ? (y()("var packedLen = 0")("for (var i = 0; i < %s.length; i++) {", u)("if (!defined(%s)) continue", u + "[i]")("var len = %s.encodingLength(%s)", l(h[n], p), u + "[i]")("packedLen += len"), e.message && y("packedLen += varint.encodingLength(len)"), y("}")("if (packedLen) {")("length += %d + packedLen + varint.encodingLength(packedLen)", i)("}")) : (t.repeated && (y("for (var i = 0; i < %s.length; i++) {", u), y("if (!defined(%s)) continue", u += "[i]")), y("var len = %s.encodingLength(%s)", l(h[n], p), u), e.message && y("length += varint.encodingLength(len)"), y("length += %d + len", i), t.repeated && y("}")), t.required || y("}")
                                    })), y()("return length")("}"), y = y.toFunction({
                                        defined: f,
                                        varint: r,
                                        enc: p
                                    });
                                    var m = i()("function encode (obj, buf, offset) {")("if (!offset) offset = 0")("if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))")("var oldOffset = offset");
                                    Object.keys(c).forEach((function(e) {
                                        var t = JSON.stringify("only one of the properties defined in oneof " + e + " can be set"),
                                            u = c[e].map((function(e) {
                                                return "+defined(" + o("obj", e) + ")"
                                            })).join(" + ");
                                        m("if ((%s) > 1) throw new Error(%s)", u, t)
                                    })), b((function(e, t, u, n) {
                                        t.required ? m("if (!defined(%s)) throw new Error(%s)", u, JSON.stringify(t.name + " is required")) : m("if (defined(%s)) {", u);
                                        var o, i = t.repeated && t.options && t.options.packed && "false" !== t.options.packed,
                                            f = r.encode(t.tag << 3 | 2),
                                            a = r.encode(t.tag << 3 | e.type);
                                        if (t.map && (m()("var tmp = Object.keys(%s)", u)("for (var i = 0; i < tmp.length; i++) {")("tmp[i] = {key: tmp[i], value: %s[tmp[i]]}", u)("}"), u = "tmp"), i) {
                                            for (m()("var packedLen = 0")("for (var i = 0; i < %s.length; i++) {", u)("if (!defined(%s)) continue", u + "[i]")("packedLen += %s.encodingLength(%s)", l(h[n], p), u + "[i]")("}"), m("if (packedLen) {"), o = 0; o < a.length; o++) m("buf[offset++] = %d", f[o]);
                                            m("varint.encode(packedLen, buf, offset)"), m("offset += varint.encode.bytes"), m("}")
                                        }
                                        if (t.repeated && (m("for (var i = 0; i < %s.length; i++) {", u), m("if (!defined(%s)) continue", u += "[i]")), !i)
                                            for (o = 0; o < a.length; o++) m("buf[offset++] = %d", a[o]);
                                        e.message && (m("varint.encode(%s.encodingLength(%s), buf, offset)", l(h[n], p), u), m("offset += varint.encode.bytes")), m("%s.encode(%s, buf, offset)", l(h[n], p), u), m("offset += %s.encode.bytes", l(h[n], p)), t.repeated && m("}"), t.required || m("}")
                                    })), m()("encode.bytes = offset - oldOffset")("return buf")("}"), m = m.toFunction({
                                        encodingLength: y,
                                        defined: f,
                                        varint: r,
                                        enc: p,
                                        Buffer: t
                                    });
                                    var v, w = u.fields.map((function(e, t) {
                                            return e.required && "!found" + t
                                        })).filter((function(e) {
                                            return e
                                        })).join(" || "),
                                        E = i(),
                                        _ = [];
                                    return b((function(e, t) {
                                        var n = t.options && t.options.default,
                                            r = g(t.type, u.id, !1),
                                            i = r && r.values;
                                        i ? t.repeated ? _.push(o.property(t.name) + ": []") : (n = n && i[n] ? i[n].value : i[Object.keys(i)[0]].value, _.push(o.property(t.name) + ": " + parseInt(n || 0, 10))) : _.push(o.property(t.name) + ": " + a(t, n))
                                    })), _ = _.filter((v = {}, function(e) {
                                        return !v.hasOwnProperty(e) && (v[e] = !0, !0)
                                    })), E()("function decode (buf, offset, end) {")("if (!offset) offset = 0")("if (!end) end = buf.length")('if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")')("var oldOffset = offset")("var obj = {"), _.forEach((function(e, t) {
                                        E(e + (t === _.length - 1 ? "" : ","))
                                    })), E("}"), b((function(e, t, u, n) {
                                        t.required && E("var found%d = false", n)
                                    })), E("while (true) {")("if (end <= offset) {")(w && 'if (%s) throw new Error("Decoded message is not valid")', w)("decode.bytes = offset - oldOffset")("return obj")("}")("var prefix = varint.decode(buf, offset)")("offset += varint.decode.bytes")("var tag = prefix >> 3")("switch (tag) {"), b((function(t, n, r, i) {
                                        var f = n.repeated && (n.options && n.options.packed && "false" !== n.options.packed || !(n.options && "false" == n.options.packed) && 3 == e.syntax && ("float" === n.type || "double" === n.type || -1 != n.type.indexOf("int")));
                                        E("case %d:", n.tag), n.oneof && u.fields.forEach((function(e) {
                                            e.oneof === n.oneof && n.name !== e.name && E("delete %s", o("obj", e.name))
                                        })), f && E()("var packedEnd = varint.decode(buf, offset)")("offset += varint.decode.bytes")("packedEnd += offset")("while (offset < packedEnd) {"), t.message ? (E("var len = varint.decode(buf, offset)"), E("offset += varint.decode.bytes"), n.map ? (E("var tmp = %s.decode(buf, offset, offset + len)", l(h[i], p)), E("%s[tmp.key] = tmp.value", r)) : n.repeated ? E("%s.push(%s.decode(buf, offset, offset + len))", r, l(h[i], p)) : E("%s = %s.decode(buf, offset, offset + len)", r, l(h[i], p))) : n.repeated ? E("%s.push(%s.decode(buf, offset))", r, l(h[i], p)) : E("%s = %s.decode(buf, offset)", r, l(h[i], p)), E("offset += %s.decode.bytes", l(h[i], p)), f && E("}"), n.required && E("found%d = true", i), E("break")
                                    })), E()("default:")("offset = skip(prefix & 7, buf, offset)")("}")("}")("}"), E = E.toFunction({
                                        varint: r,
                                        skip: n.skip,
                                        enc: p
                                    }), m.bytes = E.bytes = 0, s.buffer = !0, s.encode = m, s.decode = E, s.encodingLength = y, s.dependencies = p, s
                                },
                                g = function(e, t, o) {
                                    if (u && u[e]) return u[e];
                                    if (n[e]) return n[e];
                                    var f = (t ? t + "." + e : e).split(".").map((function(t, u, n) {
                                        return n.slice(0, u).concat(e).join(".")
                                    })).reverse().reduce((function(e, t) {
                                        return e || c[t] || d[t]
                                    }), null);
                                    if (!1 === o) return f;
                                    if (!f) throw new Error("Could not resolve " + e);
                                    return f.values ? function(e) {
                                        var t = Object.keys(e.values).map((function(t) {
                                            return "val !== " + parseInt(e.values[t].value, 10)
                                        })).join(" && ");
                                        t || (t = "true");
                                        var u = i()("function encode (val, buf, offset) {")('if (%s) throw new Error("Invalid enum value: "+val)', t)("varint.encode(val, buf, offset)")("encode.bytes = varint.encode.bytes")("return buf")("}").toFunction({
                                                varint: r
                                            }),
                                            o = i()("function decode (buf, offset) {")("var val = varint.decode(buf, offset)")('if (%s) throw new Error("Invalid enum value: "+val)', t)("decode.bytes = varint.decode.bytes")("return val")("}").toFunction({
                                                varint: r
                                            });
                                        return n.make(0, u, o, r.encodingLength)
                                    }(f) : p[f.id] ? p[f.id] : (p[f.id] = {}, b(f, p[f.id]))
                                };
                            return (e.enums || []).concat((e.messages || []).map((function(e) {
                                return g(e.id)
                            })))
                        }, e.exports.defined = f
                    }).call(this, u("./node_modules/buffer/index.js").Buffer)
                },
                "./node_modules/protocol-buffers/index.js": function(e, t, u) {
                    (function(t) {
                        var n = u("./node_modules/protocol-buffers-schema/index.js"),
                            r = u("./node_modules/protocol-buffers/compile.js"),
                            o = u("./node_modules/protocol-buffers/compile-to-js.js");
                        e.exports = function(e, u) {
                            if (u || (u = {}), !e) throw new Error("Pass in a .proto string or a protobuf-schema parsed object");
                            var o = "object" != typeof e || t.isBuffer(e) ? n.parse(e) : e,
                                i = function() {
                                    var e = this;
                                    r(o, u.encodings || {}, u.inlineEnc).forEach((function(t) {
                                        e[t.name] = function(e) {
                                            if (!e) return null;
                                            var t = {};
                                            return Object.keys(e).forEach((function(u) {
                                                t[u] = e[u].value
                                            })), t
                                        }(t.values) || t
                                    }))
                                };
                            return i.prototype.toString = function() {
                                return n.stringify(o)
                            }, i.prototype.toJSON = function() {
                                return o
                            }, new i
                        }, e.exports.toJS = function(t) {
                            return o(e.exports(t, {
                                inlineEnc: !0
                            }))
                        }
                    }).call(this, u("./node_modules/buffer/index.js").Buffer)
                },
                "./node_modules/signed-varint/index.js": function(e, t, u) {
                    var n = u("./node_modules/varint/index.js");
                    t.encode = function e(t, u, r) {
                        t = t >= 0 ? 2 * t : -2 * t - 1;
                        var o = n.encode(t, u, r);
                        return e.bytes = n.encode.bytes, o
                    }, t.decode = function e(t, u) {
                        var r = n.decode(t, u);
                        return e.bytes = n.decode.bytes, 1 & r ? (r + 1) / -2 : r / 2
                    }, t.encodingLength = function(e) {
                        return n.encodingLength(e >= 0 ? 2 * e : -2 * e - 1)
                    }
                },
                "./node_modules/util/node_modules/inherits/inherits_browser.js": function(e, t) {
                    "function" == typeof Object.create ? e.exports = function(e, t) {
                        e.super_ = t, e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })
                    } : e.exports = function(e, t) {
                        e.super_ = t;
                        var u = function() {};
                        u.prototype = t.prototype, e.prototype = new u, e.prototype.constructor = e
                    }
                },
                "./node_modules/util/support/isBufferBrowser.js": function(e, t) {
                    e.exports = function(e) {
                        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
                    }
                },
                "./node_modules/util/util.js": function(e, t, u) {
                    (function(e) {
                        var r = Object.getOwnPropertyDescriptors || function(e) {
                                for (var t = Object.keys(e), u = {}, n = 0; n < t.length; n++) u[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                                return u
                            },
                            o = /%[sdj%]/g;
                        t.format = function(e) {
                            if (!m(e)) {
                                for (var t = [], u = 0; u < arguments.length; u++) t.push(a(arguments[u]));
                                return t.join(" ")
                            }
                            u = 1;
                            for (var n = arguments, r = n.length, i = String(e).replace(o, (function(e) {
                                    if ("%%" === e) return "%";
                                    if (u >= r) return e;
                                    switch (e) {
                                        case "%s":
                                            return String(n[u++]);
                                        case "%d":
                                            return Number(n[u++]);
                                        case "%j":
                                            try {
                                                return JSON.stringify(n[u++])
                                            } catch (e) {
                                                return "[Circular]"
                                            }
                                        default:
                                            return e
                                    }
                                })), f = n[u]; u < r; f = n[++u]) g(f) || !E(f) ? i += " " + f : i += " " + a(f);
                            return i
                        }, t.deprecate = function(u, r) {
                            if (void 0 !== e && !0 === e.noDeprecation) return u;
                            if (void 0 === e) return function() {
                                return t.deprecate(u, r).apply(this, arguments)
                            };
                            var o = !1;
                            return function() {
                                if (!o) {
                                    if (e.throwDeprecation) throw new Error(r);
                                    e.traceDeprecation ? n.trace(r) : n.error(r), o = !0
                                }
                                return u.apply(this, arguments)
                            }
                        };
                        var i, f = {};

                        function a(e, u) {
                            var n = {
                                seen: [],
                                stylize: c
                            };
                            return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), b(u) ? n.showHidden = u : u && t._extend(n, u), v(n.showHidden) && (n.showHidden = !1), v(n.depth) && (n.depth = 2), v(n.colors) && (n.colors = !1), v(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = s), d(n, e, n.depth)
                        }

                        function s(e, t) {
                            var u = a.styles[t];
                            return u ? "[" + a.colors[u][0] + "m" + e + "[" + a.colors[u][1] + "m" : e
                        }

                        function c(e, t) {
                            return e
                        }

                        function d(e, u, n) {
                            if (e.customInspect && u && j(u.inspect) && u.inspect !== t.inspect && (!u.constructor || u.constructor.prototype !== u)) {
                                var r = u.inspect(n, e);
                                return m(r) || (r = d(e, r, n)), r
                            }
                            var o = function(e, t) {
                                if (v(t)) return e.stylize("undefined", "undefined");
                                if (m(t)) {
                                    var u = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                    return e.stylize(u, "string")
                                }
                                if (y(t)) return e.stylize("" + t, "number");
                                if (b(t)) return e.stylize("" + t, "boolean");
                                if (g(t)) return e.stylize("null", "null")
                            }(e, u);
                            if (o) return o;
                            var i = Object.keys(u),
                                f = function(e) {
                                    var t = {};
                                    return e.forEach((function(e, u) {
                                        t[e] = !0
                                    })), t
                                }(i);
                            if (e.showHidden && (i = Object.getOwnPropertyNames(u)), x(u) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)) return p(u);
                            if (0 === i.length) {
                                if (j(u)) {
                                    var a = u.name ? ": " + u.name : "";
                                    return e.stylize("[Function" + a + "]", "special")
                                }
                                if (w(u)) return e.stylize(RegExp.prototype.toString.call(u), "regexp");
                                if (_(u)) return e.stylize(Date.prototype.toString.call(u), "date");
                                if (x(u)) return p(u)
                            }
                            var s, c = "",
                                E = !1,
                                O = ["{", "}"];
                            (h(u) && (E = !0, O = ["[", "]"]), j(u)) && (c = " [Function" + (u.name ? ": " + u.name : "") + "]");
                            return w(u) && (c = " " + RegExp.prototype.toString.call(u)), _(u) && (c = " " + Date.prototype.toUTCString.call(u)), x(u) && (c = " " + p(u)), 0 !== i.length || E && 0 != u.length ? n < 0 ? w(u) ? e.stylize(RegExp.prototype.toString.call(u), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(u), s = E ? function(e, t, u, n, r) {
                                for (var o = [], i = 0, f = t.length; i < f; ++i) L(t, String(i)) ? o.push(l(e, t, u, n, String(i), !0)) : o.push("");
                                return r.forEach((function(r) {
                                    r.match(/^\d+$/) || o.push(l(e, t, u, n, r, !0))
                                })), o
                            }(e, u, n, f, i) : i.map((function(t) {
                                return l(e, u, n, f, t, E)
                            })), e.seen.pop(), function(e, t, u) {
                                var n = e.reduce((function(e, t) {
                                    return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                                }), 0);
                                if (n > 60) return u[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + u[1];
                                return u[0] + t + " " + e.join(", ") + " " + u[1]
                            }(s, c, O)) : O[0] + c + O[1]
                        }

                        function p(e) {
                            return "[" + Error.prototype.toString.call(e) + "]"
                        }

                        function l(e, t, u, n, r, o) {
                            var i, f, a;
                            if ((a = Object.getOwnPropertyDescriptor(t, r) || {
                                    value: t[r]
                                }).get ? f = a.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : a.set && (f = e.stylize("[Setter]", "special")), L(n, r) || (i = "[" + r + "]"), f || (e.seen.indexOf(a.value) < 0 ? (f = g(u) ? d(e, a.value, null) : d(e, a.value, u - 1)).indexOf("\n") > -1 && (f = o ? f.split("\n").map((function(e) {
                                    return "  " + e
                                })).join("\n").substr(2) : "\n" + f.split("\n").map((function(e) {
                                    return "   " + e
                                })).join("\n")) : f = e.stylize("[Circular]", "special")), v(i)) {
                                if (o && r.match(/^\d+$/)) return f;
                                (i = JSON.stringify("" + r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = e.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = e.stylize(i, "string"))
                            }
                            return i + ": " + f
                        }

                        function h(e) {
                            return Array.isArray(e)
                        }

                        function b(e) {
                            return "boolean" == typeof e
                        }

                        function g(e) {
                            return null === e
                        }

                        function y(e) {
                            return "number" == typeof e
                        }

                        function m(e) {
                            return "string" == typeof e
                        }

                        function v(e) {
                            return void 0 === e
                        }

                        function w(e) {
                            return E(e) && "[object RegExp]" === O(e)
                        }

                        function E(e) {
                            return "object" == typeof e && null !== e
                        }

                        function _(e) {
                            return E(e) && "[object Date]" === O(e)
                        }

                        function x(e) {
                            return E(e) && ("[object Error]" === O(e) || e instanceof Error)
                        }

                        function j(e) {
                            return "function" == typeof e
                        }

                        function O(e) {
                            return Object.prototype.toString.call(e)
                        }

                        function k(e) {
                            return e < 10 ? "0" + e.toString(10) : e.toString(10)
                        }
                        t.debuglog = function(u) {
                            if (v(i) && (i = e.env.NODE_DEBUG || ""), u = u.toUpperCase(), !f[u])
                                if (new RegExp("\\b" + u + "\\b", "i").test(i)) {
                                    var r = e.pid;
                                    f[u] = function() {
                                        var e = t.format.apply(t, arguments);
                                        n.error("%s %d: %s", u, r, e)
                                    }
                                } else f[u] = function() {};
                            return f[u]
                        }, t.inspect = a, a.colors = {
                            bold: [1, 22],
                            italic: [3, 23],
                            underline: [4, 24],
                            inverse: [7, 27],
                            white: [37, 39],
                            grey: [90, 39],
                            black: [30, 39],
                            blue: [34, 39],
                            cyan: [36, 39],
                            green: [32, 39],
                            magenta: [35, 39],
                            red: [31, 39],
                            yellow: [33, 39]
                        }, a.styles = {
                            special: "cyan",
                            number: "yellow",
                            boolean: "yellow",
                            undefined: "grey",
                            null: "bold",
                            string: "green",
                            date: "magenta",
                            regexp: "red"
                        }, t.isArray = h, t.isBoolean = b, t.isNull = g, t.isNullOrUndefined = function(e) {
                            return null == e
                        }, t.isNumber = y, t.isString = m, t.isSymbol = function(e) {
                            return "symbol" == typeof e
                        }, t.isUndefined = v, t.isRegExp = w, t.isObject = E, t.isDate = _, t.isError = x, t.isFunction = j, t.isPrimitive = function(e) {
                            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                        }, t.isBuffer = u("./node_modules/util/support/isBufferBrowser.js");
                        var A = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                        function L(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }
                        t.log = function() {
                            var e, u;
                            n.log("%s - %s", (e = new Date, u = [k(e.getHours()), k(e.getMinutes()), k(e.getSeconds())].join(":"), [e.getDate(), A[e.getMonth()], u].join(" ")), t.format.apply(t, arguments))
                        }, t.inherits = u("./node_modules/util/node_modules/inherits/inherits_browser.js"), t._extend = function(e, t) {
                            if (!t || !E(t)) return e;
                            for (var u = Object.keys(t), n = u.length; n--;) e[u[n]] = t[u[n]];
                            return e
                        };
                        var S = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

                        function T(e, t) {
                            if (!e) {
                                var u = new Error("Promise was rejected with a falsy value");
                                u.reason = e, e = u
                            }
                            return t(e)
                        }
                        t.promisify = function(e) {
                            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
                            if (S && e[S]) {
                                var t;
                                if ("function" != typeof(t = e[S])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                                return Object.defineProperty(t, S, {
                                    value: t,
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                }), t
                            }

                            function t() {
                                for (var t, u, n = new Promise((function(e, n) {
                                        t = e, u = n
                                    })), r = [], o = 0; o < arguments.length; o++) r.push(arguments[o]);
                                r.push((function(e, n) {
                                    e ? u(e) : t(n)
                                }));
                                try {
                                    e.apply(this, r)
                                } catch (e) {
                                    u(e)
                                }
                                return n
                            }
                            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), S && Object.defineProperty(t, S, {
                                value: t,
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            }), Object.defineProperties(t, r(e))
                        }, t.promisify.custom = S, t.callbackify = function(t) {
                            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

                            function u() {
                                for (var u = [], n = 0; n < arguments.length; n++) u.push(arguments[n]);
                                var r = u.pop();
                                if ("function" != typeof r) throw new TypeError("The last argument must be of type Function");
                                var o = this,
                                    i = function() {
                                        return r.apply(o, arguments)
                                    };
                                t.apply(this, u).then((function(t) {
                                    e.nextTick(i, null, t)
                                }), (function(t) {
                                    e.nextTick(T, t, i)
                                }))
                            }
                            return Object.setPrototypeOf(u, Object.getPrototypeOf(t)), Object.defineProperties(u, r(t)), u
                        }
                    }).call(this, u("./node_modules/process/browser.js"))
                },
                "./node_modules/varint/decode.js": function(e, t) {
                    e.exports = function e(t, r) {
                        var o, i = 0,
                            f = 0,
                            a = r = r || 0,
                            s = t.length;
                        do {
                            if (a >= s) throw e.bytes = 0, new RangeError("Could not decode varint");
                            o = t[a++], i += f < 28 ? (o & n) << f : (o & n) * Math.pow(2, f), f += 7
                        } while (o >= u);
                        return e.bytes = a - r, i
                    };
                    var u = 128,
                        n = 127
                },
                "./node_modules/varint/encode.js": function(e, t) {
                    e.exports = function e(t, o, i) {
                        o = o || [];
                        var f = i = i || 0;
                        for (; t >= r;) o[i++] = 255 & t | u, t /= 128;
                        for (; t & n;) o[i++] = 255 & t | u, t >>>= 7;
                        return o[i] = 0 | t, e.bytes = i - f + 1, o
                    };
                    var u = 128,
                        n = -128,
                        r = Math.pow(2, 31)
                },
                "./node_modules/varint/index.js": function(e, t, u) {
                    e.exports = {
                        encode: u("./node_modules/varint/encode.js"),
                        decode: u("./node_modules/varint/decode.js"),
                        encodingLength: u("./node_modules/varint/length.js")
                    }
                },
                "./node_modules/varint/length.js": function(e, t) {
                    var u = Math.pow(2, 7),
                        n = Math.pow(2, 14),
                        r = Math.pow(2, 21),
                        o = Math.pow(2, 28),
                        i = Math.pow(2, 35),
                        f = Math.pow(2, 42),
                        a = Math.pow(2, 49),
                        s = Math.pow(2, 56),
                        c = Math.pow(2, 63);
                    e.exports = function(e) {
                        return e < u ? 1 : e < n ? 2 : e < r ? 3 : e < o ? 4 : e < i ? 5 : e < f ? 6 : e < a ? 7 : e < s ? 8 : e < c ? 9 : 10
                    }
                },
                "./node_modules/webpack/buildin/global.js": function(e, t) {
                    var u;
                    u = globalThis;
                    try {
                        u = u || new f("return this")()
                    } catch (e) {
                        "object" == typeof window && (u = window)
                    }
                    e.exports = u
                }
            })), a
        }
        void 0 === i && (module.exports = s), globalThis.__protobufSDKGetter__ = {
            getProtobuf: () => (...e) => s()(...e)
        }
    }()
} catch (e) {
    console.error("catch sdkSubPackage: protobuf error: ", e)
}