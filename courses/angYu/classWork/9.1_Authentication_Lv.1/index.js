import express from "express";
import pg from 'pg';

const app = express();
const port = process.env.PORT || 3000;

const db = new pg.Client({
   user: "postgres",
   password: "password",
   host: "localhost",
   database: "secrets",
   port: 5432,
});
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ============================================================================== //
// GET Routes
app.get("/", (req, res) => {
   res.render("home.ejs");
});


app.get("/login", (req, res) => {
   res.render("login.ejs");
});


app.get("/register", (req, res) => {
   res.render("register.ejs");
});

// ============================================================================== //
// POST Routes
app.post("/login", async (req, res) => {
   let email = req.body.email.trim();
   let pswd = req.body.password.trim();

   try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
         email,
      ]);
      if (result.rows.length > 0) {
         const user = result.rows[0];
         const storedPassword = user.pswd;
         if (pswd === storedPassword) {
            res.render("secrets.ejs");
         } else {
            let err = "Incorrect Password";
            res.render('login.ejs', {error: {err}});
         }
      } else {
         let err = "User not found";
         res.render('login.ejs', {error: {err}});
      }
   } catch (err) {
      console.log(err);
   }
});


app.post("/register", async (req, res) => {
   let email = req.body.email.trim();
   let pswd = req.body.password.trim();

   try {
      const chkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);

      if ( chkResult.rows.length > 0 ) {
         res.send('Email already exists, try logging in.');
      } else {
         const results = await db.query(
            'INSERT INTO users (email, pswd) VALUES ($1, $2)',
            [email, pswd]
         );
         console.log(results);
         res.render("secrets.ejs");
      }
   } catch (err) {
      console.log(err);
   }
});

// ============================================================================== //

app.listen(port, () => console.log(`Server running on port ${port}`));
