const learnCurrentDate = () => {
  const currentDay = document.querySelector('.current-day');
  const currentMonth = document.querySelector('.current-mounth');
  const currentYear = document.querySelector('.current-year');

  const currentDate = new Date();
  const day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();
  const month = currentDate.getMonth() + 1 < 10 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  currentDay.textContent = day;
  currentMonth.textContent = month;
  currentYear.textContent = year;
};

export default learnCurrentDate;
