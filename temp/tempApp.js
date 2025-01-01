// Functions

// let randNum = getRandomNum => Math.floor(Math.random() * 6) + 1;


// document.querySelectorAll('img')[2].setAttribute('src', "https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200");

// document.querySelectorAll('img')[2].src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';


for (let i = 0; i < 100; i++) {
   const tarId = document.querySelector('#contain')
   const newEle = document.createElement('button');
   newEle.innerText = 'Button';
   tarId.append(newEle);
}