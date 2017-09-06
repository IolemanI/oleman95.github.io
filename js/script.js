//side bar buttons
function aboutMeBtn(){
    var aboutMeFld = document.getElementById('about_me');
    
    colorChange(aboutMeFld);
    
    hideMenuBtn();
}
function mySkillsBtn(){
    var mySkillsFld = document.getElementById('my_skills');
    
    colorChange(mySkillsFld);
    hideMenuBtn();
}
function eduBtn(){
    var eduFld = document.getElementById('edu');
    colorChange(eduFld);
    hideMenuBtn();
}
function expBtn(){
    var expFld = document.getElementById('exp');
    colorChange(expFld);
    hideMenuBtn();
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

//burger menu and side bar
var hideCount = false;
function openMenuBtn(){
    var sideBar = document.getElementById('side_bar');
    hideCount = false;
    sideBar.style.display = 'block';
}
function hideMenuBtn(){
    var sideBar = document.getElementById('side_bar');
    
    sideBar.style.display = 'none';
    hideCount = true;
}

window.onresize = function(){

    if(window.innerWidth < 1500){
        hideMenuBtn();
    }else openMenuBtn();
}
