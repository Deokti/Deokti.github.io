const cssStyle = (element, styles = {}) => {
  Object.keys(styles)
    .map((style) => element.style[style] = styles[style]);
};

export default cssStyle;
