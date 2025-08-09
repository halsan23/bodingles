//  Dinkle Weatherby's      //
//  Weather Prognosticator  //
//  badDoggy  --  08/25     //
// =========================//


// assign variables
const form = document.querySelector('form');
const errText = document.querySelector('#errText');
const todaysDate = document.querySelector('#todaysDate');
const todayIcon = document.querySelector('#todayIcon');
const todayConditions = document.querySelector('#todayConditions');
const cityState = document.querySelector('#cityState');
const currTemp = document.querySelector('#currTemp');
const feelsLike = document.querySelector('#feelsLike');
const highTemp = document.querySelector('#highTemp');
const lowTemp = document.querySelector('#lowTemp');


// get weather code Name & icon from wmo_code
const weather_codes = {
     0: {
          name: "Clear Sky",
          icons: {
               day: "clear.svg",
               night: "clear-night.svg"
          }
     },
     1: {
          name: "Mainly Clear",
          icons: {
               day: "clear.svg",
               night: "clear-night.svg"
          }
     },
     2: {
          name: "Partly Cloudy",
          icons: {
               day: "partly-cloudy.svg",
               night: "partly-cloudy-night.svg"
          }
     },
     3: {
          name: "Overcast",
          icons: {
               day: "overcast.svg",
               night: "overcast.svg"
          }
     },
     45: {
          name: "Fog",
          icons: {
               day: "fog.svg",
               night: "fog-night.svg"
          }
     },
     48: {
          name: "Rime Fog",
          icons: {
               day: "rime-fog.svg",
               night: "rime-fog.svg"
          }
     },
     51: {
          name: "Light Drizzle",
          icons: {
               day: "light-drizzle.svg",
               night: "light-drizzle.svg"
          }
     },
     53: {
          name: "Moderate Drizzle",
          icons: {
               day: "drizzle.svg",
               night: "drizzle.svg"
          }
     },
     55: {
          name: "Heavy Drizzle",
          icons: {
               day: "heavy-drizzle.svg",
               night: "heavy-drizzle.svg"
          }
     },
     56: {
          name: "Light Freezing Drizzle",
          icons: {
               day: "drizzle.svg",
               night: "drizzle.svg"
          }
     },
     57: {
          name: "Dense Freezing Drizzle",
          icons: {
               day: "heavy-drizzle.svg",
               night: "heavy-drizzle.svg"
          }
     },
     61: {
          name: "Slight Rain",
          icons: {
               day: "slight-rain.svg",
               night: "slight-rain-night.svg"
          }
     },
     63: {
          name: "Moderate Rain",
          icons: {
               day: "rain.svg",
               night: "rain.svg"
          }
     },
     65: {
          name: "Heavy Rain",
          icons: {
               day: "heavy-rain.svg",
               night: "heavy-rain.svg"
          }
     },
     66: {
          name: "Light Freezing Rain",
          icons: {
               day: "rain.svg",
               night: "rain.svg"
          }
     },
     67: {
          name: "Heavy Freezing Rain",
          icons: {
               day: "heavy-rain.svg",
               night: "heavy-rain.svg"
          }
     },
     71: {
          name: "Slight snowfall",
          icons: {
               day: "light-snow.svg",
               night: "light-snow-night.svg"
          }
     },
     73: {
          name: "Moderate snowfall",
          icons: {
               day: "snow.svg",
               night: "snow.svg"
          }
     },
     75: {
          name: "Heavy snowfall",
          icons: {
               day: "heavy-snow.svg",
               night: "heavy-snow.svg"
          }
     },
     77: {
          name: "Snow Grains",
          icons: {
               day: "snow-grains.svg",
               night: "snow-grains.svg"
          }
     },
     80: {
          name: "Slight Rain Showers",
          icons: {
               day: "slight-rain-showers.svg",
               night: "slight-rain-showers-night.svg"
          }
     },
     81: {
          name: "Moderate Rain Showers",
          icons: {
               day: "rain-showers.svg",
               night: "rain-showers.svg"
          }
     },
     82: {
          name: "Violent Rain Showers",
          icons: {
               day: "heavy-rain-showers.svg",
               night: "heavy-rain-showers.svg"
          }
     },
     85: {
          name: "Light Snow Showers",
          icons: {
               day: "light-snow-showers.svg",
               night: "light-snow-showers.svg"
          }
     },
     86: {
          name: "Heavy Snow Showers",
          icons: {
               day: "heavy-snow-showers.svg",
               night: "heavy-snow-showers.svg"
          }
     },
     95: {
          name: "Thunderstorm",
          icons: {
               day: "thunderstorm.svg",
               night: "thunderstorm.svg"
          }
     },
     96: {
          name: "Slight Hailstorm",
          icons: {
               day: "hail.svg",
               night: "hail.svg"
          }
     },
     99: {
          name: "Heavy Hailstorm",
          icons: {
               day: "heavy-hail.svg",
               night: "heavy-hail.svg"
          }
     }
};
// convert month number to text
const month = {
   '01': 'Jan.',
   '02': 'Feb.',
   '03': 'Mar.',
   '04': 'Apr.',
   '05': 'May.',
   '06': 'June',
   '07': 'July',
   '08': 'Aug.',
   '09': 'Sept.',
   '10': 'Oct.',
   '11': 'Nov.',
   '12': 'Dec.',
}
// abbreviate state names
const st = {
   'Alabama': 'AL',
   'Alaska': 'AK',
   'Arkansas': 'AR',
   'Arizona': 'AZ',
   'California': 'CA',
   'Colorado': 'CO',
   'Connecticut': 'CT',
   'Delaware': 'DE',
   'District of Columbia': 'DC',
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
   'Wyoming': 'WY'
}

