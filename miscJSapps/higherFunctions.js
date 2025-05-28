// Higher Functions
// ------------------------------------------------------------
// allows you to call  function from within another function
// ============================================================

// base functions
function add ( num1, num2 ) {
   return num1 + num2;
}

function subt ( num1, num2 ) {
   return num1 - num2;
}

function mult ( num1, num2 ) {
   return num1 * num2;
}

function divi ( num1, num2 ) {
   return num1 / num2;
}

function calc ( num1, num2, operator ) {
   return operator( num1, num2 );
}

// assign the variables and run the higher function
// ------------------------------------------------------------
let n1 = 25;
let n2 = 75;

console.log(`${n1} + ${n2} = ${calc(n1,n2,add)}`);
console.log(`${n1} - ${n2} = ${calc(n1,n2,subt)}`);
console.log(`${n1} * ${n2} = ${calc(n1,n2,mult)}`);
console.log(`${n1} / ${n2} = ${calc(n1,n2,divi)}`);