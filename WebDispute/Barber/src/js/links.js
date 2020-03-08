var desktopNavLinks = document.querySelectorAll('.navigations__links li a[href]');

for (let i = 0; i < desktopNavLinks.length; i++) {
    desktopNavLinks[i].addEventListener('click', function (event) {
        event.preventDefault();

        var hrefAttributeLink = desktopNavLinks[i].getAttribute('href');
        document.querySelector('' + hrefAttributeLink).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        closeHamburder();
    });
}

var openHamburger = document.querySelector('.navigations__hamburger');
var openMenu = document.querySelector('.navigations__mobile');

function closeHamburder() {
    openHamburger.classList.remove('navigations__hamburger_active');
    openMenu.classList.remove('navigations__mobile_active');
}