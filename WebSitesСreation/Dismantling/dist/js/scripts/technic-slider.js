const addTechnicLiser = () => {
  $('.technic-slider').slick({
    centerMode: true,
    centerPadding: '100px 0 0',
    arrows: false
  });
}

const onResize = window.addEventListener('resize', () => {
  const width = document.documentElement.offsetWidth;
  if (width <= 450) addTechnicLiser();
})


document.addEventListener('DOMContentLoaded', onResize);
