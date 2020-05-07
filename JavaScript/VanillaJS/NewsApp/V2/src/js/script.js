// Импорт файлов
import getCategory from './get-category';
import searchForm from './search-form';
import responseProcessing from './response-processing';


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-list').addEventListener('click', getCategory);
    responseProcessing('TopHeadlines');
});
