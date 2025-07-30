import express from 'express';
import axios from 'axios';


const app = express();
const port = process.env.PORT || 3000
const API_URL = "https://secrets-api.appbrewery.com";


app.use(express.static("public"));


app.get("/", async ( req, res ) => {
   try {
      const result = await axios.get(`${API_URL}/random`);
      res.render('index.ejs', { content: JSON.stringify(result.data) });
   } catch (error) {
      res.render('index.ejs', { content: error.message });
   }
})


app.listen( port, () => console.log(`Server running on port ${port}`));
