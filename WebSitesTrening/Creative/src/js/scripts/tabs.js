const tabs = (triggersSelector, content, dataAttribute, addClassActive) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const imageFilterContent = document.querySelectorAll(content);

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', function () {
            const data = this.getAttribute(dataAttribute);

            imageFilterContent.forEach((classRemove) => classRemove.classList.remove(addClassActive));
            document.querySelector(`${content}[${dataAttribute}="${data}"]`).classList.add(addClassActive);
        });
    });
};
export default tabs;
