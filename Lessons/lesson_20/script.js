/*  https://get.geojs.io/v1/ip/geo.json
киньте fetch по адресу и получите данные по широте (latitude), долготе (longitude) и городу
сделайте используя async / await асинхронные функции
 cсылки на api в чате zoom */

 
  
async function getGeoData() {
   
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const data = await response.json(); 

    
    const { latitude, longitude, city } = data;

    
    document.getElementById('latitude').textContent = latitude;
    document.getElementById('longitude').textContent = longitude;
    document.getElementById('city').textContent = city;
}


getGeoData();