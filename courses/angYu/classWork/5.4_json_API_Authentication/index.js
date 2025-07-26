// imports
import express from "express";
import axios from "axios";


// assign variables
const app = express();
const port = process.env.PORT || 3000;
const API_URL = "https://secrets-api.appbrewery.com";


app.use(express.static("public"));


// authentication variables
const user = "userName";
const pswd = "passWord";
// const user = "badDoggy";
// const pswd = "bd";
// const user = "halsan";
// const pswd = "hs";
const apiKey = "36340182-655c-48b3-a826-078fd3f6eb54";
const bearToken = "0882c14d-075c-444e-a2d4-03c5c7f3a924";
const config = {
  headers: { Authorization: `Bearer ${bearToken}` },
};


// generate basic page
app.get("/", (req, res) => {
   res.render("index.ejs");
});


// STANDARDIZATION
// data results with only one result are converted to array's for display purposes in index.ejs
// data results with multiple results are already in array format so no conversion is necessary
// this simplifies the output process in index.ejs
// ========================================================================================== //


// generate no authentication page
app.get("/noAuth", async (req, res) => {
   try {
      const result = await axios.get(`${API_URL}/random`)
      const data = {
         title: "Random Secret",
         secrets: [ result.data ]
      }
      res.render("index.ejs", { content: JSON.stringify(data) });
   } catch (error) {
      res.render("index.ejs", { content: error.message });
   }
});


// generate basic authentication page (username, password)
app.get("/basicAuth", async (req, res) => {
   try {
      const result = await axios.get(`${API_URL}/all?page=2`, {
         auth: {
            username: user,
            password: pswd,
         }
      });
      const data = {
         title: "Secrets: Page 2",
         secrets: result.data
      }
      res.render("index.ejs", { content: JSON.stringify(data) });
   } catch (error) {
      res.render("index.ejs", { content: error.message });
   }
});


// generate api authentication page (API Key)
app.get("/apiKey", async (req, res) => {
   try {
      const result = await axios.get(`${API_URL}/filter?score=5&apiKey=${apiKey}`);
      const data = {
         title: "Secrets with a EM Score of at least 5",
         secrets: result.data
      }
      res.render("index.ejs", { content: JSON.stringify(data) });
   } catch (error) {
      res.render("index.ejs", { content: error.message });
   }
});


// generate token authentication page (Bearer Token)
app.get("/bearerToken", async (req, res) => {
   try {
      const result = await axios.get(`${API_URL}/secrets/42`, config );
      const data = {
         title: "Secret #42",
         secrets: [ result.data ]
      }
      res.render("index.ejs", { content: JSON.stringify(data) });
   } catch (error) {
      res.render("index.ejs", { content: error.message });
   }
});


app.listen(port, () => console.log(`Server is running on port ${port}`));
