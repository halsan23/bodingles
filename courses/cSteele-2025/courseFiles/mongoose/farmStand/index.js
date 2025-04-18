// set requires / define variables
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./models/product');

// attempt connection to mongo DB & console.log the result
mongoose.connect( 'mongodb://127.0.0.1:27017/farmStand' )
   .then(() => {
      console.log('Mongoose connected on port mongodb://127.0.0.1:27017/');
      console.log('Mongo Connected to farmStand DB');
   })
   .catch(err => {
      console.log('Mongo Connection Error!');
      console.log(err);
   })

// set default view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set get response
app.get('/dog', (req, res) => {
   res.send('Woof Woof');
})

// connect to node port
app.listen(port, () => {
   console.log(`Connected and Listening, on port ${port}`);
})
