import express from 'express';
import axios from 'axios';
import ejs from 'ejs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ================================================================================= //

// convert wind direction degrees to common directions
function windConvert(wd) {
   if (wd > 22 && wd <= 67) {
      return 'NE';
   } else if (wd > 67 && wd <= 112) {
      return 'E';
   } else if (wd > 112 && wd <= 157) {
      return 'SE';
   } else if (wd > 157 && wd <= 202) {
      return 'S';
   } else if (wd > 202 && wd <= 247) {
      return 'SW';
   } else if (wd > 247 && wd <= 292) {
      return 'W';
   } else if (wd > 292 && wd <= 337) {
      return 'NW';
   } else {
      return 'N';
   }
}


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


      const windDir = windConvert(result.data.current.wind_direction_10m);
      // const press = (result.data.current.surface_pressure * 0.02952998);
      const pressure = Math.round(((result.data.current.surface_pressure * 0.02952998) + Number.EPSILON) * 100) / 100;


      let weatherData = {
         city: city,
         state: state,
         windDirect: windDir,
         baro: pressure,
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