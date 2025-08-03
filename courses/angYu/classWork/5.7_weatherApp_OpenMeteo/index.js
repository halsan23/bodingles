import express from 'express';
import axios from 'axios';
import ejs from 'ejs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ================================================================================= //

// get latitude, longitude from city name
async function geoLoc(location) {
   const result = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);

   return {
      city: result.data.results[0].name || "",
      state: result.data.results[0].admin1,
      lat: result.data.results[0].latitude,
      lon: result.data.results[0].longitude
   }
}


app.get('/', async (req, res) => {
   res.render('index.ejs');
})

// ================================================= //
// inHg = 0.02953 * hPa
// ================================================= //

app.post('/', async (req, res) => {
   let location = req.body.location;
   try {
      const {city, state, lat, lon} = await geoLoc(location);
      const result = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=is_day&current=temperature_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`);

      console.log(result.data);

      let weatherData = {
         city: city,
         state: state,
         conditions: result.data
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