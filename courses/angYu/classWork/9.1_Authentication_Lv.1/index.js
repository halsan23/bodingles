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

   // console.log(`Email: ${email}`);
   // console.log(`Password: ${pswd}`);

   res.redirect(`/`);
});


app.post("/register", async (req, res) => {
   let email = req.body.email.trim();
   let pswd = req.body.password.trim();

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
});

// ============================================================================== //

app.listen(port, () => console.log(`Server running on port ${port}`));
