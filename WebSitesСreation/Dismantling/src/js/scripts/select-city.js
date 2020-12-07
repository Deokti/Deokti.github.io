(function () {
  const cityList = document.querySelector('[data-list=сities]');
  const currentCity = document.querySelector('[data-list=city]');
  cityList.addEventListener('click', (event) => {
    if (event.target.nodeName === "LI") {
      const value = event.target.textContent;
      currentCity.textContent = value;
    }
  });
}());
