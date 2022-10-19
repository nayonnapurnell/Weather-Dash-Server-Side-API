//Get HTML Elements
var weather_result = document.getElementsByClassName('currentCityWeather');
var weatherSearchBtn = document.getElementById('weatherSearchResult');

//Event listener for the Weather Search Button
//weatherSearchBtn.addEventListener('click', getCurrentWeather);



function getApi() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=416e955c8b7d5eebd548200f74e3a752';



 fetch(requestUrl)
 //Waiting to get the response
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
    console.log(data);
    });

}
getApi();