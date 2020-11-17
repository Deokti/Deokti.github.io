const navigationShow = (nav) => nav.classList.add('nav__table');

const navigationHive = (nav) => nav.classList.remove('nav__table');

const behaviorHamburgerOnClick = () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      navigationHive(nav);
      return false;
    }

    hamburger.classList.add('active');
    navigationShow(nav);
  });
};

export default behaviorHamburgerOnClick;
