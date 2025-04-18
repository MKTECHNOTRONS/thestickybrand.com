"use strict";
(self.webpackChunkthe_sticky_brand = self.webpackChunkthe_sticky_brand || []).push([
    [444], {
        5761: function(e, s, t) {
            var r = t(8592),
                n = t(5560);
            if (!customElements.get("reviews-carousel")) {
                const e = {
                    reviewContentCarousel: ".js-swiper-reviews-content",
                    reviewImagesCarousel: ".js-swiper-reviews-images",
                    nextEl: ".js-swiper-reviews-content .swiper-button-next",
                    prevEl: ".js-swiper-reviews-content .swiper-button-prev"
                };
                class s extends HTMLElement {
                    constructor() {
                        super(), this.reviewContentCarouselEl = this.querySelector(e.reviewContentCarousel), this.reviewImagesCarouselEl = this.querySelector(e.reviewImagesCarousel), this.initCarousel()
                    }
                    initCarousel() {
                        this.reviewContentSwiperInstance = new r.Z(this.reviewContentCarouselEl, {
                            slidesPerView: 1,
                            modules: [n.Qr, n.W_],
                            speed: 1e3,
                            navigation: {
                                nextEl: e.nextEl,
                                prevEl: e.prevEl
                            },
                            spaceBetween: 90,
                            loop: !0
                        }), this.reviewImagesSwiperInstance = new r.Z(this.reviewImagesCarouselEl, {
                            slidesPerView: 1,
                            modules: [n.Qr, n.xW],
                            effect: "fade",
                            fadeEffect: {
                                crossFade: !0
                            },
                            loop: !0
                        }), this.reviewContentSwiperInstance.controller.control = this.reviewImagesSwiperInstance, this.reviewImagesSwiperInstance.controller.control = this.reviewContentSwiperInstance
                    }
                    disconnectedCallback() {
                        this.reviewContentSwiperInstance.destroy(), this.reviewImagesSwiperInstance.destroy()
                    }
                }
                customElements.define("reviews-carousel", s)
            }
        }
    },
    function(e) {
        e.O(0, [351], (function() {
            return s = 5761, e(e.s = s);
            var s
        }));
        e.O()
    }
]);