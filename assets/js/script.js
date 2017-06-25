$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyDMwAXyNk-mfnTbAbtxff6Vf8wwAjgE2E4",
        authDomain: "shade-cce4d.firebaseapp.com",
        databaseURL: "https://shade-cce4d.firebaseio.com",
        projectId: "shade-cce4d",
        storageBucket: "shade-cce4d.appspot.com",
        messagingSenderId: "732348108395"
    };
    firebase.initializeApp(config);
    const database = firebase.database();
    const provider = new firebase.auth.GoogleAuthProvider();


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
    $('#download-button').on('click', function(){
            $('html, body').animate({ scrollTop: 800 }, 800);
    });



    $(document).ready(function() {
        $('.js-scrollTo').on('click', function() { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 750; // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });
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
                $.ajax({
                    url : "./test.php", // the resource where youre request will go throw
                    type : "PUT", // HTTP verb
                    data : {
                        email: user.email,
                        name: user.displayName
                    },
                    success: function(result){
                        console.log("reussi");
                    }
                });
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

        });

    let checkUser = function () {

        firebase.database().ref('/users/' + user.uid).once('value').then(function(snapshot) {
            let  data = snapshot.val();
            if (data == null){
                createUser(user.uid, user.displayName, user.email);

            }

        });

    };

    let createUser = function(userId, name, email){
        firebase.database().ref('users/' + userId).set({
            username: name,
            mail : user.email

        });
        
        let ga = document.createElement('p');
        let gb = document.getElementById('googleConnect');
        let gc = document.getElementById('page2');
        gc.appendChild(ga);
        ga.innerHTML = "Merci nous avons bien recu votre Email :)";
        ga.style.textAlign ="center";
        ga.style.display="block";
        ga.style.fontWeight ="bold";
        gb.style.display = "none";

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
  


