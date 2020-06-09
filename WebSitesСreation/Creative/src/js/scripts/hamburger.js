import mobileMenu from './nav-mobile';

const hamburder = (triggerSelector, addClass) => {
    const trigger = document.querySelector(triggerSelector);

    trigger.addEventListener('click', () => {
        if (!trigger.classList.contains(addClass)) {
            trigger.classList.add(addClass);
            mobileMenu('.header__nav-list', 'header__nav-mobile');
        } else {
            trigger.classList.remove(addClass);
            mobileMenu('.header__nav-list', 'header__nav-mobile');
        }
    });
};

export default hamburder;
