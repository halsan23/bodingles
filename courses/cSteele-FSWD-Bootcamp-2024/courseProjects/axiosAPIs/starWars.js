// Star Wars API

// Set Base Variables
const instructions = document.getElementById('instructions');
const butt = document.getElementById('butt');
const categories = document.getElementById('categories');
const selHeader = document.getElementById('selHeader');
const dispHeader = document.getElementById('dispHeader');
const specific = document.getElementById('specific');
const display = document.getElementById('display');

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
                specific.innerHTML = '';
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
const selectDisplay = async (item) => {
    try {
        let itemText = item.charAt(0).toUpperCase() + item.slice(1);

        // Change Instructions Message
        instructions.innerText = `Select one of the Star Wars ${itemText} for specific details`;
        // delete any existing header & add new header info
        selHeader.innerHTML = '';
        let newLI = document.createElement('LI');
        newLI.innerHTML = `<h6>${itemText}</h6><hr>`;
        selHeader.append(newLI);

        // create and display specific items
        const res = await axios.get(`https://swapi.dev/api/${item}/`);
        const results = res.data.results;

        for (let i = 1; i < results.length + 1; i++) {
            const itemSel = await axios.get(`https://swapi.dev/api/${item}/${i}/`);
            let selName = itemSel.data.name;
            let newLI = document.createElement('LI');
            newLI.innerText = selName.charAt(0).toUpperCase() + selName.slice(1);
            specific.append(newLI);
        }
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}

const reset = () => {
    instructions.innerText = 'Select a Main Category Item to begin';
    categories.innerHTML = '';
    specific.innerHTML = '';
    dispCategs(categories);
    console.log(specific);
}

butt.addEventListener('click', function() {
    reset();
})

// Initial Set
instructions.innerText = 'Select a Main Category Item to begin';
dispCategs(categories);
