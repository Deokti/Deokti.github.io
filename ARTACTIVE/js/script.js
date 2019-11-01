$(document).ready(function(){
    $('.service-one__carousel, .comment__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,

        prevArrow: '<button type="button" class="arrow__left"><img src="img/arrow/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="arrow__right"><img src="img/arrow/arrow-right.svg" alt="arrow right"></button>',
      });


      //---------------------------------МОДАЛЬНЫЕ ОКНА---------------------------------

      //Обращаетмся к дата модал и говорим, что при нажатии на кнопку, у которой есть данный "класс" происходит открытие модального окна и тёмной завесы
      $('[data-modal=press-buttons]').on('click', function () {
        $('.overlay, .modal').fadeIn('slow');
      });
      
      $('.modal__close').on('click', function () {
        $('.overlay, .modal').fadeOut('slow');
      });


      //---------------------------------КНОПКА ВОЗВРАЩЕНИЯ ВВЕРХ---------------------------------
      
      //следит за тем, сколько пикеселей ушло вверх. При скроле 1700 пикселей появляется кнопка. Если меньше, она пропадает
      $(window).scroll(function () {
        if ($(this).scrollTop() > 1700) {
          $('.press-up').fadeIn('slow');
        } else {
          $('.press-up').fadeOut('slow');
        }
      });

      //при нажатии на кнопку стринца возвращается на первый экран. 
      $('.press-up').click(function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        });
    });

    //ПРИ НАЖАТИИ НА КАРТИНКУ МЕДЛЕННО СКРОЛИТСЯ НА СЛЕДУЮУЩЮ СЕКЦИЮ

    //при нажатии на картинку, происходит функция
    $('.mouse-down').on('click', function () {
      //обращение к html и body, происходит анимация
      $('html, body').animate( {
        //скроллинг вниз на определённое расстояние. Затем говорится, что это должно делаться медленно
        scrollTop: $('header').height() + 205}, 'slow');
    });

});


