const mediaGalleryImg = $All('.media-gallery__img');
const mediaGalleryClose = $All('.media-tabs__close');

mediaGalleryImg.forEach(event => {
    event.addEventListener('click', function({target}) {
        let dataAttribute = target.getAttribute('data-gallery')
        
        $All('.media-tabs__item').forEach(iteration => {
            iteration.style.display = 'none';
        });
        $('.about-news').style.zIndex = '0';
        $('.media-tabs').style.display = 'block';
        $(`.media-tabs__item[data-gallery="${dataAttribute}"]`).style.display = 'block';
    });
});

mediaGalleryClose.forEach(event => {
    event.addEventListener('click', () => {
        $('.about-news').style.zIndex = '40';
        $('.media-tabs').style.display = 'none';  
    });
});
$('.media-tabs').addEventListener('click', ({target}) => {
    if (target.tagName === "LI") {
        $('.about-news').style.zIndex = '40';
        $('.media-tabs').style.display = 'none';  
    }
      
});
