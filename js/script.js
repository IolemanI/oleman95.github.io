function btnSend(){
//    document.getElementById("");
    var name = document.getElementById("nameInp").value;
    var email = document.getElementById("emailInp").value;
    var message = document.getElementById("msgInp").value;
    var fail = false;
    
    if (email.split('@').length - 1 == 0){
      fail = "Email is not correct!";
    } else if (name == "" || name == " ") {
      fail = "Enter your name!";
    } else if (message == "" || message == " ") {
      fail = "Enter message!";
    }
    
    if(fail) alert(fail);
    else alert("Thank you! Form was sent."); 
    
    alert("Name: " + name + "; " +
         "Email: " + email + "; " +
         "Message: " + message + ".");
    
    console.log("Sending email...");
}

downloadBtn.onmouseover = function() {
        var start = Date.now(); // сохранить время начала
        var timer = setInterval(function() {
// вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;
        console.log(timePassed);
        download.style.top = timePassed / 10 + 'px';

        if (timePassed > 30) clearInterval(timer);

      }, 10);
    }
downloadBtn.onmouseout = function() {
    download.style.top = -45 + 'px';
    }