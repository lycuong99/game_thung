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
        $('.tabs button').removeClass('active');
        $(this).addClass('active');
    });

    $('.game-type-item').click(function (e) {
        $('.game-type-item').removeClass('active');
        $(this).addClass('active');
    });



    // $('.slick-prev').html(`<img src="assets/images/left-arrow.svg" />`);
})