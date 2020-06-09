(function () {
    const imgAll = document.querySelectorAll('.gallery-right__img');
    const imgClose = document.querySelector('.gallery-full-page .close');
    
    // Перебраем элементы и при нажатии открывает ту картинку
    // чей дата артируб равен той, на которую нажали
    imgAll.forEach(img => {
        img.addEventListener('click', function ({target}) {
            let dataAttribute = target.getAttribute('data-full-page');
    
            document.querySelectorAll('.gallery-full-page ul li').forEach(removeImg => {
                removeImg.style.display = 'none';
            });
            document.querySelector('.gallery-full-page').style.display = 'block';
            document.querySelector(`.gallery-full-page ul li[data-full-page="${dataAttribute}"]`).style.display = 'block';
        });
    });
    
    // При нажатии на крестик, 
    // окно закрывается
    imgClose.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('.gallery-full-page').style.display = 'none';
    });
    
    // При нажатии на секурю облать 
    // окно закрывается
    document.querySelector('.gallery-full-page').addEventListener('click', ({target}) => {
        if (target.tagName === "DIV") {
            document.querySelector('.gallery-full-page').style.display = 'none';
        }
    });
})();