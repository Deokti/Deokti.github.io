// Гамбургер меню
$('.hamburger').on('click', (event) => {
    event.preventDefault();
    $('.hamburger').toggleClass('hamburger-active');
    $('.header__wrapper').toggleClass('header-mobile');
});

// Нажатии на какую-то ссылку в меню, активные классы удаляются
$('.nav-link').on('click', () => {
    $('.hamburger').removeClass('hamburger-active');
    $('.header__wrapper').removeClass('header-mobile');
});
