try {
    ! function() {
        let e, t = "getMinigamePlatformGlobalVar";
        globalThis[t] ? e = globalThis[t] : void 0 !== globalThis.WeixinJSBridge && globalThis.WeixinJSBridge[t] && (e = globalThis.WeixinJSBridge[t]);
        var {
            console: i,
            wxNativeConsole: r,
            __wxConfig: s,
            __errorTracer__: n,
            wxConsole: a,
            wxGA: h,
            Reporter: o,
            Foundation: d,
            WeixinJSBridge: l,
            __appServiceSDK__: c,
            __IS_MINIGAME_LIVE_SUB_PACKAGE__: u,
            wxRunOnDebug: g
        } = e();
        (() => {
            var e = {
                    6: e => {
                        function t() {}
                        t.prototype = {
                            on: function(e, t, i) {
                                var r = this.e || (this.e = {});
                                return (r[e] || (r[e] = [])).push({
                                    fn: t,
                                    ctx: i
                                }), this
                            },
                            once: function(e, t, i) {
                                var r = this;

                                function s() {
                                    r.off(e, s), t.apply(i, arguments)
                                }
                                return s._ = t, this.on(e, s, i)
                            },
                            emit: function(e) {
                                for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, s = i.length; r < s; r++) i[r].fn.apply(i[r].ctx, t);
                                return this
                            },
                            off: function(e, t) {
                                var i = this.e || (this.e = {}),
                                    r = i[e],
                                    s = [];
                                if (r && t)
                                    for (var n = 0, a = r.length; n < a; n++) r[n].fn !== t && r[n].fn._ !== t && s.push(r[n]);
                                return s.length ? i[e] = s : delete i[e], this
                            }
                        }, e.exports = t, e.exports.TinyEmitter = t
                    }
                },
                t = {};

            function s(i) {
                var r = t[i];
                if (void 0 !== r) return r.exports;
                var n = t[i] = {
                    exports: {}
                };
                return e[i](n, n.exports, s), n.exports
            }
            s.g = function() {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" == typeof window) return window
                }
            }();
            (() => {
                "use strict";

                function e() {}

                function t(e = 20, t) {
                    for (var i = (t ? "" : "!#%()*+,-./:;=?@[]^_`{|}~") + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = i.length, s = [], n = 0; n < e; n++) s[n] = i.charAt(Math.random() * r);
                    return s.join("")
                }

                function n(e, t, i) {
                    return Math.max(t, Math.min(e, i))
                }

                function a(e, t) {
                    var i = Math.pow(10, t);
                    return Math.round(e * i) / i
                }

                function h(e, t) {
                    if ("string" != typeof e || "string" != typeof t) return "string" != typeof e && "string" != typeof t ? 0 : "string" != typeof e ? 1 : -1;
                    for (var i = e.split("."), r = t.split("."), s = Math.max(i.length, r.length); i.length < s;) i.push("0");
                    for (; r.length < s;) r.push("0");
                    for (var n = 0; n < s; n++) {
                        var a = parseInt(i[n], 10),
                            h = parseInt(r[n], 10);
                        if (a > h) return 1;
                        if (a < h) return -1
                    }
                    return 0
                }

                function o(e) {
                    return "number" == typeof e && isFinite(e)
                }

                function d(e) {
                    var t = e;
                    try {
                        "object" == typeof e && (t = "string" == typeof e.errMsg ? e.errMsg : "string" == typeof e.errmsg ? e.errmsg : "string" == typeof e.message ? e.message : JSON.stringify(e))
                    } catch (e) {
                        i.error(e)
                    }
                    return t
                }
                var l, u, g, v;
                ! function(e) {
                    e[e.Front = 1] = "Front", e[e.Background = 2] = "Background"
                }(l || (l = {})),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.GameTransfer = 1] = "GameTransfer", e[e.Request = 2] = "Request", e[e.DownloadFile = 3] = "DownloadFile", e[e.CgiSpeedMeasure = 4] = "CgiSpeedMeasure", e[e.BadJs = 5] = "BadJs", e[e.Init = 6] = "Init", e[e.CostTime = 7] = "CostTime", e[e.Error = 8] = "Error", e[e.UploadFile = 9] = "UploadFile", e[e.Login = 10] = "Login"
                }(u || (u = {})),
                function(e) {
                    e[e.Info = 101] = "Info", e[e.Warn = 102] = "Warn", e[e.Error = 103] = "Error"
                }(g || (g = {})),
                function(e) {
                    e.GameTransferReport = "GameTransferReport", e.KeyValueReport = "KeyValueReport", e.WxRequestReport = "WxRequestReport"
                }(v || (v = {}));
                Object.values(u).filter((e => o(e)));
                var p, f = "MiniGamePlatform",
                    {
                        Quality: m
                    } = c,
                    w = 0,
                    x = new m({
                        pluginAppId: `wxapplib_${f}`,
                        pluginVersion: "1.1.0"
                    });
                var y = s(6);
                class T extends y.TinyEmitter {
                    constructor() {
                        super(...arguments), this.innerTweenGroup = null, this.deviceScale = 1, this.devicePixelRatio = 1, this.innerDebug = !1
                    }
                    init(e) {
                        var t, {
                            pixiJs: r,
                            TWEEN: s,
                            designWidth: n,
                            gameWX: a,
                            scale: h = 1,
                            debug: o = !1
                        } = e;
                        this.innerPixi = r, this.innerTween = s, this.innerTweenGroup = new s.Group, this.gameWX = a, this.innerDebug = o, this.designWithSystemInfo({
                            designWidth: n,
                            scale: h
                        }), null === (t = a.onDeviceOrientationChange) || void 0 === t || t.call(a, (() => {
                            this.designWithSystemInfo({
                                designWidth: n,
                                scale: h
                            }), this.emit("onDeviceOrientationChange")
                        })), o && i.log("[minigamefe PixiCore]: Common inited")
                    }
                    get debug() {
                        return this.innerDebug
                    }
                    get PIXI() {
                        return this.innerPixi
                    }
                    get TWEEN() {
                        return this.innerTween
                    }
                    get tweenGroup() {
                        return this.innerTweenGroup
                    }
                    get systemInfo() {
                        return this.innerSystemInfo
                    }
                    get scale() {
                        return this.deviceScale
                    }
                    get dpr() {
                        return this.devicePixelRatio
                    }
                    get wx() {
                        return this.gameWX
                    }
                    destroy() {
                        this.innerTweenGroup && (this.innerTweenGroup.removeAll(), this.innerTweenGroup = null)
                    }
                    designWithSystemInfo(e) {
                        var {
                            designWidth: t = 375,
                            scale: i = 1
                        } = e;
                        this.innerSystemInfo = this.gameWX.getSystemInfoSync();
                        var {
                            screenWidth: r,
                            screenHeight: s,
                            pixelRatio: n
                        } = this.innerSystemInfo, a = Math.min(r, s);
                        this.deviceScale = Math.min(1, a / t) * i, this.devicePixelRatio = Math.round(n * this.scale * 1e3) / 1e3
                    }
                }
                const b = new T;
                var S;
                ! function(e) {
                    e[e.Unknown = 0] = "Unknown", e[e.Buffer = 1] = "Buffer", e[e.Blob = 2] = "Blob", e[e.Json = 3] = "Json", e[e.Xml = 4] = "Xml", e[e.Image = 5] = "Image", e[e.Audio = 6] = "Audio", e[e.Video = 7] = "Video", e[e.Text = 8] = "Text"
                }(S || (S = {}));
                class C extends y.TinyEmitter {
                    constructor() {
                        super(), this.resLoadTicker = null, this.resLoadRetryCount = 3;
                        var {
                            PIXI: e
                        } = b;
                        this.loader = new e.Loader, b.debug && i.log("[minigamefe PixiCore]: LoaderManager constructor")
                    }
                    load(e) {
                        if (this.resLoadTicker) return Promise.reject({
                            errMsg: "正在加载中"
                        });
                        var {
                            timeout: t = 1e4,
                            list: r,
                            mainTextureName: s,
                            bindingScreen: n = 0
                        } = e;
                        return r.forEach((e => {
                            var i, {
                                name: r,
                                url: s
                            } = e;
                            null === (i = this.loader) || void 0 === i || i.add({
                                name: r,
                                url: s,
                                bindingScreen: n,
                                timeout: t
                            })
                        })), b.debug && i.log("[minigamefe PixiCore]: loadResources start"), new Promise(((n, a) => {
                            var h, o = e => {
                                r.forEach((t => {
                                    this.loadError(e, t.name || t.url)
                                })), n({
                                    resources: e
                                })
                            };
                            null === (h = this.loader) || void 0 === h || h.load((() => {
                                if (this.loader) {
                                    var {
                                        resources: e
                                    } = this.loader;
                                    b.debug && i.log("[minigamefe PixiCore]: loadResources success:", e), this.clearLoadTicker(), s ? this.checkMainRes(e, s) ? o(e) : a({
                                        errMsg: `关键资源${s}加载失败`,
                                        resources: e
                                    }) : o(e)
                                }
                            })), this.resLoadTicker = setTimeout((() => {
                                if (this.loader) {
                                    var {
                                        resources: t
                                    } = this.loader;
                                    if (this.clearLoadTicker(), this.emit("info", t), s && this.checkMainRes(t, s)) o(t);
                                    else {
                                        var i = `resources load error，资源加载超时 retryCount:${this.resLoadRetryCount}`;
                                        this.emit("info", i), this.resLoadRetryCount -= 1, this.resLoadRetryCount > 0 ? this.load(e).then((e => {
                                            n({
                                                resources: e.resources
                                            })
                                        })).catch((e => {
                                            a({
                                                errMsg: "资源加载失败",
                                                resources: e.resources
                                            })
                                        })) : a({
                                            errMsg: "资源加载失败，请求超时"
                                        })
                                    }
                                }
                            }), t)
                        }))
                    }
                    clearLoadTicker() {
                        var e;
                        this.resLoadTicker && (null === (e = this.loader) || void 0 === e || e.reset(), clearTimeout(this.resLoadTicker), this.resLoadTicker = null)
                    }
                    destroy() {
                        var e;
                        null === (e = this.loader) || void 0 === e || e.destroy(), delete this.loader
                    }
                    checkMainRes(e, t) {
                        return !(!e[t] || e[t].error || !e[t].textures || !e[`${t}_image`])
                    }
                    loadError(e, t) {
                        var i = "";
                        e[t] ? (e[t].error && (i = `resources load error, ${t}:${e[t].error}`), e[t].type !== S.Json && e[t].type !== S.Text || (e[t].children.length < 1 ? i = `resources load error, ${t}_image: 子资源加载失败` : this.loadError(e, e[t].children[0].name || e[t].children[0].url))) : i = `resources load error, ${t}: 资源加载失败`, i && this.emit("error", i)
                    }
                }
                class I extends y.TinyEmitter {
                    constructor(t) {
                        super(), this.canvas = null, this.isNormalCanvas = !1, this.realX = 0, this.realY = 0, this.realWidth = 0, this.realHeight = 0, this.realZIndex = "1", this.pixelRatio = 1, this.scale = 1;
                        var {
                            createScreenCanvas: i,
                            pixelRatio: r = 1,
                            scale: s = 1,
                            isNormalCanvas: n = !1
                        } = t;
                        this.pixelRatio = r, this.scale = s, this.canvas = i(), this.canvas.getBoundingClientRect = () => ({
                            x: this.x,
                            y: this.y,
                            left: this.x,
                            top: this.y,
                            width: this.width,
                            height: this.height,
                            bottom: 0,
                            right: 0,
                            toJSON: e
                        }), this.isNormalCanvas = n, this.canvas.style || (this.isNormalCanvas = !0, Object.assign(this.canvas, {
                            style: {
                                x: 0,
                                y: 0,
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                zIndex: 0
                            }
                        }))
                    }
                    set x(e) {
                        var t = Math.round(1e3 * e) / 1e3;
                        this.realX = t, this.changeStyle("left", `${t}px`)
                    }
                    get x() {
                        return this.realX
                    }
                    set y(e) {
                        var t = Math.round(1e3 * e) / 1e3;
                        this.realY = t, this.changeStyle("top", `${t}px`)
                    }
                    get y() {
                        return this.realY
                    }
                    set width(e) {
                        this.realWidth = e * this.scale, this.canvas && (this.canvas.width = this.realWidth * this.pixelRatio, this.changeStyle("width", `${this.realWidth}px`))
                    }
                    get width() {
                        return this.realWidth
                    }
                    get renderWidth() {
                        return this.width / this.scale * this.pixelRatio
                    }
                    set height(e) {
                        this.realHeight = e * this.scale, this.canvas && (this.canvas.height = this.realHeight * this.pixelRatio, this.changeStyle("height", `${this.realHeight}px`))
                    }
                    get height() {
                        return this.realHeight
                    }
                    get renderHeight() {
                        return this.height / this.scale * this.pixelRatio
                    }
                    set zIndex(e) {
                        this.realZIndex = e, this.changeStyle("zIndex", e)
                    }
                    get zIndex() {
                        return this.realZIndex
                    }
                    set bindingScreen(e) {
                        this.canvas && (this.canvas.bindingScreen = e)
                    }
                    get bindingScreen() {
                        var e, t;
                        return null !== (t = null === (e = this.canvas) || void 0 === e ? void 0 : e.bindingScreen) && void 0 !== t ? t : 0
                    }
                    remove() {
                        var e, t;
                        null === (t = null === (e = this.canvas) || void 0 === e ? void 0 : e.remove) || void 0 === t || t.call(e), this.canvas = null
                    }
                    changeStyle(e, t) {
                        this.canvas && this.canvas.style && (this.canvas.style[e] = t, this.emit("changed"))
                    }
                }
                class P extends y.TinyEmitter {
                    constructor(e) {
                        super(), this.histroyPosList = [], this.hideData = {
                            isHide: !1,
                            x: 0,
                            y: 0
                        }, this.screenCanvas = e
                    }
                    get isHide() {
                        return this.hideData.isHide
                    }
                    set(e) {
                        var {
                            x: t,
                            y: r
                        } = e;
                        b.debug && i.log("[minigamefe PixiCore]: Set Canvas Position", t, r), o(t) && (t = a(t, 1)), o(r) && (r = a(r, 1)), a(this.screenCanvas.x, 1) === t && a(this.screenCanvas.y, 1) === r || (this.histroyPosList.push({
                            x: this.screenCanvas.x,
                            y: this.screenCanvas.y
                        }), this.histroyPosList.length > 10 && this.histroyPosList.shift(), this.hideData.isHide ? (o(t) && (this.hideData.x = t), o(r) && (this.hideData.y = r)) : (o(t) && (this.screenCanvas.x = t), o(r) && (this.screenCanvas.y = r), this.emit("moved")))
                    }
                    back() {
                        var e = this.histroyPosList.pop();
                        e && this.set(e)
                    }
                    get() {
                        return {
                            x: this.screenCanvas.x,
                            y: this.screenCanvas.y
                        }
                    }
                    hide() {
                        this.hideData.isHide || (this.hideData.isHide = !0, this.hideData.x = this.screenCanvas.x, this.hideData.y = this.screenCanvas.y, this.screenCanvas.x = 9999, this.screenCanvas.y = 9999)
                    }
                    show(e) {
                        if (e && o(e.x) && o(e.y) && (this.hideData.x = e.x, this.hideData.y = e.y, this.hideData.isHide = !0), this.hideData.isHide) {
                            var {
                                x: t,
                                y: i
                            } = this.hideData;
                            this.hideData.isHide = !1, o(t) && (this.screenCanvas.x = t), o(i) && (this.screenCanvas.y = i), this.emit("moved")
                        }
                    }
                }
                class D extends y.TinyEmitter {
                    constructor(e) {
                        super();
                        var {
                            createScreenCanvas: t,
                            createCanvas: r
                        } = e;
                        this.createScreenCanvas = t, this.createCanvas = r, b.debug && i.log("[minigamefe PixiCore]: CanvasManager constructor")
                    }
                    init(e = !0) {
                        if (this.canvas) return this.canvas;
                        try {
                            this.canvas = new I({
                                createScreenCanvas: e ? this.createScreenCanvas : this.createCanvas,
                                pixelRatio: b.dpr,
                                scale: b.scale,
                                isNormalCanvas: !e
                            }), e || this.canvas.on("changed", (() => {
                                this.emit("render")
                            })), this.canvas.x = 0, this.canvas.y = 0, this.canvas.width = 1, this.canvas.height = 1, this.canvas.zIndex = "1", this.position = new P(this.canvas), this.position.on("moved", (() => {
                                this.emit("moved")
                            })), this.emit("info", "ScreenCanvas init success")
                        } catch (e) {
                            var t = `ScreenCanvas init error:${d(e)}`;
                            this.emit("error", t)
                        }
                        return this.canvas
                    }
                    get screenCanvas() {
                        return this.canvas
                    }
                    get bindingScreen() {
                        return this.canvas ? this.canvas.isNormalCanvas ? 0 : this.canvas.bindingScreen : (b.debug && i.warn("[minigamefe PixiCore]: 无法获取bindingScreen，尚未创建ScreenCanvas"), 0)
                    }
                    set zIndex(e) {
                        this.canvas && (this.canvas.zIndex = e)
                    }
                    resize(e) {
                        var {
                            width: t,
                            height: r,
                            resetTouchArea: s = !1
                        } = e;
                        b.debug && i.log("[minigamefe PixiCore]: changeCanvasSize", t, r), this.canvas && (void 0 !== t && (this.canvas.width = t), void 0 !== r && (this.canvas.height = r), this.emit("resize", {
                            width: this.canvas.renderWidth,
                            height: this.canvas.renderHeight,
                            resetTouchArea: s
                        }), this.emit("render"))
                    }
                    hide() {
                        var e;
                        null === (e = this.position) || void 0 === e || e.hide()
                    }
                    show(e) {
                        var t;
                        null === (t = this.position) || void 0 === t || t.show(e)
                    }
                    destroy() {
                        this.canvas && (this.canvas.remove(), this.canvas = void 0)
                    }
                }
                class E extends y.TinyEmitter {
                    constructor() {
                        super(...arguments), this.defaultTextStyle = {
                            fill: 16777215,
                            fontName: "Arial",
                            fontSize: 12,
                            whiteSpace: "normal",
                            textBaseline: "middle",
                            lineHeight: 17
                        }, this.maxFontSize = 50, this.maxLineHeight = 71, this.defaultFontSize = 12, this.defaultLineHeight = 17, this.textures = {}, this.bindingScreen = 0, this.cacheTextures = [], this.cachePixiTexts = []
                    }
                    init(e) {
                        var {
                            bindingScreen: t,
                            defaultTextStyle: r,
                            defaultTextureName: s,
                            defaultTextureKey: n
                        } = e;
                        this.bindingScreen = t, this.initDesign(r), this.defaultTextureName = s, this.defaultTextureKey = n, b.debug && i.log("[minigamefe PixiCore]: DisplayManager inited")
                    }
                    createTextures(e) {
                        var {
                            name: t,
                            imageData: i,
                            jsonData: r
                        } = e;
                        return new Promise(((e, s) => {
                            if (!i || i.indexOf("data:image") < 0 || !r) s();
                            else {
                                var {
                                    PIXI: n
                                } = b, a = new n.Spritesheet(n.BaseTexture.from(i), r);
                                a.parse((() => {
                                    this.addTextures({
                                        [t || this.defaultTextureName || ""]: a
                                    }), e(a)
                                }))
                            }
                        }))
                    }
                    addTextures(e) {
                        Object.assign(this.textures, e)
                    }
                    getTexture(e = this.defaultTextureKey, t = this.defaultTextureName) {
                        var r, s, n;
                        return t && e ? (this.textures && this.textures[t] && this.textures[t].textures || b.debug && i.error("[minigamefe PixiCore]: 请先加载对应的纹理资源！", e, t), null !== (n = null === (s = null === (r = this.textures) || void 0 === r ? void 0 : r[t].textures) || void 0 === s ? void 0 : s[e]) && void 0 !== n ? n : PIXI.Texture.EMPTY) : (b.debug && i.error("[minigamefe PixiCore]: 请先设置通用纹理"), PIXI.Texture.EMPTY)
                    }
                    createContainer(e) {
                        var {
                            PIXI: t
                        } = b, {
                            x: i,
                            y: r,
                            isButton: s = !1
                        } = e || {}, n = new t.Container;
                        return s && this.isButton(n), this.setNodeData({
                            node: n,
                            x: i,
                            y: r
                        }), n
                    }
                    createSprite(e) {
                        var {
                            PIXI: t
                        } = b, {
                            key: i = this.defaultTextureKey,
                            name: r = this.defaultTextureName,
                            isButton: s = !1,
                            x: n,
                            y: a,
                            width: h,
                            height: o
                        } = e || {}, d = new t.Sprite(this.getTexture(i, r));
                        return s && this.isButton(d), this.setNodeData({
                            node: d,
                            x: n,
                            y: a,
                            width: h,
                            height: o
                        }), d
                    }
                    createSpriteFrom(e) {
                        var {
                            PIXI: t
                        } = b, {
                            bindingScreen: i
                        } = this, {
                            url: r = t.Texture.EMPTY,
                            isButton: s = !1,
                            x: n,
                            y: a,
                            width: h,
                            height: o
                        } = e, d = r;
                        "string" == typeof r && (d = this.createTextureFrom({
                            url: r
                        }));
                        var l = t.Sprite.from(d, {
                            bindingScreen: i
                        });
                        return s && this.isButton(l), this.setNodeData({
                            node: l,
                            x: n,
                            y: a,
                            width: h,
                            height: o
                        }), l
                    }
                    createTexture(e) {
                        var {
                            PIXI: t
                        } = b, {
                            bindingScreen: i
                        } = this, {
                            url: r
                        } = e;
                        if (!r) return this.getTexture();
                        var s = new t.Texture(new t.BaseTexture(r, {
                            bindingScreen: i
                        }));
                        return s.once("update", (() => {
                            this.emit("render")
                        })), this.cacheTextures.push(s), s
                    }
                    createTextureFrom(e) {
                        var {
                            PIXI: t
                        } = b, {
                            bindingScreen: i
                        } = this, {
                            url: r
                        } = e;
                        if (!r) return this.getTexture();
                        var s = t.Texture.from(r, {
                            bindingScreen: i
                        });
                        return s.once("update", (() => {
                            this.emit("render")
                        })), this.cacheTextures.push(s), s
                    }
                    createGraphics() {
                        b.debug && i.warn("[minigamefe PixiCore]: 如非必需请不要使用Graphics，会增加drawcall");
                        var {
                            PIXI: e
                        } = b, {
                            bindingScreen: t
                        } = this;
                        return new e.Graphics(null, {
                            bindingScreen: t
                        })
                    }
                    createBitmapText(e) {
                        var t, i, {
                                PIXI: r
                            } = b,
                            {
                                textString: s = "",
                                textStyle: n,
                                anchor: a = new r.Point(0, .5),
                                isButton: h = !1,
                                x: o,
                                y: d,
                                width: l,
                                height: c
                            } = e || {},
                            u = this.defaultFontSize;
                        return n ? (t = Object.assign({}, this.defaultTextStyle, n), u = +(n.fontSize || this.defaultFontSize)) : t = this.defaultTextStyle, r.BitmapText && r.BitmapFont && t && t.fontName && r.BitmapFont.available[t.fontName] ? (i = new r.BitmapText(s, Object.assign({}, t, {
                            fontSize: u
                        })), a && (i.anchor = a), h && this.isButton(i), this.setNodeData({
                            node: i,
                            x: o,
                            y: d,
                            width: l,
                            height: c
                        })) : i = this.createText({
                            textString: s,
                            textStyle: t,
                            anchor: a,
                            isButton: h,
                            x: o,
                            y: d,
                            width: l,
                            height: c
                        }), i
                    }
                    createText(e) {
                        var t, {
                                PIXI: i
                            } = b,
                            {
                                textString: r = "",
                                textStyle: s,
                                anchor: n = new i.Point(0, 0),
                                isButton: a = !1,
                                x: h,
                                y: o,
                                width: d,
                                height: l
                            } = e || {},
                            c = this.defaultFontSize,
                            u = this.defaultLineHeight;
                        s ? (t = Object.assign({}, this.defaultTextStyle, s), c = +(s.fontSize || this.defaultFontSize), u = +(s.lineHeight || this.defaultLineHeight)) : t = this.defaultTextStyle, t.wordWrapWidth && (t.wordWrapWidth /= c / this.maxFontSize);
                        var g = new i.Text(r, Object.assign({}, t, {
                            fontSize: this.maxFontSize,
                            lineHeight: this.maxLineHeight * (u / this.defaultLineHeight)
                        }), this.bindingScreen);
                        return g.scale.set(c / this.maxFontSize), n && (g.anchor = n), a && this.isButton(g), this.setNodeData({
                            node: g,
                            x: h,
                            y: o,
                            width: d,
                            height: l
                        }), this.cachePixiTexts.push(g), g
                    }
                    setHitArea(e, t, r, s = !1) {
                        var {
                            PIXI: n,
                            dpr: a
                        } = b, {
                            x: h = 0,
                            y: o = 0,
                            width: d,
                            height: l
                        } = t, c = r || this.defaultTextureKey;
                        if (c) {
                            var u = 1 / e.scale.x,
                                g = this.createSprite({
                                    key: c,
                                    x: h * u,
                                    y: o * u,
                                    width: d * u,
                                    height: l * u
                                });
                            s ? (g.tint = 16711680, g.alpha = .3) : g.alpha = 0, e.addChild(g)
                        } else b.debug && i.warn("[minigamefe PixiCore]: hitArea在x和y使用负数时有bug，建议传key或者设置默认精灵key"), e.hitArea = new n.Rectangle(h * a, o * a, d * a, l * a)
                    }
                    renderLabel(e) {
                        var t, i, r, {
                                PIXI: s
                            } = b,
                            {
                                textString: n = "",
                                textStyle: a = this.defaultTextStyle,
                                padding: h,
                                backgroundColor: o,
                                backgroundRadius: d,
                                getLabelContainer: l
                            } = e,
                            c = !l;
                        return l ? (t = (r = l).children[0], i = r.children[1]) : (r = new s.Container, t = this.createGraphics(), i = this.createText({
                            textString: n,
                            textStyle: a
                        })), i.text = n, i.position.set(h.left || 0, h.top || 0), t.clear(), t.beginFill(o.fill, o.alpha), t.drawRoundedRect(0, 0, i.width + (h.left || 0) + (h.right || 0), i.height + (h.top || 0) + (h.bottom || 0), d), t.endFill(), c && r && r.addChild(t, i), {
                            labelContainer: r,
                            labelBackground: t,
                            labelText: i
                        }
                    }
                    createTextStyle(e) {
                        var {
                            PIXI: t
                        } = b;
                        return new t.TextStyle(e)
                    }
                    getTextScale(e = this.defaultFontSize) {
                        return e / this.maxFontSize
                    }
                    isButton(e) {
                        e.interactive = !0, e.on("pointerup", (() => {
                            e.alpha = 1, this.emit("render")
                        })), e.on("pointerdown", (() => {
                            e.alpha = .5, this.emit("render")
                        })), e.on("pointerupoutside", (() => {
                            e.alpha = 1, this.emit("render")
                        })), e.on("pointercancel", (() => {
                            e.alpha = 1, this.emit("render")
                        }))
                    }
                    removeButton(e) {
                        e.interactive = !1, e.removeAllListeners("pointerup"), e.removeAllListeners("pointerdown"), e.removeAllListeners("pointerupoutside"), e.removeAllListeners("pointertap"), e.removeAllListeners("pointercancel")
                    }
                    get commonTextStyle() {
                        return this.defaultTextStyle
                    }
                    destroy() {
                        for (var e of Object.values(this.textures)) e.spritesheet && e.spritesheet.destroy(!0);
                        for (var t of this.cacheTextures) t.destroy(!0);
                        for (var i of this.cachePixiTexts) i.canvas && i.destroy({
                            children: !0,
                            texture: !0,
                            baseTexture: !0
                        });
                        this.cacheTextures = [], this.cachePixiTexts = [], this.textures = {}, this.defaultTextureName = "", this.defaultTextureKey = ""
                    }
                    setNodeData(e) {
                        var {
                            node: t,
                            width: i,
                            height: r,
                            x: s = 0,
                            y: n = 0
                        } = e || {};
                        o(i) && (t.width = i), o(r) && (t.height = r), o(s) && o(n) && t.position.set(s, n)
                    }
                    initDesign(e) {
                        e && (Object.assign(this.defaultTextStyle, e), this.defaultFontSize = +(e.fontSize || 12), this.defaultLineHeight = +(e.lineHeight || 17), this.maxFontSize = 50, this.maxLineHeight = 50 / this.defaultFontSize * this.defaultLineHeight)
                    }
                }
                class L extends y.TinyEmitter {
                    constructor() {
                        super(), this.needRender = !1, this.ticker = null, this.autoRender = !1, b.debug && i.log("[minigamefe PixiCore]: RendererManager constructor")
                    }
                    init(e, t = !1, i = !1) {
                        var {
                            PIXI: r
                        } = b;
                        return this.renderer = new r.Renderer({
                            view: e.canvas,
                            antialias: !1,
                            transparent: !t,
                            width: e.renderWidth,
                            height: e.renderWidth,
                            clearBeforeRender: !1,
                            preserveDrawingBuffer: !0
                        }), this.innerStage = new r.Container, this.innerStage.scale.set(b.dpr), this.autoRender = i, this.renderer.on("postrender", (() => {
                            requestAnimationFrame((() => {
                                this.emit("postrender")
                            }))
                        })), this.ticker = new r.Ticker, this.ticker.add(this.render.bind(this)), this.ticker.start(), this.emit("info", "Renderer init success"), this.renderer
                    }
                    update() {
                        this.needRender = !0
                    }
                    resize(e, t) {
                        var i;
                        null === (i = this.renderer) || void 0 === i || i.resize(e, t)
                    }
                    get stage() {
                        return this.innerStage
                    }
                    destroy() {
                        this.ticker && (this.ticker.remove(this.render.bind(this)), this.ticker.destroy(), this.ticker = null), this.innerStage && (this.innerStage.destroy(), this.innerStage = void 0), this.renderer && (this.renderer.destroy(), this.renderer = void 0)
                    }
                    render() {
                        var e;
                        null === (e = b.tweenGroup) || void 0 === e || e.update(), (this.autoRender || this.needRender) && (this.needRender = !1, this.renderer && this.renderer.render(this.stage, void 0, !0))
                    }
                }
                var M, R, X, z, N, W, A = "pixi_error";

                function H(e, t, i) {
                    return !!e.find((e => t >= e.left && t <= e.left + e.width && i >= e.top && i <= e.top + e.height))
                }! function(e) {
                    e[e.None = 0] = "None", e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical", e[e.Left = 3] = "Left", e[e.Right = 4] = "Right", e[e.Top = 5] = "Top", e[e.Bottom = 6] = "Bottom", e[e.All = 7] = "All"
                }(M || (M = {})),
                function(e) {
                    e.devtools = "devtools", e.android = "android", e.ios = "ios", e.windows = "windows", e.mac = "mac"
                }(R || (R = {})),
                function(e) {
                    e.portrait = "portrait", e.landscape = "landscape", e.landscapeLeft = "landscapeLeft", e.landscapeRight = "landscapeRight"
                }(X || (X = {})),
                function(e) {
                    e.DEVELOP = "develop", e.TRIAL = "trial", e.RELEASE = "release"
                }(z || (z = {})),
                function(e) {
                    e[e.release = 1] = "release", e[e.develop = 2] = "develop", e[e.trial = 3] = "trial"
                }(N || (N = {})),
                function(e) {
                    e[e.Android = 0] = "Android", e[e.IOSJscore = 1] = "IOSJscore", e[e.IOSWK = 2] = "IOSWK", e[e.UnKnow = 3] = "UnKnow", e[e.PC = 4] = "PC", e[e.Devtools = 5] = "Devtools", e[e.IPadJscore = 6] = "IPadJscore", e[e.IPadWK = 7] = "IPadWK"
                }(W || (W = {}));
                var k = null;

                function B(e = !1, t) {
                    if (e && k) return k;
                    var {
                        safeArea: i
                    } = t, {
                        deviceOrientation: r,
                        screenWidth: s,
                        screenHeight: n
                    } = t;
                    i || (i = {
                        top: 0,
                        left: 0,
                        right: s,
                        bottom: n,
                        width: s,
                        height: n
                    });
                    var {
                        left: a,
                        top: h,
                        right: o,
                        bottom: d,
                        width: l,
                        height: c
                    } = i;
                    return s > n && (r === X.portrait || l < c ? (a = i.top, h = i.left, o = i.bottom, d = i.right, l = i.height, c = i.width) : l === n && l > c && (h = 0, a = 0, o = s, d = n, l = s, c = n)), k = {
                        left: a,
                        top: h,
                        right: o,
                        bottom: d,
                        width: l,
                        height: c
                    }
                }
                class O {
                    constructor(e) {
                        this.target = null, this.currentTarget = [], this.touches = [], this.targetTouches = [], this.changedTouches = [], this.timeStamp = 0, this.buttons = 0, this.clientX = 0, this.clientY = 0, this.offsetX = 0, this.offsetY = 0, this.pageX = 0, this.pageY = 0, this.screenX = 0, this.screenY = 0, this.type = e
                    }
                    preventDefault() {}
                    stopPropagation() {}
                }

                function _(e, t) {
                    var i = new O("touch"),
                        r = t.touches,
                        s = t.changedTouches;
                    return t.target && (r = Object.values(t.touches), s = Object.values(t.changedTouches)), i.touches = r, i.targetTouches = Array.prototype.slice.call(r), i.changedTouches = s, i.timeStamp = t.timeStamp, i.target = e, i
                }
                class Y extends y.TinyEmitter {
                    constructor(e) {
                        super(), this.disabled = !1, this.dragArea = [], this.padding = 8, this.preventArea = [], this.enableDrag = !0, this.enableSnap = M.Horizontal, this.isDraged = !1, this.isMouseDown = !1, this.isNormalCanvas = !1, this.isPC = b.systemInfo.platform === R.windows || b.systemInfo.platform === R.mac, this.tweenGroup = b.tweenGroup, this.innerTween = b.TWEEN, this.borderAreaChanged = !1, this.destroyed = !1, this.dragParams = {
                            identifier: 0,
                            flag: !1,
                            pageX: 0,
                            pageY: 0,
                            startX: 0,
                            startY: 0
                        }, this.pcListener = {}, this.setBorderArea = e => {
                            this.outDragArea = e, this.borderAreaChanged = !0, this.resize()
                        }, this.setTouchArea = e => {
                            this.dragArea = e, this.preventArea = e
                        }, this.canvas = e, this.screenCanvas = e.screenCanvas, this.outDragArea = B(!1, b.systemInfo), this.isNormalCanvas = "devtools" === b.systemInfo.platform || e.screenCanvas.isNormalCanvas, b.on("onDeviceOrientationChange", (() => {
                            this.borderAreaChanged || (this.outDragArea = B(!1, b.systemInfo), this.resize())
                        })), this.canvas.on("moved", (() => {
                            this.emit("render"), this.snap(!0)
                        }))
                    }
                    set canDrag(e) {
                        this.enableDrag = e
                    }
                    set snapType(e) {
                        this.enableSnap = e
                    }
                    resize() {
                        this.canvas.position.isHide || (this.canvas.position.set({
                            x: n(this.screenCanvas.x, this.minDragX, this.maxDragX),
                            y: n(this.screenCanvas.y, this.minDragY, this.maxDragY)
                        }), this.emit("render"), this.snap(!0))
                    }
                    inDragArea(e, t) {
                        return !!this.enableDrag && (0 !== this.dragArea.length && H(this.dragArea, e, t))
                    }
                    inPreventArea(e, t) {
                        return 0 !== this.preventArea.length && H(this.preventArea, e, t)
                    }
                    enable() {
                        this.disabled = !1
                    }
                    disable() {
                        this.disabled = !0
                    }
                    get minDragX() {
                        return this.outDragArea.left + this.padding
                    }
                    get minDragY() {
                        return this.outDragArea.top + this.padding
                    }
                    get maxDragX() {
                        return this.outDragArea.left + this.outDragArea.width - this.screenCanvas.width - this.padding
                    }
                    get maxDragY() {
                        return this.outDragArea.top + this.outDragArea.height - this.screenCanvas.height - this.padding
                    }
                    bindScreenCanvasEventDispatch(e) {
                        var {
                            dragParams: t,
                            screenCanvas: r
                        } = this, s = s => {
                            var n, a;
                            if (b.debug && i.log("touchStartHandler, event:", s), this.destroyed) return !0;
                            if (this.isPC && "mousedown" === s.type) {
                                if (0 === s.buttons) return !1;
                                this.isMouseDown = !0;
                                var h = {
                                    identifier: 0,
                                    clientX: s.clientX,
                                    clientY: s.clientY,
                                    pageX: s.pageX,
                                    pageY: s.pageY,
                                    offsetX: s.offsetX,
                                    offsetY: s.offsetY,
                                    force: 1,
                                    screenX: s.screenX,
                                    screenY: s.screenY
                                };
                                s.touches = [h], s.changedTouches = [h]
                            }
                            var o = s.changedTouches[0] || s.touches[0],
                                {
                                    pageX: d,
                                    pageY: l
                                } = o,
                                {
                                    offsetX: c,
                                    offsetY: u
                                } = o;
                            (this.isNormalCanvas || this.isPC) && (c = d - r.x, u = l - r.y);
                            var g = this.inPreventArea(c, u);
                            return g ? this.disabled ? (b.debug && i.log("touchStartHandler disabled"), null === (n = null == e ? void 0 : e.start) || void 0 === n || n.call(e, {
                                event: s,
                                isPrevent: g,
                                isDraging: t.flag
                            }), this.emit("render"), !g) : (this.inDragArea(c, u) && (b.debug && i.log("touchStartHandler need drag"), t.identifier = o.identifier, t.flag = !0, t.pageX = d, t.pageY = l, t.startX = d, t.startY = l), this.isDraged = !1, b.debug && i.log("touchStartHandler pixi touchstart"), null === (a = null == e ? void 0 : e.start) || void 0 === a || a.call(e, {
                                event: s,
                                isPrevent: g,
                                isDraging: t.flag
                            }), this.emit("render"), !g) : (b.debug && i.log("touchStartHandler isPrevent"), !0)
                        }, a = s => {
                            var a, h;
                            if (b.debug && i.log("touchMoveHandler, event:", s), this.destroyed) return !0;
                            if (this.isPC && !this.isMouseDown) return !1;
                            var o = s.changedTouches[0] || s.touches[0],
                                {
                                    pageX: d,
                                    pageY: l
                                } = o,
                                {
                                    offsetX: c,
                                    offsetY: u
                                } = o;
                            (this.isNormalCanvas || this.isPC) && (c = d - r.x, u = l - r.y);
                            var g = this.inPreventArea(c, u);
                            if (this.disabled) return null === (a = null == e ? void 0 : e.move) || void 0 === a || a.call(e, {
                                event: s,
                                isPrevent: g
                            }), this.emit("render"), !g;
                            if (t.flag && t.identifier === o.identifier) {
                                var v = d - t.pageX,
                                    p = l - t.pageY,
                                    f = r.x + v,
                                    m = r.y + p;
                                f = n(f, this.minDragX, this.maxDragX), m = n(m, this.minDragY, this.maxDragY), r.x = f, r.y = m, t.pageX = d, t.pageY = l;
                                var w = Math.abs(d - t.startX),
                                    x = Math.abs(l - t.startY);
                                (w > .5 || x > .5) && (this.isDraged = !0, this.emit("dragStart"))
                            } else null === (h = null == e ? void 0 : e.move) || void 0 === h || h.call(e, {
                                event: s,
                                isPrevent: g
                            }), this.emit("render");
                            return !g
                        }, h = s => {
                            var n, a;
                            if (b.debug && i.log("touchEndHandler, event:", s), this.destroyed) return !0;
                            if (this.isPC) {
                                if (!this.isMouseDown) return !1;
                                this.isMouseDown = !1
                            }
                            var h = s.changedTouches[0] || s.touches[0],
                                {
                                    pageX: o,
                                    pageY: d
                                } = h,
                                {
                                    offsetX: l,
                                    offsetY: c
                                } = h;
                            (this.isNormalCanvas || this.isPC) && (l = o - r.x, c = d - r.y), this.isDraged && this.snap();
                            var u = this.inPreventArea(l, c);
                            if (this.disabled) return null === (n = null == e ? void 0 : e.end) || void 0 === n || n.call(e, {
                                event: s,
                                isPrevent: u,
                                isDraged: this.isDraged
                            }), this.emit("render"), this.isDraged = !1, t.flag = !1, !u;
                            if (t.flag) {
                                if (t.identifier !== h.identifier) return !u;
                                t.flag = !1, this.emit("dragEnd"), this.emit("render")
                            }
                            return null === (a = null == e ? void 0 : e.end) || void 0 === a || a.call(e, {
                                event: s,
                                isPrevent: u,
                                isDraged: this.isDraged
                            }), this.emit("render"), this.isDraged = !1, !u
                        };
                        if (r.canvas) {
                            if (r.isNormalCanvas) return {
                                touchStartHandler: s,
                                touchMoveHandler: a,
                                touchEndHandler: h
                            };
                            if (this.isNormalCanvas) r.canvas.addEventListener("touchstart", s), r.canvas.addEventListener("touchmove", a), r.canvas.addEventListener("touchend", h), r.canvas.addEventListener("touchcancel", h);
                            else if (this.isPC) {
                                r.canvas.addEventListener("mousedown", (e => ("function" == typeof transformNativeEvent && (e = transformNativeEvent(e)), b.debug && i.log("mousedown touchInfo:", e), s(e))));
                                var {
                                    onTouchMove: o,
                                    onTouchEnd: d,
                                    onTouchCancel: l
                                } = b.wx, c = e => t => {
                                    var {
                                        touches: i,
                                        changedTouches: r
                                    } = t, s = new O("mouse");
                                    s.touches = i, s.changedTouches = r, e && e(s)
                                };
                                this.pcListener.moveListener = c(a), this.pcListener.endListener = c(h), this.pcListener.cancelListener = c(h), b.debug && (void 0 === o && i.error("缺少wx.onTouchMove"), void 0 === d && i.error("缺少wx.onTouchEnd"), void 0 === l && i.error("缺少wx.onTouchCancel")), null == o || o(this.pcListener.moveListener), null == d || d(this.pcListener.endListener), null == l || l(this.pcListener.cancelListener)
                            } else r.canvas.ontouchstart = s, r.canvas.ontouchmove = a, r.canvas.ontouchend = h, r.canvas.ontouchcancel = h
                        }
                    }
                    snap(e = !1) {
                        if (b.debug && i.log("snap", this.enableSnap === M.None, this.disabled), this.enableSnap !== M.None && !this.disabled) {
                            var t, {
                                    screenCanvas: r
                                } = this,
                                s = 0,
                                n = "x",
                                a = this.getSnapDirection();
                            a === M.Right ? s = this.maxDragX : a === M.Left ? s = this.minDragX : a === M.Top ? (n = "y", s = this.minDragY) : a === M.Bottom && (n = "y", s = this.maxDragY), t = Math.round(2 * Math.abs(s - r[n])), this.emit("snapStart", a);
                            var h = () => {
                                r[n] = s, this.emit("snapEnd", a), this.emit("render")
                            };
                            e ? h() : t && t > 0 ? this.tweenGroup && this.innerTween ? (this.disable(), new this.innerTween.Tween(r, this.tweenGroup).to({
                                [n]: s
                            }, t).easing(this.innerTween.Easing.Quadratic.InOut).onComplete((() => {
                                this.enable(), this.emit("snapEnd", a), this.emit("render")
                            })).start()) : (b.debug && i.error("[minigamefe PixiCore]: tweenGroup&tween实例异常"), h()) : h()
                        }
                    }
                    destroy() {
                        if (this.destroyed = !0, this.isPC) {
                            var {
                                offTouchMove: e,
                                offTouchEnd: t,
                                offTouchCancel: i
                            } = b.wx;
                            this.pcListener.moveListener && (null == e || e(this.pcListener.moveListener)), this.pcListener.endListener && (null == t || t(this.pcListener.endListener)), this.pcListener.cancelListener && (null == i || i(this.pcListener.cancelListener))
                        }
                    }
                    getSnapDirection() {
                        var {
                            screenCanvas: e,
                            outDragArea: t
                        } = this, i = this.enableSnap, r = e.x + e.width / 2, s = e.y + e.height / 2;
                        if (this.enableSnap === M.Horizontal) i = r <= t.left + t.width / 2 ? M.Left : M.Right;
                        else if (this.enableSnap === M.Vertical) i = s <= t.top + t.height / 2 ? M.Top : M.Bottom;
                        else if (this.enableSnap === M.All) {
                            var n = Math.round(s - t.top),
                                a = Math.round(t.height + t.top - s),
                                h = Math.round(r - t.left),
                                o = Math.round(t.width + t.left - r),
                                d = Math.min(h, o, n, a);
                            i = d === h ? M.Left : d === a ? M.Bottom : d === o ? M.Right : d === n ? M.Top : M.Left
                        }
                        return i
                    }
                }
                class F extends y.TinyEmitter {
                    constructor(e) {
                        var t;
                        super(), this.destroyed = !1;
                        var {
                            TWEEN: r,
                            mgp: s,
                            xlog: n,
                            quality: a,
                            designWidth: h = 375,
                            createScreenCanvas: o,
                            createCanvas: d,
                            gameWX: l,
                            scale: c = 1,
                            debug: u = !1
                        } = e;
                        !l && u && i.error("[minigamefe PixiCore]: 请正确传入gameWX对象");
                        var g = p;
                        g && g.settings ? g.settings.SPRITE_MAX_TEXTURES = 32 : u && i.error("[minigamefe PixiCore]: 请先引入插件环境或者基础库环境的PIXI，并调用setPIXI"), !r && u && i.error("[minigamefe PixiCore]: 请先传入TWEEN"), s ? (this.xlog = s.xlog, this.quality = s.quality) : (a && n || !u || i.error("[minigamefe PixiCore]: 插件环境请传入MGP，基础库环境单独传入quality和xlog"), this.xlog = n, this.quality = a), b.init({
                            pixiJs: g,
                            TWEEN: r,
                            gameWX: l,
                            designWidth: h,
                            scale: c,
                            debug: u
                        }), u && void 0 === o && void 0 === d && i.error("[minigamefe PixiCore]: 至少传入一种创建canvas函数"), this.canvas = new D({
                            createScreenCanvas: o,
                            createCanvas: d
                        }), this.renderer = new L, this.display = new E, this.bindEvent(this.canvas), this.bindEvent(this.renderer), this.bindEvent(this.display), null === (t = null == l ? void 0 : l.onShow) || void 0 === t || t.call(l, (() => {
                            this.updateRender()
                        })), u && i.info("[minigamefe PixiCore]: inited")
                    }
                    get isSupportBitMapText() {
                        return !!b.systemInfo && h(b.systemInfo.SDKVersion, "2.24.7") >= 0
                    }
                    init(e) {
                        if (this.canvas.screenCanvas) {
                            var t, {
                                    defaultTextureName: r,
                                    defaultTextureKey: s,
                                    defaultTextStyle: n,
                                    autoRender: a = !1,
                                    debug: o = !1
                                } = e,
                                d = this.renderer.init(this.canvas.screenCanvas, o, a);
                            h(b.systemInfo.SDKVersion, "2.20.2") <= 0 && ((t = d).plugins.interaction.mapPositionToPoint = (e, i, r) => {
                                if (t) {
                                    var s = t.plugins.interaction.interactionDOMElement,
                                        n = s.getBoundingClientRect(),
                                        a = 1 / t.plugins.interaction.resolution;
                                    e.set((i - n.left) * (s.width / n.width) * a, (r - n.top) * (s.height / n.height) * a)
                                }
                            }), this.touch = new Y(this.canvas), this.bindTouchEvent(d), this.canvas.on("resize", (e => {
                                var t, i, {
                                    width: r,
                                    height: s,
                                    resetTouchArea: n
                                } = e;
                                this.renderer.resize(r, s), null === (t = this.touch) || void 0 === t || t.resize(), n && this.canvas.screenCanvas && (null === (i = this.touch) || void 0 === i || i.setTouchArea([{
                                    top: 0,
                                    left: 0,
                                    width: this.canvas.screenCanvas.width,
                                    height: this.canvas.screenCanvas.height
                                }]))
                            })), this.display.init({
                                bindingScreen: this.canvas.bindingScreen,
                                defaultTextureName: r,
                                defaultTextureKey: s,
                                defaultTextStyle: n
                            }), this.bindEvent(this.touch), b.on("onDeviceOrientationChange", (() => {
                                this.emit("onDeviceOrientationChange"), this.updateRender()
                            }))
                        } else b.debug && i.error("[minigamefe PixiCore]: 请先调用pixiJsCore.canvas.init()")
                    }
                    load(e) {
                        this.canvas.screenCanvas || b.debug && i.warn("[minigamefe PixiCore]: 请先调用pixiJsCore.canvas.init()");
                        var {
                            timeout: t,
                            list: r,
                            mainTextureName: s
                        } = e;
                        return this.loader || (this.loader = new C, this.bindEvent(this.loader)), new Promise(((e, i) => {
                            this.loader ? this.loader.load({
                                timeout: t,
                                mainTextureName: s,
                                list: r,
                                bindingScreen: this.canvas.bindingScreen
                            }).then((t => {
                                t && t.resources ? (this.display.addTextures(t.resources), e(t.resources)) : (this.qualityReport(A, t.errMsg || "minigamefe PixiCore Load资源加载失败"), i({
                                    errorMsg: t.errMsg || "加载失败"
                                }))
                            })).catch((e => {
                                this.qualityReport(A, e.errMsg || "minigamefe PixiCore Load资源加载失败"), i({
                                    errorMsg: e.errMsg || "加载失败"
                                })
                            })) : i({
                                errorMsg: "已销毁"
                            })
                        }))
                    }
                    tween(e) {
                        return new b.TWEEN.Tween(e, this.tweenGroup).onUpdate((() => {
                            this.updateRender()
                        }))
                    }
                    removeTween(e) {
                        this.tweenGroup.remove(e)
                    }
                    destroy() {
                        var e, t;
                        this.destroyed || (this.destroyed = !0, null === (e = this.loader) || void 0 === e || e.destroy(), this.renderer.destroy(), this.canvas.destroy(), this.display.destroy(), null === (t = this.touch) || void 0 === t || t.destroy(), b.destroy())
                    }
                    get touchEventHandler() {
                        return this.innerTouchEventHandler
                    }
                    get tweenGroup() {
                        return b.tweenGroup
                    }
                    updateRender() {
                        this.renderer.update()
                    }
                    get stage() {
                        return this.renderer.stage
                    }
                    get pixelRatio() {
                        return b.dpr
                    }
                    bindTouchEvent(e) {
                        var t;
                        if (this.canvas.screenCanvas) {
                            var i = function(e, t) {
                                return {
                                    start: i => {
                                        var {
                                            event: r
                                        } = i;
                                        e.plugins.interaction.onPointerDown(_(t, r), "touchstart")
                                    },
                                    move: i => {
                                        var {
                                            event: r
                                        } = i;
                                        e.plugins.interaction.onPointerMove(_(t, r), "touchmove")
                                    },
                                    end: i => {
                                        var {
                                            event: r,
                                            isDraged: s
                                        } = i;
                                        s ? e.plugins.interaction.onPointerCancel(_(t, r), "pointercancel") : e.plugins.interaction.onPointerUp(_(t, r), "touchend")
                                    }
                                }
                            }(e, this.canvas.screenCanvas.canvas);
                            this.innerTouchEventHandler = null === (t = this.touch) || void 0 === t ? void 0 : t.bindScreenCanvasEventDispatch(i)
                        }
                    }
                    bindEvent(e) {
                        e.on("postrender", (() => {
                            this.emit("render")
                        })), e.on("render", (() => {
                            this.updateRender(), this.emit("render")
                        })), e.on("error", (e => {
                            this.qualityReport(A, e)
                        })), e.on("info", this.xlogReport.bind(this))
                    }
                    xlogReport(e) {
                        var t;
                        null === (t = this.xlog) || void 0 === t || t.info(e)
                    }
                    qualityReport(e, t) {
                        var i;
                        null === (i = this.quality) || void 0 === i || i.report({
                            Type: u.Error,
                            Target: e,
                            IsError: 1,
                            Result: t
                        })
                    }
                }
                var G, {
                        parse: $,
                        stringify: j
                    } = JSON,
                    {
                        keys: J
                    } = Object,
                    K = String,
                    q = "string",
                    V = "object",
                    U = (e, t) => t,
                    Z = (e, t, i) => {
                        var r = K(t.push(i) - 1);
                        return e.set(i, r), r
                    },
                    Q = (e, t, i) => {
                        for (var r = t && typeof t === V ? (e, i) => "" === e || -1 < t.indexOf(e) ? i : void 0 : t || U, s = new Map, n = [], a = [], h = +Z(s, n, r.call({
                                "": e
                            }, "", e)), o = !h; h < n.length;) o = !0, a[h] = j(n[h++], d, i);
                        return "[" + a.join(",") + "]";

                        function d(e, t) {
                            if (o) return o = !o, t;
                            var i = r.call(this, e, t);
                            switch (typeof i) {
                                case V:
                                    if (null === i) return i;
                                case q:
                                    return s.get(i) || Z(s, n, i)
                            }
                            return i
                        }
                    };
                ! function(e) {
                    e.log = "log", e.info = "info", e.warn = "warn", e.error = "error"
                }(G || (G = {}));
                class ee {
                    constructor({
                        reportFunc: e,
                        base: t,
                        debug: r,
                        delimiter: s,
                        namespace: n
                    }) {
                        this.reportFunc = null, this.debug = !1, this.base = {}, this.delimiter = " ", this.namespace = "", e ? (this.reportFunc = e, t && this.setBase(t), this.debug = !!r, s && (this.delimiter = s), this.namespace = n ? ` ${n} ` : " ") : i.error("[minigamefe XLog]: 未传入上报函数。")
                    }
                    setBase(e) {
                        this.base = Object.assign(Object.assign({}, this.base), e)
                    }
                    log(...e) {
                        this.report(G.log, e)
                    }
                    info(...e) {
                        this.report(G.info, e)
                    }
                    warn(...e) {
                        this.report(G.warn, e)
                    }
                    error(...e) {
                        this.report(G.error, e)
                    }
                    getLogStr(e, t) {
                        var r;
                        if (!this.reportFunc) return i.error(`[minigamefe${this.namespace}XLog]: 未传入上报函数。`), "";
                        if (!t) return "";
                        var s = "";
                        t.forEach((e => {
                            s.length > 0 && (s += this.delimiter);
                            var t = e;
                            "object" == typeof t && (t = t instanceof TypeError ? t.message : Q(t)), s += `${String(t).trim()}`
                        }));
                        var n = `[minigamefe${this.namespace}XLog]: ${JSON.stringify(Object.assign(Object.assign({},this.base),{type:e,content:s}))}`;
                        return this.debug && (null === (r = i[e]) || void 0 === r || r.call(i, n)), n
                    }
                    report(e, t) {
                        var {
                            reportFunc: r
                        } = this;
                        if (r)
                            if (r[e] && "function" == typeof r[e]) {
                                var s = this.getLogStr(e, t);
                                s && r[e](s)
                            } else i.error(`[minigamefe${this.namespace}XLog]: 传入的上报函数格式不对。`);
                        else i.error(`[minigamefe${this.namespace}XLog]: 未传入上报函数。`)
                    }
                }
                var te, {
                        _onShow: ie,
                        getSystemInfoSync: re,
                        onDeviceOrientationChange: se,
                        createScreenCanvas: ne,
                        touch: ae,
                        TWEEN: he
                    } = c,
                    {
                        onTouchMove: oe,
                        offTouchMove: de,
                        onTouchEnd: le,
                        offTouchEnd: ce,
                        onTouchCancel: ue,
                        offTouchCancel: ge
                    } = ae;

                function ve() {
                    var e;
                    e = PIXI, p = e, te = new F({
                        TWEEN: he,
                        createScreenCanvas: ne,
                        xlog: new ee({
                            reportFunc: r,
                            namespace: f,
                            base: {
                                name: f
                            }
                        }),
                        quality: x,
                        gameWX: {
                            onShow: ie,
                            getSystemInfoSync: re,
                            onDeviceOrientationChange: se,
                            onTouchMove: oe,
                            offTouchMove: de,
                            onTouchEnd: le,
                            offTouchEnd: ce,
                            onTouchCancel: ue,
                            offTouchCancel: ge
                        }
                    })
                }
                var pe, {
                    getSystemInfoSync: fe
                } = c;

                function me() {
                    return pe || (pe = fe())
                }

                function we(e, t = !0) {
                    null == x || x.report({
                        Type: g.Error,
                        Target: `${f}Error`,
                        IsError: t ? 1 : 0,
                        Result: e
                    })
                }
                var xe = {
                        ready: !1,
                        padding: 8,
                        position: {
                            x: 0,
                            y: 0
                        },
                        iconSize: {
                            width: 32,
                            height: 32
                        },
                        size: {
                            width: 56,
                            height: 48
                        },
                        screen: {
                            width: 0,
                            height: 0
                        }
                    },
                    ye = {
                        commonStyle: {
                            fill: 16777215,
                            fontSize: 12,
                            whiteSpace: "normal",
                            textBaseline: "middle",
                            lineHeight: 16,
                            dropShadow: !0,
                            dropShadowColor: "rgba(0, 0, 0, 0.8)",
                            dropShadowDistance: 1
                        }
                    };

                function Te() {
                    return new Promise((e => {
                        xe.ready ? e(xe) : ((e => {
                            xe.ready = !0;
                            var {
                                screenWidth: t,
                                screenHeight: i
                            } = e;
                            xe.screen.width = t, xe.screen.height = i, xe.position.y = i / 2 - xe.size.height / 2
                        })(me()), e(xe))
                    }))
                }
                var {
                    KeyValueReport20267: be
                } = c, Se = new be;

                function Ce(e) {
                    e.ExternInfo && "string" != typeof e.ExternInfo && (e.ExternInfo = JSON.stringify(e.ExternInfo)), Se.send(e)
                }
                Se.setBase({
                    SceneID: 66,
                    UIArea: 6601
                });
                var {
                    onDeviceOrientationChange: Ie,
                    createWebView: Pe,
                    hideLoading: De,
                    showLoading: Ee,
                    showToast: Le,
                    IS_PC: Me,
                    WXConfig: Re
                } = c, Xe = [], ze = {}, Ne = null;
                class We {
                    constructor() {
                        this.webview = null, this.visible = !1, this.ready = !1, this.realSrc = "", this.realStyle = {}, this.hashChanging = !1, this.clearHashTicker = null, this.isSupportGameWebview = !1, this.webviewInitTime = 0
                    }
                    init(e) {
                        if (this.webviewInitTime = Date.now(), x.report({
                                Type: g.Info,
                                Target: `${f}WebviewInit`
                            }), Me) this.isSupportGameWebview = !0;
                        else {
                            var t = me();
                            this.isSupportGameWebview = h(t.version, "8.0.30") >= 0
                        }
                        this.realSrc = e, this.realStyle = {
                            left: 0,
                            top: 9999,
                            width: xe.screen.width,
                            height: xe.screen.height
                        }
                    }
                    get src() {
                        return this.realSrc
                    }
                    set src(e) {
                        this.realSrc !== e && (this.realSrc = e, this.webview ? this.webview.src = this.realSrc : we("set src error, please create webview first", !1))
                    }
                    get style() {
                        return this.realStyle
                    }
                    set style(e) {
                        this.realStyle = Object.assign(this.realStyle, e), this.webview ? this.webview.style = this.realStyle : we("set style error, please create webview first", !1)
                    }
                    show() {
                        this.webview ? (this.webview.style = {
                            top: 0
                        }, this.visible = !0) : (this.create(), this.show())
                    }
                    hide() {
                        this.webview && (this.webview.style = {
                            top: 9999
                        }, this.visible = !1)
                    }
                    destroy() {
                        var e;
                        null === (e = this.webview) || void 0 === e || e.destroy(), this.webview = null, this.visible = !1, this.ready = !1, this.hashChanging = !1, Xe = []
                    }
                    create() {
                        if (this.webview) return this.webview;
                        var e;
                        e = this.webviewInitTime, x.report({
                            Type: g.Info,
                            Target: `${f}webviewCreate`,
                            CostTime: Date.now() - e
                        });
                        try {
                            var t = {
                                src: this.src,
                                style: this.style,
                                __skipDomainCheck__: !0,
                                zIndex: 999999
                            };
                            this.isSupportGameWebview && Object.assign(t, {
                                    isGameWebview: !0
                                }), this.webview = Pe(t), this.bindMessage(),
                                function(e, t) {
                                    x.report({
                                        Type: g.Info,
                                        Target: `${f}WebviewCreateSuccess`,
                                        CostTime: Date.now() - t,
                                        CustomKey1: `${e}`
                                    })
                                }(this.isSupportGameWebview, this.webviewInitTime), Ie((() => {
                                    var e = me();
                                    this.style = {
                                        width: e.screenWidth,
                                        height: e.screenHeight
                                    }
                                }))
                        } catch (e) {
                            we(`createWebView error:${d(e)}`)
                        }
                        return Ee({
                            title: "加载中..."
                        }), setTimeout((() => {
                            De(), this.ready || (Le({
                                icon: "none",
                                title: "加载失败，请稍后重试"
                            }), this.destroy(), we("webview_timeout"))
                        }), 6e3), this.webview
                    }
                    postMessage(e, t) {
                        ze[e] = void 0 === t ? Date.now() : t, Ne && clearTimeout(Ne), Ne = setTimeout((() => {
                            this.innerPostMessage(ze), ze = {}
                        }), 10)
                    }
                    innerPostMessage(e, i = 2) {
                        if (this.webview)
                            if (this.hashChanging) Xe.push(e);
                            else {
                                this.hashChanging = !0, e = Object.assign(e, {
                                    [`postTime_${t(10,!0)}`]: Date.now()
                                });
                                var r = JSON.stringify(e);
                                if (this.isSupportGameWebview) !this.ready && e.info, this.webview.postMessage(r).then((e => {
                                    this.nextHash()
                                })).catch((t => {
                                    this.clearHash(), i > 0 && setTimeout((() => {
                                        this.innerPostMessage(e, i - 1)
                                    }), 20)
                                }));
                                else {
                                    var s = this.src.indexOf("#");
                                    this.src = -1 === s ? `${this.src}#${r}` : `${this.src.substring(0,s+1)}${r}`
                                }
                                this.clearHashTicker = setTimeout((() => {
                                    this.hashChanging && (this.hashChanging = !0)
                                }), 1e3)
                            }
                    }
                    clearHash() {
                        this.clearHashTicker && clearTimeout(this.clearHashTicker), this.hashChanging = !1
                    }
                    nextHash() {
                        if (this.clearHash(), Xe.length > 0) {
                            var e = Xe.shift();
                            e && this.innerPostMessage(e)
                        }
                    }
                    update() {
                        var e;
                        null === (e = this.webview) || void 0 === e || e.update()
                    }
                    bindMessage() {
                        if (this.webview) {
                            var e = me();
                            this.webview.onmessage = t => {
                                var {
                                    event: i
                                } = t;
                                switch (i) {
                                    case "close":
                                        this.hide();
                                        break;
                                    case "ready":
                                        this.postMessage("initTime", this.webviewInitTime), this.postMessage("info", JSON.stringify({
                                            platform: e.platform,
                                            version: e.version,
                                            SDKVersion: e.SDKVersion
                                        })), this.postMessage("appid", Re.accountInfo.appId), De(), this.ready = !0, this.show();
                                        break;
                                    case "hashChanged":
                                        this.nextHash()
                                }
                            }, this.webview.onload = () => {
                                var e;
                                e = this.webviewInitTime, x.report({
                                    Type: g.Info,
                                    Target: `${f}WebviewLoaded`,
                                    CostTime: Date.now() - e
                                })
                            }, this.webview.onerror = e => {
                                var t, i;
                                De(), t = d(e.errMsg), i = this.webviewInitTime, x.report({
                                    Type: g.Info,
                                    Target: `${f}WebviewError`,
                                    CostTime: Date.now() - i,
                                    Result: t,
                                    IsError: 1
                                })
                            }
                        }
                    }
                }
                var {
                    IS_DEVTOOLS: Ae
                } = c;
                class He {
                    constructor(e) {
                        this.renderSize = {
                            width: xe.size.width,
                            height: xe.size.height
                        }, this.view = void 0, this.background = void 0, this.titleNode = void 0, this.webviewManager = void 0, this.url = void 0, this.title = void 0, this.showTime = void 0, this.clicked = !1;
                        var {
                            icon: t,
                            title: i,
                            url: r,
                            time: s
                        } = e;
                        this.url = r, this.title = i, this.showTime = s, this.view = te.stage, this.background = te.display.createGraphics();
                        var n, a = te.display.createSpriteFrom({
                            url: t,
                            x: xe.padding,
                            y: xe.padding,
                            width: xe.iconSize.width,
                            height: xe.iconSize.height
                        });
                        this.view.addChild(this.background, a), this.renderBackground(), this.showTitle(i), Ce({
                            PositionID: 0,
                            ActionID: 1,
                            Status: (n = i).length > 0 ? "1" : "2",
                            ExternInfo: {
                                text: n
                            }
                        }), x.report({
                            Type: g.Info,
                            CostTime: Date.now() - w,
                            Target: `${f}Rendered`
                        }), this.bindEvent(), this.webviewManager = new We, this.webviewManager.init(`${this.url}#wechat_redirect`)
                    }
                    destroy() {
                        var e, t;
                        null === (e = this.view) || void 0 === e || e.destroy({
                            children: !0,
                            texture: !0,
                            baseTexture: !0
                        }), null === (t = this.webviewManager) || void 0 === t || t.destroy(), delete this.background, delete this.view, delete this.webviewManager
                    }
                    renderBackground() {
                        this.background && (! function(e) {
                            var t, {
                                node: r,
                                x: s = 0,
                                y: n = 0,
                                width: a = 1,
                                height: h = 1,
                                radius: o = 0,
                                fill: d,
                                line: l,
                                clear: c = !1
                            } = e;
                            ((t = "number" == typeof o ? {
                                tl: o,
                                tr: o,
                                br: o,
                                bl: o
                            } : o).tl + t.tr > a || t.bl + t.br > a) && i.error("左右radius总和要小于width"), (t.tl + t.bl > h || t.tr + t.br > h) && i.error("上下radius总和要小于height"), c && r.clear(), l && r.lineStyle(l.width, l.color || 0, l.alpha || 1, l.alignment, l.native), d && r.beginFill(d.color || 0, d.alpha || 1), (d || l) && (r.moveTo(s + t.tl, n), r.lineTo(s + a - t.tr, n), t.tr > 0 && r.quadraticCurveTo(s + a, n, s + a, n + t.tr), r.lineTo(s + a, n + h - t.br), t.br > 0 && r.quadraticCurveTo(s + a, n + h, s + a - t.br, n + h), r.lineTo(s + t.bl, n + h), t.bl > 0 && r.quadraticCurveTo(s, n + h, s, n + h - t.bl), r.lineTo(s, n + t.tl), t.tl > 0 && r.quadraticCurveTo(s, n, s + t.tl, n), r.closePath()), d && r.endFill()
                        }({
                            node: this.background,
                            width: this.renderSize.width,
                            height: this.renderSize.height,
                            radius: {
                                tl: 0,
                                tr: this.renderSize.height / 2,
                                br: this.renderSize.height / 2,
                                bl: 0
                            },
                            fill: {
                                color: 0,
                                alpha: .5
                            },
                            line: {
                                width: 1,
                                color: 16777215,
                                alpha: .2,
                                alignment: 0
                            },
                            clear: !0
                        }), te.updateRender())
                    }
                    showTitle(e) {
                        if (this.view && e) {
                            this.titleNode = te.display.createText({
                                textString: e,
                                textStyle: ye.commonStyle,
                                x: xe.iconSize.width + 2 * xe.padding,
                                y: (xe.size.height - ye.commonStyle.lineHeight) / 2
                            }), this.titleNode.visible = !1, this.view.addChild(this.titleNode);
                            var t = this.titleNode ? this.titleNode.width + 1.5 * xe.padding : 0,
                                i = xe.iconSize.width + t + 3 * xe.padding;
                            te.canvas.resize({
                                width: i,
                                height: this.renderSize.height,
                                resetTouchArea: !0
                            }), this.changeSize(i, (() => {
                                this.titleNode && (this.titleNode.visible = !0)
                            })), setTimeout((() => {
                                this.hideTitle()
                            }), this.showTime + 200)
                        }
                    }
                    hideTitle() {
                        this.titleNode && (this.titleNode.destroy({
                            texture: !0,
                            baseTexture: !0
                        }), delete this.titleNode, this.changeSize(xe.size.width, (() => {
                            te.canvas.resize({
                                width: xe.size.width,
                                height: this.renderSize.height,
                                resetTouchArea: !0
                            })
                        })))
                    }
                    changeSize(e, t) {
                        te.tween(this.renderSize).to({
                            width: e
                        }, 200).onUpdate((() => {
                            this.renderBackground()
                        })).onComplete((() => {
                            t()
                        })).start()
                    }
                    bindEvent() {
                        this.view && (this.view.interactive = !0, this.view.on("pointertap", (() => {
                            var e, t;
                            Ae || (this.clicked || (this.clicked = !0, Ce({
                                PositionID: 1,
                                ActionID: 2,
                                Status: (t = this.title).length > 0 ? "1" : "2",
                                ExternInfo: {
                                    text: t
                                }
                            }), null === (e = this.webviewManager) || void 0 === e || e.show(), this.hideTitle(), te.updateRender(), setTimeout((() => {
                                this.clicked = !1
                            }), 500)))
                        })))
                    }
                }
                var {
                    getCutieInfo: ke,
                    CutieType: Be,
                    reportCutie: Oe,
                    ReportType: _e
                } = c;
                class Ye {
                    constructor() {
                        this.inited = !1, this.destroyed = !1, this.renderer = void 0, ke(Be.CUTIE_TYPE_PC_COUPON).then((e => {
                            var t;
                            e && e.length > 0 && ([t] = e), t && t.cutie && t.cutie.jump_url && this.init({
                                id: t.cutie.cutie_id || "",
                                icon: t.cutie.icon || "https://res.wx.qq.com/wechatgame/product/webpack/userupload/20230316/144933/ic-line-cash.png",
                                title: t.cutie.title || "",
                                url: t.cutie.jump_url,
                                time: t.duration_ms || 5e3
                            })
                        })).catch((e => {
                            we(d(e))
                        }))
                    }
                    init(e) {
                        if (!this.inited) {
                            this.inited = !0, w = Date.now(), x.report({
                                Type: g.Info,
                                Target: `${f}Init`
                            });
                            try {
                                ve(), this.initScreenCanvas(), Te().then((() => {
                                    this.initPixiJsCore(), this.renderer = new He(e)
                                })), x.report({
                                    Type: g.Info,
                                    CostTime: Date.now() - w,
                                    Target: `${f}Created`
                                }), Oe(_e.REPORT_TYPE_EXPOSURE, e.id)
                            } catch (e) {
                                we(`初始化失败:${d(e)}`, !0), this.destroy()
                            }
                        }
                    }
                    initScreenCanvas() {
                        te.canvas.screenCanvas || te.canvas.init()
                    }
                    initPixiJsCore() {
                        this.initScreenCanvas(), te.init({
                            defaultTextStyle: ye.commonStyle
                        }), te.touch && (te.touch.padding = 0, te.touch.canDrag = !0, te.touch.snapType = M.Left), te.canvas.position.set({
                            x: xe.position.x,
                            y: xe.position.y
                        }), te.canvas.resize({
                            width: xe.size.width,
                            height: xe.size.height,
                            resetTouchArea: !0
                        }), te.canvas.zIndex = "101"
                    }
                    destroy() {
                        this.destroyed || (this.destroyed = !0, this.renderer && (this.renderer.destroy(), delete this.renderer), te.destroy(), this.inited = !1, x.report({
                            Type: g.Info,
                            CostTime: Date.now() - w,
                            Target: `${f}Destroy`
                        }))
                    }
                }
                Object.defineProperty(globalThis, "__minigamePlatformSDK__", {
                    get: () => Ye
                })
            })(), {}.default
        })()
    }()
} catch (e) {
    console.error("catch sdkSubPackage: minigamePlatform error: ", e)
}