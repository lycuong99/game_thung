$(document).ready(function () {

    $('.baiviet-item').click(function (e) {
        $('.baiviet-item').removeClass('active');
        $(this).addClass('active');
    });
    // $('.slick-prev').html(`<img src="assets/images/left-arrow.svg" />`);
})