import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.

app.get("/", async (req, res) => {
   try {
      const response = await axios.get("https://bored-api.appbrewery.com/random");
      const result = response.data;
      // console.log(result);
      res.render("index.ejs", { data: result });
   } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
         error: error.message,
      });
   }
});

app.post("/", async (req, res) => {
   console.log(req.body);
   let type = req.body.type;
   let participants = req.body.participants

   try {
      const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
      const result = response.data;
      console.log(result[Math.floor(Math.random() * result.length)]);
      res.render("index.ejs", { data: result[Math.floor(Math.random() * result.length)] });
   } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("solution.ejs", {
         error: "We\'re Sorry but there are no activities that match your search criteria.",
      });
   }
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
