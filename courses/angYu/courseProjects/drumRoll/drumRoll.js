// let btn = ['w', 'a', 's', 'd', 'j', 'k', 'l']

// // loop through all drums to add event listener
// for ( let i = 0; i < document.querySelectorAll('.drum').length; i++) {

//    // add event listeners
//    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
//       alert(`${btn[i]} was clicked`);
//    });
// }




function add ( num1, num2 ) {
   return num1 + num2;
}

function subt ( num1, num2 ) {
   return num1 - num2;
}

function mult ( num1, num2 ) {
   return num1 * num2;
}

function divide ( num1, num2 ) {
   return num1 / num2;
}

function calc ( num1, num2, operator ) {
   return operator( num1, num2 );
}
