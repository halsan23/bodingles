// Functions

// let randNum = getRandomNum => Math.floor(Math.random() * 6) + 1;


// document.querySelectorAll('img')[2].setAttribute('src', "https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200");

// document.querySelectorAll('img')[2].src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const letter = document.querySelectorAll('span');
let count = 5;

console.log(colors);
console.log(letter);

for (let color of colors) {
   letter[count].style.color = color;
   console.log(count);
   count++
}