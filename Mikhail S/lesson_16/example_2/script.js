const weatherContainer = document.getElementById('weather');
const button = document.getElementById('refreshButton');

// Получение координат пользователя
async function getCoordinates() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();
  const { latitude, longitude } = data;

  // Сразу вызываем функцию получения погоды
  getWeather(latitude, longitude);
}

// Получение и отображение прогноза погоды
async function getWeather(latitude, longitude) {
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const res = await fetch(weatherUrl);
  const data = await res.json();
  const weather = data.current_weather;

  // Отображаем данные
  weatherContainer.innerHTML = `
    <p><strong>Temperature:</strong> ${weather.temperature}°C</p>
    <p><strong>Weather Code:</strong> ${decodeWeatherCode(weather.weathercode)}</p>
  `;
}

// Декодирование погодного кода
function decodeWeatherCode(code) {
    const weatherCodes = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Drizzle: Light",
      53: "Drizzle: Moderate",
      55: "Drizzle: Dense",
      61: "Rain: Slight",
      63: "Rain: Moderate",
      65: "Rain: Heavy",
      71: "Snow fall: Slight",
      73: "Snow fall: Moderate",
      75: "Snow fall: Heavy",
      95: "Thunderstorm: Slight or moderate",
      96: "Thunderstorm: Heavy with hail",
    };
    return weatherCodes[code] || "Unknown weather condition";
  }
  
  // Обработчик нажатия кнопки
  button.addEventListener('click', getCoordinates);
  
  // Автоматический запуск при загрузке страницы
  getCoordinates();

