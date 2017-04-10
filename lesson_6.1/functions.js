/*1. Минимум
В предыдущей главе была упомянута функция Math.min, возвращающая самый маленький из аргументов. Теперь мы можем написать такую функцию сами. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.*/

/*(() => {
	function min(a, b) {
		if (a > b) return b;
		else return a;
	}
	var res = min(18, 25);
	console.log(res);
})();*/

/*2. Even number
Создайте функцию isEven, которая возвращает значение true или false в зависимости от того является ли аргумент x парным.*/

/*(() => {
	function	isEven(arg) {
		if (arg % 2 === 0)
		return true;
		else
		return false;
	}
	console.log(isEven(2358));
})();*/

/*3. dayOfWeek
Создайте функцию, которая принимает в себя число x э [1; 7] и возвращает название дня недели. Используйте switch-case.*/

/*(() => {
	function dayOfWeek(day) {
		switch (day) {
  case 1: return 'Monday';
	break;
  case 2: return 'Tuesday';
	break;
  case 3: return 'Wednesday';
	break;
	case 4: return 'Thursday';
	break;
	case 5: return 'Friday';
	break;
	case 6: return 'Saturday';
	break;
	case 7: return 'Sunday';
	break;
  default: return 'Я таких значений не знаю' ;
		}
	}
	console.log(dayOfWeek(8));
})();*/

/*4. calcBox
Создайте функцию, которая принимает в себя 3 аргумента и рассчитывает объем коробки.*/

/*function calcBox(l, w, h) {
	return `${l * w * h / 1000000} кубических метров`;
}
console.log(calcBox(120, 30, 80));*/

/*5. hmsToSecs
Напишите функцию hmsToSecs, имеющую три аргумента h, m, s. Функция должна возвращать эквивалент переданного ей временного значения в секундах. Создайте программу, которая будет циклически запрашивать у пользователя ввод значения часов, минут и секунд и выводить результат работы функции на экран.*/

/*function hmsToSecs(h, m, s) {
	return `${(h* 3600) + (m * 60) + s} секунд`;
}
console.log(hmsToSecs(12, 28, 34));*/

/*6. callCounter
Напишите функцию, которая при каждом вызове будет выводить на экран количество раз, которое она вызывалась ранее. Напишите программу, которая будет вызывать данную функцию не менее 10 раз.*/

/*var counter = 0;
function callCounter() {
	console.log(counter);
	counter++
  return counter;
}
function counterRunner() {
	for (var i = 0; i < 20; i++) {
		callCounter();	
	}
}
counterRunner();*/

/*7. primeNumber
Напишите функцию, которая которая принимает в себя натуральное число n и возвращает самое большое простое число в диапазоне (2; n).*/

/*(() => {
function simple(x) {
	for (x; x >= 0; x--) {
		if (isSimple(x)) {
			console.log(x);
			return true;
		}
	}
}
simple(3822); //вызов с числом

function isSimple(number) {
	var i;
	for (i = 2; i < number/2; i++) {
		if (number % i === 0) {
			console.log('not simple');
			return false;
		}
	}
	console.log('simple');
	return true;
}
})();*/
