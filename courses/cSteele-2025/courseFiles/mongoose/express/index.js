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
const Movie = mongoose.model('Movie', movieSchema);

// Create a new instance of the movie class
// const badSanta = new Movie({
//    title: 'Bad Santa',
//    year: 2003,
//    score: 7.0,
//    rating: 'R'
// })

// insert MANY movies at once
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("Movie Data Uploaded:");
//         console.log(data);
//     })