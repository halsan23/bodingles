// Fibonacci Logic
// is a math routine where a number is the result of adding the previous two numbers.
// We built an array to hold out numbers
// the logic flow:
//      if array.length = 1: array = [0]
//      if array.length = 2: array = [0, 1]
//   after this point
//      every number added to the array is the sum of the previous two numbers,
//      so our next number added to the array would be 1 (the result of 0 + 1) [0, 1, 1]
//      and the next would be 2 (the result of 1 + 1) [0, 1, 1, 2]
//      and so on ...
// ---------------------------------------------------------------------------------------
// When we call the function, we are telling it how many digits in length that should be used
// ============================================================================================

function fibonacciGenerator (n) {

   let output = [];
   if (n === 1) {
      output = [0];
   } else if ( n === 2) {
      output = [0,1];
   } else {
      output = [0,1];
      for ( let i = 2; i < n; i++) {
         let num = output[i-1] + output[i-2];
         output.push(num);
      }
   }

   return output;
}

console.log(fibonacciGenerator(15));
