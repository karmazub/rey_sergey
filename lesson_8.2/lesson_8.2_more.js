'use strict';
//1
var list = document.querySelectorAll('*');
var arrList = [];
for (keys in list) {
	arrList.push(list[keys]);
}
console.log(arrList);
/*2. Создайте строку из названий nodeName используя Array.prototype.join()*/
var arrName = arrList.map(function (e, i) {
	return e.nodeName;
});
var nodeStr = arrName.join();

/*9. Создайте массив arrListPlusChildren из элементов массива arrList и их потомков.*/


var arrListPlusChildren = [];

for (var key in list) {
	(typeof list[key] !== 'function' && typeof list[key] !== 'number') ?
	arrList.push(list[key]): false;
}

arrList.forEach(function (e) {
	arrListPlusChildren.push(e);
	for (var key in e.children) {
		(typeof e.children[key] !== 'function' && typeof e.children[key] !== 'number') ?
		arrListPlusChildren.push(e.children[key]): false;
	}
});
console.dir(list);
console.dir(arrListPlusChildren);
/*
10. Создайте массив из 100 элементов массива arrList используя slice().*/
var sliceList = arrList.slice(0.100);
console.log(sliceList);

/*
11. Выведите в консоль все элементы arrList не используя циклов.*/

arrList.forEach(function (e) {
	console.log(e);
});

/*
11. Создайте массив из nodeName элементов arrList не используя циклов.*/

var nodeNameList = arrList.map(function (e) {
	return e.nodeName;
});

/*
12. Создайте массив из withoutSpan c элементов arrList не используя циклов, откинув все span элементы*/

var withoutSpan = arrList.filter(function (e) {
	if (e.nodeName === 'SPAN') return false;
	else return true;
});

/*
 14 Напишите функцию createWithoutElemens(arr, str), arr - массив элементов, str - строка с названием эле­мен­тов, которые нужно отсеять в процессе работы функции. Функция возвращает новый массив..*/
function createWithoutElemens(arr, str) {
	return arr.filter(function (e) {
		return (e === str ? false : true);
	})
}

/*6.15 Напишите аналог функции createWithoutElemens(arr, str), arr - массив элементов, str - строка с названием эле­мен­тов или массив таких строк, которые нужно отсеять в процессе работы функции. Функция возвращает новый массив.*/
function createWithoutElemens(arr, str) {
	return arr.filter(function (e) {
		for (var i = 0, max = str.length; i < max; i++) {
			if (e === str[i]) return false;
		}
		return true;
	})
}

console.log(createWithoutElemens(['DIV', 'P', 'DIV', 'DIV', 'P', 'DIV', 'SPAN', 'DIV'], ['P', 'SPAN']));


//7
function  createRectangle(m, n) {
    var arr = [];
    for (var i = 0, i < m; i++) {
        arr.push([]);
    }
    return arr;
}
var people = ['Kolya', 'Vasya', 'Petro', 'Грыша', 'Martin'];
function createLetter() {
    var people
    return {
        destination: people[ Math.floor(Math.random() * (5 - 0)) + 0];
        addressee: people[ Math.floor(Math.random() * (5 - 0)) + 0];
    }
}

