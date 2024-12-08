// Задание 1

let names = ["Мария","Алексей","Елена","Дмитрий"];

let ages = [21,31,45,53];

let people = [
    {name: "Мария",age:21},
    {name: "Алексей",age:31},
    {name: "Елена",age:45},
    {name: "Дмитрий",age:53}
];

console.log(names);
console.log(ages);
console.log(people);

// Задание 2

let reversedPeople = [];
//  цикл, который проходит массив с последнего элемента к первому и каждый элемент добавляется в новый массив reversedPeople
for (let i = people.length - 1; i >= 0; i--) {
    reversedPeople.push(people[i]);
}
console.log(reversedPeople);

// Задание 3

let countries = [];
countries.push("Франция", "Германия", "Италия");
let lastCountry = countries.pop(); // удаляем последний элемент, сохраняя его в переменной lastCountry
countries.unshift(lastCountry); // добавляем последний элемент в начало массива
console.log(countries);

// Задание 4

let numbers = [1,2,3,4,5];

// 1. Умножьте каждый элемент на 2 и выведите результат в консоль.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);    
}

// 2. Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
let squaredNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    squaredNumbers.push(numbers[i] ** 2);
}

// 3. Выведите оба массива (исходный и новый) в консоль.
console.log("Исходный массив:", numbers);
console.log("Новый массив:", squaredNumbers);



