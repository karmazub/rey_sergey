'use strict';
var _$ = document;
var a = _$.createElement('h1');
var a2 = _$.createTextNode('My text yoYoYo');
a.appendChild(a2);
_$.body.appendChild(a);
_$.body.insertBefore(a, _$.body.childNodes[0]);
var a3 = a.cloneNode(true);
_$.body.insertBefore(a3, _$.body.childNodes[0]);
_$.body.replaceChild(a3, a);
//_$.body.removeChild(a);
//TABLE
var table1 = _$.createElement('table');
//Stroka
var tr1 = _$.createElement('tr');
var tr2 = _$.createElement('tr');
var tr3 = _$.createElement('tr');
//Kletka
var td1 = _$.createElement('td');
var td2 = _$.createElement('td');
var td3 = _$.createElement('td');
var td4 = _$.createElement('td');
var td5 = _$.createElement('td');
var td6 = _$.createElement('td');
var td7 = _$.createElement('td');
var td8 = _$.createElement('td');
var td9 = _$.createElement('td');
//BUTTON
var buttUP = _$.createElement('button');
var textUP = _$.createTextNode('\u2191');
buttUP.appendChild(textUP);
td2.appendChild(buttUP);
//=====
var buttLEFT = _$.createElement('button');
var textLeFT = _$.createTextNode('\u2190');
buttLEFT.appendChild(textLeFT);
td4.appendChild(buttLEFT);
//=====
var buttRIGHT = _$.createElement('button');
var textRIGHT = _$.createTextNode('\u2192');
buttRIGHT.appendChild(textRIGHT);
td6.appendChild(buttRIGHT);
//======
var buttDOWN = _$.createElement('button');
var textDOWN = _$.createTextNode('\u2193');
buttDOWN.appendChild(textDOWN);
td8.appendChild(buttDOWN);
//Stroki
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
tr2.appendChild(td4);
tr2.appendChild(td5);
tr2.appendChild(td6);
tr3.appendChild(td7);
tr3.appendChild(td8);
tr3.appendChild(td9);
//Tablichka
table1.appendChild(tr1);
table1.appendChild(tr2);
table1.appendChild(tr3);
_$.body.appendChild(table1);

//Trawel history
var ahh2 = _$.createElement('h2');
var ahhh2 = _$.createTextNode('trawel history');
ahh2.appendChild(ahhh2);
_$.body.appendChild(ahh2);
var ah2 = _$.createElement('textarea');
_$.body.appendChild(ah2);


//EVENT block
var positionTAB = document.querySelector('td');
buttUP.onclick = function () {
    if (positionTAB.parentElement !== undefined && positionTAB.parentElement !== null) {
        positionTAB = positionTAB.parentElement;
        console.log(positionTAB);
    }
    else {
        console.log('Error');

        ah2.appendChild(document.createTextNode(positionTAB.nodeName + '\n'));
    }
};
buttDOWN.onclick = function () {
    if (positionTAB.children.length !== 0) {
        var a = prompt(positionTAB.children.length, 1);
        positionTAB = positionTAB.children[a - 1];
        console.log(positionTAB);
    }
    else {
        console.log('Error');

        ah2.appendChild(document.createTextNode(positionTAB.nodeName + '\n'));
    }
};
buttLEFT.onclick = function () {
    if (positionTAB.previousElementSibling !== null && positionTAB.previousElementSibling !== undefined) {
        positionTAB = positionTAB.previousElementSibling;
        console.log(positionTAB);
    }
    else {
        console.log('ERRor');
    }
    ah2.appendChild(document.createTextNode(positionTAB.nodeName + '\n'))
};
buttRIGHT.onclick = function () {
    if (positionTAB.nextElementSibling !== null && positionTAB.nextElementSibling !== undefined) {
        positionTAB = positionTAB.nextElementSibling;
        console.log(positionTAB);

    }
    else {
        console.log('ERRor');
    }
    ah2.appendChild(document.createTextNode(positionTAB.nodeName + '\n'));
};