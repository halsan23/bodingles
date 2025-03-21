// define the variables

// require (import) express
const express = require('express');

// app variable represents return values from express object
const app = express();

// assign the localhost server port #
// usually 8080 or 3000
const port = 3000;


// process any 'get' responses
// app.get(/(.*)/, (req, res) => {   // bug fix
app.get('/', (req, res) => {
   res.send('<h3>Hello World!</h3>')
})

// start the server and wait for a response
app.listen(port, () => {
   console.log(`App Server is running : Listening on port ${port}`)
})