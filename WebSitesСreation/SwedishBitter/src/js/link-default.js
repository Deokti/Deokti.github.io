// Отключаем базовое поведение всех ссылок 
let allLinks = document.querySelectorAll('.prevent-default');
allLinks.forEach(event => {
    event.addEventListener('click', event => {
        event.preventDefault();
    })
});
