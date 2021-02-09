! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("./firebase-app")) : "function" == typeof define && define.amd ? define(["./firebase-app"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).firebase)
}(this, function (ut) {
    "use strict";
    try {
        (function () {
            function e(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var t = e(ut),
                n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (e, t) {
                            e.__proto__ = t
                        } || function (e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                };
            var p = function () {
                return (p = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function d(e, s, a, u) {
                return new(a = a || Promise)(function (n, t) {
                    function r(e) {
                        try {
                            o(u.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function i(e) {
                        try {
                            o(u.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function o(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof a ? t : new a(function (e) {
                            e(t)
                        })).then(r, i)
                    }
                    o((u = u.apply(e, s || [])).next())
                })
            }

            function h(n, r) {
                var i, o, s, a = {
                        label: 0,
                        sent: function () {
                            if (1 & s[0]) throw s[1];
                            return s[1]
                        },
                        trys: [],
                        ops: []
                    },
                    e = {
                        next: t(0),
                        throw: t(1),
                        return: t(2)
                    };
                return "function" == typeof Symbol && (e[Symbol.iterator] = function () {
                    return this
                }), e;

                function t(t) {
                    return function (e) {
                        return function (t) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, o && (s = 2 & t[0] ? o.return : t[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t[1])).done) return s;
                                switch (o = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        s = t;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, o = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                            a.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && a.label < s[1]) {
                                            a.label = s[1], s = t;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(t);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                t = r.call(n, a)
                            } catch (e) {
                                t = [6, e], o = 0
                            } finally {
                                i = s = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            }

            function c(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function () {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(function (e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, i, o = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || 0 < t--) && !(r = o.next()).done;) s.push(r.value)
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = o.return) && n.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return s
                }(arguments[t]));
                return e
            }
            var i, o, s, a = "FirebaseError",
                u = (i = Error, n(o = f, s = i), o.prototype = null === s ? Object.create(s) : (l.prototype = s.prototype, new l), f);

            function l() {
                this.constructor = o
            }

            function f(e, t, n) {
                t = i.call(this, t) || this;
                return t.code = e, t.customData = n, t.name = a, Object.setPrototypeOf(t, f.prototype), Error.captureStackTrace && Error.captureStackTrace(t, v.prototype.create), t
            }
            var v = (g.prototype.create = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r, i = t[0] || {},
                    o = this.service + "/" + e,
                    e = this.errors[e],
                    e = e ? (r = i, e.replace(b, function (e, t) {
                        var n = r[t];
                        return null != n ? String(n) : "<" + t + "?>"
                    })) : "Error",
                    e = this.serviceName + ": " + e + " (" + o + ").";
                return new u(o, e, i)
            }, g);

            function g(e, t, n) {
                this.service = e, this.serviceName = t, this.errors = n
            }
            var b = /\{\$([^}]+)}/g,
                y = (w.prototype.setInstantiationMode = function (e) {
                    return this.instantiationMode = e, this
                }, w.prototype.setMultipleInstances = function (e) {
                    return this.multipleInstances = e, this
                }, w.prototype.setServiceProps = function (e) {
                    return this.serviceProps = e, this
                }, w);

            function w(e, t, n) {
                this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY"
            }

            function m(n) {
                return new Promise(function (e, t) {
                    n.onsuccess = function () {
                        e(n.result)
                    }, n.onerror = function () {
                        t(n.error)
                    }
                })
            }

            function k(n, r, i) {
                var o, e = new Promise(function (e, t) {
                    m(o = n[r].apply(n, i)).then(e, t)
                });
                return e.request = o, e
            }

            function S(e, n, t) {
                t.forEach(function (t) {
                    Object.defineProperty(e.prototype, t, {
                        get: function () {
                            return this[n][t]
                        },
                        set: function (e) {
                            this[n][t] = e
                        }
                    })
                })
            }

            function I(t, n, r, e) {
                e.forEach(function (e) {
                    e in r.prototype && (t.prototype[e] = function () {
                        return k(this[n], e, arguments)
                    })
                })
            }

            function T(t, n, r, e) {
                e.forEach(function (e) {
                    e in r.prototype && (t.prototype[e] = function () {
                        return this[n][e].apply(this[n], arguments)
                    })
                })
            }

            function C(e, r, t, n) {
                n.forEach(function (n) {
                    n in t.prototype && (e.prototype[n] = function () {
                        return e = this[r], (t = k(e, n, arguments)).then(function (e) {
                            if (e) return new P(e, t.request)
                        });
                        var e, t
                    })
                })
            }

            function _(e) {
                this._index = e
            }

            function P(e, t) {
                this._cursor = e, this._request = t
            }

            function D(e) {
                this._store = e
            }

            function j(n) {
                this._tx = n, this.complete = new Promise(function (e, t) {
                    n.oncomplete = function () {
                        e()
                    }, n.onerror = function () {
                        t(n.error)
                    }, n.onabort = function () {
                        t(n.error)
                    }
                })
            }

            function M(e, t, n) {
                this._db = e, this.oldVersion = t, this.transaction = new j(n)
            }

            function O(e) {
                this._db = e
            }

            function E(e, t, n) {
                var t = k(indexedDB, "open", [e, t]),
                    r = t.request;
                return r && (r.onupgradeneeded = function (e) {
                    n && n(new M(r.result, e.oldVersion, r.transaction))
                }), t.then(function (e) {
                    return new O(e)
                })
            }

            function K(e) {
                return k(indexedDB, "deleteDatabase", [e])
            }
            S(_, "_index", ["name", "keyPath", "multiEntry", "unique"]), I(_, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), C(_, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), S(P, "_cursor", ["direction", "key", "primaryKey", "value"]), I(P, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach(function (n) {
                n in IDBCursor.prototype && (P.prototype[n] = function () {
                    var t = this,
                        e = arguments;
                    return Promise.resolve().then(function () {
                        return t._cursor[n].apply(t._cursor, e), m(t._request).then(function (e) {
                            if (e) return new P(e, t._request)
                        })
                    })
                })
            }), D.prototype.createIndex = function () {
                return new _(this._store.createIndex.apply(this._store, arguments))
            }, D.prototype.index = function () {
                return new _(this._store.index.apply(this._store, arguments))
            }, S(D, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), I(D, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), C(D, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), T(D, "_store", IDBObjectStore, ["deleteIndex"]), j.prototype.objectStore = function () {
                return new D(this._tx.objectStore.apply(this._tx, arguments))
            }, S(j, "_tx", ["objectStoreNames", "mode"]), T(j, "_tx", IDBTransaction, ["abort"]), M.prototype.createObjectStore = function () {
                return new D(this._db.createObjectStore.apply(this._db, arguments))
            }, S(M, "_db", ["name", "version", "objectStoreNames"]), T(M, "_db", IDBDatabase, ["deleteObjectStore", "close"]), O.prototype.transaction = function () {
                return new j(this._db.transaction.apply(this._db, arguments))
            }, S(O, "_db", ["name", "version", "objectStoreNames"]), T(O, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach(function (i) {
                [D, _].forEach(function (e) {
                    i in e.prototype && (e.prototype[i.replace("open", "iterate")] = function () {
                        var e = (n = arguments, Array.prototype.slice.call(n)),
                            t = e[e.length - 1],
                            n = this._store || this._index,
                            r = n[i].apply(n, e.slice(0, -1));
                        r.onsuccess = function () {
                            t(r.result)
                        }
                    })
                })
            }), [_, D].forEach(function (e) {
                e.prototype.getAll || (e.prototype.getAll = function (e, n) {
                    var r = this,
                        i = [];
                    return new Promise(function (t) {
                        r.iterateCursor(e, function (e) {
                            e ? (i.push(e.value), void 0 === n || i.length != n ? e.continue() : t(i)) : t(i)
                        })
                    })
                })
            });
            var x = "0.4.19",
                N = 1e4,
                A = "w:" + x,
                q = "FIS_v2",
                R = "https://firebaseinstallations.googleapis.com/v1",
                B = 36e5,
                L = ((L = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', L["not-registered"] = "Firebase Installation is not registered.", L["installation-not-found"] = "Firebase Installation not found.", L["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', L["app-offline"] = "Could not process request. Application offline.", L["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", L),
                V = new v("installations", "Installations", L);

            function F(e) {
                return e instanceof u && e.code.includes("request-failed")
            }

            function U(e) {
                e = e.projectId;
                return R + "/projects/" + e + "/installations"
            }

            function W(e) {
                return {
                    token: e.token,
                    requestStatus: 2,
                    expiresIn: (e = e.expiresIn, Number(e.replace("s", "000"))),
                    creationTime: Date.now()
                }
            }

            function H(n, r) {
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.json()];
                            case 1:
                                return t = e.sent(), t = t.error, [2, V.create("request-failed", {
                                    requestName: n,
                                    serverCode: t.code,
                                    serverMessage: t.message,
                                    serverStatus: t.status
                                })]
                        }
                    })
                })
            }

            function $(e) {
                e = e.apiKey;
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }

            function G(e, t) {
                t = t.refreshToken, e = $(e);
                return e.append("Authorization", q + " " + t), e
            }

            function z(n) {
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, n()];
                            case 1:
                                return 500 <= (t = e.sent()).status && t.status < 600 ? [2, n()] : [2, t]
                        }
                    })
                })
            }

            function J(t) {
                return new Promise(function (e) {
                    setTimeout(e, t)
                })
            }
            var Y = /^[cdef][\w-]{21}$/,
                Z = "";

            function Q() {
                try {
                    var e = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
                    e = function (e) {
                        return btoa(String.fromCharCode.apply(String, r(e))).replace(/\+/g, "-").replace(/\//g, "_")
                    }(e).substr(0, 22);
                    return Y.test(e) ? e : Z
                } catch (e) {
                    return Z
                }
            }

            function X(e) {
                return e.appName + "!" + e.appId
            }
            var ee = new Map;

            function te(e, t) {
                e = X(e);
                ne(e, t),
                    function (e, t) {
                        var n = ie();
                        n && n.postMessage({
                            key: e,
                            fid: t
                        });
                        oe()
                    }(e, t)
            }

            function ne(e, t) {
                var n, r, i = ee.get(e);
                if (i) try {
                    for (var o = c(i), s = o.next(); !s.done; s = o.next()) {
                        (0, s.value)(t)
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }
            var re = null;

            function ie() {
                return !re && "BroadcastChannel" in self && ((re = new BroadcastChannel("[Firebase] FID Change")).onmessage = function (e) {
                    ne(e.data.key, e.data.fid)
                }), re
            }

            function oe() {
                0 === ee.size && re && (re.close(), re = null)
            }
            var se, ae = "firebase-installations-database",
                ue = 1,
                ce = "firebase-installations-store",
                le = null;

            function fe() {
                return le = le || E(ae, ue, function (e) {
                    0 === e.oldVersion && e.createObjectStore(ce)
                })
            }

            function pe(o, s) {
                return d(this, void 0, void 0, function () {
                    var t, n, r, i;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = X(o), [4, fe()];
                            case 1:
                                return r = e.sent(), n = r.transaction(ce, "readwrite"), [4, (r = n.objectStore(ce)).get(t)];
                            case 2:
                                return i = e.sent(), [4, r.put(s, t)];
                            case 3:
                                return e.sent(), [4, n.complete];
                            case 4:
                                return e.sent(), i && i.fid === s.fid || te(o, s.fid), [2, s]
                        }
                    })
                })
            }

            function de(r) {
                return d(this, void 0, void 0, function () {
                    var t, n;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = X(r), [4, fe()];
                            case 1:
                                return n = e.sent(), [4, (n = n.transaction(ce, "readwrite")).objectStore(ce).delete(t)];
                            case 2:
                                return e.sent(), [4, n.complete];
                            case 3:
                                return e.sent(), [2]
                        }
                    })
                })
            }

            function he(s, a) {
                return d(this, void 0, void 0, function () {
                    var t, n, r, i, o;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = X(s), [4, fe()];
                            case 1:
                                return r = e.sent(), n = r.transaction(ce, "readwrite"), [4, (r = n.objectStore(ce)).get(t)];
                            case 2:
                                return i = e.sent(), void 0 !== (o = a(i)) ? [3, 4] : [4, r.delete(t)];
                            case 3:
                                return e.sent(), [3, 6];
                            case 4:
                                return [4, r.put(o, t)];
                            case 5:
                                e.sent(), e.label = 6;
                            case 6:
                                return [4, n.complete];
                            case 7:
                                return e.sent(), !o || i && i.fid === o.fid || te(s, o.fid), [2, o]
                        }
                    })
                })
            }

            function ve(i) {
                return d(this, void 0, void 0, function () {
                    var t, n, r;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, he(i, function (e) {
                                    e = be(e || {
                                        fid: Q(),
                                        registrationStatus: 0
                                    }), e = function (e, t) {
                                        {
                                            if (0 !== t.registrationStatus) return 1 === t.registrationStatus ? {
                                                installationEntry: t,
                                                registrationPromise: function (i) {
                                                    return d(this, void 0, void 0, function () {
                                                        var t, n, r;
                                                        return h(this, function (e) {
                                                            switch (e.label) {
                                                                case 0:
                                                                    return [4, ge(i)];
                                                                case 1:
                                                                    t = e.sent(), e.label = 2;
                                                                case 2:
                                                                    return 1 !== t.registrationStatus ? [3, 5] : [4, J(100)];
                                                                case 3:
                                                                    return e.sent(), [4, ge(i)];
                                                                case 4:
                                                                    return t = e.sent(), [3, 2];
                                                                case 5:
                                                                    return 0 !== t.registrationStatus ? [3, 7] : [4, ve(i)];
                                                                case 6:
                                                                    return r = e.sent(), n = r.installationEntry, (r = r.registrationPromise) ? [2, r] : [2, n];
                                                                case 7:
                                                                    return [2, t]
                                                            }
                                                        })
                                                    })
                                                }(e)
                                            } : {
                                                installationEntry: t
                                            };
                                            if (!navigator.onLine) {
                                                var n = Promise.reject(V.create("app-offline"));
                                                return {
                                                    installationEntry: t,
                                                    registrationPromise: n
                                                }
                                            }
                                            t = {
                                                fid: t.fid,
                                                registrationStatus: 1,
                                                registrationTime: Date.now()
                                            }, e = function (r, i) {
                                                return d(this, void 0, void 0, function () {
                                                    var t, n;
                                                    return h(this, function (e) {
                                                        switch (e.label) {
                                                            case 0:
                                                                return e.trys.push([0, 2, , 7]), [4, function (s, e) {
                                                                    var a = e.fid;
                                                                    return d(this, void 0, void 0, function () {
                                                                        var t, n, r, i, o;
                                                                        return h(this, function (e) {
                                                                            switch (e.label) {
                                                                                case 0:
                                                                                    return t = U(s), n = $(s), o = {
                                                                                        fid: a,
                                                                                        authVersion: q,
                                                                                        appId: s.appId,
                                                                                        sdkVersion: A
                                                                                    }, r = {
                                                                                        method: "POST",
                                                                                        headers: n,
                                                                                        body: JSON.stringify(o)
                                                                                    }, [4, z(function () {
                                                                                        return fetch(t, r)
                                                                                    })];
                                                                                case 1:
                                                                                    return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
                                                                                case 2:
                                                                                    return o = e.sent(), [2, {
                                                                                        fid: o.fid || a,
                                                                                        registrationStatus: 2,
                                                                                        refreshToken: o.refreshToken,
                                                                                        authToken: W(o.authToken)
                                                                                    }];
                                                                                case 3:
                                                                                    return [4, H("Create Installation", i)];
                                                                                case 4:
                                                                                    throw e.sent()
                                                                            }
                                                                        })
                                                                    })
                                                                }(r, i)];
                                                            case 1:
                                                                return t = e.sent(), [2, pe(r, t)];
                                                            case 2:
                                                                return F(n = e.sent()) && 409 === n.customData.serverCode ? [4, de(r)] : [3, 4];
                                                            case 3:
                                                                return e.sent(), [3, 6];
                                                            case 4:
                                                                return [4, pe(r, {
                                                                    fid: i.fid,
                                                                    registrationStatus: 0
                                                                })];
                                                            case 5:
                                                                e.sent(), e.label = 6;
                                                            case 6:
                                                                throw n;
                                                            case 7:
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }(e, t);
                                            return {
                                                installationEntry: t,
                                                registrationPromise: e
                                            }
                                        }
                                    }(i, e);
                                    return t = e.registrationPromise, e.installationEntry
                                })];
                            case 1:
                                return (n = e.sent()).fid !== Z ? [3, 3] : (r = {}, [4, t]);
                            case 2:
                                return [2, (r.installationEntry = e.sent(), r)];
                            case 3:
                                return [2, {
                                    installationEntry: n,
                                    registrationPromise: t
                                }]
                        }
                    })
                })
            }

            function ge(e) {
                return he(e, function (e) {
                    if (!e) throw V.create("installation-not-found");
                    return be(e)
                })
            }

            function be(e) {
                return 1 === (t = e).registrationStatus && t.registrationTime + N < Date.now() ? {
                    fid: e.fid,
                    registrationStatus: 0
                } : e;
                var t
            }

            function ye(e, s) {
                var a = e.appConfig,
                    u = e.platformLoggerProvider;
                return d(this, void 0, void 0, function () {
                    var t, n, r, i, o;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = function (e, t) {
                                    t = t.fid;
                                    return U(e) + "/" + t + "/authTokens:generate"
                                }(a, s), n = G(a, s), (o = u.getImmediate({
                                    optional: !0
                                })) && n.append("x-firebase-client", o.getPlatformInfoString()), o = {
                                    installation: {
                                        sdkVersion: A
                                    }
                                }, r = {
                                    method: "POST",
                                    headers: n,
                                    body: JSON.stringify(o)
                                }, [4, z(function () {
                                    return fetch(t, r)
                                })];
                            case 1:
                                return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
                            case 2:
                                return o = e.sent(), [2, W(o)];
                            case 3:
                                return [4, H("Generate Auth Token", i)];
                            case 4:
                                throw e.sent()
                        }
                    })
                })
            }

            function we(i, o) {
                return void 0 === o && (o = !1), d(this, void 0, void 0, function () {
                    var r, t, n;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, he(i.appConfig, function (e) {
                                    if (!ke(e)) throw V.create("not-registered");
                                    var t, n = e.authToken;
                                    if (o || 2 !== (t = n).requestStatus || function (e) {
                                            var t = Date.now();
                                            return t < e.creationTime || e.creationTime + e.expiresIn < t + B
                                        }(t)) {
                                        if (1 === n.requestStatus) return r = function (n, r) {
                                            return d(this, void 0, void 0, function () {
                                                var t;
                                                return h(this, function (e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, me(n.appConfig)];
                                                        case 1:
                                                            t = e.sent(), e.label = 2;
                                                        case 2:
                                                            return 1 !== t.authToken.requestStatus ? [3, 5] : [4, J(100)];
                                                        case 3:
                                                            return e.sent(), [4, me(n.appConfig)];
                                                        case 4:
                                                            return t = e.sent(), [3, 2];
                                                        case 5:
                                                            return 0 === (t = t.authToken).requestStatus ? [2, we(n, r)] : [2, t]
                                                    }
                                                })
                                            })
                                        }(i, o), e;
                                        if (!navigator.onLine) throw V.create("app-offline");
                                        n = (t = e, n = {
                                            requestStatus: 1,
                                            requestTime: Date.now()
                                        }, p(p({}, t), {
                                            authToken: n
                                        }));
                                        return r = function (i, o) {
                                            return d(this, void 0, void 0, function () {
                                                var t, n, r;
                                                return h(this, function (e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return e.trys.push([0, 3, , 8]), [4, ye(i, o)];
                                                        case 1:
                                                            return t = e.sent(), r = p(p({}, o), {
                                                                authToken: t
                                                            }), [4, pe(i.appConfig, r)];
                                                        case 2:
                                                            return e.sent(), [2, t];
                                                        case 3:
                                                            return !F(n = e.sent()) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode ? [3, 5] : [4, de(i.appConfig)];
                                                        case 4:
                                                            return e.sent(), [3, 7];
                                                        case 5:
                                                            return r = p(p({}, o), {
                                                                authToken: {
                                                                    requestStatus: 0
                                                                }
                                                            }), [4, pe(i.appConfig, r)];
                                                        case 6:
                                                            e.sent(), e.label = 7;
                                                        case 7:
                                                            throw n;
                                                        case 8:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(i, n), n
                                    }
                                    return e
                                })];
                            case 1:
                                return t = e.sent(), r ? [4, r] : [3, 3];
                            case 2:
                                return n = e.sent(), [3, 4];
                            case 3:
                                n = t.authToken, e.label = 4;
                            case 4:
                                return [2, n]
                        }
                    })
                })
            }

            function me(e) {
                return he(e, function (e) {
                    if (!ke(e)) throw V.create("not-registered");
                    var t = e.authToken;
                    return 1 === (t = t).requestStatus && t.requestTime + N < Date.now() ? p(p({}, e), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : e
                })
            }

            function ke(e) {
                return void 0 !== e && 2 === e.registrationStatus
            }

            function Se(t, n) {
                return void 0 === n && (n = !1), d(this, void 0, void 0, function () {
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, function (n) {
                                    return d(this, void 0, void 0, function () {
                                        var t;
                                        return h(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, ve(n)];
                                                case 1:
                                                    return (t = e.sent().registrationPromise) ? [4, t] : [3, 3];
                                                case 2:
                                                    e.sent(), e.label = 3;
                                                case 3:
                                                    return [2]
                                            }
                                        })
                                    })
                                }(t.appConfig)];
                            case 1:
                                return e.sent(), [4, we(t, n)];
                            case 2:
                                return [2, e.sent().token]
                        }
                    })
                })
            }

            function Ie(i, o) {
                return d(this, void 0, void 0, function () {
                    var t, n, r;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = function (e, t) {
                                    t = t.fid;
                                    return U(e) + "/" + t
                                }(i, o), r = G(i, o), n = {
                                    method: "DELETE",
                                    headers: r
                                }, [4, z(function () {
                                    return fetch(t, n)
                                })];
                            case 1:
                                return (r = e.sent()).ok ? [3, 3] : [4, H("Delete Installation", r)];
                            case 2:
                                throw e.sent();
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function Te(e, r) {
                var i = e.appConfig;
                return function (e, t) {
                        ie();
                        var n = X(e);
                        (e = ee.get(n)) || (e = new Set, ee.set(n, e)), e.add(t)
                    }(i, r),
                    function () {
                        var e, t, n;
                        t = r, n = X(e = i), (e = ee.get(n)) && (e.delete(t), 0 === e.size && ee.delete(n), oe())
                    }
            }

            function Ce(e) {
                return V.create("missing-app-config-values", {
                    valueName: e
                })
            }(se = t.default).INTERNAL.registerComponent(new y("installations", function (e) {
                var t = e.getProvider("app").getImmediate(),
                    n = {
                        appConfig: function (e) {
                            var t, n;
                            if (!e || !e.options) throw Ce("App Configuration");
                            if (!e.name) throw Ce("App Name");
                            try {
                                for (var r = c(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                                    var o = i.value;
                                    if (!e.options[o]) throw Ce(o)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return {
                                appName: e.name,
                                projectId: e.options.projectId,
                                apiKey: e.options.apiKey,
                                appId: e.options.appId
                            }
                        }(t),
                        platformLoggerProvider: e.getProvider("platform-logger")
                    };
                return {
                    app: t,
                    getId: function () {
                        return function (r) {
                            return d(this, void 0, void 0, function () {
                                var t, n;
                                return h(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, ve(r.appConfig)];
                                        case 1:
                                            return t = e.sent(), n = t.installationEntry, (t.registrationPromise || we(r)).catch(console.error), [2, n.fid]
                                    }
                                })
                            })
                        }(n)
                    },
                    getToken: function (e) {
                        return Se(n, e)
                    },
                    delete: function () {
                        return function (r) {
                            return d(this, void 0, void 0, function () {
                                var t, n;
                                return h(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, he(t = r.appConfig, function (e) {
                                                if (!e || 0 !== e.registrationStatus) return e
                                            })];
                                        case 1:
                                            if (!(n = e.sent())) return [3, 6];
                                            if (1 !== n.registrationStatus) return [3, 2];
                                            throw V.create("delete-pending-registration");
                                        case 2:
                                            if (2 !== n.registrationStatus) return [3, 6];
                                            if (navigator.onLine) return [3, 3];
                                            throw V.create("app-offline");
                                        case 3:
                                            return [4, Ie(t, n)];
                                        case 4:
                                            return e.sent(), [4, de(t)];
                                        case 5:
                                            e.sent(), e.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }(n)
                    },
                    onIdChange: function (e) {
                        return Te(n, e)
                    }
                }
            }, "PUBLIC")), se.registerVersion("@firebase/installations", x);
            var _e, L = ((L = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', L["only-available-in-window"] = "This method is available in a Window context.", L["only-available-in-sw"] = "This method is available in a service worker context.", L["permission-default"] = "The notification permission was not granted and dismissed instead.", L["permission-blocked"] = "The notification permission was not granted and blocked instead.", L["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", L["failed-service-worker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}", L["token-subscribe-failed"] = "A problem occurred while subscribing the user to FCM: {$errorInfo}", L["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", L["token-unsubscribe-failed"] = "A problem occurred while unsubscribing the user from FCM: {$errorInfo}", L["token-update-failed"] = "A problem occurred while updating the user from FCM: {$errorInfo}", L["token-update-no-token"] = "FCM returned no token when updating the user to push.", L["use-sw-after-get-token"] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.", L["invalid-sw-registration"] = "The input to useServiceWorker() must be a ServiceWorkerRegistration.", L["invalid-bg-handler"] = "The input to setBackgroundMessageHandler() must be a function.", L["invalid-vapid-key"] = "The public VAPID key must be a string.", L["use-vapid-key-after-get-token"] = "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.", L),
                Pe = new v("messaging", "Messaging", L),
                De = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
                je = "https://fcmregistrations.googleapis.com/v1",
                Me = "FCM_MSG",
                Oe = "google.c.a.c_id";

            function Ee(e) {
                e = new Uint8Array(e);
                return btoa(String.fromCharCode.apply(String, r(e))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }(L = _e = _e || {}).PUSH_RECEIVED = "push-received", L.NOTIFICATION_CLICKED = "notification-clicked";
            var Ke = "fcm_token_details_db",
                xe = 5,
                Ne = "fcm_token_object_Store";

            function Ae(s) {
                return d(this, void 0, void 0, function () {
                    var t, o, n = this;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return "databases" in indexedDB ? [4, indexedDB.databases()] : [3, 2];
                            case 1:
                                if (t = e.sent(), !t.map(function (e) {
                                        return e.name
                                    }).includes(Ke)) return [2, null];
                                e.label = 2;
                            case 2:
                                return o = null, [4, E(Ke, xe, function (i) {
                                    return d(n, void 0, void 0, function () {
                                        var t, n, r;
                                        return h(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return i.oldVersion < 2 ? [2] : i.objectStoreNames.contains(Ne) ? [4, (r = i.transaction.objectStore(Ne)).index("fcmSenderId").get(s)] : [2];
                                                case 1:
                                                    return t = e.sent(), [4, r.clear()];
                                                case 2:
                                                    if (e.sent(), !t) return [2];
                                                    if (2 === i.oldVersion) {
                                                        if (!(n = t).auth || !n.p256dh || !n.endpoint) return [2];
                                                        o = {
                                                            token: n.fcmToken,
                                                            createTime: null !== (r = n.createTime) && void 0 !== r ? r : Date.now(),
                                                            subscriptionOptions: {
                                                                auth: n.auth,
                                                                p256dh: n.p256dh,
                                                                endpoint: n.endpoint,
                                                                swScope: n.swScope,
                                                                vapidKey: "string" == typeof n.vapidKey ? n.vapidKey : Ee(n.vapidKey)
                                                            }
                                                        }
                                                    } else(3 === i.oldVersion || 4 === i.oldVersion) && (o = {
                                                        token: (n = t).fcmToken,
                                                        createTime: n.createTime,
                                                        subscriptionOptions: {
                                                            auth: Ee(n.auth),
                                                            p256dh: Ee(n.p256dh),
                                                            endpoint: n.endpoint,
                                                            swScope: n.swScope,
                                                            vapidKey: Ee(n.vapidKey)
                                                        }
                                                    });
                                                    return [2]
                                            }
                                        })
                                    })
                                })];
                            case 3:
                                return e.sent().close(), [4, K(Ke)];
                            case 4:
                                return e.sent(), [4, K("fcm_vapid_details_db")];
                            case 5:
                                return e.sent(), [4, K("undefined")];
                            case 6:
                                return e.sent(), [2, function (e) {
                                    if (!e || !e.subscriptionOptions) return !1;
                                    var t = e.subscriptionOptions;
                                    return "number" == typeof e.createTime && 0 < e.createTime && "string" == typeof e.token && 0 < e.token.length && "string" == typeof t.auth && 0 < t.auth.length && "string" == typeof t.p256dh && 0 < t.p256dh.length && "string" == typeof t.endpoint && 0 < t.endpoint.length && "string" == typeof t.swScope && 0 < t.swScope.length && "string" == typeof t.vapidKey && 0 < t.vapidKey.length
                                }(o) ? o : null]
                        }
                    })
                })
            }
            var qe = "firebase-messaging-database",
                Re = 1,
                Be = "firebase-messaging-store",
                Le = null;

            function Ve() {
                return Le = Le || E(qe, Re, function (e) {
                    0 === e.oldVersion && e.createObjectStore(Be)
                })
            }

            function Fe(r) {
                return d(this, void 0, void 0, function () {
                    var t, n;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = We(r), [4, Ve()];
                            case 1:
                                return [4, e.sent().transaction(Be).objectStore(Be).get(t)];
                            case 2:
                                return (t = e.sent()) ? [2, t] : [3, 3];
                            case 3:
                                return [4, Ae(r.appConfig.senderId)];
                            case 4:
                                return (n = e.sent()) ? [4, Ue(r, n)] : [3, 6];
                            case 5:
                                return e.sent(), [2, n];
                            case 6:
                                return [2]
                        }
                    })
                })
            }

            function Ue(r, i) {
                return d(this, void 0, void 0, function () {
                    var t, n;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = We(r), [4, Ve()];
                            case 1:
                                return n = e.sent(), [4, (n = n.transaction(Be, "readwrite")).objectStore(Be).put(i, t)];
                            case 2:
                                return e.sent(), [4, n.complete];
                            case 3:
                                return e.sent(), [2, i]
                        }
                    })
                })
            }

            function We(e) {
                return e.appConfig.appId
            }

            function He(r, i) {
                return d(this, void 0, void 0, function () {
                    var t, n;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, Ge(r)];
                            case 1:
                                t = e.sent(), t = {
                                    method: "DELETE",
                                    headers: t
                                }, e.label = 2;
                            case 2:
                                return e.trys.push([2, 5, , 6]), [4, fetch($e(r.appConfig) + "/" + i, t)];
                            case 3:
                                return [4, e.sent().json()];
                            case 4:
                                if ((t = e.sent()).error) throw n = t.error.message, Pe.create("token-unsubscribe-failed", {
                                    errorInfo: n
                                });
                                return [3, 6];
                            case 5:
                                throw n = e.sent(), Pe.create("token-unsubscribe-failed", {
                                    errorInfo: n
                                });
                            case 6:
                                return [2]
                        }
                    })
                })
            }

            function $e(e) {
                e = e.projectId;
                return je + "/projects/" + e + "/registrations"
            }

            function Ge(e) {
                var n = e.appConfig,
                    r = e.installations;
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.getToken()];
                            case 1:
                                return t = e.sent(), [2, new Headers({
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                    "x-goog-api-key": n.apiKey,
                                    "x-goog-firebase-installations-auth": "FIS " + t
                                })]
                        }
                    })
                })
            }

            function ze(e) {
                var t = e.p256dh,
                    n = e.auth,
                    r = e.endpoint,
                    e = e.vapidKey,
                    t = {
                        web: {
                            endpoint: r,
                            auth: n,
                            p256dh: t
                        }
                    };
                return e !== De && (t.web.applicationPubKey = e), t
            }

            function Je(c, l, f) {
                return d(this, void 0, void 0, function () {
                    var s, a, u;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if ("granted" !== Notification.permission) throw Pe.create("permission-blocked");
                                return [4, function (n, r) {
                                    return d(this, void 0, void 0, function () {
                                        var t;
                                        return h(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, n.pushManager.getSubscription()];
                                                case 1:
                                                    return (t = e.sent()) ? [2, t] : [2, n.pushManager.subscribe({
                                                        userVisibleOnly: !0,
                                                        applicationServerKey: function (e) {
                                                            for (var e = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), t = atob(e), n = new Uint8Array(t.length), r = 0; r < t.length; ++r) n[r] = t.charCodeAt(r);
                                                            return n
                                                        }(r)
                                                    })]
                                            }
                                        })
                                    })
                                }(l, f)];
                            case 1:
                                return u = e.sent(), [4, Fe(c)];
                            case 2:
                                return s = e.sent(), a = {
                                    vapidKey: f,
                                    swScope: l.scope,
                                    endpoint: u.endpoint,
                                    auth: Ee(u.getKey("auth")),
                                    p256dh: Ee(u.getKey("p256dh"))
                                }, s ? [3, 3] : [2, Ze(c, a)];
                            case 3:
                                if (t = s.subscriptionOptions, r = (n = a).vapidKey === t.vapidKey, i = n.endpoint === t.endpoint, o = n.auth === t.auth, t = n.p256dh === t.p256dh, r && i && o && t) return [3, 8];
                                e.label = 4;
                            case 4:
                                return e.trys.push([4, 6, , 7]), [4, He(c, s.token)];
                            case 5:
                                return e.sent(), [3, 7];
                            case 6:
                                return u = e.sent(), console.warn(u), [3, 7];
                            case 7:
                                return [2, Ze(c, a)];
                            case 8:
                                return Date.now() >= s.createTime + 6048e5 ? [2, function (i, o, s) {
                                    return d(this, void 0, void 0, function () {
                                        var t, n, r;
                                        return h(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return e.trys.push([0, 3, , 5]), [4, function (o, s) {
                                                        return d(this, void 0, void 0, function () {
                                                            var t, n, r, i;
                                                            return h(this, function (e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        return [4, Ge(o)];
                                                                    case 1:
                                                                        t = e.sent(), n = ze(s.subscriptionOptions), n = {
                                                                            method: "PATCH",
                                                                            headers: t,
                                                                            body: JSON.stringify(n)
                                                                        }, e.label = 2;
                                                                    case 2:
                                                                        return e.trys.push([2, 5, , 6]), [4, fetch($e(o.appConfig) + "/" + s.token, n)];
                                                                    case 3:
                                                                        return [4, e.sent().json()];
                                                                    case 4:
                                                                        return r = e.sent(), [3, 6];
                                                                    case 5:
                                                                        throw i = e.sent(), Pe.create("token-update-failed", {
                                                                            errorInfo: i
                                                                        });
                                                                    case 6:
                                                                        if (r.error) throw i = r.error.message, Pe.create("token-update-failed", {
                                                                            errorInfo: i
                                                                        });
                                                                        if (!r.token) throw Pe.create("token-update-no-token");
                                                                        return [2, r.token]
                                                                }
                                                            })
                                                        })
                                                    }(o, i)];
                                                case 1:
                                                    return t = e.sent(), n = p(p({}, i), {
                                                        token: t,
                                                        createTime: Date.now()
                                                    }), [4, Ue(o, n)];
                                                case 2:
                                                    return e.sent(), [2, t];
                                                case 3:
                                                    return r = e.sent(), [4, Ye(o, s)];
                                                case 4:
                                                    throw e.sent(), r;
                                                case 5:
                                                    return [2]
                                            }
                                        })
                                    })
                                }({
                                    token: s.token,
                                    createTime: Date.now(),
                                    subscriptionOptions: a
                                }, c, l)] : [2, s.token];
                            case 9:
                                return [2]
                        }
                        var t, n, r, i, o
                    })
                })
            }

            function Ye(n, r) {
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, Fe(n)];
                            case 1:
                                return (t = e.sent()) ? [4, He(n, t.token)] : [3, 4];
                            case 2:
                                return e.sent(), [4, function (r) {
                                    return d(this, void 0, void 0, function () {
                                        var t, n;
                                        return h(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return t = We(r), [4, Ve()];
                                                case 1:
                                                    return n = e.sent(), [4, (n = n.transaction(Be, "readwrite")).objectStore(Be).delete(t)];
                                                case 2:
                                                    return e.sent(), [4, n.complete];
                                                case 3:
                                                    return e.sent(), [2]
                                            }
                                        })
                                    })
                                }(n)];
                            case 3:
                                e.sent(), e.label = 4;
                            case 4:
                                return [4, r.pushManager.getSubscription()];
                            case 5:
                                return (t = e.sent()) ? [2, t.unsubscribe()] : [2, !0]
                        }
                    })
                })
            }

            function Ze(n, r) {
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, function (o, s) {
                                    return d(this, void 0, void 0, function () {
                                        var t, n, r, i;
                                        return h(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, Ge(o)];
                                                case 1:
                                                    t = e.sent(), n = ze(s), n = {
                                                        method: "POST",
                                                        headers: t,
                                                        body: JSON.stringify(n)
                                                    }, e.label = 2;
                                                case 2:
                                                    return e.trys.push([2, 5, , 6]), [4, fetch($e(o.appConfig), n)];
                                                case 3:
                                                    return [4, e.sent().json()];
                                                case 4:
                                                    return r = e.sent(), [3, 6];
                                                case 5:
                                                    throw i = e.sent(), Pe.create("token-subscribe-failed", {
                                                        errorInfo: i
                                                    });
                                                case 6:
                                                    if (r.error) throw i = r.error.message, Pe.create("token-subscribe-failed", {
                                                        errorInfo: i
                                                    });
                                                    if (!r.token) throw Pe.create("token-subscribe-no-token");
                                                    return [2, r.token]
                                            }
                                        })
                                    })
                                }(n, r)];
                            case 1:
                                return t = e.sent(), t = {
                                    token: t,
                                    createTime: Date.now(),
                                    subscriptionOptions: r
                                }, [4, Ue(n, t)];
                            case 2:
                                return e.sent(), [2, t.token]
                        }
                    })
                })
            }

            function Qe(e) {
                var t = {
                    from: e.from,
                    collapseKey: e.collapse_key
                };
                return function (e, t) {
                        if (!t.notification) return;
                        e.notification = {};
                        var n = t.notification.title;
                        n && (e.notification.title = n);
                        n = t.notification.body;
                        n && (e.notification.body = n);
                        t = t.notification.image;
                        t && (e.notification.image = t)
                    }(t, e),
                    function (e, t) {
                        if (!t.data) return;
                        e.data = t.data
                    }(t, e),
                    function (e, t) {
                        if (!t.fcmOptions) return;
                        e.fcmOptions = {};
                        var n = t.fcmOptions.link;
                        n && (e.fcmOptions.link = n);
                        t = t.fcmOptions.analytics_label;
                        t && (e.fcmOptions.analyticsLabel = t)
                    }(t, e), t
            }

            function Xe(e) {
                return "object" == typeof e && e && Oe in e
            }

            function et(t) {
                return new Promise(function (e) {
                    setTimeout(e, t)
                })
            }
            var tt = (Object.defineProperty(nt.prototype, "app", {
                get: function () {
                    return this.firebaseDependencies.app
                },
                enumerable: !1,
                configurable: !0
            }), nt.prototype.setBackgroundMessageHandler = function (e) {
                if (this.isOnBackgroundMessageUsed = !1, !e || "function" != typeof e) throw Pe.create("invalid-bg-handler");
                this.bgMessageHandler = e
            }, nt.prototype.onBackgroundMessage = function (e) {
                var t = this;
                return this.isOnBackgroundMessageUsed = !0, this.bgMessageHandler = e,
                    function () {
                        t.bgMessageHandler = null
                    }
            }, nt.prototype.getToken = function () {
                var n;
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return this.vapidKey ? [3, 2] : [4, Fe(this.firebaseDependencies)];
                            case 1:
                                t = e.sent(), this.vapidKey = null !== (n = null === (n = null == t ? void 0 : t.subscriptionOptions) || void 0 === n ? void 0 : n.vapidKey) && void 0 !== n ? n : De, e.label = 2;
                            case 2:
                                return [2, Je(this.firebaseDependencies, self.registration, this.vapidKey)]
                        }
                    })
                })
            }, nt.prototype.deleteToken = function () {
                return Ye(this.firebaseDependencies, self.registration)
            }, nt.prototype.requestPermission = function () {
                throw Pe.create("only-available-in-window")
            }, nt.prototype.usePublicVapidKey = function (e) {
                if (null !== this.vapidKey) throw Pe.create("use-vapid-key-after-get-token");
                if ("string" != typeof e || 0 === e.length) throw Pe.create("invalid-vapid-key");
                this.vapidKey = e
            }, nt.prototype.useServiceWorker = function () {
                throw Pe.create("only-available-in-window")
            }, nt.prototype.onMessage = function () {
                throw Pe.create("only-available-in-window")
            }, nt.prototype.onTokenRefresh = function () {
                throw Pe.create("only-available-in-window")
            }, nt.prototype.onPush = function (a) {
                return d(this, void 0, void 0, function () {
                    var i, o, s;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (s = function (e) {
                                    var t = e.data;
                                    if (!t) return null;
                                    try {
                                        return t.json()
                                    } catch (e) {
                                        return null
                                    }
                                }(a)) ? [4, rt()] : (console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."), [2]);
                            case 1:
                                return (i = e.sent(), i.some(function (e) {
                                    return "visible" === e.visibilityState && !e.url.startsWith("chrome-extension://")
                                })) ? [2, function (e, t) {
                                    var n, r;
                                    t.isFirebaseMessaging = !0, t.messageType = _e.PUSH_RECEIVED;
                                    try {
                                        for (var i = c(e), o = i.next(); !o.done; o = i.next()) {
                                            o.value.postMessage(t)
                                        }
                                    } catch (e) {
                                        n = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            o && !o.done && (r = i.return) && r.call(i)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                }(i, s)] : (o = !1, s.notification ? [4, function (e) {
                                    var t = e.actions,
                                        n = Notification.maxActions;
                                    t && n && t.length > n && console.warn("This browser only supports " + n + " actions. The remaining actions will not be displayed.");
                                    return self.registration.showNotification(null !== (n = e.title) && void 0 !== n ? n : "", e)
                                }(((r = p({}, (t = s).notification)).data = ((n = {})[Me] = t, n), r))] : [3, 3]);
                            case 2:
                                e.sent(), o = !0, e.label = 3;
                            case 3:
                                return !0 === o && !1 === this.isOnBackgroundMessageUsed ? [2] : (this.bgMessageHandler && (s = Qe(s), "function" == typeof this.bgMessageHandler ? this.bgMessageHandler(s) : this.bgMessageHandler.next(s)), [4, et(1e3)]);
                            case 4:
                                return e.sent(), [2]
                        }
                        var t, n, r
                    })
                })
            }, nt.prototype.onSubChange = function (n) {
                var r;
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return n.newSubscription ? [3, 2] : [4, Ye(this.firebaseDependencies, self.registration)];
                            case 1:
                                return e.sent(), [2];
                            case 2:
                                return [4, Fe(this.firebaseDependencies)];
                            case 3:
                                return t = e.sent(), [4, Ye(this.firebaseDependencies, self.registration)];
                            case 4:
                                return e.sent(), [4, Je(this.firebaseDependencies, self.registration, null !== (r = null === (r = null == t ? void 0 : t.subscriptionOptions) || void 0 === r ? void 0 : r.vapidKey) && void 0 !== r ? r : De)];
                            case 5:
                                return e.sent(), [2]
                        }
                    })
                })
            }, nt.prototype.onNotificationClick = function (s) {
                var a;
                return d(this, void 0, void 0, function () {
                    var t, n, r, i, o;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (t = null === (a = null === (a = s.notification) || void 0 === a ? void 0 : a.data) || void 0 === a ? void 0 : a[Me]) ? s.action ? [2] : (s.stopImmediatePropagation(), s.notification.close(), (n = function (e) {
                                    var t, n = null !== (t = null === (t = e.fcmOptions) || void 0 === t ? void 0 : t.link) && void 0 !== t ? t : null === (n = e.notification) || void 0 === n ? void 0 : n.click_action;
                                    if (n) return n;
                                    return Xe(e.data) ? self.location.origin : null
                                }(t)) ? (r = new URL(n, self.location.href), i = new URL(self.location.origin), r.host !== i.host ? [2] : [4, function (u) {
                                    return d(this, void 0, void 0, function () {
                                        var t, n, r, i, o, s, a;
                                        return h(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, rt()];
                                                case 1:
                                                    t = e.sent();
                                                    try {
                                                        for (n = c(t), r = n.next(); !r.done; r = n.next())
                                                            if (i = r.value, o = new URL(i.url, self.location.href), u.host === o.host) return [2, i]
                                                    } catch (e) {
                                                        s = {
                                                            error: e
                                                        }
                                                    } finally {
                                                        try {
                                                            r && !r.done && (a = n.return) && a.call(n)
                                                        } finally {
                                                            if (s) throw s.error
                                                        }
                                                    }
                                                    return [2, null]
                                            }
                                        })
                                    })
                                }(r)]) : [2]) : [2];
                            case 1:
                                return (o = e.sent()) ? [3, 4] : [4, self.clients.openWindow(n)];
                            case 2:
                                return o = e.sent(), [4, et(3e3)];
                            case 3:
                                return e.sent(), [3, 6];
                            case 4:
                                return [4, o.focus()];
                            case 5:
                                o = e.sent(), e.label = 6;
                            case 6:
                                return o ? (t.messageType = _e.NOTIFICATION_CLICKED, t.isFirebaseMessaging = !0, [2, o.postMessage(t)]) : [2]
                        }
                    })
                })
            }, nt);

            function nt(e) {
                var t = this;
                this.firebaseDependencies = e, this.isOnBackgroundMessageUsed = null, this.vapidKey = null, this.bgMessageHandler = null, self.addEventListener("push", function (e) {
                    e.waitUntil(t.onPush(e))
                }), self.addEventListener("pushsubscriptionchange", function (e) {
                    e.waitUntil(t.onSubChange(e))
                }), self.addEventListener("notificationclick", function (e) {
                    e.waitUntil(t.onNotificationClick(e))
                })
            }

            function rt() {
                return self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                })
            }
            var it = (Object.defineProperty(ot.prototype, "app", {
                get: function () {
                    return this.firebaseDependencies.app
                },
                enumerable: !1,
                configurable: !0
            }), ot.prototype.messageEventListener = function (i) {
                return d(this, void 0, void 0, function () {
                    var n, r;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (n = i.data).isFirebaseMessaging ? (this.onMessageCallback && n.messageType === _e.PUSH_RECEIVED && ("function" == typeof this.onMessageCallback ? this.onMessageCallback((delete(t = Object.assign({}, n)).messageType, delete t.isFirebaseMessaging, t)) : this.onMessageCallback.next(Object.assign({}, n))), Xe(r = n.data) && "1" === r["google.c.a.e"] ? [4, this.logEvent(n.messageType, r)] : [3, 2]) : [2];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2]
                        }
                        var t
                    })
                })
            }, ot.prototype.getVapidKey = function () {
                return this.vapidKey
            }, ot.prototype.getSwReg = function () {
                return this.swRegistration
            }, ot.prototype.getToken = function (t) {
                return d(this, void 0, void 0, function () {
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return "default" !== Notification.permission ? [3, 2] : [4, Notification.requestPermission()];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                if ("granted" !== Notification.permission) throw Pe.create("permission-blocked");
                                return [4, this.updateVapidKey(null == t ? void 0 : t.vapidKey)];
                            case 3:
                                return e.sent(), [4, this.updateSwReg(null == t ? void 0 : t.serviceWorkerRegistration)];
                            case 4:
                                return e.sent(), [2, Je(this.firebaseDependencies, this.swRegistration, this.vapidKey)]
                        }
                    })
                })
            }, ot.prototype.updateVapidKey = function (t) {
                return d(this, void 0, void 0, function () {
                    return h(this, function (e) {
                        return t ? this.vapidKey = t : this.vapidKey || (this.vapidKey = De), [2]
                    })
                })
            }, ot.prototype.updateSwReg = function (t) {
                return d(this, void 0, void 0, function () {
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t || this.swRegistration ? [3, 2] : [4, this.registerDefaultSw()];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                if (!t && this.swRegistration) return [2];
                                if (!(t instanceof ServiceWorkerRegistration)) throw Pe.create("invalid-sw-registration");
                                return this.swRegistration = t, [2]
                        }
                    })
                })
            }, ot.prototype.registerDefaultSw = function () {
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), t = this, [4, navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                                    scope: "/firebase-cloud-messaging-push-scope"
                                })];
                            case 1:
                                return t.swRegistration = e.sent(), this.swRegistration.update().catch(function () {}), [3, 3];
                            case 2:
                                throw t = e.sent(), Pe.create("failed-service-worker-registration", {
                                    browserErrorMessage: t.message
                                });
                            case 3:
                                return [2]
                        }
                    })
                })
            }, ot.prototype.deleteToken = function () {
                return d(this, void 0, void 0, function () {
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return this.swRegistration ? [3, 2] : [4, this.registerDefaultSw()];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2, Ye(this.firebaseDependencies, this.swRegistration)]
                        }
                    })
                })
            }, ot.prototype.requestPermission = function () {
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return "granted" === Notification.permission ? [2] : [4, Notification.requestPermission()];
                            case 1:
                                if ("granted" === (t = e.sent())) return [2];
                                throw "denied" === t ? Pe.create("permission-blocked") : Pe.create("permission-default")
                        }
                    })
                })
            }, ot.prototype.usePublicVapidKey = function (e) {
                if (null !== this.vapidKey) throw Pe.create("use-vapid-key-after-get-token");
                if ("string" != typeof e || 0 === e.length) throw Pe.create("invalid-vapid-key");
                this.vapidKey = e
            }, ot.prototype.useServiceWorker = function (e) {
                if (!(e instanceof ServiceWorkerRegistration)) throw Pe.create("invalid-sw-registration");
                if (this.swRegistration) throw Pe.create("use-sw-after-get-token");
                this.swRegistration = e
            }, ot.prototype.onMessage = function (e) {
                var t = this;
                return this.onMessageCallback = e,
                    function () {
                        t.onMessageCallback = null
                    }
            }, ot.prototype.setBackgroundMessageHandler = function () {
                throw Pe.create("only-available-in-sw")
            }, ot.prototype.onBackgroundMessage = function () {
                throw Pe.create("only-available-in-sw")
            }, ot.prototype.onTokenRefresh = function () {
                return function () {}
            }, ot.prototype.logEvent = function (n, r) {
                return d(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = function (e) {
                                    switch (e) {
                                        case _e.NOTIFICATION_CLICKED:
                                            return "notification_open";
                                        case _e.PUSH_RECEIVED:
                                            return "notification_foreground";
                                        default:
                                            throw new Error
                                    }
                                }(n), [4, this.firebaseDependencies.analyticsProvider.get()];
                            case 1:
                                return e.sent().logEvent(t, {
                                    message_id: r[Oe],
                                    message_name: r["google.c.a.c_l"],
                                    message_time: r["google.c.a.ts"],
                                    message_device_time: Math.floor(Date.now() / 1e3)
                                }), [2]
                        }
                    })
                })
            }, ot);

            function ot(e) {
                var t = this;
                this.firebaseDependencies = e, this.vapidKey = null, this.onMessageCallback = null, navigator.serviceWorker.addEventListener("message", function (e) {
                    return t.messageEventListener(e)
                })
            }

            function st(e) {
                return Pe.create("missing-app-config-values", {
                    valueName: e
                })
            }
            L = {
                isSupported: at
            };

            function at() {
                return self && "ServiceWorkerGlobalScope" in self ? "indexedDB" in self && null !== indexedDB && "PushManager" in self && "Notification" in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") : "indexedDB" in window && null !== indexedDB && navigator.cookieEnabled && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
            }
            t.default.INTERNAL.registerComponent(new y("messaging", function (e) {
                var t = e.getProvider("app").getImmediate(),
                    e = {
                        app: t,
                        appConfig: function (e) {
                            var t, n;
                            if (!e || !e.options) throw st("App Configuration Object");
                            if (!e.name) throw st("App Name");
                            var r = e.options;
                            try {
                                for (var i = c(["projectId", "apiKey", "appId", "messagingSenderId"]), o = i.next(); !o.done; o = i.next()) {
                                    var s = o.value;
                                    if (!r[s]) throw st(s)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return {
                                appName: e.name,
                                projectId: r.projectId,
                                apiKey: r.apiKey,
                                appId: r.appId,
                                senderId: r.messagingSenderId
                            }
                        }(t),
                        installations: e.getProvider("installations").getImmediate(),
                        analyticsProvider: e.getProvider("analytics-internal")
                    };
                if (!at()) throw Pe.create("unsupported-browser");
                return new(self && "ServiceWorkerGlobalScope" in self ? tt : it)(e)
            }, "PUBLIC").setServiceProps(L))
        }).apply(this, arguments)
    } catch (e) {
        throw console.error(e), new Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-messaging.js.map