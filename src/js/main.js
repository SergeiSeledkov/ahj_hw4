import CardType from './cardType';
import ChangeDom from './changeDom';
import CheckValidate from './checkValidate';

const inputField = document.querySelector('.container-form__input');
const validateButton = document.querySelector('.container-form__button');
const imageCard = document.querySelectorAll('.container-image__card');
const containerTrue = document.querySelector('.container-true');
const containerFalse = document.querySelector('.container-false');
const changeDom = new ChangeDom(imageCard, containerTrue, containerFalse);

inputField.addEventListener('input', () => {
  const cardType = new CardType(inputField.value);
  const returnCardType = cardType.checkCardType();

  if (returnCardType !== false) {
    changeDom.deleteOvarlay();
    changeDom.ovarlayImage(returnCardType);
  } else {
    changeDom.deleteOvarlay();
  }

  changeDom.removeTextValidation();
});

validateButton.addEventListener('click', (e) => {
  e.preventDefault();

  const checkValidate = new CheckValidate(inputField.value);

  if (checkValidate.luhnAlgorithm()) {
    changeDom.addTextValidation(true);
  } else {
    changeDom.addTextValidation(false);
  }
});
