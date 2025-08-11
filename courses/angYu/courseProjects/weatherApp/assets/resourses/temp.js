function getCityName() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const city = data.locality;
                console.log('City:', city);
            })
            .catch(error => console.error('Error:', error));
    });
}

getCityName();



How to Get a User's Current Location from the Browser with the Geolocation API - JavaScript
https://www.youtube.com/watch?v=OvDu9c8PYrk