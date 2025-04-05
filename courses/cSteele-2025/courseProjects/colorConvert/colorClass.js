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
		return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
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
		return `hsl(${h}, ${s}%, ${l}%)`;
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
		return `hsl(${newHue}, ${s}, ${l})`;
	}
}

// function to convert hex to rgb
function hexToRgb (hex = 'ffffff') {
   let r = parseInt(hex.substring(0,2), 16);
   let g = parseInt(hex.substring(2,4), 16);
   let b = parseInt(hex.substring(4), 16);

   // create new hex object
   const hexRgb = new RgbConvert(r, g, b);
   return hexRgb;
}

// function to convert hsl to rgb
function hslToRgb ( h, s, l ) {
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

//strip full hsl string to numbers : eg hsl(100, 0%, 100%) to 100, 0, 100
function hslStrip (hslStr) {
   let temp = hslStr.substring(4, (hslStr.length -1));

   // convert the hsl string numbers into actual numbers
   let numbs = temp.split(",")
   let h = numbs[0]; s = numbs[1]; l = numbs[2];
   h = Number(h); s = Number(s); l = Number(l);

   return hslToRgb( h, s, l );
}

function strToNums (str) {
   // convert the hsl string numbers into actual numbers
   let numbs = str.split(",")
   let a = numbs[0]; b = numbs[1]; c = numbs[2];
   a = Number(a); b = Number(b); c = Number(c);

   return new RgbConvert( a, b, c );
}
