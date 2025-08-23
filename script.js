const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("userScore");
const computerScoreEl = document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (userChoice === computerChoice) {
    result = `It's a tie! You both chose ${userChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    result = `You Win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You Lose! ${computerChoice} beats ${userChoice}.`;
  }

  // Update
  resultEl.textContent = result;
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
}
