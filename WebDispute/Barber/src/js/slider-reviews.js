const slider = tns({
    container: '.reviews-container-slider',
    items: 2,
    slideBy: 'page',
    gutter: 30,
    autoplay: false,
    controls: false,
    speed: 500,
    responsive: {
        320: {
            items: 1,
        },
        640: {
            items: 1,
        },
        700: {
            items: 1,
        },
        881: {
            items: 2,
        },  
    },
});
document.querySelector('.button-arrow_prev').onclick = function () {
    slider.goTo('prev');
};
document.querySelector('.button-arrow_next').onclick = function () {
    slider.goTo('next');
};



const screeWidth = window.screen.width;

function changeArrowWidth() {
    const arrowMobile = '<svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L2 11.7478L10 21" stroke="#F1403B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const arrowDesktop = '<svg width="19" height="35" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2L2 17.8036L17 32.8036" stroke="#F1403B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    let arrowDesktopChange = document.querySelectorAll('.button-arrow');
    if (screeWidth <= 440) {
        arrowDesktopChange.forEach(arrow => {
            arrow.innerHTML = arrowMobile;
        });
        console.log(arrowDesktopChange); 
    } else {
        arrowDesktopChange.forEach(arrow => {
            arrow.innerHTML = arrowDesktop;
        });
    }
}
changeArrowWidth();



