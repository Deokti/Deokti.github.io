const preloader = ({
  getBody,
  getPreloader,
  showSrollBar,
}) => {
  window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector(getBody);
    const preload = document.querySelector(getPreloader);
    preload.style.display = 'none';
    body.classList.add(showSrollBar);
  });
};

export default preloader;
