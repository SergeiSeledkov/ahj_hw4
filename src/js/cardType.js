// 0 - VISA
// 1 - MASTERCARD
// 2 - DISCOVER
// 3 - JCB
// 4 - DINNERS CLUB
// 5 - AMERICAN EXPRESS
// 6 - MIR

export default class CardType {
  constructor(inputValue) {
    this.inputValue = inputValue;
  }

  checkCardType() {
    const value = [...this.inputValue];
    let checkNum;

    if (value.length === 0) {
      return false;
    }

    if (value.length === 1) {
      checkNum = +value[0];

      if (checkNum === 4) {
        return 0;
      }
      return false;
    }

    if (value.length === 2) {
      checkNum = +(value[0] + value[1]);

      if (checkNum === 34 || checkNum === 37) {
        return 5;
      } if (checkNum === 36 || (checkNum >= 38 && checkNum <= 39)) {
        return 4;
      } if (checkNum >= 40 && checkNum <= 49) {
        return 0;
      }
      return false;
    }

    if (value.length === 3) {
      checkNum = +(value[0] + value[1] + value[2]);

      if (checkNum >= 644 && checkNum <= 659) {
        return 2;
      } if ((checkNum >= 340 && checkNum <= 349) || (checkNum >= 370 && checkNum <= 379)) {
        return 5;
      } if ((checkNum >= 360 && checkNum <= 369) || (checkNum >= 380 && checkNum <= 399)) {
        return 4;
      } if (checkNum >= 400 && checkNum <= 499) {
        return 0;
      }
      return false;
    }

    if (value.length >= 4) {
      checkNum = +(value[0] + value[1] + value[2] + value[3]);

      if (checkNum === 6011) {
        return 2;
      } if (checkNum >= 2221 && checkNum <= 2720) {
        return 1;
      } if (checkNum >= 3528 && checkNum <= 3589) {
        return 3;
      } if (checkNum >= 2200 && checkNum <= 2204) {
        return 6;
      } if (checkNum >= 6440 && checkNum <= 6599) {
        return 2;
      } if ((checkNum >= 3400 && checkNum <= 3499) || (checkNum >= 3700 && checkNum <= 3799)) {
        return 5;
      } if ((checkNum >= 3600 && checkNum <= 3699) || (checkNum >= 3800 && checkNum <= 3999)) {
        return 4;
      } if (checkNum >= 4000 && checkNum <= 4999) {
        return 0;
      }
      return false;
    }
    return null;
  }
}
