import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const user = "userName";
const pswd = "passWord";
const apiKey = "36340182-655c-48b3-a826-078fd3f6eb54";
const bearToken = "0882c14d-075c-444e-a2d4-03c5c7f3a924";

app.get("/", (req, res) => {
   res.render("index.ejs");
});

app.get("/noAuth", async (req, res) => {
   try {
      const result = await axios.get(`${API_URL}/random`)
      res.render("index.ejs", { content: JSON.stringify(result.data.secret) });
   } catch (error) {
      res.render("index.ejs", { content: error.message });
   }
});

app.get("/basicAuth", async (req, res) => {
   try {
      const result = await axios.get(`${API_URL}/all?page=2`, {
         auth: {
            username: user,
            password: pswd,
         },
      });
      // console.log(result.data[2]);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
   } catch (error) {
      res.render("index.ejs", { content: error.message });
   }
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: {
      Authorization: `Bearer <YOUR TOKEN HERE>`
    },
  });
  */
});


app.listen(port, () => console.log(`Server is running on port ${port}`));
