#!/usr/bin/env node

/**
 * Calculate the result of one of the supported basic arithmetic operations.
 *
 * Supported operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (* or x)
 * - Division (/)
 *
 * @param {number} leftOperand
 * @param {string} operator
 * @param {number} rightOperand
 * @returns {number}
 */
function calculate(leftOperand, operator, rightOperand) {
  if (!Number.isFinite(leftOperand) || !Number.isFinite(rightOperand)) {
    throw new Error('Operands must be valid numbers.');
  }

  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
    case 'x':
      return leftOperand * rightOperand;
    case '/':
      if (rightOperand === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return leftOperand / rightOperand;
    default:
      throw new Error('Supported operators are +, -, *, x, and /.');
  }
}

function main() {
  const [, , leftOperand, operator, rightOperand] = process.argv;
  const leftNumber = Number(leftOperand);
  const rightNumber = Number(rightOperand);

  if (
    leftOperand === undefined ||
    operator === undefined ||
    rightOperand === undefined
  ) {
    console.error('Usage: node src/calculator.js <number> <operator> <number>');
    process.exitCode = 1;
    return;
  }

  try {
    console.log(calculate(leftNumber, operator, rightNumber));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = { calculate };
