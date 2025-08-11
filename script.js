const inputEl = document.getElementById('pounds');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');

let errorTime;

function updateResults() {
  const raw = inputEl.value.trim();
  const pounds = parseFloat(raw);

  // If empty, clear everything and stop
  if (raw === '') {
    resultEl.textContent = '';
    errorEl.textContent = '';
    clearTimeout(errorTime);
    return;
  }

  // Invalid or non-positive number
  if (!Number.isFinite(pounds) || pounds <= 0) {
    errorEl.textContent = 'Enter a valid number!';
    resultEl.textContent = '';
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.textContent = '';
      inputEl.value = '';
    }, 2000);
    return;
  }

  // Valid: clear any error and show result (lbs -> kg)
  clearTimeout(errorTime);
  errorEl.textContent = '';
  const kg = pounds / 2.205;
  resultEl.textContent = kg.toFixed(2);
}

inputEl.addEventListener('input', updateResults);
