function cl(x) {
    console.log(x);
}

// 1. bigLetter
// Напишите функцию bigLetter(str), которая возвращает строку str с заглавным первым символом

///////////////////////////////////////////////////

// function bigLetter(str){
// var s = (str.slice(0,1)).toUpperCase();
// var r = s + (str.slice(1));
// return r;
// }
// console.log(bigLetter('i live js'));

////////////////////////////////////////////////////

// 2. zEbRa
// Напишите функцию zebra(str), которая возвращает строку str с заглавными символома под непарными номерами
// Модифицируйте функции zebra(str, flag), которая возвращает строку str с заглавными символома под непарными номерами, если аргумент flag отсутствует или false, если флаг true - заглавные символы под парными номерами. (0 определять как парное число)

////////////////////////////////////////////////////

// 'use strict';

// function zebra(str, flag) {
// 	var s, newStr = '';
// 	for (var i = 0; i < str.length; i++) {
// 		if (flag) {
// 			if (i % 2 === 0) {
// 				s = str[i].toLocaleUpperCase();
// 			} else {
// 				s = str[i].toLocaleLowerCase();
// 			}
// 		} else {
// 			if (i % 2 === 0) {
// 				s = str[i].toLocaleLowerCase();
// 			} else {
// 				s = str[i].toLocaleUpperCase();
// 			}
// 		}
// 		newStr += s;
// 	}
// 	console.log(newStr);
// };
// zebra('mamamamama', true);
// zebra('mamamamama', false);


////////////////////////////////////////////////////

// 3. includes
// Напишите функцию includes(base, str), проверяет, включает ли одна строка в себя другую, возвращает true/false. (фичи ES6 использовать нельзя)

// function includes(base, str) {
//     if(base.indexOf(str)) {
//         return true;
//     } else return false;
// }
// console.log(includes('ace of base', 'base'));


////////////////////////////////////////////////////

// 4. endsWith
// Напишите функцию endsWith(base, str), возвращает true, если строка base заканчивается подстрокой str. (фичи ES6 использовать нельзя)

////////////////////////////////////////////////////

// function endsWith(base, str) {
//     if(str === base.slice(-(str.length))) {
//         return true;
//     } else return false;
// }
// cl(endsWith('timescomes', 'omes'));



////////////////////////////////////////////////////

// 5. startsWith
// Напишите функцию startsWith(base, str), возвращает true, если строка base начинается со строки str. (фичи ES6 использовать нельзя)

////////////////////////////////////////////////////

// function startWith(base, str) {
//     if(str === base.slice(0,str.length)) {
//         return true;
//     } else return false;
// }
// cl(startWith('timescomes', 'time'));

////////////////////////////////////////////////////

// 6. repeatString
// Напишите функцию repeat(str, times), возвращает результат повторения строки str times раз. Внутри функции делать проверку аргумента : [times is целое число; times is Number; times > 0; times != NaN; times != Infinity]. Если times == 0 вернуть пустую строку.(фичи ES6 использовать нельзя)

// function lashPerDOS(str, times) {
// 	var kurwa = '';
// 	for (var i = 0; i < times; i++ ) {
// 		kurwa += str; 
// 	}
// 	return kurwa;
// }
// cl(lashPerDOS('proshmandovka ', 7));

////////////////////////////////////////////////////

// 7. reversit
// Напишите функцию reversit(str), которая переворачивает строку str. Используйте цикл for, который меняет местами первый и последний символы, затем следующие и т. д. до предпоследнего. Строка str должна передаваться в функцию reversit(str) как аргумент. Также организовать безопасность типов - проверять есть ли аргумент str строкой и преобразовать str в строку явно.

// function reverseStr(str) {
// 	var newStr = '',
// 		i;
// 	for (i = str.length - 1; i >= 0; i--) {
// 		newStr += str.charAt(i);
// 	}
// 	return newStr;
// }
// cl(reverseStr('Привет мир!'));

////////////////////////////////////////////////////

// 8. getCharJavaScriptUltra+100500DoubleVersion
// Напишите функцию require(n) предназначенную для получения денег данных от пользователя. Функция получает аргумент n - количество символов, которые нужно получить от пользователя. Использовать цикл и prompt, каждый раз запрашивать количество символов которое "должен" пользователь.


// function require(n) {
// var str = prompt('введите слово', '');
// 	while(str.length !== n) {
//   alert('неверное колличество символов');
//   str = prompt('введите слово', '');
//   }
// }
// require(6);

////////////////////////////////////////////////////

// 9. randomStr
// Напишите функцию randomStr(n), n - длина строки из случайно сгенерированных символов.

// function randomStr(n) {
// 	var str = 'abcdefghijklmnopqrstuvwxyz';
// 	var ranStr = '';
// 	var	i;
// 	for (i = 0; i < n; i++) {
// 		ranStr += str[Math.floor(Math.random() * 26) + 0];
// 	}
// 	return ranStr;
// }
//randomStr(50);


////////////////////////////////////////////////////

// 10. sliceKingdom (с анг. slices - скибочки:)
// Создайте строку randomStr(100). Разбейте эту строку на отдельные слова случайной длины и выведите в консоль.

// var sliceKingdomStr = '';
// for(var i = 0; i < 20; i++){
// 	sliceKingdomStr += randomStr(100).substr(Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 20) + 1) + ' ';
// }
//cl(sliceKingdomStr);

////////////////////////////////////////////////////

// 11. subKingdom
// Используя результаты задания 10:
// - Выведите в консоль подстроку с 6 по 20 символ включительно
// - Выведите в консоль подстроку начиная с 3 символа, длиной 8 символов
// var subKingdom1 = sliceKingdomStr.substring(3, 8);
// var subKingdom2 = sliceKingdomStr.substr(6, 21);
// cl(subKingdom1);
// cl(subKingdom2);



////////////////////////////////////////////////////

// 12. phoneNumber
// Дано телефонный номер в формате "0682091234". Нужно его преобразовать в формат "+38 (068) 209-12-34". Создайте функцию, которая выполняет эту задачу.

// var tel = "0682091234";
// cl(`+38 (${tel.substr(0,3)}) ${tel.substr(3,3)}-${tel.substr(6,2)}-${tel.substr(8,2)}`);

////////////////////////////////////////////////////

// 13. myTrim
// Функция Trim брезает пробельные символы в начале и в конце строки. Часть стандарта ECMAScript 5, но функции trimLeft() и trimRight() не стандартизированы. Напишите свои реализации trimLeft(str) и trimRight(str):
// - trimLeft - Обрезает пробельные символы с левой стороны строки
// - trimRight - Обрезает пробельные символы с правой стороны строки.


// function trimLeft(str) {
// 	while (str.slice(0,1) === ' ') {
// 		str = str.slice(1);
// 	}
// 	return str;
// }
// cl(trimLeft('         lololo'));

// function trimRight(str) {
// 	while (str.slice(-1) === ' ') {
// 		str = str.slice(0,str.length -1);
// 	}
// 	return str;
// }
// cl(trimRight('lololo      '));


////////////////////////////////////////////////////

// 13. indexOfAll
// Напишите функцию indexOfAll(base, str), которая возвращает список всех вхождений str в строке base

// var str = 'loremloremloremloremloremloremloremloremloremloremloremloremlorem';
// var substr = 'em';
// var pos = 0;

// while (true) {
// 	cl(str.indexOf(substr, pos));
// 	pos = str.indexOf(substr, pos) + 1;
// 	if (str.indexOf(substr, pos) === -1) break;
// }

////////////////////////////////////////////////////
