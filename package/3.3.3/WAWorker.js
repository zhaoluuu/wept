this.__wxLibrary = {
    fileName: "WAWorker.js",
    envType: "Worker",
    contextType: "others",
    execStart: Date.now(),
    mayHaveSnapshot: !1
};
var __WAWorkerStartTime__ = this.__wxLibrary.execStart;
! function(e) {
    var t = {
            updateTime: "2024.1.23 17:19:51",
            version: "3.3.3",
            features: {
                pruneWxConfigByPage: !0,
                injectGameContextPlugin: !0,
                lazyCodeLoading2: !0,
                lazyCodeLoadingForDevTool: !0,
                injectAppSeparatedPlugin: !0,
                nativeTrans: !0,
                gameLive: !0,
                skyline: !0,
                supportInvokeWithAppId: !0,
                wkFeatureVersion: 4,
                delayedServiceCodeCache: !0,
                gameLiveInvite: !0,
                globalConsole: !0,
                earlyDispatchSubPkgReady: !0,
                glassEasel: 1,
                expt: ["clicfg_appbrand_ios_native_download_new", "clicfg_appbrand_native_download", "clicfg_appbrand_ios_native_socket_wcwss_new", "clicfg_appbrand_ios_native_readfile", "clicfg_appbrand_native_readfile", "clicfg_appbrand_android_tcp_buffer", "clicfg_appbrand_ios_tcp_buffer", "clicfg_weapp_weak_net_predict_local", "clicfg_wa_ar_iosurface_switch", "clicfg_appbrand_report_trace_event", "clicfg_appbrand_skyline_text_style", "clicfg_appbrand_ios_free_httpdns_sdk_cache", "clicfg_appbrand_android_free_httpdns_sdk_cache", "clicfg_appbrand_ios_inneraudio2webaudio", "clicfg_appbrand_android_inneraudio2webaudio", "clicfg_appbrand_ios_inneraudio2webaudio_usewebaudio", "clicfg_appbrand_android_inneraudio2webaudio_usewebaudio", "clicfg_appbrand_ios_allow_multi_context_worker", "clicfg_appbrand_ios_allow_worker_binding_message", "clicfg_appbrand_ios_game_split_multi_plugincode", "clicfg_appbrand_game_split_multi_plugincode", "clicfg_appbrand_ios_arkit2wevision_usewevision", "clicfg_appbrand_ios_arkit2wevision_usevertialplane", "clicfg_appbrand_ios_enable_async_create_request_task", "clicfg_appbrand_ios_use_jsapi_args_binding", "clicfg_appbrand_android_inneraudio2webaudio_stream", "clicfg_appbrand_ios_inneraudio2webaudio_stream", "clicfg_appbrand_webview_slow_frame", "clicfg_appbrand_webview_native_intersection_observer", "clicfg_appbrand_ios_control_close_condom_white", "clicfg_appbrand_android_control_close_condom_white", "clicfg_appbrand_android_use_game_delay_codecache", "clicfg_appbrand_android_product_recommand_new", "clicfg_appbrand_ios_product_recommand_new", "clicfg_appbrand_android_xnet_binding", "clicfg_appbrand_ios_game_shangcheng_kefu", "clicfg_android_wagame_frontend_set_file_space_statistics_status", "clicfg_ting_weapp_audio_switch", "clicfg_ting_android_weapp_audio_switch", "clicfg_enable_appbrand_request_binding_android"],
                snapshotConfig: {
                    "game:main": ["WAGame.js"],
                    "game:sub": ["WAGameSubContext.js"]
                },
                mayHaveSnapshot: ["WAServiceMainContext.js", "WASubContext.js", "WARenderContext.js", "WAGame.js", "WAGameSubContext.js"],
                pcSnapshotConfig: {
                    minigame: {
                        iframeDomain: {
                            mainContext: ["WAGame.js"],
                            gameContext: ["WAGameSubContext.js"]
                        },
                        workerDomain: {}
                    },
                    miniprogram: {
                        iframeDomain: {},
                        workerDomain: {
                            main_context: ["WAServiceMainContext.js"],
                            sub_context: ["WASubContext.js"]
                        }
                    }
                }
            },
            debugOptions: {}
        },
        r = e.Function,
        n = r,
        a = {};
    (() => {
        var e = {
                5803: (e, t, r) => {
                    var n = {
                        "./applyDecoratedDescriptor": 7386,
                        "./asyncToGenerator": 8921,
                        "./initializerDefineProperty": 8704,
                        "./initializerWarningHelper": 9651,
                        "./objectSpread2": 8680
                    };

                    function a(e) {
                        var t = o(e);
                        return r(t)
                    }

                    function o(e) {
                        if (!r.o(n, e)) {
                            var t = new Error("Cannot find module '" + e + "'");
                            throw t.code = "MODULE_NOT_FOUND", t
                        }
                        return n[e]
                    }
                    a.keys = function() {
                        return Object.keys(n)
                    }, a.resolve = o, e.exports = a, a.id = 5803
                },
                7386: (e, t, r) => {
                    "use strict";

                    function n(e, t, r, n, a) {
                        var o = {};
                        return Object.keys(n).forEach((function(e) {
                            o[e] = n[e]
                        })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = r.slice().reverse().reduce((function(r, n) {
                            return n(e, t, r) || r
                        }), o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
                    }
                    r.r(t), r.d(t, {
                        default: () => n
                    })
                },
                8921: (e, t, r) => {
                    "use strict";

                    function n(e, t, r, n, a, o, i) {
                        try {
                            var s = e[o](i),
                                c = s.value
                        } catch (e) {
                            return void r(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(n, a)
                    }

                    function a(e) {
                        return function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(a, o) {
                                var i = e.apply(t, r);

                                function s(e) {
                                    n(i, a, o, s, c, "next", e)
                                }

                                function c(e) {
                                    n(i, a, o, s, c, "throw", e)
                                }
                                s(void 0)
                            }))
                        }
                    }
                    r.r(t), r.d(t, {
                        default: () => a
                    })
                },
                8704: (e, t, r) => {
                    "use strict";

                    function n(e, t, r, n) {
                        r && Object.defineProperty(e, t, {
                            enumerable: r.enumerable,
                            configurable: r.configurable,
                            writable: r.writable,
                            value: r.initializer ? r.initializer.call(n) : void 0
                        })
                    }
                    r.r(t), r.d(t, {
                        default: () => n
                    })
                },
                9651: (e, t, r) => {
                    "use strict";

                    function n(e, t) {
                        throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.")
                    }
                    r.r(t), r.d(t, {
                        default: () => n
                    })
                },
                8680: (e, t, r) => {
                    "use strict";

                    function n(e) {
                        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }, n(e)
                    }

                    function a(e) {
                        var t = function(e, t) {
                            if ("object" !== n(e) || null === e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var a = r.call(e, t || "default");
                                if ("object" !== n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" === n(t) ? t : String(t)
                    }

                    function o(e, t, r) {
                        return (t = a(t)) in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function i(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function s(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? i(Object(r), !0).forEach((function(t) {
                                o(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }
                    r.r(t), r.d(t, {
                        default: () => s
                    })
                },
                2844: (e, t, r) => {
                    var n = r(5835),
                        a = r(1501),
                        o = r(6724),
                        i = r(1703),
                        s = o.data,
                        c = o.normalize,
                        u = "USE_FUNCTION_CONSTRUCTOR",
                        l = "AsyncIteratorPrototype",
                        p = function(e, t) {
                            if (a(e))
                                for (var r = 0; r < e.length; r++) s[c(e[r])] = t
                        };
                    e.exports = function(e) {
                        "object" == typeof e && (p(e.useNative, o.NATIVE), p(e.usePolyfill, o.POLYFILL), p(e.useFeatureDetection, null), n(e, u) && (i[u] = !!e[u]), n(e, l) && (i[u] = e[l]))
                    }
                },
                9573: (e, t, r) => {
                    var n = r(9548),
                        a = r(1002),
                        o = TypeError;
                    e.exports = function(e) {
                        if (n(e)) return e;
                        throw o(a(e) + " is not a function")
                    }
                },
                7663: (e, t, r) => {
                    var n = r(1908),
                        a = r(1002),
                        o = TypeError;
                    e.exports = function(e) {
                        if (n(e)) return e;
                        throw o(a(e) + " is not a constructor")
                    }
                },
                8055: (e, t, r) => {
                    var n = r(9548),
                        a = String,
                        o = TypeError;
                    e.exports = function(e) {
                        if ("object" == typeof e || n(e)) return e;
                        throw o("Can't set " + a(e) + " as a prototype")
                    }
                },
                8153: (e, t, r) => {
                    var n = r(6501).has;
                    e.exports = function(e) {
                        return n(e), e
                    }
                },
                6539: (e, t, r) => {
                    var n = r(6619),
                        a = r(8995),
                        o = r(7981),
                        i = r(9799),
                        s = r(2317),
                        c = r(6250),
                        u = c("asyncDispose"),
                        l = c("dispose"),
                        p = n([].push),
                        f = function(e, t, r) {
                            return a(r || function(e, t) {
                                return "async-dispose" == t && s(e, u) || s(e, l)
                            }(e, t), e)
                        };
                    e.exports = function(e, t, r, n) {
                        var a;
                        if (n) a = i(t) ? f(void 0, r, n) : f(o(t), r, n);
                        else {
                            if (i(t)) return;
                            a = f(t, r)
                        }
                        p(e.stack, a)
                    }
                },
                4014: (e, t, r) => {
                    var n = r(6250),
                        a = r(3583),
                        o = r(2468).f,
                        i = n("unscopables"),
                        s = Array.prototype;
                    null == s[i] && o(s, i, {
                        configurable: !0,
                        value: a(null)
                    }), e.exports = function(e) {
                        s[i][e] = !0
                    }
                },
                5563: (e, t, r) => {
                    "use strict";
                    var n = r(4637).charAt;
                    e.exports = function(e, t, r) {
                        return t + (r ? n(e, t).length : 1)
                    }
                },
                3949: (e, t, r) => {
                    var n = r(631),
                        a = TypeError;
                    e.exports = function(e, t) {
                        if (n(t, e)) return e;
                        throw a("Incorrect invocation")
                    }
                },
                7981: (e, t, r) => {
                    var n = r(3021),
                        a = String,
                        o = TypeError;
                    e.exports = function(e) {
                        if (n(e)) return e;
                        throw o(a(e) + " is not an object")
                    }
                },
                3860: e => {
                    e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
                },
                7854: (e, t, r) => {
                    "use strict";
                    var a, o, i, s = r(3860),
                        c = r(8521),
                        u = r(2689),
                        l = r(9548),
                        p = r(3021),
                        f = r(5835),
                        d = r(7221),
                        h = r(1002),
                        v = r(1720),
                        g = r(9146),
                        y = r(4173),
                        _ = r(631),
                        m = r(5616),
                        b = r(1672),
                        w = r(6250),
                        k = r(5567),
                        S = r(7832),
                        I = S.enforce,
                        x = S.get,
                        T = u.Int8Array,
                        A = T && T.prototype,
                        C = u.Uint8ClampedArray,
                        E = C && C.prototype,
                        P = T && m(T),
                        O = A && m(A),
                        R = Object.prototype,
                        M = u.TypeError,
                        D = w("toStringTag"),
                        j = k("TYPED_ARRAY_TAG"),
                        L = "TypedArrayConstructor",
                        N = s && !!b && "Opera" !== d(u.opera),
                        F = !1,
                        W = {
                            Int8Array: 1,
                            Uint8Array: 1,
                            Uint8ClampedArray: 1,
                            Int16Array: 2,
                            Uint16Array: 2,
                            Int32Array: 4,
                            Uint32Array: 4,
                            Float32Array: 4,
                            Float64Array: 8
                        },
                        $ = {
                            BigInt64Array: 8,
                            BigUint64Array: 8
                        },
                        B = function(e) {
                            var t = m(e);
                            if (p(t)) {
                                var r = x(t);
                                return r && f(r, L) ? r[L] : B(t)
                            }
                        },
                        U = function(e) {
                            if (!p(e)) return !1;
                            var t = d(e);
                            return f(W, t) || f($, t)
                        };
                    for (a in W)(i = (o = u[a]) && o.prototype) ? I(i)[L] = o : N = !1;
                    for (a in $)(i = (o = u[a]) && o.prototype) && (I(i)[L] = o);
                    if ((!N || !l(P) || P === n.prototype) && (P = function() {
                            throw M("Incorrect invocation")
                        }, N))
                        for (a in W) u[a] && b(u[a], P);
                    if ((!N || !O || O === R) && (O = P.prototype, N))
                        for (a in W) u[a] && b(u[a].prototype, O);
                    if (N && m(E) !== O && b(E, O), c && !f(O, D))
                        for (a in F = !0, y(O, D, {
                                configurable: !0,
                                get: function() {
                                    return p(this) ? this[j] : void 0
                                }
                            }), W) u[a] && v(u[a], j, a);
                    e.exports = {
                        NATIVE_ARRAY_BUFFER_VIEWS: N,
                        TYPED_ARRAY_TAG: F && j,
                        aTypedArray: function(e) {
                            if (U(e)) return e;
                            throw M("Target is not a typed array")
                        },
                        aTypedArrayConstructor: function(e) {
                            if (l(e) && (!b || _(P, e))) return e;
                            throw M(h(e) + " is not a typed array constructor")
                        },
                        exportTypedArrayMethod: function(e, t, r, n) {
                            if (c) {
                                if (r)
                                    for (var a in W) {
                                        var o = u[a];
                                        if (o && f(o.prototype, e)) try {
                                            delete o.prototype[e]
                                        } catch (r) {
                                            try {
                                                o.prototype[e] = t
                                            } catch (e) {}
                                        }
                                    }
                                O[e] && !r || g(O, e, r ? t : N && A[e] || t, n)
                            }
                        },
                        exportTypedArrayStaticMethod: function(e, t, r) {
                            var n, a;
                            if (c) {
                                if (b) {
                                    if (r)
                                        for (n in W)
                                            if ((a = u[n]) && f(a, e)) try {
                                                delete a[e]
                                            } catch (e) {}
                                    if (P[e] && !r) return;
                                    try {
                                        return g(P, e, r ? t : N && P[e] || t)
                                    } catch (e) {}
                                }
                                for (n in W) !(a = u[n]) || a[e] && !r || g(a, e, t)
                            }
                        },
                        getTypedArrayConstructor: B,
                        isView: function(e) {
                            if (!p(e)) return !1;
                            var t = d(e);
                            return "DataView" === t || f(W, t) || f($, t)
                        },
                        isTypedArray: U,
                        TypedArray: P,
                        TypedArrayPrototype: O
                    }
                },
                819: (e, t, r) => {
                    "use strict";
                    var n = r(2689),
                        a = r(6619),
                        o = r(8521),
                        i = r(3860),
                        s = r(4046),
                        c = r(1720),
                        u = r(4173),
                        l = r(2669),
                        p = r(9835),
                        f = r(3949),
                        d = r(8299),
                        h = r(6443),
                        v = r(1169),
                        g = r(8763),
                        y = r(5616),
                        _ = r(1672),
                        m = r(4161).f,
                        b = r(5035),
                        w = r(6283),
                        k = r(4029),
                        S = r(7832),
                        I = s.PROPER,
                        x = s.CONFIGURABLE,
                        T = "ArrayBuffer",
                        A = "DataView",
                        C = "prototype",
                        E = "Wrong index",
                        P = S.getterFor(T),
                        O = S.getterFor(A),
                        R = S.set,
                        M = n[T],
                        D = M,
                        j = D && D[C],
                        L = n[A],
                        N = L && L[C],
                        F = Object.prototype,
                        W = n.Array,
                        $ = n.RangeError,
                        B = a(b),
                        U = a([].reverse),
                        q = g.pack,
                        H = g.unpack,
                        G = function(e) {
                            return [255 & e]
                        },
                        V = function(e) {
                            return [255 & e, e >> 8 & 255]
                        },
                        K = function(e) {
                            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
                        },
                        z = function(e) {
                            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
                        },
                        J = function(e) {
                            return q(e, 23, 4)
                        },
                        Y = function(e) {
                            return q(e, 52, 8)
                        },
                        Z = function(e, t, r) {
                            u(e[C], t, {
                                configurable: !0,
                                get: function() {
                                    return r(this)[t]
                                }
                            })
                        },
                        Q = function(e, t, r, n) {
                            var a = v(r),
                                o = O(e);
                            if (a + t > o.byteLength) throw $(E);
                            var i = o.bytes,
                                s = a + o.byteOffset,
                                c = w(i, s, s + t);
                            return n ? c : U(c)
                        },
                        X = function(e, t, r, n, a, o) {
                            var i = v(r),
                                s = O(e);
                            if (i + t > s.byteLength) throw $(E);
                            for (var c = s.bytes, u = i + s.byteOffset, l = n(+a), p = 0; p < t; p++) c[u + p] = l[o ? p : t - p - 1]
                        };
                    if (i) {
                        var ee = I && M.name !== T;
                        if (p((function() {
                                M(1)
                            })) && p((function() {
                                new M(-1)
                            })) && !p((function() {
                                return new M, new M(1.5), new M(NaN), 1 != M.length || ee && !x
                            }))) ee && x && c(M, "name", T);
                        else {
                            (D = function(e) {
                                return f(this, j), new M(v(e))
                            })[C] = j;
                            for (var te, re = m(M), ne = 0; re.length > ne;)(te = re[ne++]) in D || c(D, te, M[te]);
                            j.constructor = D
                        }
                        _ && y(N) !== F && _(N, F);
                        var ae = new L(new D(2)),
                            oe = a(N.setInt8);
                        ae.setInt8(0, 2147483648), ae.setInt8(1, 2147483649), !ae.getInt8(0) && ae.getInt8(1) || l(N, {
                            setInt8: function(e, t) {
                                oe(this, e, t << 24 >> 24)
                            },
                            setUint8: function(e, t) {
                                oe(this, e, t << 24 >> 24)
                            }
                        }, {
                            unsafe: !0
                        })
                    } else j = (D = function(e) {
                        f(this, j);
                        var t = v(e);
                        R(this, {
                            type: T,
                            bytes: B(W(t), 0),
                            byteLength: t
                        }), o || (this.byteLength = t, this.detached = !1)
                    })[C], N = (L = function(e, t, r) {
                        f(this, N), f(e, j);
                        var n = P(e),
                            a = n.byteLength,
                            i = d(t);
                        if (i < 0 || i > a) throw $("Wrong offset");
                        if (i + (r = void 0 === r ? a - i : h(r)) > a) throw $("Wrong length");
                        R(this, {
                            type: A,
                            buffer: e,
                            byteLength: r,
                            byteOffset: i,
                            bytes: n.bytes
                        }), o || (this.buffer = e, this.byteLength = r, this.byteOffset = i)
                    })[C], o && (Z(D, "byteLength", P), Z(L, "buffer", O), Z(L, "byteLength", O), Z(L, "byteOffset", O)), l(N, {
                        getInt8: function(e) {
                            return Q(this, 1, e)[0] << 24 >> 24
                        },
                        getUint8: function(e) {
                            return Q(this, 1, e)[0]
                        },
                        getInt16: function(e) {
                            var t = Q(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                            return (t[1] << 8 | t[0]) << 16 >> 16
                        },
                        getUint16: function(e) {
                            var t = Q(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                            return t[1] << 8 | t[0]
                        },
                        getInt32: function(e) {
                            return z(Q(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
                        },
                        getUint32: function(e) {
                            return z(Q(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
                        },
                        getFloat32: function(e) {
                            return H(Q(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
                        },
                        getFloat64: function(e) {
                            return H(Q(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
                        },
                        setInt8: function(e, t) {
                            X(this, 1, e, G, t)
                        },
                        setUint8: function(e, t) {
                            X(this, 1, e, G, t)
                        },
                        setInt16: function(e, t) {
                            X(this, 2, e, V, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setUint16: function(e, t) {
                            X(this, 2, e, V, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setInt32: function(e, t) {
                            X(this, 4, e, K, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setUint32: function(e, t) {
                            X(this, 4, e, K, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setFloat32: function(e, t) {
                            X(this, 4, e, J, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setFloat64: function(e, t) {
                            X(this, 8, e, Y, t, arguments.length > 2 ? arguments[2] : void 0)
                        }
                    });
                    k(D, T), k(L, A), e.exports = {
                        ArrayBuffer: D,
                        DataView: L
                    }
                },
                5035: (e, t, r) => {
                    "use strict";
                    var n = r(18),
                        a = r(3610),
                        o = r(56);
                    e.exports = function(e) {
                        for (var t = n(this), r = o(t), i = arguments.length, s = a(i > 1 ? arguments[1] : void 0, r), c = i > 2 ? arguments[2] : void 0, u = void 0 === c ? r : a(c, r); u > s;) t[s++] = e;
                        return t
                    }
                },
                778: (e, t, r) => {
                    "use strict";
                    var n = r(8995),
                        a = r(6619),
                        o = r(18),
                        i = r(1908),
                        s = r(6249),
                        c = r(8631),
                        u = r(6302),
                        l = r(5569),
                        p = r(2317),
                        f = r(9682),
                        d = r(2555),
                        h = r(6250),
                        v = r(2429),
                        g = r(9937).toArray,
                        y = h("asyncIterator"),
                        _ = a(f("Array").values),
                        m = a(_([]).next),
                        b = function() {
                            return new w(this)
                        },
                        w = function(e) {
                            this.iterator = _(e)
                        };
                    w.prototype.next = function() {
                        return m(this.iterator)
                    }, e.exports = function(e) {
                        var t = this,
                            r = arguments.length,
                            a = r > 1 ? arguments[1] : void 0,
                            f = r > 2 ? arguments[2] : void 0;
                        return new(d("Promise"))((function(r) {
                            var d = o(e);
                            void 0 !== a && (a = n(a, f));
                            var h = p(d, y),
                                _ = h ? void 0 : l(d) || b,
                                m = i(t) ? new t : [],
                                w = h ? s(d, h) : new v(u(c(d, _)));
                            r(g(w, a, m))
                        }))
                    }
                },
                113: (e, t, r) => {
                    var n = r(56);
                    e.exports = function(e, t) {
                        for (var r = 0, a = n(t), o = new e(a); a > r;) o[r] = t[r++];
                        return o
                    }
                },
                5931: (e, t, r) => {
                    "use strict";
                    var n = r(8995),
                        a = r(6619),
                        o = r(8582),
                        i = r(18),
                        s = r(56),
                        c = r(8017),
                        u = c.Map,
                        l = c.get,
                        p = c.has,
                        f = c.set,
                        d = a([].push);
                    e.exports = function(e) {
                        for (var t, r, a = i(this), c = o(a), h = n(e, arguments.length > 1 ? arguments[1] : void 0), v = new u, g = s(c), y = 0; g > y; y++) t = h(r = c[y], y, a), p(v, t) ? d(l(v, t), r) : f(v, t, [r]);
                        return v
                    }
                },
                9639: (e, t, r) => {
                    var n = r(8995),
                        a = r(6619),
                        o = r(8582),
                        i = r(18),
                        s = r(7880),
                        c = r(56),
                        u = r(3583),
                        l = r(113),
                        p = Array,
                        f = a([].push);
                    e.exports = function(e, t, r, a) {
                        for (var d, h, v, g = i(e), y = o(g), _ = n(t, r), m = u(null), b = c(y), w = 0; b > w; w++) v = y[w], (h = s(_(v, w, g))) in m ? f(m[h], v) : m[h] = [v];
                        if (a && (d = a(g)) !== p)
                            for (h in m) m[h] = l(d, m[h]);
                        return m
                    }
                },
                5379: (e, t, r) => {
                    var n = r(7417),
                        a = r(3610),
                        o = r(56),
                        i = function(e) {
                            return function(t, r, i) {
                                var s, c = n(t),
                                    u = o(c),
                                    l = a(i, u);
                                if (e && r != r) {
                                    for (; u > l;)
                                        if ((s = c[l++]) != s) return !0
                                } else
                                    for (; u > l; l++)
                                        if ((e || l in c) && c[l] === r) return e || l || 0;
                                return !e && -1
                            }
                        };
                    e.exports = {
                        includes: i(!0),
                        indexOf: i(!1)
                    }
                },
                3792: (e, t, r) => {
                    var n = r(8995),
                        a = r(8582),
                        o = r(18),
                        i = r(56),
                        s = function(e) {
                            var t = 1 == e;
                            return function(r, s, c) {
                                for (var u, l = o(r), p = a(l), f = n(s, c), d = i(p); d-- > 0;)
                                    if (f(u = p[d], d, l)) switch (e) {
                                        case 0:
                                            return u;
                                        case 1:
                                            return d
                                    }
                                return t ? -1 : void 0
                            }
                        };
                    e.exports = {
                        findLast: s(0),
                        findLastIndex: s(1)
                    }
                },
                8250: (e, t, r) => {
                    var n = r(8995),
                        a = r(6619),
                        o = r(8582),
                        i = r(18),
                        s = r(56),
                        c = r(3848),
                        u = a([].push),
                        l = function(e) {
                            var t = 1 == e,
                                r = 2 == e,
                                a = 3 == e,
                                l = 4 == e,
                                p = 6 == e,
                                f = 7 == e,
                                d = 5 == e || p;
                            return function(h, v, g, y) {
                                for (var _, m, b = i(h), w = o(b), k = n(v, g), S = s(w), I = 0, x = y || c, T = t ? x(h, S) : r || f ? x(h, 0) : void 0; S > I; I++)
                                    if ((d || I in w) && (m = k(_ = w[I], I, b), e))
                                        if (t) T[I] = m;
                                        else if (m) switch (e) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return _;
                                    case 6:
                                        return I;
                                    case 2:
                                        u(T, _)
                                } else switch (e) {
                                    case 4:
                                        return !1;
                                    case 7:
                                        u(T, _)
                                }
                                return p ? -1 : a || l ? l : T
                            }
                        };
                    e.exports = {
                        forEach: l(0),
                        map: l(1),
                        filter: l(2),
                        some: l(3),
                        every: l(4),
                        find: l(5),
                        findIndex: l(6),
                        filterReject: l(7)
                    }
                },
                6732: (e, t, r) => {
                    "use strict";
                    var n = r(9835);
                    e.exports = function(e, t) {
                        var r = [][e];
                        return !!r && n((function() {
                            r.call(null, t || function() {
                                return 1
                            }, 1)
                        }))
                    }
                },
                3447: (e, t, r) => {
                    "use strict";
                    var n = r(8521),
                        a = r(1501),
                        o = TypeError,
                        i = Object.getOwnPropertyDescriptor,
                        s = n && ! function() {
                            if (void 0 !== this) return !0;
                            try {
                                Object.defineProperty([], "length", {
                                    writable: !1
                                }).length = 1
                            } catch (e) {
                                return e instanceof TypeError
                            }
                        }();
                    e.exports = s ? function(e, t) {
                        if (a(e) && !i(e, "length").writable) throw o("Cannot set read only .length");
                        return e.length = t
                    } : function(e, t) {
                        return e.length = t
                    }
                },
                6283: (e, t, r) => {
                    var n = r(3610),
                        a = r(56),
                        o = r(9117),
                        i = Array,
                        s = Math.max;
                    e.exports = function(e, t, r) {
                        for (var c = a(e), u = n(t, c), l = n(void 0 === r ? c : r, c), p = i(s(l - u, 0)), f = 0; u < l; u++, f++) o(p, f, e[u]);
                        return p.length = f, p
                    }
                },
                7687: (e, t, r) => {
                    var n = r(6619);
                    e.exports = n([].slice)
                },
                2026: (e, t, r) => {
                    var n = r(6283),
                        a = Math.floor,
                        o = function(e, t) {
                            var r = e.length,
                                c = a(r / 2);
                            return r < 8 ? i(e, t) : s(e, o(n(e, 0, c), t), o(n(e, c), t), t)
                        },
                        i = function(e, t) {
                            for (var r, n, a = e.length, o = 1; o < a;) {
                                for (n = o, r = e[o]; n && t(e[n - 1], r) > 0;) e[n] = e[--n];
                                n !== o++ && (e[n] = r)
                            }
                            return e
                        },
                        s = function(e, t, r, n) {
                            for (var a = t.length, o = r.length, i = 0, s = 0; i < a || s < o;) e[i + s] = i < a && s < o ? n(t[i], r[s]) <= 0 ? t[i++] : r[s++] : i < a ? t[i++] : r[s++];
                            return e
                        };
                    e.exports = o
                },
                2028: (e, t, r) => {
                    var n = r(1501),
                        a = r(1908),
                        o = r(3021),
                        i = r(6250)("species"),
                        s = Array;
                    e.exports = function(e) {
                        var t;
                        return n(e) && (t = e.constructor, (a(t) && (t === s || n(t.prototype)) || o(t) && null === (t = t[i])) && (t = void 0)), void 0 === t ? s : t
                    }
                },
                3848: (e, t, r) => {
                    var n = r(2028);
                    e.exports = function(e, t) {
                        return new(n(e))(0 === t ? 0 : t)
                    }
                },
                6203: (e, t, r) => {
                    var n = r(56);
                    e.exports = function(e, t) {
                        for (var r = n(e), a = new t(r), o = 0; o < r; o++) a[o] = e[r - o - 1];
                        return a
                    }
                },
                4784: (e, t, r) => {
                    var n = r(56),
                        a = r(8299),
                        o = RangeError;
                    e.exports = function(e, t, r, i) {
                        var s = n(e),
                            c = a(r),
                            u = c < 0 ? s + c : c;
                        if (u >= s || u < 0) throw o("Incorrect index");
                        for (var l = new t(s), p = 0; p < s; p++) l[p] = p === u ? i : e[p];
                        return l
                    }
                },
                2429: (e, t, r) => {
                    "use strict";
                    var n = r(970),
                        a = r(7981),
                        o = r(3583),
                        i = r(2317),
                        s = r(2669),
                        c = r(7832),
                        u = r(2555),
                        l = r(2342),
                        p = r(2549),
                        f = u("Promise"),
                        d = "AsyncFromSyncIterator",
                        h = c.set,
                        v = c.getterFor(d),
                        g = function(e, t, r) {
                            var n = e.done;
                            f.resolve(e.value).then((function(e) {
                                t(p(e, n))
                            }), r)
                        },
                        y = function(e) {
                            e.type = d, h(this, e)
                        };
                    y.prototype = s(o(l), {
                        next: function() {
                            var e = v(this);
                            return new f((function(t, r) {
                                var o = a(n(e.next, e.iterator));
                                g(o, t, r)
                            }))
                        },
                        return: function() {
                            var e = v(this).iterator;
                            return new f((function(t, r) {
                                var o = i(e, "return");
                                if (void 0 === o) return t(p(void 0, !0));
                                var s = a(n(o, e));
                                g(s, t, r)
                            }))
                        }
                    }), e.exports = y
                },
                86: (e, t, r) => {
                    var n = r(970),
                        a = r(2555),
                        o = r(2317);
                    e.exports = function(e, t, r, i) {
                        try {
                            var s = o(e, "return");
                            if (s) return a("Promise").resolve(n(s, e)).then((function() {
                                t(r)
                            }), (function(e) {
                                i(e)
                            }))
                        } catch (e) {
                            return i(e)
                        }
                        t(r)
                    }
                },
                5817: (e, t, r) => {
                    "use strict";
                    var n = r(970),
                        a = r(3576),
                        o = r(7981),
                        i = r(3583),
                        s = r(1720),
                        c = r(2669),
                        u = r(6250),
                        l = r(7832),
                        p = r(2555),
                        f = r(2317),
                        d = r(2342),
                        h = r(2549),
                        v = r(7087),
                        g = p("Promise"),
                        y = u("toStringTag"),
                        _ = "AsyncIteratorHelper",
                        m = "WrapForValidAsyncIterator",
                        b = l.set,
                        w = function(e) {
                            var t = !e,
                                r = l.getterFor(e ? m : _),
                                s = function(e) {
                                    var n = a((function() {
                                            return r(e)
                                        })),
                                        o = n.error,
                                        i = n.value;
                                    return o || t && i.done ? {
                                        exit: !0,
                                        value: o ? g.reject(i) : g.resolve(h(void 0, !0))
                                    } : {
                                        exit: !1,
                                        value: i
                                    }
                                };
                            return c(i(d), {
                                next: function() {
                                    var e = s(this),
                                        t = e.value;
                                    if (e.exit) return t;
                                    var r = a((function() {
                                            return o(t.nextHandler(g))
                                        })),
                                        n = r.error,
                                        i = r.value;
                                    return n && (t.done = !0), n ? g.reject(i) : g.resolve(i)
                                },
                                return: function() {
                                    var t = s(this),
                                        r = t.value;
                                    if (t.exit) return r;
                                    r.done = !0;
                                    var i, c, u = r.iterator,
                                        l = a((function() {
                                            if (r.inner) try {
                                                v(r.inner.iterator, "normal")
                                            } catch (e) {
                                                return v(u, "throw", e)
                                            }
                                            return f(u, "return")
                                        }));
                                    return i = c = l.value, l.error ? g.reject(c) : void 0 === i ? g.resolve(h(void 0, !0)) : (c = (l = a((function() {
                                        return n(i, u)
                                    }))).value, l.error ? g.reject(c) : e ? g.resolve(c) : g.resolve(c).then((function(e) {
                                        return o(e), h(void 0, !0)
                                    })))
                                }
                            })
                        },
                        k = w(!0),
                        S = w(!1);
                    s(S, y, "Async Iterator Helper"), e.exports = function(e, t) {
                        var r = function(r, n) {
                            n ? (n.iterator = r.iterator, n.next = r.next) : n = r, n.type = t ? m : _, n.nextHandler = e, n.counter = 0, n.done = !1, b(this, n)
                        };
                        return r.prototype = t ? k : S, r
                    }
                },
                9937: (e, t, r) => {
                    "use strict";
                    var n = r(970),
                        a = r(9573),
                        o = r(7981),
                        i = r(3021),
                        s = r(5396),
                        c = r(2555),
                        u = r(6302),
                        l = r(86),
                        p = function(e) {
                            var t = 0 == e,
                                r = 1 == e,
                                p = 2 == e,
                                f = 3 == e;
                            return function(e, d, h) {
                                var v = u(e),
                                    g = c("Promise"),
                                    y = v.iterator,
                                    _ = v.next,
                                    m = 0,
                                    b = void 0 !== d;
                                return !b && t || a(d), new g((function(e, a) {
                                    var c = function(e) {
                                            l(y, a, e, a)
                                        },
                                        u = function() {
                                            try {
                                                if (b) try {
                                                    s(m)
                                                } catch (e) {
                                                    c(e)
                                                }
                                                g.resolve(o(n(_, y))).then((function(n) {
                                                    try {
                                                        if (o(n).done) t ? (h.length = m, e(h)) : e(!f && (p || void 0));
                                                        else {
                                                            var s = n.value;
                                                            try {
                                                                if (b) {
                                                                    var v = d(s, m),
                                                                        _ = function(n) {
                                                                            if (r) u();
                                                                            else if (p) n ? u() : l(y, e, !1, a);
                                                                            else if (t) try {
                                                                                h[m++] = n, u()
                                                                            } catch (e) {
                                                                                c(e)
                                                                            } else n ? l(y, e, f || s, a) : u()
                                                                        };
                                                                    i(v) ? g.resolve(v).then(_, c) : _(v)
                                                                } else h[m++] = s, u()
                                                            } catch (e) {
                                                                c(e)
                                                            }
                                                        }
                                                    } catch (e) {
                                                        a(e)
                                                    }
                                                }), a)
                                            } catch (e) {
                                                a(e)
                                            }
                                        };
                                    u()
                                }))
                            }
                        };
                    e.exports = {
                        toArray: p(0),
                        forEach: p(1),
                        every: p(2),
                        some: p(3),
                        find: p(4)
                    }
                },
                3101: (e, t, r) => {
                    "use strict";
                    var n = r(970),
                        a = r(9573),
                        o = r(7981),
                        i = r(3021),
                        s = r(6302),
                        c = r(5817),
                        u = r(2549),
                        l = r(86),
                        p = c((function(e) {
                            var t = this,
                                r = t.iterator,
                                a = t.mapper;
                            return new e((function(s, c) {
                                var p = function(e) {
                                        t.done = !0, c(e)
                                    },
                                    f = function(e) {
                                        l(r, p, e, p)
                                    };
                                e.resolve(o(n(t.next, r))).then((function(r) {
                                    try {
                                        if (o(r).done) t.done = !0, s(u(void 0, !0));
                                        else {
                                            var n = r.value;
                                            try {
                                                var c = a(n, t.counter++),
                                                    l = function(e) {
                                                        s(u(e, !1))
                                                    };
                                                i(c) ? e.resolve(c).then(l, f) : l(c)
                                            } catch (e) {
                                                f(e)
                                            }
                                        }
                                    } catch (e) {
                                        p(e)
                                    }
                                }), p)
                            }))
                        }));
                    e.exports = function(e) {
                        return new p(s(this), {
                            mapper: a(e)
                        })
                    }
                },
                2342: (e, t, r) => {
                    var a, o, i = r(2689),
                        s = r(1703),
                        c = r(9548),
                        u = r(3583),
                        l = r(5616),
                        p = r(9146),
                        f = r(6250),
                        d = r(5231),
                        h = "USE_FUNCTION_CONSTRUCTOR",
                        v = f("asyncIterator"),
                        g = i.AsyncIterator,
                        y = s.AsyncIteratorPrototype;
                    if (y) a = y;
                    else if (c(g)) a = g.prototype;
                    else if (s[h] || i[h]) try {
                        o = l(l(l(n("return async function*(){}()")()))), l(o) === Object.prototype && (a = o)
                    } catch (e) {}
                    a ? d && (a = u(a)) : a = {}, c(a[v]) || p(a, v, (function() {
                        return this
                    })), e.exports = a
                },
                6784: (e, t, r) => {
                    var n = r(970),
                        a = r(5817);
                    e.exports = a((function() {
                        return n(this.next, this.iterator)
                    }), !0)
                },
                579: (e, t, r) => {
                    var n = r(7981),
                        a = r(7087);
                    e.exports = function(e, t, r, o) {
                        try {
                            return o ? t(n(r)[0], r[1]) : t(r)
                        } catch (t) {
                            a(e, "throw", t)
                        }
                    }
                },
                2176: (e, t, r) => {
                    var n = r(6250)("iterator"),
                        a = !1;
                    try {
                        var o = 0,
                            i = {
                                next: function() {
                                    return {
                                        done: !!o++
                                    }
                                },
                                return: function() {
                                    a = !0
                                }
                            };
                        i[n] = function() {
                            return this
                        }, Array.from(i, (function() {
                            throw 2
                        }))
                    } catch (e) {}
                    e.exports = function(e, t) {
                        if (!t && !a) return !1;
                        var r = !1;
                        try {
                            var o = {};
                            o[n] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: r = !0
                                        }
                                    }
                                }
                            }, e(o)
                        } catch (e) {}
                        return r
                    }
                },
                1335: (e, t, r) => {
                    var n = r(6619),
                        a = n({}.toString),
                        o = n("".slice);
                    e.exports = function(e) {
                        return o(a(e), 8, -1)
                    }
                },
                7221: (e, t, r) => {
                    var n = r(8024),
                        a = r(9548),
                        o = r(1335),
                        i = r(6250)("toStringTag"),
                        s = Object,
                        c = "Arguments" == o(function() {
                            return arguments
                        }());
                    e.exports = n ? o : function(e) {
                        var t, r, n;
                        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
                            try {
                                return e[t]
                            } catch (e) {}
                        }(t = s(e), i)) ? r : c ? o(t) : "Object" == (n = o(t)) && a(t.callee) ? "Arguments" : n
                    }
                },
                4361: (e, t, r) => {
                    var n = r(5835),
                        a = r(313),
                        o = r(7812),
                        i = r(2468);
                    e.exports = function(e, t, r) {
                        for (var s = a(t), c = i.f, u = o.f, l = 0; l < s.length; l++) {
                            var p = s[l];
                            n(e, p) || r && n(r, p) || c(e, p, u(t, p))
                        }
                    }
                },
                1086: (e, t, r) => {
                    var n = r(9835);
                    e.exports = !n((function() {
                        function e() {}
                        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                    }))
                },
                2549: e => {
                    e.exports = function(e, t) {
                        return {
                            value: e,
                            done: t
                        }
                    }
                },
                1720: (e, t, r) => {
                    var n = r(8521),
                        a = r(2468),
                        o = r(3179);
                    e.exports = n ? function(e, t, r) {
                        return a.f(e, t, o(1, r))
                    } : function(e, t, r) {
                        return e[t] = r, e
                    }
                },
                3179: e => {
                    e.exports = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    }
                },
                9117: (e, t, r) => {
                    "use strict";
                    var n = r(7880),
                        a = r(2468),
                        o = r(3179);
                    e.exports = function(e, t, r) {
                        var i = n(t);
                        i in e ? a.f(e, i, o(0, r)) : e[i] = r
                    }
                },
                4173: (e, t, r) => {
                    var n = r(9424),
                        a = r(2468);
                    e.exports = function(e, t, r) {
                        return r.get && n(r.get, t, {
                            getter: !0
                        }), r.set && n(r.set, t, {
                            setter: !0
                        }), a.f(e, t, r)
                    }
                },
                9146: (e, t, r) => {
                    var n = r(9548),
                        a = r(2468),
                        o = r(9424),
                        i = r(4017);
                    e.exports = function(e, t, r, s) {
                        s || (s = {});
                        var c = s.enumerable,
                            u = void 0 !== s.name ? s.name : t;
                        if (n(r) && o(r, u, s), s.global) c ? e[t] = r : i(t, r);
                        else {
                            try {
                                s.unsafe ? e[t] && (c = !0) : delete e[t]
                            } catch (e) {}
                            c ? e[t] = r : a.f(e, t, {
                                value: r,
                                enumerable: !1,
                                configurable: !s.nonConfigurable,
                                writable: !s.nonWritable
                            })
                        }
                        return e
                    }
                },
                2669: (e, t, r) => {
                    var n = r(9146);
                    e.exports = function(e, t, r) {
                        for (var a in t) n(e, a, t[a], r);
                        return e
                    }
                },
                4017: (e, t, r) => {
                    var n = r(2689),
                        a = Object.defineProperty;
                    e.exports = function(e, t) {
                        try {
                            a(n, e, {
                                value: t,
                                configurable: !0,
                                writable: !0
                            })
                        } catch (r) {
                            n[e] = t
                        }
                        return t
                    }
                },
                9580: (e, t, r) => {
                    "use strict";
                    var n = r(1002),
                        a = TypeError;
                    e.exports = function(e, t) {
                        if (!delete e[t]) throw a("Cannot delete property " + n(t) + " of " + n(e))
                    }
                },
                8521: (e, t, r) => {
                    var n = r(9835);
                    e.exports = !n((function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7
                            }
                        })[1]
                    }))
                },
                806: e => {
                    var t = "object" == typeof document && document.all,
                        r = void 0 === t && void 0 !== t;
                    e.exports = {
                        all: t,
                        IS_HTMLDDA: r
                    }
                },
                7345: (e, t, r) => {
                    var n = r(2689),
                        a = r(3021),
                        o = n.document,
                        i = a(o) && a(o.createElement);
                    e.exports = function(e) {
                        return i ? o.createElement(e) : {}
                    }
                },
                5396: e => {
                    var t = TypeError;
                    e.exports = function(e) {
                        if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
                        return e
                    }
                },
                3262: (e, t, r) => {
                    var n = r(350).match(/firefox\/(\d+)/i);
                    e.exports = !!n && +n[1]
                },
                9529: (e, t, r) => {
                    var n = r(687),
                        a = r(8976);
                    e.exports = !n && !a && "object" == typeof window && "object" == typeof document
                },
                687: e => {
                    e.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
                },
                1353: (e, t, r) => {
                    var n = r(350);
                    e.exports = /MSIE|Trident/.test(n)
                },
                4556: (e, t, r) => {
                    var n = r(350);
                    e.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble
                },
                8604: (e, t, r) => {
                    var n = r(350);
                    e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
                },
                8976: (e, t, r) => {
                    var n = r(1335);
                    e.exports = "undefined" != typeof process && "process" == n(process)
                },
                5114: (e, t, r) => {
                    var n = r(350);
                    e.exports = /web0s(?!.*chrome)/i.test(n)
                },
                350: e => {
                    e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
                },
                9168: (e, t, r) => {
                    var n, a, o = r(2689),
                        i = r(350),
                        s = o.process,
                        c = o.Deno,
                        u = s && s.versions || c && c.version,
                        l = u && u.v8;
                    l && (a = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !a && i && (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = i.match(/Chrome\/(\d+)/)) && (a = +n[1]), e.exports = a
                },
                2842: (e, t, r) => {
                    var n = r(350).match(/AppleWebKit\/(\d+)\./);
                    e.exports = !!n && +n[1]
                },
                9682: (e, t, r) => {
                    var n = r(2689);
                    e.exports = function(e) {
                        return n[e].prototype
                    }
                },
                8288: e => {
                    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
                },
                1496: (e, t, r) => {
                    var n = r(6619),
                        a = Error,
                        o = n("".replace),
                        i = String(a("zxcasd").stack),
                        s = /\n\s*at [^:]*:[^\n]*/,
                        c = s.test(i);
                    e.exports = function(e, t) {
                        if (c && "string" == typeof e && !a.prepareStackTrace)
                            for (; t--;) e = o(e, s, "");
                        return e
                    }
                },
                9431: (e, t, r) => {
                    var n = r(1720),
                        a = r(1496),
                        o = r(9764),
                        i = Error.captureStackTrace;
                    e.exports = function(e, t, r, s) {
                        o && (i ? i(e, t) : n(e, "stack", a(r, s)))
                    }
                },
                9764: (e, t, r) => {
                    var n = r(9835),
                        a = r(3179);
                    e.exports = !n((function() {
                        var e = Error("a");
                        return !("stack" in e) || (Object.defineProperty(e, "stack", a(1, 7)), 7 !== e.stack)
                    }))
                },
                5077: (e, t, r) => {
                    var n = r(2689),
                        a = r(7812).f,
                        o = r(1720),
                        i = r(9146),
                        s = r(4017),
                        c = r(4361),
                        u = r(6724);
                    e.exports = function(e, t) {
                        var r, l, p, f, d, h = e.target,
                            v = e.global,
                            g = e.stat;
                        if (r = v ? n : g ? n[h] || s(h, {}) : (n[h] || {}).prototype)
                            for (l in t) {
                                if (f = t[l], p = e.dontCallGetSet ? (d = a(r, l)) && d.value : r[l], !u(v ? l : h + (g ? "." : "#") + l, e.forced) && void 0 !== p) {
                                    if (typeof f == typeof p) continue;
                                    c(f, p)
                                }(e.sham || p && p.sham) && o(f, "sham", !0), i(r, l, f, e)
                            }
                    }
                },
                9835: e => {
                    e.exports = function(e) {
                        try {
                            return !!e()
                        } catch (e) {
                            return !0
                        }
                    }
                },
                1552: (e, t, r) => {
                    "use strict";
                    r(5403);
                    var n = r(3482),
                        a = r(9146),
                        o = r(8627),
                        i = r(9835),
                        s = r(6250),
                        c = r(1720),
                        u = s("species"),
                        l = RegExp.prototype;
                    e.exports = function(e, t, r, p) {
                        var f = s(e),
                            d = !i((function() {
                                var t = {};
                                return t[f] = function() {
                                    return 7
                                }, 7 != "" [e](t)
                            })),
                            h = d && !i((function() {
                                var t = !1,
                                    r = /a/;
                                return "split" === e && ((r = {}).constructor = {}, r.constructor[u] = function() {
                                    return r
                                }, r.flags = "", r[f] = /./ [f]), r.exec = function() {
                                    return t = !0, null
                                }, r[f](""), !t
                            }));
                        if (!d || !h || r) {
                            var v = n(/./ [f]),
                                g = t(f, "" [e], (function(e, t, r, a, i) {
                                    var s = n(e),
                                        c = t.exec;
                                    return c === o || c === l.exec ? d && !i ? {
                                        done: !0,
                                        value: v(t, r, a)
                                    } : {
                                        done: !0,
                                        value: s(r, t, a)
                                    } : {
                                        done: !1
                                    }
                                }));
                            a(String.prototype, e, g[0]), a(l, f, g[1])
                        }
                        p && c(l[f], "sham", !0)
                    }
                },
                352: (e, t, r) => {
                    var a = r(9966),
                        o = n.prototype,
                        i = o.apply,
                        s = o.call;
                    e.exports = "object" == typeof Reflect && Reflect.apply || (a ? s.bind(i) : function() {
                        return s.apply(i, arguments)
                    })
                },
                8995: (e, t, r) => {
                    var n = r(3482),
                        a = r(9573),
                        o = r(9966),
                        i = n(n.bind);
                    e.exports = function(e, t) {
                        return a(e), void 0 === t ? e : o ? i(e, t) : function() {
                            return e.apply(t, arguments)
                        }
                    }
                },
                9966: (e, t, r) => {
                    var n = r(9835);
                    e.exports = !n((function() {
                        var e = function() {}.bind();
                        return "function" != typeof e || e.hasOwnProperty("prototype")
                    }))
                },
                970: (e, t, r) => {
                    var a = r(9966),
                        o = n.prototype.call;
                    e.exports = a ? o.bind(o) : function() {
                        return o.apply(o, arguments)
                    }
                },
                4046: (e, t, r) => {
                    var a = r(8521),
                        o = r(5835),
                        i = n.prototype,
                        s = a && Object.getOwnPropertyDescriptor,
                        c = o(i, "name"),
                        u = c && "something" === function() {}.name,
                        l = c && (!a || a && s(i, "name").configurable);
                    e.exports = {
                        EXISTS: c,
                        PROPER: u,
                        CONFIGURABLE: l
                    }
                },
                2221: (e, t, r) => {
                    var n = r(6619),
                        a = r(9573);
                    e.exports = function(e, t, r) {
                        try {
                            return n(a(Object.getOwnPropertyDescriptor(e, t)[r]))
                        } catch (e) {}
                    }
                },
                3482: (e, t, r) => {
                    var n = r(1335),
                        a = r(6619);
                    e.exports = function(e) {
                        if ("Function" === n(e)) return a(e)
                    }
                },
                6619: (e, t, r) => {
                    var a = r(9966),
                        o = n.prototype,
                        i = o.call,
                        s = a && o.bind.bind(i, i);
                    e.exports = a ? s : function(e) {
                        return function() {
                            return i.apply(e, arguments)
                        }
                    }
                },
                5968: (e, t, r) => {
                    var n = r(970),
                        a = r(9548),
                        o = r(7981),
                        i = r(6302),
                        s = r(5569),
                        c = r(2317),
                        u = r(6250),
                        l = r(2429),
                        p = u("asyncIterator");
                    e.exports = function(e) {
                        var t, r = o(e),
                            u = !0,
                            f = c(r, p);
                        return a(f) || (f = s(r), u = !1), a(f) ? t = n(f, r) : (t = r, u = !0), o(t), i(u ? t : new l(i(t)))
                    }
                },
                6249: (e, t, r) => {
                    var n = r(970),
                        a = r(2429),
                        o = r(7981),
                        i = r(8631),
                        s = r(6302),
                        c = r(2317),
                        u = r(6250)("asyncIterator");
                    e.exports = function(e, t) {
                        var r = arguments.length < 2 ? c(e, u) : t;
                        return r ? o(n(r, e)) : new a(s(i(e)))
                    }
                },
                2555: (e, t, r) => {
                    var n = r(2689),
                        a = r(9548);
                    e.exports = function(e, t) {
                        return arguments.length < 2 ? (r = n[e], a(r) ? r : void 0) : n[e] && n[e][t];
                        var r
                    }
                },
                6302: (e, t, r) => {
                    var n = r(9573),
                        a = r(7981);
                    e.exports = function(e) {
                        return {
                            iterator: e,
                            next: n(a(e).next)
                        }
                    }
                },
                894: (e, t, r) => {
                    var n = r(970),
                        a = r(9548),
                        o = r(7981),
                        i = r(6302),
                        s = r(5569);
                    e.exports = function(e) {
                        var t = o(e),
                            r = s(t);
                        return i(o(a(r) ? n(r, t) : t))
                    }
                },
                5569: (e, t, r) => {
                    var n = r(7221),
                        a = r(2317),
                        o = r(9799),
                        i = r(807),
                        s = r(6250)("iterator");
                    e.exports = function(e) {
                        if (!o(e)) return a(e, s) || a(e, "@@iterator") || i[n(e)]
                    }
                },
                8631: (e, t, r) => {
                    var n = r(970),
                        a = r(9573),
                        o = r(7981),
                        i = r(1002),
                        s = r(5569),
                        c = TypeError;
                    e.exports = function(e, t) {
                        var r = arguments.length < 2 ? s(e) : t;
                        if (a(r)) return o(n(r, e));
                        throw c(i(e) + " is not iterable")
                    }
                },
                3849: (e, t, r) => {
                    var n = r(6619),
                        a = r(1501),
                        o = r(9548),
                        i = r(1335),
                        s = r(9013),
                        c = n([].push);
                    e.exports = function(e) {
                        if (o(e)) return e;
                        if (a(e)) {
                            for (var t = e.length, r = [], n = 0; n < t; n++) {
                                var u = e[n];
                                "string" == typeof u ? c(r, u) : "number" != typeof u && "Number" != i(u) && "String" != i(u) || c(r, s(u))
                            }
                            var l = r.length,
                                p = !0;
                            return function(e, t) {
                                if (p) return p = !1, t;
                                if (a(this)) return t;
                                for (var n = 0; n < l; n++)
                                    if (r[n] === e) return t
                            }
                        }
                    }
                },
                2317: (e, t, r) => {
                    var n = r(9573),
                        a = r(9799);
                    e.exports = function(e, t) {
                        var r = e[t];
                        return a(r) ? void 0 : n(r)
                    }
                },
                1958: (e, t, r) => {
                    var n = r(9573),
                        a = r(7981),
                        o = r(970),
                        i = r(8299),
                        s = TypeError,
                        c = Math.max,
                        u = function(e, t, r, n) {
                            this.set = e, this.size = t, this.has = r, this.keys = n
                        };
                    u.prototype = {
                        getIterator: function() {
                            return a(o(this.keys, this.set))
                        },
                        includes: function(e) {
                            return o(this.has, this.set, e)
                        }
                    }, e.exports = function(e) {
                        a(e);
                        var t = +e.size;
                        if (t != t) throw s("Invalid size");
                        return new u(e, c(i(t), 0), n(e.has), n(e.keys))
                    }
                },
                2754: (e, t, r) => {
                    var n = r(6619),
                        a = r(18),
                        o = Math.floor,
                        i = n("".charAt),
                        s = n("".replace),
                        c = n("".slice),
                        u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                        l = /\$([$&'`]|\d{1,2})/g;
                    e.exports = function(e, t, r, n, p, f) {
                        var d = r + e.length,
                            h = n.length,
                            v = l;
                        return void 0 !== p && (p = a(p), v = u), s(f, v, (function(a, s) {
                            var u;
                            switch (i(s, 0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return e;
                                case "`":
                                    return c(t, 0, r);
                                case "'":
                                    return c(t, d);
                                case "<":
                                    u = p[c(s, 1, -1)];
                                    break;
                                default:
                                    var l = +s;
                                    if (0 === l) return a;
                                    if (l > h) {
                                        var f = o(l / 10);
                                        return 0 === f ? a : f <= h ? void 0 === n[f - 1] ? i(s, 1) : n[f - 1] + i(s, 1) : a
                                    }
                                    u = n[l - 1]
                            }
                            return void 0 === u ? "" : u
                        }))
                    }
                },
                2689: (e, t, r) => {
                    var a = function(e) {
                        return e && e.Math == Math && e
                    };
                    e.exports = a("object" == typeof globalThis && globalThis) || a("object" == typeof window && window) || a("object" == typeof self && self) || a("object" == typeof r.g && r.g) || function() {
                        return this
                    }() || n("return this")()
                },
                5835: (e, t, r) => {
                    var n = r(6619),
                        a = r(18),
                        o = n({}.hasOwnProperty);
                    e.exports = Object.hasOwn || function(e, t) {
                        return o(a(e), t)
                    }
                },
                1553: e => {
                    e.exports = {}
                },
                7416: e => {
                    e.exports = function(e, t) {
                        try {
                            1 == arguments.length ? console.error(e) : console.error(e, t)
                        } catch (e) {}
                    }
                },
                9856: (e, t, r) => {
                    var n = r(2555);
                    e.exports = n("document", "documentElement")
                },
                1910: (e, t, r) => {
                    var n = r(8521),
                        a = r(9835),
                        o = r(7345);
                    e.exports = !n && !a((function() {
                        return 7 != Object.defineProperty(o("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                },
                8763: e => {
                    var t = Array,
                        r = Math.abs,
                        n = Math.pow,
                        a = Math.floor,
                        o = Math.log,
                        i = Math.LN2;
                    e.exports = {
                        pack: function(e, s, c) {
                            var u, l, p, f = t(c),
                                d = 8 * c - s - 1,
                                h = (1 << d) - 1,
                                v = h >> 1,
                                g = 23 === s ? n(2, -24) - n(2, -77) : 0,
                                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                                _ = 0;
                            for ((e = r(e)) != e || e === 1 / 0 ? (l = e != e ? 1 : 0, u = h) : (u = a(o(e) / i), e * (p = n(2, -u)) < 1 && (u--, p *= 2), (e += u + v >= 1 ? g / p : g * n(2, 1 - v)) * p >= 2 && (u++, p /= 2), u + v >= h ? (l = 0, u = h) : u + v >= 1 ? (l = (e * p - 1) * n(2, s), u += v) : (l = e * n(2, v - 1) * n(2, s), u = 0)); s >= 8;) f[_++] = 255 & l, l /= 256, s -= 8;
                            for (u = u << s | l, d += s; d > 0;) f[_++] = 255 & u, u /= 256, d -= 8;
                            return f[--_] |= 128 * y, f
                        },
                        unpack: function(e, t) {
                            var r, a = e.length,
                                o = 8 * a - t - 1,
                                i = (1 << o) - 1,
                                s = i >> 1,
                                c = o - 7,
                                u = a - 1,
                                l = e[u--],
                                p = 127 & l;
                            for (l >>= 7; c > 0;) p = 256 * p + e[u--], c -= 8;
                            for (r = p & (1 << -c) - 1, p >>= -c, c += t; c > 0;) r = 256 * r + e[u--], c -= 8;
                            if (0 === p) p = 1 - s;
                            else {
                                if (p === i) return r ? NaN : l ? -1 / 0 : 1 / 0;
                                r += n(2, t), p -= s
                            }
                            return (l ? -1 : 1) * r * n(2, p - t)
                        }
                    }
                },
                8582: (e, t, r) => {
                    var n = r(6619),
                        a = r(9835),
                        o = r(1335),
                        i = Object,
                        s = n("".split);
                    e.exports = a((function() {
                        return !i("z").propertyIsEnumerable(0)
                    })) ? function(e) {
                        return "String" == o(e) ? s(e, "") : i(e)
                    } : i
                },
                3570: (e, t, r) => {
                    var n = r(9548),
                        a = r(3021),
                        o = r(1672);
                    e.exports = function(e, t, r) {
                        var i, s;
                        return o && n(i = t.constructor) && i !== r && a(s = i.prototype) && s !== r.prototype && o(e, s), e
                    }
                },
                2958: (e, t, r) => {
                    var a = r(6619),
                        o = r(9548),
                        i = r(1703),
                        s = a(n.toString);
                    o(i.inspectSource) || (i.inspectSource = function(e) {
                        return s(e)
                    }), e.exports = i.inspectSource
                },
                5016: (e, t, r) => {
                    var n = r(3021),
                        a = r(1720);
                    e.exports = function(e, t) {
                        n(t) && "cause" in t && a(e, "cause", t.cause)
                    }
                },
                7832: (e, t, r) => {
                    var n, a, o, i = r(1894),
                        s = r(2689),
                        c = r(3021),
                        u = r(1720),
                        l = r(5835),
                        p = r(1703),
                        f = r(5923),
                        d = r(1553),
                        h = "Object already initialized",
                        v = s.TypeError,
                        g = s.WeakMap;
                    if (i || p.state) {
                        var y = p.state || (p.state = new g);
                        y.get = y.get, y.has = y.has, y.set = y.set, n = function(e, t) {
                            if (y.has(e)) throw v(h);
                            return t.facade = e, y.set(e, t), t
                        }, a = function(e) {
                            return y.get(e) || {}
                        }, o = function(e) {
                            return y.has(e)
                        }
                    } else {
                        var _ = f("state");
                        d[_] = !0, n = function(e, t) {
                            if (l(e, _)) throw v(h);
                            return t.facade = e, u(e, _, t), t
                        }, a = function(e) {
                            return l(e, _) ? e[_] : {}
                        }, o = function(e) {
                            return l(e, _)
                        }
                    }
                    e.exports = {
                        set: n,
                        get: a,
                        has: o,
                        enforce: function(e) {
                            return o(e) ? a(e) : n(e, {})
                        },
                        getterFor: function(e) {
                            return function(t) {
                                var r;
                                if (!c(t) || (r = a(t)).type !== e) throw v("Incompatible receiver, " + e + " required");
                                return r
                            }
                        }
                    }
                },
                4713: (e, t, r) => {
                    var n = r(6250),
                        a = r(807),
                        o = n("iterator"),
                        i = Array.prototype;
                    e.exports = function(e) {
                        return void 0 !== e && (a.Array === e || i[o] === e)
                    }
                },
                1501: (e, t, r) => {
                    var n = r(1335);
                    e.exports = Array.isArray || function(e) {
                        return "Array" == n(e)
                    }
                },
                2488: (e, t, r) => {
                    var n = r(7221);
                    e.exports = function(e) {
                        var t = n(e);
                        return "BigInt64Array" == t || "BigUint64Array" == t
                    }
                },
                9548: (e, t, r) => {
                    var n = r(806),
                        a = n.all;
                    e.exports = n.IS_HTMLDDA ? function(e) {
                        return "function" == typeof e || e === a
                    } : function(e) {
                        return "function" == typeof e
                    }
                },
                1908: (e, t, r) => {
                    var n = r(6619),
                        a = r(9835),
                        o = r(9548),
                        i = r(7221),
                        s = r(2555),
                        c = r(2958),
                        u = function() {},
                        l = [],
                        p = s("Reflect", "construct"),
                        f = /^\s*(?:class|function)\b/,
                        d = n(f.exec),
                        h = !f.exec(u),
                        v = function(e) {
                            if (!o(e)) return !1;
                            try {
                                return p(u, l, e), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        g = function(e) {
                            if (!o(e)) return !1;
                            switch (i(e)) {
                                case "AsyncFunction":
                                case "GeneratorFunction":
                                case "AsyncGeneratorFunction":
                                    return !1
                            }
                            try {
                                return h || !!d(f, c(e))
                            } catch (e) {
                                return !0
                            }
                        };
                    g.sham = !0, e.exports = !p || a((function() {
                        var e;
                        return v(v.call) || !v(Object) || !v((function() {
                            e = !0
                        })) || e
                    })) ? g : v
                },
                6724: (e, t, r) => {
                    var n = r(9835),
                        a = r(9548),
                        o = /#|\.prototype\./,
                        i = function(e, t) {
                            var r = c[s(e)];
                            return r == l || r != u && (a(t) ? n(t) : !!t)
                        },
                        s = i.normalize = function(e) {
                            return String(e).replace(o, ".").toLowerCase()
                        },
                        c = i.data = {},
                        u = i.NATIVE = "N",
                        l = i.POLYFILL = "P";
                    e.exports = i
                },
                3781: (e, t, r) => {
                    var n = r(3021),
                        a = Math.floor;
                    e.exports = Number.isInteger || function(e) {
                        return !n(e) && isFinite(e) && a(e) === e
                    }
                },
                9799: e => {
                    e.exports = function(e) {
                        return null == e
                    }
                },
                3021: (e, t, r) => {
                    var n = r(9548),
                        a = r(806),
                        o = a.all;
                    e.exports = a.IS_HTMLDDA ? function(e) {
                        return "object" == typeof e ? null !== e : n(e) || e === o
                    } : function(e) {
                        return "object" == typeof e ? null !== e : n(e)
                    }
                },
                5231: e => {
                    e.exports = !1
                },
                5781: (e, t, r) => {
                    var n = r(3021),
                        a = r(1335),
                        o = r(6250)("match");
                    e.exports = function(e) {
                        var t;
                        return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == a(e))
                    }
                },
                7870: (e, t, r) => {
                    var n = r(2555),
                        a = r(9548),
                        o = r(631),
                        i = r(7079),
                        s = Object;
                    e.exports = i ? function(e) {
                        return "symbol" == typeof e
                    } : function(e) {
                        var t = n("Symbol");
                        return a(t) && o(t.prototype, s(e))
                    }
                },
                1700: (e, t, r) => {
                    var n = r(970);
                    e.exports = function(e, t, r) {
                        for (var a, o, i = r || e.next; !(a = n(i, e)).done;)
                            if (void 0 !== (o = t(a.value))) return o
                    }
                },
                4760: (e, t, r) => {
                    var n = r(8995),
                        a = r(970),
                        o = r(7981),
                        i = r(1002),
                        s = r(4713),
                        c = r(56),
                        u = r(631),
                        l = r(8631),
                        p = r(5569),
                        f = r(7087),
                        d = TypeError,
                        h = function(e, t) {
                            this.stopped = e, this.result = t
                        },
                        v = h.prototype;
                    e.exports = function(e, t, r) {
                        var g, y, _, m, b, w, k, S = r && r.that,
                            I = !(!r || !r.AS_ENTRIES),
                            x = !(!r || !r.IS_RECORD),
                            T = !(!r || !r.IS_ITERATOR),
                            A = !(!r || !r.INTERRUPTED),
                            C = n(t, S),
                            E = function(e) {
                                return g && f(g, "normal", e), new h(!0, e)
                            },
                            P = function(e) {
                                return I ? (o(e), A ? C(e[0], e[1], E) : C(e[0], e[1])) : A ? C(e, E) : C(e)
                            };
                        if (x) g = e.iterator;
                        else if (T) g = e;
                        else {
                            if (!(y = p(e))) throw d(i(e) + " is not iterable");
                            if (s(y)) {
                                for (_ = 0, m = c(e); m > _; _++)
                                    if ((b = P(e[_])) && u(v, b)) return b;
                                return new h(!1)
                            }
                            g = l(e, y)
                        }
                        for (w = x ? e.next : g.next; !(k = a(w, g)).done;) {
                            try {
                                b = P(k.value)
                            } catch (e) {
                                f(g, "throw", e)
                            }
                            if ("object" == typeof b && b && u(v, b)) return b
                        }
                        return new h(!1)
                    }
                },
                7087: (e, t, r) => {
                    var n = r(970),
                        a = r(7981),
                        o = r(2317);
                    e.exports = function(e, t, r) {
                        var i, s;
                        a(e);
                        try {
                            if (!(i = o(e, "return"))) {
                                if ("throw" === t) throw r;
                                return r
                            }
                            i = n(i, e)
                        } catch (e) {
                            s = !0, i = e
                        }
                        if ("throw" === t) throw r;
                        if (s) throw i;
                        return a(i), r
                    }
                },
                4610: (e, t, r) => {
                    "use strict";
                    var n = r(7357).IteratorPrototype,
                        a = r(3583),
                        o = r(3179),
                        i = r(4029),
                        s = r(807),
                        c = function() {
                            return this
                        };
                    e.exports = function(e, t, r, u) {
                        var l = t + " Iterator";
                        return e.prototype = a(n, {
                            next: o(+!u, r)
                        }), i(e, l, !1, !0), s[l] = c, e
                    }
                },
                3389: (e, t, r) => {
                    "use strict";
                    var n = r(970),
                        a = r(3583),
                        o = r(1720),
                        i = r(2669),
                        s = r(6250),
                        c = r(7832),
                        u = r(2317),
                        l = r(7357).IteratorPrototype,
                        p = r(2549),
                        f = r(7087),
                        d = s("toStringTag"),
                        h = "IteratorHelper",
                        v = "WrapForValidIterator",
                        g = c.set,
                        y = function(e) {
                            var t = c.getterFor(e ? v : h);
                            return i(a(l), {
                                next: function() {
                                    var r = t(this);
                                    if (e) return r.nextHandler();
                                    try {
                                        var n = r.done ? void 0 : r.nextHandler();
                                        return p(n, r.done)
                                    } catch (e) {
                                        throw r.done = !0, e
                                    }
                                },
                                return: function() {
                                    var r = t(this),
                                        a = r.iterator;
                                    if (r.done = !0, e) {
                                        var o = u(a, "return");
                                        return o ? n(o, a) : p(void 0, !0)
                                    }
                                    if (r.inner) try {
                                        f(r.inner.iterator, "normal")
                                    } catch (e) {
                                        return f(a, "throw", e)
                                    }
                                    return f(a, "normal"), p(void 0, !0)
                                }
                            })
                        },
                        _ = y(!0),
                        m = y(!1);
                    o(m, d, "Iterator Helper"), e.exports = function(e, t) {
                        var r = function(r, n) {
                            n ? (n.iterator = r.iterator, n.next = r.next) : n = r, n.type = t ? v : h, n.nextHandler = e, n.counter = 0, n.done = !1, g(this, n)
                        };
                        return r.prototype = t ? _ : m, r
                    }
                },
                5504: (e, t, r) => {
                    "use strict";
                    var n = r(970),
                        a = r(9573),
                        o = r(7981),
                        i = r(6302),
                        s = r(3389),
                        c = r(579),
                        u = s((function() {
                            var e = this.iterator,
                                t = o(n(this.next, e));
                            if (!(this.done = !!t.done)) return c(e, this.mapper, [t.value, this.counter++], !0)
                        }));
                    e.exports = function(e) {
                        return new u(i(this), {
                            mapper: a(e)
                        })
                    }
                },
                7357: (e, t, r) => {
                    "use strict";
                    var n, a, o, i = r(9835),
                        s = r(9548),
                        c = r(3021),
                        u = r(3583),
                        l = r(5616),
                        p = r(9146),
                        f = r(6250),
                        d = r(5231),
                        h = f("iterator"),
                        v = !1;
                    [].keys && ("next" in (o = [].keys()) ? (a = l(l(o))) !== Object.prototype && (n = a) : v = !0), !c(n) || i((function() {
                        var e = {};
                        return n[h].call(e) !== e
                    })) ? n = {} : d && (n = u(n)), s(n[h]) || p(n, h, (function() {
                        return this
                    })), e.exports = {
                        IteratorPrototype: n,
                        BUGGY_SAFARI_ITERATORS: v
                    }
                },
                807: e => {
                    e.exports = {}
                },
                56: (e, t, r) => {
                    var n = r(6443);
                    e.exports = function(e) {
                        return n(e.length)
                    }
                },
                9424: (e, t, r) => {
                    var a = r(6619),
                        o = r(9835),
                        i = r(9548),
                        s = r(5835),
                        c = r(8521),
                        u = r(4046).CONFIGURABLE,
                        l = r(2958),
                        p = r(7832),
                        f = p.enforce,
                        d = p.get,
                        h = String,
                        v = Object.defineProperty,
                        g = a("".slice),
                        y = a("".replace),
                        _ = a([].join),
                        m = c && !o((function() {
                            return 8 !== v((function() {}), "length", {
                                value: 8
                            }).length
                        })),
                        b = String(String).split("String"),
                        w = e.exports = function(e, t, r) {
                            "Symbol(" === g(h(t), 0, 7) && (t = "[" + y(h(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!s(e, "name") || u && e.name !== t) && (c ? v(e, "name", {
                                value: t,
                                configurable: !0
                            }) : e.name = t), m && r && s(r, "arity") && e.length !== r.arity && v(e, "length", {
                                value: r.arity
                            });
                            try {
                                r && s(r, "constructor") && r.constructor ? c && v(e, "prototype", {
                                    writable: !1
                                }) : e.prototype && (e.prototype = void 0)
                            } catch (e) {}
                            var n = f(e);
                            return s(n, "source") || (n.source = _(b, "string" == typeof t ? t : "")), e
                        };
                    n.prototype.toString = w((function() {
                        return i(this) && d(this).source || l(this)
                    }), "toString")
                },
                8017: (e, t, r) => {
                    var n = r(6619),
                        a = Map.prototype;
                    e.exports = {
                        Map: Map,
                        set: n(a.set),
                        get: n(a.get),
                        has: n(a.has),
                        remove: n(a.delete),
                        proto: a
                    }
                },
                2707: e => {
                    var t = Math.ceil,
                        r = Math.floor;
                    e.exports = Math.trunc || function(e) {
                        var n = +e;
                        return (n > 0 ? r : t)(n)
                    }
                },
                9722: (e, t, r) => {
                    var n, a, o, i, s, c = r(2689),
                        u = r(8995),
                        l = r(7812).f,
                        p = r(3233).set,
                        f = r(2576),
                        d = r(8604),
                        h = r(4556),
                        v = r(5114),
                        g = r(8976),
                        y = c.MutationObserver || c.WebKitMutationObserver,
                        _ = c.document,
                        m = c.process,
                        b = c.Promise,
                        w = l(c, "queueMicrotask"),
                        k = w && w.value;
                    if (!k) {
                        var S = new f,
                            I = function() {
                                var e, t;
                                for (g && (e = m.domain) && e.exit(); t = S.get();) try {
                                    t()
                                } catch (e) {
                                    throw S.head && n(), e
                                }
                                e && e.enter()
                            };
                        d || g || v || !y || !_ ? !h && b && b.resolve ? ((i = b.resolve(void 0)).constructor = b, s = u(i.then, i), n = function() {
                            s(I)
                        }) : g ? n = function() {
                            m.nextTick(I)
                        } : (p = u(p, c), n = function() {
                            p(I)
                        }) : (a = !0, o = _.createTextNode(""), new y(I).observe(o, {
                            characterData: !0
                        }), n = function() {
                            o.data = a = !a
                        }), k = function(e) {
                            S.head || n(), S.add(e)
                        }
                    }
                    e.exports = k
                },
                9203: (e, t, r) => {
                    "use strict";
                    var n = r(9573),
                        a = TypeError,
                        o = function(e) {
                            var t, r;
                            this.promise = new e((function(e, n) {
                                if (void 0 !== t || void 0 !== r) throw a("Bad Promise constructor");
                                t = e, r = n
                            })), this.resolve = n(t), this.reject = n(r)
                        };
                    e.exports.f = function(e) {
                        return new o(e)
                    }
                },
                8364: (e, t, r) => {
                    var n = r(9013);
                    e.exports = function(e, t) {
                        return void 0 === e ? arguments.length < 2 ? "" : t : n(e)
                    }
                },
                9024: e => {
                    var t = RangeError;
                    e.exports = function(e) {
                        if (e == e) return e;
                        throw t("NaN is not allowed")
                    }
                },
                3583: (e, t, r) => {
                    var n, a = r(7981),
                        o = r(4002),
                        i = r(8288),
                        s = r(1553),
                        c = r(9856),
                        u = r(7345),
                        l = r(5923),
                        p = "prototype",
                        f = "script",
                        d = l("IE_PROTO"),
                        h = function() {},
                        v = function(e) {
                            return "<" + f + ">" + e + "</" + f + ">"
                        },
                        g = function(e) {
                            e.write(v("")), e.close();
                            var t = e.parentWindow.Object;
                            return e = null, t
                        },
                        y = function() {
                            try {
                                n = new ActiveXObject("htmlfile")
                            } catch (e) {}
                            var e, t, r;
                            y = "undefined" != typeof document ? document.domain && n ? g(n) : (t = u("iframe"), r = "java" + f + ":", t.style.display = "none", c.appendChild(t), t.src = String(r), (e = t.contentWindow.document).open(), e.write(v("document.F=Object")), e.close(), e.F) : g(n);
                            for (var a = i.length; a--;) delete y[p][i[a]];
                            return y()
                        };
                    s[d] = !0, e.exports = Object.create || function(e, t) {
                        var r;
                        return null !== e ? (h[p] = a(e), r = new h, h[p] = null, r[d] = e) : r = y(), void 0 === t ? r : o.f(r, t)
                    }
                },
                4002: (e, t, r) => {
                    var n = r(8521),
                        a = r(6144),
                        o = r(2468),
                        i = r(7981),
                        s = r(7417),
                        c = r(549);
                    t.f = n && !a ? Object.defineProperties : function(e, t) {
                        i(e);
                        for (var r, n = s(t), a = c(t), u = a.length, l = 0; u > l;) o.f(e, r = a[l++], n[r]);
                        return e
                    }
                },
                2468: (e, t, r) => {
                    var n = r(8521),
                        a = r(1910),
                        o = r(6144),
                        i = r(7981),
                        s = r(7880),
                        c = TypeError,
                        u = Object.defineProperty,
                        l = Object.getOwnPropertyDescriptor,
                        p = "enumerable",
                        f = "configurable",
                        d = "writable";
                    t.f = n ? o ? function(e, t, r) {
                        if (i(e), t = s(t), i(r), "function" == typeof e && "prototype" === t && "value" in r && d in r && !r[d]) {
                            var n = l(e, t);
                            n && n[d] && (e[t] = r.value, r = {
                                configurable: f in r ? r[f] : n[f],
                                enumerable: p in r ? r[p] : n[p],
                                writable: !1
                            })
                        }
                        return u(e, t, r)
                    } : u : function(e, t, r) {
                        if (i(e), t = s(t), i(r), a) try {
                            return u(e, t, r)
                        } catch (e) {}
                        if ("get" in r || "set" in r) throw c("Accessors not supported");
                        return "value" in r && (e[t] = r.value), e
                    }
                },
                7812: (e, t, r) => {
                    var n = r(8521),
                        a = r(970),
                        o = r(4423),
                        i = r(3179),
                        s = r(7417),
                        c = r(7880),
                        u = r(5835),
                        l = r(1910),
                        p = Object.getOwnPropertyDescriptor;
                    t.f = n ? p : function(e, t) {
                        if (e = s(e), t = c(t), l) try {
                            return p(e, t)
                        } catch (e) {}
                        if (u(e, t)) return i(!a(o.f, e, t), e[t])
                    }
                },
                4161: (e, t, r) => {
                    var n = r(5147),
                        a = r(8288).concat("length", "prototype");
                    t.f = Object.getOwnPropertyNames || function(e) {
                        return n(e, a)
                    }
                },
                4644: (e, t) => {
                    t.f = Object.getOwnPropertySymbols
                },
                5616: (e, t, r) => {
                    var n = r(5835),
                        a = r(9548),
                        o = r(18),
                        i = r(5923),
                        s = r(1086),
                        c = i("IE_PROTO"),
                        u = Object,
                        l = u.prototype;
                    e.exports = s ? u.getPrototypeOf : function(e) {
                        var t = o(e);
                        if (n(t, c)) return t[c];
                        var r = t.constructor;
                        return a(r) && t instanceof r ? r.prototype : t instanceof u ? l : null
                    }
                },
                631: (e, t, r) => {
                    var n = r(6619);
                    e.exports = n({}.isPrototypeOf)
                },
                5147: (e, t, r) => {
                    var n = r(6619),
                        a = r(5835),
                        o = r(7417),
                        i = r(5379).indexOf,
                        s = r(1553),
                        c = n([].push);
                    e.exports = function(e, t) {
                        var r, n = o(e),
                            u = 0,
                            l = [];
                        for (r in n) !a(s, r) && a(n, r) && c(l, r);
                        for (; t.length > u;) a(n, r = t[u++]) && (~i(l, r) || c(l, r));
                        return l
                    }
                },
                549: (e, t, r) => {
                    var n = r(5147),
                        a = r(8288);
                    e.exports = Object.keys || function(e) {
                        return n(e, a)
                    }
                },
                4423: (e, t) => {
                    "use strict";
                    var r = {}.propertyIsEnumerable,
                        n = Object.getOwnPropertyDescriptor,
                        a = n && !r.call({
                            1: 2
                        }, 1);
                    t.f = a ? function(e) {
                        var t = n(this, e);
                        return !!t && t.enumerable
                    } : r
                },
                1672: (e, t, r) => {
                    var n = r(2221),
                        a = r(7981),
                        o = r(8055);
                    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                        var e, t = !1,
                            r = {};
                        try {
                            (e = n(Object.prototype, "__proto__", "set"))(r, []), t = r instanceof Array
                        } catch (e) {}
                        return function(r, n) {
                            return a(r), o(n), t ? e(r, n) : r.__proto__ = n, r
                        }
                    }() : void 0)
                },
                6082: (e, t, r) => {
                    var n = r(970),
                        a = r(9548),
                        o = r(3021),
                        i = TypeError;
                    e.exports = function(e, t) {
                        var r, s;
                        if ("string" === t && a(r = e.toString) && !o(s = n(r, e))) return s;
                        if (a(r = e.valueOf) && !o(s = n(r, e))) return s;
                        if ("string" !== t && a(r = e.toString) && !o(s = n(r, e))) return s;
                        throw i("Can't convert object to primitive value")
                    }
                },
                313: (e, t, r) => {
                    var n = r(2555),
                        a = r(6619),
                        o = r(4161),
                        i = r(4644),
                        s = r(7981),
                        c = a([].concat);
                    e.exports = n("Reflect", "ownKeys") || function(e) {
                        var t = o.f(s(e)),
                            r = i.f;
                        return r ? c(t, r(e)) : t
                    }
                },
                1626: (e, t, r) => {
                    var n = r(2689);
                    e.exports = n
                },
                3576: e => {
                    e.exports = function(e) {
                        try {
                            return {
                                error: !1,
                                value: e()
                            }
                        } catch (e) {
                            return {
                                error: !0,
                                value: e
                            }
                        }
                    }
                },
                3984: (e, t, r) => {
                    var n = r(2689),
                        a = r(9512),
                        o = r(9548),
                        i = r(6724),
                        s = r(2958),
                        c = r(6250),
                        u = r(9529),
                        l = r(687),
                        p = r(5231),
                        f = r(9168),
                        d = a && a.prototype,
                        h = c("species"),
                        v = !1,
                        g = o(n.PromiseRejectionEvent),
                        y = i("Promise", (function() {
                            var e = s(a),
                                t = e !== String(a);
                            if (!t && 66 === f) return !0;
                            if (p && (!d.catch || !d.finally)) return !0;
                            if (!f || f < 51 || !/native code/.test(e)) {
                                var r = new a((function(e) {
                                        e(1)
                                    })),
                                    n = function(e) {
                                        e((function() {}), (function() {}))
                                    };
                                if ((r.constructor = {})[h] = n, !(v = r.then((function() {})) instanceof n)) return !0
                            }
                            return !t && (u || l) && !g
                        }));
                    e.exports = {
                        CONSTRUCTOR: y,
                        REJECTION_EVENT: g,
                        SUBCLASSING: v
                    }
                },
                9512: (e, t, r) => {
                    var n = r(2689);
                    e.exports = n.Promise
                },
                2988: (e, t, r) => {
                    var n = r(7981),
                        a = r(3021),
                        o = r(9203);
                    e.exports = function(e, t) {
                        if (n(e), a(t) && t.constructor === e) return t;
                        var r = o.f(e);
                        return (0, r.resolve)(t), r.promise
                    }
                },
                5774: (e, t, r) => {
                    var n = r(9512),
                        a = r(2176),
                        o = r(3984).CONSTRUCTOR;
                    e.exports = o || !a((function(e) {
                        n.all(e).then(void 0, (function() {}))
                    }))
                },
                2756: (e, t, r) => {
                    var n = r(2468).f;
                    e.exports = function(e, t, r) {
                        r in e || n(e, r, {
                            configurable: !0,
                            get: function() {
                                return t[r]
                            },
                            set: function(e) {
                                t[r] = e
                            }
                        })
                    }
                },
                2576: e => {
                    var t = function() {
                        this.head = null, this.tail = null
                    };
                    t.prototype = {
                        add: function(e) {
                            var t = {
                                    item: e,
                                    next: null
                                },
                                r = this.tail;
                            r ? r.next = t : this.head = t, this.tail = t
                        },
                        get: function() {
                            var e = this.head;
                            if (e) return null === (this.head = e.next) && (this.tail = null), e.item
                        }
                    }, e.exports = t
                },
                8343: (e, t, r) => {
                    var n = r(970),
                        a = r(7981),
                        o = r(9548),
                        i = r(1335),
                        s = r(8627),
                        c = TypeError;
                    e.exports = function(e, t) {
                        var r = e.exec;
                        if (o(r)) {
                            var u = n(r, e, t);
                            return null !== u && a(u), u
                        }
                        if ("RegExp" === i(e)) return n(s, e, t);
                        throw c("RegExp#exec called on incompatible receiver")
                    }
                },
                8627: (e, t, r) => {
                    "use strict";
                    var n, a, o = r(970),
                        i = r(6619),
                        s = r(9013),
                        c = r(9811),
                        u = r(6340),
                        l = r(969),
                        p = r(3583),
                        f = r(7832).get,
                        d = r(7050),
                        h = r(1897),
                        v = l("native-string-replace", String.prototype.replace),
                        g = RegExp.prototype.exec,
                        y = g,
                        _ = i("".charAt),
                        m = i("".indexOf),
                        b = i("".replace),
                        w = i("".slice),
                        k = (a = /b*/g, o(g, n = /a/, "a"), o(g, a, "a"), 0 !== n.lastIndex || 0 !== a.lastIndex),
                        S = u.BROKEN_CARET,
                        I = void 0 !== /()??/.exec("")[1];
                    (k || I || S || d || h) && (y = function(e) {
                        var t, r, n, a, i, u, l, d = this,
                            h = f(d),
                            x = s(e),
                            T = h.raw;
                        if (T) return T.lastIndex = d.lastIndex, t = o(y, T, x), d.lastIndex = T.lastIndex, t;
                        var A = h.groups,
                            C = S && d.sticky,
                            E = o(c, d),
                            P = d.source,
                            O = 0,
                            R = x;
                        if (C && (E = b(E, "y", ""), -1 === m(E, "g") && (E += "g"), R = w(x, d.lastIndex), d.lastIndex > 0 && (!d.multiline || d.multiline && "\n" !== _(x, d.lastIndex - 1)) && (P = "(?: " + P + ")", R = " " + R, O++), r = new RegExp("^(?:" + P + ")", E)), I && (r = new RegExp("^" + P + "$(?!\\s)", E)), k && (n = d.lastIndex), a = o(g, C ? r : d, R), C ? a ? (a.input = w(a.input, O), a[0] = w(a[0], O), a.index = d.lastIndex, d.lastIndex += a[0].length) : d.lastIndex = 0 : k && a && (d.lastIndex = d.global ? a.index + a[0].length : n), I && a && a.length > 1 && o(v, a[0], r, (function() {
                                for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (a[i] = void 0)
                            })), a && A)
                            for (a.groups = u = p(null), i = 0; i < A.length; i++) u[(l = A[i])[0]] = a[l[1]];
                        return a
                    }), e.exports = y
                },
                9811: (e, t, r) => {
                    "use strict";
                    var n = r(7981);
                    e.exports = function() {
                        var e = n(this),
                            t = "";
                        return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
                    }
                },
                3715: (e, t, r) => {
                    var n = r(970),
                        a = r(5835),
                        o = r(631),
                        i = r(9811),
                        s = RegExp.prototype;
                    e.exports = function(e) {
                        var t = e.flags;
                        return void 0 !== t || "flags" in s || a(e, "flags") || !o(s, e) ? t : n(i, e)
                    }
                },
                6340: (e, t, r) => {
                    var n = r(9835),
                        a = r(2689).RegExp,
                        o = n((function() {
                            var e = a("a", "y");
                            return e.lastIndex = 2, null != e.exec("abcd")
                        })),
                        i = o || n((function() {
                            return !a("a", "y").sticky
                        })),
                        s = o || n((function() {
                            var e = a("^r", "gy");
                            return e.lastIndex = 2, null != e.exec("str")
                        }));
                    e.exports = {
                        BROKEN_CARET: s,
                        MISSED_STICKY: i,
                        UNSUPPORTED_Y: o
                    }
                },
                7050: (e, t, r) => {
                    var n = r(9835),
                        a = r(2689).RegExp;
                    e.exports = n((function() {
                        var e = a(".", "s");
                        return !(e.dotAll && e.exec("\n") && "s" === e.flags)
                    }))
                },
                1897: (e, t, r) => {
                    var n = r(9835),
                        a = r(2689).RegExp;
                    e.exports = n((function() {
                        var e = a("(?<a>b)", "g");
                        return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
                    }))
                },
                8602: (e, t, r) => {
                    var n = r(9799),
                        a = TypeError;
                    e.exports = function(e) {
                        if (n(e)) throw a("Can't call method on " + e);
                        return e
                    }
                },
                1558: (e, t, r) => {
                    var n = r(6501),
                        a = r(7717),
                        o = n.Set,
                        i = n.add;
                    e.exports = function(e) {
                        var t = new o;
                        return a(e, (function(e) {
                            i(t, e)
                        })), t
                    }
                },
                3472: (e, t, r) => {
                    "use strict";
                    var n = r(8153),
                        a = r(6501),
                        o = r(1558),
                        i = r(1255),
                        s = r(1958),
                        c = r(7717),
                        u = r(1700),
                        l = a.has,
                        p = a.remove;
                    e.exports = function(e) {
                        var t = n(this),
                            r = s(e),
                            a = o(t);
                        return i(t) <= r.size ? c(t, (function(e) {
                            r.includes(e) && p(a, e)
                        })) : u(r.getIterator(), (function(e) {
                            l(t, e) && p(a, e)
                        })), a
                    }
                },
                6501: (e, t, r) => {
                    var n = r(6619),
                        a = Set.prototype;
                    e.exports = {
                        Set: Set,
                        add: n(a.add),
                        has: n(a.has),
                        remove: n(a.delete),
                        proto: a,
                        $has: a.has,
                        $keys: a.keys
                    }
                },
                4228: (e, t, r) => {
                    "use strict";
                    var n = r(8153),
                        a = r(6501),
                        o = r(1255),
                        i = r(1958),
                        s = r(7717),
                        c = r(1700),
                        u = a.Set,
                        l = a.add,
                        p = a.has,
                        f = a.$has,
                        d = a.$keys;
                    e.exports = function(e) {
                        var t, r = n(this),
                            a = i(e),
                            h = new u;
                        if (((t = a).has !== f || t.keys !== d) && o(r) > a.size) {
                            if (c(a.getIterator(), (function(e) {
                                    p(r, e) && l(h, e)
                                })), o(h) < 2) return h;
                            var v = h;
                            h = new u, s(r, (function(e) {
                                p(v, e) && l(h, e)
                            }))
                        } else s(r, (function(e) {
                            a.includes(e) && l(h, e)
                        }));
                        return h
                    }
                },
                9728: (e, t, r) => {
                    "use strict";
                    var n = r(8153),
                        a = r(6501).has,
                        o = r(1255),
                        i = r(1958),
                        s = r(7717),
                        c = r(1700),
                        u = r(7087);
                    e.exports = function(e) {
                        var t = n(this),
                            r = i(e);
                        if (o(t) <= r.size) return !1 !== s(t, (function(e) {
                            if (r.includes(e)) return !1
                        }), !0);
                        var l = r.getIterator();
                        return !1 !== c(l, (function(e) {
                            if (a(t, e)) return u(l, "normal", !1)
                        }))
                    }
                },
                7214: (e, t, r) => {
                    "use strict";
                    var n = r(8153),
                        a = r(1255),
                        o = r(7717),
                        i = r(1958);
                    e.exports = function(e) {
                        var t = n(this),
                            r = i(e);
                        return !(a(t) > r.size) && !1 !== o(t, (function(e) {
                            if (!r.includes(e)) return !1
                        }), !0)
                    }
                },
                6781: (e, t, r) => {
                    "use strict";
                    var n = r(8153),
                        a = r(6501).has,
                        o = r(1255),
                        i = r(1958),
                        s = r(1700),
                        c = r(7087);
                    e.exports = function(e) {
                        var t = n(this),
                            r = i(e);
                        if (o(t) < r.size) return !1;
                        var u = r.getIterator();
                        return !1 !== s(u, (function(e) {
                            if (!a(t, e)) return c(u, "normal", !1)
                        }))
                    }
                },
                7717: (e, t, r) => {
                    var n = r(6619),
                        a = r(1700),
                        o = r(6501),
                        i = o.Set,
                        s = o.proto,
                        c = n(s.forEach),
                        u = n(s.keys),
                        l = u(new i).next;
                    e.exports = function(e, t, r) {
                        return r ? a(u(e), t, l) : c(e, t)
                    }
                },
                4001: (e, t, r) => {
                    var n = r(2555);
                    e.exports = function(e) {
                        try {
                            return (new(n("Set")))[e]({
                                size: 0,
                                has: function() {
                                    return !1
                                },
                                keys: function() {
                                    return {
                                        next: function() {
                                            return {
                                                done: !0
                                            }
                                        }
                                    }
                                }
                            }), !0
                        } catch (e) {
                            return !1
                        }
                    }
                },
                1255: (e, t, r) => {
                    var n = r(2221),
                        a = r(6501);
                    e.exports = n(a.proto, "size", "get") || function(e) {
                        return e.size
                    }
                },
                7025: (e, t, r) => {
                    "use strict";
                    var n = r(2555),
                        a = r(4173),
                        o = r(6250),
                        i = r(8521),
                        s = o("species");
                    e.exports = function(e) {
                        var t = n(e);
                        i && t && !t[s] && a(t, s, {
                            configurable: !0,
                            get: function() {
                                return this
                            }
                        })
                    }
                },
                7418: (e, t, r) => {
                    "use strict";
                    var n = r(8153),
                        a = r(6501),
                        o = r(1558),
                        i = r(1958),
                        s = r(1700),
                        c = a.add,
                        u = a.has,
                        l = a.remove;
                    e.exports = function(e) {
                        var t = n(this),
                            r = i(e).getIterator(),
                            a = o(t);
                        return s(r, (function(e) {
                            u(t, e) ? l(a, e) : c(a, e)
                        })), a
                    }
                },
                4029: (e, t, r) => {
                    var n = r(2468).f,
                        a = r(5835),
                        o = r(6250)("toStringTag");
                    e.exports = function(e, t, r) {
                        e && !r && (e = e.prototype), e && !a(e, o) && n(e, o, {
                            configurable: !0,
                            value: t
                        })
                    }
                },
                3268: (e, t, r) => {
                    "use strict";
                    var n = r(8153),
                        a = r(6501).add,
                        o = r(1558),
                        i = r(1958),
                        s = r(1700);
                    e.exports = function(e) {
                        var t = n(this),
                            r = i(e).getIterator(),
                            c = o(t);
                        return s(r, (function(e) {
                            a(c, e)
                        })), c
                    }
                },
                5923: (e, t, r) => {
                    var n = r(969),
                        a = r(5567),
                        o = n("keys");
                    e.exports = function(e) {
                        return o[e] || (o[e] = a(e))
                    }
                },
                1703: (e, t, r) => {
                    var n = r(2689),
                        a = r(4017),
                        o = "__core-js_shared__",
                        i = n[o] || a(o, {});
                    e.exports = i
                },
                969: (e, t, r) => {
                    var n = r(5231),
                        a = r(1703);
                    (e.exports = function(e, t) {
                        return a[e] || (a[e] = void 0 !== t ? t : {})
                    })("versions", []).push({
                        version: "3.29.0",
                        mode: n ? "pure" : "global",
                        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                        license: "https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",
                        source: "https://github.com/zloirock/core-js"
                    })
                },
                5667: (e, t, r) => {
                    var n = r(7981),
                        a = r(7663),
                        o = r(9799),
                        i = r(6250)("species");
                    e.exports = function(e, t) {
                        var r, s = n(e).constructor;
                        return void 0 === s || o(r = n(s)[i]) ? t : a(r)
                    }
                },
                4637: (e, t, r) => {
                    var n = r(6619),
                        a = r(8299),
                        o = r(9013),
                        i = r(8602),
                        s = n("".charAt),
                        c = n("".charCodeAt),
                        u = n("".slice),
                        l = function(e) {
                            return function(t, r) {
                                var n, l, p = o(i(t)),
                                    f = a(r),
                                    d = p.length;
                                return f < 0 || f >= d ? e ? "" : void 0 : (n = c(p, f)) < 55296 || n > 56319 || f + 1 === d || (l = c(p, f + 1)) < 56320 || l > 57343 ? e ? s(p, f) : n : e ? u(p, f, f + 2) : l - 56320 + (n - 55296 << 10) + 65536
                            }
                        };
                    e.exports = {
                        codeAt: l(!1),
                        charAt: l(!0)
                    }
                },
                9133: (e, t, r) => {
                    "use strict";
                    var n = r(5272).end,
                        a = r(5238);
                    e.exports = a("trimEnd") ? function() {
                        return n(this)
                    } : "".trimEnd
                },
                5238: (e, t, r) => {
                    var n = r(4046).PROPER,
                        a = r(9835),
                        o = r(8689);
                    e.exports = function(e) {
                        return a((function() {
                            return !!o[e]() || "​᠎" !== "​᠎" [e]() || n && o[e].name !== e
                        }))
                    }
                },
                5272: (e, t, r) => {
                    var n = r(6619),
                        a = r(8602),
                        o = r(9013),
                        i = r(8689),
                        s = n("".replace),
                        c = RegExp("^[" + i + "]+"),
                        u = RegExp("(^|[^" + i + "])[" + i + "]+$"),
                        l = function(e) {
                            return function(t) {
                                var r = o(a(t));
                                return 1 & e && (r = s(r, c, "")), 2 & e && (r = s(r, u, "$1")), r
                            }
                        };
                    e.exports = {
                        start: l(1),
                        end: l(2),
                        trim: l(3)
                    }
                },
                4427: (e, t, r) => {
                    var n = r(9168),
                        a = r(9835);
                    e.exports = !!Object.getOwnPropertySymbols && !a((function() {
                        var e = Symbol();
                        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
                    }))
                },
                3233: (e, t, r) => {
                    var n, a, o, i, s = r(2689),
                        c = r(352),
                        u = r(8995),
                        l = r(9548),
                        p = r(5835),
                        f = r(9835),
                        d = r(9856),
                        h = r(7687),
                        v = r(7345),
                        g = r(1150),
                        y = r(8604),
                        _ = r(8976),
                        m = s.setImmediate,
                        b = s.clearImmediate,
                        w = s.process,
                        k = s.Dispatch,
                        S = s.Function,
                        I = s.MessageChannel,
                        x = s.String,
                        T = 0,
                        A = {},
                        C = "onreadystatechange";
                    f((function() {
                        n = s.location
                    }));
                    var E = function(e) {
                            if (p(A, e)) {
                                var t = A[e];
                                delete A[e], t()
                            }
                        },
                        P = function(e) {
                            return function() {
                                E(e)
                            }
                        },
                        O = function(e) {
                            E(e.data)
                        },
                        R = function(e) {
                            s.postMessage(x(e), n.protocol + "//" + n.host)
                        };
                    m && b || (m = function(e) {
                        g(arguments.length, 1);
                        var t = l(e) ? e : S(e),
                            r = h(arguments, 1);
                        return A[++T] = function() {
                            c(t, void 0, r)
                        }, a(T), T
                    }, b = function(e) {
                        delete A[e]
                    }, _ ? a = function(e) {
                        w.nextTick(P(e))
                    } : k && k.now ? a = function(e) {
                        k.now(P(e))
                    } : I && !y ? (i = (o = new I).port2, o.port1.onmessage = O, a = u(i.postMessage, i)) : s.addEventListener && l(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !f(R) ? (a = R, s.addEventListener("message", O, !1)) : a = C in v("script") ? function(e) {
                        d.appendChild(v("script"))[C] = function() {
                            d.removeChild(this), E(e)
                        }
                    } : function(e) {
                        setTimeout(P(e), 0)
                    }), e.exports = {
                        set: m,
                        clear: b
                    }
                },
                3610: (e, t, r) => {
                    var n = r(8299),
                        a = Math.max,
                        o = Math.min;
                    e.exports = function(e, t) {
                        var r = n(e);
                        return r < 0 ? a(r + t, 0) : o(r, t)
                    }
                },
                710: (e, t, r) => {
                    var n = r(3912),
                        a = TypeError;
                    e.exports = function(e) {
                        var t = n(e, "number");
                        if ("number" == typeof t) throw a("Can't convert number to bigint");
                        return BigInt(t)
                    }
                },
                1169: (e, t, r) => {
                    var n = r(8299),
                        a = r(6443),
                        o = RangeError;
                    e.exports = function(e) {
                        if (void 0 === e) return 0;
                        var t = n(e),
                            r = a(t);
                        if (t !== r) throw o("Wrong length or index");
                        return r
                    }
                },
                7417: (e, t, r) => {
                    var n = r(8582),
                        a = r(8602);
                    e.exports = function(e) {
                        return n(a(e))
                    }
                },
                8299: (e, t, r) => {
                    var n = r(2707);
                    e.exports = function(e) {
                        var t = +e;
                        return t != t || 0 === t ? 0 : n(t)
                    }
                },
                6443: (e, t, r) => {
                    var n = r(8299),
                        a = Math.min;
                    e.exports = function(e) {
                        return e > 0 ? a(n(e), 9007199254740991) : 0
                    }
                },
                18: (e, t, r) => {
                    var n = r(8602),
                        a = Object;
                    e.exports = function(e) {
                        return a(n(e))
                    }
                },
                3092: (e, t, r) => {
                    var n = r(6382),
                        a = RangeError;
                    e.exports = function(e, t) {
                        var r = n(e);
                        if (r % t) throw a("Wrong offset");
                        return r
                    }
                },
                6382: (e, t, r) => {
                    var n = r(8299),
                        a = RangeError;
                    e.exports = function(e) {
                        var t = n(e);
                        if (t < 0) throw a("The argument can't be less than 0");
                        return t
                    }
                },
                3912: (e, t, r) => {
                    var n = r(970),
                        a = r(3021),
                        o = r(7870),
                        i = r(2317),
                        s = r(6082),
                        c = r(6250),
                        u = TypeError,
                        l = c("toPrimitive");
                    e.exports = function(e, t) {
                        if (!a(e) || o(e)) return e;
                        var r, c = i(e, l);
                        if (c) {
                            if (void 0 === t && (t = "default"), r = n(c, e, t), !a(r) || o(r)) return r;
                            throw u("Can't convert object to primitive value")
                        }
                        return void 0 === t && (t = "number"), s(e, t)
                    }
                },
                7880: (e, t, r) => {
                    var n = r(3912),
                        a = r(7870);
                    e.exports = function(e) {
                        var t = n(e, "string");
                        return a(t) ? t : t + ""
                    }
                },
                8024: (e, t, r) => {
                    var n = {};
                    n[r(6250)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
                },
                9013: (e, t, r) => {
                    var n = r(7221),
                        a = String;
                    e.exports = function(e) {
                        if ("Symbol" === n(e)) throw TypeError("Cannot convert a Symbol value to a string");
                        return a(e)
                    }
                },
                1002: e => {
                    var t = String;
                    e.exports = function(e) {
                        try {
                            return t(e)
                        } catch (e) {
                            return "Object"
                        }
                    }
                },
                9919: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(2689),
                        o = r(970),
                        i = r(8521),
                        s = r(3471),
                        c = r(7854),
                        u = r(819),
                        l = r(3949),
                        p = r(3179),
                        f = r(1720),
                        d = r(3781),
                        h = r(6443),
                        v = r(1169),
                        g = r(3092),
                        y = r(7880),
                        _ = r(5835),
                        m = r(7221),
                        b = r(3021),
                        w = r(7870),
                        k = r(3583),
                        S = r(631),
                        I = r(1672),
                        x = r(4161).f,
                        T = r(8382),
                        A = r(8250).forEach,
                        C = r(7025),
                        E = r(4173),
                        P = r(2468),
                        O = r(7812),
                        R = r(7832),
                        M = r(3570),
                        D = R.get,
                        j = R.set,
                        L = R.enforce,
                        N = P.f,
                        F = O.f,
                        W = Math.round,
                        $ = a.RangeError,
                        B = u.ArrayBuffer,
                        U = B.prototype,
                        q = u.DataView,
                        H = c.NATIVE_ARRAY_BUFFER_VIEWS,
                        G = c.TYPED_ARRAY_TAG,
                        V = c.TypedArray,
                        K = c.TypedArrayPrototype,
                        z = c.aTypedArrayConstructor,
                        J = c.isTypedArray,
                        Y = "BYTES_PER_ELEMENT",
                        Z = "Wrong length",
                        Q = function(e, t) {
                            z(e);
                            for (var r = 0, n = t.length, a = new e(n); n > r;) a[r] = t[r++];
                            return a
                        },
                        X = function(e, t) {
                            E(e, t, {
                                configurable: !0,
                                get: function() {
                                    return D(this)[t]
                                }
                            })
                        },
                        ee = function(e) {
                            var t;
                            return S(U, e) || "ArrayBuffer" == (t = m(e)) || "SharedArrayBuffer" == t
                        },
                        te = function(e, t) {
                            return J(e) && !w(t) && t in e && d(+t) && t >= 0
                        },
                        re = function(e, t) {
                            return t = y(t), te(e, t) ? p(2, e[t]) : F(e, t)
                        },
                        ne = function(e, t, r) {
                            return t = y(t), !(te(e, t) && b(r) && _(r, "value")) || _(r, "get") || _(r, "set") || r.configurable || _(r, "writable") && !r.writable || _(r, "enumerable") && !r.enumerable ? N(e, t, r) : (e[t] = r.value, e)
                        };
                    i ? (H || (O.f = re, P.f = ne, X(K, "buffer"), X(K, "byteOffset"), X(K, "byteLength"), X(K, "length")), n({
                        target: "Object",
                        stat: !0,
                        forced: !H
                    }, {
                        getOwnPropertyDescriptor: re,
                        defineProperty: ne
                    }), e.exports = function(e, t, r) {
                        var i = e.match(/\d+/)[0] / 8,
                            c = e + (r ? "Clamped" : "") + "Array",
                            u = "get" + e,
                            p = "set" + e,
                            d = a[c],
                            y = d,
                            _ = y && y.prototype,
                            m = {},
                            w = function(e, t) {
                                N(e, t, {
                                    get: function() {
                                        return function(e, t) {
                                            var r = D(e);
                                            return r.view[u](t * i + r.byteOffset, !0)
                                        }(this, t)
                                    },
                                    set: function(e) {
                                        return function(e, t, n) {
                                            var a = D(e);
                                            r && (n = (n = W(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), a.view[p](t * i + a.byteOffset, n, !0)
                                        }(this, t, e)
                                    },
                                    enumerable: !0
                                })
                            };
                        H ? s && (y = t((function(e, t, r, n) {
                            return l(e, _), M(b(t) ? ee(t) ? void 0 !== n ? new d(t, g(r, i), n) : void 0 !== r ? new d(t, g(r, i)) : new d(t) : J(t) ? Q(y, t) : o(T, y, t) : new d(v(t)), e, y)
                        })), I && I(y, V), A(x(d), (function(e) {
                            e in y || f(y, e, d[e])
                        })), y.prototype = _) : (y = t((function(e, t, r, n) {
                            l(e, _);
                            var a, s, c, u = 0,
                                p = 0;
                            if (b(t)) {
                                if (!ee(t)) return J(t) ? Q(y, t) : o(T, y, t);
                                a = t, p = g(r, i);
                                var f = t.byteLength;
                                if (void 0 === n) {
                                    if (f % i) throw $(Z);
                                    if ((s = f - p) < 0) throw $(Z)
                                } else if ((s = h(n) * i) + p > f) throw $(Z);
                                c = s / i
                            } else c = v(t), a = new B(s = c * i);
                            for (j(e, {
                                    buffer: a,
                                    byteOffset: p,
                                    byteLength: s,
                                    length: c,
                                    view: new q(a)
                                }); u < c;) w(e, u++)
                        })), I && I(y, V), _ = y.prototype = k(K)), _.constructor !== y && f(_, "constructor", y), L(_).TypedArrayConstructor = y, G && f(_, G, c);
                        var S = y != d;
                        m[c] = y, n({
                            global: !0,
                            constructor: !0,
                            forced: S,
                            sham: !H
                        }, m), Y in y || f(y, Y, i), Y in _ || f(_, Y, i), C(c)
                    }) : e.exports = function() {}
                },
                3471: (e, t, r) => {
                    var n = r(2689),
                        a = r(9835),
                        o = r(2176),
                        i = r(7854).NATIVE_ARRAY_BUFFER_VIEWS,
                        s = n.ArrayBuffer,
                        c = n.Int8Array;
                    e.exports = !i || !a((function() {
                        c(1)
                    })) || !a((function() {
                        new c(-1)
                    })) || !o((function(e) {
                        new c, new c(null), new c(1.5), new c(e)
                    }), !0) || a((function() {
                        return 1 !== new c(new s(2), 1, void 0).length
                    }))
                },
                8382: (e, t, r) => {
                    var n = r(8995),
                        a = r(970),
                        o = r(7663),
                        i = r(18),
                        s = r(56),
                        c = r(8631),
                        u = r(5569),
                        l = r(4713),
                        p = r(2488),
                        f = r(7854).aTypedArrayConstructor,
                        d = r(710);
                    e.exports = function(e) {
                        var t, r, h, v, g, y, _, m, b = o(this),
                            w = i(e),
                            k = arguments.length,
                            S = k > 1 ? arguments[1] : void 0,
                            I = void 0 !== S,
                            x = u(w);
                        if (x && !l(x))
                            for (m = (_ = c(w, x)).next, w = []; !(y = a(m, _)).done;) w.push(y.value);
                        for (I && k > 2 && (S = n(S, arguments[2])), r = s(w), h = new(f(b))(r), v = p(h), t = 0; r > t; t++) g = I ? S(w[t], t) : w[t], h[t] = v ? d(g) : +g;
                        return h
                    }
                },
                5567: (e, t, r) => {
                    var n = r(6619),
                        a = 0,
                        o = Math.random(),
                        i = n(1..toString);
                    e.exports = function(e) {
                        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++a + o, 36)
                    }
                },
                7079: (e, t, r) => {
                    var n = r(4427);
                    e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
                },
                6144: (e, t, r) => {
                    var n = r(8521),
                        a = r(9835);
                    e.exports = n && a((function() {
                        return 42 != Object.defineProperty((function() {}), "prototype", {
                            value: 42,
                            writable: !1
                        }).prototype
                    }))
                },
                1150: e => {
                    var t = TypeError;
                    e.exports = function(e, r) {
                        if (e < r) throw t("Not enough arguments");
                        return e
                    }
                },
                1894: (e, t, r) => {
                    var n = r(2689),
                        a = r(9548),
                        o = n.WeakMap;
                    e.exports = a(o) && /native code/.test(String(o))
                },
                1274: (e, t, r) => {
                    var n = r(1626),
                        a = r(5835),
                        o = r(7411),
                        i = r(2468).f;
                    e.exports = function(e) {
                        var t = n.Symbol || (n.Symbol = {});
                        a(t, e) || i(t, e, {
                            value: o.f(e)
                        })
                    }
                },
                7411: (e, t, r) => {
                    var n = r(6250);
                    t.f = n
                },
                6250: (e, t, r) => {
                    var n = r(2689),
                        a = r(969),
                        o = r(5835),
                        i = r(5567),
                        s = r(4427),
                        c = r(7079),
                        u = n.Symbol,
                        l = a("wks"),
                        p = c ? u.for || u : u && u.withoutSetter || i;
                    e.exports = function(e) {
                        return o(l, e) || (l[e] = s && o(u, e) ? u[e] : p("Symbol." + e)), l[e]
                    }
                },
                8689: e => {
                    e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
                },
                884: (e, t, r) => {
                    "use strict";
                    var n = r(2555),
                        a = r(5835),
                        o = r(1720),
                        i = r(631),
                        s = r(1672),
                        c = r(4361),
                        u = r(2756),
                        l = r(3570),
                        p = r(8364),
                        f = r(5016),
                        d = r(9431),
                        h = r(8521),
                        v = r(5231);
                    e.exports = function(e, t, r, g) {
                        var y = "stackTraceLimit",
                            _ = g ? 2 : 1,
                            m = e.split("."),
                            b = m[m.length - 1],
                            w = n.apply(null, m);
                        if (w) {
                            var k = w.prototype;
                            if (!v && a(k, "cause") && delete k.cause, !r) return w;
                            var S = n("Error"),
                                I = t((function(e, t) {
                                    var r = p(g ? t : e, void 0),
                                        n = g ? new w(e) : new w;
                                    return void 0 !== r && o(n, "message", r), d(n, I, n.stack, 2), this && i(k, this) && l(n, this, I), arguments.length > _ && f(n, arguments[_]), n
                                }));
                            if (I.prototype = k, "Error" !== b ? s ? s(I, S) : c(I, S, {
                                    name: !0
                                }) : h && y in w && (u(I, w, y), u(I, w, "prepareStackTrace")), c(I, w), !v) try {
                                k.name !== b && o(k, "name", b), k.constructor = I
                            } catch (e) {}
                            return I
                        }
                    }
                },
                2894: (e, t, r) => {
                    var n = r(5077),
                        a = r(2555),
                        o = r(352),
                        i = r(9835),
                        s = r(884),
                        c = "AggregateError",
                        u = a(c),
                        l = !i((function() {
                            return 1 !== u([1]).errors[0]
                        })) && i((function() {
                            return 7 !== u([1], c, {
                                cause: 7
                            }).cause
                        }));
                    n({
                        global: !0,
                        constructor: !0,
                        arity: 2,
                        forced: l
                    }, {
                        AggregateError: s(c, (function(e) {
                            return function(t, r) {
                                return o(e, this, arguments)
                            }
                        }), l, !0)
                    })
                },
                6598: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(631),
                        o = r(5616),
                        i = r(1672),
                        s = r(4361),
                        c = r(3583),
                        u = r(1720),
                        l = r(3179),
                        p = r(5016),
                        f = r(9431),
                        d = r(4760),
                        h = r(8364),
                        v = r(6250)("toStringTag"),
                        g = Error,
                        y = [].push,
                        _ = function(e, t) {
                            var r, n = a(m, this);
                            i ? r = i(g(), n ? o(this) : m) : (r = n ? this : c(m), u(r, v, "Error")), void 0 !== t && u(r, "message", h(t)), f(r, _, r.stack, 1), arguments.length > 2 && p(r, arguments[2]);
                            var s = [];
                            return d(e, y, {
                                that: s
                            }), u(r, "errors", s), r
                        };
                    i ? i(_, g) : s(_, g, {
                        name: !0
                    });
                    var m = _.prototype = c(g.prototype, {
                        constructor: l(1, _),
                        message: l(1, ""),
                        name: l(1, "AggregateError")
                    });
                    n({
                        global: !0,
                        constructor: !0,
                        arity: 2
                    }, {
                        AggregateError: _
                    })
                },
                4006: (e, t, r) => {
                    r(6598)
                },
                3665: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(3482),
                        o = r(9835),
                        i = r(819),
                        s = r(7981),
                        c = r(3610),
                        u = r(6443),
                        l = r(5667),
                        p = i.ArrayBuffer,
                        f = i.DataView,
                        d = f.prototype,
                        h = a(p.prototype.slice),
                        v = a(d.getUint8),
                        g = a(d.setUint8);
                    n({
                        target: "ArrayBuffer",
                        proto: !0,
                        unsafe: !0,
                        forced: o((function() {
                            return !new p(2).slice(1, void 0).byteLength
                        }))
                    }, {
                        slice: function(e, t) {
                            if (h && void 0 === t) return h(s(this), e);
                            for (var r = s(this).byteLength, n = c(e, r), a = c(void 0 === t ? r : t, r), o = new(l(this, p))(u(a - n)), i = new f(this), d = new f(o), y = 0; n < a;) g(d, y++, v(i, n++));
                            return o
                        }
                    })
                },
                6291: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(18),
                        o = r(56),
                        i = r(8299),
                        s = r(4014);
                    n({
                        target: "Array",
                        proto: !0
                    }, {
                        at: function(e) {
                            var t = a(this),
                                r = o(t),
                                n = i(e),
                                s = n >= 0 ? n : r + n;
                            return s < 0 || s >= r ? void 0 : t[s]
                        }
                    }), s("at")
                },
                2495: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(3792).findLastIndex,
                        o = r(4014);
                    n({
                        target: "Array",
                        proto: !0
                    }, {
                        findLastIndex: function(e) {
                            return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), o("findLastIndex")
                },
                2933: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(3792).findLast,
                        o = r(4014);
                    n({
                        target: "Array",
                        proto: !0
                    }, {
                        findLast: function(e) {
                            return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), o("findLast")
                },
                628: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(18),
                        o = r(56),
                        i = r(3447),
                        s = r(5396);
                    n({
                        target: "Array",
                        proto: !0,
                        arity: 1,
                        forced: r(9835)((function() {
                            return 4294967297 !== [].push.call({
                                length: 4294967296
                            }, 1)
                        })) || ! function() {
                            try {
                                Object.defineProperty([], "length", {
                                    writable: !1
                                }).push()
                            } catch (e) {
                                return e instanceof TypeError
                            }
                        }()
                    }, {
                        push: function(e) {
                            var t = a(this),
                                r = o(t),
                                n = arguments.length;
                            s(r + n);
                            for (var c = 0; c < n; c++) t[r] = arguments[c], r++;
                            return i(t, r), r
                        }
                    })
                },
                611: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(6619),
                        o = r(1501),
                        i = a([].reverse),
                        s = [1, 2];
                    n({
                        target: "Array",
                        proto: !0,
                        forced: String(s) === String(s.reverse())
                    }, {
                        reverse: function() {
                            return o(this) && (this.length = this.length), i(this)
                        }
                    })
                },
                503: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(6203),
                        o = r(7417),
                        i = r(4014),
                        s = Array;
                    n({
                        target: "Array",
                        proto: !0
                    }, {
                        toReversed: function() {
                            return a(o(this), s)
                        }
                    }), i("toReversed")
                },
                624: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(6619),
                        o = r(9573),
                        i = r(7417),
                        s = r(113),
                        c = r(9682),
                        u = r(4014),
                        l = Array,
                        p = a(c("Array").sort);
                    n({
                        target: "Array",
                        proto: !0
                    }, {
                        toSorted: function(e) {
                            void 0 !== e && o(e);
                            var t = i(this),
                                r = s(l, t);
                            return p(r, e)
                        }
                    }), u("toSorted")
                },
                9349: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(4014),
                        o = r(5396),
                        i = r(56),
                        s = r(3610),
                        c = r(7417),
                        u = r(8299),
                        l = Array,
                        p = Math.max,
                        f = Math.min;
                    n({
                        target: "Array",
                        proto: !0
                    }, {
                        toSpliced: function(e, t) {
                            var r, n, a, d, h = c(this),
                                v = i(h),
                                g = s(e, v),
                                y = arguments.length,
                                _ = 0;
                            for (0 === y ? r = n = 0 : 1 === y ? (r = 0, n = v - g) : (r = y - 2, n = f(p(u(t), 0), v - g)), a = o(v + r - n), d = l(a); _ < g; _++) d[_] = h[_];
                            for (; _ < g + r; _++) d[_] = arguments[_ - g + 2];
                            for (; _ < a; _++) d[_] = h[_ + n - r];
                            return d
                        }
                    }), a("toSpliced")
                },
                3823: (e, t, r) => {
                    r(4014)("flatMap")
                },
                4166: (e, t, r) => {
                    r(4014)("flat")
                },
                922: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(18),
                        o = r(56),
                        i = r(3447),
                        s = r(9580),
                        c = r(5396);
                    n({
                        target: "Array",
                        proto: !0,
                        arity: 1,
                        forced: 1 !== [].unshift(0) || ! function() {
                            try {
                                Object.defineProperty([], "length", {
                                    writable: !1
                                }).unshift()
                            } catch (e) {
                                return e instanceof TypeError
                            }
                        }()
                    }, {
                        unshift: function(e) {
                            var t = a(this),
                                r = o(t),
                                n = arguments.length;
                            if (n) {
                                c(r + n);
                                for (var u = r; u--;) {
                                    var l = u + n;
                                    u in t ? t[l] = t[u] : s(t, l)
                                }
                                for (var p = 0; p < n; p++) t[p] = arguments[p]
                            }
                            return i(t, r + n)
                        }
                    })
                },
                1398: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(4784),
                        o = r(7417),
                        i = Array;
                    n({
                        target: "Array",
                        proto: !0
                    }, {
                        with: function(e, t) {
                            return a(o(this), i, e, t)
                        }
                    })
                },
                5932: (e, t, r) => {
                    var n = r(5077),
                        a = r(2689),
                        o = r(352),
                        i = r(884),
                        s = "WebAssembly",
                        c = a[s],
                        u = 7 !== Error("e", {
                            cause: 7
                        }).cause,
                        l = function(e, t) {
                            var r = {};
                            r[e] = i(e, t, u), n({
                                global: !0,
                                constructor: !0,
                                arity: 1,
                                forced: u
                            }, r)
                        },
                        p = function(e, t) {
                            if (c && c[e]) {
                                var r = {};
                                r[e] = i(s + "." + e, t, u), n({
                                    target: s,
                                    stat: !0,
                                    constructor: !0,
                                    arity: 1,
                                    forced: u
                                }, r)
                            }
                        };
                    l("Error", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), l("EvalError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), l("RangeError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), l("ReferenceError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), l("SyntaxError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), l("TypeError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), l("URIError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), p("CompileError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), p("LinkError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    })), p("RuntimeError", (function(e) {
                        return function(t) {
                            return o(e, this, arguments)
                        }
                    }))
                },
                3194: (e, t, r) => {
                    var n = r(5077),
                        a = r(2689);
                    n({
                        global: !0,
                        forced: a.globalThis !== a
                    }, {
                        globalThis: a
                    })
                },
                3322: (e, t, r) => {
                    var n = r(5077),
                        a = r(2555),
                        o = r(352),
                        i = r(970),
                        s = r(6619),
                        c = r(9835),
                        u = r(9548),
                        l = r(7870),
                        p = r(7687),
                        f = r(3849),
                        d = r(4427),
                        h = String,
                        v = a("JSON", "stringify"),
                        g = s(/./.exec),
                        y = s("".charAt),
                        _ = s("".charCodeAt),
                        m = s("".replace),
                        b = s(1..toString),
                        w = /[\uD800-\uDFFF]/g,
                        k = /^[\uD800-\uDBFF]$/,
                        S = /^[\uDC00-\uDFFF]$/,
                        I = !d || c((function() {
                            var e = a("Symbol")();
                            return "[null]" != v([e]) || "{}" != v({
                                a: e
                            }) || "{}" != v(Object(e))
                        })),
                        x = c((function() {
                            return '"\\udf06\\ud834"' !== v("\udf06\ud834") || '"\\udead"' !== v("\udead")
                        })),
                        T = function(e, t) {
                            var r = p(arguments),
                                n = f(t);
                            if (u(n) || void 0 !== e && !l(e)) return r[1] = function(e, t) {
                                if (u(n) && (t = i(n, this, h(e), t)), !l(t)) return t
                            }, o(v, null, r)
                        },
                        A = function(e, t, r) {
                            var n = y(r, t - 1),
                                a = y(r, t + 1);
                            return g(k, e) && !g(S, a) || g(S, e) && !g(k, n) ? "\\u" + b(_(e, 0), 16) : e
                        };
                    v && n({
                        target: "JSON",
                        stat: !0,
                        arity: 3,
                        forced: I || x
                    }, {
                        stringify: function(e, t, r) {
                            var n = p(arguments),
                                a = o(I ? T : v, null, n);
                            return x && "string" == typeof a ? m(a, w, A) : a
                        }
                    })
                },
                9219: (e, t, r) => {
                    var n = r(5077),
                        a = r(4760),
                        o = r(9117);
                    n({
                        target: "Object",
                        stat: !0
                    }, {
                        fromEntries: function(e) {
                            var t = {};
                            return a(e, (function(e, r) {
                                o(t, e, r)
                            }), {
                                AS_ENTRIES: !0
                            }), t
                        }
                    })
                },
                9696: (e, t, r) => {
                    r(5077)({
                        target: "Object",
                        stat: !0
                    }, {
                        hasOwn: r(5835)
                    })
                },
                4371: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(9203),
                        s = r(3576),
                        c = r(4760);
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: r(5774)
                    }, {
                        allSettled: function(e) {
                            var t = this,
                                r = i.f(t),
                                n = r.resolve,
                                u = r.reject,
                                l = s((function() {
                                    var r = o(t.resolve),
                                        i = [],
                                        s = 0,
                                        u = 1;
                                    c(e, (function(e) {
                                        var o = s++,
                                            c = !1;
                                        u++, a(r, t, e).then((function(e) {
                                            c || (c = !0, i[o] = {
                                                status: "fulfilled",
                                                value: e
                                            }, --u || n(i))
                                        }), (function(e) {
                                            c || (c = !0, i[o] = {
                                                status: "rejected",
                                                reason: e
                                            }, --u || n(i))
                                        }))
                                    })), --u || n(i)
                                }));
                            return l.error && u(l.value), r.promise
                        }
                    })
                },
                890: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(9203),
                        s = r(3576),
                        c = r(4760);
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: r(5774)
                    }, {
                        all: function(e) {
                            var t = this,
                                r = i.f(t),
                                n = r.resolve,
                                u = r.reject,
                                l = s((function() {
                                    var r = o(t.resolve),
                                        i = [],
                                        s = 0,
                                        l = 1;
                                    c(e, (function(e) {
                                        var o = s++,
                                            c = !1;
                                        l++, a(r, t, e).then((function(e) {
                                            c || (c = !0, i[o] = e, --l || n(i))
                                        }), u)
                                    })), --l || n(i)
                                }));
                            return l.error && u(l.value), r.promise
                        }
                    })
                },
                5422: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(2555),
                        s = r(9203),
                        c = r(3576),
                        u = r(4760),
                        l = r(5774),
                        p = "No one promise resolved";
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: l
                    }, {
                        any: function(e) {
                            var t = this,
                                r = i("AggregateError"),
                                n = s.f(t),
                                l = n.resolve,
                                f = n.reject,
                                d = c((function() {
                                    var n = o(t.resolve),
                                        i = [],
                                        s = 0,
                                        c = 1,
                                        d = !1;
                                    u(e, (function(e) {
                                        var o = s++,
                                            u = !1;
                                        c++, a(n, t, e).then((function(e) {
                                            u || d || (d = !0, l(e))
                                        }), (function(e) {
                                            u || d || (u = !0, i[o] = e, --c || f(new r(i, p)))
                                        }))
                                    })), --c || f(new r(i, p))
                                }));
                            return d.error && f(d.value), n.promise
                        }
                    })
                },
                4745: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(5231),
                        o = r(3984).CONSTRUCTOR,
                        i = r(9512),
                        s = r(2555),
                        c = r(9548),
                        u = r(9146),
                        l = i && i.prototype;
                    if (n({
                            target: "Promise",
                            proto: !0,
                            forced: o,
                            real: !0
                        }, {
                            catch: function(e) {
                                return this.then(void 0, e)
                            }
                        }), !a && c(i)) {
                        var p = s("Promise").prototype.catch;
                        l.catch !== p && u(l, "catch", p, {
                            unsafe: !0
                        })
                    }
                },
                1546: (e, t, r) => {
                    "use strict";
                    var n, a, o, i = r(5077),
                        s = r(5231),
                        c = r(8976),
                        u = r(2689),
                        l = r(970),
                        p = r(9146),
                        f = r(1672),
                        d = r(4029),
                        h = r(7025),
                        v = r(9573),
                        g = r(9548),
                        y = r(3021),
                        _ = r(3949),
                        m = r(5667),
                        b = r(3233).set,
                        w = r(9722),
                        k = r(7416),
                        S = r(3576),
                        I = r(2576),
                        x = r(7832),
                        T = r(9512),
                        A = r(3984),
                        C = r(9203),
                        E = "Promise",
                        P = A.CONSTRUCTOR,
                        O = A.REJECTION_EVENT,
                        R = A.SUBCLASSING,
                        M = x.getterFor(E),
                        D = x.set,
                        j = T && T.prototype,
                        L = T,
                        N = j,
                        F = u.TypeError,
                        W = u.document,
                        $ = u.process,
                        B = C.f,
                        U = B,
                        q = !!(W && W.createEvent && u.dispatchEvent),
                        H = "unhandledrejection",
                        G = function(e) {
                            var t;
                            return !(!y(e) || !g(t = e.then)) && t
                        },
                        V = function(e, t) {
                            var r, n, a, o = t.value,
                                i = 1 == t.state,
                                s = i ? e.ok : e.fail,
                                c = e.resolve,
                                u = e.reject,
                                p = e.domain;
                            try {
                                s ? (i || (2 === t.rejection && Z(t), t.rejection = 1), !0 === s ? r = o : (p && p.enter(), r = s(o), p && (p.exit(), a = !0)), r === e.promise ? u(F("Promise-chain cycle")) : (n = G(r)) ? l(n, r, c, u) : c(r)) : u(o)
                            } catch (e) {
                                p && !a && p.exit(), u(e)
                            }
                        },
                        K = function(e, t) {
                            e.notified || (e.notified = !0, w((function() {
                                for (var r, n = e.reactions; r = n.get();) V(r, e);
                                e.notified = !1, t && !e.rejection && J(e)
                            })))
                        },
                        z = function(e, t, r) {
                            var n, a;
                            q ? ((n = W.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), u.dispatchEvent(n)) : n = {
                                promise: t,
                                reason: r
                            }, !O && (a = u["on" + e]) ? a(n) : e === H && k("Unhandled promise rejection", r)
                        },
                        J = function(e) {
                            l(b, u, (function() {
                                var t, r = e.facade,
                                    n = e.value;
                                if (Y(e) && (t = S((function() {
                                        c ? $.emit("unhandledRejection", n, r) : z(H, r, n)
                                    })), e.rejection = c || Y(e) ? 2 : 1, t.error)) throw t.value
                            }))
                        },
                        Y = function(e) {
                            return 1 !== e.rejection && !e.parent
                        },
                        Z = function(e) {
                            l(b, u, (function() {
                                var t = e.facade;
                                c ? $.emit("rejectionHandled", t) : z("rejectionhandled", t, e.value)
                            }))
                        },
                        Q = function(e, t, r) {
                            return function(n) {
                                e(t, n, r)
                            }
                        },
                        X = function(e, t, r) {
                            e.done || (e.done = !0, r && (e = r), e.value = t, e.state = 2, K(e, !0))
                        },
                        ee = function(e, t, r) {
                            if (!e.done) {
                                e.done = !0, r && (e = r);
                                try {
                                    if (e.facade === t) throw F("Promise can't be resolved itself");
                                    var n = G(t);
                                    n ? w((function() {
                                        var r = {
                                            done: !1
                                        };
                                        try {
                                            l(n, t, Q(ee, r, e), Q(X, r, e))
                                        } catch (t) {
                                            X(r, t, e)
                                        }
                                    })) : (e.value = t, e.state = 1, K(e, !1))
                                } catch (t) {
                                    X({
                                        done: !1
                                    }, t, e)
                                }
                            }
                        };
                    if (P && (N = (L = function(e) {
                            _(this, N), v(e), l(n, this);
                            var t = M(this);
                            try {
                                e(Q(ee, t), Q(X, t))
                            } catch (e) {
                                X(t, e)
                            }
                        }).prototype, (n = function(e) {
                            D(this, {
                                type: E,
                                done: !1,
                                notified: !1,
                                parent: !1,
                                reactions: new I,
                                rejection: !1,
                                state: 0,
                                value: void 0
                            })
                        }).prototype = p(N, "then", (function(e, t) {
                            var r = M(this),
                                n = B(m(this, L));
                            return r.parent = !0, n.ok = !g(e) || e, n.fail = g(t) && t, n.domain = c ? $.domain : void 0, 0 == r.state ? r.reactions.add(n) : w((function() {
                                V(n, r)
                            })), n.promise
                        })), a = function() {
                            var e = new n,
                                t = M(e);
                            this.promise = e, this.resolve = Q(ee, t), this.reject = Q(X, t)
                        }, C.f = B = function(e) {
                            return e === L || undefined === e ? new a(e) : U(e)
                        }, !s && g(T) && j !== Object.prototype)) {
                        o = j.then, R || p(j, "then", (function(e, t) {
                            var r = this;
                            return new L((function(e, t) {
                                l(o, r, e, t)
                            })).then(e, t)
                        }), {
                            unsafe: !0
                        });
                        try {
                            delete j.constructor
                        } catch (e) {}
                        f && f(j, N)
                    }
                    i({
                        global: !0,
                        constructor: !0,
                        wrap: !0,
                        forced: P
                    }, {
                        Promise: L
                    }), d(L, E, !1, !0), h(E)
                },
                3366: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(5231),
                        o = r(9512),
                        i = r(9835),
                        s = r(2555),
                        c = r(9548),
                        u = r(5667),
                        l = r(2988),
                        p = r(9146),
                        f = o && o.prototype;
                    if (n({
                            target: "Promise",
                            proto: !0,
                            real: !0,
                            forced: !!o && i((function() {
                                f.finally.call({
                                    then: function() {}
                                }, (function() {}))
                            }))
                        }, {
                            finally: function(e) {
                                var t = u(this, s("Promise")),
                                    r = c(e);
                                return this.then(r ? function(r) {
                                    return l(t, e()).then((function() {
                                        return r
                                    }))
                                } : e, r ? function(r) {
                                    return l(t, e()).then((function() {
                                        throw r
                                    }))
                                } : e)
                            }
                        }), !a && c(o)) {
                        var d = s("Promise").prototype.finally;
                        f.finally !== d && p(f, "finally", d, {
                            unsafe: !0
                        })
                    }
                },
                2167: (e, t, r) => {
                    r(1546), r(890), r(4745), r(4947), r(8237), r(8085)
                },
                4947: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(9203),
                        s = r(3576),
                        c = r(4760);
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: r(5774)
                    }, {
                        race: function(e) {
                            var t = this,
                                r = i.f(t),
                                n = r.reject,
                                u = s((function() {
                                    var i = o(t.resolve);
                                    c(e, (function(e) {
                                        a(i, t, e).then(r.resolve, n)
                                    }))
                                }));
                            return u.error && n(u.value), r.promise
                        }
                    })
                },
                8237: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9203);
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: r(3984).CONSTRUCTOR
                    }, {
                        reject: function(e) {
                            var t = o.f(this);
                            return a(t.reject, void 0, e), t.promise
                        }
                    })
                },
                8085: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(2555),
                        o = r(5231),
                        i = r(9512),
                        s = r(3984).CONSTRUCTOR,
                        c = r(2988),
                        u = a("Promise"),
                        l = o && !s;
                    n({
                        target: "Promise",
                        stat: !0,
                        forced: o || s
                    }, {
                        resolve: function(e) {
                            return c(l && this === u ? i : this, e)
                        }
                    })
                },
                3517: (e, t, r) => {
                    var n = r(5077),
                        a = r(2689),
                        o = r(4029);
                    n({
                        global: !0
                    }, {
                        Reflect: {}
                    }), o(a.Reflect, "Reflect", !0)
                },
                5403: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(8627);
                    n({
                        target: "RegExp",
                        proto: !0,
                        forced: /./.exec !== a
                    }, {
                        exec: a
                    })
                },
                909: (e, t, r) => {
                    var n = r(2689),
                        a = r(8521),
                        o = r(4173),
                        i = r(9811),
                        s = r(9835),
                        c = n.RegExp,
                        u = c.prototype;
                    a && s((function() {
                        var e = !0;
                        try {
                            c(".", "d")
                        } catch (t) {
                            e = !1
                        }
                        var t = {},
                            r = "",
                            n = e ? "dgimsy" : "gimsy",
                            a = function(e, n) {
                                Object.defineProperty(t, e, {
                                    get: function() {
                                        return r += n, !0
                                    }
                                })
                            },
                            o = {
                                dotAll: "s",
                                global: "g",
                                ignoreCase: "i",
                                multiline: "m",
                                sticky: "y"
                            };
                        for (var i in e && (o.hasIndices = "d"), o) a(i, o[i]);
                        return Object.getOwnPropertyDescriptor(u, "flags").get.call(t) !== n || r !== n
                    })) && o(u, "flags", {
                        configurable: !0,
                        get: i
                    })
                },
                4744: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(6619),
                        o = r(8602),
                        i = r(8299),
                        s = r(9013),
                        c = r(9835),
                        u = a("".charAt);
                    n({
                        target: "String",
                        proto: !0,
                        forced: c((function() {
                            return "\ud842" !== "𠮷".at(-2)
                        }))
                    }, {
                        at: function(e) {
                            var t = s(o(this)),
                                r = t.length,
                                n = i(e),
                                a = n >= 0 ? n : r + n;
                            return a < 0 || a >= r ? void 0 : u(t, a)
                        }
                    })
                },
                164: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(3482),
                        i = r(4610),
                        s = r(2549),
                        c = r(8602),
                        u = r(6443),
                        l = r(9013),
                        p = r(7981),
                        f = r(9799),
                        d = r(1335),
                        h = r(5781),
                        v = r(3715),
                        g = r(2317),
                        y = r(9146),
                        _ = r(9835),
                        m = r(6250),
                        b = r(5667),
                        w = r(5563),
                        k = r(8343),
                        S = r(7832),
                        I = r(5231),
                        x = m("matchAll"),
                        T = "RegExp String",
                        A = T + " Iterator",
                        C = S.set,
                        E = S.getterFor(A),
                        P = RegExp.prototype,
                        O = TypeError,
                        R = o("".indexOf),
                        M = o("".matchAll),
                        D = !!M && !_((function() {
                            M("a", /./)
                        })),
                        j = i((function(e, t, r, n) {
                            C(this, {
                                type: A,
                                regexp: e,
                                string: t,
                                global: r,
                                unicode: n,
                                done: !1
                            })
                        }), T, (function() {
                            var e = E(this);
                            if (e.done) return s(void 0, !0);
                            var t = e.regexp,
                                r = e.string,
                                n = k(t, r);
                            return null === n ? (e.done = !0, s(void 0, !0)) : e.global ? ("" === l(n[0]) && (t.lastIndex = w(r, u(t.lastIndex), e.unicode)), s(n, !1)) : (e.done = !0, s(n, !1))
                        })),
                        L = function(e) {
                            var t, r, n, a = p(this),
                                o = l(e),
                                i = b(a, RegExp),
                                s = l(v(a));
                            return t = new i(i === RegExp ? a.source : a, s), r = !!~R(s, "g"), n = !!~R(s, "u"), t.lastIndex = u(a.lastIndex), new j(t, o, r, n)
                        };
                    n({
                        target: "String",
                        proto: !0,
                        forced: D
                    }, {
                        matchAll: function(e) {
                            var t, r, n, o, i = c(this);
                            if (f(e)) {
                                if (D) return M(i, e)
                            } else {
                                if (h(e) && (t = l(c(v(e))), !~R(t, "g"))) throw O("`.matchAll` does not allow non-global regexes");
                                if (D) return M(i, e);
                                if (void 0 === (n = g(e, x)) && I && "RegExp" == d(e) && (n = L), n) return a(n, e, i)
                            }
                            return r = l(i), o = new RegExp(e, "g"), I ? a(L, o, r) : o[x](r)
                        }
                    }), I || x in P || y(P, x, L)
                },
                4481: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(6619),
                        i = r(8602),
                        s = r(9548),
                        c = r(9799),
                        u = r(5781),
                        l = r(9013),
                        p = r(2317),
                        f = r(3715),
                        d = r(2754),
                        h = r(6250),
                        v = r(5231),
                        g = h("replace"),
                        y = TypeError,
                        _ = o("".indexOf),
                        m = o("".replace),
                        b = o("".slice),
                        w = Math.max,
                        k = function(e, t, r) {
                            return r > e.length ? -1 : "" === t ? r : _(e, t, r)
                        };
                    n({
                        target: "String",
                        proto: !0
                    }, {
                        replaceAll: function(e, t) {
                            var r, n, o, h, S, I, x, T, A, C = i(this),
                                E = 0,
                                P = 0,
                                O = "";
                            if (!c(e)) {
                                if ((r = u(e)) && (n = l(i(f(e))), !~_(n, "g"))) throw y("`.replaceAll` does not allow non-global regexes");
                                if (o = p(e, g)) return a(o, e, C, t);
                                if (v && r) return m(l(C), e, t)
                            }
                            for (h = l(C), S = l(e), (I = s(t)) || (t = l(t)), x = S.length, T = w(1, x), E = k(h, S, 0); - 1 !== E;) A = I ? l(t(S, E, h)) : d(S, h, E, [], void 0, t), O += b(h, P, E) + A, P = E + x, E = k(h, S, E + T);
                            return P < h.length && (O += b(h, P)), O
                        }
                    })
                },
                1943: (e, t, r) => {
                    "use strict";
                    var n = r(352),
                        a = r(970),
                        o = r(6619),
                        i = r(1552),
                        s = r(9835),
                        c = r(7981),
                        u = r(9548),
                        l = r(9799),
                        p = r(8299),
                        f = r(6443),
                        d = r(9013),
                        h = r(8602),
                        v = r(5563),
                        g = r(2317),
                        y = r(2754),
                        _ = r(8343),
                        m = r(6250)("replace"),
                        b = Math.max,
                        w = Math.min,
                        k = o([].concat),
                        S = o([].push),
                        I = o("".indexOf),
                        x = o("".slice),
                        T = "$0" === "a".replace(/./, "$0"),
                        A = !!/./ [m] && "" === /./ [m]("a", "$0");
                    i("replace", (function(e, t, r) {
                        var o = A ? "$" : "$0";
                        return [function(e, r) {
                            var n = h(this),
                                o = l(e) ? void 0 : g(e, m);
                            return o ? a(o, e, n, r) : a(t, d(n), e, r)
                        }, function(e, a) {
                            var i = c(this),
                                s = d(e);
                            if ("string" == typeof a && -1 === I(a, o) && -1 === I(a, "$<")) {
                                var l = r(t, i, s, a);
                                if (l.done) return l.value
                            }
                            var h = u(a);
                            h || (a = d(a));
                            var g = i.global;
                            if (g) {
                                var m = i.unicode;
                                i.lastIndex = 0
                            }
                            for (var T = [];;) {
                                var A = _(i, s);
                                if (null === A) break;
                                if (S(T, A), !g) break;
                                "" === d(A[0]) && (i.lastIndex = v(s, f(i.lastIndex), m))
                            }
                            for (var C, E = "", P = 0, O = 0; O < T.length; O++) {
                                for (var R = d((A = T[O])[0]), M = b(w(p(A.index), s.length), 0), D = [], j = 1; j < A.length; j++) S(D, void 0 === (C = A[j]) ? C : String(C));
                                var L = A.groups;
                                if (h) {
                                    var N = k([R], D, M, s);
                                    void 0 !== L && S(N, L);
                                    var F = d(n(a, void 0, N))
                                } else F = y(R, s, M, D, L, a);
                                M >= P && (E += x(s, P, M) + F, P = M + R.length)
                            }
                            return E + x(s, P)
                        }]
                    }), !!s((function() {
                        var e = /./;
                        return e.exec = function() {
                            var e = [];
                            return e.groups = {
                                a: "7"
                            }, e
                        }, "7" !== "".replace(e, "$<a>")
                    })) || !T || A)
                },
                5149: (e, t, r) => {
                    r(4458);
                    var n = r(5077),
                        a = r(9133);
                    n({
                        target: "String",
                        proto: !0,
                        name: "trimEnd",
                        forced: "".trimEnd !== a
                    }, {
                        trimEnd: a
                    })
                },
                4458: (e, t, r) => {
                    var n = r(5077),
                        a = r(9133);
                    n({
                        target: "String",
                        proto: !0,
                        name: "trimEnd",
                        forced: "".trimRight !== a
                    }, {
                        trimRight: a
                    })
                },
                9228: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(5272).trim;
                    n({
                        target: "String",
                        proto: !0,
                        forced: r(5238)("trim")
                    }, {
                        trim: function() {
                            return a(this)
                        }
                    })
                },
                889: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(8521),
                        o = r(2689),
                        i = r(6619),
                        s = r(5835),
                        c = r(9548),
                        u = r(631),
                        l = r(9013),
                        p = r(4173),
                        f = r(4361),
                        d = o.Symbol,
                        h = d && d.prototype;
                    if (a && c(d) && (!("description" in h) || void 0 !== d().description)) {
                        var v = {},
                            g = function() {
                                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : l(arguments[0]),
                                    t = u(h, this) ? new d(e) : void 0 === e ? d() : d(e);
                                return "" === e && (v[t] = !0), t
                            };
                        f(g, d), g.prototype = h, h.constructor = g;
                        var y = "Symbol(test)" == String(d("test")),
                            _ = i(h.valueOf),
                            m = i(h.toString),
                            b = /^Symbol\((.*)\)[^)]+$/,
                            w = i("".replace),
                            k = i("".slice);
                        p(h, "description", {
                            configurable: !0,
                            get: function() {
                                var e = _(this);
                                if (s(v, e)) return "";
                                var t = m(e),
                                    r = y ? k(t, 7, -1) : w(t, b, "$1");
                                return "" === r ? void 0 : r
                            }
                        }), n({
                            global: !0,
                            constructor: !0,
                            forced: !0
                        }, {
                            Symbol: g
                        })
                    }
                },
                9778: (e, t, r) => {
                    r(1274)("matchAll")
                },
                7841: (e, t, r) => {
                    "use strict";
                    var n = r(7854),
                        a = r(56),
                        o = r(8299),
                        i = n.aTypedArray;
                    (0, n.exportTypedArrayMethod)("at", (function(e) {
                        var t = i(this),
                            r = a(t),
                            n = o(e),
                            s = n >= 0 ? n : r + n;
                        return s < 0 || s >= r ? void 0 : t[s]
                    }))
                },
                5906: (e, t, r) => {
                    "use strict";
                    var n = r(7854),
                        a = r(5035),
                        o = r(710),
                        i = r(7221),
                        s = r(970),
                        c = r(6619),
                        u = r(9835),
                        l = n.aTypedArray,
                        p = n.exportTypedArrayMethod,
                        f = c("".slice);
                    p("fill", (function(e) {
                        var t = arguments.length;
                        l(this);
                        var r = "Big" === f(i(this), 0, 3) ? o(e) : +e;
                        return s(a, this, r, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0)
                    }), u((function() {
                        var e = 0;
                        return new Int8Array(2).fill({
                            valueOf: function() {
                                return e++
                            }
                        }), 1 !== e
                    })))
                },
                5822: (e, t, r) => {
                    "use strict";
                    var n = r(7854),
                        a = r(3792).findLastIndex,
                        o = n.aTypedArray;
                    (0, n.exportTypedArrayMethod)("findLastIndex", (function(e) {
                        return a(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                3719: (e, t, r) => {
                    "use strict";
                    var n = r(7854),
                        a = r(3792).findLast,
                        o = n.aTypedArray;
                    (0, n.exportTypedArrayMethod)("findLast", (function(e) {
                        return a(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                2815: (e, t, r) => {
                    r(9919)("Float32", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }))
                },
                5595: (e, t, r) => {
                    r(9919)("Float64", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }))
                },
                1189: (e, t, r) => {
                    "use strict";
                    var n = r(3471);
                    (0, r(7854).exportTypedArrayStaticMethod)("from", r(8382), n)
                },
                8931: (e, t, r) => {
                    r(9919)("Int16", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }))
                },
                3209: (e, t, r) => {
                    r(9919)("Int32", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }))
                },
                950: (e, t, r) => {
                    r(9919)("Int8", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }))
                },
                7017: (e, t, r) => {
                    "use strict";
                    var n = r(7854),
                        a = r(3471),
                        o = n.aTypedArrayConstructor;
                    (0, n.exportTypedArrayStaticMethod)("of", (function() {
                        for (var e = 0, t = arguments.length, r = new(o(this))(t); t > e;) r[e] = arguments[e++];
                        return r
                    }), a)
                },
                9589: (e, t, r) => {
                    "use strict";
                    var n = r(2689),
                        a = r(970),
                        o = r(7854),
                        i = r(56),
                        s = r(3092),
                        c = r(18),
                        u = r(9835),
                        l = n.RangeError,
                        p = n.Int8Array,
                        f = p && p.prototype,
                        d = f && f.set,
                        h = o.aTypedArray,
                        v = o.exportTypedArrayMethod,
                        g = !u((function() {
                            var e = new Uint8ClampedArray(2);
                            return a(d, e, {
                                length: 1,
                                0: 3
                            }, 1), 3 !== e[1]
                        })),
                        y = g && o.NATIVE_ARRAY_BUFFER_VIEWS && u((function() {
                            var e = new p(2);
                            return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1]
                        }));
                    v("set", (function(e) {
                        h(this);
                        var t = s(arguments.length > 1 ? arguments[1] : void 0, 1),
                            r = c(e);
                        if (g) return a(d, this, r, t);
                        var n = this.length,
                            o = i(r),
                            u = 0;
                        if (o + t > n) throw l("Wrong length");
                        for (; u < o;) this[t + u] = r[u++]
                    }), !g || y)
                },
                5428: (e, t, r) => {
                    "use strict";
                    var n = r(2689),
                        a = r(3482),
                        o = r(9835),
                        i = r(9573),
                        s = r(2026),
                        c = r(7854),
                        u = r(3262),
                        l = r(1353),
                        p = r(9168),
                        f = r(2842),
                        d = c.aTypedArray,
                        h = c.exportTypedArrayMethod,
                        v = n.Uint16Array,
                        g = v && a(v.prototype.sort),
                        y = !(!g || o((function() {
                            g(new v(2), null)
                        })) && o((function() {
                            g(new v(2), {})
                        }))),
                        _ = !!g && !o((function() {
                            if (p) return p < 74;
                            if (u) return u < 67;
                            if (l) return !0;
                            if (f) return f < 602;
                            var e, t, r = new v(516),
                                n = Array(516);
                            for (e = 0; e < 516; e++) t = e % 4, r[e] = 515 - e, n[e] = e - 2 * t + 3;
                            for (g(r, (function(e, t) {
                                    return (e / 4 | 0) - (t / 4 | 0)
                                })), e = 0; e < 516; e++)
                                if (r[e] !== n[e]) return !0
                        }));
                    h("sort", (function(e) {
                        return void 0 !== e && i(e), _ ? g(this, e) : s(d(this), function(e) {
                            return function(t, r) {
                                return void 0 !== e ? +e(t, r) || 0 : r != r ? -1 : t != t ? 1 : 0 === t && 0 === r ? 1 / t > 0 && 1 / r < 0 ? 1 : -1 : t > r
                            }
                        }(e))
                    }), !_ || y)
                },
                6706: (e, t, r) => {
                    "use strict";
                    var n = r(6203),
                        a = r(7854),
                        o = a.aTypedArray,
                        i = a.exportTypedArrayMethod,
                        s = a.getTypedArrayConstructor;
                    i("toReversed", (function() {
                        return n(o(this), s(this))
                    }))
                },
                3002: (e, t, r) => {
                    "use strict";
                    var n = r(7854),
                        a = r(6619),
                        o = r(9573),
                        i = r(113),
                        s = n.aTypedArray,
                        c = n.getTypedArrayConstructor,
                        u = n.exportTypedArrayMethod,
                        l = a(n.TypedArrayPrototype.sort);
                    u("toSorted", (function(e) {
                        void 0 !== e && o(e);
                        var t = s(this),
                            r = i(c(t), t);
                        return l(r, e)
                    }))
                },
                6469: (e, t, r) => {
                    r(9919)("Uint16", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }))
                },
                4730: (e, t, r) => {
                    r(9919)("Uint32", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }))
                },
                968: (e, t, r) => {
                    r(9919)("Uint8", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }))
                },
                55: (e, t, r) => {
                    r(9919)("Uint8", (function(e) {
                        return function(t, r, n) {
                            return e(this, t, r, n)
                        }
                    }), !0)
                },
                9303: (e, t, r) => {
                    "use strict";
                    var n = r(4784),
                        a = r(7854),
                        o = r(2488),
                        i = r(8299),
                        s = r(710),
                        c = a.aTypedArray,
                        u = a.getTypedArrayConstructor,
                        l = a.exportTypedArrayMethod,
                        p = !! function() {
                            try {
                                new Int8Array(1).with(2, {
                                    valueOf: function() {
                                        throw 8
                                    }
                                })
                            } catch (e) {
                                return 8 === e
                            }
                        }();
                    l("with", {
                        with: function(e, t) {
                            var r = c(this),
                                a = i(e),
                                l = o(r) ? s(t) : +t;
                            return n(r, u(r), a, l)
                        }
                    }.with, !p)
                },
                4570: (e, t, r) => {
                    r(4006)
                },
                1339: (e, t, r) => {
                    r(6291)
                },
                3785: (e, t, r) => {
                    r(2495)
                },
                472: (e, t, r) => {
                    r(2933)
                },
                5957: (e, t, r) => {
                    r(5077)({
                        target: "Array",
                        stat: !0
                    }, {
                        fromAsync: r(778)
                    })
                },
                27: (e, t, r) => {
                    var n = r(5077),
                        a = r(6732),
                        o = r(4014),
                        i = r(5931);
                    n({
                        target: "Array",
                        proto: !0,
                        name: "groupToMap",
                        forced: r(5231) || !a("groupByToMap")
                    }, {
                        groupByToMap: i
                    }), o("groupByToMap")
                },
                8569: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(9639),
                        o = r(6732),
                        i = r(4014);
                    n({
                        target: "Array",
                        proto: !0,
                        forced: !o("groupBy")
                    }, {
                        groupBy: function(e) {
                            return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), i("groupBy")
                },
                146: (e, t, r) => {
                    var n = r(5077),
                        a = r(4014),
                        o = r(5931);
                    n({
                        target: "Array",
                        proto: !0,
                        forced: r(5231)
                    }, {
                        groupToMap: o
                    }), a("groupToMap")
                },
                3924: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(9639),
                        o = r(4014);
                    n({
                        target: "Array",
                        proto: !0
                    }, {
                        group: function(e) {
                            return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), o("group")
                },
                699: (e, t, r) => {
                    r(503)
                },
                5544: (e, t, r) => {
                    r(624)
                },
                7712: (e, t, r) => {
                    r(9349)
                },
                7515: (e, t, r) => {
                    r(1398)
                },
                2048: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(3949),
                        o = r(1720),
                        i = r(5835),
                        s = r(6250),
                        c = r(2342),
                        u = r(5231),
                        l = s("toStringTag"),
                        p = function() {
                            a(this, c)
                        };
                    p.prototype = c, i(c, l) || o(c, l, "AsyncIterator"), !u && i(c, "constructor") && c.constructor !== Object || o(c, "constructor", p), n({
                        global: !0,
                        constructor: !0,
                        forced: u
                    }, {
                        AsyncIterator: p
                    })
                },
                3818: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(7981),
                        i = r(6302),
                        s = r(9024),
                        c = r(6382),
                        u = r(5817),
                        l = r(2549),
                        p = u((function(e) {
                            var t = this;
                            return new e((function(r, n) {
                                var i = function(e) {
                                        t.done = !0, n(e)
                                    },
                                    s = function() {
                                        try {
                                            e.resolve(o(a(t.next, t.iterator))).then((function(e) {
                                                try {
                                                    o(e).done ? (t.done = !0, r(l(void 0, !0))) : t.remaining ? (t.remaining--, s()) : r(l(e.value, !1))
                                                } catch (e) {
                                                    i(e)
                                                }
                                            }), i)
                                        } catch (e) {
                                            i(e)
                                        }
                                    };
                                s()
                            }))
                        }));
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        drop: function(e) {
                            return new p(i(this), {
                                remaining: c(s(+e))
                            })
                        }
                    })
                },
                1199: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(9937).every;
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        every: function(e) {
                            return a(this, e)
                        }
                    })
                },
                8973: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(7981),
                        s = r(3021),
                        c = r(6302),
                        u = r(5817),
                        l = r(2549),
                        p = r(86),
                        f = u((function(e) {
                            var t = this,
                                r = t.iterator,
                                n = t.predicate;
                            return new e((function(o, c) {
                                var u = function(e) {
                                        t.done = !0, c(e)
                                    },
                                    f = function(e) {
                                        p(r, u, e, u)
                                    },
                                    d = function() {
                                        try {
                                            e.resolve(i(a(t.next, r))).then((function(r) {
                                                try {
                                                    if (i(r).done) t.done = !0, o(l(void 0, !0));
                                                    else {
                                                        var a = r.value;
                                                        try {
                                                            var c = n(a, t.counter++),
                                                                p = function(e) {
                                                                    e ? o(l(a, !1)) : d()
                                                                };
                                                            s(c) ? e.resolve(c).then(p, f) : p(c)
                                                        } catch (e) {
                                                            f(e)
                                                        }
                                                    }
                                                } catch (e) {
                                                    u(e)
                                                }
                                            }), u)
                                        } catch (e) {
                                            u(e)
                                        }
                                    };
                                d()
                            }))
                        }));
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        filter: function(e) {
                            return new f(c(this), {
                                predicate: o(e)
                            })
                        }
                    })
                },
                8360: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(9937).find;
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        find: function(e) {
                            return a(this, e)
                        }
                    })
                },
                8294: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(7981),
                        s = r(3021),
                        c = r(6302),
                        u = r(5817),
                        l = r(2549),
                        p = r(5968),
                        f = r(86),
                        d = u((function(e) {
                            var t = this,
                                r = t.iterator,
                                n = t.mapper;
                            return new e((function(o, c) {
                                var u = function(e) {
                                        t.done = !0, c(e)
                                    },
                                    d = function(e) {
                                        f(r, u, e, u)
                                    },
                                    h = function() {
                                        try {
                                            e.resolve(i(a(t.next, r))).then((function(r) {
                                                try {
                                                    if (i(r).done) t.done = !0, o(l(void 0, !0));
                                                    else {
                                                        var a = r.value;
                                                        try {
                                                            var c = n(a, t.counter++),
                                                                f = function(e) {
                                                                    try {
                                                                        t.inner = p(e), v()
                                                                    } catch (e) {
                                                                        d(e)
                                                                    }
                                                                };
                                                            s(c) ? e.resolve(c).then(f, d) : f(c)
                                                        } catch (e) {
                                                            d(e)
                                                        }
                                                    }
                                                } catch (e) {
                                                    u(e)
                                                }
                                            }), u)
                                        } catch (e) {
                                            u(e)
                                        }
                                    },
                                    v = function() {
                                        var r = t.inner;
                                        if (r) try {
                                            e.resolve(i(a(r.next, r.iterator))).then((function(e) {
                                                try {
                                                    i(e).done ? (t.inner = null, h()) : o(l(e.value, !1))
                                                } catch (e) {
                                                    d(e)
                                                }
                                            }), d)
                                        } catch (e) {
                                            d(e)
                                        } else h()
                                    };
                                v()
                            }))
                        }));
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        flatMap: function(e) {
                            return new d(c(this), {
                                mapper: o(e),
                                inner: null
                            })
                        }
                    })
                },
                5358: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(9937).forEach;
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        forEach: function(e) {
                            return a(this, e)
                        }
                    })
                },
                4255: (e, t, r) => {
                    var n = r(5077),
                        a = r(18),
                        o = r(631),
                        i = r(5968),
                        s = r(2342),
                        c = r(6784);
                    n({
                        target: "AsyncIterator",
                        stat: !0
                    }, {
                        from: function(e) {
                            var t = i("string" == typeof e ? a(e) : e);
                            return o(s, t.iterator) ? t.iterator : new c(t)
                        }
                    })
                },
                7022: (e, t, r) => {
                    r(5077)({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        map: r(3101)
                    })
                },
                3586: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(7981),
                        s = r(3021),
                        c = r(2555),
                        u = r(6302),
                        l = r(86),
                        p = c("Promise"),
                        f = TypeError;
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        reduce: function(e) {
                            var t = u(this),
                                r = t.iterator,
                                n = t.next,
                                c = arguments.length < 2,
                                d = c ? void 0 : arguments[1],
                                h = 0;
                            return o(e), new p((function(t, o) {
                                var u = function(e) {
                                        l(r, o, e, o)
                                    },
                                    v = function() {
                                        try {
                                            p.resolve(i(a(n, r))).then((function(r) {
                                                try {
                                                    if (i(r).done) c ? o(f("Reduce of empty iterator with no initial value")) : t(d);
                                                    else {
                                                        var n = r.value;
                                                        if (c) c = !1, d = n, v();
                                                        else try {
                                                            var a = e(d, n, h),
                                                                l = function(e) {
                                                                    d = e, v()
                                                                };
                                                            s(a) ? p.resolve(a).then(l, u) : l(a)
                                                        } catch (e) {
                                                            u(e)
                                                        }
                                                    }
                                                    h++
                                                } catch (e) {
                                                    o(e)
                                                }
                                            }), o)
                                        } catch (e) {
                                            o(e)
                                        }
                                    };
                                v()
                            }))
                        }
                    })
                },
                3588: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(9937).some;
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        some: function(e) {
                            return a(this, e)
                        }
                    })
                },
                6570: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(7981),
                        i = r(6302),
                        s = r(9024),
                        c = r(6382),
                        u = r(5817),
                        l = r(2549),
                        p = u((function(e) {
                            var t, r = this,
                                n = r.iterator;
                            if (!r.remaining--) {
                                var i = l(void 0, !0);
                                return r.done = !0, void 0 !== (t = n.return) ? e.resolve(a(t, n, void 0)).then((function() {
                                    return i
                                })) : i
                            }
                            return e.resolve(a(r.next, n)).then((function(e) {
                                return o(e).done ? (r.done = !0, l(void 0, !0)) : l(e.value, !1)
                            })).then(null, (function(e) {
                                throw r.done = !0, e
                            }))
                        }));
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        take: function(e) {
                            return new p(i(this), {
                                remaining: c(s(+e))
                            })
                        }
                    })
                },
                281: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(9937).toArray;
                    n({
                        target: "AsyncIterator",
                        proto: !0,
                        real: !0
                    }, {
                        toArray: function() {
                            return a(this, void 0, [])
                        }
                    })
                },
                289: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(8521),
                        o = r(2555),
                        i = r(9573),
                        s = r(3949),
                        c = r(9146),
                        u = r(2669),
                        l = r(4173),
                        p = r(6250),
                        f = r(7832),
                        d = r(6539),
                        h = o("SuppressedError"),
                        v = ReferenceError,
                        g = p("dispose"),
                        y = p("toStringTag"),
                        _ = "DisposableStack",
                        m = f.set,
                        b = f.getterFor(_),
                        w = "sync-dispose",
                        k = "disposed",
                        S = _ + " already disposed",
                        I = function() {
                            m(s(this, x), {
                                type: _,
                                state: "pending",
                                stack: []
                            }), a || (this.disposed = !1)
                        },
                        x = I.prototype;
                    u(x, {
                        dispose: function() {
                            var e = b(this);
                            if (e.state != k) {
                                e.state = k, a || (this.disposed = !0);
                                for (var t, r = e.stack, n = r.length, o = !1; n;) {
                                    var i = r[--n];
                                    r[n] = null;
                                    try {
                                        i()
                                    } catch (e) {
                                        o ? t = new h(e, t) : (o = !0, t = e)
                                    }
                                }
                                if (e.stack = null, o) throw t
                            }
                        },
                        use: function(e) {
                            var t = b(this);
                            if (t.state == k) throw v(S);
                            return d(t, e, w), e
                        },
                        adopt: function(e, t) {
                            var r = b(this);
                            if (r.state == k) throw v(S);
                            return i(t), d(r, void 0, w, (function() {
                                t(e)
                            })), e
                        },
                        defer: function(e) {
                            var t = b(this);
                            if (t.state == k) throw v(S);
                            i(e), d(t, void 0, w, e)
                        },
                        move: function() {
                            var e = b(this);
                            if (e.state == k) throw v(S);
                            var t = new I;
                            return b(t).stack = e.stack, e.stack = [], t
                        }
                    }), a && l(x, "disposed", {
                        configurable: !0,
                        get: function() {
                            return b(this).state == k
                        }
                    }), c(x, g, x.dispose, {
                        name: "dispose"
                    }), c(x, y, _, {
                        nonWritable: !0
                    }), n({
                        global: !0,
                        constructor: !0
                    }, {
                        DisposableStack: I
                    })
                },
                1313: (e, t, r) => {
                    r(3194)
                },
                6032: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(2689),
                        o = r(3949),
                        i = r(9548),
                        s = r(1720),
                        c = r(9835),
                        u = r(5835),
                        l = r(6250),
                        p = r(7357).IteratorPrototype,
                        f = r(5231),
                        d = l("toStringTag"),
                        h = a.Iterator,
                        v = f || !i(h) || h.prototype !== p || !c((function() {
                            h({})
                        })),
                        g = function() {
                            o(this, p)
                        };
                    u(p, d) || s(p, d, "Iterator"), !v && u(p, "constructor") && p.constructor !== Object || s(p, "constructor", g), g.prototype = p, n({
                        global: !0,
                        constructor: !0,
                        forced: v
                    }, {
                        Iterator: g
                    })
                },
                1865: (e, t, r) => {
                    "use strict";
                    var n = r(970),
                        a = r(9146),
                        o = r(2317),
                        i = r(5835),
                        s = r(6250),
                        c = r(7357).IteratorPrototype,
                        u = s("dispose");
                    i(c, u) || a(c, u, (function() {
                        var e = o(this, "return");
                        e && n(e, this)
                    }))
                },
                3182: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(7981),
                        i = r(6302),
                        s = r(9024),
                        c = r(6382),
                        u = r(3389)((function() {
                            for (var e, t = this.iterator, r = this.next; this.remaining;)
                                if (this.remaining--, e = o(a(r, t)), this.done = !!e.done) return;
                            if (e = o(a(r, t)), !(this.done = !!e.done)) return e.value
                        }));
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        drop: function(e) {
                            return new u(i(this), {
                                remaining: c(s(+e))
                            })
                        }
                    })
                },
                6936: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(4760),
                        o = r(9573),
                        i = r(6302);
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        every: function(e) {
                            var t = i(this),
                                r = 0;
                            return o(e), !a(t, (function(t, n) {
                                if (!e(t, r++)) return n()
                            }), {
                                IS_RECORD: !0,
                                INTERRUPTED: !0
                            }).stopped
                        }
                    })
                },
                7217: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(7981),
                        s = r(6302),
                        c = r(3389),
                        u = r(579),
                        l = c((function() {
                            for (var e, t, r = this.iterator, n = this.predicate, o = this.next;;) {
                                if (e = i(a(o, r)), this.done = !!e.done) return;
                                if (t = e.value, u(r, n, [t, this.counter++], !0)) return t
                            }
                        }));
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        filter: function(e) {
                            return new l(s(this), {
                                predicate: o(e)
                            })
                        }
                    })
                },
                2491: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(4760),
                        o = r(9573),
                        i = r(6302);
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        find: function(e) {
                            var t = i(this),
                                r = 0;
                            return o(e), a(t, (function(t, n) {
                                if (e(t, r++)) return n(t)
                            }), {
                                IS_RECORD: !0,
                                INTERRUPTED: !0
                            }).result
                        }
                    })
                },
                8215: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(9573),
                        i = r(7981),
                        s = r(6302),
                        c = r(894),
                        u = r(3389),
                        l = r(7087),
                        p = u((function() {
                            for (var e, t, r = this.iterator, n = this.mapper;;) {
                                if (t = this.inner) try {
                                    if (!(e = i(a(t.next, t.iterator))).done) return e.value;
                                    this.inner = null
                                } catch (e) {
                                    l(r, "throw", e)
                                }
                                if (e = i(a(this.next, r)), this.done = !!e.done) return;
                                try {
                                    this.inner = c(n(e.value, this.counter++))
                                } catch (e) {
                                    l(r, "throw", e)
                                }
                            }
                        }));
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        flatMap: function(e) {
                            return new p(s(this), {
                                mapper: o(e),
                                inner: null
                            })
                        }
                    })
                },
                7153: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(4760),
                        o = r(9573),
                        i = r(6302);
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        forEach: function(e) {
                            var t = i(this),
                                r = 0;
                            o(e), a(t, (function(t) {
                                e(t, r++)
                            }), {
                                IS_RECORD: !0
                            })
                        }
                    })
                },
                7279: (e, t, r) => {
                    var n = r(5077),
                        a = r(970),
                        o = r(18),
                        i = r(631),
                        s = r(7357).IteratorPrototype,
                        c = r(3389),
                        u = r(894),
                        l = c((function() {
                            return a(this.next, this.iterator)
                        }), !0);
                    n({
                        target: "Iterator",
                        stat: !0
                    }, {
                        from: function(e) {
                            var t = u("string" == typeof e ? o(e) : e);
                            return i(s, t.iterator) ? t.iterator : new l(t)
                        }
                    })
                },
                9833: (e, t, r) => {
                    r(5077)({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        map: r(5504)
                    })
                },
                9183: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(4760),
                        o = r(9573),
                        i = r(6302),
                        s = TypeError;
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        reduce: function(e) {
                            var t = i(this);
                            o(e);
                            var r = arguments.length < 2,
                                n = r ? void 0 : arguments[1],
                                c = 0;
                            if (a(t, (function(t) {
                                    r ? (r = !1, n = t) : n = e(n, t, c), c++
                                }), {
                                    IS_RECORD: !0
                                }), r) throw s("Reduce of empty iterator with no initial value");
                            return n
                        }
                    })
                },
                6916: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(4760),
                        o = r(9573),
                        i = r(6302);
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        some: function(e) {
                            var t = i(this),
                                r = 0;
                            return o(e), a(t, (function(t, n) {
                                if (e(t, r++)) return n()
                            }), {
                                IS_RECORD: !0,
                                INTERRUPTED: !0
                            }).stopped
                        }
                    })
                },
                9988: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(7981),
                        i = r(6302),
                        s = r(9024),
                        c = r(6382),
                        u = r(3389),
                        l = r(7087),
                        p = u((function() {
                            var e = this.iterator;
                            if (!this.remaining--) return this.done = !0, l(e, "normal", void 0);
                            var t = o(a(this.next, e));
                            return (this.done = !!t.done) ? void 0 : t.value
                        }));
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        take: function(e) {
                            return new p(i(this), {
                                remaining: c(s(+e))
                            })
                        }
                    })
                },
                1716: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(4760),
                        o = r(6302),
                        i = [].push;
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        toArray: function() {
                            var e = [];
                            return a(o(this), i, {
                                that: e,
                                IS_RECORD: !0
                            }), e
                        }
                    })
                },
                673: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(2429),
                        o = r(6784),
                        i = r(6302);
                    n({
                        target: "Iterator",
                        proto: !0,
                        real: !0
                    }, {
                        toAsync: function() {
                            return new o(i(new a(i(this))))
                        }
                    })
                },
                2858: (e, t, r) => {
                    r(9696)
                },
                332: (e, t, r) => {
                    r(4371)
                },
                5475: (e, t, r) => {
                    r(5422)
                },
                5628: (e, t, r) => {
                    var n = r(5077),
                        a = r(3472);
                    n({
                        target: "Set",
                        proto: !0,
                        real: !0,
                        forced: !r(4001)("difference")
                    }, {
                        difference: a
                    })
                },
                5827: (e, t, r) => {
                    var n = r(5077),
                        a = r(4228);
                    n({
                        target: "Set",
                        proto: !0,
                        real: !0,
                        forced: !r(4001)("intersection")
                    }, {
                        intersection: a
                    })
                },
                1361: (e, t, r) => {
                    var n = r(5077),
                        a = r(9728);
                    n({
                        target: "Set",
                        proto: !0,
                        real: !0,
                        forced: !r(4001)("isDisjointFrom")
                    }, {
                        isDisjointFrom: a
                    })
                },
                5996: (e, t, r) => {
                    var n = r(5077),
                        a = r(7214);
                    n({
                        target: "Set",
                        proto: !0,
                        real: !0,
                        forced: !r(4001)("isSubsetOf")
                    }, {
                        isSubsetOf: a
                    })
                },
                6366: (e, t, r) => {
                    var n = r(5077),
                        a = r(6781);
                    n({
                        target: "Set",
                        proto: !0,
                        real: !0,
                        forced: !r(4001)("isSupersetOf")
                    }, {
                        isSupersetOf: a
                    })
                },
                7151: (e, t, r) => {
                    var n = r(5077),
                        a = r(7418);
                    n({
                        target: "Set",
                        proto: !0,
                        real: !0,
                        forced: !r(4001)("symmetricDifference")
                    }, {
                        symmetricDifference: a
                    })
                },
                1903: (e, t, r) => {
                    var n = r(5077),
                        a = r(3268);
                    n({
                        target: "Set",
                        proto: !0,
                        real: !0,
                        forced: !r(4001)("union")
                    }, {
                        union: a
                    })
                },
                977: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(6619),
                        o = r(8602),
                        i = r(9013),
                        s = a("".charCodeAt);
                    n({
                        target: "String",
                        proto: !0
                    }, {
                        isWellFormed: function() {
                            for (var e = i(o(this)), t = e.length, r = 0; r < t; r++) {
                                var n = s(e, r);
                                if (55296 == (63488 & n) && (n >= 56320 || ++r >= t || 56320 != (64512 & s(e, r)))) return !1
                            }
                            return !0
                        }
                    })
                },
                3680: (e, t, r) => {
                    r(164)
                },
                6194: (e, t, r) => {
                    r(4481)
                },
                532: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(970),
                        o = r(6619),
                        i = r(8602),
                        s = r(9013),
                        c = r(9835),
                        u = Array,
                        l = o("".charAt),
                        p = o("".charCodeAt),
                        f = o([].join),
                        d = "".toWellFormed,
                        h = d && c((function() {
                            return "1" !== a(d, 1)
                        }));
                    n({
                        target: "String",
                        proto: !0,
                        forced: h
                    }, {
                        toWellFormed: function() {
                            var e = s(i(this));
                            if (h) return a(d, e);
                            for (var t = e.length, r = u(t), n = 0; n < t; n++) {
                                var o = p(e, n);
                                55296 != (63488 & o) ? r[n] = l(e, n) : o >= 56320 || n + 1 >= t || 56320 != (64512 & p(e, n + 1)) ? r[n] = "�" : (r[n] = l(e, n), r[++n] = l(e, n))
                            }
                            return f(r, "")
                        }
                    })
                },
                6753: (e, t, r) => {
                    "use strict";
                    var n = r(5077),
                        a = r(631),
                        o = r(5616),
                        i = r(1672),
                        s = r(4361),
                        c = r(3583),
                        u = r(1720),
                        l = r(3179),
                        p = r(9431),
                        f = r(8364),
                        d = r(6250)("toStringTag"),
                        h = Error,
                        v = function(e, t, r) {
                            var n, s = a(g, this);
                            return i ? n = i(h(), s ? o(this) : g) : (n = s ? this : c(g), u(n, d, "Error")), void 0 !== r && u(n, "message", f(r)), p(n, v, n.stack, 1), u(n, "error", e), u(n, "suppressed", t), n
                        };
                    i ? i(v, h) : s(v, h, {
                        name: !0
                    });
                    var g = v.prototype = c(h.prototype, {
                        constructor: l(1, v),
                        message: l(1, ""),
                        name: l(1, "SuppressedError")
                    });
                    n({
                        global: !0,
                        constructor: !0,
                        arity: 3
                    }, {
                        SuppressedError: v
                    })
                },
                7835: (e, t, r) => {
                    r(1274)("dispose")
                },
                9321: (e, t, r) => {
                    r(7841)
                },
                2804: (e, t, r) => {
                    r(5822)
                },
                959: (e, t, r) => {
                    r(3719)
                },
                4775: (e, t, r) => {
                    r(6706)
                },
                2170: (e, t, r) => {
                    r(3002)
                },
                978: (e, t, r) => {
                    "use strict";
                    var n = r(7854),
                        a = r(56),
                        o = r(2488),
                        i = r(3610),
                        s = r(710),
                        c = r(8299),
                        u = r(9835),
                        l = n.aTypedArray,
                        p = n.getTypedArrayConstructor,
                        f = n.exportTypedArrayMethod,
                        d = Math.max,
                        h = Math.min;
                    f("toSpliced", (function(e, t) {
                        var r, n, u, f, v, g, y, _ = l(this),
                            m = p(_),
                            b = a(_),
                            w = i(e, b),
                            k = arguments.length,
                            S = 0;
                        if (0 === k) r = n = 0;
                        else if (1 === k) r = 0, n = b - w;
                        else if (n = h(d(c(t), 0), b - w), r = k - 2) {
                            f = new m(r), u = o(f);
                            for (var I = 2; I < k; I++) v = arguments[I], f[I - 2] = u ? s(v) : +v
                        }
                        for (y = new m(g = b + r - n); S < w; S++) y[S] = _[S];
                        for (; S < w + r; S++) y[S] = f[S - w];
                        for (; S < g; S++) y[S] = _[S + n - r];
                        return y
                    }), !!u((function() {
                        var e = new Int8Array([1]),
                            t = e.toSpliced(1, 0, {
                                valueOf: function() {
                                    return e[0] = 2, 3
                                }
                            });
                        return 2 !== t[0] || 3 !== t[1]
                    })))
                },
                3807: (e, t, r) => {
                    r(9303)
                },
                4844: (e, t, r) => {
                    var n = r(5803);
                    n.keys().forEach((e => {
                        a[e.substr(2)] = n(e)
                    }))
                },
                8071: (e, t, r) => {
                    "use strict";
                    r.r(t);
                    r(889), r(9778), r(5932), r(4006), r(2894), r(6291), r(2933), r(2495), r(628), r(611), r(4166), r(3823), r(922), r(3665), r(3194), r(3322), r(9219), r(9696), r(2167), r(4371), r(5422), r(3366), r(3517), r(909), r(4744), r(164), r(1943), r(4481), r(9228), r(5149), r(2815), r(5595), r(950), r(8931), r(3209), r(968), r(55), r(6469), r(4730), r(7841), r(5906), r(3719), r(5822), r(1189), r(7017), r(9589), r(5428), r(4570), r(1339), r(472), r(3785), r(1313), r(2858), r(332), r(5475), r(3680), r(6194), r(9321), r(959), r(2804), r(6753), r(5957), r(3924), r(8569), r(27), r(146), r(699), r(5544), r(7712), r(7515), r(2048), r(3818), r(1199), r(8973), r(8360), r(8294), r(5358), r(4255), r(7022), r(3586), r(3588), r(6570), r(281), r(289), r(6032), r(1865), r(3182), r(6936), r(7217), r(2491), r(8215), r(7153), r(7279), r(9833), r(9183), r(6916), r(9988), r(1716), r(673), r(5628), r(5827), r(1361), r(5996), r(6366), r(7151), r(1903), r(977), r(532), r(7835), r(4775), r(2170), r(978), r(3807);
                    ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"].forEach((e => {
                        var t = globalThis[e];
                        t && t.name !== e && Object.defineProperty(t, "name", {
                            value: e
                        })
                    }))
                }
            },
            t = {};

        function r(n) {
            var a = t[n];
            if (void 0 !== a) return a.exports;
            var o = t[n] = {
                exports: {}
            };
            return e[n](o, o.exports, r), o.exports
        }
        r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {
                a: t
            }), t
        }, r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, (() => {
            r.g.__polyfill_injecting = !0;
            var e = !1;
            if (r.g.__wxConfig && "string" == typeof r.g.__wxConfig.platform) "ios" === r.g.__wxConfig.platform.toLowerCase() && (e = !0);
            else if ("undefined" != typeof navigator && "string" == typeof navigator.userAgent) {
                var t = navigator.userAgent.toLowerCase();
                (t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0) && (e = !0)
            }
            var n = [];
            e && (r.g.Promise = void 0, n.push("Promise")), r(2844)({
                usePolyfill: n,
                useNative: ["WeakMap"]
            }), r(8071), r(4844), delete r.g.__polyfill_injecting
        })()
    })();
    var o, i, s = function(e) {
        e()
    };
    (() => {
        "use strict";
        var e = {
            d: (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                })
            }
        };
        e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        };
        var a = {};
        (() => {
            e.d(a, {
                default: () => tt
            });
            var i = {};
            e.r(i), e.d(i, {
                convertToErrorObj: () => Z,
                emitFrameworkError: () => te,
                emitUnhandledError: () => re,
                emitUnhandledRejection: () => Q,
                onFrameworkError: () => ae,
                onUnhandledError: () => oe,
                onUnhandledRejection: () => ne
            });
            var s = e.g.__wxLibrary,
                l = e.g.__wxConfig,
                p = s.envType,
                f = s.contextType,
                d = "Service" === p,
                h = "WebView" === p,
                v = "Worker" === p,
                g = h || d && 0 === f.indexOf("App:"),
                y = d && 0 === f.indexOf("Game:"),
                _ = 0 === f.indexOf("MagicBrush:"),
                m = !!l.isIsolateContext,
                b = m && d && f.indexOf("MainContext") >= 0,
                k = m && d && f.indexOf("SubContext") >= 0,
                S = k && f.indexOf("Safe") >= 0,
                I = b || k,
                x = "wxlib" === l.workerContentType,
                T = h || b || S || x,
                A = function(e) {
                    var t = l.platform;
                    if (!t && "object" == typeof window && "string" == typeof(null === (e = window.navigator) || void 0 === e ? void 0 : e.userAgent)) {
                        var r = window.navigator.userAgent.toLowerCase();
                        r.indexOf("devtools") >= 0 ? t = "devtools" : r.indexOf("miniprogramenv/windows") >= 0 ? t = "windows" : r.indexOf("miniprogramenv/mac") >= 0 ? t = "mac" : r.indexOf("miniprogramenv/mina") >= 0 ? t = "mina" : r.indexOf("iphone") >= 0 || r.indexOf("ipad") >= 0 ? t = "ios" : r.indexOf("android") >= 0 && (t = "android")
                    }
                    return (t || "unknown").toLowerCase()
                }(),
                C = void 0 === t || "develop" === t.version ? "9.9.9" : t.version,
                E = !!s.mayHaveSnapshot,
                P = (() => "object" == typeof e.g && e.g && e.g.__wkrenderer_h5)();
            const O = {
                platform: A,
                SDKVersion: C,
                isIsolateContext: I,
                isGame: y,
                isApp: g,
                isMainContext: b,
                isSubContext: k,
                isSafeEnv: T,
                isService: d,
                isWebView: h,
                isWorker: v,
                isWidget: !1,
                typeStr: k ? "SubContext" : p,
                fileName: s.fileName,
                isWXLibWorker: x,
                workerType: "user",
                contextName: "",
                mayHaveSnapShot: E,
                isWKGame: !!P,
                isMagicBrushFrameEnv: _
            };
            var R = () => {},
                M = "devtools" === O.platform;
            "undefined" != typeof performance && performance.now;

            function D(e, t = (() => R)) {
                return e.reduce(((e, r) => (e[r] = t(r), e)), {})
            }

            function j() {
                var t = o || e.g.__wxConfig;
                if (t && "debug" in t && void 0 !== t.debug) return !!t.debug
            }
            var L = () => {},
                N = ["log", "info", "warn", "error", "debug"];
            const F = D(N);
            var W = ["log", "info", "warn", "error", "profile", "profileSync", "traceBegin", "traceEnd"],
                $ = (() => {
                    var e = D(W);
                    return e
                })();
            const B = $;
            var U = Symbol("error"),
                q = Symbol("slow");
            class H {
                constructor() {
                    this.$ = Object.create(null), this.$$ = Object.create(null)
                }
                onInternalEvent(e, t) {
                    var r = this.$$[e];
                    return r ? r.push(t) : this.$$[e] = [t], this
                }
                emitPrivate(e, ...t) {
                    var r = this.$$[e];
                    return !!(r && r.length > 0) && (r.forEach((e => {
                        try {
                            e(...t)
                        } catch (e) {
                            console.error("EventEmitter error:", e)
                        }
                    })), !0)
                }
                onError(e) {
                    return this.onInternalEvent(U, e), this
                }
                onSlow(e) {
                    return this.onInternalEvent(q, e), this
                }
                _privEmit(e, t, ...r) {
                    var n = this.$[e];
                    if (n && n.length > 0) {
                        var a, o = !1;
                        for (var i of n) {
                            if (0 !== i.count) try {
                                var s = Date.now();
                                a = i.cb(...r);
                                var c = Date.now();
                                c - s > H.SLOW_CALLBACK_THRESHOLD && this.emitPrivate(q, e, s, c, i.cb)
                            } catch (t) {
                                if (!this.emitPrivate(U, e, t)) throw t
                            }
                            if (i.count > 0 && i.count--, 0 === i.count && (o = !0), !1 === a && t.cancelable) break
                        }
                        return o && (this.$[e] = n.filter((e => 0 !== e.count))), !0
                    }
                    return !1
                }
                emit(e, ...t) {
                    return this._privEmit(e, {}, ...t)
                }
                emitCancelable(e, ...t) {
                    return this._privEmit(e, {
                        cancelable: !0
                    }, ...t)
                }
                many(e, t, r, n = {}) {
                    if (!t) return this;
                    var a = {
                            count: r,
                            cb: t
                        },
                        o = this.$[e];
                    return o ? n.prepend ? o.unshift(a) : o.push(a) : this.$[e] = [a], this
                }
                on(e, t, r) {
                    return this.many(e, t, -1, r)
                }
                once(e, t, r) {
                    return this.many(e, t, 1, r)
                }
                off(e, t) {
                    var r = this.$[e];
                    if (!r) return !1;
                    var n = r.findIndex((e => e.cb === t));
                    return !(n < 0) && (r.splice(n, 1), !0)
                }
            }
            H.SLOW_CALLBACK_THRESHOLD = 50;
            var G = new H,
                V = "unhandlederror",
                K = "unhandledrejection",
                z = "frameworkerror",
                J = new WeakMap;
            var Y = Object.prototype.hasOwnProperty;

            function Z(e) {
                var t;
                if (e && "Object" === (null === (t = e.constructor) || void 0 === t ? void 0 : t.name) && "string" == typeof e.message && "string" == typeof e.stack) {
                    var r = new Error(e.message);
                    return Object.assign(r, e), r
                }
                return e
            }

            function Q(e, t) {
                e = Z(e), Ne.onLoad((() => {
                    G.emit(K, {
                        reason: e,
                        promise: t
                    }) || console.error("Uncaught (in promise)", e)
                }))
            }
            var X = !1,
                ee = !1;

            function te(e, t) {
                if (e instanceof Error && t && (e.message = `${t} fail: ${e.message}`), e = Z(e), o.isSnapshoting) throw e;
                Ne.onLoad((() => {
                    if (X) console.error("[ErrorHandler] recursive framework error detected.", e);
                    else {
                        X = !0;
                        try {
                            G.emit(z, e) || re(e)
                        } catch (e) {
                            console.error("Framework", e)
                        }
                        X = !1
                    }
                }))
            }

            function re(e) {
                if (e = Z(e), o.isSnapshoting) throw e;
                Ne.onLoad((() => {
                    if (ee) console.error("[ErrorHandler] recursive uncaught error detected.", e);
                    else {
                        ee = !0;
                        try {
                            G.emit(V, e) || ("windows" !== o.platform && "mac" !== o.platform || 4 !== o.appType) && console.error("Uncaught", e)
                        } catch (e) {
                            console.error("Uncaught", e)
                        }
                        ee = !1
                    }
                }))
            }

            function ne(e) {
                G.on(K, e)
            }

            function ae(e) {
                G.on(z, e)
            }

            function oe(e) {
                G.on(V, e)
            }! function(e) {
                "object" == typeof e && "function" == typeof e.addEventListener ? (e.addEventListener("unhandledrejection", (e => {
                    Q(e.reason, e.promise), e.reason && e.preventDefault()
                })), e.addEventListener("error", (t => {
                    var r, n;
                    re(t.error || {
                        message: t.message,
                        stack: `${t.message}\nEmpty stack, maybe muted error. (xweb=${(null===(r=e.navigator)||void 0===r||null===(n=r.userAgent)||void 0===n?void 0:n.toUpperCase().indexOf("XWEB"))>=0})`
                    }), t.error && t.preventDefault()
                }))) : void 0 === e.onunhandledrejection && Object.defineProperty(e, "onunhandledrejection", {
                    value(e = {}) {
                        var t, r;
                        Y.call(e, "type") ? (t = {
                            type: e.type,
                            reason: e.reason,
                            promise: e.promise
                        }, (r = t.promise) && (J.has(r) || setTimeout((() => {
                            var e = J.get(r);
                            0 === (null == e ? void 0 : e.type) && Q(e.reason, e.promise), J.delete(r)
                        }), 0), J.set(r, t))) : Q(e.reason, e.promise)
                    }
                })
            }(e.g);
            var ie, se = JSON.parse,
                ce = JSON.stringify,
                ue = 9782784e5;

            function le(e) {
                return se(ce(e))
            }

            function pe(e) {
                e.platform = O.platform, e.brand || "ios" !== e.platform || (e.brand = "iPhone"), e.sdkVersion = e.SDKVersion = O.SDKVersion, e.isReady = !1, e.onReady = Ne.onStart
            }

            function fe(e) {
                var r;
                pe(e), O.isSubContext || (e.preload = !0 === e.preload), "number" == typeof e.pixelRatio ? e.devicePixelRatio = e.pixelRatio : "number" == typeof e.devicePixelRatio && (e.pixelRatio = e.devicePixelRatio);
                var n = null === (r = t.debugOptions) || void 0 === r ? void 0 : r.overwriteExpt;
                e.expt = n ? Object.assign(e.expt || {}, n) : e.expt || {}
            }

            function de(e) {
                if (fe(e), e.isReady = !0, e.appLaunchInfo = e.appLaunchInfo || {}, e.preloadType = e.preloadType || e.appLaunchInfo.preloadType || e.preload, "ios" === e.platform) {
                    var t = function(e) {
                            if (!e) return 0;
                            var t = (new Date).getTimezoneOffset() / 60;
                            return e + ue - 3600 * t * 1e3
                        }(e.appLaunchInfo.clickTimestampInMs),
                        r = Number.MAX_SAFE_INTEGER,
                        n = e.instanceId;
                    if (n) try {
                        var a = n.split("&").filter((e => 0 === e.indexOf("ts=")));
                        a.length > 0 && (r = parseInt(a[0].slice(3), 10))
                    } catch (e) {
                        te(e, "parseInstanceId")
                    }
                    e.coldLaunchTime = Math.min(t, r)
                } else e.coldLaunchTime = e.appLaunchInfo.clickTimestamp || 0
            }
            var he = !(null === (ie = t.features) || void 0 === ie || !ie.pruneWxConfigByPage),
                ve = Object.defineProperty,
                ge = ["env", "appLaunchInfo", "ext", "wxAppInfo", "debug", "entryPagePath", "envVersion", "tabBar", "pages", "page", "accountInfo", "global", "platform", "system", "appType", "networkTimeout", "navigateToMiniProgramAppIdList", "plugins", "extAppid", "host", "prerender"];

            function ye(e, t, r, n) {
                ve(e, r, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                        if (r in t) return t[r];
                        try {
                            return "function" != typeof n ? n : n()
                        } catch (e) {
                            return void te(e, `read mock wxConfig.${r}`)
                        }
                    },
                    set(e) {
                        t[r] = e
                    }
                })
            }
            var _e = O.isSafeEnv,
                me = Object.create(null),
                be = O.isService ? function(e) {
                    return new Proxy(e, {
                        set(e, t, r, n) {
                            if ("__siblings__" === t) return Reflect.set(e, t, r, n);
                            var a = Reflect.get(e, "__siblings__", n);
                            return Array.isArray(a) ? (a.length > 1 && F.log(`[WXConfig] write __wxConfig.${t.toString()}, sync to all contexts.`), a.forEach((e => {
                                Reflect.set(e, t, r)
                            })), !0) : Reflect.set(e, t, r, n)
                        }
                    })
                }(me) : me,
                we = e => {},
                ke = "wxConfig:updatePage";

            function Se(t, r = !1) {
                return we(!1), me.currentPhase = "onStart", void 0 === t || (r ? (Object.assign(me, t), Object.defineProperty(me, "__siblings__", {
                    value: t.__siblings__,
                    enumerable: !1,
                    writable: !1,
                    configurable: !1
                })) : (Object.assign(me, _e ? t : le(t)), de(me), function(t, r) {
                    var n;
                    Array.isArray(null == t || null === (n = t.tabBar) || void 0 === n ? void 0 : n.list) && t.tabBar.list.forEach((e => {
                        delete e.iconData, delete e.selectedIconData
                    })), delete t.permission;
                    var a = t.subPackages || t.subpackages;
                    Array.isArray(a) && a.length > 0 && (a.forEach((e => {
                        delete e.pages
                    })), t.subPackages = t.subpackages = a), "devtools" === t.platform && (t.__globalComponentsCount = Object.keys(t.usingComponents || {}).length), he && (O.isSubContext || (delete t.usingComponents, Object.values(t.page || {}).forEach((e => {
                        null != e && e.window && delete e.window.usingComponents
                    })), t._preloadRule = t.preloadRule || {}, t._page = t.page || {}, delete t.preloadRule, delete t.page), t.updatePage = function(e, t) {
                        null != t && t.window && delete t.window.usingComponents, r(e, t)
                    }, t.updatePreloadRule = function(e, r) {
                        t.preloadRule = t.preloadRule || {}, t.preloadRule[e] = r
                    }), e.g.__wxConfig.page = e.g.__wxConfig.page || {}, t.page = t.page || {}
                }(me, ((e, t) => {
                    Ne.emit(ke, {
                        key: e,
                        value: t
                    })
                })), Object.defineProperty(me, "__siblings__", {
                    value: [],
                    enumerable: !1,
                    writable: !1,
                    configurable: !1
                })), Array.isArray(me.__siblings__) && me.__siblings__.push(me), me.onPageUpdate((({
                    key: e,
                    value: t
                }) => {
                    me.page = me.page || {}, me.page[e] = me.page[e + ".html"] = t, n && (n[e + ".html"] = le(t))
                })), _e || (n = function() {
                    var t = e.g.__wxConfig,
                        r = {},
                        n = {},
                        a = he ? {} : t.page || {};
                    try {
                        ye(n, r, "deprecated", !0), ge.forEach((e => {
                            if (e in t) {
                                var o = t[e];
                                switch (e) {
                                    case "page":
                                        ye(n, r, e, a);
                                        break;
                                    case "env":
                                        ye(n, r, e, (() => (console.warn("[Deprecation] __wxConfig.env is deprecated, please use wx.env instead."), {
                                            USER_DATA_PATH: o.USER_DATA_PATH
                                        })));
                                        break;
                                    case "accountInfo":
                                        ye(n, r, e, {
                                            appId: o.appId,
                                            icon: o.icon,
                                            nickname: o.nickname
                                        });
                                        break;
                                    case "appLaunchInfo":
                                        ye(n, r, e, (() => (console.warn("[Deprecation] __wxConfig.appLaunchInfo is deprecated, please use wx.getLaunchOptionsSync() instead."), wx && "function" == typeof wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : {})));
                                        break;
                                    case "wxAppInfo":
                                        ye(n, r, e, {
                                            maxRequestConcurrent: o.maxRequestConcurrent,
                                            maxUploadConcurrent: o.maxUploadConcurrent,
                                            maxDownloadConcurrent: o.maxDownloadConcurrent,
                                            maxWorkerConcurrent: o.maxWorkerConcurrent,
                                            maxWebsocketConnect: o.maxWebsocketConnect
                                        });
                                        break;
                                    default:
                                        ye(n, r, e, o)
                                }
                            }
                        })), e.g.__wxConfig = n
                    } catch (r) {
                        te(r, "mockGloablWxConfig"), e.g.__wxConfig = t
                    }
                    return a
                }())), be;
                var n
            }
            var Ie = new H,
                xe = new H,
                Te = {},
                Ae = "WeixinJSBridgeReady",
                Ce = "libraryEnd",
                Ee = "load",
                Pe = "postLoad",
                Oe = "start",
                Re = "postStart";

            function Me(e, t) {
                var r = void 0 !== c,
                    n = () => {
                        try {
                            r && c.traceBegin("Framework", `LibLifeCycle.${e} @ ${O.fileName}`), t(Te[e])
                        } catch (t) {
                            te(t, "LifeCycle." + e)
                        } finally {
                            r && c.traceEnd()
                        }
                    };
                e in Te ? n() : xe.once(e, n)
            }

            function De(e, t) {
                var r, n;
                if (e in Te) return !1;
                Te[e] = t, null === (r = w) || void 0 === r || r.info(`[LifeCycle] emit ${e} for ${O.fileName}`);
                var a = xe.emit(e, t);
                return null === (n = w) || void 0 === n || n.info(`[LifeCycle] finish ${e} for ${O.fileName}`), a
            }
            var je, Le = e => {
                    O.mayHaveSnapShot ? Me(Ee, e) : e()
                },
                Ne = {
                    EventEmitter: H,
                    on: Ie.on.bind(Ie),
                    emit: Ie.emit.bind(Ie),
                    once: Ie.once.bind(Ie),
                    off: Ie.off.bind(Ie),
                    getIsLoaded: () => Ee in Te,
                    getIsStarted: () => Oe in Te,
                    onBridgeReady(e) {
                        Me(Ae, e)
                    },
                    setWeixinJSBridge(e) {
                        De(Ae, e)
                    },
                    onLibraryEnd: Me.bind(null, Ce),
                    onCreate(e) {
                        e()
                    },
                    onLoadInstant: Le,
                    onLoad: Le,
                    _onPostLoad: Me.bind(null, Pe),
                    onStart: Me.bind(null, Oe),
                    onPostStart: Me.bind(null, Re)
                };
            xe.onError(((e, t) => {
                F.error(`[LifeCycle/${O.typeStr}] ${e.toString()} failed: `, t), te(t, "LifeCycle." + e.toString())
            })).onSlow(((e, t, r, n) => {
                B.warn(`[LifeCycle/${O.typeStr}] slow ${e.toString()} callback (${r-t}ms)\n${n+""}`)
            })), e.g.__wxLibrary.onEnd = function() {
                De(Ce), O.mayHaveSnapShot || $e()
            }, je = e.g.__wxConfig, me.currentPhase = "onCreate", void 0 === je || (we(!1), Object.assign(me, _e ? je : le(je)), pe(me), we(!0));
            var Fe = !1,
                We = !1;

            function $e() {
                Fe || We ? te(new Error(`LifeCycle error: undesired onLoad(${Fe}/${We})`)) : (Fe = !0, o = function(e) {
                    return me.currentPhase = "onLoad", void 0 === e || (we(!1), Object.assign(me, _e ? e : le(e)), me.onPageUpdate = Ne.on.bind(null, ke), fe(me), we(!0)), be
                }(e.g.__wxConfig), De(Ee, o), O.isSubContext ? o.__readyHandler = e => {
                    Be(e, !0)
                } : !0 === o.preload ? Ne.onBridgeReady((t => {
                    t.on("onWxConfigReady", (() => {
                        Be(e.g.__wxConfig)
                    }))
                })) : Ne.onLibraryEnd((() => {
                    Be(e.g.__wxConfig)
                })), De(Pe, o))
            }

            function Be(e, t = !1) {
                if (Fe && !We) {
                    We = !0;
                    var r = Date.now();
                    "onReadyStart" in (o = Se(e, t)) || (o.onReadyStart = r), De(Oe, o), o.onReadyEnd = Date.now(), De(Re, o)
                } else te(new Error(`LifeCycle error: undesired onStart(${Fe}/${We})`))
            }(o = be).isSnapshoting ? (O.mayHaveSnapShot, e.g.WeixinSnapshot = {
                snapshotContextReady() {
                    delete e.g.WeixinSnapshot, o.isSnapshoting = !1, $e()
                }
            }) : O.mayHaveSnapShot && Ne.onLibraryEnd($e);
            class Ue {
                constructor(e, t, r) {
                    this.num = e, this.type = t, this.bindingFn = void 0, this.bindingFn = "function" == typeof r ? r : L
                }
            }
            var qe = {
                    ALL: new Ue(Number.MIN_VALUE, "ALL"),
                    DEBUG: new Ue(5e3, "DEBUG", console.debug),
                    LOG: new Ue(1e4, "LOG", console.log),
                    INFO: new Ue(2e4, "INFO", console.info),
                    WARN: new Ue(3e4, "WARN", console.warn),
                    ERROR: new Ue(4e4, "ERROR", console.error),
                    OFF: new Ue(Number.MAX_VALUE, "OFF")
                },
                He = (e, t) => ({
                    debug: e(qe.DEBUG, t),
                    log: e(qe.LOG, t),
                    info: e(qe.INFO, t),
                    warn: e(qe.WARN, t),
                    error: e(qe.ERROR, t)
                }),
                Ge = qe.INFO,
                Ve = (() => {
                    if (O.isWorker || O.isWidget || O.isMagicBrushFrameEnv) {
                        return Object.assign({
                            createLogger: function() {
                                return F
                            }
                        }, F)
                    }
                    return O.isSubContext && O.isIsolateContext ? (e = [], t = (t, r) => (...n) => {
                        e.push({
                            level: t,
                            logs: n,
                            category: r
                        })
                    }, r = () => {
                        setTimeout((() => {
                            var t = w.__isFromMainContext ? w.__mergeSubContextLogs : null;
                            t ? (t(e), e = []) : r()
                        }), 1e3)
                    }, Ne.onStart(r), {
                        ...He(t),
                        createLogger: e => He(t, "string" == typeof e ? e : "default"),
                        __isFromMainContext: !1
                    }) : (() => {
                        var e = O.platform,
                            t = "android" !== e,
                            r = [],
                            n = function(t) {
                                "android" !== e ? u.invoke("systemLog", {
                                    dataArray: t.map((t => {
                                        return {
                                            message: `\n${r=t.date,n=("0"+(r.getMonth()+1)).slice(-2),a=("0"+r.getDate()).slice(-2),o=("0"+r.getHours()).slice(-2),i=("0"+r.getMinutes()).slice(-2),s=("0"+r.getSeconds()).slice(-2),c=("00"+r.getMilliseconds()).slice(-3),u=r.getFullYear()+"-"+n+"-"+a,l=o+":"+i+":"+s+"."+c,"ios"===e?u+" "+l+"000"+(r.getTimezoneOffset()/6e3*-1).toFixed(4).replace(/^0\./,"+").replace(/-0\./,"-"):u+" "+(r.getTimezoneOffset()/60*-1).toFixed(1).replace(/^(\d)/,"+$1")+" "+l} [${t.level.type[0].toUpperCase()}][wxapplib]] ${t.content}`
                                        };
                                        var r, n, a, o, i, s, c, u, l
                                    }))
                                }) : t.forEach((e => {
                                    e.level.bindingFn("[wxapplib]] " + e.content)
                                }))
                            },
                            a = e => {
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
                                    case "object":
                                        var t;
                                        try {
                                            t = JSON.stringify(e)
                                        } catch (e) {
                                            t = "[对象含有循环引用]"
                                        }
                                        return t;
                                    default:
                                        return
                                }
                            },
                            o = function(e, o) {
                                return function(...i) {
                                    var s;
                                    if (o && Array.prototype.unshift.call(i, "[" + o + "]"), (j() || e.num >= qe.WARN.num) && (null === (s = F[e.type.toLowerCase()]) || void 0 === s || s.call(F, ...i)), e.num >= Ge.num) {
                                        var c = Array.prototype.slice.call(i).map(a).join(" ");
                                        if (t) {
                                            var u = new Date;
                                            r && r.length > 1024 && r.shift(), r.push({
                                                date: u,
                                                level: e,
                                                content: c
                                            })
                                        } else n([{
                                            level: e,
                                            content: c
                                        }])
                                    }
                                }
                            };
                        return Ne.onStart((() => {
                            setTimeout((function e() {
                                setTimeout(e, 4e3), 0 !== r.length && (n(r), r = [])
                            }), 4e3)
                        })), {
                            ...He(o),
                            createLogger: function(e) {
                                return He(o, "string" == typeof e ? e : "default")
                            },
                            __mergeSubContextLogs: e => {
                                Array.isArray(e) && e.forEach((e => {
                                    var {
                                        level: t,
                                        logs: r,
                                        category: n
                                    } = e;
                                    o(t, n)(...r)
                                }))
                            },
                            __isFromMainContext: !0
                        }
                    })();
                    var e, t, r
                })();
            Ne.onLoad((() => {
                Ve.info(`[BaseLibVersion] ${O.fileName}: ${t.version} (${t.updateTime})}`)
            }));
            const Ke = Ve;
            const ze = D(["log", "info", "warn", "error"], (e => function(...t) {
                (M || j()) && console[e]("[system]", ...t)
            }));
            var Je;

            function Ye() {
                return Je || ("undefined" != typeof NativeGlobal && void 0 !== NativeGlobal.WebAssembly ? NativeGlobal.WebAssembly : void 0 !== globalThis.WebAssembly ? globalThis.WebAssembly : void 0)
            }
            Ne.onLoad((() => {
                Je = Ye()
            }));
            var Ze = Object.create(null);
            Object.defineProperty(Ze, "WebAssembly", {
                enumerable: !0,
                get: Ye
            });
            const Qe = Ze;
            var Xe = e.g,
                et = {
                    env: O,
                    global: Xe,
                    get isConfigReady() {
                        return Ne.getIsStarted()
                    },
                    get isStarted() {
                        return Ne.getIsStarted()
                    },
                    get isLoaded() {
                        return Ne.getIsLoaded()
                    },
                    ...Ne,
                    ...i,
                    wxConsole: F,
                    wxPerfConsole: B,
                    wxNativeConsole: Ke,
                    libConsole: ze,
                    libGlobal: Qe,
                    globalShare: {}
                };
            void 0 !== r && (n = function() {
                return "return this" === arguments[arguments.length - 1] ? function() {
                    return Xe
                } : new r(...arguments)
            }, n.prototype = r.prototype);
            const tt = et
        })(), i = a.default
    })();
    var c, u, l, p, f, d, h, v, g, y, _, m = i.wxConsole,
        b = i.wxPerfConsole,
        w = i.wxNativeConsole;
    i.libConsole, i.libGlobal;
    (() => {
        "use strict";
        var e = {
                d: (t, r) => {
                    for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: r[n]
                    })
                },
                o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
            },
            t = {};
        (() => {
            e.d(t, {
                default: () => n
            });
            var r = {
                traceBegin() {},
                traceEnd() {},
                traceInstant() {}
            };
            i.onLoad((() => {
                "undefined" != typeof TraceGlobal ? (r.traceBegin = TraceGlobal.traceBegin, r.traceEnd = TraceGlobal.traceEnd, r.traceInstant = TraceGlobal.traceInstant) : w.warn("[Trace] TraceGlobal not found")
            }));
            const n = r
        })(), c = t.default
    })(), (() => {
        "use strict";
        var e = {
            d: (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                })
            }
        };
        e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        var t = {};
        e.d(t, {
            default: () => C
        });
        class r {
            constructor(e = 0) {
                this.id = e, this.$ = {}
            }
            add(e) {
                var t = this.id++;
                return "function" == typeof e && (this.$[t] = e), t
            }
            has(e) {
                return "function" == typeof this.$[e]
            }
            callAndRemove(e, t) {
                if (e in this.$) {
                    var r = this.$[e];
                    delete this.$[e], "function" == typeof r && r(t, e)
                }
            }
        }
        class a {
            constructor() {
                this.$ = {}
            }
            set(e, t) {
                this.$[e] = t
            }
            emit(e, ...t) {
                var r = this.$[e];
                "function" == typeof r && r(...t)
            }
        }
        var s = () => {},
            c = JSON.parse,
            l = JSON.stringify,
            f = "custom_event_",
            d = 0,
            h = function() {
                return "undefined" != typeof self ? self && self.__wkrenderer_h5 : "object" == typeof window && window && window.__wkrenderer_h5
            }();

        function v(t) {
            var n = function() {
                    var t = e.g.webkit;
                    return delete e.g.webkit, t
                }(),
                u = function() {
                    var t = e.g.WeixinJSCore;
                    return "object" == typeof t && "function" != typeof t.publishHandler && (t.publishHandler = s), i.env.isWorker && "function" == typeof e.g.workerInvokeJsApi && (t = {
                        invokeHandler: e.g.workerInvokeJsApi,
                        publishHandler: s,
                        invokeThirdHandler: s
                    }, d = 1 << 25), e.g.WeixinJSCore = {
                        invokeHandler: s,
                        publishHandler: s,
                        setTimerHandler: s,
                        clearTimerHandler: s
                    }, t
                }(),
                v = new r(d),
                g = new a,
                y = new a;

            function _(e, t) {
                if (void 0 !== e && v.has(t) && "" !== e && null !== e) {
                    if ("string" == typeof e) try {
                        e = c(e), e = p.unpack(e)
                    } catch (t) {
                        e = {}
                    }
                    v.callAndRemove(t, e)
                }
            }
            var m = {},
                b = {},
                w = 0;

            function k(e, t, r) {
                var n, a = ++w;
                m[a] = r;
                try {
                    n = u.invokeThirdHandler(e, t, a)
                } catch (e) {
                    console.error("Third SDK Error: unexpected error:", e)
                }
                if (void 0 !== n && "function" == typeof m[a] && "" !== n && null !== n) {
                    if ("string" == typeof n) try {
                        n = c(n)
                    } catch (e) {
                        n = {}
                    }
                    var o = m[a];
                    delete m[a], "function" == typeof o && o(n)
                }
            }
            var S = function(e, t) {
                    b[e] = t
                },
                I = (e, t) => {
                    var r = b[e];
                    r && r(t)
                },
                x = (e, t, r, n) => {
                    var a = m[e];
                    delete m[e], "function" == typeof a && a(t)
                };
            return {
                invoke(e, r, a, s = {}) {
                    var c = r;
                    s.keepOriginalParams || t.directInvokeJS || (s.notPack ? delete s.notPack : r = p.pack(r), ("ios" !== o.platform || h || 1 !== Number(o.expt.clicfg_appbrand_ios_use_jsapi_args_binding)) && (c = l(r || {}))), delete s.keepOriginalParams;
                    var f = v.add(a);
                    return s.highPerformance && (s.highPerformance[f] = r, delete s.highPerformance),
                        function(e, r, a, s = {}) {
                            if (u) {
                                var c, p;
                                _("splashad" === i.env.workerType || o.supportInvokeWithAppId ? null === (c = u.invokeHandler) || void 0 === c ? void 0 : c.call(u, e, r, a, s) : null === (p = u.invokeHandler) || void 0 === p ? void 0 : p.call(u, e, r, a), a)
                            } else {
                                var f = {
                                    event: e,
                                    paramsString: r,
                                    callbackId: a,
                                    privateArgs: l(s)
                                };
                                if (t.isWebMiniGame) _(prompt("webgame_invoke", l(f)), a);
                                else {
                                    var d = null == n ? void 0 : n.messageHandlers.invokeHandler.postMessage(f);
                                    null != d && d.catch && d.catch((t => {
                                        var n = console.error.bind(console);
                                        n("webkit.messageHandlers.invokeHandler.postMessage fail"), n(`event=${e}`), n("params=", r), n("err=", t), n("err.code=", t.code), n("err.message=", t.message), n("err.name=", t.name)
                                    }))
                                }
                            }
                        }(e, c, f, s), f
                },
                on(e, t) {
                    g.set(e, t)
                },
                subscribe(e, t) {
                    y.set(f + e, t)
                },
                publish(e, r, a) {
                    e = f + e;
                    var o = a,
                        i = r;
                    t.directInvokeJS || (i = l(r), o = l(a)),
                        function(e, t, r) {
                            if (u) {
                                var a;
                                null === (a = u.publishHandler) || void 0 === a || a.call(u, e, t, r)
                            } else {
                                var o = null == n ? void 0 : n.messageHandlers.publishHandler.postMessage({
                                    event: e,
                                    paramsString: t,
                                    webviewIds: r
                                });
                                null != o && o.catch && o.catch((r => {
                                    var n = console.error.bind(console);
                                    n("webkit.messageHandlers.publishHandler.postMessage fail"), n(`event=${e}`), n("params=", t), n("err=", r), n("err.code=", r.code), n("err.message=", r.message), n("err.name=", r.name)
                                }))
                            }
                        }(e, i, o)
                },
                invokeCallbackHandler: function(e, t) {
                    t = p.unpack(t), v.callAndRemove(e, t)
                },
                subscribeHandler: function(e, t, r, n) {
                    t = p.unpack(t), -1 !== e.indexOf(f) ? y.emit(e, t, r, n || {}) : g.emit(e, t, r, n || {})
                },
                get invokeThird() {
                    return k
                },
                get onThird() {
                    return S
                },
                get subscribeThirdHandler() {
                    return I
                },
                get invokeThirdCallbackHandler() {
                    return x
                }
            }
        }
        var g = !0,
            y = {},
            _ = {},
            m = new Set(["getSystemInfo", "getNetworkType", "isGameRecorderSupported", "getDeviceInfo"]);
        i.onPostStart((() => {
            g = !1, y = {}, _ = {}
        }));
        var b = new Set(["onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onTextViewDrag", "onImageViewLoad", "onScrollViewScroll"]);
        "function" == typeof logxx && logxx("jsbridge start");
        var w = null;
        var k = new class {
                constructor() {
                    this.value = void 0, this.pending = []
                }
                ready(e) {
                    "function" == typeof e && (void 0 === this.value ? this.pending.push(e) : e(this.value))
                }
                hasValue() {
                    return void 0 !== this.value
                }
                done(e) {
                    this.value = e, this.pending.forEach((t => {
                        t(e)
                    })), this.pending = []
                }
            },
            S = k.ready.bind(k),
            I = new class {
                constructor(e) {
                    this.onNewEvent = e, this.$ = {}, this.$e = new i.EventEmitter, this.knownEvents = new Set
                }
                emitNewEvent(e) {
                    this.knownEvents.has(e) || (this.knownEvents.add(e), this.onNewEvent(e, this))
                }
                add(e, t, r) {
                    this.emitNewEvent(e), this.$e.on(e, t, r)
                }
                remove(e, t) {
                    this.$e.off(e, t)
                }
                setSingle(e, t) {
                    this.emitNewEvent(e), this.$[e] = t
                }
                emit(e, ...t) {
                    var r = this.$[e];
                    "function" == typeof r && r(...t), this.$e.emit(e, ...t)
                }
                emitCancelable(e, ...t) {
                    this.$e.emitCancelable(e, ...t)
                }
            }(((e, t) => {
                b.has(e) ? S((r => {
                    r.on(e, t.emitCancelable.bind(t, e))
                })) : S((r => {
                    r.on(e, t.emit.bind(t, e))
                }))
            })),
            x = () => {},
            T = [],
            A = {
                on(e, t) {
                    b.has(e) ? I.add(e, t) : I.setSingle(e, t)
                },
                addEventListener(e, t, r) {
                    I.add(e, t, r)
                },
                removeEventListener(e, t) {
                    I.remove(e, t)
                },
                invoke(e, t, r, n = {}) {
                    var a = !0,
                        o = !1,
                        i = [],
                        s = e => {
                            for (var t of (o || (a = !1), i)) t(e, a);
                            null == r || r(e)
                        };
                    if (w) {
                        var c = e => {
                            i.push(e)
                        };
                        for (var u of T) {
                            var l = u(e, t, c);
                            if (l) return l instanceof Promise ? (l.then((e => {
                                s(e)
                            })), !0) : (s(l), !1)
                        }
                        w.invoke(e, t, s, n)
                    } else console.error(`[jsbridge] invoke ${e} fail: jsbridge not ready.`, new Error("jsbridge not ready").stack), s({
                        errMsg: `${e}:fail jsbridge not ready`,
                        errno: 4
                    });
                    return o = !0, a
                },
                pureInvoke: (e, t, r, n = {}) => w.invoke(e, t, r, n),
                get invokeCallbackHandler() {
                    var e;
                    return null === (e = w) || void 0 === e ? void 0 : e.invokeCallbackHandler
                },
                get subscribeHandler() {
                    var e;
                    return null === (e = w) || void 0 === e ? void 0 : e.subscribeHandler
                },
                publish: x,
                subscribe: x,
                addSubscribeListener: x,
                removeSubscribeListener: x,
                addInvokeInterceptor(e) {
                    return T.push(e), this
                },
                get invokeThird() {
                    var e;
                    return null === (e = w) || void 0 === e ? void 0 : e.invokeThird
                },
                get onThird() {
                    var e;
                    return null === (e = w) || void 0 === e ? void 0 : e.onThird
                },
                get invokeThirdCallbackHandler() {
                    return null
                },
                get subscribeThirdHandler() {
                    return null
                }
            };
        i.onLoad((() => {
            ! function(t) {
                if (!("devtools" === i.env.platform && !i.env.isWorker || e.g.useGlobalJSBridge || e.g.OSUseGlobalJSBridge)) {
                    if (i.env.isMagicBrushFrameEnv) {
                        var r, n = (null === (r = e.g.mb) || void 0 === r ? void 0 : r.JSBridge) || e.g.JSBridge,
                            a = n.invoke,
                            s = Object.assign({}, n, {
                                invoke: function(...e) {
                                    var t = a.apply(n, e),
                                        r = e[1];
                                    if (t && Object.prototype.hasOwnProperty.call(t, "errCode") && r) {
                                        var o = t.errno || t.errCode,
                                            {
                                                success: i,
                                                fail: s,
                                                complete: c
                                            } = r;
                                        o ? ("function" == typeof s && s(t), "function" == typeof c && c(t)) : ("function" == typeof i && i(t), "function" == typeof c && c(t))
                                    }
                                    return t
                                }
                            });
                        return e.g.WeixinJSBridge = s, t(s, !1)
                    }
                    var c = v({
                            directInvokeJS: !!o.wmpfDirectInvokeJs,
                            isWebMiniGame: !!o.isWK
                        }),
                        u = {
                            get invokeCallbackHandler() {
                                return c.invokeCallbackHandler
                            },
                            get subscribeHandler() {
                                return c.subscribeHandler
                            },
                            get subscribeThirdHandler() {
                                return c.subscribeThirdHandler
                            },
                            get invokeThirdCallbackHandler() {
                                return c.invokeThirdCallbackHandler
                            }
                        };
                    return o.clientDebug && i.onLibraryEnd((() => {
                        Object.assign(u, {
                            on: A.on,
                            publish: A.publish,
                            invoke: A.invoke,
                            subscribe: A.subscribe
                        }), e.g.WeixinJSBridge = u
                    })), e.g.WeixinJSBridge = u, t(c, !1)
                }
                if (void 0 !== e.g.WeixinJSBridge) return t(e.g.WeixinJSBridge, !0);
                document.addEventListener("WeixinJSBridgeReady", (() => {
                    t(e.g.WeixinJSBridge, !0)
                }), !1)
            }(((t, r) => {
                w = t, r && e.g.WeixinJSBridge === u && Object.keys(t).forEach((e => {
                    e in A || (A[e] = (...r) => t[e](...r))
                })), k.done(w)
            }))
        })), A.addInvokeInterceptor((e => {
            if (!i.isStarted && "splashad" !== i.env.workerType) return console.error(`[jsbridge] invoke ${e} fail: too eayly.`, new Error("invoke too eayly").stack), {
                errMsg: `${e}:fail too early`,
                errno: 4
            }
        })).addInvokeInterceptor(((e, t, r) => {
            if (g && m.has(e)) {
                if (e in y) return y[e];
                if (e in _) return _[e];
                if (m.has(e)) {
                    var n = new Promise((t => {
                        r(((r, n) => {
                            n ? t(r) : (delete _[e], y[e] = r)
                        }))
                    }));
                    _[e] = n
                }
            }
        }));
        new Map;
        i.setWeixinJSBridge(A);
        const C = A;
        u = t.default
    })(), (() => {
        var e = {
                26: e => {
                    var t = function(e) {
                        "use strict";
                        var t, r = Object.prototype,
                            n = r.hasOwnProperty,
                            a = "function" == typeof Symbol ? Symbol : {},
                            o = a.iterator || "@@iterator",
                            i = a.asyncIterator || "@@asyncIterator",
                            s = a.toStringTag || "@@toStringTag";

                        function c(e, t, r) {
                            return Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, r) {
                                return e[t] = r
                            }
                        }

                        function u(e, t, r, n) {
                            var a = t && t.prototype instanceof g ? t : g,
                                o = Object.create(a.prototype),
                                i = new C(n || []);
                            return o._invoke = function(e, t, r) {
                                var n = p;
                                return function(a, o) {
                                    if (n === d) throw new Error("Generator is already running");
                                    if (n === h) {
                                        if ("throw" === a) throw o;
                                        return P()
                                    }
                                    for (r.method = a, r.arg = o;;) {
                                        var i = r.delegate;
                                        if (i) {
                                            var s = x(i, r);
                                            if (s) {
                                                if (s === v) continue;
                                                return s
                                            }
                                        }
                                        if ("next" === r.method) r.sent = r._sent = r.arg;
                                        else if ("throw" === r.method) {
                                            if (n === p) throw n = h, r.arg;
                                            r.dispatchException(r.arg)
                                        } else "return" === r.method && r.abrupt("return", r.arg);
                                        n = d;
                                        var c = l(e, t, r);
                                        if ("normal" === c.type) {
                                            if (n = r.done ? h : f, c.arg === v) continue;
                                            return {
                                                value: c.arg,
                                                done: r.done
                                            }
                                        }
                                        "throw" === c.type && (n = h, r.method = "throw", r.arg = c.arg)
                                    }
                                }
                            }(e, r, i), o
                        }

                        function l(e, t, r) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, r)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = "suspendedStart",
                            f = "suspendedYield",
                            d = "executing",
                            h = "completed",
                            v = {};

                        function g() {}

                        function y() {}

                        function _() {}
                        var m = {};
                        m[o] = function() {
                            return this
                        };
                        var b = Object.getPrototypeOf,
                            w = b && b(b(E([])));
                        w && w !== r && n.call(w, o) && (m = w);
                        var k = _.prototype = g.prototype = Object.create(m);

                        function S(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function I(e, t) {
                            function r(a, o, i, s) {
                                var c = l(e[a], e, o);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        r("next", e, i, s)
                                    }), (function(e) {
                                        r("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return r("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            this._invoke = function(e, n) {
                                function o() {
                                    return new t((function(t, a) {
                                        r(e, n, t, a)
                                    }))
                                }
                                return a = a ? a.then(o, o) : o()
                            }
                        }

                        function x(e, r) {
                            var n = e.iterator[r.method];
                            if (n === t) {
                                if (r.delegate = null, "throw" === r.method) {
                                    if (e.iterator.return && (r.method = "return", r.arg = t, x(e, r), "throw" === r.method)) return v;
                                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return v
                            }
                            var a = l(n, e.iterator, r.arg);
                            if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, v;
                            var o = a.arg;
                            return o ? o.done ? (r[e.resultName] = o.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                        }

                        function T(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function A(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function C(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(T, this), this.reset(!0)
                        }

                        function E(e) {
                            if (e) {
                                var r = e[o];
                                if (r) return r.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var a = -1,
                                        i = function r() {
                                            for (; ++a < e.length;)
                                                if (n.call(e, a)) return r.value = e[a], r.done = !1, r;
                                            return r.value = t, r.done = !0, r
                                        };
                                    return i.next = i
                                }
                            }
                            return {
                                next: P
                            }
                        }

                        function P() {
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        return y.prototype = k.constructor = _, _.constructor = y, y.displayName = c(_, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, c(e, s, "GeneratorFunction")), e.prototype = Object.create(k), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, S(I.prototype), I.prototype[i] = function() {
                            return this
                        }, e.AsyncIterator = I, e.async = function(t, r, n, a, o) {
                            void 0 === o && (o = Promise);
                            var i = new I(u(t, r, n, a), o);
                            return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, S(k), c(k, s, "Generator"), k[o] = function() {
                            return this
                        }, k.toString = function() {
                            return "[object Generator]"
                        }, e.keys = function(e) {
                            var t = [];
                            for (var r in e) t.push(r);
                            return t.reverse(),
                                function r() {
                                    for (; t.length;) {
                                        var n = t.pop();
                                        if (n in e) return r.value = n, r.done = !1, r
                                    }
                                    return r.done = !0, r
                                }
                        }, e.values = E, C.prototype = {
                            constructor: C,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(A), !e)
                                    for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var r = this;

                                function a(n, a) {
                                    return s.type = "throw", s.arg = e, r.next = n, a && (r.method = "next", r.arg = t), !!a
                                }
                                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                    var i = this.tryEntries[o],
                                        s = i.completion;
                                    if ("root" === i.tryLoc) return a("end");
                                    if (i.tryLoc <= this.prev) {
                                        var c = n.call(i, "catchLoc"),
                                            u = n.call(i, "finallyLoc");
                                        if (c && u) {
                                            if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                            if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                        } else if (c) {
                                            if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                        } else {
                                            if (!u) throw new Error("try statement without catch or finally");
                                            if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var a = this.tryEntries[r];
                                    if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                        var o = a;
                                        break
                                    }
                                }
                                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                                var i = o ? o.completion : {};
                                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), A(r), v
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.tryLoc === e) {
                                        var n = r.completion;
                                        if ("throw" === n.type) {
                                            var a = n.arg;
                                            A(r)
                                        }
                                        return a
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, r, n) {
                                return this.delegate = {
                                    iterator: E(e),
                                    resultName: r,
                                    nextLoc: n
                                }, "next" === this.method && (this.arg = t), v
                            }
                        }, e
                    }(e.exports);
                    try {
                        l = t
                    } catch (e) {
                        n("r", "regeneratorRuntime = r")(t)
                    }
                }
            },
            t = {};

        function r(n) {
            var a = t[n];
            if (void 0 !== a) return a.exports;
            var o = t[n] = {
                exports: {}
            };
            return e[n](o, o.exports, r), o.exports
        }(() => {
            r(26);
            var e = () => {
                var e = {};
                Object.keys(l).forEach((t => {
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        get: () => l[t],
                        set(r) {
                            delete e[t], e[t] = r
                        }
                    })
                })), globalThis.regeneratorRuntime = e
            };
            "function" == typeof o.onReady ? o.onReady((t => {
                "devtools" === t.platform || ["develop", "trial"].includes(t.envVersion) || e()
            })) : e()
        })()
    })(), (() => {
        "use strict";
        var e = {
            d: (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                })
            }
        };
        e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        var t = {};
        (() => {
            e.d(t, {
                default: () => b
            });
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            function n(e) {
                for (var t = "", n = new Uint8Array(e), a = n.byteLength, o = 0; o < a; o++) t += String.fromCharCode(n[o]);
                return function(e) {
                    if ("function" == typeof btoa) return btoa(e);
                    for (var t, n, a = String(e), o = "", i = 0, s = r; a.charAt(0 | i) || (s = "=", i % 1); o += s.charAt(63 & t >> 8 - i % 1 * 8)) {
                        if ((n = a.charCodeAt(i += 3 / 4)) > 255) throw new Error('"btoa" failed');
                        t = t << 8 | n
                    }
                    return o
                }(t)
            }

            function a(e) {
                for (var t = function(e) {
                        if ("function" == typeof atob) return atob(e);
                        var t = String(e).replace(/=+$/, ""),
                            n = "";
                        if (t.length % 4 == 1) throw new Error('"atob" failed');
                        for (var a, o, i = 0, s = 0; o = t.charAt(s++); ~o && (a = i % 4 ? 64 * a + o : o, i++ % 4) ? n += String.fromCharCode(255 & a >> (-2 * i & 6)) : 0) o = r.indexOf(o);
                        return n
                    }(e), n = t.length, a = new Uint8Array(n), o = 0; o < n; o++) a[o] = t.charCodeAt(o);
                return a.buffer
            }
            var s, c = o.platform,
                u = "ios" === c,
                l = "android" === c || "windows" === c || "mac" === c || "mina" === c;
            u && (s = e.g.WeixinNativeBuffer);
            var p = null;

            function f(e, t = !1) {
                var r = {};
                if (p && !t) {
                    var a = !1,
                        o = Object.getPrototypeOf(e);
                    o !== ArrayBuffer.prototype && (a = !0, Object.setPrototypeOf(e, ArrayBuffer.prototype)), r.id = p.create(e), a && Object.setPrototypeOf(e, o)
                } else r.base64 = n(e);
                return r
            }

            function d(e) {
                if (null != e) return p && void 0 !== e.id ? p.get(e.id) : void 0 !== e.base64 ? a(e.base64) : void 0
            }
            i.onLoad((() => {
                p = function(e) {
                    var t = s,
                        r = e.getNativeBufferId,
                        n = e.setNativeBuffer,
                        a = e.getNativeBuffer;
                    delete e.getNativeBufferId, delete e.setNativeBuffer, delete e.getNativeBuffer;
                    var i = null;
                    return l && "function" == typeof r && "function" == typeof n && "function" == typeof a && o.nativeBufferEnabled ? i = {
                        create(e) {
                            var t = r();
                            return n(t, e), t
                        },
                        get: e => a(e),
                        useCompatibleMode() {}
                    } : u && t && (i = {
                        create: e => t.new(e),
                        get: e => t.get(e),
                        useCompatibleMode(e) {
                            t.useCompatibleMode(e)
                        }
                    }), i
                }(e.g)
            }));
            var h = Object.prototype.toString;

            function v(e) {
                return "[object Array]" === h.call(e)
            }

            function g(e) {
                return "[object ArrayBuffer]" === h.call(e)
            }

            function y(e, t) {
                if (!t) return null;
                var r = t.split(".");
                if (!r.length) return null;
                for (var n = r[r.length - 1], a = e, o = 0; o < r.length - 1; o++) {
                    if (!a) return null;
                    a = a[r[o]]
                }
                return [a, n]
            }

            function _(e, t = !1, r = !1) {
                if (null == e) return e;
                var n;
                if (t) n = function(e, t = !1) {
                    var r = [],
                        n = new WeakMap,
                        a = function(e, r, o = []) {
                            var i, s = n.get(e);
                            if (s) {
                                if (s > 50) throw console.error("[SDK ERROR] worker postMessage object occur circular reference. please check your postMessage argument:", e), new Error("worker postMessage object occur circular reference");
                                n.set(e, s + 1)
                            } else n.set(e, 1);
                            for (var c in e) {
                                var u = e[c];
                                if (i = u, "[object Object]" === h.call(i) || v(u)) {
                                    var l = [...o];
                                    l.push(c), a(u, r, l)
                                } else if (g(u)) {
                                    if (e._sabId) continue;
                                    var p = f(u, t),
                                        d = Array.prototype.concat.call(o, c).join(".");
                                    p.key = d, delete e[c], r.push(p)
                                }
                            }
                        };
                    return a(e, r), r
                }(e, r);
                else {
                    for (var a in n = [], e) {
                        var o = e[a];
                        if (g(o)) {
                            var i = f(o, r);
                            i.key = a, n.push(i)
                        }
                    }
                    if (n.length > 0)
                        for (var s of n) delete e[s.key]
                }
                return n.length > 0 && (e.__nativeBuffers__ = n), e
            }

            function m(e, t = !1) {
                if (null == e || null == e.__nativeBuffers__) return e;
                var r = e.__nativeBuffers__;
                delete e.__nativeBuffers__;
                var n = [];
                for (var a of r)
                    if (null != a) {
                        var o = d(a);
                        if (g(o)) {
                            if (t) {
                                var i = y(e, a.key);
                                if (!i) return;
                                var [s, c] = i;
                                s[c] = o
                            } else e[a.key] = o;
                            n.push(a.key)
                        }
                    } return e.__wx_dont_hook_sdk_inner_variable_packkeys_otherwise_you_will_regret_and_occur_bug__ = n, e
            }
            const b = {
                new: f,
                get: d,
                useCompatibleMode: function(e) {
                    var t;
                    null === (t = p) || void 0 === t || t.useCompatibleMode(e)
                },
                pack: _,
                unpack: m,
                packPostMessage: (e, t = !1) => _(e, !0, t),
                unpackPostMessage: e => m(e, !0)
            }
        })(), p = t.default
    })(), (() => {
        "use strict";
        var e = {
            d: (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                })
            }
        };
        e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        var t = {};
        e.d(t, {
            default: () => S
        });
        var r, a, s = ["request", "createSocketTask", "operateSocketTask", "onSocketTaskStateChange", "createRequestTask", "createRequestTaskAsync", "operateRequestTask", "onRequestTaskStateChange", "createDownloadTask", "createDownloadTaskAsync", "operateDownloadTask", "onDownloadTaskStateChange", "createUploadTask", "createUploadTaskAsync", "operateUploadTask", "onUploadTaskStateChange", "getNetworkType", "createAudioInstance", "createAudioInstanceAsync", "operateAudio", "destroyAudioInstance", "getAudioState", "setAudioState", "onAudioStateChange", "uploadFile", "downloadFile", "saveFile", "getFileInfo", "getSavedFileInfo", "getSavedFileList", "removeSavedFile", "readFile", "readCompressedFile", "writeFile", "mkdir", "readdir", "rmdir", "access", "unlink", "stat", "copyFile", "rename", "fs_appendFile", "fs_appendFileSync", "fs_copyFile", "fs_copyFileSync", "fs_rename", "fs_renameSync", "getABTestConfig", "reportKeyValue", "reportIDKey", "getPermissionBytes"],
            c = o.supportWorkerMultiContext || o.supoortWorkerMultiContext,
            u = () => {
                if ("windows" === o.platform || "mac" === o.platform) return !0;
                var e = "ios" === o.platform && "clicfg_appbrand_ios_allow_multi_context_worker";
                return !e || 1 === Number(o.expt && o.expt[e])
            },
            l = [],
            d = [],
            h = [],
            v = function(e) {
                return e ? r : a
            },
            g = function(e) {
                e = p.unpackPostMessage(e), d.forEach((t => {
                    "function" == typeof t && t(e)
                }))
            },
            y = function(e, t) {
                t = p.unpackPostMessage(t), l.forEach((r => {
                    "function" == typeof r && r(e, t)
                }))
            },
            _ = function(e, t) {
                h.forEach((r => {
                    "function" == typeof r && r(e, t)
                }))
            },
            m = (e, t) => {
                a.sendMsgToAppService({
                    __cmd__: "workerUncaughtError",
                    __data__: e,
                    __contextId__: t
                })
            },
            b = function(e, t) {
                c && u() ? m(e, t) : i.emitUnhandledError(e)
            },
            w = {
                get appServiceMsgHandler() {
                    return g
                },
                get workerMsgHandler() {
                    return y
                },
                get workerCreatedHandler() {
                    return _
                },
                get errorHandler() {
                    return b
                },
                get __workerId__() {
                    return a.__workerId__
                }
            },
            k = {
                create: function(e, t) {
                    var n, o, i = !(!(t = t || {}).useExperimentalWorker || !r);
                    return i ? (o = r, n = JSON.stringify(t)) : (o = a, n = {
                        APIList: s,
                        pluginId: t.PluginId
                    }), "function" == typeof o.create ? {
                        workerId: o.create.call(o, e, n),
                        useWKWorker: i
                    } : {
                        workerId: -1,
                        useWKWorker: i
                    }
                },
                createWXLibWorker: function(e, t) {
                    var r = {
                        APIList: s
                    };
                    t.APIList && (r.APIList = s.concat(t.APIList)), t.type && (r.type = t.type);
                    var n = a;
                    return "function" == typeof n.createWXLibWorker ? {
                        workerId: n.createWXLibWorker.call(n, e, JSON.stringify(r))
                    } : {
                        workerId: -1
                    }
                },
                terminate: function(e, t) {
                    var r = v(t);
                    if ("function" == typeof(null == r ? void 0 : r.terminate)) return r.terminate.call(r, e)
                },
                postMsgToAppService: function(e, t) {
                    if (i.env.isWKGame) a.sendMsgToAppService(e);
                    else if ("ios" === i.env.platform && 1 === Number(o.expt.clicfg_appbrand_ios_allow_worker_binding_message)) e = p.packPostMessage(e, !1), a.sendMsgToAppService(e);
                    else try {
                        !1 !== t && (e = p.packPostMessage(e), e = JSON.stringify(e)), a.postMsgToAppService(e)
                    } catch (e) {
                        console.error(e)
                    }
                },
                postMsgToWorker: function(e, t, r, n) {
                    var a = v(n);
                    if (i.env.isWKGame) null == a || a.sendMsgToWorker(e, t);
                    else if ("ios" !== i.env.platform || 1 !== Number(o.expt.clicfg_appbrand_ios_allow_worker_binding_message) || n) try {
                        !1 !== r && (t = p.packPostMessage(t, n), t = JSON.stringify(t)), null == a || a.postMsgToWorker(e, t)
                    } catch (e) {
                        console.error(e)
                    } else t = p.packPostMessage(t, !1), null == a || a.sendMsgToWorker(e, t)
                },
                onWorkerMsg: function(e) {
                    l.push(e)
                },
                onWorkerCreated: function(e) {
                    h.push(e)
                },
                onAppServiceMsg: function(e) {
                    d.push(e)
                },
                get WebAssembly() {
                    return a.WebAssembly
                },
                isSupportWXLibWorker: function() {
                    return "function" == typeof a.createWXLibWorker
                }
            };
        i.onLoadInstant((() => {
            r = e.g.WeAppWorker, a = e.g.WeixinWorker, e.g.WeixinWorker = w, e.g.WeAppWorker = w, ("devtools" === o.platform || c && u()) && (k.appServiceMsgHandler = w.appServiceMsgHandler, k.workerMsgHandler = w.workerMsgHandler, k.errorHandler = w.errorHandler, k.__workerId__ = w.__workerId__)
        }));
        const S = k;
        f = t.default
    })(), (() => {
        var e = {
                342: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        EnvPreloadType: () => n,
                        default: () => s,
                        updateConfig: () => a
                    });
                    var n = {
                            None: 0,
                            BeforeLaunch: 1,
                            AfterLaunch: 2
                        },
                        a = () => {
                            i !== o && void 0 !== i && Object.assign(i, o)
                        },
                        i = (() => (o.onReady(a), o))();
                    const s = i
                },
                133: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        reportDeprecatedAPI: () => n
                    });
                    var n = e => {
                        v.reportKeyValue({
                            key: "DeprecatedAPI",
                            value: e
                        })
                    }
                },
                996: (e, t, r) => {
                    var {
                        reportDeprecatedAPI: n
                    } = r(133), {
                        default: a
                    } = r(342);

                    function o(e = globalThis) {
                        function t() {
                            if (arguments.length > 0 && "return this" === arguments[arguments.length - 1]) return function() {
                                return e
                            }
                        }
                        "function" == typeof globalThis.Function && (t.prototype = globalThis.Function.prototype, t.prototype.constructor = t, globalThis.Function = t)
                    }
                    e.exports = {
                        hijack: function(e = !0, t = globalThis) {
                            o(t), "undefined" != typeof eval && ("ios" === a.platform && r.g.__isAppServiceRemoteDebugMode__ || a.debug || (globalThis.eval = void 0)), e && function() {
                                if ("undefined" != typeof setTimeout) {
                                    var e = setTimeout;
                                    globalThis.setTimeout = function(t, r = 0) {
                                        if ("function" != typeof t) throw new TypeError(`setTimeout expects a function as first argument but got ${typeof t}.`);
                                        var n = h.surroundThirdByTryCatch(t, "at setTimeout callback function"),
                                            a = [].slice.call(arguments, 2);
                                        return e((() => {
                                            n.apply(globalThis, a)
                                        }), r)
                                    };
                                    var t = setInterval;
                                    globalThis.setInterval = function(e, r) {
                                        if ("function" != typeof e) throw new TypeError(`setInterval expects a function as first argument but got ${typeof e}.`);
                                        var n = h.surroundThirdByTryCatch(e, "at setInterval callback function"),
                                            a = [].slice.call(arguments, 2);
                                        return t((() => {
                                            n.apply(globalThis, a)
                                        }), r)
                                    }
                                }
                            }(), "undefined" != typeof WebAssembly && ["compile", "compileStreaming", "instantiate", "instantiateStreaming", "validate", "Module"].forEach((e => {
                                if (void 0 !== WebAssembly[e]) {
                                    var t = WebAssembly[e];
                                    Object.defineProperty(WebAssembly, e, {
                                        get: () => (n("globalWa"), t),
                                        set: t => {
                                            Object.defineProperty(WebAssembly, e, {
                                                value: t,
                                                writable: !0,
                                                configurable: !0,
                                                enumerable: !0
                                            })
                                        },
                                        configurable: !0,
                                        enumerable: !0
                                    })
                                }
                            }))
                        },
                        hijackFunction: o
                    }
                },
                585: () => {
                    if ("undefined" == typeof navigator) {
                        try {
                            new n('var GeneratorFunctionProto = Object.getPrototypeOf(function* () {});var FakeGeneratorFunction = function () {};FakeGeneratorFunction.prototype = GeneratorFunctionProto;Object.defineProperty(GeneratorFunctionProto, "constructor", { value: FakeGeneratorFunction });')()
                        } catch (e) {}
                        try {
                            new n('var AsyncFunctionProto = Object.getPrototypeOf(async function () {});var FakeAsyncFunction = function () {};FakeAsyncFunction.prototype = AsyncFunctionProto;Object.defineProperty(AsyncFunctionProto, "constructor", { value: FakeAsyncFunction });')()
                        } catch (e) {}
                        try {
                            new n('var AsyncGeneratorFunctionProto = Object.getPrototypeOf(async function* () {});var FakeAsyncGeneratorFunction = function () {};FakeAsyncGeneratorFunction.prototype = AsyncGeneratorFunctionProto;Object.defineProperty(AsyncGeneratorFunctionProto, "constructor", { value: FakeAsyncGeneratorFunction });')()
                        } catch (e) {}
                    }
                }
            },
            t = {};

        function r(n) {
            var a = t[n];
            if (void 0 !== a) return a.exports;
            var o = t[n] = {
                exports: {}
            };
            return e[n](o, o.exports, r), o.exports
        }
        r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        };
        var a = {};
        (() => {
            "use strict";
            r.r(a), r.d(a, {
                bridgeGlobalInstanceOf: () => ee,
                deepFreezeGlobalObjs: () => V,
                deepFreezeObj: () => R,
                deepFreezeObjProperty: () => O,
                doNotWriteGlobalObjs: () => G,
                doNotWriteObj: () => L,
                doNotWriteObjProperty: () => M,
                globalEsHiddenObjs: () => t,
                globalEsObjs: () => n,
                hijack: () => K.hijack,
                hijackFunction: () => K.hijackFunction,
                overwriteSetPrototypeOf: () => H
            });
            r(585);
            var e = globalThis.Function,
                t = [() => Object.getPrototypeOf(Uint8Array.prototype).constructor, () => new e("return Object.getPrototypeOf((function* () {})()).constructor")(), () => new e("return Object.getPrototypeOf(function* () {}).constructor")(), () => new e("return Object.getPrototypeOf(async function () {}).constructor")(), () => new e("return Object.getPrototypeOf(async function* () {}).constructor")()].map((e => {
                    try {
                        return e()
                    } catch (e) {}
                })).filter(Boolean),
                n = ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "Error", "EvalError", "FinalizationRegistry", "Float32Array", "Float64Array", "Function", "globalThis", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "WebAssembly", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "null", "parseFloat", "parseInt", "undefined", "unescape", "uneval"],
                o = ["getApp", "getCurrentPages", "define", "require", "Reporter", "Protect", "requirePlugin", "definePlugin"],
                i = globalThis,
                s = r(342),
                c = (() => s.default.platform)(),
                u = (() => "ios" === c)();
            var l = /^\s*at .*(\S+:\d+|\(native\))/m,
                p = /^(eval@)?(\[native code\])?$/;

            function f(e, t = 1 / 0) {
                if ("string" != typeof e.stack) throw new Error("Cannot parse given Error object");
                var r = e.stack;
                return u ? function(e, t) {
                    for (var r = [], n = e.split("\n"), a = 0, o = 0; a < n.length && o < t; ++a) {
                        var i = n[a];
                        if (!p.test(i)) {
                            ++o;
                            var s = i.indexOf("@");
                            if (-1 === s) {
                                var c = d(i);
                                r.push({
                                    fileName: c.URI,
                                    lineNumber: c.line,
                                    columnNumber: c.column,
                                    source: i
                                })
                            } else {
                                var u = i.substring(0, s),
                                    l = d(i.substr(s + 1));
                                r.push({
                                    functionName: u,
                                    fileName: l.URI,
                                    lineNumber: l.line,
                                    columnNumber: l.column,
                                    source: i
                                })
                            }
                        }
                    }
                    return r
                }(r, t) : function(e, t) {
                    for (var r = [], n = e.split("\n"), a = 0, o = 0; a < n.length && o < t; ++a) {
                        var i = n[a];
                        l.test(i) && (r.push(i), ++o)
                    }
                    return r.map((e => {
                        e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                        var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                            r = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                            n = (t = r ? t.replace(r[0], "") : t).split(/\s+/).slice(1),
                            a = d(r ? r[1] : n.pop());
                        return {
                            functionName: n.join(" ") || void 0,
                            fileName: ["eval", "<anonymous>"].indexOf(a[0]) > -1 ? void 0 : a[0],
                            lineNumber: a[1],
                            columnNumber: a[2],
                            source: e
                        }
                    }))
                }(r, t)
            }

            function d(e) {
                var t = /(?::(\d+))?(?::(\d+))?$/.exec(e);
                return t ? {
                    URI: e.substring(0, e.length - t[0].length),
                    line: t[1],
                    column: t[2]
                } : {
                    URI: e
                }
            }
            var h = Object.freeze,
                v = Object.setPrototypeOf,
                g = Object.defineProperty,
                y = Object.getOwnPropertyDescriptor,
                _ = Object.getOwnPropertyNames,
                m = Object.getOwnPropertySymbols,
                b = Object.getPrototypeOf,
                w = Object.preventExtensions;
            var k = [
                [e => !/(WAServiceMainContext|WAGame)\.js/.test(e)]
            ];

            function S() {
                var e, t, r = Date.now(),
                    n = f(new Error, 3),
                    a = n[1],
                    o = n[2],
                    i = !(a.fileName && o.fileName && o.fileName !== a.fileName && (e = o.fileName, t = a.fileName, !k.some((r => r.some((t => t(e))) && r.some((e => e(t)))))));
                return Date.now() - r, i
            }

            function I(e, t = !1) {
                if ("function" == typeof e || "object" == typeof e && null !== e) {
                    var r = y(e, "__proto__");
                    r && !r.configurable || (r || Object.isExtensible(e)) && g(e, "__proto__", {
                        get() {
                            return b(this)
                        },
                        set(r) {
                            if (this === e) t && S() && v(e, r);
                            else {
                                if ("function" != typeof this && ("object" != typeof this || null === e)) return;
                                v(this, r)
                            }
                        },
                        enumerable: !1,
                        configurable: !1
                    })
                }
            }
            var x = new Map,
                T = (e, t, r) => {
                    x.has(e) || x.set(e, new Map);
                    var n = x.get(e);
                    n.has(t) ? Object.assign(n.get(t), r) : n.set(t, r)
                };

            function A(e, t, r = !1) {
                if ("function" != typeof e && ("object" != typeof e || null === e)) return !1;
                try {
                    var n = y(e, t);
                    return !!n && (n.configurable && (g(e, t, {
                        get: n.get || (() => n.value),
                        set(a) {
                            if (this === e) r && S() && (n.set ? n.set.call(this, a) : n.writable && (n.value = a));
                            else {
                                if ("function" != typeof this && "object" != typeof this) return;
                                ! function(e, t, r) {
                                    try {
                                        "__proto__" === t ? v(e, r) : g(e, t, {
                                            value: r,
                                            writable: !0,
                                            enumerable: !0,
                                            configurable: !0
                                        })
                                    } catch (e) {}
                                }(this, t, a)
                            }
                        },
                        enumerable: n.enumerable,
                        configurable: !1
                    }), r && T(e, t, n)), !n.get && ("function" == typeof n.value || "object" == typeof n.value && null !== n.value))
                } catch (e) {
                    throw e.message, e
                }
            }
            var C = new WeakSet;

            function E(e) {
                C.add(e)
            }

            function P(e) {
                return C.has(e)
            }

            function O(e, t, r) {
                A(e, t) && R(e[t], r)
            }

            function R(e, t) {
                if (e && !P(e) && ("function" == typeof e || "object" == typeof e) && e !== globalThis)
                    if (e !== Error) {
                        E(e);
                        for (var r = _(e), n = m(e), a = 0; a < r.length; ++a) O(e, r[a], t);
                        for (var o = 0; o < n.length; ++o) O(e, n[o], t);
                        t ? w(e) : I(e, !1)
                    } else if (t) {
                    var i = e => {
                        if (e && !P(e) && ("function" == typeof e || "object" == typeof e) && e !== globalThis) {
                            E(e), h(e);
                            for (var t = _(e), r = m(e), n = 0; n < t.length; ++n) i(e[t[n]]);
                            for (var a = 0; a < r.length; ++a) i(e[r[a]])
                        }
                    };
                    i(Error)
                }
            }

            function M(e, t) {
                A(e, t, !0) && L(e[t])
            }
            var D = new WeakSet;

            function j(e) {
                return D.has(e)
            }

            function L(e) {
                if (e && !j(e) && ("function" == typeof e || "object" == typeof e) && e !== globalThis) {
                    ! function(e) {
                        D.add(e)
                    }(e);
                    for (var t = _(e), r = m(e), n = 0; n < t.length; ++n) M(e, t[n]);
                    for (var a = 0; a < r.length; ++a) M(e, r[a]);
                    I(e, !0)
                }
            }
            var N = Object.prototype.hasOwnProperty,
                F = Object.defineProperty,
                W = Object.defineProperties,
                $ = Object.getOwnPropertyNames,
                B = Object.getOwnPropertySymbols,
                U = Object.getOwnPropertyDescriptor,
                q = !1,
                H = function() {
                    q || (q = !0, F(i.Object, "setPrototypeOf", {
                        value: (e, t) => (e.__proto__ = t, e),
                        configurable: !0
                    }), F(i.Object, "defineProperty", {
                        value(e, t, r) {
                            if (!j(e)) return F(e, t, r);
                            if (!S()) return r;
                            var n = U(e, t);
                            if (!n || n.configurable) {
                                var a = F(e, t, r);
                                return M(e, t), a
                            }
                            return T(e, t, r), r
                        },
                        configurable: !0
                    }), F(i.Object, "defineProperties", {
                        value(e, t) {
                            if (!j(e)) return W(e, t);
                            if (!S()) return t;
                            var r = r => {
                                var n = U(e, r);
                                if (!n || n.configurable) {
                                    var a = F(e, r, t[r]);
                                    return M(e, r), a
                                }
                                return T(e, r, t[r]), t[r]
                            };
                            return $(t).forEach(r), B(t).forEach(r), t
                        },
                        configurable: !0
                    }))
                },
                G = function(e = []) {
                    try {
                        for (var r = [...n, ...o, ...t, ...e], a = (Date.now(), 0); a < r.length; ++a) {
                            var s = r[a],
                                c = typeof s;
                            "string" === c ? N.call(i, s) && M(i, s) : "function" !== c && "object" !== c || L(s)
                        }
                        Date.now()
                    } catch (e) {}
                },
                V = function(e = [], r = !1) {
                    try {
                        for (var a = [...n, ...o, ...t, ...e], s = (Date.now(), 0); s < a.length; ++s) {
                            var c = a[s],
                                u = typeof c;
                            "string" === u ? N.call(i, c) && O(i, c, r) : "function" !== u && "object" !== u || R(c, r)
                        }
                        Date.now()
                    } catch (e) {}
                },
                K = r(996),
                z = Object.prototype.isPrototypeOf,
                J = Object.defineProperty,
                Y = Object.prototype.hasOwnProperty,
                Z = Symbol.hasInstance,
                Q = function(e) {
                    return !("function" != typeof this || !X(e)) && ((e, t) => z.call(t.prototype, e))(e, this)
                },
                X = e => "object" == typeof e ? null !== e : "function" == typeof e;

            function ee(e, t, r = {}) {
                for (var n = function(n) {
                        var a = e[n],
                            o = t[n];
                        if (!a || !o) return "continue";
                        if ("function" != typeof a) return "continue";
                        var i = Y.call(a, Z) ? a[Z] : Q,
                            s = Y.call(o, Z) ? o[Z] : Q;
                        J(a, Z, {
                            value(e) {
                                return i.call(this, e) || s.call(o, e)
                            },
                            writable: !0,
                            enumerable: !1,
                            configurable: !0
                        }), J(o, Z, {
                            value(e) {
                                return void 0 !== r[n] && "Object" === r[n] && void 0 !== (null == e ? void 0 : e._compressed) && void 0 !== (null == e ? void 0 : e._data) && void 0 !== (null == e ? void 0 : e.height) && void 0 !== (null == e ? void 0 : e.width) ? s.call(this, e) : s.call(this, e) || i.call(a, e)
                            },
                            writable: !0,
                            enumerable: !1,
                            configurable: !0
                        })
                    }, a = 0; a < e.length; ++a) n(a)
            }
        })(), d = a
    })(), (() => {
        "use strict";
        var e = {
                d: (t, r) => {
                    for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: r[n]
                    })
                },
                o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                r: e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
            },
            t = {};
        e.r(t), e.d(t, {
            callMiniProgramOrPluginFunction: () => f,
            callSystemFunction: () => l,
            callThirdPartyFunction: () => d,
            convertStack: () => a,
            endSystemFunctionCall: () => u,
            findCurrentSource: () => s,
            startSystemFunctionCall: () => c,
            surroundThirdByTryCatch: () => _,
            wrapMiniProgramOrPluginFunction: () => g,
            wrapSystemFunction: () => p,
            wrapThirdPartyFunction: () => y,
            wrapperStack: () => n
        });
        var r = /[ (@]*https?:\/\/([^/]*)\/+(.*?):(\d+):(\d+)/,
            n = [];

        function a(e) {
            if (!e || e.__wxOriginalStack__) return !1;
            var t = e.stack;
            if (void 0 === t) return !1;
            for (var r = t, a = n.length - 1, i = 0; i >= 0 && a >= 0;) {
                var s = r.length,
                    c = 0;
                for (var u in o)
                    if (o[u]) {
                        var l = r.indexOf(o[u], i);
                        l < 0 || s <= l || (s = l, c = o[u].length)
                    } if (s >= r.length) break;
                var p = `at <${n[a--].description}>`;
                r = r.slice(0, s) + p + r.slice(s + c), i = s + p.length
            }
            return Object.defineProperties(e, {
                __wxOriginalStack__: {
                    value: t,
                    writable: !0,
                    configurable: !0
                },
                stack: {
                    value: r,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }
            }), !0
        }
        var o = {
            wrapSystemFunction: null,
            wrapMiniProgramOrPluginFunction: null
        };

        function i(e) {
            var t = ((new Error).stack || "").match(/.+/gm),
                n = "",
                a = 0;
            t && t.forEach((e => {
                if (r.test(e) && 2 === (a += 1)) {
                    var t = e.match(/^(\s*)at /),
                        o = t ? t[1].length : 0;
                    return n = e.slice(o), !1
                }
                return !0
            })), o[e] = n
        }

        function s() {
            for (var e = "", t = n.length - 1; t >= 0; t--) n[t].pluginAppId && (e = n[t].pluginAppId);
            return e
        }
        var c = e => {
                null === o.wrapSystemFunction && (o.wrapSystemFunction = "", p("", "", i)("wrapSystemFunction")), n.push({
                    description: e
                })
            },
            u = () => {
                n.pop()
            };

        function l(e, t, r, c, u, l = !1) {
            var f;
            null === o.wrapSystemFunction && (o.wrapSystemFunction = "", p("", "", i)("wrapSystemFunction")), n.push({
                description: t
            });
            try {
                f = r.apply(c, u)
            } catch (t) {
                if (a(t)) {
                    if ("AppServiceSdkKnownError" === t.type) throw n.pop(), t;
                    if ("ThirdScriptError" === t.type) {
                        var d = s();
                        v.thirdErrorReport({
                            error: t,
                            source: d,
                            triggerErrorCallback: !l
                        })
                    } else v.errorReport({
                        key: e,
                        error: t,
                        triggerErrorCallback: !l
                    })
                }
                if (l) throw n.pop(), t
            }
            return n.pop(), f
        }

        function p(e, t, r, n = !1) {
            return function(...a) {
                return l(e, t, r, this, a, n)
            }
        }

        function f(e, t, r, s, c, u = !1) {
            var l;
            null === o.wrapMiniProgramOrPluginFunction && (o.wrapMiniProgramOrPluginFunction = "", g("", "", i)("wrapMiniProgramOrPluginFunction")), n.push({
                description: t,
                pluginAppId: e
            });
            try {
                l = r.apply(s, c)
            } catch (t) {
                if (a(t) && v.thirdErrorReport({
                        error: t,
                        source: e || "",
                        triggerErrorCallback: !u
                    }), u) throw n.pop(), t
            }
            return n.pop(), l
        }

        function d(e, t, r, n, a = !1) {
            return f(s(), e, t, r, n, a)
        }

        function g(e, t, r, n = !1) {
            return function(...a) {
                return f(e, t, r, this, a, n)
            }
        }

        function y(e, t, r = !1) {
            return function(...n) {
                return f(s(), e, t, this, n, r)
            }
        }

        function _(e, t) {
            var r = (t || "").match(/^\s*(?:at )?([\s\S]*)$/),
                n = r ? r[1] : "",
                a = e || function() {};
            return function(...e) {
                return f(s(), n, a, a, e, !1)
            }
        }
        h = t
    })(), (() => {
        "use strict";
        var e = {
            d: (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                })
            }
        };
        e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        var r = {};
        (() => {
            e.d(r, {
                default: () => se
            });
            var a = {
                    APP: 0,
                    WIDGET: 1,
                    GAME: 2,
                    GAME_SUBCONTEXT: 3,
                    APP_SUBCONTEXT: 4
                },
                s = {
                    Speed: 13544,
                    Error: 13582,
                    Slow: 13968,
                    Clipboard: 14367,
                    NetworkAPI: 14480,
                    NetworkAPI2: 26057,
                    AccelerateNetwork: 30769,
                    Display: 15496,
                    WebviewRecycle: 15352,
                    WebviewRestore: 15353,
                    PluginDisplay: 15364,
                    functionalPageOperation: 15804,
                    RecycledAPI: 15649,
                    GameReportKV: 15677,
                    RecycleView: 15864,
                    GameADFunnelModel: 15859,
                    CustomComponent: 15948,
                    VideoAction: 16137,
                    SameLayerRender: 16360,
                    MediaCompStatus: 16435,
                    NavigateToMiniProgramAlert: 16432,
                    LaunchDetailSpeed: 16514,
                    CloudReport: 16588,
                    DeprecatedAPI: 16624,
                    Share: 16717,
                    APIUse: 17619,
                    MiniprogramInnerComponentUse: 30314,
                    SetDataPerf: 17176,
                    UserLog: 17809,
                    GameInteractiveData: 17836,
                    GameRecorder: 17833,
                    UserLogFail: 17975,
                    WeAppInvoke: 18042,
                    RenderCache: 18052,
                    RenderStages: 18321,
                    ShareCardClick: 18352,
                    PerfReport: 18748,
                    GameServerInvite: 18768,
                    NpmExtendedLib: 18874,
                    FirstInteraction: 19136,
                    GameComponent: 19283,
                    GameWhatsNew: 19335,
                    TradeService: 19286,
                    LazyCodeLoading: 20030,
                    MidasFriendPayment: 20285,
                    Handoff: 20888,
                    ShareToWeRun: 21272,
                    WeAppOperateWXData: 21359,
                    PrivacyPopup: 29666,
                    WXGameWASMLaunchClose: 21494,
                    WXGameWASMLaunchException: 21493,
                    WXGameWASMLaunchTime: 21492,
                    ExptHit: 21627,
                    WeAppInvoke2: 21688,
                    GameLifeMiniGameCardAction: 21898,
                    ShareImageMenu: 22050,
                    WeAppToChannels: 22082,
                    RequestPaymentCheckTicket: 22273,
                    WeAppNavBan: 22762,
                    GameAdsSkipCard: 20267,
                    MiniGameOpenDataMonitor: 23536,
                    BLEConnection: 23886,
                    BLEDevices: 29065,
                    BLEMeshDevices: 29512,
                    WeAppRequestError: 24247,
                    ClickWechatAppPreviewPage: 24298,
                    MiniprogramOnWeakNetwork: 24499,
                    PaymentAddOrderCall: 27441,
                    MiniprogramOnUserCaptureScreen: 26252,
                    MiniprogramDoEvilIdentification: 26447,
                    MiniprogramTapRestriction: 27322,
                    MiniprogramLiveActivityButtonDoEvilCheck: 28893,
                    MiniprogramWebviewExportUrl: 30247,
                    WeAppRequestErrnoInfo: 24321,
                    PublishWechatState: 24488,
                    OpenEmbeddedMiniProgramResult: 24542,
                    RequestPaymentRiskConfirm: 24544,
                    InitRenderDone: 24643,
                    SdkInnerApiInvoke: 24927,
                    WeAppSensitiveRequest: 25214,
                    OpenUrl: 25265,
                    WeAppInteractionApiCall: 25394,
                    Route: 25520,
                    detachFromNestWebviewPage: 25651,
                    WeAppInteractiveApiError: 25972,
                    WeAppCoreWebVitals: 26147,
                    WxappNicknameAvatarAutofill: 26249,
                    WeFreeHttpDns: 26411,
                    LaunchApplicationInfo: 26472,
                    WxappChannelVideo: 26614,
                    WeAppSDKSubpackageInject: 27065,
                    WXGameSceneLaunchReport: 27248,
                    XR_FRAME: 27478,
                    MediaApi: 27661,
                    WePayVIPAppInteractiveApiError: 28022,
                    WePayVIPAppRequestError: 28019,
                    PayCompletedPage: 28043,
                    Skyline: 28287,
                    PageScrollInfo: 28458,
                    Wxobs: 28554,
                    IntersectionObserverUsage: 28808,
                    MiniProgramWebviewSlowFrame: 29061,
                    MiniProgramCommercialMap: 29170,
                    AiadAnalyse: 29503,
                    VirtualPayment: 30164,
                    WeAppXNetInvoke: 29870,
                    ProductRecommand: 30343,
                    AIADPreview: 31127,
                    AiAdError: 31167
                },
                c = {
                    webview2AppService: 1,
                    appService2Webview: 2,
                    funcReady: 3,
                    firstGetData: 4,
                    firstRenderTime: 5,
                    reRenderTime: 6,
                    forceUpdateRenderTime: 7,
                    appRoute2newPage: 8,
                    newPage2pageReady: 9,
                    thirdScriptRunTime: 10,
                    pageframe: 11,
                    WAWebview: 12,
                    WAWidget: 13,
                    widgetCanvasReady: 14,
                    widgetFirstDataPush: 15
                },
                l = {
                    apiCallback: 1,
                    pageInvoke: 2,
                    widgetInvoke: 3
                },
                p = {
                    appServiceSDKScriptError: 1,
                    webviewSDKScriptError: 2,
                    jsEnginScriptError: 3,
                    thirdScriptError: 4,
                    webviewScriptError: 5,
                    exparserScriptError: 6,
                    widgetEnginScriptError: 7,
                    widgetThirdScriptError: 8,
                    gameSDKScriptError: 10,
                    gameSubContextSDKScriptError: 12,
                    gameThirdScriptError: 13,
                    gameSubContextThirdScriptError: 14,
                    appSubContextThirdScriptError: 15,
                    appSubContextSDKScriptError: 16
                },
                f = {
                    [a.APP]: "thirdScriptError",
                    [a.APP_SUBCONTEXT]: "appSubContextThirdScriptError",
                    [a.WIDGET]: "widgetThirdScriptError",
                    [a.GAME]: "gameThirdScriptError",
                    [a.GAME_SUBCONTEXT]: "gameSubContextThirdScriptError"
                };
            var d = {
                    offset: 0,
                    now: function() {
                        if (0 === this.offset) throw Error("offset not ready");
                        return Date.now() - this.offset
                    }
                },
                v = 0;

            function g() {
                var e = 0;
                return {
                    get() {
                        if (e > 0) return e;
                        if (0 === v) throw Error("initTime not ready");
                        return e = v
                    },
                    since() {
                        return Date.now() - this.get()
                    },
                    set(t) {
                        e = t
                    },
                    reset() {
                        e = Date.now()
                    }
                }
            }
            void 0 !== i ? i.onLoad((() => {
                d.offset = Date.now(), v = Date.now()
            })) : (d.offset = Date.now(), v = Date.now());
            class y {
                constructor(e, t, r, n) {
                    this.BATCH_KEYVALUE_INTERVAL = e, this.REPORT_DECREASE_RATE = t, this.PERIOD_TIME = n, this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE = r, this.periodStartTime = g(), this.currentPeriodSurplusReportCount = this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE, this.currentMiniPeriodReportCount = 0, this.currentPeriodReportQueue = [], this._currentMiniPeriodFlag = 1, this._lastReportTime = g(), this._periods = parseInt(this.PERIOD_TIME / this.BATCH_KEYVALUE_INTERVAL, 10)
                }
                get _currentMiniPeriod() {
                    var e = this._evaluateCurrentMiniPeriodBatch();
                    return this._currentMiniPeriodFlag !== e ? (this._currentMiniPeriodFlag = e, this.currentPeriodSurplusReportCount -= this.currentMiniPeriodReportCount, this.currentMiniPeriodReportCount = 0, this._currentMiniPeriod) : e
                }
                _evaluateCurrentMiniPeriodBatch() {
                    for (var e = this.periodStartTime.since(), t = 1; t <= this._periods; t++)
                        if (e < this.BATCH_KEYVALUE_INTERVAL * t) return t;
                    return this._periods
                }
                get _currentMiniPeriodMaxReportCount() {
                    return this.periodStartTime.since() > this.PERIOD_TIME ? (this.periodStartTime.reset(), this.currentPeriodSurplusReportCount = this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE, this._currentMiniPeriodMaxReportCount) : this._currentMiniPeriod === this._periods ? this.currentPeriodSurplusReportCount : parseInt(this.currentPeriodSurplusReportCount * this.REPORT_DECREASE_RATE, 10)
                }
                pushReportQueue(e, t = !1) {
                    this.currentMiniPeriodReportCount >= this._currentMiniPeriodMaxReportCount ? t && (this.currentPeriodReportQueue.unshift(e), this.currentPeriodReportQueue.pop()) : (this.currentPeriodReportQueue.push(e), this.currentMiniPeriodReportCount++)
                }
                attemptReportAndGetReportMsgs(e = !1) {
                    var t = Date.now();
                    if (t - this._lastReportTime.get() > this.BATCH_KEYVALUE_INTERVAL || e) {
                        if (!this.currentPeriodReportQueue.length) return [];
                        var r = this.currentPeriodReportQueue.splice(0, this.currentPeriodReportQueue.length);
                        return this._lastReportTime.set(t), r
                    }
                    return []
                }
                isLimit() {
                    return this.currentMiniPeriodReportCount >= this._currentMiniPeriodMaxReportCount
                }
            }
            class _ {
                constructor(e, t, r, n) {
                    this.BATCH_KEYVALUE_INTERVAL = t, this.PERIOD_TIME = n, this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE = r, this.keyStr = e, this._lastReportTime = g(), this._periodStartTime = g(), this._periodReportCountMP = {}, this.cacheMP = {}
                }
                pushReportQueue(e, t = !1) {
                    var r = e[this.keyStr];
                    this.cacheMP[r] || (this.cacheMP[r] = []), this._periodReportCountMP[r] || (this._periodReportCountMP[r] = 0), this._periodReportCountMP[r] > this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE ? t && (this.cacheMP[r].unshift(e), this.cacheMP[r].pop()) : (this._periodReportCountMP[r]++, this.cacheMP[r].push(e))
                }
                isLimit(e) {
                    return this._periodReportCountMP[e] > this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE
                }
                attemptReportAndGetReportMsgs(e) {
                    var t = Date.now();
                    if (t - this._lastReportTime.get() > this.BATCH_KEYVALUE_INTERVAL || e) {
                        var r = Array.prototype.concat.call([], ...Object.values(this.cacheMP));
                        return Object.keys(this.cacheMP).forEach((e => {
                            this.cacheMP[e].length = 0
                        })), this._lastReportTime.set(t), t - this._periodStartTime.get() > this.PERIOD_TIME && (this._periodStartTime.set(t), this._periodReportCountMP = {}, this.cacheMP = {}), r
                    }
                    return []
                }
            }
            class m {
                constructor(e, t, r, n) {
                    this.reportTime = g(), this.continueDecreaseReportLimitStrategys = {}, this.reportLimitStrategy = new _(e, t, r, n), this.BATCH_KEYVALUE_INTERVAL = t, this.keyStr = e
                }
                shouldReport() {
                    return this.reportTime.since() >= this.BATCH_KEYVALUE_INTERVAL
                }
                setContinueDecreaseReportLimitStrategyKey(e, t, r, n, a) {
                    this.continueDecreaseReportLimitStrategys[e] = new y(t, r, n, a)
                }
                pushReportQueue(e, t) {
                    var r = e[this.keyStr];
                    r in this.continueDecreaseReportLimitStrategys ? this.continueDecreaseReportLimitStrategys[r].pushReportQueue(e, t) : this.reportLimitStrategy.pushReportQueue(e, t)
                }
                attemptReportAndGetReportMsgs(e) {
                    if (e || this.shouldReport()) {
                        var t = this.reportLimitStrategy.attemptReportAndGetReportMsgs(e),
                            r = Object.values(this.continueDecreaseReportLimitStrategys).reduce(((e, t) => (e.push(...t.attemptReportAndGetReportMsgs()), e)), []);
                        return this.reportTime.reset(), t.concat(r)
                    }
                    return []
                }
                isLimit(e) {
                    return e in this.continueDecreaseReportLimitStrategys ? this.continueDecreaseReportLimitStrategys[e].isLimit() : this.reportLimitStrategy.isLimit(e)
                }
            }
            var b = () => {
                    w !== o && void 0 !== w && Object.assign(w, o)
                },
                w = (() => (o.onReady(b), o))();
            const k = w;
            var S = (() => k.platform)(),
                I = (() => "devtools" === S)(),
                x = (() => "ios" === S)();
            var T = (() => Object.prototype.toString)(),
                A = n.prototype.call.bind(T);

            function C(e) {
                return A(e).slice(8, -1)
            }
            var E = 6e4,
                P = 15e3;

            function O(...e) {
                u.invoke(...e)
            }
            var R = {
                    login: 1,
                    login_cancel: 2,
                    login_fail: 3,
                    request_fail: 4,
                    connectSocket_fail: 5,
                    closeSocket_fail: 6,
                    sendSocketMessage_fail: 7,
                    uploadFile_fail: 8,
                    downloadFile_fail: 9,
                    redirectTo_fail: 10,
                    navigateTo_fail: 11,
                    navigateBack_fail: 12,
                    appServiceSDKScriptError: 13,
                    webviewSDKScriptError: 14,
                    jsEnginScriptError: 15,
                    thirdScriptError: 16,
                    webviewScriptError: 17,
                    exparserScriptError: 18,
                    widgetEnginScriptError: 113,
                    widgetThirdScriptError: 114,
                    gameSDKScriptError: 135,
                    gameSubContextSDKScriptError: 136,
                    gameThirdScriptError: 137,
                    gameSubContextThirdScriptError: 138,
                    appSubContextThirdScriptError: 191,
                    appSubContextSDKScriptError: 192,
                    startRecord: 19,
                    startRecord_fail: 20,
                    getLocation: 21,
                    getLocation_fail: 22,
                    chooseLocation: 23,
                    chooseLocation_fail: 24,
                    openAddress: 25,
                    openAddress_fail: 26,
                    openLocation: 27,
                    openLocation_fail: 28,
                    makePhoneCall: 29,
                    makePhoneCall_fail: 30,
                    operateWXData: 31,
                    operateWXData_fail: 32,
                    checkLogin: 33,
                    checkLogin_fail: 34,
                    refreshSession: 35,
                    refreshSession_fail: 36,
                    chooseVideo: 37,
                    chooseVideo_fail: 38,
                    chooseImage: 39,
                    chooseImage_fail: 40,
                    verifyPaymentPassword: 41,
                    verifyPaymentPassword_fail: 42,
                    requestPayment: 43,
                    requestPayment_fail: 44,
                    bindPaymentCard: 45,
                    bindPaymentCard_fail: 46,
                    requestPaymentToBank: 47,
                    requestPaymentToBank_fail: 48,
                    openDocument: 49,
                    openDocument_fail: 50,
                    chooseContact: 51,
                    chooseContact_fail: 52,
                    operateMusicPlayer: 53,
                    operateMusicPlayer_fail: 54,
                    getMusicPlayerState_fail: 55,
                    playVoice_fail: 56,
                    setNavigationBarTitle_fail: 57,
                    switchTab_fail: 58,
                    getImageInfo_fail: 59,
                    enableCompass_fail: 60,
                    enableAccelerometer_fail: 61,
                    getStorage_fail: 62,
                    setStorage_fail: 63,
                    clearStorage_fail: 64,
                    removeStorage_fail: 65,
                    getStorageInfo_fail: 66,
                    getStorageSync_fail: 67,
                    setStorageSync_fail: 68,
                    addCard_fail: 69,
                    openCard_fail: 70,
                    openSetting_fail: 71,
                    reLaunch_fail: 72,
                    getClipboardData_fail: 73,
                    setClipboardData_fail: 74,
                    showShareMenu_fail: 75,
                    hideShareMenu_fail: 76,
                    showToast_fail: 77,
                    hideToast_fail: 78,
                    openBluetoothAdapter_fail: 79,
                    closeBluetoothAdapter_fail: 80,
                    getBluetoothAdapterState_fail: 81,
                    startBluetoothDevicesDiscovery_fail: 82,
                    stopBluetoothDevicesDiscovery_fail: 83,
                    getBluetoothDevices_fail: 84,
                    getConnectedBluetoothDevices_fail: 85,
                    createBLEConnection_fail: 86,
                    closeBLEConnection_fail: 87,
                    getBLEDeviceServices_fail: 88,
                    getBLEDeviceCharacteristics_fail: 89,
                    notifyBLECharacteristicValueChanged_fail: 90,
                    readBLECharacteristicValue_fail: 91,
                    checkIsSupportFacialRecognition_fail: 92,
                    startFacialRecognitionVerify_fail: 93,
                    startFacialRecognitionVerifyAndUploadVideo_fail: 94,
                    startBeaconDiscovery_fail: 95,
                    stopBeaconDiscovery_fail: 96,
                    getBeacons_fail: 97,
                    getSetting_fail: 98,
                    setScreenBrightness_fail: 99,
                    getScreenBrightness_fail: 100,
                    vibrateShort_fail: 101,
                    vibrateLong_fail: 102,
                    shareAppMessage: 103,
                    shareAppMessage_fail: 104,
                    shareAppMessage_cancel: 105,
                    shareAppMessageDirectly: 106,
                    shareAppMessageDirectly_fail: 107,
                    shareAppMessageDirectly_cancel: 108,
                    sendBizRedPacket_fail: 109,
                    addPhoneContact_fail: 110,
                    saveImageToPhotosAlbum_fail: 111,
                    saveVideoToPhotosAlbum_fail: 112,
                    setTopBarText_fail: 115,
                    setNavigationBarRightButton_fail: 116,
                    setEnableDebug_fail: 117,
                    captureScreen_fail: 118,
                    setKeepScreenOn_fail: 119,
                    createRequestTask: 120,
                    createRequestTask_fail: 121,
                    createDownloadTask: 122,
                    createDownloadTask_fail: 123,
                    createUploadTask: 124,
                    createUploadTask_fail: 125,
                    checkIsSupportSoterAuthentication_fail: 126,
                    startSoterAuthentication_fail: 127,
                    navigateToMiniProgram_fail: 128,
                    navigateBackMiniProgram_fail: 129,
                    openDeliveryList_fail: 130,
                    setNavigationBarColor_fail: 131,
                    setStatusBarStyle_fail: 132,
                    getFileInfo_fail: 133,
                    global_objs_readonly: 134,
                    writeBLECharacteristicValue_fail: 206,
                    adData_error: 140,
                    adExposureReport_fail: 141,
                    adClickReport_fail: 142,
                    adNavigateToMiniProgram_fail: 143,
                    adOpenUrl_fail: 144,
                    initGameIsolatedContext: 145,
                    initGameIsolatedContext_fail: 146,
                    initGameOpenDataContext: 147,
                    initGameOpenDataContext_fail: 148,
                    initAppIsolatedContext: 149,
                    initAppIsolatedContext_fail: 150,
                    adFollowReport_fail: 151,
                    adAddContact_fail: 152,
                    adDownloadAppInternal_fail: 153,
                    adGetInstallState_fail: 154,
                    adQueryDownloadTask_fail: 155,
                    adAddDownloadTaskStraight_fail: 156,
                    adPauseDownloadTask_fail: 157,
                    adResumeDownloadTask_fail: 158,
                    adInstallDownloadTask_fail: 159,
                    pluginDisplayInPage: 160,
                    functionalPageSuccess: 161,
                    functionalPageFail: 162,
                    functionalPageReject: 163,
                    insertInputToWebLayer_fail: 166,
                    insertVideoToWebLayer_fail: 167,
                    insertInputToWebLayer_succ: 168,
                    insertVideoToWebLayer_succ: 169,
                    insertMapToWebLayer_fail: 171,
                    insertMapToWebLayer_succ: 172,
                    insertLiveToWebLayer_fail: 178,
                    insertLiveToWebLayer_succ: 179,
                    insertCanvas2dToWebLayer_fail: 180,
                    insertCanvas2dToWebLayer_succ: 181,
                    insertWebGLToWebLayer_fail: 187,
                    insertWebGLToWebLayer_succ: 186,
                    insertVideo2ToWebLayer_fail: 182,
                    insertVideo2ToWebLayer_succ: 183,
                    insertCameraToWebLayer_fail: 184,
                    insertCameraToWebLayer_succ: 185,
                    insertTextareaToWebLayer_fail: 189,
                    insertTextareaToWebLayer_succ: 188,
                    showImageOperateSheet_fail: 190,
                    audioInstancesCountReach1024: 170,
                    bindUDP: 173,
                    sendUDPMessage: 174,
                    receiveUDPMessage: 175,
                    UDPError: 176,
                    sendUDPMessageToInvalidAddress: 177,
                    clientLibVersionNotMatch: 205,
                    subContextLibVersionNotMatch: 207,
                    oaAddContact_fail: 201,
                    oaReportBehavior_fail: 202,
                    oaGetContactData_fail: 203,
                    webviewBizDomainFetch_fail: 208,
                    webviewBizDomainSkipReturn: 209,
                    demoEnterHomePage: 210,
                    demoConfigRepeat: 211,
                    getUserInteractiveStorage: 212,
                    modifyFriendInteractiveStorage: 213,
                    modifyFriendInteractiveStorageShowModal: 214,
                    modifyFriendInteractiveStorageConfirm: 215,
                    modifyFriendInteractiveStorageCancel: 216,
                    disableLivePlayer: 220,
                    disableLivePusher: 221,
                    disableVideo: 222,
                    asyncApiCost: 226,
                    asyncApiCount: 227,
                    requestSubscribeMessageWithNative: 230,
                    requestSubscribeMessageWithNativeSuccess: 231,
                    requestSubscribeMessageWithNativeFail: 232,
                    pageNotFound: 234,
                    tradeServiceGetPermissionBytesSuccess: 235,
                    tradeServiceGetPermissionBytesFail: 236,
                    tradeServiceCanUse: 237,
                    tradeServiceCanNotUse: 238,
                    tradeServiceTapCard: 239,
                    midasLaunchFeatureFail: 240,
                    createNormalWorker: 241,
                    createWKWorker: 242,
                    onWorkerWebViewTerminate: 244,
                    loadGameIndependentSubPackageFail: 243,
                    requestPaymentCheckTicketCount: 245,
                    requestPaymentCheckTicketFail: 246,
                    requestPaymentCheckTicketTimeout: 247,
                    useLaunchExptInfo: 249,
                    useOriginLaunchExptInfo: 250,
                    useContactExptInfo: 251,
                    reportEventInvoke: 252,
                    readdirTraverseRootDir: 253,
                    useWxProtobuf: 254,
                    useWxLanDebug: 255
                },
                M = new m("id", P, 100, E);

            function D(e) {
                k.onReady((() => {
                    O("reportIDKey", {
                        dataArray: e
                    })
                }))
            }

            function j(e, t, r, n = !1) {
                if (Number.isInteger(e) && !(!Number.isInteger(t) || t < 0 || t > 255)) {
                    M.pushReportQueue({
                        id: e,
                        key: t,
                        value: r
                    });
                    var a = M.attemptReportAndGetReportMsgs(n);
                    a.length && D(a)
                }
            }

            function L() {
                var e = M.attemptReportAndGetReportMsgs(!0);
                e.length && D(e)
            }
            var N = [],
                F = 0,
                W = 0,
                $ = 0,
                B = {},
                U = {},
                q = {},
                H = new m("key", P, 100, E);

            function G(e) {
                k.onReady((() => {
                    O("reportKeyValue", {
                        dataArray: e
                    })
                }))
            }

            function V() {
                k.onReady((() => {
                    !N || N.length <= 0 || (O("systemLog", {
                        dataArray: N
                    }), N = [])
                }))
            }

            function K(e) {
                var t = k && k.appContactInfo && k.appContactInfo.call_plugin_info;
                if (!t || !Array.isArray(t)) return 0;
                var r = t.find((t => t.plugin_id === e));
                return r && void 0 !== r.inner_version ? r.inner_version : 0
            }
            H.setContinueDecreaseReportLimitStrategyKey(18042, P, .5, 100, E);
            var z = () => {},
                J = () => {},
                Y = () => {},
                Z = () => {},
                Q = "",
                X = {},
                ee = -1,
                te = 0,
                re = a.APP,
                ne = "";
            "function" == typeof k.onReady && k.onReady((() => {
                void 0 !== k.appType && (ee = k.appType), "object" == typeof k.appLaunchInfo && (te = k.appLaunchInfo.scene);
                var e = k.networkType;
                e ? ne = e : u.invoke("getNetworkType", {}, (e => {
                    e && e.networkType && (ne = e.networkType)
                })), "function" == typeof u.addEventListener && u.addEventListener("onNetworkStatusChange", (e => {
                    ne = e.networkType
                }))
            }));
            var ae = {
                    surroundThirdByTryCatch: h.surroundThirdByTryCatch,
                    slowReport: ({
                        key: e,
                        cost: t,
                        extend: r,
                        force: n
                    }) => {
                        var a = l[e],
                            o = Date.now();
                        if (a && (n || !(o - $ < 500)) && !(Object.keys(q).length > 50 || (q[r] || (q[r] = 0), q[r]++, q[r] > 3))) {
                            $ = o;
                            var i = `${t},${encodeURIComponent(r)},${a},${ae.getAppType()}`;
                            ae.reportKeyValue({
                                key: "Slow",
                                value: i
                            })
                        }
                    },
                    isLimitReport: e => H.isLimit(e),
                    speedReport: ({
                        key: e,
                        data: t,
                        timeMark: r,
                        force: n
                    }) => {
                        var a = c[e],
                            o = Date.now(),
                            i = 0,
                            s = r.nativeTime;
                        if (a && (n || !(o - (B[a] || 0) < 500)) && r.startTime && r.endTime && (1 !== a && 2 !== a || s)) {
                            t && (i = JSON.stringify(t).length), B[a] = o;
                            var u = `${a},${r.startTime},${s},${s},${r.endTime},${i},${ae.getAppType()}`;
                            ae.reportKeyValue({
                                key: "Speed",
                                value: u
                            })
                        }
                    },
                    reportQualityData(e, t, r, n = []) {
                        var a = r - t;
                        a < 0 && (a = 0), O("reportKeyValue", {
                            version: 2,
                            dataArray: [{
                                key: s[e],
                                value: [a, te, t, r, ...n].join(",")
                            }]
                        })
                    },
                    reportQualityData2(e, t = []) {
                        O("reportKeyValue", {
                            version: 2,
                            dataArray: [{
                                key: s[e],
                                value: t.join(",")
                            }]
                        })
                    },
                    flushReportKeyValueList: () => {
                        var e = H.attemptReportAndGetReportMsgs(!0);
                        e.length && G(e)
                    },
                    reportKeyValue: ({
                        key: e,
                        value: t,
                        immediately: r = !1,
                        number: n = !1
                    }) => {
                        if (n || s[e]) {
                            H.pushReportQueue({
                                key: n ? e : s[e],
                                value: t
                            }, r);
                            var a = H.attemptReportAndGetReportMsgs(r);
                            a.length && G(a)
                        }
                    },
                    flushReportIDKeyList: L,
                    reportIDKey: function({
                        id: e,
                        key: t,
                        value: r = 1,
                        force: n = !1
                    }) {
                        R[t] && j(e || (x ? 356 : 358), R[t], r, n)
                    },
                    reportIDKeyDirectly: function({
                        id: e,
                        key: t,
                        immediately: r = !1
                    }) {
                        void 0 !== t && 356 !== e && 358 !== e && j(e, t = +t, 1, r)
                    },
                    assertWithIDKey: function(e, t, r = 1) {
                        e || j(1872, t, r, !0)
                    },
                    reportFrameworkIDKey: function(e, t = 1) {
                        j(1874, e, t)
                    },
                    thirdErrorReport: ({
                        key: e = re,
                        error: t,
                        triggerErrorCallback: r = !0,
                        isUnhandledRejection: n = !1,
                        promise: a,
                        source: o = "",
                        isOpenDataContextError: i = !1
                    }) => {
                        ae.errorReport({
                            key: f[e],
                            error: t,
                            triggerErrorCallback: r,
                            isThirdScriptError: !0,
                            isUnhandledRejection: n,
                            promise: a,
                            source: o,
                            isOpenDataContextError: i
                        })
                    },
                    errorReport: ({
                        key: e,
                        error: r,
                        isThirdScriptError: n = !1,
                        triggerErrorCallback: o = !0,
                        isUnhandledRejection: i = !1,
                        promise: s,
                        source: c = "",
                        isOpenDataContextError: l = !1,
                        extra: f = ""
                    }) => {
                        if (p[e] && r) {
                            var d, h;
                            "function" == typeof __wxSourceMapRetrace__ && (r = __wxSourceMapRetrace__(r)), "object" == typeof r && (r.message || r.stack) ? (d = r.message, h = r.stack) : (d = function(e) {
                                try {
                                    return JSON.stringify(e)
                                } catch (e) {
                                    return e.message, ""
                                }
                            }(r), h = C(r));
                            var v = n ? "MiniProgramError" : `SystemError (${e})`,
                                g = d,
                                y = "";
                            r.name && 0 !== (h || "").indexOf(r.name) && (y = "\n" + r.name + ": " + g);
                            var _ = `${v}\n${g}${y}\n${h}`;
                            if (I) {
                                var m = new Error(`${v}\n${g}`);
                                "object" == typeof r && void 0 !== r.name && Object.defineProperty(m, "name", {
                                    value: r.name
                                }), "object" == typeof r && void 0 !== r.stack && Object.defineProperty(m, "stack", {
                                    value: r.stack
                                }), console.error(m)
                            } else i ? console.error("(in promise) " + _) : console.error(_);
                            if (!(l || _.indexOf("subContext.js") >= 0 || ("undefined" != typeof window && void 0 !== window.__webviewId__ ? function(...e) {
                                    u.publish(...e)
                                }("WEBVIEW_ERROR_MSG", {
                                    data: {
                                        msg: _
                                    },
                                    options: {
                                        timestamp: Date.now()
                                    }
                                }) : o && (ae.triggerErrorMessage(_, i, r, s), n && ae.triggerThirdErrorMessage(_, i, r, s)), Object.keys(U).length > 50 || i && "Error" !== C(r)))) {
                                var b = "",
                                    w = "";
                                re !== a.APP && re !== a.GAME || (b = Q, w = function(e) {
                                    var t = "";
                                    return Object.keys(e).forEach(((r, n) => {
                                        0 !== n && (t += "&");
                                        try {
                                            t += `${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`
                                        } catch (e) {}
                                    })), t
                                }(X));
                                var k = 0;
                                if (1004 === ae.getAppType() && n) try {
                                    ne = __appServiceSDK__.getGameRelatedContextsExports().game._getCurrentNetworkType();
                                    var S = r.stackInfoArr;
                                    if (delete r.stackInfoArr, S) {
                                        var x = S.find((e => "usr" === e.type));
                                        if (x && "__plugin__" === x.package && "string" == typeof x.file) {
                                            var T = x.file.split("/");
                                            k = K(c = T && T[0])
                                        }
                                    }
                                } catch (m) {} else k = c.match(/wx[0-9a-f]{16}/) ? K(c) : 0;
                                var A = [p[e], r.name, ...[g, h, void 0 !== t && t.version || "", ae.getAppType(), b, w, void 0 !== t && t.updateTime || "", "", i ? 1 : 0, c, k, ne, f].map((e => {
                                    var t;
                                    try {
                                        t = encodeURIComponent(e)
                                    } catch (r) {
                                        t = e
                                    }
                                    return t
                                }))].join(",");
                                if (U[A] || (U[A] = 0), U[A]++, !(n && U[A] > 3 || U[A] > 3)) {
                                    ae.reportIDKey({
                                        key: e
                                    }), ae.reportKeyValue({
                                        key: "Error",
                                        value: A
                                    });
                                    var E = H.attemptReportAndGetReportMsgs(!0);
                                    E.length && G(E), L(), V()
                                }
                            }
                        }
                    },
                    log: (e, t) => {
                        e && "string" == typeof e && (!t && Date.now() - F < 50 || (F = Date.now(), N.push(e + ""), N.length >= 50 && V()))
                    },
                    submit: () => {
                        Date.now() - W < 50 || (W = Date.now(), L(), G(H.attemptReportAndGetReportMsgs(!0)), V())
                    },
                    registerErrorListener: e => {
                        "function" == typeof e && (z = e)
                    },
                    registerThirdErrorListener: e => {
                        "function" == typeof e && (J = e)
                    },
                    registerUnhandledRejectionListener: e => {
                        "function" == typeof e && (Y = e)
                    },
                    registerThirdUnhandledRejectionListener: e => {
                        "function" == typeof e && (Z = e)
                    },
                    triggerErrorMessage: (e, t = !1, r, n) => {
                        setTimeout((() => {
                            try {
                                t ? Y(r, n) : z(e)
                            } catch (e) {
                                console.error(e.message, "at onError callback function")
                            }
                        }), 0)
                    },
                    triggerThirdErrorMessage: (e, t = !1, r, n) => {
                        setTimeout((() => {
                            try {
                                t ? Z(r, n) : J(e)
                            } catch (e) {
                                console.error(e.message, "at onError callback function")
                            }
                        }), 0)
                    },
                    setAsWidget: () => {
                        re = a.WIDGET
                    },
                    setAsGame: () => {
                        re = a.GAME
                    },
                    setAsGameSubContext: () => {
                        re = a.GAME_SUBCONTEXT
                    },
                    getAppType: () => -1 === ee ? 0 : ee + 1e3
                },
                oe = {};

            function ie(e) {
                Object.defineProperty(oe, e, {
                    get() {
                        return t = ae[e],
                            function(...e) {
                                try {
                                    return t.apply(t, e)
                                } catch (e) {
                                    return void console.error("reporter error:" + e.message, e.stack)
                                }
                            };
                        var t
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }
            Object.keys(ae).forEach((e => {
                ie(e)
            })), Object.defineProperty(oe, "__route__", {
                set(e) {
                    Q = e
                }
            }), Object.defineProperty(oe, "__method__", {
                set() {}
            }), Object.defineProperty(oe, "__query__", {
                set(e) {
                    X = e
                }
            }), oe.RunType = a, "undefined" != typeof window && Object.defineProperty(window, "onbeforeunload", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value() {
                    ae.submit()
                }
            });
            const se = oe
        })(), v = r.default
    })(), (() => {
        "use strict";
        var e = {
            d: (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                })
            }
        };
        e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        var t = {};
        e.d(t, {
            default: () => L
        });
        var r, a, s, c, u, l, p, f, d, h, v, y, _, m, b, k = Object.prototype.toString,
            S = (Object.getPrototypeOf, Object.getOwnPropertyNames, Object.getOwnPropertyDescriptor, Object.defineProperty, {}),
            I = {},
            x = [],
            T = 0,
            A = [],
            C = (e, t, n) => {
                if (void 0 !== t && void 0 !== e && e === r) {
                    var a = void 0 !== n ? n : ++T;
                    return _ = a, I[a] = t, x.push(a), A.forEach((e => {
                        "function" == typeof e && e(a)
                    })), a
                }
            },
            E = (e, t, n, a) => {
                if (void 0 !== e && e === r) {
                    var o = (e => {
                        for (var t = x.length, r = 0; r < t; r++) {
                            var n = x[r];
                            if (I[n] === e) return n
                        }
                    })(t);
                    if (void 0 !== o) {
                        var i = S[n];
                        return "function" == typeof i ? i(a, o) : void 0
                    }
                }
            },
            P = (e, t) => {
                S[e] = t
            },
            O = (e, t) => {
                if (void 0 === d || "function" != typeof d) return "failed: loadLibFiles not supported";
                if ("devtools" === o.platform && "number" != typeof h) return "failed: loadLibFiles not supported";
                try {
                    if (0 === d.call(r, e, JSON.stringify(t))) throw `WAFiles: ${t} is not exist.`;
                    return "success"
                } catch (e) {
                    return "failed: " + e
                }
            },
            R = (e, t, r) => {
                if ("android" === o.platform || "ios" === o.platform || "devtools" === o.platform || "windows" === o.platform || "mac" === o.platform || "mina" === o.platform) {
                    var n = Date.now(),
                        a = O(null != r ? r : 1, [e]);
                    w.info(`inject subPackage: ${e} coast: `, Date.now() - n), t(a)
                } else w.error("不支持loadJSFiles")
            },
            M = {},
            D = {
                __init__: e => {
                    void 0 === r && void 0 !== e && ((r = e).register = C, r.subscribeHandler = E, a = r.alloc, s = r.create, c = r.destroy, u = r.evaluateScriptFile, l = r.loadJsFiles, d = r.loadLibFiles, p = r.allocEmpty, f = r.allocFromSnapshot, h = r.mainContextId, v = r.errorHandler, r.waitingChannel = {}, y = r.notifyGameEngineReady, delete r.alloc, delete r.create, delete r.destroy, delete r.evaluateScriptFile, delete r.loadJsFiles, delete r.loadLibFiles, delete r.allocEmpty, delete r.allocFromSnapshot, delete r.mainContextId, delete r.errorHandler, delete r.notifyGameEngineReady)
                },
                publish: (e, t = {}, n, a) => {
                    var o, i = (o = t, k.call(o).split(" ")[1].split("]")[0]);
                    if ("Object" !== i && "Undefined" !== i) throw new Error("params should be an object.");
                    return n.map((n => {
                        var o = I[n];
                        if (o) return o.subscribeHandler(r, e, t);
                        a && void 0 !== n && (r.waitingChannel[n] || (r.waitingChannel[n] = []), r.waitingChannel[n].push({
                            event: e,
                            params: t
                        }))
                    }))
                },
                subscribe: P,
                onRegister: e => {
                    A.push(e)
                },
                evaluateScriptFile: (e, t, r) => u(e, t, r),
                batchLoadJsFiles: (e, t, n) => {
                    if (void 0 === l || "function" != typeof l) return "failed: loadJsFiles not supported";
                    var a = "devtools" === o.platform ? void 0 : JSON.stringify(n);
                    try {
                        var i = l.call(r, e, JSON.stringify(t), a);
                        return (e => "[object Promise]" === Object.prototype.toString.call(e))(i) ? i.then((() => "success")).catch((e => "failed: " + e)) : "success"
                    } catch (e) {
                        return "failed: " + e
                    }
                },
                alloc: (e, t) => "function" == typeof a ? a.call(r, e, t) : -9999,
                create: (e, t) => "function" == typeof s ? s.call(r, e, t) : -9999,
                destroy: (e, t) => "function" == typeof c ? c(e, t) : -9999,
                isAsync: () => r && !0 === r.async,
                supportAlloc: () => "function" == typeof a,
                loadLibFiles: O,
                allocEmpty: (e, t) => "function" == typeof p ? p.call(r, e, t) : -9999,
                supportAllocEmpty: () => "function" == typeof p,
                allocFromSnapshot: (e, t) => {
                    if ("function" == typeof f) {
                        var n = f.call(r, e, t);
                        return n
                    }
                    return -9999
                },
                supportAllocFromSnapshot: () => "function" == typeof f,
                loadMainContextLibFile: R,
                loadSubContextLibFile: (e, t, r) => {
                    if (r) return R(e, t, r);
                    w.error("loadSubContextLibFile lose subContextId")
                },
                getMainContextId: () => h,
                setAppSubContextId: e => {
                    b = e
                },
                getAppSubContextId: () => b,
                convertRealId2SdkId: e => M[e],
                associateRealId2SdkId: e => {
                    M[e] = _
                },
                errorHandler: (e, t) => {
                    v ? v(e, t) : m ? m[e] = t : (m = {
                        [e]: t
                    }, P("subContextError", (({
                        contextId: e,
                        err: t
                    }) => {
                        m[e](t)
                    })))
                },
                notifyGameEngineReady: () => {
                    "function" == typeof y && y()
                }
            };
        var j = D;
        i.onLoad((() => {
            "undefined" != typeof WeixinJSContext && (j.__init__(WeixinJSContext), delete j.__init__, delete e.g.WeixinJSContext)
        }));
        const L = j;
        g = t.default
    })(), (() => {
        var e = {
                4081: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Q1T: () => o,
                        UoO: () => c,
                        Wkc: () => a,
                        YEP: () => n,
                        Z9j: () => i,
                        tHd: () => s
                    });
                    var n = 101,
                        a = 1001,
                        o = 1022,
                        i = 600009,
                        s = 600010,
                        c = 1300014
                },
                1977: (e, t, r) => {
                    var n;
                    e = r.nmd(e),
                        function(a) {
                            t && t.nodeType, e && e.nodeType;
                            var o = "object" == typeof r.g && r.g;
                            o.global !== o && o.window !== o && o.self;
                            var i, s = 2147483647,
                                c = 36,
                                u = 1,
                                l = 26,
                                p = 38,
                                f = 700,
                                d = 72,
                                h = 128,
                                v = "-",
                                g = /^xn--/,
                                y = /[^\x20-\x7E]/,
                                _ = /[\x2E\u3002\uFF0E\uFF61]/g,
                                m = {
                                    overflow: "Overflow: input needs wider integers to process",
                                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                    "invalid-input": "Invalid input"
                                },
                                b = c - u,
                                w = Math.floor,
                                k = String.fromCharCode;

                            function S(e) {
                                throw RangeError(m[e])
                            }

                            function I(e, t) {
                                for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                                return n
                            }

                            function x(e, t) {
                                var r = e.split("@"),
                                    n = "";
                                return r.length > 1 && (n = r[0] + "@", e = r[1]), n + I((e = e.replace(_, ".")).split("."), t).join(".")
                            }

                            function T(e) {
                                for (var t, r, n = [], a = 0, o = e.length; a < o;)(t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < o ? 56320 == (64512 & (r = e.charCodeAt(a++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), a--) : n.push(t);
                                return n
                            }

                            function A(e) {
                                return I(e, (function(e) {
                                    var t = "";
                                    return e > 65535 && (t += k((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += k(e)
                                })).join("")
                            }

                            function C(e, t) {
                                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                            }

                            function E(e, t, r) {
                                var n = 0;
                                for (e = r ? w(e / f) : e >> 1, e += w(e / t); e > b * l >> 1; n += c) e = w(e / b);
                                return w(n + (b + 1) * e / (e + p))
                            }

                            function P(e) {
                                var t, r, n, a, o, i, p, f, g, y, _, m = [],
                                    b = e.length,
                                    k = 0,
                                    I = h,
                                    x = d;
                                for ((r = e.lastIndexOf(v)) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && S("not-basic"), m.push(e.charCodeAt(n));
                                for (a = r > 0 ? r + 1 : 0; a < b;) {
                                    for (o = k, i = 1, p = c; a >= b && S("invalid-input"), ((f = (_ = e.charCodeAt(a++)) - 48 < 10 ? _ - 22 : _ - 65 < 26 ? _ - 65 : _ - 97 < 26 ? _ - 97 : c) >= c || f > w((s - k) / i)) && S("overflow"), k += f * i, !(f < (g = p <= x ? u : p >= x + l ? l : p - x)); p += c) i > w(s / (y = c - g)) && S("overflow"), i *= y;
                                    x = E(k - o, t = m.length + 1, 0 == o), w(k / t) > s - I && S("overflow"), I += w(k / t), k %= t, m.splice(k++, 0, I)
                                }
                                return A(m)
                            }

                            function O(e) {
                                var t, r, n, a, o, i, p, f, g, y, _, m, b, I, x, A = [];
                                for (m = (e = T(e)).length, t = h, r = 0, o = d, i = 0; i < m; ++i)(_ = e[i]) < 128 && A.push(k(_));
                                for (n = a = A.length, a && A.push(v); n < m;) {
                                    for (p = s, i = 0; i < m; ++i)(_ = e[i]) >= t && _ < p && (p = _);
                                    for (p - t > w((s - r) / (b = n + 1)) && S("overflow"), r += (p - t) * b, t = p, i = 0; i < m; ++i)
                                        if ((_ = e[i]) < t && ++r > s && S("overflow"), _ == t) {
                                            for (f = r, g = c; !(f < (y = g <= o ? u : g >= o + l ? l : g - o)); g += c) x = f - y, I = c - y, A.push(k(C(y + x % I, 0))), f = w(x / I);
                                            A.push(k(C(f, 0))), o = E(r, b, n == a), r = 0, ++n
                                        }++ r, ++t
                                }
                                return A.join("")
                            }
                            i = {
                                version: "1.3.2",
                                ucs2: {
                                    decode: T,
                                    encode: A
                                },
                                decode: P,
                                encode: O,
                                toASCII: function(e) {
                                    return x(e, (function(e) {
                                        return y.test(e) ? "xn--" + O(e) : e
                                    }))
                                },
                                toUnicode: function(e) {
                                    return x(e, (function(e) {
                                        return g.test(e) ? P(e.slice(4).toLowerCase()) : e
                                    }))
                                }
                            }, void 0 === (n = function() {
                                return i
                            }.call(t, r, t, e)) || (e.exports = n)
                        }(globalThis)
                },
                8817: e => {
                    "use strict";

                    function t(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    e.exports = function(e, r, n, a) {
                        r = r || "&", n = n || "=";
                        var o = {};
                        if ("string" != typeof e || 0 === e.length) return o;
                        var i = /\+/g;
                        e = e.split(r);
                        var s = 1e3;
                        a && "number" == typeof a.maxKeys && (s = a.maxKeys);
                        var c = e.length;
                        s > 0 && c > s && (c = s);
                        for (var u = 0; u < c; ++u) {
                            var l, p, f, d, h = e[u].replace(i, "%20"),
                                v = h.indexOf(n);
                            v >= 0 ? (l = h.substr(0, v), p = h.substr(v + 1)) : (l = h, p = ""), f = decodeURIComponent(l), d = decodeURIComponent(p), t(o, f) ? Array.isArray(o[f]) ? o[f].push(d) : o[f] = [o[f], d] : o[f] = d
                        }
                        return o
                    }
                },
                8779: e => {
                    "use strict";
                    var t = function(e) {
                        switch (typeof e) {
                            case "string":
                                return e;
                            case "boolean":
                                return e ? "true" : "false";
                            case "number":
                                return isFinite(e) ? e : "";
                            default:
                                return ""
                        }
                    };
                    e.exports = function(e, r, n, a) {
                        return r = r || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map((function(a) {
                            var o = encodeURIComponent(t(a)) + n;
                            return Array.isArray(e[a]) ? e[a].map((function(e) {
                                return o + encodeURIComponent(t(e))
                            })).join(r) : o + encodeURIComponent(t(e[a]))
                        })).join(r) : a ? encodeURIComponent(t(a)) + n + encodeURIComponent(t(e)) : ""
                    }
                },
                9935: (e, t, r) => {
                    "use strict";
                    t.decode = t.parse = r(8817), t.encode = t.stringify = r(8779)
                },
                2517: (e, t, r) => {
                    "use strict";
                    var n = r(1977),
                        a = r(7417);

                    function o() {
                        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                    }
                    t.Qc = m;
                    var i = /^([a-z0-9.+-]+:)/i,
                        s = /:[0-9]*$/,
                        c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                        u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                        l = ["'"].concat(u),
                        p = ["%", "/", "?", ";", "#"].concat(l),
                        f = ["/", "?", "#"],
                        d = /^[+a-z0-9A-Z_-]{0,63}$/,
                        h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                        v = {
                            javascript: !0,
                            "javascript:": !0
                        },
                        g = {
                            javascript: !0,
                            "javascript:": !0
                        },
                        y = {
                            http: !0,
                            https: !0,
                            ftp: !0,
                            gopher: !0,
                            file: !0,
                            "http:": !0,
                            "https:": !0,
                            "ftp:": !0,
                            "gopher:": !0,
                            "file:": !0
                        },
                        _ = r(9935);

                    function m(e, t, r) {
                        if (e && a.isObject(e) && e instanceof o) return e;
                        var n = new o;
                        return n.parse(e, t, r), n
                    }
                    o.prototype.parse = function(e, t, r) {
                        if (!a.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                        var o = e.indexOf("?"),
                            s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
                            u = e.split(s);
                        u[0] = u[0].replace(/\\/g, "/");
                        var m = e = u.join(s);
                        if (m = m.trim(), !r && 1 === e.split("#").length) {
                            var b = c.exec(m);
                            if (b) return this.path = m, this.href = m, this.pathname = b[1], b[2] ? (this.search = b[2], this.query = t ? _.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                        }
                        var w = i.exec(m);
                        if (w) {
                            var k = (w = w[0]).toLowerCase();
                            this.protocol = k, m = m.substr(w.length)
                        }
                        if (r || w || m.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                            var S = "//" === m.substr(0, 2);
                            !S || w && g[w] || (m = m.substr(2), this.slashes = !0)
                        }
                        if (!g[w] && (S || w && !y[w])) {
                            for (var I, x, T = -1, A = 0; A < f.length; A++) {
                                -1 !== (C = m.indexOf(f[A])) && (-1 === T || C < T) && (T = C)
                            } - 1 !== (x = -1 === T ? m.lastIndexOf("@") : m.lastIndexOf("@", T)) && (I = m.slice(0, x), m = m.slice(x + 1), this.auth = decodeURIComponent(I)), T = -1;
                            for (A = 0; A < p.length; A++) {
                                var C; - 1 !== (C = m.indexOf(p[A])) && (-1 === T || C < T) && (T = C)
                            } - 1 === T && (T = m.length), this.host = m.slice(0, T), m = m.slice(T), this.parseHost(), this.hostname = this.hostname || "";
                            var E = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                            if (!E)
                                for (var P = this.hostname.split(/\./), O = (A = 0, P.length); A < O; A++) {
                                    var R = P[A];
                                    if (R && !R.match(d)) {
                                        for (var M = "", D = 0, j = R.length; D < j; D++) R.charCodeAt(D) > 127 ? M += "x" : M += R[D];
                                        if (!M.match(d)) {
                                            var L = P.slice(0, A),
                                                N = P.slice(A + 1),
                                                F = R.match(h);
                                            F && (L.push(F[1]), N.unshift(F[2])), N.length && (m = "/" + N.join(".") + m), this.hostname = L.join(".");
                                            break
                                        }
                                    }
                                }
                            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), E || (this.hostname = n.toASCII(this.hostname));
                            var W = this.port ? ":" + this.port : "",
                                $ = this.hostname || "";
                            this.host = $ + W, this.href += this.host, E && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== m[0] && (m = "/" + m))
                        }
                        if (!v[k])
                            for (A = 0, O = l.length; A < O; A++) {
                                var B = l[A];
                                if (-1 !== m.indexOf(B)) {
                                    var U = encodeURIComponent(B);
                                    U === B && (U = escape(B)), m = m.split(B).join(U)
                                }
                            }
                        var q = m.indexOf("#"); - 1 !== q && (this.hash = m.substr(q), m = m.slice(0, q));
                        var H = m.indexOf("?");
                        if (-1 !== H ? (this.search = m.substr(H), this.query = m.substr(H + 1), t && (this.query = _.parse(this.query)), m = m.slice(0, H)) : t && (this.search = "", this.query = {}), m && (this.pathname = m), y[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                            W = this.pathname || "";
                            var G = this.search || "";
                            this.path = W + G
                        }
                        return this.href = this.format(), this
                    }, o.prototype.format = function() {
                        var e = this.auth || "";
                        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                        var t = this.protocol || "",
                            r = this.pathname || "",
                            n = this.hash || "",
                            o = !1,
                            i = "";
                        this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && a.isObject(this.query) && Object.keys(this.query).length && (i = _.stringify(this.query));
                        var s = this.search || i && "?" + i || "";
                        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), t + o + (r = r.replace(/[?#]/g, (function(e) {
                            return encodeURIComponent(e)
                        }))) + (s = s.replace("#", "%23")) + n
                    }, o.prototype.resolve = function(e) {
                        return this.resolveObject(m(e, !1, !0)).format()
                    }, o.prototype.resolveObject = function(e) {
                        if (a.isString(e)) {
                            var t = new o;
                            t.parse(e, !1, !0), e = t
                        }
                        for (var r = new o, n = Object.keys(this), i = 0; i < n.length; i++) {
                            var s = n[i];
                            r[s] = this[s]
                        }
                        if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
                        if (e.slashes && !e.protocol) {
                            for (var c = Object.keys(e), u = 0; u < c.length; u++) {
                                var l = c[u];
                                "protocol" !== l && (r[l] = e[l])
                            }
                            return y[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
                        }
                        if (e.protocol && e.protocol !== r.protocol) {
                            if (!y[e.protocol]) {
                                for (var p = Object.keys(e), f = 0; f < p.length; f++) {
                                    var d = p[f];
                                    r[d] = e[d]
                                }
                                return r.href = r.format(), r
                            }
                            if (r.protocol = e.protocol, e.host || g[e.protocol]) r.pathname = e.pathname;
                            else {
                                for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
                                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), r.pathname = h.join("/")
                            }
                            if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                                var v = r.pathname || "",
                                    _ = r.search || "";
                                r.path = v + _
                            }
                            return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                        }
                        var m = r.pathname && "/" === r.pathname.charAt(0),
                            b = e.host || e.pathname && "/" === e.pathname.charAt(0),
                            w = b || m || r.host && e.pathname,
                            k = w,
                            S = r.pathname && r.pathname.split("/") || [],
                            I = (h = e.pathname && e.pathname.split("/") || [], r.protocol && !y[r.protocol]);
                        if (I && (r.hostname = "", r.port = null, r.host && ("" === S[0] ? S[0] = r.host : S.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), w = w && ("" === h[0] || "" === S[0])), b) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, S = h;
                        else if (h.length) S || (S = []), S.pop(), S = S.concat(h), r.search = e.search, r.query = e.query;
                        else if (!a.isNullOrUndefined(e.search)) {
                            if (I) r.hostname = r.host = S.shift(), (E = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = E.shift(), r.host = r.hostname = E.shift());
                            return r.search = e.search, r.query = e.query, a.isNull(r.pathname) && a.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
                        }
                        if (!S.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                        for (var x = S.slice(-1)[0], T = (r.host || e.host || S.length > 1) && ("." === x || ".." === x) || "" === x, A = 0, C = S.length; C >= 0; C--) "." === (x = S[C]) ? S.splice(C, 1) : ".." === x ? (S.splice(C, 1), A++) : A && (S.splice(C, 1), A--);
                        if (!w && !k)
                            for (; A--; A) S.unshift("..");
                        !w || "" === S[0] || S[0] && "/" === S[0].charAt(0) || S.unshift(""), T && "/" !== S.join("/").substr(-1) && S.push("");
                        var E, P = "" === S[0] || S[0] && "/" === S[0].charAt(0);
                        I && (r.hostname = r.host = P ? "" : S.length ? S.shift() : "", (E = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = E.shift(), r.host = r.hostname = E.shift()));
                        return (w = w || r.host && S.length) && !P && S.unshift(""), S.length ? r.pathname = S.join("/") : (r.pathname = null, r.path = null), a.isNull(r.pathname) && a.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                    }, o.prototype.parseHost = function() {
                        var e = this.host,
                            t = s.exec(e);
                        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                    }
                },
                7417: e => {
                    "use strict";
                    e.exports = {
                        isString: function(e) {
                            return "string" == typeof e
                        },
                        isObject: function(e) {
                            return "object" == typeof e && null !== e
                        },
                        isNull: function(e) {
                            return null === e
                        },
                        isNullOrUndefined: function(e) {
                            return null == e
                        }
                    }
                },
                4500: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        b: () => o
                    });
                    var n = r(6342),
                        a = r(2073),
                        o = (e = {}) => {
                            if ("Expt" === e.experimentType && "[object Object]" === Object.prototype.toString.call(n.default.expt)) {
                                var t = n.default.expt[e.experimentId];
                                if (void 0 !== t) return void("function" == typeof e.success && e.success({
                                    testConfig: t
                                }))
                            }(0, a.IN)("getABTestConfig", e)
                        }
                },
                5125: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Z: () => s
                    });
                    var n = r(9370),
                        a = null,
                        o = void 0,
                        i = {
                            lastRoute: "",
                            lastOpenType: "",
                            scene: -1,
                            sceneNote: "",
                            query: {},
                            rawPath: "",
                            runningStatus: "active",
                            openUrlLock: !1,
                            openUrlExtBrowserLock: !1,
                            possessingBackgroundAudioPlayer: !1,
                            webviewEventCallback: null,
                            hanged: !1,
                            appStatus: 0,
                            navigationBarTitleMap: {},
                            currentNetworkType: "",
                            routeType: "",
                            openingInnerPage: !1,
                            get currentWebviewId() {
                                return o
                            },
                            set currentWebviewId(e) {
                                o = e, a && (a(null), a = null)
                            },
                            currentWebviewIdPromise: new Promise((e => {
                                a = e
                            })),
                            getWebviewIds: () => n.hr.getGlobalWebviewIds(),
                            get hasWebViewCompnent() {
                                return Boolean(i.webViewComponentInfo[o])
                            },
                            webViewComponentInfo: {}
                        };
                    const s = i
                },
                9105: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Em: () => s.Em,
                        M8: () => v,
                        Nf: () => h,
                        RP: () => p,
                        iZ: () => o.i,
                        p9: () => f,
                        pD: () => d
                    });
                    var n = r(6342),
                        a = r(9370),
                        o = r(1591),
                        i = (r(4287), r(7445)),
                        s = r(6142),
                        c = /^[-+a-zA-Z0-9]+:\/\//,
                        u = /(^|\/)__[-+a-zA-Z0-9]+__\//;

                    function l(e) {
                        var t = e.match(c);
                        if (!t) return e;
                        var r = t[0];
                        if ("plugin://" === r) {
                            var i = r.length,
                                s = e.indexOf("/", i);
                            if (s >= 0) {
                                var u = e.slice(i, s),
                                    l = n.default.plugins && n.default.plugins[u] ? n.default.plugins[u].provider : u;
                                e = e.slice(0, i) + l + e.slice(s)
                            }
                            var p = e.indexOf("?");
                            p < 0 && (p = e.length);
                            var f = e.slice(0, p),
                                d = a.Ve.Component._list[f];
                            if (!d) throw new o.l(`Page "${f}" is not found`);
                            e = d.is + e.slice(p)
                        } else if ("plugin-private://" === r) {
                            var h = e.indexOf("?");
                            h < 0 && (h = e.length);
                            var v = e.slice(0, h);
                            e = "/" + a.hr.convertComponentAliasToRoute(v) + e.slice(h)
                        } else {
                            if ("wx://" !== r && "wxpage://" !== r) throw new o.l(`Unknown URL protocol "${r}"`);
                            e = "/__wx__/" + e.slice(r.length)
                        }
                        return e
                    }

                    function p(e, t = "") {
                        return t = t.replace(/^\//, ""), (0, i.isGame)() ? `__plugin__/${e}/${t}` : l(`plugin-private://${e}/${t}`)
                    }

                    function f(e) {
                        var t = e.match(c),
                            r = e.match(u),
                            a = "";
                        if (t) {
                            var o = t[0];
                            if ("plugin://" === o) {
                                var i = o.length,
                                    s = e.indexOf("/", i);
                                if (s >= 0) {
                                    var l = e.slice(i, s);
                                    a = n.default.plugins && n.default.plugins[l] ? n.default.plugins[l].provider : l
                                }
                            } else if ("plugin-private://" === o) {
                                var p = o.length,
                                    f = e.indexOf("/", p);
                                if (f >= 0) a = e.slice(p, f)
                            } else "wx://" === o && (a = "//")
                        }
                        if (r) {
                            var d = r[0];
                            if (d.endsWith("__plugin__/")) {
                                var h = e.indexOf(d) + d.length,
                                    v = e.indexOf("/", h);
                                if (v >= 0) a = e.slice(h, v)
                            } else d.endsWith("__wx__/") && (a = "//")
                        }
                        return a
                    }

                    function d(e) {
                        var t = e.match(c);
                        return t ? t[0] : null
                    }

                    function h(e) {
                        return Object.keys(e).reduce(((t, r) => ("string" == typeof e[r] ? t[r] = e[r] : "number" == typeof e[r] ? t[r] = e[r] + "" : t[r] = Object.prototype.toString.apply(e[r]), t)), {})
                    }

                    function v() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                            var t = 16 * Math.random() | 0;
                            return ("x" === e ? t : 3 & t | 8).toString(16)
                        }))
                    }
                },
                4571: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        kd: () => c,
                        su: () => u
                    });
                    var n = r(9766),
                        a = r(2073),
                        o = r(8246),
                        i = "default",
                        s = (0, n.s)("apiCategoryChange");
                    s.onMethod, s.offMethod;

                    function c() {
                        return i
                    }

                    function u(e = "default") {
                        -1 !== ["default", "nativeFunctionalized", "browseOnly", "embedded"].indexOf(e) && (i = e)
                    }(0, o.n)("sheetModeWindowStateChangedEvent", ((e = {}) => {
                        (0, a.nY)("sheetModeWindowStateChangedEvent", e), "fullPage" === e.state && "default" !== i && (i = "default", s.emit({
                            apiCategory: i
                        }))
                    })), (0, a.Ld)("getApiCategory", (({
                        callbackId: e
                    }, t) => {
                        (0, a.nY)("apiCategoryGot", {
                            res: c(),
                            callbackId: e
                        }, [t])
                    }))
                },
                7849: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        _: () => o,
                        e: () => a
                    });
                    var n = {};

                    function a(e) {
                        n = e
                    }

                    function o() {
                        return n
                    }
                },
                9370: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Ve: () => a,
                        hr: () => n
                    });
                    var n, a, o = new(r(9661).Z);
                    o.on.bind(o, "__virtualDOM__"), o.on.bind(o, "__subContextEngineSub__"), o.on.bind(o, "__wxModule__"), o.on.bind(o, "__cloudSDK__")
                },
                6466: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        buildWorkerUncaughtError: () => l,
                        exptEnableWorkerMultiContext: () => u,
                        getSupportMultiContext: () => p,
                        setSupportMultiContext: () => f
                    });
                    var n, a, s = r(7445),
                        c = r(6342),
                        u = () => {
                            if ("windows" === c.default.platform || "mac" === c.default.platform) return !0;
                            var e = !1,
                                t = "ios" === c.default.platform && "clicfg_appbrand_ios_allow_multi_context_worker";
                            return !t || (c.default.expt[t] && (e = !0), e)
                        };
                    s.WK_RENDERER_H5 || (n = (o.supportWorkerMultiContext || o.supoortWorkerMultiContext) && u()), i.onLoad((() => {
                        (a = function(e, t, r, n, a) {
                            this.message = e, this.line = t, this.column = r, this.stack = n, this.error = a
                        }).prototype = Error
                    }));
                    var l = e => new a(e.message, e.line, e.column, e.stack, e),
                        p = () => n,
                        f = e => {
                            n = e
                        }
                },
                1399: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Z: () => s,
                        a: () => o
                    });
                    var n = null,
                        a = new Proxy({}, {
                            get(e, t, r) {
                                if (!n) throw new Error("NativeGlobal not ready");
                                return Reflect.get(n, t, r)
                            },
                            set(e, t, r, a) {
                                if (!n) throw new Error("NativeGlobal not ready");
                                return Reflect.set(n, t, r, a)
                            }
                        });

                    function o(e) {
                        i.onLoad((() => {
                            e(a)
                        }))
                    }
                    i.onLoad((() => {
                        n = "undefined" != typeof NativeGlobal ? NativeGlobal : {}
                    }));
                    const s = a
                },
                2657: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        En: () => h,
                        IF: () => y,
                        Y2: () => g
                    });
                    var n, a = r(6142),
                        o = r(1591),
                        s = r(7445),
                        c = 0,
                        u = 1,
                        l = 2,
                        p = new WeakMap,
                        f = new Map,
                        d = ArrayBuffer;

                    function h(e) {
                        i.onLoad((() => {
                            s.WK_RENDERER_H5 || n.new || e(n)
                        }))
                    }
                    i.onLoad((() => {
                        n = "undefined" == typeof WeixinSharedBuffer ? {} : WeixinSharedBuffer, "undefined" == typeof WeixinSharedBuffer && ("undefined" != typeof __global ? d = __global.SharedArrayBuffer : r.g.SharedArrayBuffer && (d = r.g.SharedArrayBuffer))
                    }));
                    class v {
                        constructor(e, t) {
                            if (!(0, a.hj)(e) || e < 0) throw new o.i(`Invalid array buffer length ${e}`);
                            if ((0, a.hj)(t)) {
                                var r;
                                try {
                                    r = n.get(t)
                                } catch (e) {
                                    throw new Error(`WeixinSharedBuffer.get${t} fail: ${e.message}`)
                                }
                                Object.defineProperty(this, "buffer", {
                                    value: r,
                                    writable: !1,
                                    enumerable: !0
                                }), Object.defineProperty(this, "_sabId", {
                                    value: t,
                                    enumerable: !0,
                                    writable: !1
                                })
                            } else {
                                Object.defineProperty(this, "buffer", {
                                    value: new d(e),
                                    writable: !1,
                                    enumerable: !0
                                });
                                var i = n.new(this.buffer);
                                Object.defineProperty(this, "_sabId", {
                                    value: i,
                                    enumerable: !0,
                                    writable: !1
                                })
                            }
                            var s = {
                                writeStatus: c,
                                readStatus: c,
                                writeLockCallbacks: [],
                                readLockCallbacks: [],
                                writeLockId: void 0,
                                readLockId: void 0,
                                destroyed: !1
                            };
                            p.set(this, s), f.set(this._sabId, this)
                        }
                        destroy() {
                            var e = p.get(this);
                            e.writeLockCallbacks = [], e.readLockCallbacks = [], f.delete(this._sabId), p.get(this).destroyed = !0, this.unlock(), n.destroy(this._sabId)
                        }
                        lock(e, t = !1) {
                            var r = p.get(this),
                                {
                                    destroyed: i,
                                    writeStatus: s,
                                    readStatus: c,
                                    writeLockCallbacks: f,
                                    readLockCallbacks: d
                                } = r;
                            if (i) throw new o.i("SharedArrayBuffer has been destroyed");
                            if (!(0, a.mf)(e)) throw new o.i("callback must be a function");
                            s !== l ? (f.push(e), s === u || (r.writeStatus = u, r.writeLockId = n.Lock(this._sabId, (() => {
                                f.forEach((e => e())), d.forEach((e => e())), r.writeStatus = l, r.writeLockCallbacks = [], r.readLockCallbacks = []
                            })))) : e()
                        }
                        unlock() {
                            var e = p.get(this),
                                {
                                    writeLockId: t,
                                    readLockId: r,
                                    writeStatus: a,
                                    readStatus: o,
                                    destroyed: i
                                } = e;
                            i ? console.warn("unlock: SharedArrayBuffer has been destroyed") : (a !== u && a !== l || (n.Unlock(this._sabId, t), e.writeStatus = c, e.writeLockId = void 0, e.writeLockCallbacks = []), o !== u && o !== l || (n.Unlock(this._sabId, r), e.readStatus = c, e.readLockId = void 0, e.readLockCallbacks = []))
                        }
                    }
                    var g = e => s.WK_RENDERER_H5 ? {
                            buffer: new ArrayBuffer(e)
                        } : new v(e),
                        y = e => {
                            return s.WK_RENDERER_H5 ? e : (0, a.Kn)(e) ? (0, a.hj)(e._sabId) ? (t = e._sabId, f.has(t) ? f.get(t) : new v(0, t)) : Object.keys(e).reduce(((t, r) => {
                                var n = e[r];
                                return t[r] = y(n), t
                            }), {}) : (0, a.kJ)(e) ? e.map(y) : e;
                            var t
                        }
                },
                6342: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        default: () => i
                    });
                    var n = () => {
                            a !== o && void 0 !== a && Object.assign(a, o)
                        },
                        a = (() => (o.onReady(n), o))();
                    const i = a
                },
                7960: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        J: () => K
                    });
                    var n = r(2073),
                        a = r(6142),
                        o = r(6342),
                        i = r(9822),
                        s = r(8246),
                        c = r(9766),
                        u = (0, c.s)("AppEnterBackground"),
                        l = u.internalOnMethod;
                    (0, s.n)("onAppEnterBackground", ((e = {}) => {
                        e && "launchMiniProgram" === e.mode && e.targetPagePath && 0 === e.targetPagePath.indexOf("wx6bd2fb149a93a9c5:") || (u.emit(e), (0, n.nY)("onAppEnterBackground", e))
                    }));
                    var p = r(9661),
                        f = r(9105),
                        d = {};
                    const h = {
                        appLaunchInfo: null,
                        appLaunchShareInfo: null,
                        sceneHistory: [],
                        appId: "",
                        ShareInfoStorage: {
                            lastShareTicket: null,
                            get: e => d[e],
                            set(e, t) {
                                var r = (0, f.M8)();
                                return d[r] = {
                                    shareKey: e,
                                    shareName: t
                                }, r
                            }
                        },
                        emitter: new p.Z
                    };
                    var v = r(4287),
                        g = r(5125),
                        y = (r(9370), r(7445)),
                        _ = r(773),
                        m = e => {
                            var t, r, n = e.api.find((e => "request" === e.name));
                            if (n) {
                                var a = null === (t = n.req) || void 0 === t ? void 0 : t.interpreterRules,
                                    i = null === (r = n.resp) || void 0 === r ? void 0 : r.interpreterRules;
                                (0, _.k)().runTask("createWeAppRequestInterpreter", {
                                    rules: {
                                        req: a,
                                        res: i,
                                        exclusive: !0
                                    },
                                    appid: o.default.accountInfo.appId
                                }).catch((e => {
                                    w.error("createWeAppRequestInterpreter error:", e)
                                }))
                            }
                        },
                        b = [],
                        k = r(4571),
                        S = r(3888),
                        I = r.n(S),
                        x = r(1868),
                        T = null;
                    (0, s.n)("onMessageFromNavigateMiniProgram", (({
                        extraData: e,
                        appid: t
                    }) => {
                        T = {
                            extraData: e,
                            appid: t
                        }
                    }));
                    var A, C = () => T,
                        E = () => {
                            T = null
                        };
                    (0, x.NX)("postMessageToReferrerMiniProgram", function() {
                        var e = I()((function*({
                            extraData: e
                        }) {
                            return (0, n.bb)("postMessageToReferrerMiniProgram", {
                                extraData: e
                            })
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }());

                    function P(e, t) {
                        e.apiCategory = (e => {
                            if ([1200, 1201, 1228].includes((t = b.filter((e => ![1038].includes(e))))[t.length - 1])) return "default";
                            var t;
                            switch (e.mode) {
                                case "default":
                                case "halfPage":
                                    return "nativeFunctionalized" === e.appearance ? "nativeFunctionalized" : "default";
                                case "singlePage":
                                    return "browseOnly";
                                case "embedded":
                                    return "embedded";
                                default:
                                    return "default"
                            }
                        })(e), (0, k.su)(e.apiCategory), void 0 === e.isTransparentBackgroundSupport && (e.isTransparentBackgroundSupport = o.default.isTransparentBackgroundSupport)
                    }
                    r(1105);
                    var O = r(7849);
                    (0, n.Ld)("getEnterAppInfo", (({
                        callbackId: e
                    }, t) => {
                        (0, n.nY)("appEnterInfoGot", {
                            res: (0, O._)(),
                            callbackId: e
                        }, [t])
                    }));
                    var R, M, D, j = r(8602);
                    o.default.onReady((() => {
                        g.Z.scene = R = o.default.appLaunchInfo.scene, g.Z.sceneNote = o.default.appLaunchInfo.scene_note
                    }));
                    var L = (0, c.s)("AppEnterForeground"),
                        N = L.internalOnMethod;

                    function F(e) {
                        if (!(0, y.isGame)()) {
                            e = function(e = {}, t) {
                                if (e.scene = e.scene ? parseInt(e.scene, 10) : e.scene, e.query = (t ? e.query : g.Z.query) || {}, e.path = t ? (0, v.Z8)(e.path) : (0, v.Z8)(g.Z.lastRoute), e.referrerInfo = e.referrerInfo || {}, e.isLaunch = t, t || (1044 === e.scene ? g.Z.lastShareInfo = {
                                        shareInfo: e.shareInfo,
                                        path: e.path,
                                        query: e.query
                                    } : g.Z.lastShareInfo = void 0), h.sceneHistory.push(e.scene), !e.referrerInfo.appId || 1036 !== e.scene && 1069 !== e.scene || (h.appId = e.referrerInfo.appId), "object" == typeof e.shareInfo && null !== e.shareInfo) {
                                    var {
                                        shareInfo: r
                                    } = e;
                                    r.shareKey && r.shareName && ((0, n.IN)("showUpdatableMessageSubscribeButton", {
                                        shareKey: r.shareKey
                                    }), e.shareTicket = h.ShareInfoStorage.set(r.shareKey, r.shareName), h.ShareInfoStorage.lastShareTicket = e.shareTicket)
                                }
                                return 1044 !== e.scene || e.chatroomUsername || (e.scene = 1007), e
                            }(e, !1), (0, O.e)(e);
                            var t = function(e = {}, t) {
                                var r, n, a;
                                0 === (e = Object.assign({}, e)).scene ? e.scene = A : A = e.scene;
                                var i = e.scene;
                                1003 === i ? i = 1089 : 1131 === i || 1158 !== i && 1159 !== i && 1160 !== i || !K("getGroupToolbarInfo") && (i = 1008), [1106, 1005, 1006, 1027, 1042].indexOf(i) > -1 && (e.referrerInfo.appId = null), 1092 === i && "wxf8df44389465ee03" === (null === (r = e.referrerInfo) || void 0 === r || null === (n = r.privateExtraData) || void 0 === n ? void 0 : n.targetAppId) && (i = 1037);
                                var s = C();
                                E();
                                var c = e.referrerInfo.appId ? {
                                    appId: e.referrerInfo.appId,
                                    extraData: null !== (a = e.referrerInfo.extraData) && void 0 !== a ? a : s && s.appid === e.referrerInfo.appId ? s.extraData : void 0
                                } : {};
                                1092 === i && c.extraData && c.extraData.csSessionId && c.extraData._reportInfo && ("undefined" == typeof __userActionTracer__ || __userActionTracer__.shouldStartReport() && !__userActionTracer__.shouldUpdateReportInfo(c.extraData.csSessionId) || (w.info("ca report startegy:", c.extraData._reportInfo), __userActionTracer__.convertReportInfo2Strategys(c.extraData._reportInfo), __userActionTracer__.startActionChainReport(), __userActionTracer__.setSessionId(c.extraData.csSessionId), __userActionTracer__.setEventJoinInterval(c.extraData._reportInfo.eventJoinInterval), __userActionTracer__.setAsyncCallbackJoinEventInterval(c.extraData._reportInfo.asyncCallbackJoinEventInterval), __userActionTracer__.setReportSetting({
                                    reportCache: c.extraData._reportInfo.reportCache,
                                    reportInterval: c.extraData._reportInfo.reportInterval
                                }), __userActionTracer__.protectActionReporter(), m(c.extraData._reportInfo))), e.referrerInfo.privateExtraData && e.referrerInfo.privateExtraData.__pluginAppId && (e.referrerInfo.appId && (c.pluginAppId = e.referrerInfo.privateExtraData.__pluginAppId), delete e.referrerInfo.privateExtraData.__pluginAppId, 0 === Object.keys(e.referrerInfo.privateExtraData).length && delete e.referrerInfo.privateExtraData);
                                var u = {
                                    path: e.path,
                                    query: e.query,
                                    scene: i,
                                    shareTicket: e.shareTicket,
                                    referrerInfo: c
                                };
                                e.chatroomUsername && 1156 === i && (u.chatroomUsername = e.chatroomUsername), e.chatType && (u.chatType = e.chatType);
                                var l, p, f = e.nativeExtraData || {};
                                return e.hostExtraData && (u.hostExtraData = e.hostExtraData), f.location && (u.locationInfo = f.location), ((0, y.isFakeNativeApp)() || (0, y.isWXStoreApp)()) && (e.nativeExtraData && (u.nativeExtraData = e.nativeExtraData), null !== (l = e) && void 0 !== l && null !== (p = l.referrerInfo) && void 0 !== p && p.privateExtraData && (u.privateExtraData = e.referrerInfo.privateExtraData), u.sessionId = e.sessionid || e.sessionId, u.isLaunch = e.isLaunch, e.isLaunch && (u.prerender = !!o.default.prerender), u.clickTimestamp = e.clickTimestamp, u.preloadType = t), (0, y.isFakeNativeApp)() && (e.isLaunch ? u.userConfig = o.default.userConfig : u.userConfig = e.userConfig), e.mode && (u.mode = e.mode), e.apiCategory && (u.apiCategory = e.apiCategory), 1173 === i && (f.mimeType ? u.forwardMaterials = [{
                                    type: f.mimeType,
                                    path: f.materialPath,
                                    name: f.materialName,
                                    size: f.materialSize
                                }] : Array.isArray(f.materials) && (u.forwardMaterials = f.materials)), 1226 === i && f.iot && (u.iot = f.iot), e.isTransparentBackgroundSupport && (u.isTransparentBackgroundSupport = e.isTransparentBackgroundSupport), u.referrerInfo && "wxb6d22f922f37b35a" === u.referrerInfo.appId && (u.referrerInfo = {}), u
                            }(e);
                            e.__public = function(e, t = "") {
                                if ((0, f.p9)(e.path || "") === t) return e;
                                var r = {
                                    path: e.path,
                                    query: {},
                                    scene: e.scene,
                                    shareTicket: e.shareTicket,
                                    referrerInfo: {}
                                };
                                return e.mode && (r.mode = e.mode), e.apiCategory && (r.apiCategory = e.apiCategory), (0, y.isWXStoreApp)() && (e.nativeExtraData && (r.nativeExtraData = e.nativeExtraData), r.sessionId = e.sessionId, r.isLaunch = e.isLaunch, e.isLaunch && (r.prerender = e.prerender), r.clickTimestamp = e.clickTimestamp, r.preloadType = e.preloadType), e.isTransparentBackgroundSupport && (r.isTransparentBackgroundSupport = e.isTransparentBackgroundSupport), r
                            }(t, ""), w.info("[EnterOptions] set enterOptions by onAppEnterForeground"), t, j.Z.set("api_call_from_hot_boot_time", Date.now(), !0), L.emit(e), g.Z.scene = e.scene, g.Z.sceneNote = e.scene_note
                        }
                    }
                    var W = e => e && e.referrerInfo && "wx6bd2fb149a93a9c5" === e.referrerInfo.appId && e.referrerInfo.extraData && "boolean" == typeof e.referrerInfo.extraData.isSuccess;
                    (0, s.n)("onAppEnterForeground", ((e = {}) => {
                        if (y.IS_ANDROID)
                            if (W(e)) {
                                var t = JSON.stringify(e.referrerInfo.extraData);
                                if (M !== t) return void(M = t);
                                M = t, e.scene = R, delete e.referrerInfo
                            } else R = e.scene;
                        else if (y.IS_IOS)
                            if (1038 === e.scene) {
                                if (W(e)) return void(D = !0);
                                var r;
                                null != e && null !== (r = e.referrerInfo) && void 0 !== r && r.appId ? (D = !1, R = e.scene) : D ? e.scene = R : R = e.scene
                            } else R = e.scene;
                        var a = e.debugLaunchInfo || {};
                        Object.assign(e, a), delete e.debugLaunchInfo;
                        var i, s = 1 === e.reLaunch || !0 === e.reLaunch;
                        w.info(`[onAppEnterForeground] isReLaunch=${s}`), i = e.scene, b.push(i), P(e);
                        var c = (0, f.pD)(e.path);
                        if ("wxpage://" === c && (e.path = "__wx__/" + e.path.slice(c.length)), s) {
                            var u = t => {
                                w.info(`[onAppEnterForeground] get onAppRoute [${t}], prerender=${o.default.prerender}`), "appLaunch" !== t.openType || !0 !== o.default.prerender ? (w.info("[onAppEnterForeground] emit enterForeground"), F(e)) : h.emitter.once("onAppRoute", u)
                            };
                            h.emitter.once("onAppRoute", u)
                        } else F(e);
                        (0, n.nY)("onAppEnterForeground", e)
                    }));
                    var $, B = {},
                        U = {},
                        q = {},
                        H = 0;
                    o.default.onReady((() => {
                        l((() => {
                            H = 1
                        })), N((() => {
                            H = 0
                        }))
                    }));
                    var G = Object.keys(i.Z).map((e => i.Z[e])),
                        V = (e, t) => {
                            for (var r = 0; r < G.length; r++) {
                                var n = G[r],
                                    a = 1 === e[n] || 4 === e[n];
                                t[n] = a
                            }
                        };
                    (0, s.n)("onPermissionUpdate", (e => {
                        V(e.bg, B), V(e.fg, U)
                    })), o.default.onReady((() => {
                        (0, n.IN)("getPermissionBytes", {
                            indexes: G,
                            success(e) {
                                e.permissionBytes && e.permissionBytesForRunningStatus || e.permissionBytesForRunningStatus ? ((e => {
                                    for (var t = 0; t < e.length; t++) {
                                        var r = G[t];
                                        B[r] = 1 === e[t].bg || 4 === e[t].bg, U[r] = 1 === e[t].fg || 4 === e[t].fg
                                    }
                                })(e.permissionBytesForRunningStatus), $ = 1) : e.permissionBytes && ($ = 0, ((e, t) => {
                                    for (var r = 0; r < e.length; r++) t[G[r]] = 1 === e[r] || 4 === e[r]
                                })(e.permissionBytes, q))
                            },
                            fail(e) {
                                w.error("getPermissionBytes failed", e)
                            }
                        })
                    }));
                    var K = e => {
                        var t, r = i.Z[e];
                        if ("number" != typeof r) return !1;
                        if (t = 0 === $ ? q : 0 === H ? U : B, !(0, a.o8)(t[r])) return t[r];
                        var o = !1;
                        return (0, n.IN)("getPermissionBytes", {
                            indexes: [r],
                            success(e) {
                                e.permissionBytes && (0 === $ ? (o = 1 === e.permissionBytes[0] || 4 === e.permissionBytes[0], q[r] = o) : (B[r] = 1 === e.permissionBytes[0].bg || 4 === e.permissionBytes[0].bg, U[r] = 1 === e.permissionBytes[0].fg || 4 === e.permissionBytes[0].fg))
                            }
                        }), o
                    }
                },
                7445: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        ENV: () => d,
                        IS_ANDROID: () => i,
                        IS_DEVTOOLS: () => o,
                        IS_HOST_SDK: () => h,
                        IS_HOST_WECHAT: () => g,
                        IS_HOST_WMPF: () => v,
                        IS_IOS: () => s,
                        IS_MAC: () => u,
                        IS_MINA: () => l,
                        IS_PC: () => p,
                        IS_USE_NATIVE_MAP: () => y,
                        IS_WINDOWS: () => c,
                        PLATFORM: () => a,
                        WK_RENDERER_H5: () => _,
                        debugEnabled: () => f,
                        isAppService: () => x,
                        isAppServiceOrWebView: () => I,
                        isFakeNativeApp: () => E,
                        isGame: () => S,
                        isIn3rdApp: () => w,
                        isNormalApp: () => T,
                        isPhysicalStoresApp: () => P,
                        isReleaseBuild: () => k,
                        isRemoteDebugEnabled: () => b,
                        isThirdPartyApp: () => C,
                        isWXStoreApp: () => O,
                        isWkGameNativeRender: () => m
                    });
                    var n = r(6342),
                        a = (() => n.default.platform)(),
                        o = (() => "devtools" === a)(),
                        i = (() => "android" === a)(),
                        s = (() => "ios" === a)(),
                        c = (() => "windows" === a)(),
                        u = (() => "mac" === a)(),
                        l = (() => "mina" === a)(),
                        p = (() => c || u)();

                    function f() {
                        if (n.default && "debug" in n.default && void 0 !== n.default.debug) return !!n.default.debug
                    }
                    var d = (e => null === (e = n.default.host) || void 0 === e ? void 0 : e.env)(),
                        h = (() => "SDK" === d)(),
                        v = (() => "WMPF" === d)(),
                        g = (() => "WeChat" === d)(),
                        y = (e => (null === (e = n.default.host) || void 0 === e ? void 0 : e.forceUseNativeMap) || !1)(),
                        _ = function() {
                            return "undefined" != typeof self ? self && self.__wkrenderer_h5 : "object" == typeof window && window && window.__wkrenderer_h5
                        }();

                    function m() {
                        return "object" == typeof window && window && window.__wkrenderer_h5 && (2 & window.__featBit) > 0
                    }

                    function b() {
                        return r.g.__isAppServiceRemoteDebugMode__ || "undefined" != typeof __initHelper && 1 === __initHelper
                    }

                    function w() {
                        var e = n.default.host;
                        return e && "WeChat" !== e.env && "WMPF" !== e.env
                    }

                    function k() {
                        var e = !0;
                        return e
                    }

                    function S() {
                        return !1
                    }

                    function I() {
                        return !1
                    }
                    var x = (() => !1)();

                    function T() {
                        return 0 === n.default.appType
                    }
                    var A = [0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13];

                    function C() {
                        return A.includes(n.default.appType)
                    }

                    function E() {
                        return 7 === n.default.appType
                    }

                    function P() {
                        return 2 === n.default.appType
                    }

                    function O() {
                        return 10 === n.default.appType
                    }
                },
                1591: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        i: () => a,
                        l: () => n
                    });
                    class n extends Error {
                        constructor(e) {
                            super(`APP-SERVICE-SDK:${e}`), this.type = "AppServiceSdkKnownError"
                        }
                    }
                    class a extends Error {
                        constructor(...e) {
                            super(...e), this.type = "ThirdScriptError"
                        }
                    }
                },
                9766: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        s: () => s
                    });
                    var n = r(9661),
                        a = (() => new n.Z({
                            maxListeners: 20,
                            newListener: !1
                        }))(),
                        o = (() => new n.Z({
                            maxListeners: 30,
                            newListener: !1
                        }))();
                    var i = {};

                    function s(e) {
                        if (e = e[0].toUpperCase() + e.slice(1), !i[e]) {
                            var t = new WeakMap;
                            i[e] = {
                                getGlobalListeners: () => a.listeners(e),
                                getInternalListeners: () => o.listeners(e),
                                emit: (...t) => {
                                    o.emit(e, ...t), a.emit(e, ...t)
                                },
                                emitGlobal: (...t) => {
                                    a.emit(e, ...t)
                                },
                                emitInternal: (...t) => {
                                    o.emit(e, ...t)
                                },
                                internalOnMethod: (t, r = {}) => {
                                    "function" == typeof t && (r.prepend ? r.once ? o.prependOnceListener(e, t) : o.prependListener(e, t) : r.once ? o.once(e, t) : o.on(e, t))
                                },
                                internalOffMethod: t => {
                                    "function" == typeof t && o.off(e, t)
                                },
                                onMethod: r => {
                                    var n = function(e, t) {
                                        return "function" != typeof t ? (console.error(`on${e} should accept a function instead of ${typeof t}`), null) : h.surroundThirdByTryCatch(t, `at api on${e} callback function`)
                                    }(e, r);
                                    if (n) {
                                        if (t.has(r)) {
                                            var o = t.get(r);
                                            o.push(n), t.set(r, o)
                                        } else t.set(r, [n]);
                                        a.on(e, n)
                                    }
                                },
                                offMethod: r => {
                                    if (function(e, t) {
                                            return !t || "function" == typeof t || (console.error(`off${e} should accept a function instead of ${typeof t}`), !1)
                                        }(e, r))
                                        if (r) {
                                            if (t.has(r)) {
                                                t.get(r).forEach((t => a.off(e, t))), t.delete(r)
                                            }
                                        } else t = new WeakMap, a.removeAllListeners(e)
                                }
                            }
                        }
                        return i[e]
                    }
                },
                9661: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Z: () => l
                    });
                    var a = Array.isArray ? Array.isArray : function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        o = 20;

                    function i() {
                        this._events = {}, this._conf && s.call(this, this._conf)
                    }

                    function s(e) {
                        e ? (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), this._maxListeners = void 0 !== e.maxListeners ? e.maxListeners : o, e.newListener && (this._newListener = e.newListener), e.removeListener && (this._removeListener = e.removeListener)) : this._maxListeners = o
                    }

                    function c(e, t) {
                        console.warn(`[Event] ${e} listeners of event ${t} have been added, possibly causing memory leak.`)
                    }

                    function u(e) {
                        this._events = {}, this._newListener = !1, this._removeListener = !1, s.call(this, e)
                    }
                    u.prototype.delimiter = ".", u.prototype.setMaxListeners = function(e) {
                        void 0 !== e && (this._maxListeners = e, this._conf || (this._conf = {}), this._conf.maxListeners = e)
                    }, u.prototype.event = "", u.prototype.once = function(e, t) {
                        return this._once(e, t, !1)
                    }, u.prototype.prependOnceListener = function(e, t) {
                        return this._once(e, t, !0)
                    }, u.prototype._once = function(e, t, r) {
                        return this._many(e, 1, t, r), this
                    }, u.prototype.many = function(e, t, r) {
                        return this._many(e, t, r, !1)
                    }, u.prototype.prependMany = function(e, t, r) {
                        return this._many(e, t, r, !0)
                    }, u.prototype._many = function(e, t, r, n) {
                        var a = this;
                        if ("function" != typeof r) throw new Error("many only accepts instances of Function");

                        function o() {
                            return 0 == --t && a.off(e, o), r.apply(this, arguments)
                        }
                        return o._origin = r, this._on(e, o, n), a
                    }, u.prototype.emit = function() {
                        this._events || i.call(this);
                        var e = arguments[0];
                        if ("newListener" === e && !this._newListener && !this._events.newListener) return !1;
                        var t, r, n, a, o, s = arguments.length;
                        if (this._all && this._all.length) {
                            if (o = this._all.slice(), s > 3)
                                for (t = new Array(s), a = 0; a < s; a++) t[a] = arguments[a];
                            for (n = 0, r = o.length; n < r; n++) switch (this.event = e, s) {
                                case 1:
                                    o[n].call(this, e);
                                    break;
                                case 2:
                                    o[n].call(this, e, arguments[1]);
                                    break;
                                case 3:
                                    o[n].call(this, e, arguments[1], arguments[2]);
                                    break;
                                default:
                                    o[n].apply(this, t)
                            }
                        }
                        if ("function" == typeof(o = this._events[e])) {
                            switch (this.event = e, s) {
                                case 1:
                                    o.call(this);
                                    break;
                                case 2:
                                    o.call(this, arguments[1]);
                                    break;
                                case 3:
                                    o.call(this, arguments[1], arguments[2]);
                                    break;
                                default:
                                    for (t = new Array(s - 1), a = 1; a < s; a++) t[a - 1] = arguments[a];
                                    o.apply(this, t)
                            }
                            return !0
                        }
                        if (o && (o = o.slice()), o && o.length) {
                            if (s > 3)
                                for (t = new Array(s - 1), a = 1; a < s; a++) t[a - 1] = arguments[a];
                            for (n = 0, r = o.length; n < r; n++) switch (this.event = e, s) {
                                case 1:
                                    o[n].call(this);
                                    break;
                                case 2:
                                    o[n].call(this, arguments[1]);
                                    break;
                                case 3:
                                    o[n].call(this, arguments[1], arguments[2]);
                                    break;
                                default:
                                    o[n].apply(this, t)
                            }
                            return !0
                        }
                        if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                        return !!this._all
                    }, u.prototype.emitAsync = function() {
                        this._events || i.call(this);
                        var e = arguments[0];
                        if ("newListener" === e && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
                        var t, r, n, a, o, s = [],
                            c = arguments.length;
                        if (this._all) {
                            if (c > 3)
                                for (t = new Array(c), a = 1; a < c; a++) t[a] = arguments[a];
                            for (n = 0, r = this._all.length; n < r; n++) switch (this.event = e, c) {
                                case 1:
                                    s.push(this._all[n].call(this, e));
                                    break;
                                case 2:
                                    s.push(this._all[n].call(this, e, arguments[1]));
                                    break;
                                case 3:
                                    s.push(this._all[n].call(this, e, arguments[1], arguments[2]));
                                    break;
                                default:
                                    s.push(this._all[n].apply(this, t))
                            }
                        }
                        if ("function" == typeof(o = this._events[e])) switch (this.event = e, c) {
                            case 1:
                                s.push(o.call(this));
                                break;
                            case 2:
                                s.push(o.call(this, arguments[1]));
                                break;
                            case 3:
                                s.push(o.call(this, arguments[1], arguments[2]));
                                break;
                            default:
                                for (t = new Array(c - 1), a = 1; a < c; a++) t[a - 1] = arguments[a];
                                s.push(o.apply(this, t))
                        } else if (o && o.length) {
                            if (o = o.slice(), c > 3)
                                for (t = new Array(c - 1), a = 1; a < c; a++) t[a - 1] = arguments[a];
                            for (n = 0, r = o.length; n < r; n++) switch (this.event = e, c) {
                                case 1:
                                    s.push(o[n].call(this));
                                    break;
                                case 2:
                                    s.push(o[n].call(this, arguments[1]));
                                    break;
                                case 3:
                                    s.push(o[n].call(this, arguments[1], arguments[2]));
                                    break;
                                default:
                                    s.push(o[n].apply(this, t))
                            }
                        } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
                        return Promise.all(s)
                    }, u.prototype.on = function(e, t) {
                        return this._on(e, t, !1)
                    }, u.prototype.prependListener = function(e, t) {
                        return this._on(e, t, !0)
                    }, u.prototype.onAny = function(e) {
                        return this._onAny(e, !1)
                    }, u.prototype.prependAny = function(e) {
                        return this._onAny(e, !0)
                    }, u.prototype.addListener = u.prototype.on, u.prototype._onAny = function(e, t) {
                        if ("function" != typeof e) throw new Error("onAny only accepts instances of Function");
                        return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), this
                    }, u.prototype._on = function(e, t, r) {
                        if ("function" == typeof e) return this._onAny(e, t), this;
                        if ("function" != typeof t) throw new Error("on only accepts instances of Function");
                        return this._events || i.call(this), this._newListener && this.emit("newListener", e, t), this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]), r ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, c.call(this, this._events[e].length, e))) : this._events[e] = t, this
                    }, u.prototype.off = function(e, t) {
                        if ("function" != typeof t) throw new Error("removeListener only takes instances of Function");
                        var r, o = [];
                        if (!this._events[e]) return this;
                        r = this._events[e], o.push({
                            _listeners: r
                        });
                        for (var i = 0; i < o.length; i++) {
                            if (r = o[i]._listeners, a(r)) {
                                for (var s = -1, c = 0, u = r.length; c < u; c++)
                                    if (r[c] === t || r[c].listener && r[c].listener === t || r[c]._origin && r[c]._origin === t) {
                                        s = c;
                                        break
                                    } if (s < 0) continue;
                                return this._events[e].splice(s, 1), 0 === r.length && delete this._events[e], this._removeListener && this.emit("removeListener", e, t), this
                            }(r === t || r.listener && r.listener === t || r._origin && r._origin === t) && (delete this._events[e], this._removeListener && this.emit("removeListener", e, t))
                        }
                        return function e(t) {
                            if (void 0 !== t) {
                                var r = Object.keys(t);
                                for (var a in r) {
                                    var o = r[a],
                                        i = t[o];
                                    i instanceof n || "object" != typeof i || null === i || (Object.keys(i).length > 0 && e(t[o]), 0 === Object.keys(i).length && delete t[o])
                                }
                            }
                        }(this.listenerTree), this
                    }, u.prototype.offAny = function(e) {
                        var t, r = 0,
                            n = 0;
                        if (e && this._all && this._all.length > 0) {
                            for (r = 0, n = (t = this._all).length; r < n; r++)
                                if (e === t[r]) return t.splice(r, 1), this._removeListener && this.emit("removeListenerAny", e), this
                        } else {
                            if (t = this._all, this._removeListener)
                                for (r = 0, n = t.length; r < n; r++) this.emit("removeListenerAny", t[r]);
                            this._all = []
                        }
                        return this
                    }, u.prototype.removeListener = u.prototype.off, u.prototype.removeAllListeners = function(e) {
                        return void 0 === e ? (!this._events || i.call(this), this) : (this._events && delete this._events[e], this)
                    }, u.prototype.listeners = function(e) {
                        return this._events || i.call(this), this._events[e] || (this._events[e] = []), a(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
                    }, u.prototype.eventNames = function() {
                        return Object.keys(this._events)
                    }, u.prototype.listenerCount = function(e) {
                        return this.listeners(e).length
                    }, u.prototype.listenersAny = function() {
                        return this._all ? this._all : []
                    };
                    const l = u
                },
                1708: (e, r, n) => {
                    "use strict";
                    n.d(r, {
                        k: () => i,
                        n: () => s
                    });
                    var a = void 0 !== t && t ? t.version : "unknown",
                        o = void 0 !== t && t ? t.updateTime : "unknown";
                    "string" == typeof a && (a = a.replace(" ", "")), "string" == typeof o && (o = o.replace(" ", "-"));
                    var i = () => a,
                        s = () => o
                },
                9822: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Z: () => n
                    });
                    const n = {
                        setNavigationBarRightButton: 238,
                        requestVirtualPayment: 285,
                        navigateToDevMiniProgram: 351,
                        setCookies: 502,
                        getCookies: 503,
                        joinVoIPChat: 516,
                        exitVoIPChat: 517,
                        onVoIPChatMembersChanged: 518,
                        onVoIPChatSpeakersChanged: 519,
                        onVoIPChatInterrupted: 520,
                        updateVoIPChatMuteConfig: 521,
                        openBizProfile: 560,
                        insertXWebLivePlayer: 561,
                        updateXWebLivePlayer: 562,
                        removeXWebLivePlayer: 563,
                        insertXWebLivePusher: 564,
                        updateXWebLivePusher: 565,
                        removeXWebLivePusher: 566,
                        operateXWebLivePlayer: 567,
                        operateXWebLivePusher: 568,
                        UDP: 606,
                        launchApplicationDirectly: 620,
                        chooseShareGroup: 627,
                        screenCanvasReadPixels: 631,
                        navigateToMiniProgramDirectly: 632,
                        openDataContextExtension: 638,
                        navigateBackNative: 646,
                        batchGetContactDirectly: 676,
                        launchApp: 692,
                        sendBizRedPacketForOpen: 694,
                        openWxappLimit5: 720,
                        shareCallback: 740,
                        chooseAddressForPlugin: 765,
                        openSettingForPlugin: 768,
                        requestPaymentForPlugin: 771,
                        WeAppWorker: 775,
                        listenFrameChangeInWorker: 776,
                        requestSubscribeWhatsNew: 782,
                        shareImageMessage: 801,
                        getGroupToolbarInfo: 803,
                        requestMidasFriendPayment: 804,
                        createWebView: 805,
                        openUrlForPlugin: 844,
                        enterContactForPlugin: 850,
                        authShareRelationship: 852,
                        setLoginAuthForPlugin: 855,
                        uploadToCommonCDN: 878,
                        quicklyAddBrandContact: 879,
                        engineOpenData: 894,
                        preloadMiniProgramEnvDirectly: 900,
                        predownloadMiniProgramPackageDirectly: 901,
                        openAddressWithLightMode: 905,
                        editTextWithPopForm: 906,
                        enableShareTimeLine: 909,
                        private_getEnterOptions: 911,
                        addPhoneRepeatCalendar: 913,
                        privateScanItem: 917,
                        shareDataToWeRun: 926,
                        handoff: 931,
                        private_chooseInvoiceTitleDirectly: 932,
                        insertXWebVoIPView: 934,
                        updateXWebVoIPView: 935,
                        removeXWebVoIPView: 936,
                        private_getPhoneNumberDirectly: 937,
                        preloadWebview: 955,
                        private_openCardDirectly: 961,
                        bindingDownload: 972,
                        bindingReadFile: 973,
                        bindingWebSocket: 974,
                        openH5GameClub: 975,
                        showShareImageMenu: 978,
                        openChannelsPostPage: 984,
                        private_plugin_webview: 986,
                        jumpRedPacketEnvelopePreview: 988,
                        sendRedCoverAppMsg: 990,
                        private_launchTrialMiniProgram: 992,
                        plugin_launchApplicationDirectly_operateDirectly: 1009,
                        private_setNavigateBackInterception: 1020,
                        private_stopNavigateBackInterception: 1021,
                        privateSearchContacts: 1024,
                        TCP: 1025,
                        TCPServer: 1026,
                        inputTypeSafePassword: 1027,
                        startGameLiveDirectly: 1045,
                        getUserRecentGameLiveInfo: 1049,
                        private_getWebviewDebugInfo: 1051,
                        showRedPackage: 1052,
                        allowBufferWASM: 1067,
                        chooseAvatar: 1081,
                        showNicknameAccessory: 1082,
                        openPublicServicePayment: 1084,
                        reportRequestError2: 1085,
                        openUrlByExtBrowser: 1115,
                        reportRequestError3: 1131,
                        requestOrderPaymentForPlugin: 1147,
                        useFreeHttpDns: 1151,
                        openUrlByExtBrowser2: 1161,
                        reportRresult: 1167,
                        disableBusinessConfigCache: 1181,
                        WxaQualityOssRuleConfig: 1182,
                        gameRecorderShareTimelineCallback: 1185,
                        gameRecorderShareAppMessageCallback: 1186,
                        forceUseAudioDynamic: 1189,
                        allowUseWePay: 1202,
                        gameLaunchPopupView: 1218,
                        gameWelfareView: 1250,
                        reportRequestErrorByAI: 1212,
                        reportPayVIPQuality: 1214,
                        openPaymentCompletedPage: 1208,
                        paymentCompletedPageCoupon: 1211,
                        quickSendRedPacket: 1216,
                        openPaymentCompletedPageFull: 1217,
                        markRelievedBuyFlag: 1232,
                        enableAIAD: 1233,
                        gameCouponHangings: 1235,
                        skipDomainCheck: 1266,
                        previewImageLocal: 1257,
                        useGameCoverCodeCache: 1272,
                        private_createVestUser: 1279,
                        openMedicalInsuranceService: 1288,
                        requestMedicalInsurancePay: 1294,
                        openBusinessView: 1295,
                        choosePhoneNumberAreaCode: 1273,
                        useMagicBrushFrame: 1299,
                        returnWebviewUrlNotInBizDomainList: 1298,
                        disablePrivacyOfficialPopup: 1305,
                        operateTingAudio: 1319,
                        startQuotaControl: 1329,
                        skipDomainCheck_downloadFile: 1335,
                        skipDomainCheck_uploadFile: 1336,
                        skipDomainCheck_socket: 1337,
                        aiadBanCache: 1343,
                        aiadOnlyUsePreviewCache: 1344,
                        requestTaskJsBinding: 1352
                    }
                },
                6142: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        AT: () => f,
                        DM: () => g,
                        Em: () => i,
                        Ft: () => l,
                        HD: () => s,
                        Kn: () => d,
                        ZT: () => w,
                        eP: () => _,
                        fU: () => m,
                        hj: () => c,
                        i2: () => p,
                        kJ: () => h,
                        mf: () => v,
                        o8: () => u,
                        tI: () => y,
                        x7: () => b
                    });
                    var a = (() => Object.prototype.toString)(),
                        o = n.prototype.call.bind(a);

                    function i(e) {
                        return o(e).slice(8, -1)
                    }
                    var s = e => "String" === i(e),
                        c = e => "Number" === i(e),
                        u = e => void 0 === e,
                        l = e => null === e,
                        p = (() => Number.isNaN || (e => e != e))(),
                        f = e => c(e) && Math.abs(e) === 1 / 0,
                        d = e => "Object" === i(e),
                        h = (() => Array.isArray || (e => "Array" === i(e)))(),
                        v = e => "function" == typeof e,
                        g = e => "Set" === i(e),
                        y = e => "Promise" === i(e),
                        _ = e => "ArrayBuffer" === i(e),
                        m = e => ArrayBuffer.isView(e) && !(e => "DataView" === i(e))(e);

                    function b(e, t, r = "parameter") {
                        var n = i(t),
                            a = i(e);
                        if (a !== n) return `${r} should be ${n} instead of ${a};`;
                        var o = "";
                        switch (n) {
                            case "Object":
                                Object.keys(t).forEach((n => {
                                    o += b(e[n], t[n], `${r}.${n}`)
                                }));
                                break;
                            case "Array":
                                if (e.length < t.length) return `${r} should have at least ${t.length} item;`;
                                for (var s = 0; s < t.length; ++s) o += b(e[s], t[s], `${r}[${s}]`);
                                break;
                            case "String":
                                if (t.length > 0 && 0 === e.length) return `${r} should be not empty string`
                        }
                        return o
                    }

                    function w() {}
                },
                1868: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        NX: () => s,
                        Vl: () => i
                    });
                    var n = r(8138),
                        a = (() => Object.assign)();
                    var o = Symbol("ErrorInfosSymbol"),
                        i = e => (t = {}, ...r) => new Promise(((n, i) => e(a({}, t, {
                            success: n,
                            fail: e => {
                                var {
                                    errMsg: t
                                } = e, r = a({}, e);
                                delete r.errMsg;
                                var n = new Error(t.replace(/^\w+:fail ?/, ""));
                                a(n, r), n[o] = r, i(n)
                            },
                            complete: (e = {}) => {
                                var {
                                    errMsg: t
                                } = e;
                                if (t && !/^\w+:(ok|fail)/.test(t)) {
                                    var r = new Error(e.errMsg.replace(/^\w+:/, "")),
                                        n = a({}, e);
                                    delete n.errMsg, a(r, n), r[o] = n, r._complete_hook = !0, i(r)
                                }
                            }
                        }), ...r)));

                    function s(e, t) {
                        return (r = {}, ...i) => {
                            var s = {
                                success: r.success,
                                fail: r.fail,
                                complete: r.complete
                            };
                            delete(r = a({}, r)).success, delete r.fail, delete r.complete, t(r, ...i).then((t => (0, n.FE)({
                                name: e,
                                args: s,
                                success: !0,
                                res: t
                            })), (t => {
                                t._complete_hook ? (0, n.S3)({
                                    name: e,
                                    args: s,
                                    errMsg: t.message,
                                    res: t[o] || {}
                                }) : (0, n.FE)({
                                    name: e,
                                    args: s,
                                    success: !1,
                                    errMsg: t.message,
                                    res: t[o] || {}
                                })
                            }))
                        }
                    }
                },
                8007: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        b: () => a,
                        c: () => o
                    });
                    var n = r(6142);

                    function a(e) {
                        return t => "string" == typeof t && t.length > e ? t.substr(0, e) : t
                    }

                    function o(e, t = !0) {
                        var r = (0, n.Em)(e);
                        switch (r) {
                            case "Number":
                            case "Boolean":
                                return e;
                            case "String":
                                return a(512)(e).replace(/\|/g, "||").replace(/,/g, "|.");
                            case "Error":
                                return `[Error:${o(e.message)}|${o(e.stack)}]`;
                            case "Object":
                                return t ? Object.keys(e).map((t => `${o(t)}=${o(e[t],!1)}`)).sort(((e, t) => e.length - t.length)).join("&") || "{}" : `[${r}]`;
                            case "Array":
                                var i = [];
                                return t ? (e.forEach((e => i.push(o(e, "Array" !== (0, n.Em)(e))))), i.join(";")) : `[${r}]`;
                            default:
                                return `[${r}]`
                        }
                    }
                },
                8929: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Hw: () => i,
                        M8: () => a,
                        Qu: () => o
                    });
                    var n = (() => Object.assign)();

                    function a() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                            var t = 16 * Math.random() | 0;
                            return ("x" === e ? t : 3 & t | 8).toString(16)
                        }))
                    }

                    function o(e, t, r) {
                        var a = function(e) {
                            return function(t = {}, ...r) {
                                t = t || {};
                                var {
                                    success: a,
                                    fail: o,
                                    complete: i
                                } = t;
                                return a || o || i ? e.apply(this, [t].concat(r)) : new Promise(((a, o) => {
                                    var i = n({
                                        success: a,
                                        fail: o
                                    }, t);
                                    e.apply(this, [i].concat(r))
                                }))
                            }
                        }(r.value);
                        return r.value = function() {
                            return a.apply(this, arguments)
                        }, r
                    }

                    function i(e, t) {
                        return function(...r) {
                            try {
                                return e(...r)
                            } catch (e) {
                                if ("[object Error]" === Object.prototype.toString.apply(e)) {
                                    if ("AppServiceSdkKnownError" === e.type) throw e;
                                    "ThirdScriptError" === e.type ? v.thirdErrorReport({
                                        error: e,
                                        extend: t
                                    }) : v.errorReport({
                                        key: "appServiceSDKScriptError",
                                        error: e,
                                        extend: t
                                    })
                                }
                            }
                        }
                    }
                },
                5133: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Tk: () => o
                    });
                    var n = r(7445),
                        a = [{
                            match: /^connectSocket/,
                            version: 1
                        }, {
                            match: /^request/,
                            version: n.IS_ANDROID ? 3 : 1
                        }, {
                            match: /^downloadFile/,
                            version: n.IS_ANDROID ? 3 : 1
                        }];

                    function o(e, t) {
                        a.push({
                            match: e,
                            version: t
                        })
                    }
                },
                4287: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        cE: () => c,
                        wK: () => i,
                        Z8: () => o,
                        HR: () => s,
                        mQ: () => u
                    });
                    var n = Object.prototype.hasOwnProperty;

                    function a(e, t) {
                        return n.call(e, t)
                    }

                    function o(e) {
                        return "string" == typeof e ? -1 !== e.indexOf("?") ? e.replace(/\.html\?/, "?") : e.replace(/\.html$/, "") : e
                    }
                    var i = e => {
                        if ("string" == typeof e) {
                            var t = e.indexOf("?");
                            if (-1 !== t) return e.slice(0, t)
                        }
                        return e
                    };

                    function s(e, t = !1) {
                        if ("object" != typeof e) return e;
                        var r = "";
                        for (var n in e)
                            if (a(e, n))
                                if (t) try {
                                    r += `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}&`
                                } catch (t) {
                                    r += `${n}=${e[n]}&`
                                } else r += `${n}=${e[n]}&`;
                        return r && (r = r.slice(0, -1)), r
                    }

                    function c(e, t) {
                        var r = Object.keys(t);
                        if ("string" == typeof e && "object" == typeof t && null !== t && r.length > 0) {
                            var n = e.split("?");
                            return n[0] + "?" + s(function(...e) {
                                return e.reduce(((e, t) => {
                                    for (var r in t) e[r] = t[r];
                                    return e
                                }), {})
                            }((n[1] || "").split("&").reduce(((e, t) => {
                                if ("string" == typeof t && t.length > 0) {
                                    var r = t.split("="),
                                        n = r[0],
                                        a = r[1];
                                    e[n] = a
                                }
                                return e
                            }), {}), r.reduce(((e, r) => ("object" == typeof t[r] ? e[encodeURIComponent(r)] = encodeURIComponent(JSON.stringify(t[r])) : e[encodeURIComponent(r)] = encodeURIComponent(t[r]), e)), {})))
                        }
                        return e
                    }

                    function u(e, t = "http") {
                        return "http" === t ? /^(http|https):\/\/.*/i.test(e) : "websocket" === t ? /^(ws|wss):\/\/.*/i.test(e) : void 0
                    }
                },
                773: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        k: () => p
                    });
                    var n = r(9661),
                        a = null;
                    i.onLoad((() => {
                        i.globalShare.reusableWorkerId && s(i.globalShare.reusableWorkerId)
                    }));
                    var o, s = e => {
                            a = e
                        },
                        c = () => a;

                    function u() {
                        f.onWorkerMsg(((e, t) => {
                            if (e === this.workerId) {
                                if (t.workerId) return;
                                if (t.data) {
                                    var {
                                        cmd: r,
                                        callbackId: n,
                                        data: a
                                    } = t.data;
                                    if ("callback" === r) {
                                        var {
                                            result: o,
                                            errMsg: i
                                        } = a;
                                        this.emitter.emit(n, o, i)
                                    }
                                }
                            }
                        }))
                    }
                    class l {
                        init(e) {
                            this.workerId = e, this.callbackId = 0, this.generateCallbackId = () => ++this.callbackId, this.emitter = new n.Z, u.call(this)
                        }
                        constructor() {
                            if (c()) this.init(c());
                            else {
                                var {
                                    workerId: e
                                } = f.createWXLibWorker("WAAccelerateWorker.js", {
                                    APIList: []
                                }); - 1 !== e ? this.init(e) : this.unsupport = !0
                            }
                        }
                        runTask(e, t) {
                            return this.unsupport ? Promise.reject(new Error("unsupport")) : new Promise(((r, n) => {
                                var a = String(this.generateCallbackId());
                                this.emitter.once(a, ((e, t) => {
                                    t ? n(new Error(t)) : r(e)
                                }));
                                var o = {
                                    cmd: e,
                                    callbackId: a,
                                    data: t
                                };
                                o = {
                                    data: o
                                }, f.postMsgToWorker(this.workerId, o, void 0, !1)
                            }))
                        }
                    }
                    var p = () => o || (o = new l)
                },
                3478: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        j: () => o
                    });
                    var n = Object.create(null);
                    var a = r(8929);

                    function o(e, t) {
                        ! function(e, t) {
                            n[e] instanceof Array ? n[e].push(t) : (n[e] = null, u.on(e, ((e, r, n) => {
                                "number" != typeof(null == n ? void 0 : n.__subscribe_webviewId) && t(e, r, n)
                            })))
                        }(e, (0, a.Hw)(t, `at api ${e} callback function`))
                    }
                },
                2073: (e, t, r) => {
                    "use strict";
                    var a;
                    r.d(t, {
                        be: () => je,
                        Rn: () => Ne.Rn,
                        gM: () => He,
                        r3: () => Ne.r3,
                        FE: () => Ne.FE,
                        YG: () => Ne.YG,
                        NJ: () => Me,
                        IN: () => Pe,
                        bb: () => Oe,
                        yD: () => Je,
                        Qh: () => Ye,
                        oQ: () => Ee,
                        jQ: () => Le.j,
                        TG: () => Qe,
                        nY: () => M,
                        Ld: () => L
                    });
                    const s = {
                        get invoke() {
                            return a
                        },
                        set invoke(e) {
                            a = e
                        }
                    };
                    var c = r(6342),
                        l = r(9822),
                        p = null,
                        f = [],
                        d = e => {
                            null !== p ? e() : f.push(e)
                        },
                        g = e => {
                            p = e.data.pluginPermissionBytes, f.forEach((e => e())), f = []
                        };
                    u.subscribe("batchGetPluginPermissionBytes", g), i.onLibraryEnd((() => {
                        "undefined" != typeof __subContextEngine__ && "function" == typeof __subContextEngine__.onSubContextMessage && __subContextEngine__.onSubContextMessage((e => {
                            "batchGetPluginPermissionBytes" === e.name && g(e)
                        }))
                    })), u.subscribe("getPluginPermissionBytesByJsApi", (e => {
                        m(e.data.pluginId, e.data.apiName, (t => {
                            u.publish("responseGetPluginPermissionBytesByJsApi", {
                                data: {
                                    reqId: e.data.reqId,
                                    bytes: t
                                },
                                options: {
                                    timestamp: Date.now()
                                }
                            })
                        }))
                    }));
                    var y = e => e.split("/", 1)[0],
                        _ = (e, t) => {
                            var r, n, a = null === (r = p) || void 0 === r || null === (n = r[e]) || void 0 === n ? void 0 : n[t];
                            return null == a ? a = [0, 0, 0] : "object" != typeof a && (a = [a, a, a]), a
                        };

                    function m(e, t, r) {
                        e = y(e), o.supportInvokeWithAppId ? u.invoke("getPluginPermissionBytes", {
                            pluginList: [{
                                pluginId: e,
                                indexes: [l.Z[t]]
                            }]
                        }, (t => {
                            var n = t.pluginPermissionMap[e][0];
                            r([n, n, n])
                        })) : d((() => {
                            var n = _(e, t);
                            r(n)
                        }))
                    }
                    var b = r(8246),
                        k = r(7445);
                    var S, I = r(9370),
                        x = {},
                        T = !1,
                        A = null,
                        C = (new Promise((e => A = e)), e => x[e] || I.hr.getPageTypeById(e)),
                        E = (e, t) => {
                            "context" === t ? x[e] = t : I.hr.setPageTypeById(e, t), (T = T || "webview" !== t) && A && (A(0), A = null)
                        },
                        P = e => "webview" === e ? e : "context";
                    null === (S = u.clientManager) || void 0 === S || S.on("clientConnected", (e => {
                        E(e, "webview")
                    }));
                    var O = (e, t = {}, r) => {
                        T && (Array.isArray(r) ? r.forEach((r => {
                            __subContextEngine__.postMessageToSubContext({
                                event: e,
                                params: {
                                    params: t,
                                    pageId: r
                                }
                            }, r)
                        })) : __subContextEngine__.postMessageToSubContext({
                            event: e,
                            params: {
                                params: t
                            }
                        }, r))
                    };

                    function R(e, t, r) {
                        ! function(e, t, r) {
                            u.publish(e, t, r)
                        }(e, {
                            data: t,
                            options: {
                                timestamp: Date.now()
                            }
                        }, r)
                    }
                    var M = k.isAppService ? (e, t, r) => {
                        if (null == r) R(e, t, r), O(e, t, r);
                        else {
                            var n = (e => {
                                if (void 0 === e || 0 === e.length) return {};
                                var t = P(C(e[0]));
                                if (1 === e.length) return {
                                    [t]: e
                                };
                                var r = {};
                                return e.forEach((e => {
                                    var t = P(C(e));
                                    void 0 !== r[t] ? r[t].push(e) : r[t] = [e]
                                })), r
                            })(r);
                            void 0 !== n.webview && R(e, t, n.webview), void 0 !== n.context && O(e, t, n.context)
                        }
                    } : R;

                    function D(e, t) {}
                    var j = k.isAppService ? new i.EventEmitter : null;
                    k.isAppService && i.onLibraryEnd((() => {
                        __subContextEngine__.onSubContextMessage((e => {
                            j.emit(e.event, e.params)
                        }))
                    }));
                    var L = k.isAppService ? (e, t) => {
                            ((e, t) => {
                                j.on(e, (e => {
                                    void 0 === C(e.pageId) && E(e.pageId, "context"), t(e.params, e.pageId)
                                }))
                            })(e, t)
                        } : D,
                        N = "",
                        F = (e = {}) => {
                            try {
                                N = e.transitExtraData.adUxInfo
                            } catch (e) {
                                N = ""
                            }
                        };
                    c.default.onReady((() => {
                        F(c.default.appLaunchInfo)
                    })), (0, b.n)("onAppEnterForeground", (e => {
                        F(e)
                    })), (0, b.n)("onAppEnterBackground", ((e = {}) => {
                        "back" !== e.mode && "close" !== e.mode || (N = "")
                    })), L("getAdUxInfo", ((e, t) => {
                        M("adUxInfoGot", {
                            adUxInfo: N,
                            callbackId: e.callbackId
                        }, [t])
                    }));
                    var W = () => N;

                    function $(e, t, r, n = {}) {
                        "navigateToMiniProgram" !== e && "openUrl" !== e && "private_openUrl" !== e || (t.adUxInfo = t.adUxInfo || W());
                        var a = n.appId;
                        return "splashad" === i.env.workerType || c.default.supportInvokeWithAppId || void 0 === a || void 0 !== i && i.env.isGame || 4 === c.default.appType ? u.invoke(e, t, r, n) : d((() => {
                            var o = function(e, t, r) {
                                t = y(t), delete r.permissionBytes;
                                var n = _(t, e);
                                return r.permissionBytes = n, r
                            }(e, a, t);
                            u.invoke(e, o, r, n)
                        }))
                    }
                    var B = {},
                        U = {},
                        q = {},
                        H = 0,
                        G = (e, t) => Object.keys(t).map((r => Object.keys(t[r]).map((n => ({
                            func: r,
                            result: e,
                            errMsg: n,
                            count: t[r][n]
                        }))))),
                        V = () => {
                            var e = G(1, B),
                                t = G(2, U),
                                r = G(3, q),
                                n = [].concat(e, t, r);
                            0 !== n.length && Pe("reportRealtimeAction", {
                                actionData: JSON.stringify({
                                    business: "mmbizwxajsapi",
                                    dataType: 1,
                                    dataArray: n,
                                    appType: v.getAppType()
                                })
                            }), B = {}, U = {}, q = {}
                        },
                        K = (e, t, r, n, a) => {
                            var o;
                            (o = t ? B : r ? U : q)[e] = o[e] || {}, o[e][a] = (o[e][a] || 0) + 1, Date.now() - H >= 6e4 && (H = Date.now(), setTimeout(V, 6e4))
                        },
                        z = r(8929),
                        J = r(1868),
                        Y = r(6142),
                        Z = r(5125),
                        Q = {
                            OK: 0,
                            BLOCK: 1,
                            BLOCK_WITH_TOAST: 2
                        },
                        X = {
                            OK: 1,
                            BLOCK: 2,
                            NO_BLOCK: 3
                        },
                        ee = {
                            NAVIGATE_TO: 1,
                            SWITCH_TAB: 2,
                            REDIRECT_TO: 3,
                            API: 4,
                            RE_LAUNCH: 5
                        },
                        te = "该功能暂时无法使用",
                        re = w.createLogger("BanForPage"),
                        ne = !1,
                        ae = new Set(["shareAppMessage", "shareAppMessageDirectly", "requestPayment", "setClipboardData", "getClipboardData", "getLocation", "getPhoneNumber", "navigateToMiniProgram", "navigateBackMiniProgram"]),
                        oe = [];

                    function ie(e, t, r) {
                        var n = function(e, t, r) {
                            for (var n = -1, a = 0; a < oe.length; a++) {
                                var o = oe[a];
                                if ((!(0, Y.HD)(o.path_rule) || !o.path_rule || new RegExp(o.path_rule).test(t)) && (!(0, Y.HD)(o.title_rule) || !o.title_rule || new RegExp(o.title_rule).test(r))) {
                                    n = a;
                                    break
                                }
                            }
                            return re.log(`[getBanRuleIndexForPage] banRuleIndex=${n}`), n
                        }(0, t, r);
                        return -1 === n ? (se(e, X.OK, ee.API, e), !0) : function(e, t) {
                            var r, n, a = e.ban_jsapi_list.find((e => e.jsapi_name === t));
                            if (!a) return re.log("[checkAPIAvailableForPageByRule], no APIItem found"), !0;
                            if (re.log("[checkAPIAvailableForPageByRule], found APIItem:", a), a.state === Q.OK) r = !1;
                            else if (a.state === Q.BLOCK) r = !0;
                            else if (a.state === Q.BLOCK_WITH_TOAST && (r = !0, 1 === e.is_valid)) {
                                var o = a.toast_wording || te;
                                je("showToast", {
                                    title: o,
                                    icon: "none"
                                })
                            }
                            return n = r ? e.is_valid ? X.BLOCK : X.NO_BLOCK : X.OK, se(t, n, ee.API, t), 1 !== e.is_valid || !r
                        }(oe[n], e)
                    }

                    function se(e, t, r, n = "", a = "") {
                        if (re.log(`[reportAPIBanForPage] APIName=${e}, blockType=${t}, checkScene=${r}, extraInfo=${n}, needReport=${ne}`), ne) {
                            var {
                                appLaunchInfo: o
                            } = c.default, i = Object.keys(Z.Z.query).map((e => `${e}=${Z.Z.query[e]}`)).join("&"), s = {
                                session_id: o.sessionid || o.sessionId,
                                cur_path: Z.Z.lastRoute + (i ? `?${i}` : ""),
                                title: Z.Z.navigationBarTitleMap[Z.Z.lastRoute],
                                check_scene: r,
                                block_status: t,
                                extra_info: n,
                                launch_scene: o.scene,
                                launch_path: o.path,
                                target_path: a
                            };
                            re.log("[reportAPIBanForPage], reqData:", s), Je({
                                reqData: s,
                                apiName: "webapi_reportnvgcheckinfo",
                                complete(e) {
                                    re.log(`[reportAPIBanForPage], res.errMsg=${e.errMsg}`)
                                }
                            })
                        }
                    }
                    c.default.onReady((() => {
                        if (!k.IS_DEVTOOLS) try {
                            var {
                                do_report: e,
                                navigate_ban_rule_list: t
                            } = c.default.appContactInfo.operationInfo.jsonInfo.navigate_ban_info;
                            oe = t, ne = 1 === e, ae = new Set(t.reduce(((e, t) => [...e, ...t.ban_jsapi_list]), ae))
                        } catch (e) {
                            re.error(`[BanForPage][init] fail, errMsg=${e.message}`)
                        }
                    }));
                    var ce = n.prototype.call.bind(Array.prototype.push),
                        ue = (n.prototype.call.bind(Array.prototype.forEach), ["startPullDownRefresh"]),
                        le = [],
                        pe = {
                            appRoute: !1,
                            appRouteDone: !1
                        },
                        fe = r(1708);
                    var de, he = (() => Object.create)(),
                        ve = (() => Object.assign)(),
                        ge = (() => Object.keys)(),
                        ye = (() => Array.prototype.reduce)(),
                        _e = Array.prototype.includes.bind(ue),
                        me = n.prototype.call.bind(ye),
                        be = ["open", "openSync", "close", "closeSync", "fstat", "fstatSync", "write", "writeSync", "read", "readSync", "truncate", "truncateSync", "ftruncate", "ftruncateSync"];

                    function we(e, t) {
                        return me(ge(e), ((r, n) => ("function" == typeof e[n] && (r[n] = h.surroundThirdByTryCatch(e[n], `at api ${t} ${n} callback function`), delete e[n]), r)), {})
                    }

                    function ke(e, t, r, n, a) {
                        e.errMsg = e.errMsg || `${t}:ok`;
                        var o = 0 === e.errMsg.indexOf(`${t}:ok`),
                            i = new RegExp(`${t}:(fail |fail:)?cancel`).test(e.errMsg),
                            s = 0 === e.errMsg.indexOf(`${t}:fail`);
                        "function" == typeof n.beforeAll && n.beforeAll(e), o ? function(e, t, r, n, a) {
                            var o = function() {
                                "function" == typeof e.success && e.success(r), "function" == typeof n.afterSuccess && n.afterSuccess(r)
                            };
                            "function" == typeof n.beforeSuccess ? 2 === n.beforeSuccess._argumentsLength ? n.beforeSuccess(r, o) : (n.beforeSuccess(r), o()) : o(), "function" == typeof de && de(t, a)
                        }(r, t, e, n, a) : i ? function(e, t, r, n) {
                            var a = new RegExp(`${t}:(fail |fail:)?cancel`);
                            e.errMsg = e.errMsg.replace(a, `${t}:fail cancel`), "function" == typeof r.fail && r.fail(e), "function" == typeof n.beforeCancel && n.beforeCancel(e), "function" == typeof r.cancel && r.cancel(e), "function" == typeof n.afterCancel && n.afterCancel(e)
                        }(e, t, r, n) : s && function(e, t, r, n) {
                            "function" == typeof e.beforeFail && e.beforeFail(r), "function" == typeof n.fail && n.fail(r), "function" == typeof e.afterFail && e.afterFail(r), (0, Y.mf)(e.checkNeedReportFail) && !1 === e.checkNeedReportFail(r) || v.reportIDKey({
                                key: `${t}_fail`
                            })
                        }(n, t, e, r), "function" == typeof r.complete && r.complete(e), "function" == typeof n.afterAll && n.afterAll(e), K(t, o, s, i, e.errMsg)
                    }
                    var Se = (() => String.prototype.split)(),
                        Ie = (() => String.prototype.startsWith)(),
                        xe = n.prototype.call.bind(Se),
                        Te = n.prototype.call.bind(Ie);

                    function Ae(e) {
                        return function(t, r = {}, n = {}, a = "/") {
                            var o = n.notPack;
                            (0, Y.Kn)(r) || (r = {}), "operateWXData" === t && (r._isFromBaseOperateWXData, delete r._isFromBaseOperateWXData), n = function(e, t) {
                                return me(ge(e), ((r, n) => ("function" == typeof e[n] && (r[n] = (0, z.Hw)(e[n], `at api ${t} ${n} callback function`), r[n]._argumentsLength = e[n].length), r)), {})
                            }(n, t);
                            var s = function(e, t, r, n) {
                                var a;
                                return a = r.isThird ? we(r, t) : we(e, t),
                                    function(e) {
                                        ke(e, t, a, r, n)
                                    }
                            }(r = ve(he(null), r), t, n, a);
                            v.reportIDKey({
                                key: t
                            });
                            var c, u, l, p = {
                                keepOriginalParams: (c = t, k.WK_RENDERER_H5 || k.IS_ANDROID && be.includes(c))
                            };
                            if (i.env.isMagicBrushFrameEnv && r.contextId && (p.contextId = r.contextId, delete r.contextId), !e && "splashad" !== i.env.workerType) {
                                if ((0, k.isThirdPartyApp)() && ae.has(t) && (u = t, l = Object.keys(Z.Z.query).reduce(((e, t) => [...e, `${t}=${Z.Z.query[t]}`]), []).join("&"), !ie(u, Z.Z.lastRoute + (l ? `?${l}` : ""), Z.Z.navigationBarTitleMap[Z.Z.lastRoute] || ""))) return void s({
                                    errMsg: `${t}:fail API has been banned`
                                });
                                if (delete r.pluginId, delete r.permissionBytes, "string" == typeof a && Te(a, "wx")) {
                                    var f = (e => xe(e, "/", 1)[0])(a);
                                    p.appId = f
                                }
                            }
                            o && (p.notPack = !0), $(t, r, s, p)
                        }
                    }
                    var Ce, Ee = Ae(!1),
                        Pe = (e, t, r) => {
                            _e(e) ? ((e, t, r) => {
                                var {
                                    appRoute: n,
                                    appRouteDone: a
                                } = pe;
                                !n && a ? Ee(e, t, r) : ce(le, {
                                    name: e,
                                    args: t,
                                    option: r
                                })
                            })(e, t, r) : Ee(e, t, r)
                        },
                        Oe = (e, t, r) => (0, J.Vl)((t => Pe(e, t, r)))(t),
                        Re = {},
                        Me = (e, t, r) => {
                            var n, a = r.notPack,
                                o = {
                                    pureInvoke: !0,
                                    highPerformance: Re,
                                    keepOriginalParams: k.WK_RENDERER_H5
                                };
                            n = Ce || (() => {
                                if (Ce) return Ce;
                                var e = (e, t) => {
                                    var r = Re[t];
                                    if (r) {
                                        e.errMsg = e.errMsg || `${r.__jsapi_name__}:ok`;
                                        var n = 0 === e.errMsg.indexOf(`${r.__jsapi_name__}:ok`),
                                            a = new RegExp(`${r.__jsapi_name__}:(fail |fail:)?cancel`).test(e.errMsg),
                                            o = 0 === e.errMsg.indexOf(`${r.__jsapi_name__}:fail`);
                                        try {
                                            n && r.success ? r.success(e) : a && r.cancel ? r.cancel() : o && r.fail(e), r.complete && r.complete(e)
                                        } catch (e) {}
                                        K(r.__jsapi_name__, n, o, a, e.errMsg), delete Re[t]
                                    }
                                };
                                return Ce = e, e
                            })(), i.env.isMagicBrushFrameEnv && t.contextId && (o.contextId = t.contextId, delete t.contextId), a && (o.notPack = !0), t.__jsapi_name__ = e, u.pureInvoke(e, t, n, o)
                        },
                        De = Ae(!0),
                        je = (e, t, r) => {
                            De(e, t, r)
                        },
                        Le = r(3478);
                    s.invoke = Pe;
                    var Ne = r(8138),
                        Fe = r(8007);

                    function We({
                        WXDataApiName: e,
                        argument: t,
                        isSuccess: r,
                        invokeTime: n,
                        costTime: a,
                        result: o,
                        errMsg: i,
                        isConfirm: s,
                        queueLength: u,
                        wxdataQueueTimestamp: l,
                        wxdataDequeueTimestamp: p,
                        beginCGITimestamp: f,
                        CGICallbackTimestamp: d,
                        beginCGITimestampAfterConfirm: h,
                        CGICallbackTimestampAfterConfirm: g,
                        wxlibCallbackTimestamp: y,
                        requestInQueue: _,
                        requestingCount: m,
                        cost1: b,
                        cost2: w,
                        cost3: k,
                        cost4: S,
                        cost5: I,
                        cost6: x
                    }) {
                        Math.random() < .05 && setTimeout((() => {
                            var T = Z.Z.currentNetworkType,
                                A = c.default.appType + 1e3,
                                C = c.default.appLaunchInfo && void 0 !== c.default.appLaunchInfo.scene ? c.default.appLaunchInfo.scene : 0,
                                E = [e, (0, Fe.c)(JSON.stringify(t)), r ? 1 : 0, n, a, T, (0, Fe.c)(o), A, C, (0, fe.k)(), (0, fe.n)(), i && (0, Fe.c)(i) || "", s ? 1 : 0, u, b, w, k, S, I, x, 0, _ ? 1 : 0, m, n, l, p, f, d, h, g, y].map((0, Fe.b)(1024)).join(",");
                            v.reportKeyValue({
                                key: "WeAppOperateWXData",
                                value: E
                            })
                        }), 0)
                    }
                    var $e = 0,
                        Be = ["webapi_getuserinfo", "webapi_getwerunstep_history", "subscribemsg", "webapi_getfrienduserstorage", "webapi_getgroupuserstorage", "webapi_game_potential_friends", "webapi_getuserinteractivedata", "webapi_setselfuserstorage", "webapi_modifyfriendinteractivedata", "webapi_getuserstorageallappkey", "webapi_getshareinfo_byopengid", "webapi_getuserinfo_byopenid", "webapi_opengameinfo_getfriendsuserdata"],
                        Ue = ["webapi_getuserinfo", "webapi_getuserallappauth", "webapi_getadvert", "webapi_getshareinfo", "webapi_getuserprofile", "webapi_getiapbuyinfo", "jsapi_querysettlementmark", "webapi_createiapbuygamecoinorder", "wxaapi_midascouponsrollback", "webapi_closeiapbuyorder", "webapi_createiapbuygameitemorder", "wxaapi_midasgetcoupons", "webapi_queryiapcoupons", "webapi_createmidascoinorder", "webapi_getiapinfocreateitemorder", "webapi_getiapinfocreatecoinorder", "webapi_getopencommconf"],
                        qe = ["qbase_commapi", "webapi_botdemo"],
                        He = (e = {}, t = {}, ...r) => {
                            var n = Object.assign({}, e);
                            n._isFromBaseOperateWXData = !0;
                            var a = t.beforeAll,
                                o = t.beforeSuccess,
                                i = t.beforeFail,
                                s = n.data && n.data.api_name;
                            Be.includes(s) ? (n.requestInQueue = !0, delete n.timeout) : n.requestInQueue = !1, Ue.includes(s) ? n.isImportant = !0 : n.isImportant = !1, qe.includes(n.data && n.data.api_name) && (n.keepAlive = !0);
                            var c = {
                                isSuccess: void 0,
                                WXDataApiName: s,
                                argument: n,
                                invokeTime: Date.now(),
                                requestInQueue: n.requestInQueue,
                                requestingCount: ++$e
                            };
                            Pe("operateWXData", n, {
                                beforeAll(e) {
                                    var r = Date.now();
                                    $e--, c.costTime = r - c.invokeTime;
                                    try {
                                        if (e && e.data && e.data.data ? c.result = JSON.stringify(e.data) : c.result = e.data, e.clientInfo && "object" == typeof e.clientInfo) {
                                            var n = e.clientInfo;
                                            delete e.clientInfo, Object.keys(n).forEach((e => {
                                                c[e] = n[e]
                                            })), c.cost1 = n.wxdataQueueTimestamp - c.invokeTime, c.cost2 = n.wxdataDequeueTimestamp - n.wxdataQueueTimestamp, c.cost3 = n.beginCGITimestamp - n.wxdataDequeueTimestamp, c.cost4 = n.CGICallbackTimestamp - n.beginCGITimestamp, c.cost5 = n.wxlibCallbackTimestamp - n.CGICallbackTimestamp, c.cost6 = r - n.wxlibCallbackTimestamp
                                        }
                                    } catch (e) {
                                        w.error(e)
                                    }
                                    "function" == typeof a && a.call(t, e)
                                },
                                beforeSuccess(e) {
                                    c.isSuccess = !0, n.data.data && n.data.data.__wxdataUseProfile__ && (e.__wxdataProfileInfo = c), "function" == typeof o && o.call(t, e), We(c)
                                },
                                beforeFail(e) {
                                    c.isSuccess = !1, c.errMsg = e.errMsg, n.data.data && n.data.data.__wxdataUseProfile__ && (e.__wxdataProfileInfo = c), "function" == typeof i && i.call(t, e), We(c)
                                }
                            }, ...r)
                        },
                        Ge = r(9806),
                        Ve = r(4081),
                        Ke = (() => JSON.parse)(),
                        ze = e => ({
                            keepAlive: t,
                            apiName: r,
                            reqData: n,
                            sdkApiName: a,
                            pluginId: o,
                            success: i,
                            fail: s,
                            complete: c,
                            fromComponent: u = !1,
                            withCredentials: l = !1,
                            showConfirm: p = !1,
                            timeout: f = 18e4,
                            contextId: d
                        } = {}) => {
                            if ((0, Ne.r3)("operateWXData", {
                                    apiName: r,
                                    success: i,
                                    fail: s,
                                    complete: c
                                }, {
                                    apiName: ""
                                })) {
                                var h = {
                                    success: i,
                                    fail: s,
                                    complete: c
                                };
                                a = a || "operateWXData";
                                var v = {
                                    api_name: r,
                                    data: n || {},
                                    operate_directly: e
                                };
                                "string" == typeof o && (v.plugin_appid = o), !0 === u && (v.from_component = !0), !0 === l && (v.with_credentials = !0), !0 === p && (v.show_confirm = !0), He({
                                    keepAlive: t,
                                    data: v,
                                    timeout: f,
                                    contextId: d,
                                    success(t) {
                                        if ("string" == typeof t.data) try {
                                            t.data = Ke(t.data)
                                        } catch (e) {
                                            return void(0, Ne.FE)({
                                                name: a,
                                                args: h,
                                                errno: Ve.Q1T,
                                                errMsg: `json parse error, json="${t.data}"`,
                                                success: !1
                                            })
                                        }
                                        var {
                                            data: r = {}
                                        } = t;
                                        delete t.data;
                                        var {
                                            data: n,
                                            encryptedData: o,
                                            iv: s,
                                            cloud_id: u,
                                            err_no: l,
                                            signature: p,
                                            errmsg: f
                                        } = r;
                                        if (e) void 0 !== n && (t.rawData = n), t.respData = r;
                                        else if ("string" == typeof n) try {
                                            t.data = Ke(n)
                                        } catch (e) {
                                            return void(0, Ne.FE)({
                                                name: a,
                                                args: h,
                                                errno: Ve.Q1T,
                                                errMsg: `json parse error, json="${n}"`,
                                                success: !1
                                            })
                                        } else t.data = {};
                                        p && (t.signature = p), o && (t.encryptedData = o, t.iv = s, u && (t.cloudID = u)), "number" == typeof l && 0 !== l ? (0, Ne.FE)({
                                            name: a,
                                            args: h,
                                            errno: l,
                                            errMsg: f,
                                            success: !1
                                        }) : ("function" == typeof i && i(t), "function" == typeof c && c(t))
                                    },
                                    fail(e) {
                                        "function" == typeof s && s(e), "function" == typeof c && c(e)
                                    }
                                }, {
                                    beforeAll(e) {
                                        "operateWXData" !== a && (e.errMsg = e.errMsg.replace("operateWXData", a))
                                    }
                                })
                            }
                        },
                        Je = ze(!1),
                        Ye = (0, Ge.Fr)(Je),
                        Ze = (() => Object.assign)();

                    function Qe(e, t, r = (() => {}), n = (() => {})) {
                        return (a = {}) => {
                            var {
                                success: o,
                                fail: i
                            } = (0, Ne.Rn)(a, e);
                            Je({
                                apiName: t,
                                reqData: r(a) || {},
                                sdkApiName: e,
                                success(e) {
                                    e.rawDataObject = e.data, delete e.data, Ze(e, e.rawDataObject), n(e), delete e.rawDataObject, o(e)
                                },
                                fail: i,
                                complete: void 0
                            })
                        }
                    }
                },
                8138: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        FE: () => c,
                        Rn: () => u,
                        S3: () => s,
                        YG: () => i,
                        r3: () => o
                    });
                    var n = r(4081),
                        a = r(6142);

                    function o(e, t, r) {
                        var o = (0, a.x7)(t, r);
                        return !o || (c({
                            name: e,
                            args: t,
                            errno: n.Wkc,
                            errMsg: `parameter error: ${o}`,
                            success: !1
                        }), !1)
                    }

                    function i(e, t = {}, r, n) {
                        var o = (0, a.hj)(r);
                        c({
                            name: e,
                            args: t,
                            errno: o ? r : void 0,
                            errMsg: o ? void 0 : r,
                            errCode: o ? void 0 : n,
                            success: !1
                        })
                    }

                    function s({
                        name: e,
                        args: t = {},
                        errMsg: r = "",
                        res: n = {}
                    }) {
                        t = t || {};
                        var o = `${e}:${r}`,
                            i = h.surroundThirdByTryCatch(t.complete || a.ZT, `at api ${e} complete callback function`);
                        n.errMsg = o, i(n)
                    }

                    function c({
                        name: e,
                        args: t = {},
                        success: r = !0,
                        errno: n,
                        errMsg: o = "",
                        errCode: i,
                        res: s = {},
                        exception: c
                    }) {
                        t = t || {};
                        var u = h.surroundThirdByTryCatch((r ? t.success : t.fail) || a.ZT, `at api ${e} ${r?"success":"fail"} callback function`),
                            l = h.surroundThirdByTryCatch(t.complete || a.ZT, `at api ${e} complete callback function`);
                        (0, a.hj)(n) ? (s.errno = n, s.errMsg = `${e}:fail${o&&":"!==o[0]?" ":""}${o||""}`) : (s.errMsg = r ? `${e}:ok` : `${e}:fail ${o}`, (0, a.hj)(i) && (s.errCode = i)), c && (s.exception = c), u(s), l(s)
                    }
                    var u = ({
                        success: e,
                        fail: t,
                        complete: r
                    } = {}, n) => {
                        var a = e => {
                            "function" == typeof t && (n ? h.surroundThirdByTryCatch(t, `at api ${n} fail callback function`)(e) : t(e)), "function" == typeof r && (n ? h.surroundThirdByTryCatch(r, `at api ${n} complete callback function`)(e) : r(e))
                        };
                        return {
                            success: t => {
                                void 0 === t.errMsg && n && (t.errMsg = `${n}:ok`), "function" == typeof e && (n ? h.surroundThirdByTryCatch(e, `at api ${n} success callback function`)(t) : e(t)), "function" == typeof r && (n ? h.surroundThirdByTryCatch(r, `at api ${n} complete callback function`)(t) : r(t))
                            },
                            fail: a,
                            failWithMsg: ({
                                code: e,
                                msg: t,
                                errno: r,
                                name: o
                            } = {}) => {
                                var i = {};
                                "number" == typeof r && r > 0 ? (i.errno = r, i.errMsg = `${o||n}:fail`) : (i.errMsg = `${o||n}:fail ${t||""}`, "number" == typeof e && (i.errCode = e)), a(i)
                            }
                        }
                    }
                },
                8602: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Z: () => a
                    });
                    class n {
                        constructor() {
                            this._internal = new Map, this._once = new Map
                        }
                        add(e, t = null) {
                            this._internal.set(e, t)
                        }
                        get(e, t) {
                            var r = this._internal.get(e);
                            return this._once.get(e) && this.off(e), void 0 === r && void 0 !== t ? t : r
                        }
                        compare(e, t) {
                            return this.get(e) === t
                        }
                        off(e) {
                            this._internal.delete(e), this._once.delete(e)
                        }
                        once(e, t = null) {
                            this._once.set(e, !0), this.add(e, t)
                        }
                        set(e, t, r = !1) {
                            return !(!this._internal.get(e) && !r) && (this._internal.set(e, t), !0)
                        }
                    }
                    const a = (() => new n)()
                },
                8246: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        n: () => s
                    });
                    var n = r(3478),
                        a = r(9766),
                        o = {},
                        i = ["onGameLiveStateChange", "onAppEnterForeground", "onAppEnterBackground", "onWebviewFinishLoad", "onWebInvokeAppService", "WEB_INVOKE_APPSERVICE"],
                        s = (e, t) => {
                            var r = (0, a.s)(`WeixinJSBridge-${e}`);
                            o[e] || ((0, n.j)(e, ((...t) => {
                                r.emit(...t), ((e, ...t) => {
                                    if ("undefined" != typeof __IS_MINIGAME_LIVE_SUB_PACKAGE__) {
                                        if (!i.includes(e)) return;
                                        var {
                                            acceptSyncMainPackageNativeEventFromSubPackage: r
                                        } = __appServiceSDK__;
                                        r(e, ...t)
                                    }
                                })(e, ...t)
                            })), o[e] = !0), r.internalOnMethod(t)
                        }
                },
                714: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        $: () => i,
                        T: () => s
                    });
                    var n = r(2073),
                        a = (r(1399), r(6142)),
                        o = r(9105),
                        i = (e = {}) => {
                            (0, n.r3)("readCompressedFile", e, {
                                filePath: "",
                                compressionAlgorithm: ""
                            }) && (0, n.IN)("readCompressedFile", e)
                        },
                        s = ({
                            filePath: e,
                            compressionAlgorithm: t
                        } = {}) => {
                            if (!(0, a.HD)(e)) throw new o.iZ(`invalid filePath: ${e}`);
                            if (!(0, a.HD)(t)) throw new o.iZ(`invalid compressionAlgorithm: ${t}`);
                            var r, i, s;
                            if ((0, n.IN)("readCompressedFileSync", {
                                    filePath: e,
                                    compressionAlgorithm: t,
                                    success(e) {
                                        r = e.data
                                    },
                                    fail(e) {
                                        i = e.errMsg, s = e.errno
                                    }
                                }), i) {
                                var c = new Error(i);
                                throw c.errno = s, c
                            }
                            return r
                        }
                },
                5179: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        N: () => h,
                        p: () => d
                    });
                    var n = r(2073),
                        a = r(7960),
                        o = r(1399),
                        i = r(7445),
                        s = r(6342),
                        c = r(4500),
                        u = r(5133),
                        l = r(6142),
                        p = r(1591),
                        f = !1;
                    s.default.onReady((() => {
                        var e = o.Z.fs;
                        if (e && e.FileReader) {
                            var t = !1,
                                r = i.IS_IOS ? "clicfg_appbrand_ios_native_readfile" : "clicfg_appbrand_native_readfile";
                            (0, c.b)({
                                experimentId: r,
                                experimentType: "Expt",
                                success: e => {
                                    e && 1 === Number(e.testConfig) && ((0, u.Tk)(/readFile(?:Sync)?$/, 1), t = !0)
                                },
                                fail(e) {}
                            });
                            var n = (0, a.J)("bindingReadFile");
                            f = t || n, w.info(`${f?"binding":"jsapi"} readfile, abtest: ${t}, permission: ${n}`)
                        }
                    }));
                    var d = (e = {}) => {
                            if ((0, n.r3)("readFile", e, {
                                    filePath: ""
                                }))
                                if ((0, l.o8)(e.encoding) || (0, l.HD)(e.encoding))
                                    if ((0, l.o8)(e.position) || (0, l.hj)(e.position))
                                        if ((0, l.o8)(e.length) || (0, l.hj)(e.length))
                                            if (f) {
                                                var t, r = o.Z.fs;
                                                (t = e.workerId ? new r.FileReader(e.workerId) : new r.FileReader).onerror = t => (0, n.YG)("readFile", e, t), t.onread = t => (0, n.FE)({
                                                    name: "readFile",
                                                    args: e,
                                                    res: {
                                                        data: t
                                                    }
                                                });
                                                var a = {};
                                                Object.keys(e).forEach((t => {
                                                    var r = e[t];
                                                    ["success", "fail", "complete"].includes(t) || (a[t] = r)
                                                })), t.read(a)
                                            } else(0, n.IN)("readFile", e);
                            else(0, n.YG)("readFile", e, `invalid length: ${e.length}`);
                            else(0, n.YG)("readFile", e, `invalid position: ${e.position}`);
                            else(0, n.YG)("readFile", e, `invalid encoding: ${e.encoding}`)
                        },
                        h = (e, t, r, a, i) => {
                            if (!e || !(0, l.HD)(e)) throw new p.i(`invalid filePath: ${e}`);
                            if (!(0, l.o8)(t) && !(0, l.HD)(t)) throw new p.i(`invalid encoding: ${t}`);
                            if (!(0, l.o8)(r) && !(0, l.hj)(r)) throw new p.i(`invalid position: ${r}`);
                            if (!(0, l.o8)(a) && !(0, l.hj)(a)) throw new p.i(`invalid length: ${a}`);
                            if (f) {
                                var s = o.Z.fs;
                                try {
                                    return i ? s.readFileSync(e, t, i) : s.readFileSync(e, t)
                                } catch (u) {
                                    throw new Error(u)
                                }
                            }
                            var c, u, d;
                            if ((0, n.IN)("readFileSync", {
                                    filePath: e,
                                    encoding: t,
                                    position: r,
                                    length: a,
                                    success(e) {
                                        c = e.data
                                    },
                                    fail(e) {
                                        u = e.errMsg, d = e.errno
                                    }
                                }), u) {
                                var h = new Error(u);
                                throw h.errno = d, h
                            }
                            return c
                        }
                },
                1105: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        hI: () => s
                    });
                    const n = {
                        emitter: new(r(9661).Z),
                        puidToPluginWX: {},
                        pluginIDs: {},
                        pluginVersions: {},
                        pluginInfos: {}
                    };
                    var a = r(7445),
                        o = new WeakMap,
                        i = e => {
                            for (var t in n.puidToPluginWX)
                                if (n.puidToPluginWX[t] === e) return t
                        },
                        s = e => {
                            if ((0, a.isGame)()) {
                                var t = (r = e, o.get(r));
                                return t && t.provider ? t.provider : void 0
                            }
                            return n.pluginIDs[i(e)];
                            var r
                        };
                    Object.keys
                },
                9806: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        Av: () => p,
                        Fr: () => c,
                        Iy: () => f,
                        Y6: () => i,
                        v7: () => l,
                        vB: () => u
                    });
                    var n = r(6342),
                        a = r(7445),
                        o = r(6142);

                    function i(e, t = 0) {
                        return "string" == typeof e ? e.length : "object" == typeof e && null !== e && "number" == typeof e.byteLength ? e.byteLength : t
                    }
                    var s = (() => Object.assign)();

                    function c(e) {
                        return (t = {}) => new Promise(((r, n) => {
                            e(s(t, {
                                success: r,
                                fail: n
                            }))
                        }))
                    }

                    function u() {
                        return a.IS_DEVTOOLS ? "boolean" == typeof n.default.urlCheck ? !n.default.urlCheck : !__devtoolsConfig.urlCheck : !0 === n.default.debug
                    }

                    function l(e, t) {
                        return t.reduce(((t, r) => ((0, o.o8)(e[r]) || (t[r] = e[r]), t)), {})
                    }

                    function p() {
                        return n.default.appLaunchInfo && "singlePage" === n.default.appLaunchInfo.mode
                    }
                    var f = (e, t) => {
                        var r;
                        return function(n, ...a) {
                            if (r) n.success && n.success(r), n.complete && n.complete(r);
                            else {
                                var o = n.success,
                                    i = n.complete;
                                n.success = e => {
                                    r = t(e), o && o(e), i && i(e)
                                }, e(n, ...a)
                            }
                        }
                    }
                },
                4366: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        p: () => i
                    });
                    var n = r(9807),
                        a = r(667),
                        o = [],
                        i = e => {
                            o.push(e)
                        };
                    a.U.on("appServiceCacheMessage", (() => {
                        var e = (0, n.getCacheMsgs)();
                        e.length && (e.forEach((e => {
                            o.forEach((t => {
                                t(e)
                            }))
                        })), (0, n.clearCacheMsgs)())
                    })), a.U.on("appServiceMessage", (e => {
                        o.forEach((t => {
                            "function" == typeof t && t(e)
                        }))
                    }))
                },
                4813: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        o: () => n
                    });
                    var n = e => {
                        e = {
                            data: e,
                            __cmd__: "data"
                        }, f.postMsgToAppService(e)
                    }
                },
                9990: (e, r, n) => {
                    "use strict";
                    n.r(r), n.d(r, {
                        createSharedArrayBuffer: () => p.Y2,
                        onMessage: () => c.p,
                        postMessage: () => l.o
                    });
                    var a = n(6342),
                        o = n(3520),
                        c = n(4366),
                        l = n(4813),
                        p = n(2657);
                    n.g.Reporter = v, n.g.__errorTracer__ = h, n.g._WebAssembly = o._WebAssembly, n.g.Foundation = i, n.g.WXConfig = a.default, n.g.wxConsole = m, n.g.wxNativeConsole = w, n.g.wxPerfConsole = b, n.g.__libVersionInfo__ = t, n.g.wxRunOnDebug = s, n.g.WeixinJSBridge = u
                },
                3520: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        _WebAssembly: () => p
                    });
                    var n = r(667),
                        a = r(1399),
                        o = r(5179),
                        i = r(7445),
                        s = r(714),
                        c = "weapp://wechat-game-runtime";

                    function u(e = {}) {
                        var {
                            filePath: t,
                            encoding: r,
                            success: n,
                            fail: a,
                            complete: o
                        } = e;
                        return fetch(`${c}/wxfs/${btoa(t)}`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                filePath: t
                            })
                        }).then((e => "string" == typeof r ? e.text() : e.arrayBuffer())).then((e => {
                            "function" == typeof n && n({
                                data: e,
                                errMsg: "readFileXhr:ok"
                            }), "function" == typeof o && o({
                                data: e,
                                errMsg: "readFileXhr:ok"
                            })
                        })).catch((e => {
                            e.errMsg = `readFileXhr:fail ${e.message}`, "function" == typeof a && a(e), "function" == typeof o && o(e)
                        }))
                    }
                    var l = null;
                    l = f.WebAssembly, f.WebAssembly ? l = f.WebAssembly : a.Z.WebAssembly ? l = a.Z.WebAssembly : "undefined" != typeof WebAssembly && (l = WebAssembly), l && (globalThis.WXWebAssembly = {
                        Table: l.Table,
                        Memory: l.Memory,
                        Global: l.Global,
                        Instance: l.Instance,
                        instantiate(e, t = {}) {
                            var r = n.q.pluginId;
                            return r && "string" == typeof e && (0 === e.indexOf(`__plugin__/${r}/`) || (e = `__plugin__/${r}/${e=e.replace(/^\//,"")}`)), "string" != typeof e ? Promise.reject(new Error("path must be a string")) : /^(wxfile|https?):/.test(e) ? Promise.reject(new Error("invalid file path")) : new Promise(((r, n) => {
                                if (i.IS_IOS && !i.WK_RENDERER_H5 || i.IS_ANDROID) {
                                    var a = l.instantiate(e, t);
                                    if (i.IS_ANDROID && "function" == typeof a.then) {
                                        var c = !1;
                                        a.then((() => {
                                            c = !0
                                        }));
                                        var p = () => {
                                            setTimeout((() => {
                                                c || p()
                                            }), 5)
                                        };
                                        p()
                                    }
                                    r(a)
                                } else {
                                    var f = o.p;
                                    i.WK_RENDERER_H5 && (f = u), /\.br$/.test(e) && !i.IS_PC && (f = s.$), f({
                                        compressionAlgorithm: "br",
                                        filePath: e,
                                        success(e) {
                                            l.instantiate(e.data, t).then((e => {
                                                r(e)
                                            }), (e => {
                                                n(e)
                                            }))
                                        },
                                        fail({
                                            errMsg: e
                                        }) {
                                            n(new Error(e.replace(/^\w+:fail\s*/, "")))
                                        }
                                    })
                                }
                            }))
                        }
                    });
                    var p = {
                        Table: l.Table,
                        Memory: l.Memory,
                        Global: l.Global,
                        Instance: l.Instance,
                        compile: l.compile,
                        compileStreaming: l.compileStreaming,
                        instantiateStreaming: l.instantiateStreaming,
                        validate: l.validate,
                        CompileError: l.CompileError,
                        LinkError: l.LinkError,
                        Module: l.Module,
                        RuntimeError: l.RuntimeError,
                        instantiate: (e, t, r) => Promise.resolve(l.instantiate(e, t, r))
                    }
                },
                3329: (e, t, r) => {
                    "use strict";
                    r.r(t);
                    var n = r(6142);
                    var a = {
                        String: 0,
                        NaN: "<NaN>",
                        Infinity: e => e > 0 ? "<Infinity>" : "<-Infinity>",
                        Number: 0,
                        Boolean: 0,
                        Null: 0,
                        Undefined: "<Undefined>",
                        Function: e => "" === e.name ? "<Function>" : `<Function: ${e.name}>`,
                        Date: e => `<Date: ${e.toJSON()}>`,
                        RegExp: e => `<RegExp: ${e.toString()}>`,
                        Error: e => `<${e.name}: ${e.message}>${e.stack?"\n"+e.stack:""}`,
                        Symbol: e => `<Symbol: ${e.toString()}>`,
                        Promise: "<Promise>",
                        Map: e => `<Map: size=${e.size}>`,
                        WeakMap: "<WeakMap>",
                        Set: e => `<Set: size=${e.size}>`,
                        WeakSet: "<WeakSet>",
                        ArrayBuffer: e => `<ArrayBuffer: byteLength=${e.byteLength}>`,
                        DataView: e => `<DataView: byteLength=${e.byteLength}, byteOffset=${e.byteOffset}>`,
                        TypedArray: e => `<${e.constructor&&e.constructor.name?e.constructor.name:"TypedArray"}: byteLength=${e.byteLength}, length=${e.length}>`
                    };

                    function o(e) {
                        var t = function(e) {
                            var t = (0, n.Em)(e);
                            if ("Number" === t) {
                                if ((0, n.i2)(e)) return "NaN";
                                if ((0, n.AT)(e)) return "Infinity"
                            } else if ("Object" === t) {
                                if ((0, n.Ft)(e)) return "Null"
                            } else if (t.endsWith("Array") && "Array" !== t && (0, n.fU)(e)) return "TypedArray";
                            return t
                        }(e);
                        return t in a ? a[t] ? (0, n.mf)(a[t]) ? [a[t](e), !0] : [a[t], !0] : [e, !0] : [null, !1]
                    }

                    function i(e) {
                        var t = new WeakMap,
                            r = 0;
                        return function e(a, i) {
                            var s, [c, u] = o(a);
                            return u ? c : r > 3e3 ? "<Hidden>" : t.has(a) ? `<Circular: ${t.get(a)}>` : (t.set(a, i), r++, (0, n.kJ)(a) ? a.map(((t, r) => e(t, `${i}[${r}]`))) : (s = {}, Object.keys(a).forEach((t => {
                                s[t] = e(a[t], `${i}.${t}`)
                            })), s))
                        }(e, "@")
                    }

                    function s(e, t) {
                        try {
                            return (e = Array.prototype.slice.call(e)).map(i)
                        } catch (e) {
                            return void("undefined" != typeof inSnapshotCheck && inSnapshotCheck && "function" == typeof t && t("[snapshot check] transformLogArgs error: ", e))
                        }
                    }
                    var c = "log",
                        u = "info",
                        l = "warn",
                        p = "error",
                        d = "debug",
                        h = "time",
                        v = "timeEnd";
                    var g = r(6342),
                        y = r(7445),
                        _ = () => {};
                    _ = function(e, t) {
                        var r = function(e, t, r = !0) {
                            if (r || e === l || e === p) {
                                var n = s(t);
                                if (void 0 !== n) return {
                                    level: e,
                                    logs: n
                                }
                            }
                        }(e, t, "devtools" === g.default.platform || g.default.debug);
                        r && f.postMsgToAppService({
                            __cmd__: "log",
                            logData: r
                        })
                    }, y.IS_PC || (globalThis.console = {
                        log() {
                            _(c, arguments)
                        },
                        info() {
                            _(u, arguments)
                        },
                        warn() {
                            _(l, arguments)
                        },
                        error() {
                            _(p, arguments)
                        },
                        debug() {
                            _(d, arguments)
                        },
                        time() {
                            _(h, arguments)
                        },
                        timeEnd() {
                            _(v, arguments)
                        },
                        group() {},
                        groupEnd() {}
                    })
                },
                9807: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        clearCacheMsgs: () => b,
                        getAllowPostMessage: () => S,
                        getCacheMsgs: () => m,
                        getInjectFilePath: () => k,
                        getScriptPath: () => w
                    });
                    var n, a = r(667),
                        o = globalThis,
                        s = function(e) {
                            e && (void 0 === n && (n = o.require), e.startsWith("/") && (e = e.substring(1)), n(e))
                        },
                        c = r(2657),
                        u = r(6466),
                        l = 0,
                        p = {},
                        d = {};
                    (0, c.En)((e => {
                        var t = 0,
                            r = 0;
                        Object.assign(e, {
                            new(e) {
                                var r = ++t + l;
                                return p[r] = e, f.postMsgToAppService({
                                    __cmd__: "setSharedBuffer",
                                    __buffer__: e,
                                    __id__: r
                                }, !1), r
                            },
                            get: e => p[e],
                            destroy(e) {
                                delete p[e]
                            },
                            Lock(e, t) {
                                var n = ++r + l;
                                return d[n] = t, f.postMsgToAppService({
                                    __cmd__: "lockSharedBuffer",
                                    __sid__: e,
                                    __lid__: n
                                }), n
                            },
                            Unlock(e, t) {
                                f.postMsgToAppService({
                                    __cmd__: "unlockSharedBuffer",
                                    __sid__: e,
                                    __lid__: t
                                })
                            }
                        })
                    }));
                    var h, v, g, y = !1,
                        _ = [],
                        m = () => _,
                        b = () => {
                            _ = []
                        },
                        w = () => h,
                        k = () => v,
                        S = () => y;
                    a.U.on("codeInjectDone", (() => {
                        y = !0, a.U.emit("appServiceCacheMessage")
                    })), f.onAppServiceMsg((e => {
                        var t = e.__wx_dont_hook_sdk_inner_variable_packkeys_otherwise_you_will_regret_and_occur_bug__;
                        if (delete e.__wx_dont_hook_sdk_inner_variable_packkeys_otherwise_you_will_regret_and_occur_bug__, void 0 === g && (g = (0, u.getSupportMultiContext)()), (e = (0, c.IF)(e)) && e.__cmd__)
                            if ("requireScript" === e.__cmd__)
                                if (g) {
                                    var {
                                        injectFilePath: r,
                                        pluginId: n
                                    } = e.__options__;
                                    v = r, h = e.__script__, a.U.emit("syncWorkerVariable", {
                                        pluginId: n,
                                        injectPath: r,
                                        scriptPath: h
                                    })
                                } else a.q.pluginId = e.__options__ && e.__options__.pluginId, a.q.workerId = e.__options__ && e.__options__.workerId, l = Number(`.${e.__id__}`), s(e.__script__);
                        else "setSharedBuffer" === e.__cmd__ ? p[e.__id__] = e.__buffer__ : "lockSharedBuffer" === e.__cmd__ && "function" == typeof d[e.__lid__] && (d[e.__lid__](), delete d[e.__lid__]);
                        else e = e.data, g ? (t && (e.__wx_dont_hook_sdk_inner_variable_packkeys_otherwise_you_will_regret_and_occur_bug__ = t), y ? a.U.emit("appServiceMessage", e) : _.push(e)) : a.U.emit("appServiceMessage", e)
                    })), i.onFrameworkError((e => {
                        "function" == typeof __wxSourceMapRetrace__ && (e = __wxSourceMapRetrace__(e)), console.error("[worker] Uncaught FrameworkError", e)
                    })), i.onUnhandledError((e => {
                        "function" == typeof __wxSourceMapRetrace__ && (e = __wxSourceMapRetrace__(e)), console.error("[worker] Uncaught", e)
                    })), i.onUnhandledRejection(((e = {}) => {
                        "function" == typeof __wxSourceMapRetrace__ && (e.reason = __wxSourceMapRetrace__(e.reason)), console.error("[worker] Uncaught (in promise)", e.reason)
                    }))
                },
                8131: (e, t, r) => {
                    var {
                        getSupportMultiContext: n,
                        setSupportMultiContext: a
                    } = r(6466), {
                        IS_PC: o
                    } = r(7445), {
                        initWorkerSubContext: s
                    } = r(4904);
                    if (r(3329), r(9807), r(3520), !0 === i.env.isWXLibWorker) e.exports = r(9990), a(!1);
                    else if ("function" == typeof r.g.workerInvokeJsApi) {
                        var c = n(),
                            u = r(3823);
                        c ? (s({
                            exportApi: u,
                            delay: o
                        }), e.exports = null) : e.exports = u
                    }
                    d.hijack()
                },
                667: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        U: () => n,
                        q: () => a
                    });
                    var n = new(r(9661).Z),
                        a = {
                            pluginId: "",
                            workerId: ""
                        }
                },
                4904: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        getWorkerGlobalVariable: () => c,
                        initWorkerSubContext: () => u
                    });
                    var n, a = r(7445),
                        o = r(667),
                        i = (r(4366), new Promise((e => {
                            n = e
                        }))),
                        s = {
                            pluginId: void 0
                        },
                        c = () => s,
                        u = ({
                            delay: e,
                            exportApi: t
                        }) => {
                            var r = g.allocEmpty("worker_sub_context"),
                                n = () => {
                                    var e;
                                    a.IS_PC || g.loadLibFiles(r, ["WAWorkerSubContext.js"], (e => {
                                        console.error("loadlib: WAWorkerSubContext.js fail: ", e)
                                    })), g.subscribe("codeInjectDone", (() => {
                                        o.U.emit("codeInjectDone")
                                    })), g.publish("envReady", {
                                        env: {
                                            ...globalThis.worker,
                                            ...t
                                        },
                                        globalObject: {
                                            setTimeout: setTimeout,
                                            console: console,
                                            setInterval: setInterval,
                                            clearTimeout: clearTimeout,
                                            clearInterval: clearInterval,
                                            WXWebAssembly: globalThis.WXWebAssembly
                                        },
                                        runDevCode: () => i.then((t => {
                                            var {
                                                pluginId: n,
                                                injectPath: o,
                                                scriptPath: i
                                            } = t;
                                            e = i, s.pluginId = n;
                                            var c = o;
                                            return d.overwriteSetPrototypeOf(), d.deepFreezeGlobalObjs([], !1), g.batchLoadJsFiles(r, [a.IS_PC ? "__worker_dev_code__" : c])
                                        })),
                                        contextId: 1,
                                        getScriptPath: () => e
                                    }, [1], !0, !0), g.errorHandler(1, (e => {
                                        var t, n;
                                        t = r, n = e, "function" == typeof f.errorHandler && f.errorHandler(n, t)
                                    }))
                                };
                            e ? setTimeout(n) : n()
                        };
                    o.U.on("syncWorkerVariable", (e => {
                        n(e)
                    }))
                },
                3823: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        connectSocket: () => Li,
                        createInnerAudioContext: () => Vo,
                        createSharedArrayBuffer: () => Ko.Y2,
                        downloadFile: () => Ri,
                        env: () => Ni,
                        getFileSystemManager: () => Ti,
                        onMessage: () => zo.p,
                        postMessage: () => Jo.o,
                        request: () => yn,
                        uploadFile: () => Sn
                    });
                    var n = r(6342),
                        o = {};
                    n.default.onReady((() => {
                        "object" == typeof n.default.env && (o.USER_DATA_PATH = n.default.env.USER_DATA_PATH)
                    }));
                    const s = o;
                    var c = {
                        USER_DATA_PATH: null,
                        CLIENT_DATA_PATH: null
                    };
                    n.default.onReady((() => {
                        "object" == typeof n.default.env && Object.assign(c, n.default.env)
                    }));
                    const u = c;
                    var l = r(7445),
                        p = r(2073),
                        f = (JSON.parse, JSON.stringify, r(9766)),
                        d = r(5125),
                        g = "",
                        y = !1,
                        _ = (0, f.s)("networkstatusChange"),
                        m = (0, f.s)("networkWeakChange"),
                        b = (0, f.s)("networkTypeReady"),
                        k = e => {
                            (0, p.IN)("getNetworkType", e)
                        },
                        S = _.onMethod,
                        I = (_.offMethod, m.onMethod, m.offMethod, () => g),
                        x = (b.onMethod, () => y);
                    "undefined" != typeof IS_SDK_PACKAGE || ((0, p.jQ)("onNetworkStatusChange", ((e = {}) => {
                        g = e.networkType, e.signalStrength, d.Z.currentNetworkType = g, _.emit(e), (0, p.nY)("onNetworkStatusChange", e)
                    })), (0, p.jQ)("onNetworkWeakChange", ((e = {}) => {
                        m.emit(e)
                    }))), n.default.onReady((() => {
                        n.default.networkType && (g = n.default.networkType), k({
                            success(e) {
                                g = e.networkType, e.signalStrength, d.Z.currentNetworkType = g, y = e.hasSystemProxy, b.emit(g)
                            }
                        })
                    }));
                    var T = e => {
                        var t = "";
                        return Object.keys(e).forEach(((r, n) => {
                            try {
                                var a = `${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`;
                                0 !== n && (t += "&"), t += a
                            } catch (e) {}
                        })), t
                    };
                    const A = {},
                        C = 0,
                        E = "";
                    var P, O = r(9370),
                        R = 0,
                        M = [],
                        D = Math.random,
                        j = new Set;
                    n.default.onReady((() => {
                        P = Date.now()
                    }));
                    var L = () => {
                            var e = JSON.stringify({
                                business: "mmbizwxaservicequality",
                                dataArray: M,
                                appType: v.getAppType()
                            }, null, 2);
                            (0, p.IN)("reportRealtimeAction", {
                                actionData: e
                            }), M = []
                        },
                        N = (e, t, r, a, o, i, s, c = 0, u = 0, p = {}, f = 0, h = {}, g, y = !0, _ = void 0, m = 0, b = {}, w = 0) => {
                            var k;
                            t.length > 1024 && (t = t.substring(0, 1024));
                            var S = "",
                                x = "",
                                N = 0,
                                F = "";
                            if ((0, l.isGame)() ? (x = T(A), N = C, F = E) : (N = d.Z.scene, F = d.Z.sceneNote), void 0 !== O.hr) {
                                var W = O.hr.getCurrentPages();
                                if (W && W.length > 0) {
                                    var $ = W[W.length - 1];
                                    $ && (S = $.route, x = $.__displayReporter && $.__displayReporter.showOptions && $.__displayReporter.showOptions.query)
                                }
                            }!_ && o && /超时|timeout/.test(o) && (_ = 5);
                            var B = JSON.stringify(h),
                                U = [e, t, r, a, o, v.getAppType(), i, c, I(), S, x, u, T(p), N, F, g, _, f, B, null === (k = n.default.wxAppInfo) || void 0 === k ? void 0 : k.maxRequestConcurrent, Date.now() - P, m, w].map(encodeURIComponent).join(","),
                                q = !1;
                            if (a < 5e3 && 1 == r ? D() < .01 && (q = !0) : q = !0, y || (q = !1), q) {
                                var H, G = [e, t, r, a, o, v.getAppType(), i, c, I(), S, x, u, T(p), N, F, _, f, B, null === (H = n.default.wxAppInfo) || void 0 === H ? void 0 : H.maxRequestConcurrent, Date.now() - P, m, w].map(encodeURIComponent).join(",");
                                v.reportKeyValue({
                                    key: "NetworkAPI2",
                                    value: G
                                })
                            }
                            v.reportKeyValue({
                                key: "NetworkAPI",
                                value: U
                            }), v.reportIDKey({
                                key: `${e}_${1===r?"ok":"fail"}`
                            });
                            var {
                                isHitRule: V,
                                rawUrl: K,
                                rawHost: z,
                                accelerateType: J,
                                host: Y,
                                accelerateId: Z,
                                __AccelFailReqId__: Q
                            } = b, {
                                domainLookUpStart: X,
                                domainLookUpEnd: ee,
                                connectStart: te,
                                connectEnd: re,
                                SSLconnectionStart: ne,
                                SSLconnectionEnd: ae,
                                requestStart: oe,
                                requestEnd: ie,
                                responseStart: se,
                                responseEnd: ce,
                                socketReused: ue,
                                peerIP: le
                            } = p;
                            1 === V && [1, 2].includes(r) && v.reportKeyValue({
                                    key: "AccelerateNetwork",
                                    value: [e, encodeURIComponent(K.substring(0, 1024)), t, z, Y, r, a, o, v.getAppType(), i, c, I(), u, T(p), N, _, V, J, Z, ee - X, re - te, ae - ne, ie - oe, ce - se, ue ? 1 : 0, le, Q].join(",")
                                }), M.push([e, t, r, i || "", a, o, I(), s ? "1" : "0", v.getAppType(), c].map((e => {
                                    var t;
                                    try {
                                        t = encodeURIComponent(e)
                                    } catch (r) {
                                        t = e
                                    }
                                    return t
                                })).join(",")),
                                function(e) {
                                    if (0 === j.size) return;
                                    try {
                                        j.forEach((t => t(e)))
                                    } catch (e) {}
                                }({
                                    functionName: e,
                                    keyParam: t,
                                    result: r,
                                    costTime: a,
                                    errorMsg: o,
                                    statusCode: i,
                                    dataLength: c,
                                    responseDataLength: u,
                                    profile: p,
                                    __skipDomainCheck__: s
                                }), Date.now() - R >= 6e4 && (R = Date.now(), setTimeout(L, 6e4))
                        };
                    var F = r(6142);
                    class W {
                        constructor(e = "", t = !1) {
                            this.type = "", this.surround = !1, this.eventMap = new Map, this.type = e, this.surround = t
                        }
                        on(e, t) {
                            (0, F.mf)(t) ? this.eventMap.has(e) ? this.eventMap.get(e).add(t) : this.eventMap.set(e, new Set([t])): console.error("EmitterError: callback must be a function")
                        }
                        off(e, t) {
                            var r = this.eventMap.get(e);
                            "function" != typeof t ? null == r || r.clear() : null == r || r.delete(t)
                        }
                        emit(e, ...t) {
                            var r = [...this.eventMap.get(e) || []],
                                n = `at ${this.type}${e} callback function`;
                            r.forEach((e => this.surround ? ((e, t, ...r) => {
                                if (void 0 !== h) h.surroundThirdByTryCatch(e, t)(...r);
                                else if ("undefined" != typeof __subContextEngine__) __subContextEngine__.surroundThirdByTryCatch(e, t)(...r);
                                else try {
                                    e(...r)
                                } catch (e) {
                                    console.error(`thirdScriptError\n${null==e?void 0:e.message};${t}`), console.error(e)
                                }
                            })(e, n, ...t) : e(...t)))
                        }
                        removeAllListeners(e) {
                            this.off(e)
                        }
                        getListenersLength(e) {
                            var t;
                            return (null === (t = this.eventMap.get(e)) || void 0 === t ? void 0 : t.size) || 0
                        }
                    }
                    var $ = r(9806);
                    class B {
                        constructor({
                            mode: e,
                            size: t,
                            lastAccessedTime: r,
                            lastModifiedTime: n
                        }) {
                            this.mode = e, this.size = t, this.lastAccessedTime = r, this.lastModifiedTime = n
                        }
                        _checkModeProperty(e) {
                            return (61440 & this.mode) === e
                        }
                        isDirectory() {
                            return this._checkModeProperty(16384)
                        }
                        isFile() {
                            return this._checkModeProperty(32768)
                        }
                    }
                    var U = (e, t) => {
                            var r = !0;
                            if (["mode", "size", "lastAccessedTime", "lastModifiedTime"].forEach((t => {
                                    r = r && void 0 !== e[t]
                                })), r) e.stats = new B(e), delete e.mode, delete e.size, delete e.lastAccessedTime, delete e.lastModifiedTime;
                            else if (e.stats && 1 === Object.keys(e.stats).length && e.stats[""]) e.stats = new B(e.stats[""]);
                            else {
                                var n = [],
                                    a = e.stats;
                                l.IS_ANDROID && (a = e, n.push({
                                    path: "/",
                                    stats: H(t)
                                })), Object.keys(a).forEach((e => {
                                    if ("errMsg" !== e) {
                                        var t = a[e];
                                        "" === e && (e = "/"), n.push({
                                            path: e,
                                            stats: new B(t)
                                        }), delete a[e]
                                    }
                                })), e.stats = n
                            }
                        },
                        q = (e = {}) => {
                            (0, p.r3)("stat", e, {
                                path: ""
                            }) && (0, p.IN)("stat", e, {
                                beforeSuccess: t => {
                                    U(t, e.path)
                                }
                            })
                        },
                        H = (e, t = !1) => {
                            if (!e || "string" != typeof e) throw new Error("path must be a string");
                            var r, n, a;
                            if ((0, p.IN)("statSync", {
                                    path: e,
                                    recursive: t,
                                    success(t) {
                                        U(t, e), r = t.stats
                                    },
                                    fail(e) {
                                        n = e.errMsg, a = e.errno
                                    }
                                }), n) {
                                var o = new Error(n);
                                throw o.errno = a, o
                            }
                            return r
                        };
                    class G {
                        constructor(e) {
                            if (this._status = "pending", this._return = void 0, this._processors = [], "function" != typeof e) throw new TypeError("Promise resolver is not a function");
                            try {
                                e((e => {
                                    "pending" === this._status && (this._status = "then", this._return = e, this._consume())
                                }), (e => {
                                    "pending" === this._status && (this._status = "catch", this._return = e, this._consume())
                                }))
                            } catch (e) {
                                this._status = "catch", this._return = e, this._consume()
                            }
                        }
                        _consume() {
                            if ("pending" !== this._status) {
                                var e;
                                do {
                                    e = this._processors.shift()
                                } while (e && e.type !== this._status);
                                if (e) try {
                                    this._return = e.func(this._return), this._status = "then"
                                } catch (e) {
                                    this._return = e, this._status = "catch"
                                } finally {
                                    this._consume()
                                }
                            }
                        }
                        then(e) {
                            return this._processors.push({
                                func: e,
                                type: "then"
                            }), this._consume(), this
                        } catch (e) {
                            return this._processors.push({
                                func: e,
                                type: "catch"
                            }), this._consume(), this
                        }
                        static resolve(e) {
                            return new G((t => t(e)))
                        }
                        static reject(e) {
                            return new G((() => {
                                throw e
                            }))
                        }
                    }
                    S((e => {
                        var t;
                        t = "wifi" === e.networkType ? 1 : 2, Object.keys(V).forEach((e => {
                            V[e].network !== t && (V[e].needUpdateDns = !0, V[e].network = t, V[e].doingDns = !1)
                        }))
                    }));
                    var V = {};
                    var K = r(1399);
                    class z {
                        constructor() {}
                        createTask(e) {
                            throw new Error("not impl")
                        }
                        onTaskStateChange(e) {
                            throw new Error("not impl")
                        }
                        operate() {
                            throw new Error("not impl")
                        }
                    }
                    var J = new W("RequestTaskJsBindingInvoker"),
                        Y = {};
                    var Z = e => {
                        delete Y[e.id]
                    };

                    function Q(e) {
                        var t = this.responseInfo;
                        Object.assign(t, e), J.emit("stateChange", {
                            requestTaskId: this.id,
                            state: "headersReceived",
                            header: e.header,
                            cookies: e.cookies || {}
                        })
                    }

                    function X(e) {
                        this.responseInfo.data = e
                    }

                    function ee(e) {
                        J.emit("stateChange", {
                            requestTaskId: this.id,
                            state: "progressUpdate",
                            type: e.type,
                            totalBytesWritten: e.totalBytesWritten,
                            totalBytesExpectedToWrite: e.totalBytesExpectedToWrite,
                            totalBytesSent: e.totalBytesSent,
                            totalBytesExpectedToSend: e.totalBytesExpectedToSend
                        })
                    }

                    function te(e = {}) {
                        var t = this.responseInfo;
                        t.header = e.header, t.statusCode = e.statusCode
                    }

                    function re(e = {}) {
                        var t = this.responseInfo,
                            r = {
                                requestTaskId: this.id,
                                state: "success",
                                header: t.header,
                                data: t.data,
                                statusCode: t.statusCode,
                                clientInfo: e.clientInfo
                            };
                        r.clientInfo || (this.__mockClientInfo.CGICallbackTimestamp = Date.now(), this.__mockClientInfo.wxlibCallbackTimestamp = Date.now(), r.clientInfo = this.__mockClientInfo), e.profile && (r.profile = e.profile), void 0 === r.data && "text" === this.invokeArgs.responseType && (r.data = ""), J.emit("stateChange", r), Z(this)
                    }

                    function ne(e) {
                        e.errno;
                        var t = {
                            requestTaskId: this.id,
                            state: "fail",
                            clientInfo: e.clientInfo,
                            errno: e.errno,
                            errMsg: e.errMsg,
                            errCode: e.errCode
                        };
                        t.clientInfo || (this.__mockClientInfo.CGICallbackTimestamp = Date.now(), this.__mockClientInfo.wxlibCallbackTimestamp = Date.now(), t.clientInfo = this.__mockClientInfo), J.emit("stateChange", t), Z(this)
                    }
                    var ae = r(7960),
                        oe = !1;
                    n.default.onReady((() => {
                        (0, ae.J)("requestTaskJsBinding") && l.IS_ANDROID && 1 === Number(n.default.expt.clicfg_enable_appbrand_request_binding_android) && (oe = !0)
                    }));
                    var ie = {
                            Request: {
                                jsBinding: new class extends z {
                                    constructor(...e) {
                                        super(...e), this.jsapiVersion = 1
                                    }
                                    createTask(e) {
                                        var t = new(0, K.Z.RequestTask)(e);
                                        Y[t.id] = t;
                                        var r = Date.now();
                                        t.__mockClientInfo = {
                                            invokeTime: r,
                                            beginCGITimestamp: r,
                                            CGICallbackTimestamp: r,
                                            wxlibCallbackTimestamp: r
                                        };
                                        t.responseInfo = {}, t.invokeArgs = e, t.onResponseStarted = Q, t.onDataReceived = X, t.onProgressUpdate = ee, t.onRedirectReceived = te, t.onSucceeded = re, t.onFailed = ne, t.operate({
                                            operationType: "request"
                                        });
                                        var n = {
                                            requestTaskId: t.id,
                                            errMsg: "createRequestTask:ok"
                                        };
                                        e.success(n), e.complete(n)
                                    }
                                    onTaskStateChange(e) {
                                        J.on("stateChange", e)
                                    }
                                    operate(e) {
                                        var {
                                            operationType: t
                                        } = e, r = Y[e.requestTaskId];
                                        e.requestTaskId, r && "abort" === t && r.operate({
                                            operationType: "abort"
                                        })
                                    }
                                }
                            }
                        },
                        se = r(9105),
                        ce = r(4287);
                    var ue = {},
                        le = {},
                        pe = {},
                        fe = (e, t, r) => {
                            if (pe[e]) return pe[e];
                            var n, a = e && e.indexOf(":");
                            n = (n = -1 !== a ? e.slice(0, a) : e).toLowerCase();
                            var o = r ? {
                                sdkApiName: "getFreeDNSInfo",
                                apiName: "webapi_wxahttpdns_getfreehostip",
                                reqData: {
                                    domain: n
                                }
                            } : {
                                sdkApiName: "getDNSInfo",
                                apiName: "webapi_wxahttpdns_gethostip",
                                reqData: {
                                    domain: n,
                                    service_id: t
                                }
                            };
                            return pe[e] = (0, p.Qh)(o).then((t => {
                                delete pe[e];
                                var n, {
                                    wxa_state: a,
                                    ttl: o,
                                    hit_cache: i,
                                    ip_list: s = [],
                                    ip: c
                                } = t.data;
                                n = null != s && s.length ? s[0] : c;
                                var u = s.slice(1);
                                if (0 === a) return ue[e] = {
                                    ip: n,
                                    expireTime: 1e3 * o + Date.now(),
                                    candidateIps: u
                                }, r ? {
                                    ...ue[e],
                                    hitCache: i
                                } : ue[e];
                                throw new Error(a)
                            })).catch((t => {
                                if (!r && ("602103" == (null == t ? void 0 : t.errno) || "602106" == (null == t ? void 0 : t.errno) || "602107" == (null == t ? void 0 : t.errno) || "602105" == (null == t ? void 0 : t.errno) || "602104" == (null == t ? void 0 : t.errno))) return {
                                    __break__: !0,
                                    __rawError__: [t]
                                };
                                throw delete pe[e], t
                            })), pe[e]
                        },
                        de = e => {
                            var t = ue[e];
                            return t ? {
                                expired: Date.now() > t.expireTime,
                                ip: t.ip
                            } : null
                        };
                    S((() => {
                        ue = {}, le = {}, pe = {}
                    }));
                    var he = Symbol("skipDNS");

                    function ve({
                        args: e = {},
                        host: t,
                        skipDNS: r,
                        banHttpDNS: n,
                        options: a
                    }) {
                        var o, i;
                        if (r !== he && !n) {
                            var s, c, {
                                enableHttpDNS: u,
                                httpDNSServiceId: l
                            } = e;
                            if (null !== (o = a.__innerRequestOptions__) && void 0 !== o && o.ip) return {
                                host: t,
                                ip: a.__innerRequestOptions__.ip,
                                candicateIps: null === (c = a.__innerRequestOptions__) || void 0 === c ? void 0 : c.candicateIps
                            };
                            if (null === (null === (i = a.__innerRequestOptions__) || void 0 === i ? void 0 : i.ip)) return {};
                            if (!x()) {
                                if (!0 === u && (0, F.HD)(l)) {
                                    var p = de(t);
                                    return p && !1 === p.expired ? (s = p.ip, {
                                        host: t,
                                        ip: s
                                    }) : fe(t, l).then((e => {
                                        if (s = e.ip, e.__break__) return {
                                            rawHttpDnsError: e.__rawError__,
                                            retryCount: a.retryCount ? a.retryCount + 1 : 1
                                        };
                                        var r = e.candidateIps;
                                        return {
                                            host: t,
                                            ip: s,
                                            candicateIps: r
                                        }
                                    }))
                                }
                                return !0 === u ? Promise.reject(new Error("invalid httpDNSServiceId")) : void 0
                            }
                        }
                    }

                    function ge({
                        host: e,
                        ip: t,
                        compatUrls: r
                    }) {
                        var n = ((e, t) => {
                            var r = le[e];
                            return t ? !(r && r === t || (delete le[e], 0)) : (delete le[e], !1)
                        })(e, t);
                        return t ? {
                            port: r.port,
                            host: r.host,
                            url: r.url,
                            forbidReuse: n
                        } : {
                            forbidReuse: n
                        }
                    }
                    var ye, _e = r(2517),
                        me = Symbol("pre"),
                        be = Symbol("next"),
                        we = Symbol("key");
                    class ke {
                        constructor(e) {
                            if (!("number" == typeof e && e > 0)) throw new Error("DoubleLinkedListLRUStore constructor params maxCacheLength must be number");
                            this.cacheMap = {}, this.cacheHead = void 0, this.cacheTail = void 0, this.cacheLength = 0, this.maxCacheLength = e
                        }
                        getCache(e) {
                            if (this.cacheMap[e]) return this.cacheMap[e]
                        }
                        updateCache(e) {
                            var t = e[me],
                                r = e[be];
                            t && r ? (t[be] = r, r[me] = t, this.cacheTail[be] = e, e[me] = this.cacheTail, e[be] = null, this.cacheTail = e) : t || r && (r[me] = null, this.cacheHead = r, this.cacheTail[be] = e, e[me] = this.cacheTail, e[be] = null, this.cacheTail = e)
                        }
                        insertCache(e, t) {
                            if (t[we] = e, this.cacheTail ? (t[be] = null, t[me] = this.cacheTail, this.cacheTail[be] = t, this.cacheTail = t) : (this.cacheTail = t, t[be] = null, this.cacheHead = t, t[me] = null), this.cacheMap[e] = t, this.cacheLength >= this.maxCacheLength) {
                                delete this.cacheMap[this.cacheHead[we]];
                                var r = this.cacheHead[be];
                                r[me] = null, this.cacheHead[be] = null, this.cacheHead[me] = null, this.cacheHead = r
                            } else this.cacheLength++
                        }
                    }
                    var Se = {},
                        Ie = {
                            wxGA: 846,
                            Kanata: 933,
                            reportIDKey: 847,
                            reportKeyValue: 848,
                            getXLogManager: 849,
                            getUserCloudStorage: 883,
                            getFriendCloudStorage: 884,
                            getGroupCloudStorage: 885,
                            getPotentialFriendList: 886,
                            getGroupInfo: 887,
                            shareMessageToFriend: 888,
                            getUserInfo: 915,
                            getUserCloudStorageKeys: 950,
                            modifyFriendInteractiveStorage: 951,
                            WebAssembly: 962,
                            Function: 963,
                            getGameLifeProfile: 964,
                            getGreetingControlInfo: 965,
                            interactGameLifeTag: 966,
                            openGameLifeAccountInfo: 979,
                            openGameLifeMiniGameTransfer: 980,
                            gameTransfer: 981,
                            createCanvas: 987,
                            createScreenCanvas: 987,
                            createWebView: 991,
                            navigateToMiniProgramDirectly: 1002,
                            coverview: 1005,
                            launchApplication: 1006,
                            privateOpenUrl: 1007,
                            launchApplicationDirectly: 1008,
                            encode: 1022,
                            decode: 1023,
                            onStoreEmoticonSelect: 1053,
                            offStoreEmoticonSelect: 1053,
                            PIXI: 1057,
                            TWEEN: 1058,
                            onKeyboardHeightChange: 1062,
                            offKeyboardHeightChange: 1062,
                            allowBufferWASM: 1068,
                            showUserGrantInfoModal: 1073,
                            __wxSourceMapRetrace__: 1074,
                            setPluginLoginAuth: 1078,
                            createScreenCanvas2: 1096,
                            clearCreateCanvas: 1097,
                            getABTestConfig: 1108,
                            getSelfUserInfo: 1110,
                            gamelifeManager: 1111,
                            getGameLifeRedCount: 1111,
                            onGameLifeMsg: 1111,
                            offGameLifeMsg: 1111,
                            onWebRTCLoadedMetaData: 1116,
                            offWebRTCLoadedMetaData: 1116,
                            requestForPlugin: 1118,
                            requestSubscribeSystemMessage: 1124,
                            skipDNSRequest: 1125,
                            useRequest: 1126,
                            requestSubscribeSystemMessageSkipTouchCheck: 1127,
                            requirePlugin: 1150,
                            transformFakePath2RealPath: 1175,
                            getPrivateFileSystemManager: 1188,
                            createWKVideo: 1293,
                            uploadFile: 1308,
                            gameRecorderOperateVideo: 1310,
                            gameRecorderGetVideoPath: 1310,
                            openCustomerServiceConversationDirectly: 1316
                        },
                        xe = (e, t) => {
                            var r = Ie[t];
                            return void 0 === r ? (console.error("请在 PluginPermissionIndex 中配置需要查询的权限位"), !1) : Se[e] ? Se[e][r] : ((e => {
                                if (Se[e]) return Se[e];
                                var t = {},
                                    r = Object.values(Ie);
                                (0, p.IN)("getPluginPermissionBytes", {
                                    pluginList: [{
                                        indexes: r,
                                        pluginId: e
                                    }],
                                    success(n) {
                                        var a = n.pluginPermissionMap;
                                        if (a && a[e]) {
                                            for (var o = 0; o < a[e].length; o++) {
                                                var i = r[o];
                                                t[i] = 1 === a[e][o]
                                            }
                                            Se[e] = t
                                        }
                                    },
                                    fail(e) {}
                                })
                            })(e), Se[e] && Se[e][r])
                        },
                        Te = r(1105),
                        Ae = function({
                            args: e = {}
                        }) {
                            var {
                                ip: t
                            } = e;
                            if (t) {
                                var r = (0, Te.hI)(this);
                                return r && xe(r, "skipDNSRequest") ? {
                                    skipDNS: he,
                                    ip: e.ip
                                } : {}
                            }
                        },
                        Ce = {
                            isHitRule: 0,
                            enableAcc: 0,
                            requestHostMap: {},
                            socketHostMap: {},
                            forceDisableAcc: 0
                        },
                        Ee = {
                            none: 0,
                            accelerate: 1,
                            disable: 2,
                            retryAccelFallback: 3,
                            forceDisableAcc: 4
                        },
                        Pe = {
                            [Ee.none]: "none",
                            [Ee.accelerate]: "accelerate",
                            [Ee.disable]: "disable",
                            [Ee.retryAccelFallback]: "retryAccelFallback",
                            [Ee.forceDisableAcc]: "forceDisableAcc"
                        };
                    n.default.onReady((() => {}));
                    var Oe = e => {
                        var t;
                        return (null == e || null === (t = e.header) || void 0 === t ? void 0 : t["EO-LOG-UUID"]) || ""
                    };

                    function Re(e) {
                        var {
                            host: t,
                            args: r,
                            compatUrls: n,
                            options: a
                        } = e, {
                            requestHostMap: o,
                            isHitRule: i
                        } = Ce, {
                            accelerateOptions: s,
                            ...c
                        } = (({
                            host: e,
                            hostMap: t,
                            compatUrls: r,
                            args: n,
                            __retryAccelFallback__: a,
                            __AccelFailReqId__: o
                        }) => {
                            var {
                                disableAccelerate: i,
                                url: s
                            } = n, c = t[e], {
                                disable: u,
                                accelerate: l,
                                retryAccelFallback: p,
                                none: f,
                                forceDisableAcc: d
                            } = Ee, h = f;
                            return c && (i ? h = u : a ? (h = p, Ce.forceDisableAcc = 1) : 1 === Ce.forceDisableAcc && (h = d)), {
                                accelerateOptions: Object.assign({
                                    accelerateType: h
                                }, o ? {
                                    __AccelFailReqId__: o
                                } : {})
                            }
                        })({
                            host: t,
                            compatUrls: n,
                            hostMap: o,
                            args: r,
                            __retryAccelFallback__: a.__retryAccelFallback__,
                            __AccelFailReqId__: a.__AccelFailReqId__
                        });
                        return Object.assign({}, c, {
                            accelerateOptions: Object.assign({}, s, {
                                isHitRule: i,
                                rawHost: t,
                                rawUrl: r.url
                            })
                        })
                    }
                    var Me = ({
                            options: e,
                            res: t,
                            task: r
                        }) => {
                            var n = Oe(t) || r.uniqueId,
                                {
                                    isHitRule: a,
                                    rawUrl: o,
                                    rawHost: i,
                                    accelerateType: s
                                } = e.accelerateOptions,
                                c = e.originArgs.url,
                                u = e.host,
                                {
                                    profile: p,
                                    statusCode: f,
                                    errno: h,
                                    errMsg: g
                                } = t,
                                {
                                    domainLookUpStart: y,
                                    domainLookUpEnd: _,
                                    connectStart: m,
                                    connectEnd: b,
                                    SSLconnectionStart: w,
                                    SSLconnectionEnd: k,
                                    requestStart: S,
                                    requestEnd: x,
                                    responseStart: A,
                                    responseEnd: E,
                                    socketReused: P,
                                    peerIP: O
                                } = p || {};
                            return v.reportKeyValue({
                                key: "AccelerateNetwork",
                                value: ["request", encodeURIComponent(o.substring(0, 1024)), encodeURIComponent(c.substring(0, 1024)), i, u, 2, Date.now() - e.currentRequestStartTime, g, v.getAppType(), f, 0, I(), 0, T(p || {}), (0, l.isGame)() ? C : d.Z.scene, h, a, s, n, _ - y, b - m, k - w, x - S, E - A, P, O].join(",")
                            }), delete e.accelerateOptions, e.originArgs.url = o, {
                                args: e.originArgs,
                                innerArgs: {
                                    __retryAccelFallback__: !0,
                                    __AccelFailReqId__: n
                                }
                            }
                        },
                        De = !1;
                    n.default.onReady((() => {
                        l.IS_IOS && 1 === Number(n.default.expt.clicfg_appbrand_ios_enable_async_create_request_task) && (De = !0)
                    }));
                    var je = (0, $.Fr)(q),
                        Le = 0,
                        Ne = new WeakMap,
                        Fe = new WeakMap,
                        We = new WeakMap,
                        $e = new WeakMap,
                        Be = new WeakMap,
                        Ue = new WeakMap,
                        qe = new WeakMap,
                        He = new WeakMap,
                        Ge = new WeakMap,
                        Ve = new WeakMap,
                        Ke = new WeakMap,
                        ze = {},
                        Je = new W("Network", !0),
                        Ye = w.createLogger("NetworkTask"),
                        Ze = new WeakMap,
                        Qe = {},
                        Xe = new WeakMap;
                    class et {
                        constructor(e, {
                            taskType: t,
                            beforeSend: r,
                            beforeSuccess: a,
                            beforeFail: o
                        }) {
                            var i, s, c = Le++;
                            if (this.uniqueId = 1e4 * Date.now() + Math.round(9999 * Math.random()), Ne.set(this, c), We.set(this, "waiting"), $e.set(this, e), Be.set(this, t), He.set(this, r), Ge.set(this, a), (0, F.mf)(o) && Ve.set(this, o), this.taskInvoker = ((e, t) => {
                                    if ("Request" === e && K.Z.RequestTask && (t.useHighPerformanceMode || oe)) return ie.Request.jsBinding
                                })(t, e), !this.taskInvoker) {
                                var u = !1;
                                ((e => {
                                    if (l.WK_RENDERER_H5) return !0;
                                    if (l.IS_ANDROID) switch (e) {
                                        case "Download":
                                        case "Request":
                                            return !0;
                                        default:
                                            return !1
                                    } else {
                                        if (!l.IS_IOS) return !1;
                                        if ("Request" === e && 1 === Number(n.default.expt.clicfg_appbrand_ios_enable_async_create_request_task)) return !0
                                    }
                                })(t) || (l.IS_IOS || l.IS_ANDROID) && e.forceCellularNetwork) && (u = !0), Ke.set(this, u)
                            }
                            var p = new G(((e, t) => {
                                i = e, s = t
                            }));
                            Ze.set(this, {
                                promise: p,
                                resolve: i,
                                reject: s
                            });
                            var f = () => {
                                st.call(this) ? (qe.set(this, [Date.now()]), ze[t].taskQueue.push({
                                    id: c,
                                    item: this
                                })) : rt.call(this)
                            };
                            (0, F.mf)(e.customCheck) ? e.customCheck(e, (r => {
                                r ? tt(t, e, r) : f()
                            })): f()
                        }
                        abort() {
                            if (Ye.info(`[${Be.get(this)}][${Ne.get(this)}]abort()`), "waiting" === We.get(this)) {
                                Ye.info(`[${Be.get(this)}][${Ne.get(this)}] waiting=true`);
                                var e = ze[Be.get(this)].taskQueue.findIndex((e => e.id === Ne.get(this)));
                                e > -1 && (ze[Be.get(this)].taskQueue.splice(e, 1), (0, p.YG)(ze[Be.get(this)].functionName, $e.get(this), "abort")), We.set(this, "done")
                            } else {
                                var t = Ze.get(this).promise,
                                    r = $e.get(this);
                                t.then((() => {
                                    var e = {
                                        [`${Be.get(this).toLowerCase()}TaskId`]: Fe.get(this),
                                        operationType: "abort",
                                        contextId: r.contextId
                                    };
                                    this.taskInvoker ? this.taskInvoker.operate(e) : (0, p.IN)(`operate${Be.get(this)}Task`, e)
                                }))
                            }
                        }
                        onProgressUpdate(e) {
                            Ze.get(this).promise.then((() => {
                                Je.on(`${Be.get(this)}${Fe.get(this)}progressUpdate`, e)
                            }))
                        }
                        offProgressUpdate(e) {
                            Ze.get(this).promise.then((() => {
                                Je.off(`${Be.get(this)}${Fe.get(this)}progressUpdate`, e)
                            }))
                        }
                        onHeadersReceived(e) {
                            Ze.get(this).promise.then((() => {
                                Je.on(`${Be.get(this)}${Fe.get(this)}headersReceived`, e)
                            }))
                        }
                        offHeadersReceived(e) {
                            Ze.get(this).promise.then((() => {
                                Je.off(`${Be.get(this)}${Fe.get(this)}headersReceived`, e)
                            }))
                        }
                        onChunkReceived(e) {
                            Ze.get(this).promise.then((() => {
                                Je.on(`${Be.get(this)}${Fe.get(this)}chunked`, e)
                            }))
                        }
                        offChunkReceived(e) {
                            Ze.get(this).promise.then((() => {
                                Je.off(`${Be.get(this)}${Fe.get(this)}chunked`, e)
                            }))
                        }
                    }

                    function tt(e, t, r) {
                        (0, p.FE)({
                            name: ze[e].functionName,
                            args: {
                                success: t.success,
                                fail: t.fail,
                                complete: t.complete
                            },
                            success: !1,
                            errMsg: r
                        })
                    }

                    function rt() {
                        var e = $e.get(this),
                            t = Be.get(this),
                            r = Ke.get(this);
                        We.set(this, "sending"), Ue.set(this, Date.now());
                        var n = nt.call(this);
                        r ? Ze.get(this).promise.then((() => {
                            at.call(this)
                        })).catch((r => {
                            tt(t, e, r)
                        })) : n ? tt(t, e, n) : Fe.get(this) ? at.call(this) : Ze.get(this).promise.then((() => {
                            at.call(this)
                        }));
                        setTimeout((() => {
                            N(ze[t].functionName, e.url, null, 0, null, null, e.__skipDomainCheck__, null, null, {}, null, {}, this.uniqueId, !1, null, 0, this.taskInvoker ? this.taskInvoker.jsapiVersion : 0)
                        }), 0)
                    }

                    function nt() {
                        var e, t = Be.get(this),
                            r = $e.get(this);
                        ze[t].currentTaskCount++;
                        var n = {
                                data: r.data,
                                url: r.url,
                                header: r.header,
                                method: r.method,
                                timeout: "number" == typeof r.timeout ? r.timeout : 0,
                                enableHttp2: !0 === r.enableHttp2,
                                enableQuic: !0 === r.enableQuic,
                                enableCache: !0 === r.enableCache,
                                enableProfile: !1 !== r.enableProfile,
                                ip: r.ip,
                                port: r.port,
                                forbidReuse: !0 === r.forbidReuse,
                                host: r.host,
                                enableChunked: r.enableChunked,
                                __skipDomainCheck__: r.__skipDomainCheck__,
                                forceCellular: r.forceCellularNetwork,
                                contextId: r.contextId,
                                redirect: r.redirect,
                                success: e => {
                                    var r = e[`${t.toLowerCase()}TaskId`];
                                    Fe.set(this, r), ze[t].taskIdMap[r] = this;
                                    var n = Ze.get(this).resolve,
                                        a = Ze.get(this).promise;
                                    n(), a.then((() => {
                                        Qe[r] && "wait" === Qe[r].status ? Qe[r].handlers.forEach((e => e())) : Qe[r] = {
                                            status: "normal"
                                        }
                                    }))
                                },
                                fail: n => {
                                    ze[t].currentTaskCount--;
                                    var a = n[`${t.toLowerCase()}TaskId`];
                                    e = n.errMsg, ot.call(this, {
                                        taskType: t,
                                        options: r,
                                        errMsg: e,
                                        success: !1
                                    }), (0, Ze.get(this).reject)(e), Ye.error(`[${t}][createTask][Fail] taskId=${a}`), Qe[a] && "wait" === Qe[a].status && delete Qe[a]
                                },
                                complete: () => {
                                    We.set(this, "done")
                                }
                            },
                            a = Ke.get(this),
                            o = `create${t}Task${a?"Async":""}`;
                        (l.IS_IOS || l.IS_ANDROID) && r.forceCellularNetwork && (o = "createCellularNetworkRequestTaskAsync");
                        var s = {};
                        "[object ArrayBuffer]" !== Object.prototype.toString.call(r.data) && (s.notPack = !0);
                        var c = He.get(this)(n);
                        return "createRequestTaskAsync" === o && l.IS_IOS && De && (o = "createRequestTaskRealAsync"), this.taskInvoker ? this.taskInvoker.createTask(c) : "Request" !== t || l.IS_DEVTOOLS || l.IS_PC || i.env.isMagicBrushFrameEnv ? (0, p.IN)(o, c) : (0, p.NJ)(o, c, s), e
                    }

                    function at() {
                        var e = Fe.get(this),
                            t = $e.get(this),
                            r = Be.get(this),
                            n = ze[r].functionName;
                        Je.on(`${r}${e}success`, (e => {
                            var r = Ge.get(this).call(this, e);
                            null != r && r.__retry__ || (0, p.FE)({
                                name: n,
                                args: {
                                    success: t.success,
                                    fail: t.fail,
                                    complete: t.complete
                                },
                                res: e
                            })
                        })), Je.on(`${r}${e}fail`, (e => {
                            var r = Ve.get(this),
                                a = r && r.call(this, e);
                            if (null != a && a.__retry__) w.info(`httpDns we retry url: ${t.url}`);
                            else {
                                a && a.__changeError__ && (e = a.__changeError__);
                                var o = {
                                    name: n,
                                    args: {
                                        success: t.success,
                                        fail: t.fail,
                                        complete: t.complete
                                    },
                                    success: !1,
                                    errMsg: e.errMsg
                                };
                                e.errno && (o.errno = e.errno), e.exception && (o.exception = e.exception), (0, p.FE)(o)
                            }
                        }))
                    }

                    function ot({
                        taskType: e,
                        options: t,
                        errMsg: r,
                        success: n = !0,
                        dataLength: a = 0,
                        statusCode: o = "",
                        responseDataLength: i = 0,
                        profile: s = {},
                        queueTime: c,
                        uniqueId: u,
                        errno: l,
                        queueLength: p,
                        accelerateId: f,
                        jsapiVersion: d = 0
                    }) {
                        var h = t.url,
                            v = n ? 1 : 2,
                            g = Date.now() - Ue.get(this),
                            y = t.__skipDomainCheck__;
                        g >= 6e4 && Ye.error(`reportTask costTime too long: ${g}ms, taskId=${Fe.get(this)}`), N(ze[e].functionName, h, v, g, r, o, y, a, i, s, c, {}, u, !0, l, p, {
                            ...t.accelerateOptions,
                            host: t.host,
                            accelerateId: f
                        }, d)
                    }

                    function it(e, t) {
                        var r, n = `${t.toLowerCase()}TaskId`,
                            a = e[n],
                            {
                                state: o,
                                header: i
                            } = e;
                        delete e.state, delete e[n], "chunked" !== o && (e.cookies = i && (r = i["Set-Cookie"] || i["set-cookie"]) ? Array.isArray(r) ? r : r.split(",").reduce(((e, t) => (/^\s*\S+=/.test(t) ? e.push(t) : e.length && (e[e.length - 1] += t), e)), []).map((e => e.trim())) : []);
                        var s = 0;
                        i && (s = parseInt(i["Content-Length"] || i["content-length"] || "0", 10));
                        var c, u, l = () => {
                            if (Je.emit(`${t}${a}${o}`, e), "success" === o || "fail" === o) {
                                var r = ze[t].taskIdMap[a],
                                    n = $e.get(r);
                                if (!r) return;
                                ze[t].currentTaskCount -= 1;
                                var i = ze[t].taskQueue.length;
                                if (ze[t].taskQueue.length > 0) {
                                    var c = ze[t].taskQueue.shift().item,
                                        u = qe.get(c);
                                    if (u && u[0]) {
                                        var l = u[0];
                                        if (l > 0) {
                                            var p = Date.now() - l;
                                            qe.set(c, [l, p, i])
                                        }
                                    }
                                    rt.call(c)
                                }
                                var f = Promise.resolve((0, $.Y6)(n.data));
                                if ("Upload" === t) {
                                    var d = 0;
                                    "object" == typeof n.formData && null !== n.formData && (d = JSON.stringify(n.formData).length), f = je({
                                        path: n.filePath
                                    }).then((e => d + e.stats.size)).catch((() => d))
                                }
                                var h = Promise.resolve((0, $.Y6)(e.data, s));
                                if ("Download" === t) {
                                    var v = e.dataLength;
                                    h = "number" == typeof v ? Promise.resolve(v) : je({
                                        path: e.filePath || e.tempFilePath || ""
                                    }).then((e => e.stats.size)).catch((() => 0))
                                }
                                Promise.all([f, h]).then((([a, i]) => {
                                    var s = qe.get(r);
                                    ot.call(r, {
                                        taskType: t,
                                        options: n,
                                        errMsg: e.errMsg,
                                        statusCode: e.statusCode,
                                        success: "success" === o,
                                        dataLength: a,
                                        responseDataLength: i,
                                        profile: e.profile,
                                        queueTime: s && s[1],
                                        uniqueId: r.uniqueId,
                                        errno: e.errno,
                                        queueLength: s && s[2],
                                        socketReused: e.socketReused,
                                        peerIP: e.peerIP,
                                        accelerateId: Oe(e),
                                        jsapiVersion: r.taskInvoker ? r.taskInvoker.jsapiVersion : 0
                                    }), qe.delete(r)
                                })), Xe.set(ze[t].taskIdMap[a], !0), ct.call(r)
                            }
                        };
                        De && "Request" === t ? "normal" === (null === (c = Qe[a]) || void 0 === c ? void 0 : c.status) ? l() : "wait" === (null === (u = Qe[a]) || void 0 === u ? void 0 : u.status) || (Qe[a] = {
                            status: "wait",
                            handlers: [l]
                        }) : l()
                    }

                    function st() {
                        var e = Be.get(this);
                        return ze[e].currentTaskCount >= ze[e].maxTaskCount
                    }

                    function ct() {
                        var e = Be.get(this),
                            t = Fe.get(this);
                        delete ze[e].taskIdMap[t], delete Qe[t], Je.removeAllListeners(`${e}${t}success`), Je.removeAllListeners(`${e}${t}fail`), Je.removeAllListeners(`${e}${t}complete`), Je.removeAllListeners(`${e}${t}progressUpdate`), Je.removeAllListeners(`${e}${t}headersReceived`), Je.removeAllListeners(`${e}${t}chunked`)
                    }

                    function ut(e, t) {
                        var r = ze[e] ? ze[e] : {
                            currentTaskCount: 0,
                            maxTaskCount: 10,
                            taskQueue: [],
                            functionName: "",
                            taskIdMap: {}
                        };
                        ((e, t) => {
                            if (ie[e]) {
                                var r = ie[e];
                                Object.keys(r).forEach((e => {
                                    r[e].onTaskStateChange((e => {
                                        t(e)
                                    }))
                                }))
                            }
                        })(e, (t => {
                            it.call(this, t, e)
                        })), (0, p.jQ)(`on${e}TaskStateChange`, (t => {
                            it.call(this, t, e)
                        })), ze[e] = Object.assign(r, t)
                    }
                    var lt = r(1708),
                        pt = .002;

                    function ft({
                        isSuccess: e,
                        invokeTime: t,
                        costTime: r,
                        wxdataQueueTimestamp: a,
                        wxdataDequeueTimestamp: o,
                        beginCGITimestamp: i,
                        CGICallbackTimestamp: s,
                        wxlibCallbackTimestamp: c,
                        requestingCount: u,
                        cost1: l,
                        cost2: p,
                        cost3: f,
                        cost4: h,
                        cost5: g,
                        cost6: y,
                        JSApiType: _,
                        jsApiVersion: m
                    }) {
                        Math.random() < pt && setTimeout((() => {
                            var b, w = d.Z.currentNetworkType,
                                k = n.default.appType + 1e3,
                                S = n.default.appLaunchInfo && void 0 !== n.default.appLaunchInfo.scene ? n.default.appLaunchInfo.scene : 0,
                                I = ["", "", e ? 1 : 0, t, r, w, "", k, S, (0, lt.k)(), (0, lt.n)(), "", 0, 0, l, p, f, h, g, y, 0, 0, u, t, a, o, i, s, 0, 0, c, _, m].map((b = 1024, e => (0, F.HD)(e) && e.length > b ? e.substr(0, b) : e)).join(",");
                            v.reportKeyValue({
                                key: "WeAppOperateWXData",
                                value: I
                            })
                        }), 0)
                    }
                    var dt = ({
                            url: e,
                            result: t,
                            cost: r,
                            pointCacheType: n,
                            errMsg: a,
                            errno: o,
                            host: i,
                            fullCost: s
                        }) => {
                            var c = [e, t, r, n, a ? encodeURIComponent(a) : a, o, i, s].join(",");
                            v.reportKeyValue({
                                key: "WeFreeHttpDns",
                                value: c
                            })
                        },
                        ht = r(3888),
                        vt = r.n(ht),
                        gt = r(8246),
                        yt = (r(773), r(4500)),
                        _t = {},
                        mt = (e, t = {}) => {
                            if (!_t[e] || t.noCache) {
                                var r = {},
                                    n = {},
                                    a = {},
                                    o = {
                                        on: (t, n) => {
                                            r[t] && console.warn(`基础库分包 ${e} on event: ${t} has subscribe listener`), r[t] = n, a[t] && (a[t].forEach((e => {
                                                n(e)
                                            })), delete a[t])
                                        },
                                        subscribe: (t, o) => {
                                            r[t] && console.warn(`基础库分包 ${e} subscribe event: ${t} has on listener`), n[t] || (n[t] = []), n[t].push(o), a[t] && (a[t].forEach((e => {
                                                o(e)
                                            })), delete a[t])
                                        },
                                        publish: (e, t) => {
                                            var a, o;
                                            return (a = r[e]) ? (a(t), !0) : !!(o = n[e]) && (o.forEach((e => e(t))), !0)
                                        },
                                        advancePublish: (e, t, r = !1) => {
                                            (r ? o.publish(e, t) : bt(e, t)) || (a[e] || (a[e] = []), a[e].push(t))
                                        },
                                        off: e => {
                                            r[e] = null
                                        }
                                    };
                                return _t[e] = o, o
                            }
                            console.warn(`已经存在分包EM ${e}`)
                        },
                        bt = (e, t, r, n) => {
                            var a = _t[e];
                            a && (n ? a.advancePublish(t, r) : a.publish(t, r))
                        },
                        wt = (r(8007), (0, $.Iy)(((e, t) => {
                            if (t) try {
                                e.success && e.success({
                                    ver: t.GetInferenceEnvInfo().ver
                                }), e.complete && e.complete({
                                    ver: t.GetInferenceEnvInfo().ver
                                })
                            } catch (t) {
                                e.fail && e.fail("getInferenceEnvInfo fail: ", t)
                            } else(0, p.IN)("getInferenceEnvInfo", e)
                        }), (e => ({
                            ver: e.ver
                        }))), r(8929));
                    new WeakMap;
                    var kt = null,
                        St = !1;

                    function It() {
                        if (!St) throw new Error("WeixinArrayBuffer not ready");
                        return kt
                    }
                    i.onLoad((() => {
                        kt = r.g.WeixinArrayBuffer, St = !0
                    }));
                    r(1591);
                    var xt = ["ascii", "base64", "binary", "hex", "ucs2", "ucs-2", "utf16le", "utf-16le", "utf8", "utf-8", "latin1"],
                        Tt = {
                            close: (e = {}) => {
                                (0, p.r3)("close", e, {
                                    fd: ""
                                }) && (0, p.IN)("close", e)
                            },
                            closeSync: ({
                                fd: e
                            } = {}) => {
                                if (!e || "string" != typeof e) throw new TypeError("fd must be a string");
                                var t, r;
                                if ((0, p.IN)("closeSync", {
                                        fd: e,
                                        fail(e) {
                                            t = e.errMsg, r = e.errno
                                        }
                                    }), t) {
                                    var n = new Error(t);
                                    throw n.errno = r, n
                                }
                            },
                            fstat: (e = {}) => {
                                (0, p.r3)("fstat", e, {
                                    fd: ""
                                }) && (0, p.IN)("fstat", e, {
                                    beforeSuccess(e) {
                                        var {
                                            mode: t,
                                            size: r
                                        } = e, {
                                            lastAccessedTime: n,
                                            lastModifiedTime: a
                                        } = e;
                                        n > 1617e9 && (n = Math.floor(n / 1e3)), a > 1617e9 && (a = Math.floor(a / 1e3)), e.stats = new B({
                                            mode: t,
                                            size: r,
                                            lastAccessedTime: n,
                                            lastModifiedTime: a
                                        }), delete e.mode, delete e.size, delete e.lastAccessedTime, delete e.lastModifiedTime
                                    }
                                })
                            },
                            fstatSync: ({
                                fd: e
                            } = {}) => {
                                if (!e || "string" != typeof e) throw new TypeError("fd must be a string");
                                var t, r, n;
                                if ((0, p.IN)("fstatSync", {
                                        fd: e,
                                        fail(e) {
                                            r = e.errMsg, n = e.errno
                                        },
                                        success(e) {
                                            var {
                                                mode: r,
                                                size: n
                                            } = e, {
                                                lastAccessedTime: a,
                                                lastModifiedTime: o
                                            } = e;
                                            a > 1617e9 && (a = Math.floor(a / 1e3)), o > 1617e9 && (o = Math.floor(o / 1e3)), t = new B({
                                                mode: r,
                                                size: n,
                                                lastAccessedTime: a,
                                                lastModifiedTime: o
                                            })
                                        }
                                    }), r) {
                                    var a = new Error(r);
                                    throw a.errno = n, a
                                }
                                return t
                            },
                            write: (e = {}) => {
                                var t = Object.assign({}, e);
                                if ((0, p.r3)("write", t, {
                                        fd: ""
                                    }))
                                    if (t.encoding && -1 === xt.indexOf(t.encoding))(0, p.YG)("write", t, `invalid encoding "${t.encoding}"`);
                                    else {
                                        if ((0, F.eP)(t.data)) {
                                            if (t.data.byteLength > 10485760) return void(0, p.YG)("write", t, "ArrayBuffer exceed size limit (10M)");
                                            ("number" != typeof t.offset || t.offset < 0) && (t.offset = 0), ("number" != typeof t.length || t.length < 0) && (t.length = t.data.byteLength - t.offset)
                                        } else if (!(0, F.HD)(t.data)) return void(0, p.YG)("write", t, "data must be a string or ArrayBuffer");
                                        "number" != typeof t.position && (t.position = void 0), (0, p.IN)("write", t)
                                    }
                            },
                            writeSync: ({
                                fd: e,
                                data: t,
                                offset: r,
                                length: n,
                                encoding: a,
                                position: o
                            } = {}) => {
                                if (!e || "string" != typeof e) throw new TypeError("fd must be a string");
                                if (a && -1 === xt.indexOf(a)) throw new se.iZ(`invalid encoding "${a}"`);
                                if ((0, F.eP)(t)) {
                                    if (t.byteLength > 10485760) throw new se.iZ("ArrayBuffer exceed size limit (10M)");
                                    ("number" != typeof r || r < 0) && (r = 0), ("number" != typeof n || n < 0) && (n = t.byteLength - r)
                                } else if (!(0, F.HD)(t)) throw new TypeError("data must be a string or ArrayBuffer");
                                var i, s, c;
                                if ("number" != typeof o && (o = void 0), (0, p.IN)("writeSync", {
                                        fd: e,
                                        data: t,
                                        offset: r,
                                        length: n,
                                        encoding: a,
                                        position: o,
                                        fail(e) {
                                            i = e.errMsg, c = e.errno
                                        },
                                        success(e) {
                                            s = {
                                                bytesWritten: e.bytesWritten
                                            }
                                        }
                                    }), i) {
                                    var u = new Error(i);
                                    throw u.errno = c, u
                                }
                                return s
                            },
                            read: (e = {}) => {
                                if ((0, p.r3)("read", e, {
                                        fd: ""
                                    }))
                                    if ((0, F.eP)(e.arrayBuffer)) {
                                        var t = Object.assign({}, e),
                                            r = It();
                                        l.IS_IOS && r && r.trace && (t.arrayBufferId = r.trace(t.arrayBuffer, "rw"), delete t.arrayBuffer), (0, F.hj)(t.position) && t.position < 0 ? t.position = 0 : (0, F.o8)(t.position) || (0, F.Ft)(t.position) ? t.position = null : (0, F.hj)(t.position) || (t.position = 0);
                                        var n = Number(t.length);
                                        Number.isNaN(n) ? t.length = 0 : t.length = n;
                                        var a = Number(t.offset);
                                        Number.isNaN(a) ? t.offset = 0 : t.offset = a, (0, p.IN)("read", t, {
                                            beforeSuccess(t) {
                                                t.arrayBuffer = e.arrayBuffer
                                            },
                                            afterAll() {
                                                l.IS_IOS && r && r.untrace && r.untrace(t.arrayBufferId)
                                            }
                                        })
                                    } else(0, p.YG)("FileSystemManager.read", e, "arrayBuffer must be an ArrayBuffer")
                            },
                            readSync: (e = {}) => {
                                var {
                                    fd: t,
                                    arrayBuffer: r
                                } = e;
                                if (!t || "string" != typeof t) throw new TypeError("fd must be a string");
                                if (!(0, F.eP)(r)) throw new TypeError("arrayBuffer must be an ArrayBuffer");
                                var n = Object.assign({}, e),
                                    a = It();
                                l.IS_IOS && a && a.trace && (n.arrayBufferId = a.trace(n.arrayBuffer, "rw"), delete n.arrayBuffer), (0, F.hj)(n.position) && n.position < 0 ? n.position = 0 : (0, F.o8)(n.position) || (0, F.Ft)(n.position) ? n.position = null : (0, F.hj)(n.position) || (n.position = 0);
                                var o = Number(n.length);
                                Number.isNaN(o) ? n.length = 0 : n.length = o;
                                var i, s, c, u = Number(n.offset);
                                if (Number.isNaN(u) ? n.offset = 0 : n.offset = u, (0, p.IN)("readSync", {
                                        ...n,
                                        fail(e) {
                                            s = e.errMsg, c = e.errno
                                        },
                                        success(e) {
                                            i = {
                                                bytesRead: e.bytesRead,
                                                arrayBuffer: r
                                            }
                                        }
                                    }), l.IS_IOS && a && a.untrace && a.untrace(n.arrayBufferId), s) {
                                    var f = new Error(s);
                                    throw f.errno = c, f
                                }
                                return i
                            },
                            ftruncate: (e = {}) => {
                                (0, p.r3)("ftruncate", e, {
                                    fd: ""
                                }) && ("number" != typeof(e = Object.assign({}, e)).length && (e.length = 0), e.length = Math.floor(e.length), e.length < 0 && (e.length = 0), (0, p.IN)("ftruncate", e))
                            },
                            ftruncateSync: ({
                                fd: e,
                                length: t
                            } = {}) => {
                                if (!e || "string" != typeof e) throw new Error("fd must be a string");
                                var r, n;
                                if ("number" != typeof t && (t = 0), (t = Math.floor(t)) < 0 && (t = 0), (0, p.IN)("ftruncateSync", {
                                        fd: e,
                                        length: t,
                                        fail(e) {
                                            r = e.errMsg, n = e.errno
                                        }
                                    }), r) {
                                    var a = new Error(r);
                                    throw a.errno = n, a
                                }
                            }
                        },
                        At = e => {
                            (0, p.r3)("saveFile", e, {
                                tempFilePath: ""
                            }) && (0, p.IN)("saveFile", e)
                        },
                        Ct = r(5179),
                        Et = (e = {}) => {
                            (0, p.r3)("writeFile", e, {
                                filePath: ""
                            }) && (e.encoding && -1 === xt.indexOf(e.encoding) ? (0, p.YG)("writeFile", e, `invalid encoding "${e.encoding}"`) : (0, p.IN)("writeFile", e, {}))
                        },
                        Pt = (e = {}) => {
                            (0, p.r3)("mkdir", e, {
                                dirPath: ""
                            }) && (0, p.IN)("mkdir", e)
                        },
                        Ot = (e = {}) => {
                            (0, p.r3)("access", e, {
                                path: ""
                            }) && (0, p.IN)("access", e)
                        },
                        Rt = (e = {}) => {
                            (0, p.r3)("unlink", e, {
                                filePath: ""
                            }) && (0, p.IN)("unlink", e)
                        },
                        Mt = "readZipEntry",
                        Dt = ["a", "ax", "a+", "ax+", "as", "as+", "r", "r+", "w", "wx", "w+", "wx+"],
                        jt = r(714),
                        Lt = {
                            saveFile: At,
                            saveFileSync: (e, t) => {
                                if (!e || "string" != typeof e) throw new Error("tempFilePath must be a string");
                                if (void 0 !== t && "string" != typeof t) throw new Error("filePath must be a string");
                                var r, n;
                                if ((0, p.IN)("saveFileSync", {
                                        tempFilePath: e,
                                        filePath: t,
                                        success(e) {
                                            n = e.savedFilePath
                                        },
                                        fail(e) {
                                            r = e.errMsg
                                        }
                                    }), r) throw new Error(r);
                                return n
                            },
                            getSavedFileList: (e = {}) => {
                                (0, p.IN)("getSavedFileList", e)
                            },
                            getSavedFileInfo: (e = {}) => {
                                (0, p.r3)("getSavedFileInfo", e, {
                                    filePath: ""
                                }) && (0, p.IN)("getSavedFileInfo", e)
                            },
                            removeSavedFile: (e = {}) => {
                                (0, p.r3)("removeSavedFile", e, {
                                    filePath: ""
                                }) && (0, p.IN)("removeSavedFile", e)
                            },
                            getFileInfo: (e = {}) => {
                                if ((0, p.r3)("getFileInfo", e, {
                                        filePath: ""
                                    })) {
                                    if (void 0 !== e.digestAlgorithm) {
                                        var t = (0, F.x7)(e, {
                                            digestAlgorithm: ""
                                        });
                                        if (t) return void(0, p.YG)("getFileInfo", e, `parameter error: ${t}`);
                                        if (-1 === ["md5", "sha1"].indexOf(e.digestAlgorithm)) return void(0, p.YG)("getFileInfo", e, `parameter error: invalid digestAlgorithm "${e.digestAlgorithm}"`)
                                    }(0, p.IN)("getFileInfo", e, {})
                                }
                            },
                            readFile: Ct.p,
                            readFileSync: Ct.N,
                            writeFile: Et,
                            writeFileSync: (e, t, r) => {
                                if (!e || "string" != typeof e) throw new Error("path must be a string");
                                if (r && -1 === xt.indexOf(r)) throw new Error(`invalid encoding "${r}"`);
                                var n, a;
                                if ((0, p.IN)("writeFileSync", {
                                        filePath: e,
                                        data: t,
                                        encoding: r,
                                        fail(e) {
                                            n = e.errMsg, a = e.errno
                                        }
                                    }), n) {
                                    var o = new Error(n);
                                    throw o.errno = a, o
                                }
                            },
                            mkdir: Pt,
                            mkdirSync: (e, t = !1) => {
                                if (!e || "string" != typeof e) throw new TypeError("dirPath must be a string");
                                var r, n;
                                if ((0, p.IN)("mkdirSync", {
                                        dirPath: e,
                                        recursive: t,
                                        fail(e) {
                                            r = e.errMsg, n = e.errno
                                        }
                                    }), r) {
                                    var a = new Error(r);
                                    throw a.errno = n, a
                                }
                            },
                            rmdir: (e = {}) => {
                                (0, p.r3)("rmdir", e, {
                                    dirPath: ""
                                }) && (0, p.IN)("rmdir", e)
                            },
                            rmdirSync: (e, t = !1) => {
                                if (!e || "string" != typeof e) throw new Error("dirPath must be a string");
                                var r, n;
                                if ((0, p.IN)("rmdirSync", {
                                        dirPath: e,
                                        recursive: t,
                                        fail(e) {
                                            r = e.errMsg, n = e.errno
                                        }
                                    }), r) {
                                    var a = new Error(r);
                                    throw a.errno = n, a
                                }
                            },
                            readdir: (e = {}) => {
                                (l.IS_PC || "wxfile://" !== e.dirPath) && (!l.IS_PC || "wxfile://tmp" !== e.dirPath && "wxfile://tmp/" !== e.dirPath) ? (0, p.r3)("readdir", e, {
                                    dirPath: ""
                                }) && (0, p.IN)("readdir", e) : (0, p.YG)("readdir", e, "path permission denied")
                            },
                            readdirSync: e => {
                                if ("wxfile://" === e) throw Error("path permission denied");
                                if (!e || "string" != typeof e) throw new TypeError("dirPath must be a string");
                                var t, r, n;
                                if ((0, p.IN)("readdirSync", {
                                        dirPath: e,
                                        success(e) {
                                            t = e.files
                                        },
                                        fail(e) {
                                            r = e.errMsg, n = e.errno
                                        }
                                    }), r) {
                                    var a = new Error(r);
                                    throw a.errno = n, a
                                }
                                return t
                            },
                            access: Ot,
                            accessSync: e => {
                                if (!e || "string" != typeof e) throw new TypeError("path must be a string");
                                var t, r;
                                if ((0, p.IN)("accessSync", {
                                        path: e,
                                        fail(e) {
                                            t = e.errMsg, r = e.errno
                                        }
                                    }), t) {
                                    var n = new Error(t);
                                    throw n.errno = r, n
                                }
                            },
                            unlink: Rt,
                            unlinkSync: e => {
                                if (!e || "string" != typeof e) throw new Error("filePath must be a string");
                                var t, r;
                                if ((0, p.IN)("unlinkSync", {
                                        filePath: e,
                                        fail(e) {
                                            t = e.errMsg, r = e.errno
                                        }
                                    }), t) {
                                    var n = new Error(t);
                                    throw n.errno = r, n
                                }
                            },
                            stat: q,
                            statSync: H,
                            unzip: (e = {}) => {
                                var {
                                    zipFilePath: t
                                } = e;
                                t = "" + t, (0, p.r3)("unzip", e, {
                                    zipFilePath: ""
                                }) && (0, p.IN)("unzip", Object.assign({}, e, {
                                    targetDirectory: e.targetPath,
                                    zipFilePath: t
                                }))
                            },
                            copyFile: (e = {}) => {
                                (0, p.r3)("copyFile", e, {
                                    srcPath: "",
                                    destPath: ""
                                }) && (0, p.IN)("fs_copyFile", e, {
                                    beforeAll(e) {
                                        e.errMsg = e.errMsg.replace("fs_copyFile:", "copyFile:")
                                    }
                                })
                            },
                            copyFileSync: (e, t) => {
                                if (!e || "string" != typeof e) throw new Error("srcPath must be a string");
                                if (!t || "string" != typeof t) throw new Error("destPath must be a string");
                                var r, n;
                                if ((0, p.IN)("fs_copyFileSync", {
                                        srcPath: e,
                                        destPath: t,
                                        fail(e) {
                                            r = e.errMsg.replace("fs_copyFileSync:", "copyFileSync:"), n = e.errno
                                        }
                                    }), r) {
                                    var a = new Error(r);
                                    throw a.errno = n, a
                                }
                            },
                            rename: (e = {}) => {
                                (0, p.r3)("rename", e, {
                                    oldPath: "",
                                    newPath: ""
                                }) && (0, p.IN)("fs_rename", e, {
                                    beforeAll(e) {
                                        e.errMsg = e.errMsg.replace(/^fs_/, "")
                                    }
                                })
                            },
                            renameSync: (e, t) => {
                                if (!e || "string" != typeof e) throw new Error("oldPath must be a string");
                                if (!t || "string" != typeof t) throw new Error("newPath must be a string");
                                var r, n;
                                if ((0, p.IN)("fs_renameSync", {
                                        oldPath: e,
                                        newPath: t,
                                        fail(e) {
                                            r = e.errMsg.replace(/^fs_/, ""), n = e.errno
                                        }
                                    }), r) {
                                    var a = new Error(r);
                                    throw a.errno = n, a
                                }
                            },
                            appendFile: (e = {}) => {
                                (0, p.r3)("appendFile", e, {
                                    filePath: ""
                                }) && (e.encoding && -1 === xt.indexOf(e.encoding) ? (0, p.YG)("appendFile", e, `invalid encoding "${e.encoding}"`) : (0, p.IN)("fs_appendFile", e, {}))
                            },
                            appendFileSync: (e, t, r) => {
                                if (!e || "string" != typeof e) throw new Error("path must be a string");
                                if (r && -1 === xt.indexOf(r)) throw new Error(`invalid encoding "${r}"`);
                                var n, a;
                                if ((0, p.IN)("fs_appendFileSync", {
                                        filePath: e,
                                        data: t,
                                        encoding: r,
                                        fail(e) {
                                            n = e.errMsg, a = e.errno
                                        }
                                    }), n) {
                                    var o = new Error(n);
                                    throw o.errno = a, o
                                }
                            },
                            readZipEntry: (e = {}) => {
                                (0, p.r3)(Mt, e, {
                                    filePath: ""
                                }) && ((0, F.o8)(e.encoding) || -1 !== xt.indexOf(e.encoding) ? "all" === e.entries || Array.isArray(e.entries) ? (0, p.IN)(Mt, e, {
                                    beforeSuccess: e => (e.entries && Object.keys(e.entries).forEach((t => {
                                        if (e[t] && (e.entries[t].data = e[t], delete e[t]), "ok" === e.entries[t].errMsg ? e.entries[t].errMsg = `${Mt}:ok` : e.entries[t].errMsg = `${Mt}:fail ${e.entries[t].errMsg}`, 0 === t.indexOf("file:")) {
                                            var r = t.replace("file:", "");
                                            e.entries[r] = e.entries[t], delete e.entries[t]
                                        }
                                    })), e)
                                }) : (0, p.YG)(Mt, e, "invalid entries") : (0, p.YG)(Mt, e, `invalid encoding "${e.encoding}"`))
                            },
                            open: (e = {}) => {
                                var t = Object.assign({}, e);
                                (0, p.r3)("open", e, {
                                    filePath: ""
                                }) && (void 0 === e.flag || Dt.includes(e.flag) ? (void 0 === e.flag && (t.flag = "r"), (0, p.IN)("open", t)) : (0, p.YG)("open", e, `invalid flag "${e.flag}"`))
                            },
                            openSync: (e = {}) => {
                                var t, r, n, {
                                        filePath: a
                                    } = e,
                                    {
                                        flag: o
                                    } = e;
                                if (!a || "string" != typeof a) throw new TypeError("filePath must be a string");
                                if (void 0 !== o && !Dt.includes(o)) throw new se.iZ(`invalid flag: ${o}`);
                                if (void 0 === o && (o = "r"), (0, p.IN)("openSync", {
                                        filePath: a,
                                        flag: o,
                                        fail(e) {
                                            r = e.errMsg, n = e.errno
                                        },
                                        success(e) {
                                            t = e.fd
                                        }
                                    }), r) {
                                    var i = new Error(r);
                                    throw i.errno = n, i
                                }
                                return t
                            },
                            truncate: (e = {}) => {
                                (0, p.r3)("truncate", e, {
                                    filePath: ""
                                }) && ("number" != typeof(e = Object.assign({}, e)).length && (e.length = 0), e.length = Math.floor(e.length), e.length < 0 && (e.length = 0), (0, p.IN)("truncate", e, {}))
                            },
                            truncateSync: ({
                                filePath: e,
                                length: t
                            } = {}) => {
                                if (!e || "string" != typeof e) throw new Error("filePath must be a string");
                                var r, n;
                                if ("number" != typeof t && (t = 0), (t = Math.floor(t)) < 0 && (t = 0), (0, p.IN)("truncateSync", {
                                        filePath: e,
                                        length: t,
                                        fail(e) {
                                            r = e.errMsg, n = e.errno
                                        }
                                    }), r) {
                                    var a = new Error(r);
                                    throw a.errno = n, a
                                }
                            },
                            readCompressedFile: jt.$,
                            readCompressedFileSync: jt.T
                        },
                        Nt = {
                            saveFile: ["filePath"],
                            saveFileSync: [1],
                            getSavedFileList: null,
                            getSavedFileInfo: null,
                            removeSavedFile: null,
                            getFileInfo: null,
                            readFile: ["filePath"],
                            readFileSync: [0],
                            writeFile: ["filePath"],
                            writeFileSync: [0],
                            mkdir: ["dirPath"],
                            mkdirSync: [0],
                            rmdir: ["dirPath"],
                            rmdirSync: [0],
                            readdir: ["dirPath"],
                            readdirSync: [0],
                            access: ["path"],
                            accessSync: [0],
                            unlink: ["filePath"],
                            unlinkSync: [0],
                            stat: ["path"],
                            statSync: [0],
                            unzip: ["zipFilePath", "targetPath"],
                            copyFile: ["srcPath", "destPath"],
                            copyFileSync: [0, 1],
                            rename: ["oldPath", "newPath"],
                            renameSync: [0, 1],
                            appendFile: ["filePath"],
                            appendFileSync: [0],
                            readZipEntry: ["filePath"],
                            open: ["filePath"],
                            openSync: ["filePath"],
                            truncate: ["filePath"],
                            truncateSync: ["filePath"],
                            close: null,
                            closeSync: null,
                            fstat: null,
                            fstatSync: null,
                            write: null,
                            writeSync: null,
                            read: null,
                            readSync: null,
                            ftruncate: null,
                            ftruncateSync: null,
                            readCompressedFile: ["filePath"],
                            readCompressedFileSync: [0]
                        },
                        Ft = {
                            openSync: !0,
                            truncateSync: !0
                        },
                        Wt = "",
                        $t = "",
                        Bt = "";
                    n.default.onReady((() => {
                        try {
                            Wt = n.default.env.USER_DATA_PATH, $t = n.default.env.OPEN_DATA_PATH, delete n.default.env.OPEN_DATA_PATH, Bt = Wt + "/__plugins__", l.IS_DEVTOOLS ? ("http://__wxprivate__", "http://sdk", "http://ad") : ("wxfile://__wxprivate__", "wxfile://sdk", "wxfile://ad")
                        } catch (e) {}
                    }));
                    var Ut, qt, Ht, Gt, Vt = () => Wt,
                        Kt = () => $t,
                        zt = () => Bt,
                        Jt = new Set(["readFile", "readFileSync", "readdir", "readdirSync", "readZipEntry", "readCompressedFile", "readCompressedFileSync"]),
                        Yt = r(4081),
                        Zt = function(e, t, r, n) {
                            return (...a) => {
                                var o, i = t.endsWith("Sync"),
                                    s = !i || Ft[t] ? a[0] : a,
                                    c = Nt[t].every((e => {
                                        var a = ((e, t, r, n) => {
                                            var a = Vt(),
                                                o = Kt(),
                                                i = zt();
                                            return "private-space-for-inner-plugin" === t ? !!(e.startsWith(`wxfile://__wxprivate__/${r}/`) || e.startsWith("wxfile://__wxprivate__/__PATCH_DIR") || e.startsWith(`http://__wxprivate__/${r}/`) || e.startsWith("http://__wxprivate__/__PATCH_DIR")) || e : "string" != typeof e || (e.startsWith("wxfile://ad") || e.startsWith("wxfile://sdk") || e.startsWith("wxfile://__wxprivate__") || e.startsWith("http://ad") || e.startsWith("http://sdk") || e.startsWith("http://__wxprivate__") || (0, $.Av)() && (e.startsWith("wxfile://usr") || e.startsWith("http://usr")) ? e : "opendata" === t ? !!Jt.has(n) || !e.startsWith(a) || e : "game" === t || "app" === t ? !(e.startsWith(o) || e.startsWith(i) || e.match(/__plugin__\/wx[a-z0-9]{16}/)) || e : "app-plugin" === t || "game-plugin" === t ? e.startsWith(o) ? e : !e.startsWith(a) || !!e.startsWith(`${i}/${r}`) || e : e)
                                        })(s[e], r, n, t);
                                        return !0 === a || (o = a, !1)
                                    }));
                                if ("app-plugin" !== r && "game-plugin" !== r || Nt[t].forEach((e => {
                                        "string" != typeof s[e] || s[e].match(/^[a-zA-Z0-9]+:\/\//) || (s[e] = (0, se.RP)(n, s[e]))
                                    })), c) return e(...a);
                                if (i) {
                                    var u = new Error(`${t}:fail permission denied with path "${o}"`);
                                    throw u.errno = Yt.UoO, u
                                }(0, p.FE)({
                                    success: !1,
                                    name: t,
                                    args: s,
                                    errno: Yt.UoO,
                                    errMsg: `permission denied with path "${o}"`
                                })
                            }
                        },
                        Qt = (e, t = "") => {
                            var r = {},
                                n = new Set;
                            return function(e, t, r, n) {
                                    Object.keys(e).forEach((a => {
                                        (0, F.o8)(Nt[a]) || ((0, F.Ft)(Nt[a]) ? t[a] = (...t) => e[a](...t) : t[a] = Zt(e[a], a, r, n))
                                    }))
                                }(Lt, r, e, t),
                                function(e, t, r) {
                                    Object.keys(e).forEach((n => {
                                        var a = e[n];
                                        t[n] = (e = {}) => {
                                            var {
                                                fd: t
                                            } = e;
                                            if (r.has(t)) return a(Object.assign({}, e, {
                                                fd: t
                                            }));
                                            if (n.endsWith("Sync")) throw new Error(`${n}:fail invalid fd`);
                                            (0, p.YG)(n, e, "invalid fd")
                                        }
                                    }))
                                }(Tt, r, n),
                                function(e, t) {
                                    var r = e.open,
                                        n = e.openSync,
                                        a = e.close,
                                        o = e.closeSync;
                                    e.open = (e = {}) => {
                                        var {
                                            success: n
                                        } = e;
                                        r(Object.assign({}, e, {
                                            success: e => {
                                                t.add(e.fd), "function" == typeof n && n(e)
                                            }
                                        }))
                                    }, e.openSync = (e = {}) => {
                                        var r = n(e);
                                        return t.add(r), r
                                    }, e.close = (e = {}) => {
                                        var {
                                            fd: r,
                                            success: n
                                        } = e;
                                        a(Object.assign({}, e, {
                                            fd: r,
                                            success: e => {
                                                t.delete(r), "function" == typeof n && n(e)
                                            }
                                        }))
                                    }, e.closeSync = (e = {}) => {
                                        var {
                                            fd: r
                                        } = e;
                                        o({
                                            fd: r
                                        }), t.delete(r)
                                    }
                                }(r, n), r
                        },
                        Xt = JSON.parse,
                        er = JSON.stringify,
                        tr = n.default.SDKVersion,
                        rr = () => {
                            var e = {};
                            return ar({
                                success(t) {
                                    delete t.errMsg, e = t
                                }
                            }), e
                        },
                        nr = () => Ut || (Ut = Object.assign({}, rr())),
                        ar = (qt = "getSystemInfo", Ht = e => {
                            n.default.isReady || (new Error).stack, (0, p.IN)("getSystemInfo", e, {
                                beforeSuccess: e => {
                                    (e => {
                                        var t = l.PLATFORM;
                                        if (l.IS_IOS && (e.brand = "iPhone"), l.IS_DEVTOOLS && "devtools" !== e.brand && (t = "iPhone" === e.brand ? "ios" : "android"), e.platform = t, e.SDKVersion = tr, e.enableDebug = Boolean(n.default.debug), n.default.devicePixelRatio && (e.devicePixelRatio = n.default.devicePixelRatio), n.default.theme && (e.theme = n.default.theme), n.default.host && (e.host = n.default.host), n.default.appLaunchInfo && n.default.appLaunchInfo.mode && (e.mode = n.default.appLaunchInfo.mode), l.IS_ANDROID && /^\d+\.\d+$/.test(e.version) && (e.version += ".0"), (0, $.Av)() && !(0, l.isGame)() && (e.safeArea = Object.assign({}, e.safeArea), e.safeArea.top = 0, e.safeArea.bottom = e.screenHeight, e.safeArea.height = e.safeArea.bottom - e.safeArea.top), l.WK_RENDERER_H5 && (e.renderer = "h5"), l.IS_IOS && 0 === e.model.indexOf("unknown")) {
                                            var r = e.model.match(/^unknown<([^>]*)>$/),
                                                a = r && r[1];
                                            a && ("iPhone15,4" === a ? e.model = `iPhone 15<${a}>` : "iPhone15,5" === a ? e.model = `iPhone 15 plus<${a}>` : "iPhone16,1" === a ? e.model = `iPhone 15 pro<${a}>` : "iPhone16,2" === a && (e.model = `iPhone 15 pro max<${a}>`))
                                        }
                                    })(e), (e => {
                                        delete(Ut = Object.assign({}, e)).errMsg
                                    })(e)
                                }
                            })
                        }, (e = {}) => {
                            var {
                                success: t,
                                fail: r
                            } = (0, p.Rn)(e, qt);
                            if (Gt) {
                                var n = {};
                                try {
                                    n = Xt(Gt)
                                } catch (e) {
                                    w.error("constructCachedOptimizedSyncApi parse error", e.message)
                                }
                                t(n)
                            } else Ht(Object.assign({}, e, {
                                success(e) {
                                    try {
                                        Gt = er(e)
                                    } catch (e) {
                                        w.error("constructCachedOptimizedSyncApi stringify error", e.message)
                                    }
                                    Promise.resolve().then((() => {
                                        Gt = void 0
                                    })), t(e)
                                },
                                fail(e) {
                                    Gt = void 0, r(e)
                                },
                                complete: void 0
                            }))
                        }),
                        or = null,
                        ir = ["brand", "model", "pixelRatio", "language", "version", "system", "platform", "SDKVersion"];
                    n.default.onReady((() => {
                        or = {};
                        for (var e = 0; e < ir.length; e++) {
                            if (!(ir[e] in n.default)) {
                                or = nr();
                                break
                            }
                            or[ir[e]] = n.default[ir[e]]
                        }
                        if (n.default.screenHeight && n.default.screenWidth) n.default.screenWidth, n.default.screenHeight;
                        else {
                            var t = nr();
                            t.screenWidth, t.screenHeight
                        }
                    }));
                    var sr = (() => {
                        var e;
                        return (...t) => {
                            if (e) return e;
                            if (!0 === t[0]) {
                                if (or) return or;
                                e = rr()
                            } else e = rr();
                            return e
                        }
                    })();
                    new WeakMap, new WeakMap;
                    r.g.__isAppServiceRemoteDebugMode__ || (0, K.a)((e => {
                        n.default.onReady((() => {
                            var e = l.IS_ANDROID ? "clicfg_appbrand_android_xnet_binding" : 0;
                            1 === e ? !0 : (0, yt.b)({
                                experimentId: e,
                                experimentType: "Expt",
                                success: e => {
                                    e && 1 === Number(e.testConfig) && (w.info("[xnet expt] run binding"), !0)
                                }
                            })
                        }))
                    }));
                    (0, $.Fr)(Ct.p), (0, $.Fr)(Et), (0, $.Fr)(Ot), (0, $.Fr)(Pt);
                    ut("Download", {
                        maxTaskCount: 10,
                        functionName: "downloadFile"
                    }), n.default.onReady((() => {
                        try {
                            "number" == typeof n.default.wxAppInfo.maxDownloadConcurrent && ut("Download", {
                                maxTaskCount: n.default.wxAppInfo.maxDownloadConcurrent
                            })
                        } catch (e) {}
                    }));
                    const cr = class extends et {
                        constructor(e) {
                            super(e, {
                                taskType: "Download",
                                beforeSend: t => (t.filePath = e.filePath, t),
                                beforeSuccess: e => (delete e.timeInterval, e)
                            })
                        }
                    };
                    var ur = r(9661),
                        lr = ({
                            api: e,
                            url: t
                        }) => (0, $.vB)() ? Promise.resolve({
                            isInDomainList: !0,
                            isLocalHost: !1,
                            isInLAN: !0
                        }) : new Promise(((r, n) => {
                            (0, p.IN)("checkNetworkAPIURL", {
                                api: e,
                                url: t,
                                success: r,
                                fail: n
                            })
                        })),
                        pr = new WeakMap,
                        fr = new WeakMap,
                        dr = new WeakMap,
                        hr = [],
                        vr = 0,
                        gr = 10;

                    function yr(e = !1) {
                        for (e && (pr.delete(e), fr.delete(e), dr.delete(e), vr--); hr.length > 0 && vr < gr;) {
                            var t = hr.shift(),
                                r = pr.get(t),
                                n = fr.get(t);
                            r && n && (r.start(n), vr++)
                        }
                    }
                    n.default.onReady((() => {
                        n.default.wxAppInfo && n.default.wxAppInfo.maxDownloadConcurrent && (gr = n.default.wxAppInfo.maxDownloadConcurrent)
                    }));
                    class _r {
                        constructor(e) {
                            var t = K.Z.Download,
                                r = e.workerId ? new t(e.workerId) : new t;
                            delete e.workerId;
                            var n = new ur.Z;
                            pr.set(this, r), dr.set(this, n), fr.set(this, (0, $.v7)(e, ["url", "header", "filePath", "enableProfile", "timeout"])), r.onfail = t => {
                                (0, p.YG)("downloadFile", e, t), yr(!0)
                            }, r.onsuccess = t => {
                                (0, p.FE)({
                                    name: "downloadFile",
                                    args: e,
                                    res: t
                                }), yr(!0)
                            }, r.onheader = e => n.emit("header", {
                                header: e
                            }), r.onprogress = (e, t, r) => n.emit("progress", {
                                progress: e,
                                totalBytesWritten: t,
                                totalBytesExpectedToWrite: r
                            }), lr({
                                api: "downloadFile",
                                url: e.url
                            }).then((t => {
                                e.__skipDomainCheck__ || t.isInDomainList || t.isInLAN && !t.isLocalHost ? (hr.push(this), yr()) : (0, p.YG)("downloadFile", e, "invalid url")
                            })).catch((() => {
                                (0, p.YG)("downloadFile", e, "url validate error")
                            }))
                        }
                        abort() {
                            var e = pr.get(this);
                            e && e.abort()
                        }
                        onHeadersReceived(e) {
                            var t = dr.get(this);
                            t && t.on("header", e)
                        }
                        onProgressUpdate(e) {
                            var t = dr.get(this);
                            t && t.on("progress", e)
                        }
                        offHeadersReceived(e) {
                            var t = dr.get(this);
                            t && t.off("header", e)
                        }
                        offProgressUpdate(e) {
                            var t = dr.get(this);
                            t && t.off("progress", e)
                        }
                    }
                    var mr = r(5133),
                        br = !1;

                    function wr(e) {
                        return br ? new _r(e) : new cr(e)
                    }
                    r.g.__isAppServiceRemoteDebugMode__ || (0, K.a)((e => {
                        e.Download && n.default.onReady((() => {
                            var e = !1,
                                t = l.IS_IOS ? "clicfg_appbrand_ios_native_download_new" : "clicfg_appbrand_native_download";
                            (0, yt.b)({
                                experimentId: t,
                                experimentType: "Expt",
                                success: t => {
                                    t && 1 === Number(t.testConfig) && (e = !0, (0, mr.Tk)(/^downloadFile/, 2))
                                },
                                fail(e) {}
                            });
                            var r = (0, ae.J)("bindingDownload");
                            br = e || r, w.info(`${br?"binding":"jsapi"} download, abtest: ${e}, permission: ${r}`)
                        }))
                    }));
                    var kr = (e = {}) => (e = Object.assign({
                            __skipDomainCheck__: !1
                        }, e), (t = {}) => {
                            if ((0, p.r3)("downloadFile", t, {
                                    url: ""
                                })) {
                                t.__skipDomainCheck__ = e.__skipDomainCheck__, (0, ae.J)("skipDomainCheck_downloadFile") && (t.__skipDomainCheck__ = !0);
                                try {
                                    return new wr(t)
                                } catch (e) {
                                    return void(0, p.YG)("downloadFile", t, e.message)
                                }
                            }
                        }),
                        Sr = kr(),
                        Ir = kr({
                            __skipDomainCheck__: !0
                        });
                    (0, $.Fr)(Ct.p), (0, $.Fr)(At), (0, $.Fr)(Et), (0, $.Fr)(Ot), (0, $.Fr)(Rt), (0, $.Fr)(Pt), (0, $.Fr)(Ir), (0, $.Fr)(Ct.p);
                    i.onLoad((() => {
                        (0, $.Fr)(yn)
                    }));
                    var xr = "";
                    r.g.__isAppServiceRemoteDebugMode__ || (0, K.a)((e => {
                        n.default.onReady((() => {
                            var e = l.IS_ANDROID ? "clicfg_appbrand_android_mnxnet_dip_func_list" : 0;
                            1 === e ? xr = "" : (0, yt.b)({
                                experimentId: e,
                                experimentType: "Expt",
                                success: e => {
                                    w.info(`[mnxnet]: _getABTestConfig: ${JSON.stringify(e)}`), e && e.testConfig.length > 0 && (xr = e.testConfig, w.info(`[mnxnet]: enabledNativeDipFuncList: ${xr}`))
                                },
                                fail(t) {
                                    w.info(`[mnxnet]: experimentId ${e} failed: ${t}`)
                                }
                            })
                        }))
                    }));
                    r.g.eval;
                    JSON.parse('{"wxa_client_check":{"task_id":126,"check_logic":{"xnet":{"model_url":"https://776c-wlc-25xh9-1301415383.tcb.qcloud.la/shorttext_0616.onnx?sign=f4bf7692cacae8ed258bd9cd5ae85f38&t=1655374931","model_name":"shorttext_0616","cli_param_list":[{"key":"input_ids","type":"int32","shape_list":[1,32],"preset_data":"dom_text","pre_proc":{"proc_name":"test_eval","param":[{"key":"startPct","value":"0.9"},{"key":"maxSize","value":"32"}]}}],"vocab_list":[{"word_vocab_name":"exceptionVocab","url":"https://res.wx.qq.com/op_res/-_5oCLqmnv5baNur8gfH1L6xm7977OadcHI9SjWEFyyPBR5eYKJkcbhrgswImDYC3YKlIRRM73EO0VwRpkEqgQ"},{"word_vocab_name":"alberttiny489kvocab","url":"https://res.wx.qq.com/op_res/-_5oCLqmnv5baNur8gfH1MZGzTnhg3ThHfFpDfMQ9n5Y3Ant595ccPq9DBsUN3JDf1r9EoGzOqJSUCyum-jilA"},{"word_vocab_name":"minivocab","url":"https://res.wx.qq.com/op_res/-_5oCLqmnv5baNur8gfH1E5VH0F4KzmrHpQjnBpiPOLAHHwxP92zmqXP_eWYYXuqQwqkahYKw06Nz1an1ekF_A"}]},"xnet_list":[{"conf_name":"exception_ret_rf","model_url":"https://res.wx.qq.com/op_res/Su68tAlYHulBHYkTrgR7F-F2k70xZL3UdYx-9AAeC1Shp4HU-eom-1HEYkzm711WNoy36-alAUFYDwzR9JsGmQ","model_name":"wxapp_exception_detect","cli_param_list":[{"key":"input_ids","type":"int32","shape_list":[1,8],"preset_data":"dom_text","pre_proc":{"proc_name":"exceptionRetProcess","param":[{"key":"startPct","value":"0.9"},{"key":"maxSize","value":"32"},{"key":"dictName","value":"exceptionVocab"}]}}]}],"vocab_list":[{"word_vocab_name":"exceptionVocab","url":"https://res.wx.qq.com/op_res/82EQolnzIWQb3DHsw2nz9AfRqg08CX80ydEXWONUDHQAKP9suHH1OGBZi8c6_DT9j8phbuwFWn385JL2Tz4nZw"},{"word_vocab_name":"alberttiny489kvocab","url":"https://res.wx.qq.com/op_res/-_5oCLqmnv5baNur8gfH1MZGzTnhg3ThHfFpDfMQ9n5Y3Ant595ccPq9DBsUN3JDf1r9EoGzOqJSUCyum-jilA"},{"word_vocab_name":"minivocab","url":"https://res.wx.qq.com/op_res/-_5oCLqmnv5baNur8gfH1E5VH0F4KzmrHpQjnBpiPOLAHHwxP92zmqXP_eWYYXuqQwqkahYKw06Nz1an1ekF_A"}],"reg_list":[]},"timing":{"after_load_interval":4000,"after_load_maxcnt":4,"most_cnt":1},"filter":{"black_path_list":["packageAPI/pages/api/get-user-info/get-user-info"],"white_path_list":["packageAPI/pages/api/get-user-info*"]},"debug_mode":1,"debug_data":["dom_text","dom_html"],"debug_code":[{"func_name":"test_eval","code":"async function batchProcess(d,a,e,m,f){const dict = await env.readWordDict(\'exceptionVocab\'); console.log(\'dict:\', dict)}"}],"gray_pub_mode":true}}');
                    new Promise((e => e));
                    var Tr = [];
                    (0, p.Ld)("callbackWebviewMethod", (({
                        res: e,
                        callbackId: t
                    }) => {
                        var r = Tr[t];
                        delete Tr[t], r && r(e)
                    }));
                    mt("MultiModalCheck", {
                        noCache: !0
                    }), new Promise((e => {
                        e
                    }));
                    n.default.onReady((() => {
                        (0, ae.J)("reportRequestErrorByAI")
                    }));
                    Math.random;
                    var Ar = {};
                    n.default.onReady((() => {
                        Object.assign(Ar, n.default.appLaunchInfo), n.default.appLaunchInfo.sessionid || n.default.appLaunchInfo.sessionId, (0, gt.n)("onAppEnterForeground", (e => {
                            Object.assign(Ar, e), e && (e.sessionid || e.sessionId) && (e.sessionid || e.sessionId)
                        }))
                    }));
                    var Cr = new RegExp("name_not_resolved", "i"),
                        Er = (e, t, r) => !x() && (!(!(0, ae.J)("useFreeHttpDns") || !(e => Cr.test(e.errMsg))(e)) && (mn(t, r), !0)),
                        Pr = 0,
                        Or = 1,
                        Rr = {
                            minigamelive: Pr,
                            ad: Pr,
                            cloud: Pr,
                            protobuf: Pr,
                            ga: Pr,
                            kanata: Pr,
                            midas: Pr,
                            pixi: Pr,
                            sclengine: Pr,
                            minigamePlatform: Pr
                        },
                        Mr = mt("sclEngine"),
                        Dr = !1,
                        jr = () => {
                            Dr || (Dr = !0, Rr["sclengine"] === Or ? Mr.publish("initReady") : Mr.advancePublish("initReady"))
                        },
                        Lr = (0, f.s)("tapAnyWhere");
                    (0, p.Ld)("tapAnyWhere", Lr.emitInternal);
                    var Nr = Lr.internalOnMethod,
                        Fr = (Lr.internalOffMethod, Lr.emitInternal, !1);
                    Nr((() => {
                        jr(), Fr || (Fr = !0, $r.forEach((e => e())), $r = [])
                    }));
                    var Wr, $r = [],
                        Br = (e = {}) => {
                            ((e = {}) => {
                                (0, p.IN)("openSetting", e, {
                                    beforeSuccess(e) {
                                        var t = e.authSetting || [];
                                        if (e.authSetting = t.reduce(((e, t) => (e[t.scope] = 1 === t.state, e)), {}), e.subscriptionsSetting) {
                                            var r = {};
                                            if (r.mainSwitch = e.subscriptionsSetting.mainSwitch, e.subscriptionsSetting.templatesInfo) {
                                                var n = e.subscriptionsSetting.templatesInfo;
                                                r.itemSettings = n.reduce(((e, t) => {
                                                    var r = {
                                                            2116: "SYS_MSG_TYPE_INTERACTIVE",
                                                            4668: "SYS_MSG_TYPE_RANK"
                                                        } [t.tid],
                                                        n = {
                                                            "-1": "ban",
                                                            0: "reject",
                                                            1: "accept"
                                                        };
                                                    return r ? e[r] = n[t.status] : (e[t.templateId] = n[t.status], t.acceptAudio && (e[t.templateId] = "acceptWithAudio")), e
                                                }), {})
                                            }
                                            e.subscriptionsSetting = r
                                        }
                                    }
                                })
                            })(e)
                        },
                        Ur = !1,
                        qr = void 0,
                        Hr = void 0,
                        Gr = void 0,
                        Vr = "group_forcecelluarnetwork",
                        Kr = e => qr = e,
                        zr = () => {
                            !qr || Wr || (0, l.isFakeNativeApp)() || (Wr = !0, Jr())
                        },
                        Jr = () => {
                            var e, t, {
                                language: r
                            } = sr();
                            switch (r) {
                                case "zh_TW":
                                case "zh_HK":
                                    e = "正在透過流動網絡改善使用體驗";
                                    break;
                                case "en":
                                default:
                                    e = "Using mobile data for better experience";
                                    break;
                                case "zh_CN":
                                    e = "正在通过移动网络改善使用体验"
                            }!Ur && (Ur = !0, 1) && (t = () => {
                                __sclEngine__.initScl((t => {
                                    t.mainRoot.append("multiLinkToast", {
                                        content: e
                                    }).addListener("click", (() => {
                                        Br({
                                            success: e => {
                                                !1 === e.authSetting["scope.forceCellularNetwork"] && Kr(!1)
                                            }
                                        })
                                    }))
                                }))
                            }, Fr ? t() : $r.push(t))
                        },
                        Yr = function() {
                            var e = vt()((function*() {
                                var e;
                                if (void 0 !== qr) return qr;
                                try {
                                    Hr || (Hr = (0, p.Qh)({
                                        sdkApiName: "getuserwxaauth",
                                        apiName: "webapi_getuserwxaauth",
                                        reqData: {
                                            scope_list: [Vr]
                                        }
                                    })), e = yield Hr
                                } catch (e) {
                                    return !1
                                }
                                var t, {
                                    auth_item_list: r
                                } = e.data;
                                if (-1 !== (t = r.findIndex((e => e.scope === Vr)))) {
                                    var n = r[t];
                                    if (0 === n.state) {
                                        yield(Gr || (Gr = (0, p.Qh)({
                                            sdkApiName: "setuserwxaauth",
                                            apiName: "webapi_setuserwxaauth",
                                            reqData: {
                                                auth_item_list: [{
                                                    scope: Vr,
                                                    state: 1
                                                }]
                                            }
                                        })), Gr).then((e => {
                                            Kr(!0)
                                        })).catch((e => {}))
                                    } else 2 === n.state ? Kr(!1) : 1 === n.state && Kr(!0)
                                }
                                return qr
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Zr = 0,
                        Qr = /custom ip is invalid/;
                    ut("Request", {
                        maxTaskCount: 10,
                        functionName: "request"
                    }), n.default.onReady((() => {
                        try {
                            "number" == typeof n.default.wxAppInfo.maxRequestConcurrent && ut("Request", {
                                maxTaskCount: n.default.wxAppInfo.maxRequestConcurrent
                            })
                        } catch (e) {}
                    }));
                    l.IS_ANDROID;

                    function Xr(e, t, r) {
                        var n = Date.now();
                        if (Zr--, t.costTime = n - t.invokeTime, e.clientInfo && "object" == typeof e.clientInfo) {
                            var a = e.clientInfo;
                            t.wxdataQueueTimestamp = a.invokeTime, t.wxdataDequeueTimestamp = a.invokeTime, t.beginCGITimestamp = a.beginCGITimestamp, t.CGICallbackTimestamp = a.CGICallbackTimestamp, t.wxlibCallbackTimestamp = a.wxlibCallbackTimestamp, t.cost1 = t.wxdataQueueTimestamp - t.invokeTime, t.cost2 = t.wxdataDequeueTimestamp - t.wxdataQueueTimestamp, t.cost3 = t.beginCGITimestamp - t.wxdataDequeueTimestamp, t.cost4 = t.CGICallbackTimestamp - t.beginCGITimestamp, t.cost5 = t.wxlibCallbackTimestamp - t.CGICallbackTimestamp, t.cost6 = n - t.wxlibCallbackTimestamp, r && r.__wxUseProfile__ && (e.__requestProfileInfo = t), delete e.clientInfo, ft(t)
                        }
                    }

                    function en(e, t) {
                        try {
                            e.data = (t || JSON.parse)(e.data)
                        } catch (e) {}
                    }
                    const tn = class extends et {
                        constructor(e) {
                            null == e || e.__wx_inner_uuid__;
                            var t = null == e ? void 0 : e.__wx_inner_invokeTime__,
                                r = (null == e || e.__wx_inner_request_network_type__, null == e || e.__wx_request_route_path__, null == e ? void 0 : e.rawHttpDnsError);
                            null == e || delete e.__wx_inner_uuid__, null == e || delete e.__wx_inner_invokeTime__, null == e || delete e.__wx_inner_request_network_type__, null == e || delete e.__wx_request_route_path__;
                            var n = {
                                JSApiType: 1,
                                invokeTime: Date.now(),
                                requestingCount: ++Zr,
                                jsApiVersion: 0
                            };
                            super(e, {
                                taskType: "Request",
                                beforeSend: t => (t.responseType = e.responseType, t),
                                beforeSuccess: a => {
                                    if (V[e.host] || (V[e.host] = {
                                            needUpdateDns: !1,
                                            protocol: e.protocol
                                        }), r || e.exception) {
                                        var o = r || e.exception;
                                        a.exception = {
                                            reasons: o
                                        }, (null == e ? void 0 : e.retryCount) > 0 && (a.exception.retryCount = e.retryCount)
                                    }
                                    var i, s;
                                    zr(), e.host && e.ip && (i = e.host, s = e.ip, le[i] = s), n.isSuccess = !0,
                                        function(e) {
                                            "string" == typeof e.data && 65279 === e.data.charCodeAt(0) && (e.data = e.data.substr(1))
                                        }(a),
                                        function(e) {
                                            e.statusCode = parseInt(e.statusCode, 10)
                                        }(a),
                                        function(e) {
                                            "object" == typeof e.header && (e.header = Object.keys(e.header).reduce(((t, r) => (Array.isArray(e.header[r]) ? t[r] = e.header[r].join(",") : "string" == typeof e.header[r] && (t[r] = e.header[r]), t)), {}))
                                        }(a);
                                    try {
                                        e.dataType
                                    } catch (e) {
                                        w.error("checkAndReportError error:", e)
                                    }
                                    "json" === e.dataType && en(a, e._jsonParse);
                                    if (e.__retryHttpDNS__) {
                                        var c = a.profile.domainLookUpStart - a.profile.fetchStart;
                                        a.profile.domainLookUpStart = e.lastRequestStartTime, a.profile.fetchStart = e.lastRequestStartTime - c, dt({
                                            url: e.lastUrl,
                                            result: 0,
                                            fullCost: Date.now() - t,
                                            host: e.lastHost,
                                            cost: e.weHttpDNSCoast,
                                            pointCacheType: e.hitCache
                                        })
                                    }
                                    var u = e.accelerateOptions.accelerateType;
                                    if (a.accelerateType = Pe[u], u === Ee.accelerate) {
                                        if (a.statusCode >= 400) {
                                            var {
                                                args: l,
                                                innerArgs: p
                                            } = Me({
                                                options: e,
                                                res: a,
                                                task: this
                                            });
                                            return bn(l, p), {
                                                __retry__: !0
                                            }
                                        }
                                        var f = Oe(a);
                                        a.accelerateRequestId = f
                                    }
                                    return Xr(a, n, e), a
                                },
                                beforeFail(a) {
                                    var o, i = !1;
                                    if (n.isSuccess = !1, Xr(a, n, e), a.errMsg && Qr.test(a.errMsg)) {
                                        var s = !0,
                                            c = Date.now() - e.startTimestamp,
                                            u = "number" == typeof e.timeout ? e.timeout : 6e4;
                                        if (c > u && (s = !1), s) {
                                            var l, p = e.__retryHttpDNS__;
                                            if (null !== (l = e.candicateIps) && void 0 !== l && l.length) {
                                                var f = e.exception;
                                                f || (f = []), f.push({
                                                    errno: 600001,
                                                    errmsg: a.errMsg
                                                });
                                                var d = e.candicateIps[0],
                                                    h = e.candicateIps.slice(1);
                                                return bn(e.originArgs, {
                                                    __innerRequestOptions__: {
                                                        ip: d,
                                                        candicateIps: h,
                                                        port: e.port,
                                                        forbidReuse: e.forbidReuse,
                                                        host: e.host,
                                                        enableChunked: e.enableChunked,
                                                        __skipDomainCheck__: e.__skipDomainCheck__,
                                                        forceCellular: e.forceCellularNetwork,
                                                        enableHttp2: !0 === e.enableHttp2,
                                                        enableQuic: !0 === e.enableQuic,
                                                        enableCache: !0 === e.enableCache,
                                                        enableProfile: !1 !== e.enableProfile,
                                                        timeout: u - c,
                                                        protocol: e.protocol,
                                                        compatUrls: e.compatUrls,
                                                        retryCount: e.retryCount + 1,
                                                        exception: f,
                                                        __retryHttpDNS__: p,
                                                        redirect: e.redirect
                                                    },
                                                    __skipParse__: !0
                                                }), {
                                                    __retry__: !0,
                                                    __httpdns_poll__: !0
                                                }
                                            }
                                            if (e.ip && !e.__polyfill_ldns__) {
                                                var v = e.exception;
                                                return v || (v = []), v.push({
                                                    errno: 600001,
                                                    errmsg: a.errMsg
                                                }), bn(e.originArgs, {
                                                    __innerRequestOptions__: {
                                                        ip: null,
                                                        candicateIps: null,
                                                        port: e.port,
                                                        forbidReuse: e.forbidReuse,
                                                        host: e.host,
                                                        enableChunked: e.enableChunked,
                                                        __skipDomainCheck__: e.__skipDomainCheck__,
                                                        forceCellular: e.forceCellularNetwork,
                                                        enableHttp2: !0 === e.enableHttp2,
                                                        enableQuic: !0 === e.enableQuic,
                                                        enableCache: !0 === e.enableCache,
                                                        enableProfile: !1 !== e.enableProfile,
                                                        timeout: u - c,
                                                        protocol: e.protocol,
                                                        compatUrls: e.compatUrls,
                                                        retryCount: e.retryCount + 1,
                                                        exception: v,
                                                        __polyfill_ldns__: !0,
                                                        __retryHttpDNS__: p,
                                                        redirect: e.redirect
                                                    }
                                                }), {
                                                    __retry__: !0,
                                                    __polyfill_ldns__: !0
                                                }
                                            }
                                        }
                                    }
                                    if (e.accelerateOptions.accelerateType === Ee.accelerate) {
                                        var {
                                            args: g,
                                            innerArgs: y
                                        } = Me({
                                            options: e,
                                            res: a,
                                            task: this
                                        });
                                        return bn(g, y), {
                                            __retry__: !0
                                        }
                                    }
                                    if (e.__retryHttpDNS__) {
                                        var _;
                                        dt({
                                            url: e.lastUrl,
                                            result: 1,
                                            fullCost: Date.now() - t,
                                            pointCacheType: e.hitCache,
                                            errMsg: a.errMsg,
                                            errno: a.errno,
                                            host: e.lastHost,
                                            cost: null !== (_ = e.weHttpDNSCoast) && void 0 !== _ ? _ : -1
                                        }), i = e.lastErrorResponse
                                    } else {
                                        var m, b = e.exception;
                                        if (Er(a, e.originArgs, {
                                                lastRequestStartTime: e.currentRequestStartTime,
                                                lastErrorResponse: a,
                                                lastUrl: e.url,
                                                lastHost: e.host,
                                                __polyfill_ldns__: !0,
                                                retryCount: null !== (m = e.retryCount) && void 0 !== m ? m : 0,
                                                exception: b
                                            })) return {
                                            __retry__: !0,
                                            __freehttpdns__: !0
                                        }
                                    }(r || e.exception) && (o = {
                                        reasons: r || e.exception
                                    }, (null == e ? void 0 : e.retryCount) > 0 && (o.retryCount = e.retryCount));
                                    return i ? {
                                        __changeError__: {
                                            ...i,
                                            exception: o
                                        }
                                    } : a
                                }
                            }), this.taskInvoker && this.taskInvoker.jsapiVersion && (n.jsApiVersion = this.taskInvoker.jsapiVersion)
                        }
                    };
                    var rn = new WeakMap;
                    class nn {
                        constructor() {
                            var e, t = new Promise((t => {
                                e = t
                            }));
                            rn.set(this, {
                                promise: t,
                                resolve: e
                            })
                        }
                        abort() {
                            var {
                                promise: e
                            } = rn.get(this);
                            e.then((e => {
                                e.abort()
                            }))
                        }
                        onHeadersReceived(e) {
                            var {
                                promise: t
                            } = rn.get(this);
                            t.then((t => {
                                t.onHeadersReceived(e)
                            }))
                        }
                        offHeadersReceived(e) {
                            var {
                                promise: t
                            } = rn.get(this);
                            t.then((t => {
                                t.offHeadersReceived(e)
                            }))
                        }
                        onChunkReceived(e) {
                            var {
                                promise: t
                            } = rn.get(this);
                            t.then((t => {
                                t.onChunkReceived(e)
                            }))
                        }
                        offChunkReceived(e) {
                            var {
                                promise: t
                            } = rn.get(this);
                            t.then((t => {
                                t.offChunkReceived(e)
                            }))
                        }
                        onProgressUpdate(e) {
                            var {
                                promise: t
                            } = rn.get(this);
                            t.then((t => {
                                t.onProgressUpdate(e)
                            }))
                        }
                        offProgressUpdate(e) {
                            var {
                                promise: t
                            } = rn.get(this);
                            t.then((t => {
                                t.offProgressUpdate(e)
                            }))
                        }
                    }
                    var an = {},
                        on = !1;

                    function sn({
                        args: {
                            url: e,
                            __wx_inner_invokeTime__: t
                        },
                        host: r,
                        needHttpdns: n = !1,
                        options: {
                            __retryHttpDNS__: a,
                            lastErrorResponse: o,
                            __refuseDns__: i = !1
                        }
                    }) {
                        var s, c;
                        if ((a || n) && !i)
                            if ((null === (s = an[e]) || void 0 === s ? void 0 : s.count) >= 4) dt({
                                url: e,
                                result: 1,
                                fullCost: Date.now() - t,
                                pointCacheType: 0,
                                errMsg: "we_reject_free_httpdns",
                                errno: 10455,
                                host: r
                            });
                            else if (!x()) {
                            if (on) {
                                var u = de(r);
                                if (u && !1 === u.expired) return c = u.ip, {
                                    host: r,
                                    ip: c,
                                    hitCache: 1
                                }
                            }
                            var l = Date.now();
                            return fe(r, void 0, !0).then((e => {
                                c = e.ip;
                                var t = e.hitCache ? 2 : 0,
                                    n = Date.now() - l;
                                return {
                                    host: r,
                                    ip: c,
                                    banHttpDNS: !0,
                                    weHttpDNSCoast: n,
                                    hitCache: t
                                }
                            })).catch((n => {
                                if (602107 != n.errno) {
                                    an[e] ? an[e].count++ : an[e] = {
                                        count: 1
                                    };
                                    var a = setTimeout((() => {
                                        delete an[e]
                                    }), 3e4);
                                    an[e].cf && clearTimeout(an[e].cf), an[e].cf = a
                                }
                                throw dt({
                                    url: e,
                                    result: 1,
                                    fullCost: Date.now() - t,
                                    pointCacheType: 0,
                                    errMsg: n.errMsg || n.message || n.msg,
                                    errno: n.errno,
                                    host: r
                                }), o
                            }))
                        }
                    }
                    n.default.onReady((() => {
                        var e = l.IS_IOS ? "clicfg_appbrand_ios_free_httpdns_sdk_cache" : "clicfg_appbrand_android_free_httpdns_sdk_cache";
                        (0, yt.b)({
                            experimentId: e,
                            experimentType: "Expt",
                            success: e => {
                                e && 1 === Number(e.testConfig) && (on = !0)
                            }
                        })
                    }));
                    var cn = ({
                        args: e
                    }) => !0 !== e.forceCellularNetwork ? void(e.forceCellularNetwork && delete e.forceCellularNetwork) : Yr().then((t => {
                        if (t) return {
                            forceCellularNetwork: !0
                        };
                        e.forceCellularNetwork && delete e.forceCellularNetwork
                    }));

                    function un({
                        host: e
                    }) {
                        var t = (e => {
                            if (!e) return !1;
                            if ("." === e[0]) return !0;
                            for (var t, r, n = 0; n < e.length; n++) {
                                if (r = e[n], "." === t && "." === r) return !0;
                                t = r
                            }
                            return !1
                        })(e);
                        if (t) throw new Error(`invalid host: ${e}`)
                    }
                    var ln = !1;

                    function pn({
                        host: e
                    }) {
                        var t, r;
                        return ln ? (null !== (t = V[e]) && void 0 !== t && t.needUpdateDns && (V[e].doingDns || (V[e].doingDns = !0, bn({
                            url: `${V[e].protocol}//${e}`,
                            timeout: 5e3,
                            complete() {
                                V[e].doingDns = !1, V[e].needUpdateDns = !1
                            }
                        }, {
                            __refuseDns__: !0
                        })), r = !0), {
                            needHttpdns: r
                        }) : {
                            needHttpdns: !1
                        }
                    }
                    n.default.onReady((() => {
                        1 === Number(n.default.expt.clicfg_appbrand_ios_dns_polyfill) && (ln = !0)
                    }));
                    var fn = !1;

                    function dn(e) {
                        var t, r;
                        if (fn && !e.options.__skipDomainCheck__) return null === (t = (r = __cloudSDKMain__).getRequestMiddleware) || void 0 === t ? void 0 : t.call(r, n.default)(e.args)
                    }
                    n.default.onReady((() => {
                        var e, t, r, a, o;
                        (null !== (e = n.default.appContactInfo) && void 0 !== e && null !== (t = e.stablePassThroughInfo) && void 0 !== t && null !== (r = t.wxcloud_gateway_conf) && void 0 !== r && r.enabled || null !== (a = n.default.appContactInfo) && void 0 !== a && null !== (o = a.wxcloud_gateway_conf) && void 0 !== o && o.enabled) && (fn = !0)
                    }));
                    class hn {
                        constructor(e) {
                            this.innerParams = e, this.asyncTasks = []
                        }
                        use(e) {
                            if (!this.catchFn) return this;
                            var t;
                            try {
                                t = e(this.innerParams, this.asyncTasks)
                            } catch (e) {
                                return this.catchFn && this.catchFn(e), delete this.catchFn, this
                            }
                            if (t)
                                if (t instanceof Promise) {
                                    var r = t.then((e => {
                                        e && Object.assign(this.innerParams, e)
                                    }));
                                    this.asyncTasks.push(r)
                                } else Object.assign(this.innerParams, t);
                            return this
                        }
                        useAfterAsyncTasks(e) {
                            return this.catchFn ? (this.asyncTasks.length > 0 ? Promise.all(this.asyncTasks).then((() => {
                                this.use(e)
                            })).catch((e => e)) : this.use(e), this) : this
                        } catch (e) {
                            return this.catchFn = e, this
                        }
                        execute(e) {
                            if (this.asyncTasks.length > 0) {
                                var t = new nn;
                                return Promise.all(this.asyncTasks).then((() => {
                                    var e = this.createRequestTask();
                                    ((e, t) => {
                                        var {
                                            resolve: r
                                        } = rn.get(e);
                                        r(t)
                                    })(t, e)
                                })).catch((t => {
                                    this.catchFn && this.catchFn(t), "frame" !== (null == t ? void 0 : t.type) ? delete this.catchFn : (0, p.FE)({
                                        name: "request",
                                        args: e,
                                        errno: Yt.YEP,
                                        errMsg: t.data,
                                        success: !1
                                    })
                                })), t
                            }
                            return this.createRequestTask()
                        }
                        createRequestTask() {
                            var {
                                args: e,
                                host: t,
                                ip: r,
                                header: n,
                                method: a,
                                port: o,
                                responseType: i,
                                dataStr: s,
                                options: c,
                                forbidReuse: u,
                                currentRequestStartTime: l,
                                lastRequestStartTime: p,
                                weHttpDNSCoast: f,
                                hitCache: d,
                                lastHost: h,
                                lastUrl: v,
                                __retryHttpDNS__: g,
                                lastErrorResponse: y,
                                candicateIps: _,
                                startTimestamp: m,
                                timeout: b,
                                protocol: w,
                                compatUrls: k,
                                rawHttpDnsError: S,
                                retryCount: I,
                                exception: x,
                                __polyfill_ldns__: T,
                                accelerateOptions: A
                            } = this.innerParams;
                            try {
                                return new tn(Object.assign({}, e, {
                                    header: n,
                                    method: a,
                                    responseType: i,
                                    data: s,
                                    ip: r,
                                    host: t,
                                    port: o,
                                    forbidReuse: u,
                                    currentRequestStartTime: l,
                                    lastRequestStartTime: p,
                                    originArgs: e,
                                    weHttpDNSCoast: f,
                                    hitCache: d,
                                    lastHost: h,
                                    lastUrl: v,
                                    __retryHttpDNS__: g,
                                    lastErrorResponse: y,
                                    __skipDomainCheck__: A.accelerateType === Ee.accelerate || c.__skipDomainCheck__,
                                    candicateIps: _,
                                    startTimestamp: m,
                                    timeout: b,
                                    protocol: w,
                                    compatUrls: k,
                                    rawHttpDnsError: S,
                                    retryCount: I,
                                    exception: x,
                                    __polyfill_ldns__: T,
                                    accelerateOptions: A
                                }))
                            } catch (e) {
                                return this.catchFn && this.catchFn(e), void delete this.catchFn
                            }
                        }
                    }
                    var vn = (e = {}) => (t = {}, r = {}) => gn(Object.assign({}, e, r))(t),
                        gn = (e = {}) => (e = Object.assign({
                            __skipDomainCheck__: !1,
                            __notAutofillContentType__: !1,
                            __retryHttpDNS__: !1,
                            __innerRequestOptions__: null,
                            __skipParse__: !1,
                            __refuseDns__: !1,
                            __retryAccelFallback__: !1
                        }, e), function(t = {}) {
                            var r;
                            if (t.url) {
                                try {
                                    r = function(e) {
                                        ye || (ye = new ke(50));
                                        var t, r = ye.getCache(e);
                                        return r ? (ye.updateCache(r), r) : ((t = "function" == typeof URL ? new URL(e) : (0, _e.Qc)(e)).origin || (t.origin = (t.protocol || "") + "//" + (t.host || "")), ye.insertCache(e, t), t)
                                    }(t.url)
                                } catch (e) {
                                    return void(0, p.FE)({
                                        name: "request",
                                        args: t,
                                        errno: Yt.Z9j,
                                        errMsg: `invalid url "${t.url}"`,
                                        success: !1
                                    })
                                }
                                if ("http:" === r.protocol || "https:" === r.protocol)
                                    if ("function" != typeof t.data) {
                                        (0, ae.J)("skipDomainCheck") && (e.__skipDomainCheck__ = !0);
                                        var n = new hn({
                                            args: t,
                                            options: e
                                        });
                                        if (n.catch((e => {
                                                (0, p.YG)("request", t, e.message || e.errMsg, e.errno)
                                            })).use((function({
                                                args: e,
                                                options: {
                                                    __retryHttpDNS__: t,
                                                    __notAutofillContentType__: r,
                                                    lastRequestStartTime: n,
                                                    lastUrl: a,
                                                    lastHost: o,
                                                    lastErrorResponse: i,
                                                    __innerRequestOptions__: s,
                                                    __polyfill_ldns__: c,
                                                    retryCount: u,
                                                    exception: l
                                                } = {}
                                            }) {
                                                var p, f;
                                                !t && null != s && s.__retryHttpDNS__ && (t = !0), e.header ? (f = (0, se.Em)(e.header), e.header = (0, se.Nf)(e.header)) : (p = !0, f = "Undefined", e.header = {}), "Undefined" !== f && "Object" !== f && (console.warn("wx.request: header must be an object"), e.header = {}), p || (e.header = Object.keys(e.header).reduce(((t, r) => {
                                                    var n = r.toLowerCase();
                                                    return "content-type" === n ? t[n] = e.header[r] : t[r] = e.header[r], t
                                                }), {}));
                                                var d = "text";
                                                e.responseType && (d = e.responseType.toLowerCase());
                                                var h, v = e.header,
                                                    g = "GET";
                                                if ("string" == typeof e.method && (g = e.method.toUpperCase()), e.dataType = e.dataType || "json", r || (v["content-type"] = v["content-type"] || "application/json"), h = void 0 === e.data ? "" : "string" != typeof e.data && "ArrayBuffer" !== (0, se.Em)(e.data) ? v["content-type"].indexOf("application/x-www-form-urlencoded") > -1 ? (0, ce.HR)(e.data, !0) : v["content-type"].indexOf("application/json") > -1 || "object" == typeof e.data ? JSON.stringify(e.data) : h.toString() : e.data, "GET" === g && e.data) {
                                                    var y = (0, ce.cE)(e.url, e.data);
                                                    e.url = y
                                                }
                                                var _ = null != s && s.timeout ? s.timeout : e.timeout,
                                                    m = null != s && s.retryCount ? s.retryCount : 0;
                                                m || (m = null != u ? u : 0);
                                                var b = null != s && s.exception ? s.exception : null;
                                                b || (b = l);
                                                var w = (null == s ? void 0 : s.__polyfill_ldns__) || c;
                                                return {
                                                    header: v,
                                                    method: g,
                                                    responseType: d,
                                                    dataStr: h,
                                                    args: e,
                                                    currentRequestStartTime: Date.now(),
                                                    lastRequestStartTime: n,
                                                    lastHost: o,
                                                    lastUrl: a,
                                                    __retryHttpDNS__: t,
                                                    lastErrorResponse: i,
                                                    startTimestamp: Date.now(),
                                                    timeout: _,
                                                    retryCount: m,
                                                    exception: b,
                                                    __polyfill_ldns__: w
                                                }
                                            })).use((({
                                                options: e = {}
                                            }) => e.__skipParse__ ? {
                                                host: e.__innerRequestOptions__.host,
                                                protocol: e.__innerRequestOptions__.protocol,
                                                compatUrls: e.__innerRequestOptions__.compatUrls
                                            } : {
                                                host: r.host,
                                                protocol: r.protocol,
                                                compatUrls: {
                                                    port: r.port || ("http:" === r.protocol ? 80 : 443),
                                                    host: r.hostname,
                                                    url: `${r.hostname||""}${r.pathname||""}${r.search||""}${r.hash||""}`
                                                }
                                            })).use(pn).use(un).use(Ae.bind(this)).use(Re).use(sn).use(ve).use(cn).use(dn).useAfterAsyncTasks(ge), n.catchFn) return n.execute(t)
                                    } else(0, p.FE)({
                                        name: "request",
                                        args: t,
                                        errno: Yt.tHd,
                                        errMsg: "data should not be Function",
                                        success: !1
                                    });
                                else(0, p.FE)({
                                    name: "request",
                                    args: t,
                                    errno: Yt.Z9j,
                                    errMsg: `invalid url "${t.url}"`,
                                    success: !1
                                })
                            } else(0, p.FE)({
                                name: "request",
                                args: t,
                                errno: Yt.Wkc,
                                errMsg: `invalid url "${t.url}"`,
                                success: !1
                            })
                        }),
                        yn = gn({
                            __skipDomainCheck__: !1
                        }),
                        _n = (gn({
                            __skipDomainCheck__: !0
                        }), gn({
                            __skipDomainCheck__: !0,
                            __notAutofillContentType__: !0
                        })),
                        mn = vn({
                            __retryHttpDNS__: !0
                        }),
                        bn = vn();
                    ut("Upload", {
                        maxTaskCount: 10,
                        functionName: "uploadFile"
                    }), n.default.onReady((() => {
                        try {
                            "number" == typeof n.default.wxAppInfo.maxUploadConcurrent && ut("Upload", {
                                maxTaskCount: n.default.wxAppInfo.maxUploadConcurrent
                            })
                        } catch (e) {}
                    }));
                    const wn = class extends et {
                        constructor(e) {
                            super(e, {
                                taskType: "Upload",
                                beforeSend: t => (t.filePath = e.filePath, t.name = e.name, t.formData = e.formData, t),
                                beforeSuccess: e => e
                            })
                        }
                    };
                    var kn = (e = {}) => (e = Object.assign({
                            __skipDomainCheck__: !1
                        }, e), (t = {}) => {
                            if ((0, p.r3)("uploadFile", t, {
                                    url: "",
                                    filePath: "",
                                    name: ""
                                })) {
                                "object" != typeof t.header && void 0 !== t.header && (console.warn("uploadFile: header must be an object"), delete t.header), "object" != typeof t.formData && void 0 !== t.formData && (console.warn("uploadFile: formData must be an object"), delete t.formData);
                                var r = {},
                                    n = {};
                                t.header && (r = (0, se.Nf)(t.header)), t.formData && (n = (0, se.Nf)(t.formData)), t.__skipDomainCheck__ = e.__skipDomainCheck__, (0, ae.J)("skipDomainCheck_uploadFile") && (t.__skipDomainCheck__ = !0);
                                try {
                                    return new wn(Object.assign({}, t, {
                                        header: r,
                                        formData: n
                                    }))
                                } catch (e) {
                                    return void(0, p.YG)("uploadFile", t, e.message)
                                }
                            }
                        }),
                        Sn = kn(),
                        In = (kn({
                            __skipDomainCheck__: !0
                        }), (0, f.s)("AudioInterruptionBegin")),
                        xn = (In.onMethod, In.offMethod, (0, f.s)("AudioInterruptionEnd")),
                        Tn = (xn.onMethod, xn.offMethod, xn.internalOnMethod, xn.internalOffMethod, void 0),
                        An = !1;

                    function Cn() {
                        return new Tn
                    }
                    i.onLoad((() => {
                        Tn = K.Z && K.Z.WXAUDIO ? K.Z.WXAUDIO : K.Z && K.Z.AudioContext ? K.Z.AudioContext : "undefined" != typeof AudioContext ? AudioContext : "undefined" != typeof webkitAudioContext ? webkitAudioContext : null, An = !0
                    }));
                    var En = function(e, t) {
                        return (0, p.TG)(e, t, (function(e) {
                            var t = e.data;
                            return {
                                qbase_api_name: "tcbapi_component_gettempfileurl",
                                qbase_req: JSON.stringify({
                                    fileid_list: t.fileid_list.slice(),
                                    type: t.type
                                }),
                                cli_req_id: `${+new Date}_${Math.random()}`
                            }
                        }), (function(e) {
                            return e
                        }))
                    }("getCloudFileUrl", "qbase_commapi");
                    var Pn = function(e, t, r) {
                            Rn({
                                fileIds: e,
                                type: t,
                                success: r
                            })
                        },
                        On = new Map,
                        Rn = function(e) {
                            var {
                                fileIds: t,
                                type: r,
                                success: n
                            } = e, a = new Map, o = [], i = !1;
                            if (t.forEach((e => {
                                    var t = On.get(e);
                                    if (t) {
                                        if (Date.now() < t.expireTime) return void(a.has(e) || (a.set(e, t.data), i || (i = !0)));
                                        On.delete(e)
                                    }
                                    /^(cloud):\/\//.test(e) && o.push(e)
                                })), 0 !== o.length) {
                                var s = 0,
                                    c = function(e, t) {
                                        for (var r = [], n = Math.ceil(e.length / t), a = 0; a < n; a++) r.push(e.slice(a * t, (a + 1) * t));
                                        return r
                                    }(t, 50);
                                Promise.all(c.map((e => new Promise((t => {
                                    En({
                                        data: {
                                            fileid_list: e,
                                            type: r
                                        },
                                        requestInQueue: !1,
                                        success(r) {
                                            var n = r;
                                            if (n.baseresponse && 0 === n.baseresponse.errcode ? n.download_list.forEach((e => {
                                                    a.set(e.fileid, e), !On.has(e.fileid) && e.max_age && On.set(e.fileid, {
                                                        data: e,
                                                        expireTime: Date.now() + 1e3 * e.max_age
                                                    })
                                                })) : n.baseresponse ? e.forEach((e => {
                                                    a.set(e, {
                                                        download_url: e,
                                                        service_errcode: n.baseresponse.errcode,
                                                        errmsg: "system error baseresponse.errcode " + n.baseresponse.errcode
                                                    }), On.has(e) && On.delete(e)
                                                })) : e.forEach((e => {
                                                    a.set(e, {
                                                        download_url: e,
                                                        service_errcode: -1,
                                                        errmsg: "system error baseresponse empty"
                                                    }), On.has(e) && On.delete(e)
                                                })), n.baseresponse && n.baseresponse.stat && n.baseresponse.stat.qbase_cost_time) {
                                                var o = n.baseresponse.stat.qbase_cost_time;
                                                o > s && (s = o)
                                            }
                                            t()
                                        },
                                        fail() {
                                            t()
                                        },
                                        complete(e) {}
                                    })
                                }))))).then((() => {
                                    Mn(t, a, s, n)
                                })).catch((e => {
                                    "function" == typeof n && n({
                                        data: t.map((t => ({
                                            url: t,
                                            service_errcode: -1,
                                            errmsg: e + ""
                                        })))
                                    })
                                }))
                            } else i ? Mn(t, a, 0, n) : "function" == typeof n && n({
                                data: t.map((e => ({
                                    url: e
                                })))
                            })
                        };

                    function Mn(e, t, r, n) {
                        var a = [];
                        e.forEach((e => {
                            if (/^(cloud):\/\//.test(e)) {
                                var r = t.get(e);
                                r ? 0 === r.service_errcode ? a.push({
                                    url: r.download_url
                                }) : a.push({
                                    url: e,
                                    code: r.service_errcode,
                                    msg: r.errmsg
                                }) : a.push({
                                    url: e,
                                    code: -1,
                                    msg: "NO_RESULT"
                                })
                            } else a.push({
                                url: e
                            })
                        })), "function" == typeof n && n({
                            data: a,
                            cost: r
                        })
                    }
                    var Dn = r(8602),
                        jn = (0, f.s)("LifeCycle:beforeHide"),
                        Ln = (0, f.s)("LifeCycle:Hide"),
                        Nn = (0, f.s)("LifeCycle:afterHide"),
                        Fn = (Ln.emitInternal.bind(Ln), Ln.emitGlobal.bind(Ln), jn.emitInternal.bind(jn), Nn.emitInternal.bind(Nn), Ln.onMethod, Ln.offMethod, jn.internalOnMethod, jn.internalOffMethod, Ln.internalOnMethod, Ln.internalOffMethod, Nn.internalOnMethod, Nn.internalOffMethod, () => {
                            !0
                        });
                    var Wn, $n = 0,
                        Bn = 0,
                        Un = 0,
                        qn = new WeakMap,
                        Hn = new WeakMap,
                        Gn = new WeakMap,
                        Vn = new WeakMap,
                        Kn = new WeakMap,
                        zn = new WeakMap,
                        Jn = new WeakMap,
                        Yn = new WeakMap,
                        Zn = new WeakMap,
                        Qn = new WeakMap,
                        Xn = new WeakMap,
                        ea = new Map,
                        ta = {},
                        ra = 52428800,
                        na = 0,
                        aa = 0,
                        oa = e => {
                            Object.keys(ta).sort(((e, t) => ta[e].index - ta[t].index)).some((t => {
                                var r = ta[t];
                                if (r.audioBuffer && e !== t) {
                                    var n = r.audioBufferSize;
                                    if (delete r.audioBuffer, delete r.audioBufferSize, delete ta[t], (na -= n) <= ra) return !0
                                }
                                return !1
                            }))
                        },
                        ia = e => {
                            e.index = ++aa
                        },
                        sa = (e, t, r) => {
                            var n = ta[e];
                            if (n && n.audioBuffer) ia(n), t(n.audioBuffer, {
                                sync: !0
                            });
                            else if (n && n.loading) ia(n), n.successCallbacks.push(t), n.failCallbacks.push(r);
                            else {
                                ta[e] = {
                                    loading: !0,
                                    successCallbacks: [t],
                                    failCallbacks: [r]
                                }, (/^(http|https):\/\//.test(e) ? ua(e) : /^(cloud):\/\//.test(e) ? la(e) : /^(wxblob:\/\/)/.test(e) ? pa(e) : ca(e)).then((t => {
                                    Wn.decodeAudioData(t, (t => {
                                        var r, n = ta[e];
                                        ia(n), r = n.audioBuffer ? n.audioBuffer : ((e, t, r) => (e.audioBuffer = t, e.audioBufferSize = t.sampleRate * t.duration * 4 * t.numberOfChannels, (na += e.audioBufferSize) > ra && oa(r), e.audioBuffer))(n, t, e);
                                        try {
                                            n.successCallbacks && n.successCallbacks.forEach((e => {
                                                e(r, {
                                                    sync: !1
                                                })
                                            }))
                                        } catch (e) {
                                            console.error(e), w.error("loadAudio invoke successCallback fail", e.message), n.failCallbacks && n.failCallbacks.forEach((t => {
                                                t(e)
                                            }))
                                        }
                                        delete n.successCallbacks, delete n.failCallbacks, delete n.loading
                                    }), (t => {
                                        try {
                                            var r = ta[e];
                                            r && r.failCallbacks && r.failCallbacks.forEach((e => {
                                                e(t)
                                            }))
                                        } catch (t) {
                                            console.error(t), w.error("loadAudio invoke failCallback fail", t.message)
                                        }
                                        delete n.successCallbacks, delete n.failCallbacks, delete n.loading
                                    }))
                                })).catch((t => {
                                    try {
                                        var r = ta[e];
                                        r && r.failCallbacks && r.failCallbacks.forEach((e => {
                                            e(t)
                                        }))
                                    } catch (t) {
                                        console.error(t), w.error("loadAudio invoke failCallback fail", t.message)
                                    }
                                    delete n.successCallbacks, delete n.failCallbacks, delete n.loading
                                }))
                            }
                        },
                        ca = e => {
                            return (t = {
                                filePath: e
                            }, new G(((e, r) => {
                                (0, Ct.p)({
                                    ...t,
                                    success: e,
                                    fail: r
                                })
                            }))).then((e => e.data));
                            var t
                        },
                        ua = e => {
                            return (t = {
                                url: e,
                                responseType: "arraybuffer",
                                enableHttp2: !0,
                                enableCache: !0
                            }, new G(((e, r) => {
                                _n({
                                    ...t,
                                    success: e,
                                    fail: r
                                })
                            }))).then((e => e.data));
                            var t
                        },
                        la = e => new G(((t, r) => {
                            Pn([e], "audio", (e => {
                                ua(e.data[0].url).then((e => t(e))).catch((e => {
                                    r(e)
                                }))
                            }))
                        })),
                        pa = e => new G((t => {
                            t(Dn.Z.get(e))
                        })),
                        fa = function(e) {
                            qn.set(this, Object.assign(qn.get(this), e))
                        },
                        da = function(e) {
                            return qn.get(this)[e]
                        },
                        ha = function() {
                            return qn.get(this)
                        },
                        va = function() {
                            this.stop(!0), fa.call(this, {
                                _source: null
                            });
                            var e = Gn.get(this);
                            e && e()
                        },
                        ga = function(e) {
                            var t = ++Un,
                                r = Wn.createBufferSource(t),
                                {
                                    currentPlayBackTime: n,
                                    state: a
                                } = ya.call(this, e),
                                {
                                    loop: o,
                                    playbackRate: i,
                                    _buffer: s,
                                    _gainNode: c,
                                    _instanceId: u,
                                    src: p,
                                    withReport: f
                                } = a,
                                d = va.bind(this);
                            r.onended = d, r.buffer = s, r.loop = o, r.playbackRate.value = i, c && r.connect(c), r.start(0, n), Wn.resume(), fa.call(this, {
                                _isPlaying: !0,
                                paused: !1,
                                _source: r,
                                _played: !0,
                                _playbackTime: 0,
                                _lastCurrentTime: n,
                                _startedAt: Wn.currentTime,
                                _endedHandler: d,
                                _bufferSourceId: t
                            }), (l.IS_IOS || l.IS_ANDROID) && f && ea.set(t, {
                                _instanceId: u,
                                src: p
                            })
                        },
                        ya = function(e) {
                            e = e || ha.call(this);
                            var t, {
                                _startedAt: r,
                                _playbackTime: n,
                                _isPlaying: a,
                                playbackRate: o,
                                _lastCurrentTime: i,
                                duration: s
                            } = e;
                            return (t = a ? i + (Wn.currentTime - r) * o : n) > s && (t %= s), {
                                currentPlayBackTime: t,
                                state: e
                            }
                        },
                        _a = function() {
                            this.stop(!0);
                            var {
                                _gainNode: e,
                                _audioLoadPromiseResolve: t
                            } = ha.call(this);
                            e && e.disconnect(), fa.call(this, {
                                _buffer: null,
                                _source: null,
                                _loadPromise: null,
                                _gainNode: null,
                                _audioLoadPromiseResolve: null,
                                _audioLoadPromiseReject: null,
                                _playPendingIdMap: null
                            }), t(!0), e = null, t = null, Hn.delete(this), Gn.delete(this), Vn.delete(this), Kn.delete(this), Jn.delete(this), zn.delete(this), Yn.delete(this), Zn.delete(this), Xn.delete(this), clearInterval(Qn.get(this)), Qn.delete(this)
                        },
                        ma = function() {
                            this.stop(!0), fa.call(this, {
                                _buffer: null,
                                _source: null,
                                _loadPromise: null,
                                _audioLoadPromiseResolve: null,
                                _audioLoadPromiseReject: null
                            })
                        },
                        ba = function(e) {
                            var t, r;
                            ma.call(this);
                            var n = new G(((e, n) => {
                                t = e, r = n
                            }));
                            fa.call(this, {
                                src: e,
                                _ready: !1,
                                _played: !1,
                                _loadPromise: n,
                                _audioLoadPromiseResolve: t,
                                _audioLoadPromiseReject: r
                            })
                        },
                        wa = {},
                        ka = (e, t) => e + "-" + t,
                        Sa = function(e, t) {
                            var r = ka(t, e);
                            wa[r] ? wa[r]++ : wa[r] = 1
                        };
                    class Ia {
                        constructor({
                            withReport: e
                        } = {}) {
                            Wn || ("function" == typeof(Wn = Cn()).create && Wn.create(-1, !0), (l.IS_IOS || l.IS_ANDROID) && (Wn.onmessage = e => {
                                var {
                                    message: t,
                                    node_id: r
                                } = e;
                                if ("real_play" === t) {
                                    var n = ea.get(r);
                                    if (ea.delete(r), n) {
                                        var {
                                            _instanceId: a,
                                            src: o
                                        } = n, i = ka(a, o);
                                        wa[i] && (wa[i]--, this.ignoreReport || Date.now())
                                    }
                                }
                            }));
                            var t = Wn.createGain();
                            t && t.connect && t.connect(Wn.destination);
                            var r = {
                                    withReport: e
                                },
                                n = new G(((e, t) => {
                                    r._audioLoadPromiseResolve = e, r._audioLoadPromiseReject = t
                                }));
                            qn.set(this, Object.assign(r, {
                                startTime: 0,
                                autoplay: !1,
                                loop: !1,
                                volume: 1,
                                playbackRate: 1,
                                paused: !0,
                                duration: NaN,
                                _loadPromise: n,
                                _gainNode: t,
                                _played: !1,
                                _playbackTime: 0,
                                _ready: !1,
                                _isPlaying: !1,
                                src: "",
                                _playPendingIdMap: {},
                                _instanceId: ++Bn
                            }))
                        }
                        get src() {
                            return da.call(this, "src")
                        }
                        set src(e) {
                            var {
                                src: t,
                                _gainNode: r
                            } = ha.call(this);
                            r && "string" == typeof e && e.length > 0 && t !== e && (t && ba.call(this, e), fa.call(this, {
                                src: e
                            }), sa(e, ((t, {
                                sync: r
                            }) => {
                                var {
                                    src: n,
                                    _gainNode: a,
                                    _isPlaying: o,
                                    autoplay: i,
                                    _audioLoadPromiseResolve: s
                                } = ha.call(this);
                                if (a) {
                                    if (n === e) {
                                        if (fa.call(this, {
                                                _ready: !0,
                                                _buffer: t,
                                                duration: t.duration
                                            }), r) setTimeout((() => {
                                            var e = Hn.get(this);
                                            e && e()
                                        }), 0);
                                        else {
                                            var c = Hn.get(this);
                                            c && c()
                                        }
                                        return !i || o || no() || this.play(), s(!1), null
                                    }
                                    s(!0)
                                }
                            }), (t => {
                                var r = `set audio src "${e}" fail: ${t.message||t.errMsg}`;
                                console.error(t), w.error("loadAudioFail ", t);
                                var n = ha.call(this),
                                    {
                                        _audioLoadPromiseReject: a
                                    } = n,
                                    o = Vn.get(this);
                                o && o({
                                    type: "error",
                                    errMsg: r,
                                    errno: t.errno
                                }), a(t)
                            })))
                        }
                        get startTime() {
                            return da.call(this, "startTime")
                        }
                        set startTime(e) {
                            var {
                                _played: t,
                                startTime: r,
                                _gainNode: n
                            } = ha.call(this);
                            n && e !== r && "number" == typeof e && e >= 0 && (fa.call(this, {
                                startTime: e
                            }), t || this.seek(e))
                        }
                        get autoplay() {
                            return da.call(this, "autoplay")
                        }
                        set autoplay(e) {
                            var {
                                autoplay: t,
                                _gainNode: r
                            } = ha.call(this);
                            r && !!e !== t && (e && (this.ignoreReport = !0, Fn()), fa.call(this, {
                                autoplay: !!e
                            }))
                        }
                        get loop() {
                            return da.call(this, "loop")
                        }
                        set loop(e) {
                            var {
                                _source: t,
                                _gainNode: r
                            } = ha.call(this);
                            r && (fa.call(this, {
                                loop: e = !!e
                            }), e && (this.ignoreReport = !0, Fn()), t && (t.loop = e))
                        }
                        get volume() {
                            return da.call(this, "volume")
                        }
                        set volume(e) {
                            var {
                                volume: t,
                                _gainNode: r
                            } = ha.call(this);
                            r && "number" == typeof e && e >= 0 && e <= 1 && e !== t && (fa.call(this, {
                                volume: e
                            }), r && r.gain && (r.gain.value = e))
                        }
                        get playbackRate() {
                            return da.call(this, "playbackRate")
                        }
                        set playbackRate(e) {
                            var {
                                playbackRate: t,
                                _source: r,
                                _gainNode: n
                            } = ha.call(this);
                            n && "number" == typeof e && t !== e && e >= .5 && e <= 2 && (fa.call(this, {
                                playbackRate: e,
                                _lastCurrentTime: this.currentTime,
                                _startedAt: Wn.currentTime
                            }), r && (r.playbackRate.value = e))
                        }
                        get duration() {
                            return da.call(this, "duration")
                        }
                        get currentTime() {
                            var {
                                currentPlayBackTime: e
                            } = ya.call(this);
                            return e
                        }
                        set currentTime(e) {
                            if ("number" == typeof e && e >= 0) {
                                var {
                                    _isPlaying: t,
                                    _gainNode: r
                                } = ha.call(this);
                                if (!r) return;
                                var n = Yn.get(this),
                                    a = Zn.get(this),
                                    o = Hn.get(this);
                                a && a(), this.ignoreReport = !0, Fn(), t ? (this.stop(!0), fa.call(this, {
                                    _playbackTime: e
                                }), this.play(!0)) : fa.call(this, {
                                    _playbackTime: e
                                }), n && n(), o && o()
                            }
                        }
                        get paused() {
                            return da.call(this, "paused")
                        }
                        get buffered() {
                            var {
                                duration: e
                            } = ha.call(this);
                            return e > 0 ? e : 0
                        }
                        play(e = !1) {
                            var t = ha.call(this),
                                {
                                    _isPlaying: r,
                                    _ready: n,
                                    _loadPromise: a,
                                    _gainNode: o,
                                    _playPendingIdMap: i,
                                    withReport: s,
                                    src: c,
                                    _instanceId: u
                                } = t;
                            if (o) {
                                var l = this.lastPlayTime,
                                    p = Date.now();
                                if (this.lastPlayTime = p, l && p - l < 1e3 && (this.ignoreReport = !0, Fn()), !r || e || !s || this.ignoreReport) {
                                    !e && s && this.ignoreReport;
                                    var f = () => {
                                        if (!e) {
                                            var t = Kn.get(this);
                                            t && t()
                                        }
                                    };
                                    if (n) {
                                        var d;
                                        try {
                                            ga.call(this, t)
                                        } catch (t) {
                                            d = t;
                                            var h = Vn.get(this);
                                            h && h({
                                                type: "error",
                                                errMsg: t.message
                                            }), !e && s && t.message, console.error(t)
                                        }
                                        d || (!e && s && Sa(c, u), f())
                                    } else {
                                        var v = ++$n;
                                        i[v] = !0, a.then((l => {
                                            var p = !1 === i[v];
                                            if (delete i[v], l) return r = null, n = null, a = null, o = null, t = null, void(f = null);
                                            if (!p) {
                                                var d, h = ha.call(this),
                                                    {
                                                        _isPlaying: g
                                                    } = h;
                                                if (!g) {
                                                    try {
                                                        ga.call(this, h)
                                                    } catch (t) {
                                                        d = t;
                                                        var y = Vn.get(this);
                                                        y && y({
                                                            type: "error",
                                                            errMsg: t.message
                                                        }), !e && s && t.message, console.error(t)
                                                    }
                                                    return d || (!e && s && Sa(c, u), f()), null
                                                }
                                            }
                                        })).catch((e => {
                                            s && (e.errMsg || e.message)
                                        }))
                                    }
                                } else Date.now()
                            }
                        }
                        pause() {
                            var e = ha.call(this),
                                {
                                    _isPlaying: t,
                                    _source: r,
                                    _gainNode: n,
                                    _playPendingIdMap: a
                                } = e;
                            if (n)
                                if (r && t) {
                                    var o = zn.get(this);
                                    r.stop(0), r.disconnect(), r.onended = null, fa.call(this, {
                                        _isPlaying: !1,
                                        _playbackTime: this.currentTime,
                                        paused: !0,
                                        _endedHandler: null
                                    }), o && o()
                                } else Object.keys(a).forEach((e => {
                                    a[e] = !1
                                }))
                        }
                        stop(e = !1) {
                            var {
                                _source: t,
                                _gainNode: r,
                                _isPlaying: n,
                                _playPendingIdMap: a
                            } = ha.call(this);
                            if (r) {
                                if (t) try {
                                    var o = Jn.get(this);
                                    t.stop(0), t.disconnect(), t.onended = null, fa.call(this, {
                                        _isPlaying: !1,
                                        _playbackTime: 0,
                                        paused: !0,
                                        _endedHandler: null
                                    }), !e && o && o()
                                } catch (e) {}
                                n || Object.keys(a).forEach((e => {
                                    a[e] = !1
                                }))
                            }
                        }
                        seek(e) {
                            if ("number" == typeof e && e >= 0) {
                                var {
                                    _isPlaying: t,
                                    _gainNode: r
                                } = ha.call(this);
                                if (!r) return;
                                var n = Yn.get(this),
                                    a = Zn.get(this),
                                    o = Hn.get(this);
                                a && a(), this.ignoreReport = !0, Fn(), t ? (this.stop(!0), fa.call(this, {
                                    _playbackTime: e
                                }), this.play(!0)) : fa.call(this, {
                                    _playbackTime: e
                                }), n && n(), o && o()
                            }
                        }
                        destroy() {
                            var {
                                _gainNode: e
                            } = ha.call(this);
                            e && _a.call(this)
                        }
                        set oncanplay(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                Hn.set(this, e)
                            } else Hn.delete(this)
                        }
                        set onended(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                Gn.set(this, e)
                            } else Gn.delete(this)
                        }
                        set onerror(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                Vn.set(this, e)
                            } else Vn.delete(this)
                        }
                        set onplay(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                Kn.set(this, e)
                            } else Kn.delete(this)
                        }
                        set onpause(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                zn.set(this, e)
                            } else zn.delete(this)
                        }
                        set onstop(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                Jn.set(this, e)
                            } else Jn.delete(this)
                        }
                        set onseeked(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                Yn.set(this, e)
                            } else Yn.delete(this)
                        }
                        set onseeking(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                Zn.set(this, e)
                            } else Zn.delete(this)
                        }
                        set ontimeupdate(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                var r = Qn.get(this);
                                clearInterval(r);
                                var n = setInterval((() => {
                                    var {
                                        _isPlaying: t
                                    } = ha.call(this);
                                    t && e()
                                }), 350);
                                Qn.set(this, n)
                            } else Qn.delete(this)
                        }
                        set onwaiting(e) {
                            if ("function" == typeof e) {
                                var {
                                    _gainNode: t
                                } = ha.call(this);
                                if (!t) return;
                                Xn.set(this, e)
                            } else Xn.delete(this)
                        }
                    }
                    var xa, Ta = () => function() {
                            if (!An) throw new Error("detect WebAudioContext too early");
                            return !!Tn
                        }() && !0,
                        Aa = new WeakMap,
                        Ca = new WeakMap,
                        Ea = function() {
                            return Ca.get(this)
                        },
                        Pa = {},
                        Oa = (e, t) => e + "-" + t,
                        Ra = () => (xa || "function" == typeof(xa = Cn()).create && xa.create(), xa),
                        Ma = 0,
                        Da = 0,
                        ja = new Map;
                    class La {
                        constructor({
                            size: e,
                            type: t
                        }) {
                            var r = Ra(),
                                n = r.createHTMLAudioElement();
                            (Da += 1) >= 200 && console.warn("warning(wx.createInnerAudioContext): Too many (>200) InnerAudioContext instances have been created, please destroy the existing instances first !");
                            var a = r.createMediaElementSource(n),
                                o = r.createGain();
                            a.connect(o), o && o.connect && o.connect(r.destination), Aa.set(this, n);
                            var i = (0, wt.M8)();
                            Ca.set(this, {
                                startTime: 0,
                                source: a,
                                gain: o,
                                _instanceId: i,
                                size: e,
                                type: t,
                                _isStop: !1
                            }), n.addEventListener("error", (e => {
                                var t, r = (null === (t = Aa.get(this)) || void 0 === t ? void 0 : t.src) || "";
                                this.reportFailPlay(r, e.message)
                            })), n.addEventListener("inner", (e => {
                                if ("real_play" === e.type) {
                                    var {
                                        play_id: t
                                    } = e;
                                    if (t) {
                                        t = +t;
                                        var r = ja.get(t);
                                        if (ja.delete(t), r) {
                                            var {
                                                _instanceId: n,
                                                src: a,
                                                size: o
                                            } = r, i = Oa(n, a);
                                            Pa[i] && (Pa[i]--, this.reportSuccessPlay(a, n, Date.now(), o))
                                        }
                                    }
                                }
                            }))
                        }
                        get src() {
                            var e;
                            return this.cloudId ? this.cloudId : null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.src
                        }
                        set src(e) {
                            Aa.get(this) && Pn([e], "audio", (t => {
                                /^(cloud):\/\//.test(e) ? this.cloudId = e : this.cloudId = "", e = t.data[0].url, Aa.get(this).src = e
                            }))
                        }
                        get startTime() {
                            var e;
                            return null === (e = Ca.get(this)) || void 0 === e ? void 0 : e.startTime
                        }
                        set startTime(e) {
                            var {
                                _played: t,
                                startTime: r
                            } = Ea.call(this);
                            e !== r && "number" == typeof e && e >= 0 && Ca.get(this) && (Ca.get(this).startTime = e, t || this.seek(e))
                        }
                        get autoplay() {
                            var e;
                            return null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.autoplay
                        }
                        set autoplay(e) {
                            Aa.get(this) && (e && (this.ignoreReport = !0, Fn()), Aa.get(this).autoplay = e)
                        }
                        get loop() {
                            var e;
                            return null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.loop
                        }
                        set loop(e) {
                            Aa.get(this) && (e && (this.ignoreReport = !0, Fn()), Aa.get(this).loop = e)
                        }
                        get volume() {
                            var e;
                            return null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.volume
                        }
                        set volume(e) {
                            Aa.get(this) && (Aa.get(this).volume = e)
                        }
                        get playbackRate() {
                            var e;
                            return null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.playbackRate
                        }
                        set playbackRate(e) {
                            Aa.get(this) && (Aa.get(this).playbackRate = e)
                        }
                        get duration() {
                            var e;
                            return null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.duration
                        }
                        get currentTime() {
                            var e;
                            return null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.currentTime
                        }
                        set currentTime(e) {
                            if (Aa.get(this)) {
                                this.ignoreReport = !0, Fn();
                                var t = Ca.get(this);
                                t && (t._isStop = !1), Aa.get(this).currentTime = e
                            }
                        }
                        get paused() {
                            var e;
                            return null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.paused
                        }
                        get buffered() {
                            var e;
                            return null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.buffered
                        }
                        play() {
                            var e, t, r, n, a = null === (e = Aa.get(this)) || void 0 === e ? void 0 : e.src,
                                o = null === (t = Ca.get(this)) || void 0 === t ? void 0 : t._instanceId,
                                i = null === (r = Ca.get(this)) || void 0 === r ? void 0 : r.size,
                                s = this.lastPlayTime,
                                c = Date.now();
                            this.lastPlayTime = c, s && c - s < 1e3 && (this.ignoreReport = !0, Fn()), o && this.reportBeginPlay(a, o);
                            var u = ++Ma;
                            (l.IS_IOS || l.IS_ANDROID) && ja.set(u, {
                                    _instanceId: o,
                                    src: a,
                                    size: i
                                }),
                                function(e, t) {
                                    var r = Oa(t, e);
                                    Pa[r] ? Pa[r]++ : Pa[r] = 1
                                }(a, o);
                            var p = Ca.get(this);
                            p && (p._isStop = !1), null === (n = Aa.get(this)) || void 0 === n || n.play(u)
                        }
                        pause() {
                            var e;
                            null === (e = Aa.get(this)) || void 0 === e || e.pause()
                        }
                        stop() {
                            var e = Aa.get(this);
                            if (e) {
                                e.pause();
                                var t = Ca.get(this);
                                t && (t._isStop = !0), e.currentTime = 0
                            }
                        }
                        seek(e) {
                            if (Aa.get(this)) {
                                this.ignoreReport = !0, Fn();
                                var t = Ca.get(this);
                                t && (t._isStop = !1), Aa.get(this).currentTime = e
                            }
                        }
                        destroy() {
                            var e, t = Ca.get(this);
                            t && (t.gain && t.gain.disconnect && t.gain.disconnect(), null === (e = t.source) || void 0 === e || e.disconnect());
                            Aa.delete(this), Ca.delete(this), Da -= 1
                        }
                        set oncanplay(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("canplay", ((...t) => {
                                Ca.get(this)._isStop || e(...t)
                            }))
                        }
                        set onended(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("ended", e)
                        }
                        set onerror(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("error", e)
                        }
                        set onplay(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("play", e)
                        }
                        set onpause(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("pause", e)
                        }
                        set onstop(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("stop", e)
                        }
                        set onseeked(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("seeked", e)
                        }
                        set onseeking(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("seeking", e)
                        }
                        set ontimeupdate(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("timeupdate", e)
                        }
                        set onwaiting(e) {
                            var t;
                            null === (t = Aa.get(this)) || void 0 === t || t.addEventListener("waiting", e)
                        }
                    }
                    var Na = r(7849),
                        Fa = r(4571),
                        Wa = new Set([1177, 1184, 1200, 1228]),
                        $a = new Set([0, 1, 2, 7]),
                        Ba = () => {
                            var {
                                scene: e
                            } = (0, Na._)();
                            return Wa.has(e) && $a.has(n.default.appType) && "default" !== (0, Fa.kd)()
                        },
                        Ua = ["src", "startTime", "autoplay", "loop", "obeyMuteSwitch", "volume", "playbackRate", "duration", "currentTime", "paused", "buffered", "referrerPolicy"],
                        qa = ["startTime", "duration", "currentTime"],
                        Ha = ["Canplay", "Ended", "Error", "Pause", "Play", "Seeked", "Seeking", "Stop", "TimeUpdate", "Waiting"],
                        Ga = new Set,
                        Va = new WeakMap,
                        Ka = new WeakMap,
                        za = new WeakMap,
                        Ja = new WeakMap;
                    class Ya {
                        constructor(e, t = 1e3, r) {
                            var n = new ur.Z;
                            Va.set(this, e), Ja.set(this, {
                                conversion: t,
                                type: r
                            }), Ua.forEach((r => Object.defineProperty(this, r, {
                                get: () => qa.includes(r) ? e[r] / t : e[r],
                                set(n) {
                                    Ba() || (qa.includes(r) ? e[r] = t * n : e[r] = n)
                                }
                            }))), Ha.forEach((t => {
                                this["on" + t] = e => {
                                    var r = h.surroundThirdByTryCatch(e, `at audioContext.on${t} callback function`);
                                    Ka.set(e, r), za.set(r, e), n.on(t, r)
                                }, this["off" + t] = e => {
                                    if ((0, F.mf)(e)) {
                                        var r = Ka.get(e);
                                        (0, F.mf)(r) && (n.off(t, r), Ka.delete(e), za.delete(r))
                                    } else n.listeners(t).forEach((e => {
                                        var t = za.get(e);
                                        Ka.delete(t), za.delete(e)
                                    })), n.removeAllListeners(t)
                                }, e["on" + t.toLowerCase()] = (e, r) => {
                                    e ? (0, F.Kn)(e) ? n.emit(t, e) : n.emit(t, {
                                        errCode: e,
                                        errMsg: r
                                    }) : n.emit(t), "Play" === t ? Ga.add(this) : "Ended" !== t && "Error" !== t && "Pause" !== t && "Stop" !== t || Ga.delete(this)
                                }
                            }))
                        }
                        play() {
                            var e;
                            Ba() || no() && "inner" !== Ja.get(this).type || null === (e = Va.get(this)) || void 0 === e || e.play()
                        }
                        stop() {
                            var e;
                            null === (e = Va.get(this)) || void 0 === e || e.stop()
                        }
                        pause() {
                            var e;
                            null === (e = Va.get(this)) || void 0 === e || e.pause()
                        }
                        seek(e) {
                            var t, r;
                            if (!Ba()) {
                                var {
                                    conversion: n
                                } = null !== (t = Ja.get(this)) && void 0 !== t ? t : {};
                                null === (r = Va.get(this)) || void 0 === r || r.seek(n * e)
                            }
                        }
                        destroy() {
                            var e = Va.get(this);
                            e.destroy && e.destroy(), Ha.forEach((e => {
                                this["off" + e]()
                            })), Ga.delete(this), Va.delete(this)
                        }
                        static pauseAllAudio() {
                            Ga.forEach((e => {
                                if ("inner" !== Ja.get(e).type) {
                                    var t = Va.get(e);
                                    t && t.pause()
                                }
                            }))
                        }
                    }
                    class Za extends Ya {
                        constructor({
                            type: e
                        }) {
                            super(new K.Z.Audio, 1e3, e)
                        }
                    }
                    class Qa extends Ya {
                        constructor({
                            withReport: e,
                            type: t
                        } = {}) {
                            super(new Ia({
                                withReport: e
                            }), 1, t)
                        }
                    }
                    class Xa extends Ya {
                        constructor({
                            size: e,
                            type: t
                        } = {}) {
                            super(new La({
                                size: e
                            }), 1, t)
                        }
                    }

                    function eo(e) {
                        if ("string" != typeof e) return String(Number.parseInt(e, 10));
                        for (var t, r = 0; r < e.length; r++)
                            if (!Number.isNaN(parseInt(e[r], 10))) {
                                t = r;
                                break
                            } return e.slice(t)
                    }

                    function to(e, t) {
                        return e || t ? e ? t ? function(e, t) {
                            if ("string" != typeof e || "string" != typeof t) return 0;
                            for (var r = e.split("."), n = t.split("."), a = Math.max(r.length, n.length); r.length < a;) r.push("0");
                            for (; n.length < a;) n.push("0");
                            for (var o = 0; o < a; o++) {
                                var i = parseInt(r[o], 10),
                                    s = parseInt(n[o], 10);
                                if (i > s) return 1;
                                if (i < s) return -1
                            }
                            return 0
                        }(eo(e), eo(t)) : 1 : -1 : 0
                    }
                    new Set;
                    var ro = !1;
                    "undefined" != typeof IS_SDK_PACKAGE || (0, p.jQ)("onAudioInterruptionBegin", (e => {
                        !0, !1 === ro && In.emit(e)
                    })), "undefined" != typeof IS_SDK_PACKAGE || (0, p.jQ)("onAudioInterruptionEnd", (e => {
                        !1, !1 === ro && xn.emit(e)
                    }));
                    var no = () => ro,
                        ao = new WeakMap,
                        oo = new WeakMap,
                        io = new WeakMap,
                        so = new WeakMap,
                        co = new WeakMap,
                        uo = new WeakMap,
                        lo = new WeakMap,
                        po = new WeakMap,
                        fo = new Map,
                        ho = new Map,
                        vo = new Map,
                        go = w.createLogger("InnerAudio"),
                        yo = function(e, t) {
                            oo.set(this, Object.assign(oo.get(this), {
                                [e]: t
                            })), "src" === e && oo.set(this, Object.assign(oo.get(this), {
                                paused: !0
                            })), so.get(this) && (setTimeout((() => {
                                var r = Object.assign({}, oo.get(this), co.get(this), {
                                    timestamp: Date.now(),
                                    audioId: ao.get(this),
                                    success: () => {
                                        oo.set(this, Object.assign(oo.get(this), {
                                            [e]: t
                                        }))
                                    },
                                    fail: () => {
                                        mo.call(this)
                                    }
                                });
                                no() && (r.autoplay = !1), (0, p.IN)("setAudioState", r), so.set(this, !0)
                            }), 0), so.set(this, !1)), co.set(this, Object.assign(co.get(this), {
                                [e]: t
                            }))
                        },
                        _o = function(e, t) {
                            lo.get(this).then((() => {
                                yo.call(this, e, t)
                            }))
                        },
                        mo = function(e, t) {
                            var r = oo.get(this)[e];
                            return (0, p.IN)("getAudioState", {
                                audioId: ao.get(this),
                                success: n => {
                                    delete n.errMsg, oo.set(this, Object.assign(oo.get(this), n)), r = n[e], "function" == typeof t && t(r)
                                }
                            }), r
                        },
                        bo = function(e) {
                            var t = ao.get(this);
                            (0, p.IN)("operateAudio", Object.assign({
                                timestamp: Date.now(),
                                audioId: t,
                                fail: ({
                                    errMsg: r
                                }) => {
                                    go.error(`operateAudio fail: errMsg="${r}"`, e.operationType, t), Ao.call(this, "error", {
                                        errMsg: r,
                                        errCode: -1
                                    });
                                    var n = oo.get(this);
                                    null != n && n.withReport && (null == n || n.implementType)
                                }
                            }, e))
                        },
                        wo = function(e) {
                            return lo.get(this).then((() => {
                                if ("play" === e.operationType) {
                                    var t = oo.get(this);
                                    if (null != t && t.withReport && !t.ignoreReport) {
                                        ao.get(this);
                                        null == t || t.src, null == t || t.implementType
                                    }
                                }
                                setTimeout((() => {
                                    bo.call(this, e)
                                }), 0)
                            }))
                        },
                        ko = new ur.Z;
                    "undefined" != typeof IS_SDK_PACKAGE || (0, p.jQ)("onAudioStateChange", ((e = {}) => {
                        if ("real_play" === e.state) {
                            var t = fo.get(e.audioId);
                            null != t && t.withReport && !t.ignoreReport && (null == t || t.src, e.audioId, Date.now(), null == t || t.implementType, null == t || t.size)
                        } else {
                            e.state = e.state.toLowerCase();
                            var {
                                state: r,
                                audioId: n,
                                errMsg: a
                            } = e;
                            delete e.audioId, delete e.state;
                            var o = "play" !== r,
                                i = fo.get(n);
                            i && (i.paused = o), "error" === r && null != i && i.withReport && (null == i || i.src, null == i || i.implementType);
                            var s = vo.get(n);
                            if (!s || !(r in s)) return;
                            ko.emit(`${n}_onAudioStateChange_${r}`, e)
                        }
                    }));
                    var So = function(e, t) {
                            var r = `${ao.get(this)}_onAudioStateChange_${e}`,
                                n = r => {
                                    h.surroundThirdByTryCatch(t, `at audioContext.on${e} callback function`)(r)
                                };
                            uo.set(t, n), ko.on(r, n)
                        },
                        Io = function(e, t) {
                            lo.get(this).then((() => {
                                So.call(this, e, t)
                            }))
                        },
                        xo = function(e, t) {
                            var r = `${ao.get(this)}_onAudioStateChange_${e}`;
                            if ((0, F.mf)(t)) {
                                var n = uo.get(t);
                                (0, F.mf)(n) && ko.off(r, n)
                            } else ko.removeAllListeners(r)
                        },
                        To = function(e, t) {
                            lo.get(this).then((() => {
                                xo.call(this, e, t)
                            }))
                        },
                        Ao = function(e, t) {
                            ko.emit(`${ao.get(this)}_onAudioStateChange_${e}`, t)
                        },
                        Co = 0,
                        Eo = !1;
                    const Po = class {
                        constructor({
                            pluginId: e,
                            withReport: t,
                            type: r,
                            size: n
                        } = {}) {
                            var a, o;
                            oo.set(this, {}), co.set(this, {}), io.set(this, void 0), so.set(this, !0), "string" == typeof e && po.set(this, e.split("/", 1)[0]), lo.set(this, new G(((e, t) => {
                                a = e, o = t
                            })));
                            var i = {},
                                s = 0 === n ? "jsapiRemote-1.0" : "jsapiLocal-1.0";
                            (0, p.IN)(l.IS_ANDROID || l.WK_RENDERER_H5 || l.IS_MINA ? "createAudioInstanceAsync" : "createAudioInstance", {
                                timestamp: Date.now(),
                                success: e => {
                                    var o = {
                                        src: "",
                                        startTime: 0,
                                        paused: !0,
                                        currentTime: 0,
                                        duration: 0,
                                        obeyMuteSwitch: !0,
                                        volume: 1,
                                        autoplay: !1,
                                        loop: !1,
                                        buffered: 0,
                                        referrerPolicy: "",
                                        withReport: t,
                                        type: r,
                                        size: n,
                                        implementType: s
                                    };
                                    if (vo.set(e.audioId, i), fo.set(e.audioId, o), ao.set(this, e.audioId), oo.set(this, o), K.Z.BindingObject) {
                                        var c = new K.Z.BindingObject;
                                        this.__bindingObject = c, ho[c.__id] = e.audioId
                                    }(Co += 1) >= 1024 && !Eo && l.IS_IOS && (Eo = !0, v.reportIDKey({
                                        id: 356,
                                        key: "audioInstancesCountReach1024"
                                    })), Co >= 200 && console.warn("warning(wx.createInnerAudioContext): Too many (200) InnerAudioContext instances have been created, please destroy the existing instances first !"), setTimeout(a, 0)
                                },
                                fail: e => {
                                    t && e.errMsg, o(e.errMsg)
                                }
                            }), ["Play", "Pause", "Stop", "Canplay", "Error", "Ended", "Waiting", "Seeking", "Seeked"].forEach((e => {
                                this[`on${e}`] = t => {
                                    var r = e.toLowerCase();
                                    i[r] = 1, Io.call(this, r, t)
                                }, this[`off${e}`] = t => {
                                    var r = e.toLowerCase();
                                    delete i[r], To.call(this, r, t)
                                }
                            }))
                        }
                        get src() {
                            return this.cloudId ? this.cloudId : mo.call(this, "src")
                        }
                        set src(e) {
                            if ("string" == typeof e && 0 !== e.length) {
                                var t = po.get(this);
                                "string" == typeof t && null === (0, se.pD)(e) && (e = (0, se.RP)(t, e)), Pn([e], "audio", (t => {
                                    /^(cloud):\/\//.test(e) ? this.cloudId = e : this.cloudId = "", e = t.data[0].url, _o.call(this, "src", e)
                                }))
                            } else Ao.call(this, "error", {
                                errMsg: `Failed to set src, the src ${e} is invalid.`
                            })
                        }
                        get startTime() {
                            return mo.call(this, "startTime") / 1e3
                        }
                        set startTime(e) {
                            "number" == typeof e ? _o.call(this, "startTime", 1e3 * e) : Ao("error", {
                                errMsg: `Failed to set startTime, the startTime ${e} is invalid.`
                            })
                        }
                        set autoplay(e) {
                            if ("boolean" == typeof e && !Ba()) {
                                if (!0 === e) {
                                    var t = ao.get(this),
                                        r = fo.get(t);
                                    r && (r.ignoreReport = !0, Fn())
                                }
                                _o.call(this, "autoplay", e)
                            }
                        }
                        get autoplay() {
                            return mo.call(this, "autoplay")
                        }
                        set loop(e) {
                            if ("boolean" == typeof e) {
                                if (!0 === e) {
                                    var t = ao.get(this),
                                        r = fo.get(t);
                                    r && (r.ignoreReport = !0, Fn())
                                }
                                _o.call(this, "loop", e)
                            }
                        }
                        get loop() {
                            return mo.call(this, "loop")
                        }
                        set obeyMuteSwitch(e) {
                            "boolean" == typeof e && _o.call(this, "obeyMuteSwitch", e)
                        }
                        get obeyMuteSwitch() {
                            return mo.call(this, "obeyMuteSwitch")
                        }
                        set volume(e) {
                            "number" != typeof e || e < 0 || e > 1 || _o.call(this, "volume", e)
                        }
                        get volume() {
                            return mo.call(this, "volume")
                        }
                        set playbackRate(e) {
                            "number" != typeof e || e < 0 || _o.call(this, "playbackRate", e)
                        }
                        get playbackRate() {
                            return mo.call(this, "playbackRate")
                        }
                        set referrerPolicy(e) {
                            "string" == typeof e && _o.call(this, "referrerPolicy", e)
                        }
                        get referrerPolicy() {
                            return mo.call(this, "referrerPolicy")
                        }
                        get paused() {
                            return mo.call(this, "paused")
                        }
                        get duration() {
                            return mo.call(this, "duration") / 1e3
                        }
                        set currentTime(e) {
                            if ("number" != typeof e || e < 0) Ao("error", {
                                errMsg: `Failed to seek, the currentTime ${e} is invalid.`
                            });
                            else {
                                var t = ao.get(this),
                                    r = fo.get(t);
                                r && (r.ignoreReport = !0, Fn()), wo.call(this, {
                                    operationType: "seek",
                                    currentTime: 1e3 * e
                                })
                            }
                        }
                        get currentTime() {
                            return mo.call(this, "currentTime") / 1e3
                        }
                        get buffered() {
                            return mo.call(this, "buffered") / 1e3
                        }
                        play() {
                            if (!(Ba() || no() && "inner" !== oo.get(this).type)) {
                                var e = this.lastPlayTime,
                                    t = Date.now();
                                if (this.lastPlayTime = t, e && t - e < 1e3) {
                                    var r = ao.get(this),
                                        n = fo.get(r);
                                    n && (n.ignoreReport = !0, Fn())
                                }
                                wo.call(this, {
                                    operationType: "play"
                                }).catch((e => {
                                    console.error(e)
                                }))
                            }
                        }
                        pause() {
                            wo.call(this, {
                                operationType: "pause"
                            })
                        }
                        stop() {
                            wo.call(this, {
                                operationType: "stop"
                            })
                        }
                        seek(e) {
                            if (!Ba())
                                if ("number" != typeof e || e < 0) Ao("error", {
                                    errMsg: `Failed to seek, the currentTime ${e} is invalid.`
                                });
                                else {
                                    var t = ao.get(this),
                                        r = fo.get(t);
                                    r && (r.ignoreReport = !0, Fn()), wo.call(this, {
                                        operationType: "seek",
                                        currentTime: 1e3 * e
                                    })
                                }
                        }
                        destroy() {
                            lo.get(this).then((() => {
                                var e = ao.get(this);
                                fo.has(e) && (["play", "pause", "stop", "canplay", "error", "ended", "waiting", "seeking", "seeked"].forEach((t => {
                                    var r = `${e}_onAudioStateChange_${t}`;
                                    ko.removeAllListeners(r)
                                })), vo.delete(e), fo.delete(e), Co -= 1, setTimeout((() => {
                                    (0, p.IN)("destroyAudioInstance", {
                                        audioId: e
                                    })
                                }), 0))
                            }))
                        }
                        onTimeUpdate(e) {
                            lo.get(this).then((() => {
                                var t = `${ao.get(this)}_onAudioStateChange_timeupdate`;
                                void 0 === io.get(this) && io.set(this, setInterval((() => {
                                    if ("active" === d.Z.runningStatus && !0 !== oo.get(this).paused && 1 !== oo.get(this).paused) {
                                        var e = oo.get(this).currentTime;
                                        mo.call(this, "currentTime", (r => {
                                            r !== e && ko.emit(t)
                                        }))
                                    }
                                }), 250)), ko.removeAllListeners(t);
                                var r = t => {
                                    h.surroundThirdByTryCatch(e, "at audioContext.onTimeUpdate callback function")(t)
                                };
                                uo.set(e, r), ko.on(t, r)
                            }))
                        }
                        offTimeUpdate(e) {
                            lo.get(this).then((() => {
                                To.call(this, "timeupdate", e)
                            }))
                        }
                        static pauseAllAudio() {
                            fo.forEach(((e, t) => {
                                "inner" !== e.type && (0, p.IN)("operateAudio", {
                                    timestamp: Date.now(),
                                    audioId: t,
                                    operationType: "pause"
                                })
                            }))
                        }
                    };
                    var Oo, Ro = new WeakMap,
                        Mo = function(e) {
                            return Ro.get(e) || {}
                        },
                        Do = function(e, t) {
                            var r;
                            return null === (r = Ro.get(e)) || void 0 === r ? void 0 : r[t]
                        },
                        jo = new Map,
                        Lo = (0, $.Fr)(q),
                        No = function(e, t) {
                            var {
                                bufferedOperations: r,
                                staticOperations: n
                            } = e;
                            e.audioInstance = t, Object.keys(n).forEach((e => {
                                var r = n[e];
                                (0, F.DM)(r) ? r.forEach((r => {
                                    t["on" + e](r)
                                })): t[e] = r
                            })), r.forEach((e => {
                                "set" === e.type ? t[e.key] = e.value : "method" === e.type && t[e.key](e.value)
                            })), e.bufferedOperations = []
                        },
                        Fo = function(e, t, r) {
                            var n;
                            e.staticOperations && t in e.staticOperations ? (e.staticOperations[t] = r, e.audioInstance && (e.audioInstance[t] = r)) : e.audioInstance ? e.audioInstance[t] = r : null == e || null === (n = e.bufferedOperations) || void 0 === n || n.push({
                                type: "set",
                                value: r,
                                key: t
                            })
                        },
                        Wo = function(e, t, r, n) {
                            var a;
                            n ? ("on" === n ? e.staticOperations && e.staticOperations[t].add(r) : "off" === n && e.staticOperations && e.staticOperations[t].delete(r), e.audioInstance && e.audioInstance[n + t] && e.audioInstance[n + t](r)) : e.audioInstance ? e.audioInstance[t] && e.audioInstance[t](r) : null == e || null === (a = e.bufferedOperations) || void 0 === a || a.push({
                                type: "method",
                                value: r,
                                key: t
                            })
                        },
                        $o = (e, t) => {
                            var r = !1;
                            if (Ta()) {
                                var a = Ra();
                                if (a && "function" == typeof a.createHTMLAudioElement) {
                                    var o, i, s = "";
                                    if (l.IS_IOS) s = null === (i = n.default.expt) || void 0 === i ? void 0 : i.clicfg_appbrand_ios_inneraudio2webaudio_stream;
                                    else if (l.IS_ANDROID) {
                                        var c;
                                        s = null === (c = n.default.expt) || void 0 === c ? void 0 : c.clicfg_appbrand_android_inneraudio2webaudio_stream
                                    }
                                    try {
                                        s = s.replace(/;/g, ","), o = JSON.parse(s)
                                    } catch (e) {}
                                    if (o) {
                                        var {
                                            open: u,
                                            blacklist: p,
                                            whitelist: f
                                        } = o;
                                        r = p ? !p.includes(n.default.accountInfo.appId) && 1 === u : f ? !!f.includes(n.default.accountInfo.appId) && 1 === u : 1 === u
                                    }
                                }
                            }
                            var d = e => {
                                var {
                                    stats: a
                                } = e;
                                a.size < 102400 ? (() => {
                                    if (void 0 === Oo) {
                                        var e = l.IS_IOS ? "clicfg_appbrand_ios_inneraudio2webaudio_usewebaudio" : "clicfg_appbrand_android_inneraudio2webaudio_usewebaudio";
                                        Oo = 1 === Number(n.default.expt && n.default.expt[e])
                                    }
                                    return Oo
                                })() ? t("NativeWebAudio", !1) : t("AudioJsApi", !1, a.size) : t(r ? "HTMLAudioElement" : "AudioJsApi", !0, a.size)
                            };
                            if (/^(http|https):\/\//.test(e) || /^(cloud):\/\//.test(e) || /^(wxblob:\/\/)/.test(e)) t(r ? "HTMLAudioElement" : "AudioJsApi", !0, 0);
                            else {
                                var h = (e => jo.has(e) ? jo.get(e) : Lo({
                                    path: e
                                }).then((t => (jo.set(e, t), t))))(e);
                                (0, F.tI)(h) ? h.then((e => {
                                    d(e)
                                })).catch((e => {
                                    console.error(e), w.error("statLocalAudio fail", e), t("AudioJsApi", !0, 0)
                                })): d(h)
                            }
                        },
                        Bo = function(e, t) {
                            var r;
                            this.stop(!0), t._statPromise = null, t._statPromiseResolve = null;
                            var n = new G((e => {
                                r = e
                            }));
                            t.src = e, t._ready = !1, t._statPromise = n, t._statPromiseResolve = r
                        };
                    class Uo {
                        constructor({
                            pluginId: e,
                            type: t
                        } = {}) {
                            var r = {
                                pluginId: e,
                                bufferedOperations: [],
                                staticOperations: {
                                    startTime: 0,
                                    autoplay: !1,
                                    loop: !1,
                                    volume: 1,
                                    playbackRate: 1,
                                    referrerPolicy: "",
                                    TimeUpdate: new Set,
                                    Canplay: new Set,
                                    Play: new Set,
                                    Pause: new Set,
                                    Stop: new Set,
                                    Ended: new Set,
                                    Error: new Set,
                                    Waiting: new Set,
                                    Seeking: new Set,
                                    Seeked: new Set
                                },
                                _ready: !1,
                                type: t
                            };
                            r._statPromise = new G((e => {
                                r._statPromiseResolve = e
                            })), Ro.set(this, r)
                        }
                        get src() {
                            return Do(this, "src")
                        }
                        set src(e) {
                            var t = Mo(this),
                                {
                                    src: r,
                                    audioInstance: n,
                                    audioInstanceType: a,
                                    pluginId: o
                                } = t;
                            "string" == typeof e && e.length > 0 && r !== e && (r && Bo.call(this, e, t), t.src = e, $o(e, n ? (r, i, s) => {
                                var c = Mo(this);
                                if (c.src === e) {
                                    var {
                                        _statPromiseResolve: u
                                    } = c;
                                    t._ready = !0, t.audioInstanceType = r, r === a ? n.src = e : (n.destroy(), t.audioInstance = null, "AudioJsApi" === r ? (Fo(t, "src", e), No(t, new Po({
                                        pluginId: o,
                                        withReport: i,
                                        type: Ro.get(this).type,
                                        size: s
                                    }))) : "NativeWebAudio" === r ? (Fo(t, "src", e), No(t, new Qa({
                                        withReport: i,
                                        type: Ro.get(this).type
                                    }))) : "HTMLAudioElement" === r && (Fo(t, "src", e), No(t, new Xa({
                                        withReport: i,
                                        type: Ro.get(this).type,
                                        size: s
                                    })))), u && u()
                                }
                            } : (r, n, a) => {
                                var i = Mo(this);
                                if (i.src === e) {
                                    var {
                                        _statPromiseResolve: s
                                    } = i;
                                    t._ready = !0, t.audioInstanceType = r, "AudioJsApi" === r ? (Fo(t, "src", e), No(t, new Po({
                                        pluginId: o,
                                        withReport: n,
                                        type: Ro.get(this).type,
                                        size: a
                                    }))) : "NativeWebAudio" === r ? (Fo(t, "src", e), No(t, new Qa({
                                        withReport: n,
                                        type: Ro.get(this).type
                                    }))) : "HTMLAudioElement" === r && (Fo(t, "src", e), No(t, new Xa({
                                        withReport: n,
                                        size: a
                                    }))), s && s()
                                }
                            }))
                        }
                        get startTime() {
                            var e = Do(this, "startTime");
                            return void 0 !== e ? e : 0
                        }
                        set startTime(e) {
                            var t = Mo(this),
                                {
                                    startTime: r
                                } = t;
                            e !== r && "number" == typeof e && e >= 0 && (t.startTime = e, Fo(t, "startTime", e))
                        }
                        get autoplay() {
                            var e = Do(this, "autoplay");
                            return void 0 !== e && e
                        }
                        set autoplay(e) {
                            var t = Mo(this),
                                {
                                    autoplay: r,
                                    _statPromise: n
                                } = t;
                            (e = !!e) !== r && (t.autoplay = e, e ? n && n.then((() => {
                                Fo(t, "autoplay", e)
                            })) : Fo(t, "autoplay", e))
                        }
                        get loop() {
                            var e = Do(this, "loop");
                            return void 0 !== e && e
                        }
                        set loop(e) {
                            var t = Mo(this),
                                {
                                    loop: r
                                } = t;
                            (e = !!e) !== r && (t.loop = e, Fo(t, "loop", e))
                        }
                        get volume() {
                            var e = Do(this, "volume");
                            return void 0 !== e ? e : 1
                        }
                        set volume(e) {
                            var t = Mo(this),
                                {
                                    volume: r
                                } = t;
                            "number" == typeof e && e >= 0 && e <= 1 && e !== r && (t.volume = e, Fo(t, "volume", e))
                        }
                        get playbackRate() {
                            var e = Do(this, "playbackRate");
                            return void 0 !== e ? e : 1
                        }
                        set playbackRate(e) {
                            var t = Mo(this),
                                {
                                    playbackRate: r
                                } = t;
                            "number" == typeof e && r !== e && e >= .5 && e <= 2 && (t.playbackRate = e, Fo(t, "playbackRate", e))
                        }
                        get duration() {
                            var {
                                audioInstance: e
                            } = Mo(this);
                            return e ? e.duration : 0
                        }
                        get currentTime() {
                            var {
                                audioInstance: e
                            } = Mo(this);
                            return e ? e.currentTime : 0
                        }
                        set currentTime(e) {
                            if ("number" == typeof e && e >= 0) {
                                var t = Mo(this);
                                t.currentTime = e, Fo(t, "currentTime", e)
                            }
                        }
                        get paused() {
                            var {
                                audioInstance: e
                            } = Mo(this);
                            return !e || e.paused
                        }
                        get buffered() {
                            var {
                                audioInstance: e
                            } = Mo(this);
                            return e ? e.buffered : 0
                        }
                        set obeyMuteSwitch(e) {}
                        get obeyMuteSwitch() {
                            return !0
                        }
                        get referrerPolicy() {
                            return Do(this, "referrerPolicy") || ""
                        }
                        set referrerPolicy(e) {
                            var t = Mo(this),
                                {
                                    referrerPolicy: r
                                } = t;
                            "string" == typeof e && e.length > 0 && r !== e && (t.referrerPolicy = e, Fo(t, "referrerPolicy", e))
                        }
                        play() {
                            var e = Mo(this),
                                {
                                    _statPromise: t,
                                    _ready: r
                                } = e;
                            r ? Wo(e, "play") : t && t.then((() => {
                                Wo(e, "play")
                            }))
                        }
                        pause() {
                            var e = Mo(this);
                            Wo(e, "pause")
                        }
                        stop() {
                            var e = Mo(this);
                            Wo(e, "stop")
                        }
                        seek(e) {
                            var t = Mo(this);
                            Wo(t, "seek", e)
                        }
                        destroy() {
                            var e = Mo(this);
                            Wo(e, "destroy"), Ro.delete(this)
                        }
                        onTimeUpdate(e) {
                            var t = Mo(this);
                            Wo(t, "TimeUpdate", e, "on")
                        }
                        offTimeUpdate(e) {
                            var t = Mo(this);
                            Wo(t, "TimeUpdate", e, "off")
                        }
                        onCanplay(e) {
                            var t = Mo(this);
                            Wo(t, "Canplay", e, "on")
                        }
                        offCanplay(e) {
                            var t = Mo(this);
                            Wo(t, "Canplay", e, "off")
                        }
                        onPlay(e) {
                            var t = Mo(this);
                            Wo(t, "Play", e, "on")
                        }
                        offPlay(e) {
                            var t = Mo(this);
                            Wo(t, "Play", e, "off")
                        }
                        onPause(e) {
                            var t = Mo(this);
                            Wo(t, "Pause", e, "on")
                        }
                        offPause(e) {
                            var t = Mo(this);
                            Wo(t, "Pause", e, "off")
                        }
                        onStop(e) {
                            var t = Mo(this);
                            Wo(t, "Stop", e, "on")
                        }
                        offStop(e) {
                            var t = Mo(this);
                            Wo(t, "Stop", e, "off")
                        }
                        onEnded(e) {
                            var t = Mo(this);
                            Wo(t, "Ended", e, "on")
                        }
                        offEnded(e) {
                            var t = Mo(this);
                            Wo(t, "Ended", e, "off")
                        }
                        onError(e) {
                            var t = Mo(this);
                            Wo(t, "Error", e, "on")
                        }
                        offError(e) {
                            var t = Mo(this);
                            Wo(t, "Error", e, "off")
                        }
                        onWaiting(e) {
                            var t = Mo(this);
                            Wo(t, "Waiting", e, "on")
                        }
                        offWaiting(e) {
                            var t = Mo(this);
                            Wo(t, "Waiting", e, "off")
                        }
                        onSeeking(e) {
                            var t = Mo(this);
                            Wo(t, "Seeking", e, "on")
                        }
                        offSeeking(e) {
                            var t = Mo(this);
                            Wo(t, "Seeking", e, "off")
                        }
                        onSeeked(e) {
                            var t = Mo(this);
                            Wo(t, "Seeked", e, "on")
                        }
                        offSeeked(e) {
                            var t = Mo(this);
                            Wo(t, "Seeked", e, "off")
                        }
                    }
                    var qo = !1;
                    (l.IS_IOS || l.IS_ANDROID) && n.default.onReady((() => {
                        var e;
                        e = l.IS_IOS ? "clicfg_appbrand_ios_inneraudio2webaudio" : "clicfg_appbrand_android_inneraudio2webaudio", 1 === Number(n.default.expt && n.default.expt[e]) && (0, ae.J)("forceUseAudioDynamic") ? (w.info("开启 forceUseAudioDynamic"), qo = !0) : w.info("关闭 forceUseAudioDynamic")
                    }));
                    var Ho = w.createLogger("InnerAudioContext"),
                        Go = function(e = {}, t = "outer") {
                            var r = !0;
                            if (l.IS_ANDROID) {
                                var {
                                    system: a
                                } = n.default.isReady ? Object.assign({}, or) : ((new Error).stack, {}); - 1 === to(a, "6.0.0") && (r = !1)
                            }
                            l.WK_RENDERER_H5 && (r = !1);
                            var o = (0, Te.hI)(this),
                                {
                                    useWebAudioImplement: i
                                } = e;
                            return l.IS_PC && (i = !0), l.IS_MINA && K.Z.Audio ? (Ho.info("using NativeAudio"), new Za({
                                type: t
                            })) : i && Ta() && r ? (Ho.info("using WebAudio"), new Qa({
                                type: t
                            })) : Ta() && r && (0, l.isGame)() && qo ? (Ho.info("using AudioDynamic"), new Uo({
                                pluginId: o,
                                type: t
                            })) : (Ho.info("using AudioJsApi"), new Po({
                                pluginId: o,
                                type: t
                            }))
                        },
                        Vo = function(e = {}) {
                            return Go.call(this, e)
                        },
                        Ko = r(2657),
                        zo = r(4366),
                        Jo = r(4813);
                    const Yo = a.applyDecoratedDescriptor;
                    var Zo, Qo = r.n(Yo),
                        Xo = 0,
                        ei = new WeakMap,
                        ti = new WeakMap,
                        ri = new WeakMap,
                        ni = new WeakMap,
                        ai = {},
                        oi = new W;
                    (0, p.jQ)("onSocketTaskStateChange", ((e = {}) => {
                        var {
                            state: t,
                            socketTaskId: r
                        } = e, n = ai[r];
                        if (n) {
                            var a = ei.get(n);
                            if (delete e.state, delete e.socketTaskId, n) {
                                if ("open" === t) {
                                    zr(), n.readyState = n.OPEN;
                                    var o = ri.get(n).url,
                                        i = Date.now() - ni.get(n),
                                        s = e.statusCode,
                                        c = ri.get(n).__skipDomainCheck__,
                                        u = e.profile;
                                    N("connectSocket", o, 1, i, "", s, c, 0, 0, u, 0)
                                } else "close" !== t && "error" !== t || (n.readyState = n.CLOSED);
                                oi.emit(`${a}${t}`, e), oi.emit(`onSocket${t[0].toUpperCase()+t.substr(1)}`, e, n), "close" === t && (delete ai[r], oi.removeAllListeners(`${a}open`), oi.removeAllListeners(`${a}close`), oi.removeAllListeners(`${a}error`), oi.removeAllListeners(`${a}message`))
                            }
                        }
                    }));
                    var ii = function(e, t) {
                            oi.on(`${ei.get(this)}${e}`, h.surroundThirdByTryCatch(t, `at socketTask.on${e} callback function`))
                        },
                        si = (Zo = class {
                            constructor(e, t) {
                                this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3;
                                var r = this.CONNECTING;
                                Object.defineProperty(this, "readyState", {
                                    get: () => r,
                                    set: e => {
                                        r = e
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                });
                                var n, a = Xo++;
                                ei.set(this, a), ri.set(this, t), Object.defineProperty(this, "__socketInstance__", {
                                    value: e,
                                    writable: !1,
                                    configurable: !1,
                                    enumerable: !1
                                }), ["success", "fail", "complete"].forEach((e => {
                                    "function" == typeof t[e] && (t[e] = h.surroundThirdByTryCatch(t[e], `at api connectSocket ${e} callback function`))
                                })), ni.set(this, Date.now()), (0, F.hj)(t.timeout) || (t.timeout = 0);
                                var o = t.forceCellularNetwork,
                                    i = () => {
                                        var e = {
                                            ...t,
                                            forceCellular: o
                                        };
                                        (0, p.IN)("createSocketTask", e, {
                                            beforeAll(e) {
                                                e.errMsg = e.errMsg.replace("createSocketTask", "connectSocket")
                                            },
                                            beforeSuccess: e => {
                                                ti.set(this, e.socketTaskId), ai[e.socketTaskId] = this
                                            },
                                            beforeFail: e => {
                                                var r = t.url,
                                                    a = Date.now() - ni.get(this),
                                                    o = t.__skipDomainCheck__;
                                                n = e.errMsg, N("connectSocket", r, 2, a, n, "", o, 0, 0, {}, 0, {}, void 0, !0, e.errno)
                                            }
                                        }), n && (this.readyState = this.CLOSED, setTimeout((() => {
                                            oi.emit(`${a}error`, {
                                                errMsg: n
                                            })
                                        }), 0))
                                    },
                                    s = () => {
                                        (0, F.mf)(t.customCheck) ? t.customCheck(t, (e => {
                                            e ? ((0, p.YG)("connectSocket", t, e), this.readyState = this.CLOSED, setTimeout((() => {
                                                oi.emit(`${a}error`, {
                                                    errMsg: e
                                                })
                                            }), 0)) : i()
                                        })): i()
                                    };
                                o ? "boolean" != typeof o ? (console.warn("connectSocket argument forceCellularNetwork must be boolean but accept " + typeof o), o = !1, s()) : Yr().then((e => {
                                    e || (o = !1), s()
                                })) : s()
                            }
                            send(e) {
                                if (this.readyState === this.OPEN) {
                                    var t = Date.now();
                                    (0, p.IN)("operateSocketTask", Object.assign({}, e, {
                                        operationType: "send",
                                        socketTaskId: ti.get(this)
                                    }), {
                                        beforeAll: r => {
                                            if (r.errMsg = r.errMsg.replace("operateSocketTask", "sendSocketMessage"), Math.random() > .99) {
                                                var n = ri.get(this).url,
                                                    a = r.errMsg.indexOf("ok") > -1 ? 1 : 2,
                                                    o = Date.now() - t,
                                                    i = r.errMsg,
                                                    s = ri.get(this).__skipDomainCheck__,
                                                    c = (0, $.Y6)(e.data);
                                                N("sendSocketMessage", n, a, o, i, "", s, c)
                                            }
                                        }
                                    })
                                } else(0, p.YG)("SocketTask.send", e, "SocketTask.readyState is not OPEN")
                            }
                            close(e = {}) {
                                (0, p.IN)("operateSocketTask", Object.assign({
                                    code: 1e3
                                }, e, {
                                    operationType: "close",
                                    socketTaskId: ti.get(this)
                                }), {
                                    beforeAll(e) {
                                        e.errMsg = e.errMsg.replace("operateSocketTask", "closeSocket")
                                    }
                                })
                            }
                            onOpen(e) {
                                ii.call(this, "open", e)
                            }
                            onClose(e) {
                                ii.call(this, "close", e)
                            }
                            onMessage(e) {
                                ii.call(this, "message", e)
                            }
                            onError(e) {
                                ii.call(this, "error", e)
                            }
                        }, Qo()(Zo.prototype, "send", [wt.Qu], Object.getOwnPropertyDescriptor(Zo.prototype, "send"), Zo.prototype), Qo()(Zo.prototype, "close", [wt.Qu], Object.getOwnPropertyDescriptor(Zo.prototype, "close"), Zo.prototype), Zo),
                        ci = 5;
                    n.default.onReady((() => {
                        n.default.wxAppInfo && n.default.wxAppInfo.maxWebsocketConnect && (ci = n.default.wxAppInfo.maxWebsocketConnect)
                    }));
                    var ui = new WeakMap,
                        li = new WeakMap,
                        pi = new WeakMap,
                        fi = {},
                        di = new W,
                        hi = 0,
                        vi = 0;

                    function gi(e, t, r) {
                        t.errMsg = t.errMsg || "ok";
                        var n = "ok" === t.errMsg;
                        (0, p.FE)({
                            name: e,
                            args: r,
                            success: n,
                            errMsg: t.errMsg
                        })
                    }
                    class yi {
                        constructor(e, t) {
                            this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3;
                            var r = this.CONNECTING;
                            Object.defineProperty(this, "readyState", {
                                get: () => r,
                                set: e => {
                                    r = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(this, "__socketInstance__", {
                                value: e,
                                writable: !1,
                                configurable: !1,
                                enumerable: !1
                            });
                            var n = K.Z.WSS,
                                a = hi++,
                                o = t.workerId ? new n(t.workerId) : new n;
                            delete t.workerId, ui.set(this, t), li.set(this, o), pi.set(this, a);
                            var i = Date.now();
                            o.onopen = (e, r) => {
                                this.readyState !== this.CLOSED && (zr(), vi++, this.readyState = this.OPEN, di.emit(`${a}open`, {
                                    header: e,
                                    profile: r
                                }), di.emit("onSocketOpen", {
                                    header: e,
                                    profile: r
                                }, this), N("connectSocket", t.url, 1, Date.now() - i, "", "", t.__skipDomainCheck__, 0, 0, r, 0))
                            }, o.onclose = (e, t) => {
                                vi--, this.readyState = this.CLOSED, di.emit(`${a}close`, {
                                    code: e,
                                    reason: t
                                }), di.emit("onSocketClose", {
                                    code: e,
                                    reason: t
                                }, this)
                            }, o.onmessage = e => {
                                this.readyState !== this.CLOSED && ((0, F.eP)(e) && (e.__proto__ = ArrayBuffer.prototype), di.emit(`${a}message`, {
                                    data: e
                                }), di.emit("onSocketMessage", {
                                    data: e
                                }, this))
                            }, o.onerror = (e, t) => {
                                vi--, this.readyState = this.CLOSED, setTimeout((() => {
                                    di.emit(`${a}error`, {
                                        errCode: e,
                                        errMsg: t
                                    }), di.emit("onSocketError", {
                                        errCode: e,
                                        errMsg: t
                                    }, this)
                                }), 0)
                            };
                            var s = () => {
                                var e = {
                                    errMsg: ""
                                };
                                if (vi >= ci) this.readyState = this.CLOSED, e.errMsg = `fail reach max websocket connect count ${ci}`;
                                else {
                                    var r = (0, $.v7)(t, ["url", "header", "timeout", "protocols", "tcpNoDelay", "perMessageDeflate", "enableProfile", "forceCellularNetwork"]);
                                    r.forceCellularNetwork && "boolean" == typeof r.forceCellularNetwork ? Yr().then((n => {
                                        n && (r.forceCellular = !0), r.forceCellularNetwork = void 0, e.errMsg = o.connect(r), "string" == typeof e.errMsg && "" !== e.errMsg || (e.errMsg = "ok"), e.errMsg, "ok" === e.errMsg && (fi[a] = this), gi("connectSocket", e, t)
                                    })) : (r.forceCellularNetwork && "boolean" != typeof r.forceCellularNetwork && (console.warn("connectSocket argument forceCellularNetwork must be boolean but accept " + typeof r.forceCellularNetwork), r.forceCellularNetwork = void 0), e.errMsg = o.connect(r), "string" == typeof e.errMsg && "" !== e.errMsg || (e.errMsg = "ok"), e.errMsg, "ok" === e.errMsg && (fi[a] = this), gi("connectSocket", e, t))
                                }
                            };
                            (0, F.mf)(t.customCheck) ? t.customCheck(t, (e => {
                                e ? gi("connectSocket", {
                                    errMsg: e
                                }, t) : s()
                            })): (s(), lr({
                                api: "websocket",
                                url: t.url
                            }).then((e => {
                                if (t.url, !(t.__skipDomainCheck__ || e.isInDomainList || e.isInLAN && !e.isLocalHost)) throw new Error("fail:url not in domain list")
                            })).catch((e => {
                                this.readyState = this.CLOSED;
                                var t = e.message || e.errMsg;
                                di.emit(`${a}error`, {
                                    errMsg: t
                                }), di.emit("onSocketError", {
                                    errMsg: t
                                }, this)
                            })))
                        }
                        send(e = {}) {
                            var t = {
                                errMsg: li.get(this).send(e.data)
                            };
                            (e.success || e.fail || e.complete) && gi("sendSocketMessage", t, e)
                        }
                        close(e = {}) {
                            this.readyState, gi("closeSocket", {
                                errMsg: li.get(this).close((0, F.hj)(e.code) ? e.code : 1e3, e.reason)
                            }, e)
                        }
                        onOpen(e) {
                            di.on(`${pi.get(this)}open`, h.surroundThirdByTryCatch(e, "at socketTask.onOpen callback function"))
                        }
                        onClose(e) {
                            di.on(`${pi.get(this)}close`, h.surroundThirdByTryCatch(e, "at socketTask.onClose callback function"))
                        }
                        onMessage(e) {
                            di.on(`${pi.get(this)}message`, h.surroundThirdByTryCatch(e, "at socketTask.onMessage callback function"))
                        }
                        onError(e) {
                            di.on(`${pi.get(this)}error`, h.surroundThirdByTryCatch(e, "at socketTask.onError callback function"))
                        }
                    }
                    var _i = si,
                        mi = ai;
                    r.g.__isAppServiceRemoteDebugMode__ || (0, K.a)((e => {
                        e.WSS && n.default.onReady((() => {
                            var t = !1,
                                r = l.IS_IOS ? "clicfg_appbrand_ios_native_socket_wcwss_new" : 1;
                            1 === r ? t = !0 : (0, yt.b)({
                                experimentId: r,
                                experimentType: "Expt",
                                success: e => {
                                    e && 1 === Number(e.testConfig) && (t = !0)
                                }
                            });
                            var n = (0, ae.J)("bindingWebSocket");
                            t || n || e.WSS.force ? (_i = yi, mi = fi, (0, mr.Tk)(/^connectSocket/, 2), w.info(`binding socket, abtest: ${t}, permission: ${n}`)) : w.info(`jsapi socket, abtest: ${t}, permission: ${n}`)
                        }))
                    }));
                    var bi = new WeakMap,
                        wi = {};

                    function ki(e, t) {
                        return wi[t] || (wi[t] = new WeakMap, oi.on(`onSocket${t}`, Si(t)), di.on(`onSocket${t}`, Si(t))),
                            function(r) {
                                (0, p.r3)(`onSocket${t}`, r, F.ZT) && wi[t].set(e, r)
                            }
                    }

                    function Si(e) {
                        return function(t, r) {
                            var n = r.__socketInstance__,
                                a = wi[e].get(n),
                                o = bi.get(n);
                            a && r === o && h.surroundThirdByTryCatch(a, `at onSocket${e} callback function`)(t)
                        }
                    }
                    var Ii, xi, Ti, Ai = (e = {}) => {
                            e = Object.assign({
                                __skipDomainCheck__: !1
                            }, e);
                            var t = {};
                            return {
                                connectSocket(r) {
                                    var {
                                        workerId: n
                                    } = r;
                                    if (delete r.workerId, (0, p.r3)("connectSocket", r, {
                                            url: ""
                                        }))
                                        if (!1 !== (0, ce.mQ)(r.url, "websocket")) {
                                            "object" != typeof r.header && void 0 !== r.header && delete r.header;
                                            var a = {};
                                            r.header && (a = (0, se.Nf)(r.header)), r.__skipDomainCheck__ = e.__skipDomainCheck__, (0, ae.J)("skipDomainCheck_socket") && (r.__skipDomainCheck__ = !0);
                                            try {
                                                var o = bi.get(t),
                                                    i = new _i(t, Object.assign({}, r, {
                                                        header: a,
                                                        ...n ? {
                                                            workerId: n
                                                        } : {}
                                                    }));
                                                return o && o.readyState !== o.CLOSED ? o.readyState : bi.set(t, i), i
                                            } catch (e) {
                                                return e.message, void(0, p.YG)("connectSocket", r, e.message)
                                            }
                                        } else(0, p.YG)("connectSocket", r, `invalid url "${r.url}"`)
                                },
                                closeSocket(e) {
                                    var r = bi.get(t);
                                    for (var n in r && r.readyState !== r.CLOSED ? (r.readyState = r.CLOSED, r.close(e)) : (0, p.YG)("closeSocket", e, "WebSocket is not connected"), mi) {
                                        var a = mi[n];
                                        a.__socketInstance__ === t && (a.readyState = a.CLOSED, a !== r && a.close())
                                    }
                                },
                                sendSocketMessage(e) {
                                    var r = bi.get(t);
                                    r && r.readyState === r.OPEN ? r.send(e) : (0, p.YG)("sendSocketMessage", e, "WebSocket is not connected")
                                },
                                onSocketOpen: ki(t, "Open"),
                                onSocketClose: ki(t, "Close"),
                                onSocketMessage: ki(t, "Message"),
                                onSocketError: ki(t, "Error")
                            }
                        },
                        Ci = Ai(),
                        Ei = () => {
                            var e;
                            Ii || (Ii = Qt("game"), ((e = {}) => {
                                (0, ae.J)("startQuotaControl") ? (0, p.IN)("setFileSpaceStatistics", e) : (0, p.FE)({
                                    name: "setFileSpaceStatistics",
                                    args: e,
                                    errno: void 0,
                                    errMsg: "not permission",
                                    success: !1
                                })
                            })({
                                enable: "1" === (null === n.default || void 0 === n.default || null === (e = n.default.expt) || void 0 === e ? void 0 : e.clicfg_android_wagame_frontend_set_file_space_statistics_status)
                            }));
                            return Ii
                        },
                        Pi = () => (xi || (xi = Qt("app")), xi),
                        Oi = r(667),
                        Ri = (e = {}) => ((e = {}) => {
                            if ("string" != typeof e.filePath || !e.filePath.startsWith(Kt())) return Sr(e);
                            (0, p.YG)("downloadFile", e, "permission denied")
                        })({
                            ...e,
                            workerId: Oi.q.workerId
                        }),
                        Mi = !1,
                        Di = e => {
                            var t, r = Oi.q.workerId;
                            if ("app" === e) t = Pi();
                            else {
                                if ("game" !== e) throw Error("context must app or game");
                                t = Ei()
                            }
                            if (!Mi) {
                                var n = t.readFile,
                                    a = t.readFileSync;
                                t.readFile = (e = {}) => {
                                    var t = {
                                        ...e,
                                        workerId: r
                                    };
                                    return n(t)
                                }, t.readFileSync = (...e) => {
                                    for (var t = Array.from(e), n = t.length; n < 4; n++) t[n] = void 0;
                                    return t[4] = r, a(...t)
                                }, Mi = !0
                            }
                            return t
                        };
                    n.default.onReady((() => {
                        Ti = (0, l.isGame)() ? () => Di("game") : () => Di("app")
                    }));
                    var ji = Ci.connectSocket,
                        Li = (e = {}) => {
                            var t = {
                                ...e,
                                workerId: Oi.q.workerId
                            };
                            return ji(t)
                        },
                        Ni = {};
                    n.default.onReady((() => {
                        (0, l.isGame)() ? Object.assign(Ni, u): Object.assign(Ni, s)
                    }))
                },
                3888: e => {
                    "use strict";
                    e.exports = a.asyncToGenerator
                }
            },
            r = {};

        function c(t) {
            var n = r[t];
            if (void 0 !== n) return n.exports;
            var a = r[t] = {
                id: t,
                loaded: !1,
                exports: {}
            };
            return e[t](a, a.exports, c), a.loaded = !0, a.exports
        }
        c.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return c.d(t, {
                a: t
            }), t
        }, c.d = (e, t) => {
            for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, c.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new n("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), c.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e);
        var l = c(8131);
        y = l
    })(), (() => {
        "use strict";
        var e = {
                d: (t, r) => {
                    for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: r[n]
                    })
                },
                o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                r: e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
            },
            t = {};
        e.r(t), e.d(t, {
            define: () => k,
            require: () => A,
            requireOnce: () => C
        });
        var r = ["wx0354ba48aadc0ab2", "wxfa43a4a7041a84de"],
            n = () => "devtools" === o.platform,
            a = (e, t) => {
                var a = "__APP__" === e;
                a || "/" === e.slice(-1) || (e += "/"), n() ? (w.info(`[WxModule] injectSubPackages: ${e}`), u.invoke("injectSubPackages", {
                    subPackages: [e]
                }, t)) : (w.info(`[WxModule] loadSubpackage: ${e}`), __appServiceSDK__.loadSubpackage({
                    name: e,
                    success() {
                        var n = o.subPackages.find((t => t.root === e || t.root === e.slice(0, -1))),
                            i = Object.assign({}, null == n ? void 0 : n.plugins);
                        a && Object.assign(i, o.plugins);
                        var s = Object.keys(i || {}).map((e => {
                            var t = i[e].provider,
                                n = "__plugin__/" + t;
                            return {
                                plugin_id: t,
                                prefix_path: r.includes(t) ? null : n
                            }
                        }));
                        __subContextEngine__.injectEntryFile(a ? "" : e, s);
                        var c = __glassEaselAdapter__.getEnv();
                        c.codeManager.prepareSubPackagesStyle([e]), c.afterPackageCommonEvaluation(), t({
                            errMsg: "loadSubPackage:ok",
                            loaded: !0
                        })
                    },
                    fail() {
                        w.error(`[WxModule] loadSubPackage fail ${e}`), t({
                            errMsg: "loadSubPackage:false",
                            loaded: !1
                        })
                    }
                }))
            },
            i = e => {
                for (var t, r, n = null !== (t = null === (r = o) || void 0 === r ? void 0 : r.subPackages) && void 0 !== t ? t : [], a = 0; a < n.length; ++a) {
                    var i = n[a].root || "";
                    if (i && "/" !== i.slice(-1) && (i += "/"), e.slice(0, i.length) === i) return {
                        subPackage: i,
                        independent: !!n[a].independent
                    }
                }
                return {
                    subPackage: "__APP__",
                    independent: !1
                }
            },
            s = e => {
                for (var t = [], r = e.split("/"), n = 0, a = r.length; n < a; ++n) {
                    var o = r[n];
                    if ("" !== o && "." !== o)
                        if (".." === o) {
                            if (0 === t.length) {
                                t = [];
                                break
                            }
                            t.pop()
                        } else n + 1 < a && ".." === r[n + 1] ? n++ : t.push(o)
                }
                return t
            },
            c = {
                UNLOAD: 1,
                LOADED: 2
            },
            l = {},
            p = (e, t) => {
                l[e] = t
            },
            f = e => l[e];
        var d = new class {
            constructor(e) {
                this._$requireQueues = null, this._$blockingStatus = 0, this._$scope = void 0, this._$err = e => new Error(`Framework inner error: ${e} (scope: ${this._$scope}, status: ${this._$blockingStatus})`), this._$scope = e
            }
            isBlocking() {
                return 1 === this._$blockingStatus
            }
            block() {
                if (!n())
                    if (0 === this._$blockingStatus) this._$requireQueues = [], this._$blockingStatus = 1;
                    else {
                        if (2 !== this._$blockingStatus) throw this._$err("trying to block require at wrong time");
                        this._$blockingStatus = 1
                    }
            }
            queue(e, t) {
                if (!this.isBlocking()) throw this._$err("trying to queue an require when not blocking");
                this._$requireQueues.push([e, t])
            }
            unblock() {
                if (!n()) {
                    if (!this.isBlocking()) throw this._$err("trying to unblock require queue when not blocking");
                    this._$blockingStatus = 2
                }
            }
            flushQueue() {
                if (!n()) {
                    if (2 !== this._$blockingStatus) throw this._$err("require queue flushing must be unblocked");
                    var e = this._$requireQueues;
                    this._$blockingStatus = 0, this._$requireQueues = null, e.forEach((e => {
                        try {
                            e[0].apply(null, e[1])
                        } catch (t) {
                            console.error(`Error during evaluating file "${e[1][0]}": `), console.error(t.message), console.error(t.stack)
                        }
                    }))
                }
            }
        }("/");
        if (globalThis.wxModuleVersion) {
            var h = ~~globalThis.wxModuleVersion;
            globalThis.enableWxModule = 2 > h
        } else globalThis.wxModuleVersion = 2, globalThis.enableWxModule = !0;
        var g = !1,
            y = [],
            m = e => {
                Object.keys(e).forEach((t => {
                    var r = t;
                    t.endsWith("*") && (r = r.slice(0, -1));
                    var n = e[t];
                    e[t].endsWith("*") && (n = n.slice(0, -1)), y.push({
                        key: r,
                        value: n
                    })
                }))
            };
        "function" == typeof o.onReady ? o.onReady((() => {
            "object" == typeof o.resolveAlias && (g = !!Object.keys(o.resolveAlias).length) && m(o.resolveAlias)
        })) : "object" == typeof o.resolveAlias && (g = !!Object.keys(o.resolveAlias).length) && m(o.resolveAlias);
        var b = {};

        function k(e, t) {
            if (f(e) && f(e).factory) {
                var r = f(e),
                    n = t.toString();
                r.factoryString || (r.factoryString = r.factory.toString()), n !== r.factoryString && p(e, {
                    status: c.UNLOAD,
                    factory: t,
                    factoryString: n
                })
            } else p(e, {
                status: c.UNLOAD,
                factory: t
            })
        }
        var S = e => {
                if (e && o.subPackages)
                    for (var t = 0, r = o.subPackages.length; t < r; t++)
                        if (0 === e.indexOf(o.subPackages[t].root)) return o.subPackages[t]
            },
            I = e => {
                var t = s(e + "/index.js").join("/");
                return f(t) ? t : (t = s(e).join("/"), /\.js$/.test(t) || (t += ".js"), f(t) ? t : "")
            },
            x = e => {
                var t = (e => {
                        var t = e.match(/(.*)\/([^/]+)?$/);
                        return null != t && t[1] ? t[1] : "./"
                    })(e),
                    r = function(r, n, a) {
                        var i, c = t;
                        if ("string" != typeof r) throw new Error("require args must be a string");
                        if ("/__wx__/private-api" === r ? i = s(r).join("/") : (g && (i = (e => {
                                var t = {
                                        key: "",
                                        value: ""
                                    },
                                    r = !1;
                                if (y.forEach((n => {
                                        e.startsWith(n.key) && t.key.length < n.key.length && (t = n, r = !0)
                                    })), r) {
                                    var n = e.replace(t.key, t.value);
                                    return "/" === n[0] && (n = n.slice(1)), n
                                }
                            })(r)), void 0 !== i ? (c = "", i = s(i).join("/")) : i = s(c + "/" + r).join("/")), !i) throw new Error(`can not find module : ${i}, require args is ${r}`);
                        try {
                            var u = ((e, t, r) => {
                                    var n = e;
                                    if (/\.js$/.test(n) || (n += ".js"), "string" == typeof n && f(n)) return n;
                                    var a = s(t);
                                    if (!a) throw new Error("can not find module : " + r);
                                    for (var o, i, c = e.substring(a.join("/").length); a.length && (i = a.join("/") + "/miniprogram_npm" + c, !(o = I(i)));) a.pop();
                                    return o || (c = "/" === c[0] ? c : "/" + c, o = I(i = "miniprogram_npm" + c)), o || e
                                })(i, c, r),
                                l = e => "functional-pages" === s(e)[0];
                            if (l(u) !== l(e) && v.thirdErrorReport({
                                    error: new Error(`should not require across "functional-pages" folder, at require("${r}") in ${e}`)
                                }), "devtools" === o.platform && o.subPackages && void 0 === n) {
                                var p = S(u),
                                    d = S(e);
                                p && p !== d && console.warn(`Requires "${r}" from "${e}" without a callback may fail in production, since they are in different subPackages`)
                            }
                            return A(u, void 0, n, r, t, a)
                        } catch (e) {
                            throw e
                        }
                    };
                return r.async = e => new Promise(((t, n) => {
                    try {
                        return r(e, t, n)
                    } catch (e) {
                        n(e)
                    }
                })), r
            },
            T = new class {
                constructor(e) {
                    this._$flags = {}, this._$global = void 0, this.fileStacks = [], this._$global = e
                }
                current() {
                    return {
                        __wxRoute: this._$global.__wxRoute,
                        __wxAppCurrentFile__: this._$global.__wxAppCurrentFile__,
                        __wxRouteBegin: this._$global.__wxRouteBegin
                    }
                }
                restore(e) {
                    void 0 !== e && (this._$global.__wxRoute = e.__wxRoute, this._$global.__wxAppCurrentFile__ = e.__wxAppCurrentFile__, this._$global.__wxRouteBegin = e.__wxRouteBegin)
                }
                saveAndClear(e) {
                    this._$flags[e] = this.current(), this._$global.__wxRoute = "", this._$global.__wxAppCurrentFile__ = "", this._$global.__wxRouteBegin = ""
                }
                runWith(e, t) {
                    this.restore(this._$flags[e]), this.fileStacks.push(this._$flags[e]);
                    var r, n = !1;
                    try {
                        t()
                    } catch (e) {
                        n = !0, r = e
                    }
                    if (this.fileStacks.pop(), this.restore(this.fileStacks[this.fileStacks.length - 1]), n) throw r
                }
            }(globalThis);

        function A(e, t, r, n = "", s, u) {
            if (d.isBlocking()) return T.saveAndClear(e), void d.queue(A, [e, t, r, n, s, u]);
            if (void 0 === t && (t = !0), "string" != typeof e) throw new Error("require args must be a string");
            var l = f(e);
            if (!l) {
                var p = -1 === e.indexOf("/") ? e + "/index.js" : e;
                /\.js$/.test(p = "miniprogram_npm/" + p) || (p += ".js"), l = f(p)
            }
            if (e.endsWith(".js") || (e += ".js"), !l && "devtools" !== o.platform && "undefined" != typeof __subContextEngine__ && o.isLazyLoad) {
                var h = e.slice(0, e.length - 3),
                    v = `${"undefined"!=typeof __LAZY_CODE_LOADING_CHUNK_MAP__&&"string"==typeof __LAZY_CODE_LOADING_CHUNK_MAP__[h]?__LAZY_CODE_LOADING_CHUNK_MAP__[h]:h}.appservice.js`,
                    g = __subContextEngine__.loadJsFiles([v], null, {
                        waitResult: !0,
                        reportKey: `webnode-require-${e.slice(0,e.length-3)}`
                    });
                l = f(e), null == g || g(!!l)
            }
            if ("function" != typeof r) {
                if (!l) throw new Error(`module '${e}' is not defined, require args is '${""===n?e:n}'`);
                var y = {
                        exports: {}
                    },
                    _ = l.factory;
                if (!t || b[e]) return delete l.exports, l.status = c.UNLOAD, b[e] = !0, T.runWith(e, (() => {
                    null == _ || _(x(e), y, y.exports)
                })), y.exports;
                if (l.status === c.UNLOAD) {
                    var m;
                    l.exports = y.exports, l.status = c.LOADED;
                    try {
                        T.runWith(e, (() => {
                            _ && (m = _(x(e), y, y.exports))
                        }))
                    } catch (e) {
                        throw l.status = c.UNLOAD, e
                    }
                    l.exports = void 0 !== y.exports ? y.exports : m
                }
                return l.exports
            }
            var w = t => {
                    var r = "async require: fail";
                    "object" == typeof t && t && t.message && (r = t.message), null == u || u({
                        errMsg: r,
                        mod: e
                    })
                },
                k = function(...e) {
                    try {
                        var t = A(...e);
                        r(t)
                    } catch (e) {
                        w(e)
                    }
                };
            if (l) setTimeout((() => k(e)));
            else {
                var S = "string" == typeof s && i(s).independent,
                    {
                        subPackage: I,
                        independent: C
                    } = i(e);
                !C && S ? a("__APP__", (t => {
                    t && !1 === t.loaded ? w(new Error("loadSubPackage: fail, subPackage: __APP__")) : "__APP__" !== I ? a(I, (t => {
                        t && !1 === t.loaded ? w(new Error(`loadSubPackage: fail, subPackage: ${I}`)) : k(e)
                    })) : r(k(e))
                })) : a(I, (t => {
                    t && !1 === t.loaded ? w(new Error(`loadSubPackage: fail, subPackage: ${I}`)) : k(e)
                }))
            }
        }

        function C(e) {
            return A(e, !1)
        }
        _ = t
    })();
    globalThis.define = _.define, globalThis.require = _.require;
    globalThis.requireOnce = _.requireOnce, e.worker = y
}(this);
var __WAWorkerEndTime__ = Date.now();
"function" == typeof this.__wxLibrary.onEnd && this.__wxLibrary.onEnd(), delete this.__wxLibrary;