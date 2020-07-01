import React, { Component } from 'react';

import NewsServices from '../../services/news-services';
import RenderOfOneNewsItem from './render-of-one-news-item';
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
    if (!category) return false;
 
    this.newsServices.topHeadlines(category)
      .then(newsList => this.setState({ 
        newsList,
        loading: false
      }
    ));
  }

  componentDidMount() { this.newsItems(); }
  componentWillUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.setState({ loading: true })
      this.newsItems();
    }
    // console.log(this.props.category !== prevProps.category)


  }

  render() {  
    const { newsList, loading } = this.state;

    const viewLoading = loading ? <Loading /> : null;
    const viewNews = !viewLoading ? <RenderOfOneNewsItem array={newsList} /> : null;

    return (
      <ul className="news__wrapper ul-none d-flex j-content-between a-item-center flex-wrap">
        {viewLoading}
        {viewNews}
      </ul>
    );
  }
}
