// set variables to output joke to webpage
const butt = document.querySelector('#butt');
const newJoke = document.querySelector('#newJoke');

const parButt = butt.parentElement;
const parJoke = newJoke.parentElement;

// import the joke package
const jokes = require('give-me-a-joke');

// import the color package
const colors = require('colors');



// get a joke
parButt.addEventListener('click', function(evt) {
   evt.preventDefault();

   console.log('Button Clicked');

   // To get a random dad joke
   jokes.getRandomDadJoke (function(joke) {

      //=> console.log(joke);
      console.log(joke.green);

      // output on webpage
      parJoke.innerText = joke.green;
   });

});




