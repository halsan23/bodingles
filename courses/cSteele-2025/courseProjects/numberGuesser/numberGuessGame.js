const targetNum = Math.floor(Math.random() * 75) + 1;

alert("I'm thinking of a number between 1 and 75. Can you guess my number?");
let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    if (attempts === 1) {
      console.log(`It took you ${attempts} guess`);
    } else {
      console.log(`It took you ${attempts} guesses`);
    }
}