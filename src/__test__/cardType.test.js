// 0 - VISA
// 1 - MASTERCARD
// 2 - DISCOVER
// 3 - JCB
// 4 - DINNERS CLUB
// 5 - AMERICAN EXPRESS
// 6 - MIR

import CardType from '../js/cardType';

test('check VISA card', () => {
  const cardNumber = '4539828277607009955';
  const cardType = new CardType(cardNumber);

  expect(cardType.checkCardType()).toBe(0);
});

test('check MASTERCARD card', () => {
  const cardNumber = '2720991798067265';
  const cardType = new CardType(cardNumber);

  expect(cardType.checkCardType()).toBe(1);
});

test('check DISCOVER card', () => {
  const cardNumber = '6011450569958391';
  const cardType = new CardType(cardNumber);

  expect(cardType.checkCardType()).toBe(2);
});

test('check JCB card', () => {
  const cardNumber = '3537621665008609338';
  const cardType = new CardType(cardNumber);

  expect(cardType.checkCardType()).toBe(3);
});

test('check DINNERS CLUB card', () => {
  const cardNumber = '36437212168464';
  const cardType = new CardType(cardNumber);

  expect(cardType.checkCardType()).toBe(4);
});

test('check AMERICAN EXPRESS card', () => {
  const cardNumber = '345426328770467';
  const cardType = new CardType(cardNumber);

  expect(cardType.checkCardType()).toBe(5);
});

test('check MIR card', () => {
  const cardNumber = '2200000000000053';
  const cardType = new CardType(cardNumber);

  expect(cardType.checkCardType()).toBe(6);
});
