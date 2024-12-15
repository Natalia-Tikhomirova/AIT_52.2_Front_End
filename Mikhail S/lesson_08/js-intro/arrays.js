//Массив - динамический массив
// Длина не фиксирована

// Два способа создания массива

const arr1 = []; // 1 способ
const arr2 = new Array() // 2 способ

// Как добавить значение по индексу

const fruits = [];

fruits[0] = "Apple"; // "Apple"
console.log(fruits);
fruits[1] = "banana" // "banana"
console.log(fruits);

// Как получить значение по индексу
console.log(fruits[1]);
console.log(fruits.length);

//Как создать массив сразу со значениями

const cars =["BMW", "Mercedes","Audi", "Toyota", "VW", "Tesla"]


// Методы раболты с массивами
const students = [];
students.push("John")// добавили справа
console.log(students);
students.push("Tom");// добавили справа
console.log(students);
students.unshift("Alex") // добавили слева
console.log(students);
// pop - удалил элемент с конца массива
const vik = students.pop();
console.log(students);
// shift - удаляет элемент слева массива(начало)
students.shift();
console.log(students);
console.log(leon);

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())