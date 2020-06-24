import 'classlist-polyfill';

// При изминении текущего слайда,
// происходит вычисление дата-атрибута subtitle, который находится внутри slcik.
// Некоторые из элементов - это массивы, первый элемент которого - сам элемент, а второй класс, который нужно добавить
const appearanceElementsOnDateAutoplay = ({
  getSlickSlideFromActiveSlide = '.slick-slide.slick-active',
  dataAttribute,
  classMaps = [],
  classForBottomLine = [],
  classDotsLocation = [],
  classNameLocation = [],
} = {}) => {
  const maps = document.querySelectorAll(classMaps[0]);
  const bottomLine = document.querySelectorAll(classForBottomLine[0]);

  const subtitle = document.querySelectorAll(getSlickSlideFromActiveSlide)[0].childNodes[0].childNodes[0];
  const subtitleData = subtitle.getAttribute(dataAttribute);
  const dotsLocation = document.querySelectorAll(classDotsLocation[0]);
  const nameLocation = document.querySelectorAll(classNameLocation[0]);

  const goArrayDeleteClass = (array, deleteClass) => array.forEach((item) => item.classList.remove(deleteClass));
  goArrayDeleteClass(maps, classMaps[1]);
  goArrayDeleteClass(bottomLine, classForBottomLine[1]);
  goArrayDeleteClass(dotsLocation, classDotsLocation[1]);
  goArrayDeleteClass(nameLocation, classNameLocation[1]);

  const goElementAddClass = (element, addClass) => document.querySelector(`${element}[${dataAttribute}="${subtitleData}"]`).classList.add(addClass);
  goElementAddClass(classMaps[0], classMaps[1]);
  goElementAddClass(classForBottomLine[0], classForBottomLine[1]);
  goElementAddClass(classDotsLocation[0], classDotsLocation[1]);
  goElementAddClass(classNameLocation[0], classNameLocation[1]);
};

export default appearanceElementsOnDateAutoplay;
