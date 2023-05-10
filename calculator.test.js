const Calculator = require('./calculator');

const calculator = new Calculator;

describe('The sum', () => {
  test('is 2.5', () => {
    expect(calculator.add(1.25, 0.75)).toBe(2);
  })

  test('is -500', () => {
    expect(calculator.add(-200, -300)).toBe(-500);
  })

  test('is 5000000', () => {
    expect(calculator.add(4000000, 1000000)).toBe(5000000);
  })

})

describe('The subtraction of these 2 numbers ', () => {
  test('is 0', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  })

  test('is -5.375', () => {
    expect(calculator.subtract(-5, 0.375)).toBe(-5.375);
  })

  test('is -6000000000', () => {
    expect(calculator.subtract(7000000000, 13000000000)).toBe(-6000000000);
  })

})

describe('The multiplication of these 2 numbers ', () => {
  test('is 0', () => {
    expect(calculator.multiply(1, 0)).toBe(0);
  })

  test('is -2.5', () => {
    expect(calculator.multiply(-5, 0.5)).toBe(-2.5);
  })

  test('is 65000000000000000000', () => {
    expect(calculator.multiply(5000000000, 13000000000)).toBe(65000000000000000000);
  })

})

describe('The division of these 2 numbers ', () => {
  test('is 0', () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
  })

  test('is -10', () => {
    expect(calculator.divide(-5, 0.5)).toBe(-10);
  })

  test('is 0.5', () => {
    expect(calculator.divide(5000000000, 10000000000)).toBe(0.5);
  })

})