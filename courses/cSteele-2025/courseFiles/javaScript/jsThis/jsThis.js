// ================================================================================
// DEFINE THE RANDOM COLOR FUNCTION
// ================================================================================

// function to return a foreground & background color
// use random RGB colors for the background color
// use either white of black for the foreground color
const makeRandColor = () => {

   // get random r/g/b values
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);
   // assign random background rgb color
   const bc = `rgb(${r}, ${g}, ${b})`;

   // add the current background color values to determine overall darkness
   const numbs = r + g + b;


   // assign foreground color a default of black
   let fc = '#000000';
   // if the overall darkness is lees that 275
   // set foreground color to white
   if (numbs < 350) {
       fc = '#ffffff';
   }

   // return the new foreground / background colors
   return [fc, bc];
}


// ================================================================================
// Button Boxes - change colors
// ================================================================================

// define the button objects & click event
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
   button.addEventListener('click', colorize)
}

// define the span objects & click event
const items = document.querySelectorAll('.meToo');
for (let item of items) {
   item.addEventListener('click', colorize)
}

function colorize() {
   const [fc, bc] = makeRandColor();
   this.style.color = fc;
   this.style.backgroundColor = bc;
}
