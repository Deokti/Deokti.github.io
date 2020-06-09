"use strict";

var navigations = document.querySelector('.navigations');

window.addEventListener('scroll', function () {
    var pageY = pageYOffset;

    if (pageY >= 500) {
        navigations.classList.add('navigations-scroll');
        navigations.classList.add('navigations-top-bottom');
    } else {
        navigations.classList.remove('navigations-top-bottom');
        navigations.classList.remove('navigations-scroll');
    }
});