import NewsServices from './services/_news-services';

new NewsServices().topHeadlines()
  .then(response => console.log(response));