// new jBox('Image', {
//     maxWidth: 1000,
//     responsiveMinWidth: 300,
//     responsiveMinHeight: 300,
//     responsiveWidth: true,
//     responsiveHeight: true,
//     imageSize: 'contain',
//     closeOnEsc: true,
//     closeOnClick: 'overlay',
//     repositionOnOpen: true,
//     repositionOnContent: true,
// });


// window.addEventListener('scroll', function() {
//     if (screen.width <= 740) {
//         document.querySelector('.jBox-content').style.height = '420px';
//     }
// });

lightGallery(document.getElementById('lightgallery'), {
    counter: false,
    download: false,
    thumbnail:true,
    closable: true,
    controls: true,
    hideBarsDelay: 9999999,
});



