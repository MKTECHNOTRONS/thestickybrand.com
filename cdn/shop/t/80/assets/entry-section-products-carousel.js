"use strict";
(self.webpackChunkthe_sticky_brand = self.webpackChunkthe_sticky_brand || []).push([
    [73], {
        9350: function(e, s, t) {
            var r = t(8592),
                c = t(5560);
            if (!customElements.get("products-carousel")) {
                const e = {
                    carouselSelector: ".js-swiper-products-carousel .swiper",
                    nextEl: ".js-swiper-products-carousel .swiper-button-next",
                    prevEl: ".js-swiper-products-carousel .swiper-button-prev"
                };
                class s extends HTMLElement {
                    constructor() {
                        super(), this.carouselEl = this.querySelector(e.carouselSelector)
                    }
                    connectedCallback() {
                        const s = [c.W_];
                        this.swiper = new r.Z(this.carouselEl, {
                            slidesPerView: "auto",
                            spaceBetween: 25,
                            modules: s,
                            navigation: {
                                prevEl: e.prevEl,
                                nextEl: e.nextEl
                            },
                            breakpoints: {
                                768: {
                                    slidesPerView: 2
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                }
                            },
                            loop: !0
                        })
                    }
                    disconnectedCallback() {
                        this.swiper.destroy()
                    }
                }
                customElements.define("products-carousel", s)
            }
        }
    },
    function(e) {
        e.O(0, [351], (function() {
            return s = 9350, e(e.s = s);
            var s
        }));
        e.O()
    }
]);