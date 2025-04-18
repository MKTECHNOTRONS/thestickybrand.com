! function() {
    var t = function(t) {
            var e = {
                exports: {}
            };
            return t.call(e.exports, e, e.exports), e.exports
        },
        e = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        n = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        r = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        };
    t((function(t, a) {
        "use strict";

        function i(t, e) {
            var n = t && t.items_changelog && t.items_changelog.added;
            if (n && Array.isArray(n)) {
                var r = Array.isArray(t.items),
                    a = "add-" + e + (r ? "-bulk" : ""),
                    i = r ? t.items : [t];
                n.map((function(t) {
                    var e = i.find((function(e) {
                        return String(e.variant_id || e.id) === String(t.variant_id)
                    }));
                    if (e) {
                        var n = {};
                        for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                        return n.quantity = t.quantity, n
                    }
                    return null
                })).filter(Boolean).forEach((function(t) {
                    y(t, t.quantity, a)
                }))
            }
        }

        function o(t, e, n) {
            if (t.length != e.length) throw Error("Payload body and response have different number of items");
            t.forEach((function(t, r) {
                var a = 1;
                try {
                    a = parseInt(e[r].quantity, 10) || 1
                } catch (t) {
                    console && console.warn && console.warn("[shop_events_listener] Error in handleBulkItemCartAddResponse: " + t.message)
                }
                l(t, a, n)
            }))
        }

        function d(t, e) {
            for (var n = new Array(e), r = 0; r < e; r++) n[r] = {};
            var a = !0,
                i = !1,
                o = void 0;
            try {
                for (var d, c = decodeURI(t).split("&")[Symbol.iterator](); !(a = (d = c.next()).done); a = !0) {
                    var s = d.value.split("="),
                        u = s[0].match(/items\[(\d+)\]\[(\w+)\].*/);
                    if (u) {
                        var l = u[1],
                            y = u[2];
                        "quantity" === y ? n[l].quantity = s[1] : "id" === y && (n[l].id = s[1])
                    }
                }
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    !a && c.return && c.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }

        function c(t) {
            if (!t) return 1;
            try {
                return JSON.parse(t).quantity || 1
            } catch (a) {
                if (t instanceof FormData) {
                    if (t.has("quantity")) return t.get("quantity")
                } else
                    for (var e = t.split("&"), n = 0; n < e.length; n++) {
                        var r = e[n].split("=");
                        if ("quantity" === r[0]) return r[1]
                    }
            }
            return 1
        }

        function s(t) {
            return t instanceof FormData ? u(t) : JSON.parse(t)
        }

        function u(t) {
            var e = new Map,
                n = "nonIndexed",
                r = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, d = t.entries()[Symbol.iterator](); !(r = (o = d.next()).done); r = !0) {
                    var c = o.value,
                        s = c[0],
                        u = c[1],
                        l = s.match(/items\[(\d*)\]\[(\w+)\]/);
                    if (l) {
                        var y = l[1],
                            f = l[2],
                            h = "" === y ? n : y,
                            p = e.get(h) || {};
                        p[f] = u, e.set(h, p)
                    }
                }
            } catch (t) {
                a = !0, i = t
            } finally {
                try {
                    !r && d.return && d.return()
                } finally {
                    if (a) throw i
                }
            }
            var v = {},
                m = !0,
                w = !1,
                g = void 0;
            try {
                for (var A, _ = e.entries()[Symbol.iterator](); !(m = (A = _.next()).done); m = !0) {
                    var S = A.value[1];
                    if (S.id) {
                        var b = v[S.id];
                        b ? b.quantity = (parseInt(b.quantity || "1", 10) + parseInt(S.quantity || "1", 10)).toString() : v[S.id] = S
                    }
                }
            } catch (t) {
                w = !0, g = t
            } finally {
                try {
                    !m && _.return && _.return()
                } finally {
                    if (w) throw g
                }
            }
            return {
                items: Object.values(v)
            }
        }

        function l(t, e, n) {
            var r = p("cart"),
                a = h({
                    variantId: String(t.id),
                    productId: t.product_id,
                    currency: window.ShopifyAnalytics.meta.currency,
                    quantity: String(e || 1),
                    price: t.presentment_price,
                    name: t.title,
                    sku: t.sku,
                    brand: t.vendor,
                    variant: t.variant_title,
                    category: t.product_type
                }, f()),
                i = h({
                    cartToken: r
                }, a);
            window.ShopifyAnalytics.lib.track("Added Product", i, void 0, void 0, {
                addApiSource: n,
                shopifyEmitted: !0
            });
            var o = h({
                referer: window.location.href
            }, a);
            window.ShopifyAnalytics.lib.track("monorail://trekkie_storefront_track_added_product/1.1", o)
        }

        function y(t, e, n) {
            var r = p("cart"),
                a = h({
                    variantId: String(t.id),
                    productId: t.product_id,
                    currency: window.ShopifyAnalytics.meta.currency,
                    quantity: String(e || 1),
                    price: t.presentment_price,
                    name: t.title,
                    sku: t.sku,
                    brand: t.vendor,
                    variant: t.variant_title,
                    category: t.product_type
                }, f()),
                i = h({
                    cartToken: r
                }, a);
            window.ShopifyAnalytics.lib.track("test_product_added_to_cart_server_changelog", i, void 0, void 0, {
                addApiSource: n,
                shopifyEmitted: !0
            })
        }

        function f() {
            var t = {};
            return window.ShopifyAnalytics.meta.page && (t = {
                pageType: window.ShopifyAnalytics.meta.page.pageType,
                resourceType: window.ShopifyAnalytics.meta.page.resourceType,
                resourceId: window.ShopifyAnalytics.meta.page.resourceId
            }), t
        }

        function h(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function p(t) {
            try {
                var e = new RegExp("(" + t + ")=([^;]+)").exec(document.cookie);
                return e ? unescape(e[2]) : null
            } catch (t) {
                return null
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var v, m, w, g = function() {
            function t(e, r, a, i) {
                n(this, t), this.xhr = e, this.url = r, this.method = a, this.body = i
            }
            return e(t, null, [{
                key: "handleXhrOpen",
                value: function() {}
            }]), e(t, [{
                key: "onReadyStateChange",
                value: function() {
                    this.xhr.readyState === t.XHR_FALLBACK_STATE.DONE && t.handleXhrDone({
                        method: this.method,
                        url: this.url,
                        body: this.body,
                        xhr: this.xhr
                    }), this.oldOnReadyStateChange && this.oldOnReadyStateChange()
                }
            }], [{
                key: "handleXhrDone",
                value: function(e) {
                    if (!(e.xhr.status >= 400)) try {
                        var n = document.createElement("a");
                        n.href = e.url;
                        var r = n.pathname ? n.pathname : e.url;
                        t.ADD_TO_CART_REGEX.test(r) && t._parsePayloadResponse(e, (function(t) {
                            try {
                                i(t, "xhr")
                            } catch (t) {}
                            var n = Object.keys(t);
                            if (1 === n.length && "items" === n[0]) {
                                var r = t.items,
                                    a = void 0;
                                try {
                                    a = JSON.parse(e.body).items
                                } catch (t) {
                                    a = d(e.body, r.length)
                                }
                                o(r, a, "add-xhr-bulk")
                            } else l(t, c(e.body), "add-xhr")
                        }))
                    } catch (t) {
                        console && console.warn && console.warn("[shop_events_listener] Error in handleXhrDone:  " + t.message)
                    }
                }
            }, {
                key: "parseBlobToJson",
                value: function(t, e) {
                    var n = new FileReader;
                    n.addEventListener("loadend", (function() {
                        return e(JSON.parse(String.fromCharCode.apply(String, r(new Uint8Array(n.result)))))
                    })), n.readAsArrayBuffer(t)
                }
            }, {
                key: "_parsePayloadResponse",
                value: function(e, n) {
                    e.xhr.response instanceof Blob ? t.parseBlobToJson(e.xhr.response, n) : e.xhr.responseText && n(JSON.parse(e.xhr.responseText))
                }
            }]), t
        }();
        g.ADD_TO_CART_REGEX = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/+cart\/+add(?:\.js|\.json)?\/*$/, g.XHR_FALLBACK_STATE = {
                UNSENT: 0,
                OPENED: 1,
                HEADERS_RECEIVED: 2,
                LOADING: 3,
                DONE: 4
            }, a.default = g,
            function() {
                function t(t, e, n) {
                    window.jQuery && window.jQuery(t).bind ? window.jQuery(t).bind(e, n) : t.addEventListener ? t.addEventListener(e, n) : t.attachEvent && t.attachEvent("on" + e, n)
                }

                function e(t) {
                    if (!((t = t || window.event).defaultPrevented || t.isDefaultPrevented && t.isDefaultPrevented())) {
                        var e = t.target || t.srcElement;
                        if (e && (e.getAttribute("action") || e.getAttribute("href"))) try {
                            var n = void 0,
                                r = e.id || e.elements.id;
                            n = r.options ? r.options[r.selectedIndex] : r;
                            var a = p("cart"),
                                o = i(n.value);
                            o.quantity = String(e.quantity ? e.quantity.value : 1);
                            var d = h({
                                    cartToken: a
                                }, o),
                                c = h({
                                    referer: window.location.href
                                }, o);
                            window.ShopifyAnalytics.lib.track("Added Product", d, void 0, void 0, {
                                addApiSource: "add-form",
                                shopifyEmitted: !0
                            }), window.ShopifyAnalytics.lib.track("monorail://trekkie_storefront_track_added_product/1.1", c)
                        } catch (t) {
                            console && console.warn && console.warn("[shop_events_listener] Error in handleSubmitCartAdd: " + t.message)
                        }
                    }
                }

                function n(t) {
                    var e = (t = t || window.event).target || t.srcElement;
                    if (e && e.getAttribute("action") && null !== e.getAttribute("data-payment-form")) try {
                        window.ShopifyAnalytics.lib.track("Added Payment", {
                            currency: window.ShopifyAnalytics.meta.currency,
                            total: window.ShopifyAnalytics.meta.checkout.payment_due / 100
                        }, void 0, void 0, {
                            shopifyEmitted: !0
                        })
                    } catch (t) {
                        console && console.warn && console.warn("[shop_events_listener] Error in handleSubmitToPaymentAdd: " + t.message)
                    }
                }

                function r(t) {
                    a((t = t || window.event).currentTarget)
                }

                function a(t) {
                    try {
                        var e = void 0,
                            n = t.id || t.elements.id;
                        if (!(e = n.options && n.options[n.selectedIndex] ? n.options[n.selectedIndex] : n)) return;
                        var r = e.value;
                        if (window.ShopifyAnalytics.meta.selectedVariantId && window.ShopifyAnalytics.meta.selectedVariantId == r) return;
                        window.ShopifyAnalytics.meta.selectedVariantId = r;
                        var a = i(r);
                        window.ShopifyAnalytics.lib.track("Viewed Product Variant", a, void 0, void 0, {
                            shopifyEmitted: !0
                        })
                    } catch (t) {
                        console && console.warn && console.warn("[shop_events_listener] Error in trackViewedProductVariant: " + t.message)
                    }
                }

                function i(t) {
                    var e = h(c(t), f());
                    return e.currency = window.ShopifyAnalytics.meta.currency, e
                }

                function o(t, e) {
                    var n = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var i, o = e[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                            var c = i.value,
                                s = d(t, c);
                            if (s) return {
                                product: c,
                                variant: s
                            }
                        }
                    } catch (t) {
                        r = !0, a = t
                    } finally {
                        try {
                            !n && o.return && o.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                }

                function d(t, e) {
                    var n = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var i, o = e.variants[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                            var d = i.value;
                            if (d.id == t) return d
                        }
                    } catch (t) {
                        r = !0, a = t
                    } finally {
                        try {
                            !n && o.return && o.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                }

                function c(t) {
                    var e = void 0,
                        n = void 0,
                        r = void 0;
                    if (window.ShopifyAnalytics.meta.products) {
                        var a = o(t, window.ShopifyAnalytics.meta.products);
                        e = a.product, n = a.variant
                    } else window.ShopifyAnalytics.meta.product && (n = d(t, e = window.ShopifyAnalytics.meta.product));
                    return e ? (r = {
                        productId: e.id,
                        productGid: e.gid,
                        brand: e.vendor,
                        category: e.type
                    }, n && (r = h(r, {
                        variantId: t,
                        price: n.price / 100,
                        name: n.name,
                        sku: n.sku,
                        variant: n.public_title
                    }))) : r = {
                        variantId: t
                    }, r
                }
                t(window, "load", (function() {
                    for (var i = 0; i < document.forms.length; i++) {
                        var o = document.forms[i].getAttribute("action");
                        o && o.indexOf("/cart/add") >= 0 && (t(document.forms[i], "submit", e), t(document.forms[i], "change", r), a(document.forms[i]));
                        var d = document.forms[i].elements.previous_step;
                        d && "payment_method" === d.value && t(document.body, "submit", n)
                    }
                }))
            }(), v = XMLHttpRequest, m = v.prototype.open, w = v.prototype.send, v.prototype.open = function(t, e) {
                this._url = e, this._method = t, g.handleXhrOpen(), m.apply(this, arguments)
            }, v.prototype.send = function(t) {
                var e = new g(this, this._url, this._method, t);
                this.addEventListener ? this.addEventListener("readystatechange", e.onReadyStateChange.bind(e), !1) : (e.oldOnReadyStateChange = this.onreadystatechange, this.onreadystatechange = e.onReadyStateChange), w.call(this, t)
            },
            function(t, e) {
                function n(t, e) {
                    t.clone().json().then((function(t) {
                        if ("[object Object]" === Object.prototype.toString.call(t)) {
                            try {
                                i(t, "fetch")
                            } catch (t) {}
                            if (t.items) {
                                var n = s(e).items;
                                o(t.items, n, "add-fetch-bulk")
                            } else {
                                l(t, c(e), "add-fetch")
                            }
                        }
                    })).catch(r)
                }

                function r(t) {
                    console && console.warn && console.warn("[shop_events_listener] Error in handleFetchRequest:  " + t.message)
                }
                "function" == typeof e && (t.fetch = function() {
                    var t = arguments;
                    return e.apply(this, Array.prototype.slice.call(arguments)).then((function(e) {
                        if (!e.ok) return e;
                        var a = document.createElement("a");
                        a.href = e.url;
                        var i = a.pathname ? a.pathname : e.url;
                        try {
                            if (g.ADD_TO_CART_REGEX.test(i)) try {
                                n(e, t[1].body)
                            } catch (t) {}
                        } catch (t) {
                            r(t)
                        }
                        return e
                    }))
                })
            }(window, window.fetch)
    }))
}("undefined" != typeof global ? global : "undefined" != typeof window && window);