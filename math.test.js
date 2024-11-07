const { add, subtract, multiply, divide } = require('./maths');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(5);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(1);
});

test('multiplies 4 * 5 to equal 20', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws an error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});