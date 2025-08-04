// imports
import express from 'express';
import axios from 'axios';

// assign variables
const app = express();
const port = process.env.PORT || 3000;

// State name conversion to two letter designation
const states = {
   'Arizona': 'AZ',
   'Alabama': 'AL',
   'Alaska': 'AK',
   'Arkansas': 'AR',
   'California': 'CA',
   'Colorado': 'CO',
   'Connecticut': 'CT',
   'Delaware': 'DE',
   'Florida': 'FL',
   'Georgia': 'GA',
   'Hawaii': 'HI',
   'Idaho': 'ID',
   'Illinois': 'IL',
   'Indiana': 'IN',
   'Iowa': 'IA',
   'Kansas': 'KS',
   'Kentucky': 'KY',
   'Louisiana': 'LA',
   'Maine': 'ME',
   'Maryland': 'MD',
   'Massachusetts': 'MA',
   'Michigan': 'MI',
   'Minnesota': 'MN',
   'Mississippi': 'MS',
   'Missouri': 'MO',
   'Montana': 'MT',
   'Nebraska': 'NE',
   'Nevada': 'NV',
   'New Hampshire': 'NH',
   'New Jersey': 'NJ',
   'New Mexico': 'NM',
   'New York': 'NY',
   'North Carolina': 'NC',
   'North Dakota': 'ND',
   'Ohio': 'OH',
   'Oklahoma': 'OK',
   'Oregon': 'OR',
   'Pennsylvania': 'PA',
   'Rhode Island': 'RI',
   'South Carolina': 'SC',
   'South Dakota': 'SD',
   'Tennessee': 'TN',
   'Texas': 'TX',
   'Utah': 'UT',
   'Vermont': 'VT',
   'Virginia': 'VA',
   'Washington': 'WA',
   'West Virginia': 'WV',
   'Wisconsin': 'WI',
   Wyoming: 'WY'
}

// WMO Codes
const wmoCodes = {
   0: 'clear',
   1: 'partly-cloudy',
   2: 'partly-cloudy',
   3: 'overcast'
}
// openWeather wmoCodes
// https://openweathermap.org/weather-conditions


// ================================================= //

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// =========================================================================== //

// convert Barometric Pressure from hPa to inHg
// inHg = 0.02953 * hPa
// -----------------------------------------------------------------
// the math is correct but we are getting unreliable pressure data
// from the API, so we can't display the Baro Press data


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

// get latitude, longitude needed for weather API
async function geoLoc(location) {
   const result = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
   return {
      city: result.data.results[0].name || "",
      state: result.data.results[0].admin1,
      lat: result.data.results[0].latitude,
      lon: result.data.results[0].longitude
   }
}

// get weather data
async function getWeather(city, state, lat, lon) {
   const result = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=is_day&current=temperature_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`);


   const windDir = windConvert(result.data.current.wind_direction_10m);
   const pressure = Math.round(((result.data.current.surface_pressure * 0.02952998) + Number.EPSILON) * 100) / 100;

   const icon = `images/icons/${wmoCodes[result.data.current.weather_code]}.svg`;

   let weatherData = {
      city: city,
      state: states[state],
      windDirect: windDir,
      baro: pressure,
      icon: icon,
      conditions: result.data
   }

   return weatherData;
}

// =========================================================================== //


// display basic page
app.get('/', async (req, res) => {
   const city = 'Salt Lake City';
   const state = 'Utah';
   const lat = 40.7596198;
   const lon = -111.886797;
   try {
      const weatherData = await getWeather(city, state, lat, lon)
      res.render('index.ejs', { content: JSON.stringify(weatherData) });
   } catch (err) {
      let weatherData = {
         error: "Location Not Found"
      }
      res.render('index.ejs', { content: JSON.stringify(weatherData) });
   }
})


// process input for weather display
app.post('/', async (req, res) => {
   let location = req.body.location;
   const {city, state, lat, lon} = await geoLoc(location);
   try {
      const weatherData = await getWeather(city, state, lat, lon)
      res.render('index.ejs', { content: JSON.stringify(weatherData) });
   } catch (err) {
      let weatherData = {
         error: "Location Not Found"
      }
      res.render('index.ejs', { content: JSON.stringify(weatherData) });
   }
})


// start server in "listening mode"
app.listen( port, () => console.log(`Server listening on port ${port}`));