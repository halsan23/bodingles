// THE IMPORTS
// ===============================================================
import express from "express";       // import the express object from the express module
import { dirname } from "path";      // import the dirname function from the path module
import { fileURLToPath } from "url"; // import the fileURLToPath function from the url module


// THE VARIABLES
// ===============================================================
const __dirname = dirname(fileURLToPath(import.meta.url));  // build the root path
const app = express();
const port = 3000;
let bandName = "";


// FUNCTION TO ADD FORM DATA TOGETHER TO FORM A "BAND NAME"
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = `${req.body["street"]} ${req.body["pet"]}`;
  next();
}


// THE MIDDLEWARE
// ===============================================================
// use express "static" method to set a default directory for assets (images/css/scripts/etc)
app.use(express.static("public"));
// use express to extract the form data submitted from our public/index.html
app.use(express.urlencoded({ extended: true }));
// use bandNameGenerator to build our band name
app.use(bandNameGenerator);




// PROCESS REQUESTS
// ===============================================================
// get request for home page
app.get("/", (req, res) => {
   res.sendFile(__dirname + "index.html");
});


// POST request to process form data from public/index.html
// app.post("/", (req, res) => {
//    res.send(`<h5>Your band name is:</h5> <h6>${bandName}</h6>`);
// });
app.get('/api/message', (req, res) => {
   res.json({ message: `<h5>Your band name is:</h5> <h6>${bandName}</h6>` });
});


// enable server "listen" mode
// ===============================================================
app.listen(port, () => {
   console.log(`The server is running and listening on port: ${port}`);
});