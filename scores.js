'use strict';

var tableScores = document.getElementById('tableScores');

function makeScoresChart(names, scores) {
  var tr;
  var td1;
  var td2;
  for (var i = 0; i < scores.length; i++) {
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td1.textContent = names[i];
    td2 = document.createElement('td');
    td2.textContent = scores[i];
    tr.appendChild(td1);
    tr.appendChild(td2);
    tableScores.appendChild(tr);
  }
}

var localBoardSize = JSON.parse(localStorage.getItem('boardSize'));

function renderTopTable() {
  var localHighScores;
  var localHighScorers;
  if (localBoardSize === 8) {
    localHighScores = JSON.parse(localStorage.getItem('highScores4'));
    localHighScorers = JSON.parse(localStorage.getItem('highScorers4'));
  } else {
    localHighScores = JSON.parse(localStorage.getItem('highScores6'));
    localHighScorers = JSON.parse(localStorage.getItem('highScorers6'));
  }
  makeScoresChart(localHighScorers, localHighScores);
}

renderTopTable();

function playGameHandler(e) {
  e.preventDefault();
  document.location.href = 'index.html';
}

document.getElementById('play-again').addEventListener('click', playGameHandler);
