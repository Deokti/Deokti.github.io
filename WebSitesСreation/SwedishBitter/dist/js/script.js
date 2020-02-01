const allAilmentsItems = document.querySelectorAll('.list-ailments__item');
allAilmentsItems.forEach(event => {
    event.addEventListener('click', function({target}) {
        // Получаем атрибут элемента исходя из контекста
        let dataAttribute = target.getAttribute('data');
   
        // Получаем элементы круга с цифрой, перебираем и скрываем 
        document.querySelectorAll('.list-skeleton__item').forEach(item => {
            item.style.display = 'none';
        });

        // Но тот элемент, у которого оданаковый дата-атрибут остаётся 
        // в нормально состоянии
        document.querySelector(`.list-skeleton__item[data="${dataAttribute}"]`).style.display = 'flex';

        // Получаем все элементы item из list-ailments и удаляем активный класс
        document.querySelectorAll('.list-ailments__item').forEach(elements => {
            elements.classList.remove('list-ailments__item_active');
        });
        // а на тот элемент, который нажали - добавляем
        target.classList.add('list-ailments__item_active');
    });
});

// Отключаем базовое поведение всех ссылок 
let allLinks = document.querySelectorAll('.prevent-default');
allLinks.forEach(event => {
    event.addEventListener('click', event => {
        event.preventDefault();
    })
});




// Отключаем базовое поведение форм 
const allForms = document.querySelectorAll('.form');
allForms.forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
    });
});



