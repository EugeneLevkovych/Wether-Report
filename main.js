const apiKey = 'c8f40d3a3736e508fdb5b271f6f49dd4';
const searchFormEl = document.querySelector(".js-search-form");
const weatherDisplayEl = document.querySelector(".weather-display");

const createWeatherTemplate = (weatherInfo) => {
  return `  <h2>${weatherInfo.name}</h2>
             <p>Temperature: ${weatherInfo.main.temp}°C</p>
             <p>Weather: ${weatherInfo.weather[0].description}</p>
             <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png" alt="Weather icon">
            <p>Humidity: ${weatherInfo.main.humidity}%</p>
             <p>Wind Speed: ${weatherInfo.wind.speed} m/s</p>
         `;
};

const onSearchFormSubmit = (event) => {
  event.preventDefault();

  const city = event.currentTarget.elements.weather_input.value.trim();
  if (city === "") {
    alert("Please wright the name of the city");
    return;
  }
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
    })
    .catch((err) => {
      if (err.message === 404) {
        alert("City not found");
      }
    });
};
searchFormEl.addEventListener("submit", onSearchFormSubmit);






//---------------------------------------------------------------------------

// document.querySelector('.form').addEventListener('submit', async function(event) {
//     event.preventDefault();
//     const city = document.querySelector('.weather-input').value;
//     const apiKey = 'c8f40d3a3736e508fdb5b271f6f49dd4';
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('City not found');
//         const data = await response.json();
        
//         document.querySelector('.weather-info').innerHTML = `
//             <h2>${data.name}</h2>
//             <p>Temperature: ${data.main.temp}°C</p>
//             <p>Weather: ${data.weather[0].description}</p>
//             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
//             <p>Humidity: ${data.main.humidity}%</p>
//             <p>Wind Speed: ${data.wind.speed} m/s</p>
//         `;
//     } catch (error) {
//         document.querySelector('.weather-info').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
//     }
// });
