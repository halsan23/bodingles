// Dad Jokes API
// https://icanhazdadjoke.com/api#google_vignette

// Define Variables
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

// get a new joke from the API
const getDadJoke = async () => {
  try {
    // set a header to return the data as Json
    const config = { headers: { Accept: "application/json" } };

    // get the joke
    const res = await axios.get("https://icanhazdadjoke.com/", config);

    // return the joke for display
    return res.data.joke;

    // if error
  } catch (e) {
    return "OH NO! Is your Ad Blocker on?";
  }
};

// update the "jokes" <p> tag with the new joke
const addNewJoke = async () => {

  // await retrieval of new joke
  const jokeText = await getDadJoke();

  // update the jokes <p> tag
  jokes.innerText = jokeText;
};

// click event to retrieve a new joke when button clicked
button.addEventListener("click", addNewJoke);