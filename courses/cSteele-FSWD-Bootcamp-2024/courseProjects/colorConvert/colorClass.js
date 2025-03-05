// code for Classes
//  ==========================================================

// Create the Class
class RgbConvert {
   constructor ( r = 215, g = 170, b = 80, colorName = 'Bronze' ) {
         this.r = r;
         this.g = g;
         this.b = b;
         this.colorName = colorName;
         this.calcHSL(); // run method to convert rgb to hsl
   }

   // method to output color name
   name() {
      const colorName = this.colorName;
      return `Color ${colorName}`;
   }

   // create a "base" method to use in the rgb methods
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}

   // method to output rgb color
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}

   // method to output rgba color
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}

   // method to convert rgb color to hex color
	hex() {
      const { r, g, b } = this;
		return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

   // method to output hsl color
	hsl() {
		const { h, s, l } = this;
      // console.log(`h = ${h}, s = ${s}, l = ${l}`);
		return `hsl(${h}, ${s}%, ${l}%)`;
	}

   // method to output opposite hsl color
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue}, ${s}%, ${l}%)`;
	}

   // convert rgb to hsl
	calcHSL() {
		let { r, g, b } = this;

		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

      // Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360Â°
		if (h < 0) h += 360;

		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
   }
}

// function to convert hex to rgb
function hexToRgb(hex = 'a82aaa') {
   let r = parseInt(hex.substring(0,2), 16);
   let g = parseInt(hex.substring(2,4), 16);
   let b = parseInt(hex.substring(4), 16);
   return `HEX Color #${hex} = rgb(${r}, ${g}, ${b})`;
}

// function to convert hsl to rgb
function hslToRgb(h, s, l) {
   s /= 100;
   l /= 100;
   const k = n => (n + h / 30) % 12;
   const a = s * Math.min(l, 1 - l);
   const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
   return [255 * f(0), 255 * f(8), 255 * f(4)];
}

// run the hexToRgb function
// const hexColor = hexToRgb();
// console.log(hexColor);


// run the hslToRgb function
const rgbColor2 = new RgbConvert(255,200,255);
let mycolor = rgbColor2.hsl();
let mycol = mycolor.replaceAll('%', '');
mycol = mycol.slice(4);
mycol = mycol.slice(onabort, -1);
console.log(`mycol is: ${mycol}`);


let numbers = mycol.split(",")
// let h = numbers[0]; s = numbers[1]; l = numbers[2];
let h = Math.round(Number(numbers[0])); s = Math.round(Number(numbers[1])); l = Math.round(Number(numbers[2]));

const hslColor = hslToRgb(h, s, l);
console.log(`hsl to rgb = ${hslColor}`);

const newRgb = new RgbConvert(hslColor);
console.log(`newRgb = ${newRgb.hsl()}`);
