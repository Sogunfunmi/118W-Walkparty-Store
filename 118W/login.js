const firebaseConfig = {
  apiKey: "AIzaSyAAurZWnr1XF5lgao0XZob36c326YUzpyc",
  authDomain: "walkparty-8545f.firebaseapp.com",
  databaseURL: "https://login-877a3-default-rtdb.firebaseio.com/",
  projectId: "walkparty-8545f",
  storageBucket: "walkparty-8545f.appspot.com",
  messagingSenderId: "767869901520",
  appId: "1:767869901520:web:79bf1939850dc0782c1cd5"
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

