// set variables and requires
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// import comments data
const comData = require( './assets/files/js/commentsData.js' );


//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())


// set directory for static files
app.use(express.static(path.join(__dirname, 'assets')))

// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// get request for index route
app.get('/comments', (req, res) => {
   res.render('comments/index', { users: comData });
})

// post requests
app.post( '/tacos', ( req, res ) => {
   const { meat, qty } = req.body;
   res.send(`Your Order is: ${qty} ${meat} Taco(s).`);
})


// Start Server : Listening on {port}
app.listen( port, () => {
   console.log(`Server Online : Listening on port: ${port}`);
});
