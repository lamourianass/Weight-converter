const inputEl = document.getElementById('input')

function updateResults() {
console.log(inputEl.value)
}

inputEl.addEventListener('input', updateResults)
