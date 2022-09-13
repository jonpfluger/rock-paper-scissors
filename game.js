// Define var for wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;

// Define array for choices
var options = ["R", "P", "S"];

var playAgain = true;

while (playAgain) {
// Define var for playerChoice
    var playerChoice = prompt("Choose R, P, or S");

    // Define var for computerChoice
    var computerChoice = options[Math.floor(Math.random() * options.length)];

    // prompt() playerChoice

    // randomly choose computerChoice

    if (computerChoice === options[0]) {
        alert("Computer chose R");
    } else if (computerChoice === options[1]) {
        alert("Computer chose P");
    } else if (computerChoice === options[2]) {
        alert("Computer chose S");
    }

    // Math.floor(Math.random() * 3);

    // compare choices
    // display (alert) comparison results (won, tied, lost)
    if (playerChoice === computerChoice) {
        ties++;
        alert("It's a tie!");
    } else if (((playerChoice === "R") && (computerChoice === "S")) || ((playerChoice === "P") && (computerChoice === "R")) || ((playerChoice === "S") && (computerChoice === "P"))) {
        wins++;
        alert("You won!");
    } else {
        losses++;
        alert("You lost!");
    }

    // show stats (number of wins, losses, ties)
    alert("Wins: " + wins + "\n" + "Losses: " + losses + "\n" + "Ties: " + ties)

    // play again?   //confirm?
        // restart the game
    // otherwise
        // thanks for playing!

    playAgain = confirm("Play again?");
}