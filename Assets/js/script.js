//Get HTML Elements

var citySearchInput = document.getElementById('citySearch');
var stateSearchInput = document.getElementById('stateSearch');
var weather_result = document.querySelector('.currentCityWeather');
var countryCode = 'US';
var tempCityDateEl = document.querySelector('#tempCityDate');
var windCityDateEl = document.querySelector('#windCityDate');
var humidityCityDateEl = document.querySelector('#humidityCityDate');
var weatherIcon = document.querySelector('#weather-icon');

 
var apiKey = '416e955c8b7d5eebd548200f74e3a752';



function getWeather() {
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value},${stateSearchInput.value},us&appid=416e955c8b7d5eebd548200f74e3a752&units=imperial`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      tempCityDateEl.innerText = "Temp: " + JSON.stringify(data.main.temp) + ' \u00B0' +  "F";
      humidityCityDateEl.innerText = "Humidity: " + JSON.stringify(data.main.humidity) + "%";
      windCityDateEl.innerText = "Wind: " + JSON.stringify(data.wind.speed) + " MPH";
      //weatherIcon.innerText = JSON.stringify(data.weather[0].icon);
      //weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    });

}

function display5DAyWeather(){
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearchInput.value},${stateSearchInput.value},us&appid=416e955c8b7d5eebd548200f74e3a752&units=imperial`)
    .then(res => res.json())
    .then(data => {
      console.log(data);

    });
}


var weatherSearchBtn = document.getElementById('weatherSearchButton');
//citySearchInput.value = localStorage.getItem("citySearch");

function getCityInput() {
 getWeather();
 display5DAyWeather();
}

weatherSearchBtn.addEventListener("click", getCityInput);
