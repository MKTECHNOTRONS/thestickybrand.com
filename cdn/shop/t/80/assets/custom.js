$(document).ready(function() {
    $('.hero-slider').each(function() {
        const $slider = $(this);
        const adaptiveHeight = $slider.is('[data-auto-height]');

        console.log($slider, adaptiveHeight);

        $slider.slick({
            dots: true,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight,
            appendDots: $('.js-hero-slider-dots'),
            prevArrow: $('.js-hero-slider-prev'),
            nextArrow: $('.js-hero-slider-next')
        });

        $slider.on('afterChange', function(event, slick, currentSlide) {
            $(this).parent().attr('data-current-index', currentSlide);
        })
    });

    $('.gallery-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.about-carosel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.other-pro-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /** PDP slider **/
    $('.has_product-detail-slider').slick({
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.product-thumb-slider',
        adaptiveHeight: true,
    });
    $('.product-thumb-slider').slick({
        arrows: true,
        asNavFor: '.has_product-detail-slider',
        centerMode: false,
        centerPadding: 0,
        speed: 1000,
        dots: false,
        slidesToScroll: 1,
        touchMove: true,
        focusOnSelect: true,
        infinite: false,
        slidesToShow: 4,
        vertical: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                variableWidth: true,
                vertical: false
            }
        }]
    });
    $('.product-thumb-slider').on('afterChange', function(event, slick, currentSlide) {
        var $slickNextBtn = $(this).children('.slick-next').eq(0);
        if (slick.$slides.length - 1 == currentSlide) {
            $slickNextBtn.addClass('is-disabled')
            $slickNextBtn.attr('aria-disabled', true)
        } else {
            $slickNextBtn.removeClass('is-disabled')
            $slickNextBtn.attr('aria-disabled', false)
        }
    })
    /********* Mobile Menu ********/
    $(".mobile-menu").click(function() {
        $(".mobile-menu-button").toggleClass("on");
        $(".mobile-navbar").toggleClass("active");
        $("header").toggleClass("menu-active");
        $("body").toggleClass("no-scroll");
    });
    $(".close-menu").click(function() {
        $(".mobile-menu-button").removeClass("on");
        $(".mobile-navbar").removeClass("active");
        $("header").removeClass("menu-active");
        $("body").removeClass("no-scroll");
    });
    //   $('.wyn-wrapper').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     mobileFirst: true,
    //     arrows: true,
    //     dots: false,
    //     responsive: [
    //       {
    //         breakpoint: 769,
    //         settings: 'unslick'
    //       }
    //     ]
    //   });

    //   $(window).on('resize', function() {
    //     $('.wyn-wrapper').slick('resize');
    //   });
    /******* Accordian JS *******/
    function close_accordion_section() {
        $('.accordion .accordion-section-title, .selector-wrapper label').removeClass('active');
        $('.accordion .accordion-section-content, .selector-wrapper .single-option-selector').slideUp(300).removeClass('open');
    }
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        e.preventDefault();
        var currentAttrValue = $(this).attr('href');

        if ($('#shopify-section-product-template-special').length == 0) {
            if ($(e.target).is('.active')) {
                $(this).removeClass('active');
                // Open up the hidden content panel
                $('.accordion ' + currentAttrValue).slideUp(300).removeClass('open');
            } else {
                // Add active class to section title
                $(this).addClass('active');
                // Open up the hidden content panel
                $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
            }
        }

    });

    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    /* if in tab mode */
    $("ul.tabs li").click(function() {

        $(this).closest(".tab-view").find(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(this).closest(".tab-view").find("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(this).closest(".tab-view").find(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */

    //   $(".tab_drawer_heading").on("click", function() {
    //     if ($(this).hasClass("active")) {
    //       $(this).removeClass("active");
    //       $(this).siblings(".content").slideUp(200);
    //       $(".tab_drawer_heading i").removeClass("fa-minus").addClass("fa-plus");
    //     } else {
    //       $(".tab_drawer_heading i").removeClass("fa-minus").addClass("fa-plus");
    //       $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    //       $(".tab_drawer_heading").removeClass("active");
    //       $(this).addClass("active");
    //       $(".content").slideUp(200);
    //       $(this).siblings(".content").slideDown(200);
    //     }
    //   });


    /* Extra class "tab_last"
	   to add border to right side
	   of last tab */
    $('ul.tabs li').last().addClass("tab_last");
    /* TABS ENDS */

    /* TABS INNER TABS */
    $(".tab-view1").each(function() {
        $(this).find(".tab_content1").hide();
        $(this).find(".tab_content1:first").show();
    });
    /* if in tab mode */
    $("ul.tabs1 li").click(function() {
        $(this).closest(".tab-view1").find(".tab_content1").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(this).closest(".tab-view1").find("ul.tabs1 li").removeClass("active");
        $(this).addClass("active");

        $(this).closest(".tab-view1").find(".tab_drawer_heading1").removeClass("d_active");
        $(".tab_drawer_heading1[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading1").click(function() {
        $(this).closest(".tab-view1").find(".tab_content1").hide();
        var d_activeTab = $(this).attr("rel");
        if ($(this).hasClass("d_active")) {
            $("#" + d_activeTab).fadeOut();

            //       $(this).closest(".tab-view1").find(".tab_drawer_heading1").removeClass("d_active");
            $(this).removeClass("d_active");

            //       $(this).closest(".tab-view1").find("ul.tabs1 li").removeClass("active");
            $("ul.tabs1 li[rel^='" + d_activeTab + "']").removeClass("active");
        } else {
            $("#" + d_activeTab).fadeIn();

            $(this).closest(".tab-view1").find(".tab_drawer_heading1").removeClass("d_active");
            $(this).addClass("d_active");

            $(this).closest(".tab-view1").find("ul.tabs1 li").removeClass("active");
            $("ul.tabs1 li[rel^='" + d_activeTab + "']").addClass("active");
        }
    });
    /* Extra class "tab_last"
	   to add border to right side
	   of last tab */
    $('ul.tabs1 li').last().addClass("tab_last");
    /* TABS INNER TABS */

    /* Header ACCOUNT TABS STARTS*/
    if ($(window).width() < 768) {
        $(".m-acc-title").click(function() {
            $(".mobile-acc").hide();
            var d_activeTab = $(this).attr("rel");
            $("#" + d_activeTab).fadeIn();
            $(".m-acc-title").removeClass("d_active");
            $(this).addClass("d_active");
        });
    }
    /* Header ACCOUNT TABS ENDS*/
    jQuery('.vieo-btn').click(function(m) {
        jQuery('body,html').toggleClass('scollno').toggleClass('popupopen');
        $('.overlay_popup').toggleClass('popup_show');
    });
    jQuery('.close_popup').click(function(m) {
        $('.overlay_popup').removeClass('popup_show');
    });
    $(".load-btn").click(function() {
        $(this).toggleClass("on");
        $(".mobile-load-cotnet").toggleClass("open");
    });
    /********* Smooth scroll to REMOVABLE section ********/
    /********* Smooth scroll to FAQ section ********/
    $('.faq-menu-list a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            // window.location.hash = target;
        });
    });
    var e = $(".btntop");
    e.on("click", function(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: 0
        }, "5000");
    })
    /******** PRODUCT PAGE TOGGLE JS Ends********/
    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(200);
            $(".set > a i").removeClass("down").addClass("up");
        } else {
            $(".set > a i").removeClass("down").addClass("up");
            $(".set > a").removeClass("active");
            $(".content").slideUp(200);
            $(this).find("i").removeClass("up").addClass("down");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this).siblings(".content").slideDown(200);
        }
    });
    /******** FAQ page TOGGLE JS ********/
    $(".set_faq > a").on("click", function(e) {
        e.preventDefault();
        if ($(this).hasClass("d_active")) {
            $(this).removeClass("d_active");
            $(this).siblings(".content_faq").slideUp(200);
        } else {
            $(this).addClass("d_active");
            $(this).siblings(".content_faq").slideDown(200);
        }
    });

    $("body").on('click', 'a[href="#chatId"]', function(e) {
        e.preventDefault();
        Intercom('show');
    });

    $('body').on('click', '.inner-menu li a', function(e) {
        if (!$(this).parent().hasClass('redirect_link')) {
            var id = $(this).attr('id');
            var nextState = {
                additionalInformation: 'Updated the URL with JS'
            };
            if ($('.collection-pagefirst.collection-all').length && window.location.href.indexOf(id) == -1) {
                e.preventDefault();
                let stateObj = {
                    id: "100"
                };
                window.history.replaceState(stateObj, 'collection', $(this).attr('href'));
                if ($('.collection-main.' + id).length) {
                    $('html, body').animate({
                        scrollTop: $('.collection-main.' + id).offset().top - 150
                    }, 500);
                }
            }
        }
    });

    if ($('.collection-pagefirst').length) {
        var id_href = window.location.href;
        var n = id_href.split('/');
        var jjj = n[n.length - 1]
        if ($('.collection-main.' + jjj).length) {
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $('.collection-main.' + jjj).offset().top - 150
                }, 500);
            }, 800);
        }
    }

    $('body').on('click', '.collection-col', function(e) {
        var id = $(this).attr('id');
        if (id == 'signage') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('.collection-main.' + id).offset().top - 150
            }, 500);
        }
    });

    $('body').on('click', '.js-popup-activator', (e) => {
        e.preventDefault()

        $('.popup-main img').attr('src', e.target.dataset.imageUrl || e.target.src)
        $('.popup-main').addClass('popup-active')
        $('.overlay').addClass('popup-active')
        $('body').addClass("popup-active")
    })

    $("body").on('click', ".popup-closer,.keep_shop", function(e) {
        e.preventDefault()

        $(this).closest(".popup-main").removeClass("popup-active")
        $('.overlay').removeClass("popup-active")
    })

    $("body").on('click', ".overlay", function(e) {
        e.preventDefault()

        $('.popup-main').removeClass('popup-active')
        $('.overlay').removeClass("popup-active")
        $('body').removeClass("popup-active")
    });

    $(window).on('load', function() {
        $('.selector-wrapper:eq(0) label').addClass('active');
        $('.selector-wrapper:eq(0) .single-option-selector').slideDown(300).addClass('open');
        $('.selector-wrapper:eq(1) .single-option-selector').slideDown(300).addClass('open');
        if ($('.selector-wrapper').length > 1) {
            $('body').on('click', '.selector-wrapper label', function(e) {
                e.preventDefault();
                if ($(e.target).is('.active')) {
                    $(this).removeClass('active');
                    $(this).parent().find('.single-option-selector').slideUp(300).removeClass('open');
                } else {
                    $(this).addClass('active');
                    $(this).parent().find('.single-option-selector').slideDown(300).addClass('open');
                }
            });
        }
    });

    function refreshCart() {
        $.getJSON('/cart.js', function(cart) {
            var count = cart.item_count;
            $('.header-cart span').html(count);

            window.SB.cart = cart
        });

        document.dispatchEvent(new CustomEvent('cart:updated'));
    }

    $('body').on('click', '.cart__qty .adjust', function() {
        var input = $(this).parent().find('input');
        var ip = parseInt(input.val());
        if ($(this).hasClass('plus')) {
            ip = ip + 1;
        } else {
            ip = ip - 1;
        }
        if (ip == 0) {
            return false;
        }
        input.val(ip);
        var id = parseInt(input.attr('data-id'));
        $.ajax({
            type: 'POST',
            url: '/cart/update.js',
            data: 'updates[' + id + ']=' + ip,
            dataType: 'json',
            error: function(jqXHR, textStatus, errorThrown) {
                var response = $.parseJSON(jqXHR.responseText);
                alert(response.description);
            }
        }).done(function(data) {
            $.get("/cart", function(data) {
                var filteredData = $(data).find(".cart-page").html();
                $('.cart-page').html(filteredData);
                refreshCart();
            });
        });
    });

    var mf = Shopify.money_format;

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    //   console.log(price_json);
    function product_json_price(qty, squre, type, c_no) {
        var arr = [];
        var z = ''
        var multiplier = 0;
        var side = '';
        if (typeof price_json !== 'undefined') {
            $.each(price_json, function(key, val) {
                if (key == 'price_value') {
                    z = price_json[key];
                    $.each(z, function(i, value) {
                        arr.push(i);
                    });
                }
                if (key == 'multiplier') {
                    multiplier = price_json[key];
                }
                if (key == 'table_type') {
                    side = price_json[key];
                }
            });
            var cur_price = 0;
            var prev_price = 0;
            var qty = Number(qty);
            var x = '',
                y = '';
            $.each(price_json, function(key, val) {
                if (key == 'price_value') {
                    z = price_json[key];
                    $.each(z, function(i, value) {
                        if (i <= qty) {
                            x = z[i];
                            y = z[Object.keys(z)[0]];
                        }
                    });
                }
            });

            //       y = getKeyByValue(arr,y);
            //       y = z[arr[y - 1]];
            $.each(x, function(j, v) {
                if (side == 'color_price') {
                    if ($('.color-selct select option').length <= 2) {
                        type = "color_price";
                        c_no = 0;
                    }
                    var squre_min = parseFloat(j.split('x')[0]);
                    var squre_max = parseFloat(j.split('x')[1]);
                    var f_squre = squre_min * squre_max;
                    if (squre == f_squre) {
                        var c_p = this.split('|');
                        $.each(c_p, function(p, q) {
                            if (p == c_no && c_no !== 'undefined') {
                                if (multiplier > 0) {
                                    cur_price = parseFloat(this) * multiplier;
                                } else {
                                    cur_price = parseFloat(this);
                                }
                            }
                        });
                    }
                } else {
                    var squre_min = parseFloat(j.split('-')[0]);
                    var squre_max = parseFloat(j.split('-')[1]);

                    if (squre >= squre_min && squre <= squre_max) {
                        if (type == 'front_back') {
                            if (multiplier > 0) {
                                cur_price = parseFloat(this.split('|')[1]) * multiplier;
                            } else {
                                cur_price = parseFloat(this.split('|')[1]);
                            }
                            return false;
                        } else {
                            if (multiplier > 0) {
                                cur_price = parseFloat(this.split('|')[0]) * multiplier;
                            } else {
                                cur_price = parseFloat(this.split('|')[0]);
                            }
                            return false;
                        }
                    } else {
                        if (squre >= squre_min) {
                            var i_x = x[Object.keys(x)[Object.keys(x).length - 1]];
                            if (type == 'front_back') {
                                if (multiplier > 0) {
                                    cur_price = parseFloat(i_x.split('|')[1]) * multiplier;
                                } else {
                                    cur_price = parseFloat(i_x.split('|')[1]);
                                }
                            } else {
                                if (multiplier > 0) {
                                    cur_price = parseFloat(i_x.split('|')[0]) * multiplier;
                                } else {
                                    cur_price = parseFloat(i_x.split('|')[0]);
                                }
                            }
                        }
                        if (squre < 1) {
                            var i_x = x[Object.keys(x)[0]];
                            if (type == 'front_back') {
                                if (multiplier > 0) {
                                    cur_price = parseFloat(i_x.split('|')[1]) * multiplier;
                                } else {
                                    cur_price = parseFloat(i_x.split('|')[1]);
                                }
                            } else {
                                if (multiplier > 0) {
                                    cur_price = parseFloat(i_x.split('|')[0]) * multiplier;
                                } else {
                                    cur_price = parseFloat(i_x.split('|')[0]);
                                }
                            }
                        }
                    }
                }
            });
            if (typeof y !== 'undefined') {
                $.each(y, function(k, d) {
                    if (side == 'color_price') {
                        var squre_min = parseFloat(k.split('x')[0]);
                        var squre_max = parseFloat(k.split('x')[1]);
                        var f_squre = squre_min * squre_max;
                        if (squre == f_squre) {
                            var c_p = this.split('|');
                            $.each(c_p, function(p, q) {
                                if (p == c_no && c_no !== 'undefined') {
                                    if (multiplier > 0) {
                                        prev_price = parseFloat(this) * multiplier;
                                    } else {
                                        prev_price = parseFloat(this);
                                    }
                                }
                            });
                        }
                    } else {
                        var squre_min = parseFloat(k.split('-')[0]);
                        var squre_max = parseFloat(k.split('-')[1]);
                        if (squre >= squre_min && squre <= squre_max) {
                            if (type == 'front_back') {
                                if (multiplier > 0) {
                                    prev_price = parseFloat(this.split('|')[1]) * multiplier;
                                } else {
                                    prev_price = parseFloat(this.split('|')[1]);
                                }
                                return false;
                            } else {
                                if (multiplier > 0) {
                                    prev_price = parseFloat(this.split('|')[0]) * multiplier;
                                } else {
                                    prev_price = parseFloat(this.split('|')[0]);
                                }
                                return false;
                            }
                        } else {
                            if (squre >= squre_min) {
                                var i_y = y[Object.keys(y)[Object.keys(y).length - 1]];
                                if (type == 'front_back') {
                                    if (multiplier > 0) {
                                        prev_price = parseFloat(i_y.split('|')[1]) * multiplier;
                                    } else {
                                        prev_price = parseFloat(i_y.split('|')[1]);
                                    }
                                } else {
                                    if (multiplier > 0) {
                                        prev_price = parseFloat(i_y.split('|')[0]) * multiplier;
                                    } else {
                                        prev_price = parseFloat(i_y.split('|')[0]);
                                    }
                                }
                            }
                            if (squre < 1) {
                                var i_y = y[Object.keys(y)[0]];
                                if (type == 'front_back') {
                                    if (multiplier > 0) {
                                        prev_price = parseFloat(i_y.split('|')[1]) * multiplier;
                                    } else {
                                        prev_price = parseFloat(i_y.split('|')[1]);
                                    }
                                } else {
                                    if (multiplier > 0) {
                                        prev_price = parseFloat(i_y.split('|')[0]) * multiplier;
                                    } else {
                                        prev_price = parseFloat(i_y.split('|')[0]);
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        //     console.log(cur_price, 'cur_price');
        //     console.log(prev_price, 'prev_price');
        if (side == 'color_price') {
            var final_price = (Math.round((parseFloat(qty * cur_price) + Number.EPSILON) * 100) / 100).toFixed(2);
        } else {
            var ll_final_price = (parseFloat(qty * cur_price) + Number.EPSILON).toFixed(5);
            var final_price = (Math.round((parseFloat(ll_final_price * squre) + Number.EPSILON) * 100) / 100).toFixed(2);
        }


        if (side == 'color_price') {
            var save_price = (Math.round((parseFloat(qty * prev_price) + Number.EPSILON) * 100) / 100).toFixed(2);
        } else {
            var lll_save_price = qty * prev_price
            var save_price = (Math.round((parseFloat(lll_save_price * squre) + Number.EPSILON) * 100) / 100).toFixed(2);
        }

        let price = Shopify.formatMoney(0, mf);
        if (final_price > 0) {
            price = Shopify.formatMoney(final_price, mf);
        }
        $('.product_ct_price .price').html(price);
        $('#response_price').attr('data-product-price', price);

        if (final_price > 0 && save_price > 0) {
            var save_percentage = parseInt(100 - ((final_price * 100) / save_price));

            if (save_percentage > 0) {
                $('.price-percent-saved').html(`You Save ${save_percentage}%`);
            } else {
                $('.price-percent-saved').html('');
            }
        } else {
            $('.price-percent-saved').html('');
        }
    }

    if ($('select[data-name="Size"] option[value="custom"]').length) {
        $('.custome_size_box').show();
    } else {
        $('.custome_size_box').hide();
    }

    if ($('.color-selct select option').length <= 2) {
        $('select[data-name="Type"]').val('2')
    }

    $(window).on('load', function() {
        var qty = $('select[data-name="Quantity"]').val();
        var size = $(".size-selct select option:selected").val();
        if (typeof size !== 'undefined') {
            size = size.toString();
            size = size.replaceAll('”', '').replaceAll('’', '');
            var new_size = size.replaceAll(' ', '').split('x');
            var width = parseFloat(new_size[0])
            var height = parseFloat(new_size[1]);
            var squre = width * height;
        }
        var side = parseInt($('[data-name="Type"]').val());
        if ($('[data-name="Type"]').val() != '') {
            if (side == 2) {
                var type = "color_price";
                var c_no = parseInt($('[data-name="Type"]').find('option:selected').data('color'));
            } else if (side == 1) {
                var type = "front_back";
            } else {
                var type = "front";
            }
        }
        if ($('input[data-name="Custom_Quantity"]').val() != '') {
            $('input[data-name="Custom_Quantity"]').val(qty);
        } else {
            $('input[data-name="Custom_Quantity"]').val('')
        }
        if (qty != '' && !$('.product-page-firstsection').hasClass('special_class')) {
            product_json_price(qty, squre, type, c_no);
        }
    });

    $('body').on('keyup change', 'select[data-name="Quantity"], input[data-name="Custom_Quantity"]', function() {
        $('.product-first-part').find('.error_msg').remove();
        $('.product-first-part').find('.min_error_msg').remove();
        var quantity = $('select[data-name="Quantity"]').val();

        if ($(this).attr('data-name') == 'Quantity') {
            $('input[data-name="Custom_Quantity"]').val('');
        }
        var c_quantity = $('input[data-name="Custom_Quantity"]').val();

        if (c_quantity != '') {
            var qty = parseInt(c_quantity);
            $('select[data-name="Quantity"]').val('custom');
        } else {
            var qty = parseInt(quantity);
        }
        var size = $(".size-selct select option:selected").val();
        var side = parseInt($('[data-name="Type"]').val());
        if ($('[data-name="Type"]').val() != '') {
            if (side == 2) {
                var type = "color_price";
                var c_no = parseInt($('[data-name="Type"]').find('option:selected').data('color'));
            } else if (side == 1) {
                var type = "front_back";
            } else {
                var type = "front";
            }
        }
        if (size != '') {
            size = size.toString();
            size = size.replaceAll('”', '').replaceAll('’', '');
            var new_size = size.replaceAll(' ', '').split('x');
        }
        if ($('input[data-name="Custom_Size_Width"]').val() != '' && $('input[data-name="Custom_Size_Height"]').val()) {
            var width = parseFloat($('input[data-name="Custom_Size_Width"]').val())
            var height = parseFloat($('input[data-name="Custom_Size_Height"]').val());
            $('select[data-name="Size"]').val('custom');
        } else {
            var new_size = size.replaceAll(' ', '').split('x');
            var width = parseFloat(new_size[0])
            var height = parseFloat(new_size[1]);
        }
        if (width != '' && height != '') {
            var squre = width * height;
        }
        var min_qty = $('select[data-name="Quantity"]').find('option:eq(1)').val();
        if (qty != '' && $('[data-name="Type"]').val() != '' || parseInt(c_quantity) >= parseInt(min_qty) && !$('.product-page-firstsection').hasClass('special_class')) {
            product_json_price(qty, squre, type, c_no);
        }
    });

    $('body').on('change', '.size-selct select', function() {
        $('.product-first-part').find('.error_msg').remove();
        $('.product-first-part').find('.min_error_msg').remove();
        var selectVal = $(".size-selct select option:selected").val();
        selectVal = selectVal.toString();
        selectVal = selectVal.replaceAll('”', '').replaceAll('’', '');
        var new_size = selectVal.replaceAll(' ', '').split('x');
        var width = 0;
        var height = 0;
        $('input[data-name="Custom_Size_Width"]').val('');
        $('input[data-name="Custom_Size_Height"]').val('');
        width = parseFloat(new_size[0])
        height = parseFloat(new_size[1]);
        var side = parseInt($('[data-name="Type"]').val());
        if ($('[data-name="Type"]').val() != '') {
            if (side == 2) {
                var type = "color_price";
                var c_no = parseInt($('[data-name="Type"]').find('option:selected').data('color'));
            } else if (side == 1) {
                var type = "front_back";
            } else {
                var type = "front";
            }
        }
        var quantity = $('select[data-name="Quantity"]').val();
        var c_quantity = $('input[data-name="Custom_Quantity"]').val();
        if (c_quantity != '') {
            var qty = parseInt(c_quantity);
            $('select[data-name="Quantity"]').val('custom');
        } else {
            var qty = parseInt(quantity);
        }
        if (width != '' && height != '') {
            var squre = width * height;
        }
        if (quantity != '' && !$('.product-page-firstsection').hasClass('special_class')) {
            product_json_price(qty, squre, type, c_no);
        }
    });

    $('body').on('keyup change', 'input[data-name="Custom_Size_Width"], input[data-name="Custom_Size_Height"]', function() {
        $('.product-first-part').find('.error_msg').remove();
        $('.product-first-part').find('.min_error_msg').remove();
        var quantity = $('select[data-name="Quantity"]').val();
        var c_quantity = $('input[data-name="Custom_Quantity"]').val();
        if (c_quantity != '') {
            var qty = parseInt(c_quantity);
        } else {
            var qty = parseInt(quantity);
        }
        var side = parseInt($('[data-name="Type"]').val());
        if ($('[data-name="Type"]').val() != '') {
            if (side == 2) {
                var type = "color_price";
                var c_no = parseInt($('[data-name="Type"]').find('option:selected').data('color'));
            } else if (side == 1) {
                var type = "front_back";
            } else {
                var type = "front";
            }
        }
        var width = parseFloat($('input[data-name="Custom_Size_Width"]').val())
        var height = parseFloat($('input[data-name="Custom_Size_Height"]').val());
        if (width != '' && height != '') {
            $('select[data-name="Size"]').val('custom');
            var squre = width * height;
        }
        if (qty != '' && squre != '' && !$('.product-page-firstsection').hasClass('special_class')) {
            product_json_price(qty, squre, type, c_no);
        }
    });

    $('body').on('change', 'select[data-name="Type"], input[data-name="Type"]', function() {
        $('.product-first-part').find('.error_msg').remove();
        $('.product-first-part').find('.min_error_msg').remove();
        var quantity = $('select[data-name="Quantity"]').val();
        var c_quantity = $('input[data-name="Custom_Quantity"]').val();
        if (c_quantity != '') {
            var qty = parseInt(c_quantity);
        } else {
            var qty = parseInt(quantity);
        }
        var size = $(".size-selct select option:selected").val();
        var side = parseInt($(this).val());
        if ($(this).val() != '') {
            if (side == 2) {
                var type = "color_price";
                var c_no = parseInt($('[data-name="Type"]').find('option:selected').data('color'));
            } else if (side == 1) {
                var type = "front_back";
            } else {
                var type = "front";
            }
        }
        if (size != '') {
            size = size.toString();
            size = size.replaceAll('”', '').replaceAll('’', '');
            var new_size = size.replaceAll(' ', '').split('x');
        }
        if (size == 'custom') {
            var width = parseFloat($('input[data-name="Custom_Size_Width"]').val())
            var height = parseFloat($('input[data-name="Custom_Size_Height"]').val());
        } else {
            var new_size = size.replaceAll(' ', '').split('x');
            var width = parseFloat(new_size[0])
            var height = parseFloat(new_size[1]);
        }
        if (width != '' && height != '') {
            var squre = width * height;
        }
        if (qty != '' && size != '' && !$('.product-page-firstsection').hasClass('special_class')) {
            product_json_price(qty, squre, type, c_no);
        }
    });


    function open_validation(value) {
        $(value).closest('.accordion').find('.accordion-section-title').addClass('active');
        $(value).closest('.accordion-section-content').slideDown(300).addClass('open');
    }

    $('body').on('click', '.product-first-part .upload-ntwrk-btn', function(e) {
        e.preventDefault();
        var shape = $('input[data-name="Shape"]:checked').val();
        var size = $('select[data-name="Size"]').val();
        var c_size_w = $('input[data-name="Custom_Size_Width"]').val();
        var c_size_h = $('input[data-name="Custom_Size_Height"]').val();
        var material = $('select[data-name="Material"]').val();
        var finish = $('input[data-name="Finish"]:checked').val();
        var quantity = $('select[data-name="Quantity"]').val();
        var type = $('[data-name="Type"]').val();
        var grommets = $('select[data-name="Grommets"]').val();
        var c_quantity = $('input[data-name="Custom_Quantity"]').val();
        var side = $('.sides-selct select option:selected').text();
        var color = $('.color-selct [data-name="Type"]').find('option:selected').html();
        $('.pdp-variants.shape span').text(shape);
        if (c_size_w != "" && c_size_h != "") {
            $('.pdp-variants.size span').text(c_size_w + '" x ' + c_size_h + '"');
        } else {
            $('.pdp-variants.size span').text(size);
        }
        if (c_quantity != "") {
            $('.pdp-variants.quantity span').text(c_quantity);
        } else {
            $('.pdp-variants.quantity span').text(quantity);
        }
        $('.pdp-variants.material span').text(material);
        $('.pdp-variants.finish span').text(finish);
        $('.pdp-variants.sides span').text(side);
        $('.pdp-variants.color span').text(color);
        $('.pdp-variants.grommets span').text(grommets);

        if (size == 'custom' || size == '' || c_quantity == '' || c_quantity != '' || finish == '' || material == '' || quantity == '' || type == '') {
            var x = true;
            var v_width = $('input[data-name="Custom_Size_Width"]');
            var v_height = $('input[data-name="Custom_Size_Height"]');
            var qtyl = $('input[data-name="Custom_Quantity"]');
            var v_size = $('select[data-name="Size"]');
            var v_quantity = $('select[data-name="Quantity"]');
            var v_material = $('select[data-name="Material"]');
            var v_finish = $('input[data-name="Finish"]:checked');
            var v_type = $('[data-name="Type"]');
            var min_qty = $('select[data-name="Quantity"]').find('option:eq(1)').val();
            $('.product-first-part').find('.error_msg').remove();
            $('.product-first-part').find('.min_error_msg').remove();
            if (v_size.length) {
                if (v_size.val().trim() == '') {
                    $(v_size).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_size).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_size);
                    }
                    x = false;
                    return false;
                }
                if (size == 'custom') {
                    if (v_width.val().trim() == '') {
                        $(v_width).parent().append('<span class="error_msg">Required</span>');
                        if (!$(v_width).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(v_width);
                        }
                        x = false;
                        return false;
                    }
                    if (v_height.val().trim() == '') {
                        $(v_height).parent().append('<span class="error_msg">Required</span>');
                        if (!$(v_height).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(v_height);
                        }
                        x = false;
                        return false;
                    }
                    if (v_width.val() != '' && v_width.val() < 0.5) {
                        $(v_width).parent().parent().append('<span class="min_error_msg">Minimum size requirement is .5 in</span>');
                        if (!$(v_width).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(v_width);
                        }
                        x = false;
                        return false;
                    }
                    if (v_height.val() != '' && v_height.val() < 0.5) {
                        $(v_height).parent().parent().append('<span class="min_error_msg">Minimum size requirement is .5 in</span>');
                        if (!$(v_height).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(v_height);
                        }
                        x = false;
                        return false;
                    }
                }
            }
            if (v_material.length) {
                if (v_material.val().trim() == '') {
                    $(v_material).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_material).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_material);
                    }
                    x = false;
                    return false;
                }
            }
            if (v_finish.length) {
                if (v_finish.val().trim() == '') {
                    $(v_finish).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_finish).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_finish);
                    }
                    x = false;
                    return false;
                }
            }
            if (v_type.length && $('[data-name="Type"] option').length > 2) {
                if (v_type.val().trim() == '') {
                    $(v_type).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_type).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_type);
                    }
                    x = false;
                    return false;
                }
            }
            if (v_quantity.length) {
                if (v_quantity.val().trim() == '') {
                    $(v_quantity).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_quantity).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_quantity);
                    }
                    x = false;
                    return false;
                }
                if (quantity == 'custom') {
                    if (c_quantity == '') {
                        if (qtyl.val().trim() == '') {
                            $(qtyl).parent().append('<span class="error_msg">Required</span>');
                            if (!$(qtyl).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                                open_validation(qtyl);
                            }
                            x = false;
                            return false;
                        }
                    }
                    if (qtyl.val() != '' && qtyl.val().indexOf('.') != -1) {
                        $(qtyl).parent().append('<span class="error_msg">Add Right Value</span>');
                        if (!$(qtyl).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(qtyl);
                        }
                        x = false;
                        return false;
                    }
                    if (qtyl.val() != '' && parseInt(qtyl.val()) < parseInt(min_qty)) {
                        $(qtyl).parent().append('<span class="error_msg">Minimum order quantity is ' + min_qty + '</span>');
                        if (!$(qtyl).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(qtyl);
                        }
                        x = false;
                        return false;
                    }
                }
            }

            if (x == false) {
                return false;
            }
        }

        if ($(this).attr('data-out-of-stock')) {
            console.log('Product is out of stock');
            return;
        }

        if ($(this).attr('data-add-to-cart')) {
            e.currentTarget.form.submit()
            return;
        }

        $('.product-first-part').hide();
        $('.product-second-part').show();
        $('html, body').animate({
            scrollTop: $('#scroll_this').offset().top - 100
        }, 500);
    });

    $('.pdp_coman_form_cls.no_form').on('submit', function() {
        var shape = $('input[data-name="Shape"]:checked').val();
        var size = $('select[data-name="Size"]').val();
        var c_size_w = $('input[data-name="Custom_Size_Width"]').val();
        var c_size_h = $('input[data-name="Custom_Size_Height"]').val();
        var material = $('select[data-name="Material"]').val();
        var finish = $('input[data-name="Finish"]:checked').val();
        var quantity = $('select[data-name="Quantity"]').val();
        var type = $('[data-name="Type"]').val();
        var grommets = $('select[data-name="Grommets"]').val();
        var c_quantity = $('input[data-name="Custom_Quantity"]').val();
        var side = $('.sides-selct select option:selected').text();
        var color = $('.color-selct [data-name="Type"]').find('option:selected').html();
        $('.pdp-variants.shape span').text(shape);
        if (c_size_w != "" && c_size_h != "") {
            $('.pdp-variants.size span').text(c_size_w + '" x ' + c_size_h + '"');
        } else {
            $('.pdp-variants.size span').text(size);
        }
        if (c_quantity != "") {
            $('.pdp-variants.quantity span').text(c_quantity);
        } else {
            $('.pdp-variants.quantity span').text(quantity);
        }
        $('.pdp-variants.material span').text(material);
        $('.pdp-variants.finish span').text(finish);
        $('.pdp-variants.sides span').text(side);
        $('.pdp-variants.color span').text(color);
        $('.pdp-variants.grommets span').text(grommets);

        if (size == 'custom' || size == '' || c_quantity == '' || c_quantity != '' || finish == '' || material == '' || quantity == '' || type == '') {
            var x = true;
            var v_width = $('input[data-name="Custom_Size_Width"]');
            var v_height = $('input[data-name="Custom_Size_Height"]');
            var qtyl = $('input[data-name="Custom_Quantity"]');
            var v_size = $('select[data-name="Size"]');
            var v_quantity = $('select[data-name="Quantity"]');
            var v_material = $('select[data-name="Material"]');
            var v_finish = $('input[data-name="Finish"]:checked');
            var v_type = $('[data-name="Type"]');
            var min_qty = $('select[data-name="Quantity"]').find('option:eq(1)').val();
            $('.product-first-part').find('.error_msg').remove();
            $('.product-first-part').find('.min_error_msg').remove();
            if (v_size.length) {
                if (v_size.val().trim() == '') {
                    $(v_size).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_size).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_size);
                    }
                    x = false;
                    return false;
                }
                if (size == 'custom') {
                    if (v_width.val().trim() == '') {
                        $(v_width).parent().append('<span class="error_msg">Required</span>');
                        if (!$(v_width).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(v_width);
                        }
                        x = false;
                        return false;
                    }
                    if (v_height.val().trim() == '') {
                        $(v_height).parent().append('<span class="error_msg">Required</span>');
                        if (!$(v_height).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(v_height);
                        }
                        x = false;
                        return false;
                    }
                    if (v_width.val() != '' && v_width.val() < 0.5) {
                        $(v_width).parent().parent().append('<span class="min_error_msg">Minimum size requirement is .5 in</span>');
                        if (!$(v_width).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(v_width);
                        }
                        x = false;
                        return false;
                    }
                    if (v_height.val() != '' && v_height.val() < 0.5) {
                        $(v_height).parent().parent().append('<span class="min_error_msg">Minimum size requirement is .5 in</span>');
                        if (!$(v_height).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(v_height);
                        }
                        x = false;
                        return false;
                    }
                }
            }
            if (v_material.length) {
                if (v_material.val().trim() == '') {
                    $(v_material).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_material).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_material);
                    }
                    x = false;
                    return false;
                }
            }
            if (v_finish.length) {
                if (v_finish.val().trim() == '') {
                    $(v_finish).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_finish).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_finish);
                    }
                    x = false;
                    return false;
                }
            }
            if (v_type.length && $('[data-name="Type"] option').length > 2) {
                if (v_type.val().trim() == '') {
                    $(v_type).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_type).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_type);
                    }
                    x = false;
                    return false;
                }
            }
            if (v_quantity.length) {
                if (v_quantity.val().trim() == '') {
                    $(v_quantity).parent().append('<span class="error_msg">This field is required</span>');
                    if (!$(v_quantity).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                        open_validation(v_quantity);
                    }
                    x = false;
                    return false;
                }
                if (quantity == 'custom') {
                    if (c_quantity == '') {
                        if (qtyl.val().trim() == '') {
                            $(qtyl).parent().append('<span class="error_msg">Required</span>');
                            if (!$(qtyl).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                                open_validation(qtyl);
                            }
                            x = false;
                            return false;
                        }
                    }
                    if (qtyl.val() != '' && qtyl.val().indexOf('.') != -1) {
                        $(qtyl).parent().append('<span class="error_msg">Add Right Value</span>');
                        if (!$(qtyl).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(qtyl);
                        }
                        x = false;
                        return false;
                    }
                    if (qtyl.val() != '' && parseInt(qtyl.val()) < parseInt(min_qty)) {
                        $(qtyl).parent().append('<span class="error_msg">Minimum order quantity is ' + min_qty + '</span>');
                        if (!$(qtyl).closest('.accordion').find('.accordion-section-title').hasClass('active')) {
                            open_validation(qtyl);
                        }
                        x = false;
                        return false;
                    }
                }
            }

            if (x == false) {
                return false;
            }
        }
    });

    $('body').on('click', '.pdp-variant-section .edit-btn, .pdp-variant-section .edit-my-order-btn-wrp a', function(e) {
        e.preventDefault();
        $('.product-first-part').find('.error_msg').remove();
        $('.product-first-part').show();
        $('.product-second-part').hide();
    });

    function genrateFileMsg(id, nId) {
        var fileExtension = ['ai', 'eps', 'jpg', 'png', 'pdf', 'tiff', 'svg'];
        if ($.inArray($("#" + id).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
            $("#" + nId).html("Only files of type ai, eps, jpg, png, pdf, tiff, svg is allowed");
            return false;
        }
        return true
    }

    function genrateSizeMsg(f, nId) {
        var f = f.size;
        f = f / 1024;
        if (f > 19000) {
            $("#" + nId).html("The file you are trying to upload is too large (max 19MB)");
            return false;
        }
        return true;
    }
    var file_size = 0;
    $('body').on('change', '.choose-file-btn', function() {
        file_size = this.files[0]
        if ($(this).val() != '') {
            $('#spanUploadFile').html('<span class="uplod_success">Your artwork has been successfully updated, please add product to cart.</span>')
        }
    });

    $('body').on('click', '#addToCart', function() {
        if (!$(this).hasClass('custom_product')) {
            $('#spanUploadFile').html('');
            var x = true;
            var proof = $('[name="properties[_Proof]"]');
            var fileExtension = ['ai', 'eps', 'jpg', 'jpeg', 'png', 'pdf', 'tiff', 'svg'];
            var input = $('.choose-file-btn'),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            var inputUrl = $('[name="properties[URL]"]');
            var inputUrlVal = inputUrl.val();
            var msg = "spanUploadFile";
            var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
            var driveRegexp = /^https:\/\/drive.google.com\/file\/d\/(.+?)\/view/;

            $('.proof_btn').removeClass('radio-field--error');
            $('.proof_btn > .radio-field__message').html('');
            $('.enter-url-here .text-field').removeClass('text-field--error');
            $('.enter-url-here .text-field__message').html('');

            if ($('.choose-file-btn').val() == '' && inputUrl.val() == '') {
                input.trigger('fileselect', [numFiles, label]);
                $("#" + msg).html("Please upload artwork file");
                x = false;
            }
            if ($('.choose-file-btn').val() != '') {
                if ($.inArray($("#" + input.attr('id')).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
                    genrateFileMsg(input.attr('id'), msg)
                    x = false;
                }
            }

            if (inputUrl && inputUrlVal !== '' && $('.choose-file-btn').val() === '') {
                if (!regexp.test(inputUrlVal)) {
                    $('.enter-url-here .text-field').addClass('text-field--error');
                    $('.enter-url-here .text-field__message').html('Please enter valid url.');

                    x = false;
                } else if (!driveRegexp.test(inputUrlVal) && ($.inArray(inputUrlVal.split('.').pop().toLowerCase(), fileExtension) == -1)) {
                    $('.enter-url-here .text-field').addClass('text-field--error');
                    $('.enter-url-here .text-field__message').html('Only files of type ai, eps, jpg, png, pdf, tiff, svg is allowed');

                    x = false;
                }
            }
            if (file_size.size / 1024 > 19000) {
                genrateSizeMsg(file_size, msg)
                x = false;
            }
            var proof = $('[name="properties[_Proof]"]');
            var proofValue = false;

            for (var i = 0; i < proof.length; i++) {
                if (proof[i].checked == true) {
                    proofValue = true;
                }
            }
            if (!proofValue) {
                $('.proof_btn').addClass('radio-field--error');
                $('.proof_btn > .radio-field__message').html('Please select <em>Free Digital Proof</em> to continue');
                return false;
            }

            if (x == false) {
                return false;
            }
        }
    });

    $('body').on('click', '.edit-my-order-btn-wrp.custom_btn', function(e) {
        e.preventDefault();
        $('.product-page-firstsection').hide();
        $('.product-page-firstsection.custom_section').show();
        //     var api = new Yotpo.API(yotpo);
        //     api.refreshWidgets();
    });

    $('body').on('change', '.job_file', function() {
        if ($(this).val() != '') {
            $('#spanUploadFile').html('<span class="uplod_success">Your resume uploaded.</span>')
        }
    });
    $('body').on('change', '.spon_flie', function() {
        if ($(this).val() != '') {
            $('#spanUploadFile').html('<span class="uplod_success">Your file uploaded.</span>')
        }
    });

    // add jquery.ba-dotimeout.min.js in asset
    var pInfScrLoading = false;
    var pInfScrDelay = 100;

    function pInfScrExecute() {
        var elm = document.getElementById('search-product');
        var loadingImage, loadingmore;
        pInfScrNode = $('.more').last();
        pInfScrmore = $('.show_more').last();
        pInfScrURL = $('.more a').last().attr("href");
        if (!pInfScrLoading && pInfScrNode.length > 0 && pInfScrNode.css('display') != 'none') {
            $.ajax({
                type: 'GET',
                url: pInfScrURL,
                beforeSend: function() {
                    pInfScrLoading = true;
                    loadingImage = pInfScrNode.clone().empty().append('<img src="//cdn.shopify.com/s/files/1/0562/2117/1909/t/26/assets/loading.gif?v=8889498518399045931" />');
                    loadingImage.insertAfter(pInfScrNode);
                    pInfScrNode.hide();
                    pInfScrmore.hide();
                },
                success: function(data) {
                    pInfScrNode.next().remove();
                    pInfScrmore.next().remove();
                    var filteredData = $(data).find(".collection-grid").html();
                    $('.collection-grid').append(filteredData);
                    loadingImage.remove();
                    pInfScrLoading = false;

                },
                dataType: "html"
            });

        }
    }

    $('body').on('click', '.show_more', function() {
        if (document.getElementById("search-product")) {
            $.doTimeout('scroll', pInfScrDelay, pInfScrExecute);
            var elm = document.getElementById('more-collection');
            pInfScrDelay = 100;
        }
    });

});