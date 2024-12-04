// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  const clonedBtn = document.createElement('button');  
  
  // работайте с clonedBtn
  clonedBtn.id = "magic-btn-2";
  clonedBtn.innerText = "Я изменю тебя";  

  // ваш код начинается здесь
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  document.body.append(clonedBtn);

  clonedBtn.addEventListener ('click', () => {
    
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";   
  
  });
  
});



 




