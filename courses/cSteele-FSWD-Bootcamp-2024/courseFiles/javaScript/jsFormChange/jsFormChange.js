const inp1 = document.querySelector('#inp1');
const head1 = document.querySelector('#h61');


inp1.addEventListener('change', function (evt) {
   head1.innerText = inp1.value;
})


const inp2 = document.querySelector('#inp2');
const head2 = document.querySelector('#h62');


inp2.addEventListener('input', function (evt) {
   head2.innerText = inp2.value;
})