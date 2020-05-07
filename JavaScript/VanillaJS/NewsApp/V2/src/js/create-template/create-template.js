import convertionDate from '../convertion-date';

const createTemplate = ({
    author,
    title,
    description,
    url,
    urlToImage,
    source,
    publishedAt,
}) => {
    if (title.includes('Ð')) return '';
    if (title.includes('�')) return '';

    const limitTitle = title ? `${title.substring(0, 55)}...` : '';
    const checkTitle = limitTitle.includes('Ð', '�') ? '' : limitTitle;

    const limitDescription = description ? `${description.substring(0, 115)}...` : '';
    const checkDescription = limitDescription.includes('Ð') ? '' : limitDescription;
    const checkDescriptionMark = checkDescription.includes('�') ? '' : checkDescription;

    const limitAuthor = author ? author.substring(0, 25) : 'Неизвестно';
    const lititSource = (source.name).substring(0, 15);

    const toogleImg = urlToImage || '../../img/news-img.jpg';
    return `
        <!-- Структура одной новости -->
        <li class="news-item">
            <img src="${toogleImg}" alt="img" class="news-item__img">
            <div class="news-item__template">
                <!-- Дата написания новости и имя человека, который её написал -->
                <ul class="news-item__information ul-none d-flex">
                    <li class="news-item__person news-item__date">${convertionDate(publishedAt)}</li>
                    <li class="news-item__person news-item__user">${limitAuthor || lititSource}</li>
                </ul>

                <!-- Информация о самой новости и её подробности -->
                <div class="news-item__detailed">
                    <!-- Заголовок-ссылка -->
                    <h2 class="news-item__title"><a class="news-item__link" href="${url}" target="_blank">${checkTitle}</a></h2>
                    <!-- Подробности -->
                    <p class="news-item__description">${checkDescriptionMark}</p>
                </div>
            </div>
        </li>
        <!-- Конец структуры -->
    `;
};
export default createTemplate;
