// Color Convertor
// March 2025
// badDoggy
//  ==========================================================


// assign variables
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');

const form2Label = document.querySelector('#form2Label');
const form2Label2 = document.querySelector('#form2Label2');

const colTyp = document.querySelector('#colorType');
let colVal = document.querySelector('#colorValue');

const butt1 = document.querySelector('#butt1');
const butt2 = document.querySelector('#butt2');

const colorsDisp = document.querySelector('#colorsDisp');
const oppositeDisp = document.querySelector('#oppositeDisp');

const colorDisplay = document.querySelector('.colorDisplay');

const col1 = document.querySelector('#col1');
const col2 = document.querySelector('#col2');
const col3 = document.querySelector('#col3');

const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');
const val3 = document.querySelector('#val3');


const oppcol1 = document.querySelector('#oppcol1');
const oppcol2 = document.querySelector('#oppcol2');
const oppcol3 = document.querySelector('#oppcol3');

const oppval1 = document.querySelector('#oppval1');
const oppval2 = document.querySelector('#oppval2');
const oppval3 = document.querySelector('#oppval3');

const head1 = document.querySelector('#head1');
const head2 = document.querySelector('#head2');

// set initial defaults
butt1.hidden = false;
form2.hidden = true;
butt2.hidden = true;
colVal.innerText = '';
colorsDisp.hidden = true;
oppositeDisp.hidden = true;
head1.hidden = true;
head2.hidden = true;

// set click handler for color type submit
form1.addEventListener('submit', function(evt) {
   evt.preventDefault();

   // trap for color type choice
   if (colTyp.value = 'rgb') {
      rgbConv();
   }
});

// function to convert rgb to hex and hsl
function rgbConv() {
   //  remove button 1, show form2 and button 2
   butt1.hidden = true;
   form2.hidden = false;
   butt2.hidden = false;

   // format text input for rgb
   form2Label.value = 'Value:  rgb(';
   form2Label.innerText = form2Label.value;
   form2Label2.value = ')';
   form2Label2.innerText = form2Label2.value;
   colVal.placeholder = '255,255,255';

   // event listener for color value submit
   form2.addEventListener('submit', function(evt) {
      evt.preventDefault();

      // show color headings
      head1.hidden = false;
      head2.hidden = false;
      if (colVal.value === '') {
         colVal.value = '255, 255, 255';
      }

      // break input string down into individual numbers
      let numbers = colVal.value.split(",")
      let r = numbers[0]; g = numbers[1]; b = numbers[2];
      r = Number(r); g = Number(g); b = Number(b);

      // create new color object
      const rgbColor = new RgbConvert(r, g, b);

      // output conversion results
      col1.style.backgroundColor = rgbColor.rgb();
      col1.style.border = '1px solid black';
      val1.innerText = rgbColor.rgb();
      col2.style.backgroundColor = `#${rgbColor.hex()}`;
      col2.style.border = '1px solid black';
      val2.innerText = `hex #${rgbColor.hex()}`;
      col3.style.backgroundColor = `hsl(${rgbColor.hsl()})`;
      col3.style.border = '1px solid black';
      val3.innerText = `hsl(${rgbColor.hsl()})`;

      // generate opposite hsl color
      const oppHsl = rgbColor.opposite();

      // generate new opposite rgb object
      // new object call is in the convHslRgb function
      const myOppRgb = convHslRgb(oppHsl);

      // output opposite results
      oppcol1.style.backgroundColor = myOppRgb.rgb();
      oppcol1.style.border = '1px solid black';
      oppval1.innerText = myOppRgb.rgb();
      oppcol2.style.backgroundColor = `#${myOppRgb.hex()}`;
      oppcol2.style.border = '1px solid black';
      oppval2.innerText = `hex #${myOppRgb.hex()}`;
      oppcol3.style.backgroundColor = `hsl(${myOppRgb.opposite()})`;
      oppcol3.style.border = '1px solid black';
      oppval3.innerText = `hsl(${myOppRgb.opposite()})`;
	});
}
