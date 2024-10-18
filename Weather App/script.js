const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector('.not-found');


search.addEventListener('click', () => {
    const APIkey = '0eac840c2603d4ddfb9da05d6b2d7925';
    const city = document.querySelector(".search-box input").value;
  
    if (city === '') {
      return;
    }
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
      .then(response => response.json())
      .then(json => {
        if (json.cod == '404') {
            cityHide.textContent = city;
          container.style.height = '400px';
          error404.classList.add('active');
          weatherBox.classList.remove('active');
          weatherDetails.classList.remove('active');
          return;
        }

        
        container.style.height = '555px';
        error404.classList.remove('active');
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
  
       
  
        if (json.weather && json.weather.length > 0) {
          const image = document.querySelector('.weather-box img');
          const temperature = document.querySelector('.weather-box .temperature');
          const description = document.querySelector('.weather-box .description');
          const humidity = document.querySelector('.weather-details .humidity span');
          const wind = document.querySelector('.weather-details .wind span');
            

          switch (json.weather[0].main) {
            case 'Clear':
              image.src = 'images/clear.png';
              break;
  
            case 'Rain':
              image.src = 'images/rain.png';
              break;
  
            case 'Snow':
              image.src = 'images/snow.png';
              break;
  
            case 'Clouds':
              image.src = 'images/cloud.png';
              break;
  
            case 'Mist':
              image.src = 'images/mist.png';
              break;
  
            case 'Haze':
              image.src = 'images/mist.png';
              break;
  
            default:
              image.src = 'images/cloud.png';
          }
  
          if (json.main) {
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            humidity.innerHTML = `${json.main.humidity}%`;
          }
  
          if (json.wind) {
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
          }
  
          description.innerHTML = `${json.weather[0].description}`;
          weatherBox.classList.add('active');
          weatherDetails.classList.add('active');
        } else {
          console.error('Invalid weather data');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        error404.classList.add('active');
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
    });
});