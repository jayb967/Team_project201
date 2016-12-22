'use strict';

//////////////// PLAY AREA /////////////////////
//tableScores.rows[0].cells[0] // FUCKING IMPORTANT, THIS IS HOW YOU REFERENCE THE FUCKING CELL THAT YOU WANT.

var tableScores = document.getElementById('tableScores');
// var th;
var tr;
var td1;
var td2;

///////////////////// LOCAL STORAGE TESTING GROUNDS
var testLocalStorageNames = ['steve', 'bob', 'dope', 'another name', 'some more shit', 'boss status', 'fuck me', 'is this 10 yet', 'YAASSSS', 'Lela Star'];
var testLocalStorageScores = [1, 15, 45, 90, 100, 156, 212, 500, 750, 1000];
/////////////////////////////////////////////////////////////////
function putScoresOnBoard(tableScores, tr, td1, td2, i) {
  tr = document.createElement('tr');
  tr.id = i;
  td1 = document.createElement('td');
  td2 = document.createElement('td');
  var text1 = document.createTextNode(testLocalStorageNames[i].toUpperCase());
  var text2 = document.createTextNode(testLocalStorageScores[i]);
  td1.appendChild(text1);
  td2.appendChild(text2);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tableScores.appendChild(tr);
}

function makeScoresChart() {
  var tr;
  var td1;
  var td2;
  for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      tr = document.createElement('tr');
      putScoresOnBoard(tableScores, tr, td1, td2, i);
    } else {
      putScoresOnBoard(tableScores, tr, td1, td2, i);
    }
  }
}
// makeScoresChart();


/////////////////////// FROM THE LOCAL STORAGE SHIT
// var localBoardSize = JSON.parse(localStorage.getItem('boardSize'));
// var localUserName = JSON.parse(localStorage.getItem('userName'));
//
// var localStorageNames = [];
// var localStorageScores = [];
// var localStorageBoardSize = [];
//
// function renderTopTable() {
//   var i = 0;
//   if (localBoardSize === 8) {
//     while (localStorageNames.length < localUserName.length) {
//       var localHighScores4 = JSON.parse(localStorage.getItem('highScores4'));
//       localStorageNames.push(localUserName[i]);
//       localStorageScores.push(localHighScores4[i]);
//       i++;
//     }
//   } else {
//     while (localStorageNames.length < localUserName.length) {
//       var localHighScores6 = JSON.parse(localStorage.getItem('highScores6'));
//       localStorageNames.push(localUserName[i]);
//       localStorageScores.push(localHighScores6[i]);
//       i++;
//     }
//   }
// }

function playGameHandler(e) {
  e.preventDefault();
  document.location.href = 'index.html';
}

document.getElementById('play-again').addEventListener('click', playGameHandler);
document.getElementById(playGameButton);
playGameButton.addEventListener('click', playGameHandler);
