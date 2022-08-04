let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn");
const playAgain = document.querySelector("#playagain");
const result = document.querySelector("#result");
const playerChoice = document.querySelector("#playerchoice");
const computerChoice = document.querySelector("#computerchoice");
const playerScoreDisplay = document.querySelector("#playerscore");
const computerScoreDisplay = document.querySelector("#computerscore");

playerChoice.innerText = "Player chose";
computerChoice.innerText = "Computer chose";
result.innerText = "Results";

const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    computerChoice.innerText = `Computer chose: Rock`;
    return "Rock";
  } else if (num === 2) {
    computerChoice.innerText = `Computer chose: Paper`;
    return "Paper";
  } else if (num === 3) {
    computerChoice.innerText = `Computer chose: Scissors`;
    return "Scissors";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (playerScore < 5 && computerScore < 5) {
      const playerSelection = e.target.innerText;
      playerChoice.innerText = `You chose: ${playerSelection}`;
      playRound(playerSelection, getComputerChoice());
      playerScoreDisplay.innerText = `Player's Score: ${playerScore}`;
      computerScoreDisplay.innerText = `Computer's Score: ${computerScore}`;
      return;
    } else if (playerScore === 5 || computerScore === 5) {
      playerScore = 0;
      computerScore = 0;
      return gameOver();
    }
  });
});
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return (result.innerText = "Tie!");
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return winner(playerSelection, computerSelection);
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return winner(playerSelection, computerSelection);
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return winner(playerSelection, computerSelection);
  } else {
    loser(playerSelection, computerSelection);
  }
};

const winner = (playerSelection, computerSelection) => {
  result.innerText = `You win! ${playerSelection} beats ${computerSelection}!`;
  playerScore++;
};

const loser = (playerSelection, computerSelection) => {
  result.innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
  computerScore++;
};

const gameOver = () => {
  buttons.forEach((button) => {
    button.classList.add("gameover");
  });
  playAgain.style.display = "block";

  playAgain.addEventListener("click", (e) => {
    playerScoreDisplay.innerText = `Player's Score: `;
    playerChoice.innerText = " You chose: ";
    computerScoreDisplay.innerText = "Computer's Score: ";
    computerChoice.innerText = "Computer chose ";
    result.innerText = "Results";
    playAgain.style.display = "none";
    // playGame();
    buttons.forEach((button) => {
      button.classList.remove("gameover");
      // button.removeEventListener("click");
    });
  });
};
// playGame();
