let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 9);  
};

let compareGuesses = (human, computer, secretNum) => {
  const humanGuess = Math.abs(secretNum - human);
  const compGuess = Math.abs(secretNum - computer);
  return humanGuess <= compGuess;
}

let updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

let advanceRound = () => {
  currentRoundNumber++;
}