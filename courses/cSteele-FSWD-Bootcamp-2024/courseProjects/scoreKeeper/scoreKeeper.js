// PingPong ScoreKeeper Project - 01/25 - badDoggy
// ===================================================

// Define Variables
// Buttons
const p1Button = document.getElementById('p1Button');
const p2Button = document.getElementById('p2Button');
const resetButton = document.getElementById('reset');
// Score Display
const p1Display = document.getElementById('p1Display');
const p2Display = document.getElementById('p2Display');
// Score Values
let p1Score = 0;
let p2Score = 0;
// is Game Over
let gameOver = false;
// Play To Selection
const playTo = document.getElementById('playTo');
let winScore = 3;
// Text to announce Winner
const winLose = document.getElementById('winLoss');


// Add Click Events for Buttons
// Player 1 Button
p1Button.addEventListener('click', function() {
   if (!gameOver) {                     // is the game over?
      p1Score += 1;                     // if not, add 1 to player score
      if (p1Score === winScore) {       // if player score = winning score,
         gameOver = true;               // game is over
         p1Display.classList.add('winner');    // change text color for win
         p2Display.classList.add('looser');    // change text color for lose
         winLose.innerText = "Player 1 Wins!";
      }
      p1Display.textContent = p1Score;  // display current p1Score
   }
})

// Player 2 Button
p2Button.addEventListener('click', function() {
   if (!gameOver) {                     // is the game over?
      p2Score += 1;                     // if not, add 1 to player score
      if (p2Score === winScore) {       // if player score = winning score,
         gameOver = true;               // game is over
         p1Display.classList.add('looser');    // change text color for win
         p2Display.classList.add('winner');    // change text color for lose
         winLose.innerText = "Player 2 Wins!";
      }
      p2Display.textContent = p2Score;  // display current p1Score
   }
})

// Reset Button
// When Reset Button is clicked, Run the RESET function
resetButton.addEventListener('click', reset)

// Click Event for "Play To" Selection
playTo.addEventListener('change', function() {
   winScore = parseInt(this.value);   // because "this.value" is a string, change it to an integer
   reset();                           // reset the game if user changes the "play to" value
})

// RESET Function
function reset() {
   gameOver = false;
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = p1Score;
   p2Display.textContent = p2Score;
   p1Display.classList.remove('winner', 'looser');
   p2Display.classList.remove('winner', 'looser');
   winLose.innerText = "";
}