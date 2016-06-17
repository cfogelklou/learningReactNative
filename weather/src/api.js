var lodash = require('lodash');
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=021c5b19a5e9886930fc26466f3e4794'

var kelvinToC = function(kelvin) {
    return Math.round((kelvin-273.15)) + '°C';
}

module.exports = function(latitude, longitude) {
    // fetch is a function that gets a url
    //var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
    var url = rootUrl + '&lat=' + latitude + '&lon=' + longitude;

    // fetch is built in.  Returns a promise
    return fetch(url)
    .then(function(response){
        // Nasty thing about fetch, response not directly usable.
        return response.json()
    })
    .then(function(json){
        console.log(json);
        return {
            city: lodash.capitalize(json.name),
            temperature: kelvinToC(json.main.temp),
            description: lodash.capitalize(json.weather[0].description)
        }
    });
}