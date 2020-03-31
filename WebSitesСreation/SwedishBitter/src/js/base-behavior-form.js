// Отключаем базовое поведение форм 
const allForms = document.querySelectorAll('.form');
allForms.forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
    });
});


