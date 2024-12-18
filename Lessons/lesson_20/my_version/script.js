/*  1. https://get.geojs.io/v1/ip/geo.json
киньте fetch по адресу и получите данные по широте (latitude), долготе (longitude) и городу
сделайте используя async / await асинхронные функции
 cсылки на api в чате zoom */

/* 2. сделайте fetch запрос по адресу:
  https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  вам нужно заменить координаты в строке на данные выше
  получите данные погоды: температуру, скорость ветра и.т.д
  также заберите weathercode - он вам понадобится */

  async function getGeoData() {
   
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const data = await response.json(); 

    
    const { latitude, longitude, city } = data;

    
    document.getElementById('latitude').textContent = latitude;
    document.getElementById('longitude').textContent = longitude;
    document.getElementById('city').textContent = city;

    // запрашиваем данные о погоде

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    const { temperature, windspeed, weathercode } = weatherData.current_weather;

  
    // Отображаем данные о погоде
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('windspeed').textContent = `${windspeed} m/s`;

    // Отображаем код погоды
    document.getElementById('weathercode').textContent = weathercode; 

    // Декодируем код погоды и отображаем описание
    const weatherDescription = decodeWeatherCode(weathercode);
    document.getElementById('weatherdescription').textContent = weatherDescription; 
}



function decodeWeatherCode(code) {
    switch (code) {
        case 0:
            return "Clear sky";
        case 1:
        case 2:
        case 3:
            return "Mainly clear, partly cloudy, and overcast";
        case 45:
        case 48:
            return "Fog and depositing rime fog";
        case 51:
        case 53:
        case 55:
            return "Drizzle: Light, moderate, and dense intensity";
        case 56:
        case 57:
            return "Freezing Drizzle: Light and dense intensity";
        case 61:
        case 63:
        case 65:
            return "Rain: Slight, moderate and heavy intensity";
        case 66:
        case 67:
            return "Freezing Rain: Light and heavy intensity";
        case 71:
        case 73:
        case 75:
            return "Snow fall: Slight, moderate, and heavy intensity";
        case 77:
            return "Snow grains";
        case 80:
        case 81:
        case 82:
            return "Rain showers: Slight, moderate, and violent";
        case 85:
        case 86:
            return "Snow showers slight and heavy";
        case 95:
            return "Thunderstorm: Slight or moderate";
        case 96:
        case 99:
            return "Thunderstorm with slight and heavy hail";
        default:
            return "Unknown weather code";
    }
}

getGeoData();

// Обработчик для кнопки "Обновить погоду"
document.getElementById('update-weather-btn').addEventListener('click', function() {
    getGeoData();
  })