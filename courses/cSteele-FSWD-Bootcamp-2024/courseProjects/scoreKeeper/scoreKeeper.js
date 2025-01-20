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
winLose.append('');
resetDisp.append('');

// initial setup
let numOne = 0;
let numTwo = 0;
let numbSelVal = 3;

leftNum.innerText = numOne;
rightNum.innerText = numTwo;
numbSel.value = numbSelVal;
console.log(`number select value = ${numbSelVal}`);



// CLICK EVENTS
// Click Event to set Number of Rounds
document.getElementById('numbSel').addEventListener('click', function(evt) {
   numbSelVal = document.getElementById('numbSel').value;
   console.log(`number select value = ${numbSelVal}`);
})



// Player One Button Click Event
buttonOne.addEventListener('click', function(evt) {
   console.log('Player One Button Clicked');
   numOne++;
   leftNum.innerText = numOne;
   if (numOne === numbSelVal) {
      winLose.append('Player One Wins!')
      resetDisp.append('Press Reset to Play Again');
   }
})

// Player Two Button Click Event
buttonTwo.addEventListener('click', function() {
   console.log('Player Two Button Clicked');
})

// Reset Button Click Event
reset.addEventListener('click', function() {
   console.log('Reset Button Clicked');
})