// FUNCTIONS //
// get geo location Data (lat, lon)
async function getLocation(location){
   const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
   const data = await res.json();
   const result = data.results[0];

   return {
      city: result.name || "",
      state: result.admin1,
      lat: result.latitude,
      lon: result.longitude
   }
}

// get weather Data from lat, lon
async function getWeather(location){
   const {city, state, lat, lon} = await getLocation(location);
   const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,surface_pressure,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=America%2FDenver&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&daily=weather_code,temperature_2m_max,temperature_2m_min`);
   const data = await res.json();

   return {
      city,
      state,
      current: data.current,
      daily: data.daily
   }
}


// add click event to html form input
// process the weather request
form.addEventListener('submit', async evt => {
   evt.preventDefault();
   const locate = document.getElementById('location').value;

   try{
      const weather = await getWeather(locate);

      // process variables returned from api for output
      // Todays Date
      const mon = month[weather.current.time.substring(5,7)];
      const day = weather.current.time.substring(8,10);
      const yr = weather.current.time.substring(0,4);
      const today = `${mon} ${day}, ${yr}`;
      todaysDate.innerHTML = `<b>${today}</b>`;

      // weather Icon and Status
      let currStatus = weather_codes[weather.current.weather_code].name;
      if (weather.current.is_day === 1) {
         todayIcon.innerHTML = `<img src="assets/images/icons/${weather_codes[weather.current.weather_code].icons.day}" alt="${currStatus} Image">`;
      } else {
         todayIcon.innerHTML = `<img src="assets/images/icons/${weather_codes[weather.current.weather_code].icons.night}" alt="${currStatus} Image">`;
      }
      todayConditions.innerHTML = `<b>${currStatus}</b>`;

      // City, State
      cityState.innerText = `${weather.city}, ${st[weather.state]}`;

      // current temp / feels like
       currTemp.innerText = `Current Temp: ${Math.floor(weather.current.temperature_2m)}°F`;
       feelsLike.innerText = `Feels Like: ${Math.floor(weather.current.apparent_temperature)}°F`;

      //  todays high / low
      highTemp.innerText = `High: ${Math.floor(weather.daily.temperature_2m_max[0])}°F`;
      lowTemp.innerText = `Low: ${Math.floor(weather.daily.temperature_2m_min[0])}°F`;


   } catch {
      todaysDate.innerHTML = '<span style="color: #b10000;">Location Not Found</span>';
   }
});
