'use strict';

let userSelection;
let userTotalPoints = 0;
let computerTotalPoints = 0;

let computerResult = document.getElementById("computer-result-box");
let gameRoundResult = document.getElementById("game-result-box");
let userPointCounter = document.getElementById("user-point-counter");
let computerPointCounter = document.getElementById("computer-point-counter");


document.getElementById("button-rock").onclick = function() {
	userSelection = "rock";
	playRoundOfGame(userSelection);

};

document.getElementById("button-paper").onclick = function() {
	userSelection = "paper"
	playRoundOfGame(userSelection);

};

document.getElementById("button-scissor").onclick = function() {
	userSelection = "scissor"
	playRoundOfGame(userSelection);

};


function playRoundOfGame(userSelection) {
	let computersOptions = ["rock", "paper", "scissor"];
	let randomValue = Math.floor(Math.random() * 3);
	let computersSelection = computersOptions[randomValue];

	computerResult.innerHTML = "You selected: " + userSelection 
		+ "</br>" + "Computer selected: " + computersSelection 

	if(userSelection == computersSelection) {
		gameRoundResult.innerHTML = "The game is tied.";

	} else if(userSelection == "rock" && computersSelection == "scissor") {
		gameRoundResult.innerHTML = "You win!";
		userTotalPoints = userTotalPoints + 1;

	} else if(userSelection == "paper" && computersSelection == "rock") {
		gameRoundResult.innerHTML = "You win!";
		userTotalPoints = userTotalPoints + 1;

	} else if(userSelection == "scissor" && computersSelection == "paper") {
		gameRoundResult.innerHTML = "You win!";
		userTotalPoints = userTotalPoints + 1;

	} else {
		gameRoundResult.innerHTML = "You lose!";
		computerTotalPoints = computerTotalPoints + 1;

	}

	userPointCounter.innerHTML = "Your Total Points: " + userTotalPoints;
	computerPointCounter.innerHTML= "Computer's Total Points: " + computerTotalPoints;


}
