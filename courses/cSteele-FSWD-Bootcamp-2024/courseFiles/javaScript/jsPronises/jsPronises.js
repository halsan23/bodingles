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