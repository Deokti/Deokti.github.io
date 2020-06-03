import sliderForLocationName from './scripts/slider/slider-for-location-name';
import appearanceElementsOnDate from './scripts/js-code/appearance-elements-on-date';
import learnWhichBrowserOpen from './scripts/js-code/add-class-based-browser';
import learnCurrentDate from './scripts/js-code/current-date';
import currentLocaiton from './scripts/js-code/current-location';

document.addEventListener('DOMContentLoaded', () => {
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
    classMaps: '.header-map',
    classForBottomLine: '.header-right-line-item',
    classDotsLocation: '.dots-location',
    classNameLocation: '.name-location',
  });
});
