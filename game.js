var humanScoreEl = document.getElementById("human-score");
var botScoreEl = document.getElementById("bot-score");
var rockImg = document.getElementById("rock");
var paperImg = document.getElementById("paper");
var scissorsImg = document.getElementById("scissors");

var imageElements = [rockImg, paperImg, scissorsImg];

var choices = ["r", "p", "s"];
var humanScore = 0;
var botScore = 0;

function startRound(event) {
    var humanChosenImg = event.target;
    var humanChoice = humanChosenImg.dataset.letter;

    var random = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[random];
    var computerChosenImg = document.querySelector('img[data-letter="'+ computerChoice +'"]');



    var result;
    if (humanChoice === computerChoice) {
        result = "TIED!";
    } else if (humanChoice === "r" && computerChoice === "s" || humanChoice === "p" && computerChoice === "r" || humanChoice === "s" && computerChoice === "p") {
        humanScore++;
        result = "YOU WON!";
    } else {
        botScore++;
        result = "BOT WON!";
    };

    // hide all three images
    imageElements.forEach(function(img) {
        img.style.display = 'none';
    })
    humanChosenImg.style.display = "block";
    computerChosenImg.style.display = "block";

};

rockImg.addEventListener('click', startRound);
paperImg.addEventListener('click', startRound);
scissorsImg.addEventListener('click', startRound);
















// // Define var for wins, losses, and ties
// var wins = 0;
// var losses = 0;
// var ties = 0;

// // Define array for choices
// var options = ["R", "P", "S"];

// var playAgain = true;

// while (playAgain) {
//     // Define var for playerChoice
//     // prompt() playerChoice
//     var playerChoice = prompt("Choose R, P, or S");

//     // Define var for computerChoice
//     // randomly choose computerChoice
//     var computerChoice = options[Math.floor(Math.random() * options.length)];

//     if (computerChoice === options[0]) {
//         alert("Computer chose R");
//     } else if (computerChoice === options[1]) {
//         alert("Computer chose P");
//     } else if (computerChoice === options[2]) {
//         alert("Computer chose S");
//     }

//     // compare choices
//     // display (alert) comparison results (won, tied, lost)
//     if (playerChoice === computerChoice) {
//         ties++;
//         alert("It's a tie!");
//     } else if (((playerChoice === "R") && (computerChoice === "S")) || ((playerChoice === "P") && (computerChoice === "R")) || ((playerChoice === "S") && (computerChoice === "P"))) {
//         wins++;
//         alert("You won!");
//     } else {
//         losses++;
//         alert("You lost!");
//     }

//     // show stats (number of wins, losses, ties)
//     alert("Wins: " + wins + "\n" + "Losses: " + losses + "\n" + "Ties: " + ties)

//     // play again?   //confirm?
//         // restart the game
//     // otherwise
//         // thanks for playing!

//     playAgain = confirm("Play again?");
// }