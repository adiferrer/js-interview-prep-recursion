function productOfArray(arr) {
  return arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1));
}

const testInput6 = document.getElementById('test-input-6');
const testInputBtn6 = document.getElementById('test-btn-6');

testInput6.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    testInputBtn6.click();
  }
});

testInputBtn6.addEventListener('click', (event) => {
  const testInputValue = testInput6.value.split(',');
  const numberArray = [];
  for (let i = 0; i < testInputValue.length; i++) {
    const num = parseFloat(testInputValue[i]);
    if (!isNaN(num)) {
      numberArray.push(num);
    }
  }
  const output = document.getElementById('test-output-6');
  output.textContent = productOfArray(numberArray);
});
