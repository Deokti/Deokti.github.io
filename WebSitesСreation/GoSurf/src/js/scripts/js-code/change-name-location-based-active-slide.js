// Изменяет название CURRENT LOCATION в секции SURF
// исходя из текущего слайда
const changeNameLocationBasedActiveSlide = () => {
  const location = document.querySelector('#surf');
  const getLocation = location.querySelector('.subtitle--main');
  const currentCard = location.querySelector('.slick-slide.slick-current .surf-cards-item__description');
  getLocation.innerHTML = currentCard.textContent;
};

export default changeNameLocationBasedActiveSlide;
