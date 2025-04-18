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


// seed the db with some data
// const newProduct = new Product({
//    name: 'Ruby Grapefruit',
//    price: 1.99,
//    category: 'fruit'
// })

// upload and create db
// newProduct.save()
//    .then(newProduct => {
//       console.log(newProduct);
//    })
//    .catch(err => {
//       console.log(err);
//    })

const seedProducts = [
   {
       name: 'Fairy Eggplant',
       price: 1.00,
       category: 'vegetable'
   },
   {
       name: 'Organic Goddess Melon',
       price: 4.99,
       category: 'fruit'
   },
   {
       name: 'Organic Mini Seedless Watermelon',
       price: 3.99,
       category: 'fruit'
   },
   {
       name: 'Organic Celery',
       price: 1.50,
       category: 'vegetable'
   },
   {
       name: 'Chocolate Whole Milk',
       price: 2.69,
       category: 'dairy'
   },
]

Product.insertMany(seedProducts)
   .then(res => {
       console.log(res)
   })
   .catch(err => {
       console.log(err)
   })
