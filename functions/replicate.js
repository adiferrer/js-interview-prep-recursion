function replicate(i, num) {
  return (i == 0 || i < 0) ? [] : replicate(i - 1, num).concat([num]);
}

const testInput11 = document.getElementById('test-input-11');
const testInput12 = document.getElementById('test-input-12');
const testInputBtn11and12 = document.getElementById('test-btn-11-12');

testInputBtn11and12.addEventListener('click', (event) => {
  const testInputValue1 = parseFloat(testInput11.value);
  const testInputValue2 = parseFloat(testInput12.value);
  const output = document.getElementById('test-output-11-12');
  output.textContent = `[${replicate(testInputValue1, testInputValue2)}]`;
});
