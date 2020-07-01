import React, { Component } from 'react';

import HeaderApp from '../header-app';
import NewsContent from '../news-content';

import '../gloval-style/style.scss';

export default class App extends Component {
  state = {
    category: 'general',
  }

  onCategory = (newCategory) => {
    this.setState(({category}) => {
      return {
        category: newCategory
      }
    });
    console.log(newCategory)
  };

  render() {
    const { category } = this.state;

    return (
      <React.Fragment>
        <HeaderApp onCategory={this.onCategory} />
        <NewsContent category={category} />
      </React.Fragment>
    )
  }
}