// import the figlet package
const figlet = require('figlet');

// Set the text for the art
const artText = 'Hello World!!'

figlet(artText, function ( err, data ) {
   if (err) {
   console.log("Something went wrong...");
   console.dir(err);
   return;
   }
   console.log(data);
   })