/**
 * power
 * @description This function calculates b raised to the power of e (b^e).
 *
 * @param {number} b - The base number.
 * @param {number} e - The exponent (power).
 *
 * @returns {number} - The result of b raised to the power of e.
 *
 * @throws {TypeError} - If either b or e is not a number.
 */
function power(b, e) {
  if (typeof b !== 'number' || typeof e !== 'number') {
    throw new TypeError('Both base and exponent must be numbers');
  }
  return e == 0 ? 1 : (b * power(b, e - 1));
}

const testInput2 = document.getElementById('test-input-2');
const testInput3 = document.getElementById('test-input-3');
const testInputBtn2and3 = document.getElementById('test-btn-2-3');

testInputBtn2and3.addEventListener('click', (event) => {
  const testInputValue1 = parseFloat(testInput2.value);
  const testInputValue2 = parseFloat(testInput3.value);
  const output = document.getElementById('test-output-2-3');
  output.textContent = power(testInputValue1, testInputValue2);
  console.log(power(testInputValue1, testInputValue2));
});
