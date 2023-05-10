const reverseString = require('./reverseString');

test('returns the reverse of a given string', () => {
  expect(reverseString('jamehs')).toBe('shemaj');
})