function addClassScroll(selectorElement, scrollToElement, addClass, addAnimation) {
    const element = document.querySelector(selectorElement);
    const getScrollToElement = document.querySelector(scrollToElement).scrollHeight;

    function addedAndRemoveClasses(currentElement, currentEvent, addedClass, removeClass) {
        const eventObject = {
            add: 'add',
            remove: 'remove',
        };
        currentElement.classList[eventObject[currentEvent]](addedClass, removeClass);
    }


    document.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        if (!addAnimation) {
            if (scrolled >= getScrollToElement) element.classList.add(addClass);
            else element.classList.remove(addClass);
        }

        if (addAnimation) {
            if (scrolled >= getScrollToElement) addedAndRemoveClasses(element, 'add', addClass, addAnimation);
            else if (scrolled < getScrollToElement) addedAndRemoveClasses(element, 'remove', addClass, addAnimation);
        }
    });
}

export default addClassScroll;
