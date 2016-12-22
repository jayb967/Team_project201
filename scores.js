'use strict';

//////////////// PLAY AREA /////////////////////
//tableScores.rows[0].cells[0] // FUCKING IMPORTANT, THIS IS HOW YOU REFERENCE THE FUCKING CELL THAT YOU WANT.

var tableScores = document.getElementById('tableScores');
// var th;
var tr;
var td1;
var td2;

// LOCAL STORAGE STUFF
var testLocalStorageNames = ['steve', 'bob', 'dope', 'another name', 'some more shit', 'boss status', 'fuck me', 'is this 10 yet', 'YAASSSS', 'Lela Star'];
var testLocalStorageScores = [1, 15, 45, 90, 100, 156, 212, 500, 750, 1000];
var newHighScore = 69;

function putScoresOnBoard(tableScores, tr, td1, td2, i) {
  // th = document.create('th');
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
  // var th;
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
var fourBoard = makeScoresChart();
var sixBoard = makeScoresChart();

// TWO BUTTONS YOU SEXY FUCK SLUT
// SO JUST CHECK FROM THE LOCAL STORAGE, THE SIZE ATTRIBUTE
// If (JSON.parse(localStorage.size) === 4) {
//   fourBoard;
// } else {
//   sixBoard;
// }

function playGameHandler(e) {
  e.preventDefault();
  document.location.href = 'index.html';
}

 document.getElementById('play-again').addEventListener('click', playGameHandler);
// document.getElementById(playGameButton);
// playGameButton.addEventListener('click', playGameHandler);
