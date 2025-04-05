// Set the variables and requires
const express = require('express');
const app = express();
const port = 3000;


// express middleware parser for post req.body
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// for parsing json data
app.use(express.json())


// post requests
app.post( '/tacos', ( req, res ) => {
   const { meat, qty } = req.body;
   res.send(`Your Order is: ${qty} ${meat} Taco(s).`);
})


// Start Server : Listening on {port}
app.listen( port, () => {
   console.log(`Server Online : Listening on port: ${port}`);
});
