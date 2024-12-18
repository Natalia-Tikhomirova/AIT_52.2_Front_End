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



const button = document.getElementById('refreshButton')
const AmsterdamUrl = "https://wttr.in/Amsterdam"
const AmsterdamParams = 
    {
       params:{
        2: "",
        m: "",
        lang: "de"
       } 
    };   
     

function fetchData(){
        const queryString = new URLSearchParams(AmsterdamParams.params).toString();
        fetch(`${AmsterdamUrl}?${queryString}`)
        .then((response)=>response.text())
        .then((pageText)=>{
            const result = document.getElementById('content')
            result.innerHTML = pageText;
        })
    }

button.addEventListener('click', fetchData)