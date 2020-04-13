const slider = tns({
    container: '#slider-reviews',
    items: 2,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    controls: false,
    navPosition: 'bottom',
    responsive: {
        310: {
            items: 1,
        },
        1170: {
            items: 1,
        },
        1171: {
            items: 2,
        },
    },
});
