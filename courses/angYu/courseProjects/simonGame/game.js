// The Simon Game
// badDoggy | 05/25
// ==========================================================


// Set Initial Variables
// ----------------------------------------------------------
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;


$(document).keypress( function() {
   if (level === 0) {
      nextSequence();
   }
});


$(".btn").click( function() {
   let userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);

   // console.log(`User Pattern: ${userClickedPattern}`);

   playSound(userChosenColor);
   animatePress(userChosenColor);

   // console.log(`Last Index: ${(userClickedPattern.length) - 1}`)
   checkAnswer(userClickedPattern.length - 1);
});


function nextSequence() {
   level++;
   $("#level-title").text(`Level ${level}`);

   userClickedPattern = [];

   let randomNumber = Math.floor(Math.random() * 4 );
   let randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);

   $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
}


function playSound(name) {
   let audio = new Audio(`sounds/${name}.mp3`);
   audio.play();
}


function animatePress(currentColor) {
   $(`#${currentColor}`).addClass("pressed");
   setTimeout(function() {
      $(`#${currentColor}`).removeClass("pressed");
   }, 100);
}

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
