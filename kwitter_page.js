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
var room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Inicia código 
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thum bs-up'>Like: " + like + "</span></button><hr>";
                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //Termina código
            }
        });
    });
}


function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
getData();

function updateLike(msg) {
    boton = msg;
    likes = document.getElementById(boton).value;
    new_likes = Number(likes) + 1;
    firebase.database().ref(room_name).child(msg).update({
        like: new_likes
    });

}

function logout() {
    window.location.replace("kwitter_room (1).html")
}