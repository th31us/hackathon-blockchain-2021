$(document).ready(function () {

    $('#main').scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body, #main_container, #main").animate({ scrollTop: 0 }, 600);
        return false;
    });

});