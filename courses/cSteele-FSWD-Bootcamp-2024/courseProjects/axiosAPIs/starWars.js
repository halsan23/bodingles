// Star Wars API

// Set Base Variables
const categories = document.getElementById('categories');
const selHeader = document.getElementById('selHeader');
const selList = document.getElementById('selList');
const dispHeader = document.getElementById('dispHeader');
const dispItem = document.getElementById('dispItem');
const error = document.getElementById('error');

// Display the Main Categories
async function dispCategs() {
    instructions.innerText = 'Select a Main Category Item to begin:';
    try {
        // Get the data from the API
        let res = await axios.get(`https://swapi.dev/api/`);
        let result = Object.keys(res.data);

        // List the menu items
        for (let item of result) {
            if (item != 'films' && item != 'vehicles' && item != 'starships') {
                let newLI = document.createElement('LI');
                let listItem = firstLetterUp(item);
                newLI.innerText = listItem;
                categories.append(newLI);
            }
        }

        // Add click event for the menu items
        categories.onclick = (event) => {
            if (event.target.tagName === 'LI') {
                let cat = event.target.textContent;
                let category = firstLetterDn(cat)
                selectDisplay(category);
            }
        };

    // error display
    } catch (e) {
        errorDisplay();
    }
}

// Display Specific Categories
const selectDisplay = async (category) => {

    // reset output displays
    selHeader.innerHTML = '';
    selList.innerHTML = '';
    dispHeader.innerHTML = '';
    dispItem.innerHTML = '';

    // Update the Instructions
    let capitolCateg = firstLetterUp(category);
    instructions.innerText = `Select one of the Star Wars ${capitolCateg} for details:`;

    // display the Column Header
    let newLI = document.createElement('LI');
    newLI.innerHTML = `<h6>${capitolCateg}</h6><hr>`
    selHeader.append(newLI)

    // Build the Selection List
    try {
        // get the data
        let res2 = await axios.get(`https://swapi.dev/api/${category}/`);
        let result2 = res2.data.results;

        // build the list
        for (let i = 1; i < result2.length + 1; i++) {
            let itemSel = await axios.get(`https://swapi.dev/api/${category}/${i}/`);
            let itemName = itemSel.data.name;
            let newLI = document.createElement('LI');
            newLI.innerText = itemName;
            selList.append(newLI);
        }

        // add click event for list items
        selList.onclick = (event) => {
            if (event.target.tagName === 'LI') {
                selectedItem = event.target.textContent
                displayDetails(category, selectedItem);
            }
        };

    // error display
    } catch (e) {
        errorDisplay();
    }
}

// Display the details of selected item
const displayDetails = async (category, selectedItem) => {

    // reset output displays
    dispHeader.innerHTML = '';
    dispItem.innerHTML = '';

    // Update the Instructions
    let capitolItem = firstLetterUp(selectedItem);
    instructions.innerText = `Details for ${capitolItem}:`;

    // display the Column Header
    let newLI = document.createElement('LI');
    newLI.innerHTML = `<h6>${capitolItem}</h6><hr>`;
    dispHeader.append(newLI);

    // get the data
    const detailSel = await axios.get(`https://swapi.dev/api/${category}/?search=${selectedItem}`);
    let output = detailSel.data.results[0];

    // display the results
    if (category === 'people') {
        person(output);
    }
    if (category === 'planets') {
        planet(output);
    }
    if (category === 'species') {
        species(output)
    }
}

// display person details
const person = async (data) => {

    // reset person array
    let personData = [];

    // special handling for "Human" species
    // (API had empty "Human" species field)
    if (data.species.length == 0) {
        personData.push('Species: Human');
    } else {
        const res = await axios.get(data.species[0]);
        let speciesType = res.data.name;
        personData.push(`Species: ${speciesType}`);
    }

    // build the person array
    personData.push(`Gender: ${firstLetterUp(data.gender)}`);
    personData.push(`Birthyear: ${data.birth_year}`);
    personData.push(`Height: ${data.height}cm`);
    personData.push(`Weight: ${data.mass}kg`);
    personData.push(`Skin Color: ${firstLetterUp(data.skin_color)}`);
    personData.push(`Hair Color: ${firstLetterUp(data.hair_color)}`);
    personData.push(`Eye Color: ${firstLetterUp(data.eye_color)}`);
    const res = await axios.get(data.homeworld);
    let home = res.data.name;
    personData.push(`Homeworld: ${home}`);

    // display the person details
    for (let i = 0; i < personData.length; i++) {
        let newLI2 = document.createElement('LI');
        newLI2.innerText = personData[i];
        dispItem.append(newLI2);
    }
}

// display planet details
const planet = async (data) => {

    // reset planet array
    let planetData = [];

    // build the planet array
    planetData.push(`Diameter: ${data.diameter}km`);
    planetData.push(`Gravity: ${data.gravity} Gs`);
    planetData.push(`Orbital Period: ${data.orbital_period} Earth Days`);
    planetData.push(`Rotational Period: ${data.rotation_period} Earth Hours`);
    planetData.push(`Climate: ${firstLetterUp(data.climate)}`);
    planetData.push(`Surface Water: ${data.surface_water}%`);
    planetData.push(`Terrain: ${firstLetterUp(data.terrain)}`);
    planetData.push(`Average Population: ${data.population}`);

    // display the planet details
    for (let i = 0; i < planetData.length; i++) {
        let newLI2 = document.createElement('LI');
        newLI2.innerText = planetData[i];
        dispItem.append(newLI2);
    }
}

// display species details
const species = async (data) => {

    // reset species array
    let speciesData = [];

    // build the species array
    speciesData.push(`Designation: ${data.designation}`);
    speciesData.push(`Average Lifespan: ${data.average_lifespan} Earth Years`);
    speciesData.push(`Average Height: ${data.average_height}cm`);
    speciesData.push(`Language: ${data.language}`);

    // display the species details
    for (let i = 0; i < speciesData.length; i++) {
        let newLI2 = document.createElement('LI');
        newLI2.innerText = speciesData[i];
        dispItem.append(newLI2);
    }
}

// function to Capitalize first letter
function firstLetterUp(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to LowerCase first letter
function firstLetterDn(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

// error display
const errorDisplay = (e) => {
    error.innerHTML = '<span class="error">Error Loading Data | Please Refresh the Page!!</span>'
    console.log(`ERROR!!!, ${e}`);
}

// Initial Set
dispCategs();
