// code for Classes
//  ==========================================================

// Create the Class
class MakeColor {
   constructor ( r = 215, g = 170, b = 80, colorName = 'Bronze' ) {
         this.r = r;
         this.g = g;
         this.b = b;
         this.colorName = colorName;
         console.log(`color = ${name}: rgb(${r}, ${g}, ${b})`);
   }

   // create a name method
   name() {
      const colorName = this.colorName;
      return `Color Name is: ${colorName}`;
   }

   // create a "base" method to use in the rgb methods
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}

   // create the rgb method
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}

   // create the rgba method
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}

   // create the hex method
	hex() {
      const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
}

// Call the Class
const color1 = new MakeColor();
const color2 = new MakeColor(0, 195, 195, 'Teal');

console.log('Available color variables are color1 (Bronze) and color2 (Teal).');