// Define random HRX Colors
const colorPick = () => {
   // define the possible choices for individual color values
   const colorNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

   // set the basic hex color format
   let color = '#';

    // run loop to pick 6 individual color values
   for (let i = 0; i < 6; i++) {

       // pick one single value from the 16 possibilities
       const thisColorNum = Math.floor(Math.random() * 15);
       const pickedColorNum = colorNums[thisColorNum];

       // add the ned color value to the end of the current color
       // we repeat 6 times to build a full hex color value
       color = color + pickedColorNum;
   }
   // return the final random hex color
   return color;
}

// first button for the discussions
const divContain = document.querySelector('#divContain');
const divButton = document.querySelector('#divButton');

divButton.addEventListener('click', function() {
   divContain.style.backgroundColor = colorPick();
})


// second button for the discussions
const divContain2 = document.querySelector('#divContain2');
const divButton2 = document.querySelector('#divButton2');

divButton2.addEventListener('click', function() {
   divContain2.style.backgroundColor = colorPick();
})

divContain2.addEventListener('click', function() {
   divContain2.style.display = 'none';
})


// third button for the discussions
const divContain3 = document.querySelector('#divContain3');
const divButton3 = document.querySelector('#divButton3');

divButton3.addEventListener('click', function(evt) {
   divContain3.style.backgroundColor = colorPick();
   evt.stopPropagation();
})

divContain3.addEventListener('click', function() {
   divContain3.style.display = 'none';
})