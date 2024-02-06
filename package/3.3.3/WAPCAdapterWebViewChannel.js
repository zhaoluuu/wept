(() => {
    "use strict";
    var e = {
            1883: e => {
                var t = Object.prototype.hasOwnProperty,
                    n = "~";

                function s() {}

                function i(e, t, n) {
                    this.fn = e, this.context = t, this.once = n || !1
                }

                function r(e, t, s, r, o) {
                    if ("function" != typeof s) throw new TypeError("The listener must be a function");
                    var a = new i(s, r || e, o),
                        c = n ? n + t : t;
                    return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], a] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++), e
                }

                function o(e, t) {
                    0 == --e._eventsCount ? e._events = new s : delete e._events[t]
                }

                function a() {
                    this._events = new s, this._eventsCount = 0
                }
                Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (n = !1)), a.prototype.eventNames = function() {
                    var e, s, i = [];
                    if (0 === this._eventsCount) return i;
                    for (s in e = this._events) t.call(e, s) && i.push(n ? s.slice(1) : s);
                    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
                }, a.prototype.listeners = function(e) {
                    var t = n ? n + e : e,
                        s = this._events[t];
                    if (!s) return [];
                    if (s.fn) return [s.fn];
                    for (var i = 0, r = s.length, o = new Array(r); i < r; i++) o[i] = s[i].fn;
                    return o
                }, a.prototype.listenerCount = function(e) {
                    var t = n ? n + e : e,
                        s = this._events[t];
                    return s ? s.fn ? 1 : s.length : 0
                }, a.prototype.emit = function(e, t, s, i, r, o) {
                    var a = n ? n + e : e;
                    if (!this._events[a]) return !1;
                    var c, l, u = this._events[a],
                        h = arguments.length;
                    if (u.fn) {
                        switch (u.once && this.removeListener(e, u.fn, void 0, !0), h) {
                            case 1:
                                return u.fn.call(u.context), !0;
                            case 2:
                                return u.fn.call(u.context, t), !0;
                            case 3:
                                return u.fn.call(u.context, t, s), !0;
                            case 4:
                                return u.fn.call(u.context, t, s, i), !0;
                            case 5:
                                return u.fn.call(u.context, t, s, i, r), !0;
                            case 6:
                                return u.fn.call(u.context, t, s, i, r, o), !0
                        }
                        for (l = 1, c = new Array(h - 1); l < h; l++) c[l - 1] = arguments[l];
                        u.fn.apply(u.context, c)
                    } else {
                        var d, f = u.length;
                        for (l = 0; l < f; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), h) {
                            case 1:
                                u[l].fn.call(u[l].context);
                                break;
                            case 2:
                                u[l].fn.call(u[l].context, t);
                                break;
                            case 3:
                                u[l].fn.call(u[l].context, t, s);
                                break;
                            case 4:
                                u[l].fn.call(u[l].context, t, s, i);
                                break;
                            default:
                                if (!c)
                                    for (d = 1, c = new Array(h - 1); d < h; d++) c[d - 1] = arguments[d];
                                u[l].fn.apply(u[l].context, c)
                        }
                    }
                    return !0
                }, a.prototype.on = function(e, t, n) {
                    return r(this, e, t, n, !1)
                }, a.prototype.once = function(e, t, n) {
                    return r(this, e, t, n, !0)
                }, a.prototype.removeListener = function(e, t, s, i) {
                    var r = n ? n + e : e;
                    if (!this._events[r]) return this;
                    if (!t) return o(this, r), this;
                    var a = this._events[r];
                    if (a.fn) a.fn !== t || i && !a.once || s && a.context !== s || o(this, r);
                    else {
                        for (var c = 0, l = [], u = a.length; c < u; c++)(a[c].fn !== t || i && !a[c].once || s && a[c].context !== s) && l.push(a[c]);
                        l.length ? this._events[r] = 1 === l.length ? l[0] : l : o(this, r)
                    }
                    return this
                }, a.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = n ? n + e : e, this._events[t] && o(this, t)) : (this._events = new s, this._eventsCount = 0), this
                }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a
            },
            5146: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = s(n(4805)),
                    r = n(1836),
                    o = n(4620),
                    a = s(n(5624)),
                    c = new class {
                        channel = new o.AsyncValue;
                        jsBridge = new a.default;
                        originEval = window.eval;
                        constructor() {
                            this.init()
                        }
                        async init() {
                            i.default.setContextTag(`WEBVIEW-${location.origin}`), i.default.info("Adapter Version: 3.3.3, build time: 2024.1.23 17:16:48"), i.default.info(`inject wx-webview code. src=${location.href}`), this.jsBridge.modifyGlobalJsBridge(), document.addEventListener("xwebConnect", (e => {
                                const t = e.ports[0];
                                i.default.info("on connect", e), this.channel.set(new r.WebViewTagMessageChannel(t))
                            })), window.addEventListener("focus", (() => {
                                i.default.info("window on focus.")
                            })), window.addEventListener("blur", (() => {
                                i.default.info("window on blur.")
                            }));
                            const e = await this.channel.get();
                            e.on("handshake", (() => {})), e.on("eval", (({
                                code: e
                            }) => {
                                this.originEval(e)
                            }))
                        }
                    };
                t.default = c
            },
            5624: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = s(n(4805)),
                    r = s(n(5146)),
                    o = window.WeixinJSBridge;
                t.default = class {
                    constructor() {
                        i.default.info("originalWeixinJSBridge:", o)
                    }
                    invoke(e, t, n) {
                        if (i.default.info("[adapter] jsbridge invoke:", e, t), "invokeMiniProgramAPI" !== e) return o.invoke(e, t, n);
                        r.default.channel.get().then((s => {
                            s.send("jsbridge_invoke", {
                                name: e,
                                data: t
                            }).then((s => {
                                i.default.info("[adapter] jsbridge invoke res:", e, t, s), n(s)
                            }))
                        }))
                    }
                    on(e) {
                        i.default.info("[adapter] jsbridge on:", e)
                    }
                    modifyGlobalJsBridge() {
                        const e = {
                            ...o,
                            invoke: this.invoke
                        };
                        window.WeixinJSBridge = e
                    }
                }
            },
            4805: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = n(1883),
                    i = n(9141);
                var r;
                ! function(e) {
                    e.L = "L", e.I = "I", e.W = "E", e.E = "E"
                }(r || (r = {})), globalThis.console.log, globalThis.console.info, globalThis.console.warn, globalThis.console.error;
                class o extends s.EventEmitter {
                    constructor() {
                        super()
                    }
                    contextTag = "";
                    setContextTag(e) {
                        this.contextTag = e
                    }
                    getLogHeader(e) {
                        return `[${this.contextTag}] [${e}]`
                    }
                    formatLogInfo(...e) {
                        return [...e.map((e => (0, i.transformArg)(e)))]
                    }
                    cacheLogs = [];
                    _idleCallback;
                    updateLogs() {
                        "number" != typeof this._idleCallback && (this._idleCallback = requestIdleCallback((() => {
                            this.emit("updateLogs", {
                                logs: this.cacheLogs
                            }), this.cacheLogs = [], this._idleCallback = void 0
                        })))
                    }
                    debug(...e) {}
                    info(...e) {
                        const t = this.getLogHeader(r.I),
                            n = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${n}`), this.updateLogs()
                    }
                    warn(...e) {
                        const t = this.getLogHeader(r.W),
                            n = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${n}`), this.updateLogs()
                    }
                    error(...e) {
                        const t = this.getLogHeader(r.E),
                            n = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${n}`), this.updateLogs()
                    }
                }
                const a = new o;
                t.default = a
            },
            9141: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.transformArg = void 0, t.transformArg = e => {
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
                        case "object": {
                            let t;
                            try {
                                t = JSON.stringify(e)
                            } catch (e) {
                                t = "[对象含有循环引用]"
                            }
                            return t
                        }
                        default:
                            return
                    }
                }
            },
            4620: (e, t) => {
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.waitAnimationFrame = t.waitTimeout = t.AsyncQueue = t.AsyncMutex = t.createAsyncRef = t.Waiting = t.AsyncValue = void 0,
                    function(e) {
                        e[e.PENDING = 0] = "PENDING", e[e.RESOLVE = 1] = "RESOLVE", e[e.REJECT = 2] = "REJECT"
                    }(n || (n = {}));
                class s {
                    value;
                    state = n.PENDING;
                    pendingRequest;
                    resolvePending = null;
                    rejectPending = null;
                    async get() {
                        return this.state === n.RESOLVE ? this.value : this.state === n.REJECT ? Promise.reject(this.value) : (this.pendingRequest || (this.pendingRequest = new Promise(((e, t) => {
                            this.resolvePending = e, this.rejectPending = t
                        }))), this.pendingRequest)
                    }
                    getSync() {
                        return this.state === n.PENDING ? void 0 : this.value
                    }
                    set(e, t = !1) {
                        if (this.state !== n.PENDING) throw new Error("forbidden: set value more than once");
                        this.value = e, t ? (this.state = n.REJECT, this.rejectPending && this.rejectPending(this.value)) : (this.state = n.RESOLVE, this.resolvePending && this.resolvePending(this.value)), this.resolvePending = null, this.rejectPending = null, this.pendingRequest = null
                    }
                    isPending() {
                        return this.state === n.PENDING
                    }
                    isResolved() {
                        return this.state === n.RESOLVE
                    }
                    isRejected() {
                        return this.state === n.REJECT
                    }
                }
                t.AsyncValue = s, t.Waiting = class {
                    value = new s;
                    async waitUntil(e) {
                        const t = await this.value.get();
                        return "function" == typeof e && await e(t), t
                    }
                    done(e) {
                        this.value.set(e)
                    }
                }, t.createAsyncRef = function() {
                    const e = new s;
                    return {
                        ref(t) {
                            null != t && t !== e.getSync() && e.set(t)
                        },
                        get current() {
                            return e.get()
                        },
                        get currentSync() {
                            return e.getSync()
                        }
                    }
                }, t.AsyncMutex = class {
                    _lockPromise;
                    _resolveHandler;
                    lock() {
                        if (this._lockPromise) throw new Error("mutex is locked!");
                        this._lockPromise = new Promise((e => {
                            this._resolveHandler = e
                        }))
                    }
                    unlock() {
                        this._resolveHandler(), this._lockPromise = void 0
                    }
                    waitUnlock() {
                        return this._lockPromise
                    }
                    async requestLock() {
                        return await this.waitUnlock(), this.lock()
                    }
                }, t.AsyncQueue = class {
                    _queues = [];
                    async requestTask(e) {
                        const t = this._queues.length > 0 ? this._queues[this._queues.length - 1] : void 0;
                        let n;
                        const s = new Promise((e => {
                                n = e
                            })),
                            i = {
                                resolveHandler: n,
                                taskPromise: s
                            };
                        return this._queues.push(i), t && await (t?.taskPromise), "number" == typeof e && setTimeout((() => {
                            this._queues.includes(i) && n()
                        }), e), {
                            done: () => {
                                console.assert(i === this._queues.shift()), n()
                            }
                        }
                    }
                }, t.waitTimeout = e => new Promise((t => {
                    setTimeout(t, e)
                })), t.waitAnimationFrame = () => new Promise((e => {
                    requestAnimationFrame(e)
                }))
            },
            917: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BaseWindowMessageChannel = void 0;
                const i = s(n(4805));
                t.BaseWindowMessageChannel = class {
                    _callbacks = {};
                    _id = String(Date.now());
                    constructor() {}
                    async send(e, t, n = {}) {
                        throw new Error("unimplented error")
                    }
                    on(e, t) {
                        this._callbacks[e] && i.default.warn("already has " + e), i.default.info(`channel received on listener[${e}]`), this._callbacks[e] = t
                    }
                    emit(e, t) {
                        if (this._callbacks[e]) return this._callbacks[e](t);
                        i.default.warn(`event ${e} haven't listeners!`, this)
                    }
                }
            },
            1836: function(e, t, n) {
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WebViewTagMessageChannel = void 0;
                const i = s(n(4805)),
                    r = n(4620),
                    o = n(917);
                let a = 0;
                class c extends o.BaseWindowMessageChannel {
                    targetPort;
                    _callbackPromises = {};
                    constructor(e) {
                        super(), this.targetPort = e, this._listenPort(e)
                    }
                    _listenPort(e) {
                        e.onmessage = e => {
                            "_callback" === e.data.name ? (this._callbackPromises[e.data._id]?.set(e.data.content), delete this._callbackPromises[e.data._id]) : this._sendCallback(e.data._id, this.emit(e.data.name, e.data.content))
                        }
                    }
                    reconnect(e) {
                        delete this.targetPort.onmessage, this.targetPort = e, this._listenPort(e)
                    }
                    ping() {
                        this.targetPort.postMessage("ping")
                    }
                    _sendCallback(e, t) {
                        this.targetPort.postMessage({
                            name: "_callback",
                            content: t,
                            _id: e
                        })
                    }
                    static _processMessage(e) {
                        return JSON.parse(JSON.stringify(e))
                    }
                    async send(e, t, n = {}) {
                        const s = a++;
                        let o = {
                            name: e,
                            content: t,
                            _id: s
                        };
                        n.transfer?.length > 0 ? i.default.info("[CHANNEL_WEBVIEWTAG]", "on transfer", n.transfer) : o = c._processMessage(o), this.targetPort.postMessage(o);
                        const l = new r.AsyncValue;
                        return this._callbackPromises[s] = l, l.get()
                    }
                }
                t.WebViewTagMessageChannel = c
            }
        },
        t = {};
    ! function n(s) {
        var i = t[s];
        if (void 0 !== i) return i.exports;
        var r = t[s] = {
            exports: {}
        };
        return e[s].call(r.exports, r, r.exports, n), r.exports
    }(5146)
})();