var _d = document;
var li = _d.querySelectorAll('li');
var block = _d.querySelectorAll('.main');
li.forEach(function (e) {
    e.onclick = function () {

        li.forEach(function (e) {
            e.classList.remove('activeli');
        });

        e.classList.add('activeli');
        block.forEach(function (e) {
            e.style.display = 'none';
        });

        _d.querySelector( `.${this.dataset.class}`).style.display = 'block';

    }
});