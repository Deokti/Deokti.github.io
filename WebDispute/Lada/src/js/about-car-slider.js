$('.about-slider__box').slick({
   infinite: true,
   speed: 500,
   fade: true,
   cssEase: 'linear',
   prevArrow: '<button class="arrow-slick arrow-slick_prev"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 18L10.75 10.5H19.75V7.5L10.75 7.5V0L0.25 9L10.75 18Z" fill="#E6F0F5"/></svg></button>',
   nextArrow: '<button class="arrow-slick arrow-slick_next"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 18L10.75 10.5H19.75V7.5L10.75 7.5V0L0.25 9L10.75 18Z" fill="#E6F0F5"/></svg></button>',
   responsive: [{
      breakpoint: 531,
      settings: {
          prevArrow: '<button class="arrow-slick arrow-slick_prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 7.4H9.20005V0.199997H6.80005V7.4H0.800049L8.00005 15.8L15.2 7.4Z" fill="#E6F0F5"/></svg></button>',
          nextArrow: '<button class="arrow-slick arrow-slick_next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 7.4H9.20005V0.199997H6.80005V7.4H0.800049L8.00005 15.8L15.2 7.4Z" fill="#E6F0F5"/></svg></button>',
      }
    }],
});
