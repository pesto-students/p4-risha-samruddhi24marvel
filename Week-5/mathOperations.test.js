const { clearScreenDown } = require('readline');
const mathOperations = require('./mathOperations');

test('adds 1 + 2 to equal 3', () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

test('diff 5 - 2 to equal 3', () => {
    expect(mathOperations.diff(5, 2)).toBe(3);
  });

  test('product 1 * 2 to equal 3', () => {
    expect(mathOperations.product(1, 2)).toBe(2);
  });