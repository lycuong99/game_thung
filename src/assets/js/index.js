$(document).ready(function () {

    $('.slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,

        fade: true,
        prevArrow: $('.preBtn'),
        nextArrow: $('.nextBtn'),
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    fade: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: true,
                    centerMode: true,
                    centerPadding: 210,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    fade: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: true,
                    centerMode: true,
                    centerPadding: 140,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    fade: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: true,
                    centerMode: true,
                    centerPadding: 80,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    fade: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: true,
                    centerMode: true,
                    centerPadding: 48,
                }
            },
            // {
            //     breakpoint: 800,
            //     settings: "unslick"
            // }

        ]
    });

    $('.slider-nav button[data-slide]').click(function (e) {
        // e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav button').removeClass('active');
        $(this).addClass('active');
        $('.slider-content').slick('slickGoTo', slideno - 1);
    });

    $('#game-type-nav button[data-slide]').click(function (e) {
        $('#game-type-nav button').removeClass('active');
        $(this).addClass('active');
    });

    $('.tabs button').click(function (e) {
        var tabIndex = $(this).data('tab');

        $('.tabs button').removeClass('active');
        $(this).addClass('active');

        $(`.tabpanel-item`).removeClass('active');
        $(`.tabpanel-item[data-tab=${tabIndex}]`).addClass('active');
    });

    $('.game-type-item').click(function (e) {
        $('.game-type-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.game-item').click(function (e) {
        var src = $(this).data('img-src');
        $('.game-item').removeClass('active');
        $(this).addClass('active');

        $('#tentuoilanggame .window-content .right img').attr('src', src);
    });

    $('.rank-item').click(function (e) {
        $('.rank-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.news-item').click(function (e) {
        $('.news-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.news-item, .rank-item, .game-item, .game-type-item').mouseenter(function () {
        $(this).addClass('active');
    }).mouseleave(function () {
        $(this).removeClass('active');
    });

    


    // $('.slick-prev').html(`<img src="assets/images/left-arrow.svg" />`);
})