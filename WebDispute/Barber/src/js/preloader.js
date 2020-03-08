window.addEventListener('load', () => {
    var bodyLoad = document.querySelector('body');
    var preloader = document.querySelector('.holder');
    preloader.classList.add('holder_finish');
    bodyLoad.classList.remove('verflow-hidden-preload');
});