import React, { Component } from 'react';

import Services from '../../services/services';
import RenderTemplateOneNews from '../render-template-one-news';
import Loading from '../loading';
import calculateScrollSize from '../calculate-scroll-size';

import './news-content.scss';


export default class NewsContent extends Component {
  services = new Services();

  state = {
    newsList: null,
    loading: true,
    paddingRight: 0,
  }

  newsItems() {
    this.setState({ paddingRight: calculateScrollSize() });

    const { category } = this.props;
    if (!category) return false;
 
    this.services.topHeadlines(category)
      .then(newsList => this.setState({ 
        newsList,
        loading: false,
        paddingRight: 0
      }
    ));
  }

  componentDidMount() { this.newsItems(); }
  componentWillUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      setTimeout(() => {
        this.setState({ loading: true })
        this.newsItems();
      }, 200)
    }
  }

  render() {  
    const { newsList, loading, paddingRight } = this.state;

    const viewLoading = loading ? <Loading /> : null;
    const viewNews = !viewLoading ? <RenderTemplateOneNews array={newsList} /> : null;
    document.body.style.paddingRight = `${paddingRight}px`;
   
    return (
      <ul style={{paddingRight}} className="news__wrapper ul-none d-flex j-content-between a-item-center flex-wrap">
        {viewLoading}
        {viewNews}
      </ul>
    );
  }
}
