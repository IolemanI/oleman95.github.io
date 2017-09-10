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

//row in the top and side bar
var hideCount = false;
function openMenuBtn(){
    hideCount = false;
    document.getElementById('side_bar').style.width = '300px';    
}
function hideMenuBtn(){
    hideCount = true;
    document.getElementById('side_bar').style.width = 0;
}

window.onresize = function(){

    if(window.innerWidth < 1500){
        hideMenuBtn();
    }else openMenuBtn();
}

function facebook(){
    window.location = 'https://www.facebook.com/lmanacinskij';
}
function instagram(){
    window.location = 'https://www.instagram.com/lmanachinskiy';
}
function github(){
    window.location = 'https://github.com/OleMan95';
}
function linkedin(){
    window.location = 'https://www.linkedin.com/in/oleksii-manachynskyi-078b17137/';
}

//touch events
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var downX = null;
var downY = null;

function handleTouchStart(evt){
    downX = evt.touches[0].clientX;
    downY = evt.touches[0].clientY;
}
function handleTouchMove(evt){
    if(!downX||!downY){
       return;
       }
    var upX = evt.touches[0].clientX;
    var upY = evt.touches[0].clientY;
    
    var diffX = downX - upX;
    var diffY = downY - upY;
    
    if(diffX < 0 && diffX < -130){ //swipe left        
        openMenuBtn();
       }
    if(diffX > 0 && diffX > 130) hideMenuBtn();
}