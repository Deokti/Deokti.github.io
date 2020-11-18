import behaviorHamburgerOnClick from './scripts/hamburger';
import initSlider from './scripts/init-slider';
import guaranteeSlider from './scripts/guarantee-slider';

document.addEventListener('DOMContentLoaded', () => {
  behaviorHamburgerOnClick();
  initSlider('.feedback-slider');
  guaranteeSlider('.guarantee-top-slider');
  guaranteeSlider('.guarantee-bottom-slider');
});
