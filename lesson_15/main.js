'use strict';
var _$ = document;

//Ulka z lishkami
var ul = _$.createElement('ul');
for (var i = 0; i < 10; i++) {
    var li = _$.createElement('li');
    ul.appendChild(li);
}
_$.body.appendChild(ul);

// Table

var table = _$.createElement('table');

for (let i = 0; i < 3; i++) {
    var tr = _$.createElement('tr');
    for (let i = 0; i < 3; i++) {
        var td = _$.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
_$.body.appendChild(table);

var tds = table.querySelectorAll('td');


var buttonUp = _$.createElement('button');
buttonUp.innerText = '\u2191';
buttonUp.classList.add('buttonup');


var buttonDown = _$.createElement('button');
buttonDown.innerText = '\u2193';
buttonDown.classList.add('buttondown');


var buttonLeft = _$.createElement('button');
buttonLeft.innerText = '\u2190';
buttonLeft.classList.add('buttonleft');


var buttonRight = _$.createElement('button');
buttonRight.innerText = '\u2192';
buttonRight.classList.add('buttonright');


tds[1].appendChild(buttonUp);
tds[3].appendChild(buttonLeft);
tds[5].appendChild(buttonRight);
tds[7].appendChild(buttonDown);

var buttons = document.querySelectorAll('button');
buttons.forEach(function (e) {
    e.classList.add('btn');
})

document.querySelectorAll('.btn').forEach(function (e) {
    e.style.height = '50px';
    e.style.width = '50px';
});

//Trawel history
var thh2 = _$.createElement('h2');
thh2.innerText = 'Trawel History';

_$.body.appendChild(thh2);
var thta = _$.createElement('textarea');
thta.style.width = '500px';
thta.style.height = '400px';
_$.body.appendChild(thta);

// eventBlock

var position = _$.querySelector('td');
position.classList.add('active');

positionFun(position);

buttonUp.onclick = up;

    function up() {
    if (position.parentElement !== undefined && position.parentElement !== null) {
        position.classList.remove('active');
        position = position.parentElement;
        position.classList.add('active');
        console.log(position);
        thta.appendChild(document.createTextNode(position.nodeName + '\n'));
        positionFun(position);
    } else {
        console.log('Error');
    }
}

buttonDown.onclick = down;

    function down() {
    if (position.children.length !== 0) {
        position.classList.remove('active');
        var a = prompt(position.children.length, 1);
        position = position.children[a - 1];
        position.classList.add('active');
        console.log(position);
        thta.appendChild(document.createTextNode(position.nodeName + '\n'));
        positionFun(position);
    } else {
        console.log('Error');
    }
}

buttonLeft.onclick = left;

    function left() {
    if (position.previousElementSibling !== undefined && position.previousElementSibling !== null) {
        position.classList.remove('active');
        position = position.previousElementSibling;
        position.classList.add('active');
        console.log(position);
        thta.appendChild(document.createTextNode(position.nodeName + '\n'));
        positionFun(position);
    } else {
        console.log('Error');
    }
}

buttonRight.onclick = right;

    function right() {
    if (position.nextElementSibling !== undefined && position.nextElementSibling !== null) {
        position.classList.remove('active');
        position = position.nextElementSibling;
        position.classList.add('active');
        console.log(position);
        thta.appendChild(document.createTextNode(position.nodeName + '\n'));
        positionFun(position);
    } else {
        console.log('Error');
    }
}


function positionFun(pos) {
    if (pos.parentElement === null || pos.parentElement === undefined) {
        buttonUp.setAttribute("disabled", "disabled");
        buttonUp.style.opacity = '0.4';
    } else {
        buttonUp.removeAttribute("disabled");
        buttonUp.style.opacity = '1';
    }
    if (pos.children.length === 0) {
        buttonDown.setAttribute("disabled", "disabled");
        buttonDown.style.opacity = '0.4';
    } else {
        buttonDown.removeAttribute('disabled');
        buttonDown.style.opacity = '1';
    }
    if (pos.previousElementSibling === undefined || pos.previousElementSibling === null) {
        buttonLeft.setAttribute("disabled", "disabled");
        buttonLeft.style.opacity = '0.4';
    } else {
        buttonLeft.removeAttribute('disabled');
        buttonLeft.style.opacity = '1';
    }
    if (pos.nextElementSibling === undefined || pos.nextElementSibling === null) {
        buttonRight.setAttribute("disabled", "disabled");
        buttonRight.style.opacity = '0.4';
    } else {
        buttonRight.removeAttribute('disabled');
        buttonRight.style.opacity = '1';
    }
}





window.onkeydown = function (e) {
        if ((e.keyCode === 38 || e.keyCode === 87) && buttonUp.getAttribute('disabled') !== 'disabled') {
            up();
        }
        if ((e.keyCode === 40 || e.keyCode === 83) && buttonDown.getAttribute('disabled') !== 'disabled') {
            down();
        }
        if ((e.keyCode === 39 || e.keyCode === 68) && buttonRight.getAttribute('disabled') !== 'disabled') {
            right();
        }
        if ((e.keyCode === 37 || e.keyCode === 65) && buttonLeft.getAttribute('disabled') !== 'disabled') {
            left();
        }
};









