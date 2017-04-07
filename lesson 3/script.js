\u0063\u006F\u006E\u0073\u006F\u006C\u0065.\u006C\u006F\u0067('\u0048\u0045\u004C\u004C\u004F\u0020\u0057\u004F\u0052\u004C\u0044\u0021\u0021\u0021');
console.error('\u0048\u0045\u004C\u004C\u004F\u0020\u0057\u004F\u0052\u004C\u0044\u0021\u0021\u0021');
var foo = null;
console.time();
console.group('Boolean');
console.log(true);
console.log(false);
console.groupEnd();
console.group('null');
console.log(foo);
console.groupEnd();
console.group('Number');
console.log(.8);
console.log(6.2e10);
console.log(0xFF);
console.log(0123);
console.groupEnd();
console.group('String');
console.log('Hello world!');
console.groupEnd();
console.timeEnd();

// 5. Time
// Засечь время выполнения кода из задания 4.

// 6. Age
// Спросить у пользователя сколько ему лет. Результат вывести в консоль.
var age = prompt('Сколько лет пользователю?',''); console.log('Пользователю %s лет!', age);
// 7. 18-
// Спросить у пользователя есть ли ему 18. Результат вывести в консоль. 
var adult = confirm('Есть ли вам 18 лет?'); if(adult) {console.log('Пользователю есть 18 лет!')}
// 8. Info
// Спросить у пользователя имя, фамилию, возраст и пол. Результат записать в переменную и вывести в консоль одной строкой как поле info.
var name = prompt('имя','');
var lastname = prompt('фамилию','');
var age = prompt('Сколько лет пользователю?','');
var sex = prompt('пол','');
console.info(name, lastname, age, sex);
