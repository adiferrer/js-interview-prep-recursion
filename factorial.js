/**
 * factorial
 * @description This function calculates the factorial of a non-negative integer n.
 * The factorial of a number n is the product of all positive integers less than or equal to n.
 *
 * @param {number} n - The non-negative integer for which to calculate the factorial.
 *
 * @returns {number} - The factorial of n.
 *
 * @throws {TypeError} - If n is less than 0.
 */
function factorial(n) {
  if (n < 0) {
    throw new TypeError('n must be a non-negative integer');
  }
  return n == 1 ? 1 : n * factorial(n - 1);
}

const testInput4 = document.getElementById('test-input-4');
const testInputBtn4 = document.getElementById('test-btn-4');

testInput4.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    testInputBtn4.click();
  }
});

testInputBtn4.addEventListener('click', (event) => {
  const testInputValue = parseFloat(testInput4.value);
  const output = document.getElementById('test-output-4');
  output.textContent = factorial(testInputValue);
});
