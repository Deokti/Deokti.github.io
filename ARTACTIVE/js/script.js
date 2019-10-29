$(document).ready(function(){
    $('.service__carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,

        prevArrow: '<button type="button" class="arrow__left"><img src="img/arrow/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="arrow__right"><img src="img/arrow/arrow-right.svg" alt="arrow right"></button>',
      });
});

