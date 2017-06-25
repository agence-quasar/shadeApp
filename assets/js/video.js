$(function () {
    $(document).ready(function () {
        $("#vide").click(function () {
            $("#overlay-video").css('display', 'block');
            $("#iframeVideo").attr("src", "https://www.youtube.com/embed/FORie0Fl_E0?autoplay=1&fs=0&showinfo=0&color=white");
            $("body").css("overflow", "hidden");
            $("#overlay-close").click(function () {
                $('#overlay-video').fadeOut();
                $("#iframeVideo").attr("src", "");
                $("body").css("overflow", "visible");
            });
        });
    });
});
