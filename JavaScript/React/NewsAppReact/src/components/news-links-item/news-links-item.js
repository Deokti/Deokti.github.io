import React from 'react';

import './news-links-item.scss';

const NewsLinksItem = ({name, label, activeClass}) => {
  return (
    <span 
      className={activeClass}   
      data-cetegory={name}>
      {label}
    </span>
  );
}

export default NewsLinksItem;
