$(document).ready(function() {
    $('.scrollTo').on('click', function() { // Au clic sur un élément
        let page = $(this).attr('href'); // Page cible
        let speed = 800; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });



    // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBHhngkXqUoSwm0ilnCbY0gXUFlmI9vOy4",
    authDomain: "shadeapp-c4b0e.firebaseapp.com",
    databaseURL: "https://shadeapp-c4b0e.firebaseio.com",
    projectId: "shadeapp-c4b0e",
    storageBucket: "shadeapp-c4b0e.appspot.com",
    messagingSenderId: "56916114464"
  };
  firebase.initializeApp(config);
  const database = firebase.database()
  const provider = new firebase.auth.GoogleAuthProvider();

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
    //--------------- partie tracking clic  ---------
    //--------------------------------------
    //--------------------------------------




// si la var = A on push dans la tb A

    // recuperation de la date dans la db

      // si la date est la meme on recupere le nombre de clic à cette date 

      // sinon on reinitialise la variable a 0
       let ctaClic = 0;
       console.log(ctaClic, 'nombre de clic de base');


      document.getElementById('download-button').addEventListener('click',function(){
        // on incremente la nombre de clic sur le cta 
        ctaClic++;
        // si la date est la meme on push le nombre de click
      	firebase.database().ref('data/' ).set({
      	    ctaClic

      	  }).then(function () {

            console.log(ctaClic, 'nombre de clic apres')
        });
        // sinon on push le nombre de clic + la nouvelle date associé
        

      });

// si la var = B on push dans la tb B       
















// fin document ready
});
  


