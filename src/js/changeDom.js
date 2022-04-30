export default class ChangeDom {
  constructor(imageCard, containerTrue, containerFalse) {
    this.imageCard = imageCard;
    this.containerTrue = containerTrue;
    this.containerFalse = containerFalse;
  }

  ovarlayImage(position) {
    const imageArray = [...this.imageCard];

    imageArray.splice(position, 1);

    for (const i of imageArray) {
      i.classList.add('overlay');
    }
  }

  deleteOvarlay() {
    const imageArray = [...this.imageCard];

    for (const i of imageArray) {
      if (i.classList.contains('overlay')) {
        i.classList.remove('overlay');
      }
    }
  }

  addTextValidation(resultValidation) {
    if (resultValidation) {
      if (!this.containerFalse.classList.contains('hidden')) {
        this.containerFalse.classList.add('hidden');
      }

      this.containerTrue.classList.remove('hidden');
    }

    if (!resultValidation) {
      if (!this.containerTrue.classList.contains('hidden')) {
        this.containerTrue.classList.add('hidden');
      }
      this.containerFalse.classList.remove('hidden');
    }
  }

  removeTextValidation() {
    if (!this.containerTrue.classList.contains('hidden')) {
      this.containerTrue.classList.add('hidden');
    }
    if (!this.containerFalse.classList.contains('hidden')) {
      this.containerFalse.classList.add('hidden');
    }
  }
}
