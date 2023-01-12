/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/elements.js
const humanScoreEl = document.getElementById("human-score");
const botScoreEl = document.getElementById("bot-score");
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
const resultEl = document.getElementById('result');
;// CONCATENATED MODULE: ./src/js/main.js



var choicesElements = [rockEl, paperEl, scissorsEl];

var choices = ["r", "p", "s"];
var humanScore = 0;
var botScore = 0;
var clickable = true;

function resetUI() {
    clickable = true;
    resultEl.textContent = "Rock Paper Scissors";
    // show all three choices
    choicesElements.forEach(function(el) {
        el.style.display = 'block';
        el.classList.remove('loser');
        var spans = el.querySelectorAll('span');
        for (let i = 0; i < spans.length; i++) {
            spans[i].remove();
        };
    });
};

function updateScores() {
    humanScoreEl.textContent = humanScore;
    botScoreEl.textContent = botScore;
};

function showResults(humanChosenEl, computerChosenEl, result) {
    clickable = false;
    resultEl.textContent = result;
    updateScores();
    // hide all three choices
    choicesElements.forEach(function(el) {
        el.style.display = 'none';
    })
    humanChosenEl.style.display = "block";
    computerChosenEl.style.display = "block";

    var humanSpan = document.createElement('span');
    humanSpan.textContent = "Human";
    humanChosenEl.appendChild(humanSpan);

    var botSpan = document.createElement('span');
    botSpan.textContent = "Bot";
    computerChosenEl.appendChild(botSpan);

    if (result === "YOU WON!") {
        computerChosenEl.classList.add('loser');
    } else if (result === "BOT WON!") {
        humanChosenEl.classList.add('loser');
    }

    setTimeout(function () {
        resetUI();
    }, 3000);

}

function startRound(event) {
    if (!clickable) return;

    var humanChosenEl;

    // make sure were referring to the correct element
    if (event.target.matches('img')) {
        humanChosenEl = event.target.parentElement;
    } else {
        humanChosenEl = event.target;
    };

    var humanChoice = humanChosenEl.dataset.letter;

    var random = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[random];
    var computerChosenEl = document.querySelector('[data-letter="'+ computerChoice +'"]');



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

    showResults(humanChosenEl, computerChosenEl, result);

};

rockEl.addEventListener('click', startRound);
paperEl.addEventListener('click', startRound);
scissorsEl.addEventListener('click', startRound);

if (false) {}
/******/ })()
;