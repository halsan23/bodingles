let heading = document.querySelector('.head');
let imgL = document.querySelector('.imgL');
let imgR = document.querySelector('.imgR');
let btn = document.querySelector('.butt');
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

btn.addEventListener('click', function() {
   let [dice1, dice2] = roll();

   if (dice1 === dice2) {
      imgL.setAttribute("src",  "./images/victory1.png");
      heading.innerText = "It's a Tie Game";
      imgR.setAttribute("src",  "./images/victory2.png");

   } else if (dice1 > dice2) {
      heading.innerText = "Player 1 Wins!";
      imgL.setAttribute("src",  "./images/victory1.png");
      imgR.setAttribute("src",  "");


   } else {
      heading.innerText = "Player 2 Wins!";
      imgL.setAttribute("src",  "");
      imgR.setAttribute("src",  "./images/victory2.png");
   }
});

let roll = function() {
   let dice1 = Math.floor(Math.random() * 6) + 1;
   let dice2 = Math.floor(Math.random() * 6) + 1;

   img1.setAttribute("src",  "./images/dice" + dice1 + ".png");
   img2.setAttribute("src",  "./images/dice" + dice2 + ".png");

   return [dice1, dice2];
}

heading.innerText = "Random Dice Roll";
imgL.setAttribute("src",  "./images/victory1.png");
imgR.setAttribute("src",  "./images/victory2.png");

roll();
