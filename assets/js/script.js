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
});
	

   let database = firebase.database()
   dataTest = " coicou ceci est un est "

document.getElementById('download-button').addEventListener('click',function(myData){

	firebase.database().ref('data/' + myData).set({
	    myData : dataTest
	  });

});
  


