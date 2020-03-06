(function() {
    const allTabs = document.querySelectorAll('.masters-tabs__item');
    const allContent = document.querySelectorAll('.masters-content__item');

    allTabs.forEach(item => {
        item.addEventListener('click', function ({target}) {
            let data = target.getAttribute('data-masters');

            allContent.forEach(el => {
                el.style.display = 'none';
            });
            document.querySelector(`.masters-content__item[data-masters="${data}"]`).style.display = 'flex';
            
            allTabs.forEach(activeClass => {
                activeClass.classList.remove('masters-tabs__item_active');
            })
            target.classList.add('masters-tabs__item_active');

        });
    });
})();