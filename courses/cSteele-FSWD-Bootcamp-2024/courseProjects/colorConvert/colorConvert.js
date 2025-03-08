// Color Convertor
// March 2025
// badDoggy
//  ==========================================================


// assign variables
// form1
const form1 = document.querySelector('#form1');
const colType = document.querySelector('#colorType');
const butt1 = document.querySelector('#butt1');

// form2
const form2 = document.querySelector('#form2');
const form2Label1 = document.querySelector('#form2Label1');
let colVal = document.querySelector('#colorValue');
const form2Label2 = document.querySelector('#form2Label2');
const butt2 = document.querySelector('#butt2');

// Instructions
let instructions = document.querySelector('.instructions');
let instructions2 = document.querySelector('.instructions2');

// Reset Button
const resetButt = document.querySelector('#reset');

// Output Windows
const mainWindow = document.querySelector('#mainWindow');
const mainLeft = document.querySelector('.mainLeft');
const mainRight = document.querySelector('.mainRight');

// color display columns for adding a border
const colorDisplayL = document.querySelector('#colorDisplayL');
const colorDisplayR = document.querySelector('#colorDisplayR');


// FUNCTIONS
//  ==========================================================

// RGB Routine
// function to convert rgb to hex and hsl
function rgbConv() {
   //  remove button 1, show form2 and button 2
   form1.hidden = true;
   butt1.hidden = true;
   resetButt.hidden = false
   form2.hidden = false;
   butt2.hidden = false;

   // format text input for rgb
   form2Label1.value = 'Value:  rgb(';
   form2Label1.innerText = form2Label1.value;
   form2Label2.value = ')';
   form2Label2.innerText = form2Label2.value;
   colVal.placeholder = '255,255,255';

   // event listener for color value submit
   form2.addEventListener('submit', function(evt) {
      evt.preventDefault();

      // sets default rgb value
      if (colVal.value === '') {
         colVal.value = '255, 255, 255';
      }

      // break rgb input string down into individual numbers
      let numbers = colVal.value.split(",")
      let r = numbers[0]; g = numbers[1]; b = numbers[2];
      r = Number(r); g = Number(g); b = Number(b);

      // display the results
      form2Label1.innerText = `Displaying results for rgb(`;
      outputDisplay(r, g, b);

	});
}

// reset - set defaults
function reset() {
   form1.hidden = false;
   butt1.hidden = false;

   resetButt.hidden = true;
   form2.hidden = true;
   butt2.hidden = true;

   colVal.value = '';

   instructions.innerText = 'Select a known color type for processing.';
   instructions2.innerText = '';

   mainLeft.style.display = 'none';
   mainRight.style.display = 'none';
}

// Output Display
function outputDisplay (r, g, b) {
   // create new color object
   const rgbColor = new RgbConvert(r, g, b);

   // show color headings
   mainLeft.style.display = 'block';
   mainRight.style.display = 'block';

   // output conversion results
   col1.style.backgroundColor = rgbColor.rgb();
   val1.innerText = rgbColor.rgb();
   col2.style.backgroundColor = `#${rgbColor.hex()}`;
   val2.innerText = `hex #${rgbColor.hex()}`;
   col3.style.backgroundColor = `hsl(${rgbColor.hsl()})`;
   val3.innerText = `hsl(${rgbColor.hsl()})`;

   // generate opposite hsl color
   const oppHsl = rgbColor.opposite();

   // generate new opposite rgb object
   // new object call is in the convHslRgb function
   const myOppRgb = convHslRgb(oppHsl);

   // display border around color boxes
   colorDisplayL.style.border = `3px solid ${rgbColor.opposite()}`;
   colorDisplayR.style.border = `3px solid ${myOppRgb.opposite()}`;

   // output opposite results
   oppcol1.style.backgroundColor = myOppRgb.rgb();
   oppval1.innerText = myOppRgb.rgb();
   oppcol2.style.backgroundColor = `#${myOppRgb.hex()}`;
   oppval2.innerText = `hex #${myOppRgb.hex()}`;
   oppcol3.style.backgroundColor = rgbColor.opposite();
   oppval3.innerText = rgbColor.opposite();
}


//  ==========================================================
// set defaults
reset();


// RUN THE APP
//  ==========================================================

// set click handler for color type submit
form1.addEventListener('submit', function(evt) {
   evt.preventDefault();

   instructions.innerText = 'Enter the known RGB values in the format: 255,255,255';
   instructions2.innerText = '!Warning! You MUST enter individual rgb color values between 0 and 255';

   // trap for color type choice
   if (colType.value = 'rgb') {
      rgbConv();
   }
});


// set click handler for reset
resetButt.addEventListener('click', function(evt) {
   evt.preventDefault();

   reset();
});