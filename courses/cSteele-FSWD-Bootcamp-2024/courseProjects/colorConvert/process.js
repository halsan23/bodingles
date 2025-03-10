// Process Color Value inputs for display

function processRgb() {
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
}

function processHex() {
   // // sets default rgb value
   if (colVal.value === '') {
      colVal.value = 'ffffff';
   }

   // create the hex color object
   const hex = hexToRgb(colVal.value);

   // outputs the new color object
   outputDisplay(hex);
}

function processHsl() {
   // sets default rgb value
   if (colVal.value === '') {
      colVal.value = '0, 0, 100';
   }

   // create hsl object
   const hsl = hslStrip(`hsl(${colVal.value})`);

   // display the results
   form2Label1.innerText = 'Results for hsl(';
   outputDisplay(hsl);
}