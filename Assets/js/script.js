//Get HTML Elements

var citySearchInput = document.getElementById('citySearch');
var stateSearchInput = document.getElementById('stateSearch');
var weather_result = document.querySelector('.currentCityWeather');
var countryCode = 'US';
var tempCityDateEl = document.querySelector('#tempCityDate');
var windCityDateEl = document.querySelector('#windCityDate');
var humidityCityDateEl = document.querySelector('#humidityCityDate');
var cardBodyCl = document.querySelector('.card-body');
var weatherIconEL = document.querySelector('#weather-icon');
document.getElementById('localStorageButton').hidden = true
var apiKey = '416e955c8b7d5eebd548200f74e3a752';



function getWeather() {
  cityDateEl = document.querySelector('#cityDate');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value},${stateSearchInput.value},us&appid=416e955c8b7d5eebd548200f74e3a752&units=imperial`)
    .then(res => res.json())
    .then(data => {
      console.log(data);     
      cityDateEl.innerText = citySearchInput.value + " ("+ new Date((data.dt)*1000).toDateString()+")";
      tempCityDateEl.innerText = "Temp: " + JSON.stringify(Math.round(data.main.temp)) + ' \u00B0' +  "F";
      humidityCityDateEl.innerText = "Humidity: " + JSON.stringify(data.main.humidity) + "%";
      windCityDateEl.innerText = "Wind: " + JSON.stringify(Math.round(data.wind.speed)) + " MPH";
      var weatherIcon= data.weather[0].icon;
      weatherIconEL.setAttribute("src",`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);


    });

}

function display5DayWeather(){
  //5-Day Weather Forecast Information
  /***************************************/
  //Day 1
  var day1Date = document.querySelector('#day-1-date');
  var weatherIcon1DayEL = document.querySelector('#weather-icon-1-day');
  var day1Temp = document.querySelector('#day-1-temp');
  var day1Wind = document.querySelector('#day-1-wind');
  var day1Humidity = document.querySelector('#day-1-humidity');
  //Day 2
  var day2Date = document.querySelector('#day-2-date');
  var weatherIcon2DayEL = document.querySelector('#weather-icon-2-day');
  var day2Temp = document.querySelector('#day-2-temp');
  var day2Wind = document.querySelector('#day-2-wind');
  var day2Humidity = document.querySelector('#day-2-humidity');
  //Day 3
  var day3Date = document.querySelector('#day-3-date');
  var weatherIcon3DayEL = document.querySelector('#weather-icon-3-day');
  var day3Temp = document.querySelector('#day-3-temp');
  var day3Wind = document.querySelector('#day-3-wind');
  var day3Humidity = document.querySelector('#day-3-humidity');
  //Day 4
  var day4Date = document.querySelector('#day-4-date');
  var weatherIcon4DayEL = document.querySelector('#weather-icon-4-day');
  var day4Temp = document.querySelector('#day-4-temp');
  var day4Wind = document.querySelector('#day-4-wind');
  var day4Humidity = document.querySelector('#day-4-humidity');
  //Day 5
  var day5Date = document.querySelector('#day-5-date');
  var weatherIcon5DayEL = document.querySelector('#weather-icon-5-day');
  var day5Temp = document.querySelector('#day-5-temp');
  var day5Wind = document.querySelector('#day-5-wind');
  var day5Humidity = document.querySelector('#day-5-humidity');

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearchInput.value},${stateSearchInput.value},us&appid=416e955c8b7d5eebd548200f74e3a752&units=imperial`)
    .then(res => res.json())
    .then(data => {
     console.log(data);
     //Day 1 Weather
     day1Date.innerText = new Date((data.list[8].dt)*1000).toDateString();
     var weatherIcon1= data.list[8].weather[0].icon;
     weatherIcon1DayEL.setAttribute("src",`https://openweathermap.org/img/wn/${weatherIcon1}@2x.png`);
     day1Temp.innerText = "Temp: " + JSON.stringify(Math.round(data.list[8].main.temp)) + ' \u00B0' +  "F";
     day1Wind.innerText = "Wind: " + JSON.stringify(Math.round(data.list[8].wind.speed)) + " MPH";
     day1Humidity.innerText = "Humidity: " + JSON.stringify(Math.round(data.list[8].main.humidity)) + "%";

     //Day 2 Weather
     day2Date.innerText = new Date((data.list[16].dt)*1000).toDateString();
     var weatherIcon2 = data.list[16].weather[0].icon;
     weatherIcon2DayEL.setAttribute("src",`https://openweathermap.org/img/wn/${weatherIcon2}@2x.png`);
     day2Temp.innerText = "Temp: " + JSON.stringify(Math.round(data.list[16].main.temp)) + ' \u00B0' +  "F";
     day2Wind.innerText = "Wind: " + JSON.stringify(Math.round(data.list[16].wind.speed)) + " MPH";
     day2Humidity.innerText = "Humidity: " + JSON.stringify(Math.round(data.list[16].main.humidity)) + "%";
     //Day 3 Weather
     day3Date.innerText = new Date((data.list[24].dt)*1000).toDateString();
     var weatherIcon3 = data.list[24].weather[0].icon;
     weatherIcon3DayEL.setAttribute("src",`https://openweathermap.org/img/wn/${weatherIcon3}@2x.png`);
     day3Temp.innerText = "Temp: " + JSON.stringify(Math.round(data.list[24].main.temp)) + ' \u00B0' +  "F";
     day3Wind.innerText = "Wind: " + JSON.stringify(Math.round(data.list[24].wind.speed)) + " MPH";
     day3Humidity.innerText = "Humidity: " + JSON.stringify(Math.round(data.list[24].main.humidity)) + "%";
     //Day 4 Weather
     day4Date.innerText = new Date((data.list[32].dt)*1000).toDateString();
     var weatherIcon4 = data.list[32].weather[0].icon;
     weatherIcon4DayEL.setAttribute("src",`https://openweathermap.org/img/wn/${weatherIcon4}@2x.png`);
     day4Temp.innerText = "Temp: " + JSON.stringify(Math.round(data.list[32].main.temp)) + ' \u00B0' +  "F";
     day4Wind.innerText = "Wind: " + JSON.stringify(Math.round(data.list[32].wind.speed)) + " MPH";
     day4Humidity.innerText = "Humidity: " + JSON.stringify(Math.round(data.list[32].main.humidity)) + "%";
     //Day 5 Weather
     day5Date.innerText = new Date((data.list[39].dt)*1000).toDateString();
     var weatherIcon5 = data.list[39].weather[0].icon;
     weatherIcon5DayEL.setAttribute("src",`https://openweathermap.org/img/wn/${weatherIcon5}@2x.png`);
     day5Temp.innerText = "Temp: " + JSON.stringify(Math.round(data.list[39].main.temp)) + ' \u00B0' +  "F";
     day5Wind.innerText = "Wind: " + JSON.stringify(Math.round(data.list[39].wind.speed)) + " MPH";
     day5Humidity.innerText = "Humidity: " + JSON.stringify(Math.round(data.list[39].main.humidity)) + "%";
    });
}


var weatherSearchBtn = document.getElementById('weatherSearchButton');
//citySearchInput.value = localStorage.getItem("citySearch");

function getCityInput() {
 getWeather();
 display5DayWeather();
 citySearchInput.value = localStorage.getItem("citySearch");
 stateSearchInput.value = localStorage.getItem("stateSearch");
 localStorage.setItem("citySearch", citySearchInput.value);
 localStorage.setItem("stateSearch", stateSearchInput.value);

}

weatherSearchBtn.addEventListener("click", getCityInput);


