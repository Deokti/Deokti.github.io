function searchToggleState(openSearchSelector, searchSelector, classActive) {
    const openSearch = document.querySelector(openSearchSelector);
    const search = document.querySelector(searchSelector);
    openSearch.addEventListener('click', () => search.classList.toggle(classActive));
}
searchToggleState('.open-search', '.search', 'search-show');
searchToggleState('.search-cross', '.search', 'search-show');

export default searchToggleState;
