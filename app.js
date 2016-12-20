'use strict';
////// GLOBAL VARIABLES BOI /////////
var allPictures = [];
var boardLocation = [];
// var selectedImages = [];
var initialNameEntered = false;

////// DIS THE IMAGE OBJECT MON ///////
function Img(idString) {
  this.idString = idString;
  this.filepath = 'img/' + this.idString + '.jpg';
  this.boardLocation = -1;
  allPictures.push(this);
  this.currentSide = 'img/card.png';
}

// All of our pic names are just numbers so we don't have to write out all of the individual pic IDS doppppeeeeeee
function picIds(letter, start, end) {
  allPictures = [];
  for (var i = start; i < end; i++) {
    allPictures[i] = new Img(letter + i);
  }
}
picIds('a', 0, 8);
picIds('b', 9, 16);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//DOM variables
var userForm = document.getElementById('user-form');
var playGame = document.getElementById('playGame');

//Check UserName on Main Page for blanks
function userHandler(event) {
  event.preventDefault();
  localStorage.userName = JSON.stringify(event.target.userName.value);
  console.log(JSON.parse(localStorage.userName));
  userNamePopulated();
}



// running the random function 8 times to choose what
function rand() {
  return Math.floor(Math.random() * 8);
}

function randomImages () {
  do {
    var temp = rand();
    if (boardLocation.indexOf(temp) === boardLocation.lastIndexOf(temp)) {
      boardLocation.push(temp);
      allPictures[temp].boardLocation = boardLocation[boardLocation.length - 1];
    }
  } while (boardLocation.length < 16);
}
randomImages();

// assume the board is CLEAR
// if (boardLocation === []) {
//   boardLocation.push(rand());
//   allPictures[].boardLocation
// } else {
//   while (boardLocation.length < 16) {
//     var temp = rand();
//     // acount for duplicates within array, each location needs one duplicate
//     // but only one duplicate.
//     if (boardLocation.indexOf(temp) === boardLocation.lastIndexOf(temp)) {
//       boardLocation.push(temp);
//     }
//   }
// }

function putImagesOnBoard (tcEl, imgEl, trEl, gameBoard, i) {
  tcEl = trEl.insertCell(-1);
  imgEl = document.createElement('img');
  imgEl.id = boardLocation[i];
  // a;lskjfasdf = allPictures[boardLocation[i]];
  imgEl.src = allPictures[boardLocation[i]].currentSide;
  tcEl.appendChild(imgEl);
  trEl.appendChild(tcEl);
  gameBoard.appendChild(trEl);
}

var gameBoard = document.getElementById('gameBoard');
var trEl;
var imgEl;
var tcEl;

function makeGameBoard() {
  console.log('this is in the make board game function');
  // var gameBoard = document.getElementById('gameBoard');
  // var trEl;
  // var imgEl;
  // var tcEl;
  for (var i = 0; i < boardLocation.length; i++) {
    if (i % 4 === 0) {
      trEl = document.createElement('tr');
      putImagesOnBoard(tcEl, imgEl, trEl, gameBoard, i);
    } else {
      putImagesOnBoard(tcEl, imgEl, trEl, gameBoard, i);
    }
  }
}
makeGameBoard();


///// HOW TO SWITCH THE BLANK GAME BOARD TO THE GAME BOARD

///////////////////////// RANDOM NOTES ///////////////////////////////////
// WHEN THE GAME IS FINISHED
    // You need to clear the game board if it says play again
    //



// function playGameButton(event) {
//    display the images for the game randomImages();
//    start overral timer
//    15 second timer for notification
// }

// var table = document.getElementById('gameBoard');

document.getElementById('gameBoard').addEventListener('click', clickFlip);

function clickFlip(event) {
  event.preventDefault();
  alert(event.target.id);
  allPictures[boardLocation[event.target.id]].currentSide = allPictures[boardLocation[event.target.id]].filepath;
  // alert(allPictures[boardLocation[event.target.id]].currentSide);
  gameBoard.innerHTML = '';
  makeGameBoard();
    // Start timer for 15 seconds until next click [STRETCH]
  // CLEAR THE BOARD
  // display needs to change from cardback to
}


////////// LATERZ ////////////////////////////////
// if (event.target.id === event.target.id) {
//   // from Img.filepath === filepath
// }
//
// if (event.target.id !== event.target.id) {
//   // from Img.filepath === cardBack;
// }





/////////////////////////////////////////////////////////////////////////////////
function userNamePopulated() {
  if (localStorage.userName && initialNameEntered === false) {
    console.log('I have a value');
    var pEl = document.createElement('p');
    pEl.textContent = localStorage.userName + ' , do you want to play the memory game?';
    playGame.appendChild(pEl);
    initialNameEntered = true;
    displayYesNoButtons();
  }
}

    //generate a yes and no button
function displayYesNoButtons() {
  //Yes button displayed
  var newButton = document.createElement('BUTTON')
  newButton.textContent = 'Yes';
  console.log('in yes button clicked function');
  yesButton.appendChild(newButton);
//No button displayed
  var newButton = document.createElement('BUTTON')
  newButton.textContent = 'No';
  console.log('in yes button clicked function');
  yesButton.appendChild(newButton);
}



//Event Listeners for Main Page
userForm.addEventListener('submit', userHandler);
//wantToPlay.addEventListener('click',name of function);
// startGame.addEventListener('click', name of function);
// displayScore.addEventListener('click', name of function);






//////////////////// RANDOM NOTES //////////////////////////////////////
// // so this could prove to be problematic in terms of efficiency in timing
// /*
// the previous function will only work with the right number of images
// if we add more images to the image bank, selected the random 8 images
// we will be using first, then run those pre-selected 8 and run them
// through the previous function.
// */
//
// // so this could prove to be problematic in terms of efficiency in timing
//
//
// function playGameClickHandle(event) {
//   event.preventDefault;
//   //display the images for the game
//   // CLEAR THE BOARD
// }
//
//
// /*
// SO HERE'S WHAT I WANT. WRAP THE ENTIRE PLAY GAME IN A FUNCTION (PLAYGAME)
// Then, return console.time(PLAYGAME);
// Then, return console.timeEnd(PLAYGAME);
//
//
// // link the console time function to the play game function
// // link the console end time function to the
// */
//
// ///////////////////////////////////////////////////////////////////////////////
// // local storage shit
// // recording the names, top 10 times on that machine
//
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// //this code is to be used when we are waiting for the user to click on cards
// //When a visitor clicks the button, the setTimeout() method is called, passing in the expression that
// // we want to run after the time delay, and the value of the time delay itself - 5,000 milliseconds or 5 seconds.
// //<input type="button" name="clickMe" value="Click me and wait!"
// //onclick="setTimeout('alert(\'Surprise!\')', 5000)"/>

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
//this code can be modified to use as a time.   It currently starts on window.load
// <div id="counter"></div>
// var timer = {
//     interval: 0,
//     count: function() {
//         var t = setInterval(function() {
//             $('counter').innerHTML = timer.interval;
//             timer.interval++;
//         }, 1000);
//     }
// };
//
// window.onload = timer.count;
//
// function $(id) {
//     return document.getElementById(id);
// }
