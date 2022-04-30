export default class ChangeDom {
  constructor(position) {
    this.position = position;
  }

  ovarlayImage() {
    const imageArray = [...document.querySelectorAll('.container-image__card')];

    imageArray.splice(this.position, 1);

    for (const i of imageArray) {
      i.classList.add('overlay');
    }
  }

  deleteOvarlay() {
    const imageArray = [...document.querySelectorAll('.container-image__card')];

    for (const i of imageArray) {
      if (i.classList.contains('overlay')) {
        i.classList.remove('overlay');
      }
    }
  }

  addTextValidation(resultValidation) {
    const containerTrue = document.querySelector('.container-true');
    const containerFalse = document.querySelector('.container-false');

    if (resultValidation) {
      if (!containerFalse.classList.contains('hidden')) {
        containerFalse.classList.add('hidden');
      }

      containerTrue.classList.remove('hidden');
    }

    if (!resultValidation) {
      if (!containerTrue.classList.contains('hidden')) {
        containerTrue.classList.add('hidden');
      }
      containerFalse.classList.remove('hidden');
    }

    // this.position = -1;
  }

  removeTextValidation() {
    const containerTrue = document.querySelector('.container-true');
    const containerFalse = document.querySelector('.container-false');

    if (!containerTrue.classList.contains('hidden')) {
      containerTrue.classList.add('hidden');
    }
    if (!containerFalse.classList.contains('hidden')) {
      containerFalse.classList.add('hidden');
    }

    // this.position = -1;
  }
}
