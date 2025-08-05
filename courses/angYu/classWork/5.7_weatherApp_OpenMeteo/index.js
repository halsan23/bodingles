// imports
import express from 'express';
import axios from 'axios';

// assign variables
const app = express();
const port = process.env.PORT || 3000;

// open weather api key
const API_KEY = '8b5d73b32057640275ed690dbbc81510';
// openWeather wmoCodes
// https://openweathermap.org/weather-conditions


// GENERAL FUNCTIONS //
// ===================================================== //

// Convert unix time to standard time format
function getTime(unix_timestamp) {
   var date = new Date(unix_timestamp * 1000);
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var ampm = hours >= 12 ? 'PM' : 'AM';
   hours = hours % 12;
   hours = hours ? hours : 12; // the hour '0' should be '12'
   minutes = minutes < 10 ? '0' + minutes : minutes;
   return hours + ':' + minutes + ' ' + ampm;
}

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


// Flow Control Designations //
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// ===================================================== //


// process city/zip inputs
async function processInput(location) {
   const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
   const isZipCode = zipRegex.test(location);

   if (isZipCode) {
      try {
         const result = await axios.get(`
            http://api.openweathermap.org/geo/1.0/zip?zip=${location}&appid=${API_KEY}`);
         return result.data.name;
      } catch (err) {
         console.log(err);
      }
   } else {
      return location;
   }
}

// get latitude, longitude needed for weather API
async function geoLoc(location) {
   const result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}
`);
   return {
      city: result.data[0].name || "",
      state: result.data[0].state,
      lat: result.data[0].lat,
      lon: result.data[0].lon
   }
}

// get weather data
async function getWeather(city, state, lat, lon) {
   const result = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${API_KEY}`);


   // Convert unix timestamp into regular time
   console.log(getTime(1684977332));


   // build Weather Data Object
   let weatherData = {
      city: city,
      state: states[state],
      currTemp: Math.floor(result.data.current.temp),
      feelsLike: Math.floor(result.data.current.feels_like),
      baro: Math.round(((result.data.current.pressure * 0.02953) + Number.EPSILON) * 100) / 100,
      lowTemp: Math.floor(result.data.daily[0].temp.night),
      highTemp: Math.floor(result.data.daily[0].temp.max),
      windDirect: windConvert(result.data.current.wind_deg),
      windSpeed: Math.floor(result.data.current.wind_speed),
      gusts: Math.floor(result.data.current.wind_gust),
      icon: 'images/icons/' + result.data.current.weather[0].icon + '.svg'
   }

      console.log(weatherData);
   // return the finished Weather Data Object for output
   return weatherData;
}


// GET / POST requests
// ===================================================== //

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
   let location = await processInput(req.body.location.trim());
   const {city, state, lat, lon} = await geoLoc(location);
   try {
      const weatherData = await getWeather(city, state, lat, lon);
      res.render('index.ejs', { content: JSON.stringify(weatherData) });
   } catch (err) {
      let weatherData = {
         error: { err }
      }
      res.render('index.ejs', { content: JSON.stringify(weatherData) });
   }
})


// start server in "listening mode"
app.listen( port, () => console.log(`Server listening on port ${port}`));