// import express and set a variable for default express functionality
import express from 'express';
const app = express();
const port = 3000;


// get request /(root)
// get "Home Page" data
app.get("/", (req, res) => {
   res.send("<h1>Home Page</h1>");
});

// post request /(register)
// adding new data
app.post("/register", (req, res) => {
  //do something with the data
  res.sendStatus(201);
});

// put user (angela)
// completely replace (angela) data
app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

// patch user (angela)
// replace part of "angela" data (update)
app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

// delete user (angela)
// delete "angela" user data
app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});


// setup listening port
// when we run this file, it starts the server
app.listen( port, () => {
   console.log(`Server running on port: ${port}`);
});