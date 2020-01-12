/* ------------------- ДОБАВЛЕНИЕ НОВОЙ ЗАДАЧИ ------------------- */

const mainForm = document.forms['mainForm'];
mainForm.addEventListener('submit', addNewTaskInDOM);

//Функция создания новой задачи
function addNewTaskInDOM(event) {
    event.preventDefault();

    // Считываем значание, написанное в Заголовке новой статьи
    const readTitleTask = mainForm.elements['name'].value,
        // Считываем значение, написанное в Описание новой задачи
        reatBodyTask = mainForm.elements['text'].value;

    if (!readTitleTask || !reatBodyTask) {
        alert('Введите "Загловок новой статьи" или "Описание задачи"');
        return
    }
 
    createNewLiElement(readTitleTask, reatBodyTask);
    document.mainForm.reset();
}

function createNewLiElement(titleTask, bodyTask) {
    const ul = document.querySelector('.todolist-items');
        li            = document.createElement('li'),
        h3              = document.createElement('h3'),
        p               = document.createElement('p'),
        buttonDelete    = document.createElement('button');
    
    li.classList.add('todolist-items__item');
    h3.classList.add('todolist-items__title-task');
    p.classList.add('todolist-items__body');
    buttonDelete.classList.add('button', 'button-delete');
    buttonDelete.innerText = 'Удалить';

    h3.textContent = titleTask;
    p.textContent = bodyTask;

    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(buttonDelete);
    li.setAttribute('data-number', Math.random() * 10);
    ul.appendChild(li);    
}


/* ------------------- УДАЛЕНИЕ СУЩЕСТВУЮЩЕЙ ЗАДАЧИ-------------------  */

const wrapperTodoList = document.querySelector('.todolist-wrapper');
wrapperTodoList.addEventListener('click', checkDataNumber);

// Создаём функцию и обращаемся к родителю всех элементов, включая ul. Это сделано по той причине, что при создании новой Задачи, событие не будет на нём работать. 
function checkDataNumber(e) {
    // Из-за этого, было решено обратиться к родиелю всех элементов и сказать, что если клик произошёл на элементе, который содержит в себе данный класс, то произвести дейсвтие
    if (e.target.classList.contains('button-delete')) {
        // При клике проверяется data-number элемент
        const parentAttributeElement = e.target.closest('[data-number]');
        // После чего обращаемся к верхнему элементу и говорим, чтобы тот показывал только номер data-number без дополнительной информации
        const dataNumber = parentAttributeElement.dataset.number;

        deleteTask(dataNumber)
    }
}

function deleteTask(dataNumber) {
    const isConfirm = confirm('Точно удалить задачу?');
    if (true) {
        alert('Функционал ещё не реализован.');
    }
}
