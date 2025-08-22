import express from 'express';
import pg from 'pg';
const app = express();
const port = process.env.PORT || 3000;

const db = new pg.Client({
   user: "postgres",
   password: "password",
   host: "localhost",
   database: "world",
   port: 5432
});
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ====================================================================== //

app.get("/", async (req, res) => {
  const result = await db.query('select country_code from visited_countries');
   let countries = [];
   result.rows.forEach((country) => {
      countries.push(country.country_code);
   });
   res.render('index.ejs', { countries: countries, total: countries.length });
   db.end();
});

// ====================================================================== //

app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
