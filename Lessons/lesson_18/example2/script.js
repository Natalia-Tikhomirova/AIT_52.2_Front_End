// отобразить данные по выбранному персонажу из API на странице
// выведите картинку, status, name, origin (из какой локации этот персонаж)


const img = document.querySelector('#morty-img')
const nameElement = document.querySelector ('#morty-name')
const statusElement = document.querySelector('#morty-status')
const originElement = document.querySelector('#morty-origin')

fetch("https://rickandmortyapi.com/api/character")
  // первым .then() дожидаемся 'сырых' данных и преобразуем их в JS объект с помощью .json()
  .then(res => res.json())
  // в data уже придут обработанные данные готовые к использованию
  .then(data => {
    console.log(data.results[1].image);
    img.src = data.results[1].image;
    nameElement.textContent = data.nameElement;
    statusElement.textContent = data.statusElement;
    originElement.textContent = data.originElement;

   }); 
  
     
  

 
  
  
