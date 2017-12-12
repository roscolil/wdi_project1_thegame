//wdi_project1_thegame by Ross Lillis

// Message: Player 1 start game by selecting a position on the board

// Declare DOM element variables
var cell1 = document.querySelector('.cell1');   // Can i use querySelectorAll here??
var cell2 = document.querySelector('.cell2');
var cell3 = document.querySelector('.cell3');
var cell4 = document.querySelector('.cell4');
var cell5 = document.querySelector('.cell5');
var cell6 = document.querySelector('.cell6');
var cell7 = document.querySelector('.cell7');
var cell8 = document.querySelector('.cell8');
var cell9 = document.querySelector('.cell9');
var newGame = document.querySelector('button');

var playArray = [];


// clickHandler function plr1/plr2?
// winCounter function for plr1/plr2
// newGame function





function clickHandler(event) {
  event.target. = '';                     // Need target and action
}
listItems.forEach(function(elem) {
  elem.addEventListener('click', ClickHandler);
});



var winCount = function() {               // Needs to account for two players
  var wins = 0;
  wins += 1;
  document.getElementById('wins').innerHTML = wins;
};

var newGame = function () {
  var newGame = document.querySelector('');
};


// Event Listeners
cell1.addEventListener('click', clickHandler);
cell2.addEventListener('click', clickHandler);
cell3.addEventListener('click', clickHandler);
cell4.addEventListener('click', clickHandler);
cell5.addEventListener('click', clickHandler);
cell6.addEventListener('click', clickHandler);
cell7.addEventListener('click', clickHandler);
cell8.addEventListener('click', clickHandler);
cell9.addEventListener('click', clickHandler);
resetButton.addEventListener('click', newGame);
