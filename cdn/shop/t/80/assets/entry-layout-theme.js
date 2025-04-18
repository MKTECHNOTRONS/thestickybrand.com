(self.webpackChunkthe_sticky_brand = self.webpackChunkthe_sticky_brand || []).push([
    [596, 966, 411, 530], {
        5724: function(e, t, n) {
            "use strict";
            n.d(t, {
                NJ: function() {
                    return l
                },
                gA: function() {
                    return r
                }
            });
            var i = n(9156),
                s = n(4812),
                o = n(1604);
            const r = (0, i.RO)(o.z.object({
                    email: o.z.string().nonempty("Please enter an email").email({
                        message: "Please enter a valid email"
                    })
                })),
                a = async (e, t) => {
                    const n = new URLSearchParams;
                    n.append("g", t), n.append("email", e);
                    const i = await fetch("https://manage.kmail-lists.com/ajax/subscriptions/subscribe", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: n.toString()
                    });
                    return await i.json()
                };

            function l(e) {
                const t = (0, s.ref)(null),
                    n = (0, s.ref)(null);
                return (0, s.watch)((() => t.value ? .getMeta() ? .dirty), (e => {
                    e && (n.value = null)
                })), [t, n, async (t, i) => {
                    let {
                        resetForm: s
                    } = i;
                    try {
                        const i = await a(t.email, e);
                        i.success ? n.value = "Thanks for signing up!" : n.value = `${i.errors[0]||"Something went wrong."} Please try again later.`
                    } catch (e) {
                        console.error("Error subscribing to Klaviyo", e), n.value = "Something went wrong. Please try again later."
                    } finally {
                        s({
                            values: {
                                email: ""
                            }
                        }), setTimeout((() => {
                            n.value = null
                        }), 1e4)
                    }
                }]
            }
        },
        7835: function() {
            const e = ".js-accordion-button",
                t = ".js-accordion-content",
                n = "accordion-item";
            class i extends HTMLElement {
                constructor() {
                    super(), this.button = this.querySelector(e), this.content = this.querySelector(t), this.contentHeight = this.content.scrollHeight, this.state = {
                        open: !1
                    }
                }
                connectedCallback() {
                    this.setScrollHeightCssVar(), this.attachEvents()
                }
                setScrollHeightCssVar() {
                    this.style.setProperty("--scroll-height", `${this.contentHeight}px`)
                }
                attachEvents() {
                    this.button && (this.button.addEventListener("click", this.toggle.bind(this)), this.button.addEventListener("keydown", (e => {
                        13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), this.toggle())
                    })))
                }
                toggle() {
                    this.state.open ? this.close() : this.open()
                }
                open() {
                    this.state.open = !0, this.classList.add("is-open"), this.dispatchEvent(new Event("open")), this.button && this.button.setAttribute("aria-expanded", !0)
                }
                close() {
                    this.state.open = !1, this.classList.remove("is-open"), this.dispatchEvent(new Event("close")), this.button && this.button.setAttribute("aria-expanded", !1)
                }
            }
            customElements.define("accordion-item", i);
            class s extends HTMLElement {
                constructor() {
                    super(), this.listAccordions = Array.from(this.querySelectorAll(n))
                }
                connectedCallback() {
                    this.watchEvents()
                }
                watchEvents() {
                    this.listAccordions.map((e => {
                        e.addEventListener("open", (() => this.onOpen(e)))
                    }))
                }
                onOpen(e) {
                    this.listAccordions.map((t => {
                        t !== e && t.state.open && t.close()
                    }))
                }
            }
            customElements.define("accordion-wrapper", s)
        },
        8165: function() {
            if (!customElements.get("read-more")) {
                const e = {
                    isActiveClass: "is-active",
                    readmoreClass: "read-more",
                    readmoreButtonClass: "vo-read-more__button"
                };
                class t extends HTMLElement {
                    constructor() {
                        super(), this.options = {
                            snippet: "[more]",
                            limit: Number(this.getAttribute("data-limit")) || 0,
                            buttonClass: this.getAttribute("data-button-class") || "",
                            hideEllipsis: this.getAttribute("data-hide-ellipsis") || !1
                        }, this.content = {
                            before: this.innerHTML,
                            after: ""
                        }, this.label = {
                            readMore: this.getAttribute("data-label-expand") || "Read more",
                            readLess: this.getAttribute("data-label-collapse") || "Read less"
                        }, this.states = {
                            expand: !1
                        }, this.createButtonReadmore(), this.getOptions(), this.setupReadmore().then(this.collapse.bind(this)), -1 !== this.innerHTML.indexOf(this.options.snippet) && this.classList.add(e.readmoreClass)
                    }
                    connectedCallback() {
                        this.bindEvents()
                    }
                    getOptions() {
                        this.options.snippet = this.getAttribute("data-snippet") || this.options.snippet, this.options.limit = this.getAttribute("data-limit") || this.options.limit
                    }
                    bindEvents() {
                        this.buttonLoadMore.addEventListener("click", (() => {
                            this.states.expand ? this.collapse() : this.expand()
                        }))
                    }
                    createButtonReadmore() {
                        this.buttonLoadMore = document.createElement("button"), this.buttonLoadMore.classList.add(e.readmoreButtonClass), this.options.buttonClass && this.buttonLoadMore.classList.add(this.options.buttonClass)
                    }
                    setupReadmore() {
                        return new Promise((e => {
                            this.options.limit > 0 ? this.splitByLimit(e) : -1 !== this.innerHTML.indexOf(this.options.snippet) && (this.content.before = this.innerHTML.split(this.options.snippet)[0], this.content.after = this.innerHTML.split(this.options.snippet)[1], e())
                        }))
                    }
                    splitByLimit(e) {
                        const t = this.innerHTML.split(/(<[^>]+>)/g).filter((e => e.trim())).map((e => e.replace(/&amp;/g, "&"))),
                            n = t.join(""),
                            i = t.filter((e => !/<[^>]+>/g.test(e))).join(" ");
                        let s = Number(this.options.limit),
                            o = 0;
                        i.length <= this.options.limit || (t.length > 2 ? t.forEach((t => {
                            o += t.length, /<[^>]+>/g.test(t) && (s > o ? s += t.length : (this.content.before = n.slice(0, s), this.content.after = n.slice(s + 1, n.length), e()))
                        })) : 0 !== t.length && (this.content.before = n.slice(0, s), this.content.after = n.slice(s + 1, n.length), e()))
                    }
                    expand() {
                        this.states.expand = !0, this.innerHTML = this.content.before + this.content.after, this.buttonLoadMore.innerHTML = this.label.readLess, this.classList.add(e.isActiveClass), this.append(" "), this.appendChild(this.buttonLoadMore)
                    }
                    collapse() {
                        this.states.expand = !1, this.innerHTML = this.content.before, this.buttonLoadMore.innerHTML = this.label.readMore, this.classList.remove(e.isActiveClass), this.options.hideEllipsis || this.append("…"), this.appendChild(this.buttonLoadMore)
                    }
                }
                customElements.define("read-more", t)
            }
        },
        8134: function() {
            class e extends HTMLElement {
                constructor() {
                    super();
                    const e = this.querySelector(".js-video-thumbnail");
                    e ? e.addEventListener("click", this.loadContent.bind(this)) : this.loadContent(!1)
                }
                loadContent() {
                    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (this.getAttribute("loaded")) return;
                    const t = document.createElement("div");
                    t.appendChild(this.querySelector("template").content.firstElementChild.cloneNode(!0)), this.setAttribute("loaded", !0);
                    const n = this.appendChild(t.querySelector("video, model-viewer, iframe"));
                    e && n.focus(), "VIDEO" == n.nodeName && n.getAttribute("autoplay") && n.play()
                }
            }
            customElements.define("video-player", e)
        },
        8747: function(e, t, n) {
            "use strict";
            n(7090), n(1035);
            var i = n(6627),
                s = (n(1328), n(5021));
            n(1396), n(4119), n(5718), n(7835), n(8165), n(8134);
            (0, s.z2)(), document.addEventListener("DOMContentLoaded", (() => {
                (0, i.DY)() && (0, i.t8)(document.body, "ie")
            }))
        },
        5718: function(e, t, n) {
            "use strict";
            var i = n(1296),
                s = n.n(i),
                o = n(8551),
                r = n(8123),
                a = n(24),
                l = n.n(a),
                c = n(6627);
            (0, o.r)((e => {
                (e => {
                    const t = ".js-footer-menu-btn",
                        n = ".js-footer-menu-content",
                        i = "open",
                        o = l().all(".js-footer-menu", e);
                    if (o.length) {
                        const e = e => {
                                e.style.maxHeight = e.children[0].scrollHeight + "px"
                            },
                            r = (t, n, s) => {
                                o.map(a), (0, c.t8)(t, i), e(n), s.setAttribute("aria-expanded", "true")
                            },
                            a = e => {
                                (0, c.zN)(e, i);
                                const s = e.querySelector(n),
                                    o = e.querySelector(t);
                                o && s && (s.style.maxHeight = "0px", o.setAttribute("aria-expanded", "false"))
                            },
                            l = (e, t) => {
                                const s = e.querySelector(n);
                                s && !(0, c.r3)(e, i) ? r(e, s, t) : a(e)
                            };
                        o.map((e => {
                            const n = e.querySelector(t);
                            n ? .addEventListener("click", (() => {
                                l(e, n)
                            }))
                        }));
                        let d = window.innerWidth;
                        window.addEventListener("resize", s()((() => {
                            d != window.innerWidth && window.innerWidth < 1024 && (d = window.innerWidth, o.map((s => {
                                const o = s.querySelector(t).parentNode;
                                if (o && (0, c.r3)(o, i)) {
                                    const t = o.querySelector(n);
                                    e(t)
                                }
                            })))
                        }), 500))
                    }
                })(e)
            }), "footer"), document.addEventListener("DOMContentLoaded", (() => {
                (0, o.X)(r.Z, "email-signup-form")
            }))
        },
        1396: function(e, t, n) {
            "use strict";
            var i = n(8551);
            const s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e.forEach(((e, n) => {
                        n && (t ? e.classList.add("hidden") : e.classList.toggle("hidden"))
                    }))
                },
                o = (e, t) => {
                    e && (t ? (e.classList.add("inline"), e.textContent = e.textContent + "...") : (e.classList.remove("inline"), e.textContent = e.textContent.replace(/\.{3}$/, "")))
                },
                r = e => {
                    const t = document.createElement("a");
                    return t.classList.add("read-more", "bold"), t.textContent = "Read More", t.addEventListener("click", (t => {
                        ((e, t) => {
                            e.preventDefault();
                            const n = t[0];
                            if (!n) return;
                            const i = e.target;
                            i.textContent = "Read More" === i.textContent ? "Read Less" : "Read More";
                            const r = "Read More" === i.textContent;
                            o(n, r), s(t)
                        })(t, e)
                    })), t
                },
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    const n = e.querySelector(".js-quantity-content-all");
                    if (!n) return;
                    const i = e.querySelectorAll(".js-quantity-content-tab");
                    t ? (n.classList.add("hidden"), i.forEach((e => e.classList.remove("hidden")))) : (n.classList.remove("hidden"), i.forEach((e => e.classList.add("hidden"))))
                };
            (0, i.r)((e => {
                (e => {
                    e.querySelectorAll(".js-quantity-content-all, .js-quantity-content").forEach((e => {
                        const t = e.querySelectorAll("p");
                        s(t, !0);
                        const n = t[0];
                        n && 1 !== t.length && (o(n, !0), e.appendChild(r(t)))
                    }))
                })(e), (e => {
                    if (!e.querySelector(".js-quantity-content-all")) return;
                    const t = e.querySelectorAll(".js-tab");
                    let n = !1;
                    const i = () => {
                        n || (a(e, !0), n = !0)
                    };
                    window.matchMedia("(min-width: 768px)").addEventListener("change", (n => {
                        n.matches ? (a(e, !1), t.forEach((e => {
                            e.addEventListener("click", i)
                        }))) : (a(e, !0), t.forEach((e => {
                            e.removeEventListener("click", i)
                        })))
                    })), a(e, window.innerWidth < 768), window.innerWidth >= 768 && t.forEach((e => {
                        e.addEventListener("click", i)
                    }))
                })(e)
            }), "quality-sticker")
        },
        4119: function(e, t, n) {
            "use strict";
            var i = n(8551),
                s = n(6627),
                o = n(1609),
                r = n.n(o),
                a = n(3279),
                l = n.n(a),
                c = n(8446),
                d = n.n(c),
                u = n(7461);
            const p = () => {
                    const e = document.querySelectorAll(".cart__row[data-cart-item]");
                    if (r()(e)) return;
                    const t = window.SB.cart;
                    r()(t ? .items) || e.forEach((e => {
                        const n = e.querySelector(".cart__image");
                        if (!n) return;
                        const i = n.getAttribute("src"),
                            {
                                cartItemKey: o
                            } = e.dataset,
                            r = t.items.find((e => e.key === o));
                        if (!r) return;
                        const a = (0, s.mu)(r, !1, !1);
                        n.setAttribute("src", a), n.classList.remove("hide"), n.addEventListener("error", (() => {
                            n.setAttribute("src", i)
                        }))
                    }))
                },
                m = e => e ? .tags.includes("Created By Custom App") || ["custome-price", "special"].includes(e ? .template_suffix),
                h = async () => {
                    const e = window.SB.cart;
                    if (!r()(e ? .items)) try {
                        const t = await Promise.all(e.items.map((e => fetch(`/products/${e.handle}.json`).then((e => e.json())).then((t => ({ ...e,
                                product: t.product
                            })))))),
                            n = t.map((e => e.quantity)),
                            i = t.map((e => m(e.product) && !(e => {
                                if (!m(e ? .product)) return !0;
                                const t = e.properties ? ? {};
                                return !(r()(t) || "With Proof" !== t._Proof || r()(t._fullPathImage) || "true" === t._Reorder && r()(t._ReorderOf))
                            })(e) ? 0 : e.quantity));
                        if (d()(n, i)) return;
                        await fetch("/cart/update.js", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                updates: i
                            })
                        }), window.confirm("Some items in your cart are invalid and have been removed. Please review your cart before proceeding.") && window.location.reload()
                    } catch (e) {
                        console.error("Error while clearing invalid cart items", e), window.location.reload()
                    } finally {
                        document.querySelectorAll('button[name="checkout"]').forEach((e => e.removeAttribute("disabled")))
                    }
                };
            document.addEventListener("DOMContentLoaded", (async () => {
                (0, i.X)(u.Z, "text-field"), await h(), p(), (() => {
                    const e = document.querySelector("#cart_note");
                    e && e.addEventListener("input", l()((async e => {
                        try {
                            await fetch("/cart/update.js", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    attributes: {
                                        Note: e.target.value
                                    }
                                })
                            })
                        } catch (e) {
                            console.error("Error while updating cart note", e)
                        }
                    }), 500))
                })()
            })), document.addEventListener("cart:updated", (async () => {
                await h(), p()
            }))
        },
        3383: function(e, t, n) {
            "use strict";
            n.d(t, {
                L4: function() {
                    return m
                },
                bm: function() {
                    return u
                },
                Ee: function() {
                    return r
                },
                Xx: function() {
                    return p
                }
            });
            var i = n(3420),
                s = n(9568),
                o = n(4812);
            const r = (0, i.Q_)("common", (() => {
                const e = (0, o.ref)(null),
                    t = (0, s.cnE)();
                return {
                    lastActiveElement: e,
                    saveLastActiveElement: n => {
                        e.value = n || t.value
                    }
                }
            }));
            var a = n(7484),
                l = n.n(a),
                c = n(9270),
                d = n(6486);
            const u = (0, i.Q_)("accountOrderDetail", (() => {
                    const e = (0, o.computed)((() => window.SB.accountOrderDetailSettings)),
                        {
                            data: t,
                            isFetching: n,
                            execute: i,
                            error: r
                        } = (() => {
                            const e = new FormData;
                            return e.append("shop", window.Shopify.shop), e.append("order_id", window.SB.currentOrderId), (0, s.ibN)(c.J6.GET_ORDER_DETAIL).post(e).formData().json()
                        })(),
                        a = (0, o.computed)((() => r.value ? r.value : t.value ? .success ? null : t.value ? .message)),
                        u = (0, o.computed)((() => t.value ? .data)),
                        p = (0, o.computed)((() => {
                            let e = 0;
                            const t = (u ? .value ? .orderReplies ? ? []).reverse().map((t => ({
                                orderId: t.order_id,
                                image: t.image,
                                images: t.images,
                                replyBy: t.reply_by,
                                sender: t.reply_by === c.t0.ADMIN ? "Admin" : "You",
                                message: t.reply_text,
                                createdAt: l()(t.created_at).format(c.j4),
                                version: t.reply_by === c.t0.ADMIN && t.image ? "Version " + ++e : ""
                            })));
                            return t.reverse(), t
                        })),
                        m = (0, o.computed)((() => {
                            const e = p.value;
                            if (!(0, d.isEmpty)(e)) return e[0]
                        })),
                        h = (0, o.computed)((() => {
                            const e = p.value;
                            if (!(0, d.isEmpty)(e)) return e.find((e => e.replyBy === c.t0.ADMIN))
                        })),
                        f = (0, o.computed)((() => {
                            const e = p.value;
                            if (!(0, d.isEmpty)(e)) return e.find((e => e.replyBy === c.t0.ADMIN && !(0, d.isEmpty)(e.image)))
                        }));
                    (0, o.watch)(n, (e => {
                        e ? console.log("Fetching order...") : (0, d.isEmpty)(a.value) ? console.log("Fetched order:", u.value) : console.log("Error on fetching order:", r.value)
                    }));
                    const y = (0, o.ref)(!1);
                    return {
                        sectionSettings: e,
                        isFetching: n,
                        fetchOrder: i,
                        error: a,
                        order: u,
                        orderReplies: p,
                        latestReply: m,
                        latestAdminReply: h,
                        latestAdminReplyWithProof: f,
                        isOpenProofModal: y,
                        openProofModal: () => {
                            y.value = !0
                        }
                    }
                })),
                p = (0, i.Q_)("pdp", (() => {
                    const e = (0, o.ref)(window.SB ? .pdpData || {}),
                        t = (0, o.computed)((() => e.value ? .product)),
                        n = (0, o.computed)((() => e.value ? .originProduct)),
                        i = (0, o.computed)((() => e.value ? .dynamicFormSteps)),
                        s = (0, o.computed)((() => e.value ? .priceTable)),
                        r = (0, o.computed)((() => e.value ? .settings));
                    return {
                        pdpData: e,
                        product: t,
                        originProduct: n,
                        dynamicFormSteps: i,
                        priceTable: s,
                        settings: r
                    }
                })),
                m = (0, i.WB)()
        },
        8123: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var i = n(4812);
            const s = ["disabled"],
                o = {
                    key: 0,
                    class: "email-signup-form__message vo-text-body--small"
                };
            var r = n(5724),
                a = n(7461),
                l = {
                    name: "EmailSignupForm",
                    components: {
                        Form: n(2954).l0,
                        VueTextField: a.Z
                    },
                    props: {
                        klaviyoListId: {
                            type: String,
                            required: !0
                        },
                        submitBtnText: {
                            type: String,
                            default: "Submit"
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    setup(e) {
                        let {
                            klaviyoListId: t
                        } = e;
                        const [n, i, s] = (0, r.NJ)(t);
                        return {
                            validationSchema: r.gA,
                            form: n,
                            formMessage: i,
                            onSubmit: s
                        }
                    }
                };
            var c = (0, n(3744).Z)(l, [
                ["render", function(e, t, n, r, a, l) {
                    const c = (0, i.resolveComponent)("VueTextField"),
                        d = (0, i.resolveComponent)("Form");
                    return (0, i.openBlock)(), (0, i.createBlock)(d, {
                        ref: "form",
                        "validation-schema": r.validationSchema,
                        class: "email-signup-form",
                        onSubmit: r.onSubmit
                    }, {
                        default: (0, i.withCtx)((e => {
                            let {
                                meta: t
                            } = e;
                            return [(0, i.createVNode)(c, {
                                name: "email",
                                type: "email",
                                value: "",
                                placeholder: "Email",
                                disabled: n.disabled,
                                class: "text-field--email-signup-form"
                            }, null, 8, ["disabled"]), (0, i.createElementVNode)("button", {
                                class: "email-signup-form__submit vo-caption--large",
                                type: "submit",
                                disabled: n.disabled || !t.valid
                            }, (0, i.toDisplayString)(n.submitBtnText), 9, s), r.formMessage ? ((0, i.openBlock)(), (0, i.createElementBlock)("p", o, (0, i.toDisplayString)(r.formMessage), 1)) : (0, i.createCommentVNode)("v-if", !0)]
                        })),
                        _: 1
                    }, 8, ["validation-schema", "onSubmit"])
                }]
            ])
        },
        7461: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var i = n(4812);
            const s = ["for"],
                o = {
                    key: 1,
                    class: "text-field__message"
                };
            var r = {
                components: {
                    Field: n(2954).gN
                },
                props: {
                    type: {
                        type: String,
                        default: "text"
                    },
                    name: {
                        type: String,
                        required: !0
                    },
                    id: String,
                    value: {
                        type: [String, Number],
                        default: ""
                    },
                    label: {
                        type: String,
                        default: ""
                    },
                    placeholder: {
                        type: String,
                        default: ""
                    },
                    labelClass: {
                        type: String,
                        default: ""
                    },
                    inputClass: {
                        type: String,
                        default: ""
                    },
                    multi: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    single: {
                        type: Boolean,
                        default: !0
                    },
                    standalone: {
                        type: Boolean,
                        default: !1
                    },
                    required: {
                        type: Boolean,
                        default: !1
                    }
                },
                setup(e) {
                    return {
                        useTextArea: (0, i.computed)((() => "text" === e.type && e.multi))
                    }
                }
            };
            var a = (0, n(3744).Z)(r, [
                ["render", function(e, t, n, r, a, l) {
                    const c = (0, i.resolveComponent)("Field");
                    return (0, i.openBlock)(), (0, i.createBlock)(c, {
                        name: n.name,
                        value: n.value,
                        standalone: n.standalone
                    }, {
                        default: (0, i.withCtx)((t => {
                            let {
                                field: a,
                                errorMessage: l
                            } = t;
                            return [(0, i.createElementVNode)("div", (0, i.mergeProps)({
                                class: ["text-field", {
                                    "text-field--error": !!l
                                }]
                            }, e.$attrs), [n.label ? ((0, i.openBlock)(), (0, i.createElementBlock)("label", {
                                key: 0,
                                for: n.id,
                                class: (0, i.normalizeClass)(["text-field__label", n.labelClass])
                            }, (0, i.toDisplayString)(n.label), 11, s)) : (0, i.createCommentVNode)("v-if", !0), ((0, i.openBlock)(), (0, i.createBlock)((0, i.resolveDynamicComponent)(r.useTextArea ? "textarea" : "input"), (0, i.mergeProps)({
                                id: n.id,
                                type: n.type,
                                name: n.name,
                                required: n.required,
                                placeholder: n.placeholder,
                                disabled: n.disabled,
                                class: ["text-field__input", [r.useTextArea ? "text-field__input--textarea" : "", n.inputClass]]
                            }, a), null, 16, ["id", "type", "name", "required", "placeholder", "disabled", "class"])), n.single && l ? ((0, i.openBlock)(), (0, i.createElementBlock)("p", o, (0, i.toDisplayString)(l), 1)) : (0, i.createCommentVNode)("v-if", !0)], 16)]
                        })),
                        _: 1
                    }, 8, ["name", "value", "standalone"])
                }]
            ])
        }
    },
    function(e) {
        e.O(0, [351], (function() {
            return t = 8747, e(e.s = t);
            var t
        }));
        e.O()
    }
]);