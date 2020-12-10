(function () {
  const serviceList = document.querySelector('.service__list');
  const serviceItem = serviceList.querySelectorAll('.service__item');

  const ifItem = (event) => event.target.classList.contains('service__item');
  const notActiveItem = (event) => !event.target.classList.contains('service__item--active')
  const stateClass = (event, action) => event.target.classList[action]('service__item--active');
  const removeClass = () => serviceItem.forEach(item => item.classList.remove('service__item--active'));

  const eventServiceItem = (event) => {
    if (ifItem(event) && notActiveItem(event)) {
      removeClass();
      stateClass(event, 'add');
      document.addEventListener('click', onCloseItemInfo);
      return false;
    }
    stateClass(event, 'remove');
  }

  const onCloseItemInfo = (event) => {
    if (!event.path.includes(serviceList)) {
      removeClass();
      document.removeEventListener('click', onCloseItemInfo);
    };
  }

  serviceList.addEventListener('click', eventServiceItem);
}());