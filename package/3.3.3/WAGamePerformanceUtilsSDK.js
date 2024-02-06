try {
    ! function() {
        let e, t = "getGamePerformanceUtilsSDKGlobalVar";
        globalThis[t] ? e = globalThis[t] : void 0 !== globalThis.WeixinJSBridge && globalThis.WeixinJSBridge[t] && (e = globalThis.WeixinJSBridge[t]);
        var {
            wxConsole: n
        } = e();
        (() => {
            var e = {
                    715: e => {
                        function t(e, t, n, r, i, s, o) {
                            try {
                                var a = e[s](o),
                                    l = a.value
                            } catch (e) {
                                return void n(e)
                            }
                            a.done ? t(l) : Promise.resolve(l).then(r, i)
                        }
                        e.exports = function(e) {
                            return function() {
                                var n = this,
                                    r = arguments;
                                return new Promise((function(i, s) {
                                    var o = e.apply(n, r);

                                    function a(e) {
                                        t(o, i, s, a, l, "next", e)
                                    }

                                    function l(e) {
                                        t(o, i, s, a, l, "throw", e)
                                    }
                                    a(void 0)
                                }))
                            }
                        }, e.exports.__esModule = !0, e.exports.default = e.exports
                    }
                },
                t = {};

            function n(r) {
                var i = t[r];
                if (void 0 !== i) return i.exports;
                var s = t[r] = {
                    exports: {}
                };
                return e[r](s, s.exports, n), s.exports
            }
            n.n = e => {
                var t = e && e.__esModule ? () => e.default : () => e;
                return n.d(t, {
                    a: t
                }), t
            }, n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }, n.g = function() {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" == typeof window) return window
                }
            }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
            var r = {};
            (() => {
                "use strict";
                n.d(r, {
                    default: () => kn
                });
                var e = n(715),
                    t = n.n(e);
                class i {
                    static getInstance() {
                        return this.instance || (this.instance = new this), this.instance
                    }
                }
                i.instance = void 0;
                var s, o, a, l, h, c, u, d, f = null;

                function p() {
                    return f
                }

                function m() {
                    return u
                }

                function g() {
                    return d
                }

                function v() {
                    return a
                }

                function I() {
                    return h
                }

                function k(e) {
                    return "number" == typeof e && isFinite(e)
                }

                function y(e) {
                    return e.then((e => [null, e])).catch((e => [e, null]))
                }

                function w(e) {
                    if (null == e) return !0;
                    if ("boolean" == typeof e) return !1;
                    if ("number" == typeof e) return !e;
                    if (e instanceof Error) return "" === e.message;
                    switch (Object.prototype.toString.call(e)) {
                        case "[object String]":
                        case "[object Array]":
                            return !e.length;
                        case "[object File]":
                        case "[object Map]":
                        case "[object Set]":
                            return !e.size;
                        case "[object Object]":
                            return !Object.keys(e).length
                    }
                    return !1
                }

                function b(e) {
                    return void 0 === e
                }

                function T(e) {
                    var t = e;
                    try {
                        "object" == typeof e && (t = "string" == typeof e.errMsg ? e.errMsg : "string" == typeof e.errmsg ? e.errmsg : "string" == typeof e.message ? e.message : JSON.stringify(e))
                    } catch (e) {
                        console.error(e)
                    }
                    return t
                }
                const S = class extends i {
                    constructor(...e) {
                        super(...e), this.frameInfo = void 0, this.frame = 0, this.requestId = void 0, this.startTime = 0, this.prevTime = 0
                    }
                    get currentFrame() {
                        return this.frame + 1
                    }
                    init() {
                        this.startTime = Date.now(), this.start()
                    }
                    getRuntime() {
                        return Date.now() - this.startTime
                    }
                    start() {
                        this.requestId || (this.prevTime = Date.now(), requestAnimationFrame(this.counter.bind(this)))
                    }
                    stop() {
                        cancelAnimationFrame(this.requestId), this.requestId = 0
                    }
                    reset() {
                        this.stop(), this.requestId = 0, this.startTime = 0, this.prevTime = 0, this.frameInfo = null
                    }
                    counter() {
                        this.frame += 1;
                        var e = Date.now(),
                            t = e - this.prevTime;
                        this.frameInfo = {
                            frame: this.frame,
                            startTime: this.prevTime,
                            endTime: e,
                            cost: t
                        }, this.prevTime = e, this.requestId = requestAnimationFrame(this.counter.bind(this))
                    }
                }.getInstance();
                var C = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    R = 20;

                function P() {
                    this._events = {}, this._conf && x.call(this, this._conf)
                }

                function x(e) {
                    e ? (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), this._maxListeners = void 0 !== e.maxListeners ? e.maxListeners : R, e.newListener && (this._newListener = e.newListener), e.removeListener && (this._removeListener = e.removeListener)) : this._maxListeners = R
                }

                function L(e, t) {
                    console.warn(`[Event] ${e} listeners of event ${t} have been added, possibly causing memory leak.`)
                }

                function _(e) {
                    this._events = {}, this._newListener = !1, this._removeListener = !1, x.call(this, e)
                }
                _.prototype.delimiter = ".", _.prototype.setMaxListeners = function(e) {
                    void 0 !== e && (this._maxListeners = e, this._conf || (this._conf = {}), this._conf.maxListeners = e)
                }, _.prototype.event = "", _.prototype.once = function(e, t) {
                    return this._once(e, t, !1)
                }, _.prototype.prependOnceListener = function(e, t) {
                    return this._once(e, t, !0)
                }, _.prototype._once = function(e, t, n) {
                    return this._many(e, 1, t, n), this
                }, _.prototype.many = function(e, t, n) {
                    return this._many(e, t, n, !1)
                }, _.prototype.prependMany = function(e, t, n) {
                    return this._many(e, t, n, !0)
                }, _.prototype._many = function(e, t, n, r) {
                    var i = this;
                    if ("function" != typeof n) throw new Error("many only accepts instances of Function");

                    function s() {
                        return 0 == --t && i.off(e, s), n.apply(this, arguments)
                    }
                    return s._origin = n, this._on(e, s, r), i
                }, _.prototype.emit = function() {
                    this._events || P.call(this);
                    var e = arguments[0];
                    if ("newListener" === e && !this._newListener && !this._events.newListener) return !1;
                    var t, n, r, i, s, o = arguments.length;
                    if (this._all && this._all.length) {
                        if (s = this._all.slice(), o > 3)
                            for (t = new Array(o), i = 0; i < o; i++) t[i] = arguments[i];
                        for (r = 0, n = s.length; r < n; r++) switch (this.event = e, o) {
                            case 1:
                                s[r].call(this, e);
                                break;
                            case 2:
                                s[r].call(this, e, arguments[1]);
                                break;
                            case 3:
                                s[r].call(this, e, arguments[1], arguments[2]);
                                break;
                            default:
                                s[r].apply(this, t)
                        }
                    }
                    if ("function" == typeof(s = this._events[e])) {
                        switch (this.event = e, o) {
                            case 1:
                                s.call(this);
                                break;
                            case 2:
                                s.call(this, arguments[1]);
                                break;
                            case 3:
                                s.call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (t = new Array(o - 1), i = 1; i < o; i++) t[i - 1] = arguments[i];
                                s.apply(this, t)
                        }
                        return !0
                    }
                    if (s && (s = s.slice()), s && s.length) {
                        if (o > 3)
                            for (t = new Array(o - 1), i = 1; i < o; i++) t[i - 1] = arguments[i];
                        for (r = 0, n = s.length; r < n; r++) switch (this.event = e, o) {
                            case 1:
                                s[r].call(this);
                                break;
                            case 2:
                                s[r].call(this, arguments[1]);
                                break;
                            case 3:
                                s[r].call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                s[r].apply(this, t)
                        }
                        return !0
                    }
                    if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                    return !!this._all
                }, _.prototype.emitAsync = function() {
                    this._events || P.call(this);
                    var e = arguments[0];
                    if ("newListener" === e && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
                    var t, n, r, i, s, o = [],
                        a = arguments.length;
                    if (this._all) {
                        if (a > 3)
                            for (t = new Array(a), i = 1; i < a; i++) t[i] = arguments[i];
                        for (r = 0, n = this._all.length; r < n; r++) switch (this.event = e, a) {
                            case 1:
                                o.push(this._all[r].call(this, e));
                                break;
                            case 2:
                                o.push(this._all[r].call(this, e, arguments[1]));
                                break;
                            case 3:
                                o.push(this._all[r].call(this, e, arguments[1], arguments[2]));
                                break;
                            default:
                                o.push(this._all[r].apply(this, t))
                        }
                    }
                    if ("function" == typeof(s = this._events[e])) switch (this.event = e, a) {
                        case 1:
                            o.push(s.call(this));
                            break;
                        case 2:
                            o.push(s.call(this, arguments[1]));
                            break;
                        case 3:
                            o.push(s.call(this, arguments[1], arguments[2]));
                            break;
                        default:
                            for (t = new Array(a - 1), i = 1; i < a; i++) t[i - 1] = arguments[i];
                            o.push(s.apply(this, t))
                    } else if (s && s.length) {
                        if (s = s.slice(), a > 3)
                            for (t = new Array(a - 1), i = 1; i < a; i++) t[i - 1] = arguments[i];
                        for (r = 0, n = s.length; r < n; r++) switch (this.event = e, a) {
                            case 1:
                                o.push(s[r].call(this));
                                break;
                            case 2:
                                o.push(s[r].call(this, arguments[1]));
                                break;
                            case 3:
                                o.push(s[r].call(this, arguments[1], arguments[2]));
                                break;
                            default:
                                o.push(s[r].apply(this, t))
                        }
                    } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
                    return Promise.all(o)
                }, _.prototype.on = function(e, t) {
                    return this._on(e, t, !1)
                }, _.prototype.prependListener = function(e, t) {
                    return this._on(e, t, !0)
                }, _.prototype.onAny = function(e) {
                    return this._onAny(e, !1)
                }, _.prototype.prependAny = function(e) {
                    return this._onAny(e, !0)
                }, _.prototype.addListener = _.prototype.on, _.prototype._onAny = function(e, t) {
                    if ("function" != typeof e) throw new Error("onAny only accepts instances of Function");
                    return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), this
                }, _.prototype._on = function(e, t, n) {
                    if ("function" == typeof e) return this._onAny(e, t), this;
                    if ("function" != typeof t) throw new Error("on only accepts instances of Function");
                    return this._events || P.call(this), this._newListener && this.emit("newListener", e, t), this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]), n ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, L.call(this, this._events[e].length, e))) : this._events[e] = t, this
                }, _.prototype.off = function(e, t) {
                    if ("function" != typeof t) throw new Error("removeListener only takes instances of Function");
                    var n, r = [];
                    if (!this._events[e]) return this;
                    n = this._events[e], r.push({
                        _listeners: n
                    });
                    for (var i = 0; i < r.length; i++) {
                        if (n = r[i]._listeners, C(n)) {
                            for (var s = -1, o = 0, a = n.length; o < a; o++)
                                if (n[o] === t || n[o].listener && n[o].listener === t || n[o]._origin && n[o]._origin === t) {
                                    s = o;
                                    break
                                } if (s < 0) continue;
                            return this._events[e].splice(s, 1), 0 === n.length && delete this._events[e], this._removeListener && this.emit("removeListener", e, t), this
                        }(n === t || n.listener && n.listener === t || n._origin && n._origin === t) && (delete this._events[e], this._removeListener && this.emit("removeListener", e, t))
                    }
                    return function e(t) {
                        if (void 0 !== t) {
                            var n = Object.keys(t);
                            for (var r in n) {
                                var i = n[r],
                                    s = t[i];
                                s instanceof Function || "object" != typeof s || null === s || (Object.keys(s).length > 0 && e(t[i]), 0 === Object.keys(s).length && delete t[i])
                            }
                        }
                    }(this.listenerTree), this
                }, _.prototype.offAny = function(e) {
                    var t, n = 0,
                        r = 0;
                    if (e && this._all && this._all.length > 0) {
                        for (n = 0, r = (t = this._all).length; n < r; n++)
                            if (e === t[n]) return t.splice(n, 1), this._removeListener && this.emit("removeListenerAny", e), this
                    } else {
                        if (t = this._all, this._removeListener)
                            for (n = 0, r = t.length; n < r; n++) this.emit("removeListenerAny", t[n]);
                        this._all = []
                    }
                    return this
                }, _.prototype.removeListener = _.prototype.off, _.prototype.removeAllListeners = function(e) {
                    return void 0 === e ? (!this._events || P.call(this), this) : (this._events && delete this._events[e], this)
                }, _.prototype.listeners = function(e) {
                    return this._events || P.call(this), this._events[e] || (this._events[e] = []), C(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
                }, _.prototype.eventNames = function() {
                    return Object.keys(this._events)
                }, _.prototype.listenerCount = function(e) {
                    return this.listeners(e).length
                }, _.prototype.listenersAny = function() {
                    return this._all ? this._all : []
                };
                const N = new _;
                var E = {
                        LoadStart: "wx-request-load-start",
                        LoadFail: "wx-reqeust-load-fail",
                        LoadSuccess: "wx-request-load-success",
                        LoadComplete: "wx-request-load-complete"
                    },
                    A = "detect-start",
                    F = "detect-end",
                    q = "detect-before-result",
                    D = "performance-data-received",
                    M = {
                        Drawcall: "canvas-drawcall",
                        TextureCompressionFormat: "texture-compression-format",
                        NoTextureCompressionFormat: "no-texture-compression-format"
                    },
                    W = {
                        Invoked: "api-invoked",
                        ReportInteraction: "report-interaction",
                        JsError: "on-js-error",
                        UnhandledPromiseRejection: "unhandled-promise-rejection",
                        FsApiInvoked: "fs-api-invoked"
                    },
                    O = new Map;
                ["markScene", "getSystemInfo", "getWindowInfo", "getSystemSetting", "getDeviceInfo", "getAppBaseInfo", "getAppAuthorizeSetting", "triggerGC", "getMenuButtonBoundingClientRect", "revokeBufferURL", "createBufferURL", "reportMonitor", "reportEvent", "createPath2D", "createCanvas", "setPreferredFramesPerSecond", "loadFont", "createImageData", "createImage", "setCursor", "requestPointerLock", "isPointerLocked", "exitPointerLock", "createWebAudioContext", "createInnerAudioContext", "createVideoDecoder", "createWorker", "encode", "decode"].forEach((e => {
                    O.set(e, !0)
                }));
                const G = O;

                function j(e, t) {
                    return e ? e[t] || e[t.toLowerCase()] : ""
                }

                function V(e, t) {
                    var n = null;
                    for (var r of e.children) {
                        var i;
                        if ((null == r || null === (i = r.attributes) || void 0 === i ? void 0 : i.id) === t) {
                            n = r;
                            break
                        }
                        if (r.children.length > 0) {
                            var s = V(r, t);
                            if (null !== s) {
                                n = s;
                                break
                            }
                        }
                    }
                    return n
                }

                function B(e, t = []) {
                    var n = new WeakMap,
                        r = JSON.stringify(e, ((e, r) => {
                            if (!t.includes(e)) {
                                var i = r && r.buffer instanceof ArrayBuffer && void 0 !== r.BYTES_PER_ELEMENT;
                                if (!("function" == typeof r || Array.isArray(r) || r instanceof ArrayBuffer || i || r instanceof Map || r instanceof Set)) {
                                    if ("object" == typeof r && null !== r) {
                                        if (n.has(r)) return;
                                        n.set(r, !0)
                                    }
                                    return r
                                }
                            }
                        }));
                    return "{}" === r ? "" : r
                }

                function U(e) {
                    return e >= 200 && e < 300
                }
                var K = ["getPrivacyState", "getPrivacyState", "createOpenSettingButton", "onLaunch", "offLaunch", "gameLoginReport", "gameLogoutReport", "initFaceDetect", "faceDetect", "stopFaceDetect", "createGamePortal", "createGameBanner", "createGameIcon", "getSavedFileList", "getSavedFileInfo", "removeSavedFile"];
                class $ {
                    constructor(e) {
                        var t;
                        this.invokeInfo = void 0, this.args = null, this.result = null, this.isSyncApi = !1, this.isDeprecated = !1, this.ret = null, this.recorded = !1;
                        var {
                            apiName: n,
                            args: r
                        } = e, i = Date.now(), s = Math.random();
                        this.isDeprecated = this.checkIsDeprecatedApi(n), this.args = r, this.invokeInfo = {
                            frame: S.currentFrame,
                            uniqueId: 1e4 * i + Math.round(9999 * s),
                            startTime: i,
                            endTime: 0,
                            args: null == r || null === (t = r.map((e => B(e)))) || void 0 === t ? void 0 : t.filter((e => !!e)),
                            apiName: n,
                            errno: 0,
                            invokeCost: 0,
                            callbackDuration: 0,
                            errMsg: "",
                            isSyncApi: this.checkIsSyncApi(n)
                        }
                    }
                    afterExecute(e) {
                        e && (this.ret = e), this.invokeInfo.invokeCost = Date.now() - this.invokeInfo.startTime, this.sendMessage()
                    }
                    complete(e) {
                        var {
                            endTime: t
                        } = this.invokeInfo;
                        if (!t) {
                            var n = Date.now();
                            this.invokeInfo.endTime = n, this.invokeInfo.callbackDuration = n - this.invokeInfo.startTime
                        }
                        this.result || (this.result = e);
                        var {
                            errMsg: r,
                            errno: i
                        } = e;
                        r && !r.includes(":ok") && (this.invokeInfo.errMsg = r, this.invokeInfo.errno = b(i) ? 1 : i)
                    }
                    sendMessage() {
                        this.recorded || (this.recorded = !0, N.emit(W.Invoked, this))
                    }
                    checkIsSyncApi(e) {
                        return e.toLowerCase().endsWith("sync") && !e.toLowerCase().endsWith("async") || (null == G ? void 0 : G.has(e))
                    }
                    checkIsDeprecatedApi(e) {
                        return K.includes(e)
                    }
                }
                var H = function(e) {
                    return e[e.None = 0] = "None", e[e.Event = 1] = "Event", e[e.Error = 2] = "Error", e[e.Warn = 3] = "Warn", e[e.Info = 4] = "Info", e[e.Debug = 5] = "Debug", e
                }(H || {});
                class Q {
                    static error(...e) {
                        Q.logLevel >= H.Error && console.error("[DETECT ERROR]", ...e)
                    }
                    static warn(...e) {
                        Q.logLevel >= H.Warn && console.warn("[DETECT WARN]", ...e)
                    }
                    static info(...e) {
                        Q.logLevel >= H.Info && console.info("[DETECT INFO]", ...e)
                    }
                    static event(...e) {
                        Q.logLevel >= H.Event && console.info("[DETECT EVENT]", ...e)
                    }
                    static debug(...e) {
                        Q.logLevel >= H.Debug && console.log("[DETECT DEBUG]", ...e)
                    }
                    static setLogLevel(e) {
                        Q.logLevel = e
                    }
                    static getLogLevel() {
                        return Q.logLevel
                    }
                }
                Q.logLevel = H.Warn;
                var X = class extends i {
                        constructor(...e) {
                            super(...e), this.injectTime = 0, this.detectTimes = 0, this.showTimes = 0, this.lastTimeStamp = 0, this.initParams = void 0, this.isWxApplib = !1, this.sdk = {}, this.meta = {
                                startTime: 0,
                                endTime: 0,
                                uploadTime: 0,
                                launchTime: 0,
                                isAutoStart: !1,
                                sdkVersion: ""
                            }, this.defaultMaxConcurrent = 10, this.onShow = () => {
                                this.showTimes += 1, Q.debug("return front end after ", Date.now() - this.lastTimeStamp, " ms"), this.lastTimeStamp = 0
                            }, this.onHide = () => {
                                this.lastTimeStamp = Date.now()
                            }
                        }
                        get hasWXConfig() {
                            return this.isWxApplib && this.sdk.WXConfig
                        }
                        get audits() {
                            return this.hasWXConfig && this.sdk.WXConfig.audits || {}
                        }
                        get iOSHighPerformance() {
                            return !!this.hasWXConfig && (!!this.sdk.WXConfig.jitMode || !!this.sdk.WXConfig.iOSHighPerformance)
                        }
                        get maxConcurrentCount() {
                            var e;
                            return this.hasWXConfig && (null === (e = this.sdk.WXConfig.wxAppInfo) || void 0 === e ? void 0 : e.maxRequestConcurrent) || this.defaultMaxConcurrent
                        }
                        get subpackages() {
                            return this.hasWXConfig ? this.sdk.WXConfig.subpackages : []
                        }
                        get parallelPreloadSubpackages() {
                            return this.hasWXConfig ? this.sdk.WXConfig.parallelPreloadSubpackages : []
                        }
                        get isIOS() {
                            return "ios" === this.sdk.WXConfig.platform
                        }
                        get isDevtools() {
                            return "devtools" === this.sdk.WXConfig.platform
                        }
                        get isAndroid() {
                            return "android" === this.sdk.WXConfig.platform
                        }
                        get showUI() {
                            return !this.initParams.gameAuditModule
                        }
                        init(e) {
                            if (this.initParams = e, this.injectTime = Date.now(), void 0 !== this.initParams.WXConfig) {
                                this.isWxApplib = !0;
                                var t = e;
                                this.sdk = {
                                    WXConfig: t.WXConfig,
                                    wxConsole: t.wxConsole,
                                    onShow: t.onShow,
                                    onHide: t.onHide,
                                    offShow: t.offShow,
                                    offHide: t.offHide,
                                    getSystemInfoSync: t.getSystemInfoSync,
                                    getNetworkType: t.getNetworkType,
                                    onNetworkStatusChange: t.onNetworkStatusChange,
                                    gameTransfer: t.gameTransfer,
                                    reportKeyValue: t.reportKeyValue
                                }
                            } else this.isWxApplib = !1;
                            this.reset(), this.bindVisibleListener()
                        }
                        reset() {
                            this.showTimes = 0, this.meta = {
                                startTime: 0,
                                endTime: 0,
                                uploadTime: 0,
                                isAutoStart: !(this.detectTimes > 0) && X.audits.autoStart,
                                launchTime: this.injectTime,
                                sdkVersion: X.sdk.WXConfig.SDKVersion
                            }, this.removeVisibleListener()
                        }
                        bindVisibleListener() {
                            this.sdk.onShow && (this.sdk.onShow(this.onShow), this.sdk.onHide(this.onHide))
                        }
                        removeVisibleListener() {
                            this.sdk.offShow && (this.sdk.offShow(this.onShow), this.sdk.offHide(this.onHide))
                        }
                    }.getInstance(),
                    z = new WeakMap,
                    J = [];
                var Y = new class {
                        get requestingCount() {
                            return this.networkInfo.requestingCount
                        }
                        get needPushQueue() {
                            var {
                                requestingCount: e,
                                maxConcurrent: t
                            } = this.networkInfo;
                            return e > t
                        }
                        constructor() {
                            this.networkInfo = void 0, this.reset()
                        }
                        reset() {
                            this.networkInfo = {
                                invokeCount: 0,
                                failCount: 0,
                                responseSize: 0,
                                requestingCount: 0,
                                requestStartTime: 0,
                                totalNetworkTime: 0,
                                maxConcurrent: X.maxConcurrentCount,
                                maxRequestingCount: 0,
                                totalQueueCount: 0,
                                totalQueueTime: 0
                            }, z = new WeakMap, J = []
                        }
                        loadStart(e) {
                            In.isRunning && (0 === this.networkInfo.requestingCount && (this.networkInfo.requestStartTime = Date.now()), this.networkInfo.requestingCount += 1, this.networkInfo.invokeCount += 1, this.networkInfo.requestingCount > this.networkInfo.maxRequestingCount && (this.networkInfo.maxRequestingCount = this.requestingCount), this.needPushQueue && (this.networkInfo.totalQueueCount += 1, J.push(e), z.set(e, [Date.now()])))
                        }
                        loadSuccess(e) {
                            In.isRunning && this.handleInfo(e)
                        }
                        loadFail(e) {
                            In.isRunning && (this.networkInfo.failCount += 1, this.handleInfo(e))
                        }
                        handleInfo(e) {
                            var {
                                networkInfo: t
                            } = e, n = e.result;
                            if (this.networkInfo.requestingCount > 0) {
                                if (this.networkInfo.requestingCount -= 1, 0 === this.networkInfo.requestingCount) {
                                    var r = Date.now() - this.networkInfo.requestStartTime;
                                    this.networkInfo.totalNetworkTime += r, Q.debug("all network finished, cost=", r, ", total=", this.networkInfo.totalNetworkTime)
                                }
                                this.networkInfo.responseSize += t.byteLength, n && !U(n.statusCode) && (Q.error("network task statusCode error, statusCode=", n.statusCode, ", url=", e.networkInfo.url), this.networkInfo.failCount += 1), this.calculateQueueTime(), Q.debug("network task complete, currentInfo=", JSON.parse(JSON.stringify(this.networkInfo)))
                            }
                        }
                        calculateQueueTime() {
                            var e = J.length;
                            if (e > 0) {
                                var t = J.shift();
                                if (t) {
                                    var n = (z.get(t) || [])[0];
                                    if (n && n > 0) {
                                        var r = Date.now() - n;
                                        z.set(t, [n, r, e]), this.networkInfo.totalQueueTime += r
                                    }
                                }
                            }
                        }
                    },
                    Z = {
                        Request: "request",
                        DownloadFile: "downloadFile",
                        CreateImage: "createImage",
                        CreateCanvas: "createCanvas",
                        ReportScene: "reportScene",
                        GetFileSystemManager: "getFileSystemManager"
                    },
                    ee = {
                        Env: "env",
                        Cloud: "cloud"
                    };
                class te {
                    constructor(e) {
                        this.type = void 0, this.networkInfo = void 0, this.invokeInfoMap = new WeakMap, this.result = void 0, this.needPushQueue = !1;
                        var {
                            generalInvokeInfo: t,
                            type: n,
                            args: r = {}
                        } = e, {
                            url: i
                        } = r;
                        this.type = n, this.invokeInfoMap.set(this, t), t.result && (this.result = t.result), this.networkInfo = {
                            url: i,
                            byteLength: 0,
                            duration: 0,
                            currentConcurrentCount: Y.requestingCount,
                            args: B(r, ["data", "url"]),
                            statusCode: 0,
                            method: r.method,
                            protocol: "",
                            contentEncoding: "",
                            cache: !0,
                            queueTime: 0
                        }, this.needPushQueue = Y.needPushQueue
                    }
                    complete() {
                        var e = this.invokeInfoMap.get(this);
                        e && (e.result && (this.result = e.result, this.networkInfo.statusCode = this.result.statusCode, this.networkInfo.protocol = this.result.profile ? this.result.profile.protocol : "", this.type === Z.Request ? this.checkRequest() : this.type === Z.DownloadFile && this.setResponseSize(this.result), this.calculateQueueTime(e)), this.type === Z.CreateImage && (this.networkInfo.statusCode = 200))
                    }
                    calculateQueueTime(e) {
                        if (this.needPushQueue) {
                            var t = z.get(e) || [];
                            t && t[1] && ([, this.networkInfo.queueTime, this.networkInfo.queueLength] = t)
                        }
                    }
                    checkRequest() {
                        var e = this.result;
                        U(e.statusCode) && (this.checkHeader(e.header), this.setResponseSize(e))
                    }
                    checkHeader(e) {
                        e && (this.networkInfo.contentEncoding = j(e, "Content-Encoding"), this.networkInfo.cache = this.checkCache(e), this.networkInfo.byteLength = parseInt(j(e, "Content-Length"), 10) || 0)
                    }
                    checkCache(e) {
                        var t = !0;
                        if (e) {
                            var n = j(e, "X-Cache-Lookup") || j(e, "X-Cache"),
                                r = j(e, "Age"),
                                i = (n || "").toLowerCase();
                            i ? t = i.includes("hit") : r && (t = Number(r) > 0)
                        }
                        return t
                    }
                    setResponseSize(e) {
                        var {
                            profile: t
                        } = e, n = this.networkInfo.byteLength;
                        return t ? (n = t.receivedBytedCount, this.networkInfo.duration = t.responseEnd - t.requestStart) : this.type === Z.Request && (n = this.getResponseSizeByBody(e)), this.networkInfo.byteLength = n, n
                    }
                    getResponseSizeByBody(e) {
                        var t, {
                                data: n
                            } = e,
                            r = 0;
                        return t = n, "[object String]" === Object.prototype.toString.call(t) ? r = n.length : n && n.byteLength && (r = n.byteLength), r
                    }
                }
                class ne {
                    constructor(e) {
                        this.performanceInfo = void 0;
                        var t = Date.now(),
                            n = Math.random();
                        this.performanceInfo = {
                            ...e,
                            uniqueId: 1e4 * t + Math.round(9999 * n),
                            frame: S.currentFrame,
                            startTime: t,
                            endTime: t
                        }
                    }
                }
                var re = ["getNetworkType", "getSystemInfoAsync"];

                function ie(e, t, n, ...r) {
                    var i, s, o = new $({
                            apiName: e,
                            args: r
                        }),
                        a = null == r ? void 0 : r[0];
                    if (a && "object" == typeof a) {
                        var l = null == a ? void 0 : a.success;
                        a.success = function(e) {
                            var t, r;
                            o.complete(e), null == n || null === (t = n.success) || void 0 === t || t.call(n, o), "function" == typeof l && l.call(a, e), null == n || null === (r = n.afterSuccess) || void 0 === r || r.call(n, o)
                        };
                        var h = null == a ? void 0 : a.fail;
                        if (a.fail = function(e) {
                                var t, r;
                                o.complete(e), null == n || null === (t = n.fail) || void 0 === t || t.call(n, o), "function" == typeof h && h.call(a, e), null == n || null === (r = n.afterFail) || void 0 === r || r.call(n, o)
                            }, !re.includes(e)) {
                            var c = null == a ? void 0 : a.complete;
                            a.complete = function(e) {
                                var t, r;
                                o.complete(e), null == n || null === (t = n.complete) || void 0 === t || t.call(n, o), "function" == typeof c && c.call(a, e), null == n || null === (r = n.afterComplete) || void 0 === r || r.call(n, o)
                            }
                        }
                    }
                    null == n || null === (i = n.beforeExecute) || void 0 === i || i.call(n, o);
                    var u = t(...r);
                    return o.ret = u, null == n || null === (s = n.afterExecute) || void 0 === s || s.call(n, o), o.afterExecute(u), u
                }
                var se = new WeakMap;
                var oe = new WeakMap;
                new WeakMap;
                var ae = new WeakMap;
                new WeakMap, Object.prototype.__defineGetter__, Object.prototype.__defineSetter__, Object.defineProperty;
                var le = null,
                    he = new WeakMap,
                    ce = !1;

                function ue() {
                    var e = p(),
                        t = Z.CreateCanvas,
                        n = e.createCanvas;
                    Object.defineProperties(e, {
                        [t]: {
                            value: () => ie(t, n, {
                                afterExecute: e => {
                                    var {
                                        ret: t
                                    } = e;
                                    ce || (ce = !0);
                                    var n = t.getContext;
                                    t.getContext = function(e, r) {
                                        var i = n.apply(t, [e, r]);
                                        return "2d" === e && function(e) {
                                            var t, n, r, i, s = ["drawImage"],
                                                o = ["fillText", "strokeText"],
                                                a = ["fillRect", "strokeRect", "beginPath", "closePath", "moveTo", "lineTo", "arc", "quadraticCurveTo", "clip"],
                                                l = null === (t = X.audits) || void 0 === t || null === (n = t.rules) || void 0 === n ? void 0 : n.disableFillText,
                                                h = null === (r = X.audits) || void 0 === r || null === (i = r.rules) || void 0 === i ? void 0 : i.disableCreateImage;
                                            !b(l) && l || a.push(...o);
                                            !b(h) && h || a.push(...s);
                                            s.forEach((t => {
                                                var n = e[t];
                                                Reflect.defineProperty(e, t, {
                                                    value: (...r) => "drawImage" === t ? function(e, t) {
                                                        return (...n) => {
                                                            var r;
                                                            null != n && null !== (r = n[0]) && void 0 !== r && r.__image__ && (n[0] = ae.get(n[0])), t.call(e, ...n)
                                                        }
                                                    }(e, n).apply(e, r) : n.apply(e, r),
                                                    configurable: !0
                                                })
                                            }))
                                        }(i), "webgl" !== e && "webgl2" !== e || function(e, t) {
                                            var n, r, i = ["drawArrays", "drawElements"];
                                            if ("webgl2" === t) {
                                                var s = ["drawElementsInstanced", "drawArraysInstanced"];
                                                i.push(...s)
                                            }
                                            var o = null === (n = X.audits) || void 0 === n || null === (r = n.rules) || void 0 === r ? void 0 : r.disableCreateImage;
                                            !b(o) && o || function(e, t) {
                                                var n = ["texImage2D", "texSubImage2D", "compressedTexImage2D", "compressedTexSubImage2D"],
                                                    r = ["texImage3D", "texSubImage3D", "compressedTexImage3D", "compressedTexSubImage3D"];
                                                "webgl2" === t && n.push(...r);
                                                var i = function(e) {
                                                        le || (le = {
                                                            DXT: !!e.getExtension("WEBGL_compressed_texture_s3tc") || !!e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                                                            ETC: !!e.getExtension("WEBGL_compressed_texture_etc"),
                                                            PVRTC: !!e.getExtension("WEBGL_compressed_texture_pvrtc"),
                                                            ASTC: !!e.getExtension("WEBGL_compressed_texture_astc")
                                                        });
                                                        return le
                                                    }(e),
                                                    s = Object.create(null);
                                                n.forEach((t => {
                                                    var n = e[t];
                                                    s[t] = {
                                                        value(...r) {
                                                            if (r.length && In.isRunning && ce) {
                                                                var s = 2;
                                                                "texSubImage2D" === t && (s = 7 === r.length ? 4 : 6), "compressedTexSubImage2D" === t && (s = 6);
                                                                var o = function(e) {
                                                                        if (e >= 33776 && e <= 33779 || e >= 35916 && e <= 35919) return "DXT";
                                                                        if (e >= 37488 && e <= 37497 || 36196 === e) return "ETC";
                                                                        if (e >= 35840 && e <= 35843) return "PVRTC";
                                                                        if (e >= 37808 && e <= 37821 || e >= 37840 && e <= 37853) return "ASTC";
                                                                        return "Unknown"
                                                                    }(r[s]),
                                                                    a = function(e) {
                                                                        var t;
                                                                        switch (e.length) {
                                                                            case 6:
                                                                                t = 5;
                                                                                break;
                                                                            case 9:
                                                                                t = 8;
                                                                                break;
                                                                            case 7:
                                                                                t = 6;
                                                                                break;
                                                                            case 8:
                                                                                t = 7;
                                                                                break;
                                                                            default:
                                                                                return -1
                                                                        }
                                                                        return t
                                                                    }(r);
                                                                a > -1 && r[a] && !he.has(r[a]) && (he.set(r[a], !0), "Unknown" !== o ? N.emit(M.NoTextureCompressionFormat) : i[o] || N.emit(M.TextureCompressionFormat))
                                                            }
                                                            return r && (r[5] && r[5].__image__ && (r[5] = ae.get(r[5])), r[6] && r[6].__image__ && (r[6] = ae.get(r[6])), r[7] && r[7].__image__ && (r[7] = ae.get(r[7])), r[8] && r[8].__image__ && (r[8] = ae.get(r[8]))), n.apply(e, r)
                                                        },
                                                        configurable: !0
                                                    }, Object.defineProperties(e, s)
                                                }))
                                            }(e, t)
                                        }(i, e), i
                                    }
                                }
                            }),
                            configurable: !0
                        }
                    })
                }
                var de = (e, t, n = !0) => {
                    var r = e;
                    n && (r.on("touchstart", (() => {
                        r.style.opacity = .5
                    })), r.on("touchend", (() => {
                        r.style.opacity = 1
                    }))), r.on("click", (e => {
                        (e => {
                            var t = e.absoluteX,
                                n = e.absoluteY,
                                r = e.absoluteEndX,
                                i = e.absoluteEndY,
                                s = e.pressInterval,
                                o = !1;
                            return Math.abs(i - n) < 30 && Math.abs(r - t) < 30 && s < 300 && (o = !0), o
                        })(e) && t()
                    }))
                };
                var fe, pe, me, ge, ve = 32,
                    Ie = {
                        body: {
                            zIndex: 1000009,
                            position: "absolute",
                            overflow: "visible",
                            hidden: !1,
                            width: 76,
                            height: ve,
                            top: 200,
                            left: 0
                        },
                        container: {
                            position: "absolute",
                            overflow: "visible",
                            hidden: !1,
                            width: 76,
                            height: ve,
                            backgroundColor: "#00000080",
                            borderRadius: 16
                        },
                        operateBtn: {
                            position: "absolute",
                            left: 24,
                            top: 0,
                            width: 44,
                            height: ve,
                            lineHeight: ve,
                            textAlign: "center",
                            color: "#ffffff",
                            fontSize: 11
                        },
                        stopIcon: {
                            position: "absolute",
                            width: 7.5,
                            height: 12.5,
                            left: 9.83,
                            top: 9.75,
                            hidden: !0
                        },
                        startIcon: {
                            position: "absolute",
                            width: 10.82,
                            height: 12.13,
                            top: 9.4,
                            left: 9,
                            hidden: !0
                        },
                        touchMask: {
                            zIndex: 1000009,
                            position: "absolute",
                            overflow: "hidden",
                            hidden: !1,
                            width: 76,
                            height: ve,
                            backgroundColor: "rgba(0, 0, 0, 0)"
                        }
                    },
                    ke = {
                        Launch: "auditStart",
                        End: "auditEnd",
                        WriteReport: "writeReport",
                        UploadReport: "uploadReport",
                        AddEveluationReport: "addEveluationReport",
                        OnHide: "onHide",
                        OnShow: "onShow",
                        RemoveReportFile: "removeReportFile",
                        GetAuthToken: "getAuthToken"
                    },
                    ye = {
                        Self: 0,
                        Devtools: 1
                    };
                class we {
                    static start(e) {
                        if (!we.timeMap.has(e)) {
                            var t = Date.now();
                            return we.timeMap.set(e, t), t
                        }
                        return 0
                    }
                    static timeEnd(e) {
                        if (we.timeMap.has(e)) {
                            var t = Date.now(),
                                n = we.timeMap.get(e);
                            return we.timeMap.delete(e), t - n
                        }
                        return 0
                    }
                }
                we.timeMap = new Map,
                    function(e) {
                        e[e.Front = 1] = "Front", e[e.Background = 2] = "Background"
                    }(fe || (fe = {})),
                    function(e) {
                        e[e.Default = 0] = "Default", e[e.GameTransfer = 1] = "GameTransfer", e[e.Request = 2] = "Request", e[e.DownloadFile = 3] = "DownloadFile", e[e.CgiSpeedMeasure = 4] = "CgiSpeedMeasure", e[e.BadJs = 5] = "BadJs", e[e.Init = 6] = "Init", e[e.CostTime = 7] = "CostTime", e[e.Error = 8] = "Error", e[e.UploadFile = 9] = "UploadFile", e[e.Login = 10] = "Login", e[e.WebTransfer = 11] = "WebTransfer"
                    }(pe || (pe = {})),
                    function(e) {
                        e[e.Info = 101] = "Info", e[e.Warn = 102] = "Warn", e[e.Error = 103] = "Error"
                    }(me || (me = {})),
                    function(e) {
                        e.GameTransferReport = "GameTransferReport", e.KeyValueReport = "KeyValueReport", e.WxRequestReport = "WxRequestReport"
                    }(ge || (ge = {}));
                var be, Te, Se = Object.values(pe).filter((e => k(e)));
                ! function(e) {
                    e.STRING = "STRING", e.LONGLONG = "LONGLONG", e.UINT = "UINT", e.INT = "INT"
                }(be || (be = {})),
                function(e) {
                    e.SvrReport = "SvrReport", e.KvStat = "KvStat"
                }(Te || (Te = {}));
                var Ce = {
                    [be.STRING]: e => "string" == typeof e && e.length <= 1024,
                    [be.LONGLONG]: e => "number" == typeof e && Math.floor(e) === e,
                    [be.UINT]: e => "number" == typeof e && Math.floor(e) === e && e >= 0,
                    [be.INT]: e => "number" == typeof e && Math.floor(e) === e
                };
                class Re {
                    constructor({
                        logid: e,
                        schemas: t = {},
                        base: n,
                        debug: r = !1,
                        namespace: i = "",
                        skipValidateInProdEnv: s = !0
                    }) {
                        this.debug = !1, this.base = {}, this.namespace = "", this.skipValidateInProdEnv = !0, this.asyncGetBase = () => Promise.resolve({}), this.logid = e, this.schemas = t, n && this.setBase(n), this.debug = r, this.skipValidateInProdEnv = s, this.namespace = i ? ` ${i} ` : " "
                    }
                    setBase(e) {
                        this.validate(e), this.base = Object.assign(Object.assign({}, this.base), e)
                    }
                    validate(e) {
                        if ((this.debug || !this.skipValidateInProdEnv) && Object.keys(this.schemas).length)
                            for (var [t, n] of Object.entries(e))
                                if (void 0 !== n) {
                                    var r = this.schemas[t];
                                    r ? this.validateColumn(r, n) || console.error(`[minigamefe${this.namespace}SchemaValidator]: logid ${this.logid}: ${t} should be ${r}, but now ${n}`) : console.warn(`[minigamefe${this.namespace}SchemaValidator]: logid${this.logid}: ${t} 缺少类型定义`)
                                }
                    }
                    validateColumn(e, t) {
                        return Ce[e](t)
                    }
                }
                var Pe = "";
                var xe, Le, _e, Ne, Ee, Ae = {
                    19283: "GameComponent",
                    19335: "GameWhatsNew",
                    20285: "MidasFriendPayment",
                    21494: "WXGameWASMLaunchClose",
                    21493: "WXGameWASMLaunchException",
                    21492: "WXGameWASMLaunchTime",
                    21898: "GameLifeMiniGameCardAction",
                    20267: "GameAdsSkipCard"
                };
                class Fe extends Re {
                    constructor({
                        reportFunc: e,
                        logid: t,
                        protocolParams: n,
                        schemas: r,
                        base: i,
                        asyncGetBase: s = (() => Promise.resolve({})),
                        debug: o,
                        namespace: a = "",
                        skipValidateInProdEnv: l = !0
                    }) {
                        var h = t;
                        "number" == typeof t && Ae[t] && (h = Ae[t], o && console.warn(`[minigamefe${a?` ${a} `:" "}KeyValueReporter]: logid ${t} auto map to ${h}!`)), super({
                            logid: h,
                            schemas: r,
                            base: i,
                            debug: o,
                            namespace: a,
                            skipValidateInProdEnv: l
                        }), this.asyncGetBase = s, e || console.error(`[minigamefe${this.namespace}KeyValueReporter]: 未传入上报函数。`), this.reportFunc = e || function() {}, this.protocolParams = n, this.sendCbk = null
                    }
                    setAppInfoBase(e) {
                        Object.assign(this.schemas, {
                            AppId: be.STRING,
                            AppVersion: be.UINT,
                            AppState: be.UINT
                        }), this.protocolParams.unshift("AppId", "AppVersion", "AppState"), this.setBase(e)
                    }
                    send(e, t) {
                        var n;
                        n = Array.isArray(e) ? e : [e], this.asyncGetBase().then((e => {
                            this.setBase(e), n.forEach((e => {
                                var n = Object.assign(Object.assign({}, this.base), e);
                                this.validate(n);
                                var r = [];
                                this.protocolParams.forEach((e => {
                                    var t = void 0 !== n[e] ? n[e] : "";
                                    r.push(t)
                                })), this.reportFunc({
                                    key: this.logid,
                                    value: r.map(encodeURIComponent).join(","),
                                    immediately: !0
                                });
                                var i = t || this.sendCbk;
                                (i && i(this.logid, r.map(encodeURIComponent).join(",")), this.debug) && (n.IsError ? console.error : console.log)(`[minigamefe${this.namespace}keyValueReport]: ${this.logid}`, n)
                            }))
                        }))
                    }
                }! function(e) {
                    e.devtools = "devtools", e.android = "android", e.ios = "ios", e.windows = "windows", e.mac = "mac"
                }(xe || (xe = {})),
                function(e) {
                    e.portrait = "portrait", e.landscape = "landscape", e.landscapeLeft = "landscapeLeft", e.landscapeRight = "landscapeRight"
                }(Le || (Le = {})),
                function(e) {
                    e.DEVELOP = "develop", e.TRIAL = "trial", e.RELEASE = "release"
                }(_e || (_e = {})),
                function(e) {
                    e[e.release = 1] = "release", e[e.develop = 2] = "develop", e[e.trial = 3] = "trial"
                }(Ne || (Ne = {})),
                function(e) {
                    e[e.Android = 0] = "Android", e[e.IOSJscore = 1] = "IOSJscore", e[e.IOSWK = 2] = "IOSWK", e[e.UnKnow = 3] = "UnKnow", e[e.PC = 4] = "PC", e[e.Devtools = 5] = "Devtools", e[e.IPadJscore = 6] = "IPadJscore", e[e.IPadWK = 7] = "IPadWK"
                }(Ee || (Ee = {}));
                class qe extends Re {
                    constructor({
                        reportFunc: e,
                        logid: t,
                        schemas: n = {},
                        base: r,
                        reportType: i,
                        asyncGetBase: s = (() => Promise.resolve({})),
                        debug: o,
                        namespace: a = "",
                        skipValidateInProdEnv: l = !0
                    }) {
                        super({
                            logid: t,
                            schemas: n,
                            base: r,
                            debug: o,
                            namespace: a,
                            skipValidateInProdEnv: l
                        }), this.reportType = Te.SvrReport, this.asyncGetBase = s, e || console.error(`[minigamefe${this.namespace}GameTransferReport]: 未传入上报函数。`), this.reportFunc = e, void 0 !== i && (this.reportType = i)
                    }
                    setKvStatBase(e, t) {
                        if (this.reportType === Te.KvStat) {
                            var n = (e.system || "").split(" ");
                            Object.assign(this.schemas, {
                                DeviceModel: be.STRING,
                                DeviceBrand: be.STRING,
                                OsName: be.STRING,
                                OsVersion: be.STRING,
                                LanguageVersion: be.STRING,
                                Count: be.UINT,
                                AppId: be.STRING,
                                AppVersion: be.UINT,
                                AppState: be.UINT
                            }), this.setBase({
                                DeviceModel: e.model || "",
                                DeviceBrand: e.brand || "",
                                OsName: n[0] || "",
                                OsVersion: n[1] || "",
                                LanguageVersion: e.language || "",
                                Count: 1
                            }), (null == t ? void 0 : t.miniProgram) && this.setBase({
                                AppState: Ne[t.miniProgram.envVersion] || Ne.release,
                                AppId: t.miniProgram.appId,
                                AppVersion: 0
                            })
                        }
                    }
                    send(e, t) {
                        if (this.reportFunc && "function" == typeof this.reportFunc) {
                            var n, r = [],
                                i = this.logid;
                            n = Array.isArray(e) ? e : [e], this.asyncGetBase().then((e => {
                                this.setBase(e), n.forEach((e => {
                                    var t = Object.assign(Object.assign({}, this.base), e);
                                    if (t.ExternInfo && "object" == typeof t.ExternInfo && this.schemas.ExternInfo === be.STRING && (t.ExternInfo = encodeURIComponent(JSON.stringify(t.ExternInfo))), this.validate(t), this.reportType === Te.KvStat) {
                                        var n = Math.floor(Date.now() / 1e3);
                                        Object.assign(t, {
                                            StartTime: n,
                                            EndTime: n
                                        })
                                    }
                                    var s = {
                                        log_id: this.logid,
                                        custom_data: t
                                    };
                                    r.push(s), this.debug && console.log(`[minigamefe${this.namespace}GameTransferReport]: ${i},`, t)
                                }));
                                var s = {
                                    report_list: r
                                };
                                this.reportFunc({
                                    req_path: "comm_datareport",
                                    json_data: JSON.stringify(s),
                                    success() {
                                        t && t(i, JSON.stringify(s))
                                    },
                                    fail(e) {
                                        console.error(e), t && t(i, T(e))
                                    }
                                })
                            }))
                        } else console.error("[minigamefe GameTransferReport]: 未传入上报函数!!!")
                    }
                }
                class De extends Re {
                    constructor({
                        reportFunc: e,
                        logid: t,
                        schemas: n = {},
                        base: r,
                        debug: i,
                        namespace: s,
                        asyncGetBase: o = (() => Promise.resolve({})),
                        reportType: a,
                        skipValidateInProdEnv: l = !0
                    }) {
                        super({
                            logid: t,
                            schemas: n,
                            base: r,
                            debug: i,
                            namespace: s,
                            skipValidateInProdEnv: l
                        }), this.reportType = Te.SvrReport, this.reportFunc = e, e || console.error(`[minigamefe${this.namespace}RequestReport]: 未传入上报函数。`), this.asyncGetBase = o, void 0 !== a && (this.reportType = a)
                    }
                    setKvStatBase(e, t) {
                        if (this.reportType === Te.KvStat) {
                            var n = (e.system || "").split(" ");
                            Object.assign(this.schemas, {
                                DeviceModel: be.STRING,
                                DeviceBrand: be.STRING,
                                OsName: be.STRING,
                                OsVersion: be.STRING,
                                LanguageVersion: be.STRING,
                                Count: be.UINT,
                                AppId: be.STRING,
                                AppVersion: be.UINT,
                                AppState: be.UINT
                            }), this.setBase({
                                DeviceModel: e.model || "",
                                DeviceBrand: e.brand || "",
                                OsName: n[0] || "",
                                OsVersion: n[1] || "",
                                LanguageVersion: e.language || "",
                                Count: 1
                            }), (null == t ? void 0 : t.miniProgram) && this.setBase({
                                AppState: Ne[t.miniProgram.envVersion] || Ne.release,
                                AppId: t.miniProgram.appId,
                                AppVersion: 0
                            })
                        }
                    }
                    send(e, t) {
                        if (this.reportFunc && "function" == typeof this.reportFunc) {
                            var n, r = [],
                                i = this.logid;
                            n = Array.isArray(e) ? e : [e], this.asyncGetBase().then((e => {
                                this.setBase(e), n.forEach((e => {
                                    var t = Object.assign(Object.assign({}, this.base), e);
                                    this.validate(t);
                                    var n = {
                                        log_id: i,
                                        custom_data: t
                                    };
                                    r.push(n)
                                }));
                                var s = JSON.stringify({
                                    report_list: r
                                });
                                this.debug && console.log(`[minigamefe${this.namespace}RequestReport]: ${i}`, ...r), this.reportFunc({
                                    url: "https://game.weixin.qq.com/cgi-bin/comm/datareport",
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: s,
                                    success() {
                                        t && t(i, JSON.stringify(s))
                                    },
                                    fail(e) {
                                        console.error(e), t && t(i, T(e))
                                    }
                                })
                            }))
                        } else console.error("[minigamefe RequestReport]: 未传入上报函数!!!")
                    }
                }
                var Me = ["BenchmarkLevel", "NetworkType", "RuntimeType", "PluginAppId", "PluginVersion", "Scene", "SDKVersion", "IsVisible", "Type", "Target", "Params", "Result", "CostTime", "ExternInfo", "CustomKey1", "CustomKey2", "CustomKey3", "IsError", "FELibVersion", "Query"],
                    We = {
                        BenchmarkLevel: be.UINT,
                        NetworkType: be.STRING,
                        RuntimeType: be.UINT,
                        PluginAppId: be.STRING,
                        PluginVersion: be.STRING,
                        Scene: be.UINT,
                        SDKVersion: be.STRING,
                        IsVisible: be.UINT,
                        Type: be.UINT,
                        Target: be.STRING,
                        Params: be.STRING,
                        Result: be.STRING,
                        CostTime: be.UINT,
                        ExternInfo: be.STRING,
                        CustomKey1: be.STRING,
                        CustomKey2: be.STRING,
                        CustomKey3: be.STRING,
                        IsError: be.UINT,
                        FELibVersion: be.STRING,
                        Query: be.STRING
                    };

                function Oe(e) {
                    var t, {
                            type: n = ge.KeyValueReport,
                            reportKeyValue: r,
                            debug: i,
                            gameTransfer: s,
                            systemInfo: o,
                            accountInfo: a,
                            getNetworkType: l,
                            onNetworkStatusChange: h,
                            request: c,
                            namespace: u
                        } = e,
                        d = "";

                    function f() {
                        return new Promise((e => {
                            d ? e({
                                NetworkType: d
                            }) : l({
                                success: t => {
                                    d = t.networkType, e({
                                        NetworkType: d
                                    })
                                },
                                fail: () => {
                                    e({
                                        NetworkType: d = "unknown"
                                    })
                                }
                            })
                        }))
                    }
                    return n === ge.KeyValueReport ? t = new Fe({
                        reportFunc: r,
                        logid: 26340,
                        schemas: We,
                        protocolParams: Me,
                        debug: i,
                        namespace: u,
                        asyncGetBase: f
                    }) : n === ge.GameTransferReport ? (t = new qe({
                        reportFunc: s,
                        logid: 26340,
                        schemas: We,
                        reportType: Te.KvStat,
                        debug: i,
                        namespace: u,
                        asyncGetBase: f
                    })).setKvStatBase(o, a) : (console.warn("[minigamefe]: 当前选择 reqeust 进行质量上报, 请自行确保兼容性"), (t = new De({
                        reportFunc: c,
                        logid: 26340,
                        schemas: We,
                        debug: i,
                        namespace: u,
                        asyncGetBase: f,
                        reportType: Te.KvStat
                    })).setKvStatBase(o, a)), n !== ge.GameTransferReport && n !== ge.WxRequestReport || function(e, t, n) {
                        Pe ? e && e(Pe) : (t({
                            success: t => {
                                Pe = t.networkType, e && e(Pe)
                            }
                        }), n((t => {
                            Pe = t.networkType, t.isConnected || (Pe = "none"), e && e(Pe)
                        })))
                    }((e => {
                        d = e, t.setBase({
                            NetworkType: e
                        })
                    }), l, h), t
                }

                function Ge(e, t) {
                    var n, r = e || "";
                    if (n = r, "[object Object]" === Object.prototype.toString.call(n)) try {
                        r = JSON.stringify(r)
                    } catch (e) {
                        console.error(`[minigamefe stringify error]: ${e}`), r = ""
                    } else r = String(r);
                    return r.length && r.length >= 1024 && (r = r.substr(0, 1024), console.warn(`[minigamefe stringify warning]: ${t} 上报长度超过1024, 已裁剪`)), r
                }
                class je {
                    constructor(e) {
                        var t, r, i;
                        this.benchmarkLevel = 0, this.network = "", this.runtimeType = Ee.UnKnow, this.sdkVersion = "0.0.0", this.isVisible = fe.Front, this.scene = 0, this.query = "", this.pluginAppId = "", this.pluginVersion = "", this.inited = !1;
                        var {
                            systemInfo: s,
                            launchInfo: o,
                            onShow: a,
                            onHide: l,
                            pluginAppId: h = "",
                            pluginVersion: c = ""
                        } = e;
                        if (!a || !l) return console.error("[minigamefe stringify warning]: please inject QualityConfig correctly"), void(this.inited = !1);
                        this.inited = !0, this.onShow = a, this.onHide = l, this.benchmarkLevel = (s.benchmarkLevel || 1) + 100, this.sdkVersion = s.SDKVersion, this.launchInfo = o, this.scene = (null === (t = this.launchInfo) || void 0 === t ? void 0 : t.scene) || 0, w(null === (r = this.launchInfo) || void 0 === r ? void 0 : r.query) || (this.query = encodeURIComponent(JSON.stringify(null === (i = this.launchInfo) || void 0 === i ? void 0 : i.query))), this.runtimeType = function(e) {
                            var t, r, i = Ee.UnKnow,
                                s = e.platform.toLocaleLowerCase();
                            return s === xe.devtools ? i = Ee.Devtools : s === xe.ios ? (i = (null === (t = n.g) || void 0 === t ? void 0 : t.isIOSHighPerformanceMode) ? Ee.IOSWK : Ee.IOSJscore, e.model.indexOf("iPad") > -1 && (i = (null === (r = n.g) || void 0 === r ? void 0 : r.isIOSHighPerformanceMode) ? Ee.IPadWK : Ee.IPadJscore)) : s === xe.android ? i = Ee.Android : s === xe.windows && (i = Ee.PC), i
                        }(s), this.pluginAppId = h, this.pluginVersion = c, this.bindNativeEvent(), this.reporter = Oe(e), this.reporter.setBase({
                            BenchmarkLevel: this.benchmarkLevel,
                            RuntimeType: this.runtimeType,
                            Scene: +this.scene,
                            SDKVersion: this.sdkVersion,
                            IsVisible: this.isVisible,
                            PluginAppId: h,
                            PluginVersion: c,
                            FELibVersion: "1.1.51",
                            Query: this.query
                        })
                    }
                    bindNativeEvent() {
                        this.onHide((() => {
                            this.isVisible = fe.Background, this.reporter.setBase({
                                IsVisible: this.isVisible
                            })
                        })), this.onShow((e => {
                            w(null == e ? void 0 : e.query) || (this.query = encodeURIComponent(JSON.stringify(e.query))), this.isVisible = fe.Front, this.reporter.setBase({
                                IsVisible: this.isVisible,
                                Query: this.query
                            })
                        }))
                    }
                    innerReport(e) {
                        this.reporter.send(Object.assign(e, {
                            CostTime: k(e.CostTime) ? e.CostTime : 0,
                            Params: Ge(e.Params, "Params"),
                            Result: Ge(e.Result, "Result"),
                            ExternInfo: Ge(e.ExternInfo, "ExternInfo")
                        }))
                    }
                    report(e) {
                        Se.indexOf(e.Type) > -1 && console.error(`[minigamefe quality report]: 若为自定义上报, Type 请不要使用内置枚举值 ${e.Type}, 内置枚举可见 mgp.consts.ReportType`), this.inited && this.innerReport(e)
                    }
                    setCustomKey(e) {
                        this.inited && this.reporter.setBase({
                            CustomKey1: e.CustomKey1 && Ge(e.CustomKey1, "CustomKey1") || "",
                            CustomKey2: e.CustomKey2 && Ge(e.CustomKey2, "CustomKey2") || "",
                            CustomKey3: e.CustomKey3 && Ge(e.CustomKey3, "CustomKey3") || ""
                        })
                    }
                    clearCustomKey() {
                        this.inited && this.reporter.setBase({
                            CustomKey1: "",
                            CustomKey2: "",
                            CustomKey3: ""
                        })
                    }
                }
                class Ve {
                    constructor() {
                        this.quality = void 0, this.inited = !1, this.initPromise = void 0, this.initPromise = this.initQuality()
                    }
                    initQuality() {
                        return new Promise((e => {
                            X.sdk.WXConfig && X.sdk.WXConfig.onReady((() => {
                                this.inited = !0, this.quality = new je({
                                    debug: !1,
                                    type: ge.KeyValueReport,
                                    pluginAppId: "wxapplib_Audits",
                                    pluginVersion: X.sdk.WXConfig.SDKVersion,
                                    launchInfo: X.sdk.WXConfig.appLaunchInfo,
                                    accountInfo: X.sdk.WXConfig.accountInfo,
                                    systemInfo: X.sdk.getSystemInfoSync(),
                                    onShow: X.sdk.onShow,
                                    onHide: X.sdk.onHide,
                                    getNetworkType: X.sdk.getNetworkType,
                                    onNetworkStatusChange: X.sdk.onNetworkStatusChange,
                                    gameTransfer: X.sdk.gameTransfer,
                                    reportKeyValue: X.sdk.reportKeyValue
                                }), e(this.quality)
                            }))
                        }))
                    }
                    report(e) {
                        this.inited ? this.quality.report(e) : this.initPromise.then((() => {
                            this.quality.report(e)
                        }))
                    }
                }
                var Be, Ue, Ke, $e = null;

                function He() {
                    var e;
                    Be || (Be = {
                        autoStart: null === (e = X.sdk.WXConfig.audits) || void 0 === e ? void 0 : e.autoStart,
                        enableType: ye.Self,
                        showTimes: X.showTimes,
                        detectTimes: X.detectTimes
                    });
                    return Be
                }

                function Qe(e) {
                    X.isWxApplib && $e.report({
                        Type: me.Error,
                        Target: ke.GetAuthToken,
                        ExternInfo: {
                            errMsg: e,
                            ...He()
                        }
                    })
                }
                var Xe = !1,
                    ze = "";

                function Je(e) {
                    e.gameTransfer && (Ue = e.gameTransfer, Xe = function(e, t) {
                        if ("string" != typeof e || "string" != typeof t) return "string" != typeof e && "string" != typeof t ? 0 : "string" != typeof e ? 1 : -1;
                        for (var n = e.split("."), r = t.split("."), i = Math.max(n.length, r.length); n.length < i;) n.push("0");
                        for (; r.length < i;) r.push("0");
                        for (var s = 0; s < i; s++) {
                            var o = parseInt(n[s], 10),
                                a = parseInt(r[s], 10);
                            if (o > a) return 1;
                            if (o < a) return -1
                        }
                        return 0
                    }(g().SDKVersion, "2.29.1") >= 0), e.authRequest && (Ke = e.authRequest)
                }

                function Ye() {
                    ze = ""
                }
                var Ze = -10000401;

                function et() {
                    return new Promise(((e, t) => {
                        var n = "unity.refreshcontexttoken",
                            r = {
                                auth_payload: {}
                            };
                        if (ze) return e(ze);
                        r.auth_payload.expired_time = 60;
                        var i = {
                            req_path: n,
                            success: n => {
                                var r, i = n.data;
                                if (Q.debug("auth res = ", n, ", data=", i), null != i && null !== (r = i.rsp_list) && void 0 !== r && r.length) {
                                    var s = (i.rsp_list.find((e => "auth_token" === e.key)) || {}).value;
                                    if (s) return function({
                                        token: e,
                                        costTime: t
                                    }) {
                                        X.isWxApplib && $e.report({
                                            Type: me.Info,
                                            Target: ke.GetAuthToken,
                                            ExternInfo: {
                                                token: e,
                                                costTime: t,
                                                ...He()
                                            }
                                        })
                                    }({
                                        token: s,
                                        costTime: we.timeEnd(ke.GetAuthToken)
                                    }), Q.debug("token=", s), ze = encodeURIComponent(s), e(ze)
                                }
                                var o = "system error";
                                Qe(o), t({
                                    errMsg: o
                                })
                            },
                            fail: e => {
                                Q.error("gametransfer auth error, ", e), we.timeEnd(ke.GetAuthToken), Qe(e.errmsg || "get auth token failed"), t(e)
                            }
                        };
                        Xe ? (i.reqData = {
                            req_path: n,
                            ...r
                        }, delete i.req_path) : i = {
                            ...i,
                            ...r
                        }, Ue && (we.start(ke.GetAuthToken), Ue(i))
                    }))
                }

                function tt() {
                    return (tt = t()((function*() {
                        if (Ke) {
                            var e = yield Ke();
                            return ze = e, Promise.resolve(ze)
                        }
                        return Promise.resolve()
                    }))).apply(this, arguments)
                }

                function nt() {
                    return Ue ? et() : Ke ? function() {
                        return tt.apply(this, arguments)
                    }() : void 0
                }
                var rt, it, st = "https://game.weixin.qq.com";

                function ot(e) {
                    var t;
                    Q.debug(`before ${e.url} request, auth`), null === (t = nt()) || void 0 === t || t.then((t => {
                        Q.debug("request auth token=", t), e.url.includes("ticket") && (e.url = e.url.substring(0, e.url.indexOf("?ticket"))), e.url = `${e.url}?ticket=${t}`, Q.debug("before request, options=", e), rt(e)
                    }))
                }

                function at(e) {
                    var t;
                    Q.debug(`before ${e.url} upload, auth`), null === (t = nt()) || void 0 === t || t.then((t => {
                        Q.debug("upload auth token=", t), e.url.includes("ticket") && (e.url = e.url.substring(0, e.url.indexOf("?ticket"))), e.url = `${e.url}?ticket=${t}`, it(e)
                    }))
                }

                function lt(e) {
                    return t = "/cgi-bin/gamewxagbdatawap/addgameevaluationreport", n = {
                        meta_info: e
                    }, new Promise(((e, r) => {
                        var i = {
                            url: `${st}${t}`,
                            method: "POST",
                            data: {
                                ...n
                            },
                            success: n => (Q.debug(`post ${t} success, res=`, n), 200 === n.statusCode ? n.data.errcode === Ze ? (Ye(), ot(i)) : e(n.data) : r(n)),
                            fail: e => {
                                Q.error(`post ${t} failed, err=`, e), r(e)
                            }
                        };
                        ot(i)
                    }));
                    var t, n
                }

                function ht(e) {
                    return t = {
                        url: "/cgi-bin/gamewxagbdatawap/uploadfile",
                        filePath: e,
                        name: "file"
                    }, new Promise(((e, n) => {
                        var {
                            url: r,
                            filePath: i,
                            name: s
                        } = t, o = {
                            url: `${st}${r}`,
                            filePath: i,
                            name: s,
                            success(t) {
                                if (Q.debug(`upload ${r} success, res=`, t), 200 === t.statusCode) {
                                    var {
                                        data: i
                                    } = t;
                                    return "string" == typeof i && (i = JSON.parse(i)), i.errcode === Ze ? (Ye(), at(o)) : e(i)
                                }
                                return n(t)
                            },
                            fail: e => {
                                Q.error(`post ${r} failed, err=`, e), n(e)
                            }
                        };
                        at(o)
                    }));
                    var t
                }
                var ct, ut = function(e) {
                        return e[e.iOS = 1] = "iOS", e[e.Android = 2] = "Android", e[e.iPad = 13] = "iPad", e[e.Mac = 14] = "Mac", e[e.Windows = 15] = "Windows", e[e.AndroidPad = 28] = "AndroidPad", e[e.Devtools = -1] = "Devtools", e
                    }({}),
                    dt = (ut.iOS, ut.Android, ut.iPad, ut.Mac, ut.Windows, ut.AndroidPad, ut.Devtools, {
                        ios: 1,
                        android: 2,
                        ipad: 13,
                        mac: 14,
                        windows: 15,
                        devtools: -1
                    }),
                    ft = function(e) {
                        return e[e.Launch = 0] = "Launch", e[e.Performance = 1] = "Performance", e[e.Practice = 2] = "Practice", e[e.Render = 3] = "Render", e[e.Compatibility = 4] = "Compatibility", e[e.WxAPI = 5] = "WxAPI", e
                    }({}),
                    pt = function(e) {
                        return e.Start = "start", e.Performance = "performance", e.Network = "network", e.WxAPI = "wxapi", e.Practice = "practice", e.Compatibility = "compatibility", e.Render = "render", e
                    }({}),
                    mt = function(e) {
                        return e.Init = "init", e.Resource = "resource", e.Inject = "inject", e.Context = "context", e.Compile = "compile", e
                    }({}),
                    gt = function(e) {
                        return e.InitClickStart = "clickStart", e.InitContactCGI = "contactcgi", e.InitLaunchCGI = "launchcgi", e.ResourceApp = "resousceApp", e.ResourceSub = "resourceSub", e.ResoucePlugin = "reesourcePlugin", e.InjectGame = "injectGame", e.InjectWxAppLib = "injectWxAppLib", e
                    }({}),
                    vt = function(e) {
                        return e.longFirstMeaningfulPaint = "long-first-meaningful-paint", e.longInteractionCost = "long-interaction-cost", e
                    }({}),
                    It = function(e) {
                        return e.highCpuUsage = "high-cpu-usage", e.highMemoryUsage = "high-memory-usage", e.highAverageFps = "high-average-fps", e.highStutter = "high-stutter", e
                    }({}),
                    kt = function(e) {
                        return e.noIosHighPerformance = "no-ios-high-performance", e.noHttp2 = "no-http2", e.noContentEncoding = "no-content-encoding", e.noCdnCache = "no-cdn-cache", e.noParallelDownload = "no-parallel-download", e.noInteractionReport = "no-interaction-report", e.largeNetworkResponse = "large-network-response", e.lowNetworkLatencyRation = "low-network-latency-ration", e.highNetworkQueueingLatency = "high-network-queueing-latency", e.longSingleNetworkLatency = "long-single-network", e.highSingleNetworkResponse = "high-single-network-response", e.highNetworkQueueingCount = "high-network-queueing-count", e
                    }({}),
                    yt = function(e) {
                        return e.highDrawcall = "high-drawcall", e.noTextureCompression = "no-texture-compression", e.incorrectTextureCompressionFormat = "incorrect-texture-compression-format", e.unreleasedCanvas = "unreleased-canvas", e
                    }({}),
                    wt = function(e) {
                        return e.noJsError = "no-js-error", e.noUnhandledRejection = "no-unhandled-rejection", e.noNetworkError = "no-network-error", e.noNetworkStatusError = "no-network-status-error", e
                    }({}),
                    bt = function(e) {
                        return e.deprecatedApis = "deprecated-apis", e.noCacheApiCall = "no-cache-api-call", e
                    }({});
                ct || (ct = {});
                var Tt, St = {
                        [pt.Practice]: {
                            type: pt.Practice,
                            name: "最佳实践检测",
                            description: "",
                            subItems: []
                        },
                        [pt.Performance]: {
                            type: pt.Performance,
                            name: "运行性能",
                            description: "",
                            subItems: []
                        },
                        [pt.Start]: {
                            type: pt.Start,
                            name: "启动性能",
                            description: "",
                            subItems: []
                        },
                        [pt.WxAPI]: {
                            type: pt.WxAPI,
                            name: "wx api",
                            description: "",
                            subItems: []
                        },
                        [pt.Network]: {
                            type: pt.Network,
                            name: "网络性能",
                            description: "",
                            subItems: []
                        },
                        [pt.Compatibility]: {
                            type: pt.Compatibility,
                            name: "兼容性",
                            description: "",
                            subItems: []
                        },
                        [pt.Render]: {
                            type: pt.Render,
                            name: "渲染",
                            description: "",
                            subItems: []
                        }
                    },
                    Ct = {
                        [ft.Launch]: {
                            [vt.longFirstMeaningfulPaint]: {
                                metaInfo: {
                                    name: "首帧渲染时长过长",
                                    description: "降低小游戏的启动时长对于用户新进留存具有非常重要的价值。",
                                    document: [{
                                        title: "了解更多",
                                        href: "https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start2.html"
                                    }],
                                    weight: 8
                                },
                                headers: [{
                                    key: "cost",
                                    header: "首屏时间",
                                    uint: "ms"
                                }],
                                threshold: 5150
                            },
                            [vt.longInteractionCost]: {
                                metaInfo: {
                                    name: "降低游戏可交互时长",
                                    description: "建议优化游戏启动过程，尽可能减少游戏前置的资源下载，缩短游戏可交互时间，提升用户体验。",
                                    document: [{
                                        title: "了解更多",
                                        href: "https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start-reportScene.html"
                                    }],
                                    weight: 3
                                },
                                headers: [{
                                    key: "costTime",
                                    header: "可交互耗时",
                                    uint: "ms"
                                }],
                                threshold: 11840
                            }
                        },
                        [ft.Performance]: {
                            [It.highCpuUsage]: {
                                metaInfo: {
                                    name: "CPU利用率过高",
                                    description: "CPU利用率过高较易引起游戏卡顿等问题，建议通过CPU Profile工具排查长耗时逻辑，通过worker等方式优化相关业务逻辑。",
                                    document: [{
                                        title: "问题排查工具",
                                        href: "https://developers.weixin.qq.com/minigame/dev/devtools/profile.html"
                                    }],
                                    weight: 7
                                },
                                headers: [{
                                    key: "cpu",
                                    header: "平均CPU利用率",
                                    uint: "%"
                                }],
                                threshold: 30
                            },
                            [It.highMemoryUsage]: {
                                metaInfo: {
                                    name: "内存占用过高",
                                    description: "游戏内存占用过高是影响游戏稳定性的最大因素，建议通过相关工具游戏内存问题。",
                                    document: [{
                                        title: "常见内存优化手段",
                                        href: "https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-memory-overview.html"
                                    }],
                                    weight: 7
                                },
                                headers: [{
                                    key: "memory",
                                    header: "平均内存占用",
                                    uint: "MB"
                                }],
                                threshold: 665600
                            },
                            [It.highAverageFps]: {
                                metaInfo: {
                                    name: "帧率过低",
                                    description: "较低的帧率将直接影响游戏体验的流畅度，可通过CPU Profile针对游戏场景排查长耗时任务，定位卡顿原因。",
                                    document: [{
                                        title: "问题排查工具",
                                        href: "https://developers.weixin.qq.com/minigame/dev/devtools/profile.html"
                                    }],
                                    weight: 5
                                },
                                headers: [{
                                    key: "fps",
                                    header: "平均FPS"
                                }],
                                threshold: 50
                            },
                            [It.highStutter]: {
                                metaInfo: {
                                    name: "卡顿率过高",
                                    description: "较高的卡顿率将影响游戏用户的实际游玩体验，可考虑适当降低帧率、优化游戏业务逻辑等手段来降低游戏卡顿问题。",
                                    document: [],
                                    weight: 7
                                },
                                headers: [{
                                    key: "stutter",
                                    header: "卡顿率",
                                    uint: "%"
                                }],
                                threshold: 1.5
                            }
                        },
                        [ft.Practice]: {
                            [kt.noIosHighPerformance]: {
                                metaInfo: {
                                    name: "使用高性能模式",
                                    description: "建议开启高性能模式，iOS设备下能拥有更好的渲染性能和表现。",
                                    weight: 0,
                                    document: [{
                                        title: "了解更多",
                                        href: "https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance.html"
                                    }]
                                },
                                threshold: !0
                            },
                            [kt.noHttp2]: {
                                metaInfo: {
                                    name: "使用HTTP/2",
                                    description: "建议服务器开启HTTP2.0，通过多路复用和头部压缩等的特性，能提升细碎文件的下载效率。",
                                    weight: 8
                                },
                                headers: [{
                                    key: "url",
                                    header: "URL",
                                    width: "80%"
                                }, {
                                    key: "protocol",
                                    header: "协议"
                                }],
                                threshold: !0
                            },
                            [kt.noContentEncoding]: {
                                metaInfo: {
                                    name: "开启服务器压缩",
                                    description: "建议开启服务器压缩，尽可能对传输数据进行压缩，减少网络数据的传输体积。",
                                    document: [{
                                        title: "了解更多",
                                        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding"
                                    }],
                                    weight: 10
                                },
                                headers: [{
                                    key: "url",
                                    header: "URL",
                                    width: "80%"
                                }, {
                                    key: "contentEncoding",
                                    header: "content-encoding"
                                }],
                                threshold: !0
                            },
                            [kt.noCdnCache]: {
                                metaInfo: {
                                    name: "使用CDN缓存",
                                    description: "发布新版本时，建议进行CDN预热，避免直接从源站拉取资源。",
                                    weight: 10
                                },
                                headers: [{
                                    key: "url",
                                    header: "URL"
                                }],
                                threshold: !0
                            },
                            [kt.noParallelDownload]: {
                                metaInfo: {
                                    name: "使用并行下载",
                                    description: "建议使用小游戏分包的并行下载能力，提前下载后续游戏必要的分包资源，减少用户后续等待分包资源下载的时间，缩短用户进入游戏核心玩法的耗时。",
                                    document: [{
                                        title: "了解更多",
                                        href: "https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start-parallel-download.html"
                                    }],
                                    weight: 0
                                },
                                threshold: !0
                            },
                            [kt.noInteractionReport]: {
                                metaInfo: {
                                    name: "上报游戏可交互场景",
                                    description: "建议在游戏资源加载完毕时，上报用户的最早可操作游戏画面的时间点，用于统计游戏启动性能表现以及游戏启动留存情况。",
                                    document: [{
                                        title: "了解更多",
                                        href: "https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start-reportScene.html"
                                    }],
                                    weight: 0
                                },
                                threshold: !0
                            },
                            [kt.largeNetworkResponse]: {
                                metaInfo: {
                                    name: "合理控制网络请求总资源量",
                                    description: "减小网络请求资源量，过大的资源下载会增加用户启动耗时。",
                                    weight: 5
                                },
                                headers: [{
                                    key: "byteLength",
                                    header: "总响应大小",
                                    uint: "MB"
                                }],
                                threshold: 52428800
                            },
                            [kt.lowNetworkLatencyRation]: {
                                metaInfo: {
                                    name: "合理提升网络利用率",
                                    description: "网络利用率过低，未能在CPU密集时段，充分利用网络带宽，完成更多资源的下载。",
                                    weight: 6
                                },
                                headers: [{
                                    key: "networkLatencyRation",
                                    header: "网络利用率",
                                    uint: "%"
                                }],
                                threshold: 30
                            },
                            [kt.highNetworkQueueingLatency]: {
                                metaInfo: {
                                    name: "降低网络排队平均耗时",
                                    description: "网络排队平均耗时过高，排队超过一定时长会对用户体验造成影响。排队平均耗时过高有可能是由于请求并发量过大 或 网络请求耗时过长而导致导致，可通过网络请求模块进一步分析原因。",
                                    weight: 6
                                },
                                headers: [{
                                    key: "networkQueueingLatency",
                                    header: "平均网络排队耗时",
                                    uint: "ms"
                                }],
                                threshold: 1500
                            },
                            [kt.longSingleNetworkLatency]: {
                                metaInfo: {
                                    name: "降低单个网络请求耗时时长",
                                    description: "单个网络耗时过长，耗时过长会对用户体验造成影响。可以考虑使用CDN加速、开启HTTP/2、合理拆分资源等方式，减少网络请求的耗时。",
                                    weight: 8
                                },
                                headers: [{
                                    key: "url",
                                    header: "URL",
                                    width: "80%"
                                }, {
                                    key: "callbackDuration",
                                    header: "网络耗时",
                                    uint: "ms"
                                }],
                                threshold: 1500
                            },
                            [kt.highSingleNetworkResponse]: {
                                metaInfo: {
                                    name: "合理控制单个网络请求资源量",
                                    description: "网络请求体积大会导致请求的传输时间变长，影响用户体验。可适当将资源拆分进行按需下载、或开启数据压缩。",
                                    weight: 3
                                },
                                headers: [{
                                    key: "url",
                                    header: "URL",
                                    width: "80%"
                                }, {
                                    key: "byteLength",
                                    header: "响应大小",
                                    uint: "MB"
                                }],
                                threshold: 3145728
                            },
                            [kt.highNetworkQueueingCount]: {
                                metaInfo: {
                                    name: "减少网络排队数量",
                                    description: "网络请求排队过多将对用户体验造成影响，请进一步通过网络请求分析网络请求发起的并发量，可通过分帧请求的方式，将网络请求分散到不同帧内进行，或者实现为按需请求的方式进行。",
                                    document: [{
                                        title: "了解更多",
                                        href: "https://developers.weixin.qq.com/minigame/dev/guide/base-ability/network.html#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6"
                                    }],
                                    weight: 6
                                },
                                headers: [{
                                    key: "totalQueueCount",
                                    header: "总排队个数"
                                }],
                                threshold: 50
                            }
                        },
                        [ft.Render]: {
                            [yt.highDrawcall]: {
                                metaInfo: {
                                    name: "合理控制Drawcall",
                                    description: "建议使用合适手段减少Drawcall调用次数，大量、频繁的绘制请求，会一定程度上降低游戏帧率，造成游戏卡顿等问题",
                                    weight: 5
                                },
                                headers: [{
                                    key: "drawcall",
                                    header: "峰值drawcall"
                                }],
                                threshold: 200
                            },
                            [yt.noTextureCompression]: {
                                metaInfo: {
                                    name: "使用资源纹理压缩",
                                    description: "建议针对纹理资源，使用纹理压缩，减少纹理体积大小，提升用户体验。",
                                    weight: 1
                                },
                                headers: [],
                                threshold: !0
                            },
                            [yt.incorrectTextureCompressionFormat]: {
                                metaInfo: {
                                    name: "使用合理的纹理压缩格式",
                                    description: "建议使用当前平台所支持的纹理压缩格式，减少纹理大小，提升用户体验。",
                                    document: [{
                                        title: "常见纹理压缩格式兼容性",
                                        href: "https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-technical-manual.html"
                                    }],
                                    weight: 1
                                },
                                headers: [{
                                    key: "asset",
                                    header: "资源名",
                                    width: "80%"
                                }, {
                                    key: "format",
                                    header: "压缩格式"
                                }]
                            },
                            [yt.unreleasedCanvas]: {
                                metaInfo: {
                                    name: "及时释放Canvas",
                                    description: "建议主动释放Canvas实例，减少内存占用，特别是在iOS设备下，过高的内存占用较为容易造成内存不足而导致小游戏被kill的问题。",
                                    weight: 0
                                },
                                headers: [{
                                    key: "count",
                                    header: "未释放canvas数"
                                }]
                            }
                        },
                        [ft.Compatibility]: {
                            [wt.noJsError]: {
                                metaInfo: {
                                    name: "避免未处理的JavaScript异常",
                                    description: "出现 JavaScript 异常可能导致程序的交互无法进行下去，我们应当追求零异常，保证程序的高鲁棒性和高可用性。",
                                    weight: 9
                                },
                                headers: [{
                                    key: "message",
                                    header: "错误信息",
                                    width: "80%"
                                }, {
                                    key: "stack",
                                    header: "错误堆栈"
                                }]
                            },
                            [wt.noUnhandledRejection]: {
                                metaInfo: {
                                    name: "避免存在未处理的Promise错误",
                                    description: "存在未处理的Promise异常，可能导致游戏的交互无法进行下去，可使用 .catch()方法 或 try...catch 语句来处理相关的错误，保证程序的高鲁棒性和高可用性。",
                                    weight: 9
                                },
                                headers: [{
                                    key: "reason",
                                    header: "错误信息"
                                }]
                            },
                            [wt.noNetworkError]: {
                                metaInfo: {
                                    name: "避免网络请求失败",
                                    description: "网络请求失败可能导致程序无法进行下去，应当保证所有请求都能成功。",
                                    weight: 10
                                },
                                headers: [{
                                    key: "url",
                                    header: "URL",
                                    width: "80%"
                                }, {
                                    key: "errMsg",
                                    header: "错误信息"
                                }]
                            },
                            [wt.noNetworkStatusError]: {
                                metaInfo: {
                                    name: "避免网络状态码异常",
                                    description: "存在网络状态码异常的请求，处理异常的网络请求，有助于提升用户体验和系统的稳定性。",
                                    weight: 10
                                },
                                headers: [{
                                    key: "url",
                                    header: "URL",
                                    width: "80%"
                                }, {
                                    key: "statusCode",
                                    header: "状态码"
                                }]
                            }
                        },
                        [ft.WxAPI]: {
                            [bt.deprecatedApis]: {
                                metaInfo: {
                                    name: "避免使用废弃接口",
                                    description: "使用即将废弃或已废弃接口，可能导致小游戏运行不正常。建议不要使用，避免后续小游戏运行异常。",
                                    weight: 3
                                },
                                headers: [{
                                    key: "apiName",
                                    header: "接口名称"
                                }],
                                threshold: !0
                            },
                            [bt.noCacheApiCall]: {
                                metaInfo: {
                                    name: "缓存wx api调用结果",
                                    description: "建议在调用API时，使用缓存，减少API的重复调用次数，提升用户体验。",
                                    weight: 5
                                },
                                headers: [{
                                    key: "apiName",
                                    header: "接口名称",
                                    width: "80%"
                                }, {
                                    key: "times",
                                    header: "调用次数"
                                }],
                                threshold: 3
                            }
                        }
                    };
                Tt = {}, Object.keys(Ct).forEach((e => {
                    Tt = {
                        ...Tt,
                        ...Ct[e]
                    }
                })), pt.Start, pt.Performance, pt.Render, pt.Practice, pt.Compatibility, pt.WxAPI;
                class Rt extends i {
                    constructor(...e) {
                        super(...e), this.invokeList = [], this.recordApi = e => {
                            this.invokeList.push(e.invokeInfo)
                        }
                    }
                    init() {
                        N.on(W.Invoked, this.recordApi)
                    }
                    off() {
                        N.off(W.Invoked, this.recordApi)
                    }
                    getResult() {
                        return {
                            invokeList: this.invokeList
                        }
                    }
                    reset() {
                        this.invokeList = []
                    }
                }
                class Pt extends i {
                    constructor(...e) {
                        super(...e), this.fmp = {}, this.recordFMP = () => {}
                    }
                    init() {}
                    off() {}
                    getResult() {
                        return this.fmp = {
                            [mt.Init]: [{
                                stageName: gt.InitClickStart,
                                stageType: mt.Init,
                                startTime: 0,
                                endTime: 0,
                                delta: 0
                            }],
                            [mt.Resource]: [{
                                stageName: gt.ResourceApp,
                                stageType: mt.Resource,
                                startTime: 0,
                                endTime: 0,
                                delta: 0,
                                size: 0,
                                resourceName: "app"
                            }],
                            [mt.Inject]: [{
                                stageName: gt.InjectGame,
                                stageType: mt.Inject,
                                startTime: 0,
                                endTime: 0,
                                delta: 0,
                                resouceName: "app",
                                evaluateStartTime: 0
                            }],
                            [mt.Context]: [{
                                stageType: mt.Context,
                                startTime: 0,
                                endTime: 0,
                                delta: 0,
                                contextId: 0,
                                contextName: "main"
                            }],
                            [mt.Compile]: [{
                                stageType: mt.Compile,
                                startTime: 0,
                                endTime: 0,
                                delta: 0
                            }]
                        }, this.fmp
                    }
                    reset() {
                        this.fmp = null
                    }
                }
                class xt extends i {
                    constructor(...e) {
                        super(...e), this.networkList = [], this.recordNetwork = e => {
                            var {
                                generalNetworkInfo: t
                            } = e;
                            if (t) {
                                var {
                                    networkInfo: n,
                                    invokeInfoMap: r
                                } = t, i = r.get(t);
                                if (i) {
                                    var {
                                        invokeInfo: s
                                    } = i;
                                    this.networkList.push(Object.assign({}, s, n))
                                }
                            }
                        }
                    }
                    init() {
                        N.on(E.LoadSuccess, this.recordNetwork), N.on(E.LoadFail, this.recordNetwork)
                    }
                    off() {
                        N.off(E.LoadSuccess, this.recordNetwork), N.off(E.LoadFail, this.recordNetwork)
                    }
                    getResult() {
                        return {
                            networkList: this.networkList
                        }
                    }
                    reset() {
                        this.networkList = []
                    }
                }
                class Lt extends i {
                    constructor(...e) {
                        super(...e), this.performanceList = [], this.recordPerformance = e => {
                            this.performanceList.push(e.performanceInfo)
                        }
                    }
                    init() {
                        N.on(D, this.recordPerformance)
                    }
                    off() {
                        N.off(D, this.recordPerformance)
                    }
                    getResult() {
                        return {
                            performanceList: this.performanceList
                        }
                    }
                    reset() {
                        this.performanceList = []
                    }
                }
                class _t extends i {
                    constructor(...e) {
                        super(...e), this.metaInfo = void 0, this.failedItems = [], this.ruleId = void 0, this.threshold = void 0, this.headers = void 0, this.enable = !1
                    }
                    addFailedItem(e) {
                        e && this.failedItems.push(e)
                    }
                    addFailedItems(e) {
                        e.forEach((e => {
                            this.addFailedItem(e)
                        }))
                    }
                    generateResult() {
                        var e = Object.assign(Object.create(null), {
                            ruleId: this.ruleId,
                            failedItems: this.failedItems
                        });
                        return this.headers && (e.headers = this.headers), this.metaInfo && Object.assign(e, this.metaInfo), e
                    }
                    clear() {
                        this.failedItems = []
                    }
                    init() {}
                }
                class Nt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.noCdnCache, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.handler = e => {
                            var t;
                            this.check(e) || (Q.warn(`check ${this.ruleId} failed current=`, null === (t = e.generalNetworkInfo) || void 0 === t ? void 0 : t.networkInfo.url), this.addFailedItem(this.generateItem(e)))
                        }
                    }
                    init() {
                        N.on(E.LoadSuccess, this.handler)
                    }
                    off() {
                        N.off(E.LoadSuccess, this.handler)
                    }
                    check(e) {
                        var {
                            generalNetworkInfo: t
                        } = e;
                        return !t || t.networkInfo.cache === this.threshold
                    }
                    generateItem(e) {
                        var t, {
                            generalNetworkInfo: n
                        } = e;
                        return n ? {
                            uniqueId: null === (t = n.invokeInfoMap.get(n)) || void 0 === t ? void 0 : t.invokeInfo.uniqueId
                        } : null
                    }
                }
                class Et extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.noContentEncoding, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.handler = e => {
                            var t;
                            this.check(e) || (Q.warn(`check ${this.ruleId} failed, current=`, null === (t = e.generalNetworkInfo) || void 0 === t ? void 0 : t.networkInfo.url), this.addFailedItem(this.generateItem(e)))
                        }
                    }
                    init() {
                        N.on(E.LoadSuccess, this.handler)
                    }
                    off() {
                        N.off(E.LoadSuccess, this.handler)
                    }
                    check(e) {
                        var {
                            generalNetworkInfo: t
                        } = e, n = !0;
                        if (!t) return n;
                        var r = t.result,
                            {
                                contentEncoding: i
                            } = t.networkInfo;
                        return U(r.statusCode) && i && (n = i.includes("gzip") || i.includes("br")), n === this.threshold
                    }
                    generateItem(e) {
                        var t, {
                            generalNetworkInfo: n
                        } = e;
                        return n ? {
                            uniqueId: null === (t = n.invokeInfoMap.get(n)) || void 0 === t ? void 0 : t.invokeInfo.uniqueId
                        } : null
                    }
                }
                class At extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.noHttp2, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.handler = e => {
                            var t;
                            this.check(e) || (Q.warn(`check ${this.ruleId} failed, current=`, null === (t = e.generalNetworkInfo) || void 0 === t ? void 0 : t.networkInfo.url, e.args), this.addFailedItem(this.generateItem(e)))
                        }
                    }
                    init() {
                        N.on(E.LoadSuccess, this.handler)
                    }
                    off() {
                        N.off(E.LoadSuccess, this.handler)
                    }
                    check(e) {
                        var {
                            generalNetworkInfo: t
                        } = e, n = !0;
                        if (!t) return n;
                        var r, i, s = t.result,
                            {
                                networkInfo: o
                            } = t;
                        U(s.statusCode) && o.protocol && (n = "h2" === o.protocol || (null === (r = o.protocol) || void 0 === r || null === (i = r.includes) || void 0 === i ? void 0 : i.call(r, "http/2")));
                        return n === this.threshold
                    }
                    generateItem(e) {
                        var t, {
                            generalNetworkInfo: n
                        } = e;
                        return n ? {
                            uniqueId: null === (t = n.invokeInfoMap.get(n)) || void 0 === t ? void 0 : t.invokeInfo.uniqueId
                        } : null
                    }
                }
                class Ft extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.highNetworkQueueingLatency, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.averageQueueTime = 0, this.handler = () => {
                            this.check() || (Q.warn(`check ${kt.highNetworkQueueingLatency} failed, current=`, this.averageQueueTime, ", threshold=", this.threshold), this.addFailedItem(this.generateItem()))
                        }
                    }
                    init() {
                        N.on(q, this.handler)
                    }
                    off() {
                        N.off(q, this.handler)
                    }
                    check() {
                        var {
                            totalQueueCount: e,
                            totalQueueTime: t
                        } = Y.networkInfo;
                        return e && (this.averageQueueTime = t / e), this.averageQueueTime < this.threshold
                    }
                    generateItem() {
                        return {
                            networkQueueingLatency: this.averageQueueTime
                        }
                    }
                }
                class qt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.highSingleNetworkResponse, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.handler = e => {
                            var t;
                            this.check(e) || (Q.warn(`check ${this.ruleId} failed, current=`, null === (t = e.generalNetworkInfo) || void 0 === t ? void 0 : t.networkInfo.byteLength, ", threshold=", this.threshold), this.addFailedItem(this.generateItem(e)))
                        }
                    }
                    init() {
                        N.on(E.LoadSuccess, this.handler)
                    }
                    off() {
                        N.off(E.LoadSuccess, this.handler)
                    }
                    check(e) {
                        var {
                            generalNetworkInfo: t
                        } = e, n = !0;
                        if (!t) return n;
                        var r = t.result,
                            {
                                byteLength: i
                            } = t.networkInfo;
                        return U(r.statusCode) && i && (n = i < this.threshold), n
                    }
                    generateItem(e) {
                        var t, {
                            generalNetworkInfo: n
                        } = e;
                        return n ? {
                            uniqueId: null === (t = n.invokeInfoMap.get(n)) || void 0 === t ? void 0 : t.invokeInfo.uniqueId
                        } : null
                    }
                }
                class Dt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.largeNetworkResponse, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.handler = () => {
                            this.check() || (Q.warn("check large-network-response failed, current=", Y.networkInfo.responseSize, ", threshold=", this.threshold), this.addFailedItem(this.generateItem()))
                        }
                    }
                    init() {
                        N.on(q, this.handler)
                    }
                    off() {
                        N.off(q, this.handler)
                    }
                    check() {
                        return Y.networkInfo.responseSize < this.threshold
                    }
                    generateItem() {
                        return {
                            byteLength: Y.networkInfo.responseSize
                        }
                    }
                }
                class Mt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.longSingleNetworkLatency, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.handler = e => {
                            if (!this.check(e)) {
                                var {
                                    generalNetworkInfo: t
                                } = e, n = null == t ? void 0 : t.invokeInfoMap.get(t);
                                Q.warn(`check ${kt.longSingleNetworkLatency} failed, current=`, null == n ? void 0 : n.invokeInfo.callbackDuration, ", threshold=", this.threshold), this.addFailedItem(this.generateItem(e))
                            }
                        }
                    }
                    init() {
                        N.on(E.LoadSuccess, this.handler)
                    }
                    off() {
                        N.off(E.LoadSuccess, this.handler)
                    }
                    check(e) {
                        var {
                            generalNetworkInfo: t
                        } = e, n = !0;
                        if (!t) return n;
                        var r = t.result,
                            i = t.invokeInfoMap.get(t);
                        if (i) {
                            var {
                                invokeInfo: {
                                    callbackDuration: s
                                }
                            } = i;
                            U(r.statusCode) && s && (n = s < this.threshold)
                        }
                        return n
                    }
                    generateItem(e) {
                        var t, {
                            generalNetworkInfo: n
                        } = e;
                        return n ? {
                            uniqueId: null === (t = n.invokeInfoMap.get(n)) || void 0 === t ? void 0 : t.invokeInfo.uniqueId
                        } : null
                    }
                }
                class Wt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.noInteractionReport, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.reported = !1, this.handler = () => {
                            this.check() || (Q.warn(`check ${this.ruleId} failed, current=`, this.reported), this.addFailedItem(this.generateItem()))
                        }, this.reportInteractionHandler = () => {
                            this.reported = !0
                        }
                    }
                    init() {
                        N.on(q, this.handler), N.on(W.ReportInteraction, this.reportInteractionHandler)
                    }
                    off() {
                        N.off(q, this.handler), N.off(W.ReportInteraction, this.reportInteractionHandler)
                    }
                    generateItem() {
                        return {
                            passed: !1
                        }
                    }
                    check() {
                        return this.reported === this.threshold
                    }
                    clear() {
                        super.clear(), this.reported = !1
                    }
                }
                class Ot extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.noIosHighPerformance, this.iosHighPerformance = !0, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.handler = () => {
                            this.check() || (Q.warn(`check ${this.ruleId} failed, current=`, this.iosHighPerformance), this.addFailedItem(this.generateItem()))
                        }
                    }
                    init() {
                        N.on(A, this.handler)
                    }
                    off() {
                        N.off(A, this.handler)
                    }
                    generateItem() {
                        return {
                            passed: !1
                        }
                    }
                    check() {
                        return this.iosHighPerformance = X.iOSHighPerformance, this.iosHighPerformance === this.threshold
                    }
                }
                class Gt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.noParallelDownload, this.parallelDownload = !0, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.handler = () => {
                            this.check() || (Q.warn(`check ${this.ruleId} failed, current=`, this.parallelDownload), this.addFailedItem(this.generateItem()))
                        }
                    }
                    init() {
                        N.on(A, this.handler)
                    }
                    off() {
                        N.off(A, this.handler)
                    }
                    generateItem() {
                        return {
                            passed: !1
                        }
                    }
                    check() {
                        var e, t;
                        return (null === (e = X.subpackages) || void 0 === e ? void 0 : e.length) && (null === (t = X.parallelPreloadSubpackages) || void 0 === t ? void 0 : t.length)
                    }
                }
                class jt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.highNetworkQueueingCount, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.totalQueueCount = 0, this.handler = () => {
                            this.check() && (Q.warn(`check ${this.ruleId} failed, current=`, this.totalQueueCount, ", threshold=", this.threshold), this.addFailedItem(this.generateItem()))
                        }
                    }
                    init() {
                        N.on(q, this.handler)
                    }
                    off() {
                        N.off(q, this.handler)
                    }
                    check() {
                        var {
                            totalQueueCount: e
                        } = Y.networkInfo;
                        return this.totalQueueCount = e, e && e > this.threshold
                    }
                    clear() {
                        super.clear(), this.totalQueueCount = 0
                    }
                    generateItem() {
                        return {
                            totalQueueCount: this.totalQueueCount
                        }
                    }
                }
                class Vt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = kt.lowNetworkLatencyRation, this.threshold = Ct[ft.Practice][this.ruleId].threshold, this.networkLatencyRation = 0, this.handler = () => {
                            this.check() || (Q.warn(`check ${kt.lowNetworkLatencyRation} failed, current=`, 100 * this.networkLatencyRation, ", threshold=", this.threshold), this.addFailedItem(this.generateItem()))
                        }
                    }
                    init() {
                        N.on(q, this.handler)
                    }
                    off() {
                        N.off(q, this.handler)
                    }
                    check() {
                        return this.networkLatencyRation = Y.networkInfo.totalNetworkTime / S.getRuntime(), this.networkLatencyRation > this.threshold / 100
                    }
                    generateItem() {
                        return {
                            networkLatencyRation: this.networkLatencyRation
                        }
                    }
                }
                class Bt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = vt.longInteractionCost, this.threshold = Ct[ft.Launch][this.ruleId].threshold, this.handler = e => {
                            this.check(e) || (Q.warn(`check ${this.ruleId} failed, current=`, e.costTime, ", threshold=", this.threshold), this.addFailedItem(this.generateItem(e)))
                        }
                    }
                    init() {
                        N.on(W.ReportInteraction, this.handler)
                    }
                    off() {
                        N.off(W.ReportInteraction, this.handler)
                    }
                    check(e) {
                        var {
                            costTime: t,
                            sceneId: n
                        } = e;
                        return !n || 7 !== n || !t || t < this.threshold
                    }
                    generateItem(e) {
                        return e
                    }
                }
                class Ut extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = It.highAverageFps, this.threshold = Ct[ft.Performance][this.ruleId].threshold, this.handler = e => {
                            this.check(e) || this.addFailedItem(this.generateItem(e))
                        }
                    }
                    init() {
                        N.on(D, this.handler)
                    }
                    off() {
                        N.off(D, this.handler)
                    }
                    check(e) {
                        var {
                            performanceInfo: t
                        } = e;
                        return t.fps > this.threshold
                    }
                    generateItem(e) {
                        return {
                            fps: e.performanceInfo.fps,
                            uniqueId: e.performanceInfo.uniqueId
                        }
                    }
                }
                class Kt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = It.highCpuUsage, this.threshold = Ct[ft.Performance][this.ruleId].threshold, this.handler = e => {
                            this.check(e) || this.addFailedItem(this.generateItem(e))
                        }
                    }
                    init() {
                        N.on(D, this.handler)
                    }
                    off() {
                        N.off(D, this.handler)
                    }
                    check(e) {
                        var {
                            performanceInfo: t
                        } = e;
                        return t.cpu < this.threshold
                    }
                    generateItem(e) {
                        return {
                            cpu: e.performanceInfo.cpu,
                            uniqueId: e.performanceInfo.uniqueId
                        }
                    }
                }
                class $t extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = It.highMemoryUsage, this.threshold = Ct[ft.Performance][this.ruleId].threshold, this.handler = e => {
                            this.check(e) || this.addFailedItem(this.generateItem(e))
                        }
                    }
                    init() {
                        N.on(D, this.handler)
                    }
                    off() {
                        N.off(D, this.handler)
                    }
                    check(e) {
                        var {
                            performanceInfo: t
                        } = e;
                        return t.memory < this.threshold
                    }
                    generateItem(e) {
                        return {
                            memory: e.performanceInfo.memory,
                            uniqueId: e.performanceInfo.uniqueId
                        }
                    }
                }
                class Ht extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = It.highStutter, this.threshold = Ct[ft.Performance][this.ruleId].threshold, this.handler = e => {
                            this.check(e) || this.addFailedItem(this.generateItem(e))
                        }
                    }
                    init() {
                        N.on(D, this.handler)
                    }
                    off() {
                        N.off(D, this.handler)
                    }
                    check(e) {
                        var {
                            performanceInfo: t
                        } = e;
                        return t.stutter < this.threshold
                    }
                    generateItem(e) {
                        return {
                            stutter: e.performanceInfo.stutter,
                            uniqueId: e.performanceInfo.uniqueId
                        }
                    }
                }
                class Qt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = yt.highDrawcall, this.drawcall = 0, this.latestFrame = 0, this.threshold = Ct[ft.Render][this.ruleId].threshold, this.handler = () => {
                            this.drawcall += 1, this.latestFrame || (this.latestFrame = S.currentFrame), S.currentFrame !== this.latestFrame && (this.check() || this.addFailedItem(this.generateItem()), this.latestFrame = 0, this.drawcall = 0)
                        }
                    }
                    init() {
                        N.on(M.Drawcall, this.handler)
                    }
                    off() {
                        N.off(M.Drawcall, this.handler)
                    }
                    check() {
                        return this.drawcall < this.threshold
                    }
                    generateItem() {
                        return {
                            drawcall: this.drawcall
                        }
                    }
                }
                class Xt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = yt.noTextureCompression, this.threshold = Ct[ft.Render][this.ruleId].threshold, this.count = 0, this.recordTextureCompression = () => {
                            this.count += 1
                        }, this.handler = () => {
                            this.check() || this.addFailedItem(this.generateItem())
                        }
                    }
                    init() {
                        N.on(F, this.handler), N.on(M.NoTextureCompressionFormat, this.recordTextureCompression)
                    }
                    off() {
                        N.off(M.NoTextureCompressionFormat, this.recordTextureCompression), N.off(F, this.handler)
                    }
                    clear() {
                        super.clear(), this.count = 0
                    }
                    check() {
                        return this.count > this.threshold
                    }
                    generateItem() {
                        return {
                            count: this.count
                        }
                    }
                }
                class zt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = yt.incorrectTextureCompressionFormat, this.threshold = Ct[ft.Render][this.ruleId].threshold, this.count = 0, this.recordTextureCompression = () => {
                            this.count += 1
                        }, this.handler = () => {
                            this.check() || this.addFailedItem(this.generateItem())
                        }
                    }
                    init() {
                        N.on(F, this.handler), N.on(M.TextureCompressionFormat, this.recordTextureCompression)
                    }
                    off() {
                        N.off(M.TextureCompressionFormat, this.recordTextureCompression), N.off(F, this.handler)
                    }
                    clear() {
                        super.clear(), this.count = 0
                    }
                    check() {
                        return this.count <= this.threshold
                    }
                    generateItem() {
                        return {
                            count: this.count
                        }
                    }
                }
                class Jt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = wt.noJsError, this.threshold = Ct[ft.Compatibility][this.ruleId].threshold, this.handler = e => {
                            Q.warn(`check ${this.ruleId} failed, current=`, e.message), this.addFailedItem(this.generateItem(e))
                        }
                    }
                    init() {
                        N.on(W.JsError, this.handler)
                    }
                    off() {
                        N.off(W.JsError, this.handler)
                    }
                    generateItem(e) {
                        return {
                            message: String.prototype.slice.call(e.message, 0, 1024),
                            stack: String.prototype.slice.call(e.stack, 0, 1024),
                            frame: S.currentFrame,
                            runtime: S.getRuntime()
                        }
                    }
                }
                class Yt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = wt.noUnhandledRejection, this.threshold = Ct[ft.Compatibility][this.ruleId].threshold, this.handler = e => {
                            Q.warn(`check ${this.ruleId} failed, current=`, e.reason), this.addFailedItem(this.generateItem(e))
                        }
                    }
                    init() {
                        N.on(W.UnhandledPromiseRejection, this.handler)
                    }
                    off() {
                        N.off(W.UnhandledPromiseRejection, this.handler)
                    }
                    generateItem(e) {
                        return {
                            reason: String.prototype.slice.call(e.reason, 0, 1024),
                            frame: S.currentFrame,
                            runtime: S.getRuntime()
                        }
                    }
                }
                class Zt extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = wt.noNetworkError, this.threshold = Ct[ft.Compatibility][this.ruleId].threshold, this.handler = e => {
                            Q.warn(`check ${this.ruleId} failed, info=`, e), this.addFailedItem(this.generateItem(e))
                        }
                    }
                    init() {
                        N.on(E.LoadFail, this.handler)
                    }
                    off() {
                        N.off(E.LoadFail, this.handler)
                    }
                    generateItem(e) {
                        var {
                            generalNetworkInfo: t
                        } = e;
                        if (t) {
                            var n, r = null === (n = t.invokeInfoMap.get(t)) || void 0 === n ? void 0 : n.invokeInfo;
                            return {
                                uniqueId: null == r ? void 0 : r.uniqueId
                            }
                        }
                        return null
                    }
                }
                class en extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = wt.noNetworkStatusError, this.threshold = Ct[ft.Compatibility][this.ruleId].threshold, this.handler = e => {
                            this.check(e) || (Q.warn(`check ${this.ruleId} failed, info=`, e), this.addFailedItem(this.generateItem(e)))
                        }
                    }
                    init() {
                        N.on(E.LoadSuccess, this.handler)
                    }
                    off() {
                        N.off(E.LoadSuccess, this.handler)
                    }
                    check(e) {
                        var {
                            generalNetworkInfo: t
                        } = e, n = !0;
                        return t ? (U(t.result.statusCode) || (n = !1), n) : n
                    }
                    generateItem(e) {
                        var {
                            generalNetworkInfo: t
                        } = e;
                        if (t) {
                            var n, r = null === (n = t.invokeInfoMap.get(t)) || void 0 === n ? void 0 : n.invokeInfo;
                            return {
                                uniqueId: null == r ? void 0 : r.uniqueId
                            }
                        }
                        return null
                    }
                }
                class tn extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = bt.deprecatedApis, this.threshold = Ct[ft.WxAPI][this.ruleId].threshold, this.handler = e => {
                            this.check(e) || (Q.warn(`check ${this.ruleId} failed, apiName=`, e.invokeInfo.apiName), this.addFailedItem(this.generateItem(e)))
                        }
                    }
                    init() {
                        N.on(W.Invoked, this.handler)
                    }
                    off() {
                        N.off(W.Invoked, this.handler)
                    }
                    check(e) {
                        return !e || K.includes(e.invokeInfo.apiName) !== this.threshold
                    }
                    generateItem(e) {
                        return {
                            uniqueId: e.invokeInfo.uniqueId
                        }
                    }
                }
                const nn = ["getSystemInfo", "getSystemInfoSync"];
                class rn extends _t {
                    constructor(...e) {
                        super(...e), this.ruleId = bt.noCacheApiCall, this.threshold = Ct[ft.WxAPI][this.ruleId].threshold, this.apiInvokeInfo = {}, this.handler = () => {
                            Object.keys(this.apiInvokeInfo).forEach((e => {
                                this.check(e) || this.addFailedItem({
                                    apiName: e,
                                    times: this.apiInvokeInfo[e].times,
                                    uniqueIds: this.apiInvokeInfo[e].uniqueIds
                                })
                            }))
                        }, this.recordApi = e => {
                            var {
                                apiName: t
                            } = e.invokeInfo;
                            nn.includes(e.invokeInfo.apiName) && (this.apiInvokeInfo[t] = this.apiInvokeInfo[t] || {
                                times: 0,
                                uniqueIds: []
                            }, this.apiInvokeInfo[t].times += 1, this.apiInvokeInfo[t].uniqueIds.push(e.invokeInfo.uniqueId))
                        }
                    }
                    init() {
                        N.on(q, this.handler), N.on(W.Invoked, this.recordApi)
                    }
                    off() {
                        N.off(q, this.handler), N.off(W.Invoked, this.recordApi)
                    }
                    check(e) {
                        return !this.apiInvokeInfo[e] || this.apiInvokeInfo[e].times < this.threshold
                    }
                    clear() {
                        super.clear(), this.apiInvokeInfo = {}
                    }
                }
                var sn = new class {
                    get writingCount() {
                        return 0
                    }
                    constructor() {
                        this.fileInfo = void 0, this.reset()
                    }
                    reset() {
                        this.fileInfo = {}
                    }
                    invokeStart(e) {
                        if (In.isRunning) {
                            var t, n;
                            if (e.invokeInfo.apiName.includes("read")) this.fileInfo.readingCount = (null !== (t = this.fileInfo.readingCount) && void 0 !== t ? t : 0) + 1;
                            if (e.invokeInfo.apiName.includes("write")) this.fileInfo.writingCount = (null !== (n = this.fileInfo.wirtingCount) && void 0 !== n ? n : 0) + 1
                        }
                    }
                    afterExecute(e) {
                        In.isRunning && e.isSyncApi && (this.updateCount(e), this.updateSize(e))
                    }
                    invokeSuccess(e) {
                        In.isRunning && (e.isSyncApi || (this.updateCount(e), this.updateSize(e)))
                    }
                    invokeFail(e) {
                        In.isRunning && this.updateCount(e)
                    }
                    updateCount(e) {
                        var t, n, r, i, {
                            invokeInfo: s
                        } = e;
                        s.apiName.includes("read") && (this.fileInfo.readingCount = (null !== (t = this.fileInfo.readingCount) && void 0 !== t ? t : 0) - 1, this.fileInfo.readCount = (null !== (n = this.fileInfo.readCount) && void 0 !== n ? n : 0) + 1);
                        s.apiName.includes("write") && (this.fileInfo.writingCount = (null !== (r = this.fileInfo.writingCount) && void 0 !== r ? r : 0) - 1, this.fileInfo.writeCount = (null !== (i = this.fileInfo.writeCount) && void 0 !== i ? i : 0) + 1)
                    }
                    updateSize(e) {
                        var t, n, r, i, {
                                invokeInfo: s,
                                result: o
                            } = e,
                            a = null == o ? void 0 : o.data;
                        s.apiName.includes("read") && (this.fileInfo.readCost = (null !== (t = this.fileInfo.readCost) && void 0 !== t ? t : 0) + s.callbackDuration, this.fileInfo.readSize = (null !== (n = this.fileInfo.readSize) && void 0 !== n ? n : 0) + ((null == a ? void 0 : a.byteLength) || (null == a ? void 0 : a.length)));
                        s.apiName.includes("write") && (this.fileInfo.writeCost = (null !== (r = this.fileInfo.writeCost) && void 0 !== r ? r : 0) + s.callbackDuration, this.fileInfo.writeSize = (null !== (i = this.fileInfo.writeSize) && void 0 !== i ? i : 0) + ((null == a ? void 0 : a.byteLength) || (null == a ? void 0 : a.length)))
                    }
                    isWriteApi() {}
                    isReadApi() {}
                };
                class on extends i {
                    constructor(...e) {
                        super(...e), this.deviceInfo = void 0, this.result = void 0, this.resultFilename = "__detect_result.txt"
                    }
                    reset() {
                        this.result = null
                    }
                    getDeviceInfo() {
                        var e = this;
                        return t()((function*() {
                            var t = m(),
                                n = g();
                            if (!e.deviceInfo && t && n) {
                                var r = yield e.getNetworkType();
                                e.deviceInfo = {
                                    platform: dt[t.platform],
                                    wechatVersion: n.version,
                                    deviceBrand: t.brand,
                                    deviceModel: e.convertDeviceModel(t.model),
                                    SDKVersion: n.SDKVersion,
                                    osName: t.system,
                                    osVersion: t.system,
                                    memorySize: t.memorySize,
                                    benchmarkLevel: t.benchmarkLevel,
                                    networkType: r
                                }
                            }
                            return e.deviceInfo
                        }))()
                    }
                    uploadReport() {
                        var e = this;
                        return t()((function*() {
                            return e.addEveluationReport(e.getResult())
                        }))()
                    }
                    getNetworkType() {
                        return new Promise(((e, t) => {
                            p().getNetworkType({
                                success(t) {
                                    e(t.networkType)
                                },
                                fail: t
                            })
                        }))
                    }
                    addEveluationReport(e) {
                        var n = this;
                        return t()((function*() {
                            var t, r, [, i] = yield y(n.storeResult(e));
                            if (i) {
                                we.start(ke.UploadReport);
                                var [s, o] = yield y(n.uploadEveluationReport(i));
                                if (s) return we.timeEnd(ke.UploadReport),
                                    function({
                                        errMsg: e
                                    }) {
                                        X.isWxApplib && $e.report({
                                            Type: me.Error,
                                            Target: ke.UploadReport,
                                            ExternInfo: {
                                                errMsg: e,
                                                ...He()
                                            }
                                        })
                                    }((null == s ? void 0 : s.errMsg) || (null == s ? void 0 : s.statusCode) || s), Q.error("upload error, ", s), an.getInstance().showUploadFailed(s, !0), Promise.reject(s);
                                if (o) {
                                    var a;
                                    Q.event("upload success, ", o),
                                        function({
                                            costTime: e,
                                            blobid: t
                                        }) {
                                            X.isWxApplib && $e.report({
                                                Type: me.Info,
                                                Target: ke.UploadReport,
                                                ExternInfo: {
                                                    costTime: e,
                                                    blobid: t,
                                                    ...He()
                                                }
                                            })
                                        }({
                                            blobid: o,
                                            costTime: we.timeEnd(ke.UploadReport)
                                        }), we.start(ke.AddEveluationReport);
                                    var [l, h] = yield y(lt({
                                        device: n.convertDeviceInfo(e.device),
                                        start_time: X.meta.startTime,
                                        blob_id: o,
                                        end_time: X.meta.endTime,
                                        official_desc: (null == X || null === (a = X.audits) || void 0 === a ? void 0 : a.systemDescription) || "",
                                        is_auto_start: X.meta.isAutoStart,
                                        launch_time: X.meta.launchTime,
                                        sdk_version: X.meta.sdkVersion
                                    }));
                                    return h && 0 === h.errcode ? (r = we.timeEnd(ke.AddEveluationReport), X.isWxApplib && $e.report({
                                        Type: me.Info,
                                        Target: ke.AddEveluationReport,
                                        ExternInfo: {
                                            costTime: r,
                                            ...He()
                                        }
                                    }), Q.debug("addGameEveluationReport success, ", h), Q.event("addGameEveluationReport success"), an.getInstance().showUploadSuccess(), n.removeResult(), Promise.resolve()) : (t = (null == l ? void 0 : l.errMsg) || (null == h ? void 0 : h.errcode), X.isWxApplib && $e.report({
                                        Type: me.Error,
                                        Target: ke.AddEveluationReport,
                                        ExternInfo: {
                                            errMsg: t,
                                            ...He()
                                        }
                                    }), Q.error("addEveluation error, ", l || h), an.getInstance().showUploadFailed(l || h), Promise.reject(l || h))
                                }
                            }
                        }))()
                    }
                    uploadEveluationReport(e) {
                        return ht(e).then((e => e.data && e.data.file_meta_list ? Promise.resolve(e.data.file_meta_list[0].blob_id) : Promise.reject(e.errcode)))
                    }
                    storeResult(e) {
                        return new Promise(((t, n) => {
                            var {
                                wxapi: r,
                                network: i,
                                performance: o,
                                checkLists: a,
                                fmp: l
                            } = e, h = 0;
                            try {
                                we.start("stringifyResult"), h = JSON.stringify(e).length, Q.debug("report fileSize=", h, ", cost=", we.timeEnd("stringifyResult"))
                            } catch (e) {
                                Q.error("calculate report fileSize error, ", e)
                            }
                            var c = `${p().env.USER_DATA_PATH}/${this.resultFilename}`;
                            we.start(ke.WriteReport), s({
                                filePath: c,
                                data: JSON.stringify({
                                    wxapi: r,
                                    network: i,
                                    performance: o,
                                    checkLists: a,
                                    fmp: l
                                }),
                                success: () => {
                                    ! function({
                                        fileSize: e,
                                        costTime: t
                                    }) {
                                        X.isWxApplib && $e.report({
                                            Type: me.Info,
                                            Target: ke.WriteReport,
                                            ExternInfo: {
                                                fileSize: e,
                                                costTime: t,
                                                ...He()
                                            }
                                        })
                                    }({
                                        fileSize: h,
                                        costTime: we.timeEnd(ke.WriteReport)
                                    }), t(c)
                                },
                                fail: e => {
                                    ! function({
                                        fileSize: e,
                                        errMsg: t
                                    }) {
                                        X.isWxApplib && $e.report({
                                            Type: me.Error,
                                            Target: ke.WriteReport,
                                            ExternInfo: {
                                                fileSize: e,
                                                errMsg: t,
                                                ...He()
                                            }
                                        })
                                    }({
                                        fileSize: h,
                                        errMsg: e.errMsg
                                    }), n(e)
                                }
                            })
                        }))
                    }
                    removeResult() {
                        return new Promise(((e, t) => {
                            var n = `${p().env.USER_DATA_PATH}/${this.resultFilename}`;
                            we.start(ke.RemoveReportFile), o({
                                filePath: n,
                                success: t => {
                                    var n;
                                    n = we.timeEnd(ke.RemoveReportFile), X.isWxApplib && $e.report({
                                        Type: me.Info,
                                        Target: ke.RemoveReportFile,
                                        ExternInfo: {
                                            costTime: n,
                                            ...He()
                                        }
                                    }), e(t)
                                },
                                fail: e => {
                                    var n;
                                    n = e.errMsg, X.isWxApplib && $e.report({
                                        Type: me.Error,
                                        Target: ke.RemoveReportFile,
                                        ExternInfo: {
                                            errMsg: n,
                                            ...He()
                                        }
                                    }), t(e)
                                }
                            })
                        }))
                    }
                    getResult() {
                        if (!this.result) {
                            var e = Rt.getInstance().getResult(),
                                t = xt.getInstance().getResult(),
                                n = Lt.getInstance().getResult(),
                                r = Pt.getInstance().getResult(),
                                i = function() {
                                    var e = St[pt.Practice];
                                    return e.subItems = [Nt.getInstance().generateResult(), Et.getInstance().generateResult(), At.getInstance().generateResult(), Ft.getInstance().generateResult(), qt.getInstance().generateResult(), Dt.getInstance().generateResult(), Mt.getInstance().generateResult(), Wt.getInstance().generateResult(), Ot.getInstance().generateResult(), Gt.getInstance().generateResult(), jt.getInstance().generateResult(), Vt.getInstance().generateResult()], e
                                }(),
                                s = function() {
                                    var e = St[pt.Start];
                                    return e.subItems = [Bt.getInstance().generateResult()], e
                                }(),
                                o = function() {
                                    var e = St[pt.Performance];
                                    return e.subItems = [Ut.getInstance().generateResult(), Kt.getInstance().generateResult(), $t.getInstance().generateResult(), Ht.getInstance().generateResult()], e
                                }(),
                                a = function() {
                                    var e = St[pt.Render];
                                    return e.subItems = [Xt.getInstance().generateResult()], e
                                }(),
                                l = function() {
                                    var e = St[pt.Compatibility];
                                    return e.subItems = [Jt.getInstance().generateResult(), Yt.getInstance().generateResult(), Zt.getInstance().generateResult(), en.getInstance().generateResult()], e
                                }(),
                                h = function() {
                                    var e = St[pt.WxAPI];
                                    return e.subItems = [tn.getInstance().generateResult(), rn.getInstance().generateResult()], e
                                }();
                            X.meta.uploadTime = Date.now(), this.result = {
                                meta: X.meta,
                                device: this.deviceInfo,
                                wxapi: e,
                                network: t,
                                performance: n,
                                checkLists: [i, s, o, a, l, h],
                                fmp: r
                            }
                        }
                        return Q.debug("result=", this.result), Q.debug("fileInfo=", sn.fileInfo), this.result
                    }
                    convertDeviceInfo(e) {
                        if (!e) return {};
                        var {
                            platform: t,
                            wechatVersion: n,
                            deviceBrand: r,
                            deviceModel: i,
                            SDKVersion: s,
                            osName: o,
                            osVersion: a,
                            benchmarkLevel: l,
                            memorySize: h,
                            networkType: c
                        } = e;
                        return {
                            platform: t,
                            wechat_version: n,
                            device_brand: r,
                            device_model: i,
                            sdk_version: s,
                            os_name: o,
                            os_version: a,
                            benchmark_level: l,
                            memory_size: h,
                            network_type: c
                        }
                    }
                    convertDeviceModel(e) {
                        if (null != e && e.includes("unknown") && "ios" === X.sdk.WXConfig.platform) {
                            if (e.includes("<iPhone15,4>")) return "iPhone 15";
                            if (e.includes("<iPhone15,5>")) return "iPhone 15 Plus";
                            if (e.includes("<iPhone16,1>")) return "iPhone 15 Pro";
                            if (e.includes("<iPhone16,2>")) return "iPhone 15 Pro Max"
                        }
                        return e
                    }
                }
                class an extends i {
                    constructor(...e) {
                        super(...e), this.coverview = void 0, this.ui = void 0, this.inited = !1, this.draged = !1, this.screenWidth = 0, this.screenHeight = 0, this.defaultWidth = 76, this.defaultHeight = ve, this.defaultTop = 60, this.defaultTopPortrait = 200, this.defaultLeft = 0, this.deviceOrientation = "portrait"
                    }
                    init(e) {
                        !this.inited && X.showUI && (this.inited = !0, e && (this.coverview = e, setTimeout((() => {
                            this.create()
                        }), 1e3)))
                    }
                    create() {
                        if (this.coverview) {
                            var {
                                Component: e,
                                getPrivateThis: t,
                                init: n,
                                webviewLayout: r,
                                xmlParser: i
                            } = this.coverview;
                            this.ui = new e;
                            var s = t(this.ui),
                                o = i('\n  <view id="body">\n    <view id="container">\n      <image id="stop-icon" src="https://mmgame.qpic.cn/image/b5afaa12383dfdd20314efea098fc902f29b33df99010626b01f676f3765d82c/0"></image>\n      <image id="start-icon" src="https://mmgame.qpic.cn/image/171782a3ed34a9322ef8ceed3916b13a293475191ca0745dbb6a3988bc634bf8/0"></image>\n      <text id="operate-btn" value="开始录制"></text>\n    </view>\n    <view id="touch-mask"></view>\n  </view>\n').root,
                                a = JSON.parse(JSON.stringify(Ie)),
                                l = V(o, "operate-btn"),
                                h = c();
                            this.setDeviceOrientation(h), kn.autoStart ? (l.attributes.value = "录制中...", a.operateBtn.color = "#ff6146", a.startIcon.hidden = !0, a.stopIcon.hidden = !1) : (l.attributes.value = "开始录制", a.operateBtn.color = "#ffffff", a.stopIcon.hidden = !0, a.startIcon.hidden = !1), this.setOperateBtnPos(a, h), n.call(this.ui, o, a), r.add(s.body), this.bindClick(s)
                        }
                    }
                    setOperateBtnPos(e, t) {
                        var {
                            deviceOrientation: n
                        } = this, r = "landscape" === n || "landscapeLeft" === n ? t.safeArea.left || t.safeArea.top : 0;
                        "portrait" !== n && "landscapeRight" !== n || (e.body.top = this.defaultTopPortrait, e.body.left = this.defaultLeft), "landscape" !== n && "landscapeLeft" !== n || (e.body.top = this.defaultTop, e.body.left = this.defaultLeft + r)
                    }
                    setDeviceOrientation(e) {
                        var t = e.deviceOrientation,
                            n = e.windowWidth,
                            r = e.windowHeight;
                        return "portrait" === t && n > r ? n > r && (t = "landscape", n = e.windowHeight, r = e.windowWidth) : n < r && (t = "portrait", n = e.windowHeight, r = e.windowWidth), this.deviceOrientation = t, this.screenWidth = n, this.screenHeight = r, this.deviceOrientation
                    }
                    bindDragEvent(e) {
                        e.touchMask.on("touchstart", (t => {
                            this.beforeDrag(e);
                            var n = t.x - e.container.style.left,
                                r = t.y - e.container.style.top,
                                i = t => {
                                    this.draged = !0;
                                    var i = t[0].x - n,
                                        s = t[0].y - r,
                                        o = this.screenWidth - this.defaultWidth,
                                        a = this.screenHeight - this.defaultHeight;
                                    e.container.style.left = Math.max(0, Math.min(i, o)), e.container.style.top = Math.max(0, Math.min(s, a))
                                },
                                s = () => {
                                    e.touchMask.off("touchmove", i), e.touchMask.off("touchend", s), this.draged || (kn.isRunning ? this.showConfirm() : this.setRunning()), this.draged = !1, this.afterDrag(e)
                                };
                            e.touchMask.on("touchmove", i), e.touchMask.on("touchend", s)
                        }))
                    }
                    bindClick(e) {
                        de(e.touchMask, (() => {
                            kn.isRunning ? this.showConfirm() : this.setRunning()
                        }))
                    }
                    beforeDrag(e) {
                        e.container.style.opacity = 0, e.body.style.width = this.screenWidth, e.body.style.height = this.screenHeight, e.container.style.left = e.body.style.left, e.container.style.top = e.body.style.top, e.touchMask.style.left = e.body.style.left, e.touchMask.style.top = e.body.style.top, e.body.style.top = 0, e.body.style.left = 0, e.container.style.opacity = 1
                    }
                    afterDrag(e) {
                        e.container.style.hidden = !0, e.body.style.left = e.container.style.left, e.body.style.top = e.container.style.top, e.body.style.height = this.defaultHeight, e.body.style.width = this.defaultWidth, e.container.style.left = 0, e.container.style.top = 0, e.touchMask.style.left = 0, e.touchMask.style.top = 0, e.container.style.hidden = !1
                    }
                    setRunning() {
                        if (kn.start(), this.coverview) {
                            var {
                                getPrivateThis: e
                            } = this.coverview, t = e(this.ui);
                            t.operateBtn.value = "录制中...", t.operateBtn.style.color = "#ff6146", t.startIcon.style.hidden = !0, t.stopIcon.style.hidden = !1
                        }
                    }
                    setStop() {
                        if (this.coverview) {
                            var {
                                getPrivateThis: e
                            } = this.coverview, t = e(this.ui);
                            t.operateBtn.value = "开始录制", t.operateBtn.style.color = "#ffffff", t.stopIcon.style.hidden = !0, t.startIcon.style.hidden = !1
                        }
                        l({
                            title: "上传中..."
                        }), kn.stop()
                    }
                    showConfirm() {
                        v()({
                            title: "是否结束录制并上传本次评测数据？",
                            content: "将会根据上传数据分析得出录制期间的性能报告",
                            confirmText: "上传数据",
                            success: e => {
                                e.confirm && this.setStop()
                            }
                        })
                    }
                    showUploadSuccess() {
                        if (X.showUI) {
                            var e = v();
                            I()(), e({
                                title: "数据上传成功",
                                content: "请前往性能结果页面，查看详细性能测评报告",
                                showCancel: !1,
                                confirmText: "我知道了"
                            })
                        }
                    }
                    showUploadFailed(e, t = !1) {
                        if (X.showUI) {
                            var n = I(),
                                r = v();
                            n();
                            var i = e;
                            if (!("number" == typeof e)) {
                                var {
                                    statusCode: s
                                } = e, {
                                    errcode: o
                                } = e;
                                i = s || o || e.errno
                            }
                            r({
                                title: t ? "报告上传失败" : "报告添加失败",
                                content: `错误代码: ${i}`,
                                confirmText: "重试",
                                success(e) {
                                    e.confirm && on.getInstance().uploadReport().then(kn.reset)
                                }
                            })
                        }
                    }
                    hide() {
                        if (this.coverview) {
                            var {
                                getPrivateThis: e
                            } = this.coverview;
                            e(this.ui).body.style.hidden = !0
                        }
                    }
                }

                function ln() {
                    var e = p(),
                        t = Object.keys(e),
                        n = [Z.Request, Z.DownloadFile, Z.CreateImage, Z.CreateCanvas, Z.GetFileSystemManager],
                        r = [...[ee.Env, ee.Cloud], ...n];
                    t.forEach((t => {
                            if (!r.includes(t)) {
                                var n = e[t];
                                Reflect.defineProperty(e, t, {
                                    value: (...e) => ie(t, n, void 0, ...e)
                                })
                            }
                        })),
                        function() {
                            var e = p();
                            Reflect.defineProperty(e, "startMinigameDetect", {
                                value() {
                                    an.getInstance().setRunning()
                                },
                                configurable: !0
                            }), Reflect.defineProperty(e, "stopMinigameDetect", {
                                value() {
                                    an.getInstance().setStop()
                                },
                                configurable: !0
                            })
                        }()
                }
                var hn = null;
                var cn = !1;

                function un() {
                    var e, t, n, r, i, s;
                    if (!cn) {
                        cn = !0, p().onError((e => {
                            N.emit(W.JsError, {
                                message: e.message,
                                stack: e.stack
                            })
                        })), p().onUnhandledRejection((e => {
                            N.emit(W.UnhandledPromiseRejection, {
                                reason: e.reason
                            })
                        }));
                        var o = null === (e = X.audits) || void 0 === e || null === (t = e.rules) || void 0 === t ? void 0 : t.disableRequest,
                            a = null === (n = X.audits) || void 0 === n || null === (r = n.rules) || void 0 === r ? void 0 : r.disableCreateImage,
                            l = null === (i = X.audits) || void 0 === i || null === (s = i.rules) || void 0 === s ? void 0 : s.disableDownloadFile;
                        !b(o) && o || function() {
                                var e = Z.Request,
                                    t = p(),
                                    n = t.request;
                                Object.defineProperties(t, {
                                    [e]: {
                                        value: t => ie(e, n, {
                                            beforeExecute: n => {
                                                Y.loadStart(n);
                                                var r = new te({
                                                    generalInvokeInfo: n,
                                                    apiName: e,
                                                    args: t,
                                                    type: Z.Request
                                                });
                                                se.set(n, r), Q.debug(t.url, ` before ${e} execute, invokeInfo=`, n, ", networkInfo=", r.networkInfo), N.emit(E.LoadStart, {
                                                    args: t,
                                                    generalNetworkInfo: r
                                                })
                                            },
                                            success: e => {
                                                Q.debug(t.url, " request success, result=", e.result);
                                                var n = se.get(e);
                                                n && (n.complete(), Y.loadSuccess(n)), N.emit(E.LoadSuccess, {
                                                    args: t,
                                                    generalNetworkInfo: n
                                                })
                                            },
                                            complete: e => {
                                                Q.debug(t.url, " request complete");
                                                var n = se.get(e);
                                                N.emit(E.LoadComplete, {
                                                    args: t,
                                                    generalNetworkInfo: n
                                                })
                                            },
                                            fail: e => {
                                                Q.error(t.url, " request fail, result=", e.result, ", msg=", e.invokeInfo.errMsg);
                                                var n = se.get(e);
                                                n && (n.complete(), Y.loadFail(n)), N.emit(E.LoadFail, {
                                                    args: t,
                                                    generalNetworkInfo: n
                                                })
                                            }
                                        }, t),
                                        configurable: !0
                                    }
                                })
                            }(), !b(a) && a || function() {
                                var e = p(),
                                    t = Z.CreateImage,
                                    n = e.createImage;
                                Reflect.defineProperty(e, t, {
                                    value: () => ie(t, n, {}),
                                    configurable: !0
                                })
                            }(), !b(l) && l || function() {
                                var e = p(),
                                    t = Z.DownloadFile,
                                    n = e.downloadFile;
                                Object.defineProperties(e, {
                                    [t]: {
                                        value: e => ie(t, n, {
                                            beforeExecute: n => {
                                                Y.loadStart(n);
                                                var r = new te({
                                                    generalInvokeInfo: n,
                                                    apiName: t,
                                                    args: e,
                                                    type: Z.DownloadFile
                                                });
                                                oe.set(n, r), Q.debug(e.url, " before download execute, invokeInfo=", n, ", networkInfo=", r.networkInfo), N.emit(E.LoadStart, {
                                                    args: e,
                                                    generalNetworkInfo: r
                                                })
                                            },
                                            success: t => {
                                                Q.debug(e.url, " downloadFile success, result=", t.result);
                                                var n = oe.get(t);
                                                n && (n.complete(), Y.loadSuccess(n)), N.emit(E.LoadSuccess, {
                                                    args: e,
                                                    generalNetworkInfo: n
                                                })
                                            },
                                            complete: t => {
                                                Q.debug(e.url, " download complete");
                                                var n = oe.get(t);
                                                N.emit(E.LoadComplete, {
                                                    args: e,
                                                    generalNetworkInfo: n
                                                })
                                            },
                                            fail: t => {
                                                Q.error(e.url, " download fail, result=", t.result, ", msg=", t.invokeInfo.errMsg);
                                                var n = oe.get(t);
                                                n && (n.complete(), Y.loadFail(n)), N.emit(E.LoadFail, {
                                                    args: e,
                                                    generalNetworkInfo: n
                                                })
                                            },
                                            afterExecute: e => {
                                                var {
                                                    ret: t
                                                } = e;
                                                t.onHeadersReceived((function n(r) {
                                                    var i = oe.get(e);
                                                    null == i || i.checkHeader(r), t.offHeadersReceived(n)
                                                }))
                                            }
                                        }, e),
                                        configurable: !0
                                    }
                                })
                            }(), ue(), ln(),
                            function() {
                                var e = p(),
                                    t = Z.ReportScene,
                                    n = e.reportScene;
                                n && Reflect.defineProperty(e, t, {
                                    value: e => (7 === e.sceneId && N.emit(W.ReportInteraction, {
                                        costTime: e.costTime,
                                        sceneId: e.sceneId
                                    }), ie(t, n, void 0, e)),
                                    configurable: !0
                                })
                            }(),
                            function() {
                                var e = p(),
                                    t = Z.GetFileSystemManager,
                                    n = e.getFileSystemManager;
                                Reflect.defineProperty(e, t, {
                                    value: () => ie(t, n, {
                                        afterExecute: e => {
                                            if (hn) return hn;
                                            var {
                                                ret: t
                                            } = e;
                                            Object.keys(t).forEach((e => {
                                                var n = t[e];
                                                Reflect.defineProperty(t, e, {
                                                    value: (...t) => ie(`FileSystemManager.${e}`, n, {
                                                        beforeExecute(e) {
                                                            sn.invokeStart(e)
                                                        },
                                                        afterExecute(e) {
                                                            sn.afterExecute(e), N.emit(W.FsApiInvoked, e)
                                                        },
                                                        afterSuccess(e) {
                                                            sn.invokeSuccess(e)
                                                        },
                                                        afterFail(e) {
                                                            sn.invokeFail(e)
                                                        }
                                                    }, ...t),
                                                    configurable: !0
                                                })
                                            })), hn = t
                                        }
                                    }),
                                    configurable: !0
                                })
                            }()
                    }
                }

                function dn() {
                    Nt.getInstance().init(), Et.getInstance().init(), At.getInstance().init(), Ft.getInstance().init(), qt.getInstance().init(), Dt.getInstance().init(), Mt.getInstance().init(), Wt.getInstance().init(), Ot.getInstance().init(), Gt.getInstance().init(), jt.getInstance().init(), Vt.getInstance().init(), Qt.getInstance().init(), Xt.getInstance().init(), zt.getInstance().init(), Bt.getInstance().init(), Ut.getInstance().init(), Kt.getInstance().init(), $t.getInstance().init(), Ht.getInstance().init(), Jt.getInstance().init(), Yt.getInstance().init(), Zt.getInstance().init(), en.getInstance().init(), tn.getInstance().init(), rn.getInstance().init()
                }

                function fn() {
                    Nt.getInstance().off(), Et.getInstance().off(), At.getInstance().off(), Ft.getInstance().off(), qt.getInstance().off(), Dt.getInstance().off(), Mt.getInstance().off(), Wt.getInstance().off(), Ot.getInstance().off(), Gt.getInstance().off(), jt.getInstance().off(), Vt.getInstance().off(), Qt.getInstance().off(), Xt.getInstance().off(), zt.getInstance().off(), Bt.getInstance().off(), Ut.getInstance().off(), Kt.getInstance().off(), $t.getInstance().off(), Ht.getInstance().off(), Jt.getInstance().off(), Yt.getInstance().off(), Zt.getInstance().off(), en.getInstance().off(), tn.getInstance().off(), rn.getInstance().off()
                }

                function pn() {
                    Nt.getInstance().clear(), Et.getInstance().clear(), At.getInstance().clear(), Ft.getInstance().clear(), qt.getInstance().clear(), Dt.getInstance().clear(), Mt.getInstance().clear(), Wt.getInstance().clear(), Ot.getInstance().clear(), Gt.getInstance().clear(), jt.getInstance().clear(), Vt.getInstance().clear(), Qt.getInstance().clear(), Xt.getInstance().clear(), zt.getInstance().clear(), Bt.getInstance().clear(), Ut.getInstance().clear(), Kt.getInstance().clear(), $t.getInstance().clear(), Ht.getInstance().clear(), Jt.getInstance().clear(), Yt.getInstance().clear(), Zt.getInstance().clear(), en.getInstance().clear(), tn.getInstance().clear(), rn.getInstance().clear()
                }
                var mn = "DETECT_KEY__ENABLE",
                    gn = "DETECT_KEY__AUTO_START";
                class vn extends i {
                    constructor(...e) {
                        var n;
                        super(...e), n = this, this.requestId = void 0, this.running = !0, this.interval = 2e3, this.supportGamePerformance = !1, this.getGamePerformance = void 0, this.getAndDispatchPerformanceData = t()((function*() {
                            if (n.running) {
                                var [, e] = yield y(n.postGetGamePerformance());
                                e && n.enable && (delete e.errMsg, N.emit(D, new ne(e))), n.running && (n.requestId = setTimeout((() => {
                                    n.getAndDispatchPerformanceData()
                                }), n.interval))
                            }
                        }))
                    }
                    get enable() {
                        return In.isRunning && this.supportGamePerformance
                    }
                    init(e) {
                        e ? (this.supportGamePerformance = !0, this.getGamePerformance = e) : this.supportGamePerformance = !1
                    }
                    start() {
                        this.enable && (this.running = !0, this.getAndDispatchPerformanceData())
                    }
                    stop() {
                        this.running = !1, this.requestId && clearTimeout(this.requestId)
                    }
                    postGetGamePerformance() {
                        return this.getGamePerformance ? new Promise(((e, t) => {
                            var n;
                            null === (n = this.getGamePerformance) || void 0 === n || n.call(this, {
                                success: e,
                                fail: t
                            })
                        })) : Promise.reject()
                    }
                }
                const In = class extends i {
                    constructor(...e) {
                        super(...e), this.enable = !1, this.isRunning = !1, this.injectMode = !1, this.autoStart = !1, this.deviceInfo = void 0, this.result = void 0, this.start = () => {
                            this.isRunning = !0, X.detectTimes += 1, Q.event("minigame detect logic running!!"), X.meta.startTime = Date.now(), S.init(), Rt.getInstance().init(), xt.getInstance().init(), Lt.getInstance().init(), Pt.getInstance().init(), dn(), vn.getInstance().start(), N.emit(A)
                        }, this.stop = () => {
                            this.isRunning = !1, N.emit(q), N.emit(F), Q.event("minigame detect logic stop!!"), X.meta.endTime = Date.now(), X.isWxApplib && $e.report({
                                Type: me.Info,
                                Target: ke.End,
                                ExternInfo: {
                                    detectTime: Date.now() - X.meta.startTime,
                                    ...He()
                                }
                            }), S.stop(), vn.getInstance().stop(), Rt.getInstance().off(), xt.getInstance().off(), Lt.getInstance().off(), Pt.getInstance().off(), fn(), on.getInstance().uploadReport().then((() => {
                                var e;
                                this.reset(), null != X && null !== (e = X.audits) && void 0 !== e && e.systemDescription && an.getInstance().hide()
                            }))
                        }
                    }
                    init(e) {
                        var t, n;
                        (Q.event("minigame detect tool inject!!"), Q.debug("minigame detect tool inject!!, initParams=", e), X.init(e), $e = new Ve, function(e) {
                            if (e) {
                                var t = (f = e).getFileSystemManager();
                                s = t.writeFile, o = t.unlink, a = f.showModal, l = f.showLoading, h = f.hideLoading, c = f.getSystemInfoSync, u = f.getDeviceInfo(), d = f.getAppBaseInfo()
                            }
                        }(e.globalWx), X.isWxApplib ? (this.enable = !0, this.autoStart = X.audits.autoStart) : this.handleLaunchConfig(), Q.event(`enable=${this.enable}, autoStart=${this.autoStart}`), this.enable && (X.isWxApplib && $e.report({
                            Type: me.Info,
                            Target: ke.Launch,
                            ExternInfo: {
                                subpackages: X.sdk.WXConfig.subpackages,
                                parallelPreloadSubpackages: X.sdk.WXConfig.parallelPreloadSubpackages,
                                ...He()
                            }
                        }), this.beforeStart(), this.generateDetectTask(), this.autoStart && this.start()), t = {
                            request: e.request,
                            uploadFile: e.uploadFile,
                            gameTransfer: e.gameTransfer
                        }, rt = t.request ? t.request : p().request, it = t.uploadFile ? t.uploadFile : p().uploadFile, Je(t), e.gameAuditModule) && ("function" == typeof(null === (n = e.gameAuditModule) || void 0 === n ? void 0 : n.onAuditInject) && e.gameAuditModule.onAuditInject(this))
                    }
                    generateDetectTask() {
                        return t()((function*() {
                            on.getInstance().getDeviceInfo()
                        }))()
                    }
                    handleLaunchConfig() {
                        this.injectMode = !1;
                        var e = {};
                        this.enable = !!e[mn], this.autoStart = !!e[gn]
                    }
                    registerDetectEvent() {
                        N.once(A, this.start), N.once(F, this.stop)
                    }
                    beforeStart() {
                        var {
                            coverview: e,
                            getGamePerformance: t
                        } = X.initParams;
                        un(), X.isWxApplib && (an.getInstance().init(e), vn.getInstance().init(t))
                    }
                    reset() {
                        on.getInstance().reset(), X.reset(), pn(), S.reset(), Rt.getInstance().reset(), xt.getInstance().reset(), Lt.getInstance().reset(), Pt.getInstance().reset(), Y.reset(), sn.reset()
                    }
                }.getInstance();
                Object.defineProperty(globalThis, "__GamePerformanceUtilsSDK", {
                    get: () => ({
                        getSDK: () => ({
                            controller: In
                        })
                    })
                });
                const kn = In
            })(), r.default
        })()
    }()
} catch (e) {
    console.error("catch sdkSubPackage: gamePerformanceUtilsSDK error: ", e)
}