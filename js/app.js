//wdi_project1_thegame by Ross Lillis


var player1WinCount = 0;
var player2WinCount = 0;
var numberOfMoves = 0;
// var gameCount = 0;
var cellItems = document.querySelectorAll('.grid-container div');
var displayWinner = document.querySelector('.display-winner');
var displayPlayer1Wins = document.querySelector('.plr1-wins');
var displayPlayer2Wins = document.querySelector('.plr2-wins');
var newGameBtn = document.querySelector('.newGameBtn');
var cell1 = document.querySelector('.cell1');
var cell2 = document.querySelector('.cell2');
var cell3 = document.querySelector('.cell3');
var cell4 = document.querySelector('.cell4');
var cell5 = document.querySelector('.cell5');
var cell6 = document.querySelector('.cell6');
var cell7 = document.querySelector('.cell7');
var cell8 = document.querySelector('.cell8');
var cell9 = document.querySelector('.cell9');
var X = 'selected-X';
var O = 'selected-O';

window.onload = function() {
    document.querySelector('audio').play();
};

var moveCounter = function() {
  numberOfMoves++;
};

var checkforDraw = function() {
  if (numberOfMoves === 8) {
    document.querySelector('.display-winner').textContent = 'It\'s a Draw!';
  }
};

var displayPlayer1Win = function() {
  displayWinner.textContent = 'Player 1 Wins in ' + (numberOfMoves + 1) + ' moves.';
  player1WinCount++;
  //displayPlayer1Wins.textContent = player1WinCount;
  $('.plr1-wins').counter({direction: "up", format: player1WinCount, interval: '0'});
};

var displayPlayer2Win = function() {
  displayWinner.textContent = 'Player 2 Wins in ' + (numberOfMoves + 1) + ' moves.';
  player2WinCount++;
  //displayPlayer2Wins.textContent = player2WinCount;
  $('.plr2-wins').counter({direction: "up", format: player2WinCount, interval: '0'});
};

var newGame = function() {
  for (var i = 0; i < cellItems.length; i++) {
    cellItems[i].classList.remove('selected-X', 'selected-O');
  }
  displayWinner.textContent = '';
  numberOfMoves = 0;
  // gameCount++;
};

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



//--------------------------------------MAIN PROGRAM FUNCTION------------------------------------//


var mainGameFunction = function(event) {
  if (event.target.classList.contains('selected-X') || event.target.classList.contains('selected-O')) {
    alert('This move has been played. Select another.');
  } else {
      if (numberOfMoves % 2 === 0) {
        event.target.classList.add('selected-X');
      }
      else {
        event.target.classList.add('selected-O');
      }
  }
  checkForWinFunct();
  checkforDraw();
  moveCounter();
};

//---------------------------------------EVENT LISTENERS-------------------------------------------//

cellItems.forEach(function(cell) {
  cell.addEventListener('click', mainGameFunction);
  newGameBtn.addEventListener('click', newGame);
});
