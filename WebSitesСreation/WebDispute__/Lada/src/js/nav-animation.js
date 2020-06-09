// Получение ссылок на первом экране лендинга
const navLinkAbout = document.querySelector('.header-content .header-content__link-about a[href="#about"]');
const navLinksGallery = document.querySelector('.header-content .header-content__menu a[href="#gallery"]')
const navLinksContacts = document.querySelector('.header-content .header-content__menu a[href="#contacts"]')

// Получение ссылок в габмургере
const mobileMenuAbout = document.querySelector('.mobile-menu__after-model a');
const mobileMenuPresentation = document.querySelector('.mobile-menu__link-presentation a')
const mobileMenuTest = document.querySelector('.mobile-menu__link-test a')

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

animationText('.mobile-menu__after-model', mobileMenuAbout); 
animationText('.mobile-menu__link-presentation', mobileMenuPresentation); 
animationText('.mobile-menu__link-test', mobileMenuTest); 


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