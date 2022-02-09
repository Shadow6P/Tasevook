//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyBAuI2kJS8SjHh0hQFvVl-G_2LHe3eD-08",
      authDomain: "tasevook.firebaseapp.com",
      databaseURL: "https://tasevook-default-rtdb.firebaseio.com",
      projectId: "tasevook",
      storageBucket: "tasevook.appspot.com",
      messagingSenderId: "663969763765",
      appId: "1:663969763765:web:d58781702a1df1e9a5c9fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Hey What's up Bro How are you " + user_name;

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicio del código

                  //Final del código
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "sala (1).html";
}
function logout() {
      window.location.replace ("index (1).html")
}