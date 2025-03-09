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
const colVal = document.querySelector('#colorValue');
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

   // set info display
   instructions.innerText = 'Enter the known RGB values in the format: 255,255,255';
   instructions2.innerText = '!Warning! You MUST enter individual rgb color values between 0 and 255';

   // format text input for rgb
   form2Label1.innerText = 'Value: rgb(';
   form2Label2.innerText = ')';
   colVal.value = "";
   colVal.placeholder = '255,255,255';
   colType.value = 'rgb';


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
      form2Label1.innerText = 'Results for rgb(';
      outputDisplay(r, g, b);
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

   // set info display
   instructions.innerText = 'Enter the known HEX values in the format: ffffff';
   instructions2.innerText = '!Warning! You MUST enter individual hex color values between 0 and f';

   // format text input for rgb
   form2Label1.innerText = 'Value: #';
   form2Label2.innerText = '';
   colVal.value = "";
   colVal.placeholder = 'ffffff';
   colType.value = 'hex';

   // event listener for color value submit
   form2.addEventListener('submit', function(evt) {
      evt.preventDefault();

      // sets default rgb value
      if (colVal.value === '') {
         colVal.value = 'ffffff';
      }

      // break rgb input string down into individual numbers
      const conv = [r, g, b] = hexToRgb(colVal.value);

      // display the results
      form2Label1.innerText = 'Results for #';
      outputDisplay(conv[0], conv[1], conv[2]);
	});
}

// HSL Routine
// function to convert hsl to rgb and hex
function HSLConv() {
   //  remove button 1, show form2 and button 2
   form1.hidden = true;
   butt1.hidden = true;
   resetButt.hidden = false
   form2.hidden = false;
   butt2.hidden = false;

   // set info display
   instructions.innerText = 'Enter the known HSL values in the format: 180,50,50';
   instructions2.innerText = '!Warning! You MUST enter individual hsl color values properly:';
   instructions3.innerText = 'Hue value must be between 0 and 360';
   instructions4.innerText = 'Saturation and Luminous values must be between 0% and 100%';
   instructions5.innerText = '!DO NOT ENTER THE % SIGNS!';

   // format text input for rgb
   form2Label1.innerText = 'Value: hsl(';
   form2Label2.innerText = ')';
   colVal.value = "";
   colVal.placeholder = '180,50,50';
   colType.value = 'hsl';

   // event listener for color value submit
   form2.addEventListener('submit', function(evt) {
      evt.preventDefault();

      // sets default rgb value
      if (colVal.value === '') {
         colVal.value = '180, 50, 50';
      }

      // break hsl input string down into individual numbers
      let temp = colVal.value.replaceAll("%", "");

      // convert the hsl string numbers into actual numbers
      let numbs = temp.split(",")
      let h = numbs[0]; s = numbs[1]; l = numbs[2];
      h = Number(h); s = Number(s); l = Number(l);

      const rgb = hslToRgb(h, s, l);
      r = rgb[0]; g = rgb[1]; b = rgb[2]

      // display the results
      form2Label1.innerText = 'Results for hsl(';
      outputDisplay(r, g, b);
	});
}

// Output Display
function outputDisplay (r, g, b) {
   // create new color object
   const rgbColor = new RgbConvert(r, g, b);

   // show color headings
   mainLeft.style.display = 'block';
   mainRight.style.display = 'block';

   // console.log(`Old rgb = ${rgbColor.rgb()}`);
   // console.log(`Old hex = ${rgbColor.hex()}`);
   // console.log(`Old hsl = ${rgbColor.hsl()}`);
   // console.log(`Old opposite = ${rgbColor.opposite()}`);

   // output conversion results
   col1.style.backgroundColor = `rgb(${rgbColor.rgb()})`;
   val1.innerText = `rgb(${rgbColor.rgb()})`;
   col2.style.backgroundColor = `#${rgbColor.hex()}`;
   val2.innerText = `hex #${rgbColor.hex()}`;
   col3.style.backgroundColor = `hsl(${rgbColor.hsl()})`;
   val3.innerText = `hsl(${rgbColor.hsl()})`;

   // generate opposite hsl color
   const oldOpp = rgbColor.opposite();

   // strip dow opposite hsl color to numbers [returns array]
   const newOppHsl = hslStrip(oldOpp);
   h = newOppHsl[0]; s = newOppHsl[1]; l = newOppHsl[2];

   // convert the stripped hsl into rgb [returns array]
   const hslConvRgb = hslToRgb(h, s, l);
   r = hslConvRgb[0]; g = hslConvRgb[1]; b = hslConvRgb[2];

   // generate new opposite rgb object
   const newOppRGB = new RgbConvert(r, g, b);

   // display border around color boxes
   colorDisplayL.style.border = `3px solid ${rgbColor.opposite()}`;
   colorDisplayR.style.border = `3px solid ${newOppRGB.opposite()}`;

   // // output opposite results
   oppcol1.style.backgroundColor = `rgb(${newOppRGB.rgb()})`;
   oppval1.innerText = `rgb(${newOppRGB.rgb()})`;
   oppcol2.style.backgroundColor = `#${newOppRGB.hex()}`;
   oppval2.innerText = `#${newOppRGB.hex()}`;
   oppcol3.style.backgroundColor = `hsl(${newOppRGB.hsl()})`;
   oppval3.innerText = `hsl(${newOppRGB.hsl()})`;
}


// reset - set defaults
function reset() {
   form1.hidden = false;
   butt1.hidden = false;
   resetButt.hidden = true;
   form2.hidden = true;
   butt2.hidden = true;
   mainLeft.style.display = 'none';
   mainRight.style.display = 'none';

   form2Label1.innerText = '';
   form2Label2.innerText = '';
   instructions.innerText = 'Select a known color type for processing.';
   instructions2.innerText = '';
   instructions3.innerText = '';
   instructions4.innerText = '';
   instructions5.innerText = '';

   colVal.value = "";
   colVal.placeholder = '';

   // console.log(`colVal.value = ${colVal.value}`);
   // console.log(`colVal.placeholder = ${colVal.placeholder}`);
   // console.log(`colType.value = ${colType.value}`);
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
      HSLConv()
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