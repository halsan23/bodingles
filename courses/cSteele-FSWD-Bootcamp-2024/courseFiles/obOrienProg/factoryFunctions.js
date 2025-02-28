// code for Factory Functions
//  ==========================================================

// Color Convertor
//  ==========================================================
// Create the makeColor Object
function makeColor(r=200, g=50, b=125) {

   // create an empty object
	const color = {};

   // assign keys and rgb values
	color.r = r;
	color.g = g;
	color.b = b;

   // create the RGB method
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};

   // create the HEX Method
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};

   // return the color object
	return color;
}

// values for the color object
const anyColor = makeColor(35, 255, 150);

// calling the rgb method
anyColor.rgb(); //"rgb(35, 255, 150)"

// calling the hex method
anyColor.hex(); //firstColor.hex();

