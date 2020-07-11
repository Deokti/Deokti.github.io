import { getLink, getLinks } from '../_get-link';
import getDataFromSubtitle from './get-data-fom-subtitle';
import returnAnimationLength from './return-animation-length';


// Принимает четыре аргуменита:
// 1. Класс элемента, на котором нужно что-то изменить
// 2. Название анимации
// 3.1 Массив, принимающий два элемента, первый из которых - это путь к дата атрибуту,
// 3.2 второй аргумент - это название data-атрубута
function getItemAndAddStyles({ classElements, animationName, pathAndNameDataAttribute = [] }) {
  const animationLength = returnAnimationLength();

  return getLink(`${classElements}[${pathAndNameDataAttribute[1]}="${getDataFromSubtitle(pathAndNameDataAttribute[0], pathAndNameDataAttribute[1])}"]`)
    .style.cssText = `
      display: block;
      -webkit-animation: ${animationName} ${animationLength} 1;
      animation: ${animationName} ${animationLength} 1;
    `;
}

function getItemsAndAddStyles({ classElements, animationName, pathAndNameDataAttribute = [] }) {
  const animationLength = returnAnimationLength();

  return getLinks(`${classElements}[${pathAndNameDataAttribute[1]}="${getDataFromSubtitle(pathAndNameDataAttribute[0], pathAndNameDataAttribute[1])}"]`)
    .forEach((item) => item.style.cssText = `
        display: block;
        -webkit-animation: ${animationName} ${animationLength} 1;
        animation: ${animationName} ${animationLength} 1;`);
}


export { getItemAndAddStyles, getItemsAndAddStyles };
