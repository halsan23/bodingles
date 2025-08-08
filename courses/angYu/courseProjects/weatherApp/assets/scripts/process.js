//  Dinkle Weatherby's      //
//  Weather Prognosticator  //
//  badDoggy  --  08/25     //
// =========================//


// assign variables
const form = document.querySelector('form');
const errText = document.querySelector('#errText');
const todaysDate = document.querySelector('#todaysDate');


// FUNCTIONS //
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

// get geo location data (lat, lon)
async function getLocation(location){
     const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
     const data = await res.json();
     const result = data.results[0];
     return {
          name: result.name || "",
          lat: result.latitude,
          lon: result.longitude
     }
}

// get weather Data from lat, lon
async function getWeather(location){
     const {lat,lon,name} = await getLocation(location);
     const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min`);
     const data = await res.json();
     return {
          name,
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

      // process variables return from api for output
      const mon = month[weather.current.time.substring(5,7)];
      const day = weather.current.time.substring(8,10);
      const yr = weather.current.time.substring(0,4);
      const today = `${mon} ${day}, ${yr}`;

      // Output Weather Data
      todaysDate.innerText = today;


      // console.log(today);
   } catch {
      errText.textContent = "Location Not Found"
   }
});











// Email Validation
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}