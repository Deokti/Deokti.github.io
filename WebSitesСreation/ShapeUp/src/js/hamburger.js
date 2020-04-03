function checkActiveClass(selectorNav, hamburger, checkClass, addActiveClass) {
    const nav = document.querySelector(selectorNav);

    if (hamburger.classList.contains(checkClass)) {
        nav.classList.add(addActiveClass);
    } else  nav.classList.remove(addActiveClass);
}

function addActiveClassHamburger(hamburderSelector, activeClass) {
    const hamburger = document.querySelector(hamburderSelector);

    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains(activeClass)) {
            hamburger.classList.remove(activeClass);
        } else hamburger.classList.add(activeClass);
        checkActiveClass('.header-nav', hamburger, activeClass, 'header-nav-tablet');
    });
}


addActiveClassHamburger('.hamburger', 'is-hamburger-active')


