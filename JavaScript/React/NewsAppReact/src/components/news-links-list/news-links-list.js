import React, { Component } from 'react';

import './news-links-list.scss';

export default class NewsLinksLinst extends Component {

  categoryLinks = [
    { name: 'general', label: 'Общие' },
    { name: 'sports', label: 'Спорт' },
    { name: 'entertainment', label: 'Развлечения' },
    { name: 'technology', label: 'Технологии' },
    { name: 'science', label: 'Наука' },
    { name: 'business', label: 'Бизнес' }
  ]

  fdsadsa = (event) => {
    event.preventDefault();
    this.props.onCategory(event.target.dataset.category);
  };


  
  render() {    
    const createButtons = this.categoryLinks.map(({name, label}) => {
      return (
        <li className="nav-item" key={name}>
          <a href={name} 
            data-category={name} 
            onClick={this.fdsadsa}
            className="nav-link">{label}</a>
        </li>
      );
    });

    return (
      <ul className="nav-list d-flex ul-none a-item-center">
         {createButtons}
      </ul>
    );
  }
};