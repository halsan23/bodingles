// require Mongoose & connect to db
const mongoose = require('mongoose');
mongoose.connect( 'mongodb://127.0.0.1:27017/movieApp' )
// attempt connection & console.log the result
   .then(() => {
      console.log('Mongoose connected on port mongodb://127.0.0.1:27017/');
      console.log('Connected to movieApp DB');
   })
   .catch(err => {
      console.log('Connection Error!');
      console.log(err);
   })