// https://get.geojs.io/v1/ip/geo.json
// киньте fetch по адресу и получите данные по широте (latitude), долготе (longitude) и городу
// сделайте используя async / await асинхронные функции
// cсылки на api в чате zoom

// ! до 10-10

async function getWeather() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();
  // * работа с данными из объекта без деструктуризации
  // * объявили переменные и присвоили им значения из объекта
  // const city = data.city
  // const latitude = data.latitude
  // const longitude = data.longitude
  // * работа с данными из объекта с деструктуризацией
  // мы в одну строчку объявляем переменные с именами совпадающими с именем нужных нам ключей и передаем им соответствующее значение

  const { city, latitude, longitude } = data;

  // сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится

  // ! 11:35 встречаемся и синхронизируемся

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  const weatherData = await weatherRes.json();

  // деструктуризация вложенного в data объекта по ключу current_weather
  const { temperature, windspeed, weathercode } = weatherData.current_weather;

  // деструктуризация current_weather_units с переименованием переменных
  const { temperature: temperatureUnit, windspeed: windspeedUnit } =
    weatherData.current_weather_units;

  console.log(
    temperature,
    temperatureUnit,
    windspeed,
    windspeedUnit,
    weathercode
  );
}

getWeather();
