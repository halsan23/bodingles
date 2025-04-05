// import the figlet package
const figlet = require('figlet');

// Set the text for the art
const artText = 'Hello World!!'

figlet(artText, function ( err, data ) {
   // check for error
   if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
   }

   // if no error, log the data
   console.log(data);
})