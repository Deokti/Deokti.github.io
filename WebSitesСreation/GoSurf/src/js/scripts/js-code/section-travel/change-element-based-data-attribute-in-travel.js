import 'classlist-polyfill';
import { getLinks } from '../_get-link';
import { getItemAndAddStyles, getItemsAndAddStyles } from './get-item-and-add-styles';


const changeElementBasedDataAttributeInTravelAutoplay = () => {
  const planes = getLinks('.travel-planes-item');
  const airlinesSubtitleData = getLinks('.subtitle-data-container .subtitle--main');
  const travelShoreImagesItem = getLinks('.travel-shore-images-item');
  const travelFlightItemDescription = getLinks('.travel-flight-container .travel-flight-item-description');

  const iterateArrAndAddStyle = (transferGetElement) => transferGetElement.forEach((item) => item.style.display = 'none');

  // До того, как слайдер переключился
  const beforeDepartupe = () => {
    getItemAndAddStyles({
      classElements: '.travel-planes-item',
      animationName: 'thePlaneFliesAway',
    });
    getItemAndAddStyles({
      classElements: '.subtitle-data-container .subtitle--main',
      animationName: 'airlineArrives',
    });
    getItemAndAddStyles({
      classElements: '.travel-shore-images-item',
      animationName: 'hideImageInTravel',
    });

    getItemsAndAddStyles({
      classElements: '.travel-flight-container .travel-flight-item-description',
      animationName: 'startToggleInformationAboutFly',
    });
  };

  // После и во время того как слайдер переключается (преключился)
  const afterDeparture = () => {
    iterateArrAndAddStyle(planes);
    iterateArrAndAddStyle(airlinesSubtitleData);
    iterateArrAndAddStyle(travelShoreImagesItem);
    iterateArrAndAddStyle(travelFlightItemDescription);

    getItemAndAddStyles({
      classElements: '.travel-planes-item',
      animationName: 'planeArrives',
    });
    getItemAndAddStyles({
      classElements: '.subtitle-data-container .subtitle--main',
      animationName: 'airlineFliesAway',
    });
    getItemAndAddStyles({
      classElements: '.travel-shore-images-item',
      animationName: 'showImageInTravel',
    });

    getItemsAndAddStyles({
      classElements: '.travel-flight-container .travel-flight-item-description',
      animationName: 'finishToggleInformationAboutFly',
    });
  };

  return {
    beforeDepartupe,
    afterDeparture,
  };
};

const animationForItemsInTravel = changeElementBasedDataAttributeInTravelAutoplay();

export default animationForItemsInTravel;
