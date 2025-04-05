// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// define the container (the [div] element with the ID contain)
const container = document.querySelector('#contain');
// define the base url for the images
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    // we want each [img] to display inside a [div] so the
    // pokemon number [label] can be displayed underneath
    // so we define the variable [pokemon] which represents the [div] element
    const pokemon = document.createElement('div');


    // create an empty [span] element to put the [label] into
    const label = document.createElement('span');


    // add the text "#[i]" inside the label
    // i is the current number inside the [for] loop
    // it represents the current pokemon [img] number
    label.innerText = `#${i}`;


    // create a new empty [img] element
    const newImg = document.createElement('img');


    // assign the base url to the [newImg] variable
    // add the number(i).png to the end
    // which completes the full [url] for the image link
    newImg.src = `${baseURL}${i}.png`


    // create the [pokemon] class and assign it to the [div] {pokemon}
    // the [style] for this class is defined in the app.css
    // this styling allows us to display the pokemon number underneath the image
    pokemon.classList.add('pokemon');


    // append the [newImg] to the [pokemon] div
    pokemon.appendChild(newImg);


    // append the [label] (pokemon image number) to the [pokemon] div
    pokemon.appendChild(label);


    // add the pokemon [div] tho the container [div]
    container.appendChild(pokemon)
}
