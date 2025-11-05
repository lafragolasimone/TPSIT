function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;
    fetch('calculate.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'expression=' + encodeURIComponent(expression)
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('display').value = result;
    })
    .catch(error => console.error('Errore:', error));
}
