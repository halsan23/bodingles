// Dad Jokes API
// =====================================================================
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  jokes.innerText = jokeText;
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
// =====================================================================



// Star Wars API
// =====================================================================
// set variable to print names
let swNames = document.getElementById('swNames');

// Using Axios and a Async function to send multiple requests
const getStarWarsPeople = async () => {
    try {
        // axios method
        // -----------------------------------------------------------------
        const res = await axios.get(`https://swapi.tech/api/people/`);
        let people =  res.data.results;
        // -----------------------------------------------------------------

        // fetch method
        // -----------------------------------------------------------------
        // const res = await fetch(`https://swapi.tech/api/people/`);
        // const resData = await res.json();
        // let people = resData.results;
        // -----------------------------------------------------------------

        // display EACH item from people
        people.forEach(item => {
            let newOption = document.createElement('OPTION');
            newOption.innerText = item.name;
            swNames.append(newOption);
      })
    } catch (e) {
        swNames.innerText = `ERROR!!!, ${e}`;
    }
};

getStarWarsPeople();
// =====================================================================