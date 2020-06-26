import 'classlist-polyfill';
import { getLink, getLinks } from '../_get-link';

const changeElementBasedDataAttributeInTravelAutoplay = {
  planes: getLinks('.travel-planes-item'),
  airlinesSubtitleData: getLinks('.subtitle-data-container .subtitle--main'),
  animationLength: '.6s',

  getSubtitle() {
    const subtitle = document.querySelector('.travel .slick-slide.slick-current').querySelector('.subtitle--main');
    return subtitle.getAttribute('data-shore');
  },

  beforeDepartupe() {
    getLink(`.subtitle-data-container .subtitle--main[data-shore="${this.getSubtitle()}"]`).style.cssText = `
      display: block;
     -webkit-animation: airlineArrives ${this.animationLength} 1;
      animation: airlineArrives ${this.animationLength} 1;
    `;

    getLink(`.travel-planes-item[data-shore="${this.getSubtitle()}"]`).style.cssText = `
      display: block;
      -webkit-animation: thePlaneFliesAway ${this.animationLength} 1;
      animation: thePlaneFliesAway ${this.animationLength} 1;
    `;
  },

  afterDeparture() {
    this.planes.forEach((plane) => plane.style.display = 'none');
    this.airlinesSubtitleData.forEach((ariline) => ariline.style.display = 'none');

    getLink(`.travel-planes-item[data-shore="${this.getSubtitle()}"]`).style.cssText = `
      display: block;
      -webkit-animation: planeArrives ${this.animationLength} 1;
      animation: planeArrives ${this.animationLength} 1;
    `;
    getLink(`.subtitle-data-container .subtitle--main[data-shore="${this.getSubtitle()}"]`).style.cssText = `
      display: block;
      -webkit-animation: airlineFliesAway ${this.animationLength} 1;
      animation: airlineFliesAway ${this.animationLength} 1;
   `;
  },
};

export default changeElementBasedDataAttributeInTravelAutoplay;
