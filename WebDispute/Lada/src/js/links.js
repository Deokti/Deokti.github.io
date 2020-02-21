(function () {
    const navLinks = document.querySelectorAll('.header-content__menu li a[href*="#"]');
    navLinks.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const hrefAttributeLink = item.getAttribute('href');
            document.querySelector('' + hrefAttributeLink).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });

    const mobileArrow = document.querySelector('.mobile-arrow');
    mobileArrow.addEventListener('click', event => {
        event.preventDefault();
        const hrefAttributeLink = mobileArrow.getAttribute('href');
        document.querySelector('' + hrefAttributeLink).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    })
})();
