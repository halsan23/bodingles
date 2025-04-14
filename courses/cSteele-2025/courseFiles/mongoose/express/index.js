// require Mongoose
const mongoose = require('mongoose');

// attempt connection to mongo DB & console.log the result
mongoose.connect( 'mongodb://127.0.0.1:27017/movieApp' )
   .then(() => {
      console.log('Mongoose connected on port mongodb://127.0.0.1:27017/');
      console.log('Connected to movieApp DB');
   })
   .catch(err => {
      console.log('Connection Error!');
      console.log(err);
   })

// define a movie schema
const movieSchema = new mongoose.Schema({
   title: string,
   year: number,
   score: number,
   rating: string
});

// define the movie model
const movie = mongoose.Model('Movie', movieSchema);