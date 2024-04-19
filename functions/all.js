/**
 * Checks if all elements in an array pass a test implemented by the provided callback function.
 *
 * @param {array} arr - The array to be checked.
 * @param {function} callback - The function to be applied to each element in the array.
 *                               It should return a boolean value (true or false).
 * @returns {boolean} True if all elements in the array pass the callback, otherwise false.
 */
function all(arr, callback) {
  return arr.length === 0 ? true : callback(arr[0]) && all(arr.slice(1), callback);
}

const testInput5 = document.getElementById('test-input-5');
const testInputBtn5 = document.getElementById('test-btn-5');

testInput5.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    testInputBtn5.click();
  }
});

testInputBtn5.addEventListener('click', (event) => {
  const testInputValue = testInput5.value.split(',');
  const numberArray = [];
  for (let i = 0; i < testInputValue.length; i++) {
    const num = parseFloat(testInputValue[i]);
    if (!isNaN(num)) {
      numberArray.push(num);
    }
  }
  const output = document.getElementById('test-output-5');
  output.textContent = all(numberArray, (num) => num < 7) ? 'All numbers are less than 7.' : 'There are numbers greater than or equal to 7.';
});
