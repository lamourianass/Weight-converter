const inputEl = document.getElementById('pounds')
const resultEl = document.getElementById('result')

function updateResults() {
const convertedWeight = inputEl.value * 2.205
resultEl.textContent = convertedWeight.toFixed(2)
}

inputEl.addEventListener('input', updateResults)
