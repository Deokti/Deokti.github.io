// Создание маски для телефона,
// и запрет вводить другие символы
jQuery(function($){
    $("#phone").mask("+7 999 999 99 99");
});

// Запрет ввобдить английский буквы
// и любые цифры. Только русские буквы
function checkTextInput(inputSelector) {
    var selector = document.querySelector(inputSelector);

    selector.addEventListener('keypress', function(event) {
        if (event.key.match(/[^а-яё]/ig)) {
            event.preventDefault();
        }
    });
}
checkTextInput('.modal-fill__name input[name="name"]');


// Функция отвечает за проверку заполненности
// input и дальнейшие дейсвтия после этого
var form = document.forms['form'];
var formName = form.elements['name'];
var formPhone = form.elements['phone'];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    getDataServer()
    document.form.reset();
});

function getDataServer() {
    var phoneLength = formPhone.value.length;
    var nameLength = formName.value.length;
 
    if (!(phoneLength === 16 && nameLength >= 3)) {
        isPhone();
    } else {
        enteredCorrectly();
    }
}

function isPhone() {
    var div = document.createElement('div');
    div.classList.add('incorrect');
    div.textContent = 'Не правильно введены Ваше имя или Ваш телефон!';
    document.querySelector('.modal').appendChild(div);
    // setTimeout(function() {
    //     div.remove();
    // }, 2000);
}

function enteredCorrectly() {
    var modal = document.querySelector('.modal');
    var overlay = document.querySelector('.overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
    overlay.classList.remove('overlay_white');

    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
    
    redirect();
}

function redirect() {
    var overlay = document.querySelector('.overlay');
    var thank = document.querySelector('.thank');

    overlay.style.display = 'block';
    overlay.classList.add('overlay_black');
    thank.style.display = 'block';
}



