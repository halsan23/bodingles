// define the variables
const tweetForm = document.querySelector('#tweetForm');
const userName = document.querySelector('#userName');
const tweet = document.querySelector('#tweet');
const tweetsContainer = document.querySelector('#tweets');

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

      // add a trash icon for tweet deletion
      const img = document.createElement('img');
      img.src ='../../../assets/images/trashCan.ico';

      // create the new <li> element as a new tweet container
      const newTweet = document.createElement('li');

      // create a <i> element to make the username italic
      const italElement = document.createElement('i');
      // place the userName inside the italic element
      italElement.append(userName);

      // create a <b> element to make the italicized username bold
      const boldElement = document.createElement('b');
      // place the italicized userName inside the bold element
      boldElement.append(italElement);

      // place the trash icon into the newTweet
      newTweet.append(img);

      // place the now bold & italic userName inside the newTweet <li>
      newTweet.append('   ');
      newTweet.append(boldElement);

      // add the New Tweet data to the end of newTweet
      newTweet.append(` - ${tweet}`);

      // add the newTweet to the tweetsContainer
      tweetsContainer.append(newTweet);
}


// DELETE AN EXISTING TWEET
tweetsContainer.addEventListener('click', function (evt) {
      console.log(evt);
      // evt.target.remove();
      // evt.target.nodeName === 'LI' && evt.target.remove();
      evt.target.nodeName === 'IMG' && evt.target.closest('LI').remove();
// (evt.target.nodeName === 'LI' || evt.target.nodeName === 'B' || evt.target.nodeName === 'I') && evt.target.closest('LI').remove();
})