import $ from 'jquery';
import 'slick-carousel/slick/slick';

const guaranteeSlider = (selector) => {
  $(selector).slick({
    nextArrow: '<button class="arrow arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" xmlns:v="https://vecta.io/nano"><g clip-path="url(#A)"><path d="M1.162 15A13.84 13.84 0 0 0 15 28.838 13.84 13.84 0 0 0 28.838 15 13.84 13.84 0 0 0 15 1.162 13.84 13.84 0 0 0 1.162 15z" fill="#fff" /><g fill="#495aa5"><path d="M0 15A15.02 15.02 0 0 1 15 0c8.27 0 15 6.73 15 15a15.02 15.02 0 0 1-15 15A15.02 15.02 0 0 1 0 15zm27.676 0A12.68 12.68 0 0 0 15 2.324 12.68 12.68 0 0 0 2.324 15C2.324 22 8 27.676 15 27.676S27.676 22 27.676 15zM11.77 21.635a1.16 1.16 0 0 1 0-1.638l4.985-4.985-4.985-4.985c-.417-.487-.36-1.22.127-1.638a1.16 1.16 0 0 1 1.512 0l5.8 5.8a1.16 1.16 0 0 1 0 1.638l-5.8 5.8a1.16 1.16 0 0 1-1.638-.012z" /></g>/g><defs><clipPath id="A"><path fill="#fff" transform="matrix(0 1 -1 0 30 0)" d="M0 0h30v30H0z" /></clipPath></defs></svg></button>',
    prevArrow: '<button class="arrow arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" xmlns:v="https://vecta.io/nano"><g clip-path="url(#A)"><path d="M1.162 15A13.84 13.84 0 0 0 15 28.838 13.84 13.84 0 0 0 28.838 15 13.84 13.84 0 0 0 15 1.162 13.84 13.84 0 0 0 1.162 15z" fill="#fff" /><g fill="#495aa5"><path d="M0 15A15.02 15.02 0 0 1 15 0c8.27 0 15 6.73 15 15a15.02 15.02 0 0 1-15 15A15.02 15.02 0 0 1 0 15zm27.676 0A12.68 12.68 0 0 0 15 2.324 12.68 12.68 0 0 0 2.324 15C2.324 22 8 27.676 15 27.676S27.676 22 27.676 15zM11.77 21.635a1.16 1.16 0 0 1 0-1.638l4.985-4.985-4.985-4.985c-.417-.487-.36-1.22.127-1.638a1.16 1.16 0 0 1 1.512 0l5.8 5.8a1.16 1.16 0 0 1 0 1.638l-5.8 5.8a1.16 1.16 0 0 1-1.638-.012z" /></g>/g><defs><clipPath id="A"><path fill="#fff" transform="matrix(0 1 -1 0 30 0)" d="M0 0h30v30H0z" /></clipPath></defs></svg></button>',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
};

export default guaranteeSlider;
