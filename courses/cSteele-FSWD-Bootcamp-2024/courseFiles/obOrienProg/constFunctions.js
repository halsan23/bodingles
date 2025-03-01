// code for Constructor Functions
//  ==========================================================

// create the Constructor Function
function MakeColor ( r=255, g=40, b=100 ) {
   this.r = r;
   this.g = g;
   this.b = b;
   console.log(this);
}

// create the rgb method
MakeColor.prototype.rgb = function() {
   const { r, g, b } = this;
   return `rgb(${r}, ${g}, ${b})`;
};

// create the hex method
MakeColor.prototype.hex = function() {
   const { r, g, b } = this;
   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

// Call the color object
// because we set default color values in the Constructor
// any, or all of the input values are optional
const newColor = new MakeColor();
console.log(`newColor.rgb = ${newColor.rgb()}`);
console.log(`newColor.hex = ${newColor.hex()}`);