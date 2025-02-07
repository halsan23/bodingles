// create a NEW XHR request
const req = new XMLHttpRequest();

// if request was successful
req.onload = function () {
   // parse the returned data into JSON data
   const data = JSON.parse(this.responseText);
   // log the JSON data to the console
   console.log(data);
};

// if request returned an error
req.onerror = function () {
   // console log the error
    console.log("ERROR!!!!");
    console.log(this);
};

// request the data
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();