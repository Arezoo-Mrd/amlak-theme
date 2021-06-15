$(document).ready(function() {
    $('.searchicon').click(function() {
        $(this).toggleClass('changebox');
        $('.searchicon i').toggleClass('changeicon');
        $('.search1').focus().toggleClass('active-width').val('');
    });
    // down to up scroll
    $("#back-top").hide();

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);

            return false;
        });
    });
    // dropdown Menu
    $('.dropdown-menu > li > .dropdown-menu').parent().addClass(' dropdown-submenu dropdown').find('> .dropdown-item').attr('href', 'javascript:;').addClass('dropdown-toggle');
    $('.dropdown-submenu > a').on("click", function(e) {
        var dropdown = $(this).parent().find('.show');
        $(this).next('.dropdown-menu').toggleClass('show');
        e.stopPropagation();
    });
    $('.dropdown').on("hidden.bs.dropdown", function() {
        $('.dropdown-menu.show').removeClass('show');
    });
    // apartment-owl-carousel
    let owlOption = {
        margin: 15,
        loop: true,
        items: 3,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                autoWidth: true,
            },
            768: {
                items: 3,
                autoWidth: true,
            },
            992: {
                items: 4,
                autoWidth: true
            },
            1199: {
                items: 3,
            }

        }

    }
    $(".apartment-carousel").owlCarousel(owlOption);
    // add Animation of scroll to my template
    AOS.init();

    // offices-category-owl-carousel
    let customOption = {
        margin: 25,
        width: 200,
        rtl: true,
        loop: true,
        nav: true,
        navText: ['<i class="icon-next"></i>', '<i class="icon-left-arrow"></i>'],
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: false,
                autoWidth: true,
            },
            768: {
                items: 3,
                autoWidth: true,
            },
            992: {
                items: 4,
                autoWidth: true
            },
            1199: {
                items: 4,
            }

        }

    }
    $(".offices-category-carousel").owlCarousel(customOption);
    // textillate effect

    $(".content-title").textillate({ in: {
            effect: 'fadeInDown',
        },
        type: 'word'
    });
    $(".sidebar-title h6").textillate({ in: {
            effect: 'fadeInLeft',
        },
        type: 'word'

    });
    $(".cat-title h2").textillate({ in: {
            effect: 'slideInDown',
        },
        type: 'word'

    });
});