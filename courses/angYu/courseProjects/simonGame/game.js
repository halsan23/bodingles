// The Simon Game
// badDoggy | 05/25
// ==========================================================


// Set Initial Variables
// ----------------------------------------------------------
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;


// press any key to start the game
$(document).keypress( function() {
   if (level === 0) {
      nextSequence();
   }
});


// click function for color buttons
$(".btn").click( function() {
   // which button was clicked - assign to variable
   let userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);
   // console.log(`User Pattern: ${userClickedPattern}`);

   // play sound and animate button that was clicked
   playSound(userChosenColor);
   animatePress(userChosenColor);

   // console.log(`Last Index: ${(userClickedPattern.length) - 1}`)

   // check is user sequence is correct
   checkAnswer(userClickedPattern.length - 1);
});


// continue playing game
function nextSequence() {
   // increase level # and output it as text
   level++;
   $("#level-title").text(`Level ${level}`);

   // reset user input sequence
   userClickedPattern = [];

   // generate random game color and add it to the game sequence array
   let randomNumber = Math.floor(Math.random() * 4 );
   let randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);

   // flash button for game generated button and play sound
   $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
}


// play the audion that matches the button clicked
function playSound(name) {
   let audio = new Audio(`sounds/${name}.mp3`);
   audio.play();
}


// add animated flash effect for button that was clicked
function animatePress(currentColor) {
   $(`#${currentColor}`).addClass("pressed");
   setTimeout(function() {
      $(`#${currentColor}`).removeClass("pressed");
   }, 100);
}


// check for win / loss scenario
function checkAnswer(currentLevel) {
   console.log(`Game Pattern = ${gamePattern}`)
   console.log(`User Pattern = ${userClickedPattern}`)

   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("Correct Answer");

      if(userClickedPattern.length === gamePattern.length) {
         setTimeout(function() {
            nextSequence();
         }, 1000);

      } else {
         console.log("Wrong Answer");
      }
   }
}
