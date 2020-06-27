import 'classlist-polyfill';
import { getLink, getLinks } from '../_get-link';

const changeElementBasedDataAttributeInTravelAutoplay = {
  planes: getLinks('.travel-planes-item'),
  airlinesSubtitleData: getLinks('.subtitle-data-container .subtitle--main'),
  travelShoreImagesItem: getLinks('.travel-shore-images-item'),
  travelFlightItemDescription: getLinks('.travel-flight-container .travel-flight-item-description'),
  animationLength: '.6s',

  getSubtitle() {
    const subtitle = document.querySelector('.travel .slick-slide.slick-current').querySelector('.subtitle--main');
    return subtitle.getAttribute('data-shore');
  },

  getItemAndAddStyles({ classElements, animationName }) {
    return getLink(`${classElements}[data-shore="${this.getSubtitle()}"]`).style.cssText = `
      display: block;
      -webkit-animation: ${animationName} ${this.animationLength} 1;
      animation: ${animationName} ${this.animationLength} 1;
    `;
  },
  getItemsAndAddStyles({ classElements, animationName }) {
    return getLinks(`${classElements}[data-shore="${this.getSubtitle()}"]`)
      .forEach((item) => item.style.cssText = `
        display: block;
        -webkit-animation: ${animationName} ${this.animationLength} 1;
        animation: ${animationName} ${this.animationLength} 1;`);
  },

  iterateArrAndAddStyle(transferGetElement) {
    return transferGetElement.forEach((item) => item.style.display = 'none');
  },

  beforeDepartupe() {
    this.getItemAndAddStyles({
      classElements: '.travel-planes-item',
      animationName: 'thePlaneFliesAway',
    });
    this.getItemAndAddStyles({
      classElements: '.subtitle-data-container .subtitle--main',
      animationName: 'airlineArrives',
    });
    this.getItemAndAddStyles({
      classElements: '.travel-shore-images-item',
      animationName: 'hideImageInTravel',
    });

    this.getItemsAndAddStyles({
      classElements: '.travel-flight-container .travel-flight-item-description',
      animationName: 'startToggleInformationAboutFly',
    });
  },

  afterDeparture() {
    this.iterateArrAndAddStyle(this.planes);
    this.iterateArrAndAddStyle(this.airlinesSubtitleData);
    this.iterateArrAndAddStyle(this.travelShoreImagesItem);
    this.iterateArrAndAddStyle(this.travelFlightItemDescription);

    this.getItemAndAddStyles({
      classElements: '.travel-planes-item',
      animationName: 'planeArrives',
    });
    this.getItemAndAddStyles({
      classElements: '.subtitle-data-container .subtitle--main',
      animationName: 'airlineFliesAway',
    });
    this.getItemAndAddStyles({
      classElements: '.travel-shore-images-item',
      animationName: 'showImageInTravel',
    });

    this.getItemsAndAddStyles({
      classElements: '.travel-flight-container .travel-flight-item-description',
      animationName: 'finishToggleInformationAboutFly',
    });
  },
};

export default changeElementBasedDataAttributeInTravelAutoplay;
