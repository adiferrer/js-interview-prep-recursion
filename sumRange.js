// sumRange: takes a number, n, and returns the sum of all numbers from 1 up to n
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
  const testInputValue = parseFloat(document.getElementById('test-input-1').value); // Convert to number
  const output = document.getElementById('test-output-1');
  output.textContent = sumRange(testInputValue);
  console.log(sumRange(testInputValue));
});
