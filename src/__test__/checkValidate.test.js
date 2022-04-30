import CheckValidate from '../js/checkValidate';

test.each(
  [
    ['valid', '4532769802182153', true],
    ['valid', '6011276708248846749', true],
    ['valid', '36449001852091', true],
    ['invalid', '4532769802182152', false],
    ['invalid', '6011276708248846741', false],
    ['invalid', '36449001852090', false],
  ],
)(('check card number %s'), (_, input, expected) => {
  const checkValidate = new CheckValidate(input);

  expect(checkValidate.luhnAlgorithm()).toBe(expected);
});
