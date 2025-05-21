let heading = document.querySelector('.container h1');
let btn = document.querySelector('button');
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let initial = 0;

btn.addEventListener('click', function() {
   let [dice1, dice2] = roll();
   if (dice1 === dice2) {
      heading.innerText = "It's a Tie Game";
   } else if (dice1 > dice2) {
      heading.innerText = "Player 1 Wins!";
   } else {
      heading.innerText = "Player 2 Wins!";
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
