$(document).ready(function() {

     // Initialize Firebase
    const config = {
        apiKey: "AIzaSyBcTjyNjJodcPEeQQL8B5QYIcBu4zoTpF0",
        authDomain: "shade-f36ef.firebaseapp.com",
        databaseURL: "https://shade-f36ef.firebaseio.com",
        projectId: "shade-f36ef",
        storageBucket: "shade-f36ef.appspot.com",
        messagingSenderId: "531659265621"
      };
    firebase.initializeApp(config);
    const database = firebase.database()
    const provider = new firebase.auth.GoogleAuthProvider();


    $('.scrollTo').on('click', function() { // Au clic sur un élément
        let page = $(this).attr('href'); // Page cible
        let speed = 800; // Durée de l'animation (en ms)
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
    $('#myBtn').on('click', function(){
            $('html, body').animate({ scrollTop: 0 }, 800);
    });

  
  


    //--------------------------------------
    //--------------------------------------
    //--------------- google connect  ---------
    //--------------------------------------
    //--------------------------------------

    document.getElementById('googleConnect').addEventListener("click", function(){
            firebase.auth().signInWithPopup(provider).then(function(result) {

                token = result.credential.accessToken;
                user = result.user;
                checkUser(user.uid);
                displayForm();
                //createUser(user.uid, user.displayName);


            }).catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // The email of the user's account used.
                let email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                let credential = error.credential;
                console.log(error);
                // ...
            });
        })
    let checkUser = function () {

        firebase.database().ref('/users/' + user.uid).once('value').then(function(snapshot) {
            let  data = snapshot.val();
            console.log(data);
            if (data == null){
                createUser(user.uid, user.displayName);

            }
            if(data.click != null){
                clicId =  data.click.length
            }


        });

    };

    let createUser = function(userId, name){
        firebase.database().ref('users/' + userId).set({
            username: name,

        });
    };
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
  


