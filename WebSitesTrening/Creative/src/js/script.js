import forEachPolyfill from './polyfills/polyfill';
import hamburder from './scripts/hamburger';
import accordion from './scripts/accordion';
import removeClassClicked from './scripts/remove-class-clicked';
import tabs from './scripts/tabs';
import smoothScroll from './scripts/smooth-scroll';

document.addEventListener('DOMContentLoaded', () => {
    forEachPolyfill();
    hamburder('.hamburger', 'hamburger--active');
    accordion('.about-left__item', 'is-active', 'accordionTopToDown');
    removeClassClicked('.header__nav-link', '.header__nav-list', 'header__nav-mobile', 'hamburger--active');
    if (screen.width >= 500) tabs('.is-image-filter', '.image-filter', 'data-image-filter', 'is-none-filter');
    smoothScroll('.header__nav-link');
});
