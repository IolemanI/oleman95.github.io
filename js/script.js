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

//telescopic block
function mouseEnter(){
    setTimeout(incrHeight, 200);
    function incrHeight(){
        console.log('mouse over');
        var i = 0,
            delay = 3,
            startTimer = function () {
                var height = 0;
                var teleBlock = document.getElementById('tele-block');

                if(i<60){
                    setTimeout(startTimer,delay);
                    height += i;
                    teleBlock.style.height = height + 'px';
                    showBtns(height);
                }
                i++;
            }
        var timer = setTimeout(startTimer,delay);
    }
}
function mouseLeave(){
    console.log('mouse leave');
    var i = 0,
        delay = 5,
        startTimer = function () {
            var height = 60;
            var teleBlock = document.getElementById('tele-block');
            
            if(i<60){
                setTimeout(startTimer,delay);
                height -= i;
                teleBlock.style.height = height + 'px';
                showBtns(height);

            }
            i++;
        }
    var timer = setTimeout(startTimer,delay);
}
function showBtns(height){
    var download = document.getElementById('button1');
    var sendEmail = document.getElementById('button2');
    
    if(height == 59){
        button1.style.display = 'inline';
        button2.style.display = 'inline';
    }
    else {
        button1.style.display = 'none';
        button2.style.display = 'none';
    }
}

function showEmailForm(){
    var form = document.getElementById('divForm');
    form.style.display = 'block';
 
}
function hideEmailForm(){
    var form = document.getElementById('divForm');
    form.style.display = 'none';
}

//side bar buttons
function aboutMeBtn(){
    var aboutMeFld = document.getElementById('about_me');
    
    colorChange(aboutMeFld);
    
}
function mySkillsBtn(){
    var mySkillsFld = document.getElementById('my_skills');
    
    colorChange(mySkillsFld);
}
function eduBtn(){
    var eduFld = document.getElementById('edu');
    colorChange(eduFld);

}
function expBtn(){
    var expFld = document.getElementById('exp');
    colorChange(expFld);
}
function colorChange(elem){
    elem.style.backgroundColor = 'gainsboro';
    
    setTimeout(flip,100);
    function flip(){
        console.log('1');
        elem.style.backgroundColor = 'white';
       
        setTimeout(flip1,100);
        function flip1(){
            console.log('2');
            elem.style.backgroundColor = 'gainsboro';
            
            setTimeout(flip2,100);
            function flip2(){
                console.log('3');       elem.style.backgroundColor = 'white';
            }
        }
    }
    
    

}