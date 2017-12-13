//wdi_project1_thegame by Ross Lillis

// Message: Player 1 start game by selecting a position on the board
var player1Select = [];
var player2Select = [];
var gameArray = [];
var player1Wins = 0;
var player2Wins = 0;
var numberOfMoves = 0;                            // if numberOfMoves = 9 --- DRAW
var cellItems = document.querySelectorAll('.grid-container div');
var newGame = document.querySelector('button');


// var winningCombo =
// {
//     winningCombo [1, 2, 3]
//     winningCombo [4, 5, 6]
//     winningCombo [7, 8, 9]
//     winningCombo [1, 4, 7]
//     winningCombo [2, 5, 8]
//     winningCombo [3, 6, 9]
//     winningCombo [1, 5, 9]
//     winningCombo [3, 5, 7]
// }
var changePlayer = function() {
  numberOfMoves++;
};

var playerMove = function(event) {
  if (numberOfMoves % 2 === 0) {
    event.target.classList.add('selected-O');
  }
  else {
    event.target.classList.add('selected-X');
  }
  changePlayer();
};

cellItems.forEach(function(cell) {
  cell.addEventListener('click', playerMove);
});



// var player2Move = function(event) {
//   event.target.classList.add('selected-X');
//   changePlayer()
// };

// cellItems.forEach(function(cell) {
//   cell.addEventListener('click', player2Move);
// });


// var multiPlayerFunction = function() {
//   if (numberOfMoves % 2 === 1) {
//     changePlayer();
//   }
//   else if (numberOfMoves % 2 === 0) {
//     changePlayer();
//   }
// };

//multiPlayerFunction();






// var changePlayer = function() {
//   if (symbol === 'X') {
//     // increment playerO by 1
//     // change symbol to O
//   } else {
//     // increment playerX by 1
//     // change symbol to X
//   }
// };
//




var winCount = function() {               // Needs to account for two players. Two separate functions??
  var wins = 0;
  wins += 1;
  document.getElementById('wins').innerHTML = wins;
};



var newGame = function () {
  var newGame = document.querySelector('');
};
