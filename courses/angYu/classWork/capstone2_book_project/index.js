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
   database: "books",
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

      let bookDescr = result.description.value.substr(0, 500) + " . . .";
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
   const result = 'SELECT * FROM bookdata ORDER BY id ASC';
   db.query(result, (err, results) => {
      if (err) {
         console.log(err);
      } else {
         const books = results.rows
         res.render("index.ejs", { bookdata: books });
      }
   });
});


app.post('/', async (req, res) => {
   let book = req.body.bookTitle.trim();
   let bookData = await getBook(book);
   const bookDesc = await getDescr(bookData.olid);
   bookData.descr = `${bookDesc}`;
   const rating = await getRating(bookData.olid);
   bookData.rating = rating;
   bookData.webAddress = `https://openlibrary.org/works/${bookData.editionOlid}`;
   try {
      await db.query(
         'INSERT INTO bookdata (olid, editolid, title, author, published, descr, rating, cover, webaddress) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
         [bookData.olid, bookData.editionOlid, bookData.title, bookData.author, bookData.published, bookData.descr, bookData.rating, bookData.cover, bookData.webAddress]
      );
      res.redirect("/");
   } catch (err) {
      console.log(err);
   }
});


app.post('/edit', async (req, res) => {
   console.log('edit route');
});


app.post('/delete', async (req, res) => {
   const id = req.body.id;
   const result = `DELETE FROM bookdata WHERE id = ${id}`;
   db.query(result, (err, results) => {
      if (err) {
         console.log(err);
      } else {
      res.redirect("/");
      }
   });
});



// Server Listening
app.listen(port, () => console.log(`Server Listening on localhost:${port}`));
