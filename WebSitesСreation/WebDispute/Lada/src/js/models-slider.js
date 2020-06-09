$('.models-slider__inner').slick({
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    asNavFor: '.models-name',
    appendArrows: $('.models-wrapper__inner'),
    prevArrow: '<button class="arrow-models arrow-models_prev"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 18L10.75 10.5H19.75V7.5L10.75 7.5V0L0.25 9L10.75 18Z" fill="#E6F0F5"/></svg></button>',
    nextArrow: '<button class="arrow-models arrow-models_next"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 18L10.75 10.5H19.75V7.5L10.75 7.5V0L0.25 9L10.75 18Z" fill="#E6F0F5"/></svg></button>',
});
 $('.models-name').slick({
    infinite: true,
    arrows: false,
    speed: 500,
    fade: false,
    rtl: true,
    cssEase: 'linear',
    asNavFor: '.models-slider__inner'
 });