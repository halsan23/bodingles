// PingPong ScoreKeeper Project - 01/25 - badDoggy
// ===================================================

// Define Variables
// Player One
const playerOne = {
   playerNum: 1,
   score: 0,
   display: document.getElementById('p1Display'),
   button: document.getElementById('p1Button')
}

// Player Two
const playerTwo = {
   playerNum: 2,
   score: 0,
   display: document.getElementById('p2Display'),
   button: document.getElementById('p2Button')
}

// Reset Button
const resetButton = document.getElementById('reset');
// Play To Selection
const playTo = document.getElementById('playTo');
let winScore = 3;
console.log(`Playing to : ${playTo.value}`);
console.log(`Winning Score : ${winScore.value}`);
// is Game Over
let gameOver = false;
// Text to announce Winner
const winLose = document.getElementById('winLoss');


// Update Scores
function updateScores (player, opponent) {
   if (!gameOver) {                       // is the game over?
      player.score += 1;                  // if not, add 1 to player score
      if (player.score === winScore) {    // if player score = winning score,
         gameOver = true;                 // game is over
         player.display.classList.add('has-text-success');     // change text color for win
         opponent.display.classList.add('has-text-danger');   // change text color for lose
         player.button.classList.add('opacity');     // change text color for win
         opponent.button.classList.add('opacity');   // change text color for lose
         winLose.innerText = `Player ${player.playerNum} Wins!`;
      }
      player.display.textContent = player.score;  // display current p1Score
      console.log(`Player Score : ${player.score}`)
   }
}



// Add Click Events for Buttons
// Player 1 Button
p1Button.addEventListener('click', function() {
   updateScores(playerOne, playerTwo)
})

// Player 2 Button
p2Button.addEventListener('click', function() {
   updateScores(playerTwo, playerOne)
})

// Reset Button
resetButton.addEventListener('click', function() {
   winScore = 3;             // reset Winning Score
   playTo.value = winScore;  // reset default "Plat To" value
   reset();                  // reset the game if user changes the "play to" value
})

// Click Event for "Play To" Selection
playTo.addEventListener('change', function() {
   winScore = parseInt(this.value);   // because "this.value" is a string, change it to an integer
   reset();                           // reset the game if user changes the "play to" value
})

// RESET Function
function reset() {
   gameOver = false;
   for (let p of [playerOne, playerTwo]) {
      p.score = 0;
      p.display.textContent = 0;
      p.display.classList.remove('has-text-success', 'has-text-danger');
      p.button.classList.remove('opacity');
      winLose.innerText = "Use the buttons below to increase each players score.";
   }
}