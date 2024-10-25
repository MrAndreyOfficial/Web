import generatePassword from './generator.js';

const generateButtonElement = document.getElementById('generate-button');
const resetButtonElement = document.getElementById('reset-button');

const passwordLengthElement = document.getElementById('password-length');
const generatedPasswordElement = document.getElementById('password');

resetButtonElement.addEventListener('click', () => {
    passwordLengthElement.value = '';
    generatedPasswordElement.textContent = '';
});

generateButtonElement.addEventListener('click', () => {
    const passwordLength = parseInt(passwordLengthElement.value);

    generatedPasswordElement.textContent = generatePassword(passwordLength)
});
