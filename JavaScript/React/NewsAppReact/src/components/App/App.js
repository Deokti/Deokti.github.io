import React, { Component } from 'react';

import HeaderApp from '../header-app';
import NewsContent from '../news-content';

import '../gloval-style/style.scss';

export default class App extends Component {
  state = {
    category: 'general',
  }

  onSelectedCategpry = (category) => {
    
    console.log(this.state.category)
  };

  render() {
    return (
      <React.Fragment>
        <HeaderApp onSelectedCategpry={this.onSelectedCategpry} />
        <NewsContent currentCategory={this.state.category} />
      </React.Fragment>
    )
  }
}