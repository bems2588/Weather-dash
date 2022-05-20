var API_KEY = 'a43961e85a9d95d1578f2f1e592841d4';

var cities = [];
console.log(cities);


function displayWeatherData(city) {
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&appid=" + API_KEY;

};