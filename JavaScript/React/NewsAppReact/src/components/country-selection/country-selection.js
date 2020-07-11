import React, { Component } from 'react';

import './country-selection.scss';

export default class CountrySelection extends Component {

  currentCounry = (event) => this.props.onChangeCountry(event.target.value);

  render() {
    return (
      <div className="country">
        <select 
          name="country-selector" 
          id="country-selector" 
          className="country-selector"
          onChange={this.currentCounry}>
          <option value="ru">Россия</option>
          <option value="us">США</option>
        </select>
      </div>
    )
  }
}