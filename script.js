var userSelection = prompt(
	"Hello! Let's play rock, paper, scissor!" + 
	"\nSelect \"rock,\" \"paper,\" or \"scissor.\"");
playRoundOfGame(userSelection);

function playRoundOfGame(userSelection) {
	let computersOptions = ["rock", "paper", "scissor"];
	let randomValue = Math.floor(Math.random() * 3);
	let computersSelection = computersOptions[randomValue];

	userSelection = userSelection.toLowerCase();
	computersSelection = computersSelection.toLowerCase();
	console.log("The computer selected: " + computersSelection + "\nYou selected: " + userSelection)

	if(userSelection == computersSelection) {
		console.log("The game is tied.");

	} else if(userSelection == "rock" && computersSelection == "scissor") {
		console.log("You win!");

	} else if(userSelection == "paper" && computersSelection == "rock") {
		console.log("You win!");

	} else if(userSelection == "scissor" && computersSelection == "paper") {
		console.log("You win!");

	} else {
		console.log("You lose!");

	}



}
