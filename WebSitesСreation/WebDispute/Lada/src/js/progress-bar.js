let progressBarOne = document.querySelector('.progress-bar .progress-bar__list');

function progressBar(pageY, less, more, element, addClass) {
    if (pageY >= less && pageY <= more) {
        element.classList.add(addClass);
    } else {
        element.classList.remove(addClass);
    }
}
    
window.addEventListener('scroll', () => {
    let pageY = window.pageYOffset;
    let pageWidth = screen.width;

    // Если скролл меньше 770, то добавляется класс Header
    progressBar(pageY, 0, 470, progressBarOne, 'progress-bar__list_header');

    // Если скролл меньше 1517, то добавляется класс About
    progressBar(pageY, 491, 1262, progressBarOne, 'progress-bar__list_about');

    // Если скролл меньше 2000, то добавляется класс Gallery
    progressBar(pageY, 1263, 2052, progressBarOne, 'progress-bar__list_gallery');

    // Если скролл меньше 2246, то добавляется класс Models
    progressBar(pageY, 2053, 2841, progressBarOne, 'progress-bar__list_models');

    // Если скролл больше 2842, добавляется класс Contacts
    progressBar(pageY, 2842, 3189, progressBarOne, 'progress-bar__list_contacts');


    // Если размер экрана больше 1800, то сработает это
    if (pageWidth > 1800) {
        progressBar(pageY, 2053, 2500, progressBarOne, 'progress-bar__list_models');
        progressBar(pageY, 2500, 3189, progressBarOne, 'progress-bar__list_contacts');
    }
});