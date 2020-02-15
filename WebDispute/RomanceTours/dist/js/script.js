(function() {
    const allCountrysItem = document.querySelectorAll('.countrys-item');
    allCountrysItem.forEach(event => {
        event.addEventListener('click', ({target}) => {
            let dataSet = target.getAttribute('data-tab');
            
            // Скрываем весь контент, который отскрывается при клике
            document.querySelectorAll('.countrys-content__item').forEach(hide => {
                hide.style.display = 'none';
            });
            // Открываем только тот, чей data-set единтичный
            document.querySelector(`.countrys-content__item[data-tab="${dataSet}"]`).style.display = 'flex';

            // Меняет активный класс к самих табов
            document.querySelectorAll('.countrys-item').forEach(hide => {
                hide.classList.remove('countrys-item_active');
            });
            target.classList.add('countrys-item_active');
        });
    })
})();
(function () {
    const formInputPhone = document.querySelector('.form__phone')
    formInputPhone.addEventListener('keydown', function(event) {
        if(!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { 
            event.preventDefault() 
        }
        const mask = '+7 (111) 111-11-11'; // Задаем маску
        let currentString = this.value,
            currentLength = currentString.length;

        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (let i = currentLength; i < mask.length; i++) {
                if (mask[i] == '1') {
                    this.value = currentString + event.key;
                    break;
                }
                currentString += mask[i];
                }
            }
        }
    });
})();
(function() {
    // Отключаем базовое поведение формы
    const mainForm = document.forms['form'];
    mainForm.addEventListener('submit', event => {
        event.preventDefault();
    });

    // Отключаем базовое поведение ссылок
    const allLinks = document.querySelectorAll('.prevent-default');
    allLinks.forEach(event => {
        event.addEventListener('click', click => {
            click.preventDefault();
        });
    });
})();