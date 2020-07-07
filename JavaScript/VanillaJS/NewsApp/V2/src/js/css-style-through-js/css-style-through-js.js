const cssStyle = (element, styles = {}) => {
  Object.keys(styles)
    .map((key) => element.style[key] = styles[key]);
};

export default cssStyle;
