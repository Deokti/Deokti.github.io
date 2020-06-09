// Закрытие попапа
const closePopup = document.querySelectorAll('.popup_close');
function hidePopup(buttons, overlay, popupOne, popupTwo) {
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(overlay).style.display = 'none';
            document.querySelector(popupOne).style.display = 'none';
            document.querySelector(popupTwo).style.display = 'none';
        });
    });
}
hidePopup(closePopup, '.overlay', '.popup_one', '.popup_two');


// Перенаправление на другой сайт 
// при нажатии на один из элементов 
// в верзнем меню
const isAnotherSites = document.querySelectorAll('.get-link-sites a');
const buttonTrue = document.querySelectorAll('.button_true');
let href;

function goAnotherSite(links) {
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            href = link.href;
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.popup_one').style.display = 'block';
            if (buttonTrue) {
                buttonTrue.forEach(isTrue => {
                    isTrue.addEventListener('click', () => {
                        window.open(href, "_blank");
                        document.querySelector('.popup_one').style.display = 'none';
                        document.querySelector('.overlay').style.display = 'none';
                    });
                });
            }
        });
    });
}
goAnotherSite(isAnotherSites);


// При открытии нажатии на кнопку, открыается второй попап.
// Ссылка привязана к классу, так что стоит быть осторорожным
const showPopupTwo = document.querySelectorAll('.show-popup-two');
const isGetDriver = document.querySelector('.get-sites-driver');
showPopupTwo.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.popup_two').style.display = 'block';
        if (isGetDriver) {
            isGetDriver.addEventListener('click', () => {
                window.open('https://www.lada.ru/test-drive/', "_blank");
                document.querySelector('.popup_two').style.display = 'none';
                document.querySelector('.overlay').style.display = 'none';
            });
        }
    });
});

