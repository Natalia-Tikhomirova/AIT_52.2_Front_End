/* Создайте веб-страницу, которая будет получать данные из API
Описание задачи
1. Отобразите карточки продуктов в виде сетки (grid-контейнер).
2. В каждой карточке должны отображаться:
- Название продукта
- Описание продукта
- Цена
- Изображение продукта

Данные в карточке продукта
 Каждая карточка должна отображать:

- Название продукта (title)
- Описание (description)
- Цена (price) с валютным символом
- Картинку (images)
*/

const gridProducts = document.querySelector('#grid-products'); // Родитель для карточек

// Асинхронная функция для получения данных
async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products"); // Запрос к API
    const data = await res.json(); // Дождаться и преобразовать в JSON

    // Используем data.products (в API массив продуктов называется 'products')
    data.products.map(product => {
        // Создаем карточку с данными
        const card = document.createElement('div');
        card.className = "product-card";
        card.classList.add("primary");

        // Создаем заголовок (title)
        const heading = document.createElement("h3");
        heading.textContent = product.title;

        // Создаем описание товара (description)
        const desc = document.createElement("p");
        desc.textContent =
            product.description.length > 200
                ? product.description.slice(0, 200) + '...'
                : product.description;

        // Добавляем цену товара (price) с валютным символом
        const price = document.createElement("p");
        price.textContent = `Price: ${product.price} €`;

        // Создаем картинку (images)
        const img = document.createElement("img");
        img.src = product.images[0]; // Первый элемент массива изображений
        img.alt = product.title;

        // Создаем обертку для картинки и добавляем картинку
        const wrapper = document.createElement("div");
        wrapper.className = "img-wrapper";
        wrapper.append(img);

        // Добавляем элементы в карточку
        card.append(heading, price, desc, wrapper);

        // Добавляем карточку в контейнер
        gridProducts.append(card);
    });
}

fetchProducts(); // Вызов функции для получения данных

// Дополнительная функция для проверки данных
async function getAsyncProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json(); // Ожидаем преобразование в JSON
    console.log(data); // Выводим данные в консоль
}

getAsyncProducts();