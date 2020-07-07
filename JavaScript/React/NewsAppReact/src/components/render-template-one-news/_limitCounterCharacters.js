const deleteCommasAndSpace = (str) => (str).replace(/,\s*$/, "").trim()

const _limitCounterCharacters = (string, information) => {
  const infoList = {
    title: 'title',
    description: 'description',
    author: 'author',
  }

  if (infoList[information] === 'title') return deleteCommasAndSpace(string.substring(0, 55));  

  if (infoList[information] === 'description') {
    if (string === null) return 'Чтобы прочитать новость, перейдите на сайт, кликнув на заголовок.';
    return deleteCommasAndSpace(string.substring(0, 105) || ''); 
  }

  if (infoList[information] === 'author') {
    return string === null ? '' : deleteCommasAndSpace(string.substring(0, 25) || 'Источник неизвестен');
  }
  
  return string;
};

export default _limitCounterCharacters;