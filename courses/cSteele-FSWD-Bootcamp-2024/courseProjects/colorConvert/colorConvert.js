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
const instructions = document.querySelector('.instructions');
const instructions2 = document.querySelector('.instructions2');
const instructions3 = document.querySelector('.instructions3');
const instructions4 = document.querySelector('.instructions4');
const instructions5 = document.querySelector('.instructions5');

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

   colVal.value = '';
   colType.value = '';

   // set info display
   instructions.innerText = 'Enter the known RGB values in the format: 255,255,255';
   instructions2.innerText = '!Warning! You MUST enter individual rgb color values between 0 and 255';

   // format text input for rgb
   form2Label1.innerText = 'Value:  rgb(';
   form2Label2.innerText = ')';
   colVal.placeholder = '255,255,255';

   // event listener for color value submit
   form2.addEventListener('submit', function(evt) {
      evt.preventDefault();

      // sets default rgb value
      if (colVal.value === '') {
         colVal.value = '255, 255, 255';
      }

      // // display the results
      form2Label1.innerText = `Results for rgb(`;

      // convert string input to numbers
      // this function also builds the color class
      const rgb = strToNums(colVal.value);

      // outputs the new color object
      outputDisplay(rgb);

	});
}

// HEX Routine
// function to convert hex to rgb and hsl
function hexConv() {
   //  remove button 1, show form2 and button 2
   form1.hidden = true;
   butt1.hidden = true;
   resetButt.hidden = false
   form2.hidden = false;
   butt2.hidden = false;

   colVal.value = '';
   colType.value = '';

   // set info display
   instructions.innerText = 'Enter the known HEX values in the format: ffffff';
   instructions2.innerText = '!Warning! You MUST enter individual rgb color values between 0 and f';

   // format text input for rgb
   form2Label1.innerText = 'Value:  #';
   form2Label2.innerText = '';
   colVal.placeholder = 'ffffff';

   // event listener for color value submit
   form2.addEventListener('submit', function(evt) {
      evt.preventDefault();

      // // sets default rgb value
      if (colVal.value === '') {
         colVal.value = 'ffffff';
      }

      // create the hex color object
      const hex = hexToRgb(colVal.value);

      // outputs the new color object
      outputDisplay(hex);
	});
}

// RGB Routine
// function to convert rgb to hex and hsl
function hslConv() {
   //  remove button 1, show form2 and button 2
   form1.hidden = true;
   butt1.hidden = true;
   resetButt.hidden = false
   form2.hidden = false;
   butt2.hidden = false;

   colVal.value = '';
   colType.value = '';

   // set info display
   instructions.innerText = 'Enter the known HSL values in the format: 180,50,50';
   instructions2.innerText = '!Warning! You MUST enter individual hsl color values properly:';
   instructions3.innerText = 'Hue value must be between 0 and 360';
   instructions4.innerText = 'Saturation and Luminous values must be between 0% and 100%';
   instructions5.innerText = '!DO NOT ENTER THE % SIGNS!';

   // format text input for rgb
   form2Label1.innerText = 'Value: hsl(';
   form2Label2.innerText = ')';
   colVal.placeholder = '0,0,100';

   // event listener for color value submit
   form2.addEventListener('submit', function(evt) {
      evt.preventDefault();

      // sets default rgb value
      if (colVal.value === '') {
         colVal.value = '0, 0, 100';
      }

      // create string need for hsl processing
      colVal.value = `hsl(${colVal.value})`

      // create hsl object
      const hsl = hslStrip(colVal.value);

      // display the results
      form2Label1.innerText = 'Results for hsl(';
      outputDisplay(hsl);
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
   colType.value = 'rgb';

   instructions.innerText = 'Select a known color type for processing.';
   instructions2.innerText = '';

   form2Label1.innerText = '';
   form2Label2.innerText = '';
   colVal.placeholder = '';

   mainLeft.style.display = 'none';
   mainRight.style.display = 'none';
}

// Output Display
function outputDisplay (color) {
   // show color headings
   mainLeft.style.display = 'block';
   mainRight.style.display = 'block';

   // output conversion results
   col1.style.backgroundColor = color.rgb();
   val1.innerText = color.rgb();
   col2.style.backgroundColor = `#${color.hex()}`;
   val2.innerText = `hex #${color.hex()}`;
   col3.style.backgroundColor = `hsl(${color.hsl()}`;
   val3.innerText = `hsl(${color.hsl()}`;

   // generate opposite hsl color
   const oppCols = hslStrip(color.opposite());

   // // display border around color boxes
   colorDisplayL.style.border = `3px solid ${color.opposite()}`;
   colorDisplayR.style.border = `3px solid hsl(${color.hsl()})`;

   // output opposite results
   oppcol1.style.backgroundColor = oppCols.rgb();
   oppval1.innerText = oppCols.rgb();
   oppcol2.style.backgroundColor = `#${oppCols.hex()}`;
   oppval2.innerText = `hex #${oppCols.hex()}`;
   oppcol3.style.backgroundColor = `hsl(${oppCols.hsl()}`;
   oppval3.innerText = `hsl(${oppCols.hsl()}`;
}


//  ==========================================================
// set defaults
reset();

// RUN THE APP
//  ==========================================================
// set click handler for color type submit
form1.addEventListener('submit', function(evt) {
   evt.preventDefault();

   // trap for color type choice
   if (colType.value === 'hsl') {
      hslConv();
   } else if (colType.value === 'hex') {
      hexConv();
   } else {
      rgbConv();
   }
});

// set click handler for reset
resetButt.addEventListener('click', function(evt) {
   evt.preventDefault();

   reset();
});
