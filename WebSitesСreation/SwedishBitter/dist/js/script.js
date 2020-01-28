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
// при нажатии на кнопку и выводим данные в небольшой окошке

// const allForms = document.forms['form'];
// const formName = allForms.elements['name'];
// const formTel = allForms.elements['tel'];
// allForms.addEventListener('submit', event => {
//     event.preventDefault()
//     const nameValue = formName.value;
//     const telValue = formTel.value;
// });



const allForms = document.forms['form'];
const formName = allForms.elements['name'];
const formTel = allForms.elements['tel'];
allForms.addEventListener('submit', createNewMessage);

function createNewMessage(event) {
    event.preventDefault();

    // Обращение к значению в инпутах
    const nameValue = formName.value;
    const telValue = formTel.value;

    // Создание новой элемента Li
    let li = document.createElement('li'),
        paragrafOne = document.createElement('p'),
        paragrafTwo = document.createElement('p'),
        spanOne = document.createElement('span'),
        spanTwo = document.createElement('span');

    li.classList.add('message-list__item');
    paragrafOne.textContent = 'Ваше имя:';
    spanOne.textContent = nameValue;
    paragrafTwo.textContent = 'Ваш телефон:';
    spanTwo.textContent = telValue;
    paragrafOne.appendChild(spanOne);
    paragrafTwo.appendChild(spanTwo);
    li.appendChild(paragrafOne);
    li.appendChild(paragrafTwo);
    
    if (!document.querySelector('.message .massage-list') && nameValue && telValue) {
        let ul = document.createElement('ul');
            ul.classList.add('massage-list');
            document.querySelector('.message').appendChild(ul);
    } 
    if (nameValue && telValue){
        document.querySelector('.massage-list').appendChild(li);
    }
    
    setTimeout(function() {
        if (document.querySelector('.massage-list')) {
            li.remove();
            const allElementLI = document.querySelectorAll('.massage-list .message-list__item');
            if (allElementLI.length === 0) document.querySelector('.massage-list').remove();
        }
    }, 2000)
}
