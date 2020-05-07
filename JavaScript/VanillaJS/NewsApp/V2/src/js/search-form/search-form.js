import searchToggleState from '../search-toggle-state';
import responseProcessing from '../response-processing';

const form = document.forms.search;
const searchInput = form.elements['search-input'];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInputValue = searchInput.value;
    if (searchInputValue.length === 0) return false;

    responseProcessing('Everything', searchInputValue);
    form.reset();
});
