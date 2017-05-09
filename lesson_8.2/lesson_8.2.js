'use strict';
function cl(x) {
	return console.log(x);
}
/*1. compareFunctionNumber
Напишите функцию compareFunctionNumber(a, b), которая принимает 2 аргумента и возвращает true если первый больше второго и false в ином случае. Приводить к числу оба аргумента внутри функции.*/

/*function compareFunctionNumber(a, b) {
	if ( parseInt(a) > parseInt(b) ) return true;
	else return false;
}

cl(compareFunctionNumber('12', '10'));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*2. compareFunctionString
Напишите функцию compareFunctionString(a, b), которая сравнивает строки, принимает 2 аргумента и возвращает true если первый больше второго и false в ином случае. Если тип одного из аргументов не строка, возвращать false.*/

/*function compareFunctionString(a, b) {
	if ( typeof a === 'string' &&  typeof b === 'string') {
		if (a > b) return true;
		else return false;
	}
	else return false;
}

cl(compareFunctionString(29, '28'));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3. compareFunctionString
Напишите функцию compareFunctionType(a, type), которая принимает 2 аргумента (первый - значение, второй - строка из типом или подтипом) и возвращает true если первый принадлежит к типу второго, false в ином случае.
Список типов и подтипов, которые должна обрабатывать функция:
- undefined
- null
- Number
- NaN
- Infinity
- String
- Boolean
- Object
- Array
- Function
Обратите внимание: строка 'Function', 'function', 'functiOn' должны обрабатываться одинаково (опускаем значения аргумента type в нижний регистр).*/

/*function compareFunctionType(a, type) {
	if (typeof a === type.toLowerCase()) return true;
	else return false;
}
cl(compareFunctionType('2', 'number'));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*4. singleExemplar
Напишите функцию singleExemplar(a), которая принимает 1 аргумент (массив, реализовать безопасность типов) и возвращает новый массив, где все элементы уникальны в пространстве массива.*/

/*'use strict';
singleExemplar(a) { .. }
var myArray = [null, 1, 2, 2, 3, [1, 2], NaN, 'str', '1', {1}, null, NaN, 1, 3];
singleExemplar(singleExemplar); // [null, 1, 2, 3, [1, 2], NaN, 'str', '1', {1}]
Помните: NaN не равен ничему включая себя.*/

/*function singleExemplar(a) {
	var newArr = [];
	for (var i = 0, max = a.length; i < max; i++ ) {
		if (newArr.indexOf(a[i]) === -1) {
			newArr.push(a[i]);
		}
	}
	return newArr;
}
cl(singleExemplar([null, 1, 2, 2, 3, [1, 2], NaN, 'str', '1', {1:0}, null, NaN, 1, 3]));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*5. singleExemplarStrict
Напишите функцию singleExemplarStrict(a), которая принимает 1 аргумент (массив, реализовать безопасность типов) и возвращает новый массив, где все элементы уникальны в пространстве массива.

'use strict';
singleExemplar(a) { .. }
var myArray = [null, 1, 2, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4], [1, 2, 3]];
singleExemplar(singleExemplar); // [null, 1, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4]]
singleExemplar и singleExemplarStrict работают с примитивами работают аналогично. Но singleExemplarStrict считает массивы одинаковими если: 1 - их длины одинаковые, 2 - под одинаковыми индексами стоят одинаковые значения. В контексте функции singleExemplarStrict объекты одинаковые если: 1 - у них одинаковое количество ключей*/

/*function singleExemplarStrict(a) {
	var newArr = [];
	for (var i = 0, max = a.length; i < max; i++ ) {
		var flag = 0;
		for (var j = 0, maxj = newArr.length; j < maxj; j++ ) {
			if ((a[i] === null) || (typeof a[i] !== 'object')) {
				if (a[i] === newArr[j]) flag = 1;
			} else if (Array.isArray(a[i])) {
				if (eqArr(a[i], newArr[j])) flag = 1;
			}	else {
				if (eqObj(a[i], newArr[j])) flag = 1;
			}
		}
		if (flag === 0) newArr.push(a[i]);
	}
	return newArr;
}
function eqArr(a, b) {
	if (a.length !== b.length) return false;
	var flag = 0;
	for (var i = 0, max = a.length; i < max; i++ ) {
		if (a[i] !== b[i]) flag = 1;
	}
	if (flag === 1) return false;
	else return true;
}
function eqObj(a, b) {
	if(Object.keys(a).length === Object.keys(b).length) return false;
	else return true;
}
console.log(singleExemplarStrict([ 1, 2, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4], [1, 2, 3]]));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
