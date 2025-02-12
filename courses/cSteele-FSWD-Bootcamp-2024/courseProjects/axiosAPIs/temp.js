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
        // axios method
        // -----------------------------------------------------------------
        const res = await axios.get(`https://swapi.tech/api/${lookFor}/`);
        let result =  res.data.results;
        // -----------------------------------------------------------------

        // fetch method
        // -----------------------------------------------------------------
        // const res = await fetch(`https://swapi.tech/api/people/`);
        // const resData = await res.json();
        // let people = resData.results;
        // -----------------------------------------------------------------

        for (let i = 0; i < result.length; i++) {
            let newLI = document.createElement('LI');
            newLI.innerText = result[i].name;
            placeHolder.append(newLI);
            // if (lookFor === 'people' && i == 5) {
            //         displayResults(lookFor, i);
            //     }
        }
    } catch (e) {
        placeHolder.innerText = `ERROR!!!, ${e}`;
    }
};


// const displayResults = async (placeHolder, lookFor, id) => {
//     const res2 = await axios.get(`https://swapi.tech/api/${lookFor}/`);
//     const result2 = res2.data.result.properties;

//     const keys = Object.keys(result2);
//     // console.log(keys);
//     const values = Object.values(result2);
//     // console.log(values);

//     for (let i = 0; i < keys.length; i++) {
//         console.log(keys[i]);
//         console.log(values[i]);
//         if (keys[i] != 'url' && keys[i] != 'created' && keys[i] != 'edited' && keys[i] != 'homeworld') {
//             let newLI2 = document.createElement('LI');
//             newLI2.innerText = `${keys[i]}: ${values[i]}`;
//             disp.append(newLI2);
//         }
//     }
// }


// run each function
placeHolder = swNames;
lookFor = 'people';
getStarWarsData(placeHolder, lookFor);
// placeHolder = swPlanets;
// lookFor = 'planets';
// getStarWarsData(placeHolder, lookFor, uid);
// placeHolder = swShips;
// lookFor = 'starships';
// getStarWarsData(placeHolder, lookFor, uid);

