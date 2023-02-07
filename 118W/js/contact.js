const firebaseConfig = {
    apiKey: "AIzaSyBSaQBymCTeynVEcNQP5B67wRPIFyrCIBQ",
    authDomain: "contact-us-dade1.firebaseapp.com",
    databaseURL: "https://contact-us-dade1-default-rtdb.firebaseio.com/",
    projectId: "contact-us-dade1",
    storageBucket: "contact-us-dade1.appspot.com",
    messagingSenderId: "781941815056",
    appId: "1:781941815056:web:0db8f098efb1a59a239795"
};
const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 
 
const detailsRef = dbRef.child('contactus'); 
detailsRef.on("contactus", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
});

function send(){ 
    var email = document.getElementById("email").value; 
    var name = document.getElementById("name").value; 
    var number = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value; 
    
    detailsRef.push().set({ 
      email: email, 
      name: name,
      number: number, 
      subject: subject, 
      message: message,
    }); 
   
}
