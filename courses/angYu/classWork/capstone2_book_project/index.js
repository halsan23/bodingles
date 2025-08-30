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

// ===================================================//

// Display default page - index.ejs
app.get("/", (req, res) => {
   res.render("index.ejs");
});


app.post('/', async (req, res) => {
   let book = req.body.bookTitle.trim();
      console.log(`Book Input: ${book}`);

      const searchString = book.replace(/ /g, '+');
      console.log(`Search String: ${searchString}`);

   try {
      const result = await axios.get(`https://openlibrary.org/search.json?q=${searchString}`);
      const bookData = result.data;
      console.log(`BookData: ${bookData}`);

      // const bookJson = JSON.stringify(bookData);
      // console.log(`Book.JSON: ${bookData}`);

   } catch (err) {
      console.log(err);
   }
});



// Server Listening
app.listen(port, () => console.log(`Server Listening on localhost:${port}`));
