//получаем форму и отклчаем перезагрузку страницы
document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault();

    //при нажатии input очищается
    let clearForm = document.querySelectorAll('.header-promo__application-enter');
    for (let i = 0; i < clearForm.length; i++) {
        clearForm[i].value = '';
    }
});

document.querySelector('.button_questions').addEventListener('click', function (event) {
    event.preventDefault();

    let clearForm = document.querySelectorAll('.input-clear');
    for (let i = 0; i < clearForm.length; i++) {
        clearForm[i].value = '';
    }
});

/* Пеервый пакет - Light */
document.querySelector('.calculate-left__choose-package_one').addEventListener('mousemove', function(event) {
    let appearanceDescriptionOne = document.querySelector('.calculate-left__list-description_one');
    setTimeout(function() {
        appearanceDescriptionOne.style.opacity = '1';
    }, 400);
});
document.querySelector('.calculate-left__choose-package_one').addEventListener('mouseout', function(event) {
    let appearanceDescriptionOne = document.querySelector('.calculate-left__list-description_one');
    setTimeout(function() {
        appearanceDescriptionOne.style.opacity = '0';
    }, 400);
});
/* /.Первый пакет - Light */

/* Второй пакет - Medium */
document.querySelector('.calculate-left__choose-package_two').addEventListener('mousemove', function(event) {
    let appearanceDescriptionTwo = document.querySelector('.calculate-left__list-description_two');
    setTimeout(function() {
        appearanceDescriptionTwo.style.opacity = '1';
    }, 400);
});
document.querySelector('.calculate-left__choose-package_two').addEventListener('mouseout', function(event) {
    let appearanceDescriptionTwo = document.querySelector('.calculate-left__list-description_two');
    setTimeout(function() {
        appearanceDescriptionTwo.style.opacity = '0';
    }, 400);
});
/* /.Второй пакет - Medium */

/* Третий пакет - Full */
document.querySelector('.calculate-left__choose-package_three').addEventListener('mousemove', function(event) {
    let appearanceDescriptionThree = document.querySelector('.calculate-left__list-description_three');
    setTimeout(function() {
        appearanceDescriptionThree.style.opacity = '1';
    }, 400);
});
document.querySelector('.calculate-left__choose-package_three').addEventListener('mouseout', function(event) {
    let appearanceDescriptionThree = document.querySelector('.calculate-left__list-description_three');
    setTimeout(function() {
        appearanceDescriptionThree.style.opacity = '0';
    }, 400);
});
/* ./.Третий пакет - Full */

//Добавление и удаление класса при нажатии на один из прямоугольников в "Выберите пакет"
document.querySelector('.calculate-left__list').addEventListener('click', function(e) {
    let package = document.querySelectorAll('.calculate-left__choose-package');
    Array.from(package).forEach(function(item) {
        item.classList.remove('calculate-left__choose-package_active');
    });
    e.target.classList.add('calculate-left__choose-package_active');
});

//получаем объект, в котором находятся табы
document.querySelector('.portfolio-tabs').addEventListener('click', function(event) {
    //когда клик произошёл на элемента с классом
    if (event.target.className == 'portfolio-tabs__tab') {
        //получаем атрибут, указанный в кнопках табов
        let dateAtribute = event.target.getAttribute('data-tab'), //получаем атрибут, указанный в кнопках табов
            portfolioContent = document.querySelectorAll('.portfolio-content');  //получаем содержимое, иначе говоря контент, который должен отображаться в табах

        //перебор массива с контентом внутри татов и отражение тех, что идту по порядку
        for (let i = 0; i < portfolioContent.length; i++) {
            if (dateAtribute == i) {
                portfolioContent[i].style.display = 'flex';
            } else {
                portfolioContent[i].style.display = 'none';
            }
        }

        let getTab = document.querySelectorAll('.portfolio-tabs__tab'); // получаем все табы, находящиеся внутри portfolio-tabs

        //при нажатии на элемент одному добавляет активный класс, а у всех остальных удаляем
        for (let i = 0; i < getTab.length; i++) {
            getTab[i].classList.remove('portfolio-tabs__tab_active');
        }
        event.target.classList.add('portfolio-tabs__tab_active');

    }
});

let slider          = document.querySelector('.partner-slider'),
    sliderInner     = document.querySelector('.partner-slider__inner'),
    sliderRange     = document.querySelector('.partner-slider__range'),
    maxOffset       = sliderInner.offsetWidth - slider.offsetWidth;

sliderRange.addEventListener('input', function(event) {
    slider.scrollLeft = event.target.value * maxOffset / 100;
});

console.log('Секция "partner" не закончена, так как есть некоторые моменты, которые стоит в будущем исправить, поскольку в настоящее время у меня не хватит навыков');
//создаём переменные для того, чтобы в будущем добавить в них что-то. Если добавить сразу, прокрутка будет длиться только 1 раз.
let heightScrollTop;

document.querySelector('.click-mouse').addEventListener('click', function (event) {
    //рассчитывает вертикальный скролл при нажатии кнопки
    heightScrollTop = window.pageYOffset;
    timeScrollTop();
});

//функция, которая будет срабатывать при нажатии
function timeScrollTop () {
    //пока heightScrollTop меньше или равно 700
    if (heightScrollTop <= 705) {
        //будет происходит скролл вниз, каждый раз добавляет по 10 пикселей, с переодичностью в 1 милисекунду
        window.scrollTo(0, heightScrollTop);
        heightScrollTop += 10;
        setTimeout(timeScrollTop, 1);
    }
}
