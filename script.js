const myAudio = document.getElementById("myAudio");
const playButton = document.getElementById("play_button");
const pauseButton = document.getElementById("pause_button");
const stopButton = document.getElementById("stop_button");

play = myAudio.play.bind(myAudio);
pause = myAudio.pause.bind(myAudio);
stop = function(){
  pause();
  myAudio.currentTime = 0;
}
playButton.addEventListener('click', play, false);
pauseButton.addEventListener('click', pause, false);
stopButton.addEventListener('click', stop, false);

// var clicked = false;
// myAudio.addEventListener('click', manipulate_audio, false);
//
// function manipulate_audio(){
//   console.log("Inside function");
//   if (clicked == false){
//     myAudio.addEventListener('click', myAudio.play, false);
//     clicked = true;
//   }else{
//     myAudio.addEventListener('click', myAudio.pause, false);
//     clicked = false;
//   }
//
// }

// Code for the crow to follow mouse cursor
var crow = document.getElementById("crow");
document.addEventListener("mousemove", getMouse);


crow.style.position = "absolute"; //css
var crowpos = {x:0, y:0};

setInterval(followMouse, 50); //executes function followMouse every 50 msec

var mouse = {x:0, y:0}; //mouse.x, mouse.y

var dir = "right";
function getMouse(el){
  mouse.x = el.pageX;
  mouse.y = el.pageY;
    //Checking directional change
    if(mouse.x > crowpos.x){
      dir = "left";
      // dir = "right"; this is correct, but not for that specific image..
    } else {
      dir = "right";
      // dir = "left";
    }
}

function followMouse(){
  //1. find distance X , distance Y
  var distX = mouse.x - crowpos.x;
  var distY = mouse.y - crowpos.y;
  //Easing motion
   //Progressive reduction of distance
  crowpos.x += distX/5;
  crowpos.y += distY/2;

  crow.style.left = crowpos.x + "px";
  crow.style.top = crowpos.y + "px";

    //Apply css class
    if (dir == "right"){
      crow.setAttribute("class", "right");
    } else {
      crow.setAttribute("class", "left");
    }

}
