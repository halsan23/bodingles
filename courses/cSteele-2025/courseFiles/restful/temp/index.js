// Set the variables and requires
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


// express middleware parser for post req.body
// for parsing application/x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }))
// for parsing json data
app.use(express.json())
// set directory for static files
app.use(express.static(path.join(__dirname, 'assets')))
// set default views and path
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Our fake database:
let comments = [
   {
       username: 'Sexy Sandy',
       comment: 'lol that is so funny!'
   },
   {
       username: 'Skyler',
       comment: 'I like to go birdwatching with my dog'
   },
   {
       username: 'Josephene',
       comment: 'Do you think they have pizza in space?'
   },
   {
       username: 'Sadie',
       comment: 'What in the world is going on here?'
   }
]


// get request for index route
app.get('/comments', (req, res) => {
   res.render('comments/index', { comments });
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
