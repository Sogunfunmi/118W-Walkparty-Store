const firebaseConfig = {
    apiKey: "AIzaSyDjFnOsTtkXUu9ZtjQwUwqXzIkqpvEwUtI",
    authDomain: "login-96a4c.firebaseapp.com",
    projectId: "login-96a4c",
    databaseURL: 'https://login-96a4c-default-rtdb.firebaseio.com/',
    storageBucket: "login-96a4c.appspot.com",
    messagingSenderId: "591563465918",
    appId: "1:591563465918:web:dc4539ecf79cd2bf812aef"
  };

const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var email = document.getElementById("email").value; 
  var username = document.getElementById("username").value; 
  var password = document.getElementById("password").value; 
  
  detailsRef.push().set({ 
    email: email, 
    username: username, 
    password: password, 
  }); 

} 