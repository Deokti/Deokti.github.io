const desktopNavLinks = document.querySelectorAll('.navigations__links li a[href]');
desktopNavLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const hrefAttributeLink = link.getAttribute('href');
        document.querySelector('' + hrefAttributeLink).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
