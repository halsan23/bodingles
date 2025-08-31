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

// ===================================================================//
async function getBook(book) {
   try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${book}&limit=1`);
      const result = response.data;
      const olid = result.docs[0].cover_edition_key;
      const bookCover = `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;

      let bookData = {
         olid: olid,
         title: result.docs[0].title,
         published: result.docs[0].first_publish_year,
         cover: bookCover
      }
      return bookData;
   } catch (err) {
      console.log('Book not Found');
   }
}

async function getDescr(olid) {
   console.log(`Book olid: ${olid}`);

   try {
      const response = await axios.get(`https://openlibrary.org/works/${olid}.json`);
      const result = response.data;

   console.log(`Book result: ${JSON.stringify(result)}`);

      let bookDescr = result.data.description.value;

   console.log(`Book descr: ${bookDescr}`);

      return bookDescr;
   } catch (err) {
      console.log('Book description not Found');
   }
}

// ===================================================================//
// Display default page - index.ejs
app.get("/", (req, res) => {
   res.render("index.ejs");
});


app.post('/', async (req, res) => {
   let book = req.body.bookTitle.trim();
   let bookData = await getBook(book);

   const bookDesc = await getDescr(bookData.olid);

   // console.log(`Book Data: ${JSON.stringify(bookData)}`);
   // console.log(`olid: ${bookData.olid}`);
   // console.log(`Title: ${bookData.title}`);
   // console.log(`Published: ${bookData.published}`);
   // console.log(`cover: ${bookData.cover}`);


   // const bookDescr = await getDescr(bookData.olid);
   // let bookData.descr = bookDescr;

});



// Server Listening
app.listen(port, () => console.log(`Server Listening on localhost:${port}`));
