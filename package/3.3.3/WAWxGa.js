try {
    ! function() {
        let t, e = "getWxGAGlobalVar";
        globalThis[e] ? t = globalThis[e] : void 0 !== globalThis.WeixinJSBridge && globalThis.WeixinJSBridge[e] && (t = globalThis.WeixinJSBridge[e]);
        var {
            wxConsole: i,
            wxNativeConsole: n
        } = t(), r = function(t) {
            var e = {};

            function i(n) {
                if (e[n]) return e[n].exports;
                var r = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
            }
            return i.m = t, i.c = e, i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }, i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (i.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) i.d(n, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return n
            }, i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return i.d(e, "a", e), e
            }, i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, i.p = "", i(i.s = 0)
        }([function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1).__importStar(i(2));
            e.default = n
        }, function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, "__extends", (function() {
                return r
            })), i.d(e, "__assign", (function() {
                return o
            })), i.d(e, "__rest", (function() {
                return a
            })), i.d(e, "__decorate", (function() {
                return s
            })), i.d(e, "__param", (function() {
                return u
            })), i.d(e, "__metadata", (function() {
                return f
            })), i.d(e, "__awaiter", (function() {
                return l
            })), i.d(e, "__generator", (function() {
                return _
            })), i.d(e, "__createBinding", (function() {
                return c
            })), i.d(e, "__exportStar", (function() {
                return d
            })), i.d(e, "__values", (function() {
                return h
            })), i.d(e, "__read", (function() {
                return p
            })), i.d(e, "__spread", (function() {
                return y
            })), i.d(e, "__spreadArrays", (function() {
                return E
            })), i.d(e, "__spreadArray", (function() {
                return T
            })), i.d(e, "__await", (function() {
                return m
            })), i.d(e, "__asyncGenerator", (function() {
                return v
            })), i.d(e, "__asyncDelegator", (function() {
                return A
            })), i.d(e, "__asyncValues", (function() {
                return S
            })), i.d(e, "__makeTemplateObject", (function() {
                return w
            })), i.d(e, "__importStar", (function() {
                return O
            })), i.d(e, "__importDefault", (function() {
                return C
            })), i.d(e, "__classPrivateFieldGet", (function() {
                return I
            })), i.d(e, "__classPrivateFieldSet", (function() {
                return R
            })), i.d(e, "__classPrivateFieldIn", (function() {
                return M
            }));
            var n = function(t, e) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                }, n(t, e)
            };

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }
            var o = function() {
                return o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, o.apply(this, arguments)
            };

            function a(t, e) {
                var i = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(t); r < n.length; r++) e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (i[n[r]] = t[n[r]])
                }
                return i
            }

            function s(t, e, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a
            }

            function u(t, e) {
                return function(i, n) {
                    e(i, n, t)
                }
            }

            function f(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function l(t, e, i, n) {
                return new(i || (i = Promise))((function(r, o) {
                    function a(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(a, s)
                    }
                    u((n = n.apply(t, e || [])).next())
                }))
            }

            function _(t, e) {
                var i, n, r, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < r[1]) {
                                            a.label = r[1], r = o;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2], a.ops.push(o);
                                            break
                                        }
                                        r[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t], n = 0
                            } finally {
                                i = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var c = Object.create ? function(t, e, i, n) {
                void 0 === n && (n = i);
                var r = Object.getOwnPropertyDescriptor(e, i);
                r && !("get" in r ? !e.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return e[i]
                    }
                }), Object.defineProperty(t, n, r)
            } : function(t, e, i, n) {
                void 0 === n && (n = i), t[n] = e[i]
            };

            function d(t, e) {
                for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || c(e, t, i)
            }

            function h(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    i = e && t[e],
                    n = 0;
                if (i) return i.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function p(t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, r, o = i.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = o.next()).done;) a.push(n.value)
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = o.return) && i.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return a
            }

            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(p(arguments[e]));
                return t
            }

            function E() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                var n = Array(t),
                    r = 0;
                for (e = 0; e < i; e++)
                    for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
                return n
            }

            function T(t, e, i) {
                if (i || 2 === arguments.length)
                    for (var n, r = 0, o = e.length; r < o; r++) !n && r in e || (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
                return t.concat(n || Array.prototype.slice.call(e))
            }

            function m(t) {
                return this instanceof m ? (this.v = t, this) : new m(t)
            }

            function v(t, e, i) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, r = i.apply(t, e || []),
                    o = [];
                return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function a(t) {
                    r[t] && (n[t] = function(e) {
                        return new Promise((function(i, n) {
                            o.push([t, e, i, n]) > 1 || s(t, e)
                        }))
                    })
                }

                function s(t, e) {
                    try {
                        (i = r[t](e)).value instanceof m ? Promise.resolve(i.value.v).then(u, f) : l(o[0][2], i)
                    } catch (t) {
                        l(o[0][3], t)
                    }
                    var i
                }

                function u(t) {
                    s("next", t)
                }

                function f(t) {
                    s("throw", t)
                }

                function l(t, e) {
                    t(e), o.shift(), o.length && s(o[0][0], o[0][1])
                }
            }

            function A(t) {
                var e, i;
                return e = {}, n("next"), n("throw", (function(t) {
                    throw t
                })), n("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function n(n, r) {
                    e[n] = t[n] ? function(e) {
                        return (i = !i) ? {
                            value: m(t[n](e)),
                            done: "return" === n
                        } : r ? r(e) : e
                    } : r
                }
            }

            function S(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, i = t[Symbol.asyncIterator];
                return i ? i.call(t) : (t = h(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function n(i) {
                    e[i] = t[i] && function(e) {
                        return new Promise((function(n, r) {
                            (function(t, e, i, n) {
                                Promise.resolve(n).then((function(e) {
                                    t({
                                        value: e,
                                        done: i
                                    })
                                }), e)
                            })(n, r, (e = t[i](e)).done, e.value)
                        }))
                    }
                }
            }

            function w(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }
            var N = Object.create ? function(t, e) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                })
            } : function(t, e) {
                t.default = e
            };

            function O(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && c(e, t, i);
                return N(e, t), e
            }

            function C(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function I(t, e, i, n) {
                if ("a" === i && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === i ? n : "a" === i ? n.call(t) : n ? n.value : e.get(t)
            }

            function R(t, e, i, n, r) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? r.call(t, i) : r ? r.value = i : e.set(t, i), i
            }

            function M(t, e) {
                if (null === e || "object" != typeof e && "function" != typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof t ? e === t : t.has(e)
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.EnumPixelType = e.EnumAction = e.EnumColorMask = e.EnumBlendOp = e.EnumBlendFactor = e.EnumStencilOp = e.EnumCompareFunc = e.EnumFaceWinding = e.EnumCullMode = e.EnumUniformType = e.EnumVertexStep = e.EnumVertexFormat = e.EnumWrap = e.EnumFilter = e.EnumPrimitiveType = e.EnumPixelFormat = e.EnumShaderStage = e.EnumCubeFace = e.EnumImageType = e.EnumIndexType = e.EnumBufferType = e.EnumUsage = e.EnumFeature = void 0,
                function(t) {
                    t[t.INSTANCING = 0] = "INSTANCING", t[t.TEXTURE_COMPRESSION_DXT = 1] = "TEXTURE_COMPRESSION_DXT", t[t.TEXTURE_COMPRESSION_PVRTC = 2] = "TEXTURE_COMPRESSION_PVRTC", t[t.TEXTURE_COMPRESSION_ATC = 3] = "TEXTURE_COMPRESSION_ATC", t[t.TEXTURE_COMPRESSION_ETC2 = 4] = "TEXTURE_COMPRESSION_ETC2", t[t.TEXTURE_FLOAT = 5] = "TEXTURE_FLOAT", t[t.TEXTURE_HALF_FLOAT = 6] = "TEXTURE_HALF_FLOAT", t[t.ORIGIN_BOTTOM_LEFT = 7] = "ORIGIN_BOTTOM_LEFT", t[t.ORIGIN_TOP_LEFT = 8] = "ORIGIN_TOP_LEFT", t[t.MSAA_RENDER_TARGETS = 9] = "MSAA_RENDER_TARGETS", t[t.PACKED_VERTEX_FORMAT_10_2 = 10] = "PACKED_VERTEX_FORMAT_10_2", t[t.MULTIPLE_RENDER_TARGET = 11] = "MULTIPLE_RENDER_TARGET", t[t.IMAGETYPE_3D = 12] = "IMAGETYPE_3D", t[t.IMAGETYPE_ARRAY = 13] = "IMAGETYPE_ARRAY"
                }(e.EnumFeature || (e.EnumFeature = {})),
                function(t) {
                    t[t.IMMUTABLE = 1] = "IMMUTABLE", t[t.DYNAMIC = 2] = "DYNAMIC", t[t.STREAM = 3] = "STREAM"
                }(e.EnumUsage || (e.EnumUsage = {})),
                function(t) {
                    t[t.VERTEXBUFFER = 1] = "VERTEXBUFFER", t[t.INDEXBUFFER = 2] = "INDEXBUFFER"
                }(e.EnumBufferType || (e.EnumBufferType = {})),
                function(t) {
                    t[t.NONE = 1] = "NONE", t[t.UINT16 = 2] = "UINT16", t[t.UINT32 = 3] = "UINT32"
                }(e.EnumIndexType || (e.EnumIndexType = {})),
                function(t) {
                    t[t.IMAGETYPE_2D = 1] = "IMAGETYPE_2D", t[t.IMAGETYPE_CUBE = 2] = "IMAGETYPE_CUBE", t[t.IMAGETYPE_3D = 3] = "IMAGETYPE_3D", t[t.IMAGETYPE_ARRAY = 4] = "IMAGETYPE_ARRAY"
                }(e.EnumImageType || (e.EnumImageType = {})),
                function(t) {
                    t[t.POS_X = 0] = "POS_X", t[t.NEG_X = 1] = "NEG_X", t[t.POS_Y = 2] = "POS_Y", t[t.NEG_Y = 3] = "NEG_Y", t[t.POS_Z = 4] = "POS_Z", t[t.NEG_Z = 5] = "NEG_Z", t[t.NUM = 6] = "NUM"
                }(e.EnumCubeFace || (e.EnumCubeFace = {})),
                function(t) {
                    t[t.VS = 0] = "VS", t[t.FS = 1] = "FS"
                }(e.EnumShaderStage || (e.EnumShaderStage = {})),
                function(t) {
                    t[t.NONE = 1] = "NONE", t[t.RGBA8 = 2] = "RGBA8", t[t.RGB8 = 3] = "RGB8", t[t.RGBA4 = 4] = "RGBA4", t[t.R5G6B5 = 5] = "R5G6B5", t[t.R5G5B5A1 = 6] = "R5G5B5A1", t[t.R10G10B10A2 = 7] = "R10G10B10A2", t[t.RGBA32F = 8] = "RGBA32F", t[t.RGBA16F = 9] = "RGBA16F", t[t.R32F = 10] = "R32F", t[t.R16F = 11] = "R16F", t[t.L8 = 12] = "L8", t[t.DXT1 = 13] = "DXT1", t[t.DXT3 = 14] = "DXT3", t[t.DXT5 = 15] = "DXT5", t[t.DEPTH = 16] = "DEPTH", t[t.DEPTHSTENCIL = 17] = "DEPTHSTENCIL", t[t.PVRTC2_RGB = 18] = "PVRTC2_RGB", t[t.PVRTC4_RGB = 19] = "PVRTC4_RGB", t[t.PVRTC2_RGBA = 20] = "PVRTC2_RGBA", t[t.PVRTC4_RGBA = 21] = "PVRTC4_RGBA", t[t.ETC2_RGB8 = 22] = "ETC2_RGB8", t[t.ETC2_SRGB8 = 23] = "ETC2_SRGB8", t[t.ETC1_RGB8 = 24] = "ETC1_RGB8", t[t.PIXELFORMAT_PVR_CCZ = 25] = "PIXELFORMAT_PVR_CCZ", t[t.PIXELFORMAT_PVR_GZ = 26] = "PIXELFORMAT_PVR_GZ", t[t.PIXELFORMAT_ETC2_RGBA8 = 27] = "PIXELFORMAT_ETC2_RGBA8", t[t.ASTC = 28] = "ASTC"
                }(e.EnumPixelFormat || (e.EnumPixelFormat = {})),
                function(t) {
                    t[t.POINTS = 1] = "POINTS", t[t.LINES = 2] = "LINES", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP"
                }(e.EnumPrimitiveType || (e.EnumPrimitiveType = {})),
                function(t) {
                    t[t.NEAREST = 1] = "NEAREST", t[t.LINEAR = 2] = "LINEAR", t[t.NEAREST_MIPMAP_NEAREST = 3] = "NEAREST_MIPMAP_NEAREST", t[t.NEAREST_MIPMAP_LINEAR = 4] = "NEAREST_MIPMAP_LINEAR", t[t.LINEAR_MIPMAP_NEAREST = 5] = "LINEAR_MIPMAP_NEAREST", t[t.LINEAR_MIPMAP_LINEAR = 6] = "LINEAR_MIPMAP_LINEAR"
                }(e.EnumFilter || (e.EnumFilter = {})),
                function(t) {
                    t[t.REPEAT = 1] = "REPEAT", t[t.CLAMP_TO_EDGE = 2] = "CLAMP_TO_EDGE", t[t.MIRRORED_REPEAT = 3] = "MIRRORED_REPEAT"
                }(e.EnumWrap || (e.EnumWrap = {})),
                function(t) {
                    t[t.INVALID = 0] = "INVALID", t[t.FLOAT = 1] = "FLOAT", t[t.FLOAT2 = 2] = "FLOAT2", t[t.FLOAT3 = 3] = "FLOAT3", t[t.FLOAT4 = 4] = "FLOAT4", t[t.BYTE4 = 5] = "BYTE4", t[t.BYTE4N = 6] = "BYTE4N", t[t.UBYTE4 = 7] = "UBYTE4", t[t.UBYTE4N = 8] = "UBYTE4N", t[t.SHORT2 = 9] = "SHORT2", t[t.SHORT2N = 10] = "SHORT2N", t[t.SHORT4 = 11] = "SHORT4", t[t.SHORT4N = 12] = "SHORT4N", t[t.UINT10_N2 = 13] = "UINT10_N2"
                }(e.EnumVertexFormat || (e.EnumVertexFormat = {})),
                function(t) {
                    t[t.PER_VERTEX = 1] = "PER_VERTEX", t[t.PER_INSTANCE = 2] = "PER_INSTANCE"
                }(e.EnumVertexStep || (e.EnumVertexStep = {})),
                function(t) {
                    t[t.INVALID = 0] = "INVALID", t[t.FLOAT = 1] = "FLOAT", t[t.FLOAT2 = 2] = "FLOAT2", t[t.FLOAT3 = 3] = "FLOAT3", t[t.FLOAT4 = 4] = "FLOAT4", t[t.MAT4 = 5] = "MAT4"
                }(e.EnumUniformType || (e.EnumUniformType = {})),
                function(t) {
                    t[t.NONE = 1] = "NONE", t[t.FRONT = 2] = "FRONT", t[t.BACK = 3] = "BACK"
                }(e.EnumCullMode || (e.EnumCullMode = {})),
                function(t) {
                    t[t.CCW = 1] = "CCW", t[t.CW = 2] = "CW"
                }(e.EnumFaceWinding || (e.EnumFaceWinding = {})),
                function(t) {
                    t[t.NEVER = 1] = "NEVER", t[t.LESS = 2] = "LESS", t[t.EQUAL = 3] = "EQUAL", t[t.LESS_EQUAL = 4] = "LESS_EQUAL", t[t.GREATER = 5] = "GREATER", t[t.NOT_EQUAL = 6] = "NOT_EQUAL", t[t.GREATER_EQUAL = 7] = "GREATER_EQUAL", t[t.ALWAYS = 8] = "ALWAYS"
                }(e.EnumCompareFunc || (e.EnumCompareFunc = {})),
                function(t) {
                    t[t.KEEP = 1] = "KEEP", t[t.ZERO = 2] = "ZERO", t[t.REPLACE = 3] = "REPLACE", t[t.INCR_CLAMP = 4] = "INCR_CLAMP", t[t.DECR_CLAMP = 5] = "DECR_CLAMP", t[t.INVERT = 6] = "INVERT", t[t.INCR_WRAP = 7] = "INCR_WRAP", t[t.DECR_WRAP = 8] = "DECR_WRAP"
                }(e.EnumStencilOp || (e.EnumStencilOp = {})),
                function(t) {
                    t[t.ZERO = 1] = "ZERO", t[t.ONE = 2] = "ONE", t[t.SRC_COLOR = 3] = "SRC_COLOR", t[t.ONE_MINUS_SRC_COLOR = 4] = "ONE_MINUS_SRC_COLOR", t[t.SRC_ALPHA = 5] = "SRC_ALPHA", t[t.ONE_MINUS_SRC_ALPHA = 6] = "ONE_MINUS_SRC_ALPHA", t[t.DST_COLOR = 7] = "DST_COLOR", t[t.ONE_MINUS_DST_COLOR = 8] = "ONE_MINUS_DST_COLOR", t[t.DST_ALPHA = 9] = "DST_ALPHA", t[t.ONE_MINUS_DST_ALPHA = 10] = "ONE_MINUS_DST_ALPHA", t[t.SRC_ALPHA_SATURATED = 11] = "SRC_ALPHA_SATURATED", t[t.BLEND_COLOR = 12] = "BLEND_COLOR", t[t.ONE_MINUS_BLEND_COLOR = 13] = "ONE_MINUS_BLEND_COLOR", t[t.BLEND_ALPHA = 14] = "BLEND_ALPHA", t[t.ONE_MINUS_BLEND_ALPHA = 15] = "ONE_MINUS_BLEND_ALPHA"
                }(e.EnumBlendFactor || (e.EnumBlendFactor = {})),
                function(t) {
                    t[t.ADD = 1] = "ADD", t[t.SUBTRACT = 2] = "SUBTRACT", t[t.REVERSE_SUBTRACT = 3] = "REVERSE_SUBTRACT"
                }(e.EnumBlendOp || (e.EnumBlendOp = {})),
                function(t) {
                    t[t.NONE = 16] = "NONE", t[t.R = 1] = "R", t[t.G = 2] = "G", t[t.B = 4] = "B", t[t.A = 8] = "A", t[t.RGB = 7] = "RGB", t[t.RGBA = 15] = "RGBA"
                }(e.EnumColorMask || (e.EnumColorMask = {})),
                function(t) {
                    t[t.CLEAR = 1] = "CLEAR", t[t.LOAD = 2] = "LOAD", t[t.DONTCARE = 3] = "DONTCARE"
                }(e.EnumAction || (e.EnumAction = {})),
                function(t) {
                    t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.FLOAT = 5126] = "FLOAT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1"
                }(e.EnumPixelType || (e.EnumPixelType = {}))
        }]).default;
        (function(t) {
            var e = {};

            function i(n) {
                if (e[n]) return e[n].exports;
                var r = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
            }
            return i.m = t, i.c = e, i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
                })
            }, i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (i.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) i.d(n, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return n
            }, i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return i.d(e, "a", e), e
            }, i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, i.p = "", i(i.s = 3)
        })([, function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, "__extends", (function() {
                return r
            })), i.d(e, "__assign", (function() {
                return o
            })), i.d(e, "__rest", (function() {
                return a
            })), i.d(e, "__decorate", (function() {
                return s
            })), i.d(e, "__param", (function() {
                return u
            })), i.d(e, "__metadata", (function() {
                return f
            })), i.d(e, "__awaiter", (function() {
                return l
            })), i.d(e, "__generator", (function() {
                return _
            })), i.d(e, "__createBinding", (function() {
                return c
            })), i.d(e, "__exportStar", (function() {
                return d
            })), i.d(e, "__values", (function() {
                return h
            })), i.d(e, "__read", (function() {
                return p
            })), i.d(e, "__spread", (function() {
                return y
            })), i.d(e, "__spreadArrays", (function() {
                return E
            })), i.d(e, "__spreadArray", (function() {
                return T
            })), i.d(e, "__await", (function() {
                return m
            })), i.d(e, "__asyncGenerator", (function() {
                return v
            })), i.d(e, "__asyncDelegator", (function() {
                return A
            })), i.d(e, "__asyncValues", (function() {
                return S
            })), i.d(e, "__makeTemplateObject", (function() {
                return w
            })), i.d(e, "__importStar", (function() {
                return O
            })), i.d(e, "__importDefault", (function() {
                return C
            })), i.d(e, "__classPrivateFieldGet", (function() {
                return I
            })), i.d(e, "__classPrivateFieldSet", (function() {
                return R
            })), i.d(e, "__classPrivateFieldIn", (function() {
                return M
            }));
            var n = function(t, e) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                }, n(t, e)
            };

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }
            var o = function() {
                return o = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, o.apply(this, arguments)
            };

            function a(t, e) {
                var i = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(t); r < n.length; r++) e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (i[n[r]] = t[n[r]])
                }
                return i
            }

            function s(t, e, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a
            }

            function u(t, e) {
                return function(i, n) {
                    e(i, n, t)
                }
            }

            function f(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function l(t, e, i, n) {
                return new(i || (i = Promise))((function(r, o) {
                    function a(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(a, s)
                    }
                    u((n = n.apply(t, e || [])).next())
                }))
            }

            function _(t, e) {
                var i, n, r, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < r[1]) {
                                            a.label = r[1], r = o;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2], a.ops.push(o);
                                            break
                                        }
                                        r[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t], n = 0
                            } finally {
                                i = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var c = Object.create ? function(t, e, i, n) {
                void 0 === n && (n = i);
                var r = Object.getOwnPropertyDescriptor(e, i);
                r && !("get" in r ? !e.__esModule : r.writable || r.configurable) || (r = {
                    enumerable: !0,
                    get: function() {
                        return e[i]
                    }
                }), Object.defineProperty(t, n, r)
            } : function(t, e, i, n) {
                void 0 === n && (n = i), t[n] = e[i]
            };

            function d(t, e) {
                for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || c(e, t, i)
            }

            function h(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    i = e && t[e],
                    n = 0;
                if (i) return i.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function p(t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, r, o = i.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = o.next()).done;) a.push(n.value)
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = o.return) && i.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return a
            }

            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(p(arguments[e]));
                return t
            }

            function E() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                var n = Array(t),
                    r = 0;
                for (e = 0; e < i; e++)
                    for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
                return n
            }

            function T(t, e, i) {
                if (i || 2 === arguments.length)
                    for (var n, r = 0, o = e.length; r < o; r++) !n && r in e || (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
                return t.concat(n || Array.prototype.slice.call(e))
            }

            function m(t) {
                return this instanceof m ? (this.v = t, this) : new m(t)
            }

            function v(t, e, i) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, r = i.apply(t, e || []),
                    o = [];
                return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function a(t) {
                    r[t] && (n[t] = function(e) {
                        return new Promise((function(i, n) {
                            o.push([t, e, i, n]) > 1 || s(t, e)
                        }))
                    })
                }

                function s(t, e) {
                    try {
                        (i = r[t](e)).value instanceof m ? Promise.resolve(i.value.v).then(u, f) : l(o[0][2], i)
                    } catch (t) {
                        l(o[0][3], t)
                    }
                    var i
                }

                function u(t) {
                    s("next", t)
                }

                function f(t) {
                    s("throw", t)
                }

                function l(t, e) {
                    t(e), o.shift(), o.length && s(o[0][0], o[0][1])
                }
            }

            function A(t) {
                var e, i;
                return e = {}, n("next"), n("throw", (function(t) {
                    throw t
                })), n("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function n(n, r) {
                    e[n] = t[n] ? function(e) {
                        return (i = !i) ? {
                            value: m(t[n](e)),
                            done: "return" === n
                        } : r ? r(e) : e
                    } : r
                }
            }

            function S(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, i = t[Symbol.asyncIterator];
                return i ? i.call(t) : (t = h(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function n(i) {
                    e[i] = t[i] && function(e) {
                        return new Promise((function(n, r) {
                            (function(t, e, i, n) {
                                Promise.resolve(n).then((function(e) {
                                    t({
                                        value: e,
                                        done: i
                                    })
                                }), e)
                            })(n, r, (e = t[i](e)).done, e.value)
                        }))
                    }
                }
            }

            function w(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }
            var N = Object.create ? function(t, e) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                })
            } : function(t, e) {
                t.default = e
            };

            function O(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && c(e, t, i);
                return N(e, t), e
            }

            function C(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function I(t, e, i, n) {
                if ("a" === i && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === i ? n : "a" === i ? n.call(t) : n ? n.value : e.get(t)
            }

            function R(t, e, i, n, r) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? r.call(t, i) : r ? r.value = i : e.set(t, i), i
            }

            function M(t, e) {
                if (null === e || "object" != typeof e && "function" != typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof t ? e === t : t.has(e)
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.EnumPixelType = e.EnumAction = e.EnumColorMask = e.EnumBlendOp = e.EnumBlendFactor = e.EnumStencilOp = e.EnumCompareFunc = e.EnumFaceWinding = e.EnumCullMode = e.EnumUniformType = e.EnumVertexStep = e.EnumVertexFormat = e.EnumWrap = e.EnumFilter = e.EnumPrimitiveType = e.EnumPixelFormat = e.EnumShaderStage = e.EnumCubeFace = e.EnumImageType = e.EnumIndexType = e.EnumBufferType = e.EnumUsage = e.EnumFeature = void 0,
                function(t) {
                    t[t.INSTANCING = 0] = "INSTANCING", t[t.TEXTURE_COMPRESSION_DXT = 1] = "TEXTURE_COMPRESSION_DXT", t[t.TEXTURE_COMPRESSION_PVRTC = 2] = "TEXTURE_COMPRESSION_PVRTC", t[t.TEXTURE_COMPRESSION_ATC = 3] = "TEXTURE_COMPRESSION_ATC", t[t.TEXTURE_COMPRESSION_ETC2 = 4] = "TEXTURE_COMPRESSION_ETC2", t[t.TEXTURE_FLOAT = 5] = "TEXTURE_FLOAT", t[t.TEXTURE_HALF_FLOAT = 6] = "TEXTURE_HALF_FLOAT", t[t.ORIGIN_BOTTOM_LEFT = 7] = "ORIGIN_BOTTOM_LEFT", t[t.ORIGIN_TOP_LEFT = 8] = "ORIGIN_TOP_LEFT", t[t.MSAA_RENDER_TARGETS = 9] = "MSAA_RENDER_TARGETS", t[t.PACKED_VERTEX_FORMAT_10_2 = 10] = "PACKED_VERTEX_FORMAT_10_2", t[t.MULTIPLE_RENDER_TARGET = 11] = "MULTIPLE_RENDER_TARGET", t[t.IMAGETYPE_3D = 12] = "IMAGETYPE_3D", t[t.IMAGETYPE_ARRAY = 13] = "IMAGETYPE_ARRAY"
                }(e.EnumFeature || (e.EnumFeature = {})),
                function(t) {
                    t[t.IMMUTABLE = 1] = "IMMUTABLE", t[t.DYNAMIC = 2] = "DYNAMIC", t[t.STREAM = 3] = "STREAM"
                }(e.EnumUsage || (e.EnumUsage = {})),
                function(t) {
                    t[t.VERTEXBUFFER = 1] = "VERTEXBUFFER", t[t.INDEXBUFFER = 2] = "INDEXBUFFER"
                }(e.EnumBufferType || (e.EnumBufferType = {})),
                function(t) {
                    t[t.NONE = 1] = "NONE", t[t.UINT16 = 2] = "UINT16", t[t.UINT32 = 3] = "UINT32"
                }(e.EnumIndexType || (e.EnumIndexType = {})),
                function(t) {
                    t[t.IMAGETYPE_2D = 1] = "IMAGETYPE_2D", t[t.IMAGETYPE_CUBE = 2] = "IMAGETYPE_CUBE", t[t.IMAGETYPE_3D = 3] = "IMAGETYPE_3D", t[t.IMAGETYPE_ARRAY = 4] = "IMAGETYPE_ARRAY"
                }(e.EnumImageType || (e.EnumImageType = {})),
                function(t) {
                    t[t.POS_X = 0] = "POS_X", t[t.NEG_X = 1] = "NEG_X", t[t.POS_Y = 2] = "POS_Y", t[t.NEG_Y = 3] = "NEG_Y", t[t.POS_Z = 4] = "POS_Z", t[t.NEG_Z = 5] = "NEG_Z", t[t.NUM = 6] = "NUM"
                }(e.EnumCubeFace || (e.EnumCubeFace = {})),
                function(t) {
                    t[t.VS = 0] = "VS", t[t.FS = 1] = "FS"
                }(e.EnumShaderStage || (e.EnumShaderStage = {})),
                function(t) {
                    t[t.NONE = 1] = "NONE", t[t.RGBA8 = 2] = "RGBA8", t[t.RGB8 = 3] = "RGB8", t[t.RGBA4 = 4] = "RGBA4", t[t.R5G6B5 = 5] = "R5G6B5", t[t.R5G5B5A1 = 6] = "R5G5B5A1", t[t.R10G10B10A2 = 7] = "R10G10B10A2", t[t.RGBA32F = 8] = "RGBA32F", t[t.RGBA16F = 9] = "RGBA16F", t[t.R32F = 10] = "R32F", t[t.R16F = 11] = "R16F", t[t.L8 = 12] = "L8", t[t.DXT1 = 13] = "DXT1", t[t.DXT3 = 14] = "DXT3", t[t.DXT5 = 15] = "DXT5", t[t.DEPTH = 16] = "DEPTH", t[t.DEPTHSTENCIL = 17] = "DEPTHSTENCIL", t[t.PVRTC2_RGB = 18] = "PVRTC2_RGB", t[t.PVRTC4_RGB = 19] = "PVRTC4_RGB", t[t.PVRTC2_RGBA = 20] = "PVRTC2_RGBA", t[t.PVRTC4_RGBA = 21] = "PVRTC4_RGBA", t[t.ETC2_RGB8 = 22] = "ETC2_RGB8", t[t.ETC2_SRGB8 = 23] = "ETC2_SRGB8", t[t.ETC1_RGB8 = 24] = "ETC1_RGB8", t[t.PIXELFORMAT_PVR_CCZ = 25] = "PIXELFORMAT_PVR_CCZ", t[t.PIXELFORMAT_PVR_GZ = 26] = "PIXELFORMAT_PVR_GZ", t[t.PIXELFORMAT_ETC2_RGBA8 = 27] = "PIXELFORMAT_ETC2_RGBA8", t[t.ASTC = 28] = "ASTC"
                }(e.EnumPixelFormat || (e.EnumPixelFormat = {})),
                function(t) {
                    t[t.POINTS = 1] = "POINTS", t[t.LINES = 2] = "LINES", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP"
                }(e.EnumPrimitiveType || (e.EnumPrimitiveType = {})),
                function(t) {
                    t[t.NEAREST = 1] = "NEAREST", t[t.LINEAR = 2] = "LINEAR", t[t.NEAREST_MIPMAP_NEAREST = 3] = "NEAREST_MIPMAP_NEAREST", t[t.NEAREST_MIPMAP_LINEAR = 4] = "NEAREST_MIPMAP_LINEAR", t[t.LINEAR_MIPMAP_NEAREST = 5] = "LINEAR_MIPMAP_NEAREST", t[t.LINEAR_MIPMAP_LINEAR = 6] = "LINEAR_MIPMAP_LINEAR"
                }(e.EnumFilter || (e.EnumFilter = {})),
                function(t) {
                    t[t.REPEAT = 1] = "REPEAT", t[t.CLAMP_TO_EDGE = 2] = "CLAMP_TO_EDGE", t[t.MIRRORED_REPEAT = 3] = "MIRRORED_REPEAT"
                }(e.EnumWrap || (e.EnumWrap = {})),
                function(t) {
                    t[t.INVALID = 0] = "INVALID", t[t.FLOAT = 1] = "FLOAT", t[t.FLOAT2 = 2] = "FLOAT2", t[t.FLOAT3 = 3] = "FLOAT3", t[t.FLOAT4 = 4] = "FLOAT4", t[t.BYTE4 = 5] = "BYTE4", t[t.BYTE4N = 6] = "BYTE4N", t[t.UBYTE4 = 7] = "UBYTE4", t[t.UBYTE4N = 8] = "UBYTE4N", t[t.SHORT2 = 9] = "SHORT2", t[t.SHORT2N = 10] = "SHORT2N", t[t.SHORT4 = 11] = "SHORT4", t[t.SHORT4N = 12] = "SHORT4N", t[t.UINT10_N2 = 13] = "UINT10_N2"
                }(e.EnumVertexFormat || (e.EnumVertexFormat = {})),
                function(t) {
                    t[t.PER_VERTEX = 1] = "PER_VERTEX", t[t.PER_INSTANCE = 2] = "PER_INSTANCE"
                }(e.EnumVertexStep || (e.EnumVertexStep = {})),
                function(t) {
                    t[t.INVALID = 0] = "INVALID", t[t.FLOAT = 1] = "FLOAT", t[t.FLOAT2 = 2] = "FLOAT2", t[t.FLOAT3 = 3] = "FLOAT3", t[t.FLOAT4 = 4] = "FLOAT4", t[t.MAT4 = 5] = "MAT4"
                }(e.EnumUniformType || (e.EnumUniformType = {})),
                function(t) {
                    t[t.NONE = 1] = "NONE", t[t.FRONT = 2] = "FRONT", t[t.BACK = 3] = "BACK"
                }(e.EnumCullMode || (e.EnumCullMode = {})),
                function(t) {
                    t[t.CCW = 1] = "CCW", t[t.CW = 2] = "CW"
                }(e.EnumFaceWinding || (e.EnumFaceWinding = {})),
                function(t) {
                    t[t.NEVER = 1] = "NEVER", t[t.LESS = 2] = "LESS", t[t.EQUAL = 3] = "EQUAL", t[t.LESS_EQUAL = 4] = "LESS_EQUAL", t[t.GREATER = 5] = "GREATER", t[t.NOT_EQUAL = 6] = "NOT_EQUAL", t[t.GREATER_EQUAL = 7] = "GREATER_EQUAL", t[t.ALWAYS = 8] = "ALWAYS"
                }(e.EnumCompareFunc || (e.EnumCompareFunc = {})),
                function(t) {
                    t[t.KEEP = 1] = "KEEP", t[t.ZERO = 2] = "ZERO", t[t.REPLACE = 3] = "REPLACE", t[t.INCR_CLAMP = 4] = "INCR_CLAMP", t[t.DECR_CLAMP = 5] = "DECR_CLAMP", t[t.INVERT = 6] = "INVERT", t[t.INCR_WRAP = 7] = "INCR_WRAP", t[t.DECR_WRAP = 8] = "DECR_WRAP"
                }(e.EnumStencilOp || (e.EnumStencilOp = {})),
                function(t) {
                    t[t.ZERO = 1] = "ZERO", t[t.ONE = 2] = "ONE", t[t.SRC_COLOR = 3] = "SRC_COLOR", t[t.ONE_MINUS_SRC_COLOR = 4] = "ONE_MINUS_SRC_COLOR", t[t.SRC_ALPHA = 5] = "SRC_ALPHA", t[t.ONE_MINUS_SRC_ALPHA = 6] = "ONE_MINUS_SRC_ALPHA", t[t.DST_COLOR = 7] = "DST_COLOR", t[t.ONE_MINUS_DST_COLOR = 8] = "ONE_MINUS_DST_COLOR", t[t.DST_ALPHA = 9] = "DST_ALPHA", t[t.ONE_MINUS_DST_ALPHA = 10] = "ONE_MINUS_DST_ALPHA", t[t.SRC_ALPHA_SATURATED = 11] = "SRC_ALPHA_SATURATED", t[t.BLEND_COLOR = 12] = "BLEND_COLOR", t[t.ONE_MINUS_BLEND_COLOR = 13] = "ONE_MINUS_BLEND_COLOR", t[t.BLEND_ALPHA = 14] = "BLEND_ALPHA", t[t.ONE_MINUS_BLEND_ALPHA = 15] = "ONE_MINUS_BLEND_ALPHA"
                }(e.EnumBlendFactor || (e.EnumBlendFactor = {})),
                function(t) {
                    t[t.ADD = 1] = "ADD", t[t.SUBTRACT = 2] = "SUBTRACT", t[t.REVERSE_SUBTRACT = 3] = "REVERSE_SUBTRACT"
                }(e.EnumBlendOp || (e.EnumBlendOp = {})),
                function(t) {
                    t[t.NONE = 16] = "NONE", t[t.R = 1] = "R", t[t.G = 2] = "G", t[t.B = 4] = "B", t[t.A = 8] = "A", t[t.RGB = 7] = "RGB", t[t.RGBA = 15] = "RGBA"
                }(e.EnumColorMask || (e.EnumColorMask = {})),
                function(t) {
                    t[t.CLEAR = 1] = "CLEAR", t[t.LOAD = 2] = "LOAD", t[t.DONTCARE = 3] = "DONTCARE"
                }(e.EnumAction || (e.EnumAction = {})),
                function(t) {
                    t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.FLOAT = 5126] = "FLOAT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1"
                }(e.EnumPixelType || (e.EnumPixelType = {}))
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = i(1),
                a = i(4),
                s = i(6),
                u = o.__importDefault(i(30)),
                f = o.__importDefault(i(79)),
                l = o.__importDefault(i(80)),
                _ = o.__importStar(i(78)),
                c = function() {
                    function t() {
                        this.enumComponentType = s.enumComponentType, this.enumModelType = s.enumModelType, this.isNativeValueNative = !1, this.isEngineNative = !1, this.isPhysicsNative = !1, this.isWeakRefNative = !1, this.isCreateNativeUUMap = !1, this.isCreateNativeSUMap = !1, this.isCreateNativeULUMap = !1, this.hasNewWeakRef = !1, this.heatProtect = 60, this._inited = !1
                    }
                    return t.prototype.heatProtectPromiseFactory = function() {
                        return new Promise((function(t) {
                            t(60)
                        }))
                    }, t.prototype.init = function() {
                        var t = this;
                        if (!this._inited) {
                            if ("undefined" != typeof NativeGlobal && NativeGlobal.GameAccelerator) this.worker = new NativeGlobal.GameAccelerator, this.isEngineNative = !!this.worker.getEngine, this.isPhysicsNative = !!NativeGlobal.Phys3D, this.isRenderNative = !!this.worker.getRenderer, this.isNativeValueNative = !!this.worker.createNativeValue, this.isWeakRefNative = !!this.worker.createWeakRef, this.hasNewWeakRef = !!this.worker.createNewWeakRef, this.gaVersion = this.worker.getVersion ? this.worker.getVersion() : {
                                version: "0"
                            }, this.isCreateNativeUUMap = !!this.worker.createNativeUUMap, this.isCreateNativeSUMap = !!this.worker.createNativeSUMap, this.isCreateNativeULUMap = !!this.worker.createNativeULUMap;
                            else {
                                this.worker = a.wxMockGA, this.isEngineNative = this.isPhysicsNative = this.isRenderNative = !1;
                                try {
                                    var e = _.default("ga-logic");
                                    e && "function" == typeof e.getEngine && "function" == typeof e.getVersion && (console.log("ga-logic process id:" + _.pid), this.worker.getEngine = function() {
                                        return e.getEngine()
                                    }, this.worker.getVersion = function() {
                                        return e.getVersion()
                                    }, this.isEngineNative = !0)
                                } catch (t) {}
                                this.gaVersion = this.worker.getVersion()
                            }
                            var i = parseInt(this.gaVersion.version),
                                n = NaN === i || i < 100 ? 0 : i;
                            this.gaVersion.versionNumber = n, this.config = {
                                isNativeValueNative: this.isNativeValueNative,
                                isEngineNative: this.isEngineNative,
                                isPhysicsNative: this.isPhysicsNative,
                                isRenderNative: this.isRenderNative,
                                isWeakRefNative: this.isWeakRefNative,
                                gaVersion: this.gaVersion
                            }, setTimeout((function() {
                                "undefined" != typeof NativeGlobal && NativeGlobal.GameAccelerator, t.isRenderNative, t.isEngineNative && t.config.gaVersion.versionNumber, t.isNativeValueNative
                            }), 100), this._inited = !0
                        }
                    }, t.prototype.createWeakRef = function(t) {
                        return (this.isWeakRefNative ? this.worker : a.wxMockGA).createWeakRef(t)
                    }, t.prototype.createAutoRef = function(t) {
                        return (this.isWeakRefNative ? this.worker : a.wxMockGA).createAutoRef(t)
                    }, t.prototype.createNewWeakRef = function(t) {
                        if (!t._wr_entry_) throw new Error("createNewWeakRef Error: is not a WeakRefSentry");
                        return (this.isWeakRefNative ? this.worker : a.wxMockGA).createNewWeakRef(t)
                    }, t.prototype.createNewWeakRefSentry = function() {
                        var t = (this.isWeakRefNative ? this.worker : a.wxMockGA).createNewWeakRefSentry();
                        return t._wr_entry_ = !0, t
                    }, t.prototype.NativeGlobalStartProfile = function() {
                        return NativeGlobal.startProfile()
                    }, t.prototype.NativeGlobalStopProfile = function() {
                        return NativeGlobal.stopProfile()
                    }, t.prototype.getNativeGlobalProfileResult = function() {
                        return NativeGlobal.getProfileResult()
                    }, t.prototype.LogicAcceleratorStartProfile = function() {
                        return this.worker.startProfile()
                    }, t.prototype.LogicAcceleratorStopProfile = function() {
                        return this.worker.stopProfile()
                    }, t.prototype.getLogicAcceleratorProfileResult = function() {
                        return this.worker.getProfileResult()
                    }, t.prototype.createNativeValue = function(t) {
                        var e = (this.isNativeValueNative ? this.worker : a.wxMockGA).createNativeValue(t);
                        return new f.default(e)
                    }, t.prototype.getRenderer = function(t) {
                        var e = this.isRenderNative ? this.worker : a.wxMockGA,
                            i = this.isRenderNative ? t.gfx : t,
                            n = e.getRenderer(i);
                        return new l.default(n, this.config)
                    }, t.prototype.getEngine = function() {
                        var t = (this.isEngineNative ? this.worker : a.wxMockGA).getEngine();
                        return new u.default(t, this.config)
                    }, t.prototype.getGAVersion = function() {
                        return this.gaVersion
                    }, t.prototype.createNativeUUMap = function() {
                        return (this.isCreateNativeUUMap ? this.worker : a.wxMockGA).createNativeUUMap()
                    }, t.prototype.createNativeSUMap = function() {
                        return (this.isCreateNativeSUMap ? this.worker : a.wxMockGA).createNativeSUMap()
                    }, t.prototype.createNativeULUMap = function() {
                        return (this.isCreateNativeULUMap ? this.worker : a.wxMockGA).createNativeULUMap()
                    }, t
                }();
            Object.defineProperty(globalThis, "wxGA", {
                get: function() {
                    if (!r) {
                        var t = new c;
                        !0 === __wxConfig.engine && t.init(), r = t
                    }
                    return r
                }
            }), n.warn("inject wxga success.")
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.wxMockGA = void 0;
            var n = i(1),
                r = n.__importDefault(i(5)),
                o = i(13),
                a = n.__importDefault(i(14)),
                s = function() {
                    function t() {
                        this.key1toKey2 = new Map, this.key2toValue = new Map
                    }
                    return t.prototype.set = function(t, e, i) {
                        this.key1toKey2.set(t, e), this.key2toValue.set(e, i)
                    }, t.prototype.get = function(t, e) {
                        if (this.key1toKey2.get(t) === e) return this.key2toValue.get(e)
                    }, t.prototype.del = function(t, e) {
                        this.key1toKey2.delete(t), this.key2toValue.delete(e)
                    }, t
                }(),
                u = function() {
                    function t() {
                        this.map = new Map
                    }
                    return t.prototype.set = function(t, e) {
                        this.map.set(t, e)
                    }, t.prototype.get = function(t) {
                        return this.map.get(t)
                    }, t.prototype.del = function(t) {
                        this.map.delete(t)
                    }, t
                }(),
                f = function() {
                    function t() {}
                    return t.prototype.createNativeValue = function(t) {
                        return new o.NativeValueNative(this._gfx, t)
                    }, t.prototype.getRenderer = function(t) {
                        return this._gfx = t, new a.default(t)
                    }, t.prototype.getEngine = function() {
                        return new r.default
                    }, t.prototype.getVersion = function() {
                        return {
                            version: "mock"
                        }
                    }, t.prototype.createWeakRef = function(t) {
                        return "function" == typeof WeakRef ? new WeakRef(t) : {
                            deref: function() {
                                return t
                            }
                        }
                    }, t.prototype.createAutoRef = function(t) {
                        if ("function" == typeof WeakRef) var e = new WeakRef(t);
                        return {
                            makeRef: function() {
                                return "function" == typeof WeakRef ? e.deref() : t
                            }
                        }
                    }, t.prototype.createNewWeakRef = function(t) {
                        return "function" == typeof WeakRef ? new WeakRef(t) : {
                            deref: function() {
                                return t
                            }
                        }
                    }, t.prototype.createNewWeakRefSentry = function() {
                        return {
                            __mockGA__: !0
                        }
                    }, t.prototype.createNativeUUMap = function() {
                        return new u
                    }, t.prototype.createNativeSUMap = function() {
                        return new u
                    }, t.prototype.createNativeULUMap = function() {
                        return new s
                    }, t.prototype.startProfile = function() {}, t.prototype.stopProfile = function() {}, t.prototype.getProfileResult = function() {
                        return {}
                    }, t
                }(),
                l = new f;
            e.wxMockGA = l, e.default = f
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = i(6),
                o = n.__importDefault(i(7)),
                a = n.__importDefault(i(9)),
                s = n.__importDefault(i(10)),
                u = n.__importDefault(i(11)),
                f = n.__importDefault(i(12)),
                l = i(8),
                _ = 1024,
                c = function() {
                    function t() {
                        this.dirtyEntities = new ArrayBuffer(_), this.entityCommands = new ArrayBuffer(_), this.cullingResult = new ArrayBuffer(_)
                    }
                    return t.prototype.createEntity = function(t, e) {
                        if (e && e > 0) {
                            var i = 0;
                            return i = t === r.enumEntityType.Entity3D ? 4 * r.ENTITY3D_SIZE : 4 * r.ENTITY2D_SIZE, new f.default(i, e)
                        }
                        return new u.default(t)
                    }, t.prototype.createComponent = function(t, e, i) {
                        if (t === r.enumComponentType.Cullable && e && e > 0) {
                            var n = 4 * r.CULLABLECOMPONENT_SIZE;
                            return new f.default(n, e)
                        }
                        return new o.default(t, e, i)
                    }, t.prototype.createDataModel = function(t, e) {
                        return new s.default(t, e)
                    }, t.prototype.createDataBuffer = function(t) {
                        return new a.default(t)
                    }, t.prototype.createAnimatorControllerStateModel = function(t) {
                        return {
                            id: l.requestAccelerateObjectID(),
                            buffer: new ArrayBuffer(5 * t * 4 + 12)
                        }
                    }, t.prototype.refreshWorldTransform = function() {}, t.prototype.frustumCulling = function(t, e, i, n, r, o, a, s, u, f, l, _, c, d) {
                        return {
                            hash: 0,
                            objects: new ArrayBuffer(0),
                            distances: new ArrayBuffer(0)
                        }
                    }, t.prototype.orthoCulling = function(t, e, i, n, r, o, a, s, u, f, l, _, c, d, h, p) {
                        return {
                            hash: 0,
                            objects: new ArrayBuffer(0),
                            distances: new ArrayBuffer(0)
                        }
                    }, t.prototype.addDirtyEntity = function() {}, t.prototype.frameStart = function() {}, t
                }();
            e.default = c
        }, function(t, e, i) {
            "use strict";
            var n;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.CULLABLECOMPONENT_SIZE = e.CULLABLECOMPONENT_OFFSET = e.ENTITY3D_SIZE = e.ENTITY3D_OFFSET = e.ENTITY2D_SIZE = e.ENTITY2D_OFFSET = e.POOLINDEX_AND = e.POOLID_AND = e.componentType2SharedBufferSize = e.enumEntityType = e.enumEntityCommandType = e.enumModelType = e.enumComponentType = void 0,
                function(t) {
                    t[t.Undefined = 0] = "Undefined", t[t.Cullable = 1] = "Cullable", t[t.Animator = 2] = "Animator", t[t.SkinnedSkeleton = 3] = "SkinnedSkeleton"
                }(n = e.enumComponentType || (e.enumComponentType = {})),
                function(t) {
                    t[t.Undefined = 0] = "Undefined", t[t.AnimationClipModel = 1] = "AnimationClipModel", t[t.SkeletonBoneInverseModel = 2] = "SkeletonBoneInverseModel"
                }(e.enumModelType || (e.enumModelType = {})),
                function(t) {
                    t[t.SetRootEntity = 1] = "SetRootEntity", t[t.AddChild = 2] = "AddChild", t[t.AddChildAtIndex = 3] = "AddChildAtIndex", t[t.RemoveFromParent = 4] = "RemoveFromParent", t[t.DisperseSubTree = 5] = "DisperseSubTree", t[t.BindToBone = 6] = "BindToBone", t[t.BindToBones = 7] = "BindToBones", t[t.UnBindFromBone = 8] = "UnBindFromBone", t[t.UnBindFromBones = 9] = "UnBindFromBones", t[t.EntityCommandActive = 10] = "EntityCommandActive", t[t.EntityCommandInActive = 11] = "EntityCommandInActive"
                }(e.enumEntityCommandType || (e.enumEntityCommandType = {})),
                function(t) {
                    t[t.Entity2D = 0] = "Entity2D", t[t.Entity3D = 1] = "Entity3D"
                }(e.enumEntityType || (e.enumEntityType = {})), e.componentType2SharedBufferSize = {}, e.componentType2SharedBufferSize[n.Cullable] = 24, e.componentType2SharedBufferSize[n.Animator] = 4, e.componentType2SharedBufferSize[n.SkinnedSkeleton] = 72, e.POOLID_AND = 4294963200, e.POOLINDEX_AND = 4095, e.ENTITY2D_OFFSET = {}, e.ENTITY2D_OFFSET.OFFSET_ROTATION = 0, e.ENTITY2D_OFFSET.OFFSET_POSITION = 1, e.ENTITY2D_OFFSET.OFFSET_SCALE = 3, e.ENTITY2D_OFFSET.OFFSET_WORLDMATRIX = 5, e.ENTITY2D_SIZE = 14, e.ENTITY3D_OFFSET = {}, e.ENTITY3D_OFFSET.DF_ROTATIONTYPE = 1, e.ENTITY3D_OFFSET.OFFSET_ROTATIONTYPE = 0, e.ENTITY3D_OFFSET.OFFSET_ROTATION = 1, e.ENTITY3D_OFFSET.OFFSET_POSITION = 5, e.ENTITY3D_OFFSET.OFFSET_SCALE = 8, e.ENTITY3D_OFFSET.OFFSET_WORLDMATRIX = 11, e.ENTITY3D_SIZE = 27, e.CULLABLECOMPONENT_OFFSET = {}, e.CULLABLECOMPONENT_OFFSET.DF_ACTIVE = 1, e.CULLABLECOMPONENT_OFFSET.OFFSET_ACTIVE = 0, e.CULLABLECOMPONENT_OFFSET.OFFSET_CULLMASK = 1, e.CULLABLECOMPONENT_OFFSET.OFFSET_BOUDINGBALL_CENTER = 2, e.CULLABLECOMPONENT_OFFSET.OFFSET_BOUDINGBALL_RADIUS = 5, e.CULLABLECOMPONENT_OFFSET.OFFSET_ENTITYID = 6, e.CULLABLECOMPONENT_SIZE = 7
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(6),
                r = i(8),
                o = function(t, e, i) {
                    switch (this.size = 0, this.id = r.requestAccelerateObjectID(), t) {
                        case n.enumComponentType.Cullable:
                            this.size = n.componentType2SharedBufferSize[t];
                            break;
                        case n.enumComponentType.Animator:
                            this.size = n.componentType2SharedBufferSize[t] * e * i;
                            break;
                        case n.enumComponentType.SkinnedSkeleton:
                            this.size = n.componentType2SharedBufferSize[t] * e
                    }
                    this.buffer = new ArrayBuffer(this.size)
                };
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.applyMixins = e.requestAcceleratePoolID = e.requestAccelerateObjectID = void 0;
            var n = 0;
            e.requestAccelerateObjectID = function() {
                return n++
            };
            var r = 4096;
            e.requestAcceleratePoolID = function() {
                var t = r;
                return r += 4096, t
            }, e.applyMixins = function(t, e) {
                e.forEach((function(e) {
                    Object.getOwnPropertyNames(e.prototype).forEach((function(i) {
                        Object.defineProperty(t.prototype, i, Object.getOwnPropertyDescriptor(e.prototype, i))
                    }))
                }))
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t) {};
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t, e) {};
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(6),
                r = i(8),
                o = function(t) {
                    this.id = r.requestAccelerateObjectID(), t === n.enumEntityType.Entity3D ? this.size = 108 : this.size = 56, this.buffer = new ArrayBuffer(this.size)
                };
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(8),
                r = function(t, e) {
                    this.id = n.requestAcceleratePoolID(), this.size = t * e, this.buffer = new ArrayBuffer(this.size)
                };
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.NativeValueNative = void 0;
            var n = !1;
            "undefined" != typeof __wxConfig && __wxConfig.jitMode && (n = !0);
            var r = function(t, e) {
                n ? (this.nativeBuffer = new Float32Array(e / 4), this.data = this.nativeBuffer.buffer) : (this.nativeBuffer = t.createNativeBuffer(e), this.data = this.nativeBuffer.data), this._f32View = new Float32Array(this.data)
            };
            e.NativeValueNative = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(15)),
                o = n.__importDefault(i(16)),
                a = i(25),
                s = n.__importDefault(i(26)),
                u = i(17),
                f = i(27),
                l = i(23),
                _ = i(28),
                c = i(29),
                d = function() {
                    function t(t) {
                        this._decoder = new s.default;
                        var e = new o.default(t);
                        this._executor = e, this._decoder._setCommandExecutor(e), this._gfx = t
                    }
                    return t.prototype.createCommandBuffer = function(t) {
                        return new r.default(this)
                    }, t.prototype.createRect = function(t, e, i, n) {
                        return new a.RectNative(t, e, i, n)
                    }, t.prototype.createRenderDraw = function() {
                        return new u.RenderDrawNative
                    }, t.prototype.createVertexLayout = function(t) {
                        var e = JSON.parse(t);
                        return new l.VertexLayoutNative(e, this._gfx)
                    }, t.prototype.createView = function(t, e, i, n) {
                        return new f.RenderViewNative(t, e, i, n)
                    }, t.prototype._executeCommandBuffer = function(t) {
                        this._decoder.decodeAndExecCommandBuffer(t), this._executor.endFrame()
                    }, t.prototype.executeCommandBuffer = function(t) {}, t.prototype.createBatchableVertexBuffer = function(t, e) {
                        return new _.BatchableVertexBufferNative(t, e)
                    }, t.prototype.createBatchableIndexBuffer = function(t) {
                        return new c.BatchableIndexBufferNative(t)
                    }, t
                }();
            e.default = d
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(t, e) {
                    this._array = [], this._renderer = t
                }
                return t.prototype.extend = function(e) {
                    return new t(this._renderer)
                }, t.prototype.putRenderDraw = function(t) {
                    this._array.push(t)
                }, t.prototype.batchPutRenderDraw = function(t) {
                    this._array = this._array.concat(t)
                }, t.prototype.putSubCommandBuffer = function(t) {
                    this._array.push(t)
                }, t.prototype.reset = function() {
                    this._array.length = 0
                }, t.prototype.execute = function() {
                    this._renderer._executeCommandBuffer(this)
                }, t
            }();
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(17),
                o = i(23),
                a = function() {
                    function t(t) {
                        this.renderDraw2Bindings = new WeakMap, this.pipelineMap = {}, this._renderDrawList = [], this._batchedRenderDrawList = [], this.gfx = t
                    }
                    return t.prototype.drawRenderDraw = function(t) {
                        this._renderDrawList.push(t)
                    }, t.prototype.endFrame = function() {
                        for (var t = 0, e = o.createdVertexLayout; t < e.length; t++) {
                            e[t]._getBatcher().reset()
                        }
                        for (var i = 0, n = this._renderDrawList; i < n.length; i++) {
                            var r = n[i];
                            this.doRenderDrawBatch(r)
                        }
                        this._flushRenderDrawBatch();
                        for (var a = 0, s = o.createdVertexLayout; a < s.length; a++) {
                            s[a]._getBatcher().uploadBuffer()
                        }
                        for (var u = 0, f = this._batchedRenderDrawList; u < f.length; u++) {
                            r = f[u];
                            this.doDrawRenderDraw(r)
                        }
                        this.lastView && (this.gfx.endPass(), this.lastView = null), this.gfx.commit(), this._renderDrawList.length = 0, this._batchedRenderDrawList.length = 0
                    }, t.prototype.doRenderDrawBatch = function(t) {
                        if (!t.batchable) return this._flushRenderDrawBatch(), void this._batchedRenderDrawList.push(t);
                        this._startBatchedRenderDraw && !this._compareMaterial(this._startBatchedRenderDraw, t) && this._flushRenderDrawBatch();
                        var e = t.vertexBuffers[0],
                            i = t.indexBuffer;
                        if (t.renderDataDirty) {
                            e._cloneBuffer();
                            for (var n = e._positionViews, r = e._worldPositionViews, o = t._worldTransformMatrix, a = 0; a < n.length; a++) {
                                var s = n[a],
                                    u = r[a];
                                o.transformPoint(s, u)
                            }
                        }
                        var f = t.vertexLayout._getBatcher(),
                            l = f._ibCount;
                        this._startBatchedRenderDraw || (this._startBatchedRenderDraw = t, this._vertexBatcher = f, this._startIBCount = l), f.batchMesh(e, i, t.baseElement, t.numElements)
                    }, t.prototype._flushRenderDrawBatch = function() {
                        if (this._startBatchedRenderDraw) {
                            var t = new n.RenderDrawNative;
                            Object.assign(t, this._startBatchedRenderDraw), t.indexBuffer = this._vertexBatcher._indexBuffer, t.vertexBuffers = [this._vertexBatcher._vertexBuffer], t.batchable = !1, t.baseElement = this._startIBCount, t.numElements = this._vertexBatcher._ibCount - this._startIBCount, this._batchedRenderDrawList.push(t), this._startBatchedRenderDraw = null, this._vertexBatcher = null
                        }
                    }, t.prototype._compareMaterial = function(t, e) {
                        var i = t.raster === e.raster && t.rgba === e.rgba && t.shader === e.shader && t.vertexLayout === e.vertexLayout && t.view === e.view && t.stencilDepth === e.stencilDepth && t.stencilOpTest === e.stencilOpTest && t.blend === e.blend,
                            n = t.images.length,
                            r = t.nativeValues.length;
                        if (!(i = i && n == e.images.length && r == e.nativeValues.length)) return i;
                        for (var o = 0; o < n; o++) i = i && t.images[o] === e.images[o];
                        for (o = 0; o < r; o++) i = i && t.nativeValues[o] === e.nativeValues[o];
                        return i
                    }, t.prototype.doDrawRenderDraw = function(t) {
                        var e = t.view;
                        this.lastView !== e && (this.lastView && this.gfx.endPass(), e._isDefaultView ? "undefined" == typeof __IDE ? this.gfx.beginDefaultPass(e._passAction, e._viewport._width, e._viewport._height) : "undefined" != typeof __gameContextWindow && void 0 !== __gameContextWindow.__IDE && void 0 !== __gameContextWindow.__IDE.realCanvas ? this.gfx.beginDefaultPass(e._passAction, __gameContextWindow.__IDE.realCanvas.width, __gameContextWindow.__IDE.realCanvas.height) : this.gfx.beginDefaultPass(e._passAction, e._viewport._width, e._viewport._height) : this.gfx.beginPass(e._pass, e._passAction), this.gfx.applyViewport(e._viewport._x, e._viewport._y, e._viewport._width, e._viewport._height, !1), this.gfx.applyScissorRect(e._scissor._x, e._scissor._y, e._scissor._width, e._scissor._height, !1), this.lastView = t.view), this.gfx.applyPipeline(this.getPipeline(t)), this.gfx.applyBindings(this.getBindings(t));
                        for (var i = 0; i < t.nativeValues.length; i++) {
                            var n = t.nativeValues[i].nativeBuffer;
                            this.gfx.applyUniforms(r.EnumShaderStage.VS, i, n)
                        }
                        this.gfx.draw(t.baseElement, t.numElements, 1)
                    }, t.prototype.getBindings = function(t) {
                        return this.gfx.makeBindings({
                            vertex_buffers: t.vertexBuffers,
                            index_buffer: t.indexBuffer,
                            vs_images: t.images
                        })
                    }, t.prototype.getPipeline = function(t) {
                        var e = t._hashForPipeline;
                        if (!this.pipelineMap[e]) {
                            var i = this.gfx.makePipeline({
                                layout: t.vertexLayout._config.layout,
                                shader: t.shader,
                                index_type: t._getIndexType(),
                                primitive_type: t._getPrimitiveType(),
                                depth_stencil: {
                                    stencil_front: {
                                        fail_op: t._getStencilFrontFailOp(),
                                        depth_fail_op: t._getStencilFrontDepthFailOp(),
                                        pass_op: t._getStencilFrontPassOp(),
                                        compare_func: t._getStencilFrontCompareFunc()
                                    },
                                    stencil_back: {
                                        fail_op: t._getStencilBackFailOp(),
                                        depth_fail_op: t._getStencilBackDepthFailOp(),
                                        pass_op: t._getStencilBackPassOp(),
                                        compare_func: t._getStencilBackCompareFunc()
                                    },
                                    depth_compare_func: t._getDepthCompareFunc(),
                                    depth_write_enabled: t._getDepthWriteEnable(),
                                    stencil_enabled: t._getStencilEnable(),
                                    stencil_read_mask: t._getStencilRead(),
                                    stencil_write_mask: t._getStencilWrite(),
                                    stencil_ref: t._getStencilRef()
                                },
                                blend: {
                                    enabled: t._getBlendEnable(),
                                    src_factor_rgb: t._getBlendSrcFactorRGB(),
                                    dst_factor_rgb: t._getBlendDstFactorRGB(),
                                    op_rgb: t._getBlendOpRGB(),
                                    src_factor_alpha: t._getBlendSrcFactorAlpha(),
                                    dst_factor_alpha: t._getBlendDstFactorAlpha(),
                                    op_alpha: t._getBlendOpAlpha(),
                                    color_write_mask: t._getBlendColorMask(),
                                    color_format: t._getColorFormat(),
                                    depth_format: t._getDepthFormat()
                                },
                                rasterizer: {
                                    cull_mode: t._getCullMode(),
                                    face_winding: t._getFaceWinding()
                                }
                            });
                            this.pipelineMap[e] = i
                        }
                        return this.pipelineMap[e]
                    }, t
                }();
            e.default = a
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RenderDrawNative = void 0;
            var n = i(1),
                r = n.__importDefault(i(18)),
                o = n.__importDefault(i(19)),
                a = n.__importDefault(i(21));
            var s = function() {
                function t() {
                    this.blend = 0, this.rgba = 0, this.stencilOpTest = 0, this.stencilDepth = 0, this.raster = 0, this._hashForPipeline = ""
                }
                return t.prototype.applyUpdate = function() {
                    var t = [this.blend, this.rgba, this.stencilDepth, this.stencilOpTest, this.raster, this.vertexLayout._id, this.shader.id];
                    this._hashForPipeline = t.join("_"), this.worldTransform && this.batchable && (this._worldTransformMatrix = new a.default(this.worldTransform._f32View))
                }, t.prototype._getBlendEnable = function() {
                    return !!r.default.WRITE_GET(this.blend, r.default.BLEND_ENABLE_MASK, r.default.BLEND_ENABLE_SHIFT)
                }, t.prototype._getBlendOpAlpha = function() {
                    return r.default.WRITE_GET(this.blend, r.default.BLEND_OP_ALPHA_MASK, r.default.BLEND_OP_ALPHA_SHIFT)
                }, t.prototype._getBlendDstFactorAlpha = function() {
                    return r.default.WRITE_GET(this.blend, r.default.BLEND_DST_FACTOR_ALPHA_MASK, r.default.BLEND_DST_FACTOR_ALPHA_SHIFT)
                }, t.prototype._getBlendSrcFactorAlpha = function() {
                    return r.default.WRITE_GET(this.blend, r.default.BLEND_SRC_FACTOR_ALPHA_MASK, r.default.BLEND_SRC_FACTOR_ALPHA_SHIFT)
                }, t.prototype._getBlendOpRGB = function() {
                    return r.default.WRITE_GET(this.blend, r.default.BLEND_OP_RGB_MASK, r.default.BLEND_OP_RGB_SHIFT)
                }, t.prototype._getBlendDstFactorRGB = function() {
                    return r.default.WRITE_GET(this.blend, r.default.BLEND_DST_FACTOR_RGB_MASK, r.default.BLEND_DST_FACTOR_RGB_SHIFT)
                }, t.prototype._getBlendSrcFactorRGB = function() {
                    return r.default.WRITE_GET(this.blend, r.default.BLEND_SRC_FACTOR_RGB_MASK, r.default.BLEND_SRC_FACTOR_RGB_SHIFT)
                }, t.prototype._getBlendColorMask = function() {
                    return r.default.WRITE_GET(this.blend, r.default.COLOR_WRITE_MASK, r.default.COLOR_WRITE_SHIFT)
                }, t.prototype._getBlendRGBA = function() {
                    var t = o.default.fromHex(this.rgba);
                    return [t.r / 255, t.g / 255, t.b / 255, t.a / 255]
                }, t.prototype._getStencilFrontFailOp = function() {
                    return r.default.WRITE_GET(this.stencilOpTest, r.default.STENCIL_FRONT_FAIL_OP_MASK, r.default.STENCIL_FRONT_FAIL_OP_SHIFT)
                }, t.prototype._getStencilFrontDepthFailOp = function() {
                    return r.default.WRITE_GET(this.stencilOpTest, r.default.STENCIL_FRONT_DEPTH_FAIL_OP_MASK, r.default.STENCIL_FRONT_DEPTH_FAIL_OP_SHIFT)
                }, t.prototype._getStencilFrontPassOp = function() {
                    return r.default.WRITE_GET(this.stencilOpTest, r.default.STENCIL_FRONT_PASS_OP_MASK, r.default.STENCIL_FRONT_PASS_OP_SHIFT)
                }, t.prototype._getStencilFrontCompareFunc = function() {
                    return r.default.WRITE_GET(this.stencilOpTest, r.default.STENCIL_FRONT_COMPARE_FUN_MASK, r.default.STENCIL_FRONT_COMPARE_FUN_SHIFT)
                }, t.prototype._getStencilBackFailOp = function() {
                    return r.default.WRITE_GET(this.stencilOpTest, r.default.STENCIL_BACK_FAIL_OP_MASK, r.default.STENCIL_BACK_FAIL_OP_SHIFT)
                }, t.prototype._getStencilBackDepthFailOp = function() {
                    return r.default.WRITE_GET(this.stencilOpTest, r.default.STENCIL_BACK_DEPTH_FAIL_OP_MASK, r.default.STENCIL_BACK_DEPTH_FAIL_OP_SHIFT)
                }, t.prototype._getStencilBackPassOp = function() {
                    return r.default.WRITE_GET(this.stencilOpTest, r.default.STENCIL_BACK_PASS_OP_MASK, r.default.STENCIL_BACK_PASS_OP_SHIFT)
                }, t.prototype._getStencilBackCompareFunc = function() {
                    return r.default.WRITE_GET(this.stencilOpTest, r.default.STENCIL_BACK_COMPARE_FUN_MASK, r.default.STENCIL_BACK_COMPARE_FUN_SHIFT)
                }, t.prototype._getStencilRef = function() {
                    return r.default.WRITE_GET(this.stencilDepth, r.default.STENCIL_REF_MASK, r.default.STENCIL_REF_SHIFT)
                }, t.prototype._getStencilWrite = function() {
                    return r.default.WRITE_GET(this.stencilDepth, r.default.STENCIL_WRITE_MASK, r.default.STENCIL_WRITE_SHIFT)
                }, t.prototype._getStencilRead = function() {
                    return r.default.WRITE_GET(this.stencilDepth, r.default.STENCIL_READ_MASK, r.default.STENCIL_READ_SHIFT)
                }, t.prototype._getDepthCompareFunc = function() {
                    return r.default.WRITE_GET(this.stencilDepth, r.default.DEPTH_COMPARE_FUNC_MASK, r.default.DEPTH_COMPARE_FUNC_SHIFT)
                }, t.prototype._getDepthWriteEnable = function() {
                    return !!r.default.WRITE_GET(this.stencilDepth, r.default.DEPTH_WRITE_ENABLE_FUNC_MASK, r.default.DEPTH_WRITE_ENABLE_FUNC_SHIFT)
                }, t.prototype._getStencilEnable = function() {
                    return !!r.default.WRITE_GET(this.stencilDepth, r.default.STENCIL_ENABLE_FUNC_MASK, r.default.STENCIL_ENABLE_FUNC_SHIFT)
                }, t.prototype._getColorAttachCount = function() {
                    return r.default.WRITE_GET(this.raster, r.default.COLOR_ATTACHMENT_COUNT_MASK, r.default.COLOR_ATTACHMENT_COUNT_SHIFT)
                }, t.prototype._getColorFormat = function() {
                    return r.default.WRITE_GET(this.raster, r.default.COLOR_FORMAT_MASK, r.default.COLOR_FORMAT_SHIFT)
                }, t.prototype._getDepthFormat = function() {
                    return r.default.WRITE_GET(this.raster, r.default.DEPTH_FORMAT_MASK, r.default.DEPTH_FORMAT_SHIFT)
                }, t.prototype._getCullMode = function() {
                    return r.default.WRITE_GET(this.raster, r.default.CULL_MODE_MASK, r.default.CULL_MODE_SHIFT)
                }, t.prototype._getFaceWinding = function() {
                    return r.default.WRITE_GET(this.raster, r.default.FACE_WINDING_MASK, r.default.FACE_WINDING_SHIFT)
                }, t.prototype._getSampleCount = function() {
                    return r.default.WRITE_GET(this.raster, r.default.SAMPLE_COUNT_MASK, r.default.SAMPLE_COUNT_SHIFT)
                }, t.prototype._getPrimitiveType = function() {
                    return r.default.WRITE_GET(this.raster, r.default.PRIMITIVE_TYPE_MASK, r.default.PRIMITIVE_TYPE_SHIFT)
                }, t.prototype._getIndexType = function() {
                    return r.default.WRITE_GET(this.raster, r.default.INDEX_TYPE_MASK, r.default.INDEX_TYPE_SHIFT)
                }, t.prototype._getAlphaToCoverageEnable = function() {
                    return r.default.WRITE_GET(this.raster, r.default.ALPHA_TO_COVERAGE_ENABLE_MASK, r.default.ALPHA_TO_COVERAGE_ENABLE_SHIFT)
                }, t
            }();
            e.RenderDrawNative = s
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                WRITE_GET: function(t, e, i) {
                    return (t & e) >> i
                },
                WRITE_SET: function(t, e, i) {
                    return t << i & e
                },
                WRITE_SET_SAFE: function(t, e, i) {
                    return t << i >>> 0 & e
                },
                COLOR_WRITE_SHIFT: 0,
                COLOR_WRITE_MASK: 15,
                BLEND_SRC_FACTOR_RGB_SHIFT: 4,
                BLEND_SRC_FACTOR_RGB_MASK: 240,
                BLEND_DST_FACTOR_RGB_SHIFT: 8,
                BLEND_DST_FACTOR_RGB_MASK: 3840,
                BLEND_OP_RGB_SHIFT: 12,
                BLEND_OP_RGB_MASK: 61440,
                BLEND_SRC_FACTOR_ALPHA_SHIFT: 16,
                BLEND_SRC_FACTOR_ALPHA_MASK: 983040,
                BLEND_DST_FACTOR_ALPHA_SHIFT: 20,
                BLEND_DST_FACTOR_ALPHA_MASK: 15728640,
                BLEND_OP_ALPHA_SHIFT: 24,
                BLEND_OP_ALPHA_MASK: 251658240,
                BLEND_ENABLE_SHIFT: 28,
                BLEND_ENABLE_MASK: 4026531840,
                BLEND_RGBA_R_SHIFT: 0,
                BLEND_RGBA_R_MASK: 255,
                BLEND_RGBA_G_SHIFT: 8,
                BLEND_RGBA_G_MASK: 65280,
                BLEND_RGBA_B_SHIFT: 16,
                BLEND_RGBA_B_MASK: 16711680,
                BLEND_RGBA_A_SHIFT: 24,
                BLEND_RGBA_A_MASK: 4278190080,
                STENCIL_FRONT_FAIL_OP_SHIFT: 0,
                STENCIL_FRONT_FAIL_OP_MASK: 15,
                STENCIL_FRONT_DEPTH_FAIL_OP_SHIFT: 4,
                STENCIL_FRONT_DEPTH_FAIL_OP_MASK: 240,
                STENCIL_FRONT_PASS_OP_SHIFT: 8,
                STENCIL_FRONT_PASS_OP_MASK: 3840,
                STENCIL_FRONT_COMPARE_FUN_SHIFT: 12,
                STENCIL_FRONT_COMPARE_FUN_MASK: 61440,
                STENCIL_BACK_FAIL_OP_SHIFT: 16,
                STENCIL_BACK_FAIL_OP_MASK: 983040,
                STENCIL_BACK_DEPTH_FAIL_OP_SHIFT: 20,
                STENCIL_BACK_DEPTH_FAIL_OP_MASK: 15728640,
                STENCIL_BACK_PASS_OP_SHIFT: 24,
                STENCIL_BACK_PASS_OP_MASK: 251658240,
                STENCIL_BACK_COMPARE_FUN_SHIFT: 28,
                STENCIL_BACK_COMPARE_FUN_MASK: 4026531840,
                STENCIL_REF_SHIFT: 0,
                STENCIL_REF_MASK: 255,
                STENCIL_WRITE_SHIFT: 8,
                STENCIL_WRITE_MASK: 65280,
                STENCIL_READ_SHIFT: 16,
                STENCIL_READ_MASK: 16711680,
                DEPTH_COMPARE_FUNC_SHIFT: 24,
                DEPTH_COMPARE_FUNC_MASK: 251658240,
                DEPTH_WRITE_ENABLE_FUNC_SHIFT: 28,
                DEPTH_WRITE_ENABLE_FUNC_MASK: 805306368,
                STENCIL_ENABLE_FUNC_SHIFT: 30,
                STENCIL_ENABLE_FUNC_MASK: 3221225472,
                COLOR_ATTACHMENT_COUNT_SHIFT: 0,
                COLOR_ATTACHMENT_COUNT_MASK: 15,
                COLOR_FORMAT_SHIFT: 4,
                COLOR_FORMAT_MASK: 1008,
                DEPTH_FORMAT_SHIFT: 10,
                DEPTH_FORMAT_MASK: 64512,
                BLEND_PART_MASK: 65535,
                CULL_MODE_SHIFT: 16,
                CULL_MODE_MASK: 196608,
                FACE_WINDING_SHIFT: 18,
                FACE_WINDING_MASK: 786432,
                SAMPLE_COUNT_SHIFT: 20,
                SAMPLE_COUNT_MASK: 15728640,
                PRIMITIVE_TYPE_SHIFT: 24,
                PRIMITIVE_TYPE_MASK: 117440512,
                INDEX_TYPE_SHIFT: 27,
                INDEX_TYPE_MASK: 939524096,
                ALPHA_TO_COVERAGE_ENABLE_SHIFT: 30,
                ALPHA_TO_COVERAGE_ENABLE_MASK: 3221225472,
                RASTER_PART_MASK: 4294901760
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BlendType = void 0;
            var n, r = i(20);
            ! function(t) {
                t[t.Alpha = 0] = "Alpha", t[t.RGB = 1] = "RGB", t[t.RGBA = 2] = "RGBA", t[t.None = 3] = "None"
            }(n = e.BlendType || (e.BlendType = {}));
            var o = function() {
                function t(t, e, i, n) {
                    t = t || 0, e = e || 0, i = i || 0, n = "number" == typeof n ? n : 255, this._value32 = (n << 24 >>> 0) + (i << 16) + (e << 8) + t
                }
                return Object.defineProperty(t.prototype, "r", {
                    get: function() {
                        return 255 & this._value32
                    },
                    set: function(t) {
                        t = r.mathClamp(t, 0, 255), this._value32 = (4294967040 & this._value32 | t) >>> 0
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "g", {
                    get: function() {
                        return (65280 & this._value32) >>> 8
                    },
                    set: function(t) {
                        t = r.mathClamp(t, 0, 255) << 8, this._value32 = (4294902015 & this._value32 | t) >>> 0
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "b", {
                    get: function() {
                        return (16711680 & this._value32) >>> 16
                    },
                    set: function(t) {
                        t = r.mathClamp(t, 0, 255) << 16, this._value32 = (4278255615 & this._value32 | t) >>> 0
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "a", {
                    get: function() {
                        return (4278190080 & this._value32) >>> 24
                    },
                    set: function(t) {
                        t = r.mathClamp(t, 0, 255) << 24, this._value32 = (16777215 & this._value32 | t) >>> 0
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t, "WHITE", {
                    get: function() {
                        return new t(255, 255, 255, 255)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t, "BLACK", {
                    get: function() {
                        return new t(0, 0, 0, 255)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.fromHex = function(e) {
                    var i = new t(0, 0, 0, 0);
                    return i._value32 = e, i
                }, t.fromFloatArray = function(e) {
                    return new t(Math.ceil(255 * (e[0] || 0)), Math.ceil(255 * (e[1] || 0)), Math.ceil(255 * (e[2] || 0)), e.length >= 4 ? Math.ceil(255 * (e[3] || 0)) : 255)
                }, t.prototype.clone = function() {
                    var e = new t(0, 0, 0, 0);
                    return e._value32 = this._value32, e
                }, t.prototype.equals = function(t) {
                    return t._value32 === this._value32
                }, t.prototype.set = function(t) {
                    this._value32 = t._value32
                }, t.prototype.setRGBA = function(t, e, i, n) {
                    this._value32 = (n << 24 >>> 0) + (i << 16) + (e << 8) + t
                }, t.prototype.setValue32 = function(t) {
                    this._value32 = t
                }, t.prototype.toNormalizedArray = function() {
                    return [this.r / 255, this.g / 255, this.b / 255, this.a / 255]
                }, t.prototype.toRGBAString = function() {
                    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a / 255 + ")"
                }, t.prototype.mix = function(e, i) {
                    return i ? (i.r = this.r * e.r / 255, i.g = this.g * e.g / 255, i.b = this.b * e.b / 255, i.a = this.a * e.a / 255, i) : new t(this.r * e.r / 255, this.g * e.g / 255, this.b * e.b / 255, this.a * e.a / 255)
                }, t.blendColorHex = function(t, e, i) {
                    var r;
                    switch (void 0 === i && (i = n.None), i) {
                        case n.Alpha:
                            r = (((4278190080 & t) >>> 24) * ((4278190080 & e) >>> 24) / 255 << 24 >>> 0) + (16777215 & t);
                            break;
                        case n.RGB:
                            r = (4278190080 & t) + (((16711680 & t) >>> 16) * ((16711680 & e) >>> 16) / 255 << 16) + (((65280 & t) >>> 8) * ((65280 & e) >>> 8) / 255 << 8) + (255 & t) * (255 & e) / 255;
                            break;
                        case n.RGBA:
                            r = (((4278190080 & t) >>> 24) * ((4278190080 & e) >>> 24) / 255 << 24 >>> 0) + (((16711680 & t) >>> 16) * ((16711680 & e) >>> 16) / 255 << 16) + (((65280 & t) >>> 8) * ((65280 & e) >>> 8) / 255 << 8) + (255 & t) * (255 & e) / 255;
                            break;
                        case n.None:
                        default:
                            r = t
                    }
                    return r
                }, t.getValue32FromRGBA = function(t, e, i, n) {
                    return (n << 24 >>> 0) + (i << 16) + (e << 8) + t
                }, t.randomMix = function(t, e) {
                    var i = 255 & t,
                        n = (65280 & t) >>> 8,
                        r = (16711680 & t) >>> 16,
                        o = (4278190080 & t) >>> 24,
                        a = 255 & e,
                        s = (65280 & e) >>> 8,
                        u = (16711680 & e) >>> 16,
                        f = (4278190080 & e) >>> 24,
                        l = Math.random(),
                        _ = Math.abs(i - a) * l + Math.min(i, a),
                        c = Math.abs(n - s) * l + Math.min(n, s),
                        d = Math.abs(r - u) * l + Math.min(r, u),
                        h = Math.abs(o - f) * l + Math.min(o, f);
                    return this.getValue32FromRGBA(_, c, d, h)
                }, t.BlendType = n, t
            }();
            e.default = o
        }, function(t, e, i) {
            "use strict";

            function n(t, e) {
                return 0 === t ? 1 === e ? Math.PI / 2 : -Math.PI / 2 : t > 0 ? Math.atan(e / t) : t < 0 ? e > 0 ? Math.atan(e / t) + Math.PI : Math.atan(e / t) - Math.PI : 0
            }

            function r(t) {
                return !(t & t - 1)
            }

            function o(t, e) {
                return Math.abs(t - e) < 1e-6
            }

            function a(t, e, i) {
                return (t = t > e ? t : e) < i ? t : i
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.m4Helper = e.m3Helper = e.quatHelper = e.v4Helper = e.v3Helper = e.v2Helper = e.mathHelper = e.mathClamp = e.nearEqual = e.isPowOf2 = e.arcTanAngle = void 0, e.arcTanAngle = n, e.isPowOf2 = r, e.nearEqual = o, e.mathClamp = a, e.mathHelper = {
                arcTanAngle: n,
                isPowOf2: r,
                nearEqual: o,
                mathClamp: a
            }, e.v2Helper = {
                equal: function(t, e, i, n) {
                    return o(t[e], i[n]) && o(t[e + 1], i[n + 1])
                },
                add: function(t, e, i, n, r, o) {
                    r[o] = t[e] + i[n], r[o + 1] = t[e + 1] + i[n + 1]
                },
                sub: function(t, e, i, n, r, o) {
                    r[o] = t[e] - i[n], r[o + 1] = t[e + 1] - i[n + 1]
                },
                length: function(t, e) {
                    var i = t[e],
                        n = t[e + 1];
                    return Math.sqrt(i * i + n * n)
                },
                normalize: function(t, i, n, r) {
                    var o = e.v2Helper.length(t, i);
                    0 === o ? (n[r] = 0, n[r + 1] = 0) : (n[r] = t[i] / o, n[r + 1] = t[i + 1] / o)
                },
                scale: function(t, e, i, n, r) {
                    n[r] = t[e] * i, n[r + 1] = t[e + 1] * i
                },
                lerp: function(t, e, i, n, r, o, a) {
                    var s = 1 - r;
                    o[a] = t[e] * s + i[n] * r, o[a + 1] = t[e + 1] * s + i[n + 1] * r
                },
                dot: function(t, e, i, n) {
                    return t[e] * i[n] + t[e + 1] * i[n + 1]
                },
                isZero: function(t, e) {
                    return o(t[e], 0) && o(t[e + 1], 0)
                },
                getAngle: function(t, e) {
                    var i = 180 * Math.atan2(t[e + 1], t[e]) / Math.PI;
                    return (360 + Math.round(i)) % 360
                },
                distance: function(t, e, i, n) {
                    var r = t[e] - i[n],
                        o = t[e + 1] - i[n + 1];
                    return Math.sqrt(r * r + o * o)
                },
                copy: function(t, e, i, n) {
                    i[n + 0] = t[e + 0], i[n + 1] = t[e + 1]
                }
            }, e.v3Helper = {
                equal: function(t, e, i, n) {
                    return o(t[e], i[n]) && o(t[e + 1], i[n + 1]) && o(t[e + 2], i[n + 2])
                },
                add: function(t, e, i, n, r, o) {
                    r[o] = t[e] + i[n], r[o + 1] = t[e + 1] + i[n + 1], r[o + 2] = t[e + 2] + i[n + 2]
                },
                sub: function(t, e, i, n, r, o) {
                    r[o] = t[e] - i[n], r[o + 1] = t[e + 1] - i[n + 1], r[o + 2] = t[e + 2] - i[n + 2]
                },
                length: function(t, e) {
                    var i = t[e],
                        n = t[e + 1],
                        r = t[e + 2];
                    return Math.sqrt(i * i + n * n + r * r)
                },
                normalize: function(t, i, n, r) {
                    var o = e.v3Helper.length(t, i);
                    0 === o ? (n[r] = 0, n[r + 1] = 0, n[r + 2] = 0) : (n[r] = t[i] / o, n[r + 1] = t[i + 1] / o, n[r + 2] = t[i + 2] / o)
                },
                scale: function(t, e, i, n, r) {
                    n[r] = t[e] * i, n[r + 1] = t[e + 1] * i, n[r + 2] = t[e + 2] * i
                },
                lerp: function(t, e, i, n, r, o, a) {
                    var s = 1 - r;
                    o[a] = t[e] * s + i[n] * r, o[a + 1] = t[e + 1] * s + i[n + 1] * r, o[a + 2] = t[e + 2] * s + i[n + 2] * r
                },
                dot: function(t, e, i, n) {
                    return t[e] * i[n] + t[e + 1] * i[n + 1] + t[e + 2] * i[n + 2]
                },
                isZero: function(t, e) {
                    return o(t[e], 0) && o(t[e + 1], 0) && o(t[e + 2], 0)
                },
                cross: function(t, e, i, n, r, o) {
                    r[o] = t[e + 1] * i[n + 2] - i[n + 1] * t[e + 2], r[o + 1] = t[e + 2] * i[n] - i[n + 2] * t[e], r[o + 2] = t[e] * i[n + 1] - i[n] * t[e + 1]
                },
                distance: function(t, e, i, n) {
                    var r = t[e] - i[n],
                        o = t[e + 1] - i[n + 1],
                        a = t[e + 2] - i[n + 2];
                    return Math.sqrt(r * r + o * o + a * a)
                },
                angleTo: function(t, i, r, o, a, u) {
                    var f = s;
                    e.v3Helper.sub(r, o, t, i, f, 0), e.v3Helper.normalize(f, 0, f, 0), a[u] = Math.asin(f[1]), a[u + 1] = n(-f[2], -f[0]), a[u + 2] = 0
                },
                copy: function(t, e, i, n) {
                    i[n + 0] = t[e + 0], i[n + 1] = t[e + 1], i[n + 2] = t[e + 2]
                }
            }, e.v4Helper = {
                equal: function(t, e, i, n) {
                    return o(t[e], i[n]) && o(t[e + 1], i[n + 1]) && o(t[e + 2], i[n + 2]) && o(t[e + 3], i[n + 3])
                },
                add: function(t, e, i, n, r, o) {
                    r[o] = t[e] + i[n], r[o + 1] = t[e + 1] + i[n + 1], r[o + 2] = t[e + 2] + i[n + 2], r[o + 3] = t[e + 3] + i[n + 3]
                },
                sub: function(t, e, i, n, r, o) {
                    r[o] = t[e] - i[n], r[o + 1] = t[e + 1] - i[n + 1], r[o + 2] = t[e + 2] - i[n + 2], r[o + 3] = t[e + 3] - i[n + 3]
                },
                scale: function(t, e, i, n, r) {
                    n[r] = t[e] * i, n[r + 1] = t[e + 1] * i, n[r + 2] = t[e + 2] * i, n[r + 3] = t[e + 3] * i
                },
                lerp: function(t, e, i, n, r, o, a) {
                    var s = 1 - r;
                    o[a] = t[e] * s + i[n] * r, o[a + 1] = t[e + 1] * s + i[n + 1] * r, o[a + 2] = t[e + 2] * s + i[n + 2] * r, o[a + 3] = t[e + 3] * s + i[n + 3] * r
                },
                dot: function(t, e, i, n) {
                    return t[e] * i[n] + t[e + 1] * i[n + 1] + t[e + 2] * i[n + 2] + t[e + 3] * i[n + 3]
                },
                isZero: function(t, e) {
                    return o(t[e], 0) && o(t[e + 1], 0) && o(t[e + 2], 0) && o(t[e + 3], 0)
                },
                copy: function(t, e, i, n) {
                    4 === t.length ? i.set(t, n) : (i[n + 0] = t[e + 0], i[n + 1] = t[e + 1], i[n + 2] = t[e + 2], i[n + 3] = t[e + 3])
                }
            }, e.quatHelper = {
                multiply: function(t, e, i, n, r, o) {
                    var a = t[e + 0],
                        s = t[e + 1],
                        u = t[e + 2],
                        f = t[e + 3],
                        l = i[n + 0],
                        _ = i[n + 1],
                        c = i[n + 2],
                        d = i[n + 3],
                        h = s * c - u * _,
                        p = u * l - a * c,
                        y = a * _ - s * l,
                        E = a * l + s * _ + u * c;
                    r[o] = a * d + l * f + h, r[o + 1] = s * d + _ * f + p, r[o + 2] = u * d + c * f + y, r[o + 3] = f * d - E
                },
                invert: function(t, e, i, n) {
                    var r = t[e + 0],
                        o = t[e + 1],
                        a = t[e + 2],
                        s = t[e + 3],
                        u = r * r + o * o + a * a + s * s,
                        f = u ? 1 / u : 0;
                    i[n] = -r * f, i[n + 1] = -o * f, i[n + 2] = -a * f, i[n + 3] = s * f
                },
                toMatrix4: function(t, e, i, n) {
                    var r = t[e],
                        o = t[e + 1],
                        a = t[e + 2],
                        s = t[e + 3],
                        u = r + r,
                        f = o + o,
                        l = a + a,
                        c = r * u,
                        d = o * u,
                        h = o * f,
                        p = a * u,
                        y = a * f,
                        E = a * l,
                        T = s * u,
                        m = s * f,
                        v = s * l;
                    i.set(_, n), i[n] = 1 - h - E, i[n + 1] = d + v, i[n + 2] = p - m, i[n + 4] = d - v, i[n + 5] = 1 - c - E, i[n + 6] = y + T, i[n + 8] = p + m, i[n + 9] = y - T, i[n + 10] = 1 - c - h
                },
                fromMatrix4: function(t, e, i, n) {
                    var r, o, a = t,
                        s = e,
                        u = l,
                        f = a[s + 0] + a[s + 5] + a[s + 10];
                    f > 0 ? (r = Math.sqrt(f + 1), u[3] = .5 * r, r = .5 / r, u[0] = (a[s + 6] - a[s + 9]) * r, u[1] = (a[s + 8] - a[s + 2]) * r, u[2] = (a[s + 1] - a[s + 4]) * r) : a[s + 0] >= a[s + 5] && a[s + 0] >= a[s + 10] ? (o = .5 / (r = Math.sqrt(1 + a[s + 0] - a[s + 5] - a[s + 10])), u[0] = .5 * r, u[1] = (a[s + 1] + a[s + 4]) * o, u[2] = (a[s + 2] + a[s + 8]) * o, u[3] = (a[s + 6] - a[s + 9]) * o) : a[s + 5] > a[s + 10] ? (o = .5 / (r = Math.sqrt(1 + a[s + 5] - a[s + 0] - a[s + 10])), u[0] = (a[s + 4] + a[s + 1]) * o, u[1] = .5 * r, u[2] = (a[s + 9] + a[s + 6]) * o, u[3] = (a[s + 8] - a[s + 2]) * o) : (o = .5 / (r = Math.sqrt(1 + a[s + 10] - a[s + 0] - a[s + 5])), u[0] = (a[s + 8] + a[s + 2]) * o, u[1] = (a[s + 9] + a[s + 6]) * o, u[2] = .5 * r, u[3] = (a[s + 1] - a[s + 4]) * o), i.set(u, n)
                },
                fromEulerAngles: function(t, i, n, r) {
                    e.quatHelper.fromYawRawPitch(t[i + 1], t[i], t[i + 2], n, r)
                },
                fromYawRawPitch: function(t, e, i, n, r) {
                    var o = .5 * i,
                        a = .5 * e,
                        s = .5 * t,
                        u = Math.sin(o),
                        f = Math.cos(o),
                        l = Math.sin(a),
                        _ = Math.cos(a),
                        c = Math.sin(s),
                        d = Math.cos(s);
                    n[r] = d * l * f + c * _ * u, n[r + 1] = c * _ * f - d * l * u, n[r + 2] = d * _ * u - c * l * f, n[r + 3] = d * _ * f + c * l * u
                },
                toEulerAngles: function(t, i, n, r) {
                    e.quatHelper.toYawRawPitch(t, i, n, r)
                },
                toYawRawPitch: function(t, i, r, o) {
                    e.quatHelper.transformDirection(t, i, h, 0, s, 0), e.quatHelper.transformDirection(t, i, p, 0, u, 0);
                    var a = u;
                    e.v3Helper.angleTo(y, 0, s, 0, f, 0);
                    var l = f;
                    l[0] === Math.PI / 2 ? (l[1] = n(a[2], a[0]), l[2] = 0) : l[0] === -Math.PI / 2 ? (l[1] = n(-a[2], -a[0]), l[2] = 0) : (e.m4Helper.yRotation(-l[1], E, 0), e.m4Helper.xRotation(-l[0], T, 0), e.m4Helper.transformPoint(E, 0, u, 0, u, 0), e.m4Helper.transformPoint(T, 0, u, 0, u, 0), l[2] = n(a[1], -a[0])), l[1] <= -Math.PI && (l[1] = Math.PI), l[2] <= -Math.PI && (l[2] = Math.PI), l[1] >= Math.PI && l[2] >= Math.PI && (l[1] = 0, l[2] = 0, l[0] = Math.PI - l[0]), r.set(l, o)
                },
                slerp: function(t, e, i, n, r, o, a) {
                    var s, u, f, l, _, c = t[e + 0],
                        d = t[e + 1],
                        h = t[e + 2],
                        p = t[e + 3],
                        y = i[n + 0],
                        E = i[n + 1],
                        T = i[n + 2],
                        m = i[n + 3];
                    return (u = c * y + d * E + h * T + p * m) < 0 && (u = -u, y = -y, E = -E, T = -T, m = -m), 1 - u > 1e-6 ? (s = Math.acos(u), f = Math.sin(s), l = Math.sin((1 - r) * s) / f, _ = Math.sin(r * s) / f) : (l = 1 - r, _ = r), o[a] = l * c + _ * y, o[a + 1] = l * d + _ * E, o[a + 2] = l * h + _ * T, o[a + 3] = l * p + _ * m, o
                },
                transformDirection: function(t, e, i, n, r, o) {
                    var a = i[n],
                        s = i[n + 1],
                        u = i[n + 2],
                        f = t[e],
                        l = t[e + 1],
                        _ = t[e + 2],
                        c = t[e + 3],
                        d = c * a + l * u - _ * s,
                        h = c * s + _ * a - f * u,
                        p = c * u + f * s - l * a,
                        y = -f * a - l * s - _ * u;
                    r[o] = d * c + y * -f + h * -_ - p * -l, r[o + 1] = h * c + y * -l + p * -f - d * -_, r[o + 2] = p * c + y * -_ + d * -l - h * -f
                }
            }, e.m3Helper = {
                translate: function(t, e, i, n, r, o) {
                    var a = t[e + 0],
                        s = t[e + 1],
                        u = t[e + 2],
                        f = t[e + 3 + 0],
                        l = t[e + 3 + 1],
                        _ = t[e + 3 + 2],
                        c = t[e + 6 + 0],
                        d = t[e + 6 + 1],
                        h = t[e + 6 + 2];
                    9 === t.length ? r.set(t, o) : r === t && o === e || (r[o] = a, r[o + 1] = s, r[o + 2] = u, r[o + 3] = f, r[o + 4] = l, r[o + 5] = _), r[o + 6] = a * i + f * n + c, r[o + 7] = s * i + l * n + d, r[o + 8] = u * i + _ * n + h
                },
                scale: function(t, e, i, n, r, o) {
                    r[o + 0] = i * t[e + 0], r[o + 1] = i * t[e + 1], r[o + 3] = n * t[e + 3], r[o + 4] = n * t[e + 4], r === t && o === e || (r[o + 6] = t[e + 6], r[o + 7] = t[e + 7], r[o + 8] = t[e + 8])
                },
                rotate: function(t, e, i, n, r) {
                    var o = t[e + 0],
                        a = t[e + 1],
                        s = t[e + 2],
                        u = t[e + 3],
                        f = t[e + 4],
                        l = t[e + 5],
                        _ = Math.cos(i),
                        c = Math.sin(i);
                    n[r + 0] = _ * o - c * u, n[r + 1] = _ * a - c * f, n[r + 2] = _ * s - c * l, n[r + 3] = _ * u + c * o, n[r + 4] = _ * f + c * a, n[r + 5] = _ * l + c * s, n === t && r === e || (n[r + 6] = t[e + 6], n[r + 7] = t[e + 7], n[r + 8] = t[e + 8])
                },
                inverse: function(t, e, i, n) {
                    var r = t[e + 0 + 0],
                        o = t[e + 0 + 1],
                        a = t[e + 0 + 2],
                        s = t[e + 3 + 0],
                        u = t[e + 3 + 1],
                        f = t[e + 3 + 2],
                        l = t[e + 6 + 0],
                        _ = t[e + 6 + 1],
                        c = t[e + 6 + 2],
                        d = u * c - f * _,
                        h = o * c - a * _,
                        p = o * f - a * u,
                        y = 1 / (r * d - s * h + l * p);
                    i[n + 0] = y * d, i[n + 1] = -y * h, i[n + 2] = y * p, i[n + 3] = -y * (s * c - f * l), i[n + 4] = y * (r * c - a * l), i[n + 5] = -y * (r * f - a * s), i[n + 6] = y * (s * _ - u * l), i[n + 7] = -y * (r * _ - o * l), i[n + 8] = y * (r * u - o * s)
                },
                multiply: function(t, e, i, n, r, o) {
                    var a = t[e + 0 + 0],
                        s = t[e + 0 + 1],
                        u = t[e + 0 + 2],
                        f = t[e + 3 + 0],
                        l = t[e + 3 + 1],
                        _ = t[e + 3 + 2],
                        c = t[e + 6 + 0],
                        d = t[e + 6 + 1],
                        h = t[e + 6 + 2],
                        p = i[n + 0 + 0],
                        y = i[n + 0 + 1],
                        E = i[n + 0 + 2],
                        T = i[n + 3 + 0],
                        m = i[n + 3 + 1],
                        v = i[n + 3 + 2],
                        A = i[n + 6 + 0],
                        S = i[n + 6 + 1],
                        w = i[n + 6 + 2];
                    r[o + 0] = p * a + y * f + E * c, r[o + 1] = p * s + y * l + E * d, r[o + 2] = p * u + y * _ + E * h, r[o + 3] = T * a + m * f + v * c, r[o + 4] = T * s + m * l + v * d, r[o + 5] = T * u + m * _ + v * h, r[o + 6] = A * a + S * f + w * c, r[o + 7] = A * s + S * l + w * d, r[o + 8] = A * u + S * _ + w * h
                },
                transformPoint: function(t, e, i, n, r, o) {
                    var a = i[n + 0],
                        s = i[n + 1],
                        u = a * t[e + 0 + 2] + s * t[e + 3 + 2] + t[e + 6 + 2];
                    r[o + 0] = (a * t[e + 0 + 0] + s * t[e + 3 + 0] + t[e + 6 + 0]) / u, r[o + 1] = (a * t[e + 0 + 1] + s * t[e + 3 + 1] + t[e + 6 + 1]) / u
                },
                decomposeScale: function(t, e, i, n) {
                    var r = t[e + 0],
                        o = t[e + 1],
                        a = t[e + 3],
                        s = t[e + 4];
                    i[n] = Math.sqrt(r * r + o * o), i[n + 1] = Math.sqrt(a * a + s * s)
                },
                copy: function(t, e, i, n) {
                    if (9 === t.length) i.set(t, n);
                    else
                        for (var r = 0; r < 9; r++) i[n + r] = t[e + r]
                }
            }, e.m4Helper = {
                lookAt: function(t, i, n, r, o, a, l, c) {
                    var d = s,
                        h = u,
                        p = f;
                    e.v3Helper.sub(t, i, n, r, d, 0), e.v3Helper.normalize(d, 0, d, 0), e.v3Helper.cross(o, a, d, 0, h, 0), e.v3Helper.normalize(h, 0, h, 0), e.v3Helper.cross(d, 0, h, 0, p, 0), e.v3Helper.normalize(p, 0, p, 0), l.set(_, c), l[c] = h[0], l[c + 1] = h[1], l[c + 2] = h[2], l[c + 4] = p[0], l[c + 5] = p[1], l[c + 6] = p[2], l[c + 8] = d[0], l[c + 9] = d[1], l[c + 10] = d[2], l[c + 12] = t[i], l[c + 13] = t[i + 1], l[c + 14] = t[i + 2]
                },
                perspective: function(t, e, i, n, r, o) {
                    var a = Math.tan(.5 * Math.PI - .5 * t),
                        s = 1 / (i - n);
                    r.set(c, o), r[o] = a / e, r[o + 5] = a, r[o + 10] = (i + n) * s, r[o + 14] = i * n * s * 2
                },
                orthographic: function(t, e, i, n, r, o, a, s) {
                    a.set(d, s), a[s] = 2 / (e - t), a[s + 5] = 2 / (n - i), a[s + 10] = 2 / (r - o), a[s + 12] = (t + e) / (t - e), a[s + 13] = (i + n) / (i - n), a[s + 14] = (r + o) / (r - o)
                },
                xRotation: function(t, e, i) {
                    var n = Math.cos(t),
                        r = Math.sin(t);
                    e.set(_, i), e[i + 5] = n, e[i + 6] = r, e[i + 9] = -r, e[i + 10] = n
                },
                yRotation: function(t, e, i) {
                    var n = Math.cos(t),
                        r = Math.sin(t);
                    e.set(_, i), e[i] = n, e[i + 2] = -r, e[i + 8] = r, e[i + 10] = n
                },
                zRotation: function(t, e, i) {
                    var n = Math.cos(t),
                        r = Math.sin(t);
                    e.set(_, i), e[i] = n, e[i + 1] = r, e[i + 4] = -r, e[i + 5] = n
                },
                axisRotation: function(t, e, i, n, r) {
                    var o = t[e],
                        a = t[e + 1],
                        s = t[e + 2],
                        u = Math.sqrt(o * o + a * a + s * s),
                        f = (o /= u) * o,
                        l = (a /= u) * a,
                        c = (s /= u) * s,
                        d = Math.cos(i),
                        h = Math.sin(i),
                        p = 1 - d;
                    return n.set(_, r), n[r] = f + (1 - f) * d, n[r + 1] = o * a * p + s * h, n[r + 2] = o * s * p - a * h, n[r + 4] = o * a * p - s * h, n[r + 5] = l + (1 - l) * d, n[r + 6] = a * s * p + o * h, n[r + 8] = o * s * p + a * h, n[r + 9] = a * s * p - o * h, n[r + 10] = c + (1 - c) * d, n
                },
                composeTRS: function(t, e, i, n, r, o, a, s) {
                    16 === i.length ? a.set(i, s) : (a[s + 3] = 0, a[s + 7] = 0, a[s + 11] = 0, a[s + 15] = 0);
                    var u = r[o],
                        f = r[o + 1],
                        l = r[o + 2];
                    a[s + 0] = i[n + 0] * u, a[s + 1] = i[n + 1] * u, a[s + 2] = i[n + 2] * u, a[s + 4] = i[n + 4] * f, a[s + 5] = i[n + 5] * f, a[s + 6] = i[n + 6] * f, a[s + 8] = i[n + 8] * l, a[s + 9] = i[n + 9] * l, a[s + 10] = i[n + 10] * l, a[s + 12] = t[e], a[s + 13] = t[e + 1], a[s + 14] = t[e + 2]
                },
                composeTQS: function(t, i, n, r, o, a, s, u) {
                    e.quatHelper.toMatrix4(n, r, E, 0), e.m4Helper.composeTRS(t, i, E, 0, o, a, s, u)
                },
                translate: function(t, e, i, n, r, o, a) {
                    var s = t[e + 0],
                        u = t[e + 1],
                        f = t[e + 2],
                        l = t[e + 3],
                        _ = t[e + 4 + 0],
                        c = t[e + 4 + 1],
                        d = t[e + 4 + 2],
                        h = t[e + 4 + 3],
                        p = t[e + 8 + 0],
                        y = t[e + 8 + 1],
                        E = t[e + 8 + 2],
                        T = t[e + 8 + 3],
                        m = t[e + 12 + 0],
                        v = t[e + 12 + 1],
                        A = t[e + 12 + 2],
                        S = t[e + 12 + 3];
                    16 === t.length ? o.set(t, a) : o === t && a === e || (o[a] = s, o[a + 1] = u, o[a + 2] = f, o[a + 3] = l, o[a + 4] = _, o[a + 5] = c, o[a + 6] = d, o[a + 7] = h, o[a + 8] = p, o[a + 9] = y, o[a + 10] = E, o[a + 11] = T), o[a + 12] = s * i + _ * n + p * r + m, o[a + 13] = u * i + c * n + y * r + v, o[a + 14] = f * i + d * n + E * r + A, o[a + 15] = l * i + h * n + T * r + S
                },
                scale: function(t, e, i, n, r, o, a) {
                    o[a + 0] = i * t[e + 0 + 0], o[a + 1] = i * t[e + 0 + 1], o[a + 2] = i * t[e + 0 + 2], o[a + 3] = i * t[e + 0 + 3], o[a + 4] = n * t[e + 4 + 0], o[a + 5] = n * t[e + 4 + 1], o[a + 6] = n * t[e + 4 + 2], o[a + 7] = n * t[e + 4 + 3], o[a + 8] = r * t[e + 8 + 0], o[a + 9] = r * t[e + 8 + 1], o[a + 10] = r * t[e + 8 + 2], o[a + 11] = r * t[e + 8 + 3], o === t && a === e || (o[a + 12] = t[e + 12], o[a + 13] = t[e + 13], o[a + 14] = t[e + 14], o[a + 15] = t[e + 15])
                },
                xRotate: function(t, e, i, n, r) {
                    16 === t.length ? n.set(t, r) : n === t && r === e || (n[r + 0] = t[e + 0], n[r + 1] = t[e + 1], n[r + 2] = t[e + 2], n[r + 3] = t[e + 3], n[r + 12] = t[e + 12], n[r + 13] = t[e + 13], n[r + 14] = t[e + 14], n[r + 15] = t[e + 15]);
                    var o = t[e + 4],
                        a = t[e + 5],
                        s = t[e + 6],
                        u = t[e + 7],
                        f = t[e + 8],
                        l = t[e + 9],
                        _ = t[e + 10],
                        c = t[e + 11],
                        d = Math.cos(i),
                        h = Math.sin(i);
                    n[r + 4] = d * o + h * f, n[r + 5] = d * a + h * l, n[r + 6] = d * s + h * _, n[r + 7] = d * u + h * c, n[r + 8] = d * f - h * o, n[r + 9] = d * l - h * a, n[r + 10] = d * _ - h * s, n[r + 11] = d * c - h * u
                },
                yRotate: function(t, e, i, n, r) {
                    16 === t.length ? n.set(t, r) : n === t && r === e || (n[r + 4] = t[e + 4], n[r + 5] = t[e + 5], n[r + 6] = t[e + 6], n[r + 7] = t[e + 7], n[r + 12] = t[e + 12], n[r + 13] = t[e + 13], n[r + 14] = t[e + 14], n[r + 15] = t[e + 15]);
                    var o = t[e + 0 + 0],
                        a = t[e + 0 + 1],
                        s = t[e + 0 + 2],
                        u = t[e + 0 + 3],
                        f = t[e + 8 + 0],
                        l = t[e + 8 + 1],
                        _ = t[e + 8 + 2],
                        c = t[e + 8 + 3],
                        d = Math.cos(i),
                        h = Math.sin(i);
                    n[r + 0] = d * o - h * f, n[r + 1] = d * a - h * l, n[r + 2] = d * s - h * _, n[r + 3] = d * u - h * c, n[r + 8] = d * f + h * o, n[r + 9] = d * l + h * a, n[r + 10] = d * _ + h * s, n[r + 11] = d * c + h * u
                },
                zRotate: function(t, e, i, n, r) {
                    16 === t.length ? n.set(t, r) : n === t && r === e || (n[r + 8] = t[e + 8], n[r + 9] = t[e + 9], n[r + 10] = t[e + 10], n[r + 11] = t[e + 11], n[r + 12] = t[e + 12], n[r + 13] = t[e + 13], n[r + 14] = t[e + 14], n[r + 15] = t[e + 15]);
                    var o = t[e + 0 + 0],
                        a = t[e + 0 + 1],
                        s = t[e + 0 + 2],
                        u = t[e + 0 + 3],
                        f = t[e + 4 + 0],
                        l = t[e + 4 + 1],
                        _ = t[e + 4 + 2],
                        c = t[e + 4 + 3],
                        d = Math.cos(i),
                        h = Math.sin(i);
                    n[r + 0] = d * o + h * f, n[r + 1] = d * a + h * l, n[r + 2] = d * s + h * _, n[r + 3] = d * u + h * c, n[r + 4] = d * f - h * o, n[r + 5] = d * l - h * a, n[r + 6] = d * _ - h * s, n[r + 7] = d * c - h * u
                },
                axisRotate: function(t, e, i, n, r, o, a) {
                    var s = i[n],
                        u = i[n + 1],
                        f = i[n + 2],
                        l = Math.sqrt(s * s + u * u + f * f),
                        _ = (s /= l) * s,
                        c = (u /= l) * u,
                        d = (f /= l) * f,
                        h = Math.cos(r),
                        p = Math.sin(r),
                        y = 1 - h,
                        E = _ + (1 - _) * h,
                        T = s * u * y + f * p,
                        m = s * f * y - u * p,
                        v = s * u * y - f * p,
                        A = c + (1 - c) * h,
                        S = u * f * y + s * p,
                        w = s * f * y + u * p,
                        N = u * f * y - s * p,
                        O = d + (1 - d) * h,
                        C = t[e + 0],
                        I = t[e + 1],
                        R = t[e + 2],
                        M = t[e + 3],
                        b = t[e + 4],
                        g = t[e + 5],
                        F = t[e + 6],
                        P = t[e + 7],
                        D = t[e + 8],
                        L = t[e + 9],
                        B = t[e + 10],
                        x = t[e + 11];
                    o[a + 0] = E * C + T * b + m * D, o[a + 1] = E * I + T * g + m * L, o[a + 2] = E * R + T * F + m * B, o[a + 3] = E * M + T * P + m * x, o[a + 4] = v * C + A * b + S * D, o[a + 5] = v * I + A * g + S * L, o[a + 6] = v * R + A * F + S * B, o[a + 7] = v * M + A * P + S * x, o[a + 8] = w * C + N * b + O * D, o[a + 9] = w * I + N * g + O * L, o[a + 10] = w * R + N * F + O * B, o[a + 11] = w * M + N * P + O * x, o === t && a === e || (o[a + 12] = t[e + 12], o[a + 13] = t[e + 13], o[a + 14] = t[e + 14], o[a + 15] = t[e + 15])
                },
                multiply: function(t, e, i, n, r, o) {
                    var a = i[n + 0 + 0],
                        s = i[n + 0 + 1],
                        u = i[n + 0 + 2],
                        f = i[n + 0 + 3],
                        l = i[n + 4 + 0],
                        _ = i[n + 4 + 1],
                        c = i[n + 4 + 2],
                        d = i[n + 4 + 3],
                        h = i[n + 8 + 0],
                        p = i[n + 8 + 1],
                        y = i[n + 8 + 2],
                        E = i[n + 8 + 3],
                        T = i[n + 12 + 0],
                        m = i[n + 12 + 1],
                        v = i[n + 12 + 2],
                        A = i[n + 12 + 3],
                        S = t[e + 0 + 0],
                        w = t[e + 0 + 1],
                        N = t[e + 0 + 2],
                        O = t[e + 0 + 3],
                        C = t[e + 4 + 0],
                        I = t[e + 4 + 1],
                        R = t[e + 4 + 2],
                        M = t[e + 4 + 3],
                        b = t[e + 8 + 0],
                        g = t[e + 8 + 1],
                        F = t[e + 8 + 2],
                        P = t[e + 8 + 3],
                        D = t[e + 12 + 0],
                        L = t[e + 12 + 1],
                        B = t[e + 12 + 2],
                        x = t[e + 12 + 3];
                    r[o + 0] = a * S + s * C + u * b + f * D, r[o + 1] = a * w + s * I + u * g + f * L, r[o + 2] = a * N + s * R + u * F + f * B, r[o + 3] = a * O + s * M + u * P + f * x, r[o + 4] = l * S + _ * C + c * b + d * D, r[o + 5] = l * w + _ * I + c * g + d * L, r[o + 6] = l * N + _ * R + c * F + d * B, r[o + 7] = l * O + _ * M + c * P + d * x, r[o + 8] = h * S + p * C + y * b + E * D, r[o + 9] = h * w + p * I + y * g + E * L, r[o + 10] = h * N + p * R + y * F + E * B, r[o + 11] = h * O + p * M + y * P + E * x, r[o + 12] = T * S + m * C + v * b + A * D, r[o + 13] = T * w + m * I + v * g + A * L, r[o + 14] = T * N + m * R + v * F + A * B, r[o + 15] = T * O + m * M + v * P + A * x
                },
                transformVector: function(t, e, i, n, r, o) {
                    for (var a = 0, s = 0, u = 0; u < 4; ++u) {
                        s = e + u, r[a = o + u] = 0;
                        for (var f = 0; f < 4; ++f) r[a] += i[n + f] * t[s + 4 * f]
                    }
                },
                transformDirection: function(t, e, i, n, r, o) {
                    var a = i[n + 0],
                        s = i[n + 1],
                        u = i[n + 2];
                    r[o + 0] = a * t[e + 0 + 0] + s * t[e + 4 + 0] + u * t[e + 8 + 0], r[o + 1] = a * t[e + 0 + 1] + s * t[e + 4 + 1] + u * t[e + 8 + 1], r[o + 2] = a * t[e + 0 + 2] + s * t[e + 4 + 2] + u * t[e + 8 + 2]
                },
                transformPoint: function(t, e, i, n, r, o) {
                    var a = i[n + 0],
                        s = i[n + 1],
                        u = i[n + 2],
                        f = a * t[e + 0 + 3] + s * t[e + 4 + 3] + u * t[e + 8 + 3] + t[e + 12 + 3];
                    r[o + 0] = (a * t[e + 0 + 0] + s * t[e + 4 + 0] + u * t[e + 8 + 0] + t[e + 12 + 0]) / f, r[o + 1] = (a * t[e + 0 + 1] + s * t[e + 4 + 1] + u * t[e + 8 + 1] + t[e + 12 + 1]) / f, r[o + 2] = (a * t[e + 0 + 2] + s * t[e + 4 + 2] + u * t[e + 8 + 2] + t[e + 12 + 2]) / f
                },
                decomposeTransRotMatScale: function(t, i, n, r, o, a, l, c) {
                    n[r + 0] = t[i + 12], n[r + 1] = t[i + 13], n[r + 2] = t[i + 14];
                    var d = t[i + 0],
                        h = t[i + 1],
                        p = t[i + 2],
                        y = t[i + 4],
                        E = t[i + 5],
                        T = t[i + 6],
                        m = t[i + 8],
                        v = t[i + 9],
                        A = t[i + 10],
                        S = l[c + 0] = Math.sqrt(d * d + h * h + p * p),
                        w = l[c + 1] = Math.sqrt(y * y + E * E + T * T),
                        N = l[c + 2] = Math.sqrt(m * m + v * v + A * A);
                    if (o.set(_, a), 0 === S || 0 === w || 0 === N) return !1;
                    var O = s;
                    O[0] = m / N, O[1] = v / N, O[2] = A / N;
                    var C = u;
                    C[0] = d / S, C[1] = h / S, C[2] = p / S;
                    var I = f;
                    e.v3Helper.cross(O, 0, C, 0, I, 0);
                    var R = C;
                    return e.v3Helper.cross(I, 0, O, 0, R, 0), o.set(R, a), o.set(I, a + 4), o.set(O, a + 8), o[a + 0] * d + o[a + 1] * h + o[a + 2] * p < 0 && (l[c + 0] = -S), o[a + 4] * y + o[a + 5] * E + o[a + 6] * T < 0 && (l[c + 1] = -w), o[a + 8] * m + o[a + 9] * v + o[a + 10] * A < 0 && (l[c + 2] = -N), !0
                },
                inverse: function(t, e, i, n) {
                    var r = t[e + 0 + 0],
                        o = t[e + 0 + 1],
                        a = t[e + 0 + 2],
                        s = t[e + 0 + 3],
                        u = t[e + 4 + 0],
                        f = t[e + 4 + 1],
                        l = t[e + 4 + 2],
                        _ = t[e + 4 + 3],
                        c = t[e + 8 + 0],
                        d = t[e + 8 + 1],
                        h = t[e + 8 + 2],
                        p = t[e + 8 + 3],
                        y = t[e + 12 + 0],
                        E = t[e + 12 + 1],
                        T = t[e + 12 + 2],
                        m = t[e + 12 + 3],
                        v = h * m,
                        A = T * p,
                        S = l * m,
                        w = T * _,
                        N = l * p,
                        O = h * _,
                        C = a * m,
                        I = T * s,
                        R = a * p,
                        M = h * s,
                        b = a * _,
                        g = l * s,
                        F = c * E,
                        P = y * d,
                        D = u * E,
                        L = y * f,
                        B = u * d,
                        x = c * f,
                        V = r * E,
                        H = y * o,
                        k = r * d,
                        G = c * o,
                        U = r * f,
                        W = u * o,
                        z = v * f + w * d + N * E - (A * f + S * d + O * E),
                        j = A * o + C * d + M * E - (v * o + I * d + R * E),
                        K = S * o + I * f + b * E - (w * o + C * f + g * E),
                        Y = O * o + R * f + g * d - (N * o + M * f + b * d),
                        Z = 1 / (r * z + u * j + c * K + y * Y);
                    i[n + 0] = Z * z, i[n + 1] = Z * j, i[n + 2] = Z * K, i[n + 3] = Z * Y, i[n + 4] = Z * (A * u + S * c + O * y - (v * u + w * c + N * y)), i[n + 5] = Z * (v * r + I * c + R * y - (A * r + C * c + M * y)), i[n + 6] = Z * (w * r + C * u + g * y - (S * r + I * u + b * y)), i[n + 7] = Z * (N * r + M * u + b * c - (O * r + R * u + g * c)), i[n + 8] = Z * (F * _ + L * p + B * m - (P * _ + D * p + x * m)), i[n + 9] = Z * (P * s + V * p + G * m - (F * s + H * p + k * m)), i[n + 10] = Z * (D * s + H * _ + U * m - (L * s + V * _ + W * m)), i[n + 11] = Z * (x * s + k * _ + W * p - (B * s + G * _ + U * p)), i[n + 12] = Z * (D * h + x * T + P * l - (B * T + F * l + L * h)), i[n + 13] = Z * (k * T + F * a + H * h - (V * h + G * T + P * a)), i[n + 14] = Z * (V * l + W * T + L * a - (U * T + D * a + H * l)), i[n + 15] = Z * (U * h + B * a + G * l - (k * l + W * h + x * a))
                },
                transpose: function(t, e, i, n) {
                    i[n + 0] = t[e + 0], i[n + 1] = t[e + 4], i[n + 2] = t[e + 8], i[n + 3] = t[e + 12], i[n + 4] = t[e + 1], i[n + 5] = t[e + 5], i[n + 6] = t[e + 9], i[n + 7] = t[e + 13], i[n + 8] = t[e + 2], i[n + 9] = t[e + 6], i[n + 10] = t[e + 10], i[n + 11] = t[e + 14], i[n + 12] = t[e + 3], i[n + 13] = t[e + 7], i[n + 14] = t[e + 11], i[n + 15] = t[e + 15]
                },
                composeRST3toRST4: function(t, e, i, n) {
                    i.set(_, n), i[n + 0] = t[e + 0], i[n + 1] = t[e + 1], i[n + 4] = t[e + 3], i[n + 5] = t[e + 4], i[n + 10] = 1, i[n + 12] = t[e + 6], i[n + 13] = t[e + 7], i[n + 15] = t[e + 8]
                },
                copy: function(t, e, i, n) {
                    if (16 === t.length) i.set(t, n);
                    else
                        for (var r = 0; r < 16; r++) i[n + r] = t[e + r]
                }
            };
            var s = new Float32Array(3),
                u = new Float32Array(3),
                f = new Float32Array(3),
                l = new Float32Array(4),
                _ = new Float32Array(16);
            _.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 0);
            var c = new Float32Array(16).fill(0);
            c[11] = -1;
            var d = new Float32Array(16).fill(0);
            d[15] = 1;
            var h = new Float32Array([0, 0, -1]),
                p = new Float32Array([0, 1, 0]),
                y = new Float32Array([0, 0, 0]),
                E = new Float32Array(16),
                T = new Float32Array(16)
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1).__importDefault(i(22)),
                r = i(20),
                o = new Float32Array(9);
            o.set([1, 0, 0, 0, 1, 0, 0, 0, 1], 0);
            var a = function() {
                function t(t, e) {
                    this._raw = t || new Float32Array(9), this._offset = e || 0
                }
                return Object.defineProperty(t, "IDENTITY", {
                    get: function() {
                        var e = new t;
                        return e._raw.set(o), e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.createFromArray = function(e) {
                    if (9 !== e.length) throw new Error("create Matrix Error:array length is wrong");
                    return new t(new Float32Array(e))
                }, t.createFromTypedArray = function(e, i) {
                    if (void 0 === i && (i = 0), e.length - i < 9) throw new Error("create Matrix Error:array length is wrong");
                    return new t(e, i)
                }, Object.defineProperty(t.prototype, "raw", {
                    get: function() {
                        return this.__raw || (this.__raw = new Float32Array(this._raw.buffer, 4 * this._offset, 9)), this.__raw
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.toArray = function() {
                    for (var t = new Array(9), e = 0; e < 9; e++) t[e] = this._raw[this._offset + e];
                    return t
                }, t.prototype.translate = function(e, i, n) {
                    return n = n || new t, r.m3Helper.translate(this._raw, this._offset, e, i, n._raw, n._offset), n
                }, t.prototype.scale = function(e, i, n) {
                    return n = n || new t, r.m3Helper.scale(this._raw, this._offset, e, i, n._raw, n._offset), n
                }, t.prototype.rotate = function(e, i) {
                    return i = i || new t, r.m3Helper.rotate(this._raw, this._offset, e, i._raw, i._offset), i
                }, t.prototype.inverse = function(e) {
                    return e = e || new t, r.m3Helper.inverse(this._raw, this._offset, e._raw, e._offset), e
                }, t.prototype.multiply = function(e, i) {
                    return i = i || new t, r.m3Helper.multiply(this._raw, this._offset, e._raw, e._offset, i._raw, i._offset), i
                }, t.prototype.transformPoint = function(t, e) {
                    return e = e || n.default.ZERO, r.m3Helper.transformPoint(this._raw, this._offset, t._raw, t._offset, e._raw, e._offset), e
                }, t
            }();
            e.default = a
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(20),
                r = function() {
                    function t(t, e) {
                        this._raw = t || new Float32Array(2), this._offset = e || 0
                    }
                    return Object.defineProperty(t.prototype, "x", {
                        get: function() {
                            return this._raw[this._offset]
                        },
                        set: function(t) {
                            this._raw[this._offset] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return this._raw[this._offset + 1]
                        },
                        set: function(t) {
                            this._raw[this._offset + 1] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "ZERO", {
                        get: function() {
                            return new t(new Float32Array([0, 0]))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.createFromNumber = function(e, i) {
                        var n = new Float32Array(2);
                        return n[0] = e || 0, n[1] = i || 0, new t(n)
                    }, t.createFromArray = function(e) {
                        return 2 !== e.length && (e = new Array(2).fill(0)), new t(new Float32Array(e))
                    }, t.createFromTypedArray = function(e, i) {
                        return void 0 === i && (i = 0), e.length - i < 2 && (e = new Float32Array(2).fill(0), i = 0), new t(e, i)
                    }, t.prototype.toArray = function() {
                        return [this._raw[this._offset], this._raw[this._offset + 1]]
                    }, t.prototype.equal = function(t) {
                        return n.v2Helper.equal(this._raw, this._offset, t._raw, t._offset)
                    }, t.prototype.set = function(t) {
                        if (2 === t._raw.length) this._raw.set(t._raw, this._offset);
                        else
                            for (var e = 0; e < 2; e++) this._raw[this._offset + e] = t._raw[t._offset + e]
                    }, t.prototype.setValue = function(t, e) {
                        return this._raw[this._offset] = t, this._raw[this._offset + 1] = e, this
                    }, t.prototype.add = function(e, i) {
                        return i = i || new t, n.v2Helper.add(this._raw, this._offset, e._raw, e._offset, o._raw, o._offset), i.set(o), i
                    }, t.prototype.sub = function(e, i) {
                        return i = i || new t, n.v2Helper.sub(this._raw, this._offset, e._raw, e._offset, o._raw, o._offset), i.set(o), i
                    }, t.prototype.normalize = function(e) {
                        return e = e || new t, n.v2Helper.normalize(this._raw, this._offset, o._raw, o._offset), e.set(o), e
                    }, t.prototype.scale = function(e, i) {
                        return i = i || new t, n.v2Helper.scale(this._raw, this._offset, e, o._raw, o._offset), i.set(o), i
                    }, t.prototype.lerp = function(e, i, r) {
                        return r = r || new t, n.v2Helper.lerp(this._raw, this._offset, e._raw, e._offset, i, o._raw, o._offset), r.set(o), r
                    }, t.prototype.dot = function(t) {
                        return n.v2Helper.dot(this._raw, this._offset, t._raw, t._offset)
                    }, t.prototype.length = function() {
                        return n.v2Helper.length(this._raw, this._offset)
                    }, t.prototype.clone = function() {
                        return t.createFromNumber(this._raw[this._offset + 0], this._raw[this._offset + 1])
                    }, t.prototype.isZero = function() {
                        return n.v2Helper.isZero(this._raw, this._offset)
                    }, t.prototype.getAngle = function() {
                        return n.v2Helper.getAngle(this._raw, this._offset)
                    }, t
                }();
            e.default = r;
            var o = new r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.VertexLayoutNative = e.createdVertexLayout = void 0;
            var n = i(1),
                r = i(2),
                o = n.__importDefault(i(24)),
                a = 0;
            var s = {};
            s[r.EnumVertexFormat.BYTE4] = 4, s[r.EnumVertexFormat.BYTE4N] = 4, s[r.EnumVertexFormat.FLOAT] = 4, s[r.EnumVertexFormat.FLOAT2] = 8, s[r.EnumVertexFormat.FLOAT3] = 12, s[r.EnumVertexFormat.FLOAT4] = 16, s[r.EnumVertexFormat.SHORT2] = 4, s[r.EnumVertexFormat.SHORT2N] = 4, s[r.EnumVertexFormat.SHORT4] = 8, s[r.EnumVertexFormat.SHORT4N] = 8, s[r.EnumVertexFormat.UBYTE4] = 4, s[r.EnumVertexFormat.UBYTE4N] = 4, e.createdVertexLayout = [];
            var u = function() {
                function t(t, i) {
                    this._id = a++, this._gfx = i, this._config = t, this._calStride(), this._batcher = new o.default(this._gfx), e.createdVertexLayout.push(this)
                }
                return t.prototype._calStride = function() {
                    for (var t = 0, e = 0, i = this._config.layout.attrs; e < i.length; e++) {
                        var n = i[e];
                        t += s[n.format]
                    }
                    this._stride = t
                }, t.prototype._getBatcher = function() {
                    return this._batcher
                }, t
            }();
            e.VertexLayoutNative = u
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = 2048e3,
                o = 1228800,
                a = function() {
                    function t(t) {
                        this._vbOffset = 0, this._ibCount = 0, this._iBase = 0, this._inited = !1, this._gfx = t
                    }
                    return t.prototype.init = function() {
                        var t = {
                            type: r.EnumBufferType.VERTEXBUFFER,
                            usage: r.EnumUsage.DYNAMIC,
                            size: n
                        };
                        this._vertexBuffer = this._gfx.makeBuffer(t);
                        var e = {
                            type: r.EnumBufferType.INDEXBUFFER,
                            usage: r.EnumUsage.DYNAMIC,
                            size: o
                        };
                        this._indexBuffer = this._gfx.makeBuffer(e), this._vbView = new Uint8Array(n), this._ibView = new Uint16Array(614400), this._inited = !0
                    }, t.prototype.reset = function() {
                        this._vbOffset = 0, this._ibCount = 0, this._iBase = 0
                    }, t.prototype.batchMesh = function(t, e, i, n) {
                        void 0 === n && (n = e._dataView.length), this._inited || this.init(), this._vbView.set(t._finalBufferView, this._vbOffset), this._vbOffset += t._finalBufferView.byteLength;
                        for (var r = this._ibCount, o = e._dataView, a = this._iBase, s = i, u = n; s < u; s++) this._ibView[r + s] = a + o[s];
                        this._iBase += t._count, this._ibCount += n
                    }, t.prototype.uploadBuffer = function() {
                        this._inited && (this._gfx.updateBuffer(this._vertexBuffer, 0, this._vbView, 0, this._vbOffset), this._gfx.updateBuffer(this._indexBuffer, 0, this._ibView, 0, 2 * this._ibCount))
                    }, t
                }();
            e.default = a
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RectNative = void 0;
            var n = function(t, e, i, n) {
                this._x = t, this._y = e, this._width = i, this._height = n
            };
            e.RectNative = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1).__importDefault(i(15)),
                r = function() {
                    function t() {
                        this.bufferStack = []
                    }
                    return t.prototype._setCommandExecutor = function(t) {
                        this._executor = t
                    }, t.prototype.decodeAndExecCommandBuffer = function(t) {
                        this.bufferStack.push(t);
                        for (var e = 0, i = t._array; e < i.length; e++) {
                            var r = i[e];
                            if (r instanceof n.default) {
                                if (this.bufferStack.indexOf(r) > -1) return void console.warn("execute command buffer error: has infinite loop");
                                this.decodeAndExecCommandBuffer(r)
                            } else this.drawRenderDraw(r)
                        }
                        this.bufferStack.pop()
                    }, t.prototype.drawRenderDraw = function(t) {
                        this._executor.drawRenderDraw(t)
                    }, t
                }();
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RenderViewNative = void 0;
            var n = function(t, e, i, n) {
                this._pass = t, this._passAction = e, this._viewport = i, this._scissor = n, this._isDefaultView = 0 === this._pass.id
            };
            e.RenderViewNative = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BatchableVertexBufferNative = void 0;
            var n = i(1).__importDefault(i(22)),
                r = function() {
                    function t(t, e) {
                        if (this._count = t, t) {
                            var i = t * e._stride;
                            this.data = new ArrayBuffer(i), this._finalBuffer = new ArrayBuffer(i), this._dataView = new Uint8Array(this.data), this._finalBufferView = new Uint8Array(this._finalBuffer), this._calPositionOffset(e)
                        } else this.data = null
                    }
                    return t.prototype._cloneBuffer = function() {
                        this._finalBufferView.set(this._dataView)
                    }, t.prototype._calPositionOffset = function(t) {
                        for (var e = 0, i = t._config.layout.attrs; e < i.length; e++) {
                            var r = i[e];
                            "a_position" == r.name && (this._positionOffset = r.offset)
                        }
                        this._positionViews = [], this._worldPositionViews = [];
                        for (var o = 0; o < this._count; o++) {
                            var a = new n.default(new Float32Array(this.data, o * t._stride + this._positionOffset, 2));
                            this._positionViews.push(a);
                            var s = new n.default(new Float32Array(this._finalBuffer, o * t._stride + this._positionOffset, 2));
                            this._worldPositionViews.push(s)
                        }
                    }, t
                }();
            e.BatchableVertexBufferNative = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BatchableIndexBufferNative = void 0;
            var n = function(t, e) {
                this._count = t, this._dataView = new Uint16Array(t), this.data = this._dataView.buffer
            };
            e.BatchableIndexBufferNative = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(5)),
                o = i(31),
                a = i(65),
                s = i(33),
                u = i(6),
                f = n.__importDefault(i(48)),
                l = n.__importDefault(i(49)),
                _ = n.__importDefault(i(76)),
                c = n.__importDefault(i(77)),
                d = function() {
                    function t(t, e) {
                        if (this.config = e, this.isEngineNative = e.isEngineNative, this.isPhysicsNative = e.isPhysicsNative, this.gaVersion = e.gaVersion, this.isEngineNative) {
                            this.worker = t;
                            var i = new o.AccelerateManager(this.worker, e);
                            this.manager = i, this.createEntity3D = i.createEntity3D.bind(i), this.createEntity2D = i.createEntity2D.bind(i), this._createCullableComponent = i.createCullableComponent.bind(i), this._createAnimatorComponent = i.createAnimatorComponent.bind(i), this._createSkinnedSkeletonComponent = i.createSkinnedSkeletonComponent.bind(i), this.createEntity2DGroup = i.createEntity2DGroup.bind(i), this.createEntity3DGroup = i.createEntity3DGroup.bind(i), this.createDataBuffer = i.createDataBuffer.bind(i), this.createDataModel = i.createDataModel.bind(i), this.createAnimationClipBinding = i.createAnimationClipBinding.bind(i), this.createAnimatorController = i.createAnimatorController.bind(i), this.createAnimatorControllerStateModel = i.createAnimatorControllerStateModel.bind(i), this.entityAddChild = i.entityAddChild.bind(i), this.entityAddChildAtIndex = i.entityAddChildAtIndex.bind(i), this.entityRemoveFromParent = i.entityRemoveFromParent.bind(i), this.entityDestroy = i.entityDestroy.bind(i), this.entityClear = i.entityClear.bind(i), this.entitySetActive = i.entitySetActive.bind(i), this.entitySetLocalMatrixDirty = i.entitySetLocalMatrixDirty.bind(i), this.entitiesSetLocalMatrixDirty = i.entitiesSetLocalMatrixDirty.bind(i), this.entitiesSetLocalMatrixDirtyById = i.entitiesSetLocalMatrixDirtyById.bind(i), this.entityGroupAddChild = i.entityGroupAddChild.bind(i), this.entityGroupAddChildAtIndex = i.entityGroupAddChildAtIndex.bind(i), this.entityGroupRemoveFromParent = i.entityGroupRemoveFromParent.bind(i), this.entityGroupDestroy = i.entityGroupDestroy.bind(i), this.entityGroupClear = i.entityGroupClear.bind(i), this.entityGroupSetActive = i.entityGroupSetActive.bind(i), this.entityGroupSetLocalMatrixDirty = i.entityGroupSetLocalMatrixDirty.bind(i), this.entityGroupSetLocalMatrixDirtyAll = i.entityGroupSetLocalMatrixDirtyAll.bind(i), this.componentBindEntity = i.componentBindEntity.bind(i), this.componentUnbindEntity = i.componentUnbindEntity.bind(i), this.setRootEntity = i.setRootEntity.bind(i), this.updateAnimator = i.updateAnimator.bind(i), this.updateAnimators = i.updateAnimators.bind(i), this.updateAnimatorControllers = i.updateAnimatorControllers.bind(i), this.updateSkinningMatrix = i.updateSkinningMatrix.bind(i), this.updateSkinningMatrices = i.updateSkinningMatrices.bind(i), this.bindEntitiesToBones = i.bindEntitiesToBones.bind(i), this.unbindEntitiesFromBones = i.unbindEntitiesFromBones.bind(i), this.bindEntitiesToBonesWithIndex = i.bindEntitiesToBonesWithIndex.bind(i), this.unbindEntitiesFromBonesWithIndex = i.unbindEntitiesFromBonesWithIndex.bind(i), this.refreshWorldTransform = i.refreshWorldTransform.bind(i), this.frameStart = i.frameStart.bind(i), this.cullWithCameraPerspective = i.cullWithCameraPerspective.bind(i), this.cullWithCameraOrthographic = i.cullWithCameraOrthographic.bind(i), this.worker.cullingResult && (this.initCullingArrayBuffer = i.initCullingArrayBuffer.bind(i), this.cullWithCameraPerspectiveByArrayBuffer = i.cullWithCameraPerspectiveV2.bind(i), this.cullWithCameraOrthographicByArrayBuffer = i.cullWithCameraOrthographicV2.bind(i))
                        } else {
                            this.mockWorker = t;
                            var n = this._getMockAccelerateWorker();
                            this.createEntity3D = n.createEntity3D.bind(n), this.createEntity2D = n.createEntity2D.bind(n), this._createCullableComponent = n.createCullableComponent.bind(n), this._createAnimatorComponent = n.createAnimatorComponent.bind(n), this._createSkinnedSkeletonComponent = n.createSkinnedSkeletonComponent.bind(n), this.createEntity2DGroup = n.createEntity2DGroup.bind(n), this.createEntity3DGroup = n.createEntity3DGroup.bind(n), this.createDataModel = n.createDataModel.bind(n), this.createDataBuffer = n.createDataBuffer.bind(n), this.createAnimationClipBinding = n.createAnimationClipBinding.bind(n), this.createAnimatorController = n.createAnimatorController.bind(n), this.createAnimatorControllerStateModel = n.createAnimatorControllerStateModel.bind(n), this.entityAddChild = n.entityAddChild.bind(n), this.entityAddChildAtIndex = n.entityAddChildAtIndex.bind(n), this.entityRemoveFromParent = n.entityRemoveFromParent.bind(n), this.entityDestroy = n.entityDestroy.bind(n), this.entityClear = n.entityClear.bind(n), this.entitySetActive = n.entitySetActive.bind(n), this.entitySetLocalMatrixDirty = n.entitySetLocalMatrixDirty.bind(n), this.entitiesSetLocalMatrixDirty = n.entitiesSetLocalMatrixDirty.bind(n), this.entitiesSetLocalMatrixDirtyById = n.entitiesSetLocalMatrixDirtyById.bind(n), this.entityGroupAddChild = n.entityGroupAddChild.bind(n), this.entityGroupAddChildAtIndex = n.entityGroupAddChildAtIndex.bind(n), this.entityGroupRemoveFromParent = n.entityGroupRemoveFromParent.bind(n), this.entityGroupDestroy = n.entityGroupDestroy.bind(n), this.entityGroupClear = n.entityGroupClear.bind(n), this.entityGroupSetActive = n.entityGroupSetActive.bind(n), this.entityGroupSetLocalMatrixDirty = n.entityGroupSetLocalMatrixDirty.bind(n), this.entityGroupSetLocalMatrixDirtyAll = n.entityGroupSetLocalMatrixDirtyAll.bind(n), this.componentBindEntity = n.componentBindEntity.bind(n), this.componentUnbindEntity = n.componentUnbindEntity.bind(n), this.setRootEntity = n.setRootEntity.bind(n), this.cullWithCameraPerspective = n.cullWithCameraPerspective.bind(n), this.cullWithCameraOrthographic = n.cullWithCameraOrthographic.bind(n), this.updateAnimator = n.updateAnimator.bind(n), this.updateAnimators = n.updateAnimators.bind(n), this.updateAnimatorControllers = n.updateAnimatorControllers.bind(n), this.updateSkinningMatrix = n.updateSkinningMatrix.bind(n), this.updateSkinningMatrices = n.updateSkinningMatrices.bind(n), this.bindEntitiesToBones = n.bindEntitiesToBones.bind(n), this.unbindEntitiesFromBones = n.unbindEntitiesFromBones.bind(n), this.bindEntitiesToBonesWithIndex = n.bindEntitiesToBonesWithIndex.bind(n), this.unbindEntitiesFromBonesWithIndex = n.unbindEntitiesFromBonesWithIndex.bind(n), this.refreshWorldTransform = n.refreshWorldTransform.bind(n), this.frameStart = n.frameStart.bind(n)
                        }
                        if (this.isPhysicsNative) {
                            (r = NativeGlobal.Phys3D) && (this.phys3D = new _.default(r, this, this.isEngineNative))
                        } else {
                            var r = void 0;
                            try {
                                r = c.default().Phys3D
                            } catch (t) {}
                            r && (this.phys3D = new _.default(r, this, this.isEngineNative))
                        }
                    }
                    return t.prototype.createComponent = function(t) {
                        if (!s.componentType2Ctor[t]) return console.warn("can not support dataModel [" + t + "]"), null;
                        switch (t) {
                            case u.enumComponentType.Cullable:
                                return this._createCullableComponent();
                            case u.enumComponentType.Animator:
                                return this._createAnimatorComponent();
                            case u.enumComponentType.SkinnedSkeleton:
                                return this._createSkinnedSkeletonComponent()
                        }
                        return null
                    }, t.prototype.composeRawBufferEntity2D = function(t, e, i) {
                        var n = new ArrayBuffer(4 * f.default.ENTITY2D_SIZE),
                            r = new Float32Array(n);
                        return r[f.default.OFFSET_ROTATION] = t, r[f.default.OFFSET_POSITION] = e[0], r[f.default.OFFSET_POSITION + 1] = e[1], r[f.default.OFFSET_SCALE] = i[0], r[f.default.OFFSET_SCALE + 1] = i[1], r
                    }, t.prototype.composeRawBufferEntity3D = function(t, e, i, n) {
                        var r = new ArrayBuffer(4 * (l.default.ENTITY3D_SIZE - 16)),
                            o = new Uint32Array(r),
                            a = new Float32Array(r);
                        return o[l.default.OFFSET_ROTATIONTYPE] = t ? 0 : 1, a.set(e, l.default.OFFSET_ROTATION), a.set(i, l.default.OFFSET_POSITION), a.set(n, l.default.OFFSET_SCALE), a
                    }, t.prototype.composeRawBufferEntity3DWhole = function(t, e, i, n) {
                        var r = new ArrayBuffer(4 * l.default.ENTITY3D_SIZE),
                            o = new Uint32Array(r),
                            a = new Float32Array(r);
                        return o[l.default.OFFSET_ROTATIONTYPE] = t ? 0 : 1, a.set(e, l.default.OFFSET_ROTATION), a.set(i, l.default.OFFSET_POSITION), a.set(n, l.default.OFFSET_SCALE), a
                    }, t.prototype.composeRawBufferEntity2DGroup = function(t) {
                        for (var e = new ArrayBuffer(4 * f.default.ENTITY2D_SIZE * t.length), i = new Float32Array(e), n = 0; n < t.length; n++) {
                            var r = t[n];
                            i[n * f.default.ENTITY2D_SIZE + f.default.OFFSET_ROTATION] = r.rotation, i[n * f.default.ENTITY2D_SIZE + f.default.OFFSET_POSITION] = r.position[0], i[n * f.default.ENTITY2D_SIZE + f.default.OFFSET_POSITION + 1] = r.position[1], i[n * f.default.ENTITY2D_SIZE + f.default.OFFSET_SCALE] = r.scale[0], i[n * f.default.ENTITY2D_SIZE + f.default.OFFSET_SCALE + 1] = r.scale[1]
                        }
                        return i
                    }, t.prototype.composeRawBufferEntity3DGroup = function(t) {
                        for (var e = new ArrayBuffer(4 * l.default.ENTITY3D_SIZE * t.length), i = new Uint32Array(e), n = new Float32Array(e), r = 0; r < t.length; r++) {
                            var o = t[r];
                            i[l.default.OFFSET_ROTATIONTYPE] = o.useEuler ? 0 : 1, n.set(o.rotation, r * l.default.ENTITY3D_SIZE + l.default.OFFSET_ROTATION), n.set(o.position, r * l.default.ENTITY3D_SIZE + l.default.OFFSET_POSITION), n.set(o.scale, r * l.default.ENTITY3D_SIZE + l.default.OFFSET_SCALE)
                        }
                        return n
                    }, t.prototype.getAccObjNumber = function() {
                        return {
                            entity2D: this.manager.poolManager._entity2DPoolUsedLength
                        }
                    }, t.prototype._getMockAccelerateWorker = function() {
                        return this.logicManager || (this.mockWorker || (this.mockWorker = new r.default), this.logicManager = new a.LogicManager(this.mockWorker, this.config)), this.logicManager
                    }, t
                }();
            e.default = d
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AccelerateManager = void 0;
            var n = i(1),
                r = i(32),
                o = i(33),
                a = n.__importStar(i(35)),
                s = n.__importStar(i(34)),
                u = n.__importDefault(i(37)),
                f = n.__importStar(i(47)),
                l = i(39),
                _ = i(6),
                c = n.__importStar(i(48)),
                d = n.__importStar(i(49)),
                h = i(50),
                p = n.__importDefault(i(51)),
                y = n.__importDefault(i(52)),
                E = n.__importStar(i(53)),
                T = n.__importStar(i(55)),
                m = n.__importDefault(i(56)),
                v = n.__importDefault(i(57)),
                A = n.__importDefault(i(58)),
                S = i(60),
                w = i(62),
                N = n.__importDefault(i(63)),
                O = i(64),
                C = function() {
                    function t(t, e) {
                        this.worker = t, this.config = e, this.poolManager = new A.default(this.worker), this.dirtyEntitiesCommand = new T.default(this.worker.dirtyEntities), this.entityCommand = new E.default(t.entityCommands), this.animatorCommand = new m.default, this.animatorControllerCommand = new N.default, this.skinningMatrixCommand = new v.default, c.staticInitEntity2D(this), d.staticInitEntity3D(this), h.staticInitEntityGroup(this), s.staticInitAnimatorComponent(this), a.staticInitCullableComponent(this), r.staticInitNativeObject(this.worker), S.staticInitAnimatorController(this), O.staticInitAnimationClipBinding(this), w.staticInitAnimatorControllerLayerBlend(this.worker), l.staticInitAccelerateModel(this.worker), f.staticInitAccelerateDataBuffer(this.worker), E.staticInitAccelerateEntityCommand(this.worker), T.staticInitAccelerateDirtiesCommand(this.worker)
                    }
                    return t.prototype.createEntity3D = function() {
                        var t = this.poolManager.getEntity3D(),
                            e = new d.default(t, this.poolManager.entity3DPools);
                        return e.isUsing = !0, this.entitySetActive(e, !0), e
                    }, t.prototype.createEntity2D = function() {
                        var t = this.poolManager.getEntity2D(),
                            e = new c.default(t, this.poolManager.entity2DPools);
                        return e.isUsing = !0, this.entitySetActive(e, !0), e
                    }, t.prototype.createEntity2DGroup = function(t) {
                        var e = this.worker.createEntity(_.enumEntityType.Entity2D, t);
                        return new p.default(e, t)
                    }, t.prototype.createEntity3DGroup = function(t) {
                        var e = this.worker.createEntity(_.enumEntityType.Entity3D, t);
                        return new y.default(e, t)
                    }, t.prototype.createCullableComponent = function() {
                        var t = this.poolManager.getCullableComponent(),
                            e = new a.default(t, this.poolManager.cullableComponentPools);
                        return e.isUsing = !0, e.setActive(!0), e
                    }, t.prototype.createCullableComponentSingle = function() {
                        var t = this.poolManager.getCullableComponentSingle(),
                            e = new a.default(t, this.poolManager.cullableComponentPools);
                        return e.setActive(!0), e
                    }, t.prototype.createAnimatorComponent = function() {
                        return new s.default
                    }, t.prototype.createSkinnedSkeletonComponent = function() {
                        return new u.default
                    }, t.prototype.createDataModel = function(t) {
                        var e = o.dataModel2Ctor[t];
                        return e ? new e : (console.warn("can not support dataModel [" + t + "]"), null)
                    }, t.prototype.createDataBuffer = function(t) {
                        var e = this.worker.createDataBuffer(t);
                        return new f.default(e)
                    }, t.prototype.createAnimationClipBinding = function(t, e, i, n, r, o, a, s) {
                        return new O.AnimationClipBinding(t, e, i, n, r, o, a, s)
                    }, t.prototype.createAnimatorControllerStateModel = function(t) {
                        return new w.AnimatorControllerState(t)
                    }, t.prototype.createAnimatorController = function(t) {
                        return new S.AnimatorController(t)
                    }, t.prototype.entityAddChild = function(t, e) {
                        this.entityCommand.addChild(t.id, e.id)
                    }, t.prototype.entityAddChildAtIndex = function(t, e, i) {
                        this.entityCommand.addChildAtIndex(t.id, e.id, i)
                    }, t.prototype.entityRemoveFromParent = function(t) {
                        this.entityCommand.removeFromParent(t.id)
                    }, t.prototype.entityDestroy = function(t) {
                        this.entityCommand.removeFromParent(t.id), t instanceof c.default ? this.poolManager.disposeEntity2D(t) : t instanceof d.default && this.poolManager.disposeEntity3D(t)
                    }, t.prototype.entityClear = function(t) {
                        this.entityCommand.disperseSubTree(t.id)
                    }, t.prototype.entitySetActive = function(t, e) {
                        e ? this.entityCommand.entityCommandActive(t.id) : this.entityCommand.entityCommandInActive(t.id)
                    }, t.prototype.entitySetLocalMatrixDirty = function(t) {
                        this.dirtyEntitiesCommand.addDirtyEntity(t)
                    }, t.prototype.entitiesSetLocalMatrixDirty = function(t, e) {
                        this.dirtyEntitiesCommand.addDirtyEntities(t, e)
                    }, t.prototype.entitiesSetLocalMatrixDirtyById = function(t, e) {
                        this.dirtyEntitiesCommand.addDirtyEntitiesById(t, e)
                    }, t.prototype.componentBindEntity = function(t, e) {
                        t.bindEntityNative(e)
                    }, t.prototype.componentUnbindEntity = function(t) {
                        this.poolManager.disposeCullableComponent(t)
                    }, t.prototype.setRootEntity = function(t) {
                        this.entityCommand.setRootEntity(t.id)
                    }, t.prototype.entityGroupAddChild = function(t, e, i, n) {
                        this.entityCommand.addChild(t.id, e.id)
                    }, t.prototype.entityGroupAddChildAtIndex = function(t, e, i, n, r) {
                        this.entityCommand.addChildAtIndex(t.id, e.id, i)
                    }, t.prototype.entityGroupRemoveFromParent = function(t, e) {
                        this.entityCommand.removeFromParent(t.id)
                    }, t.prototype.entityGroupDestroy = function(t, e) {
                        this.entityCommand.removeFromParent(t.id), t instanceof c.default ? this.poolManager.disposeEntity2D(t) : t instanceof d.default && this.poolManager.disposeEntity3D(t)
                    }, t.prototype.entityGroupClear = function(t, e) {
                        this.entityCommand.disperseSubTree(t.id)
                    }, t.prototype.entityGroupSetActive = function(t, e, i) {
                        e ? this.entityCommand.entityCommandActive(t.id) : this.entityCommand.entityCommandInActive(t.id)
                    }, t.prototype.entityGroupSetLocalMatrixDirty = function(t, e) {
                        this.dirtyEntitiesCommand.addDirtyEntity(t)
                    }, t.prototype.entityGroupSetLocalMatrixDirtyAll = function(t) {
                        this.dirtyEntitiesCommand.addDirtyEntityGroupAll(t)
                    }, t.prototype.componentBindEntityGroup = function(t, e, i, n) {
                        t.bindEntityNative(e)
                    }, t.prototype.componentUnbindEntityGroup = function(t, e) {
                        t.unbindEntityNative(), this.poolManager.disposeCullableComponent(t)
                    }, t.prototype.setRootEntityGroup = function(t, e) {
                        this.entityCommand.setRootEntity(t.id)
                    }, t.prototype.componentUnbindEntitySingle = function(t) {
                        t.unbindEntityNative(), this.poolManager.disposeCullableComponentSingle(t)
                    }, t.prototype.refreshWorldTransform = function() {
                        this.worker.refreshWorldTransform()
                    }, t.prototype.cullWithCameraPerspective = function(t, e, i, n, r, o, a, s, u, f, l, _, c, d) {
                        var h = this.worker.frustumCulling(t, e, i, n, r, o, a, s, u, f, l, _, c, d);
                        return h ? {
                            hash: h.hash,
                            objects: new Uint32Array(h.objects),
                            distances: new Float32Array(h.distances)
                        } : {
                            hash: 0,
                            objects: [],
                            distances: []
                        }
                    }, t.prototype.cullWithCameraOrthographic = function(t, e, i, n, r, o, a, s, u, f, l, _, c, d, h, p) {
                        var y = this.worker.orthoCulling(t, e, i, n, r, o, a, s, u, f, l, _, c, d, h, p);
                        return y ? {
                            hash: y.hash,
                            objects: new Uint32Array(y.objects),
                            distances: new Float32Array(y.distances)
                        } : {
                            hash: 0,
                            objects: [],
                            distances: []
                        }
                    }, t.prototype.initCullingArrayBuffer = function() {
                        var t = this.worker.cullingResult;
                        return {
                            u32View: new Uint32Array(t),
                            f32View: new Float32Array(t)
                        }
                    }, t.prototype.cullWithCameraPerspectiveV2 = function(t, e, i, n, r, o, a, s, u, f, l, _, c, d) {
                        return !!this.worker.frustumCullingV2(t, e, i, n, r, o, a, s, u, f, l, _, c, d)
                    }, t.prototype.cullWithCameraOrthographicV2 = function(t, e, i, n, r, o, a, s, u, f, l, _, c, d, h, p) {
                        return !!this.worker.orthoCullingV2(t, e, i, n, r, o, a, s, u, f, l, _, c, d, h, p)
                    }, t.prototype.updateAnimator = function(t) {
                        this.worker.updateAnimator(t.id)
                    }, t.prototype.updateAnimators = function(t, e) {
                        this.animatorCommand.updateAnimators(t, e), this.worker.updateAnimators(this.animatorCommand.buffer)
                    }, t.prototype.updateAnimatorControllers = function(t, e) {
                        this.animatorControllerCommand.updateAnimatorControllers(t, e), this.worker.updateAnimatorControllers(this.animatorControllerCommand.buffer)
                    }, t.prototype.updateSkinningMatrix = function(t) {
                        this.worker.updateSkinningMatrix(t.id)
                    }, t.prototype.updateSkinningMatrices = function(t, e) {
                        this.skinningMatrixCommand.updateSkinningMatrices(t, e), this.worker.updateSkinningMatrices(this.skinningMatrixCommand.buffer)
                    }, t.prototype.bindEntitiesToBones = function(t, e) {
                        this.entityCommand.bindToBones(t, e)
                    }, t.prototype.unbindEntitiesFromBones = function(t) {
                        this.entityCommand.unBindFromBones(t)
                    }, t.prototype.bindEntitiesToBonesWithIndex = function(t, e, i, n) {
                        this.entityCommand.bindToBones(t, e)
                    }, t.prototype.unbindEntitiesFromBonesWithIndex = function(t, e) {
                        this.entityCommand.unBindFromBones(t)
                    }, t.prototype.frameStart = function() {
                        this.worker.frameStart()
                    }, t.prototype.setEntityName = function(t, e) {
                        this.worker.setEntityName(t, e)
                    }, t
                }();
            e.AccelerateManager = C
        }, function(t, e, i) {
            "use strict";
            var n;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitNativeObject = void 0, e.staticInitNativeObject = function(t) {
                n = t
            };
            var r = function() {
                function t() {}
                return t.prototype._init = function(t) {
                    this._fastInit(t), this._initU32View()
                }, t.prototype._fastInit = function(t) {
                    this._nativeObj = t;
                    var e = t.id,
                        i = t.buffer,
                        n = i.byteLength;
                    this._id = e, this._bufferLength = n, this._byteOffset = 0, this._buffer = i, this._f32view = new Float32Array(i, 0, n / 4), this.id = this._id
                }, t.prototype._initU32View = function() {
                    this._u32view = new Uint32Array(this._buffer, this._byteOffset, this._bufferLength / 4)
                }, t.prototype._createNativeComponent = function(t, e, i) {
                    var r = n.createComponent(t, e, i);
                    return r.id < 0 || !r.buffer ? null : (this._init(r), r)
                }, t.prototype._initPropertyView = function(t, e) {
                    return new Float32Array(this._buffer, this._byteOffset + 4 * t, e)
                }, t.prototype.setRawBuffer = function(t) {
                    this._f32view.set(t)
                }, t
            }();
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.dataModel2CtorMock = e.dataModel2Ctor = e.componentType2Ctor = void 0;
            var n = i(1),
                r = n.__importDefault(i(34)),
                o = n.__importDefault(i(35)),
                a = n.__importDefault(i(37)),
                s = i(6),
                u = n.__importDefault(i(38)),
                f = n.__importDefault(i(40)),
                l = n.__importDefault(i(41)),
                _ = n.__importDefault(i(43));
            e.componentType2Ctor = {}, e.componentType2Ctor[s.enumComponentType.Undefined] = null, e.componentType2Ctor[s.enumComponentType.Cullable] = o.default, e.componentType2Ctor[s.enumComponentType.SkinnedSkeleton] = a.default, e.componentType2Ctor[s.enumComponentType.Animator] = r.default, e.dataModel2Ctor = {}, e.dataModel2Ctor[s.enumModelType.SkeletonBoneInverseModel] = f.default, e.dataModel2Ctor[s.enumModelType.AnimationClipModel] = u.default, e.dataModel2CtorMock = {}, e.dataModel2CtorMock[s.enumModelType.SkeletonBoneInverseModel] = _.default, e.dataModel2CtorMock[s.enumModelType.AnimationClipModel] = l.default
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitAnimatorComponent = void 0;
            var n = i(1),
                r = n.__importDefault(i(32)),
                o = i(6),
                a = !1,
                s = !1;
            e.staticInitAnimatorComponent = function(t) {
                var e = t.config.gaVersion.versionNumber;
                a = e >= 120, s = e < 120
            };
            var u = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._offsetEntityIds = 0, e._animationClipCount = 0, e._nodeCount = 0, e
                }
                return n.__extends(e, t), e.prototype.bindAnimations = function(t, e, i) {
                    this._animationClipCount = t.length;
                    var n = e.length;
                    for (var r in e) n += e[r].length;
                    if (this._nodeCount = n, this._createNativeComponent(o.enumComponentType.Animator, t.length, n), this._nativeObj) {
                        for (r = 0; r < t.length; r++) this._u32view[3 * r] = t[r].id;
                        this._offsetEntityIds = 3 * t.length;
                        var a, u = 0;
                        for (r = 0; r < e.length; r++) {
                            for (var f = 0; f < e[r].length; f++) null != e[r][f] ? (this._u32view[this._offsetEntityIds + u + f] = e[r][f].id, a || (a = e[r][f].id)) : this._u32view[this._offsetEntityIds + u + f] = 4294967295, this._u32view[this._offsetEntityIds + u + f] = null != e[r][f] ? e[r][f].id : 4294967295;
                            u += e[r].length
                        }
                        s && 4294967295 === this._u32view[this._offsetEntityIds] && (null != i && i.id ? this._u32view[this._offsetEntityIds] = i.id : a && (this._u32view[this._offsetEntityIds] = a))
                    }
                }, e.prototype.setClipParams = function(t, e, i) {
                    if (this._nativeObj) {
                        var n = 3 * t;
                        a ? this._f32view[n + 1] = e : this._u32view[n + 1] = Math.round(e), this._f32view[n + 2] = i
                    }
                }, e.prototype.getAnimationClipCount = function() {
                    return this._animationClipCount
                }, e.prototype.getNodeCount = function() {
                    return this._nodeCount
                }, e.prototype.getAnimationParamater = function(t) {
                    var e = 3 * t;
                    return {
                        animationClipId: this._u32view[e],
                        frameIndex: this._f32view[e + 1],
                        percentage: this._f32view[e + 2]
                    }
                }, e.prototype.getEntity = function(t) {
                    return this._u32view[this._offsetEntityIds + t]
                }, e
            }(r.default);
            e.default = u
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitCullableComponent = void 0;
            var n, r = i(1),
                o = i(6),
                a = r.__importDefault(i(36));
            e.staticInitCullableComponent = function(t) {
                n = t
            };
            var s = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    return n.entityOffset = n._poolIndex * o.CULLABLECOMPONENT_SIZE, n._activeOffset = n.entityOffset + o.CULLABLECOMPONENT_OFFSET.OFFSET_ACTIVE, n._cullmaskOffset = n.entityOffset + o.CULLABLECOMPONENT_OFFSET.OFFSET_CULLMASK, n._boundingBallCenterOffset = n.entityOffset + o.CULLABLECOMPONENT_OFFSET.OFFSET_BOUDINGBALL_CENTER, n._boundingBallRadiusOffset = n.entityOffset + o.CULLABLECOMPONENT_OFFSET.OFFSET_BOUDINGBALL_RADIUS, n._entityIdOffset = n.entityOffset + o.CULLABLECOMPONENT_OFFSET.OFFSET_ENTITYID, n
                }
                return r.__extends(e, t), e.prototype.getActive = function() {
                    return 0 != (this._nativePool._u32view[this._activeOffset] & o.CULLABLECOMPONENT_OFFSET.DF_ACTIVE)
                }, e.prototype.setActive = function(t) {
                    t ? this._nativePool._u32view[this._activeOffset] |= o.CULLABLECOMPONENT_OFFSET.DF_ACTIVE : this._nativePool._u32view[this._activeOffset] &= ~o.CULLABLECOMPONENT_OFFSET.DF_ACTIVE
                }, e.prototype.getCullMask = function() {
                    return this._nativePool._u32view[this._cullmaskOffset]
                }, e.prototype.setCullMask = function(t) {
                    this._nativePool._u32view[this._cullmaskOffset] = t
                }, e.prototype.bindEntityNative = function(t) {
                    this._nativePool._u32view[this._entityIdOffset] = t.id
                }, e.prototype.unbindEntityNative = function() {
                    this._nativePool._u32view[this._entityIdOffset] = 0
                }, e.prototype.getBoundingBallCenter = function() {
                    return this._boundingBallCenter || (this._boundingBallCenter = new Float32Array(this._nativePool._buffer, 4 * this._boundingBallCenterOffset, 3)), this._boundingBallCenter
                }, e.prototype.setBoundingBallCenter = function(t, e) {
                    void 0 === e && (e = 0), t[e] === this._nativePool._f32view[this._boundingBallCenterOffset] && t[e + 1] === this._nativePool._f32view[this._boundingBallCenterOffset + 1] && t[e + 2] === this._nativePool._f32view[this._boundingBallCenterOffset] + 3 || (3 === t.length ? this._nativePool._f32view.set(t, this._boundingBallCenterOffset) : (this._nativePool._f32view[this._boundingBallCenterOffset] = t[e], this._nativePool._f32view[this._boundingBallCenterOffset + 1] = t[e + 1], this._nativePool._f32view[this._boundingBallCenterOffset + 2] = t[e + 2]))
                }, e.prototype.getBoundingBallRadius = function() {
                    return this._nativePool._f32view[this._boundingBallRadiusOffset]
                }, e.prototype.setBoundingBallRadius = function(t) {
                    this._nativePool._f32view[this._boundingBallRadiusOffset] = t
                }, Object.defineProperty(e.prototype, "active", {
                    get: function() {
                        return 0 != (this._nativePool._u32view[this._activeOffset] & o.CULLABLECOMPONENT_OFFSET.DF_ACTIVE)
                    },
                    set: function(t) {
                        t ? this._nativePool._u32view[this._activeOffset] |= o.CULLABLECOMPONENT_OFFSET.DF_ACTIVE : this._nativePool._u32view[this._activeOffset] &= ~o.CULLABLECOMPONENT_OFFSET.DF_ACTIVE
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.bindEntity = function(t) {
                    n.componentBindEntity(this, t)
                }, e.prototype.unbindEntity = function() {
                    n.componentUnbindEntity(this)
                }, e
            }(a.default);
            e.default = s
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(6),
                r = function() {
                    function t(t, e) {
                        this._nativeId = t, this._poolId = t & n.POOLID_AND, this._poolIndex = t & n.POOLINDEX_AND, this._nativePool = e[this._poolId], this.float32View = this._nativePool._f32view, this.uint32View = this._nativePool._u32view, this.id = this._nativeId, this.poolId = this._poolId, this.poolIndex = this._poolIndex
                    }
                    return t.prototype.setRawBuffer = function(t) {
                        this._nativePool._f32view.set(t, this.entityOffset)
                    }, t
                }();
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(32)),
                o = i(6),
                a = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e._boneNum = 0, e
                    }
                    return n.__extends(e, t), e.prototype.setBoneMatrix = function(t, e, i, n) {
                        if (i.length === e && n.length === e) {
                            if (this._boneNum = e, this._createNativeComponent(o.enumComponentType.SkinnedSkeleton, e), this._nativeObj) {
                                for (var r = [], a = 0; a < e; a++) r.push(n[a].id);
                                this._u32view[0] = t.id, this._u32view.set(i, 1);
                                var s = 1 + e;
                                this._u32view.set(r, s), this._boneOffsetMatrices = new Float32Array(this._buffer, this._byteOffset + 4 * (1 + 2 * e), 16 * e)
                            }
                        } else console.warn("setBoneMatrix Error")
                    }, e.prototype.getBoneNum = function() {
                        return this._boneNum
                    }, e.prototype.getBoneOffsetMatrices = function() {
                        return this._boneOffsetMatrices
                    }, e
                }(r.default);
            e.default = a
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(39)),
                o = i(6),
                a = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n.__extends(e, t), e.prototype.setAnimationClip = function(t) {
                        this._createNativeModel(o.enumModelType.AnimationClipModel, t)
                    }, e
                }(r.default);
            e.default = a
        }, function(t, e, i) {
            "use strict";
            var n;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitAccelerateModel = void 0, e.staticInitAccelerateModel = function(t) {
                n = t
            };
            var r = function() {
                function t() {}
                return t.prototype._createNativeModel = function(t, e) {
                    var i = n.createDataModel(t, e);
                    this._nativeObj = i, this._id = i ? i.id : 0, this.id = this._id
                }, t
            }();
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(39)),
                o = i(6),
                a = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n.__extends(e, t), e.prototype.setBoneInverseMatrix = function(t) {
                        var e = new Float32Array(t.length);
                        e.set(t), this._createNativeModel(o.enumModelType.SkeletonBoneInverseModel, e.buffer)
                    }, e
                }(r.default);
            e.default = a
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(42),
                r = function() {
                    function t(t) {
                        this.contentoffset = 0, this.frameRate = 0, this.frameLength = 0, this.totalSampleGroup = 0, this.nodes = {}, this.nodesLength = 0, this._id = t, this.id = this._id
                    }
                    return t.prototype.setAnimationClip = function(t) {
                        this._f32View = new Float32Array(t), this._u32View = new Uint32Array(t), this.contentoffset = this._u32View[0], this.frameRate = this._f32View[1], this.frameLength = this._u32View[2], this.totalSampleGroup = this._u32View[3], this.nodes = {}, this._initAnimationClipNodes(), this.nodesLength = Object.keys(this.nodes).length
                    }, t.prototype._initAnimationClipNodes = function() {
                        if (this._f32View && this._u32View) {
                            this.contentoffset = this._u32View[0], this.frameRate = this._f32View[1], this.frameLength = this._u32View[2], this.totalSampleGroup = this._u32View[3];
                            for (var t = 0, e = 0; e < this.totalSampleGroup; e++) {
                                for (var i = this._u32View[4 + 3 * e + 0], r = this._u32View[4 + 3 * e + 1], o = this._u32View[4 + 3 * e + 2], a = this.nodes[i] || new n.TransformCurve(this.frameRate, this.frameLength, n.CurveMode.Hermite), s = 0; s < o; s++) {
                                    var u = this._u32View[4 + 3 * this.totalSampleGroup + 4 * t + 0],
                                        f = this._f32View[4 + 3 * this.totalSampleGroup + 4 * t + 1],
                                        l = this._f32View[4 + 3 * this.totalSampleGroup + 4 * t + 2],
                                        _ = this._f32View[4 + 3 * this.totalSampleGroup + 4 * t + 3];
                                    u >= this.frameLength && console.error("Index out of range: ", u, this.frameLength), t++, a.addKeyFrame({
                                        index: u,
                                        value: f,
                                        inTangent: l,
                                        outTangent: _
                                    }, r)
                                }
                                this.nodes[i] = a
                            }
                            this.nodesLength = Object.keys(this.nodes).length
                        }
                    }, t.prototype.evaluate = function(t) {
                        for (; t > this.frameLength - 1;) t -= this.frameLength - 1;
                        var e = t,
                            i = Object.create(null);
                        for (var n in this.nodes) i[n] = this.nodes[n].evaluate(e);
                        return i
                    }, t
                }();
            e.default = r
        }, function(t, e, i) {
            "use strict";
            var n;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.TransformCurve = e.TransformCurveRotationMode = e.TransformCurveType = e.Curve = e.CurveMode = void 0,
                function(t) {
                    t[t.Hermite = 0] = "Hermite"
                }(n = e.CurveMode || (e.CurveMode = {}));
            var r, o, a = function() {
                function t(t, e, i, r) {
                    void 0 === r && (r = n.Hermite), this.keyFrames = t, this.fps = e, this.frameCount = i, this.mode = r
                }
                return t.prototype.evaluate = function(t, e) {
                    return void 0 === e && (e = !1), this.mode === n.Hermite ? this._evaluate(t, e) : null
                }, Object.defineProperty(t.prototype, "keyCount", {
                    get: function() {
                        return this.keyFrames.length
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.addKeyFraem = function(t) {
                    var e = this._findKeyIndex(t.index);
                    this.keyFrames.splice(e, 0, t)
                }, t.prototype._evaluate = function(t, e) {
                    if (!this.keyFrames.length) return null;
                    var i = this._findKeyIndex(t);
                    if (this.keyFrames[i] && this.keyFrames[i].index === t) return this.keyFrames[i].value;
                    if (0 === i || i === this.keyFrames.length) {
                        if (e) {
                            if (this.mode === n.Hermite) {
                                var r = this.keyFrames[this.keyFrames.length - 1],
                                    o = this.keyFrames[0],
                                    a = (this.frameCount - 1 - r.index + t) / this.fps;
                                return (2 * (f = (u = (s = (0 === i ? t - r.index + t : t - o.index) / (o.index - r.index)) * s) * s) - 3 * u + 1) * r.value + (f - 2 * u + s) * a * r.outTangent + (-2 * f + 3 * u) * o.value + (f - u) * a * o.inTangent
                            }
                            return null
                        }
                        return this.mode === n.Hermite ? this.keyFrames[0 === i ? 0 : this.keyFrames.length - 1].value : null
                    }
                    if (this.mode === n.Hermite) {
                        r = this.keyFrames[i - 1], a = ((o = this.keyFrames[i]).index - r.index) / this.fps;
                        var s, u, f = (u = (s = (t - r.index) / (o.index - r.index)) * s) * s;
                        return Number.isFinite(r.outTangent) && Number.isFinite(o.inTangent) ? (2 * f - 3 * u + 1) * r.value + (f - 2 * u + s) * a * r.outTangent + (-2 * f + 3 * u) * o.value + (f - u) * a * o.inTangent : r.value
                    }
                    return null
                }, t.prototype._findKeyIndex = function(t) {
                    for (var e = 0, i = this.keyFrames.length, n = Math.floor((e + i) / 2); e < i;) n = Math.floor((e + i) / 2), this.keyFrames[n].index >= t ? i = n : e = n + 1;
                    return e
                }, t
            }();
            e.Curve = a,
                function(t) {
                    t[t.TranslateX = 1] = "TranslateX", t[t.TranslateY = 2] = "TranslateY", t[t.TranslateZ = 3] = "TranslateZ", t[t.ScaleX = 4] = "ScaleX", t[t.ScaleY = 5] = "ScaleY", t[t.ScaleZ = 6] = "ScaleZ", t[t.QuaternionX = 7] = "QuaternionX", t[t.QuaternionY = 8] = "QuaternionY", t[t.QuaternionZ = 9] = "QuaternionZ", t[t.QuaternionW = 10] = "QuaternionW", t[t.EulerX = 11] = "EulerX", t[t.EulerY = 12] = "EulerY", t[t.EulerZ = 13] = "EulerZ"
                }(r = e.TransformCurveType || (e.TransformCurveType = {})),
                function(t) {
                    t[t.None = 0] = "None", t[t.Euler = 1] = "Euler", t[t.Quaternion = 2] = "Quaternion"
                }(o = e.TransformCurveRotationMode || (e.TransformCurveRotationMode = {}));
            var s = function() {
                function t(t, e, i) {
                    void 0 === i && (i = n.Hermite), this.fps = t, this.frameLength = e, this.mode = i, this._rotationMode = o.None, this._translateX = new a([], t, e, i), this._translateY = new a([], t, e, i), this._translateZ = new a([], t, e, i), this._scaleX = new a([], t, e, i), this._scaleY = new a([], t, e, i), this._scaleZ = new a([], t, e, i), this._rotationX = new a([], t, e, i), this._rotationY = new a([], t, e, i), this._rotationZ = new a([], t, e, i), this._rotationW = new a([], t, e, i)
                }
                return Object.defineProperty(t.prototype, "rotationMode", {
                    get: function() {
                        return this._rotationMode
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.addKeyFrame = function(t, e) {
                    switch (e) {
                        case r.TranslateX:
                            this._translateX.addKeyFraem(t);
                            break;
                        case r.TranslateY:
                            this._translateY.addKeyFraem(t);
                            break;
                        case r.TranslateZ:
                            this._translateZ.addKeyFraem(t);
                            break;
                        case r.ScaleX:
                            this._scaleX.addKeyFraem(t);
                            break;
                        case r.ScaleY:
                            this._scaleY.addKeyFraem(t);
                            break;
                        case r.ScaleZ:
                            this._scaleZ.addKeyFraem(t);
                            break;
                        case r.QuaternionX:
                        case r.EulerX:
                            this._rotationX.addKeyFraem(t);
                            break;
                        case r.QuaternionY:
                        case r.EulerY:
                            this._rotationY.addKeyFraem(t);
                            break;
                        case r.QuaternionZ:
                        case r.EulerZ:
                            this._rotationZ.addKeyFraem(t);
                            break;
                        case r.QuaternionW:
                            this._rotationW.addKeyFraem(t)
                    }
                }, t.prototype.evaluate = function(t) {
                    var e = Object.create(null);
                    if (e.tx = this._translateX.evaluate(t), e.ty = this._translateY.evaluate(t), e.tz = this._translateZ.evaluate(t), e.sx = this._scaleX.evaluate(t), e.sy = this._scaleY.evaluate(t), e.sz = this._scaleZ.evaluate(t), e.rx = this._rotationX.evaluate(t), e.ry = this._rotationY.evaluate(t), e.rz = this._rotationZ.evaluate(t), e.rw = this._rotationW.evaluate(t), e.rw)
                        if (null === e.rx || null === e.ry || null === e.rz) e.rx = e.ry = e.rz = e.rw = null, e.use_quaternion = !1;
                        else {
                            var i = Math.sqrt(e.rx * e.rx + e.ry * e.ry + e.rz * e.rz + e.rw * e.rw);
                            e.rx /= i, e.ry /= i, e.rz /= i, e.rw /= i, e.use_quaternion = !0
                        }
                    else e.use_quaternion = !1;
                    return e
                }, t.TransformCurveRotationMode = o, t.TransformCurveType = r, t
            }();
            e.TransformCurve = s
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1).__importDefault(i(44)),
                r = function() {
                    function t(t) {
                        this.boneNum = 0, this.inverseMatrixs = [], this._id = t, this.id = this._id
                    }
                    return t.prototype.setBoneInverseMatrix = function(t) {
                        var e = new Float32Array(t.length);
                        e.set(t);
                        var i = e.buffer;
                        this.inverseMatrixs = [];
                        for (var r = this.boneNum = i.byteLength / 64, o = 0; o < r; o++) this.inverseMatrixs.push(n.default.createFromTypedArray(new Float32Array(i, 64 * o, 16)))
                    }, t
                }();
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = i(20),
                o = n.__importDefault(i(45)),
                a = n.__importDefault(i(46)),
                s = new Float32Array(16);
            s.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 0);
            var u = function() {
                function t(t, e) {
                    this._raw = t || new Float32Array(16), this._offset = e || 0
                }
                return Object.defineProperty(t, "IDENTITY", {
                    get: function() {
                        var e = new t;
                        return e._raw.set(s), e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.lookAt = function(e, i, n, o) {
                    return o = o || new t, r.m4Helper.lookAt(e._raw, e._offset, i._raw, i._offset, n._raw, n._offset, o._raw, o._offset), o
                }, t.perspective = function(e, i, n, o, a) {
                    return a = a || new t, r.m4Helper.perspective(e, i, n, o, a._raw, a._offset), a
                }, t.orthographic = function(e, i, n, o, a, s, u) {
                    return u = u || new t, r.m4Helper.orthographic(e, i, n, o, a, s, u._raw, u._offset), u
                }, t.fromQuaternion = function(e, i) {
                    return i = i || new t, r.quatHelper.toMatrix4(e._raw, e._offset, i._raw, i._offset), i
                }, t.createFromArray = function(e) {
                    if (16 !== e.length) throw new Error("create Matrix Error:array length is wrong");
                    return new t(new Float32Array(e))
                }, t.createFromTypedArray = function(e, i) {
                    if (void 0 === i && (i = 0), e.length - i < 16) throw new Error("create Matrix Error:array length is wrong");
                    return new t(e, i)
                }, t.createRotationX = function(e, i) {
                    return i = i || new t, r.m4Helper.xRotation(e, i._raw, i._offset), i
                }, t.createRotationY = function(e, i) {
                    return i = i || new t, r.m4Helper.yRotation(e, i._raw, i._offset), i
                }, t.createRotationZ = function(e, i) {
                    return i = i || new t, r.m4Helper.zRotation(e, i._raw, i._offset), i
                }, t.createRotationAxis = function(e, i, n) {
                    return n = n || new t, r.m4Helper.axisRotation(e._raw, e._offset, i, n._raw, n._offset), n
                }, t.composeTRS = function(e, i, n, o) {
                    return o = o || new t, r.m4Helper.composeTRS(e._raw, e._offset, i._raw, i._offset, n._raw, n._offset, o._raw, o._offset), o
                }, t.composeTQS = function(e, i, n, r) {
                    return r = t.fromQuaternion(i, r), t.composeTRS(e, r, n, r), r
                }, t.composeFromRST3 = function(e, i) {
                    return i = i || new t, r.m4Helper.composeRST3toRST4(e._raw, e._offset, i._raw, i._offset), i
                }, t.prototype.toArray = function() {
                    for (var t = new Array(16), e = 0; e < 16; e++) t[e] = this._raw[this._offset + e];
                    return t
                }, t.prototype.translate = function(e, i, n, o) {
                    return o = o || new t, r.m4Helper.translate(this._raw, this._offset, e, i, n, o._raw, o._offset), o
                }, t.prototype.scale = function(e, i, n, o) {
                    return o = o || new t, r.m4Helper.scale(this._raw, this._offset, e, i, n, o._raw, o._offset), o
                }, t.prototype.xRotate = function(e, i) {
                    return i = i || new t, r.m4Helper.xRotate(this._raw, this._offset, e, i._raw, i._offset), i
                }, t.prototype.yRotate = function(e, i) {
                    return i = i || new t, r.m4Helper.yRotate(this._raw, this._offset, e, i._raw, i._offset), i
                }, t.prototype.zRotate = function(e, i) {
                    return i = i || new t, r.m4Helper.zRotate(this._raw, this._offset, e, i._raw, i._offset), i
                }, t.prototype.axisRotate = function(e, i, n) {
                    return n = n || new t, r.m4Helper.axisRotate(this._raw, this._offset, e._raw, e._offset, i, n._raw, n._offset), n
                }, t.prototype.rotateByQuaternion = function(e, i) {
                    i = i || new t;
                    var n = f;
                    return t.fromQuaternion(e, n), this.multiply(n, i), i
                }, t.prototype.inverse = function(e) {
                    return e = e || new t, r.m4Helper.inverse(this._raw, this._offset, e._raw, e._offset), e
                }, t.prototype.transpose = function(e) {
                    return e = e || new t, r.m4Helper.transpose(this._raw, this._offset, e._raw, e._offset), e
                }, t.prototype.multiply = function(e, i) {
                    return i = i || new t, r.m4Helper.multiply(this._raw, this._offset, e._raw, e._offset, i._raw, i._offset), i
                }, t.prototype.transformVector = function(t, e) {
                    return e = e || new a.default, r.m4Helper.transformVector(this._raw, this._offset, t._raw, t._offset, e._raw, e._offset), e
                }, t.prototype.transformDirection = function(t, e) {
                    return e = e || o.default.ZERO, r.m4Helper.transformDirection(this._raw, this._offset, t._raw, t._offset, e._raw, e._offset), e
                }, t.prototype.transformPoint = function(t, e) {
                    return e = e || o.default.ZERO, r.m4Helper.transformPoint(this._raw, this._offset, t._raw, t._offset, e._raw, e._offset), e
                }, t.prototype.set = function(t) {
                    return r.m4Helper.copy(t._raw, t._offset, this._raw, this._offset), this
                }, t.prototype.clone = function() {
                    var e = new t;
                    return r.m4Helper.copy(this._raw, this._offset, e._raw, e._offset), e
                }, t.prototype.decomposeTransRotMatScale = function(t, e, i) {
                    return r.m4Helper.decomposeTransRotMatScale(this._raw, this._offset, t._raw, t._offset, e._raw, e._offset, i._raw, i._offset)
                }, t.prototype.setValue = function(t, e, i) {
                    return this._raw[this._offset + 4 * e + i] = t, this
                }, t.prototype.getValue = function(t, e) {
                    return this._raw[this._offset + 4 * t + e]
                }, t.prototype.setColumn = function(t, e) {
                    var i = this._offset + 4 * e;
                    return this._raw[i] = t.x, this._raw[i + 1] = t.y, this._raw[i + 2] = t.z, this._raw[i + 3] = t.w, this
                }, t.prototype.getColumn = function(t, e) {
                    e = e || new a.default;
                    var i = this._offset + 4 * t;
                    return e.setValue(this._raw[i], this._raw[i + 1], this._raw[i + 2], this._raw[i + 3]), e
                }, t.prototype.setRow = function(t, e) {
                    var i = this._offset + e;
                    return this._raw[i] = t.x, this._raw[i + 4] = t.y, this._raw[i + 8] = t.z, this._raw[i + 12] = t.w, this
                }, t.prototype.getRow = function(t, e) {
                    e = e || new a.default;
                    var i = this._offset + t;
                    return e.setValue(this._raw[i], this._raw[i + 4], this._raw[i + 8], this._raw[i + 12]), e
                }, t
            }();
            e.default = u;
            var f = new u
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(20),
                r = function() {
                    function t(t, e) {
                        this._raw = t || new Float32Array(3), this._offset = e || 0
                    }
                    return Object.defineProperty(t.prototype, "x", {
                        get: function() {
                            return this._raw[this._offset]
                        },
                        set: function(t) {
                            this._raw[this._offset] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return this._raw[this._offset + 1]
                        },
                        set: function(t) {
                            this._raw[this._offset + 1] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "z", {
                        get: function() {
                            return this._raw[this._offset + 2]
                        },
                        set: function(t) {
                            this._raw[this._offset + 2] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "ZERO", {
                        get: function() {
                            return new t(new Float32Array([0, 0, 0]))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "ONE", {
                        get: function() {
                            return new t(new Float32Array([1, 1, 1]))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "Up", {
                        get: function() {
                            return new t(new Float32Array([0, 1, 0]))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "ForwardRH", {
                        get: function() {
                            return new t(new Float32Array([0, 0, -1]))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "ForwardLH", {
                        get: function() {
                            return new t(new Float32Array([0, 0, 1]))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.createFromNumber = function(e, i, n) {
                        var r = new Float32Array(3);
                        return r[0] = e, r[1] = i, r[2] = n, new t(r)
                    }, t.createFromArray = function(e) {
                        return 3 !== e.length && (e = new Array(3).fill(0)), new t(new Float32Array(e))
                    }, t.createFromTypedArray = function(e, i) {
                        return void 0 === i && (i = 0), e.length - i < 3 && (e = new Float32Array(3).fill(0), i = 0), new t(e, i)
                    }, t.transformQuat = function(e, i, r) {
                        return r = r || t.ZERO, n.quatHelper.transformDirection(i._raw, i._offset, e._raw, e._offset, o._raw, o._offset), r.set(o), r
                    }, t.transformCoordinate = function(t, e, i) {
                        return i = e.transformPoint(t, i)
                    }, t.prototype.toArray = function() {
                        var t = this._raw;
                        return [t[this._offset], t[this._offset + 1], t[this._offset + 2]]
                    }, t.prototype.equal = function(t) {
                        return n.v3Helper.equal(this._raw, this._offset, t._raw, t._offset)
                    }, t.prototype.set = function(t) {
                        n.v3Helper.copy(t._raw, t._offset, this._raw, this._offset)
                    }, t.prototype.setValue = function(t, e, i) {
                        var n = this._raw;
                        return n[this._offset] = t, n[this._offset + 1] = e, n[this._offset + 2] = i, this
                    }, t.prototype.add = function(e, i) {
                        return i = i || new t, n.v3Helper.add(this._raw, this._offset, e._raw, e._offset, o._raw, o._offset), i.set(o), i
                    }, t.prototype.sub = function(e, i) {
                        return i = i || new t, n.v3Helper.sub(this._raw, this._offset, e._raw, e._offset, o._raw, o._offset), i.set(o), i
                    }, t.prototype.cross = function(e, i) {
                        return i = i || new t, n.v3Helper.cross(this._raw, this._offset, e._raw, e._offset, o._raw, o._offset), i.set(o), i
                    }, t.prototype.normalize = function(e) {
                        return e = e || new t, n.v3Helper.normalize(this._raw, this._offset, o._raw, o._offset), e.set(o), e
                    }, t.prototype.scale = function(e, i) {
                        return i = i || new t, n.v3Helper.scale(this._raw, this._offset, e, o._raw, o._offset), i.set(o), i
                    }, t.prototype.scaleXYZ = function(e, i, n, r) {
                        r = r || new t;
                        var o = this._raw;
                        return r.setValue(o[this._offset] * e, o[this._offset + 1] * i, o[this._offset + 2] * n), r
                    }, t.prototype.lerp = function(e, i, r) {
                        return r = r || new t, n.v3Helper.lerp(this._raw, this._offset, e._raw, e._offset, i, o._raw, o._offset), r.set(o), r
                    }, t.prototype.dot = function(t) {
                        return n.v3Helper.dot(this._raw, this._offset, t._raw, t._offset)
                    }, t.prototype.length = function() {
                        return n.v3Helper.length(this._raw, this._offset)
                    }, t.prototype.clone = function() {
                        var e = new t;
                        return n.v3Helper.copy(this._raw, this._offset, e._raw, e._offset), e
                    }, t.prototype.isZero = function() {
                        return n.v3Helper.isZero(this._raw, this._offset)
                    }, t.prototype.distanceTo = function(t) {
                        return n.v3Helper.distance(this._raw, this._offset, t._raw, t._offset)
                    }, t.prototype.angleTo = function(e, i) {
                        return i = i || t.ZERO, n.v3Helper.angleTo(this._raw, this._offset, e._raw, e._offset, o._raw, o._offset), i.set(o), i
                    }, t.prototype.setFromMatrixColumn = function(t, e) {
                        return this.fromArray(t._raw, 4 * e)
                    }, t.prototype.fromArray = function(t, e) {
                        void 0 === e && (e = 0);
                        var i = this._raw;
                        return i[this._offset] = t[e], i[this._offset + 1] = t[e + 1], i[this._offset + 2] = t[e + 2], this
                    }, t.prototype.setFromMatrixScale = function(t) {
                        var e = this.setFromMatrixColumn(t, 0).length(),
                            i = this.setFromMatrixColumn(t, 1).length(),
                            n = this.setFromMatrixColumn(t, 2).length(),
                            r = this._raw;
                        return r[this._offset] = e, r[this._offset + 1] = i, r[this._offset + 2] = n, this
                    }, t.prototype.setFromMatrixPosition = function(t) {
                        var e = t._raw,
                            i = this._raw;
                        return i[this._offset] = e[t._offset + 12], i[this._offset + 1] = e[t._offset + 13], i[this._offset + 2] = e[t._offset + 14], this
                    }, t.prototype.applyMatrix4 = function(e) {
                        return t.transformCoordinate(this, e, this)
                    }, t.prototype.transformDirection = function(t) {
                        var e = this._raw,
                            i = e[this._offset],
                            n = e[this._offset + 1],
                            r = e[this._offset + 2],
                            o = t._raw;
                        return e[this._offset] = o[t._offset] * i + o[t._offset + 4] * n + o[t._offset + 8] * r, e[this._offset + 1] = o[t._offset + 1] * i + o[t._offset + 5] * n + o[t._offset + 9] * r, e[this._offset + 2] = o[t._offset + 2] * i + o[t._offset + 6] * n + o[t._offset + 10] * r, this.normalize()
                    }, t
                }();
            e.default = r;
            var o = new r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(20),
                r = function() {
                    function t(t, e) {
                        this._raw = t || new Float32Array(4), this._offset = e || 0
                    }
                    return Object.defineProperty(t.prototype, "x", {
                        get: function() {
                            return this._raw[this._offset]
                        },
                        set: function(t) {
                            this._raw[this._offset] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return this._raw[this._offset + 1]
                        },
                        set: function(t) {
                            this._raw[this._offset + 1] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "z", {
                        get: function() {
                            return this._raw[this._offset + 2]
                        },
                        set: function(t) {
                            this._raw[this._offset + 2] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "w", {
                        get: function() {
                            return this._raw[this._offset + 3]
                        },
                        set: function(t) {
                            this._raw[this._offset + 3] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "ZERO", {
                        get: function() {
                            var e = new Float32Array(4);
                            return e.fill(0), new t(e)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.createFromNumber = function(e, i, n, r) {
                        var o = new Float32Array(4);
                        return o[0] = e, o[1] = i, o[2] = n, o[3] = r, new t(o)
                    }, t.createFromArray = function(e) {
                        return 4 !== e.length && (e = new Array(4).fill(0)), new t(new Float32Array(e))
                    }, t.createFromTypedArray = function(e, i) {
                        return void 0 === i && (i = 0), e.length - i < 4 && (e = new Float32Array(4).fill(0), i = 0), new t(e)
                    }, t.prototype.toArray = function() {
                        var t = this._raw;
                        return [t[this._offset + 0], t[this._offset + 1], t[this._offset + 2], t[this._offset + 3]]
                    }, t.prototype.equal = function(t) {
                        return n.v4Helper.equal(this._raw, this._offset, t._raw, t._offset)
                    }, t.prototype.set = function(t) {
                        n.v4Helper.copy(t._raw, t._offset, this._raw, this._offset)
                    }, t.prototype.setValue = function(t, e, i, n) {
                        var r = this._raw;
                        return r[this._offset + 0] = t, r[this._offset + 1] = e, r[this._offset + 2] = i, r[this._offset + 3] = n, this
                    }, t.prototype.add = function(e, i) {
                        return i = i || new t, n.v4Helper.add(this._raw, this._offset, e._raw, e._offset, o._raw, o._offset), i.set(o), i
                    }, t.prototype.sub = function(e, i) {
                        return i = i || new t, n.v4Helper.sub(this._raw, this._offset, e._raw, e._offset, o._raw, o._offset), i.set(o), i
                    }, t.prototype.scale = function(e, i) {
                        return i = i || new t, n.v4Helper.scale(this._raw, this._offset, e, o._raw, o._offset), i.set(o), i
                    }, t.prototype.lerp = function(e, i, r) {
                        return r = r || new t, n.v4Helper.lerp(this._raw, this._offset, e._raw, e._offset, i, o._raw, o._offset), r.set(o), r
                    }, t.prototype.dot = function(t) {
                        return n.v4Helper.dot(this._raw, this._offset, t._raw, t._offset)
                    }, t.prototype.isZero = function() {
                        return n.v4Helper.isZero(this._raw, this._offset)
                    }, t.prototype.clone = function() {
                        var e = new t;
                        return n.v4Helper.copy(this._raw, this._offset, e._raw, e._offset), e
                    }, t
                }();
            e.default = r;
            var o = new r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitAccelerateDataBuffer = void 0;
            var n = i(1),
                r = n.__importDefault(i(32));
            e.staticInitAccelerateDataBuffer = function(t) {
                t
            };
            var o = function(t) {
                function e(e) {
                    var i = t.call(this) || this;
                    return i._init(e), i
                }
                return n.__extends(e, t), Object.defineProperty(e.prototype, "dataLength", {
                    get: function() {
                        return this._u32view[0]
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "byteOffset", {
                    get: function() {
                        return this._byteOffset + 4
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "arrayBuffer", {
                    get: function() {
                        return this._buffer
                    },
                    enumerable: !1,
                    configurable: !0
                }), e
            }(r.default);
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitEntity2D = void 0;
            var n, r = i(1),
                o = i(6),
                a = r.__importDefault(i(36));
            e.staticInitEntity2D = function(t) {
                n = t
            };
            var s = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    return n.entityOffset = n._poolIndex * o.ENTITY2D_SIZE, n.localRotationOffset = n.entityOffset + o.ENTITY2D_OFFSET.OFFSET_ROTATION, n.localPositionOffset = n.entityOffset + o.ENTITY2D_OFFSET.OFFSET_POSITION, n.localScaleOffset = n.entityOffset + o.ENTITY2D_OFFSET.OFFSET_SCALE, n.worldMatrixOffset = n.entityOffset + o.ENTITY2D_OFFSET.OFFSET_WORLDMATRIX, n
                }
                return r.__extends(e, t), Object.defineProperty(e.prototype, "localPositionView", {
                    get: function() {
                        return this._localPositionView || (this._localPositionView = new Float32Array(this._nativePool._buffer, 4 * this.localPositionOffset, 2)), this._localPositionView
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "localRotationView", {
                    get: function() {
                        return this._localRotationView || (this._localRotationView = new Float32Array(this._nativePool._buffer, 4 * this.localRotationOffset, 1)), this._localRotationView
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "localScaleView", {
                    get: function() {
                        return this._localScaleView || (this._localScaleView = new Float32Array(this._nativePool._buffer, 4 * this.localScaleOffset, 2)), this._localScaleView
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "worldMatrixView", {
                    get: function() {
                        return this._worldMatrixView || (this._worldMatrixView = new Float32Array(this._nativePool._buffer, 4 * this.worldMatrixOffset, 9)), this._worldMatrixView
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.addChild = function(t) {
                    n.entityAddChild(this, t)
                }, e.prototype.addChildAtIndex = function(t, e) {
                    n.entityAddChildAtIndex(this, t, e)
                }, e.prototype.removeFromParent = function() {
                    n.entityRemoveFromParent(this)
                }, e.prototype.destroy = function() {
                    n.entityRemoveFromParent(this)
                }, e.prototype.clear = function() {
                    n.entityClear(this)
                }, e.prototype.setLocalMatrixDirty = function() {
                    n.entitySetLocalMatrixDirty(this)
                }, Object.defineProperty(e.prototype, "active", {
                    set: function(t) {
                        n.entitySetActive(this, t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.OFFSET_ROTATION = o.ENTITY2D_OFFSET.OFFSET_ROTATION, e.OFFSET_POSITION = o.ENTITY2D_OFFSET.OFFSET_POSITION, e.OFFSET_SCALE = o.ENTITY2D_OFFSET.OFFSET_SCALE, e.OFFSET_WORLDMATRIX = o.ENTITY2D_OFFSET.OFFSET_WORLDMATRIX, e.ENTITY2D_SIZE = o.ENTITY2D_SIZE, e
            }(a.default);
            e.default = s
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitEntity3D = void 0;
            var n, r = i(1),
                o = i(6),
                a = r.__importDefault(i(36));
            e.staticInitEntity3D = function(t) {
                n = t
            };
            var s = function(t) {
                function e(e, i) {
                    var n = t.call(this, e, i) || this;
                    return n.entityOffset = n._poolIndex * o.ENTITY3D_SIZE, n.localRotationTypeOffset = n.entityOffset + o.ENTITY3D_OFFSET.OFFSET_ROTATIONTYPE, n.localQuaternionOffset = n.entityOffset + o.ENTITY3D_OFFSET.OFFSET_ROTATION, n.localPositionOffset = n.entityOffset + o.ENTITY3D_OFFSET.OFFSET_POSITION, n.localScaleOffset = n.entityOffset + o.ENTITY3D_OFFSET.OFFSET_SCALE, n.worldMatrixOffset = n.entityOffset + o.ENTITY3D_OFFSET.OFFSET_WORLDMATRIX, n
                }
                return r.__extends(e, t), e.prototype.setUsingEuler = function(t) {
                    t ? this._nativePool._u32view[this.localRotationTypeOffset] &= ~o.ENTITY3D_OFFSET.DF_ROTATIONTYPE : this._nativePool._u32view[this.localRotationTypeOffset] |= o.ENTITY3D_OFFSET.DF_ROTATIONTYPE
                }, e.prototype.isUsingEuler = function() {
                    return 0 == (this._nativePool._u32view[this.localRotationTypeOffset] & o.ENTITY3D_OFFSET.DF_ROTATIONTYPE)
                }, Object.defineProperty(e.prototype, "localPositionView", {
                    get: function() {
                        return this._localPositionView || (this._localPositionView = new Float32Array(this._nativePool._buffer, 4 * this.localPositionOffset, 3)), this._localPositionView
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "localQuaternionView", {
                    get: function() {
                        return this._localQuaternionView || (this._localQuaternionView = new Float32Array(this._nativePool._buffer, 4 * this.localQuaternionOffset, 4)), this._localQuaternionView
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "localScaleView", {
                    get: function() {
                        return this._localScaleView || (this._localScaleView = new Float32Array(this._nativePool._buffer, 4 * this.localScaleOffset, 3)), this._localScaleView
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "worldMatrixView", {
                    get: function() {
                        return this._worldMatrixView || (this._worldMatrixView = new Float32Array(this._nativePool._buffer, 4 * this.worldMatrixOffset, 16)), this._worldMatrixView
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.addChild = function(t) {
                    n.entityAddChild(this, t)
                }, e.prototype.addChildAtIndex = function(t, e) {
                    n.entityAddChildAtIndex(this, t, e)
                }, e.prototype.removeFromParent = function() {
                    n.entityRemoveFromParent(this)
                }, e.prototype.destroy = function() {
                    n.entityRemoveFromParent(this)
                }, e.prototype.clear = function() {
                    n.entityClear(this)
                }, e.prototype.setLocalMatrixDirty = function() {
                    n.entitySetLocalMatrixDirty(this)
                }, Object.defineProperty(e.prototype, "active", {
                    set: function(t) {
                        n.entitySetActive(this, t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.setEntityDebugName = function(t) {
                    n.setEntityName(this.id, t)
                }, e.OFFSET_ROTATIONTYPE = o.ENTITY3D_OFFSET.OFFSET_ROTATIONTYPE, e.OFFSET_ROTATION = o.ENTITY3D_OFFSET.OFFSET_ROTATION, e.OFFSET_POSITION = o.ENTITY3D_OFFSET.OFFSET_POSITION, e.OFFSET_SCALE = o.ENTITY3D_OFFSET.OFFSET_SCALE, e.OFFSET_WORLDMATRIX = o.ENTITY3D_OFFSET.OFFSET_WORLDMATRIX, e.DF_ROTATIONTYPE = o.ENTITY3D_OFFSET.DF_ROTATIONTYPE, e.ENTITY3D_SIZE = o.ENTITY3D_SIZE, e
            }(a.default);
            e.default = s
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitEntityGroup = void 0;
            var n, r = i(1),
                o = r.__importDefault(i(32));
            e.staticInitEntityGroup = function(t) {
                n = t
            };
            var a = function(t) {
                function e(e, i) {
                    var n = t.call(this) || this;
                    return n._init(e), n.entityLength = i, n
                }
                return r.__extends(e, t), e.prototype.getEntityIdByIndex = function(t) {
                    return this._id + t
                }, e.prototype.getEntityOffsetByIndex = function(t) {
                    return t * this.objectSize
                }, e.prototype.setRawBuffer = function(t, e) {
                    void 0 === e && (e = 0), this._f32view.set(t, e)
                }, e.prototype.setLocalMatrixDirtyAll = function() {
                    n.entityGroupSetLocalMatrixDirtyAll(this)
                }, e
            }(o.default);
            e.default = a
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = i(6),
                o = function(t) {
                    function e(e, i) {
                        var n = t.call(this, e, i) || this;
                        return n.objectSize = r.ENTITY2D_SIZE, n
                    }
                    return n.__extends(e, t), e.OFFSET_ROTATION = r.ENTITY2D_OFFSET.OFFSET_ROTATION, e.OFFSET_POSITION = r.ENTITY2D_OFFSET.OFFSET_POSITION, e.OFFSET_SCALE = r.ENTITY2D_OFFSET.OFFSET_SCALE, e.OFFSET_WORLDMATRIX = r.ENTITY2D_OFFSET.OFFSET_WORLDMATRIX, e
                }(n.__importDefault(i(50)).default);
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = i(6),
                o = function(t) {
                    function e(e, i) {
                        var n = t.call(this, e, i) || this;
                        return n.objectSize = r.ENTITY3D_SIZE, n
                    }
                    return n.__extends(e, t), e.OFFSET_ROTATIONTYPE = r.ENTITY3D_OFFSET.OFFSET_ROTATIONTYPE, e.OFFSET_ROTATION = r.ENTITY3D_OFFSET.OFFSET_ROTATION, e.OFFSET_POSITION = r.ENTITY3D_OFFSET.OFFSET_POSITION, e.OFFSET_SCALE = r.ENTITY3D_OFFSET.OFFSET_SCALE, e.OFFSET_WORLDMATRIX = r.ENTITY3D_OFFSET.OFFSET_WORLDMATRIX, e
                }(n.__importDefault(i(50)).default);
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitAccelerateEntityCommand = void 0;
            var n, r = i(1),
                o = r.__importStar(i(54)),
                a = i(6);
            e.staticInitAccelerateEntityCommand = function(t) {
                n = t
            };
            var s = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return r.__extends(e, t), e.prototype._checkBufferSize = function(t) {
                    o.SIZE_UINT32 + this._u32view[o.OFFSET_COMMANDLENGTH] + t > this._bufferSize && n.refreshWorldTransform()
                }, e.prototype.setRootEntity = function(t) {
                    var e = 2 * o.SIZE_UINT32;
                    this._checkBufferSize(e);
                    var i = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[i] = a.enumEntityCommandType.SetRootEntity, this._u32view[i + 1] = t, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + e)
                }, e.prototype.addChild = function(t, e) {
                    var i = 3 * o.SIZE_UINT32;
                    this._checkBufferSize(i);
                    var n = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[n] = a.enumEntityCommandType.AddChild, this._u32view[n + 1] = t, this._u32view[n + 2] = e, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + i)
                }, e.prototype.addChildAtIndex = function(t, e, i) {
                    var n = 4 * o.SIZE_UINT32;
                    this._checkBufferSize(n);
                    var r = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[r] = a.enumEntityCommandType.AddChildAtIndex, this._u32view[r + 1] = t, this._u32view[r + 2] = e, this._u32view[r + 3] = i, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + n)
                }, e.prototype.removeFromParent = function(t) {
                    var e = 2 * o.SIZE_UINT32;
                    this._checkBufferSize(e);
                    var i = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[i] = a.enumEntityCommandType.RemoveFromParent, this._u32view[i + 1] = t, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + e)
                }, e.prototype.disperseSubTree = function(t) {
                    var e = 2 * o.SIZE_UINT32;
                    this._checkBufferSize(e);
                    var i = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[i] = a.enumEntityCommandType.DisperseSubTree, this._u32view[i + 1] = t, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + e)
                }, e.prototype.bindToBone = function(t, e) {
                    var i = 3 * o.SIZE_UINT32;
                    this._checkBufferSize(i);
                    var n = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[n] = a.enumEntityCommandType.BindToBone, this._u32view[n + 1] = t, this._u32view[n + 2] = e, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + i)
                }, e.prototype.unBindFromBone = function(t) {
                    var e = 2 * o.SIZE_UINT32;
                    this._checkBufferSize(e);
                    var i = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[i] = a.enumEntityCommandType.UnBindFromBone, this._u32view[i + 1] = t, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + e)
                }, e.prototype.entityCommandActive = function(t) {
                    var e = 2 * o.SIZE_UINT32;
                    this._checkBufferSize(e);
                    var i = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[i] = a.enumEntityCommandType.EntityCommandActive, this._u32view[i + 1] = t, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + e)
                }, e.prototype.entityCommandInActive = function(t) {
                    var e = 2 * o.SIZE_UINT32;
                    this._checkBufferSize(e);
                    var i = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[i] = a.enumEntityCommandType.EntityCommandInActive, this._u32view[i + 1] = t, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + e)
                }, e.prototype.bindToBones = function(t, e) {
                    var i = t.length,
                        n = (2 + 2 * i) * o.SIZE_UINT32;
                    this._checkBufferSize(n);
                    var r = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[r] = a.enumEntityCommandType.BindToBones, this._u32view[r + 1] = i;
                    for (var s = 0; s < i; s++) {
                        var u = t[s],
                            f = e[s];
                        this._u32view[r + 2 + s] = u.id, this._u32view[r + 2 + i + s] = f.id
                    }
                    this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + n)
                }, e.prototype.unBindFromBones = function(t) {
                    var e = t.length,
                        i = (2 + e) * o.SIZE_UINT32;
                    this._checkBufferSize(i);
                    var n = this._u32view[o.OFFSET_COMMANDLENGTH] / o.SIZE_UINT32 + 1;
                    this._u32view[n] = a.enumEntityCommandType.UnBindFromBones, this._u32view[n + 1] = e;
                    for (var r = 0; r < e; r++) {
                        var s = t[r];
                        this._u32view[n + 2 + r] = s.id
                    }
                    this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + i)
                }, e
            }(o.default);
            e.default = s
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.OFFSET_COMMANDLENGTH = e.SIZE_UINT32 = void 0;
            e.SIZE_UINT32 = 4, e.OFFSET_COMMANDLENGTH = 0;
            var n = function() {
                function t(t) {
                    this._bufferSize = 0, t ? (this.buffer = t, this._u32view = new Uint32Array(this.buffer, 0, this.buffer.byteLength / 4), this._bufferSize = this.buffer.byteLength) : (this.buffer = new ArrayBuffer(1024), this._u32view = new Uint32Array(this.buffer, 0, this.buffer.byteLength / 4), this._bufferSize = 1024)
                }
                return t.prototype._checkBufferSize = function(t) {}, t.prototype.setCommandSize = function(t) {
                    this._u32view[e.OFFSET_COMMANDLENGTH] = t
                }, t
            }();
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticInitAccelerateDirtiesCommand = void 0;
            var n, r = i(1),
                o = r.__importStar(i(54));
            e.staticInitAccelerateDirtiesCommand = function(t) {
                n = t
            };
            var a = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return r.__extends(e, t), e.prototype._checkBufferSize = function(t) {
                    this._u32view[o.OFFSET_COMMANDLENGTH] + t + 1 > this._u32view.length && n.refreshWorldTransform()
                }, e.prototype.addDirtyEntity = function(t) {
                    this._checkBufferSize(1), this._u32view[this._u32view[o.OFFSET_COMMANDLENGTH] + 1] = t.id, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + 1)
                }, e.prototype.addDirtyEntityId = function(t) {
                    this._checkBufferSize(1), this._u32view[this._u32view[o.OFFSET_COMMANDLENGTH] + 1] = t, this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + 1)
                }, e.prototype.addDirtyEntities = function(t, e) {
                    if (this._checkBufferSize(e), e > this._u32view.length) {
                        for (var i = this._u32view[o.OFFSET_COMMANDLENGTH] + 1, n = e - (this._u32view.length - 1), r = 0; r < n; r++) this._u32view[i + r] = t[r].id;
                        var a = e - n;
                        for (r = n; r < a; r++) this.addDirtyEntityId(t[r].id)
                    } else {
                        for (n = e, i = this._u32view[o.OFFSET_COMMANDLENGTH] + 1, r = 0; r < n; r++) this._u32view[i + r] = t[r].id;
                        this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + n)
                    }
                }, e.prototype.addDirtyEntitiesById = function(t, e) {
                    if (this._checkBufferSize(e), e > this._u32view.length) {
                        for (var i = this._u32view[o.OFFSET_COMMANDLENGTH] + 1, n = e - (this._u32view.length - 1), r = 0; r < n; r++) this._u32view[i + r] = t[r];
                        var a = e - n;
                        for (r = n; r < a; r++) this.addDirtyEntityId(t[r])
                    } else {
                        for (n = e, i = this._u32view[o.OFFSET_COMMANDLENGTH] + 1, r = 0; r < n; r++) this._u32view[i + r] = t[r];
                        this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + n)
                    }
                }, e.prototype.addDirtyEntityGroupAll = function(t) {
                    if (this._checkBufferSize(t.entityLength), t.entityLength > this._u32view.length) {
                        for (var e = this._u32view[o.OFFSET_COMMANDLENGTH] + 1, i = t.entityLength - (this._u32view.length - 1), n = 0; n < i; n++) this._u32view[e + n] = t.getEntityIdByIndex(n);
                        var r = t.entityLength - i;
                        for (n = i; n < r; n++) this.addDirtyEntityId(t.getEntityIdByIndex(n))
                    } else {
                        for (i = t.entityLength, e = this._u32view[o.OFFSET_COMMANDLENGTH] + 1, n = 0; n < i; n++) this._u32view[e + n] = t.getEntityIdByIndex(n);
                        this.setCommandSize(this._u32view[o.OFFSET_COMMANDLENGTH] + i)
                    }
                }, e
            }(o.default);
            e.default = a
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(54)),
                o = function(t) {
                    function e() {
                        return t.call(this) || this
                    }
                    return n.__extends(e, t), e.prototype._checkBufferSize = function(t) {
                        if (4 + t > this._bufferSize) {
                            var e = 2 * (4 + t);
                            this.buffer = new ArrayBuffer(e), this._u32view = new Uint32Array(this.buffer, 0, e / 4), this._bufferSize = e
                        }
                    }, e.prototype.updateAnimators = function(t, e) {
                        this._checkBufferSize(4 * e);
                        for (var i = 0; i < e; i++) this._u32view[1 + i] = t[i].id;
                        this.setCommandSize(e)
                    }, e
                }(r.default);
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(54)),
                o = function(t) {
                    function e() {
                        return t.call(this) || this
                    }
                    return n.__extends(e, t), e.prototype._checkBufferSize = function(t) {
                        if (4 + t > this._bufferSize) {
                            var e = 2 * (4 + t);
                            this.buffer = new ArrayBuffer(e), this._u32view = new Uint32Array(this.buffer, 0, e / 4), this._bufferSize = e
                        }
                    }, e.prototype.updateSkinningMatrices = function(t, e) {
                        this._checkBufferSize(4 * e);
                        for (var i = 0; i < e; i++) this._u32view[1 + i] = t[i].id;
                        this.setCommandSize(e)
                    }, e
                }(r.default);
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.scaleNumberArray = e.NativePools = void 0;
            var n = i(1),
                r = i(6),
                o = n.__importDefault(i(59)),
                a = 4e3,
                s = function() {};
            e.NativePools = s;
            var u = new Float32Array(new ArrayBuffer(4 * r.ENTITY2D_SIZE));
            u.set([0, 0, 0, 1, 1], 0);
            var f = new Uint32Array(new ArrayBuffer(4 * r.ENTITY3D_SIZE)),
                l = new Float32Array(f.buffer);
            f[0] = 1, l.set([0, 0, 0, 1], 1), l.set([0, 0, 0], 5), l.set([1, 1, 1], 8);
            var _ = new Uint32Array(new ArrayBuffer(4 * r.CULLABLECOMPONENT_SIZE)),
                c = new Float32Array(_.buffer),
                d = function() {
                    function t(t) {
                        this._index = 0, this._size = null != t ? t : 500, this._array = new Array(this._size)
                    }
                    return t.prototype.push = function(t) {
                        this._index >= this._size && (this._size *= 2, this._array.length = this._size), this._array[this._index] = t, this._index++
                    }, t.prototype.pop = function() {
                        return this._index--, this._array[this._index]
                    }, t.prototype.getByIndex = function(t) {
                        return t >= this._index ? -1 : this._array[t]
                    }, t.prototype.size = function() {
                        return this._index
                    }, t.prototype.clear = function() {
                        this._index = 0
                    }, t
                }();
            e.scaleNumberArray = d;
            var h = function() {
                function t(t) {
                    this.worker = t, this.entity2DPools = {}, this._entity2DPoolIndex = 0, this._entity2DPoolUsedLength = 0, this._entity2DPoolLength = 0, this._entity2DDisposedIds = new d, this.entity3DPools = {}, this._entity3DPoolIndex = 0, this._entity3DPoolUsedLength = 0, this._entity3DPoolLength = 0, this._entity3DDisposedIds = new d, this.cullableComponentPools = {}, this._cullableComponentPoolIndex = 0, this._cullableComponentPoolUsedLength = 0, this._cullableComponentPoolLength = 0, this._cullableComponentDisposedIds = new d
                }
                return t.prototype._enlargeEntity2DPool = function(t) {
                    var e = this.worker.createEntity(r.enumEntityType.Entity2D, t),
                        i = new o.default(e);
                    this._entity2DPoolIndex = i.id, this.entity2DPools[i.id] = i, this._entity2DPoolLength += t
                }, t.prototype._enlargeEntity3DPool = function(t) {
                    var e = this.worker.createEntity(r.enumEntityType.Entity3D, t),
                        i = new o.default(e);
                    this._entity3DPoolIndex = i.id, this.entity3DPools[i.id] = i, this._entity3DPoolLength += t
                }, t.prototype._enlargeCullableComponentPool = function(t) {
                    var e = this.worker.createComponent(r.enumComponentType.Cullable, t),
                        i = new o.default(e);
                    this._cullableComponentPoolIndex = i.id, this.cullableComponentPools[i.id] = i, this._cullableComponentPoolLength += t
                }, t.prototype.getEntity2D = function() {
                    if (this._entity2DDisposedIds.size() > 0) return this._entity2DPoolUsedLength++, this._entity2DDisposedIds.pop();
                    this._entity2DPoolUsedLength >= this._entity2DPoolLength && this._enlargeEntity2DPool(a);
                    var t = this._entity2DPoolIndex;
                    return this._entity2DPoolIndex += 1, this._entity2DPoolUsedLength++, t
                }, t.prototype.disposeEntity2D = function(t) {
                    t.isUsing && (this._entity2DDisposedIds.push(t.id), this._entity2DPoolUsedLength--, t.setRawBuffer(u), t.isUsing = !1)
                }, t.prototype.getEntity3D = function() {
                    if (this._entity3DDisposedIds.size() > 0) return this._entity3DPoolUsedLength++, this._entity3DDisposedIds.pop();
                    this._entity3DPoolUsedLength >= this._entity3DPoolLength && this._enlargeEntity3DPool(a);
                    var t = this._entity3DPoolIndex;
                    return this._entity3DPoolIndex += 1, this._entity3DPoolUsedLength++, t
                }, t.prototype.disposeEntity3D = function(t) {
                    t.isUsing && (this._entity3DDisposedIds.push(t.id), this._entity3DPoolUsedLength--, t.setRawBuffer(l), t.isUsing = !1)
                }, t.prototype.getCullableComponent = function() {
                    if (this._cullableComponentDisposedIds.size() > 0) return this._cullableComponentPoolUsedLength++, this._cullableComponentDisposedIds.pop();
                    this._cullableComponentPoolUsedLength >= this._cullableComponentPoolLength && this._enlargeCullableComponentPool(a);
                    var t = this._cullableComponentPoolIndex;
                    return this._cullableComponentPoolIndex += 1, this._cullableComponentPoolUsedLength++, t
                }, t.prototype.disposeCullableComponent = function(t) {
                    t.isUsing && (this._cullableComponentDisposedIds.push(t.id), this._cullableComponentPoolUsedLength--, t.setRawBuffer(c), t.isUsing = !1)
                }, t.prototype.getCullableComponentSingle = function() {
                    return this._enlargeCullableComponentPool(1), this._cullableComponentPoolIndex
                }, t.prototype.disposeCullableComponentSingle = function(t) {
                    this.cullableComponentPools[t.id] = null
                }, t
            }();
            e.default = h
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = function(t) {
                    function e(e) {
                        var i = t.call(this) || this;
                        return i._init(e), i
                    }
                    return n.__extends(e, t), e
                }(n.__importDefault(i(32)).default);
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AnimatorControllerMock = e.AnimatorController = e.AnimatorControllerModelMock = e.staticInitAnimatorController = void 0;
            var n, r = i(1),
                o = i(8),
                a = r.__importDefault(i(45)),
                s = r.__importDefault(i(61)),
                u = r.__importDefault(i(46));
            e.staticInitAnimatorController = function(t) {
                n = t
            };
            var f, l = new a.default,
                _ = new s.default,
                c = new s.default,
                d = new u.default,
                h = new u.default,
                p = function() {
                    function t(t) {
                        this.layerCount = t, this.id = o.requestAccelerateObjectID(), this.masks = [], this.buffer = new ArrayBuffer(4 + 12 * t), this.uint32 = new Uint32Array(this.buffer);
                        for (var e = 0; e < t; e++) this.masks.push(null)
                    }
                    return t.prototype.setMaskAtIndex = function(t, e, i, n) {
                        if (this.masks[t] = [], e)
                            for (var r = new Float32Array(e, i, 2 * n), o = new Uint32Array(e, i, 2 * n), a = 0; a < n; a++) this.masks[t].push({
                                entity: o[2 * a],
                                weight: r[2 * a + 1]
                            })
                    }, t
                }();
            e.AnimatorControllerModelMock = p,
                function(t) {
                    t[t.Override = 0] = "Override", t[t.Additive = 1] = "Additive"
                }(f || (f = {}));
            var y = function() {
                    this.tx = [0, 0], this.ty = [0, 0], this.tz = [0, 0], this.sx = [0, 0], this.sy = [0, 0], this.sz = [0, 0], this.use_quaternion = !0, this.r_weight = 0, this.rx = 0, this.ry = 0, this.rz = 0, this.rw = 0
                },
                E = function() {
                    function t(t) {
                        this.layerCount = t, this.nativeObject = n.worker.createAnimatorControllerModel(t), this._uint32View = new Uint32Array(this.nativeObject.buffer), this._f32View = new Float32Array(this.nativeObject.buffer);
                        for (var e = 0; e < t; e++) this._uint32View[1 + 3 * e] = 1, this._f32View[1 + 3 * e + 1] = 0, this._f32View[1 + 3 * e + 2] = 4294967295
                    }
                    return Object.defineProperty(t.prototype, "id", {
                        get: function() {
                            return this.nativeObject.id
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.setAnimationClipBinding = function(t) {
                        this._uint32View[0] = t ? t.id : 4294967295
                    }, t.prototype.setLayerBlendType = function(t, e) {
                        this._uint32View[1 + 3 * t] = e
                    }, t.prototype.setLayerWeight = function(t, e) {
                        this._f32View[1 + 3 * t + 1] = e
                    }, t.prototype.setLayerBlend = function(t, e) {
                        this._uint32View[1 + 3 * t + 2] = e ? e.id : 4294967295
                    }, t.prototype.setLayerMask = function(t, e) {
                        this.nativeObject.setMaskAtIndex(t, e.buffer, e.offset, e.length)
                    }, t.prototype.update = function() {
                        this.nativeObject.update()
                    }, t
                }();

            function T(t, e, i, n) {
                var r = !1;
                return t.use_quaternion ? null !== t.rx && null !== t.ry && null !== t.rz && null !== t.rw ? (r = !0, n[0] = t.rx, n[1] = t.ry, n[2] = t.rz, n[3] = t.rw) : r = !1 : null !== t.rx && null !== t.ry && null !== t.rz ? (r = !0, l.setValue(t.rx, t.ry, t.rz), s.default.fromEulerAngles(l, _), n[0] = _.x, n[1] = _.y, n[2] = _.z, n[3] = _.w) : e && i ? (r = !0, l.setValue(null === t.rx ? i.getEuler()[0] : t.rx, null === t.ry ? i.getEuler()[1] : t.ry, null === t.rz ? i.getEuler()[2] : t.rz), s.default.fromEulerAngles(l, _), n[0] = _.x, n[1] = _.y, n[2] = _.z, n[3] = _.w) : r = !1, r
            }
            e.AnimatorController = E;
            var m = function() {
                function t(t) {
                    this.layerCount = t, this.binding = null, this._blendMap = new Map, this.nativeObject = new p(t), this._uint32View = new Uint32Array(this.nativeObject.buffer), this._f32View = new Float32Array(this.nativeObject.buffer);
                    for (var e = 0; e < t; e++) this._uint32View[1 + 3 * e] = 1, this._f32View[1 + 3 * e + 1] = 0, this._f32View[1 + 3 * e + 2] = 4294967295
                }
                return Object.defineProperty(t.prototype, "id", {
                    get: function() {
                        return this.nativeObject.id
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setAnimationClipBinding = function(t) {
                    this._uint32View[0] = t ? t.id : 4294967295, this.binding = t
                }, t.prototype.setLayerBlendType = function(t, e) {
                    this._uint32View[1 + 3 * t] = e
                }, t.prototype.setLayerWeight = function(t, e) {
                    this._f32View[1 + 3 * t + 1] = e
                }, t.prototype.setLayerBlend = function(t, e) {
                    this._uint32View[1 + 3 * t + 2] = e ? e.id : 4294967295, e && this._blendMap.set(e.id, e)
                }, t.prototype.setLayerMask = function(t, e) {
                    this.nativeObject.setMaskAtIndex(t, e.buffer, e.offset, e.length)
                }, t.prototype.update = function() {
                    var t = this;
                    if (this.binding) {
                        for (var e = [], i = this.binding.defaultValues, n = function(n) {
                                var o = new Map,
                                    a = r._uint32View[1 + 3 * n];
                                if (a !== f.Override && a !== f.Additive) return e.push(o), "continue";
                                var s = a === f.Additive,
                                    u = r._uint32View[1 + 3 * n + 2],
                                    l = r._blendMap.get(u);
                                if (!l) return e.push(o), "continue";
                                for (var _ = []; l;) l.weight && _.push(l), l = l.nextState;
                                for (var c = function(t) {
                                        var e = r._blendState(_[t], s, r.nativeObject.masks[n]),
                                            i = _[t].weight;
                                        e.forEach((function(t, e) {
                                            if (!o.has(e)) {
                                                var n = new y;
                                                n.tx[1] = NaN, n.ty[1] = NaN, n.tz[1] = NaN, n.sx[1] = NaN, n.sy[1] = NaN, n.sz[1] = NaN, n.r_weight = NaN, o.set(e, n)
                                            }
                                            var r = o.get(e);
                                            if (isNaN(t.tx[1]) || 0 === t.tx[1] || (isNaN(r.tx[1]) && (r.tx[1] = 0), r.tx[0] += t.tx[0] * i, r.tx[1] += t.tx[1] * i), isNaN(t.ty[1]) || 0 === t.ty[1] || (isNaN(r.ty[1]) && (r.ty[1] = 0), r.ty[0] += t.ty[0] * i, r.ty[1] += t.ty[1] * i), isNaN(t.tz[1]) || 0 === t.tz[1] || (isNaN(r.tz[1]) && (r.tz[1] = 0), r.tz[0] += t.tz[0] * i, r.tz[1] += t.tz[1] * i), isNaN(t.sx[1]) || 0 === t.sx[1] || (isNaN(r.sx[1]) && (r.sx[1] = 0), r.sx[0] += t.sx[0] * i, r.sx[1] += t.sx[1] * i), isNaN(t.sy[1]) || 0 === t.sy[1] || (isNaN(r.sy[1]) && (r.sy[1] = 0), r.sy[0] += t.sy[0] * i, r.sy[1] += t.sy[1] * i), isNaN(t.sz[1]) || 0 === t.sz[1] || (isNaN(r.sz[1]) && (r.sz[1] = 0), r.sz[0] += t.sz[0] * i, r.sz[1] += t.sz[1] * i), !isNaN(t.r_weight) && 0 !== t.r_weight) {
                                                isNaN(r.r_weight) && (r.r_weight = 0);
                                                var a = d;
                                                a.setValue(r.rx, r.ry, r.rz, r.rw);
                                                var s = h;
                                                s.setValue(t.rx, t.ry, t.rz, t.rw), a.add(s.scale(a.dot(s) < 0 ? -t.r_weight * i : t.r_weight * i, s), a), r.rx = a.x, r.ry = a.y, r.rz = a.z, r.rw = a.w, r.r_weight += t.r_weight * i
                                            }
                                        }))
                                    }, p = 0; p < _.length; p++) c(p);
                                s ? o.forEach((function(t, e) {
                                    if (!isNaN(t.r_weight)) {
                                        var i = d;
                                        i.setValue(t.rx * t.r_weight, t.ry * t.r_weight, t.rz * t.r_weight, t.rw);
                                        var n = i.dot(i);
                                        n > 0 && i.scale(1 / Math.sqrt(n), i), t.rx = i.x, t.ry = i.y, t.rz = i.z, t.rw = i.w
                                    }
                                })) : o.forEach((function(e, n) {
                                    var r = t.binding.entities.get(n),
                                        o = i.get(r);
                                    if (!isNaN(e.tx[1]) && e.tx[1] < 1 && (e.tx[0] += (1 - e.tx[1]) * o.position[0]), !isNaN(e.ty[1]) && e.ty[1] < 1 && (e.ty[0] += (1 - e.ty[1]) * o.position[1]), !isNaN(e.tz[1]) && e.tz[1] < 1 && (e.tz[0] += (1 - e.tz[1]) * o.position[2]), !isNaN(e.sx[1]) && e.sx[1] < 1 && (e.sx[0] += (1 - e.sx[1]) * o.scale[0]), !isNaN(e.sy[1]) && e.sy[1] < 1 && (e.sy[0] += (1 - e.sy[1]) * o.scale[1]), !isNaN(e.sz[1]) && e.sz[1] < 1 && (e.sz[0] += (1 - e.sz[1]) * o.scale[2]), !isNaN(e.r_weight) && e.r_weight < 1) {
                                        var a = o.getQuaternion(),
                                            s = d;
                                        s.setValue(e.rx, e.ry, e.rz, e.rw), (u = h).setValue(a[0], a[1], a[2], a[3]), s.add(u.scale(s.dot(u) < 0 ? -(1 - e.r_weight) : 1 - e.r_weight, u), s), e.rx = s.x, e.ry = s.y, e.rz = s.z, e.rw = s.w
                                    }
                                    if (!isNaN(e.r_weight)) {
                                        var u;
                                        (u = d).setValue(e.rx, e.ry, e.rz, e.rw);
                                        var f = u.dot(u);
                                        f > 0 && u.scale(1 / Math.sqrt(f), u), e.rx = u.x, e.ry = u.y, e.rz = u.z, e.rw = u.w
                                    }
                                })), e.push(o)
                            }, r = this, o = 0; o < this.layerCount; o++) n(o);
                        var a = new Map,
                            s = function(n) {
                                var r = u._uint32View[1 + 3 * n] === f.Additive,
                                    o = u._f32View[1 + 3 * n + 1];
                                e[n].forEach((function(e, s) {
                                    if (!a.has(s)) {
                                        var u = new y;
                                        u.tx[1] = NaN, u.ty[1] = NaN, u.tz[1] = NaN, u.sx[1] = NaN, u.sy[1] = NaN, u.sz[1] = NaN, u.r_weight = NaN, a.set(s, u)
                                    }
                                    var f = a.get(s);
                                    if (r) {
                                        if (0 === n) {
                                            var l = i.get(t.binding.entities.get(s));
                                            if (isNaN(e.tx[1]) || (isNaN(f.tx[1]) && (f.tx[1] = 0), f.tx[0] = l.position[0] + e.tx[0] * o), isNaN(e.ty[1]) || (isNaN(f.ty[1]) && (f.ty[1] = 0), f.ty[0] = l.position[1] + e.ty[0] * o), isNaN(e.tz[1]) || (isNaN(f.tz[1]) && (f.tz[1] = 0), f.tz[0] = l.position[2] + e.tz[0] * o), isNaN(e.sx[1]) || (isNaN(f.sx[1]) && (f.sx[1] = 0), f.sx[0] = l.scale[0] * (1 - o) + e.sx[0] * o), isNaN(e.sy[1]) || (isNaN(f.sy[1]) && (f.sy[1] = 0), f.sy[0] = l.scale[1] * (1 - o) * e.sy[0] * o), isNaN(e.sz[1]) || (isNaN(f.sz[1]) && (f.sz[1] = 0), f.sz[0] = l.scale[2] * (1 - o) * e.sz[0] * o), !isNaN(e.r_weight)) {
                                                isNaN(f.r_weight) && (f.r_weight = 0);
                                                var p = l.getQuaternion(),
                                                    E = d;
                                                E.setValue(p[0], p[1], p[2], p[3]), (m = _).setValue(E.x, E.y, E.z, E.w), (N = h).setValue(e.rx * o, e.ry * o, e.rz * o, e.rw), (O = N.dot(N)) >= 0 && N.scale(1 / Math.sqrt(O), N), (T = c).setValue(N.x, N.y, N.z, N.w), T.multiply(m, T), f.rx = T.x, f.ry = T.y, f.rz = T.z, f.rw = T.w
                                            }
                                        } else if (isNaN(e.tx[1]) || (isNaN(f.tx[1]) && (f.tx[1] = 0), f.tx[0] += e.tx[0] * o), isNaN(e.ty[1]) || (isNaN(f.ty[1]) && (f.ty[1] = 0), f.ty[0] += e.ty[0] * o), isNaN(e.tz[1]) || (isNaN(f.tz[1]) && (f.tz[1] = 0), f.tz[0] += e.tz[0] * o), isNaN(e.sx[1]) || (isNaN(f.sx[1]) && (f.sx[1] = 0), f.sx[0] += e.sx[0] * o), isNaN(e.sy[1]) || (isNaN(f.sy[1]) && (f.sy[1] = 0), f.sy[0] += e.sy[0] * o), isNaN(e.sz[1]) || (isNaN(f.sz[1]) && (f.sz[1] = 0), f.sz[0] += e.sz[0] * o), !isNaN(e.r_weight)) {
                                            if (isNaN(f.r_weight)) {
                                                f.r_weight = 0;
                                                p = (l = i.get(t.binding.entities.get(s))).getQuaternion();
                                                f.rx = p[0], f.ry = p[1], f.rz = p[2], f.rw = p[3]
                                            }
                                            var T, m;
                                            (N = h).setValue(e.rx * o, e.ry * o, e.rz * o, e.rw), (O = N.dot(N)) >= 0 && N.scale(1 / Math.sqrt(O), N), (T = c).setValue(N.x, N.y, N.z, N.w), (m = _).setValue(f.rx, f.ry, f.rz, f.rw), T.multiply(m, T), f.rx = T.x, f.ry = T.y, f.rz = T.z, f.rw = T.w
                                        }
                                    } else if (o < 1) {
                                        l = i.get(t.binding.entities.get(s));
                                        if (isNaN(e.tx[1]) || (isNaN(f.tx[1]) && (f.tx[1] = 0), f.tx[0] = l.position[0] * (1 - o) + e.tx[0] * o), isNaN(e.ty[1]) || (isNaN(f.ty[1]) && (f.ty[1] = 0), f.ty[0] = l.position[1] * (1 - o) + e.ty[0] * o), isNaN(e.tz[1]) || (isNaN(f.tz[1]) && (f.tz[1] = 0), f.tz[0] = l.position[2] * (1 - o) + e.tz[0] * o), isNaN(e.sx[1]) || (isNaN(f.sx[1]) && (f.sx[1] = 0), f.sx[0] = l.scale[0] * (1 - o) + e.sx[0] * o), isNaN(e.sy[1]) || (isNaN(f.sy[1]) && (f.sy[1] = 0), f.sy[0] = l.scale[1] * (1 - o) + e.sy[0] * o), isNaN(e.sz[1]) || (isNaN(f.sz[1]) && (f.sz[1] = 0), f.sz[0] = l.scale[2] * (1 - o) + e.sz[0] * o), !isNaN(e.r_weight)) {
                                            isNaN(f.r_weight) && (f.r_weight = 0);
                                            p = l.getQuaternion();
                                            var v = d;
                                            v.setValue(p[0], p[1], p[2], p[3]);
                                            var A = h;
                                            A.setValue(e.rx, e.ry, e.rz, e.rw);
                                            var S = A.dot(v) >= 0 ? 1 : -1,
                                                w = A.scale(S).sub(v).scale(o).add(v);
                                            (O = w.dot(w)) >= 0 && w.scale(1 / Math.sqrt(O), w), f.rx = w.x, f.ry = w.y, f.rz = w.z, f.rw = w.w
                                        }
                                    } else {
                                        var N, O;
                                        if (isNaN(e.tx[1]) || (isNaN(f.tx[1]) && (f.tx[1] = 0), f.tx[0] = e.tx[0] * o), isNaN(e.ty[1]) || (isNaN(f.ty[1]) && (f.ty[1] = 0), f.ty[0] = e.ty[0] * o), isNaN(e.tz[1]) || (isNaN(f.tz[1]) && (f.tz[1] = 0), f.tz[0] = e.tz[0] * o), isNaN(e.sx[1]) || (isNaN(f.sx[1]) && (f.sx[1] = 0), f.sx[0] = e.sx[0] * o), isNaN(e.sy[1]) || (isNaN(f.sy[1]) && (f.sy[1] = 0), f.sy[0] = e.sy[0] * o), isNaN(e.sz[1]) || (isNaN(f.sz[1]) && (f.sz[1] = 0), f.sz[0] = e.sz[0] * o), !isNaN(e.r_weight)) isNaN(f.r_weight) && (f.r_weight = 0), (N = h).setValue(e.rx * o, e.ry * o, e.rz * o, e.rw), (O = N.dot(N)) >= 0 && N.scale(1 / Math.sqrt(O), N), f.rx = N.x, f.ry = N.y, f.rz = N.z, f.rw = N.w
                                    }
                                }))
                            },
                            u = this;
                        for (o = 0; o < e.length; o++) s(o);
                        a.forEach((function(e, i) {
                            var n = t.binding.entities.get(i);
                            isNaN(e.tx[1]) || (n.localPositionView[0] = e.tx[0]), isNaN(e.ty[1]) || (n.localPositionView[1] = e.ty[0]), isNaN(e.tz[1]) || (n.localPositionView[2] = e.tz[0]), isNaN(e.sx[1]) || (n.localScaleView[0] = e.sx[0]), isNaN(e.sy[1]) || (n.localScaleView[1] = e.sy[0]), isNaN(e.sz[1]) || (n.localScaleView[2] = e.sz[0]), isNaN(e.r_weight) || (n.localQuaternionView.set([e.rx, e.ry, e.rz, e.rw]), n.setUsingEuler(!1)), n.setLocalMatrixDirty()
                        }))
                    }
                }, t.prototype._blendState = function(t, e, i) {
                    var n = new Map;
                    if (!this.binding) return n;
                    for (var r = this.binding.defaultValues, o = t.count, a = t.useDefault, s = 0; s < o; s++) {
                        var u = {
                            clip: t.clipsMap.get(t._uint32View[3 + 5 * s]),
                            frameIndex: t._f32View[3 + 5 * s + 1],
                            weight: t._f32View[3 + 5 * s + 2],
                            additiveReferenceClip: t.clipsMap.get(t._uint32View[3 + 5 * s + 3]),
                            additiveFrameIndex: t._f32View[3 + 5 * s + 4]
                        };
                        if (u.weight && u.clip && this.binding.clipBinding.has(u.clip)) {
                            var f = u.clip.evaluate(u.frameIndex),
                                l = u.weight,
                                p = {};
                            if (e) {
                                var E = u.additiveReferenceClip ? u.additiveReferenceClip : u.clip,
                                    m = u.additiveReferenceClip ? u.additiveFrameIndex : 0;
                                this.binding.clipBinding.has(E) || (E = u.clip, m = 0);
                                var v = E.evaluate(m);
                                for (var A in v) {
                                    var S = this.binding.clipBinding.get(E);
                                    if (S[+A])(N = this.binding.entities.get(S[+A].id)) && (p[N.id] = v[A])
                                }
                            }
                            for (var w in f) {
                                var N;
                                if (N = this.binding.clipBinding.get(u.clip)[+w]) {
                                    var O = 1;
                                    if (i.length) {
                                        for (var C = NaN, I = 0; I < i.length; I++)
                                            if (i[I] && i[I].entity === N.id) {
                                                C = i[I].weight;
                                                break
                                            } if (!isNaN(C)) {
                                            if (0 === C) continue;
                                            O = C
                                        }
                                    }
                                    var R = r.get(N);
                                    if (R) {
                                        var M = l * O,
                                            b = [0, 0, 0, 0],
                                            g = T(f[w], 0 !== a, R, b);
                                        if (e) {
                                            var F = p[N.id];
                                            if (!F) continue;
                                            var P = [0, 0, 0, 0],
                                                D = T(F, 0 !== a, R, P);
                                            if (null !== f[w].tx && null !== F.tx && (f[w].tx -= F.tx), null !== f[w].ty && null !== F.ty && (f[w].ty -= F.ty), null !== f[w].tz && null !== F.tz && (f[w].tz -= F.tz), null !== f[w].sx && null !== F.sx && (f[w].sx -= F.sx), null !== f[w].sy && null !== F.sy && (f[w].sy -= F.sy), null !== f[w].sz && null !== F.sz && (f[w].sz -= F.sz), g && D) {
                                                var L = _;
                                                L.setValue(P[0], P[1], P[2], P[3]);
                                                var B = c;
                                                B.setValue(b[0], b[1], b[2], b[3]), B.multiply(L.invert(L), B), b[0] = f[w].rx = B.x, b[1] = f[w].ry = B.y, b[2] = f[w].rz = B.z, b[3] = f[w].rw = B.w
                                            }
                                        }
                                        if (!n.has(N.id)) {
                                            var x = new y;
                                            x.tx[1] = NaN, x.ty[1] = NaN, x.tz[1] = NaN, x.sx[1] = NaN, x.sy[1] = NaN, x.sz[1] = NaN, x.r_weight = NaN, n.set(N.id, x)
                                        }
                                        var V = n.get(N.id);
                                        if (null !== f[w].tx && (isNaN(V.tx[1]) && (V.tx[1] = 0), V.tx[0] += f[w].tx * M, V.tx[1] += M), null !== f[w].ty && (isNaN(V.ty[1]) && (V.ty[1] = 0), V.ty[0] += f[w].ty * M, V.ty[1] += M), null !== f[w].tz && (isNaN(V.tz[1]) && (V.tz[1] = 0), V.tz[0] += f[w].tz * M, V.tz[1] += M), null !== f[w].sx && (isNaN(V.sx[1]) && (V.sx[1] = 0), V.sx[0] += f[w].sx * M, V.sx[1] += M), null !== f[w].sy && (isNaN(V.sy[1]) && (V.sy[1] = 0), V.sy[0] += f[w].sy * M, V.sy[1] += M), null !== f[w].sz && (isNaN(V.sz[1]) && (V.sz[1] = 0), V.sz[0] += f[w].sz * M, V.sz[1] += M), g) {
                                            isNaN(V.r_weight) && (V.r_weight = 0), V.r_weight += M;
                                            var H = d;
                                            H.setValue(V.rx, V.ry, V.rz, V.rw);
                                            var k = h;
                                            k.setValue(b[0], b[1], b[2], b[3]), H.add(k.scale(H.dot(k) < 0 ? -M : M, k), H), V.rx = H.x, V.ry = H.y, V.rz = H.z, V.rw = H.w
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e || 0 === a || r.forEach((function(t, e) {
                        if (i.length)
                            for (var r = 0; r < i.length; r++)
                                if (i[r] && i[r].entity === e.id) {
                                    if (i[r] && 0 === i[r].weight) return;
                                    break
                                } n.has(e.id) || n.set(e.id, new y)
                    })), n
                }, t
            }();
            e.AnimatorControllerMock = m
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(44)),
                o = n.__importDefault(i(45)),
                a = i(20),
                s = function() {
                    function t(t, e) {
                        this._raw = t || new Float32Array(4), this._offset = e || 0
                    }
                    return Object.defineProperty(t.prototype, "x", {
                        get: function() {
                            return this._raw[this._offset]
                        },
                        set: function(t) {
                            this._raw[this._offset] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return this._raw[this._offset + 1]
                        },
                        set: function(t) {
                            this._raw[this._offset + 1] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "z", {
                        get: function() {
                            return this._raw[this._offset + 2]
                        },
                        set: function(t) {
                            this._raw[this._offset + 2] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "w", {
                        get: function() {
                            return this._raw[this._offset + 3]
                        },
                        set: function(t) {
                            this._raw[this._offset + 3] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "DEFAULT", {
                        get: function() {
                            return t.createFromNumber(0, 0, 0, 1)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.fromEulerAngles = function(e, i) {
                        return i = i || t.DEFAULT, a.quatHelper.fromEulerAngles(e._raw, e._offset, l._raw, l._offset), i.set(l), i
                    }, t.createFromMatrix4 = function(e, i) {
                        return i = i || new t, a.quatHelper.fromMatrix4(e._raw, e._offset, l._raw, l._offset), i.set(l), i
                    }, t.createFromAxisAngle = function(e, i, n) {
                        return n = n || new t, r.default.createRotationAxis(e, i, u), t.createFromMatrix4(u, n), n
                    }, t.lookRotation = function(e, i, n) {
                        return n = n || new t, r.default.lookAt(o.default.ZERO, e, i, u), t.createFromMatrix4(u, n), n
                    }, t.createFromNumber = function(e, i, n, r) {
                        var o = new Float32Array(4);
                        return o[0] = e, o[1] = i, o[2] = n, o[3] = r, new t(o)
                    }, t.createFromArray = function(e) {
                        return 4 !== e.length && (e = new Array(4).fill(0)), new t(new Float32Array(e))
                    }, t.createFromTypedArray = function(e, i) {
                        return void 0 === i && (i = 0), e.length - i < 4 && (e = new Float32Array(4).fill(0)), new t(e, i)
                    }, t.prototype.set = function(t) {
                        a.v4Helper.copy(t._raw, t._offset, this._raw, this._offset)
                    }, t.prototype.setValue = function(t, e, i, n) {
                        var r = this._raw;
                        return r[this._offset + 0] = t, r[this._offset + 1] = e, r[this._offset + 2] = i, r[this._offset + 3] = n, this
                    }, t.prototype.slerp = function(e, i, n) {
                        return n = n || new t, a.quatHelper.slerp(this._raw, this._offset, e._raw, e._offset, i, l._raw, l._offset), n.set(l), n
                    }, t.prototype.invert = function(e) {
                        return e = e || new t, a.quatHelper.invert(this._raw, this._offset, l._raw, l._offset), e.set(l), e
                    }, t.prototype.add = function(e, i) {
                        return i = i || t.DEFAULT, a.v4Helper.add(this._raw, this._offset, e._raw, e._offset, l._raw, l._offset), i.set(l), i
                    }, t.prototype.sub = function(e, i) {
                        return i = i || t.DEFAULT, a.v4Helper.sub(this._raw, this._offset, e._raw, e._offset, l._raw, l._offset), i.set(l), i
                    }, t.prototype.multiply = function(e, i) {
                        return i = i || t.DEFAULT, a.quatHelper.multiply(this._raw, this._offset, e._raw, e._offset, l._raw, l._offset), i.set(l), i
                    }, t.prototype.clone = function() {
                        var e = new t;
                        return a.v4Helper.copy(this._raw, this._offset, e._raw, e._offset), e
                    }, t.prototype.isZero = function() {
                        return a.v4Helper.isZero(this._raw, this._offset)
                    }, t.prototype.isDefault = function() {
                        return a.v4Helper.equal(this._raw, this._offset, f._raw, f._offset)
                    }, t.prototype.toEulerAngles = function(t) {
                        return t = t || o.default.ZERO, a.quatHelper.toEulerAngles(this._raw, this._offset, _._raw, _._offset), t.set(_), t
                    }, t.prototype.equal = function(t) {
                        return a.v4Helper.equal(this._raw, this._offset, t._raw, t._offset)
                    }, t
                }();
            e.default = s;
            var u = new r.default,
                f = s.DEFAULT,
                l = new s,
                _ = new o.default
        }, function(t, e, i) {
            "use strict";
            var n;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AnimatorControllerStateMock = e.AnimatorControllerState = e.staticInitAnimatorControllerLayerBlend = void 0, e.staticInitAnimatorControllerLayerBlend = function(t) {
                n = t
            };
            var r = function() {
                function t(t) {
                    this.count = t, this._index = 0, this._native = n.createAnimatorControllerStateModel(t), this._f32View = new Float32Array(this._native.buffer), this._uint32View = new Uint32Array(this._native.buffer);
                    for (var e = 0; e < t; e++) this._uint32View[5 * e + 3] = 4294967295, this._f32View[5 * e + 3 + 1] = 0, this._f32View[5 * e + 3 + 2] = 0, this._uint32View[5 * e + 3 + 3] = 4294967295, this._f32View[5 * e + 3 + 4] = 0
                }
                return Object.defineProperty(t.prototype, "id", {
                    get: function() {
                        return this._native.id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "weight", {
                    get: function() {
                        return this._f32View[0]
                    },
                    set: function(t) {
                        this._f32View[0] = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "useDefault", {
                    get: function() {
                        return this._f32View[1]
                    },
                    set: function(t) {
                        this._f32View[1] = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.resetBlendInfo = function() {
                    for (var t = 0; t < this.count; t++) this._f32View[5 * t + 3 + 1] = 0, this._f32View[5 * t + 3 + 2] = 0;
                    this._index = 0
                }, t.prototype.setNextState = function(t) {
                    this._uint32View[2] = t ? t.id : 4294967295
                }, t.prototype.setBlendInfo = function(t, e, i, n, r) {
                    return !(this._index >= this.count) && (this._uint32View[5 * this._index + 3] = t.id, this._f32View[5 * this._index + 3 + 1] = e, this._f32View[5 * this._index + 3 + 2] = i, this._uint32View[5 * this._index + 3 + 3] = n ? n.id : this._uint32View[5 * this._index + 3], this._f32View[5 * this._index + 3 + 4] = r, this._index++, !0)
                }, t
            }();
            e.AnimatorControllerState = r;
            var o = function() {
                function t(t) {
                    this.count = t, this.clipsMap = new Map, this._index = 0, this._native = n.createAnimatorControllerStateModel(t), this._f32View = new Float32Array(this._native.buffer), this._uint32View = new Uint32Array(this._native.buffer);
                    for (var e = 0; e < t; e++) this._uint32View[5 * e + 3] = 4294967295, this._f32View[5 * e + 3 + 1] = 0, this._f32View[5 * e + 3 + 2] = 0, this._uint32View[5 * e + 3 + 3] = 4294967295, this._f32View[5 * e + 3 + 4] = 0
                }
                return Object.defineProperty(t.prototype, "id", {
                    get: function() {
                        return this._native.id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "weight", {
                    get: function() {
                        return this._f32View[0]
                    },
                    set: function(t) {
                        this._f32View[0] = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "useDefault", {
                    get: function() {
                        return this._f32View[1]
                    },
                    set: function(t) {
                        this._f32View[1] = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.resetBlendInfo = function() {
                    for (var t = 0; t < this.count; t++) this._f32View[5 * t + 3 + 1] = 0, this._f32View[5 * t + 3 + 2] = 0;
                    this._index = 0, this.clipsMap.clear()
                }, t.prototype.setNextState = function(t) {
                    this.nextState = t, this._uint32View[2] = t ? t.id : 4294967295
                }, t.prototype.setBlendInfo = function(t, e, i, n, r) {
                    return !(this._index >= this.count) && (this.clipsMap.set(t.id, t), this._uint32View[5 * this._index + 3] = t.id, this._f32View[5 * this._index + 3 + 1] = e, this._f32View[5 * this._index + 3 + 2] = i, this._uint32View[5 * this._index + 3 + 3] = n ? n.id : this._uint32View[5 * this._index + 3], this._f32View[5 * this._index + 3 + 4] = r, n && this.clipsMap.set(n.id, n), this._index++, !0)
                }, t
            }();
            e.AnimatorControllerStateMock = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(54)),
                o = function(t) {
                    function e() {
                        return t.call(this) || this
                    }
                    return n.__extends(e, t), e.prototype._checkBufferSize = function(t) {
                        if (4 + t > this._bufferSize) {
                            var e = 2 * (4 + t);
                            this.buffer = new ArrayBuffer(e), this._u32view = new Uint32Array(this.buffer, 0, e / 4), this._bufferSize = e
                        }
                    }, e.prototype.updateAnimatorControllers = function(t, e) {
                        this._checkBufferSize(4 * e);
                        for (var i = 0; i < e; i++) this._u32view[1 + i] = t[i].id;
                        this.setCommandSize(e)
                    }, e
                }(r.default);
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AnimationClipBindingMock = e.AnimationClipBinding = e.staticInitAnimationClipBinding = e.Entity3DValue = void 0;
            var n, r, o, a, s = i(1),
                u = i(8),
                f = s.__importDefault(i(61)),
                l = s.__importDefault(i(45)),
                _ = new f.default,
                c = new l.default,
                d = function() {
                    function t(t) {
                        this.position = [t.localPositionView[0], t.localPositionView[1], t.localPositionView[2]], this.scale = [t.localScaleView[0], t.localScaleView[1], t.localScaleView[2]], t.isUsingEuler() ? (this._euler = [t.localQuaternionView[0], t.localQuaternionView[1], t.localQuaternionView[2]], this.useQuaternion = !1, this._quaternionInitialized = !1, this._eulerInitialized = !0) : (this.useQuaternion = !0, this._quaternionInitialized = !0, this._quaternion = [t.localQuaternionView[0], t.localQuaternionView[1], t.localQuaternionView[2], t.localQuaternionView[3]], this._eulerInitialized = !1)
                    }
                    return t.prototype.getEuler = function() {
                        return this._eulerInitialized || (this._eulerInitialized = !0, _.setValue(this._quaternion[0], this._quaternion[1], this._quaternion[2], this._quaternion[3]), _.toEulerAngles(c), this._euler = [c.x, c.y, c.z]), this._euler
                    }, t.prototype.getQuaternion = function() {
                        return this._quaternionInitialized || (this._quaternionInitialized = !0, c.setValue(this._euler[0], this._euler[1], this._euler[2]), f.default.fromEulerAngles(c, _), this._quaternion = [_.x, _.y, _.z, _.w]), this._quaternion
                    }, t.prototype.syncValue = function(t) {
                        t.localPositionView.set(this.position), t.localScaleView.set(this.scale), this.useQuaternion ? (t.localQuaternionView.set(this._quaternion), t.setUsingEuler(!1)) : (t.localQuaternionView.set(this._euler), t.setUsingEuler(!0)), t.setLocalMatrixDirty()
                    }, t
                }();
            e.Entity3DValue = d, e.staticInitAnimationClipBinding = function(t) {
                    n = t
                },
                function(t) {
                    t[t.Ignore = 0] = "Ignore", t[t.Refresh = 1] = "Refresh"
                }(r || (r = {})),
                function(t) {
                    t[t.Keep = 0] = "Keep", t[t.Refresh = 1] = "Refresh", t[t.WriteBack = 2] = "WriteBack"
                }(o || (o = {})),
                function(t) {
                    t[t.Keep = 0] = "Keep", t[t.Clear = 1] = "Clear", t[t.WriteBack = 2] = "WriteBack"
                }(a || (a = {}));
            var h = function() {
                function t(t, e, i, r, o, a, s, u) {
                    for (var f = Math.min(r.length - o, a), l = Math.min(t.length - e, i), _ = new ArrayBuffer(4 * (f + l)), c = new Uint32Array(_), d = 0, h = e; h < l; h++) c[d++] = t[h] ? t[h].id : 4294967295;
                    for (h = o; h < f; h++) c[d++] = null === r[h] ? 4294967295 : "number" == typeof r[h] ? r[h] : r[h].id;
                    this.nativeObject = n.worker.createAnimationClipBinding(_, 0, l, f, s, u.id)
                }
                return Object.defineProperty(t.prototype, "id", {
                    get: function() {
                        return this.nativeObject.id
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.updateBinding = function(t, e, i, n, r, o, a, s, u, f) {
                    for (var l = Math.min(n.length - r, o), _ = Math.min(t.length - e, i), c = new ArrayBuffer(4 * (l + _)), d = new Uint32Array(c), h = 0, p = e; p < _; p++) d[h++] = t[p] ? t[p].id : 4294967295;
                    for (p = r; p < l; p++) d[h++] = null === n[p] ? 4294967295 : "number" == typeof n[p] ? n[p] : n[p].id;
                    return this.nativeObject.updateBinding(c, 0, _, l, a, s, u, f.id)
                }, t.prototype.writeDefaultValues = function() {
                    this.nativeObject.writeDefaultValues()
                }, t
            }();
            e.AnimationClipBinding = h;
            var p = function() {
                function t(t, e, i, n, o, a, s, f) {
                    this.clipBinding = new Map, this.defaultValues = new Map, this.id = u.requestAccelerateObjectID(), this._root = null, this.clipModels = new Map, this.entities = new Map;
                    var l = [];
                    if (this._updateBinding(t, e, i, n, o, a, l) && s === r.Refresh)
                        for (var _ = 0, c = l; _ < c.length; _++) {
                            var h = c[_];
                            this.defaultValues.set(h, new d(h))
                        }
                }
                return t.prototype.updateBinding = function(t, e, i, n, s, u, f, l, _, c) {
                    var h = this,
                        p = [];
                    if (!this._updateBinding(t, e, i, n, s, u, p)) return !1;
                    var y = this.defaultValues;
                    this.defaultValues = new Map;
                    var E, T, m = f;
                    m & a.WriteBack ? (T = !0, E = m & ~a.WriteBack) : (T = !1, E = m);
                    var v, A, S = l;
                    S & o.WriteBack ? (A = !0, v = S & ~o.WriteBack) : (A = !1, v = S);
                    for (var w = _, N = new Set, O = new Set, C = new Set, I = 0, R = p; I < R.length; I++) {
                        var M = R[I];
                        y.has(M) ? N.add(M) : O.add(M)
                    }
                    return y.forEach((function(t, e) {
                        p.indexOf(e) < 0 && C.add(e)
                    })), T && C.forEach((function(t) {
                        y.get(t).syncValue(t)
                    })), E === a.Keep && C.forEach((function(t) {
                        var e = y.get(t);
                        h.defaultValues.set(t, e)
                    })), v === o.Refresh && N.forEach((function(t) {
                        h.defaultValues.set(t, new d(t))
                    })), A && N.forEach((function(t) {
                        y.get(t).syncValue(t)
                    })), v === o.Keep && N.forEach((function(t) {
                        var e = y.get(t);
                        h.defaultValues.set(t, e)
                    })), w === r.Refresh && O.forEach((function(t) {
                        h.defaultValues.set(t, new d(t))
                    })), !0
                }, t.prototype.writeDefaultValues = function() {
                    this.defaultValues.forEach((function(t, e) {
                        t.syncValue(e)
                    }))
                }, t.prototype.getRoot = function() {
                    return this._root
                }, t.prototype._getRoot = function() {
                    if (!this.clipBinding.size) return null;
                    var t = null;
                    return this.clipBinding.forEach((function(e, i) {
                        !t && e.length && (t = e[0])
                    })), t
                }, t.prototype._updateBinding = function(t, e, i, n, r, o, a) {
                    i = Math.min(t.length - e, i), o = Math.min(n.length - r, o);
                    for (var s = 0, u = new Map, f = e; f < i; f++) {
                        var l = t[f],
                            _ = [],
                            c = n[s++];
                        if ("number" != typeof c) return !1;
                        if (s >= o) return !1;
                        for (var d = 0; d < c; d++) {
                            if (s >= o) return !1;
                            if ("number" == typeof(y = n[r + s])) return !1;
                            y ? (a.push(y), _.push(y)) : _.push(null), s++
                        }
                        u.set(l, _)
                    }
                    this.clipBinding = u, this.entities.clear();
                    for (var h = 0, p = a; h < p.length; h++) {
                        var y = p[h];
                        this.entities.set(y.id, y)
                    }
                    return this._root = this._getRoot(), !0
                }, t
            }();
            e.AnimationClipBindingMock = p
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LogicManager = void 0;
            var n = i(1),
                r = i(32),
                o = n.__importDefault(i(44)),
                a = n.__importDefault(i(61)),
                s = n.__importDefault(i(45)),
                u = i(6),
                f = i(33),
                l = n.__importDefault(i(66)),
                _ = n.__importStar(i(48)),
                c = n.__importStar(i(49)),
                d = n.__importDefault(i(67)),
                h = n.__importDefault(i(69)),
                p = n.__importStar(i(50)),
                y = n.__importDefault(i(51)),
                E = n.__importDefault(i(52)),
                T = n.__importDefault(i(70)),
                m = n.__importDefault(i(72)),
                v = n.__importDefault(i(73)),
                A = n.__importDefault(i(74)),
                S = n.__importStar(i(35)),
                w = n.__importDefault(i(75)),
                N = n.__importDefault(i(47)),
                O = i(8),
                C = n.__importDefault(i(58)),
                I = n.__importDefault(i(46)),
                R = i(64),
                M = i(60),
                b = i(62),
                g = function() {
                    function t(t, e) {
                        this.config = e, this.entity2mock = new WeakMap, this.entityGroup2mock = new WeakMap, this.cullableComponent2mock = new WeakMap, this._entitySystem = null, this._modelMap = {}, this._dataBufferMap = {}, this.worker = t, this.poolManager = new C.default(this.worker), _.staticInitEntity2D(this), c.staticInitEntity3D(this), p.staticInitEntityGroup(this), S.staticInitCullableComponent(this), r.staticInitNativeObject(this.worker), M.staticInitAnimatorController(this), R.staticInitAnimationClipBinding(this), b.staticInitAnimatorControllerLayerBlend(this.worker)
                    }
                    return t.prototype.createEntity3D = function() {
                        var t = this.poolManager.getEntity3D(),
                            e = new c.default(t, this.poolManager.entity3DPools);
                        e.isUsing = !0, this.entitySetActive(e, !0);
                        var i = new h.default(e.float32View, e.uint32View, e.entityOffset);
                        return this.entity2mock.set(e, i), e
                    }, t.prototype.createEntity2D = function() {
                        var t = this.poolManager.getEntity2D(),
                            e = new _.default(t, this.poolManager.entity2DPools);
                        e.isUsing = !0, this.entitySetActive(e, !0);
                        var i = new d.default(e.float32View, e.uint32View, e.entityOffset);
                        return this.entity2mock.set(e, i), e
                    }, t.prototype.createEntity2DGroup = function(t) {
                        var e = this.worker.createEntity(u.enumEntityType.Entity2D, t),
                            i = new y.default(e, t),
                            n = new T.default(i);
                        return this.entityGroup2mock.set(i, n), i
                    }, t.prototype.createEntity3DGroup = function(t) {
                        var e = this.worker.createEntity(u.enumEntityType.Entity3D, t),
                            i = new E.default(e, t),
                            n = new m.default(i);
                        return this.entityGroup2mock.set(i, n), i
                    }, t.prototype.createCullableComponent = function() {
                        var t = this.poolManager.getCullableComponent(),
                            e = new S.default(t, this.poolManager.cullableComponentPools);
                        e.isUsing = !0, e.setActive(!0);
                        var i = new w.default(e);
                        return this.cullableComponent2mock.set(e, i), e
                    }, t.prototype.createAnimatorComponent = function() {
                        return new v.default
                    }, t.prototype.createSkinnedSkeletonComponent = function() {
                        return new A.default
                    }, t.prototype.createDataModel = function(t) {
                        var e = f.dataModel2CtorMock[t];
                        if (!e) return console.warn("can not support dataModel [" + t + "]"), null;
                        var i = O.requestAccelerateObjectID(),
                            n = new e(i);
                        return this._modelMap[i] = n, n
                    }, t.prototype.createDataBuffer = function(t) {
                        var e = O.requestAccelerateObjectID(),
                            i = {
                                buffer: new ArrayBuffer(t),
                                id: e,
                                byteSize: t
                            },
                            n = new N.default(i);
                        return this._dataBufferMap[e] = n, n
                    }, t.prototype.createAnimationClipBinding = function(t, e, i, n, r, o, a, s) {
                        return new R.AnimationClipBindingMock(t, e, i, n, r, o, a, s)
                    }, t.prototype.createAnimatorController = function(t) {
                        return new M.AnimatorControllerMock(t)
                    }, t.prototype.createAnimatorControllerStateModel = function(t) {
                        return new b.AnimatorControllerStateMock(t)
                    }, t.prototype.entityAddChild = function(t, e) {
                        var i = this.entity2mock.get(t),
                            n = this.entity2mock.get(e);
                        i && n && i.addChild(n)
                    }, t.prototype.entityAddChildAtIndex = function(t, e, i) {
                        var n = this.entity2mock.get(t),
                            r = this.entity2mock.get(e);
                        n && r && n.addChildAtIndex(r, i)
                    }, t.prototype.entityRemoveFromParent = function(t) {
                        var e = this.entity2mock.get(t);
                        e && e.removeFromParent()
                    }, t.prototype.entityDestroy = function(t) {
                        var e = this.entity2mock.get(t);
                        e && e.destroy(), t instanceof _.default ? this.poolManager.disposeEntity2D(t) : t instanceof c.default && this.poolManager.disposeEntity3D(t)
                    }, t.prototype.entityClear = function(t) {
                        var e = this.entity2mock.get(t);
                        e && e.clear()
                    }, t.prototype.entitySetActive = function(t, e) {
                        var i = this.entity2mock.get(t);
                        i && (i.active = e)
                    }, t.prototype.entitySetLocalMatrixDirty = function(t) {
                        var e = this.entity2mock.get(t);
                        e && e.setLocalMatrixDirty()
                    }, t.prototype.entitiesSetLocalMatrixDirty = function(t, e) {
                        for (var i = 0; i < e; i++) {
                            var n = t[i],
                                r = this.entity2mock.get(n);
                            r && r.setLocalMatrixDirty()
                        }
                    }, t.prototype.entitiesSetLocalMatrixDirtyById = function(t, e) {}, t.prototype.componentBindEntity = function(t, e) {
                        var i = this.cullableComponent2mock.get(t),
                            n = this.entity2mock.get(e);
                        i && n && i.bindEntity(n)
                    }, t.prototype.componentUnbindEntity = function(t) {
                        var e = this.cullableComponent2mock.get(t);
                        e && e.unbindEntity(), this.poolManager.disposeCullableComponent(t)
                    }, t.prototype.setRootEntity = function(t) {
                        var e = this.entity2mock.get(t);
                        e && (e instanceof h.default ? this._getEntitySystem().setEntityRoot3D(e) : this._getEntitySystem().setEntityRoot2D(e))
                    }, t.prototype.entityGroupAddChild = function(t, e, i, n) {
                        var r, o;
                        t instanceof p.default ? r = this.entityGroup2mock.get(t).entitis[i] : r = this.entity2mock.get(t);
                        e instanceof p.default ? o = this.entityGroup2mock.get(e).entitis[n] : o = this.entity2mock.get(e);
                        r && o && r.addChild(o)
                    }, t.prototype.entityGroupAddChildAtIndex = function(t, e, i, n, r) {
                        var o, a;
                        t instanceof p.default ? o = this.entityGroup2mock.get(t).entitis[n] : o = this.entity2mock.get(t);
                        e instanceof p.default ? a = this.entityGroup2mock.get(e).entitis[r] : a = this.entity2mock.get(e);
                        o && a && o.addChildAtIndex(a, i)
                    }, t.prototype.entityGroupRemoveFromParent = function(t, e) {
                        var i;
                        t instanceof p.default ? i = this.entityGroup2mock.get(t).entitis[e] : i = this.entity2mock.get(t);
                        i && i.removeFromParent()
                    }, t.prototype.entityGroupDestroy = function(t, e) {
                        var i;
                        t instanceof p.default ? i = this.entityGroup2mock.get(t).entitis[e] : i = this.entity2mock.get(t);
                        i && i.destroy(), t instanceof _.default ? this.poolManager.disposeEntity2D(t) : t instanceof c.default && this.poolManager.disposeEntity3D(t)
                    }, t.prototype.entityGroupClear = function(t, e) {
                        var i;
                        t instanceof p.default ? i = this.entityGroup2mock.get(t).entitis[e] : i = this.entity2mock.get(t);
                        i && i.clear()
                    }, t.prototype.entityGroupSetActive = function(t, e, i) {
                        var n;
                        t instanceof p.default ? n = this.entityGroup2mock.get(t).entitis[i] : n = this.entity2mock.get(t);
                        n && (n.active = e)
                    }, t.prototype.entityGroupSetLocalMatrixDirty = function(t, e) {
                        var i;
                        t instanceof p.default ? i = this.entityGroup2mock.get(t).entitis[e] : i = this.entity2mock.get(t);
                        i && i.setLocalMatrixDirty()
                    }, t.prototype.entityGroupSetLocalMatrixDirtyAll = function(t) {
                        var e = this.entityGroup2mock.get(t);
                        e && e.setLocalMatrixDirtyAll()
                    }, t.prototype.componentBindEntityWithIndex = function(t, e, i, n) {
                        var r, o = this.cullableComponent2mock.get(t);
                        e instanceof p.default ? r = this.entityGroup2mock.get(e).entitis[n] : r = this.entity2mock.get(e);
                        o && r && o.bindEntity(r)
                    }, t.prototype.componentUnbindEntityWithIndex = function(t, e) {
                        var i = this.cullableComponent2mock.get(t);
                        i && i.unbindEntity(), this.poolManager.disposeCullableComponent(t)
                    }, t.prototype.setRootEntityGroup = function(t, e) {
                        var i;
                        (void 0 === e && (e = 0), t instanceof p.default) ? i = this.entityGroup2mock.get(t).entitis[e]: i = this.entity2mock.get(t);
                        i && (i instanceof h.default ? this._getEntitySystem().setEntityRoot3D(i) : this._getEntitySystem().setEntityRoot2D(i))
                    }, t.prototype.refreshWorldTransform = function() {
                        this._getEntitySystem().refreshWorldTransform()
                    }, t.prototype.cullWithCameraPerspective = function(t, e, i, n, r, o, a, u, f, l, _, c, d, h) {
                        var p = this._getEntitySystem().root3D,
                            y = [],
                            E = [],
                            T = s.default.createFromNumber(e, i, n),
                            m = s.default.createFromNumber(r, o, a),
                            v = s.default.createFromNumber(u, f, l),
                            A = d * Math.tan(_ / 2),
                            S = A * c,
                            w = T.sub(m).normalize(),
                            N = v.cross(w).normalize(),
                            O = w.cross(N),
                            C = T,
                            I = C.sub(w.scale(d)),
                            R = C.sub(w.scale(h)),
                            M = [];
                        M[0] = {}, M[0].point = I, M[0].normal = w.scale(-1), M[0].distance = M[0].point.dot(M[0].normal.scale(-1)), M[1] = {}, M[1].point = R, M[1].normal = w, M[1].distance = M[1].point.dot(M[1].normal.scale(-1)), M[2] = {}, M[2].point = I.add(O.scale(A)), M[2].normal = M[2].point.sub(C).normalize().cross(N), M[2].distance = M[2].point.dot(M[2].normal.scale(-1)), M[3] = {}, M[3].point = I.sub(O.scale(A)), M[3].normal = N.cross(M[3].point.sub(C).normalize()), M[3].distance = M[3].point.dot(M[3].normal.scale(-1)), M[4] = {}, M[4].point = I.sub(N.scale(S)), M[4].normal = M[4].point.sub(C).normalize().cross(O), M[4].distance = M[4].point.dot(M[4].normal.scale(-1)), M[5] = {}, M[5].point = I.add(N.scale(S)), M[5].normal = O.cross(M[5].point.sub(C).normalize()), M[5].distance = M[5].point.dot(M[5].normal.scale(-1)), p && p.travelChild((function(e) {
                            for (var i = 0, n = e._cullableComps; i < n.length; i++) {
                                var r = n[i];
                                if (!r || !r.active || r.entity !== e || !e.active) return !0;
                                if (!(t & r.cullMask)) return !0;
                                var o = !1,
                                    a = e.worldMatrix,
                                    u = a._raw,
                                    f = a._offset,
                                    l = s.default.createFromNumber(u[f + 0 + 0], u[f + 0 + 1], u[f + 0 + 2]).length(),
                                    _ = s.default.createFromNumber(u[f + 4 + 0], u[f + 4 + 1], u[f + 4 + 2]).length(),
                                    c = s.default.createFromNumber(u[f + 8 + 0], u[f + 8 + 1], u[f + 8 + 2]).length(),
                                    d = l > _ ? l : _;
                                d = d > c ? d : c;
                                for (var h = a.transformPoint(s.default.createFromTypedArray(r.boundingBallCenter)), p = r.boundingBallRadius * d, T = 0; T < 6; T++) {
                                    if (M[T].normal.dot(h) + M[T].distance < -p) {
                                        o = !0;
                                        break
                                    }
                                }
                                o || (y.push(r._componetModel.id), E.push(0))
                            }
                        }));
                        var b = {
                            objects: new Uint32Array(y).buffer,
                            hash: Math.ceil(1e6 * Math.random()),
                            distances: new Float32Array(E).buffer
                        };
                        return b ? {
                            hash: b.hash,
                            objects: new Uint32Array(b.objects),
                            distances: new Float32Array(b.distances)
                        } : {
                            hash: 0,
                            objects: [],
                            distances: []
                        }
                    }, t.prototype.cullWithCameraOrthographic = function(t, e, i, n, r, o, a, u, f, l, _, c, d, h, p, y) {
                        var E = this._getEntitySystem().root3D,
                            T = [],
                            m = [],
                            v = s.default.createFromNumber(e, i, n),
                            A = s.default.createFromNumber(r, o, a),
                            S = s.default.createFromNumber(u, f, l),
                            w = v.sub(A).normalize(),
                            N = S.cross(w).normalize(),
                            O = w.cross(N),
                            C = v,
                            I = C.sub(w.scale(p)),
                            R = C.sub(w.scale(y)),
                            M = [];
                        M[0] = {}, M[0].point = I, M[0].normal = w.scale(-1), M[0].distance = M[0].point.dot(M[0].normal.scale(-1)), M[1] = {}, M[1].point = R, M[1].normal = w, M[1].distance = M[1].point.dot(M[1].normal.scale(-1)), M[2] = {}, M[2].point = I.add(O.scale(h)), M[2].normal = O.scale(-1), M[2].distance = M[2].point.dot(M[2].normal.scale(-1)), M[3] = {}, M[3].point = I.add(O.scale(d)), M[3].normal = O, M[3].distance = M[3].point.dot(M[3].normal.scale(-1)), M[4] = {}, M[4].point = I.add(N.scale(_)), M[4].normal = N, M[4].distance = M[4].point.dot(M[4].normal.scale(-1)), M[5] = {}, M[5].point = I.add(N.scale(c)), M[5].normal = N.scale(-1), M[5].distance = M[5].point.dot(M[5].normal.scale(-1)), E && E.travelChild((function(e) {
                            for (var i = 0, n = e._cullableComps; i < n.length; i++) {
                                var r = n[i];
                                if (!r || !r.active || r.entity !== e || !e.active) return !0;
                                if (!(t & r.cullMask)) return !0;
                                var o = !1,
                                    a = e.worldMatrix,
                                    u = a._raw,
                                    f = a._offset,
                                    l = s.default.createFromNumber(u[f + 0 + 0], u[f + 0 + 1], u[f + 0 + 2]).length(),
                                    _ = s.default.createFromNumber(u[f + 4 + 0], u[f + 4 + 1], u[f + 4 + 2]).length(),
                                    c = s.default.createFromNumber(u[f + 8 + 0], u[f + 8 + 1], u[f + 8 + 2]).length(),
                                    d = l > _ ? l : _;
                                d = d > c ? d : c;
                                for (var h = a.transformPoint(s.default.createFromTypedArray(r.boundingBallCenter)), p = r.boundingBallRadius * d, y = 0; y < 6; y++) {
                                    if (M[y].normal.dot(h) + M[y].distance < -p) {
                                        o = !0;
                                        break
                                    }
                                }
                                o || (T.push(r._componetModel.id), m.push(0))
                            }
                        }));
                        var b = {
                            objects: new Uint32Array(T).buffer,
                            hash: Math.ceil(1e6 * Math.random()),
                            distances: new Float32Array(m).buffer
                        };
                        return b ? {
                            hash: b.hash,
                            objects: new Uint32Array(b.objects),
                            distances: new Float32Array(b.distances)
                        } : {
                            hash: 0,
                            objects: [],
                            distances: []
                        }
                    }, t.prototype.SyncValuesToEntity3D = function(t, e) {
                        null !== t.tx && (e.float32View[e.localPositionOffset] = t.tx), null !== t.ty && (e.float32View[e.localPositionOffset + 1] = t.ty), null !== t.tz && (e.float32View[e.localPositionOffset + 2] = t.tz), null !== t.sx && (e.float32View[e.localScaleOffset + 0] = t.sx), null !== t.sy && (e.float32View[e.localScaleOffset + 1] = t.sy), null !== t.sz && (e.float32View[e.localScaleOffset + 2] = t.sz), null !== t.rw ? (e.setUsingEuler(!1), e.float32View[e.localQuaternionOffset + 0] = t.rx, e.float32View[e.localQuaternionOffset + 1] = t.ry, e.float32View[e.localQuaternionOffset + 2] = t.rz, e.float32View[e.localQuaternionOffset + 3] = t.rw) : null !== t.rx || null !== t.ry || t.rz, this.entitySetLocalMatrixDirty(e)
                    }, t.prototype.updateAnimator = function(t) {
                        if (this._updateAnimator(t), t) {
                            var e = this.entity2mock.get(t.culEntity3DTreeNode);
                            e && this.computeRootWorldMatrixRecursive(e)
                        }
                    }, t.prototype.updateAnimatorController = function(t) {
                        if (t && t.binding && t.binding.getRoot()) {
                            t.update();
                            var e = this.entity2mock.get(t.binding.getRoot());
                            e && this.computeRootWorldMatrixRecursive(e)
                        }
                    }, t.prototype.computeRootWorldMatrixRecursive = function(t) {
                        var e = t.parent;
                        e ? this.computeRootWorldMatrixRecursive(e) : t != this._getEntitySystem().root3D && t._computeWorldMatrixRecursive(!1)
                    }, t.prototype._updateAnimator = function(t) {
                        if (t) {
                            for (var e = [], i = 0, r = 0; r < t.animationClipCount; r++) {
                                var o = t.getAnimationParamater(r);
                                if (void 0 !== o.percentage) {
                                    var s = n.__assign({}, o);
                                    s.nodeIndex = i, e.push(s)
                                }
                                i += this._modelMap[o.animationClipId].nodesLength
                            }
                            if (0 !== e.length) {
                                var u = this._modelMap[e[0].animationClipId];
                                if (void 0 !== u)
                                    if (1 === e.length) {
                                        var f = u.evaluate(e[0].frameIndex);
                                        for (var r in f) {
                                            if (p = t.getEntity(Number(r) + e[0].nodeIndex)) {
                                                var l = f[r];
                                                delete(E = n.__assign({}, f[r])).use_quaternion, this.SyncValuesToEntity3D(l, p)
                                            }
                                        }
                                    } else {
                                        var _ = {},
                                            c = t,
                                            d = e;
                                        for (r = 0; r < d.length; r++)
                                            if (this._modelMap[d[r].animationClipId]) {
                                                f = this._modelMap[d[r].animationClipId].evaluate(d[r].frameIndex);
                                                for (var h in f) {
                                                    var p;
                                                    if (p = c.getEntity(Number(h) + d[r].nodeIndex)) {
                                                        var y = p.id,
                                                            E = n.__assign({}, f[h]),
                                                            T = n.__assign({}, f[h]);
                                                        for (var m in delete E.use_quaternion, delete T.use_quaternion, E) null !== E[m] && (T[m] = d[r].percentage);
                                                        _[y] || (_[y] = {
                                                            entity: p,
                                                            transforms: [],
                                                            percentages: []
                                                        }), _[y].transforms.push(E), _[y].percentages.push(T)
                                                    }
                                                }
                                            } else console.log("Fail to get native animation-clip resource.");
                                        var v = {},
                                            A = {};
                                        for (var y in _) {
                                            v[y] = {
                                                tx: [],
                                                ty: [],
                                                tz: [],
                                                sx: [],
                                                sy: [],
                                                sz: [],
                                                rx: [],
                                                ry: [],
                                                rz: [],
                                                rw: []
                                            };
                                            var S = _[y].transforms.length;
                                            for (r = 0; r < S; r++) {
                                                E = _[y].transforms[r], T = _[y].percentages[r];
                                                for (var w in T) null !== T[w] && v[y][w].push({
                                                    value: E[w],
                                                    percentage: T[w]
                                                })
                                            }
                                        }
                                        for (var y in v) {
                                            A[y] = {
                                                tx: null,
                                                ty: null,
                                                tz: null,
                                                sx: null,
                                                sy: null,
                                                sz: null,
                                                rx: null,
                                                ry: null,
                                                rz: null,
                                                rw: null,
                                                use_quaternion: !0
                                            };
                                            var N = v[y];
                                            for (var w in N)
                                                if (N[w].length && ["tx", "ty", "tz", "sx", "sy", "sz"].indexOf(w) >= 0) {
                                                    null === A[y][w] && (A[y][w] = 0);
                                                    for (var O = 0; O < N[w].length; O++) {
                                                        var C = N[w][O];
                                                        A[y][w] += C.value * C.percentage
                                                    }
                                                } if (N.rx.length && N.rx.length === N.ry.length && N.rx.length === N.rz.length && N.rx.length === N.rw.length)
                                                if (2 !== N.rx.length) {
                                                    for (var R = new I.default, M = 0; M < N.rx.length; M++) {
                                                        var b = N.rx[M].percentage,
                                                            g = I.default.createFromNumber(N.rx[M].value, N.ry[M].value, N.rz[M].value, N.rw[M].value);
                                                        R.add(R.dot(g) < 0 ? g.scale(-b) : g.scale(b), R)
                                                    }
                                                    R.scale(1 / Math.sqrt(R.dot(R)), R), A[y].rx = R.x, A[y].ry = R.y, A[y].rz = R.z, A[y].rw = R.w
                                                } else {
                                                    var F = new a.default;
                                                    F.setValue(N.rx[0].value, N.ry[0].value, N.rz[0].value, N.rw[0].value);
                                                    var P = new a.default;
                                                    P.setValue(N.rx[1].value, N.ry[1].value, N.rz[1].value, N.rw[1].value), F.slerp(P, N.rx[1].percentage / (N.rx[0].percentage + N.rx[1].percentage), F), A[y].rx = F.x, A[y].ry = F.y, A[y].rz = F.z, A[y].rw = F.w
                                                }
                                        }
                                        for (var y in A) this.SyncValuesToEntity3D(A[y], _[y].entity)
                                    }
                                else console.log("AnimationClipModel not found")
                            }
                        }
                    }, t.prototype.updateAnimators = function(t) {
                        for (var e = 0; e < t.length; e++) this.updateAnimator(t[e])
                    }, t.prototype.updateAnimatorControllers = function(t, e) {
                        for (var i = 0; i < e; i++) this.updateAnimatorController(t[i])
                    }, t.prototype.updateSkinningMatrix = function(t) {
                        if (t)
                            for (var e = this._modelMap[t.getBoneInverseModelId()], i = 0; i < t.getBoneNum(); i++) {
                                var n = t.getBoneIndices(i),
                                    r = t.getBoneEntity(i),
                                    a = o.default.createFromTypedArray(r.float32View, r.worldMatrixOffset),
                                    s = e.inverseMatrixs[n];
                                a.multiply(s, t.outputBoneInverseMatrixs[i])
                            }
                    }, t.prototype.updateSkinningMatrices = function(t) {
                        for (var e = 0; e < t.length; e++) this.updateSkinningMatrix(t[e])
                    }, t.prototype.bindEntitiesToBones = function(t, e) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i],
                                r = e[i],
                                o = this.entity2mock.get(n),
                                a = this.entity2mock.get(r);
                            o && a && (o._linkBoneEntity = a, a._linkEntity = o)
                        }
                    }, t.prototype.unbindEntitiesFromBones = function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e],
                                n = this.entity2mock.get(i);
                            n && n._linkBoneEntity && (n._linkBoneEntity._linkEntity = null, n._linkEntity = null)
                        }
                    }, t.prototype.bindEntitiesToBonesWithIndex = function(t, e, i, n) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r],
                                a = e[r],
                                s = this.entity2mock.get(o),
                                u = this.entity2mock.get(a);
                            s && u && (s._linkBoneEntity = u, u._linkEntity = s)
                        }
                    }, t.prototype.unbindEntitiesFromBonesWithIndex = function(t, e) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i],
                                r = this.entity2mock.get(n);
                            r && r._linkBoneEntity && (r._linkBoneEntity._linkEntity = null, r._linkEntity = null)
                        }
                    }, t.prototype._getEntitySystem = function() {
                        return this._entitySystem || (this._entitySystem = new l.default(this)), this._entitySystem
                    }, t.prototype.frameStart = function() {}, t.prototype.setEntityName = function(t, e) {}, t
                }();
            e.LogicManager = g
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(t) {
                    this.root3D = null, this.root3Ds = [], this.root2Ds = [], this._manager = t
                }
                return t.prototype.refreshWorldTransform = function() {
                    this.root3D._computeWorldMatrixRecursive(!0), this.root2Ds.forEach((function(t) {
                        t._computeWorldMatrixRecursive(!0)
                    }))
                }, t.prototype.setEntityRoot3D = function(t) {
                    this.root3D = t, this.root3Ds.push(t)
                }, t.prototype.setEntityRoot2D = function(t) {
                    this.root2Ds.push(t)
                }, t.prototype.entityAddChild = function(t, e) {
                    t.addChild(e)
                }, t.prototype.entityAddChildAtIndex = function(t, e, i) {
                    t.addChildAtIndex(e, i)
                }, t.prototype.entityRemoveFromParent = function(t) {
                    t.parent && t.parent.removeChild(t)
                }, t
            }();
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(21)),
                o = n.__importDefault(i(22)),
                a = n.__importDefault(i(48)),
                s = function(t) {
                    function e(e, i, n) {
                        var o = t.call(this) || this;
                        return o._localMatrix = r.default.IDENTITY, o._raw = e, o._rawU32 = i, o._offset = n, o.localRotationOffset = o._offset + a.default.OFFSET_ROTATION, o.localPositionOffset = o._offset + a.default.OFFSET_POSITION, o.localScaleOffset = o._offset + a.default.OFFSET_SCALE, o.worldMatrixOffset = o._offset + a.default.OFFSET_WORLDMATRIX, o
                    }
                    return n.__extends(e, t), Object.defineProperty(e.prototype, "localPosition", {
                        get: function() {
                            return this._localPosition || (this._localPosition = o.default.createFromTypedArray(this._raw, this.localPositionOffset)), this._localPosition
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "localRotation", {
                        get: function() {
                            return this._raw[this.localRotationOffset]
                        },
                        set: function(t) {
                            this._raw[this.localRotationOffset] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "localScale", {
                        get: function() {
                            return this._localScale || (this._localScale = o.default.createFromTypedArray(this._raw, this.localScaleOffset)), this._localScale
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "worldMatrix", {
                        get: function() {
                            return this._worldMatrix || (this._worldMatrix = r.default.createFromTypedArray(this._raw, this.worldMatrixOffset)), this._worldMatrix
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype._computeWorldMatrixRecursive = function(t) {
                        var e = this._culLocalTransform(),
                            i = t || e;
                        if (i) {
                            var n = this.parent;
                            n ? n.worldMatrix.multiply(this._localMatrix, this.worldMatrix) : this.worldMatrix._raw.set(this._localMatrix._raw, this.worldMatrix._offset)
                        }
                        this._isWorldMatrixDirty = !0;
                        for (var r = 0, o = this.children; r < o.length; r++) {
                            var a = o[r];
                            a.active && a._computeWorldMatrixRecursive(i)
                        }
                    }, e.prototype._culLocalTransform = function() {
                        var t = this._isLocalMatrixDirty;
                        if (t) {
                            var e = this.localPosition,
                                i = this.localRotation,
                                n = this.localScale;
                            r.default.IDENTITY.translate(e.x, e.y, this._localMatrix).rotate(i, this._localMatrix).scale(n.x, n.y, this._localMatrix), this._isLocalMatrixDirty = !1
                        }
                        return t
                    }, e
                }(n.__importDefault(i(68)).default);
            e.default = s
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t() {
                    this.children = [], this.parent = null, this.components = [], this.id = 0, this.active = !0, this._isLocalMatrixDirty = !1, this._isWorldMatrixDirty = !1
                }
                return t.prototype.setLocalMatrixDirty = function() {
                    this._isLocalMatrixDirty = !0
                }, t.prototype._computeWorldMatrixRecursive = function(t) {}, t.prototype.bindComponet = function(t) {
                    this.components.push(t), t.entity = this, t._onAdd()
                }, t.prototype.unbindComponent = function(t) {
                    var e = this.components.indexOf(t);
                    (t.entity || -1 !== e) && (this.components.splice(e, 1), t.entity = null, t._onDestroy())
                }, t.prototype.getComponent = function(t) {
                    var e = this.getAllComponents(t);
                    return e.length ? e[0] : void 0
                }, t.prototype.getAllComponents = function(t) {
                    return this.components.filter((function(e) {
                        return e instanceof t
                    })) || []
                }, t.prototype.travelChild = function(t) {
                    t(this);
                    for (var e = 0; e < this.children.length; e++) this.children[e].travelChild(t)
                }, t.prototype.addChild = function(t) {
                    this.addChildAtIndex(t, this.children.length)
                }, t.prototype.addChildAtIndex = function(t, e) {
                    t.parent && t.parent.removeChild(t), -1 === this.children.indexOf(t) && (e >= this.children.length ? this.children.push(t) : this.children.splice(e, 0, t), t.parent = this)
                }, t.prototype.removeChild = function(t) {
                    var e = this.children.indexOf(t);
                    e > -1 && this.children.splice(e, 1)
                }, t.prototype.removeFromParent = function() {
                    this.parent && this.parent.removeChild(this)
                }, t.prototype.destroy = function() {
                    for (var t = 0, e = this.components; t < e.length; t++) {
                        var i = e[t];
                        i._onDestroy(), i.entity = null
                    }
                    this.components = [], this.parent && this.parent.removeChild(this), this.parent = null
                }, t.prototype.clear = function() {
                    for (var t = 0, e = this.components; t < e.length; t++) {
                        var i = e[t];
                        i._onDestroy(), i.entity = null
                    }
                    this.components = [], this.parent && this.parent.removeChild(this), this.parent = null;
                    for (var n = 0, r = this.children; n < r.length; n++) {
                        r[n].clear()
                    }
                }, t
            }();
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(44)),
                o = n.__importDefault(i(61)),
                a = n.__importDefault(i(45)),
                s = n.__importDefault(i(68)),
                u = n.__importDefault(i(49)),
                f = function(t) {
                    function e(e, i, n) {
                        var o = t.call(this) || this;
                        return o._localMatrix = r.default.IDENTITY, o._cullableComps = [], o._linkEntity = null, o._linkBoneEntity = null, o._raw = e, o._rawU32 = i, o._offset = n, o.localRotationTypeOffset = o._offset + u.default.OFFSET_ROTATIONTYPE, o.localQuaternionOffset = o._offset + u.default.OFFSET_ROTATION, o.localPositionOffset = o._offset + u.default.OFFSET_POSITION, o.localScaleOffset = o._offset + u.default.OFFSET_SCALE, o.worldMatrixOffset = o._offset + u.default.OFFSET_WORLDMATRIX, o
                    }
                    return n.__extends(e, t), Object.defineProperty(e.prototype, "localPosition", {
                        get: function() {
                            return this._localPosition || (this._localPosition = a.default.createFromTypedArray(this._raw, this.localPositionOffset)), this._localPosition
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "localQuaternion", {
                        get: function() {
                            return this._localQuaternion || (this._localQuaternion = new o.default(this._raw, this.localQuaternionOffset)), this._localQuaternion
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "localScale", {
                        get: function() {
                            return this._localScale || (this._localScale = a.default.createFromTypedArray(this._raw, this.localScaleOffset)), this._localScale
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "worldMatrix", {
                        get: function() {
                            return this._worldMatrix || (this._worldMatrix = r.default.createFromTypedArray(this._raw, this.worldMatrixOffset)), this._worldMatrix
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype._refreshWorldTransform = function() {
                        var t = this.parent;
                        t && t._refreshWorldTransform();
                        this._culLocalTransform();
                        t ? t.worldMatrix.multiply(this._localMatrix, this.worldMatrix) : this.worldMatrix._raw.set(this._localMatrix._raw, this.worldMatrix._offset), this._isWorldMatrixDirty = !0
                    }, e.prototype._computeWorldMatrixRecursive = function(t) {
                        var e = this._culLocalTransform(),
                            i = t || e;
                        if (i) {
                            var n = this.parent;
                            n ? n.worldMatrix.multiply(this._localMatrix, this.worldMatrix) : this.worldMatrix._raw.set(this._localMatrix._raw, this.worldMatrix._offset), this._linkEntity && this._SyncTransform(), this._isWorldMatrixDirty = !0
                        }
                        for (var r = 0, o = this.children; r < o.length; r++) {
                            var a = o[r];
                            a.active && a._computeWorldMatrixRecursive(i)
                        }
                    }, e.prototype._culLocalTransform = function() {
                        var t = this._isLocalMatrixDirty;
                        if (t) {
                            if (this.isUsingEuler());
                            else {
                                var e = this.localPosition,
                                    i = this.localQuaternion,
                                    n = this.localScale;
                                r.default.composeTQS(e, i, n, this._localMatrix)
                            }
                            this._isLocalMatrixDirty = !1
                        }
                        return t
                    }, e.prototype._SyncTransform = function() {
                        var t = this.worldMatrix,
                            e = a.default.ZERO,
                            i = a.default.ZERO,
                            n = r.default.IDENTITY;
                        if (t.decomposeTransRotMatScale(e, n, i), this._linkEntity) {
                            this._linkEntity.localPosition.set(e), this._linkEntity.localScale.set(i);
                            var s = o.default.createFromMatrix4(n);
                            this._linkEntity.isUsingEuler() || this._linkEntity.localQuaternion.set(s), this._linkEntity._isLocalMatrixDirty = !0
                        }
                    }, e.prototype.setUsingEuler = function(t) {
                        t ? this._rawU32[this.localRotationTypeOffset] &= ~u.default.DF_ROTATIONTYPE : this._rawU32[this.localRotationTypeOffset] |= u.default.DF_ROTATIONTYPE
                    }, e.prototype.isUsingEuler = function() {
                        return 0 == (this._rawU32[this.localRotationTypeOffset] & u.default.DF_ROTATIONTYPE)
                    }, e
                }(s.default);
            e.default = f
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(67)),
                o = function(t) {
                    function e(e) {
                        var i = t.call(this, e) || this;
                        i.entitis = [];
                        for (var n = 0; n < e.entityLength; n++) {
                            var o = new r.default(e._f32view, e._u32view, n * e.objectSize);
                            i.entitis.push(o)
                        }
                        return i
                    }
                    return n.__extends(e, t), e
                }(n.__importDefault(i(71)).default);
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(t) {
                    this.entitis = []
                }
                return t.prototype.setLocalMatrixDirtyAll = function() {
                    for (var t = 0; t < this.entitis.length; t++) {
                        this.entitis.length[t].setLocalMatrixDirty()
                    }
                }, t
            }();
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(69)),
                o = function(t) {
                    function e(e) {
                        var i = t.call(this, e) || this;
                        i.entitis = [];
                        for (var n = 0; n < e.entityLength; n++) {
                            var o = new r.default(e._f32view, e._u32view, n * e.objectSize);
                            i.entitis.push(o)
                        }
                        return i
                    }
                    return n.__extends(e, t), e
                }(n.__importDefault(i(71)).default);
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t() {
                    this._animationClipCount = 0, this._nodeCount = 0, this._animationClipModels = [], this._frameIndexs = [], this._blendWeight = [], this._entityIds = {}
                }
                return t.prototype._getNeedMemorySize = function() {
                    return 4 * this.nodeCount * this.animationClipCount
                }, Object.defineProperty(t.prototype, "animationClipCount", {
                    get: function() {
                        return this._animationClipCount
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "nodeCount", {
                    get: function() {
                        return this._nodeCount
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.getAnimationParamater = function(t) {
                    return {
                        animationClipId: this._animationClipModels[t].id,
                        frameIndex: this._frameIndexs[t],
                        percentage: this._blendWeight[t]
                    }
                }, t.prototype.bindAnimations = function(t, e, i) {
                    this._entityIds = {}, this._animationClipModels = t, this._frameIndexs = new Array(t.length), this._blendWeight = new Array(t.length);
                    var n = e.length;
                    for (var r in e) n += e[r].length;
                    this._animationClipCount = t.length, this._nodeCount = n;
                    var o, a = 0;
                    for (r = 0; r < e.length; r++) {
                        for (var s = 0; s < e[r].length; s++) e[r][s] && (this._entityIds[a + s] = e[r][s], o || (o = e[r][s]));
                        a += e[r].length
                    }
                    null != i && i.id ? this.culEntity3DTreeNode = i : o && (this.culEntity3DTreeNode = o)
                }, t.prototype.setClipParams = function(t, e, i) {
                    this._frameIndexs[t] = e, this._blendWeight[t] = i
                }, t.prototype.getEntity = function(t) {
                    return this._entityIds[t]
                }, t
            }();
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1).__importDefault(i(44)),
                r = function() {
                    function t() {
                        this._boneInverseModelId = 0, this._boneNum = 0
                    }
                    return t.prototype._getNeedMemorySize = function() {
                        return 18 * this._boneNum * 4
                    }, t.prototype.setBoneMatrix = function(t, e, i, r) {
                        if (i.length === e && r.length === e) {
                            this._boneInverseModelId = t.id, this._boneNum = e, this.boneIndices = i, this.boneEntities = r;
                            var o = new ArrayBuffer(this._getNeedMemorySize());
                            this.outputBoneInverseMatrixs = new Array(e);
                            for (var a = 0; a < e; a++) {
                                var s = new Float32Array(o, 2 * e * 4 + 64 * a, 16);
                                this.outputBoneInverseMatrixs[a] = n.default.createFromTypedArray(s)
                            }
                            this._boneOffsetMatrices = new Float32Array(o, 2 * this._boneNum * 4, 16 * this._boneNum)
                        } else console.warn("setBoneMatrix Error")
                    }, t.prototype.getBoneNum = function() {
                        return this._boneNum
                    }, t.prototype.getBoneInverseModelId = function() {
                        return this._boneInverseModelId
                    }, t.prototype.getBoneIndices = function(t) {
                        return this.boneIndices[t]
                    }, t.prototype.getBoneEntity = function(t) {
                        return this.boneEntities[t]
                    }, t.prototype.getBoneOffsetMatrices = function() {
                        return this._boneOffsetMatrices
                    }, t
                }();
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(t) {
                    this.entity = null, this._componetModel = t
                }
                return t.prototype.destroy = function() {
                    if (this.entity) {
                        var t = this.entity,
                            e = t.components.indexOf(this);
                        e > -1 && (t.components.splice(e, 1), this._onDestroy())
                    }
                }, t.prototype._onAdd = function() {
                    this.entity._cullableComps.push(this)
                }, t.prototype._onDestroy = function() {
                    if (this.entity) {
                        var t = this.entity._cullableComps,
                            e = t.indexOf(this); - 1 !== e && t.splice(e, 1)
                    }
                }, Object.defineProperty(t.prototype, "active", {
                    get: function() {
                        return this._componetModel.getActive()
                    },
                    set: function(t) {
                        this._componetModel.setActive(t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "cullMask", {
                    get: function() {
                        return this._componetModel.getCullMask()
                    },
                    set: function(t) {
                        this._componetModel.setCullMask(t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "boundingBallCenter", {
                    get: function() {
                        return this._componetModel.getBoundingBallCenter()
                    },
                    set: function(t) {
                        this._componetModel.setBoundingBallCenter(t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "boundingBallRadius", {
                    get: function() {
                        return this._componetModel.getBoundingBallRadius()
                    },
                    set: function(t) {
                        this._componetModel.setBoundingBallRadius(t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.bindEntity = function(t) {
                    this.entity = t, this.entity.bindComponet(this)
                }, t.prototype.unbindEntity = function() {
                    this.entity.unbindComponent(this)
                }, t
            }();
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(44)),
                o = n.__importDefault(i(45)),
                a = n.__importDefault(i(61)),
                s = function(t, e) {
                    Object.defineProperty(t, e, {
                        get: function() {
                            return this._phys3D[e]
                        },
                        set: function() {}
                    })
                };

            function u(t, e, i) {
                return void 0 === i && (i = 1e-5), Math.abs(t - e) < i
            }
            var f = function() {
                function t(t, e, i) {
                    this._reverseBindMap = new WeakMap, this._bindMap = new WeakMap, this._colliderToEntityMap = new WeakMap, this._ccReverseBindMap = new WeakMap, this._ccbindMap = new WeakMap, this._colliderSet = new Set, this._phys3D = t, this._ga = e, this._isNative = i, this._isNative || (this._mock = e._getMockAccelerateWorker())
                }
                return t.prototype.clear = function() {
                    this._reverseBindMap = new WeakMap, this._bindMap = new WeakMap, this._colliderToEntityMap = new WeakMap, this._ccReverseBindMap = new WeakMap, this._ccbindMap = new WeakMap, this._colliderSet.clear()
                }, t.prototype.bindRigidbodyToEntity = function(t, e, i) {
                    if (this._isNative) t.AttachToEntity(e._nativePool._nativeObj, e._nativeId);
                    else {
                        var n = this._mock.entity2mock.get(e);
                        this._bindMap.set(t, n), this._reverseBindMap.set(n, t)
                    }
                }, t.prototype.bindColliderToEntity = function(t, e) {
                    if (!this._isNative) {
                        var i = this._mock.entity2mock.get(e);
                        this._colliderToEntityMap.set(t, i), this._colliderSet.add(t)
                    }
                }, t.prototype.bindCCToEntity = function(t, e) {
                    if (this._isNative) t.AttachToEntity(e._nativePool._nativeObj, e._nativeId);
                    else {
                        var i = this._mock.entity2mock.get(e);
                        this._ccbindMap.set(t, i), this._ccReverseBindMap.set(i, t), this._alignCCWithEntity(t, i)
                    }
                }, t.prototype.unbindCCT = function(t) {
                    if (!this._isNative) {
                        var e = this._ccbindMap.get(t);
                        e && this._ccReverseBindMap.delete(e), this._ccbindMap.delete(t)
                    }
                }, t.prototype._alignCCWithEntity = function(t, e) {
                    var i = e.worldMatrix,
                        n = o.default.ZERO,
                        s = o.default.ZERO,
                        u = r.default.IDENTITY;
                    i.decomposeTransRotMatScale(n, u, s);
                    a.default.createFromMatrix4(u);
                    t.position = new this._phys3D.RawVec3f(n.x, n.y, n.z)
                }, t.prototype._alignRigidbodyWithEntity = function(t, e) {
                    var i = e.worldMatrix,
                        n = o.default.ZERO,
                        s = o.default.ZERO,
                        u = r.default.IDENTITY;
                    i.decomposeTransRotMatScale(n, u, s);
                    var f = a.default.createFromMatrix4(u);
                    t.position = new this._phys3D.RawVec3f(n.x, n.y, n.z), t.rotation = new this._phys3D.RawQuaternion(f.x, f.y, f.z, f.w)
                }, t.prototype.alignRigidbodyWithEntity = function(t, e) {
                    var i = this._mock.entity2mock.get(e);
                    this._alignRigidbodyWithEntity(t, i)
                }, t.prototype.unbindRigidbody = function(t) {
                    if (this._isNative) t.Detach();
                    else {
                        var e = this._bindMap.get(t);
                        e && this._reverseBindMap.delete(e), this._bindMap.delete(t)
                    }
                }, t.prototype.unbindCollider = function(t) {
                    this._isNative || (this._colliderSet.delete(t), this._colliderToEntityMap.delete(t))
                }, t.prototype._syncForward = function() {
                    this.syncEntityScaleToPhysic(), this.recursivelySyncForwardEntity(this._mock._getEntitySystem().root3D)
                }, t.prototype.syncEntityScaleToPhysic = function() {
                    var t = this;
                    this._colliderSet.forEach((function(e) {
                        var i = t._colliderToEntityMap.get(e);
                        if (i._isWorldMatrixDirty) {
                            var n = i.worldMatrix,
                                a = o.default.ZERO,
                                s = o.default.ZERO,
                                f = r.default.IDENTITY;
                            n.decomposeTransRotMatScale(a, f, s);
                            var l = e.scale;
                            u(l.x, s.x) && u(l.y, s.y) && u(l.z, s.z) || (e.scale = new t._phys3D.RawVec3f(s.x, s.y, s.z))
                        }
                    }))
                }, t.prototype.recursivelySyncForwardEntity = function(t) {
                    var e = this;
                    if (t._isWorldMatrixDirty) {
                        var i = this._ccReverseBindMap.get(t),
                            n = this._reverseBindMap.get(t);
                        i && this._alignCCWithEntity(i, t), n && this._alignRigidbodyWithEntity(n, t), t._isWorldMatrixDirty = !1
                    }
                    t.children.forEach((function(t) {
                        e.recursivelySyncForwardEntity(t)
                    }))
                }, t.prototype._syncBack = function() {
                    this.recursivelySyncBackEntity(this._mock._getEntitySystem().root3D, !1)
                }, t.prototype.recursivelySyncCCBackEntity = function(t, e) {
                    var i = this;
                    if (void 0 === e && (e = !1), !this._isNative) {
                        var n = this._mock.entity2mock.get(t),
                            s = this._ccReverseBindMap.get(n);
                        if (s) {
                            var u = s.position,
                                f = (s.center, n.parent ? n.parent.worldMatrix : r.default.IDENTITY),
                                l = o.default.createFromNumber(u.x, u.y, u.z),
                                _ = n.localQuaternion,
                                c = r.default.composeTQS(l, _, n.localScale),
                                d = f.inverse().multiply(c),
                                h = r.default.IDENTITY;
                            d.decomposeTransRotMatScale(n.localPosition, h, o.default.ONE);
                            var p = a.default.createFromMatrix4(h);
                            n.localQuaternion.set(p), n.worldMatrix.set(c), r.default.composeTQS(n.localPosition, n.localQuaternion, n.localScale, n._localMatrix), e = !0
                        } else if (e) {
                            f = n.parent ? n.parent.worldMatrix : r.default.IDENTITY;
                            n.worldMatrix.set(f.multiply(n._localMatrix))
                        }
                        n.children.forEach((function(t) {
                            i.recursivelySyncBackEntity(t, e)
                        }))
                    }
                }, t.prototype.recursivelySyncBackEntity = function(t, e) {
                    var i = this,
                        n = this._reverseBindMap.get(t);
                    if (n) {
                        var s = t.parent ? t.parent.worldMatrix : r.default.IDENTITY,
                            u = o.default.createFromNumber(n.position.x, n.position.y, n.position.z),
                            f = a.default.createFromNumber(n.rotation.x, n.rotation.y, n.rotation.z, n.rotation.w),
                            l = r.default.composeTQS(u, f, t.localScale),
                            _ = s.inverse().multiply(l),
                            c = r.default.IDENTITY;
                        _.decomposeTransRotMatScale(t.localPosition, c, o.default.ONE);
                        var d = a.default.createFromMatrix4(c);
                        t.localQuaternion.set(d), t.worldMatrix.set(l), r.default.composeTQS(t.localPosition, t.localQuaternion, t.localScale, t._localMatrix), e = !0
                    } else if (e) {
                        s = t.parent ? t.parent.worldMatrix : r.default.IDENTITY;
                        t.worldMatrix.set(s.multiply(t._localMatrix))
                    }
                    t._isWorldMatrixDirty = !1, t._isLocalMatrixDirty = !1, t.children.forEach((function(t) {
                        i.recursivelySyncBackEntity(t, e)
                    }))
                }, Object.defineProperty(t.prototype, "PhysSystem", {
                    get: function() {
                        var t = this;
                        return function(e) {
                            var i;
                            return i = e ? new t._phys3D.PhysSystem(e) : new t._phys3D.PhysSystem, t._isNative || (i._Simulate = i.Simulate, i.Simulate = function(e) {
                                t._syncForward(), i._Simulate(e), t._syncBack()
                            }), i
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "DynamicRigidbody", {
                    get: function() {
                        var t = this;
                        return function(e) {
                            var i = new t._phys3D.DynamicRigidbody(e);
                            return t._isNative || (i._isAttached = i.isAttached, i.isAttached = function() {
                                return t._bindMap.has(i)
                            }), i
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }), n.__decorate([s], t.prototype, "RawVec3f", void 0), n.__decorate([s], t.prototype, "RawVec2f", void 0), n.__decorate([s], t.prototype, "PhysMesh", void 0), n.__decorate([s], t.prototype, "Collider", void 0), n.__decorate([s], t.prototype, "MeshCollider", void 0), n.__decorate([s], t.prototype, "CombineMode", void 0), n.__decorate([s], t.prototype, "Material", void 0), n.__decorate([s], t.prototype, "CapsuleCollider", void 0), n.__decorate([s], t.prototype, "Joint", void 0), n.__decorate([s], t.prototype, "ContactPoint", void 0), n.__decorate([s], t.prototype, "Collision", void 0), n.__decorate([s], t.prototype, "SphereCollider", void 0), n.__decorate([s], t.prototype, "Bounds", void 0), n.__decorate([s], t.prototype, "StaticRigidbody", void 0), n.__decorate([s], t.prototype, "RawQuaternion", void 0), n.__decorate([s], t.prototype, "BoxCollider", void 0), n.__decorate([s], t.prototype, "RaycastHit", void 0), n.__decorate([s], t.prototype, "CharacterController", void 0), t
            }();
            e.default = f
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n, r = i(1).__importDefault(i(78));
            e.default = function() {
                if (n) return n;
                var t = r.default("phye");
                return t && t.Phys3D && (n = t), n
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pid = void 0;
            var n = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIfocuCk0FdG9zN9C6GqhJRVNG\n1FbJa8aUAZDawoCcwowIc/zMHRCl3srHUOQi3fjZpSObiVbvLidlWDSOw/rdBxbU\nG/4BqJFuIUQziCnqdRiCyYV2w9Z29/qNcKbr1gxmqXVgo0WRbkKlIFKGvSXFiVM3\nn49RQm2mgWsvqXn2vQIDAQAB\n-----END PUBLIC KEY-----",
                r = null,
                o = null;
            e.pid = 0;
            var a = !1;

            function s(t) {
                var e = o.readFileSync(t),
                    i = r("crypto").createHash("md5");
                return i.update(e), i.digest("hex")
            }

            function u(t, e) {
                return !!e && function(t, e) {
                    var i = window.Buffer.from(e, "base64"),
                        o = r("crypto").createVerify("RSA-SHA1");
                    return o.update(t), !!o.verify(n, i)
                }(s(t), e)
            }

            function f(t) {
                if (!r) return null;
                var e, i = !1,
                    n = window.__devtoolsConfig || window.top.__devtoolsConfig || {};
                if (n.__runtimeLibConfigPath && (e = n.__runtimeLibConfigPath, i = n.appConfig.isDev), !e) throw new Error("cannot find runtimeLibConfigPath");
                var o = r(e);
                if (!o) throw new Error("connot find lib config");
                if (!Object.keys(o).includes(t)) throw new Error("the mod cannot be require");
                var a = o[t],
                    f = a.path,
                    l = a.signature,
                    _ = a.distMd5;
                if (!i) {
                    var c = !1;
                    if (l ? c = u(f, l) : _ && (c = function(t, e) {
                            return !!e && s(t) === e
                        }(f, _)), !c) throw new Error("node addon is not safe!")
                }
                return r(f)
            }
            e.default = function(t) {
                return console.log("require module: " + t),
                    function() {
                        if (!a && (a = !0, window.__global && window.__global.require)) try {
                            if (r = window.__global.require, delete window.__global.require, !(o = r("fs")) || !o.readFileSync) throw new Error;
                            e.pid = r("process").pid
                        } catch (t) {
                            o = null, r = null
                        }
                    }(), f(t)
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.nativeValue2Native = void 0, e.nativeValue2Native = new WeakMap;
            var n = function(t) {
                this._native = t, this.data = this._native.data, e.nativeValue2Native.set(this, t)
            };
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1),
                r = n.__importDefault(i(81)),
                o = n.__importDefault(i(87)),
                a = n.__importStar(i(89)),
                s = n.__importDefault(i(82)),
                u = n.__importDefault(i(88)),
                f = n.__importDefault(i(83)),
                l = n.__importStar(i(84)),
                _ = n.__importDefault(i(85)),
                c = n.__importDefault(i(86)),
                d = function() {
                    function t(t, e) {
                        this._native = t, e.isRenderNative ? (this.createRenderDraw = this.createRenderDrawAccelerate.bind(this), this.createCommandBuffer = this.createCommandBufferAccelerate.bind(this)) : (this.createRenderDraw = this.createRenderDrawLocal.bind(this), this.createCommandBuffer = this.createCommandBufferLocal.bind(this))
                    }
                    return t.prototype.createCommandBufferAccelerate = function(t, e) {
                        return new o.default(this._native, t, e)
                    }, t.prototype.createCommandBufferLocal = function() {
                        var t = this._native.createCommandBuffer();
                        return new r.default(t)
                    }, t.prototype.createRect = function(t, e, i, n) {
                        var r = this._native.createRect(t, e, i, n);
                        return new a.default(r)
                    }, t.prototype.createRenderDrawLocal = function() {
                        var t = this._native.createRenderDraw();
                        return new s.default(t)
                    }, t.prototype.createRenderDrawAccelerate = function() {
                        var t = this._native.createRenderDraw();
                        return new u.default(t)
                    }, t.prototype.createVertexLayout = function(t) {
                        var e = this._native.createVertexLayout(JSON.stringify(t));
                        return new l.default(e)
                    }, t.prototype.createRenderView = function(t, e, i, n) {
                        var r = t || 0,
                            o = this._native.createView(r, e, a.rect2Native.get(i), a.rect2Native.get(n));
                        return new f.default(o)
                    }, t.prototype.createBatchableVertexBuffer = function(t, e) {
                        var i = this._native.createBatchableVertexBuffer(t, l.vertexLayout2Native.get(e));
                        return new _.default(i)
                    }, t.prototype.createBatchableIndexBuffer = function(t) {
                        var e = this._native.createBatchableIndexBuffer(t);
                        return new c.default(e)
                    }, t
                }();
            e.default = d
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.commandBuffer2Native = void 0;
            var n = i(82);
            e.commandBuffer2Native = new WeakMap;
            var r = function() {
                function t(t) {
                    this._native = t, e.commandBuffer2Native.set(this, t)
                }
                return t.prototype.putRenderDraw = function(t) {
                    this._native.putRenderDraw(n.renderDraw2Native.get(t))
                }, t.prototype.batchPutRenderDraw = function(t, e) {
                    e = void 0 !== e ? e : t.length;
                    for (var i = 0; i < e; i++) {
                        var r = t[i];
                        this._native.putRenderDraw(n.renderDraw2Native.get(r))
                    }
                }, t.prototype.putSubCommandBuffer = function(t) {
                    this._native.putSubCommandBuffer(t._native)
                }, t.prototype.reset = function() {
                    this._native.reset()
                }, t.prototype.execute = function() {
                    this._native.execute()
                }, t
            }();
            e.default = r
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.renderDraw2Native = void 0;
            var n = i(1),
                o = i(79),
                a = n.__importDefault(i(18)),
                s = i(83),
                u = i(84),
                f = i(85),
                l = i(86);
            e.renderDraw2Native = new WeakMap;
            var _ = {
                    raster: a.default.WRITE_SET(r.EnumIndexType.UINT16, a.default.INDEX_TYPE_MASK, a.default.INDEX_TYPE_SHIFT) | a.default.WRITE_SET(r.EnumCullMode.BACK, a.default.CULL_MODE_MASK, a.default.CULL_MODE_SHIFT) | a.default.WRITE_SET(r.EnumPrimitiveType.TRIANGLES, a.default.PRIMITIVE_TYPE_MASK, a.default.PRIMITIVE_TYPE_SHIFT) | a.default.WRITE_SET(r.EnumFaceWinding.CW, a.default.FACE_WINDING_MASK, a.default.FACE_WINDING_SHIFT),
                    stencilDepth: a.default.WRITE_SET(1, a.default.DEPTH_WRITE_ENABLE_FUNC_MASK, a.default.DEPTH_WRITE_ENABLE_FUNC_SHIFT) | a.default.WRITE_SET(r.EnumCompareFunc.LESS_EQUAL, a.default.DEPTH_COMPARE_FUNC_MASK, a.default.DEPTH_COMPARE_FUNC_SHIFT)
                },
                c = function() {
                    function t(t) {
                        this._native = t, e.renderDraw2Native.set(this, t), Object.assign(this._native, _)
                    }
                    return Object.defineProperty(t.prototype, "renderView", {
                        set: function(t) {
                            this._native.view = s.renderView2Native.get(t)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "shader", {
                        set: function(t) {
                            this._native.shader = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "vertexLayout", {
                        set: function(t) {
                            this._native.vertexLayout = u.vertexLayout2Native.get(t)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "indexBuffer", {
                        set: function(t) {
                            this._native.indexBuffer = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "vertexBuffers", {
                        set: function(t) {
                            this._native.vertexBuffers = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "nativeValues", {
                        set: function(t) {
                            for (var e = [], i = 0, n = t; i < n.length; i++) {
                                var r = n[i];
                                e.push(o.nativeValue2Native.get(r))
                            }
                            this._native.nativeValues = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "images", {
                        set: function(t) {
                            this._native.images = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "baseElement", {
                        set: function(t) {
                            this._native.baseElement = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "numElements", {
                        set: function(t) {
                            this._native.numElements = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.applyUpdate = function() {
                        this._native.applyUpdate()
                    }, t.prototype.setBlendOn = function(t) {
                        this._native.blend &= ~a.default.BLEND_ENABLE_MASK, t && (this._native.blend |= a.default.WRITE_SET(1, a.default.BLEND_ENABLE_MASK, a.default.BLEND_ENABLE_SHIFT))
                    }, t.prototype.setBlendMode = function(t, e, i) {
                        this.setBlendModeSeparate(t, t, e, e, i, i)
                    }, t.prototype.setBlendModeSeparate = function(t, e, i, n, r, o) {
                        this._native.blend &= ~(a.default.BLEND_OP_RGB_MASK | a.default.BLEND_OP_ALPHA_MASK | a.default.BLEND_SRC_FACTOR_RGB_MASK | a.default.BLEND_SRC_FACTOR_ALPHA_MASK | a.default.BLEND_DST_FACTOR_RGB_MASK | a.default.BLEND_DST_FACTOR_ALPHA_MASK), this._native.blend |= a.default.WRITE_SET(r, a.default.BLEND_OP_RGB_MASK, a.default.BLEND_OP_RGB_SHIFT) | a.default.WRITE_SET(o, a.default.BLEND_OP_ALPHA_MASK, a.default.BLEND_OP_ALPHA_SHIFT) | a.default.WRITE_SET(t, a.default.BLEND_SRC_FACTOR_RGB_MASK, a.default.BLEND_SRC_FACTOR_RGB_SHIFT) | a.default.WRITE_SET(e, a.default.BLEND_SRC_FACTOR_ALPHA_MASK, a.default.BLEND_SRC_FACTOR_ALPHA_SHIFT) | a.default.WRITE_SET(i, a.default.BLEND_DST_FACTOR_RGB_MASK, a.default.BLEND_DST_FACTOR_RGB_SHIFT) | a.default.WRITE_SET(n, a.default.BLEND_DST_FACTOR_ALPHA_MASK, a.default.BLEND_DST_FACTOR_ALPHA_SHIFT)
                    }, t.prototype.setColorMask = function(t) {
                        this._native.blend &= ~a.default.COLOR_WRITE_MASK, this._native.blend |= a.default.WRITE_SET(t, a.default.COLOR_WRITE_MASK, a.default.COLOR_WRITE_SHIFT)
                    }, t.prototype.setDepthWriteOn = function(t) {
                        this._native.stencilDepth &= ~a.default.DEPTH_WRITE_ENABLE_FUNC_MASK, t && (this._native.stencilDepth |= a.default.WRITE_SET(1, a.default.DEPTH_WRITE_ENABLE_FUNC_MASK, a.default.DEPTH_WRITE_ENABLE_FUNC_SHIFT))
                    }, t.prototype.setDepthTest = function(t) {
                        this._native.stencilDepth &= ~a.default.DEPTH_COMPARE_FUNC_MASK, this._native.stencilDepth |= a.default.WRITE_SET(t, a.default.DEPTH_COMPARE_FUNC_MASK, a.default.DEPTH_COMPARE_FUNC_SHIFT)
                    }, t.prototype.setStencilTestOn = function(t) {
                        this._native.stencilDepth &= ~a.default.STENCIL_ENABLE_FUNC_MASK, t && (this._native.stencilDepth |= a.default.WRITE_SET(1, a.default.STENCIL_ENABLE_FUNC_MASK, a.default.STENCIL_ENABLE_FUNC_SHIFT))
                    }, t.prototype.setStencilWriteMask = function(t) {
                        this._native.stencilDepth &= ~a.default.STENCIL_WRITE_MASK, this._native.stencilDepth |= a.default.WRITE_SET(t, a.default.STENCIL_WRITE_MASK, a.default.STENCIL_WRITE_SHIFT)
                    }, t.prototype.setStencilReadMask = function(t) {
                        this._native.stencilDepth &= ~a.default.STENCIL_READ_MASK, this._native.stencilDepth |= a.default.WRITE_SET(t, a.default.STENCIL_READ_MASK, a.default.STENCIL_READ_SHIFT)
                    }, t.prototype.setStencilRef = function(t) {
                        this._native.stencilDepth &= ~a.default.STENCIL_REF_MASK, this._native.stencilDepth |= a.default.WRITE_SET(t, a.default.STENCIL_REF_MASK, a.default.STENCIL_REF_SHIFT)
                    }, t.prototype.setStencilTestMode = function(t, e, i, n) {
                        var r = a.default.WRITE_SET(t, a.default.STENCIL_FRONT_COMPARE_FUN_MASK, a.default.STENCIL_FRONT_COMPARE_FUN_SHIFT) | a.default.WRITE_SET(e, a.default.STENCIL_FRONT_FAIL_OP_MASK, a.default.STENCIL_FRONT_FAIL_OP_SHIFT) | a.default.WRITE_SET(i, a.default.STENCIL_FRONT_DEPTH_FAIL_OP_MASK, a.default.STENCIL_FRONT_DEPTH_FAIL_OP_SHIFT) | a.default.WRITE_SET(n, a.default.STENCIL_FRONT_PASS_OP_MASK, a.default.STENCIL_FRONT_PASS_OP_SHIFT);
                        this._native.stencilOpTest = r + (r << 16 >>> 0)
                    }, t.prototype.setStencilTestModeSeparate = function(t, e, i, n, r, o, s, u) {
                        this._native.stencilOpTest = 0, this._native.stencilOpTest = a.default.WRITE_SET(t, a.default.STENCIL_FRONT_COMPARE_FUN_MASK, a.default.STENCIL_FRONT_COMPARE_FUN_SHIFT) | a.default.WRITE_SET(e, a.default.STENCIL_FRONT_FAIL_OP_MASK, a.default.STENCIL_FRONT_FAIL_OP_SHIFT) | a.default.WRITE_SET(i, a.default.STENCIL_FRONT_DEPTH_FAIL_OP_MASK, a.default.STENCIL_FRONT_DEPTH_FAIL_OP_SHIFT) | a.default.WRITE_SET(n, a.default.STENCIL_FRONT_PASS_OP_MASK, a.default.STENCIL_FRONT_PASS_OP_SHIFT) | a.default.WRITE_SET_SAFE(r, a.default.STENCIL_BACK_COMPARE_FUN_MASK, a.default.STENCIL_BACK_COMPARE_FUN_SHIFT) | a.default.WRITE_SET(o, a.default.STENCIL_BACK_FAIL_OP_MASK, a.default.STENCIL_BACK_FAIL_OP_SHIFT) | a.default.WRITE_SET(s, a.default.STENCIL_BACK_DEPTH_FAIL_OP_MASK, a.default.STENCIL_BACK_DEPTH_FAIL_OP_SHIFT) | a.default.WRITE_SET(u, a.default.STENCIL_BACK_PASS_OP_MASK, a.default.STENCIL_BACK_PASS_OP_SHIFT)
                    }, t.prototype.setCullMode = function(t) {
                        this._native.raster &= ~a.default.CULL_MODE_MASK, this._native.raster |= a.default.WRITE_SET(t, a.default.CULL_MODE_MASK, a.default.CULL_MODE_SHIFT)
                    }, t.prototype.setFaceWinding = function(t) {
                        this._native.raster &= ~a.default.FACE_WINDING_MASK, this._native.raster |= a.default.WRITE_SET(t, a.default.FACE_WINDING_MASK, a.default.FACE_WINDING_SHIFT)
                    }, t.prototype.setPrimitiveType = function(t) {
                        this._native.raster &= ~a.default.PRIMITIVE_TYPE_MASK, this._native.raster |= a.default.WRITE_SET(t, a.default.PRIMITIVE_TYPE_MASK, a.default.PRIMITIVE_TYPE_SHIFT)
                    }, t.prototype.setIndexType = function(t) {
                        this._native.raster &= ~a.default.INDEX_TYPE_MASK, this._native.raster |= a.default.WRITE_SET(t, a.default.INDEX_TYPE_MASK, a.default.INDEX_TYPE_SHIFT)
                    }, t.prototype.setPassDepthFormat = function(t) {
                        this._native.raster &= ~a.default.DEPTH_FORMAT_MASK, this._native.raster |= a.default.WRITE_SET(t, a.default.DEPTH_FORMAT_MASK, a.default.DEPTH_FORMAT_SHIFT)
                    }, t.prototype.setPassColorFormat = function(t, e) {
                        this._native.raster &= ~(a.default.COLOR_ATTACHMENT_COUNT_MASK | a.default.COLOR_FORMAT_MASK), this._native.raster |= a.default.WRITE_SET(t, a.default.COLOR_FORMAT_MASK, a.default.COLOR_FORMAT_SHIFT) | a.default.WRITE_SET(e, a.default.COLOR_ATTACHMENT_COUNT_MASK, a.default.COLOR_ATTACHMENT_COUNT_SHIFT)
                    }, t.prototype.setUnBatchable = function() {
                        this._native.batchable = !1, this._native.renderDataDirty = !1
                    }, t.prototype.setBatchable = function(t, e, i) {
                        this._native.batchable = !0, this._native.renderDataDirty = !0, this._native.vertexBuffers = [f.batchableVertexBuffer2Native.get(t)], this._native.indexBuffer = l.batchableIndexBuffer2Native.get(e), this._native.worldTransform = o.nativeValue2Native.get(i)
                    }, t.prototype.setBatchableRenderDataDirty = function() {
                        this._native.renderDataDirty = !0
                    }, t
                }();
            e.default = c
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.renderView2Native = void 0, e.renderView2Native = new WeakMap;
            var n = function(t) {
                this._native = t, e.renderView2Native.set(this, t)
            };
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.vertexLayout2Native = void 0, e.vertexLayout2Native = new WeakMap;
            var n = function(t) {
                this._native = t, e.vertexLayout2Native.set(this, t)
            };
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.batchableVertexBuffer2Native = void 0, e.batchableVertexBuffer2Native = new WeakMap;
            var n = function(t) {
                this._native = t, this.data = t.data, e.batchableVertexBuffer2Native.set(this, t)
            };
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.batchableIndexBuffer2Native = void 0, e.batchableIndexBuffer2Native = new WeakMap;
            var n = function(t) {
                this._native = t, this.data = t.data, e.batchableIndexBuffer2Native.set(this, t)
            };
            e.default = n
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n, r = i(88);
            ! function(t) {
                t[t.CommandRenderDraw = 1] = "CommandRenderDraw", t[t.CommandSubBuffer = 2] = "CommandSubBuffer"
            }(n || (n = {}));
            var o = function() {
                function t(t, e, i) {
                    if (this._bufferSize = 0, this._renderer = t, e && 0 != e || i && 0 != i) {
                        var n = e || 0,
                            r = i || 0;
                        this._initCommandBuffer(4 * (2 * n + 2 * r))
                    } else this._initCommandBuffer(1024)
                }
                return t.prototype.batchPutRenderDraw = function(t, e) {
                    var i = 2 * (e = void 0 !== e ? e : t.length) * 4;
                    this._checkSize(i);
                    for (var o = this._u32view[0] / 4 + 1, a = 0; a < e; a++) {
                        var s = t[a];
                        this._u32view[o] = n.CommandRenderDraw, this._u32view[o + 1] = r.renderDraw2Native.get(s).id, o += 2
                    }
                    for (var u = 0, f = t; u < f.length; u++) s = f[u];
                    this.setCommandSize(this._u32view[0] + i)
                }, t.prototype.putSubCommandBuffer = function(t) {
                    this._checkSize(8);
                    var e = this._u32view[0] / 4 + 1;
                    this._u32view[e] = n.CommandSubBuffer, this._u32view[e + 1] = t._native.id, this.setCommandSize(this._u32view[0] + 8)
                }, t.prototype.reset = function() {
                    this.setCommandSize(0)
                }, t.prototype.execute = function() {
                    this._native.execute()
                }, t.prototype._initCommandBuffer = function(t) {
                    this._native = this._renderer.createCommandBuffer(t), this._u32view = new Uint32Array(this._native.data, 0, this._native.data.byteLength / 4), this._bufferSize = t
                }, t.prototype._extendCommandBuffer = function(t) {
                    this._native.extend(t), this._u32view = new Uint32Array(this._native.data, 0, this._native.data.byteLength / 4), this._bufferSize = t
                }, t.prototype._checkSize = function(t) {
                    if (4 + this._u32view[0] + t > this._bufferSize) {
                        var e = 2 * (4 + this._u32view[0] + t);
                        this._extendCommandBuffer(e)
                    }
                }, t.prototype.setCommandSize = function(t) {
                    this._u32view[0] = t
                }, t
            }();
            e.default = o
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.renderDraw2Native = void 0;
            var n = i(1),
                o = i(79),
                a = n.__importDefault(i(18)),
                s = i(83),
                u = i(84),
                f = i(85),
                l = i(86);
            e.renderDraw2Native = new WeakMap;
            var _ = a.default.WRITE_SET(r.EnumIndexType.UINT16, a.default.INDEX_TYPE_MASK, a.default.INDEX_TYPE_SHIFT) | a.default.WRITE_SET(r.EnumCullMode.BACK, a.default.CULL_MODE_MASK, a.default.CULL_MODE_SHIFT) | a.default.WRITE_SET(r.EnumPrimitiveType.TRIANGLES, a.default.PRIMITIVE_TYPE_MASK, a.default.PRIMITIVE_TYPE_SHIFT) | a.default.WRITE_SET(r.EnumFaceWinding.CW, a.default.FACE_WINDING_MASK, a.default.FACE_WINDING_SHIFT),
                c = a.default.WRITE_SET(1, a.default.DEPTH_WRITE_ENABLE_FUNC_MASK, a.default.DEPTH_WRITE_ENABLE_FUNC_SHIFT) | a.default.WRITE_SET(r.EnumCompareFunc.LESS_EQUAL, a.default.DEPTH_COMPARE_FUNC_MASK, a.default.DEPTH_COMPARE_FUNC_SHIFT),
                d = new ArrayBuffer(200),
                h = new Uint32Array(d);
            h[8] = _, h[7] = c;
            var p = function() {
                function t(t) {
                    this._native = t, e.renderDraw2Native.set(this, t), this._u8view = new Uint8Array(this._native.data), this._u32View = new Uint32Array(this._native.data), this.clear()
                }
                return Object.defineProperty(t.prototype, "renderView", {
                    set: function(t) {
                        this._u32View[0] = s.renderView2Native.get(t).id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "shader", {
                    set: function(t) {
                        this._u32View[2] = t.id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "vertexLayout", {
                    set: function(t) {
                        this._u32View[3] = u.vertexLayout2Native.get(t).id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "indexBuffer", {
                    set: function(t) {
                        this._u32View[9] = t.id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "vertexBuffers", {
                    set: function(t) {
                        this._u32View.fill(0, 10, 14);
                        for (var e = 0; e < t.length; e++) this._u32View[10 + e] = t[e].id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "nativeValues", {
                    set: function(t) {
                        this._u32View.fill(0, 14, 30);
                        for (var e = 0; e < t.length; e++) this._u32View[14 + e] = o.nativeValue2Native.get(t[e]).id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "images", {
                    set: function(t) {
                        this._u32View.fill(0, 30, 46);
                        for (var e = 0; e < t.length; e++) this._u32View[30 + e] = t[e].id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "baseElement", {
                    set: function(t) {
                        this._u32View[46] = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "numElements", {
                    set: function(t) {
                        this._u32View[47] = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.applyUpdate = function() {}, t.prototype.clear = function() {
                    this._u32View.set(h)
                }, t.prototype.setBlendOn = function(t) {
                    this._u32View[4] &= ~a.default.BLEND_ENABLE_MASK, t && (this._u32View[4] |= a.default.WRITE_SET(1, a.default.BLEND_ENABLE_MASK, a.default.BLEND_ENABLE_SHIFT))
                }, t.prototype.setBlendMode = function(t, e, i) {
                    this.setBlendModeSeparate(t, t, e, e, i, i)
                }, t.prototype.setBlendModeSeparate = function(t, e, i, n, r, o) {
                    this._u32View[4] &= ~(a.default.BLEND_OP_RGB_MASK | a.default.BLEND_OP_ALPHA_MASK | a.default.BLEND_SRC_FACTOR_RGB_MASK | a.default.BLEND_SRC_FACTOR_ALPHA_MASK | a.default.BLEND_DST_FACTOR_RGB_MASK | a.default.BLEND_DST_FACTOR_ALPHA_MASK), this._u32View[4] |= a.default.WRITE_SET(r, a.default.BLEND_OP_RGB_MASK, a.default.BLEND_OP_RGB_SHIFT) | a.default.WRITE_SET(o, a.default.BLEND_OP_ALPHA_MASK, a.default.BLEND_OP_ALPHA_SHIFT) | a.default.WRITE_SET(t, a.default.BLEND_SRC_FACTOR_RGB_MASK, a.default.BLEND_SRC_FACTOR_RGB_SHIFT) | a.default.WRITE_SET(e, a.default.BLEND_SRC_FACTOR_ALPHA_MASK, a.default.BLEND_SRC_FACTOR_ALPHA_SHIFT) | a.default.WRITE_SET(i, a.default.BLEND_DST_FACTOR_RGB_MASK, a.default.BLEND_DST_FACTOR_RGB_SHIFT) | a.default.WRITE_SET(n, a.default.BLEND_DST_FACTOR_ALPHA_MASK, a.default.BLEND_DST_FACTOR_ALPHA_SHIFT)
                }, t.prototype.setColorMask = function(t) {
                    this._u32View[4] &= ~a.default.COLOR_WRITE_MASK, this._u32View[4] |= a.default.WRITE_SET(t, a.default.COLOR_WRITE_MASK, a.default.COLOR_WRITE_SHIFT)
                }, t.prototype.setDepthWriteOn = function(t) {
                    this._u32View[7] &= ~a.default.DEPTH_WRITE_ENABLE_FUNC_MASK, t && (this._u32View[7] |= a.default.WRITE_SET(1, a.default.DEPTH_WRITE_ENABLE_FUNC_MASK, a.default.DEPTH_WRITE_ENABLE_FUNC_SHIFT))
                }, t.prototype.setDepthTest = function(t) {
                    this._u32View[7] &= ~a.default.DEPTH_COMPARE_FUNC_MASK, this._u32View[7] |= a.default.WRITE_SET(t, a.default.DEPTH_COMPARE_FUNC_MASK, a.default.DEPTH_COMPARE_FUNC_SHIFT)
                }, t.prototype.setStencilTestOn = function(t) {
                    this._u32View[7] &= ~a.default.STENCIL_ENABLE_FUNC_MASK, t && (this._u32View[7] |= a.default.WRITE_SET(1, a.default.STENCIL_ENABLE_FUNC_MASK, a.default.STENCIL_ENABLE_FUNC_SHIFT))
                }, t.prototype.setStencilWriteMask = function(t) {
                    this._u32View[7] &= ~a.default.STENCIL_WRITE_MASK, this._u32View[7] |= a.default.WRITE_SET(t, a.default.STENCIL_WRITE_MASK, a.default.STENCIL_WRITE_SHIFT)
                }, t.prototype.setStencilReadMask = function(t) {
                    this._u32View[7] &= ~a.default.STENCIL_READ_MASK, this._u32View[7] |= a.default.WRITE_SET(t, a.default.STENCIL_READ_MASK, a.default.STENCIL_READ_SHIFT)
                }, t.prototype.setStencilRef = function(t) {
                    this._u32View[7] &= ~a.default.STENCIL_REF_MASK, this._u32View[7] |= a.default.WRITE_SET(t, a.default.STENCIL_REF_MASK, a.default.STENCIL_REF_SHIFT)
                }, t.prototype.setStencilTestMode = function(t, e, i, n) {
                    this.setStencilTestModeSeparate(t, e, i, n, t, e, i, n)
                }, t.prototype.setStencilTestModeSeparate = function(t, e, i, n, r, o, s, u) {
                    this._u32View[6] = 0, this._u32View[6] = a.default.WRITE_SET(t, a.default.STENCIL_FRONT_COMPARE_FUN_MASK, a.default.STENCIL_FRONT_COMPARE_FUN_SHIFT) | a.default.WRITE_SET(e, a.default.STENCIL_FRONT_FAIL_OP_MASK, a.default.STENCIL_FRONT_FAIL_OP_SHIFT) | a.default.WRITE_SET(i, a.default.STENCIL_FRONT_DEPTH_FAIL_OP_MASK, a.default.STENCIL_FRONT_DEPTH_FAIL_OP_SHIFT) | a.default.WRITE_SET(n, a.default.STENCIL_FRONT_PASS_OP_MASK, a.default.STENCIL_FRONT_PASS_OP_SHIFT) | a.default.WRITE_SET(r, a.default.STENCIL_BACK_COMPARE_FUN_MASK, a.default.STENCIL_BACK_COMPARE_FUN_SHIFT) | a.default.WRITE_SET(o, a.default.STENCIL_BACK_FAIL_OP_MASK, a.default.STENCIL_BACK_FAIL_OP_SHIFT) | a.default.WRITE_SET(s, a.default.STENCIL_BACK_DEPTH_FAIL_OP_MASK, a.default.STENCIL_BACK_DEPTH_FAIL_OP_SHIFT) | a.default.WRITE_SET(u, a.default.STENCIL_BACK_PASS_OP_MASK, a.default.STENCIL_BACK_PASS_OP_SHIFT)
                }, t.prototype.setCullMode = function(t) {
                    this._u32View[8] &= ~a.default.CULL_MODE_MASK, this._u32View[8] |= a.default.WRITE_SET(t, a.default.CULL_MODE_MASK, a.default.CULL_MODE_SHIFT)
                }, t.prototype.setFaceWinding = function(t) {
                    this._u32View[8] &= ~a.default.FACE_WINDING_MASK, this._u32View[8] |= a.default.WRITE_SET(t, a.default.FACE_WINDING_MASK, a.default.FACE_WINDING_SHIFT)
                }, t.prototype.setPrimitiveType = function(t) {
                    this._u32View[8] &= ~a.default.PRIMITIVE_TYPE_MASK, this._u32View[8] |= a.default.WRITE_SET(t, a.default.PRIMITIVE_TYPE_MASK, a.default.PRIMITIVE_TYPE_SHIFT)
                }, t.prototype.setIndexType = function(t) {
                    this._u32View[8] &= ~a.default.INDEX_TYPE_MASK, this._u32View[8] |= a.default.WRITE_SET(t, a.default.INDEX_TYPE_MASK, a.default.INDEX_TYPE_SHIFT)
                }, t.prototype.setPassDepthFormat = function(t) {
                    this._u32View[8] &= ~a.default.DEPTH_FORMAT_MASK, this._u32View[8] |= a.default.WRITE_SET(t, a.default.DEPTH_FORMAT_MASK, a.default.DEPTH_FORMAT_SHIFT)
                }, t.prototype.setPassColorFormat = function(t, e) {
                    this._u32View[8] &= ~(a.default.COLOR_ATTACHMENT_COUNT_MASK | a.default.COLOR_FORMAT_MASK), this._u32View[8] |= a.default.WRITE_SET(t, a.default.COLOR_FORMAT_MASK, a.default.COLOR_FORMAT_SHIFT) | a.default.WRITE_SET(e, a.default.COLOR_ATTACHMENT_COUNT_MASK, a.default.COLOR_ATTACHMENT_COUNT_SHIFT)
                }, t.prototype.setUnBatchable = function() {
                    this._u8view[192] = 0, this._u8view[193] = 0
                }, t.prototype.setBatchable = function(t, e, i) {
                    this._u8view[192] = 1, this._u8view[193] = 1, this._u32View[10] = f.batchableVertexBuffer2Native.get(t).id, this._u32View[11] = 0, this._u32View[9] = l.batchableIndexBuffer2Native.get(e).id, this._u32View[49] = o.nativeValue2Native.get(i).id
                }, t.prototype.setBatchableRenderDataDirty = function() {
                    this._u8view[193] = 1
                }, t
            }();
            e.default = p
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.rect2Native = void 0, e.rect2Native = new WeakMap;
            var n = function(t) {
                this._native = t, e.rect2Native.set(this, t)
            };
            e.default = n
        }]).default
    }()
} catch (t) {
    console.error("catch sdkSubPackage: wxGA error: ", t)
}