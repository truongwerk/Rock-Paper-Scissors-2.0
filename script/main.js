/* Function make random Rock-Paper-Scissors */
function computerPlay() {
	let randomNumber = 0;
	let computerChoice = "none";
	randomNumber = Math.ceil(Math.random() * 3);
	if (randomNumber == 1) {
		computerChoice = "rock";
		computerRock.classList.add("choose");
	} else if (randomNumber == 2) {
		computerChoice = "paper";
		computerPaper.classList.add("choose");
	} else {
		computerChoice = "scissors";
		computerScissors.classList.add("choose");
	}
	return computerChoice;
}
/*Recogize play choice */
function playRoundRock() {
	removeChoice();
	playerRock.classList.add("choose");
	const playerChoice = "rock";
	playRound(playerChoice);
	return;
}
function playRoundPaper() {
	removeChoice();
	playerPaper.classList.add("choose");
	const playerChoice = "paper";
	playRound(playerChoice);
	return;
}
function playRoundScissors() {
	removeChoice();
	playerScissors.classList.add("choose");
	const playerChoice = "scissors";
	playRound(playerChoice);
	return;
}

/*Function take user input and decide the match */
function playRound(playerChoice) {
	const computerChoice = computerPlay();
	let result = "none";
	if (playerChoice == "rock") {
		if (computerChoice == "rock") {
			result = "draw";
		} else if (computerChoice == "paper") {
			result = "lose";
		} else if (computerChoice == "scissors") {
			result = "win";
		}
	} else if (playerChoice == "paper") {
		if (computerChoice == "rock") {
			result = "win";
		} else if (computerChoice == "paper") {
			result = "draw";
		} else if (computerChoice == "scissors") {
			result = "lose";
		}
	} else if (playerChoice == "scissors") {
		if (computerChoice == "rock") {
			result = "lose";
		} else if (computerChoice == "paper") {
			result = "win";
		} else if (computerChoice == "scissors") {
			result = "draw";
		}
	}
	return result;
}

function removeChoice() {
	imgs.forEach((img) => img.classList.remove("choose"));
}

const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");
const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const computerScore = document.querySelector("#computerScore");
const playerScore = document.querySelector("#playerScore");
const imgs = document.querySelectorAll("img");
playerRock.addEventListener("click", playRoundRock);
playerPaper.addEventListener("click", playRoundPaper);
playerScissors.addEventListener("click", playRoundScissors);
