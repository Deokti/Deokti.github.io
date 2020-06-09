const tabs = (
    triggersSelector,
    content,
    dataAttribute,
    addClassActive,
    triggerClassAdd = null,
    animationClassAdd = null,
) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const imageFilterContent = document.querySelectorAll(content);

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', function () {
            const data = this.getAttribute(dataAttribute);

            imageFilterContent.forEach((classRemove) => classRemove.classList.remove(addClassActive));
            document.querySelector(`${content}[${dataAttribute}="${data}"]`).classList.add(addClassActive);

            if (triggerClassAdd) {
                triggers.forEach((triggerClassRemove) => triggerClassRemove.classList.remove(triggerClassAdd));
                this.classList.add(triggerClassAdd);
            }

            if (animationClassAdd) {
                imageFilterContent.forEach((classRemove) => classRemove.lastChild.classList.remove(animationClassAdd));
                document.querySelector(`${content}[${dataAttribute}="${data}"]`).lastChild.classList.add(animationClassAdd);
            }
        });
    });
};
export default tabs;
