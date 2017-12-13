//wdi_project1_thegame by Ross Lillis

// Message: Player 1 start game by selecting a position on the board

var playerOSelect;
var playerXSelect;
var X = 'X';
var O = 'O';

var cellItems = document.querySelectorAll('.grid-container div');
var newGame = document.querySelector('button');


// when plr1 selects


var playerO = function(event) {
  event.target.classList.add('selected-O');
};

cellItems.forEach(function(cell) {
  cell.addEventListener('click', playerO );
});


var playerX = function(event) {
  event.target.classList.add('selected-X');
};

cellItems.forEach(function(cell) {
  cell.addEventListener('click', playerX);
});







var winCount = function() {               // Needs to account for two players. Two separate functions??
  var wins = 0;
  wins += 1;
  document.getElementById('wins').innerHTML = wins;
};



var newGame = function () {
  var newGame = document.querySelector('');
};
