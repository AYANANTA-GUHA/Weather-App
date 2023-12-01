const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
let weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');



async function checkWeather(city){

const api_key="ed3bd40ff4bfe7d43388e3ffb80f94d5";
// const url=`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}`;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
const weather_data = await fetch(`${url}`).then(response => response.json());


// console.log(weather_data);
if(weather_data.cod == `400`){
    alert("Please Enter Location")
    weather_img.src="images/error1.png"
    temperature.innerHTML=""
    weather_body.style.display = "none";
    // type.innerHTML=""
}


if(weather_data.cod === `404`){
    
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
  console.log("error")
    return;
}
location_not_found.style.display = "none";
weather_body.style.display = "flex";
temperature.innerHTML = `${Math.round(weather_data.main.temp)+" °C "}`;
description.innerHTML = `${weather_data.weather[0].description}`;

humidity.innerHTML = `${weather_data.main.humidity}%`;
wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src = "images/clouds.png";
        break;
    case 'Clear':
        weather_img.src = "images/clear.png";
        break;
    case 'Rain':
        weather_img.src = "images/rain.png";
        break;
    case 'Mist':
        weather_img.src = "images/mist.png";
        break;
    case 'Snow':
        weather_img.src = "images/snow.png";
        break;

}

console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
