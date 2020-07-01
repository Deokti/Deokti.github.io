import React, { Component } from 'react';

import NewsLinksLinst from '../news-links-list';
import SearchNewsButtons from '../search-news-buttons';

import './header-app.scss';

export default class HeaderApp extends Component {
  

  render() {
    const { onCategory } = this.props;

    return (
      <header className='header'>
        <div className='container'>
          <div className="header__wrapper d-flex a-item-center">
            {/* Заголовок для страницы */}
            <h1 className="header-title"><a className="header-title-link" href="./index.html">НОВОСТИ</a></h1>

            {/* Навигация отдельно в item-list */}
            <nav className="nav m-auto">
              <NewsLinksLinst onCategory={onCategory} />
            </nav>


            {/* Обрамляем часть секции для переноса в правую сторону */}
            <div className="detailed-container d-flex">
              <SearchNewsButtons />
            </div>
          </div>
        </div>
      </header>
    )
  }
}