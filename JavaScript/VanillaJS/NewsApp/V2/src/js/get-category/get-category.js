import responseProcessing from '../response-processing';


// Действует при выборе категорий
function getCategory(event) {
    event.preventDefault();
    const categoryElements = document.querySelectorAll('.nav-link');

    const onCategory = event.target;
    const category = event.target.getAttribute('data-category');

    responseProcessing('TopHeadlines', category);

    categoryElements.forEach((element) => element.classList.remove('nav-link-active'));
    onCategory.classList.add('nav-link-active');
}

export default getCategory;
