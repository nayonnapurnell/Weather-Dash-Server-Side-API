//Get HTML Elements

var citySearchInput = document.getElementById('citySearch');
var stateSearchInput = document.getElementById('stateSearch');
var weather_result = document.querySelector('.currentCityWeather');
var countryCode = 'US';
var tempCityDateEl = document.querySelector('#tempCityDate');
var windCityDateEl = document.querySelector('#windCityDate');
var humidityCityDateEl = document.querySelector('#humidityCityDate');
var cardBodyCl = document.querySelector('.card-body');
var weatherIcon = document.querySelector('#weather-icon');

 
var apiKey = '416e955c8b7d5eebd548200f74e3a752';



function getWeather() {
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value},${stateSearchInput.value},us&appid=416e955c8b7d5eebd548200f74e3a752&units=imperial`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      tempCityDateEl.innerText = "Temp: " + JSON.stringify(Math.round(data.main.temp)) + ' \u00B0' +  "F";
      humidityCityDateEl.innerText = "Humidity: " + JSON.stringify(data.main.humidity) + "%";
      windCityDateEl.innerText = "Wind: " + JSON.stringify(Math.round(data.wind.speed)) + " MPH";
      //weatherIcon.innerText = JSON.stringify(data.weather[0].icon);
      //weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    });

}

function display5DayWeather(){
  //5-Day Weather Forecast Information
  /***************************************/
  //Day 1
  var day1Date = document.querySelector('#day-1-date');
  var day1Temp = document.querySelector('#day-1-temp');
  var day1Wind = document.querySelector('#day-1-wind');
  var day1Humidity = document.querySelector('#day-1-humidity');
  //Day 2
  var day2Date = document.querySelector('#day-2-date');
  var day2Temp = document.querySelector('#day-2-temp');
  var day2Wind = document.querySelector('#day-2-wind');
  var day2Humidity = document.querySelector('#day-2-humidity');

  //Day 3

  //Day 4

  //Day 5

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearchInput.value},${stateSearchInput.value},us&appid=416e955c8b7d5eebd548200f74e3a752&units=imperial`)
    .then(res => res.json())
    .then(data => {
     console.log(data);
     //Day 1 Weather
     day1Date.innerText = "Date: " + JSON.stringify(data.list[0].dt_txt);
     day1Temp.innerText = "Temp: " + JSON.stringify(Math.round(data.list[0].main.temp)) + ' \u00B0' +  "F";
     day1Wind.innerText = "Wind: " + JSON.stringify(Math.round(data.list[0].wind.speed)) + " MPH";
     day1Humidity.innerText = "Humidity: " + JSON.stringify(Math.round(data.list[0].main.humidity)) + "%";

     //Day 2 Weather
     day2Date.innerText = "Date: " + JSON.stringify(data.list[8].dt_txt);
     day2Temp.innerText = "Temp: " + JSON.stringify(Math.round(data.list[8].main.temp)) + ' \u00B0' +  "F";
     day2Wind.innerText = "Wind: " + JSON.stringify(Math.round(data.list[8].wind.speed)) + " MPH";
     day2Humidity.innerText = "Humidity: " + JSON.stringify(Math.round(data.list[8].main.humidity)) + "%";
     //Day 3 Weather

     //Day 4 Weather

     //Day 5 Weather

   

    });
}


var weatherSearchBtn = document.getElementById('weatherSearchButton');
//citySearchInput.value = localStorage.getItem("citySearch");

function getCityInput() {
 getWeather();
 display5DayWeather();
}

weatherSearchBtn.addEventListener("click", getCityInput);
