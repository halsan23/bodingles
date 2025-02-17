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
    selHeader.innerHTML = '';
    selList.innerHTML = '';
    dispHeader.innerHTML = '';
    dispItem.innerHTML = '';
    let capCat = firstLetterUp(category);

    instructions.innerText = `Select one of the Star Wars ${capCat} for details:`;

    let newLI = document.createElement('LI');
    newLI.innerHTML = `<h6>${capCat}</h6><hr>`
    selHeader.append(newLI)

    try {
        let res2 = await axios.get(`https://swapi.dev/api/${category}/`);
        let result2 = res2.data.results;

        for (let i = 1; i < result2.length + 1; i++) {
            let itemSel = await axios.get(`https://swapi.dev/api/${category}/${i}/`);
            let itemName = itemSel.data.name;
            let newLI = document.createElement('LI');
            newLI.innerText = itemName;
            selList.append(newLI);
        }

        selList.onclick = (event) => {
            if (event.target.tagName === 'LI') {
                selectedItem = event.target.textContent
                displayDetails(category, selectedItem);
            }
        };
    } catch (e) {
        errorDisplay();
    }
}

const displayDetails = async (category, selectedItem) => {
    dispHeader.innerHTML = '';
    dispItem.innerHTML = '';
    let capItem = firstLetterUp(selectedItem);

    instructions.innerText = `Details for ${capItem}:`;

    let newLI = document.createElement('LI');
    newLI.innerHTML = `<h6>${capItem}</h6><hr>`;
    dispHeader.append(newLI);

    const detailSel = await axios.get(`https://swapi.dev/api/${category}/?search=${selectedItem}`);
    let output = detailSel.data.results[0];
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

const person = async (data) => {
    let personData = [];
    if (data.species.length == 0) {
        personData.push('Species: Human');
    } else {
        const res = await axios.get(data.species[0]);
        let speciesType = res.data.name;
        personData.push(`Species: ${speciesType}`);
    }
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
    for (let i = 0; i < personData.length; i++) {
        let newLI2 = document.createElement('LI');
        newLI2.innerText = personData[i];
        dispItem.append(newLI2);
    }
}

const planet = async (data) => {
    let planetData = [];
    planetData.push(`Diameter: ${data.diameter}km`);
    planetData.push(`Gravity: ${data.gravity} Gs`);
    planetData.push(`Orbital Period: ${data.orbital_period} Earth Days`);
    planetData.push(`Rotational Period: ${data.rotation_period} Earth Hours`);
    planetData.push(`Climate: ${firstLetterUp(data.climate)}`);
    planetData.push(`Surface Water: ${data.surface_water}%`);
    planetData.push(`Terrain: ${firstLetterUp(data.terrain)}`);
    planetData.push(`Average Population: ${data.population}`);
    for (let i = 0; i < planetData.length; i++) {
        let newLI2 = document.createElement('LI');
        newLI2.innerText = planetData[i];
        dispItem.append(newLI2);
    }
}

const species = async (data) => {
    let speciesData = [];
    speciesData.push(`Designation: ${data.designation}`);
    speciesData.push(`Average Lifespan: ${data.average_lifespan} Earth Years`);
    speciesData.push(`Average Height: ${data.average_height}cm`);
    speciesData.push(`Language: ${data.language}`);
    for (let i = 0; i < speciesData.length; i++) {
        let newLI2 = document.createElement('LI');
        newLI2.innerText = speciesData[i];
        dispItem.append(newLI2);
    }
}

// function to Capitalize
function firstLetterUp(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to LowerCase
function firstLetterDn(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

const errorDisplay = (e) => {
    error.innerHTML = '<span class="error">Error Loading Data | Please Refresh the Page!!</span>'
    console.log(`ERROR!!!, ${e}`);
}

// Initial Set
dispCategs();
