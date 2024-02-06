try {
    ! function() {
        let e, t = "getKanataGlobalVar";
        globalThis[t] ? e = globalThis[t] : void 0 !== globalThis.WeixinJSBridge && globalThis.WeixinJSBridge[t] && (e = globalThis.WeixinJSBridge[t]);
        var i, n, {
            wxConsole: r
        } = e();
        i = this, n = function(e) {
            "use strict";
            e.Puppet = "undefined" != typeof NativeGlobal ? NativeGlobal.Puppet : void 0, e.CREATE_INSTANCE = (t, i, n, r, o, s) => {
                var a = globalThis.KANATA_INSTANCES = globalThis.KANATA_INSTANCES || new Map;
                if (a.get(t)) return a.get(t);
                var u, c, l = {
                        exports: {}
                    },
                    f = l.exports;
                return u = this, c = function(s) {
                    var a, u, c, l, f, h, p, d, _, y, v, g, w, b, E, m, S, M, T, O, A, k, D, C, B, P, R, F, N;
                    s.EVertexFormat = void 0, (a = s.EVertexFormat || (s.EVertexFormat = {}))[a.FLOAT = 0] = "FLOAT", a[a.FLOAT2 = 1] = "FLOAT2", a[a.FLOAT3 = 2] = "FLOAT3", a[a.FLOAT4 = 3] = "FLOAT4", a[a.BYTE4 = 4] = "BYTE4", a[a.BYTE4N = 5] = "BYTE4N", a[a.UBYTE4 = 6] = "UBYTE4", a[a.UBYTE4N = 7] = "UBYTE4N", a[a.SHORT2 = 8] = "SHORT2", a[a.SHORT2N = 9] = "SHORT2N", a[a.SHORT4 = 10] = "SHORT4", a[a.SHORT4N = 11] = "SHORT4N", a[a.UINT10_N2 = 12] = "UINT10_N2", s.EVertexStep = void 0, (u = s.EVertexStep || (s.EVertexStep = {}))[u.PER_VERTEX = 0] = "PER_VERTEX", u[u.PER_INSTANCE = 1] = "PER_INSTANCE", s.EIndexType = void 0, (c = s.EIndexType || (s.EIndexType = {}))[c.NONE = 1] = "NONE", c[c.UINT16 = 2] = "UINT16", c[c.UINT32 = 3] = "UINT32", s.ETextureType = void 0, (l = s.ETextureType || (s.ETextureType = {}))[l.D2 = 0] = "D2", l[l.Cube = 1] = "Cube", l[l.D2Array = 2] = "D2Array", l[l.D3 = 3] = "D3", s.ETextureFormat = void 0, (f = s.ETextureFormat || (s.ETextureFormat = {}))[f.RGBA8 = 0] = "RGBA8", f[f.SRGBA8 = 1] = "SRGBA8", f[f.RGB10A2 = 2] = "RGB10A2", f[f.RG8 = 3] = "RG8", f[f.R8 = 4] = "R8", f[f.RGBA32F = 5] = "RGBA32F", f[f.RGBA16F = 6] = "RGBA16F", f[f.RG11B10F = 7] = "RG11B10F", f[f.RGB8 = 8] = "RGB8", f[f.RGB16F = 9] = "RGB16F", f[f.RGB32F = 10] = "RGB32F", f[f.Depth_Low = 20] = "Depth_Low", f[f.Depth_High = 21] = "Depth_High", f[f.Depth_Stencil = 22] = "Depth_Stencil", f[f.RGBA4 = 23] = "RGBA4", f[f.RGB565 = 24] = "RGB565", f[f.RGB5A1 = 25] = "RGB5A1", f[f.ETC1RGB8 = 100] = "ETC1RGB8", f[f.ETC2RGB8 = 110] = "ETC2RGB8", f[f.ETC2RGBA8 = 111] = "ETC2RGBA8", f[f.PVRTC2RGBV1 = 120] = "PVRTC2RGBV1", f[f.PVRTC4RGBV1 = 121] = "PVRTC4RGBV1", f[f.PVRTC2RGBAV1 = 122] = "PVRTC2RGBAV1", f[f.PVRTC4RGBAV1 = 123] = "PVRTC4RGBAV1", f[f.ASTC4x4 = 140] = "ASTC4x4", f[f.ASTC5x5 = 141] = "ASTC5x5", f[f.ASTC6x6 = 142] = "ASTC6x6", f[f.ASTC8x6 = 143] = "ASTC8x6", f[f.ASTC8x8 = 144] = "ASTC8x8", f[f.DXT1 = 150] = "DXT1", f[f.DXT3 = 151] = "DXT3", f[f.DXT5 = 152] = "DXT5", s.EWrapMode = void 0, (h = s.EWrapMode || (s.EWrapMode = {}))[h.REPEAT = 1] = "REPEAT", h[h.CLAMP_TO_EDGE = 2] = "CLAMP_TO_EDGE", h[h.MIRRORED_REPEAT = 3] = "MIRRORED_REPEAT", s.EFilterMode = void 0, (p = s.EFilterMode || (s.EFilterMode = {}))[p.NEAREST = 1] = "NEAREST", p[p.LINEAR = 2] = "LINEAR", p[p.NEAREST_MIPMAP_NEAREST = 3] = "NEAREST_MIPMAP_NEAREST", p[p.NEAREST_MIPMAP_LINEAR = 4] = "NEAREST_MIPMAP_LINEAR", p[p.LINEAR_MIPMAP_NEAREST = 5] = "LINEAR_MIPMAP_NEAREST", p[p.LINEAR_MIPMAP_LINEAR = 6] = "LINEAR_MIPMAP_LINEAR", s.EUniformType = void 0, (d = s.EUniformType || (s.EUniformType = {}))[d.FLOAT = 0] = "FLOAT", d[d.FLOAT2 = 1] = "FLOAT2", d[d.FLOAT3 = 2] = "FLOAT3", d[d.FLOAT4 = 3] = "FLOAT4", d[d.MAT2 = 4] = "MAT2", d[d.MAT3 = 5] = "MAT3", d[d.MAT4 = 6] = "MAT4", d[d.SAMPLER = 7] = "SAMPLER", s.ECullMode = void 0, (_ = s.ECullMode || (s.ECullMode = {}))[_.NONE = 0] = "NONE", _[_.FRONT = 1] = "FRONT", _[_.BACK = 2] = "BACK", s.EFaceWinding = void 0, (y = s.EFaceWinding || (s.EFaceWinding = {}))[y.CCW = 1] = "CCW", y[y.CW = 2] = "CW", s.ECompareFunc = void 0, (v = s.ECompareFunc || (s.ECompareFunc = {}))[v.LESS = 1] = "LESS", v[v.LEQUAL = 2] = "LEQUAL", v[v.EQUAL = 3] = "EQUAL", v[v.GEQUAL = 4] = "GEQUAL", v[v.GREATER = 5] = "GREATER", v[v.NOTEQUAL = 6] = "NOTEQUAL", v[v.NEVER = 7] = "NEVER", v[v.ALWAYS = 8] = "ALWAYS", s.EStencilOp = void 0, (g = s.EStencilOp || (s.EStencilOp = {}))[g.ZERO = 0] = "ZERO", g[g.KEEP = 1] = "KEEP", g[g.REPLACE = 2] = "REPLACE", g[g.INCR_WRAP = 3] = "INCR_WRAP", g[g.INCR = 4] = "INCR", g[g.DECR_WRAP = 5] = "DECR_WRAP", g[g.DECR = 6] = "DECR", g[g.INVERT = 7] = "INVERT", s.EBlendFactor = void 0, (w = s.EBlendFactor || (s.EBlendFactor = {}))[w.ZERO = 0] = "ZERO", w[w.ONE = 1] = "ONE", w[w.SRC_COLOR = 2] = "SRC_COLOR", w[w.ONE_MINUS_SRC_COLOR = 3] = "ONE_MINUS_SRC_COLOR", w[w.SRC_ALPHA = 4] = "SRC_ALPHA", w[w.ONE_MINUS_SRC_ALPHA = 5] = "ONE_MINUS_SRC_ALPHA", w[w.DST_ALPHA = 6] = "DST_ALPHA", w[w.ONE_MINUS_DST_ALPHA = 7] = "ONE_MINUS_DST_ALPHA", w[w.DST_COLOR = 8] = "DST_COLOR", w[w.ONE_MINUS_DST_COLOR = 9] = "ONE_MINUS_DST_COLOR", w[w.SRC_ALPHA_SATURATE = 10] = "SRC_ALPHA_SATURATE", w[w.CONSTANT_COLOR = 11] = "CONSTANT_COLOR", w[w.ONE_MINUS_CONSTANT_COLOR = 12] = "ONE_MINUS_CONSTANT_COLOR", s.EBlendEquation = void 0, (b = s.EBlendEquation || (s.EBlendEquation = {}))[b.FUNC_ADD = 0] = "FUNC_ADD", b[b.FUNC_SUBTRACT = 1] = "FUNC_SUBTRACT", b[b.FUNC_REVERSE_SUBTRACT = 2] = "FUNC_REVERSE_SUBTRACT", b[b.MIN = 3] = "MIN", b[b.MAX = 4] = "MAX", s.EColorMask = void 0, (E = s.EColorMask || (s.EColorMask = {}))[E.NONE = 16] = "NONE", E[E.R = 1] = "R", E[E.G = 2] = "G", E[E.B = 4] = "B", E[E.A = 8] = "A", E[E.RGB = 7] = "RGB", E[E.RGBA = 15] = "RGBA", s.EPixelType = void 0, (m = s.EPixelType || (s.EPixelType = {}))[m.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", m[m.FLOAT = 5126] = "FLOAT", m[m.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", m[m.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", m[m.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", s.ELoadAction = void 0, (S = s.ELoadAction || (s.ELoadAction = {}))[S.CLEAR = 0] = "CLEAR", S[S.LOAD = 1] = "LOAD", S[S.DONTCARE = 2] = "DONTCARE", s.EDataModelType = void 0, (M = s.EDataModelType || (s.EDataModelType = {}))[M.AnimationClip = 1] = "AnimationClip", M[M.SkeletonBoneInverse = 2] = "SkeletonBoneInverse", s.EMeshRenderType = void 0, (T = s.EMeshRenderType || (s.EMeshRenderType = {}))[T.UnKnown = 0] = "UnKnown", T[T.Static3D = 1] = "Static3D", T[T.Skinned3D = 2] = "Skinned3D", T[T.UI = 3] = "UI", s.EPrimitiveType = void 0, (O = s.EPrimitiveType || (s.EPrimitiveType = {}))[O.TRIANGLES = 0] = "TRIANGLES", O[O.TRIANGLE_STRIP = 1] = "TRIANGLE_STRIP", O[O.LINES = 2] = "LINES", O[O.LINE_STRIP = 3] = "LINE_STRIP", O[O.POINTS = 4] = "POINTS", O[O.ZERO = 5] = "ZERO", s.EShadowMode = void 0, (A = s.EShadowMode || (s.EShadowMode = {}))[A.None = 0] = "None", A[A.OneCascade_PCF = 1] = "OneCascade_PCF", A[A.TwoCascade_PCF = 2] = "TwoCascade_PCF", A[A.FourCascade_PCF = 4] = "FourCascade_PCF", A[A.PCSS = 5] = "PCSS", s.EShadowFitMode = void 0, (k = s.EShadowFitMode || (s.EShadowFitMode = {}))[k.FitFrustum = 0] = "FitFrustum", k[k.FitObjects = 1] = "FitObjects", s.EVertexLayoutUsage = void 0, (D = s.EVertexLayoutUsage || (s.EVertexLayoutUsage = {}))[D.CUSTOM = 0] = "CUSTOM", D[D.POSITION = 1] = "POSITION", D[D.NORMAL = 2] = "NORMAL", D[D.TANGENT = 3] = "TANGENT", D[D.UV0 = 4] = "UV0", D[D.UV1 = 5] = "UV1", D[D.UV2 = 6] = "UV2", D[D.UV3 = 7] = "UV3", D[D.COLOR = 8] = "COLOR", D[D.BONEINDEX = 9] = "BONEINDEX", D[D.BONEWEIGHT = 10] = "BONEWEIGHT", s.EVertexBatchOperator = void 0, (C = s.EVertexBatchOperator || (s.EVertexBatchOperator = {}))[C.MatrixMultiple = 0] = "MatrixMultiple", C[C.UVST = 1] = "UVST", s.EAnimationBlendType = void 0, (B = s.EAnimationBlendType || (s.EAnimationBlendType = {}))[B.Override = 0] = "Override", B[B.Additive = 1] = "Additive", s.EUseDefaultAddedAction = void 0, (P = s.EUseDefaultAddedAction || (s.EUseDefaultAddedAction = {}))[P.Ignore = 0] = "Ignore", P[P.Refresh = 1] = "Refresh", s.EUseDefaultRetainedAction = void 0, (R = s.EUseDefaultRetainedAction || (s.EUseDefaultRetainedAction = {}))[R.Keep = 0] = "Keep", R[R.Refresh = 1] = "Refresh", R[R.WriteBack = 2] = "WriteBack", s.EUseDefaultRemovedAction = void 0, (F = s.EUseDefaultRemovedAction || (s.EUseDefaultRemovedAction = {}))[F.Keep = 0] = "Keep", F[F.Clear = 1] = "Clear", F[F.WriteBack = 2] = "WriteBack", s.ESkinnedSkeletonFlag = void 0, (N = s.ESkinnedSkeletonFlag || (s.ESkinnedSkeletonFlag = {}))[N.Use3x4Matrix = 1] = "Use3x4Matrix", N[N.UseTextureMatrix = 2] = "UseTextureMatrix";
                    var x, I, U, L, V, z = {
                            size: 21,
                            resetFlag: 0,
                            renderPass: 1,
                            canvasWidth: 2,
                            canvasHeight: 3,
                            uniforms: 4,
                            useInstanceOrNeverTranspose: 20
                        },
                        j = 65472,
                        G = {
                            size: 14,
                            rotation: 0,
                            position: 1,
                            scale: 3,
                            worldMatrix: 5
                        },
                        W = {
                            size: 27,
                            dfRotationType: 1,
                            rotationType: 0,
                            rotation: 1,
                            position: 5,
                            scale: 8,
                            worldOffset: 11,
                            worldMatrix: 11
                        },
                        H = {
                            size: 2,
                            layer: 0,
                            mixedLayerMask: 1
                        },
                        K = {
                            size: 7,
                            active: 0,
                            dfActive: 1,
                            layer: 1,
                            boundingBallCenter: 2,
                            boundingBallRadius: 5,
                            entityId: 6
                        },
                        Y = {
                            size: 147,
                            view: 0,
                            depth: 1,
                            active: 2,
                            fov: 3,
                            aspect: 4,
                            near: 5,
                            far: 6,
                            up: 7,
                            eye: 10,
                            orthoSize: 13,
                            isProjection: 14,
                            cullingMask: 15,
                            canvasSizeY: 16,
                            targetTransform: 17,
                            viewMatrix: 18,
                            projectionMatrix: 34,
                            viewMatrixInverse: 50,
                            viewMatrix2D: 66,
                            projectionMatrix2D: 82,
                            viewMatrixInverse2D: 98,
                            manualMatrix: 114,
                            layerCullDistances: 115
                        },
                        J = {
                            size: 78,
                            view: 0,
                            depth: 1,
                            active: 2,
                            shadowDistance: 3,
                            shadowMode: 4,
                            shadowFilterMode: 5,
                            lightDir: 6,
                            bounds: 9,
                            lightSpaceMatrices: 14
                        },
                        Q = {
                            dynamicBatch: 0,
                            skinHandle: 1,
                            castShadow: 2,
                            bindTarget: 3,
                            start: 4,
                            size: 5,
                            materialId: 0,
                            vertexBufferId: 1,
                            indexBufferId: 2,
                            startIndex: 3,
                            numIndices: 4
                        },
                        X = {
                            size: 6,
                            useMaterialStates: 0,
                            fstencil: 1,
                            bstencil: 2,
                            blendRGBA: 3,
                            colorDepth: 4,
                            state: 5
                        },
                        q = {
                            size: 14,
                            renderQueue: 0,
                            effect: 1,
                            uniformBlock: 2,
                            fstencilMask: 3,
                            bstencilMask: 4,
                            blendRGBAMask: 5,
                            colorDepthMask: 6,
                            stateMask: 7,
                            fstencil: 8,
                            bstencil: 9,
                            blendRGBA: 10,
                            colorDepth: 11,
                            state: 12,
                            useInstance: 13
                        },
                        Z = {
                            boneInverseModelId: 0,
                            boneIndices: 1,
                            perBoneIndices: 1,
                            perBoneEntityId: 1,
                            perBoneMatrixOld: 16,
                            perBoneMatrixNew: 12
                        },
                        $ = {
                            stiffness: 0,
                            elasticity: 1,
                            damping: 2
                        };
                    s.EEventType = void 0, (x = s.EEventType || (s.EEventType = {}))[x.SetRootEntity = 1] = "SetRootEntity", x[x.AddChild = 2] = "AddChild", x[x.AddChildAtIndex = 3] = "AddChildAtIndex", x[x.RemoveFromParent = 4] = "RemoveFromParent", x[x.DisperseSubTree = 5] = "DisperseSubTree", x[x.BindToBone = 6] = "BindToBone", x[x.BindToBones = 7] = "BindToBones", x[x.UnBindFromBone = 8] = "UnBindFromBone", x[x.UnBindFromBones = 9] = "UnBindFromBones", x[x.EntityCommandActive = 10] = "EntityCommandActive", x[x.EntityCommandInActive = 11] = "EntityCommandInActive", s.EDracoErrorCode = void 0, (I = s.EDracoErrorCode || (s.EDracoErrorCode = {}))[I.kDecodeErrorNone = 0] = "kDecodeErrorNone", I[I.kDecodeErrorDecodeGeometryType = 1] = "kDecodeErrorDecodeGeometryType", I[I.kDecodeErrorDracoDecode = 2] = "kDecodeErrorDracoDecode", I[I.kDecodeErrorAttributeEmpty = 3] = "kDecodeErrorAttributeEmpty", I[I.kDecodeErrorAttributeSizeNotEqual = 4] = "kDecodeErrorAttributeSizeNotEqual", I[I.kDecodeErrorDecodeTypeError = 5] = "kDecodeErrorDecodeTypeError", s.EDracoGeometryType = void 0, (U = s.EDracoGeometryType || (s.EDracoGeometryType = {}))[U.kGeometryTypeInvalid = -1] = "kGeometryTypeInvalid", U[U.kGeometryTypeTriangleMesh = 0] = "kGeometryTypeTriangleMesh", U[U.kGeometryTypePointCloud = 1] = "kGeometryTypePointCloud", s.EDracoDecodeType = void 0, (L = s.EDracoDecodeType || (s.EDracoDecodeType = {}))[L.kDecodeTypeCross = 0] = "kDecodeTypeCross", s.EDracoDataType = void 0, (V = s.EDracoDataType || (s.EDracoDataType = {}))[V.DT_INVALID = 0] = "DT_INVALID", V[V.DT_INT8 = 1] = "DT_INT8", V[V.DT_UINT8 = 2] = "DT_UINT8", V[V.DT_INT16 = 3] = "DT_INT16", V[V.DT_UINT16 = 4] = "DT_UINT16", V[V.DT_INT32 = 5] = "DT_INT32", V[V.DT_UINT32 = 6] = "DT_UINT32", V[V.DT_INT64 = 7] = "DT_INT64", V[V.DT_UINT64 = 8] = "DT_UINT64", V[V.DT_FLOAT32 = 9] = "DT_FLOAT32", V[V.DT_FLOAT64 = 10] = "DT_FLOAT64", V[V.DT_BOOL = 11] = "DT_BOOL", V[V.DT_TYPES_COUNT = 12] = "DT_TYPES_COUNT";
                    var ee = function(e, t) {
                        return ee = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                        }, ee(e, t)
                    };

                    function te(e, t) {
                        function i() {
                            this.constructor = e
                        }
                        ee(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                    }

                    function ie() {
                        for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
                        var n = Array(e),
                            r = 0;
                        for (t = 0; t < i; t++)
                            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, r++) n[r] = o[s];
                        return n
                    }
                    var ne = "undefined" != typeof wxNativeConsole,
                        re = "undefined" != typeof Reporter,
                        oe = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.version : "unknown",
                        se = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.updateTime : "unknown";
                    "string" == typeof oe && (oe = oe.replace(" ", "")), "string" == typeof se && (se = se.replace(" ", "-"));
                    var ae, ue = oe + "," + se;

                    function ce(e) {
                        return e.replace(/,/g, "，")
                    }! function(e) {
                        e[e.Default = 1e3] = "Default"
                    }(ae || (ae = {}));
                    var le, fe, he = {
                            backendVersion: 0,
                            backendCommit: "BeforeInit",
                            init: function(e, t) {
                                this.backendVersion = e[0] << 16 + e[1], this.backendCommit = t
                            },
                            info: function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                ne && (null === wxNativeConsole || void 0 === wxNativeConsole || wxNativeConsole.log.apply(wxNativeConsole, ie(["[kanata]"], e))), console.log.apply(console, ie(["[kanata]"], e))
                            },
                            warn: function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                ne && (null === wxNativeConsole || void 0 === wxNativeConsole || wxNativeConsole.warn.apply(wxNativeConsole, ie(["[kanata]"], e))), console.warn.apply(console, ie(["[kanata]"], e))
                            },
                            error: function(e) {
                                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                                if ("string" == typeof e && (e = new Error(e)), ne && (null === wxNativeConsole || void 0 === wxNativeConsole || wxNativeConsole.error.apply(wxNativeConsole, ie(["[kanata]", e], t))), console.error.apply(console, ie(["[kanata]", e], t)), re) {
                                    var n = this.backendVersion + "," + ce(this.backendCommit) + "," + ae.Default + ",1," + ce(e.message) + "," + ce(e.stack);
                                    Reporter.reportKeyValue({
                                        key: "XR_FRAME",
                                        value: n + ",1," + ue
                                    })
                                }
                            }
                        },
                        pe = t.getContext("wgfx", {
                            bufferPoolSize: 40960,
                            shaderPoolSize: 5120,
                            imagePoolSize: 40960,
                            pipelinePoolSize: 1024,
                            passPoolSize: 1024,
                            stencil: !0,
                            alpha: "Editor" === n || !0 === i.alpha,
                            antialias: i.mainScreenMSAA || !1,
                            preserveDrawingBuffer: !0,
                            ignore_assert: !!i.gfxIgnoreAssert,
                            disable_log: "Editor" !== n
                        });
                    "undefined" != typeof window && window.top ? (le = (window.top.NativeGlobal || {}).Puppet, fe = (window.top.NativeGlobal || {}).Phys3D) : "undefined" != typeof NativeGlobal ? (le = NativeGlobal.Puppet, fe = NativeGlobal.Phys3D) : (le = ((null === wx || void 0 === wx ? void 0 : wx.NativeGlobal) || {}).Puppet, fe = ((null === wx || void 0 === wx ? void 0 : wx.NativeGlobal) || {}).Phys3D), le || he.error("Puppet is not exist !"), fe || he.error("Phys3D is not exist !"), (null == pe ? void 0 : pe.gfx) || he.error("Get gfx context error: hasCTX(" + !!pe + "), hasGFX(" + !!(null == pe ? void 0 : pe.gfx) + ")!");
                    var de = void 0;
                    le && (pe && pe.gfx || r) && ((de = new le(null == pe ? void 0 : pe.gfx, o, r)) ? he.init(de.getRenderEnv().version.split(".").map((function(e) {
                        return parseInt(e, 10)
                    })), de.getRenderEnv().commit_version) : he.error("puppet instance create failed !"));
                    var _e = {
                            worker: de || {}
                        },
                        ye = new(function() {
                            function e(e) {
                                this._queues = [], this._end = 0, this._end = e;
                                for (var t = 0; t <= e; t += 1) this._queues.push([])
                            }
                            return e.prototype.add = function(e) {
                                this._queues[0].push(e)
                            }, e.prototype.step = function() {
                                var e = this._queues[this._end];
                                e.splice(0, e.length);
                                for (var t = this._end; t > 0; t -= 1) this._queues[t] = this._queues[t - 1];
                                this._queues[0] = e
                            }, e.prototype.clear = function() {
                                this._queues.length = 0
                            }, e
                        }())(5),
                        ve = {
                            inWX: !0,
                            REAL_DOWNLOADER: null,
                            LOAD: function(e) {
                                return ve.REAL_DOWNLOADER.load(e)
                            }
                        },
                        ge = function() {
                            function e(e) {
                                this._bufferSize = 0, e && (this.buffer = e, this._u32view = new Uint32Array(this.buffer, 0, this.buffer.byteLength / 4), this._bufferSize = this.buffer.byteLength)
                            }
                            return Object.defineProperty(e.prototype, "commandOffset", {
                                get: function() {
                                    return this._u32view[0]
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "commandOffsetUint32", {
                                get: function() {
                                    return this._u32view[0] / 4
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype._checkBufferSize = function(e) {
                                this._u32view[0] + e + 1 > this._u32view.length && (null == _e || _e.worker.refreshNodesWorldTransform())
                            }, e.prototype.setCommandSize = function(e) {
                                this._u32view[0] = e
                            }, e
                        }(),
                        we = function(e) {
                            function t() {
                                return e.call(this, null == _e ? void 0 : _e.worker.eventBusSM) || this
                            }
                            return te(t, e), t.prototype.setRootEntity = function(e) {
                                this._checkBufferSize(8);
                                var t = this._u32view[0] / 4 + 1;
                                this._u32view[t] = s.EEventType.SetRootEntity, this._u32view[t + 1] = e, this.setCommandSize(this._u32view[0] + 8)
                            }, t.prototype.addChild = function(e, t) {
                                this._checkBufferSize(12);
                                var i = this._u32view[0] / 4 + 1;
                                this._u32view[i] = s.EEventType.AddChild, this._u32view[i + 1] = e, this._u32view[i + 2] = t, this.setCommandSize(this._u32view[0] + 12)
                            }, t.prototype.addChildAtIndex = function(e, t, i) {
                                this._checkBufferSize(16);
                                var n = this._u32view[0] / 4 + 1;
                                this._u32view[n] = s.EEventType.AddChildAtIndex, this._u32view[n + 1] = e, this._u32view[n + 2] = t, this._u32view[n + 3] = i, this.setCommandSize(this._u32view[0] + 16)
                            }, t.prototype.removeFromParent = function(e) {
                                this._checkBufferSize(8);
                                var t = this._u32view[0] / 4 + 1;
                                this._u32view[t] = s.EEventType.RemoveFromParent, this._u32view[t + 1] = e, this.setCommandSize(this._u32view[0] + 8)
                            }, t.prototype.disperseSubTree = function(e) {
                                this._checkBufferSize(8);
                                var t = this._u32view[0] / 4 + 1;
                                this._u32view[t] = s.EEventType.DisperseSubTree, this._u32view[t + 1] = e, this.setCommandSize(this._u32view[0] + 8)
                            }, t.prototype.bindToBone = function(e, t) {
                                this._checkBufferSize(12);
                                var i = this._u32view[0] / 4 + 1;
                                this._u32view[i] = s.EEventType.BindToBone, this._u32view[i + 1] = e, this._u32view[i + 2] = t, this.setCommandSize(this._u32view[0] + 12)
                            }, t.prototype.unbindFromBone = function(e) {
                                this._checkBufferSize(8);
                                var t = this._u32view[0] / 4 + 1;
                                this._u32view[t] = s.EEventType.UnBindFromBone, this._u32view[t + 1] = e, this.setCommandSize(this._u32view[0] + 8)
                            }, t.prototype.entityCommandActive = function(e) {
                                this._checkBufferSize(8);
                                var t = this._u32view[0] / 4 + 1;
                                this._u32view[t] = s.EEventType.EntityCommandActive, this._u32view[t + 1] = e, this.setCommandSize(this._u32view[0] + 8)
                            }, t.prototype.entityCommandInActive = function(e) {
                                this._checkBufferSize(8);
                                var t = this._u32view[0] / 4 + 1;
                                this._u32view[t] = s.EEventType.EntityCommandInActive, this._u32view[t + 1] = e, this.setCommandSize(this._u32view[0] + 8)
                            }, t.prototype.bindToBones = function(e, t) {
                                var i = e.length,
                                    n = 4 * (2 + 2 * i);
                                this._checkBufferSize(n);
                                var r = this._u32view[0] / 4 + 1;
                                this._u32view[r] = s.EEventType.BindToBones, this._u32view[r + 1] = i;
                                for (var o = 0; o < i; o++) {
                                    var a = e[o],
                                        u = t[o];
                                    this._u32view[r + 2 + o] = a.id, this._u32view[r + 2 + i + o] = u.id
                                }
                                this.setCommandSize(this._u32view[0] + n)
                            }, t.prototype.unBindFromBones = function(e) {
                                var t = e.length,
                                    i = 4 * (2 + t);
                                this._checkBufferSize(i);
                                var n = this._u32view[0] / 4 + 1;
                                this._u32view[n] = s.EEventType.UnBindFromBones, this._u32view[n + 1] = t;
                                for (var r = 0; r < t; r++) {
                                    var o = e[r];
                                    this._u32view[n + 2 + r] = o.id
                                }
                                this.setCommandSize(this._u32view[0] + i)
                            }, t
                        }(ge),
                        be = function(e) {
                            function t() {
                                return e.call(this, null == _e ? void 0 : _e.worker.dirtyNodesSM) || this
                            }
                            return te(t, e), t.prototype.addDirtyEntity = function(e) {
                                this._checkBufferSize(1), this._u32view[this._u32view[0] + 1] = e, this.setCommandSize(this._u32view[0] + 1)
                            }, t.prototype.addDirtyEntityId = function(e) {
                                this._checkBufferSize(1), this._u32view[this._u32view[0] + 1] = e, this.setCommandSize(this._u32view[0] + 1)
                            }, t.prototype.addDirtyEntities = function(e, t) {
                                if (this._checkBufferSize(t), t > this._u32view.length) {
                                    for (var i = this._u32view[0] + 1, n = t - (this._u32view.length - 1), r = 0; r < n; r++) this._u32view[i + r] = e[r];
                                    var o = t - n;
                                    for (r = n; r < o; r++) this.addDirtyEntityId(e[r])
                                } else {
                                    for (n = t, i = this._u32view[0] + 1, r = 0; r < n; r++) this._u32view[i + r] = e[r];
                                    this.setCommandSize(this._u32view[0] + n)
                                }
                            }, t.prototype.addDirtyEntitiesById = function(e, t) {
                                if (this._checkBufferSize(t), t > this._u32view.length) {
                                    for (var i = this._u32view[0] + 1, n = t - (this._u32view.length - 1), r = 0; r < n; r++) this._u32view[i + r] = e[r];
                                    var o = t - n;
                                    for (r = n; r < o; r++) this.addDirtyEntityId(e[r])
                                } else {
                                    for (n = t, i = this._u32view[0] + 1, r = 0; r < n; r++) this._u32view[i + r] = e[r];
                                    this.setCommandSize(this._u32view[0] + n)
                                }
                            }, t
                        }(ge),
                        Ee = new we,
                        me = new be,
                        Se = new(function() {
                            function e() {}
                            return e.prototype.entityAddChild = function(e, t) {
                                Ee.addChild(e, t)
                            }, e.prototype.entityAddChildAtIndex = function(e, t, i) {
                                Ee.addChildAtIndex(e, t, i)
                            }, e.prototype.entityRemoveFromParent = function(e) {
                                Ee.removeFromParent(e)
                            }, e.prototype.entityClear = function(e) {
                                Ee.disperseSubTree(e)
                            }, e.prototype.entitySetActive = function(e, t) {
                                t ? Ee.entityCommandActive(e) : Ee.entityCommandInActive(e)
                            }, e.prototype.entitySetLocalMatrixDirty = function(e) {
                                me.addDirtyEntity(e)
                            }, e.prototype.setRootEntity = function(e) {
                                Ee.setRootEntity(e)
                            }, e.prototype.refreshWorldTransform = function() {
                                null == _e || _e.worker.refreshNodesWorldTransform()
                            }, e.prototype.bindEntityToBone = function(e, t) {
                                Ee.bindToBone(e.id, t.id)
                            }, e.prototype.unbindEntityFromBone = function(e) {
                                Ee.unbindFromBone(e.id)
                            }, e.prototype.bindEntitiesToBones = function(e, t) {
                                Ee.bindToBones(e, t)
                            }, e.prototype.unbindEntitiesFromBones = function(e) {
                                Ee.unBindFromBones(e)
                            }, e
                        }());

                    function Me(e) {
                        var t, i;
                        return void 0 !== (null === (t = e) || void 0 === t ? void 0 : t.byteLength) && !!(null === (i = e) || void 0 === i ? void 0 : i.slice)
                    }
                    var Te = function() {
                            function e() {
                                this._srcSet = !1, this.isKanataImage = !0, this.premultiplyAlpha = !1, this.autoRelease = !1
                            }
                            return e.IS = function(e) {
                                return e && e.isKanataImage
                            }, Object.defineProperty(e.prototype, "data", {
                                get: function() {
                                    var e = this._buffer;
                                    return this.autoRelease && delete this._buffer, e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "localPath", {
                                get: function() {
                                    return this._localPath
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "src", {
                                get: function() {
                                    return this._src
                                },
                                set: function(e) {
                                    this._srcSet ? he.error("cannot set Image.src twice.") : "string" == typeof e ? (this._src = e, this.createHttpImage(e), this._srcSet = !0) : Me(e) || Me(e.buffer) ? (this._src = e, this.createBufferImage(e, "buffer image"), this._srcSet = !0) : he.error("Image.src can only be string or ArrayBuffer.")
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "width", {
                                get: function() {
                                    return this._width
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "height", {
                                get: function() {
                                    return this._height
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.createHttpImage = function(e) {
                                var t = this;
                                ve.LOAD({
                                    src: e,
                                    encoding: void 0,
                                    onLoad: function(i) {
                                        t._localPath = i.filePath, t.createBufferImage(i.data, e)
                                    },
                                    onError: function(e) {
                                        t.onerror && t.onerror(e)
                                    }
                                })
                            }, e.prototype.createBufferImage = function(e, t) {
                                var i = this;
                                null == _e || _e.worker.decodeImage(e, (function(e, n, r) {
                                    e ? (i._buffer = e, i._width = n, i._height = r, Me(i._src) && (i._src = null), i.onload && i.onload()) : i.onerror && i.onerror(new Error("Decode Image error: '" + t + "'"))
                                }), this.premultiplyAlpha), ye.add(e)
                            }, e
                        }(),
                        Oe = function() {
                            function e(e) {
                                this._bufferSize = 0, e ? (this.buffer = e, this._u32view = new Uint32Array(this.buffer, 0, this.buffer.byteLength / 4), this._bufferSize = this.buffer.byteLength) : (this.buffer = new ArrayBuffer(1024), this._u32view = new Uint32Array(this.buffer, 0, this.buffer.byteLength / 4), this._bufferSize = 1024)
                            }
                            return Object.defineProperty(e.prototype, "commandOffset", {
                                get: function() {
                                    return this._u32view[0]
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "commandOffsetUint32", {
                                get: function() {
                                    return this._u32view[0] / 4
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype._checkBufferSize = function(e) {}, e.prototype.setCommandSize = function(e) {
                                this._u32view[0] = e
                            }, e
                        }(),
                        Ae = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return te(t, e), t.prototype._checkBufferSize = function(e) {
                                if (4 + e > this._bufferSize) {
                                    var t = 2 * (4 + e);
                                    this.buffer = new ArrayBuffer(t), this._u32view = new Uint32Array(this.buffer, 0, t / 4), this._bufferSize = t
                                }
                            }, t.prototype.updateSkinningMatrices = function(e, t) {
                                this._checkBufferSize(4 * t);
                                for (var i = 0; i < t; i++) this._u32view[1 + i] = e[i].id;
                                return this.setCommandSize(t), this._u32view
                            }, t
                        }(Oe),
                        ke = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return te(t, e), t.prototype._checkBufferSize = function(e) {
                                if (4 + e > this._bufferSize) {
                                    var t = 2 * (4 + e);
                                    this.buffer = new ArrayBuffer(t), this._u32view = new Uint32Array(this.buffer, 0, t / 4), this._bufferSize = t
                                }
                            }, t.prototype.updateAnimators = function(e, t) {
                                this._checkBufferSize(4 * t);
                                for (var i = 0; i < t; i++) this._u32view[1 + i] = e[i].id;
                                return this.setCommandSize(t), this._u32view
                            }, t
                        }(Oe),
                        De = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return te(t, e), t.prototype._checkBufferSize = function(e) {
                                if (4 + e > this._bufferSize) {
                                    var t = 2 * (4 + e);
                                    this.buffer = new ArrayBuffer(t), this._u32view = new Uint32Array(this.buffer, 0, t / 4), this._bufferSize = t
                                }
                            }, t.prototype.updateAnimatorControllers = function(e, t) {
                                this._checkBufferSize(4 * t);
                                for (var i = 0; i < t; i++) this._u32view[1 + i] = e[i].id;
                                return this.setCommandSize(t), this._u32view
                            }, t
                        }(Oe),
                        Ce = new Ae,
                        Be = new ke,
                        Pe = new De,
                        Re = "undefined" != typeof WeakRef,
                        Fe = {
                            downloader: ve,
                            eventBridge: Se,
                            update: function(e) {
                                ye.step()
                            },
                            destroy: function() {
                                var e, t;
                                _e.worker.submit(), null === (t = (e = _e.worker).destroy) || void 0 === t || t.call(e), _e.worker = void 0, Fe.downloader = void 0, Fe.eventBridge = void 0, ye.clear()
                            },
                            clearView: function(e) {
                                return null == _e ? void 0 : _e.worker.clearView(e.id)
                            },
                            cullCamera: function(e, t, i) {
                                return null == _e ? void 0 : _e.worker.cullCamera(e.id, t.id, i)
                            },
                            drawCamera: function(e, t, i) {
                                return null == _e ? void 0 : _e.worker.drawCamera(e.id, t.id, i)
                            },
                            drawLight: function(e, t, i, n) {
                                return null == _e ? void 0 : _e.worker.drawLight(e.id, t.id, i.id, n)
                            },
                            submit: function() {
                                return null == _e ? void 0 : _e.worker.submit()
                            },
                            createScalableList: function(e, t) {
                                return null == _e ? void 0 : _e.worker.createScalableList(e, t)
                            },
                            createNodePool: function(e, t) {
                                return null == _e ? void 0 : _e.worker.createNodePool(e, t)
                            },
                            createNodeTree: function(e, t, i, n, r) {
                                return null == _e ? void 0 : _e.worker.createNodeTree(e, t, i, n, r)
                            },
                            createVertexLayout: function(e) {
                                return null == _e ? void 0 : _e.worker.createVertexLayout(JSON.stringify(e))
                            },
                            createVertexDataDescriptor: function(e) {
                                return null == _e ? void 0 : _e.worker.createVertexDataDescriptor(JSON.stringify(e))
                            },
                            createVertexBuffer: function(e, t) {
                                return ye.add(e), null == _e ? void 0 : _e.worker.createVertexBuffer(e, t.id)
                            },
                            updateVertexBuffer: function(e, t, i) {
                                return ye.add(t), null == _e ? void 0 : _e.worker.updateVertexBuffer(e.id, t, i)
                            },
                            createIndexBuffer: function(e, t) {
                                return ye.add(e), null == _e ? void 0 : _e.worker.createIndexBuffer(e, t)
                            },
                            updateIndexBuffer: function(e, t, i) {
                                return ye.add(t), null == _e ? void 0 : _e.worker.updateIndexBuffer(e.id, t, i)
                            },
                            createVertexData: function(e, t, i) {
                                return null == _e ? void 0 : _e.worker.createVertexData(e.id, t, i.id)
                            },
                            createIndexData: function(e) {
                                return null == _e ? void 0 : _e.worker.createIndexData(e)
                            },
                            createTexture: function(e, t, i, n, r, o, s, a, u) {
                                return a && a.forEach((function(e, t) {
                                    e = Te.IS(e) ? e.data : e, a[t] = e, ye.add(e)
                                })), null == _e ? void 0 : _e.worker.createTexture(e, t, i, n, r, o, s, a, u)
                            },
                            createAutoUpdateTextureFromCanvas: function(e) {
                                return null == _e ? void 0 : _e.worker.createTexture(e)
                            },
                            updateTexture: function(e, t, i, n, r, o, s, a, u) {
                                return ye.add(u), null == _e ? void 0 : _e.worker.updateTexture(e.id, t, i, n, r, o, s, a, u)
                            },
                            updateTextureFlags: function(e, t) {
                                return null == _e ? void 0 : _e.worker.updateTextureFlags(e.id, t)
                            },
                            createUniformBlockDescriptor: function(e) {
                                return null == _e ? void 0 : _e.worker.createUniformBlockDescriptor(JSON.stringify(e))
                            },
                            createUniformBlock: function(e) {
                                return null == _e ? void 0 : _e.worker.createUniformBlock(e.id)
                            },
                            createEffect: function(e, t, i, n, r, o, s) {
                                return null == _e ? void 0 : _e.worker.createEffect(e, t, JSON.stringify(i), JSON.stringify(n), r, JSON.stringify(o), s ? 2 : 0)
                            },
                            createMaterial: function(e) {
                                return null == _e ? void 0 : _e.worker.createMaterial(JSON.stringify(e || {}))
                            },
                            changeMaterialMacros: function(e, t) {
                                return null == _e ? void 0 : _e.worker.changeMaterialMacros(e.id, JSON.stringify(t))
                            },
                            createView: function(e) {
                                var t = {
                                    passAction: e.passAction,
                                    viewport: e.viewport,
                                    scissor: e.scissor
                                };
                                return null == _e ? void 0 : _e.worker.createView(JSON.stringify(t))
                            },
                            updateViewRect: function(e, t) {
                                return null == _e ? void 0 : _e.worker.updateViewRect(e.id, t)
                            },
                            updateViewScissor: function(e, t) {
                                return null == _e ? void 0 : _e.worker.updateViewScissor(e.id, t)
                            },
                            createRenderPass: function(e) {
                                var t = e;
                                return t.colors.forEach((function(e) {
                                    e.texture = e.texture.id
                                })), t.depth.texture = t.depth.texture.id, t.stencil.texture = t.stencil.texture.id, null == _e ? void 0 : _e.worker.createRenderPass(JSON.stringify(e))
                            },
                            createCullingComponentPool: function(e) {
                                return null == _e ? void 0 : _e.worker.createCullingComponentPool(e)
                            },
                            createRenderComponent: function(e, t, i, n, r, o) {
                                return null == _e ? void 0 : _e.worker.createRenderComponent(e, t.id, i, n, r, JSON.stringify(o || {}))
                            },
                            changeMeshMacros: function(e, t) {
                                return null == _e ? void 0 : _e.worker.changeMeshMacros(e.id, JSON.stringify(t))
                            },
                            createAnimator: function(e, t) {
                                return null == _e ? void 0 : _e.worker.createAnimator(e, t)
                            },
                            updateAnimators: function(e, t) {
                                var i = Be.updateAnimators(e, t);
                                return ye.add(i), null == _e ? void 0 : _e.worker.updateAnimators(i)
                            },
                            createAnimationClipBinding: function(e, t, i, n, r, o, s, a) {
                                for (var u = Math.min(n.length - r, o), c = Math.min(e.length - t, i), l = new ArrayBuffer(4 * (u + c)), f = new Uint32Array(l), h = 0, p = t; p < c; p++) f[h++] = e[p] ? e[p].id : 0;
                                for (p = r; p < u; p++) f[h++] = null === n[p] ? 0 : "number" == typeof n[p] ? n[p] : n[p].id;
                                return ye.add(l), null == _e ? void 0 : _e.worker.createAnimationClipBinding(l, 0, c, u, s, a.id)
                            },
                            rebindAnimationClipBinding: function(e, t, i, n, r, o, s, a, u, c, l) {
                                for (var f = Math.min(r.length - o, s), h = Math.min(t.length - i, n), p = new ArrayBuffer(4 * (f + h)), d = new Uint32Array(p), _ = 0, y = i; y < h; y++) d[_++] = t[y] ? t[y].id : 0;
                                for (y = o; y < f; y++) d[_++] = null === r[y] ? 0 : "number" == typeof r[y] ? r[y] : r[y].id;
                                return ye.add(p), e.rebind(p, 0, h, f, a, u, c, l.id)
                            },
                            updateAnimationClipBinding: function(e, t, i, n, r, o, s, a, u, c) {
                                for (var l = Math.min(r.length - o, s), f = Math.min(t.length - i, n), h = new ArrayBuffer(4 * (l + f)), p = new Uint32Array(h), d = 0, _ = i; _ < f; _++) p[d++] = t[_] ? t[_].id : 0;
                                for (_ = o; _ < l; _++) p[d++] = null === r[_] ? 0 : "number" == typeof r[_] ? r[_] : r[_].id;
                                return ye.add(h), e.update(h, 0, f, l, a, u, c)
                            },
                            writeAnimationClipBindingDefaultValues: function(e) {
                                e.writeDefaultValues()
                            },
                            createAnimatorControllerModel: function(e) {
                                return null == _e ? void 0 : _e.worker.createAnimatorControllerModel(e)
                            },
                            setAnimatorControllerModelMaskAtIndex: function(e, t, i) {
                                e.setMaskAtIndex(t, i.buffer, i.offset, i.length)
                            },
                            updateAnimatorControllerModel: function(e) {
                                e.update()
                            },
                            createAnimatorControllerStateModel: function(e) {
                                return null == _e ? void 0 : _e.worker.createAnimatorControllerStateModel(e)
                            },
                            updateAnimatorControllers: function(e, t) {
                                var i = Pe.updateAnimatorControllers(e, t);
                                ye.add(i), null == _e || _e.worker.updateAnimatorControllers(i)
                            },
                            createSkinning: function(e, t) {
                                return null == _e ? void 0 : _e.worker.createSkinning(e, t)
                            },
                            updateSkinnings: function(e, t) {
                                var i = Ce.updateSkinningMatrices(e, t);
                                return ye.add(i), null == _e ? void 0 : _e.worker.updateSkinnings(i)
                            },
                            createRenderCamera: function(e, t) {
                                return null == _e ? void 0 : _e.worker.createRenderCamera(e, t)
                            },
                            createLightCamera: function() {
                                return null == _e ? void 0 : _e.worker.createLightCamera()
                            },
                            createAnimationClipModel: function(e) {
                                return ye.add(e), null == _e ? void 0 : _e.worker.createAnimationClipModel(e)
                            },
                            createBoneInverseModel: function(e) {
                                return ye.add(e), null == _e ? void 0 : _e.worker.createBoneInverseModel(e)
                            },
                            createDynamicBones: function(e) {
                                return null == _e ? void 0 : _e.worker.createDynamicBones(e)
                            },
                            loadTTFFont: function(e, t) {
                                ve.LOAD({
                                    src: e,
                                    encoding: void 0,
                                    onLoad: function(e) {
                                        var i = e.data,
                                            n = e.filePath;
                                        ye.add(i);
                                        var r = null == _e ? void 0 : _e.worker.loadTTFFont(i, n);
                                        t(r)
                                    },
                                    onError: function() {
                                        t("Arial")
                                    }
                                })
                            },
                            getGlyphInfo: function(e, t) {
                                var i = e.italic ? "italic " : " ",
                                    n = e.bold ? "bold " : " ";
                                return null == _e ? void 0 : _e.worker.getGlyphInfo(("" + i + n + Math.floor(e.size) + "px " + e.fontFamily).trim(), t)
                            },
                            refreshNodesWorldTransform: function() {
                                return null == _e ? void 0 : _e.worker.refreshNodesWorldTransform()
                            },
                            getRenderEnv: function() {
                                var e = null == _e ? void 0 : _e.worker.getRenderEnv(),
                                    t = e.registerFallbackEffect.bind(e);
                                if (e.registerFallbackEffect = function(e, i) {
                                        t(e, (null == i ? void 0 : i.id) || 0)
                                    }, e.changeMacros) {
                                    var i = e.changeMacros.bind(e);
                                    e.changeMacros = function(e) {
                                        i(JSON.stringify(e))
                                    }
                                } else e.changeMacros = function() {};
                                if (e.changeVirtualMacros) {
                                    var n = e.changeVirtualMacros.bind(e);
                                    e.changeVirtualMacros = function(e) {
                                        n(JSON.stringify(e))
                                    }
                                } else e.changeVirtualMacros = function() {};
                                if (e.setInternalInstanceInfo) {
                                    var r = e.setInternalInstanceInfo.bind(e);
                                    e.setInternalInstanceInfo = function(e, t, i) {
                                        r(e, JSON.stringify(t), JSON.stringify(i))
                                    }
                                } else e.setInternalInstanceInfo = function() {};
                                return e
                            },
                            createWeakRef: function(e) {
                                return Re ? new WeakRef(e) : (null == _e ? void 0 : _e.worker.createWeakRef) ? null == _e ? void 0 : _e.worker.createWeakRef(e) : {
                                    deref: function() {
                                        return e
                                    }
                                }
                            },
                            createWeakRefSentry: function() {
                                return (null == _e ? void 0 : _e.worker.createWeakRefSentry) ? null == _e ? void 0 : _e.worker.createWeakRefSentry() : {}
                            },
                            createNativeUUMap: function() {
                                return null == _e ? void 0 : _e.worker.createNativeUUMap()
                            },
                            createNativeSUMap: function() {
                                return null == _e ? void 0 : _e.worker.createNativeSUMap()
                            },
                            createNativeULUMap: function() {
                                return null == _e ? void 0 : _e.worker.createNativeULUMap()
                            },
                            decodeBase64: function(e) {
                                return null == _e ? void 0 : _e.worker.decodeBase64(e)
                            },
                            setNodeName: function(e, t) {
                                return null == _e ? void 0 : _e.worker.setNodeName(e, t)
                            },
                            setRenderComponentName: function(e, t) {
                                return null == _e ? void 0 : _e.worker.setRenderComponentName(e.id, t)
                            },
                            debugPrint: function(e) {
                                return null == _e ? void 0 : _e.worker.debugPrint(e)
                            },
                            setGlobalPhysicSystem: function(e) {},
                            bindRigidBodyToNode: function(e, t) {},
                            unbindRigidBody: function(e) {},
                            bindCCTToNode: function(e, t) {},
                            unbindCCT: function(e) {},
                            decodeDraco: function(e, t) {
                                return null == _e ? void 0 : _e.worker.decodeDraco(e, t)
                            }
                        },
                        Ne = {
                            IS_VALID: function() {
                                return !!de
                            },
                            GET_MAIN_CANVAS: function() {
                                return t
                            }
                        };
                    Ne.worker = Fe, Ne.Image = Te, Ne.Phys3D = fe;
                    var xe, Ie = Ne.worker,
                        Ue = function() {
                            function e() {
                                this._macros = {}, this._virtualMacros = {}, this._isWrongWrapMapping = !1, this._isNotWrongEffectSort = !1, this._isGoodInstance = !1, this._isGoodPhysAndScalableList = !1, this._isSizeDirty = !1, this.useExtendedMemory = !1, this._handle = this.__handle = Ie.getRenderEnv(), this.id = this._handle.id, this._uniformBlocks = [], this._u32View = new Uint32Array(this._handle.data), this._f32View = new Float32Array(this._handle.data), "string" == typeof this._handle.version ? this._version = this._handle.version.split(".").map((function(e) {
                                    return parseInt(e, 10)
                                })) : "WEBGL" !== this.backendType && (this._version = [0, 0]), this._version ? (this._isWrongWrapMapping = 0 === this._version[0], this._isNotWrongEffectSort = !(this._version[0] <= 1 && this._version[1] < 2), this._isGoodInstance = !(this._version[0] <= 1 && this._version[1] < 3), this._isGoodPhysAndScalableList = !(this._version[0] <= 1 && this._version[1] < 6)) : (this._isNotWrongEffectSort = !0, this._isGoodInstance = !0, this._isGoodPhysAndScalableList = !0), this._isNotWrongEffectSort && (this.neverTranspose = !0)
                            }
                            return Object.defineProperty(e.prototype, "version", {
                                get: function() {
                                    return this._version.slice()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "backendType", {
                                get: function() {
                                    return this._handle.backendType
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "canvasWidth", {
                                get: function() {
                                    return this._f32View[z.canvasWidth]
                                },
                                set: function(e) {
                                    this._isSizeDirty = !1, this._f32View[z.canvasWidth] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "canvasHeight", {
                                get: function() {
                                    return this._f32View[z.canvasHeight]
                                },
                                set: function(e) {
                                    this._isSizeDirty = !0, this._f32View[z.canvasHeight] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "supportCompressTextures", {
                                get: function() {
                                    return this._handle.supportCompressTextures
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "features", {
                                get: function() {
                                    return this._handle.features || {}
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "commitVersion", {
                                get: function() {
                                    return this._handle.commit_version
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "usePuppetSokol", {
                                get: function() {
                                    return this._handle.use_puppet_sokol
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "useInstance", {
                                get: function() {
                                    return !!(1 & this._u32View[z.useInstanceOrNeverTranspose])
                                },
                                set: function(e) {
                                    var t = this._u32View[z.useInstanceOrNeverTranspose];
                                    this._u32View[z.useInstanceOrNeverTranspose] = e ? 1 | t : -2 & t
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "neverTranspose", {
                                get: function() {
                                    return !!(2 & this._u32View[z.useInstanceOrNeverTranspose])
                                },
                                set: function(e) {
                                    var t = this._u32View[z.useInstanceOrNeverTranspose];
                                    this._u32View[z.useInstanceOrNeverTranspose] = e ? 2 | t : -3 & t
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "isWrongWrapMapping", {
                                get: function() {
                                    return this._isWrongWrapMapping
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "isNotWrongEffectSort", {
                                get: function() {
                                    return this._isNotWrongEffectSort
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "isGoodInstance", {
                                get: function() {
                                    return this._isGoodInstance
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "isGoodPhysAndScalableList", {
                                get: function() {
                                    return this._isGoodPhysAndScalableList
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.supportCompressTexture = function(e) {
                                return this.supportCompressTextures.indexOf(e) >= 0
                            }, e.prototype.registerFallbackEffect = function(e, t) {
                                this._handle.registerFallbackEffect(e, null == t ? void 0 : t.__handle)
                            }, e.prototype.beginFrame = function() {
                                this._u32View[z.resetFlag] = 1
                            }, e.prototype.endFrame = function() {
                                Ie.submit()
                            }, e.prototype.clearView = function(e) {
                                r && 0 === this._renderPass.id || (this._isSizeDirty && Ie.drawCamera({
                                    id: 0
                                }, {
                                    id: 0
                                }, "ForwardBase"), this._isSizeDirty = !1, Ie.clearView(e.__handle))
                            }, e.prototype.setEnvUniform = function(e, t) {
                                this._u32View[z.uniforms + e] = t.id, this._uniformBlocks[e] = t
                            }, e.prototype.setRenderPass = function(e) {
                                this._u32View[z.renderPass] = e.id, this._renderPass = e
                            }, e.prototype.changeMacros = function(e) {
                                Object.assign(this._macros, e), this._handle.changeMacros(this._macros)
                            }, e.prototype.getMacro = function(e) {
                                var t;
                                return null === (t = this._macros) || void 0 === t ? void 0 : t[e]
                            }, e.prototype.changeVirtualMacros = function(e) {
                                Object.assign(this._virtualMacros, e), this._handle.changeVirtualMacros(this._virtualMacros)
                            }, e.prototype.getVirtualMacro = function(e) {
                                return this._virtualMacros[e]
                            }, e.prototype.setInternalInstanceInfo = function(e, t, i) {
                                this._handle.setInternalInstanceInfo(e, t, i)
                            }, e.prototype.getErrors = function() {
                                var e, t;
                                return null === (t = (e = this.__handle).getErrors) || void 0 === t ? void 0 : t.call(e)
                            }, e
                        }(),
                        Le = new Ue,
                        Ve = function() {
                            function e() {}
                            return Object.defineProperty(e.prototype, "_handle", {
                                get: function() {
                                    return this.__handle
                                },
                                set: function(e) {
                                    this.__handle = e, this.id = e.id
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.destroy = function() {
                                this._handle.destroy && this._handle.destroy()
                            }, e
                        }(),
                        ze = Ne.worker,
                        je = new Set,
                        Ge = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                return i._size = 0, i._index = 0, i._onBackendEnlarge = function() {
                                    i._resized()
                                }, Le.isGoodPhysAndScalableList ? i._handle = ze.createScalableList(t, i._onBackendEnlarge) : (i._handle = ze.createScalableList(t), je.add(i), i._preData = i._handle.data), i._resized(), i
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this._size
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "dataView", {
                                get: function() {
                                    return this._u32View
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "usedSize", {
                                get: function() {
                                    return this._sizeView[0] > this.size ? this.size : this._sizeView[0]
                                },
                                set: function(e) {
                                    this._sizeView[0] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.enlarge = function(e) {
                                this._handle.enlarge(), this._resized()
                            }, t.prototype.begin = function() {
                                this._index = 0
                            }, t.prototype.add = function(e, t) {
                                this._index === this._size && this.enlarge(), this._u32View[this._index++] = e
                            }, t.prototype.end = function() {
                                this._sizeView[0] = this._index
                            }, t.prototype.reset = function() {
                                this._sizeView[0] = 0
                            }, t.prototype._checkResize = function() {
                                this._preData.byteLength !== this._handle.data.byteLength && (this._resized(), this._preData = this._handle.data)
                            }, t.prototype._resized = function() {
                                var e = this.__handle.data.byteLength / 4 - 1;
                                this._u32View = new Uint32Array(this.__handle.data, 4), this._sizeView = new Uint32Array(this.__handle.data, 0, 1), this._size = e
                            }, t
                        }(Ve),
                        We = function() {
                            function t() {
                                var t = e.DATA_BUSES = e.DATA_BUSES || {};
                                this._globalObj = t[o] = t[o] || []
                            }
                            return t.prototype.postMessage = function(e) {
                                !r && this._globalObj.push(e)
                            }, t.prototype.onMessage = function(e) {
                                r && (this._callback = e)
                            }, t.prototype.flush = function() {
                                if (r) {
                                    for (var e = 0, t = this._globalObj; e < t.length; e++) {
                                        var i = t[e];
                                        this._callback && this._callback("string" == typeof i ? JSON.parse(i) : i)
                                    }
                                    this._globalObj.length = 0
                                }
                            }, t
                        }();
                    e && (xe = new We);
                    var He = xe,
                        Ke = function() {
                            function e() {}
                            return Object.defineProperty(e.prototype, "__handle", {
                                get: function() {
                                    return this._handle
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype._init = function(e) {
                                this._fastInit(e)
                            }, e.prototype._fastInit = function(e) {
                                this._handle = e;
                                var t = e.id,
                                    i = e.data,
                                    n = i.byteLength;
                                this._bufferLength = n, this._byteOffset = 0, this._buffer = i, this.id = t, this._f32view = new Float32Array(i, 0, n / 4)
                            }, e.prototype._initU32View = function() {
                                this._u32view = new Uint32Array(this._buffer, this._byteOffset, this._bufferLength / 4)
                            }, e.prototype._initPropertyView = function(e, t) {
                                return new Float32Array(this._buffer, this._byteOffset + 4 * e, t)
                            }, e.prototype.setRawBuffer = function(e) {
                                this._f32view.set(e)
                            }, e.prototype.destroy = function() {
                                this._handle.destroy && this._handle.destroy()
                            }, e
                        }(),
                        Ye = Ne.worker,
                        Je = function(e) {
                            function t() {
                                var t = e.call(this) || this;
                                return t._offsetEntityIds = 0, t._animationClipCount = 0, t._nodeCount = 0, t._handle = {
                                    id: 0
                                }, t
                            }
                            return te(t, e), t.UPDATE_ANIMATORS = function(e, t) {
                                Ye.updateAnimators(e, t)
                            }, t.prototype.bindAnimations = function(e, t, i) {
                                this.entities = t, this.animationClipModels = e, this.animationClipModels = e, this._animationClipCount = e.length;
                                var n = t.length;
                                for (var r in t) n += t[r].length;
                                this._nodeCount = n;
                                var o = Ye.createAnimator(e.length, n);
                                if (!(o.id < 0) && o.data) {
                                    for (this._init(o), this._initU32View(), r = 0; r < e.length; r++) this._u32view[3 * r] = e[r].id;
                                    this._offsetEntityIds = 3 * e.length;
                                    var s, a = 0;
                                    for (r = 0; r < t.length; r++) {
                                        for (var u = 0; u < t[r].length; u++) null !== t[r][u] ? (this._u32view[this._offsetEntityIds + a + u] = t[r][u].id, s || (s = t[r][u].id)) : this._u32view[this._offsetEntityIds + a + u] = 0, this._u32view[this._offsetEntityIds + a + u] = null !== t[r][u] ? t[r][u].id : 0;
                                        a += t[r].length
                                    }
                                    0 === this._u32view[this._offsetEntityIds] && (void 0 !== i && i.id ? this._u32view[this._offsetEntityIds] = i.id : s && (this._u32view[this._offsetEntityIds] = s))
                                }
                            }, t.prototype.setClipParams = function(e, t, i) {
                                if (this._handle) {
                                    var n = 3 * e;
                                    this._f32view[n + 1] = Math.round(t), this._f32view[n + 2] = i
                                }
                            }, t.prototype.getAnimationClipCount = function() {
                                return this._animationClipCount
                            }, t.prototype.getNodeCount = function() {
                                return this._nodeCount
                            }, t.prototype.getAnimationParameter = function(e) {
                                var t = 3 * e;
                                return {
                                    animationClipId: this._u32view[t],
                                    frameIndex: this._f32view[t + 1],
                                    percentage: this._f32view[t + 2]
                                }
                            }, t.prototype.getEntity = function(e) {
                                return this._u32view[this._offsetEntityIds + e]
                            }, t
                        }(Ke),
                        Qe = Ne.worker,
                        Xe = function(e) {
                            function t(t, i) {
                                var n = e.call(this) || this,
                                    r = Qe.createRenderCamera(t.id, i || !1);
                                return r.id < 0 || !r.data || (n._init(r), n._initU32View(), n._layerCullDistances = new Float32Array(n._buffer, 4 * Y.layerCullDistances, 32), n._f32view.set([0, 1, 0], Y.up), n.fov = .33 * Math.PI, n.aspect = 16 / 9, n.near = .1, n.far = 100, n.isProjection = !0), n
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "active", {
                                get: function() {
                                    return !!this._u32view[Y.active]
                                },
                                set: function(e) {
                                    this._u32view[Y.active] = e ? 1 : 0, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "depth", {
                                get: function() {
                                    return this._u32view[Y.depth]
                                },
                                set: function(e) {
                                    this._u32view[Y.depth] = e < 0 ? 0 : e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "isProjection", {
                                get: function() {
                                    return !!this._u32view[Y.isProjection]
                                },
                                set: function(e) {
                                    this._u32view[Y.isProjection] = e ? 1 : 0, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "view", {
                                get: function() {
                                    return this._view
                                },
                                set: function(e) {
                                    this._view = e, this._u32view[Y.view] = e.id, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "fov", {
                                get: function() {
                                    return this._f32view[Y.fov]
                                },
                                set: function(e) {
                                    this._f32view[Y.fov] = e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "aspect", {
                                get: function() {
                                    return this._f32view[Y.aspect]
                                },
                                set: function(e) {
                                    Math.abs(this._f32view[Y.aspect] - e) <= 1e-4 || (this._f32view[Y.aspect] = e, this._setDirty())
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "near", {
                                get: function() {
                                    return this._f32view[Y.near]
                                },
                                set: function(e) {
                                    this._f32view[Y.near] = e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "far", {
                                get: function() {
                                    return this._f32view[Y.far]
                                },
                                set: function(e) {
                                    this._f32view[Y.far] = e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "orthoSize", {
                                get: function() {
                                    return this._f32view[Y.orthoSize]
                                },
                                set: function(e) {
                                    this._f32view[Y.orthoSize] = e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "cullingMask", {
                                get: function() {
                                    return this._u32view[Y.cullingMask]
                                },
                                set: function(e) {
                                    this._u32view[Y.cullingMask] = e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "layerCullDistances", {
                                get: function() {
                                    return this._layerCullDistances
                                },
                                set: function(e) {
                                    this._layerCullDistances.set(e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "canvasSizeY", {
                                get: function() {
                                    return this._f32view[Y.canvasSizeY]
                                },
                                set: function(e) {
                                    this._f32view[Y.canvasSizeY] = e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "targetTransform", {
                                get: function() {
                                    return this._u32view[Y.targetTransform]
                                },
                                set: function(e) {
                                    this._u32view[Y.targetTransform] = e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "up", {
                                set: function(e) {
                                    this._f32view.set(e, Y.up)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.cull = function(e, t) {
                                Qe.cullCamera(this.__handle, e.__handle, t)
                            }, t.prototype.draw = function(e, t) {
                                Qe.drawCamera(this.__handle, e.__handle, t)
                            }, t.prototype.changeProjectionMatrix = function(e, t) {
                                e ? (this._f32view.set(t, Y.projectionMatrix), this._u32view[Y.manualMatrix] |= 1) : this._u32view[Y.manualMatrix] &= -2, this._setDirty()
                            }, t.prototype.changeViewMatrix = function(e, t) {
                                e ? (this._f32view.set(t, Y.viewMatrix), this._u32view[Y.manualMatrix] |= 2) : this._u32view[Y.manualMatrix] &= -3, this._setDirty()
                            }, t.prototype._setDirty = function() {
                                this._handle.setSharedDirty()
                            }, t.prototype.updateMatrix = function() {
                                this._handle.updateMatrices()
                            }, t.OFFSETS = Y, t
                        }(Ke),
                        qe = Ne.worker,
                        Ze = function(e) {
                            function t() {
                                var t = e.call(this) || this,
                                    i = qe.createLightCamera();
                                return i.id < 0 || !i.data || (t._init(i), t._initU32View(), t._lightSpaceMatrices = new Float32Array(t._buffer, 4 * J.lightSpaceMatrices, 64), t._tilingOffsets = new Float32Array([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0]), t._cascadedSplits = new Float32Array(3), t._farBounds = new Float32Array(t._buffer, 4 * (J.bounds + 1), 4), t._bounds = new Float32Array(t._buffer, 4 * J.bounds, 5)), t
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "view", {
                                get: function() {
                                    return this._view
                                },
                                set: function(e) {
                                    this._u32view[J.view] = e.id, this._view = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "active", {
                                get: function() {
                                    return !!this._u32view[J.active]
                                },
                                set: function(e) {
                                    this._u32view[J.active] = e ? 1 : 0
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "depth", {
                                get: function() {
                                    return this._u32view[J.depth]
                                },
                                set: function(e) {
                                    this._u32view[J.depth] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "shadowDistance", {
                                get: function() {
                                    return this._f32view[J.shadowDistance]
                                },
                                set: function(e) {
                                    this._f32view[J.shadowDistance] = e, this._updateBounds(!1), this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "shadowFilterMode", {
                                get: function() {
                                    return this._u32view[J.shadowFilterMode]
                                },
                                set: function(e) {
                                    this._u32view[J.shadowFilterMode] = e, this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "shadowMode", {
                                get: function() {
                                    return this._u32view[J.shadowMode]
                                },
                                set: function(e) {
                                    this._u32view[J.shadowMode] = e, this._tilingOffsets.set(e == s.EShadowMode.TwoCascade_PCF || e == s.EShadowMode.FourCascade_PCF ? [.5, .5, 0, 0, .5, .5, .5, 0, .5, .5, 0, .5, .5, .5, .5, .5] : [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0]), this._updateBounds(!1), this._setDirty()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "lightSpaceMatrices", {
                                get: function() {
                                    return this._lightSpaceMatrices
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.draw = function(e, t, i) {
                                qe.drawLight(this.__handle, e.__handle, t, i)
                            }, t.prototype.prepareUniforms = function(e) {
                                e.setUniform("u_csmLightSpaceMatrices", this.lightSpaceMatrices), e.setUniform("u_shadowTilingOffsets", this._tilingOffsets), e.setUniform("u_csmFarBounds", this._farBounds)
                            }, t.prototype.setLightDir = function(e, t, i) {
                                Math.abs(e - this._f32view[J.lightDir]) < 1e-6 && Math.abs(t - this._f32view[J.lightDir + 1]) < 1e-6 && Math.abs(i - this._f32view[J.lightDir + 2]) < 1e-6 || (this._f32view[J.lightDir] = e, this._f32view[J.lightDir + 1] = t, this._f32view[J.lightDir + 2] = i, this._setDirty())
                            }, t.prototype.setCascadedSplits = function(e, t, i) {}, t.prototype._updateBounds = function(e) {
                                var t = .3,
                                    i = this.shadowDistance,
                                    n = this.shadowMode;
                                if (e) {
                                    var r = i / t;
                                    this._bounds[0] = t;
                                    for (var o = 1; o < n; o += 1) {
                                        var s = o / n,
                                            a = t * Math.pow(r, s) * .75 + .25 * (t + (i - t) * s);
                                        this._bounds[o] = a, this._setSplitPercents(o - 1, a / i)
                                    }
                                    this._bounds[n] = i, this._setSplitPercents(n - 1, 1)
                                } else {
                                    for (o = 1; o < n; o += 1) a = this._cascadedSplits[o - 1] * i, this._bounds[o] = a;
                                    this._bounds[n] = i
                                }
                            }, t.prototype._adjustSplitPercents = function(e, t) {
                                return e < this.shadowMode / 2 && (t = Math.min(t, this._cascadedSplits[e + 1])), this._setSplitPercents(e, t)
                            }, t.prototype._setSplitPercents = function(e, t) {
                                var i = this.shadowMode / 2;
                                return e >= i ? 0 : e === i - 1 ? 1 : t
                            }, t.prototype._setDirty = function() {
                                this._handle.setSharedDirty()
                            }, t.OFFSETS = J, t
                        }(Ke),
                        $e = function() {
                            function e() {}
                            return Object.defineProperty(e.prototype, "float32View", {
                                get: function() {
                                    return this._nativePool._f32view
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "uint32View", {
                                get: function() {
                                    return this._nativePool._u32view
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "id", {
                                get: function() {
                                    return this._nativeId
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "poolId", {
                                get: function() {
                                    return this._poolId
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "poolIndex", {
                                get: function() {
                                    return this._poolIndex
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "poll", {
                                get: function() {
                                    var e = this._nativePool.__handle;
                                    return e._wasmPool ? e._wasmPool : e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "isUsing", {
                                get: function() {
                                    return this._using
                                },
                                set: function(e) {
                                    this._using = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype._init = function(e, t) {
                                this._nativeId = e, this._poolId = -65473 & e, this._poolIndex = e & j, this._nativePool = t[this._poolId], this._using = !0
                            }, e.prototype.setRawBuffer = function(e) {
                                this._nativePool._f32view.set(e, this.entityOffset)
                            }, e
                        }(),
                        et = function() {
                            function e(e) {
                                this._index = 0, this._size = void 0 !== e ? e : 500, this._array = new Array(this._size)
                            }
                            return e.prototype.push = function(e) {
                                this._index >= this._size && (this._size *= 2, this._array.length = this._size), this._array[this._index] = e, this._index++
                            }, e.prototype.pop = function() {
                                return this._index--, this._array[this._index]
                            }, e.prototype.getByIndex = function(e) {
                                return e >= this._index ? -1 : this._array[e]
                            }, e.prototype.size = function() {
                                return this._index
                            }, e.prototype.clear = function() {
                                this._index = 0
                            }, e
                        }(),
                        tt = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                return i._init(t), void 0 !== t._byteOffset && void 0 !== t._byteSize && (i._bufferLength = t._byteSize, i._byteOffset = t._byteOffset, i._f32view = new Float32Array(i._buffer, i._byteOffset, i._bufferLength / 4)), i._initU32View(), i
                            }
                            return te(t, e), t.prototype.supplyExtendedMemory = function(e) {
                                var t, i;
                                Le.useExtendedMemory && (null === (i = (t = this.__handle).setExtendedMemory) || void 0 === i || i.call(t, e), this.u32viewExt = new Uint32Array(e))
                            }, t
                        }(Ke),
                        it = function() {
                            function e(e, t, i, n) {
                                void 0 === n && (n = 0), this.pools = {}, this._poolIndex = 0, this._poolUsedLength = 0, this._poolLength = 0, this._disposedIds = new et, this._template = e, this._templateView = t, this._allocateFunc = i, this._extendedMemSize = n
                            }
                            return e.prototype._enlargePool = function(e) {
                                var t = this._allocateFunc(e),
                                    i = new tt(t);
                                this._extendedMemSize > 0 && i.supplyExtendedMemory(new ArrayBuffer(e * this._extendedMemSize)), this._poolIndex = i.id, this.pools[i.id] = i, this._poolLength += e
                            }, e.prototype.allocateOne = function() {
                                if (this._disposedIds.size() > 0) return this._poolUsedLength++, this._disposedIds.pop();
                                this._poolUsedLength >= this._poolLength && this._enlargePool(1024);
                                var e = this._poolIndex;
                                return this._poolIndex += 64, this._poolUsedLength++, e
                            }, e.prototype.dispose = function(e) {
                                e.isUsing && (this._disposedIds.push(e.id), this._poolUsedLength--, e.setRawBuffer(this._templateView), e.isUsing = !1)
                            }, e
                        }(),
                        nt = Ne.worker,
                        rt = new Uint32Array(new ArrayBuffer(4 * K.size)),
                        ot = new Float32Array(rt.buffer),
                        st = function(e) {
                            function t(i) {
                                var n = e.call(this) || this,
                                    r = t.POLL_MANAGER.allocateOne();
                                return n._init(r, t.POLL_MANAGER.pools), n.entityOffset = (n._poolIndex >> 6) * K.size, n._activeOffset = n.entityOffset + K.active, n._layerOffset = n.entityOffset + K.layer, n._boundingBallCenterOffset = n.entityOffset + K.boundingBallCenter, n._boundingBallRadiusOffset = n.entityOffset + K.boundingBallRadius, n._entityIdOffset = n.entityOffset + K.entityId, n
                            }
                            return te(t, e), t.prototype.getActive = function() {
                                return 0 != (this._nativePool._u32view[this._activeOffset] & K.dfActive)
                            }, t.prototype.setActive = function(e) {
                                e ? this._nativePool._u32view[this._activeOffset] |= K.dfActive : this._nativePool._u32view[this._activeOffset] &= ~K.dfActive
                            }, t.prototype.getLayer = function() {
                                return this._nativePool._u32view[this._layerOffset]
                            }, t.prototype.setLayer = function(e) {
                                this._nativePool._u32view[this._layerOffset] = e
                            }, t.prototype.getBoundingBallCenter = function() {
                                return this._boundingBallCenter || (this._boundingBallCenter = new Float32Array(this._nativePool._buffer, 4 * this._boundingBallCenterOffset, 3)), this._boundingBallCenter
                            }, t.prototype.setBoundingBallCenter = function(e, t) {
                                void 0 === t && (t = 0), e[t] === this._nativePool._f32view[this._boundingBallCenterOffset] && e[t + 1] === this._nativePool._f32view[this._boundingBallCenterOffset + 1] && e[t + 2] === this._nativePool._f32view[this._boundingBallCenterOffset] + 3 || (3 === e.length ? this._nativePool._f32view.set(e, this._boundingBallCenterOffset) : (this._nativePool._f32view[this._boundingBallCenterOffset] = e[t], this._nativePool._f32view[this._boundingBallCenterOffset + 1] = e[t + 1], this._nativePool._f32view[this._boundingBallCenterOffset + 2] = e[t + 2]))
                            }, t.prototype.getBoundingBallRadius = function() {
                                return this._nativePool._f32view[this._boundingBallRadiusOffset]
                            }, t.prototype.setBoundingBallRadius = function(e) {
                                this._nativePool._f32view[this._boundingBallRadiusOffset] = e
                            }, t.prototype.bindEntity = function(e) {
                                this._bindEntityNative(e)
                            }, t.prototype.destroy = function() {
                                this._unbindEntityNative(), t.POLL_MANAGER.dispose(this)
                            }, t.prototype._bindEntityNative = function(e) {
                                this.uint32View[this._entityIdOffset] = e.id
                            }, t.prototype._unbindEntityNative = function() {
                                this.uint32View[this._entityIdOffset] = 0
                            }, t.POLL_MANAGER = new it(rt, ot, (function(e) {
                                return nt.createCullingComponentPool(e)
                            })), t
                        }($e),
                        at = Ne.worker,
                        ut = function(e) {
                            function t(t, i) {
                                var n = e.call(this) || this,
                                    r = n._createNativeObj(t, i);
                                return r.id < 0 || !r.data || (n._init(r), n._initU32View(), n._macros = i.macros, n._meshCount = i.meshCount, n._uniforms = i.uniformBlock), n
                            }
                            return te(t, e), t.CREATE_FAKE = function(e, t) {
                                return new ct(e, t)
                            }, Object.defineProperty(t.prototype, "uniforms", {
                                get: function() {
                                    return this._uniforms
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "meshCount", {
                                get: function() {
                                    return this._meshCount
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "castShadow", {
                                get: function() {
                                    return !!this._u32view[Q.castShadow]
                                },
                                set: function(e) {
                                    this._u32view[Q.castShadow] = e ? 1 : 0
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "dynamicBatch", {
                                get: function() {
                                    return !!this._u32view[Q.dynamicBatch]
                                },
                                set: function(e) {
                                    this._u32view[Q.dynamicBatch] = e ? 1 : 0
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "skinSkeleton", {
                                set: function(e) {
                                    this._u32view[Q.skinHandle] = e.id, this._skinSkeleton = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "bindTarget", {
                                set: function(e) {
                                    this._u32view[Q.bindTarget] = e ? e.id : 0, this._bindTarget = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "macros", {
                                get: function() {
                                    return this._macros
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype._createNativeObj = function(e, t) {
                                return at.createRenderComponent(t.meshCount, t.uniformBlock.__handle, e.id, t.culling ? t.culling.id : 0, t.renderType, t.macros)
                            }, t.prototype.changeMacros = function(e) {
                                this._macros = this._macros || {}, Object.assign(this._macros, e), at.changeMeshMacros(this.__handle, this._macros, !0)
                            }, t.prototype.getStartIndex = function(e) {
                                return this._u32view[Q.start + Q.size * e + Q.startIndex]
                            }, t.prototype.setStartIndex = function(e, t) {
                                this._u32view[Q.start + Q.size * e + Q.startIndex] = t
                            }, t.prototype.getNumIndices = function(e) {
                                return this._u32view[Q.start + Q.size * e + Q.numIndices]
                            }, t.prototype.setNumIndices = function(e, t) {
                                this._u32view[Q.start + Q.size * e + Q.numIndices] = t
                            }, t.prototype.getVertexBuffer = function(e) {
                                return this._vertexes[e]
                            }, t.prototype.setVertexBuffer = function(e, t) {
                                this._vertexes || (this._vertexes = new Array(this._meshCount)), this._u32view[Q.start + Q.size * e + Q.vertexBufferId] = t.id, this._vertexes[e] = t
                            }, t.prototype.getIndexBuffer = function(e) {
                                return this._indexes[e]
                            }, t.prototype.setIndexBuffer = function(e, t) {
                                this._indexes || (this._indexes = new Array(this._meshCount)), this._u32view[Q.start + Q.size * e + Q.indexBufferId] = t.id, this._indexes[e] = t
                            }, t.prototype.getVertexData = function(e) {
                                return this._vertexes && this._vertexes[e]
                            }, t.prototype.setVertexData = function(e, t) {
                                this._vertexes || (this._vertexes = new Array(this._meshCount)), this._u32view[Q.start + Q.size * e + Q.vertexBufferId] = t.id, this._vertexes[e] = t
                            }, t.prototype.getIndexData = function(e) {
                                return this._indexes && this._indexes[e]
                            }, t.prototype.setIndexData = function(e, t) {
                                this._indexes || (this._indexes = new Array(this._meshCount)), this._u32view[Q.start + Q.size * e + Q.indexBufferId] = t.id, this._indexes[e] = t
                            }, t.prototype.getMaterial = function(e) {
                                return this._materials && this._materials[e]
                            }, t.prototype.setMaterial = function(e, t) {
                                this._materials || (this._materials = new Array(this._meshCount)), this._u32view[Q.start + Q.size * e + Q.materialId] = t ? t.id : 0, this._materials[e] = t
                            }, t.prototype.fastSet = function(e, t, i, n, r) {
                                this._vertexes = e, this._indexes = t, this._materials = i;
                                for (var o = 0; o < this._meshCount; o += 1) this.setVertexBuffer(o, e[o]), this.setIndexBuffer(o, t[o]), this.setMaterial(o, i[o]), this.setStartIndex(o, n[o]), this.setNumIndices(o, r[o])
                            }, t.prototype.setDirty = function() {
                                this._handle.setSharedDirty && this._handle.setSharedDirty()
                            }, t.prototype.copyStates = function(e) {
                                e._u32view.length < this._u32view.length ? this._u32view.set(e._u32view, 0) : this._u32view.set(new Uint32Array(e._u32view.buffer, 0, this._u32view.length), 0), this._materials = e._materials, this._vertexes = e._vertexes, this._indexes = e._indexes
                            }, t.OFFSETS = Q, t
                        }(Ke),
                        ct = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return te(t, e), t.prototype._createNativeObj = function(e, t) {
                                return {
                                    id: 0,
                                    data: new ArrayBuffer(4 * (Q.start + Q.size * t.meshCount)),
                                    setSharedDirty: function() {}
                                }
                            }, Object.defineProperty(t.prototype, "uniforms", {
                                get: function() {
                                    return this._uniforms
                                },
                                set: function(e) {
                                    this._uniforms = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t
                        }(ut),
                        lt = Ne.worker,
                        ft = function(e) {
                            function t(t, i) {
                                var n = e.call(this) || this;
                                n.flag = i, n._boneNum = 0, n._boneNum = t;
                                var r = lt.createSkinning(t, i);
                                return r.id < 0 || !r.data || (n._init(r), n._initU32View()), n
                            }
                            return te(t, e), t.UPDATE_MATS = function(e, t) {
                                lt.updateSkinnings(e, t)
                            }, Object.defineProperty(t.prototype, "boneNum", {
                                get: function() {
                                    return this._boneNum
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "boneInverseModel", {
                                get: function() {
                                    return this._boneInverseModel
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "boneOffsetMatrices", {
                                get: function() {
                                    return this._boneOffsetMatrices
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.setBoneMatrix = function(e, t, i) {
                                var n = this._boneNum;
                                if (t.length === n && i.length === n) {
                                    for (var r = [], o = 0; o < n; o++) r.push(i[o].id);
                                    this._u32view[Z.boneInverseModelId] = e.id, this._u32view.set(t, Z.boneIndices);
                                    var s = Z.boneIndices + n * Z.perBoneIndices;
                                    this._u32view.set(r, s), this._boneOffsetMatrices = new Float32Array(this._buffer, this._byteOffset + 4 * (Z.boneIndices + n * (Z.perBoneIndices + Z.perBoneEntityId)), n * (1 & this.flag ? 12 : 16)), this._boneInverseModel = e
                                } else console.warn("setBoneMatrix Error")
                            }, t.prototype.getBoneNum = function() {
                                return this._boneNum
                            }, t.prototype.getBoneOffsetMatrices = function() {
                                return this._boneOffsetMatrices
                            }, t
                        }(Ke),
                        ht = Ne.worker,
                        pt = function(e) {
                            function t(t) {
                                var i = e.call(this) || this,
                                    n = ht.createDynamicBones(t ? t.id : 0);
                                return n.id < 0 || !n.data || (i._init(n), i._initU32View()), i
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "stiffness", {
                                get: function() {
                                    return this._f32view[$.stiffness]
                                },
                                set: function(e) {
                                    this._f32view[$.stiffness] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "damping", {
                                get: function() {
                                    return this._f32view[$.damping]
                                },
                                set: function(e) {
                                    this._f32view[$.damping] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "elasticity", {
                                get: function() {
                                    return this._f32view[$.elasticity]
                                },
                                set: function(e) {
                                    this._f32view[$.elasticity] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.preUpdate = function() {
                                this._handle.preUpdate()
                            }, t.prototype.update = function(e, t) {
                                t ? this._handle.update(e, t.x, t.y, t.z) : this._handle.update(e)
                            }, t.prototype.rebuild = function() {
                                this._handle.rebuild()
                            }, t.prototype.resetRoot = function(e) {
                                this._handle.resetRoot(e ? e.id : 0)
                            }, t.OFFSETS = $, t
                        }(Ke),
                        dt = Ne.worker,
                        _t = new Float32Array(new ArrayBuffer(4 * G.size));
                    _t.set([0, 0, 0, 1, 1], 0);
                    var yt = function(e) {
                            function t() {
                                var i = e.call(this) || this,
                                    n = t.POLL_MANAGER.allocateOne();
                                return i._init(n, t.POLL_MANAGER.pools), i.entityOffset = (i._poolIndex >> 6) * G.size, i.localRotationOffset = i.entityOffset + G.rotation, i.localPositionOffset = i.entityOffset + G.position, i.localScaleOffset = i.entityOffset + G.scale, i.worldMatrixOffset = i.entityOffset + G.worldMatrix, i.active = !0, i
                            }
                            return te(t, e), t.prototype.addChild = function(e) {
                                dt.eventBridge.entityAddChild(this.id, e.id)
                            }, t.prototype.addChildAtIndex = function(e, t) {
                                dt.eventBridge.entityAddChildAtIndex(this.id, e.id, t)
                            }, t.prototype.removeFromParent = function() {
                                dt.eventBridge.entityRemoveFromParent(this.id)
                            }, t.prototype.setAsRoot = function() {
                                dt.eventBridge.setRootEntity(this.id)
                            }, t.prototype.destroy = function() {
                                this.removeFromParent(), t.POLL_MANAGER.dispose(this)
                            }, t.prototype.clear = function() {
                                dt.eventBridge.entityClear(this.id)
                            }, t.prototype.setLocalMatrixDirty = function() {
                                dt.eventBridge.entitySetLocalMatrixDirty(this.id)
                            }, Object.defineProperty(t.prototype, "active", {
                                set: function(e) {
                                    dt.eventBridge.entitySetActive(this.id, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.POLL_MANAGER = new it(_t, _t, (function(e) {
                                return dt.createNodePool(e, !1)
                            })), t.OFFSETS = G, t
                        }($e),
                        vt = function() {
                            function e(e, t) {
                                this._ctor = e, this._index = 0, this._size = void 0 !== t ? t : 500, this._array = new e(this._size)
                            }
                            return e.prototype.push = function(e) {
                                if (this._index >= this._size) {
                                    var t = new this._ctor(2 * this._size);
                                    t.set(this._array), this._array = t, this._size *= 2
                                }
                                this._array[this._index] = e, this._index++
                            }, e.prototype.pop = function() {
                                return this._index--, this._array[this._index]
                            }, e.prototype.getByIndex = function(e) {
                                return e >= this._index ? -1 : this._array[e]
                            }, e.prototype.size = function() {
                                return this._index
                            }, e.prototype.clear = function() {
                                this._index = 0
                            }, Object.defineProperty(e.prototype, "buffer", {
                                get: function() {
                                    return this._array.buffer
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e
                        }(),
                        gt = Ne.worker,
                        wt = new Uint32Array(new ArrayBuffer(4 * W.size)),
                        bt = new Float32Array(wt.buffer);
                    wt[0] = 1, bt.set([0, 0, 0, 1], 1), bt.set([0, 0, 0], 5), bt.set([1, 1, 1], 8);
                    var Et = function(e) {
                            function t() {
                                var i = e.call(this) || this,
                                    n = t.POLL_MANAGER.allocateOne();
                                return i._init(n, t.POLL_MANAGER.pools), i.entityOffset = (i._poolIndex >> 6) * W.size, i.localRotationTypeOffset = i.entityOffset + W.rotationType, i.localQuaternionOffset = i.entityOffset + W.rotation, i.localPositionOffset = i.entityOffset + W.position, i.localScaleOffset = i.entityOffset + W.scale, i.worldMatrixOffset = i.entityOffset + W.worldOffset, i.extOffset = (i._poolIndex >> 6) * H.size, i.layerOffset = i.extOffset + H.layer, i.mixedLayerMaskOffset = i.extOffset + H.mixedLayerMask, i.active = !0, i
                            }
                            return te(t, e), t.CREATE_TREE = function(e, i, n, r) {
                                void 0 === r && (r = !1), t._CREATE_TREE_IDS.clear();
                                for (var o = 0; o < e; o++) n[o] = new t, t._CREATE_TREE_IDS.push(n[o].id);
                                var s = gt.createNodeTree(e, t._CREATE_TREE_IDS.buffer, i, r, !0);
                                if (!s)
                                    for (o = 0; o < e; o++) t.POLL_MANAGER.dispose(n[o]);
                                return s
                            }, t.prototype.setUsingEuler = function(e) {
                                e ? this._nativePool._u32view[this.localRotationTypeOffset] &= ~W.dfRotationType : this._nativePool._u32view[this.localRotationTypeOffset] |= W.dfRotationType
                            }, t.prototype.isUsingEuler = function() {
                                return 0 == (this._nativePool._u32view[this.localRotationTypeOffset] & W.dfRotationType)
                            }, t.prototype.setLayer = function(e) {
                                this._nativePool.u32viewExt && e !== this.getLayer() && (this._nativePool.u32viewExt[this.layerOffset] = e, this.setLocalMatrixDirty())
                            }, t.prototype.getLayer = function() {
                                return this._nativePool.u32viewExt ? this._nativePool.u32viewExt[this.layerOffset] : 0
                            }, t.prototype.getMixedLayerMask = function() {
                                return this._nativePool.u32viewExt ? this._nativePool.u32viewExt[this.mixedLayerMaskOffset] : 1
                            }, t.prototype.addChild = function(e) {
                                gt.eventBridge.entityAddChild(this.id, e.id)
                            }, t.prototype.addChildAtIndex = function(e, t) {
                                gt.eventBridge.entityAddChildAtIndex(this.id, e.id, t)
                            }, t.prototype.removeFromParent = function() {
                                gt.eventBridge.entityRemoveFromParent(this.id)
                            }, t.prototype.setAsRoot = function() {
                                gt.eventBridge.setRootEntity(this.id)
                            }, t.prototype.destroy = function() {
                                this.removeFromParent(), t.POLL_MANAGER.dispose(this)
                            }, t.prototype.clear = function(e, i) {
                                for (var n = 0; n < i; n++) t.POLL_MANAGER.dispose(e[n]);
                                gt.eventBridge.entityClear(this.id)
                            }, t.prototype.setLocalMatrixDirty = function() {
                                gt.eventBridge.entitySetLocalMatrixDirty(this.id)
                            }, Object.defineProperty(t.prototype, "active", {
                                set: function(e) {
                                    gt.eventBridge.entitySetActive(this.id, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.POLL_MANAGER = new it(wt, bt, (function(e) {
                                return gt.createNodePool(e, !0)
                            }), 4 * H.size), t.OFFSETS = W, t._CREATE_TREE_IDS = new vt(Uint32Array), t
                        }($e),
                        mt = Ne.worker,
                        St = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return te(t, e), t.prototype._createNativeModel = function(e, t) {
                                var i;
                                e === s.EDataModelType.AnimationClip ? i = mt.createAnimationClipModel(t) : e === s.EDataModelType.SkeletonBoneInverse && (i = mt.createBoneInverseModel(t)), i = i || {
                                    id: 0
                                }, this._handle = i
                            }, t
                        }(Ve),
                        Mt = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return te(t, e), t.prototype.setAnimationClip = function(e) {
                                this._createNativeModel(s.EDataModelType.AnimationClip, e)
                            }, t
                        }(St),
                        Tt = Ne.worker,
                        Ot = function(e) {
                            function t(t, i, n, r, o, s, a, u) {
                                var c = e.call(this) || this;
                                return c._handle = Tt.createAnimationClipBinding(t, i, n, r, o, s, a, u), c
                            }
                            return te(t, e), t.prototype.rebind = function(e, t, i, n, r, o, s, a, u, c) {
                                return Tt.rebindAnimationClipBinding(this.__handle, e, t, i, n, r, o, s, a, u, c)
                            }, t.prototype.update = function(e, t, i, n, r, o, s, a, u) {
                                return Tt.updateAnimationClipBinding(this.__handle, e, t, i, n, r, o, s, a, u)
                            }, t.prototype.writeDefaultValues = function() {
                                Tt.writeAnimationClipBindingDefaultValues(this.__handle)
                            }, t
                        }(Ve),
                        At = Ne.worker,
                        kt = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                i.layerCount = t, i._handle = At.createAnimatorControllerModel(t), i._uint32View = new Uint32Array(i._handle.data), i._f32View = new Float32Array(i._handle.data), i._blendStates = new Array(t);
                                for (var n = 0; n < t; n++) i._uint32View[1 + 3 * n] = 1, i._f32View[1 + 3 * n + 1] = 0, i._f32View[1 + 3 * n + 2] = 0;
                                return i
                            }
                            return te(t, e), t.UPDATE_ANIMATOR_CONTROLLERS = function(e, t) {
                                At.updateAnimatorControllers(e, t)
                            }, t.prototype.setAnimationClipBinding = function(e) {
                                this._uint32View[0] = e ? e.id : 0, this._binding = e
                            }, t.prototype.setLayerBlendType = function(e, t) {
                                this._uint32View[1 + 3 * e] = t
                            }, t.prototype.setLayerWeight = function(e, t) {
                                this._f32View[1 + 3 * e + 1] = t
                            }, t.prototype.setLayerBlend = function(e, t) {
                                this._uint32View[1 + 3 * e + 2] = t ? t.id : 0, this._blendStates[e] = t
                            }, t.prototype.setLayerMask = function(e, t) {
                                At.setAnimatorControllerModelMaskAtIndex(this.__handle, e, t)
                            }, t.prototype.update = function() {
                                At.updateAnimatorControllerModel(this.__handle)
                            }, t.prototype.destroy = function() {
                                this._binding = null, this._blendStates = null
                            }, t
                        }(Ve),
                        Dt = Ne.worker,
                        Ct = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                i.count = t, i._index = 0, i._handle = Dt.createAnimatorControllerStateModel(t), i._f32View = new Float32Array(i._handle.data), i._uint32View = new Uint32Array(i._handle.data);
                                for (var n = 0; n < t; n++) i._uint32View[5 * n + 3] = 0, i._f32View[5 * n + 3 + 1] = 0, i._f32View[5 * n + 3 + 2] = 0, i._uint32View[5 * n + 3 + 3] = 0, i._f32View[5 * n + 3 + 4] = 0;
                                return i
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "weight", {
                                get: function() {
                                    return this._f32View[0]
                                },
                                set: function(e) {
                                    this._f32View[0] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "useDefault", {
                                get: function() {
                                    return this._f32View[1]
                                },
                                set: function(e) {
                                    this._f32View[1] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.resetBlendInfo = function() {
                                for (var e = 0; e < this.count; e++) this._f32View[5 * e + 3 + 1] = 0, this._f32View[5 * e + 3 + 2] = 0;
                                this._index = 0
                            }, t.prototype.setNextState = function(e) {
                                this._uint32View[2] = e ? e.id : 0, this._nextState = e
                            }, t.prototype.setBlendInfo = function(e, t, i, n, r) {
                                return !(this._index >= this.count || (this._uint32View[5 * this._index + 3] = e.id, this._f32View[5 * this._index + 3 + 1] = t, this._f32View[5 * this._index + 3 + 2] = i, this._uint32View[5 * this._index + 3 + 3] = n ? n.id : this._uint32View[5 * this._index + 3], this._f32View[5 * this._index + 3 + 4] = r, this._index++, 0))
                            }, t
                        }(Ve),
                        Bt = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                return i._init(t), i
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "dataLength", {
                                get: function() {
                                    return this._u32view[0]
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "byteOffset", {
                                get: function() {
                                    return this._byteOffset + 4
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "arrayBuffer", {
                                get: function() {
                                    return this._buffer
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t
                        }(Ke),
                        Pt = 16384,
                        Rt = 32768,
                        Ft = 393216,
                        Nt = 15728640;

                    function xt(e, t) {
                        return -8 & e | t << 0
                    }

                    function It(e, t) {
                        return -57 & e | t << 3
                    }

                    function Ut(e, t) {
                        return -449 & e | t << 6
                    }

                    function Lt(e, t) {
                        return -3585 & e | t << 9
                    }

                    function Vt(e, t) {
                        return -12289 & e | t << 12
                    }

                    function zt(e, t) {
                        return t ? e | Pt : -16385 & e
                    }

                    function jt(e, t) {
                        return -393217 & e | (1 === t ? 0 : t << 17)
                    }

                    function Gt(e, t) {
                        return -15728641 & e | t - 1 << 20
                    }

                    function Wt(e, t) {
                        return t ? e | Rt : -32769 & e
                    }

                    function Ht(e) {
                        return (7 & e) >> 0
                    }

                    function Kt(e) {
                        return (56 & e) >> 3
                    }

                    function Yt(e) {
                        return (448 & e) >> 6
                    }
                    var Jt = 2147483648;

                    function Qt(e, t) {
                        return t ? e | Jt : 2147483647 & e
                    }

                    function Xt(e, t) {
                        return -16 & e | 15 & t
                    }

                    function qt(e) {
                        return 15 & e
                    }

                    function Zt(e) {
                        return !!(e & Jt)
                    }
                    var $t = 1073741824;

                    function ei(e, t) {
                        return t ? e | $t : -1073741825 & e
                    }

                    function ti(e) {
                        return !!(e & $t)
                    }
                    var ii = 16776960;

                    function ni(e, t) {
                        return 4294963455 & e | t << 8
                    }

                    function ri(e, t) {
                        return 4294905855 & e | t << 8 << 4
                    }

                    function oi(e, t) {
                        return 4293984255 & e | t << 8 << 8
                    }

                    function si(e, t) {
                        return 4279238655 & e | t << 8 << 12
                    }

                    function ai(e) {
                        return (e & ii) >> 8 & 15
                    }

                    function ui(e) {
                        return (e & ii) >> 8 >> 4 & 15
                    }

                    function ci(e) {
                        return (e & ii) >> 8 >> 8 & 15
                    }

                    function li(e) {
                        return (e & ii) >> 8 >> 12 & 15
                    }
                    var fi = 1056964608;

                    function hi(e, t) {
                        return 4043309055 & e | t << 24
                    }

                    function pi(e, t) {
                        return 3489660927 & e | t << 24 << 3
                    }

                    function di(e) {
                        return (e & fi) >> 24 & 7
                    }
                    var _i = 240;

                    function yi(e, t) {
                        return -241 & e | t << 4
                    }

                    function vi(e) {
                        return 0 != (e & _i)
                    }

                    function gi(e) {
                        return (e & _i) >> 4
                    }
                    var wi = 255;

                    function bi(e, t) {
                        return -256 & e | (255 & t) << 0
                    }

                    function Ei(e) {
                        return (e & wi) >> 0
                    }
                    var mi = 65280;

                    function Si(e, t) {
                        return -65281 & e | t << 8
                    }

                    function Mi(e) {
                        return (e & mi) >> 8
                    }
                    var Ti = 983040;

                    function Oi(e, t) {
                        return -983041 & e | t << 16
                    }

                    function Ai(e) {
                        return 0 != (e & Ti)
                    }

                    function ki(e) {
                        return (e & Ti) >> 16
                    }
                    var Di = 20,
                        Ci = 4293918720;

                    function Bi(e, t) {
                        return 4279238655 & e | t << Di
                    }

                    function Pi(e, t) {
                        return 4043309055 & e | t << Di << 4
                    }

                    function Ri(e, t) {
                        return 268435455 & e | t << Di << 8
                    }

                    function Fi(e) {
                        return (e & Ci) >> Di & 15
                    }

                    function Ni(e) {
                        return (e & Ci) >> Di >> 4 & 15
                    }

                    function xi(e) {
                        return (e & Ci) >> Di >> 8 & 15
                    }
                    var Ii = 255;

                    function Ui(e, t) {
                        return -256 & e | (255 & t) << 0
                    }

                    function Li(e) {
                        return e & Ii
                    }
                    var Vi = 768;

                    function zi(e, t) {
                        return -769 & e | t << 8
                    }

                    function ji(e) {
                        return (e & Vi) >> 8
                    }

                    function Gi(e) {
                        return !!(e & Vi)
                    }
                    var Wi = 14336;

                    function Hi(e, t) {
                        return -14337 & e | t << 11
                    }

                    function Ki(e) {
                        return (e & Wi) >> 11
                    }
                    var Yi = Ne.worker,
                        Ji = function(e) {
                            function t(t, i, n, r, o, a, u) {
                                void 0 === u && (u = !1);
                                var c = e.call(this) || this,
                                    l = Yi.createEffect(t, i, n, r, o, a, u);
                                if (l.id < 0 || !l.data) return c;
                                c._handle = l, c._init(l), c._initU32View();
                                for (var f = 0; f < i; f += 1) {
                                    var h = f * X.size + X.colorDepth;
                                    c._u32view[h] = 15 | c._u32view[h], c._u32view[h] = oi(c._u32view[h], s.EBlendFactor.ZERO), c._u32view[h] = si(c._u32view[h], s.EBlendFactor.ONE)
                                }
                                return c._passCount = i, c
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "passCount", {
                                get: function() {
                                    return this._passCount
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.warmUp = function() {
                                return this._handle.warmUp()
                            }, t.prototype.getBlendOn = function(e) {
                                return ti(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setBlendOn = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = ei(this._u32view[i], t)
                            }, t.prototype.getBlendSrc = function(e) {
                                return ai(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setBlendSrc = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = ni(this._u32view[i], t), this._u32view[i] = oi(this._u32view[i], t)
                            }, t.prototype.getBlendDst = function(e) {
                                return ui(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setBlendDst = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = ri(this._u32view[i], t), this._u32view[i] = si(this._u32view[i], t)
                            }, t.prototype.getBlendSrcRGB = function(e) {
                                return ai(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setBlendSrcRGB = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = ni(this._u32view[i], t)
                            }, t.prototype.getBlendSrcAlpha = function(e) {
                                return ci(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setBlendSrcAlpha = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = oi(this._u32view[i], t)
                            }, t.prototype.getBlendDstRGB = function(e) {
                                return ui(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setBlendDstRGB = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = ri(this._u32view[i], t)
                            }, t.prototype.getBlendDstAlpha = function(e) {
                                return li(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setBlendDstAlpha = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = si(this._u32view[i], t)
                            }, t.prototype.getBlendFunc = function(e) {
                                return di(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setBlendFunc = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = hi(this._u32view[i], t), this._u32view[i] = pi(this._u32view[i], t)
                            }, t.prototype.getDepthTestOn = function(e) {
                                return vi(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setDepthTestOn = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = yi(this._u32view[i], t ? s.ECompareFunc.LEQUAL : 0)
                            }, t.prototype.getDepthTestComp = function(e) {
                                return gi(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setDepthTestComp = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = yi(this._u32view[i], t)
                            }, t.prototype.getDepthWrite = function(e) {
                                return Zt(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setDepthWrite = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = Qt(this._u32view[i], t)
                            }, t.prototype.getColorWrite = function(e) {
                                return qt(this._u32view[e * X.size + X.colorDepth])
                            }, t.prototype.setColorWrite = function(e, t) {
                                var i = e * X.size + X.colorDepth;
                                this._u32view[i] = Xt(this._u32view[i], t)
                            }, t.prototype.getCullFace = function(e) {
                                return ji(this._u32view[e * X.size + X.state])
                            }, t.prototype.setCullFace = function(e, t) {
                                var i = e * X.size + X.state;
                                this._u32view[i] = zi(this._u32view[i], t)
                            }, t.prototype.getCullOn = function(e) {
                                return Gi(this._u32view[e * X.size + X.state])
                            }, t.prototype.setCullOn = function(e, t) {
                                var i = e * X.size + X.state;
                                this._u32view[i] = zi(this._u32view[i], t ? s.ECullMode.BACK : s.ECullMode.NONE)
                            }, t.prototype.getPrimitiveType = function(e) {
                                return Ki(this._u32view[e * X.size + X.state])
                            }, t.prototype.setPrimitiveType = function(e, t) {
                                var i = e * X.size + X.state;
                                this._u32view[i] = Hi(this._u32view[i], t)
                            }, t.prototype.getStencilTestOn = function(e) {
                                return Ai(this._u32view[e * X.size + X.fstencil])
                            }, t.prototype.setStencilTestOn = function(e, t) {
                                var i = e * X.size + X.bstencil,
                                    n = Oi(this._u32view[i], t ? s.ECompareFunc.LEQUAL : 0);
                                this._u32view[i] = n, i = e * X.size + X.fstencil, this._u32view[i] = n
                            }, t.prototype.getStencilComp = function(e) {
                                return ki(this._u32view[e * X.size + X.fstencil])
                            }, t.prototype.setStencilComp = function(e, t) {
                                var i = e * X.size + X.bstencil,
                                    n = Oi(this._u32view[i], t);
                                this._u32view[i] = n, i = e * X.size + X.fstencil, this._u32view[i] = n
                            }, t.prototype.getStencilPass = function(e) {
                                return xi(this._u32view[e * X.size + X.fstencil])
                            }, t.prototype.setStencilPass = function(e, t) {
                                var i = e * X.size + X.bstencil,
                                    n = Ri(this._u32view[i], t);
                                this._u32view[i] = n, i = e * X.size + X.fstencil, this._u32view[i] = n
                            }, t.prototype.getStencilFail = function(e) {
                                return Fi(this._u32view[e * X.size + X.fstencil])
                            }, t.prototype.setStencilFail = function(e, t) {
                                var i = e * X.size + X.bstencil,
                                    n = Bi(this._u32view[i], t);
                                this._u32view[i] = n, i = e * X.size + X.fstencil, this._u32view[i] = n
                            }, t.prototype.getStencilZFail = function(e) {
                                return Ni(this._u32view[e * X.size + X.fstencil])
                            }, t.prototype.setStencilZFail = function(e, t) {
                                var i = e * X.size + X.bstencil,
                                    n = Pi(this._u32view[i], t);
                                this._u32view[i] = n, i = e * X.size + X.fstencil, this._u32view[i] = n
                            }, t.prototype.getStencilWriteMask = function(e) {
                                return Li(this._u32view[e * X.size + X.fstencil])
                            }, t.prototype.setStencilWriteMask = function(e, t) {
                                var i = e * X.size + X.bstencil,
                                    n = Ui(this._u32view[i], t);
                                this._u32view[i] = n, i = e * X.size + X.fstencil, this._u32view[i] = n
                            }, t.prototype.getStencilReadMask = function(e) {
                                return Ei(this._u32view[e * X.size + X.fstencil])
                            }, t.prototype.setStencilReadMask = function(e, t) {
                                var i = e * X.size + X.bstencil,
                                    n = bi(this._u32view[i], t);
                                this._u32view[i] = n, i = e * X.size + X.fstencil, this._u32view[i] = n
                            }, t.prototype.getStencilRef = function(e) {
                                return Mi(this._u32view[e * X.size + X.fstencil])
                            }, t.prototype.setStencilRef = function(e, t) {
                                var i = e * X.size + X.bstencil,
                                    n = Si(this._u32view[i], t);
                                this._u32view[i] = n, i = e * X.size + X.fstencil, this._u32view[i] = n
                            }, t.prototype.getUseMaterialStates = function(e) {
                                return !!(1 & this._u32view[e * X.size + X.useMaterialStates])
                            }, t.prototype.setUseMaterialStates = function(e, t) {
                                this._u32view[e * X.size + X.useMaterialStates] = t ? 4294967295 : 0
                            }, t.prototype._getUseMaterialStateMask = function(e, t) {
                                return function(e, t) {
                                    return !!(e & 1 << t)
                                }(this._u32view[e * X.size + X.useMaterialStates], t)
                            }, t.prototype._setUseMaterialStateMask = function(e, t, i) {
                                this._u32view[e * X.size + X.useMaterialStates] = function(e, t, i) {
                                    return i ? e | t : e & ~t
                                }(this._u32view[e * X.size + X.useMaterialStates], t, i)
                            }, t.prototype.getUseMaterialStateBlendOn = function(e) {
                                return this._getUseMaterialStateMask(e, 1)
                            }, t.prototype.setUseMaterialStateBlendOn = function(e, t) {
                                return this._setUseMaterialStateMask(e, 1, t)
                            }, t.prototype.getUseMaterialStateBlendSrcRGB = function(e) {
                                return this._getUseMaterialStateMask(e, 2)
                            }, t.prototype.setUseMaterialStateBlendSrcRGB = function(e, t) {
                                return this._setUseMaterialStateMask(e, 2, t)
                            }, t.prototype.getUseMaterialStateBlendSrcAlpha = function(e) {
                                return this._getUseMaterialStateMask(e, 3)
                            }, t.prototype.setUseMaterialStateBlendSrcAlpha = function(e, t) {
                                return this._setUseMaterialStateMask(e, 3, t)
                            }, t.prototype.getUseMaterialStateBlendDstRGB = function(e) {
                                return this._getUseMaterialStateMask(e, 4)
                            }, t.prototype.setUseMaterialStateBlendDstRGB = function(e, t) {
                                return this._setUseMaterialStateMask(e, 4, t)
                            }, t.prototype.getUseMaterialStateBlendDstAlpha = function(e) {
                                return this._getUseMaterialStateMask(e, 5)
                            }, t.prototype.setUseMaterialStateBlendDstAlpha = function(e, t) {
                                return this._setUseMaterialStateMask(e, 5, t)
                            }, t.prototype.getUseMaterialStateBlendFunc = function(e) {
                                return this._getUseMaterialStateMask(e, 6)
                            }, t.prototype.setUseMaterialStateBlendFunc = function(e, t) {
                                return this._setUseMaterialStateMask(e, 6, t)
                            }, t.prototype.getUseMaterialStateDepthTestOn = function(e) {
                                return this._getUseMaterialStateMask(e, 7)
                            }, t.prototype.setUseMaterialStateDepthTestOn = function(e, t) {
                                return this._setUseMaterialStateMask(e, 7, t)
                            }, t.prototype.getUseMaterialStateDepthTestComp = function(e) {
                                return this._getUseMaterialStateMask(e, 8)
                            }, t.prototype.setUseMaterialStateDepthTestComp = function(e, t) {
                                return this._setUseMaterialStateMask(e, 8, t)
                            }, t.prototype.getUseMaterialStateDepthWrite = function(e) {
                                return this._getUseMaterialStateMask(e, 9)
                            }, t.prototype.setUseMaterialStateDepthWrite = function(e, t) {
                                return this._setUseMaterialStateMask(e, 9, t)
                            }, t.prototype.getUseMaterialStateCullOn = function(e) {
                                return this._getUseMaterialStateMask(e, 10)
                            }, t.prototype.setUseMaterialStateCullOn = function(e, t) {
                                return this._setUseMaterialStateMask(e, 10, t)
                            }, t.prototype.getUseMaterialStateCullFace = function(e) {
                                return this._getUseMaterialStateMask(e, 11)
                            }, t.prototype.setUseMaterialStateCullFace = function(e, t) {
                                return this._setUseMaterialStateMask(e, 11, t)
                            }, t.prototype.getUseMaterialStatePrimitiveType = function(e) {
                                return this._getUseMaterialStateMask(e, 12)
                            }, t.prototype.setUseMaterialStatePrimitiveType = function(e, t) {
                                return this._setUseMaterialStateMask(e, 12, t)
                            }, t.prototype.getUseMaterialStateStencilTestOn = function(e) {
                                return this._getUseMaterialStateMask(e, 13)
                            }, t.prototype.setUseMaterialStateStencilTestOn = function(e, t) {
                                return this._setUseMaterialStateMask(e, 13, t)
                            }, t.prototype.getUseMaterialStateStencilTestComp = function(e) {
                                return this._getUseMaterialStateMask(e, 14)
                            }, t.prototype.setUseMaterialStateStencilTestComp = function(e, t) {
                                return this._setUseMaterialStateMask(e, 14, t)
                            }, t.prototype.getUseMaterialStateStencilTestPass = function(e) {
                                return this._getUseMaterialStateMask(e, 15)
                            }, t.prototype.setUseMaterialStateStencilTestPass = function(e, t) {
                                return this._setUseMaterialStateMask(e, 15, t)
                            }, t.prototype.getUseMaterialStateStencilTestFail = function(e) {
                                return this._getUseMaterialStateMask(e, 16)
                            }, t.prototype.setUseMaterialStateStencilTestFail = function(e, t) {
                                return this._setUseMaterialStateMask(e, 16, t)
                            }, t.prototype.getUseMaterialStateStencilTestZFail = function(e) {
                                return this._getUseMaterialStateMask(e, 17)
                            }, t.prototype.setUseMaterialStateStencilTestZFail = function(e, t) {
                                return this._setUseMaterialStateMask(e, 17, t)
                            }, t.prototype.getUseMaterialStateColorWrite = function(e) {
                                return this._getUseMaterialStateMask(e, 18)
                            }, t.prototype.setUseMaterialStateColorWrite = function(e, t) {
                                return this._setUseMaterialStateMask(e, 18, t)
                            }, t.prototype.showDebugInfo = function() {
                                for (var e = "", t = 0; t < this._passCount; t += 1) e += "Pass: " + t + ":\nPrimitiveType(" + s.EPrimitiveType[this.getPrimitiveType(t)] + "),\nBlendOn(" + this.getBlendOn(t) + "), BlendSrc(" + s.EBlendFactor[this.getBlendSrcRGB(t)] + "," + s.EBlendFactor[this.getBlendSrcAlpha(t)] + "), BlendDst(" + s.EBlendFactor[this.getBlendDstRGB(t)] + "," + s.EBlendFactor[this.getBlendDstAlpha(t)] + "), BlendFunc(" + s.EBlendEquation[this.getBlendFunc(t)] + "),\nDepthTestOn(" + this.getDepthTestOn(t) + "), DepthTestComp(" + s.ECompareFunc[this.getDepthTestComp(t)] + "), DepthWrite(" + this.getDepthWrite(t) + "),\nCullOn(" + this.getCullOn(t) + "), CullFace(" + s.ECullMode[this.getCullFace(t)] + "),\nStencilTestOn(" + this.getStencilTestOn(t) + "), StencilComp(" + s.ECompareFunc[this.getStencilComp(t)] + "), StencilPass(" + s.EStencilOp[this.getStencilPass(t)] + "), StencilFail(" + s.EStencilOp[this.getStencilFail(t)] + "), StencilZFail(" + s.EStencilOp[this.getStencilZFail(t)] + "),\nStencilWriteMask(" + this.getStencilWriteMask(t) + "), StencilReadMask(" + this.getStencilReadMask(t) + "), StencilRef(" + this.getStencilRef(t) + ")\n      ";
                                return e
                            }, t.OFFSETS = X, t
                        }(Ke),
                        Qi = Ne.worker,
                        Xi = function(e) {
                            function t(t, i, n) {
                                var r = e.call(this) || this;
                                return r._createNativeMat(t, i, n), r.renderQueue = 2e3, r._macros = t, i && (r.effect = i), n && (r.uniforms = n), r
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "effect", {
                                get: function() {
                                    return this._effect
                                },
                                set: function(e) {
                                    this._u32view[q.effect] = e.id, this._effect = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "uniforms", {
                                get: function() {
                                    return this._uniforms
                                },
                                set: function(e) {
                                    this._u32view[q.uniformBlock] = e.id, this._uniforms = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "renderQueue", {
                                get: function() {
                                    return this._u32view[q.renderQueue]
                                },
                                set: function(e) {
                                    this._u32view[q.renderQueue] = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "useInstance", {
                                get: function() {
                                    return !!this._u32view[q.useInstance]
                                },
                                set: function(e) {
                                    this._u32view[q.useInstance] = e ? 1 : 0
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendOn", {
                                get: function() {
                                    return ti(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = ei(this._u32view[t], e), this._u32view[q.colorDepthMask] |= $t
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendSrcRGB", {
                                get: function() {
                                    return ai(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = ni(this._u32view[t], e), this._u32view[q.colorDepthMask] |= 3840
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendSrcRGBChanged", {
                                get: function() {
                                    return !!(3840 & this._u32view[q.colorDepthMask])
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendSrcAlpha", {
                                get: function() {
                                    return ci(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = oi(this._u32view[t], e), this._u32view[q.colorDepthMask] |= 983040
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendSrc", {
                                set: function(e) {
                                    this.blendSrcRGB = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendDstRGB", {
                                get: function() {
                                    return ui(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = ri(this._u32view[t], e), this._u32view[q.colorDepthMask] |= 61440
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendDstRGBChanged", {
                                get: function() {
                                    return !!(61440 & this._u32view[q.colorDepthMask])
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendDstAlpha", {
                                get: function() {
                                    return li(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = si(this._u32view[t], e), this._u32view[q.colorDepthMask] |= 15728640
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendDst", {
                                set: function(e) {
                                    this.blendDstRGB = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendFunc", {
                                get: function() {
                                    return di(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = hi(this._u32view[t], e), this._u32view[t] = pi(this._u32view[t], e), this._u32view[q.colorDepthMask] |= fi
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "depthTestOn", {
                                get: function() {
                                    return vi(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = yi(this._u32view[t], e ? s.ECompareFunc.LEQUAL : 0), this._u32view[q.colorDepthMask] |= _i
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "depthTestComp", {
                                get: function() {
                                    return gi(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = yi(this._u32view[t], e), this._u32view[q.colorDepthMask] |= _i
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "depthWrite", {
                                get: function() {
                                    return Zt(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = Qt(this._u32view[t], e), this._u32view[q.colorDepthMask] |= Jt
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "colorWrite", {
                                get: function() {
                                    return qt(this._u32view[q.colorDepth])
                                },
                                set: function(e) {
                                    var t = q.colorDepth;
                                    this._u32view[t] = Xt(this._u32view[t], e), this._u32view[q.colorDepthMask] |= 15
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "cullFace", {
                                get: function() {
                                    return ji(this._u32view[q.state])
                                },
                                set: function(e) {
                                    var t = q.state;
                                    this._u32view[t] = zi(this._u32view[t], e), this._u32view[q.stateMask] |= Vi
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "cullOn", {
                                get: function() {
                                    return Gi(this._u32view[q.state])
                                },
                                set: function(e) {
                                    var t = q.state;
                                    this._u32view[t] = zi(this._u32view[t], e ? s.ECullMode.BACK : s.ECullMode.NONE), this._u32view[q.stateMask] |= Vi
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "primitiveType", {
                                get: function() {
                                    return Ki(this._u32view[q.state])
                                },
                                set: function(e) {
                                    var t = q.state;
                                    this._u32view[t] = Hi(this._u32view[t], e), this._u32view[q.stateMask] |= Wi
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilTestOn", {
                                get: function() {
                                    return Ai(this._u32view[q.fstencil])
                                },
                                set: function(e) {
                                    var t = q.bstencil,
                                        i = Oi(this._u32view[t], e ? s.ECompareFunc.LEQUAL : 0);
                                    this._u32view[t] = i, t = q.fstencil, this._u32view[t] = i, this._u32view[q.bstencilMask] |= Ti, this._u32view[q.fstencilMask] |= Ti
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilComp", {
                                get: function() {
                                    return ki(this._u32view[q.fstencil])
                                },
                                set: function(e) {
                                    var t = q.bstencil,
                                        i = Oi(this._u32view[t], e);
                                    this._u32view[t] = i, t = q.fstencil, this._u32view[t] = i, this._u32view[q.bstencilMask] |= Ti, this._u32view[q.fstencilMask] |= Ti
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilPass", {
                                get: function() {
                                    return xi(this._u32view[q.fstencil])
                                },
                                set: function(e) {
                                    var t = q.bstencil,
                                        i = Ri(this._u32view[t], e);
                                    this._u32view[t] = i, t = q.fstencil, this._u32view[t] = i, this._u32view[q.bstencilMask] |= 4026531840, this._u32view[q.fstencilMask] |= 4026531840
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilFail", {
                                get: function() {
                                    return Fi(this._u32view[q.fstencil])
                                },
                                set: function(e) {
                                    var t = q.bstencil,
                                        i = Bi(this._u32view[t], e);
                                    this._u32view[t] = i, t = q.fstencil, this._u32view[t] = i, this._u32view[q.bstencilMask] |= 15728640, this._u32view[q.fstencilMask] |= 15728640
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilZFail", {
                                get: function() {
                                    return Ni(this._u32view[q.fstencil])
                                },
                                set: function(e) {
                                    var t = q.bstencil,
                                        i = Pi(this._u32view[t], e);
                                    this._u32view[t] = i, t = q.fstencil, this._u32view[t] = i, this._u32view[q.bstencilMask] |= 251658240, this._u32view[q.fstencilMask] |= 251658240
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilWriteMask", {
                                get: function() {
                                    return Li(this._u32view[q.state])
                                },
                                set: function(e) {
                                    var t = q.state,
                                        i = Ui(this._u32view[t], e);
                                    this._u32view[t] = i, this._u32view[q.stateMask] |= Ii
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilReadMask", {
                                get: function() {
                                    return Ei(this._u32view[q.fstencil])
                                },
                                set: function(e) {
                                    var t = q.bstencil,
                                        i = bi(this._u32view[t], e);
                                    this._u32view[t] = i, t = q.fstencil, this._u32view[t] = i, this._u32view[q.bstencilMask] |= wi, this._u32view[q.fstencilMask] |= wi
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilRef", {
                                get: function() {
                                    return Mi(this._u32view[q.fstencil])
                                },
                                set: function(e) {
                                    var t = q.bstencil,
                                        i = Si(this._u32view[t], e);
                                    this._u32view[t] = i, t = q.fstencil, this._u32view[t] = i, this._u32view[q.bstencilMask] |= mi, this._u32view[q.fstencilMask] |= mi
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype._setMask = function(e, t, i) {
                                this._u32view[e] = i ? this._u32view[e] | t : this._u32view[e] & ~t
                            }, t.prototype._getMask = function(e, t) {
                                return !!(this._u32view[e] & t)
                            }, Object.defineProperty(t.prototype, "blendOnMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, $t)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, $t, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendSrcRGBMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, 3840)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, 3840, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendSrcAlphaMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, 983040)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, 983040, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendSrcMask", {
                                set: function(e) {
                                    this.blendSrcRGBMask = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendDstRGBMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, 61440)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, 61440, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendDstAlphaMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, 15728640)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, 15728640, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendDstMask", {
                                set: function(e) {
                                    this.blendDstRGBMask = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "blendFuncMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, fi)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, fi, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "depthTestOnMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, _i)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, _i, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "depthTestCompMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, _i)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, _i, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "depthWriteMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, Jt)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, Jt, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "colorWriteMask", {
                                get: function() {
                                    return this._getMask(q.colorDepthMask, 15)
                                },
                                set: function(e) {
                                    this._setMask(q.colorDepthMask, 15, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "cullFaceMask", {
                                get: function() {
                                    return this._getMask(q.stateMask, Vi)
                                },
                                set: function(e) {
                                    this._setMask(q.stateMask, Vi, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "cullOnMask", {
                                get: function() {
                                    return this._getMask(q.stateMask, Vi)
                                },
                                set: function(e) {
                                    this._setMask(q.stateMask, Vi, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "primitiveTypeMask", {
                                get: function() {
                                    return this._getMask(q.stateMask, Wi)
                                },
                                set: function(e) {
                                    this._setMask(q.stateMask, Wi, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilTestOnMask", {
                                get: function() {
                                    return this._getMask(q.bstencilMask, Ti)
                                },
                                set: function(e) {
                                    this._setMask(q.bstencilMask, Ti, e), this._setMask(q.fstencilMask, Ti, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilCompMask", {
                                get: function() {
                                    return this._getMask(q.bstencilMask, Ti)
                                },
                                set: function(e) {
                                    this._setMask(q.bstencilMask, Ti, e), this._setMask(q.fstencilMask, Ti, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilPassMask", {
                                get: function() {
                                    return this._getMask(q.bstencilMask, 4026531840)
                                },
                                set: function(e) {
                                    this._setMask(q.bstencilMask, 4026531840, e), this._setMask(q.fstencilMask, 4026531840, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilFailMask", {
                                get: function() {
                                    return this._getMask(q.bstencilMask, 15728640)
                                },
                                set: function(e) {
                                    this._setMask(q.bstencilMask, 15728640, e), this._setMask(q.fstencilMask, 15728640, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilZFailMask", {
                                get: function() {
                                    return this._getMask(q.bstencilMask, 251658240)
                                },
                                set: function(e) {
                                    this._setMask(q.bstencilMask, 251658240, e), this._setMask(q.fstencilMask, 251658240, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilWriteMaskMask", {
                                get: function() {
                                    return this._getMask(q.stateMask, Ii)
                                },
                                set: function(e) {
                                    this._setMask(q.stateMask, Ii, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilReadMaskMask", {
                                get: function() {
                                    return this._getMask(q.bstencilMask, wi)
                                },
                                set: function(e) {
                                    this._setMask(q.bstencilMask, wi, e), this._setMask(q.fstencilMask, wi, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "stencilRefMask", {
                                get: function() {
                                    return this._getMask(q.bstencilMask, mi)
                                },
                                set: function(e) {
                                    this._setMask(q.bstencilMask, mi, e), this._setMask(q.fstencilMask, mi, e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype._createNativeMat = function(e, t, i) {
                                var n = Qi.createMaterial(e, i);
                                n.id < 0 || !n.data || (this._handle = n, this._init(n), this._initU32View())
                            }, t.prototype.changeMacros = function(e) {
                                this._macros = this._macros || {}, Object.assign(this._macros, e), Qi.changeMaterialMacros(this.__handle, this._macros, !0)
                            }, t.prototype.getMacro = function(e) {
                                var t;
                                return null === (t = this._macros) || void 0 === t ? void 0 : t[e]
                            }, t.prototype.clone = function(e) {
                                var i = new t(Object.assign({}, this._macros), this._effect);
                                return i._f32view.set(this._f32view), i.uniforms = e || this._uniforms.clone(), i
                            }, t.prototype.showDebugInfo = function() {
                                var e = "";
                                return e += "RenderQueue(" + this.renderQueue + "), PrimitiveType(" + s.EPrimitiveType[this.primitiveType] + "),\nOverwrite(" + this._u32view[q.fstencilMask].toString(16) + ", " + this._u32view[q.bstencilMask].toString(16) + ", " + this._u32view[q.blendRGBAMask].toString(16) + ", " + this._u32view[q.colorDepthMask].toString(16) + ", " + this._u32view[q.stateMask].toString(16) + "),\nBlendOn(" + this.blendOn + "), BlendSrc(" + s.EBlendFactor[this.blendSrcRGB] + "," + s.EBlendFactor[this.blendSrcAlpha] + "), BlendDst(" + s.EBlendFactor[this.blendDstRGB] + "," + s.EBlendFactor[this.blendDstAlpha] + "), BlendFunc(" + s.EBlendEquation[this.blendFunc] + "),\nDepthTestOn(" + this.depthTestOn + "), DepthTestComp(" + s.ECompareFunc[this.depthTestComp] + "), DepthWrite(" + this.depthWrite + "),\nCullOn(" + this.cullOn + "), CullFace(" + s.ECullMode[this.cullFace] + "),\nStencilTestOn(" + this.stencilTestOn + "), StencilComp(" + s.ECompareFunc[this.stencilComp] + "), StencilComp(" + s.EStencilOp[this.stencilPass] + "), StencilFail(" + s.EStencilOp[this.stencilFail] + "), StencilZFail(" + s.EStencilOp[this.stencilZFail] + "),\nStencilWriteMask(" + this.stencilWriteMask + "), StencilReadMask(" + this.stencilReadMask + "), StencilRef(" + this.stencilRef + ")\n      "
                            }, t.OFFSETS = q, t
                        }(Ke),
                        qi = Ne.worker,
                        Zi = function(e) {
                            function t(t) {
                                var i = e.call(this) || this,
                                    n = t;
                                return n.colors.forEach((function(e, t) {
                                    e.texture = e.texture.__handle
                                })), n.depth.texture = n.depth.texture.__handle, t.stencil ? n.stencil.texture = n.stencil.texture.__handle : n.stencil = {
                                    texture: {
                                        id: 0
                                    }
                                }, i._handle = qi.createRenderPass(n), i
                            }
                            return te(t, e), t.SCREEN_RENDER_PASS = {
                                id: 0,
                                __handle: {
                                    id: 0
                                }
                            }, t
                        }(Ve),
                        $i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return te(t, e), t.prototype.setBoneInverseMatrix = function(e) {
                                var t = new Float32Array(e.length);
                                t.set(e), this._createNativeModel(s.EDataModelType.SkeletonBoneInverse, t.buffer)
                            }, t
                        }(St),
                        en = Ne.worker,
                        tn = function(e) {
                            function t(t) {
                                var i = e.call(this) || this,
                                    n = t.canvas;
                                n ? (i._width = n.width, i._height = n.height) : (i._width = t.width, i._height = t.height), i._type = t.type || s.ETextureType.D2, i._slice = t.slices || 0, i._mips = t.mips || 0, i._pixelFormat = t.pixelFormat || s.ETextureFormat.RGBA8, Math.log2(i.width) % 1 == 0 && Math.log2(i.height) % 1 == 0 || i.fixNonPOT(t), i._flags = i._buildFlags(t);
                                var r = n ? en.createAutoUpdateTextureFromCanvas(n) : en.createTexture(i._type, i._width, i._height, i._slice, i._mips, i._pixelFormat, i._flags, t.source, t.offsets);
                                return i._handle = r || {
                                    id: 0
                                }, i
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "type", {
                                get: function() {
                                    return this._type
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "width", {
                                get: function() {
                                    return this._width
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "height", {
                                get: function() {
                                    return this._height
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "slice", {
                                get: function() {
                                    return this._slice
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "mips", {
                                get: function() {
                                    return this._mips
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "pixelFormat", {
                                get: function() {
                                    return this._pixelFormat
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "wrapU", {
                                get: function() {
                                    return Le.isWrongWrapMapping ? Yt(this._flags) : Ht(this._flags)
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = Le.isWrongWrapMapping ? Ut(this._flags, e) : xt(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "wrapV", {
                                get: function() {
                                    return Le.isWrongWrapMapping ? Ht(this._flags) : Kt(this._flags)
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = Le.isWrongWrapMapping ? xt(this._flags, e) : It(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "wrapW", {
                                get: function() {
                                    return Le.isWrongWrapMapping ? Kt(this._flags) : Yt(this._flags)
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = Le.isWrongWrapMapping ? It(this._flags, e) : Ut(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "magFilter", {
                                get: function() {
                                    return (12288 & this._flags) >> 12
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = Vt(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "minFilter", {
                                get: function() {
                                    return (3584 & this._flags) >> 9
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = Lt(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "anisoLevel", {
                                get: function() {
                                    return 1 + ((this._flags & Nt) >> 20)
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = Gt(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "sampleCount", {
                                get: function() {
                                    return (this._flags & Ft) >> 17
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = jt(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "generateMipmaps", {
                                get: function() {
                                    return !!(this._flags & Pt)
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = zt(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "isRenderTarget", {
                                get: function() {
                                    return !!(this._flags & Rt)
                                },
                                set: function(e) {
                                    en.updateTextureFlags(this.__handle, this._flags = Wt(this._flags, e))
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.update = function(e) {
                                var t = e.level || 0;
                                en.updateTexture(this.__handle, t, e.slice || 0, e.xoffset || 0, e.yoffset || 0, e.zoffset || 0, e.width || this.width >> t || 1, e.height || this.height >> t || 1, e.buffer)
                            }, t.prototype._buildFlags = function(e) {
                                var t;
                                return this._flags = 0, Le.isWrongWrapMapping ? (e.wrapU && (this._flags = Ut(this._flags, e.wrapU)), e.wrapV && (this._flags = xt(this._flags, e.wrapV)), e.wrapW && (this._flags = It(this._flags, e.wrapW))) : (e.wrapU && (this._flags = xt(this._flags, e.wrapU)), e.wrapV && (this._flags = It(this._flags, e.wrapV)), e.wrapW && (this._flags = Ut(this._flags, e.wrapW))), e.magFilter && (this._flags = Vt(this._flags, e.magFilter)), e.minFilter && (this._flags = Lt(this._flags, e.minFilter)), e.anisoLevel && (this._flags = Gt(this._flags, e.anisoLevel)), e.sampleCount && (this._flags = jt(this._flags, e.sampleCount)), e.generateMipmaps && (this._flags = zt(this._flags, e.generateMipmaps)), e.isRenderTarget && (this._flags = Wt(this._flags, e.isRenderTarget)), e.isWriteOnly && (this._flags = (t = this._flags, e.isWriteOnly ? 65536 | t : -65537 & t)), this._flags
                            }, t.prototype.fixNonPOT = function(e) {
                                e.wrapU = s.EWrapMode.CLAMP_TO_EDGE, e.wrapV = s.EWrapMode.CLAMP_TO_EDGE, e.wrapW = s.EWrapMode.CLAMP_TO_EDGE, e.minFilter = nn.get(e.minFilter), e.magFilter = nn.get(e.magFilter), e.anisoLevel = 0, e.mips = 0, e.generateMipmaps = !1
                            }, t.prototype.showDebugInfo = function() {
                                var e = "";
                                return e += "type(" + s.ETextureType[this.type] + "), format(" + s.ETextureFormat[this.pixelFormat] + "),\nwidth(" + this.width + "), height(" + this.height + "), slice(" + this.slice + "), mips(" + this.mips + "),\nwrapU(" + s.EWrapMode[this.wrapU] + "), wrapV(" + s.EWrapMode[this.wrapV] + "), wrapW(" + s.EWrapMode[this.wrapW] + "),\nmagFilter(" + s.EFilterMode[this.magFilter] + "), minFilter(" + s.EFilterMode[this.minFilter] + "),\nanisoLevel(" + this.anisoLevel + "), sampleCount(" + this.sampleCount + "), generateMipmaps(" + this.generateMipmaps + ")\n    "
                            }, t
                        }(Ve),
                        nn = new Map([
                            [s.EFilterMode.LINEAR, s.EFilterMode.LINEAR],
                            [s.EFilterMode.LINEAR_MIPMAP_LINEAR, s.EFilterMode.LINEAR],
                            [s.EFilterMode.LINEAR_MIPMAP_NEAREST, s.EFilterMode.LINEAR],
                            [s.EFilterMode.NEAREST, s.EFilterMode.NEAREST],
                            [s.EFilterMode.NEAREST_MIPMAP_LINEAR, s.EFilterMode.NEAREST],
                            [s.EFilterMode.NEAREST_MIPMAP_NEAREST, s.EFilterMode.NEAREST]
                        ]),
                        rn = Ne.worker,
                        on = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                return i._handle = i._createNativeObj(t), i._handle.data && (i._f32View = new Float32Array(i._handle.data), i._u32View = new Uint32Array(i._handle.data)), i._descriptor = t, i
                            }
                            return te(t, e), t.CREATE_FAKE = function(e) {
                                return new sn(e)
                            }, Object.defineProperty(t.prototype, "_dataView", {
                                get: function() {
                                    return this._f32View
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "descriptor", {
                                get: function() {
                                    return this._descriptor
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "textures", {
                                get: function() {
                                    return this._textures
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype._createNativeObj = function(e) {
                                return rn.createUniformBlock(e.__handle) || {
                                    id: 0
                                }
                            }, t.prototype.hasKey = function(e) {
                                return this._descriptor.hasKey(e)
                            }, t.prototype.setUniform = function(e, t) {
                                var i = this._descriptor.layout[e];
                                return !!i && (i[0] === s.EUniformType.SAMPLER && (t instanceof tn ? (this._textures = this._textures || {}, this._textures[e] = t, t = t.id) : this._textures && (this._textures[e] = void 0)), this._descriptor.setUniform(e, t, this._f32View, this._u32View), !0)
                            }, t.prototype.getUniform = function(e) {
                                return this._descriptor.getUniform(e, this._f32View, this._u32View)
                            }, t.prototype.getTexture = function(e) {
                                return this._textures[e]
                            }, t.prototype._getFloatOffset = function(e) {
                                return this._descriptor._getFloatOffset(e)
                            }, t.prototype.setAllData = function(e) {
                                this._f32View.set(e, 0)
                            }, t.prototype.clone = function() {
                                var e = new t(this._descriptor);
                                return e._f32View ? (this._textures && (e._textures = Object.assign({}, this._textures)), e._f32View.set(this._f32View), e) : e
                            }, t.prototype.copy = function(e) {
                                if (this._descriptor.id === e._descriptor.id) return this._f32View.set(e._f32View), void(this._textures = e.textures);
                                var t = e.descriptor.layout;
                                for (var i in t)
                                    if (this.hasKey(i)) {
                                        var n = e.getUniform(i);
                                        this.setUniform(i, n), e._textures && e._textures[i] && (this._textures = this._textures || {}, this._textures[i] = e._textures[i])
                                    }
                            }, t.prototype.showDebugInfo = function() {
                                var e = this,
                                    t = "";
                                return Object.keys(this._descriptor.layout).forEach((function(i) {
                                    var n = e._descriptor.getUniform(i, e._f32View, e._u32View);
                                    t += i + ": [" + ("number" == typeof n ? [n] : n).join(",") + "]\n"
                                })), t
                            }, t
                        }(Ve),
                        sn = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return te(t, e), t.prototype._createNativeObj = function(e) {
                                return {
                                    id: 0,
                                    data: new ArrayBuffer(4 * e.size)
                                }
                            }, t
                        }(on),
                        an = Ne.worker,
                        un = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                i._layout = {};
                                var n = 0;
                                return t.uniforms.forEach((function(e) {
                                    var t = e.type;
                                    Le.neverTranspose || e.type === s.EUniformType.MAT4 && (e.type = s.EUniformType.FLOAT4, e.num = 4 * (e.num || 1));
                                    var r = void 0 !== e.num ? e.num : 1,
                                        o = i._getLength(e.type),
                                        a = n + o * r;
                                    i._layout[e.name] = [e.type, n, r, o, t, !!e.needTranspose], n = a
                                })), i._size = n, i._handle = an.createUniformBlockDescriptor(t) || {
                                    id: 0
                                }, i
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "layout", {
                                get: function() {
                                    return this._layout
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this._size
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype._getLength = function(e) {
                                var t = 0;
                                switch (e) {
                                    case s.EUniformType.FLOAT:
                                        t = 1;
                                        break;
                                    case s.EUniformType.FLOAT2:
                                        t = 2;
                                        break;
                                    case s.EUniformType.FLOAT3:
                                        t = 3;
                                        break;
                                    case s.EUniformType.FLOAT4:
                                        t = 4;
                                    case s.EUniformType.MAT2:
                                        t = 4;
                                        break;
                                    case s.EUniformType.MAT3:
                                        t = 9;
                                        break;
                                    case s.EUniformType.MAT4:
                                        t = 16;
                                        break;
                                    case s.EUniformType.SAMPLER:
                                        t = 1
                                }
                                return t
                            }, t.prototype.hasKey = function(e) {
                                return void 0 !== this._layout[e]
                            }, t.prototype.setUniform = function(e, t, i, n) {
                                var r = this._layout[e];
                                if (r) {
                                    var o = r[0],
                                        a = r[1];
                                    switch (o) {
                                        case s.EUniformType.FLOAT:
                                        case s.EUniformType.FLOAT2:
                                        case s.EUniformType.FLOAT3:
                                        case s.EUniformType.FLOAT4:
                                        case s.EUniformType.MAT2:
                                        case s.EUniformType.MAT3:
                                        case s.EUniformType.MAT4:
                                            this._setFloatArray(a, t, i);
                                            break;
                                        case s.EUniformType.SAMPLER:
                                            this._setTexture(a, t, n)
                                    }
                                }
                            }, t.prototype._setFloatArray = function(e, t, i) {
                                i.set(t, e)
                            }, t.prototype._setTexture = function(e, t, i) {
                                i[e] = t
                            }, t.prototype.getUniform = function(e, t, i) {
                                var n = this._layout[e];
                                if (!n) return null;
                                var r = n[0],
                                    o = n[1],
                                    a = n[2],
                                    u = n[3];
                                switch (r) {
                                    case s.EUniformType.FLOAT:
                                    case s.EUniformType.FLOAT2:
                                    case s.EUniformType.FLOAT3:
                                    case s.EUniformType.FLOAT4:
                                    case s.EUniformType.MAT2:
                                    case s.EUniformType.MAT3:
                                    case s.EUniformType.MAT4:
                                        return new Float32Array(t.buffer, 4 * o, a * u);
                                    case s.EUniformType.SAMPLER:
                                        return i[o]
                                }
                            }, t.prototype._getFloatOffset = function(e) {
                                var t = this._layout[e];
                                return t ? t[1] : -1
                            }, t
                        }(Ve),
                        cn = Ne.worker,
                        ln = function(e) {
                            function t(t, i) {
                                void 0 === i && (i = !1);
                                var n = e.call(this) || this;
                                return n._handle = cn.createIndexBuffer(t, i) || {
                                    id: 0
                                }, n._byteSize = t.byteLength, n
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "byteSize", {
                                get: function() {
                                    return this._byteSize
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.update = function(e, t) {
                                cn.updateIndexBuffer(this.__handle, e, t)
                            }, t
                        }(Ve),
                        fn = Ne.worker,
                        hn = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                return i._handle = fn.createIndexData(t), i
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "data", {
                                get: function() {
                                    return this._handle.data
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t
                        }(Ve),
                        pn = Ne.worker,
                        dn = function(e) {
                            function t(t, i) {
                                var n = e.call(this) || this;
                                return n._handle = pn.createVertexBuffer(t, i.__handle) || {
                                    id: 0
                                }, n._layout = i, n._byteSize = t.byteLength, n
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "byteSize", {
                                get: function() {
                                    return this._byteSize
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "layout", {
                                get: function() {
                                    return this._layout
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.update = function(e, t) {
                                pn.updateVertexBuffer(this.__handle, e, t)
                            }, t
                        }(Ve),
                        _n = Ne.worker,
                        yn = function(e) {
                            function t(t, i, n) {
                                var r = e.call(this) || this;
                                return r._handle = _n.createVertexData(t.__handle, i, n.__handle), r._layout = t, r
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "layout", {
                                get: function() {
                                    return this._layout
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "data", {
                                get: function() {
                                    return this._handle.data
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t
                        }(Ve),
                        vn = Ne.worker,
                        gn = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                return i._attributes = {}, i._usages = {}, i._options = t, t.attributes.forEach((function(e) {
                                    i._attributes[e.name] = e, i._usages[e.usage] = e
                                })), i._handle = vn.createVertexLayout(t), i
                            }
                            return te(t, e), Object.defineProperty(t.prototype, "stride", {
                                get: function() {
                                    return this._options.stride
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.getConfigByName = function(e) {
                                return this._attributes[e]
                            }, t.prototype.getConfigByUsage = function(e) {
                                return this._usages[e]
                            }, t
                        }(Ve),
                        wn = Ne.worker,
                        bn = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                return i._options = t, i._handle = wn.createVertexDataDescriptor(t), i
                            }
                            return te(t, e), t
                        }(Ve),
                        En = Ne.worker,
                        mn = function(e) {
                            function t(t) {
                                var i = e.call(this) || this;
                                return i._handle = En.createView(t), i
                            }
                            return te(t, e), t
                        }(Ve),
                        Sn = Ne.worker,
                        Mn = Ne.IS_VALID,
                        Tn = Ne.GET_MAIN_CANVAS,
                        On = Ne.Image,
                        An = Ne.Phys3D,
                        kn = Sn.downloader,
                        Dn = Sn.createWeakRef,
                        Cn = Sn.createWeakRefSentry,
                        Bn = Sn.createNativeUUMap,
                        Pn = Sn.createNativeSUMap,
                        Rn = Sn.createNativeULUMap,
                        Fn = Sn.loadTTFFont,
                        Nn = Sn.getGlyphInfo,
                        xn = Sn.refreshNodesWorldTransform,
                        In = Sn.setGlobalPhysicSystem,
                        Un = Sn.bindRigidBodyToNode,
                        Ln = Sn.bindCCTToNode,
                        Vn = Sn.unbindRigidBody,
                        zn = Sn.unbindCCT,
                        jn = Sn.decodeBase64,
                        Gn = Sn.initDraco,
                        Wn = Sn.decodeDraco,
                        Hn = Sn.eventBridge,
                        Kn = {
                            bindEntityToBone: Hn.bindEntityToBone.bind(Hn),
                            unbindEntityFromBone: Hn.unbindEntityFromBone.bind(Hn),
                            bindEntitiesToBones: Hn.bindEntitiesToBones.bind(Hn),
                            unbindEntitiesFromBones: Hn.unbindEntitiesFromBones.bind(Hn)
                        },
                        Yn = void 0,
                        Jn = void 0 !== (Yn = "undefined" != typeof window && window.top ? window.top.NativeGlobal : "undefined" != typeof NativeGlobal ? NativeGlobal : null === wx || void 0 === wx ? void 0 : wx.NativeGlobal) && Yn.Puppet;
                    s.AnimationClipBinding = Ot, s.AnimationClipModel = Mt, s.AnimatorComponent = Je, s.AnimatorControllerModel = kt, s.AnimatorControllerStateModel = Ct, s.CAMERA_OFFSETS = Y, s.CULLING_OFFSETS = K, s.CameraComponent = Xe, s.CullingComponent = st, s.DYNAMIC_BONES_OFFSETS = $, s.DataBuffer = Bt, s.DataModel = St, s.Downloader = kn, s.DynamicBonesComponent = pt, s.EFFECT_OFFSETS = X, s.ENTITY2D_OFFSETS = G, s.ENTITY3D_EXT_OFFSETS = H, s.ENTITY3D_OFFSETS = W, s.Effect = Ji, s.Entity2D = yt, s.Entity3D = Et, s.GET_MAIN_CANVAS = Tn, s.IS_VALID = Mn, s.Image = On, s.IndexBuffer = ln, s.IndexData = hn, s.LIGHT_OFFSETS = J, s.LightCameraComponent = Ze, s.MATERIAL_OFFSETS = q, s.MESH_OFFSETS = Q, s.Material = Xi, s.MeshRendererComponent = ut, s.POOL_SUB_ID_MASK = j, s.POOL_SUB_ID_SHIT = 6, s.Phys3D = An, s.Puppet = Jn, s.RENDER_ENV_OFFSETS = z, s.RenderEnv = Ue, s.RenderPass = Zi, s.SKINNED_SKELETON_OFFSETS = Z, s.ScalableList = Ge, s.SkeletonBoneInverseModel = $i, s.SkinnedSkeletonComponent = ft, s.Texture = tn, s.UniformBlock = on, s.UniformDescriptor = un, s.VERSION = "1.0.4", s.VertexBuffer = dn, s.VertexData = yn, s.VertexDataDescriptor = bn, s.VertexLayout = gn, s.View = mn, s.bindCCTToNode = Ln, s.bindRigidBodyToNode = Un, s.composeRawBufferEntity2D = function(e, t, i) {
                        var n = new ArrayBuffer(4 * G.size),
                            r = new Float32Array(n);
                        return r[G.rotation] = e, r[G.position] = t[0], r[G.position + 1] = t[1], r[G.scale] = i[0], r[G.scale + 1] = i[1], r
                    }, s.composeRawBufferEntity3D = function(e, t, i, n) {
                        var r = new ArrayBuffer(4 * (W.size - 16)),
                            o = new Uint32Array(r),
                            s = new Float32Array(r);
                        return o[W.rotationType] = e ? 0 : 1, s.set(t, W.rotation), s.set(i, W.position), s.set(n, W.scale), s
                    }, s.composeRawBufferEntity3DWhole = function(e, t, i, n) {
                        var r = new ArrayBuffer(4 * W.size),
                            o = new Uint32Array(r),
                            s = new Float32Array(r);
                        return o[W.rotationType] = e ? 0 : 1, s.set(t, W.rotation), s.set(i, W.position), s.set(n, W.scale), s
                    }, s.createNativeSUMap = Pn, s.createNativeULUMap = Rn, s.createNativeUUMap = Bn, s.createWeakRef = Dn, s.createWeakRefSentry = Cn, s.crossContext = He, s.debugPrint = function(e) {}, s.decodeBase64 = jn, s.decodeDraco = Wn, s.destroy = function() {
                        !Le.isGoodPhysAndScalableList && je.clear(), Sn.destroy()
                    }, s.eventBridge = Kn, s.getGlyphInfo = Nn, s.initDraco = Gn, s.loadTTFFont = Fn, s.refreshNodesWorldTransform = xn, s.renderEnv = Le, s.setGlobalPhysicSystem = In, s.setNodeName = function(e, t) {}, s.setRenderComponentName = function(e, t) {}, s.unbindCCT = zn, s.unbindRigidBody = Vn, s.update = function(e) {
                        He.flush(), !Le.isGoodPhysAndScalableList && je.forEach((function(e) {
                            return e._checkResize()
                        })), Sn.update(e)
                    }, Object.defineProperty(s, "__esModule", {
                        value: !0
                    })
                }, "object" == typeof f && void 0 !== l ? c(f) : "function" == typeof define && define.amd ? define(["exports"], c) : c((u = "undefined" != typeof globalThis ? globalThis : u || self).KanataClass = {}), e.EVertexFormat = f.EVertexFormat, e.EVertexStep = f.EVertexStep, e.EIndexType = f.EIndexType, e.ETextureType = f.ETextureType, e.ETextureFormat = f.ETextureFormat, e.EWrapMode = f.EWrapMode, e.EFilterMode = f.EFilterMode, e.EUniformType = f.EUniformType, e.ECullMode = f.ECullMode, e.EFaceWinding = f.EFaceWinding, e.ECompareFunc = f.ECompareFunc, e.EStencilOp = f.EStencilOp, e.EBlendFactor = f.EBlendFactor, e.EBlendEquation = f.EBlendEquation, e.EColorMask = f.EColorMask, e.EPixelType = f.EPixelType, e.ELoadAction = f.ELoadAction, e.EDataModelType = f.EDataModelType, e.EMeshRenderType = f.EMeshRenderType, e.EPrimitiveType = f.EPrimitiveType, e.EShadowMode = f.EShadowMode, e.EShadowFitMode = f.EShadowFitMode, e.EVertexLayoutUsage = f.EVertexLayoutUsage, e.EVertexBatchOperator = f.EVertexBatchOperator, e.EAnimationBlendType = f.EAnimationBlendType, e.EUseDefaultAddedAction = f.EUseDefaultAddedAction, e.EUseDefaultRetainedAction = f.EUseDefaultRetainedAction, e.EUseDefaultRemovedAction = f.EUseDefaultRemovedAction, e.ESkinnedSkeletonFlag = f.ESkinnedSkeletonFlag, e.RENDER_ENV_OFFSETS = f.RENDER_ENV_OFFSETS, e.POOL_SUB_ID_MASK = f.POOL_SUB_ID_MASK, e.POOL_SUB_ID_SHIT = f.POOL_SUB_ID_SHIT, e.ENTITY2D_OFFSETS = f.ENTITY2D_OFFSETS, e.ENTITY3D_OFFSETS = f.ENTITY3D_OFFSETS, e.ENTITY3D_EXT_OFFSETS = f.ENTITY3D_EXT_OFFSETS, e.CULLING_OFFSETS = f.CULLING_OFFSETS, e.CAMERA_OFFSETS = f.CAMERA_OFFSETS, e.LIGHT_OFFSETS = f.LIGHT_OFFSETS, e.MESH_OFFSETS = f.MESH_OFFSETS, e.EFFECT_OFFSETS = f.EFFECT_OFFSETS, e.MATERIAL_OFFSETS = f.MATERIAL_OFFSETS, e.SKINNED_SKELETON_OFFSETS = f.SKINNED_SKELETON_OFFSETS, e.DYNAMIC_BONES_OFFSETS = f.DYNAMIC_BONES_OFFSETS, e.EEventType = f.EEventType, e.EDracoErrorCode = f.EDracoErrorCode, e.EDracoGeometryType = f.EDracoGeometryType, e.EDracoDecodeType = f.EDracoDecodeType, e.EDracoDataType = f.EDracoDataType, a.set(t, f), f
            }, e.RELEASE_INSTANCE = e => {
                var t = globalThis.KANATA_INSTANCES = globalThis.KANATA_INSTANCES || new Map;
                t.has(e) && t.delete(e)
            }
        }, "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((i = "undefined" != typeof globalThis ? globalThis : i || self).Kanata = {})
    }()
} catch (e) {
    console.error("catch sdkSubPackage: kanata error: ", e)
}