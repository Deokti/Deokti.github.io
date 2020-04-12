function checkActiveClass(selectorNav, hamburger, checkClass, addActiveClass) {
    const nav = document.querySelector(selectorNav);

    if (hamburger.classList.contains(checkClass)) {
        nav.classList.add(addActiveClass);
    } else nav.classList.remove(addActiveClass);
}


function smoothScrollingToAnchor(links) {
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const toHref = link.getAttribute('href');
            document.querySelector(`${toHref}`).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });
}


function clickHamburgetLinkOvarlayClose(navigationsSelector) {
    const navigations = document.querySelectorAll(navigationsSelector);
    smoothScrollingToAnchor(navigations);

    navigations.forEach((navigation) => {
        navigation.addEventListener('click', () => {

            document.querySelector('.header-nav').classList.remove('header-nav-tablet');
            document.querySelector('.hamburger').classList.remove('is-hamburger-active');
        });
    });
}
clickHamburgetLinkOvarlayClose('.header-nav__link a[href*="#"]');


function addActiveClassHamburger(hamburderSelector, activeClass) {
    const hamburger = document.querySelector(hamburderSelector);

    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains(activeClass)) {
            hamburger.classList.remove(activeClass);
        } else hamburger.classList.add(activeClass);
        checkActiveClass('.header-nav', hamburger, activeClass, 'header-nav-tablet');
    });
}
addActiveClassHamburger('.hamburger', 'is-hamburger-active');