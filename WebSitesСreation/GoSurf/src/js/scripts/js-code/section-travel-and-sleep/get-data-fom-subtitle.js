function getDataFromSubtitle(path, nameDataAttibute) {
  const subtitle = document.querySelector(path).querySelector('.subtitle--main');
  return subtitle.getAttribute(nameDataAttibute);
}

export default getDataFromSubtitle;
