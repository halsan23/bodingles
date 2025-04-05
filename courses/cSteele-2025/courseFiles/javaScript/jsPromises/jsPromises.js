// generating resolve or reject based on random number
// ==========================================================
const fakeRequest = (url) => {
   return new Promise((resolve, reject) => {
      const rand = Math.random();
      setTimeout(() => {
         if (rand < 0.7) {
            resolve('Fake Data was returned.');
         }
         reject('Error Retrieving the Fake Data!!');
      }, 1000)
   })
}



// example generating a fake url call
// ==========================================================
fakeRequest('dogs/1')  // pointing to a fake url : dogs, pg.1
   .then((data) => {
      // if the Promise returned resolve()
      console.log('Finished With the Request.');
      console.log('Returned Data : ', data);
   })
   .catch((err) => {
      // if the Promise returned reject()
      console.log('Oh No!!', err);
   })




// using Async for login validation
// ==========================================================
const login = async (username, password) => {
   if (!username || !password) throw 'Credentials Incomplete!'
   if (password === 'pswd') return 'Welcome'
   throw 'Invalid Password!'
}

login('MyName', '')
   .then(msg => {
   console.log(`${msg}, you have successfully Logged In.`);
   })
   .catch(err => {
   console.log(`ERROR!, ${err}`);
   })



// using await inside an async function
// ==========================================================
// create a variable for a div with id="colorChange"
const colorChange = document.getElementById('colorChange');

// random background color change with a time delay
const delayedColorChange = (color) => {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           colorChange.style.backgroundColor = color;
           resolve();
       }, 1500)
   })
}

// process the async with awaits
async function rainbow() {
   await delayedColorChange('red')
   await delayedColorChange('orange')
   await delayedColorChange('yellow')
   await delayedColorChange('green')
   await delayedColorChange('blue')
   await delayedColorChange('indigo')
   await delayedColorChange('violet')
   return "ALL DONE!"
}

// run the rainbow async function
rainbow();
