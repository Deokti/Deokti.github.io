const navLinks = $All('.header__list li a[href*="#"]');
for (let navLink of navLinks) {
    navLink.addEventListener('click', event => {
        event.preventDefault();
        const hrefAttribute = navLink.getAttribute('href');
        document.querySelector('' + hrefAttribute).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });
}
