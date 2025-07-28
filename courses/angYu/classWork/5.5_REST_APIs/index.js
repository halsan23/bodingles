import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;
const API_URL = "https://secrets-api.appbrewery.com";
const initOutput = "To edit/delete a secret, enter ID # (1 - 50), send GET Request. To add a new secret: enter the new secret & emScore, send a POST Request.";


// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/
// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example


//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "7199e446-2dc9-45c3-8960-f9a6f388e1da";
const config = {
   headers: { Authorization: `Bearer ${yourBearerToken}` },
};


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
   res.render("index.ejs", { content: initOutput });
});


app.post("/get-secret", async (req, res) => {
   const searchId = req.body.id;
   try {
      const result = await axios.get(API_URL + "/secrets/" + searchId, config);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
   } catch (error) {
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
   }
});


app.post("/post-secret", async (req, res) => {
   // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
});


app.post("/put-secret", async (req, res) => {
   const searchId = req.body.id;
   // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
});


app.post("/patch-secret", async (req, res) => {
   const searchId = req.body.id;
   // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
});


app.post("/delete-secret", async (req, res) => {
   const searchId = req.body.id;
   // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
});


app.listen(port, () => console.log(`Server running on port ${port}`));
