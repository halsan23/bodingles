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
      const response = await axios.get(`https://openlibrary.org/search.json?q=${searchString}&limit=1`);
      const result = response.data;
      const olid = result.docs[0].cover_edition_key;
      const title = result.docs[0].title;
      const published = result.docs[0].first_publish_year;
      console.log(`OLID: ${olid}`);
      console.log(`Title: ${title}`);
      console.log(`First Published: ${published}`);

      const coverImg = `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
      console.log(`Cover Image: ${coverImg}`);



   } catch (err) {
      console.log(err);
   }
});



// Server Listening
app.listen(port, () => console.log(`Server Listening on localhost:${port}`));
