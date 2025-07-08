// import the express object from the express module
import express from "express";

// dynamically build a path to the ROOT directory
// import the dirname function from the path module
import { dirname } from "path";
// import the fileURLToPath function from the url module
import { fileURLToPath } from "url";

// define the root path
const __dirname = dirname(fileURLToPath(import.meta.url));


// assign variables for the express function & port #
const app = express();
const port = 3000;

// set a default directory for assets (images/css/header/footer)
app.use(express.static("public"));
// use express to extract the form data submitted from our public/index.html
app.use(express.urlencoded({ extended: true }));


// get request for home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


// POST request to process form data from public/index.html
app.post("/submit", (req, res) => {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  console.log(`Band Name is: ${bandName}`);
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});


// enable server "listen" mode
app.listen(port, () => {
  console.log(`The server is running and listening on port: ${port}`);
});
