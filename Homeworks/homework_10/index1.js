// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id


clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Я изменю тебя";  
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";
clonedBtn.className = "second-btn"

btn.addEventListener('click', () => {  
    document.body.append(clonedBtn) /* добавляем склонированную кнопку*/
  
})

// здесь можете создать EventListener для второй кнопки