// Secrets - get/post/put/patch/delete
// ====================================================================
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/
// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// ====================================================================

// Imports
import express from "express";
import axios from "axios";

// Assign Variables
const app = express();
const port = process.env.PORT || 3000;
const API_URL = "https://secrets-api.appbrewery.com";


// API Authentication
// (use postman if new bearerToken needed)
const yourBearerToken = "7199e446-2dc9-45c3-8960-f9a6f388e1da";
const config = {
   headers: { Authorization: `Bearer ${yourBearerToken}` },
};

// app assets and form processing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


// Display default page - index.ejs
app.get("/", (req, res) => {
   res.render("index.ejs");
});


// get Secret by ID#
app.post("/get-secret", async (req, res) => {
   const searchId = req.body.id;
   try {
      const result = await axios.get(API_URL + "/secrets/" + searchId, config);
      console.log(result.data);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
   } catch (error) {
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
   }
});


// post a new Secret
app.post("/post-secret", async (req, res) => {
   // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
   try {
      const result = await axios.post(`${API_URL}/secrets`, req.body, config);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
   } catch (error) {
      res.render("index.ejs", { content: error.response.data });
   }
});


// put - replace existing Secret data with new Secret data
app.post("/put-secret", async (req, res) => {
   const searchId = req.body.id;
   // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
   try {
      const result = await axios.put(`${API_URL}/secrets/${searchId}`, req.body, config);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
   } catch (error) {
      res.render("index.ejs", { content: error.response.data });
   }
});


// patch (modify) some of an existing Secret data
app.post("/patch-secret", async (req, res) => {
   const searchId = req.body.id;
   // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
   try {
      const result = await axios.patch(
         API_URL + "/secrets/" + searchId,
         req.body,
         config
      );
      res.render("index.ejs", { content: JSON.stringify(result.data) });
   } catch (error) {
      res.render("index.ejs", { content: error.response.data });
   }
});


// delete a secret by ID#
app.post("/delete-secret", async (req, res) => {
   const searchId = req.body.id;
   // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
   try {
      const result = await axios.delete(`${API_URL}/secrets/${searchId}`, config);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
   } catch (error) {
      res.render("index.ejs", { content: error.response.data });
   }
});


// Server Listening
app.listen(port, () => console.log(`Server running on port ${port}`));
