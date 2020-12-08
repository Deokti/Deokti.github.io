(function () {
  const serviceList = document.querySelector('.service__list');
  const serviceItem = serviceList.querySelectorAll('.service__item');

  const ifItem = (event) => event.target.classList.contains('service__item');
  const stateClass = (event, action) => event.target.classList[action]('service__item--active');
  const removeClass = () => serviceItem.forEach(item => item.classList.remove('service__item--active'));

  const eventServiceItem = (event) => {
    if (ifItem(event) && !event.target.classList.contains('service__item--active')) {
      removeClass();
      stateClass(event, 'add');
      return false;
    }
    stateClass(event, 'remove');
  }

  const onCloseItemInfo = (event) => {
    if (!event.path.includes(serviceList)) removeClass();
  }

  serviceList.addEventListener('click', eventServiceItem);
  document.addEventListener('click', onCloseItemInfo)
}());