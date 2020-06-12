import preloader from './scripts/js-code/preloader';

import sliderForLocationName from './scripts/slider/slider-for-location-name';
import appearanceElementsOnDate from './scripts/js-code/appearance-elements-on-date';
import learnWhichBrowserOpen from './scripts/js-code/add-class-based-browser';
import learnCurrentDate from './scripts/js-code/current-date';
import currentLocaiton from './scripts/js-code/current-location';
import sliderForWorldMap from './scripts/slider/slider-for-world-maps';
import smoothScrollingLink from './scripts/js-code/smooth-scrolling-link';

document.addEventListener('DOMContentLoaded', () => {
  smoothScrollingLink('.header-left__nav-item a[href]');
  smoothScrollingLink('.header__arrow-bottom');

  preloader({
    getBody: 'body',
    getPreloader: '.transition-loader',
    showSrollBar: 'show-sroll-bar',
  });

  learnCurrentDate();
  currentLocaiton();
  learnWhichBrowserOpen({
    itemsWhichAddClass: '.header-map',
    arrayBrowser: ['Opera', 'Chrome', 'Firefox', 'AnotherBrowser'],
    addClass: 'header-map-stroke',
  });

  sliderForLocationName();
  appearanceElementsOnDate({
    triggerSelectors: '.header__arrow',
    getSlickSlideFromActiveSlide: '.slick-slide.slick-active',
    dataAttribute: 'data-line-and-dots',
    classMaps: ['.header-map', 'header-map-active'],
    classForBottomLine: ['.header-right-line-item', 'active'],
    classDotsLocation: ['.dots-location', 'dots-location-active'],
    classNameLocation: ['.name-location', 'name-location-active'],
  });
  sliderForWorldMap();
});
