'use strict';

localStorage.userName = 'Bob';
localStorage.newHighScore = 123;
localStorage.highScores = [123, 124, 125, 126, 127];
//render high scores table

if (localStorage.newHighScore) {
  //give user button to put high score in table
}

//////////////////// RANDOM NOTES //////////////////////////////////////

//global DOM variables
 var tableScores = document.getElementById('topScores');
 var topRowEl;
 var topCellEl;

 function topScoresOnBoard(tableScores, topRowEl, topCellEl) {
   var topRowEl = document.createElement('tr');
   var topCellEl = trEl.insertCell(-1);
   topCellEl.id = //// so this shit would be from local storage
   topCellEl.appendChild(topRowEl);
   tableScores.appendChild(topRowEl);
 }

 localStorage.userName = 'Bob';
 localStorage.newHighScore = 127;
 localStorage.highScores = '[123, 124, 125, 126, 128]';
 //localStorage.setItem('highScores', localStorage.highScores);

 // FIRST RETURN FROM THE LOCAL storage

// SIMPLY THE LOCAL STORAGE STUFF
 var parsedHighScores = JSON.parse(localStorage.highScores);
 console.log(parsedHighScores);

 function topScoreCheck() {}
 for (var k = 0; k < localStorage.highScores.length; k++) {
   if (localStorage.newHighScore > localStorage.highScores[k]) {
     parsedHighScores.pop();
     localStorage.highScores[k] = localStorage.newHighScore;
   }
 }
 console.log(topScoreCheck());

 /////// YANA TABLE FUNCTION
 function putImagesOnBoard (tcEl, imgEl, trEl, gameBoard, i) {
   tcEl = trEl.insertCell(-1);
   imgEl = document.createElement('img');
   imgEl.id = i;
   // a;lskjfasdf = allPictures[boardLocation[i]];
   imgEl.src = allPictures[boardLocation[i]].currentSide;
   tcEl.appendChild(imgEl);
   trEl.appendChild(tcEl);
   gameBoard.appendChild(trEl);
 }
// ///// ROSE ANNE LOCAL STORAGE FUNCTION
function userNamePopulated() {
   if (localStorage.userName && initialNameEntered === false) {
     //console.log('I have a value');
     var pEl = document.createElement('p');
     pEl.textContent = localStorage.userName + ' , do you want to play the memory game?';
     playGame.appendChild(pEl);
     initialNameEntered = true;
     displayYesNoButtons();
   }
 }
