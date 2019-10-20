$(document).ready(function() {
    //создаём функцию и даём ей название
   function appearanceSquare(item) {
       //обращение к функации и перебирание с помощью each
       $(item).each(function(i) {
           //при нажатии происзодится функция
        $(this).on('click', function(e) {
            e.preventDefault();
            //обращается к классу и при нажатии даём класс активе
            $('.edward-list__link-color').eq(i).toggleClass('edward-list__link-color_active');
            $('.square').eq(i).toggleClass('square_active');
        });
       });
   }

   appearanceSquare('.edward-list__link-color');
   appearanceSquare('.square__close');
});