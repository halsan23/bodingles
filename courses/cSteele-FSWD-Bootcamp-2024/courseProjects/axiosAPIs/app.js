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
let starWars = document.getElementById('starWars');

// Using Axios and a Async function to send multiple requests
const getStarWarsPeople = async () => {
  try {
    const res = await axios.get(`https://swapi.tech/api/people/`);
    console.log(res.data.results);
    let people =  res.data.results;
    people.forEach(item => {
      let newP = document.createElement('P');
      newP.innerText = item.name;
      starWars.append(newP);
    })
  } catch (e) {
    starWars.innerText = `ERROR!!!, ${e}`;
  }
};

getStarWarsPeople();
// =====================================================================