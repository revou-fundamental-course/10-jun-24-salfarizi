let isCelsiusToFahrenheit = true;

function convert() {
    const inputTemp = document.getElementById('inputTemp').value;
    let outputTemp, calculationText;

    if (isCelsiusToFahrenheit) {
        outputTemp = (inputTemp * 9 / 5) + 32;
        calculationText = `${inputTemp}°C × (9 / 5) + 32 = ${outputTemp.toFixed(2)}°F`;
    } else {
        outputTemp = (inputTemp - 32) * 5 / 9;
        calculationText = `${inputTemp}°F - 32 × (5 / 9) = ${outputTemp.toFixed(2)}°C`;
    }

    document.getElementById('outputTemp').value = outputTemp.toFixed(2);
    document.getElementById('calculation-text').innerText = calculationText;
}

function resetForm() {
    document.getElementById('inputTemp').value = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('calculation-text').innerText = '';
}

function reverseConversion() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
    const inputLabel = document.getElementById('inputLabel');
    const outputLabel = document.getElementById('outputLabel');

    if (isCelsiusToFahrenheit) {
        inputLabel.innerText = 'Celsius (°C):';
        outputLabel.innerText = 'Fahrenheit (°F):';
    } else {
        inputLabel.innerText = 'Fahrenheit (°F):';
        outputLabel.innerText = 'Celsius (°C):';
    }

    const inputTemp = document.getElementById('inputTemp').value;

    if (inputTemp) {
        convert();
    } else {
        resetForm();
    }
}
