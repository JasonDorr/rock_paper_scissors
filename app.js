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
// console.log(`Computer Chose: ${getComputerChoice()}`);

function getPlayerChoice() {
  let choice = prompt('Please select "Rock, Paper, or Scissors"');
  choice.toString();
  let lower = choice.toLowerCase();
  let cap = lower[0].toUpperCase();
  let newChoice = lower.replace(lower[0], cap);
  console.log(`You chose: ${newChoice}`);
  return newChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return console.log("Tie!");
  }

  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return winner(playerSelection, computerSelection);
  } else {
    loser(playerSelection, computerSelection);
  }

  if (playerSelection == "Paper" && computerSelection == "Rock") {
    return winner(playerSelection, computerSelection);
  } else {
    loser(playerSelection, computerSelection);
  }

  if (playerSelection == "Scissors" && computerSelection == "paper") {
    return winner(playerSelection, computerSelection);
  } else {
    loser(playerSelection, computerSelection);
  }
}

function winner(playerSelection, computerSelection) {
  console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
}

function loser(playerSelection, computerSelection) {
  console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
}

playRound(getPlayerChoice(), getComputerChoice());
