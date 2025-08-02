import express from 'express';
import ejs from 'ejs';
import axios from 'axios';


const app = express();
const port = process.env.PORT || 3000;

// Open Weather API Key
const API_KEY = "a443ef5ce9ff06d140f287deeb37e819";

app.use(express.static('public'));

async function geoLoc(city) {
   const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);
   return {
      name: res.data[0].name || "",
      lat: res.data[0].lat,
      lon: res.data[0].lon
   }
}


app.get("/", async ( req, res ) => {
   try {
      const {name, lat, lon} = await geoLoc("rock springs");
      const data = {
         name: name,
         lat: lat,
         lon: lon
      };
      res.render('index.ejs', { content: JSON.stringify(data) });
   } catch (error) {
      res.render('index.ejs', { content: error.message });
   }
})






app.listen( port, () => console.log(`Server listening on port ${port}`));