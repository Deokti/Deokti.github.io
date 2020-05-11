// В функции для того, чтобы можно было переиспользовать

function smoothScroll(linkSelector) {
    const links = $(linkSelector);
    const margin = 0; // переменная для контроля докрутки

    $(links).click(function () { // условие, при нажатии на какие ссылки действует плавная прокрутка
        $('html, body').animate({
            scrollTop: `${$($(this).attr('href')).offset().top + margin}px`, // .top+margin - ставьте минус, если хотите увеличить отступ
        }, {
            duration: 1000, // контроль скорости
            easing: 'swing',
        });
        return false;
    });
}
smoothScroll('.nav-link');
