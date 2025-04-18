"use strict";
(self.webpackChunkthe_sticky_brand = self.webpackChunkthe_sticky_brand || []).push([
    [278], {
        6982: function(e, t, s) {
            var o = s(6265);
            if (!customElements.get("menu-slideout")) {
                const e = {
                    menuTriggerSelector: ".js-menu-open",
                    menuCloseSelector: ".js-menu-slideout-close",
                    headerSelector: ".js-header"
                };
                class t extends HTMLElement {
                    constructor() {
                        super(), this.trigger = document.querySelector(e.menuTriggerSelector), this.closeTrigger = this.querySelector(e.menuCloseSelector), this.header = document.querySelector(e.headerSelector), this.states = {
                            open: !1
                        }
                    }
                    connectedCallback() {
                        this.attachEvents()
                    }
                    attachEvents() {
                        this.trigger && (this.trigger.addEventListener("click", this.toggleMenu.bind(this)), this.closeTrigger && this.closeTrigger.addEventListener("click", this.closeMenu.bind(this)))
                    }
                    toggleMenu(e) {
                        this.states.open ? this.closeMenu(e) : this.openMenu(e)
                    }
                    openMenu(e) {
                        e.preventDefault(), this.states.open = !0, this.trigger.classList.add("is-open"), this.classList.add("is-open"), this.header.classList.add("menu-open"), (0, o.disablePageScroll)(this)
                    }
                    closeMenu(e) {
                        e.preventDefault(), this.states.open = !1, this.trigger.classList.remove("is-open"), this.classList.remove("is-open"), this.header.classList.remove("menu-open"), (0, o.clearQueueScrollLocks)(), (0, o.enablePageScroll)(this)
                    }
                }
                customElements.define("menu-slideout", t)
            }
            if (!customElements.get("site-header")) {
                const e = {
                    headerAccountSelector: ".js-header-account"
                };
                class t extends HTMLElement {
                    constructor() {
                        super(), this.headerOffsetBottom = this.getBoundingClientRect().bottom, this.headerAccount = this.querySelector(e.headerAccountSelector), this.updateHeaderOffsetBottom = this.updateHeaderOffsetBottom.bind(this), this.onResize = this.onResize.bind(this), this.attachEvents()
                    }
                    connectedCallback() {
                        this.setHeaderOffsetCssVar(this.headerOffsetBottom)
                    }
                    attachEvents() {
                        window.addEventListener("scroll", this.updateHeaderOffsetBottom), window.addEventListener("resize", this.onResize), document.body.addEventListener("DOMNodeInserted", this.updateHeaderOffsetBottom)
                    }
                    onResize() {
                        this.updateHeaderOffsetBottom()
                    }
                    preventDefaultClick(e) {
                        e.preventDefault()
                    }
                    updateHeaderOffsetBottom(e) {
                        const t = this.getBoundingClientRect().bottom;
                        t !== this.headerOffsetBottom && (this.setHeaderOffsetCssVar(t), this.headerOffsetBottom = t)
                    }
                    setHeaderOffsetCssVar(e) {
                        document.body.style.setProperty("--header-offset-bottom", `${e}px`)
                    }
                    disconnectedCallback() {
                        window.removeEventListener("scroll", this.updateHeaderOffsetBottom), window.removeEventListener("resize", this.onResize), document.body.removeEventListener("DOMNodeInserted", this.updateHeaderOffsetBottom)
                    }
                }
                customElements.define("site-header", t)
            }
        }
    },
    function(e) {
        e.O(0, [351], (function() {
            return t = 6982, e(e.s = t);
            var t
        }));
        e.O()
    }
]);