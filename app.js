const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3) + 1;
  // return num;
  if (num === 1) {
    return "Rock";
  } else if (num === 2) {
    return "Paper";
  } else if (num === 3) {
    return "Scissors";
  }
};
console.log(`Computer Chose: ${getComputerChoice()}`);

const playerChoice = () => {
  let choice = prompt('Please select "Rock, Paper, or Scissors"');
  choice.toString();
  let lower = choice.toLowerCase();
  let cap = lower[0].toUpperCase();
  let newChoice = lower.replace(lower[0], cap);
  console.log(`You chose: ${newChoice}`);
  return choice;
};

function playRound(playerSelection, computerSelection) {
  function winner() {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  }

  function loser() {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
