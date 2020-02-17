const mediaGalleryImg = $All('.media-gallery__img');
const mediaGalleryClose = $All('.media-tabs__close');

mediaGalleryImg.forEach(event => {
    event.addEventListener('click', function({target}) {
        let dataAttribute = target.getAttribute('data-gallery')
        
        $All('.media-tabs__item').forEach(iteration => {
            iteration.style.display = 'none';
        });
        $('.media-tabs').style.display = 'block';
        $(`.media-tabs__item[data-gallery="${dataAttribute}"]`).style.display = 'block';
    });
});

mediaGalleryClose.forEach(event => {
    event.addEventListener('click', () => $('.media-tabs').style.display = 'none');
});
