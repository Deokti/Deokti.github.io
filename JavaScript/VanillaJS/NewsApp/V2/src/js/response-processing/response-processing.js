import apiWorkingMethods from '../Api-working-methods';
import oldNewsRemove from '../old-news-remove';
import createTemplate from '../create-template';
import spinnerRemove from '../spinner';
import calculateAndAddScroll from '../calculate-and-add-scroll';
import cssStyle from '../css-style-through-js';

function responseProcessing(currentMethod, act) {
  const container = document.querySelector('.news .news__wrapper');
  oldNewsRemove(container);
  cssStyle(document.body, {
    'padding-right': `${calculateAndAddScroll()}px`,
  });

  document.body.insertAdjacentHTML('afterbegin',
    `<div class="preloader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>`);
  apiWorkingMethods[currentMethod](act).then((item) => {
    let fragment = '';
    item.articles.map((news) => {
      const template = createTemplate(news);
      fragment += template;
    });
    spinnerRemove();
    cssStyle(document.body, {
      'padding-right': '0px',
    });
    container.insertAdjacentHTML('afterbegin', fragment);
  });
}

export default responseProcessing;
