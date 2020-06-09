function $(target) {
    return document.querySelector(target);    
}
 function $All(target) {
     return document.querySelectorAll(target);    
}

const navLinks = $All('.header__list li a[href*="#"]');
for (let navLink of navLinks) {
    navLink.addEventListener('click', event => {
        event.preventDefault();
        const hrefAttribute = navLink.getAttribute('href');
        document.querySelector('' + hrefAttribute).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });
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
        $('.about-news').style.zIndex = '0';
        $('.media-tabs').style.display = 'block';
        $(`.media-tabs__item[data-gallery="${dataAttribute}"]`).style.display = 'block';
    });
});

mediaGalleryClose.forEach(event => {
    event.addEventListener('click', () => {
        $('.about-news').style.zIndex = '40';
        $('.media-tabs').style.display = 'none';  
    });
});
$('.media-tabs').addEventListener('click', ({target}) => {
    if (target.tagName === "LI") {
        $('.about-news').style.zIndex = '40';
        $('.media-tabs').style.display = 'none';  
    }
      
});

const buttonCalculate = $All('.button_buy');
const calculateItemClose = $All('.calculate-item__close');

buttonCalculate.forEach(event => {
    event.addEventListener('click', function ({target}) {
        let dataAttribute = target.getAttribute('data-calculate');
        
        $All('.calculate-item').forEach(del => {
            del.style.display = 'none';
        });
        $(`.calculate-item[data-calculate="${dataAttribute}"]`).style.display = 'block';
        
    });
});

calculateItemClose.forEach(event => {
    event.addEventListener('click', function() {
        $All('.calculate-item').forEach(del => {
            del.style.display = 'none';
        });
    });
});


function calculate() {
    /* SIMPLE */
    let amountSimle = $('.calculate-item_london-dekstop .calculate-item__number');
    const plusSimple = $('.calculate-item_london-dekstop .plus_simple');
    const minusSimple = $('.calculate-item_london-dekstop .minus_simple');
    /* SIMPLE */
    /* VIP */
    let amountVip = $('.calculate-item_london-dekstop .calculate-item__number_vip');
    const plusVip = $('.calculate-item_london-dekstop .plus_vip');
    const minusVip = $('.calculate-item_london-dekstop .minus_vip');
    console.log(plusVip, minusVip, amountVip)
    /* VIP */

    let finallyPrice = $('.calculate-item_london-dekstop .calculate-item__price');

    plusSimple.addEventListener('click', event => {
        if (amountSimle.textContent < 10) {
            amountSimle.textContent;
            let sumOne = amountSimle.textContent++ * 70;
            finallyPrice.textContent = `${sumOne + 70}$`;
        }
    });
    minusSimple.addEventListener('click', event => {
        if (amountSimle.textContent > 0) {
            amountSimle.textContent;
            let sumOne = amountSimle.textContent-- * 70;
            finallyPrice.textContent = `${sumOne - 70}$`;
        }
    });
    plusVip.addEventListener('click', event => {
        if (amountVip.textContent < 10) {
            amountVip.textContent;
            let sumTwo = amountVip.textContent++ * 143.5;
            finallyPrice.textContent = `${sumTwo + 143.5}$`;
        }
    });
    minusVip.addEventListener('click', event => {
        if (amountVip.textContent > 0) {
            amountVip.textContent;
            let sumTwo = amountVip.textContent-- * 143.5;
            finallyPrice.textContent = `${sumTwo - 143.5}$`;
        }
    });
}
calculate();

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

