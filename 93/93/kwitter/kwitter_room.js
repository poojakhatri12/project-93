var firebaseConfig = 
{ apiKey: "AIzaSyADU60kEbf9ryit7UHBx1A_f_AZnXiYClQ", 
authDomain: "subway-restaurant-ivou.firebaseapp.com", 
databaseURL: "https://subway-restaurant-ivou-default-rtdb.firebaseio.com", 
projectId: "subway-restaurant-ivou", 
storageBucket: "subway-restaurant-ivou.appspot.com",
messagingSenderId: "658871911874", 
appId: "1:658871911874:web:15b6b3aad5bc87306c025b" }; 

// Initialize Firebase firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "welcome "+user_name+"!";

function add_room()
{
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname",room_name);
  
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
