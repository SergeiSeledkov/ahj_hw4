import CardType from './cardType';
import ChangeDom from './changeDom';
import CheckValidate from './checkValidate';

const inputField = document.querySelector('.container-form__input');
const validateButton = document.querySelector('.container-form__button');

inputField.addEventListener('input', () => {
  const cardType = new CardType(inputField.value);
  const returnCardType = cardType.checkCardType();
  const changeDom = new ChangeDom(returnCardType);

  if (returnCardType !== false) {
    changeDom.deleteOvarlay();
    changeDom.ovarlayImage();
  } else {
    changeDom.deleteOvarlay();
  }

  changeDom.removeTextValidation();
});

validateButton.addEventListener('click', (e) => {
  e.preventDefault();

  const checkValidate = new CheckValidate(inputField.value);
  const changeDom = new ChangeDom();

  if (checkValidate.luhnAlgorithm()) {
    changeDom.addTextValidation(true);
  } else {
    changeDom.addTextValidation(false);
  }
});
