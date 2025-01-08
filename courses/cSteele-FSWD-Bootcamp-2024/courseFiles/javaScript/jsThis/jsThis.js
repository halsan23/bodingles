// ================================================================================
// DEFINE THE RANDOM COLOR FUNCTION
// ================================================================================

// function to return a foreground & background RGB color
// use random RGB colors for the background color
// use either white of black for the foreground color
const makeRandColor = () => {

   // assign random background rgb color
   let r = Math.floor(Math.random() * 255);
   let g = Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);
   const bc = `rgb(${r}, ${g}, ${b})`;

   // assign random background rgb color
   r = Math.floor(Math.random() * 255);
   g = Math.floor(Math.random() * 255);
   b = Math.floor(Math.random() * 255);
   const fc = `rgb(${r}, ${g}, ${b})`;

   // return the new foreground / background colors
   return [fc, bc];
}


// ================================================================================
// Button Boxes - change colors
// ================================================================================

// define the button objects
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
   button.addEventListener('click', colorize)
}

const items = document.querySelectorAll('.meToo');
for (let item of items) {
   item.addEventListener('click', colorize)
}

function colorize() {
   const [fc, bc] = makeRandColor();
   this.style.color = fc;
   this.style.backgroundColor = bc;
}
