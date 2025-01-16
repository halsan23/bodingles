// ADD A NEW TWEET
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
   const newTweet = document.createElement('li');
   newTweet.innerText = `${userName} - ${tweet}`;
   console.log(newTweet);

   // // create a <i> element to contain the username
   // // add the userName to the italic Element
   // const italElement = document.createElement('i');
   // italElement.append(userName);

   // // create a <b> element for the italicized username
   // // add the italic userName to the bold Element
   // const boldElement = document.createElement('b');
   // boldElement.append(italElement);

   // // add the bold/italic userName to the newTweet
   // newTweet.innerText = `${boldElement} - ${tweet}`;

   // // add the newTweet to the tweetsContainer
   tweetsContainer.append(newTweet);
}


// DELETE AN EXISTING TWEET
const lis = document.querySelectorAll('li');

for (let li of lis) {
   li.addEventListener('click', function () {
      li.remove();
   })
}


// DELETE AN EXISTING TWEET
// tweetsContainer.addEventListener('click', function (e) {
//    e.target.nodeName === 'LI' && e.target.remove();
// })