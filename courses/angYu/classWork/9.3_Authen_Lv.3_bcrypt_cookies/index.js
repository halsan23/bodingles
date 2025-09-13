import express from 'express';
import pg from 'pg';
import bcrypt from 'bcrypt';

const app = express();
const port = process.env.PORT || 3000;
const saltRounds = 10;

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
   let userPswd = req.body.password.trim();

   try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
         email,
      ]);
      if (result.rows.length > 0) {
         const user = result.rows[0];
         const pswdHash = user.pswd;

         // decrypt the store password hash to compare with users entered password
         // syntax:
         // bcrypt.compare(user entered password, password hash stored in db)
         bcrypt.compare(userPswd, pswdHash, (err, result) => {
            if (err) {
               // if comparison error, log the error
               console.log('Error comparing password to hash', err);
            } else {
               // result returns true/false
               // if we got to here, userName & password match
               if (result) {
                  res.render("secrets.ejs");
               } else {
                  // if we got to here, userName matches but, password does not
                  let err = "Incorrect Password";
                  res.render('login.ejs', {error: {err}});
               }
            }
         });
      } else {
         // if username does not match db
         let err = "User not found";
         res.render('login.ejs', {error: {err}});
      }
   } catch (err) {
      // if problem with db query
      console.log('Problem with db query', err);
   }
});


app.post("/register", async (req, res) => {
   let email = req.body.email.trim();
   let pswd = req.body.password.trim();

   try {
      const chkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);

      if ( chkResult.rows.length > 0 ) {
         let err = "Email already exists, try logging in.";
         res.render('register.ejs', {error: {err}});
      } else {
         // password hashing with bcrypt
         // syntax:
         // bcrypt.hash(password to encrypt, # of salt rounds, (err if encountered, returned hash variable name) => {});
         bcrypt.hash(pswd, saltRounds, async (err, hash) =>{
            if (err) {
               console.log('Error creating hash:', err)
            } else {
               const results = await db.query(
                  'INSERT INTO users (email, pswd) VALUES ($1, $2)',
                  [email, hash] // store hash in db instead of password
               );
               console.log(results); // results of "insert" db query
               res.render("secrets.ejs");
            }
         })
      }
   } catch (err) {
      console.log(err);
   }
});

// ============================================================================== //

app.listen(port, () => console.log(`Server running on port ${port}`));
