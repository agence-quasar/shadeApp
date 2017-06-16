$(document).ready(function() {
    $('.scrollTo').on('click', function() { // Au clic sur un élément
        let page = $(this).attr('href'); // Page cible
        let speed = 800; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });


    window.onscroll = function () {scrollFunction ()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }



    //--------------------------------------
    //--------------------------------------
    //--------------- Ab testing  ---------
    //--------------------------------------
    //--------------------------------------

    //--------------------------------------
    //--------------------------------------
    //--------------- partie tracking scroll  
    //--------------------------------------
    //--------------------------------------

    //--------------------------------------
    //--------------------------------------
    //--------------- partie form  ---------
    //--------------------------------------
    //--------------------------------------









// fin document ready
});
  


