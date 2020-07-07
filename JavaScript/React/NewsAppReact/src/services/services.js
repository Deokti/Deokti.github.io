import { httpService } from './http-service';
import { config } from './config-services';

export default class Services {
  constructor() {
    this.KEY = config.API_KEY;
    this.URL = config.API_URL;
  }

  async topHeadlines(category) {
    const response = await httpService.get(`${this.URL}/top-headlines?country=ru&category=${category}&pageSize=100&apiKey=${this.KEY}`);
    console.log(response)
    if (response.status === 'ok') return response.articles.map(this._transformNews);
    else throw new Error(`
      EN: Error! Server status in topHeadlines: ${response.status}, 
      RU: Ошибка! Статус сервера в topHeadlines: ${response.status}`)
  }

  async everything(query) {
    const responseQuery = await httpService.get(`${this.URL}/everything?q=${query}&pageSize=100&apiKey=${this.KEY}`);
    if (responseQuery.status === 'ok') return responseQuery.articles;
    else throw new Error(`
      EN: Error! Server status in everything: ${responseQuery.status}, 
      RU: Ошибка! Статус сервера в everything: ${responseQuery.status}`)
  }

  _transformNews = (newsList) => {
    return {
      author: (newsList.author === null ? newsList.source.name : newsList.author),
      title: newsList.title, 
      description: newsList.description,
      url: newsList.url,
      urlToImage: newsList.urlToImage,
      publishedAt: this._transfrormPublishedAt(newsList.publishedAt),
    }
  };

  _transfrormPublishedAt = (date) => {
    const monthhList = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    const getCurrentDate = new Date(date);

    const getYear = getCurrentDate.getFullYear();
    const getMonth = monthhList[getCurrentDate.getMonth() + 1];
    const getDay = getCurrentDate.getDate();
    
    return `${getMonth} ${getDay}, ${getYear}`;
  };

 
}
