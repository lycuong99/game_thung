$(document).ready(function () {

    $('.baiviet-item').mouseenter(function () {
        $(this).addClass('active');
    }).mouseleave(function () {
        $(this).removeClass('active');
    });



    $('.baiviet-item').click(function (e) {
       window.location.href = 'baivietchitiet.html';
    });
    
})