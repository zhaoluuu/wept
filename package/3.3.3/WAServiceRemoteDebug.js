this.__isAppServiceRemoteDebugMode__ = !0;
var __AppServiceRemoteDebugger__, __WeixinJSCore__ = this.WeixinJSCore;
! function() {
    var e = {
            116: function(e) {
                function t(e, t, r, n, i, s, a) {
                    try {
                        var o = e[s](a),
                            u = o.value
                    } catch (e) {
                        return void r(e)
                    }
                    o.done ? t(u) : Promise.resolve(u).then(n, i)
                }
                e.exports = function(e) {
                    return function() {
                        var r = this,
                            n = arguments;
                        return new Promise((function(i, s) {
                            var a = e.apply(r, n);

                            function o(e) {
                                t(a, i, s, o, u, "next", e)
                            }

                            function u(e) {
                                t(a, i, s, o, u, "throw", e)
                            }
                            o(void 0)
                        }))
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            732: function(e, t, r) {
                var n, i, s;
                ! function(a, o) {
                    "use strict";
                    i = [r(627)], void 0 === (s = "function" == typeof(n = function(e) {
                        var t = /(^|@)\S+:\d+/,
                            r = /^\s*at .*(\S+:\d+|\(native\))/m,
                            n = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(e) {
                                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                                if (e.stack && e.stack.match(r)) return this.parseV8OrIE(e);
                                if (e.stack) return this.parseFFOrSafari(e);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(e) {
                                if (-1 === e.indexOf(":")) return [e];
                                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                                return [t[1], t[2] || void 0, t[3] || void 0]
                            },
                            parseV8OrIE: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !!e.match(r)
                                }), this).map((function(t) {
                                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                                    var r = t.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                                        n = r.match(/ (\((.+):(\d+):(\d+)\)$)/),
                                        i = (r = n ? r.replace(n[0], "") : r).split(/\s+/).slice(1),
                                        s = this.extractLocation(n ? n[1] : i.pop()),
                                        a = i.join(" ") || void 0,
                                        o = ["eval", "<anonymous>"].indexOf(s[0]) > -1 ? void 0 : s[0];
                                    return new e({
                                        functionName: a,
                                        fileName: o,
                                        lineNumber: s[1],
                                        columnNumber: s[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseFFOrSafari: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !e.match(n)
                                }), this).map((function(t) {
                                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                        functionName: t
                                    });
                                    var r = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        n = t.match(r),
                                        i = n && n[1] ? n[1] : void 0,
                                        s = this.extractLocation(t.replace(r, ""));
                                    return new e({
                                        functionName: i,
                                        fileName: s[0],
                                        lineNumber: s[1],
                                        columnNumber: s[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseOpera: function(e) {
                                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                            },
                            parseOpera9: function(t) {
                                for (var r = /Line (\d+).*script (?:in )?(\S+)/i, n = t.message.split("\n"), i = [], s = 2, a = n.length; s < a; s += 2) {
                                    var o = r.exec(n[s]);
                                    o && i.push(new e({
                                        fileName: o[2],
                                        lineNumber: o[1],
                                        source: n[s]
                                    }))
                                }
                                return i
                            },
                            parseOpera10: function(t) {
                                for (var r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = t.stacktrace.split("\n"), i = [], s = 0, a = n.length; s < a; s += 2) {
                                    var o = r.exec(n[s]);
                                    o && i.push(new e({
                                        functionName: o[3] || void 0,
                                        fileName: o[2],
                                        lineNumber: o[1],
                                        source: n[s]
                                    }))
                                }
                                return i
                            },
                            parseOpera11: function(r) {
                                return r.stack.split("\n").filter((function(e) {
                                    return !!e.match(t) && !e.match(/^Error created at/)
                                }), this).map((function(t) {
                                    var r, n = t.split("@"),
                                        i = this.extractLocation(n.pop()),
                                        s = n.shift() || "",
                                        a = s.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    s.match(/\(([^)]*)\)/) && (r = s.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var o = void 0 === r || "[arguments not available]" === r ? void 0 : r.split(",");
                                    return new e({
                                        functionName: a,
                                        args: o,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: t
                                    })
                                }), this)
                            }
                        }
                    }) ? n.apply(t, i) : n) || (e.exports = s)
                }(globalThis)
            },
            295: function(e, t, r) {
                var n = r(953),
                    i = Object.prototype.hasOwnProperty,
                    s = "undefined" != typeof Map;

                function a() {
                    this._array = [], this._set = s ? new Map : Object.create(null)
                }
                a.fromArray = function(e, t) {
                    for (var r = new a, n = 0, i = e.length; n < i; n++) r.add(e[n], t);
                    return r
                }, a.prototype.size = function() {
                    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length
                }, a.prototype.add = function(e, t) {
                    var r = s ? e : n.toSetString(e),
                        a = s ? this.has(e) : i.call(this._set, r),
                        o = this._array.length;
                    a && !t || this._array.push(e), a || (s ? this._set.set(e, o) : this._set[r] = o)
                }, a.prototype.has = function(e) {
                    if (s) return this._set.has(e);
                    var t = n.toSetString(e);
                    return i.call(this._set, t)
                }, a.prototype.indexOf = function(e) {
                    if (s) {
                        var t = this._set.get(e);
                        if (t >= 0) return t
                    } else {
                        var r = n.toSetString(e);
                        if (i.call(this._set, r)) return this._set[r]
                    }
                    throw new Error('"' + e + '" is not in the set.')
                }, a.prototype.at = function(e) {
                    if (e >= 0 && e < this._array.length) return this._array[e];
                    throw new Error("No element indexed by " + e)
                }, a.prototype.toArray = function() {
                    return this._array.slice()
                }, t.I = a
            },
            622: function(e, t, r) {
                var n = r(476);
                t.encode = function(e) {
                    var t, r = "",
                        i = function(e) {
                            return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
                        }(e);
                    do {
                        t = 31 & i, (i >>>= 5) > 0 && (t |= 32), r += n.encode(t)
                    } while (i > 0);
                    return r
                }, t.decode = function(e, t, r) {
                    var i, s, a, o, u = e.length,
                        c = 0,
                        l = 0;
                    do {
                        if (t >= u) throw new Error("Expected more digits in base 64 VLQ value.");
                        if (-1 === (s = n.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                        i = !!(32 & s), c += (s &= 31) << l, l += 5
                    } while (i);
                    r.value = (o = (a = c) >> 1, 1 == (1 & a) ? -o : o), r.rest = t
                }
            },
            476: function(e, t) {
                var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                t.encode = function(e) {
                    if (0 <= e && e < r.length) return r[e];
                    throw new TypeError("Must be between 0 and 63: " + e)
                }, t.decode = function(e) {
                    return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
                }
            },
            879: function(e, t) {
                function r(e, n, i, s, a, o) {
                    var u = Math.floor((n - e) / 2) + e,
                        c = a(i, s[u], !0);
                    return 0 === c ? u : c > 0 ? n - u > 1 ? r(u, n, i, s, a, o) : o == t.LEAST_UPPER_BOUND ? n < s.length ? n : -1 : u : u - e > 1 ? r(e, u, i, s, a, o) : o == t.LEAST_UPPER_BOUND ? u : e < 0 ? -1 : e
                }
                t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function(e, n, i, s) {
                    if (0 === n.length) return -1;
                    var a = r(-1, n.length, e, n, i, s || t.GREATEST_LOWER_BOUND);
                    if (a < 0) return -1;
                    for (; a - 1 >= 0 && 0 === i(n[a], n[a - 1], !0);) --a;
                    return a
                }
            },
            163: function(e, t, r) {
                var n = r(953);

                function i() {
                    this._array = [], this._sorted = !0, this._last = {
                        generatedLine: -1,
                        generatedColumn: 0
                    }
                }
                i.prototype.unsortedForEach = function(e, t) {
                    this._array.forEach(e, t)
                }, i.prototype.add = function(e) {
                    var t, r, i, s, a, o;
                    r = e, i = (t = this._last).generatedLine, s = r.generatedLine, a = t.generatedColumn, o = r.generatedColumn, s > i || s == i && o >= a || n.compareByGeneratedPositionsInflated(t, r) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
                }, i.prototype.toArray = function() {
                    return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
                }, t.H = i
            },
            956: function(e, t) {
                function r(e, t, r) {
                    var n = e[t];
                    e[t] = e[r], e[r] = n
                }

                function n(e, t, i, s) {
                    if (i < s) {
                        var a = i - 1;
                        r(e, (l = i, h = s, Math.round(l + Math.random() * (h - l))), s);
                        for (var o = e[s], u = i; u < s; u++) t(e[u], o) <= 0 && r(e, a += 1, u);
                        r(e, a + 1, u);
                        var c = a + 1;
                        n(e, t, i, c - 1), n(e, t, c + 1, s)
                    }
                    var l, h
                }
                t.U = function(e, t) {
                    n(e, t, 0, e.length - 1)
                }
            },
            176: function(e, t, r) {
                var n = r(953),
                    i = r(879),
                    s = r(295).I,
                    a = r(622),
                    o = r(956).U;

                function u(e, t) {
                    var r = e;
                    return "string" == typeof e && (r = n.parseSourceMapInput(e)), null != r.sections ? new h(r, t) : new c(r, t)
                }

                function c(e, t) {
                    var r = e;
                    "string" == typeof e && (r = n.parseSourceMapInput(e));
                    var i = n.getArg(r, "version"),
                        a = n.getArg(r, "sources"),
                        o = n.getArg(r, "names", []),
                        u = n.getArg(r, "sourceRoot", null),
                        c = n.getArg(r, "sourcesContent", null),
                        l = n.getArg(r, "mappings"),
                        h = n.getArg(r, "file", null);
                    if (i != this._version) throw new Error("Unsupported version: " + i);
                    u && (u = n.normalize(u)), a = a.map(String).map(n.normalize).map((function(e) {
                        return u && n.isAbsolute(u) && n.isAbsolute(e) ? n.relative(u, e) : e
                    })), this._names = s.fromArray(o.map(String), !0), this._sources = s.fromArray(a, !0), this._absoluteSources = this._sources.toArray().map((function(e) {
                        return n.computeSourceURL(u, e, t)
                    })), this.sourceRoot = u, this.sourcesContent = c, this._mappings = l, this._sourceMapURL = t, this.file = h
                }

                function l() {
                    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
                }

                function h(e, t) {
                    var r = e;
                    "string" == typeof e && (r = n.parseSourceMapInput(e));
                    var i = n.getArg(r, "version"),
                        a = n.getArg(r, "sections");
                    if (i != this._version) throw new Error("Unsupported version: " + i);
                    this._sources = new s, this._names = new s;
                    var o = {
                        line: -1,
                        column: 0
                    };
                    this._sections = a.map((function(e) {
                        if (e.url) throw new Error("Support for url field in sections not implemented.");
                        var r = n.getArg(e, "offset"),
                            i = n.getArg(r, "line"),
                            s = n.getArg(r, "column");
                        if (i < o.line || i === o.line && s < o.column) throw new Error("Section offsets must be ordered and non-overlapping.");
                        return o = r, {
                            generatedOffset: {
                                generatedLine: i + 1,
                                generatedColumn: s + 1
                            },
                            consumer: new u(n.getArg(e, "map"), t)
                        }
                    }))
                }
                u.fromSourceMap = function(e, t) {
                    return c.fromSourceMap(e, t)
                }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
                    }
                }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
                    }
                }), u.prototype._charIsMappingSeparator = function(e, t) {
                    var r = e.charAt(t);
                    return ";" === r || "," === r
                }, u.prototype._parseMappings = function(e, t) {
                    throw new Error("Subclasses must implement _parseMappings")
                }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(e, t, r) {
                    var i, s = t || null;
                    switch (r || u.GENERATED_ORDER) {
                        case u.GENERATED_ORDER:
                            i = this._generatedMappings;
                            break;
                        case u.ORIGINAL_ORDER:
                            i = this._originalMappings;
                            break;
                        default:
                            throw new Error("Unknown order of iteration.")
                    }
                    var a = this.sourceRoot;
                    i.map((function(e) {
                        var t = null === e.source ? null : this._sources.at(e.source);
                        return {
                            source: t = n.computeSourceURL(a, t, this._sourceMapURL),
                            generatedLine: e.generatedLine,
                            generatedColumn: e.generatedColumn,
                            originalLine: e.originalLine,
                            originalColumn: e.originalColumn,
                            name: null === e.name ? null : this._names.at(e.name)
                        }
                    }), this).forEach(e, s)
                }, u.prototype.allGeneratedPositionsFor = function(e) {
                    var t = n.getArg(e, "line"),
                        r = {
                            source: n.getArg(e, "source"),
                            originalLine: t,
                            originalColumn: n.getArg(e, "column", 0)
                        };
                    if (r.source = this._findSourceIndex(r.source), r.source < 0) return [];
                    var s = [],
                        a = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, i.LEAST_UPPER_BOUND);
                    if (a >= 0) {
                        var o = this._originalMappings[a];
                        if (void 0 === e.column)
                            for (var u = o.originalLine; o && o.originalLine === u;) s.push({
                                line: n.getArg(o, "generatedLine", null),
                                column: n.getArg(o, "generatedColumn", null),
                                lastColumn: n.getArg(o, "lastGeneratedColumn", null)
                            }), o = this._originalMappings[++a];
                        else
                            for (var c = o.originalColumn; o && o.originalLine === t && o.originalColumn == c;) s.push({
                                line: n.getArg(o, "generatedLine", null),
                                column: n.getArg(o, "generatedColumn", null),
                                lastColumn: n.getArg(o, "lastGeneratedColumn", null)
                            }), o = this._originalMappings[++a]
                    }
                    return s
                }, t.SourceMapConsumer = u, c.prototype = Object.create(u.prototype), c.prototype.consumer = u, c.prototype._findSourceIndex = function(e) {
                    var t, r = e;
                    if (null != this.sourceRoot && (r = n.relative(this.sourceRoot, r)), this._sources.has(r)) return this._sources.indexOf(r);
                    for (t = 0; t < this._absoluteSources.length; ++t)
                        if (this._absoluteSources[t] == e) return t;
                    return -1
                }, c.fromSourceMap = function(e, t) {
                    var r = Object.create(c.prototype),
                        i = r._names = s.fromArray(e._names.toArray(), !0),
                        a = r._sources = s.fromArray(e._sources.toArray(), !0);
                    r.sourceRoot = e._sourceRoot, r.sourcesContent = e._generateSourcesContent(r._sources.toArray(), r.sourceRoot), r.file = e._file, r._sourceMapURL = t, r._absoluteSources = r._sources.toArray().map((function(e) {
                        return n.computeSourceURL(r.sourceRoot, e, t)
                    }));
                    for (var u = e._mappings.toArray().slice(), h = r.__generatedMappings = [], p = r.__originalMappings = [], d = 0, f = u.length; d < f; d++) {
                        var g = u[d],
                            m = new l;
                        m.generatedLine = g.generatedLine, m.generatedColumn = g.generatedColumn, g.source && (m.source = a.indexOf(g.source), m.originalLine = g.originalLine, m.originalColumn = g.originalColumn, g.name && (m.name = i.indexOf(g.name)), p.push(m)), h.push(m)
                    }
                    return o(r.__originalMappings, n.compareByOriginalPositions), r
                }, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
                    get: function() {
                        return this._absoluteSources.slice()
                    }
                }), c.prototype._parseMappings = function(e, t) {
                    for (var r, i, s, u, c, h = 1, p = 0, d = 0, f = 0, g = 0, m = 0, v = e.length, b = 0, y = {}, x = {}, S = [], _ = []; b < v;)
                        if (";" === e.charAt(b)) h++, b++, p = 0;
                        else if ("," === e.charAt(b)) b++;
                    else {
                        for ((r = new l).generatedLine = h, u = b; u < v && !this._charIsMappingSeparator(e, u); u++);
                        if (s = y[i = e.slice(b, u)]) b += i.length;
                        else {
                            for (s = []; b < u;) a.decode(e, b, x), c = x.value, b = x.rest, s.push(c);
                            if (2 === s.length) throw new Error("Found a source, but no line and column");
                            if (3 === s.length) throw new Error("Found a source and line, but no column");
                            y[i] = s
                        }
                        r.generatedColumn = p + s[0], p = r.generatedColumn, s.length > 1 && (r.source = g + s[1], g += s[1], r.originalLine = d + s[2], d = r.originalLine, r.originalLine += 1, r.originalColumn = f + s[3], f = r.originalColumn, s.length > 4 && (r.name = m + s[4], m += s[4])), _.push(r), "number" == typeof r.originalLine && S.push(r)
                    }
                    o(_, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = _, o(S, n.compareByOriginalPositions), this.__originalMappings = S
                }, c.prototype._findMapping = function(e, t, r, n, s, a) {
                    if (e[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
                    if (e[n] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[n]);
                    return i.search(e, t, s, a)
                }, c.prototype.computeColumnSpans = function() {
                    for (var e = 0; e < this._generatedMappings.length; ++e) {
                        var t = this._generatedMappings[e];
                        if (e + 1 < this._generatedMappings.length) {
                            var r = this._generatedMappings[e + 1];
                            if (t.generatedLine === r.generatedLine) {
                                t.lastGeneratedColumn = r.generatedColumn - 1;
                                continue
                            }
                        }
                        t.lastGeneratedColumn = 1 / 0
                    }
                }, c.prototype.originalPositionFor = function(e) {
                    var t = {
                            generatedLine: n.getArg(e, "line"),
                            generatedColumn: n.getArg(e, "column")
                        },
                        r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", n.compareByGeneratedPositionsDeflated, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
                    if (r >= 0) {
                        var i = this._generatedMappings[r];
                        if (i.generatedLine === t.generatedLine) {
                            var s = n.getArg(i, "source", null);
                            null !== s && (s = this._sources.at(s), s = n.computeSourceURL(this.sourceRoot, s, this._sourceMapURL));
                            var a = n.getArg(i, "name", null);
                            return null !== a && (a = this._names.at(a)), {
                                source: s,
                                line: n.getArg(i, "originalLine", null),
                                column: n.getArg(i, "originalColumn", null),
                                name: a
                            }
                        }
                    }
                    return {
                        source: null,
                        line: null,
                        column: null,
                        name: null
                    }
                }, c.prototype.hasContentsOfAllSources = function() {
                    return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some((function(e) {
                        return null == e
                    }))
                }, c.prototype.sourceContentFor = function(e, t) {
                    if (!this.sourcesContent) return null;
                    var r = this._findSourceIndex(e);
                    if (r >= 0) return this.sourcesContent[r];
                    var i, s = e;
                    if (null != this.sourceRoot && (s = n.relative(this.sourceRoot, s)), null != this.sourceRoot && (i = n.urlParse(this.sourceRoot))) {
                        var a = s.replace(/^file:\/\//, "");
                        if ("file" == i.scheme && this._sources.has(a)) return this.sourcesContent[this._sources.indexOf(a)];
                        if ((!i.path || "/" == i.path) && this._sources.has("/" + s)) return this.sourcesContent[this._sources.indexOf("/" + s)]
                    }
                    if (t) return null;
                    throw new Error('"' + s + '" is not in the SourceMap.')
                }, c.prototype.generatedPositionFor = function(e) {
                    var t = n.getArg(e, "source");
                    if ((t = this._findSourceIndex(t)) < 0) return {
                        line: null,
                        column: null,
                        lastColumn: null
                    };
                    var r = {
                            source: t,
                            originalLine: n.getArg(e, "line"),
                            originalColumn: n.getArg(e, "column")
                        },
                        i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
                    if (i >= 0) {
                        var s = this._originalMappings[i];
                        if (s.source === r.source) return {
                            line: n.getArg(s, "generatedLine", null),
                            column: n.getArg(s, "generatedColumn", null),
                            lastColumn: n.getArg(s, "lastGeneratedColumn", null)
                        }
                    }
                    return {
                        line: null,
                        column: null,
                        lastColumn: null
                    }
                }, h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
                    get: function() {
                        for (var e = [], t = 0; t < this._sections.length; t++)
                            for (var r = 0; r < this._sections[t].consumer.sources.length; r++) e.push(this._sections[t].consumer.sources[r]);
                        return e
                    }
                }), h.prototype.originalPositionFor = function(e) {
                    var t = {
                            generatedLine: n.getArg(e, "line"),
                            generatedColumn: n.getArg(e, "column")
                        },
                        r = i.search(t, this._sections, (function(e, t) {
                            return e.generatedLine - t.generatedOffset.generatedLine || e.generatedColumn - t.generatedOffset.generatedColumn
                        })),
                        s = this._sections[r];
                    return s ? s.consumer.originalPositionFor({
                        line: t.generatedLine - (s.generatedOffset.generatedLine - 1),
                        column: t.generatedColumn - (s.generatedOffset.generatedLine === t.generatedLine ? s.generatedOffset.generatedColumn - 1 : 0),
                        bias: e.bias
                    }) : {
                        source: null,
                        line: null,
                        column: null,
                        name: null
                    }
                }, h.prototype.hasContentsOfAllSources = function() {
                    return this._sections.every((function(e) {
                        return e.consumer.hasContentsOfAllSources()
                    }))
                }, h.prototype.sourceContentFor = function(e, t) {
                    for (var r = 0; r < this._sections.length; r++) {
                        var n = this._sections[r].consumer.sourceContentFor(e, !0);
                        if (n) return n
                    }
                    if (t) return null;
                    throw new Error('"' + e + '" is not in the SourceMap.')
                }, h.prototype.generatedPositionFor = function(e) {
                    for (var t = 0; t < this._sections.length; t++) {
                        var r = this._sections[t];
                        if (-1 !== r.consumer._findSourceIndex(n.getArg(e, "source"))) {
                            var i = r.consumer.generatedPositionFor(e);
                            if (i) return {
                                line: i.line + (r.generatedOffset.generatedLine - 1),
                                column: i.column + (r.generatedOffset.generatedLine === i.line ? r.generatedOffset.generatedColumn - 1 : 0)
                            }
                        }
                    }
                    return {
                        line: null,
                        column: null
                    }
                }, h.prototype._parseMappings = function(e, t) {
                    this.__generatedMappings = [], this.__originalMappings = [];
                    for (var r = 0; r < this._sections.length; r++)
                        for (var i = this._sections[r], s = i.consumer._generatedMappings, a = 0; a < s.length; a++) {
                            var u = s[a],
                                c = i.consumer._sources.at(u.source);
                            c = n.computeSourceURL(i.consumer.sourceRoot, c, this._sourceMapURL), this._sources.add(c), c = this._sources.indexOf(c);
                            var l = null;
                            u.name && (l = i.consumer._names.at(u.name), this._names.add(l), l = this._names.indexOf(l));
                            var h = {
                                source: c,
                                generatedLine: u.generatedLine + (i.generatedOffset.generatedLine - 1),
                                generatedColumn: u.generatedColumn + (i.generatedOffset.generatedLine === u.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
                                originalLine: u.originalLine,
                                originalColumn: u.originalColumn,
                                name: l
                            };
                            this.__generatedMappings.push(h), "number" == typeof h.originalLine && this.__originalMappings.push(h)
                        }
                    o(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), o(this.__originalMappings, n.compareByOriginalPositions)
                }
            },
            538: function(e, t, r) {
                var n = r(622),
                    i = r(953),
                    s = r(295).I,
                    a = r(163).H;

                function o(e) {
                    e || (e = {}), this._file = i.getArg(e, "file", null), this._sourceRoot = i.getArg(e, "sourceRoot", null), this._skipValidation = i.getArg(e, "skipValidation", !1), this._sources = new s, this._names = new s, this._mappings = new a, this._sourcesContents = null
                }
                o.prototype._version = 3, o.fromSourceMap = function(e) {
                    var t = e.sourceRoot,
                        r = new o({
                            file: e.file,
                            sourceRoot: t
                        });
                    return e.eachMapping((function(e) {
                        var n = {
                            generated: {
                                line: e.generatedLine,
                                column: e.generatedColumn
                            }
                        };
                        null != e.source && (n.source = e.source, null != t && (n.source = i.relative(t, n.source)), n.original = {
                            line: e.originalLine,
                            column: e.originalColumn
                        }, null != e.name && (n.name = e.name)), r.addMapping(n)
                    })), e.sources.forEach((function(n) {
                        var s = n;
                        null !== t && (s = i.relative(t, n)), r._sources.has(s) || r._sources.add(s);
                        var a = e.sourceContentFor(n);
                        null != a && r.setSourceContent(n, a)
                    })), r
                }, o.prototype.addMapping = function(e) {
                    var t = i.getArg(e, "generated"),
                        r = i.getArg(e, "original", null),
                        n = i.getArg(e, "source", null),
                        s = i.getArg(e, "name", null);
                    this._skipValidation || this._validateMapping(t, r, n, s), null != n && (n = String(n), this._sources.has(n) || this._sources.add(n)), null != s && (s = String(s), this._names.has(s) || this._names.add(s)), this._mappings.add({
                        generatedLine: t.line,
                        generatedColumn: t.column,
                        originalLine: null != r && r.line,
                        originalColumn: null != r && r.column,
                        source: n,
                        name: s
                    })
                }, o.prototype.setSourceContent = function(e, t) {
                    var r = e;
                    null != this._sourceRoot && (r = i.relative(this._sourceRoot, r)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[i.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[i.toSetString(r)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
                }, o.prototype.applySourceMap = function(e, t, r) {
                    var n = t;
                    if (null == t) {
                        if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                        n = e.file
                    }
                    var a = this._sourceRoot;
                    null != a && (n = i.relative(a, n));
                    var o = new s,
                        u = new s;
                    this._mappings.unsortedForEach((function(t) {
                        if (t.source === n && null != t.originalLine) {
                            var s = e.originalPositionFor({
                                line: t.originalLine,
                                column: t.originalColumn
                            });
                            null != s.source && (t.source = s.source, null != r && (t.source = i.join(r, t.source)), null != a && (t.source = i.relative(a, t.source)), t.originalLine = s.line, t.originalColumn = s.column, null != s.name && (t.name = s.name))
                        }
                        var c = t.source;
                        null == c || o.has(c) || o.add(c);
                        var l = t.name;
                        null == l || u.has(l) || u.add(l)
                    }), this), this._sources = o, this._names = u, e.sources.forEach((function(t) {
                        var n = e.sourceContentFor(t);
                        null != n && (null != r && (t = i.join(r, t)), null != a && (t = i.relative(a, t)), this.setSourceContent(t, n))
                    }), this)
                }, o.prototype._validateMapping = function(e, t, r, n) {
                    if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
                    if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || r || n) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)) throw new Error("Invalid mapping: " + JSON.stringify({
                        generated: e,
                        source: r,
                        original: t,
                        name: n
                    }))
                }, o.prototype._serializeMappings = function() {
                    for (var e, t, r, s, a = 0, o = 1, u = 0, c = 0, l = 0, h = 0, p = "", d = this._mappings.toArray(), f = 0, g = d.length; f < g; f++) {
                        if (e = "", (t = d[f]).generatedLine !== o)
                            for (a = 0; t.generatedLine !== o;) e += ";", o++;
                        else if (f > 0) {
                            if (!i.compareByGeneratedPositionsInflated(t, d[f - 1])) continue;
                            e += ","
                        }
                        e += n.encode(t.generatedColumn - a), a = t.generatedColumn, null != t.source && (s = this._sources.indexOf(t.source), e += n.encode(s - h), h = s, e += n.encode(t.originalLine - 1 - c), c = t.originalLine - 1, e += n.encode(t.originalColumn - u), u = t.originalColumn, null != t.name && (r = this._names.indexOf(t.name), e += n.encode(r - l), l = r)), p += e
                    }
                    return p
                }, o.prototype._generateSourcesContent = function(e, t) {
                    return e.map((function(e) {
                        if (!this._sourcesContents) return null;
                        null != t && (e = i.relative(t, e));
                        var r = i.toSetString(e);
                        return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null
                    }), this)
                }, o.prototype.toJSON = function() {
                    var e = {
                        version: this._version,
                        sources: this._sources.toArray(),
                        names: this._names.toArray(),
                        mappings: this._serializeMappings()
                    };
                    return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
                }, o.prototype.toString = function() {
                    return JSON.stringify(this.toJSON())
                }, t.h = o
            },
            702: function(e, t, r) {
                var n = r(538).h,
                    i = r(953),
                    s = /(\r?\n)/,
                    a = "$$$isSourceNode$$$";

                function o(e, t, r, n, i) {
                    this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == r ? null : r, this.name = null == i ? null : i, this[a] = !0, null != n && this.add(n)
                }
                o.fromStringWithSourceMap = function(e, t, r) {
                    var n = new o,
                        a = e.split(s),
                        u = 0,
                        c = function() {
                            return e() + (e() || "");

                            function e() {
                                return u < a.length ? a[u++] : void 0
                            }
                        },
                        l = 1,
                        h = 0,
                        p = null;
                    return t.eachMapping((function(e) {
                        if (null !== p) {
                            if (!(l < e.generatedLine)) {
                                var t = (r = a[u] || "").substr(0, e.generatedColumn - h);
                                return a[u] = r.substr(e.generatedColumn - h), h = e.generatedColumn, d(p, t), void(p = e)
                            }
                            d(p, c()), l++, h = 0
                        }
                        for (; l < e.generatedLine;) n.add(c()), l++;
                        if (h < e.generatedColumn) {
                            var r = a[u] || "";
                            n.add(r.substr(0, e.generatedColumn)), a[u] = r.substr(e.generatedColumn), h = e.generatedColumn
                        }
                        p = e
                    }), this), u < a.length && (p && d(p, c()), n.add(a.splice(u).join(""))), t.sources.forEach((function(e) {
                        var s = t.sourceContentFor(e);
                        null != s && (null != r && (e = i.join(r, e)), n.setSourceContent(e, s))
                    })), n;

                    function d(e, t) {
                        if (null === e || void 0 === e.source) n.add(t);
                        else {
                            var s = r ? i.join(r, e.source) : e.source;
                            n.add(new o(e.originalLine, e.originalColumn, s, t, e.name))
                        }
                    }
                }, o.prototype.add = function(e) {
                    if (Array.isArray(e)) e.forEach((function(e) {
                        this.add(e)
                    }), this);
                    else {
                        if (!e[a] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                        e && this.children.push(e)
                    }
                    return this
                }, o.prototype.prepend = function(e) {
                    if (Array.isArray(e))
                        for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
                    else {
                        if (!e[a] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                        this.children.unshift(e)
                    }
                    return this
                }, o.prototype.walk = function(e) {
                    for (var t, r = 0, n = this.children.length; r < n; r++)(t = this.children[r])[a] ? t.walk(e) : "" !== t && e(t, {
                        source: this.source,
                        line: this.line,
                        column: this.column,
                        name: this.name
                    })
                }, o.prototype.join = function(e) {
                    var t, r, n = this.children.length;
                    if (n > 0) {
                        for (t = [], r = 0; r < n - 1; r++) t.push(this.children[r]), t.push(e);
                        t.push(this.children[r]), this.children = t
                    }
                    return this
                }, o.prototype.replaceRight = function(e, t) {
                    var r = this.children[this.children.length - 1];
                    return r[a] ? r.replaceRight(e, t) : "string" == typeof r ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this
                }, o.prototype.setSourceContent = function(e, t) {
                    this.sourceContents[i.toSetString(e)] = t
                }, o.prototype.walkSourceContents = function(e) {
                    for (var t = 0, r = this.children.length; t < r; t++) this.children[t][a] && this.children[t].walkSourceContents(e);
                    var n = Object.keys(this.sourceContents);
                    for (t = 0, r = n.length; t < r; t++) e(i.fromSetString(n[t]), this.sourceContents[n[t]])
                }, o.prototype.toString = function() {
                    var e = "";
                    return this.walk((function(t) {
                        e += t
                    })), e
                }, o.prototype.toStringWithSourceMap = function(e) {
                    var t = {
                            code: "",
                            line: 1,
                            column: 0
                        },
                        r = new n(e),
                        i = !1,
                        s = null,
                        a = null,
                        o = null,
                        u = null;
                    return this.walk((function(e, n) {
                        t.code += e, null !== n.source && null !== n.line && null !== n.column ? (s === n.source && a === n.line && o === n.column && u === n.name || r.addMapping({
                            source: n.source,
                            original: {
                                line: n.line,
                                column: n.column
                            },
                            generated: {
                                line: t.line,
                                column: t.column
                            },
                            name: n.name
                        }), s = n.source, a = n.line, o = n.column, u = n.name, i = !0) : i && (r.addMapping({
                            generated: {
                                line: t.line,
                                column: t.column
                            }
                        }), s = null, i = !1);
                        for (var c = 0, l = e.length; c < l; c++) 10 === e.charCodeAt(c) ? (t.line++, t.column = 0, c + 1 === l ? (s = null, i = !1) : i && r.addMapping({
                            source: n.source,
                            original: {
                                line: n.line,
                                column: n.column
                            },
                            generated: {
                                line: t.line,
                                column: t.column
                            },
                            name: n.name
                        })) : t.column++
                    })), this.walkSourceContents((function(e, t) {
                        r.setSourceContent(e, t)
                    })), {
                        code: t.code,
                        map: r
                    }
                }
            },
            953: function(e, t) {
                t.getArg = function(e, t, r) {
                    if (t in e) return e[t];
                    if (3 === arguments.length) return r;
                    throw new Error('"' + t + '" is a required argument.')
                };
                var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
                    n = /^data:.+\,.+$/;

                function i(e) {
                    var t = e.match(r);
                    return t ? {
                        scheme: t[1],
                        auth: t[2],
                        host: t[3],
                        port: t[4],
                        path: t[5]
                    } : null
                }

                function s(e) {
                    var t = "";
                    return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
                }

                function a(e) {
                    var r = e,
                        n = i(e);
                    if (n) {
                        if (!n.path) return e;
                        r = n.path
                    }
                    for (var a, o = t.isAbsolute(r), u = r.split(/\/+/), c = 0, l = u.length - 1; l >= 0; l--) "." === (a = u[l]) ? u.splice(l, 1) : ".." === a ? c++ : c > 0 && ("" === a ? (u.splice(l + 1, c), c = 0) : (u.splice(l, 2), c--));
                    return "" === (r = u.join("/")) && (r = o ? "/" : "."), n ? (n.path = r, s(n)) : r
                }

                function o(e, t) {
                    "" === e && (e = "."), "" === t && (t = ".");
                    var r = i(t),
                        o = i(e);
                    if (o && (e = o.path || "/"), r && !r.scheme) return o && (r.scheme = o.scheme), s(r);
                    if (r || t.match(n)) return t;
                    if (o && !o.host && !o.path) return o.host = t, s(o);
                    var u = "/" === t.charAt(0) ? t : a(e.replace(/\/+$/, "") + "/" + t);
                    return o ? (o.path = u, s(o)) : u
                }
                t.urlParse = i, t.urlGenerate = s, t.normalize = a, t.join = o, t.isAbsolute = function(e) {
                    return "/" === e.charAt(0) || r.test(e)
                }, t.relative = function(e, t) {
                    "" === e && (e = "."), e = e.replace(/\/$/, "");
                    for (var r = 0; 0 !== t.indexOf(e + "/");) {
                        var n = e.lastIndexOf("/");
                        if (n < 0) return t;
                        if ((e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
                        ++r
                    }
                    return Array(r + 1).join("../") + t.substr(e.length + 1)
                };
                var u = !("__proto__" in Object.create(null));

                function c(e) {
                    return e
                }

                function l(e) {
                    if (!e) return !1;
                    var t = e.length;
                    if (t < 9) return !1;
                    if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
                    for (var r = t - 10; r >= 0; r--)
                        if (36 !== e.charCodeAt(r)) return !1;
                    return !0
                }

                function h(e, t) {
                    return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1
                }
                t.toSetString = u ? c : function(e) {
                    return l(e) ? "$" + e : e
                }, t.fromSetString = u ? c : function(e) {
                    return l(e) ? e.slice(1) : e
                }, t.compareByOriginalPositions = function(e, t, r) {
                    var n = h(e.source, t.source);
                    return 0 !== n || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) || r || 0 != (n = e.generatedColumn - t.generatedColumn) || 0 != (n = e.generatedLine - t.generatedLine) ? n : h(e.name, t.name)
                }, t.compareByGeneratedPositionsDeflated = function(e, t, r) {
                    var n = e.generatedLine - t.generatedLine;
                    return 0 !== n || 0 != (n = e.generatedColumn - t.generatedColumn) || r || 0 !== (n = h(e.source, t.source)) || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) ? n : h(e.name, t.name)
                }, t.compareByGeneratedPositionsInflated = function(e, t) {
                    var r = e.generatedLine - t.generatedLine;
                    return 0 !== r || 0 != (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = h(e.source, t.source)) || 0 != (r = e.originalLine - t.originalLine) || 0 != (r = e.originalColumn - t.originalColumn) ? r : h(e.name, t.name)
                }, t.parseSourceMapInput = function(e) {
                    return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""))
                }, t.computeSourceURL = function(e, t, r) {
                    if (t = t || "", e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"), t = e + t), r) {
                        var n = i(r);
                        if (!n) throw new Error("sourceMapURL could not be parsed");
                        if (n.path) {
                            var u = n.path.lastIndexOf("/");
                            u >= 0 && (n.path = n.path.substring(0, u + 1))
                        }
                        t = o(s(n), t)
                    }
                    return a(t)
                }
            },
            937: function(e, t, r) {
                r(538).h, t.SourceMapConsumer = r(176).SourceMapConsumer, r(702)
            },
            627: function(e, t) {
                var r, n, i;
                ! function(s, a) {
                    "use strict";
                    n = [], void 0 === (i = "function" == typeof(r = function() {
                        function e(e) {
                            return !isNaN(parseFloat(e)) && isFinite(e)
                        }

                        function t(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }

                        function r(e) {
                            return function() {
                                return this[e]
                            }
                        }
                        var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            i = ["columnNumber", "lineNumber"],
                            s = ["fileName", "functionName", "source"],
                            a = n.concat(i, s, ["args"], ["evalOrigin"]);

                        function o(e) {
                            if (e)
                                for (var r = 0; r < a.length; r++) void 0 !== e[a[r]] && this["set" + t(a[r])](e[a[r]])
                        }
                        o.prototype = {
                            getArgs: function() {
                                return this.args
                            },
                            setArgs: function(e) {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                                this.args = e
                            },
                            getEvalOrigin: function() {
                                return this.evalOrigin
                            },
                            setEvalOrigin: function(e) {
                                if (e instanceof o) this.evalOrigin = e;
                                else {
                                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new o(e)
                                }
                            },
                            toString: function() {
                                var e = this.getFileName() || "",
                                    t = this.getLineNumber() || "",
                                    r = this.getColumnNumber() || "",
                                    n = this.getFunctionName() || "";
                                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + r + ")" : "[eval]:" + t + ":" + r : n ? n + " (" + e + ":" + t + ":" + r + ")" : e + ":" + t + ":" + r
                            }
                        }, o.fromString = function(e) {
                            var t = e.indexOf("("),
                                r = e.lastIndexOf(")"),
                                n = e.substring(0, t),
                                i = e.substring(t + 1, r).split(","),
                                s = e.substring(r + 1);
                            if (0 === s.indexOf("@")) var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(s, ""),
                                u = a[1],
                                c = a[2],
                                l = a[3];
                            return new o({
                                functionName: n,
                                args: i || void 0,
                                fileName: u,
                                lineNumber: c || void 0,
                                columnNumber: l || void 0
                            })
                        };
                        for (var u = 0; u < n.length; u++) o.prototype["get" + t(n[u])] = r(n[u]), o.prototype["set" + t(n[u])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(n[u]);
                        for (var c = 0; c < i.length; c++) o.prototype["get" + t(i[c])] = r(i[c]), o.prototype["set" + t(i[c])] = function(t) {
                            return function(r) {
                                if (!e(r)) throw new TypeError(t + " must be a Number");
                                this[t] = Number(r)
                            }
                        }(i[c]);
                        for (var l = 0; l < s.length; l++) o.prototype["get" + t(s[l])] = r(s[l]), o.prototype["set" + t(s[l])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(s[l]);
                        return o
                    }) ? r.apply(t, n) : r) || (e.exports = i)
                }(globalThis)
            }
        },
        t = {};

    function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n](s, s.exports, r), s.exports
    }
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, {
            a: t
        }), t
    }, r.d = function(e, t) {
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
    }(), r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    var n = {};
    ! function() {
        "use strict";
        r.d(n, {
            default: function() {
                return on
            }
        });
        class e {
            constructor(e) {
                this.delegate = e
            }
            send(e) {
                var t = JSON.stringify(e);
                this.delegate.sendMessage(t)
            }
            sendRaw(e) {
                this.delegate.sendMessage(e)
            }
            set onmessage(e) {
                "function" == typeof e && (this.delegate.onMessage = t => {
                    var r;
                    try {
                        r = JSON.parse(t), e(r)
                    } catch (e) {
                        console.warn("[FATAL]: failed to parse ws payload", e)
                    }
                })
            }
        }
        class t {
            constructor(e) {
                this.delegate = e
            }
            suspend() {
                this.delegate.suspend()
            }
            resume() {
                this.delegate.resume()
            }
        }
        var i = Object.prototype.toString;

        function s(e) {
            return i.call(e).slice(8, -1)
        }

        function a(e) {
            return "Int8Array" === e || "Uint8Array" === e || "Uint8ClampedArray" === e || "Int16Array" === e || "Uint16Array" === e || "Int32Array" === e || "Uint32Array" === e || "Float32Array" === e || "Float64Array" === e
        }

        function o(e) {
            return "Object" === s(e)
        }

        function u(e) {
            return "ArrayBuffer" === s(e)
        }

        function c(e) {
            return a(s(e))
        }

        function l(e) {
            return "DataView" === s(e)
        }

        function h(e) {
            return "Symbol" === s(e)
        }

        function p(e) {
            return "Map" === s(e)
        }

        function d(e) {
            return "Set" === s(e)
        }

        function f(e) {
            return "RegExp" === s(e)
        }
        var g = Number.isNaN || (e => e != e),
            m = (Number.isFinite, e => (e => "Number" === s(e))(e) && Math.abs(e) === 1 / 0);

        function v(e) {
            return "string" == typeof e || "number" == typeof e || "bigint" == typeof e || "boolean" == typeof e || void 0 === e || "symbol" == typeof e
        }

        function b(e) {
            for (var t = 0, r = 3735928559; t < e.length; t++) r = Math.imul(r ^ e.charCodeAt(t), 2654435761);
            return (r ^ r >>> 16) >>> 0
        }

        function y(e = "") {
            return e ? ((Number(e) ^ 16 * Math.random()) >> Number(e) / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, y)
        }
        class x {
            constructor() {
                this.handlers = []
            }
            subscribe(e) {
                this.handlers.push(e)
            }
            unsubscribe(e) {
                this.handlers = this.handlers.filter((t => t !== e))
            }
            publish(e) {
                this.handlers.slice(0).forEach((t => t(e)))
            }
        }
        var S = (e, t) => {
            var r = e.toString(),
                n = t.getRawScriptGroup();
            if (n.length > 0) {
                var i = null;
                for (var s of n) s.rawScript.indexOf(r) > -1 && (i = s);
                if (!i) return "{}";
                try {
                    var {
                        line: a,
                        column: o
                    } = function(e, t) {
                        for (var r = e.split("\n"), n = t.split("\n"), i = 0; i < r.length;) {
                            var s = r[i].indexOf(n[0]);
                            if (s > -1) {
                                for (var a = 1; a < n.length && 0 === r[i + a].indexOf(n[a]);) a++;
                                if (1 === n.length) return {
                                    line: i,
                                    column: s
                                };
                                if (a === n.length) return {
                                    line: i,
                                    column: s
                                }
                            }
                            i++
                        }
                        return {
                            line: -1,
                            column: -1
                        }
                    }(i.rawScript, r);
                    if (-1 === a || -1 === o) return "{}";
                    var u = i.consumer.originalPositionFor({
                        line: a + 1,
                        column: o
                    });
                    if (u.source) {
                        var c = t.getScriptByName(u.source);
                        for (var l of c.functions) {
                            var h = l.location[0],
                                p = l.location[1];
                            if (u.line === h && u.column === p) return c.source.substring(l.start, l.end)
                        }
                    }
                } catch (e) {
                    return t.log("err:", e), "{}"
                }
            }
            return "{}"
        };
        class _ {
            constructor(e, t, r) {
                this.line = e, this.column = t, this.scriptId = r
            }
        }
        class w {
            constructor(e, t, r) {
                this.line = void 0, this.column = void 0, this.scriptId = void 0, this.line = e, this.column = t, this.scriptId = r
            }
        }

        function C(e) {
            var t, r = "undefined";
            return void 0 === e ? r = "undefined" : null === e ? r = "null" : "number" == typeof e ? r = g(e) ? "nan" : m(e) ? "infinity" : "number" : "boolean" == typeof e ? r = "boolean" : "string" == typeof e ? r = "string" : "function" == typeof e ? r = "function" : (t = e, (Array.isArray && "function" == typeof Array.isArray ? Array.isArray(t) : "Array" === s(t)) ? r = "array" : function(e) {
                return "Date" === s(e)
            }(e) ? r = "date" : o(e) ? r = "object" : f(e) ? r = "regexp" : u(e) ? r = "arraybuffer" : c(e) ? r = s(e) : l(e) ? r = "dataview" : h(e) ? r = "symbol" : p(e) ? r = "map" : d(e) ? r = "set" : function(e) {
                return "WeakMap" === s(e)
            }(e) ? r = "weakmap" : function(e) {
                return "WeakSet" === s(e)
            }(e) ? r = "weakset" : (function(e) {
                return "Math" === s(e)
            }(e) || function(e) {
                return "JSON" === s(e)
            }(e) || "object" == typeof e) && (r = "object")), r
        }

        function k(e, t, r, n, i = !1) {
            try {
                return E(e, t, r, n, i)
            } catch (e) {
                return null
            }
        }

        function E(e, t, r, n, i = !1) {
            var u, c, l, p, d = "",
                f = "",
                g = "";
            "null" == t ? (u = "object", c = "null", l = r) : "undefined" === t ? (u = "undefined", l = r) : "string" === t ? (u = "string", l = r) : "number" === t ? (u = "number", l = r) : "boolean" === t ? (u = "boolean", l = r) : "function" === t ? (u = "function", d = "Function", f = "function" == typeof r && r.__wrapped ? r.toString() : S(r, n), p = n.retainObjectGroup(e, r)) : "nan" === t ? (u = "number", f = "NaN", g = "NaN") : "infinity" === t ? (u = "number", f = "Infinity", g = "Infinity") : "array" === t ? (u = "object", c = "array", d = "Array", f = `Array(${r.length})`, p = n.retainObjectGroup(e, r)) : "date" === t ? (u = "object", c = "date", l = r.toString()) : "object" === t ? (u = "object", d = "Object", f = "Object", p = n.retainObjectGroup(e, r)) : "regexp" === t ? (u = "object", c = "regexp", d = "RegExp", f = r.toString(), p = n.retainObjectGroup(e, r)) : "arraybuffer" === t ? (u = "object", c = "arraybuffer", d = "ArrayBuffer", f = `ArrayBuffer(${r.byteLength})`, p = n.retainObjectGroup(e, r)) : a(t) ? (u = "object", c = "typedarray", d = t, f = `${t}(${r.length})`, p = n.retainObjectGroup(e, r)) : "dataview" === t ? (u = "object", c = "dataview", d = "DataView", f = `DateView(${r.byteLength})`, p = n.retainObjectGroup(e, r)) : "symbol" == t ? (u = "symbol", f = r.toString(), p = n.retainObjectGroup(e, r)) : "map" === t ? (u = "object", c = "map", d = "Map", f = `Map(${r.size})`, p = n.retainObjectGroup(e, r)) : "set" === t ? (u = "object", c = "set", d = "Set", f = `Set(${r.size})`, p = n.retainObjectGroup(e, r)) : "weakset" === t ? (u = "object", c = "weakset", d = "WeakSet", f = "WeakSet", p = n.retainObjectGroup(e, r)) : "weakmap" === t && (u = "object", c = "weakmap", d = "WeakMap", f = "WeakMap", p = n.retainObjectGroup(e, r));
            var m = null;
            if (i)
                if ("Object" === d) {
                    var b = !1,
                        y = A(r);
                    y.length > 5 && (b = !0);
                    var x = [];
                    for (var _ of y.slice(0, 5))
                        if ("__proto__" !== _) {
                            var w = r[_],
                                k = C(w),
                                I = "";
                            if (h(_) && (_ = _.toString()), v(w)) {
                                var O = E(e, k, w, n, !1);
                                I = O.value || O.description || ""
                            }
                            var T = {
                                name: _,
                                type: k,
                                value: I
                            };
                            x.push(T)
                        } m = {
                        type: u,
                        subtype: c,
                        description: f,
                        overflow: b,
                        properties: x
                    }
                } else if ("Array" === d) {
                var N = !1,
                    P = r.length;
                P > 100 && (N = !0);
                for (var R = [], L = 0; L < Math.min(P, 100); ++L) {
                    var D = r[L],
                        M = C(D),
                        F = "";
                    if (v(D)) {
                        var V = E(e, M, D, n, !1);
                        F = V.value || V.description || ""
                    } else if (o(D)) F = "Object";
                    else if ("Function" === s(D)) F = "";
                    else {
                        var j = E(e, M, D, n, !1);
                        c = j.subtype, F = j.description || ""
                    }
                    var B = {
                        name: String(L),
                        type: M,
                        value: F
                    };
                    c && (B.subtype = c), R.push(B)
                }
                m = {
                    type: u,
                    subtype: c,
                    description: f,
                    overflow: N,
                    properties: R
                }
            }
            var U = {
                type: u,
                subtype: c,
                value: l,
                className: d,
                description: f,
                objectId: p
            };
            return m && (U.preview = m), g && (U.unserializableValue = g), U
        }

        function I(e, t, r) {
            return E(e, C(t), t, r)
        }

        function A(e) {
            var t = Object.getOwnPropertyNames(e),
                r = Object.getOwnPropertySymbols(e),
                n = function(e) {
                    return c(e) ? ["buffer", "byteLength", "byteOffset", "length"] : u(e) ? ["byteLength", O.int8Array, O.int16Array, O.int32Array, O.Uint8Array] : l(e) ? ["buffer"] : p(e) || d(e) ? ["[[Entries]]", "size"] : f(e) ? ["dotAll", "flags", "ignoreCase", "multiline", "source", "sticky", "unicode"] : o(e) ? ["__proto__"] : []
                }(e);
            return t.concat(r).concat(n)
        }
        var O = {
            int8Array: "[[Int8Array]]",
            int16Array: "[[Int16Array]]",
            int32Array: "[[Int32Array]]",
            Uint8Array: "[[Uint8Array]]"
        };

        function T(e, t) {
            return t.toString = () => `${e}() { [native code] }`, Object.defineProperty(t, "name", {
                writable: !1,
                enumerable: !1,
                configurable: !1,
                value: e
            }), t
        }
        var N = r(937),
            P = r(732),
            R = r.n(P),
            L = "https://servicewechat.com/",
            D = e => `${L}${e}`,
            M = e => e.replace(L, ""),
            F = function(e) {
                return e[e.Idle = 0] = "Idle", e[e.Running = 1] = "Running", e[e.Paused = 2] = "Paused", e
            }({}),
            V = function(e) {
                return e.PausedOnEntry = "PausedOnEntry", e.Ambiguous = "Ambiguous", e
            }({}),
            j = function(e) {
                return e.DebuggerStatement = "debuggerStatement", e.Call = "call", e.Return = "return", e
            }({});
        class B extends _ {
            constructor(e, t, r) {
                super(e, t), this.breakType = void 0, this.breakType = r
            }
        }
        class U {
            constructor(e = "log", t, r) {
                this.type = e, this.messages = t, this.location = r
            }
        }
        class H {
            constructor(e, t, r, n, i, s, a) {
                this.scriptId = e, this.url = t, this.relativePath = r, this.startLocation = n, this.endLocation = i, this.contextId = s, this.hashedScript = a
            }
        }
        class G {
            constructor(e, t, r, n) {
                this.scriptId = e, this.line = t, this.column = r, this.reason = n
            }
        }
        class W {}
        class $ {
            constructor(e, t, r, n) {
                this.error = e, this.line = t, this.column = r, this.scriptId = n, this.id = $.nextId++
            }
        }
        $.nextId = 0;
        class q {
            constructor(e, t) {
                this.scriptId = e, this.url = t, this.id = void 0, this.name = void 0, this.evalFunction = void 0, this.evalInClosure = void 0, this.currentContext = void 0, this.metadata = void 0, this.callSite = void 0, this.interruptable = !1, this.currentDebuggerState = void 0, this.id = q.currentId++
            }
        }
        q.currentId = 0;
        class J {
            constructor(e, t) {
                this.type = e, this.value = t
            }
        }
        var z = "(function _eval(_$expr, _$nextFuncDecl) {\n  return [eval(_$expr), eval(_$nextFuncDecl)]\n}.bind(this))",
            Q = ["error"];
        class K {
            constructor(e, t) {
                this.thread = void 0, this.readFileSync = void 0, this.executionState = F.Idle, this.delegate = void 0, this.subContextGlobal = void 0, this.initialInject = !0, this.scriptsByScriptName = {}, this.scriptsByScriptId = {}, this.scriptByFunctionId = [], this.scriptByInterruptId = [], this.rawScriptGroup = [], this.retainedObjectPool = new Map, this.retainedObjectGroup = new Map, this.logEvent = new x, this.scriptParsedEvent = new x, this.pausedEvent = new x, this.resumedEvent = new x, this.contextCreatedEvent = new x, this.scriptExceptionEvent = new x, this.scriptReceivedEvent = new x, this.attachedPromise = void 0, this.resolveAttachedPromise = void 0, this.originalSubscribeHandler = void 0, this.bridgeBuffer = [], this.totalBreakpointCount = 0, this.hasBreakpoints = !1, this.currentLine = 0, this.currentColumn = 0, this.currentScriptId = 0, this.hasDebuggerStmt = !1, this.callFrames = [], this.metadataSplitted = !1, this.thread = e, this.readFileSync = t;
                var r = this,
                    n = [];
                this.subContextGlobal = {
                    $dbg: {
                        $: T("$", ((e, t, i = -1) => {
                            var s, a = null === (s = n[i]) || void 0 === s ? void 0 : s[t];
                            if (a) return a.bind(null, e);
                            var o = this.metadataSplitted ? this.scriptsByScriptId[i] : this.scriptByFunctionId[t],
                                u = this.metadataSplitted ? t : t - o.functionsRange[0],
                                c = o.functions[u],
                                l = {
                                    scriptId: o.scriptId,
                                    url: `${L}${o.fileName}`,
                                    metadata: c,
                                    name: c.name,
                                    currentDebuggerState: ee.Normal
                                },
                                h = function(e, ...t) {
                                    var n = {
                                        ...l,
                                        id: q.currentId++,
                                        currentContext: this,
                                        interruptable: c.interruptsRequested > 0
                                    };
                                    r.callFrames.push(n), (r.hasBreakpoints || r.hasDebuggerStmt) && r.delegate.handlePushCallFrame();
                                    try {
                                        return e.apply(this, t)
                                    } finally {
                                        (r.hasBreakpoints || r.hasDebuggerStmt) && r.delegate.handlePopCallFrame(), r.callFrames.pop(), n.interruptable && r.releaseObjectGroup(String(n.id))
                                    }
                                };
                            return Object.defineProperty(h, "name", {
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                                value: c.name
                            }), Object.defineProperty(h, "toString", {
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                                value: function() {
                                    return c ? o.source.substring(c.start, c.end) : "{}"
                                }
                            }), h.__wrapped = !0, n[i] || (n[i] = []), n[i][t] = h, h.bind(null, e)
                        })),
                        __: T("__", (e => {
                            this.setEvaluateForCallFrame(e)
                        })),
                        _: T("_", ((e, t, n, i = 0) => {
                            if (this.currentLine = t, this.currentColumn = n, this.currentScriptId = e, i && this.setInterruptableForCurrentCallFrame(), (r.hasBreakpoints || r.hasDebuggerStmt) && this.callFrames[this.callFrames.length - 1].interruptable) {
                                1 === this.callFrames.length && (this.getCurrentCallFrame().scriptId = e);
                                var s = this.delegate && this.delegate.handleInterruptSignal(e, t, n);
                                if (i || s) {
                                    this.executionState = F.Paused;
                                    var a = new G(e, t, n, V.Ambiguous);
                                    this.pausedEvent.publish(a), this.thread.suspend()
                                }
                            }
                        }))
                    },
                    BaseConsole: class {
                        log(...e) {
                            r.logEvent.publish(new U("log", e, new _(r.currentLine, r.currentColumn, r.currentScriptId)))
                        }
                        warn(...e) {
                            r.logEvent.publish(new U("warning", e, new _(r.currentLine, r.currentColumn, r.currentScriptId)))
                        }
                        error(...e) {
                            r.logEvent.publish(new U("error", e, new _(r.currentLine, r.currentColumn, r.currentScriptId)))
                        }
                        info(...e) {
                            r.logEvent.publish(new U("info", e, new _(r.currentLine, r.currentColumn, r.currentScriptId)))
                        }
                        debug(...e) {
                            r.logEvent.publish(new U("debug", e, new _(r.currentLine, r.currentColumn, r.currentScriptId)))
                        }
                        group(...e) {
                            r.logEvent.publish(new U("group", e, new _(r.currentLine, r.currentColumn, r.currentScriptId)))
                        }
                        groupEnd(...e) {
                            r.logEvent.publish(new U("groupEnd", e, new _(r.currentLine, r.currentColumn, r.currentScriptId)))
                        }
                    }
                }, this.attachedPromise = new Promise((e => {
                    this.resolveAttachedPromise = e, setTimeout((() => {
                        e()
                    }), 3e4)
                }))
            }
            setupConsole(e, t) {
                var r = new t;
                Q.forEach((t => {
                    var n = e[t];
                    "function" == typeof e[t] && (e[t] = function() {
                        r[t].apply(r, arguments), n.apply(e, arguments)
                    })
                }))
            }
            notifyEntryCreated() {
                var e = new q(0, "");
                e.name = "global", e.interruptable = !0, this.callFrames.push(e), this.delegate && this.delegate.handlePushCallFrame(), this.executionState = F.Running
            }
            getSubContextGlobals() {
                return this.subContextGlobal
            }
            startBufferBridgeMessages() {
                var e = (...e) => {
                        this.bridgeBuffer.push(e)
                    },
                    t = r.g;
                this.originalSubscribeHandler = t.WeixinJSBridge.subscribeHandler;
                try {
                    Object.defineProperty(t.WeixinJSBridge, "subscribeHandler", {
                        get: () => e
                    })
                } catch (e) {}
            }
            dispatchBridgeMessages() {
                var e = r.g,
                    t = this.originalSubscribeHandler;
                for (var n of (Object.defineProperty(e.WeixinJSBridge, "subscribeHandler", {
                        get: () => t
                    }), this.bridgeBuffer)) e.WeixinJSBridge.subscribeHandler(...n)
            }
            setRuntimeDelegate(e) {
                this.delegate = e
            }
            launch() {
                this.resolveAttachedPromise && this.resolveAttachedPromise()
            }
            runAfterAttached(e = (() => {})) {
                return this.attachedPromise.then((() => {
                    e()
                })).catch((e => {}))
            }
            registerScript(e, t = "", r = "") {
                var n, i = {},
                    s = "",
                    a = "";
                try {
                    var o;
                    if (o = t || (a = `${null!=e?e:""}__debug__/__jscore-debug__`) + ".png", !r) {
                        var u = "app-service.js.map";
                        r = e ? e + u : u
                    }
                    var c = e ? e + "app-service.js" : "app-service.js",
                        l = this.readFileSync(o),
                        h = this.readFileSync(r);
                    s = this.readFileSync(c);
                    try {
                        n = JSON.parse(l)
                    } catch (e) {
                        console.warn("[FATAL] failed to parse metadata")
                    }
                    try {
                        i = JSON.parse(h)
                    } catch (e) {
                        console.warn("[FATAL] failed to parse sourcemap")
                    }
                } catch (e) {
                    console.warn("[FATAL] failed to regsiterScript", e)
                }
                n && (n.fileList ? (this.metadataSplitted = !0, this.internalRegisterScript(this.initialInject, n, i, s, a)) : this.internalRegisterScriptOld(this.initialInject, n, i, s), this.initialInject = !1)
            }
            triggerLogEvent(e = []) {
                this.logEvent.publish(new U("log", e))
            }
            internalRegisterScriptOld(e, t, r, n) {
                var i = new N.SourceMapConsumer(r),
                    s = Object.keys(t.scriptFiles),
                    a = {
                        rawScript: n,
                        consumer: i
                    };
                this.rawScriptGroup.push(a), s.forEach((e => {
                    var r = "";
                    try {
                        r = i.sourceContentFor(e)
                    } catch (e) {
                        console.warn("[FATAL] sourcemap error", e)
                    }
                    var n = t.scriptFiles[e];
                    n.functions = n.functions.map((e => {
                        var r = t.functionMetadataKeys,
                            n = {};
                        return r.forEach(((t, r) => {
                            n[t] = e[r]
                        })), n.interruptsRequested = 0, n
                    })), n.fileName = e, n.source = r, n.consumer = i, n.rawScript = a, this.scriptsByScriptId[n.scriptId] = n, this.scriptsByScriptName[n.fileName] = n;
                    for (var s = n.interruptsRange[0]; s <= n.interruptsRange[1]; ++s) this.scriptByInterruptId[s] = n;
                    for (var o = n.functionsRange[0]; o <= n.functionsRange[1]; ++o) this.scriptByFunctionId[o] = n;
                    this.scriptParsedEvent.publish(new H(n.scriptId, D(e), e, new _(1, 0), new _(1, 0), this.getContextId(), String(b(r))))
                })), e && this.notifyEntryCreated(), this.hasDebuggerStmt = this.hasDebuggerStmt || t.hasDebuggerStmt
            }
            internalRegisterScript(e, t, r, n, i) {
                var s = new N.SourceMapConsumer(r),
                    a = t.fileList,
                    o = {
                        rawScript: n,
                        consumer: s
                    };
                this.rawScriptGroup.push(o);
                var u = !1;
                a.forEach((e => {
                    var r = "";
                    try {
                        r = s.sourceContentFor(e)
                    } catch (e) {
                        console.warn("[FATAL] sourcemap error", e)
                    }
                    var n = void 0;
                    try {
                        var a = this.readFileSync(`${i}/${e}.png`);
                        n = JSON.parse(a)
                    } catch (t) {
                        console.warn("[FATAL] failed to parse metadata for", e)
                    }
                    n && (n.functions = n.functions.map((e => {
                        var r = t.functionMetadataKeys,
                            n = {};
                        return r.forEach(((t, r) => {
                            n[t] = e[r]
                        })), n.interruptsRequested = 0, n
                    })), n.fileName = e, n.source = r, n.consumer = s, n.rawScript = o, this.scriptsByScriptId[n.scriptId] = n, this.scriptsByScriptName[n.fileName] = n, this.scriptParsedEvent.publish(new H(n.scriptId, D(e), e, new _(1, 0), new _(1, 0), this.getContextId(), String(b(r)))), u = n.hasDebuggerStmt)
                })), e && this.notifyEntryCreated(), this.hasDebuggerStmt = this.hasDebuggerStmt || u
            }
            setEvaluateForCallFrame(e) {
                var t = this.callFrames[this.callFrames.length - 1];
                t ? t.evalFunction = e : console.warn("[FATAL] invalid current call frame")
            }
            evaluateOnCallFrame(e, t = this.getCurrentCallFrame(), r = !1, n = !0) {
                if (!t) return new J("undefined", void 0);
                var i = t.evalFunction;
                if (i) {
                    var s;
                    r && !t.evalInClosure && (t.evalInClosure = i.call(t.currentContext, z));
                    try {
                        if (this.delegate && this.delegate.willPerformEvaluate(e), r) {
                            var a = t.evalInClosure,
                                [o, u] = a(e, z);
                            t.evalInClosure = u, s = o
                        } else s = i.call(t.currentContext, e)
                    } catch (e) {
                        if (!n) {
                            var {
                                line: c,
                                column: l
                            } = e;
                            e.message = e.message, e.stack = "", this.scriptExceptionEvent.publish(new $(e, c, l))
                        }
                        return new J("undefined", void 0)
                    } finally {
                        this.delegate && this.delegate.didPerformEvaluate()
                    }
                    var h = C(s);
                    return new J(h, s)
                }
                return new J("undefined", void 0)
            }
            rawEvaluateOnCallFrame(e, t = this.getCurrentCallFrame()) {
                if (!t) return new J("undefined", void 0);
                var r = t.evalFunction;
                if (r) {
                    var n;
                    try {
                        this.delegate && this.delegate.willPerformEvaluate(e), n = r.call(t.currentContext, e)
                    } catch (e) {
                        return new J("undefined", void 0)
                    } finally {
                        this.delegate && this.delegate.didPerformEvaluate()
                    }
                    return n
                }
                return null
            }
            retainObjectGroup(e, t) {
                var r = y();
                return this.retainedObjectPool.set(r, {
                    group: e,
                    reference: t
                }), this.retainedObjectGroup.has(e) || this.retainedObjectGroup.set(e, []), this.retainedObjectGroup.get(e).push(r), r
            }
            releaseObjectGroup(e) {
                var t = this.retainedObjectGroup.get(e);
                if (t) {
                    for (var r of t) this.retainedObjectPool.delete(r);
                    this.retainedObjectGroup.delete(e)
                }
            }
            getRetainedObject(e) {
                var t;
                return null === (t = this.retainedObjectPool.get(e)) || void 0 === t ? void 0 : t.reference
            }
            getRetainedObjectGroup(e) {
                var t;
                return null === (t = this.retainedObjectPool.get(e)) || void 0 === t ? void 0 : t.group
            }
            resumeExecution() {
                this.thread.resume(), this.resumedEvent.publish(new W)
            }
            searchFunctionInLocation(e, t) {
                var r = this.getScriptByScriptId(e).functions;
                for (var n of r) {
                    var i = n.location[0],
                        s = n.location[1],
                        a = n.location[2],
                        o = n.location[3];
                    if (i === a) {
                        if (t.line === i && t.column >= s && t.column <= o) return n
                    } else {
                        if (t.line === i && t.column >= s) return n;
                        if (t.line === a && t.column <= a) return n;
                        if (t.line > i && t.line < a) return n
                    }
                }
                return null
            }
            increaseInterruptForFunction(e) {
                if (e)
                    for (var t of (++e.interruptsRequested, ++this.totalBreakpointCount, this.totalBreakpointCount > 0 && (this.hasBreakpoints = !0), this.callFrames)) t.metadata === e && (t.interruptable = !0)
            }
            decreaseInterruptForFunction(e) {
                e && (--e.interruptsRequested, --this.totalBreakpointCount, this.totalBreakpointCount <= 0 && (this.hasBreakpoints = !1))
            }
            getCallFrames() {
                return this.callFrames
            }
            getGlobalCallFrame() {
                return this.callFrames[0]
            }
            getCallFrameById(e) {
                return this.callFrames.find((t => t.id === e))
            }
            getCurrentCallFrame() {
                var e = this.callFrames[this.callFrames.length - 1];
                return e || console.warn("[FATAL] invalid call frame"), e
            }
            setInterruptableForCurrentCallFrame() {
                var e = this.getCurrentCallFrame();
                e && (e.interruptable = !0)
            }
            setInterruptableForPreviousCallFrame() {
                var e = this.callFrames[this.callFrames.length - 2];
                e && (e.interruptable = !0)
            }
            dispatchError(e) {
                if (this.log("[ERROR]", e), "object" == typeof e && void 0 !== e.message && void 0 !== e.stack) {
                    var t, r = (e => {
                        var t = R().parse(e);
                        if (t.length <= 0) return null;
                        var r = t[0];
                        return {
                            fileName: r.fileName,
                            lineNumber: r.lineNumber,
                            columnNumber: r.columnNumber
                        }
                    })(e);
                    if (r) {
                        e.line = r.lineNumber || 1, e.column = r.columnNumber || 1;
                        var n = this.getScriptByName(r.fileName || "");
                        n && (t = n.scriptId)
                    }
                    this.scriptExceptionEvent.publish(new $(e, e.line, e.column, t))
                } else {
                    var i = new Error;
                    i.message = e, this.scriptExceptionEvent.publish(new $(i, -1, -1))
                }
            }
            getThisObjectOnCurrentCallFrame() {
                var e = this.callFrames[this.callFrames.length - 1];
                if (e && e.evalFunction) {
                    var t = (0, e.evalFunction)("this");
                    if ("object" == typeof t) return t
                }
                return {}
            }
            getPossibleInterrupts(e, t, r) {
                var n, i, s = null !== (n = null === (i = this.scriptsByScriptId[+e]) || void 0 === i ? void 0 : i.interrupts) && void 0 !== n ? n : [],
                    a = [];
                for (var o of s) o[0] === t.line && a.push(new B(o[0], o[1], j.DebuggerStatement));
                return a
            }
            getExecutionState() {
                return this.executionState
            }
            getLogEvent() {
                return this.logEvent
            }
            getScriptParsedEvent() {
                return this.scriptParsedEvent
            }
            getPausedEvent() {
                return this.pausedEvent
            }
            getResumedEvent() {
                return this.resumedEvent
            }
            getContextCreatedEvent() {
                return this.contextCreatedEvent
            }
            getScriptExceptionEvent() {
                return this.scriptExceptionEvent
            }
            getScriptReceivedEvent() {
                return this.scriptReceivedEvent
            }
            getConsumer(e) {
                var t;
                return null === (t = this.scriptsByScriptName[e]) || void 0 === t ? void 0 : t.consumer
            }
            getFunctionMetadata(e) {
                return this.scriptsByScriptName[e].functions
            }
            getScriptByScriptId(e) {
                return this.scriptsByScriptId[e]
            }
            getScriptByName(e) {
                return this.scriptsByScriptName[e]
            }
            getScriptNames() {
                return Object.keys(this.scriptsByScriptName)
            }
            getScriptsWithScriptName() {
                return this.scriptsByScriptName
            }
            findFileByInterruptId(e) {
                return Object.values(this.scriptsByScriptId).find((t => e >= t.interruptsRange[0] && e <= t.interruptsRange[1]))
            }
            findScriptByFunctionId(e) {
                return Object.values(this.scriptsByScriptId).find((t => e >= t.functionsRange[0] && e <= t.functionsRange[1]))
            }
            findScriptById(e) {
                return this.scriptsByScriptId[e]
            }
            getRawScriptGroup() {
                return this.rawScriptGroup
            }
            getContextId() {
                return 1
            }
            isInitialInject() {
                return this.initialInject
            }
            log(...e) {
                this.logEvent.publish(new U("log", e))
            }
        }
        K.globalScriptIndex = 0;
        class X {
            constructor(e, t, r, n) {
                this.scriptId = e, this.line = t, this.column = r, this.condition = n
            }
        }
        var Y, Z, ee = function(e) {
            return e[e.Normal = 0] = "Normal", e[e.StepOver = 1] = "StepOver", e[e.StepInto = 2] = "StepInto", e[e.StepOut = 3] = "StepOut", e[e.SkipAllPauses = 4] = "SkipAllPauses", e[e.ContinueToLocation = 5] = "ContinueToLocation", e
        }({});
        class te {
            constructor(e) {
                this.runtime = void 0, this.breakpoints = [], this.nextBreakpointId = 0, this.pausedOnEntry = !1, this.debuggerState = ee.Normal, this.savedDebuggerState = ee.Normal, this.targetContinueLocation = null, this.breakpointActive = !0, this.runtime = e, this.runtime.setRuntimeDelegate(this)
            }
            setPausedOnEntry(e = !0) {
                this.pausedOnEntry = e
            }
            didResetRuntimeState() {
                this.breakpoints = [], this.debuggerState = ee.Normal, this.savedDebuggerState = ee.Normal
            }
            handleInterruptSignal(e, t, r) {
                if (this.pausedOnEntry) return this.pausedOnEntry = !1, !0;
                if (!this.breakpointActive) return !1;
                if (this.debuggerState === ee.SkipAllPauses) return !1;
                if (this.debuggerState === ee.StepOver) return this.debuggerState = ee.Normal, !0;
                if (this.debuggerState === ee.StepInto) {
                    var n = this.runtime.callFrames[this.runtime.callFrames.length - 1];
                    return n && (n.currentDebuggerState = ee.Normal), this.debuggerState = ee.Normal, !0
                }
                for (var i of this.breakpoints)
                    if (i && i.scriptId === e && t === i.line && r === i.column) return !(i.condition && !this.runtime.rawEvaluateOnCallFrame(i.condition));
                if (this.debuggerState === ee.ContinueToLocation) {
                    if (this.targetContinueLocation) {
                        if (this.targetContinueLocation.line === t) return this.targetContinueLocation = null, this.debuggerState = ee.Normal, !0
                    } else console.warn("[FATAL] ContinueToLocation command without targetContinueLocation");
                    return !1
                }
                return !1
            }
            handlePushCallFrame() {
                var e = this.runtime.callFrames[this.runtime.callFrames.length - 2];
                e && (e.currentDebuggerState = this.debuggerState), this.debuggerState === ee.StepOver && (e && (e.currentDebuggerState = ee.StepOver), this.debuggerState = ee.Normal), e && e.currentDebuggerState === ee.StepInto && (this.debuggerState = ee.StepOver, e && (e.currentDebuggerState = ee.Normal), this.runtime.setInterruptableForCurrentCallFrame())
            }
            handlePopCallFrame() {
                var e = this.runtime.callFrames[this.runtime.callFrames.length - 1];
                if (this.debuggerState !== ee.SkipAllPauses) {
                    e && e.currentDebuggerState === ee.StepOut && (this.debuggerState = ee.StepOver, e.currentDebuggerState = ee.Normal, this.runtime.setInterruptableForPreviousCallFrame()), this.debuggerState === ee.StepOver && (e.currentDebuggerState = ee.Normal, this.runtime.setInterruptableForPreviousCallFrame());
                    var t = this.runtime.callFrames[this.runtime.callFrames.length - 2];
                    t && t.currentDebuggerState === ee.StepOver && (this.debuggerState = ee.StepOver)
                }
            }
            willPerformEvaluate() {
                this.savedDebuggerState = this.debuggerState, this.debuggerState = ee.SkipAllPauses
            }
            didPerformEvaluate() {
                this.debuggerState = this.savedDebuggerState, this.savedDebuggerState = ee.Normal
            }
            setBreakPointByUrlWithCondition(e, t, r) {
                var n = this.runtime.getPossibleInterrupts(e, t, new _(0, 0)),
                    i = t.column,
                    s = n.reduce((function(e, t) {
                        return Math.abs(t.column - i) < Math.abs(e.column - i) ? t : e
                    })),
                    a = this.breakpoints.findIndex((e => e && e.line === t.line && e.column === t.column));
                if (a > -1) return {
                    breakpointId: a,
                    breakpoint: this.breakpoints[a]
                };
                var o = new X(e, s.line, s.column, r),
                    u = this.nextBreakpointId++;
                this.breakpoints[u] = o;
                var c = this.runtime.searchFunctionInLocation(e, t);
                return c ? this.runtime.increaseInterruptForFunction(c) : console.warn("[FATAL] functionIndex is not found"), {
                    breakpointId: u,
                    breakpoint: o
                }
            }
            removeBreakpoint(e) {
                if (void 0 !== e) {
                    var t = this.breakpoints[e];
                    if (t && t.scriptId) {
                        var r = this.runtime.searchFunctionInLocation(t.scriptId, new _(t.line, t.column));
                        r && this.runtime.decreaseInterruptForFunction(r)
                    }
                    this.breakpoints[e] = void 0
                }
            }
            resume() {
                this.debuggerState !== ee.SkipAllPauses && (this.debuggerState = ee.Normal), this.runtime.resumeExecution()
            }
            setSkipAllPauses() {
                this.debuggerState = ee.SkipAllPauses, setTimeout((() => {
                    this.debuggerState = ee.Normal
                }), 0)
            }
            stepOver() {
                this.runtime.getExecutionState() === F.Paused && (this.debuggerState = ee.StepOver, this.runtime.resumeExecution())
            }
            stepInto() {
                this.runtime.getExecutionState() === F.Paused && (this.runtime.callFrames[this.runtime.callFrames.length - 1].currentDebuggerState = ee.StepInto, this.debuggerState = ee.StepInto, this.runtime.resumeExecution())
            }
            stepOut() {
                this.runtime.getExecutionState() === F.Paused && (this.runtime.getCallFrames().length > 1 ? (this.runtime.callFrames[this.runtime.callFrames.length - 1].currentDebuggerState = ee.StepOut, this.debuggerState = ee.StepOut) : this.debuggerState = ee.SkipAllPauses, this.runtime.resumeExecution())
            }
            continueToLocation(e, t, r) {
                if (!(t < 0 || r && r < 0) && this.runtime.getExecutionState() === F.Paused) {
                    this.debuggerState = ee.ContinueToLocation, this.targetContinueLocation = new w(t, r);
                    var n = new _("number" == typeof t ? t : -1, "number" == typeof r ? r : -1),
                        i = this.runtime.searchFunctionInLocation(e, n);
                    i && this.runtime.increaseInterruptForFunction(i), this.runtime.resumeExecution()
                }
            }
            setBreakpointActive(e) {
                this.breakpointActive = e
            }
        }
        class re {
            constructor(e) {
                this.ws = e
            }
            respond(e, t = {}) {
                var r = {
                    id: e,
                    result: t
                };
                this.ws.send(r)
            }
            respondWithTag(e, t, r = {}) {
                var n = {
                    id: t,
                    result: r
                };
                this.ws.sendRaw(e + "_" + JSON.stringify(n))
            }
            fireEvent(e, t = {}) {
                var r = {
                    method: e,
                    params: t
                };
                this.ws.send(r)
            }
            fireEventWithTag(e, t, r = {}) {
                var n = {
                    method: t,
                    params: r
                };
                this.ws.sendRaw(e + "_" + JSON.stringify(n))
            }
        }
        class ne {
            constructor(e, t, r, n, i, s) {
                this.pageInspector = t, this.runtimeInspector = r, this.debugerInspector = n, this.profilerInspector = i, this.fallbackInspector = s, this.ws = void 0, this.ws = e
            }
            dispatch() {
                this.ws.onmessage = e => {
                    var t = e.method;
                    t.startsWith("Page") ? this.pageInspector.handle(e) : t.startsWith("Debugger") ? this.debugerInspector.handle(e) : t.startsWith("Runtime") ? this.runtimeInspector.handle(e) : t.startsWith("Profiler") ? this.profilerInspector.handle(e) : this.fallbackInspector.handle(e)
                }
            }
        }
        class ie extends re {
            constructor(e, t) {
                super(e), this.runtime = void 0, this.runtimeHandlers = void 0, this.runtime = t, this.runtimeHandlers = {
                    "Runtime.enable": this.handleEnableCommand,
                    "Runtime.getIsolateId": this.handleGetIsolateId,
                    "Runtime.runIfWaitingForDebugger": this.handleRunIfWaitingForDebugger,
                    "Runtime.getProperties": this.handleGetProperties,
                    "Runtime.releaseObjectGroup": this.handleReleaseObjectGroup,
                    "Runtime.compileScript": this.handleCompileScript,
                    "Runtime.evaluate": this.handleEvaluate
                }, this.runtime.getLogEvent().subscribe((e => {
                    this.onConsoleOutput(e.type, e.messages, e.location)
                })), this.runtime.getScriptExceptionEvent().subscribe((e => {
                    this.onExceptionThrown(e.id, e.error.message, e.line, e.column, e.error.stack || "", e.scriptId)
                }))
            }
            onConsoleOutput(e, t, r) {
                var n = t.map((e => E("console", C(e), e, this.runtime, !0))),
                    i = this.runtime.getContextId(),
                    s = this.runtime.getCurrentCallFrame(),
                    a = [];
                if (s) {
                    var o = {
                        functionName: s.name || "",
                        scriptId: r ? String(r.scriptId) : "",
                        url: "https://servicewechat.com",
                        lineNumber: r ? r.line - 1 : 0,
                        columnNumber: r ? r.column : 0
                    };
                    a.push(o)
                }
                var u = {
                    type: e,
                    args: n,
                    executionContextId: i,
                    timestamp: Date.now(),
                    stackTrace: {
                        callFrames: a
                    }
                };
                this.fireEvent("Runtime.consoleAPICalled", u)
            }
            onExceptionThrown(e, t, r, n, i, s) {
                var a = {
                    exceptionId: e,
                    text: t + "\n" + i,
                    lineNumber: 1,
                    columnNumber: 1
                };
                void 0 !== s && Object.assign(a, {
                    lineNumber: r - 1,
                    columnNumber: n,
                    scriptId: s.toString()
                });
                var o = {
                    timestamp: Date.now(),
                    exceptionDetails: a
                };
                this.fireEvent("Runtime.exceptionThrown", o)
            }
            handle(e) {
                var t = this.runtimeHandlers[e.method];
                t ? t.call(this, e.id, e.params) : this.respond(e.id)
            }
            handleEnableCommand(e) {
                this.fireExecutionContextCreatedEvent(), this.respond(e)
            }
            handleGetIsolateId(e) {
                this.respond(e, {
                    id: "0"
                })
            }
            handleRunIfWaitingForDebugger(e) {
                this.respond(e), this.runtime.launch()
            }
            handleGetProperties(e, t) {
                var r, n, i, s, a = [],
                    o = {
                        result: a
                    },
                    {
                        objectId: c
                    } = t;
                if (c) {
                    var l = this.runtime.getRetainedObject(c),
                        f = this.runtime.getRetainedObjectGroup(c),
                        g = u(l),
                        m = p(l),
                        v = d(l);
                    try {
                        var b = A(l);
                        for (var y of b) {
                            var x = void 0;
                            if (g && y.startsWith("[[") && y.endsWith("]]")) try {
                                i = l, x = (s = y) === O.int8Array ? new Int8Array(i) : s === O.int16Array ? new Int16Array(i) : s === O.int32Array ? new Int32Array(i) : s === O.Uint8Array ? new Uint8Array(i) : void 0
                            } catch (e) {
                                continue
                            } else m && "[[Entries]]" === y ? (n = l, x = Array.from(n.entries())) : (m || v) && "[[Entries]]" === y ? (r = l, x = Array.from(r.values())) : h(y) ? (x = l[y], y = y.toString()) : x = l[y];
                            var S = k(f, C(x), x, this.runtime);
                            if (S) {
                                var _ = {
                                    name: y,
                                    value: S,
                                    configurable: !1,
                                    enumerable: !1
                                };
                                a.push(_)
                            }
                        }
                    } catch (e) {}
                    this.respond(e, o)
                }
            }
            handleReleaseObjectGroup(e, t) {
                var r = t.objectGroup;
                this.runtime.releaseObjectGroup(r), this.respond(e, {})
            }
            handleCompileScript(e) {
                this.respond(e, {})
            }
            handleEvaluate(e, t) {
                var r = this.runtime.getGlobalCallFrame(),
                    n = "console" === t.objectGroup,
                    i = this.runtime.evaluateOnCallFrame(t.expression, r, n),
                    s = {
                        result: E(t.objectGroup || "default", i.type, i.value, this.runtime, t.generatePreview)
                    };
                this.respond(e, s)
            }
            fireExecutionContextCreatedEvent() {
                var e = {
                    context: {
                        id: this.runtime.getContextId(),
                        origin: "",
                        name: "sub_context"
                    }
                };
                this.fireEvent("Runtime.executionContextCreated", e)
            }
        }
        class se extends re {
            constructor(e, t) {
                super(e), this.runtime = void 0, this.pageCommandHandlers = void 0, this.runtime = t, this.pageCommandHandlers = {
                    "Page.enable": this.handleEnableCommand,
                    "Page.getResourceTree": this.handleGetResourceTreeCommand
                }
            }
            handle(e) {
                var t = this.pageCommandHandlers[e.method];
                t ? t.call(this, e.id, e.params) : this.respond(e.id)
            }
            handleEnableCommand(e, t) {
                this.respond(e, {})
            }
            handleGetResourceTreeCommand(e, t) {
                this.respond(e, {
                    frameTree: {
                        frame: {
                            id: "0",
                            loaderId: "0",
                            name: "test",
                            url: "https://debugger.io/app.js",
                            securityOrigin: "://",
                            mimeType: "text/javascript"
                        },
                        resources: [{
                            url: "https://debugger.io/app.js",
                            type: "Script",
                            mimeType: "text/javascript"
                        }]
                    }
                })
            }
        }
        class ae extends re {
            constructor(e) {
                super(e), this.profilerCommandHandlers = void 0, this.profilerCommandHandlers = {
                    "Profiler.enable": this.handleEnableCommand
                }
            }
            handle(e) {
                var t = this.profilerCommandHandlers[e.method];
                t ? t.call(this, e.id, e.params) : this.respond(e.id)
            }
            handleEnableCommand(e) {
                this.respond(e)
            }
        }
        class oe extends re {
            constructor(e, t, r) {
                super(e), this.runtime = void 0, this.debugger = void 0, this.debuggerHandlers = void 0, this.sourcePathMap = {}, this.runtime = t, this.debugger = r, this.debuggerHandlers = {
                    "Debugger.enable": this.handleEnableCommand,
                    "Debugger.setPauseOnExceptions": this.handleSetPauseOnExceptions,
                    "Debugger.setAsyncCallStackDepth": this.handleSetAsyncCallStackDepth,
                    "Debugger.setBlackboxPatterns": this.handleSetBlackboxPatterns,
                    "Debugger.getScriptSource": this.handleGetScriptSourceCommand,
                    "Debugger.stepOver": this.handleStepOverCommand,
                    "Debugger.stepInto": this.handleStepIntoCommand,
                    "Debugger.stepOut": this.handleStepOutCommand,
                    "Debugger.resume": this.handleResumeCommand,
                    "Debugger.setSkipAllPauses": this.handleSetSkipAllPauses,
                    "Debugger.continueToLocation": this.handleContinueToLocation,
                    "Debugger.getPossibleBreakpoints": this.handleGetPossibleBreakpoints,
                    "Debugger.setBreakpointByUrl": this.handleSetBreakpointByUrl,
                    "Debugger.removeBreakpoint": this.handleRemoveBreakpoint,
                    "Debugger.evaluateOnCallFrame": this.handleEvaluateOnCallFrame,
                    "Debugger.setBreakpointsActive": this.handleSetBreakpointActive
                }, this.runtime.getScriptParsedEvent().subscribe((e => {
                    this.fireSourceParsedEvent(e.scriptId, e.url, e.relativePath, e.startLocation, e.endLocation, e.contextId, e.hashedScript)
                })), this.runtime.getPausedEvent().subscribe((e => {
                    this.firePausedEvent(e.scriptId, e.line, e.column, e.reason)
                })), this.runtime.getResumedEvent().subscribe((() => {
                    this.fireResumedEvent()
                }))
            }
            handle(e) {
                var t = e.id,
                    r = e.method,
                    n = e.params,
                    i = this.debuggerHandlers[r];
                i ? i.call(this, t, n) : this.respond(t)
            }
            handleEnableCommand(e, t) {
                this.respond(e, {
                    debuggerId: "0"
                })
            }
            handleSetPauseOnExceptions(e, t) {
                this.respond(e)
            }
            handleSetAsyncCallStackDepth(e, t) {
                this.respond(e)
            }
            handleSetBlackboxPatterns(e, t) {
                this.respond(e)
            }
            handleGetScriptSourceCommand(e, t) {
                this.respond(e, {
                    scriptSource: this.runtime.getScriptByScriptId(+t.scriptId).source
                })
            }
            handleResumeCommand(e) {
                this.debugger.resume(), this.respond(e)
            }
            handleSetSkipAllPauses(e) {
                this.debugger.setSkipAllPauses(), this.respond(e)
            }
            handleStepOverCommand(e) {
                this.debugger.stepOver(), this.respond(e)
            }
            handleStepIntoCommand(e) {
                this.debugger.stepInto(), this.respond(e)
            }
            handleStepOutCommand(e) {
                this.debugger.stepOut(), this.respond(e)
            }
            handleContinueToLocation(e, t) {
                var r = t.location;
                r.lineNumber && this.debugger.continueToLocation(+r.scriptId, r.lineNumber + 1, r.columnNumber), this.respond(e)
            }
            handleGetPossibleBreakpoints(e, t) {
                var r = t.start.lineNumber || 0,
                    n = t.start.columnNumber || 0,
                    i = t.end ? t.end.lineNumber : 0,
                    s = t.end && t.end.columnNumber ? t.end.columnNumber : 0,
                    a = t.start.scriptId,
                    o = new _(r + 1, n),
                    u = new _(i + 1, s),
                    c = this.runtime.getPossibleInterrupts(+a, o, u),
                    l = [];
                for (var h of c) {
                    var p = {
                        scriptId: a,
                        lineNumber: h.line - 1,
                        columnNumber: h.column,
                        type: h.breakType
                    };
                    l.push(p)
                }
                var d = {
                    locations: l
                };
                this.respond(e, d)
            }
            handleSetBreakpointByUrl(e, t) {
                var r = t.lineNumber,
                    n = t.columnNumber || 0,
                    i = t.condition,
                    s = t.url || "",
                    a = t.urlRegex || "",
                    o = null;
                if (s) o = this.runtime.getScriptByName(M(s));
                else if (a) {
                    var u = new RegExp(a);
                    for (var c of this.runtime.getScriptNames())
                        if (u.test(D(c))) {
                            o = this.runtime.getScriptsWithScriptName()[c];
                            break
                        }
                }
                if (o) {
                    var l = new _(r + 1, n),
                        {
                            breakpointId: h,
                            breakpoint: p
                        } = this.debugger.setBreakPointByUrlWithCondition(o.scriptId, l, i),
                        d = {
                            scriptId: p.scriptId.toString(),
                            lineNumber: p.line - 1,
                            columnNumber: p.column
                        },
                        f = {
                            breakpointId: h.toString(),
                            locations: [d]
                        };
                    this.respond(e, f)
                }
            }
            handleRemoveBreakpoint(e, t) {
                var r = t.breakpointId;
                this.debugger.removeBreakpoint(parseInt(r, 10)), this.respond(e)
            }
            handleEvaluateOnCallFrame(e, t) {
                var r, n = t.callFrameId,
                    i = this.runtime.getCallFrameById(parseInt(n, 10)),
                    s = "console" === t.objectGroup,
                    a = this.runtime.evaluateOnCallFrame(t.expression, i, s, null === (r = t.silent) || void 0 === r || r),
                    o = {
                        result: E(t.objectGroup || "default", a.type, a.value, this.runtime, t.generatePreview)
                    };
                this.respond(e, o)
            }
            handleSetBreakpointActive(e, t) {
                var r = t.active;
                this.debugger.setBreakpointActive(r), this.respond(e)
            }
            fireSourceParsedEvent(e, t, r, n, i, s, a) {
                var o = {
                    url: t,
                    scriptId: e.toString(),
                    startLine: n.line - 1,
                    startColumn: n.column,
                    endLine: i.line,
                    endColumn: n.column,
                    executionContextId: s,
                    hash: a,
                    isLiveEdit: !1,
                    hasSourceURL: !1,
                    isModule: !1,
                    executionContextAuxData: {
                        isDefault: !0
                    },
                    relativePath: M(t),
                    sourceMapURL: ""
                };
                this.sourcePathMap[e.toString()] = M(t), this.fireEventWithTag("asm", "Debugger.scriptParsed", o)
            }
            firePausedEvent(e, t, r, n) {
                for (var i = [], s = this.runtime.getCallFrames().length - 1; s >= 0; s--) {
                    var a = this.runtime.getCallFrames()[s],
                        o = a.callSite,
                        u = void 0 !== o ? o.line - 1 : t - 1,
                        c = void 0 !== o ? o.column : r,
                        l = {
                            scriptId: a.scriptId.toString(),
                            lineNumber: u,
                            columnNumber: c
                        },
                        h = {
                            type: "object",
                            className: "Object",
                            value: a,
                            description: "global"
                        },
                        p = [];
                    if (a.metadata) {
                        for (var d = {}, f = 0, g = a.metadata.scopeBindings.length; f < g; ++f) {
                            var m = a.metadata.scopeBindings[f],
                                v = this.runtime.rawEvaluateOnCallFrame(m, a);
                            d[m] = v
                        }
                        var b = {
                            type: "local",
                            object: I(String(a.id), d, this.runtime),
                            name: a.name
                        };
                        p.push(b)
                    }
                    var y = null;
                    a.metadata && (y = {
                        lineNumber: a.metadata.location[0] - 1,
                        columnNumber: a.metadata.location[1],
                        scriptId: a.scriptId.toString()
                    });
                    var x = {
                        callFrameId: String(a.id),
                        functionName: a.name,
                        location: l,
                        url: a.url,
                        scopeChain: p,
                        this: h
                    };
                    y && (x.functionLocation = y), i.push(x)
                }
                var S = {
                    callFrames: i,
                    reason: "ambiguous"
                };
                this.fireEvent("Debugger.paused", S)
            }
            fireResumedEvent() {
                this.fireEvent("Debugger.resumed")
            }
        }
        class ue extends re {
            constructor(e) {
                super(e)
            }
            handle(e) {
                var t = e.id;
                this.respond(t)
            }
        }

        function ce(e) {
            if (!e) return "text/plain";
            for (var t = ["Content-Type", "content-type", "Content-type", "content-Type"], r = 0; r < t.length; r++) {
                var n = t[r];
                if ("string" == typeof e[n]) return e[n].split(";")[0]
            }
            return "text/plain"
        }
        var le, he, pe, de, fe, ge, me, ve, be, ye, xe, Se = {
                request: 1,
                download: 2,
                upload: 3,
                socket: 4
            },
            _e = 0,
            we = 0,
            Ce = 0,
            ke = 0,
            Ee = {
                request: {},
                download: {},
                upload: {},
                socket: {}
            },
            Ie = {
                request: {},
                download: {},
                upload: {},
                socket: {}
            },
            Ae = {
                request: {},
                download: {},
                upload: {},
                socket: {}
            };

        function Oe(e) {
            return JSON.parse(JSON.stringify(e))
        }

        function Te(e) {
            return __wxConfig.wmpfDirectInvokeJs ? e : JSON.parse(e) || {}
        }

        function Ne(e, t) {
            var r = (t || "").toLowerCase(),
                n = Ae[r] || {},
                i = Ee[r];
            return n[e] && i ? function(e, t) {
                var r = (t || "").toLowerCase(),
                    n = Ee[r];
                if (!n) return null;
                for (var i = Object.keys(n), s = 0; s < i.length; s++) {
                    var a = i[s];
                    if (n[a].id === e) return n[a]
                }
                return null
            }(n[e], r) : null
        }
        class Pe {
            constructor(e) {
                this.messager = void 0, this.messager = e, this._init()
            }
            _init() {
                var e = this.messager.getInstance();
                e.onReceiveNetworkHeader = this.onReceiveNetworkHeader.bind(this), e.registerCallback(this.onReceiveDevtoolsMessage.bind(this))
            }
            onReceiveNetworkHeader(e) {
                try {
                    var t = JSON.parse(e);
                    if (!t.task_id || !t.api_name || !t.request_headers) return;
                    t.api_name = t.api_name.toLowerCase();
                    var r = t.api_name,
                        n = t.task_id,
                        i = `${Se[r]}.${n}`,
                        s = Ie[r],
                        a = JSON.parse(t.request_headers);
                    s[i] = {
                        ...s[i] || {},
                        requestHeaders: a,
                        requestTimestamp: t.timestamp || Date.now()
                    };
                    var {
                        info: o
                    } = Ne(n, t.api_name) || {
                        info: {}
                    }, u = {
                        method: "Network.requestWillBeSent",
                        params: {
                            requestId: i,
                            documentURL: a.Referer || a.referer,
                            request: {
                                url: o.url,
                                method: o.method,
                                postData: o.data,
                                headers: a
                            },
                            timestamp: (s[i].requestTimestamp || Date.now()) / 1e3,
                            type: "XHR"
                        }
                    };
                    this.messager.sendToDevtools("__networkDebug", u)
                } catch (e) {
                    console.error(e)
                }
            }
            onReceiveDevtoolsMessage(e, t) {
                if ("__getNetworkResponseBody" === e) try {
                    var r = JSON.parse(t),
                        {
                            id: n,
                            api: i,
                            devtoolsMsgId: s
                        } = r,
                        a = Ne(n, i) || {};
                    a.data && this.messager.sendToDevtools("__networkDebug", {
                        id: s,
                        result: {
                            body: a.data,
                            base64Encoded: !1
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                if ("__resetNetworkCache" === e)
                    for (var o = Object.keys(Ee), u = 0; u < o.length; u++)
                        for (var c = o[u], l = Ee[c], h = Object.keys(l), p = 0; p < h.length; p++) {
                            var d = l[h[p]];
                            "success" !== d.state && "fail" !== d.state || (d.data = void 0, d.info = void 0, d.responseHeaders = void 0)
                        }
            }
            invokeNetworkMethods(e, t, r) {
                this._invokeRequestTask(e, t, r), this._invokeDownloadTask(e, t, r), this._invokeUploadTask(e, t, r), this._invokeSocketTask(e, t, r)
            }
            _invokeRequestTask(e, t, r) {
                if ("createRequestTask" === t || "createRequestTaskAsync" === t) {
                    var n = Te(r),
                        i = ++_e;
                    return Ee.request[e] = {
                        id: String(i),
                        api: "request",
                        info: {
                            url: n.url,
                            method: n.method || "GET",
                            data: n.data || n.formData || void 0
                        },
                        state: "requestSent",
                        data: null
                    }, JSON.stringify({
                        errMsg: `${t}:ok`,
                        requestTaskId: String(i)
                    })
                }
            }
            _invokeDownloadTask(e, t, r) {
                if ("createDownloadTask" === t || "createDownloadTaskAsync" === t) {
                    var n = ++we,
                        i = Te(r);
                    return Ee.download[e] = {
                        id: String(n),
                        api: "download",
                        info: {
                            url: i.url,
                            method: i.method || "GET",
                            data: i.data || i.formData || void 0
                        },
                        state: "requestSent",
                        data: null
                    }, JSON.stringify({
                        errMsg: `${t}:ok`,
                        downloadTaskId: String(n)
                    })
                }
            }
            _invokeUploadTask(e, t, r) {
                if ("createUploadTask" === t || "createUploadTaskAsync" === t) {
                    var n = ++Ce,
                        i = Te(r);
                    return Ee.upload[e] = {
                        id: String(n),
                        api: "upload",
                        info: {
                            url: i.url,
                            method: i.method || "POST",
                            data: i.data || i.formData || void 0
                        },
                        state: "requestSent",
                        data: null
                    }, JSON.stringify({
                        errMsg: `${t}:ok`,
                        uploadTaskId: String(n)
                    })
                }
            }
            _invokeSocketTask(e, t, r) {
                if ("createSocketTask" === t || "createSocketTaskAsync" === t) {
                    var n = ++ke,
                        i = Te(r);
                    return Ee.socket[e] = {
                        id: String(n),
                        api: "socket",
                        info: {
                            url: i.url,
                            data: i.data || i.formData || void 0
                        },
                        state: "requestSent",
                        data: ""
                    }, JSON.stringify({
                        errMsg: `${t}:ok`,
                        socketTaskId: String(n)
                    })
                }
            }
            invokeCallbackNetworkMethods(e, t) {
                Ee.request[e] && t.requestTaskId && (Ae.request[t.requestTaskId] = Ee.request[e].id), Ee.download[e] && t.downloadTaskId && (Ae.download[t.downloadTaskId] = Ee.download[e].id), Ee.upload[e] && t.uploadTaskId && (Ae.upload[t.uploadTaskId] = Ee.upload[e].id), Ee.socket[e] && t.socketTaskId && (Ae.socket[t.socketTaskId] = Ee.socket[e].id)
            }
            onRequestTaskStateChange(e) {
                var t = e[1] || {},
                    r = (e[3] || {}).nativeTime || Date.now(),
                    n = Ne(t.requestTaskId, "request");
                if (n)
                    if ("headersReceived" === t.state) {
                        n.responseHeaders = Oe(t.header), n.state = "headersReceived";
                        var i = {
                            id: t.requestTaskId,
                            api: "request",
                            responseHeaders: t.header,
                            state: "headersReceived"
                        };
                        this.sendNetworkDebug(i, r)
                    } else if ("success" === t.state) {
                    n.state = "success", n.data = t.data, n.statusCode = t.statusCode, n.statusText = t.statusText;
                    var s = {
                        id: t.requestTaskId,
                        state: "success",
                        api: "request",
                        statusCode: t.statusCode,
                        statusText: t.statusText,
                        dataLength: (t.data || "").length
                    };
                    this.sendNetworkDebug(s, r)
                } else if ("fail" === t.state) {
                    n.state = "fail", n.statusCode = n.statusCode || t.statusCode;
                    var a = {
                        id: t.requestTaskId,
                        api: "request",
                        state: "fail"
                    };
                    this.sendNetworkDebug(a, r)
                }
            }
            onDownloadTaskStateChange(e) {
                var t = e[1] || {},
                    r = (e[3] || {}).nativeTime || Date.now(),
                    n = Ne(t.downloadTaskId, "download");
                if (n)
                    if ("headersReceived" === t.state) {
                        n.responseHeaders = Oe(t.header), n.state = "headersReceived";
                        var i = {
                            id: t.downloadTaskId,
                            api: "download",
                            responseHeaders: t.header,
                            state: "headersReceived"
                        };
                        this.sendNetworkDebug(i, r)
                    } else if ("progressUpdate" === t.state) {
                    n.state = "dataReceived", n.dataLength = t.totalBytesWritten;
                    var s = {
                        id: t.downloadTaskId,
                        state: "dataReceived",
                        dataLength: t.totalBytesWritten,
                        api: "download"
                    };
                    this.sendNetworkDebug(s, r)
                } else if ("success" === t.state) {
                    n.state = "success", "number" == typeof n.dataLength ? n.data = `Saved ${n.dataLength} Bytes at "${t.tempFilePath}"` : n.data = `Saved at ${t.tempFilePath}`, n.statusCode = t.statusCode, n.statusText = t.statusText;
                    var a = {
                        id: t.downloadTaskId,
                        state: "success",
                        api: "download",
                        statusCode: t.statusCode,
                        statusText: t.statusText
                    };
                    this.sendNetworkDebug(a, r)
                } else if ("fail" === t.state) {
                    n.state = "fail", n.statusCode = n.statusCode || t.statusCode;
                    var o = {
                        id: t.downloadTaskId,
                        api: "download",
                        state: "fail"
                    };
                    this.sendNetworkDebug(o, r)
                }
            }
            onUploadTaskStateChange(e) {
                var t = e[1] || {},
                    r = (e[3] || {}).nativeTime || Date.now(),
                    n = Ne(t.uploadTaskId, "upload");
                if (n)
                    if ("headersReceived" === t.state) {
                        n.responseHeaders = Oe(t.header), n.state = "headersReceived";
                        var i = {
                            id: t.uploadTaskId,
                            api: "upload",
                            responseHeaders: t.header,
                            state: "headersReceived"
                        };
                        this.sendNetworkDebug(i, r)
                    } else if ("progressUpdate" === t.state) {
                    n.state = "dataSent", n.dataLength = t.totalBytesSent;
                    var s = {
                        id: t.uploadTaskId,
                        state: "dataSent",
                        dataLength: t.totalBytesSent,
                        api: "upload"
                    };
                    this.sendNetworkDebug(s, r)
                } else if ("success" === t.state) {
                    n.state = "success", n.data = t.data, n.statusCode = t.statusCode, n.statusText = t.statusText;
                    var a = {
                        id: t.uploadTaskId,
                        state: "success",
                        api: "upload",
                        statusCode: t.statusCode,
                        statusText: t.statusText,
                        dataLength: (t.data || "").length
                    };
                    this.sendNetworkDebug(a, r)
                } else if ("fail" === t.state) {
                    n.state = "fail", n.statusCode = n.statusCode || t.statusCode;
                    var o = {
                        id: t.uploadTaskId,
                        api: "upload",
                        state: "fail"
                    };
                    this.sendNetworkDebug(o, r)
                }
            }
            onSocketTaskStateChange(e) {
                var t = e[1] || {},
                    r = (e[3] || {}).nativeTime || Date.now(),
                    n = Ne(t.socketTaskId, "socket");
                if (n)
                    if ("open" === t.state) {
                        n.responseHeaders = Oe(t.header), n.state = "headersReceived";
                        var i = {
                            id: t.socketTaskId,
                            api: "socket",
                            responseHeaders: t.header,
                            state: "headersReceived",
                            websocketState: "open"
                        };
                        this.sendNetworkDebug(i, r)
                    } else if ("close" === t.state) {
                    n.state = "success", n.statusCode = t.statusCode, n.statusText = t.statusText;
                    var s = {
                        id: t.socketTaskId,
                        state: "success",
                        api: "socket",
                        statusCode: t.statusCode,
                        statusText: t.statusText,
                        websocketState: "close"
                    };
                    this.sendNetworkDebug(s, r)
                } else if ("error" === t.state) {
                    n.state = "fail", n.statusCode = n.statusCode || t.statusCode;
                    var a = {
                        id: t.socketTaskId,
                        api: "socket",
                        websocketState: "error",
                        state: "fail"
                    };
                    this.sendNetworkDebug(a, r)
                }
            }
            sendNetworkDebug(e, t) {
                var {
                    state: r,
                    api: n
                } = e, i = `${Se[n]}.${e.id}`, s = Ie[n];
                s[i] && ("headersReceived" === r ? this._netWorkDebugHeadersReceived(i, s, e, t) : "dataReceived" === r ? this._netWorkDebugDataReceived(i, s, e, t) : "dataSent" === r ? this._netWorkDebugDataSent(i, s, e, t) : "success" === r ? this._netWorkDebugSuccess(i, s, e, t) : "fail" === r && this._netWorkDebugFail(i, s, e, t))
            }
            _netWorkDebugHeadersReceived(e, t, r, n) {
                if (t[e] = {
                        ...t[e] || {},
                        sate: r.state,
                        responseHeaders: r.responseHeaders,
                        responseReceivedTimestamp: n || Date.now()
                    }, "open" === r.websocketState) {
                    var i = {
                        method: "Network.responseReceived",
                        params: {
                            requestId: e,
                            timestamp: (t[e].responseReceivedTimestamp || Date.now()) / 1e3,
                            type: "XHR",
                            response: {
                                url: t[e].url,
                                mimeType: ce(t[e].responseHeaders),
                                status: t[e].statusCode || 101,
                                statusText: t[e].statusText || "Switching Protocols",
                                headers: t[e].responseHeaders,
                                connectionId: e,
                                timing: {
                                    requestTime: (n || Date.now()) / 1e3,
                                    proxyStart: -1,
                                    proxyEnd: -1,
                                    dnsStart: -1,
                                    dnsEnd: -1,
                                    connectStart: -1,
                                    connectEnd: -1,
                                    sslStart: -1,
                                    sslEnd: -1,
                                    workerStart: -1,
                                    workerReady: -1,
                                    sendStart: -1,
                                    sendEnd: -1,
                                    pushStart: 0,
                                    pushEnd: 0,
                                    receiveHeadersEnd: (t[e].responseReceivedTimestamp || 0) - (n || Date.now()) || -1
                                },
                                protocol: "HTTP/1.1"
                            }
                        }
                    };
                    this.messager.sendToDevtools("__networkDebug", i)
                }
            }
            _netWorkDebugDataReceived(e, t, r, n) {
                var i = t[e].datasReceived || [],
                    s = {
                        dataLength: r.dataLength,
                        timestamp: n || Date.now()
                    };
                i.push(s), t[e] = {
                    ...t[e] || {},
                    state: r.state,
                    datasReceived: i,
                    dataLength: r.dataLength
                };
                var a = {
                    method: "Network.dataReceived",
                    params: {
                        requestId: e,
                        timestamp: s.timestamp / 1e3,
                        dataLength: r.dataLength,
                        encodedDataLength: r.dataLength
                    }
                };
                this.messager.sendToDevtools("__networkDebug", a)
            }
            _netWorkDebugDataSent(e, t, r, n) {
                var i = t[e].datasSent || [],
                    s = {
                        dataLength: r.dataLength,
                        timestamp: n || Date.now()
                    };
                i.push(s), t[e] = {
                    ...t[e] || {},
                    state: r.state,
                    datasSent: i,
                    dataSentLength: r.dataLength
                }
            }
            _netWorkDebugSuccess(e, t, r, n) {
                t[e] = {
                    ...t[e] || {},
                    state: r.state,
                    statusCode: r.statusCode,
                    statusText: r.statusText,
                    finishedTimestamp: n || Date.now(),
                    dataLength: r.dataLength || t[e].dataLength
                };
                var i = t[e].datasSent || [],
                    s = -1,
                    a = -1;
                i.length > 0 && (s = 0, a = (t[e].requestTimestamp || 0) - (i[i.length - 1].timestamp || 0));
                var o = {
                        method: "Network.responseReceived",
                        params: {
                            requestId: e,
                            timestamp: (t[e].responseReceivedTimestamp || Date.now()) / 1e3,
                            type: "XHR",
                            response: {
                                url: t[e].url,
                                status: t[e].statusCode,
                                statusText: t[e].statusText || "",
                                headers: t[e].responseHeaders,
                                mimeType: ce(t[e].responseHeaders),
                                connectionId: e,
                                timing: {
                                    requestTime: (t[e].requestTimestamp || Date.now()) / 1e3,
                                    proxyStart: -1,
                                    proxyEnd: -1,
                                    dnsStart: -1,
                                    dnsEnd: -1,
                                    connectStart: -1,
                                    connectEnd: -1,
                                    sslStart: -1,
                                    sslEnd: -1,
                                    workerStart: -1,
                                    workerReady: -1,
                                    sendStart: s,
                                    sendEnd: a,
                                    pushStart: 0,
                                    pushEnd: 0,
                                    receiveHeadersEnd: (t[e].responseReceivedTimestamp || 0) - (n || Date.now()) || -1
                                },
                                protocol: "HTTP/1.1"
                            }
                        }
                    },
                    u = {
                        method: "Network.loadingFinished",
                        params: {
                            requestId: e,
                            timestamp: (t[e].finishedTimestamp || Date.now()) / 1e3,
                            dataLength: t[e].dataLength,
                            encodedDataLength: t[e].dataLength
                        }
                    };
                "close" !== r.websocketState && this.messager.sendToDevtools("__networkDebug", o), this.messager.sendToDevtools("__networkDebug", u)
            }
            _netWorkDebugFail(e, t, r, n) {
                t[e] = {
                    ...t[e] || {},
                    state: r.state,
                    finishedTimestamp: n || Date.now()
                };
                var i = {
                    method: "Network.loadingFailed",
                    params: {
                        requestId: e,
                        timestamp: (t[e].finishedTimestamp || Date.now()) / 1e3,
                        type: "XHR",
                        errorText: "request failed",
                        canceled: !1
                    }
                };
                this.messager.sendToDevtools("__networkDebug", i)
            }
        }

        function Re() {
            return {
                __appServiceSDK__: fe,
                __appServiceEngine__: de,
                exparser: ge,
                Reporter: me,
                wx: pe,
                _getCurrentPages: le,
                _invokeWebviewMethod: he
            }
        }

        function Le(e) {
            ve = e.$eval, be = e.setGlobalFunctions, r.g.$$autoDebug = {
                $eval: ve,
                setSubContextGlobalFunctions: be
            }
        }
        var De, Me, Fe, Ve = () => {};
        class je {
            constructor(e) {
                this.messager = void 0, this.__savedWebviewIds = new Set, this._handleSetWxAppDatas = e => {
                    var t = this.getCurrentPagesFn()(),
                        r = this.getInvokeWebviewMethodFn();
                    if (Array.isArray(t) && t.length > 0 && t.every((e => "number" == typeof(e || {}).__wxWebviewId__))) {
                        var n = {};
                        t.forEach((e => {
                            n[e.__route__ || e.route] = e
                        })), Object.keys(e).forEach((t => {
                            var i = e[t],
                                s = i.__webviewId__;
                            n[t] && "function" == typeof n[t].setData ? n[t].setData(i) : "function" == typeof r && r("appDataChange", i, [s])
                        }))
                    }
                }, this.messager = e, this._init()
            }
            _init() {
                this.messager.getInstance().registerCallback(this.onReceiveDevtoolsMessage.bind(this))
            }
            onReceiveDevtoolsMessage(e, t) {
                if ("__setAppData" === e) {
                    var r = JSON.parse(t);
                    this._handleSetWxAppDatas(r)
                } else "__getAppData" === e && this._handleGetWxAppDatas()
            }
            getCurrentPagesFn() {
                var {
                    _getCurrentPages: e
                } = Re();
                return "function" == typeof e ? e : Ve
            }
            getInvokeWebviewMethodFn() {
                var {
                    _invokeWebviewMethod: e
                } = Re();
                return e
            }
            onAppRouteDone() {
                var e = this.getCurrentPagesFn()();
                if (Array.isArray(e) && e.length > 0 && e.every((e => "number" == typeof(e || {}).__wxWebviewId__))) {
                    e.forEach((e => {
                        this.__savedWebviewIds.add(e.__wxWebviewId__)
                    }));
                    var t = {
                        currentWebviewId: e[e.length - 1].__wxWebviewId__,
                        webviewIds: Array.from(this.__savedWebviewIds)
                    };
                    this.messager.sendToDevtools("__wxpagesinfo", t)
                }
            }
            onAppRoute(e) {
                var t = e[1] || {};
                if ("navigateBack" === t.openType) {
                    var r = e[2];
                    this.__savedWebviewIds.clear(), this.__savedWebviewIds.add(r), this.updateAppData()
                } else "reLaunch" === t.openType || "autoReLaunch" === t.openType || "redirectTo" === t.openType || "appLaunch" === t.openType ? (this.__savedWebviewIds.clear(), this.updateAppData()) : "switchTab" !== t.openType && "navigateTo" !== t.openType || this.updateAppData()
            }
            onAppRouteResized() {
                setTimeout((() => {
                    this.onAppRouteDone(), this.updateAppData()
                }), 0)
            }
            updateAppData() {
                xe && clearTimeout(xe), xe = setTimeout(this._handleGetWxAppDatas.bind(this), 200)
            }
            _handleGetWxAppDatas() {
                xe && clearTimeout(xe), xe = void 0;
                var e = this.getCurrentPagesFn()();
                if (Array.isArray(e) && e.length > 0 && e.every((e => "number" == typeof(e || {}).__wxWebviewId__))) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r];
                        n && (n.__route__ || n.route) && (t[n.__route__ || n.route] = {
                            ...n.data || {},
                            __webviewId__: n.__wxWebviewId__
                        })
                    }
                    this.messager.sendToDevtools("__wxappdatas", t)
                }
            }
        }
        class Be {
            constructor(e) {
                this.messagerImpl = void 0, this.messagerImpl = e
            }
            sendToDevtools(e, t) {
                var r;
                this.messagerImpl && ("string" != typeof t && (t = JSON.stringify(t)), null === (r = this.messagerImpl) || void 0 === r || r.sendCustomMessage(e, t))
            }
            registerCallback(e) {
                var t;
                this.messagerImpl && (null === (t = this.messagerImpl) || void 0 === t || t.registerCallback(e))
            }
            getInstance() {
                return this.messagerImpl
            }
        }
        class Ue {
            constructor(e, t, r, n, i) {
                this.networkDebugger = void 0, this.wxmlDebugger = void 0, this.storageDebugger = void 0, this._subscribeHandler = (e, ...t) => {
                    switch (t[0]) {
                        case "onRequestTaskStateChange":
                            var r;
                            null !== (r = t[1]) && void 0 !== r && r.requestTaskId && this.networkDebugger.onRequestTaskStateChange(t);
                            break;
                        case "onDownloadTaskStateChange":
                            var n;
                            null !== (n = t[1]) && void 0 !== n && n.downloadTaskId && this.networkDebugger.onDownloadTaskStateChange(t);
                            break;
                        case "onUploadTaskStateChange":
                            var i;
                            null !== (i = t[1]) && void 0 !== i && i.uploadTaskId && this.networkDebugger.onUploadTaskStateChange(t);
                            break;
                        case "onSocketTaskStateChange":
                            var s;
                            null !== (s = t[1]) && void 0 !== s && s.socketTaskId && this.networkDebugger.onSocketTaskStateChange(t);
                            break;
                        case "onAppRouteDone":
                            this.wxmlDebugger.onAppRouteDone();
                            break;
                        case "onAppRoute":
                            this.wxmlDebugger.onAppRoute(t);
                            break;
                        case "onAppRouteResized":
                            this.wxmlDebugger.onAppRouteResized()
                    }
                    return e.call(Me, ...t)
                }, this._invokeCallbackHandler = (e, ...t) => {
                    var r = t[0],
                        n = t[1];
                    return this.networkDebugger.invokeCallbackNetworkMethods(r, n), e.call(Me, ...t)
                }, this._hookWeixinJSCore = (e, t, ...r) => {
                    var n = r[0],
                        i = r[1],
                        s = parseInt(r[2], 10),
                        a = isNaN(s) ? 0 : s;
                    if ("publishHandler" === e) {
                        try {
                            n.endsWith("invokeWebviewMethod") && "appDataChange" === (__wxConfig.wmpfDirectInvokeJs ? i : JSON.parse(i)).data.name && this.wxmlDebugger.updateAppData(), (n.endsWith("vdSync") || n.endsWith("vdSyncBatch") || n.endsWith("appDataChange") || n.endsWith("pageInitData") || n.endsWith("__updateAppData")) && this.wxmlDebugger.updateAppData()
                        } catch (e) {}
                        return t.call(De, ...r)
                    }
                    return this._methodInvokeHandler(a, n, i, r, t)
                }, Me = e, De = t, this.networkDebugger = r, this.wxmlDebugger = n, this.storageDebugger = i;
                var s = Me.subscribeHandler,
                    a = Me.invokeCallbackHandler,
                    o = De.invokeHandler || (() => {}),
                    u = De.publishHandler || (() => {});
                Object.defineProperty(Me, "subscribeHandler", {
                    value: this._subscribeHandler.bind(null, s)
                }), Object.defineProperty(Me, "invokeCallbackHandler", {
                    value: this._invokeCallbackHandler.bind(null, a)
                }), Object.defineProperty(De, "invokeHandler", {
                    value: this._hookWeixinJSCore.bind(null, "invokeHandler", o)
                }), Object.defineProperty(De, "publishHandler", {
                    value: this._hookWeixinJSCore.bind(null, "publishHandler", u)
                })
            }
            _methodInvokeHandler(e, t, r, n, i) {
                return this.networkDebugger.invokeNetworkMethods(e, t, r), this.storageDebugger.invokeStorageMethods(e, t), i.call(De, ...n)
            }
        }
        class He {
            constructor(e, t) {
                this.messager = void 0, Fe = e, this.messager = t, this._init()
            }
            _init() {
                this.messager.getInstance().registerCallback(this.onAutoMessageReceive.bind(this))
            }
            onAutoMessageReceive(e, t) {
                var r;
                "onAutoMessageReceive" === e && (null === (r = Fe) || void 0 === r || r.subscribeHandler("onAutoMessageReceive", JSON.parse(t)))
            }
        }
        var Ge = r(116),
            We = r.n(Ge);
        class $e {
            constructor(e) {
                this.messager = void 0, this.messager = e, this._init()
            }
            _init() {
                this.messager.getInstance().registerCallback(this.onReceiveDevtoolsMessage.bind(this))
            }
            onReceiveDevtoolsMessage(e, t) {
                "__getStorageInfo" !== e ? "__execStorageSdk" === e && this.execStorageSdk(t) : this.getFullStorage()
            }
            execStorageSdk(e) {
                var t = this;
                return We()((function*() {
                    var r, n, i, s;
                    try {
                        var a = JSON.parse(e);
                        switch (a.api) {
                            case "removeStorage":
                            case "removeStorageSync":
                                yield t._removeStorage(null == a || null === (r = a.args) || void 0 === r ? void 0 : r.key);
                                break;
                            case "setStorage":
                            case "setStorageSync":
                                yield t._setStorage(null == a || null === (n = a.args) || void 0 === n ? void 0 : n.key, null == a || null === (i = a.args) || void 0 === i ? void 0 : i.data, null == a || null === (s = a.args) || void 0 === s ? void 0 : s.dataType);
                                break;
                            case "clearStorage":
                            case "clearStorageSync":
                                yield t._clearStorage()
                        }
                    } catch (e) {
                        console.error(e)
                    }
                }))()
            }
            getFullStorage() {
                var e = this;
                return We()((function*() {
                    var t = e._getStorageInfo();
                    if (t) {
                        var r = (yield t()).keys,
                            n = {};
                        for (var i of r) {
                            var s = yield e._getStorage(i), a = Object.prototype.toString.call(s).slice(8, -1);
                            "string" !== a.toLowerCase() && (s = JSON.stringify(s)), n[i] = {
                                data: void 0 === s ? "undefined" : s,
                                dataType: a
                            }
                        }
                        e.messager.sendToDevtools("__getStorageInfo", JSON.stringify(n))
                    }
                }))()
            }
            _getStorageInfo() {
                var {
                    wx: e
                } = Re();
                return "object" == typeof e && e.getStorageInfo ? e.getStorageInfo.bind(e) : null
            }
            _getStorage(e) {
                return We()((function*() {
                    var {
                        wx: t
                    } = Re();
                    if ("object" == typeof t && t.getStorage) try {
                        return (yield t.getStorage({
                            key: e
                        })).data
                    } catch (e) {
                        return
                    }
                }))()
            }
            _removeStorage(e) {
                return We()((function*() {
                    if (e) {
                        var {
                            wx: t
                        } = Re();
                        if ("object" == typeof t && t.removeStorage) try {
                            yield t.removeStorage({
                                key: e
                            })
                        } catch (e) {
                            return
                        }
                    }
                }))()
            }
            _setStorage(e, t, r) {
                return We()((function*() {
                    "string" !== r.toLowerCase() && (t = JSON.parse(t));
                    var {
                        wx: n
                    } = Re();
                    if ("object" == typeof n && n.setStorage) try {
                        n.setStorageSync(e, t)
                    } catch (e) {
                        return
                    }
                }))()
            }
            _clearStorage() {
                return We()((function*() {
                    var {
                        wx: e
                    } = Re();
                    if ("object" == typeof e && e.clearStorage) try {
                        yield e.clearStorage()
                    } catch (e) {
                        return
                    }
                }))()
            }
            invokeStorageMethods(e, t) {
                if (t.toLowerCase().includes("storage")) switch (t) {
                    case "setStorageSync":
                    case "setStorage":
                    case "removeStorageSync":
                    case "removeStorage":
                    case "clearStorageSync":
                    case "clearStorage":
                        setTimeout((() => {
                            this.getFullStorage()
                        }), 0)
                }
            }
        }
        var qe = {
                3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                5: "class enum extends super const export import",
                6: "enum",
                strict: "implements interface let package private protected public static yield",
                strictBind: "eval arguments"
            },
            Je = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
            ze = {
                5: Je,
                "5module": Je + " export import",
                6: Je + " const class extends export import super"
            },
            Qe = /^in(stanceof)?$/,
            Ke = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
            Xe = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
            Ye = new RegExp("[" + Ke + "]"),
            Ze = new RegExp("[" + Ke + Xe + "]");
        Ke = Xe = null;
        var et = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
            tt = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

        function rt(e, t) {
            for (var r = 65536, n = 0; n < t.length; n += 2) {
                if ((r += t[n]) > e) return !1;
                if ((r += t[n + 1]) >= e) return !0
            }
        }

        function nt(e, t) {
            return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && Ye.test(String.fromCharCode(e)) : !1 !== t && rt(e, et)))
        }

        function it(e, t) {
            return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && Ze.test(String.fromCharCode(e)) : !1 !== t && (rt(e, et) || rt(e, tt)))))
        }
        var st = function(e, t) {
            void 0 === t && (t = {}), this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop || null, this.updateContext = null
        };

        function at(e, t) {
            return new st(e, {
                beforeExpr: !0,
                binop: t
            })
        }
        var ot = {
                beforeExpr: !0
            },
            ut = {
                startsExpr: !0
            },
            ct = {};

        function lt(e, t) {
            return void 0 === t && (t = {}), t.keyword = e, ct[e] = new st(e, t)
        }
        var ht = {
                num: new st("num", ut),
                regexp: new st("regexp", ut),
                string: new st("string", ut),
                name: new st("name", ut),
                eof: new st("eof"),
                bracketL: new st("[", {
                    beforeExpr: !0,
                    startsExpr: !0
                }),
                bracketR: new st("]"),
                braceL: new st("{", {
                    beforeExpr: !0,
                    startsExpr: !0
                }),
                braceR: new st("}"),
                parenL: new st("(", {
                    beforeExpr: !0,
                    startsExpr: !0
                }),
                parenR: new st(")"),
                comma: new st(",", ot),
                semi: new st(";", ot),
                colon: new st(":", ot),
                dot: new st("."),
                question: new st("?", ot),
                questionDot: new st("?."),
                arrow: new st("=>", ot),
                template: new st("template"),
                invalidTemplate: new st("invalidTemplate"),
                ellipsis: new st("...", ot),
                backQuote: new st("`", ut),
                dollarBraceL: new st("${", {
                    beforeExpr: !0,
                    startsExpr: !0
                }),
                eq: new st("=", {
                    beforeExpr: !0,
                    isAssign: !0
                }),
                assign: new st("_=", {
                    beforeExpr: !0,
                    isAssign: !0
                }),
                incDec: new st("++/--", {
                    prefix: !0,
                    postfix: !0,
                    startsExpr: !0
                }),
                prefix: new st("!/~", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0
                }),
                logicalOR: at("||", 1),
                logicalAND: at("&&", 2),
                bitwiseOR: at("|", 3),
                bitwiseXOR: at("^", 4),
                bitwiseAND: at("&", 5),
                equality: at("==/!=/===/!==", 6),
                relational: at("</>/<=/>=", 7),
                bitShift: at("<</>>/>>>", 8),
                plusMin: new st("+/-", {
                    beforeExpr: !0,
                    binop: 9,
                    prefix: !0,
                    startsExpr: !0
                }),
                modulo: at("%", 10),
                star: at("*", 10),
                slash: at("/", 10),
                starstar: new st("**", {
                    beforeExpr: !0
                }),
                coalesce: at("??", 1),
                _break: lt("break"),
                _case: lt("case", ot),
                _catch: lt("catch"),
                _continue: lt("continue"),
                _debugger: lt("debugger"),
                _default: lt("default", ot),
                _do: lt("do", {
                    isLoop: !0,
                    beforeExpr: !0
                }),
                _else: lt("else", ot),
                _finally: lt("finally"),
                _for: lt("for", {
                    isLoop: !0
                }),
                _function: lt("function", ut),
                _if: lt("if"),
                _return: lt("return", ot),
                _switch: lt("switch"),
                _throw: lt("throw", ot),
                _try: lt("try"),
                _var: lt("var"),
                _const: lt("const"),
                _while: lt("while", {
                    isLoop: !0
                }),
                _with: lt("with"),
                _new: lt("new", {
                    beforeExpr: !0,
                    startsExpr: !0
                }),
                _this: lt("this", ut),
                _super: lt("super", ut),
                _class: lt("class", ut),
                _extends: lt("extends", ot),
                _export: lt("export"),
                _import: lt("import", ut),
                _null: lt("null", ut),
                _true: lt("true", ut),
                _false: lt("false", ut),
                _in: lt("in", {
                    beforeExpr: !0,
                    binop: 7
                }),
                _instanceof: lt("instanceof", {
                    beforeExpr: !0,
                    binop: 7
                }),
                _typeof: lt("typeof", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0
                }),
                _void: lt("void", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0
                }),
                _delete: lt("delete", {
                    beforeExpr: !0,
                    prefix: !0,
                    startsExpr: !0
                })
            },
            pt = /\r\n?|\n|\u2028|\u2029/,
            dt = new RegExp(pt.source, "g");

        function ft(e, t) {
            return 10 === e || 13 === e || !t && (8232 === e || 8233 === e)
        }
        var gt = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
            mt = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
            vt = Object.prototype,
            bt = vt.hasOwnProperty,
            yt = vt.toString;

        function xt(e, t) {
            return bt.call(e, t)
        }
        var St = Array.isArray || function(e) {
            return "[object Array]" === yt.call(e)
        };

        function _t(e) {
            return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$")
        }
        var wt = function(e, t) {
            this.line = e, this.column = t
        };
        wt.prototype.offset = function(e) {
            return new wt(this.line, this.column + e)
        };
        var Ct = function(e, t, r) {
            this.start = t, this.end = r, null !== e.sourceFile && (this.source = e.sourceFile)
        };

        function kt(e, t) {
            for (var r = 1, n = 0;;) {
                dt.lastIndex = n;
                var i = dt.exec(e);
                if (!(i && i.index < t)) return new wt(r, t - n);
                ++r, n = i.index + i[0].length
            }
        }
        var Et = {
            ecmaVersion: 10,
            sourceType: "script",
            onInsertedSemicolon: null,
            onTrailingComma: null,
            allowReserved: null,
            allowReturnOutsideFunction: !1,
            allowImportExportEverywhere: !1,
            allowAwaitOutsideFunction: !1,
            allowHashBang: !1,
            locations: !1,
            onToken: null,
            onComment: null,
            ranges: !1,
            program: null,
            sourceFile: null,
            directSourceFile: null,
            preserveParens: !1
        };

        function It(e, t) {
            return 2 | (e ? 4 : 0) | (t ? 8 : 0)
        }
        var At = function(e, t, r) {
                this.options = e = function(e) {
                    var t = {};
                    for (var r in Et) t[r] = e && xt(e, r) ? e[r] : Et[r];
                    if (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), null == t.allowReserved && (t.allowReserved = t.ecmaVersion < 5), St(t.onToken)) {
                        var n = t.onToken;
                        t.onToken = function(e) {
                            return n.push(e)
                        }
                    }
                    return St(t.onComment) && (t.onComment = function(e, t) {
                        return function(r, n, i, s, a, o) {
                            var u = {
                                type: r ? "Block" : "Line",
                                value: n,
                                start: i,
                                end: s
                            };
                            e.locations && (u.loc = new Ct(this, a, o)), e.ranges && (u.range = [i, s]), t.push(u)
                        }
                    }(t, t.onComment)), t
                }(e), this.sourceFile = e.sourceFile, this.keywords = _t(ze[e.ecmaVersion >= 6 ? 6 : "module" === e.sourceType ? "5module" : 5]);
                var n = "";
                if (!0 !== e.allowReserved) {
                    for (var i = e.ecmaVersion; !(n = qe[i]); i--);
                    "module" === e.sourceType && (n += " await")
                }
                this.reservedWords = _t(n);
                var s = (n ? n + " " : "") + qe.strict;
                this.reservedWordsStrict = _t(s), this.reservedWordsStrictBind = _t(s + " " + qe.strictBind), this.input = String(t), this.containsEsc = !1, r ? (this.pos = r, this.lineStart = this.input.lastIndexOf("\n", r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(pt).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = ht.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === e.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = {}, 0 === this.pos && e.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null
            },
            Ot = {
                inFunction: {
                    configurable: !0
                },
                inGenerator: {
                    configurable: !0
                },
                inAsync: {
                    configurable: !0
                },
                allowSuper: {
                    configurable: !0
                },
                allowDirectSuper: {
                    configurable: !0
                },
                treatFunctionsAsVar: {
                    configurable: !0
                }
            };
        At.prototype.parse = function() {
            var e = this.options.program || this.startNode();
            return this.nextToken(), this.parseTopLevel(e)
        }, Ot.inFunction.get = function() {
            return (2 & this.currentVarScope().flags) > 0
        }, Ot.inGenerator.get = function() {
            return (8 & this.currentVarScope().flags) > 0
        }, Ot.inAsync.get = function() {
            return (4 & this.currentVarScope().flags) > 0
        }, Ot.allowSuper.get = function() {
            return (64 & this.currentThisScope().flags) > 0
        }, Ot.allowDirectSuper.get = function() {
            return (128 & this.currentThisScope().flags) > 0
        }, Ot.treatFunctionsAsVar.get = function() {
            return this.treatFunctionsAsVarInScope(this.currentScope())
        }, At.prototype.inNonArrowFunction = function() {
            return (2 & this.currentThisScope().flags) > 0
        }, At.extend = function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var r = this, n = 0; n < e.length; n++) r = e[n](r);
            return r
        }, At.parse = function(e, t) {
            return new this(t, e).parse()
        }, At.parseExpressionAt = function(e, t, r) {
            var n = new this(r, e, t);
            return n.nextToken(), n.parseExpression()
        }, At.tokenizer = function(e, t) {
            return new this(t, e)
        }, Object.defineProperties(At.prototype, Ot);
        var Tt = At.prototype,
            Nt = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;

        function Pt() {
            this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
        }
        Tt.strictDirective = function(e) {
            for (;;) {
                mt.lastIndex = e, e += mt.exec(this.input)[0].length;
                var t = Nt.exec(this.input.slice(e));
                if (!t) return !1;
                if ("use strict" === (t[1] || t[2])) {
                    mt.lastIndex = e + t[0].length;
                    var r = mt.exec(this.input),
                        n = r.index + r[0].length,
                        i = this.input.charAt(n);
                    return ";" === i || "}" === i || pt.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || "!" === i && "=" === this.input.charAt(n + 1))
                }
                e += t[0].length, mt.lastIndex = e, e += mt.exec(this.input)[0].length, ";" === this.input[e] && e++
            }
        }, Tt.eat = function(e) {
            return this.type === e && (this.next(), !0)
        }, Tt.isContextual = function(e) {
            return this.type === ht.name && this.value === e && !this.containsEsc
        }, Tt.eatContextual = function(e) {
            return !!this.isContextual(e) && (this.next(), !0)
        }, Tt.expectContextual = function(e) {
            this.eatContextual(e) || this.unexpected()
        }, Tt.canInsertSemicolon = function() {
            return this.type === ht.eof || this.type === ht.braceR || pt.test(this.input.slice(this.lastTokEnd, this.start))
        }, Tt.insertSemicolon = function() {
            if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
        }, Tt.semicolon = function() {
            this.eat(ht.semi) || this.insertSemicolon() || this.unexpected()
        }, Tt.afterTrailingComma = function(e, t) {
            if (this.type === e) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0
        }, Tt.expect = function(e) {
            this.eat(e) || this.unexpected()
        }, Tt.unexpected = function(e) {
            this.raise(null != e ? e : this.start, "Unexpected token")
        }, Tt.checkPatternErrors = function(e, t) {
            if (e) {
                e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
                var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
                r > -1 && this.raiseRecoverable(r, "Parenthesized pattern")
            }
        }, Tt.checkExpressionErrors = function(e, t) {
            if (!e) return !1;
            var r = e.shorthandAssign,
                n = e.doubleProto;
            if (!t) return r >= 0 || n >= 0;
            r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property")
        }, Tt.checkYieldAwaitInDefaultParams = function() {
            this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
        }, Tt.isSimpleAssignTarget = function(e) {
            return "ParenthesizedExpression" === e.type ? this.isSimpleAssignTarget(e.expression) : "Identifier" === e.type || "MemberExpression" === e.type
        };
        var Rt = At.prototype;
        Rt.parseTopLevel = function(e) {
            var t = {};
            for (e.body || (e.body = []); this.type !== ht.eof;) {
                var r = this.parseStatement(null, !0, t);
                e.body.push(r)
            }
            if (this.inModule)
                for (var n = 0, i = Object.keys(this.undefinedExports); n < i.length; n += 1) {
                    var s = i[n];
                    this.raiseRecoverable(this.undefinedExports[s].start, "Export '" + s + "' is not defined")
                }
            return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program")
        };
        var Lt = {
                kind: "loop"
            },
            Dt = {
                kind: "switch"
            };
        Rt.isLet = function(e) {
            if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
            mt.lastIndex = this.pos;
            var t = mt.exec(this.input),
                r = this.pos + t[0].length,
                n = this.input.charCodeAt(r);
            if (91 === n) return !0;
            if (e) return !1;
            if (123 === n) return !0;
            if (nt(n, !0)) {
                for (var i = r + 1; it(this.input.charCodeAt(i), !0);) ++i;
                var s = this.input.slice(r, i);
                if (!Qe.test(s)) return !0
            }
            return !1
        }, Rt.isAsyncFunction = function() {
            if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
            mt.lastIndex = this.pos;
            var e = mt.exec(this.input),
                t = this.pos + e[0].length;
            return !(pt.test(this.input.slice(this.pos, t)) || "function" !== this.input.slice(t, t + 8) || t + 8 !== this.input.length && it(this.input.charAt(t + 8)))
        }, Rt.parseStatement = function(e, t, r) {
            var n, i = this.type,
                s = this.startNode();
            switch (this.isLet(e) && (i = ht._var, n = "let"), i) {
                case ht._break:
                case ht._continue:
                    return this.parseBreakContinueStatement(s, i.keyword);
                case ht._debugger:
                    return this.parseDebuggerStatement(s);
                case ht._do:
                    return this.parseDoStatement(s);
                case ht._for:
                    return this.parseForStatement(s);
                case ht._function:
                    return e && (this.strict || "if" !== e && "label" !== e) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(s, !1, !e);
                case ht._class:
                    return e && this.unexpected(), this.parseClass(s, !0);
                case ht._if:
                    return this.parseIfStatement(s);
                case ht._return:
                    return this.parseReturnStatement(s);
                case ht._switch:
                    return this.parseSwitchStatement(s);
                case ht._throw:
                    return this.parseThrowStatement(s);
                case ht._try:
                    return this.parseTryStatement(s);
                case ht._const:
                case ht._var:
                    return n = n || this.value, e && "var" !== n && this.unexpected(), this.parseVarStatement(s, n);
                case ht._while:
                    return this.parseWhileStatement(s);
                case ht._with:
                    return this.parseWithStatement(s);
                case ht.braceL:
                    return this.parseBlock(!0, s);
                case ht.semi:
                    return this.parseEmptyStatement(s);
                case ht._export:
                case ht._import:
                    if (this.options.ecmaVersion > 10 && i === ht._import) {
                        mt.lastIndex = this.pos;
                        var a = mt.exec(this.input),
                            o = this.pos + a[0].length,
                            u = this.input.charCodeAt(o);
                        if (40 === u || 46 === u) return this.parseExpressionStatement(s, this.parseExpression())
                    }
                    return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), i === ht._import ? this.parseImport(s) : this.parseExport(s, r);
                default:
                    if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
                    var c = this.value,
                        l = this.parseExpression();
                    return i === ht.name && "Identifier" === l.type && this.eat(ht.colon) ? this.parseLabeledStatement(s, c, l, e) : this.parseExpressionStatement(s, l)
            }
        }, Rt.parseBreakContinueStatement = function(e, t) {
            var r = "break" === t;
            this.next(), this.eat(ht.semi) || this.insertSemicolon() ? e.label = null : this.type !== ht.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
            for (var n = 0; n < this.labels.length; ++n) {
                var i = this.labels[n];
                if (null == e.label || i.name === e.label.name) {
                    if (null != i.kind && (r || "loop" === i.kind)) break;
                    if (e.label && r) break
                }
            }
            return n === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement")
        }, Rt.parseDebuggerStatement = function(e) {
            return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement")
        }, Rt.parseDoStatement = function(e) {
            return this.next(), this.labels.push(Lt), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(ht._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(ht.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement")
        }, Rt.parseForStatement = function(e) {
            this.next();
            var t = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
            if (this.labels.push(Lt), this.enterScope(0), this.expect(ht.parenL), this.type === ht.semi) return t > -1 && this.unexpected(t), this.parseFor(e, null);
            var r = this.isLet();
            if (this.type === ht._var || this.type === ht._const || r) {
                var n = this.startNode(),
                    i = r ? "let" : this.value;
                return this.next(), this.parseVar(n, !0, i), this.finishNode(n, "VariableDeclaration"), (this.type === ht._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === n.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === ht._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, n)) : (t > -1 && this.unexpected(t), this.parseFor(e, n))
            }
            var s = new Pt,
                a = this.parseExpression(!0, s);
            return this.type === ht._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === ht._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(a, !1, s), this.checkLVal(a), this.parseForIn(e, a)) : (this.checkExpressionErrors(s, !0), t > -1 && this.unexpected(t), this.parseFor(e, a))
        }, Rt.parseFunctionStatement = function(e, t, r) {
            return this.next(), this.parseFunction(e, Ft | (r ? 0 : Vt), !1, t)
        }, Rt.parseIfStatement = function(e) {
            return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(ht._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement")
        }, Rt.parseReturnStatement = function(e) {
            return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(ht.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement")
        }, Rt.parseSwitchStatement = function(e) {
            var t;
            this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(ht.braceL), this.labels.push(Dt), this.enterScope(0);
            for (var r = !1; this.type !== ht.braceR;)
                if (this.type === ht._case || this.type === ht._default) {
                    var n = this.type === ht._case;
                    t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), n ? t.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, t.test = null), this.expect(ht.colon)
                } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
            return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement")
        }, Rt.parseThrowStatement = function(e) {
            return this.next(), pt.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement")
        };
        var Mt = [];
        Rt.parseTryStatement = function(e) {
            if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === ht._catch) {
                var t = this.startNode();
                if (this.next(), this.eat(ht.parenL)) {
                    t.param = this.parseBindingAtom();
                    var r = "Identifier" === t.param.type;
                    this.enterScope(r ? 32 : 0), this.checkLVal(t.param, r ? 4 : 2), this.expect(ht.parenR)
                } else this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0);
                t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause")
            }
            return e.finalizer = this.eat(ht._finally) ? this.parseBlock() : null, e.handler || e.finalizer || this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement")
        }, Rt.parseVarStatement = function(e, t) {
            return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration")
        }, Rt.parseWhileStatement = function(e) {
            return this.next(), e.test = this.parseParenExpression(), this.labels.push(Lt), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement")
        }, Rt.parseWithStatement = function(e) {
            return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement")
        }, Rt.parseEmptyStatement = function(e) {
            return this.next(), this.finishNode(e, "EmptyStatement")
        }, Rt.parseLabeledStatement = function(e, t, r, n) {
            for (var i = 0, s = this.labels; i < s.length; i += 1) s[i].name === t && this.raise(r.start, "Label '" + t + "' is already declared");
            for (var a = this.type.isLoop ? "loop" : this.type === ht._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                var u = this.labels[o];
                if (u.statementStart !== e.start) break;
                u.statementStart = this.start, u.kind = a
            }
            return this.labels.push({
                name: t,
                kind: a,
                statementStart: this.start
            }), e.body = this.parseStatement(n ? -1 === n.indexOf("label") ? n + "label" : n : "label"), this.labels.pop(), e.label = r, this.finishNode(e, "LabeledStatement")
        }, Rt.parseExpressionStatement = function(e, t) {
            return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement")
        }, Rt.parseBlock = function(e, t, r) {
            for (void 0 === e && (e = !0), void 0 === t && (t = this.startNode()), t.body = [], this.expect(ht.braceL), e && this.enterScope(0); this.type !== ht.braceR;) {
                var n = this.parseStatement(null);
                t.body.push(n)
            }
            return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement")
        }, Rt.parseFor = function(e, t) {
            return e.init = t, this.expect(ht.semi), e.test = this.type === ht.semi ? null : this.parseExpression(), this.expect(ht.semi), e.update = this.type === ht.parenR ? null : this.parseExpression(), this.expect(ht.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement")
        }, Rt.parseForIn = function(e, t) {
            var r = this.type === ht._in;
            return this.next(), "VariableDeclaration" === t.type && null != t.declarations[0].init && (!r || this.options.ecmaVersion < 8 || this.strict || "var" !== t.kind || "Identifier" !== t.declarations[0].id.type) ? this.raise(t.start, (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer") : "AssignmentPattern" === t.type && this.raise(t.start, "Invalid left-hand side in for-loop"), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(ht.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
        }, Rt.parseVar = function(e, t, r) {
            for (e.declarations = [], e.kind = r;;) {
                var n = this.startNode();
                if (this.parseVarId(n, r), this.eat(ht.eq) ? n.init = this.parseMaybeAssign(t) : "const" !== r || this.type === ht._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === n.id.type || t && (this.type === ht._in || this.isContextual("of")) ? n.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), e.declarations.push(this.finishNode(n, "VariableDeclarator")), !this.eat(ht.comma)) break
            }
            return e
        }, Rt.parseVarId = function(e, t) {
            e.id = this.parseBindingAtom(), this.checkLVal(e.id, "var" === t ? 1 : 2, !1)
        };
        var Ft = 1,
            Vt = 2;
        Rt.parseFunction = function(e, t, r, n) {
            this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !n) && (this.type === ht.star && t & Vt && this.unexpected(), e.generator = this.eat(ht.star)), this.options.ecmaVersion >= 8 && (e.async = !!n), t & Ft && (e.id = 4 & t && this.type !== ht.name ? null : this.parseIdent(), !e.id || t & Vt || this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
            var i = this.yieldPos,
                s = this.awaitPos,
                a = this.awaitIdentPos;
            return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(It(e.async, e.generator)), t & Ft || (e.id = this.type === ht.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, r, !1), this.yieldPos = i, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(e, t & Ft ? "FunctionDeclaration" : "FunctionExpression")
        }, Rt.parseFunctionParams = function(e) {
            this.expect(ht.parenL), e.params = this.parseBindingList(ht.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
        }, Rt.parseClass = function(e, t) {
            this.next();
            var r = this.strict;
            this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
            var n = this.startNode(),
                i = !1;
            for (n.body = [], this.expect(ht.braceL); this.type !== ht.braceR;) {
                var s = this.parseClassElement(null !== e.superClass);
                s && (n.body.push(s), "MethodDefinition" === s.type && "constructor" === s.kind && (i && this.raise(s.start, "Duplicate constructor in the same class"), i = !0))
            }
            return this.strict = r, this.next(), e.body = this.finishNode(n, "ClassBody"), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
        }, Rt.parseClassElement = function(e) {
            var t = this;
            if (this.eat(ht.semi)) return null;
            var r = this.startNode(),
                n = function(e, n) {
                    void 0 === n && (n = !1);
                    var i = t.start,
                        s = t.startLoc;
                    return !(!t.eatContextual(e) || (t.type === ht.parenL || n && t.canInsertSemicolon()) && (r.key && t.unexpected(), r.computed = !1, r.key = t.startNodeAt(i, s), r.key.name = e, t.finishNode(r.key, "Identifier"), 1))
                };
            r.kind = "method", r.static = n("static");
            var i = this.eat(ht.star),
                s = !1;
            i || (this.options.ecmaVersion >= 8 && n("async", !0) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(ht.star)) : n("get") ? r.kind = "get" : n("set") && (r.kind = "set")), r.key || this.parsePropertyName(r);
            var a = r.key,
                o = !1;
            return r.computed || r.static || !("Identifier" === a.type && "constructor" === a.name || "Literal" === a.type && "constructor" === a.value) ? r.static && "Identifier" === a.type && "prototype" === a.name && this.raise(a.start, "Classes may not have a static property named prototype") : ("method" !== r.kind && this.raise(a.start, "Constructor can't have get/set modifier"), i && this.raise(a.start, "Constructor can't be a generator"), s && this.raise(a.start, "Constructor can't be an async method"), r.kind = "constructor", o = e), this.parseClassMethod(r, i, s, o), "get" === r.kind && 0 !== r.value.params.length && this.raiseRecoverable(r.value.start, "getter should have no params"), "set" === r.kind && 1 !== r.value.params.length && this.raiseRecoverable(r.value.start, "setter should have exactly one param"), "set" === r.kind && "RestElement" === r.value.params[0].type && this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params"), r
        }, Rt.parseClassMethod = function(e, t, r, n) {
            return e.value = this.parseMethod(t, r, n), this.finishNode(e, "MethodDefinition")
        }, Rt.parseClassId = function(e, t) {
            this.type === ht.name ? (e.id = this.parseIdent(), t && this.checkLVal(e.id, 2, !1)) : (!0 === t && this.unexpected(), e.id = null)
        }, Rt.parseClassSuper = function(e) {
            e.superClass = this.eat(ht._extends) ? this.parseExprSubscripts() : null
        }, Rt.parseExport = function(e, t) {
            if (this.next(), this.eat(ht.star)) return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseIdent(!0), this.checkExport(t, e.exported.name, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== ht.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
            if (this.eat(ht._default)) {
                var r;
                if (this.checkExport(t, "default", this.lastTokStart), this.type === ht._function || (r = this.isAsyncFunction())) {
                    var n = this.startNode();
                    this.next(), r && this.next(), e.declaration = this.parseFunction(n, 4 | Ft, !1, r)
                } else if (this.type === ht._class) {
                    var i = this.startNode();
                    e.declaration = this.parseClass(i, "nullableID")
                } else e.declaration = this.parseMaybeAssign(), this.semicolon();
                return this.finishNode(e, "ExportDefaultDeclaration")
            }
            if (this.shouldParseExportStatement()) e.declaration = this.parseStatement(null), "VariableDeclaration" === e.declaration.type ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id.name, e.declaration.id.start), e.specifiers = [], e.source = null;
            else {
                if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== ht.string && this.unexpected(), e.source = this.parseExprAtom();
                else {
                    for (var s = 0, a = e.specifiers; s < a.length; s += 1) {
                        var o = a[s];
                        this.checkUnreserved(o.local), this.checkLocalExport(o.local)
                    }
                    e.source = null
                }
                this.semicolon()
            }
            return this.finishNode(e, "ExportNamedDeclaration")
        }, Rt.checkExport = function(e, t, r) {
            e && (xt(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), e[t] = !0)
        }, Rt.checkPatternExport = function(e, t) {
            var r = t.type;
            if ("Identifier" === r) this.checkExport(e, t.name, t.start);
            else if ("ObjectPattern" === r)
                for (var n = 0, i = t.properties; n < i.length; n += 1) {
                    var s = i[n];
                    this.checkPatternExport(e, s)
                } else if ("ArrayPattern" === r)
                    for (var a = 0, o = t.elements; a < o.length; a += 1) {
                        var u = o[a];
                        u && this.checkPatternExport(e, u)
                    } else "Property" === r ? this.checkPatternExport(e, t.value) : "AssignmentPattern" === r ? this.checkPatternExport(e, t.left) : "RestElement" === r ? this.checkPatternExport(e, t.argument) : "ParenthesizedExpression" === r && this.checkPatternExport(e, t.expression)
        }, Rt.checkVariableExport = function(e, t) {
            if (e)
                for (var r = 0, n = t; r < n.length; r += 1) {
                    var i = n[r];
                    this.checkPatternExport(e, i.id)
                }
        }, Rt.shouldParseExportStatement = function() {
            return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
        }, Rt.parseExportSpecifiers = function(e) {
            var t = [],
                r = !0;
            for (this.expect(ht.braceL); !this.eat(ht.braceR);) {
                if (r) r = !1;
                else if (this.expect(ht.comma), this.afterTrailingComma(ht.braceR)) break;
                var n = this.startNode();
                n.local = this.parseIdent(!0), n.exported = this.eatContextual("as") ? this.parseIdent(!0) : n.local, this.checkExport(e, n.exported.name, n.exported.start), t.push(this.finishNode(n, "ExportSpecifier"))
            }
            return t
        }, Rt.parseImport = function(e) {
            return this.next(), this.type === ht.string ? (e.specifiers = Mt, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === ht.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration")
        }, Rt.parseImportSpecifiers = function() {
            var e = [],
                t = !0;
            if (this.type === ht.name) {
                var r = this.startNode();
                if (r.local = this.parseIdent(), this.checkLVal(r.local, 2), e.push(this.finishNode(r, "ImportDefaultSpecifier")), !this.eat(ht.comma)) return e
            }
            if (this.type === ht.star) {
                var n = this.startNode();
                return this.next(), this.expectContextual("as"), n.local = this.parseIdent(), this.checkLVal(n.local, 2), e.push(this.finishNode(n, "ImportNamespaceSpecifier")), e
            }
            for (this.expect(ht.braceL); !this.eat(ht.braceR);) {
                if (t) t = !1;
                else if (this.expect(ht.comma), this.afterTrailingComma(ht.braceR)) break;
                var i = this.startNode();
                i.imported = this.parseIdent(!0), this.eatContextual("as") ? i.local = this.parseIdent() : (this.checkUnreserved(i.imported), i.local = i.imported), this.checkLVal(i.local, 2), e.push(this.finishNode(i, "ImportSpecifier"))
            }
            return e
        }, Rt.adaptDirectivePrologue = function(e) {
            for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1)
        }, Rt.isDirectiveCandidate = function(e) {
            return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" == typeof e.expression.value && ('"' === this.input[e.start] || "'" === this.input[e.start])
        };
        var jt = At.prototype;
        jt.toAssignable = function(e, t, r) {
            if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
                case "Identifier":
                    this.inAsync && "await" === e.name && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
                    break;
                case "ObjectPattern":
                case "ArrayPattern":
                case "RestElement":
                    break;
                case "ObjectExpression":
                    e.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
                    for (var n = 0, i = e.properties; n < i.length; n += 1) {
                        var s = i[n];
                        this.toAssignable(s, t), "RestElement" !== s.type || "ArrayPattern" !== s.argument.type && "ObjectPattern" !== s.argument.type || this.raise(s.argument.start, "Unexpected token")
                    }
                    break;
                case "Property":
                    "init" !== e.kind && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
                    break;
                case "ArrayExpression":
                    e.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(e.elements, t);
                    break;
                case "SpreadElement":
                    e.type = "RestElement", this.toAssignable(e.argument, t), "AssignmentPattern" === e.argument.type && this.raise(e.argument.start, "Rest elements cannot have a default value");
                    break;
                case "AssignmentExpression":
                    "=" !== e.operator && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
                case "AssignmentPattern":
                    break;
                case "ParenthesizedExpression":
                    this.toAssignable(e.expression, t, r);
                    break;
                case "ChainExpression":
                    this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
                    break;
                case "MemberExpression":
                    if (!t) break;
                default:
                    this.raise(e.start, "Assigning to rvalue")
            } else r && this.checkPatternErrors(r, !0);
            return e
        }, jt.toAssignableList = function(e, t) {
            for (var r = e.length, n = 0; n < r; n++) {
                var i = e[n];
                i && this.toAssignable(i, t)
            }
            if (r) {
                var s = e[r - 1];
                6 === this.options.ecmaVersion && t && s && "RestElement" === s.type && "Identifier" !== s.argument.type && this.unexpected(s.argument.start)
            }
            return e
        }, jt.parseSpread = function(e) {
            var t = this.startNode();
            return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement")
        }, jt.parseRestBinding = function() {
            var e = this.startNode();
            return this.next(), 6 === this.options.ecmaVersion && this.type !== ht.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement")
        }, jt.parseBindingAtom = function() {
            if (this.options.ecmaVersion >= 6) switch (this.type) {
                case ht.bracketL:
                    var e = this.startNode();
                    return this.next(), e.elements = this.parseBindingList(ht.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
                case ht.braceL:
                    return this.parseObj(!0)
            }
            return this.parseIdent()
        }, jt.parseBindingList = function(e, t, r) {
            for (var n = [], i = !0; !this.eat(e);)
                if (i ? i = !1 : this.expect(ht.comma), t && this.type === ht.comma) n.push(null);
                else {
                    if (r && this.afterTrailingComma(e)) break;
                    if (this.type === ht.ellipsis) {
                        var s = this.parseRestBinding();
                        this.parseBindingListItem(s), n.push(s), this.type === ht.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
                        break
                    }
                    var a = this.parseMaybeDefault(this.start, this.startLoc);
                    this.parseBindingListItem(a), n.push(a)
                } return n
        }, jt.parseBindingListItem = function(e) {
            return e
        }, jt.parseMaybeDefault = function(e, t, r) {
            if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(ht.eq)) return r;
            var n = this.startNodeAt(e, t);
            return n.left = r, n.right = this.parseMaybeAssign(), this.finishNode(n, "AssignmentPattern")
        }, jt.checkLVal = function(e, t, r) {
            switch (void 0 === t && (t = 0), e.type) {
                case "Identifier":
                    2 === t && "let" === e.name && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (xt(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), r[e.name] = !0), 0 !== t && 5 !== t && this.declareName(e.name, t, e.start);
                    break;
                case "ChainExpression":
                    this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
                    break;
                case "MemberExpression":
                    t && this.raiseRecoverable(e.start, "Binding member expression");
                    break;
                case "ObjectPattern":
                    for (var n = 0, i = e.properties; n < i.length; n += 1) {
                        var s = i[n];
                        this.checkLVal(s, t, r)
                    }
                    break;
                case "Property":
                    this.checkLVal(e.value, t, r);
                    break;
                case "ArrayPattern":
                    for (var a = 0, o = e.elements; a < o.length; a += 1) {
                        var u = o[a];
                        u && this.checkLVal(u, t, r)
                    }
                    break;
                case "AssignmentPattern":
                    this.checkLVal(e.left, t, r);
                    break;
                case "RestElement":
                    this.checkLVal(e.argument, t, r);
                    break;
                case "ParenthesizedExpression":
                    this.checkLVal(e.expression, t, r);
                    break;
                default:
                    this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue")
            }
        };
        var Bt = At.prototype;
        Bt.checkPropClash = function(e, t, r) {
            if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === e.type || this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
                var n, i = e.key;
                switch (i.type) {
                    case "Identifier":
                        n = i.name;
                        break;
                    case "Literal":
                        n = String(i.value);
                        break;
                    default:
                        return
                }
                var s = e.kind;
                if (this.options.ecmaVersion >= 6) "__proto__" === n && "init" === s && (t.proto && (r ? r.doubleProto < 0 && (r.doubleProto = i.start) : this.raiseRecoverable(i.start, "Redefinition of __proto__ property")), t.proto = !0);
                else {
                    var a = t[n = "$" + n];
                    a ? ("init" === s ? this.strict && a.init || a.get || a.set : a.init || a[s]) && this.raiseRecoverable(i.start, "Redefinition of property") : a = t[n] = {
                        init: !1,
                        get: !1,
                        set: !1
                    }, a[s] = !0
                }
            }
        }, Bt.parseExpression = function(e, t) {
            var r = this.start,
                n = this.startLoc,
                i = this.parseMaybeAssign(e, t);
            if (this.type === ht.comma) {
                var s = this.startNodeAt(r, n);
                for (s.expressions = [i]; this.eat(ht.comma);) s.expressions.push(this.parseMaybeAssign(e, t));
                return this.finishNode(s, "SequenceExpression")
            }
            return i
        }, Bt.parseMaybeAssign = function(e, t, r) {
            if (this.isContextual("yield")) {
                if (this.inGenerator) return this.parseYield(e);
                this.exprAllowed = !1
            }
            var n = !1,
                i = -1,
                s = -1;
            t ? (i = t.parenthesizedAssign, s = t.trailingComma, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Pt, n = !0);
            var a = this.start,
                o = this.startLoc;
            this.type !== ht.parenL && this.type !== ht.name || (this.potentialArrowAt = this.start);
            var u = this.parseMaybeConditional(e, t);
            if (r && (u = r.call(this, u, a, o)), this.type.isAssign) {
                var c = this.startNodeAt(a, o);
                return c.operator = this.value, c.left = this.type === ht.eq ? this.toAssignable(u, !1, t) : u, n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= c.left.start && (t.shorthandAssign = -1), this.checkLVal(u), this.next(), c.right = this.parseMaybeAssign(e), this.finishNode(c, "AssignmentExpression")
            }
            return n && this.checkExpressionErrors(t, !0), i > -1 && (t.parenthesizedAssign = i), s > -1 && (t.trailingComma = s), u
        }, Bt.parseMaybeConditional = function(e, t) {
            var r = this.start,
                n = this.startLoc,
                i = this.parseExprOps(e, t);
            if (this.checkExpressionErrors(t)) return i;
            if (this.eat(ht.question)) {
                var s = this.startNodeAt(r, n);
                return s.test = i, s.consequent = this.parseMaybeAssign(), this.expect(ht.colon), s.alternate = this.parseMaybeAssign(e), this.finishNode(s, "ConditionalExpression")
            }
            return i
        }, Bt.parseExprOps = function(e, t) {
            var r = this.start,
                n = this.startLoc,
                i = this.parseMaybeUnary(t, !1);
            return this.checkExpressionErrors(t) || i.start === r && "ArrowFunctionExpression" === i.type ? i : this.parseExprOp(i, r, n, -1, e)
        }, Bt.parseExprOp = function(e, t, r, n, i) {
            var s = this.type.binop;
            if (null != s && (!i || this.type !== ht._in) && s > n) {
                var a = this.type === ht.logicalOR || this.type === ht.logicalAND,
                    o = this.type === ht.coalesce;
                o && (s = ht.logicalAND.binop);
                var u = this.value;
                this.next();
                var c = this.start,
                    l = this.startLoc,
                    h = this.parseExprOp(this.parseMaybeUnary(null, !1), c, l, s, i),
                    p = this.buildBinary(t, r, e, h, u, a || o);
                return (a && this.type === ht.coalesce || o && (this.type === ht.logicalOR || this.type === ht.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(p, t, r, n, i)
            }
            return e
        }, Bt.buildBinary = function(e, t, r, n, i, s) {
            var a = this.startNodeAt(e, t);
            return a.left = r, a.operator = i, a.right = n, this.finishNode(a, s ? "LogicalExpression" : "BinaryExpression")
        }, Bt.parseMaybeUnary = function(e, t) {
            var r, n = this.start,
                i = this.startLoc;
            if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) r = this.parseAwait(), t = !0;
            else if (this.type.prefix) {
                var s = this.startNode(),
                    a = this.type === ht.incDec;
                s.operator = this.value, s.prefix = !0, this.next(), s.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), a ? this.checkLVal(s.argument) : this.strict && "delete" === s.operator && "Identifier" === s.argument.type ? this.raiseRecoverable(s.start, "Deleting local variable in strict mode") : t = !0, r = this.finishNode(s, a ? "UpdateExpression" : "UnaryExpression")
            } else {
                if (r = this.parseExprSubscripts(e), this.checkExpressionErrors(e)) return r;
                for (; this.type.postfix && !this.canInsertSemicolon();) {
                    var o = this.startNodeAt(n, i);
                    o.operator = this.value, o.prefix = !1, o.argument = r, this.checkLVal(r), this.next(), r = this.finishNode(o, "UpdateExpression")
                }
            }
            return !t && this.eat(ht.starstar) ? this.buildBinary(n, i, r, this.parseMaybeUnary(null, !1), "**", !1) : r
        }, Bt.parseExprSubscripts = function(e) {
            var t = this.start,
                r = this.startLoc,
                n = this.parseExprAtom(e);
            if ("ArrowFunctionExpression" === n.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return n;
            var i = this.parseSubscripts(n, t, r);
            return e && "MemberExpression" === i.type && (e.parenthesizedAssign >= i.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= i.start && (e.parenthesizedBind = -1)), i
        }, Bt.parseSubscripts = function(e, t, r, n) {
            for (var i = this.options.ecmaVersion >= 8 && "Identifier" === e.type && "async" === e.name && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start == 5 && this.potentialArrowAt === e.start, s = !1;;) {
                var a = this.parseSubscript(e, t, r, n, i, s);
                if (a.optional && (s = !0), a === e || "ArrowFunctionExpression" === a.type) {
                    if (s) {
                        var o = this.startNodeAt(t, r);
                        o.expression = a, a = this.finishNode(o, "ChainExpression")
                    }
                    return a
                }
                e = a
            }
        }, Bt.parseSubscript = function(e, t, r, n, i, s) {
            var a = this.options.ecmaVersion >= 11,
                o = a && this.eat(ht.questionDot);
            n && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
            var u = this.eat(ht.bracketL);
            if (u || o && this.type !== ht.parenL && this.type !== ht.backQuote || this.eat(ht.dot)) {
                var c = this.startNodeAt(t, r);
                c.object = e, c.property = u ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved), c.computed = !!u, u && this.expect(ht.bracketR), a && (c.optional = o), e = this.finishNode(c, "MemberExpression")
            } else if (!n && this.eat(ht.parenL)) {
                var l = new Pt,
                    h = this.yieldPos,
                    p = this.awaitPos,
                    d = this.awaitIdentPos;
                this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                var f = this.parseExprList(ht.parenR, this.options.ecmaVersion >= 8, !1, l);
                if (i && !o && !this.canInsertSemicolon() && this.eat(ht.arrow)) return this.checkPatternErrors(l, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = h, this.awaitPos = p, this.awaitIdentPos = d, this.parseArrowExpression(this.startNodeAt(t, r), f, !0);
                this.checkExpressionErrors(l, !0), this.yieldPos = h || this.yieldPos, this.awaitPos = p || this.awaitPos, this.awaitIdentPos = d || this.awaitIdentPos;
                var g = this.startNodeAt(t, r);
                g.callee = e, g.arguments = f, a && (g.optional = o), e = this.finishNode(g, "CallExpression")
            } else if (this.type === ht.backQuote) {
                (o || s) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                var m = this.startNodeAt(t, r);
                m.tag = e, m.quasi = this.parseTemplate({
                    isTagged: !0
                }), e = this.finishNode(m, "TaggedTemplateExpression")
            }
            return e
        }, Bt.parseExprAtom = function(e) {
            this.type === ht.slash && this.readRegexp();
            var t, r = this.potentialArrowAt === this.start;
            switch (this.type) {
                case ht._super:
                    return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), t = this.startNode(), this.next(), this.type !== ht.parenL || this.allowDirectSuper || this.raise(t.start, "super() call outside constructor of a subclass"), this.type !== ht.dot && this.type !== ht.bracketL && this.type !== ht.parenL && this.unexpected(), this.finishNode(t, "Super");
                case ht._this:
                    return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");
                case ht.name:
                    var n = this.start,
                        i = this.startLoc,
                        s = this.containsEsc,
                        a = this.parseIdent(!1);
                    if (this.options.ecmaVersion >= 8 && !s && "async" === a.name && !this.canInsertSemicolon() && this.eat(ht._function)) return this.parseFunction(this.startNodeAt(n, i), 0, !1, !0);
                    if (r && !this.canInsertSemicolon()) {
                        if (this.eat(ht.arrow)) return this.parseArrowExpression(this.startNodeAt(n, i), [a], !1);
                        if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === ht.name && !s) return a = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(ht.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(n, i), [a], !0)
                    }
                    return a;
                case ht.regexp:
                    var o = this.value;
                    return (t = this.parseLiteral(o.value)).regex = {
                        pattern: o.pattern,
                        flags: o.flags
                    }, t;
                case ht.num:
                case ht.string:
                    return this.parseLiteral(this.value);
                case ht._null:
                case ht._true:
                case ht._false:
                    return (t = this.startNode()).value = this.type === ht._null ? null : this.type === ht._true, t.raw = this.type.keyword, this.next(), this.finishNode(t, "Literal");
                case ht.parenL:
                    var u = this.start,
                        c = this.parseParenAndDistinguishExpression(r);
                    return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(c) && (e.parenthesizedAssign = u), e.parenthesizedBind < 0 && (e.parenthesizedBind = u)), c;
                case ht.bracketL:
                    return t = this.startNode(), this.next(), t.elements = this.parseExprList(ht.bracketR, !0, !0, e), this.finishNode(t, "ArrayExpression");
                case ht.braceL:
                    return this.parseObj(!1, e);
                case ht._function:
                    return t = this.startNode(), this.next(), this.parseFunction(t, 0);
                case ht._class:
                    return this.parseClass(this.startNode(), !1);
                case ht._new:
                    return this.parseNew();
                case ht.backQuote:
                    return this.parseTemplate();
                case ht._import:
                    return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
                default:
                    this.unexpected()
            }
        }, Bt.parseExprImport = function() {
            var e = this.startNode();
            this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
            var t = this.parseIdent(!0);
            switch (this.type) {
                case ht.parenL:
                    return this.parseDynamicImport(e);
                case ht.dot:
                    return e.meta = t, this.parseImportMeta(e);
                default:
                    this.unexpected()
            }
        }, Bt.parseDynamicImport = function(e) {
            if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(ht.parenR)) {
                var t = this.start;
                this.eat(ht.comma) && this.eat(ht.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t)
            }
            return this.finishNode(e, "ImportExpression")
        }, Bt.parseImportMeta = function(e) {
            this.next();
            var t = this.containsEsc;
            return e.property = this.parseIdent(!0), "meta" !== e.property.name && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), "module" !== this.options.sourceType && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty")
        }, Bt.parseLiteral = function(e) {
            var t = this.startNode();
            return t.value = e, t.raw = this.input.slice(this.start, this.end), 110 === t.raw.charCodeAt(t.raw.length - 1) && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal")
        }, Bt.parseParenExpression = function() {
            this.expect(ht.parenL);
            var e = this.parseExpression();
            return this.expect(ht.parenR), e
        }, Bt.parseParenAndDistinguishExpression = function(e) {
            var t, r = this.start,
                n = this.startLoc,
                i = this.options.ecmaVersion >= 8;
            if (this.options.ecmaVersion >= 6) {
                this.next();
                var s, a = this.start,
                    o = this.startLoc,
                    u = [],
                    c = !0,
                    l = !1,
                    h = new Pt,
                    p = this.yieldPos,
                    d = this.awaitPos;
                for (this.yieldPos = 0, this.awaitPos = 0; this.type !== ht.parenR;) {
                    if (c ? c = !1 : this.expect(ht.comma), i && this.afterTrailingComma(ht.parenR, !0)) {
                        l = !0;
                        break
                    }
                    if (this.type === ht.ellipsis) {
                        s = this.start, u.push(this.parseParenItem(this.parseRestBinding())), this.type === ht.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                        break
                    }
                    u.push(this.parseMaybeAssign(!1, h, this.parseParenItem))
                }
                var f = this.start,
                    g = this.startLoc;
                if (this.expect(ht.parenR), e && !this.canInsertSemicolon() && this.eat(ht.arrow)) return this.checkPatternErrors(h, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = p, this.awaitPos = d, this.parseParenArrowList(r, n, u);
                u.length && !l || this.unexpected(this.lastTokStart), s && this.unexpected(s), this.checkExpressionErrors(h, !0), this.yieldPos = p || this.yieldPos, this.awaitPos = d || this.awaitPos, u.length > 1 ? ((t = this.startNodeAt(a, o)).expressions = u, this.finishNodeAt(t, "SequenceExpression", f, g)) : t = u[0]
            } else t = this.parseParenExpression();
            if (this.options.preserveParens) {
                var m = this.startNodeAt(r, n);
                return m.expression = t, this.finishNode(m, "ParenthesizedExpression")
            }
            return t
        }, Bt.parseParenItem = function(e) {
            return e
        }, Bt.parseParenArrowList = function(e, t, r) {
            return this.parseArrowExpression(this.startNodeAt(e, t), r)
        };
        var Ut = [];
        Bt.parseNew = function() {
            this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
            var e = this.startNode(),
                t = this.parseIdent(!0);
            if (this.options.ecmaVersion >= 6 && this.eat(ht.dot)) {
                e.meta = t;
                var r = this.containsEsc;
                return e.property = this.parseIdent(!0), "target" !== e.property.name && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction() || this.raiseRecoverable(e.start, "'new.target' can only be used in functions"), this.finishNode(e, "MetaProperty")
            }
            var n = this.start,
                i = this.startLoc,
                s = this.type === ht._import;
            return e.callee = this.parseSubscripts(this.parseExprAtom(), n, i, !0), s && "ImportExpression" === e.callee.type && this.raise(n, "Cannot use new with import()"), this.eat(ht.parenL) ? e.arguments = this.parseExprList(ht.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Ut, this.finishNode(e, "NewExpression")
        }, Bt.parseTemplateElement = function(e) {
            var t = e.isTagged,
                r = this.startNode();
            return this.type === ht.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
                raw: this.value,
                cooked: null
            }) : r.value = {
                raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                cooked: this.value
            }, this.next(), r.tail = this.type === ht.backQuote, this.finishNode(r, "TemplateElement")
        }, Bt.parseTemplate = function(e) {
            void 0 === e && (e = {});
            var t = e.isTagged;
            void 0 === t && (t = !1);
            var r = this.startNode();
            this.next(), r.expressions = [];
            var n = this.parseTemplateElement({
                isTagged: t
            });
            for (r.quasis = [n]; !n.tail;) this.type === ht.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(ht.dollarBraceL), r.expressions.push(this.parseExpression()), this.expect(ht.braceR), r.quasis.push(n = this.parseTemplateElement({
                isTagged: t
            }));
            return this.next(), this.finishNode(r, "TemplateLiteral")
        }, Bt.isAsyncProp = function(e) {
            return !e.computed && "Identifier" === e.key.type && "async" === e.key.name && (this.type === ht.name || this.type === ht.num || this.type === ht.string || this.type === ht.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === ht.star) && !pt.test(this.input.slice(this.lastTokEnd, this.start))
        }, Bt.parseObj = function(e, t) {
            var r = this.startNode(),
                n = !0,
                i = {};
            for (r.properties = [], this.next(); !this.eat(ht.braceR);) {
                if (n) n = !1;
                else if (this.expect(ht.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(ht.braceR)) break;
                var s = this.parseProperty(e, t);
                e || this.checkPropClash(s, i, t), r.properties.push(s)
            }
            return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression")
        }, Bt.parseProperty = function(e, t) {
            var r, n, i, s, a = this.startNode();
            if (this.options.ecmaVersion >= 9 && this.eat(ht.ellipsis)) return e ? (a.argument = this.parseIdent(!1), this.type === ht.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === ht.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, t), this.type === ht.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
            this.options.ecmaVersion >= 6 && (a.method = !1, a.shorthand = !1, (e || t) && (i = this.start, s = this.startLoc), e || (r = this.eat(ht.star)));
            var o = this.containsEsc;
            return this.parsePropertyName(a), !e && !o && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(a) ? (n = !0, r = this.options.ecmaVersion >= 9 && this.eat(ht.star), this.parsePropertyName(a, t)) : n = !1, this.parsePropertyValue(a, e, r, n, i, s, t, o), this.finishNode(a, "Property")
        }, Bt.parsePropertyValue = function(e, t, r, n, i, s, a, o) {
            if ((r || n) && this.type === ht.colon && this.unexpected(), this.eat(ht.colon)) e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), e.kind = "init";
            else if (this.options.ecmaVersion >= 6 && this.type === ht.parenL) t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(r, n);
            else if (t || o || !(this.options.ecmaVersion >= 5) || e.computed || "Identifier" !== e.key.type || "get" !== e.key.name && "set" !== e.key.name || this.type === ht.comma || this.type === ht.braceR || this.type === ht.eq) this.options.ecmaVersion >= 6 && !e.computed && "Identifier" === e.key.type ? ((r || n) && this.unexpected(), this.checkUnreserved(e.key), "await" !== e.key.name || this.awaitIdentPos || (this.awaitIdentPos = i), e.kind = "init", t ? e.value = this.parseMaybeDefault(i, s, e.key) : this.type === ht.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), e.value = this.parseMaybeDefault(i, s, e.key)) : e.value = e.key, e.shorthand = !0) : this.unexpected();
            else {
                (r || n) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
                var u = "get" === e.kind ? 0 : 1;
                if (e.value.params.length !== u) {
                    var c = e.value.start;
                    "get" === e.kind ? this.raiseRecoverable(c, "getter should have no params") : this.raiseRecoverable(c, "setter should have exactly one param")
                } else "set" === e.kind && "RestElement" === e.value.params[0].type && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params")
            }
        }, Bt.parsePropertyName = function(e) {
            if (this.options.ecmaVersion >= 6) {
                if (this.eat(ht.bracketL)) return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(ht.bracketR), e.key;
                e.computed = !1
            }
            return e.key = this.type === ht.num || this.type === ht.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
        }, Bt.initFunction = function(e) {
            e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1)
        }, Bt.parseMethod = function(e, t, r) {
            var n = this.startNode(),
                i = this.yieldPos,
                s = this.awaitPos,
                a = this.awaitIdentPos;
            return this.initFunction(n), this.options.ecmaVersion >= 6 && (n.generator = e), this.options.ecmaVersion >= 8 && (n.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | It(t, n.generator) | (r ? 128 : 0)), this.expect(ht.parenL), n.params = this.parseBindingList(ht.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(n, !1, !0), this.yieldPos = i, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(n, "FunctionExpression")
        }, Bt.parseArrowExpression = function(e, t, r) {
            var n = this.yieldPos,
                i = this.awaitPos,
                s = this.awaitIdentPos;
            return this.enterScope(16 | It(r, !1)), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1), this.yieldPos = n, this.awaitPos = i, this.awaitIdentPos = s, this.finishNode(e, "ArrowFunctionExpression")
        }, Bt.parseFunctionBody = function(e, t, r) {
            var n = t && this.type !== ht.braceL,
                i = this.strict,
                s = !1;
            if (n) e.body = this.parseMaybeAssign(), e.expression = !0, this.checkParams(e, !1);
            else {
                var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
                i && !a || (s = this.strictDirective(this.end)) && a && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                var o = this.labels;
                this.labels = [], s && (this.strict = !0), this.checkParams(e, !i && !s && !t && !r && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLVal(e.id, 5), e.body = this.parseBlock(!1, void 0, s && !i), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = o
            }
            this.exitScope()
        }, Bt.isSimpleParamList = function(e) {
            for (var t = 0, r = e; t < r.length; t += 1)
                if ("Identifier" !== r[t].type) return !1;
            return !0
        }, Bt.checkParams = function(e, t) {
            for (var r = {}, n = 0, i = e.params; n < i.length; n += 1) {
                var s = i[n];
                this.checkLVal(s, 1, t ? null : r)
            }
        }, Bt.parseExprList = function(e, t, r, n) {
            for (var i = [], s = !0; !this.eat(e);) {
                if (s) s = !1;
                else if (this.expect(ht.comma), t && this.afterTrailingComma(e)) break;
                var a = void 0;
                r && this.type === ht.comma ? a = null : this.type === ht.ellipsis ? (a = this.parseSpread(n), n && this.type === ht.comma && n.trailingComma < 0 && (n.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, n), i.push(a)
            }
            return i
        }, Bt.checkUnreserved = function(e) {
            var t = e.start,
                r = e.end,
                n = e.name;
            this.inGenerator && "yield" === n && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === n && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(t, r).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(n) && (this.inAsync || "await" !== n || this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"))
        }, Bt.parseIdent = function(e, t) {
            var r = this.startNode();
            return this.type === ht.name ? r.name = this.value : this.type.keyword ? (r.name = this.type.keyword, "class" !== r.name && "function" !== r.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(r, "Identifier"), e || (this.checkUnreserved(r), "await" !== r.name || this.awaitIdentPos || (this.awaitIdentPos = r.start)), r
        }, Bt.parseYield = function(e) {
            this.yieldPos || (this.yieldPos = this.start);
            var t = this.startNode();
            return this.next(), this.type === ht.semi || this.canInsertSemicolon() || this.type !== ht.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(ht.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression")
        }, Bt.parseAwait = function() {
            this.awaitPos || (this.awaitPos = this.start);
            var e = this.startNode();
            return this.next(), e.argument = this.parseMaybeUnary(null, !1), this.finishNode(e, "AwaitExpression")
        };
        var Ht = At.prototype;
        Ht.raise = function(e, t) {
            var r = kt(this.input, e);
            t += " (" + r.line + ":" + r.column + ")";
            var n = new SyntaxError(t);
            throw n.pos = e, n.loc = r, n.raisedAt = this.pos, n
        }, Ht.raiseRecoverable = Ht.raise, Ht.curPosition = function() {
            if (this.options.locations) return new wt(this.curLine, this.pos - this.lineStart)
        };
        var Gt = At.prototype,
            Wt = function(e) {
                this.flags = e, this.var = [], this.lexical = [], this.functions = []
            };
        Gt.enterScope = function(e) {
            this.scopeStack.push(new Wt(e))
        }, Gt.exitScope = function() {
            this.scopeStack.pop()
        }, Gt.treatFunctionsAsVarInScope = function(e) {
            return 2 & e.flags || !this.inModule && 1 & e.flags
        }, Gt.declareName = function(e, t, r) {
            var n = !1;
            if (2 === t) {
                var i = this.currentScope();
                n = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1, i.lexical.push(e), this.inModule && 1 & i.flags && delete this.undefinedExports[e]
            } else if (4 === t) this.currentScope().lexical.push(e);
            else if (3 === t) {
                var s = this.currentScope();
                n = this.treatFunctionsAsVar ? s.lexical.indexOf(e) > -1 : s.lexical.indexOf(e) > -1 || s.var.indexOf(e) > -1, s.functions.push(e)
            } else
                for (var a = this.scopeStack.length - 1; a >= 0; --a) {
                    var o = this.scopeStack[a];
                    if (o.lexical.indexOf(e) > -1 && !(32 & o.flags && o.lexical[0] === e) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(e) > -1) {
                        n = !0;
                        break
                    }
                    if (o.var.push(e), this.inModule && 1 & o.flags && delete this.undefinedExports[e], 3 & o.flags) break
                }
            n && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared")
        }, Gt.checkLocalExport = function(e) {
            -1 === this.scopeStack[0].lexical.indexOf(e.name) && -1 === this.scopeStack[0].var.indexOf(e.name) && (this.undefinedExports[e.name] = e)
        }, Gt.currentScope = function() {
            return this.scopeStack[this.scopeStack.length - 1]
        }, Gt.currentVarScope = function() {
            for (var e = this.scopeStack.length - 1;; e--) {
                var t = this.scopeStack[e];
                if (3 & t.flags) return t
            }
        }, Gt.currentThisScope = function() {
            for (var e = this.scopeStack.length - 1;; e--) {
                var t = this.scopeStack[e];
                if (3 & t.flags && !(16 & t.flags)) return t
            }
        };
        var $t = function(e, t, r) {
                this.type = "", this.start = t, this.end = 0, e.options.locations && (this.loc = new Ct(e, r)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [t, 0])
            },
            qt = At.prototype;

        function Jt(e, t, r, n) {
            return e.type = t, e.end = r, this.options.locations && (e.loc.end = n), this.options.ranges && (e.range[1] = r), e
        }
        qt.startNode = function() {
            return new $t(this, this.start, this.startLoc)
        }, qt.startNodeAt = function(e, t) {
            return new $t(this, e, t)
        }, qt.finishNode = function(e, t) {
            return Jt.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc)
        }, qt.finishNodeAt = function(e, t, r, n) {
            return Jt.call(this, e, t, r, n)
        };
        var zt = function(e, t, r, n, i) {
                this.token = e, this.isExpr = !!t, this.preserveSpace = !!r, this.override = n, this.generator = !!i
            },
            Qt = {
                b_stat: new zt("{", !1),
                b_expr: new zt("{", !0),
                b_tmpl: new zt("${", !1),
                p_stat: new zt("(", !1),
                p_expr: new zt("(", !0),
                q_tmpl: new zt("`", !0, !0, (function(e) {
                    return e.tryReadTemplateToken()
                })),
                f_stat: new zt("function", !1),
                f_expr: new zt("function", !0),
                f_expr_gen: new zt("function", !0, !1, null, !0),
                f_gen: new zt("function", !1, !1, null, !0)
            },
            Kt = At.prototype;
        Kt.initialContext = function() {
            return [Qt.b_stat]
        }, Kt.braceIsBlock = function(e) {
            var t = this.curContext();
            return t === Qt.f_expr || t === Qt.f_stat || (e !== ht.colon || t !== Qt.b_stat && t !== Qt.b_expr ? e === ht._return || e === ht.name && this.exprAllowed ? pt.test(this.input.slice(this.lastTokEnd, this.start)) : e === ht._else || e === ht.semi || e === ht.eof || e === ht.parenR || e === ht.arrow || (e === ht.braceL ? t === Qt.b_stat : e !== ht._var && e !== ht._const && e !== ht.name && !this.exprAllowed) : !t.isExpr)
        }, Kt.inGeneratorContext = function() {
            for (var e = this.context.length - 1; e >= 1; e--) {
                var t = this.context[e];
                if ("function" === t.token) return t.generator
            }
            return !1
        }, Kt.updateContext = function(e) {
            var t, r = this.type;
            r.keyword && e === ht.dot ? this.exprAllowed = !1 : (t = r.updateContext) ? t.call(this, e) : this.exprAllowed = r.beforeExpr
        }, ht.parenR.updateContext = ht.braceR.updateContext = function() {
            if (1 !== this.context.length) {
                var e = this.context.pop();
                e === Qt.b_stat && "function" === this.curContext().token && (e = this.context.pop()), this.exprAllowed = !e.isExpr
            } else this.exprAllowed = !0
        }, ht.braceL.updateContext = function(e) {
            this.context.push(this.braceIsBlock(e) ? Qt.b_stat : Qt.b_expr), this.exprAllowed = !0
        }, ht.dollarBraceL.updateContext = function() {
            this.context.push(Qt.b_tmpl), this.exprAllowed = !0
        }, ht.parenL.updateContext = function(e) {
            var t = e === ht._if || e === ht._for || e === ht._with || e === ht._while;
            this.context.push(t ? Qt.p_stat : Qt.p_expr), this.exprAllowed = !0
        }, ht.incDec.updateContext = function() {}, ht._function.updateContext = ht._class.updateContext = function(e) {
            !e.beforeExpr || e === ht.semi || e === ht._else || e === ht._return && pt.test(this.input.slice(this.lastTokEnd, this.start)) || (e === ht.colon || e === ht.braceL) && this.curContext() === Qt.b_stat ? this.context.push(Qt.f_stat) : this.context.push(Qt.f_expr), this.exprAllowed = !1
        }, ht.backQuote.updateContext = function() {
            this.curContext() === Qt.q_tmpl ? this.context.pop() : this.context.push(Qt.q_tmpl), this.exprAllowed = !1
        }, ht.star.updateContext = function(e) {
            if (e === ht._function) {
                var t = this.context.length - 1;
                this.context[t] === Qt.f_expr ? this.context[t] = Qt.f_expr_gen : this.context[t] = Qt.f_gen
            }
            this.exprAllowed = !0
        }, ht.name.updateContext = function(e) {
            var t = !1;
            this.options.ecmaVersion >= 6 && e !== ht.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t
        };
        var Xt = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
            Yt = Xt + " Extended_Pictographic",
            Zt = {
                9: Xt,
                10: Yt,
                11: Yt
            },
            er = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
            tr = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
            rr = tr + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
            nr = {
                9: tr,
                10: rr,
                11: rr + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"
            },
            ir = {};

        function sr(e) {
            var t = ir[e] = {
                binary: _t(Zt[e] + " " + er),
                nonBinary: {
                    General_Category: _t(er),
                    Script: _t(nr[e])
                }
            };
            t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions
        }
        sr(9), sr(10), sr(11);
        var ar = At.prototype,
            or = function(e) {
                this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = ir[e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = []
            };

        function ur(e) {
            return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
        }

        function cr(e) {
            return 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || e >= 91 && e <= 94 || e >= 123 && e <= 125
        }

        function lr(e) {
            return e >= 65 && e <= 90 || e >= 97 && e <= 122
        }

        function hr(e) {
            return lr(e) || 95 === e
        }

        function pr(e) {
            return hr(e) || dr(e)
        }

        function dr(e) {
            return e >= 48 && e <= 57
        }

        function fr(e) {
            return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
        }

        function gr(e) {
            return e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : e - 48
        }

        function mr(e) {
            return e >= 48 && e <= 55
        }
        or.prototype.reset = function(e, t, r) {
            var n = -1 !== r.indexOf("u");
            this.start = 0 | e, this.source = t + "", this.flags = r, this.switchU = n && this.parser.options.ecmaVersion >= 6, this.switchN = n && this.parser.options.ecmaVersion >= 9
        }, or.prototype.raise = function(e) {
            this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e)
        }, or.prototype.at = function(e, t) {
            void 0 === t && (t = !1);
            var r = this.source,
                n = r.length;
            if (e >= n) return -1;
            var i = r.charCodeAt(e);
            if (!t && !this.switchU || i <= 55295 || i >= 57344 || e + 1 >= n) return i;
            var s = r.charCodeAt(e + 1);
            return s >= 56320 && s <= 57343 ? (i << 10) + s - 56613888 : i
        }, or.prototype.nextIndex = function(e, t) {
            void 0 === t && (t = !1);
            var r = this.source,
                n = r.length;
            if (e >= n) return n;
            var i, s = r.charCodeAt(e);
            return !t && !this.switchU || s <= 55295 || s >= 57344 || e + 1 >= n || (i = r.charCodeAt(e + 1)) < 56320 || i > 57343 ? e + 1 : e + 2
        }, or.prototype.current = function(e) {
            return void 0 === e && (e = !1), this.at(this.pos, e)
        }, or.prototype.lookahead = function(e) {
            return void 0 === e && (e = !1), this.at(this.nextIndex(this.pos, e), e)
        }, or.prototype.advance = function(e) {
            void 0 === e && (e = !1), this.pos = this.nextIndex(this.pos, e)
        }, or.prototype.eat = function(e, t) {
            return void 0 === t && (t = !1), this.current(t) === e && (this.advance(t), !0)
        }, ar.validateRegExpFlags = function(e) {
            for (var t = e.validFlags, r = e.flags, n = 0; n < r.length; n++) {
                var i = r.charAt(n); - 1 === t.indexOf(i) && this.raise(e.start, "Invalid regular expression flag"), r.indexOf(i, n + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag")
            }
        }, ar.validateRegExpPattern = function(e) {
            this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = !0, this.regexp_pattern(e))
        }, ar.regexp_pattern = function(e) {
            e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
            for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
                var n = r[t]; - 1 === e.groupNames.indexOf(n) && e.raise("Invalid named capture referenced")
            }
        }, ar.regexp_disjunction = function(e) {
            for (this.regexp_alternative(e); e.eat(124);) this.regexp_alternative(e);
            this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets")
        }, ar.regexp_alternative = function(e) {
            for (; e.pos < e.source.length && this.regexp_eatTerm(e););
        }, ar.regexp_eatTerm = function(e) {
            return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : !!(e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), !0)
        }, ar.regexp_eatAssertion = function(e) {
            var t = e.pos;
            if (e.lastAssertionIsQuantifiable = !1, e.eat(94) || e.eat(36)) return !0;
            if (e.eat(92)) {
                if (e.eat(66) || e.eat(98)) return !0;
                e.pos = t
            }
            if (e.eat(40) && e.eat(63)) {
                var r = !1;
                if (this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33)) return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !r, !0
            }
            return e.pos = t, !1
        }, ar.regexp_eatQuantifier = function(e, t) {
            return void 0 === t && (t = !1), !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0)
        }, ar.regexp_eatQuantifierPrefix = function(e, t) {
            return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t)
        }, ar.regexp_eatBracedQuantifier = function(e, t) {
            var r = e.pos;
            if (e.eat(123)) {
                var n = 0,
                    i = -1;
                if (this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(125))) return -1 !== i && i < n && !t && e.raise("numbers out of order in {} quantifier"), !0;
                e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = r
            }
            return !1
        }, ar.regexp_eatAtom = function(e) {
            return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e)
        }, ar.regexp_eatReverseSolidusAtomEscape = function(e) {
            var t = e.pos;
            if (e.eat(92)) {
                if (this.regexp_eatAtomEscape(e)) return !0;
                e.pos = t
            }
            return !1
        }, ar.regexp_eatUncapturingGroup = function(e) {
            var t = e.pos;
            if (e.eat(40)) {
                if (e.eat(63) && e.eat(58)) {
                    if (this.regexp_disjunction(e), e.eat(41)) return !0;
                    e.raise("Unterminated group")
                }
                e.pos = t
            }
            return !1
        }, ar.regexp_eatCapturingGroup = function(e) {
            if (e.eat(40)) {
                if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : 63 === e.current() && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, !0;
                e.raise("Unterminated group")
            }
            return !1
        }, ar.regexp_eatExtendedAtom = function(e) {
            return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e)
        }, ar.regexp_eatInvalidBracedQuantifier = function(e) {
            return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1
        }, ar.regexp_eatSyntaxCharacter = function(e) {
            var t = e.current();
            return !!cr(t) && (e.lastIntValue = t, e.advance(), !0)
        }, ar.regexp_eatPatternCharacters = function(e) {
            for (var t = e.pos, r = 0; - 1 !== (r = e.current()) && !cr(r);) e.advance();
            return e.pos !== t
        }, ar.regexp_eatExtendedPatternCharacter = function(e) {
            var t = e.current();
            return !(-1 === t || 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || 91 === t || 94 === t || 124 === t || (e.advance(), 0))
        }, ar.regexp_groupSpecifier = function(e) {
            if (e.eat(63)) {
                if (this.regexp_eatGroupName(e)) return -1 !== e.groupNames.indexOf(e.lastStringValue) && e.raise("Duplicate capture group name"), void e.groupNames.push(e.lastStringValue);
                e.raise("Invalid group")
            }
        }, ar.regexp_eatGroupName = function(e) {
            if (e.lastStringValue = "", e.eat(60)) {
                if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
                e.raise("Invalid capture group name")
            }
            return !1
        }, ar.regexp_eatRegExpIdentifierName = function(e) {
            if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
                for (e.lastStringValue += ur(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) e.lastStringValue += ur(e.lastIntValue);
                return !0
            }
            return !1
        }, ar.regexp_eatRegExpIdentifierStart = function(e) {
            var t = e.pos,
                r = this.options.ecmaVersion >= 11,
                n = e.current(r);
            return e.advance(r), 92 === n && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue),
                function(e) {
                    return nt(e, !0) || 36 === e || 95 === e
                }(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1)
        }, ar.regexp_eatRegExpIdentifierPart = function(e) {
            var t = e.pos,
                r = this.options.ecmaVersion >= 11,
                n = e.current(r);
            return e.advance(r), 92 === n && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue),
                function(e) {
                    return it(e, !0) || 36 === e || 95 === e || 8204 === e || 8205 === e
                }(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1)
        }, ar.regexp_eatAtomEscape = function(e) {
            return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) || (e.switchU && (99 === e.current() && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1)
        }, ar.regexp_eatBackReference = function(e) {
            var t = e.pos;
            if (this.regexp_eatDecimalEscape(e)) {
                var r = e.lastIntValue;
                if (e.switchU) return r > e.maxBackReference && (e.maxBackReference = r), !0;
                if (r <= e.numCapturingParens) return !0;
                e.pos = t
            }
            return !1
        }, ar.regexp_eatKGroupName = function(e) {
            if (e.eat(107)) {
                if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
                e.raise("Invalid named reference")
            }
            return !1
        }, ar.regexp_eatCharacterEscape = function(e) {
            return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e)
        }, ar.regexp_eatCControlLetter = function(e) {
            var t = e.pos;
            if (e.eat(99)) {
                if (this.regexp_eatControlLetter(e)) return !0;
                e.pos = t
            }
            return !1
        }, ar.regexp_eatZero = function(e) {
            return 48 === e.current() && !dr(e.lookahead()) && (e.lastIntValue = 0, e.advance(), !0)
        }, ar.regexp_eatControlEscape = function(e) {
            var t = e.current();
            return 116 === t ? (e.lastIntValue = 9, e.advance(), !0) : 110 === t ? (e.lastIntValue = 10, e.advance(), !0) : 118 === t ? (e.lastIntValue = 11, e.advance(), !0) : 102 === t ? (e.lastIntValue = 12, e.advance(), !0) : 114 === t && (e.lastIntValue = 13, e.advance(), !0)
        }, ar.regexp_eatControlLetter = function(e) {
            var t = e.current();
            return !!lr(t) && (e.lastIntValue = t % 32, e.advance(), !0)
        }, ar.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
            void 0 === t && (t = !1);
            var r, n = e.pos,
                i = t || e.switchU;
            if (e.eat(117)) {
                if (this.regexp_eatFixedHexDigits(e, 4)) {
                    var s = e.lastIntValue;
                    if (i && s >= 55296 && s <= 56319) {
                        var a = e.pos;
                        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
                            var o = e.lastIntValue;
                            if (o >= 56320 && o <= 57343) return e.lastIntValue = 1024 * (s - 55296) + (o - 56320) + 65536, !0
                        }
                        e.pos = a, e.lastIntValue = s
                    }
                    return !0
                }
                if (i && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && (r = e.lastIntValue) >= 0 && r <= 1114111) return !0;
                i && e.raise("Invalid unicode escape"), e.pos = n
            }
            return !1
        }, ar.regexp_eatIdentityEscape = function(e) {
            if (e.switchU) return !!this.regexp_eatSyntaxCharacter(e) || !!e.eat(47) && (e.lastIntValue = 47, !0);
            var t = e.current();
            return !(99 === t || e.switchN && 107 === t || (e.lastIntValue = t, e.advance(), 0))
        }, ar.regexp_eatDecimalEscape = function(e) {
            e.lastIntValue = 0;
            var t = e.current();
            if (t >= 49 && t <= 57) {
                do {
                    e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance()
                } while ((t = e.current()) >= 48 && t <= 57);
                return !0
            }
            return !1
        }, ar.regexp_eatCharacterClassEscape = function(e) {
            var t = e.current();
            if (function(e) {
                    return 100 === e || 68 === e || 115 === e || 83 === e || 119 === e || 87 === e
                }(t)) return e.lastIntValue = -1, e.advance(), !0;
            if (e.switchU && this.options.ecmaVersion >= 9 && (80 === t || 112 === t)) {
                if (e.lastIntValue = -1, e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125)) return !0;
                e.raise("Invalid property name")
            }
            return !1
        }, ar.regexp_eatUnicodePropertyValueExpression = function(e) {
            var t = e.pos;
            if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
                var r = e.lastStringValue;
                if (this.regexp_eatUnicodePropertyValue(e)) {
                    var n = e.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameAndValue(e, r, n), !0
                }
            }
            if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
                var i = e.lastStringValue;
                return this.regexp_validateUnicodePropertyNameOrValue(e, i), !0
            }
            return !1
        }, ar.regexp_validateUnicodePropertyNameAndValue = function(e, t, r) {
            xt(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(r) || e.raise("Invalid property value")
        }, ar.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
            e.unicodeProperties.binary.test(t) || e.raise("Invalid property name")
        }, ar.regexp_eatUnicodePropertyName = function(e) {
            var t = 0;
            for (e.lastStringValue = ""; hr(t = e.current());) e.lastStringValue += ur(t), e.advance();
            return "" !== e.lastStringValue
        }, ar.regexp_eatUnicodePropertyValue = function(e) {
            var t = 0;
            for (e.lastStringValue = ""; pr(t = e.current());) e.lastStringValue += ur(t), e.advance();
            return "" !== e.lastStringValue
        }, ar.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
            return this.regexp_eatUnicodePropertyValue(e)
        }, ar.regexp_eatCharacterClass = function(e) {
            if (e.eat(91)) {
                if (e.eat(94), this.regexp_classRanges(e), e.eat(93)) return !0;
                e.raise("Unterminated character class")
            }
            return !1
        }, ar.regexp_classRanges = function(e) {
            for (; this.regexp_eatClassAtom(e);) {
                var t = e.lastIntValue;
                if (e.eat(45) && this.regexp_eatClassAtom(e)) {
                    var r = e.lastIntValue;
                    !e.switchU || -1 !== t && -1 !== r || e.raise("Invalid character class"), -1 !== t && -1 !== r && t > r && e.raise("Range out of order in character class")
                }
            }
        }, ar.regexp_eatClassAtom = function(e) {
            var t = e.pos;
            if (e.eat(92)) {
                if (this.regexp_eatClassEscape(e)) return !0;
                if (e.switchU) {
                    var r = e.current();
                    (99 === r || mr(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape")
                }
                e.pos = t
            }
            var n = e.current();
            return 93 !== n && (e.lastIntValue = n, e.advance(), !0)
        }, ar.regexp_eatClassEscape = function(e) {
            var t = e.pos;
            if (e.eat(98)) return e.lastIntValue = 8, !0;
            if (e.switchU && e.eat(45)) return e.lastIntValue = 45, !0;
            if (!e.switchU && e.eat(99)) {
                if (this.regexp_eatClassControlLetter(e)) return !0;
                e.pos = t
            }
            return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
        }, ar.regexp_eatClassControlLetter = function(e) {
            var t = e.current();
            return !(!dr(t) && 95 !== t || (e.lastIntValue = t % 32, e.advance(), 0))
        }, ar.regexp_eatHexEscapeSequence = function(e) {
            var t = e.pos;
            if (e.eat(120)) {
                if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
                e.switchU && e.raise("Invalid escape"), e.pos = t
            }
            return !1
        }, ar.regexp_eatDecimalDigits = function(e) {
            var t = e.pos,
                r = 0;
            for (e.lastIntValue = 0; dr(r = e.current());) e.lastIntValue = 10 * e.lastIntValue + (r - 48), e.advance();
            return e.pos !== t
        }, ar.regexp_eatHexDigits = function(e) {
            var t = e.pos,
                r = 0;
            for (e.lastIntValue = 0; fr(r = e.current());) e.lastIntValue = 16 * e.lastIntValue + gr(r), e.advance();
            return e.pos !== t
        }, ar.regexp_eatLegacyOctalEscapeSequence = function(e) {
            if (this.regexp_eatOctalDigit(e)) {
                var t = e.lastIntValue;
                if (this.regexp_eatOctalDigit(e)) {
                    var r = e.lastIntValue;
                    t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = 64 * t + 8 * r + e.lastIntValue : e.lastIntValue = 8 * t + r
                } else e.lastIntValue = t;
                return !0
            }
            return !1
        }, ar.regexp_eatOctalDigit = function(e) {
            var t = e.current();
            return mr(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1)
        }, ar.regexp_eatFixedHexDigits = function(e, t) {
            var r = e.pos;
            e.lastIntValue = 0;
            for (var n = 0; n < t; ++n) {
                var i = e.current();
                if (!fr(i)) return e.pos = r, !1;
                e.lastIntValue = 16 * e.lastIntValue + gr(i), e.advance()
            }
            return !0
        };
        var vr = function(e) {
                this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new Ct(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end])
            },
            br = At.prototype;

        function yr(e) {
            return "function" != typeof BigInt ? null : BigInt(e.replace(/_/g, ""))
        }

        function xr(e) {
            return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
        }
        br.next = function(e) {
            !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new vr(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
        }, br.getToken = function() {
            return this.next(), new vr(this)
        }, "undefined" != typeof Symbol && (br[Symbol.iterator] = function() {
            var e = this;
            return {
                next: function() {
                    var t = e.getToken();
                    return {
                        done: t.type === ht.eof,
                        value: t
                    }
                }
            }
        }), br.curContext = function() {
            return this.context[this.context.length - 1]
        }, br.nextToken = function() {
            var e = this.curContext();
            return e && e.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(ht.eof) : e.override ? e.override(this) : void this.readToken(this.fullCharCodeAtPos())
        }, br.readToken = function(e) {
            return nt(e, this.options.ecmaVersion >= 6) || 92 === e ? this.readWord() : this.getTokenFromCode(e)
        }, br.fullCharCodeAtPos = function() {
            var e = this.input.charCodeAt(this.pos);
            return e <= 55295 || e >= 57344 ? e : (e << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
        }, br.skipBlockComment = function() {
            var e, t = this.options.onComment && this.curPosition(),
                r = this.pos,
                n = this.input.indexOf("*/", this.pos += 2);
            if (-1 === n && this.raise(this.pos - 2, "Unterminated comment"), this.pos = n + 2, this.options.locations)
                for (dt.lastIndex = r;
                    (e = dt.exec(this.input)) && e.index < this.pos;) ++this.curLine, this.lineStart = e.index + e[0].length;
            this.options.onComment && this.options.onComment(!0, this.input.slice(r + 2, n), r, this.pos, t, this.curPosition())
        }, br.skipLineComment = function(e) {
            for (var t = this.pos, r = this.options.onComment && this.curPosition(), n = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !ft(n);) n = this.input.charCodeAt(++this.pos);
            this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, r, this.curPosition())
        }, br.skipSpace = function() {
            e: for (; this.pos < this.input.length;) {
                var e = this.input.charCodeAt(this.pos);
                switch (e) {
                    case 32:
                    case 160:
                        ++this.pos;
                        break;
                    case 13:
                        10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                    case 10:
                    case 8232:
                    case 8233:
                        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                        break;
                    case 47:
                        switch (this.input.charCodeAt(this.pos + 1)) {
                            case 42:
                                this.skipBlockComment();
                                break;
                            case 47:
                                this.skipLineComment(2);
                                break;
                            default:
                                break e
                        }
                        break;
                    default:
                        if (!(e > 8 && e < 14 || e >= 5760 && gt.test(String.fromCharCode(e)))) break e;
                        ++this.pos
                }
            }
        }, br.finishToken = function(e, t) {
            this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
            var r = this.type;
            this.type = e, this.value = t, this.updateContext(r)
        }, br.readToken_dot = function() {
            var e = this.input.charCodeAt(this.pos + 1);
            if (e >= 48 && e <= 57) return this.readNumber(!0);
            var t = this.input.charCodeAt(this.pos + 2);
            return this.options.ecmaVersion >= 6 && 46 === e && 46 === t ? (this.pos += 3, this.finishToken(ht.ellipsis)) : (++this.pos, this.finishToken(ht.dot))
        }, br.readToken_slash = function() {
            var e = this.input.charCodeAt(this.pos + 1);
            return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === e ? this.finishOp(ht.assign, 2) : this.finishOp(ht.slash, 1)
        }, br.readToken_mult_modulo_exp = function(e) {
            var t = this.input.charCodeAt(this.pos + 1),
                r = 1,
                n = 42 === e ? ht.star : ht.modulo;
            return this.options.ecmaVersion >= 7 && 42 === e && 42 === t && (++r, n = ht.starstar, t = this.input.charCodeAt(this.pos + 2)), 61 === t ? this.finishOp(ht.assign, r + 1) : this.finishOp(n, r)
        }, br.readToken_pipe_amp = function(e) {
            var t = this.input.charCodeAt(this.pos + 1);
            return t === e ? this.options.ecmaVersion >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(ht.assign, 3) : this.finishOp(124 === e ? ht.logicalOR : ht.logicalAND, 2) : 61 === t ? this.finishOp(ht.assign, 2) : this.finishOp(124 === e ? ht.bitwiseOR : ht.bitwiseAND, 1)
        }, br.readToken_caret = function() {
            return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(ht.assign, 2) : this.finishOp(ht.bitwiseXOR, 1)
        }, br.readToken_plus_min = function(e) {
            var t = this.input.charCodeAt(this.pos + 1);
            return t === e ? 45 !== t || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !pt.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(ht.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === t ? this.finishOp(ht.assign, 2) : this.finishOp(ht.plusMin, 1)
        }, br.readToken_lt_gt = function(e) {
            var t = this.input.charCodeAt(this.pos + 1),
                r = 1;
            return t === e ? (r = 62 === e && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + r) ? this.finishOp(ht.assign, r + 1) : this.finishOp(ht.bitShift, r)) : 33 !== t || 60 !== e || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === t && (r = 2), this.finishOp(ht.relational, r)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
        }, br.readToken_eq_excl = function(e) {
            var t = this.input.charCodeAt(this.pos + 1);
            return 61 === t ? this.finishOp(ht.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === e && 62 === t && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(ht.arrow)) : this.finishOp(61 === e ? ht.eq : ht.prefix, 1)
        }, br.readToken_question = function() {
            var e = this.options.ecmaVersion;
            if (e >= 11) {
                var t = this.input.charCodeAt(this.pos + 1);
                if (46 === t) {
                    var r = this.input.charCodeAt(this.pos + 2);
                    if (r < 48 || r > 57) return this.finishOp(ht.questionDot, 2)
                }
                if (63 === t) return e >= 12 && 61 === this.input.charCodeAt(this.pos + 2) ? this.finishOp(ht.assign, 3) : this.finishOp(ht.coalesce, 2)
            }
            return this.finishOp(ht.question, 1)
        }, br.getTokenFromCode = function(e) {
            switch (e) {
                case 46:
                    return this.readToken_dot();
                case 40:
                    return ++this.pos, this.finishToken(ht.parenL);
                case 41:
                    return ++this.pos, this.finishToken(ht.parenR);
                case 59:
                    return ++this.pos, this.finishToken(ht.semi);
                case 44:
                    return ++this.pos, this.finishToken(ht.comma);
                case 91:
                    return ++this.pos, this.finishToken(ht.bracketL);
                case 93:
                    return ++this.pos, this.finishToken(ht.bracketR);
                case 123:
                    return ++this.pos, this.finishToken(ht.braceL);
                case 125:
                    return ++this.pos, this.finishToken(ht.braceR);
                case 58:
                    return ++this.pos, this.finishToken(ht.colon);
                case 96:
                    if (this.options.ecmaVersion < 6) break;
                    return ++this.pos, this.finishToken(ht.backQuote);
                case 48:
                    var t = this.input.charCodeAt(this.pos + 1);
                    if (120 === t || 88 === t) return this.readRadixNumber(16);
                    if (this.options.ecmaVersion >= 6) {
                        if (111 === t || 79 === t) return this.readRadixNumber(8);
                        if (98 === t || 66 === t) return this.readRadixNumber(2)
                    }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    return this.readNumber(!1);
                case 34:
                case 39:
                    return this.readString(e);
                case 47:
                    return this.readToken_slash();
                case 37:
                case 42:
                    return this.readToken_mult_modulo_exp(e);
                case 124:
                case 38:
                    return this.readToken_pipe_amp(e);
                case 94:
                    return this.readToken_caret();
                case 43:
                case 45:
                    return this.readToken_plus_min(e);
                case 60:
                case 62:
                    return this.readToken_lt_gt(e);
                case 61:
                case 33:
                    return this.readToken_eq_excl(e);
                case 63:
                    return this.readToken_question();
                case 126:
                    return this.finishOp(ht.prefix, 1)
            }
            this.raise(this.pos, "Unexpected character '" + xr(e) + "'")
        }, br.finishOp = function(e, t) {
            var r = this.input.slice(this.pos, this.pos + t);
            return this.pos += t, this.finishToken(e, r)
        }, br.readRegexp = function() {
            for (var e, t, r = this.pos;;) {
                this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
                var n = this.input.charAt(this.pos);
                if (pt.test(n) && this.raise(r, "Unterminated regular expression"), e) e = !1;
                else {
                    if ("[" === n) t = !0;
                    else if ("]" === n && t) t = !1;
                    else if ("/" === n && !t) break;
                    e = "\\" === n
                }++this.pos
            }
            var i = this.input.slice(r, this.pos);
            ++this.pos;
            var s = this.pos,
                a = this.readWord1();
            this.containsEsc && this.unexpected(s);
            var o = this.regexpState || (this.regexpState = new or(this));
            o.reset(r, i, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
            var u = null;
            try {
                u = new RegExp(i, a)
            } catch (e) {}
            return this.finishToken(ht.regexp, {
                pattern: i,
                flags: a,
                value: u
            })
        }, br.readInt = function(e, t, r) {
            for (var n = this.options.ecmaVersion >= 12 && void 0 === t, i = r && 48 === this.input.charCodeAt(this.pos), s = this.pos, a = 0, o = 0, u = 0, c = null == t ? 1 / 0 : t; u < c; ++u, ++this.pos) {
                var l = this.input.charCodeAt(this.pos),
                    h = void 0;
                if (n && 95 === l) i && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === u && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = l;
                else {
                    if ((h = l >= 97 ? l - 97 + 10 : l >= 65 ? l - 65 + 10 : l >= 48 && l <= 57 ? l - 48 : 1 / 0) >= e) break;
                    o = l, a = a * e + h
                }
            }
            return n && 95 === o && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === s || null != t && this.pos - s !== t ? null : a
        }, br.readRadixNumber = function(e) {
            var t = this.pos;
            this.pos += 2;
            var r = this.readInt(e);
            return null == r && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (r = yr(this.input.slice(t, this.pos)), ++this.pos) : nt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(ht.num, r)
        }, br.readNumber = function(e) {
            var t = this.pos;
            e || null !== this.readInt(10, void 0, !0) || this.raise(t, "Invalid number");
            var r = this.pos - t >= 2 && 48 === this.input.charCodeAt(t);
            r && this.strict && this.raise(t, "Invalid number");
            var n = this.input.charCodeAt(this.pos);
            if (!r && !e && this.options.ecmaVersion >= 11 && 110 === n) {
                var i = yr(this.input.slice(t, this.pos));
                return ++this.pos, nt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(ht.num, i)
            }
            r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1), 46 !== n || r || (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)), 69 !== n && 101 !== n || r || (43 !== (n = this.input.charCodeAt(++this.pos)) && 45 !== n || ++this.pos, null === this.readInt(10) && this.raise(t, "Invalid number")), nt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
            var s, a = (s = this.input.slice(t, this.pos), r ? parseInt(s, 8) : parseFloat(s.replace(/_/g, "")));
            return this.finishToken(ht.num, a)
        }, br.readCodePoint = function() {
            var e;
            if (123 === this.input.charCodeAt(this.pos)) {
                this.options.ecmaVersion < 6 && this.unexpected();
                var t = ++this.pos;
                e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(t, "Code point out of bounds")
            } else e = this.readHexChar(4);
            return e
        }, br.readString = function(e) {
            for (var t = "", r = ++this.pos;;) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                var n = this.input.charCodeAt(this.pos);
                if (n === e) break;
                92 === n ? (t += this.input.slice(r, this.pos), t += this.readEscapedChar(!1), r = this.pos) : (ft(n, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
            }
            return t += this.input.slice(r, this.pos++), this.finishToken(ht.string, t)
        };
        var Sr = {};

        function _r(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }

        function wr(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return wr = function(e) {
                if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                var r;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, n)
                }

                function n() {
                    return Cr(e, arguments, Er(this).constructor)
                }
                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), kr(n, e)
            }, wr(e)
        }

        function Cr(e, t, r) {
            return Cr = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function(e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var i = new(Function.bind.apply(e, n));
                return r && kr(i, r.prototype), i
            }, Cr.apply(null, arguments)
        }

        function kr(e, t) {
            return kr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, kr(e, t)
        }

        function Er(e) {
            return Er = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Er(e)
        }
        br.tryReadTemplateToken = function() {
            this.inTemplateElement = !0;
            try {
                this.readTmplToken()
            } catch (e) {
                if (e !== Sr) throw e;
                this.readInvalidTemplateToken()
            }
            this.inTemplateElement = !1
        }, br.invalidStringToken = function(e, t) {
            if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Sr;
            this.raise(e, t)
        }, br.readTmplToken = function() {
            for (var e = "", t = this.pos;;) {
                this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                var r = this.input.charCodeAt(this.pos);
                if (96 === r || 36 === r && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== ht.template && this.type !== ht.invalidTemplate ? (e += this.input.slice(t, this.pos), this.finishToken(ht.template, e)) : 36 === r ? (this.pos += 2, this.finishToken(ht.dollarBraceL)) : (++this.pos, this.finishToken(ht.backQuote));
                if (92 === r) e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
                else if (ft(r)) {
                    switch (e += this.input.slice(t, this.pos), ++this.pos, r) {
                        case 13:
                            10 === this.input.charCodeAt(this.pos) && ++this.pos;
                        case 10:
                            e += "\n";
                            break;
                        default:
                            e += String.fromCharCode(r)
                    }
                    this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos
                } else ++this.pos
            }
        }, br.readInvalidTemplateToken = function() {
            for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                case "\\":
                    ++this.pos;
                    break;
                case "$":
                    if ("{" !== this.input[this.pos + 1]) break;
                case "`":
                    return this.finishToken(ht.invalidTemplate, this.input.slice(this.start, this.pos))
            }
            this.raise(this.start, "Unterminated template")
        }, br.readEscapedChar = function(e) {
            var t = this.input.charCodeAt(++this.pos);
            switch (++this.pos, t) {
                case 110:
                    return "\n";
                case 114:
                    return "\r";
                case 120:
                    return String.fromCharCode(this.readHexChar(2));
                case 117:
                    return xr(this.readCodePoint());
                case 116:
                    return "\t";
                case 98:
                    return "\b";
                case 118:
                    return "\v";
                case 102:
                    return "\f";
                case 13:
                    10 === this.input.charCodeAt(this.pos) && ++this.pos;
                case 10:
                    return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                case 56:
                case 57:
                    if (e) {
                        var r = this.pos - 1;
                        return this.invalidStringToken(r, "Invalid escape sequence in template string"), null
                    }
                default:
                    if (t >= 48 && t <= 55) {
                        var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                            i = parseInt(n, 8);
                        return i > 255 && (n = n.slice(0, -1), i = parseInt(n, 8)), this.pos += n.length - 1, t = this.input.charCodeAt(this.pos), "0" === n && 56 !== t && 57 !== t || !this.strict && !e || this.invalidStringToken(this.pos - 1 - n.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(i)
                    }
                    return ft(t) ? "" : String.fromCharCode(t)
            }
        }, br.readHexChar = function(e) {
            var t = this.pos,
                r = this.readInt(16, e);
            return null === r && this.invalidStringToken(t, "Bad character escape sequence"), r
        }, br.readWord1 = function() {
            this.containsEsc = !1;
            for (var e = "", t = !0, r = this.pos, n = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                var i = this.fullCharCodeAtPos();
                if (it(i, n)) this.pos += i <= 65535 ? 1 : 2;
                else {
                    if (92 !== i) break;
                    this.containsEsc = !0, e += this.input.slice(r, this.pos);
                    var s = this.pos;
                    117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                    var a = this.readCodePoint();
                    (t ? nt : it)(a, n) || this.invalidStringToken(s, "Invalid Unicode escape"), e += xr(a), r = this.pos
                }
                t = !1
            }
            return e + this.input.slice(r, this.pos)
        }, br.readWord = function() {
            var e = this.readWord1(),
                t = ht.name;
            return this.keywords.test(e) && (t = ct[e]), this.finishToken(t, e)
        }, At.acorn = {
            Parser: At,
            version: "7.4.1",
            defaultOptions: Et,
            Position: wt,
            SourceLocation: Ct,
            getLineInfo: kt,
            Node: $t,
            TokenType: st,
            tokTypes: ht,
            keywordTypes: ct,
            TokContext: zt,
            tokContexts: Qt,
            isIdentifierChar: it,
            isIdentifierStart: nt,
            Token: vr,
            isNewLine: ft,
            lineBreak: pt,
            lineBreakG: dt,
            nonASCIIwhitespace: gt
        };
        var Ir = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return _r(t, e), t
            }(wr(Error)),
            Ar = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return _r(t, e), t
            }(wr(SyntaxError)),
            Or = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return _r(t, e), t
            }(wr(ReferenceError)),
            Tr = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return _r(t, e), t
            }(wr(TypeError)),
            Nr = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return _r(t, e), t
            }(Ir),
            Pr = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return _r(t, e), t
            }(Ar),
            Rr = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return _r(t, e), t
            }(Or),
            Lr = {
                UnknownError: [3001, "%0", Nr],
                ExecutionTimeOutError: [3002, "Script execution timed out after %0ms", Nr],
                NodeTypeSyntaxError: [1001, "Unknown node type: %0", Rr],
                BinaryOperatorSyntaxError: [1002, "Unknown binary operator: %0", Rr],
                LogicalOperatorSyntaxError: [1003, "Unknown logical operator: %0", Rr],
                UnaryOperatorSyntaxError: [1004, "Unknown unary operator: %0", Rr],
                UpdateOperatorSyntaxError: [1005, "Unknown update operator: %0", Rr],
                ObjectStructureSyntaxError: [1006, "Unknown object structure: %0", Rr],
                AssignmentExpressionSyntaxError: [1007, "Unknown assignment expression: %0", Rr],
                VariableTypeSyntaxError: [1008, "Unknown variable type: %0", Rr],
                ParamTypeSyntaxError: [1009, "Unknown param type: %0", Rr],
                AssignmentTypeSyntaxError: [1010, "Unknown assignment type: %0", Rr],
                FunctionUndefinedReferenceError: [2001, "%0 is not a function", Or],
                VariableUndefinedReferenceError: [2002, "%0 is not defined", Or],
                IsNotConstructor: [2003, "%0 is not a constructor", Tr]
            };

        function Dr(e, t, r) {
            return Dr = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function(e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var i = new(Function.bind.apply(e, n));
                return r && Mr(i, r.prototype), i
            }, Dr.apply(null, arguments)
        }

        function Mr(e, t) {
            return Mr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, Mr(e, t)
        }

        function Fr(e, t) {
            Object.defineProperty(e, "name", {
                value: t,
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        }
        var Vr = Object.prototype.hasOwnProperty,
            jr = Symbol("Break"),
            Br = Symbol("Continue"),
            Ur = Symbol("DefaultCase"),
            Hr = Symbol("EmptyStatementReturn"),
            Gr = Symbol("WithScopeName"),
            Wr = Symbol("SuperScopeName"),
            $r = Symbol("RootScopeName"),
            qr = Symbol("GlobalScopeName");

        function Jr(e) {
            return "function" == typeof e
        }
        var zr = function() {
            function e(e) {
                this.interpreter = e
            }
            return e.prototype.generator = function() {
                var e = this.interpreter;
                return {
                    getOptions: e.getOptions.bind(e),
                    getCurrentScope: function() {
                        return this.getCurrentScope()
                    }.bind(e),
                    getGlobalScope: function() {
                        return this.getGlobalScope()
                    }.bind(e),
                    getCurrentContext: function() {
                        return this.getCurrentContext()
                    }.bind(e),
                    getExecStartTime: e.getExecStartTime.bind(e)
                }
            }, e
        }();

        function Qr(e, t, r) {
            if (void 0 === r && (r = !0), !(e instanceof zr)) throw new Error("Illegal call");
            if ("string" != typeof t) return t;
            if (t) {
                var n = e.generator(),
                    i = {
                        timeout: n.getOptions().timeout,
                        _initEnv: function() {
                            r || this.setCurrentContext(n.getCurrentContext()), this.execStartTime = n.getExecStartTime(), this.execEndTime = this.execStartTime
                        }
                    },
                    s = r ? n.getGlobalScope() : n.getCurrentScope();
                return new nn(s, i).evaluate(t)
            }
        }

        function Kr(e) {
            if (!(e instanceof zr)) throw new Error("Illegal call");
            for (var t = e.generator(), r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
            var s = n.pop(),
                a = new nn(t.getGlobalScope(), t.getOptions()),
                o = "\n\t\t    (function anonymous(" + n.join(",") + "){\n\t\t        " + s + "\n\t\t    });\n\t\t    ";
            return a.evaluate(o)
        }
        Object.defineProperty(Qr, "__IS_EVAL_FUNC", {
            value: !0,
            writable: !1,
            enumerable: !1,
            configurable: !1
        }), Object.defineProperty(Kr, "__IS_FUNCTION_FUNC", {
            value: !0,
            writable: !1,
            enumerable: !1,
            configurable: !1
        });
        var Xr = function(e) {
                this.value = e
            },
            Yr = function(e) {
                this.value = e
            },
            Zr = function(e) {
                this.value = e
            },
            en = function(e, t, r) {
                void 0 === t && (t = null), this.name = r, this.parent = t, this.data = e, this.labelStack = []
            };

        function tn() {}
        var rn = {
            NaN: NaN,
            Infinity: 1 / 0,
            undefined: void 0,
            Object: Object,
            Array: Array,
            String: String,
            Boolean: Boolean,
            Number: Number,
            Date: Date,
            RegExp: RegExp,
            Error: Error,
            URIError: URIError,
            TypeError: TypeError,
            RangeError: RangeError,
            SyntaxError: SyntaxError,
            ReferenceError: ReferenceError,
            Math: Math,
            parseInt: parseInt,
            parseFloat: parseFloat,
            isNaN: isNaN,
            isFinite: isFinite,
            decodeURI: decodeURI,
            decodeURIComponent: decodeURIComponent,
            encodeURI: encodeURI,
            encodeURIComponent: encodeURIComponent,
            escape: escape,
            unescape: unescape,
            eval: Qr,
            Function: Kr
        };
        "undefined" != typeof JSON && (rn.JSON = JSON), "undefined" != typeof Promise && (rn.Promise = Promise), "undefined" != typeof Set && (rn.Set = Set), "undefined" != typeof Map && (rn.Map = Map), "undefined" != typeof Symbol && (rn.Symbol = Symbol), "undefined" != typeof Proxy && (rn.Proxy = Proxy), "undefined" != typeof WeakMap && (rn.WeakMap = WeakMap), "undefined" != typeof WeakSet && (rn.WeakSet = WeakSet), "undefined" != typeof Reflect && (rn.Reflect = Reflect);
        var nn = function() {
            function e(t, r) {
                void 0 === t && (t = e.global), void 0 === r && (r = {}), this.sourceList = [], this.collectDeclVars = Object.create(null), this.collectDeclFuncs = Object.create(null), this.isVarDeclMode = !1, this.lastExecNode = null, this.isRunning = !1, this.options = {
                    ecmaVersion: r.ecmaVersion || e.ecmaVersion,
                    timeout: r.timeout || 0,
                    rootContext: r.rootContext,
                    globalContextInFunction: void 0 === r.globalContextInFunction ? e.globalContextInFunction : r.globalContextInFunction,
                    _initEnv: r._initEnv
                }, this.context = t || Object.create(null), this.callStack = [], this.initEnvironment(this.context)
            }
            var t = e.prototype;
            return t.initEnvironment = function(e) {
                var t;
                if (e instanceof en) t = e;
                else {
                    var r = null,
                        n = this.createSuperScope(e);
                    this.options.rootContext && (r = new en(function(e) {
                        return Object.create(e)
                    }(this.options.rootContext), n, $r)), t = new en(e, r || n, qr)
                }
                this.globalScope = t, this.currentScope = this.globalScope, this.globalContext = t.data, this.currentContext = t.data, this.collectDeclVars = Object.create(null), this.collectDeclFuncs = Object.create(null), this.execStartTime = Date.now(), this.execEndTime = this.execStartTime;
                var i = this.options._initEnv;
                i && i.call(this)
            }, t.getExecStartTime = function() {
                return this.execStartTime
            }, t.getExecutionTime = function() {
                return this.execEndTime - this.execStartTime
            }, t.setExecTimeout = function(e) {
                void 0 === e && (e = 0), this.options.timeout = e
            }, t.getOptions = function() {
                return this.options
            }, t.getGlobalScope = function() {
                return this.globalScope
            }, t.getCurrentScope = function() {
                return this.currentScope
            }, t.getCurrentContext = function() {
                return this.currentContext
            }, t.isInterruptThrow = function(e) {
                return e instanceof Nr || e instanceof Rr || e instanceof Pr
            }, t.createSuperScope = function(e) {
                var t = Object.assign({}, rn);
                return Object.keys(t).forEach((function(r) {
                    r in e && delete t[r]
                })), new en(t, null, Wr)
            }, t.setCurrentContext = function(e) {
                this.currentContext = e
            }, t.setCurrentScope = function(e) {
                this.currentScope = e
            }, t.evaluate = function(t) {
                var r, n, i;
                if (void 0 === t && (t = ""), t) return n = t, i = {
                    ranges: !0,
                    locations: !0,
                    ecmaVersion: this.options.ecmaVersion || e.ecmaVersion
                }, r = At.parse(n, i), this.evaluateNode(r, t)
            }, t.appendCode = function(e) {
                return this.evaluate(e)
            }, t.evaluateNode = function(e, t) {
                var r = this;
                void 0 === t && (t = ""), this.value = void 0, this.source = t, this.sourceList.push(t), this.isRunning = !0, this.execStartTime = Date.now(), this.execEndTime = this.execStartTime, this.collectDeclVars = Object.create(null), this.collectDeclFuncs = Object.create(null);
                var n = this.getCurrentScope(),
                    i = this.getCurrentContext(),
                    s = n.labelStack.concat([]),
                    a = this.callStack.concat([]);
                try {
                    var o = this.createClosure(e);
                    this.addDeclarationsToScope(this.collectDeclVars, this.collectDeclFuncs, this.getCurrentScope()), o()
                } catch (e) {
                    throw e
                } finally {
                    r.setCurrentScope(n), r.setCurrentContext(i), n.labelStack = s, r.callStack = a, this.execEndTime = Date.now()
                }
                return this.isRunning = !1, this.getValue()
            }, t.createErrorMessage = function(e, t, r) {
                var n = e[1].replace("%0", String(t));
                return null !== r && (n += this.getNodePosition(r || this.lastExecNode)), n
            }, t.createError = function(e, t) {
                return new t(e)
            }, t.createThrowError = function(e, t) {
                return this.createError(e, t)
            }, t.createInternalThrowError = function(e, t, r) {
                return this.createError(this.createErrorMessage(e, t, r), e[2])
            }, t.checkTimeout = function() {
                if (!this.isRunning) return !1;
                var e = this.options.timeout || 0;
                return Date.now() - this.execStartTime > e
            }, t.getNodePosition = function(e) {
                return e && e.loc ? " [" + e.loc.start.line + ":" + e.loc.start.column + "]" : ""
            }, t.createClosure = function(e) {
                var t, r = this;
                switch (e.type) {
                    case "BinaryExpression":
                        t = this.binaryExpressionHandler(e);
                        break;
                    case "LogicalExpression":
                        t = this.logicalExpressionHandler(e);
                        break;
                    case "UnaryExpression":
                        t = this.unaryExpressionHandler(e);
                        break;
                    case "UpdateExpression":
                        t = this.updateExpressionHandler(e);
                        break;
                    case "ObjectExpression":
                        t = this.objectExpressionHandler(e);
                        break;
                    case "ArrayExpression":
                        t = this.arrayExpressionHandler(e);
                        break;
                    case "CallExpression":
                        t = this.callExpressionHandler(e);
                        break;
                    case "NewExpression":
                        t = this.newExpressionHandler(e);
                        break;
                    case "MemberExpression":
                        t = this.memberExpressionHandler(e);
                        break;
                    case "ThisExpression":
                        t = this.thisExpressionHandler(e);
                        break;
                    case "SequenceExpression":
                        t = this.sequenceExpressionHandler(e);
                        break;
                    case "Literal":
                        t = this.literalHandler(e);
                        break;
                    case "Identifier":
                        t = this.identifierHandler(e);
                        break;
                    case "AssignmentExpression":
                        t = this.assignmentExpressionHandler(e);
                        break;
                    case "FunctionDeclaration":
                        t = this.functionDeclarationHandler(e);
                        break;
                    case "VariableDeclaration":
                        t = this.variableDeclarationHandler(e);
                        break;
                    case "BlockStatement":
                    case "Program":
                        t = this.programHandler(e);
                        break;
                    case "ExpressionStatement":
                        t = this.expressionStatementHandler(e);
                        break;
                    case "EmptyStatement":
                        t = this.emptyStatementHandler(e);
                        break;
                    case "ReturnStatement":
                        t = this.returnStatementHandler(e);
                        break;
                    case "FunctionExpression":
                        t = this.functionExpressionHandler(e);
                        break;
                    case "IfStatement":
                        t = this.ifStatementHandler(e);
                        break;
                    case "ConditionalExpression":
                        t = this.conditionalExpressionHandler(e);
                        break;
                    case "ForStatement":
                        t = this.forStatementHandler(e);
                        break;
                    case "WhileStatement":
                        t = this.whileStatementHandler(e);
                        break;
                    case "DoWhileStatement":
                        t = this.doWhileStatementHandler(e);
                        break;
                    case "ForInStatement":
                        t = this.forInStatementHandler(e);
                        break;
                    case "WithStatement":
                        t = this.withStatementHandler(e);
                        break;
                    case "ThrowStatement":
                        t = this.throwStatementHandler(e);
                        break;
                    case "TryStatement":
                        t = this.tryStatementHandler(e);
                        break;
                    case "ContinueStatement":
                        t = this.continueStatementHandler(e);
                        break;
                    case "BreakStatement":
                        t = this.breakStatementHandler(e);
                        break;
                    case "SwitchStatement":
                        t = this.switchStatementHandler(e);
                        break;
                    case "LabeledStatement":
                        t = this.labeledStatementHandler(e);
                        break;
                    case "DebuggerStatement":
                        t = this.debuggerStatementHandler(e);
                        break;
                    default:
                        throw this.createInternalThrowError(Lr.NodeTypeSyntaxError, e.type, e)
                }
                return function() {
                    var n = r.options.timeout;
                    if (n && n > 0 && r.checkTimeout()) throw r.createInternalThrowError(Lr.ExecutionTimeOutError, n, null);
                    return r.lastExecNode = e, t.apply(void 0, arguments)
                }
            }, t.binaryExpressionHandler = function(e) {
                var t = this,
                    r = this.createClosure(e.left),
                    n = this.createClosure(e.right);
                return function() {
                    var i = r(),
                        s = n();
                    switch (e.operator) {
                        case "==":
                            return i == s;
                        case "!=":
                            return i != s;
                        case "===":
                            return i === s;
                        case "!==":
                            return i !== s;
                        case "<":
                            return i < s;
                        case "<=":
                            return i <= s;
                        case ">":
                            return i > s;
                        case ">=":
                            return i >= s;
                        case "<<":
                            return i << s;
                        case ">>":
                            return i >> s;
                        case ">>>":
                            return i >>> s;
                        case "+":
                            return i + s;
                        case "-":
                            return i - s;
                        case "*":
                            return i * s;
                        case "**":
                            return Math.pow(i, s);
                        case "/":
                            return i / s;
                        case "%":
                            return i % s;
                        case "|":
                            return i | s;
                        case "^":
                            return i ^ s;
                        case "&":
                            return i & s;
                        case "in":
                            return i in s;
                        case "instanceof":
                            return i instanceof s;
                        default:
                            throw t.createInternalThrowError(Lr.BinaryOperatorSyntaxError, e.operator, e)
                    }
                }
            }, t.logicalExpressionHandler = function(e) {
                var t = this,
                    r = this.createClosure(e.left),
                    n = this.createClosure(e.right);
                return function() {
                    switch (e.operator) {
                        case "||":
                            return r() || n();
                        case "&&":
                            return r() && n();
                        default:
                            throw t.createInternalThrowError(Lr.LogicalOperatorSyntaxError, e.operator, e)
                    }
                }
            }, t.unaryExpressionHandler = function(e) {
                var t, r = this;
                if ("delete" === e.operator) {
                    var n = this.createObjectGetter(e.argument),
                        i = this.createNameGetter(e.argument);
                    return function() {
                        return delete n()[i()]
                    }
                }
                if ("typeof" === e.operator && "Identifier" === e.argument.type) {
                    var s = this.createObjectGetter(e.argument),
                        a = this.createNameGetter(e.argument);
                    t = function() {
                        return s()[a()]
                    }
                } else t = this.createClosure(e.argument);
                return function() {
                    var n = t();
                    switch (e.operator) {
                        case "-":
                            return -n;
                        case "+":
                            return +n;
                        case "!":
                            return !n;
                        case "~":
                            return ~n;
                        case "void":
                            return;
                        case "typeof":
                            return typeof n;
                        default:
                            throw r.createInternalThrowError(Lr.UnaryOperatorSyntaxError, e.operator, e)
                    }
                }
            }, t.updateExpressionHandler = function(e) {
                var t = this,
                    r = this.createObjectGetter(e.argument),
                    n = this.createNameGetter(e.argument);
                return function() {
                    var i = r(),
                        s = n();
                    switch (t.assertVariable(i, s, e), e.operator) {
                        case "++":
                            return e.prefix ? ++i[s] : i[s]++;
                        case "--":
                            return e.prefix ? --i[s] : i[s]--;
                        default:
                            throw t.createInternalThrowError(Lr.UpdateOperatorSyntaxError, e.operator, e)
                    }
                }
            }, t.objectExpressionHandler = function(e) {
                var t = this,
                    r = [],
                    n = Object.create(null);
                return e.properties.forEach((function(e) {
                        var i = e.kind,
                            s = function(e) {
                                return "Identifier" === e.type ? e.name : "Literal" === e.type ? e.value : this.throwError(Lr.ObjectStructureSyntaxError, e.type, e)
                            }(e.key);
                        n[s] && "init" !== i || (n[s] = {}), n[s][i] = t.createClosure(e.value), r.push({
                            key: s,
                            property: e
                        })
                    })),
                    function() {
                        for (var e = {}, t = r.length, i = 0; i < t; i++) {
                            var s = r[i],
                                a = s.key,
                                o = n[a],
                                u = o.init ? o.init() : void 0,
                                c = o.get ? o.get() : function() {},
                                l = o.set ? o.set() : function(e) {};
                            if ("set" in o || "get" in o) {
                                var h = {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: c,
                                    set: l
                                };
                                Object.defineProperty(e, a, h)
                            } else {
                                var p = s.property,
                                    d = p.kind;
                                "Identifier" !== p.key.type || "FunctionExpression" !== p.value.type || "init" !== d || p.value.id || Fr(u, p.key.name), e[a] = u
                            }
                        }
                        return e
                    }
            }, t.arrayExpressionHandler = function(e) {
                var t = this,
                    r = e.elements.map((function(e) {
                        return e ? t.createClosure(e) : e
                    }));
                return function() {
                    for (var e = r.length, t = Array(e), n = 0; n < e; n++) {
                        var i = r[n];
                        i && (t[n] = i())
                    }
                    return t
                }
            }, t.safeObjectGet = function(e, t, r) {
                return e[t]
            }, t.createCallFunctionGetter = function(e) {
                var t = this;
                if ("MemberExpression" === e.type) {
                    var r = this.createClosure(e.object),
                        n = this.createMemberKeyGetter(e),
                        i = this.source;
                    return function() {
                        var s = r(),
                            a = n(),
                            o = t.safeObjectGet(s, a, e);
                        if (!o || !Jr(o)) {
                            var u = i.slice(e.start, e.end);
                            throw t.createInternalThrowError(Lr.FunctionUndefinedReferenceError, u, e)
                        }
                        return o.__IS_EVAL_FUNC ? function(e) {
                            return o(new zr(t), e, !0)
                        } : o.__IS_FUNCTION_FUNC ? function() {
                            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            return o.apply(void 0, [new zr(t)].concat(r))
                        } : o.bind(s)
                    }
                }
                var s = this.createClosure(e);
                return function() {
                    var r = "";
                    "Identifier" === e.type && (r = e.name);
                    var n = s();
                    if (!n || !Jr(n)) throw t.createInternalThrowError(Lr.FunctionUndefinedReferenceError, r, e);
                    if ("Identifier" === e.type && n.__IS_EVAL_FUNC && "eval" === r) return function(e) {
                        var i = t.getScopeFromName(r, t.getCurrentScope()),
                            s = i.name === Wr || i.name === qr || i.name === $r;
                        return n(new zr(t), e, !s)
                    };
                    if (n.__IS_EVAL_FUNC) return function(e) {
                        return n(new zr(t), e, !0)
                    };
                    if (n.__IS_FUNCTION_FUNC) return function() {
                        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                        return n.apply(void 0, [new zr(t)].concat(r))
                    };
                    var i = t.options.globalContextInFunction;
                    if ("Identifier" === e.type) {
                        var a = t.getIdentifierScope(e);
                        a.name === Gr && (i = a.data)
                    }
                    return n.bind(i)
                }
            }, t.callExpressionHandler = function(e) {
                var t = this,
                    r = this.createCallFunctionGetter(e.callee),
                    n = e.arguments.map((function(e) {
                        return t.createClosure(e)
                    }));
                return function() {
                    return r().apply(void 0, n.map((function(e) {
                        return e()
                    })))
                }
            }, t.functionExpressionHandler = function(e) {
                var t = this,
                    r = this,
                    n = this.source,
                    i = this.collectDeclVars,
                    s = this.collectDeclFuncs;
                this.collectDeclVars = Object.create(null), this.collectDeclFuncs = Object.create(null);
                var a = e.id ? e.id.name : "",
                    o = e.params.length,
                    u = e.params.map((function(e) {
                        return t.createParamNameGetter(e)
                    })),
                    c = this.createClosure(e.body),
                    l = this.collectDeclVars,
                    h = this.collectDeclFuncs;
                return this.collectDeclVars = i, this.collectDeclFuncs = s,
                    function() {
                        var t = r.getCurrentScope(),
                            i = function e() {
                                for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                                r.callStack.push("" + a);
                                var o = r.getCurrentScope(),
                                    p = function(e, t) {
                                        return void 0 === e && (e = null), new en(Object.create(null), e, t)
                                    }(t, "FunctionScope(" + a + ")");
                                r.setCurrentScope(p), r.addDeclarationsToScope(l, h, p), a && (p.data[a] = e), p.data.arguments = arguments, u.forEach((function(e, t) {
                                    p.data[e()] = i[t]
                                }));
                                var d = r.getCurrentContext();
                                r.setCurrentContext(this);
                                var f = c();
                                if (r.setCurrentContext(d), r.setCurrentScope(o), r.callStack.pop(), f instanceof Xr) return f.value
                            };
                        return Fr(i, a), Object.defineProperty(i, "length", {
                            value: o,
                            writable: !1,
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(i, "toString", {
                            value: function() {
                                return n.slice(e.start, e.end)
                            },
                            writable: !0,
                            configurable: !0,
                            enumerable: !1
                        }), Object.defineProperty(i, "valueOf", {
                            value: function() {
                                return n.slice(e.start, e.end)
                            },
                            writable: !0,
                            configurable: !0,
                            enumerable: !1
                        }), i
                    }
            }, t.newExpressionHandler = function(e) {
                var t = this,
                    r = this.source,
                    n = this.createClosure(e.callee),
                    i = e.arguments.map((function(e) {
                        return t.createClosure(e)
                    }));
                return function() {
                    var s = n();
                    if (!Jr(s) || s.__IS_EVAL_FUNC) {
                        var a = e.callee,
                            o = r.slice(a.start, a.end);
                        throw t.createInternalThrowError(Lr.IsNotConstructor, o, e)
                    }
                    return s.__IS_FUNCTION_FUNC ? s.apply(void 0, [new zr(t)].concat(i.map((function(e) {
                        return e()
                    })))) : Dr(s, i.map((function(e) {
                        return e()
                    })))
                }
            }, t.memberExpressionHandler = function(e) {
                var t = this.createClosure(e.object),
                    r = this.createMemberKeyGetter(e);
                return function() {
                    return t()[r()]
                }
            }, t.thisExpressionHandler = function(e) {
                var t = this;
                return function() {
                    return t.getCurrentContext()
                }
            }, t.sequenceExpressionHandler = function(e) {
                var t = this,
                    r = e.expressions.map((function(e) {
                        return t.createClosure(e)
                    }));
                return function() {
                    for (var e, t = r.length, n = 0; n < t; n++) e = (0, r[n])();
                    return e
                }
            }, t.literalHandler = function(e) {
                return function() {
                    return e.regex ? new RegExp(e.regex.pattern, e.regex.flags) : e.value
                }
            }, t.identifierHandler = function(e) {
                var t = this;
                return function() {
                    var r = t.getCurrentScope(),
                        n = t.getScopeDataFromName(e.name, r);
                    return t.assertVariable(n, e.name, e), n[e.name]
                }
            }, t.getIdentifierScope = function(e) {
                var t = this.getCurrentScope();
                return this.getScopeFromName(e.name, t)
            }, t.assignmentExpressionHandler = function(e) {
                var t = this;
                "Identifier" !== e.left.type || "FunctionExpression" !== e.right.type || e.right.id || (e.right.id = {
                    type: "Identifier",
                    name: e.left.name
                });
                var r = this.createObjectGetter(e.left),
                    n = this.createNameGetter(e.left),
                    i = this.createClosure(e.right);
                return function() {
                    var s = r(),
                        a = n(),
                        o = i();
                    switch ("=" !== e.operator && t.assertVariable(s, a, e), e.operator) {
                        case "=":
                            return s[a] = o;
                        case "+=":
                            return s[a] += o;
                        case "-=":
                            return s[a] -= o;
                        case "*=":
                            return s[a] *= o;
                        case "**=":
                            return s[a] = Math.pow(s[a], o);
                        case "/=":
                            return s[a] /= o;
                        case "%=":
                            return s[a] %= o;
                        case "<<=":
                            return s[a] <<= o;
                        case ">>=":
                            return s[a] >>= o;
                        case ">>>=":
                            return s[a] >>>= o;
                        case "&=":
                            return s[a] &= o;
                        case "^=":
                            return s[a] ^= o;
                        case "|=":
                            return s[a] |= o;
                        default:
                            throw t.createInternalThrowError(Lr.AssignmentExpressionSyntaxError, e.type, e)
                    }
                }
            }, t.functionDeclarationHandler = function(e) {
                if (e.id) {
                    var t = this.functionExpressionHandler(e);
                    Object.defineProperty(t, "isFunctionDeclareClosure", {
                        value: !0,
                        writable: !1,
                        configurable: !1,
                        enumerable: !1
                    }), this.funcDeclaration(e.id.name, t)
                }
                return function() {
                    return Hr
                }
            }, t.getVariableName = function(e) {
                if ("Identifier" === e.type) return e.name;
                throw this.createInternalThrowError(Lr.VariableTypeSyntaxError, e.type, e)
            }, t.variableDeclarationHandler = function(e) {
                for (var t, r = this, n = [], i = 0; i < e.declarations.length; i++) {
                    var s = e.declarations[i];
                    this.varDeclaration(this.getVariableName(s.id)), s.init && n.push({
                        type: "AssignmentExpression",
                        operator: "=",
                        left: s.id,
                        right: s.init
                    })
                }
                return n.length && (t = this.createClosure({
                        type: "BlockStatement",
                        body: n
                    })),
                    function() {
                        if (t) {
                            var e = r.isVarDeclMode;
                            r.isVarDeclMode = !0, t(), r.isVarDeclMode = e
                        }
                        return Hr
                    }
            }, t.assertVariable = function(e, t, r) {
                if (e === this.globalScope.data && !(t in e)) throw this.createInternalThrowError(Lr.VariableUndefinedReferenceError, t, r)
            }, t.programHandler = function(e) {
                var t = this,
                    r = e.body.map((function(e) {
                        return t.createClosure(e)
                    }));
                return function() {
                    for (var e = Hr, n = 0; n < r.length; n++) {
                        var i = r[n],
                            s = t.setValue(i());
                        if (s !== Hr && ((e = s) instanceof Xr || e instanceof Yr || e instanceof Zr || e === jr || e === Br)) break
                    }
                    return e
                }
            }, t.expressionStatementHandler = function(e) {
                return this.createClosure(e.expression)
            }, t.emptyStatementHandler = function(e) {
                return function() {
                    return Hr
                }
            }, t.returnStatementHandler = function(e) {
                var t = e.argument ? this.createClosure(e.argument) : tn;
                return function() {
                    return new Xr(t())
                }
            }, t.ifStatementHandler = function(e) {
                var t = this.createClosure(e.test),
                    r = this.createClosure(e.consequent),
                    n = e.alternate ? this.createClosure(e.alternate) : function() {
                        return Hr
                    };
                return function() {
                    return t() ? r() : n()
                }
            }, t.conditionalExpressionHandler = function(e) {
                return this.ifStatementHandler(e)
            }, t.forStatementHandler = function(e) {
                var t = this,
                    r = tn,
                    n = e.test ? this.createClosure(e.test) : function() {
                        return !0
                    },
                    i = tn,
                    s = this.createClosure(e.body);
                return "ForStatement" === e.type && (r = e.init ? this.createClosure(e.init) : r, i = e.update ? this.createClosure(e.update) : tn),
                    function(a) {
                        var o, u = Hr,
                            c = "DoWhileStatement" === e.type;
                        for (a && "LabeledStatement" === a.type && (o = a.label.name), r(); c || n(); i()) {
                            c = !1;
                            var l = t.setValue(s());
                            if (l !== Hr && l !== Br) {
                                if (l === jr) break;
                                if ((u = l) instanceof Zr && u.value === o) u = Hr;
                                else if (u instanceof Xr || u instanceof Yr || u instanceof Zr) break
                            }
                        }
                        return u
                    }
            }, t.whileStatementHandler = function(e) {
                return this.forStatementHandler(e)
            }, t.doWhileStatementHandler = function(e) {
                return this.forStatementHandler(e)
            }, t.forInStatementHandler = function(e) {
                var t = this,
                    r = e.left,
                    n = this.createClosure(e.right),
                    i = this.createClosure(e.body);
                return "VariableDeclaration" === e.left.type && (this.createClosure(e.left)(), r = e.left.declarations[0].id),
                    function(e) {
                        var s, a, o = Hr;
                        e && "LabeledStatement" === e.type && (s = e.label.name);
                        var u = n();
                        for (a in u) {
                            t.assignmentExpressionHandler({
                                type: "AssignmentExpression",
                                operator: "=",
                                left: r,
                                right: {
                                    type: "Literal",
                                    value: a
                                }
                            })();
                            var c = t.setValue(i());
                            if (c !== Hr && c !== Br) {
                                if (c === jr) break;
                                if ((o = c) instanceof Zr && o.value === s) o = Hr;
                                else if (o instanceof Xr || o instanceof Yr || o instanceof Zr) break
                            }
                        }
                        return o
                    }
            }, t.withStatementHandler = function(e) {
                var t = this,
                    r = this.createClosure(e.object),
                    n = this.createClosure(e.body);
                return function() {
                    var e = r(),
                        i = t.getCurrentScope(),
                        s = new en(e, i, Gr);
                    t.setCurrentScope(s);
                    var a = t.setValue(n());
                    return t.setCurrentScope(i), a
                }
            }, t.throwStatementHandler = function(e) {
                var t = this,
                    r = this.createClosure(e.argument);
                return function() {
                    throw t.setValue(void 0), r()
                }
            }, t.tryStatementHandler = function(e) {
                var t = this,
                    r = this.createClosure(e.block),
                    n = e.handler ? this.catchClauseHandler(e.handler) : null,
                    i = e.finalizer ? this.createClosure(e.finalizer) : null;
                return function() {
                    var e, s, a = t.getCurrentScope(),
                        o = t.getCurrentContext(),
                        u = a.labelStack.concat([]),
                        c = t.callStack.concat([]),
                        l = Hr,
                        h = function() {
                            t.setCurrentScope(a), t.setCurrentContext(o), a.labelStack = u, t.callStack = c
                        };
                    try {
                        (l = t.setValue(r())) instanceof Xr && (e = l)
                    } catch (r) {
                        if (h(), t.isInterruptThrow(r)) throw r;
                        if (n) try {
                            (l = t.setValue(n(r))) instanceof Xr && (e = l)
                        } catch (e) {
                            if (h(), t.isInterruptThrow(e)) throw e;
                            s = e
                        }
                    }
                    if (i) try {
                        (l = i()) instanceof Xr && (e = l)
                    } catch (e) {
                        if (h(), t.isInterruptThrow(e)) throw e;
                        s = e
                    }
                    if (s) throw s;
                    return e || l
                }
            }, t.catchClauseHandler = function(e) {
                var t = this,
                    r = this.createParamNameGetter(e.param),
                    n = this.createClosure(e.body);
                return function(e) {
                    var i, s = t.getCurrentScope().data,
                        a = r(),
                        o = Vr.call(s, a),
                        u = s[a];
                    return s[a] = e, i = n(), o ? s[a] = u : delete s[a], i
                }
            }, t.continueStatementHandler = function(e) {
                return function() {
                    return e.label ? new Zr(e.label.name) : Br
                }
            }, t.breakStatementHandler = function(e) {
                return function() {
                    return e.label ? new Yr(e.label.name) : jr
                }
            }, t.switchStatementHandler = function(e) {
                var t = this,
                    r = this.createClosure(e.discriminant),
                    n = e.cases.map((function(e) {
                        return t.switchCaseHandler(e)
                    }));
                return function() {
                    for (var e, i, s, a = r(), o = !1, u = 0; u < n.length; u++) {
                        var c = n[u](),
                            l = c.testClosure();
                        if (l !== Ur) {
                            if (o || l === a) {
                                if (o = !0, (i = t.setValue(c.bodyClosure())) === Hr) continue;
                                if (i === jr) break;
                                if ((e = i) instanceof Xr || e instanceof Yr || e instanceof Zr || e === Br) break
                            }
                        } else s = c
                    }
                    return !o && s && ((i = t.setValue(s.bodyClosure())) === Hr || i === jr || (e = i)), e
                }
            }, t.switchCaseHandler = function(e) {
                var t = e.test ? this.createClosure(e.test) : function() {
                        return Ur
                    },
                    r = this.createClosure({
                        type: "BlockStatement",
                        body: e.consequent
                    });
                return function() {
                    return {
                        testClosure: t,
                        bodyClosure: r
                    }
                }
            }, t.labeledStatementHandler = function(e) {
                var t = this,
                    r = e.label.name,
                    n = this.createClosure(e.body);
                return function() {
                    var i, s = t.getCurrentScope();
                    return s.labelStack.push(r), (i = n(e)) instanceof Yr && i.value === r && (i = Hr), s.labelStack.pop(), i
                }
            }, t.debuggerStatementHandler = function(e) {
                return function() {
                    return Hr
                }
            }, t.createParamNameGetter = function(e) {
                if ("Identifier" === e.type) return function() {
                    return e.name
                };
                throw this.createInternalThrowError(Lr.ParamTypeSyntaxError, e.type, e)
            }, t.createObjectKeyGetter = function(e) {
                var t;
                return t = "Identifier" === e.type ? function() {
                        return e.name
                    } : this.createClosure(e),
                    function() {
                        return t()
                    }
            }, t.createMemberKeyGetter = function(e) {
                return e.computed ? this.createClosure(e.property) : this.createObjectKeyGetter(e.property)
            }, t.createObjectGetter = function(e) {
                var t = this;
                switch (e.type) {
                    case "Identifier":
                        return function() {
                            return t.getScopeDataFromName(e.name, t.getCurrentScope())
                        };
                    case "MemberExpression":
                        return this.createClosure(e.object);
                    default:
                        throw this.createInternalThrowError(Lr.AssignmentTypeSyntaxError, e.type, e)
                }
            }, t.createNameGetter = function(e) {
                switch (e.type) {
                    case "Identifier":
                        return function() {
                            return e.name
                        };
                    case "MemberExpression":
                        return this.createMemberKeyGetter(e);
                    default:
                        throw this.createInternalThrowError(Lr.AssignmentTypeSyntaxError, e.type, e)
                }
            }, t.varDeclaration = function(e) {
                this.collectDeclVars[e] = void 0
            }, t.funcDeclaration = function(e, t) {
                this.collectDeclFuncs[e] = t
            }, t.addDeclarationsToScope = function(e, t, r) {
                var n = r.data;
                for (var i in t) {
                    var s = t[i];
                    n[i] = s ? s() : s
                }
                for (var a in e) a in n || (n[a] = void 0)
            }, t.getScopeValue = function(e, t) {
                return this.getScopeFromName(e, t).data[e]
            }, t.getScopeDataFromName = function(e, t) {
                return this.getScopeFromName(e, t).data
            }, t.getScopeFromName = function(e, t) {
                var r = t;
                do {
                    if (e in r.data) return r
                } while (r = r.parent);
                return this.globalScope
            }, t.setValue = function(e) {
                var t = this.callStack.length;
                return this.isVarDeclMode || t || e === Hr || e === jr || e === Br || e instanceof Yr || e instanceof Zr || (this.value = e instanceof Xr ? e.value : e), e
            }, t.getValue = function() {
                return this.value
            }, e
        }();
        nn.version = "1.4.7", nn.eval = Qr, nn.Function = Kr, nn.ecmaVersion = 5, nn.globalContextInFunction = void 0, nn.global = Object.create(null);
        var sn = function(e, t, r) {
                return function(e, t, r) {
                    return new nn(t, r).evaluate(e)
                }(e, t, r)
            },
            an = (e, t, n) => {
                var i = new Be(e);
                r.g.__debugMessager = i;
                var s = new Pe(i),
                    a = new je(i),
                    o = new $e(i);
                return new He(t, i), new Ue(t, n, s, a, o), {
                    __remoteDebug__: {
                        setAppserviceHandlers: e => {
                            var r, n;
                            e && (n = t, le = (r = e).getCurrentPages, he = r.invokeWebviewMethod, de = r.__appServiceEngine__, fe = r.__appServiceSDK__, ge = r.exparser, me = r.Reporter, pe = r.wx, ye = r.__virtualDOM__, "function" == typeof __passWAServiceGlobal__ && __passWAServiceGlobal__({
                                __appServiceSDK__: fe,
                                __appServiceEngine__: de,
                                exparser: ge,
                                Reporter: me,
                                WeixinJSBridge: n,
                                wx: pe,
                                __virtualDOM__: ye
                            }))
                        },
                        setAutoTestHandler: Le,
                        $$eval: sn
                    }
                }
            };

        function on(r, n, i, s, a) {
            var o = {},
                u = an(i, a, __WeixinJSCore__);
            return "ios" === r && (o = function(r, n, i) {
                var s = new e(n),
                    a = new t({
                        suspend() {
                            r.suspend()
                        },
                        resume() {
                            r.resume()
                        }
                    });
                Y = new K(a, i), Z = new te(Y);
                var o = new se(s, Y),
                    u = new ie(s, Y),
                    c = new oe(s, Y, Z),
                    l = new ae(s),
                    h = new ue(s);
                return new ne(s, o, u, c, l, h).dispatch(), {
                    runtime: Y,
                    debuggerInst: Z
                }
            }(n, i, s)), {
                ...o,
                ...u
            }
        }
    }(), __AppServiceRemoteDebugger__ = n.default
}(), (() => {
    var e = {
            6715: e => {
                function t(e, t, r, n, i, s, a) {
                    try {
                        var o = e[s](a),
                            u = o.value
                    } catch (e) {
                        return void r(e)
                    }
                    o.done ? t(u) : Promise.resolve(u).then(n, i)
                }
                e.exports = function(e) {
                    return function() {
                        var r = this,
                            n = arguments;
                        return new Promise((function(i, s) {
                            var a = e.apply(r, n);

                            function o(e) {
                                t(a, i, s, o, u, "next", e)
                            }

                            function u(e) {
                                t(a, i, s, o, u, "throw", e)
                            }
                            o(void 0)
                        }))
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6546: (e, t, r) => {
                var n = r(8677),
                    i = r(6245),
                    s = r(1193),
                    a = Object.getOwnPropertyNames,
                    o = Object.getOwnPropertySymbols;
                t = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = t.prototype,
                        u = void 0 === r || r,
                        c = t.unenumerable,
                        l = void 0 !== c && c,
                        h = t.symbol,
                        p = void 0 !== h && h,
                        d = [];
                    if ((l || p) && a) {
                        var f = n;
                        l && a && (f = a);
                        do {
                            d = d.concat(f(e)), p && o && (d = d.concat(o(e)))
                        } while (u && (e = i(e)) && e !== Object.prototype);
                        d = s(d)
                    } else if (u)
                        for (var g in e) d.push(g);
                    else d = n(e);
                    return d
                }, e.exports = t
            },
            32: (e, t, r) => {
                var n = r(2968);
                t = n((function(e, t, r) {
                    return n((function(n) {
                        return e.apply(t, r.concat(n))
                    }))
                })), e.exports = t
            },
            3782: (e, t, r) => {
                var n = r(3702),
                    i = r(4680);
                t = function(e, t) {
                    if (i(e)) return e;
                    if (t && n(t, e)) return [e];
                    var r = [];
                    return e.replace(s, (function(e, t, n, i) {
                        r.push(n ? i.replace(a, "$1") : t || e)
                    })), r
                };
                var s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    a = /\\(\\)?/g;
                e.exports = t
            },
            220: (e, t, r) => {
                var n = r(3058),
                    i = r(4680),
                    s = r(4371);
                t = function(e) {
                    return n(e) ? i(e) ? e.slice() : s({}, e) : e
                }, e.exports = t
            },
            6307: (e, t, r) => {
                var n = r(8690);
                t = function() {
                    for (var e = n(arguments), t = [], r = 0, i = e.length; r < i; r++) t = t.concat(n(e[r]));
                    return t
                }, e.exports = t
            },
            1841: (e, t, r) => {
                var n = r(8605),
                    i = r(2510),
                    s = r(2157),
                    a = r(8133);
                t = function(e, t) {
                    return i(e) ? e.indexOf(t) > -1 : (s(e) || (e = a(e)), n(e, t) >= 0)
                }, e.exports = t
            },
            8337: (e, t, r) => {
                var n = r(5617),
                    i = r(6295);
                t = function(e, t) {
                    return function(r) {
                        return i(arguments, (function(s, a) {
                            if (0 !== a) {
                                var o = e(s);
                                i(o, (function(e) {
                                    t && !n(r[e]) || (r[e] = s[e])
                                }))
                            }
                        })), r
                    }
                }, e.exports = t
            },
            6295: (e, t, r) => {
                var n = r(2157),
                    i = r(8677),
                    s = r(4116);
                t = function(e, t, r) {
                    var a, o;
                    if (t = s(t, r), n(e))
                        for (a = 0, o = e.length; a < o; a++) t(e[a], a, e);
                    else {
                        var u = i(e);
                        for (a = 0, o = u.length; a < o; a++) t(e[u[a]], u[a], e)
                    }
                    return e
                }, e.exports = t
            },
            8770: (e, t) => {
                t = function(e, t) {
                    var r = e.length - t.length;
                    return r >= 0 && e.indexOf(t, r) === r
                }, e.exports = t
            },
            4371: (e, t, r) => {
                t = r(8337)(r(6546)), e.exports = t
            },
            4277: (e, t, r) => {
                var n = r(8677);
                t = r(8337)(n), e.exports = t
            },
            8043: (e, t, r) => {
                var n = r(8540),
                    i = r(6295);
                t = function(e, t, r) {
                    var s = [];
                    return t = n(t, r), i(e, (function(e, r, n) {
                        t(e, r, n) && s.push(e)
                    })), s
                }, e.exports = t
            },
            8268: (e, t, r) => {
                var n = r(4110),
                    i = r(6808),
                    s = r(6068),
                    a = r(2510);
                t = function(e) {
                    var t, r, u = i(a(e) ? e : n(e));
                    s(u, "async") || s(u, "function") || s(u, "(") ? (t = u.indexOf("(") + 1, r = u.indexOf(")")) : (t = 0, r = u.indexOf("=>"));
                    var c = u.slice(t, r);
                    return null === (c = c.match(o)) ? [] : c
                };
                var o = /[^\s,]+/g;
                e.exports = t
            },
            6245: (e, t, r) => {
                var n = r(3058),
                    i = r(5309),
                    s = Object.getPrototypeOf,
                    a = {}.constructor;
                t = function(e) {
                    if (n(e)) {
                        if (s) return s(e);
                        var t = e.__proto__;
                        return t || null === t ? t : i(e.constructor) ? e.constructor.prototype : e instanceof a ? a.prototype : void 0
                    }
                }, e.exports = t
            },
            3702: (e, t) => {
                var r = Object.prototype.hasOwnProperty;
                t = function(e, t) {
                    return r.call(e, t)
                }, e.exports = t
            },
            4344: (e, t) => {
                t = function(e) {
                    return e
                }, e.exports = t
            },
            8605: (e, t) => {
                t = function(e, t, r) {
                    return Array.prototype.indexOf.call(e, t, r)
                }, e.exports = t
            },
            4680: (e, t, r) => {
                var n = r(2207);
                t = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === n(e)
                }, e.exports = t
            },
            2157: (e, t, r) => {
                var n = r(7804),
                    i = r(5309),
                    s = Math.pow(2, 53) - 1;
                t = function(e) {
                    if (!e) return !1;
                    var t = e.length;
                    return n(t) && t >= 0 && t <= s && !i(e)
                }, e.exports = t
            },
            5309: (e, t, r) => {
                var n = r(2207);
                t = function(e) {
                    var t = n(e);
                    return "[object Function]" === t || "[object GeneratorFunction]" === t || "[object AsyncFunction]" === t
                }, e.exports = t
            },
            1750: (e, t, r) => {
                var n = r(8677);
                t = function(e, t) {
                    var r = n(t),
                        i = r.length;
                    if (null == e) return !i;
                    e = Object(e);
                    for (var s = 0; s < i; s++) {
                        var a = r[s];
                        if (t[a] !== e[a] || !(a in e)) return !1
                    }
                    return !0
                }, e.exports = t
            },
            6041: (e, t) => {
                t = function(e) {
                    return null == e
                }, e.exports = t
            },
            7804: (e, t, r) => {
                var n = r(2207);
                t = function(e) {
                    return "[object Number]" === n(e)
                }, e.exports = t
            },
            3058: (e, t) => {
                t = function(e) {
                    var t = typeof e;
                    return !!e && ("function" === t || "object" === t)
                }, e.exports = t
            },
            5828: (e, t, r) => {
                var n = r(3058),
                    i = r(5309);
                t = function(e) {
                    return n(e) && i(e.then) && i(e.catch)
                }, e.exports = t
            },
            2510: (e, t, r) => {
                var n = r(2207);
                t = function(e) {
                    return "[object String]" === n(e)
                }, e.exports = t
            },
            5617: (e, t) => {
                t = function(e) {
                    return void 0 === e
                }, e.exports = t
            },
            8677: (e, t, r) => {
                var n = r(3702);
                t = Object.keys ? Object.keys : function(e) {
                    var t = [];
                    for (var r in e) n(e, r) && t.push(r);
                    return t
                }, e.exports = t
            },
            572: (e, t) => {
                t = function(e) {
                    var t = e ? e.length : 0;
                    if (t) return e[t - 1]
                }, e.exports = t
            },
            6640: (e, t) => {
                var r = /^\s+/;
                t = function(e, t) {
                    if (null == t) return e.replace(r, "");
                    for (var n, i, s = 0, a = e.length, o = t.length, u = !0; u && s < a;)
                        for (u = !1, n = -1, i = e.charAt(s); ++n < o;)
                            if (i === t[n]) {
                                u = !0, s++;
                                break
                            } return s >= a ? "" : e.substr(s, a)
                }, e.exports = t
            },
            3078: (e, t, r) => {
                var n = r(8540),
                    i = r(8677),
                    s = r(2157);
                t = function(e, t, r) {
                    t = n(t, r);
                    for (var a = !s(e) && i(e), o = (a || e).length, u = Array(o), c = 0; c < o; c++) {
                        var l = a ? a[c] : c;
                        u[c] = t(e[l], l, e)
                    }
                    return u
                }, e.exports = t
            },
            474: (e, t, r) => {
                var n = r(4277),
                    i = r(1750);
                t = function(e) {
                    return e = n({}, e),
                        function(t) {
                            return i(t, e)
                        }
                }, e.exports = t
            },
            408: (e, t) => {
                t = function() {}, e.exports = t
            },
            9359: (e, t) => {
                t = Date.now ? Date.now : function() {
                    return (new Date).getTime()
                }, e.exports = t
            },
            2207: (e, t) => {
                var r = Object.prototype.toString;
                t = function(e) {
                    return r.call(e)
                }, e.exports = t
            },
            4116: (e, t, r) => {
                var n = r(5617);
                t = function(e, t, r) {
                    if (n(t)) return e;
                    switch (null == r ? 3 : r) {
                        case 1:
                            return function(r) {
                                return e.call(t, r)
                            };
                        case 3:
                            return function(r, n, i) {
                                return e.call(t, r, n, i)
                            };
                        case 4:
                            return function(r, n, i, s) {
                                return e.call(t, r, n, i, s)
                            }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }, e.exports = t
            },
            3004: (e, t, r) => {
                var n = r(4680),
                    i = r(4185);
                t = function(e) {
                    return n(e) ? function(t) {
                        return i(t, e)
                    } : (t = e, function(e) {
                        return null == e ? void 0 : e[t]
                    });
                    var t
                }, e.exports = t
            },
            2968: (e, t) => {
                t = function(e, t) {
                    return t = null == t ? e.length - 1 : +t,
                        function() {
                            var r, n = Math.max(arguments.length - t, 0),
                                i = new Array(n);
                            for (r = 0; r < n; r++) i[r] = arguments[r + t];
                            switch (t) {
                                case 0:
                                    return e.call(this, i);
                                case 1:
                                    return e.call(this, arguments[0], i);
                                case 2:
                                    return e.call(this, arguments[0], arguments[1], i)
                            }
                            var s = new Array(t + 1);
                            for (r = 0; r < t; r++) s[r] = arguments[r];
                            return s[t] = i, e.apply(this, s)
                        }
                }, e.exports = t
            },
            510: (e, t) => {
                var r = /\s+$/;
                t = function(e, t) {
                    if (null == t) return e.replace(r, "");
                    for (var n, i, s = e.length - 1, a = t.length, o = !0; o && s >= 0;)
                        for (o = !1, n = -1, i = e.charAt(s); ++n < a;)
                            if (i === t[n]) {
                                o = !0, s--;
                                break
                            } return s >= 0 ? e.substring(0, s + 1) : ""
                }, e.exports = t
            },
            8540: (e, t, r) => {
                var n = r(5309),
                    i = r(3058),
                    s = r(4680),
                    a = r(4116),
                    o = r(474),
                    u = r(4344),
                    c = r(3004);
                t = function(e, t, r) {
                    return null == e ? u : n(e) ? a(e, t, r) : i(e) && !s(e) ? o(e) : c(e)
                }, e.exports = t
            },
            4185: (e, t, r) => {
                var n = r(5617),
                    i = r(3782);
                t = function(e, t) {
                    var r;
                    for (r = (t = i(t, e)).shift(); !n(r);) {
                        if (null == (e = e[r])) return;
                        r = t.shift()
                    }
                    return e
                }, e.exports = t
            },
            7626: (e, t) => {
                t = function(e) {
                    return new Promise((function(t) {
                        return setTimeout(t, e)
                    }))
                }, e.exports = t
            },
            6068: (e, t) => {
                t = function(e, t) {
                    return 0 === e.indexOf(t)
                }, e.exports = t
            },
            6808: (e, t) => {
                t = function(e) {
                    for (var t = {
                            singleQuote: !1,
                            doubleQuote: !1,
                            regex: !1,
                            blockComment: !1,
                            lineComment: !1,
                            condComp: !1
                        }, r = 0, n = (e = ("__" + e + "__").split("")).length; r < n; r++)
                        if (t.regex) "/" === e[r] && "\\" !== e[r - 1] && (t.regex = !1);
                        else if (t.singleQuote) "'" === e[r] && "\\" !== e[r - 1] && (t.singleQuote = !1);
                    else if (t.doubleQuote) '"' === e[r] && "\\" !== e[r - 1] && (t.doubleQuote = !1);
                    else if (t.blockComment) "*" === e[r] && "/" === e[r + 1] && (e[r + 1] = "", t.blockComment = !1), e[r] = "";
                    else if (t.lineComment) "\n" === e[r + 1] && (t.lineComment = !1), e[r] = "";
                    else if (t.doubleQuote = '"' === e[r], t.singleQuote = "'" === e[r], "/" === e[r]) {
                        if ("*" === e[r + 1]) {
                            e[r] = "", t.blockComment = !0;
                            continue
                        }
                        if ("/" === e[r + 1]) {
                            e[r] = "", t.lineComment = !0;
                            continue
                        }
                        t.regex = !0
                    }
                    return e.join("").slice(2, -2)
                }, e.exports = t
            },
            8690: (e, t, r) => {
                var n = r(2157),
                    i = r(3078),
                    s = r(4680),
                    a = r(2510);
                t = function(e) {
                    return e ? s(e) ? e : n(e) && !a(e) ? i(e) : [e] : []
                }, e.exports = t
            },
            4110: (e, t, r) => {
                var n = r(6041);
                t = function(e) {
                    if (n(e)) return "";
                    try {
                        return i.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                    return ""
                };
                var i = Function.prototype.toString;
                e.exports = t
            },
            3647: (e, t, r) => {
                var n = r(6640),
                    i = r(510),
                    s = /^\s+|\s+$/g;
                t = function(e, t) {
                    return null == t ? e.replace(s, "") : n(i(e, t), t)
                }, e.exports = t
            },
            1193: (e, t, r) => {
                var n = r(8043);

                function i(e, t) {
                    return e === t
                }
                t = function(e, t) {
                    return t = t || i, n(e, (function(e, r, n) {
                        for (var i = n.length; ++r < i;)
                            if (t(e, n[r])) return !1;
                        return !0
                    }))
                }, e.exports = t
            },
            8133: (e, t, r) => {
                var n = r(6295);
                t = function(e) {
                    var t = [];
                    return n(e, (function(e) {
                        t.push(e)
                    })), t
                }, e.exports = t
            },
            4697: (e, t, r) => {
                var n = r(9359);
                t = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
                    return new Promise((function(i, s) {
                        var a = n(),
                            o = function() {
                                new Promise((function(t, r) {
                                    try {
                                        t(e())
                                    } catch (e) {
                                        r(e)
                                    }
                                })).then((function(e) {
                                    var u = n() - a;
                                    e ? i(e) : t && u >= t ? s(Error("Wait timed out after ".concat(t, " ms"))) : setTimeout(o, r)
                                }), s)
                            };
                        o()
                    }))
                }, e.exports = t
            }
        },
        t = {};

    function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n](s, s.exports, r), s.exports
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
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e = r(6715),
            t = r.n(e),
            n = r(6068),
            i = r.n(n),
            s = r(8770),
            a = r.n(s),
            o = r(1841),
            u = r.n(o),
            c = r(8268),
            l = r.n(c),
            h = r.g.Function,
            p = Object.getPrototypeOf(t()((function*() {}))).constructor;

        function d(e) {
            return a()(e, "Sync") || u()(f, e)
        }
        var f = ["stopRecord", "getRecorderManager", "pauseVoice", "stopVoice", "pauseBackgroundAudio", "stopBackgroundAudio", "getBackgroundAudioManager", "createAudioContext", "createInnerAudioContext", "createVideoContext", "createCameraContext", "createMapContext", "canIUse", "startAccelerometer", "stopAccelerometer", "startCompass", "stopCompass", "hideToast", "hideLoading", "showNavigationBarLoading", "hideNavigationBarLoading", "navigateBack", "createAnimation", "pageScrollTo", "createSelectorQuery", "createCanvasContext", "createContext", "drawCanvas", "hideKeyboard", "stopPullDownRefresh", "arrayBufferToBase64", "base64ToArrayBuffer"];

        function g(e) {
            var t = l()(e);
            return "}" !== e[e.length - 1] ? t.push("return " + e.slice(e.indexOf("=>") + 2)) : t.push(e.slice(e.indexOf("{") + 1, e.lastIndexOf("}"))), t
        }

        function m() {
            return r.g.__isAppServiceRemoteDebugMode__ && r.g.$$autoDebug
        }

        function v(e, t, n) {
            return r.g.$$autoDebug.$eval("(" + e + ")", t, n)
        }

        function b() {
            return (b = t()((function*(e, t, n) {
                return yield r.g.$$autoDebug.$eval("(" + e + ")", t, n)
            }))).apply(this, arguments)
        }

        function y(e, t) {
            return x.apply(this, arguments)
        }

        function x() {
            return x = t()((function*(e, t, r = null) {
                var n, s = g(e);
                return i()(e, "async") ? m() ? yield function(e, t, r) {
                    return b.apply(this, arguments)
                }(e, t, r): (n = p.apply(null, s), yield n.apply(r, t)): m() ? v(e, t, r) : (n = h.apply(null, s)).apply(r, t)
            })), x.apply(this, arguments)
        }
        var S = r(572),
            _ = r.n(S),
            w = r(5617),
            C = r.n(w),
            k = r(5309),
            E = r.n(k),
            I = r(3647),
            A = r.n(I),
            O = r(8690),
            T = r.n(O),
            N = r(6307),
            P = r.n(N),
            R = r(32),
            L = r.n(R),
            D = r(220),
            M = r.n(D),
            F = r(4697),
            V = r.n(F),
            j = r.g.WeixinJSBridge,
            B = !1,
            U = [];

        function H() {
            B = !0;
            for (var e = 0, t = U.length; e < t; e++) U[e]();
            U = []
        }
        r.g.__wxConfig.clientDebug = !0;
        var G = Object.getOwnPropertyDescriptor(r.g, "WeixinJSBridge");
        j && j.on ? H() : G && !1 === G.configurable ? V()((() => r.g.WeixinJSBridge && r.g.WeixinJSBridge.on), 5e3, 50).then((() => {
            j = r.g.WeixinJSBridge, H()
        })) : Object.defineProperty(r.g, "WeixinJSBridge", {
            set(e) {
                e && e.on && (j = e, H())
            },
            get: () => j,
            configurable: !0
        });
        const W = {
            on: (...e) => j.on(...e),
            publish: (...e) => j.publish(...e),
            invoke(...e) {
                var t;
                r.g.__isAppServiceRemoteDebugMode__ && "sendAutoMessage" === e[0] && (null === (t = r.g.__debugMessager) || void 0 === t || t.sendToDevtools(e[0], e[1]));
                return j.invoke(...e)
            },
            subscribe: (...e) => j.subscribe(...e),
            onReady(e) {
                B ? e() : U.push(e)
            }
        };
        var $ = r(6295),
            q = r.n($),
            J = r(408),
            z = r.n(J),
            Q = {},
            K = [],
            X = !1,
            Y = r.g.__passWAServiceGlobal__ || z();

        function Z(e) {
            X ? e(Q) : K.push(e)
        }
        r.g.__passWAServiceGlobal__ = function(e) {
            q()(e, ((e, t) => {
                X = !0, "Protect" !== t && (Q[t] = e)
            })), X && (K.forEach((e => {
                e(Q)
            })), K = []), Y(e)
        };
        var ee, te, re = "https://mp.weixin.qq.com/",
            ne = "https://servicewechat.com/",
            ie = {
                jsLoginURL: `${ne}wxa-dev-logic/jslogin`,
                jsRefreshSessionURL: `${ne}wxa-dev-logic/jsrefresh_session`,
                jsOperateWXDATAURL: `${ne}wxa-dev-logic/jsoperatewxdata`,
                jsAuthorizeURL: `${ne}wxa-dev-logic/jsauthorize`,
                jsAuthorizeConfirmURL: `${ne}wxa-dev-logic/jsauthorize-confirm`,
                getUserPhoneNumber: `${ne}wxa-dev-logic/jsgetuserwxphone`,
                checkWeRunState: `${ne}wxa-dev-logic/checkwerunstate`,
                getUserAutoFillData: `${ne}wxa-dev-logic/getuserfillinfo`,
                setUserAutoFillData: `${ne}wxa-dev-logic/saveuserfillinfo`,
                deleteUserAutoFillData: `${ne}wxa-dev-logic/deleteuserfillinfo`,
                requestAuthUserAutoFillData: `${ne}wxa-dev-logic/authuserfillinfo`,
                clearUserAutoFillInfo: `${ne}wxa-dev-logic/clearuserfillinfo`,
                batchGetCardInfoURL: `${re}debug/cgi-bin/webdebugger/getcarditeminfo`,
                batchAddCardURL: `${re}debug/cgi-bin/webdebugger/acceptcarditem`
            },
            se = {
                ILLEGAL_URL: -2005,
                NOT_LIMITS: -1024,
                NOT_LIMITS_QY: -1025,
                NOT_LIMITS_CARD: -1026,
                NOT_LOGIN: 41001,
                INVALID_TOKEN: 40001,
                INVALID_LOGIN: 42001,
                NEED_CONFORM: -12e3,
                AUTH_DENY: -12006,
                SCOPE_UNAUTHORIZED: -12007,
                INVALID_CODE: 10010,
                INVALID_CARD_ID: 10023
            },
            ae = r.g.__wxConfig,
            oe = {};
        Z((e => {
            var t;
            oe = (null == ae || null === (t = ae.debugLaunchInfo) || void 0 === t ? void 0 : t.autoTest) || {}, console.log("autoTestInfo..", oe), ee = e.__appServiceSDK__._requestSkipCheckDomain, te = oe.appid
        }));
        var ue = e => {
                var {
                    success: t,
                    fail: r,
                    complete: n
                } = e, i = (e.url || "").split("?")[0], s = [`newticket=${oe.newticket}`, `appid=${oe.appid}`, `clientversion=${oe.clientversion}`];
                return oe.testuser && s.push(`testuser=${oe.testuser}`), e.url = `${i}?${s.join("&")}`, t || r || n ? ee(e) : new Promise(((t, r) => {
                    ee({
                        ...e,
                        success: t,
                        fail: r
                    })
                }))
            },
            ce = () => te;

        function le(e, t, r, n, i) {
            ue({
                url: `${ie.jsAuthorizeConfirmURL}`,
                method: "POST",
                data: {
                    scope: r,
                    opt: t ? 1 : 2
                },
                success: r => {
                    var s = r.data,
                        a = "fail request error";
                    return s.baseresponse && 0 === s.baseresponse.errcode && (a = t ? "ok" : "fail auth deny"), n({
                        errMsg: `${e}:${a}`,
                        ...i
                    })
                }
            })
        }

        function he(e, t, r) {
            return ue({
                url: `${ie.jsLoginURL}`,
                method: "POST",
                data: {
                    scope: ["snsapi_base"]
                },
                success: t => {
                    var n = t.data;
                    r({
                        errMsg: `${e}:ok`,
                        code: n.code
                    })
                },
                fail: () => {
                    r({
                        errMsg: `${e}:fail request fail`
                    })
                }
            })
        }

        function pe(e, t, r) {
            return ue({
                url: `${ie.jsRefreshSessionURL}`,
                method: "POST",
                data: {
                    scope: ["snsapi_base"]
                },
                success: t => {
                    var n = t.data;
                    r({
                        errMsg: `${e}:ok`,
                        expireIn: n.session_expire_in,
                        err_code: n.baseresponse.errcode
                    })
                },
                fail: () => {
                    r({
                        errMsg: `${e}:fail request fail`
                    })
                }
            })
        }

        function de(e, t, r) {
            return fe.apply(this, arguments)
        }

        function fe() {
            return (fe = t()((function*(e, t, r) {
                var n = {
                    data: JSON.stringify(t.data || {})
                };
                return "webapi_plugin_setauth" === t.data.api_name && (n.ext_info = {
                    source_env: 2
                }), ue({
                    url: `${ie.jsOperateWXDATAURL}`,
                    method: "POST",
                    data: n,
                    success: n => {
                        var i = n.data,
                            s = i.baseresponse;
                        if (s) {
                            var a = i.baseresponse.errcode;
                            if (0 === a) {
                                var o = JSON.parse(i.data);
                                return r({
                                    errMsg: `${e}:ok`,
                                    data: o
                                })
                            }
                            return a === se.NEED_CONFORM ? function(e, t, r, n) {
                                var i = n.scopeList;
                                return ue({
                                    url: `${ie.jsOperateWXDATAURL}`,
                                    method: "POST",
                                    data: {
                                        data: JSON.stringify(t.data || {}),
                                        grant_scope: i[0].scope,
                                        opt: 1
                                    },
                                    success: t => {
                                        var n = t.data;
                                        return r({
                                            errMsg: `${e}:ok`,
                                            data: JSON.parse(n.data)
                                        })
                                    }
                                })
                            }(e, t, r, {
                                imageUrl: i.appicon_url,
                                appName: i.appname,
                                scopeList: [i.scope]
                            }) : a === se.SCOPE_UNAUTHORIZED ? r({
                                errMsg: `${e}:fail ${s.errmsg}`
                            }) : r({
                                errMsg: `${e}:fail ${s.errmsg}`,
                                err_code: a
                            })
                        }
                        r({
                            errMsg: `${e}:fail no baseresponse`
                        })
                    },
                    fail: () => {
                        r({
                            errMsg: `${e}:fail response fail`
                        })
                    }
                })
            }))).apply(this, arguments)
        }

        function ge(e, t, r) {
            return ue({
                url: `${ie.jsAuthorizeURL}`,
                method: "POST",
                data: {
                    scope: t.scope || []
                },
                success: t => {
                    var n = t.data,
                        i = n.baseresponse;
                    if (i) {
                        var s = i.errcode;
                        if (0 === s) return r({
                            errMsg: `${e}:ok`,
                            body: n
                        });
                        if (s === se.NEED_CONFORM) {
                            var a = n.scope_list || [],
                                o = [];
                            return a.forEach((e => {
                                o.push(e.scope)
                            })), le(e, !0, a, r)
                        }
                    }
                },
                fail: () => {
                    r({
                        errMsg: `${e}:fail request fail`
                    })
                }
            })
        }

        function me(e, t, r) {
            return ue({
                url: `${ie.checkWeRunState}`,
                method: "POST",
                data: {
                    appid: ce()
                },
                success: t => {
                    var n = t.data;
                    if (1 === n.state) return r({
                        errMsg: `${e}:ok`
                    });
                    var i = n.wording || "USER_NOT_OPEN_WECHAT_MOVEMENT";
                    return r({
                        errMsg: `${e}:fail ${i}`
                    })
                },
                fail: () => {
                    r({
                        errMsg: `${e}:fail request fail`
                    })
                }
            })
        }
        var ve, be, ye = {
            login: he,
            refreshSession: pe,
            operateWXData: de,
            authorize: ge,
            openWeRunSetting: me,
            getPhoneNumber: function(e, r, n) {
                var i;
                ue({
                    url: `${ie.getUserPhoneNumber}`,
                    method: "POST",
                    data: {
                        appid: ce()
                    },
                    success: (i = t()((function*(t) {
                        var r = t.data;
                        console.log("getPhoneNumber", r);
                        var i = r.jsapi_baseresponse,
                            s = i ? parseInt(i.errcode, 10) : -1e4;
                        try {
                            if (0 === s) {
                                var a, o = {};
                                try {
                                    o = JSON.parse(r.data), a = JSON.parse(o.data)
                                } catch (e) {
                                    throw new Error(`GET_DATA_ERROR ${e}`)
                                }
                                if (!a || !a.mobile) throw new Error("USER_NOT_BOUND_PHONE");
                                if (a.need_auth) throw new Error("PHONE_BOUND_NEED_VERIFIED");
                                var u = [r.scope],
                                    c = [];
                                return u.forEach((e => {
                                    c.push(e.scope)
                                })), le(e, !0, u, n, o)
                            }
                            throw -12001 === s ? new Error("APPID_NO_PERMISSIONS") : -12004 === s ? new Error("WX_LOGIN_FIRST") : new Error(`SYSTEM_ERROR errorCode:${s}`)
                        } catch (t) {
                            return n({
                                errMsg: `${e}:fail ${t}`
                            })
                        }
                    })), function(e) {
                        return i.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            },
            getUserAutoFillData: function(e, r, n) {
                var i, s = {
                    appid: ce(),
                    get_all_info: !1,
                    source: 1,
                    user_info_list: r.fields,
                    client_version: r.clientVersion
                };
                ue({
                    url: `${ie.getUserAutoFillData}`,
                    method: "POST",
                    data: s,
                    success: (i = t()((function*(t) {
                        var r = t.data;
                        n({
                            errMsg: `${e}:ok`,
                            userData: r.user_info_json || "{}",
                            authStatus: r.auth_status,
                            authInfo: r.auth_info,
                            authGroupList: r.auth_group_list
                        })
                    })), function(e) {
                        return i.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            },
            setUserAutoFillData: function(e, r, n) {
                var i, s = {
                    appid: ce(),
                    source: 1,
                    user_info_json: r.dataList,
                    client_version: r.clientVersion
                };
                ue({
                    url: `${ie.getUserAutoFillData}`,
                    method: "POST",
                    data: s,
                    success: (i = t()((function*(t) {
                        t.data, n({
                            errMsg: `${e}:ok`
                        })
                    })), function(e) {
                        return i.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            },
            deleteUserAutoFillData: function(e, r, n) {
                var i, s = {
                    appid: ce(),
                    source: 1,
                    group_key: r.groupKey,
                    group_id: r.groupId,
                    client_version: r.clientVersion
                };
                ue({
                    url: `${ie.deleteUserAutoFillData}`,
                    method: "POST",
                    data: s,
                    success: (i = t()((function*(t) {
                        t.data, n({
                            errMsg: `${e}:ok`
                        })
                    })), function(e) {
                        return i.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            },
            requestAuthUserAutoFillData: function(e, r, n) {
                var i, s = {
                    appid: ce(),
                    source: 1,
                    auth_info_list: r.fields || [],
                    auth_status: r.authStatus,
                    user_confirm: !0,
                    client_version: r.clientVersion
                };
                ue({
                    url: `${ie.requestAuthUserAutoFillData}`,
                    method: "POST",
                    data: s,
                    success: (i = t()((function*(t) {
                        t.data, n({
                            errMsg: `${e}:ok`
                        })
                    })), function(e) {
                        return i.apply(this, arguments)
                    }),
                    fail: () => {
                        n({
                            errMsg: `${e}:fail request fail`
                        })
                    }
                })
            }
        };

        function xe() {
            return (xe = t()((function*(e) {
                var {
                    functionDeclaration: t,
                    args: r
                } = e;
                return {
                    result: yield y(t, r)
                }
            }))).apply(this, arguments)
        }

        function Se() {
            return (Se = t()((function*() {
                return _()((yield _e()).pageStack)
            }))).apply(this, arguments)
        }

        function _e() {
            return we.apply(this, arguments)
        }

        function we() {
            return (we = t()((function*() {
                return {
                    pageStack: ve.getCurrentPagesByDomain().map((e => {
                        var {
                            route: t
                        } = e, r = t.indexOf("__plugin__/");
                        return r > -1 && (t = "plugin-private://" + t.slice(r + 11)), {
                            pageId: e.__wxWebviewId__,
                            path: t,
                            query: e.options
                        }
                    }))
                }
            }))).apply(this, arguments)
        }
        var Ce = {},
            ke = {},
            Ee = {},
            Ie = {};

        function Ae(e, t = "") {
            return t ? `${t}_${e}` : e
        }

        function Oe(e = "") {
            if (e) {
                if (!Ce[e]) throw Error(`Plugin ${e} not exists`);
                return Ce[e].wx
            }
            return "undefined" == typeof wx ? be : wx
        }

        function Te() {
            return Te = t()((function*(e) {
                var {
                    method: r,
                    result: n,
                    pluginId: s
                } = e, {
                    functionDeclaration: a,
                    args: o
                } = e, u = Oe(s);
                if (!u[r]) throw Error(`wx.${r} not exists`);
                if (! function(e) {
                        return !i()(e, "on") && !i()(e, "off")
                    }(r)) throw Error(`You can't mock wx.${r}`);
                if (C()(n) && C()(a)) ! function(e, t) {
                    var r = Oe(t),
                        n = Ae(e, t);
                    if (!ke[n]) return;
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    i ? Ee[n] ? Object.defineProperty(r, e, {
                        get: ke[n]
                    }) : Object.defineProperty(r, e, {
                        value: ke[n]
                    }) : r[e] = ke[n];
                    delete ke[n]
                }(r, s);
                else {
                    var c;
                    C()(n) || (a = "function () {\n      return arguments[arguments.length - 1];\n    }", o = [n]);
                    var l = {
                        origin: L()(Ne(r, s), u)
                    };
                    c = d(r) ? function() {
                            return function(e, t, r = null) {
                                var n = g(e);
                                return m() ? v(e, t, r) : h.apply(null, n).apply(r, t)
                            }(a, P()(T()(arguments), o), l)
                        } : function() {
                            var e = t()((function*(...e) {
                                var n = !1,
                                    i = e[0];
                                if ((C()(i) || C()(i.success) && C()(i.fail) && C()(i.complete)) && (n = !0), n) return o = P()(e, o), new Promise(function() {
                                    var e = t()((function*(e, t) {
                                        var n = yield y(a, o, l);
                                        (n.errMsg || `${r}:ok`).indexOf(`${r}:ok`) > -1 ? e(n) : t(n)
                                    }));
                                    return function(t, r) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                                var s = M()(i);
                                delete s.success, delete s.fail, delete s.complete;
                                var u = yield y(a, P()([s], o), l);
                                (u.errMsg || `${r}:ok`).indexOf(`${r}:ok`) > -1 ? i.success && i.success(u) : i.fail && i.fail(u), i.complete && i.complete(u)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        function(e, t, r) {
                            var n = Oe(r),
                                i = Ae(e, r),
                                s = Object.getOwnPropertyDescriptor(n, e);
                            if (!ke[i]) {
                                var a, o = !1,
                                    u = !1;
                                s ? s.get ? (o = !0, a = s.get) : (u = !0, a = s.value) : a = n[e], a && (Ie[i] = u, Ee[i] = o, ke[i] = a)
                            }
                            s ? Object.defineProperty(n, e, {
                                get: () => t
                            }) : n[e] = t
                        }(r, c, s)
                }
            })), Te.apply(this, arguments)
        }

        function Ne(e, t) {
            var r = Oe(t),
                n = Ae(e, t);
            if (ke[n]) return Ee[n] ? ke[n]() : ke[n];
            var i = Object.getOwnPropertyDescriptor(r, e);
            return i && i.get ? i.get() : r[e]
        }
        var Pe = ["log", "info", "warn", "error", "debug"];

        function Re() {
            return (Re = t()((function*() {
                Pe.forEach((e => {
                    var t = console[e];
                    console[e] = function(...r) {
                        W.invoke("sendAutoMessage", {
                            method: "App.logAdded",
                            params: {
                                type: e,
                                args: r
                            }
                        }), E()(t) && t.apply(console, r)
                    }
                }))
            }))).apply(this, arguments)
        }

        function Le() {
            return (Le = t()((function*(e) {
                var t, {
                        name: n
                    } = e,
                    i = function(...e) {
                        W.invoke("sendAutoMessage", {
                            method: "App.bindingCalled",
                            params: {
                                name: n,
                                args: e
                            }
                        })
                    };
                r.g.__isAppServiceRemoteDebugMode__ && r.g.$$autoDebug ? null === (t = r.g.$$autoDebug) || void 0 === t || t.setSubContextGlobalFunctions(n, i) : r.g[n] = i
            }))).apply(this, arguments)
        }

        function De() {
            return (De = t()((function*() {
                W.invoke("exitMiniProgram", {})
            }))).apply(this, arguments)
        }

        function Me() {
            return Me = t()((function*() {
                return new Promise(((e, r) => {
                    function n() {
                        r(Error("fail to capture screenshot"))
                    }
                    W.invoke("private_captureScreen", {}, function() {
                        var r = t()((function*(t) {
                            var {
                                errMsg: r
                            } = t;
                            if (u()(r, ":ok")) {
                                var {
                                    tempFilePath: i
                                } = t;
                                Ne("saveFile")({
                                    tempFilePath: i,
                                    success(t) {
                                        var r = Ne("getFileSystemManager")(),
                                            i = t.savedFilePath;
                                        r.readFile({
                                            filePath: i,
                                            encoding: "base64",
                                            success(t) {
                                                Ne("removeSavedFile")({
                                                    filePath: i
                                                }), e({
                                                    data: t.data
                                                })
                                            },
                                            fail() {
                                                n()
                                            }
                                        })
                                    },
                                    fail() {
                                        n()
                                    }
                                })
                            } else n()
                        }));
                        return function(e) {
                            return r.apply(this, arguments)
                        }
                    }())
                }))
            })), Me.apply(this, arguments)
        }
        var Fe = r.g.__wxConfig;
        Z((e => {
            var t, r, n;
            ve = e.__appServiceEngine__, be = e.wx;
            var i = null === (t = ve) || void 0 === t || null === (r = t.__getCreatePluginGlobal) || void 0 === r ? void 0 : r.call(t),
                s = ve.__setCreatePluginGlobal;
            if (null == s || s(((e, t) => {
                    var r = null == i ? void 0 : i(e, t);
                    return Ce[e] = r, r
                })), e.Reporter.registerErrorListener((e => {
                    var t = e.split("\n");
                    "MiniProgramError" === A()(t[0]) && (e = t[2], e = A()(e.replace(/^((Type)|(Range)|(Reference)|(Syntax))?Error:/, "")), W.invoke("sendAutoMessage", {
                        method: "App.exceptionThrown",
                        params: {
                            message: e,
                            stack: t.slice(2).join("\n")
                        }
                    }))
                })), null != Fe && null !== (n = Fe.debugLaunchInfo) && void 0 !== n && n.autoTest) {
                var a = e.WeixinJSBridge.invoke;
                Object.defineProperty(e.WeixinJSBridge, "invoke", {
                    value(...t) {
                        var [r, n, i, s] = t;
                        return ye[r] ? ye[r](r, n, i) : a.apply(e.WeixinJSBridge, t)
                    }
                }), e.WeixinJSBridge.subscribe("callAutoInvoke", (t => {
                    var {
                        name: r,
                        args: n,
                        callbackId: i
                    } = t;
                    if (ye[r]) return ye[r](r, n, (t => {
                        e.WeixinJSBridge.publish("callbackAutoInvoke", {
                            callbackId: i,
                            res: t
                        })
                    }))
                }))
            }
        }));
        var Ve, je, Be, Ue = r(5828),
            He = r.n(Ue),
            Ge = r(4185),
            We = r.n(Ge);

        function $e(e) {
            var t = Ve.getCurrentPagesByDomain();
            for (var r of t)
                if (r.__wxWebviewId__ === e) return r;
            throw Error("page destroyed")
        }
        Z((e => {
            Ve = e.__appServiceEngine__
        })), Z((e => {
            je = e.exparser, Be = e.__virtualDOM__
        }));
        const qe = {
            "App.callWxMethod": function(e) {
                var {
                    method: t,
                    pluginId: r
                } = e, n = Oe(r), {
                    args: i
                } = e;
                return new Promise(((e, r) => {
                    if (!n[t]) return r(Error(`wx.${t} not exists`));
                    d(t) ? e({
                        result: n[t].apply(n, i)
                    }) : (i = i[0] || {}, n[t]({
                        ...i,
                        success(t) {
                            e({
                                result: t
                            })
                        },
                        fail(e) {
                            r(Error(e.errMsg.replace(`${t}:fail `, "")))
                        }
                    }))
                }))
            },
            "App.callFunction": function(e) {
                return xe.apply(this, arguments)
            },
            "App.getCurrentPage": function() {
                return Se.apply(this, arguments)
            },
            "App.getPageStack": _e,
            "App.mockWxMethod": function(e) {
                return Te.apply(this, arguments)
            },
            "App.enableLog": function() {
                return Re.apply(this, arguments)
            },
            "App.addBinding": function(e) {
                return Le.apply(this, arguments)
            },
            "App.exit": function() {
                return De.apply(this, arguments)
            },
            "App.captureScreenshot": function() {
                return Me.apply(this, arguments)
            },
            "Page.setData": function(e) {
                var {
                    pageId: t,
                    data: r
                } = e, n = $e(t);
                return new Promise((e => {
                    n.setData(r, (() => {
                        e()
                    }))
                }))
            },
            "Page.getData": function(e) {
                var {
                    pageId: t,
                    path: r
                } = e, n = $e(t), i = Object.assign({}, n.data);
                return delete i.__webviewId__, r && (i = We()(i, r)), {
                    data: i
                }
            },
            "Page.callMethod": function(e) {
                var {
                    method: t,
                    args: r
                } = e, n = $e(e.pageId);
                return new Promise(((e, i) => {
                    if (!n[t]) return i(Error(`page.${t} not exists`));
                    var s = n[t].apply(n, r);
                    He()(s) ? s.then((t => {
                        e({
                            result: t
                        })
                    }), i) : e({
                        result: s
                    })
                }))
            },
            "Element.callMethod": function(e) {
                var {
                    nodeId: t,
                    method: r,
                    args: n,
                    pageId: i
                } = e, s = Be.getNodeById(t, i);
                if (s) return new Promise(((e, t) => {
                    var i = je.Element.getMethodCaller(s);
                    if (!i[r]) return t(Error(`component.${r} not exists`));
                    var a = je.safeCallback("Event Handler", i[r], i, n, s);
                    He()(a) ? a.then((t => {
                        e({
                            result: t
                        })
                    }), t) : e({
                        result: a
                    })
                }))
            },
            "Element.getData": function(e) {
                var {
                    nodeId: t,
                    pageId: r,
                    path: n
                } = e, i = Be.getNodeById(t, r).data;
                return n && (i = We()(i, n)), {
                    data: i
                }
            },
            "Element.setData": function(e) {
                var {
                    nodeId: t,
                    pageId: r,
                    data: n
                } = e;
                Be.getNodeById(t, r).setData(n)
            },
            "Element.callContextMethod": function(e) {
                var t, r, {
                    nodeId: n,
                    videoId: i,
                    pageId: s,
                    method: a,
                    args: o
                } = e;
                if (t = n ? Be.getNodeById(n, s) : $e(s), !i) throw Error("id is not provided");
                return {
                    result: (r = Ne("createVideoContext")(i, t))[a].apply(r, o)
                }
            }
        };
        var Je = r(7626),
            ze = r.n(Je);

        function Qe() {
            return (Qe = t()((function*(e, t) {
                if (qe[e]) return (yield qe[e](t)) || {};
                throw Error(`appservice ${e} unimplemented`)
            }))).apply(this, arguments)
        }
        W.onReady(t()((function*() {
            W.on("onAutoMessageReceive", function() {
                var e = t()((function*(e) {
                    var {
                        method: t,
                        params: r,
                        id: n
                    } = e, i = {
                        id: n
                    };
                    if (C()(r.pageId) || qe[t]) try {
                        i.result = yield function(e, t) {
                            return Qe.apply(this, arguments)
                        }(t, r)
                    } catch (e) {
                        i.error = {
                            message: e.message
                        }
                    } else try {
                        return $e(r.pageId), void W.publish("sendAutoMessage", e, [r.pageId])
                    } catch (e) {
                        i.error = {
                            message: e.message
                        }
                    }
                    W.invoke("sendAutoMessage", i)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()), W.subscribe("sendAutoMessage", (e => {
                W.invoke("sendAutoMessage", e)
            })), yield V()((() => r.g.getCurrentPages && r.g.getCurrentPages().length > 0), 0, 50), yield ze()(1e3), W.invoke("sendAutoMessage", {
                method: "App.initialized",
                params: {
                    from: r.g.__isAppServiceRemoteDebugMode__ ? "appservice" : "devtools"
                }
            })
        })))
    })()
})();