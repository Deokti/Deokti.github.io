function getDataFromSubtitle() {
  const subtitle = document.querySelector('.travel .slick-slide.slick-current').querySelector('.subtitle--main');
  return subtitle.getAttribute('data-shore');
}

export default getDataFromSubtitle;
