const stringLength = require('./string');

test('returns the length of a given string', () => {
  expect(stringLength('rabbit')).toBe(6);

})