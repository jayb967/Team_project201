'use strict';
////// GLOBAL VARIABLES BOI /////////
var allPictures = [];
var boardLocation = [];
// var selectedImages = [];




// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//DOM variables
var userName = document.getElementById('user-name');

//Event Listeners for Main Page
userName.addEventListener('submit', handleEvents);
wantToPlay.addEventListener('click', handleEvents);
startGame.addEventListener('click', handleEvents);
displayScore.addEventListener('click', handleEvents);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//this code is to be used when we are waiting for the user to click on cards
//When a visitor clicks the button, the setTimeout() method is called, passing in the expression that
// we want to run after the time delay, and the value of the time delay itself - 5,000 milliseconds or 5 seconds.
//<input type="button" name="clickMe" value="Click me and wait!"
//onclick="setTimeout('alert(\'Surprise!\')', 5000)"/>

localStorage.userName = event.target.userName.value;

////// DIS THE IMAGE OBJECT MON ///////
function Img(idNumber) {
  this.idNumber = idNumber;
  this.filepath = '/img' + this.idNumber + '.jpg';
  this.boardLocation = -1;
  allPictures.push(this);
}

// All of our pic names are just numbers so we don't have to write out all of the individual pic IDS doppppeeeeeee
function picIds() {
  for (var i = 0; i < 8; i++) {
    allPictures[i] = new Img[i];
  }
}
picIds();

// random function
function rand() {
  return Math.floor(Math.random() * 8);
}

// running the random function 8 times to choose what
function randomImages () {
  // assume the board is CLEAR
  if (boardLocation === []) {
    boardLocation.push(rand());
  } else {
    while (boardLocation.length < 8) {
      var temp = rand();
      // acount for duplicates within array, each location needs one duplicate
      // but only one duplicate.
      if (boardLocation.indexOf(temp) === boardLocation.lastIndexOf(temp)) {
        boardLocation.push(temp);
      }
    }
  }
}
randomImages();
// so this could prove to be problematic in terms of efficiency in timing
/*
the previous function will only work with the right number of images
if we add more images to the image bank, selected the random 8 images
we will be using first, then run those pre-selected 8 and run them
through the previous function.
*/

// so this could prove to be problematic in terms of efficiency in timing


function clickHandle(event) {
  event.preventDefault;
  //display the images for the game
  // CLEAR THE BOARD
}


/*
SO HERE'S WHAT I WANT. WRAP THE ENTIRE PLAY GAME IN A FUNCTION (PLAYGAME)
Then, return console.time(PLAYGAME);
Then, return console.timeEnd(PLAYGAME);


// link the console time function to the play game function
// link the console end time function to the
*/

///////////////////////////////////////////////////////////////////////////////
// local storage shit
// recording the names, top 10 times on that machine
