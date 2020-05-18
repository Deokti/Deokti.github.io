function smoothScroll(linksSelector) {
    const links = document.querySelectorAll(linksSelector);

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

export default smoothScroll;
