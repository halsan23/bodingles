// define the variables
// require (import) express
const express = require('express');
// app variable represents return values from express object
const app = express();
// assign the localhost server port #
// usually 8080 or 3000
const port = 3000;



// start the server and wait for a response
app.listen(port, () => {
   console.log(`App Server is running : Listening on port ${port}`);
});



// process any 'get' responses
// app.get(/(.*)/, (req, res) => {   // bug fix
// root directory
app.get('/', (req, res) => {
   // console.dir(req);   // log the req object
   res.send('<h3>Hello World!</h3>');
});

// setting up a path parameter
app.get('/d/:subDir', (req, res) => {
   const { subDir } = req.params;
   res.send(`<h4>Now browsing the ${subDir} sub directory</h4>`)
})

// about directory
app.get( '/about', ( req, res ) => {
   res.send('This is the "About Us" page.');
});

// login directory
app.get( '/login', ( req, res ) => {
   res.send('This is the "Log In" page.');
});

// path error detect catch all
// if other than the above routing, do this
app.get('*', (req, res) => {
   res.send('Invalid Path : Path Not Found!');
});