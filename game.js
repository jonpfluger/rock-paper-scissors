// Define var for wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;

// Define array for choices
var options = ["R", "P", "S"];

// Define var for playerChoice
var playerChoice;

// Define var for computerChoice
var computerChoice;

// prompt() playerChoice
prompt("Choose R, P, or S");

// randomly choose computerChoice


// compare choices
// display (alert) comparison results (won, tied, lost)
if (playerChoice === computerChoice) {
    ties++;
    alert("It's a tie!");
}
else if (((playerChoice == "R") + (computerChoice == "S")) || ((playerChoice = "P") + (computerChoice = "R")) || ((playerChoice = "S") + (computerChoice = "P"))) {
    wins++;
    alert("You won!");
} else {
    losses++;
    alert("You lost!");
}

// show stats (number of wins, losses, ties)

// play again?   //confirm?
    // restart the game
// otherwise
    // thanks for playing!