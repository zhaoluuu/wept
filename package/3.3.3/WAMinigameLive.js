try {
    ! function() {
        let t, e = "getMinigameLiveGlobalVar";
        globalThis[e] ? t = globalThis[e] : void 0 !== globalThis.WeixinJSBridge && globalThis.WeixinJSBridge[e] && (t = globalThis.WeixinJSBridge[e]);
        var {
            console: i,
            wxNativeConsole: s,
            __wxConfig: n,
            __errorTracer__: o,
            wxConsole: r,
            wxGA: a,
            Reporter: h,
            Foundation: l,
            WeixinJSBridge: c,
            __appServiceSDK__: d,
            __IS_MINIGAME_LIVE_SUB_PACKAGE__: u,
            wxRunOnDebug: g
        } = t();
        (() => {
            var t = {
                    715: t => {
                        function e(t, e, i, s, n, o, r) {
                            try {
                                var a = t[o](r),
                                    h = a.value
                            } catch (t) {
                                return void i(t)
                            }
                            a.done ? e(h) : Promise.resolve(h).then(s, n)
                        }
                        t.exports = function(t) {
                            return function() {
                                var i = this,
                                    s = arguments;
                                return new Promise((function(n, o) {
                                    var r = t.apply(i, s);

                                    function a(t) {
                                        e(r, n, o, a, h, "next", t)
                                    }

                                    function h(t) {
                                        e(r, n, o, a, h, "throw", t)
                                    }
                                    a(void 0)
                                }))
                            }
                        }, t.exports.__esModule = !0, t.exports.default = t.exports
                    },
                    263: (t, e, i) => {
                        var s, n, o;
                        globalThis, n = [e, i(687), i(258)], s = function(t, e, i) {
                            t.animate = e, t.Scroller = i
                        }, void 0 === (o = "function" == typeof s ? s.apply(e, n) : s) || (t.exports = o)
                    },
                    258: (t, e, i) => {
                        var s, n, o;
                        globalThis, n = [i(687)], void 0 === (o = "function" == typeof(s = function(t) {
                            var e = function() {},
                                i = function(t, i) {
                                    for (var s in this.__callback = t, this.options = {
                                            scrollingX: !0,
                                            scrollingY: !0,
                                            animating: !0,
                                            animationDuration: 250,
                                            bouncing: !0,
                                            locking: !0,
                                            paging: !1,
                                            snapping: !1,
                                            zooming: !1,
                                            minZoom: .5,
                                            maxZoom: 3,
                                            speedMultiplier: 1,
                                            scrollingComplete: e,
                                            penetrationDeceleration: .03,
                                            penetrationAcceleration: .08
                                        }, i) this.options[s] = i[s]
                                },
                                s = function(t) {
                                    return Math.pow(t - 1, 3) + 1
                                },
                                n = function(t) {
                                    return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
                                };
                            return i.prototype = {
                                __isSingleTouch: !1,
                                __isTracking: !1,
                                __didDecelerationComplete: !1,
                                __isGesturing: !1,
                                __isDragging: !1,
                                __isDecelerating: !1,
                                __isAnimating: !1,
                                __clientLeft: 0,
                                __clientTop: 0,
                                __clientWidth: 0,
                                __clientHeight: 0,
                                __contentWidth: 0,
                                __contentHeight: 0,
                                __snapWidth: 100,
                                __snapHeight: 100,
                                __zoomLevel: 1,
                                __scrollLeft: 0,
                                __scrollTop: 0,
                                __maxScrollLeft: 0,
                                __maxScrollTop: 0,
                                __scheduledLeft: 0,
                                __scheduledTop: 0,
                                __scheduledZoom: 0,
                                __lastTouchLeft: null,
                                __lastTouchTop: null,
                                __lastTouchMove: null,
                                __positions: null,
                                __minDecelerationScrollLeft: null,
                                __minDecelerationScrollTop: null,
                                __maxDecelerationScrollLeft: null,
                                __maxDecelerationScrollTop: null,
                                __decelerationVelocityX: null,
                                __decelerationVelocityY: null,
                                setDimensions: function(t, e, i, s) {
                                    null !== t && (this.__clientWidth = t), null !== e && (this.__clientHeight = e), null !== i && (this.__contentWidth = i), null !== s && (this.__contentHeight = s), this.__computeScrollMax(), this.scrollTo(this.__scrollLeft, this.__scrollTop, !0)
                                },
                                setPosition: function(t, e) {
                                    this.__clientLeft = t || 0, this.__clientTop = e || 0
                                },
                                setSnapSize: function(t, e) {
                                    this.__snapWidth = t, this.__snapHeight = e
                                },
                                getValues: function() {
                                    return {
                                        left: this.__scrollLeft,
                                        top: this.__scrollTop,
                                        right: this.__scrollLeft + this.__clientWidth / this.__zoomLevel,
                                        bottom: this.__scrollTop + this.__clientHeight / this.__zoomLevel,
                                        zoom: this.__zoomLevel
                                    }
                                },
                                getPoint: function(t, e) {
                                    var i = this.getValues();
                                    return {
                                        left: t / i.zoom,
                                        top: e / i.zoom
                                    }
                                },
                                getScrollMax: function() {
                                    return {
                                        left: this.__maxScrollLeft,
                                        top: this.__maxScrollTop
                                    }
                                },
                                zoomTo: function(e, i, s, n, o) {
                                    if (!this.options.zooming) throw new Error("Zooming is not enabled!");
                                    o && (this.__zoomComplete = o), this.__isDecelerating && (t.stop(this.__isDecelerating), this.__isDecelerating = !1);
                                    var r = this.__zoomLevel;
                                    void 0 === s && (s = this.__clientWidth / 2), void 0 === n && (n = this.__clientHeight / 2), e = Math.max(Math.min(e, this.options.maxZoom), this.options.minZoom), this.__computeScrollMax(e);
                                    var a = e / r,
                                        h = a * (this.__scrollLeft + s) - s,
                                        l = a * (this.__scrollTop + n) - n;
                                    h > this.__maxScrollLeft ? h = this.__maxScrollLeft : h < 0 && (h = 0), l > this.__maxScrollTop ? l = this.__maxScrollTop : l < 0 && (l = 0), this.__publish(h, l, e, i)
                                },
                                zoomBy: function(t, e, i, s, n) {
                                    this.zoomTo(this.__zoomLevel * t, e, i, s, n)
                                },
                                scrollTo: function(e, i, s, n) {
                                    if (this.__isDecelerating && (t.stop(this.__isDecelerating), this.__isDecelerating = !1), void 0 !== n && n !== this.__zoomLevel) {
                                        if (!this.options.zooming) throw new Error("Zooming is not enabled!");
                                        e *= n, i *= n, this.__computeScrollMax(n)
                                    } else n = this.__zoomLevel;
                                    this.options.scrollingX ? this.options.paging ? e = Math.round(e / this.__clientWidth) * this.__clientWidth : this.options.snapping && (e = Math.round(e / this.__snapWidth) * this.__snapWidth) : e = this.__scrollLeft, this.options.scrollingY ? this.options.paging ? i = Math.round(i / this.__clientHeight) * this.__clientHeight : this.options.snapping && (i = Math.round(i / this.__snapHeight) * this.__snapHeight) : i = this.__scrollTop, e = Math.max(Math.min(this.__maxScrollLeft, e), 0), i = Math.max(Math.min(this.__maxScrollTop, i), 0), e === this.__scrollLeft && i === this.__scrollTop && (s = !1), this.__publish(e, i, n, s)
                                },
                                scrollBy: function(t, e, i) {
                                    var s = this.__isAnimating ? this.__scheduledLeft : this.__scrollLeft,
                                        n = this.__isAnimating ? this.__scheduledTop : this.__scrollTop;
                                    this.scrollTo(s + (t || 0), n + (e || 0), i)
                                },
                                doMouseZoom: function(t, e, i, s) {
                                    var n = t > 0 ? .97 : 1.03;
                                    return this.zoomTo(this.__zoomLevel * n, !1, i - this.__clientLeft, s - this.__clientTop)
                                },
                                doTouchStart: function(e, i) {
                                    if (void 0 === e.length) throw new Error("Invalid touch list: " + e);
                                    if (i instanceof Date && (i = i.valueOf()), "number" != typeof i) throw new Error("Invalid timestamp value: " + i);
                                    var s, n;
                                    this.__interruptedAnimation = !0, this.__isDecelerating && (t.stop(this.__isDecelerating), this.__isDecelerating = !1, this.__interruptedAnimation = !0), this.__isAnimating && (t.stop(this.__isAnimating), this.__isAnimating = !1, this.__interruptedAnimation = !0);
                                    var o = 1 === e.length;
                                    o ? (s = e[0].pageX, n = e[0].pageY) : (s = Math.abs(e[0].pageX + e[1].pageX) / 2, n = Math.abs(e[0].pageY + e[1].pageY) / 2), this.__initialTouchLeft = s, this.__initialTouchTop = n, this.__zoomLevelStart = this.__zoomLevel, this.__lastTouchLeft = s, this.__lastTouchTop = n, this.__lastTouchMove = i, this.__lastScale = 1, this.__enableScrollX = !o && this.options.scrollingX, this.__enableScrollY = !o && this.options.scrollingY, this.__isTracking = !0, this.__didDecelerationComplete = !1, this.__isDragging = !o, this.__isSingleTouch = o, this.__positions = []
                                },
                                doTouchMove: function(t, e, i) {
                                    if (void 0 === t.length) throw new Error("Invalid touch list: " + t);
                                    if (e instanceof Date && (e = e.valueOf()), "number" != typeof e) throw new Error("Invalid timestamp value: " + e);
                                    if (this.__isTracking) {
                                        var s, n;
                                        2 === t.length ? (s = Math.abs(t[0].pageX + t[1].pageX) / 2, n = Math.abs(t[0].pageY + t[1].pageY) / 2) : (s = t[0].pageX, n = t[0].pageY);
                                        var o = this.__positions;
                                        if (this.__isDragging) {
                                            var r = s - this.__lastTouchLeft,
                                                a = n - this.__lastTouchTop,
                                                h = this.__scrollLeft,
                                                l = this.__scrollTop,
                                                c = this.__zoomLevel;
                                            if (void 0 !== i && this.options.zooming) {
                                                var d = c;
                                                if (c = c / this.__lastScale * i, d !== (c = Math.max(Math.min(c, this.options.maxZoom), this.options.minZoom))) {
                                                    var u = s - this.__clientLeft,
                                                        g = n - this.__clientTop;
                                                    h = (u + h) * c / d - u, l = (g + l) * c / d - g, this.__computeScrollMax(c)
                                                }
                                            }
                                            if (this.__enableScrollX) {
                                                h -= r * this.options.speedMultiplier;
                                                var p = this.__maxScrollLeft;
                                                (h > p || h < 0) && (this.options.bouncing ? h += r / 2 * this.options.speedMultiplier : h = h > p ? p : 0)
                                            }
                                            if (this.__enableScrollY) {
                                                l -= a * this.options.speedMultiplier;
                                                var v = this.__maxScrollTop;
                                                (l > v || l < 0) && (this.options.bouncing ? l += a / 2 * this.options.speedMultiplier : l = l > v ? v : 0)
                                            }
                                            o.length > 60 && o.splice(0, 30), o.push(h, l, e), this.__publish(h, l, c)
                                        } else {
                                            var m = this.options.locking ? 3 : 0,
                                                f = 5,
                                                w = Math.abs(s - this.__initialTouchLeft),
                                                A = Math.abs(n - this.__initialTouchTop);
                                            this.__enableScrollX = this.options.scrollingX && w >= m, this.__enableScrollY = this.options.scrollingY && A >= m, o.push(this.__scrollLeft, this.__scrollTop, e), this.__isDragging = (this.__enableScrollX || this.__enableScrollY) && (w >= f || A >= f), this.__isDragging && (this.__interruptedAnimation = !1)
                                        }
                                        this.__lastTouchLeft = s, this.__lastTouchTop = n, this.__lastTouchMove = e, this.__lastScale = i
                                    }
                                },
                                doTouchEnd: function(t) {
                                    if (t instanceof Date && (t = t.valueOf()), "number" != typeof t) throw new Error("Invalid timestamp value: " + t);
                                    if (this.__isTracking) {
                                        if (this.__isTracking = !1, this.__isDragging)
                                            if (this.__isDragging = !1, this.__isSingleTouch && this.options.animating && t - this.__lastTouchMove <= 100) {
                                                for (var e = this.__positions, i = e.length - 1, s = i, n = i; n > 0 && e[n] > this.__lastTouchMove - 100; n -= 3) s = n;
                                                if (s !== i) {
                                                    var o = e[i] - e[s],
                                                        r = this.__scrollLeft - e[s - 2],
                                                        a = this.__scrollTop - e[s - 1];
                                                    this.__decelerationVelocityX = r / o * (1e3 / 60), this.__decelerationVelocityY = a / o * (1e3 / 60);
                                                    var h = this.options.paging || this.options.snapping ? 4 : 1;
                                                    (Math.abs(this.__decelerationVelocityX) > h || Math.abs(this.__decelerationVelocityY) > h) && this.__startDeceleration(t)
                                                } else this.options.scrollingComplete()
                                            } else t - this.__lastTouchMove > 100 && this.options.scrollingComplete();
                                        this.__isDecelerating || ((this.__interruptedAnimation || this.__isDragging) && this.options.scrollingComplete(), this.scrollTo(this.__scrollLeft, this.__scrollTop, !0, this.__zoomLevel)), this.__positions.length = 0
                                    }
                                },
                                __publish: function(e, i, o, r) {
                                    var a = this.__isAnimating;
                                    if (a && (t.stop(a), this.__isAnimating = !1), r && this.options.animating) {
                                        this.__scheduledLeft = e, this.__scheduledTop = i, this.__scheduledZoom = o;
                                        var h = this.__scrollLeft,
                                            l = this.__scrollTop,
                                            c = this.__zoomLevel,
                                            d = e - h,
                                            u = i - l,
                                            g = o - c,
                                            p = function(t, e, i) {
                                                i && (this.__scrollLeft = h + d * t, this.__scrollTop = l + u * t, this.__zoomLevel = c + g * t, this.__callback && this.__callback(this.__scrollLeft, this.__scrollTop, this.__zoomLevel))
                                            }.bind(this),
                                            v = function(t) {
                                                return this.__isAnimating === t
                                            }.bind(this),
                                            m = function(t, e, i) {
                                                e === this.__isAnimating && (this.__isAnimating = !1), (this.__didDecelerationComplete || i) && this.options.scrollingComplete(), this.options.zooming && (this.__computeScrollMax(), this.__zoomComplete && (this.__zoomComplete(), this.__zoomComplete = null))
                                            }.bind(this);
                                        this.__isAnimating = t.start(p, v, m, this.options.animationDuration, a ? s : n)
                                    } else this.__scheduledLeft = this.__scrollLeft = e, this.__scheduledTop = this.__scrollTop = i, this.__scheduledZoom = this.__zoomLevel = o, this.__callback && this.__callback(e, i, o), this.options.zooming && (this.__computeScrollMax(), this.__zoomComplete && (this.__zoomComplete(), this.__zoomComplete = null))
                                },
                                __computeScrollMax: function(t) {
                                    void 0 === t && (t = this.__zoomLevel), this.__maxScrollLeft = Math.max(this.__contentWidth * t - this.__clientWidth, 0), this.__maxScrollTop = Math.max(this.__contentHeight * t - this.__clientHeight, 0)
                                },
                                __startDeceleration: function(e) {
                                    if (this.options.paging) {
                                        var i = Math.max(Math.min(this.__scrollLeft, this.__maxScrollLeft), 0),
                                            s = Math.max(Math.min(this.__scrollTop, this.__maxScrollTop), 0),
                                            n = this.__clientWidth,
                                            o = this.__clientHeight;
                                        this.__minDecelerationScrollLeft = Math.floor(i / n) * n, this.__minDecelerationScrollTop = Math.floor(s / o) * o, this.__maxDecelerationScrollLeft = Math.ceil(i / n) * n, this.__maxDecelerationScrollTop = Math.ceil(s / o) * o
                                    } else this.__minDecelerationScrollLeft = 0, this.__minDecelerationScrollTop = 0, this.__maxDecelerationScrollLeft = this.__maxScrollLeft, this.__maxDecelerationScrollTop = this.__maxScrollTop;
                                    var r = function(t, e, i) {
                                            this.__stepThroughDeceleration(i)
                                        }.bind(this),
                                        a = this.options.snapping ? 4 : .1,
                                        h = function() {
                                            var t = Math.abs(this.__decelerationVelocityX) >= a || Math.abs(this.__decelerationVelocityY) >= a;
                                            return t || (this.__didDecelerationComplete = !0), t
                                        }.bind(this),
                                        l = function(t, e, i) {
                                            this.__isDecelerating = !1, this.__didDecelerationComplete && this.options.scrollingComplete(), this.scrollTo(this.__scrollLeft, this.__scrollTop, this.options.snapping)
                                        }.bind(this);
                                    this.__isDecelerating = t.start(r, h, l)
                                },
                                __stepThroughDeceleration: function(t) {
                                    var e = this.__scrollLeft + this.__decelerationVelocityX,
                                        i = this.__scrollTop + this.__decelerationVelocityY;
                                    if (!this.options.bouncing) {
                                        var s = Math.max(Math.min(this.__maxDecelerationScrollLeft, e), this.__minDecelerationScrollLeft);
                                        s !== e && (e = s, this.__decelerationVelocityX = 0);
                                        var n = Math.max(Math.min(this.__maxDecelerationScrollTop, i), this.__minDecelerationScrollTop);
                                        n !== i && (i = n, this.__decelerationVelocityY = 0)
                                    }
                                    if (t ? this.__publish(e, i, this.__zoomLevel) : (this.__scrollLeft = e, this.__scrollTop = i), !this.options.paging) {
                                        var o = .95;
                                        this.__decelerationVelocityX *= o, this.__decelerationVelocityY *= o
                                    }
                                    if (this.options.bouncing) {
                                        var r = 0,
                                            a = 0,
                                            h = this.options.penetrationDeceleration,
                                            l = this.options.penetrationAcceleration;
                                        e < this.__minDecelerationScrollLeft ? r = this.__minDecelerationScrollLeft - e : e > this.__maxDecelerationScrollLeft && (r = this.__maxDecelerationScrollLeft - e), i < this.__minDecelerationScrollTop ? a = this.__minDecelerationScrollTop - i : i > this.__maxDecelerationScrollTop && (a = this.__maxDecelerationScrollTop - i), 0 !== r && (r * this.__decelerationVelocityX <= 0 ? this.__decelerationVelocityX += r * h : this.__decelerationVelocityX = r * l), 0 !== a && (a * this.__decelerationVelocityY <= 0 ? this.__decelerationVelocityY += a * h : this.__decelerationVelocityY = a * l)
                                    }
                                }
                            }, i
                        }) ? s.apply(e, n) : s) || (t.exports = o)
                    },
                    687: (t, e) => {
                        var i, s, n;
                        globalThis, s = [e], i = function(t) {
                            var e = "undefined" == typeof window ? this : window,
                                i = Date.now || function() {
                                    return +new Date
                                },
                                s = 60,
                                n = 1e3,
                                o = {},
                                r = 1;
                            t.requestAnimationFrame = function() {
                                var t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame,
                                    i = !!t;
                                if (t && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString()) && (i = !1), i) return function(e, i) {
                                    t(e, i)
                                };
                                var s = 60,
                                    n = {},
                                    o = 1,
                                    r = null,
                                    a = +new Date;
                                return function(t, e) {
                                    var i = o++;
                                    return n[i] = t, null === r && (r = setInterval((function() {
                                        var t = +new Date,
                                            e = n;
                                        for (var i in n = {}, e) e.hasOwnProperty(i) && (e[i](t), a = t);
                                        t - a > 2500 && (clearInterval(r), r = null)
                                    }), 1e3 / s)), i
                                }
                            }(), t.stop = function(t) {
                                var e = null !== o[t];
                                return e && (o[t] = null), e
                            }, t.isRunning = function(t) {
                                return null !== o[t]
                            }, t.start = function(e, a, h, l, c, d) {
                                var u = i(),
                                    g = u,
                                    p = 0,
                                    v = 0,
                                    m = r++;
                                if (m % 20 == 0) {
                                    var f = {};
                                    for (var w in o) f[w] = !0;
                                    o = f
                                }
                                var A = function(r) {
                                    var f = !0 !== r,
                                        w = i();
                                    if (!o[m] || a && !a(m)) return o[m] = null, void h(s - v / ((w - u) / n), m, !1);
                                    if (f)
                                        for (var b = Math.round((w - g) / (n / s)) - 1, y = 0; y < Math.min(b, 4); y++) A(!0), v++;
                                    l && (p = (w - u) / l) > 1 && (p = 1);
                                    var T = c ? c(p) : p;
                                    !1 !== e(T, w, f) && 1 !== p || !f ? f && (g = w, t.requestAnimationFrame(A, d)) : (o[m] = null, h(s - v / ((w - u) / n), m, 1 === p || void 0 === l))
                                };
                                return o[m] = !0, t.requestAnimationFrame(A, d), m
                            }
                        }, void 0 === (n = "function" == typeof i ? i.apply(e, s) : i) || (t.exports = n)
                    },
                    6: t => {
                        function e() {}
                        e.prototype = {
                            on: function(t, e, i) {
                                var s = this.e || (this.e = {});
                                return (s[t] || (s[t] = [])).push({
                                    fn: e,
                                    ctx: i
                                }), this
                            },
                            once: function(t, e, i) {
                                var s = this;

                                function n() {
                                    s.off(t, n), e.apply(i, arguments)
                                }
                                return n._ = e, this.on(t, n, i)
                            },
                            emit: function(t) {
                                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++) i[s].fn.apply(i[s].ctx, e);
                                return this
                            },
                            off: function(t, e) {
                                var i = this.e || (this.e = {}),
                                    s = i[t],
                                    n = [];
                                if (s && e)
                                    for (var o = 0, r = s.length; o < r; o++) s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
                                return n.length ? i[t] = n : delete i[t], this
                            }
                        }, t.exports = e, t.exports.TinyEmitter = e
                    },
                    469: t => {
                        t.exports = function(t) {
                            return t = (t = t.trim()).replace(/<!--[\s\S]*?-->/g, ""),
                                function() {
                                    return {
                                        declaration: e(),
                                        root: i()
                                    }
                                }();

                            function e() {
                                if (n(/^<\?xml\s*/)) {
                                    for (var t = {
                                            attributes: {}
                                        }; !o() && !r("?>");) {
                                        var e = s();
                                        if (!e) return t;
                                        t.attributes[e.name] = e.value
                                    }
                                    return n(/\?>\s*/), t
                                }
                            }

                            function i() {
                                var t = n(/^<([\w-:.]+)\s*/);
                                if (t) {
                                    for (var e, a = {
                                            name: t[1],
                                            attributes: {},
                                            children: []
                                        }; !(o() || r(">") || r("?>") || r("/>"));) {
                                        var h = s();
                                        if (!h) return a;
                                        a.attributes[h.name] = h.value
                                    }
                                    if (n(/^\s*\/>\s*/)) return a;
                                    for (n(/\??>\s*/), a.content = function() {
                                            var t = n(/^([^<]*)/);
                                            return t ? t[1] : ""
                                        }(); e = i();) a.children.push(e);
                                    return n(/^<\/[\w-:.]+>\s*/), a
                                }
                            }

                            function s() {
                                var t, e = n(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);
                                if (e) return {
                                    name: e[1],
                                    value: (t = e[2], t.replace(/^['"]|['"]$/g, ""))
                                }
                            }

                            function n(e) {
                                var i = t.match(e);
                                if (i) return t = t.slice(i[0].length), i
                            }

                            function o() {
                                return 0 == t.length
                            }

                            function r(e) {
                                return 0 == t.indexOf(e)
                            }
                        }
                    }
                },
                e = {};

            function o(i) {
                var s = e[i];
                if (void 0 !== s) return s.exports;
                var n = e[i] = {
                    exports: {}
                };
                return t[i](n, n.exports, o), n.exports
            }
            o.n = t => {
                var e = t && t.__esModule ? () => t.default : () => t;
                return o.d(e, {
                    a: e
                }), e
            }, o.d = (t, e) => {
                for (var i in e) o.o(e, i) && !o.o(t, i) && Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
            }, o.g = function() {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" == typeof window) return window
                }
            }(), o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
            var a = {};
            (() => {
                "use strict";
                o.d(a, {
                    default: () => Yi
                });
                var t, e = {
                        Linear: {
                            None: function(t) {
                                return t
                            }
                        },
                        Quadratic: {
                            In: function(t) {
                                return t * t
                            },
                            Out: function(t) {
                                return t * (2 - t)
                            },
                            InOut: function(t) {
                                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                            }
                        }
                    },
                    h = "undefined" == typeof self && "undefined" != typeof process && process.hrtime ? function() {
                        var t = process.hrtime();
                        return 1e3 * t[0] + t[1] / 1e6
                    } : "undefined" != typeof self && void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now.bind(self.performance) : void 0 !== Date.now ? Date.now : function() {
                        return (new Date).getTime()
                    },
                    l = function() {
                        function t() {
                            this._tweens = {}, this._tweensAddedDuringUpdate = {}
                        }
                        return t.prototype.getAll = function() {
                            var t = this;
                            return Object.keys(this._tweens).map((function(e) {
                                return t._tweens[e]
                            }))
                        }, t.prototype.removeAll = function() {
                            this._tweens = {}
                        }, t.prototype.add = function(t) {
                            this._tweens[t.getId()] = t, this._tweensAddedDuringUpdate[t.getId()] = t
                        }, t.prototype.remove = function(t) {
                            delete this._tweens[t.getId()], delete this._tweensAddedDuringUpdate[t.getId()]
                        }, t.prototype.update = function(t, e) {
                            void 0 === t && (t = h()), void 0 === e && (e = !1);
                            var i = Object.keys(this._tweens);
                            if (0 === i.length) return !1;
                            for (; i.length > 0;) {
                                this._tweensAddedDuringUpdate = {};
                                for (var s = 0; s < i.length; s++) {
                                    var n = this._tweens[i[s]],
                                        o = !e;
                                    n && !1 === n.update(t, o) && !e && delete this._tweens[i[s]]
                                }
                                i = Object.keys(this._tweensAddedDuringUpdate)
                            }
                            return !0
                        }, t
                    }(),
                    u = {
                        Linear: function(t, e) {
                            var i = t.length - 1,
                                s = i * e,
                                n = Math.floor(s),
                                o = u.Utils.Linear;
                            return e < 0 ? o(t[0], t[1], s) : e > 1 ? o(t[i], t[i - 1], i - s) : o(t[n], t[n + 1 > i ? i : n + 1], s - n)
                        },
                        Bezier: function(t, e) {
                            for (var i = 0, s = t.length - 1, n = Math.pow, o = u.Utils.Bernstein, r = 0; r <= s; r++) i += n(1 - e, s - r) * n(e, r) * t[r] * o(s, r);
                            return i
                        },
                        CatmullRom: function(t, e) {
                            var i = t.length - 1,
                                s = i * e,
                                n = Math.floor(s),
                                o = u.Utils.CatmullRom;
                            return t[0] === t[i] ? (e < 0 && (n = Math.floor(s = i * (1 + e))), o(t[(n - 1 + i) % i], t[n], t[(n + 1) % i], t[(n + 2) % i], s - n)) : e < 0 ? t[0] - (o(t[0], t[0], t[1], t[1], -s) - t[0]) : e > 1 ? t[i] - (o(t[i], t[i], t[i - 1], t[i - 1], s - i) - t[i]) : o(t[n ? n - 1 : 0], t[n], t[i < n + 1 ? i : n + 1], t[i < n + 2 ? i : n + 2], s - n)
                        },
                        Utils: {
                            Linear: function(t, e, i) {
                                return (e - t) * i + t
                            },
                            Bernstein: function(t, e) {
                                var i = u.Utils.Factorial;
                                return i(t) / i(e) / i(t - e)
                            },
                            Factorial: (t = [1], function(e) {
                                var i = 1;
                                if (t[e]) return t[e];
                                for (var s = e; s > 1; s--) i *= s;
                                return t[e] = i, i
                            }),
                            CatmullRom: function(t, e, i, s, n) {
                                var o = .5 * (i - t),
                                    r = .5 * (s - e),
                                    a = n * n;
                                return (2 * e - 2 * i + o + r) * (n * a) + (-3 * e + 3 * i - 2 * o - r) * a + o * n + e
                            }
                        }
                    },
                    g = function() {
                        function t() {}
                        return t.nextId = function() {
                            return t._nextId++
                        }, t._nextId = 0, t
                    }(),
                    p = new l,
                    v = function() {
                        function t(t, i) {
                            void 0 === i && (i = p), this._object = t, this._group = i, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = e.Linear.None, this._interpolationFunction = u.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._id = g.nextId(), this._isChainStopped = !1, this._goToEnd = !1
                        }
                        return t.prototype.getId = function() {
                            return this._id
                        }, t.prototype.isPlaying = function() {
                            return this._isPlaying
                        }, t.prototype.isPaused = function() {
                            return this._isPaused
                        }, t.prototype.to = function(t, e) {
                            return this._valuesEnd = Object.create(t), void 0 !== e && (this._duration = e), this
                        }, t.prototype.duration = function(t) {
                            return this._duration = t, this
                        }, t.prototype.start = function(t) {
                            if (this._isPlaying) return this;
                            if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed)
                                for (var e in this._reversed = !1, this._valuesStartRepeat) this._swapEndStartRepeatValues(e), this._valuesStart[e] = this._valuesStartRepeat[e];
                            return this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = void 0 !== t ? "string" == typeof t ? h() + parseFloat(t) : t : h(), this._startTime += this._delayTime, this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat), this
                        }, t.prototype._setupProperties = function(t, e, i, s) {
                            for (var n in i) {
                                var o = t[n],
                                    r = Array.isArray(o),
                                    a = r ? "array" : typeof o,
                                    h = !r && Array.isArray(i[n]);
                                if ("undefined" !== a && "function" !== a) {
                                    if (h) {
                                        var l = i[n];
                                        if (0 === l.length) continue;
                                        l = l.map(this._handleRelativeValue.bind(this, o)), i[n] = [o].concat(l)
                                    }
                                    if ("object" !== a && !r || !o || h) void 0 === e[n] && (e[n] = o), r || (e[n] *= 1), s[n] = h ? i[n].slice().reverse() : e[n] || 0;
                                    else {
                                        for (var c in e[n] = r ? [] : {}, o) e[n][c] = o[c];
                                        s[n] = r ? [] : {}, this._setupProperties(o, e[n], i[n], s[n])
                                    }
                                }
                            }
                        }, t.prototype.stop = function() {
                            return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this
                        }, t.prototype.end = function() {
                            return this._goToEnd = !0, this.update(1 / 0), this
                        }, t.prototype.pause = function(t) {
                            return void 0 === t && (t = h()), this._isPaused || !this._isPlaying || (this._isPaused = !0, this._pauseStart = t, this._group && this._group.remove(this)), this
                        }, t.prototype.resume = function(t) {
                            return void 0 === t && (t = h()), this._isPaused && this._isPlaying ? (this._isPaused = !1, this._startTime += t - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this) : this
                        }, t.prototype.stopChainedTweens = function() {
                            for (var t = 0, e = this._chainedTweens.length; t < e; t++) this._chainedTweens[t].stop();
                            return this
                        }, t.prototype.group = function(t) {
                            return this._group = t, this
                        }, t.prototype.delay = function(t) {
                            return this._delayTime = t, this
                        }, t.prototype.repeat = function(t) {
                            return this._initialRepeat = t, this._repeat = t, this
                        }, t.prototype.repeatDelay = function(t) {
                            return this._repeatDelayTime = t, this
                        }, t.prototype.yoyo = function(t) {
                            return this._yoyo = t, this
                        }, t.prototype.easing = function(t) {
                            return this._easingFunction = t, this
                        }, t.prototype.interpolation = function(t) {
                            return this._interpolationFunction = t, this
                        }, t.prototype.chain = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return this._chainedTweens = t, this
                        }, t.prototype.onStart = function(t) {
                            return this._onStartCallback = t, this
                        }, t.prototype.onUpdate = function(t) {
                            return this._onUpdateCallback = t, this
                        }, t.prototype.onRepeat = function(t) {
                            return this._onRepeatCallback = t, this
                        }, t.prototype.onComplete = function(t) {
                            return this._onCompleteCallback = t, this
                        }, t.prototype.onStop = function(t) {
                            return this._onStopCallback = t, this
                        }, t.prototype.update = function(t, e) {
                            if (void 0 === t && (t = h()), void 0 === e && (e = !0), this._isPaused) return !0;
                            var i, s, n = this._startTime + this._duration;
                            if (!this._goToEnd && !this._isPlaying) {
                                if (t > n) return !1;
                                e && this.start(t)
                            }
                            if (this._goToEnd = !1, t < this._startTime) return !0;
                            !1 === this._onStartCallbackFired && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), s = (t - this._startTime) / this._duration, s = 0 === this._duration || s > 1 ? 1 : s;
                            var o = this._easingFunction(s);
                            if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, o), this._onUpdateCallback && this._onUpdateCallback(this._object, s), 1 === s) {
                                if (this._repeat > 0) {
                                    for (i in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) this._yoyo || "string" != typeof this._valuesEnd[i] || (this._valuesStartRepeat[i] = this._valuesStartRepeat[i] + parseFloat(this._valuesEnd[i])), this._yoyo && this._swapEndStartRepeatValues(i), this._valuesStart[i] = this._valuesStartRepeat[i];
                                    return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime, this._onRepeatCallback && this._onRepeatCallback(this._object), !0
                                }
                                this._onCompleteCallback && this._onCompleteCallback(this._object);
                                for (var r = 0, a = this._chainedTweens.length; r < a; r++) this._chainedTweens[r].start(this._startTime + this._duration);
                                return this._isPlaying = !1, !1
                            }
                            return !0
                        }, t.prototype._updateProperties = function(t, e, i, s) {
                            for (var n in i)
                                if (void 0 !== e[n]) {
                                    var o = e[n] || 0,
                                        r = i[n],
                                        a = Array.isArray(t[n]),
                                        h = Array.isArray(r);
                                    !a && h ? t[n] = this._interpolationFunction(r, s) : "object" == typeof r && r ? this._updateProperties(t[n], o, r, s) : "number" == typeof(r = this._handleRelativeValue(o, r)) && (t[n] = o + (r - o) * s)
                                }
                        }, t.prototype._handleRelativeValue = function(t, e) {
                            return "string" != typeof e ? e : "+" === e.charAt(0) || "-" === e.charAt(0) ? t + parseFloat(e) : parseFloat(e)
                        }, t.prototype._swapEndStartRepeatValues = function(t) {
                            var e = this._valuesStartRepeat[t],
                                i = this._valuesEnd[t];
                            this._valuesStartRepeat[t] = "string" == typeof i ? this._valuesStartRepeat[t] + parseFloat(i) : this._valuesEnd[t], this._valuesEnd[t] = e
                        }, t
                    }(),
                    m = g.nextId,
                    f = p,
                    w = f.getAll.bind(f),
                    A = f.removeAll.bind(f),
                    b = f.add.bind(f),
                    y = f.remove.bind(f),
                    T = f.update.bind(f);
                const x = {
                    Easing: e,
                    Group: l,
                    Interpolation: u,
                    now: h,
                    Sequence: g,
                    nextId: m,
                    Tween: v,
                    VERSION: "18.6.4",
                    getAll: w,
                    removeAll: A,
                    add: b,
                    remove: y,
                    update: T
                };
                var S, P, C, D, M = o(6),
                    z = "…";

                function I() {}

                function k(t, e, i) {
                    return Math.max(e, Math.min(t, i))
                }

                function E(t, e) {
                    var i = Math.pow(10, e);
                    return Math.round(t * i) / i
                }

                function L(t, e) {
                    if ("string" != typeof t || "string" != typeof e) return "string" != typeof t && "string" != typeof e ? 0 : "string" != typeof t ? 1 : -1;
                    for (var i = t.split("."), s = e.split("."), n = Math.max(i.length, s.length); i.length < n;) i.push("0");
                    for (; s.length < n;) s.push("0");
                    for (var o = 0; o < n; o++) {
                        var r = parseInt(i[o], 10),
                            a = parseInt(s[o], 10);
                        if (r > a) return 1;
                        if (r < a) return -1
                    }
                    return 0
                }

                function R(t) {
                    return "number" == typeof t && isFinite(t)
                }

                function B(t) {
                    var e = t;
                    try {
                        "object" == typeof t && (e = "string" == typeof t.errMsg ? t.errMsg : "string" == typeof t.errmsg ? t.errmsg : "string" == typeof t.message ? t.message : JSON.stringify(t))
                    } catch (t) {
                        i.error(t)
                    }
                    return e
                }

                function H(t) {
                    return t.lastIndexOf(z) === t.length - 1 ? t : t + z
                }! function(t) {
                    t[t.Front = 1] = "Front", t[t.Background = 2] = "Background"
                }(S || (S = {})),
                function(t) {
                    t[t.Default = 0] = "Default", t[t.GameTransfer = 1] = "GameTransfer", t[t.Request = 2] = "Request", t[t.DownloadFile = 3] = "DownloadFile", t[t.CgiSpeedMeasure = 4] = "CgiSpeedMeasure", t[t.BadJs = 5] = "BadJs", t[t.Init = 6] = "Init", t[t.CostTime = 7] = "CostTime", t[t.Error = 8] = "Error", t[t.UploadFile = 9] = "UploadFile", t[t.Login = 10] = "Login"
                }(P || (P = {})),
                function(t) {
                    t[t.Info = 101] = "Info", t[t.Warn = 102] = "Warn", t[t.Error = 103] = "Error"
                }(C || (C = {})),
                function(t) {
                    t.GameTransferReport = "GameTransferReport", t.KeyValueReport = "KeyValueReport", t.WxRequestReport = "WxRequestReport"
                }(D || (D = {}));
                Object.values(P).filter((t => R(t)));
                class O extends M.TinyEmitter {
                    constructor() {
                        super(...arguments), this.innerTweenGroup = null, this.deviceScale = 1, this.devicePixelRatio = 1, this.innerDebug = !1
                    }
                    init(t) {
                        var e, {
                            pixiJs: s,
                            TWEEN: n,
                            designWidth: o,
                            gameWX: r,
                            scale: a = 1,
                            debug: h = !1
                        } = t;
                        this.innerPixi = s, this.innerTween = n, this.innerTweenGroup = new n.Group, this.gameWX = r, this.innerDebug = h, this.designWithSystemInfo({
                            designWidth: o,
                            scale: a
                        }), null === (e = r.onDeviceOrientationChange) || void 0 === e || e.call(r, (() => {
                            this.designWithSystemInfo({
                                designWidth: o,
                                scale: a
                            }), this.emit("onDeviceOrientationChange")
                        })), h && i.log("[minigamefe PixiCore]: Common inited")
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
                    designWithSystemInfo(t) {
                        var {
                            designWidth: e = 375,
                            scale: i = 1
                        } = t;
                        this.innerSystemInfo = this.gameWX.getSystemInfoSync();
                        var {
                            screenWidth: s,
                            screenHeight: n,
                            pixelRatio: o
                        } = this.innerSystemInfo, r = Math.min(s, n);
                        this.deviceScale = Math.min(1, r / e) * i, this.devicePixelRatio = Math.round(o * this.scale * 1e3) / 1e3
                    }
                }
                const V = new O;
                var X;
                ! function(t) {
                    t[t.Unknown = 0] = "Unknown", t[t.Buffer = 1] = "Buffer", t[t.Blob = 2] = "Blob", t[t.Json = 3] = "Json", t[t.Xml = 4] = "Xml", t[t.Image = 5] = "Image", t[t.Audio = 6] = "Audio", t[t.Video = 7] = "Video", t[t.Text = 8] = "Text"
                }(X || (X = {}));
                class Z extends M.TinyEmitter {
                    constructor() {
                        super(), this.resLoadTicker = null, this.resLoadRetryCount = 3;
                        var {
                            PIXI: t
                        } = V;
                        this.loader = new t.Loader, V.debug && i.log("[minigamefe PixiCore]: LoaderManager constructor")
                    }
                    load(t) {
                        if (this.resLoadTicker) return Promise.reject({
                            errMsg: "正在加载中"
                        });
                        var {
                            timeout: e = 1e4,
                            list: s,
                            mainTextureName: n,
                            bindingScreen: o = 0
                        } = t;
                        return s.forEach((t => {
                            var i, {
                                name: s,
                                url: n
                            } = t;
                            null === (i = this.loader) || void 0 === i || i.add({
                                name: s,
                                url: n,
                                bindingScreen: o,
                                timeout: e
                            })
                        })), V.debug && i.log("[minigamefe PixiCore]: loadResources start"), new Promise(((o, r) => {
                            var a, h = t => {
                                s.forEach((e => {
                                    this.loadError(t, e.name || e.url)
                                })), o({
                                    resources: t
                                })
                            };
                            null === (a = this.loader) || void 0 === a || a.load((() => {
                                if (this.loader) {
                                    var {
                                        resources: t
                                    } = this.loader;
                                    V.debug && i.log("[minigamefe PixiCore]: loadResources success:", t), this.clearLoadTicker(), n ? this.checkMainRes(t, n) ? h(t) : r({
                                        errMsg: `关键资源${n}加载失败`,
                                        resources: t
                                    }) : h(t)
                                }
                            })), this.resLoadTicker = setTimeout((() => {
                                if (this.loader) {
                                    var {
                                        resources: e
                                    } = this.loader;
                                    if (this.clearLoadTicker(), this.emit("info", e), n && this.checkMainRes(e, n)) h(e);
                                    else {
                                        var i = `resources load error，资源加载超时 retryCount:${this.resLoadRetryCount}`;
                                        this.emit("info", i), this.resLoadRetryCount -= 1, this.resLoadRetryCount > 0 ? this.load(t).then((t => {
                                            o({
                                                resources: t.resources
                                            })
                                        })).catch((t => {
                                            r({
                                                errMsg: "资源加载失败",
                                                resources: t.resources
                                            })
                                        })) : r({
                                            errMsg: "资源加载失败，请求超时"
                                        })
                                    }
                                }
                            }), e)
                        }))
                    }
                    clearLoadTicker() {
                        var t;
                        this.resLoadTicker && (null === (t = this.loader) || void 0 === t || t.reset(), clearTimeout(this.resLoadTicker), this.resLoadTicker = null)
                    }
                    destroy() {
                        var t;
                        null === (t = this.loader) || void 0 === t || t.destroy(), delete this.loader
                    }
                    checkMainRes(t, e) {
                        return !(!t[e] || t[e].error || !t[e].textures || !t[`${e}_image`])
                    }
                    loadError(t, e) {
                        var i = "";
                        t[e] ? (t[e].error && (i = `resources load error, ${e}:${t[e].error}`), t[e].type !== X.Json && t[e].type !== X.Text || (t[e].children.length < 1 ? i = `resources load error, ${e}_image: 子资源加载失败` : this.loadError(t, t[e].children[0].name || t[e].children[0].url))) : i = `resources load error, ${e}: 资源加载失败`, i && this.emit("error", i)
                    }
                }
                class U extends M.TinyEmitter {
                    constructor(t) {
                        super(), this.canvas = null, this.isNormalCanvas = !1, this.realX = 0, this.realY = 0, this.realWidth = 0, this.realHeight = 0, this.realZIndex = "1", this.pixelRatio = 1, this.scale = 1;
                        var {
                            createScreenCanvas: e,
                            pixelRatio: i = 1,
                            scale: s = 1,
                            isNormalCanvas: n = !1
                        } = t;
                        this.pixelRatio = i, this.scale = s, this.canvas = e(), this.canvas.getBoundingClientRect = () => ({
                            x: this.x,
                            y: this.y,
                            left: this.x,
                            top: this.y,
                            width: this.width,
                            height: this.height,
                            bottom: 0,
                            right: 0,
                            toJSON: I
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
                    set x(t) {
                        var e = Math.round(1e3 * t) / 1e3;
                        this.realX = e, this.changeStyle("left", `${e}px`)
                    }
                    get x() {
                        return this.realX
                    }
                    set y(t) {
                        var e = Math.round(1e3 * t) / 1e3;
                        this.realY = e, this.changeStyle("top", `${e}px`)
                    }
                    get y() {
                        return this.realY
                    }
                    set width(t) {
                        this.realWidth = t * this.scale, this.canvas && (this.canvas.width = this.realWidth * this.pixelRatio, this.changeStyle("width", `${this.realWidth}px`))
                    }
                    get width() {
                        return this.realWidth
                    }
                    get renderWidth() {
                        return this.width / this.scale * this.pixelRatio
                    }
                    set height(t) {
                        this.realHeight = t * this.scale, this.canvas && (this.canvas.height = this.realHeight * this.pixelRatio, this.changeStyle("height", `${this.realHeight}px`))
                    }
                    get height() {
                        return this.realHeight
                    }
                    get renderHeight() {
                        return this.height / this.scale * this.pixelRatio
                    }
                    set zIndex(t) {
                        this.realZIndex = t, this.changeStyle("zIndex", t)
                    }
                    get zIndex() {
                        return this.realZIndex
                    }
                    set bindingScreen(t) {
                        this.canvas && (this.canvas.bindingScreen = t)
                    }
                    get bindingScreen() {
                        var t, e;
                        return null !== (e = null === (t = this.canvas) || void 0 === t ? void 0 : t.bindingScreen) && void 0 !== e ? e : 0
                    }
                    remove() {
                        var t, e;
                        null === (e = null === (t = this.canvas) || void 0 === t ? void 0 : t.remove) || void 0 === e || e.call(t), this.canvas = null
                    }
                    changeStyle(t, e) {
                        this.canvas && this.canvas.style && (this.canvas.style[t] = e, this.emit("changed"))
                    }
                }
                class N extends M.TinyEmitter {
                    constructor(t) {
                        super(), this.histroyPosList = [], this.hideData = {
                            isHide: !1,
                            x: 0,
                            y: 0
                        }, this.screenCanvas = t
                    }
                    get isHide() {
                        return this.hideData.isHide
                    }
                    set(t) {
                        var {
                            x: e,
                            y: s
                        } = t;
                        V.debug && i.log("[minigamefe PixiCore]: Set Canvas Position", e, s), R(e) && (e = E(e, 1)), R(s) && (s = E(s, 1)), E(this.screenCanvas.x, 1) === e && E(this.screenCanvas.y, 1) === s || (this.histroyPosList.push({
                            x: this.screenCanvas.x,
                            y: this.screenCanvas.y
                        }), this.histroyPosList.length > 10 && this.histroyPosList.shift(), this.hideData.isHide ? (R(e) && (this.hideData.x = e), R(s) && (this.hideData.y = s)) : (R(e) && (this.screenCanvas.x = e), R(s) && (this.screenCanvas.y = s), this.emit("moved")))
                    }
                    back() {
                        var t = this.histroyPosList.pop();
                        t && this.set(t)
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
                    show(t) {
                        if (t && R(t.x) && R(t.y) && (this.hideData.x = t.x, this.hideData.y = t.y, this.hideData.isHide = !0), this.hideData.isHide) {
                            var {
                                x: e,
                                y: i
                            } = this.hideData;
                            this.hideData.isHide = !1, R(e) && (this.screenCanvas.x = e), R(i) && (this.screenCanvas.y = i), this.emit("moved")
                        }
                    }
                }
                class G extends M.TinyEmitter {
                    constructor(t) {
                        super();
                        var {
                            createScreenCanvas: e,
                            createCanvas: s
                        } = t;
                        this.createScreenCanvas = e, this.createCanvas = s, V.debug && i.log("[minigamefe PixiCore]: CanvasManager constructor")
                    }
                    init(t = !0) {
                        if (this.canvas) return this.canvas;
                        try {
                            this.canvas = new U({
                                createScreenCanvas: t ? this.createScreenCanvas : this.createCanvas,
                                pixelRatio: V.dpr,
                                scale: V.scale,
                                isNormalCanvas: !t
                            }), t || this.canvas.on("changed", (() => {
                                this.emit("render")
                            })), this.canvas.x = 0, this.canvas.y = 0, this.canvas.width = 1, this.canvas.height = 1, this.canvas.zIndex = "1", this.position = new N(this.canvas), this.position.on("moved", (() => {
                                this.emit("moved")
                            })), this.emit("info", "ScreenCanvas init success")
                        } catch (t) {
                            var e = `ScreenCanvas init error:${B(t)}`;
                            this.emit("error", e)
                        }
                        return this.canvas
                    }
                    get screenCanvas() {
                        return this.canvas
                    }
                    get bindingScreen() {
                        return this.canvas ? this.canvas.isNormalCanvas ? 0 : this.canvas.bindingScreen : (V.debug && i.warn("[minigamefe PixiCore]: 无法获取bindingScreen，尚未创建ScreenCanvas"), 0)
                    }
                    set zIndex(t) {
                        this.canvas && (this.canvas.zIndex = t)
                    }
                    resize(t) {
                        var {
                            width: e,
                            height: s,
                            resetTouchArea: n = !1
                        } = t;
                        V.debug && i.log("[minigamefe PixiCore]: changeCanvasSize", e, s), this.canvas && (void 0 !== e && (this.canvas.width = e), void 0 !== s && (this.canvas.height = s), this.emit("resize", {
                            width: this.canvas.renderWidth,
                            height: this.canvas.renderHeight,
                            resetTouchArea: n
                        }), this.emit("render"))
                    }
                    hide() {
                        var t;
                        null === (t = this.position) || void 0 === t || t.hide()
                    }
                    show(t) {
                        var e;
                        null === (e = this.position) || void 0 === e || e.show(t)
                    }
                    destroy() {
                        this.canvas && (this.canvas.remove(), this.canvas = void 0)
                    }
                }
                class q extends M.TinyEmitter {
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
                    init(t) {
                        var {
                            bindingScreen: e,
                            defaultTextStyle: s,
                            defaultTextureName: n,
                            defaultTextureKey: o
                        } = t;
                        this.bindingScreen = e, this.initDesign(s), this.defaultTextureName = n, this.defaultTextureKey = o, V.debug && i.log("[minigamefe PixiCore]: DisplayManager inited")
                    }
                    createTextures(t) {
                        var {
                            name: e,
                            imageData: i,
                            jsonData: s
                        } = t;
                        return new Promise(((t, n) => {
                            if (!i || i.indexOf("data:image") < 0 || !s) n();
                            else {
                                var {
                                    PIXI: o
                                } = V, r = new o.Spritesheet(o.BaseTexture.from(i), s);
                                r.parse((() => {
                                    this.addTextures({
                                        [e || this.defaultTextureName || ""]: r
                                    }), t(r)
                                }))
                            }
                        }))
                    }
                    addTextures(t) {
                        Object.assign(this.textures, t)
                    }
                    getTexture(t = this.defaultTextureKey, e = this.defaultTextureName) {
                        var s, n, o;
                        return e && t ? (this.textures && this.textures[e] && this.textures[e].textures || V.debug && i.error("[minigamefe PixiCore]: 请先加载对应的纹理资源！", t, e), null !== (o = null === (n = null === (s = this.textures) || void 0 === s ? void 0 : s[e].textures) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : PIXI.Texture.EMPTY) : (V.debug && i.error("[minigamefe PixiCore]: 请先设置通用纹理"), PIXI.Texture.EMPTY)
                    }
                    createContainer(t) {
                        var {
                            PIXI: e
                        } = V, {
                            x: i,
                            y: s,
                            isButton: n = !1
                        } = t || {}, o = new e.Container;
                        return n && this.isButton(o), this.setNodeData({
                            node: o,
                            x: i,
                            y: s
                        }), o
                    }
                    createSprite(t) {
                        var {
                            PIXI: e
                        } = V, {
                            key: i = this.defaultTextureKey,
                            name: s = this.defaultTextureName,
                            isButton: n = !1,
                            x: o,
                            y: r,
                            width: a,
                            height: h
                        } = t || {}, l = new e.Sprite(this.getTexture(i, s));
                        return n && this.isButton(l), this.setNodeData({
                            node: l,
                            x: o,
                            y: r,
                            width: a,
                            height: h
                        }), l
                    }
                    createSpriteFrom(t) {
                        var {
                            PIXI: e
                        } = V, {
                            bindingScreen: i
                        } = this, {
                            url: s = e.Texture.EMPTY,
                            isButton: n = !1,
                            x: o,
                            y: r,
                            width: a,
                            height: h
                        } = t, l = s;
                        "string" == typeof s && (l = this.createTextureFrom({
                            url: s
                        }));
                        var c = e.Sprite.from(l, {
                            bindingScreen: i
                        });
                        return n && this.isButton(c), this.setNodeData({
                            node: c,
                            x: o,
                            y: r,
                            width: a,
                            height: h
                        }), c
                    }
                    createTexture(t) {
                        var {
                            PIXI: e
                        } = V, {
                            bindingScreen: i
                        } = this, {
                            url: s
                        } = t;
                        if (!s) return this.getTexture();
                        var n = new e.Texture(new e.BaseTexture(s, {
                            bindingScreen: i
                        }));
                        return n.once("update", (() => {
                            this.emit("render")
                        })), this.cacheTextures.push(n), n
                    }
                    createTextureFrom(t) {
                        var {
                            PIXI: e
                        } = V, {
                            bindingScreen: i
                        } = this, {
                            url: s
                        } = t;
                        if (!s) return this.getTexture();
                        var n = e.Texture.from(s, {
                            bindingScreen: i
                        });
                        return n.once("update", (() => {
                            this.emit("render")
                        })), this.cacheTextures.push(n), n
                    }
                    createGraphics() {
                        V.debug && i.warn("[minigamefe PixiCore]: 如非必需请不要使用Graphics，会增加drawcall");
                        var {
                            PIXI: t
                        } = V, {
                            bindingScreen: e
                        } = this;
                        return new t.Graphics(null, {
                            bindingScreen: e
                        })
                    }
                    createBitmapText(t) {
                        var e, i, {
                                PIXI: s
                            } = V,
                            {
                                textString: n = "",
                                textStyle: o,
                                anchor: r = new s.Point(0, .5),
                                isButton: a = !1,
                                x: h,
                                y: l,
                                width: c,
                                height: d
                            } = t || {},
                            u = this.defaultFontSize;
                        return o ? (e = Object.assign({}, this.defaultTextStyle, o), u = +(o.fontSize || this.defaultFontSize)) : e = this.defaultTextStyle, s.BitmapText && s.BitmapFont && e && e.fontName && s.BitmapFont.available[e.fontName] ? (i = new s.BitmapText(n, Object.assign({}, e, {
                            fontSize: u
                        })), r && (i.anchor = r), a && this.isButton(i), this.setNodeData({
                            node: i,
                            x: h,
                            y: l,
                            width: c,
                            height: d
                        })) : i = this.createText({
                            textString: n,
                            textStyle: e,
                            anchor: r,
                            isButton: a,
                            x: h,
                            y: l,
                            width: c,
                            height: d
                        }), i
                    }
                    createText(t) {
                        var e, {
                                PIXI: i
                            } = V,
                            {
                                textString: s = "",
                                textStyle: n,
                                anchor: o = new i.Point(0, 0),
                                isButton: r = !1,
                                x: a,
                                y: h,
                                width: l,
                                height: c
                            } = t || {},
                            d = this.defaultFontSize,
                            u = this.defaultLineHeight;
                        n ? (e = Object.assign({}, this.defaultTextStyle, n), d = +(n.fontSize || this.defaultFontSize), u = +(n.lineHeight || this.defaultLineHeight)) : e = this.defaultTextStyle, e.wordWrapWidth && (e.wordWrapWidth /= d / this.maxFontSize);
                        var g = new i.Text(s, Object.assign({}, e, {
                            fontSize: this.maxFontSize,
                            lineHeight: this.maxLineHeight * (u / this.defaultLineHeight)
                        }), this.bindingScreen);
                        return g.scale.set(d / this.maxFontSize), o && (g.anchor = o), r && this.isButton(g), this.setNodeData({
                            node: g,
                            x: a,
                            y: h,
                            width: l,
                            height: c
                        }), this.cachePixiTexts.push(g), g
                    }
                    setHitArea(t, e, s, n = !1) {
                        var {
                            PIXI: o,
                            dpr: r
                        } = V, {
                            x: a = 0,
                            y: h = 0,
                            width: l,
                            height: c
                        } = e, d = s || this.defaultTextureKey;
                        if (d) {
                            var u = 1 / t.scale.x,
                                g = this.createSprite({
                                    key: d,
                                    x: a * u,
                                    y: h * u,
                                    width: l * u,
                                    height: c * u
                                });
                            n ? (g.tint = 16711680, g.alpha = .3) : g.alpha = 0, t.addChild(g)
                        } else V.debug && i.warn("[minigamefe PixiCore]: hitArea在x和y使用负数时有bug，建议传key或者设置默认精灵key"), t.hitArea = new o.Rectangle(a * r, h * r, l * r, c * r)
                    }
                    renderLabel(t) {
                        var e, i, s, {
                                PIXI: n
                            } = V,
                            {
                                textString: o = "",
                                textStyle: r = this.defaultTextStyle,
                                padding: a,
                                backgroundColor: h,
                                backgroundRadius: l,
                                getLabelContainer: c
                            } = t,
                            d = !c;
                        return c ? (e = (s = c).children[0], i = s.children[1]) : (s = new n.Container, e = this.createGraphics(), i = this.createText({
                            textString: o,
                            textStyle: r
                        })), i.text = o, i.position.set(a.left || 0, a.top || 0), e.clear(), e.beginFill(h.fill, h.alpha), e.drawRoundedRect(0, 0, i.width + (a.left || 0) + (a.right || 0), i.height + (a.top || 0) + (a.bottom || 0), l), e.endFill(), d && s && s.addChild(e, i), {
                            labelContainer: s,
                            labelBackground: e,
                            labelText: i
                        }
                    }
                    createTextStyle(t) {
                        var {
                            PIXI: e
                        } = V;
                        return new e.TextStyle(t)
                    }
                    getTextScale(t = this.defaultFontSize) {
                        return t / this.maxFontSize
                    }
                    isButton(t) {
                        t.interactive = !0, t.on("pointerup", (() => {
                            t.alpha = 1, this.emit("render")
                        })), t.on("pointerdown", (() => {
                            t.alpha = .5, this.emit("render")
                        })), t.on("pointerupoutside", (() => {
                            t.alpha = 1, this.emit("render")
                        })), t.on("pointercancel", (() => {
                            t.alpha = 1, this.emit("render")
                        }))
                    }
                    removeButton(t) {
                        t.interactive = !1, t.removeAllListeners("pointerup"), t.removeAllListeners("pointerdown"), t.removeAllListeners("pointerupoutside"), t.removeAllListeners("pointertap"), t.removeAllListeners("pointercancel")
                    }
                    get commonTextStyle() {
                        return this.defaultTextStyle
                    }
                    destroy() {
                        for (var t of Object.values(this.textures)) t.spritesheet && t.spritesheet.destroy(!0);
                        for (var e of this.cacheTextures) e.destroy(!0);
                        for (var i of this.cachePixiTexts) i.canvas && i.destroy({
                            children: !0,
                            texture: !0,
                            baseTexture: !0
                        });
                        this.cacheTextures = [], this.cachePixiTexts = [], this.textures = {}, this.defaultTextureName = "", this.defaultTextureKey = ""
                    }
                    setNodeData(t) {
                        var {
                            node: e,
                            width: i,
                            height: s,
                            x: n = 0,
                            y: o = 0
                        } = t || {};
                        R(i) && (e.width = i), R(s) && (e.height = s), R(n) && R(o) && e.position.set(n, o)
                    }
                    initDesign(t) {
                        t && (Object.assign(this.defaultTextStyle, t), this.defaultFontSize = +(t.fontSize || 12), this.defaultLineHeight = +(t.lineHeight || 17), this.maxFontSize = 50, this.maxLineHeight = 50 / this.defaultFontSize * this.defaultLineHeight)
                    }
                }
                class W extends M.TinyEmitter {
                    constructor() {
                        super(), this.needRender = !1, this.ticker = null, this.autoRender = !1, V.debug && i.log("[minigamefe PixiCore]: RendererManager constructor")
                    }
                    init(t, e = !1, i = !1) {
                        var {
                            PIXI: s
                        } = V;
                        return this.renderer = new s.Renderer({
                            view: t.canvas,
                            antialias: !1,
                            transparent: !e,
                            width: t.renderWidth,
                            height: t.renderWidth,
                            clearBeforeRender: !1,
                            preserveDrawingBuffer: !0
                        }), this.innerStage = new s.Container, this.innerStage.scale.set(V.dpr), this.autoRender = i, this.renderer.on("postrender", (() => {
                            requestAnimationFrame((() => {
                                this.emit("postrender")
                            }))
                        })), this.ticker = new s.Ticker, this.ticker.add(this.render.bind(this)), this.ticker.start(), this.emit("info", "Renderer init success"), this.renderer
                    }
                    update() {
                        this.needRender = !0
                    }
                    resize(t, e) {
                        var i;
                        null === (i = this.renderer) || void 0 === i || i.resize(t, e)
                    }
                    get stage() {
                        return this.innerStage
                    }
                    destroy() {
                        this.ticker && (this.ticker.remove(this.render.bind(this)), this.ticker.destroy(), this.ticker = null), this.innerStage && (this.innerStage.destroy(), this.innerStage = void 0), this.renderer && (this.renderer.destroy(), this.renderer = void 0)
                    }
                    render() {
                        var t;
                        null === (t = V.tweenGroup) || void 0 === t || t.update(), (this.autoRender || this.needRender) && (this.needRender = !1, this.renderer && this.renderer.render(this.stage, void 0, !0))
                    }
                }
                var Y, j, F, Q, J, K, _, $ = "pixi_error",
                    tt = () => Y;

                function et(t, e, i) {
                    return !!t.find((t => e >= t.left && e <= t.left + t.width && i >= t.top && i <= t.top + t.height))
                }! function(t) {
                    t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical", t[t.Left = 3] = "Left", t[t.Right = 4] = "Right", t[t.Top = 5] = "Top", t[t.Bottom = 6] = "Bottom", t[t.All = 7] = "All"
                }(j || (j = {})),
                function(t) {
                    t.devtools = "devtools", t.android = "android", t.ios = "ios", t.windows = "windows", t.mac = "mac"
                }(F || (F = {})),
                function(t) {
                    t.portrait = "portrait", t.landscape = "landscape", t.landscapeLeft = "landscapeLeft", t.landscapeRight = "landscapeRight"
                }(Q || (Q = {})),
                function(t) {
                    t.DEVELOP = "develop", t.TRIAL = "trial", t.RELEASE = "release"
                }(J || (J = {})),
                function(t) {
                    t[t.release = 1] = "release", t[t.develop = 2] = "develop", t[t.trial = 3] = "trial"
                }(K || (K = {})),
                function(t) {
                    t[t.Android = 0] = "Android", t[t.IOSJscore = 1] = "IOSJscore", t[t.IOSWK = 2] = "IOSWK", t[t.UnKnow = 3] = "UnKnow", t[t.PC = 4] = "PC", t[t.Devtools = 5] = "Devtools", t[t.IPadJscore = 6] = "IPadJscore", t[t.IPadWK = 7] = "IPadWK"
                }(_ || (_ = {}));
                var it = null;

                function st(t = !1, e) {
                    if (t && it) return it;
                    var {
                        safeArea: i
                    } = e, {
                        deviceOrientation: s,
                        screenWidth: n,
                        screenHeight: o
                    } = e;
                    i || (i = {
                        top: 0,
                        left: 0,
                        right: n,
                        bottom: o,
                        width: n,
                        height: o
                    });
                    var {
                        left: r,
                        top: a,
                        right: h,
                        bottom: l,
                        width: c,
                        height: d
                    } = i;
                    return n > o && (s === Q.portrait || c < d ? (r = i.top, a = i.left, h = i.bottom, l = i.right, c = i.height, d = i.width) : c === o && c > d && (a = 0, r = 0, h = n, l = o, c = n, d = o)), it = {
                        left: r,
                        top: a,
                        right: h,
                        bottom: l,
                        width: c,
                        height: d
                    }
                }
                class nt {
                    constructor(t) {
                        this.target = null, this.currentTarget = [], this.touches = [], this.targetTouches = [], this.changedTouches = [], this.timeStamp = 0, this.buttons = 0, this.clientX = 0, this.clientY = 0, this.offsetX = 0, this.offsetY = 0, this.pageX = 0, this.pageY = 0, this.screenX = 0, this.screenY = 0, this.type = t
                    }
                    preventDefault() {}
                    stopPropagation() {}
                }

                function ot(t, e) {
                    var i = new nt("touch"),
                        s = e.touches,
                        n = e.changedTouches;
                    return e.target && (s = Object.values(e.touches), n = Object.values(e.changedTouches)), i.touches = s, i.targetTouches = Array.prototype.slice.call(s), i.changedTouches = n, i.timeStamp = e.timeStamp, i.target = t, i
                }
                class rt extends M.TinyEmitter {
                    constructor(t) {
                        super(), this.disabled = !1, this.dragArea = [], this.padding = 8, this.preventArea = [], this.enableDrag = !0, this.enableSnap = j.Horizontal, this.isDraged = !1, this.isMouseDown = !1, this.isNormalCanvas = !1, this.isPC = V.systemInfo.platform === F.windows || V.systemInfo.platform === F.mac, this.tweenGroup = V.tweenGroup, this.innerTween = V.TWEEN, this.borderAreaChanged = !1, this.destroyed = !1, this.dragParams = {
                            identifier: 0,
                            flag: !1,
                            pageX: 0,
                            pageY: 0,
                            startX: 0,
                            startY: 0
                        }, this.pcListener = {}, this.setBorderArea = t => {
                            this.outDragArea = t, this.borderAreaChanged = !0, this.resize()
                        }, this.setTouchArea = t => {
                            this.dragArea = t, this.preventArea = t
                        }, this.canvas = t, this.screenCanvas = t.screenCanvas, this.outDragArea = st(!1, V.systemInfo), this.isNormalCanvas = "devtools" === V.systemInfo.platform || t.screenCanvas.isNormalCanvas, V.on("onDeviceOrientationChange", (() => {
                            this.borderAreaChanged || (this.outDragArea = st(!1, V.systemInfo), this.resize())
                        })), this.canvas.on("moved", (() => {
                            this.emit("render"), this.snap(!0)
                        }))
                    }
                    set canDrag(t) {
                        this.enableDrag = t
                    }
                    set snapType(t) {
                        this.enableSnap = t
                    }
                    resize() {
                        this.canvas.position.isHide || (this.canvas.position.set({
                            x: k(this.screenCanvas.x, this.minDragX, this.maxDragX),
                            y: k(this.screenCanvas.y, this.minDragY, this.maxDragY)
                        }), this.emit("render"), this.snap(!0))
                    }
                    inDragArea(t, e) {
                        return !!this.enableDrag && (0 !== this.dragArea.length && et(this.dragArea, t, e))
                    }
                    inPreventArea(t, e) {
                        return 0 !== this.preventArea.length && et(this.preventArea, t, e)
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
                    bindScreenCanvasEventDispatch(t) {
                        var {
                            dragParams: e,
                            screenCanvas: s
                        } = this, n = n => {
                            var o, r;
                            if (V.debug && i.log("touchStartHandler, event:", n), this.destroyed) return !0;
                            if (this.isPC && "mousedown" === n.type) {
                                if (0 === n.buttons) return !1;
                                this.isMouseDown = !0;
                                var a = {
                                    identifier: 0,
                                    clientX: n.clientX,
                                    clientY: n.clientY,
                                    pageX: n.pageX,
                                    pageY: n.pageY,
                                    offsetX: n.offsetX,
                                    offsetY: n.offsetY,
                                    force: 1,
                                    screenX: n.screenX,
                                    screenY: n.screenY
                                };
                                n.touches = [a], n.changedTouches = [a]
                            }
                            var h = n.changedTouches[0] || n.touches[0],
                                {
                                    pageX: l,
                                    pageY: c
                                } = h,
                                {
                                    offsetX: d,
                                    offsetY: u
                                } = h;
                            (this.isNormalCanvas || this.isPC) && (d = l - s.x, u = c - s.y);
                            var g = this.inPreventArea(d, u);
                            return g ? this.disabled ? (V.debug && i.log("touchStartHandler disabled"), null === (o = null == t ? void 0 : t.start) || void 0 === o || o.call(t, {
                                event: n,
                                isPrevent: g,
                                isDraging: e.flag
                            }), this.emit("render"), !g) : (this.inDragArea(d, u) && (V.debug && i.log("touchStartHandler need drag"), e.identifier = h.identifier, e.flag = !0, e.pageX = l, e.pageY = c, e.startX = l, e.startY = c), this.isDraged = !1, V.debug && i.log("touchStartHandler pixi touchstart"), null === (r = null == t ? void 0 : t.start) || void 0 === r || r.call(t, {
                                event: n,
                                isPrevent: g,
                                isDraging: e.flag
                            }), this.emit("render"), !g) : (V.debug && i.log("touchStartHandler isPrevent"), !0)
                        }, o = n => {
                            var o, r;
                            if (V.debug && i.log("touchMoveHandler, event:", n), this.destroyed) return !0;
                            if (this.isPC && !this.isMouseDown) return !1;
                            var a = n.changedTouches[0] || n.touches[0],
                                {
                                    pageX: h,
                                    pageY: l
                                } = a,
                                {
                                    offsetX: c,
                                    offsetY: d
                                } = a;
                            (this.isNormalCanvas || this.isPC) && (c = h - s.x, d = l - s.y);
                            var u = this.inPreventArea(c, d);
                            if (this.disabled) return null === (o = null == t ? void 0 : t.move) || void 0 === o || o.call(t, {
                                event: n,
                                isPrevent: u
                            }), this.emit("render"), !u;
                            if (e.flag && e.identifier === a.identifier) {
                                var g = h - e.pageX,
                                    p = l - e.pageY,
                                    v = s.x + g,
                                    m = s.y + p;
                                v = k(v, this.minDragX, this.maxDragX), m = k(m, this.minDragY, this.maxDragY), s.x = v, s.y = m, e.pageX = h, e.pageY = l;
                                var f = Math.abs(h - e.startX),
                                    w = Math.abs(l - e.startY);
                                (f > .5 || w > .5) && (this.isDraged = !0, this.emit("dragStart"))
                            } else null === (r = null == t ? void 0 : t.move) || void 0 === r || r.call(t, {
                                event: n,
                                isPrevent: u
                            }), this.emit("render");
                            return !u
                        }, r = n => {
                            var o, r;
                            if (V.debug && i.log("touchEndHandler, event:", n), this.destroyed) return !0;
                            if (this.isPC) {
                                if (!this.isMouseDown) return !1;
                                this.isMouseDown = !1
                            }
                            var a = n.changedTouches[0] || n.touches[0],
                                {
                                    pageX: h,
                                    pageY: l
                                } = a,
                                {
                                    offsetX: c,
                                    offsetY: d
                                } = a;
                            (this.isNormalCanvas || this.isPC) && (c = h - s.x, d = l - s.y), this.isDraged && this.snap();
                            var u = this.inPreventArea(c, d);
                            if (this.disabled) return null === (o = null == t ? void 0 : t.end) || void 0 === o || o.call(t, {
                                event: n,
                                isPrevent: u,
                                isDraged: this.isDraged
                            }), this.emit("render"), this.isDraged = !1, e.flag = !1, !u;
                            if (e.flag) {
                                if (e.identifier !== a.identifier) return !u;
                                e.flag = !1, this.emit("dragEnd"), this.emit("render")
                            }
                            return null === (r = null == t ? void 0 : t.end) || void 0 === r || r.call(t, {
                                event: n,
                                isPrevent: u,
                                isDraged: this.isDraged
                            }), this.emit("render"), this.isDraged = !1, !u
                        };
                        if (s.canvas) {
                            if (s.isNormalCanvas) return {
                                touchStartHandler: n,
                                touchMoveHandler: o,
                                touchEndHandler: r
                            };
                            if (this.isNormalCanvas) s.canvas.addEventListener("touchstart", n), s.canvas.addEventListener("touchmove", o), s.canvas.addEventListener("touchend", r), s.canvas.addEventListener("touchcancel", r);
                            else if (this.isPC) {
                                s.canvas.addEventListener("mousedown", (t => ("function" == typeof transformNativeEvent && (t = transformNativeEvent(t)), V.debug && i.log("mousedown touchInfo:", t), n(t))));
                                var {
                                    onTouchMove: a,
                                    onTouchEnd: h,
                                    onTouchCancel: l
                                } = V.wx, c = t => e => {
                                    var {
                                        touches: i,
                                        changedTouches: s
                                    } = e, n = new nt("mouse");
                                    n.touches = i, n.changedTouches = s, t && t(n)
                                };
                                this.pcListener.moveListener = c(o), this.pcListener.endListener = c(r), this.pcListener.cancelListener = c(r), V.debug && (void 0 === a && i.error("缺少wx.onTouchMove"), void 0 === h && i.error("缺少wx.onTouchEnd"), void 0 === l && i.error("缺少wx.onTouchCancel")), null == a || a(this.pcListener.moveListener), null == h || h(this.pcListener.endListener), null == l || l(this.pcListener.cancelListener)
                            } else s.canvas.ontouchstart = n, s.canvas.ontouchmove = o, s.canvas.ontouchend = r, s.canvas.ontouchcancel = r
                        }
                    }
                    snap(t = !1) {
                        if (V.debug && i.log("snap", this.enableSnap === j.None, this.disabled), this.enableSnap !== j.None && !this.disabled) {
                            var e, {
                                    screenCanvas: s
                                } = this,
                                n = 0,
                                o = "x",
                                r = this.getSnapDirection();
                            r === j.Right ? n = this.maxDragX : r === j.Left ? n = this.minDragX : r === j.Top ? (o = "y", n = this.minDragY) : r === j.Bottom && (o = "y", n = this.maxDragY), e = Math.round(2 * Math.abs(n - s[o])), this.emit("snapStart", r);
                            var a = () => {
                                s[o] = n, this.emit("snapEnd", r), this.emit("render")
                            };
                            t ? a() : e && e > 0 ? this.tweenGroup && this.innerTween ? (this.disable(), new this.innerTween.Tween(s, this.tweenGroup).to({
                                [o]: n
                            }, e).easing(this.innerTween.Easing.Quadratic.InOut).onComplete((() => {
                                this.enable(), this.emit("snapEnd", r), this.emit("render")
                            })).start()) : (V.debug && i.error("[minigamefe PixiCore]: tweenGroup&tween实例异常"), a()) : a()
                        }
                    }
                    destroy() {
                        if (this.destroyed = !0, this.isPC) {
                            var {
                                offTouchMove: t,
                                offTouchEnd: e,
                                offTouchCancel: i
                            } = V.wx;
                            this.pcListener.moveListener && (null == t || t(this.pcListener.moveListener)), this.pcListener.endListener && (null == e || e(this.pcListener.endListener)), this.pcListener.cancelListener && (null == i || i(this.pcListener.cancelListener))
                        }
                    }
                    getSnapDirection() {
                        var {
                            screenCanvas: t,
                            outDragArea: e
                        } = this, i = this.enableSnap, s = t.x + t.width / 2, n = t.y + t.height / 2;
                        if (this.enableSnap === j.Horizontal) i = s <= e.left + e.width / 2 ? j.Left : j.Right;
                        else if (this.enableSnap === j.Vertical) i = n <= e.top + e.height / 2 ? j.Top : j.Bottom;
                        else if (this.enableSnap === j.All) {
                            var o = Math.round(n - e.top),
                                r = Math.round(e.height + e.top - n),
                                a = Math.round(s - e.left),
                                h = Math.round(e.width + e.left - s),
                                l = Math.min(a, h, o, r);
                            i = l === a ? j.Left : l === r ? j.Bottom : l === h ? j.Right : l === o ? j.Top : j.Left
                        }
                        return i
                    }
                }

                function at(t, e = null) {
                    var i = new(tt().Point);
                    return e ? (i.x = e.x + t.x, i.y = e.y + t.y) : (i.x = t.x, i.y = t.y), t.parent ? at(t.parent, i) : i
                }
                class ht extends M.TinyEmitter {
                    constructor(t) {
                        var e;
                        super(), this.destroyed = !1;
                        var {
                            TWEEN: s,
                            mgp: n,
                            xlog: o,
                            quality: r,
                            designWidth: a = 375,
                            createScreenCanvas: h,
                            createCanvas: l,
                            gameWX: c,
                            scale: d = 1,
                            debug: u = !1
                        } = t;
                        !c && u && i.error("[minigamefe PixiCore]: 请正确传入gameWX对象");
                        var g = tt();
                        g && g.settings ? g.settings.SPRITE_MAX_TEXTURES = 32 : u && i.error("[minigamefe PixiCore]: 请先引入插件环境或者基础库环境的PIXI，并调用setPIXI"), !s && u && i.error("[minigamefe PixiCore]: 请先传入TWEEN"), n ? (this.xlog = n.xlog, this.quality = n.quality) : (r && o || !u || i.error("[minigamefe PixiCore]: 插件环境请传入MGP，基础库环境单独传入quality和xlog"), this.xlog = o, this.quality = r), V.init({
                            pixiJs: g,
                            TWEEN: s,
                            gameWX: c,
                            designWidth: a,
                            scale: d,
                            debug: u
                        }), u && void 0 === h && void 0 === l && i.error("[minigamefe PixiCore]: 至少传入一种创建canvas函数"), this.canvas = new G({
                            createScreenCanvas: h,
                            createCanvas: l
                        }), this.renderer = new W, this.display = new q, this.bindEvent(this.canvas), this.bindEvent(this.renderer), this.bindEvent(this.display), null === (e = null == c ? void 0 : c.onShow) || void 0 === e || e.call(c, (() => {
                            this.updateRender()
                        })), u && i.info("[minigamefe PixiCore]: inited")
                    }
                    get isSupportBitMapText() {
                        return !!V.systemInfo && L(V.systemInfo.SDKVersion, "2.24.7") >= 0
                    }
                    init(t) {
                        if (this.canvas.screenCanvas) {
                            var e, {
                                    defaultTextureName: s,
                                    defaultTextureKey: n,
                                    defaultTextStyle: o,
                                    autoRender: r = !1,
                                    debug: a = !1
                                } = t,
                                h = this.renderer.init(this.canvas.screenCanvas, a, r);
                            L(V.systemInfo.SDKVersion, "2.20.2") <= 0 && ((e = h).plugins.interaction.mapPositionToPoint = (t, i, s) => {
                                if (e) {
                                    var n = e.plugins.interaction.interactionDOMElement,
                                        o = n.getBoundingClientRect(),
                                        r = 1 / e.plugins.interaction.resolution;
                                    t.set((i - o.left) * (n.width / o.width) * r, (s - o.top) * (n.height / o.height) * r)
                                }
                            }), this.touch = new rt(this.canvas), this.bindTouchEvent(h), this.canvas.on("resize", (t => {
                                var e, i, {
                                    width: s,
                                    height: n,
                                    resetTouchArea: o
                                } = t;
                                this.renderer.resize(s, n), null === (e = this.touch) || void 0 === e || e.resize(), o && this.canvas.screenCanvas && (null === (i = this.touch) || void 0 === i || i.setTouchArea([{
                                    top: 0,
                                    left: 0,
                                    width: this.canvas.screenCanvas.width,
                                    height: this.canvas.screenCanvas.height
                                }]))
                            })), this.display.init({
                                bindingScreen: this.canvas.bindingScreen,
                                defaultTextureName: s,
                                defaultTextureKey: n,
                                defaultTextStyle: o
                            }), this.bindEvent(this.touch), V.on("onDeviceOrientationChange", (() => {
                                this.emit("onDeviceOrientationChange"), this.updateRender()
                            }))
                        } else V.debug && i.error("[minigamefe PixiCore]: 请先调用pixiJsCore.canvas.init()")
                    }
                    load(t) {
                        this.canvas.screenCanvas || V.debug && i.warn("[minigamefe PixiCore]: 请先调用pixiJsCore.canvas.init()");
                        var {
                            timeout: e,
                            list: s,
                            mainTextureName: n
                        } = t;
                        return this.loader || (this.loader = new Z, this.bindEvent(this.loader)), new Promise(((t, i) => {
                            this.loader ? this.loader.load({
                                timeout: e,
                                mainTextureName: n,
                                list: s,
                                bindingScreen: this.canvas.bindingScreen
                            }).then((e => {
                                e && e.resources ? (this.display.addTextures(e.resources), t(e.resources)) : (this.qualityReport($, e.errMsg || "minigamefe PixiCore Load资源加载失败"), i({
                                    errorMsg: e.errMsg || "加载失败"
                                }))
                            })).catch((t => {
                                this.qualityReport($, t.errMsg || "minigamefe PixiCore Load资源加载失败"), i({
                                    errorMsg: t.errMsg || "加载失败"
                                })
                            })) : i({
                                errorMsg: "已销毁"
                            })
                        }))
                    }
                    tween(t) {
                        return new V.TWEEN.Tween(t, this.tweenGroup).onUpdate((() => {
                            this.updateRender()
                        }))
                    }
                    removeTween(t) {
                        this.tweenGroup.remove(t)
                    }
                    destroy() {
                        var t, e;
                        this.destroyed || (this.destroyed = !0, null === (t = this.loader) || void 0 === t || t.destroy(), this.renderer.destroy(), this.canvas.destroy(), this.display.destroy(), null === (e = this.touch) || void 0 === e || e.destroy(), V.destroy())
                    }
                    get touchEventHandler() {
                        return this.innerTouchEventHandler
                    }
                    get tweenGroup() {
                        return V.tweenGroup
                    }
                    updateRender() {
                        this.renderer.update()
                    }
                    get stage() {
                        return this.renderer.stage
                    }
                    get pixelRatio() {
                        return V.dpr
                    }
                    bindTouchEvent(t) {
                        var e;
                        if (this.canvas.screenCanvas) {
                            var i = function(t, e) {
                                return {
                                    start: i => {
                                        var {
                                            event: s
                                        } = i;
                                        t.plugins.interaction.onPointerDown(ot(e, s), "touchstart")
                                    },
                                    move: i => {
                                        var {
                                            event: s
                                        } = i;
                                        t.plugins.interaction.onPointerMove(ot(e, s), "touchmove")
                                    },
                                    end: i => {
                                        var {
                                            event: s,
                                            isDraged: n
                                        } = i;
                                        n ? t.plugins.interaction.onPointerCancel(ot(e, s), "pointercancel") : t.plugins.interaction.onPointerUp(ot(e, s), "touchend")
                                    }
                                }
                            }(t, this.canvas.screenCanvas.canvas);
                            this.innerTouchEventHandler = null === (e = this.touch) || void 0 === e ? void 0 : e.bindScreenCanvasEventDispatch(i)
                        }
                    }
                    bindEvent(t) {
                        t.on("postrender", (() => {
                            this.emit("render")
                        })), t.on("render", (() => {
                            this.updateRender(), this.emit("render")
                        })), t.on("error", (t => {
                            this.qualityReport($, t)
                        })), t.on("info", this.xlogReport.bind(this))
                    }
                    xlogReport(t) {
                        var e;
                        null === (e = this.xlog) || void 0 === e || e.info(t)
                    }
                    qualityReport(t, e) {
                        var i;
                        null === (i = this.quality) || void 0 === i || i.report({
                            Type: P.Error,
                            Target: t,
                            IsError: 1,
                            Result: e
                        })
                    }
                }
                const lt = d;
                var ct, {
                        parse: dt,
                        stringify: ut
                    } = JSON,
                    {
                        keys: gt
                    } = Object,
                    pt = String,
                    vt = "string",
                    mt = "object",
                    ft = (t, e) => e,
                    wt = (t, e, i) => {
                        var s = pt(e.push(i) - 1);
                        return t.set(i, s), s
                    },
                    At = (t, e, i) => {
                        for (var s = e && typeof e === mt ? (t, i) => "" === t || -1 < e.indexOf(t) ? i : void 0 : e || ft, n = new Map, o = [], r = [], a = +wt(n, o, s.call({
                                "": t
                            }, "", t)), h = !a; a < o.length;) h = !0, r[a] = ut(o[a++], l, i);
                        return "[" + r.join(",") + "]";

                        function l(t, e) {
                            if (h) return h = !h, e;
                            var i = s.call(this, t, e);
                            switch (typeof i) {
                                case mt:
                                    if (null === i) return i;
                                case vt:
                                    return n.get(i) || wt(n, o, i)
                            }
                            return i
                        }
                    };
                ! function(t) {
                    t.log = "log", t.info = "info", t.warn = "warn", t.error = "error"
                }(ct || (ct = {}));
                class bt {
                    constructor({
                        reportFunc: t,
                        base: e,
                        debug: s,
                        delimiter: n,
                        namespace: o
                    }) {
                        this.reportFunc = null, this.debug = !1, this.base = {}, this.delimiter = " ", this.namespace = "", t ? (this.reportFunc = t, e && this.setBase(e), this.debug = !!s, n && (this.delimiter = n), this.namespace = o ? ` ${o} ` : " ") : i.error("[minigamefe XLog]: 未传入上报函数。")
                    }
                    setBase(t) {
                        this.base = Object.assign(Object.assign({}, this.base), t)
                    }
                    log(...t) {
                        this.report(ct.log, t)
                    }
                    info(...t) {
                        this.report(ct.info, t)
                    }
                    warn(...t) {
                        this.report(ct.warn, t)
                    }
                    error(...t) {
                        this.report(ct.error, t)
                    }
                    getLogStr(t, e) {
                        var s;
                        if (!this.reportFunc) return i.error(`[minigamefe${this.namespace}XLog]: 未传入上报函数。`), "";
                        if (!e) return "";
                        var n = "";
                        e.forEach((t => {
                            n.length > 0 && (n += this.delimiter);
                            var e = t;
                            "object" == typeof e && (e = e instanceof TypeError ? e.message : At(e)), n += `${String(e).trim()}`
                        }));
                        var o = `[minigamefe${this.namespace}XLog]: ${JSON.stringify(Object.assign(Object.assign({},this.base),{type:t,content:n}))}`;
                        return this.debug && (null === (s = i[t]) || void 0 === s || s.call(i, o)), o
                    }
                    report(t, e) {
                        var {
                            reportFunc: s
                        } = this;
                        if (s)
                            if (s[t] && "function" == typeof s[t]) {
                                var n = this.getLogStr(t, e);
                                n && s[t](n)
                            } else i.error(`[minigamefe${this.namespace}XLog]: 传入的上报函数格式不对。`);
                        else i.error(`[minigamefe${this.namespace}XLog]: 未传入上报函数。`)
                    }
                }
                var {
                    Quality: yt
                } = lt, Tt = new yt({
                    pluginAppId: "wxapplib_live",
                    pluginVersion: "1.1.0"
                }), xt = 0;

                function St(t) {
                    Tt.report({
                        Type: C.Error,
                        Target: "liveInvokeFail",
                        Result: t
                    })
                }
                var Pt, {
                    _onShow: Ct,
                    getSystemInfoSync: Dt,
                    onDeviceOrientationChange: Mt,
                    createScreenCanvas: zt
                } = lt;

                function It() {
                    var t;
                    t = PIXI, Y = t, Pt = new ht({
                        TWEEN: x,
                        createScreenCanvas: zt,
                        designWidth: 414,
                        xlog: new bt({
                            reportFunc: s,
                            namespace: "live",
                            base: {
                                name: "minigameLive"
                            }
                        }),
                        quality: Tt,
                        gameWX: {
                            onShow: Ct,
                            getSystemInfoSync: Dt,
                            onDeviceOrientationChange: Mt
                        },
                        debug: !1
                    })
                }
                var kt = function(t) {
                        return t[t.Unknown = 0] = "Unknown", t[t.Anchor_Notice = 1] = "Anchor_Notice", t[t.Audience_Comment = 2] = "Audience_Comment", t[t.Audience_Join = 3] = "Audience_Join", t[t.Top = 4] = "Top", t[t.Official = 5] = "Official", t[t.Official_BanComment = 6] = "Official_BanComment", t[t.Official_OpenComment = 7] = "Official_OpenComment", t[t.Official_ConnectMic = 8] = "Official_ConnectMic", t[t.Official_LiveRewardEnable = 9] = "Official_LiveRewardEnable", t[t.ComboLiveReward = 10] = "ComboLiveReward", t[t.RewardRankingNotice = 11] = "RewardRankingNotice", t[t.Official_Location = 12] = "Official_Location", t[t.RedPacket_Sent = 13] = "RedPacket_Sent", t[t.RedPacket_Received = 14] = "RedPacket_Received", t[t.Official_PureAudioMode = 15] = "Official_PureAudioMode", t[t.First_Notice = 16] = "First_Notice", t
                    }({}),
                    Et = function(t) {
                        return t[t.Unknown = 0] = "Unknown", t[t.Info = 1] = "Info", t[t.DisableInfo = 2] = "DisableInfo", t[t.GetCurrentRoomMemberInfo = 3] = "GetCurrentRoomMemberInfo", t[t.GetCurrentRoomInfo = 4] = "GetCurrentRoomInfo", t[t.EnableMic = 5] = "EnableMic", t[t.DisableMic = 6] = "DisableMic", t[t.GetCurrentMicState = 7] = "GetCurrentMicState", t[t.EnableMicInfo = 8] = "EnableMicInfo", t[t.DisableMicInfo = 8] = "DisableMicInfo", t[t.SetRoomTopic = 10] = "SetRoomTopic", t[t.GameLiveInfoControlActionSetMusic = 11] = "GameLiveInfoControlActionSetMusic", t[t.GetCurrentMusicState = 12] = "GetCurrentMusicState", t
                    }({}),
                    Lt = function(t) {
                        return t[t.End = 0] = "End", t[t.Start = 1] = "Start", t[t.PreStart = 2] = "PreStart", t[t.Cancel = 3] = "Cancel", t
                    }({}),
                    Rt = {
                        [Lt.End]: "liveEnd",
                        [Lt.Start]: "liveStart",
                        [Lt.PreStart]: "livePreStart",
                        [Lt.Cancel]: "liveCancel"
                    },
                    Bt = function(t) {
                        return t[t.unknow = 0] = "unknow", t[t.friend = 1] = "friend", t[t.timeline = 2] = "timeline", t
                    }({}),
                    Ht = function(t) {
                        return t[t.Share = 0] = "Share", t[t.SetTopic = 1] = "SetTopic", t
                    }({}),
                    Ot = {
                        [Ht.Share]: "1",
                        [Ht.SetTopic]: "2"
                    },
                    Vt = Array.isArray ? Array.isArray : function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    Xt = 20;

                function Zt() {
                    this._events = {}, this._conf && Ut.call(this, this._conf)
                }

                function Ut(t) {
                    t ? (this._conf = t, t.delimiter && (this.delimiter = t.delimiter), this._maxListeners = void 0 !== t.maxListeners ? t.maxListeners : Xt, t.newListener && (this._newListener = t.newListener), t.removeListener && (this._removeListener = t.removeListener)) : this._maxListeners = Xt
                }

                function Nt(t, e) {
                    i.warn(`[Event] ${t} listeners of event ${e} have been added, possibly causing memory leak.`)
                }

                function Gt(t) {
                    this._events = {}, this._newListener = !1, this._removeListener = !1, Ut.call(this, t)
                }
                Gt.prototype.delimiter = ".", Gt.prototype.setMaxListeners = function(t) {
                    void 0 !== t && (this._maxListeners = t, this._conf || (this._conf = {}), this._conf.maxListeners = t)
                }, Gt.prototype.event = "", Gt.prototype.once = function(t, e) {
                    return this._once(t, e, !1)
                }, Gt.prototype.prependOnceListener = function(t, e) {
                    return this._once(t, e, !0)
                }, Gt.prototype._once = function(t, e, i) {
                    return this._many(t, 1, e, i), this
                }, Gt.prototype.many = function(t, e, i) {
                    return this._many(t, e, i, !1)
                }, Gt.prototype.prependMany = function(t, e, i) {
                    return this._many(t, e, i, !0)
                }, Gt.prototype._many = function(t, e, i, s) {
                    var n = this;
                    if ("function" != typeof i) throw new Error("many only accepts instances of Function");

                    function o() {
                        return 0 == --e && n.off(t, o), i.apply(this, arguments)
                    }
                    return o._origin = i, this._on(t, o, s), n
                }, Gt.prototype.emit = function() {
                    this._events || Zt.call(this);
                    var t = arguments[0];
                    if ("newListener" === t && !this._newListener && !this._events.newListener) return !1;
                    var e, i, s, n, o, r = arguments.length;
                    if (this._all && this._all.length) {
                        if (o = this._all.slice(), r > 3)
                            for (e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
                        for (s = 0, i = o.length; s < i; s++) switch (this.event = t, r) {
                            case 1:
                                o[s].call(this, t);
                                break;
                            case 2:
                                o[s].call(this, t, arguments[1]);
                                break;
                            case 3:
                                o[s].call(this, t, arguments[1], arguments[2]);
                                break;
                            default:
                                o[s].apply(this, e)
                        }
                    }
                    if ("function" == typeof(o = this._events[t])) {
                        switch (this.event = t, r) {
                            case 1:
                                o.call(this);
                                break;
                            case 2:
                                o.call(this, arguments[1]);
                                break;
                            case 3:
                                o.call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (e = new Array(r - 1), n = 1; n < r; n++) e[n - 1] = arguments[n];
                                o.apply(this, e)
                        }
                        return !0
                    }
                    if (o && (o = o.slice()), o && o.length) {
                        if (r > 3)
                            for (e = new Array(r - 1), n = 1; n < r; n++) e[n - 1] = arguments[n];
                        for (s = 0, i = o.length; s < i; s++) switch (this.event = t, r) {
                            case 1:
                                o[s].call(this);
                                break;
                            case 2:
                                o[s].call(this, arguments[1]);
                                break;
                            case 3:
                                o[s].call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                o[s].apply(this, e)
                        }
                        return !0
                    }
                    if (!this._all && "error" === t) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                    return !!this._all
                }, Gt.prototype.emitAsync = function() {
                    this._events || Zt.call(this);
                    var t = arguments[0];
                    if ("newListener" === t && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
                    var e, i, s, n, o, r = [],
                        a = arguments.length;
                    if (this._all) {
                        if (a > 3)
                            for (e = new Array(a), n = 1; n < a; n++) e[n] = arguments[n];
                        for (s = 0, i = this._all.length; s < i; s++) switch (this.event = t, a) {
                            case 1:
                                r.push(this._all[s].call(this, t));
                                break;
                            case 2:
                                r.push(this._all[s].call(this, t, arguments[1]));
                                break;
                            case 3:
                                r.push(this._all[s].call(this, t, arguments[1], arguments[2]));
                                break;
                            default:
                                r.push(this._all[s].apply(this, e))
                        }
                    }
                    if ("function" == typeof(o = this._events[t])) switch (this.event = t, a) {
                        case 1:
                            r.push(o.call(this));
                            break;
                        case 2:
                            r.push(o.call(this, arguments[1]));
                            break;
                        case 3:
                            r.push(o.call(this, arguments[1], arguments[2]));
                            break;
                        default:
                            for (e = new Array(a - 1), n = 1; n < a; n++) e[n - 1] = arguments[n];
                            r.push(o.apply(this, e))
                    } else if (o && o.length) {
                        if (o = o.slice(), a > 3)
                            for (e = new Array(a - 1), n = 1; n < a; n++) e[n - 1] = arguments[n];
                        for (s = 0, i = o.length; s < i; s++) switch (this.event = t, a) {
                            case 1:
                                r.push(o[s].call(this));
                                break;
                            case 2:
                                r.push(o[s].call(this, arguments[1]));
                                break;
                            case 3:
                                r.push(o[s].call(this, arguments[1], arguments[2]));
                                break;
                            default:
                                r.push(o[s].apply(this, e))
                        }
                    } else if (!this._all && "error" === t) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
                    return Promise.all(r)
                }, Gt.prototype.on = function(t, e) {
                    return this._on(t, e, !1)
                }, Gt.prototype.prependListener = function(t, e) {
                    return this._on(t, e, !0)
                }, Gt.prototype.onAny = function(t) {
                    return this._onAny(t, !1)
                }, Gt.prototype.prependAny = function(t) {
                    return this._onAny(t, !0)
                }, Gt.prototype.addListener = Gt.prototype.on, Gt.prototype._onAny = function(t, e) {
                    if ("function" != typeof t) throw new Error("onAny only accepts instances of Function");
                    return this._all || (this._all = []), e ? this._all.unshift(t) : this._all.push(t), this
                }, Gt.prototype._on = function(t, e, i) {
                    if ("function" == typeof t) return this._onAny(t, e), this;
                    if ("function" != typeof e) throw new Error("on only accepts instances of Function");
                    return this._events || Zt.call(this), this._newListener && this.emit("newListener", t, e), this._events[t] ? ("function" == typeof this._events[t] && (this._events[t] = [this._events[t]]), i ? this._events[t].unshift(e) : this._events[t].push(e), !this._events[t].warned && this._maxListeners > 0 && this._events[t].length > this._maxListeners && (this._events[t].warned = !0, Nt.call(this, this._events[t].length, t))) : this._events[t] = e, this
                }, Gt.prototype.off = function(t, e) {
                    if ("function" != typeof e) throw new Error("removeListener only takes instances of Function");
                    var i, s = [];
                    if (!this._events[t]) return this;
                    i = this._events[t], s.push({
                        _listeners: i
                    });
                    for (var n = 0; n < s.length; n++) {
                        if (i = s[n]._listeners, Vt(i)) {
                            for (var o = -1, r = 0, a = i.length; r < a; r++)
                                if (i[r] === e || i[r].listener && i[r].listener === e || i[r]._origin && i[r]._origin === e) {
                                    o = r;
                                    break
                                } if (o < 0) continue;
                            return this._events[t].splice(o, 1), 0 === i.length && delete this._events[t], this._removeListener && this.emit("removeListener", t, e), this
                        }(i === e || i.listener && i.listener === e || i._origin && i._origin === e) && (delete this._events[t], this._removeListener && this.emit("removeListener", t, e))
                    }
                    return function t(e) {
                        if (void 0 !== e) {
                            var i = Object.keys(e);
                            for (var s in i) {
                                var n = i[s],
                                    o = e[n];
                                o instanceof Function || "object" != typeof o || null === o || (Object.keys(o).length > 0 && t(e[n]), 0 === Object.keys(o).length && delete e[n])
                            }
                        }
                    }(this.listenerTree), this
                }, Gt.prototype.offAny = function(t) {
                    var e, i = 0,
                        s = 0;
                    if (t && this._all && this._all.length > 0) {
                        for (i = 0, s = (e = this._all).length; i < s; i++)
                            if (t === e[i]) return e.splice(i, 1), this._removeListener && this.emit("removeListenerAny", t), this
                    } else {
                        if (e = this._all, this._removeListener)
                            for (i = 0, s = e.length; i < s; i++) this.emit("removeListenerAny", e[i]);
                        this._all = []
                    }
                    return this
                }, Gt.prototype.removeListener = Gt.prototype.off, Gt.prototype.removeAllListeners = function(t) {
                    return void 0 === t ? (!this._events || Zt.call(this), this) : (this._events && delete this._events[t], this)
                }, Gt.prototype.listeners = function(t) {
                    return this._events || Zt.call(this), this._events[t] || (this._events[t] = []), Vt(this._events[t]) || (this._events[t] = [this._events[t]]), this._events[t]
                }, Gt.prototype.eventNames = function() {
                    return Object.keys(this._events)
                }, Gt.prototype.listenerCount = function(t) {
                    return this.listeners(t).length
                }, Gt.prototype.listenersAny = function() {
                    return this._all ? this._all : []
                };
                var {
                    KeyValueReport20267: qt
                } = lt, Wt = new qt;

                function Yt() {
                    Wt.send({
                        UIArea: 3605,
                        PositionID: 6,
                        ActionID: 1
                    })
                }

                function jt(t) {
                    Wt.send({
                        UIArea: 3607,
                        PositionID: 0,
                        ActionID: 7,
                        ExternInfo: Ot[t]
                    })
                }
                var {
                    innerShareInvitationToLiveRoom: Ft,
                    invokeOperateWXDataPromise: Qt
                } = lt;
                const Jt = new class {
                    shareToFriend(t = !1) {
                        ! function(t = !1) {
                            Wt.send({
                                UIArea: t ? 3606 : 3605,
                                PositionID: t ? 1 : 2,
                                ActionID: 2
                            })
                        }(t), c.invoke("shareGameLive", {
                            type: Bt.friend
                        }, (e => {
                            try {
                                ! function(t, e, i = !1) {
                                    Wt.send({
                                        UIArea: i ? 3606 : 3605,
                                        PositionID: i ? 1 : 2,
                                        ActionID: 10,
                                        ActionStatus: t ? "1" : "2",
                                        Object: e
                                    })
                                }(!!(e.errMsg.indexOf("ok") > -1 && (e.singleChat || e.groupChat)), `singleChat=${e.singleChat||0}:groupChat=${e.groupChat||0}`, t)
                            } catch (t) {
                                St(B(t))
                            }
                        }))
                    }
                    shareToTimeline(t = !1) {
                        ! function(t = !1) {
                            Wt.send({
                                UIArea: t ? 3606 : 3605,
                                PositionID: t ? 2 : 3,
                                ActionID: 2
                            })
                        }(t), c.invoke("shareGameLive", {
                            type: Bt.timeline
                        }, (e => {
                            try {
                                ! function(t, e = !1) {
                                    Wt.send({
                                        UIArea: e ? 3606 : 3605,
                                        PositionID: e ? 2 : 3,
                                        ActionID: 10,
                                        ActionStatus: t ? "1" : "2"
                                    })
                                }(!!(e.errMsg.indexOf("ok") > -1), t)
                            } catch (t) {
                                St(B(t))
                            }
                        }))
                    }
                    exitGameLive(t = I) {
                        var e;
                        e = Math.round(Date.now() / 1e3) - Oe.liveStartTime, Wt.send({
                            UIArea: 3605,
                            PositionID: 1,
                            ActionID: 2,
                            Time: e
                        }), c.invoke("exitGameLive", {}, (e => {
                            t(e)
                        }))
                    }
                    openFansClub(t = I) {
                        Wt.send({
                            UIArea: 3605,
                            PositionID: 7,
                            ActionID: 2
                        }), c.invoke("openFansClub", {}, (e => {
                            t(e)
                        }))
                    }
                    openMusic(t = I) {
                        c.invoke("gameLiveInfoControl", {
                            action: Et.GameLiveInfoControlActionSetMusic
                        }, (e => {
                            t(e)
                        }))
                    }
                    openPlayTogether() {
                        Wt.send({
                            UIArea: 3605,
                            PositionID: 6,
                            ActionID: 2
                        }), Ft()
                    }
                    checkPlayTogether(t) {
                        Qt({
                            apiName: "webapi_game_transfer",
                            reqData: {
                                reqPath: "gamelive.getminigameteamupconfig"
                            }
                        }).then((e => {
                            var i, s;
                            t(null !== (i = null == e || null === (s = e.data) || void 0 === s ? void 0 : s.enable_teamup) && void 0 !== i && i)
                        }))
                    }
                    enterGameLiveRoom(t = I) {
                        Wt.send({
                            UIArea: 3605,
                            PositionID: 5,
                            ActionID: 2
                        }), c.invoke("enterGameLiveRoom", {}, (e => {
                            t(e)
                        }))
                    }
                    minimizeGameLive(t = I) {
                        Wt.send({
                            UIArea: 3602,
                            PositionID: 4,
                            ActionID: 2
                        }), c.invoke("minimizeGameLive", {}, (e => {
                            t(e)
                        }))
                    }
                    gameLiveInfoControl(t) {
                        return new Promise((e => {
                            c.invoke("gameLiveInfoControl", {
                                action: t
                            }, (t => {
                                e(t)
                            }))
                        }))
                    }
                    setGameLiveTopic(t, e = I) {
                        c.invoke("gameLiveInfoControl", {
                            action: Et.SetRoomTopic,
                            topic: t
                        }, (t => {
                            e(t)
                        }))
                    }
                    micOp(t, e = I) {
                        var i = t ? Et.EnableMic : Et.DisableMic;
                        t ? Wt.send({
                            UIArea: 3605,
                            PositionID: 4,
                            ActionID: 2,
                            OpType: 3
                        }) : Wt.send({
                            UIArea: 3605,
                            PositionID: 4,
                            ActionID: 2,
                            OpType: 7
                        }), c.invoke("gameLiveInfoControl", {
                            action: i
                        }, (t => {
                            e(t)
                        }))
                    }
                    getMicState(t = I) {
                        c.invoke("gameLiveInfoControl", {
                            action: Et.GetCurrentMicState
                        }, (e => {
                            t(e)
                        }))
                    }
                    getMusicState(t = I) {
                        c.invoke("gameLiveInfoControl", {
                            action: Et.GetCurrentMusicState
                        }, (e => {
                            t(e)
                        }))
                    }
                };
                var {
                    createFeedbackLogger: Kt
                } = lt, _t = Kt("gamelive"), $t = [/\ufe0e/, /\ufe0f/, /\u20e3/], te = [/\ud83c[\udde6-\uddff]\ud83c[\udde6-\uddff]/, /\ud83c\udff4(?:\udb40[\udc20-\udc7e])+?\udb40\udc7f/, /[\ud800-\udbff][\udc00-\udfff]/, new RegExp(`.(?:${$t.map((t=>t.source)).join("|")})+`), /[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55\u00A9\u00AE\u203C\u2049\u2122\u2139\u2194\u2195\u2196\u2197\u2198\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263a\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u26F9\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05-\u2b07\u3030\u303D\u3297\u3299\u261D\u26F9\u270A-\u270d]/], ee = [/\ud83c[\udffb-\udfff]/].concat($t), ie = "text", se = "other", ne = new RegExp(`^${/\u200d/.source}`), oe = new RegExp(`^(?:${te.map((t=>t.source)).join("|")})`), re = new RegExp(`(?:${te.map((t=>t.source)).join("|")})`), ae = new RegExp(`${oe.source}(?:${ee.map((t=>`(?:${t.source})`)).join("|")})*`), he = new RegExp(`${re.source}(?:${ee.map((t=>`(?:${t.source})`)).join("|")})*`);

                function le(t, e = !0) {
                    var i = "";
                    if ((e ? oe : re).test(t)) {
                        var s = e ? ae : he,
                            n = t.match(s);
                        n && (i += n[0], i += function(t) {
                            var e = "",
                                i = t.match(ne);
                            return i && (e += i[0], e += le(t = t.substr(i[0].length))), e
                        }(t = t.substr(t.indexOf(i) + n[0].length)))
                    }
                    return i
                }

                function ce(t = "") {
                    for (var e = []; t.length > 0;) {
                        var i = le(t, !1);
                        if (i) {
                            var s = t.indexOf(i);
                            s > 0 && e.push({
                                text: t.slice(0, s),
                                type: ie
                            }), e.push({
                                text: i,
                                type: se
                            }), t = t.slice(s + i.length)
                        } else e.push({
                            text: t,
                            type: ie
                        }), t = ""
                    }
                    return e
                }

                function de(t = "", e = 0, i = 1 / 0) {
                    var s = ue(t);
                    return e < 0 && (e = s.length + e), s.slice(e, e + i).join("")
                }

                function ue(t = "") {
                    for (var e = [], i = ce(t), s = 0; s < i.length; s++) i[s].type === ie ? e = e.concat(i[s].text.split("")) : e.push(i[s].text);
                    return e
                }

                function ge(t, e, s) {
                    if (0 === t.length) return t;
                    e.breakWords = !0, e.wordWrap = !0, e.wordWrapWidth || (s || (i.error("[minigamefe PixiCore]: 请设置换行宽度"), s = 100), e.wordWrapWidth = s);
                    for (var n = tt(), o = e instanceof n.TextStyle ? e : new n.TextStyle(e), r = t, a = n.TextMetrics.measureText(r, o, !0); a.lines.length > 1;) {
                        var h = a.lines[0];
                        if (r = H(h = de(h, 0, ue(h).length - 1)), h.length <= 1) return r;
                        a = n.TextMetrics.measureText(r, o, !0)
                    }
                    return r
                }
                var pe, ve;

                function me() {
                    return pe || (pe = lt.getSystemInfoSync())
                }

                function fe() {
                    return ve || (ve = lt.getAccountInfoSync())
                }

                function we(t) {
                    if (!t) return "";
                    if (t.indexOf("回复") > -1) return t;
                    var e = ue(t);
                    return ge(e.length > 6 ? e.slice(0, 6).join("") + z : e.join(""), xe.commonStyle, 100)
                }
                const Ae = {
                    debug: !1,
                    MAX_MESSAGE_LENGTH: 20,
                    MAX_USER_LENGTH: 20,
                    ENTER_ANIMATE_ID: 0,
                    TOAST_ANIMATE_ID: 1,
                    SYSTEMTIPS_ANIMATE_ID: 2,
                    MAX_HEIGHT: 252,
                    MAX_WIDTH: 300,
                    PADDING: 4,
                    GIFT_HEIGHT: 244,
                    RANK_COLORS: ["#E1B363", "#B6C8CD", "#DFB599", "#E0E0E0"]
                };
                var be = {
                        ready: !1,
                        position: {
                            x: 0,
                            y: 0
                        },
                        IS_DEVTOOLS: !1,
                        designSize: {
                            width: Ae.MAX_WIDTH,
                            height: Ae.MAX_HEIGHT
                        },
                        lockSize: {
                            width: Ae.MAX_WIDTH,
                            height: 112
                        },
                        device: {
                            width: Ae.MAX_WIDTH,
                            height: Ae.MAX_HEIGHT
                        },
                        screenWidth: 0,
                        screenHeight: 0,
                        toolWidth: 32,
                        headerHeight: 48,
                        initPosition: {
                            x: 16,
                            y: 16
                        },
                        safeArea: {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    ye = {
                        fill: 16777215,
                        fontSize: 12,
                        whiteSpace: "normal",
                        textBaseline: "middle",
                        lineHeight: 16,
                        dropShadow: !0,
                        dropShadowColor: "rgba(0, 0, 0, 0.8)",
                        dropShadowDistance: 1
                    },
                    Te = Object.assign({}, ye, {
                        fill: 14737632,
                        breakWords: !0,
                        wordWrap: !0,
                        wordWrapWidth: Ae.MAX_WIDTH - 72
                    }),
                    xe = {
                        commonStyle: ye,
                        dataStyle: Te,
                        listStyle: Object.assign({}, ye, {
                            fill: 14737632,
                            breakWords: !0,
                            wordWrap: !0,
                            wordWrapWidth: Ae.MAX_WIDTH - 72
                        }),
                        tipsStyle: Object.assign({}, Te, {
                            fill: 10592673
                        }),
                        linkStyle: Object.assign({}, Te, {
                            fill: 8425639
                        }),
                        userNameStyle: Object.assign({}, ye, {
                            fill: 14737632
                        }),
                        contextStyle: Object.assign({}, ye, {
                            breakWords: !0,
                            wordWrap: !0,
                            wordWrapWidth: Ae.MAX_WIDTH - 48
                        }),
                        joinStyle: Object.assign({}, ye, {
                            lineHeight: 20,
                            breakWords: !0,
                            wordWrap: !0,
                            wordWrapWidth: Ae.MAX_WIDTH - 56
                        }),
                        giftStyle: Object.assign({}, ye, {
                            fill: 9621832
                        }),
                        titleStyle: Object.assign({}, ye, {
                            breakWords: !0,
                            wordWrap: !0,
                            wordWrapWidth: Ae.MAX_WIDTH - 184,
                            dropShadow: !1
                        }),
                        shareTitleStyle: Object.assign({}, ye, {
                            dropShadow: !1
                        }),
                        timeStyle: Object.assign({}, ye, {
                            lineHeight: 14,
                            fontSize: 10,
                            dropShadow: !1
                        }),
                        tipStyle: Object.assign({}, ye, {
                            fill: 10592673,
                            lineHeight: 14,
                            dropShadow: !1,
                            wordWrapWidth: Ae.MAX_WIDTH,
                            wordWrap: !1
                        }),
                        newMessageStyle: Object.assign({}, ye, {
                            fill: 0,
                            lineHeight: 12,
                            dropShadow: !1
                        }),
                        toastStyle: Object.assign({}, ye, {
                            fill: 16777215,
                            lineHeight: 20,
                            dropShadow: !1
                        }),
                        musicNameStyle: Object.assign({}, ye, {
                            fill: "rgba(255, 255, 255, 0.5)",
                            fontSize: 10,
                            wordWrapWidth: 60,
                            breakWords: !0,
                            wordWrap: !0,
                            dropShadow: !1
                        }),
                        systemTipsStyle: Object.assign({}, ye, {
                            fill: "rgba(0, 0, 0, 0.9)",
                            breakWords: !0,
                            lineHeight: 17,
                            dropShadow: !1,
                            wordWrap: !0,
                            wordWrapWidth: Ae.MAX_WIDTH - (be.toolWidth + 48)
                        })
                    },
                    Se = t => {
                        be.ready = !0;
                        var {
                            screenWidth: e,
                            screenHeight: i,
                            platform: s
                        } = t, n = st(!1, t);
                        be.IS_DEVTOOLS = "devtools" === s, be.IS_DEVTOOLS || (be.position.x = be.initPosition.x + n.left, be.position.y = be.initPosition.y + n.top, e > i && (be.position.y += 16)), be.screenWidth = e, be.screenHeight = i, be.safeArea = n
                    };

                function Pe(t = !1) {
                    if (!be.ready || t) {
                        var e = me();
                        Se(e)
                    }
                }

                function Ce() {
                    return new Promise((t => {
                        be.ready ? t(be) : new Promise((t => {
                            t(pe || (pe = lt.getSystemInfoSync()))
                        })).then((e => {
                            Se(e), t(be)
                        }))
                    }))
                }
                var {
                    _onHide: De,
                    _onShow: Me,
                    _onGameLiveStateChange: ze,
                    onAudioInterruptionBegin: Ie,
                    onAudioInterruptionEnd: ke,
                    showToast: Ee,
                    packageChannel: Le,
                    onWindowResize: Re
                } = lt;

                function Be(t, e, i) {
                    if (i !== t[`_${e}`]) {
                        var s = function(t) {
                            return t < 1e3 ? `${t}` : t >= 1e3 && t < 1e4 ? `${parseFloat(""+t/1e3).toFixed(1)}k` : t > 1e4 && t < 1e5 ? `${parseFloat(""+t/1e4).toFixed(1)}w` : "10w+"
                        }(i);
                        s !== t[e] && (t[`inner${e}`] = i, t[`inner${e}Str`] = s)
                    }
                }
                var He = !1;
                var Oe = new class extends Gt {
                        constructor() {
                            super(), this.lastEvent = null, this.msgList = [], this.liveId = 0, this.liveStartTime = Math.round(Date.now() / 1e3), this.liveTopic = "", this.liveMemberList = [], this.account = null, this.gameLiveState = void 0, this.locked = !1, this.isMusicPlaying = !1, this.isHide = !1, this.innerCurrLikeCount = 0, this.innerCurrLikeCountStr = "0", this.innerCurrOnlineCount = 0, this.innerCurrOnlineCountStr = "0", this.innerTotalRewardCount = 0, this.innerTotalRewardCountStr = "0", this.innerTotalViewCount = 0, this.innerTotalViewCountStr = "0", this.innerReadyToStart = !1, this.innerNetThresholdCount = 0, this.innerNetToasted = !1, Pe(), Re((() => {
                                Pe(!0)
                            })), this.init()
                        }
                        reset() {
                            this.lastEvent = null, this.innerCurrLikeCount = 0, this.innerCurrLikeCountStr = "0", this.innerCurrOnlineCount = 0, this.innerCurrOnlineCountStr = "0", this.innerTotalRewardCount = 0, this.innerTotalRewardCountStr = "0", this.innerTotalViewCount = 0, this.innerTotalViewCountStr = "0", this.msgList = [], this.locked = !1
                        }
                        bindHideAndShowEvent() {
                            var t = () => {
                                this.isHide = !1, this.innerReadyToStart && (this.innerReadyToStart = !1, this.emit("liveStart")), this.msgList.length && (this.emit("msgListChange", this.msgList), this.msgList = [])
                            };
                            Ie((() => {
                                this.isHide = !0
                            })), ke((() => {
                                var e;
                                null == _t || null === (e = _t.info) || void 0 === e || e.call(_t, "[直播面板] 音频中断结束 onAudioInterruptionEnd"), t()
                            })), De((() => {
                                this.isHide = !0
                            })), Me((() => {
                                var e;
                                null == _t || null === (e = _t.info) || void 0 === e || e.call(_t, "[直播面板] 后台切前台 onShow"), t()
                            }))
                        }
                        init() {
                            this.bindHideAndShowEvent(), c.on("onGameLiveInfo", this.gameLiveInfoEventHandler.bind(this)), c.on("onGameLiveNetStateChange", this.gameLiveNetStateEventHandler.bind(this)), ze(this.gameLiveStateChagneHandler.bind(this)), c.on("onGameLiveMicStateChange", this.micStateChangeHandler.bind(this)), c.on("onGameLiveMusicPlayStateChange", this.musicStateChangeHandler.bind(this)), Le.on("transferGameLiveStateChange", (t => {
                                this.gameLiveStateChagneHandler(t)
                            }))
                        }
                        destroy() {
                            this.reset(), this.removeAllListeners("musicStateChange"), this.removeAllListeners("systemTipsUpdate"), this.removeAllListeners("teamupConfigChange"), this.removeAllListeners("roomListChange"), this.removeAllListeners("micStateChange"), this.removeAllListeners("msgListChange"), this.removeAllListeners("roomInfoChange")
                        }
                        gameLiveNetStateEventHandler(t) {
                            var e, {
                                quality: i,
                                threshold: s
                            } = t;
                            this.innerNetToasted || (i >= s ? (this.innerNetThresholdCount += 1, null == _t || null === (e = _t.info) || void 0 === e || e.call(_t, `[直播面板] 当前网络质量 quality: ${i}, threshold: ${s}`), this.innerNetThresholdCount > 3 && (Ee({
                                icon: "none",
                                title: "当前网络信号差"
                            }), this.innerNetToasted = !0, setTimeout((() => {
                                this.innerNetToasted = !1
                            }), 6e4))) : this.innerNetThresholdCount = 0)
                        }
                        micStateChangeHandler(t) {
                            this.emit("micStateChange", t)
                        }
                        musicStateChangeHandler(t) {
                            this.isMusicPlaying = (null == t ? void 0 : t.isPlaying) || !1, this.emit("musicStateChange", t)
                        }
                        gameLiveStateChagneHandler(t) {
                            var e, i, s, n, o;
                            this.gameLiveState = t.event, null === (e = r) || void 0 === e || null === (i = e.info) || void 0 === i || i.call(e, `[直播面板] 直播状态 event:${null!==(s=null==Rt?void 0:Rt[t.event])&&void 0!==s?s:t.event}`), null == _t || null === (n = _t.info) || void 0 === n || n.call(_t, `[直播面板] 直播状态 event:${null!==(o=null==Rt?void 0:Rt[t.event])&&void 0!==o?o:t.event}`), t.event === Lt.End || t.event === Lt.Cancel ? (He = !1, this.emit("liveEnd", t)) : t.event === Lt.Start ? He || (He = !0, t.extra && (this.account = t.extra, this.liveId = this.account.liveId, Wt.setBase({
                                FuncID: `${this.account.finderUsername}:${this.liveId}`
                            })), this.getRoomInfo(), Jt.getMusicState(this.musicStateChangeHandler.bind(this)), this.isHide ? this.innerReadyToStart = !0 : Ce().then((() => {
                                setTimeout((() => {
                                    this.emit("liveStart")
                                }), 0)
                            }))) : t.event === Lt.PreStart && this.emit("livePreStart");
                            var a, h = JSON.parse(JSON.stringify(t));
                            delete h.extra, a = h, Wt.send({
                                UIArea: 0,
                                PositionID: 1,
                                ActionID: 28,
                                ExternInfo: "string" == typeof a ? encodeURIComponent(a) : encodeURIComponent(JSON.stringify(a))
                            })
                        }
                        gameLiveInfoEventHandler(t) {
                            this.lastEvent = t;
                            var {
                                msgList: e = []
                            } = t;
                            if (this.isHide) this.msgList.push(...e);
                            else {
                                e.length && this.emit("msgListChange", e);
                                var i = !1;
                                t.currLikeCount === this.innerCurrLikeCount && t.currOnlineCount === this.innerCurrOnlineCount && t.totalRewardCount === this.innerTotalRewardCount && t.totalViewCount === this.innerTotalViewCount || (i = !0), this.innerCurrOnlineCount === t.currOnlineCount && this.innerTotalRewardCount === t.totalRewardCount || this.emit("roomListChange"), this.currLikeCount = t.currLikeCount || 0, this.currOnlineCount = t.currOnlineCount || 0, this.totalRewardCount = t.totalRewardCount || 0, this.totalViewCount = t.totalViewCount || 0, i && this.emit("roomInfoChange", this.roomInfo)
                            }
                        }
                        getCurrentRoomMemberInfo() {
                            return Jt.gameLiveInfoControl(Et.GetCurrentRoomMemberInfo).then((t => {
                                this.liveMemberList = t && t.memberList || []
                            }))
                        }
                        getRoomInfo() {
                            return Jt.gameLiveInfoControl(Et.GetCurrentRoomInfo).then((t => {
                                if (t.errMsg.indexOf(":ok") > -1) {
                                    var {
                                        startTime: e,
                                        topic: i
                                    } = t;
                                    R(e) && e > 0 && (this.liveStartTime = e), this.liveTopic = null != i ? i : ""
                                }
                            }))
                        }
                        setLocked(t) {
                            this.locked = t
                        }
                        get roomInfo() {
                            return `${this.currLikeCount}喝彩·${this.totalViewCount}人看过·${this.currOnlineCount}人在线·${this.totalRewardCount}热度`
                        }
                        get currLikeCount() {
                            return this.innerCurrLikeCountStr
                        }
                        set currLikeCount(t) {
                            Be(this, "CurrLikeCount", t)
                        }
                        get currOnlineCount() {
                            return this.innerCurrOnlineCountStr
                        }
                        set currOnlineCount(t) {
                            Be(this, "CurrOnlineCount", t)
                        }
                        get totalRewardCount() {
                            return this.innerTotalRewardCountStr
                        }
                        set totalRewardCount(t) {
                            Be(this, "TotalRewardCount", t)
                        }
                        get totalViewCount() {
                            return this.innerTotalViewCountStr
                        }
                        set totalViewCount(t) {
                            Be(this, "TotalViewCount", t)
                        }
                    },
                    Ve = () => {
                        Xe !== n && void 0 !== Xe && Object.assign(Xe, n)
                    },
                    Xe = (() => (n.onReady(Ve), n))();
                const Ze = Xe;
                var Ue = {};

                function Ne(t, e, i) {
                    var s = at(t);
                    Ue[e] = {
                        x: s.x,
                        y: s.y,
                        width: t.width,
                        height: t.height,
                        check: i
                    }
                }

                function Ge() {
                    Object.keys(Ue).forEach((t => {
                        delete Ue[t]
                    }))
                }
                Ze.onReady((() => {
                    Ce().then((t => {
                        t && t.device && (Ue.canvas = {
                            width: t.device.width,
                            height: t.device.height,
                            check: () => !1
                        })
                    }))
                }));
                var qe = [];

                function We(t, e, i = 2e3, s = null) {
                    qe[t] ? (Pt.removeTween(qe[t]), e.alpha = 1, qe[t] = Pt.tween(e).delay(i).to({
                        alpha: 0
                    }, 300).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                        qe[t] = null, s && s()
                    })).start()) : (e.alpha = 0, qe[t] = Pt.tween(e).to({
                        alpha: 1
                    }, 300).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                        qe[t] = Pt.tween(e).delay(i).to({
                            alpha: 0
                        }, 300).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            qe[t] = null, s && s()
                        })).start()
                    })).start())
                }

                function Ye(t) {
                    var e, {
                        node: s,
                        x: n = 0,
                        y: o = 0,
                        width: r = 1,
                        height: a = 1,
                        radius: h = 0,
                        fill: l,
                        line: c,
                        clear: d = !1
                    } = t;
                    ((e = "number" == typeof h ? {
                        tl: h,
                        tr: h,
                        br: h,
                        bl: h
                    } : h).tl + e.tr > r || e.bl + e.br > r) && i.error("左右radius总和要小于width"), (e.tl + e.bl > a || e.tr + e.br > a) && i.error("上下radius总和要小于height"), d && s.clear(), c && s.lineStyle(c.width, c.color || 0, c.alpha || 1, c.alignment, c.native), l && s.beginFill(l.color || 0, l.alpha || 1), (l || c) && (s.moveTo(n + e.tl, o), s.lineTo(n + r - e.tr, o), e.tr > 0 && s.quadraticCurveTo(n + r, o, n + r, o + e.tr), s.lineTo(n + r, o + a - e.br), e.br > 0 && s.quadraticCurveTo(n + r, o + a, n + r - e.br, o + a), s.lineTo(n + e.bl, o + a), e.bl > 0 && s.quadraticCurveTo(n, o + a, n, o + a - e.bl), s.lineTo(n, o + e.tl), e.tl > 0 && s.quadraticCurveTo(n, o, n + e.tl, o), s.closePath()), l && s.endFill()
                }
                var je = o(263);
                class Fe extends M.TinyEmitter {
                    constructor(t) {
                        super(), this.enabled = !0, this.scrollWidth = 0, this.scrollHeight = 0, this.padding = {}, this.contentWidth = 0, this.contentHeight = 0, this.useAutoSize = !0, this.debug = !1, this.destroyed = !1;
                        var e = tt(),
                            {
                                width: i,
                                height: s,
                                padding: n,
                                maskTexture: o,
                                scrollerOptions: r = {},
                                debug: a
                            } = t;
                        this.contentWidth = i || 0, this.contentHeight = s || 0, this.padding = n || {}, this.maskTexture = o || e.Texture.WHITE, this.debug = !!a, this.initScroll(r), this.initMask()
                    }
                    get container() {
                        return this.view
                    }
                    enable() {
                        this.enabled = !0
                    }
                    disable() {
                        this.enabled = !1
                    }
                    setPosition(t, e) {
                        this.view.position.set(t, e)
                    }
                    updateScrollSize(t) {
                        this.useAutoSize = !1;
                        var {
                            width: e,
                            height: i
                        } = t;
                        "number" == typeof e && isFinite(e) && (this.scrollWidth = Math.round(100 * e) / 100), "number" == typeof i && isFinite(i) && (this.scrollHeight = Math.round(100 * i) / 100), this.update()
                    }
                    resetScrollSize(t = !1, e = !1) {
                        t && (this.scrollWidth = this.content.width + (this.padding.left || 0) + (this.padding.right || 0)), e && (this.scrollHeight = this.content.height + (this.padding.top || 0) + (this.padding.bottom || 0)), this.update()
                    }
                    updateContentSize(t) {
                        var {
                            width: e,
                            height: i
                        } = t;
                        if (R(e) && (this.contentWidth = e), R(i) && (this.contentHeight = i), this.view.mask) {
                            var s = this.view.mask;
                            s.width = this.contentWidth, s.height = this.contentHeight
                        }
                        this.update()
                    }
                    scrollTo(t, e, i = !1) {
                        var s;
                        null === (s = this.scrollContainer) || void 0 === s || s.scrollTo(t, e, i)
                    }
                    scrollBy(t, e, i = !1) {
                        var s;
                        null === (s = this.scrollContainer) || void 0 === s || s.scrollBy(t, e, i)
                    }
                    scrollToBottom(t = !1) {
                        var e = Math.max(this.scrollHeight - this.contentHeight, 0);
                        this.debug && i.log("scrollToBottom:", e), this.scrollTo(0, e, t)
                    }
                    addChild(...t) {
                        this.content.addChild(...t), this.useAutoSize && this.resetScrollSize(!0, !0)
                    }
                    removeChild(...t) {
                        this.content.removeChild(...t), this.useAutoSize && this.resetScrollSize(!0, !0)
                    }
                    removeChildren() {
                        this.content.removeChildren().forEach((t => t.destroy({
                            children: !0
                        }))), this.useAutoSize && this.resetScrollSize(!0, !0)
                    }
                    destroy() {
                        this.view.destroy({
                            children: !0
                        }), this.destroyed = !0
                    }
                    get isBottom() {
                        return Math.floor(-this.content.position.y) >= Math.floor(Math.max(this.scrollHeight - this.contentHeight, 0))
                    }
                    get top() {
                        return -this.content.position.y
                    }
                    get left() {
                        return -this.content.position.x
                    }
                    initScroll(t = {}) {
                        var e = tt();
                        this.view = new e.Container, this.content = new e.Container, this.view.addChild(this.content);
                        var s = Object.assign({
                            scrollingY: !0,
                            scrollingX: !1
                        }, t);
                        this.scrollContainer = new je.Scroller(((t, e) => {
                            this.destroyed || (this.debug && i.log("scroll:", e, t), s.scrollingY && (this.content.position.y = -e), s.scrollingX && (this.content.position.x = -t), this.emit("scrollEvent", {
                                x: this.content.position.x,
                                y: this.content.position.y
                            }))
                        }), s), this.resetScrollSize(!0, !0), this.eventDispatch()
                    }
                    initMask() {
                        var t = new(tt().Sprite)(this.maskTexture);
                        t.width = this.contentWidth, t.height = this.contentHeight, this.view.addChild(t), this.view.mask = t
                    }
                    eventDispatch() {
                        this.view.interactive = !0, this.view.on("pointerdown", (t => {
                            var e;
                            if (this.debug && i.log("pointerdown"), this.enabled) {
                                var s = t.data.originalEvent;
                                null === (e = this.scrollContainer) || void 0 === e || e.doTouchStart(s.changedTouches || s.touches, s.timeStamp)
                            }
                        })), this.view.on("pointermove", (t => {
                            var e;
                            if (this.debug && i.log("pointermove"), this.enabled) {
                                var s = t.data.originalEvent;
                                null === (e = this.scrollContainer) || void 0 === e || e.doTouchMove(s.changedTouches || s.touches, s.timeStamp), this.emit("scrollMove")
                            }
                        })), this.view.on("pointerup", (t => {
                            var e;
                            if (this.debug && i.log("pointerup"), this.enabled) {
                                var s = t.data.originalEvent;
                                null === (e = this.scrollContainer) || void 0 === e || e.doTouchEnd(s.timeStamp)
                            }
                        })), this.view.on("pointerupoutside", (t => {
                            var e;
                            if (this.debug && i.log("pointerupoutside"), this.enabled) {
                                var s = t.data.originalEvent;
                                null === (e = this.scrollContainer) || void 0 === e || e.doTouchEnd(s.timeStamp)
                            }
                        }))
                    }
                    update() {
                        var t;
                        null === (t = this.scrollContainer) || void 0 === t || t.setDimensions(this.contentWidth, this.contentHeight, this.scrollWidth, this.scrollHeight)
                    }
                }
                class Qe extends PIXI.Container {
                    constructor(t) {
                        super(), this.app = void 0, this.animating = !1, this.renderY = 0, this.viewerData = [], this.scrollBox = void 0, this.viewerText = void 0, this.giftText = void 0, this.rankBackground = void 0, this.rankList = void 0, this.shareText = void 0, this.tipsText = void 0, this.hasScrollReport = !1, this.overTips = void 0, this.autoTicker = null, this.app = t, this.init(), this.visible = !1
                    }
                    init() {
                        this.position.set(be.toolWidth, be.headerHeight), this.initMask(), this.scrollBox = new Fe({
                            width: be.device.width - be.toolWidth,
                            height: be.device.height - be.headerHeight,
                            scrollerOptions: {
                                scrollingX: !1,
                                scrollingY: !0
                            }
                        }), this.scrollBox.on("scrollEvent", (() => {
                            this.hasScrollReport || (this.hasScrollReport = !0, Wt.send({
                                UIArea: 3604,
                                PositionID: 1,
                                ActionID: 21
                            })), Pt.updateRender()
                        })), this.scrollBox.on("scrollMove", (() => {
                            Pt.updateRender()
                        }));
                        this.viewerText = Pt.display.createText({
                            textString: `在线观众 (${this.viewerData.length}人)`,
                            textStyle: xe.dataStyle
                        }), this.viewerText.position.set(8, 0), this.giftText = Pt.display.createText({
                            textString: "贡献热度",
                            textStyle: xe.dataStyle
                        }), this.giftText.position.set(be.device.width - be.toolWidth - this.giftText.width - 8, 0), this.giftText.cacheAsBitmap = !0, this.tipsText = Pt.display.createText({
                            textString: "暂无在线观众，",
                            textStyle: xe.tipsStyle
                        }), this.tipsText.visible = !1, this.tipsText.cacheAsBitmap = !0, this.shareText = Pt.display.createText({
                            textString: "邀请朋友观看",
                            textStyle: xe.linkStyle,
                            isButton: !0
                        }), this.shareText.visible = !1, this.shareText.cacheAsBitmap = !0;
                        var t = (Ae.GIFT_HEIGHT - be.headerHeight - this.tipsText.height) / 2;
                        this.tipsText.position.set(56, t), this.shareText.position.set(56 + this.tipsText.width, t), this.shareText.on("pointertap", (() => {
                            Jt.shareToFriend()
                        })), this.rankBackground = Pt.display.createGraphics(), this.rankBackground.position.set(0, 0), this.rankList = Pt.display.createContainer(), this.rankList.position.set(0, 26), this.scrollBox.addChild(this.rankBackground, this.viewerText, this.giftText, this.rankList, this.tipsText, this.shareText), this.addChild(this.scrollBox.container), Ne(this.shareText, "userShare", (() => !this.app.animating && this.visible)), this.renderList()
                    }
                    initMask() {
                        var t = Pt.display.createGraphics();
                        t.beginFill(16777215, 1), Ye({
                            node: t,
                            x: 0,
                            y: 4 - be.headerHeight,
                            width: be.device.width - be.toolWidth - 4,
                            height: Ae.GIFT_HEIGHT,
                            radius: 4,
                            fill: {
                                color: 16777215,
                                alpha: 1
                            }
                        }), t.endFill(), this.addChild(t), this.mask = t, this.mask.scale.y = 0
                    }
                    renderRankBackground() {
                        this.rankBackground.clear(), this.rankBackground.beginFill(16777215, .1);
                        for (var t = 50, e = Math.min(Ae.MAX_USER_LENGTH, this.viewerData.length), i = 0; i < e; i++) this.rankBackground.drawRect(24, t, be.device.width - be.toolWidth - 24, 1), t += 32;
                        this.rankBackground.endFill()
                    }
                    renderList() {
                        var t = [];
                        if (this.rankList.children.length > 0 && (t = this.rankList.removeChildren()), 0 === this.viewerData.length) this.tipsText.visible = !0, this.shareText.visible = !0, this.viewerText.visible = !1, this.giftText.visible = !1, this.rankBackground.clear();
                        else {
                            this.renderY = 0, t.forEach(((t, e) => {
                                t.visible = !1, e > this.viewerData.length && t.destroy({
                                    children: !0,
                                    texture: !0,
                                    baseTexture: !0
                                })
                            }));
                            for (var e = Math.min(Ae.MAX_USER_LENGTH, this.viewerData.length), i = 0; i < e; i++) {
                                var s = this.viewerData[i];
                                s.rank = i + 1, this.renderItem(s, t[i])
                            }
                            this.tipsText.visible = !1, this.shareText.visible = !1, this.viewerText.visible = !0, this.giftText.visible = !0, this.viewerText.text = `在线观众 (${this.viewerData.length}人)`, this.renderRankBackground(), this.renderTips(), this.scrollBox.updateScrollSize({
                                height: this.rankList.y + this.rankList.height + 16
                            })
                        }
                    }
                    renderTips() {
                        this.viewerData.length > Ae.MAX_USER_LENGTH ? this.overTips ? this.overTips.visible = !0 : (this.overTips = Pt.display.createText({
                            textString: `只展示前${Ae.MAX_MESSAGE_LENGTH}位在线观众，完整列表请进视频号查看。`,
                            textStyle: xe.tipStyle
                        }), this.overTips.position.set((be.device.width - be.toolWidth - this.overTips.width) / 2, this.rankList.y + this.rankList.height + 16), this.overTips.cacheAsBitmap = !0, this.scrollBox.addChild(this.overTips)) : this.overTips && (this.overTips.visible = !1)
                    }
                    renderItem(t, e = null) {
                        var i = `${t.amount||t.rewardAmountInHeat||0}`,
                            s = Ae.RANK_COLORS[3];
                        t.rank < 4 && i && (s = Ae.RANK_COLORS[t.rank - 1]);
                        var n = e;
                        n ? (n.style.groupText = !1, n.text = i, n.visible = !0) : n = Pt.display.createText({
                            textString: i,
                            textStyle: xe.contextStyle
                        });
                        var o = we(t.nickname),
                            r = Pt.display.getTextScale(12);
                        n.style.groupText = [{
                            length: `${t.rank}`.length,
                            color: s,
                            paddingLeft: 8 / r,
                            absolute: !0
                        }, {
                            length: o.length,
                            color: "#ffffff",
                            paddingLeft: 24 / r,
                            absolute: !0
                        }, {
                            length: `${i}`.length,
                            color: "#ffffff",
                            paddingLeft: (be.device.width - be.toolWidth - 8 - n.width) / r,
                            absolute: !0
                        }], n.text = `${(+i?t.rank:"-")+o+i}`, n.position.set(0, this.renderY), this.rankList.addChild(n), this.renderY += 32
                    }
                    updateViewData(t) {
                        this.viewerData = t, this.renderList()
                    }
                    show(t) {
                        this.animating || (this.animating = !0, this.autoTicker && (clearTimeout(this.autoTicker), this.autoTicker = null), this.scrollBox.enable(), this.scrollBox.scrollTo(0, 0), this.alpha = 1, this.visible = !0, this.mask && Pt.tween(this.mask.scale).to({
                            y: 1
                        }, 500).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.animating = !1, t()
                        })).start(), Wt.send({
                            UIArea: 3604,
                            PositionID: 0,
                            ActionID: 1
                        }))
                    }
                    hide(t = !1, e) {
                        this.animating || (this.animating = !0, this.scrollBox.disable(), t && Pt.tween(this).to({
                            alpha: 0
                        }, 250).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.visible = !1
                        })).start(), this.mask && Pt.tween(this.mask.scale).to({
                            y: 0
                        }, 500).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.animating = !1, this.visible = !1, e()
                        })).start(), this.autoDestroy())
                    }
                    autoDestroy() {
                        this.autoTicker = setTimeout((() => {
                            this.rankList.removeChildren().forEach((t => {
                                t.destroy({
                                    children: !0,
                                    texture: !0,
                                    baseTexture: !0
                                })
                            })), this.autoTicker = null
                        }), 5e3)
                    }
                }
                var Je = o(715),
                    Ke = o.n(Je),
                    _e = o(469),
                    $e = o.n(_e);
                var {
                    onKeyboardComplete: ti,
                    _onKeyboardHeightChange: ei,
                    showKeyboard: ii,
                    hideKeyboard: si,
                    showToast: ni
                } = lt;

                function oi(t, e, i = !0) {
                    var s = t;
                    i && (s.on("touchstart", (() => {
                        s.style.opacity = .5
                    })), s.on("touchend", (() => {
                        s.style.opacity = 1
                    }))), s.on("click", (t => {
                        (function(t) {
                            var e = t.absoluteX,
                                i = t.absoluteY,
                                s = t.absoluteEndX,
                                n = t.absoluteEndY,
                                o = t.pressInterval,
                                r = !1;
                            return Math.abs(n - i) < 30 && Math.abs(s - e) < 30 && o < 300 && (r = !0), r
                        })(t) && e()
                    }))
                }

                function ri(t, e) {
                    var {
                        deviceOrientation: i,
                        screenHeight: s,
                        theme: n
                    } = e, o = t, r = (t = !0) => {
                        o.body.style.hidden = !0, o.keyboardVisible && si(), t && Wt.send({
                            SceneID: 52,
                            UIArea: 5201,
                            PositionID: 2,
                            ActionID: 2
                        })
                    };
                    ei((t => {
                        var {
                            height: e
                        } = t;
                        "portrait" === i ? o.container.style.bottom = e ? e - 24 : 0 : (o.container.style.bottom = e ? 88 : 0, o.bottomBar.style.bottom = e ? s - 24 - 64 - 8 - 80 - 16 - 40 : s - be.safeArea.bottom + 24), o.keyboardVisible = !!e
                    })), ti((t => {
                        var {
                            value: e
                        } = t, i = e.trim();
                        e ? (o.topicContent.value = i, o.topicContent.style.color = "dark" === n ? "#ffffffcc" : "#000000e6") : (o.topicContent.value = o.topicPlaceholder, o.topicContent.style.color = "dark" === n ? "#ffffff4d" : "#0000004d")
                    })), oi(o.mask, (() => {
                        o.keyboardVisible && si()
                    }), !1), oi(o.topLeft, r), oi(o.topicContainer, (() => {
                        var t = o.topicContent.value,
                            e = t && t !== o.topicPlaceholder ? t : "";
                        ii({
                            defaultValue: e,
                            maxLength: 60,
                            confirmType: "done"
                        })
                    })), oi(o.bottomBarButton, (() => {
                        var t = t => {
                            var e = t !== o.topicPlaceholder ? t : "";
                            e ? Jt.setGameLiveTopic(e, (t => {
                                var e = t.errMsg.indexOf("ok") > -1;
                                ni(e ? {
                                        title: "主题已修改",
                                        icon: "success",
                                        success() {
                                            r(!1)
                                        }
                                    } : {
                                        title: "修改失败",
                                        icon: "error"
                                    }),
                                    function(t) {
                                        Wt.send({
                                            SceneID: 52,
                                            UIArea: 5201,
                                            PositionID: 1,
                                            ActionID: 2,
                                            ActionStatus: t ? 1 : 2
                                        })
                                    }(e)
                            })) : ni({
                                title: "主题不能为空",
                                icon: "error"
                            })
                        };
                        o.keyboardVisible ? (si(), o.topicContent.nextUpdate().then((() => {
                            setTimeout((() => {
                                t(o.topicContent.value)
                            }), 100)
                        }))) : t(o.topicContent.value)
                    }))
                }
                var {
                    webviewLayout: ai,
                    getPrivateThis: hi,
                    init: li,
                    getSystemInfoSync: ci
                } = lt;

                function di() {
                    var t = hi(this),
                        e = ci(),
                        {
                            template: i,
                            style: s
                        } = function(t) {
                            var {
                                screenWidth: e,
                                screenHeight: i,
                                theme: s,
                                deviceOrientation: n
                            } = t, o = 24, r = "portrait" === n ? e : 414, a = {
                                body: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    hidden: !0,
                                    width: e,
                                    height: i,
                                    zIndex: 180
                                },
                                mask: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    backgroundColor: "#000000",
                                    opacity: .5,
                                    width: e,
                                    height: i
                                },
                                container: {
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: r,
                                    height: 362,
                                    borderRadius: 16,
                                    backgroundColor: "#FFFFFF"
                                },
                                topBar: {
                                    width: r,
                                    height: 64,
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    flexDirection: "row",
                                    justifyContent: "flex-start"
                                },
                                topLeft: {
                                    width: o,
                                    height: o,
                                    borderRadius: 12,
                                    backgroundColor: "#0000000d",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                topLeftClose: {
                                    width: 16,
                                    height: 16
                                },
                                topCenter: {
                                    fontSize: 15,
                                    fontWeight: 500,
                                    lineHeight: o,
                                    color: "#000000",
                                    textAlign: "center",
                                    width: r - 80,
                                    height: o
                                },
                                topRight: {
                                    width: o,
                                    height: o
                                },
                                topicContainer: {
                                    width: r,
                                    height: 96,
                                    marginTop: 8,
                                    paddingLeft: 24,
                                    paddingRight: 24
                                },
                                topicBox: {
                                    width: r - 48,
                                    height: 96,
                                    backgroundColor: "#0000000d",
                                    borderRadius: 4,
                                    padding: 12
                                },
                                topicContent: {
                                    color: "#0000004d",
                                    fontSize: 15,
                                    width: r - 48 - 24,
                                    height: 72,
                                    lineBreak: "break-word"
                                },
                                bottomBar: {
                                    width: r,
                                    height: 40,
                                    position: "absolute",
                                    left: 0,
                                    bottom: i - be.safeArea.bottom + 64,
                                    flexDirection: "row",
                                    justifyContent: "center"
                                },
                                bottomBarButton: {
                                    width: 184,
                                    height: 40,
                                    borderRadius: 4,
                                    backgroundColor: "#FF6146"
                                },
                                bottomBarButtonText: {
                                    width: 184,
                                    height: 40,
                                    fontSize: 17,
                                    fontWeight: 500,
                                    lineHeight: 40,
                                    color: "#FFFFFF",
                                    textAlign: "center"
                                }
                            };
                            return "landscape" === n && (a.container = {
                                ...a.container,
                                height: i - 24,
                                left: e / 2 - r / 2
                            }, a.bottomBar = {
                                ...a.bottomBar,
                                bottom: i - be.safeArea.bottom + 24
                            }), "dark" === s && (a.container.backgroundColor = "#2C2C2C", a.topicBox.backgroundColor = "#ffffff14", a.topLeft.backgroundColor = "#ffffff14", a.topCenter.color = "#ffffffcc", a.topicContent.color = "#ffffff4d"), {
                                template: `\n    <view id="body">\n      <view id="mask" bubble-event="true"></view>\n      <view id="container">\n        \n    <view id="topBar">\n      <view id="topLeft">\n        <image\n          id="topLeftClose"\n          bubble-event="true"\n          src="${"dark"===s?"https://mmgame.qpic.cn/image/27e171d7df75224f2b3bb01329d70a10518824fac004565e3a6c52de5920bb42/0":"https://mmgame.qpic.cn/image/c601982993f0fa2b769023aeee333088f9f3f4217c653425f293dc2ea34389bc/0"}"\n        />\n      </view>\n      <text id="topCenter" value="编辑主题"></text>\n      <view id="topRight"></view>\n    </view>\n  \n        \n    <view id="topicContainer">\n      <view id="topicBox" bubble-event="true">\n        <text id="topicContent" value="填写主题" bubble-event="true"></text>\n      </view>\n    </view>\n  \n        \n    <view id="bottomBar">\n      <view id="bottomBarButton" bubble-event="true">\n        <text id="bottomBarButtonText" bubble-event="true" value="完成"></text>\n      </view>\n    </view>\n  \n      </view>\n    </view>\n  `,
                                style: a
                            }
                        }(e),
                        {
                            root: n
                        } = $e()(i);
                    return li.call(this, n, s), ai.add(t.body), ri(t, e), t.body.ready()
                }
                var ui, {
                    Component: gi,
                    getPrivateThis: pi,
                    removePrivateThis: vi,
                    registerComponent: mi,
                    unregisterComponent: fi,
                    _offKeyboardHeightChange: wi,
                    offKeyboardComplete: Ai
                } = lt;
                class bi extends gi {
                    constructor() {
                        super();
                        var t = pi(this);
                        t.xom = "", t.style = "", t.keyboardVisible = !1, t.topicPlaceholder = "填写主题", di.call(this).then((() => {
                            mi({
                                component: this,
                                getVisibleAera: () => t.style.body
                            })
                        }))
                    }
                    destroy() {
                        fi(this), vi(this), wi(), Ai(), ui = null
                    }
                    show(t) {
                        var e = pi(this);
                        t && (e.topicContent.value = t, e.topicContent.style.color = "#000000e6"), e.body.style.hidden = !1, Wt.send({
                            SceneID: 52,
                            UIArea: 5201,
                            PositionID: 0,
                            ActionID: 1
                        })
                    }
                }
                const yi = () => ui || (ui = new bi);
                var {
                    privateOpenUrl: Ti
                } = lt;
                class xi extends PIXI.Container {
                    constructor(t) {
                        var e, i;
                        super(), this.app = void 0, this.liveData = {
                            headerUrl: "https://mmgame.qpic.cn/image/33e09bb06dc27e8aa876d96d003b3a2f1941346190bc1db68f6735bcdecf65f5/0",
                            nickname: "用户昵称"
                        }, this.paddingTop = Ae.PADDING, this.background = void 0, this.tips = void 0, this.liveIcon = void 0, this.liveName = void 0, this.liveTime = void 0, this.liveTimeIcon = void 0, this.buttonTimeline = void 0, this.buttonShare = void 0, this.buttonFans = void 0, this.buttonPlay = void 0, this.buttonTopic = void 0, this.buttonFeedback = void 0, this.buttonExit = void 0, this.buttonReturn = void 0, this.buttonMic = void 0, this.buttonMicRedTex = void 0, this.buttonMicGrayTex = void 0, this.buttonMusic = void 0, this.buttonMusicOnTex = void 0, this.buttonMusicOffTex = void 0, this.textMusicName = void 0, this.scrollTopBox = void 0, this.scrollBottomBox = void 0, this.liveTimeTicker = null, this.toastNode = void 0, this.showButtonFansClub = !1, this.showButtonPlayTogether = void 0, this.showFeedback = !1, this.showButtonFansClub = !1, this.showFeedback = !(null === (e = fe()) || void 0 === e || null === (i = e.miniProgram) || void 0 === i || !i.appId), this.app = t, this.init(), this.initMask(), this.visible = !1
                    }
                    init() {
                        this.setData(), this.position.set(be.toolWidth, 0), this.initBackground();
                        var t = Pt.display.createGraphics();
                        this.initTopArea(t), this.initScrollTopBox(), this.initScrollBottomBox(), this.initBottomArea(), this.addChild(this.background, this.liveName, this.liveTime, this.liveTimeIcon, this.scrollTopBox.container, this.scrollBottomBox.container, this.tips, this.buttonExit, this.buttonReturn, this.liveIcon, t), Ne(this.buttonTimeline, "moreTimeline", (() => !this.app.animating && this.visible)), Ne(this.buttonShare, "moreShare", (() => !this.app.animating && this.visible)), Ne(this.buttonExit, "moreExit", (() => !this.app.animating && this.visible)), Ne(this.buttonMic, "moreMic", (() => !this.app.animating && this.visible)), Ne(this.buttonReturn, "moreReturn", (() => !this.app.animating && this.visible))
                    }
                    setData() {
                        Oe.account && (this.liveData.headerUrl === Oe.account.headerUrl && this.liveData.nickname === Oe.account.nickname || (this.liveData = Oe.account, this.liveIcon && (this.liveIcon.texture = Pt.display.createTextureFrom({
                            url: this.liveData.headerUrl
                        })), this.liveName && (this.liveName.text = this.liveData.nickname)))
                    }
                    initBackground() {
                        this.background = Pt.display.createGraphics(), Ye({
                            node: this.background,
                            x: 0,
                            y: this.paddingTop,
                            width: be.device.width - be.toolWidth - 4,
                            height: be.designSize.height - 8,
                            radius: 8,
                            fill: {
                                color: 2894892,
                                alpha: 1
                            }
                        }), this.background.beginFill(16777215, .1), this.background.drawRect(0, this.paddingTop + 47, be.device.width - be.toolWidth, 1), this.background.drawRect(8, this.paddingTop + 122, be.device.width - be.toolWidth, 1), this.background.endFill()
                    }
                    initMask() {
                        var t = Pt.display.createGraphics();
                        t.beginFill(16777215, 1), t.drawRect(0, 0, be.device.width - be.toolWidth - 4, be.device.height), t.endFill(), this.addChild(t), this.mask = t, this.mask.scale.x = 0
                    }
                    initTopArea(t) {
                        this.liveIcon = Pt.display.createSpriteFrom({
                            url: this.liveData.headerUrl
                        }), this.liveIcon.width = 32, this.liveIcon.height = 32, this.liveIcon.position.set(8, this.paddingTop + 8), t.beginFill(16777215, 1), t.drawCircle(24, this.paddingTop + 24, 16), t.endFill(), this.liveIcon.mask = t;
                        var e = ge(this.liveData.nickname, xe.titleStyle);
                        this.liveName = Pt.display.createText({
                            textString: e,
                            textStyle: xe.titleStyle
                        }), this.liveName.position.set(48, this.paddingTop + 8), this.liveTime = Pt.display.createText({
                            textStyle: xe.timeStyle
                        }), this.liveTime.position.set(58, this.paddingTop + 26), this.liveTime.alpha = .5;
                        this.liveTimeIcon = Pt.display.createGraphics(), this.liveTimeIcon.beginFill(16777215, .5), this.liveTimeIcon.drawCircle(51, this.paddingTop + 30 + 3, 3), this.liveTimeIcon.endFill(), this.liveTimeIcon.cacheAsBitmap = !0, this.buttonExit = Pt.display.createSprite({
                            key: "more/exit.png",
                            isButton: !0,
                            width: 70,
                            height: 32
                        }), this.buttonExit.position.set(be.device.width - be.toolWidth - 80, this.paddingTop + 8), Pt.display.setHitArea(this.buttonExit, {
                            x: -10,
                            y: -10,
                            width: 90,
                            height: 52
                        }), this.buttonExit.on("pointertap", (() => {
                            Jt.exitGameLive()
                        }))
                    }
                    initBottomArea() {
                        this.tips = Pt.display.createSprite({
                            key: "more/tips.png"
                        }), this.tips.width = 268, this.tips.height = 26, this.tips.position.set(0, 216), this.buttonReturn = Pt.display.createGraphics(), this.buttonReturn.beginFill(3355443, .3), this.buttonReturn.drawRect(0, 0, 86, 38), Pt.display.setHitArea(this.buttonReturn, {
                            x: -10,
                            y: -10,
                            width: 106,
                            height: 58
                        }), this.buttonReturn.endFill(), this.buttonReturn.alpha = .3, this.buttonReturn.interactive = !0, this.buttonReturn.on("pointerup", (() => {
                            this.buttonReturn.alpha = .3
                        })), this.buttonReturn.on("pointerdown", (() => {
                            this.buttonReturn.alpha = 1
                        })), this.buttonReturn.on("pointerupoutside", (() => {
                            this.buttonReturn.alpha = .3
                        })), this.buttonReturn.on("pointertap", (() => {
                            Jt.enterGameLiveRoom()
                        })), this.buttonReturn.x = 168, this.buttonReturn.y = 216
                    }
                    initScrollTopBox() {
                        var t = be.designSize.width - be.toolWidth - 4,
                            e = 60,
                            i = 58;
                        Jt.checkPlayTogether((t => {
                            t && (this.showButtonPlayTogether = t, this.renderAndUpdateButtons({
                                buttonMarginTop: 8,
                                buttonMarginLeft: 0,
                                buttonHeight: i,
                                buttonWidth: e
                            })), (t && (this.showButtonFansClub || this.showFeedback) || !t && this.showButtonFansClub && this.showFeedback) && this.scrollTopBox.enable(), Oe.emit("teamupConfigChange", t)
                        })), this.scrollTopBox = new Fe({
                            width: t,
                            height: 74,
                            scrollerOptions: {
                                scrollingX: !0,
                                scrollingY: !1
                            }
                        }), this.scrollTopBox.setPosition(0, this.paddingTop + be.headerHeight), this.scrollTopBox.updateScrollSize({
                            height: 74,
                            width: this.showButtonFansClub ? 360 : 300
                        }), this.scrollTopBox.disable(), this.scrollTopBox.on("scrollEvent", (() => {
                            Pt.updateRender()
                        })), this.scrollTopBox.on("scrollMove", (() => {
                            Pt.updateRender()
                        })), this.buttonShare = Pt.display.createSprite({
                            key: "more/button_share.png",
                            isButton: !0
                        }), this.buttonShare.width = e, this.buttonShare.height = i, this.buttonShare.position.set(0, 8), this.buttonShare.on("pointertap", (() => {
                            Jt.shareToFriend()
                        })), this.buttonTimeline = Pt.display.createSprite({
                            key: "more/button_timeline.png",
                            isButton: !0
                        }), this.buttonTimeline.width = e, this.buttonTimeline.height = i, this.buttonTimeline.position.set(60, 8), this.buttonTimeline.on("pointertap", (() => {
                            Jt.shareToTimeline()
                        })), this.buttonTopic = Pt.display.createSprite({
                            key: "more/button_topic.png",
                            isButton: !0
                        }), this.buttonTopic.width = e, this.buttonTopic.height = i, this.buttonTopic.position.set(120, 8), this.buttonTopic.on("pointertap", Ke()((function*() {
                            yield Oe.getRoomInfo(), yi().show(Oe.liveTopic), Wt.send({
                                UIArea: 3605,
                                PositionID: 8,
                                ActionID: 2
                            })
                        }))), this.scrollTopBox.addChild(this.buttonShare, this.buttonTimeline, this.buttonTopic), this.showFeedback && (this.buttonFeedback = Pt.display.createSprite({
                            key: "more/button_ifeedback.png",
                            isButton: !0
                        }), this.buttonFeedback.width = e, this.buttonFeedback.height = i, this.buttonFeedback.position.set(0 + (this.showButtonFansClub ? 240 : 180), 8), this.buttonFeedback.on("pointertap", (() => {
                            var t, e;
                            Ti({
                                url: `https://mp.weixin.qq.com/mp/wapreportwxadevlog?action=get_page&appid=${null===(t=fe())||void 0===t||null===(e=t.miniProgram)||void 0===e?void 0:e.appId}&selectedReason=8#wechat_redirect`
                            }), Wt.send({
                                UIArea: 3605,
                                PositionID: 10,
                                ActionID: 2
                            })
                        })), this.scrollTopBox.addChild(this.buttonFeedback)), this.showButtonFansClub && (this.buttonFans = Pt.display.createSprite({
                            key: "more/button_fans.png",
                            isButton: !0
                        }), this.buttonFans.width = e, this.buttonFans.height = i, this.buttonFans.position.set(180, 8), this.scrollTopBox.addChild(this.buttonFans), this.buttonFans.on("pointertap", (() => {
                            Jt.openFansClub()
                        })))
                    }
                    initScrollBottomBox() {
                        var t = be.designSize.width - be.toolWidth - 4;
                        this.scrollBottomBox = new Fe({
                            width: t,
                            height: 88,
                            scrollerOptions: {
                                scrollingX: !0,
                                scrollingY: !1
                            }
                        }), this.scrollBottomBox.setPosition(0, this.paddingTop + 123), this.scrollBottomBox.updateScrollSize({
                            height: 88,
                            width: 300
                        }), this.scrollBottomBox.disable(), this.scrollBottomBox.on("scrollEvent", (() => {
                            Pt.updateRender()
                        })), this.scrollBottomBox.on("scrollMove", (() => {
                            Pt.updateRender()
                        })), this.buttonMicRedTex = Pt.display.getTexture("more/button_mic-red.png"), this.buttonMicGrayTex = Pt.display.getTexture("more/button_mic-gray.png"), this.buttonMic = Pt.display.createSprite({
                            key: "more/button_mic-red.png",
                            isButton: !0
                        }), this.buttonMic.width = 60, this.buttonMic.height = 72, this.buttonMic.position.set(0, 8), this.buttonMusicOnTex = Pt.display.getTexture("tool/music-on.png"), this.buttonMusicOffTex = Pt.display.getTexture("tool/music-off.png"), this.buttonMusic = Pt.display.createSprite({
                            key: "tool/music-off.png",
                            isButton: !0
                        }), this.buttonMusic.visible = !1, this.buttonMusic.width = 60, this.buttonMusic.height = 72, this.buttonMusic.position.set(60, 8), this.textMusicName = Pt.display.createText({
                            textStyle: xe.musicNameStyle
                        }), this.textMusicName.position.set(90, 67), this.textMusicName.anchor.set(.5, 0), this.textMusicName.visible = !1, this.buttonMusic.on("pointertap", (() => {
                            var t;
                            t = Oe.isMusicPlaying, Wt.send({
                                SceneID: 36,
                                UIArea: 3605,
                                PositionID: 9,
                                ActionID: 2,
                                ExternInfo: encodeURIComponent(JSON.stringify({
                                    BGMPlay: t ? 1 : 0
                                }))
                            }), Jt.openMusic()
                        })), Jt.getMusicState((t => {
                            this.buttonMusic.visible = (null == t ? void 0 : t.enableSettingBGMusic) || !1, this.textMusicName.visible = (null == t ? void 0 : t.enableSettingBGMusic) || !1, this.musicStateHandler(t)
                        })), Oe.on("musicStateChange", this.musicStateHandler.bind(this)), this.buttonMic.on("pointertap", (() => {
                            this.showToast("麦克风已打开"), Jt.getMicState((t => {
                                var e = !!t.mute;
                                Jt.micOp(e, (e => {
                                    e.errMsg.indexOf("ok") > -1 && (!t.mute ? (this.buttonMic.texture = this.buttonMicRedTex, this.showToast("麦克风已关闭")) : (this.buttonMic.texture = this.buttonMicGrayTex, this.showToast("麦克风已打开")))
                                }))
                            }))
                        })), this.scrollBottomBox.addChild(this.buttonMic, this.buttonMusic, this.textMusicName)
                    }
                    renderAndUpdateButtons(t) {
                        var {
                            buttonWidth: e,
                            buttonMarginLeft: i,
                            buttonHeight: s,
                            buttonMarginTop: n
                        } = t;
                        this.buttonPlay = Pt.display.createSprite({
                            key: "more/button_play.png"
                        }), this.buttonPlay.width = e, this.buttonPlay.height = s, this.buttonPlay.position.set(i + 2 * e, n), this.scrollTopBox.addChild(this.buttonPlay), this.changeButtonPlayEvent(!1), this.buttonTopic.position.set(i + 3 * e, n), this.showButtonFansClub && this.buttonFans.position.set(i + 4 * e, n), this.showFeedback && this.buttonFeedback.position.set(i + (this.showButtonFansClub ? 5 * e : 4 * e), n), this.visible && Yt()
                    }
                    changeButtonPlayEvent(t) {
                        t ? (Pt.display.removeButton(this.buttonPlay), Pt.display.isButton(this.buttonPlay), this.buttonPlay.alpha = 1, this.buttonPlay.on("pointertap", (() => {
                            Jt.openPlayTogether()
                        }))) : (Pt.display.removeButton(this.buttonPlay), this.buttonPlay.interactive = !0, this.buttonPlay.alpha = .3, this.buttonPlay.on("pointertap", (() => {
                            this.showToast("当前游戏状态暂不能发起一起玩", {
                                customX: 8,
                                customY: 65
                            })
                        })))
                    }
                    getPlayTogetherStatus() {
                        return this.showButtonPlayTogether
                    }
                    refreshTime() {
                        var t = Math.round(Date.now() / 1e3) - Oe.liveStartTime,
                            e = Math.floor(t / 3600),
                            i = Math.floor((t - 3600 * e) / 60),
                            s = t - 3600 * e - 60 * i;
                        e < 10 && (e = `0${e}`), i < 10 && (i = `0${i}`), s < 10 && (s = `0${s}`), this.liveTime && (this.liveTime.text = `${e}:${i}:${s}`)
                    }
                    showToast(t, e) {
                        var i, s, n, o = null !== (i = null == e ? void 0 : e.customX) && void 0 !== i ? i : 64,
                            r = null !== (s = null == e ? void 0 : e.customY) && void 0 !== s ? s : 69,
                            a = Pt.display.renderLabel({
                                textString: t,
                                textStyle: xe.toastStyle,
                                padding: {
                                    top: 6,
                                    bottom: 6,
                                    left: 12,
                                    right: 12
                                },
                                backgroundColor: {
                                    fill: 1710618,
                                    alpha: 1
                                },
                                backgroundRadius: 4,
                                getLabelContainer: this.toastNode
                            });
                        this.toastNode || (this.toastNode = a.labelContainer, this.addChild(this.toastNode)), null === (n = this.toastNode) || void 0 === n || n.position.set(o, r), We(Ae.TOAST_ANIMATE_ID, this.toastNode)
                    }
                    show(t) {
                        Wt.send({
                            UIArea: 3605,
                            PositionID: 0,
                            ActionID: 1
                        }), Wt.send({
                            UIArea: 3605,
                            PositionID: 2,
                            ActionID: 1
                        }), Wt.send({
                            UIArea: 3605,
                            PositionID: 3,
                            ActionID: 1
                        }), Wt.send({
                            UIArea: 3605,
                            PositionID: 8,
                            ActionID: 1
                        }), Wt.send({
                            UIArea: 3605,
                            PositionID: 10,
                            ActionID: 1
                        }), this.showButtonFansClub && Wt.send({
                            UIArea: 3605,
                            PositionID: 7,
                            ActionID: 1
                        }), this.showButtonPlayTogether && Yt(), this.alpha = 1, this.visible = !0, this.liveTimeFade(), Jt.getMicState((t => {
                            t.mute ? this.buttonMic.texture = this.buttonMicRedTex : this.buttonMic.texture = this.buttonMicGrayTex
                        })), this.mask && Pt.tween(this.mask.scale).to({
                            x: 1
                        }, 500).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            t()
                        })).start(), this.refreshTime()
                    }
                    hide(t = !1, e) {
                        t && Pt.tween(this).to({
                            alpha: 0
                        }, 250).easing(x.Easing.Quadratic.InOut).start(), this.mask ? Pt.tween(this.mask.scale).to({
                            x: 0
                        }, 500).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.close(), e()
                        })).start() : this.close()
                    }
                    close() {
                        this.visible = !1, this.removeTicker()
                    }
                    liveTimeFade() {
                        this.removeTicker(), this.liveTimeIcon.alpha = 1, this.liveTimeTicker = Pt.tween(this.liveTimeIcon).to({
                            alpha: 0
                        }, 500).yoyo(!0).easing(x.Easing.Quadratic.InOut).repeat(1 / 0).onRepeat((() => {
                            this.refreshTime()
                        })).start()
                    }
                    musicStateHandler(t) {
                        Oe.isMusicPlaying ? this.buttonMusic.texture = this.buttonMusicOnTex : this.buttonMusic.texture = this.buttonMusicOffTex;
                        var e = Oe.isMusicPlaying ? "已打开" : "未打开";
                        Oe.isMusicPlaying && null != t && t.musicName && (e = t.musicName), this.textMusicName.text = ge(e, this.textMusicName.style)
                    }
                    removeTicker() {
                        this.liveTimeTicker && (Pt.removeTween(this.liveTimeTicker), this.liveTimeTicker = null)
                    }
                }
                var Si = {
                        width: Ae.MAX_WIDTH,
                        height: Ae.MAX_HEIGHT
                    },
                    Pi = [{
                        left: 0,
                        top: 0,
                        width: be.toolWidth,
                        height: Si.height
                    }, {
                        left: 0,
                        top: 0,
                        width: Si.width,
                        height: be.headerHeight
                    }],
                    Ci = [{
                        left: 0,
                        top: 0,
                        width: Si.width,
                        height: Si.height
                    }],
                    Di = {
                        left: .5 * be.toolWidth - 4,
                        top: -4,
                        width: 1.5 * be.toolWidth + 8,
                        height: be.toolWidth + 8
                    },
                    Mi = [Di],
                    zi = [Di],
                    Ii = () => {
                        Pt.touch && (Pt.touch.dragArea = Pi, Pt.touch.preventArea = Ci)
                    };
                class ki extends PIXI.Container {
                    constructor(t) {
                        super(), this.app = void 0, this.newMessageCount = 0, this.hasScrollReport = !1, this.scrollBox = void 0, this.enterBox = void 0, this.newMessage = void 0, this.chatBox = void 0, this.systemTipsBox = void 0, this.systemTipsContainer = void 0, this.systemTipsFirstTime = !0, this.systemTipsContentList = [], this.overTips = void 0, this.isFading = !1, this.autoFade = void 0, this.renderY = 0, this.nextTicker = 0, this.titleTicker = 0, this.app = t, this.init()
                    }
                    init() {
                        this.scrollBox = new Fe({
                            width: be.designSize.width - be.toolWidth,
                            height: be.designSize.height - be.headerHeight,
                            maskTexture: Pt.display.getTexture("mask/rect.png"),
                            scrollerOptions: {
                                scrollingX: !1,
                                scrollingY: !0
                            }
                        }), this.scrollBox.on("scrollEvent", (() => {
                            this.hasScrollReport || (this.hasScrollReport = !0, Wt.send({
                                UIArea: 3603,
                                PositionID: 1,
                                ActionID: 21
                            })), this.scrollBox.isBottom && this.hideNewNessage(), Pt.updateRender()
                        })), this.scrollBox.on("scrollMove", (() => {
                            Pt.updateRender()
                        })), this.scrollBox.setPosition(be.toolWidth, be.headerHeight), this.renderY = 2, this.chatBox = Pt.display.createContainer(), this.scrollBox.addChild(this.chatBox), this.enterBox = Pt.display.createContainer(), this.enterBox.position.set(be.toolWidth, be.headerHeight + 2), this.systemTipsBox = Pt.display.createContainer(), this.systemTipsBox.position.set(be.toolWidth + 8, be.headerHeight + 4), this.addChild(this.scrollBox.container, this.enterBox, this.systemTipsBox), Oe.on("systemTipsUpdate", (() => {
                            this.systemTipsContentList.length && this.renderSystemTipsMessage(this.systemTipsContentList[0])
                        })), this.updateSystemTips({
                            tipsType: Ht.Share,
                            closeCallback: () => {
                                jt(Ht.Share)
                            },
                            contentConf: {
                                normal: "发送给朋友或分享到朋友圈，一起围观你的精彩，",
                                highlight: "去分享",
                                callback: () => {
                                    this.app.locked ? this.app.unlock({
                                        unlockTweenCb: () => {
                                            this.app.toggleMoreView()
                                        }
                                    }) : this.app.toggleMoreView()
                                }
                            }
                        }), this.titleTicker = setTimeout((() => {
                            var t;
                            Oe.liveTopic || this.updateSystemTips({
                                tipsType: Ht.SetTopic,
                                closeCallback: () => {
                                    jt(Ht.SetTopic)
                                },
                                contentConf: {
                                    normal: "写个主题，据说能吸引更多粉丝，",
                                    highlight: "去填写",
                                    callback: (t = Ke()((function*() {
                                        var t;
                                        yield Oe.getRoomInfo(), yi().show(null !== (t = Oe.liveTopic) && void 0 !== t ? t : "")
                                    })), function() {
                                        return t.apply(this, arguments)
                                    })
                                }
                            })
                        }), 3e3), Wt.send({
                            UIArea: 3603,
                            PositionID: 0,
                            ActionID: 1
                        })
                    }
                    updateSystemTips(t) {
                        this.systemTipsContentList.push(t), 1 === this.systemTipsContentList.length && Oe.emit("systemTipsUpdate")
                    }
                    removeSystemTips(t) {
                        if (!this.isFading) {
                            this.isFading = !0;
                            var {
                                callback: e
                            } = t;
                            this.autoFade.stop(), this.autoFade = Pt.tween(this.systemTipsContainer).to({
                                alpha: 0
                            }, 300).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                                this.isFading = !1, e && e(), this.systemTipsContainer.visible = !1, this.systemTipsContainer.alpha = 1, this.systemTipsContentList.shift(), Pt.touch && (Mi.splice(1, Mi.length), Oe.locked && (Pt.touch.preventArea = Mi)), this.nextTicker = setTimeout((() => {
                                    Oe.emit("systemTipsUpdate")
                                }), 5e3)
                            })).start()
                        }
                    }
                    updateMessage(t) {
                        t && (t.msgType === kt.Audience_Join ? this.renderEnterMessage(t) : this.renderMessage(t), Pt.updateRender())
                    }
                    renderNewMessage() {
                        var t = `${Math.min(this.newMessageCount,Ae.MAX_MESSAGE_LENGTH)}条新消息`,
                            e = be.toolWidth + 8,
                            i = be.device.height - 20 - 8,
                            s = {
                                top: 6,
                                bottom: 6,
                                left: 8,
                                right: 24
                            },
                            n = {
                                fill: 16777215,
                                alpha: 1
                            };
                        if (this.newMessage) {
                            var o = this.newMessage.children[1],
                                r = this.newMessage.children[2];
                            Pt.display.renderLabel({
                                textString: t,
                                textStyle: xe.newMessageStyle,
                                padding: s,
                                backgroundColor: n,
                                backgroundRadius: 12,
                                getLabelContainer: this.newMessage
                            }), this.newMessage.position.set(e, i), r.position.x = 8 + o.width + 4
                        } else {
                            var a = Pt.display.renderLabel({
                                textString: t,
                                textStyle: xe.newMessageStyle,
                                padding: s,
                                backgroundColor: n,
                                backgroundRadius: 12
                            });
                            this.newMessage = a.labelContainer, this.newMessage.position.set(e, i), Pt.display.removeButton(this.newMessage), Pt.display.isButton(this.newMessage), this.newMessage.on("pointertap", (() => {
                                this.scrollBox.scrollToBottom()
                            })), this.addChild(this.newMessage), Ne(this.newMessage, "chatNew", (() => !this.app.animating && this.visible && this.newMessage.visible));
                            var h = Pt.display.createSprite({
                                key: "icon/arrow-outlined.png"
                            });
                            h.position.set(8 + a.labelText.width + 4, 6), h.width = 12, h.height = 12, this.newMessage.addChild(h), Pt.display.setHitArea(this.newMessage, {
                                x: -this.newMessage.width / 2,
                                y: -this.newMessage.height / 2,
                                width: 2 * this.newMessage.width,
                                height: 2 * this.newMessage.height
                            })
                        }
                        this.newMessage.visible = !0
                    }
                    hideNewNessage() {
                        this.newMessage && (this.newMessage.visible = !1), this.newMessageCount = 0
                    }
                    renderEnterMessage(t) {
                        var e = `${we(t.senderNickName)} ${t.content}`,
                            i = this.enterBox.children[0],
                            s = Pt.display.renderLabel({
                                textString: e,
                                textStyle: xe.joinStyle,
                                padding: {
                                    top: 0,
                                    bottom: 0,
                                    left: 8,
                                    right: 8
                                },
                                backgroundColor: {
                                    fill: 3355443,
                                    alpha: 1
                                },
                                backgroundRadius: 12,
                                getLabelContainer: i
                            });
                        i || (i = s.labelContainer, this.enterBox.addChild(i)), i.position.set(8, 0), We(Ae.ENTER_ANIMATE_ID, i)
                    }
                    renderSystemTipsMessage(t) {
                        var e, i, s, n, {
                                closeCallback: o,
                                contentConf: r,
                                containerConf: a = {},
                                tipsType: h
                            } = t,
                            {
                                fadeCallBack: l
                            } = a;
                        ! function(t) {
                            Wt.send({
                                UIArea: 3607,
                                PositionID: 0,
                                ActionID: 1,
                                ExternInfo: Ot[t]
                            })
                        }(h), this.systemTipsContainer = null !== (e = this.systemTipsBox.children[0]) && void 0 !== e ? e : null, this.systemTipsContainer ? (s = this.systemTipsContainer.children[0], n = this.systemTipsContainer.children[1], i = this.systemTipsContainer.children[2]) : (this.systemTipsContainer = Pt.display.createContainer(), s = Pt.display.createGraphics(), (n = Pt.display.createText({
                            textStyle: xe.systemTipsStyle
                        })).position.set(32, 4), n.interactive = !0, (i = Pt.display.createSprite({
                            key: "more/button_tips-close.png"
                        })).width = 16, i.height = 16, Pt.display.removeButton(i), Pt.display.isButton(i), this.systemTipsContainer.addChild(s, n, i), this.systemTipsBox.addChild(this.systemTipsContainer)), i.on("pointertap", (() => {
                            this.removeSystemTips({
                                callback: o
                            })
                        })), this.systemTipsContainer.visible = !0, this.autoFade = Pt.tween({}).delay(1e4).onComplete((() => {
                            this.removeSystemTips({
                                callback: l
                            })
                        })).start();
                        var c = n.height;
                        this.reduceSystemTipsMsg(r, n, h);
                        var d, u = n.height;
                        if (u !== c || this.systemTipsFirstTime) {
                            this.systemTipsFirstTime = !1;
                            var g = u + 8,
                                p = be.device.width - be.toolWidth - 12;
                            s.clear(), Ye({
                                node: s,
                                width: p,
                                height: g,
                                radius: 8,
                                fill: {
                                    color: 16761600,
                                    alpha: 1
                                }
                            }), i.position.set(8, (g - i.height) / 2), Pt.display.setHitArea(i, {
                                x: 0,
                                y: 0,
                                width: 32,
                                height: g
                            }), d = {
                                left: this.systemTipsBox.position.x,
                                top: this.systemTipsBox.position.y,
                                width: p,
                                height: g
                            }, Pt.touch && (Mi.push(d), Oe.locked && (Pt.touch.preventArea = Mi))
                        }
                    }
                    reduceSystemTipsMsg(t, e, i) {
                        var s = e,
                            {
                                normal: n = "",
                                highlight: o = "",
                                callback: r
                            } = t;
                        Pt.display.removeButton(s), Pt.display.isButton(s), s.on("pointertap", (() => {
                            this.removeSystemTips({
                                    callback: r
                                }),
                                function(t) {
                                    Wt.send({
                                        UIArea: 3607,
                                        PositionID: 0,
                                        ActionID: 2,
                                        ExternInfo: Ot[t]
                                    })
                                }(i)
                        })), s.style.groupText = [{
                            length: n.length
                        }, {
                            length: o.length,
                            color: "#ff6146"
                        }], s.text = n + o
                    }
                    renderMessage(t) {
                        var e, i, s = !(t.msgType !== kt.ComboLiveReward),
                            n = !(t.msgType !== kt.RewardRankingNotice),
                            o = !!t.rankingPosition,
                            r = !(t.msgType !== kt.First_Notice),
                            a = !(t.msgType !== kt.Official),
                            h = !(t.msgType !== kt.Anchor_Notice),
                            l = this.chatBox.children.length >= Ae.MAX_MESSAGE_LENGTH,
                            c = 0;
                        l ? ([e] = this.chatBox.children, c = e.contentHeight, e.removeChildren(), this.renderTips()) : e = Pt.display.createContainer(), e.position.set(0, this.renderY);
                        var d = 0;
                        (s || n || o || r || a || h) && (s ? i = Pt.display.createSprite({
                            key: "label/label_gift.png"
                        }) : r || n || a ? i = Pt.display.createSprite({
                            key: "label/label_notice.png"
                        }) : o ? i = Pt.display.createSprite({
                            key: `label/label_${t.rankingPosition}.png`
                        }) : h && (i = Pt.display.createSprite({
                            key: "label/label_theme.png"
                        }), t.content = t.content ? t.content : "无主题描述"), i && (i.width = i.width / 3, i.height = i.height / 3, i.position.set(8, 0), e.addChild(i), e.label = i, d = (i.width + 4) / Pt.display.getTextScale(12)));
                        var u, g, p, v = we(t.senderNickName);
                        if (g = v && !s ? `${v}：` : v && s ? `${v} ` : "", (p = l ? e.messageNode : Pt.display.createText({
                                textStyle: xe.contextStyle
                            })).style.firstLine = d, p.style.groupText = [{
                                length: g.length,
                                color: "#e0e0e0",
                                paddingLeft: d
                            }, {
                                length: (t.content || "").length,
                                color: "#ffffff",
                                firstLine: d
                            }], p.text = g + t.content, p.position.set(8, 0), e.addChild(p), s) {
                            var m;
                            e.gift ? (m = e.gift).texture = Pt.display.createTextureFrom({
                                url: t.rewardThumbUrl
                            }) : ((m = Pt.display.createSpriteFrom({
                                url: t.rewardThumbUrl
                            })).width = 16, m.height = 16), m.position.set(8 + p.width, 0), e.addChild(m), e.gift = m;
                            var f = `x${t.comboRewardCount||1}`;
                            p.style.groupText.push({
                                length: f.length,
                                color: "#ffffff",
                                paddingLeft: d + 18 / Pt.display.getTextScale(12)
                            }), p.text = g + t.content + f
                        }
                        u = p.height + 4, e.messageNode = p, e.contentHeight = u;
                        var {
                            isBottom: w
                        } = this.scrollBox;
                        this.chatBox.addChild(e), l && (this.chatBox.children.forEach((t => {
                            t.y -= c
                        })), this.renderY -= c), this.renderY += u, this.scrollBox.updateScrollSize({
                            height: this.chatBox.height + 8
                        }), w || this.app.locked ? this.scrollBox.scrollToBottom() : (this.newMessageCount += 1, this.renderNewMessage(), this.scrollBox.scrollTo(0, Math.max(this.scrollBox.top - c, 0)))
                    }
                    renderTips() {
                        this.overTips || (this.overTips = Pt.display.createText({
                            textString: `只展示最新的${Ae.MAX_MESSAGE_LENGTH}条消息，更多请进视频号查看`,
                            textStyle: xe.tipStyle
                        }), this.overTips.position.set((be.device.width - be.toolWidth - this.overTips.width) / 2, -8 - this.overTips.height), this.overTips.cacheAsBitmap = !0, this.scrollBox.addChild(this.overTips))
                    }
                    lock() {
                        this.hideNewNessage(), this.scrollBox.disable();
                        var t = {
                            height: be.designSize.height - be.headerHeight
                        };
                        Pt.tween(t).to({
                            height: be.lockSize.height - be.headerHeight
                        }, 500).easing(x.Easing.Quadratic.InOut).onUpdate((() => {
                            Pt.updateRender(), this.scrollBox.updateContentSize({
                                height: t.height
                            }), this.scrollBox.updateScrollSize({
                                height: this.chatBox.height + 8
                            }), this.scrollBox.scrollToBottom()
                        })).start()
                    }
                    unlock() {
                        this.scrollBox.enable();
                        var t = {
                            height: be.lockSize.height - be.headerHeight
                        };
                        Pt.tween(t).to({
                            height: be.designSize.height - be.headerHeight
                        }, 500).easing(x.Easing.Quadratic.InOut).onUpdate((() => {
                            Pt.updateRender(), this.scrollBox.updateContentSize({
                                height: t.height
                            }), this.scrollBox.updateScrollSize({
                                height: this.chatBox.height + 8
                            }), this.scrollBox.scrollToBottom()
                        })).start()
                    }
                    disableInteractive() {
                        this.scrollBox.disable()
                    }
                    enableInteractive() {
                        this.scrollBox.enable()
                    }
                    reset() {
                        this.nextTicker && (clearTimeout(this.nextTicker), this.nextTicker = 0), this.titleTicker && (clearTimeout(this.titleTicker), this.titleTicker = 0)
                    }
                }
                class Ei extends PIXI.Container {
                    constructor(t = {}) {
                        super(), this.needBg = !1, this.volumnBg = void 0, this.innerMute = !1, this.micMask = void 0, this.volumnGraphics = void 0, this.innerVolumn = void 0, this.bgOpen = void 0, this.bgClose = void 0, this.volumnDefaultY = 0, this.muteTicker = null, this.volumnTicker = null, this.init(t)
                    }
                    init(t) {
                        var e = 32,
                            {
                                width: i = e,
                                needBg: s = !1
                            } = t,
                            n = i / e;
                        this.needBg = s;
                        var o = e * n,
                            r = 32 * n;
                        this.bgOpen = Pt.display.createSprite({
                            key: "mic/open.png"
                        }), this.bgOpen.width = o, this.bgOpen.height = r, this.bgClose = Pt.display.createSprite({
                            key: "mic/close.png"
                        }), this.bgClose.width = o, this.bgClose.height = r, this.bgClose.visible = !1, this.micMask = Pt.display.createSprite({
                            key: "mic/mask.png"
                        }), this.micMask.width = 8 * n, this.micMask.height = 16 * n, this.micMask.position.set(12 * n, 4 * n), this.volumnDefaultY = 4 * n + this.micMask.height, this.volumnGraphics = Pt.display.createSprite(), this.volumnGraphics.position.set(12 * n, this.volumnDefaultY), this.volumnGraphics.width = this.micMask.width, this.volumnGraphics.height = this.micMask.height, this.volumnGraphics.mask = this.micMask, this.addChild(this.bgOpen, this.bgClose, this.volumnGraphics, this.micMask), this.volumn = 0
                    }
                    calRenderHeight(t) {
                        return t < 10 ? 0 : (Math.sin(Math.PI / 100 * t - Math.PI / 2) / 2 + .5) * this.micMask.height
                    }
                    get volumn() {
                        return this.innerVolumn
                    }
                    set volumn(t) {
                        var e = k(t, 0, 100);
                        if (e !== this.volumn) {
                            this.innerVolumn = e;
                            var i = this.calRenderHeight(e);
                            0 !== i ? (this.volumnStopAnimate(), this.volumnGraphics.position.y = this.volumnDefaultY - i) : this.volumnStartAnimate()
                        }
                    }
                    get mute() {
                        return this.innerMute
                    }
                    set mute(t) {
                        t ? (this.micMask.visible = !1, this.volumnGraphics.visible = !1, this.bgOpen.visible = !1, this.bgClose.visible = !0, this.muteStartAnimate()) : (this.micMask.visible = !0, this.volumnGraphics.visible = !0, this.volumn = 0, this.bgOpen.visible = !0, this.bgClose.visible = !1, this.muteStopAnimate()), this.innerMute = t
                    }
                    muteStopAnimate() {
                        this.muteTicker && (Pt.removeTween(this.muteTicker), this.muteTicker = null)
                    }
                    muteStartAnimate() {
                        this.muteStopAnimate(), this.bgClose.alpha = 1, this.muteTicker = Pt.tween(this.bgClose).to({
                            alpha: 0
                        }, 1e3).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.muteTicker = Pt.tween(this.bgClose).to({
                                alpha: 1
                            }, 500).easing(x.Easing.Quadratic.Out).onComplete((() => {
                                this.muteStartAnimate()
                            })).start()
                        })).start()
                    }
                    volumnStopAnimate() {
                        this.volumnTicker && (Pt.removeTween(this.volumnTicker), this.volumnTicker = null)
                    }
                    volumnStartAnimate() {
                        this.volumnTicker || (this.volumnGraphics.position.y = this.volumnDefaultY, this.volumnTicker = Pt.tween(this.volumnGraphics.position).to({
                            y: this.volumnDefaultY - .2 * this.micMask.height
                        }, 400).yoyo(!0).easing(x.Easing.Quadratic.InOut).repeat(1 / 0).start())
                    }
                }
                class Li extends PIXI.Container {
                    constructor(t) {
                        super(), this.app = void 0, this.innerHeight = 40, this.dataBackground = void 0, this.dataText = void 0, this.dataArrow = void 0, this.listText = void 0, this.mic = void 0, this.micStateChangeHandler = void 0, this.cacheList = [], this.app = t, this.init()
                    }
                    init() {
                        this.position.set(be.toolWidth, 0), this.interactive = !0, this.on("pointertap", (() => {
                            this.app.toggleGiftView()
                        })), this.dataBackground = Pt.display.createGraphics(), Ye({
                            node: this.dataBackground,
                            x: 0,
                            y: 4,
                            width: be.device.width - be.toolWidth - 4,
                            height: this.innerHeight,
                            radius: 8,
                            fill: {
                                color: 2894892,
                                alpha: 1
                            }
                        }), this.dataText = Pt.display.createText({
                            textStyle: xe.dataStyle
                        }), this.dataText.position.set(8, 16), this.listText = Pt.display.createText({
                            textStyle: xe.listStyle
                        }), this.listText.position.set(8, 24), this.listText.visible = !1, this.mic = new Ei({
                            width: 12,
                            needBg: !0
                        }), this.mic.visible = !1, this.dataArrow = Pt.display.createSprite({
                            key: "icon/arrow.png"
                        }), this.dataArrow.anchor.set(.5), this.dataArrow.width = 16, this.dataArrow.height = 8, this.dataArrow.position.set(be.device.width - be.toolWidth - 24 + 8, 22), this.addChild(this.dataBackground, this.dataText, this.listText, this.mic, this.dataArrow), Ne(this, "infobar", (() => this.visible && !this.app.locked && !this.app.animating)), this.updateData()
                    }
                    updateMicPosition() {
                        this.listText.visible ? this.mic.position.set(this.dataText.position.x + this.dataText.width + 4, 10) : this.mic.position.set(this.dataText.position.x + this.dataText.width + 4, 18), Pt.updateRender()
                    }
                    updateViewData(t = null) {
                        if (t && (this.cacheList = t), this.cacheList.length > 0 && !this.dataArrow.rotation) {
                            this.dataText.position.set(8, 8), this.listText.visible = !0;
                            var e = "",
                                i = [];
                            this.cacheList.forEach(((t, s) => {
                                var n = t.amount || t.rewardAmountInHeat || 0,
                                    o = Ae.RANK_COLORS[3];
                                s < 4 && n && (o = Ae.RANK_COLORS[s]);
                                var r = we(t.nickname);
                                e += `• ${r} `, i.push({
                                    length: `${r}`.length + 3,
                                    color: o
                                })
                            })), this.listText.style.groupText = i, this.listText.text = ge(e, this.listText.style), this.listText.updateText(!1)
                        } else this.dataText.position.set(8, 16), this.listText.visible = !1;
                        this.updateMicPosition()
                    }
                    updateData() {
                        this.dataText && (this.dataText.text = ge(Oe.roomInfo, this.dataText.style), this.updateMicPosition())
                    }
                    micStateChange(t) {
                        Pt.tween(this.mic).to({
                            volumn: t.micVolume
                        }, 200).easing(x.Easing.Quadratic.InOut).start()
                    }
                    show() {
                        this.dataArrow.rotation = Math.PI, this.updateViewData(), Pt.tween(this).to({
                            innerHeight: Ae.GIFT_HEIGHT
                        }, 500).easing(x.Easing.Quadratic.InOut).onUpdate((() => {
                            Pt.updateRender(), this.dataBackground.clear(), Ye({
                                node: this.dataBackground,
                                x: 0,
                                y: 4,
                                width: be.device.width - be.toolWidth - 4,
                                height: this.innerHeight,
                                radius: 8,
                                fill: {
                                    color: 2894892,
                                    alpha: 1
                                }
                            })
                        })).start()
                    }
                    hide() {
                        this.dataArrow.rotation = 0, Pt.tween(this).to({
                            innerHeight: 40
                        }, 500).easing(x.Easing.Quadratic.InOut).onUpdate((() => {
                            Pt.updateRender(), this.dataBackground.clear(), Ye({
                                node: this.dataBackground,
                                x: 0,
                                y: 4,
                                width: be.device.width - be.toolWidth - 4,
                                height: this.innerHeight,
                                radius: 8,
                                fill: {
                                    color: 2894892,
                                    alpha: 1
                                }
                            })
                        })).onComplete((() => {
                            this.updateViewData()
                        })).start()
                    }
                    lock(t) {
                        Pt.tween(this.dataBackground).to({
                            alpha: 0
                        }, 250).easing(x.Easing.Quadratic.InOut).start(), Pt.tween(this.dataArrow).to({
                            alpha: 0
                        }, 250).easing(x.Easing.Quadratic.InOut).start(), this.dataText.style.wordWrapWidth -= this.mic.width + 4, this.updateData(), this.mic.visible = !0, Jt.getMicState((t => {
                            t.mute ? this.mic.mute = !0 : this.mic.mute = !1
                        })), this.micStateChangeHandler || (this.micStateChangeHandler = this.micStateChange.bind(this)), Oe.on("micStateChange", this.micStateChangeHandler), Pt.tween(this.position).delay(500).to({
                            x: 2 * be.toolWidth
                        }, 500).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.dataBackground.visible = !1, this.dataArrow.visible = !1, t()
                        })).start()
                    }
                    unlock(t) {
                        Pt.tween(this.position).to({
                            x: be.toolWidth
                        }, 500).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.dataBackground.visible = !0, this.dataArrow.visible = !0, Pt.tween(this.dataBackground).to({
                                alpha: 1
                            }, 250).easing(x.Easing.Quadratic.InOut).start(), Pt.tween(this.dataArrow).to({
                                alpha: 1
                            }, 250).easing(x.Easing.Quadratic.InOut).start(), t()
                        })).start(), this.dataText.style.wordWrapWidth += this.mic.width + 4, this.updateData(), this.micStateChangeHandler || (this.micStateChangeHandler = this.micStateChange.bind(this)), Oe.off("micStateChange", this.micStateChangeHandler), this.mic.visible = !1
                    }
                }
                class Ri extends PIXI.Container {
                    constructor() {
                        super(), this.locked = !1, this.animating = !1, this.background = void 0, this.name = "Lock", this.color = 255, this.lockUp = void 0, this.lockDown = void 0, this.init()
                    }
                    init() {
                        this.background = Pt.display.createSprite({
                            key: "tool/lock-background.png"
                        }), this.lockUp = Pt.display.createSprite({
                            key: "tool/lock-up.png"
                        }), this.lockDown = Pt.display.createSprite({
                            key: "tool/lock-down.png"
                        }), this.background.width = 32, this.background.height = 32, this.background.alpha = 0, this.lockUp.width = 6, this.lockUp.height = 6, this.lockUp.position.set(8, 9), this.lockUp.tint = 16777215, this.lockDown.width = 10, this.lockDown.height = 8, this.lockDown.position.set(11, 14), this.lockDown.tint = 16777215, this.addChild(this.background, this.lockUp, this.lockDown)
                    }
                    unlock() {
                        this.locked = !1, this.animating = !0, Pt.tween(this.background).to({
                            alpha: 0
                        }, 250).easing(x.Easing.Quadratic.InOut).start(), Pt.tween(this).to({
                            color: 255
                        }, 250).easing(x.Easing.Quadratic.InOut).onUpdate((() => {
                            Pt.updateRender(), this.color = Math.round(this.color), this.lockUp.tint = PIXI.utils.rgb2hex([this.color / 255, this.color / 255, this.color / 255]), this.lockDown.tint = PIXI.utils.rgb2hex([this.color / 255, this.color / 255, this.color / 255])
                        })).start(), Pt.tween(this.lockUp.position).to({
                            y: 9
                        }, 100).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            Pt.tween(this.lockUp.position).to({
                                x: 8
                            }, 150).easing(x.Easing.Quadratic.InOut).start()
                        })).start(), Pt.tween(this.position).to({
                            x: 0
                        }, 500).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.animating = !1
                        })).onUpdate((() => {
                            Pt.updateRender()
                        })).start()
                    }
                    lock() {
                        this.locked = !0, this.animating = !0, Pt.tween(this.background).to({
                            alpha: 1
                        }, 250).easing(x.Easing.Quadratic.InOut).start(), Pt.tween(this).to({
                            color: 128
                        }, 250).easing(x.Easing.Quadratic.InOut).onUpdate((() => {
                            Pt.updateRender(), this.color = Math.round(this.color), this.lockUp.tint = PIXI.utils.rgb2hex([this.color / 255, this.color / 255, this.color / 255]), this.lockDown.tint = PIXI.utils.rgb2hex([this.color / 255, this.color / 255, this.color / 255])
                        })).start(), Pt.tween(this.lockUp.position).to({
                            x: 13
                        }, 150).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            Pt.tween(this.lockUp.position).to({
                                y: 10
                            }, 100).easing(x.Easing.Quadratic.InOut).start()
                        })).start(), Pt.tween(this.position).delay(500).to({
                            x: 38
                        }, 500).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.animating = !1
                        })).start()
                    }
                }
                class Bi extends PIXI.Container {
                    constructor(t) {
                        super(), this.app = void 0, this.toolLock = void 0, this.toolMore = void 0, this.toolSmall = void 0, this.textureBack = void 0, this.textureMore = void 0, this.app = t, this.init()
                    }
                    init() {
                        this.toolLock = new Ri, Pt.display.isButton(this.toolLock), this.toolLock.position.set(0, 8);
                        var t = 0,
                            e = null;
                        this.toolLock.on("pointertap", (() => {
                            t += 1, this.app.toggleLock(), t >= 2 && this.app.autoShowGiftView(), e && clearTimeout(e), e = setTimeout((() => {
                                t = 0, e = null
                            }), 300)
                        })), this.textureMore = Pt.display.getTexture("tool/share.png"), this.textureBack = Pt.display.getTexture("tool/back.png"), this.toolMore = Pt.display.createSprite({
                            key: "tool/share.png",
                            isButton: !0,
                            width: 32,
                            height: 32
                        }), this.toolMore.position.set(0, 56), this.toolMore.on("pointertap", (() => {
                            this.app.toggleMoreView()
                        })), this.toolSmall = Pt.display.createSprite({
                            key: "tool/small.png",
                            isButton: !0,
                            width: 32,
                            height: 32
                        }), this.toolSmall.position.set(0, 104), this.toolSmall.on("pointertap", (() => {
                            Jt.minimizeGameLive()
                        })), this.addChild(this.toolLock, this.toolMore, this.toolSmall), Ne(this.toolLock, "toolLock", (() => !this.app.animating && !this.app.locked)), Ne({
                            x: this.toolLock.x + 38,
                            y: this.toolLock.y,
                            width: this.toolLock.width,
                            height: this.toolLock.height
                        }, "toolUnLock", (() => !this.app.animating && this.app.locked)), Ne(this.toolMore, "toolMore", (() => !this.app.animating && !this.app.locked)), Ne(this.toolSmall, "toolSmall", (() => !this.app.animating && !this.app.locked))
                    }
                    openMore() {
                        this.toolMore.texture = this.textureBack
                    }
                    closeMore() {
                        this.toolMore.texture = this.textureMore
                    }
                    lock() {
                        this.toolLock.lock(), this.toolMore.interactive = !1, Pt.tween(this.toolMore).to({
                            alpha: 0
                        }, 250).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.toolMore.visible = !1
                        })).start(), this.toolSmall.interactive = !1, Pt.tween(this.toolSmall).to({
                            alpha: 0
                        }, 250).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.toolSmall.visible = !1
                        })).start()
                    }
                    unlock() {
                        this.toolLock.unlock(), this.toolMore.interactive = !0, Pt.tween(this.toolMore).delay(500).onStart((() => {
                            this.toolMore.visible = !0
                        })).to({
                            alpha: 1
                        }, 250).easing(x.Easing.Quadratic.InOut).start(), this.toolSmall.interactive = !0, Pt.tween(this.toolSmall).delay(500).onStart((() => {
                            this.toolSmall.visible = !0
                        })).to({
                            alpha: 1
                        }, 250).easing(x.Easing.Quadratic.InOut).start()
                    }
                }
                class Hi {
                    constructor() {
                        this.locked = !1, this.animating = !1, this.lockAnimating = !1, this.view = void 0, this.chatView = void 0, this.giftView = void 0, this.moreView = void 0, this.infobar = void 0, this.toolbar = void 0, this.background = void 0, this.autoLockTicker = null, this.msgListenerFn = void 0, this.roomListenerFn = void 0, this.autoShowGift = !1, this.roomList = [], this.init(), Ii(), this.autoLock()
                    }
                    init() {
                        if (this.view = Pt.stage, this.background = Pt.display.createGraphics(), this.renderBackground(), this.toolbar = new Bi(this), this.infobar = new Li(this), this.chatView = new ki(this), this.giftView = new Qe(this), this.moreView = new xi(this), this.view.addChild(this.background, this.chatView, this.infobar, this.giftView, this.toolbar, this.moreView), Oe.getRoomInfo(), Oe.account) {
                            var t = {
                                msgType: kt.First_Notice,
                                content: Oe.account.joinLiveTips,
                                comboRewardCount: 0,
                                msgCreateTime: 0,
                                msgSeq: 0,
                                rankingPosition: 0,
                                senderHeadImgUrl: "",
                                senderNickName: ""
                            };
                            this.updateMessage(t)
                        }
                        if (Oe.liveTopic) {
                            var e = {
                                msgType: kt.Anchor_Notice,
                                content: Oe.liveTopic,
                                comboRewardCount: 0,
                                msgCreateTime: 0,
                                msgSeq: 0,
                                rankingPosition: 0,
                                senderHeadImgUrl: "",
                                senderNickName: ""
                            };
                            this.updateMessage(e)
                        }
                        var i;
                        this.msgListenerFn = t => {
                            t.forEach((t => {
                                this.updateMessage(t)
                            }))
                        }, this.roomListenerFn = () => {
                            var t;
                            null === (t = this.infobar) || void 0 === t || t.updateData()
                        }, Oe.on("msgListChange", this.msgListenerFn), Oe.on("roomInfoChange", this.roomListenerFn), Oe.on("roomListChange", (() => {
                            this.getCurrentRoomMemberInfo(), Pt.updateRender()
                        })), i = Oe.isMusicPlaying, Wt.send({
                            UIArea: 0,
                            PositionID: 0,
                            ActionID: 1,
                            OpType: 1,
                            ExternInfo: encodeURIComponent(JSON.stringify({
                                BGMPlay: i ? 1 : 0
                            }))
                        }), this.getCurrentRoomMemberInfo(), Pt.updateRender()
                    }
                    getMoreViewIns() {
                        return this.moreView
                    }
                    autoLock() {
                        if (this.view) {
                            this.autoLockTicker = setTimeout((() => {
                                Wt.send({
                                    UIArea: 0,
                                    PositionID: 3,
                                    ActionID: 3
                                }), this.lock()
                            }), 3e3);
                            var t = () => {
                                this.view && (this.view.interactive = !1, this.autoLockTicker && (clearTimeout(this.autoLockTicker), this.autoLockTicker = null), Wt.send({
                                    UIArea: 0,
                                    PositionID: 3,
                                    ActionID: 7
                                }), this.view.off("pointerdown", t))
                            };
                            this.view.interactive = !0, this.view.on("pointerdown", t)
                        }
                    }
                    renderBackground() {
                        this.background && (this.background.clear(), this.background.beginFill(0, .9), this.background.drawRoundedRect(0, 0, be.device.width, be.device.height, 12), this.background.beginFill(16777215, .25), this.background.drawRoundedRect(0, 0, be.device.width, be.device.height, 12), this.background.endFill())
                    }
                    updateMessage(t) {
                        var e;
                        null === (e = this.chatView) || void 0 === e || e.updateMessage(t)
                    }
                    autoShowGiftView() {
                        this.autoShowGift = !0
                    }
                    toggleGiftView() {
                        var t;
                        this.locked || (null !== (t = this.giftView) && void 0 !== t && t.visible ? this.closeGiftView() : this.openGiftView())
                    }
                    getCurrentRoomMemberInfo() {
                        Oe.getCurrentRoomMemberInfo().then((() => {
                            this.roomList = Oe.liveMemberList, this.renderRoomList()
                        }))
                    }
                    renderRoomList() {
                        this.giftView && this.giftView.updateViewData(this.roomList), this.infobar && this.infobar.updateViewData(this.roomList)
                    }
                    openGiftView() {
                        var t, e, i;
                        this.animating || (this.animating = !0, null === (t = this.chatView) || void 0 === t || t.disableInteractive(), Wt.send({
                            UIArea: 3602,
                            PositionID: 3,
                            ActionID: 2,
                            OpType: 3
                        }), null === (e = this.infobar) || void 0 === e || e.show(), null === (i = this.giftView) || void 0 === i || i.show((() => {
                            this.animating = !1, this.chatView && (this.chatView.visible = !1)
                        })), this.getCurrentRoomMemberInfo())
                    }
                    closeGiftView() {
                        var t, e;
                        this.animating || (this.animating = !0, Wt.send({
                            UIArea: 3602,
                            PositionID: 3,
                            ActionID: 2,
                            OpType: 7
                        }), this.chatView && (this.chatView.enableInteractive(), this.chatView.visible = !0), null === (t = this.infobar) || void 0 === t || t.hide(), null === (e = this.giftView) || void 0 === e || e.hide(this.locked, (() => {
                            this.animating = !1
                        })))
                    }
                    toggleMoreView() {
                        !this.locked && this.moreView && (this.moreView.visible ? this.closeMoreView() : this.openMoreView())
                    }
                    openMoreView() {
                        !this.animating && this.view && this.moreView && this.toolbar && (this.animating = !0, this.view.addChild(this.moreView), this.toolbar.openMore(), this.moreView.show((() => {
                            this.animating = !1, this.chatView && (this.chatView.visible = !1), this.infobar && (this.infobar.visible = !1)
                        })), Wt.send({
                            UIArea: 3602,
                            PositionID: 2,
                            ActionID: 2,
                            OpType: 3
                        }))
                    }
                    closeMoreView() {
                        !this.animating && this.moreView && this.toolbar && (this.animating = !0, this.toolbar.closeMore(), this.infobar && (this.infobar.visible = !0), this.moreView.hide(this.locked, (() => {
                            this.animating = !1
                        })), Wt.send({
                            UIArea: 3602,
                            PositionID: 2,
                            ActionID: 2,
                            OpType: 7
                        }), this.chatView && this.giftView && !this.giftView.visible && (this.chatView.visible = !0))
                    }
                    toggleLock() {
                        this.locked ? this.unlock() : this.lock()
                    }
                    lock() {
                        var t, e, i, s;
                        this.lockAnimating || this.animating || this.locked || !this.toolbar || (this.lockAnimating = !0, this.locked = !0, Oe.setLocked(!0), null !== (t = this.giftView) && void 0 !== t && t.visible && (this.animating = !1, this.closeGiftView()), null !== (e = this.moreView) && void 0 !== e && e.visible && (this.animating = !1, this.closeMoreView()), Wt.send({
                            UIArea: 3602,
                            PositionID: 1,
                            ActionID: 2,
                            OpType: 7
                        }), this.toolbar.lock(), Pt.tween(this.background).to({
                            alpha: 0
                        }, 250).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                            this.background && (this.background.visible = !1)
                        })).start(), null === (i = this.chatView) || void 0 === i || i.lock(), null === (s = this.infobar) || void 0 === s || s.lock((() => {
                            Pt.touch && (Pt.touch.dragArea = zi, Pt.touch.preventArea = Mi), this.lockAnimating = !1
                        })))
                    }
                    unlock(t = {}) {
                        if (!this.lockAnimating && !this.animating && this.locked && this.toolbar && this.chatView && this.infobar) {
                            var {
                                unlockTweenCb: e
                            } = t;
                            this.lockAnimating = !0, this.autoShowGift = !1, this.toolbar.unlock(), this.chatView.unlock(), this.infobar.unlock((() => {
                                this.background && (this.background.visible = !0, Pt.tween(this.background).to({
                                    alpha: 1
                                }, 250).easing(x.Easing.Quadratic.InOut).onComplete((() => {
                                    Wt.send({
                                        UIArea: 3602,
                                        PositionID: 1,
                                        ActionID: 2,
                                        OpType: 3
                                    }), Ii(), this.lockAnimating = !1, this.locked = !1, Oe.setLocked(!1), e && e()
                                })).start(), this.autoShowGift && (this.autoShowGift = !1, this.openGiftView(), Wt.send({
                                    UIArea: 3602,
                                    PositionID: 1,
                                    ActionID: 30,
                                    OpType: 3
                                })))
                            }))
                        }
                    }
                    destroy() {
                        var t;
                        this.msgListenerFn = null, this.roomListenerFn = null, null === (t = this.view) || void 0 === t || t.destroy({
                            children: !0,
                            texture: !0,
                            baseTexture: !0
                        }), this.chatView && (this.chatView.reset(), this.chatView = void 0), this.giftView = void 0, this.moreView = void 0, this.infobar = void 0, this.toolbar = void 0, this.background = void 0, this.view = void 0, this.autoLockTicker && (clearTimeout(this.autoLockTicker), this.autoLockTicker = 0), yi().destroy()
                    }
                }
                var Oi = function() {
                    return "undefined" != typeof WORKER_RUNTIME && WORKER_RUNTIME && "undefined" != typeof self ? self && self.__wkrenderer_h5 : "object" == typeof window && window && window.__wkrenderer_h5
                }();
                var Vi, Xi, {
                        beforeInvokeFail: Zi,
                        beforeInvokeCallback: Ui
                    } = lt,
                    Ni = "updateGameLivePanelMenu",
                    Gi = t => {
                        (t => {
                            void 0 === (null == t ? void 0 : t.enableInvitationMenu) ? Zi(Ni, t, "parameter enableInvitationMenu can't be undefined") : (Xi = t, void 0 !== (null == Oe ? void 0 : Oe.gameLiveState) && new Promise(((e, i) => {
                                var s, n, o = null === (s = Vi) || void 0 === s || null === (n = s.getMoreViewIns()) || void 0 === n ? void 0 : n.getPlayTogetherStatus();
                                void 0 === o ? Oe.on("teamupConfigChange", (s => {
                                    s ? e(t) : i("the minigame has't config invitationMenu function")
                                })) : o ? e(t) : i("the minigame has't config invitationMenu function")
                            })).then((t => {
                                var e, {
                                    enableInvitationMenu: i = !0
                                } = t;
                                null === (e = Vi.getMoreViewIns()) || void 0 === e || e.changeButtonPlayEvent(i), Ui({
                                    name: Ni,
                                    args: t
                                })
                            })).catch((e => {
                                Zi(Ni, t, e)
                            })))
                        })(t)
                    };
                Ze.onReady((() => {
                    Ce().then((() => {
                        var t;
                        Oe.on("livePreStart", (() => {
                            t || (t = new Yi(!0)), t.load()
                        })), Oe.on("liveReload", (() => {
                            t || (t = new Yi(!0)), t.reload()
                        })), Ae.debug && (t || (t = new Yi(!0)), t.load(), t.init()), Oe.on("liveStart", (() => {
                            t || (t = new Yi(!0)), t.loaded || t.load(), setTimeout((() => {
                                t || (t = new Yi(!0)), t.init()
                            }), 0)
                        })), Oe.on("liveEnd", (() => {
                            Ge(), t && (t.destroy(), t = null)
                        }))
                    }))
                }));
                var qi = {
                        frames: {
                            "background/white.png": {
                                frame: {
                                    x: 1267,
                                    y: 299,
                                    w: 64,
                                    h: 64
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 64,
                                    h: 64
                                },
                                sourceSize: {
                                    w: 64,
                                    h: 64
                                }
                            },
                            "icon/arrow-outlined.png": {
                                frame: {
                                    x: 1574,
                                    y: 225,
                                    w: 34,
                                    h: 34
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 7,
                                    y: 7,
                                    w: 34,
                                    h: 34
                                },
                                sourceSize: {
                                    w: 48,
                                    h: 48
                                }
                            },
                            "icon/arrow.png": {
                                frame: {
                                    x: 363,
                                    y: 340,
                                    w: 36,
                                    h: 23
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 14,
                                    y: 7,
                                    w: 36,
                                    h: 23
                                },
                                sourceSize: {
                                    w: 64,
                                    h: 32
                                }
                            },
                            "label/label_1.png": {
                                frame: {
                                    x: 1611,
                                    y: 125,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !0,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_2.png": {
                                frame: {
                                    x: 215,
                                    y: 240,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !0,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_3.png": {
                                frame: {
                                    x: 1021,
                                    y: 224,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !0,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_4.png": {
                                frame: {
                                    x: 1071,
                                    y: 251,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_5.png": {
                                frame: {
                                    x: 1169,
                                    y: 251,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_6.png": {
                                frame: {
                                    x: 1267,
                                    y: 249,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_7.png": {
                                frame: {
                                    x: 439,
                                    y: 264,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !0,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_8.png": {
                                frame: {
                                    x: 489,
                                    y: 272,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_9.png": {
                                frame: {
                                    x: 1071,
                                    y: 301,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_10.png": {
                                frame: {
                                    x: 1611,
                                    y: 223,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !0,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_gift.png": {
                                frame: {
                                    x: 1169,
                                    y: 301,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_notice.png": {
                                frame: {
                                    x: 1417,
                                    y: 235,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_system.png": {
                                frame: {
                                    x: 1365,
                                    y: 249,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !0,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "label/label_theme.png": {
                                frame: {
                                    x: 1415,
                                    y: 285,
                                    w: 96,
                                    h: 48
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 48
                                }
                            },
                            "mask/rect.png": {
                                frame: {
                                    x: 1,
                                    y: 100,
                                    w: 267,
                                    h: 138
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 267,
                                    h: 138
                                },
                                sourceSize: {
                                    w: 267,
                                    h: 138
                                }
                            },
                            "mic/close.png": {
                                frame: {
                                    x: 1417,
                                    y: 125,
                                    w: 92,
                                    h: 108
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 3,
                                    y: 0,
                                    w: 92,
                                    h: 108
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 108
                                }
                            },
                            "mic/mask.png": {
                                frame: {
                                    x: 1021,
                                    y: 322,
                                    w: 24,
                                    h: 48
                                },
                                rotated: !0,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 24,
                                    h: 48
                                },
                                sourceSize: {
                                    w: 24,
                                    h: 48
                                }
                            },
                            "mic/open.png": {
                                frame: {
                                    x: 265,
                                    y: 264,
                                    w: 96,
                                    h: 96
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 96,
                                    h: 96
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 96
                                }
                            },
                            "more/button_fans.png": {
                                frame: {
                                    x: 893,
                                    y: 100,
                                    w: 122,
                                    h: 170
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 29,
                                    y: 0,
                                    w: 122,
                                    h: 170
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 174
                                }
                            },
                            "more/button_ifeedback.png": {
                                frame: {
                                    x: 1293,
                                    y: 1,
                                    w: 122,
                                    h: 170
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 29,
                                    y: 0,
                                    w: 122,
                                    h: 170
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 174
                                }
                            },
                            "more/button_mic-gray.png": {
                                frame: {
                                    x: 1,
                                    y: 240,
                                    w: 122,
                                    h: 212
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 29,
                                    y: 0,
                                    w: 122,
                                    h: 212
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 216
                                }
                            },
                            "more/button_mic-red.png": {
                                frame: {
                                    x: 679,
                                    y: 100,
                                    w: 122,
                                    h: 212
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 29,
                                    y: 0,
                                    w: 122,
                                    h: 212
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 216
                                }
                            },
                            "more/button_play.png": {
                                frame: {
                                    x: 1465,
                                    y: 1,
                                    w: 122,
                                    h: 170
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 29,
                                    y: 0,
                                    w: 122,
                                    h: 170
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 174
                                }
                            },
                            "more/button_share.png": {
                                frame: {
                                    x: 1075,
                                    y: 99,
                                    w: 150,
                                    h: 169
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 15,
                                    y: 0,
                                    w: 150,
                                    h: 169
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 174
                                }
                            },
                            "more/button_small.png": {
                                frame: {
                                    x: 270,
                                    y: 100,
                                    w: 162,
                                    h: 226
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 47,
                                    y: 0,
                                    w: 162,
                                    h: 226
                                },
                                sourceSize: {
                                    w: 256,
                                    h: 232
                                }
                            },
                            "more/button_timeline.png": {
                                frame: {
                                    x: 498,
                                    y: 100,
                                    w: 179,
                                    h: 170
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 179,
                                    h: 170
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 174
                                }
                            },
                            "more/button_tips-close-dark.png": {
                                frame: {
                                    x: 587,
                                    y: 272,
                                    w: 72,
                                    h: 72
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 72,
                                    h: 72
                                },
                                sourceSize: {
                                    w: 72,
                                    h: 72
                                }
                            },
                            "more/button_tips-close.png": {
                                frame: {
                                    x: 531,
                                    y: 322,
                                    w: 32,
                                    h: 32
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 8,
                                    y: 8,
                                    w: 32,
                                    h: 32
                                },
                                sourceSize: {
                                    w: 48,
                                    h: 48
                                }
                            },
                            "more/button_topic.png": {
                                frame: {
                                    x: 679,
                                    y: 224,
                                    w: 122,
                                    h: 169
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 29,
                                    y: 0,
                                    w: 122,
                                    h: 169
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 174
                                }
                            },
                            "more/exit.png": {
                                frame: {
                                    x: 1075,
                                    y: 1,
                                    w: 216,
                                    h: 96
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 216,
                                    h: 96
                                },
                                sourceSize: {
                                    w: 216,
                                    h: 96
                                }
                            },
                            "more/tips.png": {
                                frame: {
                                    x: 1,
                                    y: 1,
                                    w: 1072,
                                    h: 97
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 1072,
                                    h: 97
                                },
                                sourceSize: {
                                    w: 1072,
                                    h: 104
                                }
                            },
                            "tool/back.png": {
                                frame: {
                                    x: 1511,
                                    y: 125,
                                    w: 98,
                                    h: 98
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 15,
                                    y: 15,
                                    w: 98,
                                    h: 98
                                },
                                sourceSize: {
                                    w: 128,
                                    h: 128
                                }
                            },
                            "tool/lock-background.png": {
                                frame: {
                                    x: 363,
                                    y: 264,
                                    w: 74,
                                    h: 74
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 11,
                                    y: 11,
                                    w: 74,
                                    h: 74
                                },
                                sourceSize: {
                                    w: 96,
                                    h: 96
                                }
                            },
                            "tool/lock-down.png": {
                                frame: {
                                    x: 489,
                                    y: 322,
                                    w: 40,
                                    h: 32
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 40,
                                    h: 32
                                },
                                sourceSize: {
                                    w: 40,
                                    h: 32
                                }
                            },
                            "tool/lock-up.png": {
                                frame: {
                                    x: 1246,
                                    y: 99,
                                    w: 24,
                                    h: 24
                                },
                                rotated: !1,
                                trimmed: !1,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 24,
                                    h: 24
                                },
                                sourceSize: {
                                    w: 24,
                                    h: 24
                                }
                            },
                            "tool/more.png": {
                                frame: {
                                    x: 1637,
                                    y: 1,
                                    w: 50,
                                    h: 14
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 39,
                                    y: 57,
                                    w: 50,
                                    h: 14
                                },
                                sourceSize: {
                                    w: 128,
                                    h: 128
                                }
                            },
                            "tool/music-off.png": {
                                frame: {
                                    x: 850,
                                    y: 224,
                                    w: 122,
                                    h: 169
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 29,
                                    y: 0,
                                    w: 122,
                                    h: 169
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 216
                                }
                            },
                            "tool/music-on.png": {
                                frame: {
                                    x: 1246,
                                    y: 125,
                                    w: 122,
                                    h: 169
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 29,
                                    y: 0,
                                    w: 122,
                                    h: 169
                                },
                                sourceSize: {
                                    w: 180,
                                    h: 216
                                }
                            },
                            "tool/share.png": {
                                frame: {
                                    x: 1515,
                                    y: 280,
                                    w: 46,
                                    h: 46
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 41,
                                    y: 41,
                                    w: 46,
                                    h: 46
                                },
                                sourceSize: {
                                    w: 128,
                                    h: 128
                                }
                            },
                            "tool/small.png": {
                                frame: {
                                    x: 1515,
                                    y: 225,
                                    w: 57,
                                    h: 53
                                },
                                rotated: !1,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 37,
                                    y: 38,
                                    w: 57,
                                    h: 53
                                },
                                sourceSize: {
                                    w: 128,
                                    h: 128
                                }
                            }
                        },
                        animations: {
                            "label/label": ["label/label_1.png", "label/label_2.png", "label/label_3.png", "label/label_4.png", "label/label_5.png", "label/label_6.png", "label/label_7.png", "label/label_8.png", "label/label_9.png", "label/label_10.png"]
                        },
                        meta: {
                            app: "https://www.codeandweb.com/texturepacker",
                            version: "1.0",
                            image: "icons.png",
                            format: "RGBA8888",
                            size: {
                                w: 1660,
                                h: 364
                            },
                            scale: "1",
                            smartupdate: "$TexturePacker:SmartUpdate:844988dcc6ba8919613c2376a3631e6e:3561a2f5d8e48d54426150d790dd1538:b5c5bd7252d2048fecbb1bda1760f9ef$"
                        }
                    },
                    Wi = "icons";
                class Yi {
                    constructor(t = !1) {
                        this.app = null, this.loading = !1, this.loaded = !1, this.ready = !1, this.inited = !1, this.startMessage = void 0, this.stopMessage = void 0, this.destroyed = !1, t && (xt = Date.now(), Tt.report({
                            Type: C.Info,
                            Target: "liveConstructor"
                        }))
                    }
                    loadAndSetDegign() {
                        Pe(), this.load()
                    }
                    load() {
                        this.loading || (this.loading = !0, It(), Oi || this.initScreenCanvas(), Pt.display.createTextures({
                            name: Wi,
                            imageData: "data:image/png;base64,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",
                            jsonData: qi
                        }).then((() => {
                            var t, e;
                            if (this.loaded = !0, Tt.report({
                                    Type: C.Info,
                                    CostTime: Date.now() - xt,
                                    Target: "liveLoadSuccess"
                                }), this.ready) try {
                                this.init()
                            } catch (t) {
                                e = B(t), Tt.report({
                                    Type: C.Error,
                                    CostTime: Date.now() - xt,
                                    Target: "liveRenderFail",
                                    Result: e
                                })
                            }
                            null == _t || null === (t = _t.info) || void 0 === t || t.call(_t, "[直播面板] resource load success")
                        })))
                    }
                    init() {
                        var t, e;
                        (this.ready, this.inited, this.ready = !0, this.loaded) ? this.inited || (this.inited = !0, this.initPixiJsCore(), this.app = new Hi, e = this.app, Vi = e, Xi && Gi(Xi), Tt.report({
                            Type: C.Info,
                            CostTime: Date.now() - xt,
                            Target: "liveRenderSuccess"
                        }), null == _t || null === (t = _t.info) || void 0 === t || t.call(_t, "[直播面板] liveRender init success")): this.load()
                    }
                    reload() {
                        this.destroy(), setTimeout((() => {
                            this.destroyed = !1, this.load(), this.init()
                        }), 1e3)
                    }
                    destroy(t = !1) {
                        this.destroyed || (this.destroyed = !0, Tt.report({
                            Type: C.Info,
                            CostTime: Date.now() - xt,
                            Target: "liveDestroyStart"
                        }), t && Ge(), this.stopMessage && this.stopMessage(), this.app && (this.app.destroy(), this.app = null), Pt.destroy(), Oe.destroy(), this.loading = !1, this.loaded = !1, this.ready = !1, this.inited = !1, Tt.report({
                            Type: C.Info,
                            CostTime: Date.now() - xt,
                            Target: "liveDestroySuccess"
                        }))
                    }
                    initScreenCanvas() {
                        var t;
                        Pt.canvas.screenCanvas || (Pt.canvas.init(), Pt.canvas.screenCanvas, null == _t || null === (t = _t.info) || void 0 === t || t.call(_t, "[直播面板] screenCanvas create success"))
                    }
                    initPixiJsCore() {
                        var t;
                        this.initScreenCanvas(), Pt.init({
                            defaultTextStyle: xe.commonStyle,
                            defaultTextureName: Wi,
                            defaultTextureKey: "background/white.png"
                        }), Pt.touch && (Pt.touch.canDrag = !0, Pt.touch.snapType = j.None), Pt.canvas.position.set({
                            x: be.position.x,
                            y: be.position.y
                        }), Pt.canvas.resize({
                            width: be.designSize.width,
                            height: be.designSize.height,
                            resetTouchArea: !0
                        }), Pt.canvas.zIndex = "100", null == _t || null === (t = _t.info) || void 0 === t || t.call(_t, "[直播面板] pixi render init success")
                    }
                }
                Yi.dumpGameLivePanelUI = t => t && t.isLibTest ? (Object.keys(Ue).forEach((t => {
                    Ue[t].clickable = Ue[t].check()
                })), Ue) : {}, Yi.innerUpdateMorePanel = Gi, Object.defineProperty(globalThis, "__minigameLiveSDK__", {
                    get: () => Yi
                })
            })(), a.default
        })()
    }()
} catch (t) {
    console.error("catch sdkSubPackage: minigameLive error: ", t)
}