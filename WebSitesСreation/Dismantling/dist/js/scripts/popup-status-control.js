// Принимает три параметра
// 1. Селектор самого popup который нужно открыть
// 2. Селекто закрытия popup. В нашем случае он убирает активный класс
// 3. Триггер-селектор, то есть кнопка на которую нажимается для открытия
function popupStatusControl(selector, closeSelector, triggerSelector, changeSericeTitle = false) {
  const popup = document.querySelector(selector);
  const closePopup = document.querySelector(closeSelector);
  const body = document.querySelector('body');
  const trigger = document.querySelectorAll(triggerSelector);

  const changePopupTitleInService = (event) => {
    // Path для Firefox
    const path = event.path || (event.composedPath && event.composedPath());
    const stateTitle = 'УЗНАТЬ СТОИМОСТЬ ДЕМОНТАЖА';

    const curentServiceItem = path[4];
    const getServiceTitle = curentServiceItem.querySelector('.service__item-title').textContent.trim();
    const skipFirstWord = (getServiceTitle.split(' ').slice(1).join(' ')).trim();
    const popupTitle = popup.querySelector('.popup__title');
    popupTitle.textContent = `${stateTitle} ${skipFirstWord.toUpperCase()}`;
  };

  const close = () => {
    popup.classList.remove('active');
    body.style.overflow = 'visible';
  };

  const closePopupEvent = ({ code }) => {
    if (code === 'Escape') {
      close();
      document.removeEventListener('keyup', closePopupEvent);
    }
  };

  const closePopupESC = () => {
    document.addEventListener('keyup', closePopupEvent);
  };

  const open = (event) => {
    if (changeSericeTitle) {
      changePopupTitleInService(event);
    }
    popup.classList.add('active');
    body.style.overflow = 'hidden';
    closePopupESC();
  };

  trigger.forEach((item) => item.addEventListener('click', open));
  closePopup.addEventListener('click', close);
}
popupStatusControl('.popup-call', '.popup-call .popup__close', 'button[data-event=request-call]');
popupStatusControl('.popup-file', '.popup-file .popup__close', 'button[data-event=attach-file]');
popupStatusControl('.popup-consultate', '.popup-consultate .popup__close', 'button[data-event=consultate]');
popupStatusControl('.popup-costing', '.popup-costing .popup__close', 'button[data-event=get-calculation', true);
popupStatusControl('.privacy-policy', '.privacy-policy__close', '.footer__privacy-policy');
