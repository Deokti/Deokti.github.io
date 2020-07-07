import React from 'react';

import _limitCounterCharacters from './_limitCounterCharacters';
import defaultImage from '../../images/news-img.jpg';

import './render-template-one-news.scss';

const RenderTemplateOneNews = ({array}) => {
  if (!array) return false;
  let id = 0;

  return array.map(({
    author,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
  }) => {
    const checkUrlToImage = urlToImage === null ? defaultImage : urlToImage;

    return (
      <li className='news-item' key={id++}>
        <div className="news-item__img" style={{backgroundImage: `url("${checkUrlToImage}")`}}></div>
        <div className="news-item__template">
          <ul className="news-item__information ul-none d-flex">
            <li className="news-item__person news-item__date">{publishedAt}</li>
              <li className="news-item__person news-item__user">{_limitCounterCharacters(author, 'author')}</li>
          </ul>

          <div className="news-item__detailed">
            <h2 className="news-item__title">
              <a 
                href={url} 
                className="news-item__link" 
                target="blank" 
                title={title}>
                  {_limitCounterCharacters(title, 'title')}
              </a>
            </h2> 
            <p className="news-item__description">{_limitCounterCharacters(description, 'description')}...</p>
          </div>
        </div>
      </li>
    );
  });
};

export default RenderTemplateOneNews;