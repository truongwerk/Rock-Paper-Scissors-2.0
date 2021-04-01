const computerRock =document.querySelector(.computerRock);
const compeuterPaper =document

/* Function make random Rock-Paper-Scissors */
function computerPlay() {
  let randomNumber = 0;
  let computerChoice = "none";
  randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}
/*Function take user input and decide the match */
function playRound() {
  let playerInput = prompt("What's your choose?");
  const computerChoice = computerPlay();
  let playerChoice = playerInput.toLowerCase();
  let result = "none";
  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      alert("Draw!");
      result = "draw";
    } else if (computerChoice == "paper") {
      alert("You lose this round!");
      result = "lose";
    } else if (computerChoice == "scissors") {
      alert("You win this round!");
      result = "win";
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      alert("You win this round!");
      result = "win";
    } else if (computerChoice == "paper") {
      alert("Draw!");
      result = "draw";
    } else if (computerChoice == "scissors") {
      alert("You lose this round!");
      result = "lose";
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      alert("You lose this round!");
      result = "lose";
    } else if (computerChoice == "paper") {
      alert("You win this round!");
      result = "win";
    } else if (computerChoice == "scissors") {
      alert("Draw!");
      result = "draw";
    }
  }
  return result;
}
/* Function play the game 5 times, and decide a winner */
function gameBo5() {
  let win = 0;
  let lose = 0;
  let draw = 0;
  let match = playRound();
  console.log(match);
  if (match == "win") {
    win = win + 1;
  } else if (match == "lose") {
    lose = lose + 1;
  } else if (match == "draw") {
    draw = draw + 1;
  }
  match = playRound();
  console.log(match);
  if (match == "win") {
    win = win + 1;
  } else if (match == "lose") {
    lose = lose + 1;
  } else if (match == "draw") {
    draw = draw + 1;
  }
  match = playRound();
  console.log(match);
  if (match == "win") {
    win = win + 1;
  } else if (match == "lose") {
    lose = lose + 1;
  } else if (match == "draw") {
    draw = draw + 1;
  }
  match = playRound();
  console.log(match);
  if (match == "win") {
    win = win + 1;
  } else if (match == "lose") {
    lose = lose + 1;
  } else if (match == "draw") {
    draw = draw + 1;
  }
  match = playRound();
  console.log(match);
  if (match == "win") {
    win = win + 1;
  } else if (match == "lose") {
    lose = lose + 1;
  } else if (match == "draw") {
    draw = draw + 1;
  }
  alert(
    `Total:You won ${win} times, you loss ${lose} times, and have ${draw} drawn matches.`
  );
  if (win > lose) {
    alert("You win this Bo5, You are the Winner!!");
  } else if (win < lose) {
    alert("You loss this Bo5, try harder next time.");
  } else if (win == lose) {
    alert("This is a drawn game.");
  }
}
alert("This is Bo5 Rock Paper Scissors.");
gameBo5();
