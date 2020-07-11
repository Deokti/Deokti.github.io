import 'classlist-polyfill';
import { getLinks, getLink } from '../_get-link';
import { getItemAndAddStyles, getItemsAndAddStyles } from './get-item-and-add-styles';

const addAnimationStartAndTheEnd = ({
  // Первый элемент - название класса,
  // второй название анимации перед изминением слайдера,
  // третий после изминения слайдера
  firstMainImage = [],
  descriptionBottomSubtitle = [],
  additionalBackground = [],
  detailedInormationAboutDifferentThings = [],
  pathAndNameDataAttribute = [],
}) => {
  const mainImage = getLinks(firstMainImage[0]);
  const descriptionSubtitle = getLinks(descriptionBottomSubtitle[0]);
  const backgroundImage = getLinks(additionalBackground[0]);
  const detailedInormation = getLinks(detailedInormationAboutDifferentThings[0]);

  const iterateArrAndAddStyle = (transferGetElement) => transferGetElement.forEach((item) => item.style.display = 'none');

  // До того, как слайдер переключился
  const beforeDepartupe = () => {
    getItemAndAddStyles({
      pathAndNameDataAttribute: [pathAndNameDataAttribute[0], pathAndNameDataAttribute[1]],
      classElements: firstMainImage[0],
      animationName: firstMainImage[1],
    });
    getItemAndAddStyles({
      pathAndNameDataAttribute: [pathAndNameDataAttribute[0], pathAndNameDataAttribute[1]],
      classElements: descriptionBottomSubtitle[0],
      animationName: descriptionBottomSubtitle[1],
    });
    getItemAndAddStyles({
      pathAndNameDataAttribute: [pathAndNameDataAttribute[0], pathAndNameDataAttribute[1]],
      classElements: additionalBackground[0],
      animationName: additionalBackground[1],
    });
    getItemsAndAddStyles({
      pathAndNameDataAttribute: [pathAndNameDataAttribute[0], pathAndNameDataAttribute[1]],
      classElements: detailedInormationAboutDifferentThings[0],
      animationName: detailedInormationAboutDifferentThings[1],
    });
  };

  // После и во время того как слайдер переключается (преключился)
  const afterDeparture = () => {
    iterateArrAndAddStyle(mainImage);
    iterateArrAndAddStyle(descriptionSubtitle);
    iterateArrAndAddStyle(backgroundImage);
    iterateArrAndAddStyle(detailedInormation);

    getItemAndAddStyles({
      pathAndNameDataAttribute: [pathAndNameDataAttribute[0], pathAndNameDataAttribute[1]],
      classElements: firstMainImage[0],
      animationName: firstMainImage[2],
    });
    getItemAndAddStyles({
      pathAndNameDataAttribute: [pathAndNameDataAttribute[0], pathAndNameDataAttribute[1]],
      classElements: descriptionBottomSubtitle[0],
      animationName: descriptionBottomSubtitle[2],
    });
    getItemAndAddStyles({
      pathAndNameDataAttribute: [pathAndNameDataAttribute[0], pathAndNameDataAttribute[1]],
      classElements: additionalBackground[0],
      animationName: additionalBackground[2],
    });
    getItemsAndAddStyles({
      pathAndNameDataAttribute: [pathAndNameDataAttribute[0], pathAndNameDataAttribute[1]],
      classElements: detailedInormationAboutDifferentThings[0],
      animationName: detailedInormationAboutDifferentThings[2],
    });
  };

  return {
    beforeDepartupe,
    afterDeparture,
  };
};

export { addAnimationStartAndTheEnd };
