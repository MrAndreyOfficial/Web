import generateNumber from './generator.js';

const generateButtonElement = document.getElementById('generate-button');
const generatedNumberLabel = document.getElementById('generated-number');

const minNumberBox = document.getElementById('min-number');
const maxNumberBox = document.getElementById('max-number');

generateButtonElement.addEventListener('click', () => {
    const minNumber = parseInt(minNumberBox.value);
    const maxNumber = parseInt(maxNumberBox.value);

    if (isNaN(minNumber) || isNaN(maxNumber)) {
        alert('Enter the numbers');
        return;
    }
    else if (maxNumber < minNumber) {
        alert(`${maxNumber} is less than ${minNumber}`);
        return;
    }

    const generatedNumber = generateNumber(minNumber, maxNumber);

    generatedNumberLabel.textContent = `Generated number: ${generatedNumber}`;
});
