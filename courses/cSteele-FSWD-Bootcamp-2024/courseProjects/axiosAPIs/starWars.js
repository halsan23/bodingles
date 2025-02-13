const categories = document.getElementById('categories');
const specific = document.getElementById('specific');
const display = document.getElementById('display');
let htmlPlace = '';
let lookFor = '';

const dispCategs = async (htmlPlace) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/`);
        const result = Object.keys(res.data);

        for (let item of result) {
            let newLI = document.createElement('LI');
            newLI.innerText = item.charAt(0).toUpperCase() + item.slice(1);
            htmlPlace.append(newLI);
        }

        categories.addEventListener('click', function(event) {
            if(event.target.tagName === 'LI') {
                specific.innerHTML = '';
                let text = event.target.textContent
                selectedItem = text.charAt(0).toLowerCase() + text.slice(1);
                dispSelect(selectedItem);
            }
        });
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}


const dispSelect = async (item) => {
    try {
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

// run each function
dispCategs(categories);
