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
   console.log(`City: ${res.data[0].name}`);
   console.log(`Latitude: ${res.data[0].lat}`);
   console.log(`Longitude: ${res.data[0].lon}`);
   return {
      name: res.data[0].name || "",
      lat: res.data[0].lat,
      lon: res.data[0].lon
   }
}


app.get("/", async ( req, res ) => {
   try {
      const {name, lat, lon} = await geoLoc("rock springs");

      const result = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}`)

      console.log(result.data[0]);
      // const data = {
      //    name: name,
      //    lat: lat,
      //    lon: lon
      // };
      // res.render('index.ejs', { content: JSON.stringify(data) });
      res.render('index.ejs');
   } catch (error) {
      res.render('index.ejs', { content: error.message });
   }
})






app.listen( port, () => console.log(`Server listening on port ${port}`));