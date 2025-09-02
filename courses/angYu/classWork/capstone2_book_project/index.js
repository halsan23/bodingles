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

      let bookData = {
         olid: result.docs[0].key.substr(7),
         editionOlid: result.docs[0].cover_edition_key,
         title: result.docs[0].title,
         author: result.docs[0].author_name,
         published: result.docs[0].first_publish_year
      }

      const bookCover = `https://covers.openlibrary.org/b/olid/${result.docs[0].cover_edition_key}-M.jpg`;
      bookData.cover = bookCover;

      return bookData;
   } catch (err) {
      console.log('Book not Found');
   }
}

async function getDescr(olid) {
   try {
      const response = await axios.get(`https://openlibrary.org/works/${olid}.json`);
      const result = response.data;

      let bookDescr = result.description.value.substr(0, 500) + ". . .";
      return bookDescr;
   } catch (err) {
      console.log('Book description not Found');
   }
}

async function getRating(olid) {
   try {
      const response = await axios.get(`https://openlibrary.org/works/${olid}/ratings.json`);
      const result = response.data;
      return Math.round(result.summary.average * 10) / 10;
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
   bookData.descr = bookDesc;
   const rating = await getRating(bookData.olid);
   bookData.rating = rating;
   bookData.webAddress = `https://openlibrary.org/works/${bookData.editionOlid}`

   console.log(`olid: ${bookData.olid}`);
   console.log(`edition olid: ${bookData.editionOlid}`);
   console.log(`Title: ${bookData.title}`);
   console.log(`Author: ${bookData.author}`);
   console.log(`Published: ${bookData.published}`);
   console.log(`cover: ${bookData.cover}`);
   console.log(`Description: ${bookData.descr}`);
   console.log(`Rating: ${bookData.rating}`);
   console.log(`Web Link: ${bookData.webAddress}`);


   // console.log(`bookData: ${JSON.stringify(bookData)}`);

});



// Server Listening
app.listen(port, () => console.log(`Server Listening on localhost:${port}`));
