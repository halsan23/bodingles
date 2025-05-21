let heading = document.querySelector('h1');
let btn = document.querySelector('.butt');
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let initial = 0;

btn.addEventListener('click', function() {
   let [dice1, dice2] = roll();
   if (dice1 === dice2) {
      heading.innerText = "It's a Tie Game";
   } else if (dice1 > dice2) {
      heading.innerHTML = `
         <img src="./images/victory1.png">
         &nbsp;Player 1 Wins!
      `;
   } else {
      heading.innerHTML = `
         Player 2 Wins!&nbsp;
         <img src="./images/victory2.png">
      `;
   }
});

let roll = function() {
   let dice1 = Math.floor(Math.random() * 6) + 1;
   let dice2 = Math.floor(Math.random() * 6) + 1;

   img1.setAttribute("src",  "./images/dice" + dice1 + ".png");
   img2.setAttribute("src",  "./images/dice" + dice2 + ".png");

   return [dice1, dice2];
}
roll();
