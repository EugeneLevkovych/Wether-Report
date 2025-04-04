
const apiKey = 'c8f40d3a3736e508fdb5b271f6f49dd4';







//----------------------CHATGPT-----------------------------------------------------

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
