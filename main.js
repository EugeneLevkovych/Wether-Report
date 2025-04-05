const apiKey = 'c8f40d3a3736e508fdb5b271f6f49dd4';
const searchFormEl = document.querySelector(".js-search-form");
const weatherDisplayEl = document.querySelector(".js-weather-display");
const errorDisplayEl = document.querySelector('.js-error-display');

const createWeatherTemplate = (weatherInfo) => {
  return `
   <div class="img-box">
   <img class="weather-display-img" src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="Weather icon">
   </div> 
   <div class="text-box"> 
     <h2 class="heading">${weatherInfo.name}</h2>
     <p class="weather-display-text">Temperature: ${weatherInfo.main.temp}°C</p>
     <p class="weather-display-text">Weather: ${weatherInfo.weather[0].description}</p>         
     <p class="weather-display-text">Humidity: ${weatherInfo.main.humidity}%</p>
     <p class="weather-display-text">Wind Speed: ${weatherInfo.wind.speed} m/s</p>
    </div>
  `;
};

const fetchWeatherData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((responce) => {
      if (!responce.ok) {
        throw new Error(responce.status);
      }
      return responce.json();
    })
    .then((data) => {
      const weatherTemplate = createWeatherTemplate(data);
      weatherDisplayEl.innerHTML = weatherTemplate;
      // document.getElementById('weather-input').value = city;
    })
    .catch((err) => {
      errorDisplayEl.innerHTML = `<p class="error-text">${err}.City not found</p>`;
      searchFormEl.reset();
      weatherDisplayEl.innerHTML = "";
    });
};

const onSearchFormSubmit = (event) => {
  event.preventDefault();

  const city = event.currentTarget.elements.weather_input.value.trim();
  if (city === "") {
    alert("Please write the name of the city");
    return;
  }
  errorDisplayEl.innerHTML = '';
  fetchWeatherData(city);
};

searchFormEl.addEventListener("submit", onSearchFormSubmit);

document.addEventListener("DOMContentLoaded", fetchWeatherData("Kyiv"));



// ------------------------------------------------------------------
// const searchFormEl = document.querySelector(".js-search-form");
// const weatherDisplayEl = document.querySelector(".js-weather-display");
// const errorDisplayEl =  document.querySelector('.js-error-display');

// const createWeatherTemplate = (weatherInfo) => {
//   return `
//    <div class="img-box">
//    <img class="weather-display-img" src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="Weather icon">
//    </div> 
//    <div class="text-box"> 
//      <h2 class="heading">${weatherInfo.name}</h2>
//      <p class="weather-display-text">Temperature: ${weatherInfo.main.temp}°C</p>
//      <p class="weather-display-text">Weather: ${weatherInfo.weather[0].description}</p>         
//      <p class="weather-display-text">Humidity: ${weatherInfo.main.humidity}%</p>
//      <p class="weather-display-text">Wind Speed: ${weatherInfo.wind.speed} m/s</p>
//     </div>
//          `;
// };

// const onSearchFormSubmit = (event) => {
//   event.preventDefault();

//   const city = event.currentTarget.elements.weather_input.value.trim();
//   if (city === "") {
//     alert("Please write the name of the city");
//     return;
//   }
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   fetch(url)
//     .then((responce) => {
//       if (!responce.ok) {
//         throw new Error(responce.status);
//       }
//       return responce.json();
//     })
//     .then((data) => {
//         console.dir(data);
        
//       const weatherTemplate = createWeatherTemplate(data);
//       weatherDisplayEl.innerHTML = weatherTemplate;
//     })
//     .catch((err) => {
//       errorDisplayEl.innerHTML = `<p style="color: red;">City not found</p>`;
//         searchFormEl.reset();
//     });
// };
// searchFormEl.addEventListener("submit", onSearchFormSubmit);






