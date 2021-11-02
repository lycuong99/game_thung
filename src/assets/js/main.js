
$(document).ready(function () {

    $('#nav-menu-button').click(function (e) {
        // e.preventDefault();

        if ($('#main-navbar').css('display') == 'none') {
            $('#main-navbar').addClass('show');

        } else {
            $('#main-navbar').removeClass('show');
        }
    });

    $(window).on('resize', function () {

        if ($(window).width() > 1000) {
            $('#main-navbar').removeClass('show');
        }
    });

    $("#home_slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            '<a class="slide-arrow prev-arrow"><i class="bi bi-chevron-left"></i></a>',
        nextArrow:
            '<a class="slide-arrow next-arrow"><i class="bi bi-chevron-right"></i></a>',
    });

    $('.news-item, baiviet-item').click(
        function (e) {
            // window.open('baivietchitiet.html');
            window.location.href = 'baivietchitiet.html';
        }
    )

})