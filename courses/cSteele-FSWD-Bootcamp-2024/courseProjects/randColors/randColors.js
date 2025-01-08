// ================================================================================
// Generate random colors
// ================================================================================


// ================================================================================
// DEFINE THE RANDOM COLOR FUNCTIONS
// ================================================================================

// function to return ONE random "hex" color
const colorPick = () => {
    // define the possible choices for individual color values
    const colorNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    // set the basic hex color format
    let color = '#';

     // run loop to pick 6 individual color values
    for (let i = 0; i < 6; i++) {

        // pick one single value from the 16 possibilities
        const thisColorNum = Math.floor(Math.random() * 15);
        const pickedColorNum = colorNums[thisColorNum];

        // add the ned color value to the end of the current color
        // we repeat 6 times to build a full hex color value
        color = color + pickedColorNum;
    }
    // return the final random hex color
    return color;
}

// function to return a foreground & background RGB color
// use random RGB colors for the background color
// use either white of black for the foreground color
const makeRandColor = () => {

    // get random r/g/b values
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    // assign foreground color a default of black
    let fc = '#000000';
    // assign random background rgb color
    const bc = `rgb(${r}, ${g}, ${b})`;

    // add the current background color values to determine overall darkness
    const numbs = r + g + b;

    // if the overall darkness is lees that 275
    // set foreground color to white
    if (numbs < 350) {
        fc = '#ffffff';
    }

    // return the new foreground / background colors
    return [fc, bc];
}


// ================================================================================
// button that changes page background color when clicked
//      changes foreground color to white if background is dark
// ================================================================================

// assigning the variables
const button = document.querySelector('button');

// the two heading tags that change foreground color
const head4 = document.querySelector('h4');
const head6 = document.querySelector('h6');
const subH6 = document.querySelector('#subH6');

// define addEventListener
//     Event type is "Click"
button.addEventListener('click', function () {

    // run the makeRandomColor function to get our colors
    const [foreColor, backColor] = makeRandColor();

    // assign the foreground colors to our two heading elements
    head4.style.color = foreColor;
    head6.style.color = foreColor;
    subH6.style.color = foreColor;

    // set the new random  background color
    document.body.style.backgroundColor = backColor;

    // update the text for the Heading 6 element
    head6.innerText = `New Background Color is: ${backColor}`;
})


// ================================================================================
// Button Boxes - change colors
// ================================================================================

// define the button objects
const buttons = document.querySelectorAll('.butt');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    const [fc, bc] = makeRandColor();
    this.style.backgroundColor = bc;
    this.style.color = fc;
}


// ================================================================================
// Rainbow Text - random text colors
// ================================================================================

// Create the text for the rainbow effect
const text = 'Rainbow Text';
const letters = text.split("");

// target the paragraph with the ID of Rainbow
const para = document.querySelector('#rainbow');

// run the loop for each letter in the original text
for (i = 0; i < letters.length; i++) {

    // if the current letter is NOT a 'space', run the
    // colorPick function to get a random hex color value
    if (letters[i] != ' ') {
        color = colorPick();
    } else {
        color = '       ';
    }

    // add a new [div] element to the exiting [p] element (id = #rainbow)
    const newDiv = document.createElement('div');

    // add a label to display the hex color
    // only if the current letter is NOT a space
    const label = document.createElement('span');
        label.innerText = color;

    // create the [newDiv] class and assign it to the [div] {newDiv}
    // create the [label] class and assign it to the [label] {label}
    // the [style] for this class is defined in the app.css
    // this styling allows us to display the hex color number underneath the text
    newDiv.classList.add('newDiv');
    label.classList.add('label');


    // add each individual letter of the text to the [span]
    //     and set the random hex color
    newDiv.append(letters[i]);
    newDiv.style.color = color;

    // append the [label] (hex color number) to the [newDiv] div
    newDiv.appendChild(label);

    // append the new "colored" letter to the #rainbow [p] element
    para.append(newDiv);
}
