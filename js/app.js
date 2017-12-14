//wdi_project1_thegame by Ross Lillis

// Message: Player 1 start game by selecting a position on the board
var player1Moves = [];
var player2Moves = [];
var gameArray = [];
var player1WinCount = 0;
var player2WinCount = 0;
var numberOfMoves = 0;
var cellItems = document.querySelectorAll('.grid-container div');
var displayWinner = document.querySelector('.display-winner');
var displayPlayer1Wins = document.querySelector('.plr1-wins');
var displayPlayer2Wins = document.querySelector('.plr2-wins');
var newGameBtn = document.querySelector('.newGameBtn');

var X = 'selected-X';
var O = 'selected-O';
var cell1 = document.querySelector('.cell1');
var cell2 = document.querySelector('.cell2');
var cell3 = document.querySelector('.cell3');
var cell4 = document.querySelector('.cell4');
var cell5 = document.querySelector('.cell5');
var cell6 = document.querySelector('.cell6');
var cell7 = document.querySelector('.cell7');
var cell8 = document.querySelector('.cell8');
var cell9 = document.querySelector('.cell9');

// var winningComboArray =
// [
//    ['X', 'X', 'X', 'O', 'O', 'O', 'O', 'O', 'O'],
//    ['O', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'O'],
//    ['O', 'O', 'O', 'O', 'O', 'O', 'X', 'X', 'X'],
//    ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'O', 'O'],
//    ['O', 'X', 'O', 'O', 'X', 'O', 'O', 'X', 'O'],
//    ['O', 'O', 'X', 'O', 'O', 'X', 'O', 'O', 'X'],
//    ['X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'X'],
//    ['O', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'O']
// ];


// var addPlayer1Selection = function() {
//   player1Moves.push('X');
// };
//
// var addPlayer2Selection = function() {
//   player2Moves.push('O');
// };

var changePlayer = function() {
  numberOfMoves++;
};

var checkforDraw = function() {
  if (numberOfMoves === 9) {
    document.querySelector('.display-winner').textContent = 'It\'s a Draw!';
  }
};


// Loop through array to check for win
var checkForWinFunct = function() {
  if (cell1.classList.contains(X) && cell2.classList.contains(X) && cell3.classList.contains(X)) {
    displayPlayer1Win();
  } else if (cell4.classList.contains(X) && cell5.classList.contains(X) && cell6.classList.contains(X)) {
    displayPlayer1Win();
  } else if (cell7.classList.contains(X) && cell8.classList.contains(X) && cell9.classList.contains(X)) {
    displayPlayer1Win();
  } else if (cell1.classList.contains(X) && cell4.classList.contains(X) && cell7.classList.contains(X)) {
    displayPlayer1Win();
  } else if (cell2.classList.contains(X) && cell5.classList.contains(X) && cell8.classList.contains(X)) {
    displayPlayer1Win();
  } else if (cell3.classList.contains(X) && cell6.classList.contains(X) && cell9.classList.contains(X)) {
    displayPlayer1Win();
  } else if (cell1.classList.contains(X) && cell5.classList.contains(X) && cell9.classList.contains(X)) {
    displayPlayer1Win();
  } else if (cell3.classList.contains(X) && cell5.classList.contains(X) && cell7.classList.contains(X)) {
    displayPlayer1Win();
  }
  else if (cell1.classList.contains(O) && cell2.classList.contains(O) && cell3.classList.contains(O)) {
    displayPlayer2Win();
  } else if (cell4.classList.contains(O) && cell5.classList.contains(O) && cell6.classList.contains(O)) {
    displayPlayer2Win();
  } else if (cell7.classList.contains(O) && cell8.classList.contains(O) && cell9.classList.contains(O)) {
    displayPlayer2Win();
  } else if (cell1.classList.contains(O) && cell4.classList.contains(O) && cell7.classList.contains(O)) {
    displayPlayer2Win();
  } else if (cell2.classList.contains(O) && cell5.classList.contains(O) && cell8.classList.contains(O)) {
    displayPlayer2Win();
  } else if (cell3.classList.contains(O) && cell6.classList.contains(O) && cell9.classList.contains(O)) {
    displayPlayer2Win();
  } else if (cell1.classList.contains(O) && cell5.classList.contains(O) && cell9.classList.contains(O)) {
    displayPlayer2Win();
  } else if (cell3.classList.contains(O) && cell5.classList.contains(O) && cell7.classList.contains(O)) {
    displayPlayer2Win();
  }
};

var displayPlayer1Win = function() {
  displayWinner.textContent = 'Player 1 Wins in ' + numberOfMoves + ' moves.';
  player1WinCount++;
  displayPlayer1Wins.textContent = player1WinCount;
};

var displayPlayer2Win = function() {
  displayWinner.textContent = 'Player 2 Wins in ' + numberOfMoves + ' moves.';
  displayPlayer2Wins.textContent = player2WinCount;
  return player2WinCount++;
};

var newGame = function () {
  cellItems.classList.remove('selected-X selecte-O');
  displayWinner.textContent = '';
};


//-------------MAIN PROGRAM FUNCTION---------------

var mainGameFunction = function(event) {
  if (event.target.classList.contains('selected-X') || event.target.classList.contains('selected-O')) {
    alert('This move has been played. Select another.');
  } else {
    if (numberOfMoves % 2 === 0) {
      event.target.classList.add('selected-X');
    } else {
      event.target.classList.add('selected-O');
    }
    checkForWinFunct();
    checkforDraw();
    changePlayer();
  }
};

cellItems.forEach(function(cell) {
  cell.addEventListener('click', mainGameFunction);
});


newGameBtn.addEventListener('click', newGame);
