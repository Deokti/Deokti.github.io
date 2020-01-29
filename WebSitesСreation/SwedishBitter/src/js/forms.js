// Отключаем базовое поведение форм 
const allForms = document.forms['form'];
allForms.addEventListener('submit', event => {
    event.preventDefault()
});


