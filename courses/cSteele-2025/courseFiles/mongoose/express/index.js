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
   title: String,
   year: Number,
   score: Number,
   rating: String
});

// create a movie class based on the movie model
// the model is: mongoose.Model('Movie', movieSchema)
// assigning it to a variable creates the movie class
const movie = mongoose.model('Movie', movieSchema);

// Create a new instance of the movie class
const badSanta = new movie({
   title: 'Bad Santa',
   year: 2003,
   score: 7.0,
   rating: 'R'
})