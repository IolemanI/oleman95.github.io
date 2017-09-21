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

function sendNotify(title, message) {


	var data =  {
		"notification":{
			"title":title,
			"body":message,
			"sound":"default"
		},
   	"to": "dgbRmits3QA:APA91bErD90m7f2i6S2_pnECBsrboSlPMw07xSeAzdZoObssENYo16sJqY2zWe9oHkXRudJ-8u4CtidL2tHiQL4g1DlkcBHjC0wXeIak2_ZrJr_v8NvvQCrTFz9z9wJ4clFdVamyZsxL"
	};

	var request = new XMLHttpRequest();
	request.open("POST", "https://fcm.googleapis.com/fcm/send", true);
	request.setRequestHeader('Content-Type', 'application/json');
	request.setRequestHeader('Authorization', 'key=AAAA-lA2ZSg:APA91bHd-t8AHbSGBMyYceXlE9Khpl5vPaA_aaxDAr-hfZAJ-sMqJxmoYQBLCMj8OiRmw5hHhMCre_xkF6icrsGNok7F51etpCjPkSqw9JJEPYbpZxb22Dms2LnXBfu3fDMplIKryaXg');
	request.send(JSON.stringify(data));


	// request.onreadystatechange = function() {//Call a function when the state changes.
	// 	if(request.readyState == 4 && request.status == 200)
	// 		console.log(request.responseText);
	// }
}

sendNotify("MyWEB","New visitor on your WEB");













//on send button click
function submitClick(){
	var name = document.getElementById('nameInp').value;
	var email = document.getElementById('emailInp').value;
	var message = document.getElementById('msgInp').value;

	if (checkValues(name, message)) {
		return;
	}

	sendNotify(name+" - "+email, message);
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

/*Client id. Save to database the ID of client browser.*/
var clientID;
var clientCount;
var clientStringId;
var date = Date.parse(new Date());
var random = parseInt(Math.random() * 1000);

if(localStorage.getItem('clientID')==null) {
	// console.log('clientID == null');
	clientID = random+'d'+date; //clientID is random number and current time in Unix
	localStorage.setItem('clientID', clientID);
	clientCount = 1;
	writeClientID(clientID, clientCount);
}else {
	clientID = localStorage.getItem('clientID');
	clientStringId = 'clientID_' + clientID;
	// console.log(clientStringId);
	checkClientCount();
}

function checkClientCount() {
  var clientRef = firebase.database().ref('visitors').child(clientStringId).child('clientCount');
	clientRef.once('value').then(function(snapshot) {
    var count = (snapshot.val());
		count++;
		writeClientID(clientID, count);
  });
}

function writeClientID(clientID, clientCount) {
	clientStringId = 'clientID_' + clientID;
	// console.log(clientCount);
  firebase.database().ref('visitors').child(clientStringId).set({
    clientID: clientID,
		clientCount: clientCount,
		time: date
  });
}

function checkValues(name, message){
	if (name == 'command open' && message == 'test') {
		window.location = 'hidden/test.html';
		return true;
	}else {
		return false;
	}
}
