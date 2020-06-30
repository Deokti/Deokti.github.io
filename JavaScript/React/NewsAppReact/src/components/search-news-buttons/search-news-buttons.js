import React, { Component } from 'react';

import './search-news-buttons.scss';

export default class SearchNewsButtons extends Component {

  state = {
    show: false,
  }

  // Измеменят state, от которого в совю очередь
  // решается какой класс добавлять, 
  // тот который ответвает панель или закрывает
  searhShow = () => this.setState({ show: true });
  searhHide = () => this.setState({ show: false });

  render() {
    const { show } = this.state;

    const stateSeachPanel = !show ? 'search-hide' : 'search-show';

    return (
      <React.Fragment>
        <button className="open-search" onClick={this.searhShow}>
          <svg width="20" height="20" viewBox="0 0 15 15" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9084 14.0247L10.5511 9.66728C11.3775 8.64696 11.875 7.34981 11.875 5.93752C11.875 2.66359 9.21142 0 5.93749 0C2.66356 0 0 2.66359 0 5.93752C0 9.21145 2.66359 11.875 5.93752 11.875C7.34981 11.875 8.64696 11.3775 9.66729 10.5511L14.0247 14.9085C14.1468 15.0305 14.3446 15.0305 14.4666 14.9085L14.9085 14.4666C15.0305 14.3446 15.0305 14.1467 14.9084 14.0247ZM5.93752 10.625C3.35268 10.625 1.25001 8.52236 1.25001 5.93752C1.25001 3.35268 3.35268 1.25001 5.93752 1.25001C8.52236 1.25001 10.625 3.35268 10.625 5.93752C10.625 8.52236 8.52236 10.625 5.93752 10.625Z" />
          </svg>
        </button>

        <form className={`search ${stateSeachPanel}`}  name="search">
          <input type="text" className="search-input" name="search-input" />
          <span className="search-cross" onClick={this.searhHide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492">
              <path d="M300.19 246L484.14 62.04A26.77 26.77 0 00492 43.02c0-7.21-2.8-13.98-7.86-19.03L468.02 7.87A26.69 26.69 0 00448.98.02c-7.2 0-13.95 2.78-19.02 7.85L246.01 191.82 62.05 7.87A26.66 26.66 0 0043.02.02C35.82.02 29.06 2.8 24 7.87L7.87 24a26.93 26.93 0 000 38.05L191.83 246 7.87 429.95a26.75 26.75 0 00-7.85 19.03c0 7.2 2.79 13.96 7.85 19.03L24 484.13a26.68 26.68 0 0019.02 7.85c7.2 0 13.96-2.78 19.02-7.85L246 300.18l183.96 183.95a26.7 26.7 0 0019.02 7.85 26.7 26.7 0 0019.04-7.85L484.14 468a26.74 26.74 0 007.85-19.03c0-7.2-2.8-13.96-7.85-19.02L300.19 246z"/>
            </svg>
          </span>
        </form>
      </React.Fragment>
    );
  }
}