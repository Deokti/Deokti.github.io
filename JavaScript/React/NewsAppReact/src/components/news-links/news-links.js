import React, { Component } from 'react';

import NewsLinksItem from '../news-links-item';

import './news-links.scss';

export default class NewsLinks extends Component {
  categoryLinks = [
    { name: 'general', label: 'Общие' },
    { name: 'sports', label: 'Спорт' },
    { name: 'entertainment', label: 'Развлечения' },
    { name: 'technology', label: 'Технологии' },
    { name: 'science', label: 'Наука' },
    { name: 'business', label: 'Бизнес' }
  ]

  
  render() {
    const { onChangeCategory, checkCurrentCategory } = this.props;
 
    const createButtons = this.categoryLinks.map(({name, label}) => {
      const addClassOfActive = checkCurrentCategory === name ? 
      'nav-link-active' : '';

      return (
        <li className="nav-item" key={name} onClick={() => onChangeCategory(name)}>
          <NewsLinksItem 
            activeClass={`nav-link ${addClassOfActive}`}
            name={name} 
            label={label} 
          />
        </li>
      )
    });

    return(
      <ul className="nav-list d-flex ul-none a-item-center">
        {createButtons}
      </ul>
    );
  }
}