import express from "express";
const app = express();
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["Apples", "Bananas", "Cherries"],
    htmlContent: "<em>This is some emphasized text</em>",
  };


  res.render( "index.ejs", data );
});



// enable server "listen" mode
app.listen( port, console.log(`Server is running on http://locakhost: ${port}`) );
