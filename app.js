'use strict';
////// GLOBAL VARIABLES BOI /////////
var allPictures = [];
var boardLocation = [];
// var selectedImages = [];
var initialNameEntered = false;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//DOM variables
var userForm = document.getElementById('user-form'); //user name
var playGame = document.getElementById('playGame');//want to play?
var yesButton = document.getElementById('yesButton');//yes to play
var noButton = document.getElementById('noButton');//no to play
var wantToPlay = document.getElementById('yesLetsPlay');//displays game instructions
var startGame = document.getElementById('startGame');//starts Game timer begins
var registerScore = document.getElementById('registerScore');//starts Game timer begins

//Check UserName on Main Page for blanks
function userHandler(event) {
  event.preventDefault();
  localStorage.userName = JSON.stringify(event.target.userName.value);
  console.log(JSON.parse(localStorage.userName));
  userNamePopulated();
}
//Populate User Name
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

//Generate a yes and no button
function displayYesNoButtons() {
//Yes button displayed
  var newButtonYes = document.createElement('BUTTON')
  newButtonYes.textContent = 'Yes';
  console.log('in yes button clicked function');
  yesButton.appendChild(newButtonYes);
//No button displayed
  var newButtonNo = document.createElement('BUTTON')
  newButtonNo.textContent = 'No';
  console.log('in no button clicked function');
  noButton.appendChild(newButtonNo);
}

//provide game instructions, start button and call the timer function
function yesLetsPlay() {
  var h3El = document.createElement('h3');
  console.log('I am in yesLetsPlay');
  h3El.textContent = 'Four rows of four cards placed facing down are displayed. Once the Start Game button is clicked the timer will begin and the user will have the ability to click on only two cards at a time. If a match occurs the cards will remain facing up.  If a match doesn’t occur the cards will automatically be turned face down.  If the player qualifies within the top ten, they may register their score or they may play again. If they choose to register their score, they will be transported to the Top Scores Page. If they choose to Play Again the cards will be turned over, the timer reset and the player can begin clicking on cards.'
  wantToPlay.appendChild(h3El);
//start button
  var newButtonStartGame = document.createElement('BUTTON')
  newButtonStartGame.textContent = 'Start Game';
  console.log('in start game button clicked function');
  startGame.appendChild(newButtonStartGame);
}

function noLetsNotPlay() {
  console.log('I am in noLetsNotPlay');
//need to hook into the Joke Page
}

function callTimer() {
  console.log('we are in the timer fucntion');
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//  this code can be modified to use as a time.   It currently starts on window.load
  // var timer = {
  //   interval: 0,
  //   count: function() {
  //     var t = setInterval(function() {
  //       $('counter').innerHTML = timer.interval;
  //       timer.interval++;
  //     }, 1000);
  //   }
  // }
  //
  // window.onload = timer.count;
  //
  // function $(id) {
  //   return document.getElementById(id);
  // }
}

//This displays the register your score button and should only be called if the player is in the top ten??
//otherwise we display the Play again button and the See Registered Scores??????
function registerYourScore(){
  var newButtonRegisterYourScore = document.createElement('BUTTON')
  newButtonRegisterYourScore.textContent = 'RegisterYourScore';
  console.log('in register your score button clicked function');
  registerScore.appendChild(newButtonRegisterYourScore);
}
registerYourScore();

function registerScorePage() {
  console.log('I am in the register score page');
}

//Event Listeners for Main Page
userForm.addEventListener('submit', userHandler);
yesButton.addEventListener('click',yesLetsPlay);
noButton.addEventListener('click',noLetsNotPlay);
startGame.addEventListener('click',callTimer);
registerScore.addEventListener('click',registerScorePage);



// ////// DIS THE IMAGE OBJECT MON ///////
// function Img(idNumber) {
//   this.idNumber = idNumber;
//   this.filepath = '/img' + this.idNumber + '.jpg';
//   this.boardLocation = -1;
//   allPictures.push(this);
// }
//
// // All of our pic names are just numbers so we don't have to write out all of the individual pic IDS doppppeeeeeee
// function picIds() {
//   for (var i = 0; i < 8; i++) {
//     allPictures[i] = new Img[i];
//   }
// }
// picIds();
//
// // random function
// function rand() {
//   return Math.floor(Math.random() * 8);
// }
//
// // running the random function 8 times to choose what
// function randomImages () {
//   // assume the board is CLEAR
//   if (boardLocation === []) {
//     boardLocation.push(rand());
//   } else {
//     while (boardLocation.length < 8) {
//       var temp = rand();
//       // acount for duplicates within array, each location needs one duplicate
//       // but only one duplicate.
//       if (boardLocation.indexOf(temp) === boardLocation.lastIndexOf(temp)) {
//         boardLocation.push(temp);
//       }
//     }
//   }
// }
// randomImages();
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
