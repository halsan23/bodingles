function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

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

//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(15));
