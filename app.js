'use strict';

////// GLOBAL VARIABLES BOI /////////
var allPictures = [];
var boardLocation = [];
// var selectedImages = [];

////// DIS THE IMAGE OBJECT MON ///////
function Img(idNumber) {
  this.idNumber = idNumber;
  this.filepath = 'img/' + this.idNumber + '.jpg';
  this.boardLocation = -1;
  allPictures.push(this);
  this.cardBack = 'https://t1.rbxcdn.com/822be1519b67a0f657dbfeae47eba30b';
}

// All of our pic names are just numbers so we don't have to write out all of the individual pic IDS doppppeeeeeee
function picIds() {
  allPictures = [];
  for (var i = 0; i < 8; i++) {
    allPictures[i] = new Img(i);
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
    while (boardLocation.length < 16) {
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
/*
so this could prove to be problematic in terms of efficiency in timing
the previous function will only work with the right number of images
if we add more images to the image bank, selected the random 8 images
we will be using first, then run those pre-selected 8 and run them
through the previous function.
*/

function makeGameBoard() {
  var gameBoard = document.getElementById('gameBoard');
  var trEl;
  var imgEl;
  var tcEl;

  for (var i = 0; i < boardLocation.length; i++) {
    if (i % 4 === 0) {
      trEl = document.createElement('tr');
      // var x = trEl.insertCell(0)
      tcEl = trEl.insertCell(-1);
      imgEl = document.createElement('img');
      imgEl.src = allPictures[boardLocation[i]].cardBack;
      tcEl.appendChild(imgEl);
      trEl.appendChild(tcEl);
      gameBoard.appendChild(trEl);
    } else {
      tcEl = trEl.insertCell(-1);
      imgEl = document.createElement('img');
      imgEl.src = allPictures[boardLocation[i]].cardBack;
      tcEl.appendChild(imgEl);
      trEl.appendChild(tcEl);
      gameBoard.appendChild(trEl);
    }
  }
}
makeGameBoard();

// function blankGameBoard() {
//   var gameBoard = document.getElementById('gameBoard');
//   var trEl;
//   var imgEl;
//   var tcEl;
//
//   for (var i = 0; i < boardLocation.length; i++) {
//     if (i % 4 === 0) {
//       trEl = document.createElement('tr');
//       // var x = trEl.insertCell(0)
//       tcEl = trEl.insertCell(-1);
//       imgEl = document.createElement('img');
//       imgEl.src = 'https://t1.rbxcdn.com/822be1519b67a0f657dbfeae47eba30b';
//       tcEl.appendChild(imgEl);
//       trEl.appendChild(tcEl);
//       gameBoard.appendChild(trEl);
//     } else {
//       tcEl = trEl.insertCell(-1);
//       imgEl = document.createElement('img');
//       imgEl.src = 'https://t1.rbxcdn.com/822be1519b67a0f657dbfeae47eba30b';
//       tcEl.appendChild(imgEl);
//       trEl.appendChild(tcEl);
//       gameBoard.appendChild(trEl);
//     }
//   }
// }
// blankGameBoard();

///// HOW TO SWITCH THE BLANK GAME BOARD TO THE GAME BOARD

///////////////////////// RANDOM NOTES ///////////////////////////////////
// WHEN THE GAME IS FINISHED
    // You need to clear the game board if it says play again
    //


// function playGameClickHandle(event) {
//   event.preventDefault;
//   //display the images for the game
//     randomImages();
//   // CLEAR THE BOARD
// }


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
