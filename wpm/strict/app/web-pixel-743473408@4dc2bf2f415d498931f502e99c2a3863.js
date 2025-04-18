(() => {
    var M = Object.create;
    var y = Object.defineProperty,
        U = Object.defineProperties,
        X = Object.getOwnPropertyDescriptor,
        q = Object.getOwnPropertyDescriptors,
        J = Object.getOwnPropertyNames,
        E = Object.getOwnPropertySymbols,
        F = Object.getPrototypeOf,
        I = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable;
    var h = (e, t, n) => t in e ? y(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        l = (e, t) => {
            for (var n in t || (t = {})) I.call(t, n) && h(e, n, t[n]);
            if (E)
                for (var n of E(t)) b.call(t, n) && h(e, n, t[n]);
            return e
        },
        A = (e, t) => U(e, q(t));
    var v = (e, t) => {
        var n = {};
        for (var s in e) I.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
        if (e != null && E)
            for (var s of E(e)) t.indexOf(s) < 0 && b.call(e, s) && (n[s] = e[s]);
        return n
    };
    var m = (e, t) => () => (e && (t = e(e = 0)), t);
    var z = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Z = (e, t, n, s) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of J(t)) !I.call(e, o) && o !== n && y(e, o, {
                get: () => t[o],
                enumerable: !(s = X(t, o)) || s.enumerable
            });
        return e
    };
    var H = (e, t, n) => (n = e != null ? M(F(e)) : {}, Z(t || !e || !e.__esModule ? y(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e));
    var d = (e, t, n) => new Promise((s, o) => {
        var r = c => {
                try {
                    a(n.next(c))
                } catch (u) {
                    o(u)
                }
            },
            i = c => {
                try {
                    a(n.throw(c))
                } catch (u) {
                    o(u)
                }
            },
            a = c => c.done ? s(c.value) : Promise.resolve(c.value).then(r, i);
        a((n = n.apply(e, t)).next())
    });
    var T, g = m(() => {
        T = "WebPixel::Render"
    });
    var _, R = m(() => {
        g();
        _ = e => shopify.extend(T, e)
    });
    var k = m(() => {
        R()
    });
    var S = m(() => {
        k()
    });
    var N, x, p, C, O, L, w, $ = m(() => {
        N = "https://a.klaviyo.com/client/event-bulk-create", x = "2024-10-15", p = "kl-post-identification-sync", C = "__kl_key", O = JSON.stringify([]), L = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, w = /^\+?[1-9]\d{1,14}$/
    });

    function B(e, t, n = 0, s, o) {
        return d(this, null, function*() {
            let r = o || 0,
                i = yield e();
            return (s ? s.includes(i.status) : i.status >= 400) && r < t ? (yield ee(n), B(e, t, n, s, r + 1)) : i
        })
    }
    var W, Q, ee, te, V, ne, se, oe, f, re, ie, ae, P, ce, Y, le, D, G = m(() => {
        $();
        W = e => L.test(e), Q = e => w.test(e), ee = e => new Promise(t => setTimeout(t, e));
        te = (e, t) => d(void 0, null, function*() {
            let n = yield e.getItem(p), s = JSON.parse(n || O), o = s.slice(0, t), r = s.slice(t);
            return {
                events: o || [],
                deleteCallback: () => e.setItem(p, JSON.stringify(r))
            }
        }), V = (e, t = 1e3) => te(e, t), ne = e => d(void 0, null, function*() {
            return yield e.removeItem(p)
        }), se = new Set(["$exchange_id", "email", "id", "$email", "$id", "$anonymous", "$phone_number"]), oe = e => Set.prototype.has.call(se, e), f = !1, re = (e, t, n) => ({
            data: {
                type: "event-bulk-create",
                attributes: {
                    profile: {
                        data: {
                            type: "profile",
                            attributes: l({}, t),
                            meta: {
                                identifiers: t
                            }
                        }
                    },
                    events: {
                        data: e.map(s => {
                            let c = s,
                                {
                                    name: o,
                                    properties: r
                                } = c,
                                i = v(c, ["name", "properties"]),
                                a = l(l({}, r), n || {});
                            return {
                                type: "event",
                                attributes: l(l({
                                    metric: {
                                        data: {
                                            type: "metric",
                                            attributes: {
                                                name: o
                                            }
                                        }
                                    }
                                }, i), Object.keys(a).length > 0 ? {
                                    properties: a
                                } : {})
                            }
                        })
                    }
                }
            }
        }), ie = (e, t) => fetch(`${N}/?company_id=${e}`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "X-Klaviyo-Onsite": "1",
                revision: x
            },
            body: JSON.stringify(t)
        }), ae = (e, t, n, s) => {
            let o = re(e, n, s);
            return B(() => ie(t, o), 5, 1e3 + Math.random() * 1e3, [429])
        }, P = {
            $exchange_id: "_kx",
            email: "email",
            id: "id",
            $email: "email",
            $id: "id",
            $anonymous: "anonymous_id",
            $phone_number: "phone_number"
        }, ce = e => {
            let t = {};
            return Object.keys(P).forEach(n => {
                if (oe(n)) {
                    let s = e[n];
                    if (s) {
                        let o = (n === "$email" || n === "email") && !W(s),
                            r = n === "$phone_number" && !Q(s);
                        o || r || (t = A(l({}, t), {
                            [P[n]]: s
                        }))
                    }
                }
            }), t
        }, Y = (e, t, n, s, o) => {
            if (e.events.length !== 0) return ae(e.events, t, n, o).then(r => {
                if (r.status === 429) throw Error("Saving event cache due to rate limit.");
                e.deleteCallback && e.deleteCallback()
            }).then(() => V(s).then(r => Y(r, t, n, s, o)))
        }, le = (e, t, n, s, o) => {
            let r = e;
            if (!r || f) return;
            let i = ce(t);
            !i || Object.keys(i).length === 0 || (f = !0, V(n).then(a => Y(a, r, i, n, s)).catch(a => {
                throw a
            }).then(() => {
                ne(n), o && o()
            }).catch(() => {}).finally(() => {
                f = !1
            }))
        }, D = (e, t) => d(void 0, null, function*() {
            let n = yield t.getItem(C);
            if (!n) return;
            let s = e.data.checkout.email,
                o = e.data.checkout.phone;
            le(n, l(l({}, s && {
                $email: s
            }), o && {
                $phone_number: o
            }), t, {
                anonymous_backfill_source: `checkout_pixel_${e.name}`
            })
        })
    });
    var j = z(K => {
        S();
        G();
        var de = ["checkout_completed", "payment_info_submitted", "checkout_contact_info_submitted", "checkout_shipping_info_submitted"];
        _(({
            analytics: e,
            browser: t
        }) => {
            de.map(n => {
                e.subscribe(n, s => d(K, null, function*() {
                    return D(s, t.localStorage)
                }))
            })
        })
    });
    var Se = H(j());
})();