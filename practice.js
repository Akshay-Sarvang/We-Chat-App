
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCIo6Gx6jFS49B8fEKa-zKc0xtG5LaGeOY",
    authDomain: "we-chat-app-42ab0.firebaseapp.com",
    databaseURL: "https://we-chat-app-42ab0-default-rtdb.firebaseio.com",
    projectId: "we-chat-app-42ab0",
    storageBucket: "we-chat-app-42ab0.appspot.com",
    messagingSenderId: "331183625356",
    appId: "1:331183625356:web:1e33b8d017465ab593d7a9",
    measurementId: "G-R4X3R0PCGZ"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}