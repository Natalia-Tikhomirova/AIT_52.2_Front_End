// отобразить данные по выбранному персонажу из API на странице
// выведите картинку, status, name, origin (из какой локации этот персонаж)


const img = document.querySelector('#morty-img');
const nameElement = document.querySelector('#morty-name');
const statusElement = document.querySelector('#morty-status');
const originElement = document.querySelector('#morty-origin');



fetch("https://rickandmortyapi.com/api/character")
  // первым .then() дожидаемся 'сырых' данных и преобразуем их в JS объект с помощью .json()
  .then(res => res.json())
  .then(data => {
    console.log(data.results[1].image);
    const character = data.results[1];
    img.src = character.image;
    nameElement.textContent = character.name; 
    statusElement.textContent = character.status; 
    originElement.textContent = character.origin.name; 

   }); 

   
  
     
  

 
  
  
