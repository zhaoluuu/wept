this.__wxLibrary = {
    fileName: "WASclContext.js",
    envType: "Service",
    contextType: "App:SubContext:Safe",
    execStart: Date.now(),
    mayHaveSnapshot: !1
};
var Reporter, BaseConsole, Trace, __WASclContextStartTime__ = this.__wxLibrary.execStart,
    __libVersionInfo__ = {
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
    window = this || {},
    PromiseRejectionEvent = function() {},
    __clientsubcontext = !0,
    __useSclExparser__ = !0,
    BabelRuntimeHelpers = {};
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

                function o(e) {
                    var t = a(e);
                    return r(t)
                }

                function a(e) {
                    if (!r.o(n, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return n[e]
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = a, e.exports = o, o.id = 5803
            },
            7386: (e, t, r) => {
                "use strict";

                function n(e, t, r, n, o) {
                    var a = {};
                    return Object.keys(n).forEach((function(e) {
                        a[e] = n[e]
                    })), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce((function(r, n) {
                        return n(e, t, r) || r
                    }), a), o && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(o) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
                }
                r.r(t), r.d(t, {
                    default: () => n
                })
            },
            8921: (e, t, r) => {
                "use strict";

                function n(e, t, r, n, o, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value
                    } catch (e) {
                        return void r(e)
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, o)
                }

                function o(e) {
                    return function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(o, a) {
                            var i = e.apply(t, r);

                            function s(e) {
                                n(i, o, a, s, l, "next", e)
                            }

                            function l(e) {
                                n(i, o, a, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }
                }
                r.r(t), r.d(t, {
                    default: () => o
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

                function o(e) {
                    var t = function(e, t) {
                        if ("object" !== n(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(e, t || "default");
                            if ("object" !== n(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === n(t) ? t : String(t)
                }

                function a(e, t, r) {
                    return (t = o(t)) in e ? Object.defineProperty(e, t, {
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
                            a(e, t, r[t])
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
                    o = r(1501),
                    a = r(6724),
                    i = r(1703),
                    s = a.data,
                    l = a.normalize,
                    c = "USE_FUNCTION_CONSTRUCTOR",
                    u = "AsyncIteratorPrototype",
                    d = function(e, t) {
                        if (o(e))
                            for (var r = 0; r < e.length; r++) s[l(e[r])] = t
                    };
                e.exports = function(e) {
                    "object" == typeof e && (d(e.useNative, a.NATIVE), d(e.usePolyfill, a.POLYFILL), d(e.useFeatureDetection, null), n(e, c) && (i[c] = !!e[c]), n(e, u) && (i[c] = e[u]))
                }
            },
            9573: (e, t, r) => {
                var n = r(9548),
                    o = r(1002),
                    a = TypeError;
                e.exports = function(e) {
                    if (n(e)) return e;
                    throw a(o(e) + " is not a function")
                }
            },
            7663: (e, t, r) => {
                var n = r(1908),
                    o = r(1002),
                    a = TypeError;
                e.exports = function(e) {
                    if (n(e)) return e;
                    throw a(o(e) + " is not a constructor")
                }
            },
            8055: (e, t, r) => {
                var n = r(9548),
                    o = String,
                    a = TypeError;
                e.exports = function(e) {
                    if ("object" == typeof e || n(e)) return e;
                    throw a("Can't set " + o(e) + " as a prototype")
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
                    o = r(8995),
                    a = r(7981),
                    i = r(9799),
                    s = r(2317),
                    l = r(6250),
                    c = l("asyncDispose"),
                    u = l("dispose"),
                    d = n([].push),
                    f = function(e, t, r) {
                        return o(r || function(e, t) {
                            return "async-dispose" == t && s(e, c) || s(e, u)
                        }(e, t), e)
                    };
                e.exports = function(e, t, r, n) {
                    var o;
                    if (n) o = i(t) ? f(void 0, r, n) : f(a(t), r, n);
                    else {
                        if (i(t)) return;
                        o = f(t, r)
                    }
                    d(e.stack, o)
                }
            },
            4014: (e, t, r) => {
                var n = r(6250),
                    o = r(3583),
                    a = r(2468).f,
                    i = n("unscopables"),
                    s = Array.prototype;
                null == s[i] && a(s, i, {
                    configurable: !0,
                    value: o(null)
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
                    o = TypeError;
                e.exports = function(e, t) {
                    if (n(t, e)) return e;
                    throw o("Incorrect invocation")
                }
            },
            7981: (e, t, r) => {
                var n = r(3021),
                    o = String,
                    a = TypeError;
                e.exports = function(e) {
                    if (n(e)) return e;
                    throw a(o(e) + " is not an object")
                }
            },
            3860: e => {
                e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
            },
            7854: (e, t, r) => {
                "use strict";
                var n, o, a, i = r(3860),
                    s = r(8521),
                    l = r(2689),
                    c = r(9548),
                    u = r(3021),
                    d = r(5835),
                    f = r(7221),
                    p = r(1002),
                    _ = r(1720),
                    v = r(9146),
                    h = r(4173),
                    g = r(631),
                    m = r(5616),
                    y = r(1672),
                    w = r(6250),
                    b = r(5567),
                    x = r(7832),
                    E = x.enforce,
                    C = x.get,
                    S = l.Int8Array,
                    A = S && S.prototype,
                    O = l.Uint8ClampedArray,
                    T = O && O.prototype,
                    I = S && m(S),
                    R = A && m(A),
                    N = Object.prototype,
                    P = l.TypeError,
                    k = w("toStringTag"),
                    M = b("TYPED_ARRAY_TAG"),
                    D = "TypedArrayConstructor",
                    F = i && !!y && "Opera" !== f(l.opera),
                    j = !1,
                    L = {
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
                    B = {
                        BigInt64Array: 8,
                        BigUint64Array: 8
                    },
                    $ = function(e) {
                        var t = m(e);
                        if (u(t)) {
                            var r = C(t);
                            return r && d(r, D) ? r[D] : $(t)
                        }
                    },
                    W = function(e) {
                        if (!u(e)) return !1;
                        var t = f(e);
                        return d(L, t) || d(B, t)
                    };
                for (n in L)(a = (o = l[n]) && o.prototype) ? E(a)[D] = o : F = !1;
                for (n in B)(a = (o = l[n]) && o.prototype) && (E(a)[D] = o);
                if ((!F || !c(I) || I === Function.prototype) && (I = function() {
                        throw P("Incorrect invocation")
                    }, F))
                    for (n in L) l[n] && y(l[n], I);
                if ((!F || !R || R === N) && (R = I.prototype, F))
                    for (n in L) l[n] && y(l[n].prototype, R);
                if (F && m(T) !== R && y(T, R), s && !d(R, k))
                    for (n in j = !0, h(R, k, {
                            configurable: !0,
                            get: function() {
                                return u(this) ? this[M] : void 0
                            }
                        }), L) l[n] && _(l[n], M, n);
                e.exports = {
                    NATIVE_ARRAY_BUFFER_VIEWS: F,
                    TYPED_ARRAY_TAG: j && M,
                    aTypedArray: function(e) {
                        if (W(e)) return e;
                        throw P("Target is not a typed array")
                    },
                    aTypedArrayConstructor: function(e) {
                        if (c(e) && (!y || g(I, e))) return e;
                        throw P(p(e) + " is not a typed array constructor")
                    },
                    exportTypedArrayMethod: function(e, t, r, n) {
                        if (s) {
                            if (r)
                                for (var o in L) {
                                    var a = l[o];
                                    if (a && d(a.prototype, e)) try {
                                        delete a.prototype[e]
                                    } catch (r) {
                                        try {
                                            a.prototype[e] = t
                                        } catch (e) {}
                                    }
                                }
                            R[e] && !r || v(R, e, r ? t : F && A[e] || t, n)
                        }
                    },
                    exportTypedArrayStaticMethod: function(e, t, r) {
                        var n, o;
                        if (s) {
                            if (y) {
                                if (r)
                                    for (n in L)
                                        if ((o = l[n]) && d(o, e)) try {
                                            delete o[e]
                                        } catch (e) {}
                                if (I[e] && !r) return;
                                try {
                                    return v(I, e, r ? t : F && I[e] || t)
                                } catch (e) {}
                            }
                            for (n in L) !(o = l[n]) || o[e] && !r || v(o, e, t)
                        }
                    },
                    getTypedArrayConstructor: $,
                    isView: function(e) {
                        if (!u(e)) return !1;
                        var t = f(e);
                        return "DataView" === t || d(L, t) || d(B, t)
                    },
                    isTypedArray: W,
                    TypedArray: I,
                    TypedArrayPrototype: R
                }
            },
            819: (e, t, r) => {
                "use strict";
                var n = r(2689),
                    o = r(6619),
                    a = r(8521),
                    i = r(3860),
                    s = r(4046),
                    l = r(1720),
                    c = r(4173),
                    u = r(2669),
                    d = r(9835),
                    f = r(3949),
                    p = r(8299),
                    _ = r(6443),
                    v = r(1169),
                    h = r(8763),
                    g = r(5616),
                    m = r(1672),
                    y = r(4161).f,
                    w = r(5035),
                    b = r(6283),
                    x = r(4029),
                    E = r(7832),
                    C = s.PROPER,
                    S = s.CONFIGURABLE,
                    A = "ArrayBuffer",
                    O = "DataView",
                    T = "prototype",
                    I = "Wrong index",
                    R = E.getterFor(A),
                    N = E.getterFor(O),
                    P = E.set,
                    k = n[A],
                    M = k,
                    D = M && M[T],
                    F = n[O],
                    j = F && F[T],
                    L = Object.prototype,
                    B = n.Array,
                    $ = n.RangeError,
                    W = o(w),
                    U = o([].reverse),
                    G = h.pack,
                    H = h.unpack,
                    V = function(e) {
                        return [255 & e]
                    },
                    Z = function(e) {
                        return [255 & e, e >> 8 & 255]
                    },
                    z = function(e) {
                        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
                    },
                    q = function(e) {
                        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
                    },
                    J = function(e) {
                        return G(e, 23, 4)
                    },
                    K = function(e) {
                        return G(e, 52, 8)
                    },
                    X = function(e, t, r) {
                        c(e[T], t, {
                            configurable: !0,
                            get: function() {
                                return r(this)[t]
                            }
                        })
                    },
                    Y = function(e, t, r, n) {
                        var o = v(r),
                            a = N(e);
                        if (o + t > a.byteLength) throw $(I);
                        var i = a.bytes,
                            s = o + a.byteOffset,
                            l = b(i, s, s + t);
                        return n ? l : U(l)
                    },
                    Q = function(e, t, r, n, o, a) {
                        var i = v(r),
                            s = N(e);
                        if (i + t > s.byteLength) throw $(I);
                        for (var l = s.bytes, c = i + s.byteOffset, u = n(+o), d = 0; d < t; d++) l[c + d] = u[a ? d : t - d - 1]
                    };
                if (i) {
                    var ee = C && k.name !== A;
                    if (d((function() {
                            k(1)
                        })) && d((function() {
                            new k(-1)
                        })) && !d((function() {
                            return new k, new k(1.5), new k(NaN), 1 != k.length || ee && !S
                        }))) ee && S && l(k, "name", A);
                    else {
                        (M = function(e) {
                            return f(this, D), new k(v(e))
                        })[T] = D;
                        for (var te, re = y(k), ne = 0; re.length > ne;)(te = re[ne++]) in M || l(M, te, k[te]);
                        D.constructor = M
                    }
                    m && g(j) !== L && m(j, L);
                    var oe = new F(new M(2)),
                        ae = o(j.setInt8);
                    oe.setInt8(0, 2147483648), oe.setInt8(1, 2147483649), !oe.getInt8(0) && oe.getInt8(1) || u(j, {
                        setInt8: function(e, t) {
                            ae(this, e, t << 24 >> 24)
                        },
                        setUint8: function(e, t) {
                            ae(this, e, t << 24 >> 24)
                        }
                    }, {
                        unsafe: !0
                    })
                } else D = (M = function(e) {
                    f(this, D);
                    var t = v(e);
                    P(this, {
                        type: A,
                        bytes: W(B(t), 0),
                        byteLength: t
                    }), a || (this.byteLength = t, this.detached = !1)
                })[T], j = (F = function(e, t, r) {
                    f(this, j), f(e, D);
                    var n = R(e),
                        o = n.byteLength,
                        i = p(t);
                    if (i < 0 || i > o) throw $("Wrong offset");
                    if (i + (r = void 0 === r ? o - i : _(r)) > o) throw $("Wrong length");
                    P(this, {
                        type: O,
                        buffer: e,
                        byteLength: r,
                        byteOffset: i,
                        bytes: n.bytes
                    }), a || (this.buffer = e, this.byteLength = r, this.byteOffset = i)
                })[T], a && (X(M, "byteLength", R), X(F, "buffer", N), X(F, "byteLength", N), X(F, "byteOffset", N)), u(j, {
                    getInt8: function(e) {
                        return Y(this, 1, e)[0] << 24 >> 24
                    },
                    getUint8: function(e) {
                        return Y(this, 1, e)[0]
                    },
                    getInt16: function(e) {
                        var t = Y(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                        return (t[1] << 8 | t[0]) << 16 >> 16
                    },
                    getUint16: function(e) {
                        var t = Y(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                        return t[1] << 8 | t[0]
                    },
                    getInt32: function(e) {
                        return q(Y(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
                    },
                    getUint32: function(e) {
                        return q(Y(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
                    },
                    getFloat32: function(e) {
                        return H(Y(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
                    },
                    getFloat64: function(e) {
                        return H(Y(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
                    },
                    setInt8: function(e, t) {
                        Q(this, 1, e, V, t)
                    },
                    setUint8: function(e, t) {
                        Q(this, 1, e, V, t)
                    },
                    setInt16: function(e, t) {
                        Q(this, 2, e, Z, t, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    setUint16: function(e, t) {
                        Q(this, 2, e, Z, t, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    setInt32: function(e, t) {
                        Q(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    setUint32: function(e, t) {
                        Q(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    setFloat32: function(e, t) {
                        Q(this, 4, e, J, t, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    setFloat64: function(e, t) {
                        Q(this, 8, e, K, t, arguments.length > 2 ? arguments[2] : void 0)
                    }
                });
                x(M, A), x(F, O), e.exports = {
                    ArrayBuffer: M,
                    DataView: F
                }
            },
            5035: (e, t, r) => {
                "use strict";
                var n = r(18),
                    o = r(3610),
                    a = r(56);
                e.exports = function(e) {
                    for (var t = n(this), r = a(t), i = arguments.length, s = o(i > 1 ? arguments[1] : void 0, r), l = i > 2 ? arguments[2] : void 0, c = void 0 === l ? r : o(l, r); c > s;) t[s++] = e;
                    return t
                }
            },
            778: (e, t, r) => {
                "use strict";
                var n = r(8995),
                    o = r(6619),
                    a = r(18),
                    i = r(1908),
                    s = r(6249),
                    l = r(8631),
                    c = r(6302),
                    u = r(5569),
                    d = r(2317),
                    f = r(9682),
                    p = r(2555),
                    _ = r(6250),
                    v = r(2429),
                    h = r(9937).toArray,
                    g = _("asyncIterator"),
                    m = o(f("Array").values),
                    y = o(m([]).next),
                    w = function() {
                        return new b(this)
                    },
                    b = function(e) {
                        this.iterator = m(e)
                    };
                b.prototype.next = function() {
                    return y(this.iterator)
                }, e.exports = function(e) {
                    var t = this,
                        r = arguments.length,
                        o = r > 1 ? arguments[1] : void 0,
                        f = r > 2 ? arguments[2] : void 0;
                    return new(p("Promise"))((function(r) {
                        var p = a(e);
                        void 0 !== o && (o = n(o, f));
                        var _ = d(p, g),
                            m = _ ? void 0 : u(p) || w,
                            y = i(t) ? new t : [],
                            b = _ ? s(p, _) : new v(c(l(p, m)));
                        r(h(b, o, y))
                    }))
                }
            },
            113: (e, t, r) => {
                var n = r(56);
                e.exports = function(e, t) {
                    for (var r = 0, o = n(t), a = new e(o); o > r;) a[r] = t[r++];
                    return a
                }
            },
            5931: (e, t, r) => {
                "use strict";
                var n = r(8995),
                    o = r(6619),
                    a = r(8582),
                    i = r(18),
                    s = r(56),
                    l = r(8017),
                    c = l.Map,
                    u = l.get,
                    d = l.has,
                    f = l.set,
                    p = o([].push);
                e.exports = function(e) {
                    for (var t, r, o = i(this), l = a(o), _ = n(e, arguments.length > 1 ? arguments[1] : void 0), v = new c, h = s(l), g = 0; h > g; g++) t = _(r = l[g], g, o), d(v, t) ? p(u(v, t), r) : f(v, t, [r]);
                    return v
                }
            },
            9639: (e, t, r) => {
                var n = r(8995),
                    o = r(6619),
                    a = r(8582),
                    i = r(18),
                    s = r(7880),
                    l = r(56),
                    c = r(3583),
                    u = r(113),
                    d = Array,
                    f = o([].push);
                e.exports = function(e, t, r, o) {
                    for (var p, _, v, h = i(e), g = a(h), m = n(t, r), y = c(null), w = l(g), b = 0; w > b; b++) v = g[b], (_ = s(m(v, b, h))) in y ? f(y[_], v) : y[_] = [v];
                    if (o && (p = o(h)) !== d)
                        for (_ in y) y[_] = u(p, y[_]);
                    return y
                }
            },
            5379: (e, t, r) => {
                var n = r(7417),
                    o = r(3610),
                    a = r(56),
                    i = function(e) {
                        return function(t, r, i) {
                            var s, l = n(t),
                                c = a(l),
                                u = o(i, c);
                            if (e && r != r) {
                                for (; c > u;)
                                    if ((s = l[u++]) != s) return !0
                            } else
                                for (; c > u; u++)
                                    if ((e || u in l) && l[u] === r) return e || u || 0;
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
                    o = r(8582),
                    a = r(18),
                    i = r(56),
                    s = function(e) {
                        var t = 1 == e;
                        return function(r, s, l) {
                            for (var c, u = a(r), d = o(u), f = n(s, l), p = i(d); p-- > 0;)
                                if (f(c = d[p], p, u)) switch (e) {
                                    case 0:
                                        return c;
                                    case 1:
                                        return p
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
                    o = r(6619),
                    a = r(8582),
                    i = r(18),
                    s = r(56),
                    l = r(3848),
                    c = o([].push),
                    u = function(e) {
                        var t = 1 == e,
                            r = 2 == e,
                            o = 3 == e,
                            u = 4 == e,
                            d = 6 == e,
                            f = 7 == e,
                            p = 5 == e || d;
                        return function(_, v, h, g) {
                            for (var m, y, w = i(_), b = a(w), x = n(v, h), E = s(b), C = 0, S = g || l, A = t ? S(_, E) : r || f ? S(_, 0) : void 0; E > C; C++)
                                if ((p || C in b) && (y = x(m = b[C], C, w), e))
                                    if (t) A[C] = y;
                                    else if (y) switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return m;
                                case 6:
                                    return C;
                                case 2:
                                    c(A, m)
                            } else switch (e) {
                                case 4:
                                    return !1;
                                case 7:
                                    c(A, m)
                            }
                            return d ? -1 : o || u ? u : A
                        }
                    };
                e.exports = {
                    forEach: u(0),
                    map: u(1),
                    filter: u(2),
                    some: u(3),
                    every: u(4),
                    find: u(5),
                    findIndex: u(6),
                    filterReject: u(7)
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
                    o = r(1501),
                    a = TypeError,
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
                    if (o(e) && !i(e, "length").writable) throw a("Cannot set read only .length");
                    return e.length = t
                } : function(e, t) {
                    return e.length = t
                }
            },
            6283: (e, t, r) => {
                var n = r(3610),
                    o = r(56),
                    a = r(9117),
                    i = Array,
                    s = Math.max;
                e.exports = function(e, t, r) {
                    for (var l = o(e), c = n(t, l), u = n(void 0 === r ? l : r, l), d = i(s(u - c, 0)), f = 0; c < u; c++, f++) a(d, f, e[c]);
                    return d.length = f, d
                }
            },
            7687: (e, t, r) => {
                var n = r(6619);
                e.exports = n([].slice)
            },
            2026: (e, t, r) => {
                var n = r(6283),
                    o = Math.floor,
                    a = function(e, t) {
                        var r = e.length,
                            l = o(r / 2);
                        return r < 8 ? i(e, t) : s(e, a(n(e, 0, l), t), a(n(e, l), t), t)
                    },
                    i = function(e, t) {
                        for (var r, n, o = e.length, a = 1; a < o;) {
                            for (n = a, r = e[a]; n && t(e[n - 1], r) > 0;) e[n] = e[--n];
                            n !== a++ && (e[n] = r)
                        }
                        return e
                    },
                    s = function(e, t, r, n) {
                        for (var o = t.length, a = r.length, i = 0, s = 0; i < o || s < a;) e[i + s] = i < o && s < a ? n(t[i], r[s]) <= 0 ? t[i++] : r[s++] : i < o ? t[i++] : r[s++];
                        return e
                    };
                e.exports = a
            },
            2028: (e, t, r) => {
                var n = r(1501),
                    o = r(1908),
                    a = r(3021),
                    i = r(6250)("species"),
                    s = Array;
                e.exports = function(e) {
                    var t;
                    return n(e) && (t = e.constructor, (o(t) && (t === s || n(t.prototype)) || a(t) && null === (t = t[i])) && (t = void 0)), void 0 === t ? s : t
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
                    for (var r = n(e), o = new t(r), a = 0; a < r; a++) o[a] = e[r - a - 1];
                    return o
                }
            },
            4784: (e, t, r) => {
                var n = r(56),
                    o = r(8299),
                    a = RangeError;
                e.exports = function(e, t, r, i) {
                    var s = n(e),
                        l = o(r),
                        c = l < 0 ? s + l : l;
                    if (c >= s || c < 0) throw a("Incorrect index");
                    for (var u = new t(s), d = 0; d < s; d++) u[d] = d === c ? i : e[d];
                    return u
                }
            },
            2429: (e, t, r) => {
                "use strict";
                var n = r(970),
                    o = r(7981),
                    a = r(3583),
                    i = r(2317),
                    s = r(2669),
                    l = r(7832),
                    c = r(2555),
                    u = r(2342),
                    d = r(2549),
                    f = c("Promise"),
                    p = "AsyncFromSyncIterator",
                    _ = l.set,
                    v = l.getterFor(p),
                    h = function(e, t, r) {
                        var n = e.done;
                        f.resolve(e.value).then((function(e) {
                            t(d(e, n))
                        }), r)
                    },
                    g = function(e) {
                        e.type = p, _(this, e)
                    };
                g.prototype = s(a(u), {
                    next: function() {
                        var e = v(this);
                        return new f((function(t, r) {
                            var a = o(n(e.next, e.iterator));
                            h(a, t, r)
                        }))
                    },
                    return: function() {
                        var e = v(this).iterator;
                        return new f((function(t, r) {
                            var a = i(e, "return");
                            if (void 0 === a) return t(d(void 0, !0));
                            var s = o(n(a, e));
                            h(s, t, r)
                        }))
                    }
                }), e.exports = g
            },
            86: (e, t, r) => {
                var n = r(970),
                    o = r(2555),
                    a = r(2317);
                e.exports = function(e, t, r, i) {
                    try {
                        var s = a(e, "return");
                        if (s) return o("Promise").resolve(n(s, e)).then((function() {
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
                    o = r(3576),
                    a = r(7981),
                    i = r(3583),
                    s = r(1720),
                    l = r(2669),
                    c = r(6250),
                    u = r(7832),
                    d = r(2555),
                    f = r(2317),
                    p = r(2342),
                    _ = r(2549),
                    v = r(7087),
                    h = d("Promise"),
                    g = c("toStringTag"),
                    m = "AsyncIteratorHelper",
                    y = "WrapForValidAsyncIterator",
                    w = u.set,
                    b = function(e) {
                        var t = !e,
                            r = u.getterFor(e ? y : m),
                            s = function(e) {
                                var n = o((function() {
                                        return r(e)
                                    })),
                                    a = n.error,
                                    i = n.value;
                                return a || t && i.done ? {
                                    exit: !0,
                                    value: a ? h.reject(i) : h.resolve(_(void 0, !0))
                                } : {
                                    exit: !1,
                                    value: i
                                }
                            };
                        return l(i(p), {
                            next: function() {
                                var e = s(this),
                                    t = e.value;
                                if (e.exit) return t;
                                var r = o((function() {
                                        return a(t.nextHandler(h))
                                    })),
                                    n = r.error,
                                    i = r.value;
                                return n && (t.done = !0), n ? h.reject(i) : h.resolve(i)
                            },
                            return: function() {
                                var t = s(this),
                                    r = t.value;
                                if (t.exit) return r;
                                r.done = !0;
                                var i, l, c = r.iterator,
                                    u = o((function() {
                                        if (r.inner) try {
                                            v(r.inner.iterator, "normal")
                                        } catch (e) {
                                            return v(c, "throw", e)
                                        }
                                        return f(c, "return")
                                    }));
                                return i = l = u.value, u.error ? h.reject(l) : void 0 === i ? h.resolve(_(void 0, !0)) : (l = (u = o((function() {
                                    return n(i, c)
                                }))).value, u.error ? h.reject(l) : e ? h.resolve(l) : h.resolve(l).then((function(e) {
                                    return a(e), _(void 0, !0)
                                })))
                            }
                        })
                    },
                    x = b(!0),
                    E = b(!1);
                s(E, g, "Async Iterator Helper"), e.exports = function(e, t) {
                    var r = function(r, n) {
                        n ? (n.iterator = r.iterator, n.next = r.next) : n = r, n.type = t ? y : m, n.nextHandler = e, n.counter = 0, n.done = !1, w(this, n)
                    };
                    return r.prototype = t ? x : E, r
                }
            },
            9937: (e, t, r) => {
                "use strict";
                var n = r(970),
                    o = r(9573),
                    a = r(7981),
                    i = r(3021),
                    s = r(5396),
                    l = r(2555),
                    c = r(6302),
                    u = r(86),
                    d = function(e) {
                        var t = 0 == e,
                            r = 1 == e,
                            d = 2 == e,
                            f = 3 == e;
                        return function(e, p, _) {
                            var v = c(e),
                                h = l("Promise"),
                                g = v.iterator,
                                m = v.next,
                                y = 0,
                                w = void 0 !== p;
                            return !w && t || o(p), new h((function(e, o) {
                                var l = function(e) {
                                        u(g, o, e, o)
                                    },
                                    c = function() {
                                        try {
                                            if (w) try {
                                                s(y)
                                            } catch (e) {
                                                l(e)
                                            }
                                            h.resolve(a(n(m, g))).then((function(n) {
                                                try {
                                                    if (a(n).done) t ? (_.length = y, e(_)) : e(!f && (d || void 0));
                                                    else {
                                                        var s = n.value;
                                                        try {
                                                            if (w) {
                                                                var v = p(s, y),
                                                                    m = function(n) {
                                                                        if (r) c();
                                                                        else if (d) n ? c() : u(g, e, !1, o);
                                                                        else if (t) try {
                                                                            _[y++] = n, c()
                                                                        } catch (e) {
                                                                            l(e)
                                                                        } else n ? u(g, e, f || s, o) : c()
                                                                    };
                                                                i(v) ? h.resolve(v).then(m, l) : m(v)
                                                            } else _[y++] = s, c()
                                                        } catch (e) {
                                                            l(e)
                                                        }
                                                    }
                                                } catch (e) {
                                                    o(e)
                                                }
                                            }), o)
                                        } catch (e) {
                                            o(e)
                                        }
                                    };
                                c()
                            }))
                        }
                    };
                e.exports = {
                    toArray: d(0),
                    forEach: d(1),
                    every: d(2),
                    some: d(3),
                    find: d(4)
                }
            },
            3101: (e, t, r) => {
                "use strict";
                var n = r(970),
                    o = r(9573),
                    a = r(7981),
                    i = r(3021),
                    s = r(6302),
                    l = r(5817),
                    c = r(2549),
                    u = r(86),
                    d = l((function(e) {
                        var t = this,
                            r = t.iterator,
                            o = t.mapper;
                        return new e((function(s, l) {
                            var d = function(e) {
                                    t.done = !0, l(e)
                                },
                                f = function(e) {
                                    u(r, d, e, d)
                                };
                            e.resolve(a(n(t.next, r))).then((function(r) {
                                try {
                                    if (a(r).done) t.done = !0, s(c(void 0, !0));
                                    else {
                                        var n = r.value;
                                        try {
                                            var l = o(n, t.counter++),
                                                u = function(e) {
                                                    s(c(e, !1))
                                                };
                                            i(l) ? e.resolve(l).then(u, f) : u(l)
                                        } catch (e) {
                                            f(e)
                                        }
                                    }
                                } catch (e) {
                                    d(e)
                                }
                            }), d)
                        }))
                    }));
                e.exports = function(e) {
                    return new d(s(this), {
                        mapper: o(e)
                    })
                }
            },
            2342: (e, t, r) => {
                var n, o, a = r(2689),
                    i = r(1703),
                    s = r(9548),
                    l = r(3583),
                    c = r(5616),
                    u = r(9146),
                    d = r(6250),
                    f = r(5231),
                    p = "USE_FUNCTION_CONSTRUCTOR",
                    _ = d("asyncIterator"),
                    v = a.AsyncIterator,
                    h = i.AsyncIteratorPrototype;
                if (h) n = h;
                else if (s(v)) n = v.prototype;
                else if (i[p] || a[p]) try {
                    o = c(c(c(Function("return async function*(){}()")()))), c(o) === Object.prototype && (n = o)
                } catch (e) {}
                n ? f && (n = l(n)) : n = {}, s(n[_]) || u(n, _, (function() {
                    return this
                })), e.exports = n
            },
            6784: (e, t, r) => {
                var n = r(970),
                    o = r(5817);
                e.exports = o((function() {
                    return n(this.next, this.iterator)
                }), !0)
            },
            579: (e, t, r) => {
                var n = r(7981),
                    o = r(7087);
                e.exports = function(e, t, r, a) {
                    try {
                        return a ? t(n(r)[0], r[1]) : t(r)
                    } catch (t) {
                        o(e, "throw", t)
                    }
                }
            },
            2176: (e, t, r) => {
                var n = r(6250)("iterator"),
                    o = !1;
                try {
                    var a = 0,
                        i = {
                            next: function() {
                                return {
                                    done: !!a++
                                }
                            },
                            return: function() {
                                o = !0
                            }
                        };
                    i[n] = function() {
                        return this
                    }, Array.from(i, (function() {
                        throw 2
                    }))
                } catch (e) {}
                e.exports = function(e, t) {
                    if (!t && !o) return !1;
                    var r = !1;
                    try {
                        var a = {};
                        a[n] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: r = !0
                                    }
                                }
                            }
                        }, e(a)
                    } catch (e) {}
                    return r
                }
            },
            1335: (e, t, r) => {
                var n = r(6619),
                    o = n({}.toString),
                    a = n("".slice);
                e.exports = function(e) {
                    return a(o(e), 8, -1)
                }
            },
            7221: (e, t, r) => {
                var n = r(8024),
                    o = r(9548),
                    a = r(1335),
                    i = r(6250)("toStringTag"),
                    s = Object,
                    l = "Arguments" == a(function() {
                        return arguments
                    }());
                e.exports = n ? a : function(e) {
                    var t, r, n;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {}
                    }(t = s(e), i)) ? r : l ? a(t) : "Object" == (n = a(t)) && o(t.callee) ? "Arguments" : n
                }
            },
            4361: (e, t, r) => {
                var n = r(5835),
                    o = r(313),
                    a = r(7812),
                    i = r(2468);
                e.exports = function(e, t, r) {
                    for (var s = o(t), l = i.f, c = a.f, u = 0; u < s.length; u++) {
                        var d = s[u];
                        n(e, d) || r && n(r, d) || l(e, d, c(t, d))
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
                    o = r(2468),
                    a = r(3179);
                e.exports = n ? function(e, t, r) {
                    return o.f(e, t, a(1, r))
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
                    o = r(2468),
                    a = r(3179);
                e.exports = function(e, t, r) {
                    var i = n(t);
                    i in e ? o.f(e, i, a(0, r)) : e[i] = r
                }
            },
            4173: (e, t, r) => {
                var n = r(9424),
                    o = r(2468);
                e.exports = function(e, t, r) {
                    return r.get && n(r.get, t, {
                        getter: !0
                    }), r.set && n(r.set, t, {
                        setter: !0
                    }), o.f(e, t, r)
                }
            },
            9146: (e, t, r) => {
                var n = r(9548),
                    o = r(2468),
                    a = r(9424),
                    i = r(4017);
                e.exports = function(e, t, r, s) {
                    s || (s = {});
                    var l = s.enumerable,
                        c = void 0 !== s.name ? s.name : t;
                    if (n(r) && a(r, c, s), s.global) l ? e[t] = r : i(t, r);
                    else {
                        try {
                            s.unsafe ? e[t] && (l = !0) : delete e[t]
                        } catch (e) {}
                        l ? e[t] = r : o.f(e, t, {
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
                    for (var o in t) n(e, o, t[o], r);
                    return e
                }
            },
            4017: (e, t, r) => {
                var n = r(2689),
                    o = Object.defineProperty;
                e.exports = function(e, t) {
                    try {
                        o(n, e, {
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
                    o = TypeError;
                e.exports = function(e, t) {
                    if (!delete e[t]) throw o("Cannot delete property " + n(t) + " of " + n(e))
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
                    o = r(3021),
                    a = n.document,
                    i = o(a) && o(a.createElement);
                e.exports = function(e) {
                    return i ? a.createElement(e) : {}
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
                    o = r(8976);
                e.exports = !n && !o && "object" == typeof window && "object" == typeof document
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
                var n, o, a = r(2689),
                    i = r(350),
                    s = a.process,
                    l = a.Deno,
                    c = s && s.versions || l && l.version,
                    u = c && c.v8;
                u && (o = (n = u.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && i && (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = i.match(/Chrome\/(\d+)/)) && (o = +n[1]), e.exports = o
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
                    o = Error,
                    a = n("".replace),
                    i = String(o("zxcasd").stack),
                    s = /\n\s*at [^:]*:[^\n]*/,
                    l = s.test(i);
                e.exports = function(e, t) {
                    if (l && "string" == typeof e && !o.prepareStackTrace)
                        for (; t--;) e = a(e, s, "");
                    return e
                }
            },
            9431: (e, t, r) => {
                var n = r(1720),
                    o = r(1496),
                    a = r(9764),
                    i = Error.captureStackTrace;
                e.exports = function(e, t, r, s) {
                    a && (i ? i(e, t) : n(e, "stack", o(r, s)))
                }
            },
            9764: (e, t, r) => {
                var n = r(9835),
                    o = r(3179);
                e.exports = !n((function() {
                    var e = Error("a");
                    return !("stack" in e) || (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
                }))
            },
            5077: (e, t, r) => {
                var n = r(2689),
                    o = r(7812).f,
                    a = r(1720),
                    i = r(9146),
                    s = r(4017),
                    l = r(4361),
                    c = r(6724);
                e.exports = function(e, t) {
                    var r, u, d, f, p, _ = e.target,
                        v = e.global,
                        h = e.stat;
                    if (r = v ? n : h ? n[_] || s(_, {}) : (n[_] || {}).prototype)
                        for (u in t) {
                            if (f = t[u], d = e.dontCallGetSet ? (p = o(r, u)) && p.value : r[u], !c(v ? u : _ + (h ? "." : "#") + u, e.forced) && void 0 !== d) {
                                if (typeof f == typeof d) continue;
                                l(f, d)
                            }(e.sham || d && d.sham) && a(f, "sham", !0), i(r, u, f, e)
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
                    o = r(9146),
                    a = r(8627),
                    i = r(9835),
                    s = r(6250),
                    l = r(1720),
                    c = s("species"),
                    u = RegExp.prototype;
                e.exports = function(e, t, r, d) {
                    var f = s(e),
                        p = !i((function() {
                            var t = {};
                            return t[f] = function() {
                                return 7
                            }, 7 != "" [e](t)
                        })),
                        _ = p && !i((function() {
                            var t = !1,
                                r = /a/;
                            return "split" === e && ((r = {}).constructor = {}, r.constructor[c] = function() {
                                return r
                            }, r.flags = "", r[f] = /./ [f]), r.exec = function() {
                                return t = !0, null
                            }, r[f](""), !t
                        }));
                    if (!p || !_ || r) {
                        var v = n(/./ [f]),
                            h = t(f, "" [e], (function(e, t, r, o, i) {
                                var s = n(e),
                                    l = t.exec;
                                return l === a || l === u.exec ? p && !i ? {
                                    done: !0,
                                    value: v(t, r, o)
                                } : {
                                    done: !0,
                                    value: s(r, t, o)
                                } : {
                                    done: !1
                                }
                            }));
                        o(String.prototype, e, h[0]), o(u, f, h[1])
                    }
                    d && l(u[f], "sham", !0)
                }
            },
            352: (e, t, r) => {
                var n = r(9966),
                    o = Function.prototype,
                    a = o.apply,
                    i = o.call;
                e.exports = "object" == typeof Reflect && Reflect.apply || (n ? i.bind(a) : function() {
                    return i.apply(a, arguments)
                })
            },
            8995: (e, t, r) => {
                var n = r(3482),
                    o = r(9573),
                    a = r(9966),
                    i = n(n.bind);
                e.exports = function(e, t) {
                    return o(e), void 0 === t ? e : a ? i(e, t) : function() {
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
                var n = r(9966),
                    o = Function.prototype.call;
                e.exports = n ? o.bind(o) : function() {
                    return o.apply(o, arguments)
                }
            },
            4046: (e, t, r) => {
                var n = r(8521),
                    o = r(5835),
                    a = Function.prototype,
                    i = n && Object.getOwnPropertyDescriptor,
                    s = o(a, "name"),
                    l = s && "something" === function() {}.name,
                    c = s && (!n || n && i(a, "name").configurable);
                e.exports = {
                    EXISTS: s,
                    PROPER: l,
                    CONFIGURABLE: c
                }
            },
            2221: (e, t, r) => {
                var n = r(6619),
                    o = r(9573);
                e.exports = function(e, t, r) {
                    try {
                        return n(o(Object.getOwnPropertyDescriptor(e, t)[r]))
                    } catch (e) {}
                }
            },
            3482: (e, t, r) => {
                var n = r(1335),
                    o = r(6619);
                e.exports = function(e) {
                    if ("Function" === n(e)) return o(e)
                }
            },
            6619: (e, t, r) => {
                var n = r(9966),
                    o = Function.prototype,
                    a = o.call,
                    i = n && o.bind.bind(a, a);
                e.exports = n ? i : function(e) {
                    return function() {
                        return a.apply(e, arguments)
                    }
                }
            },
            5968: (e, t, r) => {
                var n = r(970),
                    o = r(9548),
                    a = r(7981),
                    i = r(6302),
                    s = r(5569),
                    l = r(2317),
                    c = r(6250),
                    u = r(2429),
                    d = c("asyncIterator");
                e.exports = function(e) {
                    var t, r = a(e),
                        c = !0,
                        f = l(r, d);
                    return o(f) || (f = s(r), c = !1), o(f) ? t = n(f, r) : (t = r, c = !0), a(t), i(c ? t : new u(i(t)))
                }
            },
            6249: (e, t, r) => {
                var n = r(970),
                    o = r(2429),
                    a = r(7981),
                    i = r(8631),
                    s = r(6302),
                    l = r(2317),
                    c = r(6250)("asyncIterator");
                e.exports = function(e, t) {
                    var r = arguments.length < 2 ? l(e, c) : t;
                    return r ? a(n(r, e)) : new o(s(i(e)))
                }
            },
            2555: (e, t, r) => {
                var n = r(2689),
                    o = r(9548);
                e.exports = function(e, t) {
                    return arguments.length < 2 ? (r = n[e], o(r) ? r : void 0) : n[e] && n[e][t];
                    var r
                }
            },
            6302: (e, t, r) => {
                var n = r(9573),
                    o = r(7981);
                e.exports = function(e) {
                    return {
                        iterator: e,
                        next: n(o(e).next)
                    }
                }
            },
            894: (e, t, r) => {
                var n = r(970),
                    o = r(9548),
                    a = r(7981),
                    i = r(6302),
                    s = r(5569);
                e.exports = function(e) {
                    var t = a(e),
                        r = s(t);
                    return i(a(o(r) ? n(r, t) : t))
                }
            },
            5569: (e, t, r) => {
                var n = r(7221),
                    o = r(2317),
                    a = r(9799),
                    i = r(807),
                    s = r(6250)("iterator");
                e.exports = function(e) {
                    if (!a(e)) return o(e, s) || o(e, "@@iterator") || i[n(e)]
                }
            },
            8631: (e, t, r) => {
                var n = r(970),
                    o = r(9573),
                    a = r(7981),
                    i = r(1002),
                    s = r(5569),
                    l = TypeError;
                e.exports = function(e, t) {
                    var r = arguments.length < 2 ? s(e) : t;
                    if (o(r)) return a(n(r, e));
                    throw l(i(e) + " is not iterable")
                }
            },
            3849: (e, t, r) => {
                var n = r(6619),
                    o = r(1501),
                    a = r(9548),
                    i = r(1335),
                    s = r(9013),
                    l = n([].push);
                e.exports = function(e) {
                    if (a(e)) return e;
                    if (o(e)) {
                        for (var t = e.length, r = [], n = 0; n < t; n++) {
                            var c = e[n];
                            "string" == typeof c ? l(r, c) : "number" != typeof c && "Number" != i(c) && "String" != i(c) || l(r, s(c))
                        }
                        var u = r.length,
                            d = !0;
                        return function(e, t) {
                            if (d) return d = !1, t;
                            if (o(this)) return t;
                            for (var n = 0; n < u; n++)
                                if (r[n] === e) return t
                        }
                    }
                }
            },
            2317: (e, t, r) => {
                var n = r(9573),
                    o = r(9799);
                e.exports = function(e, t) {
                    var r = e[t];
                    return o(r) ? void 0 : n(r)
                }
            },
            1958: (e, t, r) => {
                var n = r(9573),
                    o = r(7981),
                    a = r(970),
                    i = r(8299),
                    s = TypeError,
                    l = Math.max,
                    c = function(e, t, r, n) {
                        this.set = e, this.size = t, this.has = r, this.keys = n
                    };
                c.prototype = {
                    getIterator: function() {
                        return o(a(this.keys, this.set))
                    },
                    includes: function(e) {
                        return a(this.has, this.set, e)
                    }
                }, e.exports = function(e) {
                    o(e);
                    var t = +e.size;
                    if (t != t) throw s("Invalid size");
                    return new c(e, l(i(t), 0), n(e.has), n(e.keys))
                }
            },
            2754: (e, t, r) => {
                var n = r(6619),
                    o = r(18),
                    a = Math.floor,
                    i = n("".charAt),
                    s = n("".replace),
                    l = n("".slice),
                    c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                    u = /\$([$&'`]|\d{1,2})/g;
                e.exports = function(e, t, r, n, d, f) {
                    var p = r + e.length,
                        _ = n.length,
                        v = u;
                    return void 0 !== d && (d = o(d), v = c), s(f, v, (function(o, s) {
                        var c;
                        switch (i(s, 0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return l(t, 0, r);
                            case "'":
                                return l(t, p);
                            case "<":
                                c = d[l(s, 1, -1)];
                                break;
                            default:
                                var u = +s;
                                if (0 === u) return o;
                                if (u > _) {
                                    var f = a(u / 10);
                                    return 0 === f ? o : f <= _ ? void 0 === n[f - 1] ? i(s, 1) : n[f - 1] + i(s, 1) : o
                                }
                                c = n[u - 1]
                        }
                        return void 0 === c ? "" : c
                    }))
                }
            },
            2689: (e, t, r) => {
                var n = function(e) {
                    return e && e.Math == Math && e
                };
                e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function() {
                    return this
                }() || Function("return this")()
            },
            5835: (e, t, r) => {
                var n = r(6619),
                    o = r(18),
                    a = n({}.hasOwnProperty);
                e.exports = Object.hasOwn || function(e, t) {
                    return a(o(e), t)
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
                    o = r(9835),
                    a = r(7345);
                e.exports = !n && !o((function() {
                    return 7 != Object.defineProperty(a("div"), "a", {
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
                    o = Math.floor,
                    a = Math.log,
                    i = Math.LN2;
                e.exports = {
                    pack: function(e, s, l) {
                        var c, u, d, f = t(l),
                            p = 8 * l - s - 1,
                            _ = (1 << p) - 1,
                            v = _ >> 1,
                            h = 23 === s ? n(2, -24) - n(2, -77) : 0,
                            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                            m = 0;
                        for ((e = r(e)) != e || e === 1 / 0 ? (u = e != e ? 1 : 0, c = _) : (c = o(a(e) / i), e * (d = n(2, -c)) < 1 && (c--, d *= 2), (e += c + v >= 1 ? h / d : h * n(2, 1 - v)) * d >= 2 && (c++, d /= 2), c + v >= _ ? (u = 0, c = _) : c + v >= 1 ? (u = (e * d - 1) * n(2, s), c += v) : (u = e * n(2, v - 1) * n(2, s), c = 0)); s >= 8;) f[m++] = 255 & u, u /= 256, s -= 8;
                        for (c = c << s | u, p += s; p > 0;) f[m++] = 255 & c, c /= 256, p -= 8;
                        return f[--m] |= 128 * g, f
                    },
                    unpack: function(e, t) {
                        var r, o = e.length,
                            a = 8 * o - t - 1,
                            i = (1 << a) - 1,
                            s = i >> 1,
                            l = a - 7,
                            c = o - 1,
                            u = e[c--],
                            d = 127 & u;
                        for (u >>= 7; l > 0;) d = 256 * d + e[c--], l -= 8;
                        for (r = d & (1 << -l) - 1, d >>= -l, l += t; l > 0;) r = 256 * r + e[c--], l -= 8;
                        if (0 === d) d = 1 - s;
                        else {
                            if (d === i) return r ? NaN : u ? -1 / 0 : 1 / 0;
                            r += n(2, t), d -= s
                        }
                        return (u ? -1 : 1) * r * n(2, d - t)
                    }
                }
            },
            8582: (e, t, r) => {
                var n = r(6619),
                    o = r(9835),
                    a = r(1335),
                    i = Object,
                    s = n("".split);
                e.exports = o((function() {
                    return !i("z").propertyIsEnumerable(0)
                })) ? function(e) {
                    return "String" == a(e) ? s(e, "") : i(e)
                } : i
            },
            3570: (e, t, r) => {
                var n = r(9548),
                    o = r(3021),
                    a = r(1672);
                e.exports = function(e, t, r) {
                    var i, s;
                    return a && n(i = t.constructor) && i !== r && o(s = i.prototype) && s !== r.prototype && a(e, s), e
                }
            },
            2958: (e, t, r) => {
                var n = r(6619),
                    o = r(9548),
                    a = r(1703),
                    i = n(Function.toString);
                o(a.inspectSource) || (a.inspectSource = function(e) {
                    return i(e)
                }), e.exports = a.inspectSource
            },
            5016: (e, t, r) => {
                var n = r(3021),
                    o = r(1720);
                e.exports = function(e, t) {
                    n(t) && "cause" in t && o(e, "cause", t.cause)
                }
            },
            7832: (e, t, r) => {
                var n, o, a, i = r(1894),
                    s = r(2689),
                    l = r(3021),
                    c = r(1720),
                    u = r(5835),
                    d = r(1703),
                    f = r(5923),
                    p = r(1553),
                    _ = "Object already initialized",
                    v = s.TypeError,
                    h = s.WeakMap;
                if (i || d.state) {
                    var g = d.state || (d.state = new h);
                    g.get = g.get, g.has = g.has, g.set = g.set, n = function(e, t) {
                        if (g.has(e)) throw v(_);
                        return t.facade = e, g.set(e, t), t
                    }, o = function(e) {
                        return g.get(e) || {}
                    }, a = function(e) {
                        return g.has(e)
                    }
                } else {
                    var m = f("state");
                    p[m] = !0, n = function(e, t) {
                        if (u(e, m)) throw v(_);
                        return t.facade = e, c(e, m, t), t
                    }, o = function(e) {
                        return u(e, m) ? e[m] : {}
                    }, a = function(e) {
                        return u(e, m)
                    }
                }
                e.exports = {
                    set: n,
                    get: o,
                    has: a,
                    enforce: function(e) {
                        return a(e) ? o(e) : n(e, {})
                    },
                    getterFor: function(e) {
                        return function(t) {
                            var r;
                            if (!l(t) || (r = o(t)).type !== e) throw v("Incompatible receiver, " + e + " required");
                            return r
                        }
                    }
                }
            },
            4713: (e, t, r) => {
                var n = r(6250),
                    o = r(807),
                    a = n("iterator"),
                    i = Array.prototype;
                e.exports = function(e) {
                    return void 0 !== e && (o.Array === e || i[a] === e)
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
                    o = n.all;
                e.exports = n.IS_HTMLDDA ? function(e) {
                    return "function" == typeof e || e === o
                } : function(e) {
                    return "function" == typeof e
                }
            },
            1908: (e, t, r) => {
                var n = r(6619),
                    o = r(9835),
                    a = r(9548),
                    i = r(7221),
                    s = r(2555),
                    l = r(2958),
                    c = function() {},
                    u = [],
                    d = s("Reflect", "construct"),
                    f = /^\s*(?:class|function)\b/,
                    p = n(f.exec),
                    _ = !f.exec(c),
                    v = function(e) {
                        if (!a(e)) return !1;
                        try {
                            return d(c, u, e), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    h = function(e) {
                        if (!a(e)) return !1;
                        switch (i(e)) {
                            case "AsyncFunction":
                            case "GeneratorFunction":
                            case "AsyncGeneratorFunction":
                                return !1
                        }
                        try {
                            return _ || !!p(f, l(e))
                        } catch (e) {
                            return !0
                        }
                    };
                h.sham = !0, e.exports = !d || o((function() {
                    var e;
                    return v(v.call) || !v(Object) || !v((function() {
                        e = !0
                    })) || e
                })) ? h : v
            },
            6724: (e, t, r) => {
                var n = r(9835),
                    o = r(9548),
                    a = /#|\.prototype\./,
                    i = function(e, t) {
                        var r = l[s(e)];
                        return r == u || r != c && (o(t) ? n(t) : !!t)
                    },
                    s = i.normalize = function(e) {
                        return String(e).replace(a, ".").toLowerCase()
                    },
                    l = i.data = {},
                    c = i.NATIVE = "N",
                    u = i.POLYFILL = "P";
                e.exports = i
            },
            3781: (e, t, r) => {
                var n = r(3021),
                    o = Math.floor;
                e.exports = Number.isInteger || function(e) {
                    return !n(e) && isFinite(e) && o(e) === e
                }
            },
            9799: e => {
                e.exports = function(e) {
                    return null == e
                }
            },
            3021: (e, t, r) => {
                var n = r(9548),
                    o = r(806),
                    a = o.all;
                e.exports = o.IS_HTMLDDA ? function(e) {
                    return "object" == typeof e ? null !== e : n(e) || e === a
                } : function(e) {
                    return "object" == typeof e ? null !== e : n(e)
                }
            },
            5231: e => {
                e.exports = !1
            },
            5781: (e, t, r) => {
                var n = r(3021),
                    o = r(1335),
                    a = r(6250)("match");
                e.exports = function(e) {
                    var t;
                    return n(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == o(e))
                }
            },
            7870: (e, t, r) => {
                var n = r(2555),
                    o = r(9548),
                    a = r(631),
                    i = r(7079),
                    s = Object;
                e.exports = i ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    var t = n("Symbol");
                    return o(t) && a(t.prototype, s(e))
                }
            },
            1700: (e, t, r) => {
                var n = r(970);
                e.exports = function(e, t, r) {
                    for (var o, a, i = r || e.next; !(o = n(i, e)).done;)
                        if (void 0 !== (a = t(o.value))) return a
                }
            },
            4760: (e, t, r) => {
                var n = r(8995),
                    o = r(970),
                    a = r(7981),
                    i = r(1002),
                    s = r(4713),
                    l = r(56),
                    c = r(631),
                    u = r(8631),
                    d = r(5569),
                    f = r(7087),
                    p = TypeError,
                    _ = function(e, t) {
                        this.stopped = e, this.result = t
                    },
                    v = _.prototype;
                e.exports = function(e, t, r) {
                    var h, g, m, y, w, b, x, E = r && r.that,
                        C = !(!r || !r.AS_ENTRIES),
                        S = !(!r || !r.IS_RECORD),
                        A = !(!r || !r.IS_ITERATOR),
                        O = !(!r || !r.INTERRUPTED),
                        T = n(t, E),
                        I = function(e) {
                            return h && f(h, "normal", e), new _(!0, e)
                        },
                        R = function(e) {
                            return C ? (a(e), O ? T(e[0], e[1], I) : T(e[0], e[1])) : O ? T(e, I) : T(e)
                        };
                    if (S) h = e.iterator;
                    else if (A) h = e;
                    else {
                        if (!(g = d(e))) throw p(i(e) + " is not iterable");
                        if (s(g)) {
                            for (m = 0, y = l(e); y > m; m++)
                                if ((w = R(e[m])) && c(v, w)) return w;
                            return new _(!1)
                        }
                        h = u(e, g)
                    }
                    for (b = S ? e.next : h.next; !(x = o(b, h)).done;) {
                        try {
                            w = R(x.value)
                        } catch (e) {
                            f(h, "throw", e)
                        }
                        if ("object" == typeof w && w && c(v, w)) return w
                    }
                    return new _(!1)
                }
            },
            7087: (e, t, r) => {
                var n = r(970),
                    o = r(7981),
                    a = r(2317);
                e.exports = function(e, t, r) {
                    var i, s;
                    o(e);
                    try {
                        if (!(i = a(e, "return"))) {
                            if ("throw" === t) throw r;
                            return r
                        }
                        i = n(i, e)
                    } catch (e) {
                        s = !0, i = e
                    }
                    if ("throw" === t) throw r;
                    if (s) throw i;
                    return o(i), r
                }
            },
            4610: (e, t, r) => {
                "use strict";
                var n = r(7357).IteratorPrototype,
                    o = r(3583),
                    a = r(3179),
                    i = r(4029),
                    s = r(807),
                    l = function() {
                        return this
                    };
                e.exports = function(e, t, r, c) {
                    var u = t + " Iterator";
                    return e.prototype = o(n, {
                        next: a(+!c, r)
                    }), i(e, u, !1, !0), s[u] = l, e
                }
            },
            3389: (e, t, r) => {
                "use strict";
                var n = r(970),
                    o = r(3583),
                    a = r(1720),
                    i = r(2669),
                    s = r(6250),
                    l = r(7832),
                    c = r(2317),
                    u = r(7357).IteratorPrototype,
                    d = r(2549),
                    f = r(7087),
                    p = s("toStringTag"),
                    _ = "IteratorHelper",
                    v = "WrapForValidIterator",
                    h = l.set,
                    g = function(e) {
                        var t = l.getterFor(e ? v : _);
                        return i(o(u), {
                            next: function() {
                                var r = t(this);
                                if (e) return r.nextHandler();
                                try {
                                    var n = r.done ? void 0 : r.nextHandler();
                                    return d(n, r.done)
                                } catch (e) {
                                    throw r.done = !0, e
                                }
                            },
                            return: function() {
                                var r = t(this),
                                    o = r.iterator;
                                if (r.done = !0, e) {
                                    var a = c(o, "return");
                                    return a ? n(a, o) : d(void 0, !0)
                                }
                                if (r.inner) try {
                                    f(r.inner.iterator, "normal")
                                } catch (e) {
                                    return f(o, "throw", e)
                                }
                                return f(o, "normal"), d(void 0, !0)
                            }
                        })
                    },
                    m = g(!0),
                    y = g(!1);
                a(y, p, "Iterator Helper"), e.exports = function(e, t) {
                    var r = function(r, n) {
                        n ? (n.iterator = r.iterator, n.next = r.next) : n = r, n.type = t ? v : _, n.nextHandler = e, n.counter = 0, n.done = !1, h(this, n)
                    };
                    return r.prototype = t ? m : y, r
                }
            },
            5504: (e, t, r) => {
                "use strict";
                var n = r(970),
                    o = r(9573),
                    a = r(7981),
                    i = r(6302),
                    s = r(3389),
                    l = r(579),
                    c = s((function() {
                        var e = this.iterator,
                            t = a(n(this.next, e));
                        if (!(this.done = !!t.done)) return l(e, this.mapper, [t.value, this.counter++], !0)
                    }));
                e.exports = function(e) {
                    return new c(i(this), {
                        mapper: o(e)
                    })
                }
            },
            7357: (e, t, r) => {
                "use strict";
                var n, o, a, i = r(9835),
                    s = r(9548),
                    l = r(3021),
                    c = r(3583),
                    u = r(5616),
                    d = r(9146),
                    f = r(6250),
                    p = r(5231),
                    _ = f("iterator"),
                    v = !1;
                [].keys && ("next" in (a = [].keys()) ? (o = u(u(a))) !== Object.prototype && (n = o) : v = !0), !l(n) || i((function() {
                    var e = {};
                    return n[_].call(e) !== e
                })) ? n = {} : p && (n = c(n)), s(n[_]) || d(n, _, (function() {
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
                var n = r(6619),
                    o = r(9835),
                    a = r(9548),
                    i = r(5835),
                    s = r(8521),
                    l = r(4046).CONFIGURABLE,
                    c = r(2958),
                    u = r(7832),
                    d = u.enforce,
                    f = u.get,
                    p = String,
                    _ = Object.defineProperty,
                    v = n("".slice),
                    h = n("".replace),
                    g = n([].join),
                    m = s && !o((function() {
                        return 8 !== _((function() {}), "length", {
                            value: 8
                        }).length
                    })),
                    y = String(String).split("String"),
                    w = e.exports = function(e, t, r) {
                        "Symbol(" === v(p(t), 0, 7) && (t = "[" + h(p(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!i(e, "name") || l && e.name !== t) && (s ? _(e, "name", {
                            value: t,
                            configurable: !0
                        }) : e.name = t), m && r && i(r, "arity") && e.length !== r.arity && _(e, "length", {
                            value: r.arity
                        });
                        try {
                            r && i(r, "constructor") && r.constructor ? s && _(e, "prototype", {
                                writable: !1
                            }) : e.prototype && (e.prototype = void 0)
                        } catch (e) {}
                        var n = d(e);
                        return i(n, "source") || (n.source = g(y, "string" == typeof t ? t : "")), e
                    };
                Function.prototype.toString = w((function() {
                    return a(this) && f(this).source || c(this)
                }), "toString")
            },
            8017: (e, t, r) => {
                var n = r(6619),
                    o = Map.prototype;
                e.exports = {
                    Map: Map,
                    set: n(o.set),
                    get: n(o.get),
                    has: n(o.has),
                    remove: n(o.delete),
                    proto: o
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
                var n, o, a, i, s, l = r(2689),
                    c = r(8995),
                    u = r(7812).f,
                    d = r(3233).set,
                    f = r(2576),
                    p = r(8604),
                    _ = r(4556),
                    v = r(5114),
                    h = r(8976),
                    g = l.MutationObserver || l.WebKitMutationObserver,
                    m = l.document,
                    y = l.process,
                    w = l.Promise,
                    b = u(l, "queueMicrotask"),
                    x = b && b.value;
                if (!x) {
                    var E = new f,
                        C = function() {
                            var e, t;
                            for (h && (e = y.domain) && e.exit(); t = E.get();) try {
                                t()
                            } catch (e) {
                                throw E.head && n(), e
                            }
                            e && e.enter()
                        };
                    p || h || v || !g || !m ? !_ && w && w.resolve ? ((i = w.resolve(void 0)).constructor = w, s = c(i.then, i), n = function() {
                        s(C)
                    }) : h ? n = function() {
                        y.nextTick(C)
                    } : (d = c(d, l), n = function() {
                        d(C)
                    }) : (o = !0, a = m.createTextNode(""), new g(C).observe(a, {
                        characterData: !0
                    }), n = function() {
                        a.data = o = !o
                    }), x = function(e) {
                        E.head || n(), E.add(e)
                    }
                }
                e.exports = x
            },
            9203: (e, t, r) => {
                "use strict";
                var n = r(9573),
                    o = TypeError,
                    a = function(e) {
                        var t, r;
                        this.promise = new e((function(e, n) {
                            if (void 0 !== t || void 0 !== r) throw o("Bad Promise constructor");
                            t = e, r = n
                        })), this.resolve = n(t), this.reject = n(r)
                    };
                e.exports.f = function(e) {
                    return new a(e)
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
                var n, o = r(7981),
                    a = r(4002),
                    i = r(8288),
                    s = r(1553),
                    l = r(9856),
                    c = r(7345),
                    u = r(5923),
                    d = "prototype",
                    f = "script",
                    p = u("IE_PROTO"),
                    _ = function() {},
                    v = function(e) {
                        return "<" + f + ">" + e + "</" + f + ">"
                    },
                    h = function(e) {
                        e.write(v("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    },
                    g = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (e) {}
                        var e, t, r;
                        g = "undefined" != typeof document ? document.domain && n ? h(n) : (t = c("iframe"), r = "java" + f + ":", t.style.display = "none", l.appendChild(t), t.src = String(r), (e = t.contentWindow.document).open(), e.write(v("document.F=Object")), e.close(), e.F) : h(n);
                        for (var o = i.length; o--;) delete g[d][i[o]];
                        return g()
                    };
                s[p] = !0, e.exports = Object.create || function(e, t) {
                    var r;
                    return null !== e ? (_[d] = o(e), r = new _, _[d] = null, r[p] = e) : r = g(), void 0 === t ? r : a.f(r, t)
                }
            },
            4002: (e, t, r) => {
                var n = r(8521),
                    o = r(6144),
                    a = r(2468),
                    i = r(7981),
                    s = r(7417),
                    l = r(549);
                t.f = n && !o ? Object.defineProperties : function(e, t) {
                    i(e);
                    for (var r, n = s(t), o = l(t), c = o.length, u = 0; c > u;) a.f(e, r = o[u++], n[r]);
                    return e
                }
            },
            2468: (e, t, r) => {
                var n = r(8521),
                    o = r(1910),
                    a = r(6144),
                    i = r(7981),
                    s = r(7880),
                    l = TypeError,
                    c = Object.defineProperty,
                    u = Object.getOwnPropertyDescriptor,
                    d = "enumerable",
                    f = "configurable",
                    p = "writable";
                t.f = n ? a ? function(e, t, r) {
                    if (i(e), t = s(t), i(r), "function" == typeof e && "prototype" === t && "value" in r && p in r && !r[p]) {
                        var n = u(e, t);
                        n && n[p] && (e[t] = r.value, r = {
                            configurable: f in r ? r[f] : n[f],
                            enumerable: d in r ? r[d] : n[d],
                            writable: !1
                        })
                    }
                    return c(e, t, r)
                } : c : function(e, t, r) {
                    if (i(e), t = s(t), i(r), o) try {
                        return c(e, t, r)
                    } catch (e) {}
                    if ("get" in r || "set" in r) throw l("Accessors not supported");
                    return "value" in r && (e[t] = r.value), e
                }
            },
            7812: (e, t, r) => {
                var n = r(8521),
                    o = r(970),
                    a = r(4423),
                    i = r(3179),
                    s = r(7417),
                    l = r(7880),
                    c = r(5835),
                    u = r(1910),
                    d = Object.getOwnPropertyDescriptor;
                t.f = n ? d : function(e, t) {
                    if (e = s(e), t = l(t), u) try {
                        return d(e, t)
                    } catch (e) {}
                    if (c(e, t)) return i(!o(a.f, e, t), e[t])
                }
            },
            4161: (e, t, r) => {
                var n = r(5147),
                    o = r(8288).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function(e) {
                    return n(e, o)
                }
            },
            4644: (e, t) => {
                t.f = Object.getOwnPropertySymbols
            },
            5616: (e, t, r) => {
                var n = r(5835),
                    o = r(9548),
                    a = r(18),
                    i = r(5923),
                    s = r(1086),
                    l = i("IE_PROTO"),
                    c = Object,
                    u = c.prototype;
                e.exports = s ? c.getPrototypeOf : function(e) {
                    var t = a(e);
                    if (n(t, l)) return t[l];
                    var r = t.constructor;
                    return o(r) && t instanceof r ? r.prototype : t instanceof c ? u : null
                }
            },
            631: (e, t, r) => {
                var n = r(6619);
                e.exports = n({}.isPrototypeOf)
            },
            5147: (e, t, r) => {
                var n = r(6619),
                    o = r(5835),
                    a = r(7417),
                    i = r(5379).indexOf,
                    s = r(1553),
                    l = n([].push);
                e.exports = function(e, t) {
                    var r, n = a(e),
                        c = 0,
                        u = [];
                    for (r in n) !o(s, r) && o(n, r) && l(u, r);
                    for (; t.length > c;) o(n, r = t[c++]) && (~i(u, r) || l(u, r));
                    return u
                }
            },
            549: (e, t, r) => {
                var n = r(5147),
                    o = r(8288);
                e.exports = Object.keys || function(e) {
                    return n(e, o)
                }
            },
            4423: (e, t) => {
                "use strict";
                var r = {}.propertyIsEnumerable,
                    n = Object.getOwnPropertyDescriptor,
                    o = n && !r.call({
                        1: 2
                    }, 1);
                t.f = o ? function(e) {
                    var t = n(this, e);
                    return !!t && t.enumerable
                } : r
            },
            1672: (e, t, r) => {
                var n = r(2221),
                    o = r(7981),
                    a = r(8055);
                e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var e, t = !1,
                        r = {};
                    try {
                        (e = n(Object.prototype, "__proto__", "set"))(r, []), t = r instanceof Array
                    } catch (e) {}
                    return function(r, n) {
                        return o(r), a(n), t ? e(r, n) : r.__proto__ = n, r
                    }
                }() : void 0)
            },
            6082: (e, t, r) => {
                var n = r(970),
                    o = r(9548),
                    a = r(3021),
                    i = TypeError;
                e.exports = function(e, t) {
                    var r, s;
                    if ("string" === t && o(r = e.toString) && !a(s = n(r, e))) return s;
                    if (o(r = e.valueOf) && !a(s = n(r, e))) return s;
                    if ("string" !== t && o(r = e.toString) && !a(s = n(r, e))) return s;
                    throw i("Can't convert object to primitive value")
                }
            },
            313: (e, t, r) => {
                var n = r(2555),
                    o = r(6619),
                    a = r(4161),
                    i = r(4644),
                    s = r(7981),
                    l = o([].concat);
                e.exports = n("Reflect", "ownKeys") || function(e) {
                    var t = a.f(s(e)),
                        r = i.f;
                    return r ? l(t, r(e)) : t
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
                    o = r(9512),
                    a = r(9548),
                    i = r(6724),
                    s = r(2958),
                    l = r(6250),
                    c = r(9529),
                    u = r(687),
                    d = r(5231),
                    f = r(9168),
                    p = o && o.prototype,
                    _ = l("species"),
                    v = !1,
                    h = a(n.PromiseRejectionEvent),
                    g = i("Promise", (function() {
                        var e = s(o),
                            t = e !== String(o);
                        if (!t && 66 === f) return !0;
                        if (d && (!p.catch || !p.finally)) return !0;
                        if (!f || f < 51 || !/native code/.test(e)) {
                            var r = new o((function(e) {
                                    e(1)
                                })),
                                n = function(e) {
                                    e((function() {}), (function() {}))
                                };
                            if ((r.constructor = {})[_] = n, !(v = r.then((function() {})) instanceof n)) return !0
                        }
                        return !t && (c || u) && !h
                    }));
                e.exports = {
                    CONSTRUCTOR: g,
                    REJECTION_EVENT: h,
                    SUBCLASSING: v
                }
            },
            9512: (e, t, r) => {
                var n = r(2689);
                e.exports = n.Promise
            },
            2988: (e, t, r) => {
                var n = r(7981),
                    o = r(3021),
                    a = r(9203);
                e.exports = function(e, t) {
                    if (n(e), o(t) && t.constructor === e) return t;
                    var r = a.f(e);
                    return (0, r.resolve)(t), r.promise
                }
            },
            5774: (e, t, r) => {
                var n = r(9512),
                    o = r(2176),
                    a = r(3984).CONSTRUCTOR;
                e.exports = a || !o((function(e) {
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
                    o = r(7981),
                    a = r(9548),
                    i = r(1335),
                    s = r(8627),
                    l = TypeError;
                e.exports = function(e, t) {
                    var r = e.exec;
                    if (a(r)) {
                        var c = n(r, e, t);
                        return null !== c && o(c), c
                    }
                    if ("RegExp" === i(e)) return n(s, e, t);
                    throw l("RegExp#exec called on incompatible receiver")
                }
            },
            8627: (e, t, r) => {
                "use strict";
                var n, o, a = r(970),
                    i = r(6619),
                    s = r(9013),
                    l = r(9811),
                    c = r(6340),
                    u = r(969),
                    d = r(3583),
                    f = r(7832).get,
                    p = r(7050),
                    _ = r(1897),
                    v = u("native-string-replace", String.prototype.replace),
                    h = RegExp.prototype.exec,
                    g = h,
                    m = i("".charAt),
                    y = i("".indexOf),
                    w = i("".replace),
                    b = i("".slice),
                    x = (o = /b*/g, a(h, n = /a/, "a"), a(h, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                    E = c.BROKEN_CARET,
                    C = void 0 !== /()??/.exec("")[1];
                (x || C || E || p || _) && (g = function(e) {
                    var t, r, n, o, i, c, u, p = this,
                        _ = f(p),
                        S = s(e),
                        A = _.raw;
                    if (A) return A.lastIndex = p.lastIndex, t = a(g, A, S), p.lastIndex = A.lastIndex, t;
                    var O = _.groups,
                        T = E && p.sticky,
                        I = a(l, p),
                        R = p.source,
                        N = 0,
                        P = S;
                    if (T && (I = w(I, "y", ""), -1 === y(I, "g") && (I += "g"), P = b(S, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== m(S, p.lastIndex - 1)) && (R = "(?: " + R + ")", P = " " + P, N++), r = new RegExp("^(?:" + R + ")", I)), C && (r = new RegExp("^" + R + "$(?!\\s)", I)), x && (n = p.lastIndex), o = a(h, T ? r : p, P), T ? o ? (o.input = b(o.input, N), o[0] = b(o[0], N), o.index = p.lastIndex, p.lastIndex += o[0].length) : p.lastIndex = 0 : x && o && (p.lastIndex = p.global ? o.index + o[0].length : n), C && o && o.length > 1 && a(v, o[0], r, (function() {
                            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0)
                        })), o && O)
                        for (o.groups = c = d(null), i = 0; i < O.length; i++) c[(u = O[i])[0]] = o[u[1]];
                    return o
                }), e.exports = g
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
                    o = r(5835),
                    a = r(631),
                    i = r(9811),
                    s = RegExp.prototype;
                e.exports = function(e) {
                    var t = e.flags;
                    return void 0 !== t || "flags" in s || o(e, "flags") || !a(s, e) ? t : n(i, e)
                }
            },
            6340: (e, t, r) => {
                var n = r(9835),
                    o = r(2689).RegExp,
                    a = n((function() {
                        var e = o("a", "y");
                        return e.lastIndex = 2, null != e.exec("abcd")
                    })),
                    i = a || n((function() {
                        return !o("a", "y").sticky
                    })),
                    s = a || n((function() {
                        var e = o("^r", "gy");
                        return e.lastIndex = 2, null != e.exec("str")
                    }));
                e.exports = {
                    BROKEN_CARET: s,
                    MISSED_STICKY: i,
                    UNSUPPORTED_Y: a
                }
            },
            7050: (e, t, r) => {
                var n = r(9835),
                    o = r(2689).RegExp;
                e.exports = n((function() {
                    var e = o(".", "s");
                    return !(e.dotAll && e.exec("\n") && "s" === e.flags)
                }))
            },
            1897: (e, t, r) => {
                var n = r(9835),
                    o = r(2689).RegExp;
                e.exports = n((function() {
                    var e = o("(?<a>b)", "g");
                    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
                }))
            },
            8602: (e, t, r) => {
                var n = r(9799),
                    o = TypeError;
                e.exports = function(e) {
                    if (n(e)) throw o("Can't call method on " + e);
                    return e
                }
            },
            1558: (e, t, r) => {
                var n = r(6501),
                    o = r(7717),
                    a = n.Set,
                    i = n.add;
                e.exports = function(e) {
                    var t = new a;
                    return o(e, (function(e) {
                        i(t, e)
                    })), t
                }
            },
            3472: (e, t, r) => {
                "use strict";
                var n = r(8153),
                    o = r(6501),
                    a = r(1558),
                    i = r(1255),
                    s = r(1958),
                    l = r(7717),
                    c = r(1700),
                    u = o.has,
                    d = o.remove;
                e.exports = function(e) {
                    var t = n(this),
                        r = s(e),
                        o = a(t);
                    return i(t) <= r.size ? l(t, (function(e) {
                        r.includes(e) && d(o, e)
                    })) : c(r.getIterator(), (function(e) {
                        u(t, e) && d(o, e)
                    })), o
                }
            },
            6501: (e, t, r) => {
                var n = r(6619),
                    o = Set.prototype;
                e.exports = {
                    Set: Set,
                    add: n(o.add),
                    has: n(o.has),
                    remove: n(o.delete),
                    proto: o,
                    $has: o.has,
                    $keys: o.keys
                }
            },
            4228: (e, t, r) => {
                "use strict";
                var n = r(8153),
                    o = r(6501),
                    a = r(1255),
                    i = r(1958),
                    s = r(7717),
                    l = r(1700),
                    c = o.Set,
                    u = o.add,
                    d = o.has,
                    f = o.$has,
                    p = o.$keys;
                e.exports = function(e) {
                    var t, r = n(this),
                        o = i(e),
                        _ = new c;
                    if (((t = o).has !== f || t.keys !== p) && a(r) > o.size) {
                        if (l(o.getIterator(), (function(e) {
                                d(r, e) && u(_, e)
                            })), a(_) < 2) return _;
                        var v = _;
                        _ = new c, s(r, (function(e) {
                            d(v, e) && u(_, e)
                        }))
                    } else s(r, (function(e) {
                        o.includes(e) && u(_, e)
                    }));
                    return _
                }
            },
            9728: (e, t, r) => {
                "use strict";
                var n = r(8153),
                    o = r(6501).has,
                    a = r(1255),
                    i = r(1958),
                    s = r(7717),
                    l = r(1700),
                    c = r(7087);
                e.exports = function(e) {
                    var t = n(this),
                        r = i(e);
                    if (a(t) <= r.size) return !1 !== s(t, (function(e) {
                        if (r.includes(e)) return !1
                    }), !0);
                    var u = r.getIterator();
                    return !1 !== l(u, (function(e) {
                        if (o(t, e)) return c(u, "normal", !1)
                    }))
                }
            },
            7214: (e, t, r) => {
                "use strict";
                var n = r(8153),
                    o = r(1255),
                    a = r(7717),
                    i = r(1958);
                e.exports = function(e) {
                    var t = n(this),
                        r = i(e);
                    return !(o(t) > r.size) && !1 !== a(t, (function(e) {
                        if (!r.includes(e)) return !1
                    }), !0)
                }
            },
            6781: (e, t, r) => {
                "use strict";
                var n = r(8153),
                    o = r(6501).has,
                    a = r(1255),
                    i = r(1958),
                    s = r(1700),
                    l = r(7087);
                e.exports = function(e) {
                    var t = n(this),
                        r = i(e);
                    if (a(t) < r.size) return !1;
                    var c = r.getIterator();
                    return !1 !== s(c, (function(e) {
                        if (!o(t, e)) return l(c, "normal", !1)
                    }))
                }
            },
            7717: (e, t, r) => {
                var n = r(6619),
                    o = r(1700),
                    a = r(6501),
                    i = a.Set,
                    s = a.proto,
                    l = n(s.forEach),
                    c = n(s.keys),
                    u = c(new i).next;
                e.exports = function(e, t, r) {
                    return r ? o(c(e), t, u) : l(e, t)
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
                    o = r(6501);
                e.exports = n(o.proto, "size", "get") || function(e) {
                    return e.size
                }
            },
            7025: (e, t, r) => {
                "use strict";
                var n = r(2555),
                    o = r(4173),
                    a = r(6250),
                    i = r(8521),
                    s = a("species");
                e.exports = function(e) {
                    var t = n(e);
                    i && t && !t[s] && o(t, s, {
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
                    o = r(6501),
                    a = r(1558),
                    i = r(1958),
                    s = r(1700),
                    l = o.add,
                    c = o.has,
                    u = o.remove;
                e.exports = function(e) {
                    var t = n(this),
                        r = i(e).getIterator(),
                        o = a(t);
                    return s(r, (function(e) {
                        c(t, e) ? u(o, e) : l(o, e)
                    })), o
                }
            },
            4029: (e, t, r) => {
                var n = r(2468).f,
                    o = r(5835),
                    a = r(6250)("toStringTag");
                e.exports = function(e, t, r) {
                    e && !r && (e = e.prototype), e && !o(e, a) && n(e, a, {
                        configurable: !0,
                        value: t
                    })
                }
            },
            3268: (e, t, r) => {
                "use strict";
                var n = r(8153),
                    o = r(6501).add,
                    a = r(1558),
                    i = r(1958),
                    s = r(1700);
                e.exports = function(e) {
                    var t = n(this),
                        r = i(e).getIterator(),
                        l = a(t);
                    return s(r, (function(e) {
                        o(l, e)
                    })), l
                }
            },
            5923: (e, t, r) => {
                var n = r(969),
                    o = r(5567),
                    a = n("keys");
                e.exports = function(e) {
                    return a[e] || (a[e] = o(e))
                }
            },
            1703: (e, t, r) => {
                var n = r(2689),
                    o = r(4017),
                    a = "__core-js_shared__",
                    i = n[a] || o(a, {});
                e.exports = i
            },
            969: (e, t, r) => {
                var n = r(5231),
                    o = r(1703);
                (e.exports = function(e, t) {
                    return o[e] || (o[e] = void 0 !== t ? t : {})
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
                    o = r(7663),
                    a = r(9799),
                    i = r(6250)("species");
                e.exports = function(e, t) {
                    var r, s = n(e).constructor;
                    return void 0 === s || a(r = n(s)[i]) ? t : o(r)
                }
            },
            4637: (e, t, r) => {
                var n = r(6619),
                    o = r(8299),
                    a = r(9013),
                    i = r(8602),
                    s = n("".charAt),
                    l = n("".charCodeAt),
                    c = n("".slice),
                    u = function(e) {
                        return function(t, r) {
                            var n, u, d = a(i(t)),
                                f = o(r),
                                p = d.length;
                            return f < 0 || f >= p ? e ? "" : void 0 : (n = l(d, f)) < 55296 || n > 56319 || f + 1 === p || (u = l(d, f + 1)) < 56320 || u > 57343 ? e ? s(d, f) : n : e ? c(d, f, f + 2) : u - 56320 + (n - 55296 << 10) + 65536
                        }
                    };
                e.exports = {
                    codeAt: u(!1),
                    charAt: u(!0)
                }
            },
            9133: (e, t, r) => {
                "use strict";
                var n = r(5272).end,
                    o = r(5238);
                e.exports = o("trimEnd") ? function() {
                    return n(this)
                } : "".trimEnd
            },
            5238: (e, t, r) => {
                var n = r(4046).PROPER,
                    o = r(9835),
                    a = r(8689);
                e.exports = function(e) {
                    return o((function() {
                        return !!a[e]() || "​᠎" !== "​᠎" [e]() || n && a[e].name !== e
                    }))
                }
            },
            5272: (e, t, r) => {
                var n = r(6619),
                    o = r(8602),
                    a = r(9013),
                    i = r(8689),
                    s = n("".replace),
                    l = RegExp("^[" + i + "]+"),
                    c = RegExp("(^|[^" + i + "])[" + i + "]+$"),
                    u = function(e) {
                        return function(t) {
                            var r = a(o(t));
                            return 1 & e && (r = s(r, l, "")), 2 & e && (r = s(r, c, "$1")), r
                        }
                    };
                e.exports = {
                    start: u(1),
                    end: u(2),
                    trim: u(3)
                }
            },
            4427: (e, t, r) => {
                var n = r(9168),
                    o = r(9835);
                e.exports = !!Object.getOwnPropertySymbols && !o((function() {
                    var e = Symbol();
                    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
                }))
            },
            3233: (e, t, r) => {
                var n, o, a, i, s = r(2689),
                    l = r(352),
                    c = r(8995),
                    u = r(9548),
                    d = r(5835),
                    f = r(9835),
                    p = r(9856),
                    _ = r(7687),
                    v = r(7345),
                    h = r(1150),
                    g = r(8604),
                    m = r(8976),
                    y = s.setImmediate,
                    w = s.clearImmediate,
                    b = s.process,
                    x = s.Dispatch,
                    E = s.Function,
                    C = s.MessageChannel,
                    S = s.String,
                    A = 0,
                    O = {},
                    T = "onreadystatechange";
                f((function() {
                    n = s.location
                }));
                var I = function(e) {
                        if (d(O, e)) {
                            var t = O[e];
                            delete O[e], t()
                        }
                    },
                    R = function(e) {
                        return function() {
                            I(e)
                        }
                    },
                    N = function(e) {
                        I(e.data)
                    },
                    P = function(e) {
                        s.postMessage(S(e), n.protocol + "//" + n.host)
                    };
                y && w || (y = function(e) {
                    h(arguments.length, 1);
                    var t = u(e) ? e : E(e),
                        r = _(arguments, 1);
                    return O[++A] = function() {
                        l(t, void 0, r)
                    }, o(A), A
                }, w = function(e) {
                    delete O[e]
                }, m ? o = function(e) {
                    b.nextTick(R(e))
                } : x && x.now ? o = function(e) {
                    x.now(R(e))
                } : C && !g ? (i = (a = new C).port2, a.port1.onmessage = N, o = c(i.postMessage, i)) : s.addEventListener && u(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !f(P) ? (o = P, s.addEventListener("message", N, !1)) : o = T in v("script") ? function(e) {
                    p.appendChild(v("script"))[T] = function() {
                        p.removeChild(this), I(e)
                    }
                } : function(e) {
                    setTimeout(R(e), 0)
                }), e.exports = {
                    set: y,
                    clear: w
                }
            },
            3610: (e, t, r) => {
                var n = r(8299),
                    o = Math.max,
                    a = Math.min;
                e.exports = function(e, t) {
                    var r = n(e);
                    return r < 0 ? o(r + t, 0) : a(r, t)
                }
            },
            710: (e, t, r) => {
                var n = r(3912),
                    o = TypeError;
                e.exports = function(e) {
                    var t = n(e, "number");
                    if ("number" == typeof t) throw o("Can't convert number to bigint");
                    return BigInt(t)
                }
            },
            1169: (e, t, r) => {
                var n = r(8299),
                    o = r(6443),
                    a = RangeError;
                e.exports = function(e) {
                    if (void 0 === e) return 0;
                    var t = n(e),
                        r = o(t);
                    if (t !== r) throw a("Wrong length or index");
                    return r
                }
            },
            7417: (e, t, r) => {
                var n = r(8582),
                    o = r(8602);
                e.exports = function(e) {
                    return n(o(e))
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
                    o = Math.min;
                e.exports = function(e) {
                    return e > 0 ? o(n(e), 9007199254740991) : 0
                }
            },
            18: (e, t, r) => {
                var n = r(8602),
                    o = Object;
                e.exports = function(e) {
                    return o(n(e))
                }
            },
            3092: (e, t, r) => {
                var n = r(6382),
                    o = RangeError;
                e.exports = function(e, t) {
                    var r = n(e);
                    if (r % t) throw o("Wrong offset");
                    return r
                }
            },
            6382: (e, t, r) => {
                var n = r(8299),
                    o = RangeError;
                e.exports = function(e) {
                    var t = n(e);
                    if (t < 0) throw o("The argument can't be less than 0");
                    return t
                }
            },
            3912: (e, t, r) => {
                var n = r(970),
                    o = r(3021),
                    a = r(7870),
                    i = r(2317),
                    s = r(6082),
                    l = r(6250),
                    c = TypeError,
                    u = l("toPrimitive");
                e.exports = function(e, t) {
                    if (!o(e) || a(e)) return e;
                    var r, l = i(e, u);
                    if (l) {
                        if (void 0 === t && (t = "default"), r = n(l, e, t), !o(r) || a(r)) return r;
                        throw c("Can't convert object to primitive value")
                    }
                    return void 0 === t && (t = "number"), s(e, t)
                }
            },
            7880: (e, t, r) => {
                var n = r(3912),
                    o = r(7870);
                e.exports = function(e) {
                    var t = n(e, "string");
                    return o(t) ? t : t + ""
                }
            },
            8024: (e, t, r) => {
                var n = {};
                n[r(6250)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
            },
            9013: (e, t, r) => {
                var n = r(7221),
                    o = String;
                e.exports = function(e) {
                    if ("Symbol" === n(e)) throw TypeError("Cannot convert a Symbol value to a string");
                    return o(e)
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
                    o = r(2689),
                    a = r(970),
                    i = r(8521),
                    s = r(3471),
                    l = r(7854),
                    c = r(819),
                    u = r(3949),
                    d = r(3179),
                    f = r(1720),
                    p = r(3781),
                    _ = r(6443),
                    v = r(1169),
                    h = r(3092),
                    g = r(7880),
                    m = r(5835),
                    y = r(7221),
                    w = r(3021),
                    b = r(7870),
                    x = r(3583),
                    E = r(631),
                    C = r(1672),
                    S = r(4161).f,
                    A = r(8382),
                    O = r(8250).forEach,
                    T = r(7025),
                    I = r(4173),
                    R = r(2468),
                    N = r(7812),
                    P = r(7832),
                    k = r(3570),
                    M = P.get,
                    D = P.set,
                    F = P.enforce,
                    j = R.f,
                    L = N.f,
                    B = Math.round,
                    $ = o.RangeError,
                    W = c.ArrayBuffer,
                    U = W.prototype,
                    G = c.DataView,
                    H = l.NATIVE_ARRAY_BUFFER_VIEWS,
                    V = l.TYPED_ARRAY_TAG,
                    Z = l.TypedArray,
                    z = l.TypedArrayPrototype,
                    q = l.aTypedArrayConstructor,
                    J = l.isTypedArray,
                    K = "BYTES_PER_ELEMENT",
                    X = "Wrong length",
                    Y = function(e, t) {
                        q(e);
                        for (var r = 0, n = t.length, o = new e(n); n > r;) o[r] = t[r++];
                        return o
                    },
                    Q = function(e, t) {
                        I(e, t, {
                            configurable: !0,
                            get: function() {
                                return M(this)[t]
                            }
                        })
                    },
                    ee = function(e) {
                        var t;
                        return E(U, e) || "ArrayBuffer" == (t = y(e)) || "SharedArrayBuffer" == t
                    },
                    te = function(e, t) {
                        return J(e) && !b(t) && t in e && p(+t) && t >= 0
                    },
                    re = function(e, t) {
                        return t = g(t), te(e, t) ? d(2, e[t]) : L(e, t)
                    },
                    ne = function(e, t, r) {
                        return t = g(t), !(te(e, t) && w(r) && m(r, "value")) || m(r, "get") || m(r, "set") || r.configurable || m(r, "writable") && !r.writable || m(r, "enumerable") && !r.enumerable ? j(e, t, r) : (e[t] = r.value, e)
                    };
                i ? (H || (N.f = re, R.f = ne, Q(z, "buffer"), Q(z, "byteOffset"), Q(z, "byteLength"), Q(z, "length")), n({
                    target: "Object",
                    stat: !0,
                    forced: !H
                }, {
                    getOwnPropertyDescriptor: re,
                    defineProperty: ne
                }), e.exports = function(e, t, r) {
                    var i = e.match(/\d+/)[0] / 8,
                        l = e + (r ? "Clamped" : "") + "Array",
                        c = "get" + e,
                        d = "set" + e,
                        p = o[l],
                        g = p,
                        m = g && g.prototype,
                        y = {},
                        b = function(e, t) {
                            j(e, t, {
                                get: function() {
                                    return function(e, t) {
                                        var r = M(e);
                                        return r.view[c](t * i + r.byteOffset, !0)
                                    }(this, t)
                                },
                                set: function(e) {
                                    return function(e, t, n) {
                                        var o = M(e);
                                        r && (n = (n = B(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), o.view[d](t * i + o.byteOffset, n, !0)
                                    }(this, t, e)
                                },
                                enumerable: !0
                            })
                        };
                    H ? s && (g = t((function(e, t, r, n) {
                        return u(e, m), k(w(t) ? ee(t) ? void 0 !== n ? new p(t, h(r, i), n) : void 0 !== r ? new p(t, h(r, i)) : new p(t) : J(t) ? Y(g, t) : a(A, g, t) : new p(v(t)), e, g)
                    })), C && C(g, Z), O(S(p), (function(e) {
                        e in g || f(g, e, p[e])
                    })), g.prototype = m) : (g = t((function(e, t, r, n) {
                        u(e, m);
                        var o, s, l, c = 0,
                            d = 0;
                        if (w(t)) {
                            if (!ee(t)) return J(t) ? Y(g, t) : a(A, g, t);
                            o = t, d = h(r, i);
                            var f = t.byteLength;
                            if (void 0 === n) {
                                if (f % i) throw $(X);
                                if ((s = f - d) < 0) throw $(X)
                            } else if ((s = _(n) * i) + d > f) throw $(X);
                            l = s / i
                        } else l = v(t), o = new W(s = l * i);
                        for (D(e, {
                                buffer: o,
                                byteOffset: d,
                                byteLength: s,
                                length: l,
                                view: new G(o)
                            }); c < l;) b(e, c++)
                    })), C && C(g, Z), m = g.prototype = x(z)), m.constructor !== g && f(m, "constructor", g), F(m).TypedArrayConstructor = g, V && f(m, V, l);
                    var E = g != p;
                    y[l] = g, n({
                        global: !0,
                        constructor: !0,
                        forced: E,
                        sham: !H
                    }, y), K in g || f(g, K, i), K in m || f(m, K, i), T(l)
                }) : e.exports = function() {}
            },
            3471: (e, t, r) => {
                var n = r(2689),
                    o = r(9835),
                    a = r(2176),
                    i = r(7854).NATIVE_ARRAY_BUFFER_VIEWS,
                    s = n.ArrayBuffer,
                    l = n.Int8Array;
                e.exports = !i || !o((function() {
                    l(1)
                })) || !o((function() {
                    new l(-1)
                })) || !a((function(e) {
                    new l, new l(null), new l(1.5), new l(e)
                }), !0) || o((function() {
                    return 1 !== new l(new s(2), 1, void 0).length
                }))
            },
            8382: (e, t, r) => {
                var n = r(8995),
                    o = r(970),
                    a = r(7663),
                    i = r(18),
                    s = r(56),
                    l = r(8631),
                    c = r(5569),
                    u = r(4713),
                    d = r(2488),
                    f = r(7854).aTypedArrayConstructor,
                    p = r(710);
                e.exports = function(e) {
                    var t, r, _, v, h, g, m, y, w = a(this),
                        b = i(e),
                        x = arguments.length,
                        E = x > 1 ? arguments[1] : void 0,
                        C = void 0 !== E,
                        S = c(b);
                    if (S && !u(S))
                        for (y = (m = l(b, S)).next, b = []; !(g = o(y, m)).done;) b.push(g.value);
                    for (C && x > 2 && (E = n(E, arguments[2])), r = s(b), _ = new(f(w))(r), v = d(_), t = 0; r > t; t++) h = C ? E(b[t], t) : b[t], _[t] = v ? p(h) : +h;
                    return _
                }
            },
            5567: (e, t, r) => {
                var n = r(6619),
                    o = 0,
                    a = Math.random(),
                    i = n(1..toString);
                e.exports = function(e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++o + a, 36)
                }
            },
            7079: (e, t, r) => {
                var n = r(4427);
                e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            6144: (e, t, r) => {
                var n = r(8521),
                    o = r(9835);
                e.exports = n && o((function() {
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
                    o = r(9548),
                    a = n.WeakMap;
                e.exports = o(a) && /native code/.test(String(a))
            },
            1274: (e, t, r) => {
                var n = r(1626),
                    o = r(5835),
                    a = r(7411),
                    i = r(2468).f;
                e.exports = function(e) {
                    var t = n.Symbol || (n.Symbol = {});
                    o(t, e) || i(t, e, {
                        value: a.f(e)
                    })
                }
            },
            7411: (e, t, r) => {
                var n = r(6250);
                t.f = n
            },
            6250: (e, t, r) => {
                var n = r(2689),
                    o = r(969),
                    a = r(5835),
                    i = r(5567),
                    s = r(4427),
                    l = r(7079),
                    c = n.Symbol,
                    u = o("wks"),
                    d = l ? c.for || c : c && c.withoutSetter || i;
                e.exports = function(e) {
                    return a(u, e) || (u[e] = s && a(c, e) ? c[e] : d("Symbol." + e)), u[e]
                }
            },
            8689: e => {
                e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
            },
            884: (e, t, r) => {
                "use strict";
                var n = r(2555),
                    o = r(5835),
                    a = r(1720),
                    i = r(631),
                    s = r(1672),
                    l = r(4361),
                    c = r(2756),
                    u = r(3570),
                    d = r(8364),
                    f = r(5016),
                    p = r(9431),
                    _ = r(8521),
                    v = r(5231);
                e.exports = function(e, t, r, h) {
                    var g = "stackTraceLimit",
                        m = h ? 2 : 1,
                        y = e.split("."),
                        w = y[y.length - 1],
                        b = n.apply(null, y);
                    if (b) {
                        var x = b.prototype;
                        if (!v && o(x, "cause") && delete x.cause, !r) return b;
                        var E = n("Error"),
                            C = t((function(e, t) {
                                var r = d(h ? t : e, void 0),
                                    n = h ? new b(e) : new b;
                                return void 0 !== r && a(n, "message", r), p(n, C, n.stack, 2), this && i(x, this) && u(n, this, C), arguments.length > m && f(n, arguments[m]), n
                            }));
                        if (C.prototype = x, "Error" !== w ? s ? s(C, E) : l(C, E, {
                                name: !0
                            }) : _ && g in b && (c(C, b, g), c(C, b, "prepareStackTrace")), l(C, b), !v) try {
                            x.name !== w && a(x, "name", w), x.constructor = C
                        } catch (e) {}
                        return C
                    }
                }
            },
            2894: (e, t, r) => {
                var n = r(5077),
                    o = r(2555),
                    a = r(352),
                    i = r(9835),
                    s = r(884),
                    l = "AggregateError",
                    c = o(l),
                    u = !i((function() {
                        return 1 !== c([1]).errors[0]
                    })) && i((function() {
                        return 7 !== c([1], l, {
                            cause: 7
                        }).cause
                    }));
                n({
                    global: !0,
                    constructor: !0,
                    arity: 2,
                    forced: u
                }, {
                    AggregateError: s(l, (function(e) {
                        return function(t, r) {
                            return a(e, this, arguments)
                        }
                    }), u, !0)
                })
            },
            6598: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(631),
                    a = r(5616),
                    i = r(1672),
                    s = r(4361),
                    l = r(3583),
                    c = r(1720),
                    u = r(3179),
                    d = r(5016),
                    f = r(9431),
                    p = r(4760),
                    _ = r(8364),
                    v = r(6250)("toStringTag"),
                    h = Error,
                    g = [].push,
                    m = function(e, t) {
                        var r, n = o(y, this);
                        i ? r = i(h(), n ? a(this) : y) : (r = n ? this : l(y), c(r, v, "Error")), void 0 !== t && c(r, "message", _(t)), f(r, m, r.stack, 1), arguments.length > 2 && d(r, arguments[2]);
                        var s = [];
                        return p(e, g, {
                            that: s
                        }), c(r, "errors", s), r
                    };
                i ? i(m, h) : s(m, h, {
                    name: !0
                });
                var y = m.prototype = l(h.prototype, {
                    constructor: u(1, m),
                    message: u(1, ""),
                    name: u(1, "AggregateError")
                });
                n({
                    global: !0,
                    constructor: !0,
                    arity: 2
                }, {
                    AggregateError: m
                })
            },
            4006: (e, t, r) => {
                r(6598)
            },
            3665: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(3482),
                    a = r(9835),
                    i = r(819),
                    s = r(7981),
                    l = r(3610),
                    c = r(6443),
                    u = r(5667),
                    d = i.ArrayBuffer,
                    f = i.DataView,
                    p = f.prototype,
                    _ = o(d.prototype.slice),
                    v = o(p.getUint8),
                    h = o(p.setUint8);
                n({
                    target: "ArrayBuffer",
                    proto: !0,
                    unsafe: !0,
                    forced: a((function() {
                        return !new d(2).slice(1, void 0).byteLength
                    }))
                }, {
                    slice: function(e, t) {
                        if (_ && void 0 === t) return _(s(this), e);
                        for (var r = s(this).byteLength, n = l(e, r), o = l(void 0 === t ? r : t, r), a = new(u(this, d))(c(o - n)), i = new f(this), p = new f(a), g = 0; n < o;) h(p, g++, v(i, n++));
                        return a
                    }
                })
            },
            6291: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(18),
                    a = r(56),
                    i = r(8299),
                    s = r(4014);
                n({
                    target: "Array",
                    proto: !0
                }, {
                    at: function(e) {
                        var t = o(this),
                            r = a(t),
                            n = i(e),
                            s = n >= 0 ? n : r + n;
                        return s < 0 || s >= r ? void 0 : t[s]
                    }
                }), s("at")
            },
            2495: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(3792).findLastIndex,
                    a = r(4014);
                n({
                    target: "Array",
                    proto: !0
                }, {
                    findLastIndex: function(e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), a("findLastIndex")
            },
            2933: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(3792).findLast,
                    a = r(4014);
                n({
                    target: "Array",
                    proto: !0
                }, {
                    findLast: function(e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), a("findLast")
            },
            628: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(18),
                    a = r(56),
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
                        var t = o(this),
                            r = a(t),
                            n = arguments.length;
                        s(r + n);
                        for (var l = 0; l < n; l++) t[r] = arguments[l], r++;
                        return i(t, r), r
                    }
                })
            },
            611: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(6619),
                    a = r(1501),
                    i = o([].reverse),
                    s = [1, 2];
                n({
                    target: "Array",
                    proto: !0,
                    forced: String(s) === String(s.reverse())
                }, {
                    reverse: function() {
                        return a(this) && (this.length = this.length), i(this)
                    }
                })
            },
            503: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(6203),
                    a = r(7417),
                    i = r(4014),
                    s = Array;
                n({
                    target: "Array",
                    proto: !0
                }, {
                    toReversed: function() {
                        return o(a(this), s)
                    }
                }), i("toReversed")
            },
            624: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(6619),
                    a = r(9573),
                    i = r(7417),
                    s = r(113),
                    l = r(9682),
                    c = r(4014),
                    u = Array,
                    d = o(l("Array").sort);
                n({
                    target: "Array",
                    proto: !0
                }, {
                    toSorted: function(e) {
                        void 0 !== e && a(e);
                        var t = i(this),
                            r = s(u, t);
                        return d(r, e)
                    }
                }), c("toSorted")
            },
            9349: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(4014),
                    a = r(5396),
                    i = r(56),
                    s = r(3610),
                    l = r(7417),
                    c = r(8299),
                    u = Array,
                    d = Math.max,
                    f = Math.min;
                n({
                    target: "Array",
                    proto: !0
                }, {
                    toSpliced: function(e, t) {
                        var r, n, o, p, _ = l(this),
                            v = i(_),
                            h = s(e, v),
                            g = arguments.length,
                            m = 0;
                        for (0 === g ? r = n = 0 : 1 === g ? (r = 0, n = v - h) : (r = g - 2, n = f(d(c(t), 0), v - h)), o = a(v + r - n), p = u(o); m < h; m++) p[m] = _[m];
                        for (; m < h + r; m++) p[m] = arguments[m - h + 2];
                        for (; m < o; m++) p[m] = _[m + n - r];
                        return p
                    }
                }), o("toSpliced")
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
                    o = r(18),
                    a = r(56),
                    i = r(3447),
                    s = r(9580),
                    l = r(5396);
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
                        var t = o(this),
                            r = a(t),
                            n = arguments.length;
                        if (n) {
                            l(r + n);
                            for (var c = r; c--;) {
                                var u = c + n;
                                c in t ? t[u] = t[c] : s(t, u)
                            }
                            for (var d = 0; d < n; d++) t[d] = arguments[d]
                        }
                        return i(t, r + n)
                    }
                })
            },
            1398: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(4784),
                    a = r(7417),
                    i = Array;
                n({
                    target: "Array",
                    proto: !0
                }, {
                    with: function(e, t) {
                        return o(a(this), i, e, t)
                    }
                })
            },
            5932: (e, t, r) => {
                var n = r(5077),
                    o = r(2689),
                    a = r(352),
                    i = r(884),
                    s = "WebAssembly",
                    l = o[s],
                    c = 7 !== Error("e", {
                        cause: 7
                    }).cause,
                    u = function(e, t) {
                        var r = {};
                        r[e] = i(e, t, c), n({
                            global: !0,
                            constructor: !0,
                            arity: 1,
                            forced: c
                        }, r)
                    },
                    d = function(e, t) {
                        if (l && l[e]) {
                            var r = {};
                            r[e] = i(s + "." + e, t, c), n({
                                target: s,
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: c
                            }, r)
                        }
                    };
                u("Error", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), u("EvalError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), u("RangeError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), u("ReferenceError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), u("SyntaxError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), u("TypeError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), u("URIError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), d("CompileError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), d("LinkError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                })), d("RuntimeError", (function(e) {
                    return function(t) {
                        return a(e, this, arguments)
                    }
                }))
            },
            3194: (e, t, r) => {
                var n = r(5077),
                    o = r(2689);
                n({
                    global: !0,
                    forced: o.globalThis !== o
                }, {
                    globalThis: o
                })
            },
            3322: (e, t, r) => {
                var n = r(5077),
                    o = r(2555),
                    a = r(352),
                    i = r(970),
                    s = r(6619),
                    l = r(9835),
                    c = r(9548),
                    u = r(7870),
                    d = r(7687),
                    f = r(3849),
                    p = r(4427),
                    _ = String,
                    v = o("JSON", "stringify"),
                    h = s(/./.exec),
                    g = s("".charAt),
                    m = s("".charCodeAt),
                    y = s("".replace),
                    w = s(1..toString),
                    b = /[\uD800-\uDFFF]/g,
                    x = /^[\uD800-\uDBFF]$/,
                    E = /^[\uDC00-\uDFFF]$/,
                    C = !p || l((function() {
                        var e = o("Symbol")();
                        return "[null]" != v([e]) || "{}" != v({
                            a: e
                        }) || "{}" != v(Object(e))
                    })),
                    S = l((function() {
                        return '"\\udf06\\ud834"' !== v("\udf06\ud834") || '"\\udead"' !== v("\udead")
                    })),
                    A = function(e, t) {
                        var r = d(arguments),
                            n = f(t);
                        if (c(n) || void 0 !== e && !u(e)) return r[1] = function(e, t) {
                            if (c(n) && (t = i(n, this, _(e), t)), !u(t)) return t
                        }, a(v, null, r)
                    },
                    O = function(e, t, r) {
                        var n = g(r, t - 1),
                            o = g(r, t + 1);
                        return h(x, e) && !h(E, o) || h(E, e) && !h(x, n) ? "\\u" + w(m(e, 0), 16) : e
                    };
                v && n({
                    target: "JSON",
                    stat: !0,
                    arity: 3,
                    forced: C || S
                }, {
                    stringify: function(e, t, r) {
                        var n = d(arguments),
                            o = a(C ? A : v, null, n);
                        return S && "string" == typeof o ? y(o, b, O) : o
                    }
                })
            },
            9219: (e, t, r) => {
                var n = r(5077),
                    o = r(4760),
                    a = r(9117);
                n({
                    target: "Object",
                    stat: !0
                }, {
                    fromEntries: function(e) {
                        var t = {};
                        return o(e, (function(e, r) {
                            a(t, e, r)
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
                    o = r(970),
                    a = r(9573),
                    i = r(9203),
                    s = r(3576),
                    l = r(4760);
                n({
                    target: "Promise",
                    stat: !0,
                    forced: r(5774)
                }, {
                    allSettled: function(e) {
                        var t = this,
                            r = i.f(t),
                            n = r.resolve,
                            c = r.reject,
                            u = s((function() {
                                var r = a(t.resolve),
                                    i = [],
                                    s = 0,
                                    c = 1;
                                l(e, (function(e) {
                                    var a = s++,
                                        l = !1;
                                    c++, o(r, t, e).then((function(e) {
                                        l || (l = !0, i[a] = {
                                            status: "fulfilled",
                                            value: e
                                        }, --c || n(i))
                                    }), (function(e) {
                                        l || (l = !0, i[a] = {
                                            status: "rejected",
                                            reason: e
                                        }, --c || n(i))
                                    }))
                                })), --c || n(i)
                            }));
                        return u.error && c(u.value), r.promise
                    }
                })
            },
            890: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(9573),
                    i = r(9203),
                    s = r(3576),
                    l = r(4760);
                n({
                    target: "Promise",
                    stat: !0,
                    forced: r(5774)
                }, {
                    all: function(e) {
                        var t = this,
                            r = i.f(t),
                            n = r.resolve,
                            c = r.reject,
                            u = s((function() {
                                var r = a(t.resolve),
                                    i = [],
                                    s = 0,
                                    u = 1;
                                l(e, (function(e) {
                                    var a = s++,
                                        l = !1;
                                    u++, o(r, t, e).then((function(e) {
                                        l || (l = !0, i[a] = e, --u || n(i))
                                    }), c)
                                })), --u || n(i)
                            }));
                        return u.error && c(u.value), r.promise
                    }
                })
            },
            5422: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(9573),
                    i = r(2555),
                    s = r(9203),
                    l = r(3576),
                    c = r(4760),
                    u = r(5774),
                    d = "No one promise resolved";
                n({
                    target: "Promise",
                    stat: !0,
                    forced: u
                }, {
                    any: function(e) {
                        var t = this,
                            r = i("AggregateError"),
                            n = s.f(t),
                            u = n.resolve,
                            f = n.reject,
                            p = l((function() {
                                var n = a(t.resolve),
                                    i = [],
                                    s = 0,
                                    l = 1,
                                    p = !1;
                                c(e, (function(e) {
                                    var a = s++,
                                        c = !1;
                                    l++, o(n, t, e).then((function(e) {
                                        c || p || (p = !0, u(e))
                                    }), (function(e) {
                                        c || p || (c = !0, i[a] = e, --l || f(new r(i, d)))
                                    }))
                                })), --l || f(new r(i, d))
                            }));
                        return p.error && f(p.value), n.promise
                    }
                })
            },
            4745: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(5231),
                    a = r(3984).CONSTRUCTOR,
                    i = r(9512),
                    s = r(2555),
                    l = r(9548),
                    c = r(9146),
                    u = i && i.prototype;
                if (n({
                        target: "Promise",
                        proto: !0,
                        forced: a,
                        real: !0
                    }, {
                        catch: function(e) {
                            return this.then(void 0, e)
                        }
                    }), !o && l(i)) {
                    var d = s("Promise").prototype.catch;
                    u.catch !== d && c(u, "catch", d, {
                        unsafe: !0
                    })
                }
            },
            1546: (e, t, r) => {
                "use strict";
                var n, o, a, i = r(5077),
                    s = r(5231),
                    l = r(8976),
                    c = r(2689),
                    u = r(970),
                    d = r(9146),
                    f = r(1672),
                    p = r(4029),
                    _ = r(7025),
                    v = r(9573),
                    h = r(9548),
                    g = r(3021),
                    m = r(3949),
                    y = r(5667),
                    w = r(3233).set,
                    b = r(9722),
                    x = r(7416),
                    E = r(3576),
                    C = r(2576),
                    S = r(7832),
                    A = r(9512),
                    O = r(3984),
                    T = r(9203),
                    I = "Promise",
                    R = O.CONSTRUCTOR,
                    N = O.REJECTION_EVENT,
                    P = O.SUBCLASSING,
                    k = S.getterFor(I),
                    M = S.set,
                    D = A && A.prototype,
                    F = A,
                    j = D,
                    L = c.TypeError,
                    B = c.document,
                    $ = c.process,
                    W = T.f,
                    U = W,
                    G = !!(B && B.createEvent && c.dispatchEvent),
                    H = "unhandledrejection",
                    V = function(e) {
                        var t;
                        return !(!g(e) || !h(t = e.then)) && t
                    },
                    Z = function(e, t) {
                        var r, n, o, a = t.value,
                            i = 1 == t.state,
                            s = i ? e.ok : e.fail,
                            l = e.resolve,
                            c = e.reject,
                            d = e.domain;
                        try {
                            s ? (i || (2 === t.rejection && X(t), t.rejection = 1), !0 === s ? r = a : (d && d.enter(), r = s(a), d && (d.exit(), o = !0)), r === e.promise ? c(L("Promise-chain cycle")) : (n = V(r)) ? u(n, r, l, c) : l(r)) : c(a)
                        } catch (e) {
                            d && !o && d.exit(), c(e)
                        }
                    },
                    z = function(e, t) {
                        e.notified || (e.notified = !0, b((function() {
                            for (var r, n = e.reactions; r = n.get();) Z(r, e);
                            e.notified = !1, t && !e.rejection && J(e)
                        })))
                    },
                    q = function(e, t, r) {
                        var n, o;
                        G ? ((n = B.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), c.dispatchEvent(n)) : n = {
                            promise: t,
                            reason: r
                        }, !N && (o = c["on" + e]) ? o(n) : e === H && x("Unhandled promise rejection", r)
                    },
                    J = function(e) {
                        u(w, c, (function() {
                            var t, r = e.facade,
                                n = e.value;
                            if (K(e) && (t = E((function() {
                                    l ? $.emit("unhandledRejection", n, r) : q(H, r, n)
                                })), e.rejection = l || K(e) ? 2 : 1, t.error)) throw t.value
                        }))
                    },
                    K = function(e) {
                        return 1 !== e.rejection && !e.parent
                    },
                    X = function(e) {
                        u(w, c, (function() {
                            var t = e.facade;
                            l ? $.emit("rejectionHandled", t) : q("rejectionhandled", t, e.value)
                        }))
                    },
                    Y = function(e, t, r) {
                        return function(n) {
                            e(t, n, r)
                        }
                    },
                    Q = function(e, t, r) {
                        e.done || (e.done = !0, r && (e = r), e.value = t, e.state = 2, z(e, !0))
                    },
                    ee = function(e, t, r) {
                        if (!e.done) {
                            e.done = !0, r && (e = r);
                            try {
                                if (e.facade === t) throw L("Promise can't be resolved itself");
                                var n = V(t);
                                n ? b((function() {
                                    var r = {
                                        done: !1
                                    };
                                    try {
                                        u(n, t, Y(ee, r, e), Y(Q, r, e))
                                    } catch (t) {
                                        Q(r, t, e)
                                    }
                                })) : (e.value = t, e.state = 1, z(e, !1))
                            } catch (t) {
                                Q({
                                    done: !1
                                }, t, e)
                            }
                        }
                    };
                if (R && (j = (F = function(e) {
                        m(this, j), v(e), u(n, this);
                        var t = k(this);
                        try {
                            e(Y(ee, t), Y(Q, t))
                        } catch (e) {
                            Q(t, e)
                        }
                    }).prototype, (n = function(e) {
                        M(this, {
                            type: I,
                            done: !1,
                            notified: !1,
                            parent: !1,
                            reactions: new C,
                            rejection: !1,
                            state: 0,
                            value: void 0
                        })
                    }).prototype = d(j, "then", (function(e, t) {
                        var r = k(this),
                            n = W(y(this, F));
                        return r.parent = !0, n.ok = !h(e) || e, n.fail = h(t) && t, n.domain = l ? $.domain : void 0, 0 == r.state ? r.reactions.add(n) : b((function() {
                            Z(n, r)
                        })), n.promise
                    })), o = function() {
                        var e = new n,
                            t = k(e);
                        this.promise = e, this.resolve = Y(ee, t), this.reject = Y(Q, t)
                    }, T.f = W = function(e) {
                        return e === F || undefined === e ? new o(e) : U(e)
                    }, !s && h(A) && D !== Object.prototype)) {
                    a = D.then, P || d(D, "then", (function(e, t) {
                        var r = this;
                        return new F((function(e, t) {
                            u(a, r, e, t)
                        })).then(e, t)
                    }), {
                        unsafe: !0
                    });
                    try {
                        delete D.constructor
                    } catch (e) {}
                    f && f(D, j)
                }
                i({
                    global: !0,
                    constructor: !0,
                    wrap: !0,
                    forced: R
                }, {
                    Promise: F
                }), p(F, I, !1, !0), _(I)
            },
            3366: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(5231),
                    a = r(9512),
                    i = r(9835),
                    s = r(2555),
                    l = r(9548),
                    c = r(5667),
                    u = r(2988),
                    d = r(9146),
                    f = a && a.prototype;
                if (n({
                        target: "Promise",
                        proto: !0,
                        real: !0,
                        forced: !!a && i((function() {
                            f.finally.call({
                                then: function() {}
                            }, (function() {}))
                        }))
                    }, {
                        finally: function(e) {
                            var t = c(this, s("Promise")),
                                r = l(e);
                            return this.then(r ? function(r) {
                                return u(t, e()).then((function() {
                                    return r
                                }))
                            } : e, r ? function(r) {
                                return u(t, e()).then((function() {
                                    throw r
                                }))
                            } : e)
                        }
                    }), !o && l(a)) {
                    var p = s("Promise").prototype.finally;
                    f.finally !== p && d(f, "finally", p, {
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
                    o = r(970),
                    a = r(9573),
                    i = r(9203),
                    s = r(3576),
                    l = r(4760);
                n({
                    target: "Promise",
                    stat: !0,
                    forced: r(5774)
                }, {
                    race: function(e) {
                        var t = this,
                            r = i.f(t),
                            n = r.reject,
                            c = s((function() {
                                var i = a(t.resolve);
                                l(e, (function(e) {
                                    o(i, t, e).then(r.resolve, n)
                                }))
                            }));
                        return c.error && n(c.value), r.promise
                    }
                })
            },
            8237: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(9203);
                n({
                    target: "Promise",
                    stat: !0,
                    forced: r(3984).CONSTRUCTOR
                }, {
                    reject: function(e) {
                        var t = a.f(this);
                        return o(t.reject, void 0, e), t.promise
                    }
                })
            },
            8085: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(2555),
                    a = r(5231),
                    i = r(9512),
                    s = r(3984).CONSTRUCTOR,
                    l = r(2988),
                    c = o("Promise"),
                    u = a && !s;
                n({
                    target: "Promise",
                    stat: !0,
                    forced: a || s
                }, {
                    resolve: function(e) {
                        return l(u && this === c ? i : this, e)
                    }
                })
            },
            3517: (e, t, r) => {
                var n = r(5077),
                    o = r(2689),
                    a = r(4029);
                n({
                    global: !0
                }, {
                    Reflect: {}
                }), a(o.Reflect, "Reflect", !0)
            },
            5403: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(8627);
                n({
                    target: "RegExp",
                    proto: !0,
                    forced: /./.exec !== o
                }, {
                    exec: o
                })
            },
            909: (e, t, r) => {
                var n = r(2689),
                    o = r(8521),
                    a = r(4173),
                    i = r(9811),
                    s = r(9835),
                    l = n.RegExp,
                    c = l.prototype;
                o && s((function() {
                    var e = !0;
                    try {
                        l(".", "d")
                    } catch (t) {
                        e = !1
                    }
                    var t = {},
                        r = "",
                        n = e ? "dgimsy" : "gimsy",
                        o = function(e, n) {
                            Object.defineProperty(t, e, {
                                get: function() {
                                    return r += n, !0
                                }
                            })
                        },
                        a = {
                            dotAll: "s",
                            global: "g",
                            ignoreCase: "i",
                            multiline: "m",
                            sticky: "y"
                        };
                    for (var i in e && (a.hasIndices = "d"), a) o(i, a[i]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== n || r !== n
                })) && a(c, "flags", {
                    configurable: !0,
                    get: i
                })
            },
            4744: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(6619),
                    a = r(8602),
                    i = r(8299),
                    s = r(9013),
                    l = r(9835),
                    c = o("".charAt);
                n({
                    target: "String",
                    proto: !0,
                    forced: l((function() {
                        return "\ud842" !== "𠮷".at(-2)
                    }))
                }, {
                    at: function(e) {
                        var t = s(a(this)),
                            r = t.length,
                            n = i(e),
                            o = n >= 0 ? n : r + n;
                        return o < 0 || o >= r ? void 0 : c(t, o)
                    }
                })
            },
            164: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(3482),
                    i = r(4610),
                    s = r(2549),
                    l = r(8602),
                    c = r(6443),
                    u = r(9013),
                    d = r(7981),
                    f = r(9799),
                    p = r(1335),
                    _ = r(5781),
                    v = r(3715),
                    h = r(2317),
                    g = r(9146),
                    m = r(9835),
                    y = r(6250),
                    w = r(5667),
                    b = r(5563),
                    x = r(8343),
                    E = r(7832),
                    C = r(5231),
                    S = y("matchAll"),
                    A = "RegExp String",
                    O = A + " Iterator",
                    T = E.set,
                    I = E.getterFor(O),
                    R = RegExp.prototype,
                    N = TypeError,
                    P = a("".indexOf),
                    k = a("".matchAll),
                    M = !!k && !m((function() {
                        k("a", /./)
                    })),
                    D = i((function(e, t, r, n) {
                        T(this, {
                            type: O,
                            regexp: e,
                            string: t,
                            global: r,
                            unicode: n,
                            done: !1
                        })
                    }), A, (function() {
                        var e = I(this);
                        if (e.done) return s(void 0, !0);
                        var t = e.regexp,
                            r = e.string,
                            n = x(t, r);
                        return null === n ? (e.done = !0, s(void 0, !0)) : e.global ? ("" === u(n[0]) && (t.lastIndex = b(r, c(t.lastIndex), e.unicode)), s(n, !1)) : (e.done = !0, s(n, !1))
                    })),
                    F = function(e) {
                        var t, r, n, o = d(this),
                            a = u(e),
                            i = w(o, RegExp),
                            s = u(v(o));
                        return t = new i(i === RegExp ? o.source : o, s), r = !!~P(s, "g"), n = !!~P(s, "u"), t.lastIndex = c(o.lastIndex), new D(t, a, r, n)
                    };
                n({
                    target: "String",
                    proto: !0,
                    forced: M
                }, {
                    matchAll: function(e) {
                        var t, r, n, a, i = l(this);
                        if (f(e)) {
                            if (M) return k(i, e)
                        } else {
                            if (_(e) && (t = u(l(v(e))), !~P(t, "g"))) throw N("`.matchAll` does not allow non-global regexes");
                            if (M) return k(i, e);
                            if (void 0 === (n = h(e, S)) && C && "RegExp" == p(e) && (n = F), n) return o(n, e, i)
                        }
                        return r = u(i), a = new RegExp(e, "g"), C ? o(F, a, r) : a[S](r)
                    }
                }), C || S in R || g(R, S, F)
            },
            4481: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(6619),
                    i = r(8602),
                    s = r(9548),
                    l = r(9799),
                    c = r(5781),
                    u = r(9013),
                    d = r(2317),
                    f = r(3715),
                    p = r(2754),
                    _ = r(6250),
                    v = r(5231),
                    h = _("replace"),
                    g = TypeError,
                    m = a("".indexOf),
                    y = a("".replace),
                    w = a("".slice),
                    b = Math.max,
                    x = function(e, t, r) {
                        return r > e.length ? -1 : "" === t ? r : m(e, t, r)
                    };
                n({
                    target: "String",
                    proto: !0
                }, {
                    replaceAll: function(e, t) {
                        var r, n, a, _, E, C, S, A, O, T = i(this),
                            I = 0,
                            R = 0,
                            N = "";
                        if (!l(e)) {
                            if ((r = c(e)) && (n = u(i(f(e))), !~m(n, "g"))) throw g("`.replaceAll` does not allow non-global regexes");
                            if (a = d(e, h)) return o(a, e, T, t);
                            if (v && r) return y(u(T), e, t)
                        }
                        for (_ = u(T), E = u(e), (C = s(t)) || (t = u(t)), S = E.length, A = b(1, S), I = x(_, E, 0); - 1 !== I;) O = C ? u(t(E, I, _)) : p(E, _, I, [], void 0, t), N += w(_, R, I) + O, R = I + S, I = x(_, E, I + A);
                        return R < _.length && (N += w(_, R)), N
                    }
                })
            },
            1943: (e, t, r) => {
                "use strict";
                var n = r(352),
                    o = r(970),
                    a = r(6619),
                    i = r(1552),
                    s = r(9835),
                    l = r(7981),
                    c = r(9548),
                    u = r(9799),
                    d = r(8299),
                    f = r(6443),
                    p = r(9013),
                    _ = r(8602),
                    v = r(5563),
                    h = r(2317),
                    g = r(2754),
                    m = r(8343),
                    y = r(6250)("replace"),
                    w = Math.max,
                    b = Math.min,
                    x = a([].concat),
                    E = a([].push),
                    C = a("".indexOf),
                    S = a("".slice),
                    A = "$0" === "a".replace(/./, "$0"),
                    O = !!/./ [y] && "" === /./ [y]("a", "$0");
                i("replace", (function(e, t, r) {
                    var a = O ? "$" : "$0";
                    return [function(e, r) {
                        var n = _(this),
                            a = u(e) ? void 0 : h(e, y);
                        return a ? o(a, e, n, r) : o(t, p(n), e, r)
                    }, function(e, o) {
                        var i = l(this),
                            s = p(e);
                        if ("string" == typeof o && -1 === C(o, a) && -1 === C(o, "$<")) {
                            var u = r(t, i, s, o);
                            if (u.done) return u.value
                        }
                        var _ = c(o);
                        _ || (o = p(o));
                        var h = i.global;
                        if (h) {
                            var y = i.unicode;
                            i.lastIndex = 0
                        }
                        for (var A = [];;) {
                            var O = m(i, s);
                            if (null === O) break;
                            if (E(A, O), !h) break;
                            "" === p(O[0]) && (i.lastIndex = v(s, f(i.lastIndex), y))
                        }
                        for (var T, I = "", R = 0, N = 0; N < A.length; N++) {
                            for (var P = p((O = A[N])[0]), k = w(b(d(O.index), s.length), 0), M = [], D = 1; D < O.length; D++) E(M, void 0 === (T = O[D]) ? T : String(T));
                            var F = O.groups;
                            if (_) {
                                var j = x([P], M, k, s);
                                void 0 !== F && E(j, F);
                                var L = p(n(o, void 0, j))
                            } else L = g(P, s, k, M, F, o);
                            k >= R && (I += S(s, R, k) + L, R = k + P.length)
                        }
                        return I + S(s, R)
                    }]
                }), !!s((function() {
                    var e = /./;
                    return e.exec = function() {
                        var e = [];
                        return e.groups = {
                            a: "7"
                        }, e
                    }, "7" !== "".replace(e, "$<a>")
                })) || !A || O)
            },
            5149: (e, t, r) => {
                r(4458);
                var n = r(5077),
                    o = r(9133);
                n({
                    target: "String",
                    proto: !0,
                    name: "trimEnd",
                    forced: "".trimEnd !== o
                }, {
                    trimEnd: o
                })
            },
            4458: (e, t, r) => {
                var n = r(5077),
                    o = r(9133);
                n({
                    target: "String",
                    proto: !0,
                    name: "trimEnd",
                    forced: "".trimRight !== o
                }, {
                    trimRight: o
                })
            },
            9228: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(5272).trim;
                n({
                    target: "String",
                    proto: !0,
                    forced: r(5238)("trim")
                }, {
                    trim: function() {
                        return o(this)
                    }
                })
            },
            889: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(8521),
                    a = r(2689),
                    i = r(6619),
                    s = r(5835),
                    l = r(9548),
                    c = r(631),
                    u = r(9013),
                    d = r(4173),
                    f = r(4361),
                    p = a.Symbol,
                    _ = p && p.prototype;
                if (o && l(p) && (!("description" in _) || void 0 !== p().description)) {
                    var v = {},
                        h = function() {
                            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
                                t = c(_, this) ? new p(e) : void 0 === e ? p() : p(e);
                            return "" === e && (v[t] = !0), t
                        };
                    f(h, p), h.prototype = _, _.constructor = h;
                    var g = "Symbol(test)" == String(p("test")),
                        m = i(_.valueOf),
                        y = i(_.toString),
                        w = /^Symbol\((.*)\)[^)]+$/,
                        b = i("".replace),
                        x = i("".slice);
                    d(_, "description", {
                        configurable: !0,
                        get: function() {
                            var e = m(this);
                            if (s(v, e)) return "";
                            var t = y(e),
                                r = g ? x(t, 7, -1) : b(t, w, "$1");
                            return "" === r ? void 0 : r
                        }
                    }), n({
                        global: !0,
                        constructor: !0,
                        forced: !0
                    }, {
                        Symbol: h
                    })
                }
            },
            9778: (e, t, r) => {
                r(1274)("matchAll")
            },
            7841: (e, t, r) => {
                "use strict";
                var n = r(7854),
                    o = r(56),
                    a = r(8299),
                    i = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("at", (function(e) {
                    var t = i(this),
                        r = o(t),
                        n = a(e),
                        s = n >= 0 ? n : r + n;
                    return s < 0 || s >= r ? void 0 : t[s]
                }))
            },
            5906: (e, t, r) => {
                "use strict";
                var n = r(7854),
                    o = r(5035),
                    a = r(710),
                    i = r(7221),
                    s = r(970),
                    l = r(6619),
                    c = r(9835),
                    u = n.aTypedArray,
                    d = n.exportTypedArrayMethod,
                    f = l("".slice);
                d("fill", (function(e) {
                    var t = arguments.length;
                    u(this);
                    var r = "Big" === f(i(this), 0, 3) ? a(e) : +e;
                    return s(o, this, r, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0)
                }), c((function() {
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
                    o = r(3792).findLastIndex,
                    a = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("findLastIndex", (function(e) {
                    return o(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
                }))
            },
            3719: (e, t, r) => {
                "use strict";
                var n = r(7854),
                    o = r(3792).findLast,
                    a = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("findLast", (function(e) {
                    return o(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
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
                    o = r(3471),
                    a = n.aTypedArrayConstructor;
                (0, n.exportTypedArrayStaticMethod)("of", (function() {
                    for (var e = 0, t = arguments.length, r = new(a(this))(t); t > e;) r[e] = arguments[e++];
                    return r
                }), o)
            },
            9589: (e, t, r) => {
                "use strict";
                var n = r(2689),
                    o = r(970),
                    a = r(7854),
                    i = r(56),
                    s = r(3092),
                    l = r(18),
                    c = r(9835),
                    u = n.RangeError,
                    d = n.Int8Array,
                    f = d && d.prototype,
                    p = f && f.set,
                    _ = a.aTypedArray,
                    v = a.exportTypedArrayMethod,
                    h = !c((function() {
                        var e = new Uint8ClampedArray(2);
                        return o(p, e, {
                            length: 1,
                            0: 3
                        }, 1), 3 !== e[1]
                    })),
                    g = h && a.NATIVE_ARRAY_BUFFER_VIEWS && c((function() {
                        var e = new d(2);
                        return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1]
                    }));
                v("set", (function(e) {
                    _(this);
                    var t = s(arguments.length > 1 ? arguments[1] : void 0, 1),
                        r = l(e);
                    if (h) return o(p, this, r, t);
                    var n = this.length,
                        a = i(r),
                        c = 0;
                    if (a + t > n) throw u("Wrong length");
                    for (; c < a;) this[t + c] = r[c++]
                }), !h || g)
            },
            5428: (e, t, r) => {
                "use strict";
                var n = r(2689),
                    o = r(3482),
                    a = r(9835),
                    i = r(9573),
                    s = r(2026),
                    l = r(7854),
                    c = r(3262),
                    u = r(1353),
                    d = r(9168),
                    f = r(2842),
                    p = l.aTypedArray,
                    _ = l.exportTypedArrayMethod,
                    v = n.Uint16Array,
                    h = v && o(v.prototype.sort),
                    g = !(!h || a((function() {
                        h(new v(2), null)
                    })) && a((function() {
                        h(new v(2), {})
                    }))),
                    m = !!h && !a((function() {
                        if (d) return d < 74;
                        if (c) return c < 67;
                        if (u) return !0;
                        if (f) return f < 602;
                        var e, t, r = new v(516),
                            n = Array(516);
                        for (e = 0; e < 516; e++) t = e % 4, r[e] = 515 - e, n[e] = e - 2 * t + 3;
                        for (h(r, (function(e, t) {
                                return (e / 4 | 0) - (t / 4 | 0)
                            })), e = 0; e < 516; e++)
                            if (r[e] !== n[e]) return !0
                    }));
                _("sort", (function(e) {
                    return void 0 !== e && i(e), m ? h(this, e) : s(p(this), function(e) {
                        return function(t, r) {
                            return void 0 !== e ? +e(t, r) || 0 : r != r ? -1 : t != t ? 1 : 0 === t && 0 === r ? 1 / t > 0 && 1 / r < 0 ? 1 : -1 : t > r
                        }
                    }(e))
                }), !m || g)
            },
            6706: (e, t, r) => {
                "use strict";
                var n = r(6203),
                    o = r(7854),
                    a = o.aTypedArray,
                    i = o.exportTypedArrayMethod,
                    s = o.getTypedArrayConstructor;
                i("toReversed", (function() {
                    return n(a(this), s(this))
                }))
            },
            3002: (e, t, r) => {
                "use strict";
                var n = r(7854),
                    o = r(6619),
                    a = r(9573),
                    i = r(113),
                    s = n.aTypedArray,
                    l = n.getTypedArrayConstructor,
                    c = n.exportTypedArrayMethod,
                    u = o(n.TypedArrayPrototype.sort);
                c("toSorted", (function(e) {
                    void 0 !== e && a(e);
                    var t = s(this),
                        r = i(l(t), t);
                    return u(r, e)
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
                    o = r(7854),
                    a = r(2488),
                    i = r(8299),
                    s = r(710),
                    l = o.aTypedArray,
                    c = o.getTypedArrayConstructor,
                    u = o.exportTypedArrayMethod,
                    d = !! function() {
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
                u("with", {
                    with: function(e, t) {
                        var r = l(this),
                            o = i(e),
                            u = a(r) ? s(t) : +t;
                        return n(r, c(r), o, u)
                    }
                }.with, !d)
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
                    o = r(6732),
                    a = r(4014),
                    i = r(5931);
                n({
                    target: "Array",
                    proto: !0,
                    name: "groupToMap",
                    forced: r(5231) || !o("groupByToMap")
                }, {
                    groupByToMap: i
                }), a("groupByToMap")
            },
            8569: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(9639),
                    a = r(6732),
                    i = r(4014);
                n({
                    target: "Array",
                    proto: !0,
                    forced: !a("groupBy")
                }, {
                    groupBy: function(e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), i("groupBy")
            },
            146: (e, t, r) => {
                var n = r(5077),
                    o = r(4014),
                    a = r(5931);
                n({
                    target: "Array",
                    proto: !0,
                    forced: r(5231)
                }, {
                    groupToMap: a
                }), o("groupToMap")
            },
            3924: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(9639),
                    a = r(4014);
                n({
                    target: "Array",
                    proto: !0
                }, {
                    group: function(e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), a("group")
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
                    o = r(3949),
                    a = r(1720),
                    i = r(5835),
                    s = r(6250),
                    l = r(2342),
                    c = r(5231),
                    u = s("toStringTag"),
                    d = function() {
                        o(this, l)
                    };
                d.prototype = l, i(l, u) || a(l, u, "AsyncIterator"), !c && i(l, "constructor") && l.constructor !== Object || a(l, "constructor", d), n({
                    global: !0,
                    constructor: !0,
                    forced: c
                }, {
                    AsyncIterator: d
                })
            },
            3818: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(7981),
                    i = r(6302),
                    s = r(9024),
                    l = r(6382),
                    c = r(5817),
                    u = r(2549),
                    d = c((function(e) {
                        var t = this;
                        return new e((function(r, n) {
                            var i = function(e) {
                                    t.done = !0, n(e)
                                },
                                s = function() {
                                    try {
                                        e.resolve(a(o(t.next, t.iterator))).then((function(e) {
                                            try {
                                                a(e).done ? (t.done = !0, r(u(void 0, !0))) : t.remaining ? (t.remaining--, s()) : r(u(e.value, !1))
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
                        return new d(i(this), {
                            remaining: l(s(+e))
                        })
                    }
                })
            },
            1199: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(9937).every;
                n({
                    target: "AsyncIterator",
                    proto: !0,
                    real: !0
                }, {
                    every: function(e) {
                        return o(this, e)
                    }
                })
            },
            8973: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(9573),
                    i = r(7981),
                    s = r(3021),
                    l = r(6302),
                    c = r(5817),
                    u = r(2549),
                    d = r(86),
                    f = c((function(e) {
                        var t = this,
                            r = t.iterator,
                            n = t.predicate;
                        return new e((function(a, l) {
                            var c = function(e) {
                                    t.done = !0, l(e)
                                },
                                f = function(e) {
                                    d(r, c, e, c)
                                },
                                p = function() {
                                    try {
                                        e.resolve(i(o(t.next, r))).then((function(r) {
                                            try {
                                                if (i(r).done) t.done = !0, a(u(void 0, !0));
                                                else {
                                                    var o = r.value;
                                                    try {
                                                        var l = n(o, t.counter++),
                                                            d = function(e) {
                                                                e ? a(u(o, !1)) : p()
                                                            };
                                                        s(l) ? e.resolve(l).then(d, f) : d(l)
                                                    } catch (e) {
                                                        f(e)
                                                    }
                                                }
                                            } catch (e) {
                                                c(e)
                                            }
                                        }), c)
                                    } catch (e) {
                                        c(e)
                                    }
                                };
                            p()
                        }))
                    }));
                n({
                    target: "AsyncIterator",
                    proto: !0,
                    real: !0
                }, {
                    filter: function(e) {
                        return new f(l(this), {
                            predicate: a(e)
                        })
                    }
                })
            },
            8360: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(9937).find;
                n({
                    target: "AsyncIterator",
                    proto: !0,
                    real: !0
                }, {
                    find: function(e) {
                        return o(this, e)
                    }
                })
            },
            8294: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(9573),
                    i = r(7981),
                    s = r(3021),
                    l = r(6302),
                    c = r(5817),
                    u = r(2549),
                    d = r(5968),
                    f = r(86),
                    p = c((function(e) {
                        var t = this,
                            r = t.iterator,
                            n = t.mapper;
                        return new e((function(a, l) {
                            var c = function(e) {
                                    t.done = !0, l(e)
                                },
                                p = function(e) {
                                    f(r, c, e, c)
                                },
                                _ = function() {
                                    try {
                                        e.resolve(i(o(t.next, r))).then((function(r) {
                                            try {
                                                if (i(r).done) t.done = !0, a(u(void 0, !0));
                                                else {
                                                    var o = r.value;
                                                    try {
                                                        var l = n(o, t.counter++),
                                                            f = function(e) {
                                                                try {
                                                                    t.inner = d(e), v()
                                                                } catch (e) {
                                                                    p(e)
                                                                }
                                                            };
                                                        s(l) ? e.resolve(l).then(f, p) : f(l)
                                                    } catch (e) {
                                                        p(e)
                                                    }
                                                }
                                            } catch (e) {
                                                c(e)
                                            }
                                        }), c)
                                    } catch (e) {
                                        c(e)
                                    }
                                },
                                v = function() {
                                    var r = t.inner;
                                    if (r) try {
                                        e.resolve(i(o(r.next, r.iterator))).then((function(e) {
                                            try {
                                                i(e).done ? (t.inner = null, _()) : a(u(e.value, !1))
                                            } catch (e) {
                                                p(e)
                                            }
                                        }), p)
                                    } catch (e) {
                                        p(e)
                                    } else _()
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
                        return new p(l(this), {
                            mapper: a(e),
                            inner: null
                        })
                    }
                })
            },
            5358: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(9937).forEach;
                n({
                    target: "AsyncIterator",
                    proto: !0,
                    real: !0
                }, {
                    forEach: function(e) {
                        return o(this, e)
                    }
                })
            },
            4255: (e, t, r) => {
                var n = r(5077),
                    o = r(18),
                    a = r(631),
                    i = r(5968),
                    s = r(2342),
                    l = r(6784);
                n({
                    target: "AsyncIterator",
                    stat: !0
                }, {
                    from: function(e) {
                        var t = i("string" == typeof e ? o(e) : e);
                        return a(s, t.iterator) ? t.iterator : new l(t)
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
                    o = r(970),
                    a = r(9573),
                    i = r(7981),
                    s = r(3021),
                    l = r(2555),
                    c = r(6302),
                    u = r(86),
                    d = l("Promise"),
                    f = TypeError;
                n({
                    target: "AsyncIterator",
                    proto: !0,
                    real: !0
                }, {
                    reduce: function(e) {
                        var t = c(this),
                            r = t.iterator,
                            n = t.next,
                            l = arguments.length < 2,
                            p = l ? void 0 : arguments[1],
                            _ = 0;
                        return a(e), new d((function(t, a) {
                            var c = function(e) {
                                    u(r, a, e, a)
                                },
                                v = function() {
                                    try {
                                        d.resolve(i(o(n, r))).then((function(r) {
                                            try {
                                                if (i(r).done) l ? a(f("Reduce of empty iterator with no initial value")) : t(p);
                                                else {
                                                    var n = r.value;
                                                    if (l) l = !1, p = n, v();
                                                    else try {
                                                        var o = e(p, n, _),
                                                            u = function(e) {
                                                                p = e, v()
                                                            };
                                                        s(o) ? d.resolve(o).then(u, c) : u(o)
                                                    } catch (e) {
                                                        c(e)
                                                    }
                                                }
                                                _++
                                            } catch (e) {
                                                a(e)
                                            }
                                        }), a)
                                    } catch (e) {
                                        a(e)
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
                    o = r(9937).some;
                n({
                    target: "AsyncIterator",
                    proto: !0,
                    real: !0
                }, {
                    some: function(e) {
                        return o(this, e)
                    }
                })
            },
            6570: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(7981),
                    i = r(6302),
                    s = r(9024),
                    l = r(6382),
                    c = r(5817),
                    u = r(2549),
                    d = c((function(e) {
                        var t, r = this,
                            n = r.iterator;
                        if (!r.remaining--) {
                            var i = u(void 0, !0);
                            return r.done = !0, void 0 !== (t = n.return) ? e.resolve(o(t, n, void 0)).then((function() {
                                return i
                            })) : i
                        }
                        return e.resolve(o(r.next, n)).then((function(e) {
                            return a(e).done ? (r.done = !0, u(void 0, !0)) : u(e.value, !1)
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
                        return new d(i(this), {
                            remaining: l(s(+e))
                        })
                    }
                })
            },
            281: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(9937).toArray;
                n({
                    target: "AsyncIterator",
                    proto: !0,
                    real: !0
                }, {
                    toArray: function() {
                        return o(this, void 0, [])
                    }
                })
            },
            289: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(8521),
                    a = r(2555),
                    i = r(9573),
                    s = r(3949),
                    l = r(9146),
                    c = r(2669),
                    u = r(4173),
                    d = r(6250),
                    f = r(7832),
                    p = r(6539),
                    _ = a("SuppressedError"),
                    v = ReferenceError,
                    h = d("dispose"),
                    g = d("toStringTag"),
                    m = "DisposableStack",
                    y = f.set,
                    w = f.getterFor(m),
                    b = "sync-dispose",
                    x = "disposed",
                    E = m + " already disposed",
                    C = function() {
                        y(s(this, S), {
                            type: m,
                            state: "pending",
                            stack: []
                        }), o || (this.disposed = !1)
                    },
                    S = C.prototype;
                c(S, {
                    dispose: function() {
                        var e = w(this);
                        if (e.state != x) {
                            e.state = x, o || (this.disposed = !0);
                            for (var t, r = e.stack, n = r.length, a = !1; n;) {
                                var i = r[--n];
                                r[n] = null;
                                try {
                                    i()
                                } catch (e) {
                                    a ? t = new _(e, t) : (a = !0, t = e)
                                }
                            }
                            if (e.stack = null, a) throw t
                        }
                    },
                    use: function(e) {
                        var t = w(this);
                        if (t.state == x) throw v(E);
                        return p(t, e, b), e
                    },
                    adopt: function(e, t) {
                        var r = w(this);
                        if (r.state == x) throw v(E);
                        return i(t), p(r, void 0, b, (function() {
                            t(e)
                        })), e
                    },
                    defer: function(e) {
                        var t = w(this);
                        if (t.state == x) throw v(E);
                        i(e), p(t, void 0, b, e)
                    },
                    move: function() {
                        var e = w(this);
                        if (e.state == x) throw v(E);
                        var t = new C;
                        return w(t).stack = e.stack, e.stack = [], t
                    }
                }), o && u(S, "disposed", {
                    configurable: !0,
                    get: function() {
                        return w(this).state == x
                    }
                }), l(S, h, S.dispose, {
                    name: "dispose"
                }), l(S, g, m, {
                    nonWritable: !0
                }), n({
                    global: !0,
                    constructor: !0
                }, {
                    DisposableStack: C
                })
            },
            1313: (e, t, r) => {
                r(3194)
            },
            6032: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(2689),
                    a = r(3949),
                    i = r(9548),
                    s = r(1720),
                    l = r(9835),
                    c = r(5835),
                    u = r(6250),
                    d = r(7357).IteratorPrototype,
                    f = r(5231),
                    p = u("toStringTag"),
                    _ = o.Iterator,
                    v = f || !i(_) || _.prototype !== d || !l((function() {
                        _({})
                    })),
                    h = function() {
                        a(this, d)
                    };
                c(d, p) || s(d, p, "Iterator"), !v && c(d, "constructor") && d.constructor !== Object || s(d, "constructor", h), h.prototype = d, n({
                    global: !0,
                    constructor: !0,
                    forced: v
                }, {
                    Iterator: h
                })
            },
            1865: (e, t, r) => {
                "use strict";
                var n = r(970),
                    o = r(9146),
                    a = r(2317),
                    i = r(5835),
                    s = r(6250),
                    l = r(7357).IteratorPrototype,
                    c = s("dispose");
                i(l, c) || o(l, c, (function() {
                    var e = a(this, "return");
                    e && n(e, this)
                }))
            },
            3182: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(970),
                    a = r(7981),
                    i = r(6302),
                    s = r(9024),
                    l = r(6382),
                    c = r(3389)((function() {
                        for (var e, t = this.iterator, r = this.next; this.remaining;)
                            if (this.remaining--, e = a(o(r, t)), this.done = !!e.done) return;
                        if (e = a(o(r, t)), !(this.done = !!e.done)) return e.value
                    }));
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    drop: function(e) {
                        return new c(i(this), {
                            remaining: l(s(+e))
                        })
                    }
                })
            },
            6936: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(4760),
                    a = r(9573),
                    i = r(6302);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    every: function(e) {
                        var t = i(this),
                            r = 0;
                        return a(e), !o(t, (function(t, n) {
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
                    o = r(970),
                    a = r(9573),
                    i = r(7981),
                    s = r(6302),
                    l = r(3389),
                    c = r(579),
                    u = l((function() {
                        for (var e, t, r = this.iterator, n = this.predicate, a = this.next;;) {
                            if (e = i(o(a, r)), this.done = !!e.done) return;
                            if (t = e.value, c(r, n, [t, this.counter++], !0)) return t
                        }
                    }));
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    filter: function(e) {
                        return new u(s(this), {
                            predicate: a(e)
                        })
                    }
                })
            },
            2491: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(4760),
                    a = r(9573),
                    i = r(6302);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    find: function(e) {
                        var t = i(this),
                            r = 0;
                        return a(e), o(t, (function(t, n) {
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
                    o = r(970),
                    a = r(9573),
                    i = r(7981),
                    s = r(6302),
                    l = r(894),
                    c = r(3389),
                    u = r(7087),
                    d = c((function() {
                        for (var e, t, r = this.iterator, n = this.mapper;;) {
                            if (t = this.inner) try {
                                if (!(e = i(o(t.next, t.iterator))).done) return e.value;
                                this.inner = null
                            } catch (e) {
                                u(r, "throw", e)
                            }
                            if (e = i(o(this.next, r)), this.done = !!e.done) return;
                            try {
                                this.inner = l(n(e.value, this.counter++))
                            } catch (e) {
                                u(r, "throw", e)
                            }
                        }
                    }));
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    flatMap: function(e) {
                        return new d(s(this), {
                            mapper: a(e),
                            inner: null
                        })
                    }
                })
            },
            7153: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(4760),
                    a = r(9573),
                    i = r(6302);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    forEach: function(e) {
                        var t = i(this),
                            r = 0;
                        a(e), o(t, (function(t) {
                            e(t, r++)
                        }), {
                            IS_RECORD: !0
                        })
                    }
                })
            },
            7279: (e, t, r) => {
                var n = r(5077),
                    o = r(970),
                    a = r(18),
                    i = r(631),
                    s = r(7357).IteratorPrototype,
                    l = r(3389),
                    c = r(894),
                    u = l((function() {
                        return o(this.next, this.iterator)
                    }), !0);
                n({
                    target: "Iterator",
                    stat: !0
                }, {
                    from: function(e) {
                        var t = c("string" == typeof e ? a(e) : e);
                        return i(s, t.iterator) ? t.iterator : new u(t)
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
                    o = r(4760),
                    a = r(9573),
                    i = r(6302),
                    s = TypeError;
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    reduce: function(e) {
                        var t = i(this);
                        a(e);
                        var r = arguments.length < 2,
                            n = r ? void 0 : arguments[1],
                            l = 0;
                        if (o(t, (function(t) {
                                r ? (r = !1, n = t) : n = e(n, t, l), l++
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
                    o = r(4760),
                    a = r(9573),
                    i = r(6302);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    some: function(e) {
                        var t = i(this),
                            r = 0;
                        return a(e), o(t, (function(t, n) {
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
                    o = r(970),
                    a = r(7981),
                    i = r(6302),
                    s = r(9024),
                    l = r(6382),
                    c = r(3389),
                    u = r(7087),
                    d = c((function() {
                        var e = this.iterator;
                        if (!this.remaining--) return this.done = !0, u(e, "normal", void 0);
                        var t = a(o(this.next, e));
                        return (this.done = !!t.done) ? void 0 : t.value
                    }));
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    take: function(e) {
                        return new d(i(this), {
                            remaining: l(s(+e))
                        })
                    }
                })
            },
            1716: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(4760),
                    a = r(6302),
                    i = [].push;
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    toArray: function() {
                        var e = [];
                        return o(a(this), i, {
                            that: e,
                            IS_RECORD: !0
                        }), e
                    }
                })
            },
            673: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(2429),
                    a = r(6784),
                    i = r(6302);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    toAsync: function() {
                        return new a(i(new o(i(this))))
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
                    o = r(3472);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(4001)("difference")
                }, {
                    difference: o
                })
            },
            5827: (e, t, r) => {
                var n = r(5077),
                    o = r(4228);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(4001)("intersection")
                }, {
                    intersection: o
                })
            },
            1361: (e, t, r) => {
                var n = r(5077),
                    o = r(9728);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(4001)("isDisjointFrom")
                }, {
                    isDisjointFrom: o
                })
            },
            5996: (e, t, r) => {
                var n = r(5077),
                    o = r(7214);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(4001)("isSubsetOf")
                }, {
                    isSubsetOf: o
                })
            },
            6366: (e, t, r) => {
                var n = r(5077),
                    o = r(6781);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(4001)("isSupersetOf")
                }, {
                    isSupersetOf: o
                })
            },
            7151: (e, t, r) => {
                var n = r(5077),
                    o = r(7418);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(4001)("symmetricDifference")
                }, {
                    symmetricDifference: o
                })
            },
            1903: (e, t, r) => {
                var n = r(5077),
                    o = r(3268);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(4001)("union")
                }, {
                    union: o
                })
            },
            977: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(6619),
                    a = r(8602),
                    i = r(9013),
                    s = o("".charCodeAt);
                n({
                    target: "String",
                    proto: !0
                }, {
                    isWellFormed: function() {
                        for (var e = i(a(this)), t = e.length, r = 0; r < t; r++) {
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
                    o = r(970),
                    a = r(6619),
                    i = r(8602),
                    s = r(9013),
                    l = r(9835),
                    c = Array,
                    u = a("".charAt),
                    d = a("".charCodeAt),
                    f = a([].join),
                    p = "".toWellFormed,
                    _ = p && l((function() {
                        return "1" !== o(p, 1)
                    }));
                n({
                    target: "String",
                    proto: !0,
                    forced: _
                }, {
                    toWellFormed: function() {
                        var e = s(i(this));
                        if (_) return o(p, e);
                        for (var t = e.length, r = c(t), n = 0; n < t; n++) {
                            var a = d(e, n);
                            55296 != (63488 & a) ? r[n] = u(e, n) : a >= 56320 || n + 1 >= t || 56320 != (64512 & d(e, n + 1)) ? r[n] = "�" : (r[n] = u(e, n), r[++n] = u(e, n))
                        }
                        return f(r, "")
                    }
                })
            },
            6753: (e, t, r) => {
                "use strict";
                var n = r(5077),
                    o = r(631),
                    a = r(5616),
                    i = r(1672),
                    s = r(4361),
                    l = r(3583),
                    c = r(1720),
                    u = r(3179),
                    d = r(9431),
                    f = r(8364),
                    p = r(6250)("toStringTag"),
                    _ = Error,
                    v = function(e, t, r) {
                        var n, s = o(h, this);
                        return i ? n = i(_(), s ? a(this) : h) : (n = s ? this : l(h), c(n, p, "Error")), void 0 !== r && c(n, "message", f(r)), d(n, v, n.stack, 1), c(n, "error", e), c(n, "suppressed", t), n
                    };
                i ? i(v, _) : s(v, _, {
                    name: !0
                });
                var h = v.prototype = l(_.prototype, {
                    constructor: u(1, v),
                    message: u(1, ""),
                    name: u(1, "SuppressedError")
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
                    o = r(56),
                    a = r(2488),
                    i = r(3610),
                    s = r(710),
                    l = r(8299),
                    c = r(9835),
                    u = n.aTypedArray,
                    d = n.getTypedArrayConstructor,
                    f = n.exportTypedArrayMethod,
                    p = Math.max,
                    _ = Math.min;
                f("toSpliced", (function(e, t) {
                    var r, n, c, f, v, h, g, m = u(this),
                        y = d(m),
                        w = o(m),
                        b = i(e, w),
                        x = arguments.length,
                        E = 0;
                    if (0 === x) r = n = 0;
                    else if (1 === x) r = 0, n = w - b;
                    else if (n = _(p(l(t), 0), w - b), r = x - 2) {
                        f = new y(r), c = a(f);
                        for (var C = 2; C < x; C++) v = arguments[C], f[C - 2] = c ? s(v) : +v
                    }
                    for (g = new y(h = w + r - n); E < b; E++) g[E] = m[E];
                    for (; E < b + r; E++) g[E] = f[E - b];
                    for (; E < h; E++) g[E] = m[E + n - r];
                    return g
                }), !!c((function() {
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
                    BabelRuntimeHelpers[e.substr(2)] = n(e)
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
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, r), a.exports
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
            return this || new Function("return this")()
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
var __wxConfig, Foundation, __wxTest__ = !1,
    wxRunOnDebug = function(e) {
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
            return this || new Function("return this")()
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
    var t = {};
    (() => {
        e.d(t, {
            default: () => Ke
        });
        var r = {};
        e.r(r), e.d(r, {
            convertToErrorObj: () => V,
            emitFrameworkError: () => K,
            emitUnhandledError: () => X,
            emitUnhandledRejection: () => Z,
            onFrameworkError: () => Q,
            onUnhandledError: () => ee,
            onUnhandledRejection: () => Y
        });
        var n = e.g.__wxLibrary,
            o = e.g.__wxConfig,
            a = n.envType,
            i = n.contextType,
            s = "Service" === a,
            l = "WebView" === a,
            c = "Worker" === a,
            u = l || s && 0 === i.indexOf("App:"),
            d = s && 0 === i.indexOf("Game:"),
            f = 0 === i.indexOf("MagicBrush:"),
            p = !!o.isIsolateContext,
            _ = p && s && i.indexOf("MainContext") >= 0,
            v = p && s && i.indexOf("SubContext") >= 0,
            h = v && i.indexOf("Safe") >= 0,
            g = _ || v,
            m = "wxlib" === o.workerContentType,
            y = l || _ || h || m,
            w = function(e) {
                var t = o.platform;
                if (!t && "object" == typeof window && "string" == typeof(null === (e = window.navigator) || void 0 === e ? void 0 : e.userAgent)) {
                    var r = window.navigator.userAgent.toLowerCase();
                    r.indexOf("devtools") >= 0 ? t = "devtools" : r.indexOf("miniprogramenv/windows") >= 0 ? t = "windows" : r.indexOf("miniprogramenv/mac") >= 0 ? t = "mac" : r.indexOf("miniprogramenv/mina") >= 0 ? t = "mina" : r.indexOf("iphone") >= 0 || r.indexOf("ipad") >= 0 ? t = "ios" : r.indexOf("android") >= 0 && (t = "android")
                }
                return (t || "unknown").toLowerCase()
            }(),
            b = __libVersionInfo__,
            x = void 0 === b || "develop" === b.version ? "9.9.9" : b.version,
            E = !!n.mayHaveSnapshot,
            C = (() => "object" == typeof e.g && e.g && e.g.__wkrenderer_h5)();
        const S = {
            platform: w,
            SDKVersion: x,
            isIsolateContext: g,
            isGame: d,
            isApp: u,
            isMainContext: _,
            isSubContext: v,
            isSafeEnv: y,
            isService: s,
            isWebView: l,
            isWorker: c,
            isWidget: !1,
            typeStr: v ? "SubContext" : a,
            fileName: n.fileName,
            isWXLibWorker: m,
            workerType: "user",
            contextName: "",
            mayHaveSnapShot: E,
            isWKGame: !!C,
            isMagicBrushFrameEnv: f
        };
        var A = () => {},
            O = "devtools" === S.platform;
        "undefined" != typeof performance && performance.now;

        function T(e, t = (() => A)) {
            return e.reduce(((e, r) => (e[r] = t(r), e)), {})
        }

        function I() {
            var t = __wxConfig || e.g.__wxConfig;
            if (t && "debug" in t && void 0 !== t.debug) return !!t.debug
        }
        var R = () => {},
            N = ["log", "info", "warn", "error", "debug"];
        const P = T(N);
        var k = ["log", "info", "warn", "error", "profile", "profileSync", "traceBegin", "traceEnd"],
            M = (() => {
                var e = T(k);
                return e
            })();
        const D = M;
        var F = Symbol("error"),
            j = Symbol("slow");
        class L {
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
                return this.onInternalEvent(F, e), this
            }
            onSlow(e) {
                return this.onInternalEvent(j, e), this
            }
            _privEmit(e, t, ...r) {
                var n = this.$[e];
                if (n && n.length > 0) {
                    var o, a = !1;
                    for (var i of n) {
                        if (0 !== i.count) try {
                            var s = Date.now();
                            o = i.cb(...r);
                            var l = Date.now();
                            l - s > L.SLOW_CALLBACK_THRESHOLD && this.emitPrivate(j, e, s, l, i.cb)
                        } catch (t) {
                            if (!this.emitPrivate(F, e, t)) throw t
                        }
                        if (i.count > 0 && i.count--, 0 === i.count && (a = !0), !1 === o && t.cancelable) break
                    }
                    return a && (this.$[e] = n.filter((e => 0 !== e.count))), !0
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
                var o = {
                        count: r,
                        cb: t
                    },
                    a = this.$[e];
                return a ? n.prepend ? a.unshift(o) : a.push(o) : this.$[e] = [o], this
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
        L.SLOW_CALLBACK_THRESHOLD = 50;
        var B = new L,
            $ = "unhandlederror",
            W = "unhandledrejection",
            U = "frameworkerror",
            G = new WeakMap;
        var H = Object.prototype.hasOwnProperty;

        function V(e) {
            var t;
            if (e && "Object" === (null === (t = e.constructor) || void 0 === t ? void 0 : t.name) && "string" == typeof e.message && "string" == typeof e.stack) {
                var r = new Error(e.message);
                return Object.assign(r, e), r
            }
            return e
        }

        function Z(e, t) {
            e = V(e), Pe.onLoad((() => {
                B.emit(W, {
                    reason: e,
                    promise: t
                }) || console.error("Uncaught (in promise)", e)
            }))
        }
        var z, q = !1,
            J = !1;

        function K(e, t) {
            if (e instanceof Error && t && (e.message = `${t} fail: ${e.message}`), e = V(e), __wxConfig.isSnapshoting) throw e;
            Pe.onLoad((() => {
                if (q) console.error("[ErrorHandler] recursive framework error detected.", e);
                else {
                    q = !0;
                    try {
                        B.emit(U, e) || X(e)
                    } catch (e) {
                        console.error("Framework", e)
                    }
                    q = !1
                }
            }))
        }

        function X(e) {
            if (e = V(e), __wxConfig.isSnapshoting) throw e;
            Pe.onLoad((() => {
                if (J) console.error("[ErrorHandler] recursive uncaught error detected.", e);
                else {
                    J = !0;
                    try {
                        B.emit($, e) || ("windows" !== __wxConfig.platform && "mac" !== __wxConfig.platform || "undefined" == typeof WORKER_RUNTIME || !WORKER_RUNTIME || 4 !== __wxConfig.appType) && console.error("Uncaught", e)
                    } catch (e) {
                        console.error("Uncaught", e)
                    }
                    J = !1
                }
            }))
        }

        function Y(e) {
            B.on(W, e)
        }

        function Q(e) {
            B.on(U, e)
        }

        function ee(e) {
            B.on($, e)
        }
        "object" == typeof(z = e.g) && "function" == typeof z.addEventListener ? (z.addEventListener("unhandledrejection", (e => {
            Z(e.reason, e.promise), e.reason && e.preventDefault()
        })), z.addEventListener("error", (e => {
            var t, r;
            X(e.error || {
                message: e.message,
                stack: `${e.message}\nEmpty stack, maybe muted error. (xweb=${(null===(t=z.navigator)||void 0===t||null===(r=t.userAgent)||void 0===r?void 0:r.toUpperCase().indexOf("XWEB"))>=0})`
            }), e.error && e.preventDefault()
        }))) : void 0 === z.onunhandledrejection && Object.defineProperty(z, "onunhandledrejection", {
            value(e = {}) {
                var t, r;
                H.call(e, "type") ? (t = {
                    type: e.type,
                    reason: e.reason,
                    promise: e.promise
                }, (r = t.promise) && (G.has(r) || setTimeout((() => {
                    var e = G.get(r);
                    0 === (null == e ? void 0 : e.type) && Z(e.reason, e.promise), G.delete(r)
                }), 0), G.set(r, t))) : Z(e.reason, e.promise)
            }
        });
        var te, re = JSON.parse,
            ne = JSON.stringify,
            oe = 9782784e5;

        function ae(e) {
            return re(ne(e))
        }

        function ie(e) {
            e.platform = S.platform, e.brand || "ios" !== e.platform || (e.brand = "iPhone"), e.sdkVersion = e.SDKVersion = S.SDKVersion, e.isReady = !1, e.onReady = Pe.onStart
        }

        function se(e) {
            var t;
            ie(e), S.isSubContext || (e.preload = !0 === e.preload), "number" == typeof e.pixelRatio ? e.devicePixelRatio = e.pixelRatio : "number" == typeof e.devicePixelRatio && (e.pixelRatio = e.devicePixelRatio);
            var r = null === (t = __libVersionInfo__.debugOptions) || void 0 === t ? void 0 : t.overwriteExpt;
            e.expt = r ? Object.assign(e.expt || {}, r) : e.expt || {}
        }

        function le(e) {
            if (se(e), e.isReady = !0, e.appLaunchInfo = e.appLaunchInfo || {}, e.preloadType = e.preloadType || e.appLaunchInfo.preloadType || e.preload, "ios" === e.platform) {
                var t = function(e) {
                        if (!e) return 0;
                        var t = (new Date).getTimezoneOffset() / 60;
                        return e + oe - 3600 * t * 1e3
                    }(e.appLaunchInfo.clickTimestampInMs),
                    r = Number.MAX_SAFE_INTEGER,
                    n = e.instanceId;
                if (n) try {
                    var o = n.split("&").filter((e => 0 === e.indexOf("ts=")));
                    o.length > 0 && (r = parseInt(o[0].slice(3), 10))
                } catch (e) {
                    K(e, "parseInstanceId")
                }
                e.coldLaunchTime = Math.min(t, r)
            } else e.coldLaunchTime = e.appLaunchInfo.clickTimestamp || 0
        }
        var ce = !(null === (te = __libVersionInfo__.features) || void 0 === te || !te.pruneWxConfigByPage),
            ue = Object.defineProperty,
            de = ["env", "appLaunchInfo", "ext", "wxAppInfo", "debug", "entryPagePath", "envVersion", "tabBar", "pages", "page", "accountInfo", "global", "platform", "system", "appType", "networkTimeout", "navigateToMiniProgramAppIdList", "plugins", "extAppid", "host", "prerender"];

        function fe(e, t, r, n) {
            ue(e, r, {
                configurable: !0,
                enumerable: !0,
                get() {
                    if (r in t) return t[r];
                    try {
                        return "function" != typeof n ? n : n()
                    } catch (e) {
                        return void K(e, `read mock wxConfig.${r}`)
                    }
                },
                set(e) {
                    t[r] = e
                }
            })
        }
        var pe = S.isSafeEnv,
            _e = Object.create(null),
            ve = S.isService ? function(e) {
                return new Proxy(e, {
                    set(e, t, r, n) {
                        if ("__siblings__" === t) return Reflect.set(e, t, r, n);
                        var o = Reflect.get(e, "__siblings__", n);
                        return Array.isArray(o) ? (o.length > 1 && P.log(`[WXConfig] write __wxConfig.${t.toString()}, sync to all contexts.`), o.forEach((e => {
                            Reflect.set(e, t, r)
                        })), !0) : Reflect.set(e, t, r, n)
                    }
                })
            }(_e) : _e,
            he = e => {},
            ge = "wxConfig:updatePage";

        function me(t, r = !1) {
            return he(!1), _e.currentPhase = "onStart", void 0 === t || (r ? (Object.assign(_e, t), Object.defineProperty(_e, "__siblings__", {
                value: t.__siblings__,
                enumerable: !1,
                writable: !1,
                configurable: !1
            })) : (Object.assign(_e, pe ? t : ae(t)), le(_e), function(t, r) {
                var n;
                Array.isArray(null == t || null === (n = t.tabBar) || void 0 === n ? void 0 : n.list) && t.tabBar.list.forEach((e => {
                    delete e.iconData, delete e.selectedIconData
                })), delete t.permission;
                var o = t.subPackages || t.subpackages;
                Array.isArray(o) && o.length > 0 && (o.forEach((e => {
                    delete e.pages
                })), t.subPackages = t.subpackages = o), "devtools" === t.platform && (t.__globalComponentsCount = Object.keys(t.usingComponents || {}).length), ce && (S.isSubContext || (delete t.usingComponents, Object.values(t.page || {}).forEach((e => {
                    null != e && e.window && delete e.window.usingComponents
                })), t._preloadRule = t.preloadRule || {}, t._page = t.page || {}, delete t.preloadRule, delete t.page), t.updatePage = function(e, t) {
                    null != t && t.window && delete t.window.usingComponents, r(e, t)
                }, t.updatePreloadRule = function(e, r) {
                    t.preloadRule = t.preloadRule || {}, t.preloadRule[e] = r
                }), e.g.__wxConfig.page = e.g.__wxConfig.page || {}, t.page = t.page || {}
            }(_e, ((e, t) => {
                Pe.emit(ge, {
                    key: e,
                    value: t
                })
            })), Object.defineProperty(_e, "__siblings__", {
                value: [],
                enumerable: !1,
                writable: !1,
                configurable: !1
            })), Array.isArray(_e.__siblings__) && _e.__siblings__.push(_e), _e.onPageUpdate((({
                key: e,
                value: t
            }) => {
                _e.page = _e.page || {}, _e.page[e] = _e.page[e + ".html"] = t, n && (n[e + ".html"] = ae(t))
            })), pe || (n = function() {
                var t = e.g.__wxConfig,
                    r = {},
                    n = {},
                    o = ce ? {} : t.page || {};
                try {
                    fe(n, r, "deprecated", !0), de.forEach((e => {
                        if (e in t) {
                            var a = t[e];
                            switch (e) {
                                case "page":
                                    fe(n, r, e, o);
                                    break;
                                case "env":
                                    fe(n, r, e, (() => (console.warn("[Deprecation] __wxConfig.env is deprecated, please use wx.env instead."), {
                                        USER_DATA_PATH: a.USER_DATA_PATH
                                    })));
                                    break;
                                case "accountInfo":
                                    fe(n, r, e, {
                                        appId: a.appId,
                                        icon: a.icon,
                                        nickname: a.nickname
                                    });
                                    break;
                                case "appLaunchInfo":
                                    fe(n, r, e, (() => (console.warn("[Deprecation] __wxConfig.appLaunchInfo is deprecated, please use wx.getLaunchOptionsSync() instead."), wx && "function" == typeof wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : {})));
                                    break;
                                case "wxAppInfo":
                                    fe(n, r, e, {
                                        maxRequestConcurrent: a.maxRequestConcurrent,
                                        maxUploadConcurrent: a.maxUploadConcurrent,
                                        maxDownloadConcurrent: a.maxDownloadConcurrent,
                                        maxWorkerConcurrent: a.maxWorkerConcurrent,
                                        maxWebsocketConnect: a.maxWebsocketConnect
                                    });
                                    break;
                                default:
                                    fe(n, r, e, a)
                            }
                        }
                    })), e.g.__wxConfig = n
                } catch (r) {
                    K(r, "mockGloablWxConfig"), e.g.__wxConfig = t
                }
                return o
            }())), ve;
            var n
        }
        var ye = new L,
            we = new L,
            be = {},
            xe = "WeixinJSBridgeReady",
            Ee = "libraryEnd",
            Ce = "load",
            Se = "postLoad",
            Ae = "start",
            Oe = "postStart";

        function Te(e, t) {
            var r = void 0 !== Trace,
                n = () => {
                    try {
                        r && Trace.traceBegin("Framework", `LibLifeCycle.${e} @ ${S.fileName}`), t(be[e])
                    } catch (t) {
                        K(t, "LifeCycle." + e)
                    } finally {
                        r && Trace.traceEnd()
                    }
                };
            e in be ? n() : we.once(e, n)
        }

        function Ie(e, t) {
            var r, n;
            if (e in be) return !1;
            be[e] = t, null === (r = wxNativeConsole) || void 0 === r || r.info(`[LifeCycle] emit ${e} for ${S.fileName}`);
            var o = we.emit(e, t);
            return null === (n = wxNativeConsole) || void 0 === n || n.info(`[LifeCycle] finish ${e} for ${S.fileName}`), o
        }
        var Re, Ne = e => {
                S.mayHaveSnapShot ? Te(Ce, e) : e()
            },
            Pe = {
                EventEmitter: L,
                on: ye.on.bind(ye),
                emit: ye.emit.bind(ye),
                once: ye.once.bind(ye),
                off: ye.off.bind(ye),
                getIsLoaded: () => Ce in be,
                getIsStarted: () => Ae in be,
                onBridgeReady(e) {
                    Te(xe, e)
                },
                setWeixinJSBridge(e) {
                    Ie(xe, e)
                },
                onLibraryEnd: Te.bind(null, Ee),
                onCreate(e) {
                    e()
                },
                onLoadInstant: Ne,
                onLoad: Ne,
                _onPostLoad: Te.bind(null, Se),
                onStart: Te.bind(null, Ae),
                onPostStart: Te.bind(null, Oe)
            };
        we.onError(((e, t) => {
            P.error(`[LifeCycle/${S.typeStr}] ${e.toString()} failed: `, t), K(t, "LifeCycle." + e.toString())
        })).onSlow(((e, t, r, n) => {
            D.warn(`[LifeCycle/${S.typeStr}] slow ${e.toString()} callback (${r-t}ms)\n${n+""}`)
        })), e.g.__wxLibrary.onEnd = function() {
            Ie(Ee), S.mayHaveSnapShot || De()
        }, Re = e.g.__wxConfig, _e.currentPhase = "onCreate", void 0 === Re || (he(!1), Object.assign(_e, pe ? Re : ae(Re)), ie(_e), he(!0));
        var ke = !1,
            Me = !1;

        function De() {
            ke || Me ? K(new Error(`LifeCycle error: undesired onLoad(${ke}/${Me})`)) : (ke = !0, __wxConfig = function(e) {
                return _e.currentPhase = "onLoad", void 0 === e || (he(!1), Object.assign(_e, pe ? e : ae(e)), _e.onPageUpdate = Pe.on.bind(null, ge), se(_e), he(!0)), ve
            }(e.g.__wxConfig), Ie(Ce, __wxConfig), S.isSubContext ? __wxConfig.__readyHandler = e => {
                Fe(e, !0)
            } : !0 === __wxConfig.preload ? Pe.onBridgeReady((t => {
                t.on("onWxConfigReady", (() => {
                    Fe(e.g.__wxConfig)
                }))
            })) : Pe.onLibraryEnd((() => {
                Fe(e.g.__wxConfig)
            })), Ie(Se, __wxConfig))
        }

        function Fe(e, t = !1) {
            if (ke && !Me) {
                Me = !0;
                var r = Date.now();
                "onReadyStart" in (__wxConfig = me(e, t)) || (__wxConfig.onReadyStart = r), Ie(Ae, __wxConfig), __wxConfig.onReadyEnd = Date.now(), Ie(Oe, __wxConfig)
            } else K(new Error(`LifeCycle error: undesired onStart(${ke}/${Me})`))
        }(__wxConfig = ve).isSnapshoting ? (S.mayHaveSnapShot, e.g.WeixinSnapshot = {
            snapshotContextReady() {
                delete e.g.WeixinSnapshot, __wxConfig.isSnapshoting = !1, De()
            }
        }) : S.mayHaveSnapShot && Pe.onLibraryEnd(De);
        class je {
            constructor(e, t, r) {
                this.num = e, this.type = t, this.bindingFn = void 0, this.bindingFn = "function" == typeof r ? r : R
            }
        }
        var Le = {
                ALL: new je(Number.MIN_VALUE, "ALL"),
                DEBUG: new je(5e3, "DEBUG", console.debug),
                LOG: new je(1e4, "LOG", console.log),
                INFO: new je(2e4, "INFO", console.info),
                WARN: new je(3e4, "WARN", console.warn),
                ERROR: new je(4e4, "ERROR", console.error),
                OFF: new je(Number.MAX_VALUE, "OFF")
            },
            Be = (e, t) => ({
                debug: e(Le.DEBUG, t),
                log: e(Le.LOG, t),
                info: e(Le.INFO, t),
                warn: e(Le.WARN, t),
                error: e(Le.ERROR, t)
            }),
            $e = Le.INFO,
            We = (() => {
                if (S.isWorker || S.isWidget || S.isMagicBrushFrameEnv) {
                    return Object.assign({
                        createLogger: function() {
                            return P
                        }
                    }, P)
                }
                return S.isSubContext && S.isIsolateContext ? (e = [], t = (t, r) => (...n) => {
                    e.push({
                        level: t,
                        logs: n,
                        category: r
                    })
                }, r = () => {
                    setTimeout((() => {
                        var t = wxNativeConsole.__isFromMainContext ? wxNativeConsole.__mergeSubContextLogs : null;
                        t ? (t(e), e = []) : r()
                    }), 1e3)
                }, Pe.onStart(r), {
                    ...Be(t),
                    createLogger: e => Be(t, "string" == typeof e ? e : "default"),
                    __isFromMainContext: !1
                }) : (() => {
                    var e = S.platform,
                        t = "android" !== e,
                        r = [],
                        n = function(t) {
                            "android" !== e ? WeixinJSBridge.invoke("systemLog", {
                                dataArray: t.map((t => {
                                    return {
                                        message: `\n${r=t.date,n=("0"+(r.getMonth()+1)).slice(-2),o=("0"+r.getDate()).slice(-2),a=("0"+r.getHours()).slice(-2),i=("0"+r.getMinutes()).slice(-2),s=("0"+r.getSeconds()).slice(-2),l=("00"+r.getMilliseconds()).slice(-3),c=r.getFullYear()+"-"+n+"-"+o,u=a+":"+i+":"+s+"."+l,"ios"===e?c+" "+u+"000"+(r.getTimezoneOffset()/6e3*-1).toFixed(4).replace(/^0\./,"+").replace(/-0\./,"-"):c+" "+(r.getTimezoneOffset()/60*-1).toFixed(1).replace(/^(\d)/,"+$1")+" "+u} [${t.level.type[0].toUpperCase()}][wxapplib]] ${t.content}`
                                    };
                                    var r, n, o, a, i, s, l, c, u
                                }))
                            }) : t.forEach((e => {
                                e.level.bindingFn("[wxapplib]] " + e.content)
                            }))
                        },
                        o = e => {
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
                        a = function(e, a) {
                            return function(...i) {
                                var s;
                                if (a && Array.prototype.unshift.call(i, "[" + a + "]"), (I() || e.num >= Le.WARN.num) && (null === (s = P[e.type.toLowerCase()]) || void 0 === s || s.call(P, ...i)), e.num >= $e.num) {
                                    var l = Array.prototype.slice.call(i).map(o).join(" ");
                                    if (t) {
                                        var c = new Date;
                                        r && r.length > 1024 && r.shift(), r.push({
                                            date: c,
                                            level: e,
                                            content: l
                                        })
                                    } else n([{
                                        level: e,
                                        content: l
                                    }])
                                }
                            }
                        };
                    return Pe.onStart((() => {
                        setTimeout((function e() {
                            setTimeout(e, 4e3), 0 !== r.length && (n(r), r = [])
                        }), 4e3)
                    })), {
                        ...Be(a),
                        createLogger: function(e) {
                            return Be(a, "string" == typeof e ? e : "default")
                        },
                        __mergeSubContextLogs: e => {
                            Array.isArray(e) && e.forEach((e => {
                                var {
                                    level: t,
                                    logs: r,
                                    category: n
                                } = e;
                                a(t, n)(...r)
                            }))
                        },
                        __isFromMainContext: !0
                    }
                })();
                var e, t, r
            })();
        Pe.onLoad((() => {
            We.info(`[BaseLibVersion] ${S.fileName}: ${__libVersionInfo__.version} (${__libVersionInfo__.updateTime})}`)
        }));
        const Ue = We;
        const Ge = T(["log", "info", "warn", "error"], (e => function(...t) {
            (O || I()) && console[e]("[system]", ...t)
        }));
        var He;

        function Ve() {
            return He || ("undefined" != typeof NativeGlobal && void 0 !== NativeGlobal.WebAssembly ? NativeGlobal.WebAssembly : void 0 !== globalThis.WebAssembly ? globalThis.WebAssembly : void 0)
        }
        Pe.onLoad((() => {
            He = Ve()
        }));
        var Ze = Object.create(null);
        Object.defineProperty(Ze, "WebAssembly", {
            enumerable: !0,
            get: Ve
        });
        const ze = Ze;
        var qe = e.g,
            Je = {
                env: S,
                global: qe,
                get isConfigReady() {
                    return Pe.getIsStarted()
                },
                get isStarted() {
                    return Pe.getIsStarted()
                },
                get isLoaded() {
                    return Pe.getIsLoaded()
                },
                ...Pe,
                ...r,
                wxConsole: P,
                wxPerfConsole: D,
                wxNativeConsole: Ue,
                libConsole: Ge,
                libGlobal: ze,
                globalShare: {}
            };
        "undefined" != typeof __Function__ && (Function = function() {
            return "return this" === arguments[arguments.length - 1] ? function() {
                return qe
            } : new __Function__(...arguments)
        }, Function.prototype = __Function__.prototype);
        const Ke = Je
    })(), Foundation = t.default
})();
var JSContext, __webviewEngineMock__, Protect, __errorTracer__, __subContextEngine__, __sclSDK__, wxConsole = Foundation.wxConsole,
    wxPerfConsole = Foundation.wxPerfConsole,
    wxNativeConsole = Foundation.wxNativeConsole,
    libConsole = Foundation.libConsole,
    libGlobal = Foundation.libGlobal;
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
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var t = {};
    e.d(t, {
        default: () => c
    });
    var r, n, o, a = Object.prototype.toString,
        i = (Object.getPrototypeOf, Object.getOwnPropertyNames, Object.getOwnPropertyDescriptor, Object.defineProperty, {}),
        s = {
            subscribeHandler: (e, t, o = {}) => {
                if (void 0 !== e && e === r) return t = t.valueOf(), Array.isArray(i[t]) ? n ? void setTimeout((() => {
                    i[t].map((e => e(o)))
                })) : i[t].map((e => e(o))) : void 0
            }
        };
    Foundation.onLoadInstant((() => {
        o = e.g.WeixinJSContextId
    }));
    var l = {
        __init__: (e, t) => {
            void 0 === r && void 0 !== e && ((r = e).register(e, s, t), n = r.crossVMContext)
        },
        publish: (e, t = {}) => {
            var n, o = (n = t, a.call(n).split(" ")[1].split("]")[0]);
            if ("Object" !== o && "Undefined" !== o) throw new Error("params should be an object.");
            var i = e.valueOf(),
                l = t || {};
            if (r && "function" == typeof r.subscribeHandler) return r.subscribeHandler(r, s, i, l)
        },
        subscribe: (e, t) => {
            var n, a;
            if (Array.isArray(i[e]) || (i[e] = []), i[e].push(t), null !== (n = r) && void 0 !== n && n.waitingChannel && null !== (a = r) && void 0 !== a && a.waitingChannel[o]) {
                var s = [];
                r.waitingChannel[o].forEach((r => {
                    var {
                        event: n,
                        params: o
                    } = r;
                    n === e ? t(o) : s.push(r)
                })), r.waitingChannel[o] = s
            }
        }
    };
    Foundation.onLoad((() => {
        "undefined" != typeof WeixinJSContext && (l.__init__(WeixinJSContext, e.g.WeixinJSContextId), delete l.__init__, delete e.g.WeixinJSContext, delete e.g.WeixinJSContextId)
    }));
    const c = l;
    JSContext = t.default
})(), (() => {
    var e = {};
    e.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();
    __wxConfig.onReady((() => {
        window.devicePixelRatio = __wxConfig.devicePixelRatio, window.screen = {
            width: __wxConfig.screenWidth,
            height: __wxConfig.screenHeight,
            orientation: {
                type: "portrait"
            }
        }
    })), (() => {
        (window = e.g).__rpxRecalculatingFuncs__ = [], window.navigator = {
            userAgent: {
                match() {
                    console.warn("MiniProgram or plugin seems not compiled with proper renderer, styles may be wrong."), wxNativeConsole.error("[SkylineStyle] window.navigator.userAgent.match is called in jsContext, may be old version of miniprogram or plugin is injected into RenderContext. Render may not work properly.")
                }
            }
        }, window.requestAnimationFrame = e => {
            setTimeout((() => {
                e(Date.now())
            }), 16)
        }, window.CustomEvent = function(e, t) {
            return this.event = e, this.detail = t ? t.detail : void 0, this
        }, window.fakeStyleTags = [], window.document = window.fakeDocument = {
            head: {
                appendChild(e) {
                    e.isStyleTag && window.fakeStyleTags.push(e)
                }
            },
            createElement(e) {
                var t = {
                    isStyleTag: "style" === e,
                    path: "",
                    setAttribute(e, r) {
                        "wxss:path" === e && (t.path = r)
                    },
                    styleSheet: {}
                };
                return t.isStyleTag || wxNativeConsole.error(`[SkylineStyle] createElement with tagName="${e}" is invalid, expected "style"`), t
            }
        };
        var t = {};
        window.dispatchEvent = window.document.dispatchEvent = function(e) {
            void 0 !== t[e.event] && t[e.event].forEach((t => {
                t({
                    detail: e.detail
                })
            }))
        }, window.addEventListener = window.document.addEventListener = function(e, r) {
            void 0 === t[e] && (t[e] = []), t[e].push(r)
        }, window.removeEventListener = window.document.removeEventListener = function(e, r) {
            if (void 0 !== t[e]) {
                var n = t[e].indexOf(r); - 1 !== n && t[e].splice(n, 1)
            }
        }
    })(), __webviewEngineMock__ = {}
})(), (() => {
    var e = {
            342: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    EnvPreloadType: () => n,
                    default: () => i,
                    updateConfig: () => o
                });
                var n = {
                        None: 0,
                        BeforeLaunch: 1,
                        AfterLaunch: 2
                    },
                    o = () => {
                        a !== __wxConfig && void 0 !== a && Object.assign(a, __wxConfig)
                    },
                    a = (() => (__wxConfig.onReady(o), __wxConfig))();
                const i = a
            },
            133: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    reportDeprecatedAPI: () => n
                });
                var n = e => {
                    Reporter.reportKeyValue({
                        key: "DeprecatedAPI",
                        value: e
                    })
                }
            },
            996: (e, t, r) => {
                var {
                    reportDeprecatedAPI: n
                } = r(133), {
                    default: o
                } = r(342);

                function a(e = globalThis) {
                    function t() {
                        if (arguments.length > 0 && "return this" === arguments[arguments.length - 1]) return function() {
                            return e
                        }
                    }
                    "function" == typeof globalThis.Function && (t.prototype = globalThis.Function.prototype, t.prototype.constructor = t, globalThis.Function = t)
                }
                e.exports = {
                    hijack: function(e = !0, t = globalThis) {
                        a(t), "undefined" != typeof eval && ("ios" === o.platform && r.g.__isAppServiceRemoteDebugMode__ || o.debug || (globalThis.eval = void 0)), e && function() {
                            if ("undefined" != typeof setTimeout) {
                                var e = setTimeout;
                                globalThis.setTimeout = function(t, r = 0) {
                                    if ("function" != typeof t) throw new TypeError(`setTimeout expects a function as first argument but got ${typeof t}.`);
                                    var n = __errorTracer__.surroundThirdByTryCatch(t, "at setTimeout callback function"),
                                        o = [].slice.call(arguments, 2);
                                    return e((() => {
                                        n.apply(globalThis, o)
                                    }), r)
                                };
                                var t = setInterval;
                                globalThis.setInterval = function(e, r) {
                                    if ("function" != typeof e) throw new TypeError(`setInterval expects a function as first argument but got ${typeof e}.`);
                                    var n = __errorTracer__.surroundThirdByTryCatch(e, "at setInterval callback function"),
                                        o = [].slice.call(arguments, 2);
                                    return t((() => {
                                        n.apply(globalThis, o)
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
                    hijackFunction: a
                }
            },
            585: () => {
                if ("undefined" == typeof navigator) {
                    try {
                        new Function('var GeneratorFunctionProto = Object.getPrototypeOf(function* () {});var FakeGeneratorFunction = function () {};FakeGeneratorFunction.prototype = GeneratorFunctionProto;Object.defineProperty(GeneratorFunctionProto, "constructor", { value: FakeGeneratorFunction });')()
                    } catch (e) {}
                    try {
                        new Function('var AsyncFunctionProto = Object.getPrototypeOf(async function () {});var FakeAsyncFunction = function () {};FakeAsyncFunction.prototype = AsyncFunctionProto;Object.defineProperty(AsyncFunctionProto, "constructor", { value: FakeAsyncFunction });')()
                    } catch (e) {}
                    try {
                        new Function('var AsyncGeneratorFunctionProto = Object.getPrototypeOf(async function* () {});var FakeAsyncGeneratorFunction = function () {};FakeAsyncGeneratorFunction.prototype = AsyncGeneratorFunctionProto;Object.defineProperty(AsyncGeneratorFunctionProto, "constructor", { value: FakeAsyncGeneratorFunction });')()
                    } catch (e) {}
                }
            }
        },
        t = {};

    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, r), a.exports
    }
    r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
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
    var n = {};
    (() => {
        "use strict";
        r.r(n), r.d(n, {
            bridgeGlobalInstanceOf: () => ee,
            deepFreezeGlobalObjs: () => Z,
            deepFreezeObj: () => P,
            deepFreezeObjProperty: () => N,
            doNotWriteGlobalObjs: () => V,
            doNotWriteObj: () => F,
            doNotWriteObjProperty: () => k,
            globalEsHiddenObjs: () => t,
            globalEsObjs: () => o,
            hijack: () => z.hijack,
            hijackFunction: () => z.hijackFunction,
            overwriteSetPrototypeOf: () => H
        });
        r(585);
        var e = globalThis.Function,
            t = [() => Object.getPrototypeOf(Uint8Array.prototype).constructor, () => new e("return Object.getPrototypeOf((function* () {})()).constructor")(), () => new e("return Object.getPrototypeOf(function* () {}).constructor")(), () => new e("return Object.getPrototypeOf(async function () {}).constructor")(), () => new e("return Object.getPrototypeOf(async function* () {}).constructor")()].map((e => {
                try {
                    return e()
                } catch (e) {}
            })).filter(Boolean),
            o = ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "Error", "EvalError", "FinalizationRegistry", "Float32Array", "Float64Array", "Function", "globalThis", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "WebAssembly", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "null", "parseFloat", "parseInt", "undefined", "unescape", "uneval"],
            a = ["getApp", "getCurrentPages", "define", "require", "Reporter", "Protect", "requirePlugin", "definePlugin"],
            i = globalThis,
            s = r(342),
            l = (() => s.default.platform)(),
            c = (() => "ios" === l)();
        var u = /^\s*at .*(\S+:\d+|\(native\))/m,
            d = /^(eval@)?(\[native code\])?$/;

        function f(e, t = 1 / 0) {
            if ("string" != typeof e.stack) throw new Error("Cannot parse given Error object");
            var r = e.stack;
            return c ? function(e, t) {
                for (var r = [], n = e.split("\n"), o = 0, a = 0; o < n.length && a < t; ++o) {
                    var i = n[o];
                    if (!d.test(i)) {
                        ++a;
                        var s = i.indexOf("@");
                        if (-1 === s) {
                            var l = p(i);
                            r.push({
                                fileName: l.URI,
                                lineNumber: l.line,
                                columnNumber: l.column,
                                source: i
                            })
                        } else {
                            var c = i.substring(0, s),
                                u = p(i.substr(s + 1));
                            r.push({
                                functionName: c,
                                fileName: u.URI,
                                lineNumber: u.line,
                                columnNumber: u.column,
                                source: i
                            })
                        }
                    }
                }
                return r
            }(r, t) : function(e, t) {
                for (var r = [], n = e.split("\n"), o = 0, a = 0; o < n.length && a < t; ++o) {
                    var i = n[o];
                    u.test(i) && (r.push(i), ++a)
                }
                return r.map((e => {
                    e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                    var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                        r = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                        n = (t = r ? t.replace(r[0], "") : t).split(/\s+/).slice(1),
                        o = p(r ? r[1] : n.pop());
                    return {
                        functionName: n.join(" ") || void 0,
                        fileName: ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0],
                        lineNumber: o[1],
                        columnNumber: o[2],
                        source: e
                    }
                }))
            }(r, t)
        }

        function p(e) {
            var t = /(?::(\d+))?(?::(\d+))?$/.exec(e);
            return t ? {
                URI: e.substring(0, e.length - t[0].length),
                line: t[1],
                column: t[2]
            } : {
                URI: e
            }
        }
        var _ = Object.freeze,
            v = Object.setPrototypeOf,
            h = Object.defineProperty,
            g = Object.getOwnPropertyDescriptor,
            m = Object.getOwnPropertyNames,
            y = Object.getOwnPropertySymbols,
            w = Object.getPrototypeOf,
            b = Object.preventExtensions;
        var x = [
            [e => !/(WAServiceMainContext|WAGame)\.js/.test(e)]
        ];

        function E() {
            var e, t, r = Date.now(),
                n = f(new Error, 3),
                o = n[1],
                a = n[2],
                i = !(o.fileName && a.fileName && a.fileName !== o.fileName && (e = a.fileName, t = o.fileName, !x.some((r => r.some((t => t(e))) && r.some((e => e(t)))))));
            return Date.now() - r, i
        }

        function C(e, t = !1) {
            if ("function" == typeof e || "object" == typeof e && null !== e) {
                var r = g(e, "__proto__");
                r && !r.configurable || (r || Object.isExtensible(e)) && h(e, "__proto__", {
                    get() {
                        return w(this)
                    },
                    set(r) {
                        if (this === e) t && E() && v(e, r);
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
        var S = new Map,
            A = (e, t, r) => {
                S.has(e) || S.set(e, new Map);
                var n = S.get(e);
                n.has(t) ? Object.assign(n.get(t), r) : n.set(t, r)
            };

        function O(e, t, r = !1) {
            if ("function" != typeof e && ("object" != typeof e || null === e)) return !1;
            try {
                var n = g(e, t);
                return !!n && (n.configurable && (h(e, t, {
                    get: n.get || (() => n.value),
                    set(o) {
                        if (this === e) r && E() && (n.set ? n.set.call(this, o) : n.writable && (n.value = o));
                        else {
                            if ("function" != typeof this && "object" != typeof this) return;
                            ! function(e, t, r) {
                                try {
                                    "__proto__" === t ? v(e, r) : h(e, t, {
                                        value: r,
                                        writable: !0,
                                        enumerable: !0,
                                        configurable: !0
                                    })
                                } catch (e) {}
                            }(this, t, o)
                        }
                    },
                    enumerable: n.enumerable,
                    configurable: !1
                }), r && A(e, t, n)), !n.get && ("function" == typeof n.value || "object" == typeof n.value && null !== n.value))
            } catch (e) {
                throw e.message, e
            }
        }
        var T = new WeakSet;

        function I(e) {
            T.add(e)
        }

        function R(e) {
            return T.has(e)
        }

        function N(e, t, r) {
            O(e, t) && P(e[t], r)
        }

        function P(e, t) {
            if (e && !R(e) && ("function" == typeof e || "object" == typeof e) && e !== globalThis)
                if (e !== Error) {
                    I(e);
                    for (var r = m(e), n = y(e), o = 0; o < r.length; ++o) N(e, r[o], t);
                    for (var a = 0; a < n.length; ++a) N(e, n[a], t);
                    t ? b(e) : C(e, !1)
                } else if (t) {
                var i = e => {
                    if (e && !R(e) && ("function" == typeof e || "object" == typeof e) && e !== globalThis) {
                        I(e), _(e);
                        for (var t = m(e), r = y(e), n = 0; n < t.length; ++n) i(e[t[n]]);
                        for (var o = 0; o < r.length; ++o) i(e[r[o]])
                    }
                };
                i(Error)
            }
        }

        function k(e, t) {
            O(e, t, !0) && F(e[t])
        }
        var M = new WeakSet;

        function D(e) {
            return M.has(e)
        }

        function F(e) {
            if (e && !D(e) && ("function" == typeof e || "object" == typeof e) && e !== globalThis) {
                ! function(e) {
                    M.add(e)
                }(e);
                for (var t = m(e), r = y(e), n = 0; n < t.length; ++n) k(e, t[n]);
                for (var o = 0; o < r.length; ++o) k(e, r[o]);
                C(e, !0)
            }
        }
        var j = Object.prototype.hasOwnProperty,
            L = Object.defineProperty,
            B = Object.defineProperties,
            $ = Object.getOwnPropertyNames,
            W = Object.getOwnPropertySymbols,
            U = Object.getOwnPropertyDescriptor,
            G = !1,
            H = function() {
                G || (G = !0, L(i.Object, "setPrototypeOf", {
                    value: (e, t) => (e.__proto__ = t, e),
                    configurable: !0
                }), L(i.Object, "defineProperty", {
                    value(e, t, r) {
                        if (!D(e)) return L(e, t, r);
                        if (!E()) return r;
                        var n = U(e, t);
                        if (!n || n.configurable) {
                            var o = L(e, t, r);
                            return k(e, t), o
                        }
                        return A(e, t, r), r
                    },
                    configurable: !0
                }), L(i.Object, "defineProperties", {
                    value(e, t) {
                        if (!D(e)) return B(e, t);
                        if (!E()) return t;
                        var r = r => {
                            var n = U(e, r);
                            if (!n || n.configurable) {
                                var o = L(e, r, t[r]);
                                return k(e, r), o
                            }
                            return A(e, r, t[r]), t[r]
                        };
                        return $(t).forEach(r), W(t).forEach(r), t
                    },
                    configurable: !0
                }))
            },
            V = function(e = []) {
                try {
                    for (var r = [...o, ...a, ...t, ...e], n = (Date.now(), 0); n < r.length; ++n) {
                        var s = r[n],
                            l = typeof s;
                        "string" === l ? j.call(i, s) && k(i, s) : "function" !== l && "object" !== l || F(s)
                    }
                    Date.now()
                } catch (e) {}
            },
            Z = function(e = [], r = !1) {
                try {
                    for (var n = [...o, ...a, ...t, ...e], s = (Date.now(), 0); s < n.length; ++s) {
                        var l = n[s],
                            c = typeof l;
                        "string" === c ? j.call(i, l) && N(i, l, r) : "function" !== c && "object" !== c || P(l, r)
                    }
                    Date.now()
                } catch (e) {}
            },
            z = r(996),
            q = Object.prototype.isPrototypeOf,
            J = Object.defineProperty,
            K = Object.prototype.hasOwnProperty,
            X = Symbol.hasInstance,
            Y = function(e) {
                return !("function" != typeof this || !Q(e)) && ((e, t) => q.call(t.prototype, e))(e, this)
            },
            Q = e => "object" == typeof e ? null !== e : "function" == typeof e;

        function ee(e, t, r = {}) {
            for (var n = function(n) {
                    var o = e[n],
                        a = t[n];
                    if (!o || !a) return "continue";
                    if ("function" != typeof o) return "continue";
                    var i = K.call(o, X) ? o[X] : Y,
                        s = K.call(a, X) ? a[X] : Y;
                    J(o, X, {
                        value(e) {
                            return i.call(this, e) || s.call(a, e)
                        },
                        writable: !0,
                        enumerable: !1,
                        configurable: !0
                    }), J(a, X, {
                        value(e) {
                            return void 0 !== r[n] && "Object" === r[n] && void 0 !== (null == e ? void 0 : e._compressed) && void 0 !== (null == e ? void 0 : e._data) && void 0 !== (null == e ? void 0 : e.height) && void 0 !== (null == e ? void 0 : e.width) ? s.call(this, e) : s.call(this, e) || i.call(o, e)
                        },
                        writable: !0,
                        enumerable: !1,
                        configurable: !0
                    })
                }, o = 0; o < e.length; ++o) n(o)
        }
    })(), Protect = n
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
        callSystemFunction: () => u,
        callThirdPartyFunction: () => p,
        convertStack: () => o,
        endSystemFunctionCall: () => c,
        findCurrentSource: () => s,
        startSystemFunctionCall: () => l,
        surroundThirdByTryCatch: () => h,
        wrapMiniProgramOrPluginFunction: () => _,
        wrapSystemFunction: () => d,
        wrapThirdPartyFunction: () => v,
        wrapperStack: () => n
    });
    var r = /[ (@]*https?:\/\/([^/]*)\/+(.*?):(\d+):(\d+)/,
        n = [];

    function o(e) {
        if (!e || e.__wxOriginalStack__) return !1;
        var t = e.stack;
        if (void 0 === t) return !1;
        for (var r = t, o = n.length - 1, i = 0; i >= 0 && o >= 0;) {
            var s = r.length,
                l = 0;
            for (var c in a)
                if (a[c]) {
                    var u = r.indexOf(a[c], i);
                    u < 0 || s <= u || (s = u, l = a[c].length)
                } if (s >= r.length) break;
            var d = `at <${n[o--].description}>`;
            r = r.slice(0, s) + d + r.slice(s + l), i = s + d.length
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
    var a = {
        wrapSystemFunction: null,
        wrapMiniProgramOrPluginFunction: null
    };

    function i(e) {
        var t = ((new Error).stack || "").match(/.+/gm),
            n = "",
            o = 0;
        t && t.forEach((e => {
            if (r.test(e) && 2 === (o += 1)) {
                var t = e.match(/^(\s*)at /),
                    a = t ? t[1].length : 0;
                return n = e.slice(a), !1
            }
            return !0
        })), a[e] = n
    }

    function s() {
        for (var e = "", t = n.length - 1; t >= 0; t--) n[t].pluginAppId && (e = n[t].pluginAppId);
        return e
    }
    var l = e => {
            null === a.wrapSystemFunction && (a.wrapSystemFunction = "", d("", "", i)("wrapSystemFunction")), n.push({
                description: e
            })
        },
        c = () => {
            n.pop()
        };

    function u(e, t, r, l, c, u = !1) {
        var f;
        null === a.wrapSystemFunction && (a.wrapSystemFunction = "", d("", "", i)("wrapSystemFunction")), n.push({
            description: t
        });
        try {
            f = r.apply(l, c)
        } catch (t) {
            if (o(t)) {
                if ("AppServiceSdkKnownError" === t.type) throw n.pop(), t;
                if ("ThirdScriptError" === t.type) {
                    var p = s();
                    Reporter.thirdErrorReport({
                        error: t,
                        source: p,
                        triggerErrorCallback: !u
                    })
                } else Reporter.errorReport({
                    key: e,
                    error: t,
                    triggerErrorCallback: !u
                })
            }
            if (u) throw n.pop(), t
        }
        return n.pop(), f
    }

    function d(e, t, r, n = !1) {
        return function(...o) {
            return u(e, t, r, this, o, n)
        }
    }

    function f(e, t, r, s, l, c = !1) {
        var u;
        null === a.wrapMiniProgramOrPluginFunction && (a.wrapMiniProgramOrPluginFunction = "", _("", "", i)("wrapMiniProgramOrPluginFunction")), n.push({
            description: t,
            pluginAppId: e
        });
        try {
            u = r.apply(s, l)
        } catch (t) {
            if (o(t) && Reporter.thirdErrorReport({
                    error: t,
                    source: e || "",
                    triggerErrorCallback: !c
                }), c) throw n.pop(), t
        }
        return n.pop(), u
    }

    function p(e, t, r, n, o = !1) {
        return f(s(), e, t, r, n, o)
    }

    function _(e, t, r, n = !1) {
        return function(...o) {
            return f(e, t, r, this, o, n)
        }
    }

    function v(e, t, r = !1) {
        return function(...n) {
            return f(s(), e, t, this, n, r)
        }
    }

    function h(e, t) {
        var r = (t || "").match(/^\s*(?:at )?([\s\S]*)$/),
            n = r ? r[1] : "",
            o = e || function() {};
        return function(...e) {
            return f(s(), n, o, o, e, !1)
        }
    }
    __errorTracer__ = t
})(), (() => {
    var e = {
            227: (e, t, r) => {
                r.d(t, {
                    D: () => o,
                    m: () => n
                });
                var n = {
                        APP: "app",
                        APP_RENDER: "app_sub_render",
                        APP_XRFRAME_RENDER: "app_xrframe_render",
                        APP_SCL: "app_sub_scl",
                        GAME: "game",
                        GAME_OPEN_DATA: "gameOpenData"
                    },
                    o = {
                        GAME_PLUGIN_PRELOAD: "gamePlugin_preload_",
                        GAME_PLUGIN: "gamePlugin_",
                        APP_CARDS: "CARD_"
                    }
            },
            796: (e, t, r) => {
                r.d(t, {
                    G$: () => n
                });
                r(888);
                var n = function() {
                    return "devtools" === __wxConfig.platform
                }
            },
            704: (e, t, r) => {
                r.d(t, {
                    Z: () => o
                });
                var n = {
                    name: void 0,
                    secure: !0,
                    runningType: "app",
                    init: function(e) {
                        this.name = e.contextName, this.secure = e.contextSecure, void 0 !== Foundation && (Foundation.env.contextName = e.contextName, Foundation.env.typeStr = `${e.contextName}_Context`), this.name.startsWith("game") ? this.runningType = "game" : this.name.startsWith("app") && (this.runningType = "app"), this.remoteObjectProto = e.__proto__
                    }
                };
                const o = n
            },
            485: (e, t, r) => {
                var n = r(793),
                    o = r(410),
                    a = r(704),
                    i = r(552);
                Foundation.onLoad((() => {
                    void 0 === r.g.WeixinJSBridge && (r.g.WeixinJSBridge = {}, r.g.WeixinJSBridge.subscribeHandler = function(e, t) {
                        "onError" === e ? Foundation.emitUnhandledError(t) : "unhandledRejection" === e && Foundation.emitUnhandledRejection(null == t ? void 0 : t.reason, null == t ? void 0 : t.promise)
                    }, r.g.WeixinJSBridge.invokeCallbackHandler = function() {})
                })), Foundation.onUnhandledRejection((function(e = {}) {
                    a.Z.name === i.CONTEXT_NAME.APP_RENDER ? (0, n.yH)(e.reason, "", e.promise || null) : (0, n.sK)(e.reason, "", e.promise || null)
                })), Foundation.onUnhandledError((function(e) {
                    e = (0, o.Bs)(e), a.Z.name === i.CONTEXT_NAME.APP_RENDER ? (0, n.yH)(e, "") : (0, n.sK)(e, "")
                })), Foundation.onFrameworkError((function(e) {
                    "function" == typeof __wxSourceMapRetrace__ && (e = __wxSourceMapRetrace__(e)), wxNativeConsole.error("FrameworkError", e)
                }))
            },
            180: (e, t, r) => {
                r.d(t, {
                    Z: () => a
                });
                var n = {},
                    o = Object.keys;
                n.init = e => {
                    Reporter = e;
                    for (var t = o(e), r = 0; r < t.length; r++) {
                        var a = t[r];
                        void 0 === n[a] && (n[a] = e[a])
                    }
                };
                const a = n
            },
            143: (e, t, r) => {
                r.d(t, {
                    k: () => o
                });
                var n = r(61),
                    o = e => {
                        e.onReady((e => {
                            Foundation._onPostLoad((() => {
                                var t = __wxConfig.__readyHandler;
                                n.Z.__wxConfig = Object.assign({}, e), "function" == typeof t && t(e)
                            }))
                        }))
                    }
            },
            636: (e, t, r) => {
                r.d(t, {
                    E: () => o
                });
                var n = r(61),
                    o = function(e) {
                        var t, o, a;
                        ("windows" === e.__wxConfig.platform || "mac" === e.__wxConfig.platform) && e.__wxConfig.host && "WMPF" === e.__wxConfig.host.env && e.__isAppServiceRemoteDebugMode__ ? n.Z.console = r.g.console : e.__isAppServiceRemoteDebugMode__ && "ios" !== e.__wxConfig.platform ? n.Z.console = e.originConsole : n.Z.console = new e.BaseConsole, t = e.wxLibVersion, a = (null === (o = __libVersionInfo__) || void 0 === o ? void 0 : o.version) || "9.9.9", t !== a && (wxNativeConsole.warn(`[checkVersionMatches] baselib versions between context do not match (mainContext ${t}, subContext ${a})`), Reporter.reportIDKey({
                            key: "subContextLibVersionNotMatch"
                        })), __Function__ = e.__Function__, __userActionTracer__ = e.__userActionTracer__, __appServiceSDK__ = e.__appServiceSDK__, __sclEngine__ = e.__sclEngine__, WeixinJSBridge = e.WeixinJSBridge, Reporter = e.Reporter, wxNativeConsole = e.wxNativeConsole, WeixinSharedBuffer = e.WeixinSharedBuffer, BaseConsole = e.BaseConsole, $dbg = e.$dbg, __isAppServiceRemoteDebugMode__ = !!e.__isAppServiceRemoteDebugMode__, __remoteDebug__ = e.__remoteDebug__, __debuggerMessager__ = e.debuggerMessager, Foundation.onLibraryEnd((() => {
                            e.setWxModule(__wxModule__)
                        })), __refreshEnv = e.__refreshEnv, __glassEaselAdapter__ = e.__glassEaselAdapter__, __glassEaselAdapter__.setSubContextAdapter(__glassEaselSubContextAdapter__), __glassEaselSubContextAdapter__.setMainContextAdapter(__glassEaselAdapter__), __glassEaselAdapter__.onSkylineEngineReady((e => {
                            __glassEaselSubContextAdapter__.setSkylineEngine(e)
                        })), __subContextEngineBridge__.bridgeContext(e.__subContextEngineBridge__), e.__freezeLibContextGlobal__(), Object.defineProperty(n.Z, "__wxSourceMap", {
                            get: __condom__.condom(e.getWxSourceMap)
                        }), n.Z.WebAssembly && delete n.Z.WebAssembly, Trace = e.Trace
                    }
            },
            808: (e, t, r) => {
                r.d(t, {
                    D: () => o
                });
                var n = r(61),
                    o = function(e) {
                        e.__wxConfig.debug && (console = new e.BaseConsole), setTimeout = e.setTimeout, clearTimeout = e.clearTimeout, setInterval = e.setInterval, clearInterval = e.clearInterval, WeixinJSBridge = e.WeixinJSBridge, Reporter = e.Reporter, NativeGlobal = e.NativeGlobal, WeixinCanvas = e.WeixinCanvas, WeixinArrayBuffer = e.WeixinArrayBuffer, wxNativeConsole = e.wxNativeConsole, BaseConsole = e.BaseConsole, n.Z.console = new e.BaseConsole, __sclEngine__ = e.__sclEngine__, __appServiceConsole__ = e.__appServiceConsole__, __glassEaselAdapter__ = e.__glassEaselAdapter__, __glassEaselAdapter__.setSkylineEngine(__skylineEngine__), __skylineEngine__.RuntimeCore.setGlassEaselAdapter(__glassEaselAdapter__), __glassEaselAdapter__.setWebviewEngine(__webviewEngine__), __webviewEngine__.setGlassEaselAdapter(__glassEaselAdapter__), Trace = e.Trace, SkylineGlobal = e.SkylineGlobal
                    }
            },
            654: (e, t, r) => {
                r.d(t, {
                    d: () => n
                });
                var n = function(e) {
                    setTimeout = e.setTimeout, clearTimeout = e.clearTimeout, setInterval = e.setInterval, clearInterval = e.clearInterval, WeixinJSBridge = e.WeixinJSBridge, Reporter = e.Reporter, NativeGlobal = e.NativeGlobal, WeixinCanvas = e.WeixinCanvas, WeixinArrayBuffer = e.WeixinArrayBuffer, wxNativeConsole = e.wxNativeConsole, __sclEngine__ = e.__sclEngine__, Trace = e.Trace
                }
            },
            618: (e, t, r) => {
                r.d(t, {
                    y: () => o
                });
                var n = r(61),
                    o = function(e) {
                        setTimeout = e.setTimeout, clearTimeout = e.clearTimeout, setInterval = e.setInterval, clearInterval = e.clearInterval, WeixinJSBridge = e.WeixinJSBridge, Reporter = e.Reporter, NativeGlobal = e.NativeGlobal, WeixinCanvas = e.WeixinCanvas, WeixinArrayBuffer = e.WeixinArrayBuffer, wxNativeConsole = e.wxNativeConsole, BaseConsole = e.BaseConsole, n.Z.console = new e.BaseConsole, Trace = e.Trace, Foundation.onLibraryEnd((() => {
                            e.subContextInitCallback(xrFrame)
                        }))
                    }
            },
            878: (e, t, r) => {
                r.d(t, {
                    M: () => s,
                    O: () => c
                });
                var n, o, a = r(61),
                    i = (e, t, r) => (Object.keys(r).forEach((n => {
                        __condom__.shouldCloseCondom(n, e) && (r[n] = t[n])
                    })), r),
                    s = function(e) {
                        var t = e._innerAPI;
                        delete e._innerAPI;
                        var r = e._createSharedCanvas;
                        a.Z.__isAdapterInjected = !1, a.Z.console = e.console, Object.defineProperty(a.Z, "sharedCanvas", {
                            get: () => r(),
                            set() {}
                        }), n = e.__is_wk_game ? [...Protect.globalEsObjs.map((e => globalThis[e])), ...Protect.globalEsHiddenObjs] : [...Protect.globalEsObjs.map((e => globalThis[e])), ...Protect.globalEsHiddenObjs].filter(Boolean);
                        var s = e.__ctx_bridge.condomPrototype(n);
                        __wxConfig.onReady((() => {
                            if (!0 === __wxConfig.useHighPerformanceMode) return a.Z.wx = e.wx, void(e.enableGameAudits && l(t));
                            if (s) {
                                var r;
                                if (o) o = i(__wxConfig.expt, e.wx, o), a.Z.wx = o;
                                else a.Z.wx = __condom__.condomWX(e.wx, e.skipCondom, null === (r = e.__wxConfig) || void 0 === r ? void 0 : r.expt)
                            } else {
                                var n;
                                if (o) return o = i(__wxConfig.expt, e.wx, o), a.Z.wx = o, void(e.enableGameAudits && l(t));
                                a.Z.wx = __condom__.condomWX(e.wx, e.skipCondom, null === (n = e.__wxConfig) || void 0 === n ? void 0 : n.expt)
                            }
                            e.enableGameAudits && l(t)
                        })), a.Z.requirePlugin = e.requirePlugin, a.Z.WXWebAssembly = e.WXWebAssembly, a.Z.WXWeakRef = e.WXWeakRef, delete a.Z.WebAssembly, a.Z.GameGlobal || (a.Z.GameGlobal = a.Z), wxNativeConsole = e.wxNativeConsole, Object.defineProperty(a.Z, "__wxSourceMap", {
                            get: __condom__.condom(e.getWxSourceMap)
                        })
                    };

                function l(e) {
                    JSContext.publish("injectGamePerformanceUtilsSDK", {
                        success: t => {
                            t.sdk.controller.init({
                                request: e.weRequest,
                                uploadFile: e.weUploadFile,
                                writeFile: e.weWriteFile,
                                globalWx: a.Z.wx,
                                gameTransfer: e.gameTransfer,
                                getGamePerformance: e.getGamePerformance,
                                coverview: e.coverview,
                                WXConfig: e.WXConfig,
                                onShow: e.onShow,
                                onHide: e.onHide,
                                offShow: e.offShow,
                                offHide: e.offHide,
                                getSystemInfoSync: e.getSystemInfoSync,
                                getNetworkType: e.getNetworkType,
                                onNetworkStatusChange: e.onNetworkStatusChange,
                                reportKeyValue: e.reportKeyValue,
                                gameAuditModule: e.gameAuditModule
                            }), wxNativeConsole.warn("audits init finish")
                        }
                    })
                }
                var c = function(e, t, r) {
                    e && e.wx && (o = __condom__.condomWX(e.wx, t, r))
                }
            },
            338: (e, t, r) => {
                r.d(t, {
                    o: () => n
                });
                var n = function(e) {
                    e.getWxSourceMap && (e.getWxSourceMap = __condom__.condom(e.getWxSourceMap)), __gameOpenDataSDK__.init(e)
                }
            },
            331: (e, t, r) => {
                r.d(t, {
                    m: () => o
                });
                var n = r(61),
                    o = function(e) {
                        delete n.Z.NativeClient, n.Z.console = e.console, n.Z.WXWebAssembly = e.WXWebAssembly, n.Z.env = {}, e.pluginEnv && (n.Z.pluginEnv = e.pluginEnv), e.wx && (n.Z.wx = e.wx)
                    }
            },
            757: (e, t, r) => {
                r.d(t, {
                    Z: () => a
                });
                var n = r(61);

                function o(e) {
                    return function() {
                        console.warn(`function ${e} is not supported in current env`)
                    }
                }

                function a(e) {
                    if (JSContext.publish("magicBrushFrameSubContextBridge", {
                            __subContextEngineBridge__: __subContextEngineBridge__
                        }), e.isRefresh) {
                        e.console.info("[MagicBrushFrame][subContext] initMagicBrushFrameContext"), n.Z.Component = e.Component, n.Z.Behavior = e.Behavior, setTimeout = e.setTimeout, clearTimeout = e.clearTimeout, setInterval = e.setInterval, clearInterval = e.clearInterval, n.Z.setTimeout = o("setTimeout"), n.Z.clearTimeout = o("clearTimeout"), n.Z.setInterval = o("setInterval"), n.Z.clearInterval = o("clearInterval"), WeixinJSBridge = e.WeixinJSBridge, Reporter = e.Reporter, wxNativeConsole = e.wxNativeConsole, __appServiceSDK__ = e.__appServiceSDK__, n.Z.console = __appServiceSDK__.console;
                        var t = __appServiceSDK__.wx;
                        __condom__.condomWX(t), n.Z.wx = t, __subContextEngineBridge__.bridgeContext(e.__subContextEngineBridge__), e.__freezeLibContextGlobal__(), setTimeout((() => {
                            JSContext.publish("magicBrushFrameSubContextReady", {
                                frameSetInfo: e.frameSetInfo
                            })
                        }), 0)
                    }
                }
            },
            61: (e, t, r) => {
                r.d(t, {
                    Z: () => n
                });
                const n = function() {
                    return this
                }()
            },
            552: (e, t, r) => {
                r.r(t), r.d(t, {
                    CONTEXT_NAME: () => y.m,
                    CONTEXT_NAME_PREFIX: () => y.D,
                    injectEntryFile: () => g.Wm,
                    loadJsFiles: () => g.z5,
                    loadLibFiles: () => g.C4,
                    onInitReady: () => C,
                    onMainContextMessage: () => N,
                    postMessageToMainContext: () => I,
                    postMessageToMainContextSync: () => R,
                    surroundByTryCatch: () => h.Ue,
                    surroundThirdByTryCatch: () => h.M2
                });
                r(485);
                var n = r(61),
                    o = r(180),
                    a = r(704),
                    i = r(23),
                    s = r(143),
                    l = r(878),
                    c = r(338),
                    u = r(636),
                    d = r(618),
                    f = r(808),
                    p = r(331),
                    _ = r(654),
                    v = r(757),
                    h = r(793),
                    g = r(951),
                    m = r(796),
                    y = r(227),
                    w = r(410),
                    b = "subContext:initReady",
                    x = new Foundation.EventEmitter,
                    E = !1,
                    C = function(e) {
                        E ? e() : Foundation.once(b, e)
                    };
                JSContext.subscribe("subContextEnvReady", (0, h.Ue)((e => {
                    if (a.Z.init(e), (0, i.v)(e), function(e) {
                            r.g.__isAppServiceRemoteDebugMode__ = !!e.__isAppServiceRemoteDebugMode__
                        }(e), function(e) {
                            if (e.__isAppServiceRemoteDebugMode__ && e.__remoteDebug__ && e.__remoteDebug__.setAutoTestHandler) try {
                                var t;
                                $eval = e.__remoteDebug__.$$eval, e.__remoteDebug__.setAutoTestHandler({
                                    $eval: (r, n, o = null) => (t || (t = "ios" === e.__wxConfig.platform ? globalThis : {
                                        ...globalThis,
                                        console: e.originConsole
                                    }), $eval(r, t).apply(o, n)),
                                    setGlobalFunctions(e, r) {
                                        t ? t[e] = r : globalThis[e] = r
                                    }
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        }(e), Protect.hijack(), o.Z.init(e.Reporter), a.Z.name === y.m.GAME)(0, l.M)(e);
                    else if (a.Z.name === y.m.GAME_OPEN_DATA)(0, c.o)(e);
                    else if (a.Z.name === y.m.APP)(0, u.E)(e);
                    else if (a.Z.name === y.m.APP_RENDER)(0, f.D)(e);
                    else if (a.Z.name === y.m.APP_XRFRAME_RENDER)(0, d.y)(e);
                    else if (a.Z.name === y.m.APP_SCL)(0, _.d)(e);
                    else if (a.Z.name.startsWith(y.D.GAME_PLUGIN))(0, p.m)(e);
                    else {
                        if (!a.Z.name.startsWith(y.D.APP_CARDS)) throw new Error("subContextEnvReady: missing context name.");
                        (0, v.Z)(e)
                    }(0, s.k)(e.__wxConfig)
                }))), JSContext.subscribe("preloadSubContextEnvReady", (0, h.Ue)((e => {
                    a.Z.init(e), e.preHandleEnv && (0, l.O)(e.preHandleEnv, e.skipCondomList, e.expt)
                }))), JSContext.subscribe("subContextRefreshEnv", (0, h.Ue)((e => {
                    if ("game" === a.Z.name)(0, l.M)(e);
                    else if ("gameOpenData" === a.Z.name)(0, c.o)(e);
                    else if ("app" === a.Z.name)(0, u.E)(e);
                    else if ("app_sub_render" === a.Z.name)(0, f.D)(e);
                    else if ("app_xrframe_render" === a.Z.name)(0, d.y)(e);
                    else if ("app_sub_scl" === a.Z.name)(0, _.d)(e);
                    else if (a.Z.name.startsWith("gamePlugin_"))(0, p.m)(e);
                    else {
                        if (!a.Z.name.startsWith(y.D.APP_CARDS)) throw new Error("subContextRefreshEnv: missing context name.");
                        (0, v.Z)(e)
                    }
                    JSContext.publish("subContextRefreshEnvReady", null, !0)
                }))), JSContext.subscribe("subContextRefreshWxConfig", (0, h.Ue)((e => {
                    var {
                        key: t,
                        value: r
                    } = e;
                    "string" == typeof t && r && (__wxConfig[t] = r)
                }))), JSContext.subscribe("exportGlobalRequire", (0, h.Ue)((e => {
                    var t = /^[A-Za-z]+(\.[A-Za-z]+)*$/,
                        r = e => {
                            var {
                                name: r,
                                value: o,
                                needCondom: a
                            } = e;
                            if ("string" != typeof r || !t.test(r)) throw new Error("exportGlobalRequire: illegal variable name.");
                            r.split(".").reduce(((e, t, n, i) => {
                                if (n === i.length - 1) {
                                    if (t in e) throw new Error(`exportGlobalRequire: Variable ${r} exists.`);
                                    e[t] = a ? __condom__.condom(o) : o
                                }
                                if ("Array" !== (0, h.Em)(e[t]) && "Function" !== (0, h.Em)(e[t]) && "Object" !== (0, h.Em)(e[t])) {
                                    var s = i.slice(0, n + 1).join(".");
                                    throw new Error(`exportGlobalRequire: ${s} is not an Object.`)
                                }
                                return e[t]
                            }), n.Z)
                        };
                    return "[object Array]" === Object.prototype.toString.call(e) ? e.forEach(r) : r(e)
                }))), JSContext.subscribe("mainContextMessage", (e => {
                    x.emit("mainContextMessage", e)
                })), JSContext.subscribe("subContextDestroy", (() => {})), JSContext.subscribe("readyLoadSDKSubPackage", (e => {
                    Object.getOwnPropertyNames(e).forEach((t => {
                        n.Z[t] = e[t]
                    })), JSContext.publish("readyLoadSDKSubPackageDone")
                }));
                var S = ["WeixinJSCore", "WeixinNativeBuffer", "WeixinWorker", "NativeGlobal", "lockSharedNativeBuffer", "unlockSharedNativeBuffer", "getNativeBufferId", "getNativeBuffer", "setNativeBuffer", "setSharedNativeBuffer", "getSharedNativeBuffer", "WeixinArrayBuffer"],
                    A = "undefined" != typeof IS_RENDER_CTX;
                Foundation.onLoad((() => {
                    S.forEach((e => {
                        delete n.Z[e]
                    })), JSContext.publish("subContextReady", {
                        contextGlobal: {
                            get __wxSourceMap() {
                                return n.Z.__wxSourceMap
                            },
                            get __require() {
                                return "game" === a.Z.name || a.Z.name.startsWith("gamePlugin_") ? n.Z.require : __condom__.condom(n.Z.require)
                            },
                            jsonParse: JSON.parse,
                            jsonStringify: JSON.stringify,
                            arrayBufferProto: ArrayBuffer.prototype
                        }
                    }, !0)
                }), A);
                var O = !1,
                    T = function() {
                        O || (O = !0, Protect.overwriteSetPrototypeOf(), Protect.deepFreezeGlobalObjs([], !1))
                    };
                Foundation.onLibraryEnd((() => {
                    Foundation.onLoad((() => {
                        a.Z.secure && __wxConfig && __wxConfig.isIsolateContext && T(), Foundation.emit(b), E = !0
                    })), Foundation.onStart((() => {
                        __wxConfig.plugins && (Protect.hijackFunction({}), (0, m.G$)() || T())
                    }))
                }));
                var I = e => {
                        (0, w.YF)((() => {
                            JSContext.publish("subContextMessage", e)
                        }))
                    },
                    R = e => {
                        JSContext.publish("subContextMessage", e)
                    },
                    N = e => {
                        x.on("mainContextMessage", e)
                    }
            },
            951: (e, t, r) => {
                r.d(t, {
                    C4: () => l,
                    Wm: () => s,
                    z5: () => i
                });
                var n = r(227),
                    o = r(704),
                    a = () => o.Z.name === n.m.APP,
                    i = (e, t, r) => {
                        var n = a();
                        if (JSContext && JSContext.publish) {
                            n && __wxModule__.globalRequireBlocker.block();
                            var i = JSContext.publish("loadJsFiles", {
                                paths: e,
                                options: r,
                                moduleName: t,
                                contextName: o.Z.name
                            });
                            return n && __wxModule__.globalRequireBlocker.unblock(), n && __wxModule__.globalRequireBlocker.flushQueue(), i
                        }
                        return "failed"
                    },
                    s = (e, t) => {
                        var r = a();
                        if (JSContext && JSContext.publish) {
                            r && __wxModule__.globalRequireBlocker.block();
                            var n = JSContext.publish("injectEntryFile", {
                                moduleName: e,
                                separatedPlugins: t
                            });
                            return r && __wxModule__.globalRequireBlocker.unblock(), r && __wxModule__.globalRequireBlocker.flushQueue(), n
                        }
                        return "failed"
                    },
                    l = e => JSContext && JSContext.publish ? JSContext.publish("loadLibFiles", {
                        paths: e,
                        contextName: o.Z.name
                    }) : "failed"
            },
            23: (e, t, r) => {
                r.d(t, {
                    v: () => s
                });
                var n = r(61),
                    o = r(704),
                    a = r(793),
                    i = function(e, t) {
                        return function() {
                            return "function" == typeof arguments[0] && (arguments[0] = (0, a.M2)(arguments[0], t)), e(...arguments)
                        }
                    },
                    s = e => {
                        n.Z.setTimeout = i(e.setTimeout, "at setTimeout callback function"), n.Z.clearTimeout = i(e.clearTimeout), n.Z.setInterval = i(e.setInterval, "at setInterval callback function"), n.Z.clearInterval = i(e.clearInterval), "game" === o.Z.runningType && (n.Z.requestAnimationFrame = i(e.requestAnimationFrame, "at requestAnimationFrame callback function"), n.Z.cancelAnimationFrame = i(e.cancelAnimationFrame))
                    }
            },
            793: (e, t, r) => {
                r.d(t, {
                    Em: () => u,
                    M2: () => s,
                    Ue: () => c,
                    sK: () => i,
                    yH: () => l
                });
                var n = r(227),
                    o = r(704),
                    a = r(180),
                    i = function(e, t, r) {
                        try {
                            var i;
                            if (o.Z.name === n.m.GAME) i = a.Z.RunType.GAME;
                            else if (o.Z.name === n.m.GAME_OPEN_DATA) i = a.Z.RunType.GAME_SUBCONTEXT;
                            else if (o.Z.name === n.m.APP) i = a.Z.RunType.APP;
                            else if (o.Z.name.startsWith(n.D.GAME_PLUGIN)) i = a.Z.RunType.GAME_SUBCONTEXT;
                            else if (o.Z.name === n.m.APP_RENDER) i = a.Z.RunType.APP_SUBCONTEXT;
                            else {
                                if (o.Z.name !== n.m.APP_XRFRAME_RENDER) throw new Error("unknown context");
                                i = a.Z.RunType.APP_SUBCONTEXT
                            }
                            void 0 !== r ? a.Z.thirdErrorReport({
                                key: i,
                                error: e,
                                extend: t,
                                triggerErrorCallback: !o.Z.secure,
                                isUnhandledRejection: !0,
                                promise: r
                            }) : a.Z.thirdErrorReport({
                                key: i,
                                error: e,
                                extend: t,
                                triggerErrorCallback: !o.Z.secure,
                                isUnhandledRejection: !1
                            })
                        } catch (e) {
                            console.error("[ErrorHandler] error in Report.thirdErrorReport: ", e.message)
                        }
                    };

                function s(e, t) {
                    return function() {
                        var r;
                        try {
                            "function" == typeof e && (r = e.apply(e, arguments))
                        } catch (e) {
                            i(e, t)
                        }
                        return r
                    }
                }

                function l(e, t, r) {
                    var i = "";
                    if (o.Z.name === n.m.APP_RENDER ? i = "appSubContextSDKScriptError" : "game" === o.Z.runningType && (i = "gameSubContextSDKScriptError"), "function" == typeof a.Z.thirdErrorReport) try {
                        void 0 !== r ? a.Z.errorReport({
                            key: i,
                            error: e,
                            extend: t,
                            triggerErrorCallback: !o.Z.secure,
                            isUnhandledRejection: !0,
                            promise: r
                        }) : a.Z.errorReport({
                            key: i,
                            error: e,
                            extend: t,
                            triggerErrorCallback: !o.Z.secure,
                            isUnhandledRejection: !1
                        })
                    } catch (e) {
                        console.error("[ErrorHandler] error in Report.errorReport: ", e.message)
                    } else {
                        var s = `${i}\n${t?`${e.message};${t}`:e.message}\n${e.stack}`;
                        "undefined" != typeof console && console.error(s)
                    }
                }

                function c(e, t) {
                    return function() {
                        try {
                            return e.apply(e, arguments)
                        } catch (e) {
                            if (e.message, e.stack, "[object Error]" === Object.prototype.toString.apply(e)) {
                                if ("AppServiceSdkKnownError" === e.type) throw e;
                                l(e, t)
                            }
                            return
                        }
                    }
                }

                function u(e) {
                    return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
                }
            },
            410: (e, t, r) => {
                r.d(t, {
                    Bs: () => n,
                    YF: () => i
                });
                var n = function(e) {
                        if ("string" != typeof e) return e;
                        try {
                            return JSON.parse(e.replace(/"/g, '\\"').replace(/'/g, '"').replace(/\n/g, "\\n"))
                        } catch (t) {
                            return {
                                message: e,
                                stack: ""
                            }
                        }
                    },
                    o = !1,
                    a = [],
                    i = e => {
                        a.push(e), o || (o = !0, Promise.resolve().then((() => {
                            for (var e = 0; e < a.length; ++e)
                                if ("function" == typeof a[e]) try {
                                    a[e]()
                                } catch (e) {
                                    throw wxNativeConsole.error("[system] Error: nextMicroTaskCallback occur fatal error: ", e), console.error("[system] Error: nextMicroTaskCallback occur fatal error: ", e), e
                                }
                            o = !1, a.length = 0
                        })))
                    }
            },
            888: e => {
                e.exports = BabelRuntimeHelpers.asyncToGenerator
            }
        },
        t = {};

    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, r), a.exports
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
            return this || new Function("return this")()
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
    var n = r(552);
    __subContextEngine__ = n
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
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var t = {};
    e.d(t, {
        default: () => $e
    });
    var r = () => {
            n !== __wxConfig && void 0 !== n && Object.assign(n, __wxConfig)
        },
        n = (() => (__wxConfig.onReady(r), __wxConfig))();
    const o = n;
    var a = (() => o.platform)(),
        i = (() => "devtools" === a)();
    var s;
    const l = {
        get invoke() {
            return s
        },
        set invoke(e) {
            s = e
        }
    };

    function c(e, t, r, n = {}) {
        WeixinJSBridge.invoke(e, t, r, n)
    }

    function u(e, t) {
        Foundation.onLoad((() => {
            WeixinJSBridge.addEventListener(e, ((e, r, n) => {
                "number" == typeof(null == n ? void 0 : n.__subscribe_webviewId) && t(e, r, n)
            }))
        }))
    }

    function d(e, t, r) {
        __subContextEngine__.postMessageToMainContext({
            event: e,
            params: {
                params: t,
                pageId: r
            }
        })
    }
    var f = new Map,
        p = new Map;

    function _(e, t, r) {
        ! function(e, t, r) {
            p.has(t) || p.set(t, new Map);
            var n = p.get(t);
            n.has(e) || n.set(e, []), n.get(e).push(r)
        }(e, t, r)
    }

    function v(e, t = {}, r = {}, n = {}) {
        var o = {};
        Object.keys(t).forEach((e => {
            "function" == typeof t[e] && (o[e] = t[e], delete t[e])
        })), P(n)(e, t, (t => {
            t.errMsg = t.errMsg || `${e}:ok`;
            var n = 0 === t.errMsg.indexOf(`${e}:ok`),
                a = 0 === t.errMsg.indexOf(`${e}:cancel`),
                i = 0 === t.errMsg.indexOf(`${e}:fail`);
            "function" == typeof r.beforeAll && r.beforeAll(t), n ? ("function" == typeof r.beforeSuccess && r.beforeSuccess(t), "function" == typeof o.success && o.success(t), "function" == typeof r.afterSuccess && r.afterSuccess(t)) : a ? ("function" == typeof o.cancel && o.cancel(t), "function" == typeof r.cancel && r.cancel(t)) : i && ("function" == typeof r.beforeFail && r.beforeFail(t), "function" == typeof o.fail && o.fail(t), "function" == typeof r.afterFail && r.afterFail(t)), "function" == typeof o.complete && o.complete(t), "function" == typeof r.afterAll && r.afterAll(t)
        }))
    }
    __subContextEngine__.onMainContextMessage((e => {
        var t, r, n;
        t = e.event, r = e.params, null === (n = f.get(t)) || void 0 === n || n.forEach((e => {
                void 0 !== r.pageId ? e(r.params, r.pageId) : __webviewEngine__.getAllPageIds((t => {
                    null == t || t.forEach((t => {
                        e(r.params, t)
                    }))
                }))
            })),
            function(e, t) {
                var r, n, o = t.pageId;
                void 0 !== o && (null === (r = p.get(o)) || void 0 === r || null === (n = r.get(e)) || void 0 === n || n.forEach((e => {
                    e(t.params, o)
                }))), p.forEach(((r, n) => {
                    var o;
                    null === (o = r.get(e)) || void 0 === o || o.forEach((e => {
                        e(t.params, n)
                    }))
                }))
            }(e.event, e.params)
    }));
    var h = (e, t = {}, r = {}) => {
            v(e, t, r)
        },
        g = e => (t, r, n) => {
            v(t, r, n, e)
        };

    function m(e, t) {
        u(e, t)
    }
    l.invoke = h;
    var y, {
            EventEmitter: w
        } = Foundation,
        b = new w,
        x = function(e, t) {
            __webviewEngine__.getRandomPageId((r => {
                d(e, t, r)
            }))
        },
        E = e => function(t, r) {
            d(t, r, e)
        },
        C = e => function(t, r) {
            ! function(e, t, r) {
                __subContextEngine__.postMessageToMainContextSync({
                    event: e,
                    params: {
                        params: t,
                        pageId: r
                    }
                })
            }(t, r, e)
        },
        S = function(e, t) {
            ! function(e, t) {
                f.has(e) || f.set(e, []), f.get(e).push(t)
            }(e, t)
        },
        A = [],
        O = (...e) => {
            A.push(e)
        };

    function T(e, t, r, n, o = {}) {
        var a = t => {
            "function" != typeof y || "string" == typeof t.errMsg && 0 !== t.errMsg.indexOf(`${e}:ok`) || y(e, r), "function" == typeof n && n(t)
        };
        "string" == typeof r && r.startsWith("wx") ? __wxConfig.supportInvokeWithAppId ? (o.appId = r, c(e, t, a, o)) : O(r, e, t, (t => {
            c(e, t, a, o)
        })) : c(e, t, a, o)
    }
    var I = new Set(["getGlobalStorage", "setGlobalStorage", "getGlobalStorageInfo", "removeGlobalStorage", "preloadWebview"]),
        R = (e, t, r) => {
            var n;
            if (void 0 === t.__invoke_webviewId) return "function" != typeof(null === (n = __webviewEngine__) || void 0 === n ? void 0 : n.getRandomPageId) ? (wxNativeConsole.info("__webviewEngine__.getRandomPageId not available, may be too early to call invoke, invoke with no webviewId"), void r(t)) : void __webviewEngine__.getRandomPageId((n => {
                t.__invoke_webviewId = n, I.has(e) || wxNativeConsole.warn(`no pageId found when invoking JsApi "${e}" from skyline render context, using ${n}. If this is expected, add "${e}" to allowRandomPageIdSet`), r(t)
            }));
            r(t)
        },
        N = (e, t = {}, r, n = {}) => {
            R(e, t, (t => {
                T(e, t, "", r, n)
            }))
        },
        P = (e = {}) => (t, r = {}, n, o) => {
            void 0 !== e.pageId ? (r.__invoke_webviewId = e.pageId, T(t, r, e.pluginId, n, o)) : R(t, r, (r => {
                T(t, r, e.pluginId, n, o)
            }))
        };

    function k() {
        return Reporter
    }

    function M(e) {
        return "string" != typeof e ? JSON.stringify(e || {}) : e
    }
    var D = 1e3,
        F = null,
        j = [],
        L = !1,
        B = !1,
        $ = i || !!0,
        W = [];

    function U() {
        F = null, 0 !== j.length && (WeixinJSBridge.invoke("reportKeyValue", {
            version: 2,
            dataArray: j.map((e => ({
                key: 26308,
                value: [e.category, e.name, Math.round(1e3 * e.timeStamp), e.phase, encodeURIComponent(M(e.args))].join(",")
            })))
        }), j = [])
    }

    function G(e, t) {
        i && function(e, t) {
            var r = {
                ...t,
                phase: e
            };
            r.args = M(r.args), WeixinJSBridge.invoke("traceEvent", {
                events: [r]
            })
        }(e, t), L && function(e, t) {
            (B || "API" !== t.category) && (F || (F = setTimeout(U, D)), j.push({
                ...t,
                phase: e
            }))
        }(e, t)
    }

    function H() {
        return $
    }
    o.onReady((e => {
        var t, r, n = null === (t = e.expt) || void 0 === t ? void 0 : t.clicfg_appbrand_report_trace_event;
        ("1" === n ? L = !0 : "2" === n && (L = !0, B = !0), $ = $ || B || !! function() {
            if (o && "debug" in o && void 0 !== o.debug) return !!o.debug
        }()) && (null === (r = W) || void 0 === r || r.forEach((e => e())));
        W = null
    }));
    var V = !1;

    function Z() {
        var e;
        return V ? performance.now() + (performance.timeOrigin || (null === (e = performance.timing) || void 0 === e ? void 0 : e.navigationStart) || 0) : Date.now()
    }
    var z = {},
        q = {};

    function J(e) {
        var t = [];

        function r(r, n, o, a = !1) {
            var i;
            if (Trace.traceBegin(r, n), !a) {
                var s = {
                    category: r,
                    name: n,
                    timeStamp: Z(),
                    args: o || {}
                };
                t.push(s), "Framework" === r && wxNativeConsole.info(`[Trace][B] ${n} @ ${s.timeStamp} ${s.args.path||""}`), null === (i = z[s.category]) || void 0 === i || i.forEach((t => t(s, e))), G("B", s)
            }
        }

        function n(r, n = !1) {
            var o, a;
            if (Trace.traceEnd(), !n) {
                var i = Z(),
                    s = t.pop();
                if (!s) return wxNativeConsole.error("[Trace] Must call traceBeginEvent before traceEndEvent."), k().assertWithIDKey(!1, 6), void k().errorReport({
                    key: "appServiceSDKScriptError",
                    error: new Error(`traceEndEvent mismatch, args=${JSON.stringify(r||{})}`)
                });
                var l = s.args,
                    c = s.timeStamp;
                s.timeStamp = i, s.args = r || s.args, "Framework" === s.category && wxNativeConsole.info(`[Trace][E] ${s.name} @ ${s.timeStamp} ${(null===(o=s.args)||void 0===o?void 0:o.path)||""}`), null === (a = q[s.category]) || void 0 === a || a.forEach((t => t(s, c, l, e))), G("E", s)
            }
        }

        function o(e, t) {
            r("API", e, t, H())
        }

        function a() {
            n(void 0, H())
        }
        return {
            traceBeginEvent: r,
            traceEndEvent: n,
            traceBeginAPI: o,
            traceEndAPI: a,
            useTraced: function(e, t, o, a) {
                return function(...i) {
                    try {
                        return r(e, t, a), o.apply(this, i)
                    } finally {
                        n()
                    }
                }
            },
            useTracedEnd: function(e) {
                return function(...t) {
                    try {
                        return e(...t)
                    } finally {
                        n()
                    }
                }
            },
            traceFlag: function(t, r, n) {
                var o, a, i = Z(),
                    s = {
                        category: t,
                        name: r,
                        timeStamp: i,
                        args: n || {}
                    };
                Trace.traceInstant(t, r), "Framework" === t && wxNativeConsole.info(`[Trace][I] ${r} @ ${i}`), null === (o = z[t]) || void 0 === o || o.forEach((t => t(s, e))), G("B", s), G("E", s), null === (a = q[t]) || void 0 === a || a.forEach((t => t(s, i, n, e)))
            },
            useTracedApi: function(e, t, r) {
                return function(...n) {
                    try {
                        return o(e, r), t.apply(this, n)
                    } finally {
                        a()
                    }
                }
            },
            useTracedApiEnd: function(e) {
                return function(...t) {
                    try {
                        return e.apply(this, t)
                    } finally {
                        a()
                    }
                }
            }
        }
    }
    const K = J(Infinity);
    var X = null,
        Y = !1,
        Q = !1,
        ee = "scheduleResize",
        te = e => {
            if (X = e, !Y) {
                Y = !0;
                var t = !1,
                    r = () => {
                        t || (t = !0, Y = !1, "function" == typeof ne && ne(X), b.emit(ee, X))
                    };
                setTimeout(r, 16), requestAnimationFrame(r)
            }
        },
        re = (e, t) => {
            var r = !Q;
            if (Q = !0, !t && e.pageOrientation) {
                var n = e.pageOrientation.originalPageOrientation;
                if (r && "landscape" === n && e.size.windowWidth > e.size.windowHeight);
                else if (r && "portrait" === (n || "portrait") && e.size.windowWidth < e.size.windowHeight);
                else if ("auto" !== n && !e.pageOrientation.setPageOrientation) return
            }
            te(e)
        };
    m("onViewDidResize", (e => {
        re(e, !1)
    })), m("onAppRouteResized", (e => {
        re(e, !0)
    }));
    var ne;

    function oe() {}
    var ae = 0,
        ie = [],
        se = [],
        le = ({
            type: e = "wx",
            name: t,
            args: r = {},
            ext: n = {},
            pluginId: o = ""
        }) => {
            ie[ae] = {
                success: r.success || oe,
                fail: r.fail || oe,
                complete: r.complete || oe
            }, se[ae] = {
                beforeAll: n.beforeAll || oe,
                beforeSuccess: n.beforeSuccess || oe,
                afterSuccess: n.afterSuccess || oe,
                beforeFail: n.beforeFail || oe,
                afterFail: n.afterFail || oe,
                afterAll: n.afterAll || oe
            }, x("invokeAppServiceMethod", {
                name: t,
                type: e,
                args: r,
                callbackId: ae,
                pluginId: o
            }), ae += 1
        };
    S("callbackAppServiceMethod", (({
        res: e,
        isSuccess: t,
        callbackId: r
    }) => {
        var n = ie[r];
        delete ie[r];
        var o = se[r];
        delete se[r], null == o || o.beforeAll(e), t ? (null == o || o.beforeSuccess(e), n.success(e), null == o || o.afterSuccess(e)) : (null == o || o.beforeFail(e), n.fail(e), null == o || o.afterFail(e)), n.complete(e), null == o || o.afterAll(e)
    }));
    var ce = Object.create(null);
    S("invokeWebviewMethod", (({
        name: e,
        args: t,
        callbackId: r
    }) => {
        ((e, t, r) => {
            var n = ce[e];
            "function" == typeof n ? n(t, (e => {
                r(e)
            })) : wxNativeConsole.error(`No such viewMethod "${e}" found. Ignored.`)
        })(e, t, (e => {
            x("callbackWebviewMethod", {
                res: e,
                callbackId: r
            })
        }))
    }));
    var ue = (e, t, r = !1) => {
        !r && ce[e] && wxNativeConsole.warn(`viewMethod '${e}' is registered. If it meets expectations, please ignore this warning.`), ce[e] = t
    };

    function de(e) {
        var t = e.match(/(.+?):([-_a-z0-9]+)(?= |:|$)/i);
        return t ? {
            method: t[1],
            state: t[2],
            detail: e.slice(t[0].length + 1)
        } : {
            methods: "",
            state: "",
            detail: ""
        }
    }
    var fe = "cookies",
        pe = () => {},
        _e = 0,
        ve = (e, t) => {
            try {
                return JSON.parse(e)
            } catch (e) {
                return t
            }
        },
        he = (e, t) => {
            wxNativeConsole.error(e, t, (new Error).stack), Reporter.errorReport({
                key: "appSubContextSDKScriptError",
                error: new Error(`${e};${t}`)
            })
        },
        ge = (e, t) => {
            N("getGlobalStorage", e, t || pe)
        },
        me = (e, t) => {
            N("setGlobalStorage", e, t || pe)
        },
        ye = e => {
            N("getGlobalStorageInfo", {}, e || pe)
        },
        we = (e, t) => {
            N("removeGlobalStorage", e, t || pe)
        },
        be = {
            createOrGetStorageGroup(e, t, r, n) {
                new xe(e + ":" + t, r)._prepare(n || pe)
            },
            _setMetadata(e, t) {
                me({
                    key: ":~",
                    data: JSON.stringify(e)
                }, (e => {
                    "ok" !== de(e.errMsg).state && he("Failed set storage metadata", e.errMsg), t(null, this)
                }))
            },
            _logGlobalStorageInfo() {
                ye((e => {}))
            },
            gabbageCollectCheck(e) {
                ge({
                    key: ":~"
                }, (t => {
                    var r = {
                            lastGabbageCollectionCheckUnixTimestamp: 0
                        },
                        n = de(t.errMsg);
                    return "ok" !== n.state ? "data not found" !== n.detail && he("Failed get storage metadata while gabbage collection", t.errMsg) : r = ve(t.data, r), 1e3 * r.lastGabbageCollectionCheckUnixTimestamp + 864e5 >= Date.now() ? e() : (r.lastGabbageCollectionCheckUnixTimestamp = Math.floor(Date.now() / 1e3), be._setMetadata(r, (() => {
                        be.gabbageCollect(e)
                    })), null)
                }))
            },
            gabbageCollect(e) {
                ye((t => {
                    if ("ok" === de(t.errMsg).state) {
                        var r = !1;
                        1024 * t.currentSize >= 16777216 && (he("Detected hard limit while gabbage collection", "At size " + t.currentSize), r = !0);
                        var n = Math.floor(Date.now() / 1e3),
                            o = t.keys || [],
                            a = [],
                            i = {},
                            s = {};
                        o.forEach((e => {
                            if (":~" !== e) {
                                var [t] = e.split("::", 2);
                                if (t === e) {
                                    var r = t;
                                    ":~" === r.slice(-2) ? s[r] = "{}" : a.push(r)
                                } else i[t] ? i[t].push(e) : i[t] = [e]
                            }
                        })), ((e, t) => {
                            t = t || pe;
                            var r = Object.keys(e),
                                n = 0,
                                o = () => {
                                    if (n === r.length) return t();
                                    var a = r[n];
                                    return ge({
                                        key: a
                                    }, (t => {
                                        var r = de(t.errMsg);
                                        "ok" !== r.state ? "data not found" !== r.detail && he("Failed get storage item while gabbage collection", t.errMsg) : e[a] = t.data, n++, o()
                                    })), null
                                };
                            o()
                        })(s, (() => {
                            for (var t in s) {
                                var o = t.slice(0, -2),
                                    l = ve(s[t], {}).expireUnixTimestamp;
                                if (r || !(l > n)) {
                                    var c = i[o];
                                    a.push(t), c && a.push(...c)
                                }
                            }
                            for (var u in i) {
                                var d = u + ":~";
                                if (null === s[d] || void 0 === s[d]) {
                                    var f = i[u];
                                    f && a.push(...f)
                                }
                            }((e, t) => {
                                t = t || pe;
                                var r = 0,
                                    n = () => r === e.length ? t() : (we({
                                        key: e[r]
                                    }, (e => {
                                        "ok" !== de(e.errMsg).state && he("Failed remove storage item while gabbage collection", e.errMsg), r++, n()
                                    })), null);
                                n()
                            })(a, e)
                        }))
                    } else he("Failed listing storage keys while gabbage collection", t.errMsg)
                }))
            }
        };
    class xe {
        constructor(e, t) {
            this._name = e, this._needUpdateExpireTime = !!t, this._expireUnixTimestamp = Math.ceil((t || Date.now() + 12096e5) / 1e3)
        }
        _prepare(e) {
            ge({
                key: this._name + ":~"
            }, (t => {
                var r = de(t.errMsg);
                return "ok" !== r.state ? ("data not found" !== r.detail && he("Failed get storage group metadata", t.errMsg), this._setMetadata({
                    expireUnixTimestamp: this._expireUnixTimestamp
                }, e), null) : ve(t.data, {
                    expireUnixTimestamp: 0
                }).expireUnixTimestamp <= Math.floor(Date.now() / 1e3) ? (be.gabbageCollect((() => {
                    this._setMetadata({
                        expireUnixTimestamp: this._expireUnixTimestamp
                    }, e)
                })), null) : this._needUpdateExpireTime ? (this._setMetadata({
                    expireUnixTimestamp: this._expireUnixTimestamp
                }, e), null) : e(null, this)
            }))
        }
        _setMetadata(e, t) {
            me({
                key: this._name + ":~",
                data: JSON.stringify(e)
            }, (() => {
                t(null, this)
            }))
        }
        get(e, t) {
            t = t || pe, ge({
                key: this._name + "::" + e
            }, (e => {
                var r = de(e.errMsg);
                return "ok" !== r.state ? "data not found" === r.detail ? t(null, void 0) : (he("Failed get storage group data", e.errMsg), t(e.errMsg)) : t(null, ve(e.data, void 0))
            }))
        }
        set(e, t, r) {
            r = r || pe;
            var n = JSON.stringify(t),
                o = () => {
                    me({
                        key: this._name + "::" + e,
                        data: String(n)
                    }, (e => "ok" !== de(e.errMsg).state ? (he("Failed set storage group data", e.errMsg), r(e.errMsg)) : r(null)))
                };
            (_e += n.length) === n.length || _e > 65536 ? be.gabbageCollectCheck(o) : o()
        }
        delete(e, t) {
            t = t || pe, we({
                key: this._name + "::" + e
            }, (e => "ok" !== de(e.errMsg).state ? (he("Failed delete storage group data", e.errMsg), t(e.errMsg)) : t(null)))
        }
    }
    var Ee = 7776e6,
        Ce = null,
        Se = (e, t) => {
            Ce ? Ce.set("cookies", e.cookies, (e => {
                t(e)
            })) : be.createOrGetStorageGroup(fe, e.appId, Date.now() + Ee, ((r, n) => {
                n ? (Ce = n, Se(e, t)) : t(r)
            }))
        },
        Ae = (e, t) => {
            Ce ? Ce.get("cookies", ((e, r) => {
                t(r)
            })) : be.createOrGetStorageGroup(fe, e.appId, Date.now() + Ee, ((r, n) => {
                n ? (Ce = n, Ae(e, t)) : t()
            }))
        };
    ue("setCookiesToGlobalStorage", ((e, t) => {
        Se(e, t)
    })), ue("getCookiesFromGlobalStorage", ((e, t) => {
        Ae(e, t)
    }));
    var Oe = (e, t) => {
            var r, n, o = {
                ...e,
                ...t
            };
            "string" == typeof o.path && o.path.trim().length > 0 && (r = (o.path || "").trim().replace(/(\?|$)/, ".html$1")), n = e => {
                var t = e.cookies;
                t ? (o.privateExtraData = o.privateExtraData || {}, o.privateExtraData.cookies = t) : o.privateExtraData && delete o.privateExtraData.cookies, le({
                    name: "navigateToMiniProgram",
                    type: "bridge",
                    args: {
                        ...o,
                        path: r
                    },
                    ext: {
                        beforeSuccess() {
                            le({
                                type: "custom",
                                name: "reportRecycledAPI",
                                args: {
                                    name: "navigateToMiniProgram",
                                    scene: 1
                                }
                            })
                        }
                    }
                })
            }, le({
                type: "custom",
                name: "getPassCookieString",
                args: {
                    success: n
                }
            })
        },
        {
            EventEmitter: Te
        } = Foundation,
        Ie = new Te,
        Re = {};
    Object.prototype.hasOwnProperty;

    function Ne(e, t = {}) {
        g(t)("enterContact", e, {
            beforeSuccess(e) {
                var t;
                e.path && (e.path = `/${t=e.path,"string"==typeof t?-1!==t.indexOf("?")?t.replace(/\.html\?/,"?"):t.replace(/\.html$/,""):t}`)
            }
        })
    }
    var Pe = (e, t, r = !0) => new Promise(((n, o) => {
        le({
            name: "getRealRouteWithProtocol",
            type: "custom",
            args: {
                lastRoute: e,
                relativeRoute: t,
                needTrans: r,
                success: ({
                    route: e
                }) => {
                    n(e)
                },
                fail: e => {
                    o(e)
                }
            }
        })
    }));

    function ke(e = {}, t = {}) {
        if (e.showMessageCard && (e.sendMessagePath || e.sendMessageImg)) {
            var r, n = Object.assign({}, e);
            new Promise(((e, t) => {
                le({
                    name: "getCurrentRoute",
                    type: "custom",
                    args: {
                        success: ({
                            currentRoute: t
                        }) => {
                            e(t)
                        },
                        fail: e => {
                            t(e)
                        }
                    }
                })
            })).then((t => (r = t, e.sendMessagePath ? Pe(r, e.sendMessagePath, !0) : void 0))).then((t => (n.sendMessagePath = t, e.sendMessageImg && !/^(http|https|wxfile):\/\//.test(e.sendMessageImg) ? Pe(r, e.sendMessageImg, !1) : e.sendMessageImg))).then((e => {
                n.sendMessageImg = e, Ne(n, t)
            })).catch((t => {
                "function" == typeof e.fail && e.fail(t)
            }))
        } else e.privateEnterContact ? g(t)("privateEnterContact", e) : Ne(e, t)
    }
    ue("appServiceEnterContact", ((e, t) => {
        e.complete = function(e) {
            t && t(e)
        }, ke(Object.assign({
            sessionFrom: "wxapp",
            businessId: "",
            sendMessageImg: "",
            sendMessageTitle: "",
            showMessageCard: !1,
            sendMessagePath: ""
        }, e))
    })), ue("quicklyAddBrandContact", ((e, t) => {
        e.complete = function(e) {
            e.errMsg && (e.errMsg = e.errMsg.replace(/^private_/, "")), t && t(e)
        }, h("private_quicklyAddBrandContact", e)
    }));
    var Me = {},
        De = {
            invoke: N,
            invokeAs: P,
            on: u,
            publish: x,
            publishAsPage: E,
            subscribe: S,
            subscribeAsPage: e => function(t, r) {
                _(t, e, r)
            },
            mainContext: {
                publish(...e) {
                    Foundation.onLoad((() => {
                        JSContext.publish(...e)
                    }))
                },
                subscribe(...e) {
                    Foundation.onLoad((() => {
                        JSContext.subscribe(...e)
                    }))
                }
            },
            onAppDataChange: e => {
                ue("appDataChange", ((t, r) => {
                    e(t, r)
                }))
            },
            transformRpx: e => e,
            traceBeginEvent: K.traceBeginEvent,
            traceEndEvent: K.traceEndEvent,
            useTraced: K.useTraced,
            useTracedEnd: K.useTracedEnd,
            traceFlag: K.traceFlag,
            createTracer: J,
            onWindowResize: e => {
                b.on(ee, e)
            },
            publishPageEvent: (e, t, r, n) => {
                E(n)("PAGE_EVENT", {
                    eventName: e,
                    data: t,
                    nodeId: r
                })
            },
            getRealRoute: function e(t = "", r = "") {
                var n;
                if (0 === r.indexOf("/")) n = r.substr(1);
                else if (0 === r.indexOf("./")) n = e(t, r.substr(2));
                else {
                    var o, a, i = r.split("/");
                    for (o = 0, a = i.length; o < a && ".." === i[o]; o++);
                    i.splice(0, o), r = i.join("/");
                    var s = t.length > 0 ? t.split("/") : [];
                    s.splice(s.length - o - 1, o + 1), n = s.concat(i).join("/")
                }
                return n
            },
            navigateToMiniProgram: (e = {}) => {
                e.__noCheckBeforeNavigateToMiniProgram ? Oe(e) : le({
                    name: "_checkBeforeNavigateToMiniProgram",
                    type: "custom",
                    args: {
                        appId: e.appId,
                        path: e.path,
                        shortLink: e.shortLink,
                        success(t) {
                            Oe(e, {
                                appId: t.appId,
                                path: t.path,
                                sourcetype: t.sourcetype
                            })
                        },
                        fail(t) {
                            "function" == typeof e.fail && e.fail(t), "function" == typeof e.complete && e.complete(t)
                        }
                    }
                })
            },
            enterContact: ke,
            triggerPageReRender() {},
            onPageReRender(e) {},
            offPageReRender(e) {}
        };
    ["showDatePickerView", "insertMap", "removeMap", "updateMapCovers", "insertVideoPlayer", "removeVideoPlayer", "insertShareButton", "updateShareButton", "removeShareButton", "setNavigationBarTitle", "setNavigationBarColor", "showNavigationBarLoading", "hideNavigationBarLoading", "setBackgroundTextStyle", "setBackgroundColor", "updatePerfData", "traceEvent", "webViewReadyToTerminate", "saveInitialRenderingCache", "navigateBackMiniProgram", "setNavigationBarRightButton"].forEach((e => {
        De[e] = (t, r) => {
            g({
                pageId: r
            })(e, t)
        }
    }));
    var Fe = {
        wx: ["login", "getSetting", "clearStorage", "getSystemInfo", "startCustomFacialRecognitionVerify", "startCustomFacialRecognitionVerifyAndUploadVideo", "saveImageToPhotosAlbum", "setWxInterfaceDisabled"],
        bridge: ["getPermissionBytes", "authorize", "launchApplication", "navigateBackApplication", "navigateBackNative", "operateVideoPlayer", "operateLivePlayer", "getLocation", "downloadAppInternal", "getInstallState", "addDownloadTaskStraight", "queryDownloadTask", "installDownloadTask", "pauseDownloadTask", "resumeDownloadTask", "cancelDownloadTask", "writeCommData", "getNetworkType", "batchGetContact", "showToast", "hideToast", "exitMiniProgram", "openADCanvas", "showActionSheet", "preloadMiniProgramEnv", "hideHomeButton", "predownloadMiniProgramPackage", "setTabBarStyle", "batchPreloadMiniProgram", "showModal"],
        custom: ["checkPermission", "redirectTo", "navigateTo", "navigateToWithRelatedInfo", "switchTab", "reLaunch", "navigateBack", "shareImageMessage", "setPrivateExtraData", "chooseInvoice", "chooseInvoiceTitle", "getCurrentWebviewId"]
    };

    function je(e) {
        i ? Me[e] = De[e] : Object.defineProperty(Me, e, {
            get: () => "function" != typeof De[e] ? De[e] : (...t) => {
                try {
                    return De[e](...t)
                } catch (e) {
                    return void
                    function(e, t) {
                        "[object Error]" === Object.prototype.toString.apply(e) ? Foundation.onLoad((() => {
                            Reporter.errorReport({
                                key: "appSubContextThirdScriptError",
                                error: e,
                                extend: t
                            })
                        })) : Reporter.errorReport({
                            key: "appSubContextThirdScriptError",
                            error: e,
                            extend: t
                        })
                    }(e)
                }
            },
            enumerable: !0,
            configurable: !0
        })
    }
    Object.keys(Fe).forEach((e => {
        Fe[e].forEach((t => {
            De[t] = r => {
                le({
                    type: e,
                    name: t,
                    args: r
                })
            }
        }))
    })), Object.keys(De).forEach((e => {
        je(e)
    }));
    var Le = (e => t => (r, n) => {
            Re[r] || (e(r, ((e, t) => {
                Ie.emit(r, {
                    res: e,
                    pageId: t
                })
            })), Re[r] = !0), Ie.on(r, (({
                res: e,
                pageId: r
            }) => {
                !0 === t(e, r) && n(e, r)
            }))
        })(S),
        Be = {
            wx: Me,
            createVDTunnel: e => ((e, t) => ({
                vdSync(t, r) {
                    e("vdSync", t, r)
                },
                vdSyncBatch(t, r) {
                    e("vdSyncBatch", t, r)
                },
                onVdSync(e) {
                    t("vdSync", e)
                },
                onVdSyncBatch(e) {
                    t("vdSyncBatch", e)
                }
            }))(C(e), Le(((t, r) => r === e))),
            traceBeginEvent: K.traceBeginEvent,
            traceEndEvent: K.traceEndEvent,
            predefinedColor: {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgrey: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                grey: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32",
                transparent: "#00000000"
            }
        };
    const $e = Be;
    __sclSDK__ = t.default
})();
var __userActionTracer__, __virtualDOM__, __webviewEngine__, wx = __sclSDK__.wx;
(() => {
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
        convertClassList: () => r,
        getTextContentMaxLayer: () => l,
        getTextContentMaxLength: () => c,
        limitContent: () => n,
        setActionChainReportTypes: () => s,
        shouldReportEvent: () => u
    });
    var r = e => {
            try {
                return "[object Array]" !== Object.prototype.toString.call(e) ? [] : e.join(",")
            } catch (e) {
                return ""
            }
        },
        n = (e, t) => "string" != typeof e ? null : (e.length > 30 && (e = e.slice(0, t)), e),
        o = {},
        a = 3,
        i = 30,
        s = e => {
            e && "object" == typeof e && (o = e.eventType || {}, a = void 0 !== e.textContentMaxLayer ? e.textContentMaxLayer : 3, i = void 0 !== e.textContentMaxLength ? e.textContentMaxLength : 30)
        },
        l = () => a,
        c = () => i,
        u = e => o[e];
    __userActionTracer__ = t
})(), (() => {
    "use strict";
    var e = {
        n: t => {
            var r = t && t.__esModule ? () => t.default : () => t;
            return e.d(r, {
                a: r
            }), r
        },
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
            return this || new Function("return this")()
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
    var t = {};
    e.r(t), e.d(t, {
        SKYLINE_TABBAR_VIEW_ID: () => I,
        addIntersectionObserver: () => Di,
        addMediaQueryObserver: () => Bi,
        applyInitialRenderingCache: () => Io,
        beginTapMark: () => lr,
        callRestoredLifeTimes: () => vo,
        callSavedLifeTimes: () => _o,
        checkTapMark: () => ur,
        customComponentMode: () => as,
        dispatchViewRoute: () => jo,
        enableUpdateWxAppCode: () => Ji,
        endTapMark: () => sr,
        getComponentCount: () => fo,
        getDomTreeByPageId: () => Ta,
        getEntryFile: () => Hn,
        getMergeDataFunc: () => is,
        getNodeById: () => Xa,
        getNodeId: () => Ya,
        getPageId: () => ri,
        getPluginRoutePrefix: () => kn,
        getRestoreState: () => ls,
        getRootCompName: () => ti,
        getRootNode: () => Qa,
        getRootNodeId: () => ei,
        getSubPackagePlugin: () => Gn,
        getWorkletIdByName: () => ma,
        isPageExist: () => ss,
        isShowCustomTabBarByConfig: () => D,
        isSubPackageIndependent: () => Fn,
        matchSubPackageName: () => Dn,
        newPage: () => Oa,
        newTabBar: () => Sa,
        prepareInitRender: () => us,
        prepareSubPackagesStyle: () => Ma,
        removeIntersectionObserver: () => Fi,
        removeMediaQueryObserver: () => $i,
        setEventHandlerChangeListener: () => Vr,
        setModelValueData: () => Yo,
        setPageType: () => ne,
        spreadScopeDataToDOMNode: () => ns,
        startInitRender: () => cs,
        updateWxAppCode: () => Xi,
        viewThreadHideTabBar: () => L,
        viewThreadShowTabBar: () => j,
        wrapTapMark: () => cr
    });
    var r = "undefined" != typeof exparser ? exparser : {},
        n = "webview";
    void 0 !== __useSclExparser__ && __useSclExparser__ && "undefined" != typeof __sclEngine__ && (n = "scl"), "undefined" != typeof __skylineEngine__ && (n = "skyline"), "undefined" != typeof xrFrame && (n = "xr-frame"), "scl" === n ? r = __sclEngine__.exparser || r || {} : "skyline" === n ? r = __skylineEngine__.getRuntime().getExparser() || r || {} : "xr-frame" === n && (r = xrFrame.getExparser() || r || {});
    var o, a = () => r,
        i = () => __skylineEngine__.getRuntime(),
        s = () => n,
        l = e => o = e,
        c = () => "undefined" != typeof __webViewSDK__ ? __webViewSDK__ : void 0 !== __sclSDK__ ? __sclSDK__ : "undefined" != typeof __skylineSDK__ ? __skylineSDK__ : "undefined" != typeof __xrFrameSDK__ ? __xrFrameSDK__ : void 0,
        u = () => __appServiceSDK__,
        d = () => WeixinJSBridge,
        f = a(),
        p = /^[-+a-z]+:\/\//i,
        _ = function(e, t) {
            if (p.test(t)) return t;
            var r = e.match(p),
                n = "";
            r && (n = r[0], e = e.slice(n.length)), 0 === t.indexOf("/") && (e = "");
            var o = e.split("/");
            o.pop();
            for (var a = t.split("/"); a.length;) {
                var i = a.shift();
                "" !== i && "." !== i && (".." !== i ? o.push(i) : o.pop())
            }
            return n + o.join("/")
        },
        v = t => {
            var r = (void 0 === window ? e.g : window).__wcc_version_info__;
            if (r) return r[t]
        },
        h = () => Math.floor(4294967296 * (1 + Math.random())).toString(16).slice(1),
        g = e => Object.keys(e).map((t => e[t])),
        m = (e, t, r) => {
            e instanceof f.Component && (t > 0 && r(e), t && e.shadowRoot instanceof f.Element && m(e.shadowRoot, t, r), t < 0 && r(e));
            for (var n = e.childNodes, o = 0; o < n.length; o++) n[o] instanceof f.Element && m(n[o], t, r)
        },
        y = e => {
            if (null == e) return e;
            var t = typeof e;
            if ("string" === t || "number" === t || "boolean" === t) return e;
            if (Array.isArray(e)) {
                for (var r = Array(e.length), n = 0; n < e.length; ++n) r[n] = y(e[n]), void 0 === r[n] && (r[n] = null);
                return r
            }
            if ("object" === t) {
                for (var o = {}, a = Object.keys(e), i = 0; i < a.length; ++i) o[a[i]] = y(e[a[i]]), void 0 === o[a[i]] && delete o[a[i]];
                return o
            }
        },
        w = e => {
            var t = {};
            return e.forEach((e => {
                t[e] = {
                    ok: !1,
                    callbacks: []
                }
            })), {
                notify(e) {
                    t[e] && (t[e].ok = !0, t[e].callbacks.forEach((e => e())), t[e].callbacks = [])
                },
                on(e, r) {
                    t[e] && (t[e].ok ? r() : t[e].callbacks.push(r))
                },
                isNotified: e => t[e] && t[e].ok
            }
        },
        b = a();
    const x = class {
            constructor() {
                this._idNodeMap = {}
            }
            getAll() {
                return this._idNodeMap
            }
            getNodeById(e) {
                return this._idNodeMap[e]
            }
            getNodeId(e) {
                return e.__wxTmplId
            }
            allocNodeId(e, t) {
                var r = t || h();
                return e.__wxTmplId = r, this._idNodeMap[e.__wxTmplId] = e, r
            }
            addNode() {}
            removeNode(e) {
                if (e.__wxTmplId && delete this._idNodeMap[e.__wxTmplId], e.childNodes)
                    for (var t = 0; t < e.childNodes.length; t++) this.removeNode(e.childNodes[t]);
                e.shadowRoot instanceof b.Element && this.removeNode(e.shadowRoot)
            }
        },
        E = BabelRuntimeHelpers.asyncToGenerator;
    var C = e.n(E),
        S = {
            WX_EVENT: 11,
            REQUEST_SAVE: 12,
            COMPONENT_DEF: 21,
            SAVE_STATE: 22,
            RESTORE_STATE: 23,
            FLOW_INITIAL_RENDERING_CACHE: 24,
            FLOW_CLEAR_INITIAL_RENDERING_CACHE: 25,
            FLOW_SET_SUBPACKAGE_LOADED: 26,
            SET_DATA_CALLBACK: 32,
            FLOW_SET_DATA: 33,
            FLUSH_BLOCKED: 43,
            FLOW_GROUP: 41,
            FLOW_GROUP_END: 42,
            FLOW_DEPTH: 2,
            FLOW_INITIAL_CREATION: 3,
            FLOW_UPDATE: 6,
            FLOW_DATA_OBSERVER: 8,
            FLOW_APPLY_PROPERTY: 4,
            FLOW_MINIPULATE_CHILD: 7,
            FLOW_CREATE_NODE: 5,
            FLOW_REPEAT: 9,
            FLOW_VIEW_INFO: 63,
            REQUEST_TAB: 51,
            COMPONENT_DEF_TAB: 52,
            FLOW_CREATE_TAB: 53,
            DESTROY_TAB: 54,
            FLOW_DESTROY_PAGE: 55,
            SHOW_TAB: 56,
            HIDE_TAB: 57,
            SCL_CONTEXT_READY: 58,
            REQUEST_BROADCAST_VIEW_ID: 61,
            RESPONSE_BROADCAST_VIEW_ID: 62,
            BANNING_MAP: 90,
            CALL_METHOD_FROM_WXS: 50,
            RESPONSE_VIEW_INFO: 64,
            MODEL_VALUE_CHANGE: 65,
            FLOW_SET_NODE_ANIMATION_INFO: 100,
            ANIMATION_TRANSITION_END: 101,
            FLOW_CLEAR_NODE_ANIMATION_INFO: 102,
            CLEAR_ANIMATION_COMPLETE: 103,
            FLOW_SET_NODE_NEXT_ANIMATION_INFO: 104,
            LOAD_COMPONENT_DEF: 110,
            FLOW_WAIT_COMPONENT: 112,
            FLOW_REPLACE_PLACEHOLDER: 113,
            FLOW_PEND_PLACEHOLDER_REPLACEMENT: 114,
            FLOW_COMPONENT_DEF_ADD: 120,
            FLOW_INJECT_SUBPACKAGE: 121,
            FLOW_INJECT_COMPONENT: 122,
            FLOW_HOT_UPDATE: 900,
            FLOW_HOT_UPDATE_CHILD: 901,
            FLOW_HOT_UPDATE_RESET: 902,
            UPDATE_COMPONENT_DEF: 903,
            UPDATE_PERFORMANCE_STAT: 800,
            ENABLE_UPDATE_PERFORMANCE_STAT: 801,
            DISABLE_UPDATE_PERFORMANCE_STAT: 802,
            ENABLE_GLOBAL_UPDATE_PERFORMANCE_STAT: 803,
            REQUEST_WORKLET_METHOD: 200,
            RESPONSE_WORKLET_METHOD: 201,
            FLOW_SET_NODE_ANIMATED_STYLE: 202,
            FLOW_CLEAR_NODE_ANIMATED_STYLE: 203,
            APPLY_NODE_ANIMATED_STYLE_END: 204,
            CLEAR_NODE_ANIMATED_STYLE_END: 205,
            XR_FRAME_CANVAS_CREATED: 300,
            XR_FRAME_CANVAS_READY: 301,
            FLOW_SET_ROOT_PROPERTIES: 302,
            XR_FRAME_COMP_OPTIONS: 303
        },
        A = {};
    Object.keys(S).forEach((e => {
        A[S[e]] = e
    }));
    var O = e => A[e] || `UNKNOWN_EVENT_${e}`,
        T = {
            ATTR: 0,
            ANIMATION: 1,
            WXS_STYLE: 2
        },
        I = 4294967297,
        R = 4294967298,
        N = "custom-tab-bar/index";
    class P {
        constructor() {
            this.__instances = void 0, this.__instances = new Map
        }
        add(e, t, r) {
            this.__instances.set(e, {
                tm: r,
                renderType: t
            })
        }
        get(e) {
            var t = this.__instances.get(e);
            return t || wxNativeConsole.warn(`[customTabBarManager] pageId: ${e} TabBar is not exists`), t
        }
        remove(e) {
            this.__instances.delete(e)
        }
        has(e) {
            return this.__instances.has(e)
        }
        getRenderType(e) {
            var t;
            return (null === (t = this.__instances.get(e)) || void 0 === t ? void 0 : t.renderType) || "webview"
        }
    }
    P.MANAGER = void 0;
    var k = () => (P.MANAGER || (P.MANAGER = new P), P.MANAGER),
        M = e => {
            var t, r, n, o, a = (null === (t = __wxConfig) || void 0 === t || null === (r = t.tabBar) || void 0 === r ? void 0 : r.renderer) || "webview";
            if (Array.isArray(null === (n = __wxConfig) || void 0 === n || null === (o = n.tabBar) || void 0 === o ? void 0 : o.list))
                for (var i = __wxConfig.tabBar.list, s = 0; s < i.length; s++) {
                    var l = i[s];
                    if (l.pagePath === `${e}.html`) {
                        "string" == typeof l.renderer && (a = l.renderer);
                        break
                    }
                }
            return wxNativeConsole.info(`[CustomTabBar] getCustomTabBarRenderer pagePath: ${e}, renderer: ${a}`), "cover-view" === a ? "scl" : a || "webview"
        },
        D = e => {
            var t, r;
            if (Array.isArray(null === (t = __wxConfig) || void 0 === t || null === (r = t.tabBar) || void 0 === r ? void 0 : r.list))
                for (var n = __wxConfig.tabBar.list, o = 0; o < n.length; o++) {
                    var a = n[o];
                    if (a.pagePath === `${e}.html`) return !a.hide
                }
            return !1
        },
        F = () => {
            var e, t;
            return !(null === (e = __wxConfig) || void 0 === e || null === (t = e.tabBar) || void 0 === t || !t.custom)
        },
        j = () => {
            var e, t, r = s();
            "skyline" === r ? null === (e = window.__TAB_BAR__) || void 0 === e || null === (t = e.__domElement) || void 0 === t || t.setStyle("pointer-events: none; display: flex;") : "scl" === r && __sclEngine__.showTabBarContainer()
        },
        L = () => {
            var e, t, r = s();
            "skyline" === r ? null === (e = window.__TAB_BAR__) || void 0 === e || null === (t = e.__domElement) || void 0 === t || t.setStyle("pointer-events: none; display: none;") : "scl" === r ? __sclEngine__.hideTabBarContainer() : "webview" === r && window.__TAB_BAR__ && window.__TAB_BAR__.parentNode.removeChild(window.__TAB_BAR__)
        },
        B = e => {
            var t = k().get(e),
                r = null == t ? void 0 : t.renderType;
            "webview" !== r ? te(S.HIDE_TAB, {}, "skyline" === r ? I : "scl" === r ? R : e) : te(S.DESTROY_TAB, [], e)
        },
        $ = {},
        W = -1,
        U = null,
        G = !1,
        H = () => G,
        V = [],
        Z = null,
        z = null,
        q = !1,
        J = {
            [I]: "skyline",
            [R]: "scl"
        },
        K = {},
        X = {},
        Y = (new Set, (e, t) => {
            var r = "webview" === s() || "scl" === s() ? e : "xr-frame" === s() ? [...e] : e.map((e => y(e))),
                n = r.shift();
            if ("" === n) return W = t, void(U && U(t));
            t = t || 0, "webview" === s() && (t = 0), Q(t, n, r)
        }),
        Q = (e, t, r) => {
            var n, o = null;
            if ($[e] && (o = $[e][t]), !o && $.$GLOBAL && (o = $.$GLOBAL[t]), !(o || "skyline" !== s() || null !== (n = X[e]) && void 0 !== n && n.isReady)) return X[e] || (X[e] = {
                queue: [],
                isReady: !1
            }), void X[e].queue.push({
                ev: t,
                data: r
            });
            o ? o(r, t, e) : wxNativeConsole.error(`[VD] recvData no handler for event=${t}, pageId=${e}`)
        },
        ee = () => {
            z && (z = clearTimeout(z)), V.length && K[Z].vdSyncBatch(V, Z && [Z]), Z = null, V = [], q = !1
        },
        te = (e, t, r, n) => (t = [e].concat(t), "webview" !== J[r] ? K[r] ? void K[r].vdSync(t, r && [r]) : void wxNativeConsole.warn(`pageId: ${r}, ev: ${e}. Ignore sendData cause Page is removed. `) : ("webview" === J[r] && (r = 0), !q || n ? (ee(), q = !0, void K[r].vdSync(t, r && [r])) : (Z !== r && ee(), Z = r, V.push(t), q = !0, void(z || (z = setTimeout((() => {
            z = null, ee()
        }), 15)))))),
        re = e => {
            e.__registered || (e.__registered = !0, e.onVdSync(((e, t) => {
                void 0 === J[t] && ne(t, "webview"), Y(e, t)
            })), e.onVdSyncBatch(((e, t) => {
                void 0 === J[t] && ne(t, "webview");
                for (var r = 0; r < e.length; r++) Y(e[r], t)
            })))
        };
    var ne = (e, t) => {
            var r;
            null !== (r = K[e]) && void 0 !== r && r.__registered && J[e] === t || (J[e] = t, K[e] = "webview" === t ? c()._virtualDOMTunnel : c().createVDTunnel(e), re(K[e]))
        },
        oe = e => J[e],
        ae = (e, t, r) => {
            if ("" === e) return U = t, void(W >= 0 && U(W));
            $[r = r || 0] || ($[r] = {}), $[r][e] = t
        },
        ie = {},
        se = (e, t) => {
            ie[e] = t
        },
        le = e => {
            Object.keys(ie).forEach((t => {
                ae(t, ie[t], e)
            })), X[e] && (X[e].isReady = !0, X[e].queue.forEach((({
                ev: t,
                data: r
            }) => {
                Q(e, t, r)
            })), X[e].queue = [])
        },
        ce = a(),
        ue = {},
        de = 1,
        fe = (e, t, r) => {
            void 0 === e.__resizers ? (e.__resizers = [], (e => {
                var t = de++;
                ue[t] = e, ce.Observer.create((e => {
                    "detached" === e.status && delete ue[t]
                })).observe(e, {
                    attachStatus: !0
                })
            })(e), e.__resizers[t] = r) : e.__resizers[t] = r
        },
        pe = (e, t) => {
            void 0 !== e.__resizers && (e.__resizers[t] = void 0)
        },
        _e = a(),
        ve = null,
        he = null,
        ge = e => {
            e.$$.style.display = "none"
        },
        me = e => {
            var t = e => {
                e instanceof _e.Component ? ge(e) : e instanceof _e.VirtualNode ? e.childNodes.forEach((e => {
                    t(e)
                })) : e instanceof _e.TextNode && (e.textContent = ""), e.__banned = !0
            };
            t(e)
        },
        ye = (e, t) => {
            me(e), ((e, t) => {
                he || (he = _e.registerElement({
                    options: {
                        renderingMode: "native"
                    }
                }));
                var r = e.createComponent("wx-hint", he),
                    n = document.createElement("div");
                n.innerText = t.hint, r.$$.appendChild(n), e.appendChild(r, e.childNodes[0])
            })(e, t)
        },
        we = a(),
        be = Object.prototype.hasOwnProperty,
        xe = we.dataUtils.deepCopy,
        Ee = (e, t, r, n, o) => {
            for (var a = o ? xe(e) : e, i = 0; i < t.length; i++) {
                var s = t[i],
                    l = s[0],
                    c = s[1],
                    u = s[2];
                if (void 0 !== c) {
                    for (var d = a, f = l[0], p = 1; p < l.length; p++)
                        if (null != (d = d[f]) && d.__wxspec__ && (d = d.__value__), f = l[p], null != d && !be.call(d, f)) {
                            d = null;
                            break
                        } null != d && be.call(d, f) && (r ? null != u && "object" == typeof c && c instanceof Array == u instanceof Array ? d[f] = {
                        __value__: u,
                        __wxspec__: !0
                    } : null != d[f] && d[f].__wxspec__ || (d[f] = {
                        __value__: d[f],
                        __wxspec__: !0
                    }) : d[f] = n ? xe(c, !1) : c)
                }
            }
            return a
        };
    const Ce = {
        restoring: null,
        idDataMap: null,
        compIdArr: null,
        compExtraDataMap: null,
        compIdArrIndex: 0,
        onReady: () => {}
    };
    a();
    var Se = 0,
        Ae = 0,
        Oe = 0,
        Te = (e, t, r, n) => {
            var o = r - t,
                a = r - e,
                i = Math.ceil(Oe / (Ae || 1)),
                s = [Se, 1, o, Ae, i, 2, a, n].map(encodeURIComponent).join(",");
            Se = 0, Ae = 0, Oe = 0, void 0 !== Reporter && Reporter.reportKeyValue({
                key: "SetDataPerf",
                value: s,
                force: !0
            })
        },
        Ie = 0,
        Re = 0,
        Ne = 0,
        Pe = 0,
        ke = 0,
        Me = 0,
        De = () => {
            var e = ["libVersion", "isFirstPage", "isWebview", "totalComps", "loadedComps", "lazyedComps", "loadTime", "lazyLoadTime"],
                t = new Set(e),
                r = {},
                n = !1,
                o = (o, a) => {
                    n || (r[o] = a, t.has(o) && t.delete(o), 0 === t.size && ((() => {
                        if (void 0 !== Reporter) {
                            var t = e.map((e => encodeURIComponent(r[e]))).join(",");
                            Reporter.reportKeyValue({
                                key: "LazyCodeLoading",
                                value: t,
                                immediately: !0
                            })
                        }
                    })(), n = !0))
                };
            return o("libVersion", wx.version.version), o("isWebview", !0), o("lazyedComps", 0), o("lazyLoadTime", 0), {
                set: o
            }
        },
        Fe = e => {
            var t = {};
            return r => (t[r] || (t[r] = e(r)), t[r])
        },
        je = /-[a-z]/g,
        Le = /([A-Z])/g,
        Be = Fe((e => e.indexOf("-") <= 0 ? e : e.replace(je, (e => e[1].toUpperCase())))),
        $e = Fe((e => e.replace(Le, "-$1").toLowerCase())),
        We = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            timelineOffset: 0
        },
        Ue = {
            duration: 1e3,
            delay: 0,
            endDelay: 0,
            easing: "easeOutElastic(1, .5)",
            round: 0
        },
        Ge = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
        He = {
            CSS: {},
            springs: {}
        };

    function Ve(e, t, r) {
        return Math.min(Math.max(e, t), r)
    }

    function Ze(e, t) {
        return e.indexOf(t) > -1
    }

    function ze(e, t) {
        return e.apply(null, t)
    }
    var qe = {
        arr: function(e) {
            return Array.isArray(e)
        },
        obj: function(e) {
            return Ze(Object.prototype.toString.call(e), "Object")
        },
        pth: function(e) {
            return qe.obj(e) && e.hasOwnProperty("totalLength")
        },
        svg: function(e) {
            return e instanceof SVGElement
        },
        inp: function(e) {
            return e instanceof HTMLInputElement
        },
        dom: function(e) {
            return e.nodeType || qe.svg(e) || e.$$
        },
        str: function(e) {
            return "string" == typeof e
        },
        fnc: function(e) {
            return "function" == typeof e
        },
        und: function(e) {
            return void 0 === e
        },
        hex: function(e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
        },
        rgb: function(e) {
            return /^rgb/.test(e)
        },
        hsl: function(e) {
            return /^hsl/.test(e)
        },
        col: function(e) {
            return qe.hex(e) || qe.rgb(e) || qe.hsl(e)
        },
        key: function(e) {
            return !We.hasOwnProperty(e) && !Ue.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e
        }
    };

    function Je(e) {
        var t = /\(([^)]+)\)/.exec(e);
        return t ? t[1].split(",").map((function(e) {
            return parseFloat(e)
        })) : []
    }

    function Ke(e, t) {
        var r = Je(e),
            n = Ve(qe.und(r[0]) ? 1 : r[0], .1, 100),
            o = Ve(qe.und(r[1]) ? 100 : r[1], .1, 100),
            a = Ve(qe.und(r[2]) ? 10 : r[2], .1, 100),
            i = Ve(qe.und(r[3]) ? 0 : r[3], .1, 100),
            s = Math.sqrt(o / n),
            l = a / (2 * Math.sqrt(o * n)),
            c = l < 1 ? s * Math.sqrt(1 - l * l) : 0,
            u = 1,
            d = l < 1 ? (l * s - i) / c : -i + s;

        function f(e) {
            var r = t ? t * e / 1e3 : e;
            return r = l < 1 ? Math.exp(-r * l * s) * (u * Math.cos(c * r) + d * Math.sin(c * r)) : (u + d * r) * Math.exp(-r * s), 0 === e || 1 === e ? e : 1 - r
        }
        return t ? f : function() {
            var t = He.springs[e];
            if (t) return t;
            for (var r = 1 / 6, n = 0, o = 0;;)
                if (1 === f(n += r)) {
                    if (++o >= 16) break
                } else o = 0;
            var a = n * r * 1e3;
            return He.springs[e] = a, a
        }
    }

    function Xe(e) {
        return void 0 === e && (e = 10),
            function(t) {
                return Math.round(t * e) * (1 / e)
            }
    }
    var Ye, Qe, et = function() {
            var e = .1;

            function t(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function r(e, t) {
                return 3 * t - 6 * e
            }

            function n(e) {
                return 3 * e
            }

            function o(e, o, a) {
                return ((t(o, a) * e + r(o, a)) * e + n(o)) * e
            }

            function a(e, o, a) {
                return 3 * t(o, a) * e * e + 2 * r(o, a) * e + n(o)
            }
            return function(t, r, n, i) {
                if (0 <= t && t <= 1 && 0 <= n && n <= 1) {
                    var s = new Float32Array(11);
                    if (t !== r || n !== i)
                        for (var l = 0; l < 11; ++l) s[l] = o(l * e, t, n);
                    return function(e) {
                        return t === r && n === i || 0 === e || 1 === e ? e : o(c(e), r, i)
                    }
                }

                function c(r) {
                    for (var i = 0, l = 1; 10 !== l && s[l] <= r; ++l) i += e;
                    --l;
                    var c = i + (r - s[l]) / (s[l + 1] - s[l]) * e,
                        u = a(c, t, n);
                    return u >= .001 ? function(e, t, r, n) {
                        for (var i = 0; i < 4; ++i) {
                            var s = a(t, r, n);
                            if (0 === s) return t;
                            t -= (o(t, r, n) - e) / s
                        }
                        return t
                    }(r, c, t, n) : 0 === u ? c : function(e, t, r, n, a) {
                        var i, s, l = 0;
                        do {
                            (i = o(s = t + (r - t) / 2, n, a) - e) > 0 ? r = s : t = s
                        } while (Math.abs(i) > 1e-7 && ++l < 10);
                        return s
                    }(r, i, i + e, t, n)
                }
            }
        }(),
        tt = (Ye = {
            linear: function() {
                return function(e) {
                    return e
                }
            }
        }, Qe = {
            Sine: function() {
                return function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                }
            },
            Circ: function() {
                return function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                }
            },
            Back: function() {
                return function(e) {
                    return e * e * (3 * e - 2)
                }
            },
            Bounce: function() {
                return function(e) {
                    for (var t, r = 4; e < ((t = Math.pow(2, --r)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - r) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            },
            Elastic: function(e, t) {
                void 0 === e && (e = 1), void 0 === t && (t = .5);
                var r = Ve(e, 1, 10),
                    n = Ve(t, .1, 2);
                return function(e) {
                    return 0 === e || 1 === e ? e : -r * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1 - n / (2 * Math.PI) * Math.asin(1 / r)) * (2 * Math.PI) / n)
                }
            }
        }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(e, t) {
            Qe[e] = function() {
                return function(e) {
                    return Math.pow(e, t + 2)
                }
            }
        })), Object.keys(Qe).forEach((function(e) {
            var t = Qe[e];
            Ye["easeIn" + e] = t, Ye["easeOut" + e] = function(e, r) {
                return function(n) {
                    return 1 - t(e, r)(1 - n)
                }
            }, Ye["easeInOut" + e] = function(e, r) {
                return function(n) {
                    return n < .5 ? t(e, r)(2 * n) / 2 : 1 - t(e, r)(-2 * n + 2) / 2
                }
            }
        })), Ye);

    function rt(e, t) {
        if (qe.fnc(e)) return e;
        var r = e.split("(")[0],
            n = tt[r],
            o = Je(e);
        switch (r) {
            case "spring":
                return Ke(e, t);
            case "cubicBezier":
                return ze(et, o);
            case "steps":
                return ze(Xe, o);
            default:
                return ze(n, o)
        }
    }

    function nt(e) {
        try {
            return document.querySelectorAll(e)
        } catch (e) {
            return
        }
    }

    function ot(e, t) {
        for (var r = e.length, n = arguments.length >= 2 ? arguments[1] : void 0, o = [], a = 0; a < r; a++)
            if (a in e) {
                var i = e[a];
                t.call(n, i, a, e) && o.push(i)
            } return o
    }

    function at(e) {
        return e.reduce((function(e, t) {
            return e.concat(qe.arr(t) ? at(t) : t)
        }), [])
    }

    function it(e) {
        return qe.arr(e) ? e : (qe.str(e) && (e = nt(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
    }

    function st(e, t) {
        return e.some((function(e) {
            return e === t
        }))
    }

    function lt(e) {
        var t = {};
        for (var r in e) t[r] = e[r];
        return t
    }

    function ct(e, t) {
        var r = lt(e);
        for (var n in e) r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
        return r
    }

    function ut(e, t) {
        var r = lt(e);
        for (var n in t) r[n] = qe.und(e[n]) ? t[n] : e[n];
        return r
    }

    function dt(e) {
        return qe.rgb(e) ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t = e)) ? "rgba(" + r[1] + ",1)" : t : qe.hex(e) ? function(e) {
            var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, r, n) {
                    return t + t + r + r + n + n
                })),
                r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return "rgba(" + parseInt(r[1], 16) + "," + parseInt(r[2], 16) + "," + parseInt(r[3], 16) + ",1)"
        }(e) : qe.hsl(e) ? function(e) {
            var t, r, n, o = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
                a = parseInt(o[1], 10) / 360,
                i = parseInt(o[2], 10) / 100,
                s = parseInt(o[3], 10) / 100,
                l = o[4] || 1;

            function c(e, t, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            }
            if (0 == i) t = r = n = s;
            else {
                var u = s < .5 ? s * (1 + i) : s + i - s * i,
                    d = 2 * s - u;
                t = c(d, u, a + 1 / 3), r = c(d, u, a), n = c(d, u, a - 1 / 3)
            }
            return "rgba(" + 255 * t + "," + 255 * r + "," + 255 * n + "," + l + ")"
        }(e) : void 0;
        var t, r
    }

    function ft(e) {
        var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
        if (t) return t[1]
    }

    function pt(e, t) {
        return qe.fnc(e) ? e(t.target, t.id, t.total) : e
    }

    function _t(e, t) {
        return e.getAttribute(t)
    }

    function vt(e, t, r) {
        if (e = e.$$ || e, st([r, "deg", "rad", "turn"], ft(t))) return t;
        var n = He.CSS[t + r];
        if (!qe.und(n)) return n;
        var o = document.createElement(e.tagName),
            a = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
        a.appendChild(o), o.style.position = "absolute", o.style.width = 100 + r;
        var i = 100 / o.offsetWidth;
        a.removeChild(o);
        var s = i * parseFloat(t);
        return He.CSS[t + r] = s, s
    }

    function ht(e, t, r) {
        if (t in e.style) {
            var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                o = e.style[t] || getComputedStyle(e.$$ || e).getPropertyValue(n) || "0";
            return r ? vt(e, o, r) : o
        }
    }

    function gt(e, t) {
        return qe.dom(e) && !qe.inp(e) && (_t(e, t) || qe.svg(e) && e[t]) ? "attribute" : qe.dom(e) && st(Ge, t) ? "transform" : qe.dom(e) && "transform" !== t && ht(e, t) ? "css" : null != e[t] ? "object" : void 0
    }

    function mt(e) {
        if (qe.dom(e)) {
            for (var t, r = e.style.transform || "", n = /(\w+)\(([^)]*)\)/g, o = new Map; t = n.exec(r);) o.set(t[1], t[2]);
            return o
        }
    }

    function yt(e, t, r, n) {
        var o = Ze(t, "scale") ? 1 : 0 + function(e) {
                return Ze(e, "translate") || "perspective" === e ? "px" : Ze(e, "rotate") || Ze(e, "skew") ? "deg" : void 0
            }(t),
            a = mt(e).get(t) || o;
        return r && (r.transforms.list.set(t, a), r.transforms.last = t), n ? vt(e, a, n) : a
    }

    function wt(e, t, r, n) {
        switch (gt(e, t)) {
            case "transform":
                return yt(e, t, n, r);
            case "css":
                return ht(e, t, r);
            case "attribute":
                return _t(e, t);
            default:
                return e[t] || 0
        }
    }

    function bt(e, t) {
        var r = /^(\*=|\+=|-=)/.exec(e);
        if (!r) return e;
        var n = ft(e) || 0,
            o = parseFloat(t),
            a = parseFloat(e.replace(r[0], ""));
        switch (r[0][0]) {
            case "+":
                return o + a + n;
            case "-":
                return o - a + n;
            case "*":
                return o * a + n
        }
    }

    function xt(e, t) {
        if (qe.col(e)) return dt(e);
        if (/\s/g.test(e)) return e;
        var r = ft(e),
            n = r ? e.substr(0, e.length - r.length) : e;
        return t ? n + t : n
    }

    function Et(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    }

    function Ct(e) {
        for (var t, r = e.points, n = 0, o = 0; o < r.numberOfItems; o++) {
            var a = r.getItem(o);
            o > 0 && (n += Et(t, a)), t = a
        }
        return n
    }

    function St(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
            case "circle":
                return function(e) {
                    return 2 * Math.PI * _t(e, "r")
                }(e);
            case "rect":
                return function(e) {
                    return 2 * _t(e, "width") + 2 * _t(e, "height")
                }(e);
            case "line":
                return function(e) {
                    return Et({
                        x: _t(e, "x1"),
                        y: _t(e, "y1")
                    }, {
                        x: _t(e, "x2"),
                        y: _t(e, "y2")
                    })
                }(e);
            case "polyline":
                return Ct(e);
            case "polygon":
                return function(e) {
                    var t = e.points;
                    return Ct(e) + Et(t.getItem(t.numberOfItems - 1), t.getItem(0))
                }(e)
        }
    }

    function At(e, t) {
        var r = t || {},
            n = r.el || function(e) {
                for (var t = e.parentNode; qe.svg(t) && qe.svg(t.parentNode);) t = t.parentNode;
                return t
            }(e),
            o = n.getBoundingClientRect(),
            a = _t(n, "viewBox"),
            i = o.width,
            s = o.height,
            l = r.viewBox || (a ? a.split(" ") : [0, 0, i, s]);
        return {
            el: n,
            viewBox: l,
            x: l[0] / 1,
            y: l[1] / 1,
            w: i / l[2],
            h: s / l[3]
        }
    }

    function Ot(e, t) {
        function r(r) {
            void 0 === r && (r = 0);
            var n = t + r >= 1 ? t + r : 0;
            return e.el.getPointAtLength(n)
        }
        var n = At(e.el, e.svg),
            o = r(),
            a = r(-1),
            i = r(1);
        switch (e.property) {
            case "x":
                return (o.x - n.x) * n.w;
            case "y":
                return (o.y - n.y) * n.h;
            case "angle":
                return 180 * Math.atan2(i.y - a.y, i.x - a.x) / Math.PI
        }
    }

    function Tt(e, t) {
        var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            n = xt(qe.pth(e) ? e.totalLength : e, t) + "";
        return {
            original: n,
            numbers: n.match(r) ? n.match(r).map(Number) : [0],
            strings: qe.str(e) || t ? n.split(r) : []
        }
    }

    function It(e) {
        return ot(e ? at(qe.arr(e) ? e.map(it) : it(e)) : [], (function(e, t, r) {
            return r.indexOf(e) === t
        }))
    }

    function Rt(e) {
        var t = It(e);
        return t.map((function(e, r) {
            return {
                target: e,
                id: r,
                total: t.length,
                transforms: {
                    list: mt(e)
                }
            }
        }))
    }

    function Nt(e, t) {
        var r = lt(t);
        if (/^spring/.test(r.easing) && (r.duration = Ke(r.easing)), qe.arr(e)) {
            var n = e.length;
            2 === n && !qe.obj(e[0]) ? e = {
                value: e
            } : qe.fnc(t.duration) || (r.duration = t.duration / n)
        }
        var o = qe.arr(e) ? e : [e];
        return o.map((function(e, r) {
            var n = qe.obj(e) && !qe.pth(e) ? e : {
                value: e
            };
            return qe.und(n.delay) && (n.delay = r ? 0 : t.delay), qe.und(n.endDelay) && (n.endDelay = r === o.length - 1 ? t.endDelay : 0), n
        })).map((function(e) {
            return ut(e, r)
        }))
    }

    function Pt(e, t) {
        var r = [],
            n = t.keyframes;
        for (var o in n && (t = ut(function(e) {
                for (var t = ot(at(e.map((function(e) {
                        return Object.keys(e)
                    }))), (function(e) {
                        return qe.key(e)
                    })).reduce((function(e, t) {
                        return e.indexOf(t) < 0 && e.push(t), e
                    }), []), r = {}, n = function(n) {
                        var o = t[n];
                        r[o] = e.map((function(e) {
                            var t = {};
                            for (var r in e) qe.key(r) ? r == o && (t.value = e[r]) : t[r] = e[r];
                            return t
                        }))
                    }, o = 0; o < t.length; o++) n(o);
                return r
            }(n), t)), t) qe.key(o) && r.push({
            name: o,
            tweens: Nt(t[o], e)
        });
        return r
    }

    function kt(e, t) {
        var r;
        return e.tweens.map((function(n) {
            var o = function(e, t) {
                    var r = {};
                    for (var n in e) {
                        var o = pt(e[n], t);
                        qe.arr(o) && 1 === (o = o.map((function(e) {
                            return pt(e, t)
                        }))).length && (o = o[0]), r[n] = o
                    }
                    return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
                }(n, t),
                a = o.value,
                i = qe.arr(a) ? a[1] : a,
                s = ft(i),
                l = wt(t.target, e.name, s, t),
                c = r ? r.to.original : l,
                u = qe.arr(a) ? a[0] : c,
                d = ft(u) || ft(l),
                f = s || d;
            return qe.und(i) && (i = c), o.from = Tt(u, f), o.to = Tt(bt(i, u), f), o.start = r ? r.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = rt(o.easing, o.duration), o.isPath = qe.pth(a), o.isColor = qe.col(o.from.original), o.isColor && (o.round = 1), r = o, o
        }))
    }
    var Mt = {
        css: function(e, t, r) {
            if (e.$$) return `${t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${wx.transformRpx(" "+r)};`;
            e.style[t] = r
        },
        attribute: function(e, t, r) {
            return e.setAttribute(t, r)
        },
        object: function(e, t, r) {
            return e[t] = r
        },
        transform: function(e, t, r, n, o) {
            if (n.list.set(t, r), t === n.last || o) {
                var a = "";
                if (n.list.forEach((function(e, t) {
                        a += t + "(" + e + ") "
                    })), e.$$) return `transform:${wx.transformRpx(" "+a)};`;
                e.style.transform = a
            }
            return ""
        }
    };

    function Dt(e, t) {
        Rt(e).forEach((function(e) {
            for (var r in t) {
                var n = pt(t[r], e),
                    o = e.target,
                    a = ft(n),
                    i = wt(o, r, a, e),
                    s = bt(xt(n, a || ft(i)), i),
                    l = gt(o, r);
                Mt[l](o, r, s, e.transforms, !0)
            }
        }))
    }

    function Ft(e, t) {
        return ot(at(e.map((function(e) {
            return t.map((function(t) {
                return function(e, t) {
                    var r = gt(e.target, t.name);
                    if (r) {
                        var n = kt(t, e),
                            o = n[n.length - 1];
                        return {
                            type: r,
                            property: t.name,
                            animatable: e,
                            tweens: n,
                            duration: o.end,
                            delay: n[0].delay,
                            endDelay: o.endDelay
                        }
                    }
                }(e, t)
            }))
        }))), (function(e) {
            return !qe.und(e)
        }))
    }

    function jt(e, t) {
        var r = e.length,
            n = function(e) {
                return e.timelineOffset ? e.timelineOffset : 0
            },
            o = {};
        return o.duration = r ? Math.max.apply(Math, e.map((function(e) {
            return n(e) + e.duration
        }))) : t.duration, o.delay = r ? Math.min.apply(Math, e.map((function(e) {
            return n(e) + e.delay
        }))) : t.delay, o.endDelay = r ? o.duration - Math.max.apply(Math, e.map((function(e) {
            return n(e) + e.duration - e.endDelay
        }))) : t.endDelay, o
    }
    var Lt = 0;
    var Bt, $t = [],
        Wt = function() {
            function e() {
                Bt = requestAnimationFrame(t)
            }

            function t(t) {
                var r = $t.length;
                if (r) {
                    for (var n = 0; n < r;) {
                        var o = $t[n];
                        if (o.paused) {
                            var a = $t.indexOf(o);
                            a > -1 && ($t.splice(a, 1), r = $t.length)
                        } else o.tick(t);
                        n++
                    }
                    e()
                } else Bt = cancelAnimationFrame(Bt)
            }
            return e
        }();

    function Ut(e) {
        void 0 === e && (e = {});
        var t, r = 0,
            n = 0,
            o = 0,
            a = 0,
            i = null;

        function s(e) {
            var t = window.Promise && new Promise((function(e) {
                return i = e
            }));
            return e.finished = t, t
        }
        var l = function(e) {
            var t = ct(We, e),
                r = ct(Ue, e),
                n = Pt(r, e),
                o = Rt(e.targets),
                a = Ft(o, n),
                i = jt(a, r),
                s = Lt;
            return Lt++, ut(t, {
                id: s,
                children: [],
                animatables: o,
                animations: a,
                duration: i.duration,
                delay: i.delay,
                endDelay: i.endDelay
            })
        }(e);
        s(l);

        function c() {
            var e = l.direction;
            "alternate" !== e && (l.direction = "normal" !== e ? "normal" : "reverse"), l.reversed = !l.reversed, t.forEach((function(e) {
                return e.reversed = l.reversed
            }))
        }

        function u(e) {
            return l.reversed ? l.duration - e : e
        }

        function d() {
            r = 0, n = u(l.currentTime) * (1 / Ut.speed)
        }

        function f(e, t) {
            t && t.seek(e - t.timelineOffset)
        }

        function p(e) {
            for (var t = 0, r = l.animations, n = r.length, o = []; t < n;) {
                var a = r[t],
                    i = a.animatable,
                    s = a.tweens,
                    c = s.length - 1,
                    u = s[c];
                c && (u = ot(s, (function(t) {
                    return e < t.end
                }))[0] || u);
                for (var d = Ve(e - u.start - u.delay, 0, u.duration) / u.duration, f = isNaN(d) ? 1 : u.easing(d), p = u.to.strings, _ = u.round, v = [], h = u.to.numbers.length, g = void 0, m = 0; m < h; m++) {
                    var y = void 0,
                        w = u.to.numbers[m],
                        b = u.from.numbers[m] || 0;
                    y = u.isPath ? Ot(u.value, f * w) : b + f * (w - b), _ && (u.isColor && m > 2 || (y = Math.round(y * _) / _)), v.push(y)
                }
                var x = p.length;
                if (x) {
                    g = p[0];
                    for (var E = 0; E < x; E++) {
                        p[E];
                        var C = p[E + 1],
                            S = v[E];
                        isNaN(S) || (g += C ? S + C : S + " ")
                    }
                } else g = v[0];
                var A = Mt[a.type](i.target, a.property, g, i.transforms);
                o.push(A), a.currentValue = g, t++
            }
            1 === l.animatables.length && l.animatables[0].target.$$ && l.animatables[0].target.setNodeStyle(o.join(" "), T.ANIMATION)
        }

        function _(e) {
            l[e] && !l.passThrough && l[e](l)
        }

        function v(e) {
            var d = l.duration,
                v = l.delay,
                h = d - l.endDelay,
                g = u(e);
            l.progress = Ve(g / d * 100, 0, 100), l.reversePlayback = g < l.currentTime, t && function(e) {
                if (l.reversePlayback)
                    for (var r = a; r--;) f(e, t[r]);
                else
                    for (var n = 0; n < a; n++) f(e, t[n])
            }(g), !l.began && l.currentTime > 0 && (l.began = !0, _("begin")), !l.loopBegan && l.currentTime > 0 && (l.loopBegan = !0, _("loopBegin")), g <= v && 0 !== l.currentTime && p(0), (g >= h && l.currentTime !== d || !d) && p(d), g > v && g < h ? (l.changeBegan || (l.changeBegan = !0, l.changeCompleted = !1, _("changeBegin")), _("change"), p(g)) : l.changeBegan && (l.changeCompleted = !0, l.changeBegan = !1, _("changeComplete")), l.currentTime = Ve(g, 0, d), l.began && _("update"), e >= d && (n = 0, l.remaining && !0 !== l.remaining && l.remaining--, l.remaining ? (r = o, _("loopComplete"), l.loopBegan = !1, "alternate" === l.direction && c()) : (l.paused = !0, l.completed || (l.completed = !0, _("loopComplete"), _("complete"), !l.passThrough && "Promise" in window && (i(), s(l)))))
        }
        return l.reset = function() {
            var e = l.direction;
            l.passThrough = !1, l.currentTime = 0, l.progress = 0, l.paused = !0, l.began = !1, l.loopBegan = !1, l.changeBegan = !1, l.completed = !1, l.changeCompleted = !1, l.reversePlayback = !1, l.reversed = "reverse" === e, l.remaining = l.loop, t = l.children;
            for (var r = a = t.length; r--;) l.children[r].reset();
            (l.reversed && !0 !== l.loop || "alternate" === e && 1 === l.loop) && l.remaining++, p(l.reversed ? l.duration : 0)
        }, l.set = function(e, t) {
            return Dt(e, t), l
        }, l.tick = function(e) {
            o = e, r || (r = o), v((o + (n - r)) * Ut.speed)
        }, l.seek = function(e) {
            v(u(e))
        }, l.pause = function() {
            l.paused = !0, d()
        }, l.play = function() {
            l.paused && (l.completed && l.reset(), l.paused = !1, $t.push(l), d(), Bt || Wt())
        }, l.reverse = function() {
            c(), d()
        }, l.restart = function() {
            l.reset(), l.play()
        }, l.reset(), l.autoplay && l.play(), l
    }

    function Gt(e, t) {
        for (var r = t.length; r--;) st(e, t[r].animatable.target) && t.splice(r, 1)
    }
    Ut.version = "3.1.0", Ut.speed = 1, Ut.running = $t, Ut.remove = function(e) {
        for (var t = It(e), r = $t.length; r--;) {
            var n = $t[r],
                o = n.animations,
                a = n.children;
            Gt(t, o);
            for (var i = a.length; i--;) {
                var s = a[i],
                    l = s.animations;
                Gt(t, l), l.length || s.children.length || a.splice(i, 1)
            }
            o.length || a.length || n.pause()
        }
    }, Ut.get = wt, Ut.set = Dt, Ut.convertPx = vt, Ut.path = function(e, t) {
        var r = qe.str(e) ? nt(e)[0] : e,
            n = t || 100;
        return function(e) {
            return {
                property: e,
                el: r,
                svg: At(r),
                totalLength: St(r) * (n / 100)
            }
        }
    }, Ut.setDashoffset = function(e) {
        var t = St(e);
        return e.setAttribute("stroke-dasharray", t), t
    }, Ut.stagger = function(e, t) {
        void 0 === t && (t = {});
        var r = t.direction || "normal",
            n = t.easing ? rt(t.easing) : null,
            o = t.grid,
            a = t.axis,
            i = t.from || 0,
            s = "first" === i,
            l = "center" === i,
            c = "last" === i,
            u = qe.arr(e),
            d = u ? parseFloat(e[0]) : parseFloat(e),
            f = u ? parseFloat(e[1]) : 0,
            p = ft(u ? e[1] : e) || 0,
            _ = t.start || 0 + (u ? d : 0),
            v = [],
            h = 0;
        return function(e, t, g) {
            if (s && (i = 0), l && (i = (g - 1) / 2), c && (i = g - 1), !v.length) {
                for (var m = 0; m < g; m++) {
                    if (o) {
                        var y = l ? (o[0] - 1) / 2 : i % o[0],
                            w = l ? (o[1] - 1) / 2 : Math.floor(i / o[0]),
                            b = y - m % o[0],
                            x = w - Math.floor(m / o[0]),
                            E = Math.sqrt(b * b + x * x);
                        "x" === a && (E = -b), "y" === a && (E = -x), v.push(E)
                    } else v.push(Math.abs(i - m));
                    h = Math.max.apply(Math, v)
                }
                n && (v = v.map((function(e) {
                    return n(e / h) * h
                }))), "reverse" === r && (v = v.map((function(e) {
                    return a ? e < 0 ? -1 * e : -e : Math.abs(h - e)
                })))
            }
            return _ + (u ? (f - d) / h : d) * (Math.round(100 * v[t]) / 100) + p
        }
    }, Ut.timeline = function(e) {
        void 0 === e && (e = {});
        var t = Ut(e);
        return t.duration = 0, t.add = function(r, n) {
            var o = $t.indexOf(t),
                a = t.children;

            function i(e) {
                e.passThrough = !0
            }
            o > -1 && $t.splice(o, 1);
            for (var s = 0; s < a.length; s++) i(a[s]);
            var l = ut(r, ct(Ue, e));
            l.targets = l.targets || e.targets;
            var c = t.duration;
            l.autoplay = !1, l.direction = t.direction, l.timelineOffset = qe.und(n) ? c : bt(n, c), i(t), t.seek(l.timelineOffset);
            var u = Ut(l);
            i(u), a.push(u);
            var d = jt(a, e);
            return t.delay = d.delay, t.endDelay = d.endDelay, t.duration = d.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t
        }, t
    }, Ut.easing = rt, Ut.penner = tt, Ut.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    };
    const Ht = Ut;
    var Vt = ["height", "left", "matrix", "matrix3d", "opacity", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "top", "translate", "translate3d", "translateX", "translateY", "translateZ", "width", "backgroundColor", "bottom", "borderRadius"],
        Zt = ["easeInElastic", "easeOutElastic", "easeInOutElastic", "easeSpringElastic"],
        zt = Object.assign,
        qt = Object.keys,
        Jt = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "delay", "duration", "offset", "easing"],
        Kt = ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "cubic-bezier", "steps"],
        Xt = (e, t) => {
            var r;
            return e = (null === (r = c()) || void 0 === r ? void 0 : r.predefinedColor[e]) || e, t ? [e, e] : e
        },
        Yt = (e, t) => {
            var r = e.length,
                n = 0;
            return e.map(((e, o) => {
                var a, i = {};
                a = "offset" in e ? e.offset : 1 === r ? 1 : o / (r - 1);
                var s = n === a;
                return qt(e).forEach((t => {
                    Jt.indexOf(t) > -1 || ("transform" !== t ? i[t] = Xt(e[t], s) : zt(i, ((e, t) => {
                        if ("none" === (e = e.toLowerCase().trim())) return {};
                        for (var r, n = {}, o = Jt.map((e => e.toLowerCase())), a = {
                                scale3d: "AAA",
                                translate: "Aa",
                                translate3d: "AAA",
                                rotate3d: "AAAA",
                                matrix3d: "AAAAAA",
                                matrix: "AAAAAAAAAAAAAAAA"
                            }, i = ["rotate3d", "matrix", "matrix3d"], s = /\s*(\w+)\(([^)]*)\)/g, l = 0; r = s.exec(e);) {
                            if (r.index !== l) return {};
                            l = r.index + r[0].length;
                            var c = r[1],
                                u = r[2].split(",");
                            if (o.indexOf(c) > -1) n[c.replace(/(x|y|z)$/, (e => e.toUpperCase()))] = Xt(u.join(" "), t);
                            else {
                                if (!(qt(a).indexOf(c) > -1)) return {};
                                var d = a[c];
                                if (u.length > d.length) return {};
                                for (var f = d.length - 1; f >= 0; f--) {
                                    var p = d[f];
                                    if ("a" !== p || u[f]) {
                                        if ("A" === p && !u[f]) return {}; - 1 === i.indexOf(c) && (n[c.replace("3d", "") + String.fromCharCode(88 + f)] = Xt(u[f].trim(), t))
                                    }
                                }
                            }
                        }
                        return n
                    })(e[t], s)))
                })), s ? i.duration = 0 : (i.duration = (a - n) * t, n = a), i
            }))
        },
        Qt = e => {
            for (var t = 0; t < Kt.length && 0 !== e.indexOf(Kt[t]); t++);
            if (t === Kt.length) return "linear";
            switch (e) {
                case "ease":
                    return "cubicBezier(0.25, 0.1, 0.25, 1)";
                case "ease-in":
                    return "cubicBezier(0.42, 0, 1, 1)";
                case "ease-out":
                    return "cubicBezier(0, 0, 0.58, 1)";
                case "ease-in-out":
                    return "cubicBezier(0.42, 0, 0.58, 1)";
                default:
                    return e.replace(/^cubic-bezier/, "cubicBezier")
            }
        };
    class er {
        constructor(e, t) {
            this._nativeSupported = "function" == typeof HTMLElement.prototype.animate;
            var r = e.keyframeOptions,
                n = this.direction = r.direction;
            if (this.timeline = t, this._nativeSupported) {
                var o = ((e, t) => {
                    var r = t.easing;
                    return delete t.easing, e.map((e => (e.easing = r, e)))
                })(e.keyframeSet, r);
                this._inst = e.element.$$.animate(o, zt(r, {
                    fill: "both"
                })), this._inst.pause()
            } else this._inst = Ht({
                targets: e.element,
                keyframes: Yt(e.keyframeSet, r.duration),
                autoplay: !1,
                loop: r.iterations === 1 / 0 || r.iterations,
                easing: Qt(r.easing),
                direction: "normal",
                delay: "reverse" === n ? r.endDelay : r.delay,
                endDelay: "reverse" === n ? r.delay : r.endDelay
            });
            t._driven(this)
        }
        set currentTime(e) {
            if (!isNaN(e)) {
                var t = this._inst;
                this._nativeSupported ? t.currentTime = e : "reverse" === this.direction ? t.seek(t.duration - e) : t.seek(e)
            }
        }
        cancel() {
            this._nativeSupported ? this._inst.cancel() : this._inst.reset(), this.timeline._destroy(), this._inst = null
        }
    }
    class tr {
        constructor(e, t) {
            if (t.scrollSource) {
                if (this._scrollNode = window.__DOMTree__.shadowRoot.querySelector(t.scrollSource), this._scrollNode || (this._scrollNode = e && e.querySelector(t.scrollSource)), !this._scrollNode) throw new Error(`Cannot find scroll source by ${t.scrollSource} selector.`)
            } else this._scrollNode = window.__DOMTree__;
            this.orientation = t.orientation || "vertical", this.startScrollOffset = t.startScrollOffset, this.endScrollOffset = t.endScrollOffset, this.timeRange = t.timeRange, this.fill = t.fill || "both", this._scroll = this._scroll.bind(this)
        }
        _calcCurrentTime(e, t) {
            var r = this.startScrollOffset,
                n = this.endScrollOffset,
                o = this.fill,
                a = this.timeRange,
                i = e.scrollTop,
                s = e.scrollHeight - t.$$.offsetHeight;
            return "horizontal" === this.orientation && (i = e.scrollLeft, s = e.scrollWidth - t.$$.offsetWidth), i < r ? "none" === o || "forwards" === o ? NaN : 0 : i >= n ? n < s && ("none" === o || "backwards" === o) ? NaN : a : r >= n ? NaN : (i - r) / (n - r) * a
        }
        _scroll() {
            var e = this._calcCurrentTime(this._scrollNode === window.__DOMTree__ ? window.__DOMTree__.$$ : this._scrollNode.getScrollPosition(), this._scrollNode);
            this._animation.currentTime = e
        }
        _driven(e) {
            this._animation = e, this._scrollNode === window.__DOMTree__ ? document.addEventListener("scroll", this._scroll, {
                capture: !0,
                passive: !0
            }) : this._scrollNode.$$.addEventListener("scroll", this._scroll, {
                capture: !0,
                passive: !0
            }), this._scroll()
        }
        _destroy() {
            this._scrollNode === window.__DOMTree__ ? document.removeEventListener("scroll", this._scroll, {
                capture: !0,
                passive: !0
            }) : this._scrollNode.$$.removeEventListener("scroll", this._scroll, {
                capture: !0,
                passive: !0
            })
        }
    }
    var rr = (e, t, r, n, o) => {
            var a = {
                    element: t,
                    keyframeSet: r.map((e => {
                        var t = {};
                        return Object.entries(e).forEach((([e, r]) => {
                            t[e] = fi(r)
                        })), t
                    })),
                    keyframeOptions: {
                        delay: n.delay || 0,
                        direction: n.direction || "normal",
                        duration: n.duration || 0,
                        easing: n.easing || "linear",
                        endDelay: n.endDelay || 0,
                        iterations: 1
                    }
                },
                i = new tr(e, o);
            t.__scrollAnimations = t.__scrollAnimations || [], t.__scrollAnimations.push(new er(a, i))
        },
        nr = (e, t) => {
            for (var r = [], n = 0; n < e.length; ++n) r.push(Object.assign({}, e[n]));
            r[0].offset = 0, r[r.length - 1].offset = 1;
            for (var o = function(e) {
                    r[e].offset = function(e, t) {
                        if ("number" == typeof t[e].offset) return t[e].offset;
                        for (var r = e + 1; r < t.length; ++r)
                            if (t[r].offset) return (t[r].offset - t[e - 1].offset) / (r - e + 1) + t[e - 1].offset;
                        return 0
                    }(e, r), r[e].duration = 0 === e ? 0 : (r[e].offset - r[e - 1].offset) * t, Zt.some((t => r[e].ease && r[e].ease.startsWith(t))) && (r[e].type = "animeJS")
                }, a = 0; a < r.length; ++a) o(a);
            return r
        },
        or = 0,
        ar = [],
        ir = (...e) => {
            ar.push(e)
        };
    Foundation.onLoad((() => {
        ir = setTimeout, ar.forEach((e => {
            setTimeout(...e)
        })), ar.length = 0
    }));
    var sr = function(e) {
            or === e && (or = 0)
        },
        lr = function() {
            return or = Date.now() + Math.random()
        },
        cr = function(e) {
            var t, r = lr();
            try {
                t = e(r)
            } catch (e) {
                throw ir((() => {
                    sr(r)
                }), 0), e
            }
            return ir((() => {
                sr(r)
            }), 0), t
        },
        ur = function() {
            return !!or
        },
        dr = a(),
        fr = Object.prototype.hasOwnProperty,
        pr = !1,
        _r = null,
        vr = () => "function" == typeof _r ? _r : null,
        hr = (e, t) => _r ? _r(e, "nv_", t ? 2 : void 0) : e,
        gr = (e, t = !1) => _r ? _r(e, void 0, t ? 2 : void 0) : e,
        mr = (e, t, r) => t ? r ? t + e + r : t || "" : r || "",
        yr = 0,
        wr = !1,
        br = () => {
            wr && 0 === yr && (wr = !1, wx.triggerPageReRender())
        },
        xr = e => e instanceof dr.Component && dr.Component.getComponentOptions(e).domain,
        Er = null,
        Cr = [],
        Sr = {},
        Ar = (e, t) => {
            var r, n = e,
                o = xr(n),
                a = (r = n) instanceof dr.Component && "//" === dr.Component.getComponentOptions(r).domain,
                l = qi.getByNode(n),
                c = {
                    selectAllComponents(r) {
                        if (t !== o) return [];
                        var n = pr ? e.shadowRoot.querySelectorAll(r) : e.querySelectorAll(r),
                            a = [];
                        return n.forEach((e => {
                            a.push(hr(Ar(e, t), !0))
                        })), a
                    },
                    selectComponent(r) {
                        if (t !== o) return null;
                        var n = pr ? e.shadowRoot.querySelector(r) : e.querySelector(r);
                        return n ? hr(Ar(n, t), !0) : null
                    },
                    removeClass(...e) {
                        if (!n || !e.length) return this;
                        var t = n.__wxsClass ? n.__wxsClass.split(/\s+/) : [],
                            r = [];
                        return e.forEach((e => {
                            (e = e.replace(/^\s+|\s+$/g, "")) && n.classList.contains(e) && (n.classList.toggle(e), wr = !0, r.push(e))
                        })), r.forEach((e => {
                            t.forEach(((r, n) => r !== e || (t.splice(n, 1), !1)))
                        })), n.__wxsClass = t.join(" "), this
                    },
                    addClass(...e) {
                        if (!n || !e.length) return this;
                        var t = n.__wxsClass || "",
                            r = [];
                        return e.forEach((e => {
                            (e = e.replace(/^\s+|\s+$/g, "")) && (n.classList.contains(e) || (n.classList.toggle(e), r.push(e), wr = !0))
                        })), n.__wxsClass = t + (t ? " " : "") + r.join(" "), this
                    },
                    hasClass: e => !!n && n.classList.contains(e),
                    setStyle(e) {
                        if (!n) return this;
                        if (e === n.__wxsStyle) return this;
                        var t = [];
                        if ("object" == typeof e)
                            for (var r of (e = e ? gr(e) : {}, Object.keys(e))) t.push(`${r}:${e[r]}`);
                        else t = [String(e)];
                        n.__wxsStyle = t.join(";");
                        var o = () => {
                            var e = window.wx.transformRpx(n.__wxsStyle, !0);
                            n.setNodeStyle(e, T.WXS_STYLE)
                        };
                        if (o(), fe(n, T.WXS_STYLE, o), wr = !0, "skyline" === s()) {
                            var a = i();
                            wxNativeConsole.info(`[Skyline] call startRender on id ${l.viewId}, reason: wxs setStyle`), a.getContext(l.viewId).startRender()
                        }
                        return this
                    },
                    getDataset: () => n ? hr(n.dataset) : null,
                    getState: () => n ? (n.__wxsState = n.__wxsState || ("undefined" != typeof __wxCodeSpace__ && "function" == typeof __wxCodeSpace__.createWxsStateObject ? __wxCodeSpace__.createWxsStateObject() : {}), n.__wxsState) : null,
                    triggerEvent(t, r, o) {
                        return a || !e || (r = r ? gr(r) : r, o = o ? gr(o) : o, yr++, n.triggerEvent(t, r, o), yr--), this
                    },
                    callMethod(t, r = {}) {
                        if (!t) return this;
                        if (r = gr(r), pr) {
                            var n = e;
                            if (!e || !e.__wxTmplId) console.error("Call method on a non-custom-component node is invalid. Call on the owner component or page instead. To avoid this error hint, try not to call method on `event.instance` , but on `ownerInstance` instead."), n = n.ownerShadowRoot ? n.ownerShadowRoot.__wxHost : l.root;
                            Nr(l, n, t, r)
                        } else Nr(l, e, t, r);
                        return this
                    },
                    requestAnimationFrame(e) {
                        return "function" != typeof e || "function" == typeof(t = e) && (Cr.push(t), Er || (Er = window.requestAnimationFrame((() => {
                            Er = null;
                            var e = Cr;
                            Cr = [], e.forEach((e => {
                                e(), br()
                            }))
                        })))), this;
                        var t
                    },
                    getComputedStyle(e) {
                        Array.isArray(e) || (e = []);
                        var t = {
                            computedStyle: e.filter((e => "string" == typeof e))
                        };
                        return hr(_i(n, t))
                    },
                    setTimeout(e, t, ...r) {
                        if ("function" == typeof e) {
                            var n = window.setTimeout((() => {
                                e(...r), delete Sr[n]
                            }), t);
                            return Sr[n] = !0, n
                        }
                    },
                    clearTimeout(e) {
                        Sr[e] && (window.clearTimeout(e), delete Sr[e])
                    },
                    getBoundingClientRect() {
                        var e = n.$$ && n.$$.getBoundingClientRect();
                        return e ? hr({
                            x: e.x,
                            y: e.y,
                            width: e.width,
                            height: e.height,
                            top: e.top,
                            right: e.right,
                            bottom: e.bottom,
                            left: e.left
                        }) : {}
                    },
                    animate(e, t, r) {
                        e = gr(e);
                        for (var o = nr(e, t), a = 0; a < o.length; ++a) {
                            var i = `${Math.random()}-${+new Date}`,
                                s = "animeJS" === o[a].type;
                            delete o[a].type;
                            var c = {
                                nodeId: n.getNodeId(),
                                webviewId: l.viewId,
                                options: o[a],
                                selector: `#${n.$$.id}`,
                                reqId: i,
                                type: s ? "animeJS" : void 0,
                                fromWxs: !0
                            };
                            a === o.length - 1 ? (c.hasCallback = "function" == typeof r, "function" == typeof r && (l.applyAnimationCbMap[i] = r), c.isLastAnimation = !0, pi(c)) : (c.hasCallback = !1, c.isLastAnimation = !1, pi(c))
                        }
                    },
                    clearAnimation(e, t) {
                        var r = `${Math.random()}-${+new Date}`,
                            o = !1;
                        "function" == typeof t ? (e = gr(e), l.clearAnimationCbMap[r] = t, o = !0) : "function" == typeof e && (l.clearAnimationCbMap[r] = e, o = !0);
                        var a = {
                            nodeId: n.getNodeId(),
                            webviewId: l.viewId,
                            options: e,
                            selector: `#${n.$$.id}`,
                            reqId: r,
                            fromWxs: !0,
                            hasCallback: o
                        };
                        ui(a)
                    }
                };
            return Object.freeze(c), c
        },
        Or = (e, t) => {
            var r = e.ownerShadowRoot ? e.ownerShadowRoot.__wxHost : window.__DOMTree__,
                n = t ? r : e;
            return pr = !!e.ownerShadowRoot, Ar(n, xr(n))
        },
        Tr = null,
        Ir = [],
        Rr = (e, t) => {
            e.wxsObserver && !Ce.restoring && (Ir.push({
                node: e,
                props: t
            }), Tr || (Tr = window.requestAnimationFrame((() => {
                Tr = null;
                var e = Ir;
                Ir = [], e.forEach((e => {
                    ((e, t) => {
                        for (var r in e.wxsObserver)
                            if (fr.call(t, r) && e.wxsObserver[r] && "function" == typeof e.wxsObserver[r].observer) {
                                var n = e.wxsObserver[r].value;
                                dr.safeCallback("WXS Observer", e.wxsObserver[r].observer, null, [hr(t[r]), hr(n), hr(Or(e, !0), !0), hr(Or(e), !0)], e.ownerShadowRoot ? e.ownerShadowRoot.__wxHost : void 0), e.wxsObserver[r].value = t[r]
                            }
                    })(e.node, e.props)
                }))
            }))))
        },
        Nr = (e, t, r, n) => {
            te(S.CALL_METHOD_FROM_WXS, [t && t.__wxTmplId || 0, r, n, ur()], e.viewId)
        },
        Pr = (e, t, r) => {
            if (t.__wxsStyle || t.__wxsClass) {
                var n = {
                    wxsStyle: t.__wxsStyle,
                    wxsClass: t.__wxsClass,
                    index: r,
                    wxsState: gr(t.__wxsState)
                };
                if (t.ownerShadowRoot) {
                    var o = qi.getByNode(t).nodeId.getNodeId(t.ownerShadowRoot.__wxHost);
                    e._custom = e._custom || {}, (e = e._custom)[o] = e[o] || {}, e = e[o]
                }
                e[t.is] = e[t.is] || [], e[t.is].push(n)
            }
        },
        kr = (e, t, r) => {
            if (e) {
                var n = null;
                if (t.ownerShadowRoot && e._custom) {
                    var o = qi.getByNode(t).nodeId.getNodeId(t.ownerShadowRoot.__wxHost);
                    if (!(e = e._custom)[o]) return;
                    e = e[o]
                }
                e[t.is] && e[t.is].length && e[t.is][0] && e[t.is][0].index === r && (n = e[t.is].shift()), n && ((e, t) => {
                    if (e.__wxsStyle = t.wxsStyle, e.__wxsClass = t.wxsClass, e.__wxsState = hr(t.wxsState), t.wxsStyle) {
                        var r = () => {
                            var t = window.wx.transformRpx(e.__wxsStyle, !0);
                            e.setNodeStyle(t, T.WXS_STYLE)
                        };
                        r(), fe(e, T.WXS_STYLE, r)
                    }
                    t.wxsClass && (e.class = mr(" ", e.class, t.wxsClass))
                })(t, n)
            }
        };
    class Mr {
        constructor(e, t) {
            this.value = e, this.optimized = t || !1
        }
        toString() {
            return this.value
        }
    }

    function Dr(e) {
        var t;
        return null === e || null != e && null !== (t = e.tagName) && void 0 !== t && t.startsWith("WX-") ? e : Dr(e.parentElement)
    }

    function Fr(e) {
        var t;
        return null != e && null !== (t = e.__wxElement) && void 0 !== t && t.parentNode ? Dr(e.parentElement) : null
    }
    var jr = (e, t) => {
        var r, n = function(e) {
            var t, r = e.parentNode ? e.parentNode.children : null;
            if (!r) return 0;
            for (var n, o, a = 1, i = 0; i < r.length; ++i) {
                if (r[i] === e) return t ? a : 0;
                ((n = e) === (o = r[i]) || (n.nodeType === Node.ELEMENT_NODE && o.nodeType === Node.ELEMENT_NODE ? n.localName === o.localName : n.nodeType === o.nodeType || (n.nodeType === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : n.nodeType) === (o.nodeType === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : o.nodeType))) && (t = !0, a += 1)
            }
            return -1
        }(e);
        if (-1 === n) return null;
        switch (e.nodeType) {
            case Node.ELEMENT_NODE:
                if (t && e.getAttribute("id")) return new Mr(`//*[@id="${e.getAttribute("id")}"]`, !0);
                r = e.localName.replace("wx-", "");
                break;
            case Node.ATTRIBUTE_NODE:
                r = `@${e.nodeName}`;
                break;
            case Node.TEXT_NODE:
            case Node.CDATA_SECTION_NODE:
                r = "text()";
                break;
            case Node.PROCESSING_INSTRUCTION_NODE:
                r = "processing-instruction()";
                break;
            case Node.COMMENT_NODE:
                r = "comment()";
                break;
            case Node.DOCUMENT_NODE:
            default:
                r = ""
        }
        return n > 0 && (r += `[${n}]`), new Mr(r, e.nodeType === Node.DOCUMENT_NODE)
    };
    const Lr = ["wx0cb2b558740023ad", "wx4aedf8c9edf9fd72", "wx34345ae5855f892d"];
    var Br = a(),
        $r = Br.Component.getComponentOptions,
        Wr = (e, t) => {
            var r = "",
                n = (e, t, o) => {
                    o > t || e && (e instanceof Br.TextNode ? r += e.$$.textContent : Array.isArray(e.childNodes) && e.childNodes.forEach((e => n(e, t, o + 1))))
                };
            return n(e, t, 1), r
        },
        Ur = (e, t, r) => {
            if (void 0 === __userActionTracer__) return t;
            if (!__userActionTracer__.shouldReportEvent(r)) return t;
            var n = e;
            try {
                var o, a = {
                    text: __userActionTracer__.limitContent(Wr(n, __userActionTracer__.getTextContentMaxLayer())),
                    id: e.id,
                    classname: __userActionTracer__.convertClassList(null == n || null === (o = n.classList) || void 0 === o ? void 0 : o._rawNames),
                    tag: n.$$.tagName,
                    opentype: n.openType
                };
                return {
                    ...t,
                    __extra: a
                }
            } catch (e) {
                return t
            }
        },
        Gr = (e, t, r) => {
            var n = e;
            return r && n instanceof Br.VirtualNode && (n.id || Object.getOwnPropertyNames(n.dataset).length || (n = r)), {
                id: t ? "" : n.id,
                offsetLeft: n.$$ && !t ? n.$$.offsetLeft : 0,
                offsetTop: n.$$ && !t ? n.$$.offsetTop : 0,
                dataset: t ? {} : n.dataset
            }
        },
        Hr = e => {
            if (e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = e[r];
                    t.push({
                        identifier: n.identifier,
                        pageX: n.pageX,
                        pageY: n.pageY,
                        clientX: n.clientX,
                        clientY: n.clientY,
                        force: n.force || 0
                    })
                }
                return t
            }
        },
        Vr = (e, t) => {
            e.__eventHandlerChangeListener__ = t
        },
        Zr = (e, t, r, n, o, a, i, l) => {
            var c = a ? "__wxEventCaptureHandleName" : "__wxEventHandleName";
            t[c] || (t[c] = Object.create(null)), void 0 === t[c][r] && t.addListener(r, (function(n) {
                var a = t[c][r],
                    s = n.mutatedMarked();
                if ((!l || !n.mutatedMarked()) && (l && n.markMutated(), a)) {
                    n._hasListeners = !0;
                    var u = t.ownerShadowRoot;
                    if (u) {
                        var d = u.getHostNode(),
                            f = Br.Component.getComponentOptions(d).writeOnly;
                        if (!f || n._allowWriteOnly)
                            if (i)
                                if ("function" == typeof a && vr()) {
                                    var p = {
                                        type: n.type,
                                        timeStamp: n.timeStamp,
                                        target: Gr(n.target, f, this),
                                        currentTarget: Gr(this, f, null),
                                        mark: n.mark,
                                        detail: n.detail,
                                        touches: Hr(n.touches),
                                        changedTouches: Hr(n.changedTouches),
                                        mut: s
                                    };
                                    p.instance = Or(t);
                                    var _ = a(hr(p, !0), hr(Or(t, !0), !0));
                                    if (br(), !1 === _) return _
                                } else console.warn('Component "' + d.is + '" does not have a wxs function to handle event "' + n.type + '".');
                        else {
                            var v = ur(n._userTap),
                                h = {
                                    type: n.type,
                                    timeStamp: n.timeStamp,
                                    target: Ur(n.target, Gr(n.target, f, this), n.type),
                                    currentTarget: Ur(this, Gr(this, f, null), n.type),
                                    mark: n.mark,
                                    detail: n.detail,
                                    touches: Hr(n.touches),
                                    changedTouches: Hr(n.changedTouches),
                                    mut: s,
                                    _requireActive: n._requireActive,
                                    _relatedInfo: n._relatedInfo,
                                    _userTap: v
                                };
                            if (v) try {
                                var g = Br.Component.getComponentOptions(d).domain.split("/", 1)[0],
                                    m = __wxConfig.accountInfo.appId;
                                if (Lr.includes(g) || Lr.includes(m)) {
                                    var y = Date.now();
                                    h._xpath = ((e, t) => {
                                        for (var r = [], n = e; n;) {
                                            var o = jr(n, t);
                                            if (!o) break;
                                            if (r.push(o), o.optimized) break;
                                            if (!n.__wxElement) break;
                                            n = Fr(n)
                                        }
                                        return r.reverse(), (r.length && r[0].optimized ? "" : "/") + r.join("/")
                                    })(t.$$), h._xpathCost = Date.now() - y
                                }
                            } catch (n) {}
                            te(S.WX_EVENT, [e.nodeId.getNodeId(d), a, h], e.viewId, !!n._requireActive || void 0)
                        }
                    }
                    return !o && void 0
                }
            }), {
                capture: a
            }), i ? (t[c][r] = n, "skyline" === s() && t.__eventHandlerChangeListener__ && t.__eventHandlerChangeListener__(r, t[c][r], a)) : (t[c][r] = null == n ? "" : String(n), t.__eventHandlerChangeListener__ && t.__eventHandlerChangeListener__(r, t[c][r], a), "webview" === s() || !t.__domElement || "function" != typeof t.__domElement.setListenerOption || "skyline" === s() && "touchstart" !== r || t.__domElement.setListenerOption(r, !o, Boolean(a)))
        },
        zr = (e, t, r, n) => {
            var o = qi.getByNode(e);
            e.__component__ && !Ce.restoring && e.__isXrFrame__, e.dataset = e.dataset || {};
            var a = 0,
                i = !1,
                l = [],
                c = e instanceof Br.Component,
                u = c && "//" === $r(e).domain,
                d = Br.Component.getDataProxy(e),
                f = function() {
                    var f, _ = t[p],
                        v = null;
                    if ("slot" === e.is && e instanceof Br.VirtualNode && "name" === p) return Br.Element.setSlotName(e, _), "continue";
                    if ("id" === p) return e.id = null == _ ? "" : _, "continue";
                    if ("slot" === p) return e.slot = null == _ ? "" : _, "continue";
                    if ("class" === p) {
                        if (c) e.class = e.__wxsClass ? mr(" ", null == _ ? "" : _, e.__wxsClass) : null == _ ? "" : _, c && e.hasExternalClass("class") && e.setExternalClass("class", _);
                        else e.class = _;
                        return "continue"
                    }
                    if ("style" === p)
                        if (c && e.$$) {
                            var h = wx.transformRpx(_, !0);
                            e.setNodeStyle(h, T.ATTR), h !== _ ? fe(e, T.ATTR, (() => {
                                var t = wx.transformRpx(_, !0);
                                e.setNodeStyle(t, T.ATTR), e.__transformedPropValue = t
                            })) : pe(e, T.ATTR), e.__banned && ge(e)
                        } else e.$$ && e.setNodeStyle(_, T.ATTR);
                    if ("skyline" === s() && p.startsWith("worklet:") && (p = `worklet:${Be(p.slice(8))}`), c && Br.Component.hasPublicProperty(e, p)) {
                        !u && Ce.restoring || (d.scheduleReplace([p], _, null != r ? r[p] : null), u ? d.doUpdates(void 0, !0) : (i = !0, e.isInnerDataExcluded(p) || a++));
                        var g = n && n["model:" + $e(p)];
                        if (g) {
                            var m = g.match(/^\{\{(.*?)\}\}$/);
                            if (m) {
                                var y = m[1].match(/^\s*([_a-zA-Z$][_a-zA-Z0-9$]+)\s*$/);
                                if (y) {
                                    var w = y[1];
                                    e.__modelValueName = Object.assign(e.__modelValueName || {}, {
                                        [p]: w
                                    }), l.push(p)
                                } else console.warn("For developer:Two-way binding does not support complex data paths currently. This two-way binding is ignored.")
                            } else console.warn(`For developer:"${g}" is not an assignable expression. This two-way binding is ignored.`)
                        }
                        return "continue"
                    }
                    if ("style" === p) return "continue";
                    if (p.startsWith("data-")) {
                        var b = Be(p.slice(5).toLowerCase());
                        if (e.dataset[b] = _, e.setAttribute(p, _), e.__componentOptions && "//" === e.__componentOptions.domain) {
                            var x = Br.Element.getMethodCaller(e),
                                E = x.onPropertyUpdate;
                            "function" == typeof E && E.call(x, "dataset", b, _)
                        }
                        return "continue"
                    }
                    if ("$gdc" === p) return "function" == typeof(f = _) && (_r = f), "continue";
                    if ((v = p.match(/^\$wxs:(capture-)?(mut-)?(bind|catch):?(.+)$/)) && ("function" == typeof _ || !_)) return Zr(o, e, v[4], _, "catch" === v[3], v[1], !0, v[2]), H() && e.setAttribute("exparser:info-attr-" + p.slice(4), _.name), "continue";
                    if (v = p.match(/^(capture-)?(mut-)?(bind|catch):?(.+)$/)) return Zr(o, e, v[4], _, "catch" === v[3], v[1], !1, v[2]), H() && e.setAttribute("exparser:info-attr-" + p, _), "continue";
                    if ("on" === p.slice(0, 2)) return Zr(o, e, p.slice(2), _, !1, !1, !1), "continue";
                    if ("animation" === p) {
                        if (c && e.$$ && null !== _ && "object" == typeof _ && _.actions && _.actions.length > 0) {
                            var C = 0,
                                S = _.actions,
                                A = _.actions.length;

                            function R() {
                                if (C < A) {
                                    var {
                                        transition: t,
                                        transitionProperty: r,
                                        transform: n,
                                        transformOrigin: o,
                                        style: a
                                    } = wx.animationToStyle(S[C]), i = e.__styleObj ? Object.assign({}, e.__styleObj, {
                                        transition: t,
                                        transform: n,
                                        transitionProperty: r,
                                        transformOrigin: o
                                    }) : {
                                        transition: t,
                                        transform: n,
                                        transitionProperty: r,
                                        transformOrigin: o
                                    };
                                    for (var s of (i["-webkit-transition"] = i.transition, i["-webkit-transform"] = i.transform, i["-webkit-transition-property"] = i.transitionProperty, i["-webkit-transform-origin"] = i.transformOrigin, Object.keys(a || {}))) i[s] = a[s];
                                    e.__styleObj = i, "" !== i.transform && (e.__transformNoneEnabled = !0);
                                    var l = Object.keys(i).filter((t => !(t.toLowerCase().includes("transition") && "" === i[t] || "" === t.trim() || void 0 === i[t] || !t.toLowerCase().includes("transform") && "" === i[t] || !isNaN(parseInt(t, 10))) && (t.toLowerCase().includes("transform") && "" === i[t] && e.__transformNoneEnabled && (i[t] = "none"), !0))).map((e => `${e.replace(/([A-Z]{1})/g,(e=>` - $ {
                                                e.toLowerCase()
                                            }
                                            `))}:${i[e]}`)).join(";"),
                                        c = () => {
                                            e.setNodeStyle(wx.transformRpx(l, !0), T.ANIMATION)
                                        };
                                    c(), fe(e, T.ANIMATION, c), e.__banned && ge(e)
                                }
                            }
                            e.addListener("transitionend", (() => {
                                C += 1, R()
                            })), R()
                        }
                        return "continue"
                    }
                    if (v = p.match(/^\$wxs:change:(.+)$/)) return e.wxsObserver = e.wxsObserver || {}, e.wxsObserver[v[1]] = e.wxsObserver[v[1]] || {}, e.wxsObserver[v[1]].observer = _, "continue";
                    if (v = p.match(/^mark:(.+)$/)) return e.setMark(v[1], _), "continue";
                    var O = $e(p);
                    if (c && e.hasExternalClass(O)) return e.setExternalClass(O, _), "continue";
                    if ("webview" !== s() && e instanceof Br.NativeNode) {
                        var I = "skyline" === s() ? Be(p) : $e(p);
                        if (void 0 !== e.__extraAttributeFilters && "function" == typeof e.__extraAttributeFilters[I]) try {
                            e.__extraAttributeFilters[I](e, I, _, (t => {
                                e.setAttribute(I, t)
                            }))
                        } catch (N) {
                            wxNativeConsole.error(`[Skyline] attribute filter error, on node <${e.is}>, attr [${I}], msg: ${N.message}`), e.setAttribute(I, _)
                        } else e.setAttribute(I, _)
                    }
                };
            for (var p of Object.keys(t || {})) f();
            i && d.doUpdates(a, !0);
            for (var _ = function() {
                    var t = l[v];
                    e.__wxPropertyListener__ && e.__wxPropertyListener__[t] || (e.setPropertyChangeListener(t, (r => {
                        var n = e.ownerShadowRoot.getHostNode(),
                            a = o.nodeId.getNodeId(n);
                        te(S.MODEL_VALUE_CHANGE, {
                            data: r,
                            modelValueName: e.__modelValueName && e.__modelValueName[t],
                            nodeId: a
                        }, o.viewId)
                    })), e.__wxPropertyListener__ = e.__wxPropertyListener__ || {}, e.__wxPropertyListener__[t] = !0)
                }, v = 0; v < l.length; v++) _();
            if ((e.wxsObserver && vr() && Rr(e, t), e.__component__ && !Ce.restoring) && o.operationFlow.iterator.nextStep()[0] !== S.FLOW_APPLY_PROPERTY) throw new Error("Framework inner error (expect FLOW_APPLY_PROPERTY but get another)")
        },
        qr = Object.create(null),
        Jr = !1,
        Kr = {},
        Xr = function(e, t) {
            Jr && (qr[e] = t)
        },
        Yr = function() {
            return Jr
        },
        Qr = {},
        en = {};
    se(S.XR_FRAME_COMP_OPTIONS, (e => {
        var t = e[0];
        Object.keys(t).forEach((e => {
            Qr[e] = t[e]
        }));
        var r = e[1];
        Object.keys(r).forEach((e => {
            en[e] = r[e]
        }))
    }));
    var tn = a(),
        rn = tn.dataUtils.deepCopy,
        nn = {
            tag: "shadow",
            children: []
        },
        on = (t, r) => {
            var n, o = Date.now(),
                a = t ? t(r, null, e.g) : nn;
            return n = Date.now() - o, Ae += 1, Oe += n, a.tag = "shadow", a
        },
        an = (e, t, r, n) => {
            var o, a = Qr[o = e] || Qr[en[o]] || {},
                i = null;
            return a.isXrComp && "xr-frame" !== oe(n.viewId) && "xr-frame" !== s() ? (wxNativeConsole.info(`[VirtualTreeCreate] <${t.tag}>[${e}] will be created as xr-frame`), (i = r.createComponent("wx-xr-frame", void 0, t.generics, n)).xrFrameTouchEventBubble = a.xrFrameTouchEventBubble, i.__isXrFrame__ = !0) : i = r.createComponent(t.tag, void 0, t.generics, n), i
        },
        sn = (e, t, r, n, o) => {
            var a = null;
            if (n || (n = qi.getByNode(t)), "shadow" === e.tag && t) r = a = tn.ShadowRoot.create(t);
            else if ("virtual" === e.tag || "shadow" === e.tag) {
                var i = "virtual";
                1 === e.wxXCkey || 3 === e.wxXCkey ? i = "wx:if" : 2 !== e.wxXCkey && 4 !== e.wxXCkey || (i = "wx:for"), a = r.createVirtualNode(i), tn.Element.setInheritSlots(a), a.__wxVkey__ = e.wxVkey
            } else if ("wx-slot" === e.tag) a = r.createVirtualNode("slot"), tn.Element.setSlotName(a, "");
            else {
                if (r.tagNameUsed(e.tag)) {
                    var s = r.getHostNode(),
                        l = r.getCompDefByTagName(e.tag);
                    "string" == typeof l.is && (l = l.is);
                    var c = s.getPlaceholder(e.tag);
                    n.compManager.shouldUsePlaceholder(l) && !!c ? ((a = r.createComponent(e.tag, c, e.generics, n)).__placeholder__ = !0, n.compManager.arrangePlaceholderReplace(l, (() => {
                        var e = a.__vtObj,
                            t = an(l, e, r, n);
                        ln(e, t, n, o);
                        var i = [...a.childNodes];
                        a.parentNode && a.parentNode.insertBefore(t, a), i.forEach((e => {
                            t.appendChild(e)
                        })), a.parentNode && a.parentNode.removeChild(a)
                    }))) : a = an(l, e, r, n)
                } else a = r.createComponent(e.tag, void 0, e.generics, n)
            }
            ln(e, a, n, o);
            var u = e.children;
            if (u)
                for (var d = 0; d < u.length; d++) {
                    var f = u[d];
                    if (null != f)
                        if ("object" == typeof f) {
                            var p = sn(f, null, r, n, o);
                            a.appendChild(p)
                        } else {
                            var _ = r.createTextNode(f);
                            a.appendChild(_)
                        }
                }
            return a
        },
        ln = (e, t, r, n) => {
            if ((Yr() || !0 === t.__placeholder__) && (t.__vtObj = e), 3 !== e.wxXCkey && 4 !== e.wxXCkey || window.__customComponentMode__ && (t.__wxDynamicSync__ = 4 === e.wxXCkey ? "wx:for" : "wx:if"), e.extraAttr)
                for (var o of Object.keys(e.extraAttr)) t.setAttribute(o, e.extraAttr[o]);
            void 0 !== e.wxScopeData && (t.__wxScopeData__ = e.wxScopeData);
            var a = t.__component__,
                i = t.__placeholder__,
                s = t.__isXrFrame__;
            if (a || i || s) {
                if (Ce.restoring) {
                    var l = Ce.idDataMap[r.nodeId.getNodeId(t)];
                    tn.Component.replaceWholeData(t, l, null)
                } else {
                    var c = r.operationFlow.iterator.nextStep();
                    if (c[0] !== S.FLOW_CREATE_NODE) throw new Error("Framework inner error (expect FLOW_CREATE_NODE but get another)");
                    r.nodeId.allocNodeId(t, c[1])
                }
                H() && !i && t.setAttribute("exparser:info-custom-component", t.__componentInstanceId), (e => {
                    if (ve) {
                        var t = _e.Component.getComponentOptions(e).domain.split("/", 1)[0],
                            r = e.shadowRoot;
                        ve[t] && ye(r, ve[t])
                    }
                })(t), t.setAttribute("is", t.is)
            }
            var u = n ? rn(e.attr) : e.attr;
            if (zr(t, u, e.raw, e.rawAttr), t.__isXrFrame__) {
                var d = _i(t.$.canvas, {
                        node: !0
                    }),
                    f = r.nodeId.getNodeId(t);
                te(S.XR_FRAME_CANVAS_CREATED, [d, f], r.viewId)
            }
        },
        cn = e => {
            if (e.operationFlow.iterator.nextStep()[0] !== S.FLOW_MINIPULATE_CHILD) throw new Error("Expect FLOW_MINIPULATE_CHILD but get another")
        },
        un = Object.prototype.hasOwnProperty,
        dn = e => "number" == typeof e && isNaN(e),
        fn = (e, t) => {
            for (var r = (e => {
                    for (var t = {}, r = 0; r < e.length; ++r) {
                        var n = e[r],
                            o = n && n.wxKey;
                        o ? un.call(t, o) ? n.wxKey = void 0 : t[o] = r : dn(o) && (n.wxKey = void 0)
                    }
                    return t
                })(e), [n, o] = (e => {
                    for (var t = {}, r = [], n = 0; n < e.length; ++n) {
                        var o = e[n],
                            a = o && o.wxKey;
                        a ? un.call(t, a) ? (console.warn(`For developer:Do not set same key "${a}" in wx:key.`), o.wxKey = void 0, r.push(n)) : t[a] = n : (dn(a) && (o.wxKey = void 0), r.push(n))
                    }
                    return [t, r]
                })(t), a = [], i = [], s = [], l = 0, c = 0, u = 0; u < e.length; ++u) {
                var d = e[u].wxKey;
                if (d)
                    if (un.call(n, d)) {
                        var f = n[d];
                        a.push(t[f])
                    } else i.push(u - c), ++c, a.push(null);
                else if (l < o.length) {
                    var p = o[l];
                    a.push(t[p]), ++l
                } else i.push(u - c), ++c, a.push(null)
            }
            for (var _ = a, v = 0, h = [], g = 0; g < t.length;) {
                for (var m = t[g], y = m && m.wxKey, w = _[v], b = w && w.wxKey; null === w;) b = (w = _[++v]) && w.wxKey;
                v >= _.length ? (s.push({
                    oldIndex: r[y],
                    index: g,
                    pos: -1
                }), ++v, ++g) : b === y ? (h.push(v), ++v, ++g) : y ? (b ? n[b] === g + 1 ? s.push({
                    oldIndex: r[y],
                    index: g,
                    pos: v
                }) : (w = _[++v]) && w.wxKey === y ? (h.push(v), ++v) : (--v, s.push({
                    oldIndex: r[y],
                    index: g,
                    pos: v
                })) : s.push({
                    oldIndex: r[y],
                    index: g,
                    pos: v
                }), ++g) : ++v
            }
            for (var x = 0, E = 0; E < s.length; E++) {
                var C = s[E].pos;
                if (-1 === C) break;
                for (; x < h.length && C > h[x];) x++;
                x >= h.length ? s[E].pos = -1 : s[E].pos = h[x]
            }
            return {
                children: a,
                removes: i,
                inserts: s
            }
        },
        pn = (e, t, r) => {
            if (e !== t && (!e || r))
                if (null == t) r.parentNode.removeChild(r);
                else if ("object" == typeof t)
                if ("object" != typeof e || null === e || e.tag !== t.tag || String(e.wxKey) !== String(t.wxKey) || "virtual" === e.tag && e.wxVkey !== t.wxVkey) {
                    var n = qi.getByNode(r),
                        o = r.parentNode,
                        a = sn(t, null, o.ownerShadowRoot, n, !1);
                    o && ("wx:for" === o.__wxDynamicSync__ || "wx:if" === r.__wxDynamicSync__ ? (n.nodeId.addNode(a), o.replaceChild(a, r), cn(n), n.nodeId.removeNode(r)) : o.replaceChild(a, r), r.__banned && me(a))
                } else {
                    if (t.n && t.n.length) {
                        for (var i = t.n, s = t.attr, l = {}, c = 0; c < i.length; c++) {
                            var u = i[c];
                            l[u] = s[u]
                        }
                        zr(r, l, t.raw, t.rawAttr)
                    }
                    void 0 !== t.wxScopeData && (r.__wxScopeData__ = t.wxScopeData), void 0 !== r.__vtObj && (r.__vtObj = t), _n(e, t, r)
                }
            else if ("string" == typeof e) t !== e && (r.textContent = t);
            else {
                var d = r.ownerShadowRoot.createTextNode(t);
                r.parentNode.replaceChild(d, r)
            }
        },
        _n = (e, t, r) => {
            var n = !!v("customComponents"),
                o = e.children,
                a = t.children,
                i = "virtual" === e.tag && (2 === e.wxXCkey || 4 === e.wxXCkey || void 0 === e.wxXCkey) || !n && o.length !== a.length,
                s = null,
                l = null;
            if (i) {
                var c = fn(o, t.children);
                a = c.children, s = c.removes, l = c.inserts
            }
            for (var u = r.childNodes, d = 0; d < o.length; d++) {
                var f = o[d],
                    p = a[d];
                !p && i || pn(f, p, u[d])
            }
            i && ((e, t, r, n) => {
                for (var o = qi.getByNode(r), a = r.childNodes, i = [], s = 0; s < t.length; s++) {
                    var l = t[s];
                    i.push({
                        node: void 0 !== l.oldIndex ? a[l.oldIndex] : null,
                        before: l.pos >= 0 ? a[l.pos] : void 0,
                        index: l.index
                    })
                }
                for (var c = 0; c < e.length; c++) {
                    var u = a[e[c]];
                    r.removeChild(u), "wx:for" === a.__wxDynamicSync__ && (cn(o), o.nodeId.removeNode(u))
                }
                for (var d = 0; d < i.length; d++) {
                    var {
                        before: f,
                        index: p
                    } = i[d], _ = i[d].node;
                    null === _ && (_ = sn(n[p], null, r.ownerShadowRoot, o, !1)), "wx:for" === r.__wxDynamicSync__ ? (o.nodeId.addNode(_), r.insertBefore(_, f), cn(o)) : r.insertBefore(_, f)
                }
                r.__banned && me(r)
            })(s, l, r, t.children)
        },
        vn = a(),
        hn = null,
        gn = {},
        mn = 1,
        yn = [],
        wn = (e, t) => {
            if (gn[e] || null !== hn) {
                var r = gn[e] || hn,
                    n = yn[yn.length - 1],
                    o = yn[yn.length - 2],
                    {
                        isMergedUpdate: a,
                        dataPaths: i,
                        pendingStartTimestamp: s,
                        updateStartTimestamp: l,
                        updateEndTimestamp: c,
                        pageId: u
                    } = t(r);
                te(S.UPDATE_PERFORMANCE_STAT, [e, {
                    isMergedUpdate: a,
                    dataPaths: i,
                    updateProcessId: n,
                    parentUpdateProcessId: o,
                    pendingStartTimestamp: s,
                    updateStartTimestamp: l,
                    updateEndTimestamp: c
                }], u)
            }
        },
        bn = null;
    ae(S.ENABLE_UPDATE_PERFORMANCE_STAT, (e => {
        var [t, r] = e;
        gn[t] = r
    })), ae(S.DISABLE_UPDATE_PERFORMANCE_STAT, (e => {
        var [t] = e;
        delete gn[t]
    })), ae(S.ENABLE_GLOBAL_UPDATE_PERFORMANCE_STAT, (e => {
        var [t] = e;
        hn = t
    }));
    var xn = a(),
        En = xn.dataUtils.deepCopy,
        Cn = e => {
            if ("object" != typeof e || !e) return void 0 !== window && (window.__usingDelayedGwx__ = 1 | (window.__usingDelayedGwx__ || 0)), e;
            void 0 !== window && (window.__usingDelayedGwx__ = 2 | (window.__usingDelayedGwx__ || 0));
            var t = e.slice();
            return t.shift()(...t)
        },
        Sn = function(e, t, r) {
            for (var n = e.childNodes, o = 0; o < n.length; o++) {
                var a = n[o];
                a instanceof xn.TextNode || (a.__id && (t[a.__id] = a), void 0 !== a.__slotName && (r[a.__slotName] = a), Sn(a, t, r))
            }
        };
    class An {
        createInstance(e, t) {
            var r = new On,
                n = t;
            if (n = qi.getByNode(e), r._template = this, r._generateFunc = this._generateFunc, r.data = En(this._data), r.idMap = Object.create(null), r.slots = Object.create(null), Ce.restoring) {
                if (Ce.compIdArrIndex >= Ce.compIdArr.length) throw new Error("Component count unmatched while page recovering");
                n.nodeId.allocNodeId(e, Ce.compIdArr[Ce.compIdArrIndex++]);
                var o = Ce.idDataMap[n.nodeId.getNodeId(e)];
                r._virtualTree = on(this._generateFunc, o)
            } else r._virtualTree = this._virtualTree;
            return r.shadowRoot = sn(r._virtualTree, e, null, t, !0), Sn(r.shadowRoot, r.idMap, r.slots), r.listeners = [], this._isSimpleComponent || (e.__component__ = !0), r._delayedUpdateValues = null, r
        }
        updateGenerateFunc(e) {
            this._generateFunc = Cn(e), this._virtualTree = on(this._generateFunc, this._initValues), qi.list().forEach((t => {
                [t.root, t.tabRoot].forEach((t => {
                    t && m(t, 1, (t => {
                        t instanceof xn.Component && t.__templateInstance._template === this && (t.__templateInstance._generateFunc = e)
                    }))
                }))
            }))
        }
    }
    An.create = function(e, t, r, n) {
        var o = new An;
        o._initValues = r, o._data = t;
        var a = e.template;
        return o._generateFunc = Cn(a.func), o._virtualTree = on(o._generateFunc, o._initValues), o._isSimpleComponent = "simple://" === n.domain.slice(0, 9), Xr(a.path, (e => {
            a.func = e, o.updateGenerateFunc(e)
        })), o
    };
    class On {
        beforeMergeValues(e, t, r) {}
        beforeUpdateValues(e, t, r) {
            if (!("number" != typeof r)) {
                var n = qi.getByNode(e),
                    o = n.operationFlow.iterator.nextStepIf(S.FLOW_DATA_OBSERVER);
                if (o) {
                    var a = o[1];
                    if (e && a.length) {
                        wn(n.nodeId.getNodeId(e), (e => ({
                            isMergedUpdate: !0,
                            dataPaths: e.withDataPaths ? a.map((e => e[0])) : void 0,
                            pageId: n.viewId
                        })));
                        var i = xn.Component.getDataProxy(e);
                        i.setChanges(a), i.doUpdates(void 0, !0)
                    }
                }
            }
        }
        updateValues(e, t, r, n, o, a) {
            if (!Ce.restoring) {
                if (this._delayedUpdateValues) this._delayedUpdateValues.push([En(t), r, n, o, a]);
                else {
                    this._delayedUpdateValues = [];
                    try {
                        this._updateValues(e, t, r, n, o, a);
                        var i = this._delayedUpdateValues;
                        this._delayedUpdateValues = null;
                        for (var s = 0; s < i.length; s++) {
                            var l = i[s];
                            this._updateValues(e, l[0], l[1], l[2], l[3], l[4])
                        }
                    } catch (e) {
                        throw this._delayedUpdateValues = null, e
                    }
                }
                0
            }
        }
        _updateValues(e, t, r, n, o, a) {
            var i = "number" != typeof a,
                s = !v("propValueDeepCopy"),
                l = Ee(t, o, !0, !1, s),
                c = on(this._generateFunc, l);
            Ee(t, o, !1, i, !1);
            var u = this._virtualTree;
            this._virtualTree = c, pn(u, c, this.shadowRoot)
        }
        _resetShadowChildren(e, t, r) {
            var n = () => {
                if (r.operationFlow.iterator.nextStep()[0] !== S.FLOW_HOT_UPDATE_CHILD) throw new Error("Expect FLOW_HOT_UPDATE_CHILD but get another")
            };
            for (var o = this.shadowRoot, a = (this._virtualTree.children || []).length, i = 0; i < a; i++) o.removeChild(o.childNodes[0]);
            n();
            var s = on(this._generateFunc, t);
            n(), this._virtualTree = s;
            for (var l = sn(s, null, e.shadowRoot, r, !0).childNodes, c = l.length, u = 0; u < c; u++) o.insertBefore(l[0], o.childNodes[u])
        }
    }
    var Tn = a(),
        In = null,
        Rn = () => {
            In = {};
            var e = null;
            __wxConfig && __wxConfig.plugins ? e = __wxConfig.plugins : void 0 !== window && window && window.__wxConfigAppService__ && window.__wxConfigAppService__.plugins && (e = window.__wxConfigAppService__.plugins);
            var t = !1;
            if (e)
                for (var r of Object.keys(e)) {
                    var n = e[r].provider,
                        o = e[r].subpackage;
                    if (void 0 !== o) {
                        t = !0;
                        var a = o || "";
                        "__APP__" === a && (a = ""), "/" === a[0] && (a = a.slice(1)), a && "/" !== a.slice(-1) && (a += "/"), In[n] = a
                    }
                }
            if (!t) {
                var i;
                if (__wxConfig && __wxConfig.subPackages) i = __wxConfig.subPackages;
                else {
                    if (void 0 === window || !window || !window.__subPackages) return;
                    i = window.__subPackages
                }
                i.length && i.forEach((e => {
                    if (e) {
                        var t = e.root || "";
                        if (t && "/" !== t.slice(-1) && (t += "/"), e.plugins)
                            for (var r of Object.keys(e.plugins)) {
                                var n = e.plugins[r] && e.plugins[r].provider;
                                n && (In[n] = t)
                            }
                    }
                }))
            }
        },
        Nn = e => {
            var t = e.match(/(?:^|\/)__(wx|plugin)__\/(.*)$/);
            return t ? "wx" === t[1] ? "wx://" + t[2] : "plugin-private://" + t[2] : e
        },
        Pn = e => (In || Rn(), (Tn.Component._list[e] && Tn.Component._list[e].is || e).replace(/^plugin-private:\/\/([0-9a-zA-Z]+)\//, ((e, t) => (In[t] || "") + "__plugin__/" + t + "/")).replace(/^wx:\/\//, "__wx__/")),
        kn = e => (In || Rn(), (In[e] || "") + "__plugin__/" + e + "/"),
        Mn = e => {
            In || Rn();
            var t, r, n, o, a, i = e.match(/^plugin:\/\/(.+?)\//);
            if (i) return Mn(In[i[1]] || "");
            if (i = e.match(/^plugin-private:\/\/([0-9a-zA-Z]+)\//)) return Mn(In[i[1]] || "");
            t = null !== (r = null !== (n = null === (o = __wxConfig) || void 0 === o ? void 0 : o.subPackages) && void 0 !== n ? n : null === (a = window) || void 0 === a ? void 0 : a.__subPackages) && void 0 !== r ? r : [];
            for (var s = 0; s < t.length; ++s) {
                var l = t[s].root || "";
                if (l && "/" !== l.slice(-1) && (l += "/"), e.slice(0, l.length) === l) return t[s]
            }
            return null
        },
        Dn = e => {
            var t = Mn(e);
            if (!t) return "__APP__";
            var r = t.root || "";
            return "/" === r.slice(-1) ? r : r + "/"
        },
        Fn = e => {
            var t = Mn(e);
            return !!t && t.independent
        },
        jn = {
            main: "app-wxss.js",
            sub: "page-frame.js",
            lazyCommon: "common.app.js",
            lazyApp: "webview.app.js",
            plugin: "pageframe.js"
        },
        Ln = ["wx0354ba48aadc0ab2", "wxfa43a4a7041a84de"],
        Bn = e => ("__APP__" === e || ("/" !== e[0] && (e = "/" + e), "/" !== e[e.length - 1] && (e += "/")), e),
        $n = {},
        Wn = (e, t) => {
            e = Bn(e), "string" != typeof t.subpackage && (t.subpackage = e), void 0 === $n[e] ? $n[e] = [t] : $n[e].push(t)
        },
        Un = w(["ready"]),
        Gn = (e, t) => {
            Un.on("ready", (() => {
                t($n[e] || [])
            }))
        };
    __wxConfig.onReady((() => {
        var e = new Set,
            t = {};
        Object.keys(__wxConfig.plugins || {}).forEach((r => {
            var n = __wxConfig.plugins[r];
            "string" == typeof n.subpackage ? Wn(n.subpackage, n) : (e.add(n.provider), t[n.provider] = n)
        })), (__wxConfig.subpackages || []).forEach((r => {
            Object.keys(r.plugins || {}).forEach((n => {
                var o = r.plugins[n],
                    a = o.provider;
                e.has(a) && (e.delete(a), delete t[a], Wn(r.root, o))
            }))
        })), Array.from(e).forEach((e => {
            Wn("__APP__", t[e])
        })), Un.notify("ready")
    }));
    var Hn = (e, t) => {
            t(`isLazyLoad: ${Qo()}`), t(`moduleName: ${e}`);
            var r = "devtools" === __wxConfig.platform ? [] : ($n[Bn(e)] || []).map((e => {
                var t = e.provider,
                    r = `__plugin__/${t}`;
                return {
                    plugin_id: t,
                    prefix_path: Ln.includes(t) ? null : r
                }
            }));
            t(`separatedPlugins: ${JSON.stringify(r)}`);
            var n = "__APP__" === e,
                o = n ? "" : e;
            if (Qo()) {
                var a = [];
                return r.forEach((e => {
                    var t = (o + e.prefix_path + "/").replace(/\/\/$/, "/");
                    e.prefix_path || (t += `__extended__/${e.plugin_id}/`), a.push(t + jn.plugin)
                })), a.push(o + jn.lazyCommon, o + jn.lazyApp), t(`all files to inject: ${JSON.stringify(a)}`), a
            }
            var i = r.map((e => {
                var t = (o + e.prefix_path + "/").replace(/\/\/$/, "/");
                return e.prefix_path || (t += `__extended__/${e.plugin_id}/`), t + jn.plugin
            }));
            return n ? i.push(o + jn.main) : i.push(o + jn.sub), t(`all files to inject: ${JSON.stringify(i)}`), i
        },
        Vn = e => (t, r = {}) => {
            if (0 === t.length) return {
                cost: 0,
                res: "ok"
            };
            var n = __subContextEngine__;
            wxNativeConsole.info(`[Lazyload] loadJsFileTo${e}`);
            var o = Date.now(),
                a = n.loadJsFiles(t, null, {
                    reportKey: void 0,
                    isPageInitialScript: r.isPageInitialScript
                }),
                i = Date.now();
            return wxNativeConsole.info(`[Lazyload] loadJsFileTo${e} done, cost: ${i-o}ms`), {
                cost: i - o,
                res: a
            }
        },
        Zn = (Vn("AppService"), Vn("RenderContext")),
        zn = new Set,
        qn = !1,
        Jn = [],
        Kn = Vn("SclContext"),
        Xn = (e, t, r = !1) => {
            if (qn) Jn.push([e, t, r]);
            else {
                var n = e.filter((e => zn.has(e))),
                    o = r ? e : e.filter((e => !zn.has(e)));
                if (n.length > 0 && wxNativeConsole.info("[VD] loadJsFileToWebview ignored loaded: " + n.join(",")), 0 === o.length) return wxNativeConsole.info("[VD] loadJsFileToWebview no files to load, return"), void t(0);
                o.forEach((e => zn.add(e)));
                var a = {
                        paths: o
                    },
                    i = void 0;
                "android" === __wxConfig.platform ? a.key = i : a.options = {
                    reportKey: i
                }, qn = !0;
                var s = d(),
                    l = Date.now();
                s.invoke("loadJsFiles", a, (() => {
                    var e = Date.now();
                    if (t(e - l), qn = !1, Jn.length > 0) {
                        var r = Jn.shift();
                        Xn(...r)
                    }
                }))
            }
        },
        Yn = new Set,
        Qn = (e, t) => {
            var r = e.filter((e => Yn.has(e))),
                n = e.filter((e => !Yn.has(e)));
            if (r.length > 0 && wxNativeConsole.info(`[loadComponentsInDevTool] ignored loaded: [${r.length} comps]`), 0 === n.length) return wxNativeConsole.info("[loadComponentsInDevTool] no comps to load, return"), t(0), 0;
            n.forEach((e => Yn.add(e)));
            var o = d();
            return (e => {
                Foundation.onStart((() => {
                    e()
                }))
            })((() => {
                var e = Date.now();
                return o.invoke("loadComponents", {
                    comps: n
                }, (() => {
                    var r = Date.now();
                    t(r - e)
                })), Date.now() - e
            }))
        },
        eo = 5e3,
        to = () => {},
        ro = e => {
            to(e)
        },
        no = (e, t) => {
            var r = d();
            wxNativeConsole.info("[VD] injectSubPackages: " + e.join(", ")), r.invoke("injectSubPackages", {
                subPackages: e
            }, t)
        },
        oo = Object.prototype.hasOwnProperty,
        ao = () => "devtools" === __wxConfig.platform || "devtool" === __wxConfig.serviceRuntime,
        io = () => "undefined" != typeof __LAZY_CODE_LOADING_CHUNK_MAP__;
    class so {
        constructor(e, t) {
            this.__viewId = void 0, this.__treeManager = void 0, this.__loadedSubPackage = new Set, this.__injectedSubPackage = new Set, this.__logPrefix = void 0, this.__log = void 0, this.__ensureComponentNotifier = {}, this.__placeholderReplacement = null, this.__pendingReplacement = new Map, this.__injectedComponents = new Set, this.__restoreInjectNotifier = null, this.__pageReady = !1, this.__shouldDoPlaceholderReplaceOnReady = !1, this.__viewId = e, this.__treeManager = t, this.__logPrefix = `[CompMgr] [${s()}] $[${this.__viewId}]`, this.__log = e => {
                wxNativeConsole.info(`${this.__logPrefix} ${e}`)
            }
        }
        get treeManager() {
            return this.__treeManager
        }
        getRestoredData() {
            return [Array.from(this.__loadedSubPackage), Array.from(this.__injectedSubPackage), Object.fromEntries(so.__classPrefixMap), Array.from(this.__injectedComponents), this.__treeManager.rootCompName]
        }
        getRestoreInjectNotifier() {
            return this.__restoreInjectNotifier || (this.__restoreInjectNotifier = w(["inject"])), this.__restoreInjectNotifier
        }
        restore(e) {
            var [t, r, n, o, a] = e, i = () => {
                na(a), ra(a), this.getRestoreInjectNotifier().notify("inject")
            };
            this.setSubPackageLoaded(t), this.batchInjectSubPackages(r, (() => {
                Qo() ? this.batchInjectComponents(o, i) : i()
            })), so.__usedClassPrefix = new Set(Object.values(n)), so.__classPrefixMap = new Map(Object.entries(n))
        }
        onRestoreInjectDone(e) {
            this.getRestoreInjectNotifier().on("inject", e)
        }
        recurseUsingComponents(e) {
            if (!Qo()) return e;
            var t = __wxAppCode__,
                r = "undefined" != typeof __WXML_DEP__ && __WXML_DEP__ || {},
                n = new Set,
                o = new Set,
                a = e => {
                    if (!n.has(e)) {
                        if (n.add(e), oo.call(t, e + ".json")) {
                            o.add(e);
                            var i = Jo(e, t),
                                s = Ko(e, t),
                                l = Xo(e, t);
                            for (var c of Object.keys(i)) oo.call(l, c) ? oo.call(i, l[c]) && a(i[l[c]]) : a(i[c]);
                            for (var u of Object.keys(s)) {
                                var d = s[u];
                                "string" == typeof d.default && a(d.default)
                            }
                        }(r["./" + e + ".wxml"] || []).forEach((e => {
                            var t = e.substr(2, e.length - 7);
                            a(t)
                        }))
                    }
                };
            e.forEach((e => {
                a(e)
            }));
            var i = Array.from(o);
            return this.__log(`recurseUsingComponents(${JSON.stringify(e)}) => [${i.length} components]`), i
        }
        batchLoadSubPackages(e, t) {
            this.__log("batchLoadSubPackages begin: " + e.join(", "));
            var r = !0;
            setTimeout((() => {
                r && ro({
                    type: "subpackage",
                    errMsg: "batchLoadSubpackage: timeout",
                    subpackage: e
                })
            }), eo);
            var n = 0;
            Promise.all(e.map((e => new Promise((t => {
                ((e, t) => {
                    var r = u(),
                        n = Date.now();
                    r.loadSubpackage({
                        name: e,
                        success() {
                            var r = Date.now();
                            t({
                                cost: r - n,
                                res: "ok",
                                pkg: e
                            }), wxNativeConsole.info(`[VD] loadSubPackage ${e} success, cost ${r-n}`)
                        },
                        fail() {
                            var r = Date.now();
                            t({
                                cost: r - n,
                                res: "fail",
                                pkg: e
                            }), wxNativeConsole.info(`[VD] loadSubPackage ${e} fail, cost ${r-n}`)
                        }
                    })
                })(e, t)
            }))))).then((o => {
                r = !1;
                var a = [],
                    i = [];
                o.forEach((e => {
                    var {
                        res: t,
                        pkg: r,
                        cost: o
                    } = e;
                    "fail" === t ? i.push(r) : a.push(r), n += o
                })), i.length && ro({
                    type: "subpackage",
                    subpackage: i,
                    errMsg: "loadSubpackage: fail"
                }), this.__log(`loadSubPackages end: ${e.join(", ")}, cost: ${n}`), this.setSubPackageLoaded(a), this.__treeManager.operationFlow.sendInIndividualFlow([S.FLOW_SET_SUBPACKAGE_LOADED, a]), t(a)
            }))
        }
        setSubPackageLoaded(e) {
            this.__log("setSubPackageLoaded: " + e.join(", ")), e.forEach((e => {
                this.__loadedSubPackage.add(e)
            }))
        }
        batchInjectSubPackages(e, t) {
            this.__log("injectSubPackages: " + e.join(", "));
            var r = e.filter((e => !this.__injectedSubPackage.has(e))).map((e => "__APP__" === e || "/" === e.slice(-1) ? e : e + "/"));
            if (ao()) {
                if ("webview" === s()) no(r, (() => {
                    this.setSubPackageInjected(r), t()
                }));
                else if ("skyline" === s()) {
                    var n = Array.prototype.concat(...r.map((e => Hn(e, (t => {
                        this.__log(`getEntryFile ${e}: ${t}`)
                    })))));
                    Zn(n), this.setSubPackageInjected(r), Ma(this.__viewId, e), t()
                }
            } else {
                var o = [];
                if (r.forEach((e => {
                        o.push(...Hn(e, (t => {
                            this.__log(`getEntryFile ${e}: ${t}`)
                        })))
                    })), "webview" === s()) Xn(o, (() => {
                    this.setSubPackageInjected(r), t()
                }));
                else if ("skyline" === s() || "xr-frame" === s()) Zn(o), this.setSubPackageInjected(r), Ma(this.__viewId, e), t();
                else {
                    if ("scl" !== s()) throw new Error("unknown render backend: " + s());
                    Kn(o), this.setSubPackageInjected(r), t()
                }
            }
        }
        batchInjectComponents(e, t, r = !1) {
            if (!Qo()) return t(0), -1;
            var n = e.map((e => Pn(e))).filter((e => !this.__injectedComponents.has(e))).filter((e => !e.includes("://")));
            this.__log(`injectComponents: [${n.length} components]`);
            var o = [];
            if (io()) {
                var a = new Set(n.map((e => __LAZY_CODE_LOADING_CHUNK_MAP__[e] || e)));
                Array.from(a).forEach((e => {
                    o.push(`${e}.common.js`, `${e}.webview.js`)
                }))
            } else n.forEach((e => {
                o.push(`${e}.common.js`, `${e}.webview.js`)
            }));
            if ("webview" === s()) {
                return (e => {
                    ao() ? Qn(n, e) : new Promise((e => {
                        __wxAppCode__ ? e(0) : Xn(["common.app.js"], e)
                    })).then((() => {
                        Xn(o, e)
                    }))
                })((e => {
                    n.forEach((e => {
                        this.__injectedComponents.add(e)
                    })), t(e)
                })), -1
            }
            if ("skyline" === s() || "xr-frame" === s()) {
                var {
                    cost: i
                } = Zn(o);
                return n.forEach((e => {
                    this.__injectedComponents.add(e)
                })), t(i), i
            }
            if ("scl" === s()) {
                var {
                    cost: l
                } = Kn(o);
                return n.forEach((e => {
                    this.__injectedComponents.add(e)
                })), t(l), l
            }
            throw new Error("unknown render backend: " + s())
        }
        setSubPackageInjected(e) {
            this.__log("setSubPackageInjected: " + e.join(", ")), e.forEach((e => {
                this.__injectedSubPackage.add(e)
            }))
        }
        setInitialSubPackage(e) {
            var t = [Dn(e)];
            Fn(e) || t.includes("__APP__") || t.push("__APP__"), this.setSubPackageLoaded(t), this.setSubPackageInjected(t)
        }
        shouldUsePlaceholder(e) {
            var t = Dn(e),
                r = this.__loadedSubPackage.has(t);
            return Qo() && !(e => e.startsWith("plugin://") || e.startsWith("plugin-private://") || e.includes("__plugin__/wx"))(e) && (r = r && this.__injectedComponents.has(e)), !r
        }
        doLazyLoadReport(e, t) {
            var r = De(),
                n = Boolean(__wxConfig.isFirstPage);
            !1;
            var o = Object.keys(__wxAppCode__).filter((e => e.endsWith(".json"))).length;
            r.set("isFirstPage", n), r.set("totalComps", o), r.set("loadedComps", e), r.set("loadTime", t)
        }
        injectComponentsRecursively(e, t, r = !1, n = !1) {
            if (Qo()) {
                var o = this.recurseUsingComponents(e);
                this.batchInjectComponents(o, (e => {
                    r && this.doLazyLoadReport(o.length, e), t()
                }), n);
                0
            } else t()
        }
        ensureComponents(e, t, r) {
            var n, o = e.map((e => Dn(e)));
            n = o, (o = Array.from(new Set(n))).some((e => !Fn(e))) && !o.includes("__APP__") && o.unshift("__APP__"), o = o.filter((e => !this.__loadedSubPackage.has(e))), this.batchLoadSubPackages(o, (n => {
                this.__treeManager.operationFlow.sendInIndividualFlow([S.FLOW_INJECT_SUBPACKAGE, t, n]), Qo() && this.__treeManager.operationFlow.sendInIndividualFlow([S.FLOW_INJECT_COMPONENT, t, e]), this.batchInjectSubPackages(n);
                var o = __glassEaselAdapter__.getEnv();
                o.codeManager.prepareSubPackagesStyle(n), o.afterPackageCommonEvaluation(), o.codeManager.wrapComponentsInjection((() => {
                    this.injectComponentsRecursively(e)
                })), r()
            }))
        }
        pendPlaceholderReplacement(e) {
            var t = this.getPlaceholderReplaceData();
            this.finishPlaceholderReplacement(), null !== t && (this.__pendingReplacement.set(e, t), this.__log(`set [${e}] as pending placeholder replacements (${t.replacers.length} replacers)`))
        }
        getAndClearPendingPlaceholderReplacement(e) {
            var t = this.__pendingReplacement.get(e);
            return this.__pendingReplacement.delete(e), t
        }
        getEnsureComponentsNotifier(e) {
            if (!this.__ensureComponentNotifier[e]) {
                var t = ["inject", "def"];
                Qo() && t.push("inject-common"), this.__ensureComponentNotifier[e] = w(t)
            }
            return this.__ensureComponentNotifier[e]
        }
        destructEnsureComponentsNotifier(e) {
            this.__ensureComponentNotifier[e] && delete this.__ensureComponentNotifier[e]
        }
        injectSubPackageOnReady(e, t) {
            this.batchInjectSubPackages(t, (() => {
                var t = Qo() ? "inject-common" : "inject";
                this.getEnsureComponentsNotifier(e).notify(t)
            }))
        }
        injectComponentsOnReady(e, t) {
            Qo() && this.getEnsureComponentsNotifier(e).on("inject-common", (() => {
                this.injectComponentsRecursively(t, (() => {
                    this.getEnsureComponentsNotifier(e).notify("inject")
                }))
            }))
        }
        appendComponentDef(e, t) {
            this.getEnsureComponentsNotifier(e).on("inject", (() => {
                Da(t, !1, this.__viewId), this.getEnsureComponentsNotifier(e).notify("def")
            }))
        }
        waitComponentEnsuring(e, t) {
            this.getEnsureComponentsNotifier(e).on("def", (() => {
                t((() => {
                    this.destructEnsureComponentsNotifier(e)
                }))
            }))
        }
        setPageReady() {
            this.__pageReady = !0, this.__shouldDoPlaceholderReplaceOnReady && (this.__shouldDoPlaceholderReplaceOnReady = !1, this.doPlaceholderReplaceOnReady())
        }
        doPlaceholderReplace() {
            var e = h(),
                t = this.__treeManager,
                r = this.getPlaceholderReplaceData();
            if (this.finishPlaceholderReplacement(), null !== r) {
                var n = Array.from(r.compNames);
                this.__treeManager.operationFlow.sendInIndividualFlow([S.FLOW_PEND_PLACEHOLDER_REPLACEMENT, e]), this.__log(`doPlaceholderReplace(${e}) for ${r.replacers.length} placeholder replacements`), this.ensureComponents(n, e, (() => {
                    oa(t, t.rootCompName, r, e)
                }))
            }
        }
        doPlaceholderReplaceOnReady() {
            this.__pageReady ? this.__placeholderReplacement.timer = setTimeout((() => {
                this.doPlaceholderReplace()
            }), 50) : this.__shouldDoPlaceholderReplaceOnReady = !0
        }
        arrangePlaceholderReplace(e, t) {
            null === this.__placeholderReplacement && (this.__placeholderReplacement = {
                compNames: new Set,
                replacers: [],
                timer: void 0
            }), this.__placeholderReplacement.compNames.add(e), this.__placeholderReplacement.replacers.push(t)
        }
        getPlaceholderReplaceData() {
            return this.__placeholderReplacement
        }
        finishPlaceholderReplacement() {
            this.__placeholderReplacement = null
        }
        static getComponentClassPrefix(e) {
            if (so.__classPrefixMap.has(e)) return so.__classPrefixMap.get(e);
            var t = e.split(/[^a-z0-9]+/i),
                r = "",
                n = 0,
                o = 0;
            do {
                n < t.length ? n += 1 : o += 1, r = t.slice(-n).join("-"), o > 0 && (r += "-" + o), Number(r[0]) >= 0 && (r = "x-" + r)
            } while (so.__usedClassPrefix.has(r));
            return so.__classPrefixMap.set(e, r), so.__usedClassPrefix.add(r), r
        }
    }
    so.__classPrefixMap = new Map, so.__usedClassPrefix = new Set;
    var lo = {
            [S.FLOW_PEND_PLACEHOLDER_REPLACEMENT](e, t) {
                var r = t[0];
                e.pendPlaceholderReplacement(r)
            },
            [S.FLOW_COMPONENT_DEF_ADD](e, t) {
                var r = t[0],
                    n = t[1];
                e.appendComponentDef(r, n)
            },
            [S.FLOW_INJECT_SUBPACKAGE](e, t) {
                var r = t[0],
                    n = t[1];
                e.injectSubPackageOnReady(r, n)
            },
            [S.FLOW_INJECT_COMPONENT](e, t) {
                var r = t[0],
                    n = t[1];
                e.injectComponentsOnReady(r, n)
            },
            [S.FLOW_SET_SUBPACKAGE_LOADED](e, t) {
                var r = t[0];
                e.setSubPackageLoaded(r)
            },
            [S.FLOW_WAIT_COMPONENT](e, t) {
                var r = t[0];
                e.treeManager.operationFlow.block(), e.waitComponentEnsuring(r, (t => {
                    e.treeManager.operationFlow.unblock(), t()
                }))
            }
        },
        co = a(),
        uo = (e, t, r) => {
            if (e instanceof co.Component) {
                e !== window.__DOMTree__ && (t.compCount++, e.hasBehavior("wx-base") ? (r && t.rootInternalCompCount++, e.hasBehavior("wx-native") && t.nativeCompCount++) : r && t.rootCustomCompCount++);
                var n = e === window.__DOMTree__ && r;
                e.shadowRoot instanceof co.Element && uo(e.shadowRoot, t, n)
            }
            for (var o = e.childNodes, a = 0, i = o.length; a < i; a++) {
                var s = (o[a] instanceof co.VirtualNode || e === window.__DOMTree__ || e === window.__DOMTree__.shadowRoot) && r;
                o[a] instanceof co.Element && uo(o[a], t, s)
            }
        },
        fo = () => {
            var e = {
                compCount: 0,
                customCompCount: 0,
                nativeCompCount: 0,
                rootCustomCompCount: 0,
                rootInternalCompCount: 0
            };
            try {
                uo(window.__DOMTree__, e, !0)
            } catch (e) {}
            var {
                compCount: t,
                customCompCount: r,
                nativeCompCount: n,
                rootCustomCompCount: o,
                rootInternalCompCount: a
            } = e, i = o + a;
            return {
                compCount: t,
                customCompCount: r,
                nativeCompCount: n,
                rootCompCount: i,
                rootCustomCompCount: o,
                rootCustomCompRatio: i ? Math.floor(100 * o / i) : 0,
                rootInternalCompCount: a
            }
        },
        po = {
            id: null,
            prev: null,
            data: []
        };
    ae(S.SAVE_STATE, (() => {})), ae(S.RESTORE_STATE, (([e, t, r, n], o, a) => {
        if (e && e.isSplitData) {
            var {
                id: i,
                index: s,
                total: l,
                data: c
            } = e.splitInfo;
            if (1 !== s && (s !== po.prev + 1 || i !== po.id)) return po.id = null, po.prev = null, void(po.data = []);
            if (s !== l) return po.id = i, po.prev = s, void po.data.push(c);
            po.data.push(c);
            var u = po.data.join("");
            try {
                u = JSON.parse(u)
            } catch (e) {
                console.error("Expected parse completed data with split data but got error"), Reporter.errorReport({
                    key: "webviewScriptError",
                    error: new Error("Expected parse completed data with split data but got error")
                }), u = null
            }
            if (po.id = null, po.prev = null, po.data = [], !u) return;
            e = u[0], t = u[1], r = u[2], n = u[3]
        }
        Ce.restoring = e || {}, Ce.idDataMap = t, Ce.compIdArr = r, Ce.compIdArrIndex = 0;
        var d = qi.get(a).compManager;
        d.restore(n), Ce.onReady = d.onRestoreInjectDone.bind(d)
    }));
    var _o = e => {
            (e => {
                var t = document.body.scrollTop || document.documentElement.scrollTop;
                e.__page__ = {
                    scrollTop: t
                }
            })(e), e.compExtraDataMap = {};
            var t = 0;
            window.__TAB_BAR__ && (m(window.__TAB_BAR__, 1, (r => {
                r.triggerLifeTime("saved", [e]), Pr(e.compExtraDataMap, r, t++)
            })), (e => {
                if (e) {
                    var t = window.__TAB_BAR__;
                    t && (e.wxsTabRootState = gr(t.__wxsState))
                }
            })(e.compExtraDataMap)), m(window.__DOMTree__, 1, (r => {
                r.triggerLifeTime("saved", [e]), Pr(e.compExtraDataMap, r, t++)
            })), (e => {
                if (e) {
                    var t = pr ? qi.get(0).nodeId.getNodeById(qi.get(0).rootNodeId) : window.__DOMTree__;
                    t && (e.wxsPageState = t.__wxsState)
                }
            })(e.compExtraDataMap)
        },
        vo = e => {
            (e => {
                var t = e.__page__;
                if (t) {
                    var r = parseInt(t.scrollTop, 10);
                    requestAnimationFrame((() => {
                        document.body.scrollTop = document.documentElement.scrollTop = r
                    }))
                }
            })(e);
            var t = 0;
            window.__TAB_BAR__ && (m(window.__TAB_BAR__, 1, (r => {
                r.triggerLifeTime("restored", [e]), kr(e.compExtraDataMap, r, t++)
            })), (e => {
                if (e) {
                    var t = window.__TAB_BAR__;
                    t && (t.__wxsState = hr(e.wxsTabRootState))
                }
            })(e.compExtraDataMap)), m(window.__DOMTree__, 1, (r => {
                r.triggerLifeTime("restored", [e]), kr(e.compExtraDataMap, r, t++)
            })), (e => {
                if (e) {
                    var t = pr ? qi.get(0).nodeId.getNodeById(qi.get(0).rootNodeId) : window.__DOMTree__;
                    t && (t.__wxsState = e.wxsPageState)
                }
            })(e.compExtraDataMap)
        },
        ho = () => {
            __webViewSDK__.publish("recycleStatistics", fo());
            var e = {};
            _o(e), te(S.REQUEST_SAVE, e, 0, !0), ee(), "function" == typeof wx.webViewReadyToTerminate && wx.webViewReadyToTerminate({})
        },
        go = (a(), Date.now(), a()),
        mo = {},
        yo = {},
        wo = function(e, t) {
            return e + "/" + t
        },
        bo = function(e, t, r, n = !0) {
            var o = t.match(/^plugin-private:\/\/(.*?)\//);
            if (!o) return !1;
            var a = o[1];
            if (n && wo(a, "0") !== e) return !1;
            var i = r.match(/^plugin:\/\/(.*?)\//);
            if (!i) return !1;
            var s = i[1];
            return (!n || wo(s, "0") === e) && (go.Component._list[r] ? (console.error('"' + r + '" has been used as another component or page. Please do not register multiple components or pages with the same alias.'), !1) : (((e, t) => {
                en[e] = t
            })(r, t), go.Component._list[r] = go.Component._list[t], mo[r] = t, yo[t] = r, !0))
        };
    window.publishDomainComponents = e => (e => {
        for (var t in e) bo("", e[t], t, !1)
    })(e);
    var xo = a(),
        Eo = "",
        Co = 0;

    function So(e) {
        e && ".html" !== e.slice(5) && (e += ".html");
        var t = Eo;
        return __wxConfigWindow__ && __wxConfigWindow__.initialRenderingCache && (t = String(__wxConfigWindow__.initialRenderingCache)), t
    }

    function Ao(e, t) {
        var r = Date.now(),
            n = {},
            o = {},
            a = document.head.querySelectorAll("style") || [],
            i = [];
        xo.ElementIterator.create(e, "composed-descendants-root-first", xo.Component).forEach((e => {
            e.hasBehavior("wx-base") || (n["./" + e.is + ".wxss"] = !0)
        })), Object.keys(xo.Component._list).forEach((e => {
            o["./" + e + ".wxss"] = !0
        }));
        for (var s = 0; s < a.length; s++) {
            var l = a[s],
                c = l.getAttribute("wxss:path");
            null != c && (!o[c] || n[c] ? i.push("<style>" + l.innerHTML + "</style>") : l.innerHTML.length + 15)
        }
        var u = i.join(""),
            d = u + e.$$.innerHTML;
        wx.saveInitialRenderingCache({
            content: d,
            appserviceData: t
        });
        Date.now();
        u.length
    }

    function Oo() {
        wx.saveInitialRenderingCache({
            content: ""
        })
    }

    function To(e, t) {
        return "dynamic" !== So(window.__route__) ? (console.error('An initial rendering cache state is ignored, because initialRenderingCache mode is not "dynamic".'), !1) : (e ? Ao(e, t) : Oo(), !0)
    }

    function Io({
        content: e
    }) {
        return !!e && (document.body.innerHTML = e, Co = Date.now(), !0)
    }
    var Ro = a(),
        No = a(),
        Po = function(e, t, r, n, o, a) {
            var i = `${Math.random()}-${+new Date}`,
                s = "function" == typeof o;
            s && (t.animatedStyleCbMap[i] = o), t.operationFlow.push([S.FLOW_SET_NODE_ANIMATED_STYLE, {
                hasCallback: s,
                reqId: i,
                nodeId: t.nodeId.getNodeId(e),
                pageId: r,
                selector: n,
                data: a
            }])
        },
        ko = a(),
        Mo = {},
        Do = (e, t) => {
            void 0 === Mo[e] && (Mo[e] = w(["ready"])), Mo[e].on("ready", t)
        },
        Fo = e => {
            void 0 === e && "webview" === s() && (e = 0), void 0 === Mo[e] && (Mo[e] = w(["ready"]));
            var t = Mo[e].isNotified("ready");
            wxNativeConsole.info(`[mainPageFrameReady] dispatch __mainPageFrameReady__, current=${t}, pageId=${e}`), t || Mo[e].notify("ready")
        };
    void 0 !== __wxAppCode__ && Object.keys(__wxAppCode__).length > 0 ? Fo() : window.__mainPageFrameReady__ = Fo;
    var jo = (e, t) => {
            if (wx.traceBeginEvent("Framework", "dispatchViewRoute"), "webview" !== s() && !Qo()) {
                var r = e.replace(/\.html$/, "").replace(/^\//, "");
                wx.traceBeginEvent("Framework", "injectWxss"), na(r), wx.traceEndEvent(), wx.traceBeginEvent("Framework", "triggerGenerateFuncReady"), ra(r, t), wx.traceEndEvent()
            }
            wx.traceEndEvent()
        },
        Lo = (ko.dataUtils.deepCopy, {
            lazyRegistration: !0,
            publicProperties: !0
        }),
        Bo = {
            domain: "/",
            writeOnly: !1,
            allowInWriteOnly: !1,
            lazyRegistration: !0,
            classPrefix: "",
            renderingMode: "full",
            templateEngine: An,
            multipleSlots: !1,
            publicProperties: !0,
            reflectToAttributes: !1,
            writeFieldsToNode: !1,
            writeIdToDOM: !0,
            idPrefixGenerator: null,
            separateInnerData: !1,
            innerDataExclude: null,
            randomizeTagName: !1,
            virtualHost: !1
        },
        $o = "undefined" != typeof WeakMap ? new WeakMap : {},
        Wo = {},
        Uo = {},
        Go = {},
        Ho = {},
        Vo = {},
        Zo = {},
        zo = Object.prototype.hasOwnProperty,
        qo = "wx-",
        Jo = (e, t) => {
            var r = {},
                n = (t[e + ".json"] || {}).usingComponents || {};
            for (var o of Object.keys(n)) r[qo + o] = _(e, String(n[o]));
            return r
        },
        Ko = (e, t) => {
            var r = {},
                n = (t[e + ".json"] || {}).componentGenerics || {};
            for (var o of Object.keys(n)) {
                var a = n[o];
                "object" == typeof a ? r[qo + o] = {
                    default: _(e, String(a.default || ""))
                } : null != a && (r[qo + o] = {})
            }
            return r
        },
        Xo = (e, t) => {
            var r = t[e + ".json"] || {},
                n = {},
                o = r.componentPlaceholder || {};
            return Object.keys(o).forEach((e => {
                n[qo + e] = qo + String(o[e])
            })), n
        },
        Yo = (e, t, r, n) => {
            var o = qi.get(r).nodeId.getNodeById(n, r);
            o && t && ko.Element.getMethodCaller(o).setData({
                [t]: e
            })
        },
        Qo = () => __wxConfig.isLazyLoad,
        ea = e => {
            var t = "__plugin__/",
                r = e.indexOf(t);
            return -1 === r ? e : "plugin-private://" + e.slice(r + 11)
        },
        ta = e => {
            if (-1 === e.indexOf("plugin://")) return e;
            var t = e.match(/\w+\//);
            if (!t) return e;
            t = t[0].slice(0, t[0].length - 1);
            var r, n, o = (r = t, (n = __wxConfig.plugins || {})[r] ? n[r].provider : null);
            if (!o) return e;
            var a = e.replace(t, o);
            return mo[a] ? mo[a] : a
        },
        ra = (e, t) => {
            var r = ea(e);
            wxNativeConsole.info(`[triggerGenerateFuncReady] dispatch generateFuncReady from vd, comp=${r}`);
            var n = (void 0 !== __wxAppCode__ ? __wxAppCode__ : {})[r + ".wxml"];
            Array.isArray(n) && (n = n[0][n[1]]), window.__wxAppCodeReadyCallback__ ? window.__wxAppCodeReadyCallback__(n) : window.document.dispatchEvent(new CustomEvent("generateFuncReady", {
                detail: {
                    generateFunc: n,
                    pageId: t
                }
            }))
        },
        na = e => {
            var t = s();
            if ("webview" === t) {
                var r = ea(e);
                wxNativeConsole.info(`[injectWxss] inject page wxss from vd, comp=${r}`);
                var n = (void 0 !== __wxAppCode__ ? __wxAppCode__ : {})[r + ".wxss"];
                void 0 !== n && "function" == typeof n || (wxNativeConsole.warn("codeMap does not contain valid wxss " + (r + ".wxss")), n = () => {}), window.__setCssStartTime__ = Date.now(), n(), window.__setCssEndTime__ = Date.now()
            } else wxNativeConsole.info(`[injectWxss] current renderer is ${t}, handle root wxss by priority`)
        },
        oa = (e, t, r, n) => {
            var o;
            o = e.viewId, Object.keys(Qr).length > 0 && te(S.XR_FRAME_COMP_OPTIONS, [Qr, en], o);
            var a = [
                [],
                [], t, mo
            ];
            sa(a, t, Object.create(null), "", e);
            var i = new Set(e.usedDef[0].map((e => e.is))),
                s = new Set(e.usedDef[0].map((e => e.is))),
                l = [],
                c = [];
            a[0].forEach((e => {
                i.has(e.is) || (l.push(e), i.add(e.is))
            })), a[1].forEach((e => {
                s.has(e.is) || (c.push(e), s.add(e.is))
            })), a[0] = l, a[1] = c, e.usedDef[0].push(...a[0]), e.usedDef[1].push(...a[1]), e.operationFlow.sendInIndividualFlow([S.FLOW_COMPONENT_DEF_ADD, n, a]), e.operationFlow.sendInIndividualFlow([S.FLOW_WAIT_COMPONENT, n]), e.operationFlow.start(Date.now()), e.operationFlow.push([S.FLOW_REPLACE_PLACEHOLDER, n]), r.replacers.forEach((e => {
                e()
            })), e.operationFlow.end()
        },
        aa = e => {
            var t = Nn(e),
                r = yo[t];
            if (!r) return {};
            var n = r.match(/^plugin:\/\/(wx[0-9a-f]{16})\/(.+)$/);
            if (!n) return {};
            var o = n[1],
                a = n[2],
                i = g(__wxConfig.plugins).find((e => e.provider === o));
            if (!i) return {};
            if (!i.genericsImplementation) return {};
            var s, l = i.genericsImplementation[a] || {},
                c = {},
                u = (s = o, In || Rn(), In[s] || "");
            return Object.keys(l).forEach((e => {
                c[qo + e] = _(u, String(l[e]))
            })), c
        },
        ia = (e, t, r) => {
            if ("wx://" !== t.slice(0, 5)) {
                var n = Uo[t];
                if (!n) throw new Error('"' + t + '" is not a behavior registered by Behavior()');
                e[0].unshift(n), r[t] = !0;
                var o = Vo[n.is];
                if (o)
                    for (var a = 0; a < o.length; a++) {
                        var i = o[a];
                        r[i] || ia(e, i, r)
                    }
            }
        },
        sa = (e, t, r, n, o, a = !1) => {
            zo.call(mo, t) && (t = mo[t]);
            var i = Wo[t];
            if (!o.compManager.shouldUsePlaceholder(t) || !a)
                if (i) {
                    var s = Zo[t];
                    "wx://" !== t.slice(0, 5) && e[1].unshift(i), r[t] = !0;
                    var l = Go[i.is],
                        c = Ho[i.is];
                    for (var u of Object.keys(l || {})) {
                        var d = l[u];
                        r[d] || sa(e, d, r, t, o, !!s[u])
                    }
                    for (var f of Object.keys(c || {})) {
                        var p = c[f].default;
                        p && (r[p] || sa(e, p, r, t, o, !!s[f]))
                    }
                    var _ = Vo[i.is];
                    if (_)
                        for (var v = 0; v < _.length; v++) {
                            var h = _[v];
                            r[h] || ia(e, h, r)
                        }
                } else console.error(`Component is not found in path "${t}"${n?` (using by "${n}")`:""}`)
        },
        la = e => ko.Component.getComponentOptions(e).domain.split("/", 1)[0],
        ca = e => $o.get(e),
        ua = (e, t, r) => {
            var n = ko.Component.getComponentOptions(t).domain,
                o = ko.Component.getMethod(t, "__export__"),
                a = n === e ? ko.Element.getMethodCaller(t) : null;
            if (o) {
                var i = n === e ? r : null,
                    s = o.call(ko.Element.getMethodCaller(t), i);
                return void 0 === s ? a : s
            }
            return a
        },
        da = (e, t, r) => {
            var n = ca(e),
                o = ko.Component.getComponentOptions(n).domain,
                a = n.shadowRoot;
            if (r) return a.querySelectorAll(t).map((t => ua(o, t, e)));
            var i = a.querySelector(t);
            return i ? ua(o, i, e) : null
        },
        fa = (e, t, r) => {
            e !== _a && Object.defineProperty(e, t, {
                value: r,
                writable: !0,
                enumerable: !0,
                configurable: !0
            })
        };

    function pa() {}
    var _a = pa.prototype = Object.create(Object.prototype, {
            is: {
                get() {
                    return ca(this).is
                },
                set(e) {
                    fa(this, "is", e)
                }
            },
            id: {
                get() {
                    var e = ca(this);
                    return ko.Component.getComponentOptions(e).writeOnly ? "" : e.id
                },
                set(e) {
                    fa(this, "id", e)
                }
            },
            getPageId: {
                get: () => function() {
                    return "pageId:" + ca(this).__treeManager__.viewId
                },
                set(e) {
                    fa(this, "getPageId", e)
                }
            },
            router: {
                get() {
                    return ca(this).__pageRouter__
                },
                set(e) {
                    fa(this, "router", e)
                }
            },
            pageRouter: {
                get() {
                    return (e => {
                        for (var t = ca(e), r = ko.Component.getComponentOptions(t).domain;;) {
                            var n = t.ownerShadowRoot;
                            if (!n) break;
                            if (!(n instanceof ko.ShadowRoot)) return null;
                            var o = n.getHostNode();
                            if (!o) return null;
                            if (ko.Component.getComponentOptions(o).domain !== r) return null;
                            t = o
                        }
                        return t
                    })(this).__pageRouter__
                },
                set(e) {
                    fa(this, "pageRouter", e)
                }
            },
            renderer: {
                get() {
                    var e = ca(this).__treeManager__;
                    return oe(e.viewId)
                },
                set(e) {
                    fa(this, "renderer", e)
                }
            },
            dataset: {
                get() {
                    var e = ca(this);
                    return ko.Component.getComponentOptions(e).writeOnly ? null : e.dataset
                },
                set(e) {
                    fa(this, "dataset", e)
                }
            },
            properties: {
                get() {
                    return this.__data__
                },
                set(e) {
                    fa(this, "properties", e)
                }
            },
            data: {
                get() {
                    return this.__data__
                },
                set(e) {
                    fa(this, "data", e)
                }
            },
            setData: {
                get: () => __appServiceSDK__.useTracedApiEnd((function(e, t) {
                    var r = ca(this),
                        n = r.__treeManager__;
                    return __appServiceSDK__.traceBeginAPI("setData", {
                        is: this.is,
                        viewId: n.viewId
                    }), "function" == typeof t && n.operationFlow.registerSetDataCallback(t, this, r), r.setData(e)
                })),
                set(e) {
                    fa(this, "setData", e)
                }
            },
            groupSetData: {
                get: () => function(e) {
                    var t = ca(this).__treeManager__;
                    t.operationFlow.start(Date.now()), t.operationFlow.push([S.FLOW_GROUP]);
                    var r = null;
                    try {
                        e.call(this)
                    } catch (e) {
                        r = e
                    }
                    if (t.operationFlow.push([S.FLOW_GROUP_END]), t.operationFlow.end(), r) throw r
                },
                set(e) {
                    fa(this, "setData", e)
                }
            },
            replaceDataOnPath: {
                get() {
                    return (e, t) => ca(this).replaceDataOnPath(e, t)
                },
                set(e) {
                    fa(this, "replaceDataOnPath", e)
                }
            },
            mergeDataOnPath: {
                get() {
                    return (e, t) => ca(this).mergeDataOnPath(e, t)
                },
                set(e) {
                    fa(this, "mergeDataOnPath", e)
                }
            },
            applyDataUpdates: {
                get() {
                    return () => ca(this).applyDataUpdates()
                },
                set(e) {
                    fa(this, "applyDataUpdates", e)
                }
            },
            hasBehavior: {
                get() {
                    return e => ca(this).hasBehavior(e)
                },
                set(e) {
                    fa(this, "hasBehavior", e)
                }
            },
            triggerEvent: {
                get() {
                    return (e, t, r) => ca(this).triggerEvent(e, t, r)
                },
                set(e) {
                    fa(this, "triggerEvent", e)
                }
            },
            createSelectorQuery: {
                get() {
                    return () => __appServiceSDK__._createSelectorQuery({}, la(ca(this))).in(this)
                },
                set(e) {
                    fa(this, "createSelectorQuery", e)
                }
            },
            createIntersectionObserver: {
                get() {
                    return e => __appServiceSDK__._createIntersectionObserver(this, e, la(ca(this)))
                },
                set(e) {
                    fa(this, "createIntersectionObserver", e)
                }
            },
            createMediaQueryObserver: {
                get() {
                    return e => __appServiceSDK__._createMediaQueryObserver(this, e, la(ca(this)))
                },
                set(e) {
                    fa(this, "createMediaQueryObserver", e)
                }
            },
            getOpenerEventChannel: {
                get() {
                    return () => __appServiceSDK__._getPageOpenerEventChannel(this)
                },
                set(e) {
                    fa(this, "getOpenerEventChannel", e)
                }
            },
            applyAnimation: {
                get() {
                    return (e, t, r, n, o) => {
                        var a = ca(this);
                        ! function(e, t, r, n, o, a, i, s) {
                            var l = `${Math.random()}-${+new Date}`;
                            "function" == typeof i && (t.applyAnimationCbMap[l] = i), t.operationFlow.push([S.FLOW_SET_NODE_ANIMATION_INFO, {
                                hasCallback: "function" == typeof i,
                                reqId: l,
                                nodeId: t.nodeId.getNodeId(e),
                                webviewId: r,
                                selector: n,
                                options: o,
                                type: a ? "animeJS" : void 0,
                                isLastAnimation: s
                            }])
                        }(a, a.__treeManager__, this.__wxWebviewId__, e, t, r, n, o)
                    }
                },
                set(e) {
                    fa(this, "applyAnimation", e)
                }
            },
            clearAnimation: {
                get() {
                    return (e, t, r) => {
                        var n = ca(this);
                        ! function(e, t, r, n, o, a) {
                            var i = `${Math.random()}-${+new Date}`;
                            "function" == typeof a ? t.clearAnimationCbMap[i] = a : "function" == typeof o && (t.clearAnimationCbMap[i] = o), t.operationFlow.push([S.FLOW_CLEAR_NODE_ANIMATION_INFO, {
                                hasCallback: "function" == typeof t.clearAnimationCbMap[i],
                                reqId: i,
                                nodeId: t.nodeId.getNodeId(e),
                                webviewId: r,
                                selector: n,
                                options: o
                            }])
                        }(n, n.__treeManager__, this.__wxWebviewId__, e, t, r)
                    }
                },
                set(e) {
                    fa(this, "clearAnimation", e)
                }
            },
            animate: {
                get() {
                    return (e, t, r, n, o) => {
                        if ("function" == typeof n) o = n;
                        else if (void 0 !== n) {
                            var a = ca(this),
                                i = a.__treeManager__;
                            return void i.operationFlow.push([S.FLOW_SET_NODE_ANIMATION_INFO, {
                                type: "scrollTimeline",
                                nodeId: i.nodeId.getNodeId(a),
                                selector: e,
                                options: t,
                                duration: r,
                                timeline: n
                            }])
                        }
                        for (var s = nr(t, r), l = 0; l < s.length; ++l) {
                            var c = "animeJS" === s[l].type;
                            delete s[l].type, l === s.length - 1 ? this.applyAnimation(e, s[l], c, o, !0) : this.applyAnimation(e, s[l], c)
                        }
                    }
                },
                set(e) {
                    fa(this, "animate", e)
                }
            },
            applyAnimatedStyle: {
                get() {
                    return (e, t, r, n) => {
                        var o = ca(this),
                            a = o.__treeManager__,
                            i = a.viewId,
                            s = this.renderer,
                            {
                                registerJsValue: l,
                                createAnimatedStyleForWeb: c,
                                checkWorkletFunc: u
                            } = __appServiceSDK__.workletSDK;
                        if (u(t) || console.warn("The updater parameter of applyAnimatedStyle should be a worklet function"), "skyline" === s) Po(o, a, i, e, n, {
                            renderer: s,
                            styleInfo: {
                                userConfig: r,
                                updaterId: l(t)
                            }
                        });
                        else if ("webview" === s) {
                            var d = void 0,
                                f = c(t, r, (t => {
                                    Po(o, a, i, e, void 0, {
                                        renderer: s,
                                        styleInfo: {
                                            shouldAttach: !1,
                                            mapperId: d,
                                            updateStyle: t
                                        }
                                    })
                                }));
                            d = f.mapperId, Po(o, a, i, e, n, {
                                renderer: s,
                                styleInfo: {
                                    shouldAttach: !0,
                                    mapperId: f.mapperId,
                                    updateStyle: f.initialStyle
                                }
                            })
                        }
                    }
                },
                set(e) {
                    fa(this, "applyAnimatedStyle", e)
                }
            },
            clearAnimatedStyle: {
                get() {
                    return (e, t, r) => {
                        var n = ca(this),
                            o = n.__treeManager__;
                        ! function(e, t, r, n, o, a, i) {
                            var s = `${Math.random()}-${+new Date}`,
                                l = "function" == typeof i;
                            l && (t.animatedStyleCbMap[s] = i), t.operationFlow.push([S.FLOW_CLEAR_NODE_ANIMATED_STYLE, {
                                hasCallback: l,
                                reqId: s,
                                nodeId: t.nodeId.getNodeId(e),
                                pageId: r,
                                selector: n,
                                renderer: o,
                                styleIds: a
                            }])
                        }(n, o, o.viewId, e, this.renderer, t, r)
                    }
                },
                set(e) {
                    fa(this, "clearAnimatedStyle", e)
                }
            },
            selectOwnerComponent: {
                get() {
                    return e => {
                        var t = ca(this);
                        return ko.Component.getComponentOptions(t).writeOnly ? null : (e => {
                            var t = ca(e),
                                r = ko.Component.getComponentOptions(t).domain,
                                n = t.ownerShadowRoot;
                            if (!(n instanceof ko.ShadowRoot)) return null;
                            var o = n.getHostNode();
                            return o ? ua(r, o, e) : null
                        })(this)
                    }
                },
                set(e) {
                    fa(this, "selectOwnerComponent", e)
                }
            },
            selectComponent: {
                get() {
                    return e => {
                        var t = ca(this);
                        return ko.Component.getComponentOptions(t).writeOnly ? null : da(this, e, !1)
                    }
                },
                set(e) {
                    fa(this, "selectComponent", e)
                }
            },
            selectAllComponents: {
                get() {
                    return e => {
                        var t = ca(this);
                        return ko.Component.getComponentOptions(t).writeOnly ? [] : da(this, e, !0)
                    }
                },
                set(e) {
                    fa(this, "selectAllComponents", e)
                }
            },
            getRelationNodes: {
                get() {
                    return e => ((e, t) => {
                        var r = ca(e).getRelationNodes(t);
                        return null === r ? null : r.map((e => ko.Element.getMethodCaller(e)))
                    })(this, e)
                },
                set(e) {
                    fa(this, "getRelationNodes", e)
                }
            },
            getTabBar: {
                get: () => function(e) {
                    var t = ca(this).__treeManager__;
                    return "function" == typeof e ? t.tabRoot ? (e(ko.Element.getMethodCaller(t.tabRoot)), ko.Element.getMethodCaller(t.tabRoot)) : (Za(t.viewId).then((() => {
                        !t.tabDestroyed && t.tabRoot && e(ko.Element.getMethodCaller(t.tabRoot))
                    })), null) : t.tabDestroyed || !t.tabRoot ? null : ko.Element.getMethodCaller(t.tabRoot)
                },
                set(e) {
                    fa(this, "getTabBar", e)
                }
            },
            exitState: {
                get() {
                    return this.__exitState__
                },
                set(e) {
                    fa(this, "exitState", e)
                }
            },
            setInitialRenderingCache: {
                get: () => function(e) {
                    var t = ca(this).__treeManager__;
                    null === e ? Ua(t) : Wa(t, e)
                },
                set(e) {
                    fa(this, "exitState", e)
                }
            },
            setUpdatePerformanceListener: {
                get: () => function(e, t) {
                    var r = ca(this),
                        n = r.__treeManager__,
                        o = n.nodeId.getNodeId(r);
                    "function" == typeof t ? (r.__updatePerformanceListener__ = t, n.operationFlow.push([S.ENABLE_UPDATE_PERFORMANCE_STAT, o, e])) : (r.__updatePerformanceListener__ = null, n.operationFlow.push([S.DISABLE_UPDATE_PERFORMANCE_STAT, o]))
                },
                set(e) {
                    fa(this, "exitState", e)
                }
            },
            getPassiveEvent: {
                get: () => function(e) {
                    wx.getPassiveEvent(this.__wxWebviewId__, e)
                },
                set(e) {
                    fa(this, "exitState", e)
                }
            },
            setPassiveEvent: {
                get: () => function(e) {
                    wx.setPassiveEvent(this.__wxWebviewId__, e)
                },
                set(e) {
                    fa(this, "exitState", e)
                }
            }
        }),
        va = {},
        ha = 0,
        ga = {},
        ma = (e, t, r) => new Promise((n => {
            var o = qi.get(r).nodeId.getNodeId(e);
            ga[ha] = n, te(S.REQUEST_WORKLET_METHOD, {
                methodName: t,
                nodeId: o,
                reqId: ha
            }, r), ha++
        }));
    se(S.RESPONSE_WORKLET_METHOD, (e => {
        var t = e[0].reqId,
            r = ga[t];
        "function" == typeof r && (delete ga[t], r(e[0].workletId))
    }));
    var ya = !0,
        wa = e => {
            (e => {
                var t = mn++;
                yn.push(t);
                try {
                    e(t)
                } catch (e) {
                    throw yn.pop(), e
                }
                yn.pop()
            })((() => {
                ba(e)
            }))
        },
        ba = e => {
            Se += 1;
            var t, r, n, o, a, i = Date.now(),
                s = e.operationFlow.iterator,
                l = s.expectStart(),
                c = s.nextStepType();
            if (c === S.FLOW_INITIAL_CREATION) xa(e, S.FLOW_INITIAL_CREATION), Te(l, i, Date.now(), 2);
            else if (c === S.FLOW_INITIAL_RENDERING_CACHE) xa(e, S.FLOW_INITIAL_RENDERING_CACHE);
            else if (c === S.FLOW_CREATE_TAB) xa(e, S.FLOW_CREATE_TAB), Te(l, i, Date.now(), 3);
            else if (c === S.FLOW_SET_ROOT_PROPERTIES) {
                var u = s.nextStep();
                zr(e.root, u[1], u[2], u[3])
            } else if (c === S.FLOW_DESTROY_PAGE) s.nextStep(), Ia(e);
            else if (zo.call(lo, s.nextStepType())) {
                var d = lo[s.nextStepType()],
                    f = s.nextStep().slice(1);
                d(e.compManager, f)
            } else {
                var p = Date.now(),
                    _ = s.nextStep();
                if (_[0] === S.FLOW_UPDATE) {
                    var v = _[1],
                        h = e.nodeId.getNodeById(v),
                        g = _[2];
                    if (h) {
                        if (g.length) {
                            var m = ko.Component.getDataProxy(h);
                            m.setChanges(g), m.doUpdates(void 0, !0), wn(v, (t => ({
                                isMergedUpdate: !1,
                                dataPaths: t.withDataPaths ? g.map((e => e[0])) : void 0,
                                pendingStartTimestamp: l,
                                updateStartTimestamp: i,
                                updateEndTimestamp: Date.now(),
                                pageId: e.viewId
                            })))
                        }
                    } else wxNativeConsole.warn(`[flowUpdate] node ${_[1]} not found`), s.skipToEnd()
                } else if (_[0] === S.FLOW_GROUP) {
                    var y = s.nextStep();
                    if (y[0] !== S.FLOW_GROUP_END) throw new Error(`Framework inner error (expect FLOW_GROUP_END but get ${O(y[0])})`)
                } else if (_[0] === S.FLOW_REPLACE_PLACEHOLDER) {
                    var w = _[1];
                    e.compManager.getAndClearPendingPlaceholderReplacement(w).replacers.forEach((e => {
                        e()
                    }))
                } else if (_[0] === S.FLOW_HOT_UPDATE) {
                    var b = e.nodeId.getNodeById(_[1]);
                    b ? b.__templateInstance._resetShadowChildren(b, b.data, e) : s.skipToEnd()
                } else {
                    if (_[0] !== S.FLOW_HOT_UPDATE_RESET) throw new Error(`Framework inner error (expect an update event but get ${O(_[0])})`);
                    ((e, t) => {
                        if (Yr()) {
                            var r = "";
                            e === t.root ? r = "body" : e === t.tabRoot && (r = "tab-bar");
                            var n = e.__vtObj,
                                o = e.ownerShadowRoot ? e.ownerShadowRoot.createComponent(n.tag, void 0, n.generics, t) : tn.createElement(r, tn.Component._list[e.is], t);
                            if (t.operationFlow.iterator.nextStep()[0] !== S.FLOW_HOT_UPDATE_RESET) throw new Error("Expect FLOW_HOT_UPDATE_RESET but get another");
                            var a = t.nodeId.getNodeId(e);
                            if (t.nodeId.removeNode(e), t.nodeId.allocNodeId(o, a), e === t.root) tn.Element.pretendDetached(e), t.root = o, window.__DOMTree__ = o, document.body = o.$$, tn.Element.pretendAttached(o);
                            else if (e === t.tabRoot) t.tabRoot = o, window.__TAB_BAR__ = o, e.parentNode.replaceChild(o, e);
                            else {
                                o.__vtObj = n;
                                var i = n.attr;
                                for (zr(o, i, n.raw, n.rawAttr); e.childNodes.length;) o.appendChild(e.childNodes[0]);
                                e.parentNode.replaceChild(o, e)
                            }
                        }
                    })(e.nodeId.getNodeById(_[1]), e)
                }((e, t, r, n) => {
                    Reporter.speedReport({
                        key: e,
                        timeMark: {
                            startTime: t,
                            endTime: r
                        },
                        force: "reRenderTime" !== e,
                        data: n
                    })
                })("reRenderTime", p, Date.now()), ya && 5 === ((e, t, r) => (Ie += Se, Ne += r - t, Pe += Ae, ke += Oe, Me += r - e, Se = 0, Ae = 0, Oe = 0, Re += 1))(l, i, Date.now()) && (ya = !1, t = 1, r = Math.ceil(Ne / (Re || 1)), n = Math.ceil(ke / (Pe || 1)), o = Math.ceil(Me / (Re || 1)), a = [Ie, Re, r, Pe, n, 2, o, t].map(encodeURIComponent).join(","), void 0 !== Reporter && Reporter.reportKeyValue({
                    key: "SetDataPerf",
                    value: a,
                    force: !0
                }))
            }
            s.expectEnd()
        },
        xa = (e, t) => {
            wxNativeConsole.info(`[OperationFlow] executing init flow with type ${O(t)}`);
            var r, n = t === S.FLOW_CREATE_TAB,
                o = t === S.FLOW_INITIAL_RENDERING_CACHE,
                a = e.operationFlow.iterator,
                l = a.nextStep(),
                c = l[1],
                u = l[2],
                d = s(),
                f = null;
            if ("skyline" === d) r = i().getContext(e.viewId);
            else if ("scl" === d) {
                r = {
                    mainRoot: __sclEngine__.getTabBarContainer()
                }
            } else "xr-frame" === d && (r = xrFrame.getOrCreateContext(e.viewId));
            if (n) {
                if (e.tabNodeId = u, wxNativeConsole.info(`[OperationFlow] creating tab bar comp <${c}> ok, pageId=${e.viewId}`), "skyline" === d) {
                    var p = i().getTabBarContext();
                    e.tabRoot = f = window.__TAB_BAR__ = ko.Component.createWithContext("tab-bar", ko.Component._list[c], p, e), "function" == typeof f.__domElement.setStyleScope && f.__domElement.setStyleScope(ko.getStyleScopeId(ko.Component._list[c].options.classPrefix))
                } else "scl" === d ? e.tabRoot = f = window.__TAB_BAR__ = ko.createElement("tab-bar", ko.Component._list[c]) : "xr-frame" === d ? wxNativeConsole.info(`[OperationFlow] unexpected xr-frame tabb bar, pageId=${e.viewId}`) : e.tabRoot = f = window.__TAB_BAR__ = ko.createElement("tab-bar", ko.Component._list[c]);
                wxNativeConsole.info(`[OperationFlow] create tab bar comp ok, pageId=${e.viewId}`)
            } else if (o) {
                if (!c) return void To(null);
                f = ko.createElement("initial-rendering-cache", ko.Component._list[c])
            } else {
                var _ = l[3] || {};
                e.rootNodeId = u, wxNativeConsole.info(`[OperationFlow] creating root component on view thread, pageId=${e.viewId}`), wx.traceBeginEvent("Framework", "createRootComponent"), "skyline" === d ? (e.root = f = window.__DOMTree__ = ko.Component.createWithGenericsAndContext("wx-page", ko.Component._list[c], _, r, e), "function" == typeof f.__domElement.setStyleScope && f.__domElement.setStyleScope(ko.getStyleScopeId(ko.Component._list[c].options.classPrefix))) : "xr-frame" === s() ? e.root = f = window.__DOMTree__ = ko.Component.createWithGenericsAndContext("wx-xr-element", ko.Component._list[c], _, r, e) : e.root = f = window.__DOMTree__ = ko.Component.createWithGenerics("body", ko.Component._list[c], _, e), wx.traceEndEvent(), wxNativeConsole.info(`[OperationFlow] create root component on view thread ok, pageId=${e.viewId}`)
            }
            if (e.nodeId.allocNodeId(f, u), f.setAttribute("is", c), Ce.restoring && !n) {
                var v = Ce.idDataMap[e.nodeId.getNodeId(f)];
                ko.Component.replaceWholeData(f, v, null), vo(Ce.restoring), Ce.restoring = null, Ce.idDataMap = null
            }
            if ((l = a.nextStep())[0] !== t) throw new Error(`Framework inner error (expect ${O(t)} end but get ${O(l[0])})`);
            if (e.nodeId.addNode(f), n)
                if ("skyline" === d) {
                    wxNativeConsole.info("[OperationFlow] attaching tabBar to skyline");
                    var h = i(),
                        g = h.getTabBarContext();
                    f.__domElement.setStyle("pointer-events: none;"), g.attach(f.__domElement), ko.Element.pretendAttached(f), h.insertToInspecteeRoots(f), e.__attached = !0, wxNativeConsole.info("[OperationFlow] attach tabBar to skyline done")
                } else if ("scl" === d) wxNativeConsole.info("[OperationFlow] attaching tabBar to scl"), r.mainRoot.appendChild(f), wxNativeConsole.info("[OperationFlow] attaching tabBar to scl");
            else {
                var y = ko.createElement("wx-tab-bar-wrapper", ko.Component._list["wx://tab-bar-wrapper"]);
                y.appendChild(f), document.documentElement.insertBefore(y.$$, document.body), ko.Element.pretendAttached(y), e.tabDestroyed && y.removeChild(f)
            } else if (o) {
                var w = document.createElement("wx-initial-rendering-cache-wrapper");
                if (w.setAttribute("style", "height: 0; overflow: hidden"), w.appendChild(f.$$), document.documentElement.insertBefore(w, document.body), (l = a.nextStep())[0] !== S.FLOW_INITIAL_RENDERING_CACHE) throw new Error("Framework inner error (expect initial rendering end but get another)");
                m(f, 1, (e => {
                    e.triggerLifeTime("cacheAttached")
                })), To(f, l[1]), e.nodeId.removeNode(f), document.documentElement.removeChild(w)
            } else {
                if ("skyline" === d) {
                    wxNativeConsole.info(`[WABaseLib.Critical] attach root element to skyline, pageId=${e.viewId}`);
                    var b = i(),
                        x = r.createElement("empty", "host");
                    x.setStyle(["opacity: 0.999999", "border-radius: 0%", "filter: blur(0px)", "backdrop-filter: blur(0px)"].join("; ")), x.appendChild(f.__domElement), f.__domElement.forceDetached(), r.attach(f.__domElement, x), b.setCustomRouteConfigIfNeeded(e.viewId, x), b.insertToInspecteeRoots(f), e.__attached = !0
                } else "webview" === s() && (document.body = f.$$);
                m(f, 1, (e => {
                    e.triggerLifeTime("cacheAttached")
                })), "webview" === d && function(e) {
                    Co && Date.now();
                    var t = So(window.__route__);
                    if ("static" !== t) {
                        if ("dynamic" !== t) {
                            var r = __wxConfig.envVersion;
                            "develop" !== r && "trial" !== r || Oo()
                        }
                        return !1
                    }
                    Ao(e)
                }(f), ko.Element.pretendAttached(f)
            }
            wxNativeConsole.info(`[OperationFlow] init flow type ${O(t)} execution ok`)
        },
        Ea = {},
        Ca = !1,
        Sa = (e = {}) => {
            var t = s(),
                r = "skyline" === t ? I : R;
            if (ne(r, t), "reLaunch" !== e.openType && "autoReLaunch" !== e.openType || (Ra(r), Ca = !1), !Ca) {
                Ca = !0, wxNativeConsole.info(`[VD] newTabBar, tabBarViewId=${r}`), Fa[r] = !0, qi.create(r), le(r);
                var n = qi.get(r);
                if (n.operationFlow.unblock(), "skyline" === t) {
                    var o = i().getTabBarContext();
                    __webviewEngine__.getStyleSheetManager(r).registerBackendContext(o)
                }
                if ("scl" === t) n.compManager.injectComponentsRecursively([N], (() => {
                    te(S.SCL_CONTEXT_READY, {}, r)
                }))
            }
        },
        Aa = new Set,
        Oa = (e, t) => {
            if (!qi.get(e)) {
                wxNativeConsole.info(`[VD] newPage, pageId=${e}`), ne(e, s());
                var r = qi.create(e).compManager;
                if (Fa[e] = !1, ja[e] = [], La[e] = [], le(e), Do(e, (() => {
                        if (wxNativeConsole.info(`[WebviewInjectFirstPage] onMainPageFrameReady, isLazyLoad=${Qo()}, pageId=${e}, isFirstPage=${__wxConfig.isFirstPage}`), Qo() && __wxConfig.isFirstPage && "webview" === s()) {
                            var t = __wxConfig.appLaunchInfo.path,
                                r = t.replace(/\.html$/, "").replace(/^\//, "");
                            r = ta(r), wxNativeConsole.info(`[WebviewInjectFirstPage] entryPath=${t}, pageId=${e}, rootCompPath=${r}`);
                            var n = qi.get(e).compManager;
                            setTimeout((() => {
                                r = ta(r);
                                var t = aa(r),
                                    o = [r, ...g(t)];
                                n.setInitialSubPackage(r), n.injectComponentsRecursively(o, (() => {
                                    Ea[e].on("inject", (() => {
                                        na(r), ra(r)
                                    }))
                                }), !0)
                            }))
                        }
                        "skyline" === s() && i().procGenPolyfilled("undefined" != typeof __wxCodeSpace__)
                    })), Ea[e] = w(["inject"]), Ea[e].on("inject", (() => {
                        "webview" === s() && Ha(e)
                    })), __wxConfig.onReady((() => {
                        Qo() && F() ? Do(e, (() => {
                            "skyline" === s() ? r.injectComponentsRecursively([N], (() => {
                                i().onPageReady(e, (() => {
                                    var r = "autoReLaunch" === t.openType || "reLaunch" === t.openType;
                                    t.isTabPage && (D(t.path) ? (Ha(e, r), j()) : L()), Ea[e].notify("inject")
                                }))
                            })) : r.injectComponentsRecursively([N], (() => {
                                Ea[e].notify("inject")
                            }))
                        })) : Ea[e].notify("inject")
                    })), "skyline" === s()) {
                    var n = (In || Rn(), In);
                    __webviewEngine__.styleSheetRuntime.addIndexGroup(""), Object.keys(n).forEach((e => {
                        var t = `${n[e]}__plugin__/${e}/`;
                        __webviewEngine__.styleSheetRuntime.addIndexGroup(t)
                    })), i().onPageReady(e, (r => {
                        var n, o, a, i, s, l;
                        (__webviewEngine__.getStyleSheetManager(e).registerBackendContext(r), t.isTabPage) && (D(t.path) ? (Sa(t), null === (n = window) || void 0 === n || null === (o = n.__TAB_BAR__) || void 0 === o || null === (a = o.__domElement) || void 0 === a || a.setStyle("display: flex; pointer-events: none;")) : null === (i = window) || void 0 === i || null === (s = i.__TAB_BAR__) || void 0 === s || null === (l = s.__domElement) || void 0 === l || l.setStyle("display: none; pointer-events: none;"))
                    }))
                }
            }
        },
        Ta = e => {
            var t = qi.get(e);
            if (wxNativeConsole.info("[skyline] getDomTreeByPageId tm: ", typeof t), void 0 !== t && void 0 !== t.root) return t.root
        },
        Ia = e => {
            if ("webview" !== s()) {
                var t = e.viewId;
                if (wxNativeConsole.info(`[destroyPage] pageId=${t}`), ko.Element.pretendDetached(e.root), qi.destroy(t), Na(null), delete Fa[t], delete ja[t], delete La[t], delete Ea[t], (e => {
                        delete $[e]
                    })(t), (e => {
                        delete J[e], delete K[e]
                    })(t), Aa.delete(t), "skyline" === s()) {
                    var r = i();
                    r.markDestroyContext(t), r.removeFromInspecteeRoots(e.root), __webviewEngine__.removeStyleSheetManager(t), Foundation.emit("SKYLINE_DESTROY_PAGE", t)
                } else "xr-frame" === s() && (xrFrame.getOrCreateContext(t).destroy(), delete window.__DOMTree__)
            }
        },
        Ra = e => {
            if ("webview" !== s()) {
                wxNativeConsole.info(`[CustomTabBar] destroyTabBar pageId=${e}`);
                var t = qi.get(e);
                t && (null != t && t.tabRoot && ko.Element.pretendDetached(t.tabRoot), qi.destroy(e), delete Fa[e], delete ja[e], delete La[e], delete Ea[e], "skyline" === s() && (__webviewEngine__.removeStyleSheetManager(e), i().removeFromInspecteeRoots(t.root)))
            }
        },
        Na = e => {
            var t;
            window.__DOMTree__ = null !== e ? null === (t = qi.get(e)) || void 0 === t ? void 0 : t.root : null
        };
    "skyline" === s() && wx.subscribe("onAppRouteDone", (e => {
        Na(e.webviewId)
    }));
    var Pa = {
            String: String,
            Number: Number,
            Boolean: Boolean,
            Object: Object,
            Array: Array,
            null: null
        },
        ka = (e, t) => {
            for (var r in e.properties) {
                var n = e.properties[r];
                n.type = Pa[n.type], n.optionalTypes && (n.optionalTypes = n.optionalTypes.map((e => Pa[e])))
            }
            var o = "";
            t || (o = so.getComponentClassPrefix(e.is));
            var a = e.options,
                i = !(!a.writeIdToDOM && !t);
            e.options = Bo, e.options.multipleSlots = a.multipleSlots || !1, e.options.writeOnly = a.writeOnly || !1, i || "xr-frame" === s() ? e.options.idPrefixGenerator = null : e.options.idPrefixGenerator = h, e.options.domain = a.domain, e.options.randomizeTagName = !1, e.options.innerDataExclude = (e => {
                if (!e) return null;
                var t = e.lastIndexOf("/"),
                    r = e.slice(1, t),
                    n = e.slice(t + 1);
                return new RegExp(r, n)
            })(a.innerDataExcludeString), e.options.virtualHost = a.virtualHost;
            var l = !1;
            if (a.styleIsolation) {
                var c = a.styleIsolation;
                "page-" === c.slice(0, 5) && (l = !0, c = c.slice(5)), "isolated" === c ? (o = so.getComponentClassPrefix(e.is), e.options.addGlobalClass = !1) : "strong-isolated" === c ? (o = so.getComponentClassPrefix(e.is), e.options.addGlobalClass = !1, e.options.randomizeTagName = !0) : "apply-shared" === c ? (o = so.getComponentClassPrefix(e.is), e.options.addGlobalClass = !0) : "shared" === c && "/" === a.domain ? (o = "", e.options.addGlobalClass = !1) : l = !1
            } else e.options.addGlobalClass = a.addGlobalClass || !1;
            e.options.classPrefix = o, a.hasObservers && (e.observers = {
                "**"() {}
            }), H() && (e.observers = {
                ...e.observers || {},
                "**"(e) {
                    WeixinJSBridge.invoke("componentDataChanged", {
                        nodeId: this.__wxTmplId,
                        data: e
                    })
                }
            }), window.__customComponentMode__ = void 0 !== __wxAppCode__ && __wxAppCode__[e.template];
            var u = window.__generateFunc__;
            return void 0 !== __wxAppCode__ && __wxAppCode__[e.template] ? u = __wxAppCode__[e.template] : wxNativeConsole.warn(`[componentRegistration] Generate function of ${e.is} not found in view thread`), e.template = {
                path: e.is + ".wxml",
                func: u
            }, ko.registerElement(e), {
                disableAppWxss: l,
                classPrefix: o
            }
        },
        Ma = (e, t) => {
            var r = __webviewEngine__.getStyleSheetManager(e, t);
            t.forEach((e => {
                var t = "__APP__" === e ? "" : e;
                r.setIndex(t + "app.fpiib"), Gn(e, (e => {
                    e.forEach((e => {
                        r.setIndex(`${t}__plugin__/${e.provider}/app.fpiib`)
                    }))
                }))
            }))
        },
        Da = (e, t, r) => {
            var n = "xr-frame" === s() ? y(e) : e,
                o = s();
            t || (window.__forceSaveStates__ = ho, "function" == typeof wx.onWebViewWillManuallyTerminate && wx.onWebViewWillManuallyTerminate(ho));
            var a, [i, l, c, u] = n,
                d = qi.get(r);
            t || (d.rootCompName = c);
            for (var f = 0; f < i.length; f++) {
                var p = i[f];
                p.options.hasObservers && (p.observers = {
                    "**"() {}
                }), p.options = Lo, ko.registerBehavior(p)
            }
            "skyline" === o ? ((a = __webviewEngine__.getStyleSheetManager(r)).preventUpdate(), a.setStyleSheet("app", ko.getStyleScopeId(""), 2)) : "webview" === o && (a = window.__styleSheetManager2__).preventUpdate();
            for (var _ = function() {
                    var e = l[v],
                        r = Pn(e.is);
                    r.startsWith("plugin-private://") && !d.compManager.__injectedComponents.has(r) && d.compManager.__injectedComponents.add(r);
                    var n = e.is === c && !t;
                    "scl" === o && t && (n = !0);
                    var {
                        disableAppWxss: i,
                        classPrefix: s
                    } = ka(e, n);
                    i && e.is === c && !t && ("webview" === o ? __webviewEngine__.disableStyleElement("app.wxss") : "skyline" === o && a.disableStyleSheet("app"));
                    var u = e.is + ".wxss",
                        f = void 0 === __wxAppCode__ ? null : __wxAppCode__[u];
                    if ("skyline" === o) {
                        f && !a.usePreCompiled && f("", {
                            allowIllegalSelector: !0
                        });
                        var p = 0;
                        "function" == typeof ko.getStyleScopeId && (p = ko.getStyleScopeId(s));
                        var _ = e.is === c ? 1 : 0;
                        a.setStyleSheet(r, p, _)
                    } else "scl" === o ? __sclEngine__.loadStyleBincode(`${r}.fpcssb`) : "webview" === o && (i && e.is === c && !t && __webviewEngine__.disableStyleElement("app.wxss"), f && ((e.is !== c || t) && f(s && s + "--", {
                        allowIllegalSelector: !0
                    }), Xr(u, (e => {
                        e ? e(s && s + "--", {
                            allowIllegalSelector: !0
                        }) : window.__styleSheetManager__.setCss("./" + u, ""), wx.triggerPageReRender()
                    }))))
                }, v = 0; v < l.length; v++) _();
            for (var h in Xr("app.wxss", (e => {
                    e ? e("", {
                        allowIllegalSelector: !0
                    }) : window.__styleSheetManager__.setCss("./app.wxss", ""), wx.triggerPageReRender()
                })), "webview" !== o && "skyline" !== o || (a.allowUpdate(), a.requestUpdate()), u) zo.call(ko.Component._list, u[h]) && (ko.Component._list[h] = ko.Component._list[u[h]])
        };
    se(S.LOAD_COMPONENT_DEF, ((e, t, r) => {
        var n;
        wxNativeConsole.info(`[loadComponentDef] isFirstPage=${__wxConfig.isFirstPage}, isLazyLoad=${Qo()}`);
        var o = e[0],
            a = o[0];
        if ("//" === (null === (n = ko.Component._list[a]) || void 0 === n ? void 0 : n.options.domain) && ra(a, r), Qo() && ("webview" !== s() || !__wxConfig.isFirstPage)) {
            var i = qi.get(r).compManager;
            i.setInitialSubPackage(a), Do(r, (() => {
                i.injectComponentsRecursively(o, (() => {
                    Ea[r].on("inject", (() => {
                        na(a), ra(a, r)
                    }))
                }), !0)
            }))
        }
    }));
    var Fa = {},
        ja = {},
        La = {};
    se(S.COMPONENT_DEF, ((e, t, r) => {
        Fa[r] ? Da(e, !1, r) : ja[r].push(e), qi.get(r).compManager.setInitialSubPackage(e[2])
    })), se(S.COMPONENT_DEF_TAB, ((e, t, r) => {
        Fa[r] ? "webview" !== s() || "scl" === s() ? Da(e, !0, r) : Ea[r].on("inject", (() => {
            Da(e, !0, r)
        })) : La[r].push(e)
    }));
    se(S.UPDATE_COMPONENT_DEF, ((e, t, r) => {
        var [n] = e, o = qi.get(r);
        ko.Component._list[n.is] && ka(n, o.rootCompName === n.is)
    }));
    var Ba = (e, t) => {
            ae(S.WX_EVENT, (r => {
                var n = r[2],
                    o = r[1],
                    a = t.nodeId.getNodeById(r[0]);
                if (a) {
                    var i = ko.Element.getMethodCaller(a),
                        s = n._userTap;
                    if (n._requireActive && !__appServiceEngine__.isFramesetMode()) {
                        if (!(e => {
                                var t = __appServiceEngine__.getCurrentPagesByDomain("");
                                return t[t.length - 1].__wxWebviewId__ === e || e === I
                            })(e)) return;
                        delete n._requireActive
                    }
                    if (n._relatedInfo && (__appServiceEngine__.DisplayReporter.setEventRelatedInfo(n._relatedInfo), delete n._relatedInfo), "function" != typeof i[o]) console.warn('Component "' + a.is + '" does not have a method "' + o + '" to handle event "' + n.type + '".');
                    else if (s) cr((() => {
                        var e = __userActionTracer__.startTraceHandler(n);
                        __appServiceSDK__.setWxInterfaceIsInvokeInTap(n.type), ko.safeCallback("Event Handler", i[o], i, [n], a), __appServiceSDK__.unsetWxInterfaceIsInvokeInTap(), __userActionTracer__.endTraceHandler(e)
                    }));
                    else {
                        var l = __userActionTracer__.startTraceHandler(n);
                        ko.safeCallback("Event Handler", i[o], i, [n], a), __userActionTracer__.endTraceHandler(l)
                    }
                }
            }), e), ae(S.MODEL_VALUE_CHANGE, ((e, t, r) => {
                var {
                    data: n,
                    modelValueName: o,
                    nodeId: a
                } = e[0];
                Yo(n, o, r, a)
            }), e)
        },
        $a = (e, t) => {
            t.listenerInited || (t.listenerInited = !0, Ba(e, t), ae(S.REQUEST_SAVE, (([t]) => {
                ((e, t) => {
                    var r = qi.get(e);
                    r && (r.statesData = t, r.tabRoot && m(r.tabRoot, 1, (e => {
                        e.triggerLifeTime("saved")
                    })), m(r.root, 1, (e => {
                        e.triggerLifeTime("saved")
                    })), te(S.SAVE_STATE, [], e))
                })(e, t)
            }), e), ae(S.CALL_METHOD_FROM_WXS, (t => {
                (([e, t, r, n], o) => {
                    if (r || (r = {}), e) {
                        var a = qi.get(o);
                        if (!a) return;
                        var i = a.nodeId.getNodeById(e);
                        if (!i) return;
                        var s = dr.Element.getMethodCaller(i);
                        s && "function" == typeof s[t] && (n ? cr((() => {
                            s[t](r)
                        })) : s[t](r))
                    } else {
                        var l = __appServiceEngine__.getCurrentPagesByDomain("");
                        if (!l.length) return;
                        var c = l[l.length - 1];
                        c && "function" == typeof c[t] && (n ? cr((() => {
                            c[t](r)
                        })) : c[t](r))
                    }
                })(t, e)
            }), e), function(e, t) {
                ae(S.ANIMATION_TRANSITION_END, (e => {
                    if (e && e[0] && e[0].reqId) {
                        var r = t.applyAnimationCbMap[e[0].reqId];
                        "function" == typeof r && (delete t.applyAnimationCbMap[e[0].reqId], Ro.safeCallback("Animation", r, null, []));
                        var n = JSON.parse(e[0].args);
                        t.operationFlow.push([S.FLOW_SET_NODE_NEXT_ANIMATION_INFO, n])
                    }
                }), e), ae(S.CLEAR_ANIMATION_COMPLETE, (e => {
                    if (e && e[0] && e[0].reqId) {
                        var r = t.clearAnimationCbMap[e[0].reqId];
                        "function" == typeof r && (delete t.clearAnimationCbMap[e[0].reqId], Ro.safeCallback("Clear Animation", r, null, []))
                    }
                }), e)
            }(e, t), function(e, t) {
                ae(S.APPLY_NODE_ANIMATED_STYLE_END, (e => {
                    if (e && e[0] && e[0].reqId) {
                        var r = e[0].styleId,
                            n = t.animatedStyleCbMap[e[0].reqId];
                        "function" == typeof n && (delete t.animatedStyleCbMap[e[0].reqId], No.safeCallback("AnimaedStyle", n, null, [{
                            styleId: r
                        }]))
                    }
                }), e), ae(S.CLEAR_NODE_ANIMATED_STYLE_END, (e => {
                    if (e && e[0] && e[0].reqId) {
                        var r = t.animatedStyleCbMap[e[0].reqId];
                        "function" == typeof r && (delete t.animatedStyleCbMap[e[0].reqId], No.safeCallback("Clear AnimaedStyle", r, null, []))
                    }
                }), e)
            }(e, t), function(e, t) {
                ae(S.RESPONSE_VIEW_INFO, (([e, r]) => {
                    if (r) {
                        var n = t.viewInfoCbMap[r];
                        n && n(e)
                    }
                }), e)
            }(e, t), ((e, t) => {
                ae(S.UPDATE_PERFORMANCE_STAT, (r => {
                    var [n, o] = r, a = t.nodeId.getNodeById(n);
                    if (a && a.__updatePerformanceListener__) {
                        var i = vn.Element.getMethodCaller(a);
                        vn.safeCallback("Update Performance Listener", a.__updatePerformanceListener__, i, [o], a)
                    }
                    a && "function" == typeof bn && bn(o, a, e)
                }), e)
            })(e, t), ae(S.REQUEST_WORKLET_METHOD, ((e, t, r) => {
                var n, o, {
                        methodName: a,
                        nodeId: i,
                        reqId: s
                    } = e[0],
                    l = e => te(S.RESPONSE_WORKLET_METHOD, {
                        reqId: s,
                        workletId: e
                    }, r),
                    c = qi.get(r).nodeId.getNodeById(i),
                    u = null !== (n = null == va || null === (o = va[c.is]) || void 0 === o ? void 0 : o[a]) && void 0 !== n ? n : null;
                if ("function" == typeof u) {
                    var d = ko.Element.getMethodCaller(c),
                        f = u.call(d);
                    if ("function" == typeof f) return void l(__appServiceSDK__.workletSDK.registerJsValue(f))
                }
                l(null)
            }), e))
        },
        Wa = (e, t) => {
            var r = Nn(e.rootCompName),
                n = h();
            e.operationFlow.start(), e.operationFlow.push([S.FLOW_INITIAL_RENDERING_CACHE, r, n]);
            var o = ko.createElement("initial-rendering-cache", ko.Component._list[r], e);
            return ko.Element.getMethodCaller(o).__wxExparserNodeId__ = e.nodeId.allocNodeId(o, n), e.operationFlow.push([S.FLOW_INITIAL_RENDERING_CACHE]), e.nodeId.addNode(o), o.setData(t), e.operationFlow.push([S.FLOW_INITIAL_RENDERING_CACHE, t]), e.operationFlow.end(), e.nodeId.removeNode(o), o
        },
        Ua = e => {
            e.operationFlow.start(), e.operationFlow.push([S.FLOW_INITIAL_RENDERING_CACHE, "", null]), e.operationFlow.end()
        },
        Ga = {},
        Ha = (e, t = !1) => {
            void 0 !== __wxAppCode__[N + ".wxml"] ? Ga[e] || (Ga[e] = !0, wxNativeConsole.info(`[CustomTabBar] sendTabBarCreationRequest pageId=${e}`), te(S.REQUEST_TAB, [t], e)) : wxNativeConsole.info(`[CustomTabBar] no ${N} def, ignore requestTab`)
        };
    se(S.DESTROY_TAB, ((e, t, r) => {
        wxNativeConsole.info(`[CustomTabBar] destroyTabBar pageId=${r}`), qi.get(r).tabDestroyed = !0, L()
    })), se(S.HIDE_TAB, ((e, t, r) => {
        wxNativeConsole.info(`[CustomTabBar] hideTabBar pageId=${r}`), L()
    })), se(S.SHOW_TAB, ((e, t, r) => {
        wxNativeConsole.info(`[CustomTabBar] showTabBar pageId=${r}`), qi.get(r).tabDestroyed = !1, j()
    }));
    var Va = {},
        Za = e => new Promise((t => {
            Va[e] = t
        })),
        za = (e, t) => {
            var r = (() => {
                    var e, t, r = F();
                    return Ja(N) || (r = !1), "singlePage" === (null === (e = __wxConfig) || void 0 === e || null === (t = e.appLaunchInfo) || void 0 === t ? void 0 : t.mode) && (r = !1), r
                })(),
                n = Ka[e];
            if ("string" == typeof n && Fn(n)) wxNativeConsole.info(`[CustomTabBar] "${n}" is in independent subPackage, ignore`);
            else {
                var o = M(n),
                    a = oe(e) || "webview";
                if ("scl" !== o && a !== o && (o = a), wxNativeConsole.info(`[checkAndExecuteTabbarCreation] viewId=${e}, isGeneratorFunctionReady=${t}, needRenderCustomTabBar=${r}, renderer=${o}`), r && ("scl" !== o || t)) {
                    var i = qi.get(e) || qi.create(e);
                    $a(e, i), i.tabRoot || i.tabDestroyed || (i.compManager.injectComponentsRecursively([N]), ((e, t, r, n) => {
                        if (wxNativeConsole.info(`doDataThreadTabbarCreation viewId: ${e}, tabCompName: ${r}, renderer: ${n}`), "webview" !== n) {
                            var o, a, i = k();
                            if ("skyline" === n) o = I;
                            else {
                                if ("scl" !== n) throw Error(`[CustomTabBar] renderer: ${n} not support`);
                                o = R
                            }
                            var s = i.has(o);
                            if (s) a = i.get(o).tm, i.add(e, n, a), t.tabCompName = a.tabCompName, t.tabNodeId = a.tabNodeId, t.tabRoot = a.tabRoot, t.tabUsedDef = a.tabUsedDef;
                            else {
                                ne(o, n);
                                var l = [
                                    [],
                                    [], r = Nn(r), {}
                                ];
                                a = qi.create(o), sa(l, r, Object.create(null), "", a), $a(o, a), te(S.COMPONENT_DEF_TAB, l, o);
                                var c = h();
                                t.tabCompName = a.tabCompName = r, t.tabNodeId = a.tabNodeId = c, i.add(o, n, a), i.add(e, n, a), a.operationFlow.start(), a.operationFlow.push([S.FLOW_CREATE_TAB, r, c]);
                                var u = ko.createElement("tab-bar", ko.Component._list[r], a);
                                t.tabRoot = a.tabRoot = u, t.tabUsedDef = a.tabUsedDef = l, ko.Element.getMethodCaller(u).__wxExparserNodeId__ = a.nodeId.allocNodeId(u, a.tabNodeId), a.operationFlow.push([S.FLOW_CREATE_TAB]), a.nodeId.addNode(u), ko.Element.pretendAttached(u)
                            }
                            t.nodeId.addNode(t.tabRoot), !s && a.operationFlow.end(), "function" == typeof Va[e] && Va[e]()
                        } else {
                            k().add(e, n, t);
                            var d = [
                                [],
                                [], r = Nn(r), {}
                            ];
                            sa(d, r, Object.create(null), "", t), te(S.COMPONENT_DEF_TAB, d, e), t.tabCompName = r, t.tabNodeId = h(), t.operationFlow.start(), t.operationFlow.push([S.FLOW_CREATE_TAB, r, t.tabNodeId]);
                            var f = ko.createElement("tab-bar", ko.Component._list[r], t);
                            t.tabRoot = f, t.tabUsedDef = d, ko.Element.getMethodCaller(f).__wxExparserNodeId__ = t.nodeId.allocNodeId(f, t.tabNodeId), t.operationFlow.push([S.FLOW_CREATE_TAB]), t.nodeId.addNode(f), ko.Element.pretendAttached(t.tabRoot), t.operationFlow.end()
                        }
                    })(e, i, N, o), t && te(S.FLUSH_BLOCKED, [], "skyline" === o ? I : "scl" === o ? R : e), i.rootCompName && ((e, t, r) => {
                        var n, o, a = !0,
                            i = null === (n = __wxConfig) || void 0 === n || null === (o = n.tabBar) || void 0 === o ? void 0 : o.list;
                        Array.isArray(i) && i.map((e => null == e ? void 0 : e.pagePath)).filter((e => !!e)).indexOf(`${t}.html`) >= 0 && (a = !1), wxNativeConsole.info(`[checkPageIncludingTabBar] rootCompName=${t}, viewId=${r}, needRemove=${a}`), a && "skyline" !== oe(`${r}`) && (e.tabDestroyed = !0, B(r))
                    })(i, i.rootCompName, e))
                }
            }
        },
        qa = [];
    __wxConfig.onReady((() => {
        qa.forEach((e => {
            "skyline" !== oe(e) && za(e, !0)
        })), qa = null
    })), se(S.FLUSH_BLOCKED, ((e, t, r) => {
        wxNativeConsole.info(`[flushBlocked] pageId=${r}`), qi.get(r).operationFlow.flushBlocked()
    }));
    var Ja = e => (e = Nn(e), zo.call(mo, e) && (e = mo[e]), Wo[e]),
        Ka = {},
        Xa = (new WeakMap, function(e, t) {
            if ("webview" === s() && (t = 0), null == t) {
                for (var r = qi.list(), n = 0; n < r.length; ++n)
                    if (void 0 !== r[n].nodeId.getNodeById(e)) return r[n].nodeId.getNodeById(e);
                return null
            }
            var o = qi.get(t);
            return o ? o.nodeId.getNodeById(e) : null
        }),
        Ya = function(e, t) {
            "webview" === s() && (t = 0);
            var r = void 0 !== t ? qi.get(t) : qi.getByNode(e);
            return r ? r.nodeId.getNodeId(e) : ""
        },
        Qa = function(e) {
            "webview" === s() && (e = 0);
            var t = qi.get(e);
            return t ? t.root : ""
        },
        ei = function(e) {
            "webview" === s() && (e = 0);
            var t = qi.get(e);
            return t ? t.rootNodeId : ""
        },
        ti = function(e) {
            "webview" === s() && (e = 0);
            var t = qi.get(e);
            return t ? t.rootCompName : ""
        },
        ri = function(e) {
            var t = qi.getByNode(e);
            return t ? t.viewId : 0
        },
        ni = a(),
        oi = {},
        ai = {},
        ii = 0,
        si = 1,
        li = 2,
        ci = function(e) {
            return Object.keys(e).filter((t => {
                var r = t.toLocaleLowerCase();
                return !((r.includes("transform") || r.includes("transition")) && "" === e[t] || "" === t.trim() || void 0 === e[t] || "" === e[t] || !isNaN(parseInt(t, 10)))
            })).map((t => `${t.replace(/([A-Z]{1})/g,(e=>` - $ {
                    e.toLowerCase()
                }
                `))}:${e[t]}`)).join(";")
        },
        ui = (e, t) => {
            var {
                nodeId: r,
                webviewId: n,
                options: o,
                selector: a,
                reqId: i,
                hasCallback: s,
                fromWxs: l
            } = e, c = Xa(r, n);
            if (c) {
                var u = c.shadowRoot,
                    d = t || u.querySelectorAll(a);
                if (t) {
                    var f = () => {
                        var e = qi.getByNode(t);
                        if (l) {
                            var r = e.clearAnimationCbMap[i];
                            "function" == typeof r && (delete e.clearAnimationCbMap[i], ni.safeCallback("Clear Animation", r, null, []))
                        } else te(S.CLEAR_ANIMATION_COMPLETE, {
                            reqId: i
                        }, e.viewId)
                    };
                    if ((e => {
                            (e.__scrollAnimations || []).forEach((e => {
                                e.cancel()
                            })), e.__scrollAnimations = []
                        })(d), !o || "function" == typeof o || !d.__styleObj) return d.__animeOptions && (d.__animeOptions.forEach((e => "function" == typeof e.reset && e.reset())), d.__animeOptions = []), d.setNodeStyle("", T.ANIMATION), pe(d, T.ANIMATION), d.__styleObj = null, d.__animateStatus = ii, d.__animationPendingQueue = [], void f();
                    var p = d.__styleObj.transform.split(" ");
                    for (var _ of Object.keys(o))
                        if (o[_])
                            if (d.__styleObj["backgroundColor" === _ ? "background-color" : _]) delete d.__styleObj["backgroundColor" === _ ? "background-color" : _];
                            else
                                for (var v = 0; v < p.length; ++v) p[v].indexOf(_) >= 0 && p.splice(v, 1);
                    d.__styleObj.transform = p.join(" "), d.__styleObj["-webkit-transform"] = p.join(" "), d.__styleObj.transition = "unset", d.__styleObj.transitionProperty = "unset", d.__styleObj["-webkit-transition"] = "unset", d.__styleObj["-webkit-transition-property"] = "unset";
                    var h = e => {
                        d.setNodeStyle(wx.transformRpx(e, !0), T.ANIMATION)
                    };
                    h(ci(d.__styleObj)), fe(d, T.ANIMATION, h), d.__animateStatus = ii, --ai[i], 0 === ai[i] && s && f()
                } else {
                    ai[i] = d.length;
                    for (var g = 0; g < d.length; ++g) ui(e, d[g])
                }
            }
        },
        di = (e, t) => {
            var {
                nodeId: r,
                webviewId: n,
                selector: o
            } = e, a = Xa(r, n);
            if (a) {
                var i = a.shadowRoot,
                    s = t || i.querySelectorAll(o);
                if (t) s.__animationPendingQueue && s.__animationPendingQueue.length > 0 && (s.__animateStatus = li, setTimeout((() => {
                    pi(s.__animationPendingQueue.shift(), s, !0)
                }), 32));
                else
                    for (var l = 0; l < s.length; ++l) di(JSON.parse(JSON.stringify(e)), s[l])
            }
        },
        fi = e => ("string" == typeof e ? e = wx.transformRpx(e, !0) : "object" == typeof e && "string" == typeof e.value ? e.value = wx.transformRpx(e.value, !0) : Array.isArray(e) && e.map((e => {
            if ("string" == typeof e.value) e.value = wx.transformRpx(e.value, !0);
            else if ("string" == typeof e) return wx.transformRpx(e, !0);
            return e
        })), e),
        pi = (e, t, r) => {
            wx.nextTick((() => {
                var {
                    nodeId: n,
                    webviewId: o,
                    options: a,
                    selector: i,
                    reqId: s,
                    hasCallback: l,
                    type: c,
                    isLastAnimation: u,
                    fromWxs: d
                } = e, f = Xa(n, o);
                if (f) {
                    var p = f.shadowRoot,
                        _ = t || p.querySelectorAll(i);
                    if (t) {
                        if (_.__animateStatus === si || _.__animateStatus === li && !r) return _.__animationPendingQueue || (_.__animationPendingQueue = []), void _.__animationPendingQueue.push(JSON.parse(JSON.stringify(e)));
                        _.__hasCallback = l, _.__reqId = s, _.__args = JSON.stringify(e);
                        var v = ["height", "left", "matrix", "matrix3d", "opacity", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "top", "translate", "translate3d", "translateX", "translateY", "translateZ", "width", "backgroundColor", "bottom"],
                            h = ["opacity", "backgroundColor", "width", "height", "left", "top", "bottom"],
                            g = ["rotate", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "translateX", "translateY", "translateZ"],
                            m = "animeJS" === c,
                            y = (r, n = !0) => {
                                if (_.__animateStatus === si) {
                                    if (--oi[_.__reqId], _.__animationPendingQueue && _.__animationPendingQueue.length > 0 && !_.__hasCallback ? (_.__animateStatus = li, pi(_.__animationPendingQueue.shift(), _, !0)) : _.__animateStatus = ii, "function" == typeof r) _.__styleObj.transition = "unset", _.__styleObj.transitionProperty = "unset", _.__styleObj["-webkit-transition"] = "unset", _.__styleObj["-webkit-transition-property"] = "unset", r(ci(_.__styleObj));
                                    if (0 === oi[_.__reqId] && _.__hasCallback && n) {
                                        var o = qi.getByNode(t);
                                        if (d) {
                                            var a = o.applyAnimationCbMap[_.__reqId];
                                            "function" == typeof a && (delete o.applyAnimationCbMap[_.__reqId], ni.safeCallback("Animation", a, null, [])), di(e)
                                        } else te(S.ANIMATION_TRANSITION_END, {
                                            reqId: _.__reqId,
                                            args: _.__args
                                        }, o.viewId)
                                    }
                                }
                            },
                            w = [];
                        for (var b of Object.keys(a)) v.indexOf(b) >= 0 && (h.indexOf(b) >= 0 ? w.push({
                            type: "style",
                            args: ["backgroundColor" === b ? "background-color" : b, a[b]]
                        }) : g.indexOf(b) >= 0 ? w.push({
                            type: b,
                            args: [a[b]]
                        }) : w.push({
                            type: b,
                            args: a[b]
                        }));
                        var x = {
                                transition: {
                                    delay: a.delay || 0,
                                    duration: a.duration || 0,
                                    timingFunction: a.ease || "linear"
                                },
                                transformOrigin: a.transformOrigin || "50% 50% 0"
                            },
                            E = {
                                option: x,
                                animates: w
                            },
                            {
                                transition: C,
                                transitionProperty: A,
                                transform: O,
                                transformOrigin: I,
                                style: R
                            } = wx.animationToStyle(E),
                            N = _.__styleObj ? Object.assign({}, _.__styleObj, {
                                transition: C,
                                transform: O,
                                transitionProperty: A,
                                transformOrigin: I
                            }) : {
                                transition: C,
                                transform: O,
                                transitionProperty: A,
                                transformOrigin: I
                            };
                        for (var P of (N["-webkit-transition"] = N.transition, N["-webkit-transform"] = N.transform, N["-webkit-transition-property"] = N.transitionProperty, N["-webkit-transform-origin"] = N.transformOrigin, Object.keys(R || {}))) N[P] = R[P];
                        if (_.__styleObj && N.transform === _.__styleObj.transform) {
                            var k = !0;
                            for (var M of Object.keys(N)) h.indexOf(M) >= 0 && _.__styleObj[M] !== N[M] && (k = !1);
                            if (k) return void setTimeout((() => {
                                _.__animationPendingQueue && _.__animationPendingQueue.length > 0 && pi(_.__animationPendingQueue.shift(), _, !0)
                            }), x.duration)
                        }
                        if (0 === x.transition.duration ? (N.transition = "unset", N.transitionProperty = "unset", N["-webkit-transition"] = "unset", N["-webkit-transition-property"] = "unset") : _.__animateStatus = si, _.__styleObj = N, m) {
                            a.targets = _, a.ease && (a.easing = a.ease, delete a.ease), (e => {
                                Object.keys(e).forEach((t => {
                                    Vt.includes(t) && (e[t] = fi(e[t]))
                                }))
                            })(a), _.__animateStatus = si, _.__banned && ge(_);
                            var D = a.complete;
                            a.complete = (...e) => {
                                y(void 0, u), "function" == typeof D && D(...e)
                            };
                            var F = Ht(a);
                            _.__animeOptions || (_.__animeOptions = []), _.__animeOptions.push(F)
                        } else {
                            var j = ci(N),
                                L = e => {
                                    var t = () => {
                                        _.setNodeStyle(wx.transformRpx(e, !0), T.ANIMATION)
                                    };
                                    t(), fe(_, T.ANIMATION, t)
                                };
                            0 === x.transition.duration ? L(j) : setTimeout((() => {
                                L(j)
                            }), 32), _.__banned && ge(_), _.__animationListener || (_.addListener("transitionend", (() => {
                                y(L)
                            })), _.__animationListener = !0), 0 === x.transition.duration && (_.__animationPendingQueue && _.__animationPendingQueue.length > 0 ? (_.__animateStatus = li, pi(_.__animationPendingQueue.shift(), _, !0)) : _.__animateStatus = ii)
                        }
                    } else {
                        oi[s] = _.length;
                        for (var B = 0; B < _.length; ++B) pi(JSON.parse(JSON.stringify(e)), _[B])
                    }
                }
            }))
        },
        _i = (e, t, r) => {
            var n = e.$$,
                o = {},
                a = null,
                i = new Set,
                l = e => {
                    i.add(e), e((() => {
                        i.delete(e), 0 === i.size && "function" == typeof a && a(o)
                    }))
                };
            if (t.id && (o.id = e.id || ""), t.dataset && (o.dataset = e.dataset || {}), t.mark && (o.mark = e.collectMarks() || {}), (t.rect || t.size) && (n ? l((e => {
                    ((e, t) => {
                        "webview" === s() ? t(e.getBoundingClientRect()) : e.getBoundingClientRect((e => {
                            t(e)
                        }))
                    })(n, (r => {
                        t.rect && (o.left = r.left, o.right = r.right, o.top = r.top, o.bottom = r.bottom), t.size && (o.width = r.width, o.height = r.height), e()
                    }))
                })) : o.left = o.right = o.top = o.bottom = o.width = o.height = 0), t.properties && t.properties.forEach((t => {
                    var r = t.replace(/-([a-z])/g, ((e, t) => t.toUpperCase()));
                    ni.Component.hasPublicProperty(e, r) && (o[r] = e[r])
                })), t.scrollOffset)
                if ("function" == typeof e.hasBehavior && e.hasBehavior("wx-positioning-container")) {
                    var c = e.getScrollPosition();
                    o.scrollLeft = c.scrollLeft, o.scrollTop = c.scrollTop, o.scrollWidth = c.scrollWidth, o.scrollHeight = c.scrollHeight
                } else o.scrollLeft = 0, o.scrollTop = 0, o.scrollWidth = 0, o.scrollHeight = 0;
            if (t.computedStyle && t.computedStyle.length && n) {
                var u = "webview" !== s() ? e.__backendContext : null;
                l((e => {
                    ((e, t, r) => {
                        "webview" === s() ? r(window.getComputedStyle(t)) : "function" == typeof(null == e ? void 0 : e.getComputedStyle) ? e.getComputedStyle(t, (e => {
                            r(e || {})
                        })) : r({})
                    })(u, n, (r => {
                        for (var n = 0, a = t.computedStyle.length; n < a; n++) {
                            var i = t.computedStyle[n];
                            i && void 0 !== r[i] && (o[i] = r[i])
                        }
                        e()
                    }))
                }))
            }
            if (t.context && (o.contextIs = e.is, o.contextId = "function" == typeof e.getContextId && e.getContextId(), o.contextCanvasId = e.canvasId || "", "xr-frame" === s() && (o.__context = n.__xrElement)), t.node && (o.nodeIs = e.is, o.nodeId = "function" == typeof e.getContextId && e.getContextId(), o.nodeCanvasId = e.canvasId || "", o.nodeCanvasType = e.type || "", o.nodeNodeId = e.getNodeId()), t.ref && (console.warn("For developer: selectQuery fields ref not support on webview render mode"), o.ref = void 0), 0 !== i.size) {
                if ("function" != typeof r) throw new Error("Framework Error: getNetInfo called asynchronously without a callback");
                a = r
            } else {
                if ("function" != typeof r) return o;
                r(o)
            }
        },
        vi = (e, t) => "webview" === s() ? _i(e, t) : new Promise((r => {
            _i(e, t, (e => {
                r(e)
            }))
        })),
        hi = function() {
            var e = C()((function*(e, t) {
                var r = [],
                    {
                        pluginId: n,
                        queue: o
                    } = e;
                return o.forEach((e => {
                    var o = e.component,
                        a = e.selector,
                        i = e.single,
                        l = e.fields,
                        c = null;
                    if (0 === o) c = ((e, t) => {
                        var r = {},
                            n = e => "webview" === s() ? document.documentElement[e] || document.body[e] : t.root.getBackendContext()[e];
                        return e.id && (r.id = ""), e.dataset && (r.dataset = {}), e.mark && (r.mark = {}), e.rect && (r.left = 0, r.right = 0, r.top = 0, r.bottom = 0), e.size && (r.width = n("clientWidth"), r.height = n("clientHeight")), e.scrollOffset && (r.scrollLeft = n("scrollLeft"), r.scrollTop = n("scrollTop"), r.scrollWidth = n("scrollWidth"), r.scrollHeight = n("scrollHeight")), r
                    })(l, t);
                    else {
                        var u = t.nodeId.getNodeById(o),
                            d = !1;
                        if (u ? (ni.Component.getComponentOptions(u).writeOnly && (d = !0), u = u.shadowRoot) : n || (u = window.__DOMTree__ ? window.__DOMTree__.shadowRoot : null), i) {
                            var f = u && !d ? u.querySelector(a) : null;
                            f ? (f.$$ || !l.size && !l.rect || console.warn('For developer:Node "' + a + '" is virtual. Query selector cannot get size info.'), c = vi(f, l)) : c = null
                        } else {
                            var p = u && !d ? u.querySelectorAll(a) : [];
                            c = [];
                            for (var _ = 0; _ < p.length; _++) p[_].$$ || !l.size && !l.rect || console.warn('For developer:Node "' + a + '" is virtual. Query selector cannot get size info.'), c.push(vi(p[_], l));
                            c = Promise.all(c)
                        }
                    }
                    r.push(c)
                })), Promise.all(r)
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }();

    function gi(e = 0, t = 0, r = 0, n = 0) {
        return {
            x: e,
            y: t,
            left: e,
            top: t,
            width: r,
            height: n,
            bottom: t + n,
            right: e + r
        }
    }
    var mi = gi();

    function yi(e) {
        return e === document.documentElement ? gi(0, 0, e.clientWidth, e.clientHeight) : e.getBoundingClientRect()
    }

    function wi(e) {
        return e.width * e.height
    }

    function bi(e, t) {
        for (var r, n = 0, o = e.length; n !== o;) e[r = n + o >> 1] <= t ? n = r + 1 : o = r;
        return n
    }

    function xi(...e) {
        for (var t = e[0].left, r = e[0].right, n = e[0].top, o = e[0].bottom, a = 0; a < e.length; a += 1) t = Math.max(t, e[a].left), r = Math.min(r, e[a].right), n = Math.max(n, e[a].top), o = Math.min(o, e[a].bottom);
        var i = r - t,
            s = o - n;
        return i > 0 && s > 0 ? gi(t, n, i, s) : mi
    }
    var Ei = (e, t) => {
            class r {
                static getInstance() {
                    return this._instance || (this._instance = new r), this._instance
                }
                constructor() {
                    this._connected = !1, this._observers = new Set, this.refresh = function(e) {
                        var t = null;
                        return () => {
                            t || (t = requestAnimationFrame((() => {
                                t = null, e()
                            })))
                        }
                    }(this.refresh.bind(this))
                }
                addObserver(e) {
                    this._observers.add(e), this._connected || this._connect()
                }
                removeObserver(e) {
                    this._observers.delete(e), 0 === this._observers.size && this._connected && this._disconnect()
                }
                refresh() {
                    this._observers.forEach((e => {
                        e.refresh()
                    }))
                }
                _connect() {
                    this._connected || (e(this.refresh), this._connected = !0)
                }
                _disconnect() {
                    this._connected && (t(this.refresh), this._connected = !1)
                }
            }
            r._instance = null;
            class n {
                constructor(e, t, r = -1) {
                    this.target = e, this.observer = t, this._prevRatio = r, this._prevTargetRect = mi, this._prevThreshold = 0, this._prevThreshold = bi(t.thresholds, this._prevRatio)
                }
                updateIntersection(e) {
                    var t, r, n, o = yi(this.target),
                        a = function(e, t, r) {
                            var n = e.isConnected ? xi(t, r) : mi,
                                o = n.width > 0 && n.height > 0;
                            return {
                                rect: n,
                                ratio: o ? wi(n) / wi(r) : 0,
                                exists: o
                            }
                        }(this.target, e, o),
                        i = a.exists && (0 !== (t = o).height || 0 !== t.width) ? bi(this.observer.thresholds, a.ratio) : a.exists ? 1 : 0,
                        s = a.ratio !== this._prevRatio,
                        l = (r = o, n = this._prevTargetRect, !(r.top === n.top && r.left === n.left && r.right === n.right && r.bottom === n.bottom)),
                        c = i !== this._prevThreshold;
                    return this._prevTargetRect = o, this._prevThreshold = i, this._prevRatio = a.ratio, {
                        intersection: a,
                        targetRect: o,
                        ratioChanged: s,
                        thresholdChanged: c,
                        targetRectChanged: l
                    }
                }
            }
            return class {
                constructor(e, t) {
                    if (this._callback = e, this.relatives = void 0, this.thresholds = void 0, this.initialRatio = void 0, this._added = !1, this._observations = new Map, this._controller = r.getInstance(), this._entries = [], this._callbackScheduled = !1, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                    this.relatives = t.relatives, this.thresholds = Object.freeze(function(e = 0) {
                        return (Array.isArray(e) ? e.length ? e : [0] : [e]).map((e => {
                            if (e = Number(e), !window.isFinite(e)) throw new TypeError("The provided double value is non-finite.");
                            if (e < 0 || e > 1) throw new RangeError("Threshold values must be between 0 and 1.");
                            return e
                        })).sort()
                    }(t.threshold)), this.initialRatio = t.initialRatio || 0
                }
                _getRootRect() {
                    return xi(...this.relatives.map((({
                        node: e,
                        margin: t
                    }, r) => {
                        return n = yi(e || document.documentElement), o = t, a = n.left - o.left, i = n.top - o.top, gi(a, i, n.right + o.right - a, n.bottom + o.bottom - i);
                        var n, o, a, i
                    })))
                }
                disconnect() {
                    this._added && (this._added = !1, this._observations.clear(), this._controller.removeObserver(this))
                }
                observe(e) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(e instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        if (!this._observations.has(e)) {
                            var t = new n(e, this, this.initialRatio);
                            this._observations.set(e, t), this._added || (this._controller.addObserver(this), this._added = !0), window.requestAnimationFrame((() => {
                                this._added && this._initialRefresh(t)
                            }))
                        }
                    }
                }
                unobserve(e) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(e instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        this._observations.has(e) && (this._observations.delete(e), 0 === this._observations.size && this._added && (this._controller.removeObserver(this), this._added = !1))
                    }
                }
                _initialRefresh(e) {
                    var t = this._getRootRect(),
                        r = this._entries,
                        n = e.updateIntersection(t);
                    n.thresholdChanged && (r.push({
                        boundingClientRect: n.targetRect,
                        intersectionRatio: n.intersection.ratio,
                        intersectionRect: n.intersection.rect,
                        isIntersecting: n.intersection.exists,
                        rootBounds: t,
                        target: e.target,
                        time: Date.now()
                    }), this._scheduleCallback())
                }
                _scheduleCallback() {
                    this._callbackScheduled || (Promise.resolve().then((() => {
                        this._callbackScheduled = !1;
                        var e = this._entries;
                        e.length && (this._callback(e), this._entries = [])
                    })), this._callbackScheduled = !0)
                }
                refresh() {
                    var e = this._getRootRect(),
                        t = this._entries;
                    this._observations.forEach((r => {
                        var n = r.updateIntersection(e);
                        n.thresholdChanged && t.push({
                            boundingClientRect: n.targetRect,
                            intersectionRatio: n.intersection.ratio,
                            intersectionRect: n.intersection.rect,
                            isIntersecting: n.intersection.exists,
                            rootBounds: e,
                            target: r.target,
                            time: Date.now()
                        })
                    })), this._scheduleCallback()
                }
            }
        },
        Ci = !1;
    __wxConfig.onReady((e => {
        var t;
        Ci = !!Number((null === (t = e.expt) || void 0 === t ? void 0 : t.clicfg_appbrand_webview_native_intersection_observer) || 0)
    }));
    var Si, Ai = a(),
        Oi = {},
        Ti = {},
        Ii = {},
        Ri = function() {
            var e = C()((function*(e) {
                for (var t = __wxConfig.screenWidth || 500, r = __wxConfig.screenHeight || 1e3, n = null, o = function*() {
                        var {
                            node: o,
                            margins: i
                        } = e[a], s = o ? yield yield new Promise((e => {
                            o.$$.getBoundingClientRect((t => e(t)))
                        })): {
                            left: 0,
                            top: 0,
                            right: t,
                            bottom: r,
                            width: t,
                            height: r
                        }, l = {
                            left: s.left - i.left,
                            top: s.top - i.top,
                            right: s.right + i.right,
                            bottom: s.bottom + i.bottom
                        };
                        n = n ? ((e, t) => {
                            var r = {
                                left: e.left < t.left ? t.left : e.left,
                                top: e.top < t.top ? t.top : e.top,
                                right: e.right > t.right ? t.right : e.right,
                                bottom: e.bottom > t.bottom ? t.bottom : e.bottom,
                                width: 0,
                                height: 0
                            };
                            return r.right > r.left ? r.width = r.right - r.left : r.right = r.left = r.bottom = r.top = 0, r.bottom > r.top ? r.height = r.bottom - r.top : r.right = r.left = r.bottom = r.top = 0, r
                        })(n, l) : l
                    }, a = 0; a < e.length; a++) yield* o();
                return n
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        Ni = e => ({
            left: e.left || 0,
            top: e.top || 0,
            right: e.right || 0,
            bottom: e.bottom || 0
        }),
        Pi = ({
            left: e,
            top: t,
            right: r,
            bottom: n
        }) => `${t}px ${r}px ${n}px ${e}px`,
        ki = (e, t) => {
            for (var r, n = 0, o = e.length; n !== o;) e[r = n + o >> 1] <= t ? n = r + 1 : o = r;
            return n
        },
        Mi = (e, t, r, n, o) => {
            var a = h();
            if (!e.length || !t.length) return a;
            if ("webview" === s()) Ii[a] = e.length, 0 === n && (n = -1), e.forEach(((e, i) => {
                var s, l = t.filter((t => {
                        if (!t.node) return !0;
                        for (var r = t.node.$$, n = e.$$, o = !1; n;) {
                            if (n === r) {
                                o = !0;
                                break
                            }
                            n = n.parentNode
                        }
                        return o
                    })).length,
                    c = `${a}#${i}`;
                s = Ci && l === t.length ? 1 !== t.length ? ((e, t, r, n, o) => {
                    var a, i = Ei((n => {
                            a = t.map((({
                                node: t,
                                margins: o
                            }) => {
                                var i = !0,
                                    s = new window.IntersectionObserver((() => {
                                        i ? i = !1 : (a.forEach((e => e.takeRecords())), n())
                                    }), {
                                        root: t ? t.$$ : null,
                                        rootMargin: Pi(o),
                                        threshold: 1 === r.length && 0 === r[0] ? [0] : Array(101).fill(null).map(((e, t) => t / 100))
                                    });
                                return s.observe(e.$$), s
                            }))
                        }), (() => {
                            a.forEach((e => e.disconnect())), a = null
                        })),
                        s = new i((e => {
                            e.forEach((e => {
                                var t = e.target.__wxElement;
                                o({
                                    id: t.id,
                                    dataset: t.dataset,
                                    time: Date.now(),
                                    boundingClientRect: e.boundingClientRect,
                                    intersectionRatio: e.intersectionRatio,
                                    intersectionRect: e.intersectionRect,
                                    relativeRect: e.rootBounds
                                })
                            }))
                        }), {
                            initialRatio: n,
                            threshold: r,
                            relatives: t.map((({
                                node: e,
                                margins: t
                            }) => ({
                                node: e ? e.$$ : null,
                                margin: t
                            })))
                        });
                    return s
                })(e, t, r, n, o) : ((e, t, r, n, o) => {
                    var a = ki(n),
                        [{
                            node: i,
                            margins: s
                        }] = t,
                        l = new window.IntersectionObserver((e => {
                            e.forEach((e => {
                                if (null === a || a !== ki(r, e.isIntersecting ? e.intersectionRatio : -1)) {
                                    var t = e.target.__wxElement;
                                    o({
                                        id: t.id,
                                        dataset: t.dataset,
                                        time: Date.now(),
                                        boundingClientRect: e.boundingClientRect,
                                        intersectionRatio: e.intersectionRatio,
                                        intersectionRect: e.intersectionRect,
                                        relativeRect: e.rootBounds
                                    })
                                }
                            })), a = null
                        }), {
                            root: i ? i.$$ : null,
                            rootMargin: Pi(s),
                            threshold: r
                        });
                    return l
                })(0, t, r, n, o) : ((e, t, r, n, o) => {
                    Si || (Si = Ei((e => {
                        document.addEventListener("pageReRender", e), window.addEventListener("scroll", e, {
                            capture: !0,
                            passive: !0
                        })
                    }), (e => {
                        document.removeEventListener("pageReRender", e), window.removeEventListener("scroll", e, {
                            capture: !0
                        })
                    })));
                    var a = new Si((e => {
                        e.forEach((e => {
                            var t = e.target.__wxElement;
                            o({
                                id: t.id,
                                dataset: t.dataset,
                                time: Date.now(),
                                boundingClientRect: e.boundingClientRect,
                                intersectionRatio: e.intersectionRatio,
                                intersectionRect: e.intersectionRect,
                                relativeRect: e.rootBounds
                            })
                        }))
                    }), {
                        initialRatio: n,
                        threshold: r,
                        relatives: t.map((({
                            node: e,
                            margins: t
                        }) => ({
                            node: e ? e.$$ : null,
                            margin: t
                        })))
                    });
                    return a
                })(0, t, r, n, o), Oi[c] = s;
                var u = Ai.Observer.create((t => {
                    "attached" === t.status ? s.observe(e.$$) : "detached" === t.status && s.disconnect()
                }));
                Ti[c] = u, u.observe(e, {
                    attachStatus: !0
                }), Ai.Element.isAttached(e) && s.observe(e.$$)
            }));
            else if ("skyline" === s()) {
                var i = e.length;
                Ii[a] = i, e.forEach(((e, i) => {
                    var s, l = a + "#" + i,
                        c = {
                            targetNode: e,
                            relatives: t,
                            thresholds: r,
                            currentRatio: n,
                            cb: o
                        },
                        u = __skylineEngine__.RuntimeCore,
                        d = Ni(null === (s = c.relatives[0]) || void 0 === s ? void 0 : s.margins),
                        f = [d.top, d.right, d.bottom, d.left],
                        p = new u.intersectionObserver(function() {
                            var e = C()((function*(e) {
                                var t, {
                                        targetNode: r
                                    } = c,
                                    n = yield Ri(c.relatives);
                                o({
                                    id: r.id,
                                    dataset: r.dataset,
                                    time: Date.now(),
                                    boundingClientRect: e[0].boundingClientRect,
                                    intersectionRatio: e[0].intersectionRatio,
                                    intersectionRect: (t = e[0].intersectionRect, {
                                        left: t.left,
                                        top: t.top,
                                        right: t.right,
                                        bottom: t.bottom,
                                        width: t.width,
                                        height: t.height
                                    }),
                                    relativeRect: n
                                })
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), {
                            rootMargin: f,
                            thresholds: c.thresholds
                        });
                    Oi[l] = p, p.observe(e.$$)
                }))
            }
            return a
        },
        Di = (e, t, r, n, o, a = "internal") => {
            var i = null;
            if ((n = n || {}).observeAll) i = e.querySelectorAll(t);
            else {
                var s = e.querySelector(t);
                i = s ? [s] : []
            }
            i.length || console.warn('For developer:Node "' + t + '" is not found. Intersection observer will not trigger.'), i = i.filter((e => !!e.$$ || (console.warn('For developer:Node "' + t + '" is virtual. Intersection observer will not trigger.'), !1)));
            var l = [];
            r.forEach((t => {
                var {
                    selector: r,
                    margins: n
                } = t, o = null == r ? null : e.querySelector(r);
                o || null == r ? l.push({
                    node: o,
                    margins: Ni(n || {})
                }) : console.warn('For developer:Node "' + r + '" is not found. The relative node for intersection observer will be ignored.')
            })), l.length || console.warn("For developer:Intersection observer will be ignored because no relative nodes are found.");
            var c = n.thresholds && Array.isArray(n.thresholds) ? n.thresholds.filter((e => 0 <= e && e <= 1)) : [0];
            return Mi(i, l, c.length ? c : [0], n.initialRatio || 0, o)
        },
        Fi = e => {
            var t = Ii[e];
            delete Ii[e];
            for (var r = 0; r < t; r++) {
                var n = e + "#" + r,
                    o = Oi[n];
                o && (o.disconnect(), delete Oi[n]);
                var a = Ti[n];
                a && (a.disconnect(), delete Ti[n])
            }
        },
        ji = 1,
        Li = {},
        Bi = (e, t) => {
            var r = (e => {
                    if ("object" != typeof e) return "";
                    var t = "";
                    return ["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"].forEach((r => {
                        if (void 0 !== e[r]) {
                            var n = Number(e[r]);
                            n >= 0 || (n = "");
                            var o = r.replace(/[A-Z]/g, (e => "-" + e.toLowerCase()));
                            t && (t += " and "), t += `(${o}: ${n}px)`
                        }
                    })), ["orientation"].forEach((r => {
                        if (void 0 !== e[r]) {
                            var n = /^[-_a-z0-9]+$/i.test(e[r]) ? e[r] : "",
                                o = r.replace(/[A-Z]/g, (e => "-" + e.toLowerCase()));
                            t && (t += " and "), t += `(${o}: ${n})`
                        }
                    })), t
                })(e),
                n = window.matchMedia(r),
                o = ji++,
                a = e => {
                    t({
                        matches: e.matches
                    })
                };
            return Li[o] = {
                observer: n,
                listener: a
            }, n.addListener(a), t({
                matches: n.matches
            }), o
        },
        $i = e => {
            var {
                observer: t,
                listener: r
            } = Li[e];
            t.removeListener(r), delete Li[e]
        };

    function Wi(e, t) {
        var {
            hasCallback: r,
            reqId: n,
            nodeId: o,
            pageId: a,
            selector: s,
            data: l
        } = e[0], {
            renderer: c,
            styleInfo: u
        } = l, d = t.nodeId.getNodeById(o), f = void 0, p = (d = d ? d.shadowRoot : window.__DOMTree__ ? window.__DOMTree__.shadowRoot : null) ? d.querySelectorAll(s) : [];
        "skyline" === c ? f = function(e, t, r, n) {
            var {
                updaterId: o,
                userConfig: a
            } = e, s = i(), l = s.proxyCreateAnimatedStyle(t, o, a), {
                mapperId: c
            } = l, u = 0;
            return r.forEach((e => {
                e.__virtual ? console.warn(`applyAnimatedStyle can not be used on virtual component, selector(${n})`) : (e.$$.addAnimatedStyle(l), u++)
            })), 0 === u && (s.proxyStopMapper(t, c), console.warn(`applyAnimatedStyle can not find valid element, selector(${n})`)), c
        }(u, a, p, s) : "webview" === c && (f = function(e, t, r, n) {
            var {
                shouldAttach: o,
                mapperId: a,
                updateStyle: i
            } = e, s = 0;
            return r.forEach((e => {
                if (e.__virtual) console.warn(`applyAnimatedStyle can not be used on virtual component, selector(${n})`);
                else {
                    var t = e.$$.__worklet_animatedStyle_mapperIds__ || [];
                    o && (t.push(a), e.$$.__worklet_animatedStyle_mapperIds__ = t), t.indexOf(a) >= 0 && Object.keys(i || {}).forEach((t => {
                        e.$$.style[t] = i[t]
                    })), s++
                }
            })), 0 === s && console.warn(`applyAnimatedStyle can not find valid element, selector(${n})`), a
        }(u, 0, p, s)), r && te(S.APPLY_NODE_ANIMATED_STYLE_END, {
            reqId: n,
            styleId: f
        }, t.viewId)
    }
    var Ui = a();
    class Gi {
        constructor(e, t, r) {
            this._treeManager = e, this._arr = t, this._depth = 0, this._startCb = r
        }
        _consumeHead() {
            return this._arr.shift()
        }
        nextStepType() {
            return this._arr[0][0]
        }
        nextStep() {
            for (; this._arr[0][0] === S.FLOW_DEPTH;) this._startCb(this._treeManager);
            if (this._arr[0][0] === S.FLOW_REPEAT) {
                var e = this._arr[0][2];
                return --this._arr[0][1] || this._consumeHead(), [e]
            }
            return this._consumeHead()
        }
        nextStepIf(e) {
            for (; this._arr[0][0] === S.FLOW_DEPTH;) this._startCb(this._treeManager);
            return this._arr[0][0] === e ? this._consumeHead() : null
        }
        expectStart() {
            var e = this._consumeHead();
            if (this._depth++, e[0] !== S.FLOW_DEPTH || e[1] !== this._depth) throw new Error(`Framework inner error (expect START descriptor with depth ${this._depth} but get ${O(e[0])})`);
            return e[2]
        }
        expectEnd() {
            for (; this._arr[0][0] === S.FLOW_DEPTH && this._arr[0][1] !== this._depth - 1;) this._startCb(this._treeManager);
            var e = this._consumeHead();
            if (this._depth--, e[0] !== S.FLOW_DEPTH || e[1] !== this._depth) throw new Error(`Framework inner error (expect END descriptor with depth ${this._depth} but get ${O(e[0])})`)
        }
        skipToEnd() {
            for (; this._arr[0];)
                if (this._arr[0][0] !== S.FLOW_DEPTH) this._consumeHead();
                else {
                    if (this._arr[0][1] === this._depth - 1) break;
                    this._startCb(this._treeManager)
                }
        }
        getQueueLength() {
            return this._arr.length
        }
        getDepth() {
            return this._depth
        }
    }
    class Hi {
        constructor(e, t) {
            var r = this;
            this._viewId = e, this._treeManager = t, this._depth = 0, this._curWinSize = 0, this._setDataCallbackInc = 1, this._pendingSetDataCallbacks = [], this._setDataCallbackMap = {}, this._received = [], this._cache = [], this._blocked = [], this._isBlocked = !0, this._fetchingViewInfoCallbacks = [];
            var n = (e, t) => {
                    if (this._received.push([t].concat(e)), t === S.FLOW_DEPTH && (this._depth = e[0], 0 === this._depth)) {
                        var r = this._received;
                        this._received = [], this._isBlocked ? this._blocked.push(r) : (this.iterator = new Gi(this._treeManager, r, Hi._startCb), Hi._startCb(this._treeManager), this.onFinished())
                    }
                },
                o = function() {
                    if ("FLOW_" !== a.slice(0, 5)) return "continue";
                    if ("FLOW_SET_DATA" === a) ae(S[a], (([e]) => {
                        r._pendingSetDataCallbacks.push(e)
                    }), e);
                    else if ("FLOW_VIEW_INFO" === a) {
                        var t = function() {
                            var e = C()((function*([e, t, n]) {
                                var o = null;
                                "selectorQuery" === e ? o = yield hi(t, r._treeManager): "intersection" === e ? o = ((e, t, r) => {
                                    if ("addIntersectionObserver" === e.type) {
                                        var n = null;
                                        if (e.nodeId) {
                                            var o = t.nodeId.getNodeById(e.nodeId);
                                            if (!o) return;
                                            n = o.shadowRoot
                                        } else e.pluginId || (n = window.__DOMTree__.shadowRoot);
                                        if (!n) return;
                                        return {
                                            observerId: Di(n, e.targetSelector, e.relativeInfo, e.options, (e => {
                                                r({
                                                    info: e
                                                })
                                            }), "user")
                                        }
                                    }
                                    if ("removeIntersectionObserver" === e.type) {
                                        var a = e.observerId;
                                        return Fi(a), {
                                            reqEnd: !0
                                        }
                                    }
                                })(t, r._treeManager, (e => {
                                    te(S.RESPONSE_VIEW_INFO, [e, n], r._viewId)
                                })) : "matchMedia" === e && (o = ((e, t) => {
                                    if ("addMediaQueryObserver" === e.type) return {
                                        observerId: Bi(e.mediaQueryCond, (e => {
                                            t({
                                                info: e
                                            })
                                        }))
                                    };
                                    if ("removeMediaQueryObserver" === e.type) {
                                        var r = e.observerId;
                                        return $i(r), {
                                            reqEnd: !0
                                        }
                                    }
                                })(t, (e => {
                                    te(S.RESPONSE_VIEW_INFO, [e, n], r._viewId)
                                }))), o && te(S.RESPONSE_VIEW_INFO, [o, n], r._viewId)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                        ae(S[a], (e => {
                            r._received.length || r._isBlocked ? r._fetchingViewInfoCallbacks.push(t.bind(r, e)) : t(e)
                        }), e)
                    } else ae(S[a], "FLOW_SET_NODE_ANIMATION_INFO" === a ? e => {
                        "scrollTimeline" === e[0].type ? "webview" === s() ? (({
                            nodeId: e,
                            selector: t,
                            options: r,
                            duration: n,
                            timeline: o
                        }, a) => {
                            for (var i = a.nodeId.getNodeById(e), s = (i = i ? i.shadowRoot : window.__DOMTree__ ? window.__DOMTree__.shadowRoot : null) ? i.querySelectorAll(t) : [], l = 0; l < s.length; l++) rr(i, s[l], r, {
                                duration: n
                            }, o)
                        })(e[0], r._treeManager) : "skyline" === s() && console.warn("component rendered with skyline does not support timeline animation, 'animate' call will be ignored.") : pi(e[0])
                    } : "FLOW_CLEAR_NODE_ANIMATION_INFO" === a ? e => {
                        ui(e[0])
                    } : "FLOW_SET_NODE_ANIMATED_STYLE" === a ? e => {
                        r._received.length || r._isBlocked ? r._fetchingViewInfoCallbacks.push(Wi.bind(null, e, r._treeManager)) : Wi(e, r._treeManager)
                    } : "FLOW_CLEAR_NODE_ANIMATED_STYLE" === a ? e => {
                        ! function(e, t) {
                            var {
                                hasCallback: r,
                                reqId: n,
                                nodeId: o,
                                selector: a,
                                renderer: i,
                                styleIds: s
                            } = e[0], l = t.nodeId.getNodeById(o);
                            ((l = l ? l.shadowRoot : window.__DOMTree__ ? window.__DOMTree__.shadowRoot : null) ? l.querySelectorAll(a) : []).forEach((e => {
                                if (e.__virtual) console.warn(`clearAnimatedStyle can not be used on virtual component, selector(${a})`);
                                else {
                                    var t = Array.isArray(s) ? s : [s];
                                    if ("skyline" === i) "function" == typeof e.$$.clearAnimatedStyle && e.$$.clearAnimatedStyle(t);
                                    else {
                                        var r = e.$$.__worklet_animatedStyle_mapperIds__ || [];
                                        t.forEach((e => {
                                            var t = r.indexOf(e);
                                            t >= 0 && r.splice(t, 1)
                                        }))
                                    }
                                }
                            })), r && te(S.CLEAR_NODE_ANIMATED_STYLE_END, {
                                reqId: n
                            }, t.viewId)
                        }(e, r._treeManager)
                    } : "FLOW_SET_NODE_NEXT_ANIMATION_INFO" === a ? e => {
                        di(e[0])
                    } : n, e)
                };
            for (var a of Object.keys(S)) o();
            ae(S.SET_DATA_CALLBACK, (([e]) => {
                this.triggerSetDataCallbacks(e)
            }), e)
        }
        flushBlocked() {
            for (; this._blocked.length && !this._isBlocked;) try {
                var e = this._blocked.shift();
                this.iterator = new Gi(this._treeManager, e, Hi._startCb), Hi._startCb(this._treeManager), this.onFinished()
            } catch (e) {
                console.error(e.message), Reporter.errorReport({
                    key: "webviewScriptError",
                    error: e
                })
            }
        }
        unblock() {
            this._isBlocked = !1, this.flushBlocked()
        }
        block() {
            this._isBlocked || (this._isBlocked = !0)
        }
        sendInIndividualFlow(e) {
            this.start(Date.now()), this.push(e), this.end()
        }
        start() {
            this.flush(), this._depth++, te(S.FLOW_DEPTH, [this._depth, Date.now()], this._viewId)
        }
        dedupe() {
            var e = this._cache;
            if (this._curWinSize) {
                if (2 === e.length) {
                    var t = e[1][2];
                    if (e[0][0] !== t) {
                        var r = e.pop(),
                            n = r.shift();
                        te(n, r, this._viewId)
                    } else e.shift(), e[0][1]++
                }
            } else {
                var o = 0;
                if (e.length > 2 && e[0][0] === e[1][0] && e[0][0] === e[2][0] && e[0][0] !== S.FLOW_SET_DATA && e[0][0] !== S.FLOW_VIEW_INFO && (o = 1), o) {
                    var a = e[0][0];
                    e.splice(0, 3), this.flush(), this._curWinSize = 1, e.unshift([S.FLOW_REPEAT, 3, a])
                } else if (e.length > 3) {
                    var i = e.pop(),
                        s = i.shift();
                    te(s, i, this._viewId)
                }
            }
        }
        push(e) {
            this._cache.unshift(e), 1 !== e.length ? this.flush() : this.dedupe()
        }
        flush() {
            for (this._curWinSize = 0; this._cache.length;) {
                var e = this._cache.pop(),
                    t = e.shift();
                te(t, e, this._viewId)
            }
        }
        end() {
            this.flush(), this._depth--, te(S.FLOW_DEPTH, this._depth, this._viewId), 0 === this._depth && ee()
        }
        checkDelayFetchingViewInfo() {
            if (this._fetchingViewInfoCallbacks.length) {
                var e = this._fetchingViewInfoCallbacks;
                this._fetchingViewInfoCallbacks = [], e.forEach((e => e()))
            }
        }
        registerSetDataCallback(e, t, r) {
            var n = this._setDataCallbackInc++;
            this._setDataCallbackMap[n] = [e, t, r], this.push([S.FLOW_SET_DATA, n])
        }
        triggerSetDataCallbacks(e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if (this._setDataCallbackMap[r]) {
                    var [n, o, a] = this._setDataCallbackMap[r];
                    delete this._setDataCallbackMap[r], Ui.safeCallback("SetData Callback", n, o, [], a)
                } else wxNativeConsole.error("setDataCallback error")
            }
        }
        onFinished() {
            if (wx.triggerPageReRender(), "skyline" === s()) {
                var e = i();
                this._viewId === I ? this._treeManager.__attached ? e.getTabBarContext().startRender((() => {
                    wxNativeConsole.info("[Skyline.Critical] tabbar startRender callback, doing nothing.")
                })) : wxNativeConsole.error("[OperationFlow] [Skyline.Critical] tabBar startRender ignored, because root element is not attached (may be due to some unexpected error). pageId=" + this._viewId) : !0 !== this._treeManager.__attached ? wxNativeConsole.error("[OperationFlow] [Skyline.Critical] startRender ignored, because root element is not attached (may be due to some unexpected error). pageId=" + this._viewId) : (Aa.has(this._viewId) || (Aa.add(this._viewId), t = "Framework", r = "firstStartRender", o && (null === (n = o) || void 0 === n || n.traceBeginEvent(t, r), null === (a = o) || void 0 === a || a.traceEndEvent())), e.getContext(this._viewId).startRender((() => {
                    wxNativeConsole.info("[Skyline.Critical] page startRender callback, doing nothing. pageId=" + this._viewId)
                })))
            }
            var t, r, n, a;
            this._blocked.length || (te(S.SET_DATA_CALLBACK, [this._pendingSetDataCallbacks], this._viewId, !0), this._pendingSetDataCallbacks = [], this.checkDelayFetchingViewInfo())
        }
        static setStartOperation(e) {
            Hi._startCb = e
        }
    }
    const Vi = Hi;
    var Zi = Object.create(null);
    class zi {
        constructor(e) {
            this.viewId = void 0, this.listenerInited = void 0, this.root = null, this.tabRoot = null, this.tabDestroyed = void 0, this.usedDef = null, this.tabUsedDef = null, this.statesData = null, this.operationFlow = void 0, this.nodeId = new x, this.compManager = void 0, this.rootNodeId = "", this.tabNodeId = "", this.rootCompName = "", this.tabCompName = "", this.applyAnimationCbMap = {}, this.clearAnimationCbMap = {}, this.animatedStyleCbMap = {}, this.viewInfoCbMap = {}, this.initialRootData = null, this.lifetimeListener = null, this.viewId = e, this.operationFlow = new Vi(e, this), this.compManager = new so(e, this)
        }
        static create(e) {
            var t = new zi(e);
            return Zi[e] = t, t
        }
        static destroy(e) {
            delete Zi[e]
        }
        static get(e) {
            return Zi[e]
        }
        static listViewId() {
            var e = [];
            for (var t of Object.keys(Zi)) e.push(Zi[t].viewId);
            return e
        }
        static list() {
            var e = [];
            for (var t of Object.keys(Zi)) e.push(Zi[t]);
            return e
        }
        static getByNode(e) {
            return "webview" === s() ? zi.get(0) : "scl" === s() ? zi.get(R) : zi.get(e.__backendContext.id)
        }
    }
    const qi = zi;
    var Ji = function() {
            Jr = !0
        },
        Ki = [],
        Xi = function(e, t) {
            var r = qr[e];
            if (r) return Kr[e] = t, __wxAppCode__[e] = t, r(t);
            Ki && Ki.push({
                path: e,
                data: t
            })
        },
        Yi = {},
        Qi = "contextReady";
    ae(S.XR_FRAME_CANVAS_READY, ((e, t, r) => {
        wxNativeConsole.info(`[xrFrameCreated] get canvasContext ${r}`), xrFrame.getOrCreateContext(r, e[0], e[1]).id = r, es(r).notify(Qi)
    }), "$GLOBAL");
    var es = e => (void 0 === Yi[e] && (Yi[e] = w([Qi])), Yi[e]),
        ts = a(),
        rs = (e, t) => {
            if (e instanceof ts.Element) {
                void 0 !== e.__wxScopeData__ && (t = e.__wxScopeData__), void 0 !== t && e instanceof ts.Component && e.setAttribute("wx:scope-data", JSON.stringify(t));
                var r = !1;
                e instanceof ts.Component && !(e.shadowRoot instanceof ts.Element) && (r = !0);
                for (var n = r ? e.childNodes : e.__wxSlotChildren, o = e instanceof ts.VirtualNode ? t : void 0, a = 0; a < n.length; a++) {
                    var i = n[a];
                    rs(i, o)
                }
            }
        },
        ns = () => {
            rs(window.__DOMTree__, void 0)
        },
        os = a();
    "undefined" != typeof navigator && /wechatdevtools/.test(navigator.userAgent) && (G = !0), H() && (os.globalOptions.writeExtraInfoToAttr = !0), Vi.setStartOperation(wa), wx.onWindowResize((({
        size: e
    }) => {
        var t = {
            width: e.windowWidth,
            height: e.windowHeight
        };
        if (window.__rpxRecalculatingFuncs__ && (window.__rpxRecalculatingFuncs__.forEach((e => {
                e(t)
            })), "webview" === s()))
            for (var r = document.getElementsByTagName("style"), n = 0; n < r.length; n++) "string" == typeof r[n].getAttribute("wxss:path") && (r[n].innerHTML = r[n].innerHTML + ".wx-trigger-chrome-media-query-update { height: " + Math.random() + "px; }");
        for (var o of Object.keys(ue)) ue[o].__resizers.forEach((e => {
            e && e(t)
        }))
    })), ae(S.BANNING_MAP, (([e]) => {
        (e => {
            if (!ve) {
                ve = e;
                var t = e => {
                    if (e instanceof _e.Component) {
                        var r = _e.Component.getComponentOptions(e).domain;
                        if ("//" !== r) {
                            var n = r.split("/", 1)[0],
                                o = e.shadowRoot;
                            ve[n] ? ye(o, ve[n]) : t(o)
                        }
                    }
                    e instanceof _e.Element && e.childNodes.forEach((e => {
                        t(e)
                    }))
                };
                t(window.__DOMTree__)
            }
        })(e)
    }));
    var as = !0,
        is = e => e,
        ss = e => void 0 !== qi.get(e),
        ls = () => Ce,
        cs = (e, t = (() => {}), r) => {
            var n;
            l(r), "webview" === s() && wx._checkDeviceWidth(!0), (e => {
                Fa[e] = !0, "webview" === s() && Ha(e), ja[e].forEach((t => {
                    Da(t, !1, e)
                })), ja[e] = [], La[e].forEach((t => {
                    Ea[e].on("inject", (() => {
                        Da(t, !0, e)
                    }))
                })), La[e] = []
            })(e), n = Ki, Ki = [], n.forEach((({
                path: e,
                data: t
            }) => Xi(e, t)));
            var o = qi.get(e);
            (e => {
                var t = __wxConfig.benchmarkLevel || 24;
                "skyline" === s() && t >= 23 && (wxNativeConsole.info(`[startInitRender] [skyline] benchmarkLevel(${t}) >= 23, calling initReady before unblocking operation flow`), e())
            })(t), o.operationFlow.unblock()
        },
        us = (e, t) => {
            "skyline" === s() ? (i().onPageReady(e, t), wxNativeConsole.info("[WABaseLib.Critical] skyline context ok, pageId=", e)) : "xr-frame" === s() ? (wxNativeConsole.info("[prepareInitRender] waiting for xrFrameContext, xrFrameId=", e), ((e, t) => {
                var r = () => {
                        wxNativeConsole.info("[xrFrameContextReady] emit context ready " + e), t()
                    },
                    n = es(e);
                n.isNotified(Qi) ? r() : n.on(Qi, r)
            })(e, t), wxNativeConsole.info("[prepareInitRender] xrFrameContext ok, xrFrameId=", e)) : "webview" === s() && t()
        };
    __virtualDOM__ = t
})(), (() => {
    "use strict";
    var e = {};
    e.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), e.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var t = {};
    e.r(t);
    var r = globalThis;
    var n = (() => r.__virtualDOM__)(),
        o = (__sclEngine__.exparser, {
            delayedGwx: !1,
            genObject: !1,
            globalThis: globalThis,
            noCss: !0
        });
    window.__webview_engine_version__ = .02, globalThis.__vd_version_info__ = window.__vd_version_info__ = o, __sclEngine__.setValidInit(), __sclEngine__.initScl((() => {
        var e, t;
        t = n.getEntryFile("__APP__", (e => {
            wxNativeConsole.info(`[CustomTabBar] injectCodeToScl getEntryFiles: ${e}`)
        })), __subContextEngine__.loadJsFiles(t), __sclEngine__.loadStyleBincode("custom-tab-bar/index.fpcssb", e)
    })), wx.subscribe("initTabBar", (e => {
        wxNativeConsole.info("[CustomTabBar] recv initTabBar " + JSON.stringify(e)), __sclEngine__.isInitialized() ? n.newTabBar(e) : __sclEngine__.initScl((() => {
            n.newTabBar(e)
        }))
    })), __webviewEngine__ = t
})();
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
        entrys: {},
        defines: {},
        modules: {},
        ops: [],
        wxs_nf_init: void 0,
        total_ops: 0
    },
    __vd_version_info__ = __vd_version_info__ || {},
    __wxAppCode__ = __wxAppCode__ || {},
    __WASclContextEndTime__ = Date.now();
"function" == typeof this.__wxLibrary.onEnd && this.__wxLibrary.onEnd(), delete this.__wxLibrary;