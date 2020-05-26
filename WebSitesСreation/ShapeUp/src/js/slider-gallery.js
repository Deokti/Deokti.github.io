const slider = tns({
    container: '#gallery-slider',
    items: 2,
    responsive: {
        310: { items: 1 },
        770: {
            items: 2,
            gutter: 0,
        },
        860: { items: 2.3 },
        1070: { items: 2.9 },
        1120: { items: 3 },
        1490: { items: 4 },
        1900: { items: 5 },
    },
    gutter: 30,
    swipeAngle: false,
    speed: 400,
    nav: false,
    controls: false,
});

function sliderButton(buttonSelector, direction) {
    const button = document.querySelector(buttonSelector);
    button.addEventListener('click', () => slider.goTo(direction));
}
sliderButton('.button-arrow-left', 'prev');
sliderButton('.button-arrow-right', 'next');
