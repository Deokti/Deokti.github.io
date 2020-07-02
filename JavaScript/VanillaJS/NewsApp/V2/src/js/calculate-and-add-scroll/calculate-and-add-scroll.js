import cssStyle from '../css-style-through-js';

const calculateAndAddScroll = () => {
  const div = document.createElement('div');
  cssStyle(div, {
    width: '50px',
    height: '50px',
    'overflow-y': 'scroll',
    visibility: 'hidden',
  });
  document.body.appendChild(div);

  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

export default calculateAndAddScroll;
