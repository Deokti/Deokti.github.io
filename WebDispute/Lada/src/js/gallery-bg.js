const plauLoadBG = setTimeout(() => {
    $('.gallery-left').vegas({
        cover: true,
        autoplay: true,
        timer: false,
        slides: [
            {src: 'img/gallery/right/full-page/full-1.jpg'},
            {src: 'img/gallery/right/full-page/full-2.jpg'},
            {src: 'img/gallery/right/full-page/full-3.jpg'},
            {src: 'img/gallery/right/full-page/full-4.jpg'},
            {src: 'img/gallery/right/full-page/full-5.jpg'},
        ]
    });
     //перелистывает вперёд
     $('.arrow-gallery-bg_next').on('click', function () {
        $('.gallery-left').vegas('next');
    });
    
    //перелистывает нащал
    $('.arrow-gallery-bg_prev').on('click', function () {
        $('.gallery-left').vegas('previous');
    });
    
}, 0);