let userSelection;
let roundResult = document.getElementById("result-box");
let computerResult = document.getElementById("computer-result-box");

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
		+ "</br>" + "The computer selected: " + computersSelection 

	if(userSelection == computersSelection) {
		roundResult.innerHTML = "The game is tied.";

	} else if(userSelection == "rock" && computersSelection == "scissor") {
		roundResult.innerHTML = "You win!";

	} else if(userSelection == "paper" && computersSelection == "rock") {
		roundResult.innerHTML = "You win!";

	} else if(userSelection == "scissor" && computersSelection == "paper") {
		roundResult.innerHTML = "You win!";

	} else {
		roundResult.innerHTML = "You lose!";

	}


}
