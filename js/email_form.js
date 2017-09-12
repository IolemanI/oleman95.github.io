// Initialize Firebase
var config = {
	apiKey: "AIzaSyCqeEiVOoFE7Genmvw9iSU--XR9VidXa1s",
	authDomain: "androidtasks-b72a9.firebaseapp.com",
	databaseURL: "https://androidtasks-b72a9.firebaseio.com",
	projectId: "androidtasks-b72a9",
	storageBucket: "androidtasks-b72a9.appspot.com",
	messagingSenderId: "1075087566120"
};
firebase.initializeApp(config);

//on send button click
function submitClick(){
  var name = document.getElementById('nameInp').value;
  var email = document.getElementById('emailInp').value;
  var message = document.getElementById('msgInp').value;

  writeUserData(name, email, message);

	//display alert 'Message has been sent'
	document.getElementById('formAlert').style.display = 'block';
	document.getElementById('email_form').style.height = '320px';
	setTimeout(function(){
		document.getElementById('formAlert').style.display = 'none';
		document.getElementById('email_form').style.height = '265px';
	}, 3000);

  //clear fields
  document.getElementById('form').reset();
}

//write data into firebase database
function writeUserData(name, email, message) {
  firebase.database().ref('messages').child('user_' + name).set({
    name: name,
    email: email,
    message: message
  });
}
