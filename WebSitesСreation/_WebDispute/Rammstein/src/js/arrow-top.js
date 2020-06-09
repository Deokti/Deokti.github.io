// // Функция отвечает за показ и удаление стрелочки 
// function showArrowTop() {
//     // Обращение к элементу
//     const arrowTop = $('.arrow-top');

//     // Узнаёт позицию элемент относительно размера экрана вертикально 
//     const arrowTopPosition = arrowTop.getBoundingClientRect().top;
    
//     // Узнаём высоту области просмотра окна браузера
//     const windowHeightPosition = window.innerHeight;
    
//     // Если позиция элемента меньше высоты просмотра браузера, 
//     // делённую на четыре, - то добавлять класс. Иначе удалять. 
//     if (arrowTopPosition < windowHeightPosition / 4) {
//         arrowTop.classList.add('arrow-top_show');
//     } else {
//         arrowTop.classList.remove('arrow-top_show');
//     }
// }
// window.addEventListener('scroll', showArrowTop);

