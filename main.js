const searchFormEl = document.querySelector(".js-search-form");
const weatherDisplayEl = document.querySelector(".js-weather-display");
const errorDisplayEl = document.querySelector('.js-error-display');
const loaderEl = document.querySelector('.loader');
const apiKey = 'c8f40d3a3736e508fdb5b271f6f49dd4';

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

    const fetchWeatherData = async (city) => {
    try {
      const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!responce.ok) {
         throw new Error(responce.status);
        }
    
        const data = await responce.json();
       
        weatherDisplayEl.innerHTML = createWeatherTemplate(data);
    }
    catch(err) {
        errorDisplayEl.innerHTML = `<p class="error-text">${err}.City not found</p>`;
        searchFormEl.reset();
        weatherDisplayEl.innerHTML = "";    
    } 
    finally {
      loaderEl.classList.add('is-hidden');
    }   
}


const onSearchFormSubmit = (event) => {
  event.preventDefault();
  loaderEl.classList.remove('is-hidden');

  const city = event.currentTarget.elements.weather_input.value.trim();

  if (city === "") {
    errorDisplayEl.innerHTML = '<p class="error-text">Please write the name of the city</p>'
    loaderEl.classList.add('is-hidden');
    return;
  }
  errorDisplayEl.innerHTML = '';
  fetchWeatherData(city);
};

searchFormEl.addEventListener("submit", onSearchFormSubmit);

document.addEventListener("DOMContentLoaded", fetchWeatherData("Kyiv"));


