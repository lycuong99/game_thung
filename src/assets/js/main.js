
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

    $('.news-item, baiviet-item').click(
        function (e) {
            // window.open('baivietchitiet.html');
            window.location.href = 'baivietchitiet.html';
        }
    )

    // MODAL
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("btnModal");
    var btnClose = document.getElementById("closeModal");
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    btnClose.onclick = function () {
        modal.style.display = "none";
    }

})