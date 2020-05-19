
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      makeAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown",function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var wSound = new Audio('sounds/tom-1.mp3');
      wSound.play();
      break;

    case "a":
      var aSound = new Audio('sounds/tom-2.mp3');
      aSound.play();
      break;

    case "s":
      var sSound = new Audio('sounds/tom-3.mp3');
      sSound.play();
      break;

    case "d":
      var dSound = new Audio('sounds/tom-4.mp3');
      dSound.play();
      break;

    case "j":
      var jSound = new Audio('sounds/crash.mp3');
      jSound.play();
      break;

    case "k":
      var kSound = new Audio('sounds/kick-bass.mp3');
      kSound.play();
      break;

    case "l":
      var lSound = new Audio('sounds/snare.mp3');
      lSound.play();
      break;
  }
}

function makeAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
