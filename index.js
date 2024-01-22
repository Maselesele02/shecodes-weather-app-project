const currentDetails = document.querySelector(".info");
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const cityName = document.getElementById("search-input").value;
  const currentCity = document.querySelector(".current-city");
  currentCity.textContent = cityName;

  const url = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=9725e98aabcfa52o094ftae89ad306aa`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.temperature.current;
      const temperatureElement = document.querySelector(".temp");
      temperatureElement.textContent = `${temperature}°C`;
    });
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const humid = data.temperature.humidity;
      const humidElement = document.querySelector(".humidity");
      humidElement.textContent = `Humidity: ${humid}%`;
    });
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const windspeed = data.wind.speed;
      const windspeedElement = document.querySelector(".wind");
      windspeedElement.textContent = `Wind: ${windspeed}km/h`;
    })
    .catch((error) => {
      console.error(error);
    });
}
