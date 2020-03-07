const desktopNavLinks = document.querySelectorAll('.navigations__links li a[href]');
desktopNavLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const hrefAttributeLink = link.getAttribute('href');
        document.querySelector('' + hrefAttributeLink).scrollIntoView({
            behavior: 'smooth',
            block: 'start',

        });
        closeHamburder();
    });
});

const openHamburger = document.querySelector('.navigations__hamburger');
const openMenu = document.querySelector('.navigations__mobile');

function closeHamburder() {
    openHamburger.classList.remove('navigations__hamburger_active')
    openMenu.classList.remove('navigations__mobile_active');
}