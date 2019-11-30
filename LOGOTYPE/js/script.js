$(window).load(function() {
    //----------слайдер в promo
    $('.promo').vegas({
        slides: [
            { src: 'img/promo/one-bg.jpg' },
            { src: 'img/promo/two-bg.jpg' },
        ],
        autoplay: false,
        cover: true,
        transitionDuration: 700,        
        preloadImage: true,
        transition: 'fade'
    });
    
    //перелистывает вперёд
    $('[data-modal=next]').on('click', function () {
        $('.promo').vegas('next');
    });

    //перелистывает нащал
    $('[data-modal=previous]').on('click', function () {
        $('.promo').vegas('previous');
    });
    //----------/.слайдер в promo


    //---------Анимация изменения стрелочки в секции conlustate



    //при нажатии добавляется модификатор на consultate-right
    $('.consultate-theme__select_checked').on('click', function(e) {
        e.preventDefault();
        $('.consultate-theme').toggleClass('consultate-theme_checked');
    })
   
    //отлавливаем нахождение (нажатие на кнопку) мыши в документе
    $(document).mouseup(function (e){ 
        e.preventDefault();
        //обращение к нужному классу
        let checked = $('.consultate-theme'); 
        //если клик случился не по элементу, указанному выше (родителю)
        if (!checked.is(e.target) 
        // и не по элементам, которые ниже (дочерние)
            && checked.has(e.target).length === 0) { 
                //то с удаляем класс с модицикатором
                $('.consultate-theme').removeClass('consultate-theme_checked')
        }
    });
    //---------/.Анимация изменения стрелочки в секции conlustate


    //---------Слайдер в секции Новости Компании (EVENT-COMPANY)
    let slider = tns({
        container: '.event-company__left-slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        speed: 700,
        nav: false,
        controls: false,
      });
      document.querySelector('.arrow-left_event-company').onclick = function () {
        slider.goTo('prev');
      };
      document.querySelector('.arrow-right_event-company').onclick = function () {
        slider.goTo('next');
      };
      //---------/.Слайдер в секции Новости Компании (EVENT-COMPANY)

});

