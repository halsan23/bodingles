// Functions

const prices = [9.99, 1.49, 19.99, 49.99, 34.99];

let minimum = prices.reduce((min, price) => {
   if (price < min) {
      return price;
   }
   return min;
})

console.log(minimum);