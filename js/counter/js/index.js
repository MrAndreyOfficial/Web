import { increment, decrement, count } from './counter.js';
import { toggleTheme } from './theme.js';

const counterTextElement = document.getElementById('counter-text');

const plusButtonElement = document.getElementById('plus-button');
const minusButtonElement = document.getElementById('minus-button');

const themeButtonElement = document.getElementById('theme-button');

function updateDisplay() {
    counterTextElement.textContent = count;
}

updateDisplay();

plusButtonElement.addEventListener('click', () => {
    increment();
    updateDisplay();
});

minusButtonElement.addEventListener('click', () => {
    decrement();
    updateDisplay();
});

themeButtonElement.addEventListener('click', toggleTheme);
