$(document).ready(function(){
	$(".navigations__links li").on("click","a", function (event) {
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
        //анимируем переход на расстояние - top за 1500 мс
        if (screen.width > 1000) {
            $('body,html').animate({scrollTop: top - 100}, 1000);
        } else if (screen.width > 700) {
            $('body,html').animate({scrollTop: top - 60}, 1000);
        } else if (screen.width <= 700) {
            $('body,html').animate({scrollTop: top - 40}, 1000);
        }
	});
});


var openHamburger = document.querySelector('.navigations__hamburger');
var openMenu = document.querySelector('.navigations__mobile');

function closeHamburder() {
    openHamburger.classList.remove('navigations__hamburger_active');
    openMenu.classList.remove('navigations__mobile_active');
}

