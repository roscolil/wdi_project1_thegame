# wdi_project1_thegame

This tic tac toe style was intended to be a fun game for kids to play. The theme lends itself to
R L Stein 'Goosebumps' or Neil Gaiman 'Coraline' style books.

A 'click' event triggers the mainGameFunction which checks if the cell being played contains the 'selected-X' or 'selected-O' class names. These are added to each respective HTML element/cell as a player makes their move. A counter
is used to alternate between each player. The appropriate class name will be added based on if the counter is
odd/even. The moveCounter function handles the increments after each move and is also used to display the number of moves for each winner. Additionally, the numberOfMoves variable is used to signal a draw when the maximum number of moves has been reached without a winner.

As the main game logic, I have chosen to use <div> class state as part of the condition expressions and check for 'selected-X' or 'selected-O' class names against known winning combinations. These will in turn call the player win functions which display a winning message, increment the player win count and display that win count.

The reset button reversed the <div> class state and resets the board and removes the winners message.
