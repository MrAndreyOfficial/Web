import generatePassword from './js/generator.js';

const generateButton = document.getElementById('generate-button');
const passwordText = document.getElementById('password-text');

const lengthOfPassword = document.getElementById('length-password-box');
const informationText = document.getElementById('information');

const minLength = lengthOfPassword.min;
const maxLength = lengthOfPassword.max;


generateButton.addEventListener('click', () => {
    const length = parseInt(lengthOfPassword.value);
    
    if (length < minLength || length > maxLength) {
        informationText.textContent = `Password must not be less than ${minLength} and greater than ${maxLength}`;
        return;
    }

    informationText.textContent = '';

    passwordText.textContent = generatePassword(lengthOfPassword.value);
});
