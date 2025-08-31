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

// ========================================================================================//

async function getBook(book) {
   try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${book}&limit=1`);
      const result = response.data;

      let bookData = {
         olid: result.docs[0].cover_edition_key,
         title: result.docs[0].title,
         published: result.docs[0].first_publish_year,
         // coverImg: `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`,
      }
   console.log(`Book Data: ${bookData}`);
      return bookData;
   } catch (err) {
      console.log('Book not Found');
   }
}

async function getDescr(olid) {
   try {
      const response = await axios.get(`https://openlibrary.org/works/${olid}.json`);
      const result = response.data;
      bookDescr = result.data.description.value;
      return bookDescr;
   } catch (err) {
      console.log('Book description not Found');
   }
}


// ========================================================================================//
// Display default page - index.ejs
app.get("/", (req, res) => {
   res.render("index.ejs");
});


app.post('/', async (req, res) => {
   let book = req.body.bookTitle.trim();
   let bookData = await getBook(book);
   console.log(`Book Data: ${bookData}`);
   // const bookDescr = await getDescr(bookData.olid);
   // let bookData.descr = bookDescr;

});



// Server Listening
app.listen(port, () => console.log(`Server Listening on localhost:${port}`));
