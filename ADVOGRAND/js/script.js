$(window).load(function () {

    //-----табы на секции comment-----
    $('ul.comment__tabs').on('click', 'li:not(.comment__tab_active)', function () {
        $(this)
            .addClass('comment__tab_active').siblings().removeClass('comment__tab_active')
            .closest('div.comment__block').find('div.comment__inner').removeClass('comment__inner_active').eq($(this).index()).addClass('comment__inner_active');
    });
    //-----/табы на секции comment-----

    //-----СЛАЙДЕР НА СЕКЦИИ comment-----

    //первый 
    const slider = tns({
        container: '.comment__inner',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
        slider.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
        slider.goTo('next');
        });

    //второй 
    const sliderTwo = tns({
        container: '.comment__inner_two',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderTwo.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderTwo.goTo('next');
        });

    //третий 
    const sliderThree = tns({
        container: '.comment__inner_three',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderThree.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderThree.goTo('next');
        });

    //четвёртый
    const sliderFour = tns({
        container: '.comment__inner_four',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderFour.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderFour.goTo('next');
        });

    //пятый
    const sliderFive = tns({
        container: '.comment__inner_five',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderFive.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderFive.goTo('next');
        });

    //шестой 
    const sliderSix = tns({
        container: '.comment__inner_six',
        items: 3,
        slideBy: 'page',
        speed: 900,
        nav: false,
        controls: false,
        });
        document.querySelector('.arrow__left').addEventListener('click', function() {
            sliderSix.goTo('prev');
        });
        document.querySelector('.arrow__right').addEventListener('click', function() {
            sliderSix.goTo('next');
        });

    //------/СЛАЙДЕР НА СЕКЦИИ comment------
});
