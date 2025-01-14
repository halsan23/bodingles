// define the variables
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

// assign a submit event to the tweetForm object
tweetForm.addEventListener('submit', function(evt) {

      // override page reload or redirect
      evt.preventDefault();

      // pull the user entered data from the elements property of the form object tweetForm
      const usernameInput = tweetForm.elements.userName;
      const tweetInput = tweetForm.elements.tweet;

      // call the function addTweet and pass in the values for usernameInput and tweetInput
      addTweet(usernameInput.value, tweetInput.value);

      // clear the HTML form fields for new input
      usernameInput.value = '';   // <i>empty string</i></li>
      tweetInput.value = '';   // <i>empty string</i></li>
})


// create the addTweet function that will create the
// new HTML elements and append with the user input data
const addTweet = (userName, tweet) => {
   console.log(userName);
   console.log(tweet);

   // create the new <li> element as a new tweet container
   // create a <b> element for the username
   const newTweet = document.createElement('li');
   const boldElement = document.createElement('b');
   const breakElement = document.createElement('br');

   // add the userName to the boldElement
   boldElement.append(userName);
   newTweet.append(boldElement);
   newTweet.append(breakElement);

   // add the New Tweet data to the end of newTweet
   newTweet.append(tweet);

   // add the newTweet to the tweetsContainer
   tweetsContainer.append(newTweet);
}
