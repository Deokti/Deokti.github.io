const hamburder = document.querySelector('.hamburder');
const navMenu = document.querySelector('.navigations-menu');
const mobuleMenu = document.querySelector('.mobile-menu');

hamburder.addEventListener('click', event => {
    event.preventDefault();
    hamburder.classList.toggle('hamburder_active');
    
    if (!(hamburder.classList.contains('hamburder_active'))) {
        mobuleMenu.classList.remove('mobile-menu_active');
        
    } else {
        mobuleMenu.classList.toggle('mobile-menu_active');
    }
});
mobuleMenu.addEventListener('click', event => {
    if (mobuleMenu.classList.contains('mobile-menu_active')) {
        if (event.target.tagName === 'A') {
            mobuleMenu.classList.toggle('mobile-menu_active');
            hamburder.classList.toggle('hamburder_active');
        }
    } 
});


// Появление навигации при скоролле
// более 800 пикселей
const mainNavigations = document.querySelector('.navigations');
window.addEventListener('scroll', () => {
    let pageY = window.pageYOffset

    if (pageY >= 700) {
        hamburder.classList.add('hamburder_show');
        mainNavigations.classList.add('navigations_show');
    } else {
        hamburder.classList.remove('hamburder_show');
        mainNavigations.classList.remove('navigations_show');
    }
});