// Star Wars API
// =====================================================================
// set variable for html place holders
const swNames = document.getElementById('swNames');
// const swPlanets = document.getElementById('swPlanets');
// const swShips = document.getElementById('swShips');
const disp = document.getElementById('disp');
// set variables for api processing
let placeHolder = '';
let lookFor = '';


// Using Axios and a Async function to send multiple requests
// Get Star Wars data from API
const getStarWarsData = async (placeHolder, lookFor) => {
    try {
        // get api data
        // -----------------------------------------------------------------
        const res = await axios.get(`https://swapi.tech/api/${lookFor}/`);
        let results =  res.data.results;
        // -----------------------------------------------------------------

        for (let result of results) {
            let newLI = document.createElement('LI');
            newLI.innerText = result.name;
            placeHolder.append(newLI);
        }

        const person = displayData(lookFor, 4);
        console.log(`Person is: ${person.properties}`);
        // let newLI2 = document.createElement('LI');
        // newLI2.innerText = ``;
        // disp.append(newLI2);
    } catch (e) {
        placeHolder.innerText = `ERROR!!!, ${e}`;
    }
};


const displayData = async (lookFor, id) => {
    const res = await axios.get(`https://swapi.tech/api/${lookFor}/${id}/`);
    console.log(res.data.result.properties);
    return res.data.result;
}


// run each function
lookFor = 'people';
getStarWarsData(swNames, lookFor);
