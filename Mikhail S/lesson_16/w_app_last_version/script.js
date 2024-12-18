// Выбор контейнера для отображения данных
const content = document.getElementById('content');

// Функция для создания и добавления элементов
function displayWeatherData(location, temperature, description) {
    // Создаем элементы
    const locationElement = document.createElement('h2');
    const temperatureElement = document.createElement('p');
    const descriptionElement = document.createElement('p');

    // Устанавливаем текстовое содержимое
    locationElement.textContent = `Location: ${location}`;
    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    descriptionElement.textContent = `Description: ${description}`;

    // Очищаем контейнер перед добавлением новых данных
    content.innerHTML = '';

    // Добавляем элементы в контейнер
    content.append(locationElement, temperatureElement, descriptionElement);
}

// Пример данных
const exampleLocation = 'Amsterdam';
const exampleTemperature = 18.5;
const exampleDescription = 'Partly cloudy';

// Отображение данных (тест)
displayWeatherData(exampleLocation, exampleTemperature, exampleDescription);