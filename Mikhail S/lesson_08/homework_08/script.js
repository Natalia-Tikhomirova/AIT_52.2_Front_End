// Задание 1. Явное преобразование типов
// Преобразуйте следующие значения к строке или числу или логическому значению и выведите в консоль результат

/* to string */
console.log('17 to string is ' + String(17));
console.log('-17.17 to string is ' + String(-17.17));
console.log('false to string is ' + false);
console.log('null to string is ' + null);
console.log('undefined to string is ' + undefined);
console.log('0 to string is ' + String(0));

/* to number */
console.log("'17' to number is " + Number(17));
console.log('true to number is ' + Number(true));
console.log('false to number is ' + Number(false));
console.log('null to number is ' + Number(null));
console.log('undefined to number is ' + Number(undefined));
console.log("'   20   ' to number is " + Number('   20   '));
console.log("'      ' to number is " + Number('      '));
console.log("'   30d   ' to number is " + Number('   30d   '));

/* to boolean */
console.log('null to boolean is ' + Boolean(null)); // False
console.log('undefined to boolean is ' + Boolean(undefined)); // False
console.log('0 to boolean is ' + Boolean(0)); // False
console.log('-0 to boolean is ' + Boolean(-0)); // False
console.log('NaN to boolean is ' + Boolean(NaN)); // False
console.log("'' to boolean is " + Boolean('')); // False
console.log("' ' to boolean is " + Boolean(' ')); // True
console.log('17 to boolean is ' + Boolean(17)); // True
console.log("'Hello' to boolean is " + Boolean('Hello'));  // True
