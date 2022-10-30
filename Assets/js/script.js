//Get HTML Elements

var citySearchInput = document.getElementById('citySearch');
var stateSearchInput = document.getElementById('stateSearch');
var weather_result = document.querySelector('.currentCityWeather');
var countryCode = 'US';
var tempCityDateEl = document.querySelector('#tempCityDate');
var windCityDateEl = document.querySelector('#windCityDate');
var humidityCityDateEl = document.querySelector('#humidityCityDate');

 
var apiKey = '416e955c8b7d5eebd548200f74e3a752';



function getWeather() {
//'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=416e955c8b7d5eebd548200f74e3a752'


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value},${stateSearchInput.value},us&appid=416e955c8b7d5eebd548200f74e3a752`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
         
    });

}

function displayWeather(data){
  tempCityDateEl.innerText = "Temp: " + `${data}`;
  //tempCityDateEl.innerText = `Temp: ${data}`;
      //windCityDateEl.innerText = `Wind: ${data.wind}`;
     // humidityCityDateEl.innerText = `Humidity: ${data.humidity}`;

}


var weatherSearchBtn = document.getElementById('weatherSearchButton');
//citySearchInput.value = localStorage.getItem("citySearch");


function getCityInput() {
  //localStorage.setItem("citySearch", citySearchInput.value);
  //humidityCityDateEl.innerText = "Loading ...";
 getWeather();
 displayWeather();
}

weatherSearchBtn.addEventListener("click", getCityInput);
