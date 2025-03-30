// Set the variables and requires
const express = require('express');
const app = express();
const path = require( 'path' );
const port = 3000;
const demoData = require( './assets/files/json/ejsDemoData.json' );


// set directory for static files
app.use(express.static(path.join(__dirname, 'assets')))

// Set multiple view directories
app.set('views', [
   path.join(__dirname, 'views/bodingles'),
   path.join(__dirname, 'views/subReddit')
 ]);

// set ejs as our view engine using .get() express method
app.set( 'view engine', 'ejs' );


// get request for root view (Bodingles)
app.get( '/', ( req, res ) => {
   res.render('bodIndex')
})

// get request for root view
app.get( '/rand', ( req, res ) => {
   const num = Math.floor(Math.random() * 100) + 1;
   res.render('home', { num })
})

// get request for pets view
app.get( '/pets', ( req, res ) => {
   const pets = [ 'Chico', 'Bella', 'Sadie', 'Addie Cakes', 'BooBoo', 'Jasper', 'Jitters' ];
   res.render('pets', { pets })
})

// get request for subreddit view
app.get( '/r/:subreddit', ( req, res ) => {
   const { subreddit } = req.params;
   const data = demoData[subreddit];
   if (data) {
      // the 3 dots allow us to "spread" the data to get to the individual pieces, such as "Name"
      res.render('subReddit', { ...data });
   } else {
      res.render('notFound', { subreddit });
   }
})


// Start Server : Listening on {port}
app.listen( port, () => {
   console.log(`Server Online : Listening on port: ${port}`);
});
