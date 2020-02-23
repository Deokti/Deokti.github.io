(function () {
    // Вкладки в большом разрешении экрана на первом экране
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

    // Стрелочка, которая появляется в мобильной версиии
    const mobileArrow = document.querySelector('.mobile-arrow');
    mobileArrow.addEventListener('click', event => {
        event.preventDefault();
        const hrefAttributeLink = mobileArrow.getAttribute('href');
        document.querySelector('' + hrefAttributeLink).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    })

    // Меню, находящееся с правой верхней стороны, 
    // которое появляется при скролле до второй секции
    const mobileNavLinks = document.querySelectorAll('.mobile-menu li a[href*="#"]');
    mobileNavLinks.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const hrefAttributeLink = item.getAttribute('href');
            document.querySelector('' + hrefAttributeLink).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });
})();

window.addEventListener('load', function() {
    // Ссылка в последней секции,
    // которая отправляем вверх
    const clickHeightTop = document.querySelector('.arrow-top');
    let scrolled;
    let timerScrolled;

    clickHeightTop.addEventListener('click', event => {
        scrolled = window.pageYOffset;
        scrollToTop();
    });
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled -= 50;
            timerScrolled = setTimeout(scrollToTop, 1);
        } else {
            clearTimeout(timerScrolled);
            window.scrollTo(0, 0);
        }
    }
});
