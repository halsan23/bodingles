// ===============================================
// Scorekeeper  Game
// 01/25
// ===============================================

// Define the variables
let leftNum = document.querySelector('#leftNum');
let rightNum = document.querySelector('#rightNum');



let numbSel = document.getElementsByName('#numbSel');
console.log(`number select = ${numbSel.value}`);



const buttonOne = document.querySelector('#buttonOne');
const buttonTwo = document.querySelector('#buttonTwo');
const reset = document.querySelector('#buttonReset');


// initial setup
let numOne = 0;
let numTwo = 0;
let numSel = 3;

leftNum.innerText = numOne;
rightNum.innerText = numTwo;
numbSel.innerText.value = numSel;


// buttonOne click event
buttonOne.addEventListener('click', function(evt) {
   console.log('Left Number Button Clicked');
   console.log(evt);
})

// buttonTwo click event
buttonTwo.addEventListener('click', function() {
   console.log('Right Number Button Clicked');
   console.log(evt);
})

// Reset click event
reset.addEventListener('click', function() {
   console.log('Reset Button Clicked');
   console.log(evt);
})
