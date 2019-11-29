$(window).load(function() {
    $('.promo').vegas({
        slides: [
            { src: 'img/promo/one-bg.jpg' },
            { src: 'img/promo/two-bg.jpg' },
        ],
        autoplay: false,
        cover: true,
    });
    
    //перелистывает вперёд
    $('[data-modal=next]').on('click', function () {
        $('.promo').vegas('next');
    });

    //перелистывает нащал
    $('[data-modal=previous]').on('click', function () {
        $('.promo').vegas('previous');
    });
});

