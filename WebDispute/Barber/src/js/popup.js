// Узнаем размер скролла 
function calcScroll() {
    // Создаём блок для использования
    var div = document.createElement('div');

    // И даём простые стили, чтобы он существовал,
    //после чего делаем его невидимым и уставляем в body
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    
    // Создаём переменную и высчитываем 
    var scrollWidth = div.offsetHeight - div.clientWidth;

    // Удаляем его над ненадобностью более
    div.remove();
    
    // Возвращаем полученное значение
    return scrollWidth;
}
function showModal(buttonSelector, modalSelector, overlaySelector, modifyOverlay) {
    var button = document.querySelectorAll(buttonSelector);
    var modal = document.querySelector(modalSelector);
    var overlay = document.querySelector(overlaySelector);
    var allInputs =  document.querySelectorAll('input');
    var scroll = calcScroll();


    
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function(event) {                
            event.preventDefault();

            modal.style.display = 'block';
            overlay.style.display = 'block';
            overlay.classList.add(modifyOverlay);

            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = scroll + 'px';
        });
    }
    overlay.addEventListener('click', function(event) {
        var overlayWhite = document.querySelector('.overlay_white')

        if (event.target === overlayWhite) {
            modal.style.display = 'none';
            overlay.style.display = 'none';
            overlay.classList.remove(modifyOverlay);

            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';

            for (let j = 0; j < allInputs.length; j++) {
                allInputs[j].value = '';
            }
        }
    });
} 
showModal('.button-show-popup', '.modal', '.overlay', 'overlay_white');

function closeModalThank(buttonSelector, popupSelector, overlaySelector, modifyOverlay) {
    var button = document.querySelector(buttonSelector);
    var popup = document.querySelector(popupSelector);
    var overlay = document.querySelector(overlaySelector);

    button.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        overlay.classList.remove(modifyOverlay);
    });
    
}
closeModalThank('.popup-thank-close', '.thank', '.overlay', 'overlay_black');
