// Drum Roll
// ========================================================================================


// add "click trap" to process which drum was "clicked"
// ----------------------------------------------------------------------------------------
// loop through all drums to add "click" event listener to them all
for ( let i = 0; i < document.querySelectorAll('.drum').length; i++) {

   // add event listener for each individual drum button
   document.querySelectorAll('.drum')[i].addEventListener('click', function () {

      // "this" represents the individual button that was clicked
      // this.innerHTML represents the letter that was set inside the html code for each individual button
      // so we are "trapping" for the individual letter of each html button
      let buttonInnerHTML = this.innerHTML;

      // call th function to actually produce the sound
      // based on html button "click"
      makeSound(buttonInnerHTML);

   });
}

document.addEventListener('keydown', (evt) => {
   // call th function to actually produce the sound
   // based on "key press"
   makeSound(evt.key);
});

// play the sound based on html button clicked,
// or key pressed
function makeSound (key) {
   switch (key) {
         case "w":
            let tom1 = new Audio(`./sounds/tom-1.mp3`);
            tom1.play();
            break;
         case "a":
            let tom2 = new Audio(`./sounds/tom-2.mp3`);
            tom2.play();
            break;
         case "s":
            let tom3 = new Audio(`./sounds/tom-3.mp3`);
            tom3.play();
            break;
         case "d":
            let tom4 = new Audio(`./sounds/tom-4.mp3`);
            tom4.play();
            break;
         case "j":
            let snare = new Audio(`./sounds/snare.mp3`);
            snare.play();
            break;
         case "k":
            let crash = new Audio(`./sounds/crash.mp3`);
            crash.play();
            break;
         case "l":
            let kick = new Audio(`./sounds/kick.mp3`);
            kick.play();
            break;

         default:
            alert(`Incorrect Key "${key}" Pressed!!`);
      }
}
