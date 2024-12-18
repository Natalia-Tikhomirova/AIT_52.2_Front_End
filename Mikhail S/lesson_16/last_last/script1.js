// Создаем переменную для обработчика события
const refreshButton = document.getElementById('refreshButton');

// Функция для получения данных о погоде
async function updateWeather() {
    // Получаем координаты через API geojs.io
    const geoData = await fetch('https://www.geojs.io/v1/ip/geo.json')
        .then(response => response.json());

    const latitude = geoData.latitude;
    const longitude = geoData.longitude;
    
    // Получаем данные о погоде через Open Meteo API
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherResponse.json();

    // Получаем данные о погоде
    const location = geoData.city || "Your Location";
    const temperature = weatherData.current_weather.temperature;
    const description = weatherData.current_weather.weathercode;

    // Расшифровка кода погоды
    const weatherDescriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Heavy drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",
        71: "Light snow fall",
        73: "Moderate snow fall",
        75: "Heavy snow fall",
        77: "Snow grains",
        80: "Light rain showers",
        81: "Moderate rain showers",
        82: "Heavy rain showers",
        85: "Light snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm",
        96: "Thunderstorm with light hail",
        99: "Thunderstorm with heavy hail"
    };

    const weatherDescription = weatherDescriptions[description] || "Unknown weather";

    // Отображаем данные
    displayWeatherData(location, temperature, weatherDescription);
}

// Функция для отображения данных
function displayWeatherData(location, temperature, description) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('weather-description');

    // Обновляем текстовые значения
    locationElement.textContent = `Location: ${location}`;
    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    descriptionElement.textContent = `Description: ${description}`;
}

// Прикрепляем обработчик события к кнопке
refreshButton.addEventListener('click', updateWeather);