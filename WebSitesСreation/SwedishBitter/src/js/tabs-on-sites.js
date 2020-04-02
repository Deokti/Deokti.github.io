function openTabsContentInAttribute(tabsSelector, contentsSelector, dataSelector, display, classActive) {
    const tabs = document.querySelectorAll(tabsSelector);
    const contents = document.querySelectorAll(contentsSelector);

    tabs.forEach(toTabs => {
        toTabs.addEventListener('click', ({target}) => {
            // Выясняет дата-атрибут элемента на который нажати
            let data = target.getAttribute(dataSelector);

            // Скрывает все элементы и открывает тот контент, 
            // который соответствует дата-атрибуту
            contents.forEach(hideContent => hideContent.style.display = 'none');
            document.querySelector(`${contentsSelector}[${dataSelector}="${data}"]`).style.display = display;

            // Перебираем все табы и убираем активный класс у всех
            // ставя его на тот, на который произошёл клик
            tabs.forEach(removeClass => removeClass.classList.remove(classActive));
            target.classList.add(classActive);
        });
    });
}
openTabsContentInAttribute('.list-ailments__item', '.list-skeleton__item', 'data-list', 'flex', 'list-ailments__item_active');
openTabsContentInAttribute('.reviews-tabs__tab', '.reviews-content__reviews', 'data-reviews', 'flex', 'reviews-tabs__tab_active');
