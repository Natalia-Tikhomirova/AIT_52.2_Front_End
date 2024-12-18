const refreshButton = document.getElementById('refreshButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('weather-description');

const weatherCodeDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light",
    53: "Drizzle: Moderate",
    55: "Drizzle: Dense intensity",
    61: "Rain: Slight",
    63: "Rain: Moderate",
    65: "Rain: Heavy intensity",
    71: "Snow fall: Slight",
    73: "Snow fall: Moderate",
    75: "Snow fall: Heavy intensity",
    80: "Rain showers: Slight",
    81: "Rain showers: Moderate",
    82: "Rain showers: Violent",
    95: "Thunderstorm: Slight or moderate",
    99: "Thunderstorm: With hail"
};

async function fetchWeather() {
    // Step 1: Get user location
    const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const geoData = await geoResponse.json();
    const latitude = geoData.latitude;
    const longitude = geoData.longitude;

    // Step 2: Fetch weather data
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherResponse.json();

    // Step 3: Extract data
    const location = geoData.city || "Your location";
    const temperature = weatherData.current_weather.temperature;
    const weatherCode = weatherData.current_weather.weathercode;

    // Step 4: Display weather info
    locationElement.textContent = `Location: ${location}`;
    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    weatherDescriptionElement.textContent = `Description: ${weatherCodeDescriptions[weatherCode] || "Unknown"}`;
}

// Add event listener to button
refreshButton.addEventListener('click', fetchWeather);