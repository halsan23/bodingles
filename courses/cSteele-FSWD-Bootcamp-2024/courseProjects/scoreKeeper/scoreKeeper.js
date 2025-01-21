// ===============================================
// Scorekeeper  Game
// 01/25
// ===============================================

// Define the variables
let leftNum = document.querySelector('#leftNum'); // Left Score Number
let rightNum = document.querySelector('#rightNum'); // Right Score Number
const numbSel = document.getElementById('numbSel'); // Number of Rounds Select

const buttonOne = document.querySelector('#buttonOne'); // Player 1 Button
const buttonTwo = document.querySelector('#buttonTwo'); // Player 2 Button
const reset = document.querySelector('#buttonReset'); // Reset Button

// Win/Loss Space to Announce Winner
let winLose = document.getElementById('winLoss');
let resetDisp = document.getElementById('resetAnnounce');

// det default values
winLose.innerText = '';
resetDisp.innerText = '';
let win = false;
let numOne = 0;
let numTwo = 0;
let numbSelVal = 3;
leftNum.innerText = numOne;
rightNum.innerText = numTwo;
numbSel.value = numbSelVal;


// CLICK EVENTS
// ===============================================
// Click Event to set Number of Rounds
numbSel.addEventListener('click', function() {
   numbSelVal = numbSel.value;
   numbSel.value = numbSelVal;
})

// Player One Button Click Event
buttonOne.addEventListener('click', function() {
   numOne++;
   leftNum.innerText = numOne;
   if (numOne === numbSelVal) {
      winLose.append('Player One Wins!')
      resetDisp.append('Press Reset to Play Again');
   }
   if (numOne > numbSelVal) {
      numOne = numbSelVal;
      leftNum.innerText = numOne;
   }
})

// Player Two Button Click Event
buttonTwo.addEventListener('click', function() {
   numTwo++;
   rightNum.innerText = numTwo;
   if (numTwo >= numbSelVal) {
      rightNum.innerText.value = numbSelVal;
      winLose.append('Player Two Wins!')
      resetDisp.append('Press Reset to Play Again');
   }
})

// Reset Button Click Event
reset.addEventListener('click', function() {
   winLose.innerText = '';
   resetDisp.innerText = '';
   win = false;
   numOne = 0;
   numTwo = 0;
   numbSelVal = 3;
   leftNum.innerText = numOne;
   rightNum.innerText = numTwo;
   numbSel.value = numbSelVal;
   console.log(numbSel.value);
})
