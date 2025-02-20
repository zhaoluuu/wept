try {
    ! function() {
        let t, e = "getPixiGlobalVar";
        globalThis[e] ? t = globalThis[e] : void 0 !== globalThis.WeixinJSBridge && globalThis.WeixinJSBridge[e] && (t = globalThis.WeixinJSBridge[e]);
        var {
            console: i,
            wxConsole: r,
            wxNativeConsole: s,
            __wxConfig: n,
            __errorTracer__: a,
            wxGA: h,
            Reporter: o,
            Foundation: l,
            __appServiceSDK__: u
        } = t();
        (() => {
            "use strict";
            var t = {
                    d: (e, i) => {
                        for (var r in i) t.o(i, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: i[r]
                        })
                    },
                    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
                    r: t => {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }
                },
                e = {};
            t.r(e), t.d(e, {
                ALPHA_MODES: () => G,
                AbstractBatchRenderer: () => Nr,
                AbstractRenderer: () => Ir,
                Attribute: () => ni,
                BLEND_MODES: () => R,
                BUFFER_BITS: () => P,
                BaseRenderTexture: () => Ke,
                BaseTexture: () => je,
                BatchDrawCall: () => Rr,
                BatchGeometry: () => Fr,
                BatchPluginFactory: () => Gr,
                BatchRenderer: () => Xr,
                BatchShaderGenerator: () => Br,
                BatchTextureArray: () => Or,
                BitmapFont: () => Gs,
                BitmapFontData: () => Ns,
                BitmapFontLoader: () => Vs,
                BitmapText: () => zs,
                Bounds: () => Se,
                Buffer: () => hi,
                CLEAR_MODES: () => X,
                Circle: () => ne,
                Container: () => Me,
                DEG_TO_RAD: () => re,
                DRAW_MODES: () => O,
                DisplayObject: () => Ae,
                ENV: () => M,
                Ellipse: () => ae,
                FORMATS: () => L,
                FillStyle: () => Js,
                Filter: () => rr,
                FilterState: () => _i,
                Framebuffer: () => Ze,
                GC_MODES: () => H,
                GLFramebuffer: () => wi,
                GLProgram: () => vr,
                GLTexture: () => Er,
                GRAPHICS_CURVES: () => Ks,
                Geometry: () => fi,
                Graphics: () => wn,
                GraphicsData: () => vn,
                GraphicsGeometry: () => yn,
                IGLUniformData: () => gr,
                InteractionData: () => De,
                InteractionEvent: () => Pe,
                InteractionManager: () => Be,
                InteractionTrackingData: () => Re,
                LINE_CAP: () => $s,
                LINE_JOIN: () => Ws,
                LineStyle: () => Tn,
                Loader: () => us,
                LoaderResource: () => hs,
                MASK_TYPES: () => V,
                MIPMAP_MODES: () => k,
                MSAA_QUALITY: () => Y,
                MaskData: () => Di,
                Matrix: () => de,
                ObjectRenderer: () => yi,
                ObservablePoint: () => ue,
                PI_2: () => ee,
                PRECISION: () => z,
                Point: () => le,
                Polygon: () => he,
                Program: () => tr,
                Quad: () => pi,
                QuadUv: () => mi,
                RAD_TO_DEG: () => ie,
                RENDERER_TYPE: () => D,
                Rectangle: () => se,
                RenderTexture: () => ri,
                RenderTexturePool: () => si,
                Renderer: () => Cr,
                ResourceType: () => os,
                RoundedRectangle: () => oe,
                SCALE_MODES: () => F,
                SHAPES: () => qt,
                Shader: () => er,
                Sprite: () => Es,
                SpriteMaskFilter: () => ar,
                Spritesheet: () => ds,
                SpritesheetLoader: () => fs,
                State: () => ir,
                System: () => $e,
                TARGETS: () => N,
                TEXT_GRADIENT: () => ys,
                TYPES: () => B,
                TemporaryDisplayObject: () => Ie,
                Text: () => Ls,
                TextMetrics: () => Ps,
                TextStyle: () => Is,
                Texture: () => ti,
                TextureLoader: () => ls,
                TextureMatrix: () => nr,
                TextureUvs: () => Je,
                Ticker: () => Ee,
                TickerPlugin: () => we,
                Transform: () => Te,
                UPDATE_PRIORITY: () => xe,
                UniformGroup: () => vi,
                VERSION: () => Sn,
                ViewableBuffer: () => Lr,
                WRAP_MODES: () => U,
                autoDetectRenderer: () => Mr,
                checkMaxIfStatementsInShader: () => Ki,
                checkProducts: () => An,
                defaultFilterVertex: () => Pr,
                defaultVertex: () => Dr,
                graphicsUtils: () => gn,
                groupD8: () => ye,
                interactiveTarget: () => Le,
                isMobile: () => $,
                navigator: () => W,
                resources: () => We,
                settings: () => j,
                systems: () => Sr,
                uniformParsers: () => Yi,
                utils: () => te
            });
            var {
                _requestSkipCheckDomain: r,
                createImage: s,
                _createCanvas: n,
                getPerformance: a,
                getShouldMakeCanvasSecure: h,
                IS_IOS: o
            } = u, l = function() {
                var t = s();
                return t._type = "image", t
            }, d = function() {
                var t = n({
                    secure: h()
                }, !1);
                return t._type = "canvas", t
            }, c = a(), f = /iPhone/i, p = /iPod/i, m = /iPad/i, g = /\biOS-universal(?:.+)Mac\b/i, v = /\bAndroid(?:.+)Mobile\b/i, _ = /Android/i, x = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, y = /Silk/i, T = /Windows Phone/i, b = /\bWindows(?:.+)ARM\b/i, E = /BlackBerry/i, w = /BB10/i, S = /Opera Mini/i, A = /\b(CriOS|Chrome)(?:.+)Mobile/i, I = /Mobile(?:.+)Firefox\b/i, C = function(t) {
                return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
            };
            var M, D, P, R, O, L, N, B, F, U, k, G, X, H, z, V, Y, j = {
                    MIPMAP_TEXTURES: 1,
                    ANISOTROPIC_LEVEL: 0,
                    RESOLUTION: 1,
                    FILTER_RESOLUTION: 1,
                    SPRITE_MAX_TEXTURES: 32,
                    SPRITE_BATCH_SIZE: 4096,
                    RENDER_OPTIONS: {
                        view: null,
                        antialias: !1,
                        autoDensity: !1,
                        transparent: !1,
                        backgroundColor: 0,
                        clearBeforeRender: !0,
                        preserveDrawingBuffer: !1,
                        width: 800,
                        height: 600,
                        legacy: !1
                    },
                    GC_MODE: 0,
                    GC_MAX_IDLE: 3600,
                    GC_MAX_CHECK_COUNT: 600,
                    WRAP_MODE: 33071,
                    SCALE_MODE: 1,
                    PRECISION_VERTEX: "highp",
                    PRECISION_FRAGMENT: "highp",
                    CAN_UPLOAD_SAME_BUFFER: !o,
                    CREATE_IMAGE_BITMAP: !1,
                    ROUND_PIXELS: !1
                },
                W = {
                    platform: "ios",
                    language: "zh-cn",
                    appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
                    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN"
                },
                $ = function(t) {
                    var e = {
                        userAgent: "",
                        platform: "",
                        maxTouchPoints: 0
                    };
                    t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
                        userAgent: t.userAgent,
                        platform: t.platform,
                        maxTouchPoints: t.maxTouchPoints || 0
                    }) : e = {
                        userAgent: navigator.userAgent,
                        platform: navigator.platform,
                        maxTouchPoints: navigator.maxTouchPoints || 0
                    };
                    var i = e.userAgent,
                        r = i.split("[FBAN");
                    void 0 !== r[1] && (i = r[0]), void 0 !== (r = i.split("Twitter"))[1] && (i = r[0]);
                    var s = function(t) {
                            return function(e) {
                                return e.test(t)
                            }
                        }(i),
                        n = {
                            apple: {
                                phone: s(f) && !s(T),
                                ipod: s(p),
                                tablet: !s(f) && (s(m) || C(e)) && !s(T),
                                universal: s(g),
                                device: (s(f) || s(p) || s(m) || s(g) || C(e)) && !s(T)
                            },
                            amazon: {
                                phone: s(x),
                                tablet: !s(x) && s(y),
                                device: s(x) || s(y)
                            },
                            android: {
                                phone: !s(T) && s(x) || !s(T) && s(v),
                                tablet: !s(T) && !s(x) && !s(v) && (s(y) || s(_)),
                                device: !s(T) && (s(x) || s(y) || s(v) || s(_)) || s(/\bokhttp\b/i)
                            },
                            windows: {
                                phone: s(T),
                                tablet: s(b),
                                device: s(T) || s(b)
                            },
                            other: {
                                blackberry: s(E),
                                blackberry10: s(w),
                                opera: s(S),
                                firefox: s(I),
                                chrome: s(A),
                                device: s(E) || s(w) || s(S) || s(I) || s(A)
                            },
                            any: !1,
                            phone: !1,
                            tablet: !1
                        };
                    return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n
                }(W);
            ! function(t) {
                t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
            }(M || (M = {})),
            function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
            }(D || (D = {})),
            function(t) {
                t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
            }(P || (P = {})),
            function(t) {
                t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
            }(R || (R = {})),
            function(t) {
                t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
            }(O || (O = {})),
            function(t) {
                t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
            }(L || (L = {})),
            function(t) {
                t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
            }(N || (N = {})),
            function(t) {
                t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.FLOAT = 5126] = "FLOAT", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
            }(B || (B = {})),
            function(t) {
                t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
            }(F || (F = {})),
            function(t) {
                t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
            }(U || (U = {})),
            function(t) {
                t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON"
            }(k || (k = {})),
            function(t) {
                t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
            }(G || (G = {})),
            function(t) {
                t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
            }(X || (X = {})),
            function(t) {
                t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
            }(H || (H = {})),
            function(t) {
                t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
            }(z || (z = {})),
            function(t) {
                t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
            }(V || (V = {})),
            function(t) {
                t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
            }(Y || (Y = {}));
            var q = Object.prototype.hasOwnProperty,
                Z = "~";

            function K() {}

            function J(t, e, i) {
                this.fn = t, this.context = e, this.once = i || !1
            }

            function Q(t, e, i, r, s) {
                if ("function" != typeof i) throw new TypeError("The listener must be a function");
                var n = new J(i, r || t, s),
                    a = Z ? Z + e : e;
                return t._events[a] ? t._events[a].fn ? t._events[a] = [t._events[a], n] : t._events[a].push(n) : (t._events[a] = n, t._eventsCount++), t
            }

            function tt(t, e) {
                0 == --t._eventsCount ? t._events = new K : delete t._events[e]
            }

            function et() {
                this._events = new K, this._eventsCount = 0
            }

            function it(t, e, i) {
                i = i || 2;
                var r, s, n, a, h, o, l, u = e && e.length,
                    d = u ? e[0] * i : t.length,
                    c = rt(t, 0, d, i, !0),
                    f = [];
                if (!c || c.next === c.prev) return f;
                if (u && (c = function(t, e, i, r) {
                        var s, n, a, h = [];
                        for (s = 0, n = e.length; s < n; s++)(a = rt(t, e[s] * r, s < n - 1 ? e[s + 1] * r : t.length, r, !1)) === a.next && (a.steiner = !0), h.push(pt(a));
                        for (h.sort(ut), s = 0; s < h.length; s++) i = st(i = dt(h[s], i), i.next);
                        return i
                    }(t, e, c, i)), t.length > 80 * i) {
                    r = n = t[0], s = a = t[1];
                    for (var p = i; p < d; p += i)(h = t[p]) < r && (r = h), (o = t[p + 1]) < s && (s = o), h > n && (n = h), o > a && (a = o);
                    l = 0 !== (l = Math.max(n - r, a - s)) ? 1 / l : 0
                }
                return nt(c, f, i, r, s, l), f
            }

            function rt(t, e, i, r, s) {
                var n, a;
                if (s === It(t, e, i, r) > 0)
                    for (n = e; n < i; n += r) a = wt(n, t[n], t[n + 1], a);
                else
                    for (n = i - r; n >= e; n -= r) a = wt(n, t[n], t[n + 1], a);
                return a && _t(a, a.next) && (St(a), a = a.next), a
            }

            function st(t, e) {
                if (!t) return t;
                e || (e = t);
                var i, r = t;
                do {
                    if (i = !1, r.steiner || !_t(r, r.next) && 0 !== vt(r.prev, r, r.next)) r = r.next;
                    else {
                        if (St(r), (r = e = r.prev) === r.next) break;
                        i = !0
                    }
                } while (i || r !== e);
                return e
            }

            function nt(t, e, i, r, s, n, a) {
                if (t) {
                    !a && n && function(t, e, i, r) {
                        var s = t;
                        do {
                            null === s.z && (s.z = ft(s.x, s.y, e, i, r)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next
                        } while (s !== t);
                        s.prevZ.nextZ = null, s.prevZ = null,
                            function(t) {
                                var e, i, r, s, n, a, h, o, l = 1;
                                do {
                                    for (i = t, t = null, n = null, a = 0; i;) {
                                        for (a++, r = i, h = 0, e = 0; e < l && (h++, r = r.nextZ); e++);
                                        for (o = l; h > 0 || o > 0 && r;) 0 !== h && (0 === o || !r || i.z <= r.z) ? (s = i, i = i.nextZ, h--) : (s = r, r = r.nextZ, o--), n ? n.nextZ = s : t = s, s.prevZ = n, n = s;
                                        i = r
                                    }
                                    n.nextZ = null, l *= 2
                                } while (a > 1)
                            }(s)
                    }(t, r, s, n);
                    for (var h, o, l = t; t.prev !== t.next;)
                        if (h = t.prev, o = t.next, n ? ht(t, r, s, n) : at(t)) e.push(h.i / i), e.push(t.i / i), e.push(o.i / i), St(t), t = o.next, l = o.next;
                        else if ((t = o) === l) {
                        a ? 1 === a ? nt(t = ot(st(t), e, i), e, i, r, s, n, 2) : 2 === a && lt(t, e, i, r, s, n) : nt(st(t), e, i, r, s, n, 1);
                        break
                    }
                }
            }

            function at(t) {
                var e = t.prev,
                    i = t,
                    r = t.next;
                if (vt(e, i, r) >= 0) return !1;
                for (var s = t.next.next; s !== t.prev;) {
                    if (mt(e.x, e.y, i.x, i.y, r.x, r.y, s.x, s.y) && vt(s.prev, s, s.next) >= 0) return !1;
                    s = s.next
                }
                return !0
            }

            function ht(t, e, i, r) {
                var s = t.prev,
                    n = t,
                    a = t.next;
                if (vt(s, n, a) >= 0) return !1;
                for (var h = s.x < n.x ? s.x < a.x ? s.x : a.x : n.x < a.x ? n.x : a.x, o = s.y < n.y ? s.y < a.y ? s.y : a.y : n.y < a.y ? n.y : a.y, l = s.x > n.x ? s.x > a.x ? s.x : a.x : n.x > a.x ? n.x : a.x, u = s.y > n.y ? s.y > a.y ? s.y : a.y : n.y > a.y ? n.y : a.y, d = ft(h, o, e, i, r), c = ft(l, u, e, i, r), f = t.prevZ, p = t.nextZ; f && f.z >= d && p && p.z <= c;) {
                    if (f !== t.prev && f !== t.next && mt(s.x, s.y, n.x, n.y, a.x, a.y, f.x, f.y) && vt(f.prev, f, f.next) >= 0) return !1;
                    if (f = f.prevZ, p !== t.prev && p !== t.next && mt(s.x, s.y, n.x, n.y, a.x, a.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0) return !1;
                    p = p.nextZ
                }
                for (; f && f.z >= d;) {
                    if (f !== t.prev && f !== t.next && mt(s.x, s.y, n.x, n.y, a.x, a.y, f.x, f.y) && vt(f.prev, f, f.next) >= 0) return !1;
                    f = f.prevZ
                }
                for (; p && p.z <= c;) {
                    if (p !== t.prev && p !== t.next && mt(s.x, s.y, n.x, n.y, a.x, a.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0) return !1;
                    p = p.nextZ
                }
                return !0
            }

            function ot(t, e, i) {
                var r = t;
                do {
                    var s = r.prev,
                        n = r.next.next;
                    !_t(s, n) && xt(s, r, r.next, n) && bt(s, n) && bt(n, s) && (e.push(s.i / i), e.push(r.i / i), e.push(n.i / i), St(r), St(r.next), r = t = n), r = r.next
                } while (r !== t);
                return st(r)
            }

            function lt(t, e, i, r, s, n) {
                var a = t;
                do {
                    for (var h = a.next.next; h !== a.prev;) {
                        if (a.i !== h.i && gt(a, h)) {
                            var o = Et(a, h);
                            return a = st(a, a.next), o = st(o, o.next), nt(a, e, i, r, s, n), void nt(o, e, i, r, s, n)
                        }
                        h = h.next
                    }
                    a = a.next
                } while (a !== t)
            }

            function ut(t, e) {
                return t.x - e.x
            }

            function dt(t, e) {
                var i = function(t, e) {
                    var i, r = e,
                        s = t.x,
                        n = t.y,
                        a = -1 / 0;
                    do {
                        if (n <= r.y && n >= r.next.y && r.next.y !== r.y) {
                            var h = r.x + (n - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                            if (h <= s && h > a) {
                                if (a = h, h === s) {
                                    if (n === r.y) return r;
                                    if (n === r.next.y) return r.next
                                }
                                i = r.x < r.next.x ? r : r.next
                            }
                        }
                        r = r.next
                    } while (r !== e);
                    if (!i) return null;
                    if (s === a) return i;
                    var o, l = i,
                        u = i.x,
                        d = i.y,
                        c = 1 / 0;
                    r = i;
                    do {
                        s >= r.x && r.x >= u && s !== r.x && mt(n < d ? s : a, n, u, d, n < d ? a : s, n, r.x, r.y) && (o = Math.abs(n - r.y) / (s - r.x), bt(r, t) && (o < c || o === c && (r.x > i.x || r.x === i.x && ct(i, r))) && (i = r, c = o)), r = r.next
                    } while (r !== l);
                    return i
                }(t, e);
                if (!i) return e;
                var r = Et(i, t),
                    s = st(i, i.next);
                return st(r, r.next), e === i ? s : e
            }

            function ct(t, e) {
                return vt(t.prev, t, e.prev) < 0 && vt(e.next, t, t.next) < 0
            }

            function ft(t, e, i, r, s) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * s) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * s) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
            }

            function pt(t) {
                var e = t,
                    i = t;
                do {
                    (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
                } while (e !== t);
                return i
            }

            function mt(t, e, i, r, s, n, a, h) {
                return (s - a) * (e - h) - (t - a) * (n - h) >= 0 && (t - a) * (r - h) - (i - a) * (e - h) >= 0 && (i - a) * (n - h) - (s - a) * (r - h) >= 0
            }

            function gt(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
                    var i = t;
                    do {
                        if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && xt(i, i.next, t, e)) return !0;
                        i = i.next
                    } while (i !== t);
                    return !1
                }(t, e) && (bt(t, e) && bt(e, t) && function(t, e) {
                    var i = t,
                        r = !1,
                        s = (t.x + e.x) / 2,
                        n = (t.y + e.y) / 2;
                    do {
                        i.y > n != i.next.y > n && i.next.y !== i.y && s < (i.next.x - i.x) * (n - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next
                    } while (i !== t);
                    return r
                }(t, e) && (vt(t.prev, t, e.prev) || vt(t, e.prev, e)) || _t(t, e) && vt(t.prev, t, t.next) > 0 && vt(e.prev, e, e.next) > 0)
            }

            function vt(t, e, i) {
                return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
            }

            function _t(t, e) {
                return t.x === e.x && t.y === e.y
            }

            function xt(t, e, i, r) {
                var s = Tt(vt(t, e, i)),
                    n = Tt(vt(t, e, r)),
                    a = Tt(vt(i, r, t)),
                    h = Tt(vt(i, r, e));
                return s !== n && a !== h || (!(0 !== s || !yt(t, i, e)) || (!(0 !== n || !yt(t, r, e)) || (!(0 !== a || !yt(i, t, r)) || !(0 !== h || !yt(i, e, r)))))
            }

            function yt(t, e, i) {
                return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y)
            }

            function Tt(t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }

            function bt(t, e) {
                return vt(t.prev, t, t.next) < 0 ? vt(t, e, t.next) >= 0 && vt(t, t.prev, e) >= 0 : vt(t, e, t.prev) < 0 || vt(t, t.next, e) < 0
            }

            function Et(t, e) {
                var i = new At(t.i, t.x, t.y),
                    r = new At(e.i, e.x, e.y),
                    s = t.next,
                    n = e.prev;
                return t.next = e, e.prev = t, i.next = s, s.prev = i, r.next = i, i.prev = r, n.next = r, r.prev = n, r
            }

            function wt(t, e, i, r) {
                var s = new At(t, e, i);
                return r ? (s.next = r.next, s.prev = r, r.next.prev = s, r.next = s) : (s.prev = s, s.next = s), s
            }

            function St(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }

            function At(t, e, i) {
                this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }

            function It(t, e, i, r) {
                for (var s = 0, n = e, a = i - r; n < i; n += r) s += (t[a] - t[n]) * (t[n + 1] + t[a + 1]), a = n;
                return s
            }

            function Ct(t, e = []) {
                return e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
            }

            function Mt(t) {
                var e = t.toString(16);
                return `#${e="000000".substr(0,6-e.length)+e}`
            }

            function Dt(t) {
                return "string" == typeof t && "#" === t[0] && (t = t.substr(1)), parseInt(t, 16)
            }
            Object.create && (K.prototype = Object.create(null), (new K).__proto__ || (Z = !1)), et.prototype.eventNames = function() {
                var t, e, i = [];
                if (0 === this._eventsCount) return i;
                for (e in t = this._events) q.call(t, e) && i.push(Z ? e.slice(1) : e);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
            }, et.prototype.listeners = function(t) {
                var e = Z ? Z + t : t,
                    i = this._events[e];
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var r = 0, s = i.length, n = new Array(s); r < s; r++) n[r] = i[r].fn;
                return n
            }, et.prototype.listenerCount = function(t) {
                var e = Z ? Z + t : t,
                    i = this._events[e];
                return i ? i.fn ? 1 : i.length : 0
            }, et.prototype.emit = function(t, e, i, r, s, n) {
                var a = Z ? Z + t : t;
                if (!this._events[a]) return !1;
                var h, o, l = this._events[a],
                    u = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(t, l.fn, void 0, !0), u) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, e), !0;
                        case 3:
                            return l.fn.call(l.context, e, i), !0;
                        case 4:
                            return l.fn.call(l.context, e, i, r), !0;
                        case 5:
                            return l.fn.call(l.context, e, i, r, s), !0;
                        case 6:
                            return l.fn.call(l.context, e, i, r, s, n), !0
                    }
                    for (o = 1, h = new Array(u - 1); o < u; o++) h[o - 1] = arguments[o];
                    l.fn.apply(l.context, h)
                } else {
                    var d, c = l.length;
                    for (o = 0; o < c; o++) switch (l[o].once && this.removeListener(t, l[o].fn, void 0, !0), u) {
                        case 1:
                            l[o].fn.call(l[o].context);
                            break;
                        case 2:
                            l[o].fn.call(l[o].context, e);
                            break;
                        case 3:
                            l[o].fn.call(l[o].context, e, i);
                            break;
                        case 4:
                            l[o].fn.call(l[o].context, e, i, r);
                            break;
                        default:
                            if (!h)
                                for (d = 1, h = new Array(u - 1); d < u; d++) h[d - 1] = arguments[d];
                            l[o].fn.apply(l[o].context, h)
                    }
                }
                return !0
            }, et.prototype.on = function(t, e, i) {
                return Q(this, t, e, i, !1)
            }, et.prototype.once = function(t, e, i) {
                return Q(this, t, e, i, !0)
            }, et.prototype.removeListener = function(t, e, i, r) {
                var s = Z ? Z + t : t;
                if (!this._events[s]) return this;
                if (!e) return tt(this, s), this;
                var n = this._events[s];
                if (n.fn) n.fn !== e || r && !n.once || i && n.context !== i || tt(this, s);
                else {
                    for (var a = 0, h = [], o = n.length; a < o; a++)(n[a].fn !== e || r && !n[a].once || i && n[a].context !== i) && h.push(n[a]);
                    h.length ? this._events[s] = 1 === h.length ? h[0] : h : tt(this, s)
                }
                return this
            }, et.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = Z ? Z + t : t, this._events[e] && tt(this, e)) : (this._events = new K, this._eventsCount = 0), this
            }, et.prototype.off = et.prototype.removeListener, et.prototype.addListener = et.prototype.on, et.prefixed = Z, et.EventEmitter = et, it.deviation = function(t, e, i, r) {
                var s = e && e.length,
                    n = s ? e[0] * i : t.length,
                    a = Math.abs(It(t, 0, n, i));
                if (s)
                    for (var h = 0, o = e.length; h < o; h++) {
                        var l = e[h] * i,
                            u = h < o - 1 ? e[h + 1] * i : t.length;
                        a -= Math.abs(It(t, l, u, i))
                    }
                var d = 0;
                for (h = 0; h < r.length; h += 3) {
                    var c = r[h] * i,
                        f = r[h + 1] * i,
                        p = r[h + 2] * i;
                    d += Math.abs((t[c] - t[p]) * (t[f + 1] - t[c + 1]) - (t[c] - t[f]) * (t[p + 1] - t[c + 1]))
                }
                return 0 === a && 0 === d ? 0 : Math.abs((d - a) / a)
            }, it.flatten = function(t) {
                for (var e = t[0][0].length, i = {
                        vertices: [],
                        holes: [],
                        dimensions: e
                    }, r = 0, s = 0; s < t.length; s++) {
                    for (var n = 0; n < t[s].length; n++)
                        for (var a = 0; a < e; a++) i.vertices.push(t[s][n][a]);
                    s > 0 && (r += t[s - 1].length, i.holes.push(r))
                }
                return i
            }, j.RETINA_PREFIX = /@([0-9\.]+)x/, j.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0;
            var Pt = function() {
                for (var t = [], e = [], i = 0; i < 32; i++) t[i] = i, e[i] = i;
                t[R.NORMAL_NPM] = R.NORMAL, t[R.ADD_NPM] = R.ADD, t[R.SCREEN_NPM] = R.SCREEN, e[R.NORMAL] = R.NORMAL_NPM, e[R.ADD] = R.ADD_NPM, e[R.SCREEN] = R.SCREEN_NPM;
                var r = [];
                return r.push(e), r.push(t), r
            }();

            function Rt(t, e) {
                if (1 === e) return (255 * e << 24) + t;
                if (0 === e) return 0;
                var i = t >> 16 & 255,
                    r = t >> 8 & 255,
                    s = 255 & t;
                return (255 * e << 24) + ((i = i * e + .5 | 0) << 16) + ((r = r * e + .5 | 0) << 8) + (s = s * e + .5 | 0)
            }

            function Ot(t, e, i, r) {
                return (i = i || new Float32Array(4))[0] = (t >> 16 & 255) / 255, i[1] = (t >> 8 & 255) / 255, i[2] = (255 & t) / 255, (r || void 0 === r) && (i[0] *= e, i[1] *= e, i[2] *= e), i[3] = e, i
            }

            function Lt(t) {
                if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
                if (2 === t.BYTES_PER_ELEMENT) {
                    if (t instanceof Uint16Array) return "Uint16Array"
                } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
                return null
            }
            var Nt = {
                Float32Array: Float32Array,
                Uint32Array: Uint32Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array
            };

            function Bt(t) {
                return t += 0 === t ? 1 : 0, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
            }

            function Ft(t) {
                return !(t & t - 1 || !t)
            }

            function Ut(t) {
                var e = (t > 65535 ? 1 : 0) << 4,
                    i = ((t >>>= e) > 255 ? 1 : 0) << 3;
                return e |= i, e |= i = ((t >>>= i) > 15 ? 1 : 0) << 2, (e |= i = ((t >>>= i) > 3 ? 1 : 0) << 1) | (t >>>= i) >> 1
            }

            function kt(t, e, i) {
                var r, s = t.length;
                if (!(e >= s || 0 === i)) {
                    var n = s - (i = e + i > s ? s - e : i);
                    for (r = e; r < n; ++r) t[r] = t[r + i];
                    t.length = n
                }
            }

            function Gt(t) {
                return 0 === t ? 0 : t < 0 ? -1 : 1
            }
            var Xt = 0;

            function Ht() {
                return ++Xt
            }
            var zt = {},
                Vt = Object.create(null),
                Yt = Object.create(null);
            var jt = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

            function Wt(t, e) {
                var i = j.RETINA_PREFIX.exec(t);
                return i ? parseFloat(i[1]) : void 0 !== e ? e : 1
            }
            var $t = s().constructor;
            var qt, Zt = (new class {
                    construct() {
                        this._type = "canvas"
                    }
                }).constructor,
                Kt = {
                    createElement: t => "canvas" === t ? d() : "img" === t ? l() : void 0
                },
                Jt = {
                    SCISSOR_TEST: 3089,
                    STENCIL_TEST: 2960
                },
                Qt = function(t, e) {
                    var i = t.measureText(e);
                    return i ? i.width : 14 * e.length
                },
                te = {
                    BaseTextureCache: Yt,
                    DATA_URI: jt,
                    EventEmitter: et,
                    HTMLCanvasElement: Zt,
                    HTMLImageElement: $t,
                    ProgramCache: zt,
                    TextureCache: Vt,
                    WebGLRenderingContext: Jt,
                    clearTextureCache: function() {},
                    correctBlendMode: function(t, e) {
                        return Pt[e ? 1 : 0][t]
                    },
                    createIndicesForQuads: function(t, e = null) {
                        var i = 6 * t;
                        if ((e = e || new Uint16Array(i)).length !== i) throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${i}`);
                        for (var r = 0, s = 0; r < i; r += 6, s += 4) e[r + 0] = s + 0, e[r + 1] = s + 1, e[r + 2] = s + 2, e[r + 3] = s + 0, e[r + 4] = s + 2, e[r + 5] = s + 3;
                        return e
                    },
                    decomposeDataUri: function(t) {
                        var e = jt.exec(t);
                        if (e) return {
                            mediaType: e[1] ? e[1].toLowerCase() : void 0,
                            subType: e[2] ? e[2].toLowerCase() : void 0,
                            charset: e[3] ? e[3].toLowerCase() : void 0,
                            encoding: e[4] ? e[4].toLowerCase() : void 0,
                            data: e[5]
                        }
                    },
                    destroyTextureCache: function() {},
                    document: Kt,
                    earcut: it,
                    getBufferType: Lt,
                    getResolutionOfUrl: Wt,
                    getTextWidth: Qt,
                    hex2rgb: Ct,
                    hex2string: Mt,
                    interleaveTypedArrays: function(t, e) {
                        for (var i = 0, r = 0, s = {}, n = 0; n < t.length; n++) r += e[n], i += t[n].length;
                        for (var a = new ArrayBuffer(4 * i), h = null, o = 0, l = 0; l < t.length; l++) {
                            var u = e[l],
                                d = t[l],
                                c = Lt(d);
                            s[c] || (s[c] = new Nt[c](a)), h = s[c];
                            for (var f = 0; f < d.length; f++) {
                                h[(f / u | 0) * r + o + f % u] = d[f]
                            }
                            o += u
                        }
                        return new Float32Array(a)
                    },
                    isPow2: Ft,
                    log2: Ut,
                    nextPow2: Bt,
                    premultiplyBlendMode: Pt,
                    premultiplyRgba: function(t, e, i, r) {
                        return i = i || new Float32Array(4), r || void 0 === r ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e) : (i[0] = t[0], i[1] = t[1], i[2] = t[2]), i[3] = e, i
                    },
                    premultiplyTint: Rt,
                    premultiplyTintToRgba: Ot,
                    removeItems: kt,
                    rgb2hex: function(t) {
                        return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
                    },
                    sign: Gt,
                    string2hex: Dt,
                    uid: Ht,
                    isMobile: $
                },
                ee = 2 * Math.PI,
                ie = 180 / Math.PI,
                re = Math.PI / 180;
            ! function(t) {
                t[t.POLY = 0] = "POLY", t[t.RECT = 1] = "RECT", t[t.CIRC = 2] = "CIRC", t[t.ELIP = 3] = "ELIP", t[t.RREC = 4] = "RREC"
            }(qt || (qt = {}));
            class se {
                constructor(t = 0, e = 0, i = 0, r = 0) {
                    this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(r), this.type = qt.RECT
                }
                get left() {
                    return this.x
                }
                get right() {
                    return this.x + this.width
                }
                get top() {
                    return this.y
                }
                get bottom() {
                    return this.y + this.height
                }
                static get EMPTY() {
                    return new se(0, 0, 0, 0)
                }
                clone() {
                    return new se(this.x, this.y, this.width, this.height)
                }
                copyFrom(t) {
                    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
                }
                copyTo(t) {
                    return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
                }
                contains(t, e) {
                    return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
                }
                pad(t = 0, e = t) {
                    return this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this
                }
                fit(t) {
                    var e = Math.max(this.x, t.x),
                        i = Math.min(this.x + this.width, t.x + t.width),
                        r = Math.max(this.y, t.y),
                        s = Math.min(this.y + this.height, t.y + t.height);
                    return this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(s - r, 0), this
                }
                ceil(t = 1, e = .001) {
                    var i = Math.ceil((this.x + this.width - e) * t) / t,
                        r = Math.ceil((this.y + this.height - e) * t) / t;
                    return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = r - this.y, this
                }
                enlarge(t) {
                    var e = Math.min(this.x, t.x),
                        i = Math.max(this.x + this.width, t.x + t.width),
                        r = Math.min(this.y, t.y),
                        s = Math.max(this.y + this.height, t.y + t.height);
                    return this.x = e, this.width = i - e, this.y = r, this.height = s - r, this
                }
            }
            class ne {
                constructor(t = 0, e = 0, i = 0) {
                    this.x = t, this.y = e, this.radius = i, this.type = qt.CIRC
                }
                clone() {
                    return new ne(this.x, this.y, this.radius)
                }
                contains(t, e) {
                    if (this.radius <= 0) return !1;
                    var i = this.radius * this.radius,
                        r = this.x - t,
                        s = this.y - e;
                    return (r *= r) + (s *= s) <= i
                }
                getBounds() {
                    return new se(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                }
            }
            class ae {
                constructor(t = 0, e = 0, i = 0, r = 0) {
                    this.x = t, this.y = e, this.width = i, this.height = r, this.type = qt.ELIP
                }
                clone() {
                    return new ae(this.x, this.y, this.width, this.height)
                }
                contains(t, e) {
                    if (this.width <= 0 || this.height <= 0) return !1;
                    var i = (t - this.x) / this.width,
                        r = (e - this.y) / this.height;
                    return (i *= i) + (r *= r) <= 1
                }
                getBounds() {
                    return new se(this.x - this.width, this.y - this.height, this.width, this.height)
                }
            }
            class he {
                constructor(...t) {
                    var e = Array.isArray(t[0]) ? t[0] : t;
                    if ("number" != typeof e[0]) {
                        for (var i = [], r = 0, s = e.length; r < s; r++) i.push(e[r].x, e[r].y);
                        e = i
                    }
                    this.points = e, this.type = qt.POLY, this.closeStroke = !0
                }
                clone() {
                    var t = this.points.slice(),
                        e = new he(t);
                    return e.closeStroke = this.closeStroke, e
                }
                contains(t, e) {
                    for (var i = !1, r = this.points.length / 2, s = 0, n = r - 1; s < r; n = s++) {
                        var a = this.points[2 * s],
                            h = this.points[2 * s + 1],
                            o = this.points[2 * n],
                            l = this.points[2 * n + 1];
                        h > e != l > e && t < (e - h) / (l - h) * (o - a) + a && (i = !i)
                    }
                    return i
                }
            }
            class oe {
                constructor(t = 0, e = 0, i = 0, r = 0, s = 20) {
                    this.x = t, this.y = e, this.width = i, this.height = r, this.radius = s, this.type = qt.RREC
                }
                clone() {
                    return new oe(this.x, this.y, this.width, this.height, this.radius)
                }
                contains(t, e) {
                    if (this.width <= 0 || this.height <= 0) return !1;
                    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                        if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
                        var i = t - (this.x + this.radius),
                            r = e - (this.y + this.radius),
                            s = this.radius * this.radius;
                        if (i * i + r * r <= s) return !0;
                        if ((i = t - (this.x + this.width - this.radius)) * i + r * r <= s) return !0;
                        if (i * i + (r = e - (this.y + this.height - this.radius)) * r <= s) return !0;
                        if ((i = t - (this.x + this.radius)) * i + r * r <= s) return !0
                    }
                    return !1
                }
            }
            class le {
                constructor(t = 0, e = 0) {
                    this.x = t, this.y = e
                }
                clone() {
                    return new le(this.x, this.y)
                }
                copyFrom(t) {
                    return this.set(t.x, t.y), this
                }
                copyTo(t) {
                    return t.set(this.x, this.y), t
                }
                equals(t) {
                    return t.x === this.x && t.y === this.y
                }
                set(t = 0, e = t) {
                    return this.x = t, this.y = e, this
                }
            }
            class ue {
                constructor(t, e, i = 0, r = 0) {
                    this._x = i, this._y = r, this.cb = t, this.scope = e
                }
                clone(t = this.cb, e = this.scope) {
                    return new ue(t, e, this._x, this._y)
                }
                set(t = 0, e = t) {
                    return t = Math.round(100 * t) / 100, e = Math.round(100 * e) / 100, this._x === t && this._y === e || (this._x = t, this._y = e, this.cb.call(this.scope)), this
                }
                copyFrom(t) {
                    return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
                }
                copyTo(t) {
                    return t.set(this._x, this._y), t
                }
                equals(t) {
                    return t.x === this._x && t.y === this._y
                }
                get x() {
                    return this._x
                }
                set x(t) {
                    t = Math.round(100 * t) / 100, this._x !== t && (this._x = t, this.cb.call(this.scope))
                }
                get y() {
                    return this._y
                }
                set y(t) {
                    t = Math.round(100 * t) / 100, this._y !== t && (this._y = t, this.cb.call(this.scope))
                }
            }
            class de {
                constructor(t = 1, e = 0, i = 0, r = 1, s = 0, n = 0) {
                    this.array = null, this.a = t, this.b = e, this.c = i, this.d = r, this.tx = s, this.ty = n
                }
                fromArray(t) {
                    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
                }
                set(t, e, i, r, s, n) {
                    return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = s, this.ty = n, this
                }
                toArray(t, e) {
                    this.array || (this.array = new Float32Array(9));
                    var i = e || this.array;
                    return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
                }
                apply(t, e) {
                    e = e || new le;
                    var i = t.x,
                        r = t.y;
                    return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e
                }
                applyInverse(t, e) {
                    e = e || new le;
                    var i = 1 / (this.a * this.d + this.c * -this.b),
                        r = t.x,
                        s = t.y;
                    return e.x = this.d * i * r + -this.c * i * s + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * s + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, e
                }
                translate(t, e) {
                    return this.tx += t, this.ty += e, this
                }
                scale(t, e) {
                    return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
                }
                rotate(t) {
                    var e = Math.cos(t),
                        i = Math.sin(t),
                        r = this.a,
                        s = this.c,
                        n = this.tx;
                    return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = s * e - this.d * i, this.d = s * i + this.d * e, this.tx = n * e - this.ty * i, this.ty = n * i + this.ty * e, this
                }
                append(t) {
                    var e = this.a,
                        i = this.b,
                        r = this.c,
                        s = this.d;
                    return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * s, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * s, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * s + this.ty, this
                }
                setTransform(t, e, i, r, s, n, a, h, o) {
                    return this.a = Math.cos(a + o) * s, this.b = Math.sin(a + o) * s, this.c = -Math.sin(a - h) * n, this.d = Math.cos(a - h) * n, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), this
                }
                prepend(t) {
                    var e = this.tx;
                    if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                        var i = this.a,
                            r = this.c;
                        this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
                    }
                    return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
                }
                decompose(t) {
                    var e = this.a,
                        i = this.b,
                        r = this.c,
                        s = this.d,
                        n = -Math.atan2(-r, s),
                        a = Math.atan2(i, e),
                        h = Math.abs(n + a);
                    return h < 1e-5 || Math.abs(ee - h) < 1e-5 ? (t.rotation = a, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = n, t.skew.y = a), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + s * s), t.position.x = this.tx, t.position.y = this.ty, t
                }
                invert() {
                    var t = this.a,
                        e = this.b,
                        i = this.c,
                        r = this.d,
                        s = this.tx,
                        n = t * r - e * i;
                    return this.a = r / n, this.b = -e / n, this.c = -i / n, this.d = t / n, this.tx = (i * this.ty - r * s) / n, this.ty = -(t * this.ty - e * s) / n, this
                }
                identity() {
                    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
                }
                clone() {
                    var t = new de;
                    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                }
                copyTo(t) {
                    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                }
                copyFrom(t) {
                    return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
                }
                static get IDENTITY() {
                    return new de
                }
                static get TEMP_MATRIX() {
                    return new de
                }
            }
            var ce = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
                fe = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
                pe = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
                me = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
                ge = [],
                ve = [],
                _e = Math.sign;
            ! function() {
                for (var t = 0; t < 16; t++) {
                    var e = [];
                    ge.push(e);
                    for (var i = 0; i < 16; i++)
                        for (var r = _e(ce[t] * ce[i] + pe[t] * fe[i]), s = _e(fe[t] * ce[i] + me[t] * fe[i]), n = _e(ce[t] * pe[i] + pe[t] * me[i]), a = _e(fe[t] * pe[i] + me[t] * me[i]), h = 0; h < 16; h++)
                            if (ce[h] === r && fe[h] === s && pe[h] === n && me[h] === a) {
                                e.push(h);
                                break
                            }
                }
                for (var o = 0; o < 16; o++) {
                    var l = new de;
                    l.set(ce[o], fe[o], pe[o], me[o], 0, 0), ve.push(l)
                }
            }();
            var xe, ye = {
                E: 0,
                SE: 1,
                S: 2,
                SW: 3,
                W: 4,
                NW: 5,
                N: 6,
                NE: 7,
                MIRROR_VERTICAL: 8,
                MAIN_DIAGONAL: 10,
                MIRROR_HORIZONTAL: 12,
                REVERSE_DIAGONAL: 14,
                uX: t => ce[t],
                uY: t => fe[t],
                vX: t => pe[t],
                vY: t => me[t],
                inv: t => 8 & t ? 15 & t : 7 & -t,
                add: (t, e) => ge[t][e],
                sub: (t, e) => ge[t][ye.inv(e)],
                rotate180: t => 4 ^ t,
                isVertical: t => 2 == (3 & t),
                byDirection: (t, e) => 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? ye.S : ye.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? ye.E : ye.W : e > 0 ? t > 0 ? ye.SE : ye.SW : t > 0 ? ye.NE : ye.NW,
                matrixAppendRotationInv: (t, e, i = 0, r = 0) => {
                    var s = ve[ye.inv(e)];
                    s.tx = i, s.ty = r, t.append(s)
                }
            };
            class Te {
                constructor() {
                    this.worldTransform = new de, this.localTransform = new de, this.position = new ue(this.onChange, this, 0, 0), this.scale = new ue(this.onChange, this, 1, 1), this.pivot = new ue(this.onChange, this, 0, 0), this.skew = new ue(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
                }
                onChange() {
                    this._localID++
                }
                updateSkew() {
                    this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
                }
                updateLocalTransform() {
                    var t = this.localTransform;
                    this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
                }
                updateTransform(t) {
                    var e = this.localTransform;
                    if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                        var i = t.worldTransform,
                            r = this.worldTransform;
                        r.a = e.a * i.a + e.b * i.c, r.b = e.a * i.b + e.b * i.d, r.c = e.c * i.a + e.d * i.c, r.d = e.c * i.b + e.d * i.d, r.tx = e.tx * i.a + e.ty * i.c + i.tx, r.ty = e.tx * i.b + e.ty * i.d + i.ty, this._parentID = t._worldID, this._worldID++
                    }
                }
                setFromMatrix(t) {
                    t.decompose(this), this._localID++
                }
                get rotation() {
                    return this._rotation
                }
                set rotation(t) {
                    this._rotation !== t && (this._rotation = t, this.updateSkew())
                }
            }
            Te.IDENTITY = new Te, j.TARGET_FPMS = .06,
                function(t) {
                    t[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY"
                }(xe || (xe = {}));
            class be {
                constructor(t, e = null, i = 0, r = !1) {
                    this.fn = t, this.context = e, this.priority = i, this.once = r, this.next = null, this.previous = null, this._destroyed = !1
                }
                match(t, e = null) {
                    return this.fn === t && this.context === e
                }
                emit(t) {
                    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                    var e = this.next;
                    return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
                }
                connect(t) {
                    this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
                }
                destroy(t = !1) {
                    this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                    var e = this.next;
                    return this.next = t ? null : e, this.previous = null, e
                }
            }
            class Ee {
                constructor() {
                    this._head = new be(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this.autoStart = !1, this.deltaTime = 1, this.deltaMS = 1 / j.TARGET_FPMS, this.elapsedMS = 1 / j.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._protected = !1, this._lastFrame = -1, this._tick = t => {
                        this._requestId = null, this.started && (this.update(t), this.started && null === this._requestId && this._head.next && (this._requestId = requestAnimationFrame(this._tick)))
                    }
                }
                _requestIfNeeded() {
                    null === this._requestId && this._head.next && (this.lastTime = c.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
                }
                _cancelIfNeeded() {
                    null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
                }
                _startIfPossible() {
                    this.started ? this._requestIfNeeded() : this.autoStart && this.start()
                }
                add(t, e, i = xe.NORMAL) {
                    return this._addListener(new be(t, e, i))
                }
                addOnce(t, e, i = xe.NORMAL) {
                    return this._addListener(new be(t, e, i, !0))
                }
                _addListener(t) {
                    var e = this._head.next,
                        i = this._head;
                    if (e) {
                        for (; e;) {
                            if (t.priority > e.priority) {
                                t.connect(i);
                                break
                            }
                            i = e, e = e.next
                        }
                        t.previous || t.connect(i)
                    } else t.connect(i);
                    return this._startIfPossible(), this
                }
                remove(t, e) {
                    for (var i = this._head.next; i;) i = i.match(t, e) ? i.destroy() : i.next;
                    return this._head.next || this._cancelIfNeeded(), this
                }
                get count() {
                    if (!this._head) return 0;
                    for (var t = 0, e = this._head; e = e.next;) t++;
                    return t
                }
                start() {
                    this.started || (this.started = !0, this._requestIfNeeded())
                }
                stop() {
                    this.started && (this.started = !1, this._cancelIfNeeded())
                }
                destroy() {
                    if (!this._protected) {
                        this.stop();
                        for (var t = this._head.next; t;) t = t.destroy(!0);
                        this._head.destroy(), this._head = null
                    }
                }
                update(t = c.now()) {
                    var e;
                    if (t > this.lastTime) {
                        if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                            var i = t - this._lastFrame | 0;
                            if (i < this._minElapsedMS) return;
                            this._lastFrame = t - i % this._minElapsedMS
                        }
                        this.deltaMS = e, this.deltaTime = this.deltaMS * j.TARGET_FPMS;
                        for (var r = this._head, s = r.next; s;) s = s.emit(this.deltaTime);
                        r.next || this._cancelIfNeeded()
                    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                    this.lastTime = t
                }
                get FPS() {
                    return 1e3 / this.elapsedMS
                }
                get minFPS() {
                    return 1e3 / this._maxElapsedMS
                }
                set minFPS(t) {
                    var e = Math.min(this.maxFPS, t),
                        i = Math.min(Math.max(0, e) / 1e3, j.TARGET_FPMS);
                    this._maxElapsedMS = 1 / i
                }
                get maxFPS() {
                    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
                }
                set maxFPS(t) {
                    if (0 === t) this._minElapsedMS = 0;
                    else {
                        var e = Math.max(this.minFPS, t);
                        this._minElapsedMS = 1 / (e / 1e3)
                    }
                }
                static get shared() {
                    if (!Ee._shared) {
                        var t = Ee._shared = new Ee;
                        t.autoStart = !0, t._protected = !0
                    }
                    return Ee._shared
                }
                static get system() {
                    if (!Ee._system) {
                        var t = Ee._system = new Ee;
                        t.autoStart = !0, t._protected = !0
                    }
                    return Ee._system
                }
            }
            class we {
                static init(t) {
                    t = Object.assign({
                        autoStart: !0,
                        sharedTicker: !1
                    }, t), Object.defineProperty(this, "ticker", {
                        set(t) {
                            this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, xe.LOW)
                        },
                        get() {
                            return this._ticker
                        }
                    }), this.stop = () => {
                        this._ticker.stop()
                    }, this.start = () => {
                        this._ticker.start()
                    }, this._ticker = null, this.ticker = t.sharedTicker ? Ee.shared : new Ee, t.autoStart && this.start()
                }
                static destroy() {
                    if (this._ticker) {
                        var t = this._ticker;
                        this.ticker = null, t.destroy()
                    }
                }
            }
            j.SORTABLE_CHILDREN = !1;
            class Se {
                constructor() {
                    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1
                }
                isEmpty() {
                    return this.minX > this.maxX || this.minY > this.maxY
                }
                clear() {
                    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
                }
                getRectangle(t) {
                    return this.minX > this.maxX || this.minY > this.maxY ? se.EMPTY : ((t = t || new se(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
                }
                addPoint(t) {
                    this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
                }
                addQuad(t) {
                    var e = this.minX,
                        i = this.minY,
                        r = this.maxX,
                        s = this.maxY,
                        n = t[0],
                        a = t[1];
                    e = n < e ? n : e, i = a < i ? a : i, r = n > r ? n : r, s = a > s ? a : s, e = (n = t[2]) < e ? n : e, i = (a = t[3]) < i ? a : i, r = n > r ? n : r, s = a > s ? a : s, e = (n = t[4]) < e ? n : e, i = (a = t[5]) < i ? a : i, r = n > r ? n : r, s = a > s ? a : s, e = (n = t[6]) < e ? n : e, i = (a = t[7]) < i ? a : i, r = n > r ? n : r, s = a > s ? a : s, this.minX = e, this.minY = i, this.maxX = r, this.maxY = s
                }
                addFrame(t, e, i, r, s) {
                    this.addFrameMatrix(t.worldTransform, e, i, r, s)
                }
                addFrameMatrix(t, e, i, r, s) {
                    var n = t.a,
                        a = t.b,
                        h = t.c,
                        o = t.d,
                        l = t.tx,
                        u = t.ty,
                        d = this.minX,
                        c = this.minY,
                        f = this.maxX,
                        p = this.maxY,
                        m = n * e + h * i + l,
                        g = a * e + o * i + u;
                    d = m < d ? m : d, c = g < c ? g : c, f = m > f ? m : f, p = g > p ? g : p, d = (m = n * r + h * i + l) < d ? m : d, c = (g = a * r + o * i + u) < c ? g : c, f = m > f ? m : f, p = g > p ? g : p, d = (m = n * e + h * s + l) < d ? m : d, c = (g = a * e + o * s + u) < c ? g : c, f = m > f ? m : f, p = g > p ? g : p, d = (m = n * r + h * s + l) < d ? m : d, c = (g = a * r + o * s + u) < c ? g : c, f = m > f ? m : f, p = g > p ? g : p, this.minX = d, this.minY = c, this.maxX = f, this.maxY = p
                }
                addVertexData(t, e, i) {
                    for (var r = this.minX, s = this.minY, n = this.maxX, a = this.maxY, h = e; h < i; h += 2) {
                        var o = t[h],
                            l = t[h + 1];
                        r = o < r ? o : r, s = l < s ? l : s, n = o > n ? o : n, a = l > a ? l : a
                    }
                    this.minX = r, this.minY = s, this.maxX = n, this.maxY = a
                }
                addVertices(t, e, i, r) {
                    this.addVerticesMatrix(t.worldTransform, e, i, r)
                }
                addVerticesMatrix(t, e, i, r, s = 0, n = s) {
                    for (var a = t.a, h = t.b, o = t.c, l = t.d, u = t.tx, d = t.ty, c = this.minX, f = this.minY, p = this.maxX, m = this.maxY, g = i; g < r; g += 2) {
                        var v = e[g],
                            _ = e[g + 1],
                            x = a * v + o * _ + u,
                            y = l * _ + h * v + d;
                        c = Math.min(c, x - s), p = Math.max(p, x + s), f = Math.min(f, y - n), m = Math.max(m, y + n)
                    }
                    this.minX = c, this.minY = f, this.maxX = p, this.maxY = m
                }
                addBounds(t) {
                    var e = this.minX,
                        i = this.minY,
                        r = this.maxX,
                        s = this.maxY;
                    this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > s ? t.maxY : s
                }
                addBoundsMask(t, e) {
                    var i = t.minX > e.minX ? t.minX : e.minX,
                        r = t.minY > e.minY ? t.minY : e.minY,
                        s = t.maxX < e.maxX ? t.maxX : e.maxX,
                        n = t.maxY < e.maxY ? t.maxY : e.maxY;
                    if (i <= s && r <= n) {
                        var a = this.minX,
                            h = this.minY,
                            o = this.maxX,
                            l = this.maxY;
                        this.minX = i < a ? i : a, this.minY = r < h ? r : h, this.maxX = s > o ? s : o, this.maxY = n > l ? n : l
                    }
                }
                addBoundsMatrix(t, e) {
                    this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
                }
                addBoundsArea(t, e) {
                    var i = t.minX > e.x ? t.minX : e.x,
                        r = t.minY > e.y ? t.minY : e.y,
                        s = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
                        n = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
                    if (i <= s && r <= n) {
                        var a = this.minX,
                            h = this.minY,
                            o = this.maxX,
                            l = this.maxY;
                        this.minX = i < a ? i : a, this.minY = r < h ? r : h, this.maxX = s > o ? s : o, this.maxY = n > l ? n : l
                    }
                }
                pad(t = 0, e = t) {
                    this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e)
                }
                addFramePad(t, e, i, r, s, n) {
                    t -= s, e -= n, i += s, r += n, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > i ? this.maxX : i, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > r ? this.maxY : r
                }
            }
            class Ae extends et {
                constructor() {
                    super(), this.tempDisplayObjectParent = null, this.transform = new Te, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Se, this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._destroyed = !1, this.isSprite = !1, this.isMask = !1
                }
                static mixin(t) {
                    for (var e = Object.keys(t), i = 0; i < e.length; ++i) {
                        var r = e[i];
                        Object.defineProperty(Ae.prototype, r, Object.getOwnPropertyDescriptor(t, r))
                    }
                }
                _recursivePostUpdateTransform() {
                    this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
                }
                updateTransform() {
                    this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha
                }
                getBounds(t, e) {
                    return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new se), e = this._boundsRect), this._bounds.getRectangle(e)
                }
                getLocalBounds(t) {
                    t || (this._localBoundsRect || (this._localBoundsRect = new se), t = this._localBoundsRect), this._localBounds || (this._localBounds = new Se);
                    var e = this.transform,
                        i = this.parent;
                    this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
                    var r = this._bounds,
                        s = this._boundsID;
                    this._bounds = this._localBounds;
                    var n = this.getBounds(!1, t);
                    return this.parent = i, this.transform = e, this._bounds = r, this._bounds.updateID += this._boundsID - s, n
                }
                toGlobal(t, e, i = !1) {
                    return i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
                }
                toLocal(t, e, i, r) {
                    return e && (t = e.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i)
                }
                setParent(t) {
                    if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                    return t.addChild(this), t
                }
                setTransform(t = 0, e = 0, i = 1, r = 1, s = 0, n = 0, a = 0, h = 0, o = 0) {
                    return this.position.x = t, this.position.y = e, this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = s, this.skew.x = n, this.skew.y = a, this.pivot.x = h, this.pivot.y = o, this
                }
                destroy(t) {
                    this.parent && this.parent.removeChild(this), this.removeAllListeners(), this.transform = null, this.parent = null, this._bounds = null, this._mask = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
                }
                get _tempDisplayObjectParent() {
                    return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new Ie), this.tempDisplayObjectParent
                }
                enableTempParent() {
                    var t = this.parent;
                    return this.parent = this._tempDisplayObjectParent, t
                }
                disableTempParent(t) {
                    this.parent = t
                }
                get x() {
                    return this.position.x
                }
                set x(t) {
                    t = Math.round(100 * t) / 100, this.transform.position.x = t
                }
                get y() {
                    return this.position.y
                }
                set y(t) {
                    t = Math.round(100 * t) / 100, this.transform.position.y = t
                }
                get worldTransform() {
                    return this.transform.worldTransform
                }
                get localTransform() {
                    return this.transform.localTransform
                }
                get position() {
                    return this.transform.position
                }
                set position(t) {
                    this.transform.position.copyFrom(t)
                }
                get scale() {
                    return this.transform.scale
                }
                set scale(t) {
                    this.transform.scale.copyFrom(t)
                }
                get pivot() {
                    return this.transform.pivot
                }
                set pivot(t) {
                    this.transform.pivot.copyFrom(t)
                }
                get skew() {
                    return this.transform.skew
                }
                set skew(t) {
                    this.transform.skew.copyFrom(t)
                }
                get rotation() {
                    return this.transform.rotation
                }
                set rotation(t) {
                    this.transform.rotation = t
                }
                get angle() {
                    return this.transform.rotation * ie
                }
                set angle(t) {
                    this.transform.rotation = t * re
                }
                get zIndex() {
                    return this._zIndex
                }
                set zIndex(t) {
                    this._zIndex = t, this.parent && (this.parent.sortDirty = !0)
                }
                get worldVisible() {
                    var t = this;
                    do {
                        if (!t.visible) return !1;
                        t = t.parent
                    } while (t);
                    return !0
                }
                get mask() {
                    return this._mask
                }
                set mask(t) {
                    if (this._mask) {
                        var e = this._mask.maskObject || this._mask;
                        e.renderable = !0, e.isMask = !1
                    }
                    if (this._mask = t, this._mask) {
                        var i = this._mask.maskObject || this._mask;
                        i.renderable = !1, i.isMask = !0
                    }
                }
            }
            class Ie extends Ae {
                constructor() {
                    super(...arguments), this.sortDirty = null
                }
            }

            function Ce(t, e) {
                return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex
            }
            Ae.prototype.displayObjectUpdateTransform = Ae.prototype.updateTransform;
            class Me extends Ae {
                constructor() {
                    super(), this.children = [], this.sortableChildren = j.SORTABLE_CHILDREN, this.sortDirty = !1
                }
                onChildrenChange(t) {}
                addChild(...t) {
                    if (t.length > 1)
                        for (var e = 0; e < t.length; e++) this.addChild(t[e]);
                    else {
                        var i = t[0];
                        i.parent && i.parent.removeChild(i), i.parent = this, this.sortDirty = !0, i.transform._parentID = -1, this.children.push(i), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", i, this, this.children.length - 1), i.emit("added", this)
                    }
                    return t[0]
                }
                addChildAt(t, e) {
                    if (e < 0 || e > this.children.length) throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`);
                    return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t
                }
                swapChildren(t, e) {
                    if (t !== e) {
                        var i = this.getChildIndex(t),
                            r = this.getChildIndex(e);
                        this.children[i] = e, this.children[r] = t, this.onChildrenChange(i < r ? i : r)
                    }
                }
                getChildIndex(t) {
                    var e = this.children.indexOf(t);
                    if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                    return e
                }
                setChildIndex(t, e) {
                    if (e < 0 || e >= this.children.length) throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);
                    var i = this.getChildIndex(t);
                    kt(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
                }
                getChildAt(t) {
                    if (t < 0 || t >= this.children.length) throw new Error(`getChildAt: Index (${t}) does not exist.`);
                    return this.children[t]
                }
                removeChild(...t) {
                    if (t.length > 1)
                        for (var e = 0; e < t.length; e++) this.removeChild(t[e]);
                    else {
                        var i = t[0],
                            r = this.children.indexOf(i);
                        if (-1 === r) return null;
                        i.parent = null, i.transform._parentID = -1, kt(this.children, r, 1), this._boundsID++, this.onChildrenChange(r), i.emit("removed", this), this.emit("childRemoved", i, this, r)
                    }
                    return t[0]
                }
                removeChildAt(t) {
                    var e = this.getChildAt(t);
                    return e.parent = null, e.transform._parentID = -1, kt(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e
                }
                removeChildren(t = 0, e = this.children.length) {
                    var i, r = t,
                        s = e - r;
                    if (s > 0 && s <= e) {
                        i = this.children.splice(r, s);
                        for (var n = 0; n < i.length; ++n) i[n].parent = null, i[n].transform && (i[n].transform._parentID = -1);
                        this._boundsID++, this.onChildrenChange(t);
                        for (var a = 0; a < i.length; ++a) i[a].emit("removed", this), this.emit("childRemoved", i[a], this, a);
                        return i
                    }
                    if (0 === s && 0 === this.children.length) return [];
                    throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
                }
                sortChildren() {
                    for (var t = !1, e = 0, i = this.children.length; e < i; ++e) {
                        var r = this.children[e];
                        r._lastSortedIndex = e, t || 0 === r.zIndex || (t = !0)
                    }
                    t && this.children.length > 1 && this.children.sort(Ce), this.sortDirty = !1
                }
                updateTransform() {
                    this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    for (var t = 0, e = this.children.length; t < e; ++t) {
                        var i = this.children[t];
                        i.visible && i.updateTransform()
                    }
                }
                calculateBounds() {
                    this._bounds.clear(), this._calculateBounds();
                    for (var t = 0; t < this.children.length; t++) {
                        var e = this.children[t];
                        if (e.visible && e.renderable)
                            if (e.calculateBounds(), e._mask) {
                                var i = e._mask.maskObject || e._mask;
                                i.calculateBounds(), this._bounds.addBoundsMask(e._bounds, i._bounds)
                            } else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
                    }
                    this._bounds.updateID = this._boundsID
                }
                getLocalBounds(t, e = !1) {
                    var i = super.getLocalBounds(t);
                    if (!e)
                        for (var r = 0, s = this.children.length; r < s; ++r) {
                            var n = this.children[r];
                            n.visible && n.updateTransform()
                        }
                    return i
                }
                _calculateBounds() {}
                render(t) {
                    if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                        if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t);
                        else {
                            this._render(t);
                            for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].render(t)
                        }
                }
                renderAdvanced(t) {
                    t.batch.flush();
                    var e = this.filters,
                        i = this._mask;
                    if (e) {
                        this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                        for (var r = 0; r < e.length; r++) e[r].enabled && this._enabledFilters.push(e[r]);
                        this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
                    }
                    i && t.mask.push(this, this._mask), this._render(t);
                    for (var s = 0, n = this.children.length; s < n; s++) this.children[s].render(t);
                    t.batch.flush(), i && t.mask.pop(this), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
                }
                _render(t) {}
                destroy(t) {
                    super.destroy(), this.sortDirty = !1;
                    var e = "boolean" == typeof t ? t : t && t.children,
                        i = this.removeChildren(0, this.children.length);
                    if (e)
                        for (var r = 0; r < i.length; ++r) i[r].destroy(t)
                }
                get width() {
                    return Math.round(this.scale.x * this.getLocalBounds().width * 100) / 100
                }
                set width(t) {
                    t = Math.round(100 * t) / 100;
                    var e = this.getLocalBounds().width;
                    this.scale.x = 0 !== e ? t / e : 1, this._width = t
                }
                get height() {
                    return Math.round(this.scale.y * this.getLocalBounds().height * 100) / 100
                }
                set height(t) {
                    t = Math.round(100 * t) / 100;
                    var e = this.getLocalBounds().height;
                    this.scale.y = 0 !== e ? t / e : 1, this._height = t
                }
            }
            Me.prototype.containerUpdateTransform = Me.prototype.updateTransform;
            class De {
                constructor() {
                    this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0, this.global = new le, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
                }
                get pointerId() {
                    return this.identifier
                }
                getLocalPosition(t, e, i) {
                    return t.worldTransform.applyInverse(i || this.global, e)
                }
                copyEvent(t) {
                    "isPrimary" in t && t.isPrimary && (this.isPrimary = !0), this.button = "button" in t && t.button;
                    var e = "buttons" in t && t.buttons;
                    this.buttons = Number.isInteger(e) ? e : "which" in t && t.which, this.width = "width" in t && t.width, this.height = "height" in t && t.height, this.tiltX = "tiltX" in t && t.tiltX, this.tiltY = "tiltY" in t && t.tiltY, this.pointerType = "pointerType" in t && t.pointerType, this.pressure = "pressure" in t && t.pressure, this.rotationAngle = "rotationAngle" in t && t.rotationAngle, this.twist = "twist" in t && t.twist || 0, this.tangentialPressure = "tangentialPressure" in t && t.tangentialPressure || 0
                }
                reset() {
                    this.isPrimary = !1
                }
            }
            class Pe {
                constructor() {
                    this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
                }
                stopPropagation() {
                    this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget
                }
                reset() {
                    this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.currentTarget = null, this.target = null
                }
            }
            class Re {
                constructor(t) {
                    this._pointerId = t, this._flags = Re.FLAGS.NONE
                }
                _doSet(t, e) {
                    this._flags = e ? this._flags | t : this._flags & ~t
                }
                get pointerId() {
                    return this._pointerId
                }
                get flags() {
                    return this._flags
                }
                set flags(t) {
                    this._flags = t
                }
                get none() {
                    return this._flags === Re.FLAGS.NONE
                }
                get over() {
                    return 0 != (this._flags & Re.FLAGS.OVER)
                }
                set over(t) {
                    this._doSet(Re.FLAGS.OVER, t)
                }
                get rightDown() {
                    return 0 != (this._flags & Re.FLAGS.RIGHT_DOWN)
                }
                set rightDown(t) {
                    this._doSet(Re.FLAGS.RIGHT_DOWN, t)
                }
                get leftDown() {
                    return 0 != (this._flags & Re.FLAGS.LEFT_DOWN)
                }
                set leftDown(t) {
                    this._doSet(Re.FLAGS.LEFT_DOWN, t)
                }
            }
            Re.FLAGS = Object.freeze({
                NONE: 0,
                OVER: 1,
                LEFT_DOWN: 2,
                RIGHT_DOWN: 4
            });
            class Oe {
                constructor() {
                    this._tempPoint = new le
                }
                recursiveFindHit(t, e, i, r, s) {
                    if (!e || !e.visible) return !1;
                    var n = t.data.global,
                        a = !1,
                        h = s = e.interactive || s,
                        o = !0;
                    if (e.hitArea ? (r && (e.worldTransform.applyInverse(n, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? a = !0 : (r = !1, o = !1)), h = !1) : e._mask && r && (e._mask.containsPoint && e._mask.containsPoint(n) || (r = !1)), o && e.interactiveChildren && e.children)
                        for (var l = e.children, u = l.length - 1; u >= 0; u--) {
                            var d = l[u],
                                c = this.recursiveFindHit(t, d, i, r, h);
                            if (c) {
                                if (!d.parent) continue;
                                h = !1, c && (t.target && (r = !1), a = !0)
                            }
                        }
                    return s && (r && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(n) && (a = !0), e.interactive && (a && !t.target && (t.target = e), i && i(t, e, !!a))), a
                }
                findHit(t, e, i, r) {
                    this.recursiveFindHit(t, e, i, r, !1)
                }
            }
            var Le = {
                interactive: !1,
                interactiveChildren: !0,
                hitArea: null,
                get buttonMode() {
                    return "pointer" === this.cursor
                },
                set buttonMode(t) {
                    t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
                },
                cursor: null,
                get trackedPointers() {
                    return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
                },
                _trackedPointers: void 0
            };
            Ae.mixin(Le);
            var Ne = {
                target: null,
                data: {
                    global: null
                }
            };
            class Be extends et {
                constructor(t, e) {
                    super(), e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 === e.autoPreventDefault || e.autoPreventDefault, this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new De, this.mouse.identifier = 1, this.mouse.global.set(-999999), this.activeInteractionData = {}, this.activeInteractionData[1] = this.mouse, this.interactionDataPool = [], this.eventData = new Pe, this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.tickerAdded = !1, this.mouseOverRenderer = !1, this.supportsTouchEvents = !0, this.supportsPointerEvents = !1, this.onPointerUp = this.onPointerUp.bind(this), this.processPointerUp = this.processPointerUp.bind(this), this.onPointerCancel = this.onPointerCancel.bind(this), this.processPointerCancel = this.processPointerCancel.bind(this), this.onPointerDown = this.onPointerDown.bind(this), this.processPointerDown = this.processPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.processPointerMove = this.processPointerMove.bind(this), this.onPointerOut = this.onPointerOut.bind(this), this.processPointerOverOut = this.processPointerOverOut.bind(this), this.onPointerOver = this.onPointerOver.bind(this), this.cursorStyles = {
                        default: "inherit",
                        pointer: "pointer"
                    }, this.currentCursorMode = null, this.cursor = null, this.resolution = 1, this.delayedEvents = [], this.search = new Oe, this._tempDisplayObject = new Ie, this._useSystemTicker = void 0 === e.useSystemTicker || e.useSystemTicker, this.setTargetElement(this.renderer.view, this.renderer.resolution)
                }
                get useSystemTicker() {
                    return this._useSystemTicker
                }
                set useSystemTicker(t) {
                    this._useSystemTicker = t, t ? this.addTickerListener() : this.removeTickerListener()
                }
                get lastObjectRendered() {
                    return this.renderer._lastObjectRendered || this._tempDisplayObject
                }
                hitTest(t, e) {
                    return Ne.target = null, Ne.data.global = t, e || (e = this.lastObjectRendered), this.processInteractive(Ne, e, null, !0), Ne.target
                }
                setTargetElement(t, e = 1) {
                    this.removeTickerListener(), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents(), this.addTickerListener()
                }
                addTickerListener() {
                    !this.tickerAdded && this.interactionDOMElement && this._useSystemTicker && (Ee.system.add(this.tickerUpdate, this, xe.INTERACTION), this.tickerAdded = !0)
                }
                removeTickerListener() {
                    this.tickerAdded && (Ee.system.remove(this.tickerUpdate, this), this.tickerAdded = !1)
                }
                addEvents() {
                    !this.eventsAdded && this.interactionDOMElement && (this.eventsAdded = !0)
                }
                removeEvents() {
                    this.eventsAdded && this.interactionDOMElement && (this.interactionDOMElement = null, this.eventsAdded = !1)
                }
                tickerUpdate(t) {
                    this._deltaTime += t, this._deltaTime < this.interactionFrequency || (this._deltaTime = 0, this.update())
                }
                update() {
                    if (this.interactionDOMElement)
                        if (this._didMove) this._didMove = !1;
                        else
                            for (var t in this.cursor = null, this.activeInteractionData)
                                if (this.activeInteractionData.hasOwnProperty(t)) {
                                    var e = this.activeInteractionData[t];
                                    if (e.originalEvent && "touch" !== e.pointerType) {
                                        var i = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e);
                                        this.processInteractive(i, this.lastObjectRendered, this.processPointerOverOut, !0)
                                    }
                                }
                }
                dispatchEvent(t, e, i) {
                    i.stopPropagationHint && t !== i.stopsPropagatingAt || (i.currentTarget = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
                }
                delayDispatchEvent(t, e, i) {
                    this.delayedEvents.push({
                        displayObject: t,
                        eventString: e,
                        eventData: i
                    })
                }
                mapPositionToPoint(t, e, i) {
                    var r = this.interactionDOMElement.getBoundingClientRect(),
                        s = 1 / this.resolution;
                    t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) * s, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) * s
                }
                processInteractive(t, e, i, r) {
                    var s = this.search.findHit(t, e, i, r),
                        n = this.delayedEvents;
                    if (!n.length) return s;
                    t.stopPropagationHint = !1;
                    var a = n.length;
                    this.delayedEvents = [];
                    for (var h = 0; h < a; h++) {
                        var {
                            displayObject: o,
                            eventString: l,
                            eventData: u
                        } = n[h];
                        u.stopsPropagatingAt === o && (u.stopPropagationHint = !0), this.dispatchEvent(o, l, u)
                    }
                    return s
                }
                onPointerDown(t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t);
                        if (this.autoPreventDefault && e[0].isNormalized)(t.cancelable || !("cancelable" in t)) && t.preventDefault();
                        for (var i = e.length, r = 0; r < i; r++) {
                            var s = e[r],
                                n = this.getInteractionDataForPointerId(s),
                                a = this.configureInteractionEventForDOMEvent(this.eventData, s, n);
                            if (a.data.originalEvent = t, this.processInteractive(a, this.lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", a), "touch" === s.pointerType) this.emit("touchstart", a);
                            else if ("mouse" === s.pointerType || "pen" === s.pointerType) {
                                var h = 2 === s.button;
                                this.emit(h ? "rightdown" : "mousedown", this.eventData)
                            }
                        }
                    }
                }
                processPointerDown(t, e, i) {
                    var r = t.data,
                        s = t.data.identifier;
                    if (this.touchStartInteractionX = t.data.global.x, this.touchStartInteractionY = t.data.global.y, this.touchStartInteractionTime = Date.now(), i)
                        if (e.trackedPointers[s] || (e.trackedPointers[s] = new Re(s)), this.dispatchEvent(e, "pointerdown", t), "touch" === r.pointerType) this.dispatchEvent(e, "touchstart", t);
                        else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
                        var n = 2 === r.button;
                        n ? e.trackedPointers[s].rightDown = !0 : e.trackedPointers[s].leftDown = !0, this.dispatchEvent(e, n ? "rightdown" : "mousedown", t)
                    }
                }
                onPointerComplete(t, e, i) {
                    for (var r = this.normalizeToPointerData(t), s = r.length, n = t.target !== this.interactionDOMElement ? "outside" : "", a = 0; a < s; a++) {
                        var h = r[a],
                            o = this.getInteractionDataForPointerId(h),
                            l = this.configureInteractionEventForDOMEvent(this.eventData, h, o);
                        if (l.data.originalEvent = t, this.processInteractive(l, this.lastObjectRendered, i, e || !n), this.emit(e ? "pointercancel" : `pointerup${n}`, l), "mouse" === h.pointerType || "pen" === h.pointerType) {
                            var u = 2 === h.button;
                            this.emit(u ? `rightup${n}` : `mouseup${n}`, l)
                        } else "touch" === h.pointerType && (this.emit(e ? "touchcancel" : `touchend${n}`, l), this.releaseInteractionDataForPointerId(h.pointerId))
                    }
                }
                onPointerCancel(t) {
                    this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
                }
                processPointerCancel(t, e) {
                    var i = t.data,
                        r = t.data.identifier;
                    void 0 !== e.trackedPointers[r] && (delete e.trackedPointers[r], this.dispatchEvent(e, "pointercancel", t), "touch" === i.pointerType && this.dispatchEvent(e, "touchcancel", t))
                }
                onPointerUp(t) {
                    this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
                }
                processPointerUp(t, e, i) {
                    var r = t.data,
                        s = t.data.identifier,
                        n = e.trackedPointers[s],
                        a = "touch" === r.pointerType,
                        h = "mouse" === r.pointerType || "pen" === r.pointerType,
                        o = !1;
                    if (h) {
                        var l = 2 === r.button,
                            u = Re.FLAGS,
                            d = l ? u.RIGHT_DOWN : u.LEFT_DOWN,
                            c = void 0 !== n && n.flags & d;
                        i ? (this.dispatchEvent(e, l ? "rightup" : "mouseup", t), c && (this.dispatchEvent(e, l ? "rightclick" : "click", t), o = !0)) : c && this.dispatchEvent(e, l ? "rightupoutside" : "mouseupoutside", t), n && (l ? n.rightDown = !1 : n.leftDown = !1)
                    }
                    i ? (this.dispatchEvent(e, "pointerup", t), a && this.dispatchEvent(e, "touchend", t), n && Math.abs(this.touchStartInteractionX - t.data.global.x) < 20 && Math.abs(this.touchStartInteractionY - t.data.global.y) < 20 && Date.now() - this.touchStartInteractionTime < 300 && (h && !o || this.dispatchEvent(e, "pointertap", t), a && (this.dispatchEvent(e, "tap", t), n.over = !1))) : n && (this.dispatchEvent(e, "pointerupoutside", t), a && this.dispatchEvent(e, "touchendoutside", t)), n && n.none && delete e.trackedPointers[s]
                }
                onPointerMove(t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t);
                        "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this._didMove = !0, this.cursor = null);
                        for (var i = e.length, r = 0; r < i; r++) {
                            var s = e[r],
                                n = this.getInteractionDataForPointerId(s),
                                a = this.configureInteractionEventForDOMEvent(this.eventData, s, n);
                            a.data.originalEvent = t, this.processInteractive(a, this.lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", a), "touch" === s.pointerType && this.emit("touchmove", a), "mouse" !== s.pointerType && "pen" !== s.pointerType || this.emit("mousemove", a)
                        }
                    }
                }
                processPointerMove(t, e, i) {
                    var r = t.data,
                        s = "touch" === r.pointerType,
                        n = "mouse" === r.pointerType || "pen" === r.pointerType;
                    n && this.processPointerOverOut(t, e, i), this.moveWhenInside && !i || (this.dispatchEvent(e, "pointermove", t), s && this.dispatchEvent(e, "touchmove", t), n && this.dispatchEvent(e, "mousemove", t))
                }
                onPointerOut(t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t)[0];
                        "mouse" === e.pointerType && (this.mouseOverRenderer = !1);
                        var i = this.getInteractionDataForPointerId(e),
                            r = this.configureInteractionEventForDOMEvent(this.eventData, e, i);
                        r.data.originalEvent = e, this.processInteractive(r, this.lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", r), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", r) : this.releaseInteractionDataForPointerId(i.identifier)
                    }
                }
                processPointerOverOut(t, e, i) {
                    var r = t.data,
                        s = t.data.identifier,
                        n = "mouse" === r.pointerType || "pen" === r.pointerType,
                        a = e.trackedPointers[s];
                    i && !a && (a = e.trackedPointers[s] = new Re(s)), void 0 !== a && (i && this.mouseOverRenderer ? (a.over || (a.over = !0, this.delayDispatchEvent(e, "pointerover", t), n && this.delayDispatchEvent(e, "mouseover", t)), n && null === this.cursor && (this.cursor = e.cursor)) : a.over && (a.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), n && this.dispatchEvent(e, "mouseout", t), a.none && delete e.trackedPointers[s]))
                }
                onPointerOver(t) {
                    var e = this.normalizeToPointerData(t)[0],
                        i = this.getInteractionDataForPointerId(e),
                        r = this.configureInteractionEventForDOMEvent(this.eventData, e, i);
                    r.data.originalEvent = e, "mouse" === e.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", r), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", r)
                }
                getInteractionDataForPointerId(t) {
                    var e, i = t.pointerId;
                    return 1 === i || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[i] ? e = this.activeInteractionData[i] : ((e = this.interactionDataPool.pop() || new De).identifier = i, this.activeInteractionData[i] = e), e.copyEvent(t), e
                }
                releaseInteractionDataForPointerId(t) {
                    var e = this.activeInteractionData[t];
                    e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e))
                }
                configureInteractionEventForDOMEvent(t, e, i) {
                    return t.data = i, this.mapPositionToPoint(i.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = i.global.x, e.globalY = i.global.y), i.originalEvent = e, t.reset(), t
                }
                normalizeToPointerData(t) {
                    var e = [];
                    if (this.supportsTouchEvents)
                        for (var i = 0, r = t.changedTouches.length; i < r; i++) {
                            var s = t.changedTouches[i];
                            void 0 === s.button && (s.button = t.touches.length ? 1 : 0), void 0 === s.buttons && (s.buttons = t.touches.length ? 1 : 0), void 0 === s.isPrimary && (s.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === s.width && (s.width = s.radiusX || 1), void 0 === s.height && (s.height = s.radiusY || 1), void 0 === s.tiltX && (s.tiltX = 0), void 0 === s.tiltY && (s.tiltY = 0), void 0 === s.pointerType && (s.pointerType = "touch"), void 0 === s.pointerId && (s.pointerId = s.identifier || 0), void 0 === s.pressure && (s.pressure = s.force || .5), void 0 === s.twist && (s.twist = 0), void 0 === s.tangentialPressure && (s.tangentialPressure = 0), void 0 === s.layerX && (s.layerX = s.offsetX = s.clientX), void 0 === s.layerY && (s.layerY = s.offsetY = s.clientY), s.isNormalized = !0, e.push(s)
                        } else e.push(t);
                    return e
                }
                destroy() {
                    this.removeEvents(), this.removeTickerListener(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this.search = null
                }
            }
            class Fe {
                constructor(t) {
                    this.items = [], this._name = t, this._aliasCount = 0
                }
                emit(t, e, i, r, s, n, a, h) {
                    if (arguments.length > 8) throw new Error("max arguments reached");
                    var {
                        name: o,
                        items: l
                    } = this;
                    this._aliasCount++;
                    for (var u = 0, d = l.length; u < d; u++) l[u][o](t, e, i, r, s, n, a, h);
                    return l === this.items && this._aliasCount--, this
                }
                ensureNonAliasedItems() {
                    this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
                }
                add(t) {
                    return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
                }
                remove(t) {
                    var e = this.items.indexOf(t);
                    return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
                }
                contains(t) {
                    return -1 !== this.items.indexOf(t)
                }
                removeAll() {
                    return this.ensureNonAliasedItems(), this.items.length = 0, this
                }
                destroy() {
                    this.removeAll(), this.items = null, this._name = null
                }
                get empty() {
                    return 0 === this.items.length
                }
                get name() {
                    return this._name
                }
            }
            Object.defineProperties(Fe.prototype, {
                dispatch: {
                    value: Fe.prototype.emit
                },
                run: {
                    value: Fe.prototype.emit
                }
            }), j.PREFER_ENV = M.WEBGL, j.STRICT_TEXTURE_CACHE = !1;
            var Ue = [];

            function ke(t, e) {
                if (!t) return null;
                var i = "";
                if ("string" == typeof t) {
                    var r = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
                    r && (i = r[1].toLowerCase())
                }
                for (var s = Ue.length - 1; s >= 0; --s) {
                    var n = Ue[s];
                    if (n.test && n.test(t, i)) return new n(t, e)
                }
                throw new Error("Unrecognized source type to auto-detect Resource")
            }
            class Ge {
                constructor(t = 0, e = 0) {
                    this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new Fe("setRealSize"), this.onUpdate = new Fe("update"), this.onError = new Fe("onError")
                }
                bind(t) {
                    this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height)
                }
                unbind(t) {
                    this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
                }
                resize(t, e) {
                    t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.emit(t, e))
                }
                get valid() {
                    return !!this._width && !!this._height
                }
                update() {
                    this.destroyed || this.onUpdate.emit()
                }
                load() {
                    return Promise.resolve(this)
                }
                get width() {
                    return this._width
                }
                get height() {
                    return this._height
                }
                style(t, e, i) {
                    return !1
                }
                dispose() {}
                destroy() {
                    this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
                }
                static test(t, e) {
                    return !1
                }
            }
            class Xe extends Ge {
                constructor(t) {
                    var e = t;
                    super(e.naturalWidth || e.videoWidth || e.width, e.naturalHeight || e.videoHeight || e.height), this.source = t, this.noSubImage = !1
                }
                static crossOrigin(t, e, i) {
                    void 0 === i && 0 !== e.indexOf("data:") ? t.crossOrigin = "anonymous" : !1 !== i && (t.crossOrigin = "string" == typeof i ? i : "anonymous")
                }
                upload(t, e, i, r) {
                    var s = t.gl,
                        n = e.realWidth,
                        a = e.realHeight;
                    return r = r || this.source, s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === G.UNPACK), this.noSubImage || e.target !== s.TEXTURE_2D || i.width !== n || i.height !== a ? (i.width = n, i.height = a, s.texImage2D(e.target, 0, e.format, e.format, e.type, r)) : s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, e.format, e.type, r), !0
                }
                update() {
                    if (!this.destroyed) {
                        var t = this.source,
                            e = t.naturalWidth || t.videoWidth || t.width,
                            i = t.naturalHeight || t.videoHeight || t.height;
                        this.resize(e, i), super.update()
                    }
                }
                dispose() {
                    this.source = null
                }
            }
            class He extends Xe {
                static test(t) {
                    return "canvas" === t._type || t instanceof Zt || "HTMLCanvasElement" === t.constructor.name || "t" === t.constructor.name || "n" === t.constructor.name
                }
            }
            class ze extends Xe {
                constructor(t, e) {
                    if (e = e || {}, !(t instanceof $t)) {
                        var i = new l;
                        Xe.crossOrigin(i, t, e.crossorigin), i.bindingScreen = e.bindingScreen, i.src = t, t = i
                    }
                    super(t), !t.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = t.src, this.preserveBitmap = !1, this.createBitmap = void 0 !== e.createBitmap ? e.createBitmap : j.CREATE_IMAGE_BITMAP, this.alphaMode = "number" == typeof e.alphaMode ? e.alphaMode : null, void 0 !== e.premultiplyAlpha && (this.premultiplyAlpha = e.premultiplyAlpha), this.bitmap = null, this._load = null, !1 !== e.autoLoad && this.load()
                }
                load() {
                    return this._load || (this.createBitmap = !1, this._load = new Promise(((t, e) => {
                        var i = this.source;
                        this.url = i.src;
                        var r = () => {
                            this.destroyed || (i.onload = null, i.onerror = null, this.resize(i.width, i.height), this._load = null, t(this))
                        };
                        i.complete && i.src ? r() : (i.onload = r, i.onerror = t => {
                            e(t), this.onError.emit(t)
                        })
                    }))), this._load
                }
                upload(t, e, i) {
                    if ("number" == typeof this.alphaMode && (e.alphaMode = this.alphaMode), !this.createBitmap) return super.upload(t, e, i);
                    if (!this.bitmap && !this.bitmap) return !1;
                    if (super.upload(t, e, i, this.bitmap), !this.preserveBitmap) {
                        var r = !0,
                            s = e._glTextures;
                        for (var n in s) {
                            var a = s[n];
                            if (a !== i && a.dirtyId !== e.dirtyId) {
                                r = !1;
                                break
                            }
                        }
                        r && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
                    }
                    return !0
                }
                dispose() {
                    this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._load = null
                }
                static test(t) {
                    return "string" == typeof t || t instanceof $t
                }
            }
            class Ve extends Ge {
                constructor(t, e) {
                    var {
                        width: i,
                        height: r
                    } = e || {};
                    if (!i || !r) throw new Error("BufferResource width or height invalid");
                    super(i, r), this.data = t
                }
                upload(t, e, i) {
                    var r = t.gl;
                    return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === G.UNPACK), i.width === e.width && i.height === e.height ? r.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (i.width = e.width, i.height = e.height, r.texImage2D(e.target, 0, i.internalFormat, e.width, e.height, 0, e.format, i.type, this.data)), !0
                }
                dispose() {
                    this.data = null
                }
                static test(t) {
                    return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
                }
            }
            var Ye = {
                scaleMode: F.NEAREST,
                format: L.RGBA,
                alphaMode: G.NPM
            };
            class je extends et {
                constructor(t = null, e = null) {
                    super(), e = e || {};
                    var {
                        alphaMode: i,
                        mipmap: r,
                        anisotropicLevel: s,
                        scaleMode: n,
                        width: a,
                        height: h,
                        wrapMode: o,
                        format: l,
                        type: u,
                        target: d,
                        resolution: c,
                        resourceOptions: f,
                        bindingScreen: p
                    } = e;
                    !t || t instanceof Ge || (f ? (f.bindingScreen = p, t = ke(t, f)) : t = ke(t, {
                        bindingScreen: p
                    }), t.internal = !0), this.width = a || 0, this.height = h || 0, this.resolution = c || j.RESOLUTION, this.mipmap = void 0 !== r ? r : j.MIPMAP_TEXTURES, this.anisotropicLevel = void 0 !== s ? s : j.ANISOTROPIC_LEVEL, this.wrapMode = o || j.WRAP_MODE, this.scaleMode = void 0 !== n ? n : j.SCALE_MODE, this.format = l || L.RGBA, this.type = u || B.UNSIGNED_BYTE, this.target = d || N.TEXTURE_2D, this.alphaMode = void 0 !== i ? i : G.UNPACK, void 0 !== e.premultiplyAlpha && (this.premultiplyAlpha = e.premultiplyAlpha), this.uid = Ht(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = a > 0 && h > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(t)
                }
                get realWidth() {
                    return Math.ceil(this.width * this.resolution - 1e-4)
                }
                get realHeight() {
                    return Math.ceil(this.height * this.resolution - 1e-4)
                }
                setStyle(t, e) {
                    var i;
                    return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, i = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, i = !0), i && this.dirtyStyleId++, this
                }
                setSize(t, e, i) {
                    return this.resolution = i || this.resolution, this.width = t, this.height = e, this._refreshPOT(), this.update(), this
                }
                setRealSize(t, e, i) {
                    return this.resolution = i || this.resolution, this.width = t / this.resolution, this.height = e / this.resolution, this._refreshPOT(), this.update(), this
                }
                _refreshPOT() {
                    this.isPowerOfTwo = Ft(this.realWidth) && Ft(this.realHeight)
                }
                setResolution(t) {
                    var e = this.resolution;
                    return e === t || (this.resolution = t, this.valid && (this.width = this.width * e / t, this.height = this.height * e / t, this.emit("update", this)), this._refreshPOT()), this
                }
                setResource(t) {
                    if (this.resource === t) return this;
                    if (this.resource) throw new Error("Resource can be set only once");
                    return t.bind(this), this.resource = t, this
                }
                update() {
                    this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
                }
                onError(t) {
                    this.emit("error", this, t)
                }
                destroy() {
                    this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Yt[this.cacheId], delete Vt[this.cacheId], this.cacheId = null), this.dispose(), je.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
                }
                dispose() {
                    this.emit("dispose", this)
                }
                castToBaseTexture() {
                    return this
                }
                static from(t, e, i = j.STRICT_TEXTURE_CACHE) {
                    var r = "string" == typeof t,
                        s = null;
                    r ? s = t : (t._pixiId || (t._pixiId = `pixiid_${Ht()}`), s = t._pixiId);
                    var n = Yt[s];
                    if (r && i && !n) throw new Error(`The cacheId "${s}" does not exist in BaseTextureCache.`);
                    return n || ((n = new je(t, e)).cacheId = s, je.addToCache(n, s)), n
                }
                static fromBuffer(t, e, i, r) {
                    t = t || new Float32Array(e * i * 4);
                    var s = new Ve(t, {
                            width: e,
                            height: i
                        }),
                        n = t instanceof Float32Array ? B.FLOAT : B.UNSIGNED_BYTE;
                    return new je(s, Object.assign(Ye, r || {
                        width: e,
                        height: i,
                        type: n
                    }))
                }
                static addToCache(t, e) {
                    e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), Yt[e], Yt[e] = t)
                }
                static removeFromCache(t) {
                    if ("string" == typeof t) {
                        var e = Yt[t];
                        if (e) {
                            var i = e.textureCacheIds.indexOf(t);
                            return i > -1 && e.textureCacheIds.splice(i, 1), delete Yt[t], e
                        }
                    } else if (t && t.textureCacheIds) {
                        for (var r = 0; r < t.textureCacheIds.length; ++r) delete Yt[t.textureCacheIds[r]];
                        return t.textureCacheIds.length = 0, t
                    }
                    return null
                }
            }
            je._globalBatch = 0;
            Ue.push(ze, He);
            var We = {
                Resource: Ge,
                BaseImageResource: Xe,
                INSTALLED: Ue,
                autoDetectResource: ke,
                AbstractMultiResource: class extends Ge {
                    constructor(t, e) {
                        var {
                            width: i,
                            height: r
                        } = e || {};
                        super(i, r), this.items = [], this.itemDirtyIds = [];
                        for (var s = 0; s < t; s++) {
                            var n = new je;
                            this.items.push(n), this.itemDirtyIds.push(-2)
                        }
                        this.length = t, this._load = null, this.baseTexture = null
                    }
                    initFromArray(t, e) {
                        for (var i = 0; i < this.length; i++) t[i] && (t[i].castToBaseTexture ? this.addBaseTextureAt(t[i].castToBaseTexture(), i) : t[i] instanceof Ge ? this.addResourceAt(t[i], i) : this.addResourceAt(ke(t[i], e), i))
                    }
                    dispose() {
                        for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();
                        this.items = null, this.itemDirtyIds = null, this._load = null
                    }
                    addResourceAt(t, e) {
                        if (!this.items[e]) throw new Error(`Index ${e} is out of bounds`);
                        return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
                    }
                    bind(t) {
                        if (null !== this.baseTexture) throw new Error("Only one base texture per TextureArray is allowed");
                        super.bind(t);
                        for (var e = 0; e < this.length; e++) this.items[e].parentTextureArray = t, this.items[e].on("update", t.update, t)
                    }
                    unbind(t) {
                        super.unbind(t);
                        for (var e = 0; e < this.length; e++) this.items[e].parentTextureArray = null, this.items[e].off("update", t.update, t)
                    }
                    load() {
                        if (this._load) return this._load;
                        var t = this.items.map((t => t.resource)).filter((t => t)).map((t => t.load()));
                        return this._load = Promise.all(t).then((() => {
                            var {
                                realWidth: t,
                                realHeight: e
                            } = this.items[0];
                            return this.resize(t, e), Promise.resolve(this)
                        })), this._load
                    }
                },
                CanvasResource: He,
                ImageResource: ze
            };
            class $e {
                constructor(t) {
                    this.renderer = t
                }
                destroy() {
                    this.renderer = null
                }
            }
            class qe extends Ve {
                upload(t, e, i) {
                    var r = t.gl;
                    return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === G.UNPACK), i.width === e.width && i.height === e.height ? r.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (i.width = e.width, i.height = e.height, r.texImage2D(e.target, 0, 1 === t.context.webGLVersion ? r.DEPTH_COMPONENT : r.DEPTH_COMPONENT16, e.width, e.height, 0, e.format, e.type, this.data)), !0
                }
            }
            class Ze {
                constructor(t, e) {
                    this.width = Math.ceil(t || 100), this.height = Math.ceil(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new Fe("disposeFramebuffer"), this.multisample = Y.NONE
                }
                get colorTexture() {
                    return this.colorTextures[0]
                }
                addColorTexture(t = 0, e) {
                    return this.colorTextures[t] = e || new je(null, {
                        scaleMode: F.NEAREST,
                        resolution: 1,
                        mipmap: k.OFF,
                        width: this.width,
                        height: this.height
                    }), this.dirtyId++, this.dirtyFormat++, this
                }
                addDepthTexture(t) {
                    return this.depthTexture = t || new je(new qe(null, {
                        width: this.width,
                        height: this.height
                    }), {
                        scaleMode: F.NEAREST,
                        resolution: 1,
                        width: this.width,
                        height: this.height,
                        mipmap: k.OFF,
                        format: L.DEPTH_COMPONENT,
                        type: B.UNSIGNED_SHORT
                    }), this.dirtyId++, this.dirtyFormat++, this
                }
                enableDepth() {
                    return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
                }
                enableStencil() {
                    return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
                }
                resize(t, e) {
                    if (t = Math.ceil(t), e = Math.ceil(e), t !== this.width || e !== this.height) {
                        this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
                        for (var i = 0; i < this.colorTextures.length; i++) {
                            var r = this.colorTextures[i],
                                s = r.resolution;
                            r.setSize(t / s, e / s)
                        }
                        if (this.depthTexture) {
                            var n = this.depthTexture.resolution;
                            this.depthTexture.setSize(t / n, e / n)
                        }
                    }
                }
                dispose() {
                    this.disposeRunner.emit(this, !1)
                }
                destroyDepthTexture() {
                    this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
                }
            }
            class Ke extends je {
                constructor(t) {
                    "number" == typeof t && (t = {
                        width: arguments[0],
                        height: arguments[1],
                        scaleMode: arguments[2],
                        resolution: arguments[3]
                    });
                    super(null, t);
                    var {
                        width: e,
                        height: i
                    } = t || {};
                    this.mipmap = 0, this.width = Math.ceil(e) || 100, this.height = Math.ceil(i) || 100, this.valid = !0, this.clearColor = [0, 0, 0, 0], this.framebuffer = new Ze(this.width * this.resolution, this.height * this.resolution).addColorTexture(0, this), this.maskStack = [], this.filterStack = [{}]
                }
                resize(t, e) {
                    t = Math.ceil(t), e = Math.ceil(e), this.framebuffer.resize(t * this.resolution, e * this.resolution)
                }
                dispose() {
                    this.framebuffer.dispose(), super.dispose()
                }
                destroy() {
                    super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null
                }
            }
            class Je {
                constructor() {
                    this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
                }
                set(t, e, i) {
                    var r = e.width,
                        s = e.height;
                    if (i) {
                        var n = t.width / 2 / r,
                            a = t.height / 2 / s,
                            h = t.x / r + n,
                            o = t.y / s + a;
                        i = ye.add(i, ye.NW), this.x0 = h + n * ye.uX(i), this.y0 = o + a * ye.uY(i), i = ye.add(i, 2), this.x1 = h + n * ye.uX(i), this.y1 = o + a * ye.uY(i), i = ye.add(i, 2), this.x2 = h + n * ye.uX(i), this.y2 = o + a * ye.uY(i), i = ye.add(i, 2), this.x3 = h + n * ye.uX(i), this.y3 = o + a * ye.uY(i)
                    } else this.x0 = t.x / r, this.y0 = t.y / s, this.x1 = (t.x + t.width) / r, this.y1 = t.y / s, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / s, this.x3 = t.x / r, this.y3 = (t.y + t.height) / s;
                    this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
                }
            }
            var Qe = new Je;
            class ti extends et {
                constructor(t, e, i, r, s, n) {
                    if (super(), this.noFrame = !1, e || (this.noFrame = !0, e = new se(0, 0, 1, 1)), t instanceof ti && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = r, this.valid = !1, this._uvs = Qe, this.uvMatrix = null, this.orig = i || e, this._rotate = Number(s || 0), !0 === s) this._rotate = 2;
                    else if (this._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                    this.defaultAnchor = n ? new le(n.x, n.y) : new le(0, 0), this._updateID = 0, this.textureCacheIds = [], t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = e : t.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && t.on("update", this.onBaseTextureUpdated, this)
                }
                update() {
                    this.baseTexture.resource && this.baseTexture.resource.update()
                }
                onBaseTextureUpdated(t) {
                    if (this.noFrame) {
                        if (!this.baseTexture.valid) return;
                        this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
                    } else this.frame = this._frame;
                    this.emit("update", this)
                }
                destroy(t) {
                    if (this.baseTexture) {
                        if (t) {
                            var e = this.baseTexture;
                            e && e.url && Vt[e.url] && ti.removeFromCache(e.url), this.baseTexture.destroy()
                        }
                        this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
                    }
                    this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, ti.removeFromCache(this), this.textureCacheIds = null
                }
                clone() {
                    return new ti(this.baseTexture, this.frame.clone(), this.orig.clone(), this.trim && this.trim.clone(), this.rotate, this.defaultAnchor)
                }
                updateUvs() {
                    this._uvs === Qe && (this._uvs = new Je), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
                }
                static from(t, e = {}, i = j.STRICT_TEXTURE_CACHE) {
                    var r = "string" == typeof t,
                        s = null;
                    r ? s = t : (t._pixiId || (t._pixiId = `pixiid_${Ht()}`), s = t._pixiId);
                    var n = Vt[s];
                    if (r && i && !n) throw new Error(`The cacheId "${s}" does not exist in TextureCache.`);
                    return n || (e.resolution || (e.resolution = Wt(t)), (n = new ti(new je(t, e))).baseTexture.cacheId = s, je.addToCache(n.baseTexture, s), ti.addToCache(n, s)), n
                }
                static fromURL(t, e) {
                    var i = Object.assign({
                            autoLoad: !1
                        }, null == e ? void 0 : e.resourceOptions),
                        r = ti.from(t, Object.assign({
                            resourceOptions: i
                        }, e), !1),
                        s = r.baseTexture.resource;
                    return r.baseTexture.valid ? Promise.resolve(r) : s.load().then((() => Promise.resolve(r)))
                }
                static fromBuffer(t, e, i, r) {
                    return new ti(je.fromBuffer(t, e, i, r))
                }
                static fromLoader(t, e, i) {
                    var r = new ze(t);
                    r.url = e;
                    var s = new je(r, {
                            scaleMode: j.SCALE_MODE,
                            resolution: Wt(e)
                        }),
                        n = new ti(s);
                    return i || (i = e), je.addToCache(n.baseTexture, i), ti.addToCache(n, i), i !== e && (je.addToCache(n.baseTexture, e), ti.addToCache(n, e)), n
                }
                static addToCache(t, e) {
                    e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), Vt[e], Vt[e] = t)
                }
                static removeFromCache(t) {
                    if ("string" == typeof t) {
                        var e = Vt[t];
                        if (e) {
                            var i = e.textureCacheIds.indexOf(t);
                            return i > -1 && e.textureCacheIds.splice(i, 1), delete Vt[t], e
                        }
                    } else if (t && t.textureCacheIds) {
                        for (var r = 0; r < t.textureCacheIds.length; ++r) Vt[t.textureCacheIds[r]] === t && delete Vt[t.textureCacheIds[r]];
                        return t.textureCacheIds.length = 0, t
                    }
                    return null
                }
                get resolution() {
                    return this.baseTexture.resolution
                }
                get frame() {
                    return this._frame
                }
                set frame(t) {
                    this._frame = t, this.noFrame = !1;
                    var {
                        x: e,
                        y: i,
                        width: r,
                        height: s
                    } = t, n = e + r > this.baseTexture.width, a = i + s > this.baseTexture.height;
                    if (n || a) {
                        var h = n && a ? "and" : "or",
                            o = `X: ${e} + ${r} = ${e+r} > ${this.baseTexture.width}`,
                            l = `Y: ${i} + ${s} = ${i+s} > ${this.baseTexture.height}`;
                        throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${o} ${h} ${l}`)
                    }
                    this.valid = r && s && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs()
                }
                get rotate() {
                    return this._rotate
                }
                set rotate(t) {
                    this._rotate = t, this.valid && this.updateUvs()
                }
                get width() {
                    return this.orig.width
                }
                get height() {
                    return this.orig.height
                }
                castToBaseTexture() {
                    return this.baseTexture
                }
                static get EMPTY() {
                    return this._EMPTY || ti._EMPTY || (ti._EMPTY = new ti(new je), ei(ti._EMPTY), ei(ti._EMPTY.baseTexture)), this._EMPTY
                }
                static get WHITE() {
                    return this._WHITE[0] || ii(0), this._WHITE[0]
                }
                static getWHITE(t = 0) {
                    return this._WHITE[t] || ii(t), this._WHITE[t]
                }
            }

            function ei(t) {
                t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {}
            }

            function ii(t) {
                ti._WHITE[t] || (ti._WHITE[t] = function(t) {
                    var e = Kt.createElement("canvas");
                    e.bindingScreen = t, e.width = 16, e.height = 16;
                    var i = e.getContext("2d");
                    return i.fillStyle = "white", i.fillRect(0, 0, 16, 16), new ti(new je(new He(e)))
                }(t), ei(ti._WHITE[t]), ei(ti._WHITE[t].baseTexture))
            }
            ti._WHITE = Object.create(null);
            class ri extends ti {
                constructor(t, e) {
                    var i = null;
                    if (!(t instanceof Ke)) {
                        var r = arguments[1],
                            s = arguments[2];
                        i = arguments[0], e = null, t = new Ke({
                            width: r,
                            height: s,
                            scaleMode: arguments[3],
                            resolution: arguments[4]
                        })
                    }
                    super(t, e), this.legacyRenderer = i, this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs()
                }
                get framebuffer() {
                    return this.baseTexture.framebuffer
                }
                resize(t, e, i = !0) {
                    t = Math.ceil(t), e = Math.ceil(e), this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, i && this.baseTexture.resize(t, e), this.updateUvs()
                }
                setResolution(t) {
                    var {
                        baseTexture: e
                    } = this;
                    e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1))
                }
                static create(t) {
                    return "number" == typeof t && (t = {
                        width: t,
                        height: arguments[1],
                        scaleMode: arguments[2],
                        resolution: arguments[3]
                    }), new ri(new Ke(t))
                }
            }
            class si {
                constructor(t) {
                    this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
                }
                createTexture(t, e) {
                    var i = new Ke(Object.assign({
                        width: t,
                        height: e,
                        resolution: 1
                    }, this.textureOptions));
                    return new ri(i)
                }
                getOptimalTexture(t, e, i = 1) {
                    var r = si.SCREEN_KEY;
                    t *= i, e *= i, this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight || (r = (65535 & (t = Bt(t))) << 16 | 65535 & (e = Bt(e))), this.texturePool[r] || (this.texturePool[r] = []);
                    var s = this.texturePool[r].pop();
                    return s || (s = this.createTexture(t, e)), s.filterPoolKey = r, s.setResolution(i), s
                }
                getFilterTexture(t, e) {
                    var i = this.getOptimalTexture(t.width, t.height, e || t.resolution);
                    return i.filterFrame = t.filterFrame, i
                }
                returnTexture(t) {
                    var e = t.filterPoolKey;
                    t.filterFrame = null, this.texturePool[e].push(t)
                }
                returnFilterTexture(t) {
                    this.returnTexture(t)
                }
                clear(t) {
                    if (t = !1 !== t)
                        for (var e in this.texturePool) {
                            var i = this.texturePool[e];
                            if (i)
                                for (var r = 0; r < i.length; r++) i[r].destroy(!0)
                        }
                    this.texturePool = {}
                }
                setScreenSize(t) {
                    if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
                        var e = si.SCREEN_KEY,
                            i = this.texturePool[e];
                        if (this.enableFullScreen = t.width > 0 && t.height > 0, i)
                            for (var r = 0; r < i.length; r++) i[r].destroy(!0);
                        this.texturePool[e] = [], this._pixelsWidth = t.width, this._pixelsHeight = t.height
                    }
                }
            }
            si.SCREEN_KEY = "screen";
            class ni {
                constructor(t, e = 0, i = !1, r = 5126, s, n, a) {
                    this.buffer = t, this.size = e, this.normalized = i, this.type = r, this.stride = s, this.start = n, this.instance = a
                }
                destroy() {
                    this.buffer = null
                }
                static from(t, e, i, r, s) {
                    return new ni(t, e, i, r, s)
                }
            }
            var ai = 0;
            class hi {
                constructor(t, e = !0, i = !1) {
                    this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = i, this.static = e, this.id = ai++, this.disposeRunner = new Fe("disposeBuffer")
                }
                update(t) {
                    this.data = t || this.data, this._updateID++
                }
                dispose() {
                    this.disposeRunner.emit(this, !1)
                }
                destroy() {
                    this.dispose(), this.data = null
                }
                static from(t) {
                    return t instanceof Array && (t = new Float32Array(t)), new hi(t)
                }
            }

            function oi(t) {
                if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
                if (2 === t.BYTES_PER_ELEMENT) {
                    if (t instanceof Uint16Array) return "Uint16Array"
                } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
                return null
            }
            var li = {
                Float32Array: Float32Array,
                Uint32Array: Uint32Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array
            };
            var ui = {
                    5126: 4,
                    5123: 2,
                    5121: 1
                },
                di = 0,
                ci = {
                    Float32Array: Float32Array,
                    Uint32Array: Uint32Array,
                    Int32Array: Int32Array,
                    Uint8Array: Uint8Array,
                    Uint16Array: Uint16Array
                };
            class fi {
                constructor(t = [], e = {}) {
                    this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = di++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new Fe("disposeGeometry"), this.refCount = 0
                }
                addAttribute(t, e, i = 0, r = !1, s, n, a, h = !1) {
                    if (!e) throw new Error("You must pass a buffer when creating an attribute");
                    e instanceof hi || (e instanceof Array && (e = new Float32Array(e)), e = new hi(e));
                    var o = t.split("|");
                    if (o.length > 1) {
                        for (var l = 0; l < o.length; l++) this.addAttribute(o[l], e, i, r, s);
                        return this
                    }
                    var u = this.buffers.indexOf(e);
                    return -1 === u && (this.buffers.push(e), u = this.buffers.length - 1), this.attributes[t] = new ni(u, i, r, s, n, a, h), this.instanced = this.instanced || h, this
                }
                getAttribute(t) {
                    return this.attributes[t]
                }
                getBuffer(t) {
                    return this.buffers[this.getAttribute(t).buffer]
                }
                addIndex(t) {
                    return t instanceof hi || (t instanceof Array && (t = new Uint16Array(t)), t = new hi(t)), t.index = !0, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this
                }
                getIndex() {
                    return this.indexBuffer
                }
                interleave() {
                    if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
                    var t, e = [],
                        i = [],
                        r = new hi;
                    for (t in this.attributes) {
                        var s = this.attributes[t],
                            n = this.buffers[s.buffer];
                        e.push(n.data), i.push(s.size * ui[s.type] / 4), s.buffer = 0
                    }
                    for (r.data = function(t, e) {
                            for (var i = 0, r = 0, s = {}, n = 0; n < t.length; n++) r += e[n], i += t[n].length;
                            for (var a = new ArrayBuffer(4 * i), h = null, o = 0, l = 0; l < t.length; l++) {
                                var u = e[l],
                                    d = t[l],
                                    c = oi(d);
                                s[c] || (s[c] = new li[c](a)), h = s[c];
                                for (var f = 0; f < d.length; f++) h[(f / u | 0) * r + o + f % u] = d[f];
                                o += u
                            }
                            return new Float32Array(a)
                        }(e, i), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
                    return this.buffers = [r], this.indexBuffer && this.buffers.push(this.indexBuffer), this
                }
                getSize() {
                    for (var t in this.attributes) {
                        var e = this.attributes[t];
                        return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
                    }
                    return 0
                }
                dispose() {
                    this.disposeRunner.emit(this, !1)
                }
                destroy() {
                    this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
                }
                clone() {
                    for (var t = new fi, e = 0; e < this.buffers.length; e++) t.buffers[e] = new hi(this.buffers[e].data.slice(0));
                    for (var i in this.attributes) {
                        var r = this.attributes[i];
                        t.attributes[i] = new ni(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance)
                    }
                    return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.index = !0), t
                }
                static merge(t) {
                    for (var e, i = new fi, r = [], s = [], n = [], a = 0; a < t.length; a++) {
                        e = t[a];
                        for (var h = 0; h < e.buffers.length; h++) s[h] = s[h] || 0, s[h] += e.buffers[h].data.length, n[h] = 0
                    }
                    for (var o = 0; o < e.buffers.length; o++) r[o] = new(ci[oi(e.buffers[o].data)])(s[o]), i.buffers[o] = new hi(r[o]);
                    for (var l = 0; l < t.length; l++) {
                        e = t[l];
                        for (var u = 0; u < e.buffers.length; u++) r[u].set(e.buffers[u].data, n[u]), n[u] += e.buffers[u].data.length
                    }
                    if (i.attributes = e.attributes, e.indexBuffer) {
                        i.indexBuffer = i.buffers[e.buffers.indexOf(e.indexBuffer)], i.indexBuffer.index = !0;
                        for (var d = 0, c = 0, f = 0, p = 0, m = 0; m < e.buffers.length; m++)
                            if (e.buffers[m] !== e.indexBuffer) {
                                p = m;
                                break
                            } for (var g in e.attributes) {
                            var v = e.attributes[g];
                            (0 | v.buffer) === p && (c += v.size * ui[v.type] / 4)
                        }
                        for (var _ = 0; _ < t.length; _++) {
                            for (var x = t[_].indexBuffer.data, y = 0; y < x.length; y++) i.indexBuffer.data[y + f] += d;
                            d += e.buffers[p].data.length / c, f += x.length
                        }
                    }
                    return i
                }
            }
            class pi extends fi {
                constructor() {
                    super(), this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2])
                }
            }
            class mi extends fi {
                constructor() {
                    super(), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new hi(this.vertices), this.uvBuffer = new hi(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
                }
                map(t, e) {
                    var i = 0,
                        r = 0;
                    return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + e.width / t.width, this.uvs[3] = r, this.uvs[4] = i + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = i, this.uvs[7] = r + e.height / t.height, i = e.x, r = e.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + e.width, this.vertices[3] = r, this.vertices[4] = i + e.width, this.vertices[5] = r + e.height, this.vertices[6] = i, this.vertices[7] = r + e.height, this.invalidate(), this
                }
                invalidate() {
                    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
                }
            }
            var gi = 0;
            class vi {
                constructor(t, e) {
                    this.uniforms = t, this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = gi++, this.static = !!e
                }
                update() {
                    this.dirtyId++
                }
                add(t, e, i) {
                    this.uniforms[t] = new vi(e, i)
                }
                static from(t, e) {
                    return new vi(t, e)
                }
            }
            class _i {
                constructor() {
                    this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.sourceFrame = new se, this.destinationFrame = new se, this.filters = []
                }
                clear() {
                    this.target = null, this.filters = null, this.renderTexture = null
                }
            }
            class xi extends $e {
                constructor(t) {
                    super(t), this.defaultFilterStack = [{}], this.texturePool = new si, this.texturePool.setScreenSize(t.view), this.statePool = [], this.quad = new pi, this.quadUv = new mi, this.tempRect = new se, this.activeState = {}, this.globalUniforms = new vi({
                        outputFrame: this.tempRect,
                        inputSize: new Float32Array(4),
                        inputPixel: new Float32Array(4),
                        inputClamp: new Float32Array(4),
                        resolution: 1,
                        filterArea: new Float32Array(4),
                        filterClamp: new Float32Array(4)
                    }, !0), this.forceClear = !1, this.useMaxPadding = !1
                }
                push(t, e) {
                    for (var i = this.renderer, r = this.defaultFilterStack, s = this.statePool.pop() || new _i, n = e[0].resolution, a = e[0].padding, h = e[0].autoFit, o = e[0].legacy, l = 1; l < e.length; l++) {
                        var u = e[l];
                        n = Math.min(n, u.resolution), a = this.useMaxPadding ? Math.max(a, u.padding) : a + u.padding, h = h && u.autoFit, o = o || u.legacy
                    }
                    1 === r.length && (this.defaultFilterStack[0].renderTexture = i.renderTexture.current), r.push(s), s.resolution = n, s.legacy = o, s.target = t, s.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), s.sourceFrame.pad(a), h && s.sourceFrame.fit(this.renderer.renderTexture.sourceFrame), s.sourceFrame.ceil(n), s.renderTexture = this.getOptimalFilterTexture(s.sourceFrame.width, s.sourceFrame.height, n), s.filters = e, s.destinationFrame.width = s.renderTexture.width, s.destinationFrame.height = s.renderTexture.height;
                    var d = this.tempRect;
                    d.width = s.sourceFrame.width, d.height = s.sourceFrame.height, s.renderTexture.filterFrame = s.sourceFrame, i.renderTexture.bind(s.renderTexture, s.sourceFrame, d), i.renderTexture.clear()
                }
                pop() {
                    var t = this.defaultFilterStack,
                        e = t.pop(),
                        i = e.filters;
                    this.activeState = e;
                    var r = this.globalUniforms.uniforms;
                    r.outputFrame = e.sourceFrame, r.resolution = e.resolution;
                    var s = r.inputSize,
                        n = r.inputPixel,
                        a = r.inputClamp;
                    if (s[0] = e.destinationFrame.width, s[1] = e.destinationFrame.height, s[2] = 1 / s[0], s[3] = 1 / s[1], n[0] = s[0] * e.resolution, n[1] = s[1] * e.resolution, n[2] = 1 / n[0], n[3] = 1 / n[1], a[0] = .5 * n[2], a[1] = .5 * n[3], a[2] = e.sourceFrame.width * s[2] - .5 * n[2], a[3] = e.sourceFrame.height * s[3] - .5 * n[3], e.legacy) {
                        var h = r.filterArea;
                        h[0] = e.destinationFrame.width, h[1] = e.destinationFrame.height, h[2] = e.sourceFrame.x, h[3] = e.sourceFrame.y, r.filterClamp = r.inputClamp
                    }
                    this.globalUniforms.update();
                    var o = t[t.length - 1];
                    if (e.renderTexture.framebuffer.multisample > 1 && this.renderer.framebuffer.blit(), 1 === i.length) i[0].apply(this, e.renderTexture, o.renderTexture, X.BLEND, e), this.returnFilterTexture(e.renderTexture);
                    else {
                        var l = e.renderTexture,
                            u = this.getOptimalFilterTexture(l.width, l.height, e.resolution);
                        u.filterFrame = l.filterFrame;
                        var d = 0;
                        for (d = 0; d < i.length - 1; ++d) {
                            i[d].apply(this, l, u, X.CLEAR, e);
                            var c = l;
                            l = u, u = c
                        }
                        i[d].apply(this, l, o.renderTexture, X.BLEND, e), this.returnFilterTexture(l), this.returnFilterTexture(u)
                    }
                    e.clear(), this.statePool.push(e)
                }
                bindAndClear(t, e = X.CLEAR) {
                    if (t && t.filterFrame) {
                        var i = this.tempRect;
                        i.width = t.filterFrame.width, i.height = t.filterFrame.height, this.renderer.renderTexture.bind(t, t.filterFrame, i)
                    } else this.renderer.renderTexture.bind(t);
                    "boolean" == typeof e && (e = e ? X.CLEAR : X.BLEND), (e === X.CLEAR || e === X.BLIT && this.forceClear) && this.renderer.renderTexture.clear()
                }
                applyFilter(t, e, i, r) {
                    var s = this.renderer;
                    this.bindAndClear(i, r), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, s.state.set(t.state), s.shader.bind(t), t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), s.geometry.bind(this.quadUv), s.geometry.draw(O.TRIANGLES)) : (s.geometry.bind(this.quad), s.geometry.draw(O.TRIANGLE_STRIP))
                }
                calculateSpriteMatrix(t, e) {
                    var {
                        sourceFrame: i,
                        destinationFrame: r
                    } = this.activeState, {
                        orig: s
                    } = e._texture, n = t.set(r.width, 0, 0, r.height, i.x, i.y), a = e.worldTransform.copyTo(de.TEMP_MATRIX);
                    return a.invert(), n.prepend(a), n.scale(1 / s.width, 1 / s.height), n.translate(e.anchor.x, e.anchor.y), n
                }
                destroy() {
                    this.texturePool.clear(!1)
                }
                getOptimalFilterTexture(t, e, i = 1) {
                    return this.texturePool.getOptimalTexture(t, e, i)
                }
                getFilterTexture(t, e) {
                    if ("number" == typeof t) {
                        var i = t;
                        t = e, e = i
                    }
                    t = t || this.activeState.renderTexture;
                    var r = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution);
                    return r.filterFrame = t.filterFrame, r
                }
                returnFilterTexture(t) {
                    this.texturePool.returnTexture(t)
                }
                emptyPool() {
                    this.texturePool.clear(!0)
                }
                resize() {
                    this.texturePool.setScreenSize(this.renderer.view)
                }
            }
            class yi {
                constructor(t) {
                    this.renderer = t
                }
                flush() {}
                destroy() {
                    this.renderer = null
                }
                start() {}
                stop() {
                    this.flush()
                }
                render(t) {}
            }
            class Ti extends $e {
                constructor(t) {
                    super(t), this.emptyRenderer = new yi(t), this.currentRenderer = this.emptyRenderer
                }
                setObjectRenderer(t) {
                    this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
                }
                flush() {
                    this.setObjectRenderer(this.emptyRenderer)
                }
                reset() {
                    this.setObjectRenderer(this.emptyRenderer)
                }
                copyBoundTextures(t, e) {
                    for (var {
                            boundTextures: i
                        } = this.renderer.texture, r = e - 1; r >= 0; --r) t[r] = i[r] || null, t[r] && (t[r]._batchLocation = r)
                }
                boundArray(t, e, i, r) {
                    for (var {
                            elements: s,
                            ids: n,
                            count: a
                        } = t, h = 0, o = 0; o < a; o++) {
                        var l = s[o],
                            u = l._batchLocation;
                        if (u >= 0 && u < r && e[u] === l) n[o] = u;
                        else
                            for (; h < r;) {
                                var d = e[h];
                                if (!d || d._batchEnabled !== i || d._batchLocation !== h) {
                                    n[o] = h, l._batchLocation = h, e[h] = l;
                                    break
                                }
                                h++
                            }
                    }
                }
            }
            var bi = 0;
            class Ei extends $e {
                constructor(t) {
                    super(t), this.webGLVersion = 1, this.extensions = {}, this.supports = {
                        uint32Indices: !1
                    }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), t.view.addEventListener && (t.view.addEventListener("webglcontextlost", this.handleContextLost, !1), t.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1))
                }
                get isLost() {
                    return !this.gl || this.gl.isContextLost()
                }
                contextChange(t) {
                    this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = bi++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
                }
                initFromContext(t) {
                    this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = bi++, this.renderer.runners.contextChange.emit(t)
                }
                initFromOptions(t) {
                    var e = this.createContext(this.renderer.view, t);
                    this.initFromContext(e)
                }
                createContext(t, e) {
                    var i;
                    if (j.PREFER_ENV >= M.WEBGL2 && (i = t.getContext("webgl2", e)), i) this.webGLVersion = 2;
                    else if (this.webGLVersion = 1, !(i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                    return this.gl = i, this.getExtensions(), this.gl
                }
                getExtensions() {
                    var {
                        gl: t
                    } = this;
                    1 === this.webGLVersion ? Object.assign(this.extensions, {
                        drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                        depthTexture: t.getExtension("WEBGL_depth_texture"),
                        loseContext: t.getExtension("WEBGL_lose_context"),
                        vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                        anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                        uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                        floatTexture: t.getExtension("OES_texture_float"),
                        floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                        textureHalfFloat: t.getExtension("OES_texture_half_float"),
                        textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
                    }) : 2 === this.webGLVersion && Object.assign(this.extensions, {
                        anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                        colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
                        floatTextureLinear: t.getExtension("OES_texture_float_linear")
                    })
                }
                handleContextLost(t) {
                    t.preventDefault()
                }
                handleContextRestored() {
                    this.renderer.runners.contextChange.emit(this.gl)
                }
                destroy() {
                    var t = this.renderer.view;
                    t.removeEventListener && (t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
                }
                postrender() {
                    this.renderer.renderingToScreen && this.gl.flush()
                }
                validateContext(t) {
                    t.getContextAttributes().stencil;
                    var e = !!t.getExtension("OES_element_index_uint");
                    this.supports.uint32Indices = e
                }
            }
            class wi {
                constructor(t) {
                    this.framebuffer = t, this.stencil = null, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.multisample = Y.NONE, this.msaaBuffer = null, this.blitFramebuffer = null
                }
            }
            var Si = new se;
            class Ai extends $e {
                constructor(t) {
                    super(t), this.managedFramebuffers = [], this.unknownFramebuffer = new Ze(10, 10), this.msaaSamples = null
                }
                contextChange() {
                    var t = this.gl = this.renderer.gl;
                    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new se, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                        var e = this.renderer.context.extensions.drawBuffers,
                            i = this.renderer.context.extensions.depthTexture;
                        j.PREFER_ENV === M.WEBGL_LEGACY && (e = null, i = null), e ? t.drawBuffers = t => e.drawBuffersWEBGL(t) : (this.hasMRT = !1, t.drawBuffers = () => {}), i || (this.writeDepthTexture = !1)
                    } else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
                }
                bind(t, e) {
                    var {
                        gl: i
                    } = this;
                    if (t) {
                        var r = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                        this.current !== t && (this.current = t, i.bindFramebuffer(i.FRAMEBUFFER, r.framebuffer)), r.dirtyId !== t.dirtyId && (r.dirtyId = t.dirtyId, r.dirtyFormat !== t.dirtyFormat ? (r.dirtyFormat = t.dirtyFormat, this.updateFramebuffer(t)) : r.dirtySize !== t.dirtySize && (r.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
                        for (var s = 0; s < t.colorTextures.length; s++) {
                            var n = t.colorTextures[s];
                            this.renderer.texture.unbind(n.parentTextureArray || n)
                        }
                        t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, t.width, t.height)
                    } else this.current && (this.current = null, i.bindFramebuffer(i.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
                }
                setViewport(t, e, i, r) {
                    var s = this.viewport;
                    s.width === i && s.height === r && s.x === t && s.y === e || (s.x = t, s.y = e, s.width = i, s.height = r, this.gl.viewport(t, e, i, r))
                }
                get size() {
                    return this.current ? {
                        x: 0,
                        y: 0,
                        width: this.current.width,
                        height: this.current.height
                    } : {
                        x: 0,
                        y: 0,
                        width: this.renderer.width,
                        height: this.renderer.height
                    }
                }
                clear(t, e, i, r, s = P.COLOR | P.DEPTH) {
                    var {
                        gl: n
                    } = this;
                    n.clearColor(t, e, i, r), n.clear(s)
                }
                initFramebuffer(t) {
                    var {
                        gl: e
                    } = this, i = new wi(e.createFramebuffer());
                    return i.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = i, this.managedFramebuffers.push(t), t.disposeRunner.add(this), i
                }
                resizeFramebuffer(t) {
                    var {
                        gl: e
                    } = this, i = t.glFramebuffers[this.CONTEXT_UID];
                    i.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, i.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
                    for (var r = t.colorTextures, s = 0; s < r.length; s++) this.renderer.texture.bind(r[s], 0);
                    t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0)
                }
                updateFramebuffer(t) {
                    var {
                        gl: e
                    } = this, i = t.glFramebuffers[this.CONTEXT_UID], r = t.colorTextures.length;
                    e.drawBuffers || (r = Math.min(r, 1)), i.multisample > 1 && (i.msaaBuffer = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, i.msaaBuffer), e.renderbufferStorageMultisample(e.RENDERBUFFER, i.multisample, e.RGBA8, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, i.msaaBuffer));
                    for (var s = [], n = 0; n < r; n++)
                        if (!(0 === n && i.multisample > 1)) {
                            var a = t.colorTextures[n],
                                h = a.parentTextureArray || a;
                            this.renderer.texture.bind(h, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, a.target, h._glTextures[this.CONTEXT_UID].texture, 0), s.push(e.COLOR_ATTACHMENT0 + n)
                        } if ((s.length > 1 && e.drawBuffers(s), t.depthTexture) && this.writeDepthTexture) {
                        var o = t.depthTexture;
                        this.renderer.texture.bind(o, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, o._glTextures[this.CONTEXT_UID].texture, 0)
                    }
                    i.stencil || !t.stencil && !t.depth || (i.stencil = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, i.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height), t.depthTexture || e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, i.stencil))
                }
                detectSamples(t) {
                    var {
                        msaaSamples: e
                    } = this, i = Y.NONE;
                    if (t <= 1 || null === e) return i;
                    for (var r = 0; r < e.length; r++)
                        if (e[r] <= t) {
                            i = e[r];
                            break
                        } return 1 === i && (i = Y.NONE), i
                }
                blit(t, e, i) {
                    var {
                        current: r,
                        renderer: s,
                        gl: n,
                        CONTEXT_UID: a
                    } = this;
                    if (2 === s.context.webGLVersion && r) {
                        var h = r.glFramebuffers[a];
                        if (h) {
                            if (!t) {
                                if (h.multisample <= 1) return;
                                h.blitFramebuffer || (h.blitFramebuffer = new Ze(r.width, r.height), h.blitFramebuffer.addColorTexture(0, r.colorTextures[0])), (t = h.blitFramebuffer).width = r.width, t.height = r.height
                            }
                            e || ((e = Si).width = r.width, e.height = r.height), i || (i = e);
                            var o = e.width === i.width && e.height === i.height;
                            this.bind(t), n.bindFramebuffer(n.READ_FRAMEBUFFER, h.framebuffer), n.blitFramebuffer(e.x, e.y, e.width, e.height, i.x, i.y, i.width, i.height, n.COLOR_BUFFER_BIT, o ? n.NEAREST : n.LINEAR)
                        }
                    }
                }
                disposeFramebuffer(t, e) {
                    var i = t.glFramebuffers[this.CONTEXT_UID],
                        r = this.gl;
                    if (i) {
                        delete t.glFramebuffers[this.CONTEXT_UID];
                        var s = this.managedFramebuffers.indexOf(t);
                        s >= 0 && this.managedFramebuffers.splice(s, 1), t.disposeRunner.remove(this), e || (r.deleteFramebuffer(i.framebuffer), i.stencil && r.deleteRenderbuffer(i.stencil))
                    }
                }
                disposeAll(t) {
                    var e = this.managedFramebuffers;
                    this.managedFramebuffers = [];
                    for (var i = 0; i < e.length; i++) this.disposeFramebuffer(e[i], t)
                }
                forceStencil() {
                    var t = this.current;
                    if (t) {
                        var e = t.glFramebuffers[this.CONTEXT_UID];
                        if (e && !e.stencil) {
                            t.enableStencil();
                            var i = t.width,
                                r = t.height,
                                s = this.gl,
                                n = s.createRenderbuffer();
                            s.bindRenderbuffer(s.RENDERBUFFER, n), s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, i, r), e.stencil = n, s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, n)
                        }
                    }
                }
                reset() {
                    this.current = this.unknownFramebuffer, this.viewport = new se
                }
            }
            class Ii {
                constructor(t) {
                    this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0
                }
            }
            var Ci = {
                5126: 4,
                5123: 2,
                5121: 1
            };
            class Mi extends $e {
                constructor(t) {
                    super(t), this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {}, this.managedBuffers = {}
                }
                contextChange() {
                    this.disposeAll(!0);
                    var t = this.gl = this.renderer.gl,
                        e = this.renderer.context;
                    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== e.webGLVersion) {
                        var i = this.renderer.context.extensions.vertexArrayObject;
                        j.PREFER_ENV === M.WEBGL_LEGACY && (i = null), i ? (t.createVertexArray = () => i.createVertexArrayOES(), t.bindVertexArray = t => i.bindVertexArrayOES(t), t.deleteVertexArray = t => i.deleteVertexArrayOES(t)) : (this.hasVao = !1, t.createVertexArray = () => null, t.bindVertexArray = () => null, t.deleteVertexArray = () => null)
                    }
                    if (2 !== e.webGLVersion) {
                        var r = t.getExtension("ANGLE_instanced_arrays");
                        r ? (t.vertexAttribDivisor = (t, e) => r.vertexAttribDivisorANGLE(t, e), t.drawElementsInstanced = (t, e, i, s, n) => r.drawElementsInstancedANGLE(t, e, i, s, n), t.drawArraysInstanced = (t, e, i, s) => r.drawArraysInstancedANGLE(t, e, i, s)) : this.hasInstance = !1
                    }
                    this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex
                }
                bind(t, e) {
                    e = e || this.renderer.shader.shader;
                    var {
                        gl: i
                    } = this, r = t.glVertexArrayObjects[this.CONTEXT_UID], s = !1;
                    r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}, s = !0);
                    var n = r[e.program.id] || this.initGeometryVao(t, e.program, s);
                    this._activeGeometry = t, this._activeVao !== n && (this._activeVao = n, this.hasVao ? i.bindVertexArray(n) : this.activateVao(t, e.program)), this.updateBuffers()
                }
                reset() {
                    this.unbind()
                }
                updateBuffers() {
                    for (var t = this._activeGeometry, {
                            gl: e
                        } = this, i = 0; i < t.buffers.length; i++) {
                        var r = t.buffers[i],
                            s = r._glBuffers[this.CONTEXT_UID];
                        if (r._updateID !== s.updateID) {
                            s.updateID = r._updateID;
                            var n = r.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                            if (e.bindBuffer(n, s.buffer), this._boundBuffer = s, s.byteLength >= r.data.byteLength) e.bufferSubData(n, 0, r.data);
                            else {
                                var a = r.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                                s.byteLength = r.data.byteLength, e.bufferData(n, r.data, a)
                            }
                        }
                    }
                }
                checkCompatibility(t, e) {
                    var i = t.attributes,
                        r = e.attributeData;
                    for (var s in r)
                        if (!i[s]) throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`)
                }
                getSignature(t, e) {
                    var i = t.attributes,
                        r = e.attributeData,
                        s = ["g", t.id];
                    for (var n in i) r[n] && s.push(n);
                    return s.join("-")
                }
                initGeometryVao(t, e, i = !0) {
                    this.checkCompatibility(t, e);
                    var r = this.gl,
                        s = this.CONTEXT_UID,
                        n = this.getSignature(t, e),
                        a = t.glVertexArrayObjects[this.CONTEXT_UID],
                        h = a[n];
                    if (h) return a[e.id] = h, h;
                    var o = t.buffers,
                        l = t.attributes,
                        u = {},
                        d = {};
                    for (var c in o) u[c] = 0, d[c] = 0;
                    for (var f in l) !l[f].size && e.attributeData[f] ? l[f].size = e.attributeData[f].size : l[f].size, u[l[f].buffer] += l[f].size * Ci[l[f].type];
                    for (var p in l) {
                        var m = l[p],
                            g = m.size;
                        void 0 === m.stride && (u[m.buffer] === g * Ci[m.type] ? m.stride = 0 : m.stride = u[m.buffer]), void 0 === m.start && (m.start = d[m.buffer], d[m.buffer] += g * Ci[m.type])
                    }
                    h = r.createVertexArray(), r.bindVertexArray(h);
                    for (var v = 0; v < o.length; v++) {
                        var _ = o[v];
                        _._glBuffers[s] || (_._glBuffers[s] = new Ii(r.createBuffer()), this.managedBuffers[_.id] = _, _.disposeRunner.add(this)), i && _._glBuffers[s].refCount++
                    }
                    return this.activateVao(t, e), this._activeVao = h, a[e.id] = h, a[n] = h, h
                }
                disposeBuffer(t, e) {
                    if (this.managedBuffers[t.id]) {
                        delete this.managedBuffers[t.id];
                        var i = t._glBuffers[this.CONTEXT_UID],
                            r = this.gl;
                        t.disposeRunner.remove(this), i && (e || r.deleteBuffer(i.buffer), delete t._glBuffers[this.CONTEXT_UID])
                    }
                }
                disposeGeometry(t, e) {
                    if (this.managedGeometries[t.id]) {
                        delete this.managedGeometries[t.id];
                        var i = t.glVertexArrayObjects[this.CONTEXT_UID],
                            r = this.gl,
                            s = t.buffers;
                        if (t.disposeRunner.remove(this), i) {
                            for (var n = 0; n < s.length; n++) {
                                var a = s[n]._glBuffers[this.CONTEXT_UID];
                                a.refCount--, 0 !== a.refCount || e || this.disposeBuffer(s[n], e)
                            }
                            if (!e)
                                for (var h in i)
                                    if ("g" === h[0]) {
                                        var o = i[h];
                                        this._activeVao === o && this.unbind(), r.deleteVertexArray(o)
                                    } delete t.glVertexArrayObjects[this.CONTEXT_UID]
                        }
                    }
                }
                disposeAll(t) {
                    for (var e = Object.keys(this.managedGeometries), i = 0; i < e.length; i++) this.disposeGeometry(this.managedGeometries[e[i]], t);
                    e = Object.keys(this.managedBuffers);
                    for (var r = 0; r < e.length; r++) this.disposeBuffer(this.managedBuffers[e[r]], t)
                }
                activateVao(t, e) {
                    var i = this.gl,
                        r = this.CONTEXT_UID,
                        s = t.buffers,
                        n = t.attributes;
                    t.indexBuffer && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.indexBuffer._glBuffers[r].buffer);
                    var a = null;
                    for (var h in n) {
                        var o = n[h],
                            l = s[o.buffer]._glBuffers[r];
                        if (e.attributeData[h]) {
                            a !== l && (i.bindBuffer(i.ARRAY_BUFFER, l.buffer), a = l);
                            var u = e.attributeData[h].location;
                            if (i.enableVertexAttribArray(u), i.vertexAttribPointer(u, o.size, o.type || i.FLOAT, o.normalized, o.stride, o.start), o.instance) {
                                if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                                i.vertexAttribDivisor(u, 1)
                            }
                        }
                    }
                }
                draw(t, e, i, r) {
                    var {
                        gl: s
                    } = this, n = this._activeGeometry;
                    if (n.indexBuffer) {
                        var a = n.indexBuffer.data.BYTES_PER_ELEMENT,
                            h = 2 === a ? s.UNSIGNED_SHORT : s.UNSIGNED_INT;
                        (2 === a || 4 === a && this.canUseUInt32ElementIndex) && (n.instanced ? s.drawElementsInstanced(t, e || n.indexBuffer.data.length, h, (i || 0) * a, r || 1) : s.drawElements(t, e || n.indexBuffer.data.length, h, (i || 0) * a))
                    } else n.instanced ? s.drawArraysInstanced(t, i, e || n.getSize(), r || 1) : s.drawArrays(t, i, e || n.getSize());
                    return this
                }
                unbind() {
                    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
                }
            }
            class Di {
                constructor(t = null) {
                    this.type = V.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._target = null
                }
                reset() {
                    this.pooled && (this.maskObject = null, this.type = V.NONE, this.autoDetect = !0), this._target = null
                }
                copyCountersOrReset(t) {
                    t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
                }
            }

            function Pi(t, e, i) {
                var r = t.createShader(e);
                return t.shaderSource(r, i), t.compileShader(r), r
            }

            function Ri(t, e, i, r) {
                var s = Pi(t, t.VERTEX_SHADER, e),
                    n = Pi(t, t.FRAGMENT_SHADER, i),
                    a = t.createProgram();
                if (t.attachShader(a, s), t.attachShader(a, n), r)
                    for (var h in r) t.bindAttribLocation(a, r[h], h);
                return t.linkProgram(a), t.getProgramParameter(a, t.LINK_STATUS) || (t.getShaderParameter(s, t.COMPILE_STATUS) || t.getShaderInfoLog(s), t.getShaderParameter(n, t.COMPILE_STATUS) || t.getShaderInfoLog(n), t.getProgramParameter(a, t.VALIDATE_STATUS), t.getError(), "" !== t.getProgramInfoLog(a) && t.getProgramInfoLog(a), t.deleteProgram(a), a = null), t.deleteShader(s), t.deleteShader(n), a
            }

            function Oi(t) {
                for (var e = new Array(t), i = 0; i < e.length; i++) e[i] = !1;
                return e
            }

            function Li(t, e) {
                switch (t) {
                    case "float":
                    case "int":
                    case "sampler2D":
                    case "sampler2DArray":
                        return 0;
                    case "vec2":
                        return new Float32Array(2 * e);
                    case "vec3":
                        return new Float32Array(3 * e);
                    case "vec4":
                        return new Float32Array(4 * e);
                    case "ivec2":
                        return new Int32Array(2 * e);
                    case "ivec3":
                        return new Int32Array(3 * e);
                    case "ivec4":
                        return new Int32Array(4 * e);
                    case "bool":
                        return !1;
                    case "bvec2":
                        return Oi(2 * e);
                    case "bvec3":
                        return Oi(3 * e);
                    case "bvec4":
                        return Oi(4 * e);
                    case "mat2":
                        return new Float32Array([1, 0, 0, 1]);
                    case "mat3":
                        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                    case "mat4":
                        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
                return null
            }
            var Ni, Bi = {},
                Fi = Bi;

            function Ui() {
                if (Fi === Bi || Fi && Fi.isContextLost()) {
                    var t, e = Kt.createElement("canvas");
                    t || ((t = e.getContext("webgl", {})) ? t.getExtension("WEBGL_draw_buffers") : t = null), Fi = t
                }
                return Fi
            }

            function ki(t, e, i) {
                if ("precision" !== t.substring(0, 9)) {
                    var r = e;
                    return e === z.HIGH && i !== z.HIGH && (r = z.MEDIUM), `precision ${r} float;\n${t}`
                }
                return i !== z.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
            }
            var Gi = {
                float: 1,
                vec2: 2,
                vec3: 3,
                vec4: 4,
                int: 1,
                ivec2: 2,
                ivec3: 3,
                ivec4: 4,
                bool: 1,
                bvec2: 2,
                bvec3: 3,
                bvec4: 4,
                mat2: 4,
                mat3: 9,
                mat4: 16,
                sampler2D: 1
            };

            function Xi(t) {
                return Gi[t]
            }
            var Hi = null,
                zi = {
                    FLOAT: "float",
                    FLOAT_VEC2: "vec2",
                    FLOAT_VEC3: "vec3",
                    FLOAT_VEC4: "vec4",
                    INT: "int",
                    INT_VEC2: "ivec2",
                    INT_VEC3: "ivec3",
                    INT_VEC4: "ivec4",
                    BOOL: "bool",
                    BOOL_VEC2: "bvec2",
                    BOOL_VEC3: "bvec3",
                    BOOL_VEC4: "bvec4",
                    FLOAT_MAT2: "mat2",
                    FLOAT_MAT3: "mat3",
                    FLOAT_MAT4: "mat4",
                    SAMPLER_2D: "sampler2D",
                    INT_SAMPLER_2D: "sampler2D",
                    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
                    SAMPLER_CUBE: "samplerCube",
                    INT_SAMPLER_CUBE: "samplerCube",
                    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
                    SAMPLER_2D_ARRAY: "sampler2DArray",
                    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
                    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
                };

            function Vi(t, e) {
                if (!Hi) {
                    var i = Object.keys(zi);
                    Hi = {};
                    for (var r = 0; r < i.length; ++r) {
                        var s = i[r];
                        Hi[t[s]] = zi[s]
                    }
                }
                return Hi[e]
            }
            var Yi = [{
                    test: t => "float" === t.type && 1 === t.size,
                    code: t => `\n            if(uv["${t}"] !== ud["${t}"].value)\n            {\n                ud["${t}"].value = uv["${t}"]\n                gl.uniform1f(ud["${t}"].location, uv["${t}"])\n            }\n            `
                }, {
                    test: t => ("sampler2D" === t.type || "samplerCube" === t.type || "sampler2DArray" === t.type) && 1 === t.size && !t.isArray,
                    code: t => `t = syncData.textureCount++;\n\n            renderer.texture.bind(uv["${t}"], t);\n\n            if(ud["${t}"].value !== t)\n            {\n                ud["${t}"].value = t;\n                gl.uniform1i(ud["${t}"].location, t);\n; // eslint-disable-line max-len\n            }`
                }, {
                    test: (t, e) => "mat3" === t.type && 1 === t.size && void 0 !== e.a,
                    code: t => `\n            gl.uniformMatrix3fv(ud["${t}"].location, false, uv["${t}"].toArray(true));\n            `
                }, {
                    test: (t, e) => "vec2" === t.type && 1 === t.size && void 0 !== e.x,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["${t}"].location, v.x, v.y);\n                }`
                }, {
                    test: t => "vec2" === t.type && 1 === t.size,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["${t}"].location, v[0], v[1]);\n                }\n            `
                }, {
                    test: (t, e) => "vec4" === t.type && 1 === t.size && void 0 !== e.width,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["${t}"].location, v.x, v.y, v.width, v.height)\n                }`
                }, {
                    test: t => "vec4" === t.type && 1 === t.size,
                    code: t => `\n                cv = ud["${t}"].value;\n                v = uv["${t}"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["${t}"].location, v[0], v[1], v[2], v[3])\n                }`
                }],
                ji = {
                    float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
                    vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
                    vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
                    vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
                    int: "gl.uniform1i(location, v)",
                    ivec2: "gl.uniform2i(location, v[0], v[1])",
                    ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
                    ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
                    bool: "gl.uniform1i(location, v)",
                    bvec2: "gl.uniform2i(location, v[0], v[1])",
                    bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
                    bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
                    mat2: "gl.uniformMatrix2fv(location, false, v)",
                    mat3: "gl.uniformMatrix3fv(location, false, v)",
                    mat4: "gl.uniformMatrix4fv(location, false, v)",
                    sampler2D: "gl.uniform1i(location, v)",
                    samplerCube: "gl.uniform1i(location, v)",
                    sampler2DArray: "gl.uniform1i(location, v)"
                },
                Wi = {
                    float: "gl.uniform1fv(location, v)",
                    vec2: "gl.uniform2fv(location, v)",
                    vec3: "gl.uniform3fv(location, v)",
                    vec4: "gl.uniform4fv(location, v)",
                    mat4: "gl.uniformMatrix4fv(location, false, v)",
                    mat3: "gl.uniformMatrix3fv(location, false, v)",
                    mat2: "gl.uniformMatrix2fv(location, false, v)",
                    int: "gl.uniform1iv(location, v)",
                    ivec2: "gl.uniform2iv(location, v)",
                    ivec3: "gl.uniform3iv(location, v)",
                    ivec4: "gl.uniform4iv(location, v)",
                    bool: "gl.uniform1iv(location, v)",
                    bvec2: "gl.uniform2iv(location, v)",
                    bvec3: "gl.uniform3iv(location, v)",
                    bvec4: "gl.uniform4iv(location, v)",
                    sampler2D: "gl.uniform1iv(location, v)",
                    samplerCube: "gl.uniform1iv(location, v)",
                    sampler2DArray: "gl.uniform1iv(location, v)"
                };
            var $i, qi = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

            function Zi(t) {
                for (var e = "", i = 0; i < t; ++i) i > 0 && (e += "\nelse "), i < t - 1 && (e += `if(test == ${i}.0){}`);
                return e
            }

            function Ki(t, e) {
                if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
                for (var i = e.createShader(e.FRAGMENT_SHADER);;) {
                    var r = qi.replace(/%forloop%/gi, Zi(t));
                    if (e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS)) break;
                    t = t / 2 | 0
                }
                return t
            }
            var Ji = 0,
                Qi = {};
            class tr {
                constructor(t, e, i = "pixi-shader") {
                    this.id = Ji++, this.vertexSrc = t || tr.defaultVertexSrc, this.fragmentSrc = e || tr.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (i = i.replace(/\s+/g, "-"), Qi[i] ? (Qi[i]++, i += `-${Qi[i]}`) : Qi[i] = 1, this.vertexSrc = `#define SHADER_NAME ${i}\n${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${i}\n${this.fragmentSrc}`, this.vertexSrc = ki(this.vertexSrc, j.PRECISION_VERTEX, z.HIGH), this.fragmentSrc = ki(this.fragmentSrc, j.PRECISION_FRAGMENT, function() {
                        if (!Ni) {
                            Ni = z.MEDIUM;
                            var t = Ui();
                            if (t && t.getShaderPrecisionFormat) {
                                var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                                Ni = e.precision ? z.HIGH : z.MEDIUM
                            }
                        }
                        return Ni
                    }())), this.extractData(this.vertexSrc, this.fragmentSrc), this.glPrograms = {}, this.syncUniforms = null
                }
                extractData(t, e) {
                    var i = Ui();
                    if (i) {
                        var r = Ri(i, t, e);
                        this.attributeData = this.getAttributeData(r, i), this.uniformData = this.getUniformData(r, i), i.deleteProgram(r)
                    } else this.uniformData = {}, this.attributeData = {}
                }
                getAttributeData(t, e) {
                    for (var i = {}, r = [], s = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), n = 0; n < s; n++) {
                        var a = e.getActiveAttrib(t, n),
                            h = Vi(e, a.type),
                            o = {
                                type: h,
                                name: a.name,
                                size: Xi(h),
                                location: 0
                            };
                        i[a.name] = o, r.push(o)
                    }
                    r.sort(((t, e) => t.name > e.name ? 1 : -1));
                    for (var l = 0; l < r.length; l++) r[l].location = l;
                    return i
                }
                getUniformData(t, e) {
                    for (var i = {}, r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), s = 0; s < r; s++) {
                        var n = e.getActiveUniform(t, s),
                            a = n.name.replace(/\[.*?\]$/, ""),
                            h = n.name.match(/\[.*?\]$/),
                            o = Vi(e, n.type);
                        i[a] = {
                            type: o,
                            size: n.size,
                            isArray: h,
                            value: Li(o, n.size)
                        }
                    }
                    return i
                }
                static get defaultVertexSrc() {
                    return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
                }
                static get defaultFragmentSrc() {
                    return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
                }
                static from(t, e, i) {
                    var r = t + e,
                        s = zt[r];
                    return s || (zt[r] = s = new tr(t, e, i)), s
                }
            }
            class er {
                constructor(t, e) {
                    for (var i in this.program = t, this.uniformGroup = e ? e instanceof vi ? e : new vi(e) : new vi({}), t.uniformData) this.uniformGroup.uniforms[i] instanceof Array && (this.uniformGroup.uniforms[i] = new Float32Array(this.uniformGroup.uniforms[i]))
                }
                checkUniformExists(t, e) {
                    if (e.uniforms[t]) return !0;
                    for (var i in e.uniforms) {
                        var r = e.uniforms[i];
                        if (r.group && this.checkUniformExists(t, r)) return !0
                    }
                    return !1
                }
                destroy() {
                    this.uniformGroup = null
                }
                get uniforms() {
                    return this.uniformGroup.uniforms
                }
                static from(t, e, i) {
                    var r = tr.from(t, e);
                    return new er(r, i)
                }
            }
            class ir {
                constructor() {
                    this.data = 0, this.blendMode = R.NORMAL, this.polygonOffset = 0, this.blend = !0
                }
                get blend() {
                    return !!(1 & this.data)
                }
                set blend(t) {
                    !!(1 & this.data) !== t && (this.data ^= 1)
                }
                get offsets() {
                    return !!(2 & this.data)
                }
                set offsets(t) {
                    !!(2 & this.data) !== t && (this.data ^= 2)
                }
                get culling() {
                    return !!(4 & this.data)
                }
                set culling(t) {
                    !!(4 & this.data) !== t && (this.data ^= 4)
                }
                get depthTest() {
                    return !!(8 & this.data)
                }
                set depthTest(t) {
                    !!(8 & this.data) !== t && (this.data ^= 8)
                }
                get clockwiseFrontFace() {
                    return !!(16 & this.data)
                }
                set clockwiseFrontFace(t) {
                    !!(16 & this.data) !== t && (this.data ^= 16)
                }
                get blendMode() {
                    return this._blendMode
                }
                set blendMode(t) {
                    this.blend = t !== R.NONE, this._blendMode = t
                }
                get polygonOffset() {
                    return this._polygonOffset
                }
                set polygonOffset(t) {
                    this.offsets = !!t, this._polygonOffset = t
                }
                static for2d() {
                    var t = new ir;
                    return t.depthTest = !1, t.blend = !0, t
                }
            }
            class rr extends er {
                constructor(t, e, i) {
                    super(tr.from(t || rr.defaultVertexSrc, e || rr.defaultFragmentSrc), i), this.padding = 0, this.resolution = j.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0, this.legacy = !!this.program.attributeData.aTextureCoord, this.state = new ir
                }
                apply(t, e, i, r, s) {
                    t.applyFilter(this, e, i, r)
                }
                get blendMode() {
                    return this.state.blendMode
                }
                set blendMode(t) {
                    this.state.blendMode = t
                }
                static get defaultVertexSrc() {
                    return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
                }
                static get defaultFragmentSrc() {
                    return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
                }
            }
            var sr = new de;
            class nr {
                constructor(t, e) {
                    this._texture = t, this.mapCoord = new de, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1
                }
                get texture() {
                    return this._texture
                }
                set texture(t) {
                    this._texture = t, this._textureID = -1
                }
                multiplyUvs(t, e) {
                    void 0 === e && (e = t);
                    for (var i = this.mapCoord, r = 0; r < t.length; r += 2) {
                        var s = t[r],
                            n = t[r + 1];
                        e[r] = s * i.a + n * i.c + i.tx, e[r + 1] = s * i.b + n * i.d + i.ty
                    }
                    return e
                }
                update(t) {
                    var e = this._texture;
                    if (!e || !e.valid) return !1;
                    if (!t && this._textureID === e._updateID) return !1;
                    this._textureID = e._updateID, this._updateID++;
                    var i = e._uvs;
                    this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
                    var r = e.orig,
                        s = e.trim;
                    s && (sr.set(r.width / s.width, 0, 0, r.height / s.height, -s.x / s.width, -s.y / s.height), this.mapCoord.append(sr));
                    var n = e.baseTexture,
                        a = this.uClampFrame,
                        h = this.clampMargin / n.resolution,
                        o = this.clampOffset;
                    return a[0] = (e._frame.x + h + o) / n.width, a[1] = (e._frame.y + h + o) / n.height, a[2] = (e._frame.x + e._frame.width - h + o) / n.width, a[3] = (e._frame.y + e._frame.height - h + o) / n.height, this.uClampOffset[0] = o / n.realWidth, this.uClampOffset[1] = o / n.realHeight, this.isSimple = e._frame.width === n.width && e._frame.height === n.height && 0 === e.rotate, !0
                }
            }
            class ar extends rr {
                constructor(t) {
                    var e = new de;
                    super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n"), t.renderable = !1, this.maskSprite = t, this.maskMatrix = e
                }
                apply(t, e, i, r) {
                    var s = this.maskSprite,
                        n = s._texture;
                    n.valid && (n.uvMatrix || (n.uvMatrix = new nr(n, 0)), n.uvMatrix.update(), this.uniforms.npmAlpha = n.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = n, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, s).prepend(n.uvMatrix.mapCoord), this.uniforms.alpha = s.worldAlpha, this.uniforms.maskClamp = n.uvMatrix.uClampFrame, t.applyFilter(this, e, i, r))
                }
            }
            class hr extends $e {
                constructor(t) {
                    super(t), this.enableScissor = !1, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
                }
                setMaskStack(t) {
                    this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t)
                }
                push(t, e) {
                    var i = e;
                    if (!i.isMaskData) {
                        var r = this.maskDataPool.pop() || new Di;
                        r.pooled = !0, r.maskObject = e, i = r
                    }
                    switch (i.autoDetect && this.detect(i), i.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), i._target = t, i.type) {
                        case V.SCISSOR:
                            this.maskStack.push(i), this.renderer.scissor.push(i);
                            break;
                        case V.STENCIL:
                            this.maskStack.push(i), this.renderer.stencil.push(i);
                            break;
                        case V.SPRITE:
                            i.copyCountersOrReset(null), this.pushSpriteMask(i), this.maskStack.push(i)
                    }
                }
                pop(t) {
                    var e = this.maskStack.pop();
                    if (e && e._target === t) {
                        switch (e.type) {
                            case V.SCISSOR:
                                this.renderer.scissor.pop();
                                break;
                            case V.STENCIL:
                                this.renderer.stencil.pop(e.maskObject);
                                break;
                            case V.SPRITE:
                                this.popSpriteMask()
                        }
                        e.reset(), e.pooled && this.maskDataPool.push(e)
                    }
                }
                detect(t) {
                    var e = t.maskObject;
                    if (e.isSprite) t.type = V.SPRITE;
                    else if (t.type = V.STENCIL, this.enableScissor && e.isFastRect && e.isFastRect()) {
                        var i = e.worldTransform,
                            r = Math.atan2(i.b, i.a),
                            s = Math.atan2(i.d, i.c);
                        r = Math.round(r * (180 / Math.PI) * 100), s = ((s = Math.round(s * (180 / Math.PI) * 100) - r) % 18e3 + 18e3) % 18e3, 0 === (r = (r % 9e3 + 9e3) % 9e3) && 9e3 === s && (t.type = V.SCISSOR)
                    }
                }
                pushSpriteMask(t) {
                    var {
                        maskObject: e
                    } = t, i = t._target, r = this.alphaMaskPool[this.alphaMaskIndex];
                    r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new ar(e)]), r[0].resolution = this.renderer.resolution, r[0].maskSprite = e;
                    var s = i.filterArea;
                    i.filterArea = e.getBounds(!0), this.renderer.filter.push(i, r), i.filterArea = s, this.alphaMaskIndex++
                }
                popSpriteMask() {
                    this.renderer.filter.pop(), this.alphaMaskIndex--
                }
            }
            class or extends $e {
                constructor(t) {
                    super(t), this.maskStack = [], this.glConst = 0
                }
                getStackLength() {
                    return this.maskStack.length
                }
                setMaskStack(t) {
                    var {
                        gl: e
                    } = this.renderer, i = this.getStackLength();
                    this.maskStack = t;
                    var r = this.getStackLength();
                    r !== i && (0 === r ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()))
                }
                _useCurrent() {}
                destroy() {
                    super.destroy(), this.maskStack = null
                }
            }
            class lr extends or {
                constructor(t) {
                    super(t), this.glConst = Jt.SCISSOR_TEST
                }
                getStackLength() {
                    var t = this.maskStack[this.maskStack.length - 1];
                    return t ? t._scissorCounter : 0
                }
                push(t) {
                    var e = t.maskObject;
                    e.renderable = !0;
                    var i = t._scissorRect,
                        r = e.getBounds(!0),
                        {
                            gl: s
                        } = this.renderer;
                    e.renderable = !1, i ? r.fit(i) : s.enable(s.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = r, this._useCurrent()
                }
                pop() {
                    var {
                        gl: t
                    } = this.renderer;
                    this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST)
                }
                _useCurrent() {
                    var t = this.maskStack[this.maskStack.length - 1]._scissorRect,
                        e = this.renderer.renderTexture.current,
                        {
                            transform: i,
                            sourceFrame: r,
                            destinationFrame: s
                        } = this.renderer.projection,
                        n = e ? e.resolution : this.renderer.resolution,
                        a = (t.x - r.x) * n + s.x,
                        h = (t.y - r.y) * n + s.y,
                        o = t.width * n,
                        l = t.height * n;
                    i && (a += i.tx * n, h += i.ty * n), e || (h = this.renderer.height - l - h), this.renderer.gl.scissor(a, h, o, l)
                }
            }
            class ur extends or {
                constructor(t) {
                    super(t), this.glConst = Jt.STENCIL_TEST
                }
                getStackLength() {
                    var t = this.maskStack[this.maskStack.length - 1];
                    return t ? t._stencilCounter : 0
                }
                push(t) {
                    var e = t.maskObject,
                        {
                            gl: i
                        } = this.renderer,
                        r = t._stencilCounter;
                    0 === r && (this.renderer.framebuffer.forceStencil(), i.enable(i.STENCIL_TEST)), t._stencilCounter++, i.colorMask(!1, !1, !1, !1), i.stencilFunc(i.EQUAL, r, this._getBitwiseMask()), i.stencilOp(i.KEEP, i.KEEP, i.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent()
                }
                pop(t) {
                    var e = this.renderer.gl;
                    0 === this.getStackLength() ? (e.disable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.clearStencil(0)) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent())
                }
                _useCurrent() {
                    var t = this.renderer.gl;
                    t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.getStackLength(), this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
                }
                _getBitwiseMask() {
                    return (1 << this.getStackLength()) - 1
                }
            }
            class dr extends $e {
                constructor(t) {
                    super(t), this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new de, this.transform = null
                }
                update(t, e, i, r) {
                    this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, i, r), this.transform && this.projectionMatrix.append(this.transform);
                    var s = this.renderer;
                    s.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, s.globalUniforms.update(), s.shader.shader && s.shader.syncUniformGroup(s.shader.shader.uniforms.globals)
                }
                calculateProjection(t, e, i, r) {
                    var s = this.projectionMatrix,
                        n = r ? -1 : 1;
                    s.identity(), s.a = 1 / e.width * 2, s.d = n * (1 / e.height * 2), s.tx = -1 - e.x * s.a, s.ty = -n - e.y * s.d
                }
                setTransform(t) {}
            }
            var cr = new se,
                fr = new se,
                pr = new se;
            class mr extends $e {
                constructor(t) {
                    super(t), this.clearColor = t._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new se, this.destinationFrame = new se
                }
                bind(t = null, e, i) {
                    var r, s, n, a = this.renderer;
                    this.current = t, t ? (n = (r = t.baseTexture).resolution, e || (cr.width = t.frame.width, cr.height = t.frame.height, e = cr), i || (fr.x = t.frame.x, fr.y = t.frame.y, fr.width = e.width, fr.height = e.height, i = fr), s = r.framebuffer) : (n = a.resolution, e || (cr.width = a.screen.width, cr.height = a.screen.height, e = cr), i || ((i = cr).width = e.width, i.height = e.height)), pr.x = i.x * n, pr.y = i.y * n, pr.width = i.width * n, pr.height = i.height * n, this.renderer.framebuffer.bind(s, pr), this.renderer.projection.update(i, e, n, !s), t ? this.renderer.mask.setMaskStack(r.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(i)
                }
                clear(t, e) {
                    t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor, this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e)
                }
                resize() {
                    this.bind(null)
                }
                reset() {
                    this.bind(null)
                }
            }
            class gr {}
            class vr {
                constructor(t, e) {
                    this.program = t, this.uniformData = e, this.uniformGroups = {}
                }
                destroy() {
                    this.uniformData = null, this.uniformGroups = null, this.program = null
                }
            }
            var _r = 0,
                xr = {
                    textureCount: 0
                };
            class yr extends $e {
                constructor(t) {
                    super(t), this.destroyed = !1, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this.id = _r++
                }
                systemCheck() {
                    if (! function() {
                            if ("boolean" == typeof $i) return $i;
                            try {
                                var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                                $i = !0 === t({
                                    a: "b"
                                }, "a", "b")
                            } catch (t) {
                                $i = !1
                            }
                            return $i
                        }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
                }
                contextChange(t) {
                    this.gl = t, this.reset()
                }
                bind(t, e) {
                    t.uniforms.globals = this.renderer.globalUniforms;
                    var i = t.program,
                        r = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(t);
                    return this.shader = t, this.program !== i && (this.program = i, this.gl.useProgram(r.program)), e || (xr.textureCount = 0, this.syncUniformGroup(t.uniformGroup, xr)), r
                }
                setUniforms(t) {
                    var e = this.shader.program,
                        i = e.glPrograms[this.renderer.CONTEXT_UID];
                    e.syncUniforms(i.uniformData, t, this.renderer)
                }
                syncUniformGroup(t, e) {
                    var i = this.getglProgram();
                    t.static && t.dirtyId === i.uniformGroups[t.id] || (i.uniformGroups[t.id] = t.dirtyId, this.syncUniforms(t, i, e))
                }
                syncUniforms(t, e, i) {
                    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, i)
                }
                createSyncGroups(t) {
                    var e = this.getSignature(t, this.shader.program.uniformData);
                    return this.cache[e] || (this.cache[e] = function(t, e) {
                        var i = ["\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    "];
                        for (var r in t.uniforms) {
                            var s = e[r];
                            if (s) {
                                for (var n = t.uniforms[r], a = !1, h = 0; h < Yi.length; h++)
                                    if (Yi[h].test(s, n)) {
                                        i.push(Yi[h].code(r, n)), a = !0;
                                        break
                                    } if (!a) {
                                    var o = (1 === s.size ? ji : Wi)[s.type].replace("location", `ud["${r}"].location`);
                                    i.push(`\n            cv = ud["${r}"].value;\n            v = uv["${r}"];\n            ${o};`)
                                }
                            } else t.uniforms[r].group && i.push(`\n                    renderer.shader.syncUniformGroup(uv["${r}"], syncData);\n                `)
                        }
                        return new Function("ud", "uv", "renderer", "syncData", i.join("\n"))
                    }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
                }
                getSignature(t, e) {
                    var i = t.uniforms,
                        r = [];
                    for (var s in i) r.push(s), e[s] && r.push(e[s].type);
                    return r.join("-")
                }
                getglProgram() {
                    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
                }
                generateShader(t) {
                    var e = this.gl,
                        i = t.program,
                        r = {};
                    for (var s in i.attributeData) r[s] = i.attributeData[s].location;
                    var n = Ri(e, i.vertexSrc, i.fragmentSrc, r),
                        a = {};
                    for (var h in i.uniformData) {
                        var o = i.uniformData[h];
                        a[h] = {
                            location: e.getUniformLocation(n, h),
                            value: Li(o.type, o.size)
                        }
                    }
                    var l = new vr(n, a);
                    return i.glPrograms[this.renderer.CONTEXT_UID] = l, l
                }
                reset() {
                    this.program = null, this.shader = null
                }
                destroy() {
                    this.destroyed = !0
                }
            }
            class Tr extends $e {
                constructor(t) {
                    super(t), this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = R.NONE, this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, this.checks = [], this.defaultState = new ir, this.defaultState.blend = !0
                }
                contextChange(t) {
                    this.gl = t, this.blendModes = function(t, e = []) {
                        return e[R.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.ADD] = [t.ONE, t.ONE], e[R.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.NONE] = [0, 0], e[R.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e[R.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[R.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[R.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[R.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[R.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[R.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[R.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[R.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[R.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[R.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e
                    }(t), this.set(this.defaultState), this.reset()
                }
                set(t) {
                    if (t = t || this.defaultState, this.stateId !== t.data) {
                        for (var e = this.stateId ^ t.data, i = 0; e;) 1 & e && this.map[i].call(this, !!(t.data & 1 << i)), e >>= 1, i++;
                        this.stateId = t.data
                    }
                    for (var r = 0; r < this.checks.length; r++) this.checks[r](this, t)
                }
                forceState(t) {
                    t = t || this.defaultState;
                    for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
                    for (var i = 0; i < this.checks.length; i++) this.checks[i](this, t);
                    this.stateId = t.data
                }
                setBlend(t) {
                    this.updateCheck(Tr.checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND)
                }
                setOffset(t) {
                    this.updateCheck(Tr.checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
                }
                setDepthTest(t) {
                    this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
                }
                setCullFace(t) {
                    this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
                }
                setFrontFace(t) {
                    this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
                }
                setBlendMode(t) {
                    if (t !== this.blendMode) {
                        this.blendMode = t;
                        var e = this.blendModes[t],
                            i = this.gl;
                        2 === e.length ? i.blendFunc(e[0], e[1]) : i.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, i.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD))
                    }
                }
                setPolygonOffset(t, e) {
                    this.gl.polygonOffset(t, e)
                }
                reset() {
                    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
                }
                updateCheck(t, e) {
                    var i = this.checks.indexOf(t);
                    e && -1 === i ? this.checks.push(t) : e || -1 === i || this.checks.splice(i, 1)
                }
                static checkBlendMode(t, e) {
                    t.setBlendMode(e.blendMode)
                }
                static checkPolygonOffset(t, e) {
                    t.setPolygonOffset(1, e.polygonOffset)
                }
            }
            class br extends $e {
                constructor(t) {
                    super(t), this.count = 0, this.checkCount = 0, this.maxIdle = j.GC_MAX_IDLE, this.checkCountMax = j.GC_MAX_CHECK_COUNT, this.mode = j.GC_MODE
                }
                postrender() {
                    this.renderer.renderingToScreen && (this.count++, this.mode !== H.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
                }
                run() {
                    for (var t = this.renderer.texture, e = t.managedTextures, i = !1, r = 0; r < e.length; r++) {
                        var s = e[r];
                        !s.framebuffer && this.count - s.touched > this.maxIdle && (t.destroyTexture(s, !0), e[r] = null, i = !0)
                    }
                    if (i) {
                        for (var n = 0, a = 0; a < e.length; a++) null !== e[a] && (e[n++] = e[a]);
                        e.length = n
                    }
                }
                unload(t) {
                    var e = this.renderer.texture,
                        i = t._texture;
                    i && !i.framebuffer && e.destroyTexture(i);
                    for (var r = t.children.length - 1; r >= 0; r--) this.unload(t.children[r])
                }
            }
            class Er {
                constructor(t) {
                    this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = 6408, this.internalFormat = 5121
                }
            }
            class wr extends $e {
                constructor(t) {
                    super(t), this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new je
                }
                contextChange() {
                    var t = this.gl = this.renderer.gl;
                    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion;
                    var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                    this.boundTextures.length = e;
                    for (var i = 0; i < e; i++) this.boundTextures[i] = null;
                    this.emptyTextures = {};
                    var r = new Er(t.createTexture());
                    t.bindTexture(t.TEXTURE_2D, r.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = r, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Er(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
                    for (var s = 0; s < 6; s++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
                    for (var n = 0; n < this.boundTextures.length; n++) this.bind(null, n)
                }
                bind(t, e = 0) {
                    var {
                        gl: i
                    } = this;
                    if (t) {
                        if ((t = t.castToBaseTexture()).parentTextureArray) return;
                        if (t.valid) {
                            t.touched = this.renderer.textureGC.count;
                            var r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                            this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), i.bindTexture(t.target, r.texture)), r.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), this.updateTexture(t)), this.boundTextures[e] = t
                        }
                    } else this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), i.bindTexture(i.TEXTURE_2D, this.emptyTextures[i.TEXTURE_2D].texture), this.boundTextures[e] = null
                }
                reset() {
                    this._unknownBoundTextures = !0, this.currentLocation = -1;
                    for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
                }
                unbind(t) {
                    var {
                        gl: e,
                        boundTextures: i
                    } = this;
                    if (this._unknownBoundTextures) {
                        this._unknownBoundTextures = !1;
                        for (var r = 0; r < i.length; r++) i[r] === this.unknownTexture && this.bind(null, r)
                    }
                    for (var s = 0; s < i.length; s++) i[s] === t && (this.currentLocation !== s && (e.activeTexture(e.TEXTURE0 + s), this.currentLocation = s), e.bindTexture(t.target, this.emptyTextures[t.target].texture), i[s] = null)
                }
                initTexture(t) {
                    var e = new Er(this.gl.createTexture());
                    return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
                }
                initTextureType(t, e) {
                    if (e.internalFormat = t.format, e.type = t.type, 2 === this.webGLVersion) {
                        var i = this.renderer.gl;
                        t.type === i.FLOAT && t.format === i.RGBA && (e.internalFormat = i.RGBA32F), t.type === B.HALF_FLOAT && (e.type = i.HALF_FLOAT), e.type === i.HALF_FLOAT && t.format === i.RGBA && (e.internalFormat = i.RGBA16F)
                    }
                }
                updateTexture(t) {
                    var e = t._glTextures[this.CONTEXT_UID];
                    if (e) {
                        var i = this.renderer;
                        if (this.initTextureType(t, e), t.resource && t.resource.upload(i, t, e));
                        else {
                            var r = t.realWidth,
                                s = t.realHeight,
                                n = i.gl;
                            (e.width !== r || e.height !== s || e.dirtyId < 0) && (e.width = r, e.height = s, n.texImage2D(t.target, 0, e.internalFormat, r, s, 0, t.format, e.type, null))
                        }
                        t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId
                    }
                }
                destroyTexture(t, e) {
                    var {
                        gl: i
                    } = this;
                    if ((t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(t), i.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
                        var r = this.managedTextures.indexOf(t); - 1 !== r && kt(this.managedTextures, r, 1)
                    }
                }
                updateTextureStyle(t) {
                    var e = t._glTextures[this.CONTEXT_UID];
                    e && (t.mipmap !== k.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = t.mipmap >= 1 : e.mipmap = !1, 2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = U.CLAMP, t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId)
                }
                setStyle(t, e) {
                    var i = this.gl;
                    if (e.mipmap && i.generateMipmap(t.target), i.texParameteri(t.target, i.TEXTURE_WRAP_S, e.wrapMode), i.texParameteri(t.target, i.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
                        i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode === F.LINEAR ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST);
                        var r = this.renderer.context.extensions.anisotropicFiltering;
                        if (r && t.anisotropicLevel > 0 && t.scaleMode === F.LINEAR) {
                            var s = Math.min(t.anisotropicLevel, i.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                            i.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, s)
                        }
                    } else i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode === F.LINEAR ? i.LINEAR : i.NEAREST);
                    i.texParameteri(t.target, i.TEXTURE_MAG_FILTER, t.scaleMode === F.LINEAR ? i.LINEAR : i.NEAREST)
                }
            }
            var Sr = {
                    FilterSystem: xi,
                    BatchSystem: Ti,
                    ContextSystem: Ei,
                    FramebufferSystem: Ai,
                    GeometrySystem: Mi,
                    MaskSystem: hr,
                    ScissorSystem: lr,
                    StencilSystem: ur,
                    ProjectionSystem: dr,
                    RenderTextureSystem: mr,
                    ShaderSystem: yr,
                    StateSystem: Tr,
                    TextureGCSystem: br,
                    TextureSystem: wr
                },
                Ar = new de;
            class Ir extends et {
                constructor(t = D.UNKNOWN, e) {
                    super(), (e = Object.assign({}, j.RENDER_OPTIONS, e)).roundPixels && (j.ROUND_PIXELS = e.roundPixels), this.options = e, this.type = t, this.screen = new se(0, 0, e.width, e.height), this.view = e.view || Kt.createElement("canvas"), this.resolution = e.resolution || j.RESOLUTION, this.transparent = e.transparent, this.autoDensity = e.autoDensity || e.autoResize || !1, this.preserveDrawingBuffer = e.preserveDrawingBuffer, this.clearBeforeRender = e.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = e.backgroundColor || this._backgroundColor, this._lastObjectRendered = null, this.plugins = {}
                }
                initPlugins(t) {
                    for (var e in t) this.plugins[e] = new t[e](this)
                }
                get width() {
                    return this.view.width
                }
                get height() {
                    return this.view.height
                }
                resize(t, e) {
                    this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, this.view.height = e * this.resolution, this.autoDensity && (this.view.style.width = `${t}px`, this.view.style.height = `${e}px`), this.emit("resize", t, e)
                }
                generateTexture(t, e, i, r) {
                    0 === (r = r || t.getLocalBounds(null, !0)).width && (r.width = 1), 0 === r.height && (r.height = 1);
                    var s = ri.create({
                        width: 0 | r.width,
                        height: 0 | r.height,
                        scaleMode: e,
                        resolution: i
                    });
                    return Ar.tx = -r.x, Ar.ty = -r.y, this.render(t, s, !1, Ar, !!t.parent), s
                }
                destroy(t) {
                    for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
                    t && this.view.parentNode && this.view.parentNode.removeChild(this.view);
                    var i = this;
                    i.plugins = null, i.type = D.UNKNOWN, i.view = null, i.screen = null, i._tempDisplayObjectParent = null, i.options = null, this._backgroundColorRgba = null, this._backgroundColorString = null, this._lastObjectRendered = null
                }
                get backgroundColor() {
                    return this._backgroundColor
                }
                set backgroundColor(t) {
                    this._backgroundColor = t, this._backgroundColorString = Mt(t), Ct(t, this._backgroundColorRgba)
                }
            }
            class Cr extends Ir {
                constructor(t) {
                    super(D.WEBGL, t), t = this.options, this.gl = null, this.CONTEXT_UID = 0, this.runners = {
                        destroy: new Fe("destroy"),
                        contextChange: new Fe("contextChange"),
                        reset: new Fe("reset"),
                        update: new Fe("update"),
                        postrender: new Fe("postrender"),
                        prerender: new Fe("prerender"),
                        resize: new Fe("resize")
                    }, this.globalUniforms = new vi({
                        projectionMatrix: new de
                    }, !0), this.addSystem(hr, "mask").addSystem(Ei, "context").addSystem(Tr, "state").addSystem(yr, "shader").addSystem(wr, "texture").addSystem(Mi, "geometry").addSystem(Ai, "framebuffer").addSystem(lr, "scissor").addSystem(ur, "stencil").addSystem(dr, "projection").addSystem(br, "textureGC").addSystem(xi, "filter").addSystem(mr, "renderTexture").addSystem(Ti, "batch"), this.initPlugins(Cr.__plugins), t.context ? this.context.initFromContext(t.context) : this.context.initFromOptions({
                        alpha: !!this.transparent,
                        antialias: t.antialias,
                        premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                        stencil: !0,
                        preserveDrawingBuffer: t.preserveDrawingBuffer,
                        powerPreference: this.options.powerPreference
                    }), this.renderingToScreen = !0, this.resize(this.options.width, this.options.height)
                }
                static create(t) {
                    return new Cr(t)
                }
                addSystem(t, e) {
                    e || (e = t.name);
                    var i = new t(this);
                    if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
                    for (var r in this[e] = i, this.runners) this.runners[r].add(i);
                    return this
                }
                render(t, e, i, r, s) {
                    if (this.renderingToScreen = !e, this.runners.prerender.emit(), this.emit("prerender"), this.projection.transform = r, !this.context.isLost) {
                        if (e || (this._lastObjectRendered = t), !s) {
                            var n = t.enableTempParent();
                            t.updateTransform(), t.disableTempParent(n)
                        }
                        this.renderTexture.bind(e), this.batch.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), e && e.baseTexture.update(), this.runners.postrender.emit(), this.projection.transform = null, this.emit("postrender")
                    }
                }
                resize(t, e) {
                    super.resize(t, e), this.runners.resize.emit(t, e)
                }
                reset() {
                    return this.runners.reset.emit(), this
                }
                clear() {
                    this.renderTexture.bind(), this.renderTexture.clear()
                }
                destroy(t) {
                    for (var e in this.runners.destroy.emit(), this.runners) this.runners[e].destroy();
                    super.destroy(t), this.gl = null
                }
                static registerPlugin(t, e) {
                    Cr.__plugins = Cr.__plugins || {}, Cr.__plugins[t] = e
                }
            }

            function Mr(t) {
                return Cr.create(t)
            }
            var Dr = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                Pr = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
            class Rr {
                constructor() {
                    this.texArray = null, this.blend = 0, this.type = O.TRIANGLES, this.start = 0, this.size = 0, this.data = null
                }
            }
            class Or {
                constructor() {
                    this.elements = [], this.ids = [], this.count = 0
                }
                clear() {
                    for (var t = 0; t < this.count; t++) this.elements[t] = null;
                    this.count = 0
                }
            }
            class Lr {
                constructor(t) {
                    this.rawBinaryData = new ArrayBuffer(t), this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
                }
                get int8View() {
                    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
                }
                get uint8View() {
                    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
                }
                get int16View() {
                    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
                }
                get uint16View() {
                    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
                }
                get int32View() {
                    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
                }
                view(t) {
                    return this[`${t}View`]
                }
                destroy() {
                    this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
                }
                static sizeOf(t) {
                    switch (t) {
                        case "int8":
                        case "uint8":
                            return 1;
                        case "int16":
                        case "uint16":
                            return 2;
                        case "int32":
                        case "uint32":
                        case "float32":
                            return 4;
                        default:
                            throw new Error(`${t} isn't a valid view type`)
                    }
                }
            }
            class Nr extends yi {
                constructor(t) {
                    super(t), this.shaderGenerator = null, this.geometryClass = null, this.vertexSize = null, this.state = ir.for2d(), this.size = 4 * j.SPRITE_BATCH_SIZE, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.MAX_TEXTURES = 1, this.renderer.on("prerender", this.onPrerender, this), t.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = []
                }
                contextChange() {
                    var t = this.renderer.gl;
                    j.PREFER_ENV === M.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), j.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = Ki(this.MAX_TEXTURES, t)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                    for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass;
                    this.initFlushBuffers()
                }
                initFlushBuffers() {
                    for (var {
                            _drawCallPool: t,
                            _textureArrayPool: e
                        } = Nr, i = this.size / 4, r = Math.floor(i / this.MAX_TEXTURES) + 1; t.length < i;) t.push(new Rr);
                    for (; e.length < r;) e.push(new Or);
                    for (var s = 0; s < this.MAX_TEXTURES; s++) this._tempBoundTextures[s] = null
                }
                onPrerender() {
                    this._flushId = 0
                }
                render(t) {
                    t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t)
                }
                buildTexturesAndDrawCalls() {
                    var {
                        _bufferedTextures: t,
                        MAX_TEXTURES: e
                    } = this, i = Nr._textureArrayPool, r = this.renderer.batch, s = this._tempBoundTextures, n = this.renderer.textureGC.count, a = ++je._globalBatch, h = 0, o = i[0], l = 0;
                    r.copyBoundTextures(s, e);
                    for (var u = 0; u < this._bufferSize; ++u) {
                        var d = t[u];
                        t[u] = null, d._batchEnabled !== a && (o.count >= e && (r.boundArray(o, s, a, e), this.buildDrawCalls(o, l, u), l = u, o = i[++h], ++a), d._batchEnabled = a, d.touched = n, o.elements[o.count++] = d)
                    }
                    o.count > 0 && (r.boundArray(o, s, a, e), this.buildDrawCalls(o, l, this._bufferSize), ++h, ++a);
                    for (var c = 0; c < s.length; c++) s[c] = null;
                    je._globalBatch = a
                }
                buildDrawCalls(t, e, i) {
                    var {
                        _bufferedElements: r,
                        _attributeBuffer: s,
                        _indexBuffer: n,
                        vertexSize: a
                    } = this, h = Nr._drawCallPool, o = this._dcIndex, l = this._aIndex, u = this._iIndex, d = h[o];
                    d.start = this._iIndex, d.texArray = t;
                    for (var c = e; c < i; ++c) {
                        var f = r[c],
                            p = f._texture.baseTexture,
                            m = Pt[p.alphaMode ? 1 : 0][f.blendMode];
                        r[c] = null, e < c && d.blend !== m && (d.size = u - d.start, e = c, (d = h[++o]).texArray = t, d.start = u), this.packInterleavedGeometry(f, s, n, l, u), l += f.vertexData.length / 2 * a, u += f.indices.length, d.blend = m
                    }
                    e < i && (d.size = u - d.start, ++o), this._dcIndex = o, this._aIndex = l, this._iIndex = u
                }
                bindAndClearTexArray(t) {
                    for (var e = this.renderer.texture, i = 0; i < t.count; i++) e.bind(t.elements[i], t.ids[i]), t.elements[i] = null;
                    t.count = 0
                }
                updateGeometry() {
                    var {
                        _packedGeometries: t,
                        _attributeBuffer: e,
                        _indexBuffer: i
                    } = this;
                    j.CAN_UPLOAD_SAME_BUFFER ? (t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(i), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, t[this._flushId] = new this.geometryClass), t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(i), this.renderer.geometry.bind(t[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
                }
                drawBatches() {
                    for (var t = this._dcIndex, {
                            gl: e,
                            state: i
                        } = this.renderer, r = Nr._drawCallPool, s = null, n = 0; n < t; n++) {
                        var {
                            texArray: a,
                            type: h,
                            size: o,
                            start: l,
                            blend: u
                        } = r[n];
                        s !== a && (s = a, this.bindAndClearTexArray(a)), this.state.blendMode = u, i.set(this.state), e.drawElements(h, o, e.UNSIGNED_SHORT, 2 * l)
                    }
                }
                flush() {
                    0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
                }
                start() {
                    this.renderer.state.set(this.state), this.renderer.shader.bind(this._shader), j.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
                }
                stop() {
                    this.flush()
                }
                destroy() {
                    for (var t = 0; t < this._packedGeometryPoolSize; t++) this._packedGeometries[t] && this._packedGeometries[t].destroy();
                    this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy()
                }
                getAttributeBuffer(t) {
                    var e = Bt(Math.ceil(t / 8)),
                        i = Ut(e),
                        r = 8 * e;
                    this._aBuffers.length <= i && (this._iBuffers.length = i + 1);
                    var s = this._aBuffers[r];
                    return s || (this._aBuffers[r] = s = new Lr(r * this.vertexSize * 4)), s
                }
                getIndexBuffer(t) {
                    var e = Bt(Math.ceil(t / 12)),
                        i = Ut(e),
                        r = 12 * e;
                    this._iBuffers.length <= i && (this._iBuffers.length = i + 1);
                    var s = this._iBuffers[i];
                    return s || (this._iBuffers[i] = s = new Uint16Array(r)), s
                }
                packInterleavedGeometry(t, e, i, r, s) {
                    for (var {
                            uint32View: n,
                            float32View: a
                        } = e, h = r / this.vertexSize, o = t.uvs, l = t.indices, u = t.vertexData, d = t._texture.baseTexture._batchLocation, c = Math.min(t.worldAlpha, 1), f = c < 1 && t._texture.baseTexture.alphaMode ? Rt(t._tintRGB, c) : t._tintRGB + (255 * c << 24), p = 0; p < u.length; p += 2) a[r++] = u[p], a[r++] = u[p + 1], a[r++] = o[p], a[r++] = o[p + 1], n[r++] = f, a[r++] = d;
                    for (var m = 0; m < l.length; m++) i[s++] = h + l[m]
                }
            }
            Nr._drawCallPool = [], Nr._textureArrayPool = [];
            class Br {
                constructor(t, e) {
                    if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
                    if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".')
                }
                generateShader(t) {
                    if (!this.programCache[t]) {
                        for (var e = new Int32Array(t), i = 0; i < t; i++) e[i] = i;
                        this.defaultGroupCache[t] = vi.from({
                            uSamplers: e
                        }, !0);
                        var r = this.fragTemplate;
                        r = (r = r.replace(/%count%/gi, `${t}`)).replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new tr(this.vertexSrc, r)
                    }
                    var s = {
                        tint: new Float32Array([1, 1, 1, 1]),
                        translationMatrix: new de,
                        default: this.defaultGroupCache[t]
                    };
                    return new er(this.programCache[t], s)
                }
                generateSampleSrc(t) {
                    var e = "";
                    e += "\n", e += "\n";
                    for (var i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += `if(vTextureId < ${i}.5)`), e += "\n{", e += `\n\tcolor = texture2D(uSamplers[${i}], vTextureCoord);`, e += "\n}";
                    return e += "\n", e += "\n"
                }
            }
            class Fr extends fi {
                constructor(t = !1) {
                    super(), this._buffer = new hi(null, t, !1), this._indexBuffer = new hi(null, t, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, B.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, B.FLOAT).addAttribute("aColor", this._buffer, 4, !0, B.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, B.FLOAT).addIndex(this._indexBuffer)
                }
            }
            var Ur = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
                kr = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n";
            class Gr {
                static create(t) {
                    var {
                        vertex: e,
                        fragment: i,
                        vertexSize: r,
                        geometryClass: s
                    } = Object.assign({
                        vertex: Ur,
                        fragment: kr,
                        geometryClass: Fr,
                        vertexSize: 6
                    }, t);
                    return class extends Nr {
                        constructor(t) {
                            super(t), this.shaderGenerator = new Br(e, i), this.geometryClass = s, this.vertexSize = r
                        }
                    }
                }
                static get defaultVertexSrc() {
                    return Ur
                }
                static get defaultFragmentTemplate() {
                    return kr
                }
            }
            var Xr = Gr.create(),
                Hr = {
                    AbstractBatchRenderer: Nr,
                    AbstractRenderer: Ir,
                    Attribute: ni,
                    BaseRenderTexture: Ke,
                    BaseTexture: je,
                    BatchDrawCall: Rr,
                    BatchGeometry: Fr,
                    BatchPluginFactory: Gr,
                    BatchRenderer: Xr,
                    BatchShaderGenerator: Br,
                    BatchTextureArray: Or,
                    Buffer: hi,
                    Filter: rr,
                    FilterState: _i,
                    Framebuffer: Ze,
                    GLFramebuffer: wi,
                    GLProgram: vr,
                    GLTexture: Er,
                    Geometry: fi,
                    IGLUniformData: gr,
                    MaskData: Di,
                    ObjectRenderer: yi,
                    Program: tr,
                    Quad: pi,
                    QuadUv: mi,
                    RenderTexture: ri,
                    RenderTexturePool: si,
                    Renderer: Cr,
                    Shader: er,
                    SpriteMaskFilter: ar,
                    State: ir,
                    System: $e,
                    Texture: ti,
                    TextureMatrix: nr,
                    TextureUvs: Je,
                    UniformGroup: vi,
                    ViewableBuffer: Lr,
                    autoDetectRenderer: Mr,
                    checkMaxIfStatementsInShader: Ki,
                    defaultFilterVertex: Pr,
                    defaultVertex: Dr,
                    resources: We,
                    systems: Sr,
                    uniformParsers: Yi
                },
                zr = function() {
                    function t(t, e, i) {
                        void 0 === e && (e = !1), this.next = null, this.prev = null, this.owner = null, this.fn = t, this.once = e, this.thisArg = i
                    }
                    return t.prototype.detach = function() {
                        return null !== this.owner && (this.owner.detach(this), !0)
                    }, t.prototype.dispose = function() {
                        this.detach()
                    }, t
                }(),
                Vr = function() {
                    function t() {
                        this._head = null, this._tail = null, this._filter = null
                    }
                    return t.prototype.handlers = function() {
                        for (var t = this._head, e = []; t;) e.push(t), t = t.next;
                        return e
                    }, t.prototype.hasAny = function() {
                        return !!this._head
                    }, t.prototype.has = function(t) {
                        return t.owner === this
                    }, t.prototype.dispatch = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var i = this._head;
                        if (!i) return !1;
                        if (this._filter && !this._filter.apply(this, t)) return !1;
                        for (; i;) i.once && this.detach(i), i.fn.apply(i.thisArg, t), i = i.next;
                        return !0
                    }, t.prototype.add = function(t, e) {
                        return void 0 === e && (e = null), this._addMiniSignalBinding(new zr(t, !1, e))
                    }, t.prototype.once = function(t, e) {
                        return void 0 === e && (e = null), this._addMiniSignalBinding(new zr(t, !0, e))
                    }, t.prototype.detach = function(t) {
                        return t.owner !== this || (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t === this._head ? (this._head = t.next, null === t.next && (this._tail = null)) : t === this._tail && (this._tail = t.prev, this._tail && (this._tail.next = null)), t.owner = null), this
                    }, t.prototype.detachAll = function() {
                        var t = this._head;
                        if (!t) return this;
                        for (this._head = null, this._tail = null; t;) t.owner = null, t = t.next;
                        return this
                    }, t.prototype.filter = function(t) {
                        this._filter = t
                    }, t.prototype.proxy = function() {
                        for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                        for (var r = function() {
                                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                                return t.dispatch.apply(t, e)
                            }, s = 0; s < e.length; ++s) e[s].add(r);
                        return this
                    }, t.prototype._addMiniSignalBinding = function(t) {
                        return this._head ? (this._tail && (this._tail.next = t), t.prev = this._tail, this._tail = t) : (this._head = t, this._tail = t), t.owner = this, t
                    }, t
                }(),
                Yr = function(t) {
                    this.config = t, this.onError = new Vr, this.onComplete = new Vr, this.onProgress = new Vr
                },
                jr = function(t, e) {
                    return jr = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    }, jr(t, e)
                };

            function Wr(t, e) {
                function i() {
                    this.constructor = t
                }
                jr(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }
            var $r, qr = {
                    0: "Unknown",
                    1: "Buffer",
                    2: "Blob",
                    3: "Json",
                    4: "Xml",
                    5: "Image",
                    6: "Audio",
                    7: "Video",
                    8: "Text",
                    Unknown: 0,
                    Buffer: 1,
                    Blob: 2,
                    Json: 3,
                    Xml: 4,
                    Image: 5,
                    Audio: 6,
                    Video: 7,
                    Text: 8
                },
                Zr = {
                    0: "NotStarted",
                    1: "Loading",
                    2: "Complete",
                    NotStarted: 0,
                    Loading: 1,
                    Complete: 2
                },
                Kr = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._boundOnLoad = e._onLoad.bind(e), e._boundOnError = e._onError.bind(e), e._boundOnTimeout = e._onTimeout.bind(e), e._element = e._createElement(), e._elementTimer = 0, e
                    }
                    return Wr(e, t), e.prototype.load = function() {
                        var t = this.config;
                        t.crossOrigin && (this._element.crossOrigin = t.crossOrigin), t.bindingScreen && (this._element.bindingScreen = t.bindingScreen), this._element.src = t.url, this._element.addEventListener("load", this._boundOnLoad, !1), this._element.addEventListener("error", this._boundOnError, !1), t.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, t.timeout))
                    }, e.prototype.abort = function() {
                        this._clearEvents(), this._element.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", this._error("Image load aborted by the user.")
                    }, e.prototype._createElement = function() {
                        return this.config.loadElement ? this.config.loadElement : l()
                    }, e.prototype._clearEvents = function() {
                        clearTimeout(this._elementTimer), this._element.removeEventListener("load", this._boundOnLoad, !1), this._element.removeEventListener("error", this._boundOnError, !1)
                    }, e.prototype._error = function(t) {
                        this._clearEvents(), this.onError.dispatch(t)
                    }, e.prototype._complete = function() {
                        this._clearEvents(), this.onComplete.dispatch(qr.Image, this._element)
                    }, e.prototype._onLoad = function() {
                        this._complete()
                    }, e.prototype._onError = function() {
                        this._error("Image failed to load.")
                    }, e.prototype._onTimeout = function() {
                        this._error("Image load timed out.")
                    }, e
                }(Yr);

            function Jr(t) {
                var e = "";
                if (0 === t.indexOf("data:")) {
                    var i = t.indexOf("/");
                    e = t.substring(i + 1, t.indexOf(";", i))
                } else {
                    var r = t.indexOf("?"),
                        s = t.indexOf("#"),
                        n = Math.min(r > -1 ? r : t.length, s > -1 ? s : t.length);
                    e = (t = t.substring(0, n)).substring(t.lastIndexOf(".") + 1)
                }
                return e.toLowerCase()
            }! function(t) {
                t.Default = "text", t.Buffer = "arraybuffer", t.Blob = "blob", t.Document = "document", t.Json = "json", t.Text = "text"
            }($r || ($r = {}));
            var Qr = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._xhrType = $r.Default, e
                    }
                    return Wr(e, t), e.prototype.load = function() {
                        var t = this,
                            e = this.config,
                            i = Jr(e.url);
                        "string" != typeof e.xhrType && (e.xhrType = this._determineXhrType(i)), this._xhrType = e.xhrType || $r.Default;
                        r({
                            data: "",
                            url: e.url,
                            timeout: e.timeout || 5e3,
                            success: e => {
                                var i = e.data;
                                e.statusCode, e.header;
                                if ("string" != typeof i && !(i instanceof ArrayBuffer)) try {
                                    i = JSON.stringify(i)
                                } catch (t) {}
                                t._onLoad(i)
                            },
                            fail: t => {
                                this._error(`_requestSkipCheckDomain error: ${t}`)
                            }
                        })
                    }, e.prototype.abort = function() {}, e.prototype._determineXhrType = function(t) {
                        return e._xhrTypeMap[t] || $r.Default
                    }, e.prototype._error = function(t) {
                        this.onError.dispatch(t)
                    }, e.prototype._complete = function(t, e) {
                        this.onComplete.dispatch(t, e)
                    }, e.prototype._onLoad = function(t) {
                        switch (this._xhrType) {
                            case $r.Json:
                                this._parseJson(t);
                                break;
                            case $r.Default:
                            case $r.Text:
                                this._complete(qr.Text, t)
                        }
                    }, e.prototype._parseJson = function(t) {
                        try {
                            var e = JSON.parse(t);
                            this._complete(qr.Json, e)
                        } catch (t) {
                            this._error(`Error trying to parse loaded json: ${t}`)
                        }
                    }, e.setExtensionXhrType = function(t, i) {
                        t && 0 === t.indexOf(".") && (t = t.substring(1)), t && (e._xhrTypeMap[t] = i)
                    }, e.ResponseType = $r, e._xhrTypeMap = {
                        xhtml: $r.Document,
                        html: $r.Document,
                        htm: $r.Document,
                        xml: $r.Document,
                        tmx: $r.Document,
                        svg: $r.Document,
                        tsx: $r.Document,
                        gif: $r.Blob,
                        png: $r.Blob,
                        bmp: $r.Blob,
                        jpg: $r.Blob,
                        jpeg: $r.Blob,
                        tif: $r.Blob,
                        tiff: $r.Blob,
                        webp: $r.Blob,
                        tga: $r.Blob,
                        json: $r.Json,
                        text: $r.Text,
                        txt: $r.Text,
                        ttf: $r.Buffer,
                        otf: $r.Buffer
                    }, e
                }(Yr),
                ts = function(t, e) {
                    e = e || {};
                    for (var i = {
                            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                            q: {
                                name: "queryKey",
                                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                            },
                            parser: {
                                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                            }
                        }, r = i.parser[e.strictMode ? "strict" : "loose"].exec(t), s = {}, n = 14; n--;) s[i.key[n]] = r[n] || "";
                    return s[i.q.name] = {}, s[i.key[12]].replace(i.q.parser, (function(t, e, r) {
                        e && (s[i.q.name][e] = r)
                    })), s
                };

            function es(t) {
                var e = t;
                return function() {
                    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                    if (null === e) throw new Error("Callback was already called.");
                    var r = e;
                    return e = null, r.apply(this, t)
                }
            }
            var is = function() {
                    function t(t, e) {
                        if (void 0 === e && (e = 1), this.worker = t, this.concurrency = e, this.workers = 0, this.buffer = 0, this.paused = !1, this._started = !1, this._tasks = [], this.onSaturated = new Vr, this.onUnsaturated = new Vr, this.onEmpty = new Vr, this.onDrain = new Vr, this.onError = new Vr, 0 === e) throw new Error("Concurrency must not be zero");
                        this.buffer = e / 4
                    }
                    return Object.defineProperty(t.prototype, "started", {
                        get() {
                            return this._started
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.reset = function() {
                        this.onDrain.detachAll(), this.workers = 0, this._started = !1, this._tasks = []
                    }, t.prototype.push = function(t, e) {
                        this._insert(t, !1, e)
                    }, t.prototype.unshift = function(t, e) {
                        this._insert(t, !0, e)
                    }, t.prototype.process = function() {
                        for (; !this.paused && this.workers < this.concurrency && this._tasks.length;) {
                            var t = this._tasks.shift();
                            0 === this._tasks.length && this.onEmpty.dispatch(), this.workers += 1, this.workers === this.concurrency && this.onSaturated.dispatch(), this.worker(t.data, es(this._next(t)))
                        }
                    }, t.prototype.length = function() {
                        return this._tasks.length
                    }, t.prototype.running = function() {
                        return this.workers
                    }, t.prototype.idle = function() {
                        return this._tasks.length + this.workers === 0
                    }, t.prototype.pause = function() {
                        !0 !== this.paused && (this.paused = !0)
                    }, t.prototype.resume = function() {
                        if (!1 !== this.paused) {
                            this.paused = !1;
                            for (var t = 1; t <= this.concurrency; t++) this.process()
                        }
                    }, t.prototype.getTask = function(t) {
                        return this._tasks[t]
                    }, t.prototype._insert = function(t, e, i) {
                        var r = this;
                        if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
                        if (this._started = !0, null == t && this.idle()) setTimeout((function() {
                            return r.onDrain.dispatch()
                        }), 1);
                        else {
                            var s = {
                                data: t,
                                callback: i
                            };
                            e ? this._tasks.unshift(s) : this._tasks.push(s), setTimeout((function() {
                                return r.process()
                            }), 1)
                        }
                    }, t.prototype._next = function(t) {
                        var e = this;
                        return function(i) {
                            for (var r = [], s = 1; s < arguments.length; s++) r[s - 1] = arguments[s];
                            e.workers -= 1, t.callback && t.callback.apply(t, function() {
                                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                                var r = Array(t),
                                    s = 0;
                                for (e = 0; e < i; e++)
                                    for (var n = arguments[e], a = 0, h = n.length; a < h; a++, s++) r[s] = n[a];
                                return r
                            }([i], r)), i && e.onError.dispatch(i, t.data), e.workers <= e.concurrency - e.buffer && e.onUnsaturated.dispatch(), e.idle() && e.onDrain.dispatch(), e.process()
                        }
                    }, t
                }(),
                rs = function() {
                    function t(e, i) {
                        if (this.children = [], this.onStart = new Vr, this.onProgress = new Vr, this.onComplete = new Vr, this.onAfterMiddleware = new Vr, this.data = null, this.type = qr.Unknown, this.error = "", this.progressChunk = 0, this._dequeue = function() {}, this._onCompleteBinding = null, this._state = Zr.NotStarted, this.name = e, this.metadata = i.metadata || {}, this.bindingScreen = i.bindingScreen, this.timeout = i.timeout || 0, "string" != typeof i.crossOrigin && (i.crossOrigin = this._determineCrossOrigin(i.url)), i.strategy && "function" != typeof i.strategy) this._strategy = i.strategy, this._strategy.config = i;
                        else {
                            var r = i.strategy;
                            r || (r = t._loadStrategyMap[Jr(i.url)]), r || (r = t._defaultLoadStrategy), this._strategy = new r(i)
                        }
                        this._strategy.onError.add(this._error, this), this._strategy.onComplete.add(this._complete, this), this._strategy.onProgress.add(this._progress, this)
                    }
                    return t.setDefaultLoadStrategy = function(e) {
                        t._defaultLoadStrategy = e
                    }, t.setLoadStrategy = function(e, i) {
                        e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t._loadStrategyMap[e] = i)
                    }, Object.defineProperty(t.prototype, "strategy", {
                        get() {
                            return this._strategy
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "url", {
                        get() {
                            return this._strategy.config.url
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isLoading", {
                        get() {
                            return this._state === Zr.Loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isComplete", {
                        get() {
                            return this._state === Zr.Complete
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.abort = function() {
                        this._strategy.abort()
                    }, t.prototype.load = function() {
                        this._state = Zr.Loading, this.onStart.dispatch(this), this._strategy.load()
                    }, t.prototype._error = function(t) {
                        this._state = Zr.Complete, this.error = t, this.onComplete.dispatch(this)
                    }, t.prototype._complete = function(t, e) {
                        this._state = Zr.Complete, this.type = t, this.data = e, this.onComplete.dispatch(this)
                    }, t.prototype._progress = function(t) {
                        this.onProgress.dispatch(this, t)
                    }, t.prototype._determineCrossOrigin = function(t, e) {
                        return "anonymous"
                    }, t._tempAnchor = null, t._defaultLoadStrategy = Qr, t._loadStrategyMap = {
                        gif: Kr,
                        png: Kr,
                        bmp: Kr,
                        jpg: Kr,
                        jpeg: Kr,
                        tif: Kr,
                        tiff: Kr,
                        webp: Kr,
                        tga: Kr,
                        svg: Kr,
                        "svg+xml": Kr
                    }, t
                }();

            function ss(t, e, i, r) {
                void 0 === r && (r = !1);
                var s = 0,
                    n = t.length;
                ! function a(h) {
                    h || s === n ? i && i(h) : r ? setTimeout((function() {
                        return e(t[s++], a)
                    }), 1) : e(t[s++], a)
                }()
            }
            var ns = /(#[\w-]+)?$/,
                as = function() {
                    function t(e, i) {
                        void 0 === e && (e = ""), void 0 === i && (i = 10), this.progress = 0, this.loading = !1, this.defaultQueryString = "", this.resources = {}, this.onError = new Vr, this.onLoad = new Vr, this.onStart = new Vr, this.onComplete = new Vr, this.onProgress = new Vr, this._baseUrl = "", this._urlResolvers = [], this._middleware = [], this._resourcesParsing = [], this._boundLoadResource = this._loadResource.bind(this), this.baseUrl = e, this._queue = new is(this._boundLoadResource, i), this._queue.pause(), this._middleware = t._defaultMiddleware.slice()
                    }
                    return Object.defineProperty(t.prototype, "baseUrl", {
                        get() {
                            return this._baseUrl
                        },
                        set(t) {
                            for (; t.length && "/" === t.charAt(t.length - 1);) t = t.slice(0, -1);
                            this._baseUrl = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.add = function(t, e) {
                        if (Array.isArray(t)) {
                            for (var i = 0; i < t.length; ++i) this.add(t[i]);
                            return this
                        }
                        var r = "",
                            s = "",
                            n = this._baseUrl,
                            a = {
                                url: ""
                            };
                        if ("object" == typeof t ? (r = t.url, s = t.name || t.url, n = t.baseUrl || n, a = t) : (s = t, r = "string" == typeof e ? e : s), !r) throw new Error("You must specify the `url` property.");
                        if (this.loading && !a.parentResource) throw new Error("Cannot add root resources while the loader is running.");
                        if (this.resources[s]) throw new Error(`Resource named "${s}" already exists.`);
                        r = this._prepareUrl(r, n), a.url = r;
                        var h = new rs(s, a);
                        if (this.resources[s] = h, "function" == typeof a.onComplete && h.onAfterMiddleware.once(a.onComplete), this.loading) {
                            var o = a.parentResource,
                                l = [];
                            for (i = 0; i < o.children.length; ++i) o.children[i].isComplete || l.push(o.children[i]);
                            var u = o.progressChunk * (l.length + 1) / (l.length + 2);
                            o.children.push(h), o.progressChunk = u;
                            for (i = 0; i < l.length; ++i) l[i].progressChunk = u;
                            h.progressChunk = u
                        }
                        return this._queue.push(h), this
                    }, t.prototype.use = function(e, i) {
                        return void 0 === i && (i = t.DefaultMiddlewarePriority), this._middleware.push({
                            fn: e,
                            priority: i
                        }), this._middleware.sort((function(t, e) {
                            return t.priority - e.priority
                        })), this
                    }, t.prototype.reset = function() {
                        for (var t in this.progress = 0, this.loading = !1, this._queue.reset(), this._queue.pause(), this.resources) {
                            var e = this.resources[t];
                            e && (e._onCompleteBinding && e._onCompleteBinding.detach(), e.isLoading && e.abort())
                        }
                        return this.resources = {}, this
                    }, t.prototype.load = function(t) {
                        if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                        if (this._queue.idle()) this._onStart(), this._onComplete();
                        else {
                            for (var e = 100 / this._queue.length(), i = 0; i < this._queue.length(); ++i) this._queue.getTask(i).data.progressChunk = e;
                            this._onStart(), this._queue.resume()
                        }
                        return this
                    }, Object.defineProperty(t.prototype, "concurrency", {
                        get() {
                            return this._queue.concurrency
                        },
                        set(t) {
                            this._queue.concurrency = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.addUrlResolver = function(t) {
                        return this._urlResolvers.push(t), this
                    }, t.prototype._prepareUrl = function(t, e) {
                        var i = ts(t, {
                            strictMode: !0
                        });
                        if (this._urlResolvers.forEach((function(e) {
                                t = e(t, i), i = ts(t, {
                                    strictMode: !0
                                })
                            })), i.protocol || 0 === t.indexOf("//") || (t = e.length && "/" !== t.charAt(0) ? `${e}/${t}` : e + t), this.defaultQueryString) {
                            var r = ns.exec(t);
                            if (r) {
                                var s = r[0]; - 1 !== (t = t.substr(0, t.length - s.length)).indexOf("?") ? t += `&${this.defaultQueryString}` : t += `?${this.defaultQueryString}`, t += s
                            }
                        }
                        return t
                    }, t.prototype._loadResource = function(t, e) {
                        t._dequeue = e, t._onCompleteBinding = t.onComplete.once(this._onLoad, this), t.load()
                    }, t.prototype._onStart = function() {
                        this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
                    }, t.prototype._onComplete = function() {
                        this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
                    }, t.prototype._onLoad = function(t) {
                        var e = this;
                        t._onCompleteBinding = null, this._resourcesParsing.push(t), t._dequeue(), ss(this._middleware, (function(i, r) {
                            i.fn.call(e, t, r)
                        }), (function() {
                            t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                        }), !0)
                    }, t.use = function(e, i) {
                        return void 0 === i && (i = t.DefaultMiddlewarePriority), t._defaultMiddleware.push({
                            fn: e,
                            priority: i
                        }), t._defaultMiddleware.sort((function(t, e) {
                            return t.priority - e.priority
                        })), t
                    }, t.DefaultMiddlewarePriority = 50, t._defaultMiddleware = [], t
                }();
            Object.defineProperties(as, {
                AbstractLoadStrategy: {
                    get: () => Yr
                },
                ImageLoadStrategy: {
                    get: () => Kr
                },
                XhrLoadStrategy: {
                    get: () => Qr
                },
                Resource: {
                    get: () => rs
                },
                ResourceType: {
                    get: () => qr
                },
                ResourceState: {
                    get: () => Zr
                },
                async: {
                    get: () => ({
                        AsyncQueue: is,
                        eachSeries: ss
                    })
                },
                getExtension: {
                    get: () => Jr
                }
            });
            var hs = rs,
                os = {
                    Unknown: 0,
                    Buffer: 1,
                    Blob: 2,
                    Json: 3,
                    Xml: 4,
                    Image: 5,
                    Audio: 6,
                    Video: 7,
                    Text: 8
                };
            class ls {
                static use(t, e) {
                    t.data && t.type === os.Image && (t.texture = ti.fromLoader(t.data, t.url, t.name)), e()
                }
            }
            class us extends as {
                constructor(t, e) {
                    super(t, e);
                    for (var i = 0; i < us._plugins.length; ++i) {
                        var r = us._plugins[i],
                            {
                                use: s
                            } = r;
                        s && this.use(s)
                    }
                    this._protected = !1
                }
                destroy() {
                    this._protected || this.reset()
                }
                static get shared() {
                    var t = us._shared;
                    return t || ((t = new us)._protected = !0, us._shared = t), t
                }
                static registerPlugin(t) {
                    return us._plugins.push(t), t.add && t.add(), us
                }
            }
            us._plugins = [], us.registerPlugin(ls);
            class ds {
                constructor(t, e, i = null) {
                    this._texture = t instanceof ti ? t : null, this.baseTexture = t instanceof je ? t : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = e;
                    var r = this.baseTexture.resource;
                    this.resolution = this._updateResolution(i || (r ? r.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
                }
                _updateResolution(t = null) {
                    var {
                        scale: e
                    } = this.data.meta, i = Wt(t, null);
                    return null === i && (i = void 0 !== e ? parseFloat(e) : 1), 1 !== i && this.baseTexture.setResolution(i), i
                }
                parse(t) {
                    this._batchIndex = 0, this._callback = t, this._frameKeys.length <= ds.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
                }
                _processFrames(t) {
                    for (var e = t, i = ds.BATCH_SIZE; e - t < i && e < this._frameKeys.length;) {
                        var r = this._frameKeys[e],
                            s = this._frames[r],
                            n = s.frame;
                        if (n) {
                            var a = null,
                                h = null,
                                o = !1 !== s.trimmed && s.sourceSize ? s.sourceSize : s.frame,
                                l = new se(0, 0, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution);
                            a = s.rotated ? new se(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.h) / this.resolution, Math.floor(n.w) / this.resolution) : new se(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution), !1 !== s.trimmed && s.spriteSourceSize && (h = new se(Math.floor(s.spriteSourceSize.x) / this.resolution, Math.floor(s.spriteSourceSize.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution)), this.textures[r] = new ti(this.baseTexture, a, l, h, s.rotated ? 2 : 0, s.anchor), ti.addToCache(this.textures[r], r)
                        }
                        e++
                    }
                }
                _processAnimations() {
                    var t = this.data.animations || {};
                    for (var e in t) {
                        this.animations[e] = [];
                        for (var i = 0; i < t[e].length; i++) {
                            var r = t[e][i];
                            this.animations[e].push(this.textures[r])
                        }
                    }
                }
                _parseComplete() {
                    var t = this._callback;
                    this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
                }
                _nextBatch() {
                    this._processFrames(this._batchIndex * ds.BATCH_SIZE), this._batchIndex++, setTimeout((() => {
                        this._batchIndex * ds.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete())
                    }), 0)
                }
                destroy(t = !1) {
                    var e;
                    for (var i in this.textures) this.textures[i].destroy();
                    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (null === (e = this._texture) || void 0 === e || e.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null
                }
            }
            ds.BATCH_SIZE = 1e3;
            var cs = 3;
            class fs {
                static use(t, e) {
                    var i = this,
                        r = `${t.name}_image`;
                    if (t.data && t.type === cs && t.data.frames && !i.resources[r]) {
                        var s = {
                            name: r,
                            url: fs.getResourcePath(t, i.baseUrl),
                            crossOrigin: "anonymous",
                            metadata: t.metadata.imageMetadata,
                            bindingScreen: t.bindingScreen,
                            parentResource: t,
                            timeout: t.timeout || 0,
                            onComplete: i => {
                                if (i.error) e(i.error);
                                else {
                                    var r = new ds(i.texture, t.data, t.url);
                                    r.parse((() => {
                                        t.spritesheet = r, t.textures = r.textures, e()
                                    }))
                                }
                            }
                        };
                        i.add(s)
                    } else e()
                }
                static getResourcePath(t, e) {
                    var i = t.url.replace(e, "");
                    return (i = i.slice(0, i.lastIndexOf("/") + 1)) + t.data.meta.image
                }
            }
            class ps {
                constructor(t, e) {
                    this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
                }
                update(t) {
                    if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
                        this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
                        var e = this.uvBuffer.data;
                        this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
                    }
                }
            }
            var ms = new le,
                gs = new he;
            class vs extends Me {
                constructor(t, e, i, r = O.TRIANGLES) {
                    super(), this.geometry = t, t.refCount++, this.shader = e, this.state = i || ir.for2d(), this.drawMode = r, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = 0, this._transformID = -1, this._roundPixels = j.ROUND_PIXELS, this.batchUvs = null
                }
                get uvBuffer() {
                    return this.geometry.buffers[1]
                }
                get verticesBuffer() {
                    return this.geometry.buffers[0]
                }
                set material(t) {
                    this.shader = t
                }
                get material() {
                    return this.shader
                }
                set blendMode(t) {
                    this.state.blendMode = t
                }
                get blendMode() {
                    return this.state.blendMode
                }
                set roundPixels(t) {
                    this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
                }
                get roundPixels() {
                    return this._roundPixels
                }
                get tint() {
                    return this.shader.tint
                }
                set tint(t) {
                    this.shader.tint = t
                }
                get texture() {
                    return this.shader.texture
                }
                set texture(t) {
                    this.shader.texture = t
                }
                _render(t) {
                    var e = this.geometry.buffers[0].data;
                    this.shader.batchable && this.drawMode === O.TRIANGLES && e.length < 2 * vs.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t)
                }
                _renderDefault(t) {
                    var e = this.shader;
                    e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.program.uniformData.translationMatrix && (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0)), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
                }
                _renderToBatch(t) {
                    var e = this.geometry;
                    this.shader.uvMatrix && (this.shader.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = this.shader._tintRGB, this._texture = this.shader.texture;
                    var i = this.material.pluginName;
                    t.batch.setObjectRenderer(t.plugins[i]), t.plugins[i].render(this)
                }
                calculateVertices() {
                    var t = this.geometry,
                        e = t.buffers[0].data;
                    if (t.vertexDirtyId !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                        this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
                        for (var i = this.transform.worldTransform, r = i.a, s = i.b, n = i.c, a = i.d, h = i.tx, o = i.ty, l = this.vertexData, u = 0; u < l.length / 2; u++) {
                            var d = e[2 * u],
                                c = e[2 * u + 1];
                            l[2 * u] = r * d + n * c + h, l[2 * u + 1] = s * d + a * c + o
                        }
                        if (this._roundPixels)
                            for (var f = j.RESOLUTION, p = 0; p < l.length; ++p) l[p] = Math.round((l[p] * f | 0) / f);
                        this.vertexDirty = t.vertexDirtyId
                    }
                }
                calculateUvs() {
                    var t = this.geometry.buffers[1];
                    this.shader.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new ps(t, this.shader.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
                }
                _calculateBounds() {
                    this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
                }
                containsPoint(t) {
                    if (!this.getBounds().contains(t.x, t.y)) return !1;
                    this.worldTransform.applyInverse(t, ms);
                    for (var e = this.geometry.getBuffer("aVertexPosition").data, i = gs.points, r = this.geometry.getIndex().data, s = r.length, n = 4 === this.drawMode ? 3 : 1, a = 0; a + 2 < s; a += n) {
                        var h = 2 * r[a],
                            o = 2 * r[a + 1],
                            l = 2 * r[a + 2];
                        if (i[0] = e[h], i[1] = e[h + 1], i[2] = e[o], i[3] = e[o + 1], i[4] = e[l], i[5] = e[l + 1], gs.contains(ms.x, ms.y)) return !0
                    }
                    return !1
                }
                destroy(t) {
                    super.destroy(t), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
                }
            }
            vs.BATCHABLE_SIZE = 100;
            class _s extends er {
                constructor(t, e) {
                    var i = {
                        uSampler: t,
                        alpha: 1,
                        uTextureMatrix: de.IDENTITY,
                        uColor: new Float32Array([1, 1, 1, 1])
                    };
                    (e = Object.assign({
                        tint: 16777215,
                        alpha: 1,
                        pluginName: "batch"
                    }, e)).uniforms && Object.assign(i, e.uniforms), super(e.program || tr.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"), i), this._colorDirty = !1, this.uvMatrix = new nr(t), this.batchable = void 0 === e.program, this.pluginName = e.pluginName, this.tint = e.tint, this.alpha = e.alpha
                }
                get texture() {
                    return this.uniforms.uSampler
                }
                set texture(t) {
                    this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t)
                }
                set alpha(t) {
                    t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
                }
                get alpha() {
                    return this._alpha
                }
                set tint(t) {
                    t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0)
                }
                get tint() {
                    return this._tint
                }
                update() {
                    if (this._colorDirty) {
                        this._colorDirty = !1;
                        var t = this.texture.baseTexture;
                        Ot(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode)
                    }
                    this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
                }
            }
            class xs extends fi {
                constructor(t, e, i) {
                    super();
                    var r = new hi(t),
                        s = new hi(e, !0),
                        n = new hi(i, !0, !0);
                    this.addAttribute("aVertexPosition", r, 2, !1, B.FLOAT).addAttribute("aTextureCoord", s, 2, !1, B.FLOAT).addIndex(n), this._updateId = -1
                }
                get vertexDirtyId() {
                    return this.buffers[0]._updateID
                }
            }
            var ys, Ts = new le,
                bs = new Uint16Array([0, 1, 2, 0, 2, 3]);
            class Es extends Me {
                constructor(t) {
                    super(), this._anchor = new ue(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = R.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = t || ti.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = bs, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = j.ROUND_PIXELS
                }
                _onTextureUpdate() {
                    this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = Gt(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Gt(this.scale.y) * this._height / this._texture.orig.height)
                }
                _onAnchorUpdate() {
                    this._transformID = -1, this._transformTrimmedID = -1
                }
                calculateVertices() {
                    var t = this._texture;
                    if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
                        this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
                        var e = this.transform.worldTransform,
                            i = e.a,
                            r = e.b,
                            s = e.c,
                            n = e.d,
                            a = e.tx,
                            h = e.ty,
                            o = this.vertexData,
                            l = t.trim,
                            u = t.orig,
                            d = this._anchor,
                            c = 0,
                            f = 0,
                            p = 0,
                            m = 0;
                        if (l ? (c = (f = l.x - d._x * u.width) + l.width, p = (m = l.y - d._y * u.height) + l.height) : (c = (f = -d._x * u.width) + u.width, p = (m = -d._y * u.height) + u.height), o[0] = i * f + s * m + a, o[1] = n * m + r * f + h, o[2] = i * c + s * m + a, o[3] = n * m + r * c + h, o[4] = i * c + s * p + a, o[5] = n * p + r * c + h, o[6] = i * f + s * p + a, o[7] = n * p + r * f + h, this._roundPixels)
                            for (var g = j.RESOLUTION, v = 0; v < o.length; ++v) o[v] = Math.round((o[v] * g | 0) / g)
                    }
                }
                calculateTrimmedVertices() {
                    if (this.vertexTrimmedData) {
                        if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
                    } else this.vertexTrimmedData = new Float32Array(8);
                    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                    var t = this._texture,
                        e = this.vertexTrimmedData,
                        i = t.orig,
                        r = this._anchor,
                        s = this.transform.worldTransform,
                        n = s.a,
                        a = s.b,
                        h = s.c,
                        o = s.d,
                        l = s.tx,
                        u = s.ty,
                        d = -r._x * i.width,
                        c = d + i.width,
                        f = -r._y * i.height,
                        p = f + i.height;
                    e[0] = n * d + h * f + l, e[1] = o * f + a * d + u, e[2] = n * c + h * f + l, e[3] = o * f + a * c + u, e[4] = n * c + h * p + l, e[5] = o * p + a * c + u, e[6] = n * d + h * p + l, e[7] = o * p + a * d + u
                }
                _render(t) {
                    this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
                }
                _calculateBounds() {
                    var t = this._texture.trim,
                        e = this._texture.orig;
                    !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
                }
                getLocalBounds(t) {
                    return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new se), t = this._localBoundsRect), this._bounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
                }
                containsPoint(t) {
                    this.worldTransform.applyInverse(t, Ts);
                    var e = this._texture.orig.width,
                        i = this._texture.orig.height,
                        r = -e * this.anchor.x,
                        s = 0;
                    return Ts.x >= r && Ts.x < r + e && (s = -i * this.anchor.y, Ts.y >= s && Ts.y < s + i)
                }
                destroy(t) {
                    if (super.destroy(t), this._texture && this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof t ? t : t && t.texture) {
                        var e = "boolean" == typeof t ? t : t && t.baseTexture;
                        this._texture && this._texture.destroy(!!e)
                    }
                    this._texture = null
                }
                static from(t, e) {
                    var i = t instanceof ti ? t : ti.from(t, e);
                    return new Es(i)
                }
                set roundPixels(t) {
                    this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
                }
                get roundPixels() {
                    return this._roundPixels
                }
                get width() {
                    return Math.round(Math.abs(this.scale.x) * this._texture.orig.width * 100) / 100
                }
                set width(t) {
                    t = Math.round(100 * t) / 100;
                    var e = Gt(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t
                }
                get height() {
                    return Math.round(Math.abs(this.scale.y) * this._texture.orig.height * 100) / 100
                }
                set height(t) {
                    t = Math.round(100 * t) / 100;
                    var e = Gt(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t
                }
                get anchor() {
                    return this._anchor
                }
                set anchor(t) {
                    this._anchor.copyFrom(t)
                }
                get tint() {
                    return this._tint
                }
                set tint(t) {
                    this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                }
                get texture() {
                    return this._texture
                }
                set texture(t) {
                    this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || ti.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                }
            }! function(t) {
                t[t.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", t[t.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL"
            }(ys || (ys = {}));
            var ws = {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAlpha: 1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "black",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: ys.LINEAR_VERTICAL,
                    fillGradientStops: [],
                    fontFamily: "Arial",
                    fontSize: 26,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "normal",
                    letterSpacing: 0,
                    lineHeight: 0,
                    lineJoin: "miter",
                    miterLimit: 10,
                    padding: 0,
                    stroke: "black",
                    strokeThickness: 0,
                    textBaseline: "middle",
                    trim: !1,
                    whiteSpace: "pre",
                    wordWrap: !1,
                    wordWrapWidth: 100,
                    leading: 0
                },
                Ss = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
                As = [];
            class Is {
                constructor(t) {
                    this.styleID = 0, this.reset(), Ds(this, t, t)
                }
                clone() {
                    var t = {};
                    return Ds(t, this, ws), new Is(t)
                }
                reset() {
                    Ds(this, ws, ws)
                }
                get align() {
                    return this._align
                }
                set align(t) {
                    this._align !== t && (this._align = t, this.styleID++)
                }
                get breakWords() {
                    return this._breakWords
                }
                set breakWords(t) {
                    this._breakWords !== t && (this._breakWords = t, this.styleID++)
                }
                get dropShadow() {
                    return this._dropShadow
                }
                set dropShadow(t) {
                    this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
                }
                get dropShadowAlpha() {
                    return this._dropShadowAlpha
                }
                set dropShadowAlpha(t) {
                    this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
                }
                get dropShadowAngle() {
                    return this._dropShadowAngle
                }
                set dropShadowAngle(t) {
                    this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
                }
                get dropShadowBlur() {
                    return this._dropShadowBlur
                }
                set dropShadowBlur(t) {
                    this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
                }
                get dropShadowColor() {
                    return this._dropShadowColor
                }
                set dropShadowColor(t) {
                    var e = Ms(t);
                    this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
                }
                get dropShadowDistance() {
                    return this._dropShadowDistance
                }
                set dropShadowDistance(t) {
                    this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
                }
                get fill() {
                    return this._fill
                }
                set fill(t) {
                    var e = Ms(t);
                    this._fill !== e && (this._fill = e, this.styleID++)
                }
                get fillGradientType() {
                    return this._fillGradientType
                }
                set fillGradientType(t) {
                    this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
                }
                get fillGradientStops() {
                    return this._fillGradientStops
                }
                set fillGradientStops(t) {
                    (function(t, e) {
                        if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                        if (t.length !== e.length) return !1;
                        for (var i = 0; i < t.length; ++i)
                            if (t[i] !== e[i]) return !1;
                        return !0
                    })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
                }
                get fontFamily() {
                    return this._fontFamily
                }
                set fontFamily(t) {
                    this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
                }
                get fontSize() {
                    return this._fontSize
                }
                set fontSize(t) {
                    this._fontSize !== t && (this._fontSize = t, this.styleID++)
                }
                get fontStyle() {
                    return this._fontStyle
                }
                set fontStyle(t) {
                    this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
                }
                get fontVariant() {
                    return this._fontVariant
                }
                set fontVariant(t) {
                    this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
                }
                get fontWeight() {
                    return this._fontWeight
                }
                set fontWeight(t) {
                    this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
                }
                get letterSpacing() {
                    return this._letterSpacing
                }
                set letterSpacing(t) {
                    this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
                }
                get lineHeight() {
                    return this._lineHeight
                }
                set lineHeight(t) {
                    this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
                }
                get leading() {
                    return this._leading
                }
                set leading(t) {
                    this._leading !== t && (this._leading = t, this.styleID++)
                }
                get lineJoin() {
                    return this._lineJoin
                }
                set lineJoin(t) {
                    this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
                }
                get miterLimit() {
                    return this._miterLimit
                }
                set miterLimit(t) {
                    this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
                }
                get padding() {
                    return this._padding
                }
                set padding(t) {
                    this._padding !== t && (this._padding = t, this.styleID++)
                }
                get stroke() {
                    return this._stroke
                }
                set stroke(t) {
                    var e = Ms(t);
                    this._stroke !== e && (this._stroke = e, this.styleID++)
                }
                get strokeThickness() {
                    return this._strokeThickness
                }
                set strokeThickness(t) {
                    this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
                }
                get textBaseline() {
                    return this._textBaseline
                }
                set textBaseline(t) {
                    this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
                }
                get trim() {
                    return this._trim
                }
                set trim(t) {
                    this._trim !== t && (this._trim = t, this.styleID++)
                }
                get whiteSpace() {
                    return this._whiteSpace
                }
                set whiteSpace(t) {
                    this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
                }
                get wordWrap() {
                    return this._wordWrap
                }
                set wordWrap(t) {
                    this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
                }
                get wordWrapWidth() {
                    return this._wordWrapWidth
                }
                set wordWrapWidth(t) {
                    this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
                }
                toFontString() {
                    var t = "number" == typeof this.fontSize ? Math.round(10 * this.fontSize) / 10 + "px" : this.fontSize,
                        e = this.fontFamily;
                    Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
                    for (var i = e.length - 1; i >= 0; i--) {
                        var r = e[i].trim();
                        !/([\"\'])[^\'\"]+\1/.test(r) && Ss.indexOf(r) < 0 && (r = `"${r}"`), e[i] = r
                    }
                    var s = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`;
                    return As.indexOf(s) < 0 && (As.length, As.push(s)), s
                }
            }

            function Cs(t) {
                return "number" == typeof t ? Mt(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
            }

            function Ms(t) {
                if (Array.isArray(t)) {
                    for (var e = 0; e < t.length; ++e) t[e] = Cs(t[e]);
                    return t
                }
                return Cs(t)
            }

            function Ds(t, e, i) {
                for (var r in i) Array.isArray(e[r]) ? t[r] = e[r].slice() : t[r] = e[r]
            }
            class Ps {
                constructor(t, e, i, r, s, n, a, h, o) {
                    this.text = t, this.style = e, this.width = i, this.height = r, this.lines = s, this.lineWidths = n, this.lineHeight = a, this.maxLineWidth = h, this.fontProperties = o
                }
                static measureText(t, e, i, r) {
                    i = null == i ? e.wordWrap : i;
                    var s = e.toFontString(),
                        n = Ps.measureFont(s);
                    0 === n.fontSize && (n.fontSize = e.fontSize, n.ascent = e.fontSize), r || (Ps._canvas || Rs(), r = Ps._canvas);
                    var a = r.getContext("2d");
                    a.font = s;
                    for (var h = (i ? Ps.wordWrap(t, e, r) : t).split(/(?:\r\n|\r|\n)/), o = new Array(h.length), l = 0, u = 0; u < h.length; u++) {
                        var d = Qt(a, h[u]) + (h[u].length - 1) * e.letterSpacing;
                        o[u] = d, l = Math.max(l, d)
                    }
                    var c = l + e.strokeThickness;
                    e.dropShadow && (c += e.dropShadowDistance);
                    var f = e.lineHeight || n.fontSize + e.strokeThickness,
                        p = Math.max(f, n.fontSize + e.strokeThickness) + (h.length - 1) * (f + e.leading);
                    return e.dropShadow && (p += e.dropShadowDistance), new Ps(t, e, c, p, h, o, f + e.leading, l, n)
                }
                static wordWrap(t, e, i) {
                    i || (Ps._canvas || Rs(), i = Ps._canvas);
                    for (var r = i.getContext("2d"), s = 0, n = "", a = "", h = Object.create(null), {
                            letterSpacing: o,
                            whiteSpace: l
                        } = e, u = Ps.collapseSpaces(l), d = Ps.collapseNewlines(l), c = !u, f = e.wordWrapWidth + o, p = Ps.tokenize(t), m = 0; m < p.length; m++) {
                        var g = p[m];
                        if (Ps.isNewline(g)) {
                            if (!d) {
                                a += Ps.addLine(n), c = !u, n = "", s = 0;
                                continue
                            }
                            g = " "
                        }
                        if (u) {
                            var v = Ps.isBreakingSpace(g),
                                _ = Ps.isBreakingSpace(n[n.length - 1]);
                            if (v && _) continue
                        }
                        var x = Ps.getFromCache(g, o, h, r);
                        if (x > f)
                            if (Ps.canBreakWords(g, e.breakWords))
                                for (var y = Ps.wordWrapSplit(g), T = 0, b = 0; b < y.length; b++) {
                                    for (var E = y[b], w = 1; y[b + w];) {
                                        var S = y[b + w],
                                            A = E[E.length - 1];
                                        if (Ps.canBreakChars(A, S, g, b, e.breakWords)) break;
                                        E += S, w++
                                    }
                                    var I = Ps.getFromCache(E, o, h, r);
                                    I + s > (e.firstLine && 0 === T ? f - e.firstLine : f) && (a += Ps.addLine(n), T++, c = !1, n = "", s = 0), n += E, s += I
                                } else {
                                    n.length > 0 && (a += Ps.addLine(n), n = "", s = 0);
                                    var C = m === p.length - 1;
                                    a += Ps.addLine(g, !C), c = !1, n = "", s = 0
                                } else x + s > f && (c = !1, a += Ps.addLine(n), n = "", s = 0), (n.length > 0 || !Ps.isBreakingSpace(g) || c) && (n += g, s += x)
                    }
                    return a += Ps.addLine(n, !1)
                }
                static addLine(t, e = !0) {
                    return t = Ps.trimRight(t), t = e ? `${t}\n` : t
                }
                static getFromCache(t, e, i, r) {
                    var s = i[t];
                    if ("number" != typeof s) {
                        var n = t.length * e;
                        s = Qt(r, t) + n, i[t] = s
                    }
                    return s
                }
                static collapseSpaces(t) {
                    return "normal" === t || "pre-line" === t
                }
                static collapseNewlines(t) {
                    return "normal" === t
                }
                static trimRight(t) {
                    if ("string" != typeof t) return "";
                    for (var e = t.length - 1; e >= 0; e--) {
                        var i = t[e];
                        if (!Ps.isBreakingSpace(i)) break;
                        t = t.slice(0, -1)
                    }
                    return t
                }
                static isNewline(t) {
                    return "string" == typeof t && Ps._newlines.indexOf(t.charCodeAt(0)) >= 0
                }
                static isBreakingSpace(t) {
                    return "string" == typeof t && Ps._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0
                }
                static tokenize(t) {
                    var e = [],
                        i = "";
                    if ("string" != typeof t) return e;
                    for (var r = 0; r < t.length; r++) {
                        var s = t[r];
                        Ps.isBreakingSpace(s) || Ps.isNewline(s) ? ("" !== i && (e.push(i), i = ""), e.push(s)) : i += s
                    }
                    return "" !== i && e.push(i), e
                }
                static canBreakWords(t, e) {
                    return e
                }
                static canBreakChars(t, e, i, r, s) {
                    return !0
                }
                static wordWrapSplit(t) {
                    return [...t]
                }
                static measureFont(t) {
                    if (Ps._fonts[t]) return Ps._fonts[t];
                    var e = {
                        ascent: 0,
                        descent: 0,
                        fontSize: 0
                    };
                    Ps._canvas && Ps._context || Rs();
                    var i = Ps._canvas,
                        r = Ps._context;
                    r.font = t;
                    var s = "中文测试",
                        n = Math.ceil(Qt(r, s)),
                        a = Math.ceil(Qt(r, Ps.BASELINE_SYMBOL)),
                        h = 2 * a;
                    a = a * Ps.BASELINE_MULTIPLIER | 0, i.width = n, i.height = h, r.fillStyle = "#f00", r.fillRect(0, 0, n, h), r.font = t, r.textBaseline = "middle", r.fillStyle = "#000", r.fillText(s, 0, a);
                    var o = r.getImageData(0, 0, n, h).data,
                        l = o.length,
                        u = 4 * n,
                        d = 0,
                        c = 0,
                        f = !1;
                    for (d = 0; d < a; ++d) {
                        for (var p = 0; p < u; p += 4)
                            if (255 !== o[c + p]) {
                                f = !0;
                                break
                            } if (f) break;
                        c += u
                    }
                    for (e.ascent = a - d, c = l - u, f = !1, d = h; d > a; --d) {
                        for (var m = 0; m < u; m += 4)
                            if (255 !== o[c + m]) {
                                f = !0;
                                break
                            } if (f) break;
                        c -= u
                    }
                    return e.descent = d - a, e.fontSize = e.ascent + e.descent, Ps._fonts[t] = e, e
                }
                static clearMetrics(t = "") {
                    t ? delete Ps._fonts[t] : Ps._fonts = {}
                }
            }

            function Rs() {
                var t = Kt.createElement("canvas");
                t.width = t.height = 10, Ps._canvas = t, Ps._context = t.getContext("2d")
            }
            Ps._fonts = {}, Ps.METRICS_STRING = "|ÉqÅ", Ps.BASELINE_SYMBOL = "M", Ps.BASELINE_MULTIPLIER = 1.4, Ps._newlines = [10, 13], Ps._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
            var Os = {
                texture: !0,
                children: !1,
                baseTexture: !0
            };
            class Ls extends Es {
                constructor(t, e, i) {
                    var r, s = !1;
                    i && "number" != typeof i ? r = i : ((r = Kt.createElement("canvas")).bindingScreen = i, s = !0), r.width = 3, r.height = 3;
                    var n = ti.from(r);
                    n.orig = new se, n.trim = new se, super(n), this._ownCanvas = s, this.canvas = r, this.context = this.canvas.getContext("2d"), this._resolution = j.RESOLUTION, this._autoResolution = !0, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = t, this.style = e, this.localStyleID = -1
                }
                updateText(t) {
                    var e = this._style;
                    if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                        this._font = this._style.toFontString();
                        var i, r, s = !!e.groupText,
                            n = this.context,
                            a = Ps.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
                            h = a.width,
                            o = a.height,
                            l = a.lines,
                            u = a.lineHeight,
                            d = a.fontProperties;
                        if (s)
                            for (var c = 0; c < e.groupText.length; c++) h += e.groupText[c].paddingLeft || 0;
                        this.canvas.width = Math.ceil((Math.max(1, h) + 2 * e.padding) * this._resolution), this.canvas.height = Math.ceil((Math.max(1, o) + 2 * e.padding) * this._resolution), n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), n.font = this._font, n.lineWidth = e.strokeThickness, n.textBaseline = e.textBaseline, n.lineJoin = e.lineJoin, n.miterLimit = e.miterLimit;
                        for (var f = e.dropShadow ? 2 : 1, p = 0; p < f; ++p)
                            for (var m = e.dropShadow && 0 === p, g = (this.style.lineHeight - this.style.fontSize) / 2, v = 0, _ = 0; _ < l.length; _++)
                                if (i = e.strokeThickness / 2, r = e.strokeThickness / 2 + _ * u + g + d.ascent, s) {
                                    for (var x = [], y = 0, T = 0, b = 0, E = 0; E < e.groupText.length; E++) {
                                        var w = Math.max(0, e.groupText[E].length + b - v);
                                        b += e.groupText[E].length;
                                        var S = l[_].slice(T, w);
                                        S.length > 0 && (x.push({
                                            string: S,
                                            color: e.groupText[E].color,
                                            paddingLeft: e.groupText[E].paddingLeft || 0,
                                            absolute: e.groupText[E].absolute,
                                            firstLine: e.groupText[E].firstLine || 0
                                        }), T += S.length)
                                    }
                                    for (var A = 0; A < x.length; A++) {
                                        var I = x[A];
                                        if (m) {
                                            var C = e.dropShadowColor,
                                                M = Ct("number" == typeof C ? C : Dt(C));
                                            n.fillStyle = `rgba(${255*M[0]},${255*M[1]},${255*M[2]},${e.dropShadowAlpha})`;
                                            var D = Math.cos(e.dropShadowAngle) * e.dropShadowDistance,
                                                P = Math.sin(e.dropShadowAngle) * e.dropShadowDistance + 0;
                                            this.drawLetterSpacing(I.string, i + e.padding + (I.absolute ? 0 : y) + I.paddingLeft + (0 === _ ? I.firstLine : 0) + D, r + e.padding - 0 + P)
                                        }
                                        n.fillStyle = I.color, y += this.drawLetterSpacing(I.string, i + e.padding + (I.absolute ? 0 : y) + I.paddingLeft + (0 === _ ? I.firstLine : 0), r + e.padding - 0, !1, !0)
                                    }
                                    T -= v += l[_].length
                                } else {
                                    if (m) {
                                        var R = e.dropShadowColor,
                                            O = Ct("number" == typeof R ? R : Dt(R));
                                        n.fillStyle = `rgba(${255*O[0]},${255*O[1]},${255*O[2]},${e.dropShadowAlpha})`;
                                        var L = Math.cos(e.dropShadowAngle) * e.dropShadowDistance,
                                            N = Math.sin(e.dropShadowAngle) * e.dropShadowDistance + 0;
                                        this.drawLetterSpacing(l[_], i + e.padding + L, r + e.padding - 0 + N, !1)
                                    }
                                    n.fillStyle = this._generateFillStyle(e, l, a), this.drawLetterSpacing(l[_], i + e.padding, r + e.padding - 0, !1)
                                } this.updateTexture()
                    }
                }
                drawLetterSpacing(t, e, i, r = !1, s = !1) {
                    var n = this._style.letterSpacing;
                    if (0 === n) return r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i), s ? Qt(this.context, t) : void 0;
                    for (var a = e, h = Array.from ? Array.from(t) : t.split(""), o = Qt(this.context, t), l = 0, u = 0; u < h.length; ++u) {
                        var d = h[u];
                        r ? this.context.strokeText(d, a, i) : this.context.fillText(d, a, i), a += o - (l = Qt(this.context, t.substring(u + 1))) + n, o = l
                    }
                }
                updateTexture() {
                    var t = this.canvas,
                        e = this._texture,
                        i = this._style,
                        r = i.trim ? 0 : i.padding,
                        s = e.baseTexture;
                    e.trim.width = e._frame.width = Math.ceil(t.width / this._resolution), e.trim.height = e._frame.height = Math.ceil(t.height / this._resolution), e.trim.x = -r, e.trim.y = -r, e.orig.width = e._frame.width - 2 * r, e.orig.height = e._frame.height - 2 * r, this._onTextureUpdate(), s.setRealSize(t.width, t.height, this._resolution), this._recursivePostUpdateTransform(), this.dirty = !1
                }
                _render(t) {
                    this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0), this.updateText(!0), super._render(t)
                }
                getLocalBounds(t) {
                    return this.updateText(!0), super.getLocalBounds.call(this, t)
                }
                _calculateBounds() {
                    this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
                }
                _generateFillStyle(t, e, i) {
                    var r, s = t.fill;
                    if (!Array.isArray(s)) return s;
                    if (1 === s.length) return s[0];
                    var n = t.dropShadow ? t.dropShadowDistance : 0,
                        a = t.padding || 0,
                        h = Math.ceil(this.canvas.width / this._resolution) - n - 2 * a,
                        o = Math.ceil(this.canvas.height / this._resolution) - n - 2 * a,
                        l = s.slice(),
                        u = t.fillGradientStops.slice();
                    if (!u.length)
                        for (var d = l.length + 1, c = 1; c < d; ++c) u.push(c / d);
                    if (l.unshift(s[0]), u.unshift(0), l.push(s[s.length - 1]), u.push(1), t.fillGradientType === ys.LINEAR_VERTICAL) {
                        r = this.context.createLinearGradient(h / 2, a, h / 2, o + a);
                        for (var f = 0, p = (i.fontProperties.fontSize + t.strokeThickness) / o, m = 0; m < e.length; m++)
                            for (var g = i.lineHeight * m, v = 0; v < l.length; v++) {
                                var _ = g / o + ("number" == typeof u[v] ? u[v] : v / l.length) * p,
                                    x = Math.max(f, _);
                                x = Math.min(x, 1), r.addColorStop(x, l[v]), f = x
                            }
                    } else {
                        r = this.context.createLinearGradient(a, o / 2, h + a, o / 2);
                        for (var y = l.length + 1, T = 1, b = 0; b < l.length; b++) {
                            var E = void 0;
                            E = "number" == typeof u[b] ? u[b] : T / y, r.addColorStop(E, l[b]), T++
                        }
                    }
                    return r
                }
                destroy(t) {
                    "boolean" == typeof t && (t = {
                        children: t
                    }), t = Object.assign({}, Os, t), super.destroy(t), this._ownCanvas && this.canvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null
                }
                get width() {
                    return this.updateText(!0), Math.round(Math.abs(this.scale.x) * this._texture.orig.width * 100) / 100
                }
                set width(t) {
                    t = Math.round(100 * t) / 100, this.updateText(!0);
                    var e = Gt(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t
                }
                get height() {
                    return this.updateText(!0), Math.round(Math.abs(this.scale.y) * this._texture.orig.height * 100) / 100
                }
                set height(t) {
                    t = Math.round(100 * t) / 100, this.updateText(!0);
                    var e = Gt(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t
                }
                get style() {
                    return this._style
                }
                set style(t) {
                    t = t || {}, this._style = t instanceof Is ? t : new Is(t), this.localStyleID = -1, this.dirty = !0
                }
                get text() {
                    return this._text
                }
                set text(t) {
                    t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
                }
                get resolution() {
                    return this._resolution
                }
                set resolution(t) {
                    this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
                }
            }
            class Ns {
                constructor() {
                    this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = []
                }
            }
            var Bs = [class {
                static test(t) {
                    return "string" == typeof t && 0 === t.indexOf("info face=")
                }
                static parse(t) {
                    var e = t.match(/^[a-z]+\s+.+$/gm),
                        i = {
                            info: [],
                            common: [],
                            page: [],
                            char: [],
                            chars: [],
                            kerning: [],
                            kernings: []
                        };
                    for (var r in e) {
                        var s = e[r].match(/^[a-z]+/gm)[0],
                            n = e[r].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
                            a = {};
                        for (var h in n) {
                            var o = n[h].split("="),
                                l = o[0],
                                u = o[1].replace(/"/gm, ""),
                                d = parseFloat(u),
                                c = isNaN(d) ? u : d;
                            a[l] = c
                        }
                        i[s].push(a)
                    }
                    var f = new Ns;
                    return i.info.forEach((t => f.info.push({
                        face: t.face,
                        size: parseInt(t.size, 10)
                    }))), i.common.forEach((t => f.common.push({
                        lineHeight: parseInt(t.lineHeight, 10)
                    }))), i.page.forEach((t => f.page.push({
                        id: parseInt(t.id, 10),
                        file: t.file
                    }))), i.char.forEach((t => f.char.push({
                        id: parseInt(t.id, 10),
                        page: parseInt(t.page, 10),
                        x: parseInt(t.x, 10),
                        y: parseInt(t.y, 10),
                        width: parseInt(t.width, 10),
                        height: parseInt(t.height, 10),
                        xoffset: parseInt(t.xoffset, 10),
                        yoffset: parseInt(t.yoffset, 10),
                        xadvance: parseInt(t.xadvance, 10)
                    }))), i.kerning.forEach((t => f.kerning.push({
                        first: parseInt(t.first, 10),
                        second: parseInt(t.second, 10),
                        amount: parseInt(t.amount, 10)
                    }))), f
                }
            }];

            function Fs(t) {
                for (var e = 0; e < Bs.length; e++)
                    if (Bs[e].test(t)) return Bs[e];
                return null
            }

            function Us(t, e, i, r, s, n) {
                var a, h = i.fill;
                if (!Array.isArray(h)) return h;
                if (1 === h.length) return h[0];
                var o = i.dropShadow ? i.dropShadowDistance : 0,
                    l = i.padding || 0,
                    u = Math.ceil(t.width / r) - o - 2 * l,
                    d = Math.ceil(t.height / r) - o - 2 * l,
                    c = h.slice(),
                    f = i.fillGradientStops.slice();
                if (!f.length)
                    for (var p = c.length + 1, m = 1; m < p; ++m) f.push(m / p);
                if (c.unshift(h[0]), f.unshift(0), c.push(h[h.length - 1]), f.push(1), i.fillGradientType === ys.LINEAR_VERTICAL) {
                    a = e.createLinearGradient(u / 2, l, u / 2, d + l);
                    for (var g = 0, v = (n.fontProperties.fontSize + i.strokeThickness) / d, _ = 0; _ < s.length; _++)
                        for (var x = n.lineHeight * _, y = 0; y < c.length; y++) {
                            var T = x / d + ("number" == typeof f[y] ? f[y] : y / c.length) * v,
                                b = Math.max(g, T);
                            b = Math.min(b, 1), a.addColorStop(b, c[y]), g = b
                        }
                } else {
                    a = e.createLinearGradient(l, d / 2, u + l, d / 2);
                    for (var E = c.length + 1, w = 1, S = 0; S < c.length; S++) {
                        var A = void 0;
                        A = "number" == typeof f[S] ? f[S] : w / E, a.addColorStop(A, c[S]), w++
                    }
                }
                return a
            }

            function ks(t, e, i, r, s, n, a) {
                var h = i.text,
                    o = i.fontProperties;
                e.translate(r, s), e.scale(n, n);
                var l = a.strokeThickness / 2,
                    u = -a.strokeThickness / 2;
                e.font = a.toFontString(), e.lineWidth = a.strokeThickness, e.textBaseline = a.textBaseline, e.lineJoin = a.lineJoin, e.miterLimit = a.miterLimit, e.fillStyle = Us(t, e, a, n, [h], i), e.strokeStyle = a.stroke, e.font = a.toFontString(), e.lineWidth = a.strokeThickness, e.textBaseline = a.textBaseline, e.lineJoin = a.lineJoin, e.miterLimit = a.miterLimit, e.fillStyle = Us(t, e, a, n, [h], i), e.strokeStyle = a.stroke;
                var d = a.dropShadowColor,
                    c = Ct("number" == typeof d ? d : Dt(d));
                a.dropShadow ? (e.shadowColor = `rgba(${255*c[0]},${255*c[1]},${255*c[2]},${a.dropShadowAlpha})`, e.shadowBlur = a.dropShadowBlur, e.shadowOffsetX = Math.cos(a.dropShadowAngle) * a.dropShadowDistance, e.shadowOffsetY = Math.sin(a.dropShadowAngle) * a.dropShadowDistance) : (e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0), a.stroke && a.strokeThickness && e.strokeText(h, l, u + i.lineHeight - o.descent), a.fill && e.fillText(h, l, u + i.lineHeight - o.descent), e.setTransform(1, 0, 0, 1, 0, 0), e.fillStyle = "rgba(0, 0, 0, 0)"
            }
            class Gs {
                constructor(t, e, i) {
                    var [r] = t.info, [s] = t.common, [n] = t.page, a = Wt(n.file), h = {};
                    this._ownsTextures = i, this.font = r.face, this.size = r.size, this.lineHeight = s.lineHeight / a, this.chars = {}, this.pageTextures = h;
                    for (var o = 0; o < t.page.length; o++) {
                        var {
                            id: l,
                            file: u
                        } = t.page[o];
                        h[l] = e instanceof Array ? e[o] : e[u]
                    }
                    for (var d = 0; d < t.char.length; d++) {
                        var {
                            id: c,
                            page: f
                        } = t.char[d], {
                            x: p,
                            y: m,
                            width: g,
                            height: v,
                            xoffset: _,
                            yoffset: x,
                            xadvance: y
                        } = t.char[d];
                        m /= a, g /= a, v /= a, _ /= a, x /= a, y /= a;
                        var T = new se((p /= a) + h[f].frame.x / a, m + h[f].frame.y / a, g, v);
                        this.chars[c] = {
                            xOffset: _,
                            yOffset: x,
                            xAdvance: y,
                            kerning: {},
                            texture: new ti(h[f].baseTexture, T),
                            page: f
                        }
                    }
                    for (var b = 0; b < t.kerning.length; b++) {
                        var {
                            first: E,
                            second: w,
                            amount: S
                        } = t.kerning[b];
                        E /= a, w /= a, S /= a, this.chars[w] && (this.chars[w].kerning[E] = S)
                    }
                }
                destroy() {
                    for (var t in this.chars) this.chars[t].texture.destroy(), this.chars[t].texture = null;
                    for (var e in this.pageTextures) this._ownsTextures && this.pageTextures[e].destroy(!0), this.pageTextures[e] = null;
                    this.chars = null, this.pageTextures = null
                }
                static install(t, e, i) {
                    var r;
                    if (t instanceof Ns) r = t;
                    else {
                        var s = Fs(t);
                        if (!s) throw new Error("Unrecognized data format for font.");
                        r = s.parse(t)
                    }
                    e instanceof ti && (e = [e]);
                    var n = new Gs(r, e, i);
                    return Gs.available[n.font] = n, n
                }
                static uninstall(t) {
                    var e = Gs.available[t];
                    if (!e) throw new Error(`No font found named '${t}'`);
                    e.destroy(), delete Gs.available[t]
                }
                static from(t, e, i) {
                    if (!t) throw new Error("[BitmapFont] Property `name` is required.");
                    var {
                        chars: r,
                        padding: s,
                        resolution: n,
                        textureWidth: a,
                        textureHeight: h
                    } = Object.assign({}, Gs.defaultOptions, i), o = function(t) {
                        "string" == typeof t && (t = [t]);
                        for (var e = [], i = 0, r = t.length; i < r; i++) {
                            var s = t[i];
                            if (Array.isArray(s)) {
                                if (2 !== s.length) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
                                var n = s[0].charCodeAt(0),
                                    a = s[1].charCodeAt(0);
                                if (a < n) throw new Error("[BitmapFont]: Invalid character range.");
                                for (var h = n, o = a; h <= o; h++) e.push(String.fromCharCode(h))
                            } else e.push(...s.split(""))
                        }
                        if (0 === e.length) throw new Error("[BitmapFont]: Empty set when resolving characters.");
                        return e
                    }(r), l = e instanceof Is ? e : new Is(e), u = a, d = new Ns;
                    d.info[0] = {
                        face: l.fontFamily,
                        size: l.fontSize
                    }, d.common[0] = {
                        lineHeight: l.fontSize
                    };
                    for (var c, f, p, m = 0, g = 0, v = 0, _ = [], x = 0; x < o.length; x++) {
                        c || ((c = document.createElement("canvas")).width = a, c.height = h, f = c.getContext("2d"), p = new je(c, {
                            resolution: n
                        }), _.push(new ti(p)), d.page.push({
                            id: _.length - 1,
                            file: ""
                        }));
                        var y = Ps.measureText(o[x], l, !1, c),
                            T = y.width,
                            b = Math.ceil(y.height),
                            E = Math.ceil(("italic" === l.fontStyle ? 2 : 1) * T);
                        if (g >= h - b * n) {
                            if (0 === g) throw new Error(`[BitmapFont] textureHeight ${h}px is too small for ${l.fontSize}px fonts`);
                            --x, c = null, f = null, p = null, g = 0, m = 0, v = 0
                        } else if (v = Math.max(b + y.fontProperties.descent, v), E * n + m >= u) --x, g += v * n, g = Math.ceil(g), m = 0, v = 0;
                        else {
                            ks(c, f, y, m, g, n, l);
                            var w = y.text.charCodeAt(0);
                            d.char.push({
                                id: w,
                                page: _.length - 1,
                                x: m / n,
                                y: g / n,
                                width: E,
                                height: b,
                                xoffset: 0,
                                yoffset: 0,
                                xadvance: Math.ceil(T - (l.dropShadow ? l.dropShadowDistance : 0) - (l.stroke ? l.strokeThickness : 0))
                            }), m += (E + 2 * s) * n, m = Math.ceil(m)
                        }
                    }
                    var S = new Gs(d, _, !0);
                    return void 0 !== Gs.available[t] && Gs.uninstall(t), Gs.available[t] = S, S
                }
            }
            Gs.ALPHA = [
                ["a", "z"],
                ["A", "Z"], " "
            ], Gs.NUMERIC = [
                ["0", "9"]
            ], Gs.ALPHANUMERIC = [
                ["a", "z"],
                ["A", "Z"],
                ["0", "9"], " "
            ], Gs.ASCII = [
                [" ", "~"]
            ], Gs.defaultOptions = {
                resolution: 1,
                textureWidth: 512,
                textureHeight: 512,
                padding: 4,
                chars: Gs.ALPHANUMERIC
            }, Gs.available = {};
            var Xs = [],
                Hs = [];
            class zs extends Me {
                constructor(t, e = {}) {
                    super(), this._tint = 16777215, e.font && this._upgradeStyle(e);
                    var {
                        align: i,
                        tint: r,
                        maxWidth: s,
                        letterSpacing: n,
                        fontName: a,
                        fontSize: h
                    } = Object.assign({}, zs.styleDefaults, e);
                    if (!Gs.available[a]) throw new Error(`Missing BitmapFont "${a}"`);
                    this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = i, this._tint = r, this._fontName = a, this._fontSize = h || Gs.available[a].size, this._text = t, this._maxWidth = s, this._maxLineHeight = 0, this._letterSpacing = n, this._anchor = new ue((() => {
                        this.dirty = !0
                    }), this, 0, 0), this._roundPixels = j.ROUND_PIXELS, this.dirty = !0, this._textureCache = {}
                }
                updateText() {
                    for (var t, e = Gs.available[this._fontName], i = this._fontSize / e.size, r = new le, s = [], n = [], a = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", h = a.length, o = this._maxWidth * e.size / this._fontSize, l = null, u = 0, d = 0, c = 0, f = -1, p = 0, m = 0, g = 0, v = 0; v < h; v++) {
                        var _ = a.charCodeAt(v),
                            x = a.charAt(v);
                        if (/(?:\s)/.test(x) && (f = v, p = u), "\r" !== x && "\n" !== x) {
                            var y = e.chars[_];
                            if (y) {
                                l && y.kerning[l] && (r.x += y.kerning[l]);
                                var T = Hs.pop() || {
                                    texture: ti.EMPTY,
                                    line: 0,
                                    charCode: 0,
                                    position: new le
                                };
                                T.texture = y.texture, T.line = c, T.charCode = _, T.position.x = r.x + y.xOffset + this._letterSpacing / 2, T.position.y = r.y + y.yOffset, s.push(T), r.x += y.xAdvance + this._letterSpacing, u = r.x, g = Math.max(g, y.yOffset + y.texture.height), l = _, -1 !== f && o > 0 && r.x > o && (kt(s, 1 + f - ++m, 1 + v - f), v = f, f = -1, n.push(p), d = Math.max(d, p), c++, r.x = 0, r.y += e.lineHeight, l = null)
                            }
                        } else n.push(u), d = Math.max(d, u), ++c, ++m, r.x = 0, r.y += e.lineHeight, l = null
                    }
                    var b = a.charAt(a.length - 1);
                    "\r" !== b && "\n" !== b && (/(?:\s)/.test(b) && (u = p), n.push(u), d = Math.max(d, u));
                    for (var E = [], w = 0; w <= c; w++) {
                        var S = 0;
                        "right" === this._align ? S = d - n[w] : "center" === this._align && (S = (d - n[w]) / 2), E.push(S)
                    }
                    for (var A = s.length, I = {}, C = [], M = this._activePagesMeshData, D = 0; D < M.length; D++) Xs.push(M[D]);
                    for (var P = 0; P < A; P++) {
                        var R = s[P].texture,
                            O = R.baseTexture.uid;
                        if (!I[O]) {
                            var L = Xs.pop();
                            if (!L) {
                                var N = new xs,
                                    B = new _s(ti.EMPTY);
                                L = {
                                    index: 0,
                                    indexCount: 0,
                                    vertexCount: 0,
                                    uvsCount: 0,
                                    total: 0,
                                    mesh: new vs(N, B),
                                    vertices: null,
                                    uvs: null,
                                    indices: null
                                }
                            }
                            L.index = 0, L.indexCount = 0, L.vertexCount = 0, L.uvsCount = 0, L.total = 0;
                            var {
                                _textureCache: F
                            } = this;
                            F[O] = F[O] || new ti(R.baseTexture), L.mesh.texture = F[O], L.mesh.tint = this._tint, C.push(L), I[O] = L
                        }
                        I[O].total++
                    }
                    for (var U = 0; U < M.length; U++) - 1 === C.indexOf(M[U]) && this.removeChild(M[U].mesh);
                    for (var k = 0; k < C.length; k++) C[k].mesh.parent !== this && this.addChild(C[k].mesh);
                    for (var G in this._activePagesMeshData = C, I) {
                        var X = I[G],
                            H = X.total;
                        if (!((null === (t = X.indices) || void 0 === t ? void 0 : t.length) > 6 * H) || X.vertices.length < 2 * vs.BATCHABLE_SIZE) X.vertices = new Float32Array(8 * H), X.uvs = new Float32Array(8 * H), X.indices = new Uint16Array(6 * H);
                        else
                            for (var z = X.total, V = X.vertices, Y = 4 * z * 2; Y < V.length; Y++) V[Y] = 0;
                        X.mesh.size = 6 * H
                    }
                    for (var j = 0; j < A; j++) {
                        var W = s[j],
                            $ = W.position.x + E[W.line];
                        this._roundPixels && ($ = Math.round($));
                        var q = $ * i,
                            Z = W.position.y * i,
                            K = W.texture,
                            J = I[K.baseTexture.uid],
                            Q = K.frame,
                            tt = K._uvs,
                            et = J.index++;
                        J.indices[6 * et + 0] = 0 + 4 * et, J.indices[6 * et + 1] = 1 + 4 * et, J.indices[6 * et + 2] = 2 + 4 * et, J.indices[6 * et + 3] = 0 + 4 * et, J.indices[6 * et + 4] = 2 + 4 * et, J.indices[6 * et + 5] = 3 + 4 * et, J.vertices[8 * et + 0] = q, J.vertices[8 * et + 1] = Z, J.vertices[8 * et + 2] = q + Q.width * i, J.vertices[8 * et + 3] = Z, J.vertices[8 * et + 4] = q + Q.width * i, J.vertices[8 * et + 5] = Z + Q.height * i, J.vertices[8 * et + 6] = q, J.vertices[8 * et + 7] = Z + Q.height * i, J.uvs[8 * et + 0] = tt.x0, J.uvs[8 * et + 1] = tt.y0, J.uvs[8 * et + 2] = tt.x1, J.uvs[8 * et + 3] = tt.y1, J.uvs[8 * et + 4] = tt.x2, J.uvs[8 * et + 5] = tt.y2, J.uvs[8 * et + 6] = tt.x3, J.uvs[8 * et + 7] = tt.y3
                    }
                    for (var it in this._textWidth = d * i, this._textHeight = (r.y + e.lineHeight) * i, I) {
                        var rt = I[it];
                        if (0 !== this.anchor.x || 0 !== this.anchor.y)
                            for (var st = 0, nt = this._textWidth * this.anchor.x, at = this._textHeight * this.anchor.y, ht = 0; ht < rt.total; ht++) rt.vertices[st++] -= nt, rt.vertices[st++] -= at, rt.vertices[st++] -= nt, rt.vertices[st++] -= at, rt.vertices[st++] -= nt, rt.vertices[st++] -= at, rt.vertices[st++] -= nt, rt.vertices[st++] -= at;
                        this._maxLineHeight = g * i;
                        var ot = rt.mesh.geometry.getBuffer("aVertexPosition"),
                            lt = rt.mesh.geometry.getBuffer("aTextureCoord"),
                            ut = rt.mesh.geometry.getIndex();
                        ot.data = rt.vertices, lt.data = rt.uvs, ut.data = rt.indices, ot.update(), lt.update(), ut.update()
                    }
                    for (var dt = 0; dt < s.length; dt++) Hs.push(s[dt])
                }
                updateTransform() {
                    this.validate(), this.containerUpdateTransform()
                }
                getLocalBounds() {
                    return this.validate(), super.getLocalBounds()
                }
                validate() {
                    this.dirty && (this.updateText(), this.dirty = !1)
                }
                get tint() {
                    return this._tint
                }
                set tint(t) {
                    if (this._tint !== t) {
                        this._tint = t;
                        for (var e = 0; e < this._activePagesMeshData.length; e++) this._activePagesMeshData[e].mesh.tint = t
                    }
                }
                get align() {
                    return this._align
                }
                set align(t) {
                    this._align !== t && (this._align = t, this.dirty = !0)
                }
                get fontName() {
                    return this._fontName
                }
                set fontName(t) {
                    if (!Gs.available[t]) throw new Error(`Missing BitmapFont "${t}"`);
                    this._fontName !== t && (this._fontName = t, this.dirty = !0)
                }
                get fontSize() {
                    return this._fontSize
                }
                set fontSize(t) {
                    this._fontSize !== t && (this._fontSize = t, this.dirty = !0)
                }
                get anchor() {
                    return this._anchor
                }
                set anchor(t) {
                    "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
                }
                get text() {
                    return this._text
                }
                set text(t) {
                    t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
                }
                get maxWidth() {
                    return this._maxWidth
                }
                set maxWidth(t) {
                    this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
                }
                get maxLineHeight() {
                    return this.validate(), this._maxLineHeight
                }
                get textWidth() {
                    return this.validate(), this._textWidth
                }
                get letterSpacing() {
                    return this._letterSpacing
                }
                set letterSpacing(t) {
                    this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
                }
                get roundPixels() {
                    return this._roundPixels
                }
                set roundPixels(t) {
                    t !== this._roundPixels && (this._roundPixels = t, this.dirty = !0)
                }
                get textHeight() {
                    return this.validate(), this._textHeight
                }
                _upgradeStyle(t) {
                    if ("string" == typeof t.font) {
                        var e = t.font.split(" ");
                        t.fontName = 1 === e.length ? e[0] : e.slice(1).join(" "), e.length >= 2 && (t.fontSize = parseInt(e[0], 10))
                    } else t.fontName = t.font.name, t.fontSize = "number" == typeof t.font.size ? t.font.size : parseInt(t.font.size, 10)
                }
                destroy(t) {
                    var {
                        _textureCache: e
                    } = this;
                    for (var i in e) {
                        e[i].destroy(), delete e[i]
                    }
                    this._textureCache = null, super.destroy(t)
                }
                static registerFont(t, e) {
                    return Gs.install(t, e)
                }
                static get fonts() {
                    return Gs.available
                }
            }
            zs.styleDefaults = {
                align: "left",
                tint: 16777215,
                maxWidth: 0,
                letterSpacing: 0
            };
            class Vs {
                static add() {
                    hs._defaultLoadStrategy.setExtensionXhrType("fnt", "text")
                }
                static use(t, e) {
                    var i = Fs(t.data);
                    if (i)
                        for (var r = Vs.getBaseUrl(this, t), s = i.parse(t.data), n = {}, a = i => {
                                i.texture && (n[i.metadata.pageFile] = i.texture), Object.keys(n).length === s.page.length ? (t.bitmapFont = Gs.install(s, n, !0), e()) : e()
                            }, h = 0; h < s.page.length; ++h) {
                            var o = s.page[h].file,
                                l = r + o,
                                u = !1;
                            for (var d in this.resources) {
                                var c = this.resources[d];
                                if (c.url === l) {
                                    c.metadata.pageFile = o, c.texture ? a(c) : c.onAfterMiddleware.add(a), u = !0;
                                    break
                                }
                            }
                            if (!u) {
                                var f = {
                                    name: `${t.name}_image`,
                                    url: l,
                                    crossOrigin: "anonymous",
                                    loadType: 2,
                                    metadata: Object.assign({
                                        pageFile: o
                                    }, t.metadata.imageMetadata),
                                    bindingScreen: t.bindingScreen,
                                    parentResource: t,
                                    onComplete: a
                                };
                                this.add(f)
                            }
                        } else e()
                }
                static getBaseUrl(t, e) {
                    var i = Vs.dirname(e.url);
                    return (i = i.replace(t.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/"), i
                }
                static dirname(t) {
                    var e = t.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
                    return e === t ? "." : "" === e ? "/" : e
                }
            }
            var Ys = new de;
            Ae.prototype._cacheAsBitmap = !1, Ae.prototype._cacheData = null;
            class js {
                constructor() {
                    this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null
                }
            }
            Object.defineProperties(Ae.prototype, {
                cacheAsBitmap: {
                    get() {
                        return this._cacheAsBitmap
                    },
                    set(t) {
                        var e;
                        this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._cacheData || (this._cacheData = new js), (e = this._cacheData).originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea))
                    }
                }
            }), Ae.prototype._renderCached = function(t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t))
            }, Ae.prototype._initCachedDisplayObject = function(t) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var e = this.alpha;
                    this.alpha = 1, t.batch.flush();
                    var i = this.getLocalBounds(null, !0).clone();
                    if (this.filters) {
                        var r = this.filters[0].padding;
                        i.pad(r)
                    }
                    i.ceil(j.RESOLUTION);
                    var s = t.renderTexture.current,
                        n = t.renderTexture.sourceFrame.clone(),
                        a = t.renderTexture.destinationFrame.clone(),
                        h = t.projection.transform,
                        o = ri.create({
                            width: i.width,
                            height: i.height
                        }),
                        l = `cacheAsBitmap_${Ht()}`;
                    this._cacheData.textureCacheId = l, je.addToCache(o.baseTexture, l), ti.addToCache(o, l);
                    var u = this.transform.localTransform.copyTo(Ys).invert().translate(-i.x, -i.y);
                    this.render = this._cacheData.originalRender, t.render(this, o, !0, u, !1), t.projection.transform = h, t.renderTexture.bind(s, n, a), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
                    var d = new Es(o);
                    d.transform.worldTransform = this.transform.worldTransform, d.anchor.x = -i.x / i.width, d.anchor.y = -i.y / i.height, d.alpha = e, d._bounds = this._bounds, this._cacheData.sprite = d, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = d.containsPoint.bind(d)
                }
            }, Ae.prototype._renderCachedCanvas = function(t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t))
            }, Ae.prototype._initCachedDisplayObjectCanvas = function(t) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var e = this.getLocalBounds(null, !0),
                        i = this.alpha;
                    this.alpha = 1;
                    var r = t.context,
                        s = t._projTransform;
                    e.ceil(j.RESOLUTION);
                    var n = ri.create({
                            width: e.width,
                            height: e.height
                        }),
                        a = `cacheAsBitmap_${Ht()}`;
                    this._cacheData.textureCacheId = a, je.addToCache(n.baseTexture, a), ti.addToCache(n, a);
                    var h = Ys;
                    this.transform.localTransform.copyTo(h), h.invert(), h.tx -= e.x, h.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, n, !0, h, !1), t.context = r, t._projTransform = s, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
                    var o = new Es(n);
                    o.transform.worldTransform = this.transform.worldTransform, o.anchor.x = -e.x / e.width, o.anchor.y = -e.y / e.height, o.alpha = i, o._bounds = this._bounds, this._cacheData.sprite = o, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = o.containsPoint.bind(o)
                }
            }, Ae.prototype._calculateCachedBounds = function() {
                this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID
            }, Ae.prototype._getCachedLocalBounds = function() {
                return this._cacheData.sprite.getLocalBounds(null)
            }, Ae.prototype._destroyCachedDisplayObject = function() {
                this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, je.removeFromCache(this._cacheData.textureCacheId), ti.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
            }, Ae.prototype._cacheAsBitmapDestroy = function(t) {
                this.cacheAsBitmap = !1, this.destroy(t)
            };
            var Ws, $s, qs = {
                    float(t, e, i, r) {
                        i !== r && (i.v = r, t.uniform1f(e, r))
                    },
                    vec2(t, e, i, r) {
                        i[0] === r[0] && i[1] === r[1] || (i[0] = r[0], i[1] = r[1], t.uniform2f(e, r[0], r[1]))
                    },
                    vec3(t, e, i, r) {
                        i[0] === r[0] && i[1] === r[1] && i[2] === r[2] || (i[0] = r[0], i[1] = r[1], i[2] = r[2], t.uniform3f(e, r[0], r[1], r[2]))
                    },
                    int(t, e, i, r) {
                        t.uniform1i(e, r)
                    },
                    ivec2(t, e, i, r) {
                        t.uniform2i(e, r[0], r[1])
                    },
                    ivec3(t, e, i, r) {
                        t.uniform3i(e, r[0], r[1], r[2])
                    },
                    ivec4(t, e, i, r) {
                        t.uniform4i(e, r[0], r[1], r[2], r[3])
                    },
                    bool(t, e, i, r) {
                        t.uniform1i(e, r)
                    },
                    bvec2(t, e, i, r) {
                        t.uniform2i(e, r[0], r[1])
                    },
                    bvec3(t, e, i, r) {
                        t.uniform3i(e, r[0], r[1], r[2])
                    },
                    bvec4(t, e, i, r) {
                        t.uniform4i(e, r[0], r[1], r[2], r[3])
                    },
                    mat2(t, e, i, r) {
                        t.uniformMatrix2fv(e, !1, r)
                    },
                    mat3(t, e, i, r) {
                        t.uniformMatrix3fv(e, !1, r)
                    },
                    mat4(t, e, i, r) {
                        t.uniformMatrix4fv(e, !1, r)
                    },
                    sampler2D(t, e, i, r) {
                        t.uniform1i(e, r)
                    },
                    samplerCube(t, e, i, r) {
                        t.uniform1i(e, r)
                    },
                    sampler2DArray(t, e, i, r) {
                        t.uniform1i(e, r)
                    }
                },
                Zs = {
                    float(t, e, i, r) {
                        t.uniform1fv(e, r)
                    },
                    vec2(t, e, i, r) {
                        t.uniform2fv(e, r)
                    },
                    vec3(t, e, i, r) {
                        t.uniform3fv(e, r)
                    },
                    vec4(t, e, i, r) {
                        t.uniform4fv(e, r)
                    },
                    int(t, e, i, r) {
                        t.uniform1iv(e, r)
                    },
                    ivec2(t, e, i, r) {
                        t.uniform2iv(e, r)
                    },
                    ivec3(t, e, i, r) {
                        t.uniform3iv(e, r)
                    },
                    ivec4(t, e, i, r) {
                        t.uniform4iv(e, r)
                    },
                    bool(t, e, i, r) {
                        t.uniform1iv(e, r)
                    },
                    bvec2(t, e, i, r) {
                        t.uniform2iv(e, r)
                    },
                    bvec3(t, e, i, r) {
                        t.uniform3iv(e, r)
                    },
                    bvec4(t, e, i, r) {
                        t.uniform4iv(e, r)
                    },
                    sampler2D(t, e, i, r) {
                        t.uniform1iv(e, r)
                    },
                    samplerCube(t, e, i, r) {
                        t.uniform1iv(e, r)
                    },
                    sampler2DArray(t, e, i, r) {
                        t.uniform1iv(e, r)
                    }
                };
            ! function(t) {
                t.MITER = "miter", t.BEVEL = "bevel", t.ROUND = "round"
            }(Ws || (Ws = {})),
            function(t) {
                t.BUTT = "butt", t.ROUND = "round", t.SQUARE = "square"
            }($s || ($s = {}));
            var Ks = {
                adaptive: !0,
                maxLength: 10,
                minSegments: 8,
                maxSegments: 2048,
                epsilon: 1e-4,
                _segmentsCount(t, e = 20) {
                    if (!this.adaptive || !t || isNaN(t)) return e;
                    var i = Math.ceil(t / this.maxLength);
                    return i < this.minSegments ? i = this.minSegments : i > this.maxSegments && (i = this.maxSegments), i
                }
            };
            class Js {
                constructor(t = {}) {
                    this.color = 16777215, this.alpha = 1, this.matrix = null, this.visible = !1, this.bindingScreen = t.bindingScreen, this.reset()
                }
                clone() {
                    var t = new Js({
                        bindingScreen: this.bindingScreen
                    });
                    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t
                }
                reset() {
                    this.color = 16777215, this.alpha = 1, this.texture = ti.getWHITE(this.bindingScreen), this.matrix = null, this.visible = !1
                }
                destroy() {
                    this.texture = null, this.matrix = null
                }
            }
            var Qs = {
                    build(t) {
                        t.points = t.shape.points.slice()
                    },
                    triangulate(t, e) {
                        var i = t.points,
                            r = t.holes,
                            s = e.points,
                            n = e.indices;
                        if (i.length >= 6) {
                            for (var a = [], h = 0; h < r.length; h++) {
                                var o = r[h];
                                a.push(i.length / 2), i = i.concat(o.points)
                            }
                            var l = it(i, a, 2);
                            if (!l) return;
                            for (var u = s.length / 2, d = 0; d < l.length; d += 3) n.push(l[d] + u), n.push(l[d + 1] + u), n.push(l[d + 2] + u);
                            for (var c = 0; c < i.length; c++) s.push(i[c])
                        }
                    }
                },
                tn = {
                    build(t) {
                        var e, i, r = t.shape,
                            s = t.points,
                            n = r.x,
                            a = r.y;
                        if (s.length = 0, t.type === qt.CIRC) e = r.radius, i = r.radius;
                        else {
                            var h = t.shape;
                            e = h.width, i = h.height
                        }
                        if (0 !== e && 0 !== i) {
                            var o = Math.floor(30 * Math.sqrt(r.radius)) || Math.floor(15 * Math.sqrt(e + i));
                            o /= 2.3;
                            for (var l = 2 * Math.PI / o, u = 0; u < o - .5; u++) s.push(n + Math.sin(-l * u) * e, a + Math.cos(-l * u) * i);
                            s.push(s[0], s[1])
                        }
                    },
                    triangulate(t, e) {
                        var i = t.points,
                            r = e.points,
                            s = e.indices,
                            n = r.length / 2,
                            a = n,
                            h = t.shape,
                            o = t.matrix,
                            l = h.x,
                            u = h.y;
                        r.push(t.matrix ? o.a * l + o.c * u + o.tx : l, t.matrix ? o.b * l + o.d * u + o.ty : u);
                        for (var d = 0; d < i.length; d += 2) r.push(i[d], i[d + 1]), s.push(n++, a, n)
                    }
                },
                en = {
                    build(t) {
                        var e = t.shape,
                            i = e.x,
                            r = e.y,
                            s = e.width,
                            n = e.height,
                            a = t.points;
                        a.length = 0, a.push(i, r, i + s, r, i + s, r + n, i, r + n)
                    },
                    triangulate(t, e) {
                        var i = t.points,
                            r = e.points,
                            s = r.length / 2;
                        r.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]), e.indices.push(s, s + 1, s + 2, s + 1, s + 2, s + 3)
                    }
                };

            function rn(t, e, i) {
                return t + (e - t) * i
            }

            function sn(t, e, i, r, s, n, a = []) {
                for (var h = a, o = 0, l = 0, u = 0, d = 0, c = 0, f = 0, p = 0, m = 0; p <= 20; ++p) o = rn(t, i, m = p / 20), l = rn(e, r, m), u = rn(i, s, m), d = rn(r, n, m), c = rn(o, u, m), f = rn(l, d, m), h.push(c, f);
                return h
            }
            var nn = {
                build(t) {
                    var e = t.shape,
                        i = t.points,
                        r = e.x,
                        s = e.y,
                        n = e.width,
                        a = e.height,
                        h = Math.max(0, Math.min(e.radius, Math.min(n, a) / 2));
                    i.length = 0, h ? (sn(r, s + h, r, s, r + h, s, i), sn(r + n - h, s, r + n, s, r + n, s + h, i), sn(r + n, s + a - h, r + n, s + a, r + n - h, s + a, i), sn(r + h, s + a, r, s + a, r, s + a - h, i)) : i.push(r, s, r + n, s, r + n, s + a, r, s + a)
                },
                triangulate(t, e) {
                    for (var i = t.points, r = e.points, s = e.indices, n = r.length / 2, a = it(i, null, 2), h = 0, o = a.length; h < o; h += 3) s.push(a[h] + n), s.push(a[h + 1] + n), s.push(a[h + 2] + n);
                    for (var l = 0, u = i.length; l < u; l++) r.push(i[l], i[++l])
                }
            };

            function an(t, e, i, r, s, n, a, h) {
                var o, l;
                a ? (o = r, l = -i) : (o = -r, l = i);
                var u = t - i * s + o,
                    d = e - r * s + l,
                    c = t + i * n + o,
                    f = e + r * n + l;
                return h.push(u, d), h.push(c, f), 2
            }

            function hn(t, e, i, r, s, n, a, h) {
                var o = i - t,
                    l = r - e,
                    u = Math.atan2(o, l),
                    d = Math.atan2(s - t, n - e);
                h && u < d ? u += 2 * Math.PI : !h && u > d && (d += 2 * Math.PI);
                var c = u,
                    f = d - u,
                    p = Math.abs(f),
                    m = Math.sqrt(o * o + l * l),
                    g = 1 + (15 * p * Math.sqrt(m) / Math.PI >> 0),
                    v = f / g;
                if (c += v, h) {
                    a.push(t, e), a.push(i, r);
                    for (var _ = 1, x = c; _ < g; _++, x += v) a.push(t, e), a.push(t + Math.sin(x) * m, e + Math.cos(x) * m);
                    a.push(t, e), a.push(s, n)
                } else {
                    a.push(i, r), a.push(t, e);
                    for (var y = 1, T = c; y < g; y++, T += v) a.push(t + Math.sin(T) * m, e + Math.cos(T) * m), a.push(t, e);
                    a.push(s, n), a.push(t, e)
                }
                return 2 * g
            }

            function on(t, e) {
                t.lineStyle.native ? function(t, e) {
                    var i = 0,
                        r = t.shape,
                        s = t.points || r.points,
                        n = r.type !== qt.POLY || r.closeStroke;
                    if (0 !== s.length) {
                        var a = e.points,
                            h = e.indices,
                            o = s.length / 2,
                            l = a.length / 2,
                            u = l;
                        for (a.push(s[0], s[1]), i = 1; i < o; i++) a.push(s[2 * i], s[2 * i + 1]), h.push(u, u + 1), u++;
                        n && h.push(u, l)
                    }
                }(t, e) : function(t, e) {
                    var i = t.shape,
                        r = t.points || i.points.slice(),
                        s = e.closePointEps;
                    if (0 !== r.length) {
                        var n = t.lineStyle,
                            a = new le(r[0], r[1]),
                            h = new le(r[r.length - 2], r[r.length - 1]),
                            o = i.type !== qt.POLY || i.closeStroke,
                            l = Math.abs(a.x - h.x) < s && Math.abs(a.y - h.y) < s;
                        if (o) {
                            r = r.slice(), l && (r.pop(), r.pop(), h.set(r[r.length - 2], r[r.length - 1]));
                            var u = .5 * (a.x + h.x),
                                d = .5 * (h.y + a.y);
                            r.unshift(u, d), r.push(u, d)
                        }
                        var c = e.points,
                            f = r.length / 2,
                            p = r.length,
                            m = c.length / 2,
                            g = n.width / 2,
                            v = g * g,
                            _ = n.miterLimit * n.miterLimit,
                            x = r[0],
                            y = r[1],
                            T = r[2],
                            b = r[3],
                            E = 0,
                            w = 0,
                            S = -(y - b),
                            A = x - T,
                            I = 0,
                            C = 0,
                            M = Math.sqrt(S * S + A * A);
                        S /= M, A /= M, S *= g, A *= g;
                        var D = n.alignment,
                            P = 2 * (1 - D),
                            R = 2 * D;
                        o || (n.cap === $s.ROUND ? p += hn(x - S * (P - R) * .5, y - A * (P - R) * .5, x - S * P, y - A * P, x + S * R, y + A * R, c, !0) + 2 : n.cap === $s.SQUARE && (p += an(x, y, S, A, P, R, !0, c))), c.push(x - S * P, y - A * P), c.push(x + S * R, y + A * R);
                        for (var O = 1; O < f - 1; ++O) {
                            x = r[2 * (O - 1)], y = r[2 * (O - 1) + 1], T = r[2 * O], b = r[2 * O + 1], E = r[2 * (O + 1)], w = r[2 * (O + 1) + 1], S = -(y - b), A = x - T, S /= M = Math.sqrt(S * S + A * A), A /= M, S *= g, A *= g, I = -(b - w), C = T - E, I /= M = Math.sqrt(I * I + C * C), C /= M, I *= g, C *= g;
                            var L = T - x,
                                N = y - b,
                                B = T - E,
                                F = w - b,
                                U = N * B - F * L,
                                k = U < 0;
                            if (Math.abs(U) < .1) c.push(T - S * P, b - A * P), c.push(T + S * R, b + A * R);
                            else {
                                var G = (-S + x) * (-A + b) - (-S + T) * (-A + y),
                                    X = (-I + E) * (-C + b) - (-I + T) * (-C + w),
                                    H = (L * X - B * G) / U,
                                    z = (F * G - N * X) / U,
                                    V = (H - T) * (H - T) + (z - b) * (z - b),
                                    Y = T + (H - T) * P,
                                    j = b + (z - b) * P,
                                    W = T - (H - T) * R,
                                    $ = b - (z - b) * R,
                                    q = k ? P : R;
                                V <= Math.min(L * L + N * N, B * B + F * F) + q * q * v ? n.join === Ws.BEVEL || V / v > _ ? (k ? (c.push(Y, j), c.push(T + S * R, b + A * R), c.push(Y, j), c.push(T + I * R, b + C * R)) : (c.push(T - S * P, b - A * P), c.push(W, $), c.push(T - I * P, b - C * P), c.push(W, $)), p += 2) : n.join === Ws.ROUND ? k ? (c.push(Y, j), c.push(T + S * R, b + A * R), p += hn(T, b, T + S * R, b + A * R, T + I * R, b + C * R, c, !0) + 4, c.push(Y, j), c.push(T + I * R, b + C * R)) : (c.push(T - S * P, b - A * P), c.push(W, $), p += hn(T, b, T - S * P, b - A * P, T - I * P, b - C * P, c, !1) + 4, c.push(T - I * P, b - C * P), c.push(W, $)) : (c.push(Y, j), c.push(W, $)) : (c.push(T - S * P, b - A * P), c.push(T + S * R, b + A * R), n.join === Ws.BEVEL || V / v > _ || (n.join === Ws.ROUND ? p += k ? hn(T, b, T + S * R, b + A * R, T + I * R, b + C * R, c, !0) + 2 : hn(T, b, T - S * P, b - A * P, T - I * P, b - C * P, c, !1) + 2 : (k ? (c.push(W, $), c.push(W, $)) : (c.push(Y, j), c.push(Y, j)), p += 2)), c.push(T - I * P, b - C * P), c.push(T + I * R, b + C * R), p += 2)
                            }
                        }
                        x = r[2 * (f - 2)], y = r[2 * (f - 2) + 1], T = r[2 * (f - 1)], S = -(y - (b = r[2 * (f - 1) + 1])), A = x - T, S /= M = Math.sqrt(S * S + A * A), A /= M, S *= g, A *= g, c.push(T - S * P, b - A * P), c.push(T + S * R, b + A * R), o || (n.cap === $s.ROUND ? p += hn(T - S * (P - R) * .5, b - A * (P - R) * .5, T - S * P, b - A * P, T + S * R, b + A * R, c, !1) + 2 : n.cap === $s.SQUARE && (p += an(T, b, S, A, P, R, !1, c)));
                        for (var Z = e.indices, K = Ks.epsilon * Ks.epsilon, J = m; J < p + m - 2; ++J) x = c[2 * J], y = c[2 * J + 1], T = c[2 * (J + 1)], b = c[2 * (J + 1) + 1], E = c[2 * (J + 2)], w = c[2 * (J + 2) + 1], Math.abs(x * (b - w) + T * (w - y) + E * (y - b)) < K || Z.push(J, J + 1, J + 2)
                    }
                }(t, e)
            }
            class ln {
                static curveTo(t, e, i, r, s, n) {
                    var a = n[n.length - 2],
                        h = n[n.length - 1] - e,
                        o = a - t,
                        l = r - e,
                        u = i - t,
                        d = Math.abs(h * u - o * l);
                    if (d < 1e-8 || 0 === s) return n[n.length - 2] === t && n[n.length - 1] === e || n.push(t, e), null;
                    var c = h * h + o * o,
                        f = l * l + u * u,
                        p = h * l + o * u,
                        m = s * Math.sqrt(c) / d,
                        g = s * Math.sqrt(f) / d,
                        v = m * p / c,
                        _ = g * p / f,
                        x = m * u + g * o,
                        y = m * l + g * h,
                        T = o * (g + v),
                        b = h * (g + v),
                        E = u * (m + _),
                        w = l * (m + _);
                    return {
                        cx: x + t,
                        cy: y + e,
                        radius: s,
                        startAngle: Math.atan2(b - y, T - x),
                        endAngle: Math.atan2(w - y, E - x),
                        anticlockwise: o * l > u * h
                    }
                }
                static arc(t, e, i, r, s, n, a, h, o) {
                    for (var l = a - n, u = Ks._segmentsCount(Math.abs(l) * s, 40 * Math.ceil(Math.abs(l) / ee)), d = l / (2 * u), c = 2 * d, f = Math.cos(d), p = Math.sin(d), m = u - 1, g = m % 1 / m, v = 0; v <= m; ++v) {
                        var _ = d + n + c * (v + g * v),
                            x = Math.cos(_),
                            y = -Math.sin(_);
                        o.push((f * x + p * y) * s + i, (f * -y + p * x) * s + r)
                    }
                }
            }
            class un {
                static curveLength(t, e, i, r, s, n, a, h) {
                    for (var o = 0, l = 0, u = 0, d = 0, c = 0, f = 0, p = 0, m = 0, g = 0, v = 0, _ = 0, x = t, y = e, T = 1; T <= 10; ++T) v = x - (m = (p = (f = (c = 1 - (l = T / 10)) * c) * c) * t + 3 * f * l * i + 3 * c * (u = l * l) * s + (d = u * l) * a), _ = y - (g = p * e + 3 * f * l * r + 3 * c * u * n + d * h), x = m, y = g, o += Math.sqrt(v * v + _ * _);
                    return o
                }
                static curveTo(t, e, i, r, s, n, a) {
                    var h = a[a.length - 2],
                        o = a[a.length - 1];
                    a.length -= 2;
                    var l = Ks._segmentsCount(un.curveLength(h, o, t, e, i, r, s, n)),
                        u = 0,
                        d = 0,
                        c = 0,
                        f = 0,
                        p = 0;
                    a.push(h, o);
                    for (var m = 1, g = 0; m <= l; ++m) c = (d = (u = 1 - (g = m / l)) * u) * u, p = (f = g * g) * g, a.push(c * h + 3 * d * g * t + 3 * u * f * i + p * s, c * o + 3 * d * g * e + 3 * u * f * r + p * n)
                }
            }
            class dn {
                static curveLength(t, e, i, r, s, n) {
                    var a = t - 2 * i + s,
                        h = e - 2 * r + n,
                        o = 2 * i - 2 * t,
                        l = 2 * r - 2 * e,
                        u = 4 * (a * a + h * h),
                        d = 4 * (a * o + h * l),
                        c = o * o + l * l,
                        f = 2 * Math.sqrt(u + d + c),
                        p = Math.sqrt(u),
                        m = 2 * u * p,
                        g = 2 * Math.sqrt(c),
                        v = d / p;
                    return (m * f + p * d * (f - g) + (4 * c * u - d * d) * Math.log((2 * p + v + f) / (v + g))) / (4 * m)
                }
                static curveTo(t, e, i, r, s) {
                    for (var n = s[s.length - 2], a = s[s.length - 1], h = Ks._segmentsCount(dn.curveLength(n, a, t, e, i, r)), o = 0, l = 0, u = 1; u <= h; ++u) {
                        var d = u / h;
                        o = n + (t - n) * d, l = a + (e - a) * d, s.push(o + (t + (i - t) * d - o) * d, l + (e + (r - e) * d - l) * d)
                    }
                }
            }
            class cn {
                constructor() {
                    this.reset()
                }
                begin(t, e, i) {
                    this.reset(), this.style = t, this.start = e, this.attribStart = i
                }
                end(t, e) {
                    this.attribSize = e - this.attribStart, this.size = t - this.start
                }
                reset() {
                    this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
                }
            }
            var fn = {
                    [qt.POLY]: Qs,
                    [qt.CIRC]: tn,
                    [qt.ELIP]: tn,
                    [qt.RECT]: en,
                    [qt.RREC]: nn
                },
                pn = [],
                mn = [],
                gn = {
                    buildPoly: Qs,
                    buildCircle: tn,
                    buildRectangle: en,
                    buildRoundedRectangle: nn,
                    FILL_COMMANDS: fn,
                    BATCH_POOL: pn,
                    DRAW_CALL_POOL: mn,
                    buildLine: on,
                    ArcUtils: ln,
                    BezierUtils: un,
                    QuadraticUtils: dn,
                    BatchPart: cn
                };
            class vn {
                constructor(t, e = null, i = null, r = null) {
                    this.shape = t, this.lineStyle = i, this.fillStyle = e, this.matrix = r, this.type = t.type, this.points = [], this.holes = []
                }
                clone() {
                    return new vn(this.shape, this.fillStyle, this.lineStyle, this.matrix)
                }
                destroy() {
                    this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
                }
            }
            var _n = new le,
                xn = new Se;
            class yn extends Fr {
                constructor() {
                    super(), this.uvsFloat32 = null, this.indicesUint16 = null, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.dirty = 0, this.batchDirty = -1, this.cacheDirty = -1, this.clearDirty = 0, this.drawCalls = [], this.batches = [], this.shapeIndex = 0, this._bounds = new Se, this.boundsDirty = -1, this.boundsPadding = 0, this.batchable = !1, this.indicesUint16 = null, this.uvsFloat32 = null, this.closePointEps = 1e-4
                }
                get bounds() {
                    return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
                }
                invalidate() {
                    this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
                    for (var t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].texArray.clear(), mn.push(this.drawCalls[t]);
                    this.drawCalls.length = 0;
                    for (var e = 0; e < this.batches.length; e++) {
                        var i = this.batches[e];
                        i.reset(), pn.push(i)
                    }
                    this.batches.length = 0
                }
                clear() {
                    return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this
                }
                drawShape(t, e = null, i = null, r = null) {
                    var s = new vn(t, e, i, r);
                    return this.graphicsData.push(s), this.dirty++, this
                }
                drawHole(t, e = null) {
                    if (!this.graphicsData.length) return null;
                    var i = new vn(t, null, null, e),
                        r = this.graphicsData[this.graphicsData.length - 1];
                    return i.lineStyle = r.lineStyle, r.holes.push(i), this.dirty++, this
                }
                destroy() {
                    super.destroy();
                    for (var t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy();
                    this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
                }
                containsPoint(t) {
                    for (var e = this.graphicsData, i = 0; i < e.length; ++i) {
                        var r = e[i];
                        if (r.fillStyle.visible && (r.shape && (r.matrix ? r.matrix.applyInverse(t, _n) : _n.copyFrom(t), r.shape.contains(_n.x, _n.y)))) {
                            var s = !1;
                            if (r.holes)
                                for (var n = 0; n < r.holes.length; n++) {
                                    if (r.holes[n].shape.contains(_n.x, _n.y)) {
                                        s = !0;
                                        break
                                    }
                                }
                            if (!s) return !0
                        }
                    }
                    return !1
                }
                updateBatches(t) {
                    if (this.graphicsData.length) {
                        if (this.validateBatching()) {
                            this.cacheDirty = this.dirty;
                            var e = this.uvs,
                                i = this.graphicsData,
                                r = null,
                                s = null;
                            this.batches.length > 0 && (s = (r = this.batches[this.batches.length - 1]).style);
                            for (var n = this.shapeIndex; n < i.length; n++) {
                                this.shapeIndex++;
                                var a = i[n],
                                    h = a.fillStyle,
                                    o = a.lineStyle;
                                fn[a.type].build(a), a.matrix && this.transformPoints(a.points, a.matrix);
                                for (var l = 0; l < 2; l++) {
                                    var u = 0 === l ? h : o;
                                    if (u.visible) {
                                        var d = u.texture.baseTexture,
                                            c = this.indices.length,
                                            f = this.points.length / 2;
                                        d.wrapMode = U.REPEAT, 0 === l ? this.processFill(a) : this.processLine(a);
                                        var p = this.points.length / 2 - f;
                                        0 !== p && (r && !this._compareStyles(s, u) && (r.end(c, f), r = null), r || ((r = pn.pop() || new cn).begin(u, c, f), this.batches.push(r), s = u), this.addUvs(this.points, e, u.texture, f, p, u.matrix))
                                    }
                                }
                            }
                            var m = this.indices.length,
                                g = this.points.length / 2;
                            if (r && r.end(m, g), 0 !== this.batches.length) {
                                if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) this.indicesUint16.set(this.indices);
                                else {
                                    var v = g > 65535 && t;
                                    this.indicesUint16 = v ? new Uint32Array(this.indices) : new Uint16Array(this.indices)
                                }
                                this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()
                            } else this.batchable = !0
                        }
                    } else this.batchable = !0
                }
                _compareStyles(t, e) {
                    return !(!t || !e) && (t.texture.baseTexture === e.texture.baseTexture && (t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native))
                }
                validateBatching() {
                    if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
                    for (var t = 0, e = this.graphicsData.length; t < e; t++) {
                        var i = this.graphicsData[t],
                            r = i.fillStyle,
                            s = i.lineStyle;
                        if (r && !r.texture.baseTexture.valid) return !1;
                        if (s && !s.texture.baseTexture.valid) return !1
                    }
                    return !0
                }
                packBatches() {
                    this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
                    for (var t = this.batches, e = 0, i = t.length; e < i; e++)
                        for (var r = t[e], s = 0; s < r.size; s++) {
                            var n = r.start + s;
                            this.indicesUint16[n] = this.indicesUint16[n] - r.attribStart
                        }
                }
                isBatchable() {
                    if (this.points.length > 131070) return !1;
                    for (var t = this.batches, e = 0; e < t.length; e++)
                        if (t[e].style.native) return !1;
                    return this.points.length < 2 * yn.BATCHABLE_SIZE
                }
                buildDrawCalls() {
                    for (var t = ++je._globalBatch, e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].texArray.clear(), mn.push(this.drawCalls[e]);
                    this.drawCalls.length = 0;
                    var i = this.colors,
                        r = this.textureIds,
                        s = mn.pop();
                    s || ((s = new Rr).texArray = new Or), s.texArray.count = 0, s.start = 0, s.size = 0, s.type = O.TRIANGLES;
                    var n = 0,
                        a = null,
                        h = 0,
                        o = !1,
                        l = O.TRIANGLES,
                        u = 0;
                    this.drawCalls.push(s);
                    for (var d = 0; d < this.batches.length; d++) {
                        var c = this.batches[d],
                            f = c.style,
                            p = f.texture.baseTexture;
                        o !== !!f.native && (l = (o = !!f.native) ? O.LINES : O.TRIANGLES, a = null, n = 8, t++), a !== p && (a = p, p._batchEnabled !== t && (8 === n && (t++, n = 0, s.size > 0 && ((s = mn.pop()) || ((s = new Rr).texArray = new Or), this.drawCalls.push(s)), s.start = u, s.size = 0, s.texArray.count = 0, s.type = l), p.touched = 1, p._batchEnabled = t, p._batchLocation = n, p.wrapMode = 10497, s.texArray.elements[s.texArray.count++] = p, n++)), s.size += c.size, u += c.size, h = p._batchLocation, this.addColors(i, f.color, f.alpha, c.attribSize), this.addTextureIds(r, h, c.attribSize)
                    }
                    je._globalBatch = t, this.packAttributes()
                }
                packAttributes() {
                    for (var t = this.points, e = this.uvs, i = this.colors, r = this.textureIds, s = new ArrayBuffer(3 * t.length * 4), n = new Float32Array(s), a = new Uint32Array(s), h = 0, o = 0; o < t.length / 2; o++) n[h++] = t[2 * o], n[h++] = t[2 * o + 1], n[h++] = e[2 * o], n[h++] = e[2 * o + 1], a[h++] = i[o], n[h++] = r[o];
                    this._buffer.update(s), this._indexBuffer.update(this.indicesUint16)
                }
                processFill(t) {
                    t.holes.length ? (this.processHoles(t.holes), Qs.triangulate(t, this)) : fn[t.type].triangulate(t, this)
                }
                processLine(t) {
                    on(t, this);
                    for (var e = 0; e < t.holes.length; e++) on(t.holes[e], this)
                }
                processHoles(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        fn[i.type].build(i), i.matrix && this.transformPoints(i.points, i.matrix)
                    }
                }
                calculateBounds() {
                    var t = this._bounds,
                        e = xn,
                        i = de.IDENTITY;
                    this._bounds.clear(), e.clear();
                    for (var r = 0; r < this.graphicsData.length; r++) {
                        var s = this.graphicsData[r],
                            n = s.shape,
                            a = s.type,
                            h = s.lineStyle,
                            o = s.matrix || de.IDENTITY,
                            l = 0;
                        if (h && h.visible) {
                            var u = h.alignment;
                            l = h.width, a === qt.POLY ? l *= .5 + Math.abs(.5 - u) : l *= Math.max(0, u)
                        }
                        if (i !== o && (e.isEmpty() || (t.addBoundsMatrix(e, i), e.clear()), i = o), a === qt.RECT || a === qt.RREC) {
                            var d = n;
                            e.addFramePad(d.x, d.y, d.x + d.width, d.y + d.height, l, l)
                        } else if (a === qt.CIRC) {
                            var c = n;
                            e.addFramePad(c.x, c.y, c.x, c.y, c.radius + l, c.radius + l)
                        } else if (a === qt.ELIP) {
                            var f = n;
                            e.addFramePad(f.x, f.y, f.x, f.y, f.width + l, f.height + l)
                        } else {
                            var p = n;
                            t.addVerticesMatrix(i, p.points, 0, p.points.length, l, l)
                        }
                    }
                    e.isEmpty() || t.addBoundsMatrix(e, i), t.pad(this.boundsPadding, this.boundsPadding)
                }
                transformPoints(t, e) {
                    for (var i = 0; i < t.length / 2; i++) {
                        var r = t[2 * i],
                            s = t[2 * i + 1];
                        t[2 * i] = e.a * r + e.c * s + e.tx, t[2 * i + 1] = e.b * r + e.d * s + e.ty
                    }
                }
                addColors(t, e, i, r) {
                    for (var s = Rt((e >> 16) + (65280 & e) + ((255 & e) << 16), i); r-- > 0;) t.push(s)
                }
                addTextureIds(t, e, i) {
                    for (; i-- > 0;) t.push(e)
                }
                addUvs(t, e, i, r, s, n = null) {
                    for (var a = 0, h = e.length, o = i.frame; a < s;) {
                        var l = t[2 * (r + a)],
                            u = t[2 * (r + a) + 1];
                        if (n) {
                            var d = n.a * l + n.c * u + n.tx;
                            u = n.b * l + n.d * u + n.ty, l = d
                        }
                        a++, e.push(l / o.width, u / o.height)
                    }
                    var c = i.baseTexture;
                    (o.width < c.width || o.height < c.height) && this.adjustUvs(e, i, h, s)
                }
                adjustUvs(t, e, i, r) {
                    for (var s = e.baseTexture, n = 1e-6, a = i + 2 * r, h = e.frame, o = h.width / s.width, l = h.height / s.height, u = h.x / h.width, d = h.y / h.height, c = Math.floor(t[i] + n), f = Math.floor(t[i + 1] + n), p = i + 2; p < a; p += 2) c = Math.min(c, Math.floor(t[p] + n)), f = Math.min(f, Math.floor(t[p + 1] + n));
                    u -= c, d -= f;
                    for (var m = i; m < a; m += 2) t[m] = (t[m] + u) * o, t[m + 1] = (t[m + 1] + d) * l
                }
            }
            yn.BATCHABLE_SIZE = 100;
            class Tn extends Js {
                constructor(t = {}) {
                    super(t), this.width = 0, this.alignment = .5, this.native = !1, this.cap = $s.BUTT, this.join = Ws.MITER, this.miterLimit = 10
                }
                clone() {
                    var t = new Tn({
                        bindingScreen: this.bindingScreen
                    });
                    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t
                }
                reset() {
                    super.reset(), this.color = 0, this.alignment = .5, this.width = 0, this.native = !1
                }
            }
            var bn = new Float32Array(3),
                En = {};
            class wn extends Me {
                constructor(t = null, e = {}) {
                    super(), this._geometry = t || new yn, this._geometry.refCount++, this.bindingScreen = e.bindingScreen, this.shader = null, this.state = ir.for2d(), this._fillStyle = new Js(e), this._lineStyle = new Tn(e), this._matrix = null, this._holeMode = !1, this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this.pluginName = "batch", this._transformID = -1, this.tint = 16777215, this.blendMode = R.NORMAL
                }
                get geometry() {
                    return this._geometry
                }
                clone() {
                    return this.finishPoly(), new wn(this._geometry)
                }
                set blendMode(t) {
                    this.state.blendMode = t
                }
                get blendMode() {
                    return this.state.blendMode
                }
                get tint() {
                    return this._tint
                }
                set tint(t) {
                    this._tint = t
                }
                get fill() {
                    return this._fillStyle
                }
                get line() {
                    return this._lineStyle
                }
                lineStyle(t = null) {
                    if ("number" == typeof t) {
                        var e = arguments;
                        t = {
                            width: e[0] || 0,
                            color: e[1] || 0,
                            alpha: void 0 !== e[2] ? e[2] : 1,
                            alignment: void 0 !== e[3] ? e[3] : .5,
                            native: !!e[4]
                        }
                    }
                    return this.lineTextureStyle(t)
                }
                lineTextureStyle(t) {
                    if ("number" == typeof t) {
                        var [e, i, r, s, n, a, h] = arguments;
                        t = {
                            width: e,
                            texture: i,
                            color: r,
                            alpha: s,
                            matrix: n,
                            alignment: a,
                            native: h
                        }, Object.keys(t).forEach((e => void 0 === t[e] && delete t[e]))
                    }
                    t = Object.assign({
                        width: 0,
                        texture: ti.getWHITE(this.bindingScreen),
                        color: t && t.texture ? 16777215 : 0,
                        alpha: 1,
                        matrix: null,
                        alignment: .5,
                        native: !1,
                        cap: $s.BUTT,
                        join: Ws.MITER,
                        miterLimit: 10
                    }, t), this.currentPath && this.startPoly();
                    var o = t.width > 0 && t.alpha > 0;
                    return o ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, {
                        visible: o
                    }, t)) : this._lineStyle.reset(), this
                }
                startPoly() {
                    if (this.currentPath) {
                        var t = this.currentPath.points,
                            e = this.currentPath.points.length;
                        e > 2 && (this.drawShape(this.currentPath), this.currentPath = new he, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
                    } else this.currentPath = new he, this.currentPath.closeStroke = !1
                }
                finishPoly() {
                    this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
                }
                moveTo(t, e) {
                    return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this
                }
                lineTo(t, e) {
                    this.currentPath || this.moveTo(0, 0);
                    var i = this.currentPath.points,
                        r = i[i.length - 2],
                        s = i[i.length - 1];
                    return r === t && s === e || i.push(t, e), this
                }
                _initCurve(t = 0, e = 0) {
                    this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
                }
                quadraticCurveTo(t, e, i, r) {
                    this._initCurve();
                    var s = this.currentPath.points;
                    return 0 === s.length && this.moveTo(0, 0), dn.curveTo(t, e, i, r, s), this
                }
                bezierCurveTo(t, e, i, r, s, n) {
                    return this._initCurve(), un.curveTo(t, e, i, r, s, n, this.currentPath.points), this
                }
                arcTo(t, e, i, r, s) {
                    this._initCurve(t, e);
                    var n = this.currentPath.points,
                        a = ln.curveTo(t, e, i, r, s, n);
                    if (a) {
                        var {
                            cx: h,
                            cy: o,
                            radius: l,
                            startAngle: u,
                            endAngle: d,
                            anticlockwise: c
                        } = a;
                        this.arc(h, o, l, u, d, c)
                    }
                    return this
                }
                arc(t, e, i, r, s, n = !1) {
                    if (r === s) return this;
                    if (!n && s <= r ? s += ee : n && r <= s && (r += ee), 0 === s - r) return this;
                    var a = t + Math.cos(r) * i,
                        h = e + Math.sin(r) * i,
                        o = this._geometry.closePointEps,
                        l = this.currentPath ? this.currentPath.points : null;
                    if (l) {
                        var u = Math.abs(l[l.length - 2] - a),
                            d = Math.abs(l[l.length - 1] - h);
                        u < o && d < o || l.push(a, h)
                    } else this.moveTo(a, h), l = this.currentPath.points;
                    return ln.arc(a, h, t, e, i, r, s, n, l), this
                }
                beginFill(t = 0, e = 1) {
                    return this.beginTextureFill({
                        texture: ti.getWHITE(this.bindingScreen),
                        color: t,
                        alpha: e
                    })
                }
                beginTextureFill(t) {
                    if (t instanceof ti) {
                        var [e, i, r, s] = arguments;
                        t = {
                            texture: e,
                            color: i,
                            alpha: r,
                            matrix: s
                        }, Object.keys(t).forEach((e => void 0 === t[e] && delete t[e]))
                    }
                    t = Object.assign({
                        texture: ti.getWHITE(this.bindingScreen),
                        color: 16777215,
                        alpha: 1,
                        matrix: null
                    }, t), this.currentPath && this.startPoly();
                    var n = t.alpha > 0;
                    return n ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {
                        visible: n
                    }, t)) : this._fillStyle.reset(), this
                }
                endFill() {
                    return this.finishPoly(), this._fillStyle.reset(), this
                }
                drawRect(t, e, i, r) {
                    return this.drawShape(new se(t, e, i, r))
                }
                drawRoundedRect(t, e, i, r, s) {
                    return this.drawShape(new oe(t, e, i, r, s))
                }
                drawCircle(t, e, i) {
                    return this.drawShape(new ne(t, e, i))
                }
                drawEllipse(t, e, i, r) {
                    return this.drawShape(new ae(t, e, i, r))
                }
                drawPolygon(...t) {
                    var e, i = !0,
                        r = t[0];
                    r.points ? (i = r.closeStroke, e = r.points) : e = Array.isArray(t[0]) ? t[0] : t;
                    var s = new he(e);
                    return s.closeStroke = i, this.drawShape(s), this
                }
                drawShape(t) {
                    return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
                }
                clear() {
                    return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this
                }
                isFastRect() {
                    var t = this._geometry.graphicsData;
                    return 1 === t.length && t[0].shape.type === qt.RECT && !(t[0].lineStyle.visible && t[0].lineStyle.width)
                }
                _render(t) {
                    this.finishPoly();
                    var e = this._geometry,
                        i = t.context.supports.uint32Indices;
                    e.updateBatches(i), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t))
                }
                _populateBatches() {
                    var t = this._geometry,
                        e = this.blendMode,
                        i = t.batches.length;
                    this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.batches.length = i, this.vertexData = new Float32Array(t.points);
                    for (var r = 0; r < i; r++) {
                        var s = t.batches[r],
                            n = s.style.color,
                            a = new Float32Array(this.vertexData.buffer, 4 * s.attribStart * 2, 2 * s.attribSize),
                            h = new Float32Array(t.uvsFloat32.buffer, 4 * s.attribStart * 2, 2 * s.attribSize),
                            o = {
                                vertexData: a,
                                blendMode: e,
                                indices: new Uint16Array(t.indicesUint16.buffer, 2 * s.start, s.size),
                                uvs: h,
                                _batchRGB: Ct(n),
                                _tintRGB: n,
                                _texture: s.style.texture,
                                alpha: s.style.alpha,
                                worldAlpha: 1
                            };
                        this.batches[r] = o
                    }
                }
                _renderBatched(t) {
                    if (this.batches.length) {
                        t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
                        for (var e = 0, i = this.batches.length; e < i; e++) {
                            var r = this.batches[e];
                            r.worldAlpha = this.worldAlpha * r.alpha, t.plugins[this.pluginName].render(r)
                        }
                    }
                }
                _renderDirect(t) {
                    var e = this._resolveDirectShader(t),
                        i = this._geometry,
                        r = this.tint,
                        s = this.worldAlpha,
                        n = e.uniforms,
                        a = i.drawCalls;
                    n.translationMatrix = this.transform.worldTransform, n.tint[0] = (r >> 16 & 255) / 255 * s, n.tint[1] = (r >> 8 & 255) / 255 * s, n.tint[2] = (255 & r) / 255 * s, n.tint[3] = s, t.shader.bind(e), t.geometry.bind(i, e), t.state.set(this.state);
                    for (var h = 0, o = a.length; h < o; h++) this._renderDrawCallDirect(t, i.drawCalls[h])
                }
                _renderDrawCallDirect(t, e) {
                    for (var {
                            texArray: i,
                            type: r,
                            size: s,
                            start: n
                        } = e, a = i.count, h = 0; h < a; h++) t.texture.bind(i.elements[h], h);
                    t.geometry.draw(r, s, n)
                }
                _resolveDirectShader(t) {
                    var e = this.shader,
                        i = this.pluginName;
                    if (!e) {
                        if (!En[i]) {
                            for (var r = t.plugins.batch.MAX_TEXTURES, s = new Int32Array(r), n = 0; n < r; n++) s[n] = n;
                            var a = {
                                    tint: new Float32Array([1, 1, 1, 1]),
                                    translationMatrix: new de,
                                    default: vi.from({
                                        uSamplers: s
                                    }, !0)
                                },
                                h = t.plugins[i]._shader.program;
                            En[i] = new er(h, a)
                        }
                        e = En[i]
                    }
                    return e
                }
                _calculateBounds() {
                    this.finishPoly();
                    var t = this._geometry;
                    if (t.graphicsData.length) {
                        var {
                            minX: e,
                            minY: i,
                            maxX: r,
                            maxY: s
                        } = t.bounds;
                        this._bounds.addFrame(this.transform, e, i, r, s)
                    }
                }
                containsPoint(t) {
                    return this.worldTransform.applyInverse(t, wn._TEMP_POINT), this._geometry.containsPoint(wn._TEMP_POINT)
                }
                calculateTints() {
                    if (this.batchTint !== this.tint) {
                        this.batchTint = this.tint;
                        for (var t = Ct(this.tint, bn), e = 0; e < this.batches.length; e++) {
                            var i = this.batches[e],
                                r = i._batchRGB,
                                s = (t[0] * r[0] * 255 << 16) + (t[1] * r[1] * 255 << 8) + (0 | t[2] * r[2] * 255);
                            i._tintRGB = (s >> 16) + (65280 & s) + ((255 & s) << 16)
                        }
                    }
                }
                calculateVertices() {
                    var t = this.transform._worldID;
                    if (this._transformID !== t) {
                        this._transformID = t;
                        for (var e = this.transform.worldTransform, i = e.a, r = e.b, s = e.c, n = e.d, a = e.tx, h = e.ty, o = this._geometry.points, l = this.vertexData, u = 0, d = 0; d < o.length; d += 2) {
                            var c = o[d],
                                f = o[d + 1];
                            l[u++] = i * c + s * f + a, l[u++] = n * f + r * c + h
                        }
                    }
                }
                closePath() {
                    var t = this.currentPath;
                    return t && (t.closeStroke = !0), this
                }
                setMatrix(t) {
                    return this._matrix = t, this
                }
                beginHole() {
                    return this.finishPoly(), this._holeMode = !0, this
                }
                endHole() {
                    return this.finishPoly(), this._holeMode = !1, this
                }
                destroy(t) {
                    this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, super.destroy(t)
                }
            }
            wn._TEMP_POINT = new le, Cr.registerPlugin("interaction", Be), Cr.registerPlugin("batch", Xr), us.registerPlugin(Vs), us.registerPlugin(fs),
                function(t) {
                    var e;
                    if (!(null === (e = null == t ? void 0 : t.systems) || void 0 === e ? void 0 : e.ShaderSystem)) throw new Error("Unable to patch ShaderSystem, class not found.");
                    var {
                        ShaderSystem: i
                    } = t.systems, r = !1;
                    try {
                        i.prototype.systemCheck.call(null), r = !1
                    } catch (t) {
                        r = !0
                    }
                    r && Object.assign(i.prototype, {
                        systemCheck() {},
                        syncUniforms(t, e) {
                            var {
                                shader: i,
                                renderer: r
                            } = this;
                            ! function(t, e, i, r, s) {
                                var n = 0,
                                    a = null,
                                    h = null,
                                    o = s.gl;
                                for (var l in t.uniforms) {
                                    var u = e[l],
                                        d = r[l],
                                        c = i[l],
                                        f = t.uniforms[l];
                                    u ? "float" === u.type && 1 === u.size ? d !== c.value && (c.value = d, o.uniform1f(c.location, d)) : "sampler2D" !== u.type && "samplerCube" !== u.type && "sampler2DArray" !== u.type || 1 !== u.size || u.isArray ? "mat3" === u.type && 1 === u.size ? void 0 !== f.a ? o.uniformMatrix3fv(c.location, !1, d.toArray(!0)) : o.uniformMatrix3fv(c.location, !1, d) : "vec2" === u.type && 1 === u.size ? void 0 !== f.x ? (a = d, (h = c.value)[0] === a.x && h[1] === a.y || (h[0] = a.x, h[1] = a.y, o.uniform2f(c.location, a.x, a.y))) : (a = d, (h = c.value)[0] === a[0] && h[1] === a[1] || (h[0] = a[0], h[1] = a[1], o.uniform2f(c.location, a[0], a[1]))) : "vec4" === u.type && 1 === u.size ? void 0 !== f.width ? (a = d, (h = c.value)[0] === a.x && h[1] === a.y && h[2] === a.width && h[3] === a.height || (h[0] = a.x, h[1] = a.y, h[2] = a.width, h[3] = a.height, o.uniform4f(c.location, a.x, a.y, a.width, a.height))) : (a = d, (h = c.value)[0] === a[0] && h[1] === a[1] && h[2] === a[2] && h[3] === a[3] || (h[0] = a[0], h[1] = a[1], h[2] = a[2], h[3] = a[3], o.uniform4f(c.location, a[0], a[1], a[2], a[3]))) : (1 === u.size ? qs : Zs)[u.type].call(null, o, c.location, c.value, d) : (s.texture.bind(d, n), c.value !== n && (c.value = n, o.uniform1i(c.location, n)), n++) : f.group && s.shader.syncUniformGroup(d)
                                }
                            }(t, i.program.uniformData, e.uniformData, t.uniforms, r)
                        }
                    })
                }(Hr);
            var Sn = "5.3.9",
                An = () => {
                    i.log("__magic_sdk_subpackge_product_check_pixi__")
                };
            Object.defineProperty(globalThis, "PIXI", {
                value: e
            })
        })()
    }()
} catch (t) {
    console.error("catch sdkSubPackage: pixi error: ", t)
}