// Star Wars API

// Set Base Variables
const categories = document.getElementById('categories');
const selHeader = document.getElementById('selHeader');
const dispHeader = document.getElementById('dispHeader');
const selList = document.getElementById('selList');
const dispItem = document.getElementById('dispItem');

// Display Main Categories
const dispCategs = async (category) => {
    try {
        // get category names
        const res = await axios.get(`https://swapi.dev/api/`);
        const result = Object.keys(res.data);

        // create new list items (exclude films, vehicles, & starships)
        for (let item of result) {
            if (item != 'films' && item != 'vehicles' && item != 'starships') {
                let newLI = document.createElement('LI');
                newLI.innerText = item;
                category.append(newLI);
            }
        }

        // add click events for menu LI's
        categories.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                let selectedCat = '';
                selectedCat = event.target.textContent
                selectDisplay(selectedCat);
            }
        });
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}

// Display Specific Categories
const selectDisplay = async (selectedCat) => {
    try {
        // create and display specific items
        let res2 = await axios.get(`https://swapi.dev/api/${selectedCat}/`);
        let results2 = res2.data.results;

        for (let i = 1; i < results2.length + 1; i++) {
            const itemSel = await axios.get(`https://swapi.dev/api/${selectedCat}/${i}/`);
            let newLI = document.createElement('LI');
            newLI.innerText = itemSel.data.name;
            selList.append(newLI);
        }

        // add click events for menu LI's
        selList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                // delete LI's & display new data
                let selectedItem = '';
                selectedItem = event.target.textContent
                displayDetails(selectedCat, selectedItem);
            }
        });
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}

const displayDetails = async (selectedCat, selectedItem) => {
    console.log(`Category: ${selectedCat}`);
    console.log(`Selected Item: ${selectedItem}`);
    // const detailSel = await axios.get(`https://swapi.dev/api/${data[0]}/?search=${data[1]}`);

    // output = detailSel.data.results[0];
    // dispHeader.append(newLI);
}

// Initial Set
    instructions.innerText = 'Select a Main Category Item to begin';
    dispCategs(categories);
