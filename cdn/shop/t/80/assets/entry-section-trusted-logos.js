"use strict";
(self.webpackChunkthe_sticky_brand = self.webpackChunkthe_sticky_brand || []).push([
    [970], {
        5782: function() {
            if (!customElements.get("trusted-logos")) {
                const t = {
                    viewMoreBtnSelector: ".js-viewmore-btn",
                    listLogosSelector: ".js-list-logos"
                };
                class s extends HTMLElement {
                    constructor() {
                        super(), this.viewMoreButton = this.querySelector(t.viewMoreBtnSelector), this.listLogos = this.querySelector(t.listLogosSelector), this.init = this.init.bind(this), this.handleExpand = this.handleExpand.bind(this)
                    }
                    connectedCallback() {
                        this.init(), this.bindEvents(), window.addEventListener("resize", this.init)
                    }
                    init() {
                        this.listLogos && (this.listHeight = this.listLogos.offsetHeight, this.listScrollHeight = this.listLogos.scrollHeight, this.setMaxHeightCssVar(this.listScrollHeight), this.canExpand())
                    }
                    bindEvents() {
                        this.viewMoreButton && this.viewMoreButton.addEventListener("click", this.handleExpand)
                    }
                    setMaxHeightCssVar(t) {
                        this.style.setProperty("--list-max-height", `${t}px`)
                    }
                    handleExpand(t) {
                        t.preventDefault(), this.classList.add("is-expand")
                    }
                    canExpand() {
                        this.listScrollHeight > this.listHeight ? this.classList.contains("can-expand") || this.classList.add("can-expand") : this.classList.remove("can-expand")
                    }
                    disconnectedCallback() {
                        window.removeEventListener("resize", this.init), this.viewMoreButton && this.viewMoreButton.removeEventListener("click", this.handleExpand)
                    }
                }
                customElements.define("trusted-logos", s)
            }
        }
    },
    function(t) {
        var s;
        s = 5782, t(t.s = s)
    }
]);