import React, { Component } from 'react';

import NewsServices from '../../services/news-services';
import Loading from '../loading';

import './news-content.scss';

export default class NewsContent extends Component {
  newsServices = new NewsServices();

  state = {
    newsList: null,
    loading: true,
  }


  newsItems() {
    const { category } = this.props;
 
    this.newsServices.topHeadlines(category)
      .then(newsList => this.setState({ 
        newsList,
        loading: false
      }));
  }

  componentDidMount() {
    this.newsItems();
  }

  componentWillUpdate(prevProps) {
    // if (this.props.currentCategory !== prevProps.currentCategory) this.newsItems();
    
   
  }

  _limitCounterCharacters = (string, information) => {
    const infoList = {
      title: 'title',
      description: 'description',
      author: 'author',
    }
    
    if (infoList[information] === 'title') return string.substring(0, 55);  

    if (infoList[information] === 'description') {
      if (string === null) return 'Чтобы прочитать новость, перейдите на сайт, кликнув на заголовок.';
      return string.substring(0, 115) || ''; 
    }

    if (infoList[information] === 'author') {
      return string === null ? '' : string.substring(0, 25) || 'Источник неизвестен';
    }
    
    return string;
  };

  renderOfOneNewsItem(array) {
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
      
      return (
        <li className='news-item' key={id++}>
          <div className="news-item__img" style={{backgroundImage: "url(" + urlToImage + ")"}}></div>
          <div className="news-item__template">
            <ul className="news-item__information ul-none d-flex">
              <li className="news-item__person news-item__date">{publishedAt}</li>
                <li className="news-item__person news-item__user">{this._limitCounterCharacters(author, 'author')}</li>
            </ul>

            <div className="news-item__detailed">
              <h2 className="news-item__title">
                <a href={url} className="news-item__link" title={title}>{this._limitCounterCharacters(title, 'title')}</a>
              </h2> 
              <p className="news-item__description">{this._limitCounterCharacters(description, 'description')}</p>
            </div>
          </div>
        </li>
      );
    });
  };

  render() {  
    const { newsList, loading } = this.state;

    const viewLoading = loading ? <Loading /> : null;
    const viewNews = !viewLoading ? this.renderOfOneNewsItem(newsList) : null;

    return (
      <section className="news">
        <div className="container">
          <ul className="news__wrapper ul-none d-flex j-content-between a-item-center flex-wrap">
            {viewLoading}
            {viewNews}
          </ul>
        </div>
      </section>
    );
  }
}