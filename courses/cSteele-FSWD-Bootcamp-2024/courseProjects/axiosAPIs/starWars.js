// Star Wars API

// Set Base Variables
const categories = document.getElementById('categories');
const selHeader = document.getElementById('selHeader');
const dispHeader = document.getElementById('dispHeader');
const selList = document.getElementById('selList');
const dispItem = document.getElementById('dispItem');
const instructions = document.getElementById('instructions');

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
                newLI.innerText = item.charAt(0).toUpperCase() + item.slice(1);
                category.append(newLI);
            }
        }

        // add click events for menu LI's
        categories.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                // delete LI's & display new data
                selHeader.innerHTML = '';
                selList.innerHTML = '';
                let text = event.target.textContent
                selectedItem = text.charAt(0).toLowerCase() + text.slice(1);
                selectDisplay(selectedItem);
            }
        });
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}

// Display Specific Categories
const selectDisplay = async (selectedItem) => {
    try {
        let selectedCat = selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1);

        // Change Instructions Message
        instructions.innerText = `Select one of the Star Wars ${selectedCat} for specific details`;

        // delete any existing header & add new header info
        let newLI = document.createElement('LI');
        newLI.innerHTML = `<h6>${selectedCat}</h6><hr>`;
        selHeader.append(newLI);

        // create and display specific items
        let res = await axios.get(`https://swapi.dev/api/${selectedItem}/`);
        let results = res.data.results;

        for (let i = 1; i < results.length + 1; i++) {
            const itemSel = await axios.get(`https://swapi.dev/api/${selectedItem}/${i}/`);
            let selName = itemSel.data.name;
            let newLI = document.createElement('LI');
            newLI.innerText = selName.charAt(0).toUpperCase() + selName.slice(1);
            selList.append(newLI);
        }

        // add click events for menu LI's
        selList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                let text = event.target.textContent
                console.log(`text: ${text}`);

                // delete LI's & display new data
                dispHeader.innerHTML = '';
                dispItem.innerHTML = '';
                selectedItem = '';

                let newLI = document.createElement('LI');
                newLI.innerText = text.charAt(0).toUpperCase() + text.slice(1);
                console.log(`newLI: ${newLI}`);
                dispHeader.innerHTML = `<h6>${newLI}</h6>`;

                newLI.innerText = text.charAt(0).toLowerCase() + text.slice(1);
                console.log(`newLI2: ${newLI}`);
                dispItem.append(newLI);

                // selectDisplay(selectedItem);
            }
        });
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}

const reset = () => {
    categories.innerText = '';
    selHeader.innerHTML = '';
    dispHeader.innerHTML = '';
    selList.innerHTML = '';
    dispItem.innerHTML = '';
    instructions.innerText = 'Select a Main Category Item to begin';
    dispCategs(categories);
}

// Initial Set
instructions.innerText = 'Select a Main Category Item to begin';
dispCategs(categories);
