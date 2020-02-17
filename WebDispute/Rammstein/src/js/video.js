function changeVideoClick() {
    let mainVideo = $('.media-video__main iframe');
    let AllVideoLinks = document.querySelectorAll('.media-video__link a');
    
    // Перебираем все ссылки, получаем их href 
    // после чего заменяем главное видео исходя из одной из полученных ссылок
    AllVideoLinks.forEach(event => {
        event.addEventListener('click', function(link) {
            link.preventDefault();
            let getHref = this.href
            mainVideo.src = `${getHref}`;
        });
    });

}
changeVideoClick();