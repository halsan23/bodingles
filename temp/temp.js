function leapYear(year) {
   if ((year % 4) === 0) {
      if ((year % 100) === 0 && (year % 400) === 0) {
         return `The year ${year} is a Leap Year.`;
      } else {
         if ((year % 100) !== 0 || (year % 400) === 0) {
            return `The year ${year} is a Leap Year.`;
         } else {
            return `The year ${year} is not a Leap Year.`;
         }
      }
   } else {
         return `The year ${year} is not a Leap Year.`;
   }
}


console.log( leapYear(1963) );
