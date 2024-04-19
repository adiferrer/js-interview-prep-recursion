/**
 * sumRange
 * @description This function calculates the sum of all positive integers
 * from 1 up to a given number (n).
 *
 * @param {number} n - The upper limit of the range (inclusive). It must be a positive integer.
 *
 * @returns {number} - The sum of all positive integers from 1 to n.
 */
function sumRange(n) {
  return n === 1 ? n : (n + sumRange(n - 1));
}

const testInput = document.getElementById('test-input-1');
const testInputBtn = document.getElementById('test-btn-1');

testInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    testInputBtn.click();
  }
});

testInputBtn.addEventListener('click', (event) => {
  const testInputValue = parseFloat(testInput.value);
  const output = document.getElementById('test-output-1');
  output.textContent = sumRange(testInputValue);
});
