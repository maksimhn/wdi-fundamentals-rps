////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove, computerMove;
// These variables weren't declared in the original template
// so repl.it spits out a mistake without me declaring them. Not sure
// if choosing global scope is the only way to go here, but it just
// didn't work otherwise, and I don't understand scope properly to use it right.

function getPlayerMove(move) {  // Getting an input from a player.
    return playerMove = move || getInput();
}

function getComputerMove(move) {  // Getting an input from a computer.
    return computerMove = move || randomPlay();
}

function getWinner(playerMove,computerMove) { // Determining a winner/tie.
    var winner;
    if (playerMove === computerMove) {        // Checking if it's a tie first looked more efficient
      winner = "tie";                         // because we cut out a branch of multiple comparisons.
    } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "rock")) {
      winner = "player";
    } else {
      winner = "computer";
    }
    return winner;
}

function playToFive() { // Playing until either side wins 5 times.
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
      getPlayerMove(getInput());
      getComputerMove(randomPlay());
      if (getWinner(playerMove, computerMove) === "player") {
        playerWins++;
      } else if (getWinner(playerMove, computerMove) === "computer") {
        computerWins++;
      }
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
      console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

// playToFive();
