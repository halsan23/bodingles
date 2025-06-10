// The Simon Game
// badDoggy | 05/25
// ==========================================================


// Set Initial Variables
// ----------------------------------------------------------
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;


$(document).keypress( function() {
   if (level === 0) {
      nextSequence();
   }
});


$(".btn").click( function() {

   let userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);

   playSound(userChosenColour);
   animatePress(userChosenColour);
});


function nextSequence() {
   level++;
   $("#level-title").text(`Level ${level}`);

   let randomNumber = Math.floor(Math.random() * 4 );
   let randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
}


function playSound(name) {
   let audio = new Audio(`sounds/${name}.mp3`);
   audio.play();
}


function animatePress(currentColour) {
   $(`#${currentColour}`).addClass("pressed");
   setTimeout(function() {
      $(`#${currentColour}`).removeClass("pressed");
   }, 100);
}
