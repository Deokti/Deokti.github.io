const mainForm          = document.forms['mainForm'],
    readTitleTask       = mainForm.elements['name'],
    readBodyTask        = mainForm.elements['text'],
    todoItem            = document.querySelector('.todolist-items');

// Накладывание ивента на форму, и активация функции
mainForm.addEventListener('submit', clickingIsForm);

// Накладывание имента на родитель, внутри которого находятся все элементы новых и старых задач
todoItem.addEventListener('click', searcAttributeAndDeleteLi);


// Функция, отвечающая за считывание и добавление в ДОМ новой задачи
function clickingIsForm(event) {
    event.preventDefault();

    // Считываем значение, написанное в input и textarea
    const readValueTitle    = readTitleTask.value,
        readValueBody       = readBodyTask.value;

    // Проверки, которая будет действовать если в input или textarea ничего не не записано
    if (!readValueTitle && !readValueBody) {
        alert('Не заполнено название и описание задачи!');
        return;
    } 
    else if (!readValueBody) {
        alert('Описание задачи не заполнено!');
        return;
    } 
    else if (!readValueTitle) {
        alert('Нет названия задачи!');
        return;
    }

    // Запуск задачи в которой создаётся новая li. 
    // Первый аргумент куда записывается Li, второй заголовок задачи, третий подробности задачи
    createNewLiElement(readValueTitle, readValueBody);


    // После заполнения, написанное в форме сбрасывается
    document.mainForm.reset();
}

function createNewLiElement(titleTask, bodyTask) {

    // Создание новых элементов, которые будут использоваться при создании новой Задачи
    const li            = document.createElement('li'),
        h3              =  document.createElement('h3'),
        p               = document.createElement('p'),
        buttonDelete    = document.createElement('button');


    // Добавление классов в созданные выне элементы
    li.classList.add('todolist-items__item');
    h3.classList.add('todolist-items__title-task');
    p.classList.add('todolist-items__body');

    buttonDelete.classList.add('button', 'button-delete');
    buttonDelete.innerText = 'Удалить';

    //Присваивание некоторых элементов аргументам функции
    h3.textContent  = titleTask;
    p.textContent   = bodyTask;

    //Вставление всех элементов в созданный первым li
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(buttonDelete);

    // Присваиваем li атрибут для облегчения к нему обращения
    li.setAttribute('data-number', Math.random() * 10);
    todoItem.appendChild(li);
}

// Функция, которая выясняет data- у элемента и иходя из него удаляет со страницы
function searcAttributeAndDeleteLi({target}) {

    // Если элемент на который нажали, содержит данный класс, произодить действие
    if (target.classList.contains('button-delete')) {

        // Получаем элемент Li, исходя из его data-number
        const parentDataNumber = target.closest('[data-number]');

        //Удаляет элемент исходя из его data-number;
        parentDataNumber.remove();
    }
}
