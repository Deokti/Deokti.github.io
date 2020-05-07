import http from '../https-service';
import config from '../config';

// Деструктуриация
const { NEWS_URL: url, API_KEY: apiKey } = config;

class ApiWorkingMethods {
    constructor(NEWS_URL, API_KEY) {
        this.NEWS_URL = NEWS_URL;
        this.API_KEY = API_KEY;
    }

    async TopHeadlines(category = 'general') {
        const getDataFromServer = await http.get(`${this.NEWS_URL}/top-headlines?country=ru&category=${category}&pageSize=100&apiKey=${this.API_KEY}`);
        return getDataFromServer;
    }

    async Everything(query) {
        const responseQuery = await http.get(`${this.NEWS_URL}/everything?q=${query}&apiKey=${this.API_KEY}`);
        return responseQuery;
    }
}
const apiWorkingMethods = new ApiWorkingMethods(url, apiKey);

export default apiWorkingMethods;
