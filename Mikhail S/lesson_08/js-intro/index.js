// вывод в консоль
console.log("Hello js")

// Создание переменных
let dog ="Sharik"
dog = "Tuzik"
dog = 12// изменили тип данных
const  cat = "Barsik"

//Примитивные типы данных
// 1 string

let str1 = "Можно в двойных"
let str2 = 'Можно в одинарных'

let str3 = "13" // это строка
let str4 = str1 + " " + str2
console.log(str4);
console.log(str1.toUpperCase()) // перевод в верхний регистр

// 2 Number

let num1 = 9
let num2 = 9.6

// 3 bigInt
let num3 = 1239n;

// 4 Boolean
let isDrunk = true
//условная конструкция
if (isDrunk){
    console.log("Ты пьян")
}
const result = isDrunk ? "Ты пьян":"Ты не пьян"

// 5 undefined
let str5;
str5=12
console.log(str5);

// 6 null 
// null - отсутствие значения
// document.getElementById("не существует")
// Можем присвоить null вручную

let empty = null;
console.log(empty);

// 7 symbol
let s1 = Symbol("что-то")

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// 1 Преобразование в строку

// неявное преобразование
let str7 = ''+9; // "9"
console.log(typeof str7)
// явное преобразование

const num4 =10;
let str8 = String(num4)// "10"
console.log( typeof str8);
// пример
const res = 9 + 12 + "5"// '215'
const res2 = "5" + 9 + 12 // 5912

// Преобразование в число неявное
const num5 = +"6"// 6
const sum = +"9" + +"10"
console.log(sum);

// Явное преобразование в число
const num6 = Number("117") // 117
const num7 = Number ("129*#")// NaN - not a number появляется при неудачном преобразовании или
// неудачной мат операции
console.log ( typeof num7);

// Преобразование в булевое значение
// число в булевое 
const res4 = Boolean(9) // TRUE
const res5 = Boolean(0) // False
const test5 = Boolean(-1) // True
console.log(test5);
// строка в булевое
const res6 = Boolean(""); // False
const res7 = Boolean(" ") // True
console.log(res7);
const  res8 = Boolean(null) // False
const  res9 = Boolean(undefined) // False

// Равенство строгое и нестрогое
// === строгое равенство
// == нестрогое равенство
console.log( 9 === "9") // false
console.log(9 == "9") // true  - число преобразуется в стринг

console.log(true == "") // false
console.log(true == "1") // true