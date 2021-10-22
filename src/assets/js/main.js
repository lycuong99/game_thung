
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
})