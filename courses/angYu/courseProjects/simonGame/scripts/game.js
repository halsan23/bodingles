// The Simon Game
// badDoggy | 05/25
// ==========================================================


// Set Initial Variables
// ----------------------------------------------------------
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let gameOver = 0;
$('#restart-title').hide();


// press any key to start, or restart a game
$(document).keypress( function() {
   // if first round of game, do this to start new game
   if (!level) {
      level = 1;
      nextSequence();
      // if game is over, do this to reset and replay
   } else {
      if (gameOver) {
         startOver();
      }
   }
});


// click function for color buttons
$(".btn").click( function() {
   if (level && !gameOver) {
      // which button was clicked - assign to variable
      let userChosenColor = $(this).attr("id");
      userClickedPattern.push(userChosenColor);

      // play sound and animate button that was clicked
      playSound(userChosenColor);
      animatePress(userChosenColor);

      // check is user sequence is correct
      checkAnswer(userClickedPattern.length - 1);
   }
});


// game play code
function nextSequence() {
   // display level on screen
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


// check for win / loss scenario
//      1st - chk if last user input matches last generated color
//      2nd - check if length of both arrays is the same
// if you check this every round, and it all matches up, then it is a correct match
function checkAnswer(currentLevel) {

   // check if last input matches last generated color
   if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

      // check if user array is the same length as the generated array
      if (userClickedPattern.length === gamePattern.length) {

         // update level # and display on screen
         setTimeout(function() {
            level++;
            $("#level-title").text(`Level ${level}`);
         }, 500);

         // after 1 second run the next sequence
         setTimeout(function() {
            nextSequence();
         }, 1000);
      }
   } else {
      playSound("wrong");
      $(".contain").addClass("game-over");
      setTimeout(function() {
         $(".contain").removeClass("game-over");
      }, 175);
      document.querySelector('#level-title').innerHTML = `Level ${level}<br><br>Game Over`;
      $('#restart-title').show();
      gameOver = 1;
   }
}


// play the audio that matches the button clicked
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

// reset the variables to start over
function startOver () {
   gamePattern = [];
   userClickedPattern = [];
   level = 1;
   gameOver = 0;
   $("#level-title").text(`Level ${level}`);
   $('#restart-title').hide();
   nextSequence()
}
