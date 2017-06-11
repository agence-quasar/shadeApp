$(document).ready(function() {
    $('.scrollTo').on('click', function() { // Au clic sur un élément
        let page = $(this).attr('href'); // Page cible
        let speed = 800; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });



    // Initialize Firebase


    //--------------------------------------
    //--------------------------------------
    //--------------- Ab testing  ---------
    //--------------------------------------
    //--------------------------------------

      // math random 50% de load la table A ou B de la db

       //let table = A ou B 
       // afficher layout A ou B en fonction
    

    //--------------------------------------
    //--------------------------------------
    //--------------- partie tracking scroll  ---------
    //--------------------------------------
    //--------------------------------------

    //--------------------------------------
    //--------------------------------------
    //--------------- partie form  ---------
    //--------------------------------------
    //--------------------------------------









// fin document ready
});
  


