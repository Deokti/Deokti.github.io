const accordion = (triggerSelector, stateActiveClass, animationClassForChild) => {
    const triggers = document.querySelectorAll(triggerSelector);

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', function () {
            triggers.forEach((removeClasses) => {
                removeClasses.classList.remove(stateActiveClass);
                removeClasses.lastChild.classList.remove(animationClassForChild);
            });

            this.classList.add(stateActiveClass);
            this.lastChild.classList.add(animationClassForChild);
        });
    });
};
export default accordion;
