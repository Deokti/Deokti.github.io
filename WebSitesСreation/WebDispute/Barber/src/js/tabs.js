(function () {
    "use strict";

    var allTabs = document.querySelectorAll('.masters-tabs__item');
    var allContent = document.querySelectorAll('.masters-content__item');

    for (let i = 0; i < allTabs.length; i++) {
        allTabs[i].addEventListener('click', function (_ref) {
            var target = _ref.target;
            var data = target.getAttribute('data-masters');

            for (let j = 0; j < allContent.length; j++) {
                allContent[j].style.display = 'none';
            }
            document.querySelector(".masters-content__item[data-masters=\"".concat(data, "\"]")).style.display = 'flex';

            for (let k = 0; k < allTabs.length; k++) {
                allTabs[k].classList.remove('masters-tabs__item_active');
            }
            target.classList.add('masters-tabs__item_active');
        });
    }
})();