import generateNumber from './generator.js';

document.addEventListener('DOMContentLoaded', () => {
    const minNumberBox = document.getElementById('min-number');
    const maxNumberBox = document.getElementById('max-number');

    const generatedNumberLabel = document.getElementById('generated-number');
    const generateButtonElement = document.getElementById('generate-button');

    generateButtonElement.addEventListener('click', () => {
        const minNumber = parseInt(minNumberBox.value);
        const maxNumber = parseInt(maxNumberBox.value);

        if (!minNumber || !maxNumber) {
            alert('Enter number(-s)');
            return;
        }

        if (minNumber > maxNumber) {
            alert('Min number is greater than max number');
            return;
        }

        generatedNumberLabel.textContent = `${generateNumber(minNumber, maxNumber)}`;
    });
});
