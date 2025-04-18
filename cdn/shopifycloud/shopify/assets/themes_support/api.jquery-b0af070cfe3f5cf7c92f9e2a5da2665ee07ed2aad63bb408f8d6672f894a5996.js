function floatToString(t, r) {
    var o = t.toFixed(r).toString();
    return o.match(/^\.\d+/) ? "0" + o : o
}

function attributeToString(t) {
    return "string" != typeof t && "undefined" === (t += "") && (t = ""), jQuery.trim(t)
}
void 0 === window.Shopify && (window.Shopify = {}), Shopify.money_format = "${{amount}}", Shopify.onError = function(t, r) {
    var o = eval("(" + t.responseText + ")");
    o.message ? alert(o.message + "(" + o.status + "): " + o.description) : alert("Error : " + Shopify.fullMessagesFromErrors(o).join("; ") + ".")
}, Shopify.fullMessagesFromErrors = function(t) {
    var r = [];
    return jQuery.each(t, (function(t, o) {
        jQuery.each(o, (function(o, e) {
            r.push(t + " " + e)
        }))
    })), r
}, Shopify.onCartUpdate = function(t) {
    alert("There are now " + t.item_count + " items in the cart.")
}, Shopify.onCartShippingRatesUpdate = function(t, r) {
    var o = "";
    r.zip && (o += r.zip + ", "), r.province && (o += r.province + ", "), o += r.country, alert("There are " + t.length + " shipping rates available for " + o + ", starting at " + Shopify.formatMoney(t[0].price) + ".")
}, Shopify.onItemAdded = function(t) {
    alert(t.title + " was added to your shopping cart.")
}, Shopify.onProduct = function(t) {
    alert("Received everything we ever wanted to know about " + t.title)
}, Shopify.formatMoney = function(t, r) {
    function o(t, r) {
        return void 0 === t ? r : t
    }

    function e(t, r, e, a) {
        if (r = o(r, 2), e = o(e, ","), a = o(a, "."), isNaN(t) || null == t) return 0;
        var n = (t = (t / 100).toFixed(r)).split(".");
        return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e) + (n[1] ? a + n[1] : "")
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var a = "",
        n = /\{\{\s*(\w+)\s*\}\}/,
        i = r || this.money_format;
    switch (i.match(n)[1]) {
        case "amount":
            a = e(t, 2);
            break;
        case "amount_no_decimals":
            a = e(t, 0);
            break;
        case "amount_with_comma_separator":
            a = e(t, 2, ".", ",");
            break;
        case "amount_with_space_separator":
            a = e(t, 2, " ", ",");
            break;
        case "amount_with_period_and_space_separator":
            a = e(t, 2, " ", ".");
            break;
        case "amount_no_decimals_with_comma_separator":
            a = e(t, 0, ".", ",");
            break;
        case "amount_no_decimals_with_space_separator":
            a = e(t, 0, ".", "");
            break;
        case "amount_with_space_separator":
            a = e(t, 2, ",", "");
            break;
        case "amount_with_apostrophe_separator":
            a = e(t, 2, "'", ".")
    }
    return i.replace(n, a)
}, Shopify.resizeImage = function(t, r) {
    try {
        if ("original" == r) return t;
        var o = t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
        return o[1] + "_" + r + "." + o[2]
    } catch (r) {
        return t
    }
}, Shopify.addItem = function(t, r, o) {
    var e = {
        type: "POST",
        url: "/cart/add.js",
        data: "quantity=" + (r = r || 1) + "&id=" + t,
        dataType: "json",
        success: function(t) {
            "function" == typeof o ? o(t) : Shopify.onItemAdded(t)
        },
        error: function(t, r) {
            Shopify.onError(t, r)
        }
    };
    jQuery.ajax(e)
}, Shopify.addItemFromForm = function(t, r) {
    var o = {
        type: "POST",
        url: "/cart/add.js",
        data: jQuery("#" + t).serialize(),
        dataType: "json",
        success: function(t) {
            "function" == typeof r ? r(t) : Shopify.onItemAdded(t)
        },
        error: function(t, r) {
            Shopify.onError(t, r)
        }
    };
    jQuery.ajax(o)
}, Shopify.getCart = function(t) {
    jQuery.getJSON("/cart.js", (function(r) {
        "function" == typeof t ? t(r) : Shopify.onCartUpdate(r)
    }))
}, Shopify.pollForCartShippingRatesForDestination = function(t, r, o) {
    o = o || Shopify.onError;
    var e = function() {
        jQuery.ajax("/cart/async_shipping_rates", {
            dataType: "json",
            success: function(o, a, n) {
                200 === n.status ? "function" == typeof r ? r(o.shipping_rates, t) : Shopify.onCartShippingRatesUpdate(o.shipping_rates, t) : setTimeout(e, 500)
            },
            error: o
        })
    };
    return e
}, Shopify.getCartShippingRatesForDestination = function(t, r, o) {
    o = o || Shopify.onError;
    var e = {
        type: "POST",
        url: "/cart/prepare_shipping_rates",
        data: Shopify.param({
            shipping_address: t
        }),
        success: Shopify.pollForCartShippingRatesForDestination(t, r, o),
        error: o
    };
    jQuery.ajax(e)
}, Shopify.getProduct = function(t, r) {
    jQuery.getJSON("/products/" + t + ".js", (function(t) {
        "function" == typeof r ? r(t) : Shopify.onProduct(t)
    }))
}, Shopify.changeItem = function(t, r, o) {
    var e = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=" + r + "&id=" + t,
        dataType: "json",
        success: function(t) {
            "function" == typeof o ? o(t) : Shopify.onCartUpdate(t)
        },
        error: function(t, r) {
            Shopify.onError(t, r)
        }
    };
    jQuery.ajax(e)
}, Shopify.removeItem = function(t, r) {
    var o = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=0&id=" + t,
        dataType: "json",
        success: function(t) {
            "function" == typeof r ? r(t) : Shopify.onCartUpdate(t)
        },
        error: function(t, r) {
            Shopify.onError(t, r)
        }
    };
    jQuery.ajax(o)
}, Shopify.clear = function(t) {
    var r = {
        type: "POST",
        url: "/cart/clear.js",
        data: "",
        dataType: "json",
        success: function(r) {
            "function" == typeof t ? t(r) : Shopify.onCartUpdate(r)
        },
        error: function(t, r) {
            Shopify.onError(t, r)
        }
    };
    jQuery.ajax(r)
}, Shopify.updateCartFromForm = function(t, r) {
    var o = {
        type: "POST",
        url: "/cart/update.js",
        data: jQuery("#" + t).serialize(),
        dataType: "json",
        success: function(t) {
            "function" == typeof r ? r(t) : Shopify.onCartUpdate(t)
        },
        error: function(t, r) {
            Shopify.onError(t, r)
        }
    };
    jQuery.ajax(o)
}, Shopify.updateCartAttributes = function(t, r) {
    var o = "";
    jQuery.isArray(t) ? jQuery.each(t, (function(t, r) {
        var e = attributeToString(r.key);
        "" !== e && (o += "attributes[" + e + "]=" + attributeToString(r.value) + "&")
    })) : "object" == typeof t && null !== t && jQuery.each(t, (function(t, r) {
        o += "attributes[" + attributeToString(t) + "]=" + attributeToString(r) + "&"
    }));
    var e = {
        type: "POST",
        url: "/cart/update.js",
        data: o,
        dataType: "json",
        success: function(t) {
            "function" == typeof r ? r(t) : Shopify.onCartUpdate(t)
        },
        error: function(t, r) {
            Shopify.onError(t, r)
        }
    };
    jQuery.ajax(e)
}, Shopify.updateCartNote = function(t, r) {
    var o = {
        type: "POST",
        url: "/cart/update.js",
        data: "note=" + attributeToString(t),
        dataType: "json",
        success: function(t) {
            "function" == typeof r ? r(t) : Shopify.onCartUpdate(t)
        },
        error: function(t, r) {
            Shopify.onError(t, r)
        }
    };
    jQuery.ajax(o)
}, jQuery.fn.jquery >= "1.4" ? Shopify.param = jQuery.param : (Shopify.param = function(t) {
    var r = [],
        o = function(t, o) {
            o = jQuery.isFunction(o) ? o() : o, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(o)
        };
    if (jQuery.isArray(t) || t.jquery) jQuery.each(t, (function() {
        o(this.name, this.value)
    }));
    else
        for (var e in t) Shopify.buildParams(e, t[e], o);
    return r.join("&").replace(/%20/g, "+")
}, Shopify.buildParams = function(t, r, o) {
    jQuery.isArray(r) && r.length ? jQuery.each(r, (function(r, e) {
        rbracket.test(t) ? o(t, e) : Shopify.buildParams(t + "[" + ("object" == typeof e || jQuery.isArray(e) ? r : "") + "]", e, o)
    })) : null != r && "object" == typeof r ? Shopify.isEmptyObject(r) ? o(t, "") : jQuery.each(r, (function(r, e) {
        Shopify.buildParams(t + "[" + r + "]", e, o)
    })) : o(t, r)
}, Shopify.isEmptyObject = function(t) {
    for (var r in t) return !1;
    return !0
});