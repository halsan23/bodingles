import express from 'express';
import axios from 'axios';
import ejs from 'ejs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


async function geoLoc(city) {
   const result = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
   return {
      name: result.data.results[0].name || "",
      lat: result.data.results[0].latitude,
      lon: result.data.results[0].longitude
   }
}


app.get('/', async (req, res) => {
   res.render('index.ejs');
})


app.post('/', async (req, res) => {
   let city = req.body.location;
   console.log(city);


   try {
      const {name, lat, lon} = await geoLoc(city);
      console.log(name);
      console.log(lat);
      console.log(lon);

      // const result = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_min,temperature_2m_max&models=gfs_seamless&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto&forecast_days=1&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=fahrenheit`);

      // console.log(result.data);

      let weatherData = {
         name: name,
         lat: lat,
         lon: lon
         // weather: result.data
      }

      res.render('index.ejs', { content: JSON.stringify(weatherData) });


   } catch (err) {
      let weatherData = {
         error: "Location Not Found"
      }
      res.render('index.ejs', { content: JSON.stringify(weatherData) });
   }
})


app.listen( port, () => console.log(`Server listening on port ${port}`));