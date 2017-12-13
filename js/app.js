//wdi_project1_thegame by Ross Lillis

// Message: Player 1 start game by selecting a position on the board
var player1Moves = [];
var player2Moves = [];
var gameArray = [];
var player1Wins = 0;
var player2Wins = 0;
var numberOfMoves = 0;                           // if numberOfMoves = 9 --- DRAW
var cellItems = document.querySelectorAll('.grid-container div');
var displayWinner = document.querySelector('.display-winner');
var displayPlayer1Wins = document.querySelector('.plr1-wins');
var displayPlayer2Wins = document.querySelector('.plr2-wins');
var newGame = document.querySelector('button');

var winningComboArray =
[
   ['X', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'O'],
   ['O', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'O'],
   ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'X', 'X'],
   ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'O', 'O'],
   ['O', 'X', 'O', 'O', 'X', 'O', 'O', 'X', 'O'],
   ['O', 'O', 'X', 'O', 'O', 'X', 'O', 'O', 'X'],
   ['X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'X'],
   ['O', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'O']
];


var addPlayer1Selection = function() {
  player1Moves.push('X');
};

var addPlayer2Selection = function() {
  player2Moves.push('O');
};

var changePlayer = function() {
  numberOfMoves++;
};

var checkforDraw = function() {
  if (numberOfMoves === 9) {
    document.querySelector('.displayWinner').textContent = 'It\'s a Draw!';
  }
};

// Loop through array to check for win
var checkForWinFunct = function() {
  for (var i = 0; i < winningComboArray.length; i++) {
    for (var j = 0; j < winningComboArray[i].length; j++) {
      if (winningComboArray[i][j].match(/XXX/)) {
        displayWinner.textContent = 'Player 1 Wins!';
        displayPlayer1Wins.textContent = player1Wins;
        return player1Wins++;
      }
      else if (winningComboArray[i][j].match(/OOO/)) {
        displayWinner.textContent = 'Player 2 Wins!';
        displayPlayer2Wins.textContent = player2Wins;
        return player2Wins++;
      }
    }
  }
};


// Alternate players after click event
var playerMove = function(event) {
// check empty cell
  if (numberOfMoves % 2 === 0) {
    event.target.classList.add('selected-X');
    addPlayer1Selection();
  } else {
    event.target.classList.add('selected-O');
    addPlayer2Selection();
  }
  checkForWinFunct();
  changePlayer();
  checkforDraw();
};

cellItems.forEach(function(cell) {
  cell.addEventListener('click', playerMove);
});




// var newGame = function () {
//   var newGame = document.querySelector('');
// };
