// Functions

// let randNum = getRandomNum => Math.floor(Math.random() * 6) + 1;

const user = document.querySelector('#username');
const h1 = document.querySelector('#h61');

// user.addEventListener('change', function() {
//    h61.innerText = 'Enter Your Username';
//    user.value = '';
// })


user.addEventListener('input', function() {
   if (user.value != '') {
      h1.innerText = `Welcome, ${user.value}`;
   } else {
      h1.innerText = 'Enter Your Username';
   }
})