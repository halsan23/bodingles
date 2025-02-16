// Star Wars API

// Set Base Variables
const categories = document.getElementById('categories');
const selHeader = document.getElementById('selHeader');
const selList = document.getElementById('selList');
const dispHeader = document.getElementById('dispHeader');
const dispItem = document.getElementById('dispItem');
let output = [];

async function dispCategs() {
    try {
        let res = await axios.get(`https://swapi.dev/api/`);
        let result = Object.keys(res.data);

        for (let item of result) {
            if (item != 'films' && item != 'vehicles' && item != 'starships') {
                let newLI = document.createElement('LI');
                newLI.innerText = item;
                categories.append(newLI);
            }
        }

        categories.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                let category = event.target.textContent;
                selectDisplay(category);
            }
        });
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}

// Display Specific Categories
const selectDisplay = async (category) => {
    selList.innerHTML = '';
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

        output = [];
        output[0] = category;
        category = '';

        selList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                output[1] = '';
                selectedItem = event.target.textContent
                displayDetails(selectedItem);
            }
        });
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}

const displayDetails = async (selectedItem) => {
    output[1] = selectedItem;
    console.log(`Cat: ${output[0]}`)
    console.log(`Sel: ${output[1]}`)
    console.log(`Output: ${output}`)
    output = [];

    dispItem.innerHTML = '';

    // const detailSel = await axios.get(`https://swapi.dev/api/${data[0]}/?search=${data[1]}`);

    // output = detailSel.data.results[0];
    // dispHeader.append(newLI);
}

// Initial Set
    instructions.innerText = 'Select a Main Category Item to begin';
    dispCategs();
