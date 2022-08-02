let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const playerChoice = document.querySelector("#playerchoice");

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    console.log(`Computer Chose: Rock`);
    return "Rock";
  } else if (num === 2) {
    console.log(`Computer Chose: Paper`);
    return "Paper";
  } else if (num === 3) {
    console.log(`Computer Chose: Scissors`);
    return "Scissors";
  }
}

function getPlayerChoice() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const playerSelection = e.target.dispatchEvent;
      return playerSelection;
    });
  });
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return console.log("Tie!");
  } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    return winner(playerSelection, computerSelection);
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    return winner(playerSelection, computerSelection);
  } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    return winner(playerSelection, computerSelection);
  } else {
    loser(playerSelection, computerSelection);
  }
}

function winner(playerSelection, computerSelection) {
  console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  playerScore++;
}

function loser(playerSelection, computerSelection) {
  console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
  computerScore++;
}

// playRound();

// while (computerScore < 5 && playerScore != 5 && gameCount != 10) {
//   playRound(getPlayerChoice(), getComputerChoice());
//   gameCount++;
//   console.log(
//     `Player: ${playerScore}, Computer: ${computerScore}, Game: ${gameCount}`
//   );
// }

// if (playerScore === 5) {
//   alert("You Win");
// } else if (computerScore === 5) {
//   alert("You Lose");
// } else if (gameCount === 10 && playerScore > computerScore) {
//   alert("You Win");
// } else if (gameCount === 10 && computerScore > playerScore) {
//   alert("You Lose");
// }
