const showPopupOne = document.querySelectorAll('.show-popup-one');
const showPopupTwo = document.querySelectorAll('.show-popup-two');

// Открытие попапа
function showPopup(buttons, overlay, popup) {
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(overlay).style.display = 'block';
            document.querySelector(popup).style.display = 'block';
        });
    });
}
showPopup(showPopupOne, '.overlay', '.popup_one');
showPopup(showPopupTwo, '.overlay', '.popup_two');


// Закрытие попапа
const closePopup = document.querySelectorAll('.popup_close');

function hidePopup(buttons, overlay) {
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(overlay).style.display = 'none';
        });
    });
}
hidePopup(closePopup, '.overlay');


// Преход на другой сайт
const testDrive = document.querySelectorAll('.button-get-sites');

function goAnotherSite(buttons, overlay, link) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.open(link, "_blank");
            document.querySelector(overlay).style.display = 'none';
        });
    });
}
goAnotherSite(testDrive, '.overlay', 'https://www.lada.ru/test-drive/');

