/* Дополнительное задание:
Нужно: Создайте галерею персонажей.
Используйте метод map() для работы с массивом данных.
Для каждого персонажа создавайте HTML-элемент и добавляйте его на страницу.
Галерея должна корректно отображать всех персонажей, полученных из API.*/

// Селектор галереи
const gallery = document.querySelector("#gallery");


fetch("https://rickandmortyapi.com/api/character")
// первым .then() дожидаемся 'сырых' данных и преобразуем их в JS объект с помощью .json()
  .then((res) => res.json())
  .then((data) => {
    // Используем map для создания галереи
    const characters = data.results.map((character) => {
      // Создаем контейнер для персонажа
      const characterCard = document.createElement("div");
      characterCard.classList.add("character-card");

     
      const img = document.createElement("img");                      // Добавляем изображение
      img.src = character.image;
      img.alt = character.name;

      
      const name = document.createElement("h3");                     // Добавляем имя
      name.textContent = character.name;

      
      const status = document.createElement("p");                    // Добавляем статус
      status.textContent = `Status: ${character.status}`;

      
      const origin = document.createElement("p");                    // Добавляем происхождение
      origin.textContent = `Origin: ${character.origin.name}`;

      // Собираем карточку персонажа
      characterCard.appendChild(img);
      characterCard.appendChild(name);
      characterCard.appendChild(status);
      characterCard.appendChild(origin);

      return characterCard;
    });

    // Добавляем всех персонажей в галерею
    gallery.append(...characters);
  })

















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

   
  
     
  

 
  
  
