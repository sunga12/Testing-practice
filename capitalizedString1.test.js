const capitalizedString1 = require('./capitalizedString1');

test('Returns a string with the first letter capitalized', () => {
  expect(capitalizedString1('microverse')).toBe('Microverse');
})