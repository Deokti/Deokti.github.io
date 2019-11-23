$(window).load(function () {

    //-----табы на секции comment-----
    $('ul.comment__tabs').on('click', 'li:not(.comment__tab_active)', function () {
        $(this)
            .addClass('comment__tab_active').siblings().removeClass('comment__tab_active')
            .closest('div.comment__block').find('div.comment__inner').removeClass('comment__inner_active').eq($(this).index()).addClass('comment__inner_active');
    });
    //-----/табы на секции comment-----



    //-----СЛАЙДЕР НА СЕКЦИИ comment-----

    //первый 
    const slider = tns({
        container: '.comment__inner',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        responsive: {
            200: {
                items: 1
            },
            320: {
                items: 1,
            },
            650: {
                items: 1
            },
            651: {
                items: 2
            },
            700: {
              items: 2
            },
            701: {
                items: 2,
              },
            1100: {
                items: 3
            }, 
          }
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
        slider.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
        slider.goTo('next');
        });

    //второй 
    const sliderTwo = tns({
        container: '.comment__inner_two',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        responsive: {
            200: {
                items: 1
            },
            320: {
                items: 1,
            },
            650: {
                items: 1
            },
            651: {
                items: 2
            },
            700: {
              items: 2
            },
            701: {
                items: 2,
              },
            1100: {
                items: 3
            },
          }
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderTwo.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderTwo.goTo('next');
        });

    //третий 
    const sliderThree = tns({
        container: '.comment__inner_three',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        responsive: {
            200: {
                items: 1
            },
            320: {
                items: 1,
            },
            650: {
                items: 1
            },
            651: {
                items: 2
            },
            700: {
              items: 2
            },
            701: {
                items: 2,
              },
            1100: {
                items: 3
            },
          }
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderThree.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderThree.goTo('next');
        });

    //четвёртый
    const sliderFour = tns({
        container: '.comment__inner_four',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        responsive: {
            200: {
                items: 1
            },
            320: {
                items: 1,
            },
            650: {
                items: 1
            },
            651: {
                items: 2
            },
            700: {
              items: 2
            },
            701: {
                items: 2,
              },
            1100: {
                items: 3
            },
          }
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderFour.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderFour.goTo('next');
        });

    //пятый
    const sliderFive = tns({
        container: '.comment__inner_five',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        responsive: {
            200: {
                items: 1
            },
            320: {
                items: 1,
            },
            650: {
                items: 1
            },
            651: {
                items: 2
            },
            700: {
              items: 2
            },
            701: {
                items: 2,
              },
            1100: {
                items: 3
            },
          }
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderFive.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderFive.goTo('next');
        });

    //шестой 
    const sliderSix = tns({
        container: '.comment__inner_six',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        responsive: {
            200: {
                items: 1
            },
            320: {
                items: 1,
            },
            650: {
                items: 1
            },
            651: {
                items: 2
            },
            700: {
              items: 2
            },
            701: {
                items: 2,
              },
            1100: {
                items: 3
            },
          }
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderSix.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderSix.goTo('next');
        });

    //------/СЛАЙДЕР НА СЕКЦИИ comment------


    //------СЛАЙДЕР НА СЕКЦИИ partner------
    const sliderPartner = tns({
        container: '.partner__inner',
        items: 4,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        responsive: {
            200: {
                items: 1
            },
            320: {
                items: 1,
            },
            550: {
                items: 2,
            },
            650: {
                items: 2
            },
            750: {
              items: 2
            },
            751: {
                items: 3,
              },
            1100: {
                items: 4
            }, 
          }
        });
        document.querySelector('.arrow-left__partner').addEventListener('click', function() {
            sliderPartner.goTo('prev');
        });
        document.querySelector('.arrow-right__partner').addEventListener('click', function() {
            sliderPartner.goTo('next');
        });
    //------/СЛАЙДЕР НА СЕКЦИИ partner------

    //-----табы на секции tariff-----
    $('ul.tariff-block__tabs').on('click', 'li:not(.tariff-block__tab_active)', function () {
        $(this)
            .addClass('tariff-block__tab_active').siblings().removeClass('tariff-block__tab_active')
            .closest('div.tariff-block').find('div.tariff-block__inner').removeClass('tariff-block__inner_active').eq($(this).index()).addClass('tariff-block__inner_active');
    });
    //-----/табы на секции tariff-----

    //--------------------------------------------МОДАЛЬНЫЕ ОКНА----------------------------

    //окно, которое появляется при нажатии на текст в секции под названием "Услуги предоставляемые..."
    $('[data-modal=oral-consultation]').on('click', function() {
        $('.overlay, .detailed-information__provide-service').fadeIn('slow');
    }); 
    
    //окно, которое открывается при нажатии на кнопку, с данным атбрибутом
    $('[data-modal=callback]').on('click', function() {
        $('.overlay, .we-contact').fadeIn('slow');
    });

    $('[data-modal=question-consultation]').on('click', function() {
        $('.overlay, .write-letter').fadeIn('slow');
    });

    //при нажатии на кнопу закрыть в модальном окне, оно закрывается
    $('.detailed-information__close, .we-contact__close, .write-letter__close').on('click', function() {
        $('.overlay, .write-letter, .we-contact, .detailed-information__provide-service').fadeOut('slow');
    });
   

    //--------------------------------------------Якоря----------------------------
    $('.nav-link__render-service').on('click', function (r) {
        r.preventDefault();
        $('html, body').animate({
          scrollTop: $('render-service').height() + 2000}, 'slow');
      });

      $('.nav-link__advantage').on('click', function (r) {
        r.preventDefault();
        $('html, body').animate({
          scrollTop: $('advantage').height() + 2000 + 520}, 'slow');
      });

      $('.nav-link__comment').on('click', function (r) {
        r.preventDefault();
        $('html, body').animate({
          scrollTop: $('comment').height() + 2000 + 520 + 646 + 500}, 'slow');
      });

      $('.nav-link__partner').on('click', function (r) {
        r.preventDefault();
        $('html, body').animate({
          scrollTop: $('partner').height() + 2000 + 520 + 646 + 500 + 730}, 'slow');
      });

      $('.nav-link__tariff').on('click', function (r) {
        r.preventDefault();
        $('html, body').animate({
          scrollTop: $('tariff').height() + 2000 + 520 + 646 + 500 + 730 + 530}, 'slow');
      });

      $('.nav-link__contacts').on('click', function (r) {
        r.preventDefault();
        $('html, body').animate({
          scrollTop: $('contacts').height() + 6646}, 'slow');
      });

      //кнопка, которая позазывается при пролистовании
       //следит за тем, сколько пикеселей ушло вверх. При скроле 1700 пикселей появляется кнопка. Если меньше, она пропадает
       $(window).scroll(function () {
        if ($(this).scrollTop() > 1700) {
          $('.arrow-top').fadeIn('slow');
        } else {
          $('.arrow-top').fadeOut('slow');
        }
      });

      //при нажатии на кнопку стринца возвращается на первый экран. 
      $('.arrow-top').click(function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        });
      });
});

