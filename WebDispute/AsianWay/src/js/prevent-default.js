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