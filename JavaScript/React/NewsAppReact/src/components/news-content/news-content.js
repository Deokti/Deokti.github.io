import React, { Component } from 'react';

import NewsServices from '../../services/news-services';
import RenderOfOneNewsItem from './render-of-one-news-item';
import Loading from '../loading';
import calculateScrollSize from '../calculate-scroll-size';

import './news-content.scss';


export default class NewsContent extends Component {
  newsServices = new NewsServices();

  state = {
    newsList: null,
    loading: true,
    paddingRight: calculateScrollSize(),
  }

  newsItems() {
    this.setState({ paddingRight: calculateScrollSize() });

    const { category } = this.props;
    if (!category) return false;
 
    this.newsServices.topHeadlines(category)
      .then(newsList => this.setState({ 
        newsList,
        loading: false,
        paddingRight: '0px'
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
    const viewNews = !viewLoading ? <RenderOfOneNewsItem array={newsList} /> : null;

    return (
      <ul style={{paddingRight}} className="news__wrapper ul-none d-flex j-content-between a-item-center flex-wrap">
        {viewLoading}
        {viewNews}
      </ul>
    );
  }
}
