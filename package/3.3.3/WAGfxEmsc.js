"use strict";

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, r) {
    for (var n = 0; n < r.length; n++) {
        var t = r[n];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, _toPropertyKey(t.key), t)
    }
}

function _createClass(e, r, n) {
    return r && _defineProperties(e.prototype, r), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function _toPropertyKey(e) {
    var r = _toPrimitive(e, "string");
    return "symbol" === _typeof(r) ? r : String(r)
}

function _toPrimitive(e, r) {
    if ("object" !== _typeof(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var t = n.call(e, r || "default");
        if ("object" !== _typeof(t)) return t;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === r ? String : Number)(e)
}

function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _typeof(e)
}
var __realWebAssembly = void 0 !== window.WebAssembly ? window.WebAssembly : window.__global.WebAssembly;
window.DEVTOOL_WASM_MODULE_FACTORY = function() {
    var e, r = void 0,
        n = void 0,
        t = (e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function(r) {
            r = void 0 !== (r = r || {}) ? r : {};
            var n, t = {};
            for (n in r) r.hasOwnProperty(n) && (t[n] = r[n]);
            r.arguments = [], r.thisProgram = "./this.program", r.quit = function(e, r) {
                throw r
            }, r.preRun = [], r.postRun = [];
            var a = "";
            document.currentScript && (a = document.currentScript.src), e && (a = e), a = 0 !== a.indexOf("blob:") ? a.substr(0, a.lastIndexOf("/") + 1) : "", r.read = function(e) {
                var r = new XMLHttpRequest;
                return r.open("GET", e, !1), r.send(null), r.responseText
            }, r.readAsync = function(e, r, n) {
                var t = new XMLHttpRequest;
                t.open("GET", e, !0), t.responseType = "arraybuffer", t.onload = function() {
                    200 == t.status || 0 == t.status && t.response ? r(t.response) : n()
                }, t.onerror = n, t.send(null)
            }, r.setWindowTitle = function(e) {
                document.title = e
            };
            var i = r.print || ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null),
                u = r.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || i);
            for (n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
            t = void 0;
            var o, f = {
                "f64-rem": function(e, r) {
                    return e % r
                },
                debugger: function() {}
            };
            new Array(0), "object" !== _typeof(__realWebAssembly) && u("no native wasm support detected");
            var s = !1;

            function l(e, r) {
                e || Pe("Assertion failed: " + r)
            }

            function c(e) {
                var n = r["_" + e];
                return l(n, "Cannot call unknown function " + e + ", make sure it is exported"), n
            }

            function m(e, r, n, t, a) {
                var i = {
                        string: function(e) {
                            var r = 0;
                            if (null != e && 0 !== e) {
                                var n = 1 + (e.length << 2);
                                R(e, r = Te(n), n)
                            }
                            return r
                        },
                        array: function(e) {
                            var r = Te(e.length);
                            return function(e, r) {
                                d.set(e, r)
                            }(e, r), r
                        }
                    },
                    u = c(e),
                    o = [],
                    f = 0;
                if (t)
                    for (var s = 0; s < t.length; s++) {
                        var l = i[n[s]];
                        l ? (0 === f && (f = he()), o[s] = l(t[s])) : o[s] = t[s]
                    }
                var m = u.apply(null, o);
                return m = function(e) {
                    return "string" === r ? I(e) : "boolean" === r ? Boolean(e) : e
                }(m), 0 !== f && Ie(f), m
            }
            var p, d, E, _, b, v, g, y, A = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

            function T(e, r, n) {
                for (var t = r + n, a = r; e[a] && !(a >= t);) ++a;
                if (a - r > 16 && e.subarray && A) return A.decode(e.subarray(r, a));
                for (var i = ""; r < a;) {
                    var u = e[r++];
                    if (128 & u) {
                        var o = 63 & e[r++];
                        if (192 != (224 & u)) {
                            var f = 63 & e[r++];
                            if ((u = 224 == (240 & u) ? (15 & u) << 12 | o << 6 | f : (7 & u) << 18 | o << 12 | f << 6 | 63 & e[r++]) < 65536) i += String.fromCharCode(u);
                            else {
                                var s = u - 65536;
                                i += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s)
                            }
                        } else i += String.fromCharCode((31 & u) << 6 | o)
                    } else i += String.fromCharCode(u)
                }
                return i
            }

            function I(e, r) {
                return e ? T(E, e, r) : ""
            }

            function h(e, r, n, t) {
                if (!(t > 0)) return 0;
                for (var a = n, i = n + t - 1, u = 0; u < e.length; ++u) {
                    var o = e.charCodeAt(u);
                    if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++u)), o <= 127) {
                        if (n >= i) break;
                        r[n++] = o
                    } else if (o <= 2047) {
                        if (n + 1 >= i) break;
                        r[n++] = 192 | o >> 6, r[n++] = 128 | 63 & o
                    } else if (o <= 65535) {
                        if (n + 2 >= i) break;
                        r[n++] = 224 | o >> 12, r[n++] = 128 | o >> 6 & 63, r[n++] = 128 | 63 & o
                    } else {
                        if (n + 3 >= i) break;
                        r[n++] = 240 | o >> 18, r[n++] = 128 | o >> 12 & 63, r[n++] = 128 | o >> 6 & 63, r[n++] = 128 | 63 & o
                    }
                }
                return r[n] = 0, n - a
            }

            function R(e, r, n) {
                return h(e, E, r, n)
            }

            function S(e) {
                for (var r = 0, n = 0; n < e.length; ++n) {
                    var t = e.charCodeAt(n);
                    t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & e.charCodeAt(++n)), t <= 127 ? ++r : r += t <= 2047 ? 2 : t <= 65535 ? 3 : 4
                }
                return r
            }

            function P(e) {
                var r = S(e) + 1,
                    n = Te(r);
                return h(e, d, n, r), n
            }

            function L(e, r) {
                return e % r > 0 && (e += r - e % r), e
            }

            function O() {
                r.HEAP8 = d = new Int8Array(p), r.HEAP16 = _ = new Int16Array(p), r.HEAP32 = v = new Int32Array(p), r.HEAPU8 = E = new Uint8Array(p), r.HEAPU16 = b = new Uint16Array(p), r.HEAPU32 = g = new Uint32Array(p), r.HEAPF32 = y = new Float32Array(p), r.HEAPF64 = new Float64Array(p)
            }
            "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
            var B = 5242880,
                C = r.TOTAL_MEMORY || 16777216;

            function x(e) {
                for (; e.length > 0;) {
                    var n = e.shift();
                    if ("function" != typeof n) {
                        var t = n.func;
                        "number" == typeof t ? void 0 === n.arg ? r.dynCall_v(t) : r.dynCall_vi(t, n.arg) : t(void 0 === n.arg ? null : n.arg)
                    } else n()
                }
            }
            C < B && u("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + C + "! (TOTAL_STACK=" + B + ")"), r.buffer ? p = r.buffer : "object" === _typeof(__realWebAssembly) && "function" == typeof __realWebAssembly.Memory ? (o = new __realWebAssembly.Memory({
                initial: C / 65536
            }), p = o.buffer) : p = new ArrayBuffer(C), O(), v[2960] = 5254976;
            var N = [],
                w = [],
                F = [],
                M = [],
                U = [],
                D = !1;

            function k() {
                D || (D = !0, x(w))
            }
            var G = Math.abs,
                X = Math.ceil,
                V = Math.floor,
                H = Math.min,
                W = 0,
                j = null,
                q = null;
            r.preloadedImages = {}, r.preloadedAudios = {};
            var Y = "data:application/octet-stream;base64,";

            function z(e) {
                return String.prototype.startsWith ? e.startsWith(Y) : 0 === e.indexOf(Y)
            }
            var Z, K = window.DEVTOOL_WASM_MODULE_PATH;

            function J(e) {
                var n = {
                    env: e,
                    global: {
                        NaN: NaN,
                        Infinity: 1 / 0
                    },
                    "global.Math": Math,
                    asm2wasm: f
                };

                function t(e, n) {
                    var t = e.exports;
                    r.asm = t,
                        function(e) {
                            if (W--, r.monitorRunDependencies && r.monitorRunDependencies(W), 0 == W && (null !== j && (clearInterval(j), j = null), q)) {
                                var n = q;
                                q = null, n()
                            }
                        }()
                }
                if (W++, r.monitorRunDependencies && r.monitorRunDependencies(W), r.instantiateWasm) try {
                    return r.instantiateWasm(n, t)
                } catch (e) {
                    return u("Module.instantiateWasm callback failed with error: " + e), !1
                }

                function a(e) {
                    t(e.instance)
                }

                function i(e) {
                    ("undefined" != typeof wx ? new Promise((function(e, r) {
                        -1 == K.indexOf("http") ? wx.getFileSystemManager().readFile({
                            filePath: K,
                            success: function(r) {
                                e(r.data)
                            },
                            fail: function(e) {
                                r("failed to load wasm binary file at '" + K + "'")
                            }
                        }) : wx.request({
                            url: K,
                            success: function(n) {
                                200 == n.statusCode ? e(n.data) : r("failed to load wasm binary file at '" + K + "'")
                            },
                            fail: function(e) {
                                r("failed to load wasm binary file at '" + K + "'")
                            },
                            responseType: "arraybuffer"
                        })
                    })) : void 0 !== __global.fetch ? __global.fetch(K).then((function(e) {
                        return e.arrayBuffer()
                    })) : fetch(K).then((function(e) {
                        return e.arrayBuffer()
                    }))).then((function(e) {
                        return __realWebAssembly.instantiate(e, n)
                    })).then(e, (function(e) {
                        u("failed to asynchronously prepare wasm: " + e), Pe(e)
                    }))
                }
                return r.wasmBinary || "function" != typeof __realWebAssembly.instantiateStreaming || z(K) || "function" != typeof fetch ? i(a) : __realWebAssembly.instantiateStreaming(fetch(K, {
                    credentials: "same-origin"
                }), n).then(a, (function(e) {
                    u("wasm streaming compile failed: " + e), u("falling back to ArrayBuffer instantiation"), i(a)
                })), {}
            }

            function Q() {
                return !!Q.uncaught_exception
            }
            z(K) || (Z = K, K = r.locateFile ? r.locateFile(Z, a) : a + Z), r.asm = function(e, r, n) {
                return r.memory = o, r.table = new __realWebAssembly.Table({
                    initial: 59,
                    maximum: 59,
                    element: "anyfunc"
                }), r.__memory_base = 1024, r.__table_base = 0, J(r)
            }, w.push({
                func: function() {
                    ge()
                }
            });
            var $ = {
                    last: 0,
                    caught: [],
                    infos: {},
                    deAdjust: function(e) {
                        if (!e || $.infos[e]) return e;
                        for (var r in $.infos)
                            for (var n = +r, t = $.infos[n].adjusted, a = t.length, i = 0; i < a; i++)
                                if (t[i] === e) return n;
                        return e
                    },
                    addRef: function(e) {
                        e && $.infos[e].refcount++
                    },
                    decRef: function(e) {
                        if (e) {
                            var n = $.infos[e];
                            l(n.refcount > 0), n.refcount--, 0 !== n.refcount || n.rethrown || (n.destructor && r.dynCall_vi(n.destructor, e), delete $.infos[e], function(e) {
                                try {
                                    return ye(e)
                                } catch (e) {}
                            }(e))
                        }
                    },
                    clearRef: function(e) {
                        e && ($.infos[e].refcount = 0)
                    }
                },
                ee = {
                    buffers: [null, [],
                        []
                    ],
                    printChar: function(e, r) {
                        var n = ee.buffers[e];
                        0 === r || 10 === r ? ((1 === e ? i : u)(T(n, 0)), n.length = 0) : n.push(r)
                    },
                    varargs: 0,
                    get: function(e) {
                        return ee.varargs += 4, v[ee.varargs - 4 >> 2]
                    },
                    getStr: function() {
                        return I(ee.get())
                    },
                    get64: function() {
                        var e = ee.get();
                        return ee.get(), e
                    },
                    getZero: function() {
                        ee.get()
                    }
                };

            function re() {
                return d.length
            }
            var ne = {
                    counter: 1,
                    lastError: 0,
                    buffers: [],
                    mappedBuffers: {},
                    programs: [],
                    framebuffers: [],
                    renderbuffers: [],
                    textures: [],
                    uniforms: [],
                    shaders: [],
                    vaos: [],
                    contexts: {},
                    currentContext: null,
                    offscreenCanvases: {},
                    timerQueriesEXT: [],
                    queries: [],
                    samplers: [],
                    transformFeedbacks: [],
                    syncs: [],
                    programInfos: {},
                    stringCache: {},
                    stringiCache: {},
                    unpackAlignment: 4,
                    init: function() {
                        ne.miniTempBuffer = new Float32Array(ne.MINI_TEMP_BUFFER_SIZE);
                        for (var e = 0; e < ne.MINI_TEMP_BUFFER_SIZE; e++) ne.miniTempBufferViews[e] = ne.miniTempBuffer.subarray(0, e + 1)
                    },
                    recordError: function(e) {
                        ne.lastError || (ne.lastError = e)
                    },
                    getNewId: function(e) {
                        for (var r = ne.counter++, n = e.length; n < r; n++) e[n] = null;
                        return r
                    },
                    MINI_TEMP_BUFFER_SIZE: 256,
                    miniTempBuffer: null,
                    miniTempBufferViews: [0],
                    getSource: function(e, r, n, t) {
                        for (var a = "", i = 0; i < r; ++i) {
                            var u = t ? v[t + 4 * i >> 2] : -1;
                            a += I(v[n + 4 * i >> 2], u < 0 ? void 0 : u)
                        }
                        return a
                    },
                    createContext: function(e, r) {
                        var n = r.majorVersion > 1 ? e.getContext("webgl2", r) : e.getContext("webgl", r) || e.getContext("experimental-webgl", r);
                        return n && ne.registerContext(n, r)
                    },
                    registerContext: function(e, r) {
                        var n = Ae(8),
                            t = {
                                handle: n,
                                attributes: r,
                                version: r.majorVersion,
                                GLctx: e
                            };

                        function a() {
                            var e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                            return !!e && parseInt(e[2], 10)
                        }
                        return t.supportsWebGL2EntryPoints = t.version >= 2 && (!1 === a() || a() >= 58), e.canvas && (e.canvas.GLctxObject = t), ne.contexts[n] = t, (void 0 === r.enableExtensionsByDefault || r.enableExtensionsByDefault) && ne.initExtensions(t), n
                    },
                    makeContextCurrent: function(e) {
                        return ne.currentContext = ne.contexts[e], r.ctx = de = ne.currentContext && ne.currentContext.GLctx, !(e && !de)
                    },
                    getContext: function(e) {
                        return ne.contexts[e]
                    },
                    deleteContext: function(e) {
                        ne.currentContext === ne.contexts[e] && (ne.currentContext = null), "object" === _typeof(te) && te.removeAllHandlersOnTarget(ne.contexts[e].GLctx.canvas), ne.contexts[e] && ne.contexts[e].GLctx.canvas && (ne.contexts[e].GLctx.canvas.GLctxObject = void 0), ye(ne.contexts[e]), ne.contexts[e] = null
                    },
                    initExtensions: function(e) {
                        if (e || (e = ne.currentContext), !e.initExtensionsDone) {
                            e.initExtensionsDone = !0;
                            var r = e.GLctx;
                            if (e.version < 2) {
                                var n = r.getExtension("ANGLE_instanced_arrays");
                                n && (r.vertexAttribDivisor = function(e, r) {
                                    n.vertexAttribDivisorANGLE(e, r)
                                }, r.drawArraysInstanced = function(e, r, t, a) {
                                    n.drawArraysInstancedANGLE(e, r, t, a)
                                }, r.drawElementsInstanced = function(e, r, t, a, i) {
                                    n.drawElementsInstancedANGLE(e, r, t, a, i)
                                });
                                var t = r.getExtension("OES_vertex_array_object");
                                t && (r.createVertexArray = function() {
                                    return t.createVertexArrayOES()
                                }, r.deleteVertexArray = function(e) {
                                    t.deleteVertexArrayOES(e)
                                }, r.bindVertexArray = function(e) {
                                    t.bindVertexArrayOES(e)
                                }, r.isVertexArray = function(e) {
                                    return t.isVertexArrayOES(e)
                                });
                                var a = r.getExtension("WEBGL_draw_buffers");
                                a && (r.drawBuffers = function(e, r) {
                                    a.drawBuffersWEBGL(e, r)
                                })
                            }
                            r.disjointTimerQueryExt = r.getExtension("EXT_disjoint_timer_query");
                            var i = ["OES_texture_float", "OES_texture_half_float", "OES_standard_derivatives", "OES_vertex_array_object", "WEBGL_compressed_texture_s3tc", "WEBGL_depth_texture", "OES_element_index_uint", "EXT_texture_filter_anisotropic", "EXT_frag_depth", "WEBGL_draw_buffers", "ANGLE_instanced_arrays", "OES_texture_float_linear", "OES_texture_half_float_linear", "EXT_blend_minmax", "EXT_shader_texture_lod", "WEBGL_compressed_texture_pvrtc", "EXT_color_buffer_half_float", "WEBGL_color_buffer_float", "EXT_sRGB", "WEBGL_compressed_texture_etc1", "EXT_disjoint_timer_query", "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_astc", "EXT_color_buffer_float", "WEBGL_compressed_texture_s3tc_srgb", "EXT_disjoint_timer_query_webgl2"],
                                u = r.getSupportedExtensions();
                            u && u.length > 0 && r.getSupportedExtensions().forEach((function(e) {
                                -1 != i.indexOf(e) && r.getExtension(e)
                            }))
                        }
                    },
                    populateUniformTable: function(e) {
                        for (var r = ne.programs[e], n = ne.programInfos[e] = {
                                uniforms: {},
                                maxUniformLength: 0,
                                maxAttributeLength: -1,
                                maxUniformBlockNameLength: -1
                            }, t = n.uniforms, a = de.getProgramParameter(r, 35718), i = 0; i < a; ++i) {
                            var u = de.getActiveUniform(r, i),
                                o = u.name;
                            n.maxUniformLength = Math.max(n.maxUniformLength, o.length + 1), "]" == o.slice(-1) && (o = o.slice(0, o.lastIndexOf("[")));
                            var f = de.getUniformLocation(r, o);
                            if (f) {
                                var s = ne.getNewId(ne.uniforms);
                                t[o] = [u.size, s], ne.uniforms[s] = f;
                                for (var l = 1; l < u.size; ++l) {
                                    var c = o + "[" + l + "]";
                                    f = de.getUniformLocation(r, c), s = ne.getNewId(ne.uniforms), ne.uniforms[s] = f
                                }
                            }
                        }
                    }
                },
                te = {
                    keyEvent: 0,
                    mouseEvent: 0,
                    wheelEvent: 0,
                    uiEvent: 0,
                    focusEvent: 0,
                    deviceOrientationEvent: 0,
                    deviceMotionEvent: 0,
                    fullscreenChangeEvent: 0,
                    pointerlockChangeEvent: 0,
                    visibilityChangeEvent: 0,
                    touchEvent: 0,
                    previousFullscreenElement: null,
                    previousScreenX: null,
                    previousScreenY: null,
                    removeEventListenersRegistered: !1,
                    removeAllEventListeners: function() {
                        for (var e = te.eventHandlers.length - 1; e >= 0; --e) te._removeHandler(e);
                        te.eventHandlers = [], te.deferredCalls = []
                    },
                    registerRemoveEventListeners: function() {
                        te.removeEventListenersRegistered || (M.push(te.removeAllEventListeners), te.removeEventListenersRegistered = !0)
                    },
                    deferredCalls: [],
                    deferCall: function(e, r, n) {
                        function t(e, r) {
                            if (e.length != r.length) return !1;
                            for (var n in e)
                                if (e[n] != r[n]) return !1;
                            return !0
                        }
                        for (var a in te.deferredCalls) {
                            var i = te.deferredCalls[a];
                            if (i.targetFunction == e && t(i.argsList, n)) return
                        }
                        te.deferredCalls.push({
                            targetFunction: e,
                            precedence: r,
                            argsList: n
                        }), te.deferredCalls.sort((function(e, r) {
                            return e.precedence < r.precedence
                        }))
                    },
                    removeDeferredCalls: function(e) {
                        for (var r = 0; r < te.deferredCalls.length; ++r) te.deferredCalls[r].targetFunction == e && (te.deferredCalls.splice(r, 1), --r)
                    },
                    canPerformEventHandlerRequests: function() {
                        return te.inEventHandler && te.currentEventHandler.allowsDeferredCalls
                    },
                    runDeferredCalls: function() {
                        if (te.canPerformEventHandlerRequests())
                            for (var e = 0; e < te.deferredCalls.length; ++e) {
                                var r = te.deferredCalls[e];
                                te.deferredCalls.splice(e, 1), --e, r.targetFunction.apply(this, r.argsList)
                            }
                    },
                    inEventHandler: 0,
                    currentEventHandler: null,
                    eventHandlers: [],
                    isInternetExplorer: function() {
                        return -1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0
                    },
                    removeAllHandlersOnTarget: function(e, r) {
                        for (var n = 0; n < te.eventHandlers.length; ++n) te.eventHandlers[n].target != e || r && r != te.eventHandlers[n].eventTypeString || te._removeHandler(n--)
                    },
                    _removeHandler: function(e) {
                        var r = te.eventHandlers[e];
                        r.target.removeEventListener(r.eventTypeString, r.eventListenerFunc, r.useCapture), te.eventHandlers.splice(e, 1)
                    },
                    registerOrRemoveHandler: function(e) {
                        var r = function(r) {
                            ++te.inEventHandler, te.currentEventHandler = e, te.runDeferredCalls(), e.handlerFunc(r), te.runDeferredCalls(), --te.inEventHandler
                        };
                        if (e.callbackfunc) e.eventListenerFunc = r, e.target.addEventListener(e.eventTypeString, r, e.useCapture), te.eventHandlers.push(e), te.registerRemoveEventListeners();
                        else
                            for (var n = 0; n < te.eventHandlers.length; ++n) te.eventHandlers[n].target == e.target && te.eventHandlers[n].eventTypeString == e.eventTypeString && te._removeHandler(n--)
                    },
                    getBoundingClientRectOrZeros: function(e) {
                        return e.getBoundingClientRect ? e.getBoundingClientRect() : {
                            left: 0,
                            top: 0
                        }
                    },
                    pageScrollPos: function() {
                        return window.pageXOffset > 0 || window.pageYOffset > 0 ? [window.pageXOffset, window.pageYOffset] : void 0 !== document.documentElement.scrollLeft || void 0 !== document.documentElement.scrollTop ? [document.documentElement.scrollLeft, document.documentElement.scrollTop] : [0 | document.body.scrollLeft, 0 | document.body.scrollTop]
                    },
                    getNodeNameForTarget: function(e) {
                        return e ? e == window ? "#window" : e == screen ? "#screen" : e && e.nodeName ? e.nodeName : "" : ""
                    },
                    tick: function() {
                        return window.performance && window.performance.now ? window.performance.now() : Date.now()
                    },
                    fullscreenEnabled: function() {
                        return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled
                    }
                },
                ae = ["default", "low-power", "high-performance"],
                ie = [0, document, window];

            function ue(e) {
                return "number" == typeof e && (e = I(e)), e && "#canvas" !== e ? void 0 !== ne && ne.offscreenCanvases[e] ? ne.offscreenCanvases[e] : function(e) {
                    try {
                        return e ? ("number" == typeof e && (e = ie[e] || I(e)), "#window" === e ? window : "#document" === e ? document : "#screen" === e ? screen : "#canvas" === e ? r.canvas : "string" == typeof e ? document.getElementById(e) : e) : window
                    } catch (e) {
                        return null
                    }
                }(e) : void 0 !== ne && ne.offscreenCanvases.canvas ? ne.offscreenCanvases.canvas : r.canvas
            }
            var oe = [];

            function fe(e, r, n, t) {
                for (var a = 0; a < e; a++) {
                    var i = de[n](),
                        u = i && ne.getNewId(t);
                    i ? (i.name = u, t[u] = i) : ne.recordError(1282), v[r + 4 * a >> 2] = u
                }
            }

            function se(e) {
                var r = S(e) + 1,
                    n = Ae(r);
                return R(e, n, r), n
            }
            var le = {
                    6402: 1,
                    6403: 1,
                    6406: 1,
                    6407: 3,
                    6408: 4,
                    6409: 1,
                    6410: 2,
                    33319: 2,
                    33320: 2,
                    35904: 3,
                    35906: 4,
                    36244: 1,
                    36248: 3,
                    36249: 4
                },
                ce = {
                    5120: 1,
                    5121: 1,
                    5122: 2,
                    5123: 2,
                    5124: 4,
                    5125: 4,
                    5126: 4,
                    5131: 2,
                    32819: 2,
                    32820: 2,
                    33635: 2,
                    33640: 4,
                    34042: 4,
                    35899: 4,
                    35902: 4,
                    36193: 2
                };

            function me(e, r, n, t, a, i) {
                var u = le[r] * ce[e];
                if (u) {
                    var o = function(e, r, n, t) {
                            var a;
                            return r * (e * n + (a = t) - 1 & -a)
                        }(n, t, u, ne.unpackAlignment),
                        f = a + o;
                    switch (e) {
                        case 5120:
                            return d.subarray(a, f);
                        case 5121:
                            return E.subarray(a, f);
                        case 5122:
                            return _.subarray(a >> 1, f >> 1);
                        case 5124:
                            return v.subarray(a >> 2, f >> 2);
                        case 5126:
                            return y.subarray(a >> 2, f >> 2);
                        case 5125:
                        case 34042:
                        case 35902:
                        case 33640:
                        case 35899:
                        case 34042:
                            return g.subarray(a >> 2, f >> 2);
                        case 5123:
                        case 33635:
                        case 32819:
                        case 32820:
                        case 36193:
                        case 5131:
                            return b.subarray(a >> 1, f >> 1);
                        default:
                            ne.recordError(1280)
                    }
                } else ne.recordError(1280)
            }

            function pe(e) {
                switch (e) {
                    case 5120:
                        return d;
                    case 5121:
                        return E;
                    case 5122:
                        return _;
                    case 5123:
                    case 33635:
                    case 32819:
                    case 32820:
                    case 36193:
                    case 5131:
                        return b;
                    case 5124:
                        return v;
                    case 5125:
                    case 34042:
                    case 35902:
                    case 33640:
                    case 35899:
                    case 34042:
                        return g;
                    case 5126:
                        return y
                }
            }
            var de, Ee = {
                5122: 1,
                5123: 1,
                5124: 2,
                5125: 2,
                5126: 2,
                5131: 1,
                32819: 1,
                32820: 1,
                33635: 1,
                33640: 2,
                34042: 2,
                35899: 2,
                35902: 2,
                36193: 1
            };
            ne.init();
            for (var _e = 0; _e < 32; _e++) oe.push(new Array(_e));
            var be = {
                    i: Pe,
                    gb: function(e) {
                        return Ae(e)
                    },
                    Sa: function(e, r, n) {
                        throw $.infos[e] = {
                            ptr: e,
                            adjusted: [e],
                            type: r,
                            destructor: n,
                            refcount: 0,
                            caught: !1,
                            rethrown: !1
                        }, $.last = e, "uncaught_exception" in Q ? Q.uncaught_exception++ : Q.uncaught_exception = 1, e
                    },
                    U: function(e) {
                        return r.___errno_location && (v[r.___errno_location() >> 2] = e), e
                    },
                    Ja: function(e, r) {
                        ee.varargs = r;
                        try {
                            var n = ee.getStreamFromFD(),
                                t = (ee.get(), ee.get()),
                                a = ee.get(),
                                i = ee.get(),
                                u = t;
                            return FS.llseek(n, u, i), v[a >> 2] = n.position, n.getdents && 0 === u && 0 === i && (n.getdents = null), 0
                        } catch (e) {
                            return "undefined" != typeof FS && e instanceof FS.ErrnoError || Pe(e), -e.errno
                        }
                    },
                    Q: function(e, r) {
                        ee.varargs = r;
                        try {
                            for (var n = ee.get(), t = ee.get(), a = ee.get(), i = 0, u = 0; u < a; u++) {
                                for (var o = v[t + 8 * u >> 2], f = v[t + (8 * u + 4) >> 2], s = 0; s < f; s++) ee.printChar(n, E[o + s]);
                                i += f
                            }
                            return i
                        } catch (e) {
                            return "undefined" != typeof FS && e instanceof FS.ErrnoError || Pe(e), -e.errno
                        }
                    },
                    za: function(e, r) {
                        ee.varargs = r;
                        try {
                            return 0
                        } catch (e) {
                            return "undefined" != typeof FS && e instanceof FS.ErrnoError || Pe(e), -e.errno
                        }
                    },
                    va: function(e, r) {
                        ee.varargs = r;
                        try {
                            var n = ee.getStreamFromFD();
                            return FS.close(n), 0
                        } catch (e) {
                            return "undefined" != typeof FS && e instanceof FS.ErrnoError || Pe(e), -e.errno
                        }
                    },
                    oa: function() {
                        r.abort()
                    },
                    ia: re,
                    fb: function(e, r, n) {
                        E.set(E.subarray(r, r + n), e)
                    },
                    Za: function(e) {
                        var r = re(),
                            n = 65536,
                            t = 2147418112;
                        if (e > t) return !1;
                        for (var a = Math.max(r, 16777216); a < e;) a = a <= 536870912 ? L(2 * a, n) : Math.min(L((3 * a + 2147483648) / 4, n), t);
                        var i = function(e) {
                            e = L(e, 65536);
                            var r = p.byteLength;
                            try {
                                return -1 !== o.grow((e - r) / 65536) ? p = o.buffer : null
                            } catch (e) {
                                return null
                            }
                        }(a);
                        return !(!i || i.byteLength != a || (O(), 0))
                    },
                    C: function(e, r) {
                        return function(e, r) {
                            var n = {},
                                t = r >> 2;
                            n.alpha = !!v[t + 0], n.depth = !!v[t + 1], n.stencil = !!v[t + 2], n.antialias = !!v[t + 3], n.premultipliedAlpha = !!v[t + 4], n.preserveDrawingBuffer = !!v[t + 5];
                            var a = v[t + 6];
                            n.powerPreference = ae[a], n.failIfMajorPerformanceCaveat = !!v[t + 7], n.majorVersion = v[t + 8], n.minorVersion = v[t + 9], n.enableExtensionsByDefault = v[t + 10], n.explicitSwapControl = v[t + 11], n.proxyContextToMainThread = v[t + 12], n.renderViaOffscreenBackBuffer = v[t + 13];
                            var i = ue(e);
                            return i ? n.explicitSwapControl ? 0 : ne.createContext(i, n) : 0
                        }(e, r)
                    },
                    Va: function(e) {
                        for (var r = e >> 2, n = 0; n < 14; ++n) v[r + n] = 0;
                        v[r + 0] = v[r + 1] = v[r + 3] = v[r + 4] = v[r + 8] = v[r + 10] = 1
                    },
                    Ua: function(e) {
                        return ne.makeContextCurrent(e) ? 0 : -5
                    },
                    e: function(e) {
                        de.activeTexture(e)
                    },
                    $: function(e, r) {
                        de.attachShader(ne.programs[e], ne.shaders[r])
                    },
                    h: function(e, r) {
                        35051 == e ? de.currentPixelPackBufferBinding = r : 35052 == e && (de.currentPixelUnpackBufferBinding = r), de.bindBuffer(e, ne.buffers[r])
                    },
                    Ta: function(e, r, n) {
                        de.bindBufferBase(e, r, ne.buffers[n])
                    },
                    f: function(e, r) {
                        de.bindFramebuffer(e, ne.framebuffers[r])
                    },
                    _: function(e, r) {
                        de.bindRenderbuffer(e, ne.renderbuffers[r])
                    },
                    d: function(e, r) {
                        de.bindTexture(e, ne.textures[r])
                    },
                    Z: function(e) {
                        de.bindVertexArray(ne.vaos[e])
                    },
                    Y: function(e, r, n, t) {
                        de.blendColor(e, r, n, t)
                    },
                    X: function(e, r) {
                        de.blendEquationSeparate(e, r)
                    },
                    W: function(e, r, n, t) {
                        de.blendFuncSeparate(e, r, n, t)
                    },
                    u: function(e, r, n, t, a, i, u, o, f, s) {
                        de.blitFramebuffer(e, r, n, t, a, i, u, o, f, s)
                    },
                    V: function(e, r, n, t) {
                        ne.currentContext.supportsWebGL2EntryPoints ? n ? de.bufferData(e, E, t, n, r) : de.bufferData(e, r, t) : de.bufferData(e, n ? E.subarray(n, n + r) : r, t)
                    },
                    B: function(e, r, n, t) {
                        ne.currentContext.supportsWebGL2EntryPoints ? de.bufferSubData(e, r, E, t, n) : de.bufferSubData(e, r, E.subarray(t, t + n))
                    },
                    r: function(e) {
                        return de.checkFramebufferStatus(e)
                    },
                    Ra: function(e) {
                        de.clear(e)
                    },
                    Qa: function(e, r, n, t) {
                        de.clearBufferfi(e, r, n, t)
                    },
                    q: function(e, r, n) {
                        de.clearBufferfv(e, r, y, n >> 2)
                    },
                    Pa: function(e, r, n) {
                        de.clearBufferuiv(e, r, g, n >> 2)
                    },
                    Oa: function(e, r, n, t) {
                        de.clearColor(e, r, n, t)
                    },
                    Na: function(e) {
                        de.clearDepth(e)
                    },
                    Ma: function(e) {
                        de.clearStencil(e)
                    },
                    A: function(e, r, n, t) {
                        de.colorMask(!!e, !!r, !!n, !!t)
                    },
                    La: function(e) {
                        de.compileShader(ne.shaders[e])
                    },
                    Ka: function(e, r, n, t, a, i, u, o) {
                        ne.currentContext.supportsWebGL2EntryPoints ? de.currentPixelUnpackBufferBinding ? de.compressedTexImage2D(e, r, n, t, a, i, u, o) : de.compressedTexImage2D(e, r, n, t, a, i, E, o, u) : de.compressedTexImage2D(e, r, n, t, a, i, o ? E.subarray(o, o + u) : null)
                    },
                    Ia: function(e, r, n, t, a, i, u, o, f) {
                        ne.currentContext.supportsWebGL2EntryPoints ? de.currentPixelUnpackBufferBinding ? de.compressedTexImage3D(e, r, n, t, a, i, u, o, f) : de.compressedTexImage3D(e, r, n, t, a, i, u, E, f, o) : de.compressedTexImage3D(e, r, n, t, a, i, u, f ? E.subarray(f, f + o) : null)
                    },
                    Ha: function() {
                        var e = ne.getNewId(ne.programs),
                            r = de.createProgram();
                        return r.name = e, ne.programs[e] = r, e
                    },
                    Ga: function(e) {
                        var r = ne.getNewId(ne.shaders);
                        return ne.shaders[r] = de.createShader(e), r
                    },
                    T: function(e) {
                        de.cullFace(e)
                    },
                    Fa: function(e, r) {
                        for (var n = 0; n < e; n++) {
                            var t = v[r + 4 * n >> 2],
                                a = ne.buffers[t];
                            a && (de.deleteBuffer(a), a.name = 0, ne.buffers[t] = null, t == ne.currArrayBuffer && (ne.currArrayBuffer = 0), t == ne.currElementArrayBuffer && (ne.currElementArrayBuffer = 0), t == de.currentPixelPackBufferBinding && (de.currentPixelPackBufferBinding = 0), t == de.currentPixelUnpackBufferBinding && (de.currentPixelUnpackBufferBinding = 0))
                        }
                    },
                    n: function(e, r) {
                        for (var n = 0; n < e; ++n) {
                            var t = v[r + 4 * n >> 2],
                                a = ne.framebuffers[t];
                            a && (de.deleteFramebuffer(a), a.name = 0, ne.framebuffers[t] = null)
                        }
                    },
                    S: function(e) {
                        if (e) {
                            var r = ne.programs[e];
                            r ? (de.deleteProgram(r), r.name = 0, ne.programs[e] = null, ne.programInfos[e] = null) : ne.recordError(1281)
                        }
                    },
                    R: function(e, r) {
                        for (var n = 0; n < e; n++) {
                            var t = v[r + 4 * n >> 2],
                                a = ne.renderbuffers[t];
                            a && (de.deleteRenderbuffer(a), a.name = 0, ne.renderbuffers[t] = null)
                        }
                    },
                    z: function(e) {
                        if (e) {
                            var r = ne.shaders[e];
                            r ? (de.deleteShader(r), ne.shaders[e] = null) : ne.recordError(1281)
                        }
                    },
                    Ea: function(e, r) {
                        for (var n = 0; n < e; n++) {
                            var t = v[r + 4 * n >> 2],
                                a = ne.textures[t];
                            a && (de.deleteTexture(a), a.name = 0, ne.textures[t] = null)
                        }
                    },
                    y: function(e) {
                        de.depthFunc(e)
                    },
                    x: function(e) {
                        de.depthMask(!!e)
                    },
                    g: function(e) {
                        de.disable(e)
                    },
                    b: function(e) {
                        de.disableVertexAttribArray(e)
                    },
                    Da: function(e, r, n) {
                        de.drawArrays(e, r, n)
                    },
                    Ca: function(e, r, n, t) {
                        de.drawArraysInstanced(e, r, n, t)
                    },
                    p: function(e, r) {
                        for (var n = oe[e], t = 0; t < e; t++) n[t] = v[r + 4 * t >> 2];
                        de.drawBuffers(n)
                    },
                    Ba: function(e, r, n, t) {
                        de.drawElements(e, r, n, t)
                    },
                    Aa: function(e, r, n, t, a) {
                        de.drawElementsInstanced(e, r, n, t, a)
                    },
                    l: function(e) {
                        de.enable(e)
                    },
                    ya: function(e) {
                        de.enableVertexAttribArray(e)
                    },
                    m: function(e, r, n, t) {
                        de.framebufferRenderbuffer(e, r, n, ne.renderbuffers[t])
                    },
                    c: function(e, r, n, t, a) {
                        de.framebufferTexture2D(e, r, n, ne.textures[t], a)
                    },
                    k: function(e, r, n, t, a) {
                        de.framebufferTextureLayer(e, r, ne.textures[n], t, a)
                    },
                    P: function(e) {
                        de.frontFace(e)
                    },
                    O: function(e, r) {
                        fe(e, r, "createBuffer", ne.buffers)
                    },
                    o: function(e, r) {
                        fe(e, r, "createFramebuffer", ne.framebuffers)
                    },
                    N: function(e, r) {
                        fe(e, r, "createRenderbuffer", ne.renderbuffers)
                    },
                    xa: function(e, r) {
                        fe(e, r, "createTexture", ne.textures)
                    },
                    wa: function(e, r) {
                        fe(e, r, "createVertexArray", ne.vaos)
                    },
                    ua: function(e) {
                        de.generateMipmap(e)
                    },
                    ta: function(e, r) {
                        return de.getAttribLocation(ne.programs[e], I(r))
                    },
                    M: function(e, r) {
                        ! function(e, r, n) {
                            if (r) {
                                var t = void 0;
                                switch (e) {
                                    case 36346:
                                        t = 1;
                                        break;
                                    case 36344:
                                        return void("Integer" !== n && "Integer64" !== n && ne.recordError(1280));
                                    case 34814:
                                    case 36345:
                                        t = 0;
                                        break;
                                    case 34466:
                                        var a = de.getParameter(34467);
                                        t = a ? a.length : 0;
                                        break;
                                    case 33309:
                                        if (ne.currentContext.version < 2) return void ne.recordError(1282);
                                        t = 2 * de.getSupportedExtensions().length;
                                        break;
                                    case 33307:
                                    case 33308:
                                        if (ne.currentContext.version < 2) return void ne.recordError(1280);
                                        t = 33307 == e ? 3 : 0
                                }
                                if (void 0 === t) {
                                    var i = de.getParameter(e);
                                    switch (_typeof(i)) {
                                        case "number":
                                            t = i;
                                            break;
                                        case "boolean":
                                            t = i ? 1 : 0;
                                            break;
                                        case "string":
                                        default:
                                            return void ne.recordError(1280);
                                        case "object":
                                            if (null === i) switch (e) {
                                                case 34964:
                                                case 35725:
                                                case 34965:
                                                case 36006:
                                                case 36007:
                                                case 32873:
                                                case 34229:
                                                case 35097:
                                                case 36389:
                                                case 34068:
                                                    t = 0;
                                                    break;
                                                default:
                                                    return void ne.recordError(1280)
                                            } else {
                                                if (i instanceof Float32Array || i instanceof Uint32Array || i instanceof Int32Array || i instanceof Array) {
                                                    for (var o = 0; o < i.length; ++o) switch (n) {
                                                        case "Integer":
                                                            v[r + 4 * o >> 2] = i[o];
                                                            break;
                                                        case "Float":
                                                            y[r + 4 * o >> 2] = i[o];
                                                            break;
                                                        case "Boolean":
                                                            d[r + o >> 0] = i[o] ? 1 : 0;
                                                            break;
                                                        default:
                                                            throw "internal glGet error, bad type: " + n
                                                    }
                                                    return
                                                }
                                                try {
                                                    t = 0 | i.name
                                                } catch (r) {
                                                    return ne.recordError(1280), void u("GL_INVALID_ENUM in glGet" + n + "v: Unknown object returned from WebGL getParameter(" + e + ")! (error: " + r + ")")
                                                }
                                            }
                                    }
                                }
                                switch (n) {
                                    case "Integer64":
                                        tempI64 = [t >>> 0, (tempDouble = t, +G(tempDouble) >= 1 ? tempDouble > 0 ? (0 | H(+V(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+X((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], v[r >> 2] = tempI64[0], v[r + 4 >> 2] = tempI64[1];
                                        break;
                                    case "Integer":
                                        v[r >> 2] = t;
                                        break;
                                    case "Float":
                                        y[r >> 2] = t;
                                        break;
                                    case "Boolean":
                                        d[r >> 0] = t ? 1 : 0;
                                        break;
                                    default:
                                        throw "internal glGet error, bad type: " + n
                                }
                            } else ne.recordError(1281)
                        }(e, r, "Integer")
                    },
                    sa: function(e, r, n, t, a) {
                        ne.recordError(1282)
                    },
                    ra: function(e, r, n, t) {
                        var a = de.getProgramInfoLog(ne.programs[e]);
                        if (null === a && (a = "(unknown error)"), r > 0 && t) {
                            var i = R(a, t, r);
                            n && (v[n >> 2] = i)
                        } else n && (v[n >> 2] = 0)
                    },
                    w: function(e, r, n) {
                        if (n)
                            if (e >= ne.counter) ne.recordError(1281);
                            else {
                                var t = ne.programInfos[e];
                                if (t)
                                    if (35716 == r) {
                                        var a = de.getProgramInfoLog(ne.programs[e]);
                                        null === a && (a = "(unknown error)"), v[n >> 2] = a.length + 1
                                    } else if (35719 == r) v[n >> 2] = t.maxUniformLength;
                                else if (35722 == r) {
                                    if (-1 == t.maxAttributeLength) {
                                        e = ne.programs[e];
                                        var i = de.getProgramParameter(e, 35721);
                                        t.maxAttributeLength = 0;
                                        for (var u = 0; u < i; ++u) {
                                            var o = de.getActiveAttrib(e, u);
                                            t.maxAttributeLength = Math.max(t.maxAttributeLength, o.name.length + 1)
                                        }
                                    }
                                    v[n >> 2] = t.maxAttributeLength
                                } else if (35381 == r) {
                                    if (-1 == t.maxUniformBlockNameLength) {
                                        e = ne.programs[e];
                                        var f = de.getProgramParameter(e, 35382);
                                        for (t.maxUniformBlockNameLength = 0, u = 0; u < f; ++u) {
                                            var s = de.getActiveUniformBlockName(e, u);
                                            t.maxUniformBlockNameLength = Math.max(t.maxUniformBlockNameLength, s.length + 1)
                                        }
                                    }
                                    v[n >> 2] = t.maxUniformBlockNameLength
                                } else v[n >> 2] = de.getProgramParameter(ne.programs[e], r);
                                else ne.recordError(1282)
                            }
                        else ne.recordError(1281)
                    },
                    qa: function(e, r, n, t) {
                        var a = de.getShaderInfoLog(ne.shaders[e]);
                        if (null === a && (a = "(unknown error)"), r > 0 && t) {
                            var i = R(a, t, r);
                            n && (v[n >> 2] = i)
                        } else n && (v[n >> 2] = 0)
                    },
                    L: function(e, r, n) {
                        if (n)
                            if (35716 == r) {
                                var t = de.getShaderInfoLog(ne.shaders[e]);
                                null === t && (t = "(unknown error)"), v[n >> 2] = t.length + 1
                            } else if (35720 == r) {
                            var a = de.getShaderSource(ne.shaders[e]),
                                i = null === a || 0 == a.length ? 0 : a.length + 1;
                            v[n >> 2] = i
                        } else v[n >> 2] = de.getShaderParameter(ne.shaders[e], r);
                        else ne.recordError(1281)
                    },
                    pa: function(e) {
                        if (ne.stringCache[e]) return ne.stringCache[e];
                        var r;
                        switch (e) {
                            case 7939:
                                for (var n = de.getSupportedExtensions(), t = [], a = 0; a < n.length; ++a) t.push(n[a]), t.push("GL_" + n[a]);
                                r = se(t.join(" "));
                                break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                                var i = de.getParameter(e);
                                i || ne.recordError(1280), r = se(i);
                                break;
                            case 7938:
                                var u = de.getParameter(de.VERSION);
                                r = se(u = ne.currentContext.version >= 2 ? "OpenGL ES 3.0 (" + u + ")" : "OpenGL ES 2.0 (" + u + ")");
                                break;
                            case 35724:
                                var o = de.getParameter(de.SHADING_LANGUAGE_VERSION),
                                    f = o.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                                null !== f && (3 == f[1].length && (f[1] = f[1] + "0"), o = "OpenGL ES GLSL ES " + f[1] + " (" + o + ")"), r = se(o);
                                break;
                            default:
                                return ne.recordError(1280), 0
                        }
                        return ne.stringCache[e] = r, r
                    },
                    K: function(e, r) {
                        return de.getUniformBlockIndex(ne.programs[e], I(r))
                    },
                    t: function(e, r) {
                        var n = 0;
                        if ("]" == (r = I(r))[r.length - 1]) {
                            var t = r.lastIndexOf("[");
                            n = "]" != r[t + 1] ? parseInt(r.slice(t + 1)) : 0, r = r.slice(0, t)
                        }
                        var a = ne.programInfos[e] && ne.programInfos[e].uniforms[r];
                        return a && n >= 0 && n < a[0] ? a[1] + n : -1
                    },
                    na: function(e) {
                        de.linkProgram(ne.programs[e]), ne.populateUniformTable(e)
                    },
                    J: function(e, r) {
                        de.polygonOffset(e, r)
                    },
                    ma: function(e, r, n, t) {
                        ne.recordError(1280)
                    },
                    s: function(e) {
                        de.readBuffer(e)
                    },
                    la: function(e, r, n, t, a, i, u) {
                        if (ne.currentContext.supportsWebGL2EntryPoints) de.currentPixelPackBufferBinding ? de.readPixels(e, r, n, t, a, i, u) : de.readPixels(e, r, n, t, a, i, pe(i), u >> (0 | Ee[i]));
                        else {
                            var o = me(i, a, n, t, u);
                            o ? de.readPixels(e, r, n, t, a, i, o) : ne.recordError(1280)
                        }
                    },
                    ka: function(e, r, n, t) {
                        de.renderbufferStorage(e, r, n, t)
                    },
                    I: function(e, r, n, t, a) {
                        de.renderbufferStorageMultisample(e, r, n, t, a)
                    },
                    H: function(e, r, n, t) {
                        de.scissor(e, r, n, t)
                    },
                    ja: function(e, r, n, t) {
                        var a = ne.getSource(e, r, n, t);
                        de.shaderSource(ne.shaders[e], a)
                    },
                    ha: function(e, r, n) {
                        de.stencilFunc(e, r, n)
                    },
                    G: function(e, r, n, t) {
                        de.stencilFuncSeparate(e, r, n, t)
                    },
                    v: function(e) {
                        de.stencilMask(e)
                    },
                    ga: function(e, r, n) {
                        de.stencilOp(e, r, n)
                    },
                    F: function(e, r, n, t) {
                        de.stencilOpSeparate(e, r, n, t)
                    },
                    fa: function(e, r, n, t, a, i, u, o, f) {
                        ne.currentContext.supportsWebGL2EntryPoints ? de.currentPixelUnpackBufferBinding ? de.texImage2D(e, r, n, t, a, i, u, o, f) : 0 != f ? de.texImage2D(e, r, n, t, a, i, u, o, pe(o), f >> (0 | Ee[o])) : de.texImage2D(e, r, n, t, a, i, u, o, null) : de.texImage2D(e, r, n, t, a, i, u, o, f ? me(o, u, t, a, f) : null)
                    },
                    ea: function(e, r, n, t, a, i, u, o, f, s) {
                        de.currentPixelUnpackBufferBinding ? de.texImage3D(e, r, n, t, a, i, u, o, f, s) : 0 != s ? de.texImage3D(e, r, n, t, a, i, u, o, f, pe(f), s >> (0 | Ee[f])) : de.texImage3D(e, r, n, t, a, i, u, o, f, null)
                    },
                    E: function(e, r, n) {
                        de.texParameterf(e, r, n)
                    },
                    j: function(e, r, n) {
                        de.texParameteri(e, r, n)
                    },
                    D: function(e, r, n, t, a, i, u, o, f) {
                        if (ne.currentContext.supportsWebGL2EntryPoints) de.currentPixelUnpackBufferBinding ? de.texSubImage2D(e, r, n, t, a, i, u, o, f) : 0 != f ? de.texSubImage2D(e, r, n, t, a, i, u, o, pe(o), f >> (0 | Ee[o])) : de.texSubImage2D(e, r, n, t, a, i, u, o, null);
                        else {
                            var s = null;
                            f && (s = me(o, u, a, i, f)), de.texSubImage2D(e, r, n, t, a, i, u, o, s)
                        }
                    },
                    da: function(e, r, n, t, a, i, u, o, f, s, l) {
                        de.currentPixelUnpackBufferBinding ? de.texSubImage3D(e, r, n, t, a, i, u, o, f, s, l) : 0 != l ? de.texSubImage3D(e, r, n, t, a, i, u, o, f, s, pe(s), l >> (0 | Ee[s])) : de.texSubImage3D(e, r, n, t, a, i, u, o, f, s, null)
                    },
                    eb: function(e, r, n) {
                        if (ne.currentContext.supportsWebGL2EntryPoints) de.uniform1fv(ne.uniforms[e], y, n >> 2, r);
                        else {
                            if (r <= ne.MINI_TEMP_BUFFER_SIZE)
                                for (var t = ne.miniTempBufferViews[r - 1], a = 0; a < r; ++a) t[a] = y[n + 4 * a >> 2];
                            else t = y.subarray(n >> 2, n + 4 * r >> 2);
                            de.uniform1fv(ne.uniforms[e], t)
                        }
                    },
                    ca: function(e, r) {
                        de.uniform1i(ne.uniforms[e], r)
                    },
                    db: function(e, r, n) {
                        if (ne.currentContext.supportsWebGL2EntryPoints) de.uniform2fv(ne.uniforms[e], y, n >> 2, 2 * r);
                        else {
                            if (2 * r <= ne.MINI_TEMP_BUFFER_SIZE)
                                for (var t = ne.miniTempBufferViews[2 * r - 1], a = 0; a < 2 * r; a += 2) t[a] = y[n + 4 * a >> 2], t[a + 1] = y[n + (4 * a + 4) >> 2];
                            else t = y.subarray(n >> 2, n + 8 * r >> 2);
                            de.uniform2fv(ne.uniforms[e], t)
                        }
                    },
                    cb: function(e, r, n) {
                        if (ne.currentContext.supportsWebGL2EntryPoints) de.uniform3fv(ne.uniforms[e], y, n >> 2, 3 * r);
                        else {
                            if (3 * r <= ne.MINI_TEMP_BUFFER_SIZE)
                                for (var t = ne.miniTempBufferViews[3 * r - 1], a = 0; a < 3 * r; a += 3) t[a] = y[n + 4 * a >> 2], t[a + 1] = y[n + (4 * a + 4) >> 2], t[a + 2] = y[n + (4 * a + 8) >> 2];
                            else t = y.subarray(n >> 2, n + 12 * r >> 2);
                            de.uniform3fv(ne.uniforms[e], t)
                        }
                    },
                    bb: function(e, r, n) {
                        if (ne.currentContext.supportsWebGL2EntryPoints) de.uniform4fv(ne.uniforms[e], y, n >> 2, 4 * r);
                        else {
                            if (4 * r <= ne.MINI_TEMP_BUFFER_SIZE)
                                for (var t = ne.miniTempBufferViews[4 * r - 1], a = 0; a < 4 * r; a += 4) t[a] = y[n + 4 * a >> 2], t[a + 1] = y[n + (4 * a + 4) >> 2], t[a + 2] = y[n + (4 * a + 8) >> 2], t[a + 3] = y[n + (4 * a + 12) >> 2];
                            else t = y.subarray(n >> 2, n + 16 * r >> 2);
                            de.uniform4fv(ne.uniforms[e], t)
                        }
                    },
                    ba: function(e, r, n) {
                        e = ne.programs[e], de.uniformBlockBinding(e, r, n)
                    },
                    ab: function(e, r, n, t) {
                        if (ne.currentContext.supportsWebGL2EntryPoints) de.uniformMatrix4fv(ne.uniforms[e], !!n, y, t >> 2, 16 * r);
                        else {
                            if (16 * r <= ne.MINI_TEMP_BUFFER_SIZE)
                                for (var a = ne.miniTempBufferViews[16 * r - 1], i = 0; i < 16 * r; i += 16) a[i] = y[t + 4 * i >> 2], a[i + 1] = y[t + (4 * i + 4) >> 2], a[i + 2] = y[t + (4 * i + 8) >> 2], a[i + 3] = y[t + (4 * i + 12) >> 2], a[i + 4] = y[t + (4 * i + 16) >> 2], a[i + 5] = y[t + (4 * i + 20) >> 2], a[i + 6] = y[t + (4 * i + 24) >> 2], a[i + 7] = y[t + (4 * i + 28) >> 2], a[i + 8] = y[t + (4 * i + 32) >> 2], a[i + 9] = y[t + (4 * i + 36) >> 2], a[i + 10] = y[t + (4 * i + 40) >> 2], a[i + 11] = y[t + (4 * i + 44) >> 2], a[i + 12] = y[t + (4 * i + 48) >> 2], a[i + 13] = y[t + (4 * i + 52) >> 2], a[i + 14] = y[t + (4 * i + 56) >> 2], a[i + 15] = y[t + (4 * i + 60) >> 2];
                            else a = y.subarray(t >> 2, t + 64 * r >> 2);
                            de.uniformMatrix4fv(ne.uniforms[e], !!n, a)
                        }
                    },
                    $a: function(e) {
                        de.useProgram(ne.programs[e])
                    },
                    _a: function(e, r) {
                        de.vertexAttribDivisor(e, r)
                    },
                    Ya: function(e, r, n, t, a, i) {
                        de.vertexAttribPointer(e, r, n, !!t, a, i)
                    },
                    aa: function(e, r, n, t) {
                        de.viewport(e, r, n, t)
                    },
                    Xa: function() {
                        return 0
                    },
                    Wa: function(e) {
                        Pe("OOM")
                    },
                    a: 11840
                },
                ve = r.asm({}, be, p);
            r.asm = ve;
            var ge = r.__GLOBAL__sub_I_gfx_emsc_cc = function() {
                    return r.asm.hb.apply(null, arguments)
                },
                ye = (r.___errno_location = function() {
                    return r.asm.ib.apply(null, arguments)
                }, r._applyBindings = function() {
                    return r.asm.jb.apply(null, arguments)
                }, r._applyPipeline = function() {
                    return r.asm.kb.apply(null, arguments)
                }, r._applyScissorRect = function() {
                    return r.asm.lb.apply(null, arguments)
                }, r._applyUniformBlock = function() {
                    return r.asm.mb.apply(null, arguments)
                }, r._applyUniforms = function() {
                    return r.asm.nb.apply(null, arguments)
                }, r._applyViewport = function() {
                    return r.asm.ob.apply(null, arguments)
                }, r._beginDefaultPass = function() {
                    return r.asm.pb.apply(null, arguments)
                }, r._beginPass = function() {
                    return r.asm.qb.apply(null, arguments)
                }, r._commit = function() {
                    return r.asm.rb.apply(null, arguments)
                }, r._createNativeBuffer = function() {
                    return r.asm.sb.apply(null, arguments)
                }, r._deleteNativeBuffer = function() {
                    return r.asm.tb.apply(null, arguments)
                }, r._destroyBuffer = function() {
                    return r.asm.ub.apply(null, arguments)
                }, r._destroyImage = function() {
                    return r.asm.vb.apply(null, arguments)
                }, r._destroyPass = function() {
                    return r.asm.wb.apply(null, arguments)
                }, r._destroyPipeline = function() {
                    return r.asm.xb.apply(null, arguments)
                }, r._destroyShader = function() {
                    return r.asm.yb.apply(null, arguments)
                }, r._draw = function() {
                    return r.asm.zb.apply(null, arguments)
                }, r._endPass = function() {
                    return r.asm.Ab.apply(null, arguments)
                }, r._free = function() {
                    return r.asm.Bb.apply(null, arguments)
                }),
                Ae = (r._getBufferString = function() {
                    return r.asm.Cb.apply(null, arguments)
                }, r._main = function() {
                    return r.asm.Db.apply(null, arguments)
                }, r._makeBuffer = function() {
                    return r.asm.Eb.apply(null, arguments)
                }, r._makeImage = function() {
                    return r.asm.Fb.apply(null, arguments)
                }, r._makePass = function() {
                    return r.asm.Gb.apply(null, arguments)
                }, r._makePipeline = function() {
                    return r.asm.Hb.apply(null, arguments)
                }, r._makeShader = function() {
                    return r.asm.Ib.apply(null, arguments)
                }, r._malloc = function() {
                    return r.asm.Jb.apply(null, arguments)
                }),
                Te = (r._queryBackend = function() {
                    return r.asm.Kb.apply(null, arguments)
                }, r._queryBufferState = function() {
                    return r.asm.Lb.apply(null, arguments)
                }, r._queryFeature = function() {
                    return r.asm.Mb.apply(null, arguments)
                }, r._queryImageState = function() {
                    return r.asm.Nb.apply(null, arguments)
                }, r._queryPassState = function() {
                    return r.asm.Ob.apply(null, arguments)
                }, r._queryPipelineState = function() {
                    return r.asm.Pb.apply(null, arguments)
                }, r._queryShaderBinary = function() {
                    return r.asm.Qb.apply(null, arguments)
                }, r._queryShaderState = function() {
                    return r.asm.Rb.apply(null, arguments)
                }, r._readPixels = function() {
                    return r.asm.Sb.apply(null, arguments)
                }, r._setupGfx = function() {
                    return r.asm.Tb.apply(null, arguments)
                }, r._updateBuffer = function() {
                    return r.asm.Ub.apply(null, arguments)
                }, r._updateImage = function() {
                    return r.asm.Vb.apply(null, arguments)
                }, r.stackAlloc = function() {
                    return r.asm.Yb.apply(null, arguments)
                }),
                Ie = r.stackRestore = function() {
                    return r.asm.Zb.apply(null, arguments)
                },
                he = r.stackSave = function() {
                    return r.asm._b.apply(null, arguments)
                };

            function Re(e) {
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
            }

            function Se(e) {
                function n() {
                    r.calledRun || (r.calledRun = !0, s || (k(), x(F), r.onRuntimeInitialized && r.onRuntimeInitialized(), r._main && Le && r.callMain(e), function() {
                        if (r.postRun)
                            for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) e = r.postRun.shift(), U.unshift(e);
                        var e;
                        x(U)
                    }()))
                }
                e = e || r.arguments, W > 0 || (function() {
                    if (r.preRun)
                        for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) e = r.preRun.shift(), N.unshift(e);
                    var e;
                    x(N)
                }(), W > 0 || r.calledRun || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                    setTimeout((function() {
                        r.setStatus("")
                    }), 1), n()
                }), 1)) : n()))
            }

            function Pe(e) {
                throw r.onAbort && r.onAbort(e), void 0 !== e ? (i(e), u(e), e = JSON.stringify(e)) : e = "", s = !0, "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."
            }
            if (r.dynCall_v = function() {
                    return r.asm.Wb.apply(null, arguments)
                }, r.dynCall_vi = function() {
                    return r.asm.Xb.apply(null, arguments)
                }, r.asm = ve, r.ccall = m, r.cwrap = function(e, r, n, t) {
                    var a = (n = n || []).every((function(e) {
                        return "number" === e
                    }));
                    return "string" !== r && a && !t ? c(e) : function() {
                        return m(e, r, n, arguments)
                    }
                }, r.then = function(e) {
                    if (r.calledRun) e(r);
                    else {
                        var n = r.onRuntimeInitialized;
                        r.onRuntimeInitialized = function() {
                            n && n(), e(r)
                        }
                    }
                    return r
                }, Re.prototype = new Error, Re.prototype.constructor = Re, q = function e() {
                    r.calledRun || Se(), r.calledRun || (q = e)
                }, r.callMain = function(e) {
                    e = e || [], k();
                    var n, t = e.length + 1,
                        a = Te(4 * (t + 1));
                    v[a >> 2] = P(r.thisProgram);
                    for (var i = 1; i < t; i++) v[(a >> 2) + i] = P(e[i - 1]);
                    v[(a >> 2) + t] = 0;
                    try {
                        n = r._main(t, a, 0), !0 && r.noExitRuntime && 0 === n || (r.noExitRuntime || (s = !0, r.onExit && r.onExit(n)), r.quit(n, new Re(n)))
                    } catch (e) {
                        if (e instanceof Re) return;
                        if ("SimulateInfiniteLoop" == e) return void(r.noExitRuntime = !0);
                        var o = e;
                        e && "object" === _typeof(e) && e.stack && (o = [e, e.stack]), u("exception thrown: " + o), r.quit(1, e)
                    }
                }, r.run = Se, r.abort = Pe, r.preInit)
                for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
            var Le = !0;
            return r.noInitialRun && (Le = !1), r.noExitRuntime = !0, Se(), r
        });
    return "object" === _typeof(r) && "object" === _typeof(n) ? n.exports = t : "function" == typeof define && define.amd ? define([], (function() {
            return t
        })) : "object" === _typeof(r) && (r.Module = t),
        function() {
            return t().then((function(e) {
                return window.DEVTOOL_WASM_MODULE = e,
                    function(e, r) {
                        for (var n in r) e[n] = r[n]
                    }(r, function(e) {
                        var r = {};

                        function n(t) {
                            if (r[t]) return r[t].exports;
                            var a = r[t] = {
                                i: t,
                                l: !1,
                                exports: {}
                            };
                            return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports
                        }
                        return n.m = e, n.c = r, n.d = function(e, r, t) {
                            n.o(e, r) || Object.defineProperty(e, r, {
                                enumerable: !0,
                                get: t
                            })
                        }, n.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }, n.t = function(e, r) {
                            if (1 & r && (e = n(e)), 8 & r) return e;
                            if (4 & r && "object" === _typeof(e) && e && e.__esModule) return e;
                            var t = Object.create(null);
                            if (n.r(t), Object.defineProperty(t, "default", {
                                    enumerable: !0,
                                    value: e
                                }), 2 & r && "string" != typeof e)
                                for (var a in e) n.d(t, a, function(r) {
                                    return e[r]
                                }.bind(null, a));
                            return t
                        }, n.n = function(e) {
                            var r = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return n.d(r, "a", r), r
                        }, n.o = function(e, r) {
                            return Object.prototype.hasOwnProperty.call(e, r)
                        }, n.p = "", n(n.s = 0)
                    }([function(e, r, n) {
                        n(1)
                    }, function(e, r, n) {
                        var t, a = "undefined" != typeof wx,
                            i = !1,
                            u = null,
                            o = null,
                            f = null;
                        a && ("devtools" != (u = wx.getSystemInfoSync()).platform && "windows" != u.platform || (i = !0)), (i || !a && "undefined" != typeof document && document.body) && (o = window.DEVTOOL_WASM_MODULE, n(2).init(), f = n(2).getImageData),
                            function(e) {
                                function r(e, r) {
                                    this.id = e, this.destroy = r
                                }
                                e.some = function(e, r) {
                                    return null != e ? e : r
                                }, e.some3 = function(e, r, n) {
                                    return null != e ? e : null != r ? r : n
                                }, r.prototype.toJSON = function() {
                                    return this.id
                                }, r.prototype.destroy = function() {
                                    this.destroy && this.destroy(this.id)
                                };
                                var n, t = function() {
                                    function n(r, t) {
                                        _classCallCheck(this, n), o.canvas = r;
                                        var a = e.some(t.bufferPoolSize, 1024),
                                            i = e.some(t.shaderPoolSize, 512),
                                            u = e.some(t.imagePoolSize, 1024),
                                            f = e.some(t.pipelinePoolSize, 1024),
                                            s = e.some(t.passPoolSize, 1024),
                                            l = (a = e.some(t.bufferPoolSize, 1024), i = e.some(t.shaderPoolSize, 512), u = e.some(t.imagePoolSize, 1024), f = e.some(t.pipelinePoolSize, 1024), s = e.some(t.passPoolSize, 1024), o.cwrap("setupGfx", null, ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"])),
                                            c = 0;
                                        t.antialias && (c |= 2), t.alpha && (c |= 4), t.stencil && (c |= 8);
                                        var m = !1;
                                        t.ignore_assert && (m = !0);
                                        var p = !1;
                                        t.disable_log && (p = !0);
                                        var d = o.canvas.id;
                                        o.canvas.id = "#canvas", l(r.width, r.height, a, i, u, f, s, m, p, c), o.canvas.id = d, this.createNativeBufferImpl = o.cwrap("createNativeBuffer", "number", ["number", "number"]), this.deleteNativeBufferImpl = o.cwrap("deleteNativeBuffer", null, ["number"]), this.queryFeatureImpl = o.cwrap("queryFeature", "bool", ["number"]), this.makePassImpl = o.cwrap("makePass", "number", ["string"]), this.makeBufferImpl = o.cwrap("makeBuffer", "number", ["string"]), this.updateBufferImpl = o.cwrap("updateBuffer", null, ["number", "number", "number", "number", "number"]), this.makeImageImpl = o.cwrap("makeImage", "number", ["string"]), this.updateImageImpl = o.cwrap("updateImage", null, ["number", "string"]), this.makeShaderImpl = o.cwrap("makeShader", "number", ["string"]), this.makePipelineImpl = o.cwrap("makePipeline", "number", ["string"]), this.beginPassImpl = o.cwrap("beginPass", null, ["number", "string"]), this.beginDefaultPassImpl = o.cwrap("beginDefaultPass", null, ["string", "number", "number"]), this.applyPipelineImpl = o.cwrap("applyPipeline", null, ["number"]), this.applyBindingsImpl = o.cwrap("applyBindings", null, ["string"]), this.applyUniformsImpl = o.cwrap("applyUniforms", null, ["number", "number", "number"]), this.applyViewportImpl = o.cwrap("applyViewport", null, ["number", "number", "number", "number", "bool"]), this.applyScissorRectImpl = o.cwrap("applyScissorRect", null, ["number", "number", "number", "number", "bool"]), this.drawImpl = o.cwrap("draw", null, ["number", "number", "number"]), this.endPassImpl = o.cwrap("endPass", null, []), this.commitImpl = o.cwrap("commit", null, []), this.readPixelsImpl = o.cwrap("readPixels", "number", ["number", "number", "number", "number", "number", "number"]), this.getBufferStringImpl = o.cwrap("getBufferString", "string", ["number"]), this.destroyPassImpl = o.cwrap("destroyPass", null, ["number"]), this.destroyBufferImpl = o.cwrap("destroyBuffer", null, ["number"]), this.destroyImageImpl = o.cwrap("destroyImage", null, ["number"]), this.destroyShaderImpl = o.cwrap("destroyShader", null, ["number"]), this.destroyPipelineImpl = o.cwrap("destroyPipeline", null, ["number"]), this.queryPassStateImpl = o.cwrap("queryPassState", "number", ["number"]), this.queryBufferStateImpl = o.cwrap("queryBufferState", "number", ["number"]), this.queryImageStateImpl = o.cwrap("queryImageState", "number", ["number"]), this.queryShaderStateImpl = o.cwrap("queryShaderState", "number", ["number"]), this.queryPipelineStateImpl = o.cwrap("queryPipelineState", "number", ["number"]), e.setGfxConsts(this)
                                    }
                                    return _createClass(n, [{
                                        key: "_convertBuffer",
                                        value: function(e) {
                                            var r = o._malloc(e.byteLength),
                                                n = Object.prototype.toString.call(e);
                                            return "[object Float32Array]" == n ? o.HEAPF32.set(e, r >> 2) : "[object Int8Array]" == n ? o.HEAP8.set(e, r) : "[object Int16Array]" == n ? o.HEAP16.set(e, r >> 1) : "[object Int32Array]" == n ? o.HEAP32.set(e, r >> 2) : "[object Uint8Array]" == n || "[object Uint8ClampedArray]" == n ? o.HEAPU8.set(e, r) : "[object Uint16Array]" == n ? o.HEAPU16.set(e, r >> 1) : "[object Uint32Array]" == n ? o.HEAPU32.set(e, r >> 2) : "[object Float64Array]" == n ? o.HEAPF64.set(e, r >> 4) : console.log("data invalid!"), r
                                        }
                                    }, {
                                        key: "queryFeature",
                                        value: function(e) {
                                            return this.queryFeatureImpl(e)
                                        }
                                    }, {
                                        key: "makePass",
                                        value: function(e) {
                                            return new r(this.makePassImpl(JSON.stringify(e)), this.destroyPassImpl)
                                        }
                                    }, {
                                        key: "makeBuffer",
                                        value: function(e) {
                                            var n, t, a = 0,
                                                i = !1;
                                            null != e.content && (ArrayBuffer.isView(e.content) ? (n = this._convertBuffer(e.content), a = this.createNativeBufferImpl(n, e.content.byteLength), null == e.size && (e.size = e.content.byteLength), t = e.content, e.content = a, i = !0) : (this.deleteNativeBufferImpl(e.content.id), o._free(e.content.buffer), n = this._convertBuffer(new Uint8Array(e.content.data)), a = this.createNativeBufferImpl(n, e.content.data.byteLength), null == e.size && (e.size = e.content.data.byteLength), e.content.id = a, e.content.buffer = n, t = e.content, e.content = a));
                                            var u = this.makeBufferImpl(JSON.stringify(e));
                                            return i && (a > 0 && this.deleteNativeBufferImpl(a), e.oldContent && (e.content = t, o._free(n))), new r(u, this.destroyBufferImpl)
                                        }
                                    }, {
                                        key: "updateBuffer",
                                        value: function(e, r, n, t, a) {
                                            var i = e.id,
                                                u = -1,
                                                f = !1;
                                            ArrayBuffer.isView(n) ? (e = this._convertBuffer(n), u = this.createNativeBufferImpl(e, n.byteLength), f = !0, t || (t = 0), a || (a = n.byteLength - t)) : (this.deleteNativeBufferImpl(n.id), o._free(n.buffer), e = this._convertBuffer(new Uint8Array(n.data)), u = this.createNativeBufferImpl(e, n.data.byteLength), n.id = u, n.buffer = e, t || (t = 0), a || (a = n.data.byteLength - t)), this.updateBufferImpl(i, "undefined" === r ? 0 : r, u, t, a), f && (u > 0 && this.deleteNativeBufferImpl(u), o._free(e))
                                        }
                                    }, {
                                        key: "makeShader",
                                        value: function(e) {
                                            return new r(this.makeShaderImpl(JSON.stringify(e)), this.destroyShaderImpl)
                                        }
                                    }, {
                                        key: "makeImage",
                                        value: function(e) {
                                            var n = [];
                                            if (null != e.content && null != e.content.subimage)
                                                for (var t = 0; t < this.CUBEFACE_NUM; t++)
                                                    if (n[t] = [], null != e.content.subimage[t])
                                                        for (var a = 0; a < this.MAX_MIPMAPS; a++)
                                                            if (null != e.content.subimage[t][a]) {
                                                                var i = e.content.subimage[t][a];
                                                                if (ArrayBuffer.isView(i)) {
                                                                    var u = this._convertBuffer(i),
                                                                        s = this.createNativeBufferImpl(u, i.byteLength);
                                                                    n[t][a] = {
                                                                        buffer: u,
                                                                        bufferId: s,
                                                                        oldSubImage: i
                                                                    }, e.content.subimage[t][a] = {
                                                                        buffer_id: s
                                                                    }
                                                                } else if (i.buffer) this.deleteNativeBufferImpl(i.id), o._free(i.buffer), u = this._convertBuffer(new Uint8Array(i.data)), s = this.createNativeBufferImpl(u, i.data.byteLength), i.id = s, i.buffer = u, n[t][a] = {
                                                                    buffer: null,
                                                                    bufferId: 0,
                                                                    oldSubImage: i
                                                                }, e.content.subimage[t][a] = {
                                                                    buffer_id: s
                                                                };
                                                                else {
                                                                    var l = e.content.subimage[t][a],
                                                                        c = f(l);
                                                                    u = this._convertBuffer(c), s = this.createNativeBufferImpl(u, c.byteLength), n[t][a] = {
                                                                        buffer: u,
                                                                        bufferId: s,
                                                                        oldSubImage: e.content.subimage[t][a]
                                                                    }, e.content.subimage[t][a] = {
                                                                        buffer_id: s
                                                                    }, e.width = l.width, e.height = l.height
                                                                }
                                                            } var m = this.makeImageImpl(JSON.stringify(e));
                                            for (t = 0; t < this.CUBEFACE_NUM; t++)
                                                if (null != n[t])
                                                    for (a = 0; a < this.MAX_MIPMAPS; a++) null != n[t][a] && (n[t][a].bufferId > 0 && (this.deleteNativeBufferImpl(n[t][a].bufferId), o._free(n[t][a].buffer)), e.content.subimage[t][a] = n[t][a].oldSubImage);
                                            return new r(m, this.destroyImageImpl)
                                        }
                                    }, {
                                        key: "updateImage",
                                        value: function(e, r) {
                                            var n = e.id,
                                                t = [];
                                            if (null != r.content && null != r.content.subimage)
                                                for (var a = 0; a < this.CUBEFACE_NUM; a++)
                                                    if (t[a] = [], null != r.content.subimage[a])
                                                        for (var i = 0; i < this.MAX_MIPMAPS; i++)
                                                            if (null != r.content.subimage[a][i]) {
                                                                var u = r.content.subimage[a][i];
                                                                if (ArrayBuffer.isView(u)) {
                                                                    var s = this._convertBuffer(u),
                                                                        l = this.createNativeBufferImpl(s, u.byteLength);
                                                                    t[a][i] = {
                                                                        buffer: s,
                                                                        bufferId: l,
                                                                        oldSubImage: u
                                                                    }, r.content.subimage[a][i] = {
                                                                        buffer_id: l
                                                                    }
                                                                } else if (u.buffer) this.deleteNativeBufferImpl(u.id), o._free(u.buffer), s = this._convertBuffer(new Uint8Array(u.data)), l = this.createNativeBufferImpl(s, u.data.byteLength), u.id = l, u.buffer = s, t[a][i] = {
                                                                    buffer: null,
                                                                    bufferId: 0,
                                                                    oldSubImage: u
                                                                }, r.content.subimage[a][i] = {
                                                                    buffer_id: l
                                                                };
                                                                else {
                                                                    var c = r.content.subimage[a][i],
                                                                        m = f(c);
                                                                    s = this._convertBuffer(m), l = this.createNativeBufferImpl(s, m.byteLength), t[a][i] = {
                                                                        buffer: s,
                                                                        bufferId: l,
                                                                        oldSubImage: r.content.subimage[a][i]
                                                                    }, r.content.subimage[a][i] = {
                                                                        buffer_id: l
                                                                    }, r.width = c.width, r.height = c.height
                                                                }
                                                            } for (this.updateImageImpl(n, JSON.stringify(r)), a = 0; a < this.CUBEFACE_NUM; a++)
                                                if (null != t[a])
                                                    for (i = 0; i < this.MAX_MIPMAPS; i++) null != t[a][i] && (t[a][i].bufferId > 0 && (this.deleteNativeBufferImpl(t[a][i].bufferId), o._free(t[a][i].buffer)), r.content.subimage[a][i] = t[a][i].oldSubImage)
                                        }
                                    }, {
                                        key: "makePipeline",
                                        value: function(e) {
                                            return new r(this.makePipelineImpl(JSON.stringify(e)), this.destroyPipelineImpl)
                                        }
                                    }, {
                                        key: "makePassAction",
                                        value: function(e) {
                                            return JSON.stringify(e)
                                        }
                                    }, {
                                        key: "beginPass",
                                        value: function(e, r) {
                                            this.beginPassImpl(e.id, r)
                                        }
                                    }, {
                                        key: "beginDefaultPass",
                                        value: function(e, r, n) {
                                            this.beginDefaultPassImpl(e, r, n)
                                        }
                                    }, {
                                        key: "applyPipeline",
                                        value: function(e) {
                                            this.applyPipelineImpl(e.id)
                                        }
                                    }, {
                                        key: "applyViewport",
                                        value: function(e, r, n, t, a) {
                                            this.applyViewportImpl(e, r, n, t, a)
                                        }
                                    }, {
                                        key: "applyScissorRect",
                                        value: function(e, r, n, t, a) {
                                            this.applyScissorRectImpl(e, r, n, t, a)
                                        }
                                    }, {
                                        key: "makeBindings",
                                        value: function(e) {
                                            return JSON.stringify(e)
                                        }
                                    }, {
                                        key: "applyBindings",
                                        value: function(e) {
                                            this.applyBindingsImpl(e)
                                        }
                                    }, {
                                        key: "applyUniforms",
                                        value: function(e, r, n) {
                                            if (ArrayBuffer.isView(n)) {
                                                var t = this._convertBuffer(n),
                                                    a = this.createNativeBufferImpl(t, n.byteLength);
                                                this.applyUniformsImpl(e, r, a), o._free(t), this.deleteNativeBufferImpl(a)
                                            } else this.deleteNativeBufferImpl(n.id), o._free(n.buffer), t = this._convertBuffer(new Uint8Array(n.data)), a = this.createNativeBufferImpl(t, n.data.byteLength), this.applyUniformsImpl(e, r, a), n.id = a, n.buffer = t
                                        }
                                    }, {
                                        key: "draw",
                                        value: function(e, r, n) {
                                            this.drawImpl(e, r, n)
                                        }
                                    }, {
                                        key: "endPass",
                                        value: function() {
                                            this.endPassImpl()
                                        }
                                    }, {
                                        key: "commit",
                                        value: function() {
                                            this.commitImpl()
                                        }
                                    }, {
                                        key: "getPixels",
                                        value: function(e, r, n, t, a, i) {
                                            var u = this.readPixelsImpl(e, r, n, t, a, i),
                                                o = this.getBufferStringImpl(u);
                                            return this.deleteNativeBufferImpl(u),
                                                function(e) {
                                                    for (var r = window.atob(o), n = r.length, t = new Uint8Array(n), a = 0; a < n; a++) t[a] = r.charCodeAt(a);
                                                    return t.buffer
                                                }()
                                        }
                                    }, {
                                        key: "createNativeBuffer",
                                        value: function(e) {
                                            "number" == typeof e && (e = new ArrayBuffer(e));
                                            var r = this._convertBuffer(new Uint8Array(e));
                                            return {
                                                id: this.createNativeBufferImpl(r, e.byteLength),
                                                data: e,
                                                buffer: r
                                            }
                                        }
                                    }, {
                                        key: "queryPassState",
                                        value: function(e) {
                                            return this.queryPassStateImpl(e.id)
                                        }
                                    }, {
                                        key: "queryBufferState",
                                        value: function(e) {
                                            return this.queryBufferStateImpl(e.id)
                                        }
                                    }, {
                                        key: "queryImageState",
                                        value: function(e) {
                                            return this.queryImageStateImpl(e.id)
                                        }
                                    }, {
                                        key: "queryShaderState",
                                        value: function(e) {
                                            return this.queryShaderStateImpl(e.id)
                                        }
                                    }, {
                                        key: "queryPipelineState",
                                        value: function(e) {
                                            return this.queryPipelineStateImpl(e.id)
                                        }
                                    }]), n
                                }();
                                e.Gfx = t, "undefined" != typeof NativeGlobal && (NativeGlobal.Gfx = t);
                                var a = (n = "undefined" != typeof HTMLCanvasElement ? HTMLCanvasElement.prototype : Object.getPrototypeOf(wx.createOffScreenCanvas())).getContext;
                                n.getContext = function(r, n) {
                                    return "wgfx" == r || "gfx-metal" == r ? new e.Gfx(this, n || {}) : a.call(this, r, n || {})
                                }, e.setGfxConsts = function(e) {
                                    e.FEATURE_INSTANCING = 0, e.FEATURE_TEXTURE_COMPRESSION_DXT = 1, e.FEATURE_TEXTURE_COMPRESSION_PVRTC = 2, e.FEATURE_TEXTURE_COMPRESSION_ATC = 3, e.FEATURE_TEXTURE_COMPRESSION_ETC2 = 4, e.FEATURE_TEXTURE_FLOAT = 5, e.FEATURE_TEXTURE_HALF_FLOAT = 6, e.FEATURE_ORIGIN_BOTTOM_LEFT = 7, e.FEATURE_ORIGIN_TOP_LEFT = 8, e.FEATURE_MSAA_RENDER_TARGETS = 9, e.FEATURE_PACKED_VERTEX_FORMAT_10_2 = 10, e.FEATURE_MULTIPLE_RENDER_TARGET = 11, e.FEATURE_IMAGETYPE_3D = 12, e.FEATURE_IMAGETYPE_ARRAY = 13, e.FEATURE_TEXTURE_COMPRESSION_ETC1 = 14, e.SG_FEATURE_TEXTURE_COMPRESSION_ASTC_8x8 = 15, e.NUM_FEATURES = 16, e.RESOURCESTATE_INITIAL = 0, e.RESOURCESTATE_ALLOC = 1, e.RESOURCESTATE_VALID = 2, e.RESOURCESTATE_FAILED = 3, e.RESOURCESTATE_INVALID = 4, e.USAGE_IMMUTABLE = 1, e.USAGE_DYNAMIC = 2, e.USAGE_STREAM = 3, e.BUFFERTYPE_VERTEXBUFFER = 1, e.BUFFERTYPE_INDEXBUFFER = 2, e.INDEXTYPE_NONE = 1, e.INDEXTYPE_UINT16 = 2, e.INDEXTYPE_UINT32 = 3, e.IMAGETYPE_2D = 1, e.IMAGETYPE_CUBE = 2, e.IMAGETYPE_3D = 3, e.IMAGETYPE_ARRAY = 4, e.CUBEFACE_POS_X = 0, e.CUBEFACE_NEG_X = 1, e.CUBEFACE_POS_Y = 2, e.CUBEFACE_NEG_Y = 3, e.CUBEFACE_POS_Z = 4, e.CUBEFACE_NEG_Z = 5, e.CUBEFACE_NUM = 6, e.SHADERSTAGE_VS = 0, e.SHADERSTAGE_FS = 1, e.PIXELFORMAT_NONE = 1, e.PIXELFORMAT_RGBA8 = 2, e.PIXELFORMAT_RGB8 = 3, e.PIXELFORMAT_RGBA4 = 4, e.PIXELFORMAT_R5G6B5 = 5, e.PIXELFORMAT_R5G5B5A1 = 6, e.PIXELFORMAT_R10G10B10A2 = 7, e.PIXELFORMAT_RGBA32F = 8, e.PIXELFORMAT_RGBA16F = 9, e.PIXELFORMAT_R32F = 10, e.PIXELFORMAT_R16F = 11, e.PIXELFORMAT_L8 = 12, e.PIXELFORMAT_DXT1 = 13, e.PIXELFORMAT_DXT3 = 14, e.PIXELFORMAT_DXT5 = 15, e.PIXELFORMAT_DEPTH = 16, e.PIXELFORMAT_DEPTHSTENCIL = 17, e.PIXELFORMAT_PVRTC2_RGB = 18, e.PIXELFORMAT_PVRTC4_RGB = 19, e.PIXELFORMAT_PVRTC2_RGBA = 20, e.PIXELFORMAT_PVRTC4_RGBA = 21, e.PIXELFORMAT_ETC2_RGB8 = 22, e.PIXELFORMAT_ETC2_SRGB8 = 23, e.PIXELFORMAT_ETC1_RGB8 = 24, e.PIXELFORMAT_PVR_CCZ = 25, e.PIXELFORMAT_PVR_GZ = 26, e.PRIMITIVETYPE_POINTS = 1, e.PRIMITIVETYPE_LINES = 2, e.PRIMITIVETYPE_LINE_STRIP = 3, e.PRIMITIVETYPE_TRIANGLES = 4, e.PRIMITIVETYPE_TRIANGLE_STRIP = 5, e.FILTER_NEAREST = 1, e.FILTER_LINEAR = 2, e.FILTER_NEAREST_MIPMAP_NEAREST = 3, e.FILTER_NEAREST_MIPMAP_LINEAR = 4, e.FILTER_LINEAR_MIPMAP_NEAREST = 5, e.FILTER_LINEAR_MIPMAP_LINEAR = 6, e.WRAP_REPEAT = 1, e.WRAP_CLAMP_TO_EDGE = 2, e.WRAP_MIRRORED_REPEAT = 3, e.VERTEXFORMAT_INVALID = 0, e.VERTEXFORMAT_FLOAT = 1, e.VERTEXFORMAT_FLOAT2 = 2, e.VERTEXFORMAT_FLOAT3 = 3, e.VERTEXFORMAT_FLOAT4 = 4, e.VERTEXFORMAT_BYTE4 = 5, e.VERTEXFORMAT_BYTE4N = 6, e.VERTEXFORMAT_UBYTE4 = 7, e.VERTEXFORMAT_UBYTE4N = 8, e.VERTEXFORMAT_SHORT2 = 9, e.VERTEXFORMAT_SHORT2N = 10, e.VERTEXFORMAT_SHORT4 = 11, e.VERTEXFORMAT_SHORT4N = 12, e.VERTEXFORMAT_UINT10_N2 = 13, e.VERTEXSTEP_PER_VERTEX = 1, e.VERTEXSTEP_PER_INSTANCE = 2, e.UNIFORMTYPE_INVALID = 0, e.UNIFORMTYPE_FLOAT = 1, e.UNIFORMTYPE_FLOAT2 = 2, e.UNIFORMTYPE_FLOAT3 = 3, e.UNIFORMTYPE_FLOAT4 = 4, e.UNIFORMTYPE_MAT4 = 5, e.CULLMODE_NONE = 1, e.CULLMODE_FRONT = 2, e.CULLMODE_BACK = 3, e.FACEWINDING_CCW = 1, e.FACEWINDING_CW = 2, e.COMPAREFUNC_NEVER = 1, e.COMPAREFUNC_LESS = 2, e.COMPAREFUNC_EQUAL = 3, e.COMPAREFUNC_LESS_EQUAL = 4, e.COMPAREFUNC_GREATER = 5, e.COMPAREFUNC_NOT_EQUAL = 6, e.COMPAREFUNC_GREATER_EQUAL = 7, e.COMPAREFUNC_ALWAYS = 8, e.STENCILOP_KEEP = 1, e.STENCILOP_ZERO = 2, e.STENCILOP_REPLACE = 3, e.STENCILOP_INCR_CLAMP = 4, e.STENCILOP_DECR_CLAMP = 5, e.STENCILOP_INVERT = 6, e.STENCILOP_INCR_WRAP = 7, e.STENCILOP_DECR_WRAP = 8, e.BLENDFACTOR_ZERO = 1, e.BLENDFACTOR_ONE = 2, e.BLENDFACTOR_SRC_COLOR = 3, e.BLENDFACTOR_ONE_MINUS_SRC_COLOR = 4, e.BLENDFACTOR_SRC_ALPHA = 5, e.BLENDFACTOR_ONE_MINUS_SRC_ALPHA = 6, e.BLENDFACTOR_DST_COLOR = 7, e.BLENDFACTOR_ONE_MINUS_DST_COLOR = 8, e.BLENDFACTOR_DST_ALPHA = 9, e.BLENDFACTOR_ONE_MINUS_DST_ALPHA = 10, e.BLENDFACTOR_SRC_ALPHA_SATURATED = 11, e.BLENDFACTOR_BLEND_COLOR = 12, e.BLENDFACTOR_ONE_MINUS_BLEND_COLOR = 13, e.BLENDFACTOR_BLEND_ALPHA = 14, e.BLENDFACTOR_ONE_MINUS_BLEND_ALPHA = 15, e.BLENDOP_ADD = 1, e.BLENDOP_SUBTRACT = 2, e.BLENDOP_REVERSE_SUBTRACT = 3, e.COLORMASK_NONE = 16, e.COLORMASK_R = 1, e.COLORMASK_G = 2, e.COLORMASK_B = 4, e.COLORMASK_A = 8, e.COLORMASK_RGB = 7, e.COLORMASK_RGBA = 15, e.ACTION_CLEAR = 1, e.ACTION_LOAD = 2, e.ACTION_DONTCARE = 3, e.INVALID_ID = 0, e.NUM_SHADER_STAGES = 2, e.NUM_INFLIGHT_FRAMES = 2, e.MAX_COLOR_ATTACHMENTS = 4, e.MAX_SHADERSTAGE_BUFFERS = 4, e.MAX_SHADERSTAGE_IMAGES = 12, e.MAX_SHADERSTAGE_UBS = 4, e.MAX_UB_MEMBERS = 16, e.MAX_VERTEX_ATTRIBUTES = 16, e.MAX_MIPMAPS = 16, e.MAX_TEXTUREARRAY_LAYERS = 128, e.UNSIGNED_BYTE = 5121, e.FLOAT = 5126, e.UNSIGNED_SHORT_5_6_5 = 33635, e.UNSIGNED_SHORT_4_4_4_4 = 32819, e.UNSIGNED_SHORT_5_5_5_1 = 32820
                                }
                            }(t || (t = {}))
                    }, function(e, r, n) {
                        var t, a, i;
                        n.r(r), n.d(r, "init", (function() {
                            return o
                        })), n.d(r, "getImageData", (function() {
                            return f
                        }));
                        var u = !1;

                        function o() {
                            if (!u) {
                                var e = null;
                                (e = "undefined" != typeof wx ? wx.createOffScreenCanvas ? wx.createOffScreenCanvas() : wx.createCanvas() : document ? document.createElement("canvas") : __global.document.createElement("canvas")).height = 2048, e.width = 2048, t = e.getContext("webgl"), a = t.createFramebuffer(), i = t.createTexture(), t.bindTexture(t.TEXTURE_2D, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), u = !0
                            }
                        }

                        function f(e) {
                            if (u || (u = !0, o()), t.bindTexture(t.TEXTURE_2D, i), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.bindFramebuffer(t.FRAMEBUFFER, a), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, i, 0), t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE) {
                                var r = new Uint8Array(e.width * e.height * 4);
                                return t.readPixels(0, 0, e.width, e.height, t.RGBA, t.UNSIGNED_BYTE, r), t.bindFramebuffer(t.FRAMEBUFFER, null), r
                            }
                            return new Uint8Array([255, 0, 0, 255, 255])
                        }
                    }])), e
            }))
        }
}();