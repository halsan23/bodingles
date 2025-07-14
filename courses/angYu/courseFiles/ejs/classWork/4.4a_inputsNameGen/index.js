import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;
let bandName = "";


function bandNameGenerator(req, res, next) {
//   console.log(req.body);
  bandName = `${req.body["street"]} ${req.body["pet"]}`;
  next();
}


app.use(express.urlencoded({ extended: true }));
app.use(bandNameGenerator);

// get home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


// post result
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// set server to "listen" for request(s)
app.listen(port, () => console.log(`Server running on port ${port}`));
