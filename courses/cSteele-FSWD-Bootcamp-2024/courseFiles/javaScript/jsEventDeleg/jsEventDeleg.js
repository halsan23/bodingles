// define the variables
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
const userName = document.querySelector('#userName');
const tweet = document.querySelector('#tweet');

// assign a submit event to the tweetForm object
tweetForm.addEventListener('submit', function(evt) {

      // override page reload or redirect
      evt.preventDefault();

      // call the function addTweet and pass in the user input values for userName and tweet
      // wrap this in a for loop that does not allow for blank entries
      if (userName.value != "" && tweet.value != "") {
            addTweet(userName.value, tweet.value);
      }

      // clear the HTML form fields for new input
      userName.value = '';   // <i>empty string</i></li>
      tweet.value = '';   // <i>empty string</i></li>
})


// create the addTweet function that will create the
// new HTML elements and append with the user input data
const addTweet = (userName, tweet) => {

   // create the new <li> element as a new tweet container
   // create a <b> element for the username
   const newTweet = document.createElement('li');
   const italElement = document.createElement('i');
   const boldElement = document.createElement('b');

   // add the userName to the boldElement
   italElement.append(userName);
   boldElement.append(italElement);
   newTweet.append(boldElement);

   // add the New Tweet data to the end of newTweet
   newTweet.append(` - ${tweet}`)

   // add the newTweet to the tweetsContainer
   tweetsContainer.append(newTweet);
}


// DELETE AN EXISTING TWEET
tweetsContainer.addEventListener('click', function (e) {
   (e.target.nodeName === 'LI' || e.target.nodeName === 'B' || e.target.nodeName === 'I') && e.target.closest('LI').remove();
})