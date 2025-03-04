// Color Convertor
// March 2025
// badDoggy
//  ==========================================================


// assign variables
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const butt1 = document.querySelector('#butt1');
const butt2 = document.querySelector('#butt2');
const colTyp = document.querySelector('#colorType');
const colVal = document.querySelector('#colorValue');
const placeholder = document.getElementById('form2-placeholder');

form2.hidden = true;


form1.addEventListener('submit', function (evt) {
    evt.preventDefault();

    form2.hidden = false;
    butt1.hidden = true;

    if (colTyp.value === 'rgb') {
      rgbInput();
    } else if (colTyp.value === 'hex') {
      hexInput();
    } else {
      hslInput();
    }
});

function rgbInput() {
   label1.innerText = 'Enter RGB color value: rgb( ';
   colVal.placeholder = '255,255,255';
   colVal.style.width += 10;
   label2.innerText = ' )';
}

function hexInput() {
   label1.innerText = 'Enter HEX color value: #';
   colVal.placeholder = 'ffffff';
   label2.innerText = '';
}

function hslInput() {
   label1.innerText = 'Enter HSL color value: ( ';
   colVal.placeholder = '180, 100%, 100%';
   label2.innerText = ' )';
}






// colVal.style.width = placeholder.offsetWidth + "0px";







// // Create the Class
// class MakeColor {
//    constructor ( r = 215, g = 170, b = 80, colorName = 'Bronze' ) {
//          this.r = r;
//          this.g = g;
//          this.b = b;
//          this.colorName = colorName;
//          console.log(`color = ${name}: rgb(${r}, ${g}, ${b})`);
//    }

//    // create a name method
//    name() {
//       const colorName = this.colorName;
//       return `Color Name is: ${colorName}`;
//    }

//    // create a "base" method to use in the rgb methods
// 	innerRGB() {
// 		const { r, g, b } = this;
// 		return `${r}, ${g}, ${b}`;
// 	}

//    // create the rgb method
// 	rgb() {
// 		return `rgb(${this.innerRGB()})`;
// 	}

//    // create the rgba method
// 	rgba(a = 1.0) {
// 		return `rgba(${this.innerRGB()}, ${a})`;
// 	}

//    // create the hex method
// 	hex() {
//       const { r, g, b } = this;
// 		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// 	}
// }

// // Call the Class
// const color1 = new MakeColor();
// const color2 = new MakeColor(0, 195, 195, 'Teal');

// console.log('Available color variables are color1 (Bronze) and color2 (Teal).');