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

  
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('windspeed').textContent = `${windspeed} m/s`;
    document.getElementById('weathercode').textContent = weathercode;
}

getGeoData();