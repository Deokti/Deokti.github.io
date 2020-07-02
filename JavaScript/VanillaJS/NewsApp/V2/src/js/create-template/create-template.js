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

  const checkAutor = author === null ? (source.name || source.id) : author;
  const limitAuthor = checkAutor ? checkAutor.substring(0, 25) : 'Источник неизвестен';

  const toogleImg = urlToImage || '../../img/news-img.jpg';
  // <!-- Структура одной новости -->
  return `
    
    <li class="news-item">
        <div style="background-image: url('${toogleImg}');" alt="img" class="news-item__img"></div>
        <div class="news-item__template">
            <!-- Дата написания новости и имя человека, который её написал -->
            <ul class="news-item__information ul-none d-flex">
                <li class="news-item__person news-item__date">${convertionDate(publishedAt)}</li>
                <li class="news-item__person news-item__user">${limitAuthor}</li>
            </ul>

            <div class="news-item__detailed">
                <!-- Заголовок-ссылка -->
                <h2 class="news-item__title">
                  <a 
                    class="news-item__link" 
                    href="${url}" 
                    target="_blank" title="${title}">
                    ${checkTitle}
                  </a>
                </h2>
                <p class="news-item__description">${checkDescriptionMark}</p>
            </div>
        </div>
    </li>
    `;
};
export default createTemplate;
