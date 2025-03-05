// Color Convertor
// March 2025
// badDoggy
//  ==========================================================


// assign variables
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');

const colTyp = document.querySelector('#colorType');
const colVal = document.querySelector('#colorValue');

const butt1 = document.querySelector('#butt1');
const butt2 = document.querySelector('#butt2');

const colorsDisp = document.querySelector('#colorsDisp');
const oppositeDisp = document.querySelector('#oppositeDisp');



const col1 = document.querySelector('#col1');
const col2 = document.querySelector('#col2');

const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');

// set click handler for color type submit
const click1Handler = function(evt) {
   evt.preventDefault();

   //  remove button 1, show form2 and button 2
   butt1.hidden = true;
   form2.hidden = false;
   butt2.hidden = false;

   // remove button1 event listener (now hidden)
   form1.removeEventListener('click', click1Handler, true);

   // trap for color type choice
   if (colTyp.value = 'rgb') {
      rgbConvert();
   }
};

// function to convert rgb to hex and hsl
function rgbConvert() {
   // set click handler for color value submit
   const click2Handler = function(evt) {
      evt.preventDefault();

      // break input string down into individual numbers
      let numbers = colVal.value.split(",")
      let r = numbers[0]; g = numbers[1]; b = numbers[2];
      console.log(`r =${r}, g =${g}, b = ${b}`);

      // set color strings
      let rgb = `rgb(${r}, ${g}, ${b})`;
      console.log(`rgb: ${rgb}`);
      // let hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      // let hex = rgbToHex(r, g, b);
      let hex = rgbToHex(r, g, b);
      console.log(`hex: ${hex}`);


      // output results
      colorsDisp.hidden = false;
      col1.style.backgroundColor = rgb;
      val1.innerText = rgb;
      col2.style.backgroundColor = hex;
      val2.innerText = hex;
   };


   colVal.placeholder = '255,255,255';

   // event listener for color value submit
   form2.addEventListener('click', click2Handler, true);
}

const rgbToHex = (r, g, b) => {
   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
 }

// set initial defaults
butt1.hidden = false;
form2.hidden = true;
butt2.hidden = true;
colVal.innerText = '';
colorsDisp.hidden = true;
oppositeDisp.hidden = true;

// event listener for color type submit
form1.addEventListener('click', click1Handler, true);
