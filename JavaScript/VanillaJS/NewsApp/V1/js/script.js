// При нажатии на "Новостное приложение" страница перезагружается
document.querySelector('.nav-bar__link').addEventListener('click', () => {
    location.reload();
});

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
        }   
    }
}


// Модуль инициализации протокола HTTP
const http = customHttp();

//Создание самовызывающейся функцию-программу,
// которая активируется при загрузке DOM
const newService = (function () {
    //API ключ пользователя
    const apiKey = '7b49a3a1f5dd40cdbd91ece9d0c9b625';
    // APi адресс для получения данных со страницы
    // const ApiURL = 'https://newsapi.org/v2',
    const ApiURL = 'https://news-api-v2.herokuapp.com';

    // Возвращаем два объекта
    return {
        // Первый объект для выбора страны и вывода новостей согласну ключю пользователя
        TopHeadlines(country = 'ru', cb, category = 'science') {
            // http.get(`${ApiURL}/top-headlines?country=${country}&apiKey=${apiKey}`, cb)
            http.get(`${ApiURL}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, cb)
        },
        //Второй объект создан для будущего поиска по новостям
        Everything(query, cb) {
            http.get(`${ApiURL}/everything?q=${query}&apiKey=${apiKey}`, cb);
        }
    }
})();


//  Инизиализация селектов, исходящие и материалайза
document.addEventListener('DOMContentLoaded', function () {
    loadNews();
});


// Получаем форму для навешивания на неё события, 
// и элементы формы для поиска новостей
const mainForm          = document.forms['nav-form'];
const selectCountry     = mainForm.elements['country'];
const selectCategory    = mainForm.elements['category']
const searchForm        = mainForm.elements['search'];
console.log();

mainForm.addEventListener('submit', event => {
    event.preventDefault();
    loadNews();
});

// Активация функции по создании новостей, 
// при переключении СТРАНЫ
selectCountry.addEventListener('change', () => {
    loadNews();
})
// Активация функции по создании новостей, 
// при переключении КАТЕГОРИИ
selectCategory.addEventListener('change', () => {
    loadNews();
})

// Функция создания базового вывода новостей
function loadNews() {
    // При поиске активируется прелоадер
    showPreloader();

    // Обращаемся к элементам формы и вытаскиваем "значение"
    const country = selectCountry.value;
    const search = searchForm.value;
    const category = selectCategory.value;
    

    //Если в поисковике ничего нет, 
    //показываем базовые новости 
    if (!search) {
        //Обращаемся к созданной функции выше и методу этой функции
        newService.TopHeadlines(country, handlingNews, category);
    } 

    // Если в поисковой строке что-то записано, то
    // поиск будет происходить иходя из введённого
    else {
        newService.Everything(search, handlingNews);
    }
}

// Фукция, которая отрабатывает при получении новостей от сервера
function handlingNews(error, response) {
    removePreloader();
    renderNews(response.articles);
}

// Функция, которая занимается обработкой пришедших новостей,
// которая получает новости, и что-то с ними делает
function renderNews(news) {
    // Контейнер, в который затем будет запихиваться 
    const newsContainer = document.querySelector('.news-container .news-wrapper');

    // Если в контейнере были дочерние элементы, 
    // то запустить функцию и передать в него контейнер
    if (newsContainer.children.length) {
        oldNewsRemove(newsContainer);
    }
    
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
                        <img src="${urlToImage || 'img/news.jpg'}" alt="">
                    </div>
                    <div class="news-inner__detailed">
                        <h2 class="news-inner__title">${title || ''}</h2>
                        <h5 class="news-inner__autor">${author || ''}</h5>
                        <p class="news-inner__description">${description || ''}</p>
                    </div>
                </div>
                <div class="news-inner__combine-two">
                    <p class="news-inner__data">${publishedAt}</p>
                    <a href="${url}" class="button-link" target="_black">
                        <button class="button button_news">Читать новость!</button>
                    </a>
                </div>
                
            </div>
        </div>`
}

// Очищения контейнера для наполнения новых новостей
// для того, чтобы новости не смешивались
function oldNewsRemove(container) {
    let child = container.lastElementChild;

    // Если дочерние элементы присутвуются, 
    // пройтись по нему циклом и удалить их
    while (child) {
        container.removeChild(child);

        // И перезаписывает переменную, чтобы
        // не допустить бесконечного цикла
        child = container.lastElementChild;
    }
}


// Прелоадер, который будет появляться
// при поиске новостей
function showPreloader() {
    document.body.insertAdjacentHTML('afterbegin', 
    `
        <div class="preloader">
            <div class="preloader__line"></div>
        </div>
    `);
}

// Прелоадер пропадает после того, 
// как новости были найдены и показы
function removePreloader() {
    // Ищем прелоадер 
    const isPreloader = document.querySelector('.preloader');

    //И если он присутствует, удалить
    if (isPreloader) {
        isPreloader.remove();
    }
}
