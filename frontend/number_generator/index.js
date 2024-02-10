import generateNumber from './generator.js';

const generateButton = document.getElementById('generate-button');
const generatedNumberText = document.getElementById('generated-number');

const minNumberBox = document.getElementById('min-number-box');
const maxNumberBox = document.getElementById('max-number-box');

generateButton.addEventListener('click', () => {
    const minNumber = parseInt(minNumberBox.value);
    const maxNumber = parseInt(maxNumberBox.value);

    const isNotEqualToZero = minNumber !== 0 && maxNumber !== 0;

    if ((!minNumber || !maxNumber) && isNotEqualToZero) {
        alert('Enter number(-s)');
        return;
    }
    else if (maxNumber < minNumber) {
        alert(`Enter a max number greater than or equal to the min number.`);
        return;
    }

    const generatedNumber = generateNumber(minNumber, maxNumber);

    generatedNumberText.textContent = generatedNumber;
});
