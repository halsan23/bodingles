import express from 'express';
import ejs from 'ejs';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));


async function getLocation(city) {
   const geoLoc = await fetch(geoLoc_URL);
   const result = geoLoc.data;
   return {
         name: result.name || "",
         lat: result.latitude,
         lon: result.longitude
   }
}

const city = "Rock Springs";

const geoLoc_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`;

const {name, lat, lon} = getLocation(city);

const weather_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min`;



app.get("/", async ( req, res ) => {
   try {
      console.log(`name: ${name}`);
      console.log(`lat: ${lat}`);
      console.log(`lon: ${lon}`);

      // const result = await axios.get(weather_URL);
      // res.render('index.ejs', { content: result.data });
   } catch (err) {
      console.log(err.message);
      res.render('index.ejs', { content: err.message });
   }
});


app.listen( port, () => console.log(`Server listening on port ${port}`));