// Принимает три параметра
// 1. Селектор самого popup который нужно открыть
// 2. Селекто закрытия popup. В нашем случае он убирает активный класс
// 3. Триггер-селектор, то есть кнопка на которую нажимается для открытия
function popupStatusControl(selector, closeSelector, triggerSelector) {
  const popup = document.querySelector(selector);
  const closePopup = document.querySelector(closeSelector);
  const body = document.querySelector('body');
  const trigger = document.querySelectorAll(triggerSelector);

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

  const open = () => {
    popup.classList.add('active');
    body.style.overflow = 'hidden';
    closePopupESC();
  };

  trigger.forEach((item) => item.addEventListener('click', open));
  closePopup.addEventListener('click', close);
}
popupStatusControl('.popup-call', '.popup__close', 'button[data-event=request-call]');
popupStatusControl('.popup-file', '.popup__close', 'button[data-event=attach-file]');
popupStatusControl('.popup-consultate', '.popup__close', 'button[data-event=consultate]');
popupStatusControl('.popup-costing', '.popup__close', 'button[data-event=get-calculation');
