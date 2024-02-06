(() => {
    var t = {
            6715: t => {
                function e(t, e, n, r, i, o, s) {
                    try {
                        var a = t[o](s),
                            u = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(u) : Promise.resolve(u).then(r, i)
                }
                t.exports = function(t) {
                    return function() {
                        var n = this,
                            r = arguments;
                        return new Promise((function(i, o) {
                            var s = t.apply(n, r);

                            function a(t) {
                                e(s, i, o, a, u, "next", t)
                            }

                            function u(t) {
                                e(s, i, o, a, u, "throw", t)
                            }
                            a(void 0)
                        }))
                    }
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            3368: (t, e, n) => {
                "use strict";
                n.d(e, {
                    A: () => a,
                    T: () => r,
                    _: () => o,
                    a: () => s
                });
                var r, i = n(1550);

                function o(t, e, n, r) {
                    var i, o = arguments.length,
                        s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                    else
                        for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                    return o > 3 && s && Object.defineProperty(e, n, s), s
                }

                function s(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                }! function(t) {
                    t[t.Inspector = 0] = "Inspector", t[t.RendererInspectee = 1] = "RendererInspectee", t[t.ServiceInspectee = 2] = "ServiceInspectee", t[t.AllInspectee = 3] = "AllInspectee"
                }(r || (r = {}));
                var a = class {
                    constructor(t = r.AllInspectee) {
                        this.callbacks = new Map, this.type = t
                    }
                    get inited() {
                        return this._inited
                    }
                    init() {
                        this.initSubscription(this.handleCDPMessage.bind(this)), this._inited = !0
                    }
                    emit(t) {
                        this.send(t)
                    }
                    reply(t, e) {
                        this.send({
                            id: t,
                            result: e
                        })
                    }
                    on(t, e) {
                        this.callbacks.has(t) || this.callbacks.set(t, []), this.callbacks.get(t).push(e)
                    }
                    off(t, e) {
                        if (this.callbacks.has(t)) {
                            var n = this.callbacks.get(t);
                            n = [...n.filter((t => t !== e))]
                        }
                    }
                    handleCDPMessage(t, e, n) {
                        var r, i, o, s, a;
                        ((s = this.type) === (a = e) || s & a) && ("id" in t ? null === (r = this.callbacks.get("command")) || void 0 === r || r.forEach((e => e(t, n))) : null === (i = this.callbacks.get("event")) || void 0 === i || i.forEach((e => e(t, n))), null === (o = this.callbacks.get("all")) || void 0 === o || o.forEach((e => e(t, n))))
                    }
                };
                a = o([(0, i.b2)(), s("design:paramtypes", [Number])], a)
            },
            8632: (t, e, n) => {
                "use strict";
                n.d(e, {
                    DZ: () => s
                });
                var r = n(3368),
                    i = (n(7728), n(1550)),
                    o = {
                        exports: {}
                    };
                ! function(t) {
                    var e = Object.prototype.hasOwnProperty,
                        n = "~";

                    function r() {}

                    function i(t, e, n) {
                        this.fn = t, this.context = e, this.once = n || !1
                    }

                    function o(t, e, r, o, s) {
                        if ("function" != typeof r) throw new TypeError("The listener must be a function");
                        var a = new i(r, o || t, s),
                            u = n ? n + e : e;
                        return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], a] : t._events[u].push(a) : (t._events[u] = a, t._eventsCount++), t
                    }

                    function s(t, e) {
                        0 == --t._eventsCount ? t._events = new r : delete t._events[e]
                    }

                    function a() {
                        this._events = new r, this._eventsCount = 0
                    }
                    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = !1)), a.prototype.eventNames = function() {
                        var t, r, i = [];
                        if (0 === this._eventsCount) return i;
                        for (r in t = this._events) e.call(t, r) && i.push(n ? r.slice(1) : r);
                        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
                    }, a.prototype.listeners = function(t) {
                        var e = n ? n + t : t,
                            r = this._events[e];
                        if (!r) return [];
                        if (r.fn) return [r.fn];
                        for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
                        return s
                    }, a.prototype.listenerCount = function(t) {
                        var e = n ? n + t : t,
                            r = this._events[e];
                        return r ? r.fn ? 1 : r.length : 0
                    }, a.prototype.emit = function(t, e, r, i, o, s) {
                        var a = n ? n + t : t;
                        if (!this._events[a]) return !1;
                        var u, l, c = this._events[a],
                            h = arguments.length;
                        if (c.fn) {
                            switch (c.once && this.removeListener(t, c.fn, void 0, !0), h) {
                                case 1:
                                    return c.fn.call(c.context), !0;
                                case 2:
                                    return c.fn.call(c.context, e), !0;
                                case 3:
                                    return c.fn.call(c.context, e, r), !0;
                                case 4:
                                    return c.fn.call(c.context, e, r, i), !0;
                                case 5:
                                    return c.fn.call(c.context, e, r, i, o), !0;
                                case 6:
                                    return c.fn.call(c.context, e, r, i, o, s), !0
                            }
                            for (l = 1, u = new Array(h - 1); l < h; l++) u[l - 1] = arguments[l];
                            c.fn.apply(c.context, u)
                        } else {
                            var d, p = c.length;
                            for (l = 0; l < p; l++) switch (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), h) {
                                case 1:
                                    c[l].fn.call(c[l].context);
                                    break;
                                case 2:
                                    c[l].fn.call(c[l].context, e);
                                    break;
                                case 3:
                                    c[l].fn.call(c[l].context, e, r);
                                    break;
                                case 4:
                                    c[l].fn.call(c[l].context, e, r, i);
                                    break;
                                default:
                                    if (!u)
                                        for (d = 1, u = new Array(h - 1); d < h; d++) u[d - 1] = arguments[d];
                                    c[l].fn.apply(c[l].context, u)
                            }
                        }
                        return !0
                    }, a.prototype.on = function(t, e, n) {
                        return o(this, t, e, n, !1)
                    }, a.prototype.once = function(t, e, n) {
                        return o(this, t, e, n, !0)
                    }, a.prototype.removeListener = function(t, e, r, i) {
                        var o = n ? n + t : t;
                        if (!this._events[o]) return this;
                        if (!e) return s(this, o), this;
                        var a = this._events[o];
                        if (a.fn) a.fn !== e || i && !a.once || r && a.context !== r || s(this, o);
                        else {
                            for (var u = 0, l = [], c = a.length; u < c; u++)(a[u].fn !== e || i && !a[u].once || r && a[u].context !== r) && l.push(a[u]);
                            l.length ? this._events[o] = 1 === l.length ? l[0] : l : s(this, o)
                        }
                        return this
                    }, a.prototype.removeAllListeners = function(t) {
                        var e;
                        return t ? (e = n ? n + t : t, this._events[e] && s(this, e)) : (this._events = new r, this._eventsCount = 0), this
                    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, t.exports = a
                }(o), new o.exports.EventEmitter;
                var s = class extends r.A {
                    constructor(t) {
                        super(t), this.eventBus = (() => {
                            var t = Reflect.get(globalThis, Symbol.for("defaultEventBus"));
                            if (t) return t;
                            var e = new o.exports.EventEmitter;
                            return Reflect.set(globalThis, Symbol.for("defaultEventBus"), e), e
                        })(), this.init()
                    }
                    initSubscription(t) {
                        var e = this.type === r.T.Inspector ? "inspector" : "inspectee";
                        this.eventBus.addListener(e, t)
                    }
                    send(t, e = r.T.Inspector) {
                        var n = e === r.T.Inspector ? "inspector" : "inspectee";
                        this.eventBus.emit(n, t, e, this.type)
                    }
                };
                s = (0, r._)([(0, i.b2)(), (0, r.a)("design:paramtypes", [Number])], s)
            },
            3174: (t, e, n) => {
                "use strict";
                n.d(e, {
                    Lm: () => r.T
                }), n(7728);
                var r = n(3368);
                n(1550)
            },
            7115: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.tagProperty = e.tagParameter = e.decorate = void 0;
                var r = n(6211),
                    i = n(1398);

                function o(t, e, n, i, o) {
                    var s = {},
                        a = "number" == typeof o,
                        u = void 0 !== o && a ? o.toString() : n;
                    if (a && void 0 !== n) throw new Error(r.INVALID_DECORATOR_OPERATION);
                    Reflect.hasOwnMetadata(t, e) && (s = Reflect.getMetadata(t, e));
                    var l = s[u];
                    if (Array.isArray(l))
                        for (var c = 0, h = l; c < h.length; c++) {
                            var d = h[c];
                            if (d.key === i.key) throw new Error(r.DUPLICATED_METADATA + " " + d.key.toString())
                        } else l = [];
                    l.push(i), s[u] = l, Reflect.defineMetadata(t, s, e)
                }

                function s(t, e) {
                    Reflect.decorate(t, e)
                }

                function a(t, e) {
                    return function(n, r) {
                        e(n, r, t)
                    }
                }
                e.tagParameter = function(t, e, n, r) {
                    o(i.TAGGED, t, e, r, n)
                }, e.tagProperty = function(t, e, n) {
                    o(i.TAGGED_PROP, t.constructor, e, n)
                }, e.decorate = function(t, e, n) {
                    "number" == typeof n ? s([a(n, t)], e) : "string" == typeof n ? Reflect.decorate([t], e, n) : s([t], e)
                }
            },
            7002: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.inject = e.LazyServiceIdentifer = void 0;
                var r = n(6211),
                    i = n(1398),
                    o = n(7278),
                    s = n(7115),
                    a = function() {
                        function t(t) {
                            this._cb = t
                        }
                        return t.prototype.unwrap = function() {
                            return this._cb()
                        }, t
                    }();
                e.LazyServiceIdentifer = a, e.inject = function(t) {
                    return function(e, n, a) {
                        if (void 0 === t) throw new Error(r.UNDEFINED_INJECT_ANNOTATION(e.name));
                        var u = new o.Metadata(i.INJECT_TAG, t);
                        "number" == typeof a ? s.tagParameter(e, n, a, u) : s.tagProperty(e, n, u)
                    }
                }
            },
            3097: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.injectable = void 0;
                var r = n(6211),
                    i = n(1398);
                e.injectable = function() {
                    return function(t) {
                        if (Reflect.hasOwnMetadata(i.PARAM_TYPES, t)) throw new Error(r.DUPLICATED_INJECTABLE_DECORATOR);
                        var e = Reflect.getMetadata(i.DESIGN_PARAM_TYPES, t) || [];
                        return Reflect.defineMetadata(i.PARAM_TYPES, e, t), t
                    }
                }
            },
            7390: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.multiInject = void 0;
                var r = n(1398),
                    i = n(7278),
                    o = n(7115);
                e.multiInject = function(t) {
                    return function(e, n, s) {
                        var a = new i.Metadata(r.MULTI_INJECT_TAG, t);
                        "number" == typeof s ? o.tagParameter(e, n, s, a) : o.tagProperty(e, n, a)
                    }
                }
            },
            420: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.named = void 0;
                var r = n(1398),
                    i = n(7278),
                    o = n(7115);
                e.named = function(t) {
                    return function(e, n, s) {
                        var a = new i.Metadata(r.NAMED_TAG, t);
                        "number" == typeof s ? o.tagParameter(e, n, s, a) : o.tagProperty(e, n, a)
                    }
                }
            },
            2e3: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.optional = void 0;
                var r = n(1398),
                    i = n(7278),
                    o = n(7115);
                e.optional = function() {
                    return function(t, e, n) {
                        var s = new i.Metadata(r.OPTIONAL_TAG, !0);
                        "number" == typeof n ? o.tagParameter(t, e, n, s) : o.tagProperty(t, e, s)
                    }
                }
            },
            9144: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.postConstruct = void 0;
                var r = n(6211),
                    i = n(1398),
                    o = n(7278);
                e.postConstruct = function() {
                    return function(t, e, n) {
                        var s = new o.Metadata(i.POST_CONSTRUCT, e);
                        if (Reflect.hasOwnMetadata(i.POST_CONSTRUCT, t.constructor)) throw new Error(r.MULTIPLE_POST_CONSTRUCT_METHODS);
                        Reflect.defineMetadata(i.POST_CONSTRUCT, s, t.constructor)
                    }
                }
            },
            9131: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.tagged = void 0;
                var r = n(7278),
                    i = n(7115);
                e.tagged = function(t, e) {
                    return function(n, o, s) {
                        var a = new r.Metadata(t, e);
                        "number" == typeof s ? i.tagParameter(n, o, s, a) : i.tagProperty(n, o, a)
                    }
                }
            },
            4003: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.targetName = void 0;
                var r = n(1398),
                    i = n(7278),
                    o = n(7115);
                e.targetName = function(t) {
                    return function(e, n, s) {
                        var a = new i.Metadata(r.NAME_TAG, t);
                        o.tagParameter(e, n, s, a)
                    }
                }
            },
            2083: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.unmanaged = void 0;
                var r = n(1398),
                    i = n(7278),
                    o = n(7115);
                e.unmanaged = function() {
                    return function(t, e, n) {
                        var s = new i.Metadata(r.UNMANAGED_TAG, !0);
                        o.tagParameter(t, e, n, s)
                    }
                }
            },
            4845: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Binding = void 0;
                var r = n(2913),
                    i = n(3754),
                    o = function() {
                        function t(t, e) {
                            this.id = i.id(), this.activated = !1, this.serviceIdentifier = t, this.scope = e, this.type = r.BindingTypeEnum.Invalid, this.constraint = function(t) {
                                return !0
                            }, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, this.onActivation = null, this.dynamicValue = null
                        }
                        return t.prototype.clone = function() {
                            var e = new t(this.serviceIdentifier, this.scope);
                            return e.activated = e.scope === r.BindingScopeEnum.Singleton && this.activated, e.implementationType = this.implementationType, e.dynamicValue = this.dynamicValue, e.scope = this.scope, e.type = this.type, e.factory = this.factory, e.provider = this.provider, e.constraint = this.constraint, e.onActivation = this.onActivation, e.cache = this.cache, e
                        }, t
                    }();
                e.Binding = o
            },
            5227: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BindingCount = void 0, e.BindingCount = {
                    MultipleBindingsAvailable: 2,
                    NoBindingsAvailable: 0,
                    OnlyOneBindingAvailable: 1
                }
            },
            6211: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.STACK_OVERFLOW = e.CIRCULAR_DEPENDENCY_IN_FACTORY = e.POST_CONSTRUCT_ERROR = e.MULTIPLE_POST_CONSTRUCT_METHODS = e.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = e.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = e.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = e.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = e.ARGUMENTS_LENGTH_MISMATCH = e.INVALID_DECORATOR_OPERATION = e.INVALID_TO_SELF_VALUE = e.INVALID_FUNCTION_BINDING = e.INVALID_MIDDLEWARE_RETURN = e.NO_MORE_SNAPSHOTS_AVAILABLE = e.INVALID_BINDING_TYPE = e.NOT_IMPLEMENTED = e.CIRCULAR_DEPENDENCY = e.UNDEFINED_INJECT_ANNOTATION = e.MISSING_INJECT_ANNOTATION = e.MISSING_INJECTABLE_ANNOTATION = e.NOT_REGISTERED = e.CANNOT_UNBIND = e.AMBIGUOUS_MATCH = e.KEY_NOT_FOUND = e.NULL_ARGUMENT = e.DUPLICATED_METADATA = e.DUPLICATED_INJECTABLE_DECORATOR = void 0, e.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.", e.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:", e.NULL_ARGUMENT = "NULL argument", e.KEY_NOT_FOUND = "Key Not Found", e.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:", e.CANNOT_UNBIND = "Could not unbind serviceIdentifier:", e.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:", e.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:", e.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:", e.UNDEFINED_INJECT_ANNOTATION = function(t) {
                    return "@inject called with undefined this could mean that the class " + t + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."
                }, e.CIRCULAR_DEPENDENCY = "Circular dependency found:", e.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.", e.INVALID_BINDING_TYPE = "Invalid binding type:", e.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.", e.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!", e.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!", e.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier", e.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.", e.ARGUMENTS_LENGTH_MISMATCH = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return "The number of constructor arguments in the derived class " + t[0] + " must be >= than the number of constructor arguments of its base class."
                }, e.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.", e.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').", e.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean", e.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean", e.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class", e.POST_CONSTRUCT_ERROR = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return "@postConstruct error in class " + t[0] + ": " + t[1]
                }, e.CIRCULAR_DEPENDENCY_IN_FACTORY = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return "It looks like there is a circular dependency in one of the '" + t[0] + "' bindings. Please investigate bindings withservice identifier '" + t[1] + "'."
                }, e.STACK_OVERFLOW = "Maximum call stack size exceeded"
            },
            2913: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.TargetTypeEnum = e.BindingTypeEnum = e.BindingScopeEnum = void 0, e.BindingScopeEnum = {
                    Request: "Request",
                    Singleton: "Singleton",
                    Transient: "Transient"
                }, e.BindingTypeEnum = {
                    ConstantValue: "ConstantValue",
                    Constructor: "Constructor",
                    DynamicValue: "DynamicValue",
                    Factory: "Factory",
                    Function: "Function",
                    Instance: "Instance",
                    Invalid: "Invalid",
                    Provider: "Provider"
                }, e.TargetTypeEnum = {
                    ClassProperty: "ClassProperty",
                    ConstructorArgument: "ConstructorArgument",
                    Variable: "Variable"
                }
            },
            1398: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.NON_CUSTOM_TAG_KEYS = e.POST_CONSTRUCT = e.DESIGN_PARAM_TYPES = e.PARAM_TYPES = e.TAGGED_PROP = e.TAGGED = e.MULTI_INJECT_TAG = e.INJECT_TAG = e.OPTIONAL_TAG = e.UNMANAGED_TAG = e.NAME_TAG = e.NAMED_TAG = void 0, e.NAMED_TAG = "named", e.NAME_TAG = "name", e.UNMANAGED_TAG = "unmanaged", e.OPTIONAL_TAG = "optional", e.INJECT_TAG = "inject", e.MULTI_INJECT_TAG = "multi_inject", e.TAGGED = "inversify:tagged", e.TAGGED_PROP = "inversify:tagged_props", e.PARAM_TYPES = "inversify:paramtypes", e.DESIGN_PARAM_TYPES = "design:paramtypes", e.POST_CONSTRUCT = "post_construct", e.NON_CUSTOM_TAG_KEYS = [e.INJECT_TAG, e.MULTI_INJECT_TAG, e.NAME_TAG, e.UNMANAGED_TAG, e.NAMED_TAG, e.OPTIONAL_TAG]
            },
            9241: (t, e, n) => {
                "use strict";
                var r = globalThis && globalThis.__awaiter || function(t, e, n, r) {
                        return new(n || (n = Promise))((function(i, o) {
                            function s(t) {
                                try {
                                    u(r.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    u(r.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function u(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                    t(e)
                                }))).then(s, a)
                            }
                            u((r = r.apply(t, e || [])).next())
                        }))
                    },
                    i = globalThis && globalThis.__generator || function(t, e) {
                        var n, r, i, o, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                            return this
                        }), o;

                        function a(o) {
                            return function(a) {
                                return function(o) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++, {
                                                    value: o[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++, r = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                    s.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && s.label < i[1]) {
                                                    s.label = i[1], i = o;
                                                    break
                                                }
                                                if (i && s.label < i[2]) {
                                                    s.label = i[2], s.ops.push(o);
                                                    break
                                                }
                                                i[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        o = e.call(t, s)
                                    } catch (t) {
                                        o = [6, t], r = 0
                                    } finally {
                                        n = i = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {
                                        value: o[0] ? o[1] : void 0,
                                        done: !0
                                    }
                                }([o, a])
                            }
                        }
                    },
                    o = globalThis && globalThis.__spreadArray || function(t, e) {
                        for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n];
                        return t
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Container = void 0;
                var s = n(4845),
                    a = n(6211),
                    u = n(2913),
                    l = n(1398),
                    c = n(8292),
                    h = n(2541),
                    d = n(625),
                    p = n(4795),
                    f = n(3754),
                    g = n(7394),
                    v = n(371),
                    m = n(9090),
                    y = function() {
                        function t(t) {
                            this._appliedMiddleware = [];
                            var e = t || {};
                            if ("object" != typeof e) throw new Error("" + a.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
                            if (void 0 === e.defaultScope) e.defaultScope = u.BindingScopeEnum.Transient;
                            else if (e.defaultScope !== u.BindingScopeEnum.Singleton && e.defaultScope !== u.BindingScopeEnum.Transient && e.defaultScope !== u.BindingScopeEnum.Request) throw new Error("" + a.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
                            if (void 0 === e.autoBindInjectable) e.autoBindInjectable = !1;
                            else if ("boolean" != typeof e.autoBindInjectable) throw new Error("" + a.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
                            if (void 0 === e.skipBaseClassChecks) e.skipBaseClassChecks = !1;
                            else if ("boolean" != typeof e.skipBaseClassChecks) throw new Error("" + a.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
                            this.options = {
                                autoBindInjectable: e.autoBindInjectable,
                                defaultScope: e.defaultScope,
                                skipBaseClassChecks: e.skipBaseClassChecks
                            }, this.id = f.id(), this._bindingDictionary = new m.Lookup, this._snapshots = [], this._middleware = null, this.parent = null, this._metadataReader = new c.MetadataReader
                        }
                        return t.merge = function(e, n) {
                            for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                            var s = new t,
                                a = o([e, n], r).map((function(t) {
                                    return h.getBindingDictionary(t)
                                })),
                                u = h.getBindingDictionary(s);
                            return a.forEach((function(t) {
                                var e;
                                e = u, t.traverse((function(t, n) {
                                    n.forEach((function(t) {
                                        e.add(t.serviceIdentifier, t.clone())
                                    }))
                                }))
                            })), s
                        }, t.prototype.load = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            for (var n = this._getContainerModuleHelpersFactory(), r = 0, i = t; r < i.length; r++) {
                                var o = i[r],
                                    s = n(o.id);
                                o.registry(s.bindFunction, s.unbindFunction, s.isboundFunction, s.rebindFunction)
                            }
                        }, t.prototype.loadAsync = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return r(this, void 0, void 0, (function() {
                                var e, n, r, o, s;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            e = this._getContainerModuleHelpersFactory(), n = 0, r = t, i.label = 1;
                                        case 1:
                                            return n < r.length ? (o = r[n], s = e(o.id), [4, o.registry(s.bindFunction, s.unbindFunction, s.isboundFunction, s.rebindFunction)]) : [3, 4];
                                        case 2:
                                            i.sent(), i.label = 3;
                                        case 3:
                                            return n++, [3, 1];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.unload = function() {
                            for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            e.forEach((function(e) {
                                var n, r = (n = e.id, function(t) {
                                    return t.moduleId === n
                                });
                                t._bindingDictionary.removeByCondition(r)
                            }))
                        }, t.prototype.bind = function(t) {
                            var e = this.options.defaultScope || u.BindingScopeEnum.Transient,
                                n = new s.Binding(t, e);
                            return this._bindingDictionary.add(t, n), new p.BindingToSyntax(n)
                        }, t.prototype.rebind = function(t) {
                            return this.unbind(t), this.bind(t)
                        }, t.prototype.unbind = function(t) {
                            try {
                                this._bindingDictionary.remove(t)
                            } catch (e) {
                                throw new Error(a.CANNOT_UNBIND + " " + g.getServiceIdentifierAsString(t))
                            }
                        }, t.prototype.unbindAll = function() {
                            this._bindingDictionary = new m.Lookup
                        }, t.prototype.isBound = function(t) {
                            var e = this._bindingDictionary.hasKey(t);
                            return !e && this.parent && (e = this.parent.isBound(t)), e
                        }, t.prototype.isBoundNamed = function(t, e) {
                            return this.isBoundTagged(t, l.NAMED_TAG, e)
                        }, t.prototype.isBoundTagged = function(t, e, n) {
                            var r = !1;
                            if (this._bindingDictionary.hasKey(t)) {
                                var i = this._bindingDictionary.get(t),
                                    o = h.createMockRequest(this, t, e, n);
                                r = i.some((function(t) {
                                    return t.constraint(o)
                                }))
                            }
                            return !r && this.parent && (r = this.parent.isBoundTagged(t, e, n)), r
                        }, t.prototype.snapshot = function() {
                            this._snapshots.push(v.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware))
                        }, t.prototype.restore = function() {
                            var t = this._snapshots.pop();
                            if (void 0 === t) throw new Error(a.NO_MORE_SNAPSHOTS_AVAILABLE);
                            this._bindingDictionary = t.bindings, this._middleware = t.middleware
                        }, t.prototype.createChild = function(e) {
                            var n = new t(e || this.options);
                            return n.parent = this, n
                        }, t.prototype.applyMiddleware = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            this._appliedMiddleware = this._appliedMiddleware.concat(t);
                            var n = this._middleware ? this._middleware : this._planAndResolve();
                            this._middleware = t.reduce((function(t, e) {
                                return e(t)
                            }), n)
                        }, t.prototype.applyCustomMetadataReader = function(t) {
                            this._metadataReader = t
                        }, t.prototype.get = function(t) {
                            return this._get(!1, !1, u.TargetTypeEnum.Variable, t)
                        }, t.prototype.getTagged = function(t, e, n) {
                            return this._get(!1, !1, u.TargetTypeEnum.Variable, t, e, n)
                        }, t.prototype.getNamed = function(t, e) {
                            return this.getTagged(t, l.NAMED_TAG, e)
                        }, t.prototype.getAll = function(t) {
                            return this._get(!0, !0, u.TargetTypeEnum.Variable, t)
                        }, t.prototype.getAllTagged = function(t, e, n) {
                            return this._get(!1, !0, u.TargetTypeEnum.Variable, t, e, n)
                        }, t.prototype.getAllNamed = function(t, e) {
                            return this.getAllTagged(t, l.NAMED_TAG, e)
                        }, t.prototype.resolve = function(t) {
                            var e = this.createChild();
                            return e.bind(t).toSelf(), this._appliedMiddleware.forEach((function(t) {
                                e.applyMiddleware(t)
                            })), e.get(t)
                        }, t.prototype._getContainerModuleHelpersFactory = function() {
                            var t = this,
                                e = function(t, e) {
                                    t._binding.moduleId = e
                                },
                                n = function(n) {
                                    return function(r) {
                                        var i = t.rebind.bind(t)(r);
                                        return e(i, n), i
                                    }
                                };
                            return function(r) {
                                return {
                                    bindFunction: (i = r, function(n) {
                                        var r = t.bind.bind(t)(n);
                                        return e(r, i), r
                                    }),
                                    isboundFunction: function(e) {
                                        return t.isBound.bind(t)(e)
                                    },
                                    rebindFunction: n(r),
                                    unbindFunction: function(e) {
                                        t.unbind.bind(t)(e)
                                    }
                                };
                                var i
                            }
                        }, t.prototype._get = function(t, e, n, r, i, o) {
                            var s = null,
                                u = {
                                    avoidConstraints: t,
                                    contextInterceptor: function(t) {
                                        return t
                                    },
                                    isMultiInject: e,
                                    key: i,
                                    serviceIdentifier: r,
                                    targetType: n,
                                    value: o
                                };
                            if (this._middleware) {
                                if (null == (s = this._middleware(u))) throw new Error(a.INVALID_MIDDLEWARE_RETURN)
                            } else s = this._planAndResolve()(u);
                            return s
                        }, t.prototype._planAndResolve = function() {
                            var t = this;
                            return function(e) {
                                var n = h.plan(t._metadataReader, t, e.isMultiInject, e.targetType, e.serviceIdentifier, e.key, e.value, e.avoidConstraints);
                                return n = e.contextInterceptor(n), d.resolve(n)
                            }
                        }, t
                    }();
                e.Container = y
            },
            6731: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.AsyncContainerModule = e.ContainerModule = void 0;
                var r = n(3754);
                e.ContainerModule = function(t) {
                    this.id = r.id(), this.registry = t
                };
                e.AsyncContainerModule = function(t) {
                    this.id = r.id(), this.registry = t
                }
            },
            371: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ContainerSnapshot = void 0;
                var n = function() {
                    function t() {}
                    return t.of = function(e, n) {
                        var r = new t;
                        return r.bindings = e, r.middleware = n, r
                    }, t
                }();
                e.ContainerSnapshot = n
            },
            9090: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Lookup = void 0;
                var r = n(6211),
                    i = function() {
                        function t() {
                            this._map = new Map
                        }
                        return t.prototype.getMap = function() {
                            return this._map
                        }, t.prototype.add = function(t, e) {
                            if (null == t) throw new Error(r.NULL_ARGUMENT);
                            if (null == e) throw new Error(r.NULL_ARGUMENT);
                            var n = this._map.get(t);
                            void 0 !== n ? (n.push(e), this._map.set(t, n)) : this._map.set(t, [e])
                        }, t.prototype.get = function(t) {
                            if (null == t) throw new Error(r.NULL_ARGUMENT);
                            var e = this._map.get(t);
                            if (void 0 !== e) return e;
                            throw new Error(r.KEY_NOT_FOUND)
                        }, t.prototype.remove = function(t) {
                            if (null == t) throw new Error(r.NULL_ARGUMENT);
                            if (!this._map.delete(t)) throw new Error(r.KEY_NOT_FOUND)
                        }, t.prototype.removeByCondition = function(t) {
                            var e = this;
                            this._map.forEach((function(n, r) {
                                var i = n.filter((function(e) {
                                    return !t(e)
                                }));
                                i.length > 0 ? e._map.set(r, i) : e._map.delete(r)
                            }))
                        }, t.prototype.hasKey = function(t) {
                            if (null == t) throw new Error(r.NULL_ARGUMENT);
                            return this._map.has(t)
                        }, t.prototype.clone = function() {
                            var e = new t;
                            return this._map.forEach((function(t, n) {
                                t.forEach((function(t) {
                                    return e.add(n, t.clone())
                                }))
                            })), e
                        }, t.prototype.traverse = function(t) {
                            this._map.forEach((function(e, n) {
                                t(n, e)
                            }))
                        }, t
                    }();
                e.Lookup = i
            },
            1550: (t, e, n) => {
                "use strict";
                e.jt = e.f3 = e.t6 = e.b2 = e.W2 = void 0, n(1398);
                var r = n(9241);
                Object.defineProperty(e, "W2", {
                    enumerable: !0,
                    get: function() {
                        return r.Container
                    }
                });
                n(2913), n(6731);
                var i = n(3097);
                Object.defineProperty(e, "b2", {
                    enumerable: !0,
                    get: function() {
                        return i.injectable
                    }
                });
                n(9131);
                var o = n(420);
                Object.defineProperty(e, "t6", {
                    enumerable: !0,
                    get: function() {
                        return o.named
                    }
                });
                var s = n(7002);
                Object.defineProperty(e, "f3", {
                    enumerable: !0,
                    get: function() {
                        return s.inject
                    }
                });
                var a = n(2e3);
                Object.defineProperty(e, "jt", {
                    enumerable: !0,
                    get: function() {
                        return a.optional
                    }
                });
                n(2083), n(7390), n(4003), n(9144), n(8292), n(3754), n(7115), n(5684), n(7394), n(5783)
            },
            3058: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Context = void 0;
                var r = n(3754),
                    i = function() {
                        function t(t) {
                            this.id = r.id(), this.container = t
                        }
                        return t.prototype.addPlan = function(t) {
                            this.plan = t
                        }, t.prototype.setCurrentRequest = function(t) {
                            this.currentRequest = t
                        }, t
                    }();
                e.Context = i
            },
            7278: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Metadata = void 0;
                var r = n(1398),
                    i = function() {
                        function t(t, e) {
                            this.key = t, this.value = e
                        }
                        return t.prototype.toString = function() {
                            return this.key === r.NAMED_TAG ? "named: " + this.value.toString() + " " : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }"
                        }, t
                    }();
                e.Metadata = i
            },
            8292: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.MetadataReader = void 0;
                var r = n(1398),
                    i = function() {
                        function t() {}
                        return t.prototype.getConstructorMetadata = function(t) {
                            return {
                                compilerGeneratedMetadata: Reflect.getMetadata(r.PARAM_TYPES, t),
                                userGeneratedMetadata: Reflect.getMetadata(r.TAGGED, t) || {}
                            }
                        }, t.prototype.getPropertiesMetadata = function(t) {
                            return Reflect.getMetadata(r.TAGGED_PROP, t) || []
                        }, t
                    }();
                e.MetadataReader = i
            },
            3788: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Plan = void 0;
                e.Plan = function(t, e) {
                    this.parentContext = t, this.rootRequest = e
                }
            },
            2541: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getBindingDictionary = e.createMockRequest = e.plan = void 0;
                var r = n(5227),
                    i = n(6211),
                    o = n(2913),
                    s = n(1398),
                    a = n(8363),
                    u = n(7394),
                    l = n(3058),
                    c = n(7278),
                    h = n(3788),
                    d = n(6405),
                    p = n(5617),
                    f = n(7378);

                function g(t) {
                    return t._bindingDictionary
                }

                function v(t, e, n, o, s) {
                    var a, l = y(n.container, s.serviceIdentifier);
                    return l.length === r.BindingCount.NoBindingsAvailable && n.container.options.autoBindInjectable && "function" == typeof s.serviceIdentifier && t.getConstructorMetadata(s.serviceIdentifier).compilerGeneratedMetadata && (n.container.bind(s.serviceIdentifier).toSelf(), l = y(n.container, s.serviceIdentifier)), a = e ? l : l.filter((function(t) {
                            var e = new p.Request(t.serviceIdentifier, n, o, t, s);
                            return t.constraint(e)
                        })),
                        function(t, e, n, o) {
                            switch (e.length) {
                                case r.BindingCount.NoBindingsAvailable:
                                    if (n.isOptional()) return e;
                                    var s = u.getServiceIdentifierAsString(t),
                                        a = i.NOT_REGISTERED;
                                    throw a += u.listMetadataForTarget(s, n), a += u.listRegisteredBindingsForServiceIdentifier(o, s, y), new Error(a);
                                case r.BindingCount.OnlyOneBindingAvailable:
                                    if (!n.isArray()) return e;
                                case r.BindingCount.MultipleBindingsAvailable:
                                default:
                                    if (n.isArray()) return e;
                                    throw s = u.getServiceIdentifierAsString(t), a = i.AMBIGUOUS_MATCH + " " + s, a += u.listRegisteredBindingsForServiceIdentifier(o, s, y), new Error(a)
                            }
                        }(s.serviceIdentifier, a, s, n.container), a
                }

                function m(t, e, n, r, s, a) {
                    var u, l;
                    if (null === s) {
                        u = v(t, e, r, null, a), l = new p.Request(n, r, null, u, a);
                        var c = new h.Plan(r, l);
                        r.addPlan(c)
                    } else u = v(t, e, r, s, a), l = s.addChildRequest(a.serviceIdentifier, u, a);
                    u.forEach((function(e) {
                        var n = null;
                        if (a.isArray()) n = l.addChildRequest(e.serviceIdentifier, e, a);
                        else {
                            if (e.cache) return;
                            n = l
                        }
                        if (e.type === o.BindingTypeEnum.Instance && null !== e.implementationType) {
                            var s = d.getDependencies(t, e.implementationType);
                            if (!r.container.options.skipBaseClassChecks) {
                                var u = d.getBaseClassDependencyCount(t, e.implementationType);
                                if (s.length < u) {
                                    var c = i.ARGUMENTS_LENGTH_MISMATCH(d.getFunctionName(e.implementationType));
                                    throw new Error(c)
                                }
                            }
                            s.forEach((function(e) {
                                m(t, !1, e.serviceIdentifier, r, n, e)
                            }))
                        }
                    }))
                }

                function y(t, e) {
                    var n = [],
                        r = g(t);
                    return r.hasKey(e) ? n = r.get(e) : null !== t.parent && (n = y(t.parent, e)), n
                }
                e.getBindingDictionary = g, e.plan = function(t, e, n, r, i, o, h, d) {
                    void 0 === d && (d = !1);
                    var p = new l.Context(e),
                        g = function(t, e, n, r, i, o) {
                            var a = t ? s.MULTI_INJECT_TAG : s.INJECT_TAG,
                                u = new c.Metadata(a, n),
                                l = new f.Target(e, "", n, u);
                            if (void 0 !== i) {
                                var h = new c.Metadata(i, o);
                                l.metadata.push(h)
                            }
                            return l
                        }(n, r, i, 0, o, h);
                    try {
                        return m(t, d, i, p, null, g), p
                    } catch (t) {
                        throw a.isStackOverflowExeption(t) && p.plan && u.circularDependencyToException(p.plan.rootRequest), t
                    }
                }, e.createMockRequest = function(t, e, n, r) {
                    var i = new f.Target(o.TargetTypeEnum.Variable, "", e, new c.Metadata(n, r)),
                        s = new l.Context(t);
                    return new p.Request(e, s, null, [], i)
                }
            },
            9208: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.QueryableString = void 0;
                var n = function() {
                    function t(t) {
                        this.str = t
                    }
                    return t.prototype.startsWith = function(t) {
                        return 0 === this.str.indexOf(t)
                    }, t.prototype.endsWith = function(t) {
                        var e, n = t.split("").reverse().join("");
                        return e = this.str.split("").reverse().join(""), this.startsWith.call({
                            str: e
                        }, n)
                    }, t.prototype.contains = function(t) {
                        return -1 !== this.str.indexOf(t)
                    }, t.prototype.equals = function(t) {
                        return this.str === t
                    }, t.prototype.value = function() {
                        return this.str
                    }, t
                }();
                e.QueryableString = n
            },
            6405: (t, e, n) => {
                "use strict";
                var r = globalThis && globalThis.__spreadArray || function(t, e) {
                    for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n];
                    return t
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getFunctionName = e.getBaseClassDependencyCount = e.getDependencies = void 0;
                var i = n(7002),
                    o = n(6211),
                    s = n(2913),
                    a = n(1398),
                    u = n(7394);
                Object.defineProperty(e, "getFunctionName", {
                    enumerable: !0,
                    get: function() {
                        return u.getFunctionName
                    }
                });
                var l = n(7378);

                function c(t, e, n, i) {
                    var s = t.getConstructorMetadata(n),
                        a = s.compilerGeneratedMetadata;
                    if (void 0 === a) {
                        var u = o.MISSING_INJECTABLE_ANNOTATION + " " + e + ".";
                        throw new Error(u)
                    }
                    var l = s.userGeneratedMetadata,
                        c = Object.keys(l),
                        p = 0 === n.length && c.length > 0,
                        f = c.length > n.length,
                        g = function(t, e, n, r, i) {
                            for (var o = [], s = 0; s < i; s++) {
                                var a = h(s, t, e, n, r);
                                null !== a && o.push(a)
                            }
                            return o
                        }(i, e, a, l, p || f ? c.length : n.length),
                        v = d(t, n);
                    return r(r([], g), v)
                }

                function h(t, e, n, r, a) {
                    var u = a[t.toString()] || [],
                        c = p(u),
                        h = !0 !== c.unmanaged,
                        d = r[t];
                    if ((d = c.inject || c.multiInject || d) instanceof i.LazyServiceIdentifer && (d = d.unwrap()), h) {
                        if (!e && (d === Object || d === Function || void 0 === d)) {
                            var f = o.MISSING_INJECT_ANNOTATION + " argument " + t + " in class " + n + ".";
                            throw new Error(f)
                        }
                        var g = new l.Target(s.TargetTypeEnum.ConstructorArgument, c.targetName, d);
                        return g.metadata = u, g
                    }
                    return null
                }

                function d(t, e) {
                    for (var n = t.getPropertiesMetadata(e), i = [], o = 0, a = Object.keys(n); o < a.length; o++) {
                        var u = a[o],
                            c = n[u],
                            h = p(n[u]),
                            f = h.targetName || u,
                            g = h.inject || h.multiInject,
                            v = new l.Target(s.TargetTypeEnum.ClassProperty, f, g);
                        v.metadata = c, i.push(v)
                    }
                    var m = Object.getPrototypeOf(e.prototype).constructor;
                    if (m !== Object) {
                        var y = d(t, m);
                        i = r(r([], i), y)
                    }
                    return i
                }

                function p(t) {
                    var e = {};
                    return t.forEach((function(t) {
                        e[t.key.toString()] = t.value
                    })), {
                        inject: e[a.INJECT_TAG],
                        multiInject: e[a.MULTI_INJECT_TAG],
                        targetName: e[a.NAME_TAG],
                        unmanaged: e[a.UNMANAGED_TAG]
                    }
                }
                e.getDependencies = function(t, e) {
                    return c(t, u.getFunctionName(e), e, !1)
                }, e.getBaseClassDependencyCount = function t(e, n) {
                    var r = Object.getPrototypeOf(n.prototype).constructor;
                    if (r !== Object) {
                        var i = c(e, u.getFunctionName(r), r, !0),
                            o = i.map((function(t) {
                                return t.metadata.filter((function(t) {
                                    return t.key === a.UNMANAGED_TAG
                                }))
                            })),
                            s = [].concat.apply([], o).length,
                            l = i.length - s;
                        return l > 0 ? l : t(e, r)
                    }
                    return 0
                }
            },
            5617: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Request = void 0;
                var r = n(3754),
                    i = function() {
                        function t(t, e, n, i, o) {
                            this.id = r.id(), this.serviceIdentifier = t, this.parentContext = e, this.parentRequest = n, this.target = o, this.childRequests = [], this.bindings = Array.isArray(i) ? i : [i], this.requestScope = null === n ? new Map : null
                        }
                        return t.prototype.addChildRequest = function(e, n, r) {
                            var i = new t(e, this.parentContext, this, n, r);
                            return this.childRequests.push(i), i
                        }, t
                    }();
                e.Request = i
            },
            7378: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Target = void 0;
                var r = n(1398),
                    i = n(3754),
                    o = n(7278),
                    s = n(9208),
                    a = function() {
                        function t(t, e, n, a) {
                            this.id = i.id(), this.type = t, this.serviceIdentifier = n, this.name = new s.QueryableString(e || ""), this.metadata = new Array;
                            var u = null;
                            "string" == typeof a ? u = new o.Metadata(r.NAMED_TAG, a) : a instanceof o.Metadata && (u = a), null !== u && this.metadata.push(u)
                        }
                        return t.prototype.hasTag = function(t) {
                            for (var e = 0, n = this.metadata; e < n.length; e++)
                                if (n[e].key === t) return !0;
                            return !1
                        }, t.prototype.isArray = function() {
                            return this.hasTag(r.MULTI_INJECT_TAG)
                        }, t.prototype.matchesArray = function(t) {
                            return this.matchesTag(r.MULTI_INJECT_TAG)(t)
                        }, t.prototype.isNamed = function() {
                            return this.hasTag(r.NAMED_TAG)
                        }, t.prototype.isTagged = function() {
                            return this.metadata.some((function(t) {
                                return r.NON_CUSTOM_TAG_KEYS.every((function(e) {
                                    return t.key !== e
                                }))
                            }))
                        }, t.prototype.isOptional = function() {
                            return this.matchesTag(r.OPTIONAL_TAG)(!0)
                        }, t.prototype.getNamedTag = function() {
                            return this.isNamed() ? this.metadata.filter((function(t) {
                                return t.key === r.NAMED_TAG
                            }))[0] : null
                        }, t.prototype.getCustomTags = function() {
                            return this.isTagged() ? this.metadata.filter((function(t) {
                                return r.NON_CUSTOM_TAG_KEYS.every((function(e) {
                                    return t.key !== e
                                }))
                            })) : null
                        }, t.prototype.matchesNamedTag = function(t) {
                            return this.matchesTag(r.NAMED_TAG)(t)
                        }, t.prototype.matchesTag = function(t) {
                            var e = this;
                            return function(n) {
                                for (var r = 0, i = e.metadata; r < i.length; r++) {
                                    var o = i[r];
                                    if (o.key === t && o.value === n) return !0
                                }
                                return !1
                            }
                        }, t
                    }();
                e.Target = a
            },
            4815: (t, e, n) => {
                "use strict";
                var r = globalThis && globalThis.__spreadArray || function(t, e) {
                    for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n];
                    return t
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.resolveInstance = void 0;
                var i = n(6211),
                    o = n(2913),
                    s = n(1398);
                e.resolveInstance = function(t, e, n) {
                    var a, u, l = null;
                    if (e.length > 0) {
                        var c = e.filter((function(t) {
                            return null !== t.target && t.target.type === o.TargetTypeEnum.ConstructorArgument
                        })).map(n);
                        u = c, l = function(t, e, n) {
                            var r = e.filter((function(t) {
                                    return null !== t.target && t.target.type === o.TargetTypeEnum.ClassProperty
                                })),
                                i = r.map(n);
                            return r.forEach((function(e, n) {
                                var r;
                                r = e.target.name.value();
                                var o = i[n];
                                t[r] = o
                            })), t
                        }(l = new((a = t).bind.apply(a, r([void 0], u))), e, n)
                    } else l = new t;
                    return function(t, e) {
                        if (Reflect.hasMetadata(s.POST_CONSTRUCT, t)) {
                            var n = Reflect.getMetadata(s.POST_CONSTRUCT, t);
                            try {
                                e[n.value]()
                            } catch (e) {
                                throw new Error(i.POST_CONSTRUCT_ERROR(t.name, e.message))
                            }
                        }
                    }(t, l), l
                }
            },
            625: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.resolve = void 0;
                var r = n(6211),
                    i = n(2913),
                    o = n(8363),
                    s = n(7394),
                    a = n(4815),
                    u = function(t, e, n) {
                        try {
                            return n()
                        } catch (n) {
                            throw o.isStackOverflowExeption(n) ? new Error(r.CIRCULAR_DEPENDENCY_IN_FACTORY(t, e.toString())) : n
                        }
                    },
                    l = function(t) {
                        return function(e) {
                            e.parentContext.setCurrentRequest(e);
                            var n = e.bindings,
                                o = e.childRequests,
                                c = e.target && e.target.isArray(),
                                h = !(e.parentRequest && e.parentRequest.target && e.target && e.parentRequest.target.matchesArray(e.target.serviceIdentifier));
                            if (c && h) return o.map((function(e) {
                                return l(t)(e)
                            }));
                            var d = null;
                            if (!e.target.isOptional() || 0 !== n.length) {
                                var p = n[0],
                                    f = p.scope === i.BindingScopeEnum.Singleton,
                                    g = p.scope === i.BindingScopeEnum.Request;
                                if (f && p.activated) return p.cache;
                                if (g && null !== t && t.has(p.id)) return t.get(p.id);
                                if (p.type === i.BindingTypeEnum.ConstantValue) d = p.cache, p.activated = !0;
                                else if (p.type === i.BindingTypeEnum.Function) d = p.cache, p.activated = !0;
                                else if (p.type === i.BindingTypeEnum.Constructor) d = p.implementationType;
                                else if (p.type === i.BindingTypeEnum.DynamicValue && null !== p.dynamicValue) d = u("toDynamicValue", p.serviceIdentifier, (function() {
                                    return p.dynamicValue(e.parentContext)
                                }));
                                else if (p.type === i.BindingTypeEnum.Factory && null !== p.factory) d = u("toFactory", p.serviceIdentifier, (function() {
                                    return p.factory(e.parentContext)
                                }));
                                else if (p.type === i.BindingTypeEnum.Provider && null !== p.provider) d = u("toProvider", p.serviceIdentifier, (function() {
                                    return p.provider(e.parentContext)
                                }));
                                else {
                                    if (p.type !== i.BindingTypeEnum.Instance || null === p.implementationType) {
                                        var v = s.getServiceIdentifierAsString(e.serviceIdentifier);
                                        throw new Error(r.INVALID_BINDING_TYPE + " " + v)
                                    }
                                    d = a.resolveInstance(p.implementationType, o, l(t))
                                }
                                return "function" == typeof p.onActivation && (d = p.onActivation(e.parentContext, d)), f && (p.cache = d, p.activated = !0), g && null !== t && !t.has(p.id) && t.set(p.id, d), d
                            }
                        }
                    };
                e.resolve = function(t) {
                    return l(t.plan.rootRequest.requestScope)(t.plan.rootRequest)
                }
            },
            2919: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BindingInSyntax = void 0;
                var r = n(2913),
                    i = n(4670),
                    o = function() {
                        function t(t) {
                            this._binding = t
                        }
                        return t.prototype.inRequestScope = function() {
                            return this._binding.scope = r.BindingScopeEnum.Request, new i.BindingWhenOnSyntax(this._binding)
                        }, t.prototype.inSingletonScope = function() {
                            return this._binding.scope = r.BindingScopeEnum.Singleton, new i.BindingWhenOnSyntax(this._binding)
                        }, t.prototype.inTransientScope = function() {
                            return this._binding.scope = r.BindingScopeEnum.Transient, new i.BindingWhenOnSyntax(this._binding)
                        }, t
                    }();
                e.BindingInSyntax = o
            },
            9215: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BindingInWhenOnSyntax = void 0;
                var r = n(2919),
                    i = n(2812),
                    o = n(4364),
                    s = function() {
                        function t(t) {
                            this._binding = t, this._bindingWhenSyntax = new o.BindingWhenSyntax(this._binding), this._bindingOnSyntax = new i.BindingOnSyntax(this._binding), this._bindingInSyntax = new r.BindingInSyntax(t)
                        }
                        return t.prototype.inRequestScope = function() {
                            return this._bindingInSyntax.inRequestScope()
                        }, t.prototype.inSingletonScope = function() {
                            return this._bindingInSyntax.inSingletonScope()
                        }, t.prototype.inTransientScope = function() {
                            return this._bindingInSyntax.inTransientScope()
                        }, t.prototype.when = function(t) {
                            return this._bindingWhenSyntax.when(t)
                        }, t.prototype.whenTargetNamed = function(t) {
                            return this._bindingWhenSyntax.whenTargetNamed(t)
                        }, t.prototype.whenTargetIsDefault = function() {
                            return this._bindingWhenSyntax.whenTargetIsDefault()
                        }, t.prototype.whenTargetTagged = function(t, e) {
                            return this._bindingWhenSyntax.whenTargetTagged(t, e)
                        }, t.prototype.whenInjectedInto = function(t) {
                            return this._bindingWhenSyntax.whenInjectedInto(t)
                        }, t.prototype.whenParentNamed = function(t) {
                            return this._bindingWhenSyntax.whenParentNamed(t)
                        }, t.prototype.whenParentTagged = function(t, e) {
                            return this._bindingWhenSyntax.whenParentTagged(t, e)
                        }, t.prototype.whenAnyAncestorIs = function(t) {
                            return this._bindingWhenSyntax.whenAnyAncestorIs(t)
                        }, t.prototype.whenNoAncestorIs = function(t) {
                            return this._bindingWhenSyntax.whenNoAncestorIs(t)
                        }, t.prototype.whenAnyAncestorNamed = function(t) {
                            return this._bindingWhenSyntax.whenAnyAncestorNamed(t)
                        }, t.prototype.whenAnyAncestorTagged = function(t, e) {
                            return this._bindingWhenSyntax.whenAnyAncestorTagged(t, e)
                        }, t.prototype.whenNoAncestorNamed = function(t) {
                            return this._bindingWhenSyntax.whenNoAncestorNamed(t)
                        }, t.prototype.whenNoAncestorTagged = function(t, e) {
                            return this._bindingWhenSyntax.whenNoAncestorTagged(t, e)
                        }, t.prototype.whenAnyAncestorMatches = function(t) {
                            return this._bindingWhenSyntax.whenAnyAncestorMatches(t)
                        }, t.prototype.whenNoAncestorMatches = function(t) {
                            return this._bindingWhenSyntax.whenNoAncestorMatches(t)
                        }, t.prototype.onActivation = function(t) {
                            return this._bindingOnSyntax.onActivation(t)
                        }, t
                    }();
                e.BindingInWhenOnSyntax = s
            },
            2812: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BindingOnSyntax = void 0;
                var r = n(4364),
                    i = function() {
                        function t(t) {
                            this._binding = t
                        }
                        return t.prototype.onActivation = function(t) {
                            return this._binding.onActivation = t, new r.BindingWhenSyntax(this._binding)
                        }, t
                    }();
                e.BindingOnSyntax = i
            },
            4795: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BindingToSyntax = void 0;
                var r = n(6211),
                    i = n(2913),
                    o = n(9215),
                    s = n(4670),
                    a = function() {
                        function t(t) {
                            this._binding = t
                        }
                        return t.prototype.to = function(t) {
                            return this._binding.type = i.BindingTypeEnum.Instance, this._binding.implementationType = t, new o.BindingInWhenOnSyntax(this._binding)
                        }, t.prototype.toSelf = function() {
                            if ("function" != typeof this._binding.serviceIdentifier) throw new Error("" + r.INVALID_TO_SELF_VALUE);
                            var t = this._binding.serviceIdentifier;
                            return this.to(t)
                        }, t.prototype.toConstantValue = function(t) {
                            return this._binding.type = i.BindingTypeEnum.ConstantValue, this._binding.cache = t, this._binding.dynamicValue = null, this._binding.implementationType = null, this._binding.scope = i.BindingScopeEnum.Singleton, new s.BindingWhenOnSyntax(this._binding)
                        }, t.prototype.toDynamicValue = function(t) {
                            return this._binding.type = i.BindingTypeEnum.DynamicValue, this._binding.cache = null, this._binding.dynamicValue = t, this._binding.implementationType = null, new o.BindingInWhenOnSyntax(this._binding)
                        }, t.prototype.toConstructor = function(t) {
                            return this._binding.type = i.BindingTypeEnum.Constructor, this._binding.implementationType = t, this._binding.scope = i.BindingScopeEnum.Singleton, new s.BindingWhenOnSyntax(this._binding)
                        }, t.prototype.toFactory = function(t) {
                            return this._binding.type = i.BindingTypeEnum.Factory, this._binding.factory = t, this._binding.scope = i.BindingScopeEnum.Singleton, new s.BindingWhenOnSyntax(this._binding)
                        }, t.prototype.toFunction = function(t) {
                            if ("function" != typeof t) throw new Error(r.INVALID_FUNCTION_BINDING);
                            var e = this.toConstantValue(t);
                            return this._binding.type = i.BindingTypeEnum.Function, this._binding.scope = i.BindingScopeEnum.Singleton, e
                        }, t.prototype.toAutoFactory = function(t) {
                            return this._binding.type = i.BindingTypeEnum.Factory, this._binding.factory = function(e) {
                                return function() {
                                    return e.container.get(t)
                                }
                            }, this._binding.scope = i.BindingScopeEnum.Singleton, new s.BindingWhenOnSyntax(this._binding)
                        }, t.prototype.toProvider = function(t) {
                            return this._binding.type = i.BindingTypeEnum.Provider, this._binding.provider = t, this._binding.scope = i.BindingScopeEnum.Singleton, new s.BindingWhenOnSyntax(this._binding)
                        }, t.prototype.toService = function(t) {
                            this.toDynamicValue((function(e) {
                                return e.container.get(t)
                            }))
                        }, t
                    }();
                e.BindingToSyntax = a
            },
            4670: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BindingWhenOnSyntax = void 0;
                var r = n(2812),
                    i = n(4364),
                    o = function() {
                        function t(t) {
                            this._binding = t, this._bindingWhenSyntax = new i.BindingWhenSyntax(this._binding), this._bindingOnSyntax = new r.BindingOnSyntax(this._binding)
                        }
                        return t.prototype.when = function(t) {
                            return this._bindingWhenSyntax.when(t)
                        }, t.prototype.whenTargetNamed = function(t) {
                            return this._bindingWhenSyntax.whenTargetNamed(t)
                        }, t.prototype.whenTargetIsDefault = function() {
                            return this._bindingWhenSyntax.whenTargetIsDefault()
                        }, t.prototype.whenTargetTagged = function(t, e) {
                            return this._bindingWhenSyntax.whenTargetTagged(t, e)
                        }, t.prototype.whenInjectedInto = function(t) {
                            return this._bindingWhenSyntax.whenInjectedInto(t)
                        }, t.prototype.whenParentNamed = function(t) {
                            return this._bindingWhenSyntax.whenParentNamed(t)
                        }, t.prototype.whenParentTagged = function(t, e) {
                            return this._bindingWhenSyntax.whenParentTagged(t, e)
                        }, t.prototype.whenAnyAncestorIs = function(t) {
                            return this._bindingWhenSyntax.whenAnyAncestorIs(t)
                        }, t.prototype.whenNoAncestorIs = function(t) {
                            return this._bindingWhenSyntax.whenNoAncestorIs(t)
                        }, t.prototype.whenAnyAncestorNamed = function(t) {
                            return this._bindingWhenSyntax.whenAnyAncestorNamed(t)
                        }, t.prototype.whenAnyAncestorTagged = function(t, e) {
                            return this._bindingWhenSyntax.whenAnyAncestorTagged(t, e)
                        }, t.prototype.whenNoAncestorNamed = function(t) {
                            return this._bindingWhenSyntax.whenNoAncestorNamed(t)
                        }, t.prototype.whenNoAncestorTagged = function(t, e) {
                            return this._bindingWhenSyntax.whenNoAncestorTagged(t, e)
                        }, t.prototype.whenAnyAncestorMatches = function(t) {
                            return this._bindingWhenSyntax.whenAnyAncestorMatches(t)
                        }, t.prototype.whenNoAncestorMatches = function(t) {
                            return this._bindingWhenSyntax.whenNoAncestorMatches(t)
                        }, t.prototype.onActivation = function(t) {
                            return this._bindingOnSyntax.onActivation(t)
                        }, t
                    }();
                e.BindingWhenOnSyntax = o
            },
            4364: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.BindingWhenSyntax = void 0;
                var r = n(2812),
                    i = n(5684),
                    o = function() {
                        function t(t) {
                            this._binding = t
                        }
                        return t.prototype.when = function(t) {
                            return this._binding.constraint = t, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenTargetNamed = function(t) {
                            return this._binding.constraint = i.namedConstraint(t), new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenTargetIsDefault = function() {
                            return this._binding.constraint = function(t) {
                                return null !== t.target && !t.target.isNamed() && !t.target.isTagged()
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenTargetTagged = function(t, e) {
                            return this._binding.constraint = i.taggedConstraint(t)(e), new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenInjectedInto = function(t) {
                            return this._binding.constraint = function(e) {
                                return i.typeConstraint(t)(e.parentRequest)
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenParentNamed = function(t) {
                            return this._binding.constraint = function(e) {
                                return i.namedConstraint(t)(e.parentRequest)
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenParentTagged = function(t, e) {
                            return this._binding.constraint = function(n) {
                                return i.taggedConstraint(t)(e)(n.parentRequest)
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenAnyAncestorIs = function(t) {
                            return this._binding.constraint = function(e) {
                                return i.traverseAncerstors(e, i.typeConstraint(t))
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenNoAncestorIs = function(t) {
                            return this._binding.constraint = function(e) {
                                return !i.traverseAncerstors(e, i.typeConstraint(t))
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenAnyAncestorNamed = function(t) {
                            return this._binding.constraint = function(e) {
                                return i.traverseAncerstors(e, i.namedConstraint(t))
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenNoAncestorNamed = function(t) {
                            return this._binding.constraint = function(e) {
                                return !i.traverseAncerstors(e, i.namedConstraint(t))
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenAnyAncestorTagged = function(t, e) {
                            return this._binding.constraint = function(n) {
                                return i.traverseAncerstors(n, i.taggedConstraint(t)(e))
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenNoAncestorTagged = function(t, e) {
                            return this._binding.constraint = function(n) {
                                return !i.traverseAncerstors(n, i.taggedConstraint(t)(e))
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenAnyAncestorMatches = function(t) {
                            return this._binding.constraint = function(e) {
                                return i.traverseAncerstors(e, t)
                            }, new r.BindingOnSyntax(this._binding)
                        }, t.prototype.whenNoAncestorMatches = function(t) {
                            return this._binding.constraint = function(e) {
                                return !i.traverseAncerstors(e, t)
                            }, new r.BindingOnSyntax(this._binding)
                        }, t
                    }();
                e.BindingWhenSyntax = o
            },
            5684: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.typeConstraint = e.namedConstraint = e.taggedConstraint = e.traverseAncerstors = void 0;
                var r = n(1398),
                    i = n(7278),
                    o = function(t, e) {
                        var n = t.parentRequest;
                        return null !== n && (!!e(n) || o(n, e))
                    };
                e.traverseAncerstors = o;
                var s = function(t) {
                    return function(e) {
                        var n = function(n) {
                            return null !== n && null !== n.target && n.target.matchesTag(t)(e)
                        };
                        return n.metaData = new i.Metadata(t, e), n
                    }
                };
                e.taggedConstraint = s;
                var a = s(r.NAMED_TAG);
                e.namedConstraint = a, e.typeConstraint = function(t) {
                    return function(e) {
                        var n = null;
                        if (null !== e) {
                            if (n = e.bindings[0], "string" == typeof t) return n.serviceIdentifier === t;
                            var r = e.bindings[0].implementationType;
                            return t === r
                        }
                        return !1
                    }
                }
            },
            5783: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.multiBindToService = void 0, e.multiBindToService = function(t) {
                    return function(e) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            return n.forEach((function(n) {
                                return t.bind(n).toService(e)
                            }))
                        }
                    }
                }
            },
            8363: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.isStackOverflowExeption = void 0;
                var r = n(6211);
                e.isStackOverflowExeption = function(t) {
                    return t instanceof RangeError || t.message === r.STACK_OVERFLOW
                }
            },
            3754: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.id = void 0;
                var n = 0;
                e.id = function() {
                    return n++
                }
            },
            7394: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.circularDependencyToException = e.listMetadataForTarget = e.listRegisteredBindingsForServiceIdentifier = e.getServiceIdentifierAsString = e.getFunctionName = void 0;
                var r = n(6211);

                function i(t) {
                    return "function" == typeof t ? t.name : "symbol" == typeof t ? t.toString() : t
                }

                function o(t, e) {
                    return null !== t.parentRequest && (t.parentRequest.serviceIdentifier === e || o(t.parentRequest, e))
                }

                function s(t) {
                    if (t.name) return t.name;
                    var e = t.toString(),
                        n = e.match(/^function\s*([^\s(]+)/);
                    return n ? n[1] : "Anonymous function: " + e
                }
                e.getServiceIdentifierAsString = i, e.listRegisteredBindingsForServiceIdentifier = function(t, e, n) {
                    var r = "",
                        i = n(t, e);
                    return 0 !== i.length && (r = "\nRegistered bindings:", i.forEach((function(t) {
                        var e = "Object";
                        null !== t.implementationType && (e = s(t.implementationType)), r = r + "\n " + e, t.constraint.metaData && (r = r + " - " + t.constraint.metaData)
                    }))), r
                }, e.circularDependencyToException = function t(e) {
                    e.childRequests.forEach((function(e) {
                        if (o(e, e.serviceIdentifier)) {
                            var n = function(t) {
                                var e = function t(e, n) {
                                    void 0 === n && (n = []);
                                    var r = i(e.serviceIdentifier);
                                    return n.push(r), null !== e.parentRequest ? t(e.parentRequest, n) : n
                                }(t);
                                return e.reverse().join(" --\x3e ")
                            }(e);
                            throw new Error(r.CIRCULAR_DEPENDENCY + " " + n)
                        }
                        t(e)
                    }))
                }, e.listMetadataForTarget = function(t, e) {
                    if (e.isTagged() || e.isNamed()) {
                        var n = "",
                            r = e.getNamedTag(),
                            i = e.getCustomTags();
                        return null !== r && (n += r.toString() + "\n"), null !== i && i.forEach((function(t) {
                            n += t.toString() + "\n"
                        })), " " + t + "\n " + t + " - " + n
                    }
                    return " " + t
                }, e.getFunctionName = s
            },
            7728: (t, e, n) => {
                var r;
                ! function(t) {
                    ! function(e) {
                        var r = "object" == typeof n.g ? n.g : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
                            i = o(t);

                        function o(t, e) {
                            return function(n, r) {
                                "function" != typeof t[n] && Object.defineProperty(t, n, {
                                    configurable: !0,
                                    writable: !0,
                                    value: r
                                }), e && e(n, r)
                            }
                        }
                        void 0 === r.Reflect ? r.Reflect = t : i = o(r.Reflect, i),
                            function(t) {
                                var e = Object.prototype.hasOwnProperty,
                                    n = "function" == typeof Symbol,
                                    r = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                                    i = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                                    o = "function" == typeof Object.create,
                                    s = {
                                        __proto__: []
                                    }
                                instanceof Array, a = !o && !s, u = {
                                    create: o ? function() {
                                        return B(Object.create(null))
                                    } : s ? function() {
                                        return B({
                                            __proto__: null
                                        })
                                    } : function() {
                                        return B({})
                                    },
                                    has: a ? function(t, n) {
                                        return e.call(t, n)
                                    } : function(t, e) {
                                        return e in t
                                    },
                                    get: a ? function(t, n) {
                                        return e.call(t, n) ? t[n] : void 0
                                    } : function(t, e) {
                                        return t[e]
                                    }
                                }, l = Object.getPrototypeOf(Function), c = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL, h = c || "function" != typeof Map || "function" != typeof Map.prototype.entries ? function() {
                                    var t = {},
                                        e = [],
                                        n = function() {
                                            function t(t, e, n) {
                                                this._index = 0, this._keys = t, this._values = e, this._selector = n
                                            }
                                            return t.prototype["@@iterator"] = function() {
                                                return this
                                            }, t.prototype[i] = function() {
                                                return this
                                            }, t.prototype.next = function() {
                                                var t = this._index;
                                                if (t >= 0 && t < this._keys.length) {
                                                    var n = this._selector(this._keys[t], this._values[t]);
                                                    return t + 1 >= this._keys.length ? (this._index = -1, this._keys = e, this._values = e) : this._index++, {
                                                        value: n,
                                                        done: !1
                                                    }
                                                }
                                                return {
                                                    value: void 0,
                                                    done: !0
                                                }
                                            }, t.prototype.throw = function(t) {
                                                throw this._index >= 0 && (this._index = -1, this._keys = e, this._values = e), t
                                            }, t.prototype.return = function(t) {
                                                return this._index >= 0 && (this._index = -1, this._keys = e, this._values = e), {
                                                    value: t,
                                                    done: !0
                                                }
                                            }, t
                                        }();
                                    return function() {
                                        function e() {
                                            this._keys = [], this._values = [], this._cacheKey = t, this._cacheIndex = -2
                                        }
                                        return Object.defineProperty(e.prototype, "size", {
                                            get: function() {
                                                return this._keys.length
                                            },
                                            enumerable: !0,
                                            configurable: !0
                                        }), e.prototype.has = function(t) {
                                            return this._find(t, !1) >= 0
                                        }, e.prototype.get = function(t) {
                                            var e = this._find(t, !1);
                                            return e >= 0 ? this._values[e] : void 0
                                        }, e.prototype.set = function(t, e) {
                                            var n = this._find(t, !0);
                                            return this._values[n] = e, this
                                        }, e.prototype.delete = function(e) {
                                            var n = this._find(e, !1);
                                            if (n >= 0) {
                                                for (var r = this._keys.length, i = n + 1; i < r; i++) this._keys[i - 1] = this._keys[i], this._values[i - 1] = this._values[i];
                                                return this._keys.length--, this._values.length--, e === this._cacheKey && (this._cacheKey = t, this._cacheIndex = -2), !0
                                            }
                                            return !1
                                        }, e.prototype.clear = function() {
                                            this._keys.length = 0, this._values.length = 0, this._cacheKey = t, this._cacheIndex = -2
                                        }, e.prototype.keys = function() {
                                            return new n(this._keys, this._values, r)
                                        }, e.prototype.values = function() {
                                            return new n(this._keys, this._values, o)
                                        }, e.prototype.entries = function() {
                                            return new n(this._keys, this._values, s)
                                        }, e.prototype["@@iterator"] = function() {
                                            return this.entries()
                                        }, e.prototype[i] = function() {
                                            return this.entries()
                                        }, e.prototype._find = function(t, e) {
                                            return this._cacheKey !== t && (this._cacheIndex = this._keys.indexOf(this._cacheKey = t)), this._cacheIndex < 0 && e && (this._cacheIndex = this._keys.length, this._keys.push(t), this._values.push(void 0)), this._cacheIndex
                                        }, e
                                    }();

                                    function r(t, e) {
                                        return t
                                    }

                                    function o(t, e) {
                                        return e
                                    }

                                    function s(t, e) {
                                        return [t, e]
                                    }
                                }() : Map, d = c || "function" != typeof Set || "function" != typeof Set.prototype.entries ? function() {
                                    function t() {
                                        this._map = new h
                                    }
                                    return Object.defineProperty(t.prototype, "size", {
                                        get: function() {
                                            return this._map.size
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    }), t.prototype.has = function(t) {
                                        return this._map.has(t)
                                    }, t.prototype.add = function(t) {
                                        return this._map.set(t, t), this
                                    }, t.prototype.delete = function(t) {
                                        return this._map.delete(t)
                                    }, t.prototype.clear = function() {
                                        this._map.clear()
                                    }, t.prototype.keys = function() {
                                        return this._map.keys()
                                    }, t.prototype.values = function() {
                                        return this._map.values()
                                    }, t.prototype.entries = function() {
                                        return this._map.entries()
                                    }, t.prototype["@@iterator"] = function() {
                                        return this.keys()
                                    }, t.prototype[i] = function() {
                                        return this.keys()
                                    }, t
                                }() : Set, p = new(c || "function" != typeof WeakMap ? function() {
                                    var t = 16,
                                        n = u.create(),
                                        r = i();
                                    return function() {
                                        function t() {
                                            this._key = i()
                                        }
                                        return t.prototype.has = function(t) {
                                            var e = o(t, !1);
                                            return void 0 !== e && u.has(e, this._key)
                                        }, t.prototype.get = function(t) {
                                            var e = o(t, !1);
                                            return void 0 !== e ? u.get(e, this._key) : void 0
                                        }, t.prototype.set = function(t, e) {
                                            return o(t, !0)[this._key] = e, this
                                        }, t.prototype.delete = function(t) {
                                            var e = o(t, !1);
                                            return void 0 !== e && delete e[this._key]
                                        }, t.prototype.clear = function() {
                                            this._key = i()
                                        }, t
                                    }();

                                    function i() {
                                        var t;
                                        do {
                                            t = "@@WeakMap@@" + a()
                                        } while (u.has(n, t));
                                        return n[t] = !0, t
                                    }

                                    function o(t, n) {
                                        if (!e.call(t, r)) {
                                            if (!n) return;
                                            Object.defineProperty(t, r, {
                                                value: u.create()
                                            })
                                        }
                                        return t[r]
                                    }

                                    function s(t, e) {
                                        for (var n = 0; n < e; ++n) t[n] = 255 * Math.random() | 0;
                                        return t
                                    }

                                    function a() {
                                        var e = function(t) {
                                            return "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(t)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(t)) : s(new Uint8Array(t), t) : s(new Array(t), t)
                                        }(t);
                                        e[6] = 79 & e[6] | 64, e[8] = 191 & e[8] | 128;
                                        for (var n = "", r = 0; r < t; ++r) {
                                            var i = e[r];
                                            4 !== r && 6 !== r && 8 !== r || (n += "-"), i < 16 && (n += "0"), n += i.toString(16).toLowerCase()
                                        }
                                        return n
                                    }
                                }() : WeakMap);

                                function f(t, e, n) {
                                    var r = p.get(t);
                                    if (E(r)) {
                                        if (!n) return;
                                        r = new h, p.set(t, r)
                                    }
                                    var i = r.get(e);
                                    if (E(i)) {
                                        if (!n) return;
                                        i = new h, r.set(e, i)
                                    }
                                    return i
                                }

                                function g(t, e, n) {
                                    if (v(t, e, n)) return !0;
                                    var r = k(e);
                                    return !T(r) && g(t, r, n)
                                }

                                function v(t, e, n) {
                                    var r = f(e, n, !1);
                                    return !E(r) && function(t) {
                                        return !!t
                                    }(r.has(t))
                                }

                                function m(t, e, n) {
                                    if (v(t, e, n)) return y(t, e, n);
                                    var r = k(e);
                                    return T(r) ? void 0 : m(t, r, n)
                                }

                                function y(t, e, n) {
                                    var r = f(e, n, !1);
                                    if (!E(r)) return r.get(t)
                                }

                                function b(t, e, n, r) {
                                    f(n, r, !0).set(t, e)
                                }

                                function x(t, e) {
                                    var n = w(t, e),
                                        r = k(t);
                                    if (null === r) return n;
                                    var i = x(r, e);
                                    if (i.length <= 0) return n;
                                    if (n.length <= 0) return i;
                                    for (var o = new d, s = [], a = 0, u = n; a < u.length; a++) {
                                        var l = u[a];
                                        o.has(l) || (o.add(l), s.push(l))
                                    }
                                    for (var c = 0, h = i; c < h.length; c++) l = h[c], o.has(l) || (o.add(l), s.push(l));
                                    return s
                                }

                                function w(t, e) {
                                    var n = [],
                                        r = f(t, e, !1);
                                    if (E(r)) return n;
                                    for (var i = R(r.keys()), o = 0;;) {
                                        var s = D(i);
                                        if (!s) return n.length = o, n;
                                        var a = P(s);
                                        try {
                                            n[o] = a
                                        } catch (t) {
                                            try {
                                                L(i)
                                            } finally {
                                                throw t
                                            }
                                        }
                                        o++
                                    }
                                }

                                function _(t) {
                                    if (null === t) return 1;
                                    switch (typeof t) {
                                        case "undefined":
                                            return 0;
                                        case "boolean":
                                            return 2;
                                        case "string":
                                            return 3;
                                        case "symbol":
                                            return 4;
                                        case "number":
                                            return 5;
                                        case "object":
                                            return null === t ? 1 : 6;
                                        default:
                                            return 6
                                    }
                                }

                                function E(t) {
                                    return void 0 === t
                                }

                                function T(t) {
                                    return null === t
                                }

                                function N(t) {
                                    return "object" == typeof t ? null !== t : "function" == typeof t
                                }

                                function A(t, e) {
                                    switch (_(t)) {
                                        case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                            return t
                                    }
                                    var n = 3 === e ? "string" : 5 === e ? "number" : "default",
                                        i = M(t, r);
                                    if (void 0 !== i) {
                                        var o = i.call(t, n);
                                        if (N(o)) throw new TypeError;
                                        return o
                                    }
                                    return function(t, e) {
                                        if ("string" === e) {
                                            var n = t.toString;
                                            if (C(n) && !N(i = n.call(t))) return i;
                                            if (C(r = t.valueOf) && !N(i = r.call(t))) return i
                                        } else {
                                            var r;
                                            if (C(r = t.valueOf) && !N(i = r.call(t))) return i;
                                            var i, o = t.toString;
                                            if (C(o) && !N(i = o.call(t))) return i
                                        }
                                        throw new TypeError
                                    }(t, "default" === n ? "number" : n)
                                }

                                function S(t) {
                                    var e = A(t, 3);
                                    return function(t) {
                                        return "symbol" == typeof t
                                    }(e) ? e : function(t) {
                                        return "" + t
                                    }(e)
                                }

                                function I(t) {
                                    return Array.isArray ? Array.isArray(t) : t instanceof Object ? t instanceof Array : "[object Array]" === Object.prototype.toString.call(t)
                                }

                                function C(t) {
                                    return "function" == typeof t
                                }

                                function O(t) {
                                    return "function" == typeof t
                                }

                                function M(t, e) {
                                    var n = t[e];
                                    if (null != n) {
                                        if (!C(n)) throw new TypeError;
                                        return n
                                    }
                                }

                                function R(t) {
                                    var e = M(t, i);
                                    if (!C(e)) throw new TypeError;
                                    var n = e.call(t);
                                    if (!N(n)) throw new TypeError;
                                    return n
                                }

                                function P(t) {
                                    return t.value
                                }

                                function D(t) {
                                    var e = t.next();
                                    return !e.done && e
                                }

                                function L(t) {
                                    var e = t.return;
                                    e && e.call(t)
                                }

                                function k(t) {
                                    var e = Object.getPrototypeOf(t);
                                    if ("function" != typeof t || t === l) return e;
                                    if (e !== l) return e;
                                    var n = t.prototype,
                                        r = n && Object.getPrototypeOf(n);
                                    if (null == r || r === Object.prototype) return e;
                                    var i = r.constructor;
                                    return "function" != typeof i || i === t ? e : i
                                }

                                function B(t) {
                                    return t.__ = void 0, delete t.__, t
                                }
                                t("decorate", (function(t, e, n, r) {
                                    if (E(n)) {
                                        if (!I(t)) throw new TypeError;
                                        if (!O(e)) throw new TypeError;
                                        return function(t, e) {
                                            for (var n = t.length - 1; n >= 0; --n) {
                                                var r = (0, t[n])(e);
                                                if (!E(r) && !T(r)) {
                                                    if (!O(r)) throw new TypeError;
                                                    e = r
                                                }
                                            }
                                            return e
                                        }(t, e)
                                    }
                                    if (!I(t)) throw new TypeError;
                                    if (!N(e)) throw new TypeError;
                                    if (!N(r) && !E(r) && !T(r)) throw new TypeError;
                                    return T(r) && (r = void 0),
                                        function(t, e, n, r) {
                                            for (var i = t.length - 1; i >= 0; --i) {
                                                var o = (0, t[i])(e, n, r);
                                                if (!E(o) && !T(o)) {
                                                    if (!N(o)) throw new TypeError;
                                                    r = o
                                                }
                                            }
                                            return r
                                        }(t, e, n = S(n), r)
                                })), t("metadata", (function(t, e) {
                                    return function(n, r) {
                                        if (!N(n)) throw new TypeError;
                                        if (!E(r) && ! function(t) {
                                                switch (_(t)) {
                                                    case 3:
                                                    case 4:
                                                        return !0;
                                                    default:
                                                        return !1
                                                }
                                            }(r)) throw new TypeError;
                                        b(t, e, n, r)
                                    }
                                })), t("defineMetadata", (function(t, e, n, r) {
                                    if (!N(n)) throw new TypeError;
                                    return E(r) || (r = S(r)), b(t, e, n, r)
                                })), t("hasMetadata", (function(t, e, n) {
                                    if (!N(e)) throw new TypeError;
                                    return E(n) || (n = S(n)), g(t, e, n)
                                })), t("hasOwnMetadata", (function(t, e, n) {
                                    if (!N(e)) throw new TypeError;
                                    return E(n) || (n = S(n)), v(t, e, n)
                                })), t("getMetadata", (function(t, e, n) {
                                    if (!N(e)) throw new TypeError;
                                    return E(n) || (n = S(n)), m(t, e, n)
                                })), t("getOwnMetadata", (function(t, e, n) {
                                    if (!N(e)) throw new TypeError;
                                    return E(n) || (n = S(n)), y(t, e, n)
                                })), t("getMetadataKeys", (function(t, e) {
                                    if (!N(t)) throw new TypeError;
                                    return E(e) || (e = S(e)), x(t, e)
                                })), t("getOwnMetadataKeys", (function(t, e) {
                                    if (!N(t)) throw new TypeError;
                                    return E(e) || (e = S(e)), w(t, e)
                                })), t("deleteMetadata", (function(t, e, n) {
                                    if (!N(e)) throw new TypeError;
                                    E(n) || (n = S(n));
                                    var r = f(e, n, !1);
                                    if (E(r)) return !1;
                                    if (!r.delete(t)) return !1;
                                    if (r.size > 0) return !0;
                                    var i = p.get(e);
                                    return i.delete(n), i.size > 0 || p.delete(e), !0
                                }))
                            }(i)
                    }()
                }(r || (r = {}))
            },
            6762: (t, e, n) => {
                "use strict";
                n.r(e), n.d(e, {
                    Inspectee: () => Wr
                }), n(7728);
                var r = n(1550);

                function i(t, e, n, r) {
                    var i, o = arguments.length,
                        s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                    else
                        for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                    return o > 3 && s && Object.defineProperty(e, n, s), s
                }

                function o(t, e) {
                    return function(n, r) {
                        e(n, r, t)
                    }
                }

                function s(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                }

                function a(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                }
                var u, l, c = "Adapter",
                    h = "Bridge",
                    d = "Inspectee",
                    p = "VirtualTreeProps",
                    f = "Container";
                (l = u || (u = {}))[l.Inspector = 0] = "Inspector", l[l.RendererInspectee = 1] = "RendererInspectee", l[l.ServiceInspectee = 2] = "ServiceInspectee", l[l.AllInspectee = 3] = "AllInspectee";
                var g = class {
                    constructor(t = u.AllInspectee) {
                        this.callbacks = new Map, this.type = t
                    }
                    get inited() {
                        return this._inited
                    }
                    init() {
                        this.initSubscription(this.handleCDPMessage.bind(this)), this._inited = !0
                    }
                    emit(t) {
                        this.send(t)
                    }
                    reply(t, e) {
                        this.send({
                            id: t,
                            result: e
                        })
                    }
                    on(t, e) {
                        this.callbacks.has(t) || this.callbacks.set(t, []), this.callbacks.get(t).push(e)
                    }
                    off(t, e) {
                        if (this.callbacks.has(t)) {
                            var n = this.callbacks.get(t);
                            n = [...n.filter((t => t !== e))]
                        }
                    }
                    handleCDPMessage(t, e, n) {
                        var r, i, o;
                        ((t, e) => t === e || t & e)(this.type, e) && ("id" in t ? null === (r = this.callbacks.get("command")) || void 0 === r || r.forEach((e => e(t, n))) : null === (i = this.callbacks.get("event")) || void 0 === i || i.forEach((e => e(t, n))), null === (o = this.callbacks.get("all")) || void 0 === o || o.forEach((e => e(t, n))))
                    }
                };
                g = function(t, e, n, r) {
                    var i, o = arguments.length,
                        s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                    else
                        for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                    return o > 3 && s && Object.defineProperty(e, n, s), s
                }([(0, r.b2)(), function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata("design:paramtypes", e)
                }(0, [Number])], g);
                var v = t => !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then,
                    m = new WeakMap,
                    y = new Map,
                    b = (t, e = {}) => {
                        var n, r, i = {},
                            o = typeof t,
                            s = "";
                        try {
                            s = null === (n = null == t ? void 0 : t.toString) || void 0 === n ? void 0 : n.call(t)
                        } catch (t) {
                            s = {}.toString()
                        }
                        if ("object" === o || "function" === o || "symbol" === o) {
                            if (m.has(t)) i.objectId = m.get(t);
                            else {
                                i.objectId = "testid";
                                try {
                                    t && t instanceof Object && m.set(t, i.objectId)
                                } catch (e) {
                                    console.error("objectToRemoteIdMap fail", e, t)
                                }
                                y.set(i.objectId, t)
                            }
                            if ("object" === o) {
                                var a, u = null === (r = null == t ? void 0 : t.constructor) || void 0 === r ? void 0 : r.name;
                                if (u && (i.className = u), Array.isArray(t) ? a = "array" : null === t ? a = "null" : t instanceof RegExp ? a = "regexp" : t instanceof Date ? a = "date" : t instanceof Map ? a = "map" : t instanceof Set ? a = "set" : t instanceof WeakMap ? a = "weakmap" : t instanceof WeakSet ? a = "weakset" : t instanceof Error ? a = "error" : v(t) ? a = "promise" : function(t) {
                                        try {
                                            return [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array].some((e => t instanceof e))
                                        } catch (t) {
                                            return !1
                                        }
                                    }(t) ? a = "typedarray" : t instanceof ArrayBuffer ? a = "arraybuffer" : t instanceof DataView ? a = "dataview" : globalThis.WebAssembly && t instanceof globalThis.WebAssembly.Memory && (a = "webassemblymemory"), a && (i.subtype = a), e.generatePreview) {
                                    var l = {
                                        type: o,
                                        description: s,
                                        properties: Object.keys(t).flatMap((e => t === globalThis && "BabelRuntimeHelpers" === e ? [] : Object.assign({
                                            name: e
                                        }, b(t[e], {
                                            generatePreview: !1
                                        })))),
                                        overflow: !0
                                    };
                                    a && (l.subtype = a), "map" === a ? l.entries = [...t].map((([t, e]) => ({
                                        key: t,
                                        value: b(e, {
                                            generatePreview: !1
                                        })
                                    }))) : "set" === a && (l.entries = [...t].map((t => ({
                                        value: b(t, {
                                            generatePreview: !1
                                        })
                                    })))), i.preview = l
                                }
                            }
                        } else i.value = t;
                        return Object.assign({
                            type: o,
                            description: s
                        }, i)
                    },
                    x = t => y.get(t),
                    w = t => {
                        var e = b(t);
                        if (t instanceof Error) {
                            var {
                                name: n,
                                message: r
                            } = t;
                            return {
                                text: n,
                                exception: e
                            }
                        }
                        return {
                            text: "Unknown Error",
                            exception: e
                        }
                    },
                    _ = Symbol("eval"),
                    E = class {
                        constructor(t = globalThis.eval) {
                            this.enabled = !1, this.eval = t, this._hookedConsole = function({
                                beforeInvoke: t,
                                afterInvoke: e,
                                console: n = globalThis.console
                            }) {
                                return new Proxy(n, {
                                    get(n, r, i) {
                                        var o = Reflect.get(n, r);
                                        return "function" == typeof o && "debug" !== r ? function(...i) {
                                            null == t || t({
                                                method: r,
                                                args: i,
                                                originConsole: n
                                            });
                                            var s = Reflect.apply(o, n, i);
                                            return null == e || e({
                                                method: r,
                                                args: i,
                                                ret: s,
                                                originConsole: n
                                            }), s
                                        } : o
                                    },
                                    getPrototypeOf: t => null
                                })
                            }({
                                beforeInvoke: ({
                                    method: t,
                                    args: e,
                                    originConsole: n
                                }) => {
                                    this.bridge.emit({
                                        method: "Runtime.consoleAPICalled",
                                        params: {
                                            type: t,
                                            args: e.map((t => b(t, {
                                                generatePreview: !0
                                            }))),
                                            executionContextId: 0,
                                            timestamp: Date.now()
                                        }
                                    })
                                }
                            })
                        }
                        get hookedConsole() {
                            return this._hookedConsole
                        }
                        hookConsole() {
                            var t;
                            null !== (t = Reflect.get(console, Symbol.for("hooked"))) && void 0 !== t && t || (console = this._hookedConsole), Reflect.set(console, Symbol.for("hooked"), !0)
                        }
                        awaitPromise(t) {
                            return a(this, void 0, void 0, (function*() {
                                var {
                                    promiseObjectId: e
                                } = t, n = x(e);
                                if (v(n)) try {
                                    return {
                                        result: b(yield n)
                                    }
                                } catch (t) {
                                    return {
                                        exceptionDetails: w(t),
                                        result: b(t)
                                    }
                                }
                                var r = "no such promise";
                                return {
                                    exceptionDetails: w(r),
                                    result: b(r)
                                }
                            }))
                        }
                        callFunctionOn(t) {
                            throw new Error("Method not implemented.")
                        }
                        compileScript(t) {
                            throw new Error("Method not implemented.")
                        }
                        disable() {
                            return a(this, void 0, void 0, (function*() {
                                this.enabled = !1
                            }))
                        }
                        discardConsoleEntries() {
                            throw new Error("Method not implemented.")
                        }
                        enable() {
                            return a(this, void 0, void 0, (function*() {
                                this.enabled = !0
                            }))
                        }
                        evaluate(t) {
                            return a(this, void 0, void 0, (function*() {
                                var {
                                    expression: e,
                                    awaitPromise: n,
                                    returnByValue: r,
                                    generatePreview: i = !0
                                } = t;
                                try {
                                    var o = this.eval.call(globalThis, e);
                                    return n && v(o) && (o = yield o), {
                                        result: b(o, {
                                            returnByValue: r,
                                            generatePreview: i
                                        })
                                    }
                                } catch (t) {
                                    return {
                                        exceptionDetails: w(t),
                                        result: b(t)
                                    }
                                }
                            }))
                        }
                        getIsolateId() {
                            throw new Error("Method not implemented.")
                        }
                        getHeapUsage() {
                            throw new Error("Method not implemented.")
                        }
                        getProperties(t) {
                            return a(this, void 0, void 0, (function*() {
                                var {
                                    objectId: e,
                                    ownProperties: n = !0,
                                    accessorPropertiesOnly: r = !1
                                } = t, i = x(e), o = [];
                                if (!i) return {
                                    result: o
                                };
                                if (o = Object.keys(i).map((t => Object.assign(Reflect.getOwnPropertyDescriptor(i, t), {
                                        name: t,
                                        isOwn: !!Reflect.getOwnPropertyDescriptor(i, t)
                                    }))), i instanceof Map) {
                                    var s = [...i];
                                    o.push({
                                        name: "[[Entries]]",
                                        value: s.length ? s.map((([t, e]) => ({
                                            key: t,
                                            value: e
                                        }))) : "no entry"
                                    }), s.length && o.push({
                                        name: "size",
                                        value: i.size
                                    })
                                }
                                if (i instanceof Set) {
                                    var a = [...i];
                                    o.push({
                                        name: "[[Entries]]",
                                        value: a.length ? a : "no entry"
                                    }), a.length && o.push({
                                        name: "size",
                                        value: i.size
                                    })
                                }
                                return o = o.flatMap((t => {
                                    if (i === globalThis && "BabelRuntimeHelpers" === t.name) return [];
                                    var {
                                        get: e,
                                        set: n,
                                        value: r
                                    } = t;
                                    return r && (t["symbol" === r ? "symbol" : "value"] = b(r)), e && (t.get = b(e)), n && (t.set = b(n)), t
                                })), r && (o = o.filter((t => t.get || t.set))), {
                                    result: o
                                }
                            }))
                        }
                        globalLexicalScopeNames(t) {
                            throw new Error("Method not implemented.")
                        }
                        queryObjects(t) {
                            throw new Error("Method not implemented.")
                        }
                        releaseObject(t) {
                            return a(this, void 0, void 0, (function*() {
                                var e;
                                e = t.objectId, y.get(e) && y.delete(e)
                            }))
                        }
                        releaseObjectGroup(t) {
                            throw new Error("Method not implemented.")
                        }
                        runIfWaitingForDebugger() {
                            throw new Error("Method not implemented.")
                        }
                        runScript(t) {
                            throw new Error("Method not implemented.")
                        }
                        setAsyncCallStackDepth(t) {
                            throw new Error("Method not implemented.")
                        }
                        setCustomObjectFormatterEnabled(t) {
                            throw new Error("Method not implemented.")
                        }
                        setMaxCallStackSizeToCapture(t) {
                            throw new Error("Method not implemented.")
                        }
                        terminateExecution() {
                            throw new Error("Method not implemented.")
                        }
                        addBinding(t) {
                            throw new Error("Method not implemented.")
                        }
                        removeBinding(t) {
                            throw new Error("Method not implemented.")
                        }
                        on(t, e) {
                            throw new Error("Method not implemented.")
                        }
                    };
                i([(0, r.f3)(h), s("design:type", g)], E.prototype, "bridge", void 0), E = i([(0, r.b2)(), o(0, (0, r.f3)(_)), o(0, (0, r.jt)()), s("design:paramtypes", [Object])], E);
                class T {
                    constructor(t = 0) {
                        this._id = t
                    }
                    get id() {
                        return this._id++
                    }
                    reset() {
                        this._id = 0
                    }
                }
                var N = new r.W2;

                function A(t = "Default") {
                    return (e, n, i) => {
                        (0, r.f3)(c)(e, n, i), (0, r.t6)(t)(e, n, i)
                    }
                }
                var S = (t, e) => t.bind(p).toConstantValue(e),
                    I = (t, e) => t.bind(h).toConstantValue(e),
                    C = (t, e, n = "Default") => {
                        var r = t.bind(c).to(e).inSingletonScope().whenTargetNamed(n);
                        return "Default" === n && r.onActivation(((t, e) => new Proxy(e, {
                            get: (t, e) => "enabled" === e || (() => a(void 0, void 0, void 0, (function*() {
                                return {
                                    message: "N/A",
                                    domain: n
                                }
                            })))
                        }))), r
                    },
                    O = (t, e) => t.getNamed(c, e),
                    M = (t, e) => e.bind(null, t),
                    R = class {
                        constructor() {
                            this.tempId = new T
                        }
                        get enabled() {
                            var t, e;
                            return null !== (e = null === (t = this.RuntimeAdapter) || void 0 === t ? void 0 : t.enabled) && void 0 !== e && e
                        }
                        saveToConsole({
                            objectId: t = "",
                            value: e
                        }) {
                            return a(this, void 0, void 0, (function*() {
                                var n = null != e ? e : x(t);
                                if (n) {
                                    for (var r = `temp${this.tempId.id}`; Reflect.has(globalThis, r);) r = `temp${this.tempId.id}`;
                                    return Reflect.set(globalThis, r, n), r
                                }
                            }))
                        }
                        disable() {
                            var t;
                            return a(this, void 0, void 0, (function*() {
                                null === (t = this.RuntimeAdapter) || void 0 === t || t.disable()
                            }))
                        }
                        enable() {
                            var t;
                            return a(this, void 0, void 0, (function*() {
                                null === (t = this.RuntimeAdapter) || void 0 === t || t.enable()
                            }))
                        }
                    };
                i([A("Runtime"), (0, r.jt)(), s("design:type", E)], R.prototype, "RuntimeAdapter", void 0), R = i([(0, r.b2)()], R);
                class P extends Map {
                    constructor() {
                        super(...arguments), this.revMap = new Map
                    }
                    set(t, e) {
                        return super.set(t, e), this.revMap.set(e, t), this
                    }
                    delete(t) {
                        var e = super.get(t),
                            n = super.delete(t),
                            r = this.revMap.delete(e);
                        return n && r
                    }
                    getRev(t) {
                        return this.revMap.get(t)
                    }
                    hasRev(t) {
                        return this.revMap.has(t)
                    }
                }
                var D = class {
                    constructor() {
                        this.enabled = !0
                    }
                };

                function L(t, e = 1e3, n) {
                    var r;
                    return function(...i) {
                        if (r && clearTimeout(r), n) {
                            if (!r) return t.apply(null, i);
                            r = setTimeout((() => r = null), e)
                        } else r = setTimeout((() => t.apply(null, i)), e)
                    }
                }

                function k(t) {
                    return function(...e) {
                        return new Promise((function(n, r) {
                            e.push((t => {
                                n(t)
                            })), t(...e)
                        }))
                    }
                }
                D = i([(0, r.b2)()], D);
                var B = null,
                    F = ["position", "top", "left", "right", "bottom", "width", "height", "margin-right", "margin-left", "margin-top", "margin-bottom", "padding-left", "padding-right", "padding-top", "padding-bottom", "border-left-width", "border-right-width", "border-top-width", "border-bottom-width"],
                    j = new class {
                        get isSkyline() {
                            return !!(null === window || void 0 === window ? void 0 : window.__skylineEngine__)
                        }
                        getBoundingClientRect(t) {
                            return a(this, void 0, void 0, (function*() {
                                var e;
                                try {
                                    if (this.isSkyline) {
                                        var n = k(t.getBoundingClientRect.bind(t));
                                        e = yield n()
                                    } else e = t.getBoundingClientRect()
                                } catch (t) {
                                    console.log("getComputedStyle: error", t)
                                }
                                return e
                            }))
                        }
                        formatComputedStyle(t) {
                            var e = {};
                            return F.forEach((n => {
                                var r = function(t, e = "_") {
                                        return t.replace(new RegExp(`\\${e}(\\w)`, "g"), (function(t, e) {
                                            return e.toUpperCase()
                                        }))
                                    }(n, "-"),
                                    i = t[n] || t[r];
                                "number" == typeof i && (i = `${i}px`), e[n] = i
                            })), e
                        }
                        getComputedStyle(t) {
                            return a(this, void 0, void 0, (function*() {
                                var e = {};
                                try {
                                    if (this.isSkyline) {
                                        var n = O(N, "DOM"),
                                            r = yield n.tree.getPageContext(), i = k(r.getComputedStyle.bind(r));
                                        e = yield i(t), e = this.formatComputedStyle(e)
                                    } else e = window.getComputedStyle(t)
                                } catch (t) {
                                    console.error("getComputedStyle: error", t)
                                }
                                return e
                            }))
                        }
                        getWindowInfo() {
                            return a(this, void 0, void 0, (function*() {
                                if (this.isSkyline) {
                                    var t = O(N, "DOM"),
                                        e = yield t.tree.getPageContext(), {
                                            clientHeight: n,
                                            clientWidth: r,
                                            scrollLeft: i = 0,
                                            scrollTop: o = 0
                                        } = e;
                                    return {
                                        innerHeight: n,
                                        innerWidth: r,
                                        scrollTop: o,
                                        scrollLeft: i
                                    }
                                }
                                return {
                                    innerHeight: window.innerHeight,
                                    innerWidth: window.innerWidth,
                                    scrollTop: window.scrollY,
                                    scrollLeft: window.screenX
                                }
                            }))
                        }
                        getAttribute(t, e) {
                            var n, r, i;
                            return "id" === e ? (null === (n = t.$$) || void 0 === n ? void 0 : n.id) || "" : "classList" === e ? (null === (r = t.$$) || void 0 === r ? void 0 : r.classList) || [] : null === (i = t.$$) || void 0 === i ? void 0 : i.getAttribute(e)
                        }
                        appendChild(t, e, n = !0) {
                            t.appendChild(e), n && this.startRender()
                        }
                        getStyle(t) {
                            return this.isSkyline ? ((null == t ? void 0 : t.__styleSegments) || []).join("") : t.$$.getAttribute("style")
                        }
                        parseStyle2Map(t = "") {
                            var e = t.split(";"),
                                n = {};
                            return e.length && e.forEach((t => {
                                var e = t.split(":");
                                2 === e.length && (n[e[0]] = e[1])
                            })), n
                        }
                        updateStyle(t, e, n = !0) {
                            var r = this.getStyle(t),
                                i = this.parseStyle2Map(r),
                                o = this.parseStyle2Map(e),
                                s = Object.assign(Object.assign({}, i), o),
                                a = "";
                            for (var u in s) a += `${u}:${s[u]};`;
                            this.setStyle(t, a, n)
                        }
                        setStyle(t, e, n = !0) {
                            t.setNodeStyle(e), n && this.startRender()
                        }
                        startRender() {
                            return a(this, void 0, void 0, (function*() {
                                this.isSkyline && (B && clearTimeout(B), B = setTimeout((() => a(this, void 0, void 0, (function*() {
                                    var t = O(N, "DOM");
                                    (yield t.tree.getPageContext()).startRender(), B = null
                                }))), 100))
                            }))
                        }
                    };
                class U {}
                var V = {
                        showInfo: !0,
                        showAccessibilityInfo: !0,
                        showStyles: !0,
                        contentColor: {
                            r: 161,
                            g: 197,
                            b: 232,
                            a: .66
                        },
                        paddingColor: {
                            r: 196,
                            g: 222,
                            b: 184,
                            a: .55
                        },
                        borderColor: {
                            r: 255,
                            g: 229,
                            b: 153,
                            a: .66
                        },
                        marginColor: {
                            r: 246,
                            g: 178,
                            b: 107,
                            a: .5
                        },
                        eventTargetColor: {
                            r: 255,
                            g: 196,
                            b: 196,
                            a: .66
                        },
                        shapeColor: {
                            r: 96,
                            g: 82,
                            b: 177,
                            a: .8
                        },
                        shapeMarginColor: {
                            r: 96,
                            g: 82,
                            b: 127,
                            a: .6
                        }
                    },
                    W = '\n  all: unset;\n  pointer-events: none;\n  top: 100%;\n  margin-top: -4px;\n  transform: rotate(45deg) skewX(5deg) skewY(5deg);\n  content: "";\n  position: absolute;\n  z-index: -100;\n  left: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 0 0 2px 0;\n  background: #ffffff;\n  bottom: 100%;\n  margin-bottom: -4px;\n',
                    H = "__wx_inspectee_highlight__";

                function $(t, e) {
                    var n = t.__wxSlotChildren[0].createNativeNode("wx-inspectee-highlight-element");
                    return n.id = `${H}${e}`, n
                }

                function G(t, e) {
                    var n = t.__wxSlotChildren[0].createTextNode("wx-text");
                    return n.id = `${H}${e}`, n
                }

                function z(t) {
                    return t.id && t.id.startsWith(H)
                }
                var Y, q = (Y = 9e5, () => Y++),
                    X = function(t) {
                        return ("0" + parseInt(t, 10).toString(16)).slice(-2)
                    },
                    J = {};
                class K {
                    constructor(t, e) {
                        this.domTree = t, this.viewId = q(), this.node = $(this.domTree, this.viewId.toString());
                        var n = J[e];
                        n ? (j.appendChild(n, this.node), j.setStyle(this.node, "pointer-events: none;position:absolute;top:0;left:0;width:0;height:0;")) : (j.appendChild(this.domTree.__wxSlotChildren[0], this.node), j.setStyle(this.node, "pointer-events: none;position:fixed;top:0;left:0;width:0;height:0;")), J[this.viewId] = this.node
                    }
                    update(t = {}) {
                        var {
                            position: e = {},
                            style: n = {}
                        } = t, r = "pointer-events: none;";
                        for (var i in e) r += `${i}:${e[i]}px;`;
                        for (var o in n) r += `${o}:${n[o]};`;
                        j.setStyle(this.node, r)
                    }
                    hide() {
                        j.setStyle(this.node, "pointer-events: none;position:absolute;top:0;left:0;width:0;height:0;")
                    }
                    destroy() {
                        this.domTree.__wxSlotChildren[0].removeChild(this.node), delete J[this.viewId], this.node = null
                    }
                }
                var Q, Z = new class extends U {
                        constructor() {
                            super(), this.resetDOM(), this.resetTips(), this._target = null, this._tasks = [], this._runing = !1
                        }
                        resetTips() {
                            this._tipsInited = !1, this._inspectTipsContainer = null, this._tagContainer = null, this._tagNameTips = null, this._tagNameTipsText = null, this._idTips = null, this._idTipsText = null, this._classTips = null, this._classTipsText = null, this._inspectTipsSep = null, this._sizeTips = null, this._sizeTipsText = null, this._arrowTips = null
                        }
                        initTips() {
                            this._inspectTipsContainer = $(this._domTree, "inspectTag"), this._tagContainer = $(this._domTree, "tagContainer"), this._tagNameTips = $(this._domTree, "tagNameTips"), this._tagNameTipsText = G(this._domTree, "inspectTagText"), this._idTips = $(this._domTree, "idTips"), this._idTipsText = G(this._domTree, "idTipsText"), this._classTips = $(this._domTree, "classTips"), this._classTipsText = G(this._domTree, "classTipsText"), this._inspectTipsSep = $(this._domTree, "inspectTipsSep"), this._sizeTips = $(this._domTree, "sizeTip"), this._sizeTipsText = G(this._domTree, "sizeTipText"), this._arrowTips = $(this._domTree, "arrowTip"), j.setStyle(this._inspectTipsContainer, "\n  all: unset;\n  pointer-events: none;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  padding: 4px 10px;\n  font-size: 12px;\n  color: #d9d9d9;\n  background-color: #ffffff;\n  z-index: 8000;\n  border-radius: 2px;\n  cursor: default;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;\n  box-sizing: border-box;\n", !1), j.setStyle(this._tagContainer, "\n  all: unset;\n  pointer-events: none;\n  display: flex; \n  flex-direction: \n  row; margin: auto; \n  word-break: break-all; \n  flex-shrink: 2;\n", !1), j.setStyle(this._tagNameTips, "\n  all: unset;\n  pointer-events: none;\n  display:inline-block;\n  color:#df80e1;\n", !1), j.setStyle(this._idTips, "\n  all: unset;\n  pointer-events: none;\n  display:inline-block;\n  color: #f3ae71;\n", !1), j.setStyle(this._classTips, "\n  all: unset;\n  pointer-events: none;\n  display:inline-block;\n  color: #98cbef;\n", !1), j.setStyle(this._inspectTipsSep, "\n  all: unset;\n  pointer-events: none;\n  display: inline-block;\n  align-self: center;\n  height: 100%;\n  vertical-align: middle;\n  width: 1px;\n  height: 18px;\n  background-color: rgba(204,204,204,0.5);\n  margin: 0 8px;\n", !1), j.setStyle(this._sizeTips, "\n  all: unset;\n  pointer-events: none;\n  display:inline-block;\n  color: #ccc; \n  font-size: 11px; \n  white-space: nowrap; \n  align-self: center;\n", !1), j.setStyle(this._arrowTips, W, !1), j.appendChild(this._tagNameTips, this._tagNameTipsText, !1), j.appendChild(this._idTips, this._idTipsText, !1), j.appendChild(this._classTips, this._classTipsText, !1), j.appendChild(this._sizeTips, this._sizeTipsText, !1), j.appendChild(this._tagContainer, this._tagNameTips, !1), j.appendChild(this._tagContainer, this._idTips, !1), j.appendChild(this._tagContainer, this._classTips, !1), j.appendChild(this._inspectTipsContainer, this._tagContainer, !1), j.appendChild(this._inspectTipsContainer, this._inspectTipsSep, !1), j.appendChild(this._inspectTipsContainer, this._sizeTips, !1), j.appendChild(this._inspectTipsContainer, this._arrowTips, !1), j.startRender(), this._tipsInited = !0
                        }
                        hideTips() {
                            this._tipsInited && j.updateStyle(this._inspectTipsContainer, "display: none;")
                        }
                        destroyTips() {
                            this._tipsInited && (this._inspectTipsContainer && this._inspectTipsContainer.parentNode && this._inspectTipsContainer.parentNode.removeChild(this._inspectTipsContainer), this.resetTips(), this._tipsInited = !1)
                        }
                        resetDOM() {
                            this._domInited = !1, this._dom = null, this._borderDom = null, this._paddingDom = null, this._sizeDom = null
                        }
                        initDOM() {
                            this._dom = new K(this._domTree, 0), this._borderDom = new K(this._domTree, this._dom.viewId), this._paddingDom = new K(this._domTree, this._dom.viewId), this._sizeDom = new K(this._domTree, this._dom.viewId), this._domInited = !0
                        }
                        hideDOM() {
                            this._dom && this._dom.update({
                                style: {
                                    display: "none"
                                }
                            })
                        }
                        destroyDOM() {
                            this._dom && (this._dom.destroy(), this.resetDOM())
                        }
                        setTips(t) {
                            return a(this, void 0, void 0, (function*() {
                                if (this._target) {
                                    var {
                                        top: e,
                                        left: n,
                                        width: r,
                                        height: i,
                                        contentWidth: o,
                                        contentHeight: s
                                    } = t, a = (this._target.is || "").replace(/^wx-/, "").toLowerCase();
                                    "body" === a && (a = "page"), this._tagNameTipsText.textContent = a;
                                    var u = j.getAttribute(this._target, "id");
                                    this._idTipsText.textContent = u ? `#${u}` : "";
                                    var l = j.getAttribute(this._target, "classList"),
                                        c = Array.prototype.map.call(l, (t => `.${t}`)).join("");
                                    this._classTipsText.textContent = c ? `${c}` : "", this._sizeTipsText.textContent = `${this.pruneNum(o)} x ${this.pruneNum(s)}`;
                                    var h = "display:block;",
                                        {
                                            innerWidth: d,
                                            innerHeight: p
                                        } = yield j.getWindowInfo(), f = d - 100, g = 20 + 6.2 * (this._tagNameTipsText.textContent.length + this._idTipsText.textContent.length + this._classTipsText.textContent.length) + 16 + 1 + 6 * this._sizeTipsText.textContent.length;
                                    h += `max-width:${f}px;min-width:120px;width:${g}px;`, j.appendChild(this._domTree.__wxSlotChildren[0], this._inspectTipsContainer), j.updateStyle(this._inspectTipsContainer, h);
                                    var v = (yield j.getBoundingClientRect(this._inspectTipsContainer.$$)).height,
                                        m = n + Math.min(f, g) > d,
                                        y = t => {
                                            if (m) {
                                                j.setStyle(this._arrowTips, t ? '\n  all: unset;\n  pointer-events: none;\n  top: 100%;\n  margin-top: -4px;\n  transform: rotate(45deg) skewX(5deg) skewY(5deg);\n  content: "";\n  position: absolute;\n  z-index: -100;\n  right: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 0 0 2px 0;\n  background: #ffffff;\n  bottom: 100%;\n  margin-bottom: -4px;\n' : '\n  all: unset;\n  pointer-events: none;\n  bottom: 100%;\n  margin-bottom: -4px;\n  transform: rotate(225deg) skewX(5deg) skewY(5deg);\n  content: "";\n  position: absolute;\n  z-index: -100;\n  right: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 0 0 2px 0;\n  background: #ffffff;\n');
                                                var e = r + n - Math.min(f, g);
                                                h += `left:${Math.max(0,e)}px;`, e < 0 && (h += `width:${Math.min(f,g)+e}px;`)
                                            } else j.setStyle(this._arrowTips, t ? W : '\n  all: unset;\n  pointer-events: none;\n  bottom: 100%;\n  margin-bottom: -4px;\n  transform: rotate(225deg) skewX(5deg) skewY(5deg);\n  content: "";\n  position: absolute;\n  z-index: -100;\n  left: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 0 0 2px 0;\n  background: #ffffff;\n'), h += `left:${n}px;`
                                        };
                                    if (e > p - e - i) {
                                        y(!0);
                                        var b = e - v - 4;
                                        h += `top:${b>0?b:0}px;`
                                    } else {
                                        y(!1);
                                        var x = e + i + 4;
                                        h += `top:${x+v<p?x:p-v}px;`
                                    }
                                    j.updateStyle(this._inspectTipsContainer, h)
                                }
                            }))
                        }
                        show(t, e = V) {
                            return a(this, void 0, void 0, (function*() {
                                this._tasks.push({
                                    type: "show",
                                    target: t,
                                    config: e
                                }), this.handleTasks()
                            }))
                        }
                        hide() {
                            this._tasks.push({
                                type: "hide"
                            }), this.handleTasks()
                        }
                        handleTasks() {
                            return a(this, void 0, void 0, (function*() {
                                var t = yield function() {
                                    return a(this, void 0, void 0, (function*() {
                                        var t = yield function() {
                                            return a(this, void 0, void 0, (function*() {
                                                return new Promise(((t, e) => {
                                                    wx.getCurrentWebviewId({
                                                        success(e) {
                                                            t(e.webviewId)
                                                        },
                                                        fail() {
                                                            e()
                                                        }
                                                    })
                                                }))
                                            }))
                                        }();
                                        return __virtualDOM__.getDomTreeByPageId(t)
                                    }))
                                }();
                                if (t && this._domTree === t || (this._runing = !1), this._tasks.length && !this._runing) {
                                    for (this._runing = !0; this._tasks.length;) {
                                        var e = this._tasks.shift();
                                        try {
                                            "show" === e.type ? yield this.handleShowTask(t, e.target, e.config): this.handleHideTask()
                                        } catch (t) {
                                            console.error("handle highlight task fail:", e, t)
                                        } finally {
                                            this._runing = !1
                                        }
                                    }
                                    this._runing = !1
                                }
                            }))
                        }
                        handleShowTask(t, e, n = V) {
                            return a(this, void 0, void 0, (function*() {
                                try {
                                    if (!e || e === this._target || !e.$$) return;
                                    this._domTree !== t && (this.destroyDOM(), this.destroyTips()), this._domTree = t, this._tipsInited || this.initTips(), this._domInited || this.initDOM(), this._target = e;
                                    var r = yield j.getBoundingClientRect(e.$$), i = yield j.getComputedStyle(e.$$), o = {};
                                    ["width", "height", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding-left", "padding-right", "padding-top", "padding-bottom", "border-left-width", "border-right-width", "border-top-width", "border-bottom-width"].forEach((t => {
                                        o[t] = parseFloat(i[t].replace("px", ""))
                                    }));
                                    var {
                                        top: s,
                                        left: a,
                                        width: u,
                                        height: l
                                    } = r, {
                                        scrollLeft: c,
                                        scrollTop: h
                                    } = yield j.getWindowInfo();
                                    this._dom.update({
                                        style: Object.assign(Object.assign({}, this.formatConfigColorRgba(n, "marginColor")), {
                                            position: "absolute",
                                            display: "block"
                                        }),
                                        position: {
                                            top: s - o["margin-top"] + h,
                                            left: a - o["margin-left"] + c,
                                            width: u + o["margin-left"] + o["margin-right"],
                                            height: l + o["margin-top"] + o["margin-bottom"]
                                        }
                                    }), this._borderDom.update({
                                        style: Object.assign(Object.assign({}, this.formatConfigColorRgba(n, "borderColor")), {
                                            position: "absolute",
                                            display: "block"
                                        }),
                                        position: {
                                            top: o["margin-top"],
                                            left: o["margin-left"],
                                            width: u,
                                            height: l
                                        }
                                    }), this._paddingDom.update({
                                        style: Object.assign(Object.assign({}, this.formatConfigColorRgba(n, "paddingColor")), {
                                            position: "absolute",
                                            display: "block"
                                        }),
                                        position: {
                                            top: o["margin-top"] + o["border-top-width"],
                                            left: o["margin-left"] + o["border-left-width"],
                                            width: u - o["border-left-width"] - o["border-right-width"],
                                            height: l - o["border-top-width"] - o["border-bottom-width"]
                                        }
                                    }), this._sizeDom.update({
                                        style: Object.assign(Object.assign({}, this.formatConfigColorRgba(n, "contentColor")), {
                                            position: "absolute",
                                            display: "block"
                                        }),
                                        position: {
                                            top: o["margin-top"] + o["border-top-width"] + o["padding-top"],
                                            left: o["margin-left"] + o["border-left-width"] + o["padding-left"],
                                            width: u - o["border-left-width"] - o["border-right-width"] - o["padding-left"] - o["padding-right"],
                                            height: l - o["border-top-width"] - o["border-bottom-width"] - o["padding-top"] - o["padding-bottom"]
                                        }
                                    }), yield this.setTips({
                                        top: s - o["margin-top"] + h,
                                        left: a - o["margin-left"] + c,
                                        width: u + o["margin-left"] + o["margin-right"],
                                        height: l + o["margin-top"] + o["margin-bottom"],
                                        contentWidth: u,
                                        contentHeight: l
                                    })
                                } catch (t) {
                                    "cancel" !== t.message && console.error("highlight show error:", t)
                                }
                            }))
                        }
                        handleHideTask() {
                            this.hideDOM(), this.hideTips(), this._target = null, j.startRender()
                        }
                        pruneNum(t) {
                            return t.toFixed(2).replace(/\.?(0{1,})$/i, "")
                        }
                        formatConfigColorRgba(t, e = {}) {
                            if (t[e]) {
                                var {
                                    r: n,
                                    g: r,
                                    b: i,
                                    a: o
                                } = t[e];
                                return {
                                    background: `#${X(n)}${X(r)}${X(i)}`,
                                    opacity: o
                                }
                            }
                        }
                    },
                    tt = "#text",
                    et = new Set(["class", "is"]);
                ! function(t) {
                    t[t.Unknown = 0] = "Unknown", t[t.TextNode = 1] = "TextNode", t[t.VirtualNode = 2] = "VirtualNode", t[t.Component = 3] = "Component", t[t.NativeNode = 4] = "NativeNode", t[t.Element = 5] = "Element"
                }(Q || (Q = {}));
                class nt {
                    constructor({
                        exparser: t,
                        root: e,
                        customTabbar: n,
                        hideVirtual: r = !0
                    }) {
                        var i;
                        this.name = "mini-app", this.nodeId = new T(4), this.inspectedId = new T(0), this.nodeIdMap = new Map, this.idNodeMap = new Map, this.options = {}, this.skippedDOMAttrs = et, this.getNodeType = t => t instanceof this.exparser.TextNode ? Q.TextNode : t instanceof this.exparser.VirtualNode ? Q.VirtualNode : t instanceof this.exparser.Component ? Q.Component : t instanceof this.exparser.NativeNode ? Q.NativeNode : t instanceof this.exparser.Element ? Q.Element : Q.Unknown, this.getNodeName = (t, e = "") => {
                            throw new Error("no implement")
                        }, this.domify = ({
                            root: t,
                            node: e,
                            nodeId: n,
                            customTabbar: r,
                            currentDepth: i = 1,
                            depth: o = 1,
                            parentId: s,
                            emit: a,
                            env: u = {},
                            defalutNodeName: l = ""
                        } = {}) => {
                            var c, h, d, p, f, g, v, m;
                            if (e ? this.nodeIdMap.has(e) || (n = this.nodeId.id, this.addToMap(e, n)) : n ? e = this.getNodeById(n) : r ? (e = this.customTabbar, this.addToMap(e, 4)) : (e = t, this.addToMap(e, 3)), !e) return null;
                            n || (n = this.nodeIdMap.get(e));
                            var y = this.getNodeType(e),
                                b = {
                                    type: y
                                };
                            if (this.observeNode({
                                    root: t,
                                    emit: a,
                                    nodeId: n
                                }), y === Q.TextNode) return {
                                nodeId: n,
                                parentId: s,
                                backendNodeId: n,
                                nodeType: 3,
                                nodeName: tt,
                                localName: tt,
                                nodeValue: e.textContent
                            };
                            b.is = e.is, b.parentId = s, b.nodeType = 1, b.nodeId = b.backendNodeId = n, b.nodeName = b.localName = this.getNodeName(e, l), e.__component__ && (b.component = e.__component__, b.componentId = parseInt(this.getAttributeValue(e, "wx:nodeid"))), "slot" === (null === (c = null == e ? void 0 : e.__wxSlotParent) || void 0 === c ? void 0 : c.is) && "string" == typeof(null === (h = null == e ? void 0 : e.__wxSlotParent) || void 0 === h ? void 0 : h.__slotName) && (null === (f = null === (p = null === (d = null == e ? void 0 : e.__wxSlotParent) || void 0 === d ? void 0 : d.ownerShadowRoot) || void 0 === p ? void 0 : p.__wxHost) || void 0 === f ? void 0 : f.__component__) && !(null === (m = null === (v = null === (g = null == e ? void 0 : e.__wxSlotParent) || void 0 === g ? void 0 : g.ownerShadowRoot) || void 0 === v ? void 0 : v.__wxHost) || void 0 === m ? void 0 : m.__virtual) && (b.slotParentId = parseInt(this.getAttributeValue(e.__wxSlotParent.ownerShadowRoot.__wxHost, "wx:nodeid")));
                            var x = this.getChildren(e),
                                w = [];
                            if (this.options.hideVirtual && e !== this.customTabbar && (y === Q.VirtualNode || e.__component__ && e.__virtual)) return null == x || x.forEach(((e, n) => {
                                if (!z(e)) {
                                    var r = this.domify({
                                        root: t,
                                        node: e,
                                        depth: o,
                                        currentDepth: i,
                                        parentId: s,
                                        emit: a,
                                        defalutNodeName: l
                                    });
                                    r && (Array.isArray(r) ? w.push(...r) : w.push(r))
                                }
                            })), w;
                            (i <= o || -1 === o) && (null == x || x.forEach(((e, n) => {
                                if (!z(e)) {
                                    var r = this.domify({
                                        root: t,
                                        node: e,
                                        depth: o,
                                        currentDepth: i + 1,
                                        parentId: b.nodeId,
                                        emit: a,
                                        defalutNodeName: l
                                    });
                                    r && (Array.isArray(r) ? w.push(...r) : w.push(r))
                                }
                            })), b.children = i !== o && w.length ? w : void 0, b.childNodeCount = null == w ? void 0 : w.length);
                            var _ = this.getAttributes(e);
                            return _.length && (b.attributes = _), b
                        }, this.setInspectedNode = t => (this.inspectedNode = this.getNodeById(t), this.inspectedNode ? t : null), this.setInspectedNodeForExparser = t => {
                            var e, {
                                node: n,
                                variableName: r
                            } = null !== (e = this.idNodeMap.get(t)) && void 0 !== e ? e : {};
                            if (!n) return null;
                            if (!r) {
                                for (r = `$$${this.inspectedId.id}`; Reflect.has(globalThis, r);) r = `$$${this.inspectedId.id}`;
                                this.idNodeMap.get(t) && (this.idNodeMap.get(t).variableName = r)
                            }
                            return Reflect.set(globalThis, r, n), r
                        }, this.findLogicalParent = t => this.options.hideVirtual ? this.findNearestNonVirtualAncestor(t) : this.getParent(t), this.getChildren = t => {
                            var e;
                            return "string" == typeof t.__slotName ? this.findNearestNonVirtualChildren(null === (e = t.ownerShadowRoot) || void 0 === e ? void 0 : e.__wxHost).filter((e => "slot" === e.is || e.slot === t.__slotName)) : t.__component__ ? [t.shadowRoot] : t.childNodes || []
                        }, this.getSibling = (t, e = "prev") => {
                            var n, {
                                    hideVirtual: r
                                } = this.options,
                                i = this.getParent(t),
                                o = this.getChildren(i),
                                s = Array.prototype.indexOf.call(o, t);
                            if (o.length < 2 || s < 0 || "next" === e && s === o.length - 1 || "prev" === e && 0 === s) return r && this.isVirtual(i) ? this.getSibling(i, e) : null;
                            if ("prev" === e)
                                for (n = o[s - 1]; r && this.isVirtual(n);) {
                                    var a = this.getChildren(n);
                                    n = a[a.length - 1]
                                } else
                                    for (n = o[s + 1]; r && this.isVirtual(n);) n = this.getChildren(n)[0];
                            return null != n ? n : null
                        }, this.observeNode = ({
                            root: t,
                            nodeId: e = -1,
                            emit: n
                        }) => {
                            var r, {
                                node: i,
                                observer: o
                            } = null !== (r = this.idNodeMap.get(e)) && void 0 !== r ? r : {};
                            i && (o || (o = this.exparser.Observer.create((r => {
                                var o, s, a, u, l, c, h, d, p;
                                switch (r.type) {
                                    case "characterData":
                                        var f = i.textContent;
                                        null == n || n({
                                            method: "DOM.characterDataModified",
                                            params: {
                                                nodeId: e,
                                                characterData: f
                                            }
                                        });
                                        break;
                                    case "properties":
                                        var g = r.propertyName,
                                            v = i[g];
                                        if (this.options.hideVirtual && (null === (o = null == r ? void 0 : r.target) || void 0 === o ? void 0 : o.__virtual)) return;
                                        null == v ? null == n || n({
                                            method: "DOM.attributeRemoved",
                                            params: {
                                                nodeId: e,
                                                name: g
                                            }
                                        }) : null == n || n({
                                            method: "DOM.attributeModified",
                                            params: {
                                                nodeId: e,
                                                name: g,
                                                value: "number" == typeof v ? v.toString() : v
                                            }
                                        });
                                        break;
                                    case "childList":
                                        var m = this.nodeIdMap.get(r.target),
                                            y = (null === (s = i.childNodes) || void 0 === s ? void 0 : s.length) || 0,
                                            b = y;
                                        if (null === (a = r.removedNodes) || void 0 === a ? void 0 : a.length)
                                            for (var x of (b = y - (null === (u = r.removedNodes) || void 0 === u ? void 0 : u.length), r.removedNodes))
                                                if (!z(x)) {
                                                    var w = null !== (l = this.nodeIdMap.get(x)) && void 0 !== l ? l : -1;
                                                    null == n || n({
                                                        method: "DOM.childNodeRemoved",
                                                        params: {
                                                            parentNodeId: m,
                                                            nodeId: w
                                                        }
                                                    }), this.nodeIdMap.delete(x), this.idNodeMap.delete(w);
                                                    var {
                                                        observer: _
                                                    } = null !== (c = this.idNodeMap.get(e)) && void 0 !== c ? c : {};
                                                    null == _ || _.disconnect()
                                                } if (null === (h = r.addedNodes) || void 0 === h ? void 0 : h.length)
                                            for (var E of (b = y + (null === (d = r.addedNodes) || void 0 === d ? void 0 : d.length), r.addedNodes))
                                                if (!z(E)) {
                                                    var T = null !== (p = this.nodeIdMap.get(this.getSibling(E))) && void 0 !== p ? p : -1,
                                                        N = this.domify({
                                                            root: t,
                                                            node: E,
                                                            parentId: m,
                                                            emit: n
                                                        });
                                                    n({
                                                        method: "DOM.childNodeInserted",
                                                        params: {
                                                            parentNodeId: m,
                                                            previousNodeId: T,
                                                            node: N
                                                        }
                                                    })
                                                } b !== y && (null == n || n({
                                            method: "DOM.childNodeCountUpdated",
                                            params: {
                                                nodeId: e,
                                                childNodeCount: y
                                            }
                                        }))
                                }
                            })), o.observe(i, {
                                properties: !0,
                                childList: !0,
                                characterData: i instanceof this.exparser.TextNode
                            }), this.idNodeMap.set(e, {
                                node: i,
                                observer: o
                            })))
                        }, this._exparser = t, this._root = e, this._customTabbar = n, this.options = {
                            hideVirtual: r
                        }, this.document = {
                            nodeId: 1,
                            backendNodeId: 1,
                            childNodeCount: 1,
                            children: [],
                            nodeType: 9,
                            nodeName: "#document"
                        };
                        var o = {
                            parentId: 1,
                            nodeId: 2,
                            backendNodeId: 2,
                            nodeType: 10,
                            nodeName: this.name
                        };
                        null === (i = this.document.children) || void 0 === i || i.push(o), this.registerCustomComponents()
                    }
                    getRoot() {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("no implement")
                        }))
                    }
                    get exparser() {
                        return this._exparser ? this._exparser() : window.exparser
                    }
                    get virtualDOM() {
                        return this._virtualDOM ? this._virtualDOM() : window.__virtualDOM__
                    }
                    get customTabbar() {
                        return this._customTabbar ? this._customTabbar() : window.__TAB_BAR__
                    }
                    get webviewEngine() {
                        return this._webviewEngine ? this._webviewEngine() : window.__webviewEngine__
                    }
                    get skylineEngine() {
                        return this._skylineEngine ? this._skylineEngine() : window.__skylineEngine__
                    }
                    registerCustomComponents() {
                        this.exparser.registerElement({
                            is: "wx-inspectee-highlight-element",
                            template: "<span></span>",
                            behaviors: ["wx-base"],
                            properties: {},
                            attached() {}
                        })
                    }
                    getPageContext() {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    getPageContextId() {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    getStyleSCopeId(t, e) {
                        return this.webviewEngine.getStyleSheetScope(t, e)
                    }
                    addToMap(t, e) {
                        this.nodeIdMap.set(t, e), this.idNodeMap.set(e, {
                            node: t
                        }), t.setAttribute && t.setAttribute("wx:nodeid", e)
                    }
                    removeNode(t) {
                        var e;
                        return a(this, void 0, void 0, (function*() {
                            var n = this.getNodeById(t);
                            if (n !== (yield this.getRoot())) {
                                var r = this.getObserverById(t);
                                r && r.disconnect(), null === (e = n.parentNode) || void 0 === e || e.removeChild(n), this.nodeIdMap.delete(n), this.idNodeMap.delete(t)
                            }
                        }))
                    }
                    getNodeById(t) {
                        var e;
                        return null === (e = this.idNodeMap.get(t)) || void 0 === e ? void 0 : e.node
                    }
                    getObserverById(t) {
                        var e;
                        return null === (e = this.idNodeMap.get(t)) || void 0 === e ? void 0 : e.observe
                    }
                    requestIdForNode(t) {
                        var e = this.nodeIdMap.get(t);
                        return e || (e = this.nodeId.id, this.addToMap(t, e)), e
                    }
                    isWxComponent(t) {
                        var e;
                        return null === (e = t.is) || void 0 === e ? void 0 : e.startsWith("wx-")
                    }
                    spreadScopeData() {
                        this.virtualDOM ? this.virtualDOM.spreadScopeDataToDOMNode() : setTimeout((() => {
                            this.spreadScopeData()
                        }), 200)
                    }
                    isVirtual(t) {
                        return t instanceof this.exparser.VirtualNode
                    }
                    getParent(t) {
                        return this.isVirtual(t) ? t.__wxSlotParent : t.parentNode
                    }
                    findNearestNonVirtualAncestor(t) {
                        for (var e = t; this.isVirtual(e);) e = e.__wxSlotParent;
                        return null == e ? void 0 : e.parentNode
                    }
                    findNearestNonVirtualChildren(t) {
                        var e = t.childNodes || [],
                            n = [];
                        return e.forEach((t => {
                            this.isVirtual(t) && "slot" !== t.is ? n = n.concat(this.findNearestNonVirtualChildren(t)) : n.push(t)
                        })), n
                    }
                    getDocument({
                        depth: t,
                        emit: e
                    } = {}) {
                        return a(this, void 0, void 0, (function*() {
                            var n = yield this.getRoot();
                            if (!n) return this.document;
                            var r = this.domify({
                                root: n,
                                depth: t,
                                parentId: this.document.nodeId,
                                emit: e
                            });
                            if (this.document.children[1] = r, this.customTabbar) {
                                var i = this.domify({
                                    root: n,
                                    depth: t,
                                    parentId: this.document.nodeId,
                                    emit: e,
                                    customTabbar: !0
                                });
                                this.document.children[2] = i
                            }
                            return this.document.childNodeCount = this.document.children.length, this.document
                        }))
                    }
                }
                var rt = class {
                    constructor() {
                        this.enabled = !1
                    }
                    getExparserNodeFromParams(t) {
                        return a(this, void 0, void 0, (function*() {
                            var e, {
                                nodeId: n,
                                backendNodeId: r,
                                objectId: i
                            } = t;
                            if (n || r) e = this.tree.getNodeById(n || r);
                            else if (i) {
                                var o = yield this.requestNode({
                                    objectId: i
                                });
                                e = this.tree.getNodeById(o.nodeId)
                            }
                            return e || console.warn("can not found node", t), e
                        }))
                    }
                    scrollIntoViewIfNeeded(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    collectClassNamesFromSubtree(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    copyTo(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    describeNode(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    discardSearchResults(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    disable() {
                        return a(this, void 0, void 0, (function*() {
                            this.enabled = !1
                        }))
                    }
                    enable() {
                        return a(this, void 0, void 0, (function*() {
                            this.enabled = !0
                        }))
                    }
                    focus(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    getAttributes(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e
                            } = t, n = yield this.getExparserNodeFromParams({
                                nodeId: e
                            });
                            return {
                                attributes: this.tree.getAttributes(n)
                            }
                        }))
                    }
                    getBoxModel(t) {
                        throw new Error("Method not implemented.")
                    }
                    getContentQuads(t) {
                        throw new Error("Method not implemented.")
                    }
                    getDocument(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                depth: e = 2
                            } = t;
                            try {
                                return {
                                    root: yield this.tree.getDocument({
                                        depth: e,
                                        emit: t => {
                                            this.bridge.emit(t)
                                        }
                                    })
                                }
                            } catch (t) {
                                throw console.error(t), t
                            }
                        }))
                    }
                    getFlattenedDocument(t) {
                        throw new Error("Method not implemented.")
                    }
                    getNodesForSubtreeByStyle(t) {
                        throw new Error("Method not implemented.")
                    }
                    getNodeForLocation(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    getOuterHTML(t) {
                        throw new Error("Method not implemented.")
                    }
                    getRelayoutBoundary(t) {
                        throw new Error("Method not implemented.")
                    }
                    getSearchResults(t) {
                        throw new Error("Method not implemented.")
                    }
                    hideHighlight() {
                        return a(this, void 0, void 0, (function*() {
                            this.highlight.hide()
                        }))
                    }
                    highlightNode(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e,
                                backendNodeId: n,
                                objectId: r,
                                selector: i,
                                highlightConfig: o = {}
                            } = t || {}, s = yield this.getExparserNodeFromParams({
                                nodeId: e,
                                backendNodeId: n,
                                objectId: r
                            });
                            s && i && (s = s.querySelector(i)), s && (yield this.highlight.show(s, o))
                        }))
                    }
                    highlightRect() {
                        throw new Error("Method not implemented.")
                    }
                    markUndoableState() {
                        throw new Error("Method not implemented.")
                    }
                    moveTo(t) {
                        throw new Error("Method not implemented.")
                    }
                    performSearch(t) {
                        throw new Error("Method not implemented.")
                    }
                    pushNodeByPathToFrontend(t) {
                        throw new Error("Method not implemented.")
                    }
                    pushNodesByBackendIdsToFrontend(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                backendNodeIds: e
                            } = t;
                            return {
                                nodeIds: e
                            }
                        }))
                    }
                    querySelector(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    querySelectorAll(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    redo() {
                        throw new Error("Method not implemented.")
                    }
                    removeAttribute(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e,
                                name: n
                            } = t, r = yield this.getExparserNodeFromParams(t);
                            this.tree.removeAttributes(r, n), this.bridge.emit({
                                method: "DOM.attributeRemoved",
                                params: {
                                    nodeId: e,
                                    name: n
                                }
                            })
                        }))
                    }
                    setAttributeValue(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e,
                                name: n,
                                value: r
                            } = t, i = yield this.getExparserNodeFromParams(t);
                            this.tree.setAttributeValue(i, n, r), this.bridge.emit({
                                method: "DOM.attributeModified",
                                params: {
                                    nodeId: e,
                                    name: n,
                                    value: r
                                }
                            })
                        }))
                    }
                    setAttributesAsText(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                name: e,
                                nodeId: n,
                                text: r
                            } = t;
                            if (!e) throw new Error("invalid name");
                            for (var i = yield this.getExparserNodeFromParams(t), o = {}, s = r.match(/(\w+)(-\w+)?\s*=\s*['"]([^"]*)['"]/g) || [], a = 0, u = s.length; a < u; a++) {
                                var l = s[a].split("="),
                                    c = l[0].trim(),
                                    h = l[1] ? l[1].trim().replace(/^"/, "").replace(/"$/, "") : "true";
                                o[c] = h, this.tree.getAttributeValue(i, c) !== h && this.setAttributeValue({
                                    nodeId: n,
                                    name: c,
                                    value: h
                                })
                            }
                            e && !o[e] && this.removeAttribute({
                                nodeId: n,
                                name: e
                            })
                        }))
                    }
                    removeNode(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e
                            } = t;
                            yield this.tree.removeNode(e)
                        }))
                    }
                    requestChildNodes(t) {
                        var e;
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: n,
                                depth: r = 2,
                                pierce: i
                            } = t, o = this.tree.domify({
                                depth: r,
                                nodeId: n,
                                emit: t => {
                                    this.bridge.emit(t)
                                }
                            });
                            this.bridge.emit({
                                method: "DOM.setChildNodes",
                                params: {
                                    parentId: n,
                                    nodes: null !== (e = o.children) && void 0 !== e ? e : []
                                }
                            })
                        }))
                    }
                    requestNode(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    resolveNode(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("Method not implemented.")
                        }))
                    }
                    setFileInputFiles(t) {
                        throw new Error("Method not implemented.")
                    }
                    setNodeStackTracesEnabled(t) {
                        throw new Error("Method not implemented.")
                    }
                    getNodeStackTraces(t) {
                        throw new Error("Method not implemented.")
                    }
                    getFileInfo(t) {
                        throw new Error("Method not implemented.")
                    }
                    setInspectedNode(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e
                            } = t;
                            this.tree.setInspectedNode(e)
                        }))
                    }
                    setNodeName(t) {
                        throw new Error("Method not implemented.")
                    }
                    setNodeValue(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                value: e
                            } = t, n = yield this.getExparserNodeFromParams(t);
                            this.tree.getNodeType(n) === Q.TextNode && (n.textContent = e)
                        }))
                    }
                    setOuterHTML(t) {
                        throw new Error("Method not implemented.")
                    }
                    undo() {
                        throw new Error("Method not implemented.")
                    }
                    getFrameOwner(t) {
                        throw new Error("Method not implemented.")
                    }
                    getContainerForNode(t) {
                        throw new Error("Method not implemented.")
                    }
                    setHideElement(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e,
                                hide: n
                            } = t, r = yield this.getExparserNodeFromParams({
                                nodeId: e
                            });
                            if (r) {
                                var i = this.tree.getAttributeValue(r, "style");
                                i.includes("visibility:") ? i = i.replace(/visibility:(.*?);/, n ? "visibility:hidden;" : "") : i += "visibility:hidden;", this.tree.setAttributeValue(r, "style", i), this.bridge.emit({
                                    method: "DOM.attributeModified",
                                    params: {
                                        nodeId: e,
                                        name: "style",
                                        value: i
                                    }
                                })
                            }
                        }))
                    }
                    scrollIntoView(t) {
                        return a(this, void 0, void 0, (function*() {
                            return yield this.scrollIntoViewIfNeeded(t)
                        }))
                    }
                    getComponentData(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e
                            } = t, n = this.tree.getNodeById(e), r = n.data, i = this.tree.virtualDOM.getNodeId(n);
                            if (!i) {
                                for (r = null; n.parentNode && (n = n.parentNode).__virtual;);
                                n.__wxHost && n.__wxHost.__virtual && (r = n.__wxHost.data, i = this.tree.virtualDOM.getNodeId(n.__wxHost))
                            }
                            this.lastActiveNodeId = i, this.hasListenOnVdSyncBatch || (this.listenOnVdSyncBatch(), this.hasListenOnVdSyncBatch = !0), this.bridge.emit({
                                method: "WxComponent.componentDataChanged",
                                params: {
                                    componentData: r,
                                    exparseNodeId: this.lastActiveNodeId
                                }
                            })
                        }))
                    }
                    componentDataByVdSync(t) {
                        var e = this.tree.virtualDOM.getNodeById(t).data;
                        e && this.bridge.emit({
                            method: "WxComponent.componentDataChanged",
                            params: {
                                componentData: e,
                                exparseNodeId: t
                            }
                        })
                    }
                    listenOnVdSyncBatch() {
                        var t = this.lastActiveNodeId,
                            e = this,
                            n = () => {
                                var n = Date.now();
                                if (!e.lastTimeForComponentData || n - e.lastTimeForComponentData > 1e3) return e.componentDataByVdSync(t), void(e.lastTimeForComponentData = Date.now());
                                this.timerForComponentData && clearTimeout(this.timerForComponentData), this.timerForComponentData = setTimeout((function() {
                                    e.componentDataByVdSync(t), e.lastTimeForComponentData = Date.now()
                                }), 1e3)
                            };
                        (WeixinJSBridge.addSubscribeListener || wx.subscribe)("vdSyncBatch", (function(e) {
                            for (var r of (Array.isArray(e) || (e = e.data), e))
                                if (r instanceof Array) {
                                    for (var i of r)
                                        if (i === t) {
                                            n();
                                            break
                                        }
                                } else r && r.nodeId && r.nodeId === t && n()
                        }))
                    }
                    on(t, e) {
                        throw new Error("Method not implemented.")
                    }
                };
                i([(0, r.f3)(f), s("design:type", r.W2)], rt.prototype, "container", void 0), i([(0, r.f3)(h), s("design:type", g)], rt.prototype, "bridge", void 0), rt = i([(0, r.b2)()], rt);
                var it = t => t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`)),
                    ot = class {
                        get enabled() {
                            return this.DOMAdapter.enabled && this._enabled
                        }
                        disable() {
                            return a(this, void 0, void 0, (function*() {
                                this._enabled = !1
                            }))
                        }
                        enable() {
                            return a(this, void 0, void 0, (function*() {
                                if (!this.DOMAdapter.enabled) throw new Error("Enable DOM first.");
                                this._enabled = !0, this.cssModel.init(this.DOMAdapter, this.bridge), this.cssModel.virtualSheets.forEach((({
                                    header: t
                                }) => {
                                    this.bridge.emit({
                                        method: "CSS.styleSheetAdded",
                                        params: {
                                            header: t
                                        }
                                    })
                                }))
                            }))
                        }
                        addRule(t) {
                            throw new Error("Method not implemented.")
                        }
                        collectClassNames(t) {
                            throw new Error("Method not implemented.")
                        }
                        createStyleSheet(t) {
                            throw new Error("Method not implemented.")
                        }
                        forcePseudoState(t) {
                            throw new Error("Method not implemented.")
                        }
                        getBackgroundColors(t) {
                            throw new Error("Method not implemented.")
                        }
                        getComputedStyleForNode(t) {
                            return a(this, void 0, void 0, (function*() {
                                var e = yield this.DOMAdapter.getExparserNodeFromParams(t);
                                return {
                                    computedStyle: yield this.getComputedStyleByNode(e)
                                }
                            }))
                        }
                        getInlineStylesForNode(t) {
                            return a(this, void 0, void 0, (function*() {
                                var e = yield this.DOMAdapter.getExparserNodeFromParams(t);
                                return {
                                    inlineStyle: this.getInlineStylesByNode(e)
                                }
                            }))
                        }
                        getMatchedStylesForNode(t) {
                            return a(this, void 0, void 0, (function*() {
                                try {
                                    var e = yield this.DOMAdapter.getExparserNodeFromParams(t);
                                    return {
                                        matchedCSSRules: yield this.getMatchedCSSRulesByNode(e),
                                        inlineStyle: this.getInlineStylesByNode(e),
                                        inherited: this.getInheritedCSSRulesByNode(e)
                                    }
                                } catch (t) {
                                    throw console.error("CSSAdapter::getMatchedStylesForNode", t), t
                                }
                            }))
                        }
                        getComputedStyleByNode(t) {
                            return a(this, void 0, void 0, (function*() {
                                return (null == t ? void 0 : t.$$) ? ((t, e) => {
                                    var n = [],
                                        {
                                            baseOffset: r = 0,
                                            startLine: i = 0,
                                            disabled: o = !1
                                        } = {},
                                        s = r;
                                    for (var a in t) {
                                        var u = t[a];
                                        if (isNaN(+a) && "cssText" !== a && "string" == typeof u && u.length) {
                                            var l = it(a),
                                                c = `${l}: ${u};`;
                                            n.push({
                                                name: l,
                                                value: u,
                                                text: c,
                                                disabled: o,
                                                important: /!important/g.test(u),
                                                range: {
                                                    startLine: i,
                                                    endLine: i,
                                                    startColumn: s,
                                                    endColumn: s += c.length
                                                }
                                            })
                                        }
                                    }
                                    return n
                                })(yield j.getComputedStyle(t.$$)) : []
                            }))
                        }
                        getInlineStylesByNode(t) {
                            if (null == t ? void 0 : t.$$) return this.cssModel.getInlineRules(t)
                        }
                        getMatchedCSSRulesByNode(t) {
                            return a(this, void 0, void 0, (function*() {
                                return (null == t ? void 0 : t.$$) ? yield this.cssModel.getMatchedRules(t): []
                            }))
                        }
                        getMediaQueries() {
                            throw new Error("Method not implemented.")
                        }
                        getPlatformFontsForNode(t) {
                            throw new Error("Method not implemented.")
                        }
                        getStyleSheetText(t) {
                            throw new Error("Method not implemented.")
                        }
                        trackComputedStyleUpdates(t) {
                            throw new Error("Method not implemented.")
                        }
                        takeComputedStyleUpdates() {
                            throw new Error("Method not implemented.")
                        }
                        setEffectivePropertyValueForNode(t) {
                            throw new Error("Method not implemented.")
                        }
                        setKeyframeKey(t) {
                            throw new Error("Method not implemented.")
                        }
                        setMediaText(t) {
                            throw new Error("Method not implemented.")
                        }
                        setContainerQueryText(t) {
                            throw new Error("Method not implemented.")
                        }
                        setRuleSelector(t) {
                            throw new Error("Method not implemented.")
                        }
                        setStyleSheetText(t) {
                            throw new Error("Method not implemented.")
                        }
                        applyStyleEdit(t) {
                            return this.cssModel.applyStyleEdit(t)
                        }
                        setStyleTexts(t) {
                            return a(this, void 0, void 0, (function*() {
                                var {
                                    edits: e
                                } = t;
                                return {
                                    styles: e.map((t => this.applyStyleEdit(t)))
                                }
                            }))
                        }
                        startRuleUsageTracking() {
                            throw new Error("Method not implemented.")
                        }
                        stopRuleUsageTracking() {
                            throw new Error("Method not implemented.")
                        }
                        takeCoverageDelta() {
                            throw new Error("Method not implemented.")
                        }
                        setLocalFontsEnabled(t) {
                            throw new Error("Method not implemented.")
                        }
                        on(t, e) {
                            throw new Error("Method not implemented.")
                        }
                    };
                i([A("DOM"), s("design:type", rt)], ot.prototype, "DOMAdapter", void 0), i([(0, r.f3)(h), s("design:type", g)], ot.prototype, "bridge", void 0), ot = i([(0, r.b2)()], ot);
                var st = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

                function at(t, e) {
                    e = e || {};
                    var n = 1,
                        r = 1;

                    function i(t) {
                        var e = t.match(/\n/g);
                        e && (n += e.length);
                        var i = t.lastIndexOf("\n");
                        r = ~i ? t.length - i : r + t.length
                    }

                    function o() {
                        var t = {
                            line: n,
                            column: r
                        };
                        return function(e) {
                            return e.position = new s(t), p(), e
                        }
                    }

                    function s(t) {
                        this.startColumn = t.column - 1, this.startLine = t.line - 1, this.endColumn = r - 1, this.endLine = n - 1, this.source = e.source
                    }
                    s.prototype.content = t;
                    var a = [];

                    function u(i) {
                        var o = new Error(e.source + ":" + n + ":" + r + ": " + i);
                        if (o.reason = i, o.filename = e.source, o.line = n, o.column = r, o.source = t, !e.silent) throw o;
                        a.push(o)
                    }

                    function l() {
                        return d(/^{\s*/)
                    }

                    function c() {
                        return d(/^}/)
                    }

                    function h() {
                        var e, n = [];
                        for (p(), f(n); t.length && "}" != t.charAt(0) && (e = T() || N());) !1 !== e && (n.push(e), f(n));
                        return n
                    }

                    function d(e) {
                        var n = e.exec(t);
                        if (n) {
                            var r = n[0];
                            return i(r), t = t.slice(r.length), n
                        }
                    }

                    function p() {
                        d(/^\s*/)
                    }

                    function f(t) {
                        var e;
                        for (t = t || []; e = g();) !1 !== e && t.push(e);
                        return t
                    }

                    function g() {
                        var e = o();
                        if ("/" == t.charAt(0) && "*" == t.charAt(1)) {
                            for (var n = 2;
                                "" != t.charAt(n) && ("*" != t.charAt(n) || "/" != t.charAt(n + 1));) ++n;
                            if (n += 2, "" === t.charAt(n - 1)) return u("End of comment missing");
                            var s = t.slice(2, n - 2);
                            return r += 2, i(s), t = t.slice(n), r += 2, e({
                                type: "comment",
                                comment: s
                            })
                        }
                    }

                    function v() {
                        var t = d(/^([^{]+)/);
                        if (t) return ut(t[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (function(t) {
                            return t.replace(/,/g, "‌")
                        })).split(/\s*(?![^(]*\)),\s*/).map((function(t) {
                            return t.replace(/\u200C/g, ",")
                        }))
                    }

                    function m() {
                        var t = o();
                        d(/^[;\s]*/);
                        var e = d(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
                        if (e) {
                            e = ut(e[0]), d(/^:\s*/);
                            var n = d(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
                                r = t({
                                    type: "declaration",
                                    property: e.replace(st, ""),
                                    value: n ? ut(n[0]).replace(st, "") : ""
                                });
                            return d(/^[;\s]*/), r
                        }
                    }

                    function y() {
                        var t, e = [];
                        if (!l()) return u("missing '{'");
                        for (f(e); t = m();) !1 !== t && (e.push(t), f(e));
                        return c() ? e : u("missing '}'")
                    }

                    function b() {
                        for (var t, e = [], n = o(); t = d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) e.push(t[1]), d(/^,\s*/);
                        if (e.length) return n({
                            type: "keyframe",
                            values: e,
                            declarations: y()
                        })
                    }
                    var x = E("import"),
                        w = E("charset"),
                        _ = E("namespace");

                    function E(t) {
                        var e = new RegExp("^@" + t + "\\s*([^;]+);");
                        return function() {
                            var n = o(),
                                r = d(e);
                            if (r) {
                                var i = {
                                    type: t
                                };
                                return i[t] = r[1].trim(), n(i)
                            }
                        }
                    }

                    function T() {
                        if ("@" == t[0]) return function() {
                            var t = o();
                            if (e = d(/^@([-\w]+)?keyframes\s*/)) {
                                var e, n = e[1];
                                if (f(), !(e = d(/^([-\w]+)\s*/))) return u("@keyframes missing name");
                                var r, i = e[1];
                                if (f(), !l()) return u("@keyframes missing '{'");
                                for (var s = f(); r = b();) s.push(r), s = s.concat(f());
                                return c() ? t({
                                    type: "keyframes",
                                    name: i,
                                    vendor: n,
                                    keyframes: s
                                }) : u("@keyframes missing '}'")
                            }
                        }() || function() {
                            var t = o(),
                                e = d(/^@media *([^{]+)/);
                            if (e) {
                                var n = ut(e[1]);
                                if (!l()) return u("@media missing '{'");
                                var r = f().concat(h());
                                return c() ? t({
                                    type: "media",
                                    media: n,
                                    rules: r
                                }) : u("@media missing '}'")
                            }
                        }() || function() {
                            var t = o(),
                                e = d(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                            if (e) return t({
                                type: "custom-media",
                                name: ut(e[1]),
                                media: ut(e[2])
                            })
                        }() || function() {
                            var t = o(),
                                e = d(/^@supports *([^{]+)/);
                            if (e) {
                                var n = ut(e[1]);
                                if (!l()) return u("@supports missing '{'");
                                var r = f().concat(h());
                                return c() ? t({
                                    type: "supports",
                                    supports: n,
                                    rules: r
                                }) : u("@supports missing '}'")
                            }
                        }() || x() || w() || _() || function() {
                            var t = o(),
                                e = d(/^@([-\w]+)?document *([^{]+)/);
                            if (e) {
                                var n = ut(e[1]),
                                    r = ut(e[2]);
                                if (!l()) return u("@document missing '{'");
                                var i = f().concat(h());
                                return c() ? t({
                                    type: "document",
                                    document: r,
                                    vendor: n,
                                    rules: i
                                }) : u("@document missing '}'")
                            }
                        }() || function() {
                            var t = o();
                            if (d(/^@page */)) {
                                var e = v() || [];
                                if (!l()) return u("@page missing '{'");
                                for (var n, r = f(); n = m();) r.push(n), r = r.concat(f());
                                return c() ? t({
                                    type: "page",
                                    selectors: e,
                                    declarations: r
                                }) : u("@page missing '}'")
                            }
                        }() || function() {
                            var t = o();
                            if (d(/^@host\s*/)) {
                                if (!l()) return u("@host missing '{'");
                                var e = f().concat(h());
                                return c() ? t({
                                    type: "host",
                                    rules: e
                                }) : u("@host missing '}'")
                            }
                        }() || function() {
                            var t = o();
                            if (d(/^@font-face\s*/)) {
                                if (!l()) return u("@font-face missing '{'");
                                for (var e, n = f(); e = m();) n.push(e), n = n.concat(f());
                                return c() ? t({
                                    type: "font-face",
                                    declarations: n
                                }) : u("@font-face missing '}'")
                            }
                        }()
                    }

                    function N() {
                        var t = o(),
                            e = v();
                        return e || (e = ""), f(), t({
                            type: "rule",
                            selectors: e,
                            declarations: y()
                        })
                    }
                    return lt({
                        type: "stylesheet",
                        stylesheet: {
                            rules: h(),
                            parsingErrors: a
                        }
                    })
                }

                function ut(t) {
                    return t ? t.replace(/^\s+|\s+$/g, "") : ""
                }

                function lt(t, e) {
                    var n = t && "string" == typeof t.type,
                        r = n ? t : e;
                    for (var i in t) {
                        var o = t[i];
                        Array.isArray(o) ? o.forEach((function(t) {
                            lt(t, r)
                        })) : o && "object" == typeof o && lt(o, r)
                    }
                    return n && Object.defineProperty(t, "parent", {
                        configurable: !0,
                        writable: !0,
                        enumerable: !1,
                        value: e || null
                    }), t
                }
                var ct, ht, dt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {},
                    pt = {
                        exports: {}
                    },
                    ft = {
                        exports: {}
                    },
                    gt = {
                        exports: {}
                    },
                    vt = {
                        exports: {}
                    };
                vt.exports, ht = /^\s+/, ct = function(t, e) {
                    if (null == e) return t.trimLeft ? t.trimLeft() : t.replace(ht, "");
                    for (var n, r, i = 0, o = t.length, s = e.length, a = !0; a && i < o;)
                        for (a = !1, n = -1, r = t.charAt(i); ++n < s;)
                            if (r === e[n]) {
                                a = !0, i++;
                                break
                            } return i >= o ? "" : t.substr(i, o)
                }, vt.exports = ct;
                var mt = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t, e) {
                        if (null == e) {
                            if (t.trimRight) return t.trimRight();
                            e = " \r\n\t\f\v"
                        }
                        for (var n, r, i = t.length - 1, o = e.length, s = !0; s && i >= 0;)
                            for (s = !1, n = -1, r = t.charAt(i); ++n < o;)
                                if (r === e[n]) {
                                    s = !0, i--;
                                    break
                                } return i >= 0 ? t.substring(0, i + 1) : ""
                    }, t.exports = e
                }(mt, mt.exports),
                function(t, e) {
                    var n = vt.exports,
                        r = mt.exports;
                    e = function(t, e) {
                        return null == e && t.trim ? t.trim() : n(r(t, e), e)
                    }, t.exports = e
                }(gt, gt.exports);
                var yt = {
                        exports: {}
                    },
                    bt = {
                        exports: {}
                    },
                    xt = {
                        exports: {}
                    },
                    wt = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Object.prototype.toString;
                    e = function(t) {
                        return n.call(t)
                    }, t.exports = e
                }(wt, wt.exports),
                function(t, e) {
                    var n = wt.exports;
                    e = function(t) {
                        return "[object Number]" === n(t)
                    }, t.exports = e
                }(xt, xt.exports);
                var _t = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = wt.exports;
                    e = function(t) {
                        var e = n(t);
                        return "[object Function]" === e || "[object GeneratorFunction]" === e || "[object AsyncFunction]" === e
                    }, t.exports = e
                }(_t, _t.exports),
                function(t, e) {
                    var n = xt.exports,
                        r = _t.exports,
                        i = Math.pow(2, 53) - 1;
                    e = function(t) {
                        if (!t) return !1;
                        var e = t.length;
                        return n(e) && e >= 0 && e <= i && !r(t)
                    }, t.exports = e
                }(bt, bt.exports);
                var Et = {
                        exports: {}
                    },
                    Tt = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Object.prototype.hasOwnProperty;
                    e = function(t, e) {
                        return n.call(t, e)
                    }, t.exports = e
                }(Tt, Tt.exports),
                function(t, e) {
                    var n = Tt.exports;
                    e = Object.keys ? Object.keys : function(t) {
                        var e = [];
                        for (var r in t) n(t, r) && e.push(r);
                        return e
                    }, t.exports = e
                }(Et, Et.exports);
                var Nt = {
                        exports: {}
                    },
                    At = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t) {
                        return void 0 === t
                    }, t.exports = e
                }(At, At.exports),
                function(t, e) {
                    var n = At.exports;
                    e = function(t, e, r) {
                        if (n(e)) return t;
                        switch (null == r ? 3 : r) {
                            case 1:
                                return function(n) {
                                    return t.call(e, n)
                                };
                            case 3:
                                return function(n, r, i) {
                                    return t.call(e, n, r, i)
                                };
                            case 4:
                                return function(n, r, i, o) {
                                    return t.call(e, n, r, i, o)
                                }
                        }
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }, t.exports = e
                }(Nt, Nt.exports),
                function(t, e) {
                    var n = bt.exports,
                        r = Et.exports,
                        i = Nt.exports;
                    e = function(t, e, o) {
                        var s, a;
                        if (e = i(e, o), n(t))
                            for (s = 0, a = t.length; s < a; s++) e(t[s], s, t);
                        else {
                            var u = r(t);
                            for (s = 0, a = u.length; s < a; s++) e(t[u[s]], u[s], t)
                        }
                        return t
                    }, t.exports = e
                }(yt, yt.exports);
                var St = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t) {
                        return t
                    }, t.exports = e
                }(St, St.exports);
                var It = {
                        exports: {}
                    },
                    Ct = {
                        exports: {}
                    },
                    Ot = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t) {
                        var e = typeof t;
                        return !!t && ("function" === e || "object" === e)
                    }, t.exports = e
                }(Ot, Ot.exports);
                var Mt = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = wt.exports;
                    e = Array.isArray ? Array.isArray : function(t) {
                        return "[object Array]" === n(t)
                    }, t.exports = e
                }(Mt, Mt.exports);
                var Rt = {
                        exports: {}
                    },
                    Pt = {
                        exports: {}
                    },
                    Dt = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = At.exports,
                        r = yt.exports;
                    e = function(t, e) {
                        return function(i) {
                            return r(arguments, (function(o, s) {
                                if (0 !== s) {
                                    var a = t(o);
                                    r(a, (function(t) {
                                        e && !n(i[t]) || (i[t] = o[t])
                                    }))
                                }
                            })), i
                        }
                    }, t.exports = e
                }(Dt, Dt.exports),
                function(t, e) {
                    e = (0, Dt.exports)(Et.exports), t.exports = e
                }(Pt, Pt.exports);
                var Lt = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = Et.exports;
                    e = function(t, e) {
                        var r = n(e),
                            i = r.length;
                        if (null == t) return !i;
                        t = Object(t);
                        for (var o = 0; o < i; o++) {
                            var s = r[o];
                            if (e[s] !== t[s] || !(s in t)) return !1
                        }
                        return !0
                    }, t.exports = e
                }(Lt, Lt.exports),
                function(t, e) {
                    var n = Pt.exports,
                        r = Lt.exports;
                    e = function(t) {
                        return t = n({}, t),
                            function(e) {
                                return r(e, t)
                            }
                    }, t.exports = e
                }(Rt, Rt.exports);
                var kt = {
                        exports: {}
                    },
                    Bt = {
                        exports: {}
                    },
                    Ft = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Tt.exports,
                        r = Mt.exports;
                    e = function(t, e) {
                        if (r(t)) return t;
                        if (e && n(e, t)) return [t];
                        var s = [];
                        return t.replace(i, (function(t, e, n, r) {
                            s.push(n ? r.replace(o, "$1") : e || t)
                        })), s
                    };
                    var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        o = /\\(\\)?/g;
                    t.exports = e
                }(Ft, Ft.exports),
                function(t, e) {
                    var n = At.exports,
                        r = Ft.exports;
                    e = function(t, e) {
                        var i;
                        for (i = (e = r(e, t)).shift(); !n(i);) {
                            if (null == (t = t[i])) return;
                            i = e.shift()
                        }
                        return t
                    }, t.exports = e
                }(Bt, Bt.exports),
                function(t, e) {
                    var n = Mt.exports,
                        r = Bt.exports;
                    e = function(t) {
                        return n(t) ? function(e) {
                            return r(e, t)
                        } : (e = t, function(t) {
                            return null == t ? void 0 : t[e]
                        });
                        var e
                    }, t.exports = e
                }(kt, kt.exports),
                function(t, e) {
                    var n = _t.exports,
                        r = Ot.exports,
                        i = Mt.exports,
                        o = Nt.exports,
                        s = Rt.exports,
                        a = St.exports,
                        u = kt.exports;
                    e = function(t, e, l) {
                        return null == t ? a : n(t) ? o(t, e, l) : r(t) && !i(t) ? s(t) : u(t)
                    }, t.exports = e
                }(Ct, Ct.exports),
                function(t, e) {
                    var n = Ct.exports,
                        r = Et.exports,
                        i = bt.exports;
                    e = function(t, e, o) {
                        e = n(e, o);
                        for (var s = !i(t) && r(t), a = (s || t).length, u = Array(a), l = 0; l < a; l++) {
                            var c = s ? s[l] : l;
                            u[l] = e(t[c], c, t)
                        }
                        return u
                    }, t.exports = e
                }(It, It.exports),
                function(t, e) {
                    var n = gt.exports,
                        r = yt.exports,
                        i = St.exports,
                        o = It.exports,
                        s = "[\\x20\\t\\r\\n\\f]",
                        a = "(?:\\\\[\\da-fA-F]{1,6}".concat(s, "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+"),
                        u = "\\[".concat(s, "*(").concat(a, ")(?:").concat(s, "*([*^$|!~]?=)").concat(s, "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(").concat(a, "))|)").concat(s, "*\\]"),
                        l = "::?(".concat(a, ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|").concat(u, ")*)|.*)\\)|)"),
                        c = new RegExp("^".concat(s, "*,").concat(s, "*")),
                        h = new RegExp("^".concat(s, "*([>+~]|").concat(s, ")").concat(s, "*")),
                        d = {
                            id: {
                                reg: new RegExp("^#(".concat(a, ")")),
                                value: function(t) {
                                    return t.slice(1)
                                },
                                toStr: function(t) {
                                    return "#".concat(t)
                                }
                            },
                            class: {
                                reg: new RegExp("^\\.(".concat(a, ")")),
                                value: function(t) {
                                    return t.slice(1)
                                },
                                toStr: function(t) {
                                    return ".".concat(t)
                                }
                            },
                            tag: {
                                reg: new RegExp("^(".concat(a, "|[*])")),
                                value: i
                            },
                            attribute: {
                                reg: new RegExp("^".concat(u)),
                                value: function(t) {
                                    return t.slice(1, t.length - 1)
                                },
                                toStr: function(t) {
                                    return "[".concat(t, "]")
                                }
                            },
                            pseudo: {
                                reg: new RegExp("^".concat(l)),
                                value: i
                            }
                        };
                    r(d, (function(t) {
                        t.value || (t.value = i), t.toStr || (t.toStr = i)
                    })), e = {
                        parse: function(t) {
                            t = n(t);
                            for (var e, i, o, s = []; t && (o && !(i = c.exec(t)) || (i && (t = t.slice(i[0].length)), e = [], s.push(e)), o = !1, (i = h.exec(t)) && (o = i.shift(), t = t.slice(o.length), (o = n(o)) || (o = " "), e.push({
                                    value: o,
                                    type: "combinator"
                                })), r(d, (function(r, s) {
                                    var a = r.reg,
                                        u = r.value;
                                    (i = a.exec(t)) && (o = i.shift(), t = t.slice(o.length), o = n(o), e.push({
                                        value: u(o),
                                        type: s
                                    }))
                                })), o););
                            return s
                        },
                        stringify: function(t) {
                            return o(t, (function(t) {
                                return (t = o(t, (function(t) {
                                    var e = t.type,
                                        n = t.value;
                                    return "combinator" === e ? " " === n ? n : " ".concat(n, " ") : d[e].toStr(n)
                                }))).join("")
                            })).join(", ")
                        }
                    }, t.exports = e
                }(ft, ft.exports);
                var jt = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t, e) {
                        return 0 === t.indexOf(e)
                    }, t.exports = e
                }(jt, jt.exports);
                var Ut = {
                        exports: {}
                    },
                    Vt = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t, e, n) {
                        return Array.prototype.indexOf.call(t, e, n)
                    }, t.exports = e
                }(Vt, Vt.exports);
                var Wt = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = wt.exports;
                    e = function(t) {
                        return "[object String]" === n(t)
                    }, t.exports = e
                }(Wt, Wt.exports);
                var Ht = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = yt.exports;
                    e = function(t) {
                        var e = [];
                        return n(t, (function(t) {
                            e.push(t)
                        })), e
                    }, t.exports = e
                }(Ht, Ht.exports),
                function(t, e) {
                    var n = Vt.exports,
                        r = Wt.exports,
                        i = bt.exports,
                        o = Ht.exports;
                    e = function(t, e) {
                        return r(t) ? t.indexOf(e) > -1 : (i(t) || (t = o(t)), n(t, e) >= 0)
                    }, t.exports = e
                }(Ut, Ut.exports);
                var $t = {
                        exports: {}
                    },
                    Gt = {
                        exports: {}
                    },
                    zt = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = xt.exports,
                        r = Ot.exports,
                        i = _t.exports,
                        o = Wt.exports;
                    e = function(t) {
                        if (n(t)) return t;
                        if (r(t)) {
                            var e = i(t.valueOf) ? t.valueOf() : t;
                            t = r(e) ? e + "" : e
                        }
                        return o(t) ? +t : 0 === t ? t : +t
                    }, t.exports = e
                }(zt, zt.exports),
                function(t, e) {
                    var n = zt.exports;
                    e = function(t) {
                        return t ? (t = n(t)) - t % 1 : 0 === t ? t : 0
                    }, t.exports = e
                }(Gt, Gt.exports);
                var Yt = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function() {
                        for (var t = arguments, e = t[0], n = 1, r = t.length; n < r; n++) t[n] > e && (e = t[n]);
                        return e
                    }, t.exports = e
                }(Yt, Yt.exports),
                function(t, e) {
                    var n = Gt.exports,
                        r = Yt.exports;
                    e = function(t, e) {
                        t = t.split("."), e = e.split(".");
                        for (var i = r(t.length, e.length), o = 0; o < i; o++) {
                            var s = n(t[o]),
                                a = n(e[o]);
                            if (s > a) return 1;
                            if (s < a) return -1
                        }
                        return 0
                    }, t.exports = e
                }($t, $t.exports),
                function(t, e) {
                    var n = ft.exports,
                        r = yt.exports,
                        i = jt.exports,
                        o = Ut.exports,
                        s = $t.exports;
                    e = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = e.important,
                            u = void 0 !== s && s,
                            l = e.inlineStyle,
                            c = void 0 !== l && l,
                            h = e.position,
                            d = [0, 0, 0, 0, 0, void 0 === h ? 0 : h];
                        u && (d[0] = 1), c && (d[1] = 1);
                        var p = n.parse(t)[0];
                        return r(p, (function(t) {
                            var e = t.type,
                                n = t.value;
                            switch (e) {
                                case "id":
                                    d[2]++;
                                    break;
                                case "class":
                                case "attribute":
                                    d[3]++;
                                    break;
                                case "pseudo":
                                    o(a, n.replace(/:/g, "")) ? d[4]++ : i(n, "::") || d[3]++;
                                    break;
                                case "tag":
                                    "*" !== n && d[4]++
                            }
                        })), d
                    };
                    var a = ["first-letter", "last-letter", "first-line", "last-line", "first-child", "last-child", "before", "after"];
                    e.compare = function(t, e) {
                        return s(t.join("."), e.join("."))
                    }, t.exports = e
                }(pt, pt.exports);
                var qt = pt.exports;
                class Xt {
                    constructor(t, e = {}) {
                        var n;
                        this.id = "", this.rulesMap = {}, this.id = t;
                        var r, {
                            node: i,
                            fileName: o,
                            disabled: s = !1,
                            isConstructed: a = !1,
                            isInline: u = !1,
                            isMutable: l = !0,
                            ownerNode: c,
                            DOMAdapter: h,
                            bridge: d
                        } = e;
                        r = at(u ? `element.style{${this.getNodeStyleAttr(i)}}` : null == i ? void 0 : i.innerText, {
                            silent: !0
                        }), this.DOMAdapter = h, this.bridge = d, this.fileName = o || "", this.header = {
                            styleSheetId: t,
                            disabled: s,
                            ownerNode: c,
                            isInline: u,
                            isMutable: l,
                            isConstructed: a,
                            origin: "regular",
                            frameId: "114514",
                            sourceURL: o,
                            startLine: 0,
                            endLine: 0,
                            startColumn: 0,
                            endColumn: 0,
                            length: 1,
                            title: null !== (n = null == o ? void 0 : o.split("/").pop()) && void 0 !== n ? n : "untitled"
                        }, this.initSheet(r), this.node = i
                    }
                    get ownerNode() {
                        return this.node
                    }
                    getNodeStyleAttr(t) {
                        throw new Error("Method not implemented.")
                    }
                    initSheet(t) {
                        var e, n;
                        this.sheet = t;
                        var r = null !== (e = null == t ? void 0 : t.stylesheet.rules) && void 0 !== e ? e : [];
                        if (this.rulesMap = {}, this.header.endLine = (null !== (n = null == t ? void 0 : t.stylesheet.rules) && void 0 !== n ? n : []).length, t)
                            for (var i = 0; i < r.length; i++) {
                                var o = r[i];
                                this.rulesMap[i] = o
                            }
                    }
                    getRuleByStartLine(t) {
                        return this.rulesMap[t]
                    }
                    getInlineRule() {
                        for (var t = this.sheet.stylesheet.rules[0], e = {
                                cssProperties: [],
                                styleSheetId: this.id,
                                range: t.position,
                                shorthandEntries: []
                            }, n = 0, r = t.declarations.length; n < r; n++) {
                            var i = t.declarations[n];
                            if ("comment" !== i.type) e.cssProperties.push({
                                disabled: !1,
                                name: i.property,
                                value: i.value,
                                range: i.position
                            });
                            else {
                                var o = i.comment.replace(/;$/, "").trim(),
                                    [s, a] = o.split(":");
                                s = s.trim(), a = a.trim(), e.cssProperties.push({
                                    disabled: !0,
                                    text: `/*${o}*/`,
                                    range: i.position,
                                    name: s,
                                    value: a
                                })
                            }
                        }
                        return e
                    }
                    getMatchedRules(t) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("getMatchedRules not implemented.")
                        }))
                    }
                    sortMatchedStyleRules(t) {
                        for (var e = [], n = t.length, r = [], i = 0; i < n; i++) {
                            var o = t[i].rule;
                            e[i] = qt(o.selectorList.text, {
                                position: i
                            })
                        }
                        e.sort(qt.compare);
                        for (var s = 0; s < n; s++) {
                            var a = e[s][5];
                            r[s] = t[a]
                        }
                        return r
                    }
                    filterMatchedRules(t, e) {
                        return a(this, void 0, void 0, (function*() {
                            throw new Error("filterMatchedRules not implemented.")
                        }))
                    }
                    serializeRule(t) {
                        var e = [],
                            n = t.declarations || [];
                        for (var r in t.selectors) {
                            var i = t.selectors[r],
                                o = {
                                    style: {
                                        cssProperties: [],
                                        range: t.position,
                                        shorthandEntries: []
                                    },
                                    selectorList: {
                                        text: i,
                                        selectors: []
                                    },
                                    styleSheetId: this.id,
                                    media: [],
                                    origin: "regular"
                                },
                                s = t.parent.media;
                            for (var a of (s && (o.media = s), n))
                                if ("comment" != a.type) o.style.cssProperties.push({
                                    disabled: !1,
                                    name: a.property,
                                    value: a.value,
                                    range: a.position
                                });
                                else {
                                    var u = a.comment.replace(/;$/, "").trim(),
                                        [l, c] = u.split(":");
                                    l = l && l.trim() || "", c = c && c.trim() || "", o.style.cssProperties.push({
                                        disabled: !0,
                                        text: `/*${u}*/`,
                                        range: a.position,
                                        name: l,
                                        value: c
                                    })
                                } e.push({
                                rule: o,
                                matchingSelectors: []
                            })
                        }
                        return e
                    }
                    setInlineStyle(t, e) {
                        j.setStyle(t, e, !0)
                    }
                    updateStyleText(t) {
                        throw new Error("updateStyleText not implemented.")
                    }
                    applyStyleEdit(t) {
                        var e, n;
                        try {
                            if (this.header.isInline) {
                                var r = null === (e = this.ownerNode) || void 0 === e ? void 0 : e.__wxElement;
                                this.setInlineStyle(r, t.text), n = at(`element.style{${t.text}}`)
                            } else {
                                for (var {
                                        startLine: i,
                                        endLine: o,
                                        endColumn: s
                                    } = t.range, {
                                        startColumn: a
                                    } = t.range, u = this.node.innerText, l = u.split("\n"), c = [], h = i; h <= o; h++) {
                                    var d = l[h];
                                    h < o ? (c.push(d.substr(a, d.length - a)), a = 0) : c.push(d.substr(a, s - a))
                                }
                                var p = c.join("\n"),
                                    f = at(p),
                                    g = [],
                                    v = f.stylesheet.rules[0];
                                g.push(v.selectors.join(", ")), g.push("{"), g.push(t.text), g.push("}");
                                var m = u.replace(p, g.join(""));
                                n = at(m), this.updateStyleText(m)
                            }
                            this.initSheet(n)
                        } catch (t) {
                            console.warn("applyStyleEdit fail:", t)
                        }
                        return {}
                    }
                }
                class Jt extends Xt {
                    getNodeStyleAttr(t) {
                        var e;
                        return (null === (e = null == t ? void 0 : t.getAttribute) || void 0 === e ? void 0 : e.call(t, "style")) || ""
                    }
                    getMatchedRules(t) {
                        return a(this, void 0, void 0, (function*() {
                            var e = yield this.filterMatchedRules(this.rulesMap, t);
                            return this.sortMatchedStyleRules(e)
                        }))
                    }
                    filterMatchedRules(t, e) {
                        return a(this, void 0, void 0, (function*() {
                            var n = [];
                            for (var r in t) {
                                var i = t[r];
                                "media" === i.type && (n = n.concat(yield this.filterMatchedRules(i.rules, e)));
                                var o = (e.matches || e.webkitMatchesSelector).bind(e);
                                for (var s in i.selectors) {
                                    var a = i.selectors[s],
                                        u = !1;
                                    try {
                                        u = o(a)
                                    } catch (t) {
                                        continue
                                    }
                                    if (u) {
                                        var l = {
                                                style: {
                                                    cssProperties: [],
                                                    range: i.position
                                                },
                                                selectorList: {
                                                    text: a
                                                },
                                                styleSheetId: this.id
                                            },
                                            c = i.parent.media;
                                        c && (l.media = c);
                                        for (var h = 0, d = i.declarations.length; h < d; h++) {
                                            var p = i.declarations[h];
                                            if ("comment" != p.type) l.style.cssProperties.push({
                                                disabled: !1,
                                                name: p.property,
                                                value: p.value,
                                                range: p.position
                                            });
                                            else {
                                                var f = p.comment.replace(/;$/, "").trim(),
                                                    [g, v] = f.split(":");
                                                g = g && g.trim() || "", v = v && v.trim() || "", l.style.cssProperties.push({
                                                    disabled: !0,
                                                    text: `/*${f}*/`,
                                                    range: p.position,
                                                    name: g,
                                                    value: v
                                                })
                                            }
                                        }
                                        n.push({
                                            rule: l
                                        })
                                    }
                                }
                            }
                            return n
                        }))
                    }
                    updateStyleText(t) {
                        for (var e = document.createTextNode(t); this.node.childNodes.length > 0;) this.node.removeChild(this.node.childNodes[0]);
                        this.node.appendChild(e)
                    }
                }
                class Kt {
                    constructor() {
                        this.assigner = new T, this.virtualSheetMap = new P, this.inlineStyleIdMap = new P, this._sheets = [], this._virtualDOM = null, this.styleSheetIdPrev = "style_", this.inlineStyleIdPrev = "node_", this.cssToJs = t => t.replace(/\W+\w/g, (t => t.slice(-1).toUpperCase()))
                    }
                    init(t, e) {
                        this.DOMAdapter = t, this.bridge = e
                    }
                    newInlineSheetId() {
                        return `${this.inlineStyleIdPrev}${this.assigner.id}`
                    }
                    newStyleSheetId(t) {
                        return `${this.styleSheetIdPrev}${t}`
                    }
                    get virtualSheets() {
                        return this._virtualDOM = this.DOMAdapter.tree.virtualDOM, this._sheets = this.findSheets(), this._sheets
                    }
                    getInlineRules(t) {
                        throw new Error("Method not implemented.")
                    }
                    getMatchedRules(t) {
                        return a(this, void 0, void 0, (function*() {
                            var e = t.$$;
                            if (!e || !e.matches && !e.webkitMatchesSelector) return [];
                            var n = [];
                            for (var r of this.virtualSheets) n = n.concat(yield r.getMatchedRules(e));
                            return n
                        }))
                    }
                    getInheritedRules(t, e) {
                        return []
                    }
                    applyStyleEdit(t) {
                        var {
                            styleSheetId: e
                        } = t, n = this.virtualSheetMap.get(e);
                        if (!n) throw new Error("invalid styleSheetId");
                        var r = n.applyStyleEdit(t);
                        if (n.header.isInline) {
                            var i = this.inlineStyleIdMap.getRev(e);
                            if (i) {
                                var o = this.DOMAdapter.tree.requestIdForNode(i.__wxElement);
                                this.bridge.emit({
                                    method: "DOM.attributeModified",
                                    params: {
                                        nodeId: o,
                                        name: "style",
                                        value: t.text
                                    }
                                })
                            }
                        }
                        return r
                    }
                }
                class Qt extends Kt {
                    findSheets() {
                        var t = document.querySelectorAll("style"),
                            e = [];
                        this.virtualSheetMap.clear();
                        for (var n = 0; n < t.length; n++) try {
                            var r = this.newStyleSheetId(n),
                                i = new Jt(r, {
                                    node: t[n],
                                    fileName: t[n].getAttribute("wxss:path") || ""
                                });
                            this.virtualSheetMap.set(r, i), e.push(i)
                        } catch (t) {}
                        return e
                    }
                    getInlineRules(t) {
                        var e = t.$$,
                            n = this.newInlineSheetId();
                        this.inlineStyleIdMap.has(e) || this.inlineStyleIdMap.set(e, n);
                        var r = this.inlineStyleIdMap.get(e),
                            i = new Jt(r, {
                                isInline: !0,
                                node: e
                            });
                        return this.virtualSheetMap.set(r, i), i.getInlineRule()
                    }
                }
                class Zt {
                    constructor() {
                        this.iframe = document.createElement("iframe"), this.iframe.style.display = "none"
                    }
                    get window() {
                        return this.inited || this.init(), this.iframe.contentWindow
                    }
                    get document() {
                        return this.window.document
                    }
                    init() {
                        document.body.append(this.iframe), this.inited = !0
                    }
                    getDefaultComputedStyles(t) {
                        var e = this.document.createElement(t.tagName);
                        this.document.body.appendChild(e);
                        var n = this.window.getComputedStyle(e),
                            r = {};
                        for (var i in n) r[i] = n[i];
                        return e.remove(), r
                    }
                    getModifiedComputedStyles(t, e = globalThis.window) {
                        var n = this.getDefaultComputedStyles(t),
                            r = e.getComputedStyle(t),
                            i = {};
                        for (var o in r) !isNaN(+o) || /[_-]/.test(o) || ["cssText", "blockSize"].includes(o) || r[o] !== n[o] && (i[o] = r[o]);
                        return i
                    }
                }
                var te = class extends ot {
                    constructor() {
                        super(...arguments), this.iframe = new Zt, this.cssModel = new Qt
                    }
                    getInheritedCSSRulesByNode(t) {
                        var e = null == t ? void 0 : t.$$;
                        if (!e) return [];
                        if (e.matches = e.matches || e.webkitMatchesSelector, !e.matches) return [];
                        var n = this.iframe.getModifiedComputedStyles(e);
                        return this.cssModel.getInheritedRules(e, n)
                    }
                };
                te = i([(0, r.b2)()], te);
                class ee extends Xt {
                    getNodeStyleAttr(t) {
                        return ((null == t ? void 0 : t.__wxElement.__styleSegments) || []).join("")
                    }
                    getPageWxssScopeId() {
                        var t, e;
                        return a(this, void 0, void 0, (function*() {
                            var n = yield null === (t = this.DOMAdapter) || void 0 === t ? void 0 : t.tree.getPageContextId(), r = 0;
                            if (this.fileName) {
                                var i = this.fileName.replace("./", "").replace(".\\", "").replace(".wxss", "");
                                r = null === (e = this.DOMAdapter) || void 0 === e ? void 0 : e.tree.getStyleSCopeId(n, i)
                            }
                            return r || 0
                        }))
                    }
                    getMatchedRules(t) {
                        return a(this, void 0, void 0, (function*() {
                            var e = yield this.filterMatchedRules(this.rulesMap, t);
                            return this.sortMatchedStyleRules(e)
                        }))
                    }
                    filterMatchedRules(t, e) {
                        return a(this, void 0, void 0, (function*() {
                            var n = [],
                                r = yield this.getPageWxssScopeId();
                            for (var i in t) {
                                var o = t[i];
                                for (var s in "media" === o.type && (n = n.concat(yield this.filterMatchedRules(o.rules, e))), o.selectors) {
                                    var a = o.selectors[s],
                                        u = !1;
                                    try {
                                        u = e.matches(r, a)
                                    } catch (t) {
                                        continue
                                    }
                                    if (u) {
                                        var l = {
                                                style: {
                                                    cssProperties: [],
                                                    range: o.position
                                                },
                                                selectorList: {
                                                    text: a
                                                },
                                                styleSheetId: this.id
                                            },
                                            c = o.parent.media;
                                        c && (l.media = c);
                                        for (var h = 0, d = o.declarations.length; h < d; h++) {
                                            var p = o.declarations[h];
                                            if ("comment" != p.type) l.style.cssProperties.push({
                                                disabled: !1,
                                                name: p.property,
                                                value: p.value,
                                                range: p.position
                                            });
                                            else {
                                                var f = p.comment.replace(/;$/, "").trim(),
                                                    [g, v] = f.split(":");
                                                g = g && g.trim() || "", v = v && v.trim() || "", l.style.cssProperties.push({
                                                    disabled: !0,
                                                    text: `/*${f}*/`,
                                                    range: p.position,
                                                    name: g,
                                                    value: v
                                                })
                                            }
                                        }
                                        n.push({
                                            rule: l
                                        })
                                    }
                                }
                            }
                            return n
                        }))
                    }
                    updateStyleText(t) {
                        var e, n, r;
                        return a(this, void 0, void 0, (function*() {
                            for (var i = document.createTextNode(t); this.node.childNodes.length > 0;) this.node.removeChild(this.node.childNodes[0]);
                            this.node.appendChild(i), null === (e = this.bridge) || void 0 === e || e.emit({
                                method: "WxHost.setWxssFile",
                                params: {
                                    fileName: this.fileName,
                                    content: t
                                }
                            });
                            var o = yield null === (n = this.DOMAdapter) || void 0 === n ? void 0 : n.tree.getPageContextId();
                            null === (r = this.DOMAdapter) || void 0 === r || r.tree.webviewEngine.invalidateAllPreCompiled(o)
                        }))
                    }
                }
                class ne extends Kt {
                    findSheets() {
                        var t = document.querySelectorAll("style"),
                            e = [];
                        this.virtualSheetMap.clear();
                        for (var n = 0; n < t.length; n++) {
                            var r, i = this.newStyleSheetId(n);
                            r = new ee(i, {
                                node: t[n],
                                fileName: t[n].getAttribute("wxss:path") || "",
                                DOMAdapter: this.DOMAdapter,
                                bridge: this.bridge
                            }), this.virtualSheetMap.set(i, r), e.push(r)
                        }
                        return e
                    }
                    getInlineRules(t) {
                        var e = t.$$,
                            n = this.newInlineSheetId();
                        this.inlineStyleIdMap.has(e) || this.inlineStyleIdMap.set(e, n);
                        var r = this.inlineStyleIdMap.get(e),
                            i = new ee(r, {
                                isInline: !0,
                                node: e
                            });
                        return this.virtualSheetMap.set(r, i), i.getInlineRule()
                    }
                }
                var re = class extends ot {
                    constructor() {
                        super(...arguments), this.cssModel = new ne
                    }
                    getInheritedCSSRulesByNode(t) {
                        var e = null == t ? void 0 : t.$$;
                        return e && e.matches ? this.cssModel.getInheritedRules(e, {}) : []
                    }
                };
                re = i([(0, r.b2)()], re);
                class ie extends nt {
                    constructor() {
                        super(...arguments), this.getNodeName = (t, e = "") => {
                            var n, r = ((null === (n = null == t ? void 0 : t.$$) || void 0 === n ? void 0 : n.tagName) || e).toLowerCase();
                            return r.startsWith("wx-") ? r.slice(3) : r
                        }, this.getAttributes = t => {
                            var e, n, r;
                            this.spreadScopeData();
                            var i = [],
                                o = t.$$;
                            return o && o.attributes && Object.values(o.attributes).forEach((t => {
                                var e;
                                this.skippedDOMAttrs.has(t.name) || null == i || i.push(t.name, null !== (e = t.textContent) && void 0 !== e ? e : "")
                            })), t.__id && i.push("id", t.__id), (null === (n = null === (e = t.classList) || void 0 === e ? void 0 : e._rawNames) || void 0 === n ? void 0 : n.length) && i.push("class", ((null === (r = t.classList) || void 0 === r ? void 0 : r._rawNames) || []).join(" ") || ""), t.__component__ && i.push("is", t.is), i
                        }, this.removeAttributes = (t, e) => {
                            "class" === e ? t.classList.setClassNames("") : "id" === e ? (delete t.id, delete t.__id) : t.removeAttribute(e)
                        }, this.setAttributeValue = (t, e, n) => {
                            "class" === e ? t.classList.setClassNames(n) : "id" === e ? t.id = n : t.setAttribute(e, n)
                        }
                    }
                    getRoot() {
                        return a(this, void 0, void 0, (function*() {
                            return this._root ? this._root() : window.__DOMTree__
                        }))
                    }
                    getAttributeValue(t, e) {
                        for (var n = this.getAttributes(t), r = {}, i = 0; i < n.length; i += 2) r[n[i]] = n[i + 1];
                        return r[e]
                    }
                }
                var oe = {
                        exports: {}
                    },
                    se = {},
                    ae = {
                        exports: {}
                    },
                    ue = {
                        exports: {}
                    },
                    le = {
                        exports: {}
                    },
                    ce = {
                        exports: {}
                    },
                    he = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Ot.exports,
                        r = _t.exports,
                        i = Object.getPrototypeOf,
                        o = {}.constructor;
                    e = function(t) {
                        if (n(t)) {
                            if (i) return i(t);
                            var e = t.__proto__;
                            return e || null === e ? e : r(t.constructor) ? t.constructor.prototype : t instanceof o ? o.prototype : void 0
                        }
                    }, t.exports = e
                }(he, he.exports);
                var de = {
                        exports: {}
                    },
                    pe = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Ct.exports,
                        r = yt.exports;
                    e = function(t, e, i) {
                        var o = [];
                        return e = n(e, i), r(t, (function(t, n, r) {
                            e(t, n, r) && o.push(t)
                        })), o
                    }, t.exports = e
                }(pe, pe.exports),
                function(t, e) {
                    var n = pe.exports;

                    function r(t, e) {
                        return t === e
                    }
                    e = function(t, e) {
                        return e = e || r, n(t, (function(t, n, r) {
                            for (var i = r.length; ++n < i;)
                                if (e(t, r[n])) return !1;
                            return !0
                        }))
                    }, t.exports = e
                }(de, de.exports),
                function(t, e) {
                    var n = Et.exports,
                        r = he.exports,
                        i = de.exports,
                        o = Object.getOwnPropertyNames,
                        s = Object.getOwnPropertySymbols;
                    e = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = e.prototype,
                            u = void 0 === a || a,
                            l = e.unenumerable,
                            c = void 0 !== l && l,
                            h = e.symbol,
                            d = void 0 !== h && h,
                            p = [];
                        if ((c || d) && o) {
                            var f = n;
                            c && o && (f = o);
                            do {
                                p = p.concat(f(t)), d && s && (p = p.concat(s(t)))
                            } while (u && (t = r(t)) && t !== Object.prototype);
                            p = i(p)
                        } else if (u)
                            for (var g in t) p.push(g);
                        else p = n(t);
                        return p
                    }, t.exports = e
                }(ce, ce.exports),
                function(t, e) {
                    e = (0, Dt.exports)(ce.exports), t.exports = e
                }(le, le.exports);
                var fe = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = bt.exports,
                        r = It.exports,
                        i = Mt.exports,
                        o = Wt.exports;
                    e = function(t) {
                        return t ? i(t) ? t : n(t) && !o(t) ? r(t) : [t] : []
                    }, t.exports = e
                }(fe, fe.exports);
                var ge = {
                        exports: {}
                    },
                    ve = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Ot.exports;
                    e = function(t) {
                        if (!n(t)) return {};
                        if (r) return r(t);

                        function e() {}
                        return e.prototype = t, new e
                    };
                    var r = Object.create;
                    t.exports = e
                }(ve, ve.exports),
                function(t, e) {
                    var n = ve.exports;
                    e = function(t, e) {
                        t.prototype = n(e.prototype)
                    }, t.exports = e
                }(ge, ge.exports);
                var me = {
                    exports: {}
                };
                ! function(t, e) {
                    e = "undefined" != typeof wx && (0, _t.exports)(wx.openLocation), t.exports = e
                }(me, me.exports),
                function(t, e) {
                    var n = le.exports,
                        r = fe.exports,
                        i = ge.exports,
                        o = Bt.exports,
                        s = me.exports,
                        a = (e = function(t, e) {
                            return a.extend(t, e)
                        }).Base = function t(e, a, u) {
                            u = u || {};
                            var l = a.className || o(a, "initialize.name") || "";
                            delete a.className;
                            var c = function() {
                                var t = r(arguments);
                                return this.initialize && this.initialize.apply(this, t) || this
                            };
                            if (!s) try {
                                c = new Function("toArr", "return function " + l + "(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};")(r)
                            } catch (t) {}
                            return i(c, e), c.prototype.constructor = c, c.extend = function(e, n) {
                                return t(c, e, n)
                            }, c.inherits = function(t) {
                                i(c, t)
                            }, c.methods = function(t) {
                                return n(c.prototype, t), c
                            }, c.statics = function(t) {
                                return n(c, t), c
                            }, c.methods(a).statics(u), c
                        }(Object, {
                            className: "Base",
                            callSuper: function(t, e, n) {
                                return t.prototype[e].apply(this, n)
                            },
                            toString: function() {
                                return this.constructor.name
                            }
                        });
                    t.exports = e
                }(ue, ue.exports);
                var ye = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t, e, n) {
                        var r = t.length;
                        e = null == e ? 0 : e < 0 ? Math.max(r + e, 0) : Math.min(e, r), n = null == n ? r : n < 0 ? Math.max(r + n, 0) : Math.min(n, r);
                        for (var i = []; e < n;) i.push(t[e++]);
                        return i
                    }, t.exports = e
                }(ye, ye.exports);
                var be = {
                        exports: {}
                    },
                    xe = {
                        exports: {}
                    },
                    we = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t, e) {
                        return e = null == e ? t.length - 1 : +e,
                            function() {
                                var n, r = Math.max(arguments.length - e, 0),
                                    i = new Array(r);
                                for (n = 0; n < r; n++) i[n] = arguments[n + e];
                                switch (e) {
                                    case 0:
                                        return t.call(this, i);
                                    case 1:
                                        return t.call(this, arguments[0], i);
                                    case 2:
                                        return t.call(this, arguments[0], arguments[1], i)
                                }
                                var o = new Array(e + 1);
                                for (n = 0; n < e; n++) o[n] = arguments[n];
                                return o[e] = i, t.apply(this, o)
                            }
                    }, t.exports = e
                }(we, we.exports),
                function(t, e) {
                    var n = fe.exports;
                    e = (0, we.exports)((function(t, e) {
                        return function() {
                            var r = [];
                            return r = (r = r.concat(e)).concat(n(arguments)), t.apply(this, r)
                        }
                    })), t.exports = e
                }(xe, xe.exports);
                var _e = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t, e) {
                        var n;
                        return function() {
                            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
                        }
                    }, t.exports = e
                }(_e, _e.exports),
                function(t, e) {
                    e = (0, xe.exports)(_e.exports, 2), t.exports = e
                }(be, be.exports);
                var Ee = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = Ot.exports,
                        r = Mt.exports,
                        i = le.exports;
                    e = function(t) {
                        return n(t) ? r(t) ? t.slice() : i({}, t) : t
                    }, t.exports = e
                }(Ee, Ee.exports),
                function(t, e) {
                    var n = Tt.exports,
                        r = yt.exports,
                        i = ye.exports,
                        o = be.exports,
                        s = Ee.exports;
                    e = (0, ue.exports)({
                        initialize: function() {
                            this._events = this._events || {}
                        },
                        on: function(t, e) {
                            return this._events[t] = this._events[t] || [], this._events[t].push(e), this
                        },
                        off: function(t, e) {
                            var r = this._events;
                            if (n(r, t)) {
                                var i = r[t].indexOf(e);
                                return i > -1 && r[t].splice(i, 1), this
                            }
                        },
                        once: function(t, e) {
                            return this.on(t, o(e)), this
                        },
                        emit: function(t) {
                            var e = this;
                            if (n(this._events, t)) {
                                var o = i(arguments, 1),
                                    a = s(this._events[t]);
                                return r(a, (function(t) {
                                    return t.apply(e, o)
                                }), this), this
                            }
                        },
                        removeAllListeners: function(t) {
                            return t ? delete this._events[t] : this._events = {}, this
                        }
                    }, {
                        mixin: function(t) {
                            r(["on", "off", "once", "emit", "removeAllListeners"], (function(n) {
                                t[n] = e.prototype[n]
                            })), t._events = t._events || {}
                        }
                    }), t.exports = e
                }(ae, ae.exports);
                var Te = {
                        exports: {}
                    },
                    Ne = {
                        exports: {}
                    },
                    Ae = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = (0, we.exports)((function(t, e) {
                        for (var n = t.length, r = 0, i = e.length; r < i; r++)
                            for (var o = e[r], s = 0, a = o.length; s < a; s++) t[n++] = o[s];
                        return t.length = n, t
                    })), t.exports = e
                }(Ae, Ae.exports),
                function(t, e) {
                    var n = Wt.exports,
                        r = yt.exports,
                        i = Ae.exports;
                    e = (0, ue.exports)({
                        className: "Select",
                        initialize: function(t) {
                            return this.length = 0, t ? n(t) ? o.find(t) : void(t.nodeType && (this[0] = t, this.length = 1)) : this
                        },
                        find: function(t) {
                            var n = new e;
                            return this.each((function() {
                                i(n, this.querySelectorAll(t))
                            })), n
                        },
                        each: function(t) {
                            return r(this, (function(e, n) {
                                t.call(e, n, e)
                            })), this
                        }
                    });
                    var o = new e(document);
                    t.exports = e
                }(Ne, Ne.exports);
                var Se = {
                        exports: {}
                    },
                    Ie = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Wt.exports,
                        r = fe.exports,
                        i = Ne.exports;
                    e = function(t) {
                        return r(n(t) ? new i(t) : t)
                    }, t.exports = e
                }(Ie, Ie.exports),
                function(t, e) {
                    var n = Ie.exports;
                    e = function(t) {
                        var e = (t = n(t))[0].getBoundingClientRect();
                        return {
                            left: e.left + window.pageXOffset,
                            top: e.top + window.pageYOffset,
                            width: Math.round(e.width),
                            height: Math.round(e.height)
                        }
                    }, t.exports = e
                }(Se, Se.exports);
                var Ce = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = yt.exports,
                        r = Ie.exports;
                    e = function(t) {
                        t = r(t), n(t, (function(t) {
                            (function(t) {
                                return "none" == getComputedStyle(t, "").getPropertyValue("display")
                            })(t) && (t.style.display = function(t) {
                                var e, n;
                                return i[t] || (e = document.createElement(t), document.documentElement.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), i[t] = n), i[t]
                            }(t.nodeName))
                        }))
                    };
                    var i = {};
                    t.exports = e
                }(Ce, Ce.exports);
                var Oe = {
                        exports: {}
                    },
                    Me = {
                        exports: {}
                    },
                    Re = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = /([A-Z])/g,
                        r = /[_.\- ]+/g,
                        i = /(^-)|(-$)/g;
                    e = function(t) {
                        return (t = t.replace(n, "-$1").toLowerCase().replace(r, "-").replace(i, "")).split("-")
                    }, t.exports = e
                }(Re, Re.exports),
                function(t, e) {
                    var n = Re.exports;
                    e = function(t) {
                        return n(t).join("-")
                    }, t.exports = e
                }(Me, Me.exports);
                var Pe = {
                        exports: {}
                    },
                    De = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Tt.exports;
                    e = function(t, e) {
                        var r = function(i) {
                            var o = r.cache,
                                s = "" + (e ? e.apply(this, arguments) : i);
                            return n(o, s) || (o[s] = t.apply(this, arguments)), o[s]
                        };
                        return r.cache = {}, r
                    }, t.exports = e
                }(De, De.exports);
                var Le = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = Re.exports;

                    function r(t, e) {
                        this[e] = t.replace(/\w/, (function(t) {
                            return t.toUpperCase()
                        }))
                    }
                    e = function(t) {
                        var e = n(t),
                            i = e[0];
                        return e.shift(), e.forEach(r, e), i + e.join("")
                    }, t.exports = e
                }(Le, Le.exports);
                var ke = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t) {
                        return t.length < 1 ? t : t[0].toUpperCase() + t.slice(1)
                    }, t.exports = e
                }(ke, ke.exports),
                function(t, e) {
                    var n = De.exports,
                        r = Le.exports,
                        i = ke.exports,
                        o = Tt.exports,
                        s = Me.exports;
                    e = n((function(t) {
                        if (t = t.replace(u, ""), t = r(t), o(l, t)) return t;
                        for (var e = a.length; e--;) {
                            var n = a[e] + i(t);
                            if (o(l, n)) return n
                        }
                        return t
                    })), e.dash = n((function(t) {
                        var n = e(t);
                        return (u.test(n) ? "-" : "") + s(n)
                    }));
                    var a = ["O", "ms", "Moz", "Webkit"],
                        u = /^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,
                        l = document.createElement("p").style;
                    t.exports = e
                }(Pe, Pe.exports),
                function(t, e) {
                    var n = Wt.exports,
                        r = Ot.exports,
                        i = Me.exports,
                        o = At.exports,
                        s = Ut.exports,
                        a = xt.exports,
                        u = Ie.exports,
                        l = Pe.exports,
                        c = yt.exports;
                    e = function(t, e, d) {
                        if (t = u(t), o(d) && n(e)) return function(t, e) {
                            return t.style[l(e)] || getComputedStyle(t, "").getPropertyValue(e)
                        }(t[0], e);
                        var p = e;
                        r(p) || ((p = {})[e] = d),
                            function(t, e) {
                                c(t, (function(t) {
                                    var n = ";";
                                    c(e, (function(t, e) {
                                        e = l.dash(e), n += e + ":" + function(t, e) {
                                            return a(e) && !s(h, i(t)) ? e + "px" : e
                                        }(e, t) + ";"
                                    })), t.style.cssText += n
                                }))
                            }(t, p)
                    };
                    var h = ["column-count", "columns", "font-weight", "line-weight", "opacity", "z-index", "zoom"];
                    t.exports = e
                }(Oe, Oe.exports);
                var Be = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = fe.exports,
                        r = Ot.exports,
                        i = Wt.exports,
                        o = yt.exports,
                        s = At.exports,
                        a = Ie.exports;
                    (e = function(t, e, n) {
                        if (t = a(t), s(n) && i(e)) return function(t, e) {
                            return t.getAttribute(e)
                        }(t[0], e);
                        var u = e;
                        r(u) || ((u = {})[e] = n),
                            function(t, e) {
                                o(t, (function(t) {
                                    o(e, (function(e, n) {
                                        t.setAttribute(n, e)
                                    }))
                                }))
                            }(t, u)
                    }).remove = function(t, e) {
                        t = a(t), e = n(e), o(t, (function(t) {
                            o(e, (function(e) {
                                t.removeAttribute(e)
                            }))
                        }))
                    }, t.exports = e
                }(Be, Be.exports);
                var Fe = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = At.exports,
                        r = yt.exports,
                        i = Ie.exports;

                    function o(t) {
                        return function(e, o) {
                            var s = (e = i(e))[0];
                            if (n(o)) return s ? s[t] : "";
                            s && r(e, (function(e) {
                                e[t] = o
                            }))
                        }
                    }
                    e = {
                        html: o("innerHTML"),
                        text: o("textContent"),
                        val: o("value")
                    }, t.exports = e
                }(Fe, Fe.exports);
                var je = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t) {
                        var e = t ? t.length : 0;
                        if (e) return t[e - 1]
                    }, t.exports = e
                }(je, je.exports);
                var Ue = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = yt.exports,
                        r = Ie.exports;
                    e = function(t) {
                        t = r(t), n(t, (function(t) {
                            var e = t.parentNode;
                            e && e.removeChild(t)
                        }))
                    }, t.exports = e
                }(Ue, Ue.exports);
                var Ve = Ue.exports,
                    We = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Be.exports,
                        r = Wt.exports,
                        i = Ot.exports,
                        o = yt.exports;
                    e = function(t, e, s) {
                        var a = e;
                        return r(e) && (a = "data-" + e), i(e) && (a = {}, o(e, (function(t, e) {
                            a["data-" + e] = t
                        }))), n(t, a, s)
                    }, t.exports = e
                }(We, We.exports);
                var He = {
                        exports: {}
                    },
                    $e = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Ut.exports;

                    function r() {
                        return !0
                    }

                    function i() {
                        return !1
                    }

                    function o(t) {
                        var n, r = this.events[t.type],
                            i = s.call(this, t, r);
                        t = new e.Event(t);
                        for (var o, a, u = 0;
                            (a = i[u++]) && !t.isPropagationStopped();)
                            for (t.curTarget = a.el, o = 0;
                                (n = a.handlers[o++]) && !t.isImmediatePropagationStopped();) !1 === n.handler.apply(a.el, [t]) && (t.preventDefault(), t.stopPropagation())
                    }

                    function s(t, e) {
                        var r, i, o, s, a = t.target,
                            u = [],
                            l = e.delegateCount;
                        if (a.nodeType)
                            for (; a !== this; a = a.parentNode || this) {
                                for (i = [], s = 0; s < l; s++) void 0 === i[r = (o = e[s]).selector + " "] && (i[r] = n(this.querySelectorAll(r), a)), i[r] && i.push(o);
                                i.length && u.push({
                                    el: a,
                                    handlers: i
                                })
                            }
                        return l < e.length && u.push({
                            el: this,
                            handlers: e.slice(l)
                        }), u
                    }
                    e = {
                        add: function(t, e, n, r) {
                            var i, s = {
                                selector: n,
                                handler: r
                            };
                            t.events || (t.events = {}), (i = t.events[e]) || ((i = t.events[e] = []).delegateCount = 0, t.addEventListener(e, (function() {
                                o.apply(t, arguments)
                            }), !1)), n ? i.splice(i.delegateCount++, 0, s) : i.push(s)
                        },
                        remove: function(t, e, n, r) {
                            var i = t.events;
                            if (i && i[e])
                                for (var o, s = i[e], a = s.length; a--;) o = s[a], n && o.selector != n || o.handler != r || (s.splice(a, 1), o.selector && s.delegateCount--)
                        },
                        Event: (0, ue.exports)({
                            className: "Event",
                            initialize: function(t) {
                                this.origEvent = t
                            },
                            isDefaultPrevented: i,
                            isPropagationStopped: i,
                            isImmediatePropagationStopped: i,
                            preventDefault: function() {
                                var t = this.origEvent;
                                this.isDefaultPrevented = r, t && t.preventDefault && t.preventDefault()
                            },
                            stopPropagation: function() {
                                var t = this.origEvent;
                                this.isPropagationStopped = r, t && t.stopPropagation && t.stopPropagation()
                            },
                            stopImmediatePropagation: function() {
                                var t = this.origEvent;
                                this.isImmediatePropagationStopped = r, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                            }
                        })
                    }, t.exports = e
                }($e, $e.exports),
                function(t, e) {
                    var n = $e.exports,
                        r = At.exports,
                        i = Ie.exports,
                        o = yt.exports;

                    function s(t) {
                        return function(e, s, a, u) {
                            e = i(e), r(u) && (u = a, a = void 0), o(e, (function(e) {
                                n[t](e, s, a, u)
                            }))
                        }
                    }
                    e = {
                        on: s("add"),
                        off: s("remove")
                    }, t.exports = e
                }(He, He.exports);
                var Ge = {
                        exports: {}
                    },
                    ze = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Ct.exports,
                        r = bt.exports,
                        i = Et.exports;
                    e = function(t, e, o) {
                        e = n(e, o);
                        for (var s = !r(t) && i(t), a = (s || t).length, u = 0; u < a; u++) {
                            var l = s ? s[u] : u;
                            if (e(t[l], l, t)) return !0
                        }
                        return !1
                    }, t.exports = e
                }(ze, ze.exports),
                function(t, e) {
                    var n = fe.exports,
                        r = ze.exports,
                        i = Ie.exports,
                        o = Wt.exports,
                        s = yt.exports;

                    function a(t) {
                        return o(t) ? t.split(/\s+/) : n(t)
                    }
                    e = {
                        add: function(t, n) {
                            t = i(t);
                            var r = a(n);
                            s(t, (function(t) {
                                var n = [];
                                s(r, (function(r) {
                                    e.has(t, r) || n.push(r)
                                })), 0 !== n.length && (t.className += (t.className ? " " : "") + n.join(" "))
                            }))
                        },
                        has: function(t, e) {
                            t = i(t);
                            var n = new RegExp("(^|\\s)" + e + "(\\s|$)");
                            return r(t, (function(t) {
                                return n.test(t.className)
                            }))
                        },
                        toggle: function(t, n) {
                            t = i(t), s(t, (function(t) {
                                if (!e.has(t, n)) return e.add(t, n);
                                e.remove(t, n)
                            }))
                        },
                        remove: function(t, e) {
                            t = i(t);
                            var n = a(e);
                            s(t, (function(t) {
                                s(n, (function(e) {
                                    t.classList.remove(e)
                                }))
                            }))
                        }
                    }, t.exports = e
                }(Ge, Ge.exports);
                var Ye = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = yt.exports,
                        r = Ie.exports,
                        i = Wt.exports;

                    function o(t) {
                        return function(e, o) {
                            e = r(e), n(e, (function(e) {
                                if (i(o)) e.insertAdjacentHTML(t, o);
                                else {
                                    var n = e.parentNode;
                                    switch (t) {
                                        case "beforebegin":
                                            n && n.insertBefore(o, e);
                                            break;
                                        case "afterend":
                                            n && n.insertBefore(o, e.nextSibling);
                                            break;
                                        case "beforeend":
                                            e.appendChild(o);
                                            break;
                                        case "afterbegin":
                                            e.prepend(o)
                                    }
                                }
                            }))
                        }
                    }
                    e = {
                        before: o("beforebegin"),
                        after: o("afterend"),
                        append: o("beforeend"),
                        prepend: o("afterbegin")
                    }, t.exports = e
                }(Ye, Ye.exports),
                function(t, e) {
                    var n = Ne.exports,
                        r = Se.exports,
                        i = Ce.exports,
                        o = Oe.exports,
                        s = Be.exports,
                        a = Fe.exports,
                        u = je.exports,
                        l = Ue.exports,
                        c = We.exports,
                        h = He.exports,
                        d = Ge.exports,
                        p = Ye.exports,
                        f = At.exports,
                        g = Wt.exports;
                    e = function(t) {
                        return new n(t)
                    }, n.methods({
                        offset: function() {
                            return r(this)
                        },
                        hide: function() {
                            return this.css("display", "none")
                        },
                        show: function() {
                            return i(this), this
                        },
                        first: function() {
                            return e(this[0])
                        },
                        last: function() {
                            return e(u(this))
                        },
                        get: function(t) {
                            return this[t]
                        },
                        eq: function(t) {
                            return e(this[t])
                        },
                        on: function(t, e, n) {
                            return h.on(this, t, e, n), this
                        },
                        off: function(t, e, n) {
                            return h.off(this, t, e, n), this
                        },
                        html: function(t) {
                            var e = a.html(this, t);
                            return f(t) ? e : this
                        },
                        text: function(t) {
                            var e = a.text(this, t);
                            return f(t) ? e : this
                        },
                        val: function(t) {
                            var e = a.val(this, t);
                            return f(t) ? e : this
                        },
                        css: function(t, e) {
                            var n = o(this, t, e);
                            return v(t, e) ? n : this
                        },
                        attr: function(t, e) {
                            var n = s(this, t, e);
                            return v(t, e) ? n : this
                        },
                        data: function(t, e) {
                            var n = c(this, t, e);
                            return v(t, e) ? n : this
                        },
                        rmAttr: function(t) {
                            return s.remove(this, t), this
                        },
                        remove: function() {
                            return l(this), this
                        },
                        addClass: function(t) {
                            return d.add(this, t), this
                        },
                        rmClass: function(t) {
                            return d.remove(this, t), this
                        },
                        toggleClass: function(t) {
                            return d.toggle(this, t), this
                        },
                        hasClass: function(t) {
                            return d.has(this, t)
                        },
                        parent: function() {
                            return e(this[0].parentNode)
                        },
                        append: function(t) {
                            return p.append(this, t), this
                        },
                        prepend: function(t) {
                            return p.prepend(this, t), this
                        },
                        before: function(t) {
                            return p.before(this, t), this
                        },
                        after: function(t) {
                            return p.after(this, t), this
                        }
                    });
                    var v = function(t, e) {
                        return f(e) && g(t)
                    };
                    t.exports = e
                }(Te, Te.exports);
                var qe = {},
                    Xe = {
                        exports: {}
                    },
                    Je = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = "object" == typeof window && "object" == typeof document && 9 === document.nodeType, t.exports = e
                }(Je, Je.exports),
                function(t, e) {
                    e = Je.exports ? window : dt, t.exports = e
                }(Xe, Xe.exports);
                var Ke = {
                        exports: {}
                    },
                    Qe = {
                        exports: {}
                    },
                    Ze = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = yt.exports,
                        r = At.exports,
                        i = _t.exports;
                    e = function(t, e) {
                        r(e) && (e = !0);
                        var o = i(e),
                            s = {};
                        return n(t, (function(t) {
                            s[t] = o ? e(t) : e
                        })), s
                    }, t.exports = e
                }(Ze, Ze.exports);
                var tn = {
                        exports: {}
                    },
                    en = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t) {
                        return null == t ? "" : t.toString()
                    }, t.exports = e
                }(en, en.exports),
                function(t, e) {
                    var n = en.exports;
                    e = function(t) {
                        return n(t).toLocaleLowerCase()
                    }, t.exports = e
                }(tn, tn.exports),
                function(t, e) {
                    var n = je.exports,
                        r = jt.exports,
                        i = tn.exports;
                    e = function(t, e) {
                        for (var c, h = [], d = t; t;) {
                            if (c = !0, n(h) && l[n(h)]) {
                                var p = new RegExp("</".concat(n(h), "[^>]*>")).exec(t);
                                if (p) {
                                    var f = t.substring(0, p.index);
                                    t = t.substring(p.index + p[0].length), f && e.text && e.text(f)
                                }
                                _("", n(h))
                            } else {
                                if (r(t, "\x3c!--")) {
                                    var g = t.indexOf("--\x3e");
                                    g >= 0 && (e.comment && e.comment(t.substring(4, g)), t = t.substring(g + 3), c = !1)
                                } else if (r(t, "<!")) {
                                    var v = t.match(o);
                                    v && (e.text && e.text(t.substring(0, v[0].length)), t = t.substring(v[0].length), c = !1)
                                } else if (r(t, "</")) {
                                    var m = t.match(s);
                                    m && (t = t.substring(m[0].length), m[0].replace(s, _), c = !1)
                                } else if (r(t, "<")) {
                                    var y = t.match(a);
                                    y && (t = t.substring(y[0].length), y[0].replace(a, w), c = !1)
                                }
                                if (c) {
                                    var b = t.indexOf("<"),
                                        x = b < 0 ? t : t.substring(0, b);
                                    t = b < 0 ? "" : t.substring(b), e.text && e.text(x)
                                }
                            }
                            if (d === t) throw Error("Parse Error: " + t);
                            d = t
                        }

                        function w(t, n, r, o) {
                            if (n = i(n), (o = !!o) || h.push(n), e.start) {
                                var s = {};
                                r.replace(u, (function(t, e, n, r, i) {
                                    s[e] = n || r || i || ""
                                })), e.start(n, s, o)
                            }
                        }

                        function _(t, n) {
                            var r;
                            if (n = i(n))
                                for (r = h.length - 1; r >= 0 && h[r] !== n; r--);
                            else r = 0;
                            if (r >= 0) {
                                for (var o = h.length - 1; o >= r; o--) e.end && e.end(h[o]);
                                h.length = r
                            }
                        }
                        _()
                    };
                    var o = /^<!\s*doctype((?:\s+[\w:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
                        s = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
                        a = /^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_:@.]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
                        u = /([-A-Za-z0-9_:@.]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                        l = (0, Ze.exports)("script,style".split(","));
                    t.exports = e
                }(Qe, Qe.exports);
                var nn = {
                        exports: {}
                    },
                    rn = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t) {
                        var e = t.length,
                            n = Array(e);
                        e--;
                        for (var r = 0; r <= e; r++) n[e - r] = t[r];
                        return n
                    }, t.exports = e
                }(rn, rn.exports),
                function(t, e) {
                    var n = rn.exports;
                    e = (0, ue.exports)({
                        initialize: function() {
                            this.clear()
                        },
                        clear: function() {
                            this._items = [], this.size = 0
                        },
                        push: function(t) {
                            return this._items.push(t), ++this.size
                        },
                        pop: function() {
                            if (this.size) return this.size--, this._items.pop()
                        },
                        peek: function() {
                            return this._items[this.size - 1]
                        },
                        forEach: function(t, e) {
                            e = arguments.length > 1 ? e : this;
                            for (var n = this._items, r = this.size - 1, i = 0; r >= 0; r--, i++) t.call(e, n[r], i, this)
                        },
                        toArr: function() {
                            return n(this._items)
                        }
                    }), t.exports = e
                }(nn, nn.exports);
                var on = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = Ct.exports,
                        r = Et.exports;
                    e = function(t, e, i) {
                        e = n(e, i);
                        for (var o = r(t), s = o.length, a = {}, u = 0; u < s; u++) {
                            var l = o[u];
                            a[l] = e(t[l], l, t)
                        }
                        return a
                    }, t.exports = e
                }(on, on.exports),
                function(t, e) {
                    var n = Qe.exports,
                        r = nn.exports,
                        i = Mt.exports,
                        o = yt.exports,
                        s = Wt.exports,
                        a = on.exports;
                    e = {
                        parse: function(t) {
                            var e = [],
                                o = new r;
                            return n(t, {
                                start: function(t, e) {
                                    e = a(e, (function(t) {
                                        return function(t) {
                                            return t.replace(/&quot;/g, '"')
                                        }(t)
                                    })), o.push({
                                        tag: t,
                                        attrs: e
                                    })
                                },
                                end: function() {
                                    var t = o.pop();
                                    if (o.size) {
                                        var n = o.peek();
                                        i(n.content) || (n.content = []), n.content.push(t)
                                    } else e.push(t)
                                },
                                comment: function(t) {
                                    var n = "\x3c!--".concat(t, "--\x3e"),
                                        r = o.peek();
                                    r ? (r.content || (r.content = []), r.content.push(n)) : e.push(n)
                                },
                                text: function(t) {
                                    var n = o.peek();
                                    n ? (n.content || (n.content = []), n.content.push(t)) : e.push(t)
                                }
                            }), e
                        },
                        stringify: function t(e) {
                            var n = "";
                            return i(e) ? o(e, (function(e) {
                                return n += t(e)
                            })) : s(e) ? n = e : (n += "<".concat(e.tag), o(e.attrs, (function(t, e) {
                                return n += " ".concat(e, '="').concat(function(t) {
                                    return t.replace(/"/g, "&quot;")
                                }(t), '"')
                            })), n += ">", e.content && (n += t(e.content)), n += "</".concat(e.tag, ">")), n
                        }
                    }, t.exports = e
                }(Ke, Ke.exports);
                var sn = dt && dt.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(qe, "__esModule", {
                    value: !0
                }), qe.pxToNum = qe.executeAfterTransition = qe.hasVerticalScrollbar = qe.measuredScrollbarWidth = qe.eventClient = qe.drag = qe.classPrefix = void 0;
                var an = sn(It.exports),
                    un = sn(gt.exports),
                    ln = sn(Xe.exports),
                    cn = sn(Ke.exports),
                    hn = sn(xt.exports),
                    dn = sn(Ut.exports),
                    pn = sn(zt.exports);

                function fn(t, e) {
                    for (var n = 0, r = t.length; n < r; n++) {
                        var i = t[n];
                        e(i), i.content && fn(i.content, e)
                    }
                }
                qe.classPrefix = function(t) {
                    var e = `luna-${t}-`;

                    function n(t) {
                        return an.default(un.default(t).split(/\s+/), (t => dn.default(t, e) ? t : t.replace(/[\w-]+/, (t => `${e}${t}`)))).join(" ")
                    }
                    return function(t) {
                        if (/<[^>]*>/g.test(t)) try {
                            var e = cn.default.parse(t);
                            return fn(e, (t => {
                                t.attrs && t.attrs.class && (t.attrs.class = n(t.attrs.class))
                            })), cn.default.stringify(e)
                        } catch (e) {
                            return n(t)
                        }
                        return n(t)
                    }
                };
                var gn, vn = "ontouchstart" in ln.default,
                    mn = {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend"
                    },
                    yn = {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    };
                qe.drag = function(t) {
                    return vn ? mn[t] : yn[t]
                }, qe.eventClient = function(t, e) {
                    var n = "x" === t ? "clientX" : "clientY";
                    return e[n] ? e[n] : e.changedTouches ? e.changedTouches[0][n] : 0
                }, qe.measuredScrollbarWidth = function() {
                    if (hn.default(gn)) return gn;
                    if (!document) return 16;
                    var t = document.createElement("div"),
                        e = document.createElement("div");
                    return t.setAttribute("style", "display: block; width: 100px; height: 100px; overflow: scroll;"), e.setAttribute("style", "height: 200px"), t.appendChild(e), document.body.appendChild(t), gn = t.offsetWidth - t.clientWidth, document.body.removeChild(t), gn
                }, qe.hasVerticalScrollbar = function(t) {
                    return t.scrollHeight > t.offsetHeight
                }, qe.executeAfterTransition = function(t, e) {
                    var n = r => {
                        r.target === t && (t.removeEventListener("transitionend", n), e())
                    };
                    t.addEventListener("transitionend", n)
                }, qe.pxToNum = function(t) {
                    return pn.default(t.replace("px", ""))
                };
                var bn = dt && dt.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(se, "__esModule", {
                    value: !0
                });
                var xn = bn(ae.exports),
                    wn = bn(Te.exports),
                    _n = qe,
                    En = bn(yt.exports);
                class Tn extends xn.default {
                    constructor(t, {
                        compName: e
                    }) {
                        super(), this.compName = e, this.c = _n.classPrefix(e), this.options = {}, this.container = t, this.$container = wn.default(t), this.$container.addClass(`luna-${e}`)
                    }
                    destroy() {
                        this.$container.rmClass(`luna-${this.compName}`), this.$container.html(""), this.emit("destroy"), this.removeAllListeners()
                    }
                    setOption(t, e) {
                        var n = this.options,
                            r = {};
                        "string" == typeof t ? r[t] = e : r = t, En.default(r, ((t, e) => {
                            var r = n[e];
                            n[e] = t, this.emit("optionChange", e, t, r)
                        }))
                    }
                    find(t) {
                        return this.$container.find(this.c(t))
                    }
                }
                se.default = Tn;
                var Nn = {},
                    An = {};

                function Sn(t, e) {
                    var n = t[3];
                    return [(1 - n) * e[0] + n * t[0], (1 - n) * e[1] + n * t[1], (1 - n) * e[2] + n * t[2], n + e[3] * (1 - n)]
                }

                function In([t, e, n]) {
                    return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
                }
                Object.defineProperty(An, "__esModule", {
                    value: !0
                }), An.getContrastThreshold = An.isLargeFont = An.getAPCAThreshold = An.desiredLuminanceAPCA = An.contrastRatioByLuminanceAPCA = An.contrastRatioAPCA = An.luminanceAPCA = An.contrastRatio = An.luminance = An.rgbaToHsla = An.blendColors = void 0, An.blendColors = Sn, An.rgbaToHsla = function([t, e, n, r]) {
                    var i = Math.max(t, e, n),
                        o = Math.min(t, e, n),
                        s = i - o,
                        a = i + o,
                        u = .5 * a;
                    return [o === i ? 0 : t === i ? (1 / 6 * (e - n) / s + 1) % 1 : e === i ? 1 / 6 * (n - t) / s + 1 / 3 : 1 / 6 * (t - e) / s + 2 / 3, 0 === u || 1 === u ? 0 : u <= .5 ? s / a : s / (2 - a), u, r]
                }, An.luminance = In, An.contrastRatio = function(t, e) {
                    var n = In(Sn(t, e)),
                        r = In(e);
                    return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
                };
                var Cn = .03,
                    On = 1.45,
                    Mn = 12.82051282051282,
                    Rn = .06;

                function Pn([t, e, n]) {
                    return .2126729 * Math.pow(t, 2.4) + .7151522 * Math.pow(e, 2.4) + .072175 * Math.pow(n, 2.4)
                }

                function Dn(t) {
                    return t > Cn ? t : t + Math.pow(Cn - t, On)
                }

                function Ln(t, e) {
                    if (t = Dn(t), e = Dn(e), Math.abs(t - e) < 5e-4) return 0;
                    var n = 0;
                    return 100 * (e >= t ? (n = 1.25 * (Math.pow(e, .55) - Math.pow(t, .58))) < .001 ? 0 : n < .078 ? n - n * Mn * Rn : n - Rn : (n = 1.25 * (Math.pow(e, .62) - Math.pow(t, .57))) > -.001 ? 0 : n > -.078 ? n - n * Mn * Rn : n + Rn)
                }
                An.luminanceAPCA = Pn, An.contrastRatioAPCA = function(t, e) {
                    return Ln(Pn(t), Pn(e))
                }, An.contrastRatioByLuminanceAPCA = Ln, An.desiredLuminanceAPCA = function(t, e, n) {
                    function r() {
                        return n ? Math.pow(Math.abs(Math.pow(t, .62) - (-e - Rn) / 1.25), 1 / .57) : Math.pow(Math.abs(Math.pow(t, .55) - (e + Rn) / 1.25), 1 / .58)
                    }
                    t = Dn(t), e /= 100;
                    var i = r();
                    return (i < 0 || i > 1) && (n = !n, i = r()), i
                };
                var kn = [
                    [12, -1, -1, -1, -1, 100, 90, 80, -1, -1],
                    [14, -1, -1, -1, 100, 90, 80, 60, 60, -1],
                    [16, -1, -1, 100, 90, 80, 60, 55, 50, 50],
                    [18, -1, -1, 90, 80, 60, 55, 50, 40, 40],
                    [24, -1, 100, 80, 60, 55, 50, 40, 38, 35],
                    [30, -1, 90, 70, 55, 50, 40, 38, 35, 40],
                    [36, -1, 80, 60, 50, 40, 38, 35, 30, 25],
                    [48, 100, 70, 55, 40, 38, 35, 30, 25, 20],
                    [60, 90, 60, 50, 38, 35, 30, 25, 20, 20],
                    [72, 80, 55, 40, 35, 30, 25, 20, 20, 20],
                    [96, 70, 50, 35, 30, 25, 20, 20, 20, 20],
                    [120, 60, 40, 30, 25, 20, 20, 20, 20, 20]
                ];

                function Bn(t, e) {
                    var n = 72 * parseFloat(t.replace("px", "")) / 96;
                    return -1 !== ["bold", "bolder", "600", "700", "800", "900"].indexOf(e) ? n >= 14 : n >= 18
                }
                kn.reverse(), An.getAPCAThreshold = function(t, e) {
                    var n = parseFloat(t.replace("px", "")),
                        r = parseFloat(e);
                    for (var [i, ...o] of kn)
                        if (n >= i)
                            for (var [s, a] of [900, 800, 700, 600, 500, 400, 300, 200, 100].entries())
                                if (r >= a) {
                                    var u = o[o.length - 1 - s];
                                    return -1 === u ? null : u
                                } return null
                }, An.isLargeFont = Bn;
                var Fn = {
                        aa: 3,
                        aaa: 4.5
                    },
                    jn = {
                        aa: 4.5,
                        aaa: 7
                    };
                An.getContrastThreshold = function(t, e) {
                    return Bn(t, e) ? Fn : jn
                };
                var Un = {};

                function Vn(t, e, n) {
                    var r = Wn(e, n);
                    return r.addEventListener("click", (function(t) {
                        t.stopPropagation()
                    }), !1), t.appendChild(r), r
                }

                function Wn(t, e) {
                    var n = document.createElement(t);
                    if (e) {
                        var r = e.split(/\s+/);
                        r = r.map((t => "luna-dom-highlighter-" + t)), n.className = r.join(" ")
                    }
                    return n
                }

                function Hn(t) {
                    document.adoptedStyleSheets = [...document.adoptedStyleSheets, t]
                }
                Object.defineProperty(Un, "__esModule", {
                    value: !0
                }), Un.adoptStyleSheet = Un.constrainNumber = Un.ellipsify = Un.createElement = Un.createTextChild = Un.createChild = Un.log = Un.Overlay = void 0, Un.Overlay = class {
                    constructor(t, e = []) {
                        this.viewportSize = {
                            width: 800,
                            height: 600
                        }, this.deviceScaleFactor = 1, this.emulationScaleFactor = 1, this.pageScaleFactor = 1, this.pageZoomFactor = 1, this.scrollX = 0, this.scrollY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this._installed = !1, this._window = t, this._document = t.document, Array.isArray(e) || (e = [e]), this.style = e
                    }
                    setCanvas(t) {
                        this.canvas = t, this._context = t.getContext("2d")
                    }
                    install() {
                        for (var t of this.style) Hn(t);
                        this._installed = !0
                    }
                    uninstall() {
                        var t = function(t) {
                            document.adoptedStyleSheets = document.adoptedStyleSheets.filter((e => e !== t))
                        };
                        for (var e of this.style) t(e);
                        this._installed = !1
                    }
                    reset(t) {
                        t && (this.viewportSize = t.viewportSize, this.visualViewportSize = t.visualViewportSize, this.deviceScaleFactor = t.deviceScaleFactor, this.pageScaleFactor = t.pageScaleFactor, this.pageZoomFactor = t.pageZoomFactor, this.emulationScaleFactor = t.emulationScaleFactor, this.scrollX = Math.round(t.scrollX), this.scrollY = Math.round(t.scrollY)), this.resetCanvas()
                    }
                    resetCanvas() {
                        this.canvas && this._context && (this.canvas.width = this.deviceScaleFactor * this.viewportSize.width, this.canvas.height = this.deviceScaleFactor * this.viewportSize.height, this.canvas.style.width = this.viewportSize.width + "px", this.canvas.style.height = this.viewportSize.height + "px", this._context.scale(this.deviceScaleFactor, this.deviceScaleFactor), this.canvasWidth = this.viewportSize.width, this.canvasHeight = this.viewportSize.height)
                    }
                    setPlatform(t) {
                        this.platform = t, this._installed || this.install()
                    }
                    dispatch(t) {
                        this[t.shift()].apply(this, t)
                    }
                    eventHasCtrlOrMeta(t) {
                        return "mac" === this.platform ? t.metaKey && !t.ctrlKey : t.ctrlKey && !t.metaKey
                    }
                    get context() {
                        if (!this._context) throw new Error("Context object is missing");
                        return this._context
                    }
                    get document() {
                        if (!this._document) throw new Error("Document object is missing");
                        return this._document
                    }
                    get window() {
                        if (!this._window) throw new Error("Window object is missing");
                        return this._window
                    }
                    get installed() {
                        return this._installed
                    }
                }, Un.log = function(t) {
                    var e = document.getElementById("log");
                    e || ((e = Vn(document.body, "div")).id = "log"), Vn(e, "div").textContent = t
                }, Un.createChild = Vn, Un.createTextChild = function(t, e) {
                    var n = document.createTextNode(e);
                    return t.appendChild(n), n
                }, Un.createElement = Wn, Un.ellipsify = function(t, e) {
                    return t.length <= e ? String(t) : t.substr(0, e - 1) + "…"
                }, Un.constrainNumber = function(t, e, n) {
                    return t < e ? t = e : t > n && (t = n), t
                }, Un.adoptStyleSheet = Hn;
                var $n = {};
                Object.defineProperty($n, "__esModule", {
                    value: !0
                }), $n.drawPath = $n.formatColor = $n.formatRgba = $n.parseHexa = $n.createPathForQuad = $n.hatchFillPath = $n.applyMatrixToPoint = $n.emptyBounds = $n.buildPath = $n.fillPathWithBoxStyle = $n.drawPathWithLineStyle = void 0;
                var Gn = An;

                function zn(t, e, n) {
                    var r = 0;

                    function i(i) {
                        for (var o = [], s = 0; s < i; ++s) {
                            var a = Math.round(t[r++] * n);
                            e.maxX = Math.max(e.maxX, a), e.minX = Math.min(e.minX, a);
                            var u = Math.round(t[r++] * n);
                            e.maxY = Math.max(e.maxY, u), e.minY = Math.min(e.minY, u), e.leftmostXForY[u] = Math.min(e.leftmostXForY[u] || Number.MAX_VALUE, a), e.rightmostXForY[u] = Math.max(e.rightmostXForY[u] || Number.MIN_VALUE, a), e.topmostYForX[a] = Math.min(e.topmostYForX[a] || Number.MAX_VALUE, u), e.bottommostYForX[a] = Math.max(e.bottommostYForX[a] || Number.MIN_VALUE, u), e.allPoints.push({
                                x: a,
                                y: u
                            }), o.push(a, u)
                        }
                        return o
                    }
                    for (var o = t.length, s = new Path2D; r < o;) switch (t[r++]) {
                        case "M":
                            s.moveTo.apply(s, i(1));
                            break;
                        case "L":
                            s.lineTo.apply(s, i(1));
                            break;
                        case "C":
                            s.bezierCurveTo.apply(s, i(3));
                            break;
                        case "Q":
                            s.quadraticCurveTo.apply(s, i(2));
                            break;
                        case "Z":
                            s.closePath()
                    }
                    return s
                }
                $n.drawPathWithLineStyle = function(t, e, n, r = 1) {
                    n && n.color && (t.save(), t.translate(.5, .5), t.lineWidth = r, "dashed" === n.pattern && t.setLineDash([3, 3]), "dotted" === n.pattern && t.setLineDash([2, 2]), t.strokeStyle = n.color, t.stroke(e), t.restore())
                }, $n.fillPathWithBoxStyle = function(t, e, n, r, i) {
                    i && (t.save(), i.fillColor && (t.fillStyle = i.fillColor, t.fill(e)), i.hatchColor && Kn(t, e, n, 10, i.hatchColor, r, !1), t.restore())
                }, $n.buildPath = zn, $n.emptyBounds = function() {
                    return {
                        minX: Number.MAX_VALUE,
                        minY: Number.MAX_VALUE,
                        maxX: -Number.MAX_VALUE,
                        maxY: -Number.MAX_VALUE,
                        leftmostXForY: {},
                        rightmostXForY: {},
                        topmostYForX: {},
                        bottommostYForX: {},
                        allPoints: []
                    }
                }, $n.applyMatrixToPoint = function(t, e) {
                    var n = new DOMPoint(t.x, t.y);
                    return {
                        x: (n = n.matrixTransform(e)).x,
                        y: n.y
                    }
                };
                var Yn, qn = 5,
                    Xn = 3,
                    Jn = "";

                function Kn(t, e, n, r, i, o, s) {
                    if ((t.canvas.width < n.maxX - n.minX || t.canvas.height < n.maxY - n.minY) && (n = {
                            minX: 0,
                            maxX: t.canvas.width,
                            minY: 0,
                            maxY: t.canvas.height,
                            allPoints: []
                        }), !Yn || i !== Jn) {
                        Jn = i;
                        var a = document.createElement("canvas");
                        a.width = r, a.height = qn + Xn;
                        var u = a.getContext("2d");
                        u.clearRect(0, 0, a.width, a.height), u.rect(0, 0, 1, qn), u.fillStyle = i, u.fill(), Yn = t.createPattern(a, "repeat")
                    }
                    t.save();
                    var l = new DOMMatrix;
                    Yn.setTransform(l.scale(s ? -1 : 1, 1).rotate(0, 0, -45 + o)), t.fillStyle = Yn, t.fill(e), t.restore()
                }

                function Qn(t) {
                    return (t.match(/#(\w\w)(\w\w)(\w\w)(\w\w)/) || []).slice(1).map((t => parseInt(t, 16) / 255))
                }

                function Zn(t, e) {
                    if ("rgb" === e) {
                        var [n, r, i, o] = t;
                        return `rgb(${(255*n).toFixed()} ${(255*r).toFixed()} ${(255*i).toFixed()}${1===o?"":" / "+Math.round(100*o)/100})`
                    }
                    if ("hsl" === e) {
                        var [s, a, u, l] = Gn.rgbaToHsla(t);
                        return `hsl(${Math.round(360*s)}deg ${Math.round(100*a)} ${Math.round(100*u)}${1===l?"":" / "+Math.round(100*l)/100})`
                    }
                    throw new Error("NOT_REACHED")
                }
                $n.hatchFillPath = Kn, $n.createPathForQuad = function(t, e, n, r) {
                    var i = ["M", t.p1.x, t.p1.y, "L", t.p2.x, t.p2.y, "L", t.p3.x, t.p3.y, "L", t.p4.x, t.p4.y];
                    for (var o of e) i = [...i, "L", o.p4.x, o.p4.y, "L", o.p3.x, o.p3.y, "L", o.p2.x, o.p2.y, "L", o.p1.x, o.p1.y, "L", o.p4.x, o.p4.y, "L", t.p4.x, t.p4.y];
                    return i.push("Z"), zn(i, n, r)
                }, $n.parseHexa = Qn, $n.formatRgba = Zn, $n.formatColor = function(t, e) {
                    return "rgb" === e || "hsl" === e ? Zn(Qn(t), e) : t.endsWith("FF") ? t.substr(0, 7) : t
                }, $n.drawPath = function(t, e, n, r, i, o, s) {
                    t.save();
                    var a = zn(e, o, s);
                    return n && (t.fillStyle = n, t.fill(a)), r && ("dashed" === i && t.setLineDash([3, 3]), "dotted" === i && t.setLineDash([2, 2]), t.lineWidth = 2, t.strokeStyle = r, t.stroke(a)), t.restore(), a
                }, Object.defineProperty(Nn, "__esModule", {
                    value: !0
                }), Nn.HighlightOverlay = void 0;
                var tr = An,
                    er = Un,
                    nr = $n;
                class rr extends er.Overlay {
                    constructor() {
                        super(...arguments), this.gridLabelState = {
                            gridLayerCounter: 0
                        }
                    }
                    setContainer(t) {
                        this._container = t
                    }
                    setPlatform(t) {
                        this.container && this.container.classList.add("luna-dom-highlighter-platform-" + t), super.setPlatform(t)
                    }
                    get container() {
                        return this._container
                    }
                    reset(t) {
                        super.reset(t), this.tooltip.innerHTML = "", this.gridLabelState.gridLayerCounter = 0
                    }
                    install() {
                        var t = this.document.createElement("canvas");
                        t.id = "canvas", t.classList.add("luna-dom-highlighter-fill"), this.container.append(t);
                        var e = this.document.createElement("div");
                        this.container.append(e), this.tooltip = e, this.setCanvas(t), super.install()
                    }
                    uninstall() {
                        this.document.body.classList.remove("fill"), this.document.body.innerHTML = "", super.uninstall()
                    }
                    drawHighlight(t) {
                        this.context.save();
                        for (var e = nr.emptyBounds(), n = t.paths.slice(); n.length;) {
                            var r = n.pop();
                            r && (this.context.save(), nr.drawPath(this.context, r.path, r.fillColor, r.outlineColor, void 0, e, this.emulationScaleFactor), n.length && (this.context.globalCompositeOperation = "destination-out", nr.drawPath(this.context, n[n.length - 1].path, "red", void 0, void 0, e, this.emulationScaleFactor)), this.context.restore())
                        }
                        this.context.restore(), this.context.save();
                        var i = Boolean(t.paths.length && t.showRulers && e.minX < 20 && e.maxX + 20 < this.canvasWidth),
                            o = Boolean(t.paths.length && t.showRulers && e.minY < 20 && e.maxY + 20 < this.canvasHeight);
                        return t.showRulers && this.drawAxis(this.context, i, o), t.paths.length && (t.showExtensionLines && function(t, e, n, r, i, o, s, a) {
                            t.save();
                            var u = s,
                                l = a;
                            if (t.strokeStyle = ar, t.lineWidth = 1, t.translate(.5, .5), n)
                                for (var c in e.rightmostXForY) t.beginPath(), t.moveTo(u, Number(c)), t.lineTo(e.rightmostXForY[c], Number(c)), t.stroke();
                            else
                                for (var h in e.leftmostXForY) t.beginPath(), t.moveTo(0, Number(h)), t.lineTo(e.leftmostXForY[h], Number(h)), t.stroke();
                            if (r)
                                for (var d in e.bottommostYForX) t.beginPath(), t.moveTo(Number(d), l), t.lineTo(Number(d), e.topmostYForX[d]), t.stroke();
                            else
                                for (var p in e.topmostYForX) t.beginPath(), t.moveTo(Number(p), 0), t.lineTo(Number(p), e.topmostYForX[p]), t.stroke();
                            t.restore()
                        }(this.context, e, i, o, 0, 0, this.canvasWidth, this.canvasHeight), t.elementInfo && function(t, e, n, r, i, o) {
                            t.innerHTML = "";
                            var s = er.createChild(t, "div"),
                                a = er.createChild(s, "div", "tooltip-content"),
                                u = function(t, e) {
                                    var n = er.createElement("div", "element-info"),
                                        r = er.createChild(n, "div", "element-info-header"),
                                        i = function(t) {
                                            return t.layoutObjectName && t.layoutObjectName.endsWith("Grid") ? "grid" : t.layoutObjectName && "LayoutNGFlexibleBox" === t.layoutObjectName ? "flex" : null
                                        }(t);
                                    i && er.createChild(r, "div", `element-layout-type ${i}`);
                                    var o = er.createChild(r, "div", "element-description");
                                    er.createChild(o, "span", "material-tag-name").textContent = t.tagName;
                                    var s = er.createChild(o, "span", "material-node-id");
                                    s.textContent = t.idValue ? "#" + er.ellipsify(t.idValue, 80) : "", s.classList.toggle("hidden", !t.idValue);
                                    var a = er.createChild(o, "span", "material-class-name");
                                    s.textContent.length < 80 && (a.textContent = er.ellipsify(t.className || "", 80 - s.textContent.length)), a.classList.toggle("hidden", !t.className);
                                    var u = er.createChild(r, "div", "dimensions");
                                    er.createChild(u, "span", "material-node-width").textContent = String(Math.round(100 * t.nodeWidth) / 100), er.createTextChild(u, "×"), er.createChild(u, "span", "material-node-height").textContent = String(Math.round(100 * t.nodeHeight) / 100);
                                    var l, c = t.style || {};
                                    t.isLockedAncestor && w("Showing content-visibility ancestor", ""), t.isLocked && w("Descendants are skipped due to content-visibility", "");
                                    var h = c.color;
                                    h && "#00000000" !== h && _("Color", h, e);
                                    var d = c["font-family"],
                                        p = c["font-size"];
                                    d && "0px" !== p && w("Font", `${p} ${d}`);
                                    var f = c["background-color"];
                                    f && "#00000000" !== f && _("Background", f, e);
                                    var g = c.margin;
                                    g && "0px" !== g && w("Margin", g);
                                    var v = c.padding;
                                    v && "0px" !== v && w("Padding", v);
                                    var m = t.contrast ? t.contrast.backgroundColor : null,
                                        y = h && "#00000000" !== h && m && "#00000000" !== m;

                                    function b() {
                                        l || (l = er.createChild(n, "div", "element-info-body"))
                                    }

                                    function x(t, e, n) {
                                        b();
                                        var r = er.createChild(l, "div", "element-info-row");
                                        return e && r.classList.add(e), er.createChild(r, "div", "element-info-name").textContent = t, er.createChild(r, "div", "element-info-gap"), er.createChild(r, "div", n || "")
                                    }

                                    function w(t, e) {
                                        er.createTextChild(x(t, "", "element-info-value-text"), e)
                                    }

                                    function _(t, e, n) {
                                        var r = x(t, "", "element-info-value-color"),
                                            i = er.createChild(r, "div", "color-swatch");
                                        er.createChild(i, "div", "color-swatch-inner").style.backgroundColor = e, er.createTextChild(r, nr.formatColor(e, n))
                                    }
                                    return t.showAccessibilityInfo && (function(t) {
                                        b();
                                        var e = er.createChild(l, "div", "element-info-row element-info-section");
                                        er.createChild(e, "div", "section-name").textContent = t, er.createChild(er.createChild(e, "div", "separator-container"), "div", "separator")
                                    }("Accessibility"), y && c.color && t.contrast && function(t, e) {
                                        var n = nr.parseHexa(t),
                                            r = nr.parseHexa(e.backgroundColor);
                                        n[3] *= e.textOpacity;
                                        var i = x("Contrast", "", "element-info-value-contrast"),
                                            o = er.createChild(i, "div", "contrast-text");
                                        o.style.color = nr.formatRgba(n, "rgb"), o.style.backgroundColor = e.backgroundColor, o.textContent = "Aa";
                                        var s = er.createChild(i, "span");
                                        if ("apca" === e.contrastAlgorithm) {
                                            var a = tr.contrastRatioAPCA(n, r),
                                                u = tr.getAPCAThreshold(e.fontSize, e.fontWeight);
                                            s.textContent = String(Math.floor(100 * a) / 100) + "%", er.createChild(i, "div", null === u || Math.abs(a) < u ? "a11y-icon a11y-icon-warning" : "a11y-icon a11y-icon-ok")
                                        } else if ("aa" === e.contrastAlgorithm || "aaa" === e.contrastAlgorithm) {
                                            var l = tr.contrastRatio(n, r),
                                                c = tr.getContrastThreshold(e.fontSize, e.fontWeight)[e.contrastAlgorithm];
                                            s.textContent = String(Math.floor(100 * l) / 100), er.createChild(i, "div", l < c ? "a11y-icon a11y-icon-warning" : "a11y-icon a11y-icon-ok")
                                        }
                                    }(c.color, t.contrast), w("Name", t.accessibleName), w("Role", t.accessibleRole), function(t, e) {
                                        er.createChild(x(t, "", "element-info-value-icon"), "div", e)
                                    }("Keyboard-focusable", t.isKeyboardFocusable ? "a11y-icon a11y-icon-ok" : "a11y-icon a11y-icon-not-ok")), n
                                }(e, n);
                            a.appendChild(u);
                            var l, c = a.offsetWidth,
                                h = a.offsetHeight,
                                d = 10,
                                p = i - 2 - d - 16;
                            if (r.maxX - r.minX < 36) l = .5 * (r.minX + r.maxX) - 8;
                            else {
                                var f = r.minX + d,
                                    g = r.maxX - d - 16;
                                l = f > 12 && f < p ? f : er.constrainNumber(12, f, g)
                            }
                            var v = l < 12 || l > p,
                                m = l - d;
                            m = er.constrainNumber(m, 2, i - c - 2);
                            var y = r.minY - 8 - h,
                                b = !0;
                            y < 0 ? (y = Math.min(o - h, r.maxY + 8), b = !1) : r.minY > o && (y = o - 8 - h);
                            var x = m >= r.minX && m + c <= r.maxX && y >= r.minY && y + h <= r.maxY;
                            if (!(m < r.maxX && m + c > r.minX && y < r.maxY && y + h > r.minY) || x) {
                                if (a.style.top = y + "px", a.style.left = m + "px", !v) {
                                    var w = er.createChild(a, "div", "tooltip-arrow");
                                    w.style.clipPath = b ? "polygon(0 0, 100% 0, 50% 100%)" : "polygon(50% 0, 0 100%, 100% 100%)", w.style.top = (b ? h - 1 : -8) + "px", w.style.left = l - m + "px"
                                }
                            } else a.style.display = "none"
                        }(this.tooltip, t.elementInfo, t.colorFormat, e, this.canvasWidth, this.canvasHeight)), this.context.restore(), {
                            bounds: e
                        }
                    }
                    drawAxis(t, e, n) {
                        t.save();
                        var r = this.pageZoomFactor * this.pageScaleFactor * this.emulationScaleFactor,
                            i = this.scrollX * this.pageScaleFactor,
                            o = this.scrollY * this.pageScaleFactor;

                        function s(t) {
                            return Math.round(t * r)
                        }

                        function a(t) {
                            return Math.round(t / r)
                        }
                        var u = this.canvasWidth / r,
                            l = this.canvasHeight / r,
                            c = 50;
                        t.save(), t.fillStyle = sr, n ? t.fillRect(0, s(l) - 15, s(u), s(l)) : t.fillRect(0, 0, s(u), 15), t.globalCompositeOperation = "destination-out", t.fillStyle = "red", e ? t.fillRect(s(u) - 15, 0, s(u), s(l)) : t.fillRect(0, 0, 15, s(l)), t.restore(), t.fillStyle = sr, e ? t.fillRect(s(u) - 15, 0, s(u), s(l)) : t.fillRect(0, 0, 15, s(l)), t.lineWidth = 1, t.strokeStyle = or, t.fillStyle = or, t.save(), t.translate(-i, .5 - o);
                        for (var h = l + a(o), d = 100; d < h; d += 100) t.save(), t.translate(i, s(d)), t.rotate(-Math.PI / 2), t.fillText(String(d), 2, e ? s(u) - 7 : 13), t.restore();
                        t.translate(.5, -.5);
                        for (var p = u + a(i), f = 100; f < p; f += 100) t.save(), t.fillText(String(f), s(f) + 2, n ? o + s(l) - 7 : o + 13), t.restore();
                        t.restore(), t.save(), e && (t.translate(s(u), 0), t.scale(-1, 1)), t.translate(-i, .5 - o);
                        for (var g = l + a(o), v = c; v < g; v += c) {
                            t.beginPath(), t.moveTo(i, s(v));
                            var m = v % 100 ? 5 : 8;
                            t.lineTo(i + m, s(v)), t.stroke()
                        }
                        t.strokeStyle = ir;
                        for (var y = 5; y < g; y += 5) y % c && (t.beginPath(), t.moveTo(i, s(y)), t.lineTo(i + 5, s(y)), t.stroke());
                        t.restore(), t.save(), n && (t.translate(0, s(l)), t.scale(1, -1)), t.translate(.5 - i, -o);
                        for (var b = u + a(i), x = c; x < b; x += c) {
                            t.beginPath(), t.moveTo(s(x), o);
                            var w = x % 100 ? 5 : 8;
                            t.lineTo(s(x), o + w), t.stroke()
                        }
                        t.strokeStyle = ir;
                        for (var _ = 5; _ < b; _ += 5) _ % c && (t.beginPath(), t.moveTo(s(_), o), t.lineTo(s(_), o + 5), t.stroke());
                        t.restore(), t.restore()
                    }
                }
                Nn.HighlightOverlay = rr;
                var ir = "rgba(0,0,0,0.2)",
                    or = "rgba(0,0,0,0.7)",
                    sr = "rgba(255, 255, 255, 0.8)",
                    ar = "rgba(128, 128, 128, 0.3)",
                    ur = {
                        exports: {}
                    },
                    lr = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = Ee.exports,
                        r = yt.exports,
                        i = fe.exports;
                    e = (0, ue.exports)({
                        initialize: function() {
                            this._listeners = []
                        },
                        addListener: function(t) {
                            this._listeners.push(t)
                        },
                        rmListener: function(t) {
                            var e = this._listeners.indexOf(t);
                            e > -1 && this._listeners.splice(e, 1)
                        },
                        rmAllListeners: function() {
                            this._listeners = []
                        },
                        emit: function() {
                            var t = this,
                                e = i(arguments),
                                o = n(this._listeners);
                            r(o, (function(n) {
                                return n.apply(t, e)
                            }), this)
                        }
                    }, {
                        mixin: function(t) {
                            r(["addListener", "rmListener", "emit", "rmAllListeners"], (function(n) {
                                t[n] = e.prototype[n]
                            })), t._listeners = t._listeners || []
                        }
                    }), t.exports = e
                }(lr, lr.exports);
                var cr = {
                        exports: {}
                    },
                    hr = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t) {
                        return !(!t || 1 !== t.nodeType)
                    }, t.exports = e
                }(hr, hr.exports),
                function(t, e) {
                    var n = hr.exports,
                        r = Wt.exports,
                        i = jt.exports,
                        o = Ge.exports,
                        s = Oe.exports,
                        a = yt.exports,
                        u = _t.exports;
                    e = function(t, e) {
                        for (var l = arguments.length, c = new Array(l > 2 ? l - 2 : 0), h = 2; h < l; h++) c[h - 2] = arguments[h];
                        (n(e) || r(e)) && (c.unshift(e), e = null), e || (e = {});
                        var d = function(t) {
                                for (var e = "div", n = "", r = [], o = [], s = "", a = 0, u = t.length; a < u; a++) {
                                    var l = t[a];
                                    "#" === l || "." === l ? (o.push(s), s = l) : s += l
                                }
                                o.push(s);
                                for (var c = 0, h = o.length; c < h; c++)(s = o[c]) && (i(s, "#") ? n = s.slice(1) : i(s, ".") ? r.push(s.slice(1)) : e = s);
                                return {
                                    tagName: e,
                                    id: n,
                                    classes: r
                                }
                            }(t),
                            p = d.tagName,
                            f = d.id,
                            g = d.classes,
                            v = document.createElement(p);
                        return f && v.setAttribute("id", f), o.add(v, g), a(c, (function(t) {
                            r(t) ? v.appendChild(document.createTextNode(t)) : n(t) && v.appendChild(t)
                        })), a(e, (function(t, e) {
                            r(t) ? v.setAttribute(e, t) : u(t) && i(e, "on") ? v.addEventListener(e.slice(2), t, !1) : "style" === e && s(v, t)
                        })), v
                    }, t.exports = e
                }(cr, cr.exports),
                function(t, e) {
                    var n = lr.exports,
                        r = cr.exports,
                        i = He.exports,
                        o = Oe.exports,
                        s = Ut.exports,
                        a = le.exports,
                        u = Xe.exports;
                    e = u.ResizeObserver ? n.extend({
                        initialize: function(t) {
                            var e = this;
                            if (t._resizeSensor) return t._resizeSensor;
                            this.callSuper(n, "initialize");
                            var r = new u.ResizeObserver((function() {
                                return e.emit()
                            }));
                            r.observe(t), t._resizeSensor = this, this._resizeObserver = r, this._el = t
                        },
                        destroy: function() {
                            var t = this._el;
                            t._resizeSensor && (this.rmAllListeners(), delete t._resizeSensor, this._resizeObserver.unobserve(t))
                        }
                    }) : n.extend({
                        initialize: function(t) {
                            if (t._resizeSensor) return t._resizeSensor;
                            this.callSuper(n, "initialize"), this._el = t, t._resizeSensor = this, s(["absolute", "relative", "fixed", "sticky"], o(t, "position")) || o(t, "position", "relative"), this._appendResizeSensor(), this._bindEvent()
                        },
                        destroy: function() {
                            var t = this._el;
                            t._resizeSensor && (this.rmAllListeners(), delete t._resizeSensor, t.removeChild(this._resizeSensorEl))
                        },
                        _appendResizeSensor: function() {
                            var t = this._el,
                                e = {
                                    pointerEvents: "none",
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    right: "0px",
                                    bottom: "0px",
                                    overflow: "hidden",
                                    zIndex: "-1",
                                    visibility: "hidden",
                                    maxWidth: "100%"
                                },
                                n = {
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "0s"
                                },
                                i = r("div", {
                                    style: n
                                }),
                                o = r("div.resize-sensor-expand", {
                                    style: e
                                }, i),
                                s = r("div.resize-sensor-shrink", {
                                    style: e
                                }, r("div", {
                                    style: a({
                                        width: "200%",
                                        height: "200%"
                                    }, n)
                                })),
                                u = r("div.resize-sensor", {
                                    dir: "ltr",
                                    style: e
                                }, o, s);
                            this._expandEl = o, this._expandChildEl = i, this._shrinkEl = s, this._resizeSensorEl = u, t.appendChild(u), this._resetExpandShrink()
                        },
                        _bindEvent: function() {
                            var t = this;
                            i.on(this._expandEl, "scroll", (function() {
                                return t._onScroll()
                            })), i.on(this._shrinkEl, "scroll", (function() {
                                return t._onScroll()
                            }))
                        },
                        _onScroll: function() {
                            this.emit(), this._resetExpandShrink()
                        },
                        _resetExpandShrink: function() {
                            var t = this._el,
                                e = t.offsetWidth,
                                n = t.offsetHeight;
                            o(this._expandChildEl, {
                                width: e + 10,
                                height: n + 10
                            }), a(this._expandEl, {
                                scrollLeft: e + 10,
                                scrollTop: n + 10
                            }), a(this._shrinkEl, {
                                scrollLeft: e + 10,
                                scrollTop: n + 10
                            })
                        }
                    }), t.exports = e
                }(ur, ur.exports);
                var dr = {
                        exports: {}
                    },
                    pr = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t, e, n) {
                        var r;
                        return function() {
                            var i = this,
                                o = arguments;
                            n || clearTimeout(r), n && r || (r = setTimeout((function() {
                                r = null, t.apply(i, o)
                            }), e))
                        }
                    }, t.exports = e
                }(pr, pr.exports),
                function(t, e) {
                    var n = pr.exports;
                    e = function(t, e) {
                        return n(t, e, !0)
                    }, t.exports = e
                }(dr, dr.exports);
                var fr = {
                        exports: {}
                    },
                    gr = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = At.exports;
                    e = function(t, e, r) {
                        return n(r) && (r = e, e = void 0), !n(e) && t < e ? e : t > r ? r : t
                    }, t.exports = e
                }(gr, gr.exports);
                var vr = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t) {
                        var e, o, s = t[0] / 255,
                            a = t[1] / 255,
                            u = t[2] / 255,
                            l = n(s, a, u),
                            c = r(s, a, u),
                            h = c - l;
                        (e = n(60 * (e = c === l ? 0 : s === c ? (a - u) / h : a === c ? 2 + (u - s) / h : 4 + (s - a) / h), 360)) < 0 && (e += 360);
                        var d = (l + c) / 2;
                        o = c === l ? 0 : d <= .5 ? h / (c + l) : h / (2 - c - l);
                        var p = [i(e), i(100 * o), i(100 * d)];
                        return t[3] && (p[3] = t[3]), p
                    };
                    var n = Math.min,
                        r = Math.max,
                        i = Math.round;
                    t.exports = e
                }(vr, vr.exports);
                var mr = {
                    exports: {}
                };
                ! function(t, e) {
                    e = function(t) {
                        var e, r, i, o = t[0] / 360,
                            s = t[1] / 100,
                            a = t[2] / 100,
                            u = [];
                        if (t[3] && (u[3] = t[3]), 0 === s) return i = n(255 * a), u[0] = u[1] = u[2] = i, u;
                        for (var l = 2 * a - (e = a < .5 ? a * (1 + s) : a + s - a * s), c = 0; c < 3; c++)(r = o + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, i = 6 * r < 1 ? l + 6 * (e - l) * r : 2 * r < 1 ? e : 3 * r < 2 ? l + (e - l) * (2 / 3 - r) * 6 : l, u[c] = n(255 * i);
                        return u
                    };
                    var n = Math.round;
                    t.exports = e
                }(mr, mr.exports);
                var yr = {
                        exports: {}
                    },
                    br = {
                        exports: {}
                    },
                    xr = {
                        exports: {}
                    };
                ! function(t, e) {
                    var n = xt.exports;
                    e = function(t) {
                        return n(t) && t % 1 == 0
                    }, t.exports = e
                }(xr, xr.exports),
                function(t, e) {
                    var n = xr.exports;
                    e = function(t) {
                        return !!n(t) && t % 2 != 0
                    }, t.exports = e
                }(br, br.exports),
                function(t, e) {
                    var n = br.exports;
                    e = {
                        encode: function(t) {
                            for (var e = [], n = 0, r = t.length; n < r; n++) {
                                var i = t[n];
                                e.push((i >>> 4).toString(16)), e.push((15 & i).toString(16))
                            }
                            return e.join("")
                        },
                        decode: function(t) {
                            var e = [],
                                r = t.length;
                            n(r) && r--;
                            for (var i = 0; i < r; i += 2) e.push(parseInt(t.substr(i, 2), 16));
                            return e
                        }
                    }, t.exports = e
                }(yr, yr.exports),
                function(t, e) {
                    var n = Wt.exports,
                        r = gr.exports,
                        i = vr.exports,
                        o = mr.exports,
                        s = yr.exports;
                    e = (0, ue.exports)({
                        initialize: function(t) {
                            n(t) && (t = e.parse(t)), this.model = t.model, this.val = t.val
                        },
                        toRgb: function() {
                            var t = this.val;
                            "hsl" === this.model && (t = o(t));
                            var e = "rgba";
                            return 1 === t[3] && (e = "rgb", t = t.slice(0, 3)), e + "(" + t.join(", ") + ")"
                        },
                        toHex: function() {
                            var t = this.val;
                            "hsl" === this.model && (t = o(t));
                            var e = s.encode(t.slice(0, 3));
                            return e[0] === e[1] && e[2] === e[3] && e[4] === e[5] && (e = e[0] + e[2] + e[5]), "#" + e
                        },
                        toHsl: function() {
                            var t = this.val;
                            "rgb" === this.model && (t = i(t));
                            var e = "hsla";
                            return 1 === t[3] && (e = "hsl", t = t.slice(0, 3)), t[1] = t[1] + "%", t[2] = t[2] + "%", e + "(" + t.join(", ") + ")"
                        }
                    }, {
                        parse: function(t) {
                            var e, n, i = [0, 0, 0, 1],
                                o = "rgb";
                            if (n = t.match(a))
                                for (n = n[1], e = 0; e < 3; e++) i[e] = parseInt(n[e] + n[e], 16);
                            else if (n = t.match(u))
                                for (n = n[1], e = 0; e < 3; e++) {
                                    var s = 2 * e;
                                    i[e] = parseInt(n.slice(s, s + 2), 16)
                                } else if (n = t.match(l)) {
                                    for (e = 0; e < 3; e++) i[e] = parseInt(n[e + 1], 0);
                                    n[4] && (i[3] = parseFloat(n[4]))
                                } else if (n = t.match(c)) {
                                for (e = 0; e < 3; e++) i[e] = Math.round(2.55 * parseFloat(n[e + 1]));
                                n[4] && (i[3] = parseFloat(n[4]))
                            } else(n = t.match(h)) && (o = "hsl", i = [(parseFloat(n[1]) % 360 + 360) % 360, r(parseFloat(n[2]), 0, 100), r(parseFloat(n[3]), 0, 100), r(parseFloat(n[4]), 0, 1)]);
                            return {
                                val: i,
                                model: o
                            }
                        }
                    });
                    var a = /^#([a-fA-F0-9]{3})$/,
                        u = /^#([a-fA-F0-9]{6})$/,
                        l = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
                        c = /^rgba?\(\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
                        h = /^hsla?\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
                    t.exports = e
                }(fr, fr.exports);
                var wr = {
                    exports: {}
                };
                ! function(t, e) {
                    var n = en.exports;
                    e = function(t) {
                        return n(t).toLocaleUpperCase()
                    }, t.exports = e
                }(wr, wr.exports);
                var _r = {};
                Object.defineProperty(_r, "__esModule", {
                        value: !0
                    }), _r.default = [
                        ["menuitem", "command"],
                        ["rel", "roletype"],
                        ["article", "article"],
                        ["header", "banner"],
                        ["input", "button", [
                            ["type", "checkbox"]
                        ]],
                        ["summary", "button", [
                            ["aria-expanded", "false"]
                        ]],
                        ["summary", "button", [
                            ["aria-expanded", "true"]
                        ]],
                        ["input", "button", [
                            ["type", "button"]
                        ]],
                        ["input", "button", [
                            ["type", "image"]
                        ]],
                        ["input", "button", [
                            ["type", "reset"]
                        ]],
                        ["input", "button", [
                            ["type", "submit"]
                        ]],
                        ["button", "button"],
                        ["td", "cell"],
                        ["input", "checkbox", [
                            ["type", "checkbox"]
                        ]],
                        ["th", "columnheader"],
                        ["input", "combobox", [
                            ["type", "email"]
                        ]],
                        ["input", "combobox", [
                            ["type", "search"]
                        ]],
                        ["input", "combobox", [
                            ["type", "tel"]
                        ]],
                        ["input", "combobox", [
                            ["type", "text"]
                        ]],
                        ["input", "combobox", [
                            ["type", "url"]
                        ]],
                        ["input", "combobox", [
                            ["type", "url"]
                        ]],
                        ["select", "combobox"],
                        ["select", "combobox", [
                            ["size", 1]
                        ]],
                        ["aside", "complementary"],
                        ["footer", "contentinfo"],
                        ["dd", "definition"],
                        ["dialog", "dialog"],
                        ["body", "document"],
                        ["figure", "figure"],
                        ["form", "form"],
                        ["form", "form"],
                        ["form", "form"],
                        ["span", "generic"],
                        ["div", "generic"],
                        ["table", "grid", [
                            ["role", "grid"]
                        ]],
                        ["td", "gridcell", [
                            ["role", "gridcell"]
                        ]],
                        ["details", "group"],
                        ["fieldset", "group"],
                        ["optgroup", "group"],
                        ["h1", "heading"],
                        ["h2", "heading"],
                        ["h3", "heading"],
                        ["h4", "heading"],
                        ["h5", "heading"],
                        ["h6", "heading"],
                        ["img", "img"],
                        ["img", "img"],
                        ["a", "link"],
                        ["area", "link"],
                        ["link", "link"],
                        ["menu", "list"],
                        ["ol", "list"],
                        ["ul", "list"],
                        ["select", "listbox"],
                        ["select", "listbox"],
                        ["select", "listbox"],
                        ["datalist", "listbox"],
                        ["li", "listitem"],
                        ["main", "main"],
                        ["math", "math"],
                        ["menuitem", "command"],
                        ["nav", "navigation"],
                        ["option", "option"],
                        ["progress", "progressbar"],
                        ["input", "radio", [
                            ["type", "radio"]
                        ]],
                        ["section", "region"],
                        ["section", "region"],
                        ["frame", "region"],
                        ["tr", "row"],
                        ["tbody", "rowgroup"],
                        ["tfoot", "rowgroup"],
                        ["thead", "rowgroup"],
                        ["th", "rowheader", [
                            ["scope", "row"]
                        ]],
                        ["input", "searchbox", [
                            ["type", "search"]
                        ]],
                        ["hr", "separator"],
                        ["input", "slider", [
                            ["type", "range"]
                        ]],
                        ["input", "spinbutton", [
                            ["type", "number"]
                        ]],
                        ["output", "status"],
                        ["table", "table"],
                        ["dfn", "term"],
                        ["input", "textbox"],
                        ["input", "textbox", [
                            ["type", "email"]
                        ]],
                        ["input", "textbox", [
                            ["type", "tel"]
                        ]],
                        ["input", "textbox", [
                            ["type", "text"]
                        ]],
                        ["input", "textbox", [
                            ["type", "url"]
                        ]],
                        ["textarea", "textbox"]
                    ],
                    function(t, e) {
                        var n = dt && dt.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var r = n(se),
                            i = Nn,
                            o = qe,
                            s = n(ur.exports),
                            a = n(dr.exports),
                            u = n(tn.exports),
                            l = n(yt.exports),
                            c = n(fr.exports),
                            h = n(yr.exports),
                            d = n(wr.exports),
                            p = n(le.exports),
                            f = n(Le.exports),
                            g = n(Ut.exports),
                            v = n(zt.exports),
                            m = n(_r),
                            y = n(Wt.exports);
                        class b extends r.default {
                            constructor(t, {
                                showRulers: e = !1,
                                showExtensionLines: n = !1,
                                showInfo: r = !0,
                                showStyles: o = !0,
                                showAccessibilityInfo: s = !0,
                                colorFormat: u = "hex",
                                contentColor: l = "rgba(111, 168, 220, .66)",
                                paddingColor: c = "rgba(147, 196, 125, .55)",
                                borderColor: h = "rgba(255, 229, 153, .66)",
                                marginColor: d = "rgba(246, 178, 107, .66)",
                                monitorResize: p = !0
                            } = {}) {
                                super(t, {
                                    compName: "dom-highlighter"
                                }), this.overlay = new i.HighlightOverlay(window), this.reset = () => {
                                    var t = document.documentElement.clientWidth,
                                        e = document.documentElement.clientHeight;
                                    this.overlay.reset({
                                        viewportSize: {
                                            width: t,
                                            height: e
                                        },
                                        deviceScaleFactor: 1,
                                        pageScaleFactor: 1,
                                        pageZoomFactor: 1,
                                        emulationScaleFactor: 1,
                                        scrollX: window.scrollX,
                                        scrollY: window.scrollY
                                    })
                                }, this.options = {
                                    showRulers: e,
                                    showExtensionLines: n,
                                    showInfo: r,
                                    showStyles: o,
                                    showAccessibilityInfo: s,
                                    colorFormat: u,
                                    contentColor: l,
                                    paddingColor: c,
                                    borderColor: h,
                                    marginColor: d,
                                    monitorResize: p
                                }, this.overlay.setContainer(t), this.overlay.setPlatform("mac"), this.redraw = a.default((() => {
                                    this.reset(), this.draw()
                                }), 16), this.redraw(), this.bindEvent()
                            }
                            highlight(t, e) {
                                e && p.default(this.options, e), this.target = t, t instanceof HTMLElement && this.options.monitorResize && (this.resizeSensor && this.resizeSensor.destroy(), this.resizeSensor = new s.default(t), this.resizeSensor.addListener(this.redraw)), this.redraw()
                            }
                            hide() {
                                this.target = null, this.redraw()
                            }
                            intercept(t) {
                                this.interceptor = t
                            }
                            destroy() {
                                window.removeEventListener("resize", this.redraw), window.removeEventListener("scroll", this.redraw), this.resizeSensor && this.resizeSensor.destroy(), super.destroy()
                            }
                            draw() {
                                var {
                                    target: t
                                } = this;
                                t && (t instanceof Text ? this.drawText(t) : this.drawElement(t))
                            }
                            drawText(t) {
                                var {
                                    options: e
                                } = this, n = document.createRange();
                                n.selectNode(t);
                                var {
                                    left: r,
                                    top: i,
                                    width: o,
                                    height: s
                                } = n.getBoundingClientRect();
                                n.detach();
                                var a = {
                                    paths: [{
                                        path: this.rectToPath({
                                            left: r,
                                            top: i,
                                            width: o,
                                            height: s
                                        }),
                                        fillColor: _(e.contentColor),
                                        name: "content"
                                    }],
                                    showExtensionLines: e.showExtensionLines,
                                    showRulers: e.showRulers
                                };
                                e.showInfo && (a.elementInfo = {
                                    tagName: "#text",
                                    nodeWidth: o,
                                    nodeHeight: s
                                }), this.overlay.drawHighlight(a)
                            }
                            drawElement(t) {
                                var e = {
                                    paths: this.getPaths(t),
                                    showExtensionLines: this.options.showExtensionLines,
                                    showRulers: this.options.showRulers,
                                    colorFormat: this.options.colorFormat
                                };
                                if (this.options.showInfo && (e.elementInfo = this.getElementInfo(t)), this.interceptor) {
                                    var n = this.interceptor(e);
                                    n && (e = n)
                                }
                                this.overlay.drawHighlight(e)
                            }
                            getPaths(t) {
                                var {
                                    options: e
                                } = this, n = window.getComputedStyle(t), {
                                    left: r,
                                    top: i,
                                    width: s,
                                    height: a
                                } = t.getBoundingClientRect(), u = t => o.pxToNum(n.getPropertyValue(t)), l = u("margin-left"), c = u("margin-right"), h = u("margin-top"), d = u("margin-bottom"), p = u("border-left-width"), f = u("border-right-width"), g = u("border-top-width"), v = u("border-bottom-width"), m = u("padding-left"), y = u("padding-right"), b = u("padding-top"), x = u("padding-bottom");
                                return [{
                                    path: this.rectToPath({
                                        left: r + p + m,
                                        top: i + g + b,
                                        width: s - p - m - f - y,
                                        height: a - g - b - v - x
                                    }),
                                    fillColor: _(e.contentColor),
                                    name: "content"
                                }, {
                                    path: this.rectToPath({
                                        left: r + p,
                                        top: i + g,
                                        width: s - p - f,
                                        height: a - g - v
                                    }),
                                    fillColor: _(e.paddingColor),
                                    name: "padding"
                                }, {
                                    path: this.rectToPath({
                                        left: r,
                                        top: i,
                                        width: s,
                                        height: a
                                    }),
                                    fillColor: _(e.borderColor),
                                    name: "border"
                                }, {
                                    path: this.rectToPath({
                                        left: r - l,
                                        top: i - h,
                                        width: s + l + c,
                                        height: a + h + d
                                    }),
                                    fillColor: _(e.marginColor),
                                    name: "margin"
                                }]
                            }
                            getElementInfo(t) {
                                var {
                                    width: e,
                                    height: n
                                } = t.getBoundingClientRect(), r = t.getAttribute("class") || "";
                                r = r.split(/\s+/).map((t => "." + t)).join("");
                                var i = {
                                    tagName: u.default(t.tagName),
                                    className: r,
                                    idValue: t.id,
                                    nodeWidth: e,
                                    nodeHeight: n
                                };
                                return this.options.showStyles && (i.style = this.getStyles(t)), this.options.showAccessibilityInfo && p.default(i, this.getAccessibilityInfo(t)), i
                            }
                            getStyles(t) {
                                for (var e = window.getComputedStyle(t), n = !1, r = t.childNodes, i = 0, o = r.length; i < o; i++) 3 === r[i].nodeType && (n = !0);
                                var s = [];
                                return n && s.push("color", "font-family", "font-size", "line-height"), s.push("padding", "margin", "background-color"), E(e, s)
                            }
                            getAccessibilityInfo(t) {
                                return {
                                    showAccessibilityInfo: !0,
                                    contrast: {
                                        contrastAlgorithm: "aa",
                                        textOpacity: .1,
                                        ...E(window.getComputedStyle(t), ["font-size", "font-weight", "background-color", "text-opacity"], !0)
                                    },
                                    isKeyboardFocusable: this.isFocusable(t),
                                    ...this.getAccessibleNameAndRole(t)
                                }
                            }
                            isFocusable(t) {
                                var e = u.default(t.tagName);
                                if (g.default(["a", "button", "input", "textarea", "select", "details"], e)) return !0;
                                var n = t.getAttribute("tabindex");
                                return !!(n && v.default(n) > -1)
                            }
                            getAccessibleNameAndRole(t) {
                                var e = t.getAttribute("labelledby") || t.getAttribute("aria-label"),
                                    n = t.getAttribute("role"),
                                    r = u.default(t.tagName);
                                return m.default.forEach((e => {
                                    if (!n) {
                                        var i = e[0],
                                            o = e[2];
                                        if (i === r) {
                                            if (o)
                                                for (var s of o)
                                                    if (t.getAttribute(s[0]) !== s[1]) return;
                                            n = e[1]
                                        }
                                    }
                                })), {
                                    accessibleName: e || t.getAttribute("title") || "",
                                    accessibleRole: n || "generic"
                                }
                            }
                            bindEvent() {
                                window.addEventListener("resize", this.redraw), window.addEventListener("scroll", this.redraw), this.on("optionChange", (() => this.redraw()))
                            }
                            rectToPath({
                                left: t,
                                top: e,
                                width: n,
                                height: r
                            }) {
                                var i = [];
                                return i.push("M", t, e), i.push("L", t + n, e), i.push("L", t + n, e + r), i.push("L", t, e + r), i.push("Z"), i
                            }
                        }
                        e.default = b, t.exports = b, t.exports.default = b;
                        var x = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                            w = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/;

                        function _(t) {
                            return y.default(t) ? t : t.a ? `rgba(${t.r}, ${t.g}, ${t.b}, ${t.a})` : `rgb(${t.r}, ${t.g}, ${t.b})`
                        }

                        function E(t, e, n = !1) {
                            var r = {};
                            return l.default(e, (e => {
                                var i, o = t["text-opacity" === e ? "color" : e];
                                o && (i = o, (x.test(i) || w.test(i)) && (o = function(t) {
                                    var e = c.default.parse(t),
                                        n = e.val[3] || 1;
                                    return e.val = e.val.slice(0, 3), e.val.push(Math.round(255 * n)), "#" + d.default(h.default.encode(e.val))
                                }(o), "text-opacity" === e && (o = o.slice(7), o = h.default.decode(o)[0] / 255)), n && (e = f.default(e)), r[e] = o)
                            })), r
                        }
                    }(oe, oe.exports);
                var Er, Tr = (Er = oe.exports) && Er.__esModule && Object.prototype.hasOwnProperty.call(Er, "default") ? Er.default : Er,
                    Nr = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = function(t) {
                        var e = document.createElement("style");
                        return e.textContent = t, e.type = "text/css", document.head.appendChild(e), e
                    }, t.exports = e
                }(Nr, Nr.exports);
                var Ar = Nr.exports,
                    Sr = {
                        exports: {}
                    };
                ! function(t, e) {
                    e = (0, Dt.exports)(ce.exports, !0), t.exports = e
                }(Sr, Sr.exports);
                var Ir = Sr.exports,
                    Cr = {
                        showInfo: !0,
                        showAccessibilityInfo: !0,
                        showStyles: !0,
                        contentColor: {
                            r: 111,
                            g: 168,
                            b: 220,
                            a: .66
                        },
                        paddingColor: {
                            r: 147,
                            g: 196,
                            b: 125,
                            a: .55
                        },
                        borderColor: {
                            r: 255,
                            g: 229,
                            b: 153,
                            a: .66
                        },
                        marginColor: {
                            r: 246,
                            g: 178,
                            b: 107,
                            a: .5
                        },
                        eventTargetColor: {
                            r: 255,
                            g: 196,
                            b: 196,
                            a: .66
                        },
                        shapeColor: {
                            r: 96,
                            g: 82,
                            b: 177,
                            a: .8
                        },
                        shapeMarginColor: {
                            r: 96,
                            g: 82,
                            b: 127,
                            a: .6
                        }
                    },
                    Or = new class extends U {
                        constructor() {
                            super(), this.container = document.createElement("div"), this.isInit = !1
                        }
                        init() {
                            Ar('.luna-dom-highlighter{position:fixed;left:0;top:0;width:100%;height:100%;z-index:100000;pointer-events:none;font-size:13px}.luna-dom-highlighter-fill{position:absolute;top:0;right:0;bottom:0;left:0}.luna-dom-highlighter-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-dom-highlighter-platform-mac{color:#303942;font-family:\'.SFNSDisplay-Regular\',\'Helvetica Neue\',\'Lucida Grande\',sans-serif}.luna-dom-highlighter-platform-windows{font-family:\'Segoe UI\',Tahoma,sans-serif}.luna-dom-highlighter-px{color:gray}#luna-dom-highlighter-element-title{position:absolute;z-index:10}.luna-dom-highlighter-tooltip-content{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;padding:5px 8px;border:1px solid #fff;border-radius:3px;box-sizing:border-box;min-width:100px;max-width:min(300px,100% - 4px);z-index:2;background-clip:padding-box;will-change:transform;text-rendering:optimizeLegibility;pointer-events:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35))}.luna-dom-highlighter-tooltip-content .luna-dom-highlighter-tooltip-arrow{background:#fff;width:15px;height:8px;position:absolute}.luna-dom-highlighter-element-info-section{margin-top:12px;margin-bottom:6px}.luna-dom-highlighter-section-name{color:#333;font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.05em;line-height:12px}.luna-dom-highlighter-element-info{display:flex;flex-direction:column}.luna-dom-highlighter-element-info-header{display:flex;align-items:center}.luna-dom-highlighter-element-info-body{display:flex;flex-direction:column;padding-top:2px;margin-top:2px}.luna-dom-highlighter-element-info-row{display:flex;line-height:19px}.luna-dom-highlighter-separator-container{display:flex;align-items:center;flex:auto;margin-left:7px}.luna-dom-highlighter-separator{border-top:1px solid #ddd;width:100%}.luna-dom-highlighter-element-info-name{flex-shrink:0;color:#666}.luna-dom-highlighter-element-info-gap{flex:auto}.luna-dom-highlighter-element-info-value-color{display:flex;color:#303942;margin-left:10px;align-items:baseline}.luna-dom-highlighter-a11y-icon{width:16px;height:16px;background-repeat:no-repeat;display:inline-block}.luna-dom-highlighter-element-info-value-contrast{display:flex;align-items:center;text-align:right;color:#303942;margin-left:10px}.luna-dom-highlighter-element-info-value-contrast .luna-dom-highlighter-a11y-icon{margin-left:8px}.luna-dom-highlighter-element-info-value-icon{display:flex;align-items:center}.luna-dom-highlighter-element-info-value-text{text-align:right;color:#303942;margin-left:10px;align-items:baseline;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.luna-dom-highlighter-color-swatch{display:flex;margin-right:2px;width:10px;height:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);line-height:10px}.luna-dom-highlighter-color-swatch-inner{flex:auto;border:1px solid #808002}.luna-dom-highlighter-element-layout-type{margin-right:10px;width:16px;height:16px}.luna-dom-highlighter-element-layout-type.luna-dom-highlighter-grid{background-image:url(\'data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="4" height="4" stroke="%231A73E8"/><rect x="9.5" y="2.5" width="4" height="4" stroke="%231A73E8"/><rect x="9.5" y="9.5" width="4" height="4" stroke="%231A73E8"/><rect x="2.5" y="9.5" width="4" height="4" stroke="%231A73E8"/></svg>\')}.luna-dom-highlighter-element-layout-type.luna-dom-highlighter-flex{background-image:url(\'data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5h8v3H1v-3zm-1 0a1 1 0 011-1h8a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1v-3zm12 0h3v3h-3v-3zm-1 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3zm-7 6H1v3h3v-3zm-3-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H1zm6 4v-3h8v3H7zm-1-3a1 1 0 011-1h8a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3z" fill="%231A73E8"/></svg>\')}.luna-dom-highlighter-element-description{flex:1 1;font-weight:700;word-wrap:break-word;word-break:break-all}.luna-dom-highlighter-dimensions{color:#737373;text-align:right;margin-left:10px}.luna-dom-highlighter-material-node-width{margin-right:2px}.luna-dom-highlighter-material-node-height{margin-left:2px}.luna-dom-highlighter-material-tag-name{color:#881280}.luna-dom-highlighter-material-class-name,.luna-dom-highlighter-material-node-id{color:#1a1aa6}.luna-dom-highlighter-contrast-text{width:16px;height:16px;text-align:center;line-height:16px;margin-right:8px;border:1px solid #000;padding:0 1px}.luna-dom-highlighter-a11y-icon-not-ok{background-image:url(\'data:image/svg+xml,<svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m9 1.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13.5c-3.315 0-6-2.685-6-6 0-1.3875.4725-2.6625 1.2675-3.675l8.4075 8.4075c-1.0125.795-2.2875 1.2675-3.675 1.2675zm4.7325-2.325-8.4075-8.4075c1.0125-.795 2.2875-1.2675 3.675-1.2675 3.315 0 6 2.685 6 6 0 1.3875-.4725 2.6625-1.2675 3.675z" fill="%239e9e9e"/></svg>\')}.luna-dom-highlighter-a11y-icon-warning{background-image:url(\'data:image/svg+xml,<svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m8.25 11.25h1.5v1.5h-1.5zm0-6h1.5v4.5h-1.5zm.7425-3.75c-4.14 0-7.4925 3.36-7.4925 7.5s3.3525 7.5 7.4925 7.5c4.1475 0 7.5075-3.36 7.5075-7.5s-3.36-7.5-7.5075-7.5zm.0075 13.5c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" fill="%23e37400"/></svg>\')}.luna-dom-highlighter-a11y-icon-ok{background-image:url(\'data:image/svg+xml,<svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m9 1.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13.5c-3.3075 0-6-2.6925-6-6s2.6925-6 6-6 6 2.6925 6 6-2.6925 6-6 6zm-1.5-4.35-1.95-1.95-1.05 1.05 3 3 6-6-1.05-1.05z" fill="%230ca40c"/></svg>\')}@media (forced-colors:active){:root,body{background-color:transparent;forced-color-adjust:none}.luna-dom-highlighter-tooltip-content{border-color:Highlight;background-color:canvas;color:text;forced-color-adjust:none}.luna-dom-highlighter-tooltip-content::after{background-color:Highlight}.luna-dom-highlighter-color-swatch-inner,.luna-dom-highlighter-contrast-text,.luna-dom-highlighter-separator{border-color:Highlight}.luna-dom-highlighter-section-name{color:Highlight}.luna-dom-highlighter-dimensions,.luna-dom-highlighter-element-info-name,.luna-dom-highlighter-element-info-value-color,.luna-dom-highlighter-element-info-value-contrast,.luna-dom-highlighter-element-info-value-icon,.luna-dom-highlighter-element-info-value-text,.luna-dom-highlighter-material-class-name,.luna-dom-highlighter-material-node-id,.luna-dom-highlighter-material-tag-name{color:canvastext}}\n\n/*# sourceMappingURL=luna-dom-highlighter.css.map*/'), Ar(".luna-dom-highlighter {\n    z-index: 2147483647;\n}"), this.domHighlighter = new Tr(this.container), this.domHighlighter.intercept((function(t) {
                                t.elementInfo && (t.elementInfo.tagName = t.elementInfo.tagName.replace(/^wx-/, ""))
                            })), this.isInit = !0
                        }
                        show(t, e = Cr) {
                            this.isInit || this.init(), Ir(e, {
                                contentColor: "transparent",
                                paddingColor: "transparent",
                                borderColor: "transparent",
                                marginColor: "transparent"
                            }), document.body.appendChild(this.container), this.domHighlighter.highlight(t.$$, e)
                        }
                        hide() {
                            Ve(this.container), this.domHighlighter && this.domHighlighter.hide()
                        }
                        dom() {
                            return this.container
                        }
                        contain(t) {
                            return this.container === t || this.container.contains(t)
                        }
                    },
                    Mr = class extends rt {
                        constructor() {
                            super(...arguments), this.highlight = Or
                        }
                        enable() {
                            return a(this, void 0, void 0, (function*() {
                                if (!this.tree) {
                                    var t = this.container.get(p);
                                    this.tree = new ie(Object.assign({}, t))
                                }
                                this.enabled = !0
                            }))
                        }
                        scrollIntoViewIfNeeded(t) {
                            var e;
                            return a(this, void 0, void 0, (function*() {
                                var {
                                    nodeId: n,
                                    backendNodeId: r,
                                    objectId: i,
                                    rect: o
                                } = t, s = yield this.getExparserNodeFromParams({
                                    nodeId: n,
                                    backendNodeId: r,
                                    objectId: i
                                });
                                null === (e = s.$$) || void 0 === e || e.scrollIntoView()
                            }))
                        }
                        getNodeForLocation(t) {
                            return a(this, void 0, void 0, (function*() {
                                var {
                                    x: e,
                                    y: n
                                } = t;
                                if (!(null === document || void 0 === document ? void 0 : document.elementFromPoint)) throw new Error("Method not implemented.");
                                var r = document.elementFromPoint(e, n).__wxElement;
                                if (!r) throw new Error("");
                                var i = this.tree.requestIdForNode(r);
                                return {
                                    nodeId: i,
                                    backendNodeId: i,
                                    frameId: "n/a"
                                }
                            }))
                        }
                        querySelector(t) {
                            return a(this, void 0, void 0, (function*() {
                                var {
                                    nodeId: e,
                                    selector: n
                                } = t, r = yield this.getExparserNodeFromParams({
                                    nodeId: e
                                }), i = -1;
                                return r.querySelector(n) && (i = this.tree.requestIdForNode(r)), {
                                    nodeId: i
                                }
                            }))
                        }
                        querySelectorAll(t) {
                            return a(this, void 0, void 0, (function*() {
                                var {
                                    nodeId: e,
                                    selector: n
                                } = t, r = (yield this.getExparserNodeFromParams({
                                    nodeId: e
                                })).querySelectorAll(n), i = [];
                                return (null == r ? void 0 : r.length) && (i = r.map((t => this.tree.requestIdForNode(t)))), {
                                    nodeIds: i
                                }
                            }))
                        }
                    };
                Mr = i([(0, r.b2)()], Mr);
                class Rr extends nt {
                    constructor({
                        exparser: t,
                        root: e,
                        customTabbar: n,
                        getSkylineEngine: r,
                        getWebviewEngine: i,
                        hideVirtual: o = !0
                    }) {
                        super({
                            exparser: t,
                            root: e,
                            customTabbar: n,
                            hideVirtual: o
                        }), this.getNodeName = (t, e = "") => {
                            var n, r, i = (null === (r = null === (n = null == t ? void 0 : t.$$) || void 0 === n ? void 0 : n.GetTagName) || void 0 === r ? void 0 : r.call(n)) || t.is || e;
                            return this.isWxComponent(t) ? i.slice(3) : i
                        }, this.getAttributes = t => {
                            var e, n, r, i, o;
                            this.spreadScopeData();
                            var s = [];
                            if (t.__attributes)
                                for (var a in t.__attributes) this.skippedDOMAttrs.has(a) || null == s || s.push(a, null !== (e = t.__attributes[a]) && void 0 !== e ? e : "");
                            return !t.__attributes.style && (null === (n = t.__styleSegments) || void 0 === n ? void 0 : n.length) && s.push("style", t.__styleSegments.join("")), t.__id && s.push("id", t.__id), (null === (i = null === (r = t.classList) || void 0 === r ? void 0 : r._rawNames) || void 0 === i ? void 0 : i.length) && s.push("class", ((null === (o = t.classList) || void 0 === o ? void 0 : o._rawNames) || []).join(" ") || ""), t.__component__ && s.push("is", t.is), s
                        }, this.removeAttributes = (t, e) => {
                            "class" === e ? t.classList.setClassNames("") : "id" === e ? t.id = "" : "style" === e ? t.setNodeStyle("") : t.removeAttribute(e)
                        }, this.setAttributeValue = (t, e, n) => {
                            "class" === e ? t.classList.setClassNames(n) : "id" === e ? t.id = n : "style" === e && t.setNodeStyle ? t.setNodeStyle(n) : t.setAttribute(e, n)
                        }, this._webviewEngine = i, this._skylineEngine = r
                    }
                    getRoot() {
                        return a(this, void 0, void 0, (function*() {
                            var t = yield this.getPageContextId();
                            return __virtualDOM__.getDomTreeByPageId(t)
                        }))
                    }
                    getPageContext() {
                        return a(this, void 0, void 0, (function*() {
                            var t = yield this.getPageContextId();
                            return this.skylineEngine.getRuntime().allContexts[t] || {}
                        }))
                    }
                    getPageContextId() {
                        return a(this, void 0, void 0, (function*() {
                            return new Promise(((t, e) => {
                                wx.getCurrentWebviewId({
                                    success(e) {
                                        t(e.webviewId)
                                    },
                                    fail() {
                                        e()
                                    }
                                })
                            }))
                        }))
                    }
                    removeNode(t) {
                        var e = Object.create(null, {
                            removeNode: {
                                get: () => super.removeNode
                            }
                        });
                        return a(this, void 0, void 0, (function*() {
                            yield e.removeNode.call(this, t), (yield this.getPageContext()).startRender()
                        }))
                    }
                    getAttributeValue(t, e) {
                        for (var n = this.getAttributes(t), r = {}, i = 0; i < n.length; i += 2) r[n[i]] = n[i + 1];
                        return r[e]
                    }
                }
                var Pr = class extends rt {
                    constructor() {
                        super(...arguments), this.highlight = Z
                    }
                    enable() {
                        return a(this, void 0, void 0, (function*() {
                            if (!this.tree) {
                                var t = this.container.get(p);
                                this.tree = new Rr(Object.assign({}, t))
                            }
                            this.enabled = !0
                        }))
                    }
                    scrollIntoViewIfNeeded(t) {
                        var e;
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: n,
                                backendNodeId: r,
                                objectId: i,
                                rect: o
                            } = t, s = yield this.getExparserNodeFromParams({
                                nodeId: n,
                                backendNodeId: r,
                                objectId: i
                            });
                            null === (e = s.$$) || void 0 === e || e.setScrollPosition({
                                scrollLeft: 0,
                                scrollTop: 10
                            })
                        }))
                    }
                    getNodeForLocation(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                x: e,
                                y: n
                            } = t, r = yield this.tree.getPageContext();
                            if (!(null == r ? void 0 : r.getNodeFromPoint)) throw new Error("Method getNodeFromPoint not implemented.");
                            var i = (yield k(r.getNodeFromPoint)([e, n])).__wxElement;
                            if (!i) throw new Error("");
                            var o = this.tree.requestIdForNode(i);
                            return {
                                nodeId: o,
                                backendNodeId: o,
                                frameId: "n/a"
                            }
                        }))
                    }
                    querySelector(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: e,
                                selector: n
                            } = t;
                            return yield this.getExparserNodeFromParams({
                                nodeId: e
                            }), {
                                nodeId: 1e3
                            }
                        }))
                    }
                    querySelectorAll(t) {
                        return a(this, void 0, void 0, (function*() {
                            return {
                                nodeIds: []
                            }
                        }))
                    }
                };
                Pr = i([(0, r.b2)()], Pr);
                var Dr = class {
                    constructor() {
                        this.getNodeById = t => {
                            var e;
                            return null === (e = this.DOMAdapter) || void 0 === e ? void 0 : e.tree.getNodeById(t)
                        }
                    }
                    get enabled() {
                        var t, e;
                        return null !== (e = null === (t = this.DOMAdapter) || void 0 === t ? void 0 : t.enabled) && void 0 !== e && e
                    }
                    logRemoteObject(t) {
                        return a(this, void 0, void 0, (function*() {
                            return console.log(x(t.objectId))
                        }))
                    }
                    setInspectedNode(t) {
                        var e;
                        return a(this, void 0, void 0, (function*() {
                            var n = null === (e = this.DOMAdapter) || void 0 === e ? void 0 : e.tree.setInspectedNodeForExparser(t.nodeId);
                            if (n) return {
                                variableName: n
                            };
                            throw new Error("Failed to set inspected node")
                        }))
                    }
                    getNodeData(t) {
                        var e;
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: n
                            } = t, r = this.getNodeById(n);
                            return {
                                data: /^wx-/.test(null !== (e = r.is) && void 0 !== e ? e : "") ? {} : r.data
                            }
                        }))
                    }
                    getNodeDetails(t) {
                        var e, n, r;
                        return a(this, void 0, void 0, (function*() {
                            var {
                                nodeId: i
                            } = t, o = this.getNodeById(i), s = {}, a = {}, u = {};
                            if (!/^wx-/.test(null !== (e = o.is) && void 0 !== e ? e : ""))
                                for (var [l, c] of Object.entries(o.data)) s[l] = b(c);
                            for (var h of null === (n = this.DOMAdapter) || void 0 === n ? void 0 : n.tree.exparser.Component.listPublicProperties(o)) Reflect.has(s, h) || (a[h] = b(o.__dataProxy._data[h]));
                            for (var [d, p] of Object.entries(null !== (r = o.__wxEvents) && void 0 !== r ? r : {})) u[d] = b(p);
                            return {
                                data: s,
                                events: u,
                                props: a
                            }
                        }))
                    }
                    disable() {
                        var t;
                        return a(this, void 0, void 0, (function*() {
                            null === (t = this.DOMAdapter) || void 0 === t || t.disable()
                        }))
                    }
                    enable() {
                        var t;
                        return a(this, void 0, void 0, (function*() {
                            null === (t = this.DOMAdapter) || void 0 === t || t.enable()
                        }))
                    }
                };
                i([A("DOM"), (0, r.jt)(), s("design:type", Mr)], Dr.prototype, "DOMAdapter", void 0), Dr = i([(0, r.b2)()], Dr);
                var Lr = class {
                    get enabled() {
                        return this.DOMAdapter.enabled && this._enabled
                    }
                    disable() {
                        return a(this, void 0, void 0, (function*() {
                            this._enabled = !1
                        }))
                    }
                    enable() {
                        return a(this, void 0, void 0, (function*() {
                            if (!this.DOMAdapter.enabled) throw new Error("Enable DOM first.");
                            this._enabled = !0
                        }))
                    }
                    findExparserNode(t) {
                        return a(this, void 0, void 0, (function*() {
                            for (; t && !t.__wxElement;) t = t.parentNode;
                            if (t) {
                                var e, n = t.__wxElement;
                                return exparser.ElementIterator.create(n, "composed-ancestors", exparser.Element).forEach((t => {
                                    var n;
                                    if ("//" === (null === (n = exparser.Component.getComponentOptions(t)) || void 0 === n ? void 0 : n.domain)) return e = t, !1
                                })), e
                            }
                        }))
                    }
                    emitInspectNodeRequested(t) {
                        return a(this, void 0, void 0, (function*() {
                            if (t) {
                                var {
                                    tree: e
                                } = this.DOMAdapter, n = e.requestIdForNode(t);
                                this.bridge.emit({
                                    method: "Overlay.inspectNodeRequested",
                                    params: {
                                        backendNodeId: n
                                    }
                                })
                            }
                        }))
                    }
                    getHighlightObjectForTest(t) {
                        throw new Error("Method not implemented.")
                    }
                    getGridHighlightObjectsForTest(t) {
                        throw new Error("Method not implemented.")
                    }
                    getSourceOrderHighlightObjectForTest(t) {
                        throw new Error("Method not implemented.")
                    }
                    hideHighlight() {
                        throw new Error("Method not implemented.")
                    }
                    highlightFrame(t) {
                        throw new Error("Method not implemented.")
                    }
                    highlightNode(t) {
                        throw new Error("Method not implemented.")
                    }
                    highlightQuad(t) {
                        throw new Error("Method not implemented.")
                    }
                    highlightRect(t) {
                        throw new Error("Method not implemented.")
                    }
                    highlightSourceOrder(t) {
                        throw new Error("Method not implemented.")
                    }
                    setInspectMode(t) {
                        return a(this, void 0, void 0, (function*() {
                            var {
                                mode: e,
                                highlightConfig: n
                            } = t;
                            switch (e) {
                                case "searchForNode":
                                    this.startInspect(n);
                                    break;
                                case "none":
                                    this.stopInspect();
                                    break;
                                default:
                                    throw new Error("Method not implemented.")
                            }
                        }))
                    }
                    setShowAdHighlights(t) {
                        throw new Error("Method not implemented.")
                    }
                    setPausedInDebuggerMessage(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowDebugBorders(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowFPSCounter(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowGridOverlays(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowFlexOverlays(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowScrollSnapOverlays(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowContainerQueryOverlays(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowPaintRects(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowLayoutShiftRegions(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowScrollBottleneckRects(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowHitTestBorders(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowWebVitals(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowViewportSizeOnResize(t) {
                        throw new Error("Method not implemented.")
                    }
                    setShowHinge(t) {
                        throw new Error("Method not implemented.")
                    }
                    on(t, e) {
                        throw new Error("Method not implemented.")
                    }
                };
                i([A("DOM"), s("design:type", rt)], Lr.prototype, "DOMAdapter", void 0), i([(0, r.f3)(h), s("design:type", g)], Lr.prototype, "bridge", void 0), Lr = i([(0, r.b2)()], Lr);
                var kr = class extends Lr {
                    constructor() {
                        super(...arguments), this.highlight = Or, this.handleClickEvents = t => a(this, void 0, void 0, (function*() {
                            t.preventDefault(), t.stopPropagation();
                            var {
                                x: e,
                                y: n
                            } = t, r = yield this.hitTest(e, n);
                            if (r) return this.emitInspectNodeRequested(r), !1
                        })), this.handleMouseDownEvents = t => {
                            document.body.dispatchEvent(new CustomEvent("touchcancel"))
                        }, this.handleMouseMoveEvents = t => a(this, void 0, void 0, (function*() {
                            var {
                                x: e,
                                y: n
                            } = t, r = yield this.hitTest(e, n);
                            if (r) {
                                var i = this.DOMAdapter.tree.requestIdForNode(r);
                                this.bridge.emit({
                                    method: "Overlay.nodeHighlightRequested",
                                    params: {
                                        nodeId: i
                                    }
                                }), this.highlight.show(r, this.highlightConfig)
                            }
                        }))
                    }
                    hitTest(t, e) {
                        return a(this, void 0, void 0, (function*() {
                            document.body.style.pointerEvents = "";
                            var n = document.elementFromPoint(t, e),
                                r = n ? yield this.findExparserNode(n): null;
                            return document.body.style.pointerEvents = "none", r
                        }))
                    }
                    startInspect(t) {
                        document.body.style.pointerEvents = "none", this.highlightConfig = t, this._handleMouseMoveEvents = L(this.handleMouseMoveEvents.bind(this), 100), document.addEventListener("click", this.handleClickEvents), document.addEventListener("mousedown", this.handleMouseDownEvents), document.addEventListener("mousemove", this._handleMouseMoveEvents)
                    }
                    stopInspect() {
                        document.body.style.pointerEvents = "", this.highlightConfig = void 0, document.removeEventListener("click", this.handleClickEvents), document.removeEventListener("mousedown", this.handleMouseDownEvents), document.removeEventListener("mousemove", this._handleMouseMoveEvents), this.bridge.emit({
                            method: "Overlay.inspectModeCanceled",
                            params: void 0
                        })
                    }
                };
                kr = i([(0, r.b2)()], kr);
                var Br = class extends Lr {
                    constructor() {
                        super(...arguments), this.highlight = Z, this.handleClickEvents = t => a(this, void 0, void 0, (function*() {
                            if (t && !z(t)) return this.emitInspectNodeRequested(t), !1
                        }))
                    }
                    hitTest(t, e) {
                        return new Promise((n => a(this, void 0, void 0, (function*() {
                            (yield this.DOMAdapter.tree.getPageContext()).getNodeFromPoint(t, e, (t => a(this, void 0, void 0, (function*() {
                                var e = t ? yield this.findExparserNode(t): null;
                                e = z(e) ? null : e, n(e)
                            }))))
                        }))))
                    }
                    handleMouseOverEvents(t) {
                        return a(this, void 0, void 0, (function*() {
                            if (t && !z(t)) {
                                var e = this.DOMAdapter.tree.requestIdForNode(t);
                                this.bridge.emit({
                                    method: "Overlay.nodeHighlightRequested",
                                    params: {
                                        nodeId: e
                                    }
                                }), yield this.highlight.show(t, this.highlightConfig)
                            }
                        }))
                    }
                    startInspect(t) {
                        return a(this, void 0, void 0, (function*() {
                            this.highlightConfig = t, this._handleMouseOverEvents = L(this.handleMouseOverEvents.bind(this), 100), this.DOMAdapter.tree.skylineEngine.getRuntime().startTouchEventInterception((t => {
                                var e = t.target;
                                if (e) {
                                    var n = e.__wxElement;
                                    "tap" === t.type ? this.handleClickEvents(n) : "mouseover" === t.type && this._handleMouseOverEvents(n)
                                }
                            }))
                        }))
                    }
                    stopInspect() {
                        return a(this, void 0, void 0, (function*() {
                            this.highlightConfig = void 0;
                            var t = yield this.DOMAdapter.tree.getPageContextId();
                            this.DOMAdapter.tree.skylineEngine.getRuntime().stopTouchEventInterception(t), this.bridge.emit({
                                method: "Overlay.inspectModeCanceled",
                                params: void 0
                            })
                        }))
                    }
                };
                Br = i([(0, r.b2)()], Br);
                var Fr = class {
                    constructor(t) {
                        this.fallbackAdapter = new D, this.handler = this.handleCommand.bind(this), this.bridge = t, this.bridge.on("command", this.handler)
                    }
                    destroy() {
                        this.bridge.off("command", this.handler)
                    }
                    handleCommand(t) {
                        var e, n;
                        return a(this, void 0, void 0, (function*() {
                            var r, {
                                    id: i,
                                    method: o,
                                    params: s
                                } = t,
                                [a, u] = o.split("."),
                                l = `${a}Adapter`,
                                c = null !== (e = Reflect.get(this, l)) && void 0 !== e ? e : this.fallbackAdapter;
                            if (c.enabled || "enable" === u) try {
                                r = null !== (n = yield c[u](s)) && void 0 !== n ? n : {}
                            } catch (t) {
                                console.error(`inspectee ${o} error:`, t), r = {
                                    message: "N/A"
                                }
                            } else r = {
                                message: "disabled, enable it first"
                            };
                            this.bridge.reply(i, r)
                        }))
                    }
                };
                i([A("CSS"), (0, r.jt)(), s("design:type", ot)], Fr.prototype, "CSSAdapter", void 0), i([A("DOM"), (0, r.jt)(), s("design:type", Mr)], Fr.prototype, "DOMAdapter", void 0), i([A("Misc"), (0, r.jt)(), s("design:type", R)], Fr.prototype, "MiscAdapter", void 0), i([A("Runtime"), (0, r.jt)(), s("design:type", E)], Fr.prototype, "RuntimeAdapter", void 0), i([A("Overlay"), (0, r.jt)(), s("design:type", Lr)], Fr.prototype, "OverlayAdapter", void 0), i([A("Exparser"), (0, r.jt)(), s("design:type", Dr)], Fr.prototype, "ExparserAdapter", void 0), i([A(), (0, r.jt)(), s("design:type", Object)], Fr.prototype, "fallbackAdapter", void 0), Fr = i([(0, r.b2)(), o(0, (0, r.f3)(h)), s("design:paramtypes", [g])], Fr);
                var jr = !1,
                    Ur = n(3174),
                    Vr = n(8632);
                class Wr {
                    init() {
                        return t = (t, {
                            bindAdapter: e,
                            bindBridge: n,
                            bindVirtualTreeProps: r
                        }) => {
                            n(new Vr.DZ(Ur.Lm.RendererInspectee)), window.__skylineEngine__ ? (r({
                                exparser: () => window.exparser || window.__skylineEngine__.getRuntime().getExparser(),
                                root: () => window.__DOMTree__,
                                customTabbar: () => window.__TAB_BAR__,
                                getSkylineEngine: () => window.__skylineEngine__,
                                getWebviewEngine: () => window.__webviewEngine__
                            }), e(re, "CSS"), e(Pr, "DOM"), e(Br, "Overlay")) : (r({
                                exparser: () => window.exparser,
                                root: () => window.__DOMTree__,
                                customTabbar: () => window.__TAB_BAR__
                            }), e(te, "CSS"), e(Mr, "DOM"), e(kr, "Overlay"))
                        }, e = () => {
                            var t = N.get(d);
                            return Reflect.set(globalThis, "wxInspectee", t), t
                        }, jr || (jr = !0, N.bind(f).toConstantValue(N), N.bind(d).to(Fr).inSingletonScope(), N.bind(c).to(D).whenTargetNamed("default"), C(N, D), t(0, {
                            bindAdapter: M(N, C),
                            getAdapter: M(N, O),
                            bindBridge: M(N, I),
                            bindVirtualTreeProps: M(N, S)
                        })), e();
                        var t, e
                    }
                    waitReady() {
                        var t = null;
                        return new Promise((e => {
                            t = setInterval((() => {
                                window.__DOMTree__ && (window.exparser || window.__skylineEngine__.getRuntime().getExparser()) && (clearInterval(t), e())
                            }), 100)
                        }))
                    }
                }
            },
            684: (t, e, n) => {
                "use strict";
                n.r(e), n.d(e, {
                    Inspector: () => _
                });
                var r = n(6715),
                    i = n.n(r),
                    o = (n(7728), n(3174)),
                    s = n(8632),
                    a = n(1550);

                function u(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                }
                var l, c = () => {};
                class h {
                    constructor(t = {}) {
                        this.resolve = c, this.reject = c, this.promise = new Promise(((e, n) => {
                            this.resolve = e, this.reject = n;
                            var {
                                timeout: r
                            } = t;
                            r && setTimeout((() => n("timeout")), r)
                        }))
                    }
                }
                class d extends Map {
                    get(t) {
                        var e = super.get(t);
                        return e && super.delete(t), e
                    }
                }! function(t) {
                    t[t.Inspector = 0] = "Inspector", t[t.RendererInspectee = 1] = "RendererInspectee", t[t.ServiceInspectee = 2] = "ServiceInspectee", t[t.AllInspectee = 3] = "AllInspectee"
                }(l || (l = {}));
                var p, f = class {
                    constructor(t = l.AllInspectee) {
                        this.callbacks = new Map, this.type = t
                    }
                    get inited() {
                        return this._inited
                    }
                    init() {
                        this.initSubscription(this.handleCDPMessage.bind(this)), this._inited = !0
                    }
                    emit(t) {
                        this.send(t)
                    }
                    reply(t, e) {
                        this.send({
                            id: t,
                            result: e
                        })
                    }
                    on(t, e) {
                        this.callbacks.has(t) || this.callbacks.set(t, []), this.callbacks.get(t).push(e)
                    }
                    off(t, e) {
                        if (this.callbacks.has(t)) {
                            var n = this.callbacks.get(t);
                            n = [...n.filter((t => t !== e))]
                        }
                    }
                    handleCDPMessage(t, e, n) {
                        var r, i, o, s, a;
                        ((s = this.type) === (a = e) || s & a) && ("id" in t ? null === (r = this.callbacks.get("command")) || void 0 === r || r.forEach((e => e(t, n))) : null === (i = this.callbacks.get("event")) || void 0 === i || i.forEach((e => e(t, n))), null === (o = this.callbacks.get("all")) || void 0 === o || o.forEach((e => e(t, n))))
                    }
                };
                f = function(t, e, n, r) {
                    var i, o = arguments.length,
                        s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                    else
                        for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                    return o > 3 && s && Object.defineProperty(e, n, s), s
                }([(0, a.b2)(), function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata("design:paramtypes", e)
                }(0, [Number])], f);
                class g {
                    constructor(t, e, n) {
                        this.cachedObject = {}, this.inspector = e, this.object = t, this.target = n
                    }
                    getProperties(t = {}) {
                        return u(this, void 0, void 0, (function*() {
                            var {
                                objectId: e
                            } = this.object;
                            if (e) {
                                var {
                                    result: n
                                } = yield this.inspector.request({
                                    method: "Runtime.getProperties",
                                    params: Object.assign({
                                        objectId: e
                                    }, t)
                                }, this.target);
                                return n
                            }
                            return []
                        }))
                    }
                }
                var v, m = p = class {
                    constructor(t) {
                        this.requestMap = new d, this.eventHandlersMap = new Map, this._handleEvent = this.handleEvent.bind(this), this._handleCommand = this.handleCommand.bind(this), this.bridge = t, this.init()
                    }
                    init() {
                        console.debug(this.bridge), this.bridge.on("event", this._handleEvent), this.bridge.on("command", this._handleCommand)
                    }
                    destroy() {
                        this.bridge.off("event", this._handleEvent), this.bridge.off("command", this._handleCommand)
                    }
                    enable(t, e = l.AllInspectee) {
                        return this.request({
                            method: `${t}.enable`,
                            params: {}
                        }, e)
                    }
                    request(t, e = l.AllInspectee) {
                        return u(this, void 0, void 0, (function*() {
                            var {
                                id: n
                            } = p.idAssigner, r = new h;
                            return this.requestMap.set(n, r), this.bridge.send(Object.assign({
                                id: n
                            }, t), e), r.promise
                        }))
                    }
                    handleCommand(t) {
                        var {
                            id: e,
                            result: n
                        } = t, r = this.requestMap.get(e);
                        r && (n ? r.resolve(n) : r.reject("protocol error"))
                    }
                    handleEvent(t, e) {
                        var {
                            method: n
                        } = t, r = this.eventHandlersMap.get(n);
                        r && r.forEach((n => n(t, e)))
                    }
                    addListener(t, e, n) {
                        var r;
                        this.eventHandlersMap.has(t) || this.eventHandlersMap.set(t, []);
                        var i = void 0 === n ? e : (t, r) => r === n && e(t, r);
                        null === (r = this.eventHandlersMap.get(t)) || void 0 === r || r.push(i)
                    }
                    removeListener(t, e) {
                        var n = this.eventHandlersMap.get(t);
                        n && this.eventHandlersMap.set(t, e ? n.filter((t => t !== e)) : [])
                    }
                    listenUntil(t, e, n) {
                        var r;
                        this.eventHandlersMap.has(t) || this.eventHandlersMap.set(t, []), null === (r = this.eventHandlersMap.get(t)) || void 0 === r || r.push(((r, i) => {
                            n && i !== n || e(r, i) && this.removeListener(t, e)
                        }))
                    }
                    parseRemoteObject(t, e) {
                        return new g(t, this, e)
                    }
                    logToInspectee(t = l.AllInspectee, ...e) {
                        var n = JSON.stringify(e);
                        this.request({
                            method: "Runtime.evaluate",
                            params: {
                                expression: `(console.log(...${n}))`
                            }
                        }, t)
                    }
                };
                m.idAssigner = new class {
                    constructor(t = 0) {
                        this._id = t
                    }
                    get id() {
                        return this._id++
                    }
                    reset() {
                        this._id = 0
                    }
                }, m = p = function(t, e, n, r) {
                    var i, o = arguments.length,
                        s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                    else
                        for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                    return o > 3 && s && Object.defineProperty(e, n, s), s
                }([(0, a.b2)(), (0, v = (0, a.f3)("Bridge"), function(t, e) {
                    v(t, e, 0)
                }), function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata("design:paramtypes", e)
                }(0, [f])], m);
                var y = "Bridge",
                    b = "Inspector",
                    x = n(3143),
                    w = {
                        Container: Symbol("Container")
                    };
                class _ {
                    constructor({
                        inspectee: t
                    }) {
                        this._ready = !1, this._lastActiveId = null, this._inspectee = t, this._inspector = null
                    }
                    get debuggee() {
                        return {
                            targetId: window.__webviewId__
                        }
                    }
                    init() {
                        var t = this;
                        return i()((function*() {
                            t._inspector = t.initWxInspector(), t.addEventListeners(), t.bindHandlers(), t.initMessager(), t._ready = !0, yield t.enableDomains(), x.makeReady(), console.log("remote-debug inited")
                        }))()
                    }
                    initWxInspector() {
                        var t = new a.W2({
                                skipBaseClassChecks: !0
                            }),
                            e = new s.DZ(o.Lm.Inspector);
                        t.bind(w.Container).toConstantValue(t), t.bind(y).toConstantValue(e), t.bind(b).to(m).inSingletonScope();
                        var n = t.get(b);
                        return Reflect.set(globalThis, "wxInspector", n), n
                    }
                    bindHandlers() {
                        this._customMethodMap = {
                            "DOM.getDocument": "getDocument"
                        }
                    }
                    addEventListeners() {
                        ["DOM.attributeRemoved", "DOM.attributeModified", "DOM.characterDataModified", "DOM.childNodeInserted", "DOM.childNodeRemoved", "DOM.documentUpdated", "DOM.setChildNodes", "Overlay.inspectNodeRequested", "Overlay.nodeHighlightRequested", "WxHost.setWxssFile", "WxComponent.componentDataChanged"].forEach((t => {
                            this._inspector.addListener(t, (({
                                method: e,
                                params: n
                            }) => {
                                this._ready && (t.startsWith("WxHost.") ? this.triggerHostEvent(e, n) : this.triggerDebugeeEvent(e, n))
                            }))
                        }))
                    }
                    initMessager() {
                        x.subscribe("remoteDebugCommand", (t => {
                            this.exec(t)
                        }))
                    }
                    triggerDebugeeEvent(t, e) {
                        x.send({
                            command: "DEBUGGEE_EVENT",
                            data: {
                                debuggee: this.debuggee,
                                method: t,
                                params: e
                            }
                        })
                    }
                    triggerHostEvent(t, e) {
                        x.send({
                            command: "HOST_EVENT",
                            data: {
                                debuggee: this.debuggee,
                                method: t,
                                params: e
                            }
                        })
                    }
                    enableDomains() {
                        var t = this;
                        return i()((function*() {
                            for (var e of ["DOM", "CSS", "Overlay"]) yield t._inspector.enable(e, o.Lm.RendererInspectee)
                        }))()
                    }
                    getDocument(t, e) {
                        var n = this;
                        return i()((function*() {
                            var {
                                root: r
                            } = yield n._inspector.request({
                                method: t,
                                params: e
                            }, o.Lm.RendererInspectee);
                            return {
                                baseURL: "https://servicewechat.com/page-frame.html",
                                inspectee: "exparser",
                                root: r
                            }
                        }))()
                    }
                    commonCDPCall(t, e) {
                        var n = this;
                        return i()((function*() {
                            return yield n._inspector.request({
                                method: t,
                                params: e
                            }, o.Lm.RendererInspectee)
                        }))()
                    }
                    exec(t) {
                        var e = this;
                        return i()((function*() {
                            if (e._ready) {
                                var n, r = e._customMethodMap[t.method];
                                n = "function" == typeof e[r] ? yield e[r](t.method, t.commandParams): yield e.commonCDPCall(t.method, t.commandParams), t.callbackID && n && x.send({
                                    command: "DEBUGGEE_CALLBACK",
                                    callbackID: t.callbackID,
                                    data: n
                                })
                            }
                        }))()
                    }
                }
            },
            3143: t => {
                t.exports = new class {
                    constructor() {
                        this.isReady = !1, this.bridge = window.wx || __global.WeixinJSBridge, this.handles = []
                    }
                    makeReady() {
                        this.isReady = !0, this.handles.forEach((t => t())), this.handles = []
                    }
                    send(t) {
                        this.bridge.invoke("remoteDebugInfo", t, (() => {}))
                    }
                    invoke(t, e, n) {
                        this.bridge.invoke(t, e, n)
                    }
                    subscribe(t, e) {
                        this.bridge.on(t, ((...t) => {
                            this.isReady ? e && e(...t) : this.handles.push((() => {
                                e && e(...t)
                            }))
                        }))
                    }
                }
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {
            exports: {}
        };
        return t[r](o, o.exports, n), o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, (() => {
        var t = n(6715).default,
            {
                Inspector: e
            } = n(684),
            {
                Inspectee: r
            } = n(6762);
        (Reflect.has(globalThis, "__wxConfig") && __wxConfig.onReady ? __wxConfig.onReady : setTimeout)(t((function*() {
            var t = new r,
                n = new e({
                    inspectee: t
                });
            n.initMessager(), yield t.waitReady(), t.init(), n.init()
        })))
    })()
})();
var WARemoteDebugVersion = "2024.1.23 17:16";
(() => {
    var t = {
            715: t => {
                function e(t, e, n, r, i, o, s) {
                    try {
                        var a = t[o](s),
                            u = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(u) : Promise.resolve(u).then(r, i)
                }
                t.exports = function(t) {
                    return function() {
                        var n = this,
                            r = arguments;
                        return new Promise((function(i, o) {
                            var s = t.apply(n, r);

                            function a(t) {
                                e(s, i, o, a, u, "next", t)
                            }

                            function u(t) {
                                e(s, i, o, a, u, "throw", t)
                            }
                            a(void 0)
                        }))
                    }
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            546: (t, e, n) => {
                var r = n(677),
                    i = n(245),
                    o = n(193),
                    s = Object.getOwnPropertyNames,
                    a = Object.getOwnPropertySymbols;
                e = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.prototype,
                        u = void 0 === n || n,
                        l = e.unenumerable,
                        c = void 0 !== l && l,
                        h = e.symbol,
                        d = void 0 !== h && h,
                        p = [];
                    if ((c || d) && s) {
                        var f = r;
                        c && s && (f = s);
                        do {
                            p = p.concat(f(t)), d && a && (p = p.concat(a(t)))
                        } while (u && (t = i(t)) && t !== Object.prototype);
                        p = o(p)
                    } else if (u)
                        for (var g in t) p.push(g);
                    else p = r(t);
                    return p
                }, t.exports = e
            },
            782: (t, e, n) => {
                var r = n(702),
                    i = n(680);
                e = function(t, e) {
                    if (i(t)) return t;
                    if (e && r(e, t)) return [t];
                    var n = [];
                    return t.replace(o, (function(t, e, r, i) {
                        n.push(r ? i.replace(s, "$1") : e || t)
                    })), n
                };
                var o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    s = /\\(\\)?/g;
                t.exports = e
            },
            337: (t, e, n) => {
                var r = n(617),
                    i = n(295);
                e = function(t, e) {
                    return function(n) {
                        return i(arguments, (function(o, s) {
                            if (0 !== s) {
                                var a = t(o);
                                i(a, (function(t) {
                                    e && !r(n[t]) || (n[t] = o[t])
                                }))
                            }
                        })), n
                    }
                }, t.exports = e
            },
            704: (t, e, n) => {
                e = n(337)(n(546), !0), t.exports = e
            },
            295: (t, e, n) => {
                var r = n(157),
                    i = n(677),
                    o = n(116);
                e = function(t, e, n) {
                    var s, a;
                    if (e = o(e, n), r(t))
                        for (s = 0, a = t.length; s < a; s++) e(t[s], s, t);
                    else {
                        var u = i(t);
                        for (s = 0, a = u.length; s < a; s++) e(t[u[s]], u[s], t)
                    }
                    return t
                }, t.exports = e
            },
            277: (t, e, n) => {
                var r = n(677);
                e = n(337)(r), t.exports = e
            },
            43: (t, e, n) => {
                var r = n(540),
                    i = n(295);
                e = function(t, e, n) {
                    var o = [];
                    return e = r(e, n), i(t, (function(t, n, r) {
                        e(t, n, r) && o.push(t)
                    })), o
                }, t.exports = e
            },
            245: (t, e, n) => {
                var r = n(58),
                    i = n(309),
                    o = Object.getPrototypeOf,
                    s = {}.constructor;
                e = function(t) {
                    if (r(t)) {
                        if (o) return o(t);
                        var e = t.__proto__;
                        return e || null === e ? e : i(t.constructor) ? t.constructor.prototype : t instanceof s ? s.prototype : void 0
                    }
                }, t.exports = e
            },
            702: (t, e) => {
                var n = Object.prototype.hasOwnProperty;
                e = function(t, e) {
                    return n.call(t, e)
                }, t.exports = e
            },
            344: (t, e) => {
                e = function(t) {
                    return t
                }, t.exports = e
            },
            66: (t, e, n) => {
                var r = n(207);
                e = function(t) {
                    return "[object Arguments]" === r(t)
                }, t.exports = e
            },
            680: (t, e, n) => {
                var r = n(207);
                e = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === r(t)
                }, t.exports = e
            },
            157: (t, e, n) => {
                var r = n(804),
                    i = n(309),
                    o = Math.pow(2, 53) - 1;
                e = function(t) {
                    if (!t) return !1;
                    var e = t.length;
                    return r(e) && e >= 0 && e <= o && !i(t)
                }, t.exports = e
            },
            424: (t, e) => {
                e = "object" == typeof window && "object" == typeof document && 9 === document.nodeType, t.exports = e
            },
            829: (t, e, n) => {
                var r = n(157),
                    i = n(680),
                    o = n(510),
                    s = n(66),
                    a = n(677);
                e = function(t) {
                    return null == t || (r(t) && (i(t) || o(t) || s(t)) ? 0 === t.length : 0 === a(t).length)
                }, t.exports = e
            },
            309: (t, e, n) => {
                var r = n(207);
                e = function(t) {
                    var e = r(t);
                    return "[object Function]" === e || "[object GeneratorFunction]" === e || "[object AsyncFunction]" === e
                }, t.exports = e
            },
            750: (t, e, n) => {
                var r = n(677);
                e = function(t, e) {
                    var n = r(e),
                        i = n.length;
                    if (null == t) return !i;
                    t = Object(t);
                    for (var o = 0; o < i; o++) {
                        var s = n[o];
                        if (e[s] !== t[s] || !(s in t)) return !1
                    }
                    return !0
                }, t.exports = e
            },
            163: (t, e, n) => {
                var r = n(207);
                e = "undefined" != typeof process && "[object process]" === r(process), t.exports = e
            },
            804: (t, e, n) => {
                var r = n(207);
                e = function(t) {
                    return "[object Number]" === r(t)
                }, t.exports = e
            },
            58: (t, e) => {
                e = function(t) {
                    var e = typeof t;
                    return !!t && ("function" === e || "object" === e)
                }, t.exports = e
            },
            510: (t, e, n) => {
                var r = n(207);
                e = function(t) {
                    return "[object String]" === r(t)
                }, t.exports = e
            },
            617: (t, e) => {
                e = function(t) {
                    return void 0 === t
                }, t.exports = e
            },
            677: (t, e, n) => {
                var r = n(702);
                e = Object.keys ? Object.keys : function(t) {
                    var e = [];
                    for (var n in t) r(t, n) && e.push(n);
                    return e
                }, t.exports = e
            },
            640: (t, e) => {
                var n = /^\s+/;
                e = function(t, e) {
                    if (null == e) return t.replace(n, "");
                    for (var r, i, o = 0, s = t.length, a = e.length, u = !0; u && o < s;)
                        for (u = !1, r = -1, i = t.charAt(o); ++r < a;)
                            if (i === e[r]) {
                                u = !0, o++;
                                break
                            } return o >= s ? "" : t.substr(o, s)
                }, t.exports = e
            },
            78: (t, e, n) => {
                var r = n(540),
                    i = n(677),
                    o = n(157);
                e = function(t, e, n) {
                    e = r(e, n);
                    for (var s = !o(t) && i(t), a = (s || t).length, u = Array(a), l = 0; l < a; l++) {
                        var c = s ? s[l] : l;
                        u[l] = e(t[c], c, t)
                    }
                    return u
                }, t.exports = e
            },
            474: (t, e, n) => {
                var r = n(277),
                    i = n(750);
                e = function(t) {
                    return t = r({}, t),
                        function(e) {
                            return i(e, t)
                        }
                }, t.exports = e
            },
            359: (t, e) => {
                e = Date.now ? Date.now : function() {
                    return (new Date).getTime()
                }, t.exports = e
            },
            207: (t, e) => {
                var n = Object.prototype.toString;
                e = function(t) {
                    return n.call(t)
                }, t.exports = e
            },
            116: (t, e, n) => {
                var r = n(617);
                e = function(t, e, n) {
                    if (r(e)) return t;
                    switch (null == n ? 3 : n) {
                        case 1:
                            return function(n) {
                                return t.call(e, n)
                            };
                        case 3:
                            return function(n, r, i) {
                                return t.call(e, n, r, i)
                            };
                        case 4:
                            return function(n, r, i, o) {
                                return t.call(e, n, r, i, o)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }, t.exports = e
            },
            4: (t, e, n) => {
                var r = n(680),
                    i = n(185);
                e = function(t) {
                    return r(t) ? function(e) {
                        return i(e, t)
                    } : (e = t, function(t) {
                        return null == t ? void 0 : t[e]
                    });
                    var e
                }, t.exports = e
            },
            392: (t, e) => {
                e = function(t, e, n) {
                    null == e && (e = t, t = 0);
                    var r = Math.random();
                    return n || t % 1 || e % 1 ? Math.min(t + r * (e - t + parseFloat("1e-" + ((r + "").length - 1))), e) : t + Math.floor(r * (e - t + 1))
                }, t.exports = e
            },
            366: (t, e, n) => {
                var r = n(392),
                    i = n(424),
                    o = n(163),
                    s;
                e = function(t) {
                    for (var e = new Uint8Array(t), n = 0; n < t; n++) e[n] = r(0, 255);
                    return e
                }, i ? (s = window.crypto || window.msCrypto, s && (e = function(t) {
                    var e = new Uint8Array(t);
                    return s.getRandomValues(e), e
                })) : o && (s = eval("require")("crypto"), e = function(t) {
                    return s.randomBytes(t)
                }), t.exports = e
            },
            69: (t, e) => {
                var n = /\s+$/;
                e = function(t, e) {
                    if (null == e) return t.replace(n, "");
                    for (var r, i, o = t.length - 1, s = e.length, a = !0; a && o >= 0;)
                        for (a = !1, r = -1, i = t.charAt(o); ++r < s;)
                            if (i === e[r]) {
                                a = !0, o--;
                                break
                            } return o >= 0 ? t.substring(0, o + 1) : ""
                }, t.exports = e
            },
            540: (t, e, n) => {
                var r = n(309),
                    i = n(58),
                    o = n(680),
                    s = n(116),
                    a = n(474),
                    u = n(344),
                    l = n(4);
                e = function(t, e, n) {
                    return null == t ? u : r(t) ? s(t, e, n) : i(t) && !o(t) ? a(t) : l(t)
                }, t.exports = e
            },
            185: (t, e, n) => {
                var r = n(617),
                    i = n(782);
                e = function(t, e) {
                    var n;
                    for (n = (e = i(e, t)).shift(); !r(n);) {
                        if (null == (t = t[n])) return;
                        n = e.shift()
                    }
                    return t
                }, t.exports = e
            },
            11: (t, e, n) => {
                var r = n(647),
                    i = n(295),
                    o = n(344),
                    s = n(78),
                    a = "[\\x20\\t\\r\\n\\f]",
                    u = "(?:\\\\[\\da-fA-F]{1,6}".concat(a, "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+"),
                    l = "\\[".concat(a, "*(").concat(u, ")(?:").concat(a, "*([*^$|!~]?=)").concat(a, "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(").concat(u, "))|)").concat(a, "*\\]"),
                    c = "::?(".concat(u, ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|").concat(l, ")*)|.*)\\)|)"),
                    h = new RegExp("^".concat(a, "*,").concat(a, "*")),
                    d = new RegExp("^".concat(a, "*([>+~]|").concat(a, ")").concat(a, "*")),
                    p = {
                        id: {
                            reg: new RegExp("^#(".concat(u, ")")),
                            value: function(t) {
                                return t.slice(1)
                            },
                            toStr: function(t) {
                                return "#".concat(t)
                            }
                        },
                        class: {
                            reg: new RegExp("^\\.(".concat(u, ")")),
                            value: function(t) {
                                return t.slice(1)
                            },
                            toStr: function(t) {
                                return ".".concat(t)
                            }
                        },
                        tag: {
                            reg: new RegExp("^(".concat(u, "|[*])")),
                            value: o
                        },
                        attribute: {
                            reg: new RegExp("^".concat(l)),
                            value: function(t) {
                                return t.slice(1, t.length - 1)
                            },
                            toStr: function(t) {
                                return "[".concat(t, "]")
                            }
                        },
                        pseudo: {
                            reg: new RegExp("^".concat(c)),
                            value: o
                        }
                    };
                i(p, (function(t) {
                    t.value || (t.value = o), t.toStr || (t.toStr = o)
                })), e = {
                    parse: function(t) {
                        t = r(t);
                        for (var e, n, o, s = []; t && (o && !(n = h.exec(t)) || (n && (t = t.slice(n[0].length)), e = [], s.push(e)), o = !1, (n = d.exec(t)) && (o = n.shift(), t = t.slice(o.length), (o = r(o)) || (o = " "), e.push({
                                value: o,
                                type: "combinator"
                            })), i(p, (function(i, s) {
                                var a = i.reg,
                                    u = i.value;
                                (n = a.exec(t)) && (o = n.shift(), t = t.slice(o.length), o = r(o), e.push({
                                    value: u(o),
                                    type: s
                                }))
                            })), o););
                        return s
                    },
                    stringify: function(t) {
                        return s(t, (function(t) {
                            return (t = s(t, (function(t) {
                                var e = t.type,
                                    n = t.value;
                                return "combinator" === e ? " " === n ? n : " ".concat(n, " ") : p[e].toStr(n)
                            }))).join("")
                        })).join(", ")
                    }
                }, t.exports = e
            },
            626: (t, e) => {
                e = function(t) {
                    return new Promise((function(e) {
                        return setTimeout(e, t)
                    }))
                }, t.exports = e
            },
            68: (t, e) => {
                e = function(t, e) {
                    return 0 === t.indexOf(e)
                }, t.exports = e
            },
            690: (t, e, n) => {
                var r = n(157),
                    i = n(78),
                    o = n(680),
                    s = n(510);
                e = function(t) {
                    return t ? o(t) ? t : r(t) && !s(t) ? i(t) : [t] : []
                }, t.exports = e
            },
            647: (t, e, n) => {
                var r = n(640),
                    i = n(69),
                    o = /^\s+|\s+$/g;
                e = function(t, e) {
                    return null == e ? t.replace(o, "") : r(i(t, e), e)
                }, t.exports = e
            },
            193: (t, e, n) => {
                var r = n(43);

                function i(t, e) {
                    return t === e
                }
                e = function(t, e) {
                    return e = e || i, r(t, (function(t, n, r) {
                        for (var i = r.length; ++n < i;)
                            if (e(t, r[n])) return !1;
                        return !0
                    }))
                }, t.exports = e
            },
            737: (t, e, n) => {
                var r = n(366);
                e = function() {
                    var t = r(16);
                    return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, i[t[0]] + i[t[1]] + i[t[2]] + i[t[3]] + "-" + i[t[4]] + i[t[5]] + "-" + i[t[6]] + i[t[7]] + "-" + i[t[8]] + i[t[9]] + "-" + i[t[10]] + i[t[11]] + i[t[12]] + i[t[13]] + i[t[14]] + i[t[15]]
                };
                for (var i = [], o = 0; o < 256; o++) i[o] = (o + 256).toString(16).substr(1);
                t.exports = e
            },
            697: (t, e, n) => {
                var r = n(359);
                e = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
                    return new Promise((function(i, o) {
                        var s = r(),
                            a = function() {
                                new Promise((function(e, n) {
                                    try {
                                        e(t())
                                    } catch (t) {
                                        n(t)
                                    }
                                })).then((function(t) {
                                    var u = r() - s;
                                    t ? i(t) : e && u >= e ? o(Error("Wait timed out after ".concat(e, " ms"))) : setTimeout(a, n)
                                }), o)
                            };
                        a()
                    }))
                }, t.exports = e
            },
            298: (t, e) => {
                ! function(t) {
                    "use strict";
                    var e = function(t, e) {
                            for (var n = 0; n < e.length; n += 1) t(e[n], n, e)
                        },
                        n = function(t, n, r) {
                            var i = n;
                            return e((function(e, n) {
                                i = t(i, e, n)
                            }), r), i
                        },
                        r = function(t, n) {
                            var r = new Array(n.length);
                            return e((function(e, n) {
                                r[n] = t(e)
                            }), n), r
                        };

                    function i(t) {
                        return t.toString()
                    }
                    var o = function(t, e) {
                            return e.join(t)
                        },
                        s = function(t, e, n) {
                            return t + n + e
                        },
                        a = Array.prototype.concat,
                        u = 32767;

                    function l(t, e) {
                        for (var n = Object(t), r = 1; r < arguments.length; r++) {
                            var i = arguments[r];
                            if (null != i)
                                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
                        }
                        return n
                    }

                    function c() {
                        this.init()
                    }

                    function h(t) {
                        this.expression = t
                    }

                    function d(t, e, n) {
                        e in t || (t[e] = n)
                    }

                    function p() {}

                    function f(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function g(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function v(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function m(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function y(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function b(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function x(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function w(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function _(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function E(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function T(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function N(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function A(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function S(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function I(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function C(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function O(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function M(t, e, n) {
                        arguments.length > 0 && this.init(t, e, n)
                    }

                    function R(t) {
                        for (; t && t.parentNode;) t = t.parentNode;
                        return t
                    }

                    function P(t, e, n) {
                        return M.applyPredicates(t.predicates, e, M.applyStep(t, e, n))
                    }

                    function D(t, e, n) {
                        return function(t) {
                            for (var e = [], n = 0; n < t.length; n += u) {
                                var r = t.slice(n, n + u);
                                e = a.apply(e, r)
                            }
                            return e
                        }(r(P.bind(null, n, t), e))
                    }

                    function L(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function k(t, e, n) {
                        arguments.length > 0 && this.init(t, e, n)
                    }

                    function B(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }

                    function F(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function j(t, e) {
                        arguments.length > 0 && this.init(t, e)
                    }
                    c.prototype = new Object, c.prototype.constructor = c, c.superclass = Object.prototype, c.prototype.init = function() {
                        this.reduceActions = [], this.reduceActions[3] = function(t) {
                            return new m(t[0], t[2])
                        }, this.reduceActions[5] = function(t) {
                            return new y(t[0], t[2])
                        }, this.reduceActions[7] = function(t) {
                            return new b(t[0], t[2])
                        }, this.reduceActions[8] = function(t) {
                            return new x(t[0], t[2])
                        }, this.reduceActions[10] = function(t) {
                            return new w(t[0], t[2])
                        }, this.reduceActions[11] = function(t) {
                            return new _(t[0], t[2])
                        }, this.reduceActions[12] = function(t) {
                            return new E(t[0], t[2])
                        }, this.reduceActions[13] = function(t) {
                            return new T(t[0], t[2])
                        }, this.reduceActions[15] = function(t) {
                            return new N(t[0], t[2])
                        }, this.reduceActions[16] = function(t) {
                            return new A(t[0], t[2])
                        }, this.reduceActions[18] = function(t) {
                            return new S(t[0], t[2])
                        }, this.reduceActions[19] = function(t) {
                            return new I(t[0], t[2])
                        }, this.reduceActions[20] = function(t) {
                            return new C(t[0], t[2])
                        }, this.reduceActions[22] = function(t) {
                            return new g(t[1])
                        }, this.reduceActions[24] = function(t) {
                            return new O(t[0], t[2])
                        }, this.reduceActions[25] = function(t) {
                            return new M(void 0, void 0, t[0])
                        }, this.reduceActions[27] = function(t) {
                            return t[0].locationPath = t[2], t[0]
                        }, this.reduceActions[28] = function(t) {
                            return t[0].locationPath = t[2], t[0].locationPath.steps.unshift(new k(k.DESCENDANTORSELF, B.nodeTest, [])), t[0]
                        }, this.reduceActions[29] = function(t) {
                            return new M(t[0], [], void 0)
                        }, this.reduceActions[30] = function(t) {
                            return Q.instance_of(t[0], M) ? (null == t[0].filterPredicates && (t[0].filterPredicates = []), t[0].filterPredicates.push(t[1]), t[0]) : new M(t[0], [t[1]], void 0)
                        }, this.reduceActions[32] = function(t) {
                            return t[1]
                        }, this.reduceActions[33] = function(t) {
                            return new V(t[0])
                        }, this.reduceActions[34] = function(t) {
                            return new W(t[0])
                        }, this.reduceActions[36] = function(t) {
                            return new j(t[0], [])
                        }, this.reduceActions[37] = function(t) {
                            return new j(t[0], t[2])
                        }, this.reduceActions[38] = function(t) {
                            return [t[0]]
                        }, this.reduceActions[39] = function(t) {
                            return t[2].unshift(t[0]), t[2]
                        }, this.reduceActions[43] = function(t) {
                            return new L(!0, [])
                        }, this.reduceActions[44] = function(t) {
                            return t[1].absolute = !0, t[1]
                        }, this.reduceActions[46] = function(t) {
                            return new L(!1, [t[0]])
                        }, this.reduceActions[47] = function(t) {
                            return t[0].steps.push(t[2]), t[0]
                        }, this.reduceActions[49] = function(t) {
                            return new k(t[0], t[1], [])
                        }, this.reduceActions[50] = function(t) {
                            return new k(k.CHILD, t[0], [])
                        }, this.reduceActions[51] = function(t) {
                            return new k(t[0], t[1], t[2])
                        }, this.reduceActions[52] = function(t) {
                            return new k(k.CHILD, t[0], t[1])
                        }, this.reduceActions[54] = function(t) {
                            return [t[0]]
                        }, this.reduceActions[55] = function(t) {
                            return t[1].unshift(t[0]), t[1]
                        }, this.reduceActions[56] = function(t) {
                            return "ancestor" == t[0] ? k.ANCESTOR : "ancestor-or-self" == t[0] ? k.ANCESTORORSELF : "attribute" == t[0] ? k.ATTRIBUTE : "child" == t[0] ? k.CHILD : "descendant" == t[0] ? k.DESCENDANT : "descendant-or-self" == t[0] ? k.DESCENDANTORSELF : "following" == t[0] ? k.FOLLOWING : "following-sibling" == t[0] ? k.FOLLOWINGSIBLING : "namespace" == t[0] ? k.NAMESPACE : "parent" == t[0] ? k.PARENT : "preceding" == t[0] ? k.PRECEDING : "preceding-sibling" == t[0] ? k.PRECEDINGSIBLING : "self" == t[0] ? k.SELF : -1
                        }, this.reduceActions[57] = function(t) {
                            return k.ATTRIBUTE
                        }, this.reduceActions[59] = function(t) {
                            return "comment" == t[0] ? B.commentTest : "text" == t[0] ? B.textTest : "processing-instruction" == t[0] ? B.anyPiTest : "node" == t[0] ? B.nodeTest : new B(-1, void 0)
                        }, this.reduceActions[60] = function(t) {
                            return new B.PITest(t[2])
                        }, this.reduceActions[61] = function(t) {
                            return t[1]
                        }, this.reduceActions[63] = function(t) {
                            return t[1].absolute = !0, t[1].steps.unshift(new k(k.DESCENDANTORSELF, B.nodeTest, [])), t[1]
                        }, this.reduceActions[64] = function(t) {
                            return t[0].steps.push(new k(k.DESCENDANTORSELF, B.nodeTest, [])), t[0].steps.push(t[2]), t[0]
                        }, this.reduceActions[65] = function(t) {
                            return new k(k.SELF, B.nodeTest, [])
                        }, this.reduceActions[66] = function(t) {
                            return new k(k.PARENT, B.nodeTest, [])
                        }, this.reduceActions[67] = function(t) {
                            return new F(t[1])
                        }, this.reduceActions[68] = function(t) {
                            return B.nameTestAny
                        }, this.reduceActions[69] = function(t) {
                            return new B.NameTestPrefixAny(t[0].split(":")[0])
                        }, this.reduceActions[70] = function(t) {
                            return new B.NameTestQName(t[0])
                        }
                    }, c.actionTable = [" s s        sssssssss    s ss  s  ss", "                 s                  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                rrrrr               ", " s s        sssssssss    s ss  s  ss", "rs  rrrrrrrr s  sssssrrrrrr  rrs rs ", " s s        sssssssss    s ss  s  ss", "                            s       ", "                            s       ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "  s                                 ", "                            s       ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "a                                   ", "r       s                    rr  r  ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrs  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  srrrrrrrr         rrrrrrs rr sr  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                sssss               ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "              s                     ", "                             s      ", "                rrrrr               ", " s s        sssssssss    s sss s  ss", "r  srrrrrrrr         rrrrrrs rr  r  ", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss      ss  s  ss", " s s        sssssssss    s ss  s  ss", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             rr     ", "                             s      ", "                             rs     ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "                                 r  ", "                                 s  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s s        sssssssss    s ss  s  ss", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             r      "], c.actionTableNumber = [" 1 0        /.-,+*)('    & %$  #  \"!", "                 J                  ", "a  aaaaaaaaa         aaaaaaa aa  a  ", "                YYYYY               ", " 1 0        /.-,+*)('    & %$  #  \"!", "K1  KKKKKKKK .  +*)('KKKKKK  KK# K\" ", " 1 0        /.-,+*)('    & %$  #  \"!", "                            N       ", "                            O       ", "e  eeeeeeeee         eeeeeee ee ee  ", "f  fffffffff         fffffff ff ff  ", "d  ddddddddd         ddddddd dd dd  ", "B  BBBBBBBBB         BBBBBBB BB BB  ", "A  AAAAAAAAA         AAAAAAA AA AA  ", "  P                                 ", "                            Q       ", " 1           .  +*)('          #  \" ", "b  bbbbbbbbb         bbbbbbb bb  b  ", "                                    ", "!       S                    !!  !  ", '"      T"                    ""  "  ', "$   V  $$            U       $$  $  ", "&   &ZY&&            &XW     &&  &  ", ")   )))))            )))\\[   ))  )  ", ".   ....._^]         .....   ..  .  ", "1   11111111         11111   11  1  ", "5   55555555         55555`  55  5  ", "7   77777777         777777  77  7  ", "9   99999999         999999  99  9  ", ":  c::::::::         ::::::b :: a:  ", "I  fIIIIIIII         IIIIIIe II  I  ", "=  =========         ======= == ==  ", "?  ?????????         ??????? ?? ??  ", "C  CCCCCCCCC         CCCCCCC CC CC  ", "J   JJJJJJJJ         JJJJJJ  JJ  J  ", "M   MMMMMMMM         MMMMMM  MM  M  ", "N  NNNNNNNNN         NNNNNNN NN  N  ", "P  PPPPPPPPP         PPPPPPP PP  P  ", "                +*)('               ", "R  RRRRRRRRR         RRRRRRR RR aR  ", "U  UUUUUUUUU         UUUUUUU UU  U  ", "Z  ZZZZZZZZZ         ZZZZZZZ ZZ ZZ  ", "c  ccccccccc         ccccccc cc cc  ", "                             j      ", "L  fLLLLLLLL         LLLLLLe LL  L  ", "6   66666666         66666   66  6  ", "              k                     ", "                             l      ", "                XXXXX               ", " 1 0        /.-,+*)('    & %$m #  \"!", "_  f________         ______e __  _  ", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1 0        /.-,+*)('      %$  #  \"!", " 1 0        /.-,+*)('    & %$  #  \"!", " 1           .  +*)('          #  \" ", " 1           .  +*)('          #  \" ", ">  >>>>>>>>>         >>>>>>> >> >>  ", " 1           .  +*)('          #  \" ", " 1           .  +*)('          #  \" ", "Q  QQQQQQQQQ         QQQQQQQ QQ aQ  ", "V  VVVVVVVVV         VVVVVVV VV aV  ", "T  TTTTTTTTT         TTTTTTT TT  T  ", "@  @@@@@@@@@         @@@@@@@ @@ @@  ", "                                   ", "[  [[[[[[[[[         [[[[[[[ [[ [[  ", "D  DDDDDDDDD         DDDDDDD DD DD  ", "                             HH     ", "                                   ", "                             F     ", "#      T#                    ##  #  ", "%   V  %%            U       %%  %  ", "'   'ZY''            'XW     ''  '  ", "(   (ZY((            (XW     ((  (  ", "+   +++++            +++\\[   ++  +  ", "*   *****            ***\\[   **  *  ", "-   -----            ---\\[   --  -  ", ",   ,,,,,            ,,,\\[   ,,  ,  ", "0   00000_^]         00000   00  0  ", "/   /////_^]         /////   //  /  ", "2   22222222         22222   22  2  ", "3   33333333         33333   33  3  ", "4   44444444         44444   44  4  ", "8   88888888         888888  88  8  ", "                                 ^  ", "                                   ", ";  f;;;;;;;;         ;;;;;;e ;;  ;  ", "<  f<<<<<<<<         <<<<<<e <<  <  ", "O  OOOOOOOOO         OOOOOOO OO  O  ", "`  `````````         ``````` ``  `  ", "S  SSSSSSSSS         SSSSSSS SS  S  ", "W  WWWWWWWWW         WWWWWWW WW  W  ", "\\  \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\ \\\\ \\\\  ", "E  EEEEEEEEE         EEEEEEE EE EE  ", " 1 0        /.-,+*)('    & %$  #  \"!", "]  ]]]]]]]]]         ]]]]]]] ]] ]]  ", "                             G      "], c.gotoTable = ["3456789:;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "L456789:;<=>?@ AB  CDEFGH IJ ", "            M        EFGH IJ ", "       N;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "            S        EFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "              e              ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                        h  J ", "              i          j   ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABpqCDEFGH IJ ", "                             ", "  r6789:;<=>?@ AB  CDEFGH IJ ", "   s789:;<=>?@ AB  CDEFGH IJ ", "    t89:;<=>?@ AB  CDEFGH IJ ", "    u89:;<=>?@ AB  CDEFGH IJ ", "     v9:;<=>?@ AB  CDEFGH IJ ", "     w9:;<=>?@ AB  CDEFGH IJ ", "     x9:;<=>?@ AB  CDEFGH IJ ", "     y9:;<=>?@ AB  CDEFGH IJ ", "      z:;<=>?@ AB  CDEFGH IJ ", "      {:;<=>?@ AB  CDEFGH IJ ", "       |;<=>?@ AB  CDEFGH IJ ", "       };<=>?@ AB  CDEFGH IJ ", "       ~;<=>?@ AB  CDEFGH IJ ", "         =>?@ AB  CDEFGH IJ ", "456789:;<=>?@ AB  CDEFGH IJ", "                    EFGH IJ ", "                    EFGH IJ ", "                             ", "                      GH IJ ", "                      GH IJ ", "              i             ", "              i             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABqCDEFGH IJ ", "                             ", "                             "], c.productions = [
                        [1, 1, 2],
                        [2, 1, 3],
                        [3, 1, 4],
                        [3, 3, 3, -9, 4],
                        [4, 1, 5],
                        [4, 3, 4, -8, 5],
                        [5, 1, 6],
                        [5, 3, 5, -22, 6],
                        [5, 3, 5, -5, 6],
                        [6, 1, 7],
                        [6, 3, 6, -23, 7],
                        [6, 3, 6, -24, 7],
                        [6, 3, 6, -6, 7],
                        [6, 3, 6, -7, 7],
                        [7, 1, 8],
                        [7, 3, 7, -25, 8],
                        [7, 3, 7, -26, 8],
                        [8, 1, 9],
                        [8, 3, 8, -12, 9],
                        [8, 3, 8, -11, 9],
                        [8, 3, 8, -10, 9],
                        [9, 1, 10],
                        [9, 2, -26, 9],
                        [10, 1, 11],
                        [10, 3, 10, -27, 11],
                        [11, 1, 12],
                        [11, 1, 13],
                        [11, 3, 13, -28, 14],
                        [11, 3, 13, -4, 14],
                        [13, 1, 15],
                        [13, 2, 13, 16],
                        [15, 1, 17],
                        [15, 3, -29, 2, -30],
                        [15, 1, -15],
                        [15, 1, -16],
                        [15, 1, 18],
                        [18, 3, -13, -29, -30],
                        [18, 4, -13, -29, 19, -30],
                        [19, 1, 20],
                        [19, 3, 20, -31, 19],
                        [20, 1, 2],
                        [12, 1, 14],
                        [12, 1, 21],
                        [21, 1, -28],
                        [21, 2, -28, 14],
                        [21, 1, 22],
                        [14, 1, 23],
                        [14, 3, 14, -28, 23],
                        [14, 1, 24],
                        [23, 2, 25, 26],
                        [23, 1, 26],
                        [23, 3, 25, 26, 27],
                        [23, 2, 26, 27],
                        [23, 1, 28],
                        [27, 1, 16],
                        [27, 2, 16, 27],
                        [25, 2, -14, -3],
                        [25, 1, -32],
                        [26, 1, 29],
                        [26, 3, -20, -29, -30],
                        [26, 4, -21, -29, -15, -30],
                        [16, 3, -33, 30, -34],
                        [30, 1, 2],
                        [22, 2, -4, 14],
                        [24, 3, 14, -4, 23],
                        [28, 1, -35],
                        [28, 1, -2],
                        [17, 2, -36, -18],
                        [29, 1, -17],
                        [29, 1, -19],
                        [29, 1, -18]
                    ], c.DOUBLEDOT = 2, c.DOUBLECOLON = 3, c.DOUBLESLASH = 4, c.NOTEQUAL = 5, c.LESSTHANOREQUAL = 6, c.GREATERTHANOREQUAL = 7, c.AND = 8, c.OR = 9, c.MOD = 10, c.DIV = 11, c.MULTIPLYOPERATOR = 12, c.FUNCTIONNAME = 13, c.AXISNAME = 14, c.LITERAL = 15, c.NUMBER = 16, c.ASTERISKNAMETEST = 17, c.QNAME = 18, c.NCNAMECOLONASTERISK = 19, c.NODETYPE = 20, c.PROCESSINGINSTRUCTIONWITHLITERAL = 21, c.EQUALS = 22, c.LESSTHAN = 23, c.GREATERTHAN = 24, c.PLUS = 25, c.MINUS = 26, c.BAR = 27, c.SLASH = 28, c.LEFTPARENTHESIS = 29, c.RIGHTPARENTHESIS = 30, c.COMMA = 31, c.AT = 32, c.LEFTBRACKET = 33, c.RIGHTBRACKET = 34, c.DOT = 35, c.DOLLAR = 36, c.prototype.tokenize = function(t) {
                        for (var e = [], n = [], r = t + "\0", i = 0, o = r.charAt(i++);;) {
                            for (;
                                " " == o || "\t" == o || "\r" == o || "\n" == o;) o = r.charAt(i++);
                            if ("\0" == o || i >= r.length) break;
                            if ("(" != o)
                                if (")" != o)
                                    if ("[" != o)
                                        if ("]" != o)
                                            if ("@" != o)
                                                if ("," != o)
                                                    if ("|" != o)
                                                        if ("+" != o)
                                                            if ("-" != o)
                                                                if ("=" != o)
                                                                    if ("$" != o)
                                                                        if ("." != o)
                                                                            if ("'" != o && '"' != o)
                                                                                if (o >= "0" && o <= "9") {
                                                                                    h = o;
                                                                                    for (o = r.charAt(i++); o >= "0" && o <= "9";) h += o, o = r.charAt(i++);
                                                                                    if ("." == o && r.charAt(i) >= "0" && r.charAt(i) <= "9")
                                                                                        for (h += o, h += r.charAt(i++), o = r.charAt(i++); o >= "0" && o <= "9";) h += o, o = r.charAt(i++);
                                                                                    e.push(c.NUMBER), n.push(h)
                                                                                } else if ("*" != o)
                                if (":" != o || ":" != r.charAt(i))
                                    if ("/" != o)
                                        if ("!" != o || "=" != r.charAt(i))
                                            if ("<" != o)
                                                if (">" != o) {
                                                    if ("_" != o && !Q.isLetter(o.charCodeAt(0))) throw new Error("Unexpected character " + o);
                                                    var s = o;
                                                    for (o = r.charAt(i++); Q.isNCNameChar(o.charCodeAt(0));) s += o, o = r.charAt(i++);
                                                    if (e.length > 0 && (a = e[e.length - 1]) != c.AT && a != c.DOUBLECOLON && a != c.LEFTPARENTHESIS && a != c.LEFTBRACKET && a != c.AND && a != c.OR && a != c.MOD && a != c.DIV && a != c.MULTIPLYOPERATOR && a != c.SLASH && a != c.DOUBLESLASH && a != c.BAR && a != c.PLUS && a != c.MINUS && a != c.EQUALS && a != c.NOTEQUAL && a != c.LESSTHAN && a != c.LESSTHANOREQUAL && a != c.GREATERTHAN && a != c.GREATERTHANOREQUAL) {
                                                        if ("and" == s) {
                                                            e.push(c.AND), n.push(s);
                                                            continue
                                                        }
                                                        if ("or" == s) {
                                                            e.push(c.OR), n.push(s);
                                                            continue
                                                        }
                                                        if ("mod" == s) {
                                                            e.push(c.MOD), n.push(s);
                                                            continue
                                                        }
                                                        if ("div" == s) {
                                                            e.push(c.DIV), n.push(s);
                                                            continue
                                                        }
                                                    }
                                                    if (":" == o) {
                                                        if ("*" == r.charAt(i)) {
                                                            e.push(c.NCNAMECOLONASTERISK), n.push(s + ":*"), i++, o = r.charAt(i++);
                                                            continue
                                                        }
                                                        if ("_" == r.charAt(i) || Q.isLetter(r.charCodeAt(i))) {
                                                            for (s += ":", o = r.charAt(i++); Q.isNCNameChar(o.charCodeAt(0));) s += o, o = r.charAt(i++);
                                                            if ("(" == o) {
                                                                e.push(c.FUNCTIONNAME), n.push(s);
                                                                continue
                                                            }
                                                            e.push(c.QNAME), n.push(s);
                                                            continue
                                                        }
                                                        if (":" == r.charAt(i)) {
                                                            e.push(c.AXISNAME), n.push(s);
                                                            continue
                                                        }
                                                    }
                                                    if ("(" == o) {
                                                        if ("comment" == s || "text" == s || "node" == s) {
                                                            e.push(c.NODETYPE), n.push(s);
                                                            continue
                                                        }
                                                        if ("processing-instruction" == s) {
                                                            ")" == r.charAt(i) ? e.push(c.NODETYPE) : e.push(c.PROCESSINGINSTRUCTIONWITHLITERAL), n.push(s);
                                                            continue
                                                        }
                                                        e.push(c.FUNCTIONNAME), n.push(s);
                                                        continue
                                                    }
                                                    e.push(c.QNAME), n.push(s)
                                                } else {
                                                    if ("=" == r.charAt(i)) {
                                                        e.push(c.GREATERTHANOREQUAL), n.push(">="), i++, o = r.charAt(i++);
                                                        continue
                                                    }
                                                    e.push(c.GREATERTHAN), n.push(">"), o = r.charAt(i++)
                                                }
                            else {
                                if ("=" == r.charAt(i)) {
                                    e.push(c.LESSTHANOREQUAL), n.push("<="), i++, o = r.charAt(i++);
                                    continue
                                }
                                e.push(c.LESSTHAN), n.push("<"), o = r.charAt(i++)
                            } else e.push(c.NOTEQUAL), n.push("!="), i++, o = r.charAt(i++);
                            else {
                                if ("/" == (o = r.charAt(i++))) {
                                    e.push(c.DOUBLESLASH), n.push("//"), o = r.charAt(i++);
                                    continue
                                }
                                e.push(c.SLASH), n.push("/")
                            } else e.push(c.DOUBLECOLON), n.push("::"), i++, o = r.charAt(i++);
                            else {
                                var a;
                                if (e.length > 0 && (a = e[e.length - 1]) != c.AT && a != c.DOUBLECOLON && a != c.LEFTPARENTHESIS && a != c.LEFTBRACKET && a != c.AND && a != c.OR && a != c.MOD && a != c.DIV && a != c.MULTIPLYOPERATOR && a != c.SLASH && a != c.DOUBLESLASH && a != c.BAR && a != c.PLUS && a != c.MINUS && a != c.EQUALS && a != c.NOTEQUAL && a != c.LESSTHAN && a != c.LESSTHANOREQUAL && a != c.GREATERTHAN && a != c.GREATERTHANOREQUAL) {
                                    e.push(c.MULTIPLYOPERATOR), n.push(o), o = r.charAt(i++);
                                    continue
                                }
                                e.push(c.ASTERISKNAMETEST), n.push(o), o = r.charAt(i++)
                            } else {
                                for (var u = o, l = ""; i < r.length && (o = r.charAt(i)) !== u;) l += o, i += 1;
                                if (o !== u) throw Z.fromMessage("Unterminated string literal: " + u + l);
                                i += 1, e.push(c.LITERAL), n.push(l), o = r.charAt(i++)
                            } else {
                                if ("." == (o = r.charAt(i++))) {
                                    e.push(c.DOUBLEDOT), n.push(".."), o = r.charAt(i++);
                                    continue
                                }
                                if (o >= "0" && o <= "9") {
                                    var h = "." + o;
                                    for (o = r.charAt(i++); o >= "0" && o <= "9";) h += o, o = r.charAt(i++);
                                    e.push(c.NUMBER), n.push(h);
                                    continue
                                }
                                e.push(c.DOT), n.push(".")
                            } else e.push(c.DOLLAR), n.push(o), o = r.charAt(i++);
                            else e.push(c.EQUALS), n.push(o), o = r.charAt(i++);
                            else e.push(c.MINUS), n.push(o), o = r.charAt(i++);
                            else e.push(c.PLUS), n.push(o), o = r.charAt(i++);
                            else e.push(c.BAR), n.push(o), o = r.charAt(i++);
                            else e.push(c.COMMA), n.push(o), o = r.charAt(i++);
                            else e.push(c.AT), n.push(o), o = r.charAt(i++);
                            else e.push(c.RIGHTBRACKET), n.push(o), o = r.charAt(i++);
                            else e.push(c.LEFTBRACKET), n.push(o), o = r.charAt(i++);
                            else e.push(c.RIGHTPARENTHESIS), n.push(o), o = r.charAt(i++);
                            else e.push(c.LEFTPARENTHESIS), n.push(o), o = r.charAt(i++)
                        }
                        return e.push(1), n.push("[EOF]"), [e, n]
                    }, c.SHIFT = "s", c.REDUCE = "r", c.ACCEPT = "a", c.prototype.parse = function(t) {
                        var e, n, r = this.tokenize(t);
                        if (null != r) {
                            e = r[0], n = r[1];
                            var i, o, s = 0,
                                a = [],
                                u = [],
                                l = [];
                            for (a.push(0), u.push(1), l.push("_S"), i = e[s], o = n[s++];;) switch (t = a[a.length - 1], c.actionTable[t].charAt(i - 1)) {
                                case c.SHIFT:
                                    u.push(-i), l.push(o), a.push(c.actionTableNumber[t].charCodeAt(i - 1) - 32), i = e[s], o = n[s++];
                                    break;
                                case c.REDUCE:
                                    for (var d = c.productions[c.actionTableNumber[t].charCodeAt(i - 1) - 32][1], p = [], f = 0; f < d; f++) u.pop(), p.unshift(l.pop()), a.pop();
                                    var g = a[a.length - 1];
                                    u.push(c.productions[c.actionTableNumber[t].charCodeAt(i - 1) - 32][0]), null == this.reduceActions[c.actionTableNumber[t].charCodeAt(i - 1) - 32] ? l.push(p[0]) : l.push(this.reduceActions[c.actionTableNumber[t].charCodeAt(i - 1) - 32](p)), a.push(c.gotoTable[g].charCodeAt(c.productions[c.actionTableNumber[t].charCodeAt(i - 1) - 32][0] - 2) - 33);
                                    break;
                                case c.ACCEPT:
                                    return new h(l.pop());
                                default:
                                    throw new Error("XPath parse error")
                            }
                        }
                    }, h.prototype = new Object, h.prototype.constructor = h, h.superclass = Object.prototype, h.prototype.toString = function() {
                        return this.expression.toString()
                    }, h.prototype.evaluate = function(t) {
                        return t.contextNode = t.expressionContextNode, t.contextSize = 1, t.contextPosition = 1, t.isHtml && (d(t, "caseInsensitive", !0), d(t, "allowAnyNamespaceForNoPrefix", !0)), d(t, "caseInsensitive", !1), this.expression.evaluate(t)
                    }, h.XML_NAMESPACE_URI = "http://www.w3.org/XML/1998/namespace", h.XMLNS_NAMESPACE_URI = "http://www.w3.org/2000/xmlns/", p.prototype = new Object, p.prototype.constructor = p, p.superclass = Object.prototype, p.prototype.init = function() {}, p.prototype.toString = function() {
                        return "<Expression>"
                    }, p.prototype.evaluate = function(t) {
                        throw new Error("Could not evaluate expression.")
                    }, f.prototype = new p, f.prototype.constructor = f, f.superclass = p.prototype, f.prototype.init = function(t) {
                        this.rhs = t
                    }, g.prototype = new f, g.prototype.constructor = g, g.superclass = f.prototype, g.prototype.init = function(t) {
                        g.superclass.init.call(this, t)
                    }, g.prototype.evaluate = function(t) {
                        return this.rhs.evaluate(t).number().negate()
                    }, g.prototype.toString = function() {
                        return "-" + this.rhs.toString()
                    }, v.prototype = new p, v.prototype.constructor = v, v.superclass = p.prototype, v.prototype.init = function(t, e) {
                        this.lhs = t, this.rhs = e
                    }, m.prototype = new v, m.prototype.constructor = m, m.superclass = v.prototype, m.prototype.init = function(t, e) {
                        m.superclass.init.call(this, t, e)
                    }, m.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")"
                    }, m.prototype.evaluate = function(t) {
                        var e = this.lhs.evaluate(t).bool();
                        return e.booleanValue() ? e : this.rhs.evaluate(t).bool()
                    }, y.prototype = new v, y.prototype.constructor = y, y.superclass = v.prototype, y.prototype.init = function(t, e) {
                        y.superclass.init.call(this, t, e)
                    }, y.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")"
                    }, y.prototype.evaluate = function(t) {
                        var e = this.lhs.evaluate(t).bool();
                        return e.booleanValue() ? this.rhs.evaluate(t).bool() : e
                    }, b.prototype = new v, b.prototype.constructor = b, b.superclass = v.prototype, b.prototype.init = function(t, e) {
                        b.superclass.init.call(this, t, e)
                    }, b.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")"
                    }, b.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).equals(this.rhs.evaluate(t))
                    }, x.prototype = new v, x.prototype.constructor = x, x.superclass = v.prototype, x.prototype.init = function(t, e) {
                        x.superclass.init.call(this, t, e)
                    }, x.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " != " + this.rhs.toString() + ")"
                    }, x.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).notequal(this.rhs.evaluate(t))
                    }, w.prototype = new v, w.prototype.constructor = w, w.superclass = v.prototype, w.prototype.init = function(t, e) {
                        w.superclass.init.call(this, t, e)
                    }, w.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).lessthan(this.rhs.evaluate(t))
                    }, w.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " < " + this.rhs.toString() + ")"
                    }, _.prototype = new v, _.prototype.constructor = _, _.superclass = v.prototype, _.prototype.init = function(t, e) {
                        _.superclass.init.call(this, t, e)
                    }, _.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).greaterthan(this.rhs.evaluate(t))
                    }, _.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")"
                    }, E.prototype = new v, E.prototype.constructor = E, E.superclass = v.prototype, E.prototype.init = function(t, e) {
                        E.superclass.init.call(this, t, e)
                    }, E.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).lessthanorequal(this.rhs.evaluate(t))
                    }, E.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " <= " + this.rhs.toString() + ")"
                    }, T.prototype = new v, T.prototype.constructor = T, T.superclass = v.prototype, T.prototype.init = function(t, e) {
                        T.superclass.init.call(this, t, e)
                    }, T.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).greaterthanorequal(this.rhs.evaluate(t))
                    }, T.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " >= " + this.rhs.toString() + ")"
                    }, N.prototype = new v, N.prototype.constructor = N, N.superclass = v.prototype, N.prototype.init = function(t, e) {
                        N.superclass.init.call(this, t, e)
                    }, N.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().plus(this.rhs.evaluate(t).number())
                    }, N.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")"
                    }, A.prototype = new v, A.prototype.constructor = A, A.superclass = v.prototype, A.prototype.init = function(t, e) {
                        A.superclass.init.call(this, t, e)
                    }, A.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().minus(this.rhs.evaluate(t).number())
                    }, A.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")"
                    }, S.prototype = new v, S.prototype.constructor = S, S.superclass = v.prototype, S.prototype.init = function(t, e) {
                        S.superclass.init.call(this, t, e)
                    }, S.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().multiply(this.rhs.evaluate(t).number())
                    }, S.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")"
                    }, I.prototype = new v, I.prototype.constructor = I, I.superclass = v.prototype, I.prototype.init = function(t, e) {
                        I.superclass.init.call(this, t, e)
                    }, I.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().div(this.rhs.evaluate(t).number())
                    }, I.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " div " + this.rhs.toString() + ")"
                    }, C.prototype = new v, C.prototype.constructor = C, C.superclass = v.prototype, C.prototype.init = function(t, e) {
                        C.superclass.init.call(this, t, e)
                    }, C.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).number().mod(this.rhs.evaluate(t).number())
                    }, C.prototype.toString = function() {
                        return "(" + this.lhs.toString() + " mod " + this.rhs.toString() + ")"
                    }, O.prototype = new v, O.prototype.constructor = O, O.superclass = v.prototype, O.prototype.init = function(t, e) {
                        O.superclass.init.call(this, t, e)
                    }, O.prototype.evaluate = function(t) {
                        return this.lhs.evaluate(t).nodeset().union(this.rhs.evaluate(t).nodeset())
                    }, O.prototype.toString = function() {
                        return r(i, [this.lhs, this.rhs]).join(" | ")
                    }, M.prototype = new p, M.prototype.constructor = M, M.superclass = p.prototype, M.prototype.init = function(t, e, n) {
                        M.superclass.init.call(this), this.filter = t, this.filterPredicates = e, this.locationPath = n
                    }, M.applyPredicates = function(t, r, i) {
                        if (0 === t.length) return i;
                        var o = r.extend({});
                        return n((function(t, n) {
                            return o.contextSize = t.length, r = function(t, e) {
                                return o.contextNode = t, o.contextPosition = e + 1, M.predicateMatches(n, o)
                            }, i = [], e((function(t, e) {
                                r(t, e) && i.push(t)
                            }), t), i;
                            var r, i
                        }), i, t)
                    }, M.getRoot = function(t, e) {
                        var n = e[0];
                        if (9 === n.nodeType) return n;
                        if (t.virtualRoot) return t.virtualRoot;
                        var r = n.ownerDocument;
                        if (r) return r;
                        for (var i = n; null != i.parentNode;) i = i.parentNode;
                        return i
                    }, M.applyStep = function(t, e, n) {
                        var r = [];
                        switch (e.contextNode = n, t.axis) {
                            case k.ANCESTOR:
                                if (e.contextNode === e.virtualRoot) break;
                                for (i = 2 == e.contextNode.nodeType ? M.getOwnerElement(e.contextNode) : e.contextNode.parentNode; null != i && (t.nodeTest.matches(i, e) && r.push(i), i !== e.virtualRoot);) i = i.parentNode;
                                break;
                            case k.ANCESTORORSELF:
                                for (var i = e.contextNode; null != i && (t.nodeTest.matches(i, e) && r.push(i), i !== e.virtualRoot); i = 2 == i.nodeType ? M.getOwnerElement(i) : i.parentNode);
                                break;
                            case k.ATTRIBUTE:
                                var o = e.contextNode.attributes;
                                if (null != o)
                                    for (var s = 0; s < o.length; s++) {
                                        i = o.item(s);
                                        t.nodeTest.matches(i, e) && r.push(i)
                                    }
                                break;
                            case k.CHILD:
                                for (i = e.contextNode.firstChild; null != i; i = i.nextSibling) t.nodeTest.matches(i, e) && r.push(i);
                                break;
                            case k.DESCENDANT:
                                for (var a = [e.contextNode.firstChild]; a.length > 0;)
                                    for (i = a.pop(); null != i;) t.nodeTest.matches(i, e) && r.push(i), null != i.firstChild ? (a.push(i.nextSibling), i = i.firstChild) : i = i.nextSibling;
                                break;
                            case k.DESCENDANTORSELF:
                                t.nodeTest.matches(e.contextNode, e) && r.push(e.contextNode);
                                for (a = [e.contextNode.firstChild]; a.length > 0;)
                                    for (i = a.pop(); null != i;) t.nodeTest.matches(i, e) && r.push(i), null != i.firstChild ? (a.push(i.nextSibling), i = i.firstChild) : i = i.nextSibling;
                                break;
                            case k.FOLLOWING:
                                if (e.contextNode === e.virtualRoot) break;
                                a = [];
                                null != e.contextNode.firstChild ? a.unshift(e.contextNode.firstChild) : a.unshift(e.contextNode.nextSibling);
                                for (i = e.contextNode.parentNode; null != i && 9 != i.nodeType && i !== e.virtualRoot; i = i.parentNode) a.unshift(i.nextSibling);
                                do {
                                    for (i = a.pop(); null != i;) t.nodeTest.matches(i, e) && r.push(i), null != i.firstChild ? (a.push(i.nextSibling), i = i.firstChild) : i = i.nextSibling
                                } while (a.length > 0);
                                break;
                            case k.FOLLOWINGSIBLING:
                                if (e.contextNode === e.virtualRoot) break;
                                for (i = e.contextNode.nextSibling; null != i; i = i.nextSibling) t.nodeTest.matches(i, e) && r.push(i);
                                break;
                            case k.NAMESPACE:
                                var u = {};
                                if (1 == e.contextNode.nodeType) {
                                    u.xml = h.XML_NAMESPACE_URI, u.xmlns = h.XMLNS_NAMESPACE_URI;
                                    for (i = e.contextNode; null != i && 1 == i.nodeType; i = i.parentNode)
                                        for (s = 0; s < i.attributes.length; s++) {
                                            var l = i.attributes.item(s),
                                                c = String(l.name);
                                            if ("xmlns" == c) null == u[""] && (u[""] = l.value);
                                            else if (c.length > 6 && "xmlns:" == c.substring(0, 6)) {
                                                null == u[d = c.substring(6, c.length)] && (u[d] = l.value)
                                            }
                                        }
                                    for (var d in u) {
                                        var p = new z(d, u[d], e.contextNode);
                                        t.nodeTest.matches(p, e) && r.push(p)
                                    }
                                }
                                break;
                            case k.PARENT:
                                i = null, e.contextNode !== e.virtualRoot && (i = 2 == e.contextNode.nodeType ? M.getOwnerElement(e.contextNode) : e.contextNode.parentNode), null != i && t.nodeTest.matches(i, e) && r.push(i);
                                break;
                            case k.PRECEDING:
                                a = null != e.virtualRoot ? [e.virtualRoot] : [R(e.contextNode)];
                                t: for (; a.length > 0;)
                                    for (i = a.pop(); null != i;) {
                                        if (i == e.contextNode) break t;
                                        t.nodeTest.matches(i, e) && r.unshift(i), null != i.firstChild ? (a.push(i.nextSibling), i = i.firstChild) : i = i.nextSibling
                                    }
                                break;
                            case k.PRECEDINGSIBLING:
                                if (e.contextNode === e.virtualRoot) break;
                                for (i = e.contextNode.previousSibling; null != i; i = i.previousSibling) t.nodeTest.matches(i, e) && r.push(i);
                                break;
                            case k.SELF:
                                t.nodeTest.matches(e.contextNode, e) && r.push(e.contextNode)
                        }
                        return r
                    }, M.applySteps = function(t, e, r) {
                        return n(D.bind(null, e), r, t)
                    }, M.prototype.applyFilter = function(t, e) {
                        if (!this.filter) return {
                            nodes: [t.contextNode]
                        };
                        var n = this.filter.evaluate(t);
                        if (!Q.instance_of(n, G)) {
                            if (null != this.filterPredicates && this.filterPredicates.length > 0 || null != this.locationPath) throw new Error("Path expression filter must evaluate to a nodeset if predicates or location path are used");
                            return {
                                nonNodes: n
                            }
                        }
                        return {
                            nodes: M.applyPredicates(this.filterPredicates || [], e, n.toUnsortedArray())
                        }
                    }, M.applyLocationPath = function(t, e, n) {
                        if (!t) return n;
                        var r = t.absolute ? [M.getRoot(e, n)] : n;
                        return M.applySteps(t.steps, e, r)
                    }, M.prototype.evaluate = function(t) {
                        var e = l(new Y, t),
                            n = this.applyFilter(t, e);
                        if ("nonNodes" in n) return n.nonNodes;
                        var r = new G;
                        return r.addArray(M.applyLocationPath(this.locationPath, e, n.nodes)), r
                    }, M.predicateMatches = function(t, e) {
                        var n = t.evaluate(e);
                        return Q.instance_of(n, W) ? e.contextPosition === n.numberValue() : n.booleanValue()
                    }, M.predicateString = function(t) {
                        return s("[", "]", t.toString())
                    }, M.predicatesString = function(t) {
                        return o("", r(M.predicateString, t))
                    }, M.prototype.toString = function() {
                        if (null != this.filter) {
                            var t = i(this.filter);
                            return Q.instance_of(this.filter, V) ? s("'", "'", t) : null != this.filterPredicates && this.filterPredicates.length ? s("(", ")", t) + M.predicatesString(this.filterPredicates) : null != this.locationPath ? t + (this.locationPath.absolute ? "" : "/") + i(this.locationPath) : t
                        }
                        return i(this.locationPath)
                    }, M.getOwnerElement = function(t) {
                        if (t.ownerElement) return t.ownerElement;
                        try {
                            if (t.selectSingleNode) return t.selectSingleNode("..")
                        } catch (t) {}
                        for (var e = (9 == t.nodeType ? t : t.ownerDocument).getElementsByTagName("*"), n = 0; n < e.length; n++)
                            for (var r = e.item(n), i = r.attributes, o = 0; o < i.length; o++) {
                                if (i.item(o) === t) return r
                            }
                        return null
                    }, L.prototype = new Object, L.prototype.constructor = L, L.superclass = Object.prototype, L.prototype.init = function(t, e) {
                        this.absolute = t, this.steps = e
                    }, L.prototype.toString = function() {
                        return (this.absolute ? "/" : "") + r(i, this.steps).join("/")
                    }, k.prototype = new Object, k.prototype.constructor = k, k.superclass = Object.prototype, k.prototype.init = function(t, e, n) {
                        this.axis = t, this.nodeTest = e, this.predicates = n
                    }, k.prototype.toString = function() {
                        return k.STEPNAMES[this.axis] + "::" + this.nodeTest.toString() + M.predicatesString(this.predicates)
                    }, k.ANCESTOR = 0, k.ANCESTORORSELF = 1, k.ATTRIBUTE = 2, k.CHILD = 3, k.DESCENDANT = 4, k.DESCENDANTORSELF = 5, k.FOLLOWING = 6, k.FOLLOWINGSIBLING = 7, k.NAMESPACE = 8, k.PARENT = 9, k.PRECEDING = 10, k.PRECEDINGSIBLING = 11, k.SELF = 12, k.STEPNAMES = n((function(t, e) {
                        return t[e[0]] = e[1], t
                    }), {}, [
                        [k.ANCESTOR, "ancestor"],
                        [k.ANCESTORORSELF, "ancestor-or-self"],
                        [k.ATTRIBUTE, "attribute"],
                        [k.CHILD, "child"],
                        [k.DESCENDANT, "descendant"],
                        [k.DESCENDANTORSELF, "descendant-or-self"],
                        [k.FOLLOWING, "following"],
                        [k.FOLLOWINGSIBLING, "following-sibling"],
                        [k.NAMESPACE, "namespace"],
                        [k.PARENT, "parent"],
                        [k.PRECEDING, "preceding"],
                        [k.PRECEDINGSIBLING, "preceding-sibling"],
                        [k.SELF, "self"]
                    ]), B.prototype = new Object, B.prototype.constructor = B, B.superclass = Object.prototype, B.prototype.init = function(t, e) {
                        this.type = t, this.value = e
                    }, B.prototype.toString = function() {
                        return "<unknown nodetest type>"
                    }, B.prototype.matches = function(t, e) {
                        console.warn("unknown node test type")
                    }, B.NAMETESTANY = 0, B.NAMETESTPREFIXANY = 1, B.NAMETESTQNAME = 2, B.COMMENT = 3, B.TEXT = 4, B.PI = 5, B.NODE = 6, B.isNodeType = function(t) {
                        return function(e) {
                            return function(t, e) {
                                for (var n = 0; n < t.length; n += 1)
                                    if (t[n] === e) return !0;
                                return !1
                            }(t, e.nodeType)
                        }
                    }, B.makeNodeTestType = function(t, e, n) {
                        var r = n || function() {};
                        return r.prototype = new B(t), r.prototype.constructor = r, l(r.prototype, e), r
                    }, B.makeNodeTypeTest = function(t, e, n) {
                        return new(B.makeNodeTestType(t, {
                            matches: B.isNodeType(e),
                            toString: (r = n, function() {
                                return r
                            })
                        }));
                        var r
                    }, B.hasPrefix = function(t) {
                        return t.prefix || -1 !== (t.nodeName || t.tagName).indexOf(":")
                    }, B.isElementOrAttribute = B.isNodeType([1, 2]), B.nameSpaceMatches = function(t, e, n) {
                        var r = n.namespaceURI || "";
                        if (!t) return !r || e.allowAnyNamespaceForNoPrefix && !B.hasPrefix(n);
                        var i = e.namespaceResolver.getNamespace(t, e.expressionContextNode);
                        if (null == i) throw new Error("Cannot resolve QName " + t);
                        return i === r
                    }, B.localNameMatches = function(t, e, n) {
                        var r = n.localName || n.nodeName;
                        return e.caseInsensitive ? t.toLowerCase() === r.toLowerCase() : t === r
                    }, B.NameTestPrefixAny = B.makeNodeTestType(B.NAMETESTPREFIXANY, {
                        matches: function(t, e) {
                            return B.isElementOrAttribute(t) && B.nameSpaceMatches(this.prefix, e, t)
                        },
                        toString: function() {
                            return this.prefix + ":*"
                        }
                    }, (function(t) {
                        this.prefix = t
                    })), B.NameTestQName = B.makeNodeTestType(B.NAMETESTQNAME, {
                        matches: function(t, e) {
                            return B.isNodeType([1, 2, z.XPATH_NAMESPACE_NODE])(t) && B.nameSpaceMatches(this.prefix, e, t) && B.localNameMatches(this.localName, e, t)
                        },
                        toString: function() {
                            return this.name
                        }
                    }, (function(t) {
                        var e = t.split(":");
                        this.name = t, this.prefix = e.length > 1 ? e[0] : null, this.localName = e[e.length > 1 ? 1 : 0]
                    })), B.PITest = B.makeNodeTestType(B.PI, {
                        matches: function(t, e) {
                            return B.isNodeType([7])(t) && (t.target || t.nodeName) === this.name
                        },
                        toString: function() {
                            return s('processing-instruction("', '")', this.name)
                        }
                    }, (function(t) {
                        this.name = t
                    })), B.nameTestAny = B.makeNodeTypeTest(B.NAMETESTANY, [1, 2, z.XPATH_NAMESPACE_NODE], "*"), B.textTest = B.makeNodeTypeTest(B.TEXT, [3, 4], "text()"), B.commentTest = B.makeNodeTypeTest(B.COMMENT, [8], "comment()"), B.nodeTest = B.makeNodeTypeTest(B.NODE, [1, 2, 3, 4, 7, 8, 9], "node()"), B.anyPiTest = B.makeNodeTypeTest(B.PI, [7], "processing-instruction()"), F.prototype = new p, F.prototype.constructor = F, F.superclass = p.prototype, F.prototype.init = function(t) {
                        this.variable = t
                    }, F.prototype.toString = function() {
                        return "$" + this.variable
                    }, F.prototype.evaluate = function(t) {
                        var e = Q.resolveQName(this.variable, t.namespaceResolver, t.contextNode, !1);
                        if (null == e[0]) throw new Error("Cannot resolve QName " + fn);
                        var n = t.variableResolver.getVariable(e[1], e[0]);
                        if (!n) throw Z.fromMessage("Undeclared variable: " + this.toString());
                        return n
                    }, j.prototype = new p, j.prototype.constructor = j, j.superclass = p.prototype, j.prototype.init = function(t, e) {
                        this.functionName = t, this.arguments = e
                    }, j.prototype.toString = function() {
                        for (var t = this.functionName + "(", e = 0; e < this.arguments.length; e++) e > 0 && (t += ", "), t += this.arguments[e].toString();
                        return t + ")"
                    }, j.prototype.evaluate = function(t) {
                        var e = X.getFunctionFromContext(this.functionName, t);
                        if (!e) throw new Error("Unknown function " + this.functionName);
                        var n = [t].concat(this.arguments);
                        return e.apply(t.functionResolver.thisArg, n)
                    };
                    var U = new Object;

                    function V(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function W(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function H(t) {
                        arguments.length > 0 && this.init(t)
                    }

                    function $(t) {
                        this.init(t)
                    }

                    function G() {
                        this.init()
                    }

                    function z(t, e, n) {
                        this.isXPathNamespace = !0, this.ownerDocument = n.ownerDocument, this.nodeName = "#namespace", this.prefix = t, this.localName = t, this.namespaceURI = e, this.nodeValue = e, this.ownerElement = n, this.nodeType = z.XPATH_NAMESPACE_NODE
                    }

                    function Y(t, e, n) {
                        this.variableResolver = null != t ? t : new q, this.namespaceResolver = null != e ? e : new J, this.functionResolver = null != n ? n : new X
                    }

                    function q() {}

                    function X(t) {
                        this.thisArg = null != t ? t : K, this.functions = new Object, this.addStandardFunctions()
                    }

                    function J() {}
                    U.equals = function(t, e) {
                        return t.equals(e)
                    }, U.notequal = function(t, e) {
                        return t.notequal(e)
                    }, U.lessthan = function(t, e) {
                        return t.lessthan(e)
                    }, U.greaterthan = function(t, e) {
                        return t.greaterthan(e)
                    }, U.lessthanorequal = function(t, e) {
                        return t.lessthanorequal(e)
                    }, U.greaterthanorequal = function(t, e) {
                        return t.greaterthanorequal(e)
                    }, V.prototype = new p, V.prototype.constructor = V, V.superclass = p.prototype, V.prototype.init = function(t) {
                        this.str = String(t)
                    }, V.prototype.toString = function() {
                        return this.str
                    }, V.prototype.evaluate = function(t) {
                        return this
                    }, V.prototype.string = function() {
                        return this
                    }, V.prototype.number = function() {
                        return new W(this.str)
                    }, V.prototype.bool = function() {
                        return new H(this.str)
                    }, V.prototype.nodeset = function() {
                        throw new Error("Cannot convert string to nodeset")
                    }, V.prototype.stringValue = function() {
                        return this.str
                    }, V.prototype.numberValue = function() {
                        return this.number().numberValue()
                    }, V.prototype.booleanValue = function() {
                        return this.bool().booleanValue()
                    }, V.prototype.equals = function(t) {
                        return Q.instance_of(t, H) ? this.bool().equals(t) : Q.instance_of(t, W) ? this.number().equals(t) : Q.instance_of(t, G) ? t.compareWithString(this, U.equals) : new H(this.str == t.str)
                    }, V.prototype.notequal = function(t) {
                        return Q.instance_of(t, H) ? this.bool().notequal(t) : Q.instance_of(t, W) ? this.number().notequal(t) : Q.instance_of(t, G) ? t.compareWithString(this, U.notequal) : new H(this.str != t.str)
                    }, V.prototype.lessthan = function(t) {
                        return this.number().lessthan(t)
                    }, V.prototype.greaterthan = function(t) {
                        return this.number().greaterthan(t)
                    }, V.prototype.lessthanorequal = function(t) {
                        return this.number().lessthanorequal(t)
                    }, V.prototype.greaterthanorequal = function(t) {
                        return this.number().greaterthanorequal(t)
                    }, W.prototype = new p, W.prototype.constructor = W, W.superclass = p.prototype, W.prototype.init = function(t) {
                        this.num = "string" == typeof t ? this.parse(t) : Number(t)
                    }, W.prototype.numberFormat = /^\s*-?[0-9]*\.?[0-9]+\s*$/, W.prototype.parse = function(t) {
                        return this.numberFormat.test(t) ? parseFloat(t) : Number.NaN
                    }, W.prototype.toString = function() {
                        var t = this.num.toString();
                        return -1 !== t.indexOf("e-") ? function(t) {
                            for (var e = t.split("e-"), n = e[0].replace(".", ""), r = Number(e[1]), i = 0; i < r - 1; i += 1) n = "0" + n;
                            return "0." + n
                        }(t) : -1 !== t.indexOf("e") ? function(t) {
                            for (var e = t.split("e"), n = e[0].replace(".", ""), r = Number(e[1]) + 1 - n.length, i = 0; i < r; i += 1) n += "0";
                            return n
                        }(t) : t
                    }, W.prototype.evaluate = function(t) {
                        return this
                    }, W.prototype.string = function() {
                        return new V(this.toString())
                    }, W.prototype.number = function() {
                        return this
                    }, W.prototype.bool = function() {
                        return new H(this.num)
                    }, W.prototype.nodeset = function() {
                        throw new Error("Cannot convert number to nodeset")
                    }, W.prototype.stringValue = function() {
                        return this.string().stringValue()
                    }, W.prototype.numberValue = function() {
                        return this.num
                    }, W.prototype.booleanValue = function() {
                        return this.bool().booleanValue()
                    }, W.prototype.negate = function() {
                        return new W(-this.num)
                    }, W.prototype.equals = function(t) {
                        return Q.instance_of(t, H) ? this.bool().equals(t) : Q.instance_of(t, V) ? this.equals(t.number()) : Q.instance_of(t, G) ? t.compareWithNumber(this, U.equals) : new H(this.num == t.num)
                    }, W.prototype.notequal = function(t) {
                        return Q.instance_of(t, H) ? this.bool().notequal(t) : Q.instance_of(t, V) ? this.notequal(t.number()) : Q.instance_of(t, G) ? t.compareWithNumber(this, U.notequal) : new H(this.num != t.num)
                    }, W.prototype.lessthan = function(t) {
                        return Q.instance_of(t, G) ? t.compareWithNumber(this, U.greaterthan) : Q.instance_of(t, H) || Q.instance_of(t, V) ? this.lessthan(t.number()) : new H(this.num < t.num)
                    }, W.prototype.greaterthan = function(t) {
                        return Q.instance_of(t, G) ? t.compareWithNumber(this, U.lessthan) : Q.instance_of(t, H) || Q.instance_of(t, V) ? this.greaterthan(t.number()) : new H(this.num > t.num)
                    }, W.prototype.lessthanorequal = function(t) {
                        return Q.instance_of(t, G) ? t.compareWithNumber(this, U.greaterthanorequal) : Q.instance_of(t, H) || Q.instance_of(t, V) ? this.lessthanorequal(t.number()) : new H(this.num <= t.num)
                    }, W.prototype.greaterthanorequal = function(t) {
                        return Q.instance_of(t, G) ? t.compareWithNumber(this, U.lessthanorequal) : Q.instance_of(t, H) || Q.instance_of(t, V) ? this.greaterthanorequal(t.number()) : new H(this.num >= t.num)
                    }, W.prototype.plus = function(t) {
                        return new W(this.num + t.num)
                    }, W.prototype.minus = function(t) {
                        return new W(this.num - t.num)
                    }, W.prototype.multiply = function(t) {
                        return new W(this.num * t.num)
                    }, W.prototype.div = function(t) {
                        return new W(this.num / t.num)
                    }, W.prototype.mod = function(t) {
                        return new W(this.num % t.num)
                    }, H.prototype = new p, H.prototype.constructor = H, H.superclass = p.prototype, H.prototype.init = function(t) {
                        this.b = Boolean(t)
                    }, H.prototype.toString = function() {
                        return this.b.toString()
                    }, H.prototype.evaluate = function(t) {
                        return this
                    }, H.prototype.string = function() {
                        return new V(this.b)
                    }, H.prototype.number = function() {
                        return new W(this.b)
                    }, H.prototype.bool = function() {
                        return this
                    }, H.prototype.nodeset = function() {
                        throw new Error("Cannot convert boolean to nodeset")
                    }, H.prototype.stringValue = function() {
                        return this.string().stringValue()
                    }, H.prototype.numberValue = function() {
                        return this.number().numberValue()
                    }, H.prototype.booleanValue = function() {
                        return this.b
                    }, H.prototype.not = function() {
                        return new H(!this.b)
                    }, H.prototype.equals = function(t) {
                        return Q.instance_of(t, V) || Q.instance_of(t, W) ? this.equals(t.bool()) : Q.instance_of(t, G) ? t.compareWithBoolean(this, U.equals) : new H(this.b == t.b)
                    }, H.prototype.notequal = function(t) {
                        return Q.instance_of(t, V) || Q.instance_of(t, W) ? this.notequal(t.bool()) : Q.instance_of(t, G) ? t.compareWithBoolean(this, U.notequal) : new H(this.b != t.b)
                    }, H.prototype.lessthan = function(t) {
                        return this.number().lessthan(t)
                    }, H.prototype.greaterthan = function(t) {
                        return this.number().greaterthan(t)
                    }, H.prototype.lessthanorequal = function(t) {
                        return this.number().lessthanorequal(t)
                    }, H.prototype.greaterthanorequal = function(t) {
                        return this.number().greaterthanorequal(t)
                    }, H.true_ = new H(!0), H.false_ = new H(!1), $.prototype = new Object, $.prototype.constructor = $, $.superclass = Object.prototype, $.prototype.init = function(t) {
                        this.left = null, this.right = null, this.node = t, this.depth = 1
                    }, $.prototype.balance = function() {
                        var t = null == this.left ? 0 : this.left.depth,
                            e = null == this.right ? 0 : this.right.depth;
                        if (t > e + 1)(null == this.left.left ? 0 : this.left.left.depth) < (null == this.left.right ? 0 : this.left.right.depth) && this.left.rotateRR(), this.rotateLL();
                        else if (t + 1 < e) {
                            var n = null == this.right.right ? 0 : this.right.right.depth;
                            (null == this.right.left ? 0 : this.right.left.depth) > n && this.right.rotateLL(), this.rotateRR()
                        }
                    }, $.prototype.rotateLL = function() {
                        var t = this.node,
                            e = this.right;
                        this.node = this.left.node, this.right = this.left, this.left = this.left.left, this.right.left = this.right.right, this.right.right = e, this.right.node = t, this.right.updateInNewLocation(), this.updateInNewLocation()
                    }, $.prototype.rotateRR = function() {
                        var t = this.node,
                            e = this.left;
                        this.node = this.right.node, this.left = this.right, this.right = this.right.right, this.left.right = this.left.left, this.left.left = e, this.left.node = t, this.left.updateInNewLocation(), this.updateInNewLocation()
                    }, $.prototype.updateInNewLocation = function() {
                        this.getDepthFromChildren()
                    }, $.prototype.getDepthFromChildren = function() {
                        this.depth = null == this.node ? 0 : 1, null != this.left && (this.depth = this.left.depth + 1), null != this.right && this.depth <= this.right.depth && (this.depth = this.right.depth + 1)
                    }, $.prototype.add = function(t) {
                        if (t === this.node) return !1;
                        var e = function(t, e) {
                                if (t === e) return 0;
                                if (t.compareDocumentPosition) {
                                    var n = t.compareDocumentPosition(e);
                                    return 1 & n || 10 & n ? 1 : 20 & n ? -1 : 0
                                }
                                for (var r = 0, i = 0, o = t; null != o; o = o.parentNode || o.ownerElement) r++;
                                for (var s = e; null != s; s = s.parentNode || s.ownerElement) i++;
                                if (r > i) {
                                    for (; r > i;) t = t.parentNode || t.ownerElement, r--;
                                    if (t === e) return 1
                                } else if (i > r) {
                                    for (; i > r;) e = e.parentNode || e.ownerElement, i--;
                                    if (t === e) return -1
                                }
                                for (var a = t.parentNode || t.ownerElement, u = e.parentNode || e.ownerElement; a !== u;) e = u, a = (t = a).parentNode || t.ownerElement, u = e.parentNode || e.ownerElement;
                                var l = Q.isAttribute(t),
                                    c = Q.isAttribute(e);
                                if (l && !c) return -1;
                                if (!l && c) return 1;
                                if (a)
                                    for (var h = l ? a.attributes : a.childNodes, d = h.length, p = 0; p < d; p += 1) {
                                        var f = h[p];
                                        if (f === t) return -1;
                                        if (f === e) return 1
                                    }
                                throw new Error("Unexpected: could not determine node order")
                            }(t, this.node),
                            n = !1;
                        return -1 == e ? null == this.left ? (this.left = new $(t), n = !0) : (n = this.left.add(t)) && this.balance() : 1 == e && (null == this.right ? (this.right = new $(t), n = !0) : (n = this.right.add(t)) && this.balance()), n && this.getDepthFromChildren(), n
                    }, G.prototype = new p, G.prototype.constructor = G, G.superclass = p.prototype, G.prototype.init = function() {
                        this.tree = null, this.nodes = [], this.size = 0
                    }, G.prototype.toString = function() {
                        var t = this.first();
                        return null == t ? "" : this.stringForNode(t)
                    }, G.prototype.evaluate = function(t) {
                        return this
                    }, G.prototype.string = function() {
                        return new V(this.toString())
                    }, G.prototype.stringValue = function() {
                        return this.toString()
                    }, G.prototype.number = function() {
                        return new W(this.string())
                    }, G.prototype.numberValue = function() {
                        return Number(this.string())
                    }, G.prototype.bool = function() {
                        return new H(this.booleanValue())
                    }, G.prototype.booleanValue = function() {
                        return !!this.size
                    }, G.prototype.nodeset = function() {
                        return this
                    }, G.prototype.stringForNode = function(t) {
                        return 9 == t.nodeType || 1 == t.nodeType || 11 === t.nodeType ? this.stringForContainerNode(t) : 2 === t.nodeType ? t.value || t.nodeValue : t.isNamespaceNode ? t.namespace : t.nodeValue
                    }, G.prototype.stringForContainerNode = function(t) {
                        for (var e = "", n = t.firstChild; null != n; n = n.nextSibling) {
                            var r = n.nodeType;
                            1 !== r && 3 !== r && 4 !== r && 9 !== r && 11 !== r || (e += this.stringForNode(n))
                        }
                        return e
                    }, G.prototype.buildTree = function() {
                        if (!this.tree && this.nodes.length) {
                            this.tree = new $(this.nodes[0]);
                            for (var t = 1; t < this.nodes.length; t += 1) this.tree.add(this.nodes[t])
                        }
                        return this.tree
                    }, G.prototype.first = function() {
                        var t = this.buildTree();
                        if (null == t) return null;
                        for (; null != t.left;) t = t.left;
                        return t.node
                    }, G.prototype.add = function(t) {
                        for (var e = 0; e < this.nodes.length; e += 1)
                            if (t === this.nodes[e]) return;
                        this.tree = null, this.nodes.push(t), this.size += 1
                    }, G.prototype.addArray = function(t) {
                        var n = this;
                        e((function(t) {
                            n.add(t)
                        }), t)
                    }, G.prototype.toArray = function() {
                        var t = [];
                        return this.toArrayRec(this.buildTree(), t), t
                    }, G.prototype.toArrayRec = function(t, e) {
                        null != t && (this.toArrayRec(t.left, e), e.push(t.node), this.toArrayRec(t.right, e))
                    }, G.prototype.toUnsortedArray = function() {
                        return this.nodes.slice()
                    }, G.prototype.compareWithString = function(t, e) {
                        for (var n = this.toUnsortedArray(), r = 0; r < n.length; r++) {
                            var i = n[r],
                                o = e(new V(this.stringForNode(i)), t);
                            if (o.booleanValue()) return o
                        }
                        return new H(!1)
                    }, G.prototype.compareWithNumber = function(t, e) {
                        for (var n = this.toUnsortedArray(), r = 0; r < n.length; r++) {
                            var i = n[r],
                                o = e(new W(this.stringForNode(i)), t);
                            if (o.booleanValue()) return o
                        }
                        return new H(!1)
                    }, G.prototype.compareWithBoolean = function(t, e) {
                        return e(this.bool(), t)
                    }, G.prototype.compareWithNodeSet = function(t, e) {
                        for (var n = this.toUnsortedArray(), r = function(t, n) {
                                return e(n, t)
                            }, i = 0; i < n.length; i++) {
                            var o = new V(this.stringForNode(n[i])),
                                s = t.compareWithString(o, r);
                            if (s.booleanValue()) return s
                        }
                        return new H(!1)
                    }, G.compareWith = function(t) {
                        var e = Array.prototype.slice,
                            n = t.length,
                            r = function() {
                                var i = e.call(arguments);
                                return i.length < n ? function(t, n) {
                                    return function() {
                                        return n.apply(this, t.concat(e.call(arguments)))
                                    }
                                }(i, r) : t.apply(this, e.apply(arguments, [0, n]))
                            };
                        return r
                    }((function(t, e) {
                        return Q.instance_of(e, V) ? this.compareWithString(e, t) : Q.instance_of(e, W) ? this.compareWithNumber(e, t) : Q.instance_of(e, H) ? this.compareWithBoolean(e, t) : this.compareWithNodeSet(e, t)
                    })), G.prototype.equals = G.compareWith(U.equals), G.prototype.notequal = G.compareWith(U.notequal), G.prototype.lessthan = G.compareWith(U.lessthan), G.prototype.greaterthan = G.compareWith(U.greaterthan), G.prototype.lessthanorequal = G.compareWith(U.lessthanorequal), G.prototype.greaterthanorequal = G.compareWith(U.greaterthanorequal), G.prototype.union = function(t) {
                        var e = new G;
                        return e.addArray(this.toUnsortedArray()), e.addArray(t.toUnsortedArray()), e
                    }, z.prototype = new Object, z.prototype.constructor = z, z.superclass = Object.prototype, z.prototype.toString = function() {
                        return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }'
                    }, Y.prototype = new Object, Y.prototype.constructor = Y, Y.superclass = Object.prototype, Y.prototype.extend = function(t) {
                        return l(new Y, this, t)
                    }, q.prototype = new Object, q.prototype.constructor = q, q.superclass = Object.prototype, q.prototype.getVariable = function(t, e) {
                        return null
                    }, X.prototype = new Object, X.prototype.constructor = X, X.superclass = Object.prototype, X.prototype.addStandardFunctions = function() {
                        this.functions["{}last"] = K.last, this.functions["{}position"] = K.position, this.functions["{}count"] = K.count, this.functions["{}id"] = K.id, this.functions["{}local-name"] = K.localName, this.functions["{}namespace-uri"] = K.namespaceURI, this.functions["{}name"] = K.name, this.functions["{}string"] = K.string, this.functions["{}concat"] = K.concat, this.functions["{}starts-with"] = K.startsWith, this.functions["{}contains"] = K.contains, this.functions["{}substring-before"] = K.substringBefore, this.functions["{}substring-after"] = K.substringAfter, this.functions["{}substring"] = K.substring, this.functions["{}string-length"] = K.stringLength, this.functions["{}normalize-space"] = K.normalizeSpace, this.functions["{}translate"] = K.translate, this.functions["{}boolean"] = K.boolean_, this.functions["{}not"] = K.not, this.functions["{}true"] = K.true_, this.functions["{}false"] = K.false_, this.functions["{}lang"] = K.lang, this.functions["{}number"] = K.number, this.functions["{}sum"] = K.sum, this.functions["{}floor"] = K.floor, this.functions["{}ceiling"] = K.ceiling, this.functions["{}round"] = K.round
                    }, X.prototype.addFunction = function(t, e, n) {
                        this.functions["{" + t + "}" + e] = n
                    }, X.getFunctionFromContext = function(t, e) {
                        var n = Q.resolveQName(t, e.namespaceResolver, e.contextNode, !1);
                        if (null === n[0]) throw new Error("Cannot resolve QName " + name);
                        return e.functionResolver.getFunction(n[1], n[0])
                    }, X.prototype.getFunction = function(t, e) {
                        return this.functions["{" + e + "}" + t]
                    }, J.prototype = new Object, J.prototype.constructor = J, J.superclass = Object.prototype, J.prototype.getNamespace = function(t, e) {
                        if ("xml" == t) return h.XML_NAMESPACE_URI;
                        if ("xmlns" == t) return h.XMLNS_NAMESPACE_URI;
                        for (9 == e.nodeType ? e = e.documentElement : 2 == e.nodeType ? e = M.getOwnerElement(e) : 1 != e.nodeType && (e = e.parentNode); null != e && 1 == e.nodeType;) {
                            for (var n = e.attributes, r = 0; r < n.length; r++) {
                                var i = n.item(r),
                                    o = i.name || i.nodeName;
                                if ("xmlns" === o && "" === t || o === "xmlns:" + t) return String(i.value || i.nodeValue)
                            }
                            e = e.parentNode
                        }
                        return null
                    };
                    var K = new Object;
                    K.last = function(t) {
                        if (1 != arguments.length) throw new Error("Function last expects ()");
                        return new W(t.contextSize)
                    }, K.position = function(t) {
                        if (1 != arguments.length) throw new Error("Function position expects ()");
                        return new W(t.contextPosition)
                    }, K.count = function() {
                        var t, e = arguments[0];
                        if (2 != arguments.length || !Q.instance_of(t = arguments[1].evaluate(e), G)) throw new Error("Function count expects (node-set)");
                        return new W(t.size)
                    }, K.id = function() {
                        var t, e = arguments[0];
                        if (2 != arguments.length) throw new Error("Function id expects (object)");
                        t = arguments[1].evaluate(e);
                        for (var n = (t = Q.instance_of(t, G) ? t.toArray().join(" ") : t.stringValue()).split(/[\x0d\x0a\x09\x20]+/), r = new G, i = 9 == e.contextNode.nodeType ? e.contextNode : e.contextNode.ownerDocument, o = 0; o < n.length; o++) {
                            var s;
                            null != (s = i.getElementById ? i.getElementById(n[o]) : Q.getElementById(i, n[o])) && (r.add(s))
                        }
                        return r
                    }, K.localName = function(t, e) {
                        var n;
                        if (1 == arguments.length) n = t.contextNode;
                        else {
                            if (2 != arguments.length) throw new Error("Function local-name expects (node-set?)");
                            n = e.evaluate(t).first()
                        }
                        return new V(null == n ? "" : n.localName || n.baseName || n.target || n.nodeName || "")
                    }, K.namespaceURI = function() {
                        var t, e = arguments[0];
                        if (1 == arguments.length) t = e.contextNode;
                        else {
                            if (2 != arguments.length) throw new Error("Function namespace-uri expects (node-set?)");
                            t = arguments[1].evaluate(e).first()
                        }
                        return new V(null == t ? "" : t.namespaceURI)
                    }, K.name = function() {
                        var t, e = arguments[0];
                        if (1 == arguments.length) t = e.contextNode;
                        else {
                            if (2 != arguments.length) throw new Error("Function name expects (node-set?)");
                            t = arguments[1].evaluate(e).first()
                        }
                        return null == t ? new V("") : 1 == t.nodeType ? new V(t.nodeName) : 2 == t.nodeType ? new V(t.name || t.nodeName) : 7 === t.nodeType ? new V(t.target || t.nodeName) : null == t.localName ? new V("") : new V(t.localName)
                    }, K.string = function() {
                        var t = arguments[0];
                        if (1 == arguments.length) return new V(G.prototype.stringForNode(t.contextNode));
                        if (2 == arguments.length) return arguments[1].evaluate(t).string();
                        throw new Error("Function string expects (object?)")
                    }, K.concat = function(t) {
                        if (arguments.length < 3) throw new Error("Function concat expects (string, string[, string]*)");
                        for (var e = "", n = 1; n < arguments.length; n++) e += arguments[n].evaluate(t).stringValue();
                        return new V(e)
                    }, K.startsWith = function() {
                        var t = arguments[0];
                        if (3 != arguments.length) throw new Error("Function startsWith expects (string, string)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            n = arguments[2].evaluate(t).stringValue();
                        return new H(e.substring(0, n.length) == n)
                    }, K.contains = function() {
                        var t = arguments[0];
                        if (3 != arguments.length) throw new Error("Function contains expects (string, string)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            n = arguments[2].evaluate(t).stringValue();
                        return new H(-1 !== e.indexOf(n))
                    }, K.substringBefore = function() {
                        var t = arguments[0];
                        if (3 != arguments.length) throw new Error("Function substring-before expects (string, string)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            n = arguments[2].evaluate(t).stringValue();
                        return new V(e.substring(0, e.indexOf(n)))
                    }, K.substringAfter = function() {
                        var t = arguments[0];
                        if (3 != arguments.length) throw new Error("Function substring-after expects (string, string)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            n = arguments[2].evaluate(t).stringValue();
                        if (0 == n.length) return new V(e);
                        var r = e.indexOf(n);
                        return new V(-1 == r ? "" : e.substring(r + n.length))
                    }, K.substring = function() {
                        var t = arguments[0];
                        if (3 != arguments.length && 4 != arguments.length) throw new Error("Function substring expects (string, number, number?)");
                        var e = arguments[1].evaluate(t).stringValue(),
                            n = Math.round(arguments[2].evaluate(t).numberValue()) - 1,
                            r = 4 == arguments.length ? n + Math.round(arguments[3].evaluate(t).numberValue()) : void 0;
                        return new V(e.substring(n, r))
                    }, K.stringLength = function() {
                        var t, e = arguments[0];
                        if (1 == arguments.length) t = G.prototype.stringForNode(e.contextNode);
                        else {
                            if (2 != arguments.length) throw new Error("Function string-length expects (string?)");
                            t = arguments[1].evaluate(e).stringValue()
                        }
                        return new W(t.length)
                    }, K.normalizeSpace = function() {
                        var t, e = arguments[0];
                        if (1 == arguments.length) t = G.prototype.stringForNode(e.contextNode);
                        else {
                            if (2 != arguments.length) throw new Error("Function normalize-space expects (string?)");
                            t = arguments[1].evaluate(e).stringValue()
                        }
                        for (var n = 0, r = t.length - 1; Q.isSpace(t.charCodeAt(r));) r--;
                        for (var i = ""; n <= r && Q.isSpace(t.charCodeAt(n));) n++;
                        for (; n <= r;)
                            if (Q.isSpace(t.charCodeAt(n)))
                                for (i += " "; n <= r && Q.isSpace(t.charCodeAt(n));) n++;
                            else i += t.charAt(n), n++;
                        return new V(i)
                    }, K.translate = function(t, e, i, s) {
                        if (4 != arguments.length) throw new Error("Function translate expects (string, string, string)");
                        var a = e.evaluate(t).stringValue(),
                            u = i.evaluate(t).stringValue(),
                            l = s.evaluate(t).stringValue(),
                            c = n((function(t, e, n) {
                                return e in t || (t[e] = n > l.length ? "" : l[n]), t
                            }), {}, u);
                        return new V(o("", r((function(t) {
                            return t in c ? c[t] : t
                        }), a)))
                    }, K.boolean_ = function() {
                        var t = arguments[0];
                        if (2 != arguments.length) throw new Error("Function boolean expects (object)");
                        return arguments[1].evaluate(t).bool()
                    }, K.not = function(t, e) {
                        if (2 != arguments.length) throw new Error("Function not expects (object)");
                        return e.evaluate(t).bool().not()
                    }, K.true_ = function() {
                        if (1 != arguments.length) throw new Error("Function true expects ()");
                        return H.true_
                    }, K.false_ = function() {
                        if (1 != arguments.length) throw new Error("Function false expects ()");
                        return H.false_
                    }, K.lang = function() {
                        var t, e = arguments[0];
                        if (2 != arguments.length) throw new Error("Function lang expects (string)");
                        for (var n = e.contextNode; null != n && 9 != n.nodeType; n = n.parentNode) {
                            var r = n.getAttributeNS(h.XML_NAMESPACE_URI, "lang");
                            if (null != r) {
                                t = String(r);
                                break
                            }
                        }
                        if (null == t) return H.false_;
                        var i = arguments[1].evaluate(e).stringValue();
                        return new H(t.substring(0, i.length) == i && (t.length == i.length || "-" == t.charAt(i.length)))
                    }, K.number = function() {
                        var t = arguments[0];
                        if (1 != arguments.length && 2 != arguments.length) throw new Error("Function number expects (object?)");
                        return 1 == arguments.length ? new W(G.prototype.stringForNode(t.contextNode)) : arguments[1].evaluate(t).number()
                    }, K.sum = function() {
                        var t, e = arguments[0];
                        if (2 != arguments.length || !Q.instance_of(t = arguments[1].evaluate(e), G)) throw new Error("Function sum expects (node-set)");
                        t = t.toUnsortedArray();
                        for (var n = 0, r = 0; r < t.length; r++) n += new W(G.prototype.stringForNode(t[r])).numberValue();
                        return new W(n)
                    }, K.floor = function() {
                        var t = arguments[0];
                        if (2 != arguments.length) throw new Error("Function floor expects (number)");
                        return new W(Math.floor(arguments[1].evaluate(t).numberValue()))
                    }, K.ceiling = function() {
                        var t = arguments[0];
                        if (2 != arguments.length) throw new Error("Function ceiling expects (number)");
                        return new W(Math.ceil(arguments[1].evaluate(t).numberValue()))
                    }, K.round = function() {
                        var t = arguments[0];
                        if (2 != arguments.length) throw new Error("Function round expects (number)");
                        return new W(Math.round(arguments[1].evaluate(t).numberValue()))
                    };
                    var Q = new Object;
                    Q.isAttribute = function(t) {
                        return t && (2 === t.nodeType || t.ownerElement)
                    }, Q.splitQName = function(t) {
                        var e = t.indexOf(":");
                        return -1 == e ? [null, t] : [t.substring(0, e), t.substring(e + 1)]
                    }, Q.resolveQName = function(t, e, n, r) {
                        var i = Q.splitQName(t);
                        return null != i[0] ? i[0] = e.getNamespace(i[0], n) : r ? (i[0] = e.getNamespace("", n), null == i[0] && (i[0] = "")) : i[0] = "", i
                    }, Q.isSpace = function(t) {
                        return 9 == t || 13 == t || 10 == t || 32 == t
                    }, Q.isLetter = function(t) {
                        return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 255 || t >= 256 && t <= 305 || t >= 308 && t <= 318 || t >= 321 && t <= 328 || t >= 330 && t <= 382 || t >= 384 && t <= 451 || t >= 461 && t <= 496 || t >= 500 && t <= 501 || t >= 506 && t <= 535 || t >= 592 && t <= 680 || t >= 699 && t <= 705 || 902 == t || t >= 904 && t <= 906 || 908 == t || t >= 910 && t <= 929 || t >= 931 && t <= 974 || t >= 976 && t <= 982 || 986 == t || 988 == t || 990 == t || 992 == t || t >= 994 && t <= 1011 || t >= 1025 && t <= 1036 || t >= 1038 && t <= 1103 || t >= 1105 && t <= 1116 || t >= 1118 && t <= 1153 || t >= 1168 && t <= 1220 || t >= 1223 && t <= 1224 || t >= 1227 && t <= 1228 || t >= 1232 && t <= 1259 || t >= 1262 && t <= 1269 || t >= 1272 && t <= 1273 || t >= 1329 && t <= 1366 || 1369 == t || t >= 1377 && t <= 1414 || t >= 1488 && t <= 1514 || t >= 1520 && t <= 1522 || t >= 1569 && t <= 1594 || t >= 1601 && t <= 1610 || t >= 1649 && t <= 1719 || t >= 1722 && t <= 1726 || t >= 1728 && t <= 1742 || t >= 1744 && t <= 1747 || 1749 == t || t >= 1765 && t <= 1766 || t >= 2309 && t <= 2361 || 2365 == t || t >= 2392 && t <= 2401 || t >= 2437 && t <= 2444 || t >= 2447 && t <= 2448 || t >= 2451 && t <= 2472 || t >= 2474 && t <= 2480 || 2482 == t || t >= 2486 && t <= 2489 || t >= 2524 && t <= 2525 || t >= 2527 && t <= 2529 || t >= 2544 && t <= 2545 || t >= 2565 && t <= 2570 || t >= 2575 && t <= 2576 || t >= 2579 && t <= 2600 || t >= 2602 && t <= 2608 || t >= 2610 && t <= 2611 || t >= 2613 && t <= 2614 || t >= 2616 && t <= 2617 || t >= 2649 && t <= 2652 || 2654 == t || t >= 2674 && t <= 2676 || t >= 2693 && t <= 2699 || 2701 == t || t >= 2703 && t <= 2705 || t >= 2707 && t <= 2728 || t >= 2730 && t <= 2736 || t >= 2738 && t <= 2739 || t >= 2741 && t <= 2745 || 2749 == t || 2784 == t || t >= 2821 && t <= 2828 || t >= 2831 && t <= 2832 || t >= 2835 && t <= 2856 || t >= 2858 && t <= 2864 || t >= 2866 && t <= 2867 || t >= 2870 && t <= 2873 || 2877 == t || t >= 2908 && t <= 2909 || t >= 2911 && t <= 2913 || t >= 2949 && t <= 2954 || t >= 2958 && t <= 2960 || t >= 2962 && t <= 2965 || t >= 2969 && t <= 2970 || 2972 == t || t >= 2974 && t <= 2975 || t >= 2979 && t <= 2980 || t >= 2984 && t <= 2986 || t >= 2990 && t <= 2997 || t >= 2999 && t <= 3001 || t >= 3077 && t <= 3084 || t >= 3086 && t <= 3088 || t >= 3090 && t <= 3112 || t >= 3114 && t <= 3123 || t >= 3125 && t <= 3129 || t >= 3168 && t <= 3169 || t >= 3205 && t <= 3212 || t >= 3214 && t <= 3216 || t >= 3218 && t <= 3240 || t >= 3242 && t <= 3251 || t >= 3253 && t <= 3257 || 3294 == t || t >= 3296 && t <= 3297 || t >= 3333 && t <= 3340 || t >= 3342 && t <= 3344 || t >= 3346 && t <= 3368 || t >= 3370 && t <= 3385 || t >= 3424 && t <= 3425 || t >= 3585 && t <= 3630 || 3632 == t || t >= 3634 && t <= 3635 || t >= 3648 && t <= 3653 || t >= 3713 && t <= 3714 || 3716 == t || t >= 3719 && t <= 3720 || 3722 == t || 3725 == t || t >= 3732 && t <= 3735 || t >= 3737 && t <= 3743 || t >= 3745 && t <= 3747 || 3749 == t || 3751 == t || t >= 3754 && t <= 3755 || t >= 3757 && t <= 3758 || 3760 == t || t >= 3762 && t <= 3763 || 3773 == t || t >= 3776 && t <= 3780 || t >= 3904 && t <= 3911 || t >= 3913 && t <= 3945 || t >= 4256 && t <= 4293 || t >= 4304 && t <= 4342 || 4352 == t || t >= 4354 && t <= 4355 || t >= 4357 && t <= 4359 || 4361 == t || t >= 4363 && t <= 4364 || t >= 4366 && t <= 4370 || 4412 == t || 4414 == t || 4416 == t || 4428 == t || 4430 == t || 4432 == t || t >= 4436 && t <= 4437 || 4441 == t || t >= 4447 && t <= 4449 || 4451 == t || 4453 == t || 4455 == t || 4457 == t || t >= 4461 && t <= 4462 || t >= 4466 && t <= 4467 || 4469 == t || 4510 == t || 4520 == t || 4523 == t || t >= 4526 && t <= 4527 || t >= 4535 && t <= 4536 || 4538 == t || t >= 4540 && t <= 4546 || 4587 == t || 4592 == t || 4601 == t || t >= 7680 && t <= 7835 || t >= 7840 && t <= 7929 || t >= 7936 && t <= 7957 || t >= 7960 && t <= 7965 || t >= 7968 && t <= 8005 || t >= 8008 && t <= 8013 || t >= 8016 && t <= 8023 || 8025 == t || 8027 == t || 8029 == t || t >= 8031 && t <= 8061 || t >= 8064 && t <= 8116 || t >= 8118 && t <= 8124 || 8126 == t || t >= 8130 && t <= 8132 || t >= 8134 && t <= 8140 || t >= 8144 && t <= 8147 || t >= 8150 && t <= 8155 || t >= 8160 && t <= 8172 || t >= 8178 && t <= 8180 || t >= 8182 && t <= 8188 || 8486 == t || t >= 8490 && t <= 8491 || 8494 == t || t >= 8576 && t <= 8578 || t >= 12353 && t <= 12436 || t >= 12449 && t <= 12538 || t >= 12549 && t <= 12588 || t >= 44032 && t <= 55203 || t >= 19968 && t <= 40869 || 12295 == t || t >= 12321 && t <= 12329
                    }, Q.isNCNameChar = function(t) {
                        return t >= 48 && t <= 57 || t >= 1632 && t <= 1641 || t >= 1776 && t <= 1785 || t >= 2406 && t <= 2415 || t >= 2534 && t <= 2543 || t >= 2662 && t <= 2671 || t >= 2790 && t <= 2799 || t >= 2918 && t <= 2927 || t >= 3047 && t <= 3055 || t >= 3174 && t <= 3183 || t >= 3302 && t <= 3311 || t >= 3430 && t <= 3439 || t >= 3664 && t <= 3673 || t >= 3792 && t <= 3801 || t >= 3872 && t <= 3881 || 46 == t || 45 == t || 95 == t || Q.isLetter(t) || t >= 768 && t <= 837 || t >= 864 && t <= 865 || t >= 1155 && t <= 1158 || t >= 1425 && t <= 1441 || t >= 1443 && t <= 1465 || t >= 1467 && t <= 1469 || 1471 == t || t >= 1473 && t <= 1474 || 1476 == t || t >= 1611 && t <= 1618 || 1648 == t || t >= 1750 && t <= 1756 || t >= 1757 && t <= 1759 || t >= 1760 && t <= 1764 || t >= 1767 && t <= 1768 || t >= 1770 && t <= 1773 || t >= 2305 && t <= 2307 || 2364 == t || t >= 2366 && t <= 2380 || 2381 == t || t >= 2385 && t <= 2388 || t >= 2402 && t <= 2403 || t >= 2433 && t <= 2435 || 2492 == t || 2494 == t || 2495 == t || t >= 2496 && t <= 2500 || t >= 2503 && t <= 2504 || t >= 2507 && t <= 2509 || 2519 == t || t >= 2530 && t <= 2531 || 2562 == t || 2620 == t || 2622 == t || 2623 == t || t >= 2624 && t <= 2626 || t >= 2631 && t <= 2632 || t >= 2635 && t <= 2637 || t >= 2672 && t <= 2673 || t >= 2689 && t <= 2691 || 2748 == t || t >= 2750 && t <= 2757 || t >= 2759 && t <= 2761 || t >= 2763 && t <= 2765 || t >= 2817 && t <= 2819 || 2876 == t || t >= 2878 && t <= 2883 || t >= 2887 && t <= 2888 || t >= 2891 && t <= 2893 || t >= 2902 && t <= 2903 || t >= 2946 && t <= 2947 || t >= 3006 && t <= 3010 || t >= 3014 && t <= 3016 || t >= 3018 && t <= 3021 || 3031 == t || t >= 3073 && t <= 3075 || t >= 3134 && t <= 3140 || t >= 3142 && t <= 3144 || t >= 3146 && t <= 3149 || t >= 3157 && t <= 3158 || t >= 3202 && t <= 3203 || t >= 3262 && t <= 3268 || t >= 3270 && t <= 3272 || t >= 3274 && t <= 3277 || t >= 3285 && t <= 3286 || t >= 3330 && t <= 3331 || t >= 3390 && t <= 3395 || t >= 3398 && t <= 3400 || t >= 3402 && t <= 3405 || 3415 == t || 3633 == t || t >= 3636 && t <= 3642 || t >= 3655 && t <= 3662 || 3761 == t || t >= 3764 && t <= 3769 || t >= 3771 && t <= 3772 || t >= 3784 && t <= 3789 || t >= 3864 && t <= 3865 || 3893 == t || 3895 == t || 3897 == t || 3902 == t || 3903 == t || t >= 3953 && t <= 3972 || t >= 3974 && t <= 3979 || t >= 3984 && t <= 3989 || 3991 == t || t >= 3993 && t <= 4013 || t >= 4017 && t <= 4023 || 4025 == t || t >= 8400 && t <= 8412 || 8417 == t || t >= 12330 && t <= 12335 || 12441 == t || 12442 == t || 183 == t || 720 == t || 721 == t || 903 == t || 1600 == t || 3654 == t || 3782 == t || 12293 == t || t >= 12337 && t <= 12341 || t >= 12445 && t <= 12446 || t >= 12540 && t <= 12542
                    }, Q.coalesceText = function(t) {
                        for (var e = t.firstChild; null != e; e = e.nextSibling)
                            if (3 == e.nodeType || 4 == e.nodeType) {
                                var n = e.nodeValue,
                                    r = e;
                                for (e = e.nextSibling; null != e && (3 == e.nodeType || 4 == e.nodeType);) {
                                    n += e.nodeValue;
                                    var i = e;
                                    e = e.nextSibling, i.parentNode.removeChild(i)
                                }
                                if (4 == r.nodeType) {
                                    var o = r.parentNode;
                                    if (null == r.nextSibling) o.removeChild(r), o.appendChild(o.ownerDocument.createTextNode(n));
                                    else {
                                        var s = r.nextSibling;
                                        o.removeChild(r), o.insertBefore(o.ownerDocument.createTextNode(n), s)
                                    }
                                } else r.nodeValue = n;
                                if (null == e) break
                            } else 1 == e.nodeType && Q.coalesceText(e)
                    }, Q.instance_of = function(t, e) {
                        for (; null != t;) {
                            if (t.constructor === e) return !0;
                            if (t === Object) return !1;
                            t = t.constructor.superclass
                        }
                        return !1
                    }, Q.getElementById = function(t, e) {
                        if (1 == t.nodeType && (t.getAttribute("id") == e || t.getAttributeNS(null, "id") == e)) return t;
                        for (var n = t.firstChild; null != n; n = n.nextSibling) {
                            var r = Q.getElementById(n, e);
                            if (null != r) return r
                        }
                        return null
                    };
                    var Z = function() {
                        function t(e, n, r) {
                            var i = Error.call(this, function(e, n) {
                                var r = n ? ": " + n.toString() : "";
                                switch (e) {
                                    case t.INVALID_EXPRESSION_ERR:
                                        return "Invalid expression" + r;
                                    case t.TYPE_ERR:
                                        return "Type error" + r
                                }
                                return null
                            }(e, n) || r);
                            return i.code = e, i.exception = n, i
                        }
                        return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.superclass = Error, t.prototype.toString = function() {
                            return this.message
                        }, t.fromMessage = function(e, n) {
                            return new t(null, n, e)
                        }, t.INVALID_EXPRESSION_ERR = 51, t.TYPE_ERR = 52, t
                    }();

                    function tt(t, e, n) {
                        this.xpath = n.parse(t), this.context = new Y, this.context.namespaceResolver = new et(e)
                    }

                    function et(t) {
                        this.xpathNSResolver = t
                    }

                    function nt(t) {
                        this.node = t, this.namespaceResolver = new J
                    }

                    function rt(t, e) {
                        switch (e == rt.ANY_TYPE && (t.constructor === V ? e = rt.STRING_TYPE : t.constructor === W ? e = rt.NUMBER_TYPE : t.constructor === H ? e = rt.BOOLEAN_TYPE : t.constructor === G && (e = rt.UNORDERED_NODE_ITERATOR_TYPE)), this.resultType = e, e) {
                            case rt.NUMBER_TYPE:
                                return void(this.numberValue = t.numberValue());
                            case rt.STRING_TYPE:
                                return void(this.stringValue = t.stringValue());
                            case rt.BOOLEAN_TYPE:
                                return void(this.booleanValue = t.booleanValue());
                            case rt.ANY_UNORDERED_NODE_TYPE:
                            case rt.FIRST_ORDERED_NODE_TYPE:
                                if (t.constructor === G) return void(this.singleNodeValue = t.first());
                                break;
                            case rt.UNORDERED_NODE_ITERATOR_TYPE:
                            case rt.ORDERED_NODE_ITERATOR_TYPE:
                                if (t.constructor === G) return this.invalidIteratorState = !1, this.nodes = t.toArray(), void(this.iteratorIndex = 0);
                                break;
                            case rt.UNORDERED_NODE_SNAPSHOT_TYPE:
                            case rt.ORDERED_NODE_SNAPSHOT_TYPE:
                                if (t.constructor === G) return this.nodes = t.toArray(), void(this.snapshotLength = this.nodes.length)
                        }
                        throw new Z(Z.TYPE_ERR)
                    }

                    function it(t, e) {
                        t.createExpression = function(t, n) {
                            try {
                                return new tt(t, n, e)
                            } catch (t) {
                                throw new Z(Z.INVALID_EXPRESSION_ERR, t)
                            }
                        }, t.createNSResolver = function(t) {
                            return new nt(t)
                        }, t.evaluate = function(n, r, i, o, s) {
                            if (o < 0 || o > 9) throw {
                                code: 0,
                                toString: function() {
                                    return "Request type not supported"
                                }
                            };
                            return t.createExpression(n, i, e).evaluate(r, o, s)
                        }
                    }
                    tt.prototype = {}, tt.prototype.constructor = tt, tt.superclass = Object.prototype, tt.getOwnerDocument = function(t) {
                        return 9 === t.nodeType ? t : t.ownerDocument
                    }, tt.detectHtmlDom = function(t) {
                        if (!t) return !1;
                        var e = tt.getOwnerDocument(t);
                        try {
                            return e.implementation.hasFeature("HTML", "2.0")
                        } catch (t) {
                            return !0
                        }
                    }, tt.prototype.evaluate = function(t, e, n) {
                        return this.context.expressionContextNode = t, this.context.caseInsensitive = tt.detectHtmlDom(t), new rt(this.xpath.evaluate(this.context), e)
                    }, et.prototype = {}, et.prototype.constructor = et, et.superclass = Object.prototype, et.prototype.getNamespace = function(t, e) {
                        return null == this.xpathNSResolver ? null : this.xpathNSResolver.lookupNamespaceURI(t)
                    }, nt.prototype = {}, nt.prototype.constructor = nt, nt.superclass = Object.prototype, nt.prototype.lookupNamespaceURI = function(t) {
                        return this.namespaceResolver.getNamespace(t, this.node)
                    }, rt.prototype = {}, rt.prototype.constructor = rt, rt.superclass = Object.prototype, rt.prototype.iterateNext = function() {
                        if (this.resultType != rt.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != rt.ORDERED_NODE_ITERATOR_TYPE) throw new Z(Z.TYPE_ERR);
                        return this.nodes[this.iteratorIndex++]
                    }, rt.prototype.snapshotItem = function(t) {
                        if (this.resultType != rt.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != rt.ORDERED_NODE_SNAPSHOT_TYPE) throw new Z(Z.TYPE_ERR);
                        return this.nodes[t]
                    }, rt.ANY_TYPE = 0, rt.NUMBER_TYPE = 1, rt.STRING_TYPE = 2, rt.BOOLEAN_TYPE = 3, rt.UNORDERED_NODE_ITERATOR_TYPE = 4, rt.ORDERED_NODE_ITERATOR_TYPE = 5, rt.UNORDERED_NODE_SNAPSHOT_TYPE = 6, rt.ORDERED_NODE_SNAPSHOT_TYPE = 7, rt.ANY_UNORDERED_NODE_TYPE = 8, rt.FIRST_ORDERED_NODE_TYPE = 9;
                    try {
                        var ot = !0;
                        try {
                            document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XPath", null) && (ot = !1)
                        } catch (t) {}
                        ot && it(document, new c)
                    } catch (t) {}
                    it(t, new c),
                        function() {
                            var e = new c,
                                n = new J,
                                r = new X,
                                i = new q;

                            function o(t) {
                                return {
                                    getNamespace: function(e, r) {
                                        return t(e, r) || n.getNamespace(e, r)
                                    }
                                }
                            }

                            function s(t) {
                                return t && "function" == typeof t.getNamespace ? o((e = t).getNamespace.bind(e)) : "function" == typeof t ? o(t) : "object" == typeof t ? function(t) {
                                    return o((function(e) {
                                        return t[e]
                                    }))
                                }(t) : n;
                                var e
                            }

                            function a(t) {
                                if (null == t || t instanceof V || t instanceof H || t instanceof W || t instanceof G) return t;
                                switch (typeof t) {
                                    case "string":
                                        return new V(t);
                                    case "boolean":
                                        return new H(t);
                                    case "number":
                                        return new W(t)
                                }
                                var e = new G;
                                return e.addArray([].concat(t)), e
                            }

                            function u(t) {
                                return {
                                    getFunction: function(e, n) {
                                        var i = t(e, n);
                                        return i ? function(t) {
                                            return function(e) {
                                                var n = Array.prototype.slice.call(arguments, 1).map((function(t) {
                                                    return t.evaluate(e)
                                                }));
                                                return a(t.apply(this, [].concat(e, n)))
                                            }
                                        }(i) : r.getFunction(e, n)
                                    }
                                }
                            }

                            function l(t) {
                                return t && "function" == typeof t.getFunction ? u((e = t).getFunction.bind(e)) : "function" == typeof t ? u(t) : "object" == typeof t ? function(t) {
                                    return u((function(e) {
                                        return t[e]
                                    }))
                                }(t) : r;
                                var e
                            }

                            function h(t) {
                                return {
                                    getVariable: function(e, n) {
                                        return a(t(e, n))
                                    }
                                }
                            }

                            function d(t, e, n) {
                                t in n && (e[t] = n[t])
                            }

                            function p(t) {
                                var e = new Y;
                                return t ? (e.namespaceResolver = s(t.namespaces), e.functionResolver = l(t.functions), e.variableResolver = function(t) {
                                    if (t) {
                                        if ("function" == typeof t.getVariable) return h(t.getVariable.bind(t));
                                        if ("function" == typeof t) return h(t);
                                        if ("object" == typeof t) return h((function(e) {
                                            return t[e]
                                        }))
                                    }
                                    return i
                                }(t.variables), e.expressionContextNode = t.node, d("allowAnyNamespaceForNoPrefix", e, t), d("isHtml", e, t)) : e.namespaceResolver = n, e
                            }
                            var f = {
                                evaluate: function(t) {
                                    return function(t, e) {
                                        var n = p(e);
                                        return t.evaluate(n)
                                    }(this.expression, t)
                                },
                                evaluateNumber: function(t) {
                                    return this.evaluate(t).numberValue()
                                },
                                evaluateString: function(t) {
                                    return this.evaluate(t).stringValue()
                                },
                                evaluateBoolean: function(t) {
                                    return this.evaluate(t).booleanValue()
                                },
                                evaluateNodeSet: function(t) {
                                    return this.evaluate(t).nodeset()
                                },
                                select: function(t) {
                                    return this.evaluateNodeSet(t).toArray()
                                },
                                select1: function(t) {
                                    return this.select(t)[0]
                                }
                            };
                            t.parse = function(t) {
                                var n = e.parse(t);
                                return Object.create(f, {
                                    expression: {
                                        value: n
                                    }
                                })
                            }
                        }(), l(t, {
                            XPath: h,
                            XPathParser: c,
                            XPathResult: rt,
                            Step: k,
                            PathExpr: M,
                            NodeTest: B,
                            LocationPath: L,
                            OrOperation: m,
                            AndOperation: y,
                            BarOperation: O,
                            EqualsOperation: b,
                            NotEqualOperation: x,
                            LessThanOperation: w,
                            GreaterThanOperation: _,
                            LessThanOrEqualOperation: E,
                            GreaterThanOrEqualOperation: T,
                            PlusOperation: N,
                            MinusOperation: A,
                            MultiplyOperation: S,
                            DivOperation: I,
                            ModOperation: C,
                            UnaryMinusOperation: g,
                            FunctionCall: j,
                            VariableReference: F,
                            XPathContext: Y,
                            XNodeSet: G,
                            XBoolean: H,
                            XString: V,
                            XNumber: W,
                            NamespaceResolver: J,
                            FunctionResolver: X,
                            VariableResolver: q,
                            Utilities: Q
                        }), t.select = function(e, n, r) {
                            return t.selectWithResolver(e, n, null, r)
                        }, t.useNamespaces = function(e) {
                            var n = {
                                mappings: e || {},
                                lookupNamespaceURI: function(t) {
                                    return this.mappings[t]
                                }
                            };
                            return function(e, r, i) {
                                return t.selectWithResolver(e, r, n, i)
                            }
                        }, t.selectWithResolver = function(t, e, n, r) {
                            var i = new tt(t, n, new c),
                                o = rt.ANY_TYPE,
                                s = i.evaluate(e, o, null);
                            return s.resultType == rt.STRING_TYPE ? s = s.stringValue : s.resultType == rt.NUMBER_TYPE ? s = s.numberValue : s.resultType == rt.BOOLEAN_TYPE ? s = s.booleanValue : (s = s.nodes, r && (s = s[0])), s
                        }, t.select1 = function(e, n) {
                            return t.select(e, n, !0)
                        }
                }(e)
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {
            exports: {}
        };
        return t[r](o, o.exports, n), o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var r = {};
    (() => {
        "use strict";
        var t = n(715),
            e = n.n(t),
            r = n(690),
            i = n.n(r),
            o = n(68),
            s = n.n(o),
            a = n(11),
            u = n.n(a),
            l = n(295),
            c = n.n(l);

        function h(t, e = "", n = "") {
            var r = u().parse(t);
            return c()(r, (t => {
                c()(t, (t => {
                    "tag" === t.type ? "page" === t.value ? t.value = "body" : t.value = "wx-" + t.value : "class" === t.type && e ? t.value = e + "--" + t.value : "id" === t.type && n && (t.type = "attribute", t.value = `id='${n+"--"+t.value}'`)
                }))
            })), u().stringify(r)
        }

        function d(t) {
            return !!t && (s()(t.tagName, "WX-") || "BODY" === t.tagName)
        }

        function p(t) {
            var e = "",
                n = t.__wxElement;
            return n && n.__component__ ? e = n.__componentOptions.classPrefix : n && n.classList && (e = n.classList._prefix), e
        }

        function f(t) {
            var e = "",
                n = t.__wxElement;
            return n && n.__component__ ? e = n.__idPrefix : n && n.classList && (e = n.classList._owner && n.classList._owner._elem && n.classList._owner._elem.__idPrefix), e
        }
        var g = n(737),
            v = n.n(g),
            m = n(647),
            y = n.n(m),
            b = n(185),
            x = n.n(b),
            w = n(617),
            _ = n.n(w),
            E = n(78),
            T = n.n(E),
            N = n(704),
            A = n.n(N),
            S = n(829),
            I = n.n(S),
            C = n(626),
            O = n.n(C),
            M = new Map;

        function R(t) {
            var e = t._id;
            return e || (e = v()(), t._id = e), M.set(e, {
                id: e,
                element: t
            }), e
        }

        function P(t) {
            var e = M.get(t);
            if (!e) throw Error("element destroyed");
            return e.element
        }

        function D(t) {
            var e = {
                    elementId: R(t),
                    tagName: t.tagName.toLocaleLowerCase().replace("wx-", "")
                },
                n = x()(t, "__wxElement.__wxTmplId");
            return n && (e.nodeId = n), "video" === e.tagName && (e.videoId = t.__wxElement.id || "", e.parentNodeId = function(t) {
                var e = "",
                    n = t.__wxElement;
                return n && n.__component__ ? e = n.__wxTmplId : n && n.classList && (e = n.classList._owner && n.classList._owner._elem && n.classList._owner._elem.__wxTmplId), e
            }(t)), e
        }

        function L(t, e) {
            var {
                innerText: n,
                textContains: r,
                value: i
            } = e;
            return (!n || y()(x()(t, "innerText") || "") == n) && ((!r || -1 !== y()(x()(t, "innerText") || "").indexOf(r)) && (!i || y()(x()(t.__wxElement, "value") || "") == i))
        }

        function k(t) {
            var {
                elementId: e
            } = t, {
                selector: n,
                innerText: r,
                textContains: o,
                value: s,
                index: a
            } = t, u = P(e);
            n = h(n, p(u), f(u));
            var l = i()(u.querySelectorAll(n)),
                c = [];
            for (var g of l)
                if (d(g) && L(g, {
                        innerText: r,
                        textContains: o,
                        value: s
                    }) && (c.push(D(g)), c.length === a)) break;
            return c
        }

        function B(t) {
            var {
                elementId: e,
                selectorList: n,
                innerText: r,
                textContains: i,
                value: o,
                index: s
            } = t;
            if (0 === n.length) return [];
            var a = n.shift(),
                u = 0 === n.length,
                l = k(Object.assign({
                    elementId: e,
                    selector: a
                }, u ? {
                    innerText: r,
                    textContains: i,
                    value: o,
                    index: s
                } : {}));
            if (0 === l.length) return [];
            if (u) return l;
            var c = l.filter((t => t.nodeId));
            if (0 === c.length) return c;
            var h = [];
            for (var d of c)
                for (var p of B({
                        selectorList: n.slice(),
                        innerText: r,
                        textContains: i,
                        value: o,
                        index: s,
                        elementId: d.elementId
                    }))
                    if (h.push(p), h.length === s) return h;
            return h
        }

        function F(t) {
            var {
                elementId: e
            } = t, {
                selector: n,
                innerText: r,
                textContains: i,
                value: o,
                index: s
            } = t;
            void 0 === s || -1 === s ? s = 0 : s += 1;
            var a = n.split(">>>").map((t => y()(t)));
            if (1 === a.length) return {
                elements: k({
                    elementId: e,
                    selector: n,
                    innerText: r,
                    textContains: i,
                    value: o,
                    index: s
                })
            };
            var u = [];
            for (var l of B({
                    elementId: e,
                    selectorList: a.slice(),
                    innerText: r,
                    textContains: i,
                    value: o,
                    index: s ? s - u.length : 0
                }))
                if (u.push(l), u.length === s) return {
                    elements: u
                };
            return {
                elements: u
            }
        }

        function j() {
            return (j = e()((function*(t) {
                var {
                    elementId: e,
                    names: n
                } = t, r = P(e);
                return {
                    attributes: n.map((t => r.getAttribute(t)))
                }
            }))).apply(this, arguments)
        }

        function U() {
            return (U = e()((function*(t) {
                var {
                    elementId: e,
                    names: n
                } = t, r = P(e), i = getComputedStyle(r);
                return {
                    styles: n.map((t => i[t]))
                }
            }))).apply(this, arguments)
        }

        function V() {
            return (V = e()((function*(t) {
                var {
                    elementId: e,
                    type: n
                } = t, r = P(e);
                return {
                    wxml: W("outer" === n ? r.outerHTML : r.innerHTML)
                }
            }))).apply(this, arguments)
        }

        function W(t) {
            return t = (t = (t = t.replace(/\n/g, "")).replace(/(<wx-text[^>]*>)(<span[^>]*>[^<]*<\/span>)(.*?<\/wx-text>)/g, "$1$3")).replace(/<\/?[^>]*>/g, (t => t.indexOf("<body") > -1 ? "<page>" : "</body>" === t ? "</page>" : 0 !== t.indexOf("<wx-") && 0 !== t.indexOf("</wx-") ? "" : t = (t = (t = (t = t.replace(/wx-/g, "")).replace(/ exparser:[^=]*="[^"]*"/g, "")).replace(/ wx:[^=]*="[^"]*"/g, "")).replace(/ role=""/g, "").replace(/ aria-label=""/g, "")))
        }

        function H() {
            return (H = e()((function*(t) {
                var {
                    elementId: e,
                    names: n
                } = t, r = P(e);
                return {
                    properties: n.map((t => x()(r, t)))
                }
            }))).apply(this, arguments)
        }

        function $() {
            return ($ = e()((function*(t) {
                var {
                    elementId: e,
                    names: n
                } = t, r = P(e).__wxElement;
                return {
                    properties: n.map((t => x()(r, t)))
                }
            }))).apply(this, arguments)
        }

        function G() {
            return (G = e()((function*(t) {
                var e = P(t.elementId).getBoundingClientRect();
                return {
                    left: e.left + window.pageXOffset,
                    top: e.top + window.pageYOffset
                }
            }))).apply(this, arguments)
        }

        function z() {
            return (z = e()((function*(t) {
                var {
                    elementId: e,
                    click: n
                } = t, r = P(e), i = at(r);
                return n ? r.click() : (rt(r, {
                    touches: [Object.assign({}, i)],
                    changedTouches: [Object.assign({}, i)]
                }), yield O()(50), ot(r, {
                    changedTouches: [Object.assign({}, i)]
                })), {
                    pageX: i.pageX,
                    pageY: i.pageY,
                    clientX: i.clientX,
                    clientY: i.clientY
                }
            }))).apply(this, arguments)
        }

        function Y() {
            return (Y = e()((function*(t) {
                var {
                    elementId: e,
                    touches: n,
                    changedTouches: r
                } = t;
                rt(P(e), {
                    touches: n,
                    changedTouches: r
                })
            }))).apply(this, arguments)
        }

        function q() {
            return (q = e()((function*(t) {
                var {
                    elementId: e,
                    touches: n,
                    changedTouches: r
                } = t;
                it(P(e), {
                    touches: n,
                    changedTouches: r
                })
            }))).apply(this, arguments)
        }

        function X() {
            return (X = e()((function*(t) {
                var {
                    elementId: e,
                    touches: n,
                    changedTouches: r
                } = t;
                ot(P(e), {
                    touches: n,
                    changedTouches: r
                })
            }))).apply(this, arguments)
        }

        function J() {
            return (J = e()((function*(t) {
                var {
                    type: e,
                    elementId: n
                } = t, {
                    detail: r
                } = t, i = P(n);
                _()(r) && (r = {}), i.__wxElement.triggerEvent(e, r)
            }))).apply(this, arguments)
        }

        function K() {
            return (K = e()((function*(t) {
                var {
                    elementId: e
                } = t, n = P(e), r = t.events;
                for (var i of r) {
                    var {
                        type: o,
                        interval: s = 0,
                        touches: a,
                        changedTouches: u
                    } = i, l = i.detail;
                    switch (o) {
                        case "touchstart":
                            rt(n, {
                                touches: a,
                                changedTouches: u
                            }), s && (yield O()(s));
                            break;
                        case "touchmove":
                            it(n, {
                                touches: a,
                                changedTouches: u
                            }), s && (yield O()(s));
                            break;
                        case "touchend":
                            ot(n, {
                                touches: a,
                                changedTouches: u
                            }), s && (yield O()(s));
                            break;
                        default:
                            _()(l) && (l = {}), n.__wxElement.triggerEvent(o, l), s && (yield O()(s))
                    }
                }
            }))).apply(this, arguments)
        }

        function Q() {
            return (Q = e()((function*(t) {
                var {
                    functionName: e,
                    args: n,
                    elementId: r
                } = t;
                if (!e) throw Error("functionName is not provided");
                var i = P(r);
                n.unshift(i);
                var o = x()(nt, e);
                if (!o) throw Error(`${e} not exists`);
                return {
                    result: o.apply(null, n)
                }
            }))).apply(this, arguments)
        }

        function Z(t) {
            return tt.apply(this, arguments)
        }

        function tt() {
            return (tt = e()((function*(t) {
                var {
                    eventName: e,
                    elementId: n,
                    ...r
                } = t;
                if (!e) throw Error("eventName is not provided");
                var i = P(n),
                    o = r.$ ? i.__wxElement.$[r.$] : i;
                if (!o) throw Error("target is not found");
                var s = function(t, e, n) {
                    var r = n.eventData || {},
                        i = r.detail || {},
                        o = r.touches || [],
                        s = r.changedTouches || [];
                    o = ut(e, o), s = ut(e, s);
                    var a = document.createEvent("Event");
                    a.initEvent(t, !0, !0), a.touches = o, a.changedTouches = s;
                    var u = {
                        bubbles: !0,
                        capturePhase: !0,
                        composed: !0,
                        extraFields: {
                            _allowWriteOnly: !0,
                            touches: o,
                            changedTouches: s
                        },
                        originalEvent: a
                    };
                    return exparser.Event.create(t, i, u)
                }(e, o, t);
                if ("tap" === e) __virtualDOM__.wrapTapMark((() => {
                    exparser.Event.dispatchEvent(o, s)
                }));
                else if ("scroll" === e) {
                    var a, {
                        scrollTop: u,
                        scrollLeft: l
                    } = (null == t || null === (a = t.eventData) || void 0 === a ? void 0 : a.scrollDetail) || {};
                    if (console.warn("[minitest] element.scroll", u, l, t), o !== document) {
                        var c = o;
                        if ("WX-SCROLL-VIEW" === c.tagName) {
                            var h = o.__wxElement.$;
                            c = h.main.$$ ? h.main.$$ : h.main
                        }
                        isNaN(u) || (c.scrollTop = Number(u)), isNaN(l) || (c.scrollLeft = Number(l))
                    } else isNaN(u) || (document.documentElement.scrollTop = Number(u), document.body.scrollTop = Number(u))
                } else exparser.Event.dispatchEvent(o, s)
            }))).apply(this, arguments)
        }

        function et() {
            return (et = e()((function*(t) {
                var {
                    elementId: e
                } = t, n = P(e), r = t.events;
                for (var i of r) {
                    var {
                        type: o,
                        interval: s = 0,
                        touches: a = [],
                        changedTouches: u = []
                    } = i, l = {};
                    switch (o) {
                        case "touchstart":
                        case "touchmove":
                            (I()(a) || _()(a)) && (l.touches = [at(n)]);
                        case "touchend":
                            (I()(u) || _()(u)) && (l.changedTouches = [at(n)]);
                            break;
                        default:
                            _()(i.detail) && (l.detail = {})
                    }
                    Z({
                        eventName: o,
                        elementId: e,
                        eventData: l
                    }), s && (yield O()(s))
                }
            }))).apply(this, arguments)
        }
        var nt = {
            "scroll-view": {
                scrollTo(t, e, n) {
                    var r = t.__wxElement;
                    r.$.main.$$.scrollLeft = e, r.$.main.$$.scrollTop = n
                },
                scrollTop: t => t.__wxElement.$.main.$$.scrollTop,
                scrollLeft: t => t.__wxElement.$.main.$$.scrollLeft,
                scrollWidth: t => t.__wxElement.$.main.$$.scrollWidth,
                scrollHeight: t => t.__wxElement.$.main.$$.scrollHeight
            },
            swiper: {
                swipeTo(t, e) {
                    var n = t.__wxElement;
                    n.__currentChangeSource = "touch", n.current = e, n._swiping = !0, n._transitioning = !0, n._animateViewport(e, "touch", 0)
                }
            },
            input: {
                input(t, e, n = !1) {
                    var r = t.__wxElement;
                    if (r.onKeyboardComplete) {
                        var i = "ios" === wx.getPlatform();
                        console.warn("input use onKeyboardComplete: " + wx.getPlatform());
                        var o = r._keyboardShow;
                        r._keyboardShow = !0, i && r.publishInputEvent(e, Date.now()), n && r.onKeyboardConfirm({
                            detail: {
                                value: e,
                                inputId: r._inputId
                            }
                        }), r.onKeyboardComplete({
                            detail: {
                                value: e,
                                cursor: e.length,
                                inputId: r._inputId
                            }
                        }), r._keyboardShow = o
                    } else r._inputKey({
                        target: {
                            value: e
                        }
                    }), n && r.triggerEvent("confirm", {
                        value: e
                    }), r._inputBlur({
                        timeStamp: Date.now()
                    }), r._showValueChange(e)
                }
            },
            textarea: {
                input(t, e, n = !1) {
                    var r = t.__wxElement;
                    if (r.onKeyboardComplete) {
                        var i = "ios" === wx.getPlatform();
                        console.warn("input use onKeyboardComplete: " + wx.getPlatform());
                        var o = !1;
                        i && (o = r._keyboardShow, r._keyboardShow = !0, r.triggerEvent("input", {
                            value: e
                        })), n && r.onKeyboardConfirm({
                            detail: {
                                value: e,
                                inputId: r._inputId
                            }
                        }), r.onKeyboardComplete({
                            detail: {
                                value: e,
                                cursor: e.length,
                                inputId: r._inputId
                            }
                        }), i && (r._keyboardShow = o)
                    } else r.onTextAreaInput({
                        target: {
                            value: e
                        }
                    })
                }
            },
            "movable-view": {
                moveTo(t, e, n) {
                    t.__wxElement._animationTo(e, n)
                }
            },
            switch: {
                tap(t) {
                    t.__wxElement.onInputChange()
                }
            },
            slider: {
                slideTo(t, e) {
                    var n = t.__wxElement,
                        r = n.$.step.offsetWidth,
                        i = n.$.step.getBoundingClientRect().left;
                    n._onUserChangedValue({
                        detail: {
                            x: (e - n.min) * r / (n.max - n.min) + i
                        }
                    })
                }
            }
        };

        function rt(t, e = {}) {
            var {
                touches: n = [],
                changedTouches: r = []
            } = e;
            return I()(n) && (n = [at(t)]), I()(r) && (r = [at(t)]), st("touchstart", t, {
                touches: n,
                changedTouches: r
            }), n[0]
        }

        function it(t, e = {}) {
            var {
                touches: n = [],
                changedTouches: r = []
            } = e;
            I()(n) && (n = [at(t)]), I()(r) && (r = [at(t)]), st("touchmove", t, {
                touches: n,
                changedTouches: r
            })
        }

        function ot(t, e = {}) {
            var {
                touches: n = []
            } = e, {
                changedTouches: r = []
            } = e;
            I()(r) && (r = [at(t)]), st("touchend", t, {
                touches: n,
                changedTouches: r
            })
        }

        function st(t, e, n) {
            var {
                touches: r,
                changedTouches: i
            } = n, o = document.createEvent("Event");
            o.initEvent(t, !0, !0), o.touches = ut(e, r), o.changedTouches = ut(e, i), e.dispatchEvent(o)
        }

        function at(t) {
            var e = t.getBoundingClientRect(),
                n = e.left + window.scrollX,
                r = e.top + window.scrollY,
                i = t.offsetWidth,
                o = t.offsetHeight,
                s = n + Math.round(i / 2),
                a = r + Math.round(o / 2);
            return {
                identifier: 0,
                pageX: s < -50 ? -50 : s,
                pageY: a,
                clientX: s - window.scrollX,
                clientY: a - window.scrollY
            }
        }

        function ut(t, e) {
            var n = window.scrollY,
                r = window.scrollX;
            return T()(e, (e => (_()(e.pageX) && e.clientX ? e.pageX = e.clientX + r : e.pageX && _()(e.clientX) && (e.clientX = e.pageX - r), _()(e.pageY) && e.clientY ? e.pageY = e.clientY + n : e.pageY && _()(e.clientY) && (e.clientY = e.pageY - n), A()(e, {
                target: t,
                identifier: 0,
                pageX: 0,
                pageY: 0,
                clientX: 0,
                clientY: 0,
                force: 1
            }), e)))
        }
        var lt = n(298);
        lt.NodeTest.localNameMatches = function(t, e, n) {
            var r = `wx-${t}`,
                i = n.localName || n.nodeName;
            return e.caseInsensitive ? t.toLowerCase() === i.toLowerCase() || r.toLowerCase() === i.toLowerCase() : t === i || r === i
        };
        var ct = lt.PathExpr.applyStep;
        lt.PathExpr.applyStep = function(t, e, n) {
            var r = [];
            if (e.contextNode = n, t.axis === lt.Step.CHILD)
                for (var i = [e.contextNode.firstChild]; i.length > 0;)
                    for (var o = i.shift(); null != o;) {
                        var s = o.localName || o.nodeName;
                        s.startsWith("wx-") || s.startsWith("#") ? t.nodeTest.matches(o, e) && r.push(o) : null != o.firstChild && i.push(o.firstChild), o = o.nextSibling
                    } else r = ct.call(lt.PathExpr, t, e, n);
            return r
        };
        const ht = lt;

        function dt() {
            return dt = e()((function*(t) {
                var {
                    selector: e
                } = t;
                e = h(e);
                var n = window.document.querySelector(e);
                if (d(n) || (n = null), !n) throw Error("no such element");
                return D(n)
            })), dt.apply(this, arguments)
        }

        function pt() {
            return pt = e()((function*(t) {
                var {
                    selector: e
                } = t;
                e = h(e);
                var n = i()(window.document.querySelectorAll(e)),
                    r = [];
                for (var o of n) d(o) && r.push(D(o));
                return {
                    elements: r
                }
            })), pt.apply(this, arguments)
        }

        function ft() {
            return ft = e()((function*(t) {
                var {
                    selector: e
                } = t, n = ht.parse(e).evaluate({
                    node: document.body,
                    isHtml: !0
                }), r = [];
                for (var i of n.nodes) d(i) && r.push(D(i));
                return {
                    elements: r
                }
            })), ft.apply(this, arguments)
        }

        function gt() {
            return gt = e()((function*(t) {
                var {
                    selector: e
                } = t, n = ht.parse(e).evaluate({
                    node: document.body,
                    isHtml: !0
                }), r = n.size > 0 ? n.nodes[0] : null;
                if (d(r) || (r = null), !r) throw Error("no such element");
                return D(r)
            })), gt.apply(this, arguments)
        }
        var vt = {
            "Page.getElement": function(t) {
                return dt.apply(this, arguments)
            },
            "Page.getElements": function(t) {
                return pt.apply(this, arguments)
            },
            "Page.getWindowProperties": function(t) {
                var {
                    names: e
                } = t;
                return {
                    properties: e.map((t => x()(window, t)))
                }
            },
            "Page.getElementByXpath": function(t) {
                return gt.apply(this, arguments)
            },
            "Page.getElementsByXpath": function(t) {
                return ft.apply(this, arguments)
            },
            "Element.getElement": function(t) {
                var {
                    elementId: e
                } = t, {
                    selector: n,
                    innerText: r,
                    textContains: i,
                    value: o
                } = t;
                if (r || i || o) {
                    var s = F({
                        selector: n,
                        innerText: r,
                        textContains: i,
                        value: o,
                        index: 0
                    }).elements;
                    if (0 === s.length) throw Error("no such element");
                    return s[0]
                }
                var a = P(e);
                if (n = h(n, p(a), f(a)), d(a = a.querySelector(n)) || (a = null), !a) throw Error("no such element");
                return D(a)
            },
            "Element.getElements": F,
            "Element.getAttributes": function(t) {
                return j.apply(this, arguments)
            },
            "Element.getStyles": function(t) {
                return U.apply(this, arguments)
            },
            "Element.getWXML": function(t) {
                return V.apply(this, arguments)
            },
            "Element.getDOMProperties": function(t) {
                return H.apply(this, arguments)
            },
            "Element.getProperties": function(t) {
                return $.apply(this, arguments)
            },
            "Element.getOffset": function(t) {
                return G.apply(this, arguments)
            },
            "Element.tap": function(t) {
                return z.apply(this, arguments)
            },
            "Element.touchstart": function(t) {
                return Y.apply(this, arguments)
            },
            "Element.touchmove": function(t) {
                return q.apply(this, arguments)
            },
            "Element.touchend": function(t) {
                return X.apply(this, arguments)
            },
            "Element.triggerEvent": function(t) {
                return J.apply(this, arguments)
            },
            "Element.triggerEvents": function(t) {
                return K.apply(this, arguments)
            },
            "Element.callFunction": function(t) {
                return Q.apply(this, arguments)
            },
            "Element.dispatchEvent": Z,
            "Element.dispatchEvents": function(t) {
                return et.apply(this, arguments)
            }
        };
        const mt = vt;
        var yt = n(697),
            bt = n.n(yt),
            xt = n.g.WeixinJSBridge,
            wt = !1,
            _t = [];

        function Et() {
            wt = !0;
            for (var t = 0, e = _t.length; t < e; t++) _t[t]();
            _t = []
        }
        n.g.__wxConfig.clientDebug = !0;
        var Tt = Object.getOwnPropertyDescriptor(n.g, "WeixinJSBridge");
        xt && xt.on ? Et() : Tt && !1 === Tt.configurable ? bt()((() => n.g.WeixinJSBridge && n.g.WeixinJSBridge.on), 5e3, 50).then((() => {
            xt = n.g.WeixinJSBridge, Et()
        })) : Object.defineProperty(n.g, "WeixinJSBridge", {
            set(t) {
                t && t.on && (xt = t, Et())
            },
            get: () => xt,
            configurable: !0
        });
        const Nt = {
            on: (...t) => xt.on(...t),
            publish: (...t) => xt.publish(...t),
            invoke(...t) {
                var e;
                n.g.__isAppServiceRemoteDebugMode__ && "sendAutoMessage" === t[0] && (null === (e = n.g.__debugMessager) || void 0 === e || e.sendToDevtools(t[0], t[1]));
                return xt.invoke(...t)
            },
            subscribe: (...t) => xt.subscribe(...t),
            onReady(t) {
                wt ? t() : _t.push(t)
            }
        };
        var At = 1,
            St = {};
        Nt.onReady((() => {
            Nt.subscribe("callbackAutoInvoke", (({
                res: t,
                callbackId: e
            }) => {
                var n = St[e];
                n && (n(t), delete St[e])
            }))
        }));
        var It = {
            operateWXData: "operateWXData",
            getPhoneNumber: "getPhoneNumber",
            getUserAutoFillData: "getUserAutoFillData",
            setUserAutoFillData: "setUserAutoFillData",
            deleteUserAutoFillData: "deleteUserAutoFillData",
            requestAuthUserAutoFillData: "requestAuthUserAutoFillData"
        };

        function Ct() {
            return (Ct = e()((function*(t, e) {
                if (mt[t]) return (yield mt[t](e)) || {};
                throw Error(`webview ${t} unimplemented`)
            }))).apply(this, arguments)
        }
        Nt.onReady((() => {
            var t;
            Nt.subscribe("sendAutoMessage", function() {
                var t = e()((function*(t) {
                    var {
                        method: e,
                        params: n,
                        id: r
                    } = t, i = {
                        id: r
                    };
                    try {
                        i.result = yield function(t, e) {
                            return Ct.apply(this, arguments)
                        }(e, n)
                    } catch (t) {
                        i.error = {
                            message: t.message
                        }
                    }
                    Nt.publish("sendAutoMessage", i)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }());
            var r = n.g.__wxConfig;
            if (null != r && null !== (t = r.debugLaunchInfo) && void 0 !== t && t.autoTest) {
                var i = n.g.WeixinJSBridge.invoke;
                Object.defineProperty(n.g.WeixinJSBridge, "invoke", {
                    value(...t) {
                        var [e, r, o, s] = t;
                        return It[e] ? function(t, e, n) {
                            var r = At++;
                            St[r] = n, Nt.publish("callAutoInvoke", {
                                callbackId: r,
                                name: t,
                                args: e
                            })
                        }(e, r, o) : i.apply(n.g.WeixinJSBridge, t)
                    }
                })
            }
        }))
    })()
})();