
'use strict';

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
