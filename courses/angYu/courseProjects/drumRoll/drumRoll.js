let btn = ['w', 'a', 's', 'd', 'j', 'k', 'l']

// loop through all drums to add event listener
for ( let i = 0; i < document.querySelectorAll('.drum').length; i++) {

   // add event listeners
   document.querySelectorAll('.drum')[i].addEventListener('click', function () {
      alert(`${btn[i]} was clicked`);
   });
}