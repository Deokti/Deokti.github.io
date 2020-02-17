function $(target) {
    return document.querySelector(target);    
}
 function $All(target) {
     return document.querySelectorAll(target);    
}


function changeVideoClick() {
    let mainVideo = $('.media-video__main iframe');
    let AllVideoLinks = document.querySelectorAll('.media-video__link a');
    
    // Перебираем все ссылки, получаем их href 
    // после чего заменяем главное видео исходя из одной из полученных ссылок
    AllVideoLinks.forEach(event => {
        event.addEventListener('click', function(link) {
            link.preventDefault();
            let getHref = this.href
            mainVideo.src = `${getHref}`;
        });
    });

}
changeVideoClick();
const mediaGalleryImg = $All('.media-gallery__img');
const mediaGalleryClose = $All('.media-tabs__close');

mediaGalleryImg.forEach(event => {
    event.addEventListener('click', function({target}) {
        let dataAttribute = target.getAttribute('data-gallery')
        
        $All('.media-tabs__item').forEach(iteration => {
            iteration.style.display = 'none';
        });
        $('.media-tabs').style.display = 'block';
        $(`.media-tabs__item[data-gallery="${dataAttribute}"]`).style.display = 'block';
    });
});

mediaGalleryClose.forEach(event => {
    event.addEventListener('click', () => $('.media-tabs').style.display = 'none');
});

// (function() {
//     let amount = document.querySelector('.buy-popup__price');
//     const plus = document.querySelector('.buy-popup__plus');
//     const minus = document.querySelector('.buy-popup__minus');
//     let finallyPrice = document.querySelector('.buy-popup__final-price');
//     let sum = 120;

//     let mountInner = Number(amount.textContent);
//     plus.addEventListener('click', event => {
//         amount.textContent++
//         let sum2 = mountInner++ * sum;
//         finallyPrice.innerHTML = `${sum2 + 120}$`;
//     });
//     minus.addEventListener('click', event => {
//         if (amount.textContent >= 1) {
//             amount.textContent--;
//             let sum2 = mountInner-- * sum;
//             console.log(sum2);
//             finallyPrice.innerHTML = `${sum2 - 120}$`;
//         }
//     });
// })();


// // Функция отвечает за показ и удаление стрелочки 
// function showArrowTop() {
//     // Обращение к элементу
//     const arrowTop = $('.arrow-top');

//     // Узнаёт позицию элемент относительно размера экрана вертикально 
//     const arrowTopPosition = arrowTop.getBoundingClientRect().top;
    
//     // Узнаём высоту области просмотра окна браузера
//     const windowHeightPosition = window.innerHeight;
    
//     // Если позиция элемента меньше высоты просмотра браузера, 
//     // делённую на четыре, - то добавлять класс. Иначе удалять. 
//     if (arrowTopPosition < windowHeightPosition / 4) {
//         arrowTop.classList.add('arrow-top_show');
//     } else {
//         arrowTop.classList.remove('arrow-top_show');
//     }
// }
// window.addEventListener('scroll', showArrowTop);

