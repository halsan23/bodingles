// display package object
const mathImp = require ('./math');
console.log(mathImp);

// output from package object
const {add, square, PI} = require ('./math');
console.log(add(2, 2));
console.log(square(5));
console.log(PI);