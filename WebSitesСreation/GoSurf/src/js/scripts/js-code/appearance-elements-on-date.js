// import '../../polyfills/classList';
import 'classlist-polyfill';

const appearanceElementsOnDate = ({
  triggerSelectors,
  getSlickSlideFromActiveSlide = '.slick-slide.slick-active',
  dataAttribute,
  classMaps,
  classForBottomLine,
  classDotsLocation,
  classNameLocation,
} = {}) => {
  const triggers = document.querySelectorAll(triggerSelectors);
  const maps = document.querySelectorAll(classMaps);
  const bottomLine = document.querySelectorAll(classForBottomLine);

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const subtitle = document.querySelectorAll(getSlickSlideFromActiveSlide)[0].childNodes[0].childNodes[0];
      const subtitleData = subtitle.getAttribute(dataAttribute);
      const dotsLocation = document.querySelectorAll(classDotsLocation);
      const nameLocation = document.querySelectorAll(classNameLocation);

      maps.forEach((map) => map.style.display = 'none');
      bottomLine.forEach((line) => line.classList.remove('active'));
      dotsLocation.forEach((dots) => dots.classList.remove('dots-location-active'));
      nameLocation.forEach((name) => name.classList.remove('name-location-active'));
      document.querySelector(`${classMaps}[${dataAttribute}="${subtitleData}"]`).style.display = 'block';
      document.querySelector(`${classForBottomLine}[${dataAttribute}="${subtitleData}"]`).classList.add('active');
      document.querySelector(`${classDotsLocation}[${dataAttribute}="${subtitleData}"]`).classList.add('dots-location-active');
      document.querySelector(`${classNameLocation}[${dataAttribute}="${subtitleData}"]`).classList.add('name-location-active');
    });
  });
};
export default appearanceElementsOnDate;
