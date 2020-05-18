const removeClassClicked = (triggersSelector, elementsSelector, checkedClass, nextSiblingRemoveClass) => {
    // При нажатии на triggersSelector будет проверяться,
    // содержит ли elementsSelector нужный checkedClass класс.
    // Если содержит скрипт активируется и записываем следующий по порядку элемент,
    // Удаляет проверяемый checkedClass у elementsSelector,
    // и удаляет ненужный nextSiblingRemoveClass класс у следующего элемента по порядку
    const triggers = document.querySelectorAll(triggersSelector) || null;
    const elements = document.querySelector(elementsSelector) || null;

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            if (elements.classList.contains(checkedClass)) {
                const getNextElement = elements.nextSibling;

                elements.classList.remove(checkedClass);
                getNextElement.classList.remove(nextSiblingRemoveClass);
            }
        });
    });
};

export default removeClassClicked;
