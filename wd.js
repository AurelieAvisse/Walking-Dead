const config = {
    apiKey: "AIzaSyA9NDAseDMeAKPJJe29g4oB-m3QRxQlXE0",
    authDomain: "walking-dead-68de4.firebaseapp.com",
    databaseURL: "https://walking-dead-68de4.firebaseio.com",
    projectId: "walking-dead-68de4",
    storageBucket: "walking-dead-68de4.appspot.com",
    messagingSenderId: "636464824953"
};
firebase.initializeApp(config);

var db = firebase.database();
var personnages = db.ref('personnages');

personnages.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        document.getElementById('name').innerHTML += '<li>' + childData.name + '</li>'
    });
});

function writeUserData(Name) {
    db.ref('personnages/' + name).push({
        name: Name
    });
}

function add() {
    let name = document.getElementById('new').value;
    writeUserData(name);
    window.location.reload();
}