import express from 'express';
import pg from 'pg';
import bcrypt from 'bcrypt';

// imports for cookies & sessions
import session from 'express-session';  // starts a new session to save data (our login data)
import passport from 'passport';  // authentication middleware
import { Strategy } from 'passport-local';  //local "Strategy" for controlling our session

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

// create a new instance of the user session created above, to save our login info
// ** this must be done BEFORE initializing Passport **
app.use(
   session({
      // need to specify some options
      // the secret is used to sign the session cookie
      // REQUIRED - can be any string you like
      secret: "TOPSECRETWORD",
      // set resave (in this instance - false, because we are saving our session locally on our server)
      // weather or not to save the session back to the store
      resave: false,
      // set "saveUninitialized" - Forces a session that is "uninitialized" to be saved to the store
      saveUninitialized: true
   })
);

// need to initialize passport
// ** this must be done AFTER setting up the SESSION **
app.use(passport.initialize());
app.use(passport.session());


// GET Routes
// ============================================================================== //
app.get("/", (req, res) => {
   res.render("home.ejs");
});


app.get("/login", (req, res) => {
   res.render("login.ejs");
});


app.get("/register", (req, res) => {
   res.render("register.ejs");
});

// create a new "get" rout to our secrets using our cookies and session to control authentication
app.get('/secrets', (req, res) => {
   // console.log(req.user);

   // use the "isAuthenticated" module of Passport to check for authentication
   if (req.isAuthenticated()) {
      res.render('secrets.ejs');
   } else {
      res.redirect('/login');
   }
});


// POST Routes
// ============================================================================== //

// NO LONGER NEEDED DUE TO THE PASSPORT.USE STRATEGY BELOW
// ---------------------------------------- //
// app.post("/login", async (req, res) => {

//    let email = req.body.email.trim();
//    let userPswd = req.body.password.trim();

//    // MOVED TO THE PASSPORT.USE STRATEGY BELOW
//    // ---------------------------------------- //
//    try {
//       const result = await db.query("SELECT * FROM users WHERE email = $1", [
//          email,
//       ]);
//       if (result.rows.length > 0) {
//          const user = result.rows[0];
//          const pswdHash = user.pswd;

//          // decrypt the store password hash to compare with users entered password
//          // syntax:
//          // bcrypt.compare(user entered password, password hash stored in db)
//          bcrypt.compare(userPswd, pswdHash, (err, result) => {
//             if (err) {
//                // if comparison error, log the error
//                console.log('Error comparing password to hash', err);
//             } else {
//                // result returns true/false
//                // if we got to here, userName & password match
//                if (result) {
//                   res.render("secrets.ejs");
//                } else {
//                   // if we got to here, userName matches but, password does not
//                   let err = "Incorrect Password";
//                   res.render('login.ejs', {error: {err}});
//                }
//             }
//          });
//       } else {
//          // if username does not match db
//          let err = "User not found";
//          res.render('login.ejs', {error: {err}});
//       }
//    } catch (err) {
//       // if problem with db query
//       console.log('Problem with db query', err);
//    }
// });

// change from original file for passport control
// this will trigger the "passport.use" code section below to check isAuthorized utilizing a "local" strategy
app.post("/login", passport.authenticate('local', {
   successRedirect: "/secrets",  // redirect to "/secrets" if authorized
   failureRedirect: "/login"  // redirect to "/login" if unauthorized
}));


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
               // console.log(results); // results of "insert" db query
               res.render("secrets.ejs");
            }
         })
      }
   } catch (err) {
      console.log(err);
   }
});


// passport strategy - ** must go at the bottom of the code before the app.listen
// ============================================================================== //
// register a "New Strategy"
// in passport, the callback is always referred to as 'cb'
// this will verify if the user isAuthenticated and replaces the original '/login' POST route
// passport grabs the email and password from the originating inputs within login.ejs
passport.use(new Strategy(async function verify(email, password, cb) {
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
         bcrypt.compare(password, pswdHash, (err, result) => {
            if (err) {
               // change from original file for passport control
               // if comparison error, log the error
               // console.log('Error comparing password to hash', err);
               return cb(err);

               // ** RETURN AN ERROR IF THERE IS A PROBLEM RUNNING BCRYPT.COMPARE
            } else {
               // result returns true/false
               // if we got to here, userName & password match
               if (result) {
                  // change from original file for passport control
                  // res.render("secrets.ejs");
                  return cb(null, user);  // null because nno errors
               } else {
                  // change from original file for passport control
                  // if we got to here, userName matches but, password does not
                  // let err = "Incorrect Password";
                  // res.render('login.ejs', {error: {err}});
                  return cb(null, false);  // password match is false - null because invalid match is not a code error

                  // ** SO WE ARE GOING TO RETURN USER EMAIL/PASSWORD IF AUTHENTICATED
                  // ** AND RETURN FALSE IF USER EMAIL/PASSWORD IS NOT AUTHENTICATED
               }
            }
         });
      } else {
         // change from original file for passport control
         // if username does not match db
         // let err = "Invalid Email";
         // res.render('login.ejs', {error: {err}});
         return cb('User Not Found');
      }
   } catch (err) {
      // change from original file for passport control
      // if problem with db query
      // console.log('Problem with db query', err);
      return cb(err);  // if problem with db query
   }
}));

// and just before the app.listen ...
// save the data of the user that is logged in, to the local storage,

// this "serializes" the data for storage, and,
passport.serializeUser((user, cb) => {
   cb(null, user);
});
// "deserializes" the data upon retrieval for use
passport.deserializeUser((user, cb) => {
   cb(null, user);
});


// ============================================================================== //

app.listen(port, () => console.log(`Server running on port ${port}`));
