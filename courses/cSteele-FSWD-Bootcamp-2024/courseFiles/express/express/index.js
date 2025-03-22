// Express Server Setup
// 03/25 | badDoggy
// ============================================================

// define the variables
// require (import) express
const express = require('express');
// app variable represents return values from express object
const app = express();
// assign the localhost server port #
// usually 8080 or 3000
const port = 3000;


// start the server and wait for a response
// ============================================================
app.listen(port, () => {
   console.log(`App Server is running : Listening on port ${port}`);
});


// process any 'get' responses
// ============================================================
// root directory
// app.get(/(.*)/, (req, res) => {   // bug fix
app.get('/', (req, res) => {
   // console.dir(req);   // log the req object
   res.send('<h3>Hello World!!</h3>');
});


// setting up a path parameter for sub directories
// ============================================================
app.get('/d/:subDir', (req, res) => {
   const { subDir } = req.params;
   res.send(`<h3>Now browsing the ${subDir} sub directory</h3>`);
});


// setting up a path parameter for sub directories plus post ID
// ============================================================
app.get('/r/:subreddit/:postId', (req, res) => {
   const { subreddit, postId } = req.params;
   res.send(`<h3>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h3>`);
});


// setting up a path for search parameter
// ============================================================
app.get('/search', (req, res) => {
   const { q } = req.query;
   if (!q) {
       res.send('<h3>Search Field Empty, No Results!</h3>');
   } else {
       res.send(`<h3>Search results for: ${q}</h3>`);
   }
});


// set Standard Paths
// ============================================================
// about directory
app.get( '/about', ( req, res ) => {
   res.send('<h3>This is the "About Us" page.</h3>');
});

// login directory
app.get( '/login', ( req, res ) => {
   res.send('<h3>This is the "Log In" page.</h3>');
});


// path error detect catch all
// ============================================================
// if other than the above routing, do this
app.get('*', (req, res) => {
   res.send('<h3>Invalid Path : Path Not Found!</h3>');
});
