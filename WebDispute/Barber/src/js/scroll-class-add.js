var scrollHoverMenu = document.querySelector('.scroll-hover');
var scrollPageY;

function changeActiveClass(elements, addClass, pageY, min, max) {
    if (pageY >= min && pageY <= max) {
        elements.classList.add(addClass);
    } else {
        elements.classList.remove(addClass);
    }
}

window.addEventListener('scroll', function() {
    scrollPageY = window.pageYOffset;
    console.log(scrollPageY);
    
    if (screen.width >= 1200) {
        changeActiveClass(scrollHoverMenu, 'scroll-hover_one', scrollPageY, 0, 691);
        changeActiveClass(scrollHoverMenu, 'scroll-hover_two', scrollPageY, 692, 1558);
        changeActiveClass(scrollHoverMenu, 'scroll-hover_three', scrollPageY, 1559, 2269);
        changeActiveClass(scrollHoverMenu, 'scroll-hover_four', scrollPageY, 2270, 2892);
        changeActiveClass(scrollHoverMenu, 'scroll-hover_five', scrollPageY, 2893, 3869);
        changeActiveClass(scrollHoverMenu, 'scroll-hover_six', scrollPageY, 3870, 4210);
    }
});


function arrowTopShow(arrow, addClass, scroll) {
    var buttonTop = document.querySelector(arrow);

    window.addEventListener('scroll', function() {
        scrollPageY = window.pageYOffset;
        if (scrollPageY >= scroll) {
            buttonTop.classList.add(addClass);
        } else {
            buttonTop.classList.remove(addClass);
        }
    });
}
arrowTopShow('.button-top', 'button-top_active', 800);


function clickArrowTop(arrowSelector, time) {
    var arrow = document.querySelector(arrowSelector);

    $(arrow).click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, time);
    })
}
clickArrowTop('.button-top', 1000);