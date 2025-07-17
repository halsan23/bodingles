import express from "express";
const app = express();
const port = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// get home page
app.get("/", (req, res) => res.render('index.ejs'));


// post result
app.post("/submit", (req, res) => {
   let name = `${req.body["fName"]} ${req.body["lName"]}`;
   res.render( "index.ejs", { name });
});



// set server to "listen" for request(s)
app.listen(port, () => console.log(`Server running on port ${port}`));
