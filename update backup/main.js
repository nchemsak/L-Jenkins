//Leroy Sanchez JS
"use strict";

// make background image full height on window resize
$(window).resize(function() {
    $('.header').css("height", "100vh");
})

// add navbar background and line with a class on scroll
$(document).on("scroll", function() {
    if ($(document).scrollTop() > 600) {
        $(".navbar").removeClass("large-dark-navbar").addClass("small-dark-navbar");
    } else {
        $(".navbar").removeClass("small-dark-navbar").addClass("large-dark-navbar");
    }
});

// parallax window - http://pixelcog.github.io/parallax.js/
$(document).ready(function() {
    $('.header').css("height", "100vh");
    if (window.innerWidth > 767) {
        $('.header').parallax({
            imageSrc: 'images/opt/PREACHER_BACKGROUND.jpg'
        });
    } else if (window.innerWidth <= 767) {
        $('.header').css({
            'background-size': 'cover',
            'background-position': '50% 50%',
            'background-image': 'url("images/opt/PREACHER_BACKGROUND.jpg")'
        });
    }

    //SECOND SECTION PARALLAX
    $('#page-content').parallax({
        imageSrc: 'images/opt/background2.jpg'
    });
});

// Hamburger menu
$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".hamburger").toggleClass("is-active");
    });

    $(".menu__link").click(function() {
        $(".hamburger").toggleClass("is-active");
    });
});

$(document).ready(function() {
    $('.menu__brand ul li a').click(function() {
        console.log('hi');
        // $('.menu--active').click();
        $(".menu--active").css("display", "initial");
    });
});

// Back to top Button
$(document).ready(function() {
    var amountScrolled = 10;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('button.back-to-top').addClass('show');
        } else {
            $('button.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Waves effect to buttons - http://fian.my.id/Waves/
    Waves.attach('button.back-to-top', 'waves-float');
    Waves.init();
});

// Menu effects on mobile
$(document).ready(function() {
    var Menu = (function() {
        var burger = document.querySelector('.burger');
        var menuitem1 = document.querySelector('.item1');
        var menuitem2 = document.querySelector('.item2');
        var menuitem3 = document.querySelector('.item3');
        var menuitem4 = document.querySelector('.item4');
        var menu = document.querySelector('.menu');
        // var menuList = document.querySelector('.menu__list');
        var brand = document.querySelector('.menu__brand');
        var menuItems = document.querySelectorAll('.menu__item');

        var menuLogo = document.querySelector('.dcd-nav-logo');

        var active = false;

        var toggleMenu = function() {
            if (!active) {
                menu.classList.add('menu--active');
                brand.classList.add('menu__brand--active');
                burger.classList.add('burger--close');
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.add('menu__item--active');
                }
                active = true;
            } else {
                menu.classList.remove('menu--active');
                brand.classList.remove('menu__brand--active');
                burger.classList.remove('burger--close');
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.remove('menu__item--active');
                }
                active = false;
            }
        };

        var bindActions = function() {
            burger.addEventListener('click', toggleMenu, false);
            menuitem1.addEventListener('click', toggleMenu, false);
            menuitem2.addEventListener('click', toggleMenu, false);
            menuitem3.addEventListener('click', toggleMenu, false);
            menuitem4.addEventListener('click', toggleMenu, false);
        };

        var init = function() {
            bindActions();
        };

        return {
            init: init
        };
    }());
    Menu.init();
});


// page scroll
// scroll to id from 'page-scroll' class on 'a' tag
$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            // scrollTop: ($($anchor.attr('href')).offset().top - 75)
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000);
        event.preventDefault();
    });
});

// popovers for social icons
$(function() {
    $('[data-toggle="popover"]').popover()
})
