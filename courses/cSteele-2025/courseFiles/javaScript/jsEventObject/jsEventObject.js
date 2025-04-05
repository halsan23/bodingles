const btn = document.querySelector('button');

btn.addEventListener('click', function(evt) {
   console.log(evt);
})


const inp = document.querySelector('input');
inp.addEventListener('keydown', function(evt) {
   // console.log(evt);
   console.log(evt.key);
   console.log(evt.code);
})


window.addEventListener('keydown', function (e) {
   console.log(e.code);
})
