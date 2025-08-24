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

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// ====================================================================== //
app.get("/", async (req, res) => {
   let countries = await checkVisited();
   res.render('index.ejs', { countries: countries, total: countries.length });
});


app.post("/add", async (req, res) => {
   const userIn = req.body["country"];
   const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%' ",
      [userIn.toLowerCase()]
   );

   // if invalid input
   if (result.rows.length === 0) {
      const countries = await checkVisited();
      res.render("index.ejs", {
         countries: countries,
         total: countries.length,
         error: "No Matches found, Please try again.",
      });

   // if multiple matches
   } else if (result.rows.length > 1) {
      const countries = await checkVisited();
      res.render("index.ejs", {
         countries: countries,
         total: countries.length,
         error: "Multiple matches, Please refine your search criteria.",
      });

   } else {
      const data = result.rows[0];
      const countryCode = data.country_code;

      try {
         // database was set up to accept "UNIQUE" entries only!!
         // so if this fails it's probably because user is trying to enter a country that is already in the database
         await db.query("insert into visited_countries (country_code) values ($1)",
            [countryCode]
         );
         res.redirect("/");

      // if duplicate entry, just reload the current data
      } catch (err) {
         const countries = await checkVisited();
         res.render("index.ejs", {
            countries: countries,
            total: countries.length,
            error: "Country has already been added, Please try again.",
         });
      }
   }
});

// ====================================================================== //

app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
