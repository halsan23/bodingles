// import express and set a variable for default express functionality
import express from 'express';
const app = express();
const port = 3000;


// get request
app.get("/", (req, res) => {
   res.send("Hello World");
});


// setup listening port
// when we run this file, it starts the server
app.listen( port, () => {
   console.log(`Server running on port: ${port}`);
});