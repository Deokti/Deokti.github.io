const appearanceElementsOnDate = ({
  triggerSelectors,
  getSlickSlideFromActiveSlide = '.slick-slide.slick-active',
  dataAttribute,
  classMaps,
  classForBottomLine,
} = {}) => {
  const triggers = document.querySelectorAll(triggerSelectors);
  const maps = document.querySelectorAll(classMaps);
  const bottomLine = document.querySelectorAll(classForBottomLine);

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const subtitle = document.querySelectorAll(getSlickSlideFromActiveSlide)[0].childNodes[0].childNodes[0];
      const subtitleData = subtitle.getAttribute(dataAttribute);

      maps.forEach((map) => map.style.display = 'none');
      bottomLine.forEach((line) => line.classList.remove('active'));
      document.querySelector(`${classMaps}[${dataAttribute}="${subtitleData}"]`).style.display = 'block';
      document.querySelector(`${classForBottomLine}[${dataAttribute}="${subtitleData}"]`).classList.add('active');
    });
  });
};
export default appearanceElementsOnDate;
