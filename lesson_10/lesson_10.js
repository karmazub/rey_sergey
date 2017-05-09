
/*
1. Векторный тип
Напишите конструктор Vector, представляющий вектор в двумерном пространстве. Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
    Дайте Vector два метода, plus и minus, которые принимают другой вектор в качестве параметра и возвращают новый вектор, который хранит в x и y сумму или разность двух векторов (один this, второй – аргумент).

'use strict';
       console.log(new Vector(1, 2).plus(new Vector(2, 3)));
                                             // → Vector{x: 3, y: 5}
       console.log(new Vector(1, 2).minus(new Vector(2, 3)));
                                             // → Vector{x: -1, y: -1}
       console.log(new Vector(3, 4).length); // Длина вектора
После, реализуйте модуль Vector. Вынесите интерфейс.*/
/*'use strict';
function  Vector(x,y) {
    this.x = x;
    this.y = y;

}
Vector.prototype = {
    plus : function(  a  ) {
        var x = this.x + a.x , y = this.y + a.y;
        return new Vector(x, y);
    },
    minus : function( a ) {
        var x = this.x - a.x, y = this.y - a.y;
        return  new Vector (x, y);
    }
};
var a = new Vector(1, 1);
var b = new Vector(2, 3);


var c = a.plus( b );*/

/*
2. Названия месяцев
Напишите простой модуль month, преобразующий номера месяцев (начиная с нуля) в названия и обратно. Выделите ему собственное пространство имён, т.к. ему потребуется внутренний массив с названиями месяцев.*/
/*
'use strict';
console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10*/

/*
'use strict';
var foo = (function monthModule() {
    var months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function number(month) {
        console.log(months.indexOf(month));
    }

    function name(num) {
        var nubmerOfMonth = months.splice(num, 1);
        console.log(nubmerOfMonth);
    }

    return {
        name: name,
        number: number
    };
})();

foo.name(2);
foo.mnumber('April');*/

/*
3. Counter
Реализуйте конструктор счет­чи­ка Counter(id), id уникальный идентификатор счетчика.
Counter.prototype.count - поле счет­чи­ка.
Counter.prototype.reset() - обнуляет счетчик.
set Counter.prototype.count(value) - позволяет установить счетчик.
get Counter.prototype.id - возвращает идентификатор счетчика.
Counter.prototype.autoCounting(timeout) - позволяет установить автоматическое увеличение счетчика через timeout.
Counter.prototype.startCounting(timeout) - запускает автоматическое увеличение счетчика.
Counter.prototype.stopCounting(timeout) - отменяет автоматическое увеличение счетчика.
После, реализуйте модуль Counter. Вынесите интерфейс.*/

/*
function Counter(id) {
    this._id = id;
    this.count = 0;
}

Counter.prototype = {
    reset : function () {
        this._count = 0;
    },
    set count(value) {
        this._count = value;
    },
    get id() {
        return this._id;
    },
    autoCounting : function (timeout) {
        this.time = timeout;
    },
    startCounting : function () {
       var that = this;
       this.timer = setInterval(function() {console.log(that._count++); }, this.time)
    },
    stopCounting: function () {
        clearInterval(this.timer);
    }
};



var a = new Counter(5);
a.autoCounting(10);
*/
/*var module1 = (function (id) {
    var id = id;
    var count = 0;
    var time,
        timer;

    function autoCounting(timeout) {
        time = timeout;
    }

    function startCounting() {
        timer = setInterval(function() {console.log(count++); }, time)
    }
    function stopCounting() {
        clearInterval(timer);
    }
    return {
        autoCounting : autoCounting,
        startCounting : startCounting,
        stopCounting : stopCounting
    };

})(1);*/



/*
5. allArgumentsAdd
Напишите функцию allArgumentsAdd, что возвращает суму всех аргументов переданных функции (количество аргументов зарание неизвесно).
*/
/*
function allArgumentsAdd() {
    return Array.prototype.reduce.call(arguments, function (e, sum) {
        return sum+e;
    })
}
allArgumentsAdd(1,2,3,4,5);
*/









