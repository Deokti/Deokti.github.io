$(window).load(function () {

    //табы на секции comment
    $('ul.comment__tabs').on('click', 'li:not(.comment__tab_active)', function () {
        $(this)
            .addClass('comment__tab_active').siblings().removeClass('comment__tab_active')
            .closest('div.comment__block').find('div.comment__inner').removeClass('comment__inner_active').eq($(this).index()).addClass('comment__inner_active');
    });

    //слайдер на секции comment
    $('.comment__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        prevArrow: '<button type="button" class="arrow__left arrow__left_comment"><img src="img/left-arrow.svg" alt="стрелка влево" class="hover-arrow__left"></button>',
        nextArrow: '<button type="button" class="arrow__right arrow__right_comment"><img src="img/right-arrow.svg" alt="стрелка вправо" class="hover-arrow__right"></button>',
    });

});
