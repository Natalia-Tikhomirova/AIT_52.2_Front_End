/*  https://get.geojs.io/v1/ip/geo.json
киньте fetch по адресу и получите данные по широте (latitude), долготе (longitude) и городу
сделайте используя async / await асинхронные функции
 cсылки на api в чате zoom */


async function getWeather() {
    const res = await fetch(' https://get.geojs.io/v1/ip/geo.json')
    const data = await res.json()
    console.log(data);

    // const city = data.city
    // const latitude = data.latitude
    // const longitude = data.longitude

    const { latitude, longitude, city } = data;

    
    
}

getWeather();