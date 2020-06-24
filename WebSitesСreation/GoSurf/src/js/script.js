import $ from 'jquery';
import preloader from './scripts/js-code/preloader';

import sliderForLocationName from './scripts/slider/slider-for-location-name';
import appearanceElementsOnDateAutoplay from './scripts/js-code/change-active-element-based-data-attribute-in-header';
import learnWhichBrowserOpen from './scripts/js-code/add-class-based-browser';
import learnCurrentDate from './scripts/js-code/current-date';
import currentLocaiton from './scripts/js-code/current-location';
import sliderForWorldMap from './scripts/slider/slider-for-world-maps';
import smoothScrollingLink from './scripts/js-code/smooth-scrolling-link';
import changeNameLocationBasedActiveSlide from './scripts/js-code/change-name-location-based-active-slide';
import sliderToSwitchShores from './scripts/slider/slider-to-switch-shores';
import changeElementBasedDataAttributeInTravelAutoplay from './scripts/js-code/change-element-based-data-attribute-in-travel';

import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {
  smoothScrollingLink('.header-left__nav-item a[href]');
  smoothScrollingLink('.header__arrow-bottom');

  // Прелоад
  preloader({
    getBody: 'body',
    getPreloader: '.sk-wave',
    hidePreload: 'sk-wave--none',
    showSrollBar: 'show-sroll-bar',
  });

  // Узнает текущую дату и изменяет её в левой части хедера
  learnCurrentDate();

  // Узнает город в котором находится пользователь
  // и передаписывает дефолтный город с левой стороне хедера
  currentLocaiton();

  // Узнает браузер и если тот IE11
  // не добавляет класс для активации анимации
  learnWhichBrowserOpen({
    itemsWhichAddClass: '.header-map',
    arrayBrowser: ['Opera', 'Chrome', 'Firefox', 'AnotherBrowser'],
    addClass: 'header-map-stroke',
  });

  // Слайдер для названия мест в хедере
  sliderForLocationName('.header-right-location-slider-container');

  // Активируется функция при каждом переключении слайдера,
  // в том числе при автоплее
  $('.header-right-location-slider-container').on('afterChange', (event, slick, currentSlide) => {
    appearanceElementsOnDateAutoplay({
      getSlickSlideFromActiveSlide: '.slick-slide.slick-active',
      dataAttribute: 'data-line-and-dots',
      classMaps: ['.header-map', 'header-map-active'],
      classForBottomLine: ['.header-right-line-item', 'active'],
      classDotsLocation: ['.dots-location', 'dots-location-active'],
      classNameLocation: ['.name-location', 'name-location-active'],
    });
  });

  // Слайдер во сторой секции SURF
  sliderForWorldMap('.surf-container-dots', '.surf-cards-items');
  // Код срабатывает в тот момент, когда переключается активно-текущий слайд
  $('.surf-cards-items').on('afterChange', () => {
    changeNameLocationBasedActiveSlide();
  });

  // Слайдер для переключения берега в секции Travel
  sliderToSwitchShores('.travel .subtitle-slider-container-shore');
  $('.travel .subtitle-slider-container-shore').on('beforeChange', () => {
    changeElementBasedDataAttributeInTravelAutoplay.beforeDepartupe();
  });
  $('.travel .subtitle-slider-container-shore').on('afterChange', () => {
    changeElementBasedDataAttributeInTravelAutoplay.afterDeparture();
  });
});
