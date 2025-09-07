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
         author: result.docs[0].author_name[0],
         published: result.docs[0].first_publish_year
      }

      const bookCover = `https://covers.openlibrary.org/b/olid/${result.docs[0].cover_edition_key}-M.jpg`;
      bookData.cover = bookCover;

      return bookData;
   } catch (err) {
      return 'Book not Found';
   }
}

async function getDescr(olid) {
   try {
      const response = await axios.get(`https://openlibrary.org/works/${olid}.json`);
      const result = response.data;
      let bookDescr = result.description.value.substr(0, 450) + " . . .";
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

   if (bookData === 'Book not Found') {
      const result = 'SELECT * FROM bookdata ORDER BY id ASC';
      db.query(result, (err, results) => {
         if (err) {
            console.log(err);
         } else {
            const books = results.rows
            const err = 'Book Not Found';
            res.render("index.ejs", { bookdata: books, error: err });
         }
      });
   } else {
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
   }
});


app.post('/edit', async (req, res) => {
   const bookId = req.body.id;
   const result = `SELECT * FROM bookdata WHERE id = ${bookId}`;
   db.query(result, (err, results) => {
      if (err) {
         console.log(err);
      } else {
         const book = results.rows[0];
         res.render("edit.ejs", { bookdata: book });
      }
   });
});


app.post('/update', async (req, res) => {
   const bookTitle = req.body.bookTitle;
   const bookolid = req.body.bookolid;
   const editolid = req.body.editolid;
   const author = req.body.author;
   const published = req.body.published;
   const rating = req.body.rating;
   const cover = req.body.cover;
   const webaddress = req.body.webaddress;
   const descr = req.body.descr;

   console.log(`Title: ${bookTitle}`);
   console.log(`Olid: ${bookolid}`);
   console.log(`Edition Olid: ${editolid}`);
   console.log(`Author: ${author}`);
   console.log(`First Published: ${published}`);
   console.log(`Rating: ${rating}`);
   console.log(`Cover Address: ${cover}`);
   console.log(`Web Address: ${webaddress}`);
   console.log('Book Description: ');
   console.log(descr);
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
