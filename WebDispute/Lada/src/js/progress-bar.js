let progressBar = document.querySelector('.progress-bar .progress-bar__list');
window.addEventListener('scroll', () => {
    let pageY = window.pageYOffset;
    let pageWidth = screen.width;
    console.log(pageY);

    // Если скролл меньше 770, то добавляется класс Header
    if (pageY >= 0 && pageY < 491) {
        progressBar.classList.add('progress-bar__list_header');
    } else {
        progressBar.classList.remove('progress-bar__list_header');
    }

    // Если скролл меньше 1517, то добавляется класс About
    if (pageY > 491 && pageY < 1263) {
        progressBar.classList.add('progress-bar__list_about');
    }
    else {
        progressBar.classList.remove('progress-bar__list_about');
    }

     // Если скролл меньше 2000, то добавляется класс Gallery
    if (pageY > 1263 && pageY < 2053) {
        progressBar.classList.add('progress-bar__list_gallery');
    } else {
        progressBar.classList.remove('progress-bar__list_gallery');
    }

    // Если скролл меньше 2246, то добавляется класс Models
    if (pageY > 2053 && pageY < 2842) {
        progressBar.classList.add('progress-bar__list_models');
    } else {
        progressBar.classList.remove('progress-bar__list_models');
    }

    // Если скролл больше 3018, то добавляется класс Contacts
    if (pageY > 2842) {
        progressBar.classList.add('progress-bar__list_contacts');
    } else {
        progressBar.classList.remove('progress-bar__list_contacts');
    }


    if (pageWidth > 1800) {

        // Если скролл меньше 2246, то добавляется класс Models
        if (pageY > 2053 && pageY < 2500) {
            progressBar.classList.add('progress-bar__list_models');
        } else {
            progressBar.classList.remove('progress-bar__list_models');
        }

        // Если скролл больше 3018, то добавляется класс Contacts
        if (pageY > 2500) {
            progressBar.classList.add('progress-bar__list_contacts');
        } else {
            progressBar.classList.remove('progress-bar__list_contacts');
        }
    }
});