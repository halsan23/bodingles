// import express and set a variable for default express functionality
import express from 'express';
const app = express();
const port = 3000;


// get request /(root)
app.get("/", (req, res) => {
   res.send("<h1>Home Page</h1>");
});

// get request /about
app.get("/about", (req, res) => {
   res.send("<h1>About Page</h1>");
});

// get request /contact
app.get("/contact", (req, res) => {
   res.send("<h1>Contact Page</h1>");
});

// setup listening port
// when we run this file, it starts the server
app.listen( port, () => {
   console.log(`Server running on port: ${port}`);
});