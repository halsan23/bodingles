// Set the variables and requires
const express = require('express');
const app = express();
const port = 3000;


// get requests
app.get( '/tacos', ( req, res ) => {
   res.send('get Tacos response');
})


// post requests
app.post( '/tacos', ( req, res ) => {
   res.send('post Tacos response');
})


// Start Server : Listening on {port}
app.listen( port, () => {
   console.log(`Server Online : Listening on port: ${port}`);
});
