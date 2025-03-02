// code for Constructor Functions
//  ==========================================================

// create the Constructor Function
function MakeColor ( r = 190, g = 155, b = 90 ) {
   this.r = r;
   this.g = g;
   this.b = b;
   console.log(this);
};

// create the rgb method
MakeColor.prototype.rgb = function() {
   const { r, g, b } = this;
   return `rgb(${r}, ${g}, ${b})`;
};

// create the rgba method
MakeColor.prototype.rgba = function( a = 1.0 ) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// create the hex method
MakeColor.prototype.hex = function() {
   const { r, g, b } = this;
   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
};

// Call the color object
// because we set default color values in the Constructor
// any, or all of the input values are optional
const newColor = new MakeColor();
console.log(`newColor.rgb = ${newColor.rgb()}`);
console.log(`newColor.rgba = ${newColor.rgba(0.5)}`);
console.log(`newColor.hex = ${newColor.hex()}`);