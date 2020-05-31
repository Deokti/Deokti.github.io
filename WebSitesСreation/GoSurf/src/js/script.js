import sliderForLocationName from './scripts/slider/slider-for-location-name';
import appearanceElementsOnDate from './scripts/js-code/appearance-elements-on-date';

document.addEventListener('DOMContentLoaded', () => {
  sliderForLocationName();
  appearanceElementsOnDate({
    triggerSelectors: '.header__arrow',
    getSlickSlideFromActiveSlide: '.slick-slide.slick-active',
    dataAttribute: 'data-line-and-dots',
    classMaps: '.header-map',
    classForBottomLine: '.header-right-line-item',
  });
});
