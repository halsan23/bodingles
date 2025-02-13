
const categories = document.getElementById('categories');
const specific = document.getElementById('specific');
const display = document.getElementById('display');
let htmlPlace = '';
let lookFor = '';

const dispCategs = async (htmlPlace) => {
    try {
        const res = await axios.get(`https://swapi.tech/api/`);
        const result = Object.keys(res.data.result);

        for (let item of result) {
            if (item != 'films') {
                let newLI = document.createElement('LI');
                newLI.innerText = item.charAt(0).toUpperCase() + item.slice(1);
                htmlPlace.append(newLI);
            }
        }

        categories.addEventListener('click', function(event) {
            if(event.target.tagName === 'LI') {
                dispSelect(event.target.textContent);
            }
        });
    } catch (e) {
        console.log(`ERROR!!!, ${e}`);
    }
}


const dispSelect = async (item) => {
    try {
        const res = await axios.get(`https://swapi.tech/api/${item}/`);
        const result2 = Object.keys(res.data.results);

        for (let i = 1; i < result2.length + 1; i++) {
            const itemSel = await axios.get(`https://swapi.tech/api/${item}/${i}/`);
            let selName = itemSel.data.result.properties.name;
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
