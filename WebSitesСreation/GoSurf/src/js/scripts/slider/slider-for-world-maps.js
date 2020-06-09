import $ from 'jquery';
import 'slick-carousel';
// surf-container-dots


function sliderForWorldMap() {
  $('.surf-container-dots').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-cards-items',
    focusOnSelect: true,
  });

  $('.surf-cards-items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.surf-container-dots',
    nextArrow: ' <button class="arrow arrow-opacity surf__arrow surf__arrow-right"><svg fill="#fff" width="25" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M15.867 19.587l8.213-8.15a1.92 1.92 0 000-2.72L15.867.563a1.958 1.958 0 00-2.746 0 1.922 1.922 0 000 2.719l4.806 4.767H2.512a2.012 2.012 0 100 4.027h15.444l-4.835 4.792a1.92 1.92 0 000 2.718 1.953 1.953 0 002.746.002z" /></svg></button>',
    prevArrow: '<button class="arrow arrow-opacity arrow-left surf__arrow surf__arrow-left"><svg fill="#fff" width="25" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M15.867 19.587l8.213-8.15a1.92 1.92 0 000-2.72L15.867.563a1.958 1.958 0 00-2.746 0 1.922 1.922 0 000 2.719l4.806 4.767H2.512a2.012 2.012 0 100 4.027h15.444l-4.835 4.792a1.92 1.92 0 000 2.718 1.953 1.953 0 002.746.002z"></path></svg></button>',
  });
}

export default sliderForWorldMap;
