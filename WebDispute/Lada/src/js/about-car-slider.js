$('.about-slider__box').slick({
   infinite: true,
   speed: 500,
   fade: true,
   cssEase: 'linear',
   prevArrow: '<button class="arrow-slick arrow-slick_prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 6.25V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V6.25C26.25 5.58696 25.9866 4.95107 25.5178 4.48223C25.0489 4.01339 24.413 3.75 23.75 3.75H6.25C5.58696 3.75 4.95107 4.01339 4.48223 4.48223C4.01339 4.95107 3.75 5.58696 3.75 6.25ZM8.75 13.75H15V8.75L21.25 15L15 21.25V16.25H8.75V13.75Z" fill="#E6F0F5"/></svg></button>',
   nextArrow: '<button class="arrow-slick arrow-slick_next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 6.25V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V6.25C26.25 5.58696 25.9866 4.95107 25.5178 4.48223C25.0489 4.01339 24.413 3.75 23.75 3.75H6.25C5.58696 3.75 4.95107 4.01339 4.48223 4.48223C4.01339 4.95107 3.75 5.58696 3.75 6.25ZM8.75 13.75H15V8.75L21.25 15L15 21.25V16.25H8.75V13.75Z" fill="#E6F0F5"/></svg></button>',
   responsive: [{
      breakpoint: 531,
      settings: {
          prevArrow: '<button class="arrow-slick arrow-slick_prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 7.4H9.20005V0.199997H6.80005V7.4H0.800049L8.00005 15.8L15.2 7.4Z" fill="#E6F0F5"/></svg></button>',
          nextArrow: '<button class="arrow-slick arrow-slick_next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 7.4H9.20005V0.199997H6.80005V7.4H0.800049L8.00005 15.8L15.2 7.4Z" fill="#E6F0F5"/></svg></button>',
      }

    }],
});
