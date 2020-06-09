import forEachPolyfill from './polyfills/polyfill';
import hamburder from './scripts/hamburger';
import accordion from './scripts/accordion';
import removeClassClicked from './scripts/remove-class-clicked';
import tabs from './scripts/tabs';
import smoothScroll from './scripts/smooth-scroll';
import addClassScroll from './scripts/add-class-scroll';


document.addEventListener('DOMContentLoaded', () => {
    forEachPolyfill();
    hamburder('.hamburger', 'hamburger--active');
    accordion('.about-left__item', 'is-active', 'accordionTopToDown');
    removeClassClicked('.header__nav-link', '.header__nav-list', 'header__nav-mobile', 'hamburger--active');
    if (screen.width >= 500) tabs('.is-image-filter', '.image-filter', 'data-image-filter', 'is-none-filter');
    if (screen.width >= 500) tabs('.about-right__item', '.is-image-filter', 'data-image-filter', 'is-active', 'is-none-filter', 'accordionTopToDown');
    tabs('.portfolio-category-button', '.portfolio-content-list', 'data-portfolio', 'is-active-portfolio', 'is-active-portfolio-button');
    tabs('.clients-left-slider__item', '.clients-left-reviews-item', 'data-slider-rewiews', 'is-active-rewiews-item', 'is-rewiews-slider-active');
    smoothScroll('.header__nav-link');
    addClassScroll('.header', '#promo', 'header-animation-position-fixed', 'headerFixedAnimation');
});
