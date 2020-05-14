import forEachPolyfill from './polyfills/polyfill';
import hamburder from './hamburger';

document.addEventListener('DOMContentLoaded', () => {
    forEachPolyfill();
    hamburder('.hamburger', 'hamburger--active');
});
