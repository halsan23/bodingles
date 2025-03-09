// code for Classes
//  ==========================================================

// Create the Class
class RgbConvert {
   constructor ( r = 255, g = 255, b = 255 ) {
      this.r = r;
      this.g = g;
      this.b = b;
   }

   // method to output color name
   colType() {
      const type = this.colorType;
      return type;
   }

   // method to output rgb color
	rgb() {
      const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	}

   // method to convert rgb color to hex color
	hex() {
      const { r, g, b } = this;
		return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

   // method to output hsl color
	hsl() {
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
		return `${h}, ${s}%, ${l}%`;
	}

   // method to output opposite hsl color
	opposite() {
		let { h, s, l } = this;
		const newHue = (h + 180) % 360;
      // if white, change to black
      if (l === 100) {
         l = 0;
         // if black, change to white
      } else if (l === 0) {
         l = 100;
      }
		return `hsl(${newHue}, ${s}%, ${l}%)`;
	}
}

// function to convert hex to rgb
function hexToRgb(hex = 'a82aaa') {
   let r = parseInt(hex.substring(1,3), 16);
   let g = parseInt(hex.substring(3,5), 16);
   let b = parseInt(hex.substring(5), 16);

   // create new hex object
   const hexRgb = new RgbConvert(r, g, b);
   return hexRgb;
}

function hslToRgb( h, s, l ) {
   // Must be fractions of 1
   s /= 100;
   l /= 100;

   let c = (1 - Math.abs(2 * l - 1)) * s,
       x = c * (1 - Math.abs((h / 60) % 2 - 1)),
       m = l - c/2,
       r = 0,
       g = 0,
       b = 0;

   if (0 <= h && h < 60) {
   r = c; g = x; b = 0;
   } else if (60 <= h && h < 120) {
   r = x; g = c; b = 0;
   } else if (120 <= h && h < 180) {
   r = 0; g = c; b = x;
   } else if (180 <= h && h < 240) {
   r = 0; g = x; b = c;
   } else if (240 <= h && h < 300) {
   r = x; g = 0; b = c;
   } else if (300 <= h && h < 360) {
   r = c; g = 0; b = x;
   }
   r = Math.round((r + m) * 255);
   g = Math.round((g + m) * 255);
   b = Math.round((b + m) * 255);

   // create new hsl object
   const hslRgb = new RgbConvert(r, g, b);
   return hslRgb;
}

const rgb = new RgbConvert( 255, 255, 255 );
console.log('Type = rgb');
console.log(`rgb = ${rgb.rgb()}`);
console.log(`hex = #${rgb.hex()}`);
console.log(`hsl = ${rgb.hsl()}`);
console.log(`opposite = ${rgb.opposite()}`);
console.log(' ');

const hex = hexToRgb('#ffffff');
console.log('Type = hex');
console.log(`rgb = ${hex.rgb()}`);
console.log(`hex = #${hex.hex()}`);
console.log(`hsl = ${hex.hsl()}`);
console.log(`opposite = ${hex.opposite()}`);
console.log(' ');

const hsl = hslToRgb( 0, 0, 100 );
console.log('Type = hsl');
console.log(`rgb = ${hsl.rgb()}`);
console.log(`hex = #${hsl.hex()}`);
console.log(`hsl = ${hsl.hsl()}`);
console.log(`opposite = ${hsl.opposite()}`);
console.log(' ');

// rgb and hsl, pas in numbers : eg 0,0,0 and 0,0,100 respectively
// hex pass in string : eg 'ffffff'