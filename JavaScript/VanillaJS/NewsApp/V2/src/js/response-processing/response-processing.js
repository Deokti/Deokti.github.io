import apiWorkingMethods from '../Api-working-methods';
import oldNewsRemove from '../old-news-remove';
import createTemplate from '../create-template';

function responseProcessing(currentMethod, act) {
    apiWorkingMethods[currentMethod](act).then((item) => {
        const container = document.querySelector('.news .news__wrapper');
        oldNewsRemove(container);

        let fragment = '';
        item.articles.map((news) => {
            const template = createTemplate(news);
            fragment += template;
        });
        container.insertAdjacentHTML('afterbegin', fragment);
    });
}

export default responseProcessing;
