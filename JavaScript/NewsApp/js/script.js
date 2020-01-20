// Создание HTTP модуля
function customHttp() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                xhr.send();
            } catch (error) {
                cb(error);
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    });
                }

                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        },
    };
}

// Модуль инициализации протокола HTTP
const http = customHttp();


//Создание самовызывающейся функцию-программу,
// которая активируется при загрузке DOM
const newService = (function () {
    //API ключ пользователя
    const apiKey = '7b49a3a1f5dd40cdbd91ece9d0c9b625';
    // APi адресс для получения данных со страницы
    const ApiURL = 'https://newsapi.org/v2';

    // Возвращаем два объекта
    return {
        // Первый объект для выбора страны и вывода новостей согласну ключю пользователя
        TopHeadlines(country = 'ru', cb) {
            http.get(`${ApiURL}/top-headlines?country=${country}&apiKey=${apiKey}`, cb)
        },
        // Второй объект создан для будущего поиска по новостям
        Everything(query, cb) {
            http.get(`${ApiURL}/everything?q=${query}&apiKey=${apiKey}`, cb);
        }
    }
})();


//  Инизиализация селектов, исходящие и материалайза
document.addEventListener('DOMContentLoaded', function () {
    loadNews();
});

// Функция создания базового вывода новостей
function loadNews() {
    //Обращаемся к созданной функции выше и методу этой функции
    newService.TopHeadlines('ru', handlingNews);
}

// Фукция, которая отрабатывает при получении новостей от сервера
function handlingNews(error, response) {
    //console.log(response.articles);
    
    renderNews(response.articles);
}

// Функция, которая занимается обработкой пришедших новостей,
// которая получает новости, и что-то с ними делает
function renderNews(news) {
    // Контейнер, в который затем будет запихиваться 
    const newsContainer = document.querySelector('.news-container .news-wrapper');
    
    // Создаём фрагмент, для его заполнения и для будущего ускорения загрузки
    let fragment = '';

    //Перебираем массив и на одной итерации получаем одну новость
    // Но обработка проиходит только после создания, которое будет в 
    news.forEach(newsItem => {
        const elementNewsItem = creatingOneNews(newsItem);
        fragment += elementNewsItem;
    });

    // Вставляет элемент на страницу
    newsContainer.insertAdjacentHTML('afterbegin', fragment);
}

function creatingOneNews({urlToImage, title, author, description, publishedAt, url}) {
    return ` <div class="news-inner">
            <div class="news-inner__direction">
                <div class="news-inner__combine-one">
                    <div class="news-inner__img">
                        <img src="${urlToImage}" alt="">
                    </div>
                    <div class="news-inner__detailed">
                        <h2 class="news-inner__title">${title || ''}</h2>
                        <h5 class="news-inner__autor">${author || ''}</h5>
                        <p class="news-inner__description">${description || ''}</p>
                    </div>
                </div>
                <div class="news-inner__combine-two">
                    <p class="news-inner__data">${publishedAt}</p>
                    <a href="${url}" class="button-link">
                        <button class="button button_news">Читать новость!</button>
                    </a>
                </div>
                
            </div>
        </div>`
}