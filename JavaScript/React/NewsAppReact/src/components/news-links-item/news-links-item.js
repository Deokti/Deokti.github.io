import React from 'react';

import './news-links-item.scss';

const NewsLinksItem = ({name, label}) => {
  return (
    <span 
      className="nav-link" 
      data-cetegory={name}>
      {label}
    </span>
  );
}

export default NewsLinksItem;
