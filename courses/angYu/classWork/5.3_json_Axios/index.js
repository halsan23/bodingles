// imports
import express from 'express';
import axios from 'axios';

// assign variables
const app = express();
const port = process.env.PORT || 3000

// setups for public folder designation
// and ability to retrieve form data
app.use(express.static( 'public'));
app.use(express.urlencoded({ extended: true }));


// get default page (index.ejs)
// spawn random activity data
// using ASYNC so we can AWAIT complete data retrieval
app.get('/', async (req, res) => {
   try {
      const response = await axios.get("https://bored-api.appbrewery.com/random");
      const result = response.data;
      // console.log(result);
      res.render("index.ejs", { data: result });
   } catch (error) {
      // error trap if any errors retrieving data
      // log error to the console
      console.error("Failed to make request:", error.message);
      // output error message to index.ejs so app doesn't crash
      res.render("index.ejs", { error: error.message, });
   }
});


// post request to process form submission from index.ejs
// using ASYNC so we can AWAIT complete data retrieval
app.post('/', async (req, res) => {
   // retrieve form data from index.ejs
   let type = req.body.type;
   let participants = req.body.participants;
   try {
      const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
      const result = response.data;
      // console.log(result);
      // if good result, output it to index.ejs
      res.render("index.ejs", { data: result[Math.floor(Math.random() * result.length)] });
   } catch ( error ) {
      // if error retrieving data,
      // log the error to the console and
      // output error to index.ejs so app doesn't crash
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", { error: "There are no activities that match your search criteria. Please try a new search.", });
   }
});

// enable server "listen" mode
app.listen( port, () => console.log(`Server running on port: ${port}`));