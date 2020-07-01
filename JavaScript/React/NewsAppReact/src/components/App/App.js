import React, { Component } from 'react';

import NewsLinks from '../news-links';
import SearchNewsButtons from '../search-news-buttons';
import NewsContent from '../news-content';

import '../gloval-style/style.scss';
import './App.scss';

export default class App extends Component {
  state = {
    category: 'general',
  }


  componentDidUpdate = () => {
    
  }

  onChangeCategory = (category) => {
    this.setState((state) => {
      return { category } 
    });
    console.log(category)
    console.log(this.state)
  }

  render() {
    const { category } = this.state;

    return (
      <React.Fragment>
        <header className='header'>
          <div className='container'>
            <div className="header__wrapper d-flex a-item-center">
              <h1 className="header-title"><a className="header-title-link" href="./index.html">НОВОСТИ</a></h1>

               {/* Навигация отдельно в item-list */}
               <nav className="nav m-auto">
                  <NewsLinks onChangeCategory={(name) => this.onChangeCategory(name)} />
               </nav>

              {/* Обрамляем часть секции для переноса в правую сторону */}
              <div className="detailed-container d-flex">
                <SearchNewsButtons />
              </div>
            </div>

          </div>
        </header>

        <section className="news">
          <div className="container">
            <NewsContent category={category}  />
          </div>
        </section>
      </React.Fragment>
    )
  }
}