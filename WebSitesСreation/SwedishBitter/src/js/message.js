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
