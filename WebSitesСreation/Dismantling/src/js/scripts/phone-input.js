// Если в input с телефоном есть значение, добавить класс 
// Он скрывает span с текстом и фоновым изображанием
(function() {
  const phoneInput = document.querySelectorAll('.phone-input__input');

  const inputWrite = ({ target }) => {
    const value = (target.value).trim();

    if (value) {
      target.classList.add('placeholder-hide');
      return false;
    }

    target.classList.remove('placeholder-hide');
  }

  phoneInput.forEach((input) => input.addEventListener('input', inputWrite));
}());

