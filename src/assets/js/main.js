
$(document).ready(function () {
    // $('.dropdown').hover(function () {
    //     // over 
    //     $(this).find('.dropdown-menu').first().show(2000, function () {

    //     });
    // }, function (e) {
    //     // out

    //     if (e.relatedTarget != null)
    //         $(this).find('.dropdown-menu').first().hide();
    // }


    // );

    $('#nav-menu-button').click(function (e) {
        // e.preventDefault();

        if ($('#main-navbar').css('display') == 'none') {
            $('#main-navbar').addClass('show');

        } else {
            $('#main-navbar').removeClass('show');
        }
    });

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

    $(window).on('resize', function () {

        if ($(window).width() > 1000) {
            $('#main-navbar').removeClass('show');
        }
    });
})