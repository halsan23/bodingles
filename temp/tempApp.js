// Functions

// let randNum = getRandomNum => Math.floor(Math.random() * 6) + 1;


const form = document.querySelector('form');
const addList = document.querySelector('#list');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');

form.addEventListener('submit', function(evt) {
   evt.preventDefault();
   if (product.value != "" && qty.value != "") {
      const newLi = document.createElement('li');
      const order = `You ordered ${quantity.value} ${product.value}(s)`;
      newLi.innerText = order;
      addList.append(newLi);
   }
   product.value = '';
   quantity.value = '';
})