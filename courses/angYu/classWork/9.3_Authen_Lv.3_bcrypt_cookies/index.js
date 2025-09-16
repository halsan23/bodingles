import express from 'express';
import pg from 'pg';
import bcrypt from 'bcrypt';

import passport from 'passport';
import { Strategy } from 'passport-local';
import session from 'express-session';
import env from "dotenv";


const app = express();
const port = process.env.PORT || 3000;
const saltRounds = 10;
env.config();

app.use(
   session({
      secret: "TOPSECRETWORD",
      resave: false,
      saveUninitialized: true,
   })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());


const db = new pg.Client({
   user: "postgres",
   password: "password",
   host: "localhost",
   database: "secrets",
   port: 5432,
});
db.connect();


// GET Routes
// ================================================================ //
app.get("/", (req, res) => {
   res.render("index.ejs");
});

app.get("/login", (req, res) => {
   res.render("login.ejs");
});

app.get("/register", (req, res) => {
   res.render("register.ejs");
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get('/secrets', (req, res) => {
   console.log(req.user);
   if (req.isAuthenticated()) {
      console.log('Is Authenticated')
      res.render("secrets.ejs");
   } else {
      console.log('Is Not Authenticated')
      res.redirect("/login");
   }
});


// POST Routes
// ================================================================ //
app.post(
   "/login",
   passport.authenticate("local", {
      successRedirect: "/secrets",  // redirect to "/secrets" if authorized
      failureRedirect: "/login",  // redirect to "/login" if unauthorized
}));

app.post("/register", async (req, res) => {
   const email = req.body.email.trim();
   const password = req.body.password.trim();

   try {
      const chkResult = await db.query("SELECT * FROM users WHERE email = $1", [
         email,
      ]);

      if ( chkResult.rows.length > 0 ) {
         req.redirect("/login");
      } else {
         bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
               console.error("Error hashing password:", err);
            } else {
               const result = await db.query(
                  'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
                  [email, hash]
               );
               const user = result.rows[0];
               req.login(user, (err) => {
                  console.log("Successful Registration");
                  res.redirect("/secrets");
               });
            }
         });
      }
   } catch (err) {
      console.log(err);
   }
});

// Passport POST Routes
// ================================================================ //
passport.use(
   new Strategy(async function verify(email, password, cb) {

      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);

      try {
         const result = await db.query("SELECT * FROM users WHERE email = $1", [
            email,
         ]);

         if (result.rows.length > 0) {
            const user = result.rows[0];
            const storedHashedPassword = user.password;

            bcrypt.compare(password, storedHashedPassword, (err, valid) => {
               if (err) {
                  console.error("Error comparing passwords:", err);
                  return cb(err);
               } else {
                  if (valid) {
                     console.log("Passwords Match");
                     return cb(null, user);
                  } else {
                     console.log("Passwords Do Not Match");
                     return cb(null, false);
                  }
               }
            });
         } else {
            console.log("User Not Found");
            return cb('User Not Found');
         }
      } catch (err) {
         console.log(err);
      }
   })
);

passport.serializeUser((user, cb) => {
   cb(null, user);
});
passport.deserializeUser((user, cb) => {
   cb(null, user)
});


// ================================================================ //

app.listen(port, () => console.log(`Server running on port ${port}`));
