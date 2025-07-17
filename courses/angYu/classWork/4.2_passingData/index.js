import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => res.render("index.ejs"));


app.post("/submit", (req, res) => {
   const data = {
      first: req.body["fName"],
      last: req.body["lName"]
   }
   const len = req.body["fName"].length + req.body["lName"].length

   res.render( "index.ejs", { data, numLetters: len })
});



// enable server "listen" mode
app.listen( port, console.log(`Server is running on http://localhost: ${port}`) );
