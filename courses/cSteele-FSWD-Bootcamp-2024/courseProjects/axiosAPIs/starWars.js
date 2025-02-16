// Star Wars API

// Set Base Variables
const categories = document.getElementById('categories');
const selHeader = document.getElementById('selHeader');
const selList = document.getElementById('selList');
const dispHeader = document.getElementById('dispHeader');
const dispItem = document.getElementById('dispItem');

async function dispCategs() {
    instructions.innerText = 'Select a Main Category Item to begin:';
    try {
        let res = await axios.get(`https://swapi.dev/api/`);
        let result = Object.keys(res.data);

        for (let item of result) {
            if (item != 'films' && item != 'vehicles' && item != 'starships') {
                let newLI = document.createElement('LI');
                let listItem = firstLetterUp(item);
                newLI.innerText = listItem;
                categories.append(newLI);
            }
        }

        categories.onclick = (event) => {
            if (event.target.tagName === 'LI') {
                let cat = event.target.textContent;
                let category = firstLetterDn(cat)
                selectDisplay(category);
            }
        };
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
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
        console.log(`ERROR!!!, ${e}`);
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

    let newLI2 = document.createElement('LI');
    newLI2.innerText = `${capItem} Details`;
    dispItem.append(newLI2);
}

// function to capitalize
function firstLetterUp(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to LowerCase
function firstLetterDn(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

// Initial Set
dispCategs();
