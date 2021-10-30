$(document).ready(function () {

    $('.baiviet-item').mouseenter(function () {
        $(this).addClass('active');
    }).mouseleave(function () {
        $(this).removeClass('active');
    });

    // $('.baiviet-item').click(function (e) {
    //     $('.baiviet-item').removeClass('active');
    //     $(this).addClass('active');
    // });
    // $('.slick-prev').html(`<img src="assets/images/left-arrow.svg" />`);
})