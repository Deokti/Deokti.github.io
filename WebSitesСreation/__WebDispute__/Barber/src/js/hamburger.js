function activeClassHamburger(hamburgerSelector, activeClass) {
    var hamburger = document.querySelector(hamburgerSelector);
    hamburger.addEventListener('click', function (_ref) {
        var target = _ref.target;

        if (!target.classList.contains(activeClass)) {
            hamburger.classList.add(activeClass);
            document.querySelector('.navigations__mobile').classList.add('navigations__mobile_active');
        } else {
            hamburger.classList.remove(activeClass);
            document.querySelector('.navigations__mobile').classList.remove('navigations__mobile_active');
        }
    });
}

activeClassHamburger('.navigations__hamburger', 'navigations__hamburger_active');