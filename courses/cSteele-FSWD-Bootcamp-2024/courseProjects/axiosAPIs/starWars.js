// Star Wars API
// =====================================================================
// set variable to print names
let swNames = document.getElementById('swNames');
let swPlanets = document.getElementById('swPlanets');
let swShips = document.getElementById('swShips');

// Using Axios and a Async function to send multiple requests
// Get Sta Wars People
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
            let newLI = document.createElement('LI');
            newLI.innerText = item.name;
            swNames.append(newLI);
      })
    } catch (e) {
        swNames.innerText = `ERROR!!!, ${e}`;
    }
};


// Get Sta Wars Planets
const getStarWarsPlanets = async () => {
   try {
       // axios method
       // -----------------------------------------------------------------
       const res = await axios.get(`https://swapi.tech/api/planets/`);
       let planets =  res.data.results;
       // -----------------------------------------------------------------

       // fetch method
       // -----------------------------------------------------------------
       // const res = await fetch(`https://swapi.tech/api/people/`);
       // const resData = await res.json();
       // let people = resData.results;
       // -----------------------------------------------------------------

       // display EACH item from people
       planets.forEach(item => {
           let newLI = document.createElement('LI');
           newLI.innerText = item.name;
           swPlanets.append(newLI);
     })
   } catch (e) {
      swPlanets.innerText = `ERROR!!!, ${e}`;
   }
};


// Get Sta Wars Ships
const getStarWarsShips = async () => {
   try {
       // axios method
       // -----------------------------------------------------------------
       const res = await axios.get(`https://swapi.tech/api/starships/`);
       let ships =  res.data.results;
       // -----------------------------------------------------------------

       // fetch method
       // -----------------------------------------------------------------
       // const res = await fetch(`https://swapi.tech/api/people/`);
       // const resData = await res.json();
       // let people = resData.results;
       // -----------------------------------------------------------------

       // display EACH item from people
       ships.forEach(item => {
           let newLI = document.createElement('LI');
           newLI.innerText = item.name;
           swShips.append(newLI);
     })
   } catch (e) {
      swShips.innerText = `ERROR!!!, ${e}`;
   }
};


// run each function
getStarWarsPeople();
getStarWarsPlanets();
getStarWarsShips();


// display the details
// =====================================================================