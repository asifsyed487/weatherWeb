
var API_KEY = "63ccb54bcbe797fd285d2cd9ac42a402";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const weatherURL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
  let promise = fetch(weatherURL);
  return promise.then((response) => {
    return response.json();
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((response) => {
    console.log(response);
    showWeatherData(response);
  })


}

showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerHTML = `<h1>${weatherData.name}</h1>`;
  document.getElementById('weather-type').innerHTML = weatherData.weather[0].main;
  document.getElementById('temp').innerHTML = `${weatherData.main.temp}`;
  document.getElementById('min-temp').innerHTML = `${weatherData.main.temp_min}`;
  document.getElementById('max-temp').innerHTML = `${weatherData.main.temp_max}`;
}
