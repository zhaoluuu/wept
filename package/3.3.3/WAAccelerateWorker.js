! function(A) {
    A.WXConfig;
    Foundation.env.workerType = "accelerate", Foundation.env.typeStr = "accelerateWorker", (() => {
        "use strict";
        var A = {};
        A.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (A) {
                if ("object" == typeof window) return window
            }
        }();
        class e extends Error {
            constructor(A) {
                super(`APP-SERVICE-SDK:${A}`), this.type = "AppServiceSdkKnownError"
            }
        }
        Error;
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function r(A) {
            if ("function" == typeof globalThis.btoa) return globalThis.btoa(A);
            for (var r, i, n = String(A), o = "", s = 0, g = t; n.charAt(0 | s) || (g = "=", s % 1); o += g.charAt(63 & r >> 8 - s % 1 * 8)) {
                if ((i = n.charCodeAt(s += 3 / 4)) > 255) throw new e("btoa failed");
                r = r << 8 | i
            }
            return o
        }

        function i(A) {
            if ("function" == typeof globalThis.atob) return globalThis.atob(A);
            var r = String(A).replace(/=+$/, ""),
                i = "";
            if (r.length % 4 == 1) throw new e(`atob failed: invalid string length ${r.length}`);
            for (var n, o, s = 0, g = 0; o = r.charAt(g++); ~o && (n = s % 4 ? 64 * n + o : o, s++ % 4) ? i += String.fromCharCode(255 & n >> (-2 * s & 6)) : 0) o = t.indexOf(o);
            return i
        }

        function n(A) {
            for (var e = i(A), t = e.length, r = new Uint8Array(t), n = 0; n < t; n++) r[n] = e.charCodeAt(n);
            return r.buffer
        }
        var o, s = _WebAssembly,
            g = () => {
                var A, e = 3584,
                    t = 4096,
                    r = 16,
                    i = {
                        L: {
                            C: "t",
                            M: "O",
                            s: "a",
                            P: "b",
                            Q: "q"
                        },
                        H: {
                            C: "v",
                            M: "x",
                            s: "D",
                            P: "b",
                            Q: "q"
                        }
                    },
                    o = new s.Memory({
                        initial: 1
                    }),
                    g = new Uint8Array(o.buffer),
                    a = new Promise((e => s.instantiate(n("AGFzbQEAAAAAEAhkeWxpbmsuMAEFkAQEAAABDwNgA39/fwBgAn9/AGAAAAI7AwNlbnYPX19zdGFja19wb2ludGVyA38BA2Vudg1fX21lbW9yeV9iYXNlA38AA2VudgZtZW1vcnkCAAEDERACAQEAAQEBAAEBAAAAAAAAB0EMEV9fd2FzbV9jYWxsX2N0b3JzAAABcAABAWUAAwFoAAQBdAAFAXYACAFPAAoBeAALAWEADAFEAA0BYgAOAXEADwqKKBADAAELCAAgACABEAILjAMBCX8gACABLQAAOgAAIAAgAS0AAToAASAAIAEtAAI6AAIgACABLQADOgADIAAgAS0ABDoABCAAIAEtAAU6AAUgACABLQAGOgAGIAAgAS0ABzoAByAAIAEtAAg6AAggACABLQAJOgAJIAAgAS0ACjoACiAAIAEtAAs6AAsgACABLQAMOgAMIAAgAS0ADToADSAAIAEtAA46AA4gACABLQAPOgAPQQQhAwNAIANBAnQiBSAAaiICQQFrLQAAIQQgAkECay0AACEHIAJBA2stAAAhBiACQQRrLQAAIQgCfyADQQNxBEAgBCEJIAghCiAHDAELIwEiAUGAAmogA0ECdmotAAAgASAGai0AAHMhCiABIAhqLQAAIQkgASAHai0AACEGIAEgBGotAAALIQQgAiACQRBrLQAAIApzOgAAIAAgBUEBcmogAkEPay0AACAGczoAACAAIAVBAnJqIAJBDmstAAAgBHM6AAAgACAFQQNyaiACQQ1rLQAAIAlzOgAAIANBAWoiA0EsRw0ACwseACAAIAEQAiAAIAIpAAg3ALgBIAAgAikAADcAsAELGAAgACABKQAANwCwASAAIAEpAAg3ALgBCwgAIAEgABAGC70JARt/QQAgACABEAdBASEWA0AgACMBIgIgAC0AAGotAAAiEToAACAAIAIgAC0ABGotAAAiEjoABCAAIAIgAC0ACGotAAAiEzoACCAAIAIgAC0ADGotAAAiFDoADCAALQABIQMgACACIAAtAAVqLQAAIhU6AAEgAC0AAyEQIAAtAAchBCAALQAPIQYgAC0ACyEFIAAtAA4hCSAALQAGIQogAC0ACiELIAAtAAIhDCAALQAJIQ0gAC0ADSEOIAAgAiADai0AACIPOgANIAAgAiAOai0AACIOOgAJIAAgAiANai0AACIN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AwA3ALABIAFBEGohASAEQRBqIgQgAkkNAAsLIANBEGokAAvUAgECfyACBEAgAEGwAWohAwNAIAMgABAGIAEgAS0AACAALQCwAXM6AAAgASABLQABIAAtALEBczoAASABIAEtAAIgAC0AsgFzOgACIAEgAS0AAyAALQCzAXM6AAMgASABLQAEIAAtALQBczoABCABIAEtAAUgAC0AtQFzOgAFIAEgAS0ABiAALQC2AXM6AAYgASABLQAHIAAtALcBczoAByABQQhqIAEtAAggAC0AuAFzOgAAIAEgAS0ACSAALQC5AXM6AAkgASABLQAKIAAtALoBczoACiABIAEtAAsgAC0AuwFzOgALIAEgAS0ADCAALQC8AXM6AAwgASABLQANIAAtAL0BczoADSABIAEtAA4gAC0AvgFzOgAOIAEgAS0ADyAALQC/AXM6AA8gAyABKQAINwAIIAMgASkAADcAACABQRBqIQEgBEEQaiIEIAJJDQALCwv4AgEDfyMAQRBrIgMkACACBEAgAEGwAWohBANAIAMgASkAADcDACADIAFBCGopAAA3AwggBCAAEAYgASABLQAAIAAtALABczoAACABIAEtAAEgAC0AsQFzOgABIAEgAS0AAiAALQCyAXM6AAIgASABLQADIAAtALMBczoAAyABIAEtAAQgAC0AtAFzOgAEIAEgAS0ABSAALQC1AXM6AAUgASABLQAGIAAtALYBczoABiABIAEtAAcgAC0AtwFzOgAHIAEgAS0ACCAALQC4AXM6AAggASABLQAJIAAtALkBczoACSABIAEtAAogAC0AugFzOgAKIAEgAS0ACyAALQC7AXM6AAsgASABLQAMIAAtALwBczoADCABIAEtAA0gAC0AvQFzOgANIAEgAS0ADiAALQC+AXM6AA4gASABLQAPIAAtAL8BczoADyAEIAMpAwg3AAggBCADKQMANwAAIAFBEGohASAFQRBqIgUgAkkNAAsLIANBEGokAAu9AgECfyACBEAgAEGwAWohBANAIAQgABAGIAEgAS0AACAALQCwAXM6AAAgASABLQABIAAtALEBczoAASABIAEtAAIgAC0AsgFzOgACIAEgAS0AAyAALQCzAXM6AAMgASABLQAEIAAtALQBczoABCABIAEtAAUgAC0AtQFzOgAFIAEgAS0ABiAALQC2AXM6AAYgASABLQAHIAAtALcBczoAByABIAEtAAggAC0AuAFzOgAIIAEgAS0ACSAALQC5AXM6AAkgASABLQAKIAAtALoBczoACiABIAEtAAsgAC0AuwFzOgALIAEgAS0ADCAALQC8AXM6AAwgASABLQANIAAtAL0BczoADSABIAEtAA4gAC0AvgFzOgAOIAEgAS0ADyAALQC/AXM6AA8gAUEQaiEBIANBEGoiAyACSQ0ACwsLhwUBFH8jAEEQayIFJAAgAgRAIABBsQFqIQcgAEGyAWohCCAAQbMBaiEJIABBtAFqIQogAEG1AWohCyAAQbYBaiEMIABBtwFqIQ0gAEG4AWohDiAAQbkBaiEPIABBugFqIRAgAEG7AWohESAAQbwBaiESIABBvQFqIRMgAEG+AWohFCAAQb8BaiEWIABBsAFqIQZBECEDA0ACQCADQRBHDQAgBSAGKQAANwMAIAUgBikACDcDCCAFIAAQBiAWIQQCQCAALQC/ASIDQf8BRw0AIBZBADoAACAUIQQgFC0AACIDQf8BRw0AIBRBADoAACATIQQgEy0AACIDQf8BRw0AIBNBADoAACASIQQgEi0AACIDQf8BRw0AIBJBADoAACARIQQgES0AACIDQf8BRw0AIBFBADoAACAQIQQgEC0AACIDQf8BRw0AIBBBADoAACAPIQQgDy0AACIDQf8BRw0AIA9BADoAACAOIQQgDi0AACIDQf8BRw0AIA5BADoAACANIQQgDS0AACIDQf8BRw0AIA1BADoAACAMIQQgDC0AACIDQf8BRw0AIAxBADoAACALIQQgCy0AACIDQf8BRw0AIAtBADoAACAKIQQgCi0AACIDQf8BRw0AIApBADoAACAJIQQgCS0AACIDQf8BRw0AIAlBADoAACAIIQQgCC0AACIDQf8BRw0AIAhBADoAACAHIQQgBy0AACIDQf8BRw0AIAdBADoAACAGIQQgBi0AACIDQf8BRw0AQQAhAyAGQQA6AAAMAQsgBCADQQFqOgAAQQAhAwsgASAVaiIEIAMgBWotAAAgBC0AAHM6AAAgA0EBaiEDIBVBAWoiFSACRw0ACwsgBUEQaiQACwuXBAEAIwELkARjfHd78mtvxTABZyv+16t2yoLJffpZR/Ct1KKvnKRywLf9kyY2P/fMNKXl8XHYMRUExyPDGJYFmgcSgOLrJ7J1CYMsGhtuWqBSO9azKeMvhFPRAO0g/LFbasu+OUpMWM/Q76r7Q00zhUX5An9QPJ+oUaNAj5KdOPW8ttohEP/z0s0ME+xfl0QXxKd+PWRdGXNggU/cIiqQiEbuuBTeXgvb4DI6CkkGJFzC06xikZXkeefIN22N1U6pbFb06mV6rgi6eCUuHKa0xujddB9LvYuKcD61ZkgD9g5hNVe5hsEdnuH4mBFp2Y6Umx6H6c5VKN+MoYkNv+ZCaEGZLQ+wVLsWjQECBAgQIECAGzYAAAAAAFIJatUwNqU4v0CjnoHz1/t84zmCmy//hzSOQ0TE3unLVHuUMqbCIz3uTJULQvrDTgguoWYo2SSydluiSW2L0SVy+PZkhmiYFtSkXMxdZbaSbHBIUP3tudpeFUZXp42dhJDYqwCMvNMK9+RYBbizRQbQLB6Pyj8PAsGvvQMBE4prOpERQU9n3OqX8s/O8LTmc5asdCLnrTWF4vk36Bx1325H8RpxHSnFiW+3Yg6qGL4b/FY+S8bSeSCa28D+eM1a9B/dqDOIB8cxsRIQWSeA7F9gUX+pGbVKDS3lep+TyZzvoOA7Ta4q9bDI67s8g1OZYRcrBH66d9Ym4WkUY1UhDH0="), {
                        env: {
                            memory: o,
                            __memory_base: 0,
                            __stack_pointer: new s.Global({
                                mutable: !0,
                                value: "i32"
                            }, 3584)
                        }
                    }).then((t => {
                        A = t.instance.exports, e()
                    }))));
                class I {
                    constructor(A = null, e = null) {
                        this._key = A, this._iv = e
                    }
                    crypt(n, o, s, a = this._key, I = this._iv) {
                        if (("C" === o || "M" === o) && s.length % r) throw new Error("Buffer length must be evenly divisible by 16 in ECB/CBC mode");
                        if (!(o in i[n])) throw new Error("Invalid mode");
                        if (16 !== a.length) throw new Error("Key length must be 16");
                        if ("C" !== o && I.length !== r) throw new Error("IV length must be 16");
                        var u = A[i[n][o]];
                        ((A, t, r) => {
                            g.set(t, 3776), r && g.set(r, 3760), A(e, 3776, 3760)
                        })(A["C" === o ? "p" : "e"], a, I);
                        for (var C = new Uint8Array(s.length), l = 0; l < s.length;) {
                            var c = "C" === o ? r : Math.min(s.length - l, 61440);
                            g.set(s.subarray(l, l + c), t), u(e, t, c), C.set(g.subarray(t, t + c), l), l += c
                        }
                        return C
                    }
                    encrypt(A, e, t, r) {
                        return this.crypt("L", A, e, t, r)
                    }
                    decrypt(A, e, t, r) {
                        return this.crypt("H", A, e, t, r)
                    }
                }
                return I.MODE_ECB = "C", I.MODE_CBC = "M", I.MODE_CFB = "s", I.MODE_OFB = "P", I.MODE_CTR = "Q", a.then((() => I))
            },
            a = () => (o || (o = g()), o);

        function I(A, e, t) {
            return A = (A => {
                var e = 17 + ~(15 & A.length),
                    t = A.length + e,
                    r = new Uint8Array(t);
                r.set(A, 0);
                for (var i = A.length; i < t; i++) r[i] = e;
                return r
            })(A), a().then((r => (new r).encrypt(r.MODE_CBC, A, e, t)))
        }
        var u = function(A, e) {
                var t = A + "",
                    r = t.length,
                    i = e ? +e : 0;
                if (i != i && (i = 0), !(0 > i || i >= r)) {
                    var n, o = t.charCodeAt(i);
                    return 55296 <= o && 56319 >= o && r > i + 1 && (56320 <= (n = t.charCodeAt(i + 1)) && 57343 >= n) ? 1024 * (o - 55296) + n - 56320 + 65536 : o
                }
            },
            C = function() {
                var A, e, t, r = [],
                    i = -1,
                    n = arguments.length;
                if (!n) return "";
                for (var o = ""; ++i < n;) {
                    if (t = +arguments[i], !isFinite(t) || 0 > t || 1114111 < t || Math.floor(t) != t) throw RangeError("Invalid code point: " + t);
                    65535 >= t ? r.push(t) : (A = 55296 + ((t -= 65536) >> 10), e = t % 1024 + 56320, r.push(A, e)), (i + 1 == n || r.length > 16384) && (o += String.fromCharCode.apply(null, r), r.length = 0)
                }
                return o
            };

        function l(A, e = 0) {
            var t, r = 0,
                i = e,
                n = A.length ? (A => {
                    if ("string" != typeof A || 0 === A.length) return 0;
                    for (var e, t = 0, r = 0; r < A.length; r++)
                        if (!((e = A.codePointAt(r)) > 55295 && e < 57344))
                            if (e < 128) t++;
                            else if (e < 2048) t += 2;
                    else if (e < 65536) t += 3;
                    else {
                        if (!(e < 1114112)) throw new Error("Invalid char code");
                        t += 4
                    }
                    return t
                })(A) : 0,
                o = e + n,
                s = new Uint8Array(o >= 0 ? o : 0);
            if (0 === n || -1 !== n && 0 === s.length) return s;
            for (; r < A.length; r++)
                if (!((t = u(A, r)) > 55295 && t < 57344 || i < 0))
                    if (t < 128) s[i++] = t;
                    else if (t < 2048) s[i++] = t >> 6 | 192, s[i++] = 63 & t | 128;
            else if (t < 65536) s[i++] = t >> 12 | 224, s[i++] = t >> 6 & 63 | 128, s[i++] = 63 & t | 128;
            else {
                if (!(t < 1114112)) throw new Error("Invalid char code");
                s[i++] = t >> 18 | 240, s[i++] = t >> 12 & 63 | 128, s[i++] = t >> 6 & 63 | 128, s[i++] = 63 & t | 128
            }
            return s
        }
        var c = (() => Object.prototype.toString)(),
            B = Function.prototype.call.bind(c);

        function Q(A) {
            return B(A).slice(8, -1)
        }
        var h = A => "Object" === Q(A),
            y = A => "Promise" === Q(A);
        var p = new Map,
            E = (A, e, t) => {
                worker.postMessage({
                    cmd: "callback",
                    callbackId: A,
                    data: {
                        result: e,
                        errMsg: t
                    }
                })
            };
        worker.onMessage((A => {
            var e, {
                data: t,
                callbackId: r,
                cmd: i
            } = A;
            try {
                var n = p.get(i);
                "function" == typeof n && (e = n(t))
            } catch (A) {
                E(r, void 0, A.message)
            }
            y(e) ? e.then((A => {
                E(r, A)
            })).catch((A => {
                E(r, void 0, A.message)
            })) : E(r, e)
        }));
        var d = (A, e) => {
                p.set(A, e)
            },
            f = A => A.key ? A.key + "." + A.val : "STR_" + A.val,
            v = A => {
                var e = A.rules.map((A => (A => {
                        var e = f(A);
                        return {
                            key: "userCustom:" + e,
                            type: "Pat",
                            url: A.url,
                            test: {
                                test: A.key,
                                flag: A.flag || ""
                            },
                            withRely: [{
                                key: "userCustomWR:" + e + "_val",
                                type: "Pat",
                                test: {
                                    test: A.val,
                                    flag: A.flag || ""
                                }
                            }]
                        }
                    })(A))),
                    t = A.strRules.map((A => (A => {
                        var e;
                        return {
                            key: "userCustom:" + ("string" != typeof A ? f(A) : "STR_" + A),
                            type: "Pat",
                            url: null == A ? void 0 : A.url,
                            test: {
                                test: "string" == typeof A ? A : A.val,
                                flag: "string" == typeof A ? "i" : null !== (e = A.flag) && void 0 !== e ? e : "i"
                            }
                        }
                    })(A))),
                    r = {};
                return Object.keys(A.priority).forEach((e => {
                    r["userCustom:" + e] = A.priority[e]
                })), {
                    object: {
                        conditions: e
                    },
                    string: {
                        conditions: t
                    },
                    priorities: r,
                    schemaVersion: "9.9.99"
                }
            },
            D = .0329,
            S = "__return_true",
            L = A => `__return_resolve_${A}`,
            M = A => {
                if ("string" == typeof A) {
                    if (A.startsWith("[") || A.startsWith("{")) try {
                        A = JSON.parse(A)
                    } catch (A) {}
                    return A
                }
                return A
            },
            w = A => {
                try {
                    return A.map((A => A.join(".")))
                } catch (A) {
                    return []
                }
            };
        const R = class {
            constructor(A, e) {
                this.prunePointKV = A => A.map((A => this.pruneOriginData(A).data)), "string" == typeof A && (A = JSON.parse(A)), "[object Object]" !== Object.prototype.toString.call(A) && (A = {
                    object: {},
                    string: {}
                }), this.objectSchema = A.object, this.stringSchema = A.string, this.schema = A, this.preHandleSchema({
                    appId: e
                }), this.priorities = A.priorities || {}
            }
            getSchema() {
                return this.schema
            }
            getSchemaVersion() {
                return this.schema.schemaVersion
            }
            preHandleSchema(A = {}) {
                var {
                    appId: e
                } = A, t = A => {
                    Array.isArray(A) && A.forEach(((r, i) => {
                        if ((A => A.if || A.test)(r)) {
                            if (r.specific)
                                if ("include" === r.specific.type) {
                                    if (Array.isArray(r.specific.data) && !r.specific.data.includes(e)) return void delete A[i]
                                } else if ("exclude" === r.specific.type && Array.isArray(r.specific.data) && r.specific.data.includes(e)) return void delete A[i];
                            [r.with, r.withRely, r.someWith, r.someWithRely].forEach((A => {
                                t(A)
                            }))
                        }
                    }))
                };
                t(this.schema.object.conditions), t(this.schema.string.conditions)
            }
            _pruneOriginData(A, e, t = {}) {
                try {
                    if ("number" == typeof A && (A = String(A)), "string" == typeof A) return "replace" === e.type ? e.replace.reduce(((A, e) => {
                        var r = new RegExp(e.test, e.flag);
                        return A.replace(r, (A => (Array.isArray(t.point) && t.point.push(e.tag), "$&" === e.modify ? A : e.modify)))
                    }), A) : A;
                    if ("object" == typeof A && null !== A) return Object.keys(A).forEach((r => {
                        if ("match" === e.type) return new RegExp(e.test.test, e.test.flag).test(r) ? void(e.rely ? A[r] = this._pruneOriginData(A[r], e.rely, t) : null != e.replace && (A[r] = e.replace)) : void(e.deep && (A[r] = this._pruneOriginData(A[r], e, t)));
                        e.deep && (A[r] = this._pruneOriginData(A[r], e, t))
                    })), A
                } catch (A) {
                    return null
                }
                return null
            }
            pruneOriginData(A) {
                var e = "string" == typeof A ? this.stringSchema.prunes : this.objectSchema.prunes,
                    t = {
                        point: []
                    };
                return e && e.length && e.forEach((e => {
                    "string" == typeof A ? A = this._pruneOriginData(A, e, t) : this._pruneOriginData(A, e, t)
                })), {
                    data: A,
                    infos: t
                }
            }
            _resolvePendingCondition(A, e, t, r = []) {
                if (!t) return !1;
                if ("pending" !== t.status) return "resolve" === t.status;
                if (r.includes(t.key)) return !1;
                var i = !0,
                    n = !1;
                for (var o of (r.push(t.key), t.peers)) {
                    var s;
                    if (!r.includes(o.key))
                        if ("pending" === (null === (s = e[o.key]) || void 0 === s ? void 0 : s.status)) {
                            var g = {
                                    ...e[o.key],
                                    key: o.key
                                },
                                a = this._resolvePendingCondition(A, e, g, r.concat(o.key));
                            o.not && (a = !a), a || (i = !1)
                        } else {
                            var I, u, C;
                            if (o.not) "resolve" === (null === (I = e[o.key]) || void 0 === I ? void 0 : I.status) && (i = !1);
                            else null !== (u = e[o.key]) && void 0 !== u && u.status && "reject" !== (null === (C = e[o.key]) || void 0 === C ? void 0 : C.status) || (i = !1);
                            o.resolve && (A.push(t.push.concat(`p_${o.key}`)), n = !0)
                        }
                }
                return r.splice(r.findIndex((A => A === t.key)), 1), e[t.key].status = n || i ? "resolve" : "reject", !(n || !i) && (A.push(t.push.concat("p_a")), !0)
            }
            resolvePendingCondition(A, e) {
                Object.entries(e).forEach((([t, r]) => {
                    r.key = t, this._resolvePendingCondition(A, e, r, [])
                }))
            }
            judgeData(A, e = {}, t = {}) {
                var {
                    exceptionPriorirtyThreshold: r = 0
                } = t;
                e = {
                    ...e
                };
                var i = [],
                    n = [],
                    o = {};
                try {
                    if (h(A)) {
                        var {
                            conditions: s
                        } = this.objectSchema || {};
                        if (!s) return {
                            error: "noObjectCondition",
                            result: !1
                        };
                        Object.keys(A).forEach((t => {
                            var r = A[t];
                            s.forEach((A => {
                                var s = A.key,
                                    g = [];
                                e.__pointCondition = g, e.__kv = n;
                                var a = this.resolveCondition(A, t, r, e);
                                if (A.not && (a = !a, s = "-" + s), A.resolve) {
                                    var I = !0;
                                    if ("reverse" === A.resolve ? a = !a : "reverse-true" === A.resolve ? a ? a = !a : I = !1 : "reverse-false" === A.resolve ? a ? I = !1 : a = !a : "true" !== A.resolve || a ? "false" === A.resolve && a && (I = !1) : I = !1, I) throw i.push([s].concat(g)), L(a ? "true" : "false")
                                }
                                if (a) {
                                    if (!o[s]) {
                                        if (A.peers) return void(o[s] = {
                                            status: "pending",
                                            peers: A.peers,
                                            push: [s].concat(g)
                                        });
                                        o[s] = {
                                            status: "resolve"
                                        }
                                    }
                                    A.onlyAsRely || i.push([s].concat(g))
                                }
                            }))
                        }))
                    } else if ("string" == typeof A) {
                        var {
                            conditions: g
                        } = this.stringSchema || {};
                        if (!g) return {
                            error: "noStringCondition",
                            result: !1
                        };
                        g.forEach((e => {
                            if ("Pat" === e.type) {
                                var t = !1;
                                if (new RegExp(e.test.test, e.test.flag).test(A) && (t = !0, e.not && (t = !t), e.resolve)) {
                                    var r = !0;
                                    if ("reverse" === e.resolve ? t = !t : "reverse-true" === e.resolve ? t ? t = !t : r = !1 : "reverse-false" === e.resolve ? t ? r = !1 : t = !t : "true" !== e.resolve || t ? "false" === e.resolve && t && (r = !1) : r = !1, r) throw i.push([e.key]), L(t ? "true" : "false")
                                }
                                t && i.push([e.key])
                            }
                        }))
                    }
                } catch (A) {
                    if ("string" == typeof A) {
                        var a = A.match(/__return_resolve_(.*)/);
                        if (a) return (a = "false" !== a[1]) ? {
                            result: !0,
                            point: w(i),
                            priority: "resolve",
                            kvResult: this.prunePointKV(n)
                        } : {
                            result: !1,
                            priority: "resolve",
                            point: w(i)
                        }
                    }
                }
                this.resolvePendingCondition(i, o);
                var I, u, C, l, c = (I = i, u = this.priorities, C = !1, l = w(I).reduce(((A, e) => {
                    var t, r, i, n = u[(A => {
                        try {
                            return A.split(".")[0] + ".*"
                        } catch (A) {
                            return ""
                        }
                    })(e)];
                    return (i = void 0 !== n ? n : "-" === e[0] ? null !== (t = u[e]) && void 0 !== t ? t : -.5 : null !== (r = u[e]) && void 0 !== r ? r : .5) === D && (C = !0), A + i
                }), 0), l > 0 && C ? D : l);
                return c > r ? {
                    result: !0,
                    point: w(i),
                    priority: c,
                    kvResult: this.prunePointKV(n)
                } : {
                    result: !1,
                    priority: c,
                    point: w(i)
                }
            }
            matchCondition(A, e, t = {}) {
                var {
                    url: r
                } = t;
                if (!A || void 0 === e) return null;
                if (r && A.url && !new RegExp(A.url, "i").test(r)) return null;
                if ("Pat" === A.type && A.test) return new RegExp(A.test.test, A.test.flag).test(e);
                if ("If" !== A.type || !A.if) return null;
                var i = A.if;
                if (i.pre) switch (i.pre) {
                    case "number":
                        e = Number.isNaN(Number(e)) && null !== e ? e : Number(e);
                        break;
                    case "string":
                        e = String(e);
                        break;
                    case "boolean":
                        e = !!e
                }
                switch (i.compare) {
                    case "not":
                        return !e;
                    case "eq":
                        return e == i.right;
                    case "stricteq":
                        return e === i.right;
                    case "gt":
                        return e > i.right;
                    case "gte":
                        return e >= i.right;
                    case "lt":
                        return e < i.right;
                    case "lte":
                        return e <= i.right;
                    case "Type":
                        return Object.prototype.toString.call(e) === `[object ${i.right}]`;
                    default:
                        return !1
                }
            }
            resolveCondition(A, e, t, r = {}, {
                deep: i = !1,
                judgeWith: n = !1,
                prefix: o = ""
            } = {}) {
                var s = r.url,
                    g = r.__pointCondition || [],
                    a = r.__kv;
                if (r.__pointCondition = [], void 0 === e) return !1;
                try {
                    if (h(e) && (n || i)) {
                        var I = e;
                        return Object.keys(I).forEach((e => {
                            if (i && (r.__pointCondition = g), this.resolveCondition(A, e, I[e], r, {
                                    deep: i,
                                    prefix: o
                                })) throw i || g.push(A.key), S
                        })), !1
                    }
                    var u = null;
                    if (u = this.matchCondition(A, e, {
                            url: s
                        }), Array.isArray(A.withRelyResponse) && u && (A.withRelyResponse.every((A => this.matchCondition(A.condition, r[A.responseKey]))) || (u = !1)), A.not && null !== u && (u = !u), u) {
                        var C, {
                                with: l,
                                withRely: c,
                                someWith: B,
                                someWithRely: Q
                            } = A,
                            y = !(l || c || B || Q);
                        return l ? (C = l.every((A => this.resolveCondition(A, e, t, r, {
                            deep: !1,
                            judgeWith: !0
                        }))), C && g.push("a") && a.push({
                            [o + `${o?".":""}${e}`]: t
                        })) : c ? (C = c.every((A => this.resolveCondition(A, t, null, r))), C && g.push("b") && a.push({
                            [o + `${o?".":""}${e}`]: t
                        })) : B ? C = B.some((A => {
                            var i = this.resolveCondition(A, e, t, r, {
                                deep: !1,
                                judgeWith: !0
                            });
                            return i && g.push("c_" + A.key) && a.push({
                                [o + `${o?".":""}${e}`]: t
                            }), i
                        })) : Q && (C = Q.some((A => {
                            var i = this.resolveCondition(A, t, null, r);
                            return i && g.push("d_" + A.key) && a.push({
                                [o + `${o?".":""}${e}`]: t
                            }), i
                        }))), C || y ? !0 : (t = M(t), !(!A.deep || !h(t)) && (r.__pointCondition = g, this.resolveCondition(A, t, null, r, {
                            deep: !0,
                            prefix: o + `${o?".":""}${e}`
                        })))
                    }
                    if ((A.deep || A.thisDeep) && (t = M(A.deep ? t : e), h(t))) return r.__pointCondition = g, this.resolveCondition(A, t, null, r, {
                        deep: !0,
                        prefix: o + `${o?".":""}${A.deep?e:""}`
                    })
                } catch (A) {
                    return A === S
                }
            }
        };
        var z, m, O, k = [],
            b = [],
            F = [],
            G = A => {
                b.push(A)
            },
            P = A => {
                F.push(A)
            },
            H = (A, e) => {
                O = !!A && new R(A, e), k.forEach((A => A(O)))
            },
            X = (A, e, t = !1) => {
                t ? (m = new R(A, e), F.forEach((A => A(m)))) : (z = new R(A, e), b.forEach((A => A(z))))
            },
            N = A => Array.isArray(A) ? [...new Set(A)] : A,
            U = A => !!O && (!!A.data && O.judgeData(A.data, A)),
            _ = (A, e = !1, t = null, r = {}) => {
                var {
                    exceptionPriorirtyThreshold: i = 0,
                    delay: n
                } = r, o = t || (e ? m : z);
                return o ? !!A.data && o.judgeData(A.data, A, {
                    exceptionPriorirtyThreshold: i
                }) : !!n && new Promise((t => {
                    (e ? P : G)((() => {
                        t((e ? m : z).judgeData(A.data, A, {
                            exceptionPriorirtyThreshold: i
                        }))
                    }))
                }))
            },
            x = (A, e = !1) => {
                var t = e ? m : z;
                return !!t && t.pruneOriginData(A)
            },
            W = (A = !1, e) => {
                var t, r = e ? O : A ? m : z;
                return r ? null !== (t = r.getSchemaVersion()) && void 0 !== t ? t : -2 : -1
            },
            j = (A, e, t = 1, r = 0) => A += e ? t + "," : r + ",",
            K = (A, e = !1, t = 0) => {
                var r, i = 1 !== t && (2 === t || (null === (r = z) || void 0 === r ? void 0 : r.keyPriority) <= A),
                    n = A === D,
                    o = "";
                return o = j(o, !0, String(A)), o = j(o, e), o = j(o, !0, t ? t + 1 : i ? 1 : 0), (o = j(o, !0, n ? 1 : t ? 2 : 0)).endsWith(",") && (o = o.slice(0, o.length - 1)), o
            },
            V = (A, e) => ({
                key: e,
                type: "Pat",
                test: {
                    test: ".*",
                    flag: "i"
                },
                someWithRely: A.map((A => {
                    var e;
                    return {
                        type: "Pat",
                        test: {
                            test: A.pure,
                            flag: null !== (e = A.flag) && void 0 !== e ? e : ""
                        },
                        key: A.key,
                        deep: A.deep
                    }
                }))
            }),
            q = (A, e) => A.map((A => {
                var t, r;
                return {
                    type: "Pat",
                    key: e + A.key,
                    test: {
                        test: A.matchKey,
                        flag: null !== (t = A.flag) && void 0 !== t ? t : ""
                    },
                    deep: A.deep,
                    withRely: [{
                        type: "Pat",
                        key: "",
                        test: {
                            test: A.pure,
                            flag: null !== (r = A.flag) && void 0 !== r ? r : ""
                        }
                    }]
                }
            })),
            J = (A, e) => ({
                key: e,
                type: "replace",
                replace: A.map((A => {
                    var e;
                    return {
                        tag: A.key,
                        test: (A.prefix || "") + A.pure + (A.suffix || ""),
                        flag: null !== (e = A.flag) && void 0 !== e ? e : "",
                        modify: A.modify || ""
                    }
                }))
            }),
            Y = A => {
                var {
                    importantKeyInfo: e = [],
                    sensitiveInfo: t = [],
                    safeSensitiveInfo: r = []
                } = A, i = [], n = [], o = [], s = [];
                t.forEach((A => {
                    A.matchKey ? i.push(A) : n.push(A)
                })), r.forEach((A => {
                    A.matchKey ? o.push(A) : s.push(A)
                }));
                var g = V(n, "4000"),
                    a = q(i, "4000.d_"),
                    I = V(s, "2000"),
                    u = q(o, "2000.d_"),
                    C = ((A, e) => A.map((A => {
                        var t;
                        return {
                            type: "Pat",
                            key: e,
                            test: {
                                test: A.pure,
                                flag: null !== (t = A.flag) && void 0 !== t ? t : ""
                            },
                            deep: A.deep
                        }
                    })))(e, "3000"),
                    l = ((A, e) => A.map((A => {
                        var t;
                        return {
                            key: e,
                            type: "match",
                            test: {
                                test: A.pure,
                                flag: null !== (t = A.flag) && void 0 !== t ? t : ""
                            },
                            replace: "",
                            deep: A.deep
                        }
                    })))(e, "502"),
                    c = ((A, e, t) => ({
                        key: t,
                        type: "match",
                        test: {
                            test: ".*",
                            flag: ""
                        },
                        rely: {
                            type: "replace",
                            replace: [...A, ...e].map((A => {
                                var e;
                                return {
                                    tag: A.key,
                                    test: A.pure,
                                    flag: null !== (e = A.flag) && void 0 !== e ? e : "",
                                    modify: A.modify || ""
                                }
                            }))
                        }
                    }))(s, n, "501");
                return {
                    prunes: [...l, c],
                    prefixPrunes: [J([...r, ...t], "500")],
                    conditions: [g, ...a, I, ...u, ...C]
                }
            },
            T = A => {
                try {
                    var e, t, r, i = A.common;
                    if (!i) return;
                    var {
                        conditions: n,
                        prunes: o,
                        prefixPrunes: s
                    } = Y(i);
                    Array.isArray(null == A || null === (e = A.object) || void 0 === e ? void 0 : e.conditions) && A.object.conditions.unshift(...n), Array.isArray(null == A || null === (t = A.object) || void 0 === t ? void 0 : t.prunes) && A.object.prunes.push(...o), Array.isArray(null == A || null === (r = A.string) || void 0 === r ? void 0 : r.prunes) && A.string.prunes.push(...s)
                } catch (A) {}
            },
            Z = A => A && A.filter((A => A.startsWith("2000"))),
            $ = (A, e, t) => {
                var r, i, n = !1;
                try {
                    try {
                        A.data = JSON.parse(A.data)
                    } catch (A) {}
                    if (e.data) try {
                        e.data = JSON.parse(e.data)
                    } catch (A) {}
                    var o = _(A, !0);
                    null != o && o.result && (n = !0, i = o.point)
                } catch (A) {}
                if (r = n, t) try {
                    if (e.errMsg || e.statusCode >= 400) return {
                        hasError: !0,
                        reportBody: e.data,
                        isImportantRequest: r,
                        isWxClientError: !0
                    };
                    var s, g, a, I, u;
                    e.url = A.url, u = U(e), delete e.url, !u || !u.result && (null === (s = u.point) || void 0 === s || !s.length) || !u.result && null !== (g = u.point) && void 0 !== g && g.length && u.priority > -15 ? u = _(e, !1, null, {
                        delay: !0,
                        exceptionPriorirtyThreshold: -(null !== (a = null === (I = u) || void 0 === I ? void 0 : I.priority) && void 0 !== a ? a : 0)
                    }) : u.result && (u.priority < 15 ? u.hitUserLowPriortyCustom = !0 : u.hitUserHighPriorityCustom = !0);
                    var C = t => {
                        var n, o, s, g, a = (o = null == t ? void 0 : t.point) && o.filter((A => A.startsWith("4000") || A.startsWith("3000") || A.startsWith("2000")));
                        return r = !!(r || null !== (n = a) && void 0 !== n && n.length), i = N(Z(i)), a = N(Z(a)), null != t && t.result ? {
                            type: "checkResponse",
                            hasError: !0,
                            reportBody: null === (s = x(e.data)) || void 0 === s ? void 0 : s.data,
                            reportArgs: null === (g = x(A.data)) || void 0 === g ? void 0 : g.data,
                            isImportantRequest: r,
                            key: K(t.priority, r, t.hitUserLowPriortyCustom ? 1 : t.hitUserHighPriorityCustom ? 2 : 0),
                            point: N(t.point),
                            priority: t.priority,
                            schemaVersion: W(),
                            kvResult: t.kvResult,
                            ...r ? {
                                sensitiveRequestPoint: i,
                                sensitveResponsePoint: a
                            } : {}
                        } : {
                            type: "checkResponse",
                            isImportantRequest: r,
                            hasError: !1,
                            sensitiveRequestPoint: i,
                            ...r ? {
                                sensitiveRequestPoint: i,
                                sensitveResponsePoint: a
                            } : {}
                        }
                    };
                    return y(u) ? new Promise((A => {
                        u.then((e => {
                            A(C(e))
                        }))
                    })) : C(u)
                } catch (A) {
                    wxNativeConsole.error("interprete 24247 error:", A)
                }
                return {
                    type: "checkRequest",
                    point: i,
                    isImportantRequest: r
                }
            },
            AA = {
                req: null,
                res: null
            },
            eA = {};
        d("initAesWasm", a), d("aesEncrypt", (A => {
            var e, {
                data: t,
                tokenInfo: i,
                useBinary: n,
                isArrayData: o
            } = A;
            return o ? e = new Uint8Array(t) : ArrayBuffer.isView(t) || (e = l(t)), I(e, new Uint8Array(i.encryptKeyBytes), new Uint8Array(i.ivBytes)).then((A => n ? A.buffer : function(A) {
                for (var e, t = "", i = (e = ArrayBuffer.isView(A) && "Uint8Array" === A.constructor.name ? A : new Uint8Array(A)).byteLength, n = 0; n < i; n++) t += String.fromCharCode(e[n]);
                return r(t)
            }(A)))
        })), d("aesDecrypt", (A => {
            var e, {
                tokenInfo: t,
                data: r
            } = A;
            return e = "string" == typeof r ? n(r) : new ArrayBuffer(0),
                function(A, e, t) {
                    return a().then((r => {
                        var i = (new r).decrypt(r.MODE_CBC, A, e, t);
                        return i = (A => A.slice(0, A.length - A[A.length - 1]))(i), i
                    }))
                }(new Uint8Array(e), new Uint8Array(t.encryptKeyBytes), new Uint8Array(t.ivBytes)).then((A => {
                    var e = function(A) {
                        for (var e = [], t = 0, r = 0, i = 0; i < A.length; i++)
                            if (t) r |= (63 & A[i]) << 6 * --t, 0 === t && e.push(C(r));
                            else {
                                if (240 == (240 & A[i])) t = 3;
                                else if (224 == (224 & A[i])) t = 2;
                                else if (192 == (192 & A[i])) t = 1;
                                else if (0 == (128 & A[i])) {
                                    e.push(String.fromCharCode(A[i]));
                                    continue
                                }
                                r = (A[i] & 255 >> t + 2) << 6 * t
                            } return e.join("")
                    }(A);
                    return e
                }))
        })), d("createWeAppRequestInterpreter", (A => {
            var {
                rules: e,
                appid: t,
                userRules: r
            } = A;
            try {
                e = JSON.parse(e)
            } catch (A) {}
            if (e.exclusive) {
                var {
                    req: i,
                    res: n
                } = e;
                return i && (AA.req = {
                    priorities: {},
                    keyPriority: 0,
                    schemaVersion: e.schemaVersion,
                    object: {
                        conditions: i,
                        prunes: null
                    },
                    string: {
                        conditions: [],
                        prunes: null
                    }
                }), void(n && (AA.res = {
                    priorities: {},
                    keyPriority: 0,
                    schemaVersion: e.schemaVersion,
                    object: {
                        conditions: n,
                        prunes: null
                    },
                    string: {
                        conditions: [],
                        prunes: null
                    }
                }))
            }
            if (AA.req) X(AA.req, t, !0);
            else {
                var o = (A => {
                    if (null != A && A.common) {
                        var {
                            conditions: e
                        } = Y(A.common);
                        return {
                            priorities: {},
                            keyPriority: 0,
                            schemaVersion: A.schemaVersion,
                            object: {
                                conditions: e,
                                prunes: null
                            },
                            string: {
                                conditions: [],
                                prunes: null
                            }
                        }
                    }
                })(e);
                X(o, t, !0)
            }
            AA.res ? (AA.res.object.prunes = e.object.prunes, AA.res.string.prunes = e.string.prunes, AA.res.common = e.common, T(AA.res)) : T(e), X(AA.res || e, t), (r || "" === r) && (A => {
                var {
                    userRules: e,
                    appid: t
                } = A;
                try {
                    var r;
                    e && (e = JSON.parse(e), r = v(e)), H(r, t)
                } catch (A) {
                    wxNativeConsole.warn("createUserCustomInterpreter occur error:", A)
                }
            })({
                userRules: r,
                appid: t
            })
        })), d("checkRequest", ((A = {}) => {
            var {
                requestData: e,
                response: t,
                checkResponse: r = !0,
                delay: i
            } = A;
            return i && !((A = !1) => A ? m : z)() ? new Promise((A => {
                var i = 0,
                    n = () => {
                        A($(e, t, r))
                    };
                G((() => {
                    2 === ++i && n()
                })), (A => {
                    k.push(A)
                })((() => {
                    2 === ++i && n()
                }))
            })) : $(e, t, r)
        })), d("resolveInteractiveApiContent", ((A = {}) => {
            var e, t, r, {
                    content: i
                } = A,
                n = {
                    data: i
                };
            return !(r = U(n)) || !r.result && (null === (e = r.point) || void 0 === e || !e.length) || !r.result && null !== (t = r.point) && void 0 !== t && t.length && r.priority > -15 ? r = _(n, !1, null) : r.result && (r.priority < 15 ? r.hitUserLowPriortyCustom = !0 : r.hitUserHighPriorityCustom = !0), r
        })), d("resolveApiFullRule", ((A = {}) => {
            var e = ((A = {}) => {
                var {
                    name: e,
                    rules: t,
                    data: r
                } = A, i = eA[e];
                return i || (i = eA[e] = new R(t, A.appid)), _({
                    data: r
                }, !1, i)
            })({
                data: A.data,
                rules: A.rules,
                name: "api",
                appid: A.appid
            });
            return e
        }))
    })()
}(this);