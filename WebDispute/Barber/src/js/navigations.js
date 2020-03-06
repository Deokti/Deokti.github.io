const navigations = document.querySelector('.navigations');

window.addEventListener('scroll', event => {
    let pageY = pageYOffset
    if (pageY > 600) {
        navigations.classList.add('navigations-scroll');
    } else {
        navigations.classList.remove('navigations-scroll');
    }
    
});