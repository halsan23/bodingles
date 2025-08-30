// Imports
import express from "express";
import axios from "axios";
import pg from 'pg';

// Assign Variables
const app = express();
const port = process.env.PORT || 3000;

const db = new pg.Client({
   user: "postgres",
   password: "password",
   host: "localhost",
   database: "toDoList",
   port: 5432,
});
db.connect();

// app assets and form processing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));



// Display default page - index.ejs
app.get("/", (req, res) => {
   res.render("index.ejs");
});



// Server Listening
app.listen(port, () => console.log(`Server Listening on localhost:${port}`));
