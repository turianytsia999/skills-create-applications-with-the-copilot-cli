const assert = require('node:assert/strict');
const test = require('node:test');

const { calculate } = require('../calculator');

test('addition matches the example operation', () => {
  assert.equal(calculate(2, '+', 3), 5);
});

test('subtraction matches the example operation', () => {
  assert.equal(calculate(10, '-', 4), 6);
});

test('multiplication matches the example operation', () => {
  assert.equal(calculate(45, '*', 2), 90);
});

test('division matches the example operation', () => {
  assert.equal(calculate(20, '/', 5), 4);
});

test('addition supports negative and decimal operands', () => {
  assert.equal(calculate(-2.5, '+', 1.5), -1);
});

test('subtraction supports zero and negative operands', () => {
  assert.equal(calculate(0, '-', -7), 7);
});

test('multiplication supports the x operator', () => {
  assert.equal(calculate(6, 'x', 7), 42);
});

test('multiplication by zero returns zero', () => {
  assert.equal(calculate(123, '*', 0), 0);
});

test('division supports decimal results', () => {
  assert.equal(calculate(5, '/', 2), 2.5);
});

test('division by zero throws an error', () => {
  assert.throws(
    () => calculate(20, '/', 0),
    { message: 'Cannot divide by zero.' },
  );
});

test('non-finite operands throw an error', () => {
  assert.throws(
    () => calculate(Number.NaN, '+', 1),
    { message: 'Operands must be valid numbers.' },
  );
  assert.throws(
    () => calculate(1, '-', Number.POSITIVE_INFINITY),
    { message: 'Operands must be valid numbers.' },
  );
});

test('unsupported operators throw an error', () => {
  assert.throws(
    () => calculate(2, '%', 3),
    { message: 'Supported operators are +, -, *, x, and /.' },
  );
});
