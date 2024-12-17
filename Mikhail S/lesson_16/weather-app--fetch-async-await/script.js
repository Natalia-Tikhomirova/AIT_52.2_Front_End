/* Проект. Прогноз погоды
Релиз 0
Создайте html документ и подключите стили и скрипт. Получите ваши координаты по IP адресу:

API для определения координат: https://www.geojs.io/docs/v1/endpoints/ip/
Нужно получить координаты: "latitude":"53.0389","longitude":"8.7458"

Изучите документацию

Релиз 1
API для прогноза погоды: https://open-meteo.com/
Требования к проекту:

показывал температуру и расшифрованный код
были стили шрифты картинки
деплой на gitPages
Readme c описанием проекта и ссылкой на pages */



const button = document.getElementById('refreshButton');
const AmsterdamUrl = "https://wttr.in/Amsterdam";
const AmsterdamParams = {
    params: {
        2: "",
        m: "",
        lang: "de"
    }
};

// Создаем асинхронную функцию
async function fetchData() {
    const queryString = new URLSearchParams(AmsterdamParams.params).toString();
    
    // Ожидаем получения ответа от fetch
    const response = await fetch(`${AmsterdamUrl}?${queryString}`);
    
    // Если запрос успешен, обрабатываем ответ
    const pageText = await response.text();
    
    // Вставляем текст в элемент с id 'content'
    const result = document.getElementById('content');
    result.innerHTML = pageText;
}

// Добавляем обработчик события для кнопки
button.addEventListener('click', fetchData);