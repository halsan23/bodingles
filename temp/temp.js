function leapYear(year) {
   if ((year % 4) === 0) {
      if ((year % 100) === 0 && (year % 400) === 0) {
         console.log(`The year ${year} is a Leap Year.`);
      } else {
         if ((year % 100) !== 0 || (year % 400) === 0) {
            console.log(`The year ${year} is a Leap Year.`);
         } else {
            console.log(`The year ${year} is not a Leap Year.`);
         }
      }
   } else {
      console.log(`The year ${year} is not a Leap Year.`);
   }
}


leapYear(1963);
