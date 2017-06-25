$(document).ready(function () {

    $(".menu_open a").click(function () {
        $(".overlay").fadeIn(250);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(250);
        $(".menu_open a").toggleClass('menu_open').toggleClass('btn-close');
    });



});