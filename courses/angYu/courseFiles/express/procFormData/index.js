

// use express to extract the form data submitted from our public/index.html
app.use(express.urlencoded({ extended: true }));




// POST request to process form data from public/index.html
app.post("/submit", (req, res) => {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  console.log(`Band Name is: ${bandName}`);
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});
