import express from "express";

const app = express();
const port = process.env.PORT || 3000;

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
app.post("/register", async (req, res) => {
   let email = req.body.email.trim();
   let pswd = req.body.password.trim();

   console.log(`Email: ${email}`);
   console.log(`Password: ${pswd}`);

   res.redirect(`/`);
});


app.post("/login", async (req, res) => {
   let email = req.body.email.trim();
   let pswd = req.body.password.trim();

   console.log(`Email: ${email}`);
   console.log(`Password: ${pswd}`);

   res.redirect(`/`);
});

// ============================================================================== //

app.listen(port, () => console.log(`Server running on port ${port}`));
