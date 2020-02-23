// Получение ссылок на первом экране лендинга
const navLinkAbout = document.querySelector('.header-content__menu a[href="#about"]');
const navLinksGallery = document.querySelector('.header-content__menu a[href="#gallery"]')
const navLinksContacts = document.querySelector('.header-content__menu a[href="#contacts"]')

// Получение ссылок в габмургере
const mobileMenuAbout = document.querySelector('.mobile-menu__link-about a[href="#about"]');
const mobileMenuPresentation = document.querySelector('.mobile-menu__link-gallery a[href="#gallery"]')
const mobileMenuTest = document.querySelector('.mobile-menu__link-contacts a[href="#contacts"]')

function animationText(hoverLink, linksItem) {
    const link = document.querySelector(hoverLink);
    const text = linksItem;
    const textContent = text.textContent;
    const textSplit = textContent.split('');

    link.addEventListener('mouseover', function () {
        text.textContent = '';

        let char = 0;
        let timer = setInterval(onTick, 50);

        textSplit.forEach(item => {
            text.innerHTML += `<span>${item}</span>`;
        });

        function onTick() {
            const span = text.querySelectorAll('span')[char];
            span.classList.add('fade')
            char++;
            if (char === textSplit.length) {
                clearInterval(timer);
                timer = null;
            }
        }
    });
    link.addEventListener('mouseout', function () {
        text.textContent = '';
        let char = 0;
        let timer = setInterval(onTick, 50);

        textSplit.forEach(item => {
            text.innerHTML += `<span>${item}</span>`;
        });
        function onTick() {
            const span = text.querySelectorAll('span')[char];
            span.classList.add('show')
            char++;
            if (char === textSplit.length) {
                clearInterval(timer);
                timer = null;
            }
        }
    });
};
animationText('.header-content__link-about', navLinkAbout);
animationText('.header-content__link-gallery', navLinksGallery);
animationText('.header-content__link-contacts', navLinksContacts);

animationText('.mobile-menu__link-about', mobileMenuAbout); 
animationText('.mobile-menu__link-gallery', mobileMenuPresentation); 
animationText('.mobile-menu__link-contacts', mobileMenuTest); 


const VastaSports = document.querySelector('.header__main-title');

// Анимация, которая происходит 
// при загрузке. Она происходит 
// с Vesta Sports
function animationMainTitle(hoverLink) {
    const text = hoverLink;
    const textContent = text.textContent;
    const textSplit = textContent.split('');

    text.textContent = '';

    let char = 0;
    let timer = setInterval(onTick, 50);

    textSplit.forEach(item => {
        text.innerHTML += `<span>${item}</span>`;
    });

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade')
        char++;
        if (char === textSplit.length) {
            clearInterval(timer);
            timer = null;
        }
    }
}
animationMainTitle(VastaSports);