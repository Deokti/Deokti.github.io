// Если в input с телефоном есть значение, добавить класс 
// Он скрывает span с текстом и фоновым изображанием
(function() {
  const headerFormInput = document.querySelector('.header-form__input-write');

  const headerInput = (event) => {
    const value = (event.target.value).trim();

    if (value) {
      headerFormInput.classList.add('placeholder-hide');
      return false;
    } 

    headerFormInput.classList.remove('placeholder-hide');
  }

  headerFormInput.addEventListener('input', headerInput);
}());

