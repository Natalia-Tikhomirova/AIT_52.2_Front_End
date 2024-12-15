// Выведите в консоль результаты этих выражений. Изучите результаты.

// Операции сравнения:
const a = 17;
const b = 5;
console.log( a > b); // true - 17 больше 5    
console.log(a <= b); // false - 17 не меньше или равно 5
console.log(a == b); // false - 17 не равно 5
console.log(a != b); // true - 17 не равно 5

// Операции сравнения строк:
console.log('a' < 'b');  // true - строка 'a' идет раньше 'b' в алфавите
console.log('ab' > 'a'); // true - строка 'ab' лексикографически больше, чем 'a'


// Сравнение строки и числа:
console.log('17' > 1);   // true - строка '17' будет преобразована в число 17, и 17 > 1

// Операторы строгого равенства (===):
console.log(17 === 1);    // false - типы разные (number и number, но значения разные)
console.log(17 === 17);   // true - значения и типы одинаковые (число 17)
console.log(17 === '17'); // false - типы разные (number и string)
console.log(17 === true); // false - типы разные (number и boolean)
console.log('0' === '');  // false - строки разные (одна содержит '0', другая пустая)
console.log(true === false); // false - булевое значение true не равно false
console.log(true === true); // true - булевое значение одинаковое
console.log(null === undefined); // false - null и undefined — разные типы
console.log(false === 0);  // false - false (boolean) и 0 (number) — разные типы


// Операторы нестрогого равенства (==):
console.log(17 == '17');       // true - строка '17' преобразуется в число 17
console.log('0' == '');        // false - строки разные (одна пустая, другая с символом '0')
console.log(0 == '');          // true - пустая строка преобразуется в 0, и 0 == 0
console.log(null == undefined); // true - null и undefined считаются равными при нестрогом сравнении
console.log(false == 0);       // true - false преобразуется в 0, и 0 == 0


// Сравнение undefined и null:
console.log(undefined == null); // true - undefined и null равны при нестрогом сравнении
console.log(undefined == 0);    // false - undefined не равен 0
console.log(null == 0);         // false - null не равен 0
console.log(undefined < 0);     // false - undefined нельзя сравнивать с числом
console.log(undefined > 0);     // false - undefined нельзя сравнивать с числом
