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