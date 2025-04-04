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
const instDisp2 = document.querySelector('.instDisp2');
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


// EVENT LISTENERS
//  ==========================================================

// event listener for color type submit
form1.addEventListener('submit', function(evt) {
   evt.preventDefault();

   //  remove form1 & button 1
   form1.hidden = true;
   butt1.hidden = true;
   // show form2 & button 2
   resetButt.hidden = false
   form2.hidden = false;
   butt2.hidden = false;
   // show info panel
   instDisp2.hidden = false;
   // reset input color value (form2)
   colVal.value = '';

   // trap for color type choice
   if (colType.value === 'rgb') {
      rgbDisp();
   } else if (colType.value === 'hex') {
      hexDisp();
   } else {
      hslDisp();
   }


   // event listener for color value submit
   form2.addEventListener('submit', function(evt) {
      evt.preventDefault();

      // on form submission (color value) process results
      if (colType.value === 'rgb') {
         processRgb();
      } else if (colType.value === 'hex') {
         processHex();
      } else {
         processHsl();
      }

   });
});

// event listener for reset
resetButt.addEventListener('click', function(evt) {
   evt.preventDefault();

   initialDisplay();
});


// FUNCTIONS
//  ==========================================================
function initialDisplay() {
   // show form1 and button
   form1.hidden = false;
   butt1.hidden = false;

   // hide form2, reset and hide info display
   resetButt.hidden = true;
   form2.hidden = true;
   butt2.hidden = true;
   instDisp2.hidden = true;

   // delete input color value (form2)
   // set default color type (form1) to rgb
   colVal.value = '';
   colType.value = 'rgb';

   // reset all info display's text
   instructions.innerText = 'Select a known color type for processing.';
   instructions2.innerText = '';
   instructions3.innerText = '';
   instructions4.innerText = '';
   instructions5.innerText = '';

   // reset all label text's and color value placeholder (form2)
   form2Label1.innerText = '';
   form2Label2.innerText = '';
   colVal.placeholder = '';

   // hide output displays
   mainLeft.style.display = 'none';
   mainRight.style.display = 'none';
}

// RGB Display Setup
function rgbDisp() {
   // set info display
   instructions.innerHTML = 'Enter the known RGB values in the format: <b>255,255,255</b>';
   instructions2.innerText = 'Warning! You MUST enter individual rgb color values between 0 and 255';

   // format text input for rgb
   form2Label1.innerText = 'Value:  rgb(';
   form2Label2.innerText = ')';
   colVal.placeholder = '255,255,255';
}


// HEX Display Setup
function hexDisp() {
   // set info display
   instructions.innerHTML = 'Enter the known HEX values in the format: <b>ffffff</b>';
   instructions2.innerText = 'Warning! You MUST enter individual rgb color values between 0 and f';

   // format text input for rgb
   form2Label1.innerText = 'Value:  #';
   form2Label2.innerText = '';
   colVal.placeholder = 'ffffff';
}


// HSL Display Setup
function hslDisp() {
   // set info display
   instructions.innerHTML = 'Enter the known HSL values in the format: <b>180,50,50</b>';
   instructions2.innerText = 'Warning! You MUST enter individual hsl color values properly:';
   instructions3.innerHTML = '<br>Hue value must be between 0 and 360';
   instructions4.innerText = 'Saturation and Luminous values must be between 0% and 100%';
   instructions5.innerHTML = '<br>!DO NOT ENTER THE % SIGNS!';

   // format text input for rgb
   form2Label1.innerText = 'Value: hsl(';
   form2Label2.innerText = ')';
   colVal.placeholder = '0,0,100';
}


// Output Display
function outputDisplay (color) {
   // show color headings
   mainLeft.style.display = 'block';
   mainRight.style.display = 'block';

   // output conversion results
   col1.style.backgroundColor = color.rgb();
   val1.innerText = color.rgb();
   col2.style.backgroundColor = color.hex();
   val2.innerText = color.hex();
   col3.style.backgroundColor = color.hsl();
   val3.innerText = color.hsl();

   // generate opposite hsl color
   const oppCols = hslStrip(color.opposite());

   // // display border around color boxes
   // colorDisplayL.style.border = `3px solid ${oppCols.rgb()}`;
   // colorDisplayR.style.border = `3px solid ${color.rgb()}
   colorDisplayL.style.border = '3px solid black';
   colorDisplayR.style.border = '3px solid black';

   // output opposite results
   oppcol1.style.backgroundColor = oppCols.rgb();
   oppval1.innerText = oppCols.rgb();
   oppcol2.style.backgroundColor = oppCols.hex();
   oppval2.innerText = oppCols.hex();
   oppcol3.style.backgroundColor = oppCols.hsl();
   oppval3.innerText = oppCols.hsl();
}


// Initial Display
initialDisplay();
