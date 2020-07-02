const convertionDate = (desiredDate) => {
  const monthBase = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']; // +1

  const createDate = new Date(desiredDate);
  const year = createDate.getFullYear();
  const month = createDate.getMonth();
  const day = createDate.getDate();
  const dateString = `${monthBase[month]} ${day}, ${year}`;

  return dateString;
};

export default convertionDate;
