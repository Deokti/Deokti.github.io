const preloader = ({
  getBody,
  getPreloader,
  hidePreload,
  showSrollBar,
}) => {
  window.addEventListener('load', () => {
    const body = document.querySelector(getBody);
    const preload = document.querySelector(getPreloader);
    preload.classList.add(hidePreload);
    body.classList.add(showSrollBar);
  });
};

export default preloader;
