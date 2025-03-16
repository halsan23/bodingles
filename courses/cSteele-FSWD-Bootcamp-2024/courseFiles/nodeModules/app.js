// import math package object
const mathImp = require ('./math');
// display math package object
console.log('Math Imports');
console.log(mathImp);

// add mathInp objects to variables
const {add, square, PI} = require ('./math');
// output from package object
console.log(add(2, 2));
console.log(square(5));
console.log(PI);


// import pets package object
const myPets = require ('./pets');

// display pets package object
console.log('Pets Imports');
console.log(myPets);
