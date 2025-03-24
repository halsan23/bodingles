// Set the variables and requires
const express = require('express');
const app = express();
const port = 3000;
const path = require( 'path' );


// set ejs as our view engine using .get() express method
app.set( 'view engine', 'ejs' );
// define our "path" to the views sub-directory
app.set( 'views', path.join( __dirname, '/views' ));


// get request for root dir
app.get( '/', ( req, res ) => {
   res.render('home')
})


// Start Server : Listening on {port}
app.listen( port, () => {
   console.log(`Server Online : Listening on port: ${port}`);
});
