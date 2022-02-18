

const operations = require('./operations.js');
const assert = require('assert');

it('correctly calculates the sum of 7 and 11', () => {
  assert.equal(operations.add(7, 11), 18);
});

it('correctly calculates the sum of -5 and -7', () => {
  assert.equal(operations.add(-5, -7), -12);
});

it('correctly calculates the difference of 25 and 9', () => {
  assert.equal(operations.subtract(25, 9), 16);
});

it('correctly calculates the product of 9 and 9', () => {
  assert.equal(operations.multiply(9, 9), 81);
});

it('correctly calculates the quotient of 180 and 3', () => {
  assert.equal(operations.divide(180, 3), 60);
});

it('indicates failure when a string is used instead of a number', () => {
  assert.equal(operations.validateNumbers('Soufian', 11), false);
});

it('indicates failure when two strings is used instead of numbers', () => {
  assert.equal(operations.validateNumbers('Soufian', 'Soufian'), false);
});

it('successfully runs when two numbers are used', () => {
  assert.equal(operations.validateNumbers(11, 11), true);
});