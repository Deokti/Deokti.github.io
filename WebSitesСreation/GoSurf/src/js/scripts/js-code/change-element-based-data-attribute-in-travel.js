import 'classlist-polyfill';

const changeElementBasedDataAttributeInTravelAutoplay = {
  planes: document.querySelectorAll('.travel-planes-item'),
  animationLength: '.6s',

  getSubtitle() {
    const subtitle = document.querySelector('.travel .slick-slide.slick-current').querySelector('.subtitle--main');
    return subtitle.getAttribute('data-shore');
  },

  beforeDepartupe() {
    document.querySelector(`.travel-planes-item[data-shore="${this.getSubtitle()}"]`).style.cssText = `
      display: block;
      -webkit-animation: thePlaneFliesAway ${this.animationLength} 1;
      animation: thePlaneFliesAway ${this.animationLength} 1;
    `;
  },

  afterDeparture() {
    this.planes.forEach((plane) => plane.style.display = 'none');
    document.querySelector(`.travel-planes-item[data-shore="${this.getSubtitle()}"]`).style.cssText = `
      display: block;
      -webkit-animation: planeArrives ${this.animationLength} 1;
      animation: planeArrives ${this.animationLength} 1;
    `;
  },
};

export default changeElementBasedDataAttributeInTravelAutoplay;
