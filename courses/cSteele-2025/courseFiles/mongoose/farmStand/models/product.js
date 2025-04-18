// set requires / define variables
const mongoose = require('mongoose');

// define our Product Schema
const productSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true,
      min: 0
   },
   category: {
      type: String,
      lowercase: true,
      enum: ['fruit', 'vegetable', 'dairy']
   }
})

// define our Product Model
const Product = mongoose.model('Product', productSchema);

// export the Product Model
module.exports = Product;
