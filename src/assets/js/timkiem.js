
$(document).ready(function () {

    $('#searchBtn').click(function (e) {
        // e.preventDefault();
        let keySearch = $('input[name=keySearch]').val();

        console.log(keySearch);
        let countResult = 0;



        if (keySearch.toLowerCase() == 'Bắn súng'.toLowerCase()) {
            countResult = 5;
            $('#result-init').addClass('hidden');
            $('#result-found').removeClass('hidden');
            $('#result-not-found').addClass('hidden');
        } else {
            $('#result-init').addClass('hidden');
            $('#result-found').addClass('hidden');
            $('#result-not-found').removeClass('hidden');
        }
        let summaryText = `${countResult} kết quả - “${keySearch}”:`;
        $('.result-summary').text(summaryText);

    });

    // $(window).resize(function(){
    //     if ($(window).width() <= 600){  
    //         $('.input-search').removeAttr('placeholder');
    //     }   
    // });



})