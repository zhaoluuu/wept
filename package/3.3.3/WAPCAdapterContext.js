(() => {
    "use strict";
    var e = {
            1883: e => {
                var t = Object.prototype.hasOwnProperty,
                    r = "~";

                function o() {}

                function n(e, t, r) {
                    this.fn = e, this.context = t, this.once = r || !1
                }

                function a(e, t, o, a, i) {
                    if ("function" != typeof o) throw new TypeError("The listener must be a function");
                    var l = new n(o, a || e, i),
                        s = r ? r + t : t;
                    return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], l] : e._events[s].push(l) : (e._events[s] = l, e._eventsCount++), e
                }

                function i(e, t) {
                    0 == --e._eventsCount ? e._events = new o : delete e._events[t]
                }

                function l() {
                    this._events = new o, this._eventsCount = 0
                }
                Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (r = !1)), l.prototype.eventNames = function() {
                    var e, o, n = [];
                    if (0 === this._eventsCount) return n;
                    for (o in e = this._events) t.call(e, o) && n.push(r ? o.slice(1) : o);
                    return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
                }, l.prototype.listeners = function(e) {
                    var t = r ? r + e : e,
                        o = this._events[t];
                    if (!o) return [];
                    if (o.fn) return [o.fn];
                    for (var n = 0, a = o.length, i = new Array(a); n < a; n++) i[n] = o[n].fn;
                    return i
                }, l.prototype.listenerCount = function(e) {
                    var t = r ? r + e : e,
                        o = this._events[t];
                    return o ? o.fn ? 1 : o.length : 0
                }, l.prototype.emit = function(e, t, o, n, a, i) {
                    var l = r ? r + e : e;
                    if (!this._events[l]) return !1;
                    var s, c, d = this._events[l],
                        b = arguments.length;
                    if (d.fn) {
                        switch (d.once && this.removeListener(e, d.fn, void 0, !0), b) {
                            case 1:
                                return d.fn.call(d.context), !0;
                            case 2:
                                return d.fn.call(d.context, t), !0;
                            case 3:
                                return d.fn.call(d.context, t, o), !0;
                            case 4:
                                return d.fn.call(d.context, t, o, n), !0;
                            case 5:
                                return d.fn.call(d.context, t, o, n, a), !0;
                            case 6:
                                return d.fn.call(d.context, t, o, n, a, i), !0
                        }
                        for (c = 1, s = new Array(b - 1); c < b; c++) s[c - 1] = arguments[c];
                        d.fn.apply(d.context, s)
                    } else {
                        var u, f = d.length;
                        for (c = 0; c < f; c++) switch (d[c].once && this.removeListener(e, d[c].fn, void 0, !0), b) {
                            case 1:
                                d[c].fn.call(d[c].context);
                                break;
                            case 2:
                                d[c].fn.call(d[c].context, t);
                                break;
                            case 3:
                                d[c].fn.call(d[c].context, t, o);
                                break;
                            case 4:
                                d[c].fn.call(d[c].context, t, o, n);
                                break;
                            default:
                                if (!s)
                                    for (u = 1, s = new Array(b - 1); u < b; u++) s[u - 1] = arguments[u];
                                d[c].fn.apply(d[c].context, s)
                        }
                    }
                    return !0
                }, l.prototype.on = function(e, t, r) {
                    return a(this, e, t, r, !1)
                }, l.prototype.once = function(e, t, r) {
                    return a(this, e, t, r, !0)
                }, l.prototype.removeListener = function(e, t, o, n) {
                    var a = r ? r + e : e;
                    if (!this._events[a]) return this;
                    if (!t) return i(this, a), this;
                    var l = this._events[a];
                    if (l.fn) l.fn !== t || n && !l.once || o && l.context !== o || i(this, a);
                    else {
                        for (var s = 0, c = [], d = l.length; s < d; s++)(l[s].fn !== t || n && !l[s].once || o && l[s].context !== o) && c.push(l[s]);
                        c.length ? this._events[a] = 1 === c.length ? c[0] : c : i(this, a)
                    }
                    return this
                }, l.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = r ? r + e : e, this._events[t] && i(this, t)) : (this._events = new o, this._eventsCount = 0), this
                }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l
            },
            7670: function(e, t, r) {
                var o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const n = o(r(4609));
                class a extends n.default {
                    constructor() {
                        super()
                    }
                }
                new a
            },
            2977: function(e, t, r) {
                var o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.bridgeGlobalInstanceOf = void 0;
                const n = o(r(4805)),
                    a = Object.prototype.isPrototypeOf,
                    i = Object.defineProperty,
                    l = Object.prototype.hasOwnProperty,
                    s = Symbol.hasInstance,
                    c = function(e) {
                        return !("function" != typeof this || !d(e)) && ((e, t) => a.call(t.prototype, e))(e, this)
                    },
                    d = e => "object" == typeof e ? null !== e : "function" == typeof e,
                    b = e => {
                        const t = e.Function;
                        return [() => Object.getPrototypeOf(Uint8Array.prototype).constructor, () => new t("return Object.getPrototypeOf((function* () {})()).constructor")(), () => new t("return Object.getPrototypeOf(function* () {}).constructor")(), () => new t("return Object.getPrototypeOf(async function () {}).constructor")(), () => new t("return Object.getPrototypeOf(async function* () {}).constructor")()].map((e => {
                            try {
                                return e()
                            } catch (e) {}
                        })).filter(Boolean)
                    },
                    u = ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "Error", "EvalError", "FinalizationRegistry", "Float32Array", "Float64Array", "Function", "globalThis", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "WebAssembly", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "null", "parseFloat", "parseInt", "undefined", "unescape", "uneval"];
                t.bridgeGlobalInstanceOf = function(e, t) {
                    const r = [...u.map((t => e[t])), ...b(e)].filter(Boolean),
                        o = [...u.map((e => t[e])), ...b(t)].filter(Boolean);
                    for (let e = 0; e < r.length; ++e) {
                        const t = r[e],
                            a = o[e];
                        try {
                            if ("function" != typeof t) continue;
                            const e = l.call(t, s) ? t[s] : c,
                                r = l.call(a, s) ? a[s] : c;
                            i(t, s, {
                                value(t) {
                                    return e.call(this, t) || r.call(a, t)
                                },
                                writable: !0,
                                enumerable: !1,
                                configurable: !0
                            }), i(a, s, {
                                value(o) {
                                    return r.call(this, o) || e.call(t, o)
                                },
                                writable: !0,
                                enumerable: !1,
                                configurable: !0
                            })
                        } catch (e) {
                            n.default.warn("bridgeGlobalInstanceOf detect error:", e.message);
                            continue
                        }
                    }
                }
            },
            4609: function(e, t, r) {
                var o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const n = o(r(4805)),
                    a = r(2708),
                    i = r(2185),
                    l = r(2977);
                t.default = class {
                    get id() {
                        return globalThis.WeixinJSContextId
                    }
                    name;protected = !1;constructor() {
                        void 0 === globalThis.__context ? (console.info("context start init."), globalThis.__context = this) : console.info("already has global context variable, ignore to init!")
                    }
                    initLogger(e) {
                        n.default.setContextTag(`CONTEXT-${this.id}-${this.name}`), n.default.info("context initLogger. systemLog method: " + typeof e), n.default.on("updateLogs", (({
                            logs: t
                        }) => {
                            e?.(t)
                        }))
                    }
                    eval(e) {
                        (0, i.evalCode)(e)
                    }
                    bridgeContext(e) {
                        this.protected ? n.default.error("bridgeContext fail. context is protected!") : (0, l.bridgeGlobalInstanceOf)(globalThis, e)
                    }
                    protect() {
                        (0, i.tryCacheRunCode)(), n.default.info("run protect logic start"), (0, a.protectContextGlobal)(), n.default.info("run protect logic end"), this.protected = !0
                    }
                    getGlobalVariable(e) {
                        return globalThis[e]
                    }
                }
            },
            3552: (e, t, r) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeUselessGlobalVariables = void 0;
                const o = r(6676);
                var n;
                ! function(e) {
                    e[e.remove = 0] = "remove", e[e.freeze = 1] = "freeze", e[e.seal = 2] = "seal", e[e.editable = 3] = "editable"
                }(n || (n = {}));
                const a = {
                    Object: n.editable,
                    Function: n.editable,
                    Array: n.editable,
                    Number: n.editable,
                    parseFloat: n.editable,
                    parseInt: n.editable,
                    Infinity: n.editable,
                    NaN: n.editable,
                    undefined: n.editable,
                    Boolean: n.editable,
                    String: n.editable,
                    Symbol: n.editable,
                    Date: n.editable,
                    Promise: n.editable,
                    RegExp: n.editable,
                    Error: n.editable,
                    EvalError: n.editable,
                    RangeError: n.editable,
                    ReferenceError: n.editable,
                    SyntaxError: n.editable,
                    TypeError: n.editable,
                    URIError: n.editable,
                    JSON: n.editable,
                    Math: n.editable,
                    console: n.editable,
                    ArrayBuffer: n.editable,
                    Uint8Array: n.editable,
                    Int8Array: n.editable,
                    Uint16Array: n.editable,
                    Int16Array: n.editable,
                    Uint32Array: n.editable,
                    Int32Array: n.editable,
                    Float32Array: n.editable,
                    Float64Array: n.editable,
                    Uint8ClampedArray: n.editable,
                    BigUint64Array: n.editable,
                    BigInt64Array: n.editable,
                    DataView: n.editable,
                    Map: n.editable,
                    BigInt: n.editable,
                    Set: n.editable,
                    WeakMap: n.editable,
                    WeakSet: n.editable,
                    WeakRef: n.editable,
                    FinalizationRegistry: n.editable,
                    Proxy: n.editable,
                    Reflect: n.editable,
                    decodeURI: n.editable,
                    decodeURIComponent: n.editable,
                    encodeURI: n.editable,
                    encodeURIComponent: n.editable,
                    escape: n.editable,
                    unescape: n.editable,
                    isFinite: n.editable,
                    isNaN: n.editable,
                    SharedArrayBuffer: n.editable,
                    Atomics: n.editable,
                    WebAssembly: n.editable,
                    clearInterval: n.editable,
                    clearTimeout: n.editable,
                    setInterval: n.editable,
                    setTimeout: n.editable,
                    globalThis: n.editable,
                    requestIdleCallback: n.editable,
                    cancelIdleCallback: n.editable,
                    atob: n.editable,
                    btoa: n.editable,
                    createImageBitmap: n.editable,
                    eval: n.editable,
                    MonkeyJSCore: n.editable,
                    NativeGlobal: n.editable,
                    useGlobalJSBridge: n.editable,
                    define: n.editable,
                    require: n.editable,
                    App: n.editable,
                    __pageComponent: n.editable,
                    getCurrentPages: n.editable,
                    getApp: n.editable,
                    __vd_version_info__: n.editable,
                    __webview_engine_version__: n.editable,
                    Behavior: n.editable,
                    Component: n.editable,
                    Page: n.editable,
                    Path2D: n.editable,
                    WXWebAssembly: n.editable,
                    requirePlugin: n.editable,
                    definePlugin: n.editable,
                    wx: n.editable,
                    __context: n.editable
                };
                t.removeUselessGlobalVariables = () => {
                    (0, o.getOwnPropNames)(globalThis).forEach((e => {
                        try {
                            if (/^(__|Weixin)/.test(e)) return;
                            switch (a[e]) {
                                case n.editable:
                                    return;
                                case n.freeze:
                                    return void(0, o.freezeObj)(globalThis[e]);
                                case n.seal:
                                    return void(0, o.sealObj)(globalThis[e]);
                                case n.remove:
                                default:
                                    return void delete globalThis[e]
                            }
                        } catch (e) {
                            console.warn("context removeUselessGlobalVariables err:", e.message)
                        }
                    }))
                }
            },
            2708: (e, t, r) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.protectContextGlobal = void 0;
                const o = r(3552),
                    n = r(8934);
                let a = !1;
                t.protectContextGlobal = function() {
                    a || (a = !0, (0, n.protectBridge)(), (0, o.removeUselessGlobalVariables)())
                }
            },
            8934: (e, t, r) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.protectBridge = void 0;
                const o = r(6676);
                t.protectBridge = () => {
                    const e = globalThis.WeixinJSBridge;
                    if (void 0 !== e) {
                        const {
                            on: t,
                            invoke: r
                        } = e;
                        e.on = (e, r) => t(e, (e => r && r((0, o.dfsProto)(e)))), e.invoke = (e, t, n, a) => r(e, t, (e => n && n((0, o.dfsProto)(e))), a);
                        const n = (0, o.freezeObj)(e);
                        (0, o.defineProp)(globalThis, "WeixinJSBridge", {
                            get: () => n,
                            set: e => "DO NOT SET WeixinJSBridge"
                        })
                    }
                }
            },
            6676: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.dfsProto = t.getType = t.toStr = t.reflectSet = t.hasOwnProp = t.getOwnPropNames = t.getOwnProp = t.setProto = t.getProto = t.defineProp = t.sealObj = t.freezeObj = t.objEntries = void 0, t.objEntries = Object.entries.bind(Object), t.freezeObj = Object.freeze.bind(Object), t.sealObj = Object.seal.bind(Object), t.defineProp = Object.defineProperty.bind(Object), t.getProto = Object.getPrototypeOf.bind(Object), t.setProto = Object.setPrototypeOf.bind(Object), t.getOwnProp = Object.getOwnPropertyDescriptor.bind(Object), t.getOwnPropNames = Object.getOwnPropertyNames.bind(Object), t.hasOwnProp = Object.prototype.hasOwnProperty, t.reflectSet = Reflect.set.bind(Reflect), t.toStr = Object.prototype.toString, t.getType = e => t.toStr.call(e).slice(8, -1);
                const r = {
                    Object,
                    Function,
                    Boolean,
                    Number,
                    String,
                    Array,
                    ArrayBuffer
                };
                t.dfsProto = e => {
                    const o = (0, t.getType)(e);
                    if (!(o in r) || e instanceof r[o] || (0, t.setProto)(e, r[o].prototype), ("Object" === o || "Window" === o) && !e.__adapter_protected) {
                        (0, t.defineProp)(e, "__adapter_protected", {
                            value: !0,
                            enumerable: !1,
                            configurable: !1,
                            writable: !1
                        });
                        for (const r in e)(0, t.dfsProto)(e[r])
                    }
                    return e
                }
            },
            2185: function(e, t, r) {
                var o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.evalCodeList = t.evalCode = t.tryCacheRunCode = t.CodeType = void 0;
                const n = o(r(4805)),
                    a = r(6832);
                var i;
                ! function(e) {
                    e.usr = "usr", e.lib = "lib", e.unknown = "unknown", e.inline = "inline", e.combine = "combine"
                }(i = t.CodeType || (t.CodeType = {}));
                const l = "[EVALCODE]";
                let s;
                t.tryCacheRunCode = () => {
                    s || ("function" == typeof globalThis.runCode ? (s = globalThis.runCode, globalThis.runCode = void 0, n.default.info(l, "cached runCode method.")) : n.default.error(l, "no runCode method!"))
                }, (0, t.tryCacheRunCode)(), t.evalCode = e => {
                    (0, t.tryCacheRunCode)();
                    const r = ((e = "__unknown__", t) => t === i.inline || t === i.unknown || t === i.combine ? "" : `${t}/${(0,a.trimStart)(e,"/")}`)(e.src, e.type);
                    return n.default.info(l, `on eval code. src=${e.src}, type=${e.type}, codelen=${e.code.length}, evalPath=${r}`), s(e.code, r)
                }, t.evalCodeList = e => {
                    (0, t.tryCacheRunCode)(), e.forEach((e => {
                        (0, t.evalCode)(e)
                    }))
                }
            },
            4805: (e, t, r) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const o = r(1883),
                    n = r(9141);
                var a;
                ! function(e) {
                    e.L = "L", e.I = "I", e.W = "E", e.E = "E"
                }(a || (a = {})), globalThis.console.log, globalThis.console.info, globalThis.console.warn, globalThis.console.error;
                class i extends o.EventEmitter {
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
                        return [...e.map((e => (0, n.transformArg)(e)))]
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
                        const t = this.getLogHeader(a.I),
                            r = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${r}`), this.updateLogs()
                    }
                    warn(...e) {
                        const t = this.getLogHeader(a.W),
                            r = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${r}`), this.updateLogs()
                    }
                    error(...e) {
                        const t = this.getLogHeader(a.E),
                            r = this.formatLogInfo(...e).join(" ");
                        this.cacheLogs.push(`${t} ${r}`), this.updateLogs()
                    }
                }
                const l = new i;
                t.default = l
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
            6832: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.clamp = t.trimStart = t.trim = t.randFileName = t.bufferToArray = t.noop = void 0, t.noop = (...e) => {}, t.bufferToArray = function(e) {
                    return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                }, t.randFileName = function(e = "") {
                    return (Date.now() + Math.random()).toString(16).replace(".", "_") + e
                }, t.trim = (e, t = " ") => {
                    t || (t = "s\ufeff ");
                    const r = new RegExp(`^[${t}]+|[${t}]+$`, "g");
                    return e.replace(r, "")
                }, t.trimStart = (e, t = " ") => {
                    t || (t = "s\ufeff ");
                    const r = new RegExp(`^[${t}]+`, "g");
                    return e.replace(r, "")
                }, t.clamp = function(e, t, r) {
                    return Math.max(t, Math.min(e, r))
                }
            }
        },
        t = {};
    ! function r(o) {
        var n = t[o];
        if (void 0 !== n) return n.exports;
        var a = t[o] = {
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, r), a.exports
    }(7670)
})();