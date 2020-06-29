import { getLink, getLinks } from '../_get-link';
import getDataFromSubtitle from './get-data-fom-subtitle';
import returnAnimationLength from './return-animation-length';


function getItemAndAddStyles({ classElements, animationName }) {
  const animationLength = returnAnimationLength();

  return getLink(`${classElements}[data-shore="${getDataFromSubtitle()}"]`).style.cssText = `
      display: block;
      -webkit-animation: ${animationName} ${animationLength} 1;
      animation: ${animationName} ${animationLength} 1;
    `;
}

function getItemsAndAddStyles({ classElements, animationName }) {
  const animationLength = returnAnimationLength();

  return getLinks(`${classElements}[data-shore="${getDataFromSubtitle()}"]`)
    .forEach((item) => item.style.cssText = `
        display: block;
        -webkit-animation: ${animationName} ${animationLength} 1;
        animation: ${animationName} ${animationLength} 1;`);
}


export { getItemAndAddStyles, getItemsAndAddStyles };
