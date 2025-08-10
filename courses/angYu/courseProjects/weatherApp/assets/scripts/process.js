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
const todayOutlook = document.querySelector('#todayOutlook');
const todaysWinds = document.querySelector('#todaysWinds');
const dewPoint = document.querySelector('#dewPoint');
const todayRise = document.querySelector('#todayRise');
const todaySet = document.querySelector('#todaySet');
const alerts = document.querySelector('#alerts');
const alertName = document.querySelector('#alertName');
const alertTime = document.querySelector('#alertTime');
const alertDescr = document.querySelector('#alertDescr');

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
// covert wind degrees into standard notation
function winds(direction) {
   if (direction > 23 && direction <= 68) {
      return 'NE';
   } else if (direction > 68 && direction <= 114) {
      return 'E';
   } else if (direction > 114 && direction <= 159) {
      return 'SE';
   } else if (direction > 159 && direction <= 204) {
      return 'S';
   } else if (direction > 204 && direction <= 249) {
      return 'SW';
   } else if (direction > 249 && direction <= 294) {
      return 'W';
   } else if (direction > 294 && direction <= 339) {
      return 'NW';
   } else {
      return 'N';
   }
}

// Convert Time from UNIX
function amPM (time) {
   const tempSet = new Date(time * 1000).toTimeString().substring(0,2);
   if ( tempSet > 12 ) {
      let set = tempSet - 12;
      let newTempSet = set + new Date(time * 1000).toTimeString().substring(2,5);
      return `${newTempSet} PM`;
   } else {
      return `${new Date(time * 1000).toTimeString().substring(0,5)} AM`;
   }
}

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
   const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=8b5d73b32057640275ed690dbbc81510`);
   const data = await res.json();

   return {
      city,
      state,
      current: data.current,
      daily: data.daily,
      alerts: data.alerts
   }
}


// add click event to html form input
// process the weather request
form.addEventListener('submit', async evt => {
   evt.preventDefault();
   const locate = document.getElementById('location').value;

   try {
      const weather = await getWeather(locate);

      // process variables returned from api for output
      // Todays Date
      todaysDate.innerHTML = `<b>${new Date(weather.current.dt*1000).toDateString()}</b>`;

      // weather Icon and Status
      const todaysIcon = ``;
      todayIcon.innerHTML = `<img src="assets/images/icons/${weather.current.weather[0].icon}.svg" alt="Weather Image">`;
      todayConditions.innerHTML = `<b>${weather.current.weather[0].main}</b>`;

      // City, State
      cityState.innerText = `${weather.city}, ${st[weather.state]}`;

      // current temp / feels like
      currTemp.innerText = `Current Temp: ${Math.floor(weather.current.temp)}°F`;
      feelsLike.innerText = `Feels Like: ${Math.floor(weather.current.feels_like)}°F`;

      // todays high / low
      highTemp.innerText = `High: ${Math.floor(weather.daily[0].temp.max)}°F`;
      lowTemp.innerText = `Low: ${Math.floor(weather.daily[0].temp.min)}°F`;

      // todays forecast
      todayOutlook.innerText = `Today's Outlook: ${weather.daily[0].summary}.`;

      // winds
      let todaysWind = `Winds ${winds(weather.current.wind_deg)} @ ${Math.floor(weather.current.wind_speed)}`;
      if (weather.current.wind_gust) {
         todaysWind+= ` with gusts to ${Math.floor(weather.current.wind_gust)}`;
      }
      todaysWinds.innerText = todaysWind;

      // dew point
      dewPoint.innerText = `Dew Point ${Math.floor(weather.current.dew_point)}°F`;

      // Barometric Pressure
      const tbaro = Math.round(((weather.current.pressure * 0.029529983071445) + Number.EPSILON) * 100) / 100;
      if (tbaro.toString().length < 3 ) {
         let baro = tbaro + '.00';
         todaysBaro.innerText = `Barometric Pressure ${baro} inHg`;
      } else {
         todaysBaro.innerText = `Barometric Pressure ${Math.round(((weather.current.pressure * 0.029529983071445) + Number.EPSILON) * 100) / 100} inHg`;
      }

      // sunrise / sunset
      todayRise.innerText = `Sunrise: ${amPM(weather.current.sunrise)}`;
      todaySet.innerText = `Sunset: ${amPM(weather.current.sunset)}`;

      if (!weather.alerts) {
         alerts.style.display = 'none';
      } else {
         alerts.style.display = 'block';
         alertName.innerHTML =`Alert: ${weather.alerts[0].event}`;
         alertTime.innerHTML = `Start: ${amPM(weather.alerts[0].start)}
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         End: ${amPM(weather.alerts[0].end)}`;
         alertDescr.innerText = weather.alerts[0].description;
      }

   } catch {
      todaysDate.innerHTML = '<span style="color: #b10000;"><b>Data Error</b></span>';
   }
});
