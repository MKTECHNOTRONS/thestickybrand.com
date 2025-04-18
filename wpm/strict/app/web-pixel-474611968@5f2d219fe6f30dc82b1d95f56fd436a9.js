(() => {
    var lt = Object.create;
    var nt = Object.defineProperty;
    var _t = Object.getOwnPropertyDescriptor;
    var bt = Object.getOwnPropertyNames;
    var gt = Object.getPrototypeOf,
        kt = Object.prototype.hasOwnProperty;
    var k = (i, e) => () => (i && (e = i(i = 0)), e);
    var vt = (i, e) => () => (e || i((e = {
        exports: {}
    }).exports, e), e.exports);
    var mt = (i, e, n, p) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let d of bt(e)) !kt.call(i, d) && d !== n && nt(i, d, {
                get: () => e[d],
                enumerable: !(p = _t(e, d)) || p.enumerable
            });
        return i
    };
    var ft = (i, e, n) => (n = i != null ? lt(gt(i)) : {}, mt(e || !i || !i.__esModule ? nt(n, "default", {
        value: i,
        enumerable: !0
    }) : n, i));
    var u = (i, e, n) => new Promise((p, d) => {
        var _ = s => {
                try {
                    r(n.next(s))
                } catch (t) {
                    d(t)
                }
            },
            b = s => {
                try {
                    r(n.throw(s))
                } catch (t) {
                    d(t)
                }
            },
            r = s => s.done ? p(s.value) : Promise.resolve(s.value).then(_, b);
        r((n = n.apply(i, e)).next())
    });
    var at, st = k(() => {
        at = "WebPixel::Render"
    });
    var v, rt = k(() => {
        st();
        v = i => shopify.extend(at, i)
    });
    var ut = k(() => {
        rt()
    });
    var pt = k(() => {
        ut()
    });
    var ht = vt(l => {
        pt();
        v(({
            configuration: i,
            analytics: e,
            browser: n,
            settings: p,
            init: d
        }) => {
            if (!p.shopId) {
                console.error("Triple Pixel wasn't Initialized. Triple Pixel stops executing!");
                return
            }
            let _ = {
                TripleName: p.shopId,
                ver: "2.16",
                plat: "SHOPIFY",
                isHeadless: !1,
                src: "SHOPIFY_EXT"
            };

            function b(t, o, c, a, h) {
                h === void 0 && (h = !1), a = new XMLHttpRequest, c ? (a.open("POST", t, !0), a.setRequestHeader("Content-Type", "application/json")) : a.open("GET", t, !0), a.send(JSON.stringify(c || {})), a.onreadystatechange = function() {
                    a.readyState === 4 && a.status === 200 ? h = a.responseText : (299 < a.status || a.status < 200) && o && !h && (h = !0, b(t, o - 1, c))
                }
            }
            e.subscribe("page_viewed", t => {
                s(t, "page_viewed")
            }), e.subscribe("product_viewed", t => {
                s(t, "product_viewed")
            }), e.subscribe("collection_viewed", t => {
                s(t, "collection_viewed")
            }), e.subscribe("product_added_to_cart", t => {
                s(t, "product_added_to_cart")
            }), e.subscribe("search_submitted", t => {
                s(t, "search_submitted")
            }), e.subscribe("checkout_started", t => u(l, null, function*() {
                var o;
                r(t, "config1", (o = d.data) == null ? void 0 : o.customer)
            })), e.subscribe("payment_info_submitted", t => u(l, null, function*() {
                var o;
                r(t, "config2", (o = d.data) == null ? void 0 : o.customer)
            })), e.subscribe("checkout_completed", t => u(l, null, function*() {
                var o;
                r(t, "config3", (o = d.data) == null ? void 0 : o.customer)
            })), e.subscribe("checkout_address_info_submitted", t => u(l, null, function*() {
                var o;
                r(t, "config4", (o = d.data) == null ? void 0 : o.customer)
            })), e.subscribe("checkout_contact_info_submitted", t => u(l, null, function*() {
                var o;
                r(t, "config5", (o = d.data) == null ? void 0 : o.customer)
            })), e.subscribe("checkout_shipping_info_submitted", t => u(l, null, function*() {
                var o;
                r(t, "config6", (o = d.data) == null ? void 0 : o.customer)
            }));

            function r(t, o, c) {
                return u(this, null, function*() {
                    var m, f, S, x, P, I, C, E, N, w, y, T, A, O, q, X, G, z, D, F, W, J, L, M, V, Y, Z, j, $, B, K, Q, R, U, H, tt, et, ot;
                    (f = (m = t.context.window.location) == null ? void 0 : m.href) != null && f.includes("fw_debug_params") && console.log("000");
                    let a = t.context.window[atob("c2NyZWVu")],
                        h = {
                            id: Date.now().toString(36) + "_" + Math.random().toString(36),
                            add_eid: t.id,
                            action: o,
                            avatar: yield n.localStorage.getItem("true_rand_gen_sequence.dat_"), avatar2: yield n.localStorage.getItem("true_rand_gen_sequence.dat_tmp"), time: a[atob("d2lkdGg=")] + ":" + a[atob("aGVpZ2h0")], host: _.TripleName, plat: _.plat, url: (S = t.context.window.location) == null ? void 0 : S.href, ref: (x = t.context.document) == null ? void 0 : x.referrer, title: (P = t.context.document) == null ? void 0 : P.title, ver: _.ver, email: ((I = t.data.checkout) == null ? void 0 : I.email) || (c == null ? void 0 : c.email), phone: ((C = t.data.checkout) == null ? void 0 : C.phone) || (c == null ? void 0 : c.phone) || ((N = (E = t.data.checkout) == null ? void 0 : E.shippingAddress) == null ? void 0 : N.phone) || ((y = (w = t.data.checkout) == null ? void 0 : w.billingAddress) == null ? void 0 : y.phone), token: (T = t.data.checkout) == null ? void 0 : T.token, orderId: (O = (A = t.data.checkout) == null ? void 0 : A.order) == null ? void 0 : O.id, firstName: (c == null ? void 0 : c.firstName) || ((G = (X = (q = t.data.checkout) == null ? void 0 : q.order) == null ? void 0 : X.customer) == null ? void 0 : G.firstName) || ((D = (z = t.data.checkout) == null ? void 0 : z.shippingAddress) == null ? void 0 : D.firstName), lastName: (c == null ? void 0 : c.lastName) || ((J = (W = (F = t.data.checkout) == null ? void 0 : F.order) == null ? void 0 : W.customer) == null ? void 0 : J.lastName) || ((M = (L = t.data.checkout) == null ? void 0 : L.shippingAddress) == null ? void 0 : M.lastName), province_code: (Y = (V = t.data.checkout) == null ? void 0 : V.shippingAddress) == null ? void 0 : Y.provinceCode, country_code: (j = (Z = t.data.checkout) == null ? void 0 : Z.shippingAddress) == null ? void 0 : j.countryCode, city: (B = ($ = t.data.checkout) == null ? void 0 : $.shippingAddress) == null ? void 0 : B.city, zip: (Q = (K = t.data.checkout) == null ? void 0 : K.shippingAddress) == null ? void 0 : Q.zip, i: (U = (R = t.data.checkout) == null ? void 0 : R.lineItems) == null ? void 0 : U.map(g => {
                                var it, ct, dt;
                                return {
                                    i: (ct = (it = g.variant) == null ? void 0 : it.product) == null ? void 0 : ct.id,
                                    v: (dt = g.variant) == null ? void 0 : dt.id,
                                    q: g.quantity,
                                    p: g.finalLinePrice
                                }
                            }), v: (tt = (H = t.data.checkout) == null ? void 0 : H.subtotalPrice) == null ? void 0 : tt.amount, cur: (ot = (et = t.data.checkout) == null ? void 0 : et.subtotalPrice) == null ? void 0 : ot.currencyCode
                        };
                    b("https://api.config-security.com/event", 5, h)
                })
            }

            function s(t, o) {
                return u(this, null, function*() {
                    p.shopId == "madisonbraids.myshopify.com" && (yield n.localStorage.setItem(`TW_EXT_${o}`, JSON.stringify({
                        i: t.id,
                        t: Date.now()
                    })))
                })
            }
        })
    });
    var zt = ft(ht());
})();