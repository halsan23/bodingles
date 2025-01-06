// changing Foreground / Background Colors
// const button = document.querySelector('button');
// const head4 = document.querySelector('h4');
// const head6 = document.querySelector('h6');


// button.addEventListener('click', function () {
//     const [foreColor, backColor] = makeRandColor();
//     head4.style.color = foreColor;
//     head6.style.color = foreColor;
//     document.body.style.backgroundColor = backColor;
//     head6.innerText = `New Background Color is: ${backColor}`;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);

//     let fc = '#000000';
//     const bc = `rgb(${r}, ${g}, ${b})`;

//     const numbs = r + g + b;

//     if (numbs < 275) {
//         fc = '#ffffff';
//     }

//     console.log(`${fc} / ${bc}`);

//     return [fc, bc];
// }

// =============================================================
// Rainbow Colors
const letters = ['R', 'A', 'I', 'N', 'B', 'O', 'W', ' ', 'C', 'O', 'L', 'O', 'R', 'S'];
console.log(letters);


const getColor = () => {
    const colorNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';


    thisColorNum = Math.floor(Math.random() * 15);
    console.log(`Random Number Picked ${thisColorNum}`);

    pickedColorNum = colorNums[thisColorNum];
    console.log(`Color Number Picked ${pickedColorNum}`);

    color.append(pickedColorNum);
    console.log(`Color ${color}`);


    // for (let i = 0; i < 6; i++) {

    //     thisColorNum = Math.floor(Math.random() * 15);
    //     console.log(thisColorNum);

    //     pickedColorNum = colorNums[thisColorNum];
    //     console.log(pickedColorNum);

    //     // color.append(pickedColorNum);
    //     console.log(color);
    // }

}

thisColor = getColor();
console.log(thisColor);



// const letter = letters[0];
// console.log(letter);



// const word = document.querySelector('.rainbow');
// letter.style.color = "#3cc964";
// word.append(letter);
// console.log(word);