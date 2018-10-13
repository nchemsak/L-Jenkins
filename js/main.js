//Leroy Jenkins JS
"use strict";

// make background image full height on window resize
$(window).resize(function() {
    $('.header').css("height", "100vh");
})

// Set classes for navbar for mobile
// $(document).ready(function() {
//     if (window.innerWidth <= 767) {
//         $(".navbar-toggler").removeClass("large-navbar-toggler").addClass("small-navbar-toggler");
//         $(".dcd-nav-logo").removeClass("large-dcd-nav-logo").addClass("small-dcd-nav-logo");
//         $(".navbar").removeClass("large-dark-navbar").addClass("small-dark-navbar");
//     }
// });

// change size of navbar on scroll on Desktop
// $(document).on("scroll", function() {
//     if (window.innerWidth > 767) { 
//         if ($(document).scrollTop() > 180) {
//             $(".navbar-toggler").removeClass("large-navbar-toggler").addClass("small-navbar-toggler");
//             $(".dcd-nav-logo").removeClass("large-dcd-nav-logo").addClass("small-dcd-nav-logo");
//             $(".navbar").removeClass("large-dark-navbar").addClass("small-dark-navbar");
//         } else {
//             $(".navbar-toggler").removeClass("small-navbar-toggler").addClass("large-navbar-toggler");
//             $(".dcd-nav-logo").removeClass("small-dcd-nav-logo").addClass("large-dcd-nav-logo");
//             $(".navbar").removeClass("small-dark-navbar").addClass("large-dark-navbar");
//         }
//     } else {}
// });

// parallax window - http://pixelcog.github.io/parallax.js/
$(document).ready(function() {
    // $('.header').height($(window).height());
    $('.header').css("height", "100vh");
    if (window.innerWidth > 767) {
        $('.header').parallax({
            imageSrc: 'images/PREACHER_BACKGROUND.jpg'
        });
    } else if (window.innerWidth <= 767) {
        $('.header').css({
            'background-size': 'cover',
            'background-position': '58% 50%',
            'background-image': 'url("images/PREACHER_BACKGROUND.jpg")'
        });

    }
    //SECOND SECTION PARALLAX
    // if (window.innerWidth > 767) {
    //     $('#med-cos-derm-section').parallax({
    //         imageSrc: '/wp-content/themes/dermcenterdallas/images/crossedarms2.png'
    //     });
    // } else if (window.innerWidth <= 767) { return }


});


// Hamburger menu
$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".hamburger").toggleClass("is-active");
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

    $('button.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Waves effect to buttons - http://fian.my.id/Waves/
    Waves.attach('button.back-to-top', 'waves-float');
    Waves.init();
});



// Full Screen Navbar
// $(document).ready(function() {
//     var Menu = (function() {
//         var burger = document.querySelector('.burger');
//         var menu = document.querySelector('.menu');
//         var menuList = document.querySelector('.menu__list');
//         var brand = document.querySelector('.menu__brand');
//         var menuItems = document.querySelectorAll('.menu__item');

//         var menuLogo = document.querySelector('.dcd-nav-logo');

//         var active = false;

//         var toggleMenu = function() {
//             if (!active) {
//                 menu.classList.add('menu--active');
//                 menuList.classList.add('menu__list--active');
//                 brand.classList.add('menu__brand--active');
//                 burger.classList.add('burger--close');
//                 for (var i = 0, ii = menuItems.length; i < ii; i++) {
//                     menuItems[i].classList.add('menu__item--active');
//                 }
//                 active = true;
//             } else {
//                 menu.classList.remove('menu--active');
//                 menuList.classList.remove('menu__list--active');
//                 brand.classList.remove('menu__brand--active');
//                 burger.classList.remove('burger--close');
//                 for (var i = 0, ii = menuItems.length; i < ii; i++) {
//                     menuItems[i].classList.remove('menu__item--active');
//                 }
//                 active = false;
//             }
//         };

//         var bindActions = function() {
//             burger.addEventListener('click', toggleMenu, false);
//         };

//         var init = function() {
//             bindActions();
//         };

//         return {
//             init: init
//         };

//     }());

//     Menu.init();



// });


// page scroll
// scroll to id from 'page-scroll' class on 'a' tag
$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 75)
        }, 1000);
        event.preventDefault();
    });
});
