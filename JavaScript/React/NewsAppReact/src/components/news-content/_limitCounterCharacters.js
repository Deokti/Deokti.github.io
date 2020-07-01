const _limitCounterCharacters = (string, information) => {
  const infoList = {
    title: 'title',
    description: 'description',
    author: 'author',
  }
  
  if (infoList[information] === 'title') return string.substring(0, 55);  

  if (infoList[information] === 'description') {
    if (string === null) return 'Чтобы прочитать новость, перейдите на сайт, кликнув на заголовок.';
    return string.substring(0, 115) || ''; 
  }

  if (infoList[information] === 'author') {
    return string === null ? '' : string.substring(0, 25) || 'Источник неизвестен';
  }
  
  return string;
};

export default _limitCounterCharacters;