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
   let userInput = userIn[0].toUpperCase() + userIn.slice(1);
   console.log(userInput);

   try {
      const result = await db.query(
         "select country_code from countries where country_name = $1",
         [userInput]
      );

      if (result.rows.length !== 0) {
         const data = result.rows[0];
         const countryCode = data.country_code;
         console.log(countryCode);

         try {
            await db.query("insert into visited_countries (country_code) values ($1)",
               [countryCode]
            );
            res.redirect("/");
         } catch (err) {
            const countries = await checkVisited();
            res.render("index.ejs", {
               countries: countries,
               total: countries.length,
               error: "Country has already been added, try again.",
            });
         }
      }
   } catch (err) {
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs", {
         countries: countries,
         total: countries.length,
         error: "Country name does not exist, try again.",
      });
   }
});



// ====================================================================== //

app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
