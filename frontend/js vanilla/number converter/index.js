import convertTo from './converter.js';

const types = document.querySelectorAll('#selection-type > .type');

const convertButtonElement = document.getElementById('convertButton');
const convertedValueBox = document.getElementById('converted-value-box');

const selectionType = document.getElementById('selection-type');

const valueBox = document.getElementById('value-box');

let selectedType;

selectionType.addEventListener('change', e => {
    selectedType = e.target.value;
});

convertButtonElement.addEventListener('click', () => {
    if (!selectedType) {
        alert('Select type to convert');
        return;
    }

    const value = valueBox.value.toString();

    convertedValueBox.value = convertTo(selectedType, value);
});
