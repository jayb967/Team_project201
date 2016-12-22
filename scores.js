'use strict';
//////// WORKING WITH TEN CELLS INSTEAD OF THE NEEDED 20
// global DOM variables
// var tableScores = document.getElementById('tableScores');
// var topRowEl;
// var topCellEl;
// var topHeadEl;
// // LOCAL STORAGE STUFF
// var testLocalStorageNames = ['steve', 'bob', 'dope', 'another name', 'some more shit', 'boss status', 'here we goooooo', 'is this 10 yet', 'YAASSSS'];
// var testLocalStorageScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(testLocalStorageScores);
//
// function putScoresOnBoard(tableScores, topRowEl, topCellEl, i) {
//   topRowEl = document.createElement('tr');
//   topCellEl = topRowEl.insertCell(-1);
//   topRowEl.appendChild(topCellEl);
//   tableScores.appendChild(topRowEl);
//   topRowEl.innerHTML = testLocalStorageNames[i].toUpperCase() + ': ' + testLocalStorageScores[i];
// }
//
// function makeScoresChart() {
//   var topRowEl;
//   var topCellEl;
//   for (var i = 0; i < 10; i++) {
//     topRowEl = document.createElement('tr');
//     putScoresOnBoard(tableScores, topRowEl, topCellEl, i);
//   }
// }
// makeScoresChart();

//////////////// PLAY AREA /////////////////////

var tableScores = document.getElementById('tableScores');
// var th;
var tr;
var td1;
var td2;

// LOCAL STORAGE STUFF
var testLocalStorageNames = ['steve', 'bob', 'dope', 'another name', 'some more shit', 'boss status', 'fuck me', 'is this 10 yet', 'YAASSSS'];
var testLocalStorageScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sortedList = [];

function TopDual(name, score) {
  this.name = name;
  this.score = score;
}


console.log(testLocalStorageScores);

function putScoresOnBoard(tableScores, tr, td1, td2, i) {
  // th = document.create('th');
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td2 = document.createElement('td');
  var text1 = document.createTextNode(testLocalStorageNames[i]);
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
makeScoresChart();
