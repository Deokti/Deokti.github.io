import { getLinks, getLink } from '../_get-link';


const createRating = ({ 
  getSubtitleRating, 
  getRatingCreate, 
  getDataRating = 'data-create-rating',
  addClass
}) => {
  const subtitleRating = getLinks(getSubtitleRating);

  subtitleRating.forEach((rating) => {
    let createTemplate = '';
    const getRating = rating.querySelector(getRatingCreate);
    const dataRating = getRating.getAttribute(getDataRating);
 
    for (let i = 0; i < dataRating; i++) {
      createTemplate += `
        <span class="${addClass}">
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" xmlns:v="https://vecta.io/nano">
            <path d="M26.954 16l3.196 7.6 7.85.864-5.934 5.476L33.8 38l-6.847-4.227L20.2 38l1.735-8.07L16 24.454l7.85-.864 3.104-7.6z" fill="#4af6cd"/>
          </svg>
        </span>`;
    }
    rating.querySelector(getRatingCreate).insertAdjacentHTML('beforeend', createTemplate)
  });
};

export default createRating;
