window.addEventListener('load', () => {
    const bodyLoad = document.querySelector('body');
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader_finish');
    bodyLoad.classList.remove('overflow-hidden-preload');
});